(ns seven-guis.circle-drawer
  (:require
[cljs.test :refer [deftest testing is run-tests]]
    [reagent.core :as reagent]
    [seven-guis.util :as util]))

(defonce component-ref (atom nil))
(defonce component-state (reagent/atom {:circles {}
                                        :selected-circle-id nil
                                        :undo-states '()
                                        :redo-states '()}))
(defonce ui (reagent/atom {:popup {:x 0 :y 0}
                           :context-menu {:visibility "hidden"}
                           :diameter-dialog {:visibility "hidden"}}))

(defn draw-circle [ctx {:keys [x y radius]} fill?]
  (.beginPath ctx)
  (.arc ctx x y radius 0 (* 2 js/Math.PI) true)
  (set! (.-fillStyle ctx) "gray")
  (if fill? (.fill ctx) (.stroke ctx)))

(add-watch component-state :watcher
   (fn [_ _ _ {:keys [circles selected-circle-id]}]
     (when-let [canvas (some-> ^js @component-ref .-shadow (.querySelector "canvas"))]
       (let [ctx (.getContext canvas "2d")
             clear-canvas #(.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
             draw-circles #(dorun (map (partial draw-circle ctx) (vals circles)))
             selected-circle (circles selected-circle-id)
             fill-selected-circle #(when selected-circle (draw-circle ctx selected-circle true))]
         (clear-canvas)
         (draw-circles)
         (fill-selected-circle)
         ))))

(defn create-circle [{:keys [circles] :as state} x y radius]
  (let [next-id (inc (apply max (conj (keys circles) -1)))]
    (update state :circles assoc next-id {:x x :y y :radius radius :id next-id})))

(deftest create-circle-test
  (testing
    (is (= (-> {:circles {}}
               (create-circle 0 0 10)
               :circles)
         {0 {:x 0 :y 0 :radius 10 :id 0}}))
    ))

(defn points-distance [[x1 y1] [x2 y2]]
  (let [square #(* % %)]
    (js/Math.sqrt (+ (square (- x2 x1)) (square (- y2 y1))))))

(deftest points-distance-test
  (testing
    (is (= 5 (points-distance [0 0] [3 4])))
    (is (= 5 (points-distance [1 1] [4 5])))
    (is (= 13 (points-distance [1 1] [6 13])))))

(defn position-relative-to-canvas [evt]
  (when-let [canvas (some-> ^js @component-ref .-shadow (.querySelector "canvas"))]
    (let [ctx (.getContext canvas "2d")
          bound (.getBoundingClientRect canvas)
          scaleX (/ (.-width canvas) (.-width bound))
          scaleY (/ (.-height canvas) (.-height bound))
          x (* (- (.-clientX evt) (.-left bound)) scaleX)
          y (* (- (.-clientY evt) (.-top bound)) scaleY)]
      [x y])))

(defn register-undo [{:keys [circles] :as state} old-circles]
  (if (= circles old-circles)
    state
    (-> state
        (update :undo-states conj old-circles)
        (assoc :redo-states '()))))

(defn on-mouse-move [evt]
  (let [[x y] (position-relative-to-canvas evt)
        distance-from-mouse (fn [{cx :x cy :y}] (points-distance [x y] [cx cy]))
        {:keys [id radius] :as nearest} (first (sort-by distance-from-mouse (vals (:circles @component-state))))]
    (when (and x (< (distance-from-mouse nearest) radius))
      (swap! component-state assoc :selected-circle-id id))))

(defn on-canvas-click [{:keys [circles] :as state} evt]
  (when-let [[x y] (position-relative-to-canvas evt)]
    (-> state
        (create-circle x y 10)
        (register-undo circles))))

(defn open-context-menu [ui-state evt]
  (.preventDefault evt)
  (let [container (some-> ^js @component-ref .-shadow (.querySelector "#container"))
        bound (.getBoundingClientRect container)
        x (- (.-clientX evt) (.-left bound))
        y (- (.-clientY evt) (.-top bound))]
    (-> ui-state
        (assoc-in [:popup :x] x)
        (assoc-in [:popup :y] y)
        (assoc-in [:context-menu :visibility] "visible"))))

(defn dismiss-popup [ui-state evt]
  (-> ui-state
      (assoc-in [:context-menu :visibility] "hidden")
      (assoc-in [:diameter-dialog :visibility] "hidden")))

(defn open-diameter-dialog [ui-state evt]
  (-> ui-state
      (assoc-in [:context-menu :visibility] "hidden")
      (assoc-in [:diameter-dialog :visibility] "visible")))

(defn update-radius [state new-radius]
   (let [id (:selected-circle-id state)]
     (update-in state [:circles id] assoc :radius new-radius)))

(defn diameter-dialog []
  (let [selected-id (:selected-circle-id @component-state)
        {:keys [x y radius]} (-> @component-state :circles (get selected-id))]
    (when (and x (= "visible" (-> @ui :diameter-dialog :visibility)))
      [:div#diameter-dialog.popup
       [:p "Adjust diameter of circle at ("(.toFixed x)", "(.toFixed y)")"]
       [:input#range
        {:type "range"
         :value (-> @component-state :circles (get selected-id) :radius)
         :onChange #(swap! component-state update-radius (-> % .-target .-value js/parseInt))}]])))

(defn apply-undo [{actual-state :circles [restored-circles & _] :undo-states :as state}]
  (-> state
      (update :redo-states conj actual-state)
      (assoc :circles restored-circles)
      (update :undo-states rest)))

(defn apply-redo [{actual-state :circles [restored-circles & _] :redo-states :as state}]
  (-> state
      (update :undo-states conj actual-state)
      (assoc :circles restored-circles)
      (update :redo-states rest)))

(defn component []
  [:<>
   [:style
    (str "
    #container {
      position: relative;
    }
    .dismiss-popup-layer {
      z-index: 1199;
      background-color: rgb(0 0 0 / 0.02);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      visibility: "(if (or (= (-> @ui :context-menu :visibility) "visible")
                           (= (-> @ui :diameter-dialog :visibility) "visible"))
                     "visible"
                     "hidden")";
    }
    .popup {
      z-index: 1200;
      box-shadow: 2px 2px 10px 0px lightgrey;
      padding: 7px;
      width: fit-content;
      background-color: white;
      position: absolute;
      left: "(-> @ui :popup :x)"px;
      top: "(-> @ui :popup :y)"px;
    }
    #context-menu {
      visibility: "(-> @ui :context-menu :visibility)";
    }
    #diameter-dialog {
      visibility: "(-> @ui :diameter-dialog :visibility)";
    }
    #context-menu:hover {
      background-color: lightgray;
      cursor: pointer;
    }
    #range {
      width: 100%;
    }
    canvas {
      width: 100%;
      height: 400px;
      border: 1px solid lightgray;
    }
    .flex-evenly {
      display: flex;
      justify-content: space-evenly;
      padding: 10px;
    }
    button {
      font-size: large;
      padding: 5px 15px;
    }
    ")]
   [:div.flex-evenly
    [:button {:disabled (empty? (:undo-states @component-state))
              :onClick #(swap! component-state apply-undo)} "Undo"]
    [:button {:disabled (empty? (:redo-states @component-state))
              :onClick #(swap! component-state apply-redo)} "Redo"]]
   [:div#container
    [:canvas
     {:onContextMenu #(swap! ui open-context-menu %)
      :onMouseMove on-mouse-move
      :onClick #(swap! component-state on-canvas-click %)}]
    [:div.dismiss-popup-layer {:onClick #(do
                                           (swap! component-state (fn [s] (register-undo s (:old-circles s))))
                                           (swap! ui dismiss-popup %))
                               :onContextMenu #(swap! ui open-context-menu %)}]
    [:div#context-menu.popup {:onClick #(do
                                          (swap! component-state (fn [s] (assoc s :old-circles (:circles s))))
                                          (swap! ui open-diameter-dialog %))} "Adjust diameter.."]
    [diameter-dialog]
    [:p (str (map #(map (fn [[k {:keys [radius id]}]] {radius id}) %) (:undo-states @component-state)))]
    [:p (str @component-state)]
    [:p (str (map #(map (fn [[k {:keys [radius id]}]] {radius id}) %) (:redo-states @component-state)))]
    ]])

(defn ^:dev/after-load register-component! []
  (util/define-custom-element! {:element-name "circle-drawer"
                                :view-component component
                                :this component-ref}))

(register-component!)


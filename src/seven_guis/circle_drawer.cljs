(ns seven-guis.circle-drawer
  (:require
[cljs.test :refer [deftest testing is run-tests]]
    [reagent.core :as reagent]
    [seven-guis.util :as util]))

(defonce component-ref (atom nil))
(defonce component-state (atom {:circles {}
                                :selected-circle-id nil
                                :undo-states []
                                :redo-states []
                                }))
(defonce menu-position (reagent/atom {:x 50 :y 40}))

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

(defn mouse-event [evt f]
  (when-let [canvas (some-> ^js @component-ref .-shadow (.querySelector "canvas"))]
    (let [ctx (.getContext canvas "2d")
          bound (.getBoundingClientRect canvas)
          scaleX (/ (.-width canvas) (.-width bound))
          scaleY (/ (.-height canvas) (.-height bound))
          x (* (- (.-clientX evt) (.-left bound)) scaleX)
          y (* (- (.-clientY evt) (.-top bound)) scaleY)]
      (f x y))))

(defn on-mouse-move [evt]
  (mouse-event
    evt
    (fn [x y]
      (let [distance-from-mouse (fn [{cx :x cy :y}] (points-distance [x y] [cx cy]))
            {:keys [id radius] :as nearest} (first (sort-by distance-from-mouse (vals (:circles @component-state))))]
        (when (< (distance-from-mouse nearest) radius)
          (swap! component-state assoc :selected-circle-id id))))))

(defn on-canvas-click [evt]
  (mouse-event
    evt
    (fn [x y]
      (swap! component-state create-circle x y 10))) )

(defn component []
  [:<>
   [:style
    (str "
    #container {
      position: relative;
    }
    #menu {
      box-shadow: 2px 2px 10px 0px lightgrey;
      padding: 7px;
      width: fit-content;
      background-color: white;
      position: absolute;
      left: "(+ 200 (:x @menu-position))"px;
      top: "(+ 200 94)"px;
    }
    canvas {
      width: 100%;
      height: 400px;
      border: 1px solid lightgray;
    }
    ")]
   [:div#container
    [:canvas
     {:onContextMenu #(js/console.log %)
      :onMouseMove on-mouse-move
      :onClick on-canvas-click}]
    [:div#menu "Adjust diameter.."]]])

(defn ^:dev/after-load register-component! []
  (util/define-custom-element! {:element-name "circle-drawer"
                                :view-component component
                                :this component-ref}))

(register-component!)


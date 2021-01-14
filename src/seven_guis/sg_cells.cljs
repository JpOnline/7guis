(ns seven-guis.sg-cells
  (:require
[cljs.test :refer [deftest testing is run-tests]]
    [reagent.core :as reagent]
    [shadow.cljs.bootstrap.browser :as shadow.bootstrap]
    [seven-guis.util :as util]))

(defonce component-state (reagent/atom {}))

(defonce compile-eval-state (cljs.js/empty-state))

(defn evaluate [s callback]
  (cljs.js/eval-str compile-eval-state
        s
        nil
        {:eval cljs.js/js-eval
         :load (partial shadow.bootstrap/load compile-eval-state)
         :context :expr}
        (fn [result] (do
                       (js/console.log result)
                       (callback result)))))

(defn cell [{:keys [column row string]}]
  (js/console.log (str "Updated "column row" with "string))
  (let [formula? #(when % (clojure.string/starts-with? % "="))
        error (reagent/atom "") 
        value (reagent/atom "")]
    (if (formula? string)
      (evaluate (subs string 1) #(if (:error %)
                                   (do 
                                     (reset! value "#Error")
                                     (reset! error ^js (.-message ^js (.-cause (:error %)))))
                                   (reset! value (:value %))))
      (reset! value string))
    [:span (when @error {:title @error}) @value])
  )

(def num-columns 5)
(def num-rows 7)

(defn component-style []
  [:style
   (str "
   .container {
     display: grid;  
     grid: auto-flow / repeat("num-columns", 100px);
   }
   span {
     padding: 1px 5px;
     border: 1px solid;
   }
   ")])

(defn component []
  [:<>
   [component-style]
   [:div.container
    (doall
     (for [row (range 1 (inc num-rows))
           col (map char (range 65 (+ 65 num-columns)))
           ]
       ^{:key (str col row)}
       [:<>
        [cell {:column col :row row :string (str col row) #_(get-in @component-state [(keyword col) row])}]
        #_[:input {:onChange #(swap! component-state assoc-in [(keyword col) row] (-> % .-target .-value))}]
        #_[:br]]
       ))]
   [cell {:column "A" :row "1" :value (get-in @component-state [:A 1])}]
   [cell {:column "B" :row "1" :value (get-in @component-state [:B 1])}]
   [:input {:onChange #(swap! component-state assoc-in [:A 1] (-> % .-target .-value))}]
   [:br]
   [:input {:onChange #(swap! component-state assoc-in [:B 1] (-> % .-target .-value))}]
   ;; [:input {:onChange #(reset! b1 (-> % .-target .-value))}]
   ]
  )

(defn ^:dev/after-load register-component! []
  (shadow.bootstrap/init compile-eval-state {:path "/cells-evaluation"} prn)
  (util/define-custom-element! {:element-name "sg-cells"
                                :view-component component}))

(register-component!)

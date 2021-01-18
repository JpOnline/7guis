(ns seven-guis.sg-cells
  (:require
[cljs.test :refer [deftest testing is run-tests]]
    [clojure.set :as set]
    [clojure.string :as string]
    [reagent.core :as reagent]
    [seven-guis.util :as util]
    [shadow.cljs.bootstrap.browser :as shadow.bootstrap]))

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

(defn cell [{:keys [column row string selected? editing? error value]}]
  (js/console.log (str "Updated "column row" with "string))
  (let [formula? #(when % (clojure.string/starts-with? % "="))
        onInputBlur #(-> %1
                         (update :ui dissoc :editing)
                         (assoc-in [:domain (keyword column) row :string] %2)
                         (assoc-in [:domain (keyword column) row :value] "Loading..."))
        set-error #(-> %1
                       (assoc-in [:domain (keyword column) row :value] "#Error")
                       (assoc-in [:domain (keyword column) row :error] %2))
        set-value #(-> %1
                       (assoc-in [:domain (keyword column) row :value] %2)
                       (update-in [:domain (keyword column) row] dissoc :error))
        parse-formula (fn [f]
                        (string/replace f
                                        #"[a-zA-Z]\d{1,2}"
                                        #(get-in @component-state [:domain
                                                                   (-> % first string/upper-case keyword)
                                                                   (-> % (subs 1) js/parseInt) :value] "")))
                                        #_(str "(reagent.core/track #(get-in @seven-guis.sg-cells/component-state
                                                       [:domain
                                                        "(-> % first string/upper-case keyword)"
                                                        "(-> % (subs 1) js/parseInt)" :value] \"\"))")
        process-string (fn [s]
                         (if (formula? s)
                           (evaluate (parse-formula (subs s 1)) #(if (:error %)
                                                   (swap! component-state set-error ^js (.-message ^js (.-cause (:error %))))
                                                   (swap! component-state set-value (:value %))))
                           (swap! component-state set-value s)))]
    (process-string string)
    #_(when (formula? string) (parse-formula (subs string 1)))
    (if editing?
      [:input
       {:onBlur #(do (swap! component-state onInputBlur (-> % .-target .-value))
                     #_(process-string (-> % .-target .-value)))
        :autoFocus true
        :defaultValue string}]
      [:span
       {:class (when selected? "selected")
        :title (when error error)
        :onClick #(swap! component-state assoc-in [:ui :selected] #{[column row]})
        :onDoubleClick #(swap! component-state assoc-in [:ui :editing] [column row])}
       value])))

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
     min-height: 22px;
     border: 1px solid lightgray;
   }
   span.selected {
     border: 1px solid blue;
   }
   ")])

(defn component []
  [:<>
   [component-style]
   [:div.container
    (doall
     (for [row (range num-rows)
           col (map char (range 65 (+ 65 num-columns)))
           ]
       ^{:key (str col row)}
       [:<>
        [cell {:column col :row row
               :selected? ((get-in @component-state [:ui :selected] #{}) [col row])
               :editing? (= (get-in @component-state [:ui :editing] []) [col row])
               :string #_(str col row) (get-in @component-state [:domain (keyword col) row :string])
               :value (get-in @component-state [:domain (keyword col) row :value])
               :error (get-in @component-state [:domain (keyword col) row :error])}]
        #_[:input {:onChange #(swap! component-state assoc-in [:domain (keyword col) row] (-> % .-target .-value))}]
        ]
       ))]
   [cell {:column "A" :row "1" :value (get-in @component-state [:domain :A 1])}]
   [cell {:column "B" :row "1" :value (get-in @component-state [:domain :B 1])}]
   [:input {:onChange #(swap! component-state assoc-in [:domain :A 0 :value] (-> % .-target .-value))}]
   [:br]
   [:input {:onChange #(swap! component-state assoc-in [:domain :B 1] (-> % .-target .-value))}]
   ;; [:input {:onChange #(reset! b1 (-> % .-target .-value))}]
   [:br] [:p "Selected " (str (get-in @component-state [:ui :selected]))]
   ]
  )

(defn ^:dev/after-load register-component! []
  (shadow.bootstrap/init compile-eval-state {:path "/cells-evaluation"} prn)
  (util/define-custom-element! {:element-name "sg-cells"
                                :view-component component}))

(register-component!)

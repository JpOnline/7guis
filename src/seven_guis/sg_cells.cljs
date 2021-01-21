(ns seven-guis.sg-cells
  (:require
    [clojure.set :as set]
    [clojure.string :as string]
    [reagent.core :as reagent]
    [seven-guis.util :as util]
    [shadow.cljs.bootstrap.browser :as shadow.bootstrap]))

(defonce component-state (reagent/atom {}))

(def num-columns 5)
(def num-rows 7)
(def cell-regex #"[a-zA-Z]\d{1,2}")

(defonce compile-eval-state (cljs.js/empty-state))

(defn evaluate [s callback]
  (cljs.js/eval-str
    compile-eval-state
    s
    nil
    {:eval cljs.js/js-eval
     :load (partial shadow.bootstrap/load compile-eval-state)
     :context :expr}
    (fn [result] (do (js/console.log result)
                     (callback result)))))

(defn replace-cell-range [formula]
  (let [cell-regex-string (subs (str cell-regex) 1 (dec (count (str cell-regex))))
        row-fn #(-> % (subs 1) js/parseInt)
        col-fn #(-> % first string/upper-case .charCodeAt)
        replace-fn (fn [[_ init final]]
                     (-> (for [n (range (row-fn init) (inc (row-fn final)))
                               c (range (col-fn init) (inc (col-fn final)))]
                           (str (char c) n))
                         (->> (string/join " "))
                         (as-> $ (str "[" $ "]"))))]
    (string/replace formula
                    (re-pattern (str "("cell-regex-string"):("cell-regex-string")"))
                    replace-fn)))

(defn evaluate-cell! [[column row]]
  (let [formula? #(when % (clojure.string/starts-with? % "="))
        parse-formula (fn [formula]
                        (-> formula
                            (subs 1)
                            replace-cell-range
                            (string/replace cell-regex
                                            #(get-in @component-state [:domain
                                                                       (-> % first string/upper-case keyword)
                                                                       (-> % (subs 1) js/parseInt) :value] ""))))
        string (get-in @component-state [:domain column row :string])
        dependants (get-in @component-state [:domain column row :dependants])
        set-error #(-> %1
                       (assoc-in [:domain column row :value] "#Error")
                       (assoc-in [:domain column row :error] %2))
        set-value #(-> %1
                       (assoc-in [:domain column row :value] %2)
                       (update-in [:domain column row] dissoc :error))
        set-and-propagate! (fn [{:keys [value error]}]
                            (if error
                              (swap! component-state set-error ^js (.-message ^js (.-cause error)))
                              (swap! component-state set-value value))
                            (dorun (map evaluate-cell! dependants)))]
    (if (formula? string)
      (evaluate (parse-formula string) set-and-propagate!)
      (set-and-propagate! {:value string}))))

(defonce intercept-undeclared-var-error
  (let [error-log js/console.error]
    (set! js/console.error (fn [& args]
                             (when-let [[_ undeclared] (re-find #"WARNING: Use of undeclared Var cljs.user/(\S+)" (first args))]
                               (js/alert (str "Were you trying to use "undeclared" as a string?\nIf so, try surroding it with double quotes, like \""undeclared"\".")))
                             (apply error-log args)))))


(defn unsubscribe [state [dependant-column dependant-row]]
  (let [old-formula (get-in state [:domain dependant-column dependant-row :string] "")
        cell-references (some->> old-formula replace-cell-range (re-seq cell-regex))
        referenced-column #(-> % first string/upper-case keyword)
        referenced-row #(-> % (subs 1) js/parseInt)]
    (reduce #(update-in %1
                        [:domain (referenced-column %2) (referenced-row %2) :dependants]
                        (partial remove #{[dependant-column dependant-row]}))
            state
            cell-references)))

(defn subscribe [state [dependant-column dependant-row]]
  (let [new-formula (get-in state [:domain dependant-column dependant-row :string] "")
        cell-references (some->> new-formula replace-cell-range (re-seq cell-regex))
        referenced-column #(-> % first string/upper-case keyword)
        referenced-row #(-> % (subs 1) js/parseInt)]
    (reduce #(update-in %1
                        [:domain (referenced-column %2) (referenced-row %2) :dependants]
                        conj
                        [dependant-column dependant-row])
            state
            cell-references)))

(defn cell [{:keys [column row string selected? editing? error value]}]
  (js/console.log (str "Updated "column row" with "string))
  (let [formula? #(when % (clojure.string/starts-with? % "="))
        onInputBlur #(-> %1
                         (update :ui dissoc :editing)
                         (unsubscribe [column row])
                         (assoc-in [:domain column row :string] %2)
                         (subscribe [column row])
                         (assoc-in [:domain column row :value] "Loading..."))]
    (if editing?
      [:input
       {:onBlur #(do (swap! component-state onInputBlur (-> % .-target .-value))
                     (evaluate-cell! [column row]))
        :autoFocus true
        :defaultValue string}]
      [:span
       {:class (when selected? "selected")
        :title (when error error)
        :onClick #(swap! component-state assoc-in [:ui :selected] #{[column row]})
        :onDoubleClick #(swap! component-state assoc-in [:ui :editing] [column row])}
       (str value)])))

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
           col (map (comp keyword char) (range 65 (+ 65 num-columns)))
           ]
       ^{:key (str col row)}
       [:<>
        [cell {:column col :row row
               :selected? ((get-in @component-state [:ui :selected] #{}) [col row])
               :editing? (= (get-in @component-state [:ui :editing] []) [col row])
               :string (get-in @component-state [:domain col row :string])
               :value (get-in @component-state [:domain col row :value])
               :error (get-in @component-state [:domain col row :error])}]
        ]))]
   [cell {:column :A :row "1" :value (get-in @component-state [:domain :A 1])}]
   [cell {:column :B :row "1" :value (get-in @component-state [:domain :B 1])}]
   [:input {:onChange #(swap! component-state assoc-in [:domain :A 0 :value] (-> % .-target .-value))}]
   [:br]
   [:br] [:pre "State " (with-out-str (cljs.pprint/pprint @component-state))]
   ])

(defn ^:dev/after-load register-component! []
  (shadow.bootstrap/init compile-eval-state {:path "/cells-evaluation"} prn)
  (util/define-custom-element! {:element-name "sg-cells"
                                :view-component component}))

(register-component!)

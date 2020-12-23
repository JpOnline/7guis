(ns seven-guis.flight-booker
  (:require
    [reagent.core :as reagent]
    [seven-guis.util :as util]))

(def booking-state (reagent/atom {:return? true
                                  :start-date "01.01.2021"
                                  :return-date "01.01.2021"}))

(defn disable-return? [{:keys [return?]}]
  (not return?))

(defn invalid-date? [date]
  (not (re-find #"^\s*\d\d\D\d\d\D\d\d\d\d\s*$" date)))

(defn component []
  [:<>
   [:style
    "
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    * {
      margin: 2px;
      border-radius: 6px;
      min-width: 160px;
    }
    
    select {
      text-align-last: center;
    }
    " ]
   [:div
    [:select {:onChange #(swap! booking-state assoc :return? (= "return" (-> % .-target .-value)))}
     [:option {:value "one-way"} "One-way Flight"]
     [:option {:value "return"} "Return Flight"]
     ]
    [:input {:type "text"
             :onChange #(swap! booking-state assoc :start-date (process-date (-> % .-target .-value)))
             :style {:backgroundColor (if (invalid-date? (:start-date @booking-state))
                                        "red"
                                        "inherit")}}]
    [:input {:type "text" :disabled (disable-return? @booking-state)
             :style {:backgroundColor (if (and (disable-return? @booking-state)
                                               (invalid-date? (:return-date @booking-state)))
                                        "red"
                                        "inherit")}
             }]
    [:button {:type "button" :disabled true} "Book"]
    ]]
  )

(defn ^:dev/after-load register-component! []
  (util/define-custom-element! {:element-name "flight-booker"
                                :view-component component}))

(register-component!)

(defn process-date [date-string]
  (if (invalid-date? date-string)
    date-string
    (let [[_ day month year] (re-find #"(\d\d)\D(\d\d)\D(\d\d\d\d)" date-string)
        date (js/Date. year (dec month) day) 
        day-str (if (< (.getDate date) 10)
                  (str "0"(.getDate date))
                  (str (.getDate date)))
        month-str (if (< (inc (.getMonth date)) 10)
                    (str "0"(inc (.getMonth date)))
                    (str (inc (.getMonth date))))
        year-str (str (.getFullYear date))
        ]
    (str day-str"."month-str"."year-str)
    ))
  )

(comment
  (require '[cljs.test :refer [is testing]])
  (testing
    (is (= "01.01.2021x" (process-date "01.01.2021x")))
    (is (= "01.01.2021" (process-date "01.01.2021")))
    (is (= "01.01.2021" (process-date "01-13-2020")))
    )
  (testing
    (is (= false (invalid-date? " 01-01-2021"))) 
    (is (= false (invalid-date? "01-01-2021 "))) 
    (is (= true (invalid-date? "bla"))) 
    (is (= true (invalid-date? "15.12.2014x"))) 
    (is (= false (invalid-date? "15.12.2014"))))
  )

(ns seven-guis.flight-booker
  (:require
    [reagent.core :as reagent]
    [seven-guis.util :as util]))

(defonce booking-state (reagent/atom {:return? false
                                      :start-date "01.01.2021"
                                      :return-date "01.01.2021"}))

(defn disable-return? [{:keys [return?]}]
  (not return?))

(defn invalid-date? [date]
  (not (re-find #"^\s*\d\d\D\d\d\D\d\d\d\d\s*$" date)))

(defn get-date [date-string]
  (let [[_ day month year] (re-find #"(\d\d)\D(\d\d)\D(\d\d\d\d)" date-string)]
    (js/Date. year (dec month) day)))

(defn process-date [date-string]
  (if (invalid-date? date-string)
    date-string
    (let [date (get-date date-string)
          [day month year] [(.getDate date) (inc (.getMonth date)) (.getFullYear date)]
        day-str (if (< day 10)
                  (str "0"day)
                  (str day))
        month-str (if (< month 10)
                    (str "0"month)
                    (str month))
        year-str (str year)]
    (str day-str"."month-str"."year-str))))

(defn disable-book-button? [{:keys [return? start-date return-date]}]
  (let [start-date-obj (get-date start-date)
        return-date-obj (get-date return-date)]
    (or (invalid-date? start-date)
        (and return? (invalid-date? return-date))
        (and return? (< return-date-obj start-date-obj)))))

(defn booked-message [{:keys [return? start-date return-date]}]
  (let [way (if return? "two-way" "one-way")
        with-return (when return? (str " with return on "return-date))]
    (str "You have bought a "way" flight on "start-date with-return".")))

(defn component []
  [:<>
   [:style "
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
    "]
   [:div
    [:select {:onChange #(swap! booking-state assoc :return? (= "return" (-> % .-target .-value)))}
     [:option {:value "one-way"} "One-way Flight"]
     [:option {:value "return"} "Return Flight"]]
    [:input {:type "text"
             :value (:start-date @booking-state) 
             :onChange #(swap! booking-state assoc :start-date (process-date (-> % .-target .-value)))
             :style {:backgroundColor (if (invalid-date? (:start-date @booking-state))
                                        "red"
                                        "inherit")}}]
    [:input {:type "text"
             :value (:return-date @booking-state)
             :disabled (disable-return? @booking-state)
             :onChange #(swap! booking-state assoc :return-date (process-date (-> % .-target .-value)))
             :style {:backgroundColor (if (and (not (disable-return? @booking-state))
                                               (invalid-date? (:return-date @booking-state)))
                                        "red"
                                        "inherit")}}]
    [:button {:type "button"
              :onClick #(js/alert (booked-message @booking-state))
              :disabled (disable-book-button? @booking-state)}
     "Book"]]])

(defn ^:dev/after-load register-component! []
  (util/define-custom-element! {:element-name "flight-booker"
                                :view-component component}))

(register-component!)

(comment
  (require '[cljs.test :refer [is testing]])
  (testing
    (is (= "You have bought a one-way flight on 11.04.2022."
           (booked-message {:return? false :start-date "11.04.2022" :return-date "01.01.2021"})))
    (is (= "You have bought a one-way flight on 01.01.2021."
           (booked-message {:return? false :start-date "01.01.2021" :return-date "01.01.2021"})))
    (is (= "You have bought a two-way flight on 01.01.2021 with return on 01.05.2021."
           (booked-message {:return? true :start-date "01.01.2021" :return-date "01.05.2021"})))
    (is (= "You have bought a two-way flight on 01.01.2021 with return on 01.01.2021."
           (booked-message {:return? true :start-date "01.01.2021" :return-date "01.01.2021"}))))
  (testing
    (is (= false (disable-book-button? {:return? true :start-date "01.01.2021" :return-date "01.01.2021"})))
    (is (= false (disable-book-button? {:return? false :start-date "01.01.2021" :return-date "01.01.2020"})))
    (is (= false (disable-book-button? {:return? false :start-date "01.01.2021" :return-date ""})))
    (is (= false (disable-book-button? {:return? false :start-date "01.01.2021" :return-date "wrong"})))
    (is (= true (disable-book-button? {:return? true :start-date "01.01.2021" :return-date "wrong"})))
    (is (= true (disable-book-button? {:return? true :start-date "01.01.2021" :return-date "01.01.2020"})))
    (is (= true (disable-book-button? {:return? true :start-date "wrong" :return-date "01.01.2021"})))
    (is (= true (disable-book-button? {:return? false :start-date "wrong" :return-date "01.01.2021"}))))
  (testing
    (is (= "01.01.2021x" (process-date "01.01.2021x")))
    (is (= "01.01.2021" (process-date "01.01.2021")))
    (is (= "01.01.2021" (process-date "01-13-2020"))))
  (testing
    (is (= false (invalid-date? " 01-01-2021"))) 
    (is (= false (invalid-date? "01-01-2021 "))) 
    (is (= true (invalid-date? "bla"))) 
    (is (= true (invalid-date? "15.12.2014x"))) 
    (is (= false (invalid-date? "15.12.2014"))))
  )

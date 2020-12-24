(ns seven-guis.sg-timer
  (:require
    [reagent.core :as reagent]
    [seven-guis.util :as util]))

(defonce state (reagent/atom {:duration 30
                              :start-timestamp (.getTime (js/Date.))}))

(defonce tick
  (js/setInterval
    #()
    100
    )
  )

(defn component []
  [:div#container
   [:style
    "
    #container {
      max-width: 340px;
    }
    #elapsed-div {
      display: flex;
    }
    meter {
      flex-grow: 1;
      align-self: center;
      margin: 0 5px;
    }
    #button-div {
      display:flex;
      flex-direction: column;
    }
    button {
      width: 50%;
      align-self: center;
    }
    "]
   [:div#elapsed-div
    [:span "Elapsed Time:"]
    [:meter {:min 0 :max (:duration @state) :value (:elapsed @state)}]]
   [:p (:elapsed @state)"s"]
   [:div
    [:p "Duration:"]
    [:input {:type "range"
             :onChange #(swap! state assoc :duration (js/parseInt (-> % .-target .-value)))
             }]
    ]
   [:div#button-div [:button {:type "reset"} "Reset"]]
   ]
  )

(defn ^:dev/after-load register-component! []
  (util/define-custom-element! {:element-name "sg-timer"
                                :view-component component}))

(register-component!)


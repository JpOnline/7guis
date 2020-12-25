(ns seven-guis.sg-timer
  (:require
    [reagent.core :as reagent]
    [seven-guis.util :as util]))

(defonce state (reagent/atom {:duration 50
                              :elapsed 0
                              :start-timestamp (/ (.getTime (js/Date.)) 1000)}))

(defonce tick
  (js/setInterval
    #(swap! state (fn [{:keys [duration elapsed start-timestamp] :as state}]
                    (let [new-elapsed (.toFixed (- (/ (.getTime (js/Date.)) 1000) start-timestamp) 1)
                          new-start (- (/ (.getTime (js/Date.)) 1000) elapsed)]
                      (if (>= elapsed duration)
                        (assoc state :start-timestamp new-start)
                        (assoc state :elapsed new-elapsed)))))
    100))

(defn component []
  [:div#container
   [:style
    "
    #container {
      max-width: 340px;
    }
    .flex {
      display: flex;
    }
    .grow {
      flex-grow: 1;
      align-self: center;
      margin: 0 5px;
    }
    #button-div {
      display:flex;
      flex-direction: column;
      margin: 5px;
    }
    button {
      width: 50%;
      align-self: center;
    }
    "]
   [:div.flex
    [:span "Elapsed Time:"]
    [:meter.grow {:min 0 :max (:duration @state) :value (:elapsed @state)}]]
   [:p (:elapsed @state)"s"]
   [:div.flex
    [:span "Duration:"]
    [:input.grow
     {:type "range"
      :onChange #(swap! state assoc :duration (js/parseInt (-> % .-target .-value)))}]]
   [:div#button-div
    [:button
     {:type "reset"
      :onClick #(swap! state assoc :start-timestamp (/ (.getTime (js/Date.)) 1000))}
     "Reset"]]])

(defn ^:dev/after-load register-component! []
  (util/define-custom-element! {:element-name "sg-timer"
                                :view-component component}))

(register-component!)


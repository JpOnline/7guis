(ns seven-guis.sg-counter
  (:require
    [reagent.core :as reagent]
    [seven-guis.util :as util]))

(def counter-state (reagent/atom 0))

(defn counter []
  [:<>
   ;; It's possible to use encapsulated CSS.
   [:style
    "@import
    \"https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css\""]
   [:div.level
    [:div.level-item
     [:a.button.is-rounded.is-large.is-light
      {:onClick #(swap! counter-state inc)}
      "Count"]]
    [:div.level-item
     [:h1.title @counter-state]]]])

(defn ^:dev/after-load register-component! []
  (util/define-custom-element! {:element-name "sg-counter"
                                :view-component counter}))

(register-component!)

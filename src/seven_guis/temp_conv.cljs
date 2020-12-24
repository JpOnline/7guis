(ns seven-guis.temp-conv
  (:require
    [reagent.core :as reagent]
    [seven-guis.util :as util]))

(defonce temp-state (reagent/atom {:celsius 0
                               :fahrenheit 32}))

(defn celsius->fahrenheit [c]
  (+ 32 (* c (/ 9 5))))

(defn fahrenheit->celsius [f]
  (* (- f 32) (/ 5 9)))

(defn on-change-fahrenheit [temp-map fahrenheit-value]
  (-> temp-map
      (assoc :fahrenheit fahrenheit-value)
      (assoc :celsius (fahrenheit->celsius fahrenheit-value))))

(defn on-change-celsius [temp-map celsius-value]
  (-> temp-map
      (assoc :celsius celsius-value)
      (assoc :fahrenheit (celsius->fahrenheit celsius-value))))

(defn component []
  [:<>
   [:style
    "@import
    \"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css\""]
   [:div.flex.justify-evenly
    [:div.flex.flex-col.border.rounded.border-gray-400
     [:input#celsius.text-center
      {:type "number" :value (:celsius @temp-state)
       :onChange #(swap! temp-state on-change-celsius (-> % .-target .-value))}]
     [:label.text-xl.text-center
      {:for "celsius"}
      "Celsius"]]
   [:span.text-6xl.self-center " = "]
   [:div.flex.flex-col.border.rounded.border-gray-400
    [:input#fahrenheit.text-center
     {:type "number" :value (:fahrenheit @temp-state)
      :onChange #(swap! temp-state on-change-fahrenheit (-> % .-target .-value))}]
    [:label.text-xl.text-center
     {:for "fahrenheit"}
      "Fahrenheit"]]]])

(defn ^:dev/after-load register-component! []
  (util/define-custom-element! {:element-name "temp-conv"
                                :view-component component}))

(register-component!)

(comment
  (= 41 (celsius->fahrenheit 5))
  (= 5 (fahrenheit->celsius 41))
  )

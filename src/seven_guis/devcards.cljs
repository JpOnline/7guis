(ns seven-guis.devcards
  (:require
    [cljsjs.react]
    [cljsjs.react.dom]
    [devcards.core :as devcards :include-macros true :refer [defcard-rg]]

    ;; Defines a web-components
    [seven-guis.sg-counter]
    [seven-guis.temp-conv]
    [seven-guis.flight-booker]
    [seven-guis.sg-timer]
    [seven-guis.sg-crud]
    [seven-guis.circle-drawer]
    [seven-guis.sg-cells]))

(defcard-rg counter
  [:sg-counter]) ;; Uses web-component as html tag.

(defcard-rg temperature-converter
  [:temp-conv])

(defcard-rg book-flight
  [:flight-booker])

(defcard-rg timer
  [:sg-timer])

(defcard-rg crud
  [:sg-crud])

(defcard-rg circle-drawer
  [:circle-drawer])

(defcard-rg cells
  [:<>
   [:p "This is a spreadsheet that evaluate Clojure forms, try writing " [:b "=(+ b0 c0)"] " in " [:b "A0"] " and numbers in " [:b "B0"] " and " [:b "C0"] "."]
   [:p "If you want to represent strings you must surround them in double quotes, e.g. \"a string\"."]
   [:sg-cells]])

(defn ^:export main [] (devcards.core/start-devcard-ui!))

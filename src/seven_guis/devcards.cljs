(ns seven-guis.devcards
  (:require
    [cljsjs.react]
    [cljsjs.react.dom]
    [devcards.core :as devcards :include-macros true :refer [defcard-rg]]

    ;; Defines a web-components
    [seven-guis.sg-counter]
    [seven-guis.temp-conv]))

(defcard-rg counter
  [:sg-counter]) ;; Uses web-component as html tag.

(defcard-rg temperature-converter
  [:temp-conv])

(defn ^:export main [] (devcards.core/start-devcard-ui!))

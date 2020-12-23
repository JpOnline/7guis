(ns seven-guis.devcards
  (:require
    [cljsjs.react]
    [cljsjs.react.dom]
    [devcards.core :as devcards :include-macros true :refer [defcard-rg]]
    [seven-guis.sg-counter])) ;; Defines a web-component

(defcard-rg counter
  [:sg-counter]) ;; Uses web-component as html tag.

(defn ^:export main [] (devcards.core/start-devcard-ui!))

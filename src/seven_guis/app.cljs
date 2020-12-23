(ns seven-guis.app
  (:require
    [reagent.dom]
    [seven-guis.sg-counter]
    ))

(defn ^:dev/after-load init []
  (when-let [el (.getElementById js/document "root")]
    (reagent.dom/render [:sg-counter] el)))

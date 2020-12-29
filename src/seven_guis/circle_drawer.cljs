(ns seven-guis.circle-drawer
  (:require
    [reagent.core :as reagent]
    [seven-guis.util :as util]))

(defonce component-ref (atom nil))

(defn draw-circle []
  (when-let [ctx (some-> ^js @component-ref .-shadow (.querySelector "canvas") (.getContext "2d"))]
    (js/console.log "ctx" ctx)
    ;; (.beginPath ctx)
    ;; (.moveTo ctx 100 100)
    ;; (.arc ctx 75 75 100 0 (* 2 js/Math.PI) true)
    ;; (.stroke ctx)
    ;; (.fillRect ctx 25 25 100 100)
    ;; (.strokeRect ctx 50 50 50 50)
    (set! (.-fillStyle ctx) "rgb(255,0,0)")
    (.beginPath ctx)
    (.rect ctx 100 60 50 30)
    (.fill ctx)
    )
  )

(defn component []
  [:<>
   [:canvas
    {:onClick draw-circle}]])

(defn ^:dev/after-load register-component! []
  (util/define-custom-element! {:element-name "circle-drawer"
                                :view-component component
                                :this component-ref}))

(register-component!)


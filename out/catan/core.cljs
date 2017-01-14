(ns catan.core
  (:require [monet.canvas :as canvas]))

(defn cos [x] (.cos js/Math x))
(defn sin [x] (.sin js/Math x))

(.log js/console (cos 0))

(def canvas-dom (.getElementById js/document "board"))

(def base-state {:x 100 :y 100 :h 600 :w 600})
(def size 100)
(def width (* 2 size))
(def height (* width (/ 3 4)))

(def monet-canvas (canvas/init canvas-dom "2d"))

(defn hex-corner
  [center-x center-y size i]
  (let [angle-rad (* (/ 3.1415 180) (* 60 i))]
    [(+ center-x (* size (cos angle-rad)))
     (+ center-y (* size (sin angle-rad)))]))

(.log js/console (hex-corner 100 100 100 0))

(defn pixel-from-coords
  [x y w h]
  nil)

(defn move-line-to [ctx x y size n] 
  (let [[x1 y1] (hex-corner x y size n)]
        (canvas/line-to ctx x1 y1)))

(defn hexagon 
  [state]
  (let [x (:x state)
        y (:y state)]
    (canvas/entity state
                   nil
                   (fn [ctx val]
                     (-> ctx
                         ; Create hexagon
                         (canvas/fill-style "#002030")
                         (canvas/begin-path)
                         (canvas/move-to x y)
                         (move-line-to x y 30 0)
                         (move-line-to x y 30 1)
                         (move-line-to x y 30 2)
                         (move-line-to x y 30 3)
                         (move-line-to x y 30 4)
                         (move-line-to x y 30 5)
                         (move-line-to x y 30 6)
                         (canvas/close-path)
                         (canvas/fill)
                         ; Create border
                         )))))

(canvas/add-entity monet-canvas :background
                   (hexagon base-state))

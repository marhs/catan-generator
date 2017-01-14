(ns catan.core
  (:require [monet.canvas :as canvas]))

; Math utils
(defn cos [x] (.cos js/Math x))
(defn sin [x] (.sin js/Math x))
(defn sqrt [x] (.sqrt js/Math x))

; Canvas related
(def canvas-dom (.getElementById js/document "board"))
(def monet-canvas (canvas/init canvas-dom "2d"))

; Constants
(def tiles-width 5)
(def tiles-height 5)
(def base-state {:x 100 :y 100 :h 600 :w 600})
(def tile-size 50)
(def width (* 2 tile-size))
(def height (* width (/ 3 4)))
(def colours
  {:rock "#777777"
   :brick "#d36332"
   :pasture "#72af21"
   :grain "#fce84e"
   :forest "#298e49"
   :desert "#ffe3a3"
   :sea "#29738e"})

;;;; Models ;;;;

(def catania
  {1 {:name :1 :i 2 :j 0 :terrain :desert}

   2 {:name :2 :i 0 :j 1 :terrain :grain}
   3 {:name :3 :i 1 :j 1 :terrain :grain}
   4 {:name :4 :i 2 :j 1 :terrain :grain}
   5 {:name :5 :i 3 :j 1 :terrain :grain}
   6 {:name :6 :i 4 :j 1 :terrain :forest}

   7 {:name :7 :i 0 :j 2 :terrain :forest}
   8 {:name :8 :i 1 :j 2 :terrain :forest}
   9 {:name :9 :i 2 :j 2 :terrain :forest}
   10 {:name :10 :i 3 :j 2 :terrain :pasture}
   11 {:name :11 :i 4 :j 2 :terrain :pasture}

   12 {:name :12 :i 0 :j 3 :terrain :pasture}
   13 {:name :13 :i 1 :j 3 :terrain :pasture}
   14 {:name :14 :i 2 :j 3 :terrain :rock}
   15 {:name :15 :i 3 :j 3 :terrain :rock}
   16 {:name :16 :i 4 :j 3 :terrain :rock}

   17 {:name :17 :i 1 :j 4 :terrain :brick}
   18 {:name :18 :i 2 :j 4 :terrain :brick}
   19 {:name :19 :i 3 :j 4 :terrain :brick}

   })

(defn random-generator
  [w h]
  (for [x (range 0 w)
        y (range 0 h)]
    {:name (str x "." y)
     :i x
     :j y
     :terrain (rand-nth (keys colours))}))

(def catanio
  {:tiles (random-generator tiles-height tiles-width)})

;;;;; Views ;;;;;

(defn hex-corner
  "Given a center and a size, return corner coordinates"
  [center-x center-y size i]
  (let [angle-rad (* (/ 3.1415 180) (* 60 i))]
    [(+ center-x (* size (cos angle-rad)))
     (+ center-y (* size (sin angle-rad)))]))


(defn move-line-to [ctx x y size n]
  (let [[x1 y1] (hex-corner x y size n)]
        (canvas/line-to ctx x1 y1)))

(defn coords->pixels
  "Conversion from coordinates to pixels"
  [i j size]
  (let [w (* 2 size)
        h (* w (/ (sqrt 3) 2))
        h1 (* w 0.75)
        offset-y (- h (* (* h 0.5) (mod i 2)))
        y (+ offset-y (* h j))
        x (+ size (* h1 i))]
    [x y]))

(defn draw-hexagon
  [{hexagon-name :name i :i j :j terrain :terrain} size state canvas]
  (let [col-hex (terrain colours)
        [x y] (coords->pixels i j size)]
    (canvas/add-entity canvas hexagon-name
                       (canvas/entity state
                                      nil
                                      (fn [ctx val]
                                        (-> ctx
                                            ; Create hexagon
                                            (canvas/fill-style col-hex)
                                            (canvas/begin-path)
                                            (canvas/move-to x y)
                                            (move-line-to x y size 0)
                                            (move-line-to x y size 1)
                                            (move-line-to x y size 2)
                                            (move-line-to x y size 3)
                                            (move-line-to x y size 4)
                                            (move-line-to x y size 5)
                                            (move-line-to x y size 6)
                                            (canvas/close-path)
                                            (canvas/fill)))))))

;(draw-hexagon (first (:tiles catania)) 100 base-state monet-canvas)
(doall
  (map
    (fn [x] (draw-hexagon x tile-size base-state monet-canvas))
    (vals catania)))

;(canvas/add-entity{:i 0 :j 0 :terrain :forest} monet-canvas :c1
                   ;(draw-hexagon (coords->pixels 0 0 100) 100 :forest base-state))

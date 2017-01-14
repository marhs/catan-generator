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
(def base-state {:x 100 :y 100 :h 600 :w 600})
(def tile-size 50)
(def width (* 2 tile-size))
(def height (* width (/ 3 4)))
(def colours
  {:rock "#777777"
   :clay "#d36332"
   :sheep "#72af21"
   :wheat "#fce84e"
   :wood "#298e49"
   :sea "#29738e"})

(def catania
  {:tiles
   (list
    {:name :c1 :i 0 :j 0 :terrain :sea}
    {:name :c2 :i 0 :j 1 :terrain :sea}
    {:name :c3 :i 0 :j 3 :terrain :wood}
    {:name :c4 :i 1 :j 0 :terrain :clay}
    {:name :c5 :i 1 :j 1 :terrain :sheep}
    {:name :c6 :i 1 :j 2 :terrain :sea}
    {:name :c7 :i 1 :j 3 :terrain :sea}
    {:name :c8 :i 2 :j 0 :terrain :sea}
    {:name :c9 :i 2 :j 1 :terrain :wheat}
    {:name :c10 :i 2 :j 2 :terrain :wood}
    {:name :c11 :i 2 :j 3 :terrain :rock}
    {:name :c12 :i 3 :j 0 :terrain :rock}
    {:name :c13 :i 3 :j 1 :terrain :sea}
    {:name :c14 :i 3 :j 2 :terrain :sea}
    {:name :c15 :i 3 :j 3 :terrain :sea})})

(defn random-generator
  [w h]
  (for [x (range 0 w)
        y (range 0 h)]
    {:name (str x "." y)
     :i x
     :j y
     :terrain (rand-nth (keys colours))}))

(def catanio
  {:tiles (random-generator 10 10)})
(doall (map #(.log js/console %1) (random-generator 2 2)))

(random-generator 4 4)

;(.log js/console (hex-corner 100 100 100 0))

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

(defn create-hexagon
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

;(create-hexagon (first (:tiles catania)) 100 base-state monet-canvas)
(doall
  (map
    (fn [x] (create-hexagon x tile-size base-state monet-canvas))
    (:tiles catanio)))

;(canvas/add-entity{:i 0 :j 0 :terrain :wood} monet-canvas :c1
                   ;(create-hexagon (coords->pixels 0 0 100) 100 :wood base-state))

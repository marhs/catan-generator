(defproject hello-seymore "0.1.0-SNAPSHOT"
    :dependencies [[org.clojure/clojure "1.8.0"]
                   [org.clojure/clojurescript "1.9.229"]
                   [rm-hull/monet "0.3.0"]
                   [quil "2.5.0"]]
    :plugins [[lein-figwheel "0.5.8"]]
    :clean-targets [:target-path "out"]
    :cljsbuild {
      :builds [{:id "dev"
                :source-paths ["src"]
                :figwheel true
                :compiler {:main "catan.core"}
               }]
     })

(ns cells.parser
  (:require
    [clojure.string :as str]
    [clojure.test :as test]))

(def ^:private match-number-re #"(-?\d+(\.\d+)?)")
(def ^:private match-reference-re #"=\W*([a-zA-Z]+\d+)")
(def ^:private match-strings-re  #"(?!=).*")
(def ^:private match-formula-re #"=\W*([a-zA-Z]+)\W*\(\W*([a-zA-Z](\d+):[a-zA-Z](\d+))\W*\)")
(def ^:private match-range-re #"([a-zA-Z])(\d+):[a-zA-Z](\d+)")

(defn cell-range-to-keywords
  "Converts a cell-range, such as A1:A4 to a vector of keywords
  [:A1 :A2 :A3 :A4]"
  [cell-range]
  (let [[_ cell-name lower-range higher-range] (re-matches match-range-re cell-range)
        lower-range (js/parseInt lower-range 10)
        higher-range (js/parseInt higher-range 10)
        cell-name (str/upper-case cell-name)]
      (vec (map #(keyword (str cell-name %)) (range lower-range (inc higher-range))))))

(defn parse-cell-content [content]
  (let [processed-content (str/trim content)]
    (cond
      ; references
      (not (nil? (re-matches match-reference-re processed-content)))
      (keyword (str/upper-case (nth (re-matches match-reference-re processed-content) 1)))

      ; formulas
      (not (nil? (re-matches match-formula-re processed-content)))
      (let [[_ function cell-range lower-range higher-range] (re-matches match-formula-re processed-content)
            lower-range (js/parseInt lower-range 10)
            higher-range (js/parseInt higher-range 10)]
        (if (>= lower-range higher-range)
          :invalid-range
          [:formula (str/upper-case function) (cell-range-to-keywords cell-range)]))

      ; numbers
      (not (nil? (re-matches match-number-re processed-content)))
      (js/parseFloat (first (re-matches match-number-re processed-content)))

      ; strings
      (not (nil? (re-matches match-strings-re processed-content)))
      content

      :else :invalid-content)))

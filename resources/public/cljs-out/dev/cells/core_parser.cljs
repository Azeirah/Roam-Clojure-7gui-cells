(ns cells.core_parser
  (:require
    [clojure.string :as str]))

(in-ns 'cells.core)

(def ^:private match-number-re #"(-?\d+(\.\d+)?)")
(def ^:private match-reference-re #"=\W*([a-zA-Z]+\d+)")
(def ^:private match-strings-re  #"(?!=).*")
(def ^:private match-formula-re #"=\W*([a-zA-Z]+)\W*\(\W*([a-zA-Z](\d+):[a-zA-Z](\d+))\W*\)")

(defn parse-cell-content [content]
  (let [processed-content (str/trim content)]
    (cond
      ; references
      (not (nil? (re-matches match-reference-re processed-content)))
      (keyword (str/upper-case (nth (re-matches match-reference-re processed-content) 1)))

      ; formulas
      (not (nil? (re-matches match-formula-re processed-content)))
      (let [[_ function range lower-range higher-range] (re-matches match-formula-re processed-content)]
        (if (>= lower-range higher-range)
          :invalid-content
          [:formula (str/upper-case function) (keyword (str/upper-case range))]))

      ; numbers
      (not (nil? (re-matches match-number-re processed-content)))
      (js/parseFloat (first (re-matches match-number-re processed-content)))

      ; strings
      (not (nil? (re-matches match-strings-re processed-content)))
      content

      :else :invalid-content)))
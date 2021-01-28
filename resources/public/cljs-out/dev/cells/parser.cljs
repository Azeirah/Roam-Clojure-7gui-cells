(ns cells.parser
  (:require
    [clojure.string :as str]
    [clojure.test :as test]))

(def ^:private match-number-re #"(-?\d+(\.\d+)?)")
(def ^:private match-reference-re #"=\W*([a-zA-Z]+\d+)")
(def ^:private match-strings-re  #"(?!=).*")
(def ^:private match-formula-re #"=\W*([a-zA-Z]+)\W*\(\W*([a-zA-Z](\d+):[a-zA-Z](\d+))\W*\)")
(def ^:private match-range-re #"([a-zA-Z])(\d+):[a-zA-Z](\d+)")

(declare parse-cell-content)

(defn cell-refs-to-parsed [cell-refs spreadsheet]
  (vec (map #(parse-cell-content (:content (% spreadsheet) spreadsheet)) cell-refs)))

; this is inspired by the Clojure code in
; https://github.com/eugenkiss/7guis-Clojure-Seesaw/blob/master/src/sevenguis/cells.clj
; initially, I just returned nameless data-structures.
; But as I wanted to construct a dependency graph from the spreadsheet
; each individual value (such as a reference, or a 'formula', or a number)
; would need a separate case in the cond handling cond handling it.
; Because:
;;; calling:
;;; (for [[cell-ref cell-value]
;;;   {:A1 "=SUM(B1:B2)" :A2 "3"
;;;    :B1 "4" :B2 "3"
;;;    :C1 "=AVG(A1:A2)"}] {cell-ref (cells.parser/parse-cell-content cell-value)})
;;; resulted in
;;; ({:A1 [:formula "SUM" [:B1 :B2]]} {:A2 3} {:B1 4} {:B2 3} {:C1 [:formula "AVG" [:A1 :A2]]})
;;; So see here that the data-format of differing cells differs!
;;; [:formula fn-name [references]] for something like "=sum(a1:a5)"
;;; 3 for "3"
;;; :B1 for "=B1"
;;; But getting the list of references for each value type gets hairy as all
;;; these data-structures vary, so I'll use the same approach as the referenced
;;; Github link. (I wasn't aware of defprotocol nor defrecord before either haha)
(defprotocol Cell
  (evaluate [this data])
  (references [this data])
  (to-str [this]))

(defrecord String [value]
  Cell
  (evaluate [_ spreadsheet] 0.0)
  (references [_ spreadsheet] #{})
  (to-str [_] value))

(defrecord Numeric [value]
  Cell
  (evaluate [_ spreadsheet] value)
  (references [_ spreadsheet] #{})
  (to-str [_] (str value)))

(defrecord Cell-reference [ref]
  Cell
  (evaluate [_ spreadsheet] (:value (ref spreadsheet)))
  (references [_ spreadsheet] #{ref})
  (to-str [_] (str ref)))

(defrecord Formula [function arg-refs]
  Cell
  (evaluate [_ spreadsheet]
    (let [refs (cell-refs-to-parsed arg-refs spreadsheet)
          arg-values (map evaluate refs)]
      (case function
        "SUM" (apply + arg-values)
        "AVG" (/ (apply + arg-values) (count arg-refs))
        :function-unknown)))
  ; this recursively gets all references in-order
  (references [_ spreadsheet] (set arg-refs))
  (to-str [_] (str function "(" (str/join ", " (map to-str arg-refs)) ")")))

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
      (Cell-reference.
        (keyword (str/upper-case (nth (re-matches match-reference-re processed-content) 1))))

      ; formulas
      (not (nil? (re-matches match-formula-re processed-content)))
      (let [[_ function cell-range lower-range higher-range] (re-matches match-formula-re processed-content)
            lower-range (js/parseInt lower-range 10)
            higher-range (js/parseInt higher-range 10)]
        (if (>= lower-range higher-range)
          :invalid-range
          (Formula. (str/upper-case function) (cell-range-to-keywords cell-range))))

      ; numbers
      (not (nil? (re-matches match-number-re processed-content)))
      (Numeric. (js/parseFloat (first (re-matches match-number-re processed-content))))

      ; strings
      (not (nil? (re-matches match-strings-re processed-content)))
      (String. content)

      :else (String. content))))

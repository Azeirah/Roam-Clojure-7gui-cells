(ns cells.parser_test
  (:require
    [cljs.test :refer-macros [deftest is testing]]
    [cells.parser :refer [parse-cell-content cell-range-to-keywords]]))

(deftest correctly-parses-formulas
  ; ranges cannot be inversed or equal. IE A1-A2 is fine, A2-A1 is not fine A1-A1 also not fine
  (is (= :invalid-range (parse-cell-content "=SUM(A4:A1)")))
  (is (= :invalid-range (parse-cell-content "=SUM(A1:A1)")))

  (is (= [:formula "AVG" [:C3 :C4]] (parse-cell-content "=AVG(C3:C4)")))
  (is (= [:formula "AVG" [:C3 :C4 :C5 :C6 :C7 :C8 :C9 :C10]] (parse-cell-content "=avG(C3:C10)")))
  (is (= [:formula "SUM" [:A1 :A2 :A3 :A4]] (parse-cell-content "=SUM(A1:A4)"))))

(deftest correctly-parses-numbers
  (is (= 10.0 (parse-cell-content "10")))
  (is (= 10.0 (parse-cell-content "10.0")))
  (is (= -0.5 (parse-cell-content "-0.5")))
  (is (= 1 (parse-cell-content "  1 "))))

(deftest correctly-parses-references
  (is (= :A1 (parse-cell-content "=A1")))
  (is (= :A1 (parse-cell-content "=a1")))
  (is (= :A1 (parse-cell-content "=  a1")))
  (is (= :C22 (parse-cell-content "  =  C22  ")))
  (is (= :A1 (parse-cell-content "  =a1    ")))
  (is (= :invalid-content (parse-cell-content "=a1-A4")))
  (is (= :invalid-content (parse-cell-content "=  A1-a4     ")))
  (is (= :invalid-content (parse-cell-content "  =  A1-a4     ")))
  (is (= :invalid-content (parse-cell-content "=A1-A4"))))

(deftest correctly-parses-strings
  (is (= "Hello world" (parse-cell-content "Hello world")))
  (is (= "" (parse-cell-content "")))
  (is (= "The sum is = " (parse-cell-content "The sum is = "))))

(deftest converting-ranges-to-keywords
  (is (= [:A1 :A2] (cell-range-to-keywords "A1:A2")))
  (is (= [:A1 :A2] (cell-range-to-keywords "a1:a2")))
  (is (= [:C2 :C3 :C4 :C5] (cell-range-to-keywords "c2:C5"))))
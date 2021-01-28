(ns ^:figwheel-hooks cells.core
  (:require
    [goog.dom :as gdom]
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [clojure.set]
    [cljs.test :refer [deftest is run-tests]]
    [cells.parser]
    [cells.parser :refer [parse-cell-content evaluate references to-str String]]))

(enable-console-print!)

(defonce alphabet "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
(defonce one-to-hundred (vec (range 1 100)))

(defn create-empty-spreadsheet []
  (into {} (for [x alphabet y one-to-hundred]
             [(keyword (str x y)) {:value 0.0 :content "" :referrers #{} :refers-to #{}}])))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (r/atom (create-empty-spreadsheet)))

(defn propagate-cell-updates [state cell-ref]
  (comment
    (println "handling propagation for " cell-ref))
  (doseq [ref (get-in @state [cell-ref :referrers])]
    (let [parsed (parse-cell-content (get-in @state [ref :content]))]
      (comment
        (println cell-ref " has references to " (get-in @state [cell-ref :referrers])))
      (reset! state (assoc-in @state [ref :value] (evaluate parsed @state)))
      (propagate-cell-updates state ref))))

(defn update-spreadsheet
  "Called after finishing up an edit to a single cell."
  [cell-ref state]
  (println (parse-cell-content (get-in @state [cell-ref :content])))
  (let [parsed (parse-cell-content (get-in @state [cell-ref :content]))
        old-refers-to (get-in @state [cell-ref :refers-to])
        current-refers-to (references parsed @state)]
    ; this calls reset! many times, causing the app to rerender unnecessarily many times
    ; no clue how to combine these into one statement though.
    ; still too much of a mutation mindset
    (reset! state (assoc-in @state [cell-ref :value] (evaluate parsed @state)))
    ; remove self from all old references
    (doseq [cell-refs-to-remove-self-from old-refers-to]
      (reset! state (assoc-in @state [cell-refs-to-remove-self-from :referrers]
              (clojure.set/difference (get-in @state [cell-refs-to-remove-self-from :referrers]) #{cell-ref}))))
    ; add self to all new references
    (doseq [cell-refs-to-add-self-to current-refers-to]
      (reset! state (assoc-in @state [cell-refs-to-add-self-to :referrers]
                              (clojure.set/union (get-in @state [cell-refs-to-add-self-to :referrers]) #{cell-ref}))))
    (reset! state (assoc-in @state [cell-ref :refers-to] current-refers-to))
    (println "This cell refers to " current-refers-to)
    (propagate-cell-updates state cell-ref)
    (js/console.log (str "Cell " cell-ref " has changed with content '" (get @state cell-ref) "'"))))

(defn spreadsheet-heading []
  [:thead
   [:tr
    [:th]
    (for [char alphabet] ^{:key char} [:th char])]])

(defn spreadup [input cell-ref]
  (reset! app-state (assoc-in @app-state [cell-ref :content] (-> input .-target .-value))))

(defn cell [content cell-ref value state]
  (let [editing-me (r/atom false)]
    (fn [content cell-ref value state]
      [:td
       [:input {
                :type "text"
                :on-focus #(reset! editing-me true)
                :on-blur #(do (update-spreadsheet cell-ref state) (reset! editing-me false))
                :on-change #(spreadup % cell-ref)
                :value (if @editing-me
                         @content
                         (if (> (count @content) 0)
                           (if (instance? String (parse-cell-content @content)) @content @value)
                           @content))
                }]])))

(defn spreadsheet [state]
  [:table
   [spreadsheet-heading]
   [:tbody
    (doall (for
      [y one-to-hundred]
      ^{:key y}
      [:tr
       [:td y]
      (doall (for [char alphabet]
         (let [reference (str char y)
               keyref (keyword reference)]
           ^{:key reference}
           [cell
            (r/cursor state [keyref :content])
            keyref
            (r/cursor state [keyref :value])
            state])))]))]])

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rdom/render [spreadsheet app-state] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

; arguments come in the form of lists of keywords
; each keyword is a reference to a cell. For instance
; [:A1 :A2 :A3 :A4]
; each cell has three forms
; Its reference:  :A1
; Its content:    =SUM(B1:B4)
; Its value:      5
; The next step is to determine a data-structure fitting the graph-like nature of a spreadsheet.
; let's just prototype a couple
(defn evaluate-cell-content [env]
  )

(comment (let [parsed (parse-cell-content content)]
           (cond
             ;; formulas
             (and (vector? parsed) (= :formula (first parsed)))
             (let [[_ function arg-refs] parsed
                   args (mapcat #(% env) arg-refs)]
               (case function
                 "SUM" (apply + args)
                 "AVG" (/ (apply + args) (count arg-refs))
                 :function-unknown)
               )

             (not (nil? parsed))
             parsed

             :else :invalid-evaluation
             )))

; how do you compute the spreadsheet?
; The oo way has an object 'cell' with an 'evaluate' method on it.
; it gets notified when it changes.
; I'm more comfortable with this option.
; Yet, I opted for a recursive strategy since this is Clojure

; There are two scenarios
; 1) Compute the entire spreadsheet
; 2) Recompute parts of the spreadsheet when something changes.
; Are these somehow equal?

; The first scenario is a little weird, when would this actually happen?
; never!
; But how do you represent change, and what does my evaluation function look like?
; Alternative approach
; 1) Subdivide the given spreadsheet into separate trees
; 2) Change `evaluate` into (fn evaluate [cell tree] ...) where
;    `cell` is a reference to the changed cell
;    `tree` is the dependency tree of the cell.
;


; spreadsheet dependency graph

; Case A
; Simplest case: 1 node
; :A1 holds a value
; {:A1 "hello world!"}
; Graph:
;; :A1

; Case B
; One dependency: linear dependency
; {:A1 "=B1" :B1 "hello world"}
; Graph:
;; :A1 -> :B1

; Case C
; Multiple linearly chained dependencies
; {:A1 "=B1" :B1 "=C1" :C1 "=D1" :D1 "Hello world"}
; Graph:
;; :A1 -> :B1 -> :C1 -> :D1

; Case D
; Branched dependency
; {:A1 "=C1" :B1 "=C1" :C1 "Hello world"}
; Graph:
;; :A1 ->
;;       |-> :C1
;; :B1 ->

; Case E
; Circular dependency (problematic!)
; {:A1 "=B1" :B1 "=A1"}
; Graph:
;; :A1 <-> :B1

; Case F
; Multiple independent graphs within one spreadsheet
; {:A1 "=B1" :B1 "Hello" :C1 "=D1" :D1 " world!"}
; Graph
;; :A1 -> :B1
;; :C1 -> :D1

; So, what can we do? We have three requirements
; 1) The values of all cells get computed
; 2) No subgraph gets recomputed when unchanged
; 3) Disallow circular dependencies

; So far, I'm thinking of these steps
; 1) Subdivide the spreadsheet into independent graphs á la case F
;    This makes it so we have a well-defined data-structure to work with. A dependency graph
; 2) Check whether any graph has a circular dependency. If so, abort the entire thing
;    This is easiest to do within a separate step, instead of performing this -during- computation
;    separating the responsibilities of different algorithms.

; The third step is computation. This is not necessarily very difficult
; Computing each node recursively is just a matter of calling pseudocode like this within the
; compute function
(comment
  (defn compute [cell-reference]
    (let [[content args] (deref-cell cell-reference)])
    (foreach args arg
      (if (is-computed? cell-reference)
        (get-cached-value cell-reference))
        (cache cell-reference (compute cell-reference)))))
; The problem is the caching. When exactly does a reference need to be recomputed?
; I think it is actually not super complicated after a little bit of playing around
; with graphs on paper.
; hypothesis:
; If we change any branch (root or leaf)
; Then take that branch as the root of its respective branches
; all branches need to be recomputed.

; A leaf in a dependency graph always has to contain a value.
; If a leaf changes, everything depending on that leaf needs to be recomputed.

; What if a root changes?
; Only the root itself needs to be recomputed

; What if a branch changes?
; The branch along with the entire lower-branches of the tree need to be recomputed.

; In short, my hypothesis seems to be almost correct, just inverted.
; If a cell changes, recompute that cell along with all of its recursive roots

(deftest simple-evaluations

  (is (= {:A1 "hello"} (evaluate-cell-content {:A1 "hello"})))

  (is (= {:A1 2 :A2 3 :B1 5}
         (evaluate-cell-content
           {:A1 "2" :A2 "3" :B1 "=SUM(A1:A2)"})))

  (is (= {:A1 2 :A2 8 :B1 5}
         (evaluate-cell-content
           {:A1 2 :A2 8 :B1 "=AVG(A1:A2)"})))

  (is (= {:A1 7 :A2 3
          :B1 4 :B2 3
          :C1 5}
         (evaluate-cell-content
           {:A1 "=SUM(B1:B2)" :A2 "3"
            :B1 "4" :B2 "3"
            :C1 "=AVG(A1:A2)"}
           ))))

;(run-tests 'cells.core)

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

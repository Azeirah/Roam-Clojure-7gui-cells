(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [cells.parser_test] [cells.core]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote cells.parser_test) (quote cells.core))
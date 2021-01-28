// Compiled by ClojureScript 1.10.773 {}
goog.provide('cells.core_parser');
goog.require('cljs.core');
goog.require('clojure.string');
cells.core_parser.in_ns.call(null,new cljs.core.Symbol(null,"cells.core","cells.core",-1116263585,null));
cells.core_parser.match_number_re = /(-?\d+(\.\d+)?)/;
cells.core_parser.match_reference_re = /=\W*([a-zA-Z]+\d+)/;
cells.core_parser.match_strings_re = /(?!=).*/;
cells.core_parser.match_formula_re = /=\W*([a-zA-Z]+)\W*\(\W*([a-zA-Z](\d+):[a-zA-Z](\d+))\W*\)/;
cells.core_parser.parse_cell_content = (function cells$core_parser$parse_cell_content(content){
var processed_content = clojure.string.trim.call(null,content);
if((!((cljs.core.re_matches.call(null,cells.core_parser.match_reference_re,processed_content) == null)))){
return cljs.core.keyword.call(null,clojure.string.upper_case.call(null,cljs.core.nth.call(null,cljs.core.re_matches.call(null,cells.core_parser.match_reference_re,processed_content),(1))));
} else {
if((!((cljs.core.re_matches.call(null,cells.core_parser.match_formula_re,processed_content) == null)))){
var vec__12367 = cljs.core.re_matches.call(null,cells.core_parser.match_formula_re,processed_content);
var _ = cljs.core.nth.call(null,vec__12367,(0),null);
var function$ = cljs.core.nth.call(null,vec__12367,(1),null);
var range = cljs.core.nth.call(null,vec__12367,(2),null);
var lower_range = cljs.core.nth.call(null,vec__12367,(3),null);
var higher_range = cljs.core.nth.call(null,vec__12367,(4),null);
if((lower_range >= higher_range)){
return new cljs.core.Keyword(null,"invalid-content","invalid-content",-1702368863);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formula","formula",-1059725192),clojure.string.upper_case.call(null,function$),cljs.core.keyword.call(null,clojure.string.upper_case.call(null,range))], null);
}
} else {
if((!((cljs.core.re_matches.call(null,cells.core_parser.match_number_re,processed_content) == null)))){
return parseFloat(cljs.core.first.call(null,cljs.core.re_matches.call(null,cells.core_parser.match_number_re,processed_content)));
} else {
if((!((cljs.core.re_matches.call(null,cells.core_parser.match_strings_re,processed_content) == null)))){
return content;
} else {
return new cljs.core.Keyword(null,"invalid-content","invalid-content",-1702368863);

}
}
}
}
});

//# sourceMappingURL=core_parser.js.map

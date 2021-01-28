// Compiled by ClojureScript 1.10.773 {}
goog.provide('cells.parser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.test');
cells.parser.match_number_re = /(-?\d+(\.\d+)?)/;
cells.parser.match_reference_re = /=\W*([a-zA-Z]+\d+)/;
cells.parser.match_strings_re = /(?!=).*/;
cells.parser.match_formula_re = /=\W*([a-zA-Z]+)\W*\(\W*([a-zA-Z](\d+):[a-zA-Z](\d+))\W*\)/;
cells.parser.match_range_re = /([a-zA-Z])(\d+):[a-zA-Z](\d+)/;
/**
 * Converts a cell-range, such as A1:A4 to a vector of keywords
 *   [:A1 :A2 :A3 :A4]
 */
cells.parser.cell_range_to_keywords = (function cells$parser$cell_range_to_keywords(cell_range){
var vec__10121 = cljs.core.re_matches.call(null,cells.parser.match_range_re,cell_range);
var _ = cljs.core.nth.call(null,vec__10121,(0),null);
var cell_name = cljs.core.nth.call(null,vec__10121,(1),null);
var lower_range = cljs.core.nth.call(null,vec__10121,(2),null);
var higher_range = cljs.core.nth.call(null,vec__10121,(3),null);
var lower_range__$1 = parseInt(lower_range,(10));
var higher_range__$1 = parseInt(higher_range,(10));
var cell_name__$1 = clojure.string.upper_case.call(null,cell_name);
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__10120_SHARP_){
return cljs.core.keyword.call(null,[cell_name__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10120_SHARP_)].join(''));
}),cljs.core.range.call(null,lower_range__$1,(higher_range__$1 + (1)))));
});
cells.parser.parse_cell_content = (function cells$parser$parse_cell_content(content){
var processed_content = clojure.string.trim.call(null,content);
if((!((cljs.core.re_matches.call(null,cells.parser.match_reference_re,processed_content) == null)))){
return cljs.core.keyword.call(null,clojure.string.upper_case.call(null,cljs.core.nth.call(null,cljs.core.re_matches.call(null,cells.parser.match_reference_re,processed_content),(1))));
} else {
if((!((cljs.core.re_matches.call(null,cells.parser.match_formula_re,processed_content) == null)))){
var vec__10124 = cljs.core.re_matches.call(null,cells.parser.match_formula_re,processed_content);
var _ = cljs.core.nth.call(null,vec__10124,(0),null);
var function$ = cljs.core.nth.call(null,vec__10124,(1),null);
var cell_range = cljs.core.nth.call(null,vec__10124,(2),null);
var lower_range = cljs.core.nth.call(null,vec__10124,(3),null);
var higher_range = cljs.core.nth.call(null,vec__10124,(4),null);
var lower_range__$1 = parseInt(lower_range,(10));
var higher_range__$1 = parseInt(higher_range,(10));
if((lower_range__$1 >= higher_range__$1)){
return new cljs.core.Keyword(null,"invalid-range","invalid-range",13085942);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formula","formula",-1059725192),clojure.string.upper_case.call(null,function$),cells.parser.cell_range_to_keywords.call(null,cell_range)], null);
}
} else {
if((!((cljs.core.re_matches.call(null,cells.parser.match_number_re,processed_content) == null)))){
return parseFloat(cljs.core.first.call(null,cljs.core.re_matches.call(null,cells.parser.match_number_re,processed_content)));
} else {
if((!((cljs.core.re_matches.call(null,cells.parser.match_strings_re,processed_content) == null)))){
return content;
} else {
return new cljs.core.Keyword(null,"invalid-content","invalid-content",-1702368863);

}
}
}
}
});

//# sourceMappingURL=parser.js.map

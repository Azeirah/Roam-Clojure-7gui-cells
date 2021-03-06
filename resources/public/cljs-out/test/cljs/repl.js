// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12789){
var map__12790 = p__12789;
var map__12790__$1 = (((((!((map__12790 == null))))?(((((map__12790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12790):map__12790);
var m = map__12790__$1;
var n = cljs.core.get.call(null,map__12790__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12790__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12792_12824 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12793_12825 = null;
var count__12794_12826 = (0);
var i__12795_12827 = (0);
while(true){
if((i__12795_12827 < count__12794_12826)){
var f_12828 = cljs.core._nth.call(null,chunk__12793_12825,i__12795_12827);
cljs.core.println.call(null,"  ",f_12828);


var G__12829 = seq__12792_12824;
var G__12830 = chunk__12793_12825;
var G__12831 = count__12794_12826;
var G__12832 = (i__12795_12827 + (1));
seq__12792_12824 = G__12829;
chunk__12793_12825 = G__12830;
count__12794_12826 = G__12831;
i__12795_12827 = G__12832;
continue;
} else {
var temp__5720__auto___12833 = cljs.core.seq.call(null,seq__12792_12824);
if(temp__5720__auto___12833){
var seq__12792_12834__$1 = temp__5720__auto___12833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12792_12834__$1)){
var c__4556__auto___12835 = cljs.core.chunk_first.call(null,seq__12792_12834__$1);
var G__12836 = cljs.core.chunk_rest.call(null,seq__12792_12834__$1);
var G__12837 = c__4556__auto___12835;
var G__12838 = cljs.core.count.call(null,c__4556__auto___12835);
var G__12839 = (0);
seq__12792_12824 = G__12836;
chunk__12793_12825 = G__12837;
count__12794_12826 = G__12838;
i__12795_12827 = G__12839;
continue;
} else {
var f_12840 = cljs.core.first.call(null,seq__12792_12834__$1);
cljs.core.println.call(null,"  ",f_12840);


var G__12841 = cljs.core.next.call(null,seq__12792_12834__$1);
var G__12842 = null;
var G__12843 = (0);
var G__12844 = (0);
seq__12792_12824 = G__12841;
chunk__12793_12825 = G__12842;
count__12794_12826 = G__12843;
i__12795_12827 = G__12844;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12845 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12845);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12845)))?cljs.core.second.call(null,arglists_12845):arglists_12845));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12796_12846 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12797_12847 = null;
var count__12798_12848 = (0);
var i__12799_12849 = (0);
while(true){
if((i__12799_12849 < count__12798_12848)){
var vec__12810_12850 = cljs.core._nth.call(null,chunk__12797_12847,i__12799_12849);
var name_12851 = cljs.core.nth.call(null,vec__12810_12850,(0),null);
var map__12813_12852 = cljs.core.nth.call(null,vec__12810_12850,(1),null);
var map__12813_12853__$1 = (((((!((map__12813_12852 == null))))?(((((map__12813_12852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12813_12852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12813_12852):map__12813_12852);
var doc_12854 = cljs.core.get.call(null,map__12813_12853__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12855 = cljs.core.get.call(null,map__12813_12853__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12851);

cljs.core.println.call(null," ",arglists_12855);

if(cljs.core.truth_(doc_12854)){
cljs.core.println.call(null," ",doc_12854);
} else {
}


var G__12856 = seq__12796_12846;
var G__12857 = chunk__12797_12847;
var G__12858 = count__12798_12848;
var G__12859 = (i__12799_12849 + (1));
seq__12796_12846 = G__12856;
chunk__12797_12847 = G__12857;
count__12798_12848 = G__12858;
i__12799_12849 = G__12859;
continue;
} else {
var temp__5720__auto___12860 = cljs.core.seq.call(null,seq__12796_12846);
if(temp__5720__auto___12860){
var seq__12796_12861__$1 = temp__5720__auto___12860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12796_12861__$1)){
var c__4556__auto___12862 = cljs.core.chunk_first.call(null,seq__12796_12861__$1);
var G__12863 = cljs.core.chunk_rest.call(null,seq__12796_12861__$1);
var G__12864 = c__4556__auto___12862;
var G__12865 = cljs.core.count.call(null,c__4556__auto___12862);
var G__12866 = (0);
seq__12796_12846 = G__12863;
chunk__12797_12847 = G__12864;
count__12798_12848 = G__12865;
i__12799_12849 = G__12866;
continue;
} else {
var vec__12815_12867 = cljs.core.first.call(null,seq__12796_12861__$1);
var name_12868 = cljs.core.nth.call(null,vec__12815_12867,(0),null);
var map__12818_12869 = cljs.core.nth.call(null,vec__12815_12867,(1),null);
var map__12818_12870__$1 = (((((!((map__12818_12869 == null))))?(((((map__12818_12869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12818_12869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12818_12869):map__12818_12869);
var doc_12871 = cljs.core.get.call(null,map__12818_12870__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12872 = cljs.core.get.call(null,map__12818_12870__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12868);

cljs.core.println.call(null," ",arglists_12872);

if(cljs.core.truth_(doc_12871)){
cljs.core.println.call(null," ",doc_12871);
} else {
}


var G__12873 = cljs.core.next.call(null,seq__12796_12861__$1);
var G__12874 = null;
var G__12875 = (0);
var G__12876 = (0);
seq__12796_12846 = G__12873;
chunk__12797_12847 = G__12874;
count__12798_12848 = G__12875;
i__12799_12849 = G__12876;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__12820 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12821 = null;
var count__12822 = (0);
var i__12823 = (0);
while(true){
if((i__12823 < count__12822)){
var role = cljs.core._nth.call(null,chunk__12821,i__12823);
var temp__5720__auto___12877__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___12877__$1)){
var spec_12878 = temp__5720__auto___12877__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12878));
} else {
}


var G__12879 = seq__12820;
var G__12880 = chunk__12821;
var G__12881 = count__12822;
var G__12882 = (i__12823 + (1));
seq__12820 = G__12879;
chunk__12821 = G__12880;
count__12822 = G__12881;
i__12823 = G__12882;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__12820);
if(temp__5720__auto____$1){
var seq__12820__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12820__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__12820__$1);
var G__12883 = cljs.core.chunk_rest.call(null,seq__12820__$1);
var G__12884 = c__4556__auto__;
var G__12885 = cljs.core.count.call(null,c__4556__auto__);
var G__12886 = (0);
seq__12820 = G__12883;
chunk__12821 = G__12884;
count__12822 = G__12885;
i__12823 = G__12886;
continue;
} else {
var role = cljs.core.first.call(null,seq__12820__$1);
var temp__5720__auto___12887__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___12887__$2)){
var spec_12888 = temp__5720__auto___12887__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12888));
} else {
}


var G__12889 = cljs.core.next.call(null,seq__12820__$1);
var G__12890 = null;
var G__12891 = (0);
var G__12892 = (0);
seq__12820 = G__12889;
chunk__12821 = G__12890;
count__12822 = G__12891;
i__12823 = G__12892;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__12893 = cljs.core.conj.call(null,via,t);
var G__12894 = cljs.core.ex_cause.call(null,t);
via = G__12893;
t = G__12894;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__12897 = datafied_throwable;
var map__12897__$1 = (((((!((map__12897 == null))))?(((((map__12897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12897):map__12897);
var via = cljs.core.get.call(null,map__12897__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__12897__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__12897__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__12898 = cljs.core.last.call(null,via);
var map__12898__$1 = (((((!((map__12898 == null))))?(((((map__12898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12898):map__12898);
var type = cljs.core.get.call(null,map__12898__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__12898__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__12898__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__12899 = data;
var map__12899__$1 = (((((!((map__12899 == null))))?(((((map__12899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12899):map__12899);
var problems = cljs.core.get.call(null,map__12899__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__12899__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__12899__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__12900 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__12900__$1 = (((((!((map__12900 == null))))?(((((map__12900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12900):map__12900);
var top_data = map__12900__$1;
var source = cljs.core.get.call(null,map__12900__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__12905 = phase;
var G__12905__$1 = (((G__12905 instanceof cljs.core.Keyword))?G__12905.fqn:null);
switch (G__12905__$1) {
case "read-source":
var map__12906 = data;
var map__12906__$1 = (((((!((map__12906 == null))))?(((((map__12906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12906):map__12906);
var line = cljs.core.get.call(null,map__12906__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__12906__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__12908 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__12908__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__12908,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12908);
var G__12908__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__12908__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12908__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__12908__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12908__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__12909 = top_data;
var G__12909__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__12909,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12909);
var G__12909__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__12909__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12909__$1);
var G__12909__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__12909__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12909__$2);
var G__12909__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__12909__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12909__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__12909__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12909__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__12910 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__12910,(0),null);
var method = cljs.core.nth.call(null,vec__12910,(1),null);
var file = cljs.core.nth.call(null,vec__12910,(2),null);
var line = cljs.core.nth.call(null,vec__12910,(3),null);
var G__12913 = top_data;
var G__12913__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__12913,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__12913);
var G__12913__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__12913__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__12913__$1);
var G__12913__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__12913__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__12913__$2);
var G__12913__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__12913__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12913__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__12913__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12913__$4;
}

break;
case "execution":
var vec__12914 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__12914,(0),null);
var method = cljs.core.nth.call(null,vec__12914,(1),null);
var file = cljs.core.nth.call(null,vec__12914,(2),null);
var line = cljs.core.nth.call(null,vec__12914,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__12896_SHARP_){
var or__4126__auto__ = (p1__12896_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__12896_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__12917 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__12917__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__12917,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__12917);
var G__12917__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__12917__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12917__$1);
var G__12917__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__12917__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__12917__$2);
var G__12917__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__12917__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__12917__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__12917__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12917__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12905__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__12921){
var map__12922 = p__12921;
var map__12922__$1 = (((((!((map__12922 == null))))?(((((map__12922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12922):map__12922);
var triage_data = map__12922__$1;
var phase = cljs.core.get.call(null,map__12922__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__12922__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__12922__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__12922__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__12922__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__12922__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__12922__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__12922__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__12924 = phase;
var G__12924__$1 = (((G__12924 instanceof cljs.core.Keyword))?G__12924.fqn:null);
switch (G__12924__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12925_12934 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12926_12935 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12927_12936 = true;
var _STAR_print_fn_STAR__temp_val__12928_12937 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12927_12936);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12928_12937);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__12919_SHARP_){
return cljs.core.dissoc.call(null,p1__12919_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12926_12935);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12925_12934);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12929_12938 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12930_12939 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12931_12940 = true;
var _STAR_print_fn_STAR__temp_val__12932_12941 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12931_12940);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12932_12941);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__12920_SHARP_){
return cljs.core.dissoc.call(null,p1__12920_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12930_12939);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12929_12938);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12924__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map

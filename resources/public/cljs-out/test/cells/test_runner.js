// Compiled by ClojureScript 1.10.773 {}
goog.provide('cells.test_runner');
goog.require('cljs.core');
goog.require('cells.core_test');
goog.require('cells.parser_test');
goog.require('figwheel.main.testing');
cells.test_runner._main = (function cells$test_runner$_main(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10215 = arguments.length;
var i__4737__auto___10216 = (0);
while(true){
if((i__4737__auto___10216 < len__4736__auto___10215)){
args__4742__auto__.push((arguments[i__4737__auto___10216]));

var G__10217 = (i__4737__auto___10216 + (1));
i__4737__auto___10216 = G__10217;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cells.test_runner._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cells.test_runner._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.main.testing.system_exit_on_fail.call(null);

var reporter__6133__auto___10218 = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.call(null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),null], null), null).call(null,reporter__6133__auto___10218))){
} else {
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reporter__6133__auto___10218,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m__6134__auto__){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m__6134__auto__);
}));
}

cljs.test.run_block.call(null,(function (){var env10213 = cljs.test.empty_env.call(null);
var summary10214 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env10213);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10054__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10054__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return cells.parser_test.correctly_parses_formulas;},new cljs.core.Symbol("cells.parser_test","correctly-parses-formulas","cells.parser_test/correctly-parses-formulas",-918959616,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Symbol(null,"correctly-parses-formulas","correctly-parses-formulas",900748469,null),"test/cells/parser_test.cljs",35,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.parser_test.correctly_parses_formulas)?cells.parser_test.correctly_parses_formulas.cljs$lang$test:null)])),new cljs.core.Var(function(){return cells.parser_test.correctly_parses_numbers;},new cljs.core.Symbol("cells.parser_test","correctly-parses-numbers","cells.parser_test/correctly-parses-numbers",-1926181297,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Symbol(null,"correctly-parses-numbers","correctly-parses-numbers",-1296473948,null),"test/cells/parser_test.cljs",34,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.parser_test.correctly_parses_numbers)?cells.parser_test.correctly_parses_numbers.cljs$lang$test:null)])),new cljs.core.Var(function(){return cells.parser_test.correctly_parses_references;},new cljs.core.Symbol("cells.parser_test","correctly-parses-references","cells.parser_test/correctly-parses-references",-1692556586,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Symbol(null,"correctly-parses-references","correctly-parses-references",-2137633605,null),"test/cells/parser_test.cljs",37,1,21,21,cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.parser_test.correctly_parses_references)?cells.parser_test.correctly_parses_references.cljs$lang$test:null)])),new cljs.core.Var(function(){return cells.parser_test.correctly_parses_strings;},new cljs.core.Symbol("cells.parser_test","correctly-parses-strings","cells.parser_test/correctly-parses-strings",967702679,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Symbol(null,"correctly-parses-strings","correctly-parses-strings",891635200,null),"test/cells/parser_test.cljs",34,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.parser_test.correctly_parses_strings)?cells.parser_test.correctly_parses_strings.cljs$lang$test:null)])),new cljs.core.Var(function(){return cells.parser_test.converting_ranges_to_keywords;},new cljs.core.Symbol("cells.parser_test","converting-ranges-to-keywords","cells.parser_test/converting-ranges-to-keywords",1267956744,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Symbol(null,"converting-ranges-to-keywords","converting-ranges-to-keywords",-1139087747,null),"test/cells/parser_test.cljs",39,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.parser_test.converting_ranges_to_keywords)?cells.parser_test.converting_ranges_to_keywords.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10054__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary10214,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary10214),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env10213);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary10214));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary10214),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
}));

(cells.test_runner._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cells.test_runner._main.cljs$lang$applyTo = (function (seq10212){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10212));
}));


//# sourceMappingURL=test_runner.js.map

// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.main.generated.dev_auto_test_runner');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('cljs_test_display.core');
goog.require('cells.parser_test');
goog.require('cells.core');
cljs.test.run_block.call(null,(function (){var env10247 = cljs_test_display.core.init_BANG_.call(null,"app-auto-testing");
var summary10248 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env10247);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10013__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10013__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return cells.parser_test.correctly_parses_formulas;},new cljs.core.Symbol("cells.parser_test","correctly-parses-formulas","cells.parser_test/correctly-parses-formulas",-918959616,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Symbol(null,"correctly-parses-formulas","correctly-parses-formulas",900748469,null),"/home/laura/Documents/cells/test/cells/parser_test.cljs",(35),(1),(6),(6),cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.parser_test.correctly_parses_formulas)?cells.parser_test.correctly_parses_formulas.cljs$lang$test:null)])),new cljs.core.Var(function(){return cells.parser_test.correctly_parses_numbers;},new cljs.core.Symbol("cells.parser_test","correctly-parses-numbers","cells.parser_test/correctly-parses-numbers",-1926181297,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Symbol(null,"correctly-parses-numbers","correctly-parses-numbers",-1296473948,null),"/home/laura/Documents/cells/test/cells/parser_test.cljs",(34),(1),(15),(15),cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.parser_test.correctly_parses_numbers)?cells.parser_test.correctly_parses_numbers.cljs$lang$test:null)])),new cljs.core.Var(function(){return cells.parser_test.correctly_parses_references;},new cljs.core.Symbol("cells.parser_test","correctly-parses-references","cells.parser_test/correctly-parses-references",-1692556586,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Symbol(null,"correctly-parses-references","correctly-parses-references",-2137633605,null),"/home/laura/Documents/cells/test/cells/parser_test.cljs",(37),(1),(21),(21),cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.parser_test.correctly_parses_references)?cells.parser_test.correctly_parses_references.cljs$lang$test:null)])),new cljs.core.Var(function(){return cells.parser_test.correctly_parses_strings;},new cljs.core.Symbol("cells.parser_test","correctly-parses-strings","cells.parser_test/correctly-parses-strings",967702679,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Symbol(null,"correctly-parses-strings","correctly-parses-strings",891635200,null),"/home/laura/Documents/cells/test/cells/parser_test.cljs",(34),(1),(32),(32),cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.parser_test.correctly_parses_strings)?cells.parser_test.correctly_parses_strings.cljs$lang$test:null)])),new cljs.core.Var(function(){return cells.parser_test.converting_ranges_to_keywords;},new cljs.core.Symbol("cells.parser_test","converting-ranges-to-keywords","cells.parser_test/converting-ranges-to-keywords",1267956744,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Symbol(null,"converting-ranges-to-keywords","converting-ranges-to-keywords",-1139087747,null),"/home/laura/Documents/cells/test/cells/parser_test.cljs",(39),(1),(37),(37),cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.parser_test.converting_ranges_to_keywords)?cells.parser_test.converting_ranges_to_keywords.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10013__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cells.parser_test","cells.parser_test",-1714076691,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary10248,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary10248),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env10247);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cells.core","cells.core",-1116263585,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10013__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10013__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return cells.core.simple_evaluations;},new cljs.core.Symbol("cells.core","simple-evaluations","cells.core/simple-evaluations",-997783699,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cells.core","cells.core",-1116263585,null),new cljs.core.Symbol(null,"simple-evaluations","simple-evaluations",991557521,null),"/home/laura/Documents/cells/src/cells/core.cljs",(28),(1),(247),(247),cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.core.simple_evaluations)?cells.core.simple_evaluations.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10013__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cells.core","cells.core",-1116263585,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary10248,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary10248),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env10247);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary10248));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary10248),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());

//# sourceMappingURL=dev_auto_test_runner.js.map

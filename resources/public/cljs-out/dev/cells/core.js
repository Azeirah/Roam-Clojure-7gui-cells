// Compiled by ClojureScript 1.10.773 {}
goog.provide('cells.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.set');
goog.require('cljs.test');
goog.require('cells.parser');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof cells !== 'undefined') && (typeof cells.core !== 'undefined') && (typeof cells.core.alphabet !== 'undefined')){
} else {
cells.core.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if((typeof cells !== 'undefined') && (typeof cells.core !== 'undefined') && (typeof cells.core.one_to_hundred !== 'undefined')){
} else {
cells.core.one_to_hundred = cljs.core.vec.call(null,cljs.core.range.call(null,(1),(100)));
}
cells.core.create_empty_spreadsheet = (function cells$core$create_empty_spreadsheet(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cells$core$create_empty_spreadsheet_$_iter__23979(s__23980){
return (new cljs.core.LazySeq(null,(function (){
var s__23980__$1 = s__23980;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__23980__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__23980__$1,x,xs__6277__auto__,temp__5720__auto__){
return (function cells$core$create_empty_spreadsheet_$_iter__23979_$_iter__23981(s__23982){
return (new cljs.core.LazySeq(null,((function (s__23980__$1,x,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__23982__$1 = s__23982;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__23982__$1);
if(temp__5720__auto____$1){
var s__23982__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23982__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__23982__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__23984 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__23983 = (0);
while(true){
if((i__23983 < size__4528__auto__)){
var y = cljs.core._nth.call(null,c__4527__auto__,i__23983);
cljs.core.chunk_append.call(null,b__23984,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),0.0,new cljs.core.Keyword(null,"content","content",15833224),"",new cljs.core.Keyword(null,"referrers","referrers",826016221),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"refers-to","refers-to",1225305800),cljs.core.PersistentHashSet.EMPTY], null)], null));

var G__23985 = (i__23983 + (1));
i__23983 = G__23985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23984),cells$core$create_empty_spreadsheet_$_iter__23979_$_iter__23981.call(null,cljs.core.chunk_rest.call(null,s__23982__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23984),null);
}
} else {
var y = cljs.core.first.call(null,s__23982__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),0.0,new cljs.core.Keyword(null,"content","content",15833224),"",new cljs.core.Keyword(null,"referrers","referrers",826016221),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"refers-to","refers-to",1225305800),cljs.core.PersistentHashSet.EMPTY], null)], null),cells$core$create_empty_spreadsheet_$_iter__23979_$_iter__23981.call(null,cljs.core.rest.call(null,s__23982__$2)));
}
} else {
return null;
}
break;
}
});})(s__23980__$1,x,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__23980__$1,x,xs__6277__auto__,temp__5720__auto__))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,cells.core.one_to_hundred));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,cells$core$create_empty_spreadsheet_$_iter__23979.call(null,cljs.core.rest.call(null,s__23980__$1)));
} else {
var G__23986 = cljs.core.rest.call(null,s__23980__$1);
s__23980__$1 = G__23986;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cells.core.alphabet);
})());
});
if((typeof cells !== 'undefined') && (typeof cells.core !== 'undefined') && (typeof cells.core.app_state !== 'undefined')){
} else {
cells.core.app_state = reagent.core.atom.call(null,cells.core.create_empty_spreadsheet.call(null));
}
cells.core.propagate_cell_updates = (function cells$core$propagate_cell_updates(state,cell_ref){

var seq__23987 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_ref,new cljs.core.Keyword(null,"referrers","referrers",826016221)], null)));
var chunk__23988 = null;
var count__23989 = (0);
var i__23990 = (0);
while(true){
if((i__23990 < count__23989)){
var ref = cljs.core._nth.call(null,chunk__23988,i__23990);
var parsed_23991 = cells.parser.parse_cell_content.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,new cljs.core.Keyword(null,"content","content",15833224)], null)));

cljs.core.reset_BANG_.call(null,state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,new cljs.core.Keyword(null,"value","value",305978217)], null),cells.parser.evaluate.call(null,parsed_23991,cljs.core.deref.call(null,state))));

cells.core.propagate_cell_updates.call(null,state,ref);


var G__23992 = seq__23987;
var G__23993 = chunk__23988;
var G__23994 = count__23989;
var G__23995 = (i__23990 + (1));
seq__23987 = G__23992;
chunk__23988 = G__23993;
count__23989 = G__23994;
i__23990 = G__23995;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23987);
if(temp__5720__auto__){
var seq__23987__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23987__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23987__$1);
var G__23996 = cljs.core.chunk_rest.call(null,seq__23987__$1);
var G__23997 = c__4556__auto__;
var G__23998 = cljs.core.count.call(null,c__4556__auto__);
var G__23999 = (0);
seq__23987 = G__23996;
chunk__23988 = G__23997;
count__23989 = G__23998;
i__23990 = G__23999;
continue;
} else {
var ref = cljs.core.first.call(null,seq__23987__$1);
var parsed_24000 = cells.parser.parse_cell_content.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,new cljs.core.Keyword(null,"content","content",15833224)], null)));

cljs.core.reset_BANG_.call(null,state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,new cljs.core.Keyword(null,"value","value",305978217)], null),cells.parser.evaluate.call(null,parsed_24000,cljs.core.deref.call(null,state))));

cells.core.propagate_cell_updates.call(null,state,ref);


var G__24001 = cljs.core.next.call(null,seq__23987__$1);
var G__24002 = null;
var G__24003 = (0);
var G__24004 = (0);
seq__23987 = G__24001;
chunk__23988 = G__24002;
count__23989 = G__24003;
i__23990 = G__24004;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Called after finishing up an edit to a single cell.
 */
cells.core.update_spreadsheet = (function cells$core$update_spreadsheet(cell_ref,state){
cljs.core.println.call(null,cells.parser.parse_cell_content.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_ref,new cljs.core.Keyword(null,"content","content",15833224)], null))));

var parsed = cells.parser.parse_cell_content.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_ref,new cljs.core.Keyword(null,"content","content",15833224)], null)));
var old_refers_to = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_ref,new cljs.core.Keyword(null,"refers-to","refers-to",1225305800)], null));
var current_refers_to = cells.parser.references.call(null,parsed,cljs.core.deref.call(null,state));
cljs.core.reset_BANG_.call(null,state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_ref,new cljs.core.Keyword(null,"value","value",305978217)], null),cells.parser.evaluate.call(null,parsed,cljs.core.deref.call(null,state))));

var seq__24005_24013 = cljs.core.seq.call(null,old_refers_to);
var chunk__24006_24014 = null;
var count__24007_24015 = (0);
var i__24008_24016 = (0);
while(true){
if((i__24008_24016 < count__24007_24015)){
var cell_refs_to_remove_self_from_24017 = cljs.core._nth.call(null,chunk__24006_24014,i__24008_24016);
cljs.core.reset_BANG_.call(null,state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_refs_to_remove_self_from_24017,new cljs.core.Keyword(null,"referrers","referrers",826016221)], null),clojure.set.difference.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_refs_to_remove_self_from_24017,new cljs.core.Keyword(null,"referrers","referrers",826016221)], null)),cljs.core.PersistentHashSet.createAsIfByAssoc([cell_ref]))));


var G__24018 = seq__24005_24013;
var G__24019 = chunk__24006_24014;
var G__24020 = count__24007_24015;
var G__24021 = (i__24008_24016 + (1));
seq__24005_24013 = G__24018;
chunk__24006_24014 = G__24019;
count__24007_24015 = G__24020;
i__24008_24016 = G__24021;
continue;
} else {
var temp__5720__auto___24022 = cljs.core.seq.call(null,seq__24005_24013);
if(temp__5720__auto___24022){
var seq__24005_24023__$1 = temp__5720__auto___24022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24005_24023__$1)){
var c__4556__auto___24024 = cljs.core.chunk_first.call(null,seq__24005_24023__$1);
var G__24025 = cljs.core.chunk_rest.call(null,seq__24005_24023__$1);
var G__24026 = c__4556__auto___24024;
var G__24027 = cljs.core.count.call(null,c__4556__auto___24024);
var G__24028 = (0);
seq__24005_24013 = G__24025;
chunk__24006_24014 = G__24026;
count__24007_24015 = G__24027;
i__24008_24016 = G__24028;
continue;
} else {
var cell_refs_to_remove_self_from_24029 = cljs.core.first.call(null,seq__24005_24023__$1);
cljs.core.reset_BANG_.call(null,state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_refs_to_remove_self_from_24029,new cljs.core.Keyword(null,"referrers","referrers",826016221)], null),clojure.set.difference.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_refs_to_remove_self_from_24029,new cljs.core.Keyword(null,"referrers","referrers",826016221)], null)),cljs.core.PersistentHashSet.createAsIfByAssoc([cell_ref]))));


var G__24030 = cljs.core.next.call(null,seq__24005_24023__$1);
var G__24031 = null;
var G__24032 = (0);
var G__24033 = (0);
seq__24005_24013 = G__24030;
chunk__24006_24014 = G__24031;
count__24007_24015 = G__24032;
i__24008_24016 = G__24033;
continue;
}
} else {
}
}
break;
}

var seq__24009_24034 = cljs.core.seq.call(null,current_refers_to);
var chunk__24010_24035 = null;
var count__24011_24036 = (0);
var i__24012_24037 = (0);
while(true){
if((i__24012_24037 < count__24011_24036)){
var cell_refs_to_add_self_to_24038 = cljs.core._nth.call(null,chunk__24010_24035,i__24012_24037);
cljs.core.reset_BANG_.call(null,state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_refs_to_add_self_to_24038,new cljs.core.Keyword(null,"referrers","referrers",826016221)], null),clojure.set.union.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_refs_to_add_self_to_24038,new cljs.core.Keyword(null,"referrers","referrers",826016221)], null)),cljs.core.PersistentHashSet.createAsIfByAssoc([cell_ref]))));


var G__24039 = seq__24009_24034;
var G__24040 = chunk__24010_24035;
var G__24041 = count__24011_24036;
var G__24042 = (i__24012_24037 + (1));
seq__24009_24034 = G__24039;
chunk__24010_24035 = G__24040;
count__24011_24036 = G__24041;
i__24012_24037 = G__24042;
continue;
} else {
var temp__5720__auto___24043 = cljs.core.seq.call(null,seq__24009_24034);
if(temp__5720__auto___24043){
var seq__24009_24044__$1 = temp__5720__auto___24043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24009_24044__$1)){
var c__4556__auto___24045 = cljs.core.chunk_first.call(null,seq__24009_24044__$1);
var G__24046 = cljs.core.chunk_rest.call(null,seq__24009_24044__$1);
var G__24047 = c__4556__auto___24045;
var G__24048 = cljs.core.count.call(null,c__4556__auto___24045);
var G__24049 = (0);
seq__24009_24034 = G__24046;
chunk__24010_24035 = G__24047;
count__24011_24036 = G__24048;
i__24012_24037 = G__24049;
continue;
} else {
var cell_refs_to_add_self_to_24050 = cljs.core.first.call(null,seq__24009_24044__$1);
cljs.core.reset_BANG_.call(null,state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_refs_to_add_self_to_24050,new cljs.core.Keyword(null,"referrers","referrers",826016221)], null),clojure.set.union.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_refs_to_add_self_to_24050,new cljs.core.Keyword(null,"referrers","referrers",826016221)], null)),cljs.core.PersistentHashSet.createAsIfByAssoc([cell_ref]))));


var G__24051 = cljs.core.next.call(null,seq__24009_24044__$1);
var G__24052 = null;
var G__24053 = (0);
var G__24054 = (0);
seq__24009_24034 = G__24051;
chunk__24010_24035 = G__24052;
count__24011_24036 = G__24053;
i__24012_24037 = G__24054;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_ref,new cljs.core.Keyword(null,"refers-to","refers-to",1225305800)], null),current_refers_to));

cljs.core.println.call(null,"This cell refers to ",current_refers_to);

cells.core.propagate_cell_updates.call(null,state,cell_ref);

return console.log(["Cell ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_ref)," has changed with content '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,state),cell_ref)),"'"].join(''));
});
cells.core.spreadsheet_heading = (function cells$core$spreadsheet_heading(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),(function (){var iter__4529__auto__ = (function cells$core$spreadsheet_heading_$_iter__24055(s__24056){
return (new cljs.core.LazySeq(null,(function (){
var s__24056__$1 = s__24056;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__24056__$1);
if(temp__5720__auto__){
var s__24056__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24056__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__24056__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__24058 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__24057 = (0);
while(true){
if((i__24057 < size__4528__auto__)){
var char$ = cljs.core._nth.call(null,c__4527__auto__,i__24057);
cljs.core.chunk_append.call(null,b__24058,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),char$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),char$], null)));

var G__24059 = (i__24057 + (1));
i__24057 = G__24059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24058),cells$core$spreadsheet_heading_$_iter__24055.call(null,cljs.core.chunk_rest.call(null,s__24056__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24058),null);
}
} else {
var char$ = cljs.core.first.call(null,s__24056__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),char$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),char$], null)),cells$core$spreadsheet_heading_$_iter__24055.call(null,cljs.core.rest.call(null,s__24056__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cells.core.alphabet);
})()], null)], null);
});
cells.core.spreadup = (function cells$core$spreadup(input,cell_ref){
return cljs.core.reset_BANG_.call(null,cells.core.app_state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,cells.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_ref,new cljs.core.Keyword(null,"content","content",15833224)], null),input.target.value));
});
cells.core.cell = (function cells$core$cell(content,cell_ref,value,state){
var editing_me = reagent.core.atom.call(null,false);
return (function (content__$1,cell_ref__$1,value__$1,state__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.reset_BANG_.call(null,editing_me,true);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
cells.core.update_spreadsheet.call(null,cell_ref__$1,state__$1);

return cljs.core.reset_BANG_.call(null,editing_me,false);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24060_SHARP_){
return cells.core.spreadup.call(null,p1__24060_SHARP_,cell_ref__$1);
}),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(cljs.core.deref.call(null,editing_me))?cljs.core.deref.call(null,content__$1):(((cljs.core.count.call(null,cljs.core.deref.call(null,content__$1)) > (0)))?(((cells.parser.parse_cell_content.call(null,cljs.core.deref.call(null,content__$1)) instanceof cells.parser.String))?cljs.core.deref.call(null,content__$1):cljs.core.deref.call(null,value__$1)):cljs.core.deref.call(null,content__$1)))], null)], null)], null);
});
});
cells.core.spreadsheet = (function cells$core$spreadsheet(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cells.core.spreadsheet_heading], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function cells$core$spreadsheet_$_iter__24061(s__24062){
return (new cljs.core.LazySeq(null,(function (){
var s__24062__$1 = s__24062;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__24062__$1);
if(temp__5720__auto__){
var s__24062__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24062__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__24062__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__24064 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__24063 = (0);
while(true){
if((i__24063 < size__4528__auto__)){
var y = cljs.core._nth.call(null,c__4527__auto__,i__24063);
cljs.core.chunk_append.call(null,b__24064,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),y], null),cljs.core.doall.call(null,(function (){var iter__4529__auto__ = ((function (i__24063,y,c__4527__auto__,size__4528__auto__,b__24064,s__24062__$2,temp__5720__auto__){
return (function cells$core$spreadsheet_$_iter__24061_$_iter__24065(s__24066){
return (new cljs.core.LazySeq(null,((function (i__24063,y,c__4527__auto__,size__4528__auto__,b__24064,s__24062__$2,temp__5720__auto__){
return (function (){
var s__24066__$1 = s__24066;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__24066__$1);
if(temp__5720__auto____$1){
var s__24066__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24066__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__24066__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__24068 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__24067 = (0);
while(true){
if((i__24067 < size__4528__auto____$1)){
var char$ = cljs.core._nth.call(null,c__4527__auto____$1,i__24067);
cljs.core.chunk_append.call(null,b__24068,(function (){var reference = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
var keyref = cljs.core.keyword.call(null,reference);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cells.core.cell,reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyref,new cljs.core.Keyword(null,"content","content",15833224)], null)),keyref,reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyref,new cljs.core.Keyword(null,"value","value",305978217)], null)),state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reference], null));
})());

var G__24073 = (i__24067 + (1));
i__24067 = G__24073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24068),cells$core$spreadsheet_$_iter__24061_$_iter__24065.call(null,cljs.core.chunk_rest.call(null,s__24066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24068),null);
}
} else {
var char$ = cljs.core.first.call(null,s__24066__$2);
return cljs.core.cons.call(null,(function (){var reference = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
var keyref = cljs.core.keyword.call(null,reference);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cells.core.cell,reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyref,new cljs.core.Keyword(null,"content","content",15833224)], null)),keyref,reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyref,new cljs.core.Keyword(null,"value","value",305978217)], null)),state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reference], null));
})(),cells$core$spreadsheet_$_iter__24061_$_iter__24065.call(null,cljs.core.rest.call(null,s__24066__$2)));
}
} else {
return null;
}
break;
}
});})(i__24063,y,c__4527__auto__,size__4528__auto__,b__24064,s__24062__$2,temp__5720__auto__))
,null,null));
});})(i__24063,y,c__4527__auto__,size__4528__auto__,b__24064,s__24062__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,cells.core.alphabet);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__24074 = (i__24063 + (1));
i__24063 = G__24074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24064),cells$core$spreadsheet_$_iter__24061.call(null,cljs.core.chunk_rest.call(null,s__24062__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24064),null);
}
} else {
var y = cljs.core.first.call(null,s__24062__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),y], null),cljs.core.doall.call(null,(function (){var iter__4529__auto__ = ((function (y,s__24062__$2,temp__5720__auto__){
return (function cells$core$spreadsheet_$_iter__24061_$_iter__24069(s__24070){
return (new cljs.core.LazySeq(null,(function (){
var s__24070__$1 = s__24070;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__24070__$1);
if(temp__5720__auto____$1){
var s__24070__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24070__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__24070__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__24072 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__24071 = (0);
while(true){
if((i__24071 < size__4528__auto__)){
var char$ = cljs.core._nth.call(null,c__4527__auto__,i__24071);
cljs.core.chunk_append.call(null,b__24072,(function (){var reference = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
var keyref = cljs.core.keyword.call(null,reference);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cells.core.cell,reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyref,new cljs.core.Keyword(null,"content","content",15833224)], null)),keyref,reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyref,new cljs.core.Keyword(null,"value","value",305978217)], null)),state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reference], null));
})());

var G__24075 = (i__24071 + (1));
i__24071 = G__24075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24072),cells$core$spreadsheet_$_iter__24061_$_iter__24069.call(null,cljs.core.chunk_rest.call(null,s__24070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24072),null);
}
} else {
var char$ = cljs.core.first.call(null,s__24070__$2);
return cljs.core.cons.call(null,(function (){var reference = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
var keyref = cljs.core.keyword.call(null,reference);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cells.core.cell,reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyref,new cljs.core.Keyword(null,"content","content",15833224)], null)),keyref,reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyref,new cljs.core.Keyword(null,"value","value",305978217)], null)),state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reference], null));
})(),cells$core$spreadsheet_$_iter__24061_$_iter__24069.call(null,cljs.core.rest.call(null,s__24070__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(y,s__24062__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,cells.core.alphabet);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),cells$core$spreadsheet_$_iter__24061.call(null,cljs.core.rest.call(null,s__24062__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cells.core.one_to_hundred);
})())], null)], null);
});
cells.core.get_app_element = (function cells$core$get_app_element(){
return goog.dom.getElement("app");
});
cells.core.mount = (function cells$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cells.core.spreadsheet,cells.core.app_state], null),el);
});
cells.core.mount_app_element = (function cells$core$mount_app_element(){
var temp__5720__auto__ = cells.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return cells.core.mount.call(null,el);
} else {
return null;
}
});
cells.core.evaluate_cell_content = (function cells$core$evaluate_cell_content(env){
return null;
});
cells.core.simple_evaluations = (function cells$core$simple_evaluations(){
return cljs.test.test_var.call(null,cells.core.simple_evaluations.cljs$lang$var);
});
cells.core.simple_evaluations.cljs$lang$test = (function (){
try{var values__9934__auto___24081 = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A1","A1",-514669796),"hello"], null),(new cljs.core.List(null,cells.core.evaluate_cell_content.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A1","A1",-514669796),"hello"], null)),null,(1),null)),(2),null));
var result__9935__auto___24082 = cljs.core.apply.call(null,cljs.core._EQ_,values__9934__auto___24081);
if(cljs.core.truth_(result__9935__auto___24082)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",62,new cljs.core.Keyword(null,"pass","pass",1574159993),7,249,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A1","A1",-514669796),"hello"], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A1","A1",-514669796),"hello"], null))),249,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9934__auto___24081),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",62,new cljs.core.Keyword(null,"fail","fail",1706214930),7,249,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A1","A1",-514669796),"hello"], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A1","A1",-514669796),"hello"], null))),249,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9934__auto___24081),null,(1),null)),(2),null)),null]));
}

}catch (e24077){var t__9985__auto___24083 = e24077;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",62,new cljs.core.Keyword(null,"error","error",-978969032),7,249,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A1","A1",-514669796),"hello"], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A1","A1",-514669796),"hello"], null))),249,t__9985__auto___24083,null]));
}
try{var values__9934__auto___24084 = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(3),new cljs.core.Keyword(null,"B1","B1",-1556607540),(5)], null),(new cljs.core.List(null,cells.core.evaluate_cell_content.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),"2",new cljs.core.Keyword(null,"A2","A2",-1329076341),"3",new cljs.core.Keyword(null,"B1","B1",-1556607540),"=SUM(A1:A2)"], null)),null,(1),null)),(2),null));
var result__9935__auto___24085 = cljs.core.apply.call(null,cljs.core._EQ_,values__9934__auto___24084);
if(cljs.core.truth_(result__9935__auto___24085)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",49,new cljs.core.Keyword(null,"pass","pass",1574159993),7,251,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(3),new cljs.core.Keyword(null,"B1","B1",-1556607540),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),"2",new cljs.core.Keyword(null,"A2","A2",-1329076341),"3",new cljs.core.Keyword(null,"B1","B1",-1556607540),"=SUM(A1:A2)"], null))),253,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9934__auto___24084),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",49,new cljs.core.Keyword(null,"fail","fail",1706214930),7,251,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(3),new cljs.core.Keyword(null,"B1","B1",-1556607540),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),"2",new cljs.core.Keyword(null,"A2","A2",-1329076341),"3",new cljs.core.Keyword(null,"B1","B1",-1556607540),"=SUM(A1:A2)"], null))),253,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9934__auto___24084),null,(1),null)),(2),null)),null]));
}

}catch (e24078){var t__9985__auto___24086 = e24078;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",49,new cljs.core.Keyword(null,"error","error",-978969032),7,251,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(3),new cljs.core.Keyword(null,"B1","B1",-1556607540),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),"2",new cljs.core.Keyword(null,"A2","A2",-1329076341),"3",new cljs.core.Keyword(null,"B1","B1",-1556607540),"=SUM(A1:A2)"], null))),253,t__9985__auto___24086,null]));
}
try{var values__9934__auto___24087 = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(8),new cljs.core.Keyword(null,"B1","B1",-1556607540),(5)], null),(new cljs.core.List(null,cells.core.evaluate_cell_content.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(8),new cljs.core.Keyword(null,"B1","B1",-1556607540),"=AVG(A1:A2)"], null)),null,(1),null)),(2),null));
var result__9935__auto___24088 = cljs.core.apply.call(null,cljs.core._EQ_,values__9934__auto___24087);
if(cljs.core.truth_(result__9935__auto___24088)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),7,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(8),new cljs.core.Keyword(null,"B1","B1",-1556607540),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(8),new cljs.core.Keyword(null,"B1","B1",-1556607540),"=AVG(A1:A2)"], null))),257,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9934__auto___24087),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),7,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(8),new cljs.core.Keyword(null,"B1","B1",-1556607540),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(8),new cljs.core.Keyword(null,"B1","B1",-1556607540),"=AVG(A1:A2)"], null))),257,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9934__auto___24087),null,(1),null)),(2),null)),null]));
}

}catch (e24079){var t__9985__auto___24089 = e24079;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),7,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(8),new cljs.core.Keyword(null,"B1","B1",-1556607540),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A1","A1",-514669796),(2),new cljs.core.Keyword(null,"A2","A2",-1329076341),(8),new cljs.core.Keyword(null,"B1","B1",-1556607540),"=AVG(A1:A2)"], null))),257,t__9985__auto___24089,null]));
}
try{var values__9934__auto__ = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"A1","A1",-514669796),(7),new cljs.core.Keyword(null,"A2","A2",-1329076341),(3),new cljs.core.Keyword(null,"B1","B1",-1556607540),(4),new cljs.core.Keyword(null,"B2","B2",1227222899),(3),new cljs.core.Keyword(null,"C1","C1",2040899200),(5)], null),(new cljs.core.List(null,cells.core.evaluate_cell_content.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"A1","A1",-514669796),"=SUM(B1:B2)",new cljs.core.Keyword(null,"A2","A2",-1329076341),"3",new cljs.core.Keyword(null,"B1","B1",-1556607540),"4",new cljs.core.Keyword(null,"B2","B2",1227222899),"3",new cljs.core.Keyword(null,"C1","C1",2040899200),"=AVG(A1:A2)"], null)),null,(1),null)),(2),null));
var result__9935__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9934__auto__);
if(cljs.core.truth_(result__9935__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",14,new cljs.core.Keyword(null,"pass","pass",1574159993),7,259,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"A1","A1",-514669796),(7),new cljs.core.Keyword(null,"A2","A2",-1329076341),(3),new cljs.core.Keyword(null,"B1","B1",-1556607540),(4),new cljs.core.Keyword(null,"B2","B2",1227222899),(3),new cljs.core.Keyword(null,"C1","C1",2040899200),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"A1","A1",-514669796),"=SUM(B1:B2)",new cljs.core.Keyword(null,"A2","A2",-1329076341),"3",new cljs.core.Keyword(null,"B1","B1",-1556607540),"4",new cljs.core.Keyword(null,"B2","B2",1227222899),"3",new cljs.core.Keyword(null,"C1","C1",2040899200),"=AVG(A1:A2)"], null))),266,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9934__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",14,new cljs.core.Keyword(null,"fail","fail",1706214930),7,259,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"A1","A1",-514669796),(7),new cljs.core.Keyword(null,"A2","A2",-1329076341),(3),new cljs.core.Keyword(null,"B1","B1",-1556607540),(4),new cljs.core.Keyword(null,"B2","B2",1227222899),(3),new cljs.core.Keyword(null,"C1","C1",2040899200),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"A1","A1",-514669796),"=SUM(B1:B2)",new cljs.core.Keyword(null,"A2","A2",-1329076341),"3",new cljs.core.Keyword(null,"B1","B1",-1556607540),"4",new cljs.core.Keyword(null,"B2","B2",1227222899),"3",new cljs.core.Keyword(null,"C1","C1",2040899200),"=AVG(A1:A2)"], null))),266,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9934__auto__),null,(1),null)),(2),null)),null]));
}

return result__9935__auto__;
}catch (e24080){var t__9985__auto__ = e24080;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/laura/Documents/cells/src/cells/core.cljs",14,new cljs.core.Keyword(null,"error","error",-978969032),7,259,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"A1","A1",-514669796),(7),new cljs.core.Keyword(null,"A2","A2",-1329076341),(3),new cljs.core.Keyword(null,"B1","B1",-1556607540),(4),new cljs.core.Keyword(null,"B2","B2",1227222899),(3),new cljs.core.Keyword(null,"C1","C1",2040899200),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"evaluate-cell-content","evaluate-cell-content",-1167532528,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"A1","A1",-514669796),"=SUM(B1:B2)",new cljs.core.Keyword(null,"A2","A2",-1329076341),"3",new cljs.core.Keyword(null,"B1","B1",-1556607540),"4",new cljs.core.Keyword(null,"B2","B2",1227222899),"3",new cljs.core.Keyword(null,"C1","C1",2040899200),"=AVG(A1:A2)"], null))),266,t__9985__auto__,null]));
}});

(cells.core.simple_evaluations.cljs$lang$var = new cljs.core.Var(function(){return cells.core.simple_evaluations;},new cljs.core.Symbol("cells.core","simple-evaluations","cells.core/simple-evaluations",-997783699,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"cells.core","cells.core",-1116263585,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"simple-evaluations","simple-evaluations",991557521,null),"/home/laura/Documents/cells/src/cells/core.cljs",28,1,247,247,cljs.core.List.EMPTY,null,(cljs.core.truth_(cells.core.simple_evaluations)?cells.core.simple_evaluations.cljs$lang$test:null)])));
cells.core.mount_app_element.call(null);
cells.core.on_reload = (function cells$core$on_reload(){
return cells.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map

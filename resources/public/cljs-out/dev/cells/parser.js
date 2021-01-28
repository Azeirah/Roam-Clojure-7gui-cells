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
cells.parser.cell_refs_to_parsed = (function cells$parser$cell_refs_to_parsed(cell_refs,spreadsheet){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__23821_SHARP_){
return cells.parser.parse_cell_content.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$2(p1__23821_SHARP_.call(null,spreadsheet),spreadsheet));
}),cell_refs));
});

/**
 * @interface
 */
cells.parser.Cell = function(){};

var cells$parser$Cell$evaluate$dyn_23822 = (function (this$,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.parser.evaluate[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,data);
} else {
var m__4426__auto__ = (cells.parser.evaluate["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,data);
} else {
throw cljs.core.missing_protocol.call(null,"Cell.evaluate",this$);
}
}
});
cells.parser.evaluate = (function cells$parser$evaluate(this$,data){
if((((!((this$ == null)))) && ((!((this$.cells$parser$Cell$evaluate$arity$2 == null)))))){
return this$.cells$parser$Cell$evaluate$arity$2(this$,data);
} else {
return cells$parser$Cell$evaluate$dyn_23822.call(null,this$,data);
}
});

var cells$parser$Cell$references$dyn_23823 = (function (this$,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.parser.references[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,data);
} else {
var m__4426__auto__ = (cells.parser.references["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,data);
} else {
throw cljs.core.missing_protocol.call(null,"Cell.references",this$);
}
}
});
cells.parser.references = (function cells$parser$references(this$,data){
if((((!((this$ == null)))) && ((!((this$.cells$parser$Cell$references$arity$2 == null)))))){
return this$.cells$parser$Cell$references$arity$2(this$,data);
} else {
return cells$parser$Cell$references$dyn_23823.call(null,this$,data);
}
});

var cells$parser$Cell$to_str$dyn_23824 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.parser.to_str[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cells.parser.to_str["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Cell.to-str",this$);
}
}
});
cells.parser.to_str = (function cells$parser$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.cells$parser$Cell$to_str$arity$1 == null)))))){
return this$.cells$parser$Cell$to_str$arity$1(this$);
} else {
return cells$parser$Cell$to_str$dyn_23824.call(null,this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cells.parser.Cell}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cells.parser.String = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cells.parser.String.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cells.parser.String.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23826,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23830 = k23826;
var G__23830__$1 = (((G__23830 instanceof cljs.core.Keyword))?G__23830.fqn:null);
switch (G__23830__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23826,else__4383__auto__);

}
}));

(cells.parser.String.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23831){
var vec__23832 = p__23831;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23832,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23832,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cells.parser.String.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cells.parser.String{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(cells.parser.String.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23825){
var self__ = this;
var G__23825__$1 = this;
return (new cljs.core.RecordIter((0),G__23825__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cells.parser.String.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cells.parser.String.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cells.parser.String(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(cells.parser.String.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(cells.parser.String.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1670135836 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cells.parser.String.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23827,other23828){
var self__ = this;
var this23827__$1 = this;
return (((!((other23828 == null)))) && ((this23827__$1.constructor === other23828.constructor)) && (cljs.core._EQ_.call(null,this23827__$1.value,other23828.value)) && (cljs.core._EQ_.call(null,this23827__$1.__extmap,other23828.__extmap)));
}));

(cells.parser.String.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cells.parser.String(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(cells.parser.String.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23825){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23835 = cljs.core.keyword_identical_QMARK_;
var expr__23836 = k__4388__auto__;
if(cljs.core.truth_(pred__23835.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__23836))){
return (new cells.parser.String(G__23825,self__.__meta,self__.__extmap,null));
} else {
return (new cells.parser.String(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23825),null));
}
}));

(cells.parser.String.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(cells.parser.String.prototype.cells$parser$Cell$ = cljs.core.PROTOCOL_SENTINEL);

(cells.parser.String.prototype.cells$parser$Cell$evaluate$arity$2 = (function (_,spreadsheet){
var self__ = this;
var ___$1 = this;
return 0.0;
}));

(cells.parser.String.prototype.cells$parser$Cell$references$arity$2 = (function (_,spreadsheet){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.EMPTY;
}));

(cells.parser.String.prototype.cells$parser$Cell$to_str$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(cells.parser.String.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23825){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cells.parser.String(self__.value,G__23825,self__.__extmap,self__.__hash));
}));

(cells.parser.String.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cells.parser.String.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(cells.parser.String.cljs$lang$type = true);

(cells.parser.String.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cells.parser/String",null,(1),null));
}));

(cells.parser.String.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cells.parser/String");
}));

/**
 * Positional factory function for cells.parser/String.
 */
cells.parser.__GT_String = (function cells$parser$__GT_String(value){
return (new cells.parser.String(value,null,null,null));
});

/**
 * Factory function for cells.parser/String, taking a map of keywords to field values.
 */
cells.parser.map__GT_String = (function cells$parser$map__GT_String(G__23829){
var extmap__4419__auto__ = (function (){var G__23838 = cljs.core.dissoc.call(null,G__23829,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__23829)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23838);
} else {
return G__23838;
}
})();
return (new cells.parser.String(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__23829),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cells.parser.Cell}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cells.parser.Numeric = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cells.parser.Numeric.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cells.parser.Numeric.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23841,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23845 = k23841;
var G__23845__$1 = (((G__23845 instanceof cljs.core.Keyword))?G__23845.fqn:null);
switch (G__23845__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23841,else__4383__auto__);

}
}));

(cells.parser.Numeric.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23846){
var vec__23847 = p__23846;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23847,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23847,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cells.parser.Numeric.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cells.parser.Numeric{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(cells.parser.Numeric.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23840){
var self__ = this;
var G__23840__$1 = this;
return (new cljs.core.RecordIter((0),G__23840__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cells.parser.Numeric.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cells.parser.Numeric.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cells.parser.Numeric(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(cells.parser.Numeric.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(cells.parser.Numeric.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2079045465 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cells.parser.Numeric.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23842,other23843){
var self__ = this;
var this23842__$1 = this;
return (((!((other23843 == null)))) && ((this23842__$1.constructor === other23843.constructor)) && (cljs.core._EQ_.call(null,this23842__$1.value,other23843.value)) && (cljs.core._EQ_.call(null,this23842__$1.__extmap,other23843.__extmap)));
}));

(cells.parser.Numeric.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cells.parser.Numeric(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(cells.parser.Numeric.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23840){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23850 = cljs.core.keyword_identical_QMARK_;
var expr__23851 = k__4388__auto__;
if(cljs.core.truth_(pred__23850.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__23851))){
return (new cells.parser.Numeric(G__23840,self__.__meta,self__.__extmap,null));
} else {
return (new cells.parser.Numeric(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23840),null));
}
}));

(cells.parser.Numeric.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(cells.parser.Numeric.prototype.cells$parser$Cell$ = cljs.core.PROTOCOL_SENTINEL);

(cells.parser.Numeric.prototype.cells$parser$Cell$evaluate$arity$2 = (function (_,spreadsheet){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(cells.parser.Numeric.prototype.cells$parser$Cell$references$arity$2 = (function (_,spreadsheet){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.EMPTY;
}));

(cells.parser.Numeric.prototype.cells$parser$Cell$to_str$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.value);
}));

(cells.parser.Numeric.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23840){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cells.parser.Numeric(self__.value,G__23840,self__.__extmap,self__.__hash));
}));

(cells.parser.Numeric.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cells.parser.Numeric.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(cells.parser.Numeric.cljs$lang$type = true);

(cells.parser.Numeric.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cells.parser/Numeric",null,(1),null));
}));

(cells.parser.Numeric.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cells.parser/Numeric");
}));

/**
 * Positional factory function for cells.parser/Numeric.
 */
cells.parser.__GT_Numeric = (function cells$parser$__GT_Numeric(value){
return (new cells.parser.Numeric(value,null,null,null));
});

/**
 * Factory function for cells.parser/Numeric, taking a map of keywords to field values.
 */
cells.parser.map__GT_Numeric = (function cells$parser$map__GT_Numeric(G__23844){
var extmap__4419__auto__ = (function (){var G__23853 = cljs.core.dissoc.call(null,G__23844,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__23844)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23853);
} else {
return G__23853;
}
})();
return (new cells.parser.Numeric(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__23844),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cells.parser.Cell}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cells.parser.Cell_reference = (function (ref,__meta,__extmap,__hash){
this.ref = ref;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cells.parser.Cell_reference.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cells.parser.Cell_reference.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23856,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23860 = k23856;
var G__23860__$1 = (((G__23860 instanceof cljs.core.Keyword))?G__23860.fqn:null);
switch (G__23860__$1) {
case "ref":
return self__.ref;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23856,else__4383__auto__);

}
}));

(cells.parser.Cell_reference.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23861){
var vec__23862 = p__23861;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23862,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23862,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cells.parser.Cell_reference.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cells.parser.Cell-reference{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null))], null),self__.__extmap));
}));

(cells.parser.Cell_reference.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23855){
var self__ = this;
var G__23855__$1 = this;
return (new cljs.core.RecordIter((0),G__23855__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cells.parser.Cell_reference.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cells.parser.Cell_reference.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cells.parser.Cell_reference(self__.ref,self__.__meta,self__.__extmap,self__.__hash));
}));

(cells.parser.Cell_reference.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(cells.parser.Cell_reference.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-374092672 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cells.parser.Cell_reference.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23857,other23858){
var self__ = this;
var this23857__$1 = this;
return (((!((other23858 == null)))) && ((this23857__$1.constructor === other23858.constructor)) && (cljs.core._EQ_.call(null,this23857__$1.ref,other23858.ref)) && (cljs.core._EQ_.call(null,this23857__$1.__extmap,other23858.__extmap)));
}));

(cells.parser.Cell_reference.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cells.parser.Cell_reference(self__.ref,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(cells.parser.Cell_reference.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23855){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23865 = cljs.core.keyword_identical_QMARK_;
var expr__23866 = k__4388__auto__;
if(cljs.core.truth_(pred__23865.call(null,new cljs.core.Keyword(null,"ref","ref",1289896967),expr__23866))){
return (new cells.parser.Cell_reference(G__23855,self__.__meta,self__.__extmap,null));
} else {
return (new cells.parser.Cell_reference(self__.ref,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23855),null));
}
}));

(cells.parser.Cell_reference.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref,null))], null),self__.__extmap));
}));

(cells.parser.Cell_reference.prototype.cells$parser$Cell$ = cljs.core.PROTOCOL_SENTINEL);

(cells.parser.Cell_reference.prototype.cells$parser$Cell$evaluate$arity$2 = (function (_,spreadsheet){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.ref.call(null,spreadsheet));
}));

(cells.parser.Cell_reference.prototype.cells$parser$Cell$references$arity$2 = (function (_,spreadsheet){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.createAsIfByAssoc([self__.ref]);
}));

(cells.parser.Cell_reference.prototype.cells$parser$Cell$to_str$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.ref);
}));

(cells.parser.Cell_reference.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23855){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cells.parser.Cell_reference(self__.ref,G__23855,self__.__extmap,self__.__hash));
}));

(cells.parser.Cell_reference.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cells.parser.Cell_reference.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ref","ref",-1364538802,null)], null);
}));

(cells.parser.Cell_reference.cljs$lang$type = true);

(cells.parser.Cell_reference.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cells.parser/Cell-reference",null,(1),null));
}));

(cells.parser.Cell_reference.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cells.parser/Cell-reference");
}));

/**
 * Positional factory function for cells.parser/Cell-reference.
 */
cells.parser.__GT_Cell_reference = (function cells$parser$__GT_Cell_reference(ref){
return (new cells.parser.Cell_reference(ref,null,null,null));
});

/**
 * Factory function for cells.parser/Cell-reference, taking a map of keywords to field values.
 */
cells.parser.map__GT_Cell_reference = (function cells$parser$map__GT_Cell_reference(G__23859){
var extmap__4419__auto__ = (function (){var G__23868 = cljs.core.dissoc.call(null,G__23859,new cljs.core.Keyword(null,"ref","ref",1289896967));
if(cljs.core.record_QMARK_.call(null,G__23859)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23868);
} else {
return G__23868;
}
})();
return (new cells.parser.Cell_reference(new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(G__23859),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cells.parser.Cell}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cells.parser.Formula = (function (function$,arg_refs,__meta,__extmap,__hash){
this.function$ = function$;
this.arg_refs = arg_refs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cells.parser.Formula.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cells.parser.Formula.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23871,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23875 = k23871;
var G__23875__$1 = (((G__23875 instanceof cljs.core.Keyword))?G__23875.fqn:null);
switch (G__23875__$1) {
case "function":
return self__.function$;

break;
case "arg-refs":
return self__.arg_refs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23871,else__4383__auto__);

}
}));

(cells.parser.Formula.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23876){
var vec__23877 = p__23876;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23877,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23877,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cells.parser.Formula.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cells.parser.Formula{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg-refs","arg-refs",-1250096732),self__.arg_refs],null))], null),self__.__extmap));
}));

(cells.parser.Formula.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23870){
var self__ = this;
var G__23870__$1 = this;
return (new cljs.core.RecordIter((0),G__23870__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"arg-refs","arg-refs",-1250096732)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cells.parser.Formula.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cells.parser.Formula.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cells.parser.Formula(self__.function$,self__.arg_refs,self__.__meta,self__.__extmap,self__.__hash));
}));

(cells.parser.Formula.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(cells.parser.Formula.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (128616919 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cells.parser.Formula.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23872,other23873){
var self__ = this;
var this23872__$1 = this;
return (((!((other23873 == null)))) && ((this23872__$1.constructor === other23873.constructor)) && (cljs.core._EQ_.call(null,this23872__$1.function,other23873.function)) && (cljs.core._EQ_.call(null,this23872__$1.arg_refs,other23873.arg_refs)) && (cljs.core._EQ_.call(null,this23872__$1.__extmap,other23873.__extmap)));
}));

(cells.parser.Formula.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg-refs","arg-refs",-1250096732),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cells.parser.Formula(self__.function$,self__.arg_refs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(cells.parser.Formula.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23870){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23880 = cljs.core.keyword_identical_QMARK_;
var expr__23881 = k__4388__auto__;
if(cljs.core.truth_(pred__23880.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__23881))){
return (new cells.parser.Formula(G__23870,self__.arg_refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23880.call(null,new cljs.core.Keyword(null,"arg-refs","arg-refs",-1250096732),expr__23881))){
return (new cells.parser.Formula(self__.function$,G__23870,self__.__meta,self__.__extmap,null));
} else {
return (new cells.parser.Formula(self__.function$,self__.arg_refs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23870),null));
}
}
}));

(cells.parser.Formula.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg-refs","arg-refs",-1250096732),self__.arg_refs,null))], null),self__.__extmap));
}));

(cells.parser.Formula.prototype.cells$parser$Cell$ = cljs.core.PROTOCOL_SENTINEL);

(cells.parser.Formula.prototype.cells$parser$Cell$evaluate$arity$2 = (function (_,spreadsheet){
var self__ = this;
var ___$1 = this;
var refs = cells.parser.cell_refs_to_parsed.call(null,self__.arg_refs,spreadsheet);
var arg_values = cljs.core.map.call(null,cells.parser.evaluate,refs);
var G__23883 = self__.function$;
switch (G__23883) {
case "SUM":
return cljs.core.apply.call(null,cljs.core._PLUS_,arg_values);

break;
case "AVG":
return (cljs.core.apply.call(null,cljs.core._PLUS_,arg_values) / cljs.core.count.call(null,self__.arg_refs));

break;
default:
return new cljs.core.Keyword(null,"function-unknown","function-unknown",-967704327);

}
}));

(cells.parser.Formula.prototype.cells$parser$Cell$references$arity$2 = (function (_,spreadsheet){
var self__ = this;
var ___$1 = this;
return cljs.core.set.call(null,self__.arg_refs);
}));

(cells.parser.Formula.prototype.cells$parser$Cell$to_str$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.function$),"(",clojure.string.join.call(null,", ",cljs.core.map.call(null,cells.parser.to_str,self__.arg_refs)),")"].join('');
}));

(cells.parser.Formula.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23870){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cells.parser.Formula(self__.function$,self__.arg_refs,G__23870,self__.__extmap,self__.__hash));
}));

(cells.parser.Formula.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cells.parser.Formula.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"arg-refs","arg-refs",390434795,null)], null);
}));

(cells.parser.Formula.cljs$lang$type = true);

(cells.parser.Formula.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cells.parser/Formula",null,(1),null));
}));

(cells.parser.Formula.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cells.parser/Formula");
}));

/**
 * Positional factory function for cells.parser/Formula.
 */
cells.parser.__GT_Formula = (function cells$parser$__GT_Formula(function$,arg_refs){
return (new cells.parser.Formula(function$,arg_refs,null,null,null));
});

/**
 * Factory function for cells.parser/Formula, taking a map of keywords to field values.
 */
cells.parser.map__GT_Formula = (function cells$parser$map__GT_Formula(G__23874){
var extmap__4419__auto__ = (function (){var G__23884 = cljs.core.dissoc.call(null,G__23874,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"arg-refs","arg-refs",-1250096732));
if(cljs.core.record_QMARK_.call(null,G__23874)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23884);
} else {
return G__23884;
}
})();
return (new cells.parser.Formula(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__23874),new cljs.core.Keyword(null,"arg-refs","arg-refs",-1250096732).cljs$core$IFn$_invoke$arity$1(G__23874),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

/**
 * Converts a cell-range, such as A1:A4 to a vector of keywords
 *   [:A1 :A2 :A3 :A4]
 */
cells.parser.cell_range_to_keywords = (function cells$parser$cell_range_to_keywords(cell_range){
var vec__23888 = cljs.core.re_matches.call(null,cells.parser.match_range_re,cell_range);
var _ = cljs.core.nth.call(null,vec__23888,(0),null);
var cell_name = cljs.core.nth.call(null,vec__23888,(1),null);
var lower_range = cljs.core.nth.call(null,vec__23888,(2),null);
var higher_range = cljs.core.nth.call(null,vec__23888,(3),null);
var lower_range__$1 = parseInt(lower_range,(10));
var higher_range__$1 = parseInt(higher_range,(10));
var cell_name__$1 = clojure.string.upper_case.call(null,cell_name);
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__23887_SHARP_){
return cljs.core.keyword.call(null,[cell_name__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23887_SHARP_)].join(''));
}),cljs.core.range.call(null,lower_range__$1,(higher_range__$1 + (1)))));
});
cells.parser.parse_cell_content = (function cells$parser$parse_cell_content(content){
var processed_content = clojure.string.trim.call(null,content);
if((!((cljs.core.re_matches.call(null,cells.parser.match_reference_re,processed_content) == null)))){
return (new cells.parser.Cell_reference(cljs.core.keyword.call(null,clojure.string.upper_case.call(null,cljs.core.nth.call(null,cljs.core.re_matches.call(null,cells.parser.match_reference_re,processed_content),(1)))),null,null,null));
} else {
if((!((cljs.core.re_matches.call(null,cells.parser.match_formula_re,processed_content) == null)))){
var vec__23891 = cljs.core.re_matches.call(null,cells.parser.match_formula_re,processed_content);
var _ = cljs.core.nth.call(null,vec__23891,(0),null);
var function$ = cljs.core.nth.call(null,vec__23891,(1),null);
var cell_range = cljs.core.nth.call(null,vec__23891,(2),null);
var lower_range = cljs.core.nth.call(null,vec__23891,(3),null);
var higher_range = cljs.core.nth.call(null,vec__23891,(4),null);
var lower_range__$1 = parseInt(lower_range,(10));
var higher_range__$1 = parseInt(higher_range,(10));
if((lower_range__$1 >= higher_range__$1)){
return new cljs.core.Keyword(null,"invalid-range","invalid-range",13085942);
} else {
return (new cells.parser.Formula(clojure.string.upper_case.call(null,function$),cells.parser.cell_range_to_keywords.call(null,cell_range),null,null,null));
}
} else {
if((!((cljs.core.re_matches.call(null,cells.parser.match_number_re,processed_content) == null)))){
return (new cells.parser.Numeric(parseFloat(cljs.core.first.call(null,cljs.core.re_matches.call(null,cells.parser.match_number_re,processed_content))),null,null,null));
} else {
if((!((cljs.core.re_matches.call(null,cells.parser.match_strings_re,processed_content) == null)))){
return (new cells.parser.String(content,null,null,null));
} else {
return (new cells.parser.String(content,null,null,null));

}
}
}
}
});

//# sourceMappingURL=parser.js.map

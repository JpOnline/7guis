goog.provide('cljs.compiler.macros$macros');
var ret__4785__auto___34523 = (function (){
cljs.compiler.macros$macros.emit_wrap = (function cljs$compiler$macros$macros$emit_wrap(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34524 = arguments.length;
var i__4737__auto___34525 = (0);
while(true){
if((i__4737__auto___34525 < len__4736__auto___34524)){
args__4742__auto__.push((arguments[i__4737__auto___34525]));

var G__34527 = (i__4737__auto___34525 + (1));
i__4737__auto___34525 = G__34527;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.compiler.macros$macros.emit_wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.compiler.macros$macros.emit_wrap.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"env__34499__auto__","env__34499__auto__",-469322582,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"return","return",-1891502105),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"env__34499__auto__","env__34499__auto__",-469322582,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.compiler","emits","cljs.compiler/emits",-1296164997,null),null,(1),null)),(new cljs.core.List(null,"return ",null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expr","expr",745722291),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"env__34499__auto__","env__34499__auto__",-469322582,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.compiler","emitln","cljs.compiler/emitln",-1309380807,null),null,(1),null)),(new cljs.core.List(null,";",null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.compiler.macros$macros.emit_wrap.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.compiler.macros$macros.emit_wrap.cljs$lang$applyTo = (function (seq34500){
var G__34501 = cljs.core.first(seq34500);
var seq34500__$1 = cljs.core.next(seq34500);
var G__34502 = cljs.core.first(seq34500__$1);
var seq34500__$2 = cljs.core.next(seq34500__$1);
var G__34503 = cljs.core.first(seq34500__$2);
var seq34500__$3 = cljs.core.next(seq34500__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34501,G__34502,G__34503,seq34500__$3);
}));

return null;
})()
;
(cljs.compiler.macros$macros.emit_wrap.cljs$lang$macro = true);


//# sourceMappingURL=cljs.compiler.macros$macros.js.map

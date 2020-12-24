goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41022){
var map__41023 = p__41022;
var map__41023__$1 = (((((!((map__41023 == null))))?(((((map__41023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41023):map__41023);
var m = map__41023__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41023__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41023__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41027_41237 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41028_41238 = null;
var count__41029_41239 = (0);
var i__41030_41240 = (0);
while(true){
if((i__41030_41240 < count__41029_41239)){
var f_41241 = chunk__41028_41238.cljs$core$IIndexed$_nth$arity$2(null,i__41030_41240);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41241], 0));


var G__41242 = seq__41027_41237;
var G__41243 = chunk__41028_41238;
var G__41244 = count__41029_41239;
var G__41245 = (i__41030_41240 + (1));
seq__41027_41237 = G__41242;
chunk__41028_41238 = G__41243;
count__41029_41239 = G__41244;
i__41030_41240 = G__41245;
continue;
} else {
var temp__5735__auto___41246 = cljs.core.seq(seq__41027_41237);
if(temp__5735__auto___41246){
var seq__41027_41247__$1 = temp__5735__auto___41246;
if(cljs.core.chunked_seq_QMARK_(seq__41027_41247__$1)){
var c__4556__auto___41248 = cljs.core.chunk_first(seq__41027_41247__$1);
var G__41249 = cljs.core.chunk_rest(seq__41027_41247__$1);
var G__41250 = c__4556__auto___41248;
var G__41251 = cljs.core.count(c__4556__auto___41248);
var G__41252 = (0);
seq__41027_41237 = G__41249;
chunk__41028_41238 = G__41250;
count__41029_41239 = G__41251;
i__41030_41240 = G__41252;
continue;
} else {
var f_41253 = cljs.core.first(seq__41027_41247__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41253], 0));


var G__41255 = cljs.core.next(seq__41027_41247__$1);
var G__41256 = null;
var G__41257 = (0);
var G__41258 = (0);
seq__41027_41237 = G__41255;
chunk__41028_41238 = G__41256;
count__41029_41239 = G__41257;
i__41030_41240 = G__41258;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41259 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41259], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41259)))?cljs.core.second(arglists_41259):arglists_41259)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41035_41260 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41036_41261 = null;
var count__41037_41262 = (0);
var i__41038_41263 = (0);
while(true){
if((i__41038_41263 < count__41037_41262)){
var vec__41050_41265 = chunk__41036_41261.cljs$core$IIndexed$_nth$arity$2(null,i__41038_41263);
var name_41266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41050_41265,(0),null);
var map__41053_41267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41050_41265,(1),null);
var map__41053_41268__$1 = (((((!((map__41053_41267 == null))))?(((((map__41053_41267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41053_41267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41053_41267):map__41053_41267);
var doc_41269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41053_41268__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41053_41268__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41266], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41270], 0));

if(cljs.core.truth_(doc_41269)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41269], 0));
} else {
}


var G__41271 = seq__41035_41260;
var G__41272 = chunk__41036_41261;
var G__41273 = count__41037_41262;
var G__41274 = (i__41038_41263 + (1));
seq__41035_41260 = G__41271;
chunk__41036_41261 = G__41272;
count__41037_41262 = G__41273;
i__41038_41263 = G__41274;
continue;
} else {
var temp__5735__auto___41275 = cljs.core.seq(seq__41035_41260);
if(temp__5735__auto___41275){
var seq__41035_41276__$1 = temp__5735__auto___41275;
if(cljs.core.chunked_seq_QMARK_(seq__41035_41276__$1)){
var c__4556__auto___41277 = cljs.core.chunk_first(seq__41035_41276__$1);
var G__41278 = cljs.core.chunk_rest(seq__41035_41276__$1);
var G__41279 = c__4556__auto___41277;
var G__41280 = cljs.core.count(c__4556__auto___41277);
var G__41281 = (0);
seq__41035_41260 = G__41278;
chunk__41036_41261 = G__41279;
count__41037_41262 = G__41280;
i__41038_41263 = G__41281;
continue;
} else {
var vec__41057_41282 = cljs.core.first(seq__41035_41276__$1);
var name_41283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41057_41282,(0),null);
var map__41060_41284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41057_41282,(1),null);
var map__41060_41285__$1 = (((((!((map__41060_41284 == null))))?(((((map__41060_41284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41060_41284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41060_41284):map__41060_41284);
var doc_41286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41060_41285__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41060_41285__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41283], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41287], 0));

if(cljs.core.truth_(doc_41286)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41286], 0));
} else {
}


var G__41288 = cljs.core.next(seq__41035_41276__$1);
var G__41289 = null;
var G__41290 = (0);
var G__41291 = (0);
seq__41035_41260 = G__41288;
chunk__41036_41261 = G__41289;
count__41037_41262 = G__41290;
i__41038_41263 = G__41291;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41063 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41064 = null;
var count__41065 = (0);
var i__41066 = (0);
while(true){
if((i__41066 < count__41065)){
var role = chunk__41064.cljs$core$IIndexed$_nth$arity$2(null,i__41066);
var temp__5735__auto___41292__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41292__$1)){
var spec_41293 = temp__5735__auto___41292__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41293)], 0));
} else {
}


var G__41294 = seq__41063;
var G__41295 = chunk__41064;
var G__41296 = count__41065;
var G__41297 = (i__41066 + (1));
seq__41063 = G__41294;
chunk__41064 = G__41295;
count__41065 = G__41296;
i__41066 = G__41297;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__41063);
if(temp__5735__auto____$1){
var seq__41063__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41063__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41063__$1);
var G__41302 = cljs.core.chunk_rest(seq__41063__$1);
var G__41303 = c__4556__auto__;
var G__41304 = cljs.core.count(c__4556__auto__);
var G__41305 = (0);
seq__41063 = G__41302;
chunk__41064 = G__41303;
count__41065 = G__41304;
i__41066 = G__41305;
continue;
} else {
var role = cljs.core.first(seq__41063__$1);
var temp__5735__auto___41306__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41306__$2)){
var spec_41307 = temp__5735__auto___41306__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41307)], 0));
} else {
}


var G__41308 = cljs.core.next(seq__41063__$1);
var G__41309 = null;
var G__41310 = (0);
var G__41311 = (0);
seq__41063 = G__41308;
chunk__41064 = G__41309;
count__41065 = G__41310;
i__41066 = G__41311;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__41312 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__41313 = cljs.core.ex_cause(t);
via = G__41312;
t = G__41313;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__41088 = datafied_throwable;
var map__41088__$1 = (((((!((map__41088 == null))))?(((((map__41088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41088):map__41088);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41088__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41088__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41088__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41089 = cljs.core.last(via);
var map__41089__$1 = (((((!((map__41089 == null))))?(((((map__41089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41089):map__41089);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41089__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41090 = data;
var map__41090__$1 = (((((!((map__41090 == null))))?(((((map__41090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41090):map__41090);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41090__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41090__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41090__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41091 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41091__$1 = (((((!((map__41091 == null))))?(((((map__41091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41091):map__41091);
var top_data = map__41091__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41091__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41103 = phase;
var G__41103__$1 = (((G__41103 instanceof cljs.core.Keyword))?G__41103.fqn:null);
switch (G__41103__$1) {
case "read-source":
var map__41109 = data;
var map__41109__$1 = (((((!((map__41109 == null))))?(((((map__41109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41109):map__41109);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41109__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41109__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41120 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41120__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41120,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41120);
var G__41120__$2 = (cljs.core.truth_((function (){var fexpr__41121 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41121.cljs$core$IFn$_invoke$arity$1 ? fexpr__41121.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41121.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41120__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41120__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41120__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41120__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41126 = top_data;
var G__41126__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41126,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41126);
var G__41126__$2 = (cljs.core.truth_((function (){var fexpr__41132 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41132.cljs$core$IFn$_invoke$arity$1 ? fexpr__41132.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41132.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41126__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41126__$1);
var G__41126__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41126__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41126__$2);
var G__41126__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41126__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41126__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41126__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41126__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41148 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41148,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41148,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41148,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41148,(3),null);
var G__41151 = top_data;
var G__41151__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41151,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41151);
var G__41151__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41151__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41151__$1);
var G__41151__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41151__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41151__$2);
var G__41151__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41151__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41151__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41151__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41151__$4;
}

break;
case "execution":
var vec__41159 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41159,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41159,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41159,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41159,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41078_SHARP_){
var or__4126__auto__ = (p1__41078_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__41167 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41167.cljs$core$IFn$_invoke$arity$1 ? fexpr__41167.cljs$core$IFn$_invoke$arity$1(p1__41078_SHARP_) : fexpr__41167.call(null,p1__41078_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__41171 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41171__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41171,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41171);
var G__41171__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41171__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41171__$1);
var G__41171__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41171__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41171__$2);
var G__41171__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41171__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41171__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41171__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41171__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41103__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41193){
var map__41194 = p__41193;
var map__41194__$1 = (((((!((map__41194 == null))))?(((((map__41194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41194):map__41194);
var triage_data = map__41194__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41194__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41194__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41194__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41194__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41194__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41194__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41194__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41194__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41197 = phase;
var G__41197__$1 = (((G__41197 instanceof cljs.core.Keyword))?G__41197.fqn:null);
switch (G__41197__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41198 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41199 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41200 = loc;
var G__41201 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41203_41321 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41204_41322 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41205_41323 = true;
var _STAR_print_fn_STAR__temp_val__41206_41324 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41205_41323);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41206_41324);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41187_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41187_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41204_41322);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41203_41321);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41198,G__41199,G__41200,G__41201) : format.call(null,G__41198,G__41199,G__41200,G__41201));

break;
case "macroexpansion":
var G__41207 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41208 = cause_type;
var G__41209 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41210 = loc;
var G__41211 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41207,G__41208,G__41209,G__41210,G__41211) : format.call(null,G__41207,G__41208,G__41209,G__41210,G__41211));

break;
case "compile-syntax-check":
var G__41212 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41213 = cause_type;
var G__41214 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41215 = loc;
var G__41216 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41212,G__41213,G__41214,G__41215,G__41216) : format.call(null,G__41212,G__41213,G__41214,G__41215,G__41216));

break;
case "compilation":
var G__41217 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41218 = cause_type;
var G__41219 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41220 = loc;
var G__41221 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41217,G__41218,G__41219,G__41220,G__41221) : format.call(null,G__41217,G__41218,G__41219,G__41220,G__41221));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41222 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41223 = symbol;
var G__41224 = loc;
var G__41225 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41226_41325 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41227_41326 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41228_41327 = true;
var _STAR_print_fn_STAR__temp_val__41229_41328 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41228_41327);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41229_41328);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41188_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41188_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41227_41326);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41226_41325);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41222,G__41223,G__41224,G__41225) : format.call(null,G__41222,G__41223,G__41224,G__41225));
} else {
var G__41231 = "Execution error%s at %s(%s).\n%s\n";
var G__41232 = cause_type;
var G__41233 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41234 = loc;
var G__41235 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41231,G__41232,G__41233,G__41234,G__41235) : format.call(null,G__41231,G__41232,G__41233,G__41234,G__41235));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41197__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

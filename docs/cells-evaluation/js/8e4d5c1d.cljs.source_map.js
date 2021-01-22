goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__47286){
var vec__47289 = p__47286;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47289,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47289,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__47296 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47296,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47296,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47296,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47296,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47296,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__47303 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47303,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47303,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47303,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47303,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47303,(4),null);
var vec__47306 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47306,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47306,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47306,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47306,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47306,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__47322 = segmap;
var map__47322__$1 = (((((!((map__47322 == null))))?(((((map__47322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47322):map__47322);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47322__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47322__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47322__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47322__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47322__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__47325 = arguments.length;
switch (G__47325) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__47331 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__48535 = cljs.core.next(segs__$1);
var G__48536 = nrelseg;
var G__48537 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__48535;
relseg__$1 = G__48536;
result__$1 = G__48537;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47331,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47331,(1),null);
var G__48539 = (gline + (1));
var G__48540 = cljs.core.next(lines__$1);
var G__48541 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__48542 = result__$1;
gline = G__48539;
lines__$1 = G__48540;
relseg = G__48541;
result = G__48542;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__47336 = segmap;
var map__47336__$1 = (((((!((map__47336 == null))))?(((((map__47336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47336):map__47336);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47336__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47336__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47336__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47336__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__47334_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__47334_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__47347 = arguments.length;
switch (G__47347) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__47359 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__48556 = cljs.core.next(segs__$1);
var G__48557 = nrelseg;
var G__48558 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__48556;
relseg__$1 = G__48557;
result__$1 = G__48558;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47359,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47359,(1),null);
var G__48561 = (gline + (1));
var G__48562 = cljs.core.next(lines__$1);
var G__48563 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__48564 = result__$1;
gline = G__48561;
lines__$1 = G__48562;
relseg = G__48563;
result = G__48564;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__47371){
var vec__47372 = p__47371;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47372,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47372,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47372,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47372,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47372,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__47380){
var vec__47381 = p__47380;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47381,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47381,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47381,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47381,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47381,(4),null);
var seg = vec__47381;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__47386){
var vec__47387 = p__47386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47387,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47387,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47387,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47387,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47387,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__47403 = cljs.core.seq(infos);
var chunk__47404 = null;
var count__47405 = (0);
var i__47406 = (0);
while(true){
if((i__47406 < count__47405)){
var info = chunk__47404.cljs$core$IIndexed$_nth$arity$2(null,i__47406);
var segv_48583 = info__GT_segv(info,source_idx,line,col);
var gline_48584 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_48585 = cljs.core.count(cljs.core.deref(lines));
if((gline_48584 > (lc_48585 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47403,chunk__47404,count__47405,i__47406,segv_48583,gline_48584,lc_48585,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_48584 - (lc_48585 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_48583], null));
});})(seq__47403,chunk__47404,count__47405,i__47406,segv_48583,gline_48584,lc_48585,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47403,chunk__47404,count__47405,i__47406,segv_48583,gline_48584,lc_48585,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_48584], null),cljs.core.conj,segv_48583);
});})(seq__47403,chunk__47404,count__47405,i__47406,segv_48583,gline_48584,lc_48585,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__48599 = seq__47403;
var G__48600 = chunk__47404;
var G__48601 = count__47405;
var G__48602 = (i__47406 + (1));
seq__47403 = G__48599;
chunk__47404 = G__48600;
count__47405 = G__48601;
i__47406 = G__48602;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47403);
if(temp__5735__auto__){
var seq__47403__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47403__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47403__$1);
var G__48610 = cljs.core.chunk_rest(seq__47403__$1);
var G__48611 = c__4556__auto__;
var G__48612 = cljs.core.count(c__4556__auto__);
var G__48613 = (0);
seq__47403 = G__48610;
chunk__47404 = G__48611;
count__47405 = G__48612;
i__47406 = G__48613;
continue;
} else {
var info = cljs.core.first(seq__47403__$1);
var segv_48614 = info__GT_segv(info,source_idx,line,col);
var gline_48615 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_48616 = cljs.core.count(cljs.core.deref(lines));
if((gline_48615 > (lc_48616 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47403,chunk__47404,count__47405,i__47406,segv_48614,gline_48615,lc_48616,info,seq__47403__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_48615 - (lc_48616 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_48614], null));
});})(seq__47403,chunk__47404,count__47405,i__47406,segv_48614,gline_48615,lc_48616,info,seq__47403__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47403,chunk__47404,count__47405,i__47406,segv_48614,gline_48615,lc_48616,info,seq__47403__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_48615], null),cljs.core.conj,segv_48614);
});})(seq__47403,chunk__47404,count__47405,i__47406,segv_48614,gline_48615,lc_48616,info,seq__47403__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__48623 = cljs.core.next(seq__47403__$1);
var G__48624 = null;
var G__48625 = (0);
var G__48626 = (0);
seq__47403 = G__48623;
chunk__47404 = G__48624;
count__47405 = G__48625;
i__47406 = G__48626;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__47416_48628 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__47417_48629 = null;
var count__47418_48630 = (0);
var i__47419_48631 = (0);
while(true){
if((i__47419_48631 < count__47418_48630)){
var vec__47670_48633 = chunk__47417_48629.cljs$core$IIndexed$_nth$arity$2(null,i__47419_48631);
var source_idx_48634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47670_48633,(0),null);
var vec__47673_48635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47670_48633,(1),null);
var __48636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47673_48635,(0),null);
var lines_48637__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47673_48635,(1),null);
var seq__47676_48645 = cljs.core.seq(lines_48637__$1);
var chunk__47677_48646 = null;
var count__47678_48647 = (0);
var i__47679_48648 = (0);
while(true){
if((i__47679_48648 < count__47678_48647)){
var vec__47734_48651 = chunk__47677_48646.cljs$core$IIndexed$_nth$arity$2(null,i__47679_48648);
var line_48652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47734_48651,(0),null);
var cols_48653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47734_48651,(1),null);
var seq__47737_48654 = cljs.core.seq(cols_48653);
var chunk__47738_48655 = null;
var count__47739_48656 = (0);
var i__47740_48657 = (0);
while(true){
if((i__47740_48657 < count__47739_48656)){
var vec__47752_48658 = chunk__47738_48655.cljs$core$IIndexed$_nth$arity$2(null,i__47740_48657);
var col_48659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752_48658,(0),null);
var infos_48660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752_48658,(1),null);
encode_cols(infos_48660,source_idx_48634,line_48652,col_48659);


var G__48661 = seq__47737_48654;
var G__48662 = chunk__47738_48655;
var G__48663 = count__47739_48656;
var G__48664 = (i__47740_48657 + (1));
seq__47737_48654 = G__48661;
chunk__47738_48655 = G__48662;
count__47739_48656 = G__48663;
i__47740_48657 = G__48664;
continue;
} else {
var temp__5735__auto___48665 = cljs.core.seq(seq__47737_48654);
if(temp__5735__auto___48665){
var seq__47737_48666__$1 = temp__5735__auto___48665;
if(cljs.core.chunked_seq_QMARK_(seq__47737_48666__$1)){
var c__4556__auto___48667 = cljs.core.chunk_first(seq__47737_48666__$1);
var G__48670 = cljs.core.chunk_rest(seq__47737_48666__$1);
var G__48671 = c__4556__auto___48667;
var G__48672 = cljs.core.count(c__4556__auto___48667);
var G__48673 = (0);
seq__47737_48654 = G__48670;
chunk__47738_48655 = G__48671;
count__47739_48656 = G__48672;
i__47740_48657 = G__48673;
continue;
} else {
var vec__47755_48675 = cljs.core.first(seq__47737_48666__$1);
var col_48676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47755_48675,(0),null);
var infos_48677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47755_48675,(1),null);
encode_cols(infos_48677,source_idx_48634,line_48652,col_48676);


var G__48678 = cljs.core.next(seq__47737_48666__$1);
var G__48679 = null;
var G__48680 = (0);
var G__48681 = (0);
seq__47737_48654 = G__48678;
chunk__47738_48655 = G__48679;
count__47739_48656 = G__48680;
i__47740_48657 = G__48681;
continue;
}
} else {
}
}
break;
}


var G__48682 = seq__47676_48645;
var G__48683 = chunk__47677_48646;
var G__48684 = count__47678_48647;
var G__48685 = (i__47679_48648 + (1));
seq__47676_48645 = G__48682;
chunk__47677_48646 = G__48683;
count__47678_48647 = G__48684;
i__47679_48648 = G__48685;
continue;
} else {
var temp__5735__auto___48686 = cljs.core.seq(seq__47676_48645);
if(temp__5735__auto___48686){
var seq__47676_48691__$1 = temp__5735__auto___48686;
if(cljs.core.chunked_seq_QMARK_(seq__47676_48691__$1)){
var c__4556__auto___48692 = cljs.core.chunk_first(seq__47676_48691__$1);
var G__48693 = cljs.core.chunk_rest(seq__47676_48691__$1);
var G__48695 = c__4556__auto___48692;
var G__48696 = cljs.core.count(c__4556__auto___48692);
var G__48697 = (0);
seq__47676_48645 = G__48693;
chunk__47677_48646 = G__48695;
count__47678_48647 = G__48696;
i__47679_48648 = G__48697;
continue;
} else {
var vec__47759_48698 = cljs.core.first(seq__47676_48691__$1);
var line_48699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47759_48698,(0),null);
var cols_48700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47759_48698,(1),null);
var seq__47762_48701 = cljs.core.seq(cols_48700);
var chunk__47763_48702 = null;
var count__47764_48703 = (0);
var i__47765_48704 = (0);
while(true){
if((i__47765_48704 < count__47764_48703)){
var vec__47773_48705 = chunk__47763_48702.cljs$core$IIndexed$_nth$arity$2(null,i__47765_48704);
var col_48706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47773_48705,(0),null);
var infos_48707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47773_48705,(1),null);
encode_cols(infos_48707,source_idx_48634,line_48699,col_48706);


var G__48713 = seq__47762_48701;
var G__48714 = chunk__47763_48702;
var G__48715 = count__47764_48703;
var G__48716 = (i__47765_48704 + (1));
seq__47762_48701 = G__48713;
chunk__47763_48702 = G__48714;
count__47764_48703 = G__48715;
i__47765_48704 = G__48716;
continue;
} else {
var temp__5735__auto___48717__$1 = cljs.core.seq(seq__47762_48701);
if(temp__5735__auto___48717__$1){
var seq__47762_48719__$1 = temp__5735__auto___48717__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47762_48719__$1)){
var c__4556__auto___48726 = cljs.core.chunk_first(seq__47762_48719__$1);
var G__48727 = cljs.core.chunk_rest(seq__47762_48719__$1);
var G__48728 = c__4556__auto___48726;
var G__48729 = cljs.core.count(c__4556__auto___48726);
var G__48730 = (0);
seq__47762_48701 = G__48727;
chunk__47763_48702 = G__48728;
count__47764_48703 = G__48729;
i__47765_48704 = G__48730;
continue;
} else {
var vec__47777_48737 = cljs.core.first(seq__47762_48719__$1);
var col_48738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47777_48737,(0),null);
var infos_48739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47777_48737,(1),null);
encode_cols(infos_48739,source_idx_48634,line_48699,col_48738);


var G__48742 = cljs.core.next(seq__47762_48719__$1);
var G__48743 = null;
var G__48744 = (0);
var G__48745 = (0);
seq__47762_48701 = G__48742;
chunk__47763_48702 = G__48743;
count__47764_48703 = G__48744;
i__47765_48704 = G__48745;
continue;
}
} else {
}
}
break;
}


var G__48746 = cljs.core.next(seq__47676_48691__$1);
var G__48747 = null;
var G__48748 = (0);
var G__48749 = (0);
seq__47676_48645 = G__48746;
chunk__47677_48646 = G__48747;
count__47678_48647 = G__48748;
i__47679_48648 = G__48749;
continue;
}
} else {
}
}
break;
}


var G__48750 = seq__47416_48628;
var G__48751 = chunk__47417_48629;
var G__48752 = count__47418_48630;
var G__48753 = (i__47419_48631 + (1));
seq__47416_48628 = G__48750;
chunk__47417_48629 = G__48751;
count__47418_48630 = G__48752;
i__47419_48631 = G__48753;
continue;
} else {
var temp__5735__auto___48756 = cljs.core.seq(seq__47416_48628);
if(temp__5735__auto___48756){
var seq__47416_48757__$1 = temp__5735__auto___48756;
if(cljs.core.chunked_seq_QMARK_(seq__47416_48757__$1)){
var c__4556__auto___48758 = cljs.core.chunk_first(seq__47416_48757__$1);
var G__48759 = cljs.core.chunk_rest(seq__47416_48757__$1);
var G__48760 = c__4556__auto___48758;
var G__48761 = cljs.core.count(c__4556__auto___48758);
var G__48762 = (0);
seq__47416_48628 = G__48759;
chunk__47417_48629 = G__48760;
count__47418_48630 = G__48761;
i__47419_48631 = G__48762;
continue;
} else {
var vec__47787_48765 = cljs.core.first(seq__47416_48757__$1);
var source_idx_48766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47787_48765,(0),null);
var vec__47790_48767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47787_48765,(1),null);
var __48768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47790_48767,(0),null);
var lines_48769__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47790_48767,(1),null);
var seq__47793_48774 = cljs.core.seq(lines_48769__$1);
var chunk__47794_48775 = null;
var count__47795_48776 = (0);
var i__47796_48777 = (0);
while(true){
if((i__47796_48777 < count__47795_48776)){
var vec__47851_48778 = chunk__47794_48775.cljs$core$IIndexed$_nth$arity$2(null,i__47796_48777);
var line_48779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47851_48778,(0),null);
var cols_48780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47851_48778,(1),null);
var seq__47854_48782 = cljs.core.seq(cols_48780);
var chunk__47855_48783 = null;
var count__47856_48784 = (0);
var i__47857_48785 = (0);
while(true){
if((i__47857_48785 < count__47856_48784)){
var vec__47867_48787 = chunk__47855_48783.cljs$core$IIndexed$_nth$arity$2(null,i__47857_48785);
var col_48788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47867_48787,(0),null);
var infos_48789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47867_48787,(1),null);
encode_cols(infos_48789,source_idx_48766,line_48779,col_48788);


var G__48790 = seq__47854_48782;
var G__48791 = chunk__47855_48783;
var G__48792 = count__47856_48784;
var G__48793 = (i__47857_48785 + (1));
seq__47854_48782 = G__48790;
chunk__47855_48783 = G__48791;
count__47856_48784 = G__48792;
i__47857_48785 = G__48793;
continue;
} else {
var temp__5735__auto___48794__$1 = cljs.core.seq(seq__47854_48782);
if(temp__5735__auto___48794__$1){
var seq__47854_48795__$1 = temp__5735__auto___48794__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47854_48795__$1)){
var c__4556__auto___48796 = cljs.core.chunk_first(seq__47854_48795__$1);
var G__48799 = cljs.core.chunk_rest(seq__47854_48795__$1);
var G__48800 = c__4556__auto___48796;
var G__48801 = cljs.core.count(c__4556__auto___48796);
var G__48802 = (0);
seq__47854_48782 = G__48799;
chunk__47855_48783 = G__48800;
count__47856_48784 = G__48801;
i__47857_48785 = G__48802;
continue;
} else {
var vec__47871_48803 = cljs.core.first(seq__47854_48795__$1);
var col_48804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47871_48803,(0),null);
var infos_48805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47871_48803,(1),null);
encode_cols(infos_48805,source_idx_48766,line_48779,col_48804);


var G__48806 = cljs.core.next(seq__47854_48795__$1);
var G__48807 = null;
var G__48808 = (0);
var G__48809 = (0);
seq__47854_48782 = G__48806;
chunk__47855_48783 = G__48807;
count__47856_48784 = G__48808;
i__47857_48785 = G__48809;
continue;
}
} else {
}
}
break;
}


var G__48810 = seq__47793_48774;
var G__48811 = chunk__47794_48775;
var G__48812 = count__47795_48776;
var G__48813 = (i__47796_48777 + (1));
seq__47793_48774 = G__48810;
chunk__47794_48775 = G__48811;
count__47795_48776 = G__48812;
i__47796_48777 = G__48813;
continue;
} else {
var temp__5735__auto___48814__$1 = cljs.core.seq(seq__47793_48774);
if(temp__5735__auto___48814__$1){
var seq__47793_48815__$1 = temp__5735__auto___48814__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47793_48815__$1)){
var c__4556__auto___48816 = cljs.core.chunk_first(seq__47793_48815__$1);
var G__48817 = cljs.core.chunk_rest(seq__47793_48815__$1);
var G__48818 = c__4556__auto___48816;
var G__48819 = cljs.core.count(c__4556__auto___48816);
var G__48820 = (0);
seq__47793_48774 = G__48817;
chunk__47794_48775 = G__48818;
count__47795_48776 = G__48819;
i__47796_48777 = G__48820;
continue;
} else {
var vec__47874_48822 = cljs.core.first(seq__47793_48815__$1);
var line_48823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47874_48822,(0),null);
var cols_48824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47874_48822,(1),null);
var seq__47878_48825 = cljs.core.seq(cols_48824);
var chunk__47879_48826 = null;
var count__47880_48827 = (0);
var i__47881_48828 = (0);
while(true){
if((i__47881_48828 < count__47880_48827)){
var vec__47889_48829 = chunk__47879_48826.cljs$core$IIndexed$_nth$arity$2(null,i__47881_48828);
var col_48830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47889_48829,(0),null);
var infos_48831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47889_48829,(1),null);
encode_cols(infos_48831,source_idx_48766,line_48823,col_48830);


var G__48832 = seq__47878_48825;
var G__48833 = chunk__47879_48826;
var G__48834 = count__47880_48827;
var G__48835 = (i__47881_48828 + (1));
seq__47878_48825 = G__48832;
chunk__47879_48826 = G__48833;
count__47880_48827 = G__48834;
i__47881_48828 = G__48835;
continue;
} else {
var temp__5735__auto___48836__$2 = cljs.core.seq(seq__47878_48825);
if(temp__5735__auto___48836__$2){
var seq__47878_48837__$1 = temp__5735__auto___48836__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47878_48837__$1)){
var c__4556__auto___48838 = cljs.core.chunk_first(seq__47878_48837__$1);
var G__48839 = cljs.core.chunk_rest(seq__47878_48837__$1);
var G__48840 = c__4556__auto___48838;
var G__48841 = cljs.core.count(c__4556__auto___48838);
var G__48842 = (0);
seq__47878_48825 = G__48839;
chunk__47879_48826 = G__48840;
count__47880_48827 = G__48841;
i__47881_48828 = G__48842;
continue;
} else {
var vec__47895_48843 = cljs.core.first(seq__47878_48837__$1);
var col_48844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47895_48843,(0),null);
var infos_48845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47895_48843,(1),null);
encode_cols(infos_48845,source_idx_48766,line_48823,col_48844);


var G__48847 = cljs.core.next(seq__47878_48837__$1);
var G__48848 = null;
var G__48849 = (0);
var G__48850 = (0);
seq__47878_48825 = G__48847;
chunk__47879_48826 = G__48848;
count__47880_48827 = G__48849;
i__47881_48828 = G__48850;
continue;
}
} else {
}
}
break;
}


var G__48851 = cljs.core.next(seq__47793_48815__$1);
var G__48852 = null;
var G__48853 = (0);
var G__48854 = (0);
seq__47793_48774 = G__48851;
chunk__47794_48775 = G__48852;
count__47795_48776 = G__48853;
i__47796_48777 = G__48854;
continue;
}
} else {
}
}
break;
}


var G__48855 = cljs.core.next(seq__47416_48757__$1);
var G__48856 = null;
var G__48857 = (0);
var G__48858 = (0);
seq__47416_48628 = G__48855;
chunk__47417_48629 = G__48856;
count__47418_48630 = G__48857;
i__47419_48631 = G__48858;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__47899 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__47394_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47394_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__47395_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__47395_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47397_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__47397_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__47901 = G__47899;
goog.object.set(G__47901,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__47901;
} else {
return G__47899;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__47902 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47902,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47902,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__47906 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47906,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47906,(1),null);
var G__48861 = cljs.core.next(col_map_seq);
var G__48862 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__47906,col,infos,vec__47902,line,col_map){
return (function (v,p__47909){
var map__47910 = p__47909;
var map__47910__$1 = (((((!((map__47910 == null))))?(((((map__47910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47910):map__47910);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47910__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47910__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__47906,col,infos,vec__47902,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__48861;
new_cols = G__48862;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__48863 = cljs.core.next(line_map_seq);
var G__48864 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__48863;
new_lines = G__48864;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__47915_48865 = cljs.core.seq(reverse_map);
var chunk__47916_48866 = null;
var count__47917_48867 = (0);
var i__47918_48868 = (0);
while(true){
if((i__47918_48868 < count__47917_48867)){
var vec__48228_48869 = chunk__47916_48866.cljs$core$IIndexed$_nth$arity$2(null,i__47918_48868);
var line_48870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48228_48869,(0),null);
var columns_48871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48228_48869,(1),null);
var seq__48231_48872 = cljs.core.seq(columns_48871);
var chunk__48232_48873 = null;
var count__48233_48874 = (0);
var i__48234_48875 = (0);
while(true){
if((i__48234_48875 < count__48233_48874)){
var vec__48308_48876 = chunk__48232_48873.cljs$core$IIndexed$_nth$arity$2(null,i__48234_48875);
var column_48877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48308_48876,(0),null);
var column_info_48878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48308_48876,(1),null);
var seq__48311_48879 = cljs.core.seq(column_info_48878);
var chunk__48312_48880 = null;
var count__48313_48881 = (0);
var i__48314_48882 = (0);
while(true){
if((i__48314_48882 < count__48313_48881)){
var map__48326_48883 = chunk__48312_48880.cljs$core$IIndexed$_nth$arity$2(null,i__48314_48882);
var map__48326_48884__$1 = (((((!((map__48326_48883 == null))))?(((((map__48326_48883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48326_48883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48326_48883):map__48326_48883);
var gline_48885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48326_48884__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_48886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48326_48884__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_48887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48326_48884__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_48885], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48311_48879,chunk__48312_48880,count__48313_48881,i__48314_48882,seq__48231_48872,chunk__48232_48873,count__48233_48874,i__48234_48875,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48326_48883,map__48326_48884__$1,gline_48885,gcol_48886,name_48887,vec__48308_48876,column_48877,column_info_48878,vec__48228_48869,line_48870,columns_48871,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_48886], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_48870,new cljs.core.Keyword(null,"col","col",-1959363084),column_48877,new cljs.core.Keyword(null,"name","name",1843675177),name_48887], null));
});})(seq__48311_48879,chunk__48312_48880,count__48313_48881,i__48314_48882,seq__48231_48872,chunk__48232_48873,count__48233_48874,i__48234_48875,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48326_48883,map__48326_48884__$1,gline_48885,gcol_48886,name_48887,vec__48308_48876,column_48877,column_info_48878,vec__48228_48869,line_48870,columns_48871,inverted))
,cljs.core.sorted_map()));


var G__48888 = seq__48311_48879;
var G__48889 = chunk__48312_48880;
var G__48890 = count__48313_48881;
var G__48891 = (i__48314_48882 + (1));
seq__48311_48879 = G__48888;
chunk__48312_48880 = G__48889;
count__48313_48881 = G__48890;
i__48314_48882 = G__48891;
continue;
} else {
var temp__5735__auto___48892 = cljs.core.seq(seq__48311_48879);
if(temp__5735__auto___48892){
var seq__48311_48894__$1 = temp__5735__auto___48892;
if(cljs.core.chunked_seq_QMARK_(seq__48311_48894__$1)){
var c__4556__auto___48898 = cljs.core.chunk_first(seq__48311_48894__$1);
var G__48899 = cljs.core.chunk_rest(seq__48311_48894__$1);
var G__48900 = c__4556__auto___48898;
var G__48901 = cljs.core.count(c__4556__auto___48898);
var G__48902 = (0);
seq__48311_48879 = G__48899;
chunk__48312_48880 = G__48900;
count__48313_48881 = G__48901;
i__48314_48882 = G__48902;
continue;
} else {
var map__48336_48903 = cljs.core.first(seq__48311_48894__$1);
var map__48336_48904__$1 = (((((!((map__48336_48903 == null))))?(((((map__48336_48903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48336_48903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48336_48903):map__48336_48903);
var gline_48905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48336_48904__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_48906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48336_48904__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_48907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48336_48904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_48905], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48311_48879,chunk__48312_48880,count__48313_48881,i__48314_48882,seq__48231_48872,chunk__48232_48873,count__48233_48874,i__48234_48875,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48336_48903,map__48336_48904__$1,gline_48905,gcol_48906,name_48907,seq__48311_48894__$1,temp__5735__auto___48892,vec__48308_48876,column_48877,column_info_48878,vec__48228_48869,line_48870,columns_48871,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_48906], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_48870,new cljs.core.Keyword(null,"col","col",-1959363084),column_48877,new cljs.core.Keyword(null,"name","name",1843675177),name_48907], null));
});})(seq__48311_48879,chunk__48312_48880,count__48313_48881,i__48314_48882,seq__48231_48872,chunk__48232_48873,count__48233_48874,i__48234_48875,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48336_48903,map__48336_48904__$1,gline_48905,gcol_48906,name_48907,seq__48311_48894__$1,temp__5735__auto___48892,vec__48308_48876,column_48877,column_info_48878,vec__48228_48869,line_48870,columns_48871,inverted))
,cljs.core.sorted_map()));


var G__48912 = cljs.core.next(seq__48311_48894__$1);
var G__48913 = null;
var G__48914 = (0);
var G__48915 = (0);
seq__48311_48879 = G__48912;
chunk__48312_48880 = G__48913;
count__48313_48881 = G__48914;
i__48314_48882 = G__48915;
continue;
}
} else {
}
}
break;
}


var G__48916 = seq__48231_48872;
var G__48917 = chunk__48232_48873;
var G__48918 = count__48233_48874;
var G__48919 = (i__48234_48875 + (1));
seq__48231_48872 = G__48916;
chunk__48232_48873 = G__48917;
count__48233_48874 = G__48918;
i__48234_48875 = G__48919;
continue;
} else {
var temp__5735__auto___48920 = cljs.core.seq(seq__48231_48872);
if(temp__5735__auto___48920){
var seq__48231_48921__$1 = temp__5735__auto___48920;
if(cljs.core.chunked_seq_QMARK_(seq__48231_48921__$1)){
var c__4556__auto___48922 = cljs.core.chunk_first(seq__48231_48921__$1);
var G__48923 = cljs.core.chunk_rest(seq__48231_48921__$1);
var G__48924 = c__4556__auto___48922;
var G__48925 = cljs.core.count(c__4556__auto___48922);
var G__48926 = (0);
seq__48231_48872 = G__48923;
chunk__48232_48873 = G__48924;
count__48233_48874 = G__48925;
i__48234_48875 = G__48926;
continue;
} else {
var vec__48338_48927 = cljs.core.first(seq__48231_48921__$1);
var column_48928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48338_48927,(0),null);
var column_info_48929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48338_48927,(1),null);
var seq__48342_48930 = cljs.core.seq(column_info_48929);
var chunk__48343_48931 = null;
var count__48344_48932 = (0);
var i__48345_48933 = (0);
while(true){
if((i__48345_48933 < count__48344_48932)){
var map__48353_48938 = chunk__48343_48931.cljs$core$IIndexed$_nth$arity$2(null,i__48345_48933);
var map__48353_48939__$1 = (((((!((map__48353_48938 == null))))?(((((map__48353_48938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48353_48938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48353_48938):map__48353_48938);
var gline_48940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353_48939__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_48941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353_48939__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_48942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353_48939__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_48940], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48342_48930,chunk__48343_48931,count__48344_48932,i__48345_48933,seq__48231_48872,chunk__48232_48873,count__48233_48874,i__48234_48875,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48353_48938,map__48353_48939__$1,gline_48940,gcol_48941,name_48942,vec__48338_48927,column_48928,column_info_48929,seq__48231_48921__$1,temp__5735__auto___48920,vec__48228_48869,line_48870,columns_48871,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_48941], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_48870,new cljs.core.Keyword(null,"col","col",-1959363084),column_48928,new cljs.core.Keyword(null,"name","name",1843675177),name_48942], null));
});})(seq__48342_48930,chunk__48343_48931,count__48344_48932,i__48345_48933,seq__48231_48872,chunk__48232_48873,count__48233_48874,i__48234_48875,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48353_48938,map__48353_48939__$1,gline_48940,gcol_48941,name_48942,vec__48338_48927,column_48928,column_info_48929,seq__48231_48921__$1,temp__5735__auto___48920,vec__48228_48869,line_48870,columns_48871,inverted))
,cljs.core.sorted_map()));


var G__48953 = seq__48342_48930;
var G__48954 = chunk__48343_48931;
var G__48955 = count__48344_48932;
var G__48956 = (i__48345_48933 + (1));
seq__48342_48930 = G__48953;
chunk__48343_48931 = G__48954;
count__48344_48932 = G__48955;
i__48345_48933 = G__48956;
continue;
} else {
var temp__5735__auto___48957__$1 = cljs.core.seq(seq__48342_48930);
if(temp__5735__auto___48957__$1){
var seq__48342_48958__$1 = temp__5735__auto___48957__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48342_48958__$1)){
var c__4556__auto___48959 = cljs.core.chunk_first(seq__48342_48958__$1);
var G__48960 = cljs.core.chunk_rest(seq__48342_48958__$1);
var G__48961 = c__4556__auto___48959;
var G__48962 = cljs.core.count(c__4556__auto___48959);
var G__48963 = (0);
seq__48342_48930 = G__48960;
chunk__48343_48931 = G__48961;
count__48344_48932 = G__48962;
i__48345_48933 = G__48963;
continue;
} else {
var map__48355_48964 = cljs.core.first(seq__48342_48958__$1);
var map__48355_48965__$1 = (((((!((map__48355_48964 == null))))?(((((map__48355_48964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48355_48964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48355_48964):map__48355_48964);
var gline_48966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355_48965__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_48967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355_48965__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_48968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355_48965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_48966], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48342_48930,chunk__48343_48931,count__48344_48932,i__48345_48933,seq__48231_48872,chunk__48232_48873,count__48233_48874,i__48234_48875,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48355_48964,map__48355_48965__$1,gline_48966,gcol_48967,name_48968,seq__48342_48958__$1,temp__5735__auto___48957__$1,vec__48338_48927,column_48928,column_info_48929,seq__48231_48921__$1,temp__5735__auto___48920,vec__48228_48869,line_48870,columns_48871,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_48967], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_48870,new cljs.core.Keyword(null,"col","col",-1959363084),column_48928,new cljs.core.Keyword(null,"name","name",1843675177),name_48968], null));
});})(seq__48342_48930,chunk__48343_48931,count__48344_48932,i__48345_48933,seq__48231_48872,chunk__48232_48873,count__48233_48874,i__48234_48875,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48355_48964,map__48355_48965__$1,gline_48966,gcol_48967,name_48968,seq__48342_48958__$1,temp__5735__auto___48957__$1,vec__48338_48927,column_48928,column_info_48929,seq__48231_48921__$1,temp__5735__auto___48920,vec__48228_48869,line_48870,columns_48871,inverted))
,cljs.core.sorted_map()));


var G__48977 = cljs.core.next(seq__48342_48958__$1);
var G__48978 = null;
var G__48979 = (0);
var G__48980 = (0);
seq__48342_48930 = G__48977;
chunk__48343_48931 = G__48978;
count__48344_48932 = G__48979;
i__48345_48933 = G__48980;
continue;
}
} else {
}
}
break;
}


var G__48984 = cljs.core.next(seq__48231_48921__$1);
var G__48985 = null;
var G__48986 = (0);
var G__48987 = (0);
seq__48231_48872 = G__48984;
chunk__48232_48873 = G__48985;
count__48233_48874 = G__48986;
i__48234_48875 = G__48987;
continue;
}
} else {
}
}
break;
}


var G__48988 = seq__47915_48865;
var G__48989 = chunk__47916_48866;
var G__48990 = count__47917_48867;
var G__48991 = (i__47918_48868 + (1));
seq__47915_48865 = G__48988;
chunk__47916_48866 = G__48989;
count__47917_48867 = G__48990;
i__47918_48868 = G__48991;
continue;
} else {
var temp__5735__auto___48992 = cljs.core.seq(seq__47915_48865);
if(temp__5735__auto___48992){
var seq__47915_48993__$1 = temp__5735__auto___48992;
if(cljs.core.chunked_seq_QMARK_(seq__47915_48993__$1)){
var c__4556__auto___48994 = cljs.core.chunk_first(seq__47915_48993__$1);
var G__48995 = cljs.core.chunk_rest(seq__47915_48993__$1);
var G__48996 = c__4556__auto___48994;
var G__48997 = cljs.core.count(c__4556__auto___48994);
var G__48998 = (0);
seq__47915_48865 = G__48995;
chunk__47916_48866 = G__48996;
count__47917_48867 = G__48997;
i__47918_48868 = G__48998;
continue;
} else {
var vec__48361_48999 = cljs.core.first(seq__47915_48993__$1);
var line_49000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361_48999,(0),null);
var columns_49001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361_48999,(1),null);
var seq__48364_49002 = cljs.core.seq(columns_49001);
var chunk__48365_49003 = null;
var count__48366_49004 = (0);
var i__48367_49005 = (0);
while(true){
if((i__48367_49005 < count__48366_49004)){
var vec__48420_49009 = chunk__48365_49003.cljs$core$IIndexed$_nth$arity$2(null,i__48367_49005);
var column_49010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48420_49009,(0),null);
var column_info_49011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48420_49009,(1),null);
var seq__48423_49012 = cljs.core.seq(column_info_49011);
var chunk__48424_49013 = null;
var count__48425_49014 = (0);
var i__48426_49015 = (0);
while(true){
if((i__48426_49015 < count__48425_49014)){
var map__48441_49019 = chunk__48424_49013.cljs$core$IIndexed$_nth$arity$2(null,i__48426_49015);
var map__48441_49020__$1 = (((((!((map__48441_49019 == null))))?(((((map__48441_49019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48441_49019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48441_49019):map__48441_49019);
var gline_49021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48441_49020__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48441_49020__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48441_49020__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49021], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48423_49012,chunk__48424_49013,count__48425_49014,i__48426_49015,seq__48364_49002,chunk__48365_49003,count__48366_49004,i__48367_49005,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48441_49019,map__48441_49020__$1,gline_49021,gcol_49022,name_49023,vec__48420_49009,column_49010,column_info_49011,vec__48361_48999,line_49000,columns_49001,seq__47915_48993__$1,temp__5735__auto___48992,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49022], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49000,new cljs.core.Keyword(null,"col","col",-1959363084),column_49010,new cljs.core.Keyword(null,"name","name",1843675177),name_49023], null));
});})(seq__48423_49012,chunk__48424_49013,count__48425_49014,i__48426_49015,seq__48364_49002,chunk__48365_49003,count__48366_49004,i__48367_49005,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48441_49019,map__48441_49020__$1,gline_49021,gcol_49022,name_49023,vec__48420_49009,column_49010,column_info_49011,vec__48361_48999,line_49000,columns_49001,seq__47915_48993__$1,temp__5735__auto___48992,inverted))
,cljs.core.sorted_map()));


var G__49031 = seq__48423_49012;
var G__49032 = chunk__48424_49013;
var G__49033 = count__48425_49014;
var G__49034 = (i__48426_49015 + (1));
seq__48423_49012 = G__49031;
chunk__48424_49013 = G__49032;
count__48425_49014 = G__49033;
i__48426_49015 = G__49034;
continue;
} else {
var temp__5735__auto___49035__$1 = cljs.core.seq(seq__48423_49012);
if(temp__5735__auto___49035__$1){
var seq__48423_49038__$1 = temp__5735__auto___49035__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48423_49038__$1)){
var c__4556__auto___49040 = cljs.core.chunk_first(seq__48423_49038__$1);
var G__49041 = cljs.core.chunk_rest(seq__48423_49038__$1);
var G__49042 = c__4556__auto___49040;
var G__49043 = cljs.core.count(c__4556__auto___49040);
var G__49044 = (0);
seq__48423_49012 = G__49041;
chunk__48424_49013 = G__49042;
count__48425_49014 = G__49043;
i__48426_49015 = G__49044;
continue;
} else {
var map__48451_49045 = cljs.core.first(seq__48423_49038__$1);
var map__48451_49046__$1 = (((((!((map__48451_49045 == null))))?(((((map__48451_49045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48451_49045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48451_49045):map__48451_49045);
var gline_49047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48451_49046__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48451_49046__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48451_49046__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49047], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48423_49012,chunk__48424_49013,count__48425_49014,i__48426_49015,seq__48364_49002,chunk__48365_49003,count__48366_49004,i__48367_49005,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48451_49045,map__48451_49046__$1,gline_49047,gcol_49048,name_49049,seq__48423_49038__$1,temp__5735__auto___49035__$1,vec__48420_49009,column_49010,column_info_49011,vec__48361_48999,line_49000,columns_49001,seq__47915_48993__$1,temp__5735__auto___48992,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49048], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49000,new cljs.core.Keyword(null,"col","col",-1959363084),column_49010,new cljs.core.Keyword(null,"name","name",1843675177),name_49049], null));
});})(seq__48423_49012,chunk__48424_49013,count__48425_49014,i__48426_49015,seq__48364_49002,chunk__48365_49003,count__48366_49004,i__48367_49005,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48451_49045,map__48451_49046__$1,gline_49047,gcol_49048,name_49049,seq__48423_49038__$1,temp__5735__auto___49035__$1,vec__48420_49009,column_49010,column_info_49011,vec__48361_48999,line_49000,columns_49001,seq__47915_48993__$1,temp__5735__auto___48992,inverted))
,cljs.core.sorted_map()));


var G__49058 = cljs.core.next(seq__48423_49038__$1);
var G__49059 = null;
var G__49060 = (0);
var G__49061 = (0);
seq__48423_49012 = G__49058;
chunk__48424_49013 = G__49059;
count__48425_49014 = G__49060;
i__48426_49015 = G__49061;
continue;
}
} else {
}
}
break;
}


var G__49062 = seq__48364_49002;
var G__49063 = chunk__48365_49003;
var G__49064 = count__48366_49004;
var G__49065 = (i__48367_49005 + (1));
seq__48364_49002 = G__49062;
chunk__48365_49003 = G__49063;
count__48366_49004 = G__49064;
i__48367_49005 = G__49065;
continue;
} else {
var temp__5735__auto___49066__$1 = cljs.core.seq(seq__48364_49002);
if(temp__5735__auto___49066__$1){
var seq__48364_49067__$1 = temp__5735__auto___49066__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48364_49067__$1)){
var c__4556__auto___49068 = cljs.core.chunk_first(seq__48364_49067__$1);
var G__49069 = cljs.core.chunk_rest(seq__48364_49067__$1);
var G__49070 = c__4556__auto___49068;
var G__49071 = cljs.core.count(c__4556__auto___49068);
var G__49072 = (0);
seq__48364_49002 = G__49069;
chunk__48365_49003 = G__49070;
count__48366_49004 = G__49071;
i__48367_49005 = G__49072;
continue;
} else {
var vec__48462_49073 = cljs.core.first(seq__48364_49067__$1);
var column_49074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48462_49073,(0),null);
var column_info_49075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48462_49073,(1),null);
var seq__48466_49076 = cljs.core.seq(column_info_49075);
var chunk__48467_49077 = null;
var count__48468_49078 = (0);
var i__48469_49079 = (0);
while(true){
if((i__48469_49079 < count__48468_49078)){
var map__48483_49083 = chunk__48467_49077.cljs$core$IIndexed$_nth$arity$2(null,i__48469_49079);
var map__48483_49084__$1 = (((((!((map__48483_49083 == null))))?(((((map__48483_49083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48483_49083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48483_49083):map__48483_49083);
var gline_49085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48483_49084__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48483_49084__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48483_49084__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49085], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48466_49076,chunk__48467_49077,count__48468_49078,i__48469_49079,seq__48364_49002,chunk__48365_49003,count__48366_49004,i__48367_49005,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48483_49083,map__48483_49084__$1,gline_49085,gcol_49086,name_49087,vec__48462_49073,column_49074,column_info_49075,seq__48364_49067__$1,temp__5735__auto___49066__$1,vec__48361_48999,line_49000,columns_49001,seq__47915_48993__$1,temp__5735__auto___48992,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49086], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49000,new cljs.core.Keyword(null,"col","col",-1959363084),column_49074,new cljs.core.Keyword(null,"name","name",1843675177),name_49087], null));
});})(seq__48466_49076,chunk__48467_49077,count__48468_49078,i__48469_49079,seq__48364_49002,chunk__48365_49003,count__48366_49004,i__48367_49005,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48483_49083,map__48483_49084__$1,gline_49085,gcol_49086,name_49087,vec__48462_49073,column_49074,column_info_49075,seq__48364_49067__$1,temp__5735__auto___49066__$1,vec__48361_48999,line_49000,columns_49001,seq__47915_48993__$1,temp__5735__auto___48992,inverted))
,cljs.core.sorted_map()));


var G__49091 = seq__48466_49076;
var G__49092 = chunk__48467_49077;
var G__49093 = count__48468_49078;
var G__49094 = (i__48469_49079 + (1));
seq__48466_49076 = G__49091;
chunk__48467_49077 = G__49092;
count__48468_49078 = G__49093;
i__48469_49079 = G__49094;
continue;
} else {
var temp__5735__auto___49098__$2 = cljs.core.seq(seq__48466_49076);
if(temp__5735__auto___49098__$2){
var seq__48466_49099__$1 = temp__5735__auto___49098__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48466_49099__$1)){
var c__4556__auto___49100 = cljs.core.chunk_first(seq__48466_49099__$1);
var G__49101 = cljs.core.chunk_rest(seq__48466_49099__$1);
var G__49102 = c__4556__auto___49100;
var G__49103 = cljs.core.count(c__4556__auto___49100);
var G__49104 = (0);
seq__48466_49076 = G__49101;
chunk__48467_49077 = G__49102;
count__48468_49078 = G__49103;
i__48469_49079 = G__49104;
continue;
} else {
var map__48493_49105 = cljs.core.first(seq__48466_49099__$1);
var map__48493_49106__$1 = (((((!((map__48493_49105 == null))))?(((((map__48493_49105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48493_49105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48493_49105):map__48493_49105);
var gline_49107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493_49106__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493_49106__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493_49106__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49107], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48466_49076,chunk__48467_49077,count__48468_49078,i__48469_49079,seq__48364_49002,chunk__48365_49003,count__48366_49004,i__48367_49005,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48493_49105,map__48493_49106__$1,gline_49107,gcol_49108,name_49109,seq__48466_49099__$1,temp__5735__auto___49098__$2,vec__48462_49073,column_49074,column_info_49075,seq__48364_49067__$1,temp__5735__auto___49066__$1,vec__48361_48999,line_49000,columns_49001,seq__47915_48993__$1,temp__5735__auto___48992,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49108], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49000,new cljs.core.Keyword(null,"col","col",-1959363084),column_49074,new cljs.core.Keyword(null,"name","name",1843675177),name_49109], null));
});})(seq__48466_49076,chunk__48467_49077,count__48468_49078,i__48469_49079,seq__48364_49002,chunk__48365_49003,count__48366_49004,i__48367_49005,seq__47915_48865,chunk__47916_48866,count__47917_48867,i__47918_48868,map__48493_49105,map__48493_49106__$1,gline_49107,gcol_49108,name_49109,seq__48466_49099__$1,temp__5735__auto___49098__$2,vec__48462_49073,column_49074,column_info_49075,seq__48364_49067__$1,temp__5735__auto___49066__$1,vec__48361_48999,line_49000,columns_49001,seq__47915_48993__$1,temp__5735__auto___48992,inverted))
,cljs.core.sorted_map()));


var G__49116 = cljs.core.next(seq__48466_49099__$1);
var G__49117 = null;
var G__49118 = (0);
var G__49119 = (0);
seq__48466_49076 = G__49116;
chunk__48467_49077 = G__49117;
count__48468_49078 = G__49118;
i__48469_49079 = G__49119;
continue;
}
} else {
}
}
break;
}


var G__49120 = cljs.core.next(seq__48364_49067__$1);
var G__49121 = null;
var G__49122 = (0);
var G__49123 = (0);
seq__48364_49002 = G__49120;
chunk__48365_49003 = G__49121;
count__48366_49004 = G__49122;
i__48367_49005 = G__49123;
continue;
}
} else {
}
}
break;
}


var G__49124 = cljs.core.next(seq__47915_48993__$1);
var G__49125 = null;
var G__49126 = (0);
var G__49127 = (0);
seq__47915_48865 = G__49124;
chunk__47916_48866 = G__49125;
count__47917_48867 = G__49126;
i__47918_48868 = G__49127;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

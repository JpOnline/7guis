goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__29186){
var vec__29187 = p__29186;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29187,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29187,(1),null);
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
var vec__29192 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29192,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29192,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29192,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29192,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29192,(4),null);
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
var vec__29196 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(4),null);
var vec__29199 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29199,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29199,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29199,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29199,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29199,(4),null);
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
var map__29204 = segmap;
var map__29204__$1 = (((((!((map__29204 == null))))?(((((map__29204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29204):map__29204);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__29213 = arguments.length;
switch (G__29213) {
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
var vec__29219 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__30358 = cljs.core.next(segs__$1);
var G__30359 = nrelseg;
var G__30360 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__30358;
relseg__$1 = G__30359;
result__$1 = G__30360;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29219,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29219,(1),null);
var G__30362 = (gline + (1));
var G__30363 = cljs.core.next(lines__$1);
var G__30364 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__30365 = result__$1;
gline = G__30362;
lines__$1 = G__30363;
relseg = G__30364;
result = G__30365;
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
var map__29230 = segmap;
var map__29230__$1 = (((((!((map__29230 == null))))?(((((map__29230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29230):map__29230);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29230__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29230__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29230__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29230__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29230__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__29229_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29229_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__29236 = arguments.length;
switch (G__29236) {
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
var vec__29248 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__30382 = cljs.core.next(segs__$1);
var G__30383 = nrelseg;
var G__30384 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__30382;
relseg__$1 = G__30383;
result__$1 = G__30384;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29248,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29248,(1),null);
var G__30389 = (gline + (1));
var G__30390 = cljs.core.next(lines__$1);
var G__30391 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__30392 = result__$1;
gline = G__30389;
lines__$1 = G__30390;
relseg = G__30391;
result = G__30392;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__29259){
var vec__29260 = p__29259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29260,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29260,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29260,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29260,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29260,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__29263){
var vec__29264 = p__29263;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29264,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29264,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29264,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29264,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29264,(4),null);
var seg = vec__29264;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__29268){
var vec__29269 = p__29268;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29269,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29269,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29269,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29269,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29269,(4),null);
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
var seq__29290 = cljs.core.seq(infos);
var chunk__29291 = null;
var count__29292 = (0);
var i__29293 = (0);
while(true){
if((i__29293 < count__29292)){
var info = chunk__29291.cljs$core$IIndexed$_nth$arity$2(null,i__29293);
var segv_30398 = info__GT_segv(info,source_idx,line,col);
var gline_30399 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_30400 = cljs.core.count(cljs.core.deref(lines));
if((gline_30399 > (lc_30400 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29290,chunk__29291,count__29292,i__29293,segv_30398,gline_30399,lc_30400,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_30399 - (lc_30400 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_30398], null));
});})(seq__29290,chunk__29291,count__29292,i__29293,segv_30398,gline_30399,lc_30400,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29290,chunk__29291,count__29292,i__29293,segv_30398,gline_30399,lc_30400,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30399], null),cljs.core.conj,segv_30398);
});})(seq__29290,chunk__29291,count__29292,i__29293,segv_30398,gline_30399,lc_30400,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__30402 = seq__29290;
var G__30403 = chunk__29291;
var G__30404 = count__29292;
var G__30405 = (i__29293 + (1));
seq__29290 = G__30402;
chunk__29291 = G__30403;
count__29292 = G__30404;
i__29293 = G__30405;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29290);
if(temp__5735__auto__){
var seq__29290__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29290__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29290__$1);
var G__30409 = cljs.core.chunk_rest(seq__29290__$1);
var G__30410 = c__4556__auto__;
var G__30411 = cljs.core.count(c__4556__auto__);
var G__30412 = (0);
seq__29290 = G__30409;
chunk__29291 = G__30410;
count__29292 = G__30411;
i__29293 = G__30412;
continue;
} else {
var info = cljs.core.first(seq__29290__$1);
var segv_30413 = info__GT_segv(info,source_idx,line,col);
var gline_30414 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_30415 = cljs.core.count(cljs.core.deref(lines));
if((gline_30414 > (lc_30415 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29290,chunk__29291,count__29292,i__29293,segv_30413,gline_30414,lc_30415,info,seq__29290__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_30414 - (lc_30415 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_30413], null));
});})(seq__29290,chunk__29291,count__29292,i__29293,segv_30413,gline_30414,lc_30415,info,seq__29290__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29290,chunk__29291,count__29292,i__29293,segv_30413,gline_30414,lc_30415,info,seq__29290__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30414], null),cljs.core.conj,segv_30413);
});})(seq__29290,chunk__29291,count__29292,i__29293,segv_30413,gline_30414,lc_30415,info,seq__29290__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__30428 = cljs.core.next(seq__29290__$1);
var G__30429 = null;
var G__30430 = (0);
var G__30431 = (0);
seq__29290 = G__30428;
chunk__29291 = G__30429;
count__29292 = G__30430;
i__29293 = G__30431;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__29314_30433 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__29315_30434 = null;
var count__29316_30435 = (0);
var i__29317_30436 = (0);
while(true){
if((i__29317_30436 < count__29316_30435)){
var vec__29580_30444 = chunk__29315_30434.cljs$core$IIndexed$_nth$arity$2(null,i__29317_30436);
var source_idx_30445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29580_30444,(0),null);
var vec__29583_30446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29580_30444,(1),null);
var __30447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29583_30446,(0),null);
var lines_30448__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29583_30446,(1),null);
var seq__29586_30449 = cljs.core.seq(lines_30448__$1);
var chunk__29587_30450 = null;
var count__29588_30451 = (0);
var i__29589_30452 = (0);
while(true){
if((i__29589_30452 < count__29588_30451)){
var vec__29650_30453 = chunk__29587_30450.cljs$core$IIndexed$_nth$arity$2(null,i__29589_30452);
var line_30454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29650_30453,(0),null);
var cols_30455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29650_30453,(1),null);
var seq__29653_30456 = cljs.core.seq(cols_30455);
var chunk__29654_30457 = null;
var count__29655_30458 = (0);
var i__29656_30459 = (0);
while(true){
if((i__29656_30459 < count__29655_30458)){
var vec__29663_30460 = chunk__29654_30457.cljs$core$IIndexed$_nth$arity$2(null,i__29656_30459);
var col_30461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29663_30460,(0),null);
var infos_30462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29663_30460,(1),null);
encode_cols(infos_30462,source_idx_30445,line_30454,col_30461);


var G__30463 = seq__29653_30456;
var G__30464 = chunk__29654_30457;
var G__30465 = count__29655_30458;
var G__30466 = (i__29656_30459 + (1));
seq__29653_30456 = G__30463;
chunk__29654_30457 = G__30464;
count__29655_30458 = G__30465;
i__29656_30459 = G__30466;
continue;
} else {
var temp__5735__auto___30468 = cljs.core.seq(seq__29653_30456);
if(temp__5735__auto___30468){
var seq__29653_30472__$1 = temp__5735__auto___30468;
if(cljs.core.chunked_seq_QMARK_(seq__29653_30472__$1)){
var c__4556__auto___30473 = cljs.core.chunk_first(seq__29653_30472__$1);
var G__30474 = cljs.core.chunk_rest(seq__29653_30472__$1);
var G__30475 = c__4556__auto___30473;
var G__30476 = cljs.core.count(c__4556__auto___30473);
var G__30477 = (0);
seq__29653_30456 = G__30474;
chunk__29654_30457 = G__30475;
count__29655_30458 = G__30476;
i__29656_30459 = G__30477;
continue;
} else {
var vec__29666_30479 = cljs.core.first(seq__29653_30472__$1);
var col_30480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29666_30479,(0),null);
var infos_30481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29666_30479,(1),null);
encode_cols(infos_30481,source_idx_30445,line_30454,col_30480);


var G__30482 = cljs.core.next(seq__29653_30472__$1);
var G__30483 = null;
var G__30484 = (0);
var G__30485 = (0);
seq__29653_30456 = G__30482;
chunk__29654_30457 = G__30483;
count__29655_30458 = G__30484;
i__29656_30459 = G__30485;
continue;
}
} else {
}
}
break;
}


var G__30486 = seq__29586_30449;
var G__30487 = chunk__29587_30450;
var G__30488 = count__29588_30451;
var G__30489 = (i__29589_30452 + (1));
seq__29586_30449 = G__30486;
chunk__29587_30450 = G__30487;
count__29588_30451 = G__30488;
i__29589_30452 = G__30489;
continue;
} else {
var temp__5735__auto___30490 = cljs.core.seq(seq__29586_30449);
if(temp__5735__auto___30490){
var seq__29586_30491__$1 = temp__5735__auto___30490;
if(cljs.core.chunked_seq_QMARK_(seq__29586_30491__$1)){
var c__4556__auto___30492 = cljs.core.chunk_first(seq__29586_30491__$1);
var G__30493 = cljs.core.chunk_rest(seq__29586_30491__$1);
var G__30494 = c__4556__auto___30492;
var G__30495 = cljs.core.count(c__4556__auto___30492);
var G__30496 = (0);
seq__29586_30449 = G__30493;
chunk__29587_30450 = G__30494;
count__29588_30451 = G__30495;
i__29589_30452 = G__30496;
continue;
} else {
var vec__29671_30497 = cljs.core.first(seq__29586_30491__$1);
var line_30498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29671_30497,(0),null);
var cols_30499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29671_30497,(1),null);
var seq__29674_30500 = cljs.core.seq(cols_30499);
var chunk__29675_30501 = null;
var count__29676_30502 = (0);
var i__29677_30503 = (0);
while(true){
if((i__29677_30503 < count__29676_30502)){
var vec__29688_30504 = chunk__29675_30501.cljs$core$IIndexed$_nth$arity$2(null,i__29677_30503);
var col_30505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29688_30504,(0),null);
var infos_30506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29688_30504,(1),null);
encode_cols(infos_30506,source_idx_30445,line_30498,col_30505);


var G__30510 = seq__29674_30500;
var G__30511 = chunk__29675_30501;
var G__30512 = count__29676_30502;
var G__30513 = (i__29677_30503 + (1));
seq__29674_30500 = G__30510;
chunk__29675_30501 = G__30511;
count__29676_30502 = G__30512;
i__29677_30503 = G__30513;
continue;
} else {
var temp__5735__auto___30514__$1 = cljs.core.seq(seq__29674_30500);
if(temp__5735__auto___30514__$1){
var seq__29674_30516__$1 = temp__5735__auto___30514__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29674_30516__$1)){
var c__4556__auto___30517 = cljs.core.chunk_first(seq__29674_30516__$1);
var G__30518 = cljs.core.chunk_rest(seq__29674_30516__$1);
var G__30519 = c__4556__auto___30517;
var G__30520 = cljs.core.count(c__4556__auto___30517);
var G__30521 = (0);
seq__29674_30500 = G__30518;
chunk__29675_30501 = G__30519;
count__29676_30502 = G__30520;
i__29677_30503 = G__30521;
continue;
} else {
var vec__29693_30522 = cljs.core.first(seq__29674_30516__$1);
var col_30523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29693_30522,(0),null);
var infos_30524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29693_30522,(1),null);
encode_cols(infos_30524,source_idx_30445,line_30498,col_30523);


var G__30525 = cljs.core.next(seq__29674_30516__$1);
var G__30526 = null;
var G__30527 = (0);
var G__30528 = (0);
seq__29674_30500 = G__30525;
chunk__29675_30501 = G__30526;
count__29676_30502 = G__30527;
i__29677_30503 = G__30528;
continue;
}
} else {
}
}
break;
}


var G__30529 = cljs.core.next(seq__29586_30491__$1);
var G__30530 = null;
var G__30531 = (0);
var G__30532 = (0);
seq__29586_30449 = G__30529;
chunk__29587_30450 = G__30530;
count__29588_30451 = G__30531;
i__29589_30452 = G__30532;
continue;
}
} else {
}
}
break;
}


var G__30533 = seq__29314_30433;
var G__30534 = chunk__29315_30434;
var G__30535 = count__29316_30435;
var G__30536 = (i__29317_30436 + (1));
seq__29314_30433 = G__30533;
chunk__29315_30434 = G__30534;
count__29316_30435 = G__30535;
i__29317_30436 = G__30536;
continue;
} else {
var temp__5735__auto___30537 = cljs.core.seq(seq__29314_30433);
if(temp__5735__auto___30537){
var seq__29314_30538__$1 = temp__5735__auto___30537;
if(cljs.core.chunked_seq_QMARK_(seq__29314_30538__$1)){
var c__4556__auto___30539 = cljs.core.chunk_first(seq__29314_30538__$1);
var G__30540 = cljs.core.chunk_rest(seq__29314_30538__$1);
var G__30541 = c__4556__auto___30539;
var G__30542 = cljs.core.count(c__4556__auto___30539);
var G__30543 = (0);
seq__29314_30433 = G__30540;
chunk__29315_30434 = G__30541;
count__29316_30435 = G__30542;
i__29317_30436 = G__30543;
continue;
} else {
var vec__29696_30544 = cljs.core.first(seq__29314_30538__$1);
var source_idx_30545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29696_30544,(0),null);
var vec__29699_30546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29696_30544,(1),null);
var __30547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29699_30546,(0),null);
var lines_30548__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29699_30546,(1),null);
var seq__29702_30549 = cljs.core.seq(lines_30548__$1);
var chunk__29703_30550 = null;
var count__29704_30551 = (0);
var i__29705_30552 = (0);
while(true){
if((i__29705_30552 < count__29704_30551)){
var vec__29752_30558 = chunk__29703_30550.cljs$core$IIndexed$_nth$arity$2(null,i__29705_30552);
var line_30559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29752_30558,(0),null);
var cols_30560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29752_30558,(1),null);
var seq__29755_30562 = cljs.core.seq(cols_30560);
var chunk__29756_30563 = null;
var count__29757_30564 = (0);
var i__29758_30565 = (0);
while(true){
if((i__29758_30565 < count__29757_30564)){
var vec__29769_30567 = chunk__29756_30563.cljs$core$IIndexed$_nth$arity$2(null,i__29758_30565);
var col_30568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29769_30567,(0),null);
var infos_30569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29769_30567,(1),null);
encode_cols(infos_30569,source_idx_30545,line_30559,col_30568);


var G__30570 = seq__29755_30562;
var G__30571 = chunk__29756_30563;
var G__30572 = count__29757_30564;
var G__30573 = (i__29758_30565 + (1));
seq__29755_30562 = G__30570;
chunk__29756_30563 = G__30571;
count__29757_30564 = G__30572;
i__29758_30565 = G__30573;
continue;
} else {
var temp__5735__auto___30574__$1 = cljs.core.seq(seq__29755_30562);
if(temp__5735__auto___30574__$1){
var seq__29755_30575__$1 = temp__5735__auto___30574__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29755_30575__$1)){
var c__4556__auto___30576 = cljs.core.chunk_first(seq__29755_30575__$1);
var G__30577 = cljs.core.chunk_rest(seq__29755_30575__$1);
var G__30578 = c__4556__auto___30576;
var G__30579 = cljs.core.count(c__4556__auto___30576);
var G__30580 = (0);
seq__29755_30562 = G__30577;
chunk__29756_30563 = G__30578;
count__29757_30564 = G__30579;
i__29758_30565 = G__30580;
continue;
} else {
var vec__29776_30581 = cljs.core.first(seq__29755_30575__$1);
var col_30582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29776_30581,(0),null);
var infos_30583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29776_30581,(1),null);
encode_cols(infos_30583,source_idx_30545,line_30559,col_30582);


var G__30584 = cljs.core.next(seq__29755_30575__$1);
var G__30585 = null;
var G__30586 = (0);
var G__30587 = (0);
seq__29755_30562 = G__30584;
chunk__29756_30563 = G__30585;
count__29757_30564 = G__30586;
i__29758_30565 = G__30587;
continue;
}
} else {
}
}
break;
}


var G__30588 = seq__29702_30549;
var G__30589 = chunk__29703_30550;
var G__30590 = count__29704_30551;
var G__30591 = (i__29705_30552 + (1));
seq__29702_30549 = G__30588;
chunk__29703_30550 = G__30589;
count__29704_30551 = G__30590;
i__29705_30552 = G__30591;
continue;
} else {
var temp__5735__auto___30592__$1 = cljs.core.seq(seq__29702_30549);
if(temp__5735__auto___30592__$1){
var seq__29702_30593__$1 = temp__5735__auto___30592__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29702_30593__$1)){
var c__4556__auto___30597 = cljs.core.chunk_first(seq__29702_30593__$1);
var G__30598 = cljs.core.chunk_rest(seq__29702_30593__$1);
var G__30599 = c__4556__auto___30597;
var G__30600 = cljs.core.count(c__4556__auto___30597);
var G__30601 = (0);
seq__29702_30549 = G__30598;
chunk__29703_30550 = G__30599;
count__29704_30551 = G__30600;
i__29705_30552 = G__30601;
continue;
} else {
var vec__29779_30602 = cljs.core.first(seq__29702_30593__$1);
var line_30603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29779_30602,(0),null);
var cols_30604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29779_30602,(1),null);
var seq__29782_30607 = cljs.core.seq(cols_30604);
var chunk__29783_30608 = null;
var count__29784_30609 = (0);
var i__29785_30610 = (0);
while(true){
if((i__29785_30610 < count__29784_30609)){
var vec__29797_30611 = chunk__29783_30608.cljs$core$IIndexed$_nth$arity$2(null,i__29785_30610);
var col_30612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29797_30611,(0),null);
var infos_30613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29797_30611,(1),null);
encode_cols(infos_30613,source_idx_30545,line_30603,col_30612);


var G__30617 = seq__29782_30607;
var G__30618 = chunk__29783_30608;
var G__30619 = count__29784_30609;
var G__30620 = (i__29785_30610 + (1));
seq__29782_30607 = G__30617;
chunk__29783_30608 = G__30618;
count__29784_30609 = G__30619;
i__29785_30610 = G__30620;
continue;
} else {
var temp__5735__auto___30623__$2 = cljs.core.seq(seq__29782_30607);
if(temp__5735__auto___30623__$2){
var seq__29782_30624__$1 = temp__5735__auto___30623__$2;
if(cljs.core.chunked_seq_QMARK_(seq__29782_30624__$1)){
var c__4556__auto___30626 = cljs.core.chunk_first(seq__29782_30624__$1);
var G__30627 = cljs.core.chunk_rest(seq__29782_30624__$1);
var G__30628 = c__4556__auto___30626;
var G__30629 = cljs.core.count(c__4556__auto___30626);
var G__30630 = (0);
seq__29782_30607 = G__30627;
chunk__29783_30608 = G__30628;
count__29784_30609 = G__30629;
i__29785_30610 = G__30630;
continue;
} else {
var vec__29800_30631 = cljs.core.first(seq__29782_30624__$1);
var col_30632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29800_30631,(0),null);
var infos_30633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29800_30631,(1),null);
encode_cols(infos_30633,source_idx_30545,line_30603,col_30632);


var G__30634 = cljs.core.next(seq__29782_30624__$1);
var G__30635 = null;
var G__30636 = (0);
var G__30637 = (0);
seq__29782_30607 = G__30634;
chunk__29783_30608 = G__30635;
count__29784_30609 = G__30636;
i__29785_30610 = G__30637;
continue;
}
} else {
}
}
break;
}


var G__30641 = cljs.core.next(seq__29702_30593__$1);
var G__30642 = null;
var G__30643 = (0);
var G__30644 = (0);
seq__29702_30549 = G__30641;
chunk__29703_30550 = G__30642;
count__29704_30551 = G__30643;
i__29705_30552 = G__30644;
continue;
}
} else {
}
}
break;
}


var G__30645 = cljs.core.next(seq__29314_30538__$1);
var G__30646 = null;
var G__30647 = (0);
var G__30648 = (0);
seq__29314_30433 = G__30645;
chunk__29315_30434 = G__30646;
count__29316_30435 = G__30647;
i__29317_30436 = G__30648;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__29806 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__29280_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29280_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__29284_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__29284_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29286_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__29286_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__29813 = G__29806;
goog.object.set(G__29813,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__29813;
} else {
return G__29806;
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
var vec__29814 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29814,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29814,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__29817 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(1),null);
var G__30655 = cljs.core.next(col_map_seq);
var G__30656 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__29817,col,infos,vec__29814,line,col_map){
return (function (v,p__29821){
var map__29822 = p__29821;
var map__29822__$1 = (((((!((map__29822 == null))))?(((((map__29822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29822):map__29822);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29822__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29822__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__29817,col,infos,vec__29814,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__30655;
new_cols = G__30656;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__30659 = cljs.core.next(line_map_seq);
var G__30660 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__30659;
new_lines = G__30660;
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
var seq__29824_30665 = cljs.core.seq(reverse_map);
var chunk__29825_30666 = null;
var count__29826_30667 = (0);
var i__29827_30668 = (0);
while(true){
if((i__29827_30668 < count__29826_30667)){
var vec__30063_30672 = chunk__29825_30666.cljs$core$IIndexed$_nth$arity$2(null,i__29827_30668);
var line_30673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30063_30672,(0),null);
var columns_30674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30063_30672,(1),null);
var seq__30066_30675 = cljs.core.seq(columns_30674);
var chunk__30067_30676 = null;
var count__30068_30677 = (0);
var i__30069_30678 = (0);
while(true){
if((i__30069_30678 < count__30068_30677)){
var vec__30155_30679 = chunk__30067_30676.cljs$core$IIndexed$_nth$arity$2(null,i__30069_30678);
var column_30680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30155_30679,(0),null);
var column_info_30681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30155_30679,(1),null);
var seq__30158_30682 = cljs.core.seq(column_info_30681);
var chunk__30159_30683 = null;
var count__30160_30684 = (0);
var i__30161_30685 = (0);
while(true){
if((i__30161_30685 < count__30160_30684)){
var map__30170_30686 = chunk__30159_30683.cljs$core$IIndexed$_nth$arity$2(null,i__30161_30685);
var map__30170_30687__$1 = (((((!((map__30170_30686 == null))))?(((((map__30170_30686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30170_30686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30170_30686):map__30170_30686);
var gline_30688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30170_30687__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30170_30687__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30170_30687__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30688], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30158_30682,chunk__30159_30683,count__30160_30684,i__30161_30685,seq__30066_30675,chunk__30067_30676,count__30068_30677,i__30069_30678,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30170_30686,map__30170_30687__$1,gline_30688,gcol_30689,name_30690,vec__30155_30679,column_30680,column_info_30681,vec__30063_30672,line_30673,columns_30674,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30689], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30673,new cljs.core.Keyword(null,"col","col",-1959363084),column_30680,new cljs.core.Keyword(null,"name","name",1843675177),name_30690], null));
});})(seq__30158_30682,chunk__30159_30683,count__30160_30684,i__30161_30685,seq__30066_30675,chunk__30067_30676,count__30068_30677,i__30069_30678,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30170_30686,map__30170_30687__$1,gline_30688,gcol_30689,name_30690,vec__30155_30679,column_30680,column_info_30681,vec__30063_30672,line_30673,columns_30674,inverted))
,cljs.core.sorted_map()));


var G__30698 = seq__30158_30682;
var G__30699 = chunk__30159_30683;
var G__30700 = count__30160_30684;
var G__30701 = (i__30161_30685 + (1));
seq__30158_30682 = G__30698;
chunk__30159_30683 = G__30699;
count__30160_30684 = G__30700;
i__30161_30685 = G__30701;
continue;
} else {
var temp__5735__auto___30702 = cljs.core.seq(seq__30158_30682);
if(temp__5735__auto___30702){
var seq__30158_30704__$1 = temp__5735__auto___30702;
if(cljs.core.chunked_seq_QMARK_(seq__30158_30704__$1)){
var c__4556__auto___30705 = cljs.core.chunk_first(seq__30158_30704__$1);
var G__30707 = cljs.core.chunk_rest(seq__30158_30704__$1);
var G__30708 = c__4556__auto___30705;
var G__30709 = cljs.core.count(c__4556__auto___30705);
var G__30710 = (0);
seq__30158_30682 = G__30707;
chunk__30159_30683 = G__30708;
count__30160_30684 = G__30709;
i__30161_30685 = G__30710;
continue;
} else {
var map__30173_30712 = cljs.core.first(seq__30158_30704__$1);
var map__30173_30713__$1 = (((((!((map__30173_30712 == null))))?(((((map__30173_30712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30173_30712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30173_30712):map__30173_30712);
var gline_30714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30173_30713__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30173_30713__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30173_30713__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30714], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30158_30682,chunk__30159_30683,count__30160_30684,i__30161_30685,seq__30066_30675,chunk__30067_30676,count__30068_30677,i__30069_30678,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30173_30712,map__30173_30713__$1,gline_30714,gcol_30715,name_30716,seq__30158_30704__$1,temp__5735__auto___30702,vec__30155_30679,column_30680,column_info_30681,vec__30063_30672,line_30673,columns_30674,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30715], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30673,new cljs.core.Keyword(null,"col","col",-1959363084),column_30680,new cljs.core.Keyword(null,"name","name",1843675177),name_30716], null));
});})(seq__30158_30682,chunk__30159_30683,count__30160_30684,i__30161_30685,seq__30066_30675,chunk__30067_30676,count__30068_30677,i__30069_30678,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30173_30712,map__30173_30713__$1,gline_30714,gcol_30715,name_30716,seq__30158_30704__$1,temp__5735__auto___30702,vec__30155_30679,column_30680,column_info_30681,vec__30063_30672,line_30673,columns_30674,inverted))
,cljs.core.sorted_map()));


var G__30723 = cljs.core.next(seq__30158_30704__$1);
var G__30724 = null;
var G__30725 = (0);
var G__30726 = (0);
seq__30158_30682 = G__30723;
chunk__30159_30683 = G__30724;
count__30160_30684 = G__30725;
i__30161_30685 = G__30726;
continue;
}
} else {
}
}
break;
}


var G__30728 = seq__30066_30675;
var G__30729 = chunk__30067_30676;
var G__30730 = count__30068_30677;
var G__30731 = (i__30069_30678 + (1));
seq__30066_30675 = G__30728;
chunk__30067_30676 = G__30729;
count__30068_30677 = G__30730;
i__30069_30678 = G__30731;
continue;
} else {
var temp__5735__auto___30732 = cljs.core.seq(seq__30066_30675);
if(temp__5735__auto___30732){
var seq__30066_30733__$1 = temp__5735__auto___30732;
if(cljs.core.chunked_seq_QMARK_(seq__30066_30733__$1)){
var c__4556__auto___30734 = cljs.core.chunk_first(seq__30066_30733__$1);
var G__30735 = cljs.core.chunk_rest(seq__30066_30733__$1);
var G__30736 = c__4556__auto___30734;
var G__30737 = cljs.core.count(c__4556__auto___30734);
var G__30738 = (0);
seq__30066_30675 = G__30735;
chunk__30067_30676 = G__30736;
count__30068_30677 = G__30737;
i__30069_30678 = G__30738;
continue;
} else {
var vec__30176_30739 = cljs.core.first(seq__30066_30733__$1);
var column_30740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30176_30739,(0),null);
var column_info_30741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30176_30739,(1),null);
var seq__30179_30742 = cljs.core.seq(column_info_30741);
var chunk__30180_30743 = null;
var count__30181_30744 = (0);
var i__30182_30745 = (0);
while(true){
if((i__30182_30745 < count__30181_30744)){
var map__30192_30746 = chunk__30180_30743.cljs$core$IIndexed$_nth$arity$2(null,i__30182_30745);
var map__30192_30747__$1 = (((((!((map__30192_30746 == null))))?(((((map__30192_30746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30192_30746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30192_30746):map__30192_30746);
var gline_30748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30192_30747__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30192_30747__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30192_30747__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30748], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30179_30742,chunk__30180_30743,count__30181_30744,i__30182_30745,seq__30066_30675,chunk__30067_30676,count__30068_30677,i__30069_30678,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30192_30746,map__30192_30747__$1,gline_30748,gcol_30749,name_30750,vec__30176_30739,column_30740,column_info_30741,seq__30066_30733__$1,temp__5735__auto___30732,vec__30063_30672,line_30673,columns_30674,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30749], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30673,new cljs.core.Keyword(null,"col","col",-1959363084),column_30740,new cljs.core.Keyword(null,"name","name",1843675177),name_30750], null));
});})(seq__30179_30742,chunk__30180_30743,count__30181_30744,i__30182_30745,seq__30066_30675,chunk__30067_30676,count__30068_30677,i__30069_30678,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30192_30746,map__30192_30747__$1,gline_30748,gcol_30749,name_30750,vec__30176_30739,column_30740,column_info_30741,seq__30066_30733__$1,temp__5735__auto___30732,vec__30063_30672,line_30673,columns_30674,inverted))
,cljs.core.sorted_map()));


var G__30751 = seq__30179_30742;
var G__30752 = chunk__30180_30743;
var G__30753 = count__30181_30744;
var G__30754 = (i__30182_30745 + (1));
seq__30179_30742 = G__30751;
chunk__30180_30743 = G__30752;
count__30181_30744 = G__30753;
i__30182_30745 = G__30754;
continue;
} else {
var temp__5735__auto___30755__$1 = cljs.core.seq(seq__30179_30742);
if(temp__5735__auto___30755__$1){
var seq__30179_30756__$1 = temp__5735__auto___30755__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30179_30756__$1)){
var c__4556__auto___30757 = cljs.core.chunk_first(seq__30179_30756__$1);
var G__30758 = cljs.core.chunk_rest(seq__30179_30756__$1);
var G__30759 = c__4556__auto___30757;
var G__30760 = cljs.core.count(c__4556__auto___30757);
var G__30761 = (0);
seq__30179_30742 = G__30758;
chunk__30180_30743 = G__30759;
count__30181_30744 = G__30760;
i__30182_30745 = G__30761;
continue;
} else {
var map__30198_30762 = cljs.core.first(seq__30179_30756__$1);
var map__30198_30763__$1 = (((((!((map__30198_30762 == null))))?(((((map__30198_30762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30198_30762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30198_30762):map__30198_30762);
var gline_30764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30198_30763__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30198_30763__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30198_30763__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30764], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30179_30742,chunk__30180_30743,count__30181_30744,i__30182_30745,seq__30066_30675,chunk__30067_30676,count__30068_30677,i__30069_30678,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30198_30762,map__30198_30763__$1,gline_30764,gcol_30765,name_30766,seq__30179_30756__$1,temp__5735__auto___30755__$1,vec__30176_30739,column_30740,column_info_30741,seq__30066_30733__$1,temp__5735__auto___30732,vec__30063_30672,line_30673,columns_30674,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30765], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30673,new cljs.core.Keyword(null,"col","col",-1959363084),column_30740,new cljs.core.Keyword(null,"name","name",1843675177),name_30766], null));
});})(seq__30179_30742,chunk__30180_30743,count__30181_30744,i__30182_30745,seq__30066_30675,chunk__30067_30676,count__30068_30677,i__30069_30678,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30198_30762,map__30198_30763__$1,gline_30764,gcol_30765,name_30766,seq__30179_30756__$1,temp__5735__auto___30755__$1,vec__30176_30739,column_30740,column_info_30741,seq__30066_30733__$1,temp__5735__auto___30732,vec__30063_30672,line_30673,columns_30674,inverted))
,cljs.core.sorted_map()));


var G__30768 = cljs.core.next(seq__30179_30756__$1);
var G__30769 = null;
var G__30770 = (0);
var G__30771 = (0);
seq__30179_30742 = G__30768;
chunk__30180_30743 = G__30769;
count__30181_30744 = G__30770;
i__30182_30745 = G__30771;
continue;
}
} else {
}
}
break;
}


var G__30772 = cljs.core.next(seq__30066_30733__$1);
var G__30773 = null;
var G__30774 = (0);
var G__30775 = (0);
seq__30066_30675 = G__30772;
chunk__30067_30676 = G__30773;
count__30068_30677 = G__30774;
i__30069_30678 = G__30775;
continue;
}
} else {
}
}
break;
}


var G__30776 = seq__29824_30665;
var G__30777 = chunk__29825_30666;
var G__30778 = count__29826_30667;
var G__30779 = (i__29827_30668 + (1));
seq__29824_30665 = G__30776;
chunk__29825_30666 = G__30777;
count__29826_30667 = G__30778;
i__29827_30668 = G__30779;
continue;
} else {
var temp__5735__auto___30780 = cljs.core.seq(seq__29824_30665);
if(temp__5735__auto___30780){
var seq__29824_30781__$1 = temp__5735__auto___30780;
if(cljs.core.chunked_seq_QMARK_(seq__29824_30781__$1)){
var c__4556__auto___30783 = cljs.core.chunk_first(seq__29824_30781__$1);
var G__30784 = cljs.core.chunk_rest(seq__29824_30781__$1);
var G__30785 = c__4556__auto___30783;
var G__30786 = cljs.core.count(c__4556__auto___30783);
var G__30787 = (0);
seq__29824_30665 = G__30784;
chunk__29825_30666 = G__30785;
count__29826_30667 = G__30786;
i__29827_30668 = G__30787;
continue;
} else {
var vec__30202_30789 = cljs.core.first(seq__29824_30781__$1);
var line_30790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30202_30789,(0),null);
var columns_30791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30202_30789,(1),null);
var seq__30205_30792 = cljs.core.seq(columns_30791);
var chunk__30206_30793 = null;
var count__30207_30794 = (0);
var i__30208_30795 = (0);
while(true){
if((i__30208_30795 < count__30207_30794)){
var vec__30283_30797 = chunk__30206_30793.cljs$core$IIndexed$_nth$arity$2(null,i__30208_30795);
var column_30798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30283_30797,(0),null);
var column_info_30799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30283_30797,(1),null);
var seq__30286_30800 = cljs.core.seq(column_info_30799);
var chunk__30287_30801 = null;
var count__30288_30802 = (0);
var i__30289_30803 = (0);
while(true){
if((i__30289_30803 < count__30288_30802)){
var map__30300_30804 = chunk__30287_30801.cljs$core$IIndexed$_nth$arity$2(null,i__30289_30803);
var map__30300_30805__$1 = (((((!((map__30300_30804 == null))))?(((((map__30300_30804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30300_30804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30300_30804):map__30300_30804);
var gline_30806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30300_30805__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30300_30805__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30300_30805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30806], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30286_30800,chunk__30287_30801,count__30288_30802,i__30289_30803,seq__30205_30792,chunk__30206_30793,count__30207_30794,i__30208_30795,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30300_30804,map__30300_30805__$1,gline_30806,gcol_30807,name_30808,vec__30283_30797,column_30798,column_info_30799,vec__30202_30789,line_30790,columns_30791,seq__29824_30781__$1,temp__5735__auto___30780,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30807], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30790,new cljs.core.Keyword(null,"col","col",-1959363084),column_30798,new cljs.core.Keyword(null,"name","name",1843675177),name_30808], null));
});})(seq__30286_30800,chunk__30287_30801,count__30288_30802,i__30289_30803,seq__30205_30792,chunk__30206_30793,count__30207_30794,i__30208_30795,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30300_30804,map__30300_30805__$1,gline_30806,gcol_30807,name_30808,vec__30283_30797,column_30798,column_info_30799,vec__30202_30789,line_30790,columns_30791,seq__29824_30781__$1,temp__5735__auto___30780,inverted))
,cljs.core.sorted_map()));


var G__30809 = seq__30286_30800;
var G__30810 = chunk__30287_30801;
var G__30811 = count__30288_30802;
var G__30812 = (i__30289_30803 + (1));
seq__30286_30800 = G__30809;
chunk__30287_30801 = G__30810;
count__30288_30802 = G__30811;
i__30289_30803 = G__30812;
continue;
} else {
var temp__5735__auto___30813__$1 = cljs.core.seq(seq__30286_30800);
if(temp__5735__auto___30813__$1){
var seq__30286_30814__$1 = temp__5735__auto___30813__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30286_30814__$1)){
var c__4556__auto___30815 = cljs.core.chunk_first(seq__30286_30814__$1);
var G__30816 = cljs.core.chunk_rest(seq__30286_30814__$1);
var G__30817 = c__4556__auto___30815;
var G__30818 = cljs.core.count(c__4556__auto___30815);
var G__30819 = (0);
seq__30286_30800 = G__30816;
chunk__30287_30801 = G__30817;
count__30288_30802 = G__30818;
i__30289_30803 = G__30819;
continue;
} else {
var map__30307_30820 = cljs.core.first(seq__30286_30814__$1);
var map__30307_30821__$1 = (((((!((map__30307_30820 == null))))?(((((map__30307_30820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30307_30820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30307_30820):map__30307_30820);
var gline_30822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30307_30821__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30307_30821__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30307_30821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30822], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30286_30800,chunk__30287_30801,count__30288_30802,i__30289_30803,seq__30205_30792,chunk__30206_30793,count__30207_30794,i__30208_30795,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30307_30820,map__30307_30821__$1,gline_30822,gcol_30823,name_30824,seq__30286_30814__$1,temp__5735__auto___30813__$1,vec__30283_30797,column_30798,column_info_30799,vec__30202_30789,line_30790,columns_30791,seq__29824_30781__$1,temp__5735__auto___30780,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30823], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30790,new cljs.core.Keyword(null,"col","col",-1959363084),column_30798,new cljs.core.Keyword(null,"name","name",1843675177),name_30824], null));
});})(seq__30286_30800,chunk__30287_30801,count__30288_30802,i__30289_30803,seq__30205_30792,chunk__30206_30793,count__30207_30794,i__30208_30795,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30307_30820,map__30307_30821__$1,gline_30822,gcol_30823,name_30824,seq__30286_30814__$1,temp__5735__auto___30813__$1,vec__30283_30797,column_30798,column_info_30799,vec__30202_30789,line_30790,columns_30791,seq__29824_30781__$1,temp__5735__auto___30780,inverted))
,cljs.core.sorted_map()));


var G__30825 = cljs.core.next(seq__30286_30814__$1);
var G__30826 = null;
var G__30827 = (0);
var G__30828 = (0);
seq__30286_30800 = G__30825;
chunk__30287_30801 = G__30826;
count__30288_30802 = G__30827;
i__30289_30803 = G__30828;
continue;
}
} else {
}
}
break;
}


var G__30829 = seq__30205_30792;
var G__30830 = chunk__30206_30793;
var G__30831 = count__30207_30794;
var G__30832 = (i__30208_30795 + (1));
seq__30205_30792 = G__30829;
chunk__30206_30793 = G__30830;
count__30207_30794 = G__30831;
i__30208_30795 = G__30832;
continue;
} else {
var temp__5735__auto___30833__$1 = cljs.core.seq(seq__30205_30792);
if(temp__5735__auto___30833__$1){
var seq__30205_30834__$1 = temp__5735__auto___30833__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30205_30834__$1)){
var c__4556__auto___30835 = cljs.core.chunk_first(seq__30205_30834__$1);
var G__30839 = cljs.core.chunk_rest(seq__30205_30834__$1);
var G__30840 = c__4556__auto___30835;
var G__30841 = cljs.core.count(c__4556__auto___30835);
var G__30842 = (0);
seq__30205_30792 = G__30839;
chunk__30206_30793 = G__30840;
count__30207_30794 = G__30841;
i__30208_30795 = G__30842;
continue;
} else {
var vec__30311_30843 = cljs.core.first(seq__30205_30834__$1);
var column_30844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30311_30843,(0),null);
var column_info_30845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30311_30843,(1),null);
var seq__30314_30848 = cljs.core.seq(column_info_30845);
var chunk__30315_30849 = null;
var count__30316_30850 = (0);
var i__30317_30851 = (0);
while(true){
if((i__30317_30851 < count__30316_30850)){
var map__30327_30855 = chunk__30315_30849.cljs$core$IIndexed$_nth$arity$2(null,i__30317_30851);
var map__30327_30856__$1 = (((((!((map__30327_30855 == null))))?(((((map__30327_30855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30327_30855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30327_30855):map__30327_30855);
var gline_30857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30327_30856__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30327_30856__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30327_30856__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30857], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30314_30848,chunk__30315_30849,count__30316_30850,i__30317_30851,seq__30205_30792,chunk__30206_30793,count__30207_30794,i__30208_30795,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30327_30855,map__30327_30856__$1,gline_30857,gcol_30858,name_30859,vec__30311_30843,column_30844,column_info_30845,seq__30205_30834__$1,temp__5735__auto___30833__$1,vec__30202_30789,line_30790,columns_30791,seq__29824_30781__$1,temp__5735__auto___30780,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30858], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30790,new cljs.core.Keyword(null,"col","col",-1959363084),column_30844,new cljs.core.Keyword(null,"name","name",1843675177),name_30859], null));
});})(seq__30314_30848,chunk__30315_30849,count__30316_30850,i__30317_30851,seq__30205_30792,chunk__30206_30793,count__30207_30794,i__30208_30795,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30327_30855,map__30327_30856__$1,gline_30857,gcol_30858,name_30859,vec__30311_30843,column_30844,column_info_30845,seq__30205_30834__$1,temp__5735__auto___30833__$1,vec__30202_30789,line_30790,columns_30791,seq__29824_30781__$1,temp__5735__auto___30780,inverted))
,cljs.core.sorted_map()));


var G__30861 = seq__30314_30848;
var G__30862 = chunk__30315_30849;
var G__30863 = count__30316_30850;
var G__30864 = (i__30317_30851 + (1));
seq__30314_30848 = G__30861;
chunk__30315_30849 = G__30862;
count__30316_30850 = G__30863;
i__30317_30851 = G__30864;
continue;
} else {
var temp__5735__auto___30865__$2 = cljs.core.seq(seq__30314_30848);
if(temp__5735__auto___30865__$2){
var seq__30314_30867__$1 = temp__5735__auto___30865__$2;
if(cljs.core.chunked_seq_QMARK_(seq__30314_30867__$1)){
var c__4556__auto___30868 = cljs.core.chunk_first(seq__30314_30867__$1);
var G__30869 = cljs.core.chunk_rest(seq__30314_30867__$1);
var G__30870 = c__4556__auto___30868;
var G__30871 = cljs.core.count(c__4556__auto___30868);
var G__30872 = (0);
seq__30314_30848 = G__30869;
chunk__30315_30849 = G__30870;
count__30316_30850 = G__30871;
i__30317_30851 = G__30872;
continue;
} else {
var map__30333_30874 = cljs.core.first(seq__30314_30867__$1);
var map__30333_30875__$1 = (((((!((map__30333_30874 == null))))?(((((map__30333_30874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30333_30874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30333_30874):map__30333_30874);
var gline_30876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30333_30875__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30333_30875__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30333_30875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30876], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30314_30848,chunk__30315_30849,count__30316_30850,i__30317_30851,seq__30205_30792,chunk__30206_30793,count__30207_30794,i__30208_30795,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30333_30874,map__30333_30875__$1,gline_30876,gcol_30877,name_30878,seq__30314_30867__$1,temp__5735__auto___30865__$2,vec__30311_30843,column_30844,column_info_30845,seq__30205_30834__$1,temp__5735__auto___30833__$1,vec__30202_30789,line_30790,columns_30791,seq__29824_30781__$1,temp__5735__auto___30780,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30877], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30790,new cljs.core.Keyword(null,"col","col",-1959363084),column_30844,new cljs.core.Keyword(null,"name","name",1843675177),name_30878], null));
});})(seq__30314_30848,chunk__30315_30849,count__30316_30850,i__30317_30851,seq__30205_30792,chunk__30206_30793,count__30207_30794,i__30208_30795,seq__29824_30665,chunk__29825_30666,count__29826_30667,i__29827_30668,map__30333_30874,map__30333_30875__$1,gline_30876,gcol_30877,name_30878,seq__30314_30867__$1,temp__5735__auto___30865__$2,vec__30311_30843,column_30844,column_info_30845,seq__30205_30834__$1,temp__5735__auto___30833__$1,vec__30202_30789,line_30790,columns_30791,seq__29824_30781__$1,temp__5735__auto___30780,inverted))
,cljs.core.sorted_map()));


var G__30880 = cljs.core.next(seq__30314_30867__$1);
var G__30881 = null;
var G__30882 = (0);
var G__30883 = (0);
seq__30314_30848 = G__30880;
chunk__30315_30849 = G__30881;
count__30316_30850 = G__30882;
i__30317_30851 = G__30883;
continue;
}
} else {
}
}
break;
}


var G__30884 = cljs.core.next(seq__30205_30834__$1);
var G__30885 = null;
var G__30886 = (0);
var G__30887 = (0);
seq__30205_30792 = G__30884;
chunk__30206_30793 = G__30885;
count__30207_30794 = G__30886;
i__30208_30795 = G__30887;
continue;
}
} else {
}
}
break;
}


var G__30890 = cljs.core.next(seq__29824_30781__$1);
var G__30891 = null;
var G__30892 = (0);
var G__30893 = (0);
seq__29824_30665 = G__30890;
chunk__29825_30666 = G__30891;
count__29826_30667 = G__30892;
i__29827_30668 = G__30893;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map

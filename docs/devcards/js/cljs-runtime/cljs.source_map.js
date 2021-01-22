goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__35867){
var vec__35868 = p__35867;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35868,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35868,(1),null);
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
var vec__35871 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35871,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35871,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35871,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35871,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35871,(4),null);
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
var vec__35874 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35874,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35874,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35874,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35874,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35874,(4),null);
var vec__35877 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35877,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35877,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35877,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35877,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35877,(4),null);
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
var map__35880 = segmap;
var map__35880__$1 = (((((!((map__35880 == null))))?(((((map__35880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35880):map__35880);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__35883 = arguments.length;
switch (G__35883) {
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
var vec__35891 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__36805 = cljs.core.next(segs__$1);
var G__36806 = nrelseg;
var G__36807 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__36805;
relseg__$1 = G__36806;
result__$1 = G__36807;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35891,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35891,(1),null);
var G__36808 = (gline + (1));
var G__36809 = cljs.core.next(lines__$1);
var G__36810 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__36811 = result__$1;
gline = G__36808;
lines__$1 = G__36809;
relseg = G__36810;
result = G__36811;
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
var map__35895 = segmap;
var map__35895__$1 = (((((!((map__35895 == null))))?(((((map__35895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35895):map__35895);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__35894_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__35894_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__35898 = arguments.length;
switch (G__35898) {
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
var vec__35902 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__36825 = cljs.core.next(segs__$1);
var G__36826 = nrelseg;
var G__36827 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__36825;
relseg__$1 = G__36826;
result__$1 = G__36827;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(1),null);
var G__36828 = (gline + (1));
var G__36829 = cljs.core.next(lines__$1);
var G__36830 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__36831 = result__$1;
gline = G__36828;
lines__$1 = G__36829;
relseg = G__36830;
result = G__36831;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__35906){
var vec__35907 = p__35906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__35910){
var vec__35911 = p__35910;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35911,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35911,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35911,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35911,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35911,(4),null);
var seg = vec__35911;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__35914){
var vec__35915 = p__35914;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35915,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35915,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35915,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35915,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35915,(4),null);
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
var seq__35926 = cljs.core.seq(infos);
var chunk__35927 = null;
var count__35928 = (0);
var i__35929 = (0);
while(true){
if((i__35929 < count__35928)){
var info = chunk__35927.cljs$core$IIndexed$_nth$arity$2(null,i__35929);
var segv_36844 = info__GT_segv(info,source_idx,line,col);
var gline_36845 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_36846 = cljs.core.count(cljs.core.deref(lines));
if((gline_36845 > (lc_36846 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__35926,chunk__35927,count__35928,i__35929,segv_36844,gline_36845,lc_36846,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_36845 - (lc_36846 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_36844], null));
});})(seq__35926,chunk__35927,count__35928,i__35929,segv_36844,gline_36845,lc_36846,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__35926,chunk__35927,count__35928,i__35929,segv_36844,gline_36845,lc_36846,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_36845], null),cljs.core.conj,segv_36844);
});})(seq__35926,chunk__35927,count__35928,i__35929,segv_36844,gline_36845,lc_36846,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__36848 = seq__35926;
var G__36849 = chunk__35927;
var G__36850 = count__35928;
var G__36851 = (i__35929 + (1));
seq__35926 = G__36848;
chunk__35927 = G__36849;
count__35928 = G__36850;
i__35929 = G__36851;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35926);
if(temp__5735__auto__){
var seq__35926__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35926__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35926__$1);
var G__36853 = cljs.core.chunk_rest(seq__35926__$1);
var G__36854 = c__4556__auto__;
var G__36855 = cljs.core.count(c__4556__auto__);
var G__36856 = (0);
seq__35926 = G__36853;
chunk__35927 = G__36854;
count__35928 = G__36855;
i__35929 = G__36856;
continue;
} else {
var info = cljs.core.first(seq__35926__$1);
var segv_36857 = info__GT_segv(info,source_idx,line,col);
var gline_36858 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_36859 = cljs.core.count(cljs.core.deref(lines));
if((gline_36858 > (lc_36859 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__35926,chunk__35927,count__35928,i__35929,segv_36857,gline_36858,lc_36859,info,seq__35926__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_36858 - (lc_36859 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_36857], null));
});})(seq__35926,chunk__35927,count__35928,i__35929,segv_36857,gline_36858,lc_36859,info,seq__35926__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__35926,chunk__35927,count__35928,i__35929,segv_36857,gline_36858,lc_36859,info,seq__35926__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_36858], null),cljs.core.conj,segv_36857);
});})(seq__35926,chunk__35927,count__35928,i__35929,segv_36857,gline_36858,lc_36859,info,seq__35926__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__36864 = cljs.core.next(seq__35926__$1);
var G__36865 = null;
var G__36866 = (0);
var G__36867 = (0);
seq__35926 = G__36864;
chunk__35927 = G__36865;
count__35928 = G__36866;
i__35929 = G__36867;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__35949_36868 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__35950_36869 = null;
var count__35951_36870 = (0);
var i__35952_36871 = (0);
while(true){
if((i__35952_36871 < count__35951_36870)){
var vec__36158_36872 = chunk__35950_36869.cljs$core$IIndexed$_nth$arity$2(null,i__35952_36871);
var source_idx_36873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36158_36872,(0),null);
var vec__36161_36874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36158_36872,(1),null);
var __36875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36161_36874,(0),null);
var lines_36876__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36161_36874,(1),null);
var seq__36164_36877 = cljs.core.seq(lines_36876__$1);
var chunk__36165_36878 = null;
var count__36166_36879 = (0);
var i__36167_36880 = (0);
while(true){
if((i__36167_36880 < count__36166_36879)){
var vec__36218_36884 = chunk__36165_36878.cljs$core$IIndexed$_nth$arity$2(null,i__36167_36880);
var line_36885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36218_36884,(0),null);
var cols_36886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36218_36884,(1),null);
var seq__36221_36887 = cljs.core.seq(cols_36886);
var chunk__36222_36888 = null;
var count__36223_36889 = (0);
var i__36224_36890 = (0);
while(true){
if((i__36224_36890 < count__36223_36889)){
var vec__36234_36891 = chunk__36222_36888.cljs$core$IIndexed$_nth$arity$2(null,i__36224_36890);
var col_36892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36234_36891,(0),null);
var infos_36893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36234_36891,(1),null);
encode_cols(infos_36893,source_idx_36873,line_36885,col_36892);


var G__36894 = seq__36221_36887;
var G__36895 = chunk__36222_36888;
var G__36896 = count__36223_36889;
var G__36897 = (i__36224_36890 + (1));
seq__36221_36887 = G__36894;
chunk__36222_36888 = G__36895;
count__36223_36889 = G__36896;
i__36224_36890 = G__36897;
continue;
} else {
var temp__5735__auto___36898 = cljs.core.seq(seq__36221_36887);
if(temp__5735__auto___36898){
var seq__36221_36899__$1 = temp__5735__auto___36898;
if(cljs.core.chunked_seq_QMARK_(seq__36221_36899__$1)){
var c__4556__auto___36900 = cljs.core.chunk_first(seq__36221_36899__$1);
var G__36901 = cljs.core.chunk_rest(seq__36221_36899__$1);
var G__36902 = c__4556__auto___36900;
var G__36903 = cljs.core.count(c__4556__auto___36900);
var G__36904 = (0);
seq__36221_36887 = G__36901;
chunk__36222_36888 = G__36902;
count__36223_36889 = G__36903;
i__36224_36890 = G__36904;
continue;
} else {
var vec__36240_36905 = cljs.core.first(seq__36221_36899__$1);
var col_36906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36240_36905,(0),null);
var infos_36907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36240_36905,(1),null);
encode_cols(infos_36907,source_idx_36873,line_36885,col_36906);


var G__36912 = cljs.core.next(seq__36221_36899__$1);
var G__36913 = null;
var G__36914 = (0);
var G__36915 = (0);
seq__36221_36887 = G__36912;
chunk__36222_36888 = G__36913;
count__36223_36889 = G__36914;
i__36224_36890 = G__36915;
continue;
}
} else {
}
}
break;
}


var G__36916 = seq__36164_36877;
var G__36917 = chunk__36165_36878;
var G__36918 = count__36166_36879;
var G__36919 = (i__36167_36880 + (1));
seq__36164_36877 = G__36916;
chunk__36165_36878 = G__36917;
count__36166_36879 = G__36918;
i__36167_36880 = G__36919;
continue;
} else {
var temp__5735__auto___36920 = cljs.core.seq(seq__36164_36877);
if(temp__5735__auto___36920){
var seq__36164_36921__$1 = temp__5735__auto___36920;
if(cljs.core.chunked_seq_QMARK_(seq__36164_36921__$1)){
var c__4556__auto___36922 = cljs.core.chunk_first(seq__36164_36921__$1);
var G__36923 = cljs.core.chunk_rest(seq__36164_36921__$1);
var G__36924 = c__4556__auto___36922;
var G__36925 = cljs.core.count(c__4556__auto___36922);
var G__36926 = (0);
seq__36164_36877 = G__36923;
chunk__36165_36878 = G__36924;
count__36166_36879 = G__36925;
i__36167_36880 = G__36926;
continue;
} else {
var vec__36244_36927 = cljs.core.first(seq__36164_36921__$1);
var line_36928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36244_36927,(0),null);
var cols_36929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36244_36927,(1),null);
var seq__36250_36930 = cljs.core.seq(cols_36929);
var chunk__36251_36931 = null;
var count__36252_36932 = (0);
var i__36253_36933 = (0);
while(true){
if((i__36253_36933 < count__36252_36932)){
var vec__36262_36934 = chunk__36251_36931.cljs$core$IIndexed$_nth$arity$2(null,i__36253_36933);
var col_36935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36262_36934,(0),null);
var infos_36936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36262_36934,(1),null);
encode_cols(infos_36936,source_idx_36873,line_36928,col_36935);


var G__36937 = seq__36250_36930;
var G__36938 = chunk__36251_36931;
var G__36939 = count__36252_36932;
var G__36940 = (i__36253_36933 + (1));
seq__36250_36930 = G__36937;
chunk__36251_36931 = G__36938;
count__36252_36932 = G__36939;
i__36253_36933 = G__36940;
continue;
} else {
var temp__5735__auto___36941__$1 = cljs.core.seq(seq__36250_36930);
if(temp__5735__auto___36941__$1){
var seq__36250_36944__$1 = temp__5735__auto___36941__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36250_36944__$1)){
var c__4556__auto___36945 = cljs.core.chunk_first(seq__36250_36944__$1);
var G__36946 = cljs.core.chunk_rest(seq__36250_36944__$1);
var G__36947 = c__4556__auto___36945;
var G__36948 = cljs.core.count(c__4556__auto___36945);
var G__36949 = (0);
seq__36250_36930 = G__36946;
chunk__36251_36931 = G__36947;
count__36252_36932 = G__36948;
i__36253_36933 = G__36949;
continue;
} else {
var vec__36265_36952 = cljs.core.first(seq__36250_36944__$1);
var col_36953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36265_36952,(0),null);
var infos_36954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36265_36952,(1),null);
encode_cols(infos_36954,source_idx_36873,line_36928,col_36953);


var G__36957 = cljs.core.next(seq__36250_36944__$1);
var G__36958 = null;
var G__36959 = (0);
var G__36960 = (0);
seq__36250_36930 = G__36957;
chunk__36251_36931 = G__36958;
count__36252_36932 = G__36959;
i__36253_36933 = G__36960;
continue;
}
} else {
}
}
break;
}


var G__36963 = cljs.core.next(seq__36164_36921__$1);
var G__36964 = null;
var G__36965 = (0);
var G__36966 = (0);
seq__36164_36877 = G__36963;
chunk__36165_36878 = G__36964;
count__36166_36879 = G__36965;
i__36167_36880 = G__36966;
continue;
}
} else {
}
}
break;
}


var G__36967 = seq__35949_36868;
var G__36968 = chunk__35950_36869;
var G__36969 = count__35951_36870;
var G__36970 = (i__35952_36871 + (1));
seq__35949_36868 = G__36967;
chunk__35950_36869 = G__36968;
count__35951_36870 = G__36969;
i__35952_36871 = G__36970;
continue;
} else {
var temp__5735__auto___36971 = cljs.core.seq(seq__35949_36868);
if(temp__5735__auto___36971){
var seq__35949_36972__$1 = temp__5735__auto___36971;
if(cljs.core.chunked_seq_QMARK_(seq__35949_36972__$1)){
var c__4556__auto___36973 = cljs.core.chunk_first(seq__35949_36972__$1);
var G__36974 = cljs.core.chunk_rest(seq__35949_36972__$1);
var G__36975 = c__4556__auto___36973;
var G__36976 = cljs.core.count(c__4556__auto___36973);
var G__36977 = (0);
seq__35949_36868 = G__36974;
chunk__35950_36869 = G__36975;
count__35951_36870 = G__36976;
i__35952_36871 = G__36977;
continue;
} else {
var vec__36269_36978 = cljs.core.first(seq__35949_36972__$1);
var source_idx_36979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36269_36978,(0),null);
var vec__36272_36980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36269_36978,(1),null);
var __36981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272_36980,(0),null);
var lines_36982__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272_36980,(1),null);
var seq__36276_36983 = cljs.core.seq(lines_36982__$1);
var chunk__36277_36984 = null;
var count__36278_36985 = (0);
var i__36279_36986 = (0);
while(true){
if((i__36279_36986 < count__36278_36985)){
var vec__36337_36987 = chunk__36277_36984.cljs$core$IIndexed$_nth$arity$2(null,i__36279_36986);
var line_36988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36337_36987,(0),null);
var cols_36989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36337_36987,(1),null);
var seq__36340_36990 = cljs.core.seq(cols_36989);
var chunk__36341_36991 = null;
var count__36342_36992 = (0);
var i__36343_36993 = (0);
while(true){
if((i__36343_36993 < count__36342_36992)){
var vec__36351_36994 = chunk__36341_36991.cljs$core$IIndexed$_nth$arity$2(null,i__36343_36993);
var col_36995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36351_36994,(0),null);
var infos_36996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36351_36994,(1),null);
encode_cols(infos_36996,source_idx_36979,line_36988,col_36995);


var G__36997 = seq__36340_36990;
var G__36998 = chunk__36341_36991;
var G__36999 = count__36342_36992;
var G__37000 = (i__36343_36993 + (1));
seq__36340_36990 = G__36997;
chunk__36341_36991 = G__36998;
count__36342_36992 = G__36999;
i__36343_36993 = G__37000;
continue;
} else {
var temp__5735__auto___37001__$1 = cljs.core.seq(seq__36340_36990);
if(temp__5735__auto___37001__$1){
var seq__36340_37002__$1 = temp__5735__auto___37001__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36340_37002__$1)){
var c__4556__auto___37003 = cljs.core.chunk_first(seq__36340_37002__$1);
var G__37004 = cljs.core.chunk_rest(seq__36340_37002__$1);
var G__37005 = c__4556__auto___37003;
var G__37006 = cljs.core.count(c__4556__auto___37003);
var G__37007 = (0);
seq__36340_36990 = G__37004;
chunk__36341_36991 = G__37005;
count__36342_36992 = G__37006;
i__36343_36993 = G__37007;
continue;
} else {
var vec__36355_37008 = cljs.core.first(seq__36340_37002__$1);
var col_37009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36355_37008,(0),null);
var infos_37010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36355_37008,(1),null);
encode_cols(infos_37010,source_idx_36979,line_36988,col_37009);


var G__37014 = cljs.core.next(seq__36340_37002__$1);
var G__37015 = null;
var G__37016 = (0);
var G__37017 = (0);
seq__36340_36990 = G__37014;
chunk__36341_36991 = G__37015;
count__36342_36992 = G__37016;
i__36343_36993 = G__37017;
continue;
}
} else {
}
}
break;
}


var G__37018 = seq__36276_36983;
var G__37019 = chunk__36277_36984;
var G__37020 = count__36278_36985;
var G__37021 = (i__36279_36986 + (1));
seq__36276_36983 = G__37018;
chunk__36277_36984 = G__37019;
count__36278_36985 = G__37020;
i__36279_36986 = G__37021;
continue;
} else {
var temp__5735__auto___37022__$1 = cljs.core.seq(seq__36276_36983);
if(temp__5735__auto___37022__$1){
var seq__36276_37023__$1 = temp__5735__auto___37022__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36276_37023__$1)){
var c__4556__auto___37025 = cljs.core.chunk_first(seq__36276_37023__$1);
var G__37026 = cljs.core.chunk_rest(seq__36276_37023__$1);
var G__37027 = c__4556__auto___37025;
var G__37028 = cljs.core.count(c__4556__auto___37025);
var G__37029 = (0);
seq__36276_36983 = G__37026;
chunk__36277_36984 = G__37027;
count__36278_36985 = G__37028;
i__36279_36986 = G__37029;
continue;
} else {
var vec__36359_37032 = cljs.core.first(seq__36276_37023__$1);
var line_37033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36359_37032,(0),null);
var cols_37034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36359_37032,(1),null);
var seq__36362_37037 = cljs.core.seq(cols_37034);
var chunk__36363_37038 = null;
var count__36364_37039 = (0);
var i__36365_37040 = (0);
while(true){
if((i__36365_37040 < count__36364_37039)){
var vec__36373_37041 = chunk__36363_37038.cljs$core$IIndexed$_nth$arity$2(null,i__36365_37040);
var col_37042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36373_37041,(0),null);
var infos_37043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36373_37041,(1),null);
encode_cols(infos_37043,source_idx_36979,line_37033,col_37042);


var G__37044 = seq__36362_37037;
var G__37045 = chunk__36363_37038;
var G__37046 = count__36364_37039;
var G__37047 = (i__36365_37040 + (1));
seq__36362_37037 = G__37044;
chunk__36363_37038 = G__37045;
count__36364_37039 = G__37046;
i__36365_37040 = G__37047;
continue;
} else {
var temp__5735__auto___37050__$2 = cljs.core.seq(seq__36362_37037);
if(temp__5735__auto___37050__$2){
var seq__36362_37052__$1 = temp__5735__auto___37050__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36362_37052__$1)){
var c__4556__auto___37053 = cljs.core.chunk_first(seq__36362_37052__$1);
var G__37054 = cljs.core.chunk_rest(seq__36362_37052__$1);
var G__37055 = c__4556__auto___37053;
var G__37056 = cljs.core.count(c__4556__auto___37053);
var G__37057 = (0);
seq__36362_37037 = G__37054;
chunk__36363_37038 = G__37055;
count__36364_37039 = G__37056;
i__36365_37040 = G__37057;
continue;
} else {
var vec__36377_37058 = cljs.core.first(seq__36362_37052__$1);
var col_37059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36377_37058,(0),null);
var infos_37060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36377_37058,(1),null);
encode_cols(infos_37060,source_idx_36979,line_37033,col_37059);


var G__37063 = cljs.core.next(seq__36362_37052__$1);
var G__37064 = null;
var G__37065 = (0);
var G__37066 = (0);
seq__36362_37037 = G__37063;
chunk__36363_37038 = G__37064;
count__36364_37039 = G__37065;
i__36365_37040 = G__37066;
continue;
}
} else {
}
}
break;
}


var G__37067 = cljs.core.next(seq__36276_37023__$1);
var G__37068 = null;
var G__37069 = (0);
var G__37070 = (0);
seq__36276_36983 = G__37067;
chunk__36277_36984 = G__37068;
count__36278_36985 = G__37069;
i__36279_36986 = G__37070;
continue;
}
} else {
}
}
break;
}


var G__37071 = cljs.core.next(seq__35949_36972__$1);
var G__37072 = null;
var G__37073 = (0);
var G__37074 = (0);
seq__35949_36868 = G__37071;
chunk__35950_36869 = G__37072;
count__35951_36870 = G__37073;
i__35952_36871 = G__37074;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__36380 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__35919_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35919_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__35920_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__35920_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35922_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__35922_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__36382 = G__36380;
goog.object.set(G__36382,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__36382;
} else {
return G__36380;
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
var vec__36383 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36383,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36383,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__36388 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36388,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36388,(1),null);
var G__37075 = cljs.core.next(col_map_seq);
var G__37076 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__36388,col,infos,vec__36383,line,col_map){
return (function (v,p__36391){
var map__36392 = p__36391;
var map__36392__$1 = (((((!((map__36392 == null))))?(((((map__36392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36392):map__36392);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36392__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36392__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__36388,col,infos,vec__36383,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__37075;
new_cols = G__37076;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__37078 = cljs.core.next(line_map_seq);
var G__37079 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__37078;
new_lines = G__37079;
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
var seq__36394_37080 = cljs.core.seq(reverse_map);
var chunk__36395_37081 = null;
var count__36396_37082 = (0);
var i__36397_37083 = (0);
while(true){
if((i__36397_37083 < count__36396_37082)){
var vec__36569_37084 = chunk__36395_37081.cljs$core$IIndexed$_nth$arity$2(null,i__36397_37083);
var line_37085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36569_37084,(0),null);
var columns_37086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36569_37084,(1),null);
var seq__36572_37087 = cljs.core.seq(columns_37086);
var chunk__36573_37088 = null;
var count__36574_37089 = (0);
var i__36575_37090 = (0);
while(true){
if((i__36575_37090 < count__36574_37089)){
var vec__36619_37091 = chunk__36573_37088.cljs$core$IIndexed$_nth$arity$2(null,i__36575_37090);
var column_37092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36619_37091,(0),null);
var column_info_37093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36619_37091,(1),null);
var seq__36622_37094 = cljs.core.seq(column_info_37093);
var chunk__36623_37095 = null;
var count__36624_37096 = (0);
var i__36625_37097 = (0);
while(true){
if((i__36625_37097 < count__36624_37096)){
var map__36630_37098 = chunk__36623_37095.cljs$core$IIndexed$_nth$arity$2(null,i__36625_37097);
var map__36630_37099__$1 = (((((!((map__36630_37098 == null))))?(((((map__36630_37098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36630_37098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36630_37098):map__36630_37098);
var gline_37100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36630_37099__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_37101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36630_37099__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_37102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36630_37099__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_37100], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__36622_37094,chunk__36623_37095,count__36624_37096,i__36625_37097,seq__36572_37087,chunk__36573_37088,count__36574_37089,i__36575_37090,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36630_37098,map__36630_37099__$1,gline_37100,gcol_37101,name_37102,vec__36619_37091,column_37092,column_info_37093,vec__36569_37084,line_37085,columns_37086,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_37101], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_37085,new cljs.core.Keyword(null,"col","col",-1959363084),column_37092,new cljs.core.Keyword(null,"name","name",1843675177),name_37102], null));
});})(seq__36622_37094,chunk__36623_37095,count__36624_37096,i__36625_37097,seq__36572_37087,chunk__36573_37088,count__36574_37089,i__36575_37090,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36630_37098,map__36630_37099__$1,gline_37100,gcol_37101,name_37102,vec__36619_37091,column_37092,column_info_37093,vec__36569_37084,line_37085,columns_37086,inverted))
,cljs.core.sorted_map()));


var G__37103 = seq__36622_37094;
var G__37104 = chunk__36623_37095;
var G__37105 = count__36624_37096;
var G__37106 = (i__36625_37097 + (1));
seq__36622_37094 = G__37103;
chunk__36623_37095 = G__37104;
count__36624_37096 = G__37105;
i__36625_37097 = G__37106;
continue;
} else {
var temp__5735__auto___37107 = cljs.core.seq(seq__36622_37094);
if(temp__5735__auto___37107){
var seq__36622_37108__$1 = temp__5735__auto___37107;
if(cljs.core.chunked_seq_QMARK_(seq__36622_37108__$1)){
var c__4556__auto___37109 = cljs.core.chunk_first(seq__36622_37108__$1);
var G__37110 = cljs.core.chunk_rest(seq__36622_37108__$1);
var G__37111 = c__4556__auto___37109;
var G__37112 = cljs.core.count(c__4556__auto___37109);
var G__37113 = (0);
seq__36622_37094 = G__37110;
chunk__36623_37095 = G__37111;
count__36624_37096 = G__37112;
i__36625_37097 = G__37113;
continue;
} else {
var map__36632_37114 = cljs.core.first(seq__36622_37108__$1);
var map__36632_37115__$1 = (((((!((map__36632_37114 == null))))?(((((map__36632_37114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36632_37114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36632_37114):map__36632_37114);
var gline_37116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36632_37115__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_37117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36632_37115__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_37118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36632_37115__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_37116], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__36622_37094,chunk__36623_37095,count__36624_37096,i__36625_37097,seq__36572_37087,chunk__36573_37088,count__36574_37089,i__36575_37090,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36632_37114,map__36632_37115__$1,gline_37116,gcol_37117,name_37118,seq__36622_37108__$1,temp__5735__auto___37107,vec__36619_37091,column_37092,column_info_37093,vec__36569_37084,line_37085,columns_37086,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_37117], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_37085,new cljs.core.Keyword(null,"col","col",-1959363084),column_37092,new cljs.core.Keyword(null,"name","name",1843675177),name_37118], null));
});})(seq__36622_37094,chunk__36623_37095,count__36624_37096,i__36625_37097,seq__36572_37087,chunk__36573_37088,count__36574_37089,i__36575_37090,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36632_37114,map__36632_37115__$1,gline_37116,gcol_37117,name_37118,seq__36622_37108__$1,temp__5735__auto___37107,vec__36619_37091,column_37092,column_info_37093,vec__36569_37084,line_37085,columns_37086,inverted))
,cljs.core.sorted_map()));


var G__37119 = cljs.core.next(seq__36622_37108__$1);
var G__37120 = null;
var G__37121 = (0);
var G__37122 = (0);
seq__36622_37094 = G__37119;
chunk__36623_37095 = G__37120;
count__36624_37096 = G__37121;
i__36625_37097 = G__37122;
continue;
}
} else {
}
}
break;
}


var G__37123 = seq__36572_37087;
var G__37124 = chunk__36573_37088;
var G__37125 = count__36574_37089;
var G__37126 = (i__36575_37090 + (1));
seq__36572_37087 = G__37123;
chunk__36573_37088 = G__37124;
count__36574_37089 = G__37125;
i__36575_37090 = G__37126;
continue;
} else {
var temp__5735__auto___37127 = cljs.core.seq(seq__36572_37087);
if(temp__5735__auto___37127){
var seq__36572_37128__$1 = temp__5735__auto___37127;
if(cljs.core.chunked_seq_QMARK_(seq__36572_37128__$1)){
var c__4556__auto___37129 = cljs.core.chunk_first(seq__36572_37128__$1);
var G__37130 = cljs.core.chunk_rest(seq__36572_37128__$1);
var G__37131 = c__4556__auto___37129;
var G__37132 = cljs.core.count(c__4556__auto___37129);
var G__37133 = (0);
seq__36572_37087 = G__37130;
chunk__36573_37088 = G__37131;
count__36574_37089 = G__37132;
i__36575_37090 = G__37133;
continue;
} else {
var vec__36634_37134 = cljs.core.first(seq__36572_37128__$1);
var column_37135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36634_37134,(0),null);
var column_info_37136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36634_37134,(1),null);
var seq__36637_37137 = cljs.core.seq(column_info_37136);
var chunk__36638_37138 = null;
var count__36639_37139 = (0);
var i__36640_37140 = (0);
while(true){
if((i__36640_37140 < count__36639_37139)){
var map__36648_37141 = chunk__36638_37138.cljs$core$IIndexed$_nth$arity$2(null,i__36640_37140);
var map__36648_37142__$1 = (((((!((map__36648_37141 == null))))?(((((map__36648_37141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36648_37141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36648_37141):map__36648_37141);
var gline_37143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36648_37142__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_37144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36648_37142__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_37145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36648_37142__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_37143], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__36637_37137,chunk__36638_37138,count__36639_37139,i__36640_37140,seq__36572_37087,chunk__36573_37088,count__36574_37089,i__36575_37090,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36648_37141,map__36648_37142__$1,gline_37143,gcol_37144,name_37145,vec__36634_37134,column_37135,column_info_37136,seq__36572_37128__$1,temp__5735__auto___37127,vec__36569_37084,line_37085,columns_37086,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_37144], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_37085,new cljs.core.Keyword(null,"col","col",-1959363084),column_37135,new cljs.core.Keyword(null,"name","name",1843675177),name_37145], null));
});})(seq__36637_37137,chunk__36638_37138,count__36639_37139,i__36640_37140,seq__36572_37087,chunk__36573_37088,count__36574_37089,i__36575_37090,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36648_37141,map__36648_37142__$1,gline_37143,gcol_37144,name_37145,vec__36634_37134,column_37135,column_info_37136,seq__36572_37128__$1,temp__5735__auto___37127,vec__36569_37084,line_37085,columns_37086,inverted))
,cljs.core.sorted_map()));


var G__37153 = seq__36637_37137;
var G__37154 = chunk__36638_37138;
var G__37155 = count__36639_37139;
var G__37156 = (i__36640_37140 + (1));
seq__36637_37137 = G__37153;
chunk__36638_37138 = G__37154;
count__36639_37139 = G__37155;
i__36640_37140 = G__37156;
continue;
} else {
var temp__5735__auto___37157__$1 = cljs.core.seq(seq__36637_37137);
if(temp__5735__auto___37157__$1){
var seq__36637_37158__$1 = temp__5735__auto___37157__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36637_37158__$1)){
var c__4556__auto___37159 = cljs.core.chunk_first(seq__36637_37158__$1);
var G__37160 = cljs.core.chunk_rest(seq__36637_37158__$1);
var G__37161 = c__4556__auto___37159;
var G__37162 = cljs.core.count(c__4556__auto___37159);
var G__37163 = (0);
seq__36637_37137 = G__37160;
chunk__36638_37138 = G__37161;
count__36639_37139 = G__37162;
i__36640_37140 = G__37163;
continue;
} else {
var map__36652_37164 = cljs.core.first(seq__36637_37158__$1);
var map__36652_37165__$1 = (((((!((map__36652_37164 == null))))?(((((map__36652_37164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36652_37164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36652_37164):map__36652_37164);
var gline_37166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36652_37165__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_37167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36652_37165__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_37168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36652_37165__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_37166], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__36637_37137,chunk__36638_37138,count__36639_37139,i__36640_37140,seq__36572_37087,chunk__36573_37088,count__36574_37089,i__36575_37090,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36652_37164,map__36652_37165__$1,gline_37166,gcol_37167,name_37168,seq__36637_37158__$1,temp__5735__auto___37157__$1,vec__36634_37134,column_37135,column_info_37136,seq__36572_37128__$1,temp__5735__auto___37127,vec__36569_37084,line_37085,columns_37086,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_37167], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_37085,new cljs.core.Keyword(null,"col","col",-1959363084),column_37135,new cljs.core.Keyword(null,"name","name",1843675177),name_37168], null));
});})(seq__36637_37137,chunk__36638_37138,count__36639_37139,i__36640_37140,seq__36572_37087,chunk__36573_37088,count__36574_37089,i__36575_37090,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36652_37164,map__36652_37165__$1,gline_37166,gcol_37167,name_37168,seq__36637_37158__$1,temp__5735__auto___37157__$1,vec__36634_37134,column_37135,column_info_37136,seq__36572_37128__$1,temp__5735__auto___37127,vec__36569_37084,line_37085,columns_37086,inverted))
,cljs.core.sorted_map()));


var G__37169 = cljs.core.next(seq__36637_37158__$1);
var G__37170 = null;
var G__37171 = (0);
var G__37172 = (0);
seq__36637_37137 = G__37169;
chunk__36638_37138 = G__37170;
count__36639_37139 = G__37171;
i__36640_37140 = G__37172;
continue;
}
} else {
}
}
break;
}


var G__37173 = cljs.core.next(seq__36572_37128__$1);
var G__37174 = null;
var G__37175 = (0);
var G__37176 = (0);
seq__36572_37087 = G__37173;
chunk__36573_37088 = G__37174;
count__36574_37089 = G__37175;
i__36575_37090 = G__37176;
continue;
}
} else {
}
}
break;
}


var G__37177 = seq__36394_37080;
var G__37178 = chunk__36395_37081;
var G__37179 = count__36396_37082;
var G__37180 = (i__36397_37083 + (1));
seq__36394_37080 = G__37177;
chunk__36395_37081 = G__37178;
count__36396_37082 = G__37179;
i__36397_37083 = G__37180;
continue;
} else {
var temp__5735__auto___37181 = cljs.core.seq(seq__36394_37080);
if(temp__5735__auto___37181){
var seq__36394_37182__$1 = temp__5735__auto___37181;
if(cljs.core.chunked_seq_QMARK_(seq__36394_37182__$1)){
var c__4556__auto___37183 = cljs.core.chunk_first(seq__36394_37182__$1);
var G__37184 = cljs.core.chunk_rest(seq__36394_37182__$1);
var G__37185 = c__4556__auto___37183;
var G__37186 = cljs.core.count(c__4556__auto___37183);
var G__37187 = (0);
seq__36394_37080 = G__37184;
chunk__36395_37081 = G__37185;
count__36396_37082 = G__37186;
i__36397_37083 = G__37187;
continue;
} else {
var vec__36656_37188 = cljs.core.first(seq__36394_37182__$1);
var line_37189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36656_37188,(0),null);
var columns_37190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36656_37188,(1),null);
var seq__36659_37191 = cljs.core.seq(columns_37190);
var chunk__36660_37192 = null;
var count__36661_37193 = (0);
var i__36662_37194 = (0);
while(true){
if((i__36662_37194 < count__36661_37193)){
var vec__36716_37195 = chunk__36660_37192.cljs$core$IIndexed$_nth$arity$2(null,i__36662_37194);
var column_37196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36716_37195,(0),null);
var column_info_37197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36716_37195,(1),null);
var seq__36719_37199 = cljs.core.seq(column_info_37197);
var chunk__36720_37200 = null;
var count__36721_37201 = (0);
var i__36722_37202 = (0);
while(true){
if((i__36722_37202 < count__36721_37201)){
var map__36732_37203 = chunk__36720_37200.cljs$core$IIndexed$_nth$arity$2(null,i__36722_37202);
var map__36732_37204__$1 = (((((!((map__36732_37203 == null))))?(((((map__36732_37203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36732_37203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36732_37203):map__36732_37203);
var gline_37205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732_37204__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_37206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732_37204__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_37207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732_37204__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_37205], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__36719_37199,chunk__36720_37200,count__36721_37201,i__36722_37202,seq__36659_37191,chunk__36660_37192,count__36661_37193,i__36662_37194,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36732_37203,map__36732_37204__$1,gline_37205,gcol_37206,name_37207,vec__36716_37195,column_37196,column_info_37197,vec__36656_37188,line_37189,columns_37190,seq__36394_37182__$1,temp__5735__auto___37181,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_37206], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_37189,new cljs.core.Keyword(null,"col","col",-1959363084),column_37196,new cljs.core.Keyword(null,"name","name",1843675177),name_37207], null));
});})(seq__36719_37199,chunk__36720_37200,count__36721_37201,i__36722_37202,seq__36659_37191,chunk__36660_37192,count__36661_37193,i__36662_37194,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36732_37203,map__36732_37204__$1,gline_37205,gcol_37206,name_37207,vec__36716_37195,column_37196,column_info_37197,vec__36656_37188,line_37189,columns_37190,seq__36394_37182__$1,temp__5735__auto___37181,inverted))
,cljs.core.sorted_map()));


var G__37212 = seq__36719_37199;
var G__37213 = chunk__36720_37200;
var G__37214 = count__36721_37201;
var G__37215 = (i__36722_37202 + (1));
seq__36719_37199 = G__37212;
chunk__36720_37200 = G__37213;
count__36721_37201 = G__37214;
i__36722_37202 = G__37215;
continue;
} else {
var temp__5735__auto___37216__$1 = cljs.core.seq(seq__36719_37199);
if(temp__5735__auto___37216__$1){
var seq__36719_37217__$1 = temp__5735__auto___37216__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36719_37217__$1)){
var c__4556__auto___37218 = cljs.core.chunk_first(seq__36719_37217__$1);
var G__37219 = cljs.core.chunk_rest(seq__36719_37217__$1);
var G__37220 = c__4556__auto___37218;
var G__37221 = cljs.core.count(c__4556__auto___37218);
var G__37222 = (0);
seq__36719_37199 = G__37219;
chunk__36720_37200 = G__37220;
count__36721_37201 = G__37221;
i__36722_37202 = G__37222;
continue;
} else {
var map__36734_37223 = cljs.core.first(seq__36719_37217__$1);
var map__36734_37224__$1 = (((((!((map__36734_37223 == null))))?(((((map__36734_37223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36734_37223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36734_37223):map__36734_37223);
var gline_37225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36734_37224__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_37226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36734_37224__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_37227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36734_37224__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_37225], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__36719_37199,chunk__36720_37200,count__36721_37201,i__36722_37202,seq__36659_37191,chunk__36660_37192,count__36661_37193,i__36662_37194,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36734_37223,map__36734_37224__$1,gline_37225,gcol_37226,name_37227,seq__36719_37217__$1,temp__5735__auto___37216__$1,vec__36716_37195,column_37196,column_info_37197,vec__36656_37188,line_37189,columns_37190,seq__36394_37182__$1,temp__5735__auto___37181,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_37226], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_37189,new cljs.core.Keyword(null,"col","col",-1959363084),column_37196,new cljs.core.Keyword(null,"name","name",1843675177),name_37227], null));
});})(seq__36719_37199,chunk__36720_37200,count__36721_37201,i__36722_37202,seq__36659_37191,chunk__36660_37192,count__36661_37193,i__36662_37194,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36734_37223,map__36734_37224__$1,gline_37225,gcol_37226,name_37227,seq__36719_37217__$1,temp__5735__auto___37216__$1,vec__36716_37195,column_37196,column_info_37197,vec__36656_37188,line_37189,columns_37190,seq__36394_37182__$1,temp__5735__auto___37181,inverted))
,cljs.core.sorted_map()));


var G__37228 = cljs.core.next(seq__36719_37217__$1);
var G__37229 = null;
var G__37230 = (0);
var G__37231 = (0);
seq__36719_37199 = G__37228;
chunk__36720_37200 = G__37229;
count__36721_37201 = G__37230;
i__36722_37202 = G__37231;
continue;
}
} else {
}
}
break;
}


var G__37232 = seq__36659_37191;
var G__37233 = chunk__36660_37192;
var G__37234 = count__36661_37193;
var G__37235 = (i__36662_37194 + (1));
seq__36659_37191 = G__37232;
chunk__36660_37192 = G__37233;
count__36661_37193 = G__37234;
i__36662_37194 = G__37235;
continue;
} else {
var temp__5735__auto___37236__$1 = cljs.core.seq(seq__36659_37191);
if(temp__5735__auto___37236__$1){
var seq__36659_37237__$1 = temp__5735__auto___37236__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36659_37237__$1)){
var c__4556__auto___37238 = cljs.core.chunk_first(seq__36659_37237__$1);
var G__37239 = cljs.core.chunk_rest(seq__36659_37237__$1);
var G__37240 = c__4556__auto___37238;
var G__37241 = cljs.core.count(c__4556__auto___37238);
var G__37242 = (0);
seq__36659_37191 = G__37239;
chunk__36660_37192 = G__37240;
count__36661_37193 = G__37241;
i__36662_37194 = G__37242;
continue;
} else {
var vec__36738_37245 = cljs.core.first(seq__36659_37237__$1);
var column_37246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36738_37245,(0),null);
var column_info_37247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36738_37245,(1),null);
var seq__36741_37248 = cljs.core.seq(column_info_37247);
var chunk__36742_37249 = null;
var count__36743_37250 = (0);
var i__36744_37251 = (0);
while(true){
if((i__36744_37251 < count__36743_37250)){
var map__36760_37252 = chunk__36742_37249.cljs$core$IIndexed$_nth$arity$2(null,i__36744_37251);
var map__36760_37253__$1 = (((((!((map__36760_37252 == null))))?(((((map__36760_37252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36760_37252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36760_37252):map__36760_37252);
var gline_37254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760_37253__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_37255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760_37253__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_37256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760_37253__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_37254], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__36741_37248,chunk__36742_37249,count__36743_37250,i__36744_37251,seq__36659_37191,chunk__36660_37192,count__36661_37193,i__36662_37194,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36760_37252,map__36760_37253__$1,gline_37254,gcol_37255,name_37256,vec__36738_37245,column_37246,column_info_37247,seq__36659_37237__$1,temp__5735__auto___37236__$1,vec__36656_37188,line_37189,columns_37190,seq__36394_37182__$1,temp__5735__auto___37181,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_37255], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_37189,new cljs.core.Keyword(null,"col","col",-1959363084),column_37246,new cljs.core.Keyword(null,"name","name",1843675177),name_37256], null));
});})(seq__36741_37248,chunk__36742_37249,count__36743_37250,i__36744_37251,seq__36659_37191,chunk__36660_37192,count__36661_37193,i__36662_37194,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36760_37252,map__36760_37253__$1,gline_37254,gcol_37255,name_37256,vec__36738_37245,column_37246,column_info_37247,seq__36659_37237__$1,temp__5735__auto___37236__$1,vec__36656_37188,line_37189,columns_37190,seq__36394_37182__$1,temp__5735__auto___37181,inverted))
,cljs.core.sorted_map()));


var G__37259 = seq__36741_37248;
var G__37260 = chunk__36742_37249;
var G__37261 = count__36743_37250;
var G__37262 = (i__36744_37251 + (1));
seq__36741_37248 = G__37259;
chunk__36742_37249 = G__37260;
count__36743_37250 = G__37261;
i__36744_37251 = G__37262;
continue;
} else {
var temp__5735__auto___37263__$2 = cljs.core.seq(seq__36741_37248);
if(temp__5735__auto___37263__$2){
var seq__36741_37264__$1 = temp__5735__auto___37263__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36741_37264__$1)){
var c__4556__auto___37265 = cljs.core.chunk_first(seq__36741_37264__$1);
var G__37266 = cljs.core.chunk_rest(seq__36741_37264__$1);
var G__37267 = c__4556__auto___37265;
var G__37268 = cljs.core.count(c__4556__auto___37265);
var G__37269 = (0);
seq__36741_37248 = G__37266;
chunk__36742_37249 = G__37267;
count__36743_37250 = G__37268;
i__36744_37251 = G__37269;
continue;
} else {
var map__36764_37270 = cljs.core.first(seq__36741_37264__$1);
var map__36764_37271__$1 = (((((!((map__36764_37270 == null))))?(((((map__36764_37270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36764_37270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36764_37270):map__36764_37270);
var gline_37272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36764_37271__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_37273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36764_37271__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_37274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36764_37271__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_37272], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__36741_37248,chunk__36742_37249,count__36743_37250,i__36744_37251,seq__36659_37191,chunk__36660_37192,count__36661_37193,i__36662_37194,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36764_37270,map__36764_37271__$1,gline_37272,gcol_37273,name_37274,seq__36741_37264__$1,temp__5735__auto___37263__$2,vec__36738_37245,column_37246,column_info_37247,seq__36659_37237__$1,temp__5735__auto___37236__$1,vec__36656_37188,line_37189,columns_37190,seq__36394_37182__$1,temp__5735__auto___37181,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_37273], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_37189,new cljs.core.Keyword(null,"col","col",-1959363084),column_37246,new cljs.core.Keyword(null,"name","name",1843675177),name_37274], null));
});})(seq__36741_37248,chunk__36742_37249,count__36743_37250,i__36744_37251,seq__36659_37191,chunk__36660_37192,count__36661_37193,i__36662_37194,seq__36394_37080,chunk__36395_37081,count__36396_37082,i__36397_37083,map__36764_37270,map__36764_37271__$1,gline_37272,gcol_37273,name_37274,seq__36741_37264__$1,temp__5735__auto___37263__$2,vec__36738_37245,column_37246,column_info_37247,seq__36659_37237__$1,temp__5735__auto___37236__$1,vec__36656_37188,line_37189,columns_37190,seq__36394_37182__$1,temp__5735__auto___37181,inverted))
,cljs.core.sorted_map()));


var G__37275 = cljs.core.next(seq__36741_37264__$1);
var G__37276 = null;
var G__37277 = (0);
var G__37278 = (0);
seq__36741_37248 = G__37275;
chunk__36742_37249 = G__37276;
count__36743_37250 = G__37277;
i__36744_37251 = G__37278;
continue;
}
} else {
}
}
break;
}


var G__37287 = cljs.core.next(seq__36659_37237__$1);
var G__37288 = null;
var G__37289 = (0);
var G__37290 = (0);
seq__36659_37191 = G__37287;
chunk__36660_37192 = G__37288;
count__36661_37193 = G__37289;
i__36662_37194 = G__37290;
continue;
}
} else {
}
}
break;
}


var G__37291 = cljs.core.next(seq__36394_37182__$1);
var G__37292 = null;
var G__37293 = (0);
var G__37294 = (0);
seq__36394_37080 = G__37291;
chunk__36395_37081 = G__37292;
count__36396_37082 = G__37293;
i__36397_37083 = G__37294;
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

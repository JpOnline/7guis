goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__37917 = s;
var map__37917__$1 = (((((!((map__37917 == null))))?(((((map__37917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37917):map__37917);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__37927 = info;
var map__37928 = G__37927;
var map__37928__$1 = (((((!((map__37928 == null))))?(((((map__37928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37928):map__37928);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__37927__$1 = G__37927;
while(true){
var d__$2 = d__$1;
var map__37932 = G__37927__$1;
var map__37932__$1 = (((((!((map__37932 == null))))?(((((map__37932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37932):map__37932);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37932__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__38738 = (d__$2 + (1));
var G__38739 = shadow__$2;
d__$1 = G__38738;
G__37927__$1 = G__38739;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__37934){
var map__37935 = p__37934;
var map__37935__$1 = (((((!((map__37935 == null))))?(((((map__37935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37935):map__37935);
var name_var = map__37935__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37935__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37935__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__37937 = info;
var map__37937__$1 = (((((!((map__37937 == null))))?(((((map__37937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37937):map__37937);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__37939 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__37939) : cljs.compiler.munge.call(null,G__37939));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__37941 = arguments.length;
switch (G__37941) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__37942 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11501),(11501),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__37942.cljs$core$IFn$_invoke$arity$1 ? fexpr__37942.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__37942.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__37943 = cp;
switch (G__37943) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__37944_38758 = cljs.core.seq(s);
var chunk__37945_38759 = null;
var count__37946_38760 = (0);
var i__37947_38761 = (0);
while(true){
if((i__37947_38761 < count__37946_38760)){
var c_38763 = chunk__37945_38759.cljs$core$IIndexed$_nth$arity$2(null,i__37947_38761);
sb.append(cljs.compiler.escape_char(c_38763));


var G__38764 = seq__37944_38758;
var G__38765 = chunk__37945_38759;
var G__38766 = count__37946_38760;
var G__38767 = (i__37947_38761 + (1));
seq__37944_38758 = G__38764;
chunk__37945_38759 = G__38765;
count__37946_38760 = G__38766;
i__37947_38761 = G__38767;
continue;
} else {
var temp__5735__auto___38772 = cljs.core.seq(seq__37944_38758);
if(temp__5735__auto___38772){
var seq__37944_38773__$1 = temp__5735__auto___38772;
if(cljs.core.chunked_seq_QMARK_(seq__37944_38773__$1)){
var c__4556__auto___38774 = cljs.core.chunk_first(seq__37944_38773__$1);
var G__38775 = cljs.core.chunk_rest(seq__37944_38773__$1);
var G__38776 = c__4556__auto___38774;
var G__38777 = cljs.core.count(c__4556__auto___38774);
var G__38778 = (0);
seq__37944_38758 = G__38775;
chunk__37945_38759 = G__38776;
count__37946_38760 = G__38777;
i__37947_38761 = G__38778;
continue;
} else {
var c_38779 = cljs.core.first(seq__37944_38773__$1);
sb.append(cljs.compiler.escape_char(c_38779));


var G__38780 = cljs.core.next(seq__37944_38773__$1);
var G__38781 = null;
var G__38782 = (0);
var G__38783 = (0);
seq__37944_38758 = G__38780;
chunk__37945_38759 = G__38781;
count__37946_38760 = G__38782;
i__37947_38761 = G__38783;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37949 = cljs.core.get_global_hierarchy;
return (fexpr__37949.cljs$core$IFn$_invoke$arity$0 ? fexpr__37949.cljs$core$IFn$_invoke$arity$0() : fexpr__37949.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__37952_38787 = ast;
var map__37952_38788__$1 = (((((!((map__37952_38787 == null))))?(((((map__37952_38787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37952_38787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37952_38787):map__37952_38787);
var env_38789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37952_38788__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_38789))){
var map__37954_38790 = env_38789;
var map__37954_38791__$1 = (((((!((map__37954_38790 == null))))?(((((map__37954_38790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37954_38790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37954_38790):map__37954_38790);
var line_38792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37954_38791__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37954_38791__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__37956 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__37958 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__37957 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__37957.cljs$core$IFn$_invoke$arity$1 ? fexpr__37957.cljs$core$IFn$_invoke$arity$1(G__37958) : fexpr__37957.call(null,G__37958));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37956,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__37956;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_38792 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_38793)?(column_38793 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__37968 = arguments.length;
switch (G__37968) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38800 = arguments.length;
var i__4737__auto___38801 = (0);
while(true){
if((i__4737__auto___38801 < len__4736__auto___38800)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38801]));

var G__38802 = (i__4737__auto___38801 + (1));
i__4737__auto___38801 = G__38802;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_38807 = (function (){var G__37970 = a;
if((!(typeof a === 'string'))){
return G__37970.toString();
} else {
return G__37970;
}
})();
var temp__5739__auto___38808 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___38808 == null)){
} else {
var sm_data_38809 = temp__5739__auto___38808;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_38809,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__37960_SHARP_){
return (p1__37960_SHARP_ + s_38807.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_38807], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__37972 = cljs.core.seq(xs);
var chunk__37973 = null;
var count__37974 = (0);
var i__37975 = (0);
while(true){
if((i__37975 < count__37974)){
var x = chunk__37973.cljs$core$IIndexed$_nth$arity$2(null,i__37975);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__38824 = seq__37972;
var G__38825 = chunk__37973;
var G__38826 = count__37974;
var G__38827 = (i__37975 + (1));
seq__37972 = G__38824;
chunk__37973 = G__38825;
count__37974 = G__38826;
i__37975 = G__38827;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37972);
if(temp__5735__auto__){
var seq__37972__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37972__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37972__$1);
var G__38829 = cljs.core.chunk_rest(seq__37972__$1);
var G__38830 = c__4556__auto__;
var G__38831 = cljs.core.count(c__4556__auto__);
var G__38832 = (0);
seq__37972 = G__38829;
chunk__37973 = G__38830;
count__37974 = G__38831;
i__37975 = G__38832;
continue;
} else {
var x = cljs.core.first(seq__37972__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__38836 = cljs.core.next(seq__37972__$1);
var G__38837 = null;
var G__38838 = (0);
var G__38839 = (0);
seq__37972 = G__38836;
chunk__37973 = G__38837;
count__37974 = G__38838;
i__37975 = G__38839;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq37962){
var G__37963 = cljs.core.first(seq37962);
var seq37962__$1 = cljs.core.next(seq37962);
var G__37964 = cljs.core.first(seq37962__$1);
var seq37962__$2 = cljs.core.next(seq37962__$1);
var G__37965 = cljs.core.first(seq37962__$2);
var seq37962__$3 = cljs.core.next(seq37962__$2);
var G__37966 = cljs.core.first(seq37962__$3);
var seq37962__$4 = cljs.core.next(seq37962__$3);
var G__37967 = cljs.core.first(seq37962__$4);
var seq37962__$5 = cljs.core.next(seq37962__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37963,G__37964,G__37965,G__37966,G__37967,seq37962__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__37976){
var map__37977 = p__37976;
var map__37977__$1 = (((((!((map__37977 == null))))?(((((map__37977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37977):map__37977);
var m = map__37977__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37977__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__37987 = arguments.length;
switch (G__37987) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38861 = arguments.length;
var i__4737__auto___38862 = (0);
while(true){
if((i__4737__auto___38862 < len__4736__auto___38861)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38862]));

var G__38866 = (i__4737__auto___38862 + (1));
i__4737__auto___38862 = G__38866;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__38001_38873 = cljs.core.seq(xs);
var chunk__38002_38874 = null;
var count__38003_38875 = (0);
var i__38004_38876 = (0);
while(true){
if((i__38004_38876 < count__38003_38875)){
var x_38877 = chunk__38002_38874.cljs$core$IIndexed$_nth$arity$2(null,i__38004_38876);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_38877);


var G__38878 = seq__38001_38873;
var G__38879 = chunk__38002_38874;
var G__38880 = count__38003_38875;
var G__38881 = (i__38004_38876 + (1));
seq__38001_38873 = G__38878;
chunk__38002_38874 = G__38879;
count__38003_38875 = G__38880;
i__38004_38876 = G__38881;
continue;
} else {
var temp__5735__auto___38882 = cljs.core.seq(seq__38001_38873);
if(temp__5735__auto___38882){
var seq__38001_38883__$1 = temp__5735__auto___38882;
if(cljs.core.chunked_seq_QMARK_(seq__38001_38883__$1)){
var c__4556__auto___38885 = cljs.core.chunk_first(seq__38001_38883__$1);
var G__38886 = cljs.core.chunk_rest(seq__38001_38883__$1);
var G__38887 = c__4556__auto___38885;
var G__38888 = cljs.core.count(c__4556__auto___38885);
var G__38889 = (0);
seq__38001_38873 = G__38886;
chunk__38002_38874 = G__38887;
count__38003_38875 = G__38888;
i__38004_38876 = G__38889;
continue;
} else {
var x_38890 = cljs.core.first(seq__38001_38883__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_38890);


var G__38896 = cljs.core.next(seq__38001_38883__$1);
var G__38897 = null;
var G__38898 = (0);
var G__38899 = (0);
seq__38001_38873 = G__38896;
chunk__38002_38874 = G__38897;
count__38003_38875 = G__38898;
i__38004_38876 = G__38899;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq37981){
var G__37982 = cljs.core.first(seq37981);
var seq37981__$1 = cljs.core.next(seq37981);
var G__37983 = cljs.core.first(seq37981__$1);
var seq37981__$2 = cljs.core.next(seq37981__$1);
var G__37984 = cljs.core.first(seq37981__$2);
var seq37981__$3 = cljs.core.next(seq37981__$2);
var G__37985 = cljs.core.first(seq37981__$3);
var seq37981__$4 = cljs.core.next(seq37981__$3);
var G__37986 = cljs.core.first(seq37981__$4);
var seq37981__$5 = cljs.core.next(seq37981__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37982,G__37983,G__37984,G__37985,G__37986,seq37981__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38006_38902 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38007_38903 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38008_38904 = true;
var _STAR_print_fn_STAR__temp_val__38009_38905 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38008_38904);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38009_38905);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38007_38903);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38006_38902);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__38011 = cljs.core.get_global_hierarchy;
return (fexpr__38011.cljs$core$IFn$_invoke$arity$0 ? fexpr__38011.cljs$core$IFn$_invoke$arity$0() : fexpr__38011.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__38012 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38012,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38012,(1),null);
var G__38015 = ns;
var G__38016 = name;
var G__38017 = (function (){
var G__38019 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__38019) : cljs.compiler.emit_constant.call(null,G__38019));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__38015,G__38016,G__38017) : cljs.compiler.emit_record_value.call(null,G__38015,G__38016,G__38017));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__38020 = cljs.core.keys(x);
var G__38021 = cljs.core.vals(x);
var G__38022 = cljs.compiler.emit_constants_comma_sep;
var G__38023 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__38020,G__38021,G__38022,G__38023) : cljs.compiler.emit_map.call(null,G__38020,G__38021,G__38022,G__38023));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__38025 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__38026 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__38025,G__38026) : cljs.compiler.emit_with_meta.call(null,G__38025,G__38026));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__38027 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38027,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38027,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38027,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__38034 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__38034) : x.call(null,G__38034));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__38036 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__38036) : x.call(null,G__38036));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__38042 = items;
var G__38043 = (function (p1__38040_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__38040_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__38042,G__38043) : cljs.compiler.emit_js_object.call(null,G__38042,G__38043));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__38046){
var map__38047 = p__38046;
var map__38047__$1 = (((((!((map__38047 == null))))?(((((map__38047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38047):map__38047);
var ast = map__38047__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38047__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38047__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38047__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__38049 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__38049__$1 = (((((!((map__38049 == null))))?(((((map__38049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38049):map__38049);
var cenv = map__38049__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38049__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__38051 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__38054 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__38054) : cljs.compiler.es5_GT__EQ_.call(null,G__38054));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__38051,cljs.analyzer.es5_allowed);
} else {
return G__38051;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__38055 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__38055,reserved);
} else {
return G__38055;
}
})();
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__38056_38940 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__38056_38941__$1 = (((G__38056_38940 instanceof cljs.core.Keyword))?G__38056_38940.fqn:null);
switch (G__38056_38941__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__38057){
var map__38058 = p__38057;
var map__38058__$1 = (((((!((map__38058 == null))))?(((((map__38058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38058):map__38058);
var arg = map__38058__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__38060 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__38060__$1 = (((((!((map__38060 == null))))?(((((map__38060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38060):map__38060);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38060__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__38063){
var map__38064 = p__38063;
var map__38064__$1 = (((((!((map__38064 == null))))?(((((map__38064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38064):map__38064);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38064__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38064__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38064__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__38066_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__38066_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__38067 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__38067) : comma_sep.call(null,G__38067));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__38068 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__38068) : comma_sep.call(null,G__38068));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__38069){
var map__38070 = p__38069;
var map__38070__$1 = (((((!((map__38070 == null))))?(((((map__38070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38070):map__38070);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38070__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38070__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38070__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__38073){
var map__38074 = p__38073;
var map__38074__$1 = (((((!((map__38074 == null))))?(((((map__38074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38074):map__38074);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38074__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38074__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__38077_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__38077_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__38078 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__38078) : comma_sep.call(null,G__38078));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__38079){
var map__38080 = p__38079;
var map__38080__$1 = (((((!((map__38080 == null))))?(((((map__38080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38080):map__38080);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38080__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38080__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___38975 = cljs.core.seq(items);
if(temp__5735__auto___38975){
var items_38976__$1 = temp__5735__auto___38975;
var vec__38082_38977 = items_38976__$1;
var seq__38083_38978 = cljs.core.seq(vec__38082_38977);
var first__38084_38979 = cljs.core.first(seq__38083_38978);
var seq__38083_38980__$1 = cljs.core.next(seq__38083_38978);
var vec__38085_38981 = first__38084_38979;
var k_38982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38085_38981,(0),null);
var v_38983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38085_38981,(1),null);
var r_38984 = seq__38083_38980__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_38982),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_38983) : emit_js_object_val.call(null,v_38983)));

var seq__38091_38989 = cljs.core.seq(r_38984);
var chunk__38092_38990 = null;
var count__38093_38991 = (0);
var i__38094_38992 = (0);
while(true){
if((i__38094_38992 < count__38093_38991)){
var vec__38101_38993 = chunk__38092_38990.cljs$core$IIndexed$_nth$arity$2(null,i__38094_38992);
var k_38994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38101_38993,(0),null);
var v_38995__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38101_38993,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_38994__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_38995__$1) : emit_js_object_val.call(null,v_38995__$1)));


var G__38996 = seq__38091_38989;
var G__38997 = chunk__38092_38990;
var G__38998 = count__38093_38991;
var G__38999 = (i__38094_38992 + (1));
seq__38091_38989 = G__38996;
chunk__38092_38990 = G__38997;
count__38093_38991 = G__38998;
i__38094_38992 = G__38999;
continue;
} else {
var temp__5735__auto___39000__$1 = cljs.core.seq(seq__38091_38989);
if(temp__5735__auto___39000__$1){
var seq__38091_39001__$1 = temp__5735__auto___39000__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38091_39001__$1)){
var c__4556__auto___39002 = cljs.core.chunk_first(seq__38091_39001__$1);
var G__39003 = cljs.core.chunk_rest(seq__38091_39001__$1);
var G__39004 = c__4556__auto___39002;
var G__39005 = cljs.core.count(c__4556__auto___39002);
var G__39006 = (0);
seq__38091_38989 = G__39003;
chunk__38092_38990 = G__39004;
count__38093_38991 = G__39005;
i__38094_38992 = G__39006;
continue;
} else {
var vec__38104_39007 = cljs.core.first(seq__38091_39001__$1);
var k_39008__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38104_39007,(0),null);
var v_39009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38104_39007,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_39008__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_39009__$1) : emit_js_object_val.call(null,v_39009__$1)));


var G__39013 = cljs.core.next(seq__38091_39001__$1);
var G__39014 = null;
var G__39015 = (0);
var G__39016 = (0);
seq__38091_38989 = G__39013;
chunk__38092_38990 = G__39014;
count__38093_38991 = G__39015;
i__38094_38992 = G__39016;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__38111){
var map__38112 = p__38111;
var map__38112__$1 = (((((!((map__38112 == null))))?(((((map__38112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38112):map__38112);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38112__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38112__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38112__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__38117){
var map__38118 = p__38117;
var map__38118__$1 = (((((!((map__38118 == null))))?(((((map__38118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38118):map__38118);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38118__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38118__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__38120){
var map__38121 = p__38120;
var map__38121__$1 = (((((!((map__38121 == null))))?(((((map__38121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38121):map__38121);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38121__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__38123){
var map__38124 = p__38123;
var map__38124__$1 = (((((!((map__38124 == null))))?(((((map__38124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38124):map__38124);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38124__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38124__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__38136 = cljs.analyzer.unwrap_quote(expr);
var map__38136__$1 = (((((!((map__38136 == null))))?(((((map__38136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38136):map__38136);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__38144 = cljs.analyzer.unwrap_quote(expr);
var map__38144__$1 = (((((!((map__38144 == null))))?(((((map__38144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38144):map__38144);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4126__auto__ = (function (){var fexpr__38147 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__38147.cljs$core$IFn$_invoke$arity$1 ? fexpr__38147.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__38147.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__38148){
var map__38149 = p__38148;
var map__38149__$1 = (((((!((map__38149 == null))))?(((((map__38149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38149):map__38149);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38149__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38149__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38149__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38149__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38149__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__38151){
var map__38152 = p__38151;
var map__38152__$1 = (((((!((map__38152 == null))))?(((((map__38152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38152):map__38152);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__38154_39056 = cljs.core.seq(nodes);
var chunk__38155_39057 = null;
var count__38156_39058 = (0);
var i__38157_39059 = (0);
while(true){
if((i__38157_39059 < count__38156_39058)){
var map__38179_39060 = chunk__38155_39057.cljs$core$IIndexed$_nth$arity$2(null,i__38157_39059);
var map__38179_39061__$1 = (((((!((map__38179_39060 == null))))?(((((map__38179_39060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38179_39060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38179_39060):map__38179_39060);
var ts_39062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179_39061__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__38180_39063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179_39061__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__38180_39064__$1 = (((((!((map__38180_39063 == null))))?(((((map__38180_39063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38180_39063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38180_39063):map__38180_39063);
var then_39065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38180_39064__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__38183_39068 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_39062));
var chunk__38184_39069 = null;
var count__38185_39070 = (0);
var i__38186_39071 = (0);
while(true){
if((i__38186_39071 < count__38185_39070)){
var test_39077 = chunk__38184_39069.cljs$core$IIndexed$_nth$arity$2(null,i__38186_39071);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_39077,":");


var G__39078 = seq__38183_39068;
var G__39079 = chunk__38184_39069;
var G__39080 = count__38185_39070;
var G__39081 = (i__38186_39071 + (1));
seq__38183_39068 = G__39078;
chunk__38184_39069 = G__39079;
count__38185_39070 = G__39080;
i__38186_39071 = G__39081;
continue;
} else {
var temp__5735__auto___39082 = cljs.core.seq(seq__38183_39068);
if(temp__5735__auto___39082){
var seq__38183_39083__$1 = temp__5735__auto___39082;
if(cljs.core.chunked_seq_QMARK_(seq__38183_39083__$1)){
var c__4556__auto___39084 = cljs.core.chunk_first(seq__38183_39083__$1);
var G__39085 = cljs.core.chunk_rest(seq__38183_39083__$1);
var G__39086 = c__4556__auto___39084;
var G__39087 = cljs.core.count(c__4556__auto___39084);
var G__39088 = (0);
seq__38183_39068 = G__39085;
chunk__38184_39069 = G__39086;
count__38185_39070 = G__39087;
i__38186_39071 = G__39088;
continue;
} else {
var test_39095 = cljs.core.first(seq__38183_39083__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_39095,":");


var G__39099 = cljs.core.next(seq__38183_39083__$1);
var G__39100 = null;
var G__39101 = (0);
var G__39102 = (0);
seq__38183_39068 = G__39099;
chunk__38184_39069 = G__39100;
count__38185_39070 = G__39101;
i__38186_39071 = G__39102;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_39065);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_39065);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__39106 = seq__38154_39056;
var G__39107 = chunk__38155_39057;
var G__39108 = count__38156_39058;
var G__39109 = (i__38157_39059 + (1));
seq__38154_39056 = G__39106;
chunk__38155_39057 = G__39107;
count__38156_39058 = G__39108;
i__38157_39059 = G__39109;
continue;
} else {
var temp__5735__auto___39110 = cljs.core.seq(seq__38154_39056);
if(temp__5735__auto___39110){
var seq__38154_39111__$1 = temp__5735__auto___39110;
if(cljs.core.chunked_seq_QMARK_(seq__38154_39111__$1)){
var c__4556__auto___39112 = cljs.core.chunk_first(seq__38154_39111__$1);
var G__39113 = cljs.core.chunk_rest(seq__38154_39111__$1);
var G__39114 = c__4556__auto___39112;
var G__39115 = cljs.core.count(c__4556__auto___39112);
var G__39116 = (0);
seq__38154_39056 = G__39113;
chunk__38155_39057 = G__39114;
count__38156_39058 = G__39115;
i__38157_39059 = G__39116;
continue;
} else {
var map__38187_39118 = cljs.core.first(seq__38154_39111__$1);
var map__38187_39119__$1 = (((((!((map__38187_39118 == null))))?(((((map__38187_39118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38187_39118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38187_39118):map__38187_39118);
var ts_39120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38187_39119__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__38188_39121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38187_39119__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__38188_39122__$1 = (((((!((map__38188_39121 == null))))?(((((map__38188_39121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38188_39121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38188_39121):map__38188_39121);
var then_39123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38188_39122__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__38191_39136 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_39120));
var chunk__38192_39137 = null;
var count__38193_39138 = (0);
var i__38194_39139 = (0);
while(true){
if((i__38194_39139 < count__38193_39138)){
var test_39140 = chunk__38192_39137.cljs$core$IIndexed$_nth$arity$2(null,i__38194_39139);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_39140,":");


var G__39141 = seq__38191_39136;
var G__39142 = chunk__38192_39137;
var G__39143 = count__38193_39138;
var G__39144 = (i__38194_39139 + (1));
seq__38191_39136 = G__39141;
chunk__38192_39137 = G__39142;
count__38193_39138 = G__39143;
i__38194_39139 = G__39144;
continue;
} else {
var temp__5735__auto___39149__$1 = cljs.core.seq(seq__38191_39136);
if(temp__5735__auto___39149__$1){
var seq__38191_39150__$1 = temp__5735__auto___39149__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38191_39150__$1)){
var c__4556__auto___39151 = cljs.core.chunk_first(seq__38191_39150__$1);
var G__39152 = cljs.core.chunk_rest(seq__38191_39150__$1);
var G__39153 = c__4556__auto___39151;
var G__39154 = cljs.core.count(c__4556__auto___39151);
var G__39155 = (0);
seq__38191_39136 = G__39152;
chunk__38192_39137 = G__39153;
count__38193_39138 = G__39154;
i__38194_39139 = G__39155;
continue;
} else {
var test_39156 = cljs.core.first(seq__38191_39150__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_39156,":");


var G__39157 = cljs.core.next(seq__38191_39150__$1);
var G__39158 = null;
var G__39159 = (0);
var G__39160 = (0);
seq__38191_39136 = G__39157;
chunk__38192_39137 = G__39158;
count__38193_39138 = G__39159;
i__38194_39139 = G__39160;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_39123);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_39123);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__39165 = cljs.core.next(seq__38154_39111__$1);
var G__39166 = null;
var G__39167 = (0);
var G__39168 = (0);
seq__38154_39056 = G__39165;
chunk__38155_39057 = G__39166;
count__38156_39058 = G__39167;
i__38157_39059 = G__39168;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__38195){
var map__38196 = p__38195;
var map__38196__$1 = (((((!((map__38196 == null))))?(((((map__38196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38196):map__38196);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38196__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38196__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__38209 = env;
var G__38210 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__38209,G__38210) : cljs.compiler.resolve_type.call(null,G__38209,G__38210));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__38211 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38211,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38211,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__38205_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__38205_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__38205_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__38214 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__38214,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__38214;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__38217 = env;
var G__38218 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__38217,G__38218) : cljs.compiler.resolve_type.call(null,G__38217,G__38218));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38219_SHARP_){
return cljs.compiler.resolve_type(env,p1__38219_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__38220 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__38221 = cljs.core.seq(vec__38220);
var first__38222 = cljs.core.first(seq__38221);
var seq__38221__$1 = cljs.core.next(seq__38221);
var p = first__38222;
var first__38222__$1 = cljs.core.first(seq__38221__$1);
var seq__38221__$2 = cljs.core.next(seq__38221__$1);
var ts = first__38222__$1;
var first__38222__$2 = cljs.core.first(seq__38221__$2);
var seq__38221__$3 = cljs.core.next(seq__38221__$2);
var n = first__38222__$2;
var xs = seq__38221__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__38223 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__38224 = cljs.core.seq(vec__38223);
var first__38225 = cljs.core.first(seq__38224);
var seq__38224__$1 = cljs.core.next(seq__38224);
var p = first__38225;
var first__38225__$1 = cljs.core.first(seq__38224__$1);
var seq__38224__$2 = cljs.core.next(seq__38224__$1);
var ts = first__38225__$1;
var xs = seq__38224__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__38228 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__38227 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__38227.cljs$core$IFn$_invoke$arity$1 ? fexpr__38227.cljs$core$IFn$_invoke$arity$1(G__38228) : fexpr__38227.call(null,G__38228));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__38232 = arguments.length;
switch (G__38232) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__38243 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38229_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__38229_SHARP_);
} else {
return p1__38229_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__38244 = cljs.core.seq(vec__38243);
var first__38245 = cljs.core.first(seq__38244);
var seq__38244__$1 = cljs.core.next(seq__38244);
var x = first__38245;
var ys = seq__38244__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__38247 = cljs.core.seq(ys);
var chunk__38248 = null;
var count__38249 = (0);
var i__38250 = (0);
while(true){
if((i__38250 < count__38249)){
var next_line = chunk__38248.cljs$core$IIndexed$_nth$arity$2(null,i__38250);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__39234 = seq__38247;
var G__39235 = chunk__38248;
var G__39236 = count__38249;
var G__39237 = (i__38250 + (1));
seq__38247 = G__39234;
chunk__38248 = G__39235;
count__38249 = G__39236;
i__38250 = G__39237;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38247);
if(temp__5735__auto__){
var seq__38247__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38247__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38247__$1);
var G__39238 = cljs.core.chunk_rest(seq__38247__$1);
var G__39239 = c__4556__auto__;
var G__39240 = cljs.core.count(c__4556__auto__);
var G__39241 = (0);
seq__38247 = G__39238;
chunk__38248 = G__39239;
count__38249 = G__39240;
i__38250 = G__39241;
continue;
} else {
var next_line = cljs.core.first(seq__38247__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__39242 = cljs.core.next(seq__38247__$1);
var G__39243 = null;
var G__39244 = (0);
var G__39245 = (0);
seq__38247 = G__39242;
chunk__38248 = G__39243;
count__38249 = G__39244;
i__38250 = G__39245;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__38251_39246 = cljs.core.seq(docs__$2);
var chunk__38252_39247 = null;
var count__38253_39248 = (0);
var i__38254_39249 = (0);
while(true){
if((i__38254_39249 < count__38253_39248)){
var e_39250 = chunk__38252_39247.cljs$core$IIndexed$_nth$arity$2(null,i__38254_39249);
if(cljs.core.truth_(e_39250)){
print_comment_lines(e_39250);
} else {
}


var G__39251 = seq__38251_39246;
var G__39252 = chunk__38252_39247;
var G__39253 = count__38253_39248;
var G__39254 = (i__38254_39249 + (1));
seq__38251_39246 = G__39251;
chunk__38252_39247 = G__39252;
count__38253_39248 = G__39253;
i__38254_39249 = G__39254;
continue;
} else {
var temp__5735__auto___39255 = cljs.core.seq(seq__38251_39246);
if(temp__5735__auto___39255){
var seq__38251_39256__$1 = temp__5735__auto___39255;
if(cljs.core.chunked_seq_QMARK_(seq__38251_39256__$1)){
var c__4556__auto___39257 = cljs.core.chunk_first(seq__38251_39256__$1);
var G__39258 = cljs.core.chunk_rest(seq__38251_39256__$1);
var G__39259 = c__4556__auto___39257;
var G__39260 = cljs.core.count(c__4556__auto___39257);
var G__39261 = (0);
seq__38251_39246 = G__39258;
chunk__38252_39247 = G__39259;
count__38253_39248 = G__39260;
i__38254_39249 = G__39261;
continue;
} else {
var e_39262 = cljs.core.first(seq__38251_39256__$1);
if(cljs.core.truth_(e_39262)){
print_comment_lines(e_39262);
} else {
}


var G__39263 = cljs.core.next(seq__38251_39256__$1);
var G__39264 = null;
var G__39265 = (0);
var G__39266 = (0);
seq__38251_39246 = G__39263;
chunk__38252_39247 = G__39264;
count__38253_39248 = G__39265;
i__38254_39249 = G__39266;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some((function (p1__38258_SHARP_){
return goog.string.startsWith(p1__38258_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__38259){
var map__38260 = p__38259;
var map__38260__$1 = (((((!((map__38260 == null))))?(((((map__38260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38260):map__38260);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__38262){
var map__38263 = p__38262;
var map__38263__$1 = (((((!((map__38263 == null))))?(((((map__38263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38263):map__38263);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38263__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38263__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38263__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__38265_39299 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__38266_39300 = null;
var count__38267_39301 = (0);
var i__38268_39302 = (0);
while(true){
if((i__38268_39302 < count__38267_39301)){
var vec__38275_39307 = chunk__38266_39300.cljs$core$IIndexed$_nth$arity$2(null,i__38268_39302);
var i_39308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38275_39307,(0),null);
var param_39309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38275_39307,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_39309);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__39310 = seq__38265_39299;
var G__39311 = chunk__38266_39300;
var G__39312 = count__38267_39301;
var G__39313 = (i__38268_39302 + (1));
seq__38265_39299 = G__39310;
chunk__38266_39300 = G__39311;
count__38267_39301 = G__39312;
i__38268_39302 = G__39313;
continue;
} else {
var temp__5735__auto___39315 = cljs.core.seq(seq__38265_39299);
if(temp__5735__auto___39315){
var seq__38265_39316__$1 = temp__5735__auto___39315;
if(cljs.core.chunked_seq_QMARK_(seq__38265_39316__$1)){
var c__4556__auto___39317 = cljs.core.chunk_first(seq__38265_39316__$1);
var G__39318 = cljs.core.chunk_rest(seq__38265_39316__$1);
var G__39319 = c__4556__auto___39317;
var G__39320 = cljs.core.count(c__4556__auto___39317);
var G__39321 = (0);
seq__38265_39299 = G__39318;
chunk__38266_39300 = G__39319;
count__38267_39301 = G__39320;
i__38268_39302 = G__39321;
continue;
} else {
var vec__38278_39325 = cljs.core.first(seq__38265_39316__$1);
var i_39327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38278_39325,(0),null);
var param_39328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38278_39325,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_39328);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__39330 = cljs.core.next(seq__38265_39316__$1);
var G__39331 = null;
var G__39332 = (0);
var G__39333 = (0);
seq__38265_39299 = G__39330;
chunk__38266_39300 = G__39331;
count__38267_39301 = G__39332;
i__38268_39302 = G__39333;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__38281_39335 = cljs.core.seq(params);
var chunk__38282_39336 = null;
var count__38283_39337 = (0);
var i__38284_39338 = (0);
while(true){
if((i__38284_39338 < count__38283_39337)){
var param_39340 = chunk__38282_39336.cljs$core$IIndexed$_nth$arity$2(null,i__38284_39338);
cljs.compiler.emit(param_39340);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_39340,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__39341 = seq__38281_39335;
var G__39342 = chunk__38282_39336;
var G__39343 = count__38283_39337;
var G__39344 = (i__38284_39338 + (1));
seq__38281_39335 = G__39341;
chunk__38282_39336 = G__39342;
count__38283_39337 = G__39343;
i__38284_39338 = G__39344;
continue;
} else {
var temp__5735__auto___39345 = cljs.core.seq(seq__38281_39335);
if(temp__5735__auto___39345){
var seq__38281_39346__$1 = temp__5735__auto___39345;
if(cljs.core.chunked_seq_QMARK_(seq__38281_39346__$1)){
var c__4556__auto___39347 = cljs.core.chunk_first(seq__38281_39346__$1);
var G__39348 = cljs.core.chunk_rest(seq__38281_39346__$1);
var G__39349 = c__4556__auto___39347;
var G__39350 = cljs.core.count(c__4556__auto___39347);
var G__39351 = (0);
seq__38281_39335 = G__39348;
chunk__38282_39336 = G__39349;
count__38283_39337 = G__39350;
i__38284_39338 = G__39351;
continue;
} else {
var param_39352 = cljs.core.first(seq__38281_39346__$1);
cljs.compiler.emit(param_39352);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_39352,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__39353 = cljs.core.next(seq__38281_39346__$1);
var G__39354 = null;
var G__39355 = (0);
var G__39356 = (0);
seq__38281_39335 = G__39353;
chunk__38282_39336 = G__39354;
count__38283_39337 = G__39355;
i__38284_39338 = G__39356;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__38285_39357 = cljs.core.seq(params);
var chunk__38286_39358 = null;
var count__38287_39359 = (0);
var i__38288_39360 = (0);
while(true){
if((i__38288_39360 < count__38287_39359)){
var param_39361 = chunk__38286_39358.cljs$core$IIndexed$_nth$arity$2(null,i__38288_39360);
cljs.compiler.emit(param_39361);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_39361,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__39362 = seq__38285_39357;
var G__39363 = chunk__38286_39358;
var G__39364 = count__38287_39359;
var G__39365 = (i__38288_39360 + (1));
seq__38285_39357 = G__39362;
chunk__38286_39358 = G__39363;
count__38287_39359 = G__39364;
i__38288_39360 = G__39365;
continue;
} else {
var temp__5735__auto___39366 = cljs.core.seq(seq__38285_39357);
if(temp__5735__auto___39366){
var seq__38285_39367__$1 = temp__5735__auto___39366;
if(cljs.core.chunked_seq_QMARK_(seq__38285_39367__$1)){
var c__4556__auto___39370 = cljs.core.chunk_first(seq__38285_39367__$1);
var G__39371 = cljs.core.chunk_rest(seq__38285_39367__$1);
var G__39372 = c__4556__auto___39370;
var G__39373 = cljs.core.count(c__4556__auto___39370);
var G__39374 = (0);
seq__38285_39357 = G__39371;
chunk__38286_39358 = G__39372;
count__38287_39359 = G__39373;
i__38288_39360 = G__39374;
continue;
} else {
var param_39375 = cljs.core.first(seq__38285_39367__$1);
cljs.compiler.emit(param_39375);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_39375,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__39377 = cljs.core.next(seq__38285_39367__$1);
var G__39378 = null;
var G__39379 = (0);
var G__39380 = (0);
seq__38285_39357 = G__39377;
chunk__38286_39358 = G__39378;
count__38287_39359 = G__39379;
i__38288_39360 = G__39380;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__38289 = cljs.core.seq(params);
var chunk__38290 = null;
var count__38291 = (0);
var i__38292 = (0);
while(true){
if((i__38292 < count__38291)){
var param = chunk__38290.cljs$core$IIndexed$_nth$arity$2(null,i__38292);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__39403 = seq__38289;
var G__39404 = chunk__38290;
var G__39405 = count__38291;
var G__39406 = (i__38292 + (1));
seq__38289 = G__39403;
chunk__38290 = G__39404;
count__38291 = G__39405;
i__38292 = G__39406;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38289);
if(temp__5735__auto__){
var seq__38289__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38289__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38289__$1);
var G__39407 = cljs.core.chunk_rest(seq__38289__$1);
var G__39408 = c__4556__auto__;
var G__39409 = cljs.core.count(c__4556__auto__);
var G__39410 = (0);
seq__38289 = G__39407;
chunk__38290 = G__39408;
count__38291 = G__39409;
i__38292 = G__39410;
continue;
} else {
var param = cljs.core.first(seq__38289__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__39412 = cljs.core.next(seq__38289__$1);
var G__39413 = null;
var G__39414 = (0);
var G__39415 = (0);
seq__38289 = G__39412;
chunk__38290 = G__39413;
count__38291 = G__39414;
i__38292 = G__39415;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__38296){
var map__38297 = p__38296;
var map__38297__$1 = (((((!((map__38297 == null))))?(((((map__38297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38297):map__38297);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__38299){
var map__38300 = p__38299;
var map__38300__$1 = (((((!((map__38300 == null))))?(((((map__38300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38300):map__38300);
var f = map__38300__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38300__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38300__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38300__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38300__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38300__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38300__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38300__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_39433__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_39434 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_39433__$1);
var delegate_name_39435 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_39434),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_39435," = function (");

var seq__38302_39436 = cljs.core.seq(params);
var chunk__38303_39437 = null;
var count__38304_39438 = (0);
var i__38305_39439 = (0);
while(true){
if((i__38305_39439 < count__38304_39438)){
var param_39442 = chunk__38303_39437.cljs$core$IIndexed$_nth$arity$2(null,i__38305_39439);
cljs.compiler.emit(param_39442);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_39442,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__39443 = seq__38302_39436;
var G__39444 = chunk__38303_39437;
var G__39445 = count__38304_39438;
var G__39446 = (i__38305_39439 + (1));
seq__38302_39436 = G__39443;
chunk__38303_39437 = G__39444;
count__38304_39438 = G__39445;
i__38305_39439 = G__39446;
continue;
} else {
var temp__5735__auto___39447 = cljs.core.seq(seq__38302_39436);
if(temp__5735__auto___39447){
var seq__38302_39448__$1 = temp__5735__auto___39447;
if(cljs.core.chunked_seq_QMARK_(seq__38302_39448__$1)){
var c__4556__auto___39449 = cljs.core.chunk_first(seq__38302_39448__$1);
var G__39450 = cljs.core.chunk_rest(seq__38302_39448__$1);
var G__39451 = c__4556__auto___39449;
var G__39452 = cljs.core.count(c__4556__auto___39449);
var G__39453 = (0);
seq__38302_39436 = G__39450;
chunk__38303_39437 = G__39451;
count__38304_39438 = G__39452;
i__38305_39439 = G__39453;
continue;
} else {
var param_39454 = cljs.core.first(seq__38302_39448__$1);
cljs.compiler.emit(param_39454);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_39454,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__39455 = cljs.core.next(seq__38302_39448__$1);
var G__39456 = null;
var G__39457 = (0);
var G__39458 = (0);
seq__38302_39436 = G__39455;
chunk__38303_39437 = G__39456;
count__38304_39438 = G__39457;
i__38305_39439 = G__39458;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_39434," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_39459 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_39459,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_39435,".call(this,");

var seq__38306_39460 = cljs.core.seq(params);
var chunk__38307_39461 = null;
var count__38308_39462 = (0);
var i__38309_39463 = (0);
while(true){
if((i__38309_39463 < count__38308_39462)){
var param_39464 = chunk__38307_39461.cljs$core$IIndexed$_nth$arity$2(null,i__38309_39463);
cljs.compiler.emit(param_39464);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_39464,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__39465 = seq__38306_39460;
var G__39466 = chunk__38307_39461;
var G__39467 = count__38308_39462;
var G__39468 = (i__38309_39463 + (1));
seq__38306_39460 = G__39465;
chunk__38307_39461 = G__39466;
count__38308_39462 = G__39467;
i__38309_39463 = G__39468;
continue;
} else {
var temp__5735__auto___39469 = cljs.core.seq(seq__38306_39460);
if(temp__5735__auto___39469){
var seq__38306_39470__$1 = temp__5735__auto___39469;
if(cljs.core.chunked_seq_QMARK_(seq__38306_39470__$1)){
var c__4556__auto___39471 = cljs.core.chunk_first(seq__38306_39470__$1);
var G__39472 = cljs.core.chunk_rest(seq__38306_39470__$1);
var G__39473 = c__4556__auto___39471;
var G__39474 = cljs.core.count(c__4556__auto___39471);
var G__39475 = (0);
seq__38306_39460 = G__39472;
chunk__38307_39461 = G__39473;
count__38308_39462 = G__39474;
i__38309_39463 = G__39475;
continue;
} else {
var param_39476 = cljs.core.first(seq__38306_39470__$1);
cljs.compiler.emit(param_39476);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_39476,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__39480 = cljs.core.next(seq__38306_39470__$1);
var G__39481 = null;
var G__39482 = (0);
var G__39483 = (0);
seq__38306_39460 = G__39480;
chunk__38307_39461 = G__39481;
count__38308_39462 = G__39482;
i__38309_39463 = G__39483;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_39434,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_39434,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_39433__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_39434,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_39435,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_39434,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__38313){
var map__38314 = p__38313;
var map__38314__$1 = (((((!((map__38314 == null))))?(((((map__38314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38314):map__38314);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38310_SHARP_){
var and__4115__auto__ = p1__38310_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__38310_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_39517__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_39518 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_39517__$1);
var maxparams_39519 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_39520 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_39518),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_39521 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__38311_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__38311_SHARP_)));
}),cljs.core.seq(mmap_39520));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_39518," = null;");

var seq__38319_39528 = cljs.core.seq(ms_39521);
var chunk__38320_39529 = null;
var count__38321_39530 = (0);
var i__38322_39531 = (0);
while(true){
if((i__38322_39531 < count__38321_39530)){
var vec__38329_39532 = chunk__38320_39529.cljs$core$IIndexed$_nth$arity$2(null,i__38322_39531);
var n_39533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38329_39532,(0),null);
var meth_39534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38329_39532,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_39533," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_39534))){
cljs.compiler.emit_variadic_fn_method(meth_39534);
} else {
cljs.compiler.emit_fn_method(meth_39534);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__39535 = seq__38319_39528;
var G__39536 = chunk__38320_39529;
var G__39537 = count__38321_39530;
var G__39538 = (i__38322_39531 + (1));
seq__38319_39528 = G__39535;
chunk__38320_39529 = G__39536;
count__38321_39530 = G__39537;
i__38322_39531 = G__39538;
continue;
} else {
var temp__5735__auto___39539 = cljs.core.seq(seq__38319_39528);
if(temp__5735__auto___39539){
var seq__38319_39540__$1 = temp__5735__auto___39539;
if(cljs.core.chunked_seq_QMARK_(seq__38319_39540__$1)){
var c__4556__auto___39541 = cljs.core.chunk_first(seq__38319_39540__$1);
var G__39542 = cljs.core.chunk_rest(seq__38319_39540__$1);
var G__39543 = c__4556__auto___39541;
var G__39544 = cljs.core.count(c__4556__auto___39541);
var G__39545 = (0);
seq__38319_39528 = G__39542;
chunk__38320_39529 = G__39543;
count__38321_39530 = G__39544;
i__38322_39531 = G__39545;
continue;
} else {
var vec__38336_39546 = cljs.core.first(seq__38319_39540__$1);
var n_39547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38336_39546,(0),null);
var meth_39548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38336_39546,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_39547," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_39548))){
cljs.compiler.emit_variadic_fn_method(meth_39548);
} else {
cljs.compiler.emit_fn_method(meth_39548);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__39555 = cljs.core.next(seq__38319_39540__$1);
var G__39556 = null;
var G__39557 = (0);
var G__39558 = (0);
seq__38319_39528 = G__39555;
chunk__38320_39529 = G__39556;
count__38321_39530 = G__39557;
i__38322_39531 = G__39558;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_39518," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_39519),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_39519)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_39519));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__38339_39559 = cljs.core.seq(ms_39521);
var chunk__38340_39560 = null;
var count__38341_39561 = (0);
var i__38342_39562 = (0);
while(true){
if((i__38342_39562 < count__38341_39561)){
var vec__38349_39563 = chunk__38340_39560.cljs$core$IIndexed$_nth$arity$2(null,i__38342_39562);
var n_39564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38349_39563,(0),null);
var meth_39565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38349_39563,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_39565))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_39567 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_39567," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_39568 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_39567," = new cljs.core.IndexedSeq(",a_39568,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_39564,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_39519)),(((cljs.core.count(maxparams_39519) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_39567,");"], 0));
} else {
var pcnt_39569 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_39565));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_39569,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_39564,".call(this",(((pcnt_39569 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_39569,maxparams_39519)),null,(1),null)),(2),null))),");");
}


var G__39572 = seq__38339_39559;
var G__39573 = chunk__38340_39560;
var G__39574 = count__38341_39561;
var G__39575 = (i__38342_39562 + (1));
seq__38339_39559 = G__39572;
chunk__38340_39560 = G__39573;
count__38341_39561 = G__39574;
i__38342_39562 = G__39575;
continue;
} else {
var temp__5735__auto___39576 = cljs.core.seq(seq__38339_39559);
if(temp__5735__auto___39576){
var seq__38339_39577__$1 = temp__5735__auto___39576;
if(cljs.core.chunked_seq_QMARK_(seq__38339_39577__$1)){
var c__4556__auto___39578 = cljs.core.chunk_first(seq__38339_39577__$1);
var G__39579 = cljs.core.chunk_rest(seq__38339_39577__$1);
var G__39580 = c__4556__auto___39578;
var G__39581 = cljs.core.count(c__4556__auto___39578);
var G__39582 = (0);
seq__38339_39559 = G__39579;
chunk__38340_39560 = G__39580;
count__38341_39561 = G__39581;
i__38342_39562 = G__39582;
continue;
} else {
var vec__38352_39583 = cljs.core.first(seq__38339_39577__$1);
var n_39584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38352_39583,(0),null);
var meth_39585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38352_39583,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_39585))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_39586 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_39586," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_39587 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_39586," = new cljs.core.IndexedSeq(",a_39587,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_39584,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_39519)),(((cljs.core.count(maxparams_39519) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_39586,");"], 0));
} else {
var pcnt_39588 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_39585));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_39588,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_39584,".call(this",(((pcnt_39588 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_39588,maxparams_39519)),null,(1),null)),(2),null))),");");
}


var G__39589 = cljs.core.next(seq__38339_39577__$1);
var G__39590 = null;
var G__39591 = (0);
var G__39592 = (0);
seq__38339_39559 = G__39589;
chunk__38340_39560 = G__39590;
count__38341_39561 = G__39591;
i__38342_39562 = G__39592;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_39593 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_39521)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_39593,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_39518,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_39518,".cljs$lang$applyTo = ",cljs.core.some((function (p1__38312_SHARP_){
var vec__38355 = p1__38312_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38355,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38355,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_39521),".cljs$lang$applyTo;");
} else {
}

var seq__38358_39594 = cljs.core.seq(ms_39521);
var chunk__38359_39595 = null;
var count__38360_39596 = (0);
var i__38361_39597 = (0);
while(true){
if((i__38361_39597 < count__38360_39596)){
var vec__38368_39598 = chunk__38359_39595.cljs$core$IIndexed$_nth$arity$2(null,i__38361_39597);
var n_39599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38368_39598,(0),null);
var meth_39600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38368_39598,(1),null);
var c_39601 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_39600));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_39600))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_39518,".cljs$core$IFn$_invoke$arity$variadic = ",n_39599,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_39518,".cljs$core$IFn$_invoke$arity$",c_39601," = ",n_39599,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__39602 = seq__38358_39594;
var G__39603 = chunk__38359_39595;
var G__39604 = count__38360_39596;
var G__39605 = (i__38361_39597 + (1));
seq__38358_39594 = G__39602;
chunk__38359_39595 = G__39603;
count__38360_39596 = G__39604;
i__38361_39597 = G__39605;
continue;
} else {
var temp__5735__auto___39606 = cljs.core.seq(seq__38358_39594);
if(temp__5735__auto___39606){
var seq__38358_39607__$1 = temp__5735__auto___39606;
if(cljs.core.chunked_seq_QMARK_(seq__38358_39607__$1)){
var c__4556__auto___39608 = cljs.core.chunk_first(seq__38358_39607__$1);
var G__39609 = cljs.core.chunk_rest(seq__38358_39607__$1);
var G__39610 = c__4556__auto___39608;
var G__39611 = cljs.core.count(c__4556__auto___39608);
var G__39612 = (0);
seq__38358_39594 = G__39609;
chunk__38359_39595 = G__39610;
count__38360_39596 = G__39611;
i__38361_39597 = G__39612;
continue;
} else {
var vec__38371_39613 = cljs.core.first(seq__38358_39607__$1);
var n_39614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38371_39613,(0),null);
var meth_39615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38371_39613,(1),null);
var c_39618 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_39615));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_39615))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_39518,".cljs$core$IFn$_invoke$arity$variadic = ",n_39614,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_39518,".cljs$core$IFn$_invoke$arity$",c_39618," = ",n_39614,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__39619 = cljs.core.next(seq__38358_39607__$1);
var G__39620 = null;
var G__39621 = (0);
var G__39622 = (0);
seq__38358_39594 = G__39619;
chunk__38359_39595 = G__39620;
count__38360_39596 = G__39621;
i__38361_39597 = G__39622;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_39518,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__38374){
var map__38375 = p__38374;
var map__38375__$1 = (((((!((map__38375 == null))))?(((((map__38375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38375):map__38375);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38375__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38375__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38375__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__38377_39626 = cljs.core.seq(statements);
var chunk__38378_39627 = null;
var count__38379_39628 = (0);
var i__38380_39629 = (0);
while(true){
if((i__38380_39629 < count__38379_39628)){
var s_39630 = chunk__38378_39627.cljs$core$IIndexed$_nth$arity$2(null,i__38380_39629);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_39630);


var G__39631 = seq__38377_39626;
var G__39632 = chunk__38378_39627;
var G__39633 = count__38379_39628;
var G__39634 = (i__38380_39629 + (1));
seq__38377_39626 = G__39631;
chunk__38378_39627 = G__39632;
count__38379_39628 = G__39633;
i__38380_39629 = G__39634;
continue;
} else {
var temp__5735__auto___39635 = cljs.core.seq(seq__38377_39626);
if(temp__5735__auto___39635){
var seq__38377_39636__$1 = temp__5735__auto___39635;
if(cljs.core.chunked_seq_QMARK_(seq__38377_39636__$1)){
var c__4556__auto___39640 = cljs.core.chunk_first(seq__38377_39636__$1);
var G__39641 = cljs.core.chunk_rest(seq__38377_39636__$1);
var G__39642 = c__4556__auto___39640;
var G__39643 = cljs.core.count(c__4556__auto___39640);
var G__39644 = (0);
seq__38377_39626 = G__39641;
chunk__38378_39627 = G__39642;
count__38379_39628 = G__39643;
i__38380_39629 = G__39644;
continue;
} else {
var s_39645 = cljs.core.first(seq__38377_39636__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_39645);


var G__39646 = cljs.core.next(seq__38377_39636__$1);
var G__39647 = null;
var G__39648 = (0);
var G__39649 = (0);
seq__38377_39626 = G__39646;
chunk__38378_39627 = G__39647;
count__38379_39628 = G__39648;
i__38380_39629 = G__39649;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__38382){
var map__38383 = p__38382;
var map__38383__$1 = (((((!((map__38383 == null))))?(((((map__38383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38383):map__38383);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38383__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38383__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38383__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38383__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38383__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__38390,is_loop){
var map__38391 = p__38390;
var map__38391__$1 = (((((!((map__38391 == null))))?(((((map__38391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38391):map__38391);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38391__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38391__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38391__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__38393_39662 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__38394_39663 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__38394_39663);

try{var seq__38400_39672 = cljs.core.seq(bindings);
var chunk__38401_39673 = null;
var count__38402_39674 = (0);
var i__38403_39675 = (0);
while(true){
if((i__38403_39675 < count__38402_39674)){
var map__38417_39676 = chunk__38401_39673.cljs$core$IIndexed$_nth$arity$2(null,i__38403_39675);
var map__38417_39677__$1 = (((((!((map__38417_39676 == null))))?(((((map__38417_39676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38417_39676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38417_39676):map__38417_39676);
var binding_39678 = map__38417_39677__$1;
var init_39679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38417_39677__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_39678);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_39679,";");


var G__39680 = seq__38400_39672;
var G__39681 = chunk__38401_39673;
var G__39682 = count__38402_39674;
var G__39683 = (i__38403_39675 + (1));
seq__38400_39672 = G__39680;
chunk__38401_39673 = G__39681;
count__38402_39674 = G__39682;
i__38403_39675 = G__39683;
continue;
} else {
var temp__5735__auto___39684 = cljs.core.seq(seq__38400_39672);
if(temp__5735__auto___39684){
var seq__38400_39685__$1 = temp__5735__auto___39684;
if(cljs.core.chunked_seq_QMARK_(seq__38400_39685__$1)){
var c__4556__auto___39686 = cljs.core.chunk_first(seq__38400_39685__$1);
var G__39687 = cljs.core.chunk_rest(seq__38400_39685__$1);
var G__39688 = c__4556__auto___39686;
var G__39689 = cljs.core.count(c__4556__auto___39686);
var G__39690 = (0);
seq__38400_39672 = G__39687;
chunk__38401_39673 = G__39688;
count__38402_39674 = G__39689;
i__38403_39675 = G__39690;
continue;
} else {
var map__38419_39691 = cljs.core.first(seq__38400_39685__$1);
var map__38419_39692__$1 = (((((!((map__38419_39691 == null))))?(((((map__38419_39691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38419_39691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38419_39691):map__38419_39691);
var binding_39693 = map__38419_39692__$1;
var init_39694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38419_39692__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_39693);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_39694,";");


var G__39695 = cljs.core.next(seq__38400_39685__$1);
var G__39696 = null;
var G__39697 = (0);
var G__39698 = (0);
seq__38400_39672 = G__39695;
chunk__38401_39673 = G__39696;
count__38402_39674 = G__39697;
i__38403_39675 = G__39698;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__38393_39662);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__38421){
var map__38422 = p__38421;
var map__38422__$1 = (((((!((map__38422 == null))))?(((((map__38422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38422):map__38422);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38422__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38422__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___39699 = cljs.core.count(exprs);
var i_39700 = (0);
while(true){
if((i_39700 < n__4613__auto___39699)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_39700) : temps.call(null,i_39700))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_39700) : exprs.call(null,i_39700)),";");

var G__39701 = (i_39700 + (1));
i_39700 = G__39701;
continue;
} else {
}
break;
}

var n__4613__auto___39702 = cljs.core.count(exprs);
var i_39703 = (0);
while(true){
if((i_39703 < n__4613__auto___39702)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_39703) : params.call(null,i_39703)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_39703) : temps.call(null,i_39703)),";");

var G__39704 = (i_39703 + (1));
i_39703 = G__39704;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__38436){
var map__38437 = p__38436;
var map__38437__$1 = (((((!((map__38437 == null))))?(((((map__38437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38437):map__38437);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38437__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38437__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38437__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__38447_39705 = cljs.core.seq(bindings);
var chunk__38448_39706 = null;
var count__38449_39707 = (0);
var i__38450_39708 = (0);
while(true){
if((i__38450_39708 < count__38449_39707)){
var map__38473_39709 = chunk__38448_39706.cljs$core$IIndexed$_nth$arity$2(null,i__38450_39708);
var map__38473_39710__$1 = (((((!((map__38473_39709 == null))))?(((((map__38473_39709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38473_39709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38473_39709):map__38473_39709);
var binding_39711 = map__38473_39710__$1;
var init_39712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38473_39710__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_39711)," = ",init_39712,";");


var G__39713 = seq__38447_39705;
var G__39714 = chunk__38448_39706;
var G__39715 = count__38449_39707;
var G__39716 = (i__38450_39708 + (1));
seq__38447_39705 = G__39713;
chunk__38448_39706 = G__39714;
count__38449_39707 = G__39715;
i__38450_39708 = G__39716;
continue;
} else {
var temp__5735__auto___39717 = cljs.core.seq(seq__38447_39705);
if(temp__5735__auto___39717){
var seq__38447_39718__$1 = temp__5735__auto___39717;
if(cljs.core.chunked_seq_QMARK_(seq__38447_39718__$1)){
var c__4556__auto___39719 = cljs.core.chunk_first(seq__38447_39718__$1);
var G__39720 = cljs.core.chunk_rest(seq__38447_39718__$1);
var G__39721 = c__4556__auto___39719;
var G__39722 = cljs.core.count(c__4556__auto___39719);
var G__39723 = (0);
seq__38447_39705 = G__39720;
chunk__38448_39706 = G__39721;
count__38449_39707 = G__39722;
i__38450_39708 = G__39723;
continue;
} else {
var map__38475_39724 = cljs.core.first(seq__38447_39718__$1);
var map__38475_39725__$1 = (((((!((map__38475_39724 == null))))?(((((map__38475_39724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38475_39724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38475_39724):map__38475_39724);
var binding_39726 = map__38475_39725__$1;
var init_39727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38475_39725__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_39726)," = ",init_39727,";");


var G__39728 = cljs.core.next(seq__38447_39718__$1);
var G__39729 = null;
var G__39730 = (0);
var G__39731 = (0);
seq__38447_39705 = G__39728;
chunk__38448_39706 = G__39729;
count__38449_39707 = G__39730;
i__38450_39708 = G__39731;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__38479){
var map__38480 = p__38479;
var map__38480__$1 = (((((!((map__38480 == null))))?(((((map__38480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38480):map__38480);
var expr = map__38480__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38480__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38480__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38480__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__38521 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__38521.cljs$core$IFn$_invoke$arity$1 ? fexpr__38521.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__38521.call(null,tag));
})())){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__38525 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__38525.cljs$core$IFn$_invoke$arity$1 ? fexpr__38525.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__38525.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__38482 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__38477_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38477_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__38478_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38478_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38482,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38482,(1),null);
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_39733 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_39733,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_39734 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_39734,args)),(((mfa_39734 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_39734,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__38554 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__38553 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__38553.cljs$core$IFn$_invoke$arity$1 ? fexpr__38553.cljs$core$IFn$_invoke$arity$1(G__38554) : fexpr__38553.call(null,G__38554));
} else {
return and__4115__auto__;
}
})())){
var fprop_39735 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_39735," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_39735,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_39735," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_39735,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__38555){
var map__38556 = p__38555;
var map__38556__$1 = (((((!((map__38556 == null))))?(((((map__38556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38556):map__38556);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38556__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38556__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38556__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__38558){
var map__38559 = p__38558;
var map__38559__$1 = (((((!((map__38559 == null))))?(((((map__38559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38559):map__38559);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38559__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38559__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38559__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__38574 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__38574__$1 = (((((!((map__38574 == null))))?(((((map__38574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38574):map__38574);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38574__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38574__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__38575 = options;
var map__38575__$1 = (((((!((map__38575 == null))))?(((((map__38575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38575):map__38575);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38575__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38575__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38575__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__38576 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__38582 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__38582__$1 = (((((!((map__38582 == null))))?(((((map__38582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38582):map__38582);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38582__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38582__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38576,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38576,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__38584_39738 = cljs.core.seq(libs_to_load);
var chunk__38585_39739 = null;
var count__38586_39740 = (0);
var i__38587_39741 = (0);
while(true){
if((i__38587_39741 < count__38586_39740)){
var lib_39742 = chunk__38585_39739.cljs$core$IIndexed$_nth$arity$2(null,i__38587_39741);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_39742)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_39742),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_39742),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_39742),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_39742),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_39742,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_39742),"');");
}

}
}
}


var G__39744 = seq__38584_39738;
var G__39745 = chunk__38585_39739;
var G__39746 = count__38586_39740;
var G__39747 = (i__38587_39741 + (1));
seq__38584_39738 = G__39744;
chunk__38585_39739 = G__39745;
count__38586_39740 = G__39746;
i__38587_39741 = G__39747;
continue;
} else {
var temp__5735__auto___39748 = cljs.core.seq(seq__38584_39738);
if(temp__5735__auto___39748){
var seq__38584_39749__$1 = temp__5735__auto___39748;
if(cljs.core.chunked_seq_QMARK_(seq__38584_39749__$1)){
var c__4556__auto___39750 = cljs.core.chunk_first(seq__38584_39749__$1);
var G__39751 = cljs.core.chunk_rest(seq__38584_39749__$1);
var G__39752 = c__4556__auto___39750;
var G__39753 = cljs.core.count(c__4556__auto___39750);
var G__39754 = (0);
seq__38584_39738 = G__39751;
chunk__38585_39739 = G__39752;
count__38586_39740 = G__39753;
i__38587_39741 = G__39754;
continue;
} else {
var lib_39755 = cljs.core.first(seq__38584_39749__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_39755)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_39755),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_39755),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_39755),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_39755),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_39755,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_39755),"');");
}

}
}
}


var G__39757 = cljs.core.next(seq__38584_39749__$1);
var G__39758 = null;
var G__39759 = (0);
var G__39760 = (0);
seq__38584_39738 = G__39757;
chunk__38585_39739 = G__39758;
count__38586_39740 = G__39759;
i__38587_39741 = G__39760;
continue;
}
} else {
}
}
break;
}

var seq__38604_39761 = cljs.core.seq(node_libs);
var chunk__38605_39762 = null;
var count__38606_39763 = (0);
var i__38607_39764 = (0);
while(true){
if((i__38607_39764 < count__38606_39763)){
var lib_39765 = chunk__38605_39762.cljs$core$IIndexed$_nth$arity$2(null,i__38607_39764);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_39765)," = require('",lib_39765,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__39766 = seq__38604_39761;
var G__39767 = chunk__38605_39762;
var G__39768 = count__38606_39763;
var G__39769 = (i__38607_39764 + (1));
seq__38604_39761 = G__39766;
chunk__38605_39762 = G__39767;
count__38606_39763 = G__39768;
i__38607_39764 = G__39769;
continue;
} else {
var temp__5735__auto___39770 = cljs.core.seq(seq__38604_39761);
if(temp__5735__auto___39770){
var seq__38604_39771__$1 = temp__5735__auto___39770;
if(cljs.core.chunked_seq_QMARK_(seq__38604_39771__$1)){
var c__4556__auto___39772 = cljs.core.chunk_first(seq__38604_39771__$1);
var G__39773 = cljs.core.chunk_rest(seq__38604_39771__$1);
var G__39774 = c__4556__auto___39772;
var G__39775 = cljs.core.count(c__4556__auto___39772);
var G__39776 = (0);
seq__38604_39761 = G__39773;
chunk__38605_39762 = G__39774;
count__38606_39763 = G__39775;
i__38607_39764 = G__39776;
continue;
} else {
var lib_39777 = cljs.core.first(seq__38604_39771__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_39777)," = require('",lib_39777,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__39778 = cljs.core.next(seq__38604_39771__$1);
var G__39779 = null;
var G__39780 = (0);
var G__39781 = (0);
seq__38604_39761 = G__39778;
chunk__38605_39762 = G__39779;
count__38606_39763 = G__39780;
i__38607_39764 = G__39781;
continue;
}
} else {
}
}
break;
}

var seq__38616_39785 = cljs.core.seq(global_exports_libs);
var chunk__38617_39786 = null;
var count__38618_39787 = (0);
var i__38619_39788 = (0);
while(true){
if((i__38619_39788 < count__38618_39787)){
var lib_39789 = chunk__38617_39786.cljs$core$IIndexed$_nth$arity$2(null,i__38619_39788);
var map__38626_39790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_39789));
var map__38626_39791__$1 = (((((!((map__38626_39790 == null))))?(((((map__38626_39790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38626_39790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38626_39790):map__38626_39790);
var global_exports_39792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38626_39791__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_39792,lib_39789);


var G__39793 = seq__38616_39785;
var G__39794 = chunk__38617_39786;
var G__39795 = count__38618_39787;
var G__39796 = (i__38619_39788 + (1));
seq__38616_39785 = G__39793;
chunk__38617_39786 = G__39794;
count__38618_39787 = G__39795;
i__38619_39788 = G__39796;
continue;
} else {
var temp__5735__auto___39797 = cljs.core.seq(seq__38616_39785);
if(temp__5735__auto___39797){
var seq__38616_39798__$1 = temp__5735__auto___39797;
if(cljs.core.chunked_seq_QMARK_(seq__38616_39798__$1)){
var c__4556__auto___39799 = cljs.core.chunk_first(seq__38616_39798__$1);
var G__39800 = cljs.core.chunk_rest(seq__38616_39798__$1);
var G__39801 = c__4556__auto___39799;
var G__39802 = cljs.core.count(c__4556__auto___39799);
var G__39803 = (0);
seq__38616_39785 = G__39800;
chunk__38617_39786 = G__39801;
count__38618_39787 = G__39802;
i__38619_39788 = G__39803;
continue;
} else {
var lib_39805 = cljs.core.first(seq__38616_39798__$1);
var map__38628_39806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_39805));
var map__38628_39807__$1 = (((((!((map__38628_39806 == null))))?(((((map__38628_39806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38628_39806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38628_39806):map__38628_39806);
var global_exports_39808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38628_39807__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_39808,lib_39805);


var G__39809 = cljs.core.next(seq__38616_39798__$1);
var G__39810 = null;
var G__39811 = (0);
var G__39812 = (0);
seq__38616_39785 = G__39809;
chunk__38617_39786 = G__39810;
count__38618_39787 = G__39811;
i__38619_39788 = G__39812;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__38630){
var map__38631 = p__38630;
var map__38631__$1 = (((((!((map__38631 == null))))?(((((map__38631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38631):map__38631);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__38633){
var map__38634 = p__38633;
var map__38634__$1 = (((((!((map__38634 == null))))?(((((map__38634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38634):map__38634);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__38636){
var map__38637 = p__38636;
var map__38637__$1 = (((((!((map__38637 == null))))?(((((map__38637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38637):map__38637);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__38639_39816 = cljs.core.seq(protocols);
var chunk__38640_39817 = null;
var count__38641_39818 = (0);
var i__38642_39819 = (0);
while(true){
if((i__38642_39819 < count__38641_39818)){
var protocol_39820 = chunk__38640_39817.cljs$core$IIndexed$_nth$arity$2(null,i__38642_39819);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_39820)),"}");


var G__39821 = seq__38639_39816;
var G__39822 = chunk__38640_39817;
var G__39823 = count__38641_39818;
var G__39824 = (i__38642_39819 + (1));
seq__38639_39816 = G__39821;
chunk__38640_39817 = G__39822;
count__38641_39818 = G__39823;
i__38642_39819 = G__39824;
continue;
} else {
var temp__5735__auto___39825 = cljs.core.seq(seq__38639_39816);
if(temp__5735__auto___39825){
var seq__38639_39826__$1 = temp__5735__auto___39825;
if(cljs.core.chunked_seq_QMARK_(seq__38639_39826__$1)){
var c__4556__auto___39827 = cljs.core.chunk_first(seq__38639_39826__$1);
var G__39828 = cljs.core.chunk_rest(seq__38639_39826__$1);
var G__39829 = c__4556__auto___39827;
var G__39830 = cljs.core.count(c__4556__auto___39827);
var G__39831 = (0);
seq__38639_39816 = G__39828;
chunk__38640_39817 = G__39829;
count__38641_39818 = G__39830;
i__38642_39819 = G__39831;
continue;
} else {
var protocol_39832 = cljs.core.first(seq__38639_39826__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_39832)),"}");


var G__39833 = cljs.core.next(seq__38639_39826__$1);
var G__39834 = null;
var G__39835 = (0);
var G__39836 = (0);
seq__38639_39816 = G__39833;
chunk__38640_39817 = G__39834;
count__38641_39818 = G__39835;
i__38642_39819 = G__39836;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__38643_39837 = cljs.core.seq(fields__$1);
var chunk__38644_39838 = null;
var count__38645_39839 = (0);
var i__38646_39840 = (0);
while(true){
if((i__38646_39840 < count__38645_39839)){
var fld_39841 = chunk__38644_39838.cljs$core$IIndexed$_nth$arity$2(null,i__38646_39840);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_39841," = ",fld_39841,";");


var G__39842 = seq__38643_39837;
var G__39843 = chunk__38644_39838;
var G__39844 = count__38645_39839;
var G__39845 = (i__38646_39840 + (1));
seq__38643_39837 = G__39842;
chunk__38644_39838 = G__39843;
count__38645_39839 = G__39844;
i__38646_39840 = G__39845;
continue;
} else {
var temp__5735__auto___39846 = cljs.core.seq(seq__38643_39837);
if(temp__5735__auto___39846){
var seq__38643_39847__$1 = temp__5735__auto___39846;
if(cljs.core.chunked_seq_QMARK_(seq__38643_39847__$1)){
var c__4556__auto___39848 = cljs.core.chunk_first(seq__38643_39847__$1);
var G__39849 = cljs.core.chunk_rest(seq__38643_39847__$1);
var G__39850 = c__4556__auto___39848;
var G__39851 = cljs.core.count(c__4556__auto___39848);
var G__39852 = (0);
seq__38643_39837 = G__39849;
chunk__38644_39838 = G__39850;
count__38645_39839 = G__39851;
i__38646_39840 = G__39852;
continue;
} else {
var fld_39853 = cljs.core.first(seq__38643_39847__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_39853," = ",fld_39853,";");


var G__39854 = cljs.core.next(seq__38643_39847__$1);
var G__39855 = null;
var G__39856 = (0);
var G__39857 = (0);
seq__38643_39837 = G__39854;
chunk__38644_39838 = G__39855;
count__38645_39839 = G__39856;
i__38646_39840 = G__39857;
continue;
}
} else {
}
}
break;
}

var seq__38647_39858 = cljs.core.seq(pmasks);
var chunk__38648_39859 = null;
var count__38649_39860 = (0);
var i__38650_39861 = (0);
while(true){
if((i__38650_39861 < count__38649_39860)){
var vec__38657_39862 = chunk__38648_39859.cljs$core$IIndexed$_nth$arity$2(null,i__38650_39861);
var pno_39863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38657_39862,(0),null);
var pmask_39864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38657_39862,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_39863,"$ = ",pmask_39864,";");


var G__39866 = seq__38647_39858;
var G__39867 = chunk__38648_39859;
var G__39868 = count__38649_39860;
var G__39869 = (i__38650_39861 + (1));
seq__38647_39858 = G__39866;
chunk__38648_39859 = G__39867;
count__38649_39860 = G__39868;
i__38650_39861 = G__39869;
continue;
} else {
var temp__5735__auto___39873 = cljs.core.seq(seq__38647_39858);
if(temp__5735__auto___39873){
var seq__38647_39874__$1 = temp__5735__auto___39873;
if(cljs.core.chunked_seq_QMARK_(seq__38647_39874__$1)){
var c__4556__auto___39875 = cljs.core.chunk_first(seq__38647_39874__$1);
var G__39876 = cljs.core.chunk_rest(seq__38647_39874__$1);
var G__39877 = c__4556__auto___39875;
var G__39878 = cljs.core.count(c__4556__auto___39875);
var G__39879 = (0);
seq__38647_39858 = G__39876;
chunk__38648_39859 = G__39877;
count__38649_39860 = G__39878;
i__38650_39861 = G__39879;
continue;
} else {
var vec__38660_39880 = cljs.core.first(seq__38647_39874__$1);
var pno_39881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38660_39880,(0),null);
var pmask_39882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38660_39880,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_39881,"$ = ",pmask_39882,";");


var G__39883 = cljs.core.next(seq__38647_39874__$1);
var G__39884 = null;
var G__39885 = (0);
var G__39886 = (0);
seq__38647_39858 = G__39883;
chunk__38648_39859 = G__39884;
count__38649_39860 = G__39885;
i__38650_39861 = G__39886;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__38663){
var map__38664 = p__38663;
var map__38664__$1 = (((((!((map__38664 == null))))?(((((map__38664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38664):map__38664);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38664__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38664__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38664__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38664__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38664__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__38666_39887 = cljs.core.seq(protocols);
var chunk__38667_39888 = null;
var count__38668_39889 = (0);
var i__38669_39890 = (0);
while(true){
if((i__38669_39890 < count__38668_39889)){
var protocol_39891 = chunk__38667_39888.cljs$core$IIndexed$_nth$arity$2(null,i__38669_39890);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_39891)),"}");


var G__39892 = seq__38666_39887;
var G__39893 = chunk__38667_39888;
var G__39894 = count__38668_39889;
var G__39895 = (i__38669_39890 + (1));
seq__38666_39887 = G__39892;
chunk__38667_39888 = G__39893;
count__38668_39889 = G__39894;
i__38669_39890 = G__39895;
continue;
} else {
var temp__5735__auto___39896 = cljs.core.seq(seq__38666_39887);
if(temp__5735__auto___39896){
var seq__38666_39897__$1 = temp__5735__auto___39896;
if(cljs.core.chunked_seq_QMARK_(seq__38666_39897__$1)){
var c__4556__auto___39898 = cljs.core.chunk_first(seq__38666_39897__$1);
var G__39899 = cljs.core.chunk_rest(seq__38666_39897__$1);
var G__39900 = c__4556__auto___39898;
var G__39901 = cljs.core.count(c__4556__auto___39898);
var G__39902 = (0);
seq__38666_39887 = G__39899;
chunk__38667_39888 = G__39900;
count__38668_39889 = G__39901;
i__38669_39890 = G__39902;
continue;
} else {
var protocol_39903 = cljs.core.first(seq__38666_39897__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_39903)),"}");


var G__39904 = cljs.core.next(seq__38666_39897__$1);
var G__39905 = null;
var G__39906 = (0);
var G__39907 = (0);
seq__38666_39887 = G__39904;
chunk__38667_39888 = G__39905;
count__38668_39889 = G__39906;
i__38669_39890 = G__39907;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__38670_39909 = cljs.core.seq(fields__$1);
var chunk__38671_39910 = null;
var count__38672_39911 = (0);
var i__38673_39912 = (0);
while(true){
if((i__38673_39912 < count__38672_39911)){
var fld_39913 = chunk__38671_39910.cljs$core$IIndexed$_nth$arity$2(null,i__38673_39912);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_39913," = ",fld_39913,";");


var G__39914 = seq__38670_39909;
var G__39915 = chunk__38671_39910;
var G__39916 = count__38672_39911;
var G__39917 = (i__38673_39912 + (1));
seq__38670_39909 = G__39914;
chunk__38671_39910 = G__39915;
count__38672_39911 = G__39916;
i__38673_39912 = G__39917;
continue;
} else {
var temp__5735__auto___39918 = cljs.core.seq(seq__38670_39909);
if(temp__5735__auto___39918){
var seq__38670_39919__$1 = temp__5735__auto___39918;
if(cljs.core.chunked_seq_QMARK_(seq__38670_39919__$1)){
var c__4556__auto___39920 = cljs.core.chunk_first(seq__38670_39919__$1);
var G__39921 = cljs.core.chunk_rest(seq__38670_39919__$1);
var G__39922 = c__4556__auto___39920;
var G__39923 = cljs.core.count(c__4556__auto___39920);
var G__39924 = (0);
seq__38670_39909 = G__39921;
chunk__38671_39910 = G__39922;
count__38672_39911 = G__39923;
i__38673_39912 = G__39924;
continue;
} else {
var fld_39925 = cljs.core.first(seq__38670_39919__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_39925," = ",fld_39925,";");


var G__39929 = cljs.core.next(seq__38670_39919__$1);
var G__39930 = null;
var G__39931 = (0);
var G__39932 = (0);
seq__38670_39909 = G__39929;
chunk__38671_39910 = G__39930;
count__38672_39911 = G__39931;
i__38673_39912 = G__39932;
continue;
}
} else {
}
}
break;
}

var seq__38678_39933 = cljs.core.seq(pmasks);
var chunk__38679_39934 = null;
var count__38680_39935 = (0);
var i__38681_39936 = (0);
while(true){
if((i__38681_39936 < count__38680_39935)){
var vec__38689_39937 = chunk__38679_39934.cljs$core$IIndexed$_nth$arity$2(null,i__38681_39936);
var pno_39938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38689_39937,(0),null);
var pmask_39939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38689_39937,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_39938,"$ = ",pmask_39939,";");


var G__39940 = seq__38678_39933;
var G__39941 = chunk__38679_39934;
var G__39942 = count__38680_39935;
var G__39943 = (i__38681_39936 + (1));
seq__38678_39933 = G__39940;
chunk__38679_39934 = G__39941;
count__38680_39935 = G__39942;
i__38681_39936 = G__39943;
continue;
} else {
var temp__5735__auto___39944 = cljs.core.seq(seq__38678_39933);
if(temp__5735__auto___39944){
var seq__38678_39945__$1 = temp__5735__auto___39944;
if(cljs.core.chunked_seq_QMARK_(seq__38678_39945__$1)){
var c__4556__auto___39946 = cljs.core.chunk_first(seq__38678_39945__$1);
var G__39947 = cljs.core.chunk_rest(seq__38678_39945__$1);
var G__39948 = c__4556__auto___39946;
var G__39949 = cljs.core.count(c__4556__auto___39946);
var G__39950 = (0);
seq__38678_39933 = G__39947;
chunk__38679_39934 = G__39948;
count__38680_39935 = G__39949;
i__38681_39936 = G__39950;
continue;
} else {
var vec__38692_39951 = cljs.core.first(seq__38678_39945__$1);
var pno_39952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38692_39951,(0),null);
var pmask_39953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38692_39951,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_39952,"$ = ",pmask_39953,";");


var G__39954 = cljs.core.next(seq__38678_39945__$1);
var G__39955 = null;
var G__39956 = (0);
var G__39957 = (0);
seq__38678_39933 = G__39954;
chunk__38679_39934 = G__39955;
count__38680_39935 = G__39956;
i__38681_39936 = G__39957;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__38695){
var map__38696 = p__38695;
var map__38696__$1 = (((((!((map__38696 == null))))?(((((map__38696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38696):map__38696);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__38698){
var map__38699 = p__38698;
var map__38699__$1 = (((((!((map__38699 == null))))?(((((map__38699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38699):map__38699);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38699__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38699__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38699__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38699__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38699__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__37867__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37867__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__38715 = cljs.core.seq(table);
var chunk__38716 = null;
var count__38717 = (0);
var i__38718 = (0);
while(true){
if((i__38718 < count__38717)){
var vec__38726 = chunk__38716.cljs$core$IIndexed$_nth$arity$2(null,i__38718);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38726,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38726,(1),null);
var ns_39965 = cljs.core.namespace(sym);
var name_39966 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__39967 = seq__38715;
var G__39968 = chunk__38716;
var G__39969 = count__38717;
var G__39970 = (i__38718 + (1));
seq__38715 = G__39967;
chunk__38716 = G__39968;
count__38717 = G__39969;
i__38718 = G__39970;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38715);
if(temp__5735__auto__){
var seq__38715__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38715__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38715__$1);
var G__39971 = cljs.core.chunk_rest(seq__38715__$1);
var G__39972 = c__4556__auto__;
var G__39973 = cljs.core.count(c__4556__auto__);
var G__39974 = (0);
seq__38715 = G__39971;
chunk__38716 = G__39972;
count__38717 = G__39973;
i__38718 = G__39974;
continue;
} else {
var vec__38729 = cljs.core.first(seq__38715__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38729,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38729,(1),null);
var ns_39975 = cljs.core.namespace(sym);
var name_39976 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__39986 = cljs.core.next(seq__38715__$1);
var G__39987 = null;
var G__39988 = (0);
var G__39989 = (0);
seq__38715 = G__39986;
chunk__38716 = G__39987;
count__38717 = G__39988;
i__38718 = G__39989;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__38733 = arguments.length;
switch (G__38733) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_40014 = cljs.core.first(ks);
var vec__38734_40015 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_40014);
var top_40016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38734_40015,(0),null);
var prefix_SINGLEQUOTE__40017 = vec__38734_40015;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_40014)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__40017) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_40016)) || (cljs.core.contains_QMARK_(known_externs,top_40016)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__40017)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_40016);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__40017)),";");
}
} else {
}

var m_40022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_40014);
if(cljs.core.empty_QMARK_(m_40022)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__40017,m_40022,top_level,known_externs);
}

var G__40027 = cljs.core.next(ks);
ks = G__40027;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map

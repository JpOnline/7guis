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
var map__49738 = s;
var map__49738__$1 = (((((!((map__49738 == null))))?(((((map__49738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49738):map__49738);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49738__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49738__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__49742 = info;
var map__49743 = G__49742;
var map__49743__$1 = (((((!((map__49743 == null))))?(((((map__49743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49743):map__49743);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__49742__$1 = G__49742;
while(true){
var d__$2 = d__$1;
var map__49747 = G__49742__$1;
var map__49747__$1 = (((((!((map__49747 == null))))?(((((map__49747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49747):map__49747);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49747__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__50769 = (d__$2 + (1));
var G__50770 = shadow__$1;
d__$1 = G__50769;
G__49742__$1 = G__50770;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__49749){
var map__49750 = p__49749;
var map__49750__$1 = (((((!((map__49750 == null))))?(((((map__49750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49750):map__49750);
var name_var = map__49750__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49750__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49750__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__49760 = info;
var map__49760__$1 = (((((!((map__49760 == null))))?(((((map__49760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49760):map__49760);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49760__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49760__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__49771 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__49771) : cljs.compiler.munge.call(null,G__49771));
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
var G__49801 = arguments.length;
switch (G__49801) {
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
var ms = (function (){var fexpr__49834 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__49834.cljs$core$IFn$_invoke$arity$1 ? fexpr__49834.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__49834.call(null,ss__$3));
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
var G__49842 = cp;
switch (G__49842) {
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
var seq__49849_50776 = cljs.core.seq(s);
var chunk__49850_50777 = null;
var count__49851_50778 = (0);
var i__49852_50779 = (0);
while(true){
if((i__49852_50779 < count__49851_50778)){
var c_50782 = chunk__49850_50777.cljs$core$IIndexed$_nth$arity$2(null,i__49852_50779);
sb.append(cljs.compiler.escape_char(c_50782));


var G__50783 = seq__49849_50776;
var G__50784 = chunk__49850_50777;
var G__50785 = count__49851_50778;
var G__50786 = (i__49852_50779 + (1));
seq__49849_50776 = G__50783;
chunk__49850_50777 = G__50784;
count__49851_50778 = G__50785;
i__49852_50779 = G__50786;
continue;
} else {
var temp__5735__auto___50787 = cljs.core.seq(seq__49849_50776);
if(temp__5735__auto___50787){
var seq__49849_50788__$1 = temp__5735__auto___50787;
if(cljs.core.chunked_seq_QMARK_(seq__49849_50788__$1)){
var c__4556__auto___50789 = cljs.core.chunk_first(seq__49849_50788__$1);
var G__50790 = cljs.core.chunk_rest(seq__49849_50788__$1);
var G__50791 = c__4556__auto___50789;
var G__50792 = cljs.core.count(c__4556__auto___50789);
var G__50793 = (0);
seq__49849_50776 = G__50790;
chunk__49850_50777 = G__50791;
count__49851_50778 = G__50792;
i__49852_50779 = G__50793;
continue;
} else {
var c_50794 = cljs.core.first(seq__49849_50788__$1);
sb.append(cljs.compiler.escape_char(c_50794));


var G__50795 = cljs.core.next(seq__49849_50788__$1);
var G__50796 = null;
var G__50797 = (0);
var G__50798 = (0);
seq__49849_50776 = G__50795;
chunk__49850_50777 = G__50796;
count__49851_50778 = G__50797;
i__49852_50779 = G__50798;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__49859 = cljs.core.get_global_hierarchy;
return (fexpr__49859.cljs$core$IFn$_invoke$arity$0 ? fexpr__49859.cljs$core$IFn$_invoke$arity$0() : fexpr__49859.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__49860_50802 = ast;
var map__49860_50803__$1 = (((((!((map__49860_50802 == null))))?(((((map__49860_50802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49860_50802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49860_50802):map__49860_50802);
var env_50804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49860_50803__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_50804))){
var map__49862_50809 = env_50804;
var map__49862_50810__$1 = (((((!((map__49862_50809 == null))))?(((((map__49862_50809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49862_50809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49862_50809):map__49862_50809);
var line_50811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49862_50810__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49862_50810__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__49864 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__49866 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__49865 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__49865.cljs$core$IFn$_invoke$arity$1 ? fexpr__49865.cljs$core$IFn$_invoke$arity$1(G__49866) : fexpr__49865.call(null,G__49866));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49864,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__49864;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_50811 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_50812)?(column_50812 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__49875 = arguments.length;
switch (G__49875) {
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
var len__4736__auto___50828 = arguments.length;
var i__4737__auto___50829 = (0);
while(true){
if((i__4737__auto___50829 < len__4736__auto___50828)){
args_arr__4757__auto__.push((arguments[i__4737__auto___50829]));

var G__50838 = (i__4737__auto___50829 + (1));
i__4737__auto___50829 = G__50838;
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
var s_50843 = (function (){var G__49876 = a;
if((!(typeof a === 'string'))){
return G__49876.toString();
} else {
return G__49876;
}
})();
var temp__5739__auto___50844 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___50844 == null)){
} else {
var sm_data_50845 = temp__5739__auto___50844;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_50845,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__49867_SHARP_){
return (p1__49867_SHARP_ + s_50843.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_50843], 0));

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

var seq__49877 = cljs.core.seq(xs);
var chunk__49878 = null;
var count__49879 = (0);
var i__49880 = (0);
while(true){
if((i__49880 < count__49879)){
var x = chunk__49878.cljs$core$IIndexed$_nth$arity$2(null,i__49880);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__50852 = seq__49877;
var G__50853 = chunk__49878;
var G__50854 = count__49879;
var G__50855 = (i__49880 + (1));
seq__49877 = G__50852;
chunk__49878 = G__50853;
count__49879 = G__50854;
i__49880 = G__50855;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49877);
if(temp__5735__auto__){
var seq__49877__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49877__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49877__$1);
var G__50858 = cljs.core.chunk_rest(seq__49877__$1);
var G__50859 = c__4556__auto__;
var G__50860 = cljs.core.count(c__4556__auto__);
var G__50861 = (0);
seq__49877 = G__50858;
chunk__49878 = G__50859;
count__49879 = G__50860;
i__49880 = G__50861;
continue;
} else {
var x = cljs.core.first(seq__49877__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__50862 = cljs.core.next(seq__49877__$1);
var G__50863 = null;
var G__50864 = (0);
var G__50865 = (0);
seq__49877 = G__50862;
chunk__49878 = G__50863;
count__49879 = G__50864;
i__49880 = G__50865;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq49869){
var G__49870 = cljs.core.first(seq49869);
var seq49869__$1 = cljs.core.next(seq49869);
var G__49871 = cljs.core.first(seq49869__$1);
var seq49869__$2 = cljs.core.next(seq49869__$1);
var G__49872 = cljs.core.first(seq49869__$2);
var seq49869__$3 = cljs.core.next(seq49869__$2);
var G__49873 = cljs.core.first(seq49869__$3);
var seq49869__$4 = cljs.core.next(seq49869__$3);
var G__49874 = cljs.core.first(seq49869__$4);
var seq49869__$5 = cljs.core.next(seq49869__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49870,G__49871,G__49872,G__49873,G__49874,seq49869__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__49881){
var map__49882 = p__49881;
var map__49882__$1 = (((((!((map__49882 == null))))?(((((map__49882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49882):map__49882);
var m = map__49882__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__49895 = arguments.length;
switch (G__49895) {
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
var len__4736__auto___50868 = arguments.length;
var i__4737__auto___50869 = (0);
while(true){
if((i__4737__auto___50869 < len__4736__auto___50868)){
args_arr__4757__auto__.push((arguments[i__4737__auto___50869]));

var G__50870 = (i__4737__auto___50869 + (1));
i__4737__auto___50869 = G__50870;
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

var seq__49904_50881 = cljs.core.seq(xs);
var chunk__49905_50882 = null;
var count__49906_50883 = (0);
var i__49907_50884 = (0);
while(true){
if((i__49907_50884 < count__49906_50883)){
var x_50885 = chunk__49905_50882.cljs$core$IIndexed$_nth$arity$2(null,i__49907_50884);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_50885);


var G__50886 = seq__49904_50881;
var G__50887 = chunk__49905_50882;
var G__50888 = count__49906_50883;
var G__50889 = (i__49907_50884 + (1));
seq__49904_50881 = G__50886;
chunk__49905_50882 = G__50887;
count__49906_50883 = G__50888;
i__49907_50884 = G__50889;
continue;
} else {
var temp__5735__auto___50894 = cljs.core.seq(seq__49904_50881);
if(temp__5735__auto___50894){
var seq__49904_50895__$1 = temp__5735__auto___50894;
if(cljs.core.chunked_seq_QMARK_(seq__49904_50895__$1)){
var c__4556__auto___50896 = cljs.core.chunk_first(seq__49904_50895__$1);
var G__50897 = cljs.core.chunk_rest(seq__49904_50895__$1);
var G__50898 = c__4556__auto___50896;
var G__50899 = cljs.core.count(c__4556__auto___50896);
var G__50900 = (0);
seq__49904_50881 = G__50897;
chunk__49905_50882 = G__50898;
count__49906_50883 = G__50899;
i__49907_50884 = G__50900;
continue;
} else {
var x_50904 = cljs.core.first(seq__49904_50895__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_50904);


var G__50905 = cljs.core.next(seq__49904_50895__$1);
var G__50906 = null;
var G__50907 = (0);
var G__50908 = (0);
seq__49904_50881 = G__50905;
chunk__49905_50882 = G__50906;
count__49906_50883 = G__50907;
i__49907_50884 = G__50908;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq49889){
var G__49890 = cljs.core.first(seq49889);
var seq49889__$1 = cljs.core.next(seq49889);
var G__49891 = cljs.core.first(seq49889__$1);
var seq49889__$2 = cljs.core.next(seq49889__$1);
var G__49892 = cljs.core.first(seq49889__$2);
var seq49889__$3 = cljs.core.next(seq49889__$2);
var G__49893 = cljs.core.first(seq49889__$3);
var seq49889__$4 = cljs.core.next(seq49889__$3);
var G__49894 = cljs.core.first(seq49889__$4);
var seq49889__$5 = cljs.core.next(seq49889__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49890,G__49891,G__49892,G__49893,G__49894,seq49889__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49913_50917 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49914_50918 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49915_50919 = true;
var _STAR_print_fn_STAR__temp_val__49916_50920 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49915_50919);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49916_50920);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49914_50918);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49913_50917);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__49919 = cljs.core.get_global_hierarchy;
return (fexpr__49919.cljs$core$IFn$_invoke$arity$0 ? fexpr__49919.cljs$core$IFn$_invoke$arity$0() : fexpr__49919.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__49925 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49925,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49925,(1),null);
var G__49928 = ns;
var G__49929 = name;
var G__49930 = (function (){
var G__49931 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__49931) : cljs.compiler.emit_constant.call(null,G__49931));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__49928,G__49929,G__49930) : cljs.compiler.emit_record_value.call(null,G__49928,G__49929,G__49930));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__49932 = cljs.core.keys(x);
var G__49933 = cljs.core.vals(x);
var G__49934 = cljs.compiler.emit_constants_comma_sep;
var G__49935 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__49932,G__49933,G__49934,G__49935) : cljs.compiler.emit_map.call(null,G__49932,G__49933,G__49934,G__49935));
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
var G__49936 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__49937 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__49936,G__49937) : cljs.compiler.emit_with_meta.call(null,G__49936,G__49937));
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
var vec__49943 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49943,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49943,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49943,(2),null);
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
var G__49990 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__49990) : x.call(null,G__49990));
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
var G__49993 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__49993) : x.call(null,G__49993));
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
var G__49998 = items;
var G__49999 = (function (p1__49997_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__49997_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__49998,G__49999) : cljs.compiler.emit_js_object.call(null,G__49998,G__49999));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__50001){
var map__50002 = p__50001;
var map__50002__$1 = (((((!((map__50002 == null))))?(((((map__50002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50002):map__50002);
var ast = map__50002__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50002__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50002__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50002__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__50007 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__50007__$1 = (((((!((map__50007 == null))))?(((((map__50007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50007):map__50007);
var cenv = map__50007__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50007__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__50016 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__50019 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__50019) : cljs.compiler.es5_GT__EQ_.call(null,G__50019));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__50016,cljs.analyzer.es5_allowed);
} else {
return G__50016;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__50024 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__50024,reserved);
} else {
return G__50024;
}
})();
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__50029_50971 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__50029_50972__$1 = (((G__50029_50971 instanceof cljs.core.Keyword))?G__50029_50971.fqn:null);
switch (G__50029_50972__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__50044){
var map__50046 = p__50044;
var map__50046__$1 = (((((!((map__50046 == null))))?(((((map__50046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50046):map__50046);
var arg = map__50046__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50046__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50046__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50046__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50046__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__50049 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__50049__$1 = (((((!((map__50049 == null))))?(((((map__50049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50049):map__50049);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50049__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__50053){
var map__50054 = p__50053;
var map__50054__$1 = (((((!((map__50054 == null))))?(((((map__50054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50054):map__50054);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50054__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50054__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50054__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__50057_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__50057_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__50059 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__50059) : comma_sep.call(null,G__50059));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__50060 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__50060) : comma_sep.call(null,G__50060));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__50061){
var map__50062 = p__50061;
var map__50062__$1 = (((((!((map__50062 == null))))?(((((map__50062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50062):map__50062);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50062__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50062__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50062__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__50069){
var map__50070 = p__50069;
var map__50070__$1 = (((((!((map__50070 == null))))?(((((map__50070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50070):map__50070);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50070__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50070__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__50073_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__50073_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__50075 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__50075) : comma_sep.call(null,G__50075));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__50076){
var map__50077 = p__50076;
var map__50077__$1 = (((((!((map__50077 == null))))?(((((map__50077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50077):map__50077);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50077__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50077__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___51000 = cljs.core.seq(items);
if(temp__5735__auto___51000){
var items_51002__$1 = temp__5735__auto___51000;
var vec__50086_51003 = items_51002__$1;
var seq__50087_51004 = cljs.core.seq(vec__50086_51003);
var first__50088_51005 = cljs.core.first(seq__50087_51004);
var seq__50087_51006__$1 = cljs.core.next(seq__50087_51004);
var vec__50089_51007 = first__50088_51005;
var k_51008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50089_51007,(0),null);
var v_51009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50089_51007,(1),null);
var r_51010 = seq__50087_51006__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_51008),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_51009) : emit_js_object_val.call(null,v_51009)));

var seq__50093_51013 = cljs.core.seq(r_51010);
var chunk__50094_51014 = null;
var count__50095_51015 = (0);
var i__50096_51016 = (0);
while(true){
if((i__50096_51016 < count__50095_51015)){
var vec__50104_51017 = chunk__50094_51014.cljs$core$IIndexed$_nth$arity$2(null,i__50096_51016);
var k_51018__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50104_51017,(0),null);
var v_51019__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50104_51017,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_51018__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_51019__$1) : emit_js_object_val.call(null,v_51019__$1)));


var G__51023 = seq__50093_51013;
var G__51024 = chunk__50094_51014;
var G__51025 = count__50095_51015;
var G__51026 = (i__50096_51016 + (1));
seq__50093_51013 = G__51023;
chunk__50094_51014 = G__51024;
count__50095_51015 = G__51025;
i__50096_51016 = G__51026;
continue;
} else {
var temp__5735__auto___51027__$1 = cljs.core.seq(seq__50093_51013);
if(temp__5735__auto___51027__$1){
var seq__50093_51028__$1 = temp__5735__auto___51027__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50093_51028__$1)){
var c__4556__auto___51029 = cljs.core.chunk_first(seq__50093_51028__$1);
var G__51030 = cljs.core.chunk_rest(seq__50093_51028__$1);
var G__51031 = c__4556__auto___51029;
var G__51032 = cljs.core.count(c__4556__auto___51029);
var G__51033 = (0);
seq__50093_51013 = G__51030;
chunk__50094_51014 = G__51031;
count__50095_51015 = G__51032;
i__50096_51016 = G__51033;
continue;
} else {
var vec__50109_51038 = cljs.core.first(seq__50093_51028__$1);
var k_51039__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50109_51038,(0),null);
var v_51040__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50109_51038,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_51039__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_51040__$1) : emit_js_object_val.call(null,v_51040__$1)));


var G__51047 = cljs.core.next(seq__50093_51028__$1);
var G__51048 = null;
var G__51049 = (0);
var G__51050 = (0);
seq__50093_51013 = G__51047;
chunk__50094_51014 = G__51048;
count__50095_51015 = G__51049;
i__50096_51016 = G__51050;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__50113){
var map__50114 = p__50113;
var map__50114__$1 = (((((!((map__50114 == null))))?(((((map__50114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50114):map__50114);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50114__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50114__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50114__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__50118){
var map__50119 = p__50118;
var map__50119__$1 = (((((!((map__50119 == null))))?(((((map__50119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50119):map__50119);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50119__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50119__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__50122){
var map__50124 = p__50122;
var map__50124__$1 = (((((!((map__50124 == null))))?(((((map__50124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50124):map__50124);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50124__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__50127){
var map__50128 = p__50127;
var map__50128__$1 = (((((!((map__50128 == null))))?(((((map__50128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50128):map__50128);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50128__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50128__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__50131 = cljs.analyzer.unwrap_quote(expr);
var map__50131__$1 = (((((!((map__50131 == null))))?(((((map__50131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50131):map__50131);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50131__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50131__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50131__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__50136 = cljs.analyzer.unwrap_quote(expr);
var map__50136__$1 = (((((!((map__50136 == null))))?(((((map__50136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50136):map__50136);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__50146 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__50146.cljs$core$IFn$_invoke$arity$1 ? fexpr__50146.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__50146.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__50147){
var map__50150 = p__50147;
var map__50150__$1 = (((((!((map__50150 == null))))?(((((map__50150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50150):map__50150);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50150__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50150__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50150__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50150__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50150__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__50166){
var map__50167 = p__50166;
var map__50167__$1 = (((((!((map__50167 == null))))?(((((map__50167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50167):map__50167);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50167__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50167__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50167__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50167__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__50169_51131 = cljs.core.seq(nodes);
var chunk__50170_51132 = null;
var count__50171_51133 = (0);
var i__50172_51134 = (0);
while(true){
if((i__50172_51134 < count__50171_51133)){
var map__50189_51135 = chunk__50170_51132.cljs$core$IIndexed$_nth$arity$2(null,i__50172_51134);
var map__50189_51136__$1 = (((((!((map__50189_51135 == null))))?(((((map__50189_51135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50189_51135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50189_51135):map__50189_51135);
var ts_51137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50189_51136__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__50190_51138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50189_51136__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__50190_51139__$1 = (((((!((map__50190_51138 == null))))?(((((map__50190_51138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50190_51138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50190_51138):map__50190_51138);
var then_51140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190_51139__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__50194_51149 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_51137));
var chunk__50195_51150 = null;
var count__50196_51151 = (0);
var i__50197_51152 = (0);
while(true){
if((i__50197_51152 < count__50196_51151)){
var test_51157 = chunk__50195_51150.cljs$core$IIndexed$_nth$arity$2(null,i__50197_51152);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_51157,":");


var G__51158 = seq__50194_51149;
var G__51159 = chunk__50195_51150;
var G__51160 = count__50196_51151;
var G__51161 = (i__50197_51152 + (1));
seq__50194_51149 = G__51158;
chunk__50195_51150 = G__51159;
count__50196_51151 = G__51160;
i__50197_51152 = G__51161;
continue;
} else {
var temp__5735__auto___51162 = cljs.core.seq(seq__50194_51149);
if(temp__5735__auto___51162){
var seq__50194_51165__$1 = temp__5735__auto___51162;
if(cljs.core.chunked_seq_QMARK_(seq__50194_51165__$1)){
var c__4556__auto___51166 = cljs.core.chunk_first(seq__50194_51165__$1);
var G__51167 = cljs.core.chunk_rest(seq__50194_51165__$1);
var G__51168 = c__4556__auto___51166;
var G__51169 = cljs.core.count(c__4556__auto___51166);
var G__51170 = (0);
seq__50194_51149 = G__51167;
chunk__50195_51150 = G__51168;
count__50196_51151 = G__51169;
i__50197_51152 = G__51170;
continue;
} else {
var test_51175 = cljs.core.first(seq__50194_51165__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_51175,":");


var G__51176 = cljs.core.next(seq__50194_51165__$1);
var G__51177 = null;
var G__51178 = (0);
var G__51179 = (0);
seq__50194_51149 = G__51176;
chunk__50195_51150 = G__51177;
count__50196_51151 = G__51178;
i__50197_51152 = G__51179;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_51140);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_51140);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__51180 = seq__50169_51131;
var G__51181 = chunk__50170_51132;
var G__51182 = count__50171_51133;
var G__51183 = (i__50172_51134 + (1));
seq__50169_51131 = G__51180;
chunk__50170_51132 = G__51181;
count__50171_51133 = G__51182;
i__50172_51134 = G__51183;
continue;
} else {
var temp__5735__auto___51184 = cljs.core.seq(seq__50169_51131);
if(temp__5735__auto___51184){
var seq__50169_51185__$1 = temp__5735__auto___51184;
if(cljs.core.chunked_seq_QMARK_(seq__50169_51185__$1)){
var c__4556__auto___51186 = cljs.core.chunk_first(seq__50169_51185__$1);
var G__51187 = cljs.core.chunk_rest(seq__50169_51185__$1);
var G__51188 = c__4556__auto___51186;
var G__51189 = cljs.core.count(c__4556__auto___51186);
var G__51190 = (0);
seq__50169_51131 = G__51187;
chunk__50170_51132 = G__51188;
count__50171_51133 = G__51189;
i__50172_51134 = G__51190;
continue;
} else {
var map__50198_51191 = cljs.core.first(seq__50169_51185__$1);
var map__50198_51192__$1 = (((((!((map__50198_51191 == null))))?(((((map__50198_51191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50198_51191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50198_51191):map__50198_51191);
var ts_51193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50198_51192__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__50199_51194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50198_51192__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__50199_51195__$1 = (((((!((map__50199_51194 == null))))?(((((map__50199_51194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50199_51194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50199_51194):map__50199_51194);
var then_51196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50199_51195__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__50202_51197 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_51193));
var chunk__50203_51198 = null;
var count__50204_51199 = (0);
var i__50205_51200 = (0);
while(true){
if((i__50205_51200 < count__50204_51199)){
var test_51201 = chunk__50203_51198.cljs$core$IIndexed$_nth$arity$2(null,i__50205_51200);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_51201,":");


var G__51202 = seq__50202_51197;
var G__51203 = chunk__50203_51198;
var G__51204 = count__50204_51199;
var G__51205 = (i__50205_51200 + (1));
seq__50202_51197 = G__51202;
chunk__50203_51198 = G__51203;
count__50204_51199 = G__51204;
i__50205_51200 = G__51205;
continue;
} else {
var temp__5735__auto___51206__$1 = cljs.core.seq(seq__50202_51197);
if(temp__5735__auto___51206__$1){
var seq__50202_51207__$1 = temp__5735__auto___51206__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50202_51207__$1)){
var c__4556__auto___51208 = cljs.core.chunk_first(seq__50202_51207__$1);
var G__51209 = cljs.core.chunk_rest(seq__50202_51207__$1);
var G__51210 = c__4556__auto___51208;
var G__51211 = cljs.core.count(c__4556__auto___51208);
var G__51212 = (0);
seq__50202_51197 = G__51209;
chunk__50203_51198 = G__51210;
count__50204_51199 = G__51211;
i__50205_51200 = G__51212;
continue;
} else {
var test_51213 = cljs.core.first(seq__50202_51207__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_51213,":");


var G__51214 = cljs.core.next(seq__50202_51207__$1);
var G__51215 = null;
var G__51216 = (0);
var G__51217 = (0);
seq__50202_51197 = G__51214;
chunk__50203_51198 = G__51215;
count__50204_51199 = G__51216;
i__50205_51200 = G__51217;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_51196);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_51196);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__51218 = cljs.core.next(seq__50169_51185__$1);
var G__51219 = null;
var G__51220 = (0);
var G__51221 = (0);
seq__50169_51131 = G__51218;
chunk__50170_51132 = G__51219;
count__50171_51133 = G__51220;
i__50172_51134 = G__51221;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__50210){
var map__50211 = p__50210;
var map__50211__$1 = (((((!((map__50211 == null))))?(((((map__50211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50211):map__50211);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50211__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50211__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__50216 = env;
var G__50217 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__50216,G__50217) : cljs.compiler.resolve_type.call(null,G__50216,G__50217));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__50218 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50218,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50218,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__50213_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__50213_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__50213_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__50221 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__50221,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__50221;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__50224 = env;
var G__50225 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__50224,G__50225) : cljs.compiler.resolve_type.call(null,G__50224,G__50225));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50226_SHARP_){
return cljs.compiler.resolve_type(env,p1__50226_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__50227 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__50228 = cljs.core.seq(vec__50227);
var first__50229 = cljs.core.first(seq__50228);
var seq__50228__$1 = cljs.core.next(seq__50228);
var p = first__50229;
var first__50229__$1 = cljs.core.first(seq__50228__$1);
var seq__50228__$2 = cljs.core.next(seq__50228__$1);
var ts = first__50229__$1;
var first__50229__$2 = cljs.core.first(seq__50228__$2);
var seq__50228__$3 = cljs.core.next(seq__50228__$2);
var n = first__50229__$2;
var xs = seq__50228__$3;
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
var vec__50230 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__50231 = cljs.core.seq(vec__50230);
var first__50232 = cljs.core.first(seq__50231);
var seq__50231__$1 = cljs.core.next(seq__50231);
var p = first__50232;
var first__50232__$1 = cljs.core.first(seq__50231__$1);
var seq__50231__$2 = cljs.core.next(seq__50231__$1);
var ts = first__50232__$1;
var xs = seq__50231__$2;
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
var G__50234 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__50233 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__50233.cljs$core$IFn$_invoke$arity$1 ? fexpr__50233.cljs$core$IFn$_invoke$arity$1(G__50234) : fexpr__50233.call(null,G__50234));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__50237 = arguments.length;
switch (G__50237) {
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
var vec__50245 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50235_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__50235_SHARP_);
} else {
return p1__50235_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__50246 = cljs.core.seq(vec__50245);
var first__50247 = cljs.core.first(seq__50246);
var seq__50246__$1 = cljs.core.next(seq__50246);
var x = first__50247;
var ys = seq__50246__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__50248 = cljs.core.seq(ys);
var chunk__50249 = null;
var count__50250 = (0);
var i__50251 = (0);
while(true){
if((i__50251 < count__50250)){
var next_line = chunk__50249.cljs$core$IIndexed$_nth$arity$2(null,i__50251);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__51257 = seq__50248;
var G__51258 = chunk__50249;
var G__51259 = count__50250;
var G__51260 = (i__50251 + (1));
seq__50248 = G__51257;
chunk__50249 = G__51258;
count__50250 = G__51259;
i__50251 = G__51260;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50248);
if(temp__5735__auto__){
var seq__50248__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50248__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50248__$1);
var G__51261 = cljs.core.chunk_rest(seq__50248__$1);
var G__51262 = c__4556__auto__;
var G__51263 = cljs.core.count(c__4556__auto__);
var G__51264 = (0);
seq__50248 = G__51261;
chunk__50249 = G__51262;
count__50250 = G__51263;
i__50251 = G__51264;
continue;
} else {
var next_line = cljs.core.first(seq__50248__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__51265 = cljs.core.next(seq__50248__$1);
var G__51266 = null;
var G__51267 = (0);
var G__51268 = (0);
seq__50248 = G__51265;
chunk__50249 = G__51266;
count__50250 = G__51267;
i__50251 = G__51268;
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

var seq__50252_51269 = cljs.core.seq(docs__$2);
var chunk__50253_51270 = null;
var count__50254_51271 = (0);
var i__50255_51272 = (0);
while(true){
if((i__50255_51272 < count__50254_51271)){
var e_51273 = chunk__50253_51270.cljs$core$IIndexed$_nth$arity$2(null,i__50255_51272);
if(cljs.core.truth_(e_51273)){
print_comment_lines(e_51273);
} else {
}


var G__51274 = seq__50252_51269;
var G__51275 = chunk__50253_51270;
var G__51276 = count__50254_51271;
var G__51277 = (i__50255_51272 + (1));
seq__50252_51269 = G__51274;
chunk__50253_51270 = G__51275;
count__50254_51271 = G__51276;
i__50255_51272 = G__51277;
continue;
} else {
var temp__5735__auto___51278 = cljs.core.seq(seq__50252_51269);
if(temp__5735__auto___51278){
var seq__50252_51279__$1 = temp__5735__auto___51278;
if(cljs.core.chunked_seq_QMARK_(seq__50252_51279__$1)){
var c__4556__auto___51280 = cljs.core.chunk_first(seq__50252_51279__$1);
var G__51281 = cljs.core.chunk_rest(seq__50252_51279__$1);
var G__51282 = c__4556__auto___51280;
var G__51283 = cljs.core.count(c__4556__auto___51280);
var G__51284 = (0);
seq__50252_51269 = G__51281;
chunk__50253_51270 = G__51282;
count__50254_51271 = G__51283;
i__50255_51272 = G__51284;
continue;
} else {
var e_51285 = cljs.core.first(seq__50252_51279__$1);
if(cljs.core.truth_(e_51285)){
print_comment_lines(e_51285);
} else {
}


var G__51286 = cljs.core.next(seq__50252_51279__$1);
var G__51287 = null;
var G__51288 = (0);
var G__51289 = (0);
seq__50252_51269 = G__51286;
chunk__50253_51270 = G__51287;
count__50254_51271 = G__51288;
i__50255_51272 = G__51289;
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
var and__4115__auto__ = cljs.core.some((function (p1__50265_SHARP_){
return goog.string.startsWith(p1__50265_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__50266){
var map__50267 = p__50266;
var map__50267__$1 = (((((!((map__50267 == null))))?(((((map__50267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50267):map__50267);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50267__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50267__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50267__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50267__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50267__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50267__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50267__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50267__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50267__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50267__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__50272){
var map__50273 = p__50272;
var map__50273__$1 = (((((!((map__50273 == null))))?(((((map__50273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50273):map__50273);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50273__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50273__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50273__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__50278_51334 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__50279_51335 = null;
var count__50280_51336 = (0);
var i__50281_51337 = (0);
while(true){
if((i__50281_51337 < count__50280_51336)){
var vec__50295_51341 = chunk__50279_51335.cljs$core$IIndexed$_nth$arity$2(null,i__50281_51337);
var i_51342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50295_51341,(0),null);
var param_51343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50295_51341,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_51343);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__51366 = seq__50278_51334;
var G__51367 = chunk__50279_51335;
var G__51368 = count__50280_51336;
var G__51369 = (i__50281_51337 + (1));
seq__50278_51334 = G__51366;
chunk__50279_51335 = G__51367;
count__50280_51336 = G__51368;
i__50281_51337 = G__51369;
continue;
} else {
var temp__5735__auto___51370 = cljs.core.seq(seq__50278_51334);
if(temp__5735__auto___51370){
var seq__50278_51371__$1 = temp__5735__auto___51370;
if(cljs.core.chunked_seq_QMARK_(seq__50278_51371__$1)){
var c__4556__auto___51372 = cljs.core.chunk_first(seq__50278_51371__$1);
var G__51373 = cljs.core.chunk_rest(seq__50278_51371__$1);
var G__51374 = c__4556__auto___51372;
var G__51375 = cljs.core.count(c__4556__auto___51372);
var G__51376 = (0);
seq__50278_51334 = G__51373;
chunk__50279_51335 = G__51374;
count__50280_51336 = G__51375;
i__50281_51337 = G__51376;
continue;
} else {
var vec__50299_51378 = cljs.core.first(seq__50278_51371__$1);
var i_51379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50299_51378,(0),null);
var param_51380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50299_51378,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_51380);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__51382 = cljs.core.next(seq__50278_51371__$1);
var G__51383 = null;
var G__51384 = (0);
var G__51385 = (0);
seq__50278_51334 = G__51382;
chunk__50279_51335 = G__51383;
count__50280_51336 = G__51384;
i__50281_51337 = G__51385;
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

var seq__50304_51387 = cljs.core.seq(params);
var chunk__50305_51388 = null;
var count__50306_51389 = (0);
var i__50307_51390 = (0);
while(true){
if((i__50307_51390 < count__50306_51389)){
var param_51395 = chunk__50305_51388.cljs$core$IIndexed$_nth$arity$2(null,i__50307_51390);
cljs.compiler.emit(param_51395);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_51395,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__51397 = seq__50304_51387;
var G__51398 = chunk__50305_51388;
var G__51399 = count__50306_51389;
var G__51400 = (i__50307_51390 + (1));
seq__50304_51387 = G__51397;
chunk__50305_51388 = G__51398;
count__50306_51389 = G__51399;
i__50307_51390 = G__51400;
continue;
} else {
var temp__5735__auto___51401 = cljs.core.seq(seq__50304_51387);
if(temp__5735__auto___51401){
var seq__50304_51402__$1 = temp__5735__auto___51401;
if(cljs.core.chunked_seq_QMARK_(seq__50304_51402__$1)){
var c__4556__auto___51403 = cljs.core.chunk_first(seq__50304_51402__$1);
var G__51406 = cljs.core.chunk_rest(seq__50304_51402__$1);
var G__51407 = c__4556__auto___51403;
var G__51408 = cljs.core.count(c__4556__auto___51403);
var G__51409 = (0);
seq__50304_51387 = G__51406;
chunk__50305_51388 = G__51407;
count__50306_51389 = G__51408;
i__50307_51390 = G__51409;
continue;
} else {
var param_51410 = cljs.core.first(seq__50304_51402__$1);
cljs.compiler.emit(param_51410);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_51410,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__51411 = cljs.core.next(seq__50304_51402__$1);
var G__51412 = null;
var G__51413 = (0);
var G__51414 = (0);
seq__50304_51387 = G__51411;
chunk__50305_51388 = G__51412;
count__50306_51389 = G__51413;
i__50307_51390 = G__51414;
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

var seq__50324_51415 = cljs.core.seq(params);
var chunk__50325_51416 = null;
var count__50326_51417 = (0);
var i__50327_51418 = (0);
while(true){
if((i__50327_51418 < count__50326_51417)){
var param_51423 = chunk__50325_51416.cljs$core$IIndexed$_nth$arity$2(null,i__50327_51418);
cljs.compiler.emit(param_51423);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_51423,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__51424 = seq__50324_51415;
var G__51425 = chunk__50325_51416;
var G__51426 = count__50326_51417;
var G__51427 = (i__50327_51418 + (1));
seq__50324_51415 = G__51424;
chunk__50325_51416 = G__51425;
count__50326_51417 = G__51426;
i__50327_51418 = G__51427;
continue;
} else {
var temp__5735__auto___51432 = cljs.core.seq(seq__50324_51415);
if(temp__5735__auto___51432){
var seq__50324_51433__$1 = temp__5735__auto___51432;
if(cljs.core.chunked_seq_QMARK_(seq__50324_51433__$1)){
var c__4556__auto___51434 = cljs.core.chunk_first(seq__50324_51433__$1);
var G__51435 = cljs.core.chunk_rest(seq__50324_51433__$1);
var G__51436 = c__4556__auto___51434;
var G__51437 = cljs.core.count(c__4556__auto___51434);
var G__51438 = (0);
seq__50324_51415 = G__51435;
chunk__50325_51416 = G__51436;
count__50326_51417 = G__51437;
i__50327_51418 = G__51438;
continue;
} else {
var param_51440 = cljs.core.first(seq__50324_51433__$1);
cljs.compiler.emit(param_51440);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_51440,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__51442 = cljs.core.next(seq__50324_51433__$1);
var G__51443 = null;
var G__51444 = (0);
var G__51445 = (0);
seq__50324_51415 = G__51442;
chunk__50325_51416 = G__51443;
count__50326_51417 = G__51444;
i__50327_51418 = G__51445;
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
var seq__50331 = cljs.core.seq(params);
var chunk__50332 = null;
var count__50333 = (0);
var i__50334 = (0);
while(true){
if((i__50334 < count__50333)){
var param = chunk__50332.cljs$core$IIndexed$_nth$arity$2(null,i__50334);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__51446 = seq__50331;
var G__51447 = chunk__50332;
var G__51448 = count__50333;
var G__51449 = (i__50334 + (1));
seq__50331 = G__51446;
chunk__50332 = G__51447;
count__50333 = G__51448;
i__50334 = G__51449;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50331);
if(temp__5735__auto__){
var seq__50331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50331__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50331__$1);
var G__51450 = cljs.core.chunk_rest(seq__50331__$1);
var G__51451 = c__4556__auto__;
var G__51452 = cljs.core.count(c__4556__auto__);
var G__51453 = (0);
seq__50331 = G__51450;
chunk__50332 = G__51451;
count__50333 = G__51452;
i__50334 = G__51453;
continue;
} else {
var param = cljs.core.first(seq__50331__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__51454 = cljs.core.next(seq__50331__$1);
var G__51455 = null;
var G__51456 = (0);
var G__51457 = (0);
seq__50331 = G__51454;
chunk__50332 = G__51455;
count__50333 = G__51456;
i__50334 = G__51457;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__50336){
var map__50337 = p__50336;
var map__50337__$1 = (((((!((map__50337 == null))))?(((((map__50337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50337):map__50337);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50337__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50337__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50337__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50337__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50337__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50337__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
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

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__50339){
var map__50340 = p__50339;
var map__50340__$1 = (((((!((map__50340 == null))))?(((((map__50340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50340):map__50340);
var f = map__50340__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50340__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50340__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50340__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50340__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50340__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50340__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50340__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_51462__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_51463 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_51462__$1);
var delegate_name_51464 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_51463),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_51464," = function (");

var seq__50342_51489 = cljs.core.seq(params);
var chunk__50343_51490 = null;
var count__50344_51491 = (0);
var i__50345_51492 = (0);
while(true){
if((i__50345_51492 < count__50344_51491)){
var param_51493 = chunk__50343_51490.cljs$core$IIndexed$_nth$arity$2(null,i__50345_51492);
cljs.compiler.emit(param_51493);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_51493,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__51494 = seq__50342_51489;
var G__51495 = chunk__50343_51490;
var G__51496 = count__50344_51491;
var G__51497 = (i__50345_51492 + (1));
seq__50342_51489 = G__51494;
chunk__50343_51490 = G__51495;
count__50344_51491 = G__51496;
i__50345_51492 = G__51497;
continue;
} else {
var temp__5735__auto___51498 = cljs.core.seq(seq__50342_51489);
if(temp__5735__auto___51498){
var seq__50342_51499__$1 = temp__5735__auto___51498;
if(cljs.core.chunked_seq_QMARK_(seq__50342_51499__$1)){
var c__4556__auto___51500 = cljs.core.chunk_first(seq__50342_51499__$1);
var G__51501 = cljs.core.chunk_rest(seq__50342_51499__$1);
var G__51502 = c__4556__auto___51500;
var G__51503 = cljs.core.count(c__4556__auto___51500);
var G__51504 = (0);
seq__50342_51489 = G__51501;
chunk__50343_51490 = G__51502;
count__50344_51491 = G__51503;
i__50345_51492 = G__51504;
continue;
} else {
var param_51505 = cljs.core.first(seq__50342_51499__$1);
cljs.compiler.emit(param_51505);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_51505,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__51507 = cljs.core.next(seq__50342_51499__$1);
var G__51508 = null;
var G__51509 = (0);
var G__51510 = (0);
seq__50342_51489 = G__51507;
chunk__50343_51490 = G__51508;
count__50344_51491 = G__51509;
i__50345_51492 = G__51510;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_51463," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_51516 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_51516,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_51464,".call(this,");

var seq__50346_51517 = cljs.core.seq(params);
var chunk__50347_51518 = null;
var count__50348_51519 = (0);
var i__50349_51520 = (0);
while(true){
if((i__50349_51520 < count__50348_51519)){
var param_51522 = chunk__50347_51518.cljs$core$IIndexed$_nth$arity$2(null,i__50349_51520);
cljs.compiler.emit(param_51522);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_51522,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__51524 = seq__50346_51517;
var G__51525 = chunk__50347_51518;
var G__51526 = count__50348_51519;
var G__51527 = (i__50349_51520 + (1));
seq__50346_51517 = G__51524;
chunk__50347_51518 = G__51525;
count__50348_51519 = G__51526;
i__50349_51520 = G__51527;
continue;
} else {
var temp__5735__auto___51528 = cljs.core.seq(seq__50346_51517);
if(temp__5735__auto___51528){
var seq__50346_51529__$1 = temp__5735__auto___51528;
if(cljs.core.chunked_seq_QMARK_(seq__50346_51529__$1)){
var c__4556__auto___51530 = cljs.core.chunk_first(seq__50346_51529__$1);
var G__51533 = cljs.core.chunk_rest(seq__50346_51529__$1);
var G__51534 = c__4556__auto___51530;
var G__51535 = cljs.core.count(c__4556__auto___51530);
var G__51536 = (0);
seq__50346_51517 = G__51533;
chunk__50347_51518 = G__51534;
count__50348_51519 = G__51535;
i__50349_51520 = G__51536;
continue;
} else {
var param_51537 = cljs.core.first(seq__50346_51529__$1);
cljs.compiler.emit(param_51537);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_51537,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__51538 = cljs.core.next(seq__50346_51529__$1);
var G__51539 = null;
var G__51540 = (0);
var G__51541 = (0);
seq__50346_51517 = G__51538;
chunk__50347_51518 = G__51539;
count__50348_51519 = G__51540;
i__50349_51520 = G__51541;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_51463,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_51463,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_51462__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_51463,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_51464,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_51463,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__50356){
var map__50357 = p__50356;
var map__50357__$1 = (((((!((map__50357 == null))))?(((((map__50357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50357):map__50357);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50357__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50357__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50357__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50357__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50357__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50357__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50357__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50357__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50353_SHARP_){
var and__4115__auto__ = p1__50353_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__50353_SHARP_));
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
var name_51546__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_51547 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_51546__$1);
var maxparams_51548 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_51549 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_51547),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_51550 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__50354_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__50354_SHARP_)));
}),cljs.core.seq(mmap_51549));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_51547," = null;");

var seq__50362_51553 = cljs.core.seq(ms_51550);
var chunk__50363_51554 = null;
var count__50364_51555 = (0);
var i__50365_51556 = (0);
while(true){
if((i__50365_51556 < count__50364_51555)){
var vec__50372_51557 = chunk__50363_51554.cljs$core$IIndexed$_nth$arity$2(null,i__50365_51556);
var n_51558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50372_51557,(0),null);
var meth_51559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50372_51557,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_51558," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_51559))){
cljs.compiler.emit_variadic_fn_method(meth_51559);
} else {
cljs.compiler.emit_fn_method(meth_51559);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__51564 = seq__50362_51553;
var G__51565 = chunk__50363_51554;
var G__51566 = count__50364_51555;
var G__51567 = (i__50365_51556 + (1));
seq__50362_51553 = G__51564;
chunk__50363_51554 = G__51565;
count__50364_51555 = G__51566;
i__50365_51556 = G__51567;
continue;
} else {
var temp__5735__auto___51568 = cljs.core.seq(seq__50362_51553);
if(temp__5735__auto___51568){
var seq__50362_51569__$1 = temp__5735__auto___51568;
if(cljs.core.chunked_seq_QMARK_(seq__50362_51569__$1)){
var c__4556__auto___51570 = cljs.core.chunk_first(seq__50362_51569__$1);
var G__51571 = cljs.core.chunk_rest(seq__50362_51569__$1);
var G__51572 = c__4556__auto___51570;
var G__51573 = cljs.core.count(c__4556__auto___51570);
var G__51574 = (0);
seq__50362_51553 = G__51571;
chunk__50363_51554 = G__51572;
count__50364_51555 = G__51573;
i__50365_51556 = G__51574;
continue;
} else {
var vec__50375_51575 = cljs.core.first(seq__50362_51569__$1);
var n_51576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50375_51575,(0),null);
var meth_51577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50375_51575,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_51576," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_51577))){
cljs.compiler.emit_variadic_fn_method(meth_51577);
} else {
cljs.compiler.emit_fn_method(meth_51577);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__51578 = cljs.core.next(seq__50362_51569__$1);
var G__51579 = null;
var G__51580 = (0);
var G__51581 = (0);
seq__50362_51553 = G__51578;
chunk__50363_51554 = G__51579;
count__50364_51555 = G__51580;
i__50365_51556 = G__51581;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_51547," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_51548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_51548)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_51548));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__50378_51582 = cljs.core.seq(ms_51550);
var chunk__50379_51583 = null;
var count__50380_51584 = (0);
var i__50381_51585 = (0);
while(true){
if((i__50381_51585 < count__50380_51584)){
var vec__50392_51586 = chunk__50379_51583.cljs$core$IIndexed$_nth$arity$2(null,i__50381_51585);
var n_51587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50392_51586,(0),null);
var meth_51588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50392_51586,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_51588))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_51590 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_51590," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_51591 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_51590," = new cljs.core.IndexedSeq(",a_51591,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_51587,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_51548)),(((cljs.core.count(maxparams_51548) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_51590,");"], 0));
} else {
var pcnt_51592 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_51588));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_51592,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_51587,".call(this",(((pcnt_51592 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_51592,maxparams_51548)),null,(1),null)),(2),null))),");");
}


var G__51595 = seq__50378_51582;
var G__51596 = chunk__50379_51583;
var G__51597 = count__50380_51584;
var G__51598 = (i__50381_51585 + (1));
seq__50378_51582 = G__51595;
chunk__50379_51583 = G__51596;
count__50380_51584 = G__51597;
i__50381_51585 = G__51598;
continue;
} else {
var temp__5735__auto___51599 = cljs.core.seq(seq__50378_51582);
if(temp__5735__auto___51599){
var seq__50378_51600__$1 = temp__5735__auto___51599;
if(cljs.core.chunked_seq_QMARK_(seq__50378_51600__$1)){
var c__4556__auto___51601 = cljs.core.chunk_first(seq__50378_51600__$1);
var G__51602 = cljs.core.chunk_rest(seq__50378_51600__$1);
var G__51603 = c__4556__auto___51601;
var G__51604 = cljs.core.count(c__4556__auto___51601);
var G__51605 = (0);
seq__50378_51582 = G__51602;
chunk__50379_51583 = G__51603;
count__50380_51584 = G__51604;
i__50381_51585 = G__51605;
continue;
} else {
var vec__50395_51606 = cljs.core.first(seq__50378_51600__$1);
var n_51607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50395_51606,(0),null);
var meth_51608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50395_51606,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_51608))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_51609 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_51609," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_51610 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_51609," = new cljs.core.IndexedSeq(",a_51610,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_51607,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_51548)),(((cljs.core.count(maxparams_51548) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_51609,");"], 0));
} else {
var pcnt_51611 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_51608));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_51611,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_51607,".call(this",(((pcnt_51611 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_51611,maxparams_51548)),null,(1),null)),(2),null))),");");
}


var G__51612 = cljs.core.next(seq__50378_51600__$1);
var G__51613 = null;
var G__51614 = (0);
var G__51615 = (0);
seq__50378_51582 = G__51612;
chunk__50379_51583 = G__51613;
count__50380_51584 = G__51614;
i__50381_51585 = G__51615;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_51616 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_51550)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_51616,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_51547,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_51547,".cljs$lang$applyTo = ",cljs.core.some((function (p1__50355_SHARP_){
var vec__50398 = p1__50355_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50398,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50398,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_51550),".cljs$lang$applyTo;");
} else {
}

var seq__50401_51617 = cljs.core.seq(ms_51550);
var chunk__50402_51618 = null;
var count__50403_51619 = (0);
var i__50404_51620 = (0);
while(true){
if((i__50404_51620 < count__50403_51619)){
var vec__50411_51621 = chunk__50402_51618.cljs$core$IIndexed$_nth$arity$2(null,i__50404_51620);
var n_51622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50411_51621,(0),null);
var meth_51623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50411_51621,(1),null);
var c_51624 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_51623));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_51623))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_51547,".cljs$core$IFn$_invoke$arity$variadic = ",n_51622,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_51547,".cljs$core$IFn$_invoke$arity$",c_51624," = ",n_51622,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__51625 = seq__50401_51617;
var G__51626 = chunk__50402_51618;
var G__51627 = count__50403_51619;
var G__51628 = (i__50404_51620 + (1));
seq__50401_51617 = G__51625;
chunk__50402_51618 = G__51626;
count__50403_51619 = G__51627;
i__50404_51620 = G__51628;
continue;
} else {
var temp__5735__auto___51629 = cljs.core.seq(seq__50401_51617);
if(temp__5735__auto___51629){
var seq__50401_51631__$1 = temp__5735__auto___51629;
if(cljs.core.chunked_seq_QMARK_(seq__50401_51631__$1)){
var c__4556__auto___51633 = cljs.core.chunk_first(seq__50401_51631__$1);
var G__51634 = cljs.core.chunk_rest(seq__50401_51631__$1);
var G__51635 = c__4556__auto___51633;
var G__51636 = cljs.core.count(c__4556__auto___51633);
var G__51637 = (0);
seq__50401_51617 = G__51634;
chunk__50402_51618 = G__51635;
count__50403_51619 = G__51636;
i__50404_51620 = G__51637;
continue;
} else {
var vec__50414_51638 = cljs.core.first(seq__50401_51631__$1);
var n_51639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50414_51638,(0),null);
var meth_51640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50414_51638,(1),null);
var c_51641 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_51640));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_51640))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_51547,".cljs$core$IFn$_invoke$arity$variadic = ",n_51639,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_51547,".cljs$core$IFn$_invoke$arity$",c_51641," = ",n_51639,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__51645 = cljs.core.next(seq__50401_51631__$1);
var G__51646 = null;
var G__51647 = (0);
var G__51648 = (0);
seq__50401_51617 = G__51645;
chunk__50402_51618 = G__51646;
count__50403_51619 = G__51647;
i__50404_51620 = G__51648;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_51547,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__50417){
var map__50419 = p__50417;
var map__50419__$1 = (((((!((map__50419 == null))))?(((((map__50419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50419):map__50419);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50419__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50419__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50419__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__50421_51649 = cljs.core.seq(statements);
var chunk__50422_51650 = null;
var count__50423_51651 = (0);
var i__50424_51652 = (0);
while(true){
if((i__50424_51652 < count__50423_51651)){
var s_51653 = chunk__50422_51650.cljs$core$IIndexed$_nth$arity$2(null,i__50424_51652);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_51653);


var G__51654 = seq__50421_51649;
var G__51655 = chunk__50422_51650;
var G__51656 = count__50423_51651;
var G__51657 = (i__50424_51652 + (1));
seq__50421_51649 = G__51654;
chunk__50422_51650 = G__51655;
count__50423_51651 = G__51656;
i__50424_51652 = G__51657;
continue;
} else {
var temp__5735__auto___51658 = cljs.core.seq(seq__50421_51649);
if(temp__5735__auto___51658){
var seq__50421_51659__$1 = temp__5735__auto___51658;
if(cljs.core.chunked_seq_QMARK_(seq__50421_51659__$1)){
var c__4556__auto___51660 = cljs.core.chunk_first(seq__50421_51659__$1);
var G__51661 = cljs.core.chunk_rest(seq__50421_51659__$1);
var G__51662 = c__4556__auto___51660;
var G__51663 = cljs.core.count(c__4556__auto___51660);
var G__51664 = (0);
seq__50421_51649 = G__51661;
chunk__50422_51650 = G__51662;
count__50423_51651 = G__51663;
i__50424_51652 = G__51664;
continue;
} else {
var s_51665 = cljs.core.first(seq__50421_51659__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_51665);


var G__51666 = cljs.core.next(seq__50421_51659__$1);
var G__51667 = null;
var G__51668 = (0);
var G__51669 = (0);
seq__50421_51649 = G__51666;
chunk__50422_51650 = G__51667;
count__50423_51651 = G__51668;
i__50424_51652 = G__51669;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__50425){
var map__50426 = p__50425;
var map__50426__$1 = (((((!((map__50426 == null))))?(((((map__50426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50426):map__50426);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50426__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50426__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50426__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50426__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50426__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__50432,is_loop){
var map__50433 = p__50432;
var map__50433__$1 = (((((!((map__50433 == null))))?(((((map__50433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50433):map__50433);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50433__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50433__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50433__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__50435_51673 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__50436_51674 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__50436_51674);

try{var seq__50437_51676 = cljs.core.seq(bindings);
var chunk__50438_51677 = null;
var count__50439_51678 = (0);
var i__50440_51679 = (0);
while(true){
if((i__50440_51679 < count__50439_51678)){
var map__50451_51680 = chunk__50438_51677.cljs$core$IIndexed$_nth$arity$2(null,i__50440_51679);
var map__50451_51681__$1 = (((((!((map__50451_51680 == null))))?(((((map__50451_51680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50451_51680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50451_51680):map__50451_51680);
var binding_51682 = map__50451_51681__$1;
var init_51683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50451_51681__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_51682);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_51683,";");


var G__51684 = seq__50437_51676;
var G__51685 = chunk__50438_51677;
var G__51686 = count__50439_51678;
var G__51687 = (i__50440_51679 + (1));
seq__50437_51676 = G__51684;
chunk__50438_51677 = G__51685;
count__50439_51678 = G__51686;
i__50440_51679 = G__51687;
continue;
} else {
var temp__5735__auto___51688 = cljs.core.seq(seq__50437_51676);
if(temp__5735__auto___51688){
var seq__50437_51689__$1 = temp__5735__auto___51688;
if(cljs.core.chunked_seq_QMARK_(seq__50437_51689__$1)){
var c__4556__auto___51690 = cljs.core.chunk_first(seq__50437_51689__$1);
var G__51691 = cljs.core.chunk_rest(seq__50437_51689__$1);
var G__51692 = c__4556__auto___51690;
var G__51693 = cljs.core.count(c__4556__auto___51690);
var G__51694 = (0);
seq__50437_51676 = G__51691;
chunk__50438_51677 = G__51692;
count__50439_51678 = G__51693;
i__50440_51679 = G__51694;
continue;
} else {
var map__50462_51695 = cljs.core.first(seq__50437_51689__$1);
var map__50462_51696__$1 = (((((!((map__50462_51695 == null))))?(((((map__50462_51695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50462_51695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50462_51695):map__50462_51695);
var binding_51697 = map__50462_51696__$1;
var init_51698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50462_51696__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_51697);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_51698,";");


var G__51699 = cljs.core.next(seq__50437_51689__$1);
var G__51700 = null;
var G__51701 = (0);
var G__51702 = (0);
seq__50437_51676 = G__51699;
chunk__50438_51677 = G__51700;
count__50439_51678 = G__51701;
i__50440_51679 = G__51702;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__50435_51673);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__50464){
var map__50465 = p__50464;
var map__50465__$1 = (((((!((map__50465 == null))))?(((((map__50465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50465):map__50465);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50465__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50465__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50465__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___51703 = cljs.core.count(exprs);
var i_51704 = (0);
while(true){
if((i_51704 < n__4613__auto___51703)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_51704) : temps.call(null,i_51704))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_51704) : exprs.call(null,i_51704)),";");

var G__51705 = (i_51704 + (1));
i_51704 = G__51705;
continue;
} else {
}
break;
}

var n__4613__auto___51706 = cljs.core.count(exprs);
var i_51707 = (0);
while(true){
if((i_51707 < n__4613__auto___51706)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_51707) : params.call(null,i_51707)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_51707) : temps.call(null,i_51707)),";");

var G__51708 = (i_51707 + (1));
i_51707 = G__51708;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__50467){
var map__50468 = p__50467;
var map__50468__$1 = (((((!((map__50468 == null))))?(((((map__50468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50468):map__50468);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50468__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50468__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50468__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__50474_51709 = cljs.core.seq(bindings);
var chunk__50475_51710 = null;
var count__50476_51711 = (0);
var i__50477_51712 = (0);
while(true){
if((i__50477_51712 < count__50476_51711)){
var map__50498_51713 = chunk__50475_51710.cljs$core$IIndexed$_nth$arity$2(null,i__50477_51712);
var map__50498_51714__$1 = (((((!((map__50498_51713 == null))))?(((((map__50498_51713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50498_51713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50498_51713):map__50498_51713);
var binding_51715 = map__50498_51714__$1;
var init_51716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50498_51714__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_51715)," = ",init_51716,";");


var G__51717 = seq__50474_51709;
var G__51718 = chunk__50475_51710;
var G__51719 = count__50476_51711;
var G__51720 = (i__50477_51712 + (1));
seq__50474_51709 = G__51717;
chunk__50475_51710 = G__51718;
count__50476_51711 = G__51719;
i__50477_51712 = G__51720;
continue;
} else {
var temp__5735__auto___51721 = cljs.core.seq(seq__50474_51709);
if(temp__5735__auto___51721){
var seq__50474_51722__$1 = temp__5735__auto___51721;
if(cljs.core.chunked_seq_QMARK_(seq__50474_51722__$1)){
var c__4556__auto___51723 = cljs.core.chunk_first(seq__50474_51722__$1);
var G__51724 = cljs.core.chunk_rest(seq__50474_51722__$1);
var G__51725 = c__4556__auto___51723;
var G__51726 = cljs.core.count(c__4556__auto___51723);
var G__51727 = (0);
seq__50474_51709 = G__51724;
chunk__50475_51710 = G__51725;
count__50476_51711 = G__51726;
i__50477_51712 = G__51727;
continue;
} else {
var map__50511_51728 = cljs.core.first(seq__50474_51722__$1);
var map__50511_51729__$1 = (((((!((map__50511_51728 == null))))?(((((map__50511_51728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50511_51728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50511_51728):map__50511_51728);
var binding_51730 = map__50511_51729__$1;
var init_51731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50511_51729__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_51730)," = ",init_51731,";");


var G__51733 = cljs.core.next(seq__50474_51722__$1);
var G__51734 = null;
var G__51735 = (0);
var G__51736 = (0);
seq__50474_51709 = G__51733;
chunk__50475_51710 = G__51734;
count__50476_51711 = G__51735;
i__50477_51712 = G__51736;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__50522){
var map__50523 = p__50522;
var map__50523__$1 = (((((!((map__50523 == null))))?(((((map__50523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50523):map__50523);
var expr = map__50523__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50523__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50523__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50523__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__50535 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__50535.cljs$core$IFn$_invoke$arity$1 ? fexpr__50535.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__50535.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__50537 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__50537.cljs$core$IFn$_invoke$arity$1 ? fexpr__50537.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__50537.call(null,first_arg_tag));
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
var vec__50525 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__50520_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50520_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__50521_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50521_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50525,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50525,(1),null);
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
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
var pimpl_51738 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_51738,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_51739 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_51739,args)),(((mfa_51739 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_51739,args)),"], 0))"], 0));
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
var G__50570 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__50569 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__50569.cljs$core$IFn$_invoke$arity$1 ? fexpr__50569.cljs$core$IFn$_invoke$arity$1(G__50570) : fexpr__50569.call(null,G__50570));
} else {
return and__4115__auto__;
}
})())){
var fprop_51740 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_51740," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_51740,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_51740," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_51740,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__50596){
var map__50597 = p__50596;
var map__50597__$1 = (((((!((map__50597 == null))))?(((((map__50597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50597):map__50597);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50597__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50597__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50597__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__50599){
var map__50600 = p__50599;
var map__50600__$1 = (((((!((map__50600 == null))))?(((((map__50600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50600):map__50600);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50600__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50600__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50600__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
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
var map__50604 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__50604__$1 = (((((!((map__50604 == null))))?(((((map__50604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50604):map__50604);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50604__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50604__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__50605 = options;
var map__50605__$1 = (((((!((map__50605 == null))))?(((((map__50605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50605):map__50605);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50605__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50605__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50605__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__50606 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__50611 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__50611__$1 = (((((!((map__50611 == null))))?(((((map__50611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50611):map__50611);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50611__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50611__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50606,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50606,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__50613_51742 = cljs.core.seq(libs_to_load);
var chunk__50614_51743 = null;
var count__50615_51744 = (0);
var i__50616_51745 = (0);
while(true){
if((i__50616_51745 < count__50615_51744)){
var lib_51746 = chunk__50614_51743.cljs$core$IIndexed$_nth$arity$2(null,i__50616_51745);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_51746)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_51746),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_51746),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_51746),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_51746),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_51746,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_51746),"');");
}

}
}
}


var G__51747 = seq__50613_51742;
var G__51748 = chunk__50614_51743;
var G__51749 = count__50615_51744;
var G__51750 = (i__50616_51745 + (1));
seq__50613_51742 = G__51747;
chunk__50614_51743 = G__51748;
count__50615_51744 = G__51749;
i__50616_51745 = G__51750;
continue;
} else {
var temp__5735__auto___51751 = cljs.core.seq(seq__50613_51742);
if(temp__5735__auto___51751){
var seq__50613_51752__$1 = temp__5735__auto___51751;
if(cljs.core.chunked_seq_QMARK_(seq__50613_51752__$1)){
var c__4556__auto___51753 = cljs.core.chunk_first(seq__50613_51752__$1);
var G__51754 = cljs.core.chunk_rest(seq__50613_51752__$1);
var G__51755 = c__4556__auto___51753;
var G__51756 = cljs.core.count(c__4556__auto___51753);
var G__51757 = (0);
seq__50613_51742 = G__51754;
chunk__50614_51743 = G__51755;
count__50615_51744 = G__51756;
i__50616_51745 = G__51757;
continue;
} else {
var lib_51758 = cljs.core.first(seq__50613_51752__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_51758)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_51758),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_51758),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_51758),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_51758),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_51758,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_51758),"');");
}

}
}
}


var G__51759 = cljs.core.next(seq__50613_51752__$1);
var G__51760 = null;
var G__51761 = (0);
var G__51762 = (0);
seq__50613_51742 = G__51759;
chunk__50614_51743 = G__51760;
count__50615_51744 = G__51761;
i__50616_51745 = G__51762;
continue;
}
} else {
}
}
break;
}

var seq__50629_51763 = cljs.core.seq(node_libs);
var chunk__50630_51764 = null;
var count__50631_51765 = (0);
var i__50632_51766 = (0);
while(true){
if((i__50632_51766 < count__50631_51765)){
var lib_51767 = chunk__50630_51764.cljs$core$IIndexed$_nth$arity$2(null,i__50632_51766);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_51767)," = require('",lib_51767,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__51768 = seq__50629_51763;
var G__51769 = chunk__50630_51764;
var G__51770 = count__50631_51765;
var G__51771 = (i__50632_51766 + (1));
seq__50629_51763 = G__51768;
chunk__50630_51764 = G__51769;
count__50631_51765 = G__51770;
i__50632_51766 = G__51771;
continue;
} else {
var temp__5735__auto___51772 = cljs.core.seq(seq__50629_51763);
if(temp__5735__auto___51772){
var seq__50629_51773__$1 = temp__5735__auto___51772;
if(cljs.core.chunked_seq_QMARK_(seq__50629_51773__$1)){
var c__4556__auto___51774 = cljs.core.chunk_first(seq__50629_51773__$1);
var G__51775 = cljs.core.chunk_rest(seq__50629_51773__$1);
var G__51776 = c__4556__auto___51774;
var G__51777 = cljs.core.count(c__4556__auto___51774);
var G__51778 = (0);
seq__50629_51763 = G__51775;
chunk__50630_51764 = G__51776;
count__50631_51765 = G__51777;
i__50632_51766 = G__51778;
continue;
} else {
var lib_51779 = cljs.core.first(seq__50629_51773__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_51779)," = require('",lib_51779,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__51780 = cljs.core.next(seq__50629_51773__$1);
var G__51781 = null;
var G__51782 = (0);
var G__51783 = (0);
seq__50629_51763 = G__51780;
chunk__50630_51764 = G__51781;
count__50631_51765 = G__51782;
i__50632_51766 = G__51783;
continue;
}
} else {
}
}
break;
}

var seq__50635_51784 = cljs.core.seq(global_exports_libs);
var chunk__50636_51785 = null;
var count__50637_51786 = (0);
var i__50638_51787 = (0);
while(true){
if((i__50638_51787 < count__50637_51786)){
var lib_51788 = chunk__50636_51785.cljs$core$IIndexed$_nth$arity$2(null,i__50638_51787);
var map__50643_51790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_51788));
var map__50643_51791__$1 = (((((!((map__50643_51790 == null))))?(((((map__50643_51790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50643_51790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50643_51790):map__50643_51790);
var global_exports_51792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50643_51791__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_51792,lib_51788);


var G__51793 = seq__50635_51784;
var G__51794 = chunk__50636_51785;
var G__51795 = count__50637_51786;
var G__51796 = (i__50638_51787 + (1));
seq__50635_51784 = G__51793;
chunk__50636_51785 = G__51794;
count__50637_51786 = G__51795;
i__50638_51787 = G__51796;
continue;
} else {
var temp__5735__auto___51797 = cljs.core.seq(seq__50635_51784);
if(temp__5735__auto___51797){
var seq__50635_51798__$1 = temp__5735__auto___51797;
if(cljs.core.chunked_seq_QMARK_(seq__50635_51798__$1)){
var c__4556__auto___51799 = cljs.core.chunk_first(seq__50635_51798__$1);
var G__51800 = cljs.core.chunk_rest(seq__50635_51798__$1);
var G__51801 = c__4556__auto___51799;
var G__51802 = cljs.core.count(c__4556__auto___51799);
var G__51803 = (0);
seq__50635_51784 = G__51800;
chunk__50636_51785 = G__51801;
count__50637_51786 = G__51802;
i__50638_51787 = G__51803;
continue;
} else {
var lib_51804 = cljs.core.first(seq__50635_51798__$1);
var map__50645_51805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_51804));
var map__50645_51806__$1 = (((((!((map__50645_51805 == null))))?(((((map__50645_51805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50645_51805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50645_51805):map__50645_51805);
var global_exports_51807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645_51806__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_51807,lib_51804);


var G__51808 = cljs.core.next(seq__50635_51798__$1);
var G__51809 = null;
var G__51810 = (0);
var G__51811 = (0);
seq__50635_51784 = G__51808;
chunk__50636_51785 = G__51809;
count__50637_51786 = G__51810;
i__50638_51787 = G__51811;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__50649){
var map__50650 = p__50649;
var map__50650__$1 = (((((!((map__50650 == null))))?(((((map__50650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50650):map__50650);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50650__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50650__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50650__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50650__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50650__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50650__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50650__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__50652){
var map__50653 = p__50652;
var map__50653__$1 = (((((!((map__50653 == null))))?(((((map__50653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50653):map__50653);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50653__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50653__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50653__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50653__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50653__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50653__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50653__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__50655){
var map__50656 = p__50655;
var map__50656__$1 = (((((!((map__50656 == null))))?(((((map__50656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50656):map__50656);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50656__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50656__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50656__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50656__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50656__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__50658_51812 = cljs.core.seq(protocols);
var chunk__50659_51813 = null;
var count__50660_51814 = (0);
var i__50661_51815 = (0);
while(true){
if((i__50661_51815 < count__50660_51814)){
var protocol_51816 = chunk__50659_51813.cljs$core$IIndexed$_nth$arity$2(null,i__50661_51815);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_51816)),"}");


var G__51817 = seq__50658_51812;
var G__51818 = chunk__50659_51813;
var G__51819 = count__50660_51814;
var G__51820 = (i__50661_51815 + (1));
seq__50658_51812 = G__51817;
chunk__50659_51813 = G__51818;
count__50660_51814 = G__51819;
i__50661_51815 = G__51820;
continue;
} else {
var temp__5735__auto___51821 = cljs.core.seq(seq__50658_51812);
if(temp__5735__auto___51821){
var seq__50658_51822__$1 = temp__5735__auto___51821;
if(cljs.core.chunked_seq_QMARK_(seq__50658_51822__$1)){
var c__4556__auto___51823 = cljs.core.chunk_first(seq__50658_51822__$1);
var G__51824 = cljs.core.chunk_rest(seq__50658_51822__$1);
var G__51825 = c__4556__auto___51823;
var G__51826 = cljs.core.count(c__4556__auto___51823);
var G__51827 = (0);
seq__50658_51812 = G__51824;
chunk__50659_51813 = G__51825;
count__50660_51814 = G__51826;
i__50661_51815 = G__51827;
continue;
} else {
var protocol_51828 = cljs.core.first(seq__50658_51822__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_51828)),"}");


var G__51829 = cljs.core.next(seq__50658_51822__$1);
var G__51830 = null;
var G__51831 = (0);
var G__51832 = (0);
seq__50658_51812 = G__51829;
chunk__50659_51813 = G__51830;
count__50660_51814 = G__51831;
i__50661_51815 = G__51832;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__50684_51833 = cljs.core.seq(fields__$1);
var chunk__50685_51834 = null;
var count__50686_51835 = (0);
var i__50687_51836 = (0);
while(true){
if((i__50687_51836 < count__50686_51835)){
var fld_51837 = chunk__50685_51834.cljs$core$IIndexed$_nth$arity$2(null,i__50687_51836);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_51837," = ",fld_51837,";");


var G__51838 = seq__50684_51833;
var G__51839 = chunk__50685_51834;
var G__51840 = count__50686_51835;
var G__51841 = (i__50687_51836 + (1));
seq__50684_51833 = G__51838;
chunk__50685_51834 = G__51839;
count__50686_51835 = G__51840;
i__50687_51836 = G__51841;
continue;
} else {
var temp__5735__auto___51842 = cljs.core.seq(seq__50684_51833);
if(temp__5735__auto___51842){
var seq__50684_51843__$1 = temp__5735__auto___51842;
if(cljs.core.chunked_seq_QMARK_(seq__50684_51843__$1)){
var c__4556__auto___51844 = cljs.core.chunk_first(seq__50684_51843__$1);
var G__51845 = cljs.core.chunk_rest(seq__50684_51843__$1);
var G__51846 = c__4556__auto___51844;
var G__51847 = cljs.core.count(c__4556__auto___51844);
var G__51848 = (0);
seq__50684_51833 = G__51845;
chunk__50685_51834 = G__51846;
count__50686_51835 = G__51847;
i__50687_51836 = G__51848;
continue;
} else {
var fld_51849 = cljs.core.first(seq__50684_51843__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_51849," = ",fld_51849,";");


var G__51850 = cljs.core.next(seq__50684_51843__$1);
var G__51851 = null;
var G__51852 = (0);
var G__51853 = (0);
seq__50684_51833 = G__51850;
chunk__50685_51834 = G__51851;
count__50686_51835 = G__51852;
i__50687_51836 = G__51853;
continue;
}
} else {
}
}
break;
}

var seq__50688_51854 = cljs.core.seq(pmasks);
var chunk__50689_51855 = null;
var count__50690_51856 = (0);
var i__50691_51857 = (0);
while(true){
if((i__50691_51857 < count__50690_51856)){
var vec__50700_51858 = chunk__50689_51855.cljs$core$IIndexed$_nth$arity$2(null,i__50691_51857);
var pno_51859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50700_51858,(0),null);
var pmask_51860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50700_51858,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_51859,"$ = ",pmask_51860,";");


var G__51861 = seq__50688_51854;
var G__51862 = chunk__50689_51855;
var G__51863 = count__50690_51856;
var G__51864 = (i__50691_51857 + (1));
seq__50688_51854 = G__51861;
chunk__50689_51855 = G__51862;
count__50690_51856 = G__51863;
i__50691_51857 = G__51864;
continue;
} else {
var temp__5735__auto___51865 = cljs.core.seq(seq__50688_51854);
if(temp__5735__auto___51865){
var seq__50688_51866__$1 = temp__5735__auto___51865;
if(cljs.core.chunked_seq_QMARK_(seq__50688_51866__$1)){
var c__4556__auto___51867 = cljs.core.chunk_first(seq__50688_51866__$1);
var G__51868 = cljs.core.chunk_rest(seq__50688_51866__$1);
var G__51869 = c__4556__auto___51867;
var G__51870 = cljs.core.count(c__4556__auto___51867);
var G__51871 = (0);
seq__50688_51854 = G__51868;
chunk__50689_51855 = G__51869;
count__50690_51856 = G__51870;
i__50691_51857 = G__51871;
continue;
} else {
var vec__50703_51872 = cljs.core.first(seq__50688_51866__$1);
var pno_51873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50703_51872,(0),null);
var pmask_51874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50703_51872,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_51873,"$ = ",pmask_51874,";");


var G__51875 = cljs.core.next(seq__50688_51866__$1);
var G__51876 = null;
var G__51877 = (0);
var G__51878 = (0);
seq__50688_51854 = G__51875;
chunk__50689_51855 = G__51876;
count__50690_51856 = G__51877;
i__50691_51857 = G__51878;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__50706){
var map__50707 = p__50706;
var map__50707__$1 = (((((!((map__50707 == null))))?(((((map__50707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50707):map__50707);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50707__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50707__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50707__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50707__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50707__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__50709_51879 = cljs.core.seq(protocols);
var chunk__50710_51880 = null;
var count__50711_51881 = (0);
var i__50712_51882 = (0);
while(true){
if((i__50712_51882 < count__50711_51881)){
var protocol_51883 = chunk__50710_51880.cljs$core$IIndexed$_nth$arity$2(null,i__50712_51882);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_51883)),"}");


var G__51884 = seq__50709_51879;
var G__51885 = chunk__50710_51880;
var G__51886 = count__50711_51881;
var G__51887 = (i__50712_51882 + (1));
seq__50709_51879 = G__51884;
chunk__50710_51880 = G__51885;
count__50711_51881 = G__51886;
i__50712_51882 = G__51887;
continue;
} else {
var temp__5735__auto___51888 = cljs.core.seq(seq__50709_51879);
if(temp__5735__auto___51888){
var seq__50709_51889__$1 = temp__5735__auto___51888;
if(cljs.core.chunked_seq_QMARK_(seq__50709_51889__$1)){
var c__4556__auto___51890 = cljs.core.chunk_first(seq__50709_51889__$1);
var G__51891 = cljs.core.chunk_rest(seq__50709_51889__$1);
var G__51892 = c__4556__auto___51890;
var G__51893 = cljs.core.count(c__4556__auto___51890);
var G__51894 = (0);
seq__50709_51879 = G__51891;
chunk__50710_51880 = G__51892;
count__50711_51881 = G__51893;
i__50712_51882 = G__51894;
continue;
} else {
var protocol_51895 = cljs.core.first(seq__50709_51889__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_51895)),"}");


var G__51896 = cljs.core.next(seq__50709_51889__$1);
var G__51897 = null;
var G__51898 = (0);
var G__51899 = (0);
seq__50709_51879 = G__51896;
chunk__50710_51880 = G__51897;
count__50711_51881 = G__51898;
i__50712_51882 = G__51899;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__50713_51900 = cljs.core.seq(fields__$1);
var chunk__50714_51901 = null;
var count__50715_51902 = (0);
var i__50716_51903 = (0);
while(true){
if((i__50716_51903 < count__50715_51902)){
var fld_51904 = chunk__50714_51901.cljs$core$IIndexed$_nth$arity$2(null,i__50716_51903);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_51904," = ",fld_51904,";");


var G__51905 = seq__50713_51900;
var G__51906 = chunk__50714_51901;
var G__51907 = count__50715_51902;
var G__51908 = (i__50716_51903 + (1));
seq__50713_51900 = G__51905;
chunk__50714_51901 = G__51906;
count__50715_51902 = G__51907;
i__50716_51903 = G__51908;
continue;
} else {
var temp__5735__auto___51909 = cljs.core.seq(seq__50713_51900);
if(temp__5735__auto___51909){
var seq__50713_51910__$1 = temp__5735__auto___51909;
if(cljs.core.chunked_seq_QMARK_(seq__50713_51910__$1)){
var c__4556__auto___51911 = cljs.core.chunk_first(seq__50713_51910__$1);
var G__51912 = cljs.core.chunk_rest(seq__50713_51910__$1);
var G__51913 = c__4556__auto___51911;
var G__51914 = cljs.core.count(c__4556__auto___51911);
var G__51915 = (0);
seq__50713_51900 = G__51912;
chunk__50714_51901 = G__51913;
count__50715_51902 = G__51914;
i__50716_51903 = G__51915;
continue;
} else {
var fld_51916 = cljs.core.first(seq__50713_51910__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_51916," = ",fld_51916,";");


var G__51917 = cljs.core.next(seq__50713_51910__$1);
var G__51918 = null;
var G__51919 = (0);
var G__51920 = (0);
seq__50713_51900 = G__51917;
chunk__50714_51901 = G__51918;
count__50715_51902 = G__51919;
i__50716_51903 = G__51920;
continue;
}
} else {
}
}
break;
}

var seq__50717_51921 = cljs.core.seq(pmasks);
var chunk__50718_51922 = null;
var count__50719_51923 = (0);
var i__50720_51924 = (0);
while(true){
if((i__50720_51924 < count__50719_51923)){
var vec__50727_51925 = chunk__50718_51922.cljs$core$IIndexed$_nth$arity$2(null,i__50720_51924);
var pno_51926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50727_51925,(0),null);
var pmask_51927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50727_51925,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_51926,"$ = ",pmask_51927,";");


var G__51929 = seq__50717_51921;
var G__51930 = chunk__50718_51922;
var G__51931 = count__50719_51923;
var G__51932 = (i__50720_51924 + (1));
seq__50717_51921 = G__51929;
chunk__50718_51922 = G__51930;
count__50719_51923 = G__51931;
i__50720_51924 = G__51932;
continue;
} else {
var temp__5735__auto___51933 = cljs.core.seq(seq__50717_51921);
if(temp__5735__auto___51933){
var seq__50717_51934__$1 = temp__5735__auto___51933;
if(cljs.core.chunked_seq_QMARK_(seq__50717_51934__$1)){
var c__4556__auto___51935 = cljs.core.chunk_first(seq__50717_51934__$1);
var G__51936 = cljs.core.chunk_rest(seq__50717_51934__$1);
var G__51937 = c__4556__auto___51935;
var G__51938 = cljs.core.count(c__4556__auto___51935);
var G__51939 = (0);
seq__50717_51921 = G__51936;
chunk__50718_51922 = G__51937;
count__50719_51923 = G__51938;
i__50720_51924 = G__51939;
continue;
} else {
var vec__50730_51940 = cljs.core.first(seq__50717_51934__$1);
var pno_51941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50730_51940,(0),null);
var pmask_51942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50730_51940,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_51941,"$ = ",pmask_51942,";");


var G__51943 = cljs.core.next(seq__50717_51934__$1);
var G__51944 = null;
var G__51945 = (0);
var G__51946 = (0);
seq__50717_51921 = G__51943;
chunk__50718_51922 = G__51944;
count__50719_51923 = G__51945;
i__50720_51924 = G__51946;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__50733){
var map__50734 = p__50733;
var map__50734__$1 = (((((!((map__50734 == null))))?(((((map__50734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50734):map__50734);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50734__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50734__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50734__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50734__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50734__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__50736){
var map__50737 = p__50736;
var map__50737__$1 = (((((!((map__50737 == null))))?(((((map__50737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50737):map__50737);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50737__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50737__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50737__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50737__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50737__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__25551__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25551__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__50743 = cljs.core.seq(table);
var chunk__50744 = null;
var count__50745 = (0);
var i__50746 = (0);
while(true){
if((i__50746 < count__50745)){
var vec__50753 = chunk__50744.cljs$core$IIndexed$_nth$arity$2(null,i__50746);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50753,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50753,(1),null);
var ns_51948 = cljs.core.namespace(sym);
var name_51949 = cljs.core.name(sym);
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


var G__51950 = seq__50743;
var G__51951 = chunk__50744;
var G__51952 = count__50745;
var G__51953 = (i__50746 + (1));
seq__50743 = G__51950;
chunk__50744 = G__51951;
count__50745 = G__51952;
i__50746 = G__51953;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50743);
if(temp__5735__auto__){
var seq__50743__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50743__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50743__$1);
var G__51954 = cljs.core.chunk_rest(seq__50743__$1);
var G__51955 = c__4556__auto__;
var G__51956 = cljs.core.count(c__4556__auto__);
var G__51957 = (0);
seq__50743 = G__51954;
chunk__50744 = G__51955;
count__50745 = G__51956;
i__50746 = G__51957;
continue;
} else {
var vec__50756 = cljs.core.first(seq__50743__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50756,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50756,(1),null);
var ns_51962 = cljs.core.namespace(sym);
var name_51963 = cljs.core.name(sym);
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


var G__51964 = cljs.core.next(seq__50743__$1);
var G__51965 = null;
var G__51966 = (0);
var G__51967 = (0);
seq__50743 = G__51964;
chunk__50744 = G__51965;
count__50745 = G__51966;
i__50746 = G__51967;
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
var G__50763 = arguments.length;
switch (G__50763) {
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
var k_51969 = cljs.core.first(ks);
var vec__50765_51970 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_51969);
var top_51971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50765_51970,(0),null);
var prefix_SINGLEQUOTE__51972 = vec__50765_51970;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_51969)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__51972) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_51971)) || (cljs.core.contains_QMARK_(known_externs,top_51971)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__51972)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_51971);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__51972)),";");
}
} else {
}

var m_51973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_51969);
if(cljs.core.empty_QMARK_(m_51973)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__51972,m_51973,top_level,known_externs);
}

var G__51974 = cljs.core.next(ks);
ks = G__51974;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


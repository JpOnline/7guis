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
var map__31870 = s;
var map__31870__$1 = (((((!((map__31870 == null))))?(((((map__31870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31870):map__31870);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31870__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31870__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__31873 = info;
var map__31874 = G__31873;
var map__31874__$1 = (((((!((map__31874 == null))))?(((((map__31874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31874):map__31874);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31874__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__31873__$1 = G__31873;
while(true){
var d__$2 = d__$1;
var map__31878 = G__31873__$1;
var map__31878__$1 = (((((!((map__31878 == null))))?(((((map__31878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31878):map__31878);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31878__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__32727 = (d__$2 + (1));
var G__32728 = shadow__$1;
d__$1 = G__32727;
G__31873__$1 = G__32728;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__31880){
var map__31881 = p__31880;
var map__31881__$1 = (((((!((map__31881 == null))))?(((((map__31881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31881):map__31881);
var name_var = map__31881__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31881__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31881__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__31883 = info;
var map__31883__$1 = (((((!((map__31883 == null))))?(((((map__31883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31883):map__31883);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31883__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31883__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__31886 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__31886) : cljs.compiler.munge.call(null,G__31886));
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
var G__31889 = arguments.length;
switch (G__31889) {
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
var ms = (function (){var fexpr__31922 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__31922.cljs$core$IFn$_invoke$arity$1 ? fexpr__31922.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__31922.call(null,ss__$3));
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
var G__31937 = cp;
switch (G__31937) {
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
var seq__31941_32752 = cljs.core.seq(s);
var chunk__31942_32753 = null;
var count__31943_32754 = (0);
var i__31944_32755 = (0);
while(true){
if((i__31944_32755 < count__31943_32754)){
var c_32757 = chunk__31942_32753.cljs$core$IIndexed$_nth$arity$2(null,i__31944_32755);
sb.append(cljs.compiler.escape_char(c_32757));


var G__32758 = seq__31941_32752;
var G__32759 = chunk__31942_32753;
var G__32760 = count__31943_32754;
var G__32761 = (i__31944_32755 + (1));
seq__31941_32752 = G__32758;
chunk__31942_32753 = G__32759;
count__31943_32754 = G__32760;
i__31944_32755 = G__32761;
continue;
} else {
var temp__5735__auto___32762 = cljs.core.seq(seq__31941_32752);
if(temp__5735__auto___32762){
var seq__31941_32763__$1 = temp__5735__auto___32762;
if(cljs.core.chunked_seq_QMARK_(seq__31941_32763__$1)){
var c__4556__auto___32764 = cljs.core.chunk_first(seq__31941_32763__$1);
var G__32765 = cljs.core.chunk_rest(seq__31941_32763__$1);
var G__32766 = c__4556__auto___32764;
var G__32767 = cljs.core.count(c__4556__auto___32764);
var G__32768 = (0);
seq__31941_32752 = G__32765;
chunk__31942_32753 = G__32766;
count__31943_32754 = G__32767;
i__31944_32755 = G__32768;
continue;
} else {
var c_32769 = cljs.core.first(seq__31941_32763__$1);
sb.append(cljs.compiler.escape_char(c_32769));


var G__32770 = cljs.core.next(seq__31941_32763__$1);
var G__32771 = null;
var G__32772 = (0);
var G__32773 = (0);
seq__31941_32752 = G__32770;
chunk__31942_32753 = G__32771;
count__31943_32754 = G__32772;
i__31944_32755 = G__32773;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31945 = cljs.core.get_global_hierarchy;
return (fexpr__31945.cljs$core$IFn$_invoke$arity$0 ? fexpr__31945.cljs$core$IFn$_invoke$arity$0() : fexpr__31945.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__31946_32778 = ast;
var map__31946_32779__$1 = (((((!((map__31946_32778 == null))))?(((((map__31946_32778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31946_32778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31946_32778):map__31946_32778);
var env_32780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31946_32779__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_32780))){
var map__31948_32783 = env_32780;
var map__31948_32784__$1 = (((((!((map__31948_32783 == null))))?(((((map__31948_32783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31948_32783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31948_32783):map__31948_32783);
var line_32785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31948_32784__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31948_32784__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__31950 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__31952 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__31951 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__31951.cljs$core$IFn$_invoke$arity$1 ? fexpr__31951.cljs$core$IFn$_invoke$arity$1(G__31952) : fexpr__31951.call(null,G__31952));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31950,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__31950;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_32785 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_32786)?(column_32786 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__31961 = arguments.length;
switch (G__31961) {
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
var len__4736__auto___32792 = arguments.length;
var i__4737__auto___32793 = (0);
while(true){
if((i__4737__auto___32793 < len__4736__auto___32792)){
args_arr__4757__auto__.push((arguments[i__4737__auto___32793]));

var G__32794 = (i__4737__auto___32793 + (1));
i__4737__auto___32793 = G__32794;
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
var s_32795 = (function (){var G__31962 = a;
if((!(typeof a === 'string'))){
return G__31962.toString();
} else {
return G__31962;
}
})();
var temp__5739__auto___32796 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___32796 == null)){
} else {
var sm_data_32797 = temp__5739__auto___32796;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_32797,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__31953_SHARP_){
return (p1__31953_SHARP_ + s_32795.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_32795], 0));

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

var seq__31963 = cljs.core.seq(xs);
var chunk__31964 = null;
var count__31965 = (0);
var i__31966 = (0);
while(true){
if((i__31966 < count__31965)){
var x = chunk__31964.cljs$core$IIndexed$_nth$arity$2(null,i__31966);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__32801 = seq__31963;
var G__32802 = chunk__31964;
var G__32803 = count__31965;
var G__32804 = (i__31966 + (1));
seq__31963 = G__32801;
chunk__31964 = G__32802;
count__31965 = G__32803;
i__31966 = G__32804;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31963);
if(temp__5735__auto__){
var seq__31963__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31963__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31963__$1);
var G__32805 = cljs.core.chunk_rest(seq__31963__$1);
var G__32806 = c__4556__auto__;
var G__32807 = cljs.core.count(c__4556__auto__);
var G__32808 = (0);
seq__31963 = G__32805;
chunk__31964 = G__32806;
count__31965 = G__32807;
i__31966 = G__32808;
continue;
} else {
var x = cljs.core.first(seq__31963__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__32809 = cljs.core.next(seq__31963__$1);
var G__32810 = null;
var G__32811 = (0);
var G__32812 = (0);
seq__31963 = G__32809;
chunk__31964 = G__32810;
count__31965 = G__32811;
i__31966 = G__32812;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq31955){
var G__31956 = cljs.core.first(seq31955);
var seq31955__$1 = cljs.core.next(seq31955);
var G__31957 = cljs.core.first(seq31955__$1);
var seq31955__$2 = cljs.core.next(seq31955__$1);
var G__31958 = cljs.core.first(seq31955__$2);
var seq31955__$3 = cljs.core.next(seq31955__$2);
var G__31959 = cljs.core.first(seq31955__$3);
var seq31955__$4 = cljs.core.next(seq31955__$3);
var G__31960 = cljs.core.first(seq31955__$4);
var seq31955__$5 = cljs.core.next(seq31955__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31956,G__31957,G__31958,G__31959,G__31960,seq31955__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__31967){
var map__31968 = p__31967;
var map__31968__$1 = (((((!((map__31968 == null))))?(((((map__31968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31968):map__31968);
var m = map__31968__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31968__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__31977 = arguments.length;
switch (G__31977) {
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
var len__4736__auto___32814 = arguments.length;
var i__4737__auto___32815 = (0);
while(true){
if((i__4737__auto___32815 < len__4736__auto___32814)){
args_arr__4757__auto__.push((arguments[i__4737__auto___32815]));

var G__32817 = (i__4737__auto___32815 + (1));
i__4737__auto___32815 = G__32817;
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

var seq__31979_32819 = cljs.core.seq(xs);
var chunk__31980_32820 = null;
var count__31981_32821 = (0);
var i__31982_32822 = (0);
while(true){
if((i__31982_32822 < count__31981_32821)){
var x_32823 = chunk__31980_32820.cljs$core$IIndexed$_nth$arity$2(null,i__31982_32822);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_32823);


var G__32824 = seq__31979_32819;
var G__32825 = chunk__31980_32820;
var G__32826 = count__31981_32821;
var G__32827 = (i__31982_32822 + (1));
seq__31979_32819 = G__32824;
chunk__31980_32820 = G__32825;
count__31981_32821 = G__32826;
i__31982_32822 = G__32827;
continue;
} else {
var temp__5735__auto___32829 = cljs.core.seq(seq__31979_32819);
if(temp__5735__auto___32829){
var seq__31979_32830__$1 = temp__5735__auto___32829;
if(cljs.core.chunked_seq_QMARK_(seq__31979_32830__$1)){
var c__4556__auto___32831 = cljs.core.chunk_first(seq__31979_32830__$1);
var G__32832 = cljs.core.chunk_rest(seq__31979_32830__$1);
var G__32833 = c__4556__auto___32831;
var G__32834 = cljs.core.count(c__4556__auto___32831);
var G__32835 = (0);
seq__31979_32819 = G__32832;
chunk__31980_32820 = G__32833;
count__31981_32821 = G__32834;
i__31982_32822 = G__32835;
continue;
} else {
var x_32836 = cljs.core.first(seq__31979_32830__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_32836);


var G__32837 = cljs.core.next(seq__31979_32830__$1);
var G__32838 = null;
var G__32839 = (0);
var G__32840 = (0);
seq__31979_32819 = G__32837;
chunk__31980_32820 = G__32838;
count__31981_32821 = G__32839;
i__31982_32822 = G__32840;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq31971){
var G__31972 = cljs.core.first(seq31971);
var seq31971__$1 = cljs.core.next(seq31971);
var G__31973 = cljs.core.first(seq31971__$1);
var seq31971__$2 = cljs.core.next(seq31971__$1);
var G__31974 = cljs.core.first(seq31971__$2);
var seq31971__$3 = cljs.core.next(seq31971__$2);
var G__31975 = cljs.core.first(seq31971__$3);
var seq31971__$4 = cljs.core.next(seq31971__$3);
var G__31976 = cljs.core.first(seq31971__$4);
var seq31971__$5 = cljs.core.next(seq31971__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31972,G__31973,G__31974,G__31975,G__31976,seq31971__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31986_32843 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31987_32844 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31988_32845 = true;
var _STAR_print_fn_STAR__temp_val__31989_32846 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31988_32845);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31989_32846);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31987_32844);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31986_32843);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31990 = cljs.core.get_global_hierarchy;
return (fexpr__31990.cljs$core$IFn$_invoke$arity$0 ? fexpr__31990.cljs$core$IFn$_invoke$arity$0() : fexpr__31990.call(null));
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
var vec__31992 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31992,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31992,(1),null);
var G__31996 = ns;
var G__31997 = name;
var G__31998 = (function (){
var G__31999 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__31999) : cljs.compiler.emit_constant.call(null,G__31999));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__31996,G__31997,G__31998) : cljs.compiler.emit_record_value.call(null,G__31996,G__31997,G__31998));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__32000 = cljs.core.keys(x);
var G__32001 = cljs.core.vals(x);
var G__32002 = cljs.compiler.emit_constants_comma_sep;
var G__32003 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__32000,G__32001,G__32002,G__32003) : cljs.compiler.emit_map.call(null,G__32000,G__32001,G__32002,G__32003));
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
var G__32004 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__32005 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__32004,G__32005) : cljs.compiler.emit_with_meta.call(null,G__32004,G__32005));
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
var vec__32007 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32007,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32007,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32007,(2),null);
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
var G__32022 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__32022) : x.call(null,G__32022));
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
var G__32024 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__32024) : x.call(null,G__32024));
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
var G__32027 = items;
var G__32028 = (function (p1__32026_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__32026_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__32027,G__32028) : cljs.compiler.emit_js_object.call(null,G__32027,G__32028));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__32030){
var map__32031 = p__32030;
var map__32031__$1 = (((((!((map__32031 == null))))?(((((map__32031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32031):map__32031);
var ast = map__32031__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32031__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32031__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32031__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__32034 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__32034__$1 = (((((!((map__32034 == null))))?(((((map__32034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32034):map__32034);
var cenv = map__32034__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32034__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__32038 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__32041 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__32041) : cljs.compiler.es5_GT__EQ_.call(null,G__32041));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__32038,cljs.analyzer.es5_allowed);
} else {
return G__32038;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__32042 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__32042,reserved);
} else {
return G__32042;
}
})();
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__32043_32872 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__32043_32873__$1 = (((G__32043_32872 instanceof cljs.core.Keyword))?G__32043_32872.fqn:null);
switch (G__32043_32873__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__32044){
var map__32045 = p__32044;
var map__32045__$1 = (((((!((map__32045 == null))))?(((((map__32045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32045):map__32045);
var arg = map__32045__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32045__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32045__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32045__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32045__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__32051 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__32051__$1 = (((((!((map__32051 == null))))?(((((map__32051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32051):map__32051);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32051__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__32053){
var map__32054 = p__32053;
var map__32054__$1 = (((((!((map__32054 == null))))?(((((map__32054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32054):map__32054);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32054__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32054__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32054__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__32057_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__32057_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__32063 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__32063) : comma_sep.call(null,G__32063));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__32064 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__32064) : comma_sep.call(null,G__32064));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__32065){
var map__32066 = p__32065;
var map__32066__$1 = (((((!((map__32066 == null))))?(((((map__32066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32066):map__32066);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32066__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32066__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32066__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__32069){
var map__32070 = p__32069;
var map__32070__$1 = (((((!((map__32070 == null))))?(((((map__32070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32070):map__32070);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32070__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32070__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__32072_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__32072_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__32073 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__32073) : comma_sep.call(null,G__32073));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__32074){
var map__32076 = p__32074;
var map__32076__$1 = (((((!((map__32076 == null))))?(((((map__32076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32076):map__32076);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32076__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32076__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___32879 = cljs.core.seq(items);
if(temp__5735__auto___32879){
var items_32880__$1 = temp__5735__auto___32879;
var vec__32079_32881 = items_32880__$1;
var seq__32080_32882 = cljs.core.seq(vec__32079_32881);
var first__32081_32883 = cljs.core.first(seq__32080_32882);
var seq__32080_32884__$1 = cljs.core.next(seq__32080_32882);
var vec__32082_32885 = first__32081_32883;
var k_32886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32082_32885,(0),null);
var v_32887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32082_32885,(1),null);
var r_32888 = seq__32080_32884__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_32886),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_32887) : emit_js_object_val.call(null,v_32887)));

var seq__32085_32889 = cljs.core.seq(r_32888);
var chunk__32086_32890 = null;
var count__32087_32891 = (0);
var i__32088_32892 = (0);
while(true){
if((i__32088_32892 < count__32087_32891)){
var vec__32095_32893 = chunk__32086_32890.cljs$core$IIndexed$_nth$arity$2(null,i__32088_32892);
var k_32894__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32095_32893,(0),null);
var v_32895__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32095_32893,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_32894__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_32895__$1) : emit_js_object_val.call(null,v_32895__$1)));


var G__32901 = seq__32085_32889;
var G__32902 = chunk__32086_32890;
var G__32903 = count__32087_32891;
var G__32904 = (i__32088_32892 + (1));
seq__32085_32889 = G__32901;
chunk__32086_32890 = G__32902;
count__32087_32891 = G__32903;
i__32088_32892 = G__32904;
continue;
} else {
var temp__5735__auto___32905__$1 = cljs.core.seq(seq__32085_32889);
if(temp__5735__auto___32905__$1){
var seq__32085_32906__$1 = temp__5735__auto___32905__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32085_32906__$1)){
var c__4556__auto___32907 = cljs.core.chunk_first(seq__32085_32906__$1);
var G__32910 = cljs.core.chunk_rest(seq__32085_32906__$1);
var G__32911 = c__4556__auto___32907;
var G__32912 = cljs.core.count(c__4556__auto___32907);
var G__32913 = (0);
seq__32085_32889 = G__32910;
chunk__32086_32890 = G__32911;
count__32087_32891 = G__32912;
i__32088_32892 = G__32913;
continue;
} else {
var vec__32101_32914 = cljs.core.first(seq__32085_32906__$1);
var k_32915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32101_32914,(0),null);
var v_32916__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32101_32914,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_32915__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_32916__$1) : emit_js_object_val.call(null,v_32916__$1)));


var G__32917 = cljs.core.next(seq__32085_32906__$1);
var G__32918 = null;
var G__32919 = (0);
var G__32920 = (0);
seq__32085_32889 = G__32917;
chunk__32086_32890 = G__32918;
count__32087_32891 = G__32919;
i__32088_32892 = G__32920;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__32104){
var map__32105 = p__32104;
var map__32105__$1 = (((((!((map__32105 == null))))?(((((map__32105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32105):map__32105);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32105__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32105__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32105__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__32114){
var map__32115 = p__32114;
var map__32115__$1 = (((((!((map__32115 == null))))?(((((map__32115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32115):map__32115);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32115__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32115__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__32117){
var map__32118 = p__32117;
var map__32118__$1 = (((((!((map__32118 == null))))?(((((map__32118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32118):map__32118);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32118__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__32122){
var map__32123 = p__32122;
var map__32123__$1 = (((((!((map__32123 == null))))?(((((map__32123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32123):map__32123);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32123__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32123__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__32139 = cljs.analyzer.unwrap_quote(expr);
var map__32139__$1 = (((((!((map__32139 == null))))?(((((map__32139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32139):map__32139);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32139__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32139__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32139__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__32141 = cljs.analyzer.unwrap_quote(expr);
var map__32141__$1 = (((((!((map__32141 == null))))?(((((map__32141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32141):map__32141);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32141__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32141__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32141__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__32144 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__32144.cljs$core$IFn$_invoke$arity$1 ? fexpr__32144.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__32144.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__32145){
var map__32146 = p__32145;
var map__32146__$1 = (((((!((map__32146 == null))))?(((((map__32146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32146):map__32146);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32146__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32146__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32146__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32146__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32146__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__32149){
var map__32150 = p__32149;
var map__32150__$1 = (((((!((map__32150 == null))))?(((((map__32150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32150):map__32150);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32150__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32150__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32150__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32150__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__32152_32943 = cljs.core.seq(nodes);
var chunk__32153_32944 = null;
var count__32154_32945 = (0);
var i__32155_32946 = (0);
while(true){
if((i__32155_32946 < count__32154_32945)){
var map__32176_32947 = chunk__32153_32944.cljs$core$IIndexed$_nth$arity$2(null,i__32155_32946);
var map__32176_32948__$1 = (((((!((map__32176_32947 == null))))?(((((map__32176_32947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32176_32947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32176_32947):map__32176_32947);
var ts_32949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32176_32948__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__32177_32950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32176_32948__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__32177_32951__$1 = (((((!((map__32177_32950 == null))))?(((((map__32177_32950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32177_32950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32177_32950):map__32177_32950);
var then_32952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32177_32951__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__32180_32955 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_32949));
var chunk__32181_32956 = null;
var count__32182_32957 = (0);
var i__32183_32958 = (0);
while(true){
if((i__32183_32958 < count__32182_32957)){
var test_32961 = chunk__32181_32956.cljs$core$IIndexed$_nth$arity$2(null,i__32183_32958);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_32961,":");


var G__32962 = seq__32180_32955;
var G__32963 = chunk__32181_32956;
var G__32964 = count__32182_32957;
var G__32965 = (i__32183_32958 + (1));
seq__32180_32955 = G__32962;
chunk__32181_32956 = G__32963;
count__32182_32957 = G__32964;
i__32183_32958 = G__32965;
continue;
} else {
var temp__5735__auto___32966 = cljs.core.seq(seq__32180_32955);
if(temp__5735__auto___32966){
var seq__32180_32967__$1 = temp__5735__auto___32966;
if(cljs.core.chunked_seq_QMARK_(seq__32180_32967__$1)){
var c__4556__auto___32968 = cljs.core.chunk_first(seq__32180_32967__$1);
var G__32969 = cljs.core.chunk_rest(seq__32180_32967__$1);
var G__32970 = c__4556__auto___32968;
var G__32971 = cljs.core.count(c__4556__auto___32968);
var G__32972 = (0);
seq__32180_32955 = G__32969;
chunk__32181_32956 = G__32970;
count__32182_32957 = G__32971;
i__32183_32958 = G__32972;
continue;
} else {
var test_32973 = cljs.core.first(seq__32180_32967__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_32973,":");


var G__32974 = cljs.core.next(seq__32180_32967__$1);
var G__32975 = null;
var G__32976 = (0);
var G__32977 = (0);
seq__32180_32955 = G__32974;
chunk__32181_32956 = G__32975;
count__32182_32957 = G__32976;
i__32183_32958 = G__32977;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_32952);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_32952);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__32980 = seq__32152_32943;
var G__32981 = chunk__32153_32944;
var G__32982 = count__32154_32945;
var G__32983 = (i__32155_32946 + (1));
seq__32152_32943 = G__32980;
chunk__32153_32944 = G__32981;
count__32154_32945 = G__32982;
i__32155_32946 = G__32983;
continue;
} else {
var temp__5735__auto___32984 = cljs.core.seq(seq__32152_32943);
if(temp__5735__auto___32984){
var seq__32152_32986__$1 = temp__5735__auto___32984;
if(cljs.core.chunked_seq_QMARK_(seq__32152_32986__$1)){
var c__4556__auto___32987 = cljs.core.chunk_first(seq__32152_32986__$1);
var G__32988 = cljs.core.chunk_rest(seq__32152_32986__$1);
var G__32989 = c__4556__auto___32987;
var G__32990 = cljs.core.count(c__4556__auto___32987);
var G__32991 = (0);
seq__32152_32943 = G__32988;
chunk__32153_32944 = G__32989;
count__32154_32945 = G__32990;
i__32155_32946 = G__32991;
continue;
} else {
var map__32184_32994 = cljs.core.first(seq__32152_32986__$1);
var map__32184_32995__$1 = (((((!((map__32184_32994 == null))))?(((((map__32184_32994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32184_32994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32184_32994):map__32184_32994);
var ts_32996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32184_32995__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__32185_32997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32184_32995__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__32185_32998__$1 = (((((!((map__32185_32997 == null))))?(((((map__32185_32997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32185_32997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32185_32997):map__32185_32997);
var then_32999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32185_32998__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__32188_33000 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_32996));
var chunk__32189_33001 = null;
var count__32190_33002 = (0);
var i__32191_33003 = (0);
while(true){
if((i__32191_33003 < count__32190_33002)){
var test_33004 = chunk__32189_33001.cljs$core$IIndexed$_nth$arity$2(null,i__32191_33003);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_33004,":");


var G__33005 = seq__32188_33000;
var G__33006 = chunk__32189_33001;
var G__33007 = count__32190_33002;
var G__33008 = (i__32191_33003 + (1));
seq__32188_33000 = G__33005;
chunk__32189_33001 = G__33006;
count__32190_33002 = G__33007;
i__32191_33003 = G__33008;
continue;
} else {
var temp__5735__auto___33009__$1 = cljs.core.seq(seq__32188_33000);
if(temp__5735__auto___33009__$1){
var seq__32188_33010__$1 = temp__5735__auto___33009__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32188_33010__$1)){
var c__4556__auto___33011 = cljs.core.chunk_first(seq__32188_33010__$1);
var G__33014 = cljs.core.chunk_rest(seq__32188_33010__$1);
var G__33015 = c__4556__auto___33011;
var G__33016 = cljs.core.count(c__4556__auto___33011);
var G__33017 = (0);
seq__32188_33000 = G__33014;
chunk__32189_33001 = G__33015;
count__32190_33002 = G__33016;
i__32191_33003 = G__33017;
continue;
} else {
var test_33018 = cljs.core.first(seq__32188_33010__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_33018,":");


var G__33021 = cljs.core.next(seq__32188_33010__$1);
var G__33022 = null;
var G__33023 = (0);
var G__33024 = (0);
seq__32188_33000 = G__33021;
chunk__32189_33001 = G__33022;
count__32190_33002 = G__33023;
i__32191_33003 = G__33024;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_32999);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_32999);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__33025 = cljs.core.next(seq__32152_32986__$1);
var G__33026 = null;
var G__33027 = (0);
var G__33028 = (0);
seq__32152_32943 = G__33025;
chunk__32153_32944 = G__33026;
count__32154_32945 = G__33027;
i__32155_32946 = G__33028;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__32192){
var map__32193 = p__32192;
var map__32193__$1 = (((((!((map__32193 == null))))?(((((map__32193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32193):map__32193);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32193__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32193__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__32198 = env;
var G__32199 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__32198,G__32199) : cljs.compiler.resolve_type.call(null,G__32198,G__32199));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__32200 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32200,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32200,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__32195_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__32195_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__32195_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__32207 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__32207,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__32207;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__32214 = env;
var G__32215 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__32214,G__32215) : cljs.compiler.resolve_type.call(null,G__32214,G__32215));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32216_SHARP_){
return cljs.compiler.resolve_type(env,p1__32216_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__32217 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__32218 = cljs.core.seq(vec__32217);
var first__32219 = cljs.core.first(seq__32218);
var seq__32218__$1 = cljs.core.next(seq__32218);
var p = first__32219;
var first__32219__$1 = cljs.core.first(seq__32218__$1);
var seq__32218__$2 = cljs.core.next(seq__32218__$1);
var ts = first__32219__$1;
var first__32219__$2 = cljs.core.first(seq__32218__$2);
var seq__32218__$3 = cljs.core.next(seq__32218__$2);
var n = first__32219__$2;
var xs = seq__32218__$3;
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
var vec__32220 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__32221 = cljs.core.seq(vec__32220);
var first__32222 = cljs.core.first(seq__32221);
var seq__32221__$1 = cljs.core.next(seq__32221);
var p = first__32222;
var first__32222__$1 = cljs.core.first(seq__32221__$1);
var seq__32221__$2 = cljs.core.next(seq__32221__$1);
var ts = first__32222__$1;
var xs = seq__32221__$2;
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
var G__32224 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__32223 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__32223.cljs$core$IFn$_invoke$arity$1 ? fexpr__32223.cljs$core$IFn$_invoke$arity$1(G__32224) : fexpr__32223.call(null,G__32224));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__32227 = arguments.length;
switch (G__32227) {
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
var vec__32235 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32225_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__32225_SHARP_);
} else {
return p1__32225_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__32236 = cljs.core.seq(vec__32235);
var first__32237 = cljs.core.first(seq__32236);
var seq__32236__$1 = cljs.core.next(seq__32236);
var x = first__32237;
var ys = seq__32236__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__32238 = cljs.core.seq(ys);
var chunk__32239 = null;
var count__32240 = (0);
var i__32241 = (0);
while(true){
if((i__32241 < count__32240)){
var next_line = chunk__32239.cljs$core$IIndexed$_nth$arity$2(null,i__32241);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__33056 = seq__32238;
var G__33057 = chunk__32239;
var G__33058 = count__32240;
var G__33059 = (i__32241 + (1));
seq__32238 = G__33056;
chunk__32239 = G__33057;
count__32240 = G__33058;
i__32241 = G__33059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32238);
if(temp__5735__auto__){
var seq__32238__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32238__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32238__$1);
var G__33060 = cljs.core.chunk_rest(seq__32238__$1);
var G__33061 = c__4556__auto__;
var G__33062 = cljs.core.count(c__4556__auto__);
var G__33063 = (0);
seq__32238 = G__33060;
chunk__32239 = G__33061;
count__32240 = G__33062;
i__32241 = G__33063;
continue;
} else {
var next_line = cljs.core.first(seq__32238__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__33064 = cljs.core.next(seq__32238__$1);
var G__33065 = null;
var G__33066 = (0);
var G__33067 = (0);
seq__32238 = G__33064;
chunk__32239 = G__33065;
count__32240 = G__33066;
i__32241 = G__33067;
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

var seq__32243_33068 = cljs.core.seq(docs__$2);
var chunk__32244_33069 = null;
var count__32245_33070 = (0);
var i__32246_33071 = (0);
while(true){
if((i__32246_33071 < count__32245_33070)){
var e_33072 = chunk__32244_33069.cljs$core$IIndexed$_nth$arity$2(null,i__32246_33071);
if(cljs.core.truth_(e_33072)){
print_comment_lines(e_33072);
} else {
}


var G__33073 = seq__32243_33068;
var G__33074 = chunk__32244_33069;
var G__33075 = count__32245_33070;
var G__33076 = (i__32246_33071 + (1));
seq__32243_33068 = G__33073;
chunk__32244_33069 = G__33074;
count__32245_33070 = G__33075;
i__32246_33071 = G__33076;
continue;
} else {
var temp__5735__auto___33077 = cljs.core.seq(seq__32243_33068);
if(temp__5735__auto___33077){
var seq__32243_33078__$1 = temp__5735__auto___33077;
if(cljs.core.chunked_seq_QMARK_(seq__32243_33078__$1)){
var c__4556__auto___33079 = cljs.core.chunk_first(seq__32243_33078__$1);
var G__33080 = cljs.core.chunk_rest(seq__32243_33078__$1);
var G__33081 = c__4556__auto___33079;
var G__33082 = cljs.core.count(c__4556__auto___33079);
var G__33083 = (0);
seq__32243_33068 = G__33080;
chunk__32244_33069 = G__33081;
count__32245_33070 = G__33082;
i__32246_33071 = G__33083;
continue;
} else {
var e_33084 = cljs.core.first(seq__32243_33078__$1);
if(cljs.core.truth_(e_33084)){
print_comment_lines(e_33084);
} else {
}


var G__33085 = cljs.core.next(seq__32243_33078__$1);
var G__33086 = null;
var G__33087 = (0);
var G__33088 = (0);
seq__32243_33068 = G__33085;
chunk__32244_33069 = G__33086;
count__32245_33070 = G__33087;
i__32246_33071 = G__33088;
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
var and__4115__auto__ = cljs.core.some((function (p1__32249_SHARP_){
return goog.string.startsWith(p1__32249_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__32250){
var map__32251 = p__32250;
var map__32251__$1 = (((((!((map__32251 == null))))?(((((map__32251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32251):map__32251);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32251__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32251__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32251__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32251__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32251__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32251__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32251__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32251__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32251__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32251__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__32257){
var map__32258 = p__32257;
var map__32258__$1 = (((((!((map__32258 == null))))?(((((map__32258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32258):map__32258);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32258__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32258__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32258__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__32260_33111 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__32261_33112 = null;
var count__32262_33113 = (0);
var i__32263_33114 = (0);
while(true){
if((i__32263_33114 < count__32262_33113)){
var vec__32270_33115 = chunk__32261_33112.cljs$core$IIndexed$_nth$arity$2(null,i__32263_33114);
var i_33116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32270_33115,(0),null);
var param_33117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32270_33115,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_33117);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__33121 = seq__32260_33111;
var G__33122 = chunk__32261_33112;
var G__33123 = count__32262_33113;
var G__33124 = (i__32263_33114 + (1));
seq__32260_33111 = G__33121;
chunk__32261_33112 = G__33122;
count__32262_33113 = G__33123;
i__32263_33114 = G__33124;
continue;
} else {
var temp__5735__auto___33125 = cljs.core.seq(seq__32260_33111);
if(temp__5735__auto___33125){
var seq__32260_33126__$1 = temp__5735__auto___33125;
if(cljs.core.chunked_seq_QMARK_(seq__32260_33126__$1)){
var c__4556__auto___33127 = cljs.core.chunk_first(seq__32260_33126__$1);
var G__33128 = cljs.core.chunk_rest(seq__32260_33126__$1);
var G__33129 = c__4556__auto___33127;
var G__33130 = cljs.core.count(c__4556__auto___33127);
var G__33131 = (0);
seq__32260_33111 = G__33128;
chunk__32261_33112 = G__33129;
count__32262_33113 = G__33130;
i__32263_33114 = G__33131;
continue;
} else {
var vec__32273_33133 = cljs.core.first(seq__32260_33126__$1);
var i_33134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32273_33133,(0),null);
var param_33135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32273_33133,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_33135);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__33139 = cljs.core.next(seq__32260_33126__$1);
var G__33140 = null;
var G__33141 = (0);
var G__33142 = (0);
seq__32260_33111 = G__33139;
chunk__32261_33112 = G__33140;
count__32262_33113 = G__33141;
i__32263_33114 = G__33142;
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

var seq__32278_33143 = cljs.core.seq(params);
var chunk__32279_33144 = null;
var count__32280_33145 = (0);
var i__32281_33146 = (0);
while(true){
if((i__32281_33146 < count__32280_33145)){
var param_33147 = chunk__32279_33144.cljs$core$IIndexed$_nth$arity$2(null,i__32281_33146);
cljs.compiler.emit(param_33147);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_33147,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__33148 = seq__32278_33143;
var G__33149 = chunk__32279_33144;
var G__33150 = count__32280_33145;
var G__33151 = (i__32281_33146 + (1));
seq__32278_33143 = G__33148;
chunk__32279_33144 = G__33149;
count__32280_33145 = G__33150;
i__32281_33146 = G__33151;
continue;
} else {
var temp__5735__auto___33152 = cljs.core.seq(seq__32278_33143);
if(temp__5735__auto___33152){
var seq__32278_33153__$1 = temp__5735__auto___33152;
if(cljs.core.chunked_seq_QMARK_(seq__32278_33153__$1)){
var c__4556__auto___33154 = cljs.core.chunk_first(seq__32278_33153__$1);
var G__33155 = cljs.core.chunk_rest(seq__32278_33153__$1);
var G__33156 = c__4556__auto___33154;
var G__33157 = cljs.core.count(c__4556__auto___33154);
var G__33158 = (0);
seq__32278_33143 = G__33155;
chunk__32279_33144 = G__33156;
count__32280_33145 = G__33157;
i__32281_33146 = G__33158;
continue;
} else {
var param_33159 = cljs.core.first(seq__32278_33153__$1);
cljs.compiler.emit(param_33159);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_33159,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__33160 = cljs.core.next(seq__32278_33153__$1);
var G__33161 = null;
var G__33162 = (0);
var G__33163 = (0);
seq__32278_33143 = G__33160;
chunk__32279_33144 = G__33161;
count__32280_33145 = G__33162;
i__32281_33146 = G__33163;
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

var seq__32282_33164 = cljs.core.seq(params);
var chunk__32283_33165 = null;
var count__32284_33166 = (0);
var i__32285_33167 = (0);
while(true){
if((i__32285_33167 < count__32284_33166)){
var param_33168 = chunk__32283_33165.cljs$core$IIndexed$_nth$arity$2(null,i__32285_33167);
cljs.compiler.emit(param_33168);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_33168,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__33170 = seq__32282_33164;
var G__33171 = chunk__32283_33165;
var G__33172 = count__32284_33166;
var G__33173 = (i__32285_33167 + (1));
seq__32282_33164 = G__33170;
chunk__32283_33165 = G__33171;
count__32284_33166 = G__33172;
i__32285_33167 = G__33173;
continue;
} else {
var temp__5735__auto___33176 = cljs.core.seq(seq__32282_33164);
if(temp__5735__auto___33176){
var seq__32282_33177__$1 = temp__5735__auto___33176;
if(cljs.core.chunked_seq_QMARK_(seq__32282_33177__$1)){
var c__4556__auto___33178 = cljs.core.chunk_first(seq__32282_33177__$1);
var G__33179 = cljs.core.chunk_rest(seq__32282_33177__$1);
var G__33180 = c__4556__auto___33178;
var G__33181 = cljs.core.count(c__4556__auto___33178);
var G__33182 = (0);
seq__32282_33164 = G__33179;
chunk__32283_33165 = G__33180;
count__32284_33166 = G__33181;
i__32285_33167 = G__33182;
continue;
} else {
var param_33183 = cljs.core.first(seq__32282_33177__$1);
cljs.compiler.emit(param_33183);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_33183,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__33190 = cljs.core.next(seq__32282_33177__$1);
var G__33191 = null;
var G__33192 = (0);
var G__33193 = (0);
seq__32282_33164 = G__33190;
chunk__32283_33165 = G__33191;
count__32284_33166 = G__33192;
i__32285_33167 = G__33193;
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
var seq__32286 = cljs.core.seq(params);
var chunk__32287 = null;
var count__32288 = (0);
var i__32289 = (0);
while(true){
if((i__32289 < count__32288)){
var param = chunk__32287.cljs$core$IIndexed$_nth$arity$2(null,i__32289);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__33194 = seq__32286;
var G__33195 = chunk__32287;
var G__33196 = count__32288;
var G__33197 = (i__32289 + (1));
seq__32286 = G__33194;
chunk__32287 = G__33195;
count__32288 = G__33196;
i__32289 = G__33197;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32286);
if(temp__5735__auto__){
var seq__32286__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32286__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32286__$1);
var G__33200 = cljs.core.chunk_rest(seq__32286__$1);
var G__33201 = c__4556__auto__;
var G__33202 = cljs.core.count(c__4556__auto__);
var G__33203 = (0);
seq__32286 = G__33200;
chunk__32287 = G__33201;
count__32288 = G__33202;
i__32289 = G__33203;
continue;
} else {
var param = cljs.core.first(seq__32286__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__33206 = cljs.core.next(seq__32286__$1);
var G__33207 = null;
var G__33208 = (0);
var G__33209 = (0);
seq__32286 = G__33206;
chunk__32287 = G__33207;
count__32288 = G__33208;
i__32289 = G__33209;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__32290){
var map__32291 = p__32290;
var map__32291__$1 = (((((!((map__32291 == null))))?(((((map__32291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32291):map__32291);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32291__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32291__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32291__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32291__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32291__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32291__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__32293){
var map__32294 = p__32293;
var map__32294__$1 = (((((!((map__32294 == null))))?(((((map__32294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32294):map__32294);
var f = map__32294__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_33237__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_33238 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_33237__$1);
var delegate_name_33239 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_33238),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_33239," = function (");

var seq__32296_33242 = cljs.core.seq(params);
var chunk__32297_33243 = null;
var count__32298_33244 = (0);
var i__32299_33245 = (0);
while(true){
if((i__32299_33245 < count__32298_33244)){
var param_33246 = chunk__32297_33243.cljs$core$IIndexed$_nth$arity$2(null,i__32299_33245);
cljs.compiler.emit(param_33246);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_33246,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__33250 = seq__32296_33242;
var G__33251 = chunk__32297_33243;
var G__33252 = count__32298_33244;
var G__33253 = (i__32299_33245 + (1));
seq__32296_33242 = G__33250;
chunk__32297_33243 = G__33251;
count__32298_33244 = G__33252;
i__32299_33245 = G__33253;
continue;
} else {
var temp__5735__auto___33254 = cljs.core.seq(seq__32296_33242);
if(temp__5735__auto___33254){
var seq__32296_33255__$1 = temp__5735__auto___33254;
if(cljs.core.chunked_seq_QMARK_(seq__32296_33255__$1)){
var c__4556__auto___33256 = cljs.core.chunk_first(seq__32296_33255__$1);
var G__33257 = cljs.core.chunk_rest(seq__32296_33255__$1);
var G__33258 = c__4556__auto___33256;
var G__33259 = cljs.core.count(c__4556__auto___33256);
var G__33260 = (0);
seq__32296_33242 = G__33257;
chunk__32297_33243 = G__33258;
count__32298_33244 = G__33259;
i__32299_33245 = G__33260;
continue;
} else {
var param_33261 = cljs.core.first(seq__32296_33255__$1);
cljs.compiler.emit(param_33261);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_33261,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__33266 = cljs.core.next(seq__32296_33255__$1);
var G__33267 = null;
var G__33268 = (0);
var G__33269 = (0);
seq__32296_33242 = G__33266;
chunk__32297_33243 = G__33267;
count__32298_33244 = G__33268;
i__32299_33245 = G__33269;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_33238," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_33278 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_33278,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_33239,".call(this,");

var seq__32300_33280 = cljs.core.seq(params);
var chunk__32301_33281 = null;
var count__32302_33282 = (0);
var i__32303_33283 = (0);
while(true){
if((i__32303_33283 < count__32302_33282)){
var param_33284 = chunk__32301_33281.cljs$core$IIndexed$_nth$arity$2(null,i__32303_33283);
cljs.compiler.emit(param_33284);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_33284,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__33285 = seq__32300_33280;
var G__33286 = chunk__32301_33281;
var G__33287 = count__32302_33282;
var G__33288 = (i__32303_33283 + (1));
seq__32300_33280 = G__33285;
chunk__32301_33281 = G__33286;
count__32302_33282 = G__33287;
i__32303_33283 = G__33288;
continue;
} else {
var temp__5735__auto___33289 = cljs.core.seq(seq__32300_33280);
if(temp__5735__auto___33289){
var seq__32300_33290__$1 = temp__5735__auto___33289;
if(cljs.core.chunked_seq_QMARK_(seq__32300_33290__$1)){
var c__4556__auto___33291 = cljs.core.chunk_first(seq__32300_33290__$1);
var G__33292 = cljs.core.chunk_rest(seq__32300_33290__$1);
var G__33293 = c__4556__auto___33291;
var G__33294 = cljs.core.count(c__4556__auto___33291);
var G__33295 = (0);
seq__32300_33280 = G__33292;
chunk__32301_33281 = G__33293;
count__32302_33282 = G__33294;
i__32303_33283 = G__33295;
continue;
} else {
var param_33296 = cljs.core.first(seq__32300_33290__$1);
cljs.compiler.emit(param_33296);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_33296,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__33298 = cljs.core.next(seq__32300_33290__$1);
var G__33299 = null;
var G__33300 = (0);
var G__33301 = (0);
seq__32300_33280 = G__33298;
chunk__32301_33281 = G__33299;
count__32302_33282 = G__33300;
i__32303_33283 = G__33301;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_33238,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_33238,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_33237__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_33238,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_33239,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_33238,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__32307){
var map__32308 = p__32307;
var map__32308__$1 = (((((!((map__32308 == null))))?(((((map__32308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32308):map__32308);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32308__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32308__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32308__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32308__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32308__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32308__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32308__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32308__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32304_SHARP_){
var and__4115__auto__ = p1__32304_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__32304_SHARP_));
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
var name_33313__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_33314 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_33313__$1);
var maxparams_33315 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_33316 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_33314),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_33317 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__32305_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__32305_SHARP_)));
}),cljs.core.seq(mmap_33316));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_33314," = null;");

var seq__32313_33322 = cljs.core.seq(ms_33317);
var chunk__32314_33323 = null;
var count__32315_33324 = (0);
var i__32316_33325 = (0);
while(true){
if((i__32316_33325 < count__32315_33324)){
var vec__32323_33330 = chunk__32314_33323.cljs$core$IIndexed$_nth$arity$2(null,i__32316_33325);
var n_33331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32323_33330,(0),null);
var meth_33332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32323_33330,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_33331," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33332))){
cljs.compiler.emit_variadic_fn_method(meth_33332);
} else {
cljs.compiler.emit_fn_method(meth_33332);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__33337 = seq__32313_33322;
var G__33338 = chunk__32314_33323;
var G__33339 = count__32315_33324;
var G__33340 = (i__32316_33325 + (1));
seq__32313_33322 = G__33337;
chunk__32314_33323 = G__33338;
count__32315_33324 = G__33339;
i__32316_33325 = G__33340;
continue;
} else {
var temp__5735__auto___33341 = cljs.core.seq(seq__32313_33322);
if(temp__5735__auto___33341){
var seq__32313_33342__$1 = temp__5735__auto___33341;
if(cljs.core.chunked_seq_QMARK_(seq__32313_33342__$1)){
var c__4556__auto___33343 = cljs.core.chunk_first(seq__32313_33342__$1);
var G__33344 = cljs.core.chunk_rest(seq__32313_33342__$1);
var G__33345 = c__4556__auto___33343;
var G__33346 = cljs.core.count(c__4556__auto___33343);
var G__33347 = (0);
seq__32313_33322 = G__33344;
chunk__32314_33323 = G__33345;
count__32315_33324 = G__33346;
i__32316_33325 = G__33347;
continue;
} else {
var vec__32326_33349 = cljs.core.first(seq__32313_33342__$1);
var n_33350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32326_33349,(0),null);
var meth_33351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32326_33349,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_33350," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33351))){
cljs.compiler.emit_variadic_fn_method(meth_33351);
} else {
cljs.compiler.emit_fn_method(meth_33351);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__33353 = cljs.core.next(seq__32313_33342__$1);
var G__33354 = null;
var G__33355 = (0);
var G__33356 = (0);
seq__32313_33322 = G__33353;
chunk__32314_33323 = G__33354;
count__32315_33324 = G__33355;
i__32316_33325 = G__33356;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_33314," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_33315),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_33315)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_33315));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__32329_33367 = cljs.core.seq(ms_33317);
var chunk__32330_33368 = null;
var count__32331_33369 = (0);
var i__32332_33370 = (0);
while(true){
if((i__32332_33370 < count__32331_33369)){
var vec__32339_33373 = chunk__32330_33368.cljs$core$IIndexed$_nth$arity$2(null,i__32332_33370);
var n_33374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32339_33373,(0),null);
var meth_33375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32339_33373,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33375))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_33376 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_33376," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_33383 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_33376," = new cljs.core.IndexedSeq(",a_33383,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_33374,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_33315)),(((cljs.core.count(maxparams_33315) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_33376,");"], 0));
} else {
var pcnt_33388 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33375));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_33388,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_33374,".call(this",(((pcnt_33388 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_33388,maxparams_33315)),null,(1),null)),(2),null))),");");
}


var G__33395 = seq__32329_33367;
var G__33396 = chunk__32330_33368;
var G__33397 = count__32331_33369;
var G__33398 = (i__32332_33370 + (1));
seq__32329_33367 = G__33395;
chunk__32330_33368 = G__33396;
count__32331_33369 = G__33397;
i__32332_33370 = G__33398;
continue;
} else {
var temp__5735__auto___33399 = cljs.core.seq(seq__32329_33367);
if(temp__5735__auto___33399){
var seq__32329_33400__$1 = temp__5735__auto___33399;
if(cljs.core.chunked_seq_QMARK_(seq__32329_33400__$1)){
var c__4556__auto___33401 = cljs.core.chunk_first(seq__32329_33400__$1);
var G__33402 = cljs.core.chunk_rest(seq__32329_33400__$1);
var G__33403 = c__4556__auto___33401;
var G__33404 = cljs.core.count(c__4556__auto___33401);
var G__33405 = (0);
seq__32329_33367 = G__33402;
chunk__32330_33368 = G__33403;
count__32331_33369 = G__33404;
i__32332_33370 = G__33405;
continue;
} else {
var vec__32342_33406 = cljs.core.first(seq__32329_33400__$1);
var n_33407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32342_33406,(0),null);
var meth_33408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32342_33406,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33408))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_33409 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_33409," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_33410 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_33409," = new cljs.core.IndexedSeq(",a_33410,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_33407,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_33315)),(((cljs.core.count(maxparams_33315) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_33409,");"], 0));
} else {
var pcnt_33411 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33408));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_33411,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_33407,".call(this",(((pcnt_33411 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_33411,maxparams_33315)),null,(1),null)),(2),null))),");");
}


var G__33412 = cljs.core.next(seq__32329_33400__$1);
var G__33413 = null;
var G__33414 = (0);
var G__33415 = (0);
seq__32329_33367 = G__33412;
chunk__32330_33368 = G__33413;
count__32331_33369 = G__33414;
i__32332_33370 = G__33415;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_33416 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_33317)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_33416,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_33314,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_33314,".cljs$lang$applyTo = ",cljs.core.some((function (p1__32306_SHARP_){
var vec__32345 = p1__32306_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32345,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32345,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_33317),".cljs$lang$applyTo;");
} else {
}

var seq__32348_33420 = cljs.core.seq(ms_33317);
var chunk__32349_33421 = null;
var count__32350_33422 = (0);
var i__32351_33423 = (0);
while(true){
if((i__32351_33423 < count__32350_33422)){
var vec__32358_33424 = chunk__32349_33421.cljs$core$IIndexed$_nth$arity$2(null,i__32351_33423);
var n_33425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32358_33424,(0),null);
var meth_33426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32358_33424,(1),null);
var c_33451 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33426));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33426))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_33314,".cljs$core$IFn$_invoke$arity$variadic = ",n_33425,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_33314,".cljs$core$IFn$_invoke$arity$",c_33451," = ",n_33425,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__33452 = seq__32348_33420;
var G__33453 = chunk__32349_33421;
var G__33454 = count__32350_33422;
var G__33455 = (i__32351_33423 + (1));
seq__32348_33420 = G__33452;
chunk__32349_33421 = G__33453;
count__32350_33422 = G__33454;
i__32351_33423 = G__33455;
continue;
} else {
var temp__5735__auto___33456 = cljs.core.seq(seq__32348_33420);
if(temp__5735__auto___33456){
var seq__32348_33457__$1 = temp__5735__auto___33456;
if(cljs.core.chunked_seq_QMARK_(seq__32348_33457__$1)){
var c__4556__auto___33458 = cljs.core.chunk_first(seq__32348_33457__$1);
var G__33459 = cljs.core.chunk_rest(seq__32348_33457__$1);
var G__33460 = c__4556__auto___33458;
var G__33461 = cljs.core.count(c__4556__auto___33458);
var G__33462 = (0);
seq__32348_33420 = G__33459;
chunk__32349_33421 = G__33460;
count__32350_33422 = G__33461;
i__32351_33423 = G__33462;
continue;
} else {
var vec__32361_33463 = cljs.core.first(seq__32348_33457__$1);
var n_33464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32361_33463,(0),null);
var meth_33465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32361_33463,(1),null);
var c_33466 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33465));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33465))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_33314,".cljs$core$IFn$_invoke$arity$variadic = ",n_33464,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_33314,".cljs$core$IFn$_invoke$arity$",c_33466," = ",n_33464,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__33467 = cljs.core.next(seq__32348_33457__$1);
var G__33468 = null;
var G__33469 = (0);
var G__33470 = (0);
seq__32348_33420 = G__33467;
chunk__32349_33421 = G__33468;
count__32350_33422 = G__33469;
i__32351_33423 = G__33470;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_33314,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__32364){
var map__32365 = p__32364;
var map__32365__$1 = (((((!((map__32365 == null))))?(((((map__32365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32365):map__32365);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__32367_33474 = cljs.core.seq(statements);
var chunk__32368_33475 = null;
var count__32369_33476 = (0);
var i__32370_33477 = (0);
while(true){
if((i__32370_33477 < count__32369_33476)){
var s_33478 = chunk__32368_33475.cljs$core$IIndexed$_nth$arity$2(null,i__32370_33477);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_33478);


var G__33479 = seq__32367_33474;
var G__33480 = chunk__32368_33475;
var G__33481 = count__32369_33476;
var G__33482 = (i__32370_33477 + (1));
seq__32367_33474 = G__33479;
chunk__32368_33475 = G__33480;
count__32369_33476 = G__33481;
i__32370_33477 = G__33482;
continue;
} else {
var temp__5735__auto___33485 = cljs.core.seq(seq__32367_33474);
if(temp__5735__auto___33485){
var seq__32367_33486__$1 = temp__5735__auto___33485;
if(cljs.core.chunked_seq_QMARK_(seq__32367_33486__$1)){
var c__4556__auto___33487 = cljs.core.chunk_first(seq__32367_33486__$1);
var G__33488 = cljs.core.chunk_rest(seq__32367_33486__$1);
var G__33489 = c__4556__auto___33487;
var G__33490 = cljs.core.count(c__4556__auto___33487);
var G__33491 = (0);
seq__32367_33474 = G__33488;
chunk__32368_33475 = G__33489;
count__32369_33476 = G__33490;
i__32370_33477 = G__33491;
continue;
} else {
var s_33492 = cljs.core.first(seq__32367_33486__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_33492);


var G__33493 = cljs.core.next(seq__32367_33486__$1);
var G__33494 = null;
var G__33495 = (0);
var G__33496 = (0);
seq__32367_33474 = G__33493;
chunk__32368_33475 = G__33494;
count__32369_33476 = G__33495;
i__32370_33477 = G__33496;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__32371){
var map__32372 = p__32371;
var map__32372__$1 = (((((!((map__32372 == null))))?(((((map__32372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32372):map__32372);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32372__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32372__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32372__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32372__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32372__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__32374,is_loop){
var map__32375 = p__32374;
var map__32375__$1 = (((((!((map__32375 == null))))?(((((map__32375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32375):map__32375);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32375__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32375__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32375__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__32377_33499 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__32378_33500 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__32378_33500);

try{var seq__32379_33501 = cljs.core.seq(bindings);
var chunk__32380_33502 = null;
var count__32381_33503 = (0);
var i__32382_33504 = (0);
while(true){
if((i__32382_33504 < count__32381_33503)){
var map__32387_33505 = chunk__32380_33502.cljs$core$IIndexed$_nth$arity$2(null,i__32382_33504);
var map__32387_33506__$1 = (((((!((map__32387_33505 == null))))?(((((map__32387_33505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32387_33505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32387_33505):map__32387_33505);
var binding_33507 = map__32387_33506__$1;
var init_33508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32387_33506__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_33507);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_33508,";");


var G__33509 = seq__32379_33501;
var G__33510 = chunk__32380_33502;
var G__33511 = count__32381_33503;
var G__33512 = (i__32382_33504 + (1));
seq__32379_33501 = G__33509;
chunk__32380_33502 = G__33510;
count__32381_33503 = G__33511;
i__32382_33504 = G__33512;
continue;
} else {
var temp__5735__auto___33514 = cljs.core.seq(seq__32379_33501);
if(temp__5735__auto___33514){
var seq__32379_33515__$1 = temp__5735__auto___33514;
if(cljs.core.chunked_seq_QMARK_(seq__32379_33515__$1)){
var c__4556__auto___33516 = cljs.core.chunk_first(seq__32379_33515__$1);
var G__33517 = cljs.core.chunk_rest(seq__32379_33515__$1);
var G__33518 = c__4556__auto___33516;
var G__33519 = cljs.core.count(c__4556__auto___33516);
var G__33520 = (0);
seq__32379_33501 = G__33517;
chunk__32380_33502 = G__33518;
count__32381_33503 = G__33519;
i__32382_33504 = G__33520;
continue;
} else {
var map__32392_33543 = cljs.core.first(seq__32379_33515__$1);
var map__32392_33544__$1 = (((((!((map__32392_33543 == null))))?(((((map__32392_33543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32392_33543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32392_33543):map__32392_33543);
var binding_33545 = map__32392_33544__$1;
var init_33546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32392_33544__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_33545);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_33546,";");


var G__33547 = cljs.core.next(seq__32379_33515__$1);
var G__33548 = null;
var G__33549 = (0);
var G__33550 = (0);
seq__32379_33501 = G__33547;
chunk__32380_33502 = G__33548;
count__32381_33503 = G__33549;
i__32382_33504 = G__33550;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__32377_33499);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__32394){
var map__32395 = p__32394;
var map__32395__$1 = (((((!((map__32395 == null))))?(((((map__32395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32395):map__32395);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32395__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32395__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32395__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___33572 = cljs.core.count(exprs);
var i_33573 = (0);
while(true){
if((i_33573 < n__4613__auto___33572)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_33573) : temps.call(null,i_33573))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_33573) : exprs.call(null,i_33573)),";");

var G__33574 = (i_33573 + (1));
i_33573 = G__33574;
continue;
} else {
}
break;
}

var n__4613__auto___33575 = cljs.core.count(exprs);
var i_33576 = (0);
while(true){
if((i_33576 < n__4613__auto___33575)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_33576) : params.call(null,i_33576)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_33576) : temps.call(null,i_33576)),";");

var G__33579 = (i_33576 + (1));
i_33576 = G__33579;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__32397){
var map__32398 = p__32397;
var map__32398__$1 = (((((!((map__32398 == null))))?(((((map__32398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32398):map__32398);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32398__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32398__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32398__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__32400_33606 = cljs.core.seq(bindings);
var chunk__32401_33607 = null;
var count__32402_33608 = (0);
var i__32403_33609 = (0);
while(true){
if((i__32403_33609 < count__32402_33608)){
var map__32412_33613 = chunk__32401_33607.cljs$core$IIndexed$_nth$arity$2(null,i__32403_33609);
var map__32412_33618__$1 = (((((!((map__32412_33613 == null))))?(((((map__32412_33613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32412_33613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32412_33613):map__32412_33613);
var binding_33619 = map__32412_33618__$1;
var init_33620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32412_33618__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_33619)," = ",init_33620,";");


var G__33625 = seq__32400_33606;
var G__33626 = chunk__32401_33607;
var G__33627 = count__32402_33608;
var G__33628 = (i__32403_33609 + (1));
seq__32400_33606 = G__33625;
chunk__32401_33607 = G__33626;
count__32402_33608 = G__33627;
i__32403_33609 = G__33628;
continue;
} else {
var temp__5735__auto___33629 = cljs.core.seq(seq__32400_33606);
if(temp__5735__auto___33629){
var seq__32400_33630__$1 = temp__5735__auto___33629;
if(cljs.core.chunked_seq_QMARK_(seq__32400_33630__$1)){
var c__4556__auto___33631 = cljs.core.chunk_first(seq__32400_33630__$1);
var G__33636 = cljs.core.chunk_rest(seq__32400_33630__$1);
var G__33637 = c__4556__auto___33631;
var G__33638 = cljs.core.count(c__4556__auto___33631);
var G__33639 = (0);
seq__32400_33606 = G__33636;
chunk__32401_33607 = G__33637;
count__32402_33608 = G__33638;
i__32403_33609 = G__33639;
continue;
} else {
var map__32414_33640 = cljs.core.first(seq__32400_33630__$1);
var map__32414_33641__$1 = (((((!((map__32414_33640 == null))))?(((((map__32414_33640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32414_33640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32414_33640):map__32414_33640);
var binding_33642 = map__32414_33641__$1;
var init_33643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32414_33641__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_33642)," = ",init_33643,";");


var G__33646 = cljs.core.next(seq__32400_33630__$1);
var G__33647 = null;
var G__33648 = (0);
var G__33649 = (0);
seq__32400_33606 = G__33646;
chunk__32401_33607 = G__33647;
count__32402_33608 = G__33648;
i__32403_33609 = G__33649;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__32418){
var map__32419 = p__32418;
var map__32419__$1 = (((((!((map__32419 == null))))?(((((map__32419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32419):map__32419);
var expr = map__32419__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32419__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32419__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32419__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__32432 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__32432.cljs$core$IFn$_invoke$arity$1 ? fexpr__32432.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__32432.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__32438 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__32438.cljs$core$IFn$_invoke$arity$1 ? fexpr__32438.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__32438.call(null,first_arg_tag));
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
var vec__32421 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__32416_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32416_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__32417_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32417_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32421,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32421,(1),null);
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
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
var pimpl_33698 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_33698,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_33699 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_33699,args)),(((mfa_33699 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_33699,args)),"], 0))"], 0));
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
var G__32451 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__32450 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__32450.cljs$core$IFn$_invoke$arity$1 ? fexpr__32450.cljs$core$IFn$_invoke$arity$1(G__32451) : fexpr__32450.call(null,G__32451));
} else {
return and__4115__auto__;
}
})())){
var fprop_33703 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_33703," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_33703,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_33703," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_33703,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__32456){
var map__32457 = p__32456;
var map__32457__$1 = (((((!((map__32457 == null))))?(((((map__32457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32457):map__32457);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32457__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32457__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32457__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__32459){
var map__32460 = p__32459;
var map__32460__$1 = (((((!((map__32460 == null))))?(((((map__32460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32460):map__32460);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32460__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32460__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32460__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
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
var map__32475 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__32475__$1 = (((((!((map__32475 == null))))?(((((map__32475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32475):map__32475);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32475__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32475__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__32476 = options;
var map__32476__$1 = (((((!((map__32476 == null))))?(((((map__32476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32476):map__32476);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__32477 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__32507 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__32507__$1 = (((((!((map__32507 == null))))?(((((map__32507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32507):map__32507);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32507__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32507__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32477,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32477,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__32509_33709 = cljs.core.seq(libs_to_load);
var chunk__32510_33710 = null;
var count__32511_33711 = (0);
var i__32512_33712 = (0);
while(true){
if((i__32512_33712 < count__32511_33711)){
var lib_33713 = chunk__32510_33710.cljs$core$IIndexed$_nth$arity$2(null,i__32512_33712);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_33713)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_33713),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33713),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_33713),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33713),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_33713,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33713),"');");
}

}
}
}


var G__33717 = seq__32509_33709;
var G__33718 = chunk__32510_33710;
var G__33719 = count__32511_33711;
var G__33720 = (i__32512_33712 + (1));
seq__32509_33709 = G__33717;
chunk__32510_33710 = G__33718;
count__32511_33711 = G__33719;
i__32512_33712 = G__33720;
continue;
} else {
var temp__5735__auto___33721 = cljs.core.seq(seq__32509_33709);
if(temp__5735__auto___33721){
var seq__32509_33722__$1 = temp__5735__auto___33721;
if(cljs.core.chunked_seq_QMARK_(seq__32509_33722__$1)){
var c__4556__auto___33723 = cljs.core.chunk_first(seq__32509_33722__$1);
var G__33724 = cljs.core.chunk_rest(seq__32509_33722__$1);
var G__33725 = c__4556__auto___33723;
var G__33726 = cljs.core.count(c__4556__auto___33723);
var G__33727 = (0);
seq__32509_33709 = G__33724;
chunk__32510_33710 = G__33725;
count__32511_33711 = G__33726;
i__32512_33712 = G__33727;
continue;
} else {
var lib_33728 = cljs.core.first(seq__32509_33722__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_33728)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_33728),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33728),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_33728),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33728),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_33728,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33728),"');");
}

}
}
}


var G__33729 = cljs.core.next(seq__32509_33722__$1);
var G__33730 = null;
var G__33731 = (0);
var G__33732 = (0);
seq__32509_33709 = G__33729;
chunk__32510_33710 = G__33730;
count__32511_33711 = G__33731;
i__32512_33712 = G__33732;
continue;
}
} else {
}
}
break;
}

var seq__32525_33733 = cljs.core.seq(node_libs);
var chunk__32526_33734 = null;
var count__32527_33735 = (0);
var i__32528_33736 = (0);
while(true){
if((i__32528_33736 < count__32527_33735)){
var lib_33737 = chunk__32526_33734.cljs$core$IIndexed$_nth$arity$2(null,i__32528_33736);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_33737)," = require('",lib_33737,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__33738 = seq__32525_33733;
var G__33739 = chunk__32526_33734;
var G__33740 = count__32527_33735;
var G__33741 = (i__32528_33736 + (1));
seq__32525_33733 = G__33738;
chunk__32526_33734 = G__33739;
count__32527_33735 = G__33740;
i__32528_33736 = G__33741;
continue;
} else {
var temp__5735__auto___33742 = cljs.core.seq(seq__32525_33733);
if(temp__5735__auto___33742){
var seq__32525_33743__$1 = temp__5735__auto___33742;
if(cljs.core.chunked_seq_QMARK_(seq__32525_33743__$1)){
var c__4556__auto___33744 = cljs.core.chunk_first(seq__32525_33743__$1);
var G__33745 = cljs.core.chunk_rest(seq__32525_33743__$1);
var G__33746 = c__4556__auto___33744;
var G__33747 = cljs.core.count(c__4556__auto___33744);
var G__33748 = (0);
seq__32525_33733 = G__33745;
chunk__32526_33734 = G__33746;
count__32527_33735 = G__33747;
i__32528_33736 = G__33748;
continue;
} else {
var lib_33749 = cljs.core.first(seq__32525_33743__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_33749)," = require('",lib_33749,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__33750 = cljs.core.next(seq__32525_33743__$1);
var G__33751 = null;
var G__33752 = (0);
var G__33753 = (0);
seq__32525_33733 = G__33750;
chunk__32526_33734 = G__33751;
count__32527_33735 = G__33752;
i__32528_33736 = G__33753;
continue;
}
} else {
}
}
break;
}

var seq__32546_33754 = cljs.core.seq(global_exports_libs);
var chunk__32547_33755 = null;
var count__32548_33756 = (0);
var i__32549_33757 = (0);
while(true){
if((i__32549_33757 < count__32548_33756)){
var lib_33759 = chunk__32547_33755.cljs$core$IIndexed$_nth$arity$2(null,i__32549_33757);
var map__32556_33760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_33759));
var map__32556_33761__$1 = (((((!((map__32556_33760 == null))))?(((((map__32556_33760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32556_33760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32556_33760):map__32556_33760);
var global_exports_33762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32556_33761__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_33762,lib_33759);


var G__33763 = seq__32546_33754;
var G__33764 = chunk__32547_33755;
var G__33765 = count__32548_33756;
var G__33766 = (i__32549_33757 + (1));
seq__32546_33754 = G__33763;
chunk__32547_33755 = G__33764;
count__32548_33756 = G__33765;
i__32549_33757 = G__33766;
continue;
} else {
var temp__5735__auto___33767 = cljs.core.seq(seq__32546_33754);
if(temp__5735__auto___33767){
var seq__32546_33768__$1 = temp__5735__auto___33767;
if(cljs.core.chunked_seq_QMARK_(seq__32546_33768__$1)){
var c__4556__auto___33769 = cljs.core.chunk_first(seq__32546_33768__$1);
var G__33770 = cljs.core.chunk_rest(seq__32546_33768__$1);
var G__33771 = c__4556__auto___33769;
var G__33772 = cljs.core.count(c__4556__auto___33769);
var G__33773 = (0);
seq__32546_33754 = G__33770;
chunk__32547_33755 = G__33771;
count__32548_33756 = G__33772;
i__32549_33757 = G__33773;
continue;
} else {
var lib_33774 = cljs.core.first(seq__32546_33768__$1);
var map__32558_33775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_33774));
var map__32558_33776__$1 = (((((!((map__32558_33775 == null))))?(((((map__32558_33775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32558_33775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32558_33775):map__32558_33775);
var global_exports_33777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32558_33776__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_33777,lib_33774);


var G__33778 = cljs.core.next(seq__32546_33768__$1);
var G__33779 = null;
var G__33780 = (0);
var G__33781 = (0);
seq__32546_33754 = G__33778;
chunk__32547_33755 = G__33779;
count__32548_33756 = G__33780;
i__32549_33757 = G__33781;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__32578){
var map__32579 = p__32578;
var map__32579__$1 = (((((!((map__32579 == null))))?(((((map__32579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32579):map__32579);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32579__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32579__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32579__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32579__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32579__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32579__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32579__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__32588){
var map__32589 = p__32588;
var map__32589__$1 = (((((!((map__32589 == null))))?(((((map__32589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32589):map__32589);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32589__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32589__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32589__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32589__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32589__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32589__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32589__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__32591){
var map__32592 = p__32591;
var map__32592__$1 = (((((!((map__32592 == null))))?(((((map__32592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32592):map__32592);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32592__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32592__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32592__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32592__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32592__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__32596_33783 = cljs.core.seq(protocols);
var chunk__32597_33784 = null;
var count__32598_33785 = (0);
var i__32599_33786 = (0);
while(true){
if((i__32599_33786 < count__32598_33785)){
var protocol_33787 = chunk__32597_33784.cljs$core$IIndexed$_nth$arity$2(null,i__32599_33786);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33787)),"}");


var G__33788 = seq__32596_33783;
var G__33789 = chunk__32597_33784;
var G__33790 = count__32598_33785;
var G__33791 = (i__32599_33786 + (1));
seq__32596_33783 = G__33788;
chunk__32597_33784 = G__33789;
count__32598_33785 = G__33790;
i__32599_33786 = G__33791;
continue;
} else {
var temp__5735__auto___33792 = cljs.core.seq(seq__32596_33783);
if(temp__5735__auto___33792){
var seq__32596_33793__$1 = temp__5735__auto___33792;
if(cljs.core.chunked_seq_QMARK_(seq__32596_33793__$1)){
var c__4556__auto___33794 = cljs.core.chunk_first(seq__32596_33793__$1);
var G__33795 = cljs.core.chunk_rest(seq__32596_33793__$1);
var G__33796 = c__4556__auto___33794;
var G__33797 = cljs.core.count(c__4556__auto___33794);
var G__33798 = (0);
seq__32596_33783 = G__33795;
chunk__32597_33784 = G__33796;
count__32598_33785 = G__33797;
i__32599_33786 = G__33798;
continue;
} else {
var protocol_33799 = cljs.core.first(seq__32596_33793__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33799)),"}");


var G__33800 = cljs.core.next(seq__32596_33793__$1);
var G__33801 = null;
var G__33802 = (0);
var G__33803 = (0);
seq__32596_33783 = G__33800;
chunk__32597_33784 = G__33801;
count__32598_33785 = G__33802;
i__32599_33786 = G__33803;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__32600_33804 = cljs.core.seq(fields__$1);
var chunk__32601_33805 = null;
var count__32602_33806 = (0);
var i__32603_33807 = (0);
while(true){
if((i__32603_33807 < count__32602_33806)){
var fld_33808 = chunk__32601_33805.cljs$core$IIndexed$_nth$arity$2(null,i__32603_33807);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_33808," = ",fld_33808,";");


var G__33809 = seq__32600_33804;
var G__33810 = chunk__32601_33805;
var G__33811 = count__32602_33806;
var G__33812 = (i__32603_33807 + (1));
seq__32600_33804 = G__33809;
chunk__32601_33805 = G__33810;
count__32602_33806 = G__33811;
i__32603_33807 = G__33812;
continue;
} else {
var temp__5735__auto___33813 = cljs.core.seq(seq__32600_33804);
if(temp__5735__auto___33813){
var seq__32600_33814__$1 = temp__5735__auto___33813;
if(cljs.core.chunked_seq_QMARK_(seq__32600_33814__$1)){
var c__4556__auto___33815 = cljs.core.chunk_first(seq__32600_33814__$1);
var G__33816 = cljs.core.chunk_rest(seq__32600_33814__$1);
var G__33817 = c__4556__auto___33815;
var G__33818 = cljs.core.count(c__4556__auto___33815);
var G__33819 = (0);
seq__32600_33804 = G__33816;
chunk__32601_33805 = G__33817;
count__32602_33806 = G__33818;
i__32603_33807 = G__33819;
continue;
} else {
var fld_33820 = cljs.core.first(seq__32600_33814__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_33820," = ",fld_33820,";");


var G__33821 = cljs.core.next(seq__32600_33814__$1);
var G__33822 = null;
var G__33823 = (0);
var G__33824 = (0);
seq__32600_33804 = G__33821;
chunk__32601_33805 = G__33822;
count__32602_33806 = G__33823;
i__32603_33807 = G__33824;
continue;
}
} else {
}
}
break;
}

var seq__32616_33825 = cljs.core.seq(pmasks);
var chunk__32617_33826 = null;
var count__32618_33827 = (0);
var i__32619_33828 = (0);
while(true){
if((i__32619_33828 < count__32618_33827)){
var vec__32628_33829 = chunk__32617_33826.cljs$core$IIndexed$_nth$arity$2(null,i__32619_33828);
var pno_33830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628_33829,(0),null);
var pmask_33831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628_33829,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_33830,"$ = ",pmask_33831,";");


var G__33832 = seq__32616_33825;
var G__33833 = chunk__32617_33826;
var G__33834 = count__32618_33827;
var G__33835 = (i__32619_33828 + (1));
seq__32616_33825 = G__33832;
chunk__32617_33826 = G__33833;
count__32618_33827 = G__33834;
i__32619_33828 = G__33835;
continue;
} else {
var temp__5735__auto___33836 = cljs.core.seq(seq__32616_33825);
if(temp__5735__auto___33836){
var seq__32616_33837__$1 = temp__5735__auto___33836;
if(cljs.core.chunked_seq_QMARK_(seq__32616_33837__$1)){
var c__4556__auto___33838 = cljs.core.chunk_first(seq__32616_33837__$1);
var G__33839 = cljs.core.chunk_rest(seq__32616_33837__$1);
var G__33840 = c__4556__auto___33838;
var G__33841 = cljs.core.count(c__4556__auto___33838);
var G__33842 = (0);
seq__32616_33825 = G__33839;
chunk__32617_33826 = G__33840;
count__32618_33827 = G__33841;
i__32619_33828 = G__33842;
continue;
} else {
var vec__32631_33843 = cljs.core.first(seq__32616_33837__$1);
var pno_33844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32631_33843,(0),null);
var pmask_33845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32631_33843,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_33844,"$ = ",pmask_33845,";");


var G__33846 = cljs.core.next(seq__32616_33837__$1);
var G__33847 = null;
var G__33848 = (0);
var G__33849 = (0);
seq__32616_33825 = G__33846;
chunk__32617_33826 = G__33847;
count__32618_33827 = G__33848;
i__32619_33828 = G__33849;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__32634){
var map__32635 = p__32634;
var map__32635__$1 = (((((!((map__32635 == null))))?(((((map__32635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32635):map__32635);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__32637_33850 = cljs.core.seq(protocols);
var chunk__32638_33851 = null;
var count__32639_33852 = (0);
var i__32640_33853 = (0);
while(true){
if((i__32640_33853 < count__32639_33852)){
var protocol_33854 = chunk__32638_33851.cljs$core$IIndexed$_nth$arity$2(null,i__32640_33853);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33854)),"}");


var G__33855 = seq__32637_33850;
var G__33856 = chunk__32638_33851;
var G__33857 = count__32639_33852;
var G__33858 = (i__32640_33853 + (1));
seq__32637_33850 = G__33855;
chunk__32638_33851 = G__33856;
count__32639_33852 = G__33857;
i__32640_33853 = G__33858;
continue;
} else {
var temp__5735__auto___33859 = cljs.core.seq(seq__32637_33850);
if(temp__5735__auto___33859){
var seq__32637_33860__$1 = temp__5735__auto___33859;
if(cljs.core.chunked_seq_QMARK_(seq__32637_33860__$1)){
var c__4556__auto___33861 = cljs.core.chunk_first(seq__32637_33860__$1);
var G__33862 = cljs.core.chunk_rest(seq__32637_33860__$1);
var G__33863 = c__4556__auto___33861;
var G__33864 = cljs.core.count(c__4556__auto___33861);
var G__33865 = (0);
seq__32637_33850 = G__33862;
chunk__32638_33851 = G__33863;
count__32639_33852 = G__33864;
i__32640_33853 = G__33865;
continue;
} else {
var protocol_33866 = cljs.core.first(seq__32637_33860__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33866)),"}");


var G__33867 = cljs.core.next(seq__32637_33860__$1);
var G__33868 = null;
var G__33869 = (0);
var G__33870 = (0);
seq__32637_33850 = G__33867;
chunk__32638_33851 = G__33868;
count__32639_33852 = G__33869;
i__32640_33853 = G__33870;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__32643_33871 = cljs.core.seq(fields__$1);
var chunk__32644_33872 = null;
var count__32645_33873 = (0);
var i__32646_33874 = (0);
while(true){
if((i__32646_33874 < count__32645_33873)){
var fld_33875 = chunk__32644_33872.cljs$core$IIndexed$_nth$arity$2(null,i__32646_33874);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_33875," = ",fld_33875,";");


var G__33876 = seq__32643_33871;
var G__33877 = chunk__32644_33872;
var G__33878 = count__32645_33873;
var G__33879 = (i__32646_33874 + (1));
seq__32643_33871 = G__33876;
chunk__32644_33872 = G__33877;
count__32645_33873 = G__33878;
i__32646_33874 = G__33879;
continue;
} else {
var temp__5735__auto___33880 = cljs.core.seq(seq__32643_33871);
if(temp__5735__auto___33880){
var seq__32643_33881__$1 = temp__5735__auto___33880;
if(cljs.core.chunked_seq_QMARK_(seq__32643_33881__$1)){
var c__4556__auto___33882 = cljs.core.chunk_first(seq__32643_33881__$1);
var G__33883 = cljs.core.chunk_rest(seq__32643_33881__$1);
var G__33884 = c__4556__auto___33882;
var G__33885 = cljs.core.count(c__4556__auto___33882);
var G__33886 = (0);
seq__32643_33871 = G__33883;
chunk__32644_33872 = G__33884;
count__32645_33873 = G__33885;
i__32646_33874 = G__33886;
continue;
} else {
var fld_33887 = cljs.core.first(seq__32643_33881__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_33887," = ",fld_33887,";");


var G__33888 = cljs.core.next(seq__32643_33881__$1);
var G__33889 = null;
var G__33890 = (0);
var G__33891 = (0);
seq__32643_33871 = G__33888;
chunk__32644_33872 = G__33889;
count__32645_33873 = G__33890;
i__32646_33874 = G__33891;
continue;
}
} else {
}
}
break;
}

var seq__32662_33892 = cljs.core.seq(pmasks);
var chunk__32663_33893 = null;
var count__32664_33894 = (0);
var i__32665_33895 = (0);
while(true){
if((i__32665_33895 < count__32664_33894)){
var vec__32677_33896 = chunk__32663_33893.cljs$core$IIndexed$_nth$arity$2(null,i__32665_33895);
var pno_33897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32677_33896,(0),null);
var pmask_33898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32677_33896,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_33897,"$ = ",pmask_33898,";");


var G__33899 = seq__32662_33892;
var G__33900 = chunk__32663_33893;
var G__33901 = count__32664_33894;
var G__33902 = (i__32665_33895 + (1));
seq__32662_33892 = G__33899;
chunk__32663_33893 = G__33900;
count__32664_33894 = G__33901;
i__32665_33895 = G__33902;
continue;
} else {
var temp__5735__auto___33903 = cljs.core.seq(seq__32662_33892);
if(temp__5735__auto___33903){
var seq__32662_33904__$1 = temp__5735__auto___33903;
if(cljs.core.chunked_seq_QMARK_(seq__32662_33904__$1)){
var c__4556__auto___33905 = cljs.core.chunk_first(seq__32662_33904__$1);
var G__33906 = cljs.core.chunk_rest(seq__32662_33904__$1);
var G__33907 = c__4556__auto___33905;
var G__33908 = cljs.core.count(c__4556__auto___33905);
var G__33909 = (0);
seq__32662_33892 = G__33906;
chunk__32663_33893 = G__33907;
count__32664_33894 = G__33908;
i__32665_33895 = G__33909;
continue;
} else {
var vec__32682_33910 = cljs.core.first(seq__32662_33904__$1);
var pno_33911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32682_33910,(0),null);
var pmask_33912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32682_33910,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_33911,"$ = ",pmask_33912,";");


var G__33913 = cljs.core.next(seq__32662_33904__$1);
var G__33914 = null;
var G__33915 = (0);
var G__33916 = (0);
seq__32662_33892 = G__33913;
chunk__32663_33893 = G__33914;
count__32664_33894 = G__33915;
i__32665_33895 = G__33916;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__32685){
var map__32686 = p__32685;
var map__32686__$1 = (((((!((map__32686 == null))))?(((((map__32686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32686):map__32686);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32686__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32686__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32686__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32686__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32686__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__32688){
var map__32689 = p__32688;
var map__32689__$1 = (((((!((map__32689 == null))))?(((((map__32689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32689):map__32689);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32689__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32689__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32689__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32689__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32689__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__31859__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__31859__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__32697 = cljs.core.seq(table);
var chunk__32698 = null;
var count__32699 = (0);
var i__32700 = (0);
while(true){
if((i__32700 < count__32699)){
var vec__32707 = chunk__32698.cljs$core$IIndexed$_nth$arity$2(null,i__32700);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32707,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32707,(1),null);
var ns_33918 = cljs.core.namespace(sym);
var name_33919 = cljs.core.name(sym);
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


var G__33920 = seq__32697;
var G__33921 = chunk__32698;
var G__33922 = count__32699;
var G__33923 = (i__32700 + (1));
seq__32697 = G__33920;
chunk__32698 = G__33921;
count__32699 = G__33922;
i__32700 = G__33923;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32697);
if(temp__5735__auto__){
var seq__32697__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32697__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32697__$1);
var G__33924 = cljs.core.chunk_rest(seq__32697__$1);
var G__33925 = c__4556__auto__;
var G__33926 = cljs.core.count(c__4556__auto__);
var G__33927 = (0);
seq__32697 = G__33924;
chunk__32698 = G__33925;
count__32699 = G__33926;
i__32700 = G__33927;
continue;
} else {
var vec__32710 = cljs.core.first(seq__32697__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710,(1),null);
var ns_33928 = cljs.core.namespace(sym);
var name_33929 = cljs.core.name(sym);
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


var G__33930 = cljs.core.next(seq__32697__$1);
var G__33931 = null;
var G__33932 = (0);
var G__33933 = (0);
seq__32697 = G__33930;
chunk__32698 = G__33931;
count__32699 = G__33932;
i__32700 = G__33933;
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
var G__32717 = arguments.length;
switch (G__32717) {
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
var k_33936 = cljs.core.first(ks);
var vec__32720_33937 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_33936);
var top_33938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32720_33937,(0),null);
var prefix_SINGLEQUOTE__33939 = vec__32720_33937;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_33936)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__33939) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_33938)) || (cljs.core.contains_QMARK_(known_externs,top_33938)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__33939)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_33938);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__33939)),";");
}
} else {
}

var m_33940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_33936);
if(cljs.core.empty_QMARK_(m_33940)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__33939,m_33940,top_level,known_externs);
}

var G__33941 = cljs.core.next(ks);
ks = G__33941;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map

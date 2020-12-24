goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36694 = arguments.length;
var i__4737__auto___36695 = (0);
while(true){
if((i__4737__auto___36695 < len__4736__auto___36694)){
args__4742__auto__.push((arguments[i__4737__auto___36695]));

var G__36696 = (i__4737__auto___36695 + (1));
i__4737__auto___36695 = G__36696;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36434){
var G__36435 = cljs.core.first(seq36434);
var seq36434__$1 = cljs.core.next(seq36434);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36435,seq36434__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36436 = cljs.core.seq(sources);
var chunk__36437 = null;
var count__36438 = (0);
var i__36439 = (0);
while(true){
if((i__36439 < count__36438)){
var map__36453 = chunk__36437.cljs$core$IIndexed$_nth$arity$2(null,i__36439);
var map__36453__$1 = (((((!((map__36453 == null))))?(((((map__36453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36453):map__36453);
var src = map__36453__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36455){var e_36697 = e36455;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36697);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36697.message)].join('')));
}

var G__36698 = seq__36436;
var G__36699 = chunk__36437;
var G__36700 = count__36438;
var G__36701 = (i__36439 + (1));
seq__36436 = G__36698;
chunk__36437 = G__36699;
count__36438 = G__36700;
i__36439 = G__36701;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36436);
if(temp__5735__auto__){
var seq__36436__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36436__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36436__$1);
var G__36705 = cljs.core.chunk_rest(seq__36436__$1);
var G__36706 = c__4556__auto__;
var G__36707 = cljs.core.count(c__4556__auto__);
var G__36708 = (0);
seq__36436 = G__36705;
chunk__36437 = G__36706;
count__36438 = G__36707;
i__36439 = G__36708;
continue;
} else {
var map__36459 = cljs.core.first(seq__36436__$1);
var map__36459__$1 = (((((!((map__36459 == null))))?(((((map__36459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36459):map__36459);
var src = map__36459__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36459__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36459__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36459__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36459__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36464){var e_36710 = e36464;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36710);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36710.message)].join('')));
}

var G__36711 = cljs.core.next(seq__36436__$1);
var G__36712 = null;
var G__36713 = (0);
var G__36714 = (0);
seq__36436 = G__36711;
chunk__36437 = G__36712;
count__36438 = G__36713;
i__36439 = G__36714;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36466 = cljs.core.seq(js_requires);
var chunk__36467 = null;
var count__36468 = (0);
var i__36469 = (0);
while(true){
if((i__36469 < count__36468)){
var js_ns = chunk__36467.cljs$core$IIndexed$_nth$arity$2(null,i__36469);
var require_str_36717 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36717);


var G__36718 = seq__36466;
var G__36719 = chunk__36467;
var G__36720 = count__36468;
var G__36721 = (i__36469 + (1));
seq__36466 = G__36718;
chunk__36467 = G__36719;
count__36468 = G__36720;
i__36469 = G__36721;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36466);
if(temp__5735__auto__){
var seq__36466__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36466__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36466__$1);
var G__36722 = cljs.core.chunk_rest(seq__36466__$1);
var G__36723 = c__4556__auto__;
var G__36724 = cljs.core.count(c__4556__auto__);
var G__36725 = (0);
seq__36466 = G__36722;
chunk__36467 = G__36723;
count__36468 = G__36724;
i__36469 = G__36725;
continue;
} else {
var js_ns = cljs.core.first(seq__36466__$1);
var require_str_36726 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36726);


var G__36727 = cljs.core.next(seq__36466__$1);
var G__36728 = null;
var G__36729 = (0);
var G__36730 = (0);
seq__36466 = G__36727;
chunk__36467 = G__36728;
count__36468 = G__36729;
i__36469 = G__36730;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36471){
var map__36472 = p__36471;
var map__36472__$1 = (((((!((map__36472 == null))))?(((((map__36472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36472):map__36472);
var msg = map__36472__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36476(s__36477){
return (new cljs.core.LazySeq(null,(function (){
var s__36477__$1 = s__36477;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36477__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36482 = cljs.core.first(xs__6292__auto__);
var map__36482__$1 = (((((!((map__36482 == null))))?(((((map__36482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36482):map__36482);
var src = map__36482__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36482__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36482__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36477__$1,map__36482,map__36482__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36472,map__36472__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36476_$_iter__36478(s__36479){
return (new cljs.core.LazySeq(null,((function (s__36477__$1,map__36482,map__36482__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36472,map__36472__$1,msg,info,reload_info){
return (function (){
var s__36479__$1 = s__36479;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36479__$1);
if(temp__5735__auto____$1){
var s__36479__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36479__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36479__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36481 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36480 = (0);
while(true){
if((i__36480 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36480);
cljs.core.chunk_append(b__36481,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36731 = (i__36480 + (1));
i__36480 = G__36731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36481),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36476_$_iter__36478(cljs.core.chunk_rest(s__36479__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36481),null);
}
} else {
var warning = cljs.core.first(s__36479__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36476_$_iter__36478(cljs.core.rest(s__36479__$2)));
}
} else {
return null;
}
break;
}
});})(s__36477__$1,map__36482,map__36482__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36472,map__36472__$1,msg,info,reload_info))
,null,null));
});})(s__36477__$1,map__36482,map__36482__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36472,map__36472__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36476(cljs.core.rest(s__36477__$1)));
} else {
var G__36732 = cljs.core.rest(s__36477__$1);
s__36477__$1 = G__36732;
continue;
}
} else {
var G__36733 = cljs.core.rest(s__36477__$1);
s__36477__$1 = G__36733;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36484_36734 = cljs.core.seq(warnings);
var chunk__36485_36735 = null;
var count__36486_36736 = (0);
var i__36487_36737 = (0);
while(true){
if((i__36487_36737 < count__36486_36736)){
var map__36492_36738 = chunk__36485_36735.cljs$core$IIndexed$_nth$arity$2(null,i__36487_36737);
var map__36492_36739__$1 = (((((!((map__36492_36738 == null))))?(((((map__36492_36738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36492_36738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36492_36738):map__36492_36738);
var w_36740 = map__36492_36739__$1;
var msg_36741__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36492_36739__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36492_36739__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36492_36739__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36492_36739__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36744)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36742),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36743),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36741__$1)].join(''));


var G__36745 = seq__36484_36734;
var G__36746 = chunk__36485_36735;
var G__36747 = count__36486_36736;
var G__36748 = (i__36487_36737 + (1));
seq__36484_36734 = G__36745;
chunk__36485_36735 = G__36746;
count__36486_36736 = G__36747;
i__36487_36737 = G__36748;
continue;
} else {
var temp__5735__auto___36749 = cljs.core.seq(seq__36484_36734);
if(temp__5735__auto___36749){
var seq__36484_36750__$1 = temp__5735__auto___36749;
if(cljs.core.chunked_seq_QMARK_(seq__36484_36750__$1)){
var c__4556__auto___36751 = cljs.core.chunk_first(seq__36484_36750__$1);
var G__36752 = cljs.core.chunk_rest(seq__36484_36750__$1);
var G__36753 = c__4556__auto___36751;
var G__36754 = cljs.core.count(c__4556__auto___36751);
var G__36755 = (0);
seq__36484_36734 = G__36752;
chunk__36485_36735 = G__36753;
count__36486_36736 = G__36754;
i__36487_36737 = G__36755;
continue;
} else {
var map__36494_36756 = cljs.core.first(seq__36484_36750__$1);
var map__36494_36757__$1 = (((((!((map__36494_36756 == null))))?(((((map__36494_36756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36494_36756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36494_36756):map__36494_36756);
var w_36758 = map__36494_36757__$1;
var msg_36759__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36494_36757__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36494_36757__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36494_36757__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36494_36757__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36762)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36760),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36761),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36759__$1)].join(''));


var G__36763 = cljs.core.next(seq__36484_36750__$1);
var G__36764 = null;
var G__36765 = (0);
var G__36766 = (0);
seq__36484_36734 = G__36763;
chunk__36485_36735 = G__36764;
count__36486_36736 = G__36765;
i__36487_36737 = G__36766;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36470_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36470_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36496){
var map__36498 = p__36496;
var map__36498__$1 = (((((!((map__36498 == null))))?(((((map__36498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36498):map__36498);
var msg = map__36498__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36498__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36504 = cljs.core.seq(updates);
var chunk__36506 = null;
var count__36507 = (0);
var i__36508 = (0);
while(true){
if((i__36508 < count__36507)){
var path = chunk__36506.cljs$core$IIndexed$_nth$arity$2(null,i__36508);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36554_36774 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36558_36775 = null;
var count__36559_36776 = (0);
var i__36560_36777 = (0);
while(true){
if((i__36560_36777 < count__36559_36776)){
var node_36778 = chunk__36558_36775.cljs$core$IIndexed$_nth$arity$2(null,i__36560_36777);
if(cljs.core.not(node_36778.shadow$old)){
var path_match_36779 = shadow.cljs.devtools.client.browser.match_paths(node_36778.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36779)){
var new_link_36780 = (function (){var G__36569 = node_36778.cloneNode(true);
G__36569.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36779),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36569;
})();
(node_36778.shadow$old = true);

(new_link_36780.onload = ((function (seq__36554_36774,chunk__36558_36775,count__36559_36776,i__36560_36777,seq__36504,chunk__36506,count__36507,i__36508,new_link_36780,path_match_36779,node_36778,path,map__36498,map__36498__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36778);
});})(seq__36554_36774,chunk__36558_36775,count__36559_36776,i__36560_36777,seq__36504,chunk__36506,count__36507,i__36508,new_link_36780,path_match_36779,node_36778,path,map__36498,map__36498__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36779], 0));

goog.dom.insertSiblingAfter(new_link_36780,node_36778);


var G__36781 = seq__36554_36774;
var G__36782 = chunk__36558_36775;
var G__36783 = count__36559_36776;
var G__36784 = (i__36560_36777 + (1));
seq__36554_36774 = G__36781;
chunk__36558_36775 = G__36782;
count__36559_36776 = G__36783;
i__36560_36777 = G__36784;
continue;
} else {
var G__36785 = seq__36554_36774;
var G__36786 = chunk__36558_36775;
var G__36787 = count__36559_36776;
var G__36788 = (i__36560_36777 + (1));
seq__36554_36774 = G__36785;
chunk__36558_36775 = G__36786;
count__36559_36776 = G__36787;
i__36560_36777 = G__36788;
continue;
}
} else {
var G__36789 = seq__36554_36774;
var G__36790 = chunk__36558_36775;
var G__36791 = count__36559_36776;
var G__36792 = (i__36560_36777 + (1));
seq__36554_36774 = G__36789;
chunk__36558_36775 = G__36790;
count__36559_36776 = G__36791;
i__36560_36777 = G__36792;
continue;
}
} else {
var temp__5735__auto___36793 = cljs.core.seq(seq__36554_36774);
if(temp__5735__auto___36793){
var seq__36554_36794__$1 = temp__5735__auto___36793;
if(cljs.core.chunked_seq_QMARK_(seq__36554_36794__$1)){
var c__4556__auto___36795 = cljs.core.chunk_first(seq__36554_36794__$1);
var G__36796 = cljs.core.chunk_rest(seq__36554_36794__$1);
var G__36797 = c__4556__auto___36795;
var G__36798 = cljs.core.count(c__4556__auto___36795);
var G__36799 = (0);
seq__36554_36774 = G__36796;
chunk__36558_36775 = G__36797;
count__36559_36776 = G__36798;
i__36560_36777 = G__36799;
continue;
} else {
var node_36803 = cljs.core.first(seq__36554_36794__$1);
if(cljs.core.not(node_36803.shadow$old)){
var path_match_36804 = shadow.cljs.devtools.client.browser.match_paths(node_36803.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36804)){
var new_link_36805 = (function (){var G__36572 = node_36803.cloneNode(true);
G__36572.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36804),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36572;
})();
(node_36803.shadow$old = true);

(new_link_36805.onload = ((function (seq__36554_36774,chunk__36558_36775,count__36559_36776,i__36560_36777,seq__36504,chunk__36506,count__36507,i__36508,new_link_36805,path_match_36804,node_36803,seq__36554_36794__$1,temp__5735__auto___36793,path,map__36498,map__36498__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36803);
});})(seq__36554_36774,chunk__36558_36775,count__36559_36776,i__36560_36777,seq__36504,chunk__36506,count__36507,i__36508,new_link_36805,path_match_36804,node_36803,seq__36554_36794__$1,temp__5735__auto___36793,path,map__36498,map__36498__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36804], 0));

goog.dom.insertSiblingAfter(new_link_36805,node_36803);


var G__36806 = cljs.core.next(seq__36554_36794__$1);
var G__36807 = null;
var G__36808 = (0);
var G__36809 = (0);
seq__36554_36774 = G__36806;
chunk__36558_36775 = G__36807;
count__36559_36776 = G__36808;
i__36560_36777 = G__36809;
continue;
} else {
var G__36810 = cljs.core.next(seq__36554_36794__$1);
var G__36811 = null;
var G__36812 = (0);
var G__36813 = (0);
seq__36554_36774 = G__36810;
chunk__36558_36775 = G__36811;
count__36559_36776 = G__36812;
i__36560_36777 = G__36813;
continue;
}
} else {
var G__36814 = cljs.core.next(seq__36554_36794__$1);
var G__36815 = null;
var G__36816 = (0);
var G__36817 = (0);
seq__36554_36774 = G__36814;
chunk__36558_36775 = G__36815;
count__36559_36776 = G__36816;
i__36560_36777 = G__36817;
continue;
}
}
} else {
}
}
break;
}


var G__36818 = seq__36504;
var G__36819 = chunk__36506;
var G__36820 = count__36507;
var G__36821 = (i__36508 + (1));
seq__36504 = G__36818;
chunk__36506 = G__36819;
count__36507 = G__36820;
i__36508 = G__36821;
continue;
} else {
var G__36822 = seq__36504;
var G__36823 = chunk__36506;
var G__36824 = count__36507;
var G__36825 = (i__36508 + (1));
seq__36504 = G__36822;
chunk__36506 = G__36823;
count__36507 = G__36824;
i__36508 = G__36825;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36504);
if(temp__5735__auto__){
var seq__36504__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36504__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36504__$1);
var G__36826 = cljs.core.chunk_rest(seq__36504__$1);
var G__36827 = c__4556__auto__;
var G__36828 = cljs.core.count(c__4556__auto__);
var G__36829 = (0);
seq__36504 = G__36826;
chunk__36506 = G__36827;
count__36507 = G__36828;
i__36508 = G__36829;
continue;
} else {
var path = cljs.core.first(seq__36504__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36573_36830 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36577_36831 = null;
var count__36578_36832 = (0);
var i__36579_36833 = (0);
while(true){
if((i__36579_36833 < count__36578_36832)){
var node_36834 = chunk__36577_36831.cljs$core$IIndexed$_nth$arity$2(null,i__36579_36833);
if(cljs.core.not(node_36834.shadow$old)){
var path_match_36835 = shadow.cljs.devtools.client.browser.match_paths(node_36834.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36835)){
var new_link_36836 = (function (){var G__36595 = node_36834.cloneNode(true);
G__36595.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36835),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36595;
})();
(node_36834.shadow$old = true);

(new_link_36836.onload = ((function (seq__36573_36830,chunk__36577_36831,count__36578_36832,i__36579_36833,seq__36504,chunk__36506,count__36507,i__36508,new_link_36836,path_match_36835,node_36834,path,seq__36504__$1,temp__5735__auto__,map__36498,map__36498__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36834);
});})(seq__36573_36830,chunk__36577_36831,count__36578_36832,i__36579_36833,seq__36504,chunk__36506,count__36507,i__36508,new_link_36836,path_match_36835,node_36834,path,seq__36504__$1,temp__5735__auto__,map__36498,map__36498__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36835], 0));

goog.dom.insertSiblingAfter(new_link_36836,node_36834);


var G__36837 = seq__36573_36830;
var G__36838 = chunk__36577_36831;
var G__36839 = count__36578_36832;
var G__36840 = (i__36579_36833 + (1));
seq__36573_36830 = G__36837;
chunk__36577_36831 = G__36838;
count__36578_36832 = G__36839;
i__36579_36833 = G__36840;
continue;
} else {
var G__36841 = seq__36573_36830;
var G__36842 = chunk__36577_36831;
var G__36843 = count__36578_36832;
var G__36844 = (i__36579_36833 + (1));
seq__36573_36830 = G__36841;
chunk__36577_36831 = G__36842;
count__36578_36832 = G__36843;
i__36579_36833 = G__36844;
continue;
}
} else {
var G__36845 = seq__36573_36830;
var G__36846 = chunk__36577_36831;
var G__36847 = count__36578_36832;
var G__36848 = (i__36579_36833 + (1));
seq__36573_36830 = G__36845;
chunk__36577_36831 = G__36846;
count__36578_36832 = G__36847;
i__36579_36833 = G__36848;
continue;
}
} else {
var temp__5735__auto___36849__$1 = cljs.core.seq(seq__36573_36830);
if(temp__5735__auto___36849__$1){
var seq__36573_36850__$1 = temp__5735__auto___36849__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36573_36850__$1)){
var c__4556__auto___36851 = cljs.core.chunk_first(seq__36573_36850__$1);
var G__36852 = cljs.core.chunk_rest(seq__36573_36850__$1);
var G__36853 = c__4556__auto___36851;
var G__36854 = cljs.core.count(c__4556__auto___36851);
var G__36855 = (0);
seq__36573_36830 = G__36852;
chunk__36577_36831 = G__36853;
count__36578_36832 = G__36854;
i__36579_36833 = G__36855;
continue;
} else {
var node_36856 = cljs.core.first(seq__36573_36850__$1);
if(cljs.core.not(node_36856.shadow$old)){
var path_match_36857 = shadow.cljs.devtools.client.browser.match_paths(node_36856.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36857)){
var new_link_36858 = (function (){var G__36606 = node_36856.cloneNode(true);
G__36606.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36857),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36606;
})();
(node_36856.shadow$old = true);

(new_link_36858.onload = ((function (seq__36573_36830,chunk__36577_36831,count__36578_36832,i__36579_36833,seq__36504,chunk__36506,count__36507,i__36508,new_link_36858,path_match_36857,node_36856,seq__36573_36850__$1,temp__5735__auto___36849__$1,path,seq__36504__$1,temp__5735__auto__,map__36498,map__36498__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36856);
});})(seq__36573_36830,chunk__36577_36831,count__36578_36832,i__36579_36833,seq__36504,chunk__36506,count__36507,i__36508,new_link_36858,path_match_36857,node_36856,seq__36573_36850__$1,temp__5735__auto___36849__$1,path,seq__36504__$1,temp__5735__auto__,map__36498,map__36498__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36857], 0));

goog.dom.insertSiblingAfter(new_link_36858,node_36856);


var G__36859 = cljs.core.next(seq__36573_36850__$1);
var G__36860 = null;
var G__36861 = (0);
var G__36862 = (0);
seq__36573_36830 = G__36859;
chunk__36577_36831 = G__36860;
count__36578_36832 = G__36861;
i__36579_36833 = G__36862;
continue;
} else {
var G__36863 = cljs.core.next(seq__36573_36850__$1);
var G__36864 = null;
var G__36865 = (0);
var G__36866 = (0);
seq__36573_36830 = G__36863;
chunk__36577_36831 = G__36864;
count__36578_36832 = G__36865;
i__36579_36833 = G__36866;
continue;
}
} else {
var G__36867 = cljs.core.next(seq__36573_36850__$1);
var G__36868 = null;
var G__36869 = (0);
var G__36870 = (0);
seq__36573_36830 = G__36867;
chunk__36577_36831 = G__36868;
count__36578_36832 = G__36869;
i__36579_36833 = G__36870;
continue;
}
}
} else {
}
}
break;
}


var G__36871 = cljs.core.next(seq__36504__$1);
var G__36872 = null;
var G__36873 = (0);
var G__36874 = (0);
seq__36504 = G__36871;
chunk__36506 = G__36872;
count__36507 = G__36873;
i__36508 = G__36874;
continue;
} else {
var G__36875 = cljs.core.next(seq__36504__$1);
var G__36876 = null;
var G__36877 = (0);
var G__36878 = (0);
seq__36504 = G__36875;
chunk__36506 = G__36876;
count__36507 = G__36877;
i__36508 = G__36878;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36612){
var map__36613 = p__36612;
var map__36613__$1 = (((((!((map__36613 == null))))?(((((map__36613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36613):map__36613);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36613__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36624){
var map__36625 = p__36624;
var map__36625__$1 = (((((!((map__36625 == null))))?(((((map__36625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36625):map__36625);
var _ = map__36625__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36625__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36628,done,error){
var map__36629 = p__36628;
var map__36629__$1 = (((((!((map__36629 == null))))?(((((map__36629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36629):map__36629);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36629__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36639,done,error){
var map__36641 = p__36639;
var map__36641__$1 = (((((!((map__36641 == null))))?(((((map__36641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36641):map__36641);
var msg = map__36641__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36641__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36641__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36641__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36644){
var map__36645 = p__36644;
var map__36645__$1 = (((((!((map__36645 == null))))?(((((map__36645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36645):map__36645);
var src = map__36645__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36645__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36651 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36651) : done.call(null,G__36651));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36652){
var map__36654 = p__36652;
var map__36654__$1 = (((((!((map__36654 == null))))?(((((map__36654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36654):map__36654);
var msg__$1 = map__36654__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36654__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36659){var ex = e36659;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36663){
var map__36664 = p__36663;
var map__36664__$1 = (((((!((map__36664 == null))))?(((((map__36664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36664):map__36664);
var env = map__36664__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36664__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36675){
var map__36676 = p__36675;
var map__36676__$1 = (((((!((map__36676 == null))))?(((((map__36676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36676):map__36676);
var msg = map__36676__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36676__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36684){
var map__36686 = p__36684;
var map__36686__$1 = (((((!((map__36686 == null))))?(((((map__36686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36686):map__36686);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36686__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36686__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36689){
var map__36690 = p__36689;
var map__36690__$1 = (((((!((map__36690 == null))))?(((((map__36690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36690):map__36690);
var svc = map__36690__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36690__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

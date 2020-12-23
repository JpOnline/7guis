goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__39248__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__39048 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__39049 = cljs.core.seq(vec__39048);
var first__39050 = cljs.core.first(seq__39049);
var seq__39049__$1 = cljs.core.next(seq__39049);
var tag = first__39050;
var body = seq__39049__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__39248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39249__i = 0, G__39249__a = new Array(arguments.length -  0);
while (G__39249__i < G__39249__a.length) {G__39249__a[G__39249__i] = arguments[G__39249__i + 0]; ++G__39249__i;}
  args = new cljs.core.IndexedSeq(G__39249__a,0,null);
} 
return G__39248__delegate.call(this,args);};
G__39248.cljs$lang$maxFixedArity = 0;
G__39248.cljs$lang$applyTo = (function (arglist__39250){
var args = cljs.core.seq(arglist__39250);
return G__39248__delegate(args);
});
G__39248.cljs$core$IFn$_invoke$arity$variadic = G__39248__delegate;
return G__39248;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__39055(s__39056){
return (new cljs.core.LazySeq(null,(function (){
var s__39056__$1 = s__39056;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39056__$1);
if(temp__5735__auto__){
var s__39056__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39056__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39056__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39058 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39057 = (0);
while(true){
if((i__39057 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__39057);
cljs.core.chunk_append(b__39058,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__39251 = (i__39057 + (1));
i__39057 = G__39251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39058),sablono$core$update_arglists_$_iter__39055(cljs.core.chunk_rest(s__39056__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39058),null);
}
} else {
var args = cljs.core.first(s__39056__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__39055(cljs.core.rest(s__39056__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39252 = arguments.length;
var i__4737__auto___39253 = (0);
while(true){
if((i__4737__auto___39253 < len__4736__auto___39252)){
args__4742__auto__.push((arguments[i__4737__auto___39253]));

var G__39254 = (i__4737__auto___39253 + (1));
i__4737__auto___39253 = G__39254;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__39066(s__39068){
return (new cljs.core.LazySeq(null,(function (){
var s__39068__$1 = s__39068;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39068__$1);
if(temp__5735__auto__){
var s__39068__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39068__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39068__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39070 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39069 = (0);
while(true){
if((i__39069 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__39069);
cljs.core.chunk_append(b__39070,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__39257 = (i__39069 + (1));
i__39069 = G__39257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39070),sablono$core$iter__39066(cljs.core.chunk_rest(s__39068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39070),null);
}
} else {
var style = cljs.core.first(s__39068__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__39066(cljs.core.rest(s__39068__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq39063){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39063));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to39088 = (function sablono$core$link_to39088(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39262 = arguments.length;
var i__4737__auto___39263 = (0);
while(true){
if((i__4737__auto___39263 < len__4736__auto___39262)){
args__4742__auto__.push((arguments[i__4737__auto___39263]));

var G__39264 = (i__4737__auto___39263 + (1));
i__4737__auto___39263 = G__39264;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to39088.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to39088.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to39088.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to39088.cljs$lang$applyTo = (function (seq39090){
var G__39091 = cljs.core.first(seq39090);
var seq39090__$1 = cljs.core.next(seq39090);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39091,seq39090__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to39088);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to39100 = (function sablono$core$mail_to39100(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39265 = arguments.length;
var i__4737__auto___39266 = (0);
while(true){
if((i__4737__auto___39266 < len__4736__auto___39265)){
args__4742__auto__.push((arguments[i__4737__auto___39266]));

var G__39267 = (i__4737__auto___39266 + (1));
i__4737__auto___39266 = G__39267;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to39100.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to39100.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__39107){
var vec__39108 = p__39107;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39108,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to39100.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to39100.cljs$lang$applyTo = (function (seq39101){
var G__39102 = cljs.core.first(seq39101);
var seq39101__$1 = cljs.core.next(seq39101);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39102,seq39101__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to39100);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list39112 = (function sablono$core$unordered_list39112(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list39112_$_iter__39114(s__39115){
return (new cljs.core.LazySeq(null,(function (){
var s__39115__$1 = s__39115;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39115__$1);
if(temp__5735__auto__){
var s__39115__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39115__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39115__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39117 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39116 = (0);
while(true){
if((i__39116 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__39116);
cljs.core.chunk_append(b__39117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39271 = (i__39116 + (1));
i__39116 = G__39271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39117),sablono$core$unordered_list39112_$_iter__39114(cljs.core.chunk_rest(s__39115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39117),null);
}
} else {
var x = cljs.core.first(s__39115__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list39112_$_iter__39114(cljs.core.rest(s__39115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list39112);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list39124 = (function sablono$core$ordered_list39124(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list39124_$_iter__39125(s__39126){
return (new cljs.core.LazySeq(null,(function (){
var s__39126__$1 = s__39126;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39126__$1);
if(temp__5735__auto__){
var s__39126__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39126__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39126__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39128 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39127 = (0);
while(true){
if((i__39127 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__39127);
cljs.core.chunk_append(b__39128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39272 = (i__39127 + (1));
i__39127 = G__39272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39128),sablono$core$ordered_list39124_$_iter__39125(cljs.core.chunk_rest(s__39126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39128),null);
}
} else {
var x = cljs.core.first(s__39126__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list39124_$_iter__39125(cljs.core.rest(s__39126__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list39124);
/**
 * Create an image element.
 */
sablono.core.image39133 = (function sablono$core$image39133(var_args){
var G__39135 = arguments.length;
switch (G__39135) {
case 1:
return sablono.core.image39133.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image39133.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image39133.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image39133.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image39133.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image39133);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39136_SHARP_,p2__39137_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39136_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__39137_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39138_SHARP_,p2__39139_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39138_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__39139_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__39141 = arguments.length;
switch (G__39141) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field39142 = (function sablono$core$color_field39142(var_args){
var G__39144 = arguments.length;
switch (G__39144) {
case 1:
return sablono.core.color_field39142.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field39142.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field39142.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__39038__auto__);
}));

(sablono.core.color_field39142.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.color_field39142.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field39142);

/**
 * Creates a date input field.
 */
sablono.core.date_field39145 = (function sablono$core$date_field39145(var_args){
var G__39147 = arguments.length;
switch (G__39147) {
case 1:
return sablono.core.date_field39145.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field39145.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field39145.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__39038__auto__);
}));

(sablono.core.date_field39145.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.date_field39145.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field39145);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field39148 = (function sablono$core$datetime_field39148(var_args){
var G__39150 = arguments.length;
switch (G__39150) {
case 1:
return sablono.core.datetime_field39148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field39148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field39148.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__39038__auto__);
}));

(sablono.core.datetime_field39148.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.datetime_field39148.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field39148);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field39151 = (function sablono$core$datetime_local_field39151(var_args){
var G__39153 = arguments.length;
switch (G__39153) {
case 1:
return sablono.core.datetime_local_field39151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field39151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field39151.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__39038__auto__);
}));

(sablono.core.datetime_local_field39151.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.datetime_local_field39151.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field39151);

/**
 * Creates a email input field.
 */
sablono.core.email_field39154 = (function sablono$core$email_field39154(var_args){
var G__39156 = arguments.length;
switch (G__39156) {
case 1:
return sablono.core.email_field39154.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field39154.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field39154.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__39038__auto__);
}));

(sablono.core.email_field39154.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.email_field39154.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field39154);

/**
 * Creates a file input field.
 */
sablono.core.file_field39157 = (function sablono$core$file_field39157(var_args){
var G__39159 = arguments.length;
switch (G__39159) {
case 1:
return sablono.core.file_field39157.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field39157.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field39157.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__39038__auto__);
}));

(sablono.core.file_field39157.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.file_field39157.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field39157);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field39160 = (function sablono$core$hidden_field39160(var_args){
var G__39162 = arguments.length;
switch (G__39162) {
case 1:
return sablono.core.hidden_field39160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field39160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field39160.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__39038__auto__);
}));

(sablono.core.hidden_field39160.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.hidden_field39160.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field39160);

/**
 * Creates a month input field.
 */
sablono.core.month_field39163 = (function sablono$core$month_field39163(var_args){
var G__39165 = arguments.length;
switch (G__39165) {
case 1:
return sablono.core.month_field39163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field39163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field39163.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__39038__auto__);
}));

(sablono.core.month_field39163.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.month_field39163.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field39163);

/**
 * Creates a number input field.
 */
sablono.core.number_field39166 = (function sablono$core$number_field39166(var_args){
var G__39168 = arguments.length;
switch (G__39168) {
case 1:
return sablono.core.number_field39166.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field39166.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field39166.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__39038__auto__);
}));

(sablono.core.number_field39166.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.number_field39166.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field39166);

/**
 * Creates a password input field.
 */
sablono.core.password_field39169 = (function sablono$core$password_field39169(var_args){
var G__39171 = arguments.length;
switch (G__39171) {
case 1:
return sablono.core.password_field39169.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field39169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field39169.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__39038__auto__);
}));

(sablono.core.password_field39169.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.password_field39169.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field39169);

/**
 * Creates a range input field.
 */
sablono.core.range_field39172 = (function sablono$core$range_field39172(var_args){
var G__39174 = arguments.length;
switch (G__39174) {
case 1:
return sablono.core.range_field39172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field39172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field39172.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__39038__auto__);
}));

(sablono.core.range_field39172.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.range_field39172.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field39172);

/**
 * Creates a search input field.
 */
sablono.core.search_field39175 = (function sablono$core$search_field39175(var_args){
var G__39177 = arguments.length;
switch (G__39177) {
case 1:
return sablono.core.search_field39175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field39175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field39175.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__39038__auto__);
}));

(sablono.core.search_field39175.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.search_field39175.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field39175);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field39181 = (function sablono$core$tel_field39181(var_args){
var G__39184 = arguments.length;
switch (G__39184) {
case 1:
return sablono.core.tel_field39181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field39181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field39181.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__39038__auto__);
}));

(sablono.core.tel_field39181.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.tel_field39181.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field39181);

/**
 * Creates a text input field.
 */
sablono.core.text_field39188 = (function sablono$core$text_field39188(var_args){
var G__39190 = arguments.length;
switch (G__39190) {
case 1:
return sablono.core.text_field39188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field39188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field39188.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__39038__auto__);
}));

(sablono.core.text_field39188.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.text_field39188.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field39188);

/**
 * Creates a time input field.
 */
sablono.core.time_field39194 = (function sablono$core$time_field39194(var_args){
var G__39198 = arguments.length;
switch (G__39198) {
case 1:
return sablono.core.time_field39194.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field39194.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field39194.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__39038__auto__);
}));

(sablono.core.time_field39194.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.time_field39194.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field39194);

/**
 * Creates a url input field.
 */
sablono.core.url_field39201 = (function sablono$core$url_field39201(var_args){
var G__39205 = arguments.length;
switch (G__39205) {
case 1:
return sablono.core.url_field39201.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field39201.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field39201.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__39038__auto__);
}));

(sablono.core.url_field39201.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.url_field39201.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field39201);

/**
 * Creates a week input field.
 */
sablono.core.week_field39206 = (function sablono$core$week_field39206(var_args){
var G__39209 = arguments.length;
switch (G__39209) {
case 1:
return sablono.core.week_field39206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field39206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field39206.cljs$core$IFn$_invoke$arity$1 = (function (name__39038__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__39038__auto__);
}));

(sablono.core.week_field39206.cljs$core$IFn$_invoke$arity$2 = (function (name__39038__auto__,value__39039__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__39038__auto__,value__39039__auto__);
}));

(sablono.core.week_field39206.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field39206);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box39215 = (function sablono$core$check_box39215(var_args){
var G__39217 = arguments.length;
switch (G__39217) {
case 1:
return sablono.core.check_box39215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box39215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box39215.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box39215.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box39215.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box39215.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box39215.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box39215);
/**
 * Creates a radio button.
 */
sablono.core.radio_button39218 = (function sablono$core$radio_button39218(var_args){
var G__39220 = arguments.length;
switch (G__39220) {
case 1:
return sablono.core.radio_button39218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button39218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button39218.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button39218.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button39218.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button39218.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button39218.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button39218);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options39221 = (function sablono$core$select_options39221(coll){
var iter__4529__auto__ = (function sablono$core$select_options39221_$_iter__39222(s__39223){
return (new cljs.core.LazySeq(null,(function (){
var s__39223__$1 = s__39223;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39223__$1);
if(temp__5735__auto__){
var s__39223__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39223__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39223__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39225 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39224 = (0);
while(true){
if((i__39224 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__39224);
cljs.core.chunk_append(b__39225,((cljs.core.sequential_QMARK_(x))?(function (){var vec__39226 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39226,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39226,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39226,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options39221.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options39221.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options39221.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__39338 = (i__39224 + (1));
i__39224 = G__39338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39225),sablono$core$select_options39221_$_iter__39222(cljs.core.chunk_rest(s__39223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39225),null);
}
} else {
var x = cljs.core.first(s__39223__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__39229 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39229,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39229,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39229,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options39221.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options39221.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options39221.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options39221_$_iter__39222(cljs.core.rest(s__39223__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options39221);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down39232 = (function sablono$core$drop_down39232(var_args){
var G__39234 = arguments.length;
switch (G__39234) {
case 2:
return sablono.core.drop_down39232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down39232.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down39232.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down39232.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down39232.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down39232.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down39232);
/**
 * Creates a text area element.
 */
sablono.core.text_area39235 = (function sablono$core$text_area39235(var_args){
var G__39237 = arguments.length;
switch (G__39237) {
case 1:
return sablono.core.text_area39235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area39235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area39235.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area39235.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area39235.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area39235);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label39238 = (function sablono$core$label39238(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label39238);
/**
 * Creates a submit button.
 */
sablono.core.submit_button39239 = (function sablono$core$submit_button39239(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button39239);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button39240 = (function sablono$core$reset_button39240(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button39240);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to39241 = (function sablono$core$form_to39241(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39362 = arguments.length;
var i__4737__auto___39363 = (0);
while(true){
if((i__4737__auto___39363 < len__4736__auto___39362)){
args__4742__auto__.push((arguments[i__4737__auto___39363]));

var G__39364 = (i__4737__auto___39363 + (1));
i__4737__auto___39363 = G__39364;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to39241.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to39241.cljs$core$IFn$_invoke$arity$variadic = (function (p__39244,body){
var vec__39245 = p__39244;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39245,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39245,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to39241.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to39241.cljs$lang$applyTo = (function (seq39242){
var G__39243 = cljs.core.first(seq39242);
var seq39242__$1 = cljs.core.next(seq39242);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39243,seq39242__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to39241);

//# sourceMappingURL=sablono.core.js.map

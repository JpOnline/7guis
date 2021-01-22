goog.provide('seven_guis.sg_cells');
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.sg_cells !== 'undefined') && (typeof seven_guis.sg_cells.component_state !== 'undefined')){
} else {
seven_guis.sg_cells.component_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
seven_guis.sg_cells.num_columns = (26);
seven_guis.sg_cells.num_rows = (100);
seven_guis.sg_cells.cell_regex = /[a-zA-Z]\d{1,2}/;
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.sg_cells !== 'undefined') && (typeof seven_guis.sg_cells.compile_eval_state !== 'undefined')){
} else {
seven_guis.sg_cells.compile_eval_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
}
seven_guis.sg_cells.evaluate = (function seven_guis$sg_cells$evaluate(s,callback){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(seven_guis.sg_cells.compile_eval_state,s,null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,seven_guis.sg_cells.compile_eval_state),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),(function (result){
console.log(result);

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(result) : callback.call(null,result));
}));
});
/**
 * Transform a formula like (apply + a0:c2) in (apply + [A0 B0 C0 A1 B1 C1 A2 B2 C2])
 */
seven_guis.sg_cells.replace_cell_range = (function seven_guis$sg_cells$replace_cell_range(formula){
var cell_regex_string = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(seven_guis.sg_cells.cell_regex),(1),(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(seven_guis.sg_cells.cell_regex)).length) - (1)));
var row_fn = (function (p1__43450_SHARP_){
return parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__43450_SHARP_,(1)));
});
var col_fn = (function (p1__43451_SHARP_){
return clojure.string.upper_case(cljs.core.first(p1__43451_SHARP_)).charCodeAt();
});
var replace_fn = (function (p__43452){
var vec__43453 = p__43452;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43453,(0),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43453,(1),null);
var final$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43453,(2),null);
var $ = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__4529__auto__ = (function seven_guis$sg_cells$replace_cell_range_$_iter__43456(s__43457){
return (new cljs.core.LazySeq(null,(function (){
var s__43457__$1 = s__43457;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43457__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__43457__$1,n,xs__6292__auto__,temp__5735__auto__,vec__43453,_,init,final$,cell_regex_string,row_fn,col_fn){
return (function seven_guis$sg_cells$replace_cell_range_$_iter__43456_$_iter__43458(s__43459){
return (new cljs.core.LazySeq(null,((function (s__43457__$1,n,xs__6292__auto__,temp__5735__auto__,vec__43453,_,init,final$,cell_regex_string,row_fn,col_fn){
return (function (){
var s__43459__$1 = s__43459;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__43459__$1);
if(temp__5735__auto____$1){
var s__43459__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43459__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43459__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43461 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43460 = (0);
while(true){
if((i__43460 < size__4528__auto__)){
var c = cljs.core._nth(c__4527__auto__,i__43460);
cljs.core.chunk_append(b__43461,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var G__43517 = (i__43460 + (1));
i__43460 = G__43517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43461),seven_guis$sg_cells$replace_cell_range_$_iter__43456_$_iter__43458(cljs.core.chunk_rest(s__43459__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43461),null);
}
} else {
var c = cljs.core.first(s__43459__$2);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),seven_guis$sg_cells$replace_cell_range_$_iter__43456_$_iter__43458(cljs.core.rest(s__43459__$2)));
}
} else {
return null;
}
break;
}
});})(s__43457__$1,n,xs__6292__auto__,temp__5735__auto__,vec__43453,_,init,final$,cell_regex_string,row_fn,col_fn))
,null,null));
});})(s__43457__$1,n,xs__6292__auto__,temp__5735__auto__,vec__43453,_,init,final$,cell_regex_string,row_fn,col_fn))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(col_fn(init),(col_fn(final$) + (1)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,seven_guis$sg_cells$replace_cell_range_$_iter__43456(cljs.core.rest(s__43457__$1)));
} else {
var G__43518 = cljs.core.rest(s__43457__$1);
s__43457__$1 = G__43518;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(row_fn(init),(row_fn(final$) + (1))));
})());
return ["[",$,"]"].join('');
});
return clojure.string.replace(formula,cljs.core.re_pattern(["(",cell_regex_string,"):(",cell_regex_string,")"].join('')),replace_fn);
});
seven_guis.sg_cells.evaluate_cell_BANG_ = (function seven_guis$sg_cells$evaluate_cell_BANG_(p__43468){
var vec__43469 = p__43468;
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43469,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43469,(1),null);
var formula_QMARK_ = (function (p1__43462_SHARP_){
if(cljs.core.truth_(p1__43462_SHARP_)){
return clojure.string.starts_with_QMARK_(p1__43462_SHARP_,"=");
} else {
return null;
}
});
var parse_formula = (function (formula){
return clojure.string.replace(seven_guis.sg_cells.replace_cell_range(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(formula,(1))),seven_guis.sg_cells.cell_regex,(function (p1__43463_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.first(p1__43463_SHARP_))),parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__43463_SHARP_,(1))),new cljs.core.Keyword(null,"value","value",305978217)], null),"");
}));
});
var string = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),column,row,new cljs.core.Keyword(null,"string","string",-1989541586)], null));
var dependants = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),column,row,new cljs.core.Keyword(null,"dependants","dependants",734530990)], null));
var set_error = (function (p1__43464_SHARP_,p2__43465_SHARP_){
return cljs.core.assoc_in(cljs.core.assoc_in(p1__43464_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),column,row,new cljs.core.Keyword(null,"value","value",305978217)], null),"#Error"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),column,row,new cljs.core.Keyword(null,"error","error",-978969032)], null),p2__43465_SHARP_);
});
var set_value = (function (p1__43466_SHARP_,p2__43467_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(p1__43466_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),column,row,new cljs.core.Keyword(null,"value","value",305978217)], null),p2__43467_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),column,row], null),cljs.core.dissoc,new cljs.core.Keyword(null,"error","error",-978969032));
});
var set_and_propagate_BANG_ = (function (p__43472){
var map__43473 = p__43472;
var map__43473__$1 = (((((!((map__43473 == null))))?(((((map__43473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43473):map__43473);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43473__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43473__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.sg_cells.component_state,set_error,error.cause.message);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.sg_cells.component_state,set_value,value);
}

return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(seven_guis.sg_cells.evaluate_cell_BANG_,dependants));
});
if(cljs.core.truth_(formula_QMARK_(string))){
return seven_guis.sg_cells.evaluate(parse_formula(string),set_and_propagate_BANG_);
} else {
return set_and_propagate_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),string], null));
}
});
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.sg_cells !== 'undefined') && (typeof seven_guis.sg_cells.intercept_undeclared_var_error !== 'undefined')){
} else {
seven_guis.sg_cells.intercept_undeclared_var_error = (function (){var error_log = console.error;
return (console.error = (function() { 
var G__43519__delegate = function (args){
var temp__5735__auto___43520 = cljs.core.re_find(/WARNING: Use of undeclared Var cljs.user\/(\S+)/,cljs.core.first(args));
if(cljs.core.truth_(temp__5735__auto___43520)){
var vec__43475_43521 = temp__5735__auto___43520;
var __43522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43475_43521,(0),null);
var undeclared_43523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43475_43521,(1),null);
alert(["Were you trying to use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(undeclared_43523)," as a string?\nIf so, try surroding it with double quotes, like \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(undeclared_43523),"\"."].join(''));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(error_log,args);
};
var G__43519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43524__i = 0, G__43524__a = new Array(arguments.length -  0);
while (G__43524__i < G__43524__a.length) {G__43524__a[G__43524__i] = arguments[G__43524__i + 0]; ++G__43524__i;}
  args = new cljs.core.IndexedSeq(G__43524__a,0,null);
} 
return G__43519__delegate.call(this,args);};
G__43519.cljs$lang$maxFixedArity = 0;
G__43519.cljs$lang$applyTo = (function (arglist__43525){
var args = cljs.core.seq(arglist__43525);
return G__43519__delegate(args);
});
G__43519.cljs$core$IFn$_invoke$arity$variadic = G__43519__delegate;
return G__43519;
})()
);
})();
}
seven_guis.sg_cells.unsubscribe = (function seven_guis$sg_cells$unsubscribe(state,p__43482){
var vec__43483 = p__43482;
var dependant_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43483,(0),null);
var dependant_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43483,(1),null);
var old_formula = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),dependant_column,dependant_row,new cljs.core.Keyword(null,"string","string",-1989541586)], null),"");
var cell_references = (function (){var G__43486 = old_formula;
var G__43486__$1 = (((G__43486 == null))?null:seven_guis.sg_cells.replace_cell_range(G__43486));
if((G__43486__$1 == null)){
return null;
} else {
return cljs.core.re_seq(seven_guis.sg_cells.cell_regex,G__43486__$1);
}
})();
var referenced_column = (function (p1__43478_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.first(p1__43478_SHARP_)));
});
var referenced_row = (function (p1__43479_SHARP_){
return parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__43479_SHARP_,(1)));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43480_SHARP_,p2__43481_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__43480_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),referenced_column(p2__43481_SHARP_),referenced_row(p2__43481_SHARP_),new cljs.core.Keyword(null,"dependants","dependants",734530990)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dependant_column,dependant_row], null)])));
}),state,cell_references);
});
seven_guis.sg_cells.subscribe = (function seven_guis$sg_cells$subscribe(state,p__43491){
var vec__43492 = p__43491;
var dependant_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43492,(0),null);
var dependant_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43492,(1),null);
var new_formula = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),dependant_column,dependant_row,new cljs.core.Keyword(null,"string","string",-1989541586)], null),"");
var cell_references = (function (){var G__43495 = new_formula;
var G__43495__$1 = (((G__43495 == null))?null:seven_guis.sg_cells.replace_cell_range(G__43495));
if((G__43495__$1 == null)){
return null;
} else {
return cljs.core.re_seq(seven_guis.sg_cells.cell_regex,G__43495__$1);
}
})();
var referenced_column = (function (p1__43487_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.first(p1__43487_SHARP_)));
});
var referenced_row = (function (p1__43488_SHARP_){
return parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__43488_SHARP_,(1)));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43489_SHARP_,p2__43490_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__43489_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),referenced_column(p2__43490_SHARP_),referenced_row(p2__43490_SHARP_),new cljs.core.Keyword(null,"dependants","dependants",734530990)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dependant_column,dependant_row], null));
}),state,cell_references);
});
seven_guis.sg_cells.cell = (function seven_guis$sg_cells$cell(p__43500){
var map__43501 = p__43500;
var map__43501__$1 = (((((!((map__43501 == null))))?(((((map__43501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43501):map__43501);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43501__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43501__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43501__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43501__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43501__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43501__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43501__$1,new cljs.core.Keyword(null,"value","value",305978217));
var formula_QMARK_ = (function (p1__43496_SHARP_){
if(cljs.core.truth_(p1__43496_SHARP_)){
return clojure.string.starts_with_QMARK_(p1__43496_SHARP_,"=");
} else {
return null;
}
});
var onInputBlur = (function (p1__43497_SHARP_,p2__43498_SHARP_){
return cljs.core.assoc_in(seven_guis.sg_cells.subscribe(cljs.core.assoc_in(seven_guis.sg_cells.unsubscribe(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__43497_SHARP_,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.dissoc,new cljs.core.Keyword(null,"editing","editing",1365491601)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),column,row,new cljs.core.Keyword(null,"string","string",-1989541586)], null),p2__43498_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),column,row,new cljs.core.Keyword(null,"value","value",305978217)], null),"Loading...");
});
if(cljs.core.truth_(editing_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onBlur","onBlur",229342509),(function (p1__43499_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.sg_cells.component_state,onInputBlur,p1__43499_SHARP_.target.value);

return seven_guis.sg_cells.evaluate_cell_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null));
}),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),string], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"selected":null),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(error)?error:null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(seven_guis.sg_cells.component_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null)]));
}),new cljs.core.Keyword(null,"onDoubleClick","onDoubleClick",-1364035213),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(seven_guis.sg_cells.component_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editing","editing",1365491601)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null));
})], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
}
});
seven_guis.sg_cells.component_style = (function seven_guis$sg_cells$component_style(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),["\n   .container {\n     display: grid;\n     grid: auto-flow / 30px repeat(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seven_guis.sg_cells.num_columns),", 100px);\n     overflow: auto;\n     height: 500px;\n   }\n   span {\n     padding: 1px 5px;\n     min-height: 22px;\n     border: 1px solid lightgray;\n   }\n   span.selected {\n     border: 1px solid blue;\n   }\n   span.header {\n     text-align: center;\n     background-color: #f8f9fa;\n   }\n   "].join('')], null);
});
seven_guis.sg_cells.component = (function seven_guis$sg_cells$component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis.sg_cells.component_style], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.header","span.header",718458500)], null),(function (){var iter__4529__auto__ = (function seven_guis$sg_cells$component_$_iter__43503(s__43504){
return (new cljs.core.LazySeq(null,(function (){
var s__43504__$1 = s__43504;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43504__$1);
if(temp__5735__auto__){
var s__43504__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43504__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43504__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43506 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43505 = (0);
while(true){
if((i__43505 < size__4528__auto__)){
var c = cljs.core._nth(c__4527__auto__,i__43505);
cljs.core.chunk_append(b__43506,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.header","span.header",718458500),cljs.core.char$(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["header ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(c))].join('')], null)));

var G__43535 = (i__43505 + (1));
i__43505 = G__43535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43506),seven_guis$sg_cells$component_$_iter__43503(cljs.core.chunk_rest(s__43504__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43506),null);
}
} else {
var c = cljs.core.first(s__43504__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.header","span.header",718458500),cljs.core.char$(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["header ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(c))].join('')], null)),seven_guis$sg_cells$component_$_iter__43503(cljs.core.rest(s__43504__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((65),((65) + seven_guis.sg_cells.num_columns)));
})(),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function seven_guis$sg_cells$component_$_iter__43507(s__43508){
return (new cljs.core.LazySeq(null,(function (){
var s__43508__$1 = s__43508;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43508__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var row = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__43508__$1,row,xs__6292__auto__,temp__5735__auto__){
return (function seven_guis$sg_cells$component_$_iter__43507_$_iter__43509(s__43510){
return (new cljs.core.LazySeq(null,((function (s__43508__$1,row,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__43510__$1 = s__43510;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__43510__$1);
if(temp__5735__auto____$1){
var s__43510__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43510__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43510__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43512 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43511 = (0);
while(true){
if((i__43511 < size__4528__auto__)){
var col = cljs.core._nth(c__4527__auto__,i__43511);
cljs.core.chunk_append(b__43512,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"A","A",-1688942394),col))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.header","span.header",718458500),row], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis.sg_cells.cell,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"column","column",2078222095),col,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"selected?","selected?",-742502788),(function (){var G__43514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null);
var fexpr__43513 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.PersistentHashSet.EMPTY);
return (fexpr__43513.cljs$core$IFn$_invoke$arity$1 ? fexpr__43513.cljs$core$IFn$_invoke$arity$1(G__43514) : fexpr__43513.call(null,G__43514));
})(),new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editing","editing",1365491601)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null)),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),col,row,new cljs.core.Keyword(null,"string","string",-1989541586)], null)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),col,row,new cljs.core.Keyword(null,"value","value",305978217)], null)),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),col,row,new cljs.core.Keyword(null,"error","error",-978969032)], null))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('')], null)));

var G__43539 = (i__43511 + (1));
i__43511 = G__43539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43512),seven_guis$sg_cells$component_$_iter__43507_$_iter__43509(cljs.core.chunk_rest(s__43510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43512),null);
}
} else {
var col = cljs.core.first(s__43510__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"A","A",-1688942394),col))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.header","span.header",718458500),row], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis.sg_cells.cell,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"column","column",2078222095),col,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"selected?","selected?",-742502788),(function (){var G__43516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null);
var fexpr__43515 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.PersistentHashSet.EMPTY);
return (fexpr__43515.cljs$core$IFn$_invoke$arity$1 ? fexpr__43515.cljs$core$IFn$_invoke$arity$1(G__43516) : fexpr__43515.call(null,G__43516));
})(),new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editing","editing",1365491601)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null)),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),col,row,new cljs.core.Keyword(null,"string","string",-1989541586)], null)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),col,row,new cljs.core.Keyword(null,"value","value",305978217)], null)),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seven_guis.sg_cells.component_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),col,row,new cljs.core.Keyword(null,"error","error",-978969032)], null))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('')], null)),seven_guis$sg_cells$component_$_iter__43507_$_iter__43509(cljs.core.rest(s__43510__$2)));
}
} else {
return null;
}
break;
}
});})(s__43508__$1,row,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__43508__$1,row,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((65),((65) + seven_guis.sg_cells.num_columns)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,seven_guis$sg_cells$component_$_iter__43507(cljs.core.rest(s__43508__$1)));
} else {
var G__43543 = cljs.core.rest(s__43508__$1);
s__43508__$1 = G__43543;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(seven_guis.sg_cells.num_rows));
})())], null)], null);
});
seven_guis.sg_cells.register_component_BANG_ = (function seven_guis$sg_cells$register_component_BANG_(){
shadow.cljs.bootstrap.browser.init(seven_guis.sg_cells.compile_eval_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/7guis/cells-evaluation"], null),cljs.core.prn);

return seven_guis.util.define_custom_element_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element-name","element-name",-1558490689),"sg-cells",new cljs.core.Keyword(null,"view-component","view-component",-984780836),seven_guis.sg_cells.component], null));
});
seven_guis.sg_cells.register_component_BANG_();

//# sourceMappingURL=seven_guis.sg_cells.js.map

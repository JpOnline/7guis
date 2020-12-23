goog.provide('seven_guis.util');
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.util !== 'undefined') && (typeof seven_guis.util.already_defined_components !== 'undefined')){
} else {
seven_guis.util.already_defined_components = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
seven_guis.util.reload_existent_custom_elements_BANG_ = (function seven_guis$util$reload_existent_custom_elements_BANG_(name){
var seq__40742 = cljs.core.seq(document.getElementsByTagName(name));
var chunk__40747 = null;
var count__40748 = (0);
var i__40749 = (0);
while(true){
if((i__40749 < count__40748)){
var to_reload = chunk__40747.cljs$core$IIndexed$_nth$arity$2(null,i__40749);
var seq__40750_40793 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.createElement(name)], null));
var chunk__40751_40794 = null;
var count__40752_40795 = (0);
var i__40753_40796 = (0);
while(true){
if((i__40753_40796 < count__40752_40795)){
var new_el_40797 = chunk__40751_40794.cljs$core$IIndexed$_nth$arity$2(null,i__40753_40796);
to_reload.replaceWith(new_el_40797);


var G__40798 = seq__40750_40793;
var G__40799 = chunk__40751_40794;
var G__40800 = count__40752_40795;
var G__40801 = (i__40753_40796 + (1));
seq__40750_40793 = G__40798;
chunk__40751_40794 = G__40799;
count__40752_40795 = G__40800;
i__40753_40796 = G__40801;
continue;
} else {
var temp__5735__auto___40802 = cljs.core.seq(seq__40750_40793);
if(temp__5735__auto___40802){
var seq__40750_40803__$1 = temp__5735__auto___40802;
if(cljs.core.chunked_seq_QMARK_(seq__40750_40803__$1)){
var c__4556__auto___40804 = cljs.core.chunk_first(seq__40750_40803__$1);
var G__40805 = cljs.core.chunk_rest(seq__40750_40803__$1);
var G__40806 = c__4556__auto___40804;
var G__40807 = cljs.core.count(c__4556__auto___40804);
var G__40808 = (0);
seq__40750_40793 = G__40805;
chunk__40751_40794 = G__40806;
count__40752_40795 = G__40807;
i__40753_40796 = G__40808;
continue;
} else {
var new_el_40809 = cljs.core.first(seq__40750_40803__$1);
to_reload.replaceWith(new_el_40809);


var G__40810 = cljs.core.next(seq__40750_40803__$1);
var G__40811 = null;
var G__40812 = (0);
var G__40813 = (0);
seq__40750_40793 = G__40810;
chunk__40751_40794 = G__40811;
count__40752_40795 = G__40812;
i__40753_40796 = G__40813;
continue;
}
} else {
}
}
break;
}

var G__40814 = seq__40742;
var G__40815 = chunk__40747;
var G__40816 = count__40748;
var G__40817 = (i__40749 + (1));
seq__40742 = G__40814;
chunk__40747 = G__40815;
count__40748 = G__40816;
i__40749 = G__40817;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40742);
if(temp__5735__auto__){
var seq__40742__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40742__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40742__$1);
var G__40818 = cljs.core.chunk_rest(seq__40742__$1);
var G__40819 = c__4556__auto__;
var G__40820 = cljs.core.count(c__4556__auto__);
var G__40821 = (0);
seq__40742 = G__40818;
chunk__40747 = G__40819;
count__40748 = G__40820;
i__40749 = G__40821;
continue;
} else {
var to_reload = cljs.core.first(seq__40742__$1);
var seq__40743_40822 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.createElement(name)], null));
var chunk__40744_40823 = null;
var count__40745_40824 = (0);
var i__40746_40825 = (0);
while(true){
if((i__40746_40825 < count__40745_40824)){
var new_el_40826 = chunk__40744_40823.cljs$core$IIndexed$_nth$arity$2(null,i__40746_40825);
to_reload.replaceWith(new_el_40826);


var G__40827 = seq__40743_40822;
var G__40828 = chunk__40744_40823;
var G__40829 = count__40745_40824;
var G__40830 = (i__40746_40825 + (1));
seq__40743_40822 = G__40827;
chunk__40744_40823 = G__40828;
count__40745_40824 = G__40829;
i__40746_40825 = G__40830;
continue;
} else {
var temp__5735__auto___40831__$1 = cljs.core.seq(seq__40743_40822);
if(temp__5735__auto___40831__$1){
var seq__40743_40832__$1 = temp__5735__auto___40831__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40743_40832__$1)){
var c__4556__auto___40833 = cljs.core.chunk_first(seq__40743_40832__$1);
var G__40834 = cljs.core.chunk_rest(seq__40743_40832__$1);
var G__40835 = c__4556__auto___40833;
var G__40836 = cljs.core.count(c__4556__auto___40833);
var G__40837 = (0);
seq__40743_40822 = G__40834;
chunk__40744_40823 = G__40835;
count__40745_40824 = G__40836;
i__40746_40825 = G__40837;
continue;
} else {
var new_el_40838 = cljs.core.first(seq__40743_40832__$1);
to_reload.replaceWith(new_el_40838);


var G__40839 = cljs.core.next(seq__40743_40832__$1);
var G__40840 = null;
var G__40841 = (0);
var G__40842 = (0);
seq__40743_40822 = G__40839;
chunk__40744_40823 = G__40840;
count__40745_40824 = G__40841;
i__40746_40825 = G__40842;
continue;
}
} else {
}
}
break;
}

var G__40843 = cljs.core.next(seq__40742__$1);
var G__40844 = null;
var G__40845 = (0);
var G__40846 = (0);
seq__40742 = G__40843;
chunk__40747 = G__40844;
count__40748 = G__40845;
i__40749 = G__40846;
continue;
}
} else {
return null;
}
}
break;
}
});
seven_guis.util.define_custom_element_BANG_ = (function seven_guis$util$define_custom_element_BANG_(p__40781){
var map__40782 = p__40781;
var map__40782__$1 = (((((!((map__40782 == null))))?(((((map__40782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40782):map__40782);
var element_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40782__$1,new cljs.core.Keyword(null,"element-name","element-name",-1558490689));
var view_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40782__$1,new cljs.core.Keyword(null,"view-component","view-component",-984780836));
var props_to_observe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40782__$1,new cljs.core.Keyword(null,"props-to-observe","props-to-observe",-908678971));
var props_to_reflect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40782__$1,new cljs.core.Keyword(null,"props-to-reflect","props-to-reflect",724326204));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.util.already_defined_components,(function (p1__40780_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40780_SHARP_,element_name,view_component);
}));

if(cljs.core.truth_(window.customElements.get(element_name))){
return seven_guis.util.reload_existent_custom_elements_BANG_(element_name);
} else {
var attach_shadow = (function (obj){
(obj.shadow = obj.attachShadow(({"mode": "open"})));

return obj;
});
var set_reagent_props = (function (obj){
(obj.reagent_atom_props = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));

return obj;
});
var render = (function (obj){
console.log("rendered");

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__40784 = cljs.core.deref(seven_guis.util.already_defined_components);
return (fexpr__40784.cljs$core$IFn$_invoke$arity$1 ? fexpr__40784.cljs$core$IFn$_invoke$arity$1(element_name) : fexpr__40784.call(null,element_name));
})(),cljs.core.deref(obj.reagent_atom_props)], null);
})], null),obj.shadow);

return obj;
});
var component = (function seven_guis$util$define_custom_element_BANG__$_component(){
return render(set_reagent_props(attach_shadow(Reflect.construct(HTMLElement,[],seven_guis$util$define_custom_element_BANG__$_component))));
});
Object.defineProperties(component,({"observedAttributes": ({"get": (function (){
return cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.name,props_to_observe));
})})}));

(component.prototype = Object.create(HTMLElement.prototype,cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"connectedCallback","connectedCallback",-2080538374),({"configurable": true, "value": (function (){
var this$ = this;
return console.log("Conectado");
})}),new cljs.core.Keyword(null,"attributeChangedCallback","attributeChangedCallback",973364810),({"value": (function (attr_name,old_value,new_value){
var this_40849 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this_40849.reagent_atom_props,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr_name),new_value);

return console.log("Prop changed",attr_name,old_value,new_value);
})})], null),(function (){var iter__4529__auto__ = (function seven_guis$util$define_custom_element_BANG__$_iter__40785(s__40786){
return (new cljs.core.LazySeq(null,(function (){
var s__40786__$1 = s__40786;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40786__$1);
if(temp__5735__auto__){
var s__40786__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40786__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40786__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40788 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40787 = (0);
while(true){
if((i__40787 < size__4528__auto__)){
var prop = cljs.core._nth(c__4527__auto__,i__40787);
cljs.core.chunk_append(b__40788,cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,({"get": ((function (i__40787,prop,c__4527__auto__,size__4528__auto__,b__40788,s__40786__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__40782,map__40782__$1,element_name,view_component,props_to_observe,props_to_reflect){
return (function (){
console.log("get prop",prop);

var this$ = this;
return this$.getAttribute(cljs.core.name(prop));
});})(i__40787,prop,c__4527__auto__,size__4528__auto__,b__40788,s__40786__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__40782,map__40782__$1,element_name,view_component,props_to_observe,props_to_reflect))
, "set": ((function (i__40787,prop,c__4527__auto__,size__4528__auto__,b__40788,s__40786__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__40782,map__40782__$1,element_name,view_component,props_to_observe,props_to_reflect){
return (function (val){
console.log("set val",prop,val);

var this$ = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$.reagent_atom_props,cljs.core.assoc,prop,val);

if(cljs.core.truth_((function (){var and__4115__auto__ = val;
if(cljs.core.truth_(and__4115__auto__)){
var fexpr__40789 = cljs.core.set(props_to_reflect);
return (fexpr__40789.cljs$core$IFn$_invoke$arity$1 ? fexpr__40789.cljs$core$IFn$_invoke$arity$1(prop) : fexpr__40789.call(null,prop));
} else {
return and__4115__auto__;
}
})())){
return this$.setAttribute(cljs.core.name(prop),val);
} else {
if(cljs.core.truth_((function (){var fexpr__40790 = cljs.core.set(props_to_reflect);
return (fexpr__40790.cljs$core$IFn$_invoke$arity$1 ? fexpr__40790.cljs$core$IFn$_invoke$arity$1(prop) : fexpr__40790.call(null,prop));
})())){
return this$.removeAttribute(cljs.core.name(prop));
} else {
return null;
}
}
});})(i__40787,prop,c__4527__auto__,size__4528__auto__,b__40788,s__40786__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__40782,map__40782__$1,element_name,view_component,props_to_observe,props_to_reflect))
})]));

var G__40855 = (i__40787 + (1));
i__40787 = G__40855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40788),seven_guis$util$define_custom_element_BANG__$_iter__40785(cljs.core.chunk_rest(s__40786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40788),null);
}
} else {
var prop = cljs.core.first(s__40786__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,({"get": ((function (prop,s__40786__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__40782,map__40782__$1,element_name,view_component,props_to_observe,props_to_reflect){
return (function (){
console.log("get prop",prop);

var this$ = this;
return this$.getAttribute(cljs.core.name(prop));
});})(prop,s__40786__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__40782,map__40782__$1,element_name,view_component,props_to_observe,props_to_reflect))
, "set": ((function (prop,s__40786__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__40782,map__40782__$1,element_name,view_component,props_to_observe,props_to_reflect){
return (function (val){
console.log("set val",prop,val);

var this$ = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$.reagent_atom_props,cljs.core.assoc,prop,val);

if(cljs.core.truth_((function (){var and__4115__auto__ = val;
if(cljs.core.truth_(and__4115__auto__)){
var fexpr__40791 = cljs.core.set(props_to_reflect);
return (fexpr__40791.cljs$core$IFn$_invoke$arity$1 ? fexpr__40791.cljs$core$IFn$_invoke$arity$1(prop) : fexpr__40791.call(null,prop));
} else {
return and__4115__auto__;
}
})())){
return this$.setAttribute(cljs.core.name(prop),val);
} else {
if(cljs.core.truth_((function (){var fexpr__40792 = cljs.core.set(props_to_reflect);
return (fexpr__40792.cljs$core$IFn$_invoke$arity$1 ? fexpr__40792.cljs$core$IFn$_invoke$arity$1(prop) : fexpr__40792.call(null,prop));
})())){
return this$.removeAttribute(cljs.core.name(prop));
} else {
return null;
}
}
});})(prop,s__40786__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__40782,map__40782__$1,element_name,view_component,props_to_observe,props_to_reflect))
})]),seven_guis$util$define_custom_element_BANG__$_iter__40785(cljs.core.rest(s__40786__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(props_to_observe);
})()))));

return window.customElements.define(element_name,component);
}
});

//# sourceMappingURL=seven_guis.util.js.map

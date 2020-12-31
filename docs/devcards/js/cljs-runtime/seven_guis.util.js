goog.provide('seven_guis.util');
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.util !== 'undefined') && (typeof seven_guis.util.already_defined_components !== 'undefined')){
} else {
seven_guis.util.already_defined_components = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
seven_guis.util.reload_existent_custom_elements_BANG_ = (function seven_guis$util$reload_existent_custom_elements_BANG_(name){
var seq__38785 = cljs.core.seq(document.getElementsByTagName(name));
var chunk__38790 = null;
var count__38791 = (0);
var i__38792 = (0);
while(true){
if((i__38792 < count__38791)){
var to_reload = chunk__38790.cljs$core$IIndexed$_nth$arity$2(null,i__38792);
var seq__38793_38813 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.createElement(name)], null));
var chunk__38794_38814 = null;
var count__38795_38815 = (0);
var i__38796_38816 = (0);
while(true){
if((i__38796_38816 < count__38795_38815)){
var new_el_38817 = chunk__38794_38814.cljs$core$IIndexed$_nth$arity$2(null,i__38796_38816);
to_reload.replaceWith(new_el_38817);


var G__38818 = seq__38793_38813;
var G__38819 = chunk__38794_38814;
var G__38820 = count__38795_38815;
var G__38821 = (i__38796_38816 + (1));
seq__38793_38813 = G__38818;
chunk__38794_38814 = G__38819;
count__38795_38815 = G__38820;
i__38796_38816 = G__38821;
continue;
} else {
var temp__5735__auto___38822 = cljs.core.seq(seq__38793_38813);
if(temp__5735__auto___38822){
var seq__38793_38823__$1 = temp__5735__auto___38822;
if(cljs.core.chunked_seq_QMARK_(seq__38793_38823__$1)){
var c__4556__auto___38824 = cljs.core.chunk_first(seq__38793_38823__$1);
var G__38825 = cljs.core.chunk_rest(seq__38793_38823__$1);
var G__38826 = c__4556__auto___38824;
var G__38827 = cljs.core.count(c__4556__auto___38824);
var G__38828 = (0);
seq__38793_38813 = G__38825;
chunk__38794_38814 = G__38826;
count__38795_38815 = G__38827;
i__38796_38816 = G__38828;
continue;
} else {
var new_el_38829 = cljs.core.first(seq__38793_38823__$1);
to_reload.replaceWith(new_el_38829);


var G__38830 = cljs.core.next(seq__38793_38823__$1);
var G__38831 = null;
var G__38832 = (0);
var G__38833 = (0);
seq__38793_38813 = G__38830;
chunk__38794_38814 = G__38831;
count__38795_38815 = G__38832;
i__38796_38816 = G__38833;
continue;
}
} else {
}
}
break;
}

var G__38834 = seq__38785;
var G__38835 = chunk__38790;
var G__38836 = count__38791;
var G__38837 = (i__38792 + (1));
seq__38785 = G__38834;
chunk__38790 = G__38835;
count__38791 = G__38836;
i__38792 = G__38837;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38785);
if(temp__5735__auto__){
var seq__38785__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38785__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38785__$1);
var G__38838 = cljs.core.chunk_rest(seq__38785__$1);
var G__38839 = c__4556__auto__;
var G__38840 = cljs.core.count(c__4556__auto__);
var G__38841 = (0);
seq__38785 = G__38838;
chunk__38790 = G__38839;
count__38791 = G__38840;
i__38792 = G__38841;
continue;
} else {
var to_reload = cljs.core.first(seq__38785__$1);
var seq__38786_38845 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.createElement(name)], null));
var chunk__38787_38846 = null;
var count__38788_38847 = (0);
var i__38789_38848 = (0);
while(true){
if((i__38789_38848 < count__38788_38847)){
var new_el_38849 = chunk__38787_38846.cljs$core$IIndexed$_nth$arity$2(null,i__38789_38848);
to_reload.replaceWith(new_el_38849);


var G__38850 = seq__38786_38845;
var G__38851 = chunk__38787_38846;
var G__38852 = count__38788_38847;
var G__38853 = (i__38789_38848 + (1));
seq__38786_38845 = G__38850;
chunk__38787_38846 = G__38851;
count__38788_38847 = G__38852;
i__38789_38848 = G__38853;
continue;
} else {
var temp__5735__auto___38854__$1 = cljs.core.seq(seq__38786_38845);
if(temp__5735__auto___38854__$1){
var seq__38786_38855__$1 = temp__5735__auto___38854__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38786_38855__$1)){
var c__4556__auto___38856 = cljs.core.chunk_first(seq__38786_38855__$1);
var G__38857 = cljs.core.chunk_rest(seq__38786_38855__$1);
var G__38858 = c__4556__auto___38856;
var G__38859 = cljs.core.count(c__4556__auto___38856);
var G__38860 = (0);
seq__38786_38845 = G__38857;
chunk__38787_38846 = G__38858;
count__38788_38847 = G__38859;
i__38789_38848 = G__38860;
continue;
} else {
var new_el_38861 = cljs.core.first(seq__38786_38855__$1);
to_reload.replaceWith(new_el_38861);


var G__38862 = cljs.core.next(seq__38786_38855__$1);
var G__38863 = null;
var G__38864 = (0);
var G__38865 = (0);
seq__38786_38845 = G__38862;
chunk__38787_38846 = G__38863;
count__38788_38847 = G__38864;
i__38789_38848 = G__38865;
continue;
}
} else {
}
}
break;
}

var G__38866 = cljs.core.next(seq__38785__$1);
var G__38867 = null;
var G__38868 = (0);
var G__38869 = (0);
seq__38785 = G__38866;
chunk__38790 = G__38867;
count__38791 = G__38868;
i__38792 = G__38869;
continue;
}
} else {
return null;
}
}
break;
}
});
seven_guis.util.define_custom_element_BANG_ = (function seven_guis$util$define_custom_element_BANG_(p__38798){
var map__38799 = p__38798;
var map__38799__$1 = (((((!((map__38799 == null))))?(((((map__38799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38799):map__38799);
var element_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38799__$1,new cljs.core.Keyword(null,"element-name","element-name",-1558490689));
var view_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38799__$1,new cljs.core.Keyword(null,"view-component","view-component",-984780836));
var props_to_observe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38799__$1,new cljs.core.Keyword(null,"props-to-observe","props-to-observe",-908678971));
var props_to_reflect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38799__$1,new cljs.core.Keyword(null,"props-to-reflect","props-to-reflect",724326204));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38799__$1,new cljs.core.Keyword(null,"this","this",-611633625));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.util.already_defined_components,(function (p1__38797_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38797_SHARP_,element_name,view_component);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__38801 = cljs.core.deref(seven_guis.util.already_defined_components);
return (fexpr__38801.cljs$core$IFn$_invoke$arity$1 ? fexpr__38801.cljs$core$IFn$_invoke$arity$1(element_name) : fexpr__38801.call(null,element_name));
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
var t = this;
if(cljs.core.truth_(this$)){
cljs.core.reset_BANG_(this$,t);
} else {
}

return console.log("Conectado");
})}),new cljs.core.Keyword(null,"attributeChangedCallback","attributeChangedCallback",973364810),({"value": (function (attr_name,old_value,new_value){
var this_38875__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this_38875__$1.reagent_atom_props,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr_name),new_value);

return console.log("Prop changed",attr_name,old_value,new_value);
})})], null),(function (){var iter__4529__auto__ = (function seven_guis$util$define_custom_element_BANG__$_iter__38802(s__38803){
return (new cljs.core.LazySeq(null,(function (){
var s__38803__$1 = s__38803;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38803__$1);
if(temp__5735__auto__){
var s__38803__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38803__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38803__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38805 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38804 = (0);
while(true){
if((i__38804 < size__4528__auto__)){
var prop = cljs.core._nth(c__4527__auto__,i__38804);
cljs.core.chunk_append(b__38805,cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,({"get": ((function (i__38804,prop,c__4527__auto__,size__4528__auto__,b__38805,s__38803__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__38799,map__38799__$1,element_name,view_component,props_to_observe,props_to_reflect,this$){
return (function (){
console.log("get prop",prop);

var this$__$1 = this;
return this$__$1.getAttribute(cljs.core.name(prop));
});})(i__38804,prop,c__4527__auto__,size__4528__auto__,b__38805,s__38803__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__38799,map__38799__$1,element_name,view_component,props_to_observe,props_to_reflect,this$))
, "set": ((function (i__38804,prop,c__4527__auto__,size__4528__auto__,b__38805,s__38803__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__38799,map__38799__$1,element_name,view_component,props_to_observe,props_to_reflect,this$){
return (function (val){
console.log("set val",prop,val);

var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1.reagent_atom_props,cljs.core.assoc,prop,val);

if(cljs.core.truth_((function (){var and__4115__auto__ = val;
if(cljs.core.truth_(and__4115__auto__)){
var fexpr__38806 = cljs.core.set(props_to_reflect);
return (fexpr__38806.cljs$core$IFn$_invoke$arity$1 ? fexpr__38806.cljs$core$IFn$_invoke$arity$1(prop) : fexpr__38806.call(null,prop));
} else {
return and__4115__auto__;
}
})())){
return this$__$1.setAttribute(cljs.core.name(prop),val);
} else {
if(cljs.core.truth_((function (){var fexpr__38807 = cljs.core.set(props_to_reflect);
return (fexpr__38807.cljs$core$IFn$_invoke$arity$1 ? fexpr__38807.cljs$core$IFn$_invoke$arity$1(prop) : fexpr__38807.call(null,prop));
})())){
return this$__$1.removeAttribute(cljs.core.name(prop));
} else {
return null;
}
}
});})(i__38804,prop,c__4527__auto__,size__4528__auto__,b__38805,s__38803__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__38799,map__38799__$1,element_name,view_component,props_to_observe,props_to_reflect,this$))
})]));

var G__38879 = (i__38804 + (1));
i__38804 = G__38879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38805),seven_guis$util$define_custom_element_BANG__$_iter__38802(cljs.core.chunk_rest(s__38803__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38805),null);
}
} else {
var prop = cljs.core.first(s__38803__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,({"get": ((function (prop,s__38803__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__38799,map__38799__$1,element_name,view_component,props_to_observe,props_to_reflect,this$){
return (function (){
console.log("get prop",prop);

var this$__$1 = this;
return this$__$1.getAttribute(cljs.core.name(prop));
});})(prop,s__38803__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__38799,map__38799__$1,element_name,view_component,props_to_observe,props_to_reflect,this$))
, "set": ((function (prop,s__38803__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__38799,map__38799__$1,element_name,view_component,props_to_observe,props_to_reflect,this$){
return (function (val){
console.log("set val",prop,val);

var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1.reagent_atom_props,cljs.core.assoc,prop,val);

if(cljs.core.truth_((function (){var and__4115__auto__ = val;
if(cljs.core.truth_(and__4115__auto__)){
var fexpr__38808 = cljs.core.set(props_to_reflect);
return (fexpr__38808.cljs$core$IFn$_invoke$arity$1 ? fexpr__38808.cljs$core$IFn$_invoke$arity$1(prop) : fexpr__38808.call(null,prop));
} else {
return and__4115__auto__;
}
})())){
return this$__$1.setAttribute(cljs.core.name(prop),val);
} else {
if(cljs.core.truth_((function (){var fexpr__38809 = cljs.core.set(props_to_reflect);
return (fexpr__38809.cljs$core$IFn$_invoke$arity$1 ? fexpr__38809.cljs$core$IFn$_invoke$arity$1(prop) : fexpr__38809.call(null,prop));
})())){
return this$__$1.removeAttribute(cljs.core.name(prop));
} else {
return null;
}
}
});})(prop,s__38803__$2,temp__5735__auto__,attach_shadow,set_reagent_props,render,component,map__38799,map__38799__$1,element_name,view_component,props_to_observe,props_to_reflect,this$))
})]),seven_guis$util$define_custom_element_BANG__$_iter__38802(cljs.core.rest(s__38803__$2)));
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

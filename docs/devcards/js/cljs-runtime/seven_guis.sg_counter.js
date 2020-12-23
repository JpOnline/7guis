goog.provide('seven_guis.sg_counter');
seven_guis.sg_counter.counter_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
seven_guis.sg_counter.counter = (function seven_guis$sg_counter$counter(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"@import\n    \"https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css\""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level","div.level",-1180372721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item","div.level-item",-68610818),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-rounded.is-large.is-light","a.button.is-rounded.is-large.is-light",-394180187),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.sg_counter.counter_state,cljs.core.inc);
})], null),"Count"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item","div.level-item",-68610818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),cljs.core.deref(seven_guis.sg_counter.counter_state)], null)], null)], null)], null);
});
seven_guis.sg_counter.register_component_BANG_ = (function seven_guis$sg_counter$register_component_BANG_(){
return seven_guis.util.define_custom_element_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element-name","element-name",-1558490689),"sg-counter",new cljs.core.Keyword(null,"view-component","view-component",-984780836),seven_guis.sg_counter.counter], null));
});
seven_guis.sg_counter.register_component_BANG_();

//# sourceMappingURL=seven_guis.sg_counter.js.map

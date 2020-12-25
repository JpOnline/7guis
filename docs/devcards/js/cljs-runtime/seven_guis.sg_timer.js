goog.provide('seven_guis.sg_timer');
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.sg_timer !== 'undefined') && (typeof seven_guis.sg_timer.state !== 'undefined')){
} else {
seven_guis.sg_timer.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),(50),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),(0),new cljs.core.Keyword(null,"start-timestamp","start-timestamp",-1555748521),((new Date()).getTime() / (1000))], null));
}
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.sg_timer !== 'undefined') && (typeof seven_guis.sg_timer.tick !== 'undefined')){
} else {
seven_guis.sg_timer.tick = setInterval((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.sg_timer.state,(function (p__36481){
var map__36482 = p__36481;
var map__36482__$1 = (((((!((map__36482 == null))))?(((((map__36482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36482):map__36482);
var state = map__36482__$1;
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36482__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var elapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36482__$1,new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698));
var start_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36482__$1,new cljs.core.Keyword(null,"start-timestamp","start-timestamp",-1555748521));
var new_elapsed = (((new Date()).getTime() / (1000)) - start_timestamp).toFixed((1));
var new_start = (((new Date()).getTime() / (1000)) - elapsed);
if((elapsed >= duration)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"start-timestamp","start-timestamp",-1555748521),new_start);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),new_elapsed);
}
}));
}),(100));
}
seven_guis.sg_timer.component = (function seven_guis$sg_timer$component(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"\n    #container {\n      max-width: 340px;\n    }\n    .flex {\n      display: flex;\n    }\n    .grow {\n      flex-grow: 1;\n      align-self: center;\n      margin: 0 5px;\n    }\n    #button-div {\n      display:flex;\n      flex-direction: column;\n      margin: 5px;\n    }\n    button {\n      width: 50%;\n      align-self: center;\n    }\n    "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Elapsed Time:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meter.grow","meter.grow",1999449867),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.sg_timer.state)),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.sg_timer.state))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.sg_timer.state)),"s"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Duration:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.grow","input.grow",608597590),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__36484_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(seven_guis.sg_timer.state,cljs.core.assoc,new cljs.core.Keyword(null,"duration","duration",1444101068),parseInt(p1__36484_SHARP_.target.value));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#button-div","div#button-div",-648313782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(seven_guis.sg_timer.state,cljs.core.assoc,new cljs.core.Keyword(null,"start-timestamp","start-timestamp",-1555748521),((new Date()).getTime() / (1000)));
})], null),"Reset"], null)], null)], null);
});
seven_guis.sg_timer.register_component_BANG_ = (function seven_guis$sg_timer$register_component_BANG_(){
return seven_guis.util.define_custom_element_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element-name","element-name",-1558490689),"sg-timer",new cljs.core.Keyword(null,"view-component","view-component",-984780836),seven_guis.sg_timer.component], null));
});
seven_guis.sg_timer.register_component_BANG_();

//# sourceMappingURL=seven_guis.sg_timer.js.map

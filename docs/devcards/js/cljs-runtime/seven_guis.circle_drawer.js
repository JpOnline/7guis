goog.provide('seven_guis.circle_drawer');
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.circle_drawer !== 'undefined') && (typeof seven_guis.circle_drawer.component_ref !== 'undefined')){
} else {
seven_guis.circle_drawer.component_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.circle_drawer !== 'undefined') && (typeof seven_guis.circle_drawer.component_state !== 'undefined')){
} else {
seven_guis.circle_drawer.component_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selected-circle-id","selected-circle-id",-2073837763),null,new cljs.core.Keyword(null,"undo-states","undo-states",1932899071),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889),cljs.core.List.EMPTY], null));
}
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.circle_drawer !== 'undefined') && (typeof seven_guis.circle_drawer.ui !== 'undefined')){
} else {
seven_guis.circle_drawer.ui = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null),new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null));
}
seven_guis.circle_drawer.draw_circle = (function seven_guis$circle_drawer$draw_circle(ctx,p__43159,fill_QMARK_){
var map__43160 = p__43159;
var map__43160__$1 = (((((!((map__43160 == null))))?(((((map__43160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43160):map__43160);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43160__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43160__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43160__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
ctx.beginPath();

ctx.arc(x,y,radius,(0),((2) * Math.PI),true);

(ctx.fillStyle = "gray");

if(cljs.core.truth_(fill_QMARK_)){
return ctx.fill();
} else {
return ctx.stroke();
}
});
cljs.core.add_watch(seven_guis.circle_drawer.component_state,new cljs.core.Keyword(null,"watcher","watcher",2145165251),(function (_,___$1,___$2,p__43162){
var map__43163 = p__43162;
var map__43163__$1 = (((((!((map__43163 == null))))?(((((map__43163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43163):map__43163);
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43163__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var selected_circle_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43163__$1,new cljs.core.Keyword(null,"selected-circle-id","selected-circle-id",-2073837763));
var temp__5735__auto__ = (function (){var G__43165 = cljs.core.deref(seven_guis.circle_drawer.component_ref);
var G__43165__$1 = (((G__43165 == null))?null:G__43165.shadow);
if((G__43165__$1 == null)){
return null;
} else {
return G__43165__$1.querySelector("canvas");
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var canvas = temp__5735__auto__;
var ctx = canvas.getContext("2d");
var clear_canvas = (function (){
return ctx.clearRect((0),(0),canvas.width,canvas.height);
});
var draw_circles = (function (){
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(seven_guis.circle_drawer.draw_circle,ctx),cljs.core.vals(circles)));
});
var selected_circle = (circles.cljs$core$IFn$_invoke$arity$1 ? circles.cljs$core$IFn$_invoke$arity$1(selected_circle_id) : circles.call(null,selected_circle_id));
var fill_selected_circle = (function (){
if(cljs.core.truth_(selected_circle)){
return seven_guis.circle_drawer.draw_circle(ctx,selected_circle,true);
} else {
return null;
}
});
clear_canvas();

draw_circles();

return fill_selected_circle();
} else {
return null;
}
}));
seven_guis.circle_drawer.create_circle = (function seven_guis$circle_drawer$create_circle(p__43166,x,y,radius){
var map__43167 = p__43166;
var map__43167__$1 = (((((!((map__43167 == null))))?(((((map__43167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43167):map__43167);
var state = map__43167__$1;
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43167__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var next_id = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(circles),(-1))) + (1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.assoc,next_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"id","id",-1388402092),next_id], null));
});
seven_guis.circle_drawer.points_distance = (function seven_guis$circle_drawer$points_distance(p__43170,p__43171){
var vec__43172 = p__43170;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43172,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43172,(1),null);
var vec__43175 = p__43171;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43175,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43175,(1),null);
var square = (function (p1__43169_SHARP_){
return (p1__43169_SHARP_ * p1__43169_SHARP_);
});
return Math.sqrt((square((x2 - x1)) + square((y2 - y1))));
});
seven_guis.circle_drawer.position_relative_to_canvas = (function seven_guis$circle_drawer$position_relative_to_canvas(evt){
var temp__5735__auto__ = (function (){var G__43178 = cljs.core.deref(seven_guis.circle_drawer.component_ref);
var G__43178__$1 = (((G__43178 == null))?null:G__43178.shadow);
if((G__43178__$1 == null)){
return null;
} else {
return G__43178__$1.querySelector("canvas");
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var canvas = temp__5735__auto__;
var ctx = canvas.getContext("2d");
var bound = canvas.getBoundingClientRect();
var scaleX = (canvas.width / bound.width);
var scaleY = (canvas.height / bound.height);
var x = ((evt.clientX - bound.left) * scaleX);
var y = ((evt.clientY - bound.top) * scaleY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
return null;
}
});
seven_guis.circle_drawer.register_undo = (function seven_guis$circle_drawer$register_undo(p__43179,old_circles){
var map__43180 = p__43179;
var map__43180__$1 = (((((!((map__43180 == null))))?(((((map__43180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43180):map__43180);
var state = map__43180__$1;
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43180__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(circles,old_circles)){
return state;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"undo-states","undo-states",1932899071),cljs.core.conj,old_circles),new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889),cljs.core.List.EMPTY);
}
});
seven_guis.circle_drawer.on_mouse_move = (function seven_guis$circle_drawer$on_mouse_move(evt){
var vec__43182 = seven_guis.circle_drawer.position_relative_to_canvas(evt);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43182,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43182,(1),null);
var distance_from_mouse = (function (p__43186){
var map__43187 = p__43186;
var map__43187__$1 = (((((!((map__43187 == null))))?(((((map__43187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43187):map__43187);
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return seven_guis.circle_drawer.points_distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});
var map__43185 = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(distance_from_mouse,cljs.core.vals(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state)))));
var map__43185__$1 = (((((!((map__43185 == null))))?(((((map__43185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43185):map__43185);
var nearest = map__43185__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43185__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43185__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
if(cljs.core.truth_((function (){var and__4115__auto__ = x;
if(cljs.core.truth_(and__4115__auto__)){
return (distance_from_mouse(nearest) < radius);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(seven_guis.circle_drawer.component_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-circle-id","selected-circle-id",-2073837763),id);
} else {
return null;
}
});
seven_guis.circle_drawer.on_canvas_click = (function seven_guis$circle_drawer$on_canvas_click(p__43190,evt){
var map__43191 = p__43190;
var map__43191__$1 = (((((!((map__43191 == null))))?(((((map__43191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43191):map__43191);
var state = map__43191__$1;
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43191__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var temp__5735__auto__ = seven_guis.circle_drawer.position_relative_to_canvas(evt);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__43193 = temp__5735__auto__;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43193,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43193,(1),null);
return seven_guis.circle_drawer.register_undo(seven_guis.circle_drawer.create_circle(state,x,y,(10)),circles);
} else {
return null;
}
});
seven_guis.circle_drawer.open_context_menu = (function seven_guis$circle_drawer$open_context_menu(ui_state,evt){
evt.preventDefault();

var container = (function (){var G__43196 = cljs.core.deref(seven_guis.circle_drawer.component_ref);
var G__43196__$1 = (((G__43196 == null))?null:G__43196.shadow);
if((G__43196__$1 == null)){
return null;
} else {
return G__43196__$1.querySelector("#container");
}
})();
var bound = container.getBoundingClientRect();
var x = (evt.clientX - bound.left);
var y = (evt.clientY - bound.top);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(ui_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"x","x",2099068185)], null),x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"y","y",-1757859776)], null),y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"visibility","visibility",1338380893)], null),"visible");
});
seven_guis.circle_drawer.dismiss_popup = (function seven_guis$circle_drawer$dismiss_popup(ui_state,evt){
return cljs.core.assoc_in(cljs.core.assoc_in(ui_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"visibility","visibility",1338380893)], null),"hidden"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279),new cljs.core.Keyword(null,"visibility","visibility",1338380893)], null),"hidden");
});
seven_guis.circle_drawer.open_diameter_dialog = (function seven_guis$circle_drawer$open_diameter_dialog(ui_state,evt){
return cljs.core.assoc_in(cljs.core.assoc_in(ui_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"visibility","visibility",1338380893)], null),"hidden"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279),new cljs.core.Keyword(null,"visibility","visibility",1338380893)], null),"visible");
});
seven_guis.circle_drawer.update_radius = (function seven_guis$circle_drawer$update_radius(state,new_radius){
var id = new cljs.core.Keyword(null,"selected-circle-id","selected-circle-id",-2073837763).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917),id], null),cljs.core.assoc,new cljs.core.Keyword(null,"radius","radius",-2073122258),new_radius);
});
seven_guis.circle_drawer.diameter_dialog = (function seven_guis$circle_drawer$diameter_dialog(){
var selected_id = new cljs.core.Keyword(null,"selected-circle-id","selected-circle-id",-2073837763).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state));
var map__43198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state)),selected_id);
var map__43198__$1 = (((((!((map__43198 == null))))?(((((map__43198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43198):map__43198);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43198__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43198__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43198__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
if(cljs.core.truth_((function (){var and__4115__auto__ = x;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("visible",new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui))));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#diameter-dialog.popup","div#diameter-dialog.popup",-890090160),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Adjust diameter of circle at (",x.toFixed(),", ",y.toFixed(),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#range","input#range",-1323747793),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state)),selected_id)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__43197_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.component_state,seven_guis.circle_drawer.update_radius,parseInt(p1__43197_SHARP_.target.value));
})], null)], null)], null);
} else {
return null;
}
});
seven_guis.circle_drawer.apply_undo = (function seven_guis$circle_drawer$apply_undo(p__43200){
var map__43201 = p__43200;
var map__43201__$1 = (((((!((map__43201 == null))))?(((((map__43201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43201):map__43201);
var state = map__43201__$1;
var actual_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43201__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var vec__43202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43201__$1,new cljs.core.Keyword(null,"undo-states","undo-states",1932899071));
var seq__43203 = cljs.core.seq(vec__43202);
var first__43204 = cljs.core.first(seq__43203);
var seq__43203__$1 = cljs.core.next(seq__43203);
var restored_circles = first__43204;
var _ = seq__43203__$1;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889),cljs.core.conj,actual_state),new cljs.core.Keyword(null,"circles","circles",-1947060917),restored_circles),new cljs.core.Keyword(null,"undo-states","undo-states",1932899071),cljs.core.rest);
});
seven_guis.circle_drawer.apply_redo = (function seven_guis$circle_drawer$apply_redo(p__43206){
var map__43207 = p__43206;
var map__43207__$1 = (((((!((map__43207 == null))))?(((((map__43207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43207):map__43207);
var state = map__43207__$1;
var actual_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43207__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var vec__43208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43207__$1,new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889));
var seq__43209 = cljs.core.seq(vec__43208);
var first__43210 = cljs.core.first(seq__43209);
var seq__43209__$1 = cljs.core.next(seq__43209);
var restored_circles = first__43210;
var _ = seq__43209__$1;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"undo-states","undo-states",1932899071),cljs.core.conj,actual_state),new cljs.core.Keyword(null,"circles","circles",-1947060917),restored_circles),new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889),cljs.core.rest);
});
seven_guis.circle_drawer.component = (function seven_guis$circle_drawer$component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),["\n    #container {\n      position: relative;\n    }\n    .dismiss-popup-layer {\n      z-index: 1199;\n      background-color: rgb(0 0 0 / 0.02);\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      visibility: ",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui))),"visible")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui))),"visible"))))?"visible":"hidden"),";\n    }\n    .popup {\n      z-index: 1200;\n      box-shadow: 2px 2px 10px 0px lightgrey;\n      padding: 7px;\n      width: fit-content;\n      background-color: white;\n      position: absolute;\n      left: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),"px;\n      top: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),"px;\n    }\n    #context-menu {\n      visibility: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),";\n    }\n    #diameter-dialog {\n      visibility: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),";\n    }\n    #context-menu:hover {\n      background-color: lightgray;\n      cursor: pointer;\n    }\n    #range {\n      width: 100%;\n    }\n    canvas {\n      width: 100%;\n      height: 400px;\n      border: 1px solid lightgray;\n    }\n    .flex-evenly {\n      display: flex;\n      justify-content: space-evenly;\n      padding: 10px;\n    }\n    button {\n      font-size: large;\n      padding: 5px 15px;\n    }\n    "].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-evenly","div.flex-evenly",-755075608),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"undo-states","undo-states",1932899071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.circle_drawer.component_state,seven_guis.circle_drawer.apply_undo);
})], null),"Undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.circle_drawer.component_state,seven_guis.circle_drawer.apply_redo);
})], null),"Redo"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),(function (p1__43212_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.open_context_menu,p1__43212_SHARP_);
}),new cljs.core.Keyword(null,"onMouseMove","onMouseMove",2083193327),seven_guis.circle_drawer.on_mouse_move,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__43213_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.component_state,seven_guis.circle_drawer.on_canvas_click,p1__43213_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dismiss-popup-layer","div.dismiss-popup-layer",-1404250359),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__43214_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.circle_drawer.component_state,(function (s){
return seven_guis.circle_drawer.register_undo(s,new cljs.core.Keyword(null,"old-circles","old-circles",751360994).cljs$core$IFn$_invoke$arity$1(s));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.dismiss_popup,p1__43214_SHARP_);
}),new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),(function (p1__43215_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.open_context_menu,p1__43215_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#context-menu.popup","div#context-menu.popup",-1544737701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__43216_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.circle_drawer.component_state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"old-circles","old-circles",751360994),new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(s));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.open_diameter_dialog,p1__43216_SHARP_);
})], null),"Adjust diameter.."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis.circle_drawer.diameter_dialog], null)], null)], null);
});
seven_guis.circle_drawer.register_component_BANG_ = (function seven_guis$circle_drawer$register_component_BANG_(){
return seven_guis.util.define_custom_element_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element-name","element-name",-1558490689),"circle-drawer",new cljs.core.Keyword(null,"view-component","view-component",-984780836),seven_guis.circle_drawer.component,new cljs.core.Keyword(null,"this","this",-611633625),seven_guis.circle_drawer.component_ref], null));
});
seven_guis.circle_drawer.register_component_BANG_();

//# sourceMappingURL=seven_guis.circle_drawer.js.map

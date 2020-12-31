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
seven_guis.circle_drawer.draw_circle = (function seven_guis$circle_drawer$draw_circle(ctx,p__43421,fill_QMARK_){
var map__43422 = p__43421;
var map__43422__$1 = (((((!((map__43422 == null))))?(((((map__43422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43422):map__43422);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43422__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43422__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43422__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
ctx.beginPath();

ctx.arc(x,y,radius,(0),((2) * Math.PI),true);

(ctx.fillStyle = "gray");

if(cljs.core.truth_(fill_QMARK_)){
return ctx.fill();
} else {
return ctx.stroke();
}
});
cljs.core.add_watch(seven_guis.circle_drawer.component_state,new cljs.core.Keyword(null,"watcher","watcher",2145165251),(function (_,___$1,___$2,p__43424){
var map__43425 = p__43424;
var map__43425__$1 = (((((!((map__43425 == null))))?(((((map__43425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43425):map__43425);
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43425__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var selected_circle_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43425__$1,new cljs.core.Keyword(null,"selected-circle-id","selected-circle-id",-2073837763));
var temp__5735__auto__ = (function (){var G__43427 = cljs.core.deref(seven_guis.circle_drawer.component_ref);
var G__43427__$1 = (((G__43427 == null))?null:G__43427.shadow);
if((G__43427__$1 == null)){
return null;
} else {
return G__43427__$1.querySelector("canvas");
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
seven_guis.circle_drawer.create_circle = (function seven_guis$circle_drawer$create_circle(p__43428,x,y,radius){
var map__43429 = p__43428;
var map__43429__$1 = (((((!((map__43429 == null))))?(((((map__43429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43429):map__43429);
var state = map__43429__$1;
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43429__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var next_id = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(circles),(-1))) + (1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.assoc,next_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"id","id",-1388402092),next_id], null));
});
seven_guis.circle_drawer.create_circle_test = (function seven_guis$circle_drawer$create_circle_test(){
return cljs.test.test_var(seven_guis.circle_drawer.create_circle_test.cljs$lang$var);
});
seven_guis.circle_drawer.create_circle_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){try{var values__9937__auto__ = (new cljs.core.List(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(seven_guis.circle_drawer.create_circle(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.PersistentArrayMap.EMPTY], null),(0),(0),(10))),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null)], null),null,(1),null)),(2),null));
var result__9938__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9937__auto__);
if(cljs.core.truth_(result__9938__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),9,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.list(new cljs.core.Symbol(null,"create-circle","create-circle",716795806,null),(0),(0),(10)),new cljs.core.Keyword(null,"circles","circles",-1947060917)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null)], null)),44,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),9,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.list(new cljs.core.Symbol(null,"create-circle","create-circle",716795806,null),(0),(0),(10)),new cljs.core.Keyword(null,"circles","circles",-1947060917)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null)], null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto__),null,(1),null)),(2),null)),null]));
}

return result__9938__auto__;
}catch (e43431){var t__9974__auto__ = e43431;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),9,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.list(new cljs.core.Symbol(null,"create-circle","create-circle",716795806,null),(0),(0),(10)),new cljs.core.Keyword(null,"circles","circles",-1947060917)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null)], null)),44,t__9974__auto__,null]));
}})()], 0));

try{return null;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(seven_guis.circle_drawer.create_circle_test.cljs$lang$var = new cljs.core.Var(function(){return seven_guis.circle_drawer.create_circle_test;},new cljs.core.Symbol("seven-guis.circle-drawer","create-circle-test","seven-guis.circle-drawer/create-circle-test",-2087589029,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"seven-guis.circle-drawer","seven-guis.circle-drawer",1961887850,null),new cljs.core.Symbol(null,"create-circle-test","create-circle-test",1131532499,null),"seven_guis/circle_drawer.cljs",28,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(seven_guis.circle_drawer.create_circle_test)?seven_guis.circle_drawer.create_circle_test.cljs$lang$test:null)])));
seven_guis.circle_drawer.points_distance = (function seven_guis$circle_drawer$points_distance(p__43433,p__43434){
var vec__43435 = p__43433;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43435,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43435,(1),null);
var vec__43438 = p__43434;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43438,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43438,(1),null);
var square = (function (p1__43432_SHARP_){
return (p1__43432_SHARP_ * p1__43432_SHARP_);
});
return Math.sqrt((square((x2 - x1)) + square((y2 - y1))));
});
seven_guis.circle_drawer.points_distance_test = (function seven_guis$circle_drawer$points_distance_test(){
return cljs.test.test_var(seven_guis.circle_drawer.points_distance_test.cljs$lang$var);
});
seven_guis.circle_drawer.points_distance_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){try{var values__9937__auto__ = (new cljs.core.List(null,(5),(new cljs.core.List(null,seven_guis.circle_drawer.points_distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)),null,(1),null)),(2),null));
var result__9938__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9937__auto__);
if(cljs.core.truth_(result__9938__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),9,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),53,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),9,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),53,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto__),null,(1),null)),(2),null)),null]));
}

return result__9938__auto__;
}catch (e43441){var t__9974__auto__ = e43441;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),9,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),53,t__9974__auto__,null]));
}})()], 0));

try{try{var values__9937__auto___43521 = (new cljs.core.List(null,(5),(new cljs.core.List(null,seven_guis.circle_drawer.points_distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null)),null,(1),null)),(2),null));
var result__9938__auto___43522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9937__auto___43521);
if(cljs.core.truth_(result__9938__auto___43522)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),9,54,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null))),54,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto___43521),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),9,54,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null))),54,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto___43521),null,(1),null)),(2),null)),null]));
}

}catch (e43442){var t__9974__auto___43526 = e43442;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),9,54,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null))),54,t__9974__auto___43526,null]));
}
try{var values__9937__auto__ = (new cljs.core.List(null,(13),(new cljs.core.List(null,seven_guis.circle_drawer.points_distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13)], null)),null,(1),null)),(2),null));
var result__9938__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9937__auto__);
if(cljs.core.truth_(result__9938__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),9,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(13),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13)], null))),55,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),9,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(13),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13)], null))),55,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto__),null,(1),null)),(2),null)),null]));
}

return result__9938__auto__;
}catch (e43443){var t__9974__auto__ = e43443;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),9,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(13),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13)], null))),55,t__9974__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(seven_guis.circle_drawer.points_distance_test.cljs$lang$var = new cljs.core.Var(function(){return seven_guis.circle_drawer.points_distance_test;},new cljs.core.Symbol("seven-guis.circle-drawer","points-distance-test","seven-guis.circle-drawer/points-distance-test",-1008603132,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"seven-guis.circle-drawer","seven-guis.circle-drawer",1961887850,null),new cljs.core.Symbol(null,"points-distance-test","points-distance-test",-2109602164,null),"seven_guis/circle_drawer.cljs",30,1,51,51,cljs.core.List.EMPTY,null,(cljs.core.truth_(seven_guis.circle_drawer.points_distance_test)?seven_guis.circle_drawer.points_distance_test.cljs$lang$test:null)])));
seven_guis.circle_drawer.position_relative_to_canvas = (function seven_guis$circle_drawer$position_relative_to_canvas(evt){
var temp__5735__auto__ = (function (){var G__43444 = cljs.core.deref(seven_guis.circle_drawer.component_ref);
var G__43444__$1 = (((G__43444 == null))?null:G__43444.shadow);
if((G__43444__$1 == null)){
return null;
} else {
return G__43444__$1.querySelector("canvas");
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
seven_guis.circle_drawer.register_undo = (function seven_guis$circle_drawer$register_undo(p__43445,old_circles){
var map__43446 = p__43445;
var map__43446__$1 = (((((!((map__43446 == null))))?(((((map__43446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43446):map__43446);
var state = map__43446__$1;
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43446__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(circles,old_circles)){
return state;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"undo-states","undo-states",1932899071),cljs.core.conj,old_circles),new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889),cljs.core.List.EMPTY);
}
});
seven_guis.circle_drawer.on_mouse_move = (function seven_guis$circle_drawer$on_mouse_move(evt){
var vec__43448 = seven_guis.circle_drawer.position_relative_to_canvas(evt);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43448,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43448,(1),null);
var distance_from_mouse = (function (p__43452){
var map__43453 = p__43452;
var map__43453__$1 = (((((!((map__43453 == null))))?(((((map__43453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43453):map__43453);
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43453__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43453__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return seven_guis.circle_drawer.points_distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});
var map__43451 = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(distance_from_mouse,cljs.core.vals(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state)))));
var map__43451__$1 = (((((!((map__43451 == null))))?(((((map__43451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43451):map__43451);
var nearest = map__43451__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43451__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43451__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
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
seven_guis.circle_drawer.on_canvas_click = (function seven_guis$circle_drawer$on_canvas_click(p__43456,evt){
var map__43457 = p__43456;
var map__43457__$1 = (((((!((map__43457 == null))))?(((((map__43457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43457):map__43457);
var state = map__43457__$1;
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43457__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var temp__5735__auto__ = seven_guis.circle_drawer.position_relative_to_canvas(evt);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__43459 = temp__5735__auto__;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43459,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43459,(1),null);
return seven_guis.circle_drawer.register_undo(seven_guis.circle_drawer.create_circle(state,x,y,(10)),circles);
} else {
return null;
}
});
seven_guis.circle_drawer.open_context_menu = (function seven_guis$circle_drawer$open_context_menu(ui_state,evt){
evt.preventDefault();

var container = (function (){var G__43462 = cljs.core.deref(seven_guis.circle_drawer.component_ref);
var G__43462__$1 = (((G__43462 == null))?null:G__43462.shadow);
if((G__43462__$1 == null)){
return null;
} else {
return G__43462__$1.querySelector("#container");
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
var map__43464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state)),selected_id);
var map__43464__$1 = (((((!((map__43464 == null))))?(((((map__43464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43464):map__43464);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43464__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43464__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43464__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
if(cljs.core.truth_((function (){var and__4115__auto__ = x;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("visible",new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui))));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#diameter-dialog.popup","div#diameter-dialog.popup",-890090160),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Adjust diameter of circle at (",x.toFixed(),", ",y.toFixed(),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#range","input#range",-1323747793),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state)),selected_id)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__43463_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.component_state,seven_guis.circle_drawer.update_radius,parseInt(p1__43463_SHARP_.target.value));
})], null)], null)], null);
} else {
return null;
}
});
seven_guis.circle_drawer.apply_undo = (function seven_guis$circle_drawer$apply_undo(p__43466){
var map__43467 = p__43466;
var map__43467__$1 = (((((!((map__43467 == null))))?(((((map__43467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43467):map__43467);
var state = map__43467__$1;
var actual_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43467__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var vec__43468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43467__$1,new cljs.core.Keyword(null,"undo-states","undo-states",1932899071));
var seq__43469 = cljs.core.seq(vec__43468);
var first__43470 = cljs.core.first(seq__43469);
var seq__43469__$1 = cljs.core.next(seq__43469);
var restored_circles = first__43470;
var _ = seq__43469__$1;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889),cljs.core.conj,actual_state),new cljs.core.Keyword(null,"circles","circles",-1947060917),restored_circles),new cljs.core.Keyword(null,"undo-states","undo-states",1932899071),cljs.core.rest);
});
seven_guis.circle_drawer.apply_redo = (function seven_guis$circle_drawer$apply_redo(p__43472){
var map__43473 = p__43472;
var map__43473__$1 = (((((!((map__43473 == null))))?(((((map__43473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43473):map__43473);
var state = map__43473__$1;
var actual_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43473__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var vec__43474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43473__$1,new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889));
var seq__43475 = cljs.core.seq(vec__43474);
var first__43476 = cljs.core.first(seq__43475);
var seq__43475__$1 = cljs.core.next(seq__43475);
var restored_circles = first__43476;
var _ = seq__43475__$1;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"undo-states","undo-states",1932899071),cljs.core.conj,actual_state),new cljs.core.Keyword(null,"circles","circles",-1947060917),restored_circles),new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889),cljs.core.rest);
});
seven_guis.circle_drawer.component = (function seven_guis$circle_drawer$component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),["\n    #container {\n      position: relative;\n    }\n    .dismiss-popup-layer {\n      z-index: 1199;\n      background-color: rgb(0 0 0 / 0.02);\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      visibility: ",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui))),"visible")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui))),"visible"))))?"visible":"hidden"),";\n    }\n    .popup {\n      z-index: 1200;\n      box-shadow: 2px 2px 10px 0px lightgrey;\n      padding: 7px;\n      width: fit-content;\n      background-color: white;\n      position: absolute;\n      left: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),"px;\n      top: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),"px;\n    }\n    #context-menu {\n      visibility: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),";\n    }\n    #diameter-dialog {\n      visibility: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),";\n    }\n    #context-menu:hover {\n      background-color: lightgray;\n      cursor: pointer;\n    }\n    #range {\n      width: 100%;\n    }\n    canvas {\n      width: 100%;\n      height: 400px;\n      border: 1px solid lightgray;\n    }\n    .flex-evenly {\n      display: flex;\n      justify-content: space-evenly;\n      padding: 10px;\n    }\n    button {\n      font-size: large;\n      padding: 5px 15px;\n    }\n    "].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-evenly","div.flex-evenly",-755075608),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"undo-states","undo-states",1932899071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.circle_drawer.component_state,seven_guis.circle_drawer.apply_undo);
})], null),"Undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.circle_drawer.component_state,seven_guis.circle_drawer.apply_redo);
})], null),"Redo"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),(function (p1__43478_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.open_context_menu,p1__43478_SHARP_);
}),new cljs.core.Keyword(null,"onMouseMove","onMouseMove",2083193327),seven_guis.circle_drawer.on_mouse_move,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__43479_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.component_state,seven_guis.circle_drawer.on_canvas_click,p1__43479_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dismiss-popup-layer","div.dismiss-popup-layer",-1404250359),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__43480_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.circle_drawer.component_state,(function (s){
return seven_guis.circle_drawer.register_undo(s,new cljs.core.Keyword(null,"old-circles","old-circles",751360994).cljs$core$IFn$_invoke$arity$1(s));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.dismiss_popup,p1__43480_SHARP_);
}),new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),(function (p1__43481_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.open_context_menu,p1__43481_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#context-menu.popup","div#context-menu.popup",-1544737701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__43482_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.circle_drawer.component_state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"old-circles","old-circles",751360994),new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(s));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.open_diameter_dialog,p1__43482_SHARP_);
})], null),"Adjust diameter.."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis.circle_drawer.diameter_dialog], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43483_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43491){
var vec__43492 = p__43491;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43492,(0),null);
var map__43495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43492,(1),null);
var map__43495__$1 = (((((!((map__43495 == null))))?(((((map__43495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43495):map__43495);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43495__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43495__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([radius,id]);
}),p1__43483_SHARP_);
}),new cljs.core.Keyword(null,"undo-states","undo-states",1932899071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43484_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43503){
var vec__43504 = p__43503;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43504,(0),null);
var map__43507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43504,(1),null);
var map__43507__$1 = (((((!((map__43507 == null))))?(((((map__43507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43507):map__43507);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43507__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43507__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([radius,id]);
}),p1__43484_SHARP_);
}),new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state))))], null)], null)], null);
});
seven_guis.circle_drawer.register_component_BANG_ = (function seven_guis$circle_drawer$register_component_BANG_(){
return seven_guis.util.define_custom_element_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element-name","element-name",-1558490689),"circle-drawer",new cljs.core.Keyword(null,"view-component","view-component",-984780836),seven_guis.circle_drawer.component,new cljs.core.Keyword(null,"this","this",-611633625),seven_guis.circle_drawer.component_ref], null));
});
seven_guis.circle_drawer.register_component_BANG_();

//# sourceMappingURL=seven_guis.circle_drawer.js.map

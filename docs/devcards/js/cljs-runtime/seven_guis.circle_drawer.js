goog.provide('seven_guis.circle_drawer');
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.circle_drawer !== 'undefined') && (typeof seven_guis.circle_drawer.component_ref !== 'undefined')){
} else {
seven_guis.circle_drawer.component_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.circle_drawer !== 'undefined') && (typeof seven_guis.circle_drawer.component_state !== 'undefined')){
} else {
seven_guis.circle_drawer.component_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selected-circle-id","selected-circle-id",-2073837763),null,new cljs.core.Keyword(null,"undo-states","undo-states",1932899071),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"redo-states","redo-states",-1162242889),cljs.core.PersistentVector.EMPTY], null));
}
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.circle_drawer !== 'undefined') && (typeof seven_guis.circle_drawer.ui !== 'undefined')){
} else {
seven_guis.circle_drawer.ui = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null),new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null));
}
seven_guis.circle_drawer.draw_circle = (function seven_guis$circle_drawer$draw_circle(ctx,p__40457,fill_QMARK_){
var map__40458 = p__40457;
var map__40458__$1 = (((((!((map__40458 == null))))?(((((map__40458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40458):map__40458);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40458__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40458__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40458__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
ctx.beginPath();

ctx.arc(x,y,radius,(0),((2) * Math.PI),true);

(ctx.fillStyle = "gray");

if(cljs.core.truth_(fill_QMARK_)){
return ctx.fill();
} else {
return ctx.stroke();
}
});
cljs.core.add_watch(seven_guis.circle_drawer.component_state,new cljs.core.Keyword(null,"watcher","watcher",2145165251),(function (_,___$1,___$2,p__40460){
var map__40461 = p__40460;
var map__40461__$1 = (((((!((map__40461 == null))))?(((((map__40461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40461):map__40461);
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40461__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var selected_circle_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40461__$1,new cljs.core.Keyword(null,"selected-circle-id","selected-circle-id",-2073837763));
var temp__5735__auto__ = (function (){var G__40463 = cljs.core.deref(seven_guis.circle_drawer.component_ref);
var G__40463__$1 = (((G__40463 == null))?null:G__40463.shadow);
if((G__40463__$1 == null)){
return null;
} else {
return G__40463__$1.querySelector("canvas");
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
seven_guis.circle_drawer.create_circle = (function seven_guis$circle_drawer$create_circle(p__40464,x,y,radius){
var map__40465 = p__40464;
var map__40465__$1 = (((((!((map__40465 == null))))?(((((map__40465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40465):map__40465);
var state = map__40465__$1;
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40465__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
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
}catch (e40467){var t__9974__auto__ = e40467;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),9,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.list(new cljs.core.Symbol(null,"create-circle","create-circle",716795806,null),(0),(0),(10)),new cljs.core.Keyword(null,"circles","circles",-1947060917)),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null)], null)),44,t__9974__auto__,null]));
}})()], 0));

try{return null;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(seven_guis.circle_drawer.create_circle_test.cljs$lang$var = new cljs.core.Var(function(){return seven_guis.circle_drawer.create_circle_test;},new cljs.core.Symbol("seven-guis.circle-drawer","create-circle-test","seven-guis.circle-drawer/create-circle-test",-2087589029,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"seven-guis.circle-drawer","seven-guis.circle-drawer",1961887850,null),new cljs.core.Symbol(null,"create-circle-test","create-circle-test",1131532499,null),"seven_guis/circle_drawer.cljs",28,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(seven_guis.circle_drawer.create_circle_test)?seven_guis.circle_drawer.create_circle_test.cljs$lang$test:null)])));
seven_guis.circle_drawer.points_distance = (function seven_guis$circle_drawer$points_distance(p__40469,p__40470){
var vec__40471 = p__40469;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40471,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40471,(1),null);
var vec__40474 = p__40470;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40474,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40474,(1),null);
var square = (function (p1__40468_SHARP_){
return (p1__40468_SHARP_ * p1__40468_SHARP_);
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
}catch (e40477){var t__9974__auto__ = e40477;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),9,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),53,t__9974__auto__,null]));
}})()], 0));

try{try{var values__9937__auto___40512 = (new cljs.core.List(null,(5),(new cljs.core.List(null,seven_guis.circle_drawer.points_distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null)),null,(1),null)),(2),null));
var result__9938__auto___40513 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9937__auto___40512);
if(cljs.core.truth_(result__9938__auto___40513)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),9,54,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null))),54,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto___40512),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),9,54,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null))),54,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto___40512),null,(1),null)),(2),null)),null]));
}

}catch (e40478){var t__9974__auto___40514 = e40478;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),9,54,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null))),54,t__9974__auto___40514,null]));
}
try{var values__9937__auto__ = (new cljs.core.List(null,(13),(new cljs.core.List(null,seven_guis.circle_drawer.points_distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13)], null)),null,(1),null)),(2),null));
var result__9938__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9937__auto__);
if(cljs.core.truth_(result__9938__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),9,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(13),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13)], null))),55,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),9,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(13),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13)], null))),55,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto__),null,(1),null)),(2),null)),null]));
}

return result__9938__auto__;
}catch (e40479){var t__9974__auto__ = e40479;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["seven_guis/circle_drawer.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),9,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(13),cljs.core.list(new cljs.core.Symbol(null,"points-distance","points-distance",-563146470,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13)], null))),55,t__9974__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(seven_guis.circle_drawer.points_distance_test.cljs$lang$var = new cljs.core.Var(function(){return seven_guis.circle_drawer.points_distance_test;},new cljs.core.Symbol("seven-guis.circle-drawer","points-distance-test","seven-guis.circle-drawer/points-distance-test",-1008603132,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"seven-guis.circle-drawer","seven-guis.circle-drawer",1961887850,null),new cljs.core.Symbol(null,"points-distance-test","points-distance-test",-2109602164,null),"seven_guis/circle_drawer.cljs",30,1,51,51,cljs.core.List.EMPTY,null,(cljs.core.truth_(seven_guis.circle_drawer.points_distance_test)?seven_guis.circle_drawer.points_distance_test.cljs$lang$test:null)])));
seven_guis.circle_drawer.canvas_mouse_event = (function seven_guis$circle_drawer$canvas_mouse_event(evt,f){
var temp__5735__auto__ = (function (){var G__40480 = cljs.core.deref(seven_guis.circle_drawer.component_ref);
var G__40480__$1 = (((G__40480 == null))?null:G__40480.shadow);
if((G__40480__$1 == null)){
return null;
} else {
return G__40480__$1.querySelector("canvas");
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
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
} else {
return null;
}
});
seven_guis.circle_drawer.on_mouse_move = (function seven_guis$circle_drawer$on_mouse_move(evt){
return seven_guis.circle_drawer.canvas_mouse_event(evt,(function (x,y){
var distance_from_mouse = (function (p__40482){
var map__40483 = p__40482;
var map__40483__$1 = (((((!((map__40483 == null))))?(((((map__40483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40483):map__40483);
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40483__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40483__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return seven_guis.circle_drawer.points_distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});
var map__40481 = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(distance_from_mouse,cljs.core.vals(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state)))));
var map__40481__$1 = (((((!((map__40481 == null))))?(((((map__40481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40481):map__40481);
var nearest = map__40481__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40481__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40481__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
if((distance_from_mouse(nearest) < radius)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(seven_guis.circle_drawer.component_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-circle-id","selected-circle-id",-2073837763),id);
} else {
return null;
}
}));
});
seven_guis.circle_drawer.on_canvas_click = (function seven_guis$circle_drawer$on_canvas_click(evt){
return seven_guis.circle_drawer.canvas_mouse_event(evt,(function (x,y){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(seven_guis.circle_drawer.component_state,seven_guis.circle_drawer.create_circle,x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10)], 0));
}));
});
seven_guis.circle_drawer.open_context_menu = (function seven_guis$circle_drawer$open_context_menu(ui_state,evt){
evt.preventDefault();

var container = (function (){var G__40486 = cljs.core.deref(seven_guis.circle_drawer.component_ref);
var G__40486__$1 = (((G__40486 == null))?null:G__40486.shadow);
if((G__40486__$1 == null)){
return null;
} else {
return G__40486__$1.querySelector("#container");
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("visible",new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui))))){
var selected_id = new cljs.core.Keyword(null,"selected-circle-id","selected-circle-id",-2073837763).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state));
var map__40488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state)),selected_id);
var map__40488__$1 = (((((!((map__40488 == null))))?(((((map__40488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40488):map__40488);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40488__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40488__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40488__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#diameter-dialog.popup","div#diameter-dialog.popup",-890090160),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Adjust diameter of circle at (",x.toFixed(),", ",y.toFixed(),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#range","input#range",-1323747793),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.component_state)),selected_id)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__40487_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.component_state,seven_guis.circle_drawer.update_radius,parseInt(p1__40487_SHARP_.target.value));
})], null)], null)], null);
} else {
return null;
}
});
seven_guis.circle_drawer.component = (function seven_guis$circle_drawer$component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),["\n    #container {\n      position: relative;\n    }\n    .dismiss-popup-layer {\n      z-index: 1199;\n      background-color: rgb(0 0 0 / 0.02);\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      visibility: ",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui))),"visible")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui))),"visible"))))?"visible":"hidden"),";\n    }\n    .popup {\n      z-index: 1200;\n      box-shadow: 2px 2px 10px 0px lightgrey;\n      padding: 7px;\n      width: fit-content;\n      background-color: white;\n      position: absolute;\n      left: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),"px;\n      top: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),"px;\n    }\n    #context-menu {\n      visibility: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),";\n    }\n    #diameter-dialog {\n      visibility: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diameter-dialog","diameter-dialog",-87995279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.circle_drawer.ui)))),";\n    }\n    #context-menu:hover {\n      background-color: lightgray;\n      cursor: pointer;\n    }\n    #range {\n      width: 100%;\n    }\n    canvas {\n      width: 100%;\n      height: 400px;\n      border: 1px solid lightgray;\n    }\n    "].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),(function (p1__40490_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.open_context_menu,p1__40490_SHARP_);
}),new cljs.core.Keyword(null,"onMouseMove","onMouseMove",2083193327),seven_guis.circle_drawer.on_mouse_move,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),seven_guis.circle_drawer.on_canvas_click], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dismiss-popup-layer","div.dismiss-popup-layer",-1404250359),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__40491_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.dismiss_popup,p1__40491_SHARP_);
}),new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),(function (p1__40492_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.open_context_menu,p1__40492_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#context-menu.popup","div#context-menu.popup",-1544737701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__40493_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.circle_drawer.ui,seven_guis.circle_drawer.open_diameter_dialog,p1__40493_SHARP_);
})], null),"Adjust diameter.."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis.circle_drawer.diameter_dialog], null)], null)], null);
});
seven_guis.circle_drawer.register_component_BANG_ = (function seven_guis$circle_drawer$register_component_BANG_(){
return seven_guis.util.define_custom_element_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element-name","element-name",-1558490689),"circle-drawer",new cljs.core.Keyword(null,"view-component","view-component",-984780836),seven_guis.circle_drawer.component,new cljs.core.Keyword(null,"this","this",-611633625),seven_guis.circle_drawer.component_ref], null));
});
seven_guis.circle_drawer.register_component_BANG_();

//# sourceMappingURL=seven_guis.circle_drawer.js.map

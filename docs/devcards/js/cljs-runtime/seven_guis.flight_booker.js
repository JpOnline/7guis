goog.provide('seven_guis.flight_booker');
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.flight_booker !== 'undefined') && (typeof seven_guis.flight_booker.booking_state !== 'undefined')){
} else {
seven_guis.flight_booker.booking_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return?","return?",1616989313),false,new cljs.core.Keyword(null,"start-date","start-date",295168731),"01.01.2021",new cljs.core.Keyword(null,"return-date","return-date",520965446),"01.01.2021"], null));
}
seven_guis.flight_booker.disable_return_QMARK_ = (function seven_guis$flight_booker$disable_return_QMARK_(p__36025){
var map__36026 = p__36025;
var map__36026__$1 = (((((!((map__36026 == null))))?(((((map__36026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36026):map__36026);
var return_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36026__$1,new cljs.core.Keyword(null,"return?","return?",1616989313));
return cljs.core.not(return_QMARK_);
});
seven_guis.flight_booker.invalid_date_QMARK_ = (function seven_guis$flight_booker$invalid_date_QMARK_(date){
return cljs.core.not(cljs.core.re_find(/^\s*\d\d\D\d\d\D\d\d\d\d\s*$/,date));
});
seven_guis.flight_booker.get_date = (function seven_guis$flight_booker$get_date(date_string){
var vec__36028 = cljs.core.re_find(/(\d\d)\D(\d\d)\D(\d\d\d\d)/,date_string);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36028,(0),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36028,(1),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36028,(2),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36028,(3),null);
return (new Date(year,(month - (1)),day));
});
seven_guis.flight_booker.process_date = (function seven_guis$flight_booker$process_date(date_string){
if(seven_guis.flight_booker.invalid_date_QMARK_(date_string)){
return date_string;
} else {
var date = seven_guis.flight_booker.get_date(date_string);
var vec__36031 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.getDate(),(date.getMonth() + (1)),date.getFullYear()], null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(1),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(2),null);
var day_str = (((day < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(day));
var month_str = (((month < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(month));
var year_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(year);
return [day_str,".",month_str,".",year_str].join('');
}
});
seven_guis.flight_booker.disable_book_button_QMARK_ = (function seven_guis$flight_booker$disable_book_button_QMARK_(p__36034){
var map__36035 = p__36034;
var map__36035__$1 = (((((!((map__36035 == null))))?(((((map__36035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36035):map__36035);
var return_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36035__$1,new cljs.core.Keyword(null,"return?","return?",1616989313));
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36035__$1,new cljs.core.Keyword(null,"start-date","start-date",295168731));
var return_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36035__$1,new cljs.core.Keyword(null,"return-date","return-date",520965446));
var start_date_obj = seven_guis.flight_booker.get_date(start_date);
var return_date_obj = seven_guis.flight_booker.get_date(return_date);
var or__4126__auto__ = seven_guis.flight_booker.invalid_date_QMARK_(start_date);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var and__4115__auto__ = return_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return seven_guis.flight_booker.invalid_date_QMARK_(return_date);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var and__4115__auto__ = return_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (return_date_obj < start_date_obj);
} else {
return and__4115__auto__;
}
}
}
});
seven_guis.flight_booker.booked_message = (function seven_guis$flight_booker$booked_message(p__36037){
var map__36038 = p__36037;
var map__36038__$1 = (((((!((map__36038 == null))))?(((((map__36038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36038):map__36038);
var return_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36038__$1,new cljs.core.Keyword(null,"return?","return?",1616989313));
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36038__$1,new cljs.core.Keyword(null,"start-date","start-date",295168731));
var return_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36038__$1,new cljs.core.Keyword(null,"return-date","return-date",520965446));
var way = (cljs.core.truth_(return_QMARK_)?"two-way":"one-way");
var with_return = (cljs.core.truth_(return_QMARK_)?[" with return on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(return_date)].join(''):null);
return ["You have bought a ",way," flight on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_date),with_return,"."].join('');
});
seven_guis.flight_booker.component = (function seven_guis$flight_booker$component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"\n    div {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    * {\n      margin: 2px;\n      border-radius: 6px;\n      min-width: 160px;\n    }\n    \n    select {\n      text-align-last: center;\n    }\n    "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__36040_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(seven_guis.flight_booker.booking_state,cljs.core.assoc,new cljs.core.Keyword(null,"return?","return?",1616989313),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("return",p1__36040_SHARP_.target.value));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"one-way"], null),"One-way Flight"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"return"], null),"Return Flight"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"start-date","start-date",295168731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.flight_booker.booking_state)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__36041_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(seven_guis.flight_booker.booking_state,cljs.core.assoc,new cljs.core.Keyword(null,"start-date","start-date",295168731),seven_guis.flight_booker.process_date(p1__36041_SHARP_.target.value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),((seven_guis.flight_booker.invalid_date_QMARK_(new cljs.core.Keyword(null,"start-date","start-date",295168731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.flight_booker.booking_state))))?"red":"inherit")], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"return-date","return-date",520965446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.flight_booker.booking_state)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),seven_guis.flight_booker.disable_return_QMARK_(cljs.core.deref(seven_guis.flight_booker.booking_state)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__36042_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(seven_guis.flight_booker.booking_state,cljs.core.assoc,new cljs.core.Keyword(null,"return-date","return-date",520965446),seven_guis.flight_booker.process_date(p1__36042_SHARP_.target.value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),(((((!(seven_guis.flight_booker.disable_return_QMARK_(cljs.core.deref(seven_guis.flight_booker.booking_state))))) && (seven_guis.flight_booker.invalid_date_QMARK_(new cljs.core.Keyword(null,"return-date","return-date",520965446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.flight_booker.booking_state))))))?"red":"inherit")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return alert(seven_guis.flight_booker.booked_message(cljs.core.deref(seven_guis.flight_booker.booking_state)));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),seven_guis.flight_booker.disable_book_button_QMARK_(cljs.core.deref(seven_guis.flight_booker.booking_state))], null),"Book"], null)], null)], null);
});
seven_guis.flight_booker.register_component_BANG_ = (function seven_guis$flight_booker$register_component_BANG_(){
return seven_guis.util.define_custom_element_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element-name","element-name",-1558490689),"flight-booker",new cljs.core.Keyword(null,"view-component","view-component",-984780836),seven_guis.flight_booker.component], null));
});
seven_guis.flight_booker.register_component_BANG_();

//# sourceMappingURL=seven_guis.flight_booker.js.map

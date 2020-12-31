goog.provide('seven_guis.temp_conv');
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.temp_conv !== 'undefined') && (typeof seven_guis.temp_conv.temp_state !== 'undefined')){
} else {
seven_guis.temp_conv.temp_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"celsius","celsius",-813774085),(0),new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801),(32)], null));
}
seven_guis.temp_conv.celsius__GT_fahrenheit = (function seven_guis$temp_conv$celsius__GT_fahrenheit(c){
return ((32) + (c * ((9) / (5))));
});
seven_guis.temp_conv.fahrenheit__GT_celsius = (function seven_guis$temp_conv$fahrenheit__GT_celsius(f){
return ((f - (32)) * ((5) / (9)));
});
seven_guis.temp_conv.on_change_fahrenheit = (function seven_guis$temp_conv$on_change_fahrenheit(temp_map,fahrenheit_value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_map,new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801),fahrenheit_value),new cljs.core.Keyword(null,"celsius","celsius",-813774085),seven_guis.temp_conv.fahrenheit__GT_celsius(fahrenheit_value));
});
seven_guis.temp_conv.on_change_celsius = (function seven_guis$temp_conv$on_change_celsius(temp_map,celsius_value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(temp_map,new cljs.core.Keyword(null,"celsius","celsius",-813774085),celsius_value),new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801),seven_guis.temp_conv.celsius__GT_fahrenheit(celsius_value));
});
seven_guis.temp_conv.component = (function seven_guis$temp_conv$component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"@import\n    \"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css\""], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-evenly","div.flex.justify-evenly",-974191396),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.border.rounded.border-gray-400","div.flex.flex-col.border.rounded.border-gray-400",2060671372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#celsius.text-center","input#celsius.text-center",1501981624),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"celsius","celsius",-813774085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.temp_conv.temp_state)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__38870_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.temp_conv.temp_state,seven_guis.temp_conv.on_change_celsius,p1__38870_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-xl.text-center","label.text-xl.text-center",-1689335153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"celsius"], null),"Celsius"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-6xl.self-center","span.text-6xl.self-center",-1435131376)," = "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.border.rounded.border-gray-400","div.flex.flex-col.border.rounded.border-gray-400",2060671372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#fahrenheit.text-center","input#fahrenheit.text-center",359546136),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.temp_conv.temp_state)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__38871_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.temp_conv.temp_state,seven_guis.temp_conv.on_change_fahrenheit,p1__38871_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-xl.text-center","label.text-xl.text-center",-1689335153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"fahrenheit"], null),"Fahrenheit"], null)], null)], null)], null);
});
seven_guis.temp_conv.register_component_BANG_ = (function seven_guis$temp_conv$register_component_BANG_(){
return seven_guis.util.define_custom_element_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element-name","element-name",-1558490689),"temp-conv",new cljs.core.Keyword(null,"view-component","view-component",-984780836),seven_guis.temp_conv.component], null));
});
seven_guis.temp_conv.register_component_BANG_();

//# sourceMappingURL=seven_guis.temp_conv.js.map

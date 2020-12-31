goog.provide('seven_guis.sg_crud');
if((typeof seven_guis !== 'undefined') && (typeof seven_guis.sg_crud !== 'undefined') && (typeof seven_guis.sg_crud.component_state !== 'undefined')){
} else {
seven_guis.sg_crud.component_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"name","name",1843675177),"Jp",new cljs.core.Keyword(null,"surname","surname",1407918027),"Soares"], null)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter-prefix","filter-prefix",518913236),"",new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044),(-1),new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"surname","surname",1407918027),""], null)], null));
}
seven_guis.sg_crud.filtered_names = (function seven_guis$sg_crud$filtered_names(p__38890){
var map__38891 = p__38890;
var map__38891__$1 = (((((!((map__38891 == null))))?(((((map__38891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38891):map__38891);
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38891__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var map__38892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38891__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var map__38892__$1 = (((((!((map__38892 == null))))?(((((map__38892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38892):map__38892);
var filter_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38892__$1,new cljs.core.Keyword(null,"filter-prefix","filter-prefix",518913236));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38889_SHARP_){
return clojure.string.starts_with_QMARK_(clojure.string.lower_case(new cljs.core.Keyword(null,"surname","surname",1407918027).cljs$core$IFn$_invoke$arity$1(p1__38889_SHARP_)),clojure.string.lower_case(filter_prefix));
}),cljs.core.vals(names));
});
seven_guis.sg_crud.create_name = (function seven_guis$sg_crud$create_name(p__38896){
var map__38897 = p__38896;
var map__38897__$1 = (((((!((map__38897 == null))))?(((((map__38897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38897):map__38897);
var state = map__38897__$1;
var map__38898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38897__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var map__38898__$1 = (((((!((map__38898 == null))))?(((((map__38898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38898):map__38898);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var surname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"surname","surname",1407918027));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38897__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var next_id = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(names)) + (1));
var t_sur = clojure.string.trim(surname);
var t_name = clojure.string.trim(name);
if(((cljs.core.empty_QMARK_(t_sur)) || (cljs.core.empty_QMARK_(t_name)))){
return state;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.assoc,next_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),next_id,new cljs.core.Keyword(null,"name","name",1843675177),t_name,new cljs.core.Keyword(null,"surname","surname",1407918027),t_sur], null)),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),""),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,new cljs.core.Keyword(null,"surname","surname",1407918027),"");
}
});
seven_guis.sg_crud.update_name = (function seven_guis$sg_crud$update_name(p__38901){
var map__38902 = p__38901;
var map__38902__$1 = (((((!((map__38902 == null))))?(((((map__38902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38902):map__38902);
var state = map__38902__$1;
var map__38903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var map__38903__$1 = (((((!((map__38903 == null))))?(((((map__38903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38903):map__38903);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38903__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var surname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38903__$1,new cljs.core.Keyword(null,"surname","surname",1407918027));
var selected_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38903__$1,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var t_sur = clojure.string.trim(surname);
var t_name = clojure.string.trim(name);
if(((cljs.core.empty_QMARK_(t_sur)) || (cljs.core.empty_QMARK_(t_name)))){
return state;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),selected_id], null),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),t_name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),selected_id], null),cljs.core.assoc,new cljs.core.Keyword(null,"surname","surname",1407918027),t_sur);
}
});
seven_guis.sg_crud.delete_name = (function seven_guis$sg_crud$delete_name(p__38906){
var map__38907 = p__38906;
var map__38907__$1 = (((((!((map__38907 == null))))?(((((map__38907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38907):map__38907);
var state = map__38907__$1;
var map__38908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38907__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var map__38908__$1 = (((((!((map__38908 == null))))?(((((map__38908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38908):map__38908);
var selected_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38908__$1,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.dissoc,selected_id),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.dissoc,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044));
});
seven_guis.sg_crud.select_name = (function seven_guis$sg_crud$select_name(p__38911,selected_id_str){
var map__38912 = p__38911;
var map__38912__$1 = (((((!((map__38912 == null))))?(((((map__38912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38912):map__38912);
var state = map__38912__$1;
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38912__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var selected_id = parseInt(selected_id_str);
var map__38914 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(names,selected_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"surname","surname",1407918027),""], null));
var map__38914__$1 = (((((!((map__38914 == null))))?(((((map__38914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38914):map__38914);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38914__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var surname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38914__$1,new cljs.core.Keyword(null,"surname","surname",1407918027));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044)], null),selected_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"name","name",1843675177)], null),name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"surname","surname",1407918027)], null),surname);
});
seven_guis.sg_crud.someone_is_selected_QMARK_ = (function seven_guis$sg_crud$someone_is_selected_QMARK_(p__38917){
var map__38918 = p__38917;
var map__38918__$1 = (((((!((map__38918 == null))))?(((((map__38918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38918):map__38918);
var selected_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38918__$1,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044));
return (selected_id >= (0));
});
seven_guis.sg_crud.component_style = (function seven_guis$sg_crud$component_style(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"\n    #container {\n      display: grid;\n      gap: 5px;\n    }\n    label[for=filter] {\n      grid-row: 1/2;\n      grid-column: 1/2;\n    }\n    #filter {\n      grid-row: 1/2;\n      grid-column: 2/3;\n    }\n    select {\n      min-width: 130px;\n      grid-row: 2/5;\n      grid-column: 1/3;\n    }\n    label[for=name] {\n      grid-row: 2/3;\n      grid-column: 3/4;\n    }\n    #name {\n      grid-row: 2/3;\n      grid-column: 4/5;\n    }\n    label[for=surname] {\n      grid-row: 3/4;\n      grid-column: 3/4;\n    }\n    #surname {\n      grid-row: 3/4;\n      grid-column: 4/5;\n    }\n    #buttons {\n      grid-row: 5/6;\n      grid-column: 1/3;\n      display: flex;\n      justify-content: space-evenly;\n    }"], null);
});
seven_guis.sg_crud.avoid_multiple_selection = (function seven_guis$sg_crud$avoid_multiple_selection(p1__38920_SHARP_){
return (p1__38920_SHARP_.target.selectedIndex = p1__38920_SHARP_.target.selectedIndex);
});
seven_guis.sg_crud.component = (function seven_guis$sg_crud$component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis.sg_crud.component_style], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"filter"], null),"Filter prefix:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#filter","input#filter",-1001633549),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__38921_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(seven_guis.sg_crud.component_state,cljs.core.update,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filter-prefix","filter-prefix",518913236),p1__38921_SHARP_.target.value], 0));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__38922_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seven_guis.sg_crud.component_state,seven_guis.sg_crud.select_name,p1__38922_SHARP_.target.value);

return seven_guis.sg_crud.avoid_multiple_selection(p1__38922_SHARP_);
})], null),(function (){var iter__4529__auto__ = (function seven_guis$sg_crud$component_$_iter__38925(s__38926){
return (new cljs.core.LazySeq(null,(function (){
var s__38926__$1 = s__38926;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38926__$1);
if(temp__5735__auto__){
var s__38926__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38926__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38926__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38928 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38927 = (0);
while(true){
if((i__38927 < size__4528__auto__)){
var map__38929 = cljs.core._nth(c__4527__auto__,i__38927);
var map__38929__$1 = (((((!((map__38929 == null))))?(((((map__38929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38929):map__38929);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38929__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var surname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38929__$1,new cljs.core.Keyword(null,"surname","surname",1407918027));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38929__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append(b__38928,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(surname),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__38933 = (i__38927 + (1));
i__38927 = G__38933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38928),seven_guis$sg_crud$component_$_iter__38925(cljs.core.chunk_rest(s__38926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38928),null);
}
} else {
var map__38931 = cljs.core.first(s__38926__$2);
var map__38931__$1 = (((((!((map__38931 == null))))?(((((map__38931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38931):map__38931);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38931__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var surname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38931__$1,new cljs.core.Keyword(null,"surname","surname",1407918027));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38931__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(surname),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),seven_guis$sg_crud$component_$_iter__38925(cljs.core.rest(s__38926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(seven_guis.sg_crud.filtered_names(cljs.core.deref(seven_guis.sg_crud.component_state)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"name"], null),"Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#name","input#name",-939096266),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seven_guis.sg_crud.component_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__38923_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(seven_guis.sg_crud.component_state,cljs.core.update,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),p1__38923_SHARP_.target.value], 0));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"surname"], null),"Surname:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#surname","input#surname",1843655379),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seven_guis.sg_crud.component_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"surname","surname",1407918027)], null)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__38924_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(seven_guis.sg_crud.component_state,cljs.core.update,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"surname","surname",1407918027),p1__38924_SHARP_.target.value], 0));
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#buttons","div#buttons",-1401601015),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.sg_crud.component_state,seven_guis.sg_crud.create_name);
})], null),"Create"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.sg_crud.component_state,seven_guis.sg_crud.update_name);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(seven_guis.sg_crud.someone_is_selected_QMARK_(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.sg_crud.component_state)))))], null),"Update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis.sg_crud.component_state,seven_guis.sg_crud.delete_name);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(seven_guis.sg_crud.someone_is_selected_QMARK_(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seven_guis.sg_crud.component_state)))))], null),"Delete"], null)], null)], null)], null);
});
seven_guis.sg_crud.register_component_BANG_ = (function seven_guis$sg_crud$register_component_BANG_(){
return seven_guis.util.define_custom_element_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element-name","element-name",-1558490689),"sg-crud",new cljs.core.Keyword(null,"view-component","view-component",-984780836),seven_guis.sg_crud.component], null));
});
seven_guis.sg_crud.register_component_BANG_();

//# sourceMappingURL=seven_guis.sg_crud.js.map

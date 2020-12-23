goog.provide('devcards.util.utils');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39118_39129 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39119_39130 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39120_39131 = true;
var _STAR_print_fn_STAR__temp_val__39121_39132 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39120_39131);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39121_39132);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39119_39130);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39118_39129);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}catch (e39111){if((e39111 instanceof Error)){
var e1 = e39111;
try{return obj.toString();
}catch (e39113){if((e39113 instanceof Error)){
var e2 = e39113;
return "<<Un-printable Type>>";
} else {
throw e39113;

}
}} else {
throw e39111;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__39122 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__39123 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__39123);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__39122);
}});

//# sourceMappingURL=devcards.util.utils.js.map

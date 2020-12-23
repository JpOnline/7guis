goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31176 = arguments.length;
switch (G__31176) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31187 = (function (f,blockable,meta31188){
this.f = f;
this.blockable = blockable;
this.meta31188 = meta31188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31189,meta31188__$1){
var self__ = this;
var _31189__$1 = this;
return (new cljs.core.async.t_cljs$core$async31187(self__.f,self__.blockable,meta31188__$1));
}));

(cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31189){
var self__ = this;
var _31189__$1 = this;
return self__.meta31188;
}));

(cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31188","meta31188",982109624,null)], null);
}));

(cljs.core.async.t_cljs$core$async31187.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31187");

(cljs.core.async.t_cljs$core$async31187.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31187");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31187.
 */
cljs.core.async.__GT_t_cljs$core$async31187 = (function cljs$core$async$__GT_t_cljs$core$async31187(f__$1,blockable__$1,meta31188){
return (new cljs.core.async.t_cljs$core$async31187(f__$1,blockable__$1,meta31188));
});

}

return (new cljs.core.async.t_cljs$core$async31187(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31230 = arguments.length;
switch (G__31230) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31262 = arguments.length;
switch (G__31262) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31270 = arguments.length;
switch (G__31270) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33482 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33482) : fn1.call(null,val_33482));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33482) : fn1.call(null,val_33482));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31272 = arguments.length;
switch (G__31272) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___33486 = n;
var x_33487 = (0);
while(true){
if((x_33487 < n__4613__auto___33486)){
(a[x_33487] = x_33487);

var G__33488 = (x_33487 + (1));
x_33487 = G__33488;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31274 = (function (flag,meta31275){
this.flag = flag;
this.meta31275 = meta31275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31276,meta31275__$1){
var self__ = this;
var _31276__$1 = this;
return (new cljs.core.async.t_cljs$core$async31274(self__.flag,meta31275__$1));
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31276){
var self__ = this;
var _31276__$1 = this;
return self__.meta31275;
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31275","meta31275",-353248295,null)], null);
}));

(cljs.core.async.t_cljs$core$async31274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31274");

(cljs.core.async.t_cljs$core$async31274.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31274.
 */
cljs.core.async.__GT_t_cljs$core$async31274 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31274(flag__$1,meta31275){
return (new cljs.core.async.t_cljs$core$async31274(flag__$1,meta31275));
});

}

return (new cljs.core.async.t_cljs$core$async31274(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31278 = (function (flag,cb,meta31279){
this.flag = flag;
this.cb = cb;
this.meta31279 = meta31279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31280,meta31279__$1){
var self__ = this;
var _31280__$1 = this;
return (new cljs.core.async.t_cljs$core$async31278(self__.flag,self__.cb,meta31279__$1));
}));

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31280){
var self__ = this;
var _31280__$1 = this;
return self__.meta31279;
}));

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31279","meta31279",167567245,null)], null);
}));

(cljs.core.async.t_cljs$core$async31278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31278");

(cljs.core.async.t_cljs$core$async31278.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31278.
 */
cljs.core.async.__GT_t_cljs$core$async31278 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31278(flag__$1,cb__$1,meta31279){
return (new cljs.core.async.t_cljs$core$async31278(flag__$1,cb__$1,meta31279));
});

}

return (new cljs.core.async.t_cljs$core$async31278(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31291_SHARP_){
var G__31293 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31291_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31293) : fret.call(null,G__31293));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31292_SHARP_){
var G__31294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31292_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31294) : fret.call(null,G__31294));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33498 = (i + (1));
i = G__33498;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33500 = arguments.length;
var i__4737__auto___33501 = (0);
while(true){
if((i__4737__auto___33501 < len__4736__auto___33500)){
args__4742__auto__.push((arguments[i__4737__auto___33501]));

var G__33502 = (i__4737__auto___33501 + (1));
i__4737__auto___33501 = G__33502;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31301){
var map__31302 = p__31301;
var map__31302__$1 = (((((!((map__31302 == null))))?(((((map__31302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31302):map__31302);
var opts = map__31302__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31299){
var G__31300 = cljs.core.first(seq31299);
var seq31299__$1 = cljs.core.next(seq31299);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31300,seq31299__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31308 = arguments.length;
switch (G__31308) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31089__auto___33504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_31340){
var state_val_31341 = (state_31340[(1)]);
if((state_val_31341 === (7))){
var inst_31336 = (state_31340[(2)]);
var state_31340__$1 = state_31340;
var statearr_31344_33507 = state_31340__$1;
(statearr_31344_33507[(2)] = inst_31336);

(statearr_31344_33507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (1))){
var state_31340__$1 = state_31340;
var statearr_31345_33508 = state_31340__$1;
(statearr_31345_33508[(2)] = null);

(statearr_31345_33508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (4))){
var inst_31318 = (state_31340[(7)]);
var inst_31318__$1 = (state_31340[(2)]);
var inst_31319 = (inst_31318__$1 == null);
var state_31340__$1 = (function (){var statearr_31346 = state_31340;
(statearr_31346[(7)] = inst_31318__$1);

return statearr_31346;
})();
if(cljs.core.truth_(inst_31319)){
var statearr_31347_33510 = state_31340__$1;
(statearr_31347_33510[(1)] = (5));

} else {
var statearr_31348_33511 = state_31340__$1;
(statearr_31348_33511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (13))){
var state_31340__$1 = state_31340;
var statearr_31351_33512 = state_31340__$1;
(statearr_31351_33512[(2)] = null);

(statearr_31351_33512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (6))){
var inst_31318 = (state_31340[(7)]);
var state_31340__$1 = state_31340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31340__$1,(11),to,inst_31318);
} else {
if((state_val_31341 === (3))){
var inst_31338 = (state_31340[(2)]);
var state_31340__$1 = state_31340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31340__$1,inst_31338);
} else {
if((state_val_31341 === (12))){
var state_31340__$1 = state_31340;
var statearr_31354_33513 = state_31340__$1;
(statearr_31354_33513[(2)] = null);

(statearr_31354_33513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (2))){
var state_31340__$1 = state_31340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31340__$1,(4),from);
} else {
if((state_val_31341 === (11))){
var inst_31329 = (state_31340[(2)]);
var state_31340__$1 = state_31340;
if(cljs.core.truth_(inst_31329)){
var statearr_31355_33514 = state_31340__$1;
(statearr_31355_33514[(1)] = (12));

} else {
var statearr_31356_33515 = state_31340__$1;
(statearr_31356_33515[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (9))){
var state_31340__$1 = state_31340;
var statearr_31357_33516 = state_31340__$1;
(statearr_31357_33516[(2)] = null);

(statearr_31357_33516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (5))){
var state_31340__$1 = state_31340;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31358_33517 = state_31340__$1;
(statearr_31358_33517[(1)] = (8));

} else {
var statearr_31359_33518 = state_31340__$1;
(statearr_31359_33518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (14))){
var inst_31334 = (state_31340[(2)]);
var state_31340__$1 = state_31340;
var statearr_31360_33519 = state_31340__$1;
(statearr_31360_33519[(2)] = inst_31334);

(statearr_31360_33519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (10))){
var inst_31325 = (state_31340[(2)]);
var state_31340__$1 = state_31340;
var statearr_31363_33520 = state_31340__$1;
(statearr_31363_33520[(2)] = inst_31325);

(statearr_31363_33520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (8))){
var inst_31322 = cljs.core.async.close_BANG_(to);
var state_31340__$1 = state_31340;
var statearr_31364_33521 = state_31340__$1;
(statearr_31364_33521[(2)] = inst_31322);

(statearr_31364_33521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30926__auto__ = null;
var cljs$core$async$state_machine__30926__auto____0 = (function (){
var statearr_31366 = [null,null,null,null,null,null,null,null];
(statearr_31366[(0)] = cljs$core$async$state_machine__30926__auto__);

(statearr_31366[(1)] = (1));

return statearr_31366;
});
var cljs$core$async$state_machine__30926__auto____1 = (function (state_31340){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_31340);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e31367){var ex__30929__auto__ = e31367;
var statearr_31368_33523 = state_31340;
(statearr_31368_33523[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_31340[(4)]))){
var statearr_31369_33526 = state_31340;
(statearr_31369_33526[(1)] = cljs.core.first((state_31340[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33527 = state_31340;
state_31340 = G__33527;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$state_machine__30926__auto__ = function(state_31340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30926__auto____1.call(this,state_31340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30926__auto____0;
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30926__auto____1;
return cljs$core$async$state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_31370 = f__31090__auto__();
(statearr_31370[(6)] = c__31089__auto___33504);

return statearr_31370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__31371){
var vec__31372 = p__31371;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31372,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31372,(1),null);
var job = vec__31372;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31089__auto___33531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_31379){
var state_val_31380 = (state_31379[(1)]);
if((state_val_31380 === (1))){
var state_31379__$1 = state_31379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31379__$1,(2),res,v);
} else {
if((state_val_31380 === (2))){
var inst_31376 = (state_31379[(2)]);
var inst_31377 = cljs.core.async.close_BANG_(res);
var state_31379__$1 = (function (){var statearr_31381 = state_31379;
(statearr_31381[(7)] = inst_31376);

return statearr_31381;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31379__$1,inst_31377);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0 = (function (){
var statearr_31383 = [null,null,null,null,null,null,null,null];
(statearr_31383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__);

(statearr_31383[(1)] = (1));

return statearr_31383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1 = (function (state_31379){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_31379);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e31384){var ex__30929__auto__ = e31384;
var statearr_31385_33535 = state_31379;
(statearr_31385_33535[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_31379[(4)]))){
var statearr_31386_33536 = state_31379;
(statearr_31386_33536[(1)] = cljs.core.first((state_31379[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33537 = state_31379;
state_31379 = G__33537;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__ = function(state_31379){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1.call(this,state_31379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_31388 = f__31090__auto__();
(statearr_31388[(6)] = c__31089__auto___33531);

return statearr_31388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31390){
var vec__31391 = p__31390;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31391,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31391,(1),null);
var job = vec__31391;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___33540 = n;
var __33541 = (0);
while(true){
if((__33541 < n__4613__auto___33540)){
var G__31396_33542 = type;
var G__31396_33543__$1 = (((G__31396_33542 instanceof cljs.core.Keyword))?G__31396_33542.fqn:null);
switch (G__31396_33543__$1) {
case "compute":
var c__31089__auto___33545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33541,c__31089__auto___33545,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async){
return (function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = ((function (__33541,c__31089__auto___33545,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async){
return (function (state_31409){
var state_val_31410 = (state_31409[(1)]);
if((state_val_31410 === (1))){
var state_31409__$1 = state_31409;
var statearr_31411_33546 = state_31409__$1;
(statearr_31411_33546[(2)] = null);

(statearr_31411_33546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (2))){
var state_31409__$1 = state_31409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31409__$1,(4),jobs);
} else {
if((state_val_31410 === (3))){
var inst_31407 = (state_31409[(2)]);
var state_31409__$1 = state_31409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31409__$1,inst_31407);
} else {
if((state_val_31410 === (4))){
var inst_31399 = (state_31409[(2)]);
var inst_31400 = process(inst_31399);
var state_31409__$1 = state_31409;
if(cljs.core.truth_(inst_31400)){
var statearr_31413_33549 = state_31409__$1;
(statearr_31413_33549[(1)] = (5));

} else {
var statearr_31414_33550 = state_31409__$1;
(statearr_31414_33550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (5))){
var state_31409__$1 = state_31409;
var statearr_31415_33551 = state_31409__$1;
(statearr_31415_33551[(2)] = null);

(statearr_31415_33551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (6))){
var state_31409__$1 = state_31409;
var statearr_31416_33552 = state_31409__$1;
(statearr_31416_33552[(2)] = null);

(statearr_31416_33552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (7))){
var inst_31405 = (state_31409[(2)]);
var state_31409__$1 = state_31409;
var statearr_31418_33553 = state_31409__$1;
(statearr_31418_33553[(2)] = inst_31405);

(statearr_31418_33553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33541,c__31089__auto___33545,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async))
;
return ((function (__33541,switch__30925__auto__,c__31089__auto___33545,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0 = (function (){
var statearr_31419 = [null,null,null,null,null,null,null];
(statearr_31419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__);

(statearr_31419[(1)] = (1));

return statearr_31419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1 = (function (state_31409){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_31409);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e31421){var ex__30929__auto__ = e31421;
var statearr_31423_33554 = state_31409;
(statearr_31423_33554[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_31409[(4)]))){
var statearr_31424_33556 = state_31409;
(statearr_31424_33556[(1)] = cljs.core.first((state_31409[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33558 = state_31409;
state_31409 = G__33558;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__ = function(state_31409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1.call(this,state_31409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__;
})()
;})(__33541,switch__30925__auto__,c__31089__auto___33545,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async))
})();
var state__31091__auto__ = (function (){var statearr_31425 = f__31090__auto__();
(statearr_31425[(6)] = c__31089__auto___33545);

return statearr_31425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
});})(__33541,c__31089__auto___33545,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async))
);


break;
case "async":
var c__31089__auto___33562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33541,c__31089__auto___33562,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async){
return (function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = ((function (__33541,c__31089__auto___33562,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async){
return (function (state_31438){
var state_val_31439 = (state_31438[(1)]);
if((state_val_31439 === (1))){
var state_31438__$1 = state_31438;
var statearr_31440_33568 = state_31438__$1;
(statearr_31440_33568[(2)] = null);

(statearr_31440_33568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (2))){
var state_31438__$1 = state_31438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31438__$1,(4),jobs);
} else {
if((state_val_31439 === (3))){
var inst_31436 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31438__$1,inst_31436);
} else {
if((state_val_31439 === (4))){
var inst_31428 = (state_31438[(2)]);
var inst_31429 = async(inst_31428);
var state_31438__$1 = state_31438;
if(cljs.core.truth_(inst_31429)){
var statearr_31441_33570 = state_31438__$1;
(statearr_31441_33570[(1)] = (5));

} else {
var statearr_31442_33572 = state_31438__$1;
(statearr_31442_33572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (5))){
var state_31438__$1 = state_31438;
var statearr_31447_33574 = state_31438__$1;
(statearr_31447_33574[(2)] = null);

(statearr_31447_33574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (6))){
var state_31438__$1 = state_31438;
var statearr_31452_33575 = state_31438__$1;
(statearr_31452_33575[(2)] = null);

(statearr_31452_33575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (7))){
var inst_31434 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
var statearr_31457_33576 = state_31438__$1;
(statearr_31457_33576[(2)] = inst_31434);

(statearr_31457_33576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33541,c__31089__auto___33562,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async))
;
return ((function (__33541,switch__30925__auto__,c__31089__auto___33562,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0 = (function (){
var statearr_31458 = [null,null,null,null,null,null,null];
(statearr_31458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__);

(statearr_31458[(1)] = (1));

return statearr_31458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1 = (function (state_31438){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_31438);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e31459){var ex__30929__auto__ = e31459;
var statearr_31460_33578 = state_31438;
(statearr_31460_33578[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_31438[(4)]))){
var statearr_31461_33579 = state_31438;
(statearr_31461_33579[(1)] = cljs.core.first((state_31438[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33580 = state_31438;
state_31438 = G__33580;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__ = function(state_31438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1.call(this,state_31438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__;
})()
;})(__33541,switch__30925__auto__,c__31089__auto___33562,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async))
})();
var state__31091__auto__ = (function (){var statearr_31462 = f__31090__auto__();
(statearr_31462[(6)] = c__31089__auto___33562);

return statearr_31462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
});})(__33541,c__31089__auto___33562,G__31396_33542,G__31396_33543__$1,n__4613__auto___33540,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31396_33543__$1)].join('')));

}

var G__33588 = (__33541 + (1));
__33541 = G__33588;
continue;
} else {
}
break;
}

var c__31089__auto___33589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_31484){
var state_val_31485 = (state_31484[(1)]);
if((state_val_31485 === (7))){
var inst_31480 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
var statearr_31486_33590 = state_31484__$1;
(statearr_31486_33590[(2)] = inst_31480);

(statearr_31486_33590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (1))){
var state_31484__$1 = state_31484;
var statearr_31493_33594 = state_31484__$1;
(statearr_31493_33594[(2)] = null);

(statearr_31493_33594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (4))){
var inst_31465 = (state_31484[(7)]);
var inst_31465__$1 = (state_31484[(2)]);
var inst_31466 = (inst_31465__$1 == null);
var state_31484__$1 = (function (){var statearr_31496 = state_31484;
(statearr_31496[(7)] = inst_31465__$1);

return statearr_31496;
})();
if(cljs.core.truth_(inst_31466)){
var statearr_31497_33599 = state_31484__$1;
(statearr_31497_33599[(1)] = (5));

} else {
var statearr_31499_33600 = state_31484__$1;
(statearr_31499_33600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (6))){
var inst_31470 = (state_31484[(8)]);
var inst_31465 = (state_31484[(7)]);
var inst_31470__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31471 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31472 = [inst_31465,inst_31470__$1];
var inst_31473 = (new cljs.core.PersistentVector(null,2,(5),inst_31471,inst_31472,null));
var state_31484__$1 = (function (){var statearr_31500 = state_31484;
(statearr_31500[(8)] = inst_31470__$1);

return statearr_31500;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31484__$1,(8),jobs,inst_31473);
} else {
if((state_val_31485 === (3))){
var inst_31482 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31484__$1,inst_31482);
} else {
if((state_val_31485 === (2))){
var state_31484__$1 = state_31484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31484__$1,(4),from);
} else {
if((state_val_31485 === (9))){
var inst_31477 = (state_31484[(2)]);
var state_31484__$1 = (function (){var statearr_31501 = state_31484;
(statearr_31501[(9)] = inst_31477);

return statearr_31501;
})();
var statearr_31502_33608 = state_31484__$1;
(statearr_31502_33608[(2)] = null);

(statearr_31502_33608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (5))){
var inst_31468 = cljs.core.async.close_BANG_(jobs);
var state_31484__$1 = state_31484;
var statearr_31503_33612 = state_31484__$1;
(statearr_31503_33612[(2)] = inst_31468);

(statearr_31503_33612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (8))){
var inst_31470 = (state_31484[(8)]);
var inst_31475 = (state_31484[(2)]);
var state_31484__$1 = (function (){var statearr_31506 = state_31484;
(statearr_31506[(10)] = inst_31475);

return statearr_31506;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31484__$1,(9),results,inst_31470);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0 = (function (){
var statearr_31514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__);

(statearr_31514[(1)] = (1));

return statearr_31514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1 = (function (state_31484){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_31484);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e31515){var ex__30929__auto__ = e31515;
var statearr_31517_33617 = state_31484;
(statearr_31517_33617[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_31484[(4)]))){
var statearr_31520_33621 = state_31484;
(statearr_31520_33621[(1)] = cljs.core.first((state_31484[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33622 = state_31484;
state_31484 = G__33622;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__ = function(state_31484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1.call(this,state_31484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_31523 = f__31090__auto__();
(statearr_31523[(6)] = c__31089__auto___33589);

return statearr_31523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


var c__31089__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_31568){
var state_val_31569 = (state_31568[(1)]);
if((state_val_31569 === (7))){
var inst_31564 = (state_31568[(2)]);
var state_31568__$1 = state_31568;
var statearr_31573_33627 = state_31568__$1;
(statearr_31573_33627[(2)] = inst_31564);

(statearr_31573_33627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (20))){
var state_31568__$1 = state_31568;
var statearr_31574_33628 = state_31568__$1;
(statearr_31574_33628[(2)] = null);

(statearr_31574_33628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (1))){
var state_31568__$1 = state_31568;
var statearr_31575_33629 = state_31568__$1;
(statearr_31575_33629[(2)] = null);

(statearr_31575_33629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (4))){
var inst_31528 = (state_31568[(7)]);
var inst_31528__$1 = (state_31568[(2)]);
var inst_31529 = (inst_31528__$1 == null);
var state_31568__$1 = (function (){var statearr_31577 = state_31568;
(statearr_31577[(7)] = inst_31528__$1);

return statearr_31577;
})();
if(cljs.core.truth_(inst_31529)){
var statearr_31578_33631 = state_31568__$1;
(statearr_31578_33631[(1)] = (5));

} else {
var statearr_31583_33632 = state_31568__$1;
(statearr_31583_33632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (15))){
var inst_31541 = (state_31568[(8)]);
var state_31568__$1 = state_31568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31568__$1,(18),to,inst_31541);
} else {
if((state_val_31569 === (21))){
var inst_31556 = (state_31568[(2)]);
var state_31568__$1 = state_31568;
var statearr_31588_33634 = state_31568__$1;
(statearr_31588_33634[(2)] = inst_31556);

(statearr_31588_33634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (13))){
var inst_31558 = (state_31568[(2)]);
var state_31568__$1 = (function (){var statearr_31589 = state_31568;
(statearr_31589[(9)] = inst_31558);

return statearr_31589;
})();
var statearr_31590_33635 = state_31568__$1;
(statearr_31590_33635[(2)] = null);

(statearr_31590_33635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (6))){
var inst_31528 = (state_31568[(7)]);
var state_31568__$1 = state_31568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31568__$1,(11),inst_31528);
} else {
if((state_val_31569 === (17))){
var inst_31551 = (state_31568[(2)]);
var state_31568__$1 = state_31568;
if(cljs.core.truth_(inst_31551)){
var statearr_31593_33636 = state_31568__$1;
(statearr_31593_33636[(1)] = (19));

} else {
var statearr_31594_33637 = state_31568__$1;
(statearr_31594_33637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (3))){
var inst_31566 = (state_31568[(2)]);
var state_31568__$1 = state_31568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31568__$1,inst_31566);
} else {
if((state_val_31569 === (12))){
var inst_31538 = (state_31568[(10)]);
var state_31568__$1 = state_31568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31568__$1,(14),inst_31538);
} else {
if((state_val_31569 === (2))){
var state_31568__$1 = state_31568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31568__$1,(4),results);
} else {
if((state_val_31569 === (19))){
var state_31568__$1 = state_31568;
var statearr_31599_33638 = state_31568__$1;
(statearr_31599_33638[(2)] = null);

(statearr_31599_33638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (11))){
var inst_31538 = (state_31568[(2)]);
var state_31568__$1 = (function (){var statearr_31600 = state_31568;
(statearr_31600[(10)] = inst_31538);

return statearr_31600;
})();
var statearr_31601_33639 = state_31568__$1;
(statearr_31601_33639[(2)] = null);

(statearr_31601_33639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (9))){
var state_31568__$1 = state_31568;
var statearr_31602_33640 = state_31568__$1;
(statearr_31602_33640[(2)] = null);

(statearr_31602_33640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (5))){
var state_31568__$1 = state_31568;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31603_33641 = state_31568__$1;
(statearr_31603_33641[(1)] = (8));

} else {
var statearr_31604_33642 = state_31568__$1;
(statearr_31604_33642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (14))){
var inst_31541 = (state_31568[(8)]);
var inst_31541__$1 = (state_31568[(2)]);
var inst_31542 = (inst_31541__$1 == null);
var inst_31543 = cljs.core.not(inst_31542);
var state_31568__$1 = (function (){var statearr_31605 = state_31568;
(statearr_31605[(8)] = inst_31541__$1);

return statearr_31605;
})();
if(inst_31543){
var statearr_31606_33644 = state_31568__$1;
(statearr_31606_33644[(1)] = (15));

} else {
var statearr_31607_33645 = state_31568__$1;
(statearr_31607_33645[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (16))){
var state_31568__$1 = state_31568;
var statearr_31608_33646 = state_31568__$1;
(statearr_31608_33646[(2)] = false);

(statearr_31608_33646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (10))){
var inst_31535 = (state_31568[(2)]);
var state_31568__$1 = state_31568;
var statearr_31609_33647 = state_31568__$1;
(statearr_31609_33647[(2)] = inst_31535);

(statearr_31609_33647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (18))){
var inst_31548 = (state_31568[(2)]);
var state_31568__$1 = state_31568;
var statearr_31610_33648 = state_31568__$1;
(statearr_31610_33648[(2)] = inst_31548);

(statearr_31610_33648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31569 === (8))){
var inst_31532 = cljs.core.async.close_BANG_(to);
var state_31568__$1 = state_31568;
var statearr_31612_33651 = state_31568__$1;
(statearr_31612_33651[(2)] = inst_31532);

(statearr_31612_33651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0 = (function (){
var statearr_31613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__);

(statearr_31613[(1)] = (1));

return statearr_31613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1 = (function (state_31568){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_31568);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e31614){var ex__30929__auto__ = e31614;
var statearr_31615_33656 = state_31568;
(statearr_31615_33656[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_31568[(4)]))){
var statearr_31616_33657 = state_31568;
(statearr_31616_33657[(1)] = cljs.core.first((state_31568[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33659 = state_31568;
state_31568 = G__33659;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__ = function(state_31568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1.call(this,state_31568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30926__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_31617 = f__31090__auto__();
(statearr_31617[(6)] = c__31089__auto__);

return statearr_31617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));

return c__31089__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31619 = arguments.length;
switch (G__31619) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31621 = arguments.length;
switch (G__31621) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31659 = arguments.length;
switch (G__31659) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31089__auto___33669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_31690){
var state_val_31691 = (state_31690[(1)]);
if((state_val_31691 === (7))){
var inst_31686 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31693_33674 = state_31690__$1;
(statearr_31693_33674[(2)] = inst_31686);

(statearr_31693_33674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (1))){
var state_31690__$1 = state_31690;
var statearr_31694_33675 = state_31690__$1;
(statearr_31694_33675[(2)] = null);

(statearr_31694_33675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (4))){
var inst_31667 = (state_31690[(7)]);
var inst_31667__$1 = (state_31690[(2)]);
var inst_31668 = (inst_31667__$1 == null);
var state_31690__$1 = (function (){var statearr_31695 = state_31690;
(statearr_31695[(7)] = inst_31667__$1);

return statearr_31695;
})();
if(cljs.core.truth_(inst_31668)){
var statearr_31697_33679 = state_31690__$1;
(statearr_31697_33679[(1)] = (5));

} else {
var statearr_31698_33684 = state_31690__$1;
(statearr_31698_33684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (13))){
var state_31690__$1 = state_31690;
var statearr_31699_33685 = state_31690__$1;
(statearr_31699_33685[(2)] = null);

(statearr_31699_33685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (6))){
var inst_31667 = (state_31690[(7)]);
var inst_31673 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31667) : p.call(null,inst_31667));
var state_31690__$1 = state_31690;
if(cljs.core.truth_(inst_31673)){
var statearr_31700_33692 = state_31690__$1;
(statearr_31700_33692[(1)] = (9));

} else {
var statearr_31701_33693 = state_31690__$1;
(statearr_31701_33693[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (3))){
var inst_31688 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31690__$1,inst_31688);
} else {
if((state_val_31691 === (12))){
var state_31690__$1 = state_31690;
var statearr_31704_33694 = state_31690__$1;
(statearr_31704_33694[(2)] = null);

(statearr_31704_33694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (2))){
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31690__$1,(4),ch);
} else {
if((state_val_31691 === (11))){
var inst_31667 = (state_31690[(7)]);
var inst_31677 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31690__$1,(8),inst_31677,inst_31667);
} else {
if((state_val_31691 === (9))){
var state_31690__$1 = state_31690;
var statearr_31706_33695 = state_31690__$1;
(statearr_31706_33695[(2)] = tc);

(statearr_31706_33695[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (5))){
var inst_31670 = cljs.core.async.close_BANG_(tc);
var inst_31671 = cljs.core.async.close_BANG_(fc);
var state_31690__$1 = (function (){var statearr_31707 = state_31690;
(statearr_31707[(8)] = inst_31670);

return statearr_31707;
})();
var statearr_31708_33696 = state_31690__$1;
(statearr_31708_33696[(2)] = inst_31671);

(statearr_31708_33696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (14))){
var inst_31684 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31709_33697 = state_31690__$1;
(statearr_31709_33697[(2)] = inst_31684);

(statearr_31709_33697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (10))){
var state_31690__$1 = state_31690;
var statearr_31710_33698 = state_31690__$1;
(statearr_31710_33698[(2)] = fc);

(statearr_31710_33698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (8))){
var inst_31679 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
if(cljs.core.truth_(inst_31679)){
var statearr_31711_33699 = state_31690__$1;
(statearr_31711_33699[(1)] = (12));

} else {
var statearr_31712_33700 = state_31690__$1;
(statearr_31712_33700[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30926__auto__ = null;
var cljs$core$async$state_machine__30926__auto____0 = (function (){
var statearr_31713 = [null,null,null,null,null,null,null,null,null];
(statearr_31713[(0)] = cljs$core$async$state_machine__30926__auto__);

(statearr_31713[(1)] = (1));

return statearr_31713;
});
var cljs$core$async$state_machine__30926__auto____1 = (function (state_31690){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_31690);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e31714){var ex__30929__auto__ = e31714;
var statearr_31715_33707 = state_31690;
(statearr_31715_33707[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_31690[(4)]))){
var statearr_31716_33708 = state_31690;
(statearr_31716_33708[(1)] = cljs.core.first((state_31690[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33709 = state_31690;
state_31690 = G__33709;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$state_machine__30926__auto__ = function(state_31690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30926__auto____1.call(this,state_31690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30926__auto____0;
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30926__auto____1;
return cljs$core$async$state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_31717 = f__31090__auto__();
(statearr_31717[(6)] = c__31089__auto___33669);

return statearr_31717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31089__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_31739){
var state_val_31740 = (state_31739[(1)]);
if((state_val_31740 === (7))){
var inst_31735 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31741_33710 = state_31739__$1;
(statearr_31741_33710[(2)] = inst_31735);

(statearr_31741_33710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (1))){
var inst_31718 = init;
var inst_31719 = inst_31718;
var state_31739__$1 = (function (){var statearr_31742 = state_31739;
(statearr_31742[(7)] = inst_31719);

return statearr_31742;
})();
var statearr_31743_33711 = state_31739__$1;
(statearr_31743_33711[(2)] = null);

(statearr_31743_33711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (4))){
var inst_31722 = (state_31739[(8)]);
var inst_31722__$1 = (state_31739[(2)]);
var inst_31723 = (inst_31722__$1 == null);
var state_31739__$1 = (function (){var statearr_31744 = state_31739;
(statearr_31744[(8)] = inst_31722__$1);

return statearr_31744;
})();
if(cljs.core.truth_(inst_31723)){
var statearr_31745_33712 = state_31739__$1;
(statearr_31745_33712[(1)] = (5));

} else {
var statearr_31746_33713 = state_31739__$1;
(statearr_31746_33713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (6))){
var inst_31722 = (state_31739[(8)]);
var inst_31719 = (state_31739[(7)]);
var inst_31726 = (state_31739[(9)]);
var inst_31726__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31719,inst_31722) : f.call(null,inst_31719,inst_31722));
var inst_31727 = cljs.core.reduced_QMARK_(inst_31726__$1);
var state_31739__$1 = (function (){var statearr_31748 = state_31739;
(statearr_31748[(9)] = inst_31726__$1);

return statearr_31748;
})();
if(inst_31727){
var statearr_31749_33720 = state_31739__$1;
(statearr_31749_33720[(1)] = (8));

} else {
var statearr_31750_33721 = state_31739__$1;
(statearr_31750_33721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (3))){
var inst_31737 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31739__$1,inst_31737);
} else {
if((state_val_31740 === (2))){
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31739__$1,(4),ch);
} else {
if((state_val_31740 === (9))){
var inst_31726 = (state_31739[(9)]);
var inst_31719 = inst_31726;
var state_31739__$1 = (function (){var statearr_31751 = state_31739;
(statearr_31751[(7)] = inst_31719);

return statearr_31751;
})();
var statearr_31752_33722 = state_31739__$1;
(statearr_31752_33722[(2)] = null);

(statearr_31752_33722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (5))){
var inst_31719 = (state_31739[(7)]);
var state_31739__$1 = state_31739;
var statearr_31753_33723 = state_31739__$1;
(statearr_31753_33723[(2)] = inst_31719);

(statearr_31753_33723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (10))){
var inst_31733 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31754_33724 = state_31739__$1;
(statearr_31754_33724[(2)] = inst_31733);

(statearr_31754_33724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (8))){
var inst_31726 = (state_31739[(9)]);
var inst_31729 = cljs.core.deref(inst_31726);
var state_31739__$1 = state_31739;
var statearr_31758_33725 = state_31739__$1;
(statearr_31758_33725[(2)] = inst_31729);

(statearr_31758_33725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30926__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30926__auto____0 = (function (){
var statearr_31759 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31759[(0)] = cljs$core$async$reduce_$_state_machine__30926__auto__);

(statearr_31759[(1)] = (1));

return statearr_31759;
});
var cljs$core$async$reduce_$_state_machine__30926__auto____1 = (function (state_31739){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_31739);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e31760){var ex__30929__auto__ = e31760;
var statearr_31761_33726 = state_31739;
(statearr_31761_33726[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_31739[(4)]))){
var statearr_31762_33727 = state_31739;
(statearr_31762_33727[(1)] = cljs.core.first((state_31739[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33728 = state_31739;
state_31739 = G__33728;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30926__auto__ = function(state_31739){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30926__auto____1.call(this,state_31739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30926__auto____0;
cljs$core$async$reduce_$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30926__auto____1;
return cljs$core$async$reduce_$_state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_31763 = f__31090__auto__();
(statearr_31763[(6)] = c__31089__auto__);

return statearr_31763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));

return c__31089__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31089__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_31771){
var state_val_31772 = (state_31771[(1)]);
if((state_val_31772 === (1))){
var inst_31766 = cljs.core.async.reduce(f__$1,init,ch);
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31771__$1,(2),inst_31766);
} else {
if((state_val_31772 === (2))){
var inst_31768 = (state_31771[(2)]);
var inst_31769 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31768) : f__$1.call(null,inst_31768));
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31771__$1,inst_31769);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30926__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30926__auto____0 = (function (){
var statearr_31773 = [null,null,null,null,null,null,null];
(statearr_31773[(0)] = cljs$core$async$transduce_$_state_machine__30926__auto__);

(statearr_31773[(1)] = (1));

return statearr_31773;
});
var cljs$core$async$transduce_$_state_machine__30926__auto____1 = (function (state_31771){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_31771);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e31777){var ex__30929__auto__ = e31777;
var statearr_31778_33735 = state_31771;
(statearr_31778_33735[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_31771[(4)]))){
var statearr_31779_33736 = state_31771;
(statearr_31779_33736[(1)] = cljs.core.first((state_31771[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33737 = state_31771;
state_31771 = G__33737;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30926__auto__ = function(state_31771){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30926__auto____1.call(this,state_31771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30926__auto____0;
cljs$core$async$transduce_$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30926__auto____1;
return cljs$core$async$transduce_$_state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_31780 = f__31090__auto__();
(statearr_31780[(6)] = c__31089__auto__);

return statearr_31780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));

return c__31089__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31784 = arguments.length;
switch (G__31784) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31089__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_31812){
var state_val_31813 = (state_31812[(1)]);
if((state_val_31813 === (7))){
var inst_31794 = (state_31812[(2)]);
var state_31812__$1 = state_31812;
var statearr_31814_33739 = state_31812__$1;
(statearr_31814_33739[(2)] = inst_31794);

(statearr_31814_33739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (1))){
var inst_31785 = cljs.core.seq(coll);
var inst_31786 = inst_31785;
var state_31812__$1 = (function (){var statearr_31815 = state_31812;
(statearr_31815[(7)] = inst_31786);

return statearr_31815;
})();
var statearr_31816_33740 = state_31812__$1;
(statearr_31816_33740[(2)] = null);

(statearr_31816_33740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (4))){
var inst_31786 = (state_31812[(7)]);
var inst_31792 = cljs.core.first(inst_31786);
var state_31812__$1 = state_31812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31812__$1,(7),ch,inst_31792);
} else {
if((state_val_31813 === (13))){
var inst_31806 = (state_31812[(2)]);
var state_31812__$1 = state_31812;
var statearr_31817_33741 = state_31812__$1;
(statearr_31817_33741[(2)] = inst_31806);

(statearr_31817_33741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (6))){
var inst_31797 = (state_31812[(2)]);
var state_31812__$1 = state_31812;
if(cljs.core.truth_(inst_31797)){
var statearr_31818_33742 = state_31812__$1;
(statearr_31818_33742[(1)] = (8));

} else {
var statearr_31819_33743 = state_31812__$1;
(statearr_31819_33743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (3))){
var inst_31810 = (state_31812[(2)]);
var state_31812__$1 = state_31812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31812__$1,inst_31810);
} else {
if((state_val_31813 === (12))){
var state_31812__$1 = state_31812;
var statearr_31820_33744 = state_31812__$1;
(statearr_31820_33744[(2)] = null);

(statearr_31820_33744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (2))){
var inst_31786 = (state_31812[(7)]);
var state_31812__$1 = state_31812;
if(cljs.core.truth_(inst_31786)){
var statearr_31825_33745 = state_31812__$1;
(statearr_31825_33745[(1)] = (4));

} else {
var statearr_31826_33746 = state_31812__$1;
(statearr_31826_33746[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (11))){
var inst_31803 = cljs.core.async.close_BANG_(ch);
var state_31812__$1 = state_31812;
var statearr_31827_33747 = state_31812__$1;
(statearr_31827_33747[(2)] = inst_31803);

(statearr_31827_33747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (9))){
var state_31812__$1 = state_31812;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31832_33748 = state_31812__$1;
(statearr_31832_33748[(1)] = (11));

} else {
var statearr_31833_33749 = state_31812__$1;
(statearr_31833_33749[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (5))){
var inst_31786 = (state_31812[(7)]);
var state_31812__$1 = state_31812;
var statearr_31834_33750 = state_31812__$1;
(statearr_31834_33750[(2)] = inst_31786);

(statearr_31834_33750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (10))){
var inst_31808 = (state_31812[(2)]);
var state_31812__$1 = state_31812;
var statearr_31835_33751 = state_31812__$1;
(statearr_31835_33751[(2)] = inst_31808);

(statearr_31835_33751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (8))){
var inst_31786 = (state_31812[(7)]);
var inst_31799 = cljs.core.next(inst_31786);
var inst_31786__$1 = inst_31799;
var state_31812__$1 = (function (){var statearr_31836 = state_31812;
(statearr_31836[(7)] = inst_31786__$1);

return statearr_31836;
})();
var statearr_31837_33752 = state_31812__$1;
(statearr_31837_33752[(2)] = null);

(statearr_31837_33752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30926__auto__ = null;
var cljs$core$async$state_machine__30926__auto____0 = (function (){
var statearr_31838 = [null,null,null,null,null,null,null,null];
(statearr_31838[(0)] = cljs$core$async$state_machine__30926__auto__);

(statearr_31838[(1)] = (1));

return statearr_31838;
});
var cljs$core$async$state_machine__30926__auto____1 = (function (state_31812){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_31812);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e31843){var ex__30929__auto__ = e31843;
var statearr_31844_33753 = state_31812;
(statearr_31844_33753[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_31812[(4)]))){
var statearr_31845_33754 = state_31812;
(statearr_31845_33754[(1)] = cljs.core.first((state_31812[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33755 = state_31812;
state_31812 = G__33755;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$state_machine__30926__auto__ = function(state_31812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30926__auto____1.call(this,state_31812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30926__auto____0;
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30926__auto____1;
return cljs$core$async$state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_31850 = f__31090__auto__();
(statearr_31850[(6)] = c__31089__auto__);

return statearr_31850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));

return c__31089__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31852 = arguments.length;
switch (G__31852) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33757 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33757(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33758 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33758(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33759 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33759(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33765 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33765(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31891 = (function (ch,cs,meta31892){
this.ch = ch;
this.cs = cs;
this.meta31892 = meta31892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31893,meta31892__$1){
var self__ = this;
var _31893__$1 = this;
return (new cljs.core.async.t_cljs$core$async31891(self__.ch,self__.cs,meta31892__$1));
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31893){
var self__ = this;
var _31893__$1 = this;
return self__.meta31892;
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31892","meta31892",1426580882,null)], null);
}));

(cljs.core.async.t_cljs$core$async31891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31891");

(cljs.core.async.t_cljs$core$async31891.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31891.
 */
cljs.core.async.__GT_t_cljs$core$async31891 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31891(ch__$1,cs__$1,meta31892){
return (new cljs.core.async.t_cljs$core$async31891(ch__$1,cs__$1,meta31892));
});

}

return (new cljs.core.async.t_cljs$core$async31891(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31089__auto___33768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_32040){
var state_val_32041 = (state_32040[(1)]);
if((state_val_32041 === (7))){
var inst_32036 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
var statearr_32042_33769 = state_32040__$1;
(statearr_32042_33769[(2)] = inst_32036);

(statearr_32042_33769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (20))){
var inst_31936 = (state_32040[(7)]);
var inst_31948 = cljs.core.first(inst_31936);
var inst_31949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31948,(0),null);
var inst_31950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31948,(1),null);
var state_32040__$1 = (function (){var statearr_32043 = state_32040;
(statearr_32043[(8)] = inst_31949);

return statearr_32043;
})();
if(cljs.core.truth_(inst_31950)){
var statearr_32044_33770 = state_32040__$1;
(statearr_32044_33770[(1)] = (22));

} else {
var statearr_32045_33771 = state_32040__$1;
(statearr_32045_33771[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (27))){
var inst_31903 = (state_32040[(9)]);
var inst_31988 = (state_32040[(10)]);
var inst_31981 = (state_32040[(11)]);
var inst_31983 = (state_32040[(12)]);
var inst_31988__$1 = cljs.core._nth(inst_31981,inst_31983);
var inst_31989 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31988__$1,inst_31903,done);
var state_32040__$1 = (function (){var statearr_32047 = state_32040;
(statearr_32047[(10)] = inst_31988__$1);

return statearr_32047;
})();
if(cljs.core.truth_(inst_31989)){
var statearr_32048_33774 = state_32040__$1;
(statearr_32048_33774[(1)] = (30));

} else {
var statearr_32049_33775 = state_32040__$1;
(statearr_32049_33775[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (1))){
var state_32040__$1 = state_32040;
var statearr_32050_33776 = state_32040__$1;
(statearr_32050_33776[(2)] = null);

(statearr_32050_33776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (24))){
var inst_31936 = (state_32040[(7)]);
var inst_31955 = (state_32040[(2)]);
var inst_31956 = cljs.core.next(inst_31936);
var inst_31912 = inst_31956;
var inst_31913 = null;
var inst_31914 = (0);
var inst_31915 = (0);
var state_32040__$1 = (function (){var statearr_32051 = state_32040;
(statearr_32051[(13)] = inst_31955);

(statearr_32051[(14)] = inst_31912);

(statearr_32051[(15)] = inst_31915);

(statearr_32051[(16)] = inst_31914);

(statearr_32051[(17)] = inst_31913);

return statearr_32051;
})();
var statearr_32056_33777 = state_32040__$1;
(statearr_32056_33777[(2)] = null);

(statearr_32056_33777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (39))){
var state_32040__$1 = state_32040;
var statearr_32061_33778 = state_32040__$1;
(statearr_32061_33778[(2)] = null);

(statearr_32061_33778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (4))){
var inst_31903 = (state_32040[(9)]);
var inst_31903__$1 = (state_32040[(2)]);
var inst_31904 = (inst_31903__$1 == null);
var state_32040__$1 = (function (){var statearr_32064 = state_32040;
(statearr_32064[(9)] = inst_31903__$1);

return statearr_32064;
})();
if(cljs.core.truth_(inst_31904)){
var statearr_32066_33779 = state_32040__$1;
(statearr_32066_33779[(1)] = (5));

} else {
var statearr_32067_33780 = state_32040__$1;
(statearr_32067_33780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (15))){
var inst_31912 = (state_32040[(14)]);
var inst_31915 = (state_32040[(15)]);
var inst_31914 = (state_32040[(16)]);
var inst_31913 = (state_32040[(17)]);
var inst_31932 = (state_32040[(2)]);
var inst_31933 = (inst_31915 + (1));
var tmp32057 = inst_31912;
var tmp32058 = inst_31914;
var tmp32059 = inst_31913;
var inst_31912__$1 = tmp32057;
var inst_31913__$1 = tmp32059;
var inst_31914__$1 = tmp32058;
var inst_31915__$1 = inst_31933;
var state_32040__$1 = (function (){var statearr_32070 = state_32040;
(statearr_32070[(14)] = inst_31912__$1);

(statearr_32070[(18)] = inst_31932);

(statearr_32070[(15)] = inst_31915__$1);

(statearr_32070[(16)] = inst_31914__$1);

(statearr_32070[(17)] = inst_31913__$1);

return statearr_32070;
})();
var statearr_32072_33785 = state_32040__$1;
(statearr_32072_33785[(2)] = null);

(statearr_32072_33785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (21))){
var inst_31960 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
var statearr_32076_33786 = state_32040__$1;
(statearr_32076_33786[(2)] = inst_31960);

(statearr_32076_33786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (31))){
var inst_31988 = (state_32040[(10)]);
var inst_31992 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31988);
var state_32040__$1 = state_32040;
var statearr_32077_33787 = state_32040__$1;
(statearr_32077_33787[(2)] = inst_31992);

(statearr_32077_33787[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (32))){
var inst_31982 = (state_32040[(19)]);
var inst_31980 = (state_32040[(20)]);
var inst_31981 = (state_32040[(11)]);
var inst_31983 = (state_32040[(12)]);
var inst_31994 = (state_32040[(2)]);
var inst_31995 = (inst_31983 + (1));
var tmp32073 = inst_31982;
var tmp32074 = inst_31980;
var tmp32075 = inst_31981;
var inst_31980__$1 = tmp32074;
var inst_31981__$1 = tmp32075;
var inst_31982__$1 = tmp32073;
var inst_31983__$1 = inst_31995;
var state_32040__$1 = (function (){var statearr_32078 = state_32040;
(statearr_32078[(19)] = inst_31982__$1);

(statearr_32078[(20)] = inst_31980__$1);

(statearr_32078[(11)] = inst_31981__$1);

(statearr_32078[(12)] = inst_31983__$1);

(statearr_32078[(21)] = inst_31994);

return statearr_32078;
})();
var statearr_32079_33788 = state_32040__$1;
(statearr_32079_33788[(2)] = null);

(statearr_32079_33788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (40))){
var inst_32007 = (state_32040[(22)]);
var inst_32011 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32007);
var state_32040__$1 = state_32040;
var statearr_32080_33789 = state_32040__$1;
(statearr_32080_33789[(2)] = inst_32011);

(statearr_32080_33789[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (33))){
var inst_31998 = (state_32040[(23)]);
var inst_32000 = cljs.core.chunked_seq_QMARK_(inst_31998);
var state_32040__$1 = state_32040;
if(inst_32000){
var statearr_32081_33791 = state_32040__$1;
(statearr_32081_33791[(1)] = (36));

} else {
var statearr_32082_33792 = state_32040__$1;
(statearr_32082_33792[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (13))){
var inst_31926 = (state_32040[(24)]);
var inst_31929 = cljs.core.async.close_BANG_(inst_31926);
var state_32040__$1 = state_32040;
var statearr_32083_33794 = state_32040__$1;
(statearr_32083_33794[(2)] = inst_31929);

(statearr_32083_33794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (22))){
var inst_31949 = (state_32040[(8)]);
var inst_31952 = cljs.core.async.close_BANG_(inst_31949);
var state_32040__$1 = state_32040;
var statearr_32084_33795 = state_32040__$1;
(statearr_32084_33795[(2)] = inst_31952);

(statearr_32084_33795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (36))){
var inst_31998 = (state_32040[(23)]);
var inst_32002 = cljs.core.chunk_first(inst_31998);
var inst_32003 = cljs.core.chunk_rest(inst_31998);
var inst_32004 = cljs.core.count(inst_32002);
var inst_31980 = inst_32003;
var inst_31981 = inst_32002;
var inst_31982 = inst_32004;
var inst_31983 = (0);
var state_32040__$1 = (function (){var statearr_32085 = state_32040;
(statearr_32085[(19)] = inst_31982);

(statearr_32085[(20)] = inst_31980);

(statearr_32085[(11)] = inst_31981);

(statearr_32085[(12)] = inst_31983);

return statearr_32085;
})();
var statearr_32086_33800 = state_32040__$1;
(statearr_32086_33800[(2)] = null);

(statearr_32086_33800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (41))){
var inst_31998 = (state_32040[(23)]);
var inst_32013 = (state_32040[(2)]);
var inst_32016 = cljs.core.next(inst_31998);
var inst_31980 = inst_32016;
var inst_31981 = null;
var inst_31982 = (0);
var inst_31983 = (0);
var state_32040__$1 = (function (){var statearr_32087 = state_32040;
(statearr_32087[(19)] = inst_31982);

(statearr_32087[(20)] = inst_31980);

(statearr_32087[(25)] = inst_32013);

(statearr_32087[(11)] = inst_31981);

(statearr_32087[(12)] = inst_31983);

return statearr_32087;
})();
var statearr_32088_33804 = state_32040__$1;
(statearr_32088_33804[(2)] = null);

(statearr_32088_33804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (43))){
var state_32040__$1 = state_32040;
var statearr_32089_33806 = state_32040__$1;
(statearr_32089_33806[(2)] = null);

(statearr_32089_33806[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (29))){
var inst_32024 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
var statearr_32090_33807 = state_32040__$1;
(statearr_32090_33807[(2)] = inst_32024);

(statearr_32090_33807[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (44))){
var inst_32033 = (state_32040[(2)]);
var state_32040__$1 = (function (){var statearr_32091 = state_32040;
(statearr_32091[(26)] = inst_32033);

return statearr_32091;
})();
var statearr_32092_33808 = state_32040__$1;
(statearr_32092_33808[(2)] = null);

(statearr_32092_33808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (6))){
var inst_31971 = (state_32040[(27)]);
var inst_31970 = cljs.core.deref(cs);
var inst_31971__$1 = cljs.core.keys(inst_31970);
var inst_31973 = cljs.core.count(inst_31971__$1);
var inst_31974 = cljs.core.reset_BANG_(dctr,inst_31973);
var inst_31979 = cljs.core.seq(inst_31971__$1);
var inst_31980 = inst_31979;
var inst_31981 = null;
var inst_31982 = (0);
var inst_31983 = (0);
var state_32040__$1 = (function (){var statearr_32093 = state_32040;
(statearr_32093[(19)] = inst_31982);

(statearr_32093[(28)] = inst_31974);

(statearr_32093[(20)] = inst_31980);

(statearr_32093[(27)] = inst_31971__$1);

(statearr_32093[(11)] = inst_31981);

(statearr_32093[(12)] = inst_31983);

return statearr_32093;
})();
var statearr_32094_33816 = state_32040__$1;
(statearr_32094_33816[(2)] = null);

(statearr_32094_33816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (28))){
var inst_31980 = (state_32040[(20)]);
var inst_31998 = (state_32040[(23)]);
var inst_31998__$1 = cljs.core.seq(inst_31980);
var state_32040__$1 = (function (){var statearr_32095 = state_32040;
(statearr_32095[(23)] = inst_31998__$1);

return statearr_32095;
})();
if(inst_31998__$1){
var statearr_32096_33817 = state_32040__$1;
(statearr_32096_33817[(1)] = (33));

} else {
var statearr_32097_33821 = state_32040__$1;
(statearr_32097_33821[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (25))){
var inst_31982 = (state_32040[(19)]);
var inst_31983 = (state_32040[(12)]);
var inst_31985 = (inst_31983 < inst_31982);
var inst_31986 = inst_31985;
var state_32040__$1 = state_32040;
if(cljs.core.truth_(inst_31986)){
var statearr_32098_33827 = state_32040__$1;
(statearr_32098_33827[(1)] = (27));

} else {
var statearr_32099_33828 = state_32040__$1;
(statearr_32099_33828[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (34))){
var state_32040__$1 = state_32040;
var statearr_32100_33829 = state_32040__$1;
(statearr_32100_33829[(2)] = null);

(statearr_32100_33829[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (17))){
var state_32040__$1 = state_32040;
var statearr_32101_33830 = state_32040__$1;
(statearr_32101_33830[(2)] = null);

(statearr_32101_33830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (3))){
var inst_32038 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32040__$1,inst_32038);
} else {
if((state_val_32041 === (12))){
var inst_31966 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
var statearr_32104_33834 = state_32040__$1;
(statearr_32104_33834[(2)] = inst_31966);

(statearr_32104_33834[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (2))){
var state_32040__$1 = state_32040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32040__$1,(4),ch);
} else {
if((state_val_32041 === (23))){
var state_32040__$1 = state_32040;
var statearr_32105_33839 = state_32040__$1;
(statearr_32105_33839[(2)] = null);

(statearr_32105_33839[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (35))){
var inst_32022 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
var statearr_32106_33840 = state_32040__$1;
(statearr_32106_33840[(2)] = inst_32022);

(statearr_32106_33840[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (19))){
var inst_31936 = (state_32040[(7)]);
var inst_31940 = cljs.core.chunk_first(inst_31936);
var inst_31941 = cljs.core.chunk_rest(inst_31936);
var inst_31942 = cljs.core.count(inst_31940);
var inst_31912 = inst_31941;
var inst_31913 = inst_31940;
var inst_31914 = inst_31942;
var inst_31915 = (0);
var state_32040__$1 = (function (){var statearr_32107 = state_32040;
(statearr_32107[(14)] = inst_31912);

(statearr_32107[(15)] = inst_31915);

(statearr_32107[(16)] = inst_31914);

(statearr_32107[(17)] = inst_31913);

return statearr_32107;
})();
var statearr_32111_33843 = state_32040__$1;
(statearr_32111_33843[(2)] = null);

(statearr_32111_33843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (11))){
var inst_31936 = (state_32040[(7)]);
var inst_31912 = (state_32040[(14)]);
var inst_31936__$1 = cljs.core.seq(inst_31912);
var state_32040__$1 = (function (){var statearr_32112 = state_32040;
(statearr_32112[(7)] = inst_31936__$1);

return statearr_32112;
})();
if(inst_31936__$1){
var statearr_32116_33844 = state_32040__$1;
(statearr_32116_33844[(1)] = (16));

} else {
var statearr_32117_33845 = state_32040__$1;
(statearr_32117_33845[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (9))){
var inst_31968 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
var statearr_32118_33846 = state_32040__$1;
(statearr_32118_33846[(2)] = inst_31968);

(statearr_32118_33846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (5))){
var inst_31910 = cljs.core.deref(cs);
var inst_31911 = cljs.core.seq(inst_31910);
var inst_31912 = inst_31911;
var inst_31913 = null;
var inst_31914 = (0);
var inst_31915 = (0);
var state_32040__$1 = (function (){var statearr_32121 = state_32040;
(statearr_32121[(14)] = inst_31912);

(statearr_32121[(15)] = inst_31915);

(statearr_32121[(16)] = inst_31914);

(statearr_32121[(17)] = inst_31913);

return statearr_32121;
})();
var statearr_32122_33850 = state_32040__$1;
(statearr_32122_33850[(2)] = null);

(statearr_32122_33850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (14))){
var state_32040__$1 = state_32040;
var statearr_32123_33855 = state_32040__$1;
(statearr_32123_33855[(2)] = null);

(statearr_32123_33855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (45))){
var inst_32030 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
var statearr_32124_33856 = state_32040__$1;
(statearr_32124_33856[(2)] = inst_32030);

(statearr_32124_33856[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (26))){
var inst_31971 = (state_32040[(27)]);
var inst_32026 = (state_32040[(2)]);
var inst_32027 = cljs.core.seq(inst_31971);
var state_32040__$1 = (function (){var statearr_32133 = state_32040;
(statearr_32133[(29)] = inst_32026);

return statearr_32133;
})();
if(inst_32027){
var statearr_32138_33862 = state_32040__$1;
(statearr_32138_33862[(1)] = (42));

} else {
var statearr_32139_33863 = state_32040__$1;
(statearr_32139_33863[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (16))){
var inst_31936 = (state_32040[(7)]);
var inst_31938 = cljs.core.chunked_seq_QMARK_(inst_31936);
var state_32040__$1 = state_32040;
if(inst_31938){
var statearr_32140_33868 = state_32040__$1;
(statearr_32140_33868[(1)] = (19));

} else {
var statearr_32141_33869 = state_32040__$1;
(statearr_32141_33869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (38))){
var inst_32019 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
var statearr_32143_33871 = state_32040__$1;
(statearr_32143_33871[(2)] = inst_32019);

(statearr_32143_33871[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (30))){
var state_32040__$1 = state_32040;
var statearr_32144_33872 = state_32040__$1;
(statearr_32144_33872[(2)] = null);

(statearr_32144_33872[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (10))){
var inst_31915 = (state_32040[(15)]);
var inst_31913 = (state_32040[(17)]);
var inst_31925 = cljs.core._nth(inst_31913,inst_31915);
var inst_31926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31925,(0),null);
var inst_31927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31925,(1),null);
var state_32040__$1 = (function (){var statearr_32145 = state_32040;
(statearr_32145[(24)] = inst_31926);

return statearr_32145;
})();
if(cljs.core.truth_(inst_31927)){
var statearr_32147_33873 = state_32040__$1;
(statearr_32147_33873[(1)] = (13));

} else {
var statearr_32148_33874 = state_32040__$1;
(statearr_32148_33874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (18))){
var inst_31964 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
var statearr_32149_33875 = state_32040__$1;
(statearr_32149_33875[(2)] = inst_31964);

(statearr_32149_33875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (42))){
var state_32040__$1 = state_32040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32040__$1,(45),dchan);
} else {
if((state_val_32041 === (37))){
var inst_31903 = (state_32040[(9)]);
var inst_32007 = (state_32040[(22)]);
var inst_31998 = (state_32040[(23)]);
var inst_32007__$1 = cljs.core.first(inst_31998);
var inst_32008 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32007__$1,inst_31903,done);
var state_32040__$1 = (function (){var statearr_32150 = state_32040;
(statearr_32150[(22)] = inst_32007__$1);

return statearr_32150;
})();
if(cljs.core.truth_(inst_32008)){
var statearr_32151_33877 = state_32040__$1;
(statearr_32151_33877[(1)] = (39));

} else {
var statearr_32152_33878 = state_32040__$1;
(statearr_32152_33878[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (8))){
var inst_31915 = (state_32040[(15)]);
var inst_31914 = (state_32040[(16)]);
var inst_31917 = (inst_31915 < inst_31914);
var inst_31918 = inst_31917;
var state_32040__$1 = state_32040;
if(cljs.core.truth_(inst_31918)){
var statearr_32153_33882 = state_32040__$1;
(statearr_32153_33882[(1)] = (10));

} else {
var statearr_32154_33883 = state_32040__$1;
(statearr_32154_33883[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30926__auto__ = null;
var cljs$core$async$mult_$_state_machine__30926__auto____0 = (function (){
var statearr_32157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32157[(0)] = cljs$core$async$mult_$_state_machine__30926__auto__);

(statearr_32157[(1)] = (1));

return statearr_32157;
});
var cljs$core$async$mult_$_state_machine__30926__auto____1 = (function (state_32040){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_32040);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e32158){var ex__30929__auto__ = e32158;
var statearr_32159_33888 = state_32040;
(statearr_32159_33888[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_32040[(4)]))){
var statearr_32160_33889 = state_32040;
(statearr_32160_33889[(1)] = cljs.core.first((state_32040[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33890 = state_32040;
state_32040 = G__33890;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30926__auto__ = function(state_32040){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30926__auto____1.call(this,state_32040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30926__auto____0;
cljs$core$async$mult_$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30926__auto____1;
return cljs$core$async$mult_$_state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_32163 = f__31090__auto__();
(statearr_32163[(6)] = c__31089__auto___33768);

return statearr_32163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32167 = arguments.length;
switch (G__32167) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33893 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33893(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33894 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33894(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33895 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33895(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33896 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33896(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33901 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33901(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33903 = arguments.length;
var i__4737__auto___33904 = (0);
while(true){
if((i__4737__auto___33904 < len__4736__auto___33903)){
args__4742__auto__.push((arguments[i__4737__auto___33904]));

var G__33905 = (i__4737__auto___33904 + (1));
i__4737__auto___33904 = G__33905;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32179){
var map__32180 = p__32179;
var map__32180__$1 = (((((!((map__32180 == null))))?(((((map__32180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32180):map__32180);
var opts = map__32180__$1;
var statearr_32182_33906 = state;
(statearr_32182_33906[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32183_33907 = state;
(statearr_32183_33907[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32184_33908 = state;
(statearr_32184_33908[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32175){
var G__32176 = cljs.core.first(seq32175);
var seq32175__$1 = cljs.core.next(seq32175);
var G__32177 = cljs.core.first(seq32175__$1);
var seq32175__$2 = cljs.core.next(seq32175__$1);
var G__32178 = cljs.core.first(seq32175__$2);
var seq32175__$3 = cljs.core.next(seq32175__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32176,G__32177,G__32178,seq32175__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32205 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32206){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32206 = meta32206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32207,meta32206__$1){
var self__ = this;
var _32207__$1 = this;
return (new cljs.core.async.t_cljs$core$async32205(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32206__$1));
}));

(cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32207){
var self__ = this;
var _32207__$1 = this;
return self__.meta32206;
}));

(cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32206","meta32206",-1073743061,null)], null);
}));

(cljs.core.async.t_cljs$core$async32205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32205");

(cljs.core.async.t_cljs$core$async32205.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32205.
 */
cljs.core.async.__GT_t_cljs$core$async32205 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32205(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32206){
return (new cljs.core.async.t_cljs$core$async32205(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32206));
});

}

return (new cljs.core.async.t_cljs$core$async32205(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31089__auto___33927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_32340){
var state_val_32341 = (state_32340[(1)]);
if((state_val_32341 === (7))){
var inst_32239 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
var statearr_32342_33928 = state_32340__$1;
(statearr_32342_33928[(2)] = inst_32239);

(statearr_32342_33928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (20))){
var inst_32251 = (state_32340[(7)]);
var state_32340__$1 = state_32340;
var statearr_32343_33930 = state_32340__$1;
(statearr_32343_33930[(2)] = inst_32251);

(statearr_32343_33930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (27))){
var state_32340__$1 = state_32340;
var statearr_32344_33932 = state_32340__$1;
(statearr_32344_33932[(2)] = null);

(statearr_32344_33932[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (1))){
var inst_32222 = (state_32340[(8)]);
var inst_32222__$1 = calc_state();
var inst_32224 = (inst_32222__$1 == null);
var inst_32225 = cljs.core.not(inst_32224);
var state_32340__$1 = (function (){var statearr_32347 = state_32340;
(statearr_32347[(8)] = inst_32222__$1);

return statearr_32347;
})();
if(inst_32225){
var statearr_32349_33933 = state_32340__$1;
(statearr_32349_33933[(1)] = (2));

} else {
var statearr_32350_33934 = state_32340__$1;
(statearr_32350_33934[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (24))){
var inst_32283 = (state_32340[(9)]);
var inst_32310 = (state_32340[(10)]);
var inst_32292 = (state_32340[(11)]);
var inst_32310__$1 = (inst_32283.cljs$core$IFn$_invoke$arity$1 ? inst_32283.cljs$core$IFn$_invoke$arity$1(inst_32292) : inst_32283.call(null,inst_32292));
var state_32340__$1 = (function (){var statearr_32351 = state_32340;
(statearr_32351[(10)] = inst_32310__$1);

return statearr_32351;
})();
if(cljs.core.truth_(inst_32310__$1)){
var statearr_32352_33935 = state_32340__$1;
(statearr_32352_33935[(1)] = (29));

} else {
var statearr_32353_33936 = state_32340__$1;
(statearr_32353_33936[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (4))){
var inst_32242 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
if(cljs.core.truth_(inst_32242)){
var statearr_32354_33941 = state_32340__$1;
(statearr_32354_33941[(1)] = (8));

} else {
var statearr_32355_33942 = state_32340__$1;
(statearr_32355_33942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (15))){
var inst_32275 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
if(cljs.core.truth_(inst_32275)){
var statearr_32356_33945 = state_32340__$1;
(statearr_32356_33945[(1)] = (19));

} else {
var statearr_32357_33946 = state_32340__$1;
(statearr_32357_33946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (21))){
var inst_32280 = (state_32340[(12)]);
var inst_32280__$1 = (state_32340[(2)]);
var inst_32283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32280__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32280__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32280__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32340__$1 = (function (){var statearr_32360 = state_32340;
(statearr_32360[(9)] = inst_32283);

(statearr_32360[(13)] = inst_32284);

(statearr_32360[(12)] = inst_32280__$1);

return statearr_32360;
})();
return cljs.core.async.ioc_alts_BANG_(state_32340__$1,(22),inst_32285);
} else {
if((state_val_32341 === (31))){
var inst_32318 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
if(cljs.core.truth_(inst_32318)){
var statearr_32361_33953 = state_32340__$1;
(statearr_32361_33953[(1)] = (32));

} else {
var statearr_32362_33954 = state_32340__$1;
(statearr_32362_33954[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (32))){
var inst_32291 = (state_32340[(14)]);
var state_32340__$1 = state_32340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32340__$1,(35),out,inst_32291);
} else {
if((state_val_32341 === (33))){
var inst_32280 = (state_32340[(12)]);
var inst_32251 = inst_32280;
var state_32340__$1 = (function (){var statearr_32367 = state_32340;
(statearr_32367[(7)] = inst_32251);

return statearr_32367;
})();
var statearr_32369_33957 = state_32340__$1;
(statearr_32369_33957[(2)] = null);

(statearr_32369_33957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (13))){
var inst_32251 = (state_32340[(7)]);
var inst_32264 = inst_32251.cljs$lang$protocol_mask$partition0$;
var inst_32265 = (inst_32264 & (64));
var inst_32266 = inst_32251.cljs$core$ISeq$;
var inst_32267 = (cljs.core.PROTOCOL_SENTINEL === inst_32266);
var inst_32268 = ((inst_32265) || (inst_32267));
var state_32340__$1 = state_32340;
if(cljs.core.truth_(inst_32268)){
var statearr_32371_33958 = state_32340__$1;
(statearr_32371_33958[(1)] = (16));

} else {
var statearr_32372_33959 = state_32340__$1;
(statearr_32372_33959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (22))){
var inst_32291 = (state_32340[(14)]);
var inst_32292 = (state_32340[(11)]);
var inst_32290 = (state_32340[(2)]);
var inst_32291__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32290,(0),null);
var inst_32292__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32290,(1),null);
var inst_32293 = (inst_32291__$1 == null);
var inst_32294 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32292__$1,change);
var inst_32295 = ((inst_32293) || (inst_32294));
var state_32340__$1 = (function (){var statearr_32373 = state_32340;
(statearr_32373[(14)] = inst_32291__$1);

(statearr_32373[(11)] = inst_32292__$1);

return statearr_32373;
})();
if(cljs.core.truth_(inst_32295)){
var statearr_32374_33967 = state_32340__$1;
(statearr_32374_33967[(1)] = (23));

} else {
var statearr_32377_33972 = state_32340__$1;
(statearr_32377_33972[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (36))){
var inst_32280 = (state_32340[(12)]);
var inst_32251 = inst_32280;
var state_32340__$1 = (function (){var statearr_32379 = state_32340;
(statearr_32379[(7)] = inst_32251);

return statearr_32379;
})();
var statearr_32380_33977 = state_32340__$1;
(statearr_32380_33977[(2)] = null);

(statearr_32380_33977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (29))){
var inst_32310 = (state_32340[(10)]);
var state_32340__$1 = state_32340;
var statearr_32385_33984 = state_32340__$1;
(statearr_32385_33984[(2)] = inst_32310);

(statearr_32385_33984[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (6))){
var state_32340__$1 = state_32340;
var statearr_32387_33985 = state_32340__$1;
(statearr_32387_33985[(2)] = false);

(statearr_32387_33985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (28))){
var inst_32302 = (state_32340[(2)]);
var inst_32303 = calc_state();
var inst_32251 = inst_32303;
var state_32340__$1 = (function (){var statearr_32388 = state_32340;
(statearr_32388[(7)] = inst_32251);

(statearr_32388[(15)] = inst_32302);

return statearr_32388;
})();
var statearr_32389_33986 = state_32340__$1;
(statearr_32389_33986[(2)] = null);

(statearr_32389_33986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (25))){
var inst_32332 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
var statearr_32390_33988 = state_32340__$1;
(statearr_32390_33988[(2)] = inst_32332);

(statearr_32390_33988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (34))){
var inst_32330 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
var statearr_32393_33995 = state_32340__$1;
(statearr_32393_33995[(2)] = inst_32330);

(statearr_32393_33995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (17))){
var state_32340__$1 = state_32340;
var statearr_32394_33998 = state_32340__$1;
(statearr_32394_33998[(2)] = false);

(statearr_32394_33998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (3))){
var state_32340__$1 = state_32340;
var statearr_32398_33999 = state_32340__$1;
(statearr_32398_33999[(2)] = false);

(statearr_32398_33999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (12))){
var inst_32334 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32340__$1,inst_32334);
} else {
if((state_val_32341 === (2))){
var inst_32222 = (state_32340[(8)]);
var inst_32231 = inst_32222.cljs$lang$protocol_mask$partition0$;
var inst_32232 = (inst_32231 & (64));
var inst_32233 = inst_32222.cljs$core$ISeq$;
var inst_32234 = (cljs.core.PROTOCOL_SENTINEL === inst_32233);
var inst_32235 = ((inst_32232) || (inst_32234));
var state_32340__$1 = state_32340;
if(cljs.core.truth_(inst_32235)){
var statearr_32399_34004 = state_32340__$1;
(statearr_32399_34004[(1)] = (5));

} else {
var statearr_32400_34005 = state_32340__$1;
(statearr_32400_34005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (23))){
var inst_32291 = (state_32340[(14)]);
var inst_32297 = (inst_32291 == null);
var state_32340__$1 = state_32340;
if(cljs.core.truth_(inst_32297)){
var statearr_32402_34009 = state_32340__$1;
(statearr_32402_34009[(1)] = (26));

} else {
var statearr_32403_34010 = state_32340__$1;
(statearr_32403_34010[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (35))){
var inst_32321 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
if(cljs.core.truth_(inst_32321)){
var statearr_32404_34011 = state_32340__$1;
(statearr_32404_34011[(1)] = (36));

} else {
var statearr_32406_34012 = state_32340__$1;
(statearr_32406_34012[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (19))){
var inst_32251 = (state_32340[(7)]);
var inst_32277 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32251);
var state_32340__$1 = state_32340;
var statearr_32407_34013 = state_32340__$1;
(statearr_32407_34013[(2)] = inst_32277);

(statearr_32407_34013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (11))){
var inst_32251 = (state_32340[(7)]);
var inst_32257 = (inst_32251 == null);
var inst_32258 = cljs.core.not(inst_32257);
var state_32340__$1 = state_32340;
if(inst_32258){
var statearr_32408_34015 = state_32340__$1;
(statearr_32408_34015[(1)] = (13));

} else {
var statearr_32409_34016 = state_32340__$1;
(statearr_32409_34016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (9))){
var inst_32222 = (state_32340[(8)]);
var state_32340__$1 = state_32340;
var statearr_32410_34017 = state_32340__$1;
(statearr_32410_34017[(2)] = inst_32222);

(statearr_32410_34017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (5))){
var state_32340__$1 = state_32340;
var statearr_32411_34018 = state_32340__$1;
(statearr_32411_34018[(2)] = true);

(statearr_32411_34018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (14))){
var state_32340__$1 = state_32340;
var statearr_32414_34022 = state_32340__$1;
(statearr_32414_34022[(2)] = false);

(statearr_32414_34022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (26))){
var inst_32292 = (state_32340[(11)]);
var inst_32299 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32292);
var state_32340__$1 = state_32340;
var statearr_32420_34025 = state_32340__$1;
(statearr_32420_34025[(2)] = inst_32299);

(statearr_32420_34025[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (16))){
var state_32340__$1 = state_32340;
var statearr_32421_34026 = state_32340__$1;
(statearr_32421_34026[(2)] = true);

(statearr_32421_34026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (38))){
var inst_32326 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
var statearr_32422_34027 = state_32340__$1;
(statearr_32422_34027[(2)] = inst_32326);

(statearr_32422_34027[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (30))){
var inst_32283 = (state_32340[(9)]);
var inst_32284 = (state_32340[(13)]);
var inst_32292 = (state_32340[(11)]);
var inst_32313 = cljs.core.empty_QMARK_(inst_32283);
var inst_32314 = (inst_32284.cljs$core$IFn$_invoke$arity$1 ? inst_32284.cljs$core$IFn$_invoke$arity$1(inst_32292) : inst_32284.call(null,inst_32292));
var inst_32315 = cljs.core.not(inst_32314);
var inst_32316 = ((inst_32313) && (inst_32315));
var state_32340__$1 = state_32340;
var statearr_32427_34030 = state_32340__$1;
(statearr_32427_34030[(2)] = inst_32316);

(statearr_32427_34030[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (10))){
var inst_32222 = (state_32340[(8)]);
var inst_32247 = (state_32340[(2)]);
var inst_32248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32247,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32247,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32247,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32251 = inst_32222;
var state_32340__$1 = (function (){var statearr_32432 = state_32340;
(statearr_32432[(16)] = inst_32248);

(statearr_32432[(17)] = inst_32249);

(statearr_32432[(7)] = inst_32251);

(statearr_32432[(18)] = inst_32250);

return statearr_32432;
})();
var statearr_32433_34041 = state_32340__$1;
(statearr_32433_34041[(2)] = null);

(statearr_32433_34041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (18))){
var inst_32272 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
var statearr_32434_34042 = state_32340__$1;
(statearr_32434_34042[(2)] = inst_32272);

(statearr_32434_34042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (37))){
var state_32340__$1 = state_32340;
var statearr_32436_34046 = state_32340__$1;
(statearr_32436_34046[(2)] = null);

(statearr_32436_34046[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (8))){
var inst_32222 = (state_32340[(8)]);
var inst_32244 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32222);
var state_32340__$1 = state_32340;
var statearr_32439_34047 = state_32340__$1;
(statearr_32439_34047[(2)] = inst_32244);

(statearr_32439_34047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30926__auto__ = null;
var cljs$core$async$mix_$_state_machine__30926__auto____0 = (function (){
var statearr_32443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32443[(0)] = cljs$core$async$mix_$_state_machine__30926__auto__);

(statearr_32443[(1)] = (1));

return statearr_32443;
});
var cljs$core$async$mix_$_state_machine__30926__auto____1 = (function (state_32340){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_32340);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e32445){var ex__30929__auto__ = e32445;
var statearr_32447_34052 = state_32340;
(statearr_32447_34052[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_32340[(4)]))){
var statearr_32449_34054 = state_32340;
(statearr_32449_34054[(1)] = cljs.core.first((state_32340[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34055 = state_32340;
state_32340 = G__34055;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30926__auto__ = function(state_32340){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30926__auto____1.call(this,state_32340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30926__auto____0;
cljs$core$async$mix_$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30926__auto____1;
return cljs$core$async$mix_$_state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_32451 = f__31090__auto__();
(statearr_32451[(6)] = c__31089__auto___33927);

return statearr_32451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34056 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34056(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34060 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34060(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34074 = (function() {
var G__34075 = null;
var G__34075__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34075__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34075 = function(p,v){
switch(arguments.length){
case 1:
return G__34075__1.call(this,p);
case 2:
return G__34075__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34075.cljs$core$IFn$_invoke$arity$1 = G__34075__1;
G__34075.cljs$core$IFn$_invoke$arity$2 = G__34075__2;
return G__34075;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32503 = arguments.length;
switch (G__32503) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34074(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34074(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32521 = arguments.length;
switch (G__32521) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32514_SHARP_){
if(cljs.core.truth_((p1__32514_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32514_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32514_SHARP_.call(null,topic)))){
return p1__32514_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32514_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32537 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32538){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32538 = meta32538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32539,meta32538__$1){
var self__ = this;
var _32539__$1 = this;
return (new cljs.core.async.t_cljs$core$async32537(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32538__$1));
}));

(cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32539){
var self__ = this;
var _32539__$1 = this;
return self__.meta32538;
}));

(cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32538","meta32538",1501472308,null)], null);
}));

(cljs.core.async.t_cljs$core$async32537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32537");

(cljs.core.async.t_cljs$core$async32537.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32537.
 */
cljs.core.async.__GT_t_cljs$core$async32537 = (function cljs$core$async$__GT_t_cljs$core$async32537(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32538){
return (new cljs.core.async.t_cljs$core$async32537(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32538));
});

}

return (new cljs.core.async.t_cljs$core$async32537(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31089__auto___34103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_32636){
var state_val_32637 = (state_32636[(1)]);
if((state_val_32637 === (7))){
var inst_32632 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32642_34104 = state_32636__$1;
(statearr_32642_34104[(2)] = inst_32632);

(statearr_32642_34104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (20))){
var state_32636__$1 = state_32636;
var statearr_32643_34106 = state_32636__$1;
(statearr_32643_34106[(2)] = null);

(statearr_32643_34106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (1))){
var state_32636__$1 = state_32636;
var statearr_32644_34107 = state_32636__$1;
(statearr_32644_34107[(2)] = null);

(statearr_32644_34107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (24))){
var inst_32614 = (state_32636[(7)]);
var inst_32624 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32614);
var state_32636__$1 = state_32636;
var statearr_32645_34108 = state_32636__$1;
(statearr_32645_34108[(2)] = inst_32624);

(statearr_32645_34108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (4))){
var inst_32560 = (state_32636[(8)]);
var inst_32560__$1 = (state_32636[(2)]);
var inst_32561 = (inst_32560__$1 == null);
var state_32636__$1 = (function (){var statearr_32646 = state_32636;
(statearr_32646[(8)] = inst_32560__$1);

return statearr_32646;
})();
if(cljs.core.truth_(inst_32561)){
var statearr_32647_34109 = state_32636__$1;
(statearr_32647_34109[(1)] = (5));

} else {
var statearr_32648_34116 = state_32636__$1;
(statearr_32648_34116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (15))){
var inst_32608 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32649_34117 = state_32636__$1;
(statearr_32649_34117[(2)] = inst_32608);

(statearr_32649_34117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (21))){
var inst_32629 = (state_32636[(2)]);
var state_32636__$1 = (function (){var statearr_32652 = state_32636;
(statearr_32652[(9)] = inst_32629);

return statearr_32652;
})();
var statearr_32653_34118 = state_32636__$1;
(statearr_32653_34118[(2)] = null);

(statearr_32653_34118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (13))){
var inst_32588 = (state_32636[(10)]);
var inst_32590 = cljs.core.chunked_seq_QMARK_(inst_32588);
var state_32636__$1 = state_32636;
if(inst_32590){
var statearr_32654_34119 = state_32636__$1;
(statearr_32654_34119[(1)] = (16));

} else {
var statearr_32655_34120 = state_32636__$1;
(statearr_32655_34120[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (22))){
var inst_32621 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
if(cljs.core.truth_(inst_32621)){
var statearr_32656_34121 = state_32636__$1;
(statearr_32656_34121[(1)] = (23));

} else {
var statearr_32661_34123 = state_32636__$1;
(statearr_32661_34123[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (6))){
var inst_32616 = (state_32636[(11)]);
var inst_32614 = (state_32636[(7)]);
var inst_32560 = (state_32636[(8)]);
var inst_32614__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32560) : topic_fn.call(null,inst_32560));
var inst_32615 = cljs.core.deref(mults);
var inst_32616__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32615,inst_32614__$1);
var state_32636__$1 = (function (){var statearr_32662 = state_32636;
(statearr_32662[(11)] = inst_32616__$1);

(statearr_32662[(7)] = inst_32614__$1);

return statearr_32662;
})();
if(cljs.core.truth_(inst_32616__$1)){
var statearr_32663_34124 = state_32636__$1;
(statearr_32663_34124[(1)] = (19));

} else {
var statearr_32664_34125 = state_32636__$1;
(statearr_32664_34125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (25))){
var inst_32626 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32665_34126 = state_32636__$1;
(statearr_32665_34126[(2)] = inst_32626);

(statearr_32665_34126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (17))){
var inst_32588 = (state_32636[(10)]);
var inst_32597 = cljs.core.first(inst_32588);
var inst_32598 = cljs.core.async.muxch_STAR_(inst_32597);
var inst_32599 = cljs.core.async.close_BANG_(inst_32598);
var inst_32602 = cljs.core.next(inst_32588);
var inst_32570 = inst_32602;
var inst_32571 = null;
var inst_32572 = (0);
var inst_32573 = (0);
var state_32636__$1 = (function (){var statearr_32668 = state_32636;
(statearr_32668[(12)] = inst_32599);

(statearr_32668[(13)] = inst_32572);

(statearr_32668[(14)] = inst_32573);

(statearr_32668[(15)] = inst_32571);

(statearr_32668[(16)] = inst_32570);

return statearr_32668;
})();
var statearr_32669_34127 = state_32636__$1;
(statearr_32669_34127[(2)] = null);

(statearr_32669_34127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (3))){
var inst_32634 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32636__$1,inst_32634);
} else {
if((state_val_32637 === (12))){
var inst_32610 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32673_34130 = state_32636__$1;
(statearr_32673_34130[(2)] = inst_32610);

(statearr_32673_34130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (2))){
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32636__$1,(4),ch);
} else {
if((state_val_32637 === (23))){
var state_32636__$1 = state_32636;
var statearr_32675_34131 = state_32636__$1;
(statearr_32675_34131[(2)] = null);

(statearr_32675_34131[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (19))){
var inst_32616 = (state_32636[(11)]);
var inst_32560 = (state_32636[(8)]);
var inst_32618 = cljs.core.async.muxch_STAR_(inst_32616);
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32636__$1,(22),inst_32618,inst_32560);
} else {
if((state_val_32637 === (11))){
var inst_32588 = (state_32636[(10)]);
var inst_32570 = (state_32636[(16)]);
var inst_32588__$1 = cljs.core.seq(inst_32570);
var state_32636__$1 = (function (){var statearr_32680 = state_32636;
(statearr_32680[(10)] = inst_32588__$1);

return statearr_32680;
})();
if(inst_32588__$1){
var statearr_32681_34133 = state_32636__$1;
(statearr_32681_34133[(1)] = (13));

} else {
var statearr_32682_34135 = state_32636__$1;
(statearr_32682_34135[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (9))){
var inst_32612 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32684_34136 = state_32636__$1;
(statearr_32684_34136[(2)] = inst_32612);

(statearr_32684_34136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (5))){
var inst_32567 = cljs.core.deref(mults);
var inst_32568 = cljs.core.vals(inst_32567);
var inst_32569 = cljs.core.seq(inst_32568);
var inst_32570 = inst_32569;
var inst_32571 = null;
var inst_32572 = (0);
var inst_32573 = (0);
var state_32636__$1 = (function (){var statearr_32685 = state_32636;
(statearr_32685[(13)] = inst_32572);

(statearr_32685[(14)] = inst_32573);

(statearr_32685[(15)] = inst_32571);

(statearr_32685[(16)] = inst_32570);

return statearr_32685;
})();
var statearr_32688_34137 = state_32636__$1;
(statearr_32688_34137[(2)] = null);

(statearr_32688_34137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (14))){
var state_32636__$1 = state_32636;
var statearr_32692_34138 = state_32636__$1;
(statearr_32692_34138[(2)] = null);

(statearr_32692_34138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (16))){
var inst_32588 = (state_32636[(10)]);
var inst_32592 = cljs.core.chunk_first(inst_32588);
var inst_32593 = cljs.core.chunk_rest(inst_32588);
var inst_32594 = cljs.core.count(inst_32592);
var inst_32570 = inst_32593;
var inst_32571 = inst_32592;
var inst_32572 = inst_32594;
var inst_32573 = (0);
var state_32636__$1 = (function (){var statearr_32693 = state_32636;
(statearr_32693[(13)] = inst_32572);

(statearr_32693[(14)] = inst_32573);

(statearr_32693[(15)] = inst_32571);

(statearr_32693[(16)] = inst_32570);

return statearr_32693;
})();
var statearr_32694_34139 = state_32636__$1;
(statearr_32694_34139[(2)] = null);

(statearr_32694_34139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (10))){
var inst_32572 = (state_32636[(13)]);
var inst_32573 = (state_32636[(14)]);
var inst_32571 = (state_32636[(15)]);
var inst_32570 = (state_32636[(16)]);
var inst_32582 = cljs.core._nth(inst_32571,inst_32573);
var inst_32583 = cljs.core.async.muxch_STAR_(inst_32582);
var inst_32584 = cljs.core.async.close_BANG_(inst_32583);
var inst_32585 = (inst_32573 + (1));
var tmp32689 = inst_32572;
var tmp32690 = inst_32571;
var tmp32691 = inst_32570;
var inst_32570__$1 = tmp32691;
var inst_32571__$1 = tmp32690;
var inst_32572__$1 = tmp32689;
var inst_32573__$1 = inst_32585;
var state_32636__$1 = (function (){var statearr_32698 = state_32636;
(statearr_32698[(13)] = inst_32572__$1);

(statearr_32698[(17)] = inst_32584);

(statearr_32698[(14)] = inst_32573__$1);

(statearr_32698[(15)] = inst_32571__$1);

(statearr_32698[(16)] = inst_32570__$1);

return statearr_32698;
})();
var statearr_32699_34146 = state_32636__$1;
(statearr_32699_34146[(2)] = null);

(statearr_32699_34146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (18))){
var inst_32605 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32704_34147 = state_32636__$1;
(statearr_32704_34147[(2)] = inst_32605);

(statearr_32704_34147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (8))){
var inst_32572 = (state_32636[(13)]);
var inst_32573 = (state_32636[(14)]);
var inst_32579 = (inst_32573 < inst_32572);
var inst_32580 = inst_32579;
var state_32636__$1 = state_32636;
if(cljs.core.truth_(inst_32580)){
var statearr_32707_34149 = state_32636__$1;
(statearr_32707_34149[(1)] = (10));

} else {
var statearr_32708_34150 = state_32636__$1;
(statearr_32708_34150[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30926__auto__ = null;
var cljs$core$async$state_machine__30926__auto____0 = (function (){
var statearr_32711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32711[(0)] = cljs$core$async$state_machine__30926__auto__);

(statearr_32711[(1)] = (1));

return statearr_32711;
});
var cljs$core$async$state_machine__30926__auto____1 = (function (state_32636){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_32636);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e32712){var ex__30929__auto__ = e32712;
var statearr_32714_34156 = state_32636;
(statearr_32714_34156[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_32636[(4)]))){
var statearr_32715_34157 = state_32636;
(statearr_32715_34157[(1)] = cljs.core.first((state_32636[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34158 = state_32636;
state_32636 = G__34158;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$state_machine__30926__auto__ = function(state_32636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30926__auto____1.call(this,state_32636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30926__auto____0;
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30926__auto____1;
return cljs$core$async$state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_32716 = f__31090__auto__();
(statearr_32716[(6)] = c__31089__auto___34103);

return statearr_32716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32718 = arguments.length;
switch (G__32718) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32722 = arguments.length;
switch (G__32722) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32724 = arguments.length;
switch (G__32724) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__31089__auto___34164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_32770){
var state_val_32771 = (state_32770[(1)]);
if((state_val_32771 === (7))){
var state_32770__$1 = state_32770;
var statearr_32772_34165 = state_32770__$1;
(statearr_32772_34165[(2)] = null);

(statearr_32772_34165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (1))){
var state_32770__$1 = state_32770;
var statearr_32773_34166 = state_32770__$1;
(statearr_32773_34166[(2)] = null);

(statearr_32773_34166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (4))){
var inst_32729 = (state_32770[(7)]);
var inst_32728 = (state_32770[(8)]);
var inst_32731 = (inst_32729 < inst_32728);
var state_32770__$1 = state_32770;
if(cljs.core.truth_(inst_32731)){
var statearr_32774_34167 = state_32770__$1;
(statearr_32774_34167[(1)] = (6));

} else {
var statearr_32775_34168 = state_32770__$1;
(statearr_32775_34168[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (15))){
var inst_32755 = (state_32770[(9)]);
var inst_32760 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32755);
var state_32770__$1 = state_32770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32770__$1,(17),out,inst_32760);
} else {
if((state_val_32771 === (13))){
var inst_32755 = (state_32770[(9)]);
var inst_32755__$1 = (state_32770[(2)]);
var inst_32756 = cljs.core.some(cljs.core.nil_QMARK_,inst_32755__$1);
var state_32770__$1 = (function (){var statearr_32777 = state_32770;
(statearr_32777[(9)] = inst_32755__$1);

return statearr_32777;
})();
if(cljs.core.truth_(inst_32756)){
var statearr_32779_34170 = state_32770__$1;
(statearr_32779_34170[(1)] = (14));

} else {
var statearr_32780_34171 = state_32770__$1;
(statearr_32780_34171[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (6))){
var state_32770__$1 = state_32770;
var statearr_32781_34173 = state_32770__$1;
(statearr_32781_34173[(2)] = null);

(statearr_32781_34173[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (17))){
var inst_32762 = (state_32770[(2)]);
var state_32770__$1 = (function (){var statearr_32784 = state_32770;
(statearr_32784[(10)] = inst_32762);

return statearr_32784;
})();
var statearr_32785_34174 = state_32770__$1;
(statearr_32785_34174[(2)] = null);

(statearr_32785_34174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (3))){
var inst_32768 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32770__$1,inst_32768);
} else {
if((state_val_32771 === (12))){
var _ = (function (){var statearr_32786 = state_32770;
(statearr_32786[(4)] = cljs.core.rest((state_32770[(4)])));

return statearr_32786;
})();
var state_32770__$1 = state_32770;
var ex32782 = (state_32770__$1[(2)]);
var statearr_32787_34175 = state_32770__$1;
(statearr_32787_34175[(5)] = ex32782);


if((ex32782 instanceof Object)){
var statearr_32789_34176 = state_32770__$1;
(statearr_32789_34176[(1)] = (11));

(statearr_32789_34176[(5)] = null);

} else {
throw ex32782;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (2))){
var inst_32727 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32728 = cnt;
var inst_32729 = (0);
var state_32770__$1 = (function (){var statearr_32790 = state_32770;
(statearr_32790[(7)] = inst_32729);

(statearr_32790[(8)] = inst_32728);

(statearr_32790[(11)] = inst_32727);

return statearr_32790;
})();
var statearr_32804_34181 = state_32770__$1;
(statearr_32804_34181[(2)] = null);

(statearr_32804_34181[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (11))){
var inst_32734 = (state_32770[(2)]);
var inst_32735 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32770__$1 = (function (){var statearr_32810 = state_32770;
(statearr_32810[(12)] = inst_32734);

return statearr_32810;
})();
var statearr_32811_34185 = state_32770__$1;
(statearr_32811_34185[(2)] = inst_32735);

(statearr_32811_34185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (9))){
var inst_32729 = (state_32770[(7)]);
var _ = (function (){var statearr_32812 = state_32770;
(statearr_32812[(4)] = cljs.core.cons((12),(state_32770[(4)])));

return statearr_32812;
})();
var inst_32741 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32729) : chs__$1.call(null,inst_32729));
var inst_32742 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32729) : done.call(null,inst_32729));
var inst_32743 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32741,inst_32742);
var ___$1 = (function (){var statearr_32813 = state_32770;
(statearr_32813[(4)] = cljs.core.rest((state_32770[(4)])));

return statearr_32813;
})();
var state_32770__$1 = state_32770;
var statearr_32814_34187 = state_32770__$1;
(statearr_32814_34187[(2)] = inst_32743);

(statearr_32814_34187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (5))){
var inst_32753 = (state_32770[(2)]);
var state_32770__$1 = (function (){var statearr_32816 = state_32770;
(statearr_32816[(13)] = inst_32753);

return statearr_32816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32770__$1,(13),dchan);
} else {
if((state_val_32771 === (14))){
var inst_32758 = cljs.core.async.close_BANG_(out);
var state_32770__$1 = state_32770;
var statearr_32817_34188 = state_32770__$1;
(statearr_32817_34188[(2)] = inst_32758);

(statearr_32817_34188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (16))){
var inst_32766 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
var statearr_32820_34193 = state_32770__$1;
(statearr_32820_34193[(2)] = inst_32766);

(statearr_32820_34193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (10))){
var inst_32729 = (state_32770[(7)]);
var inst_32746 = (state_32770[(2)]);
var inst_32747 = (inst_32729 + (1));
var inst_32729__$1 = inst_32747;
var state_32770__$1 = (function (){var statearr_32821 = state_32770;
(statearr_32821[(7)] = inst_32729__$1);

(statearr_32821[(14)] = inst_32746);

return statearr_32821;
})();
var statearr_32822_34195 = state_32770__$1;
(statearr_32822_34195[(2)] = null);

(statearr_32822_34195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (8))){
var inst_32751 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
var statearr_32823_34202 = state_32770__$1;
(statearr_32823_34202[(2)] = inst_32751);

(statearr_32823_34202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30926__auto__ = null;
var cljs$core$async$state_machine__30926__auto____0 = (function (){
var statearr_32824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32824[(0)] = cljs$core$async$state_machine__30926__auto__);

(statearr_32824[(1)] = (1));

return statearr_32824;
});
var cljs$core$async$state_machine__30926__auto____1 = (function (state_32770){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_32770);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e32827){var ex__30929__auto__ = e32827;
var statearr_32828_34204 = state_32770;
(statearr_32828_34204[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_32770[(4)]))){
var statearr_32830_34205 = state_32770;
(statearr_32830_34205[(1)] = cljs.core.first((state_32770[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34206 = state_32770;
state_32770 = G__34206;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$state_machine__30926__auto__ = function(state_32770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30926__auto____1.call(this,state_32770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30926__auto____0;
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30926__auto____1;
return cljs$core$async$state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_32831 = f__31090__auto__();
(statearr_32831[(6)] = c__31089__auto___34164);

return statearr_32831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32834 = arguments.length;
switch (G__32834) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31089__auto___34213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_32867){
var state_val_32868 = (state_32867[(1)]);
if((state_val_32868 === (7))){
var inst_32846 = (state_32867[(7)]);
var inst_32845 = (state_32867[(8)]);
var inst_32845__$1 = (state_32867[(2)]);
var inst_32846__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32845__$1,(0),null);
var inst_32847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32845__$1,(1),null);
var inst_32848 = (inst_32846__$1 == null);
var state_32867__$1 = (function (){var statearr_32871 = state_32867;
(statearr_32871[(7)] = inst_32846__$1);

(statearr_32871[(8)] = inst_32845__$1);

(statearr_32871[(9)] = inst_32847);

return statearr_32871;
})();
if(cljs.core.truth_(inst_32848)){
var statearr_32872_34215 = state_32867__$1;
(statearr_32872_34215[(1)] = (8));

} else {
var statearr_32873_34216 = state_32867__$1;
(statearr_32873_34216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32868 === (1))){
var inst_32835 = cljs.core.vec(chs);
var inst_32836 = inst_32835;
var state_32867__$1 = (function (){var statearr_32876 = state_32867;
(statearr_32876[(10)] = inst_32836);

return statearr_32876;
})();
var statearr_32877_34217 = state_32867__$1;
(statearr_32877_34217[(2)] = null);

(statearr_32877_34217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32868 === (4))){
var inst_32836 = (state_32867[(10)]);
var state_32867__$1 = state_32867;
return cljs.core.async.ioc_alts_BANG_(state_32867__$1,(7),inst_32836);
} else {
if((state_val_32868 === (6))){
var inst_32863 = (state_32867[(2)]);
var state_32867__$1 = state_32867;
var statearr_32879_34219 = state_32867__$1;
(statearr_32879_34219[(2)] = inst_32863);

(statearr_32879_34219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32868 === (3))){
var inst_32865 = (state_32867[(2)]);
var state_32867__$1 = state_32867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32867__$1,inst_32865);
} else {
if((state_val_32868 === (2))){
var inst_32836 = (state_32867[(10)]);
var inst_32838 = cljs.core.count(inst_32836);
var inst_32839 = (inst_32838 > (0));
var state_32867__$1 = state_32867;
if(cljs.core.truth_(inst_32839)){
var statearr_32881_34229 = state_32867__$1;
(statearr_32881_34229[(1)] = (4));

} else {
var statearr_32882_34230 = state_32867__$1;
(statearr_32882_34230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32868 === (11))){
var inst_32836 = (state_32867[(10)]);
var inst_32855 = (state_32867[(2)]);
var tmp32880 = inst_32836;
var inst_32836__$1 = tmp32880;
var state_32867__$1 = (function (){var statearr_32883 = state_32867;
(statearr_32883[(10)] = inst_32836__$1);

(statearr_32883[(11)] = inst_32855);

return statearr_32883;
})();
var statearr_32884_34236 = state_32867__$1;
(statearr_32884_34236[(2)] = null);

(statearr_32884_34236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32868 === (9))){
var inst_32846 = (state_32867[(7)]);
var state_32867__$1 = state_32867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32867__$1,(11),out,inst_32846);
} else {
if((state_val_32868 === (5))){
var inst_32861 = cljs.core.async.close_BANG_(out);
var state_32867__$1 = state_32867;
var statearr_32885_34237 = state_32867__$1;
(statearr_32885_34237[(2)] = inst_32861);

(statearr_32885_34237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32868 === (10))){
var inst_32859 = (state_32867[(2)]);
var state_32867__$1 = state_32867;
var statearr_32886_34238 = state_32867__$1;
(statearr_32886_34238[(2)] = inst_32859);

(statearr_32886_34238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32868 === (8))){
var inst_32846 = (state_32867[(7)]);
var inst_32836 = (state_32867[(10)]);
var inst_32845 = (state_32867[(8)]);
var inst_32847 = (state_32867[(9)]);
var inst_32850 = (function (){var cs = inst_32836;
var vec__32841 = inst_32845;
var v = inst_32846;
var c = inst_32847;
return (function (p1__32832_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32832_SHARP_);
});
})();
var inst_32851 = cljs.core.filterv(inst_32850,inst_32836);
var inst_32836__$1 = inst_32851;
var state_32867__$1 = (function (){var statearr_32892 = state_32867;
(statearr_32892[(10)] = inst_32836__$1);

return statearr_32892;
})();
var statearr_32894_34247 = state_32867__$1;
(statearr_32894_34247[(2)] = null);

(statearr_32894_34247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30926__auto__ = null;
var cljs$core$async$state_machine__30926__auto____0 = (function (){
var statearr_32896 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32896[(0)] = cljs$core$async$state_machine__30926__auto__);

(statearr_32896[(1)] = (1));

return statearr_32896;
});
var cljs$core$async$state_machine__30926__auto____1 = (function (state_32867){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_32867);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e32899){var ex__30929__auto__ = e32899;
var statearr_32902_34256 = state_32867;
(statearr_32902_34256[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_32867[(4)]))){
var statearr_32904_34257 = state_32867;
(statearr_32904_34257[(1)] = cljs.core.first((state_32867[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34262 = state_32867;
state_32867 = G__34262;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$state_machine__30926__auto__ = function(state_32867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30926__auto____1.call(this,state_32867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30926__auto____0;
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30926__auto____1;
return cljs$core$async$state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_32908 = f__31090__auto__();
(statearr_32908[(6)] = c__31089__auto___34213);

return statearr_32908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32911 = arguments.length;
switch (G__32911) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31089__auto___34271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_32945){
var state_val_32946 = (state_32945[(1)]);
if((state_val_32946 === (7))){
var inst_32922 = (state_32945[(7)]);
var inst_32922__$1 = (state_32945[(2)]);
var inst_32923 = (inst_32922__$1 == null);
var inst_32924 = cljs.core.not(inst_32923);
var state_32945__$1 = (function (){var statearr_32954 = state_32945;
(statearr_32954[(7)] = inst_32922__$1);

return statearr_32954;
})();
if(inst_32924){
var statearr_32955_34276 = state_32945__$1;
(statearr_32955_34276[(1)] = (8));

} else {
var statearr_32960_34277 = state_32945__$1;
(statearr_32960_34277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (1))){
var inst_32915 = (0);
var state_32945__$1 = (function (){var statearr_32965 = state_32945;
(statearr_32965[(8)] = inst_32915);

return statearr_32965;
})();
var statearr_32966_34278 = state_32945__$1;
(statearr_32966_34278[(2)] = null);

(statearr_32966_34278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (4))){
var state_32945__$1 = state_32945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32945__$1,(7),ch);
} else {
if((state_val_32946 === (6))){
var inst_32938 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32967_34279 = state_32945__$1;
(statearr_32967_34279[(2)] = inst_32938);

(statearr_32967_34279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (3))){
var inst_32940 = (state_32945[(2)]);
var inst_32943 = cljs.core.async.close_BANG_(out);
var state_32945__$1 = (function (){var statearr_32968 = state_32945;
(statearr_32968[(9)] = inst_32940);

return statearr_32968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32945__$1,inst_32943);
} else {
if((state_val_32946 === (2))){
var inst_32915 = (state_32945[(8)]);
var inst_32917 = (inst_32915 < n);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32917)){
var statearr_32972_34280 = state_32945__$1;
(statearr_32972_34280[(1)] = (4));

} else {
var statearr_32973_34281 = state_32945__$1;
(statearr_32973_34281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (11))){
var inst_32915 = (state_32945[(8)]);
var inst_32927 = (state_32945[(2)]);
var inst_32931 = (inst_32915 + (1));
var inst_32915__$1 = inst_32931;
var state_32945__$1 = (function (){var statearr_32974 = state_32945;
(statearr_32974[(8)] = inst_32915__$1);

(statearr_32974[(10)] = inst_32927);

return statearr_32974;
})();
var statearr_32975_34282 = state_32945__$1;
(statearr_32975_34282[(2)] = null);

(statearr_32975_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (9))){
var state_32945__$1 = state_32945;
var statearr_32976_34284 = state_32945__$1;
(statearr_32976_34284[(2)] = null);

(statearr_32976_34284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (5))){
var state_32945__$1 = state_32945;
var statearr_32977_34285 = state_32945__$1;
(statearr_32977_34285[(2)] = null);

(statearr_32977_34285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (10))){
var inst_32935 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32978_34286 = state_32945__$1;
(statearr_32978_34286[(2)] = inst_32935);

(statearr_32978_34286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (8))){
var inst_32922 = (state_32945[(7)]);
var state_32945__$1 = state_32945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32945__$1,(11),out,inst_32922);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30926__auto__ = null;
var cljs$core$async$state_machine__30926__auto____0 = (function (){
var statearr_32979 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32979[(0)] = cljs$core$async$state_machine__30926__auto__);

(statearr_32979[(1)] = (1));

return statearr_32979;
});
var cljs$core$async$state_machine__30926__auto____1 = (function (state_32945){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_32945);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e32980){var ex__30929__auto__ = e32980;
var statearr_32981_34313 = state_32945;
(statearr_32981_34313[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_32945[(4)]))){
var statearr_32983_34314 = state_32945;
(statearr_32983_34314[(1)] = cljs.core.first((state_32945[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34335 = state_32945;
state_32945 = G__34335;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$state_machine__30926__auto__ = function(state_32945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30926__auto____1.call(this,state_32945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30926__auto____0;
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30926__auto____1;
return cljs$core$async$state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_32984 = f__31090__auto__();
(statearr_32984[(6)] = c__31089__auto___34271);

return statearr_32984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32986 = (function (f,ch,meta32987){
this.f = f;
this.ch = ch;
this.meta32987 = meta32987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32988,meta32987__$1){
var self__ = this;
var _32988__$1 = this;
return (new cljs.core.async.t_cljs$core$async32986(self__.f,self__.ch,meta32987__$1));
}));

(cljs.core.async.t_cljs$core$async32986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32988){
var self__ = this;
var _32988__$1 = this;
return self__.meta32987;
}));

(cljs.core.async.t_cljs$core$async32986.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32986.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32986.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32986.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32986.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33001 = (function (f,ch,meta32987,_,fn1,meta33002){
this.f = f;
this.ch = ch;
this.meta32987 = meta32987;
this._ = _;
this.fn1 = fn1;
this.meta33002 = meta33002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33003,meta33002__$1){
var self__ = this;
var _33003__$1 = this;
return (new cljs.core.async.t_cljs$core$async33001(self__.f,self__.ch,self__.meta32987,self__._,self__.fn1,meta33002__$1));
}));

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33003){
var self__ = this;
var _33003__$1 = this;
return self__.meta33002;
}));

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32985_SHARP_){
var G__33004 = (((p1__32985_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32985_SHARP_) : self__.f.call(null,p1__32985_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33004) : f1.call(null,G__33004));
});
}));

(cljs.core.async.t_cljs$core$async33001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32987","meta32987",1079083512,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32986","cljs.core.async/t_cljs$core$async32986",436298837,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33002","meta33002",-2649914,null)], null);
}));

(cljs.core.async.t_cljs$core$async33001.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33001");

(cljs.core.async.t_cljs$core$async33001.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33001");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33001.
 */
cljs.core.async.__GT_t_cljs$core$async33001 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33001(f__$1,ch__$1,meta32987__$1,___$2,fn1__$1,meta33002){
return (new cljs.core.async.t_cljs$core$async33001(f__$1,ch__$1,meta32987__$1,___$2,fn1__$1,meta33002));
});

}

return (new cljs.core.async.t_cljs$core$async33001(self__.f,self__.ch,self__.meta32987,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33009 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33009) : self__.f.call(null,G__33009));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32986.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32986.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32987","meta32987",1079083512,null)], null);
}));

(cljs.core.async.t_cljs$core$async32986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32986");

(cljs.core.async.t_cljs$core$async32986.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32986.
 */
cljs.core.async.__GT_t_cljs$core$async32986 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32986(f__$1,ch__$1,meta32987){
return (new cljs.core.async.t_cljs$core$async32986(f__$1,ch__$1,meta32987));
});

}

return (new cljs.core.async.t_cljs$core$async32986(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33013 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33013 = (function (f,ch,meta33014){
this.f = f;
this.ch = ch;
this.meta33014 = meta33014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33015,meta33014__$1){
var self__ = this;
var _33015__$1 = this;
return (new cljs.core.async.t_cljs$core$async33013(self__.f,self__.ch,meta33014__$1));
}));

(cljs.core.async.t_cljs$core$async33013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33015){
var self__ = this;
var _33015__$1 = this;
return self__.meta33014;
}));

(cljs.core.async.t_cljs$core$async33013.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33013.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33013.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33014","meta33014",-1074791026,null)], null);
}));

(cljs.core.async.t_cljs$core$async33013.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33013");

(cljs.core.async.t_cljs$core$async33013.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33013");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33013.
 */
cljs.core.async.__GT_t_cljs$core$async33013 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33013(f__$1,ch__$1,meta33014){
return (new cljs.core.async.t_cljs$core$async33013(f__$1,ch__$1,meta33014));
});

}

return (new cljs.core.async.t_cljs$core$async33013(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33024 = (function (p,ch,meta33025){
this.p = p;
this.ch = ch;
this.meta33025 = meta33025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33026,meta33025__$1){
var self__ = this;
var _33026__$1 = this;
return (new cljs.core.async.t_cljs$core$async33024(self__.p,self__.ch,meta33025__$1));
}));

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33026){
var self__ = this;
var _33026__$1 = this;
return self__.meta33025;
}));

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33025","meta33025",-92926705,null)], null);
}));

(cljs.core.async.t_cljs$core$async33024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33024");

(cljs.core.async.t_cljs$core$async33024.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33024.
 */
cljs.core.async.__GT_t_cljs$core$async33024 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33024(p__$1,ch__$1,meta33025){
return (new cljs.core.async.t_cljs$core$async33024(p__$1,ch__$1,meta33025));
});

}

return (new cljs.core.async.t_cljs$core$async33024(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33036 = arguments.length;
switch (G__33036) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31089__auto___34431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_33058){
var state_val_33059 = (state_33058[(1)]);
if((state_val_33059 === (7))){
var inst_33054 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
var statearr_33060_34439 = state_33058__$1;
(statearr_33060_34439[(2)] = inst_33054);

(statearr_33060_34439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (1))){
var state_33058__$1 = state_33058;
var statearr_33061_34445 = state_33058__$1;
(statearr_33061_34445[(2)] = null);

(statearr_33061_34445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (4))){
var inst_33040 = (state_33058[(7)]);
var inst_33040__$1 = (state_33058[(2)]);
var inst_33041 = (inst_33040__$1 == null);
var state_33058__$1 = (function (){var statearr_33062 = state_33058;
(statearr_33062[(7)] = inst_33040__$1);

return statearr_33062;
})();
if(cljs.core.truth_(inst_33041)){
var statearr_33063_34446 = state_33058__$1;
(statearr_33063_34446[(1)] = (5));

} else {
var statearr_33064_34447 = state_33058__$1;
(statearr_33064_34447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (6))){
var inst_33040 = (state_33058[(7)]);
var inst_33045 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33040) : p.call(null,inst_33040));
var state_33058__$1 = state_33058;
if(cljs.core.truth_(inst_33045)){
var statearr_33065_34448 = state_33058__$1;
(statearr_33065_34448[(1)] = (8));

} else {
var statearr_33066_34449 = state_33058__$1;
(statearr_33066_34449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (3))){
var inst_33056 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33058__$1,inst_33056);
} else {
if((state_val_33059 === (2))){
var state_33058__$1 = state_33058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33058__$1,(4),ch);
} else {
if((state_val_33059 === (11))){
var inst_33048 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
var statearr_33073_34457 = state_33058__$1;
(statearr_33073_34457[(2)] = inst_33048);

(statearr_33073_34457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (9))){
var state_33058__$1 = state_33058;
var statearr_33074_34458 = state_33058__$1;
(statearr_33074_34458[(2)] = null);

(statearr_33074_34458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (5))){
var inst_33043 = cljs.core.async.close_BANG_(out);
var state_33058__$1 = state_33058;
var statearr_33075_34459 = state_33058__$1;
(statearr_33075_34459[(2)] = inst_33043);

(statearr_33075_34459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (10))){
var inst_33051 = (state_33058[(2)]);
var state_33058__$1 = (function (){var statearr_33076 = state_33058;
(statearr_33076[(8)] = inst_33051);

return statearr_33076;
})();
var statearr_33077_34464 = state_33058__$1;
(statearr_33077_34464[(2)] = null);

(statearr_33077_34464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (8))){
var inst_33040 = (state_33058[(7)]);
var state_33058__$1 = state_33058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33058__$1,(11),out,inst_33040);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30926__auto__ = null;
var cljs$core$async$state_machine__30926__auto____0 = (function (){
var statearr_33081 = [null,null,null,null,null,null,null,null,null];
(statearr_33081[(0)] = cljs$core$async$state_machine__30926__auto__);

(statearr_33081[(1)] = (1));

return statearr_33081;
});
var cljs$core$async$state_machine__30926__auto____1 = (function (state_33058){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_33058);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e33082){var ex__30929__auto__ = e33082;
var statearr_33083_34479 = state_33058;
(statearr_33083_34479[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_33058[(4)]))){
var statearr_33084_34480 = state_33058;
(statearr_33084_34480[(1)] = cljs.core.first((state_33058[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34481 = state_33058;
state_33058 = G__34481;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$state_machine__30926__auto__ = function(state_33058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30926__auto____1.call(this,state_33058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30926__auto____0;
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30926__auto____1;
return cljs$core$async$state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_33085 = f__31090__auto__();
(statearr_33085[(6)] = c__31089__auto___34431);

return statearr_33085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33087 = arguments.length;
switch (G__33087) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31089__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_33149){
var state_val_33150 = (state_33149[(1)]);
if((state_val_33150 === (7))){
var inst_33145 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33151_34484 = state_33149__$1;
(statearr_33151_34484[(2)] = inst_33145);

(statearr_33151_34484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (20))){
var inst_33115 = (state_33149[(7)]);
var inst_33126 = (state_33149[(2)]);
var inst_33127 = cljs.core.next(inst_33115);
var inst_33101 = inst_33127;
var inst_33102 = null;
var inst_33103 = (0);
var inst_33104 = (0);
var state_33149__$1 = (function (){var statearr_33152 = state_33149;
(statearr_33152[(8)] = inst_33101);

(statearr_33152[(9)] = inst_33104);

(statearr_33152[(10)] = inst_33126);

(statearr_33152[(11)] = inst_33103);

(statearr_33152[(12)] = inst_33102);

return statearr_33152;
})();
var statearr_33153_34486 = state_33149__$1;
(statearr_33153_34486[(2)] = null);

(statearr_33153_34486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (1))){
var state_33149__$1 = state_33149;
var statearr_33154_34487 = state_33149__$1;
(statearr_33154_34487[(2)] = null);

(statearr_33154_34487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (4))){
var inst_33090 = (state_33149[(13)]);
var inst_33090__$1 = (state_33149[(2)]);
var inst_33091 = (inst_33090__$1 == null);
var state_33149__$1 = (function (){var statearr_33155 = state_33149;
(statearr_33155[(13)] = inst_33090__$1);

return statearr_33155;
})();
if(cljs.core.truth_(inst_33091)){
var statearr_33156_34488 = state_33149__$1;
(statearr_33156_34488[(1)] = (5));

} else {
var statearr_33157_34489 = state_33149__$1;
(statearr_33157_34489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (15))){
var state_33149__$1 = state_33149;
var statearr_33161_34490 = state_33149__$1;
(statearr_33161_34490[(2)] = null);

(statearr_33161_34490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (21))){
var state_33149__$1 = state_33149;
var statearr_33162_34491 = state_33149__$1;
(statearr_33162_34491[(2)] = null);

(statearr_33162_34491[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (13))){
var inst_33101 = (state_33149[(8)]);
var inst_33104 = (state_33149[(9)]);
var inst_33103 = (state_33149[(11)]);
var inst_33102 = (state_33149[(12)]);
var inst_33111 = (state_33149[(2)]);
var inst_33112 = (inst_33104 + (1));
var tmp33158 = inst_33101;
var tmp33159 = inst_33103;
var tmp33160 = inst_33102;
var inst_33101__$1 = tmp33158;
var inst_33102__$1 = tmp33160;
var inst_33103__$1 = tmp33159;
var inst_33104__$1 = inst_33112;
var state_33149__$1 = (function (){var statearr_33163 = state_33149;
(statearr_33163[(8)] = inst_33101__$1);

(statearr_33163[(9)] = inst_33104__$1);

(statearr_33163[(14)] = inst_33111);

(statearr_33163[(11)] = inst_33103__$1);

(statearr_33163[(12)] = inst_33102__$1);

return statearr_33163;
})();
var statearr_33164_34492 = state_33149__$1;
(statearr_33164_34492[(2)] = null);

(statearr_33164_34492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (22))){
var state_33149__$1 = state_33149;
var statearr_33165_34493 = state_33149__$1;
(statearr_33165_34493[(2)] = null);

(statearr_33165_34493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (6))){
var inst_33090 = (state_33149[(13)]);
var inst_33099 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33090) : f.call(null,inst_33090));
var inst_33100 = cljs.core.seq(inst_33099);
var inst_33101 = inst_33100;
var inst_33102 = null;
var inst_33103 = (0);
var inst_33104 = (0);
var state_33149__$1 = (function (){var statearr_33166 = state_33149;
(statearr_33166[(8)] = inst_33101);

(statearr_33166[(9)] = inst_33104);

(statearr_33166[(11)] = inst_33103);

(statearr_33166[(12)] = inst_33102);

return statearr_33166;
})();
var statearr_33167_34494 = state_33149__$1;
(statearr_33167_34494[(2)] = null);

(statearr_33167_34494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (17))){
var inst_33115 = (state_33149[(7)]);
var inst_33119 = cljs.core.chunk_first(inst_33115);
var inst_33120 = cljs.core.chunk_rest(inst_33115);
var inst_33121 = cljs.core.count(inst_33119);
var inst_33101 = inst_33120;
var inst_33102 = inst_33119;
var inst_33103 = inst_33121;
var inst_33104 = (0);
var state_33149__$1 = (function (){var statearr_33168 = state_33149;
(statearr_33168[(8)] = inst_33101);

(statearr_33168[(9)] = inst_33104);

(statearr_33168[(11)] = inst_33103);

(statearr_33168[(12)] = inst_33102);

return statearr_33168;
})();
var statearr_33169_34495 = state_33149__$1;
(statearr_33169_34495[(2)] = null);

(statearr_33169_34495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (3))){
var inst_33147 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33149__$1,inst_33147);
} else {
if((state_val_33150 === (12))){
var inst_33135 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33170_34496 = state_33149__$1;
(statearr_33170_34496[(2)] = inst_33135);

(statearr_33170_34496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (2))){
var state_33149__$1 = state_33149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33149__$1,(4),in$);
} else {
if((state_val_33150 === (23))){
var inst_33143 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33171_34501 = state_33149__$1;
(statearr_33171_34501[(2)] = inst_33143);

(statearr_33171_34501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (19))){
var inst_33130 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33172_34502 = state_33149__$1;
(statearr_33172_34502[(2)] = inst_33130);

(statearr_33172_34502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (11))){
var inst_33101 = (state_33149[(8)]);
var inst_33115 = (state_33149[(7)]);
var inst_33115__$1 = cljs.core.seq(inst_33101);
var state_33149__$1 = (function (){var statearr_33173 = state_33149;
(statearr_33173[(7)] = inst_33115__$1);

return statearr_33173;
})();
if(inst_33115__$1){
var statearr_33174_34507 = state_33149__$1;
(statearr_33174_34507[(1)] = (14));

} else {
var statearr_33175_34517 = state_33149__$1;
(statearr_33175_34517[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (9))){
var inst_33137 = (state_33149[(2)]);
var inst_33138 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33149__$1 = (function (){var statearr_33176 = state_33149;
(statearr_33176[(15)] = inst_33137);

return statearr_33176;
})();
if(cljs.core.truth_(inst_33138)){
var statearr_33177_34525 = state_33149__$1;
(statearr_33177_34525[(1)] = (21));

} else {
var statearr_33178_34527 = state_33149__$1;
(statearr_33178_34527[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (5))){
var inst_33093 = cljs.core.async.close_BANG_(out);
var state_33149__$1 = state_33149;
var statearr_33179_34532 = state_33149__$1;
(statearr_33179_34532[(2)] = inst_33093);

(statearr_33179_34532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (14))){
var inst_33115 = (state_33149[(7)]);
var inst_33117 = cljs.core.chunked_seq_QMARK_(inst_33115);
var state_33149__$1 = state_33149;
if(inst_33117){
var statearr_33180_34540 = state_33149__$1;
(statearr_33180_34540[(1)] = (17));

} else {
var statearr_33181_34541 = state_33149__$1;
(statearr_33181_34541[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (16))){
var inst_33133 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33182_34551 = state_33149__$1;
(statearr_33182_34551[(2)] = inst_33133);

(statearr_33182_34551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (10))){
var inst_33104 = (state_33149[(9)]);
var inst_33102 = (state_33149[(12)]);
var inst_33109 = cljs.core._nth(inst_33102,inst_33104);
var state_33149__$1 = state_33149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33149__$1,(13),out,inst_33109);
} else {
if((state_val_33150 === (18))){
var inst_33115 = (state_33149[(7)]);
var inst_33124 = cljs.core.first(inst_33115);
var state_33149__$1 = state_33149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33149__$1,(20),out,inst_33124);
} else {
if((state_val_33150 === (8))){
var inst_33104 = (state_33149[(9)]);
var inst_33103 = (state_33149[(11)]);
var inst_33106 = (inst_33104 < inst_33103);
var inst_33107 = inst_33106;
var state_33149__$1 = state_33149;
if(cljs.core.truth_(inst_33107)){
var statearr_33183_34565 = state_33149__$1;
(statearr_33183_34565[(1)] = (10));

} else {
var statearr_33184_34566 = state_33149__$1;
(statearr_33184_34566[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30926__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30926__auto____0 = (function (){
var statearr_33185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33185[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30926__auto__);

(statearr_33185[(1)] = (1));

return statearr_33185;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30926__auto____1 = (function (state_33149){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_33149);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e33186){var ex__30929__auto__ = e33186;
var statearr_33187_34569 = state_33149;
(statearr_33187_34569[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_33149[(4)]))){
var statearr_33188_34570 = state_33149;
(statearr_33188_34570[(1)] = cljs.core.first((state_33149[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34571 = state_33149;
state_33149 = G__34571;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30926__auto__ = function(state_33149){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30926__auto____1.call(this,state_33149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30926__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30926__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_33189 = f__31090__auto__();
(statearr_33189[(6)] = c__31089__auto__);

return statearr_33189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));

return c__31089__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33191 = arguments.length;
switch (G__33191) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33193 = arguments.length;
switch (G__33193) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33195 = arguments.length;
switch (G__33195) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31089__auto___34576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_33222){
var state_val_33223 = (state_33222[(1)]);
if((state_val_33223 === (7))){
var inst_33217 = (state_33222[(2)]);
var state_33222__$1 = state_33222;
var statearr_33224_34577 = state_33222__$1;
(statearr_33224_34577[(2)] = inst_33217);

(statearr_33224_34577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (1))){
var inst_33199 = null;
var state_33222__$1 = (function (){var statearr_33226 = state_33222;
(statearr_33226[(7)] = inst_33199);

return statearr_33226;
})();
var statearr_33227_34578 = state_33222__$1;
(statearr_33227_34578[(2)] = null);

(statearr_33227_34578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (4))){
var inst_33202 = (state_33222[(8)]);
var inst_33202__$1 = (state_33222[(2)]);
var inst_33203 = (inst_33202__$1 == null);
var inst_33204 = cljs.core.not(inst_33203);
var state_33222__$1 = (function (){var statearr_33228 = state_33222;
(statearr_33228[(8)] = inst_33202__$1);

return statearr_33228;
})();
if(inst_33204){
var statearr_33229_34580 = state_33222__$1;
(statearr_33229_34580[(1)] = (5));

} else {
var statearr_33230_34581 = state_33222__$1;
(statearr_33230_34581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (6))){
var state_33222__$1 = state_33222;
var statearr_33231_34582 = state_33222__$1;
(statearr_33231_34582[(2)] = null);

(statearr_33231_34582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (3))){
var inst_33219 = (state_33222[(2)]);
var inst_33220 = cljs.core.async.close_BANG_(out);
var state_33222__$1 = (function (){var statearr_33232 = state_33222;
(statearr_33232[(9)] = inst_33219);

return statearr_33232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33222__$1,inst_33220);
} else {
if((state_val_33223 === (2))){
var state_33222__$1 = state_33222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33222__$1,(4),ch);
} else {
if((state_val_33223 === (11))){
var inst_33202 = (state_33222[(8)]);
var inst_33211 = (state_33222[(2)]);
var inst_33199 = inst_33202;
var state_33222__$1 = (function (){var statearr_33233 = state_33222;
(statearr_33233[(10)] = inst_33211);

(statearr_33233[(7)] = inst_33199);

return statearr_33233;
})();
var statearr_33234_34583 = state_33222__$1;
(statearr_33234_34583[(2)] = null);

(statearr_33234_34583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (9))){
var inst_33202 = (state_33222[(8)]);
var state_33222__$1 = state_33222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33222__$1,(11),out,inst_33202);
} else {
if((state_val_33223 === (5))){
var inst_33202 = (state_33222[(8)]);
var inst_33199 = (state_33222[(7)]);
var inst_33206 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33202,inst_33199);
var state_33222__$1 = state_33222;
if(inst_33206){
var statearr_33236_34584 = state_33222__$1;
(statearr_33236_34584[(1)] = (8));

} else {
var statearr_33237_34585 = state_33222__$1;
(statearr_33237_34585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (10))){
var inst_33214 = (state_33222[(2)]);
var state_33222__$1 = state_33222;
var statearr_33238_34586 = state_33222__$1;
(statearr_33238_34586[(2)] = inst_33214);

(statearr_33238_34586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (8))){
var inst_33199 = (state_33222[(7)]);
var tmp33235 = inst_33199;
var inst_33199__$1 = tmp33235;
var state_33222__$1 = (function (){var statearr_33239 = state_33222;
(statearr_33239[(7)] = inst_33199__$1);

return statearr_33239;
})();
var statearr_33240_34587 = state_33222__$1;
(statearr_33240_34587[(2)] = null);

(statearr_33240_34587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30926__auto__ = null;
var cljs$core$async$state_machine__30926__auto____0 = (function (){
var statearr_33241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33241[(0)] = cljs$core$async$state_machine__30926__auto__);

(statearr_33241[(1)] = (1));

return statearr_33241;
});
var cljs$core$async$state_machine__30926__auto____1 = (function (state_33222){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_33222);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e33242){var ex__30929__auto__ = e33242;
var statearr_33244_34589 = state_33222;
(statearr_33244_34589[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_33222[(4)]))){
var statearr_33245_34591 = state_33222;
(statearr_33245_34591[(1)] = cljs.core.first((state_33222[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34592 = state_33222;
state_33222 = G__34592;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$state_machine__30926__auto__ = function(state_33222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30926__auto____1.call(this,state_33222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30926__auto____0;
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30926__auto____1;
return cljs$core$async$state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_33246 = f__31090__auto__();
(statearr_33246[(6)] = c__31089__auto___34576);

return statearr_33246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33250 = arguments.length;
switch (G__33250) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31089__auto___34594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_33290){
var state_val_33291 = (state_33290[(1)]);
if((state_val_33291 === (7))){
var inst_33285 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33292_34596 = state_33290__$1;
(statearr_33292_34596[(2)] = inst_33285);

(statearr_33292_34596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (1))){
var inst_33251 = (new Array(n));
var inst_33252 = inst_33251;
var inst_33253 = (0);
var state_33290__$1 = (function (){var statearr_33293 = state_33290;
(statearr_33293[(7)] = inst_33253);

(statearr_33293[(8)] = inst_33252);

return statearr_33293;
})();
var statearr_33295_34597 = state_33290__$1;
(statearr_33295_34597[(2)] = null);

(statearr_33295_34597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (4))){
var inst_33256 = (state_33290[(9)]);
var inst_33256__$1 = (state_33290[(2)]);
var inst_33257 = (inst_33256__$1 == null);
var inst_33258 = cljs.core.not(inst_33257);
var state_33290__$1 = (function (){var statearr_33296 = state_33290;
(statearr_33296[(9)] = inst_33256__$1);

return statearr_33296;
})();
if(inst_33258){
var statearr_33297_34598 = state_33290__$1;
(statearr_33297_34598[(1)] = (5));

} else {
var statearr_33298_34599 = state_33290__$1;
(statearr_33298_34599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (15))){
var inst_33279 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33300_34600 = state_33290__$1;
(statearr_33300_34600[(2)] = inst_33279);

(statearr_33300_34600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (13))){
var state_33290__$1 = state_33290;
var statearr_33301_34601 = state_33290__$1;
(statearr_33301_34601[(2)] = null);

(statearr_33301_34601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (6))){
var inst_33253 = (state_33290[(7)]);
var inst_33275 = (inst_33253 > (0));
var state_33290__$1 = state_33290;
if(cljs.core.truth_(inst_33275)){
var statearr_33303_34602 = state_33290__$1;
(statearr_33303_34602[(1)] = (12));

} else {
var statearr_33304_34603 = state_33290__$1;
(statearr_33304_34603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (3))){
var inst_33287 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33290__$1,inst_33287);
} else {
if((state_val_33291 === (12))){
var inst_33252 = (state_33290[(8)]);
var inst_33277 = cljs.core.vec(inst_33252);
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33290__$1,(15),out,inst_33277);
} else {
if((state_val_33291 === (2))){
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33290__$1,(4),ch);
} else {
if((state_val_33291 === (11))){
var inst_33269 = (state_33290[(2)]);
var inst_33270 = (new Array(n));
var inst_33252 = inst_33270;
var inst_33253 = (0);
var state_33290__$1 = (function (){var statearr_33305 = state_33290;
(statearr_33305[(10)] = inst_33269);

(statearr_33305[(7)] = inst_33253);

(statearr_33305[(8)] = inst_33252);

return statearr_33305;
})();
var statearr_33306_34604 = state_33290__$1;
(statearr_33306_34604[(2)] = null);

(statearr_33306_34604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (9))){
var inst_33252 = (state_33290[(8)]);
var inst_33267 = cljs.core.vec(inst_33252);
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33290__$1,(11),out,inst_33267);
} else {
if((state_val_33291 === (5))){
var inst_33256 = (state_33290[(9)]);
var inst_33261 = (state_33290[(11)]);
var inst_33253 = (state_33290[(7)]);
var inst_33252 = (state_33290[(8)]);
var inst_33260 = (inst_33252[inst_33253] = inst_33256);
var inst_33261__$1 = (inst_33253 + (1));
var inst_33263 = (inst_33261__$1 < n);
var state_33290__$1 = (function (){var statearr_33310 = state_33290;
(statearr_33310[(12)] = inst_33260);

(statearr_33310[(11)] = inst_33261__$1);

return statearr_33310;
})();
if(cljs.core.truth_(inst_33263)){
var statearr_33311_34605 = state_33290__$1;
(statearr_33311_34605[(1)] = (8));

} else {
var statearr_33312_34606 = state_33290__$1;
(statearr_33312_34606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (14))){
var inst_33282 = (state_33290[(2)]);
var inst_33283 = cljs.core.async.close_BANG_(out);
var state_33290__$1 = (function (){var statearr_33314 = state_33290;
(statearr_33314[(13)] = inst_33282);

return statearr_33314;
})();
var statearr_33315_34609 = state_33290__$1;
(statearr_33315_34609[(2)] = inst_33283);

(statearr_33315_34609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (10))){
var inst_33273 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33316_34610 = state_33290__$1;
(statearr_33316_34610[(2)] = inst_33273);

(statearr_33316_34610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (8))){
var inst_33261 = (state_33290[(11)]);
var inst_33252 = (state_33290[(8)]);
var tmp33313 = inst_33252;
var inst_33252__$1 = tmp33313;
var inst_33253 = inst_33261;
var state_33290__$1 = (function (){var statearr_33317 = state_33290;
(statearr_33317[(7)] = inst_33253);

(statearr_33317[(8)] = inst_33252__$1);

return statearr_33317;
})();
var statearr_33318_34611 = state_33290__$1;
(statearr_33318_34611[(2)] = null);

(statearr_33318_34611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30926__auto__ = null;
var cljs$core$async$state_machine__30926__auto____0 = (function (){
var statearr_33320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33320[(0)] = cljs$core$async$state_machine__30926__auto__);

(statearr_33320[(1)] = (1));

return statearr_33320;
});
var cljs$core$async$state_machine__30926__auto____1 = (function (state_33290){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_33290);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e33321){var ex__30929__auto__ = e33321;
var statearr_33322_34612 = state_33290;
(statearr_33322_34612[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_33290[(4)]))){
var statearr_33323_34613 = state_33290;
(statearr_33323_34613[(1)] = cljs.core.first((state_33290[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34614 = state_33290;
state_33290 = G__34614;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$state_machine__30926__auto__ = function(state_33290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30926__auto____1.call(this,state_33290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30926__auto____0;
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30926__auto____1;
return cljs$core$async$state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_33325 = f__31090__auto__();
(statearr_33325[(6)] = c__31089__auto___34594);

return statearr_33325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33327 = arguments.length;
switch (G__33327) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31089__auto___34616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31090__auto__ = (function (){var switch__30925__auto__ = (function (state_33370){
var state_val_33371 = (state_33370[(1)]);
if((state_val_33371 === (7))){
var inst_33366 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33373_34617 = state_33370__$1;
(statearr_33373_34617[(2)] = inst_33366);

(statearr_33373_34617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (1))){
var inst_33328 = [];
var inst_33329 = inst_33328;
var inst_33330 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33370__$1 = (function (){var statearr_33376 = state_33370;
(statearr_33376[(7)] = inst_33330);

(statearr_33376[(8)] = inst_33329);

return statearr_33376;
})();
var statearr_33377_34618 = state_33370__$1;
(statearr_33377_34618[(2)] = null);

(statearr_33377_34618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (4))){
var inst_33333 = (state_33370[(9)]);
var inst_33333__$1 = (state_33370[(2)]);
var inst_33334 = (inst_33333__$1 == null);
var inst_33335 = cljs.core.not(inst_33334);
var state_33370__$1 = (function (){var statearr_33378 = state_33370;
(statearr_33378[(9)] = inst_33333__$1);

return statearr_33378;
})();
if(inst_33335){
var statearr_33379_34619 = state_33370__$1;
(statearr_33379_34619[(1)] = (5));

} else {
var statearr_33380_34620 = state_33370__$1;
(statearr_33380_34620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (15))){
var inst_33360 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33381_34621 = state_33370__$1;
(statearr_33381_34621[(2)] = inst_33360);

(statearr_33381_34621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (13))){
var state_33370__$1 = state_33370;
var statearr_33382_34622 = state_33370__$1;
(statearr_33382_34622[(2)] = null);

(statearr_33382_34622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (6))){
var inst_33329 = (state_33370[(8)]);
var inst_33355 = inst_33329.length;
var inst_33356 = (inst_33355 > (0));
var state_33370__$1 = state_33370;
if(cljs.core.truth_(inst_33356)){
var statearr_33387_34623 = state_33370__$1;
(statearr_33387_34623[(1)] = (12));

} else {
var statearr_33388_34624 = state_33370__$1;
(statearr_33388_34624[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (3))){
var inst_33368 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33370__$1,inst_33368);
} else {
if((state_val_33371 === (12))){
var inst_33329 = (state_33370[(8)]);
var inst_33358 = cljs.core.vec(inst_33329);
var state_33370__$1 = state_33370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33370__$1,(15),out,inst_33358);
} else {
if((state_val_33371 === (2))){
var state_33370__$1 = state_33370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33370__$1,(4),ch);
} else {
if((state_val_33371 === (11))){
var inst_33338 = (state_33370[(10)]);
var inst_33333 = (state_33370[(9)]);
var inst_33348 = (state_33370[(2)]);
var inst_33349 = [];
var inst_33350 = inst_33349.push(inst_33333);
var inst_33329 = inst_33349;
var inst_33330 = inst_33338;
var state_33370__$1 = (function (){var statearr_33406 = state_33370;
(statearr_33406[(11)] = inst_33350);

(statearr_33406[(7)] = inst_33330);

(statearr_33406[(8)] = inst_33329);

(statearr_33406[(12)] = inst_33348);

return statearr_33406;
})();
var statearr_33411_34625 = state_33370__$1;
(statearr_33411_34625[(2)] = null);

(statearr_33411_34625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (9))){
var inst_33329 = (state_33370[(8)]);
var inst_33346 = cljs.core.vec(inst_33329);
var state_33370__$1 = state_33370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33370__$1,(11),out,inst_33346);
} else {
if((state_val_33371 === (5))){
var inst_33330 = (state_33370[(7)]);
var inst_33338 = (state_33370[(10)]);
var inst_33333 = (state_33370[(9)]);
var inst_33338__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33333) : f.call(null,inst_33333));
var inst_33339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33338__$1,inst_33330);
var inst_33340 = cljs.core.keyword_identical_QMARK_(inst_33330,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33341 = ((inst_33339) || (inst_33340));
var state_33370__$1 = (function (){var statearr_33422 = state_33370;
(statearr_33422[(10)] = inst_33338__$1);

return statearr_33422;
})();
if(cljs.core.truth_(inst_33341)){
var statearr_33423_34630 = state_33370__$1;
(statearr_33423_34630[(1)] = (8));

} else {
var statearr_33425_34631 = state_33370__$1;
(statearr_33425_34631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (14))){
var inst_33363 = (state_33370[(2)]);
var inst_33364 = cljs.core.async.close_BANG_(out);
var state_33370__$1 = (function (){var statearr_33432 = state_33370;
(statearr_33432[(13)] = inst_33363);

return statearr_33432;
})();
var statearr_33434_34632 = state_33370__$1;
(statearr_33434_34632[(2)] = inst_33364);

(statearr_33434_34632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (10))){
var inst_33353 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33439_34636 = state_33370__$1;
(statearr_33439_34636[(2)] = inst_33353);

(statearr_33439_34636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (8))){
var inst_33338 = (state_33370[(10)]);
var inst_33329 = (state_33370[(8)]);
var inst_33333 = (state_33370[(9)]);
var inst_33343 = inst_33329.push(inst_33333);
var tmp33427 = inst_33329;
var inst_33329__$1 = tmp33427;
var inst_33330 = inst_33338;
var state_33370__$1 = (function (){var statearr_33440 = state_33370;
(statearr_33440[(7)] = inst_33330);

(statearr_33440[(8)] = inst_33329__$1);

(statearr_33440[(14)] = inst_33343);

return statearr_33440;
})();
var statearr_33441_34637 = state_33370__$1;
(statearr_33441_34637[(2)] = null);

(statearr_33441_34637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30926__auto__ = null;
var cljs$core$async$state_machine__30926__auto____0 = (function (){
var statearr_33442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33442[(0)] = cljs$core$async$state_machine__30926__auto__);

(statearr_33442[(1)] = (1));

return statearr_33442;
});
var cljs$core$async$state_machine__30926__auto____1 = (function (state_33370){
while(true){
var ret_value__30927__auto__ = (function (){try{while(true){
var result__30928__auto__ = switch__30925__auto__(state_33370);
if(cljs.core.keyword_identical_QMARK_(result__30928__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30928__auto__;
}
break;
}
}catch (e33443){var ex__30929__auto__ = e33443;
var statearr_33444_34652 = state_33370;
(statearr_33444_34652[(2)] = ex__30929__auto__);


if(cljs.core.seq((state_33370[(4)]))){
var statearr_33446_34653 = state_33370;
(statearr_33446_34653[(1)] = cljs.core.first((state_33370[(4)])));

} else {
throw ex__30929__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34654 = state_33370;
state_33370 = G__34654;
continue;
} else {
return ret_value__30927__auto__;
}
break;
}
});
cljs$core$async$state_machine__30926__auto__ = function(state_33370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30926__auto____1.call(this,state_33370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30926__auto____0;
cljs$core$async$state_machine__30926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30926__auto____1;
return cljs$core$async$state_machine__30926__auto__;
})()
})();
var state__31091__auto__ = (function (){var statearr_33447 = f__31090__auto__();
(statearr_33447[(6)] = c__31089__auto___34616);

return statearr_33447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31091__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

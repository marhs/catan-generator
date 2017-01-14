// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27160 = [];
var len__25852__auto___27166 = arguments.length;
var i__25853__auto___27167 = (0);
while(true){
if((i__25853__auto___27167 < len__25852__auto___27166)){
args27160.push((arguments[i__25853__auto___27167]));

var G__27168 = (i__25853__auto___27167 + (1));
i__25853__auto___27167 = G__27168;
continue;
} else {
}
break;
}

var G__27162 = args27160.length;
switch (G__27162) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27160.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27163 = (function (f,blockable,meta27164){
this.f = f;
this.blockable = blockable;
this.meta27164 = meta27164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27165,meta27164__$1){
var self__ = this;
var _27165__$1 = this;
return (new cljs.core.async.t_cljs$core$async27163(self__.f,self__.blockable,meta27164__$1));
});

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27165){
var self__ = this;
var _27165__$1 = this;
return self__.meta27164;
});

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27164","meta27164",1248255094,null)], null);
});

cljs.core.async.t_cljs$core$async27163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27163";

cljs.core.async.t_cljs$core$async27163.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async27163");
});

cljs.core.async.__GT_t_cljs$core$async27163 = (function cljs$core$async$__GT_t_cljs$core$async27163(f__$1,blockable__$1,meta27164){
return (new cljs.core.async.t_cljs$core$async27163(f__$1,blockable__$1,meta27164));
});

}

return (new cljs.core.async.t_cljs$core$async27163(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args27172 = [];
var len__25852__auto___27175 = arguments.length;
var i__25853__auto___27176 = (0);
while(true){
if((i__25853__auto___27176 < len__25852__auto___27175)){
args27172.push((arguments[i__25853__auto___27176]));

var G__27177 = (i__25853__auto___27176 + (1));
i__25853__auto___27176 = G__27177;
continue;
} else {
}
break;
}

var G__27174 = args27172.length;
switch (G__27174) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27172.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27179 = [];
var len__25852__auto___27182 = arguments.length;
var i__25853__auto___27183 = (0);
while(true){
if((i__25853__auto___27183 < len__25852__auto___27182)){
args27179.push((arguments[i__25853__auto___27183]));

var G__27184 = (i__25853__auto___27183 + (1));
i__25853__auto___27183 = G__27184;
continue;
} else {
}
break;
}

var G__27181 = args27179.length;
switch (G__27181) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27179.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args27186 = [];
var len__25852__auto___27189 = arguments.length;
var i__25853__auto___27190 = (0);
while(true){
if((i__25853__auto___27190 < len__25852__auto___27189)){
args27186.push((arguments[i__25853__auto___27190]));

var G__27191 = (i__25853__auto___27190 + (1));
i__25853__auto___27190 = G__27191;
continue;
} else {
}
break;
}

var G__27188 = args27186.length;
switch (G__27188) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27186.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27193 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27193);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27193,ret){
return (function (){
return fn1.call(null,val_27193);
});})(val_27193,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27194 = [];
var len__25852__auto___27197 = arguments.length;
var i__25853__auto___27198 = (0);
while(true){
if((i__25853__auto___27198 < len__25852__auto___27197)){
args27194.push((arguments[i__25853__auto___27198]));

var G__27199 = (i__25853__auto___27198 + (1));
i__25853__auto___27198 = G__27199;
continue;
} else {
}
break;
}

var G__27196 = args27194.length;
switch (G__27196) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27194.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25692__auto___27201 = n;
var x_27202 = (0);
while(true){
if((x_27202 < n__25692__auto___27201)){
(a[x_27202] = (0));

var G__27203 = (x_27202 + (1));
x_27202 = G__27203;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27204 = (i + (1));
i = G__27204;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27208 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27208 = (function (alt_flag,flag,meta27209){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27209 = meta27209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27210,meta27209__$1){
var self__ = this;
var _27210__$1 = this;
return (new cljs.core.async.t_cljs$core$async27208(self__.alt_flag,self__.flag,meta27209__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27210){
var self__ = this;
var _27210__$1 = this;
return self__.meta27209;
});})(flag))
;

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27208.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27209","meta27209",-672512466,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27208";

cljs.core.async.t_cljs$core$async27208.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async27208");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27208 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27208(alt_flag__$1,flag__$1,meta27209){
return (new cljs.core.async.t_cljs$core$async27208(alt_flag__$1,flag__$1,meta27209));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27208(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27214 = (function (alt_handler,flag,cb,meta27215){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27215 = meta27215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27216,meta27215__$1){
var self__ = this;
var _27216__$1 = this;
return (new cljs.core.async.t_cljs$core$async27214(self__.alt_handler,self__.flag,self__.cb,meta27215__$1));
});

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27216){
var self__ = this;
var _27216__$1 = this;
return self__.meta27215;
});

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27215","meta27215",608153883,null)], null);
});

cljs.core.async.t_cljs$core$async27214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27214";

cljs.core.async.t_cljs$core$async27214.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async27214");
});

cljs.core.async.__GT_t_cljs$core$async27214 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27214(alt_handler__$1,flag__$1,cb__$1,meta27215){
return (new cljs.core.async.t_cljs$core$async27214(alt_handler__$1,flag__$1,cb__$1,meta27215));
});

}

return (new cljs.core.async.t_cljs$core$async27214(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27217_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27217_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27218_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27218_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24777__auto__ = wport;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27219 = (i + (1));
i = G__27219;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24777__auto__ = ret;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24765__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24765__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24765__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__25859__auto__ = [];
var len__25852__auto___27225 = arguments.length;
var i__25853__auto___27226 = (0);
while(true){
if((i__25853__auto___27226 < len__25852__auto___27225)){
args__25859__auto__.push((arguments[i__25853__auto___27226]));

var G__27227 = (i__25853__auto___27226 + (1));
i__25853__auto___27226 = G__27227;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27222){
var map__27223 = p__27222;
var map__27223__$1 = ((((!((map__27223 == null)))?((((map__27223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27223):map__27223);
var opts = map__27223__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27220){
var G__27221 = cljs.core.first.call(null,seq27220);
var seq27220__$1 = cljs.core.next.call(null,seq27220);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27221,seq27220__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args27228 = [];
var len__25852__auto___27278 = arguments.length;
var i__25853__auto___27279 = (0);
while(true){
if((i__25853__auto___27279 < len__25852__auto___27278)){
args27228.push((arguments[i__25853__auto___27279]));

var G__27280 = (i__25853__auto___27279 + (1));
i__25853__auto___27279 = G__27280;
continue;
} else {
}
break;
}

var G__27230 = args27228.length;
switch (G__27230) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27228.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27115__auto___27282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___27282){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___27282){
return (function (state_27254){
var state_val_27255 = (state_27254[(1)]);
if((state_val_27255 === (7))){
var inst_27250 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27256_27283 = state_27254__$1;
(statearr_27256_27283[(2)] = inst_27250);

(statearr_27256_27283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (1))){
var state_27254__$1 = state_27254;
var statearr_27257_27284 = state_27254__$1;
(statearr_27257_27284[(2)] = null);

(statearr_27257_27284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (4))){
var inst_27233 = (state_27254[(7)]);
var inst_27233__$1 = (state_27254[(2)]);
var inst_27234 = (inst_27233__$1 == null);
var state_27254__$1 = (function (){var statearr_27258 = state_27254;
(statearr_27258[(7)] = inst_27233__$1);

return statearr_27258;
})();
if(cljs.core.truth_(inst_27234)){
var statearr_27259_27285 = state_27254__$1;
(statearr_27259_27285[(1)] = (5));

} else {
var statearr_27260_27286 = state_27254__$1;
(statearr_27260_27286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (13))){
var state_27254__$1 = state_27254;
var statearr_27261_27287 = state_27254__$1;
(statearr_27261_27287[(2)] = null);

(statearr_27261_27287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (6))){
var inst_27233 = (state_27254[(7)]);
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27254__$1,(11),to,inst_27233);
} else {
if((state_val_27255 === (3))){
var inst_27252 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27254__$1,inst_27252);
} else {
if((state_val_27255 === (12))){
var state_27254__$1 = state_27254;
var statearr_27262_27288 = state_27254__$1;
(statearr_27262_27288[(2)] = null);

(statearr_27262_27288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (2))){
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27254__$1,(4),from);
} else {
if((state_val_27255 === (11))){
var inst_27243 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
if(cljs.core.truth_(inst_27243)){
var statearr_27263_27289 = state_27254__$1;
(statearr_27263_27289[(1)] = (12));

} else {
var statearr_27264_27290 = state_27254__$1;
(statearr_27264_27290[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (9))){
var state_27254__$1 = state_27254;
var statearr_27265_27291 = state_27254__$1;
(statearr_27265_27291[(2)] = null);

(statearr_27265_27291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (5))){
var state_27254__$1 = state_27254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27266_27292 = state_27254__$1;
(statearr_27266_27292[(1)] = (8));

} else {
var statearr_27267_27293 = state_27254__$1;
(statearr_27267_27293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (14))){
var inst_27248 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27268_27294 = state_27254__$1;
(statearr_27268_27294[(2)] = inst_27248);

(statearr_27268_27294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (10))){
var inst_27240 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27269_27295 = state_27254__$1;
(statearr_27269_27295[(2)] = inst_27240);

(statearr_27269_27295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (8))){
var inst_27237 = cljs.core.async.close_BANG_.call(null,to);
var state_27254__$1 = state_27254;
var statearr_27270_27296 = state_27254__$1;
(statearr_27270_27296[(2)] = inst_27237);

(statearr_27270_27296[(1)] = (10));


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
});})(c__27115__auto___27282))
;
return ((function (switch__27003__auto__,c__27115__auto___27282){
return (function() {
var cljs$core$async$state_machine__27004__auto__ = null;
var cljs$core$async$state_machine__27004__auto____0 = (function (){
var statearr_27274 = [null,null,null,null,null,null,null,null];
(statearr_27274[(0)] = cljs$core$async$state_machine__27004__auto__);

(statearr_27274[(1)] = (1));

return statearr_27274;
});
var cljs$core$async$state_machine__27004__auto____1 = (function (state_27254){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_27254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e27275){if((e27275 instanceof Object)){
var ex__27007__auto__ = e27275;
var statearr_27276_27297 = state_27254;
(statearr_27276_27297[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27298 = state_27254;
state_27254 = G__27298;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$state_machine__27004__auto__ = function(state_27254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27004__auto____1.call(this,state_27254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27004__auto____0;
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27004__auto____1;
return cljs$core$async$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___27282))
})();
var state__27117__auto__ = (function (){var statearr_27277 = f__27116__auto__.call(null);
(statearr_27277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___27282);

return statearr_27277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___27282))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27486){
var vec__27487 = p__27486;
var v = cljs.core.nth.call(null,vec__27487,(0),null);
var p = cljs.core.nth.call(null,vec__27487,(1),null);
var job = vec__27487;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27115__auto___27673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___27673,res,vec__27487,v,p,job,jobs,results){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___27673,res,vec__27487,v,p,job,jobs,results){
return (function (state_27494){
var state_val_27495 = (state_27494[(1)]);
if((state_val_27495 === (1))){
var state_27494__$1 = state_27494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27494__$1,(2),res,v);
} else {
if((state_val_27495 === (2))){
var inst_27491 = (state_27494[(2)]);
var inst_27492 = cljs.core.async.close_BANG_.call(null,res);
var state_27494__$1 = (function (){var statearr_27496 = state_27494;
(statearr_27496[(7)] = inst_27491);

return statearr_27496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27494__$1,inst_27492);
} else {
return null;
}
}
});})(c__27115__auto___27673,res,vec__27487,v,p,job,jobs,results))
;
return ((function (switch__27003__auto__,c__27115__auto___27673,res,vec__27487,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0 = (function (){
var statearr_27500 = [null,null,null,null,null,null,null,null];
(statearr_27500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__);

(statearr_27500[(1)] = (1));

return statearr_27500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1 = (function (state_27494){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_27494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e27501){if((e27501 instanceof Object)){
var ex__27007__auto__ = e27501;
var statearr_27502_27674 = state_27494;
(statearr_27502_27674[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27675 = state_27494;
state_27494 = G__27675;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__ = function(state_27494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1.call(this,state_27494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___27673,res,vec__27487,v,p,job,jobs,results))
})();
var state__27117__auto__ = (function (){var statearr_27503 = f__27116__auto__.call(null);
(statearr_27503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___27673);

return statearr_27503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___27673,res,vec__27487,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27504){
var vec__27505 = p__27504;
var v = cljs.core.nth.call(null,vec__27505,(0),null);
var p = cljs.core.nth.call(null,vec__27505,(1),null);
var job = vec__27505;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25692__auto___27676 = n;
var __27677 = (0);
while(true){
if((__27677 < n__25692__auto___27676)){
var G__27508_27678 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27508_27678) {
case "compute":
var c__27115__auto___27680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27677,c__27115__auto___27680,G__27508_27678,n__25692__auto___27676,jobs,results,process,async){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (__27677,c__27115__auto___27680,G__27508_27678,n__25692__auto___27676,jobs,results,process,async){
return (function (state_27521){
var state_val_27522 = (state_27521[(1)]);
if((state_val_27522 === (1))){
var state_27521__$1 = state_27521;
var statearr_27523_27681 = state_27521__$1;
(statearr_27523_27681[(2)] = null);

(statearr_27523_27681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (2))){
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27521__$1,(4),jobs);
} else {
if((state_val_27522 === (3))){
var inst_27519 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27521__$1,inst_27519);
} else {
if((state_val_27522 === (4))){
var inst_27511 = (state_27521[(2)]);
var inst_27512 = process.call(null,inst_27511);
var state_27521__$1 = state_27521;
if(cljs.core.truth_(inst_27512)){
var statearr_27524_27682 = state_27521__$1;
(statearr_27524_27682[(1)] = (5));

} else {
var statearr_27525_27683 = state_27521__$1;
(statearr_27525_27683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (5))){
var state_27521__$1 = state_27521;
var statearr_27526_27684 = state_27521__$1;
(statearr_27526_27684[(2)] = null);

(statearr_27526_27684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (6))){
var state_27521__$1 = state_27521;
var statearr_27527_27685 = state_27521__$1;
(statearr_27527_27685[(2)] = null);

(statearr_27527_27685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (7))){
var inst_27517 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
var statearr_27528_27686 = state_27521__$1;
(statearr_27528_27686[(2)] = inst_27517);

(statearr_27528_27686[(1)] = (3));


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
});})(__27677,c__27115__auto___27680,G__27508_27678,n__25692__auto___27676,jobs,results,process,async))
;
return ((function (__27677,switch__27003__auto__,c__27115__auto___27680,G__27508_27678,n__25692__auto___27676,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0 = (function (){
var statearr_27532 = [null,null,null,null,null,null,null];
(statearr_27532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__);

(statearr_27532[(1)] = (1));

return statearr_27532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1 = (function (state_27521){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_27521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e27533){if((e27533 instanceof Object)){
var ex__27007__auto__ = e27533;
var statearr_27534_27687 = state_27521;
(statearr_27534_27687[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27688 = state_27521;
state_27521 = G__27688;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__ = function(state_27521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1.call(this,state_27521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__;
})()
;})(__27677,switch__27003__auto__,c__27115__auto___27680,G__27508_27678,n__25692__auto___27676,jobs,results,process,async))
})();
var state__27117__auto__ = (function (){var statearr_27535 = f__27116__auto__.call(null);
(statearr_27535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___27680);

return statearr_27535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(__27677,c__27115__auto___27680,G__27508_27678,n__25692__auto___27676,jobs,results,process,async))
);


break;
case "async":
var c__27115__auto___27689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27677,c__27115__auto___27689,G__27508_27678,n__25692__auto___27676,jobs,results,process,async){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (__27677,c__27115__auto___27689,G__27508_27678,n__25692__auto___27676,jobs,results,process,async){
return (function (state_27548){
var state_val_27549 = (state_27548[(1)]);
if((state_val_27549 === (1))){
var state_27548__$1 = state_27548;
var statearr_27550_27690 = state_27548__$1;
(statearr_27550_27690[(2)] = null);

(statearr_27550_27690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (2))){
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27548__$1,(4),jobs);
} else {
if((state_val_27549 === (3))){
var inst_27546 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27548__$1,inst_27546);
} else {
if((state_val_27549 === (4))){
var inst_27538 = (state_27548[(2)]);
var inst_27539 = async.call(null,inst_27538);
var state_27548__$1 = state_27548;
if(cljs.core.truth_(inst_27539)){
var statearr_27551_27691 = state_27548__$1;
(statearr_27551_27691[(1)] = (5));

} else {
var statearr_27552_27692 = state_27548__$1;
(statearr_27552_27692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (5))){
var state_27548__$1 = state_27548;
var statearr_27553_27693 = state_27548__$1;
(statearr_27553_27693[(2)] = null);

(statearr_27553_27693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (6))){
var state_27548__$1 = state_27548;
var statearr_27554_27694 = state_27548__$1;
(statearr_27554_27694[(2)] = null);

(statearr_27554_27694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (7))){
var inst_27544 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27555_27695 = state_27548__$1;
(statearr_27555_27695[(2)] = inst_27544);

(statearr_27555_27695[(1)] = (3));


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
});})(__27677,c__27115__auto___27689,G__27508_27678,n__25692__auto___27676,jobs,results,process,async))
;
return ((function (__27677,switch__27003__auto__,c__27115__auto___27689,G__27508_27678,n__25692__auto___27676,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0 = (function (){
var statearr_27559 = [null,null,null,null,null,null,null];
(statearr_27559[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__);

(statearr_27559[(1)] = (1));

return statearr_27559;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1 = (function (state_27548){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_27548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e27560){if((e27560 instanceof Object)){
var ex__27007__auto__ = e27560;
var statearr_27561_27696 = state_27548;
(statearr_27561_27696[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27697 = state_27548;
state_27548 = G__27697;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__ = function(state_27548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1.call(this,state_27548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__;
})()
;})(__27677,switch__27003__auto__,c__27115__auto___27689,G__27508_27678,n__25692__auto___27676,jobs,results,process,async))
})();
var state__27117__auto__ = (function (){var statearr_27562 = f__27116__auto__.call(null);
(statearr_27562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___27689);

return statearr_27562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(__27677,c__27115__auto___27689,G__27508_27678,n__25692__auto___27676,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27698 = (__27677 + (1));
__27677 = G__27698;
continue;
} else {
}
break;
}

var c__27115__auto___27699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___27699,jobs,results,process,async){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___27699,jobs,results,process,async){
return (function (state_27584){
var state_val_27585 = (state_27584[(1)]);
if((state_val_27585 === (1))){
var state_27584__$1 = state_27584;
var statearr_27586_27700 = state_27584__$1;
(statearr_27586_27700[(2)] = null);

(statearr_27586_27700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (2))){
var state_27584__$1 = state_27584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27584__$1,(4),from);
} else {
if((state_val_27585 === (3))){
var inst_27582 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27584__$1,inst_27582);
} else {
if((state_val_27585 === (4))){
var inst_27565 = (state_27584[(7)]);
var inst_27565__$1 = (state_27584[(2)]);
var inst_27566 = (inst_27565__$1 == null);
var state_27584__$1 = (function (){var statearr_27587 = state_27584;
(statearr_27587[(7)] = inst_27565__$1);

return statearr_27587;
})();
if(cljs.core.truth_(inst_27566)){
var statearr_27588_27701 = state_27584__$1;
(statearr_27588_27701[(1)] = (5));

} else {
var statearr_27589_27702 = state_27584__$1;
(statearr_27589_27702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (5))){
var inst_27568 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27584__$1 = state_27584;
var statearr_27590_27703 = state_27584__$1;
(statearr_27590_27703[(2)] = inst_27568);

(statearr_27590_27703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (6))){
var inst_27570 = (state_27584[(8)]);
var inst_27565 = (state_27584[(7)]);
var inst_27570__$1 = cljs.core.async.chan.call(null,(1));
var inst_27571 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27572 = [inst_27565,inst_27570__$1];
var inst_27573 = (new cljs.core.PersistentVector(null,2,(5),inst_27571,inst_27572,null));
var state_27584__$1 = (function (){var statearr_27591 = state_27584;
(statearr_27591[(8)] = inst_27570__$1);

return statearr_27591;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27584__$1,(8),jobs,inst_27573);
} else {
if((state_val_27585 === (7))){
var inst_27580 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
var statearr_27592_27704 = state_27584__$1;
(statearr_27592_27704[(2)] = inst_27580);

(statearr_27592_27704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (8))){
var inst_27570 = (state_27584[(8)]);
var inst_27575 = (state_27584[(2)]);
var state_27584__$1 = (function (){var statearr_27593 = state_27584;
(statearr_27593[(9)] = inst_27575);

return statearr_27593;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27584__$1,(9),results,inst_27570);
} else {
if((state_val_27585 === (9))){
var inst_27577 = (state_27584[(2)]);
var state_27584__$1 = (function (){var statearr_27594 = state_27584;
(statearr_27594[(10)] = inst_27577);

return statearr_27594;
})();
var statearr_27595_27705 = state_27584__$1;
(statearr_27595_27705[(2)] = null);

(statearr_27595_27705[(1)] = (2));


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
});})(c__27115__auto___27699,jobs,results,process,async))
;
return ((function (switch__27003__auto__,c__27115__auto___27699,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0 = (function (){
var statearr_27599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__);

(statearr_27599[(1)] = (1));

return statearr_27599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1 = (function (state_27584){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_27584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e27600){if((e27600 instanceof Object)){
var ex__27007__auto__ = e27600;
var statearr_27601_27706 = state_27584;
(statearr_27601_27706[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27707 = state_27584;
state_27584 = G__27707;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__ = function(state_27584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1.call(this,state_27584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___27699,jobs,results,process,async))
})();
var state__27117__auto__ = (function (){var statearr_27602 = f__27116__auto__.call(null);
(statearr_27602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___27699);

return statearr_27602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___27699,jobs,results,process,async))
);


var c__27115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto__,jobs,results,process,async){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto__,jobs,results,process,async){
return (function (state_27640){
var state_val_27641 = (state_27640[(1)]);
if((state_val_27641 === (7))){
var inst_27636 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27642_27708 = state_27640__$1;
(statearr_27642_27708[(2)] = inst_27636);

(statearr_27642_27708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (20))){
var state_27640__$1 = state_27640;
var statearr_27643_27709 = state_27640__$1;
(statearr_27643_27709[(2)] = null);

(statearr_27643_27709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (1))){
var state_27640__$1 = state_27640;
var statearr_27644_27710 = state_27640__$1;
(statearr_27644_27710[(2)] = null);

(statearr_27644_27710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (4))){
var inst_27605 = (state_27640[(7)]);
var inst_27605__$1 = (state_27640[(2)]);
var inst_27606 = (inst_27605__$1 == null);
var state_27640__$1 = (function (){var statearr_27645 = state_27640;
(statearr_27645[(7)] = inst_27605__$1);

return statearr_27645;
})();
if(cljs.core.truth_(inst_27606)){
var statearr_27646_27711 = state_27640__$1;
(statearr_27646_27711[(1)] = (5));

} else {
var statearr_27647_27712 = state_27640__$1;
(statearr_27647_27712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (15))){
var inst_27618 = (state_27640[(8)]);
var state_27640__$1 = state_27640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27640__$1,(18),to,inst_27618);
} else {
if((state_val_27641 === (21))){
var inst_27631 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27648_27713 = state_27640__$1;
(statearr_27648_27713[(2)] = inst_27631);

(statearr_27648_27713[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (13))){
var inst_27633 = (state_27640[(2)]);
var state_27640__$1 = (function (){var statearr_27649 = state_27640;
(statearr_27649[(9)] = inst_27633);

return statearr_27649;
})();
var statearr_27650_27714 = state_27640__$1;
(statearr_27650_27714[(2)] = null);

(statearr_27650_27714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (6))){
var inst_27605 = (state_27640[(7)]);
var state_27640__$1 = state_27640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27640__$1,(11),inst_27605);
} else {
if((state_val_27641 === (17))){
var inst_27626 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
if(cljs.core.truth_(inst_27626)){
var statearr_27651_27715 = state_27640__$1;
(statearr_27651_27715[(1)] = (19));

} else {
var statearr_27652_27716 = state_27640__$1;
(statearr_27652_27716[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (3))){
var inst_27638 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27640__$1,inst_27638);
} else {
if((state_val_27641 === (12))){
var inst_27615 = (state_27640[(10)]);
var state_27640__$1 = state_27640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27640__$1,(14),inst_27615);
} else {
if((state_val_27641 === (2))){
var state_27640__$1 = state_27640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27640__$1,(4),results);
} else {
if((state_val_27641 === (19))){
var state_27640__$1 = state_27640;
var statearr_27653_27717 = state_27640__$1;
(statearr_27653_27717[(2)] = null);

(statearr_27653_27717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (11))){
var inst_27615 = (state_27640[(2)]);
var state_27640__$1 = (function (){var statearr_27654 = state_27640;
(statearr_27654[(10)] = inst_27615);

return statearr_27654;
})();
var statearr_27655_27718 = state_27640__$1;
(statearr_27655_27718[(2)] = null);

(statearr_27655_27718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (9))){
var state_27640__$1 = state_27640;
var statearr_27656_27719 = state_27640__$1;
(statearr_27656_27719[(2)] = null);

(statearr_27656_27719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (5))){
var state_27640__$1 = state_27640;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27657_27720 = state_27640__$1;
(statearr_27657_27720[(1)] = (8));

} else {
var statearr_27658_27721 = state_27640__$1;
(statearr_27658_27721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (14))){
var inst_27620 = (state_27640[(11)]);
var inst_27618 = (state_27640[(8)]);
var inst_27618__$1 = (state_27640[(2)]);
var inst_27619 = (inst_27618__$1 == null);
var inst_27620__$1 = cljs.core.not.call(null,inst_27619);
var state_27640__$1 = (function (){var statearr_27659 = state_27640;
(statearr_27659[(11)] = inst_27620__$1);

(statearr_27659[(8)] = inst_27618__$1);

return statearr_27659;
})();
if(inst_27620__$1){
var statearr_27660_27722 = state_27640__$1;
(statearr_27660_27722[(1)] = (15));

} else {
var statearr_27661_27723 = state_27640__$1;
(statearr_27661_27723[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (16))){
var inst_27620 = (state_27640[(11)]);
var state_27640__$1 = state_27640;
var statearr_27662_27724 = state_27640__$1;
(statearr_27662_27724[(2)] = inst_27620);

(statearr_27662_27724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (10))){
var inst_27612 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27663_27725 = state_27640__$1;
(statearr_27663_27725[(2)] = inst_27612);

(statearr_27663_27725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (18))){
var inst_27623 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27664_27726 = state_27640__$1;
(statearr_27664_27726[(2)] = inst_27623);

(statearr_27664_27726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (8))){
var inst_27609 = cljs.core.async.close_BANG_.call(null,to);
var state_27640__$1 = state_27640;
var statearr_27665_27727 = state_27640__$1;
(statearr_27665_27727[(2)] = inst_27609);

(statearr_27665_27727[(1)] = (10));


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
});})(c__27115__auto__,jobs,results,process,async))
;
return ((function (switch__27003__auto__,c__27115__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0 = (function (){
var statearr_27669 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__);

(statearr_27669[(1)] = (1));

return statearr_27669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1 = (function (state_27640){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_27640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e27670){if((e27670 instanceof Object)){
var ex__27007__auto__ = e27670;
var statearr_27671_27728 = state_27640;
(statearr_27671_27728[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27729 = state_27640;
state_27640 = G__27729;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__ = function(state_27640){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1.call(this,state_27640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto__,jobs,results,process,async))
})();
var state__27117__auto__ = (function (){var statearr_27672 = f__27116__auto__.call(null);
(statearr_27672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto__);

return statearr_27672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto__,jobs,results,process,async))
);

return c__27115__auto__;
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
var args27730 = [];
var len__25852__auto___27733 = arguments.length;
var i__25853__auto___27734 = (0);
while(true){
if((i__25853__auto___27734 < len__25852__auto___27733)){
args27730.push((arguments[i__25853__auto___27734]));

var G__27735 = (i__25853__auto___27734 + (1));
i__25853__auto___27734 = G__27735;
continue;
} else {
}
break;
}

var G__27732 = args27730.length;
switch (G__27732) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27730.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args27737 = [];
var len__25852__auto___27740 = arguments.length;
var i__25853__auto___27741 = (0);
while(true){
if((i__25853__auto___27741 < len__25852__auto___27740)){
args27737.push((arguments[i__25853__auto___27741]));

var G__27742 = (i__25853__auto___27741 + (1));
i__25853__auto___27741 = G__27742;
continue;
} else {
}
break;
}

var G__27739 = args27737.length;
switch (G__27739) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27737.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args27744 = [];
var len__25852__auto___27797 = arguments.length;
var i__25853__auto___27798 = (0);
while(true){
if((i__25853__auto___27798 < len__25852__auto___27797)){
args27744.push((arguments[i__25853__auto___27798]));

var G__27799 = (i__25853__auto___27798 + (1));
i__25853__auto___27798 = G__27799;
continue;
} else {
}
break;
}

var G__27746 = args27744.length;
switch (G__27746) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27744.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27115__auto___27801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___27801,tc,fc){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___27801,tc,fc){
return (function (state_27772){
var state_val_27773 = (state_27772[(1)]);
if((state_val_27773 === (7))){
var inst_27768 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
var statearr_27774_27802 = state_27772__$1;
(statearr_27774_27802[(2)] = inst_27768);

(statearr_27774_27802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (1))){
var state_27772__$1 = state_27772;
var statearr_27775_27803 = state_27772__$1;
(statearr_27775_27803[(2)] = null);

(statearr_27775_27803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (4))){
var inst_27749 = (state_27772[(7)]);
var inst_27749__$1 = (state_27772[(2)]);
var inst_27750 = (inst_27749__$1 == null);
var state_27772__$1 = (function (){var statearr_27776 = state_27772;
(statearr_27776[(7)] = inst_27749__$1);

return statearr_27776;
})();
if(cljs.core.truth_(inst_27750)){
var statearr_27777_27804 = state_27772__$1;
(statearr_27777_27804[(1)] = (5));

} else {
var statearr_27778_27805 = state_27772__$1;
(statearr_27778_27805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (13))){
var state_27772__$1 = state_27772;
var statearr_27779_27806 = state_27772__$1;
(statearr_27779_27806[(2)] = null);

(statearr_27779_27806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (6))){
var inst_27749 = (state_27772[(7)]);
var inst_27755 = p.call(null,inst_27749);
var state_27772__$1 = state_27772;
if(cljs.core.truth_(inst_27755)){
var statearr_27780_27807 = state_27772__$1;
(statearr_27780_27807[(1)] = (9));

} else {
var statearr_27781_27808 = state_27772__$1;
(statearr_27781_27808[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (3))){
var inst_27770 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27772__$1,inst_27770);
} else {
if((state_val_27773 === (12))){
var state_27772__$1 = state_27772;
var statearr_27782_27809 = state_27772__$1;
(statearr_27782_27809[(2)] = null);

(statearr_27782_27809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (2))){
var state_27772__$1 = state_27772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27772__$1,(4),ch);
} else {
if((state_val_27773 === (11))){
var inst_27749 = (state_27772[(7)]);
var inst_27759 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27772__$1,(8),inst_27759,inst_27749);
} else {
if((state_val_27773 === (9))){
var state_27772__$1 = state_27772;
var statearr_27783_27810 = state_27772__$1;
(statearr_27783_27810[(2)] = tc);

(statearr_27783_27810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (5))){
var inst_27752 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27753 = cljs.core.async.close_BANG_.call(null,fc);
var state_27772__$1 = (function (){var statearr_27784 = state_27772;
(statearr_27784[(8)] = inst_27752);

return statearr_27784;
})();
var statearr_27785_27811 = state_27772__$1;
(statearr_27785_27811[(2)] = inst_27753);

(statearr_27785_27811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (14))){
var inst_27766 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
var statearr_27786_27812 = state_27772__$1;
(statearr_27786_27812[(2)] = inst_27766);

(statearr_27786_27812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (10))){
var state_27772__$1 = state_27772;
var statearr_27787_27813 = state_27772__$1;
(statearr_27787_27813[(2)] = fc);

(statearr_27787_27813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (8))){
var inst_27761 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
if(cljs.core.truth_(inst_27761)){
var statearr_27788_27814 = state_27772__$1;
(statearr_27788_27814[(1)] = (12));

} else {
var statearr_27789_27815 = state_27772__$1;
(statearr_27789_27815[(1)] = (13));

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
});})(c__27115__auto___27801,tc,fc))
;
return ((function (switch__27003__auto__,c__27115__auto___27801,tc,fc){
return (function() {
var cljs$core$async$state_machine__27004__auto__ = null;
var cljs$core$async$state_machine__27004__auto____0 = (function (){
var statearr_27793 = [null,null,null,null,null,null,null,null,null];
(statearr_27793[(0)] = cljs$core$async$state_machine__27004__auto__);

(statearr_27793[(1)] = (1));

return statearr_27793;
});
var cljs$core$async$state_machine__27004__auto____1 = (function (state_27772){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_27772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e27794){if((e27794 instanceof Object)){
var ex__27007__auto__ = e27794;
var statearr_27795_27816 = state_27772;
(statearr_27795_27816[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27817 = state_27772;
state_27772 = G__27817;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$state_machine__27004__auto__ = function(state_27772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27004__auto____1.call(this,state_27772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27004__auto____0;
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27004__auto____1;
return cljs$core$async$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___27801,tc,fc))
})();
var state__27117__auto__ = (function (){var statearr_27796 = f__27116__auto__.call(null);
(statearr_27796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___27801);

return statearr_27796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___27801,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto__){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto__){
return (function (state_27881){
var state_val_27882 = (state_27881[(1)]);
if((state_val_27882 === (7))){
var inst_27877 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27883_27904 = state_27881__$1;
(statearr_27883_27904[(2)] = inst_27877);

(statearr_27883_27904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (1))){
var inst_27861 = init;
var state_27881__$1 = (function (){var statearr_27884 = state_27881;
(statearr_27884[(7)] = inst_27861);

return statearr_27884;
})();
var statearr_27885_27905 = state_27881__$1;
(statearr_27885_27905[(2)] = null);

(statearr_27885_27905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (4))){
var inst_27864 = (state_27881[(8)]);
var inst_27864__$1 = (state_27881[(2)]);
var inst_27865 = (inst_27864__$1 == null);
var state_27881__$1 = (function (){var statearr_27886 = state_27881;
(statearr_27886[(8)] = inst_27864__$1);

return statearr_27886;
})();
if(cljs.core.truth_(inst_27865)){
var statearr_27887_27906 = state_27881__$1;
(statearr_27887_27906[(1)] = (5));

} else {
var statearr_27888_27907 = state_27881__$1;
(statearr_27888_27907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (6))){
var inst_27868 = (state_27881[(9)]);
var inst_27864 = (state_27881[(8)]);
var inst_27861 = (state_27881[(7)]);
var inst_27868__$1 = f.call(null,inst_27861,inst_27864);
var inst_27869 = cljs.core.reduced_QMARK_.call(null,inst_27868__$1);
var state_27881__$1 = (function (){var statearr_27889 = state_27881;
(statearr_27889[(9)] = inst_27868__$1);

return statearr_27889;
})();
if(inst_27869){
var statearr_27890_27908 = state_27881__$1;
(statearr_27890_27908[(1)] = (8));

} else {
var statearr_27891_27909 = state_27881__$1;
(statearr_27891_27909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (3))){
var inst_27879 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27881__$1,inst_27879);
} else {
if((state_val_27882 === (2))){
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27881__$1,(4),ch);
} else {
if((state_val_27882 === (9))){
var inst_27868 = (state_27881[(9)]);
var inst_27861 = inst_27868;
var state_27881__$1 = (function (){var statearr_27892 = state_27881;
(statearr_27892[(7)] = inst_27861);

return statearr_27892;
})();
var statearr_27893_27910 = state_27881__$1;
(statearr_27893_27910[(2)] = null);

(statearr_27893_27910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (5))){
var inst_27861 = (state_27881[(7)]);
var state_27881__$1 = state_27881;
var statearr_27894_27911 = state_27881__$1;
(statearr_27894_27911[(2)] = inst_27861);

(statearr_27894_27911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (10))){
var inst_27875 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27895_27912 = state_27881__$1;
(statearr_27895_27912[(2)] = inst_27875);

(statearr_27895_27912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (8))){
var inst_27868 = (state_27881[(9)]);
var inst_27871 = cljs.core.deref.call(null,inst_27868);
var state_27881__$1 = state_27881;
var statearr_27896_27913 = state_27881__$1;
(statearr_27896_27913[(2)] = inst_27871);

(statearr_27896_27913[(1)] = (10));


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
});})(c__27115__auto__))
;
return ((function (switch__27003__auto__,c__27115__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27004__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27004__auto____0 = (function (){
var statearr_27900 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27900[(0)] = cljs$core$async$reduce_$_state_machine__27004__auto__);

(statearr_27900[(1)] = (1));

return statearr_27900;
});
var cljs$core$async$reduce_$_state_machine__27004__auto____1 = (function (state_27881){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_27881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e27901){if((e27901 instanceof Object)){
var ex__27007__auto__ = e27901;
var statearr_27902_27914 = state_27881;
(statearr_27902_27914[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27915 = state_27881;
state_27881 = G__27915;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27004__auto__ = function(state_27881){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27004__auto____1.call(this,state_27881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27004__auto____0;
cljs$core$async$reduce_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27004__auto____1;
return cljs$core$async$reduce_$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto__))
})();
var state__27117__auto__ = (function (){var statearr_27903 = f__27116__auto__.call(null);
(statearr_27903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto__);

return statearr_27903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto__))
);

return c__27115__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27916 = [];
var len__25852__auto___27968 = arguments.length;
var i__25853__auto___27969 = (0);
while(true){
if((i__25853__auto___27969 < len__25852__auto___27968)){
args27916.push((arguments[i__25853__auto___27969]));

var G__27970 = (i__25853__auto___27969 + (1));
i__25853__auto___27969 = G__27970;
continue;
} else {
}
break;
}

var G__27918 = args27916.length;
switch (G__27918) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27916.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto__){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto__){
return (function (state_27943){
var state_val_27944 = (state_27943[(1)]);
if((state_val_27944 === (7))){
var inst_27925 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
var statearr_27945_27972 = state_27943__$1;
(statearr_27945_27972[(2)] = inst_27925);

(statearr_27945_27972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (1))){
var inst_27919 = cljs.core.seq.call(null,coll);
var inst_27920 = inst_27919;
var state_27943__$1 = (function (){var statearr_27946 = state_27943;
(statearr_27946[(7)] = inst_27920);

return statearr_27946;
})();
var statearr_27947_27973 = state_27943__$1;
(statearr_27947_27973[(2)] = null);

(statearr_27947_27973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (4))){
var inst_27920 = (state_27943[(7)]);
var inst_27923 = cljs.core.first.call(null,inst_27920);
var state_27943__$1 = state_27943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27943__$1,(7),ch,inst_27923);
} else {
if((state_val_27944 === (13))){
var inst_27937 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
var statearr_27948_27974 = state_27943__$1;
(statearr_27948_27974[(2)] = inst_27937);

(statearr_27948_27974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (6))){
var inst_27928 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
if(cljs.core.truth_(inst_27928)){
var statearr_27949_27975 = state_27943__$1;
(statearr_27949_27975[(1)] = (8));

} else {
var statearr_27950_27976 = state_27943__$1;
(statearr_27950_27976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (3))){
var inst_27941 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27943__$1,inst_27941);
} else {
if((state_val_27944 === (12))){
var state_27943__$1 = state_27943;
var statearr_27951_27977 = state_27943__$1;
(statearr_27951_27977[(2)] = null);

(statearr_27951_27977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (2))){
var inst_27920 = (state_27943[(7)]);
var state_27943__$1 = state_27943;
if(cljs.core.truth_(inst_27920)){
var statearr_27952_27978 = state_27943__$1;
(statearr_27952_27978[(1)] = (4));

} else {
var statearr_27953_27979 = state_27943__$1;
(statearr_27953_27979[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (11))){
var inst_27934 = cljs.core.async.close_BANG_.call(null,ch);
var state_27943__$1 = state_27943;
var statearr_27954_27980 = state_27943__$1;
(statearr_27954_27980[(2)] = inst_27934);

(statearr_27954_27980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (9))){
var state_27943__$1 = state_27943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27955_27981 = state_27943__$1;
(statearr_27955_27981[(1)] = (11));

} else {
var statearr_27956_27982 = state_27943__$1;
(statearr_27956_27982[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (5))){
var inst_27920 = (state_27943[(7)]);
var state_27943__$1 = state_27943;
var statearr_27957_27983 = state_27943__$1;
(statearr_27957_27983[(2)] = inst_27920);

(statearr_27957_27983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (10))){
var inst_27939 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
var statearr_27958_27984 = state_27943__$1;
(statearr_27958_27984[(2)] = inst_27939);

(statearr_27958_27984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (8))){
var inst_27920 = (state_27943[(7)]);
var inst_27930 = cljs.core.next.call(null,inst_27920);
var inst_27920__$1 = inst_27930;
var state_27943__$1 = (function (){var statearr_27959 = state_27943;
(statearr_27959[(7)] = inst_27920__$1);

return statearr_27959;
})();
var statearr_27960_27985 = state_27943__$1;
(statearr_27960_27985[(2)] = null);

(statearr_27960_27985[(1)] = (2));


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
});})(c__27115__auto__))
;
return ((function (switch__27003__auto__,c__27115__auto__){
return (function() {
var cljs$core$async$state_machine__27004__auto__ = null;
var cljs$core$async$state_machine__27004__auto____0 = (function (){
var statearr_27964 = [null,null,null,null,null,null,null,null];
(statearr_27964[(0)] = cljs$core$async$state_machine__27004__auto__);

(statearr_27964[(1)] = (1));

return statearr_27964;
});
var cljs$core$async$state_machine__27004__auto____1 = (function (state_27943){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_27943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e27965){if((e27965 instanceof Object)){
var ex__27007__auto__ = e27965;
var statearr_27966_27986 = state_27943;
(statearr_27966_27986[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27987 = state_27943;
state_27943 = G__27987;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$state_machine__27004__auto__ = function(state_27943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27004__auto____1.call(this,state_27943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27004__auto____0;
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27004__auto____1;
return cljs$core$async$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto__))
})();
var state__27117__auto__ = (function (){var statearr_27967 = f__27116__auto__.call(null);
(statearr_27967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto__);

return statearr_27967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto__))
);

return c__27115__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25440__auto__ = (((_ == null))?null:_);
var m__25441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,_);
} else {
var m__25441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m);
} else {
var m__25441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28213 = (function (mult,ch,cs,meta28214){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28214 = meta28214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28215,meta28214__$1){
var self__ = this;
var _28215__$1 = this;
return (new cljs.core.async.t_cljs$core$async28213(self__.mult,self__.ch,self__.cs,meta28214__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28215){
var self__ = this;
var _28215__$1 = this;
return self__.meta28214;
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28214","meta28214",454367163,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28213";

cljs.core.async.t_cljs$core$async28213.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async28213");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28213 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28213(mult__$1,ch__$1,cs__$1,meta28214){
return (new cljs.core.async.t_cljs$core$async28213(mult__$1,ch__$1,cs__$1,meta28214));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28213(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27115__auto___28438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___28438,cs,m,dchan,dctr,done){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___28438,cs,m,dchan,dctr,done){
return (function (state_28350){
var state_val_28351 = (state_28350[(1)]);
if((state_val_28351 === (7))){
var inst_28346 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28352_28439 = state_28350__$1;
(statearr_28352_28439[(2)] = inst_28346);

(statearr_28352_28439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (20))){
var inst_28249 = (state_28350[(7)]);
var inst_28261 = cljs.core.first.call(null,inst_28249);
var inst_28262 = cljs.core.nth.call(null,inst_28261,(0),null);
var inst_28263 = cljs.core.nth.call(null,inst_28261,(1),null);
var state_28350__$1 = (function (){var statearr_28353 = state_28350;
(statearr_28353[(8)] = inst_28262);

return statearr_28353;
})();
if(cljs.core.truth_(inst_28263)){
var statearr_28354_28440 = state_28350__$1;
(statearr_28354_28440[(1)] = (22));

} else {
var statearr_28355_28441 = state_28350__$1;
(statearr_28355_28441[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (27))){
var inst_28218 = (state_28350[(9)]);
var inst_28293 = (state_28350[(10)]);
var inst_28291 = (state_28350[(11)]);
var inst_28298 = (state_28350[(12)]);
var inst_28298__$1 = cljs.core._nth.call(null,inst_28291,inst_28293);
var inst_28299 = cljs.core.async.put_BANG_.call(null,inst_28298__$1,inst_28218,done);
var state_28350__$1 = (function (){var statearr_28356 = state_28350;
(statearr_28356[(12)] = inst_28298__$1);

return statearr_28356;
})();
if(cljs.core.truth_(inst_28299)){
var statearr_28357_28442 = state_28350__$1;
(statearr_28357_28442[(1)] = (30));

} else {
var statearr_28358_28443 = state_28350__$1;
(statearr_28358_28443[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (1))){
var state_28350__$1 = state_28350;
var statearr_28359_28444 = state_28350__$1;
(statearr_28359_28444[(2)] = null);

(statearr_28359_28444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (24))){
var inst_28249 = (state_28350[(7)]);
var inst_28268 = (state_28350[(2)]);
var inst_28269 = cljs.core.next.call(null,inst_28249);
var inst_28227 = inst_28269;
var inst_28228 = null;
var inst_28229 = (0);
var inst_28230 = (0);
var state_28350__$1 = (function (){var statearr_28360 = state_28350;
(statearr_28360[(13)] = inst_28268);

(statearr_28360[(14)] = inst_28230);

(statearr_28360[(15)] = inst_28229);

(statearr_28360[(16)] = inst_28227);

(statearr_28360[(17)] = inst_28228);

return statearr_28360;
})();
var statearr_28361_28445 = state_28350__$1;
(statearr_28361_28445[(2)] = null);

(statearr_28361_28445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (39))){
var state_28350__$1 = state_28350;
var statearr_28365_28446 = state_28350__$1;
(statearr_28365_28446[(2)] = null);

(statearr_28365_28446[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (4))){
var inst_28218 = (state_28350[(9)]);
var inst_28218__$1 = (state_28350[(2)]);
var inst_28219 = (inst_28218__$1 == null);
var state_28350__$1 = (function (){var statearr_28366 = state_28350;
(statearr_28366[(9)] = inst_28218__$1);

return statearr_28366;
})();
if(cljs.core.truth_(inst_28219)){
var statearr_28367_28447 = state_28350__$1;
(statearr_28367_28447[(1)] = (5));

} else {
var statearr_28368_28448 = state_28350__$1;
(statearr_28368_28448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (15))){
var inst_28230 = (state_28350[(14)]);
var inst_28229 = (state_28350[(15)]);
var inst_28227 = (state_28350[(16)]);
var inst_28228 = (state_28350[(17)]);
var inst_28245 = (state_28350[(2)]);
var inst_28246 = (inst_28230 + (1));
var tmp28362 = inst_28229;
var tmp28363 = inst_28227;
var tmp28364 = inst_28228;
var inst_28227__$1 = tmp28363;
var inst_28228__$1 = tmp28364;
var inst_28229__$1 = tmp28362;
var inst_28230__$1 = inst_28246;
var state_28350__$1 = (function (){var statearr_28369 = state_28350;
(statearr_28369[(14)] = inst_28230__$1);

(statearr_28369[(15)] = inst_28229__$1);

(statearr_28369[(18)] = inst_28245);

(statearr_28369[(16)] = inst_28227__$1);

(statearr_28369[(17)] = inst_28228__$1);

return statearr_28369;
})();
var statearr_28370_28449 = state_28350__$1;
(statearr_28370_28449[(2)] = null);

(statearr_28370_28449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (21))){
var inst_28272 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28374_28450 = state_28350__$1;
(statearr_28374_28450[(2)] = inst_28272);

(statearr_28374_28450[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (31))){
var inst_28298 = (state_28350[(12)]);
var inst_28302 = done.call(null,null);
var inst_28303 = cljs.core.async.untap_STAR_.call(null,m,inst_28298);
var state_28350__$1 = (function (){var statearr_28375 = state_28350;
(statearr_28375[(19)] = inst_28302);

return statearr_28375;
})();
var statearr_28376_28451 = state_28350__$1;
(statearr_28376_28451[(2)] = inst_28303);

(statearr_28376_28451[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (32))){
var inst_28292 = (state_28350[(20)]);
var inst_28293 = (state_28350[(10)]);
var inst_28291 = (state_28350[(11)]);
var inst_28290 = (state_28350[(21)]);
var inst_28305 = (state_28350[(2)]);
var inst_28306 = (inst_28293 + (1));
var tmp28371 = inst_28292;
var tmp28372 = inst_28291;
var tmp28373 = inst_28290;
var inst_28290__$1 = tmp28373;
var inst_28291__$1 = tmp28372;
var inst_28292__$1 = tmp28371;
var inst_28293__$1 = inst_28306;
var state_28350__$1 = (function (){var statearr_28377 = state_28350;
(statearr_28377[(20)] = inst_28292__$1);

(statearr_28377[(10)] = inst_28293__$1);

(statearr_28377[(22)] = inst_28305);

(statearr_28377[(11)] = inst_28291__$1);

(statearr_28377[(21)] = inst_28290__$1);

return statearr_28377;
})();
var statearr_28378_28452 = state_28350__$1;
(statearr_28378_28452[(2)] = null);

(statearr_28378_28452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (40))){
var inst_28318 = (state_28350[(23)]);
var inst_28322 = done.call(null,null);
var inst_28323 = cljs.core.async.untap_STAR_.call(null,m,inst_28318);
var state_28350__$1 = (function (){var statearr_28379 = state_28350;
(statearr_28379[(24)] = inst_28322);

return statearr_28379;
})();
var statearr_28380_28453 = state_28350__$1;
(statearr_28380_28453[(2)] = inst_28323);

(statearr_28380_28453[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (33))){
var inst_28309 = (state_28350[(25)]);
var inst_28311 = cljs.core.chunked_seq_QMARK_.call(null,inst_28309);
var state_28350__$1 = state_28350;
if(inst_28311){
var statearr_28381_28454 = state_28350__$1;
(statearr_28381_28454[(1)] = (36));

} else {
var statearr_28382_28455 = state_28350__$1;
(statearr_28382_28455[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (13))){
var inst_28239 = (state_28350[(26)]);
var inst_28242 = cljs.core.async.close_BANG_.call(null,inst_28239);
var state_28350__$1 = state_28350;
var statearr_28383_28456 = state_28350__$1;
(statearr_28383_28456[(2)] = inst_28242);

(statearr_28383_28456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (22))){
var inst_28262 = (state_28350[(8)]);
var inst_28265 = cljs.core.async.close_BANG_.call(null,inst_28262);
var state_28350__$1 = state_28350;
var statearr_28384_28457 = state_28350__$1;
(statearr_28384_28457[(2)] = inst_28265);

(statearr_28384_28457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (36))){
var inst_28309 = (state_28350[(25)]);
var inst_28313 = cljs.core.chunk_first.call(null,inst_28309);
var inst_28314 = cljs.core.chunk_rest.call(null,inst_28309);
var inst_28315 = cljs.core.count.call(null,inst_28313);
var inst_28290 = inst_28314;
var inst_28291 = inst_28313;
var inst_28292 = inst_28315;
var inst_28293 = (0);
var state_28350__$1 = (function (){var statearr_28385 = state_28350;
(statearr_28385[(20)] = inst_28292);

(statearr_28385[(10)] = inst_28293);

(statearr_28385[(11)] = inst_28291);

(statearr_28385[(21)] = inst_28290);

return statearr_28385;
})();
var statearr_28386_28458 = state_28350__$1;
(statearr_28386_28458[(2)] = null);

(statearr_28386_28458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (41))){
var inst_28309 = (state_28350[(25)]);
var inst_28325 = (state_28350[(2)]);
var inst_28326 = cljs.core.next.call(null,inst_28309);
var inst_28290 = inst_28326;
var inst_28291 = null;
var inst_28292 = (0);
var inst_28293 = (0);
var state_28350__$1 = (function (){var statearr_28387 = state_28350;
(statearr_28387[(20)] = inst_28292);

(statearr_28387[(10)] = inst_28293);

(statearr_28387[(11)] = inst_28291);

(statearr_28387[(27)] = inst_28325);

(statearr_28387[(21)] = inst_28290);

return statearr_28387;
})();
var statearr_28388_28459 = state_28350__$1;
(statearr_28388_28459[(2)] = null);

(statearr_28388_28459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (43))){
var state_28350__$1 = state_28350;
var statearr_28389_28460 = state_28350__$1;
(statearr_28389_28460[(2)] = null);

(statearr_28389_28460[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (29))){
var inst_28334 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28390_28461 = state_28350__$1;
(statearr_28390_28461[(2)] = inst_28334);

(statearr_28390_28461[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (44))){
var inst_28343 = (state_28350[(2)]);
var state_28350__$1 = (function (){var statearr_28391 = state_28350;
(statearr_28391[(28)] = inst_28343);

return statearr_28391;
})();
var statearr_28392_28462 = state_28350__$1;
(statearr_28392_28462[(2)] = null);

(statearr_28392_28462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (6))){
var inst_28282 = (state_28350[(29)]);
var inst_28281 = cljs.core.deref.call(null,cs);
var inst_28282__$1 = cljs.core.keys.call(null,inst_28281);
var inst_28283 = cljs.core.count.call(null,inst_28282__$1);
var inst_28284 = cljs.core.reset_BANG_.call(null,dctr,inst_28283);
var inst_28289 = cljs.core.seq.call(null,inst_28282__$1);
var inst_28290 = inst_28289;
var inst_28291 = null;
var inst_28292 = (0);
var inst_28293 = (0);
var state_28350__$1 = (function (){var statearr_28393 = state_28350;
(statearr_28393[(20)] = inst_28292);

(statearr_28393[(10)] = inst_28293);

(statearr_28393[(30)] = inst_28284);

(statearr_28393[(29)] = inst_28282__$1);

(statearr_28393[(11)] = inst_28291);

(statearr_28393[(21)] = inst_28290);

return statearr_28393;
})();
var statearr_28394_28463 = state_28350__$1;
(statearr_28394_28463[(2)] = null);

(statearr_28394_28463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (28))){
var inst_28309 = (state_28350[(25)]);
var inst_28290 = (state_28350[(21)]);
var inst_28309__$1 = cljs.core.seq.call(null,inst_28290);
var state_28350__$1 = (function (){var statearr_28395 = state_28350;
(statearr_28395[(25)] = inst_28309__$1);

return statearr_28395;
})();
if(inst_28309__$1){
var statearr_28396_28464 = state_28350__$1;
(statearr_28396_28464[(1)] = (33));

} else {
var statearr_28397_28465 = state_28350__$1;
(statearr_28397_28465[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (25))){
var inst_28292 = (state_28350[(20)]);
var inst_28293 = (state_28350[(10)]);
var inst_28295 = (inst_28293 < inst_28292);
var inst_28296 = inst_28295;
var state_28350__$1 = state_28350;
if(cljs.core.truth_(inst_28296)){
var statearr_28398_28466 = state_28350__$1;
(statearr_28398_28466[(1)] = (27));

} else {
var statearr_28399_28467 = state_28350__$1;
(statearr_28399_28467[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (34))){
var state_28350__$1 = state_28350;
var statearr_28400_28468 = state_28350__$1;
(statearr_28400_28468[(2)] = null);

(statearr_28400_28468[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (17))){
var state_28350__$1 = state_28350;
var statearr_28401_28469 = state_28350__$1;
(statearr_28401_28469[(2)] = null);

(statearr_28401_28469[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (3))){
var inst_28348 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28350__$1,inst_28348);
} else {
if((state_val_28351 === (12))){
var inst_28277 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28402_28470 = state_28350__$1;
(statearr_28402_28470[(2)] = inst_28277);

(statearr_28402_28470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (2))){
var state_28350__$1 = state_28350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28350__$1,(4),ch);
} else {
if((state_val_28351 === (23))){
var state_28350__$1 = state_28350;
var statearr_28403_28471 = state_28350__$1;
(statearr_28403_28471[(2)] = null);

(statearr_28403_28471[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (35))){
var inst_28332 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28404_28472 = state_28350__$1;
(statearr_28404_28472[(2)] = inst_28332);

(statearr_28404_28472[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (19))){
var inst_28249 = (state_28350[(7)]);
var inst_28253 = cljs.core.chunk_first.call(null,inst_28249);
var inst_28254 = cljs.core.chunk_rest.call(null,inst_28249);
var inst_28255 = cljs.core.count.call(null,inst_28253);
var inst_28227 = inst_28254;
var inst_28228 = inst_28253;
var inst_28229 = inst_28255;
var inst_28230 = (0);
var state_28350__$1 = (function (){var statearr_28405 = state_28350;
(statearr_28405[(14)] = inst_28230);

(statearr_28405[(15)] = inst_28229);

(statearr_28405[(16)] = inst_28227);

(statearr_28405[(17)] = inst_28228);

return statearr_28405;
})();
var statearr_28406_28473 = state_28350__$1;
(statearr_28406_28473[(2)] = null);

(statearr_28406_28473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (11))){
var inst_28249 = (state_28350[(7)]);
var inst_28227 = (state_28350[(16)]);
var inst_28249__$1 = cljs.core.seq.call(null,inst_28227);
var state_28350__$1 = (function (){var statearr_28407 = state_28350;
(statearr_28407[(7)] = inst_28249__$1);

return statearr_28407;
})();
if(inst_28249__$1){
var statearr_28408_28474 = state_28350__$1;
(statearr_28408_28474[(1)] = (16));

} else {
var statearr_28409_28475 = state_28350__$1;
(statearr_28409_28475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (9))){
var inst_28279 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28410_28476 = state_28350__$1;
(statearr_28410_28476[(2)] = inst_28279);

(statearr_28410_28476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (5))){
var inst_28225 = cljs.core.deref.call(null,cs);
var inst_28226 = cljs.core.seq.call(null,inst_28225);
var inst_28227 = inst_28226;
var inst_28228 = null;
var inst_28229 = (0);
var inst_28230 = (0);
var state_28350__$1 = (function (){var statearr_28411 = state_28350;
(statearr_28411[(14)] = inst_28230);

(statearr_28411[(15)] = inst_28229);

(statearr_28411[(16)] = inst_28227);

(statearr_28411[(17)] = inst_28228);

return statearr_28411;
})();
var statearr_28412_28477 = state_28350__$1;
(statearr_28412_28477[(2)] = null);

(statearr_28412_28477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (14))){
var state_28350__$1 = state_28350;
var statearr_28413_28478 = state_28350__$1;
(statearr_28413_28478[(2)] = null);

(statearr_28413_28478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (45))){
var inst_28340 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28414_28479 = state_28350__$1;
(statearr_28414_28479[(2)] = inst_28340);

(statearr_28414_28479[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (26))){
var inst_28282 = (state_28350[(29)]);
var inst_28336 = (state_28350[(2)]);
var inst_28337 = cljs.core.seq.call(null,inst_28282);
var state_28350__$1 = (function (){var statearr_28415 = state_28350;
(statearr_28415[(31)] = inst_28336);

return statearr_28415;
})();
if(inst_28337){
var statearr_28416_28480 = state_28350__$1;
(statearr_28416_28480[(1)] = (42));

} else {
var statearr_28417_28481 = state_28350__$1;
(statearr_28417_28481[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (16))){
var inst_28249 = (state_28350[(7)]);
var inst_28251 = cljs.core.chunked_seq_QMARK_.call(null,inst_28249);
var state_28350__$1 = state_28350;
if(inst_28251){
var statearr_28418_28482 = state_28350__$1;
(statearr_28418_28482[(1)] = (19));

} else {
var statearr_28419_28483 = state_28350__$1;
(statearr_28419_28483[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (38))){
var inst_28329 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28420_28484 = state_28350__$1;
(statearr_28420_28484[(2)] = inst_28329);

(statearr_28420_28484[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (30))){
var state_28350__$1 = state_28350;
var statearr_28421_28485 = state_28350__$1;
(statearr_28421_28485[(2)] = null);

(statearr_28421_28485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (10))){
var inst_28230 = (state_28350[(14)]);
var inst_28228 = (state_28350[(17)]);
var inst_28238 = cljs.core._nth.call(null,inst_28228,inst_28230);
var inst_28239 = cljs.core.nth.call(null,inst_28238,(0),null);
var inst_28240 = cljs.core.nth.call(null,inst_28238,(1),null);
var state_28350__$1 = (function (){var statearr_28422 = state_28350;
(statearr_28422[(26)] = inst_28239);

return statearr_28422;
})();
if(cljs.core.truth_(inst_28240)){
var statearr_28423_28486 = state_28350__$1;
(statearr_28423_28486[(1)] = (13));

} else {
var statearr_28424_28487 = state_28350__$1;
(statearr_28424_28487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (18))){
var inst_28275 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28425_28488 = state_28350__$1;
(statearr_28425_28488[(2)] = inst_28275);

(statearr_28425_28488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (42))){
var state_28350__$1 = state_28350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28350__$1,(45),dchan);
} else {
if((state_val_28351 === (37))){
var inst_28318 = (state_28350[(23)]);
var inst_28218 = (state_28350[(9)]);
var inst_28309 = (state_28350[(25)]);
var inst_28318__$1 = cljs.core.first.call(null,inst_28309);
var inst_28319 = cljs.core.async.put_BANG_.call(null,inst_28318__$1,inst_28218,done);
var state_28350__$1 = (function (){var statearr_28426 = state_28350;
(statearr_28426[(23)] = inst_28318__$1);

return statearr_28426;
})();
if(cljs.core.truth_(inst_28319)){
var statearr_28427_28489 = state_28350__$1;
(statearr_28427_28489[(1)] = (39));

} else {
var statearr_28428_28490 = state_28350__$1;
(statearr_28428_28490[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (8))){
var inst_28230 = (state_28350[(14)]);
var inst_28229 = (state_28350[(15)]);
var inst_28232 = (inst_28230 < inst_28229);
var inst_28233 = inst_28232;
var state_28350__$1 = state_28350;
if(cljs.core.truth_(inst_28233)){
var statearr_28429_28491 = state_28350__$1;
(statearr_28429_28491[(1)] = (10));

} else {
var statearr_28430_28492 = state_28350__$1;
(statearr_28430_28492[(1)] = (11));

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
});})(c__27115__auto___28438,cs,m,dchan,dctr,done))
;
return ((function (switch__27003__auto__,c__27115__auto___28438,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27004__auto__ = null;
var cljs$core$async$mult_$_state_machine__27004__auto____0 = (function (){
var statearr_28434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28434[(0)] = cljs$core$async$mult_$_state_machine__27004__auto__);

(statearr_28434[(1)] = (1));

return statearr_28434;
});
var cljs$core$async$mult_$_state_machine__27004__auto____1 = (function (state_28350){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_28350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e28435){if((e28435 instanceof Object)){
var ex__27007__auto__ = e28435;
var statearr_28436_28493 = state_28350;
(statearr_28436_28493[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28494 = state_28350;
state_28350 = G__28494;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27004__auto__ = function(state_28350){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27004__auto____1.call(this,state_28350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27004__auto____0;
cljs$core$async$mult_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27004__auto____1;
return cljs$core$async$mult_$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___28438,cs,m,dchan,dctr,done))
})();
var state__27117__auto__ = (function (){var statearr_28437 = f__27116__auto__.call(null);
(statearr_28437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___28438);

return statearr_28437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___28438,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28495 = [];
var len__25852__auto___28498 = arguments.length;
var i__25853__auto___28499 = (0);
while(true){
if((i__25853__auto___28499 < len__25852__auto___28498)){
args28495.push((arguments[i__25853__auto___28499]));

var G__28500 = (i__25853__auto___28499 + (1));
i__25853__auto___28499 = G__28500;
continue;
} else {
}
break;
}

var G__28497 = args28495.length;
switch (G__28497) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28495.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m);
} else {
var m__25441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,state_map);
} else {
var m__25441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,mode);
} else {
var m__25441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___28512 = arguments.length;
var i__25853__auto___28513 = (0);
while(true){
if((i__25853__auto___28513 < len__25852__auto___28512)){
args__25859__auto__.push((arguments[i__25853__auto___28513]));

var G__28514 = (i__25853__auto___28513 + (1));
i__25853__auto___28513 = G__28514;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((3) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25860__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28506){
var map__28507 = p__28506;
var map__28507__$1 = ((((!((map__28507 == null)))?((((map__28507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28507):map__28507);
var opts = map__28507__$1;
var statearr_28509_28515 = state;
(statearr_28509_28515[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28507,map__28507__$1,opts){
return (function (val){
var statearr_28510_28516 = state;
(statearr_28510_28516[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28507,map__28507__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28511_28517 = state;
(statearr_28511_28517[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28502){
var G__28503 = cljs.core.first.call(null,seq28502);
var seq28502__$1 = cljs.core.next.call(null,seq28502);
var G__28504 = cljs.core.first.call(null,seq28502__$1);
var seq28502__$2 = cljs.core.next.call(null,seq28502__$1);
var G__28505 = cljs.core.first.call(null,seq28502__$2);
var seq28502__$3 = cljs.core.next.call(null,seq28502__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28503,G__28504,G__28505,seq28502__$3);
});

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28683 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28684){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28684 = meta28684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28685,meta28684__$1){
var self__ = this;
var _28685__$1 = this;
return (new cljs.core.async.t_cljs$core$async28683(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28684__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28685){
var self__ = this;
var _28685__$1 = this;
return self__.meta28684;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28683.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28683.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28683.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28683.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28683.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28683.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28683.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28683.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28684","meta28684",1025616964,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28683";

cljs.core.async.t_cljs$core$async28683.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async28683");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28683 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28683(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28684){
return (new cljs.core.async.t_cljs$core$async28683(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28684));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28683(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27115__auto___28848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___28848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___28848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28785){
var state_val_28786 = (state_28785[(1)]);
if((state_val_28786 === (7))){
var inst_28701 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
var statearr_28787_28849 = state_28785__$1;
(statearr_28787_28849[(2)] = inst_28701);

(statearr_28787_28849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (20))){
var inst_28713 = (state_28785[(7)]);
var state_28785__$1 = state_28785;
var statearr_28788_28850 = state_28785__$1;
(statearr_28788_28850[(2)] = inst_28713);

(statearr_28788_28850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (27))){
var state_28785__$1 = state_28785;
var statearr_28789_28851 = state_28785__$1;
(statearr_28789_28851[(2)] = null);

(statearr_28789_28851[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (1))){
var inst_28689 = (state_28785[(8)]);
var inst_28689__$1 = calc_state.call(null);
var inst_28691 = (inst_28689__$1 == null);
var inst_28692 = cljs.core.not.call(null,inst_28691);
var state_28785__$1 = (function (){var statearr_28790 = state_28785;
(statearr_28790[(8)] = inst_28689__$1);

return statearr_28790;
})();
if(inst_28692){
var statearr_28791_28852 = state_28785__$1;
(statearr_28791_28852[(1)] = (2));

} else {
var statearr_28792_28853 = state_28785__$1;
(statearr_28792_28853[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (24))){
var inst_28759 = (state_28785[(9)]);
var inst_28736 = (state_28785[(10)]);
var inst_28745 = (state_28785[(11)]);
var inst_28759__$1 = inst_28736.call(null,inst_28745);
var state_28785__$1 = (function (){var statearr_28793 = state_28785;
(statearr_28793[(9)] = inst_28759__$1);

return statearr_28793;
})();
if(cljs.core.truth_(inst_28759__$1)){
var statearr_28794_28854 = state_28785__$1;
(statearr_28794_28854[(1)] = (29));

} else {
var statearr_28795_28855 = state_28785__$1;
(statearr_28795_28855[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (4))){
var inst_28704 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
if(cljs.core.truth_(inst_28704)){
var statearr_28796_28856 = state_28785__$1;
(statearr_28796_28856[(1)] = (8));

} else {
var statearr_28797_28857 = state_28785__$1;
(statearr_28797_28857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (15))){
var inst_28730 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
if(cljs.core.truth_(inst_28730)){
var statearr_28798_28858 = state_28785__$1;
(statearr_28798_28858[(1)] = (19));

} else {
var statearr_28799_28859 = state_28785__$1;
(statearr_28799_28859[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (21))){
var inst_28735 = (state_28785[(12)]);
var inst_28735__$1 = (state_28785[(2)]);
var inst_28736 = cljs.core.get.call(null,inst_28735__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28737 = cljs.core.get.call(null,inst_28735__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28738 = cljs.core.get.call(null,inst_28735__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28785__$1 = (function (){var statearr_28800 = state_28785;
(statearr_28800[(10)] = inst_28736);

(statearr_28800[(12)] = inst_28735__$1);

(statearr_28800[(13)] = inst_28737);

return statearr_28800;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28785__$1,(22),inst_28738);
} else {
if((state_val_28786 === (31))){
var inst_28767 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
if(cljs.core.truth_(inst_28767)){
var statearr_28801_28860 = state_28785__$1;
(statearr_28801_28860[(1)] = (32));

} else {
var statearr_28802_28861 = state_28785__$1;
(statearr_28802_28861[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (32))){
var inst_28744 = (state_28785[(14)]);
var state_28785__$1 = state_28785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28785__$1,(35),out,inst_28744);
} else {
if((state_val_28786 === (33))){
var inst_28735 = (state_28785[(12)]);
var inst_28713 = inst_28735;
var state_28785__$1 = (function (){var statearr_28803 = state_28785;
(statearr_28803[(7)] = inst_28713);

return statearr_28803;
})();
var statearr_28804_28862 = state_28785__$1;
(statearr_28804_28862[(2)] = null);

(statearr_28804_28862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (13))){
var inst_28713 = (state_28785[(7)]);
var inst_28720 = inst_28713.cljs$lang$protocol_mask$partition0$;
var inst_28721 = (inst_28720 & (64));
var inst_28722 = inst_28713.cljs$core$ISeq$;
var inst_28723 = (inst_28721) || (inst_28722);
var state_28785__$1 = state_28785;
if(cljs.core.truth_(inst_28723)){
var statearr_28805_28863 = state_28785__$1;
(statearr_28805_28863[(1)] = (16));

} else {
var statearr_28806_28864 = state_28785__$1;
(statearr_28806_28864[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (22))){
var inst_28744 = (state_28785[(14)]);
var inst_28745 = (state_28785[(11)]);
var inst_28743 = (state_28785[(2)]);
var inst_28744__$1 = cljs.core.nth.call(null,inst_28743,(0),null);
var inst_28745__$1 = cljs.core.nth.call(null,inst_28743,(1),null);
var inst_28746 = (inst_28744__$1 == null);
var inst_28747 = cljs.core._EQ_.call(null,inst_28745__$1,change);
var inst_28748 = (inst_28746) || (inst_28747);
var state_28785__$1 = (function (){var statearr_28807 = state_28785;
(statearr_28807[(14)] = inst_28744__$1);

(statearr_28807[(11)] = inst_28745__$1);

return statearr_28807;
})();
if(cljs.core.truth_(inst_28748)){
var statearr_28808_28865 = state_28785__$1;
(statearr_28808_28865[(1)] = (23));

} else {
var statearr_28809_28866 = state_28785__$1;
(statearr_28809_28866[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (36))){
var inst_28735 = (state_28785[(12)]);
var inst_28713 = inst_28735;
var state_28785__$1 = (function (){var statearr_28810 = state_28785;
(statearr_28810[(7)] = inst_28713);

return statearr_28810;
})();
var statearr_28811_28867 = state_28785__$1;
(statearr_28811_28867[(2)] = null);

(statearr_28811_28867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (29))){
var inst_28759 = (state_28785[(9)]);
var state_28785__$1 = state_28785;
var statearr_28812_28868 = state_28785__$1;
(statearr_28812_28868[(2)] = inst_28759);

(statearr_28812_28868[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (6))){
var state_28785__$1 = state_28785;
var statearr_28813_28869 = state_28785__$1;
(statearr_28813_28869[(2)] = false);

(statearr_28813_28869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (28))){
var inst_28755 = (state_28785[(2)]);
var inst_28756 = calc_state.call(null);
var inst_28713 = inst_28756;
var state_28785__$1 = (function (){var statearr_28814 = state_28785;
(statearr_28814[(7)] = inst_28713);

(statearr_28814[(15)] = inst_28755);

return statearr_28814;
})();
var statearr_28815_28870 = state_28785__$1;
(statearr_28815_28870[(2)] = null);

(statearr_28815_28870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (25))){
var inst_28781 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
var statearr_28816_28871 = state_28785__$1;
(statearr_28816_28871[(2)] = inst_28781);

(statearr_28816_28871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (34))){
var inst_28779 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
var statearr_28817_28872 = state_28785__$1;
(statearr_28817_28872[(2)] = inst_28779);

(statearr_28817_28872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (17))){
var state_28785__$1 = state_28785;
var statearr_28818_28873 = state_28785__$1;
(statearr_28818_28873[(2)] = false);

(statearr_28818_28873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (3))){
var state_28785__$1 = state_28785;
var statearr_28819_28874 = state_28785__$1;
(statearr_28819_28874[(2)] = false);

(statearr_28819_28874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (12))){
var inst_28783 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28785__$1,inst_28783);
} else {
if((state_val_28786 === (2))){
var inst_28689 = (state_28785[(8)]);
var inst_28694 = inst_28689.cljs$lang$protocol_mask$partition0$;
var inst_28695 = (inst_28694 & (64));
var inst_28696 = inst_28689.cljs$core$ISeq$;
var inst_28697 = (inst_28695) || (inst_28696);
var state_28785__$1 = state_28785;
if(cljs.core.truth_(inst_28697)){
var statearr_28820_28875 = state_28785__$1;
(statearr_28820_28875[(1)] = (5));

} else {
var statearr_28821_28876 = state_28785__$1;
(statearr_28821_28876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (23))){
var inst_28744 = (state_28785[(14)]);
var inst_28750 = (inst_28744 == null);
var state_28785__$1 = state_28785;
if(cljs.core.truth_(inst_28750)){
var statearr_28822_28877 = state_28785__$1;
(statearr_28822_28877[(1)] = (26));

} else {
var statearr_28823_28878 = state_28785__$1;
(statearr_28823_28878[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (35))){
var inst_28770 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
if(cljs.core.truth_(inst_28770)){
var statearr_28824_28879 = state_28785__$1;
(statearr_28824_28879[(1)] = (36));

} else {
var statearr_28825_28880 = state_28785__$1;
(statearr_28825_28880[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (19))){
var inst_28713 = (state_28785[(7)]);
var inst_28732 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28713);
var state_28785__$1 = state_28785;
var statearr_28826_28881 = state_28785__$1;
(statearr_28826_28881[(2)] = inst_28732);

(statearr_28826_28881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (11))){
var inst_28713 = (state_28785[(7)]);
var inst_28717 = (inst_28713 == null);
var inst_28718 = cljs.core.not.call(null,inst_28717);
var state_28785__$1 = state_28785;
if(inst_28718){
var statearr_28827_28882 = state_28785__$1;
(statearr_28827_28882[(1)] = (13));

} else {
var statearr_28828_28883 = state_28785__$1;
(statearr_28828_28883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (9))){
var inst_28689 = (state_28785[(8)]);
var state_28785__$1 = state_28785;
var statearr_28829_28884 = state_28785__$1;
(statearr_28829_28884[(2)] = inst_28689);

(statearr_28829_28884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (5))){
var state_28785__$1 = state_28785;
var statearr_28830_28885 = state_28785__$1;
(statearr_28830_28885[(2)] = true);

(statearr_28830_28885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (14))){
var state_28785__$1 = state_28785;
var statearr_28831_28886 = state_28785__$1;
(statearr_28831_28886[(2)] = false);

(statearr_28831_28886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (26))){
var inst_28745 = (state_28785[(11)]);
var inst_28752 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28745);
var state_28785__$1 = state_28785;
var statearr_28832_28887 = state_28785__$1;
(statearr_28832_28887[(2)] = inst_28752);

(statearr_28832_28887[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (16))){
var state_28785__$1 = state_28785;
var statearr_28833_28888 = state_28785__$1;
(statearr_28833_28888[(2)] = true);

(statearr_28833_28888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (38))){
var inst_28775 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
var statearr_28834_28889 = state_28785__$1;
(statearr_28834_28889[(2)] = inst_28775);

(statearr_28834_28889[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (30))){
var inst_28736 = (state_28785[(10)]);
var inst_28737 = (state_28785[(13)]);
var inst_28745 = (state_28785[(11)]);
var inst_28762 = cljs.core.empty_QMARK_.call(null,inst_28736);
var inst_28763 = inst_28737.call(null,inst_28745);
var inst_28764 = cljs.core.not.call(null,inst_28763);
var inst_28765 = (inst_28762) && (inst_28764);
var state_28785__$1 = state_28785;
var statearr_28835_28890 = state_28785__$1;
(statearr_28835_28890[(2)] = inst_28765);

(statearr_28835_28890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (10))){
var inst_28689 = (state_28785[(8)]);
var inst_28709 = (state_28785[(2)]);
var inst_28710 = cljs.core.get.call(null,inst_28709,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28711 = cljs.core.get.call(null,inst_28709,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28712 = cljs.core.get.call(null,inst_28709,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28713 = inst_28689;
var state_28785__$1 = (function (){var statearr_28836 = state_28785;
(statearr_28836[(7)] = inst_28713);

(statearr_28836[(16)] = inst_28711);

(statearr_28836[(17)] = inst_28710);

(statearr_28836[(18)] = inst_28712);

return statearr_28836;
})();
var statearr_28837_28891 = state_28785__$1;
(statearr_28837_28891[(2)] = null);

(statearr_28837_28891[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (18))){
var inst_28727 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
var statearr_28838_28892 = state_28785__$1;
(statearr_28838_28892[(2)] = inst_28727);

(statearr_28838_28892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (37))){
var state_28785__$1 = state_28785;
var statearr_28839_28893 = state_28785__$1;
(statearr_28839_28893[(2)] = null);

(statearr_28839_28893[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (8))){
var inst_28689 = (state_28785[(8)]);
var inst_28706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28689);
var state_28785__$1 = state_28785;
var statearr_28840_28894 = state_28785__$1;
(statearr_28840_28894[(2)] = inst_28706);

(statearr_28840_28894[(1)] = (10));


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
});})(c__27115__auto___28848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27003__auto__,c__27115__auto___28848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27004__auto__ = null;
var cljs$core$async$mix_$_state_machine__27004__auto____0 = (function (){
var statearr_28844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28844[(0)] = cljs$core$async$mix_$_state_machine__27004__auto__);

(statearr_28844[(1)] = (1));

return statearr_28844;
});
var cljs$core$async$mix_$_state_machine__27004__auto____1 = (function (state_28785){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_28785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e28845){if((e28845 instanceof Object)){
var ex__27007__auto__ = e28845;
var statearr_28846_28895 = state_28785;
(statearr_28846_28895[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28896 = state_28785;
state_28785 = G__28896;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27004__auto__ = function(state_28785){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27004__auto____1.call(this,state_28785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27004__auto____0;
cljs$core$async$mix_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27004__auto____1;
return cljs$core$async$mix_$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___28848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27117__auto__ = (function (){var statearr_28847 = f__27116__auto__.call(null);
(statearr_28847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___28848);

return statearr_28847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___28848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p,v,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28897 = [];
var len__25852__auto___28900 = arguments.length;
var i__25853__auto___28901 = (0);
while(true){
if((i__25853__auto___28901 < len__25852__auto___28900)){
args28897.push((arguments[i__25853__auto___28901]));

var G__28902 = (i__25853__auto___28901 + (1));
i__25853__auto___28901 = G__28902;
continue;
} else {
}
break;
}

var G__28899 = args28897.length;
switch (G__28899) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28897.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p);
} else {
var m__25441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p,v);
} else {
var m__25441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args28905 = [];
var len__25852__auto___29030 = arguments.length;
var i__25853__auto___29031 = (0);
while(true){
if((i__25853__auto___29031 < len__25852__auto___29030)){
args28905.push((arguments[i__25853__auto___29031]));

var G__29032 = (i__25853__auto___29031 + (1));
i__25853__auto___29031 = G__29032;
continue;
} else {
}
break;
}

var G__28907 = args28905.length;
switch (G__28907) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28905.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24777__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24777__auto__,mults){
return (function (p1__28904_SHARP_){
if(cljs.core.truth_(p1__28904_SHARP_.call(null,topic))){
return p1__28904_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28904_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24777__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28908 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28909){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28909 = meta28909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28910,meta28909__$1){
var self__ = this;
var _28910__$1 = this;
return (new cljs.core.async.t_cljs$core$async28908(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28909__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28910){
var self__ = this;
var _28910__$1 = this;
return self__.meta28909;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28908.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28908.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28908.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28908.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28908.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28908.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28908.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28909","meta28909",-458142418,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28908";

cljs.core.async.t_cljs$core$async28908.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async28908");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28908 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28908(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28909){
return (new cljs.core.async.t_cljs$core$async28908(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28909));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28908(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27115__auto___29034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___29034,mults,ensure_mult,p){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___29034,mults,ensure_mult,p){
return (function (state_28982){
var state_val_28983 = (state_28982[(1)]);
if((state_val_28983 === (7))){
var inst_28978 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_28984_29035 = state_28982__$1;
(statearr_28984_29035[(2)] = inst_28978);

(statearr_28984_29035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (20))){
var state_28982__$1 = state_28982;
var statearr_28985_29036 = state_28982__$1;
(statearr_28985_29036[(2)] = null);

(statearr_28985_29036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (1))){
var state_28982__$1 = state_28982;
var statearr_28986_29037 = state_28982__$1;
(statearr_28986_29037[(2)] = null);

(statearr_28986_29037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (24))){
var inst_28961 = (state_28982[(7)]);
var inst_28970 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28961);
var state_28982__$1 = state_28982;
var statearr_28987_29038 = state_28982__$1;
(statearr_28987_29038[(2)] = inst_28970);

(statearr_28987_29038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (4))){
var inst_28913 = (state_28982[(8)]);
var inst_28913__$1 = (state_28982[(2)]);
var inst_28914 = (inst_28913__$1 == null);
var state_28982__$1 = (function (){var statearr_28988 = state_28982;
(statearr_28988[(8)] = inst_28913__$1);

return statearr_28988;
})();
if(cljs.core.truth_(inst_28914)){
var statearr_28989_29039 = state_28982__$1;
(statearr_28989_29039[(1)] = (5));

} else {
var statearr_28990_29040 = state_28982__$1;
(statearr_28990_29040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (15))){
var inst_28955 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_28991_29041 = state_28982__$1;
(statearr_28991_29041[(2)] = inst_28955);

(statearr_28991_29041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (21))){
var inst_28975 = (state_28982[(2)]);
var state_28982__$1 = (function (){var statearr_28992 = state_28982;
(statearr_28992[(9)] = inst_28975);

return statearr_28992;
})();
var statearr_28993_29042 = state_28982__$1;
(statearr_28993_29042[(2)] = null);

(statearr_28993_29042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (13))){
var inst_28937 = (state_28982[(10)]);
var inst_28939 = cljs.core.chunked_seq_QMARK_.call(null,inst_28937);
var state_28982__$1 = state_28982;
if(inst_28939){
var statearr_28994_29043 = state_28982__$1;
(statearr_28994_29043[(1)] = (16));

} else {
var statearr_28995_29044 = state_28982__$1;
(statearr_28995_29044[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (22))){
var inst_28967 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
if(cljs.core.truth_(inst_28967)){
var statearr_28996_29045 = state_28982__$1;
(statearr_28996_29045[(1)] = (23));

} else {
var statearr_28997_29046 = state_28982__$1;
(statearr_28997_29046[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (6))){
var inst_28963 = (state_28982[(11)]);
var inst_28913 = (state_28982[(8)]);
var inst_28961 = (state_28982[(7)]);
var inst_28961__$1 = topic_fn.call(null,inst_28913);
var inst_28962 = cljs.core.deref.call(null,mults);
var inst_28963__$1 = cljs.core.get.call(null,inst_28962,inst_28961__$1);
var state_28982__$1 = (function (){var statearr_28998 = state_28982;
(statearr_28998[(11)] = inst_28963__$1);

(statearr_28998[(7)] = inst_28961__$1);

return statearr_28998;
})();
if(cljs.core.truth_(inst_28963__$1)){
var statearr_28999_29047 = state_28982__$1;
(statearr_28999_29047[(1)] = (19));

} else {
var statearr_29000_29048 = state_28982__$1;
(statearr_29000_29048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (25))){
var inst_28972 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29001_29049 = state_28982__$1;
(statearr_29001_29049[(2)] = inst_28972);

(statearr_29001_29049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (17))){
var inst_28937 = (state_28982[(10)]);
var inst_28946 = cljs.core.first.call(null,inst_28937);
var inst_28947 = cljs.core.async.muxch_STAR_.call(null,inst_28946);
var inst_28948 = cljs.core.async.close_BANG_.call(null,inst_28947);
var inst_28949 = cljs.core.next.call(null,inst_28937);
var inst_28923 = inst_28949;
var inst_28924 = null;
var inst_28925 = (0);
var inst_28926 = (0);
var state_28982__$1 = (function (){var statearr_29002 = state_28982;
(statearr_29002[(12)] = inst_28924);

(statearr_29002[(13)] = inst_28923);

(statearr_29002[(14)] = inst_28925);

(statearr_29002[(15)] = inst_28926);

(statearr_29002[(16)] = inst_28948);

return statearr_29002;
})();
var statearr_29003_29050 = state_28982__$1;
(statearr_29003_29050[(2)] = null);

(statearr_29003_29050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (3))){
var inst_28980 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28982__$1,inst_28980);
} else {
if((state_val_28983 === (12))){
var inst_28957 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29004_29051 = state_28982__$1;
(statearr_29004_29051[(2)] = inst_28957);

(statearr_29004_29051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (2))){
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28982__$1,(4),ch);
} else {
if((state_val_28983 === (23))){
var state_28982__$1 = state_28982;
var statearr_29005_29052 = state_28982__$1;
(statearr_29005_29052[(2)] = null);

(statearr_29005_29052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (19))){
var inst_28963 = (state_28982[(11)]);
var inst_28913 = (state_28982[(8)]);
var inst_28965 = cljs.core.async.muxch_STAR_.call(null,inst_28963);
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28982__$1,(22),inst_28965,inst_28913);
} else {
if((state_val_28983 === (11))){
var inst_28923 = (state_28982[(13)]);
var inst_28937 = (state_28982[(10)]);
var inst_28937__$1 = cljs.core.seq.call(null,inst_28923);
var state_28982__$1 = (function (){var statearr_29006 = state_28982;
(statearr_29006[(10)] = inst_28937__$1);

return statearr_29006;
})();
if(inst_28937__$1){
var statearr_29007_29053 = state_28982__$1;
(statearr_29007_29053[(1)] = (13));

} else {
var statearr_29008_29054 = state_28982__$1;
(statearr_29008_29054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (9))){
var inst_28959 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29009_29055 = state_28982__$1;
(statearr_29009_29055[(2)] = inst_28959);

(statearr_29009_29055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (5))){
var inst_28920 = cljs.core.deref.call(null,mults);
var inst_28921 = cljs.core.vals.call(null,inst_28920);
var inst_28922 = cljs.core.seq.call(null,inst_28921);
var inst_28923 = inst_28922;
var inst_28924 = null;
var inst_28925 = (0);
var inst_28926 = (0);
var state_28982__$1 = (function (){var statearr_29010 = state_28982;
(statearr_29010[(12)] = inst_28924);

(statearr_29010[(13)] = inst_28923);

(statearr_29010[(14)] = inst_28925);

(statearr_29010[(15)] = inst_28926);

return statearr_29010;
})();
var statearr_29011_29056 = state_28982__$1;
(statearr_29011_29056[(2)] = null);

(statearr_29011_29056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (14))){
var state_28982__$1 = state_28982;
var statearr_29015_29057 = state_28982__$1;
(statearr_29015_29057[(2)] = null);

(statearr_29015_29057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (16))){
var inst_28937 = (state_28982[(10)]);
var inst_28941 = cljs.core.chunk_first.call(null,inst_28937);
var inst_28942 = cljs.core.chunk_rest.call(null,inst_28937);
var inst_28943 = cljs.core.count.call(null,inst_28941);
var inst_28923 = inst_28942;
var inst_28924 = inst_28941;
var inst_28925 = inst_28943;
var inst_28926 = (0);
var state_28982__$1 = (function (){var statearr_29016 = state_28982;
(statearr_29016[(12)] = inst_28924);

(statearr_29016[(13)] = inst_28923);

(statearr_29016[(14)] = inst_28925);

(statearr_29016[(15)] = inst_28926);

return statearr_29016;
})();
var statearr_29017_29058 = state_28982__$1;
(statearr_29017_29058[(2)] = null);

(statearr_29017_29058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (10))){
var inst_28924 = (state_28982[(12)]);
var inst_28923 = (state_28982[(13)]);
var inst_28925 = (state_28982[(14)]);
var inst_28926 = (state_28982[(15)]);
var inst_28931 = cljs.core._nth.call(null,inst_28924,inst_28926);
var inst_28932 = cljs.core.async.muxch_STAR_.call(null,inst_28931);
var inst_28933 = cljs.core.async.close_BANG_.call(null,inst_28932);
var inst_28934 = (inst_28926 + (1));
var tmp29012 = inst_28924;
var tmp29013 = inst_28923;
var tmp29014 = inst_28925;
var inst_28923__$1 = tmp29013;
var inst_28924__$1 = tmp29012;
var inst_28925__$1 = tmp29014;
var inst_28926__$1 = inst_28934;
var state_28982__$1 = (function (){var statearr_29018 = state_28982;
(statearr_29018[(12)] = inst_28924__$1);

(statearr_29018[(13)] = inst_28923__$1);

(statearr_29018[(14)] = inst_28925__$1);

(statearr_29018[(15)] = inst_28926__$1);

(statearr_29018[(17)] = inst_28933);

return statearr_29018;
})();
var statearr_29019_29059 = state_28982__$1;
(statearr_29019_29059[(2)] = null);

(statearr_29019_29059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (18))){
var inst_28952 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29020_29060 = state_28982__$1;
(statearr_29020_29060[(2)] = inst_28952);

(statearr_29020_29060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (8))){
var inst_28925 = (state_28982[(14)]);
var inst_28926 = (state_28982[(15)]);
var inst_28928 = (inst_28926 < inst_28925);
var inst_28929 = inst_28928;
var state_28982__$1 = state_28982;
if(cljs.core.truth_(inst_28929)){
var statearr_29021_29061 = state_28982__$1;
(statearr_29021_29061[(1)] = (10));

} else {
var statearr_29022_29062 = state_28982__$1;
(statearr_29022_29062[(1)] = (11));

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
});})(c__27115__auto___29034,mults,ensure_mult,p))
;
return ((function (switch__27003__auto__,c__27115__auto___29034,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27004__auto__ = null;
var cljs$core$async$state_machine__27004__auto____0 = (function (){
var statearr_29026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29026[(0)] = cljs$core$async$state_machine__27004__auto__);

(statearr_29026[(1)] = (1));

return statearr_29026;
});
var cljs$core$async$state_machine__27004__auto____1 = (function (state_28982){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_28982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e29027){if((e29027 instanceof Object)){
var ex__27007__auto__ = e29027;
var statearr_29028_29063 = state_28982;
(statearr_29028_29063[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29064 = state_28982;
state_28982 = G__29064;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$state_machine__27004__auto__ = function(state_28982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27004__auto____1.call(this,state_28982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27004__auto____0;
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27004__auto____1;
return cljs$core$async$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___29034,mults,ensure_mult,p))
})();
var state__27117__auto__ = (function (){var statearr_29029 = f__27116__auto__.call(null);
(statearr_29029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___29034);

return statearr_29029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___29034,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29065 = [];
var len__25852__auto___29068 = arguments.length;
var i__25853__auto___29069 = (0);
while(true){
if((i__25853__auto___29069 < len__25852__auto___29068)){
args29065.push((arguments[i__25853__auto___29069]));

var G__29070 = (i__25853__auto___29069 + (1));
i__25853__auto___29069 = G__29070;
continue;
} else {
}
break;
}

var G__29067 = args29065.length;
switch (G__29067) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29065.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29072 = [];
var len__25852__auto___29075 = arguments.length;
var i__25853__auto___29076 = (0);
while(true){
if((i__25853__auto___29076 < len__25852__auto___29075)){
args29072.push((arguments[i__25853__auto___29076]));

var G__29077 = (i__25853__auto___29076 + (1));
i__25853__auto___29076 = G__29077;
continue;
} else {
}
break;
}

var G__29074 = args29072.length;
switch (G__29074) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29072.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args29079 = [];
var len__25852__auto___29150 = arguments.length;
var i__25853__auto___29151 = (0);
while(true){
if((i__25853__auto___29151 < len__25852__auto___29150)){
args29079.push((arguments[i__25853__auto___29151]));

var G__29152 = (i__25853__auto___29151 + (1));
i__25853__auto___29151 = G__29152;
continue;
} else {
}
break;
}

var G__29081 = args29079.length;
switch (G__29081) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29079.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27115__auto___29154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___29154,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___29154,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29120){
var state_val_29121 = (state_29120[(1)]);
if((state_val_29121 === (7))){
var state_29120__$1 = state_29120;
var statearr_29122_29155 = state_29120__$1;
(statearr_29122_29155[(2)] = null);

(statearr_29122_29155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (1))){
var state_29120__$1 = state_29120;
var statearr_29123_29156 = state_29120__$1;
(statearr_29123_29156[(2)] = null);

(statearr_29123_29156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (4))){
var inst_29084 = (state_29120[(7)]);
var inst_29086 = (inst_29084 < cnt);
var state_29120__$1 = state_29120;
if(cljs.core.truth_(inst_29086)){
var statearr_29124_29157 = state_29120__$1;
(statearr_29124_29157[(1)] = (6));

} else {
var statearr_29125_29158 = state_29120__$1;
(statearr_29125_29158[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (15))){
var inst_29116 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
var statearr_29126_29159 = state_29120__$1;
(statearr_29126_29159[(2)] = inst_29116);

(statearr_29126_29159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (13))){
var inst_29109 = cljs.core.async.close_BANG_.call(null,out);
var state_29120__$1 = state_29120;
var statearr_29127_29160 = state_29120__$1;
(statearr_29127_29160[(2)] = inst_29109);

(statearr_29127_29160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (6))){
var state_29120__$1 = state_29120;
var statearr_29128_29161 = state_29120__$1;
(statearr_29128_29161[(2)] = null);

(statearr_29128_29161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (3))){
var inst_29118 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29120__$1,inst_29118);
} else {
if((state_val_29121 === (12))){
var inst_29106 = (state_29120[(8)]);
var inst_29106__$1 = (state_29120[(2)]);
var inst_29107 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29106__$1);
var state_29120__$1 = (function (){var statearr_29129 = state_29120;
(statearr_29129[(8)] = inst_29106__$1);

return statearr_29129;
})();
if(cljs.core.truth_(inst_29107)){
var statearr_29130_29162 = state_29120__$1;
(statearr_29130_29162[(1)] = (13));

} else {
var statearr_29131_29163 = state_29120__$1;
(statearr_29131_29163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (2))){
var inst_29083 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29084 = (0);
var state_29120__$1 = (function (){var statearr_29132 = state_29120;
(statearr_29132[(9)] = inst_29083);

(statearr_29132[(7)] = inst_29084);

return statearr_29132;
})();
var statearr_29133_29164 = state_29120__$1;
(statearr_29133_29164[(2)] = null);

(statearr_29133_29164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (11))){
var inst_29084 = (state_29120[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29120,(10),Object,null,(9));
var inst_29093 = chs__$1.call(null,inst_29084);
var inst_29094 = done.call(null,inst_29084);
var inst_29095 = cljs.core.async.take_BANG_.call(null,inst_29093,inst_29094);
var state_29120__$1 = state_29120;
var statearr_29134_29165 = state_29120__$1;
(statearr_29134_29165[(2)] = inst_29095);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29120__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (9))){
var inst_29084 = (state_29120[(7)]);
var inst_29097 = (state_29120[(2)]);
var inst_29098 = (inst_29084 + (1));
var inst_29084__$1 = inst_29098;
var state_29120__$1 = (function (){var statearr_29135 = state_29120;
(statearr_29135[(7)] = inst_29084__$1);

(statearr_29135[(10)] = inst_29097);

return statearr_29135;
})();
var statearr_29136_29166 = state_29120__$1;
(statearr_29136_29166[(2)] = null);

(statearr_29136_29166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (5))){
var inst_29104 = (state_29120[(2)]);
var state_29120__$1 = (function (){var statearr_29137 = state_29120;
(statearr_29137[(11)] = inst_29104);

return statearr_29137;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29120__$1,(12),dchan);
} else {
if((state_val_29121 === (14))){
var inst_29106 = (state_29120[(8)]);
var inst_29111 = cljs.core.apply.call(null,f,inst_29106);
var state_29120__$1 = state_29120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29120__$1,(16),out,inst_29111);
} else {
if((state_val_29121 === (16))){
var inst_29113 = (state_29120[(2)]);
var state_29120__$1 = (function (){var statearr_29138 = state_29120;
(statearr_29138[(12)] = inst_29113);

return statearr_29138;
})();
var statearr_29139_29167 = state_29120__$1;
(statearr_29139_29167[(2)] = null);

(statearr_29139_29167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (10))){
var inst_29088 = (state_29120[(2)]);
var inst_29089 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29120__$1 = (function (){var statearr_29140 = state_29120;
(statearr_29140[(13)] = inst_29088);

return statearr_29140;
})();
var statearr_29141_29168 = state_29120__$1;
(statearr_29141_29168[(2)] = inst_29089);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29120__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (8))){
var inst_29102 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
var statearr_29142_29169 = state_29120__$1;
(statearr_29142_29169[(2)] = inst_29102);

(statearr_29142_29169[(1)] = (5));


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
});})(c__27115__auto___29154,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27003__auto__,c__27115__auto___29154,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27004__auto__ = null;
var cljs$core$async$state_machine__27004__auto____0 = (function (){
var statearr_29146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29146[(0)] = cljs$core$async$state_machine__27004__auto__);

(statearr_29146[(1)] = (1));

return statearr_29146;
});
var cljs$core$async$state_machine__27004__auto____1 = (function (state_29120){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_29120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e29147){if((e29147 instanceof Object)){
var ex__27007__auto__ = e29147;
var statearr_29148_29170 = state_29120;
(statearr_29148_29170[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29171 = state_29120;
state_29120 = G__29171;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$state_machine__27004__auto__ = function(state_29120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27004__auto____1.call(this,state_29120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27004__auto____0;
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27004__auto____1;
return cljs$core$async$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___29154,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27117__auto__ = (function (){var statearr_29149 = f__27116__auto__.call(null);
(statearr_29149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___29154);

return statearr_29149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___29154,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29173 = [];
var len__25852__auto___29231 = arguments.length;
var i__25853__auto___29232 = (0);
while(true){
if((i__25853__auto___29232 < len__25852__auto___29231)){
args29173.push((arguments[i__25853__auto___29232]));

var G__29233 = (i__25853__auto___29232 + (1));
i__25853__auto___29232 = G__29233;
continue;
} else {
}
break;
}

var G__29175 = args29173.length;
switch (G__29175) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29173.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27115__auto___29235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___29235,out){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___29235,out){
return (function (state_29207){
var state_val_29208 = (state_29207[(1)]);
if((state_val_29208 === (7))){
var inst_29187 = (state_29207[(7)]);
var inst_29186 = (state_29207[(8)]);
var inst_29186__$1 = (state_29207[(2)]);
var inst_29187__$1 = cljs.core.nth.call(null,inst_29186__$1,(0),null);
var inst_29188 = cljs.core.nth.call(null,inst_29186__$1,(1),null);
var inst_29189 = (inst_29187__$1 == null);
var state_29207__$1 = (function (){var statearr_29209 = state_29207;
(statearr_29209[(9)] = inst_29188);

(statearr_29209[(7)] = inst_29187__$1);

(statearr_29209[(8)] = inst_29186__$1);

return statearr_29209;
})();
if(cljs.core.truth_(inst_29189)){
var statearr_29210_29236 = state_29207__$1;
(statearr_29210_29236[(1)] = (8));

} else {
var statearr_29211_29237 = state_29207__$1;
(statearr_29211_29237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (1))){
var inst_29176 = cljs.core.vec.call(null,chs);
var inst_29177 = inst_29176;
var state_29207__$1 = (function (){var statearr_29212 = state_29207;
(statearr_29212[(10)] = inst_29177);

return statearr_29212;
})();
var statearr_29213_29238 = state_29207__$1;
(statearr_29213_29238[(2)] = null);

(statearr_29213_29238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (4))){
var inst_29177 = (state_29207[(10)]);
var state_29207__$1 = state_29207;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29207__$1,(7),inst_29177);
} else {
if((state_val_29208 === (6))){
var inst_29203 = (state_29207[(2)]);
var state_29207__$1 = state_29207;
var statearr_29214_29239 = state_29207__$1;
(statearr_29214_29239[(2)] = inst_29203);

(statearr_29214_29239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (3))){
var inst_29205 = (state_29207[(2)]);
var state_29207__$1 = state_29207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29207__$1,inst_29205);
} else {
if((state_val_29208 === (2))){
var inst_29177 = (state_29207[(10)]);
var inst_29179 = cljs.core.count.call(null,inst_29177);
var inst_29180 = (inst_29179 > (0));
var state_29207__$1 = state_29207;
if(cljs.core.truth_(inst_29180)){
var statearr_29216_29240 = state_29207__$1;
(statearr_29216_29240[(1)] = (4));

} else {
var statearr_29217_29241 = state_29207__$1;
(statearr_29217_29241[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (11))){
var inst_29177 = (state_29207[(10)]);
var inst_29196 = (state_29207[(2)]);
var tmp29215 = inst_29177;
var inst_29177__$1 = tmp29215;
var state_29207__$1 = (function (){var statearr_29218 = state_29207;
(statearr_29218[(10)] = inst_29177__$1);

(statearr_29218[(11)] = inst_29196);

return statearr_29218;
})();
var statearr_29219_29242 = state_29207__$1;
(statearr_29219_29242[(2)] = null);

(statearr_29219_29242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (9))){
var inst_29187 = (state_29207[(7)]);
var state_29207__$1 = state_29207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29207__$1,(11),out,inst_29187);
} else {
if((state_val_29208 === (5))){
var inst_29201 = cljs.core.async.close_BANG_.call(null,out);
var state_29207__$1 = state_29207;
var statearr_29220_29243 = state_29207__$1;
(statearr_29220_29243[(2)] = inst_29201);

(statearr_29220_29243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (10))){
var inst_29199 = (state_29207[(2)]);
var state_29207__$1 = state_29207;
var statearr_29221_29244 = state_29207__$1;
(statearr_29221_29244[(2)] = inst_29199);

(statearr_29221_29244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (8))){
var inst_29188 = (state_29207[(9)]);
var inst_29187 = (state_29207[(7)]);
var inst_29177 = (state_29207[(10)]);
var inst_29186 = (state_29207[(8)]);
var inst_29191 = (function (){var cs = inst_29177;
var vec__29182 = inst_29186;
var v = inst_29187;
var c = inst_29188;
return ((function (cs,vec__29182,v,c,inst_29188,inst_29187,inst_29177,inst_29186,state_val_29208,c__27115__auto___29235,out){
return (function (p1__29172_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29172_SHARP_);
});
;})(cs,vec__29182,v,c,inst_29188,inst_29187,inst_29177,inst_29186,state_val_29208,c__27115__auto___29235,out))
})();
var inst_29192 = cljs.core.filterv.call(null,inst_29191,inst_29177);
var inst_29177__$1 = inst_29192;
var state_29207__$1 = (function (){var statearr_29222 = state_29207;
(statearr_29222[(10)] = inst_29177__$1);

return statearr_29222;
})();
var statearr_29223_29245 = state_29207__$1;
(statearr_29223_29245[(2)] = null);

(statearr_29223_29245[(1)] = (2));


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
});})(c__27115__auto___29235,out))
;
return ((function (switch__27003__auto__,c__27115__auto___29235,out){
return (function() {
var cljs$core$async$state_machine__27004__auto__ = null;
var cljs$core$async$state_machine__27004__auto____0 = (function (){
var statearr_29227 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29227[(0)] = cljs$core$async$state_machine__27004__auto__);

(statearr_29227[(1)] = (1));

return statearr_29227;
});
var cljs$core$async$state_machine__27004__auto____1 = (function (state_29207){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_29207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e29228){if((e29228 instanceof Object)){
var ex__27007__auto__ = e29228;
var statearr_29229_29246 = state_29207;
(statearr_29229_29246[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29247 = state_29207;
state_29207 = G__29247;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$state_machine__27004__auto__ = function(state_29207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27004__auto____1.call(this,state_29207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27004__auto____0;
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27004__auto____1;
return cljs$core$async$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___29235,out))
})();
var state__27117__auto__ = (function (){var statearr_29230 = f__27116__auto__.call(null);
(statearr_29230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___29235);

return statearr_29230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___29235,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29248 = [];
var len__25852__auto___29297 = arguments.length;
var i__25853__auto___29298 = (0);
while(true){
if((i__25853__auto___29298 < len__25852__auto___29297)){
args29248.push((arguments[i__25853__auto___29298]));

var G__29299 = (i__25853__auto___29298 + (1));
i__25853__auto___29298 = G__29299;
continue;
} else {
}
break;
}

var G__29250 = args29248.length;
switch (G__29250) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29248.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27115__auto___29301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___29301,out){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___29301,out){
return (function (state_29274){
var state_val_29275 = (state_29274[(1)]);
if((state_val_29275 === (7))){
var inst_29256 = (state_29274[(7)]);
var inst_29256__$1 = (state_29274[(2)]);
var inst_29257 = (inst_29256__$1 == null);
var inst_29258 = cljs.core.not.call(null,inst_29257);
var state_29274__$1 = (function (){var statearr_29276 = state_29274;
(statearr_29276[(7)] = inst_29256__$1);

return statearr_29276;
})();
if(inst_29258){
var statearr_29277_29302 = state_29274__$1;
(statearr_29277_29302[(1)] = (8));

} else {
var statearr_29278_29303 = state_29274__$1;
(statearr_29278_29303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (1))){
var inst_29251 = (0);
var state_29274__$1 = (function (){var statearr_29279 = state_29274;
(statearr_29279[(8)] = inst_29251);

return statearr_29279;
})();
var statearr_29280_29304 = state_29274__$1;
(statearr_29280_29304[(2)] = null);

(statearr_29280_29304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (4))){
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29274__$1,(7),ch);
} else {
if((state_val_29275 === (6))){
var inst_29269 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29281_29305 = state_29274__$1;
(statearr_29281_29305[(2)] = inst_29269);

(statearr_29281_29305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (3))){
var inst_29271 = (state_29274[(2)]);
var inst_29272 = cljs.core.async.close_BANG_.call(null,out);
var state_29274__$1 = (function (){var statearr_29282 = state_29274;
(statearr_29282[(9)] = inst_29271);

return statearr_29282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29274__$1,inst_29272);
} else {
if((state_val_29275 === (2))){
var inst_29251 = (state_29274[(8)]);
var inst_29253 = (inst_29251 < n);
var state_29274__$1 = state_29274;
if(cljs.core.truth_(inst_29253)){
var statearr_29283_29306 = state_29274__$1;
(statearr_29283_29306[(1)] = (4));

} else {
var statearr_29284_29307 = state_29274__$1;
(statearr_29284_29307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (11))){
var inst_29251 = (state_29274[(8)]);
var inst_29261 = (state_29274[(2)]);
var inst_29262 = (inst_29251 + (1));
var inst_29251__$1 = inst_29262;
var state_29274__$1 = (function (){var statearr_29285 = state_29274;
(statearr_29285[(8)] = inst_29251__$1);

(statearr_29285[(10)] = inst_29261);

return statearr_29285;
})();
var statearr_29286_29308 = state_29274__$1;
(statearr_29286_29308[(2)] = null);

(statearr_29286_29308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (9))){
var state_29274__$1 = state_29274;
var statearr_29287_29309 = state_29274__$1;
(statearr_29287_29309[(2)] = null);

(statearr_29287_29309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (5))){
var state_29274__$1 = state_29274;
var statearr_29288_29310 = state_29274__$1;
(statearr_29288_29310[(2)] = null);

(statearr_29288_29310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (10))){
var inst_29266 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29289_29311 = state_29274__$1;
(statearr_29289_29311[(2)] = inst_29266);

(statearr_29289_29311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (8))){
var inst_29256 = (state_29274[(7)]);
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29274__$1,(11),out,inst_29256);
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
});})(c__27115__auto___29301,out))
;
return ((function (switch__27003__auto__,c__27115__auto___29301,out){
return (function() {
var cljs$core$async$state_machine__27004__auto__ = null;
var cljs$core$async$state_machine__27004__auto____0 = (function (){
var statearr_29293 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29293[(0)] = cljs$core$async$state_machine__27004__auto__);

(statearr_29293[(1)] = (1));

return statearr_29293;
});
var cljs$core$async$state_machine__27004__auto____1 = (function (state_29274){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_29274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e29294){if((e29294 instanceof Object)){
var ex__27007__auto__ = e29294;
var statearr_29295_29312 = state_29274;
(statearr_29295_29312[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29313 = state_29274;
state_29274 = G__29313;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$state_machine__27004__auto__ = function(state_29274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27004__auto____1.call(this,state_29274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27004__auto____0;
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27004__auto____1;
return cljs$core$async$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___29301,out))
})();
var state__27117__auto__ = (function (){var statearr_29296 = f__27116__auto__.call(null);
(statearr_29296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___29301);

return statearr_29296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___29301,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29321 = (function (map_LT_,f,ch,meta29322){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29322 = meta29322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29323,meta29322__$1){
var self__ = this;
var _29323__$1 = this;
return (new cljs.core.async.t_cljs$core$async29321(self__.map_LT_,self__.f,self__.ch,meta29322__$1));
});

cljs.core.async.t_cljs$core$async29321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29323){
var self__ = this;
var _29323__$1 = this;
return self__.meta29322;
});

cljs.core.async.t_cljs$core$async29321.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29321.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29321.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29324 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29324 = (function (map_LT_,f,ch,meta29322,_,fn1,meta29325){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29322 = meta29322;
this._ = _;
this.fn1 = fn1;
this.meta29325 = meta29325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29326,meta29325__$1){
var self__ = this;
var _29326__$1 = this;
return (new cljs.core.async.t_cljs$core$async29324(self__.map_LT_,self__.f,self__.ch,self__.meta29322,self__._,self__.fn1,meta29325__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29326){
var self__ = this;
var _29326__$1 = this;
return self__.meta29325;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29324.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29324.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29314_SHARP_){
return f1.call(null,(((p1__29314_SHARP_ == null))?null:self__.f.call(null,p1__29314_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29324.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29322","meta29322",-805899487,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29321","cljs.core.async/t_cljs$core$async29321",957978772,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29325","meta29325",-348419973,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29324";

cljs.core.async.t_cljs$core$async29324.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async29324");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29324 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29324(map_LT___$1,f__$1,ch__$1,meta29322__$1,___$2,fn1__$1,meta29325){
return (new cljs.core.async.t_cljs$core$async29324(map_LT___$1,f__$1,ch__$1,meta29322__$1,___$2,fn1__$1,meta29325));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29324(self__.map_LT_,self__.f,self__.ch,self__.meta29322,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24765__auto__ = ret;
if(cljs.core.truth_(and__24765__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24765__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29321.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29322","meta29322",-805899487,null)], null);
});

cljs.core.async.t_cljs$core$async29321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29321";

cljs.core.async.t_cljs$core$async29321.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async29321");
});

cljs.core.async.__GT_t_cljs$core$async29321 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29321(map_LT___$1,f__$1,ch__$1,meta29322){
return (new cljs.core.async.t_cljs$core$async29321(map_LT___$1,f__$1,ch__$1,meta29322));
});

}

return (new cljs.core.async.t_cljs$core$async29321(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29330 = (function (map_GT_,f,ch,meta29331){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29331 = meta29331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29332,meta29331__$1){
var self__ = this;
var _29332__$1 = this;
return (new cljs.core.async.t_cljs$core$async29330(self__.map_GT_,self__.f,self__.ch,meta29331__$1));
});

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29332){
var self__ = this;
var _29332__$1 = this;
return self__.meta29331;
});

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29331","meta29331",1122943608,null)], null);
});

cljs.core.async.t_cljs$core$async29330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29330";

cljs.core.async.t_cljs$core$async29330.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async29330");
});

cljs.core.async.__GT_t_cljs$core$async29330 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29330(map_GT___$1,f__$1,ch__$1,meta29331){
return (new cljs.core.async.t_cljs$core$async29330(map_GT___$1,f__$1,ch__$1,meta29331));
});

}

return (new cljs.core.async.t_cljs$core$async29330(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29336 = (function (filter_GT_,p,ch,meta29337){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29337 = meta29337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29338,meta29337__$1){
var self__ = this;
var _29338__$1 = this;
return (new cljs.core.async.t_cljs$core$async29336(self__.filter_GT_,self__.p,self__.ch,meta29337__$1));
});

cljs.core.async.t_cljs$core$async29336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29338){
var self__ = this;
var _29338__$1 = this;
return self__.meta29337;
});

cljs.core.async.t_cljs$core$async29336.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29336.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29336.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29336.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29337","meta29337",-541944995,null)], null);
});

cljs.core.async.t_cljs$core$async29336.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29336";

cljs.core.async.t_cljs$core$async29336.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async29336");
});

cljs.core.async.__GT_t_cljs$core$async29336 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29336(filter_GT___$1,p__$1,ch__$1,meta29337){
return (new cljs.core.async.t_cljs$core$async29336(filter_GT___$1,p__$1,ch__$1,meta29337));
});

}

return (new cljs.core.async.t_cljs$core$async29336(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29339 = [];
var len__25852__auto___29383 = arguments.length;
var i__25853__auto___29384 = (0);
while(true){
if((i__25853__auto___29384 < len__25852__auto___29383)){
args29339.push((arguments[i__25853__auto___29384]));

var G__29385 = (i__25853__auto___29384 + (1));
i__25853__auto___29384 = G__29385;
continue;
} else {
}
break;
}

var G__29341 = args29339.length;
switch (G__29341) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29339.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27115__auto___29387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___29387,out){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___29387,out){
return (function (state_29362){
var state_val_29363 = (state_29362[(1)]);
if((state_val_29363 === (7))){
var inst_29358 = (state_29362[(2)]);
var state_29362__$1 = state_29362;
var statearr_29364_29388 = state_29362__$1;
(statearr_29364_29388[(2)] = inst_29358);

(statearr_29364_29388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (1))){
var state_29362__$1 = state_29362;
var statearr_29365_29389 = state_29362__$1;
(statearr_29365_29389[(2)] = null);

(statearr_29365_29389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (4))){
var inst_29344 = (state_29362[(7)]);
var inst_29344__$1 = (state_29362[(2)]);
var inst_29345 = (inst_29344__$1 == null);
var state_29362__$1 = (function (){var statearr_29366 = state_29362;
(statearr_29366[(7)] = inst_29344__$1);

return statearr_29366;
})();
if(cljs.core.truth_(inst_29345)){
var statearr_29367_29390 = state_29362__$1;
(statearr_29367_29390[(1)] = (5));

} else {
var statearr_29368_29391 = state_29362__$1;
(statearr_29368_29391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (6))){
var inst_29344 = (state_29362[(7)]);
var inst_29349 = p.call(null,inst_29344);
var state_29362__$1 = state_29362;
if(cljs.core.truth_(inst_29349)){
var statearr_29369_29392 = state_29362__$1;
(statearr_29369_29392[(1)] = (8));

} else {
var statearr_29370_29393 = state_29362__$1;
(statearr_29370_29393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (3))){
var inst_29360 = (state_29362[(2)]);
var state_29362__$1 = state_29362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29362__$1,inst_29360);
} else {
if((state_val_29363 === (2))){
var state_29362__$1 = state_29362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29362__$1,(4),ch);
} else {
if((state_val_29363 === (11))){
var inst_29352 = (state_29362[(2)]);
var state_29362__$1 = state_29362;
var statearr_29371_29394 = state_29362__$1;
(statearr_29371_29394[(2)] = inst_29352);

(statearr_29371_29394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (9))){
var state_29362__$1 = state_29362;
var statearr_29372_29395 = state_29362__$1;
(statearr_29372_29395[(2)] = null);

(statearr_29372_29395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (5))){
var inst_29347 = cljs.core.async.close_BANG_.call(null,out);
var state_29362__$1 = state_29362;
var statearr_29373_29396 = state_29362__$1;
(statearr_29373_29396[(2)] = inst_29347);

(statearr_29373_29396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (10))){
var inst_29355 = (state_29362[(2)]);
var state_29362__$1 = (function (){var statearr_29374 = state_29362;
(statearr_29374[(8)] = inst_29355);

return statearr_29374;
})();
var statearr_29375_29397 = state_29362__$1;
(statearr_29375_29397[(2)] = null);

(statearr_29375_29397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (8))){
var inst_29344 = (state_29362[(7)]);
var state_29362__$1 = state_29362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29362__$1,(11),out,inst_29344);
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
});})(c__27115__auto___29387,out))
;
return ((function (switch__27003__auto__,c__27115__auto___29387,out){
return (function() {
var cljs$core$async$state_machine__27004__auto__ = null;
var cljs$core$async$state_machine__27004__auto____0 = (function (){
var statearr_29379 = [null,null,null,null,null,null,null,null,null];
(statearr_29379[(0)] = cljs$core$async$state_machine__27004__auto__);

(statearr_29379[(1)] = (1));

return statearr_29379;
});
var cljs$core$async$state_machine__27004__auto____1 = (function (state_29362){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_29362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e29380){if((e29380 instanceof Object)){
var ex__27007__auto__ = e29380;
var statearr_29381_29398 = state_29362;
(statearr_29381_29398[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29399 = state_29362;
state_29362 = G__29399;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$state_machine__27004__auto__ = function(state_29362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27004__auto____1.call(this,state_29362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27004__auto____0;
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27004__auto____1;
return cljs$core$async$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___29387,out))
})();
var state__27117__auto__ = (function (){var statearr_29382 = f__27116__auto__.call(null);
(statearr_29382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___29387);

return statearr_29382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___29387,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29400 = [];
var len__25852__auto___29403 = arguments.length;
var i__25853__auto___29404 = (0);
while(true){
if((i__25853__auto___29404 < len__25852__auto___29403)){
args29400.push((arguments[i__25853__auto___29404]));

var G__29405 = (i__25853__auto___29404 + (1));
i__25853__auto___29404 = G__29405;
continue;
} else {
}
break;
}

var G__29402 = args29400.length;
switch (G__29402) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29400.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto__){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto__){
return (function (state_29572){
var state_val_29573 = (state_29572[(1)]);
if((state_val_29573 === (7))){
var inst_29568 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
var statearr_29574_29615 = state_29572__$1;
(statearr_29574_29615[(2)] = inst_29568);

(statearr_29574_29615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (20))){
var inst_29538 = (state_29572[(7)]);
var inst_29549 = (state_29572[(2)]);
var inst_29550 = cljs.core.next.call(null,inst_29538);
var inst_29524 = inst_29550;
var inst_29525 = null;
var inst_29526 = (0);
var inst_29527 = (0);
var state_29572__$1 = (function (){var statearr_29575 = state_29572;
(statearr_29575[(8)] = inst_29549);

(statearr_29575[(9)] = inst_29524);

(statearr_29575[(10)] = inst_29525);

(statearr_29575[(11)] = inst_29527);

(statearr_29575[(12)] = inst_29526);

return statearr_29575;
})();
var statearr_29576_29616 = state_29572__$1;
(statearr_29576_29616[(2)] = null);

(statearr_29576_29616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (1))){
var state_29572__$1 = state_29572;
var statearr_29577_29617 = state_29572__$1;
(statearr_29577_29617[(2)] = null);

(statearr_29577_29617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (4))){
var inst_29513 = (state_29572[(13)]);
var inst_29513__$1 = (state_29572[(2)]);
var inst_29514 = (inst_29513__$1 == null);
var state_29572__$1 = (function (){var statearr_29578 = state_29572;
(statearr_29578[(13)] = inst_29513__$1);

return statearr_29578;
})();
if(cljs.core.truth_(inst_29514)){
var statearr_29579_29618 = state_29572__$1;
(statearr_29579_29618[(1)] = (5));

} else {
var statearr_29580_29619 = state_29572__$1;
(statearr_29580_29619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (15))){
var state_29572__$1 = state_29572;
var statearr_29584_29620 = state_29572__$1;
(statearr_29584_29620[(2)] = null);

(statearr_29584_29620[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (21))){
var state_29572__$1 = state_29572;
var statearr_29585_29621 = state_29572__$1;
(statearr_29585_29621[(2)] = null);

(statearr_29585_29621[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (13))){
var inst_29524 = (state_29572[(9)]);
var inst_29525 = (state_29572[(10)]);
var inst_29527 = (state_29572[(11)]);
var inst_29526 = (state_29572[(12)]);
var inst_29534 = (state_29572[(2)]);
var inst_29535 = (inst_29527 + (1));
var tmp29581 = inst_29524;
var tmp29582 = inst_29525;
var tmp29583 = inst_29526;
var inst_29524__$1 = tmp29581;
var inst_29525__$1 = tmp29582;
var inst_29526__$1 = tmp29583;
var inst_29527__$1 = inst_29535;
var state_29572__$1 = (function (){var statearr_29586 = state_29572;
(statearr_29586[(9)] = inst_29524__$1);

(statearr_29586[(10)] = inst_29525__$1);

(statearr_29586[(11)] = inst_29527__$1);

(statearr_29586[(12)] = inst_29526__$1);

(statearr_29586[(14)] = inst_29534);

return statearr_29586;
})();
var statearr_29587_29622 = state_29572__$1;
(statearr_29587_29622[(2)] = null);

(statearr_29587_29622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (22))){
var state_29572__$1 = state_29572;
var statearr_29588_29623 = state_29572__$1;
(statearr_29588_29623[(2)] = null);

(statearr_29588_29623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (6))){
var inst_29513 = (state_29572[(13)]);
var inst_29522 = f.call(null,inst_29513);
var inst_29523 = cljs.core.seq.call(null,inst_29522);
var inst_29524 = inst_29523;
var inst_29525 = null;
var inst_29526 = (0);
var inst_29527 = (0);
var state_29572__$1 = (function (){var statearr_29589 = state_29572;
(statearr_29589[(9)] = inst_29524);

(statearr_29589[(10)] = inst_29525);

(statearr_29589[(11)] = inst_29527);

(statearr_29589[(12)] = inst_29526);

return statearr_29589;
})();
var statearr_29590_29624 = state_29572__$1;
(statearr_29590_29624[(2)] = null);

(statearr_29590_29624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (17))){
var inst_29538 = (state_29572[(7)]);
var inst_29542 = cljs.core.chunk_first.call(null,inst_29538);
var inst_29543 = cljs.core.chunk_rest.call(null,inst_29538);
var inst_29544 = cljs.core.count.call(null,inst_29542);
var inst_29524 = inst_29543;
var inst_29525 = inst_29542;
var inst_29526 = inst_29544;
var inst_29527 = (0);
var state_29572__$1 = (function (){var statearr_29591 = state_29572;
(statearr_29591[(9)] = inst_29524);

(statearr_29591[(10)] = inst_29525);

(statearr_29591[(11)] = inst_29527);

(statearr_29591[(12)] = inst_29526);

return statearr_29591;
})();
var statearr_29592_29625 = state_29572__$1;
(statearr_29592_29625[(2)] = null);

(statearr_29592_29625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (3))){
var inst_29570 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29572__$1,inst_29570);
} else {
if((state_val_29573 === (12))){
var inst_29558 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
var statearr_29593_29626 = state_29572__$1;
(statearr_29593_29626[(2)] = inst_29558);

(statearr_29593_29626[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (2))){
var state_29572__$1 = state_29572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29572__$1,(4),in$);
} else {
if((state_val_29573 === (23))){
var inst_29566 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
var statearr_29594_29627 = state_29572__$1;
(statearr_29594_29627[(2)] = inst_29566);

(statearr_29594_29627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (19))){
var inst_29553 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
var statearr_29595_29628 = state_29572__$1;
(statearr_29595_29628[(2)] = inst_29553);

(statearr_29595_29628[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (11))){
var inst_29524 = (state_29572[(9)]);
var inst_29538 = (state_29572[(7)]);
var inst_29538__$1 = cljs.core.seq.call(null,inst_29524);
var state_29572__$1 = (function (){var statearr_29596 = state_29572;
(statearr_29596[(7)] = inst_29538__$1);

return statearr_29596;
})();
if(inst_29538__$1){
var statearr_29597_29629 = state_29572__$1;
(statearr_29597_29629[(1)] = (14));

} else {
var statearr_29598_29630 = state_29572__$1;
(statearr_29598_29630[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (9))){
var inst_29560 = (state_29572[(2)]);
var inst_29561 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29572__$1 = (function (){var statearr_29599 = state_29572;
(statearr_29599[(15)] = inst_29560);

return statearr_29599;
})();
if(cljs.core.truth_(inst_29561)){
var statearr_29600_29631 = state_29572__$1;
(statearr_29600_29631[(1)] = (21));

} else {
var statearr_29601_29632 = state_29572__$1;
(statearr_29601_29632[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (5))){
var inst_29516 = cljs.core.async.close_BANG_.call(null,out);
var state_29572__$1 = state_29572;
var statearr_29602_29633 = state_29572__$1;
(statearr_29602_29633[(2)] = inst_29516);

(statearr_29602_29633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (14))){
var inst_29538 = (state_29572[(7)]);
var inst_29540 = cljs.core.chunked_seq_QMARK_.call(null,inst_29538);
var state_29572__$1 = state_29572;
if(inst_29540){
var statearr_29603_29634 = state_29572__$1;
(statearr_29603_29634[(1)] = (17));

} else {
var statearr_29604_29635 = state_29572__$1;
(statearr_29604_29635[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (16))){
var inst_29556 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
var statearr_29605_29636 = state_29572__$1;
(statearr_29605_29636[(2)] = inst_29556);

(statearr_29605_29636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (10))){
var inst_29525 = (state_29572[(10)]);
var inst_29527 = (state_29572[(11)]);
var inst_29532 = cljs.core._nth.call(null,inst_29525,inst_29527);
var state_29572__$1 = state_29572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29572__$1,(13),out,inst_29532);
} else {
if((state_val_29573 === (18))){
var inst_29538 = (state_29572[(7)]);
var inst_29547 = cljs.core.first.call(null,inst_29538);
var state_29572__$1 = state_29572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29572__$1,(20),out,inst_29547);
} else {
if((state_val_29573 === (8))){
var inst_29527 = (state_29572[(11)]);
var inst_29526 = (state_29572[(12)]);
var inst_29529 = (inst_29527 < inst_29526);
var inst_29530 = inst_29529;
var state_29572__$1 = state_29572;
if(cljs.core.truth_(inst_29530)){
var statearr_29606_29637 = state_29572__$1;
(statearr_29606_29637[(1)] = (10));

} else {
var statearr_29607_29638 = state_29572__$1;
(statearr_29607_29638[(1)] = (11));

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
});})(c__27115__auto__))
;
return ((function (switch__27003__auto__,c__27115__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27004__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27004__auto____0 = (function (){
var statearr_29611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29611[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27004__auto__);

(statearr_29611[(1)] = (1));

return statearr_29611;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27004__auto____1 = (function (state_29572){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_29572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e29612){if((e29612 instanceof Object)){
var ex__27007__auto__ = e29612;
var statearr_29613_29639 = state_29572;
(statearr_29613_29639[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29640 = state_29572;
state_29572 = G__29640;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27004__auto__ = function(state_29572){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27004__auto____1.call(this,state_29572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27004__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27004__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto__))
})();
var state__27117__auto__ = (function (){var statearr_29614 = f__27116__auto__.call(null);
(statearr_29614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto__);

return statearr_29614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto__))
);

return c__27115__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29641 = [];
var len__25852__auto___29644 = arguments.length;
var i__25853__auto___29645 = (0);
while(true){
if((i__25853__auto___29645 < len__25852__auto___29644)){
args29641.push((arguments[i__25853__auto___29645]));

var G__29646 = (i__25853__auto___29645 + (1));
i__25853__auto___29645 = G__29646;
continue;
} else {
}
break;
}

var G__29643 = args29641.length;
switch (G__29643) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29641.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29648 = [];
var len__25852__auto___29651 = arguments.length;
var i__25853__auto___29652 = (0);
while(true){
if((i__25853__auto___29652 < len__25852__auto___29651)){
args29648.push((arguments[i__25853__auto___29652]));

var G__29653 = (i__25853__auto___29652 + (1));
i__25853__auto___29652 = G__29653;
continue;
} else {
}
break;
}

var G__29650 = args29648.length;
switch (G__29650) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29648.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29655 = [];
var len__25852__auto___29706 = arguments.length;
var i__25853__auto___29707 = (0);
while(true){
if((i__25853__auto___29707 < len__25852__auto___29706)){
args29655.push((arguments[i__25853__auto___29707]));

var G__29708 = (i__25853__auto___29707 + (1));
i__25853__auto___29707 = G__29708;
continue;
} else {
}
break;
}

var G__29657 = args29655.length;
switch (G__29657) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29655.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27115__auto___29710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___29710,out){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___29710,out){
return (function (state_29681){
var state_val_29682 = (state_29681[(1)]);
if((state_val_29682 === (7))){
var inst_29676 = (state_29681[(2)]);
var state_29681__$1 = state_29681;
var statearr_29683_29711 = state_29681__$1;
(statearr_29683_29711[(2)] = inst_29676);

(statearr_29683_29711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29682 === (1))){
var inst_29658 = null;
var state_29681__$1 = (function (){var statearr_29684 = state_29681;
(statearr_29684[(7)] = inst_29658);

return statearr_29684;
})();
var statearr_29685_29712 = state_29681__$1;
(statearr_29685_29712[(2)] = null);

(statearr_29685_29712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29682 === (4))){
var inst_29661 = (state_29681[(8)]);
var inst_29661__$1 = (state_29681[(2)]);
var inst_29662 = (inst_29661__$1 == null);
var inst_29663 = cljs.core.not.call(null,inst_29662);
var state_29681__$1 = (function (){var statearr_29686 = state_29681;
(statearr_29686[(8)] = inst_29661__$1);

return statearr_29686;
})();
if(inst_29663){
var statearr_29687_29713 = state_29681__$1;
(statearr_29687_29713[(1)] = (5));

} else {
var statearr_29688_29714 = state_29681__$1;
(statearr_29688_29714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29682 === (6))){
var state_29681__$1 = state_29681;
var statearr_29689_29715 = state_29681__$1;
(statearr_29689_29715[(2)] = null);

(statearr_29689_29715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29682 === (3))){
var inst_29678 = (state_29681[(2)]);
var inst_29679 = cljs.core.async.close_BANG_.call(null,out);
var state_29681__$1 = (function (){var statearr_29690 = state_29681;
(statearr_29690[(9)] = inst_29678);

return statearr_29690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29681__$1,inst_29679);
} else {
if((state_val_29682 === (2))){
var state_29681__$1 = state_29681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29681__$1,(4),ch);
} else {
if((state_val_29682 === (11))){
var inst_29661 = (state_29681[(8)]);
var inst_29670 = (state_29681[(2)]);
var inst_29658 = inst_29661;
var state_29681__$1 = (function (){var statearr_29691 = state_29681;
(statearr_29691[(7)] = inst_29658);

(statearr_29691[(10)] = inst_29670);

return statearr_29691;
})();
var statearr_29692_29716 = state_29681__$1;
(statearr_29692_29716[(2)] = null);

(statearr_29692_29716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29682 === (9))){
var inst_29661 = (state_29681[(8)]);
var state_29681__$1 = state_29681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29681__$1,(11),out,inst_29661);
} else {
if((state_val_29682 === (5))){
var inst_29661 = (state_29681[(8)]);
var inst_29658 = (state_29681[(7)]);
var inst_29665 = cljs.core._EQ_.call(null,inst_29661,inst_29658);
var state_29681__$1 = state_29681;
if(inst_29665){
var statearr_29694_29717 = state_29681__$1;
(statearr_29694_29717[(1)] = (8));

} else {
var statearr_29695_29718 = state_29681__$1;
(statearr_29695_29718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29682 === (10))){
var inst_29673 = (state_29681[(2)]);
var state_29681__$1 = state_29681;
var statearr_29696_29719 = state_29681__$1;
(statearr_29696_29719[(2)] = inst_29673);

(statearr_29696_29719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29682 === (8))){
var inst_29658 = (state_29681[(7)]);
var tmp29693 = inst_29658;
var inst_29658__$1 = tmp29693;
var state_29681__$1 = (function (){var statearr_29697 = state_29681;
(statearr_29697[(7)] = inst_29658__$1);

return statearr_29697;
})();
var statearr_29698_29720 = state_29681__$1;
(statearr_29698_29720[(2)] = null);

(statearr_29698_29720[(1)] = (2));


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
});})(c__27115__auto___29710,out))
;
return ((function (switch__27003__auto__,c__27115__auto___29710,out){
return (function() {
var cljs$core$async$state_machine__27004__auto__ = null;
var cljs$core$async$state_machine__27004__auto____0 = (function (){
var statearr_29702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29702[(0)] = cljs$core$async$state_machine__27004__auto__);

(statearr_29702[(1)] = (1));

return statearr_29702;
});
var cljs$core$async$state_machine__27004__auto____1 = (function (state_29681){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_29681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e29703){if((e29703 instanceof Object)){
var ex__27007__auto__ = e29703;
var statearr_29704_29721 = state_29681;
(statearr_29704_29721[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29722 = state_29681;
state_29681 = G__29722;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$state_machine__27004__auto__ = function(state_29681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27004__auto____1.call(this,state_29681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27004__auto____0;
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27004__auto____1;
return cljs$core$async$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___29710,out))
})();
var state__27117__auto__ = (function (){var statearr_29705 = f__27116__auto__.call(null);
(statearr_29705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___29710);

return statearr_29705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___29710,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29723 = [];
var len__25852__auto___29793 = arguments.length;
var i__25853__auto___29794 = (0);
while(true){
if((i__25853__auto___29794 < len__25852__auto___29793)){
args29723.push((arguments[i__25853__auto___29794]));

var G__29795 = (i__25853__auto___29794 + (1));
i__25853__auto___29794 = G__29795;
continue;
} else {
}
break;
}

var G__29725 = args29723.length;
switch (G__29725) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29723.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27115__auto___29797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___29797,out){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___29797,out){
return (function (state_29763){
var state_val_29764 = (state_29763[(1)]);
if((state_val_29764 === (7))){
var inst_29759 = (state_29763[(2)]);
var state_29763__$1 = state_29763;
var statearr_29765_29798 = state_29763__$1;
(statearr_29765_29798[(2)] = inst_29759);

(statearr_29765_29798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29764 === (1))){
var inst_29726 = (new Array(n));
var inst_29727 = inst_29726;
var inst_29728 = (0);
var state_29763__$1 = (function (){var statearr_29766 = state_29763;
(statearr_29766[(7)] = inst_29727);

(statearr_29766[(8)] = inst_29728);

return statearr_29766;
})();
var statearr_29767_29799 = state_29763__$1;
(statearr_29767_29799[(2)] = null);

(statearr_29767_29799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29764 === (4))){
var inst_29731 = (state_29763[(9)]);
var inst_29731__$1 = (state_29763[(2)]);
var inst_29732 = (inst_29731__$1 == null);
var inst_29733 = cljs.core.not.call(null,inst_29732);
var state_29763__$1 = (function (){var statearr_29768 = state_29763;
(statearr_29768[(9)] = inst_29731__$1);

return statearr_29768;
})();
if(inst_29733){
var statearr_29769_29800 = state_29763__$1;
(statearr_29769_29800[(1)] = (5));

} else {
var statearr_29770_29801 = state_29763__$1;
(statearr_29770_29801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29764 === (15))){
var inst_29753 = (state_29763[(2)]);
var state_29763__$1 = state_29763;
var statearr_29771_29802 = state_29763__$1;
(statearr_29771_29802[(2)] = inst_29753);

(statearr_29771_29802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29764 === (13))){
var state_29763__$1 = state_29763;
var statearr_29772_29803 = state_29763__$1;
(statearr_29772_29803[(2)] = null);

(statearr_29772_29803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29764 === (6))){
var inst_29728 = (state_29763[(8)]);
var inst_29749 = (inst_29728 > (0));
var state_29763__$1 = state_29763;
if(cljs.core.truth_(inst_29749)){
var statearr_29773_29804 = state_29763__$1;
(statearr_29773_29804[(1)] = (12));

} else {
var statearr_29774_29805 = state_29763__$1;
(statearr_29774_29805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29764 === (3))){
var inst_29761 = (state_29763[(2)]);
var state_29763__$1 = state_29763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29763__$1,inst_29761);
} else {
if((state_val_29764 === (12))){
var inst_29727 = (state_29763[(7)]);
var inst_29751 = cljs.core.vec.call(null,inst_29727);
var state_29763__$1 = state_29763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29763__$1,(15),out,inst_29751);
} else {
if((state_val_29764 === (2))){
var state_29763__$1 = state_29763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29763__$1,(4),ch);
} else {
if((state_val_29764 === (11))){
var inst_29743 = (state_29763[(2)]);
var inst_29744 = (new Array(n));
var inst_29727 = inst_29744;
var inst_29728 = (0);
var state_29763__$1 = (function (){var statearr_29775 = state_29763;
(statearr_29775[(7)] = inst_29727);

(statearr_29775[(10)] = inst_29743);

(statearr_29775[(8)] = inst_29728);

return statearr_29775;
})();
var statearr_29776_29806 = state_29763__$1;
(statearr_29776_29806[(2)] = null);

(statearr_29776_29806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29764 === (9))){
var inst_29727 = (state_29763[(7)]);
var inst_29741 = cljs.core.vec.call(null,inst_29727);
var state_29763__$1 = state_29763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29763__$1,(11),out,inst_29741);
} else {
if((state_val_29764 === (5))){
var inst_29736 = (state_29763[(11)]);
var inst_29731 = (state_29763[(9)]);
var inst_29727 = (state_29763[(7)]);
var inst_29728 = (state_29763[(8)]);
var inst_29735 = (inst_29727[inst_29728] = inst_29731);
var inst_29736__$1 = (inst_29728 + (1));
var inst_29737 = (inst_29736__$1 < n);
var state_29763__$1 = (function (){var statearr_29777 = state_29763;
(statearr_29777[(11)] = inst_29736__$1);

(statearr_29777[(12)] = inst_29735);

return statearr_29777;
})();
if(cljs.core.truth_(inst_29737)){
var statearr_29778_29807 = state_29763__$1;
(statearr_29778_29807[(1)] = (8));

} else {
var statearr_29779_29808 = state_29763__$1;
(statearr_29779_29808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29764 === (14))){
var inst_29756 = (state_29763[(2)]);
var inst_29757 = cljs.core.async.close_BANG_.call(null,out);
var state_29763__$1 = (function (){var statearr_29781 = state_29763;
(statearr_29781[(13)] = inst_29756);

return statearr_29781;
})();
var statearr_29782_29809 = state_29763__$1;
(statearr_29782_29809[(2)] = inst_29757);

(statearr_29782_29809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29764 === (10))){
var inst_29747 = (state_29763[(2)]);
var state_29763__$1 = state_29763;
var statearr_29783_29810 = state_29763__$1;
(statearr_29783_29810[(2)] = inst_29747);

(statearr_29783_29810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29764 === (8))){
var inst_29736 = (state_29763[(11)]);
var inst_29727 = (state_29763[(7)]);
var tmp29780 = inst_29727;
var inst_29727__$1 = tmp29780;
var inst_29728 = inst_29736;
var state_29763__$1 = (function (){var statearr_29784 = state_29763;
(statearr_29784[(7)] = inst_29727__$1);

(statearr_29784[(8)] = inst_29728);

return statearr_29784;
})();
var statearr_29785_29811 = state_29763__$1;
(statearr_29785_29811[(2)] = null);

(statearr_29785_29811[(1)] = (2));


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
});})(c__27115__auto___29797,out))
;
return ((function (switch__27003__auto__,c__27115__auto___29797,out){
return (function() {
var cljs$core$async$state_machine__27004__auto__ = null;
var cljs$core$async$state_machine__27004__auto____0 = (function (){
var statearr_29789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29789[(0)] = cljs$core$async$state_machine__27004__auto__);

(statearr_29789[(1)] = (1));

return statearr_29789;
});
var cljs$core$async$state_machine__27004__auto____1 = (function (state_29763){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_29763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e29790){if((e29790 instanceof Object)){
var ex__27007__auto__ = e29790;
var statearr_29791_29812 = state_29763;
(statearr_29791_29812[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29813 = state_29763;
state_29763 = G__29813;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$state_machine__27004__auto__ = function(state_29763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27004__auto____1.call(this,state_29763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27004__auto____0;
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27004__auto____1;
return cljs$core$async$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___29797,out))
})();
var state__27117__auto__ = (function (){var statearr_29792 = f__27116__auto__.call(null);
(statearr_29792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___29797);

return statearr_29792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___29797,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29814 = [];
var len__25852__auto___29888 = arguments.length;
var i__25853__auto___29889 = (0);
while(true){
if((i__25853__auto___29889 < len__25852__auto___29888)){
args29814.push((arguments[i__25853__auto___29889]));

var G__29890 = (i__25853__auto___29889 + (1));
i__25853__auto___29889 = G__29890;
continue;
} else {
}
break;
}

var G__29816 = args29814.length;
switch (G__29816) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29814.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27115__auto___29892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___29892,out){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___29892,out){
return (function (state_29858){
var state_val_29859 = (state_29858[(1)]);
if((state_val_29859 === (7))){
var inst_29854 = (state_29858[(2)]);
var state_29858__$1 = state_29858;
var statearr_29860_29893 = state_29858__$1;
(statearr_29860_29893[(2)] = inst_29854);

(statearr_29860_29893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (1))){
var inst_29817 = [];
var inst_29818 = inst_29817;
var inst_29819 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29858__$1 = (function (){var statearr_29861 = state_29858;
(statearr_29861[(7)] = inst_29818);

(statearr_29861[(8)] = inst_29819);

return statearr_29861;
})();
var statearr_29862_29894 = state_29858__$1;
(statearr_29862_29894[(2)] = null);

(statearr_29862_29894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (4))){
var inst_29822 = (state_29858[(9)]);
var inst_29822__$1 = (state_29858[(2)]);
var inst_29823 = (inst_29822__$1 == null);
var inst_29824 = cljs.core.not.call(null,inst_29823);
var state_29858__$1 = (function (){var statearr_29863 = state_29858;
(statearr_29863[(9)] = inst_29822__$1);

return statearr_29863;
})();
if(inst_29824){
var statearr_29864_29895 = state_29858__$1;
(statearr_29864_29895[(1)] = (5));

} else {
var statearr_29865_29896 = state_29858__$1;
(statearr_29865_29896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (15))){
var inst_29848 = (state_29858[(2)]);
var state_29858__$1 = state_29858;
var statearr_29866_29897 = state_29858__$1;
(statearr_29866_29897[(2)] = inst_29848);

(statearr_29866_29897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (13))){
var state_29858__$1 = state_29858;
var statearr_29867_29898 = state_29858__$1;
(statearr_29867_29898[(2)] = null);

(statearr_29867_29898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (6))){
var inst_29818 = (state_29858[(7)]);
var inst_29843 = inst_29818.length;
var inst_29844 = (inst_29843 > (0));
var state_29858__$1 = state_29858;
if(cljs.core.truth_(inst_29844)){
var statearr_29868_29899 = state_29858__$1;
(statearr_29868_29899[(1)] = (12));

} else {
var statearr_29869_29900 = state_29858__$1;
(statearr_29869_29900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (3))){
var inst_29856 = (state_29858[(2)]);
var state_29858__$1 = state_29858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29858__$1,inst_29856);
} else {
if((state_val_29859 === (12))){
var inst_29818 = (state_29858[(7)]);
var inst_29846 = cljs.core.vec.call(null,inst_29818);
var state_29858__$1 = state_29858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29858__$1,(15),out,inst_29846);
} else {
if((state_val_29859 === (2))){
var state_29858__$1 = state_29858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29858__$1,(4),ch);
} else {
if((state_val_29859 === (11))){
var inst_29826 = (state_29858[(10)]);
var inst_29822 = (state_29858[(9)]);
var inst_29836 = (state_29858[(2)]);
var inst_29837 = [];
var inst_29838 = inst_29837.push(inst_29822);
var inst_29818 = inst_29837;
var inst_29819 = inst_29826;
var state_29858__$1 = (function (){var statearr_29870 = state_29858;
(statearr_29870[(11)] = inst_29838);

(statearr_29870[(7)] = inst_29818);

(statearr_29870[(12)] = inst_29836);

(statearr_29870[(8)] = inst_29819);

return statearr_29870;
})();
var statearr_29871_29901 = state_29858__$1;
(statearr_29871_29901[(2)] = null);

(statearr_29871_29901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (9))){
var inst_29818 = (state_29858[(7)]);
var inst_29834 = cljs.core.vec.call(null,inst_29818);
var state_29858__$1 = state_29858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29858__$1,(11),out,inst_29834);
} else {
if((state_val_29859 === (5))){
var inst_29826 = (state_29858[(10)]);
var inst_29822 = (state_29858[(9)]);
var inst_29819 = (state_29858[(8)]);
var inst_29826__$1 = f.call(null,inst_29822);
var inst_29827 = cljs.core._EQ_.call(null,inst_29826__$1,inst_29819);
var inst_29828 = cljs.core.keyword_identical_QMARK_.call(null,inst_29819,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29829 = (inst_29827) || (inst_29828);
var state_29858__$1 = (function (){var statearr_29872 = state_29858;
(statearr_29872[(10)] = inst_29826__$1);

return statearr_29872;
})();
if(cljs.core.truth_(inst_29829)){
var statearr_29873_29902 = state_29858__$1;
(statearr_29873_29902[(1)] = (8));

} else {
var statearr_29874_29903 = state_29858__$1;
(statearr_29874_29903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (14))){
var inst_29851 = (state_29858[(2)]);
var inst_29852 = cljs.core.async.close_BANG_.call(null,out);
var state_29858__$1 = (function (){var statearr_29876 = state_29858;
(statearr_29876[(13)] = inst_29851);

return statearr_29876;
})();
var statearr_29877_29904 = state_29858__$1;
(statearr_29877_29904[(2)] = inst_29852);

(statearr_29877_29904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (10))){
var inst_29841 = (state_29858[(2)]);
var state_29858__$1 = state_29858;
var statearr_29878_29905 = state_29858__$1;
(statearr_29878_29905[(2)] = inst_29841);

(statearr_29878_29905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (8))){
var inst_29826 = (state_29858[(10)]);
var inst_29822 = (state_29858[(9)]);
var inst_29818 = (state_29858[(7)]);
var inst_29831 = inst_29818.push(inst_29822);
var tmp29875 = inst_29818;
var inst_29818__$1 = tmp29875;
var inst_29819 = inst_29826;
var state_29858__$1 = (function (){var statearr_29879 = state_29858;
(statearr_29879[(14)] = inst_29831);

(statearr_29879[(7)] = inst_29818__$1);

(statearr_29879[(8)] = inst_29819);

return statearr_29879;
})();
var statearr_29880_29906 = state_29858__$1;
(statearr_29880_29906[(2)] = null);

(statearr_29880_29906[(1)] = (2));


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
});})(c__27115__auto___29892,out))
;
return ((function (switch__27003__auto__,c__27115__auto___29892,out){
return (function() {
var cljs$core$async$state_machine__27004__auto__ = null;
var cljs$core$async$state_machine__27004__auto____0 = (function (){
var statearr_29884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29884[(0)] = cljs$core$async$state_machine__27004__auto__);

(statearr_29884[(1)] = (1));

return statearr_29884;
});
var cljs$core$async$state_machine__27004__auto____1 = (function (state_29858){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_29858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e29885){if((e29885 instanceof Object)){
var ex__27007__auto__ = e29885;
var statearr_29886_29907 = state_29858;
(statearr_29886_29907[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29908 = state_29858;
state_29858 = G__29908;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
cljs$core$async$state_machine__27004__auto__ = function(state_29858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27004__auto____1.call(this,state_29858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27004__auto____0;
cljs$core$async$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27004__auto____1;
return cljs$core$async$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___29892,out))
})();
var state__27117__auto__ = (function (){var statearr_29887 = f__27116__auto__.call(null);
(statearr_29887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___29892);

return statearr_29887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___29892,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484085453821
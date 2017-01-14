// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34616 = [];
var len__25852__auto___34619 = arguments.length;
var i__25853__auto___34620 = (0);
while(true){
if((i__25853__auto___34620 < len__25852__auto___34619)){
args34616.push((arguments[i__25853__auto___34620]));

var G__34621 = (i__25853__auto___34620 + (1));
i__25853__auto___34620 = G__34621;
continue;
} else {
}
break;
}

var G__34618 = args34616.length;
switch (G__34618) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34616.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25859__auto__ = [];
var len__25852__auto___34624 = arguments.length;
var i__25853__auto___34625 = (0);
while(true){
if((i__25853__auto___34625 < len__25852__auto___34624)){
args__25859__auto__.push((arguments[i__25853__auto___34625]));

var G__34626 = (i__25853__auto___34625 + (1));
i__25853__auto___34625 = G__34626;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34623){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34623));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25859__auto__ = [];
var len__25852__auto___34628 = arguments.length;
var i__25853__auto___34629 = (0);
while(true){
if((i__25853__auto___34629 < len__25852__auto___34628)){
args__25859__auto__.push((arguments[i__25853__auto___34629]));

var G__34630 = (i__25853__auto___34629 + (1));
i__25853__auto___34629 = G__34630;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34627){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34627));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34631 = cljs.core._EQ_;
var expr__34632 = (function (){var or__24777__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34635){if((e34635 instanceof Error)){
var e = e34635;
return false;
} else {
throw e34635;

}
}})();
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34631.call(null,"true",expr__34632))){
return true;
} else {
if(cljs.core.truth_(pred__34631.call(null,"false",expr__34632))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34632)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34637){if((e34637 instanceof Error)){
var e = e34637;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34637;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34638){
var map__34641 = p__34638;
var map__34641__$1 = ((((!((map__34641 == null)))?((((map__34641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34641):map__34641);
var message = cljs.core.get.call(null,map__34641__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34641__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24777__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24765__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24765__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24765__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27115__auto___34803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___34803,ch){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___34803,ch){
return (function (state_34772){
var state_val_34773 = (state_34772[(1)]);
if((state_val_34773 === (7))){
var inst_34768 = (state_34772[(2)]);
var state_34772__$1 = state_34772;
var statearr_34774_34804 = state_34772__$1;
(statearr_34774_34804[(2)] = inst_34768);

(statearr_34774_34804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (1))){
var state_34772__$1 = state_34772;
var statearr_34775_34805 = state_34772__$1;
(statearr_34775_34805[(2)] = null);

(statearr_34775_34805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (4))){
var inst_34725 = (state_34772[(7)]);
var inst_34725__$1 = (state_34772[(2)]);
var state_34772__$1 = (function (){var statearr_34776 = state_34772;
(statearr_34776[(7)] = inst_34725__$1);

return statearr_34776;
})();
if(cljs.core.truth_(inst_34725__$1)){
var statearr_34777_34806 = state_34772__$1;
(statearr_34777_34806[(1)] = (5));

} else {
var statearr_34778_34807 = state_34772__$1;
(statearr_34778_34807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (15))){
var inst_34732 = (state_34772[(8)]);
var inst_34747 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34732);
var inst_34748 = cljs.core.first.call(null,inst_34747);
var inst_34749 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34748);
var inst_34750 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34749)].join('');
var inst_34751 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34750);
var state_34772__$1 = state_34772;
var statearr_34779_34808 = state_34772__$1;
(statearr_34779_34808[(2)] = inst_34751);

(statearr_34779_34808[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (13))){
var inst_34756 = (state_34772[(2)]);
var state_34772__$1 = state_34772;
var statearr_34780_34809 = state_34772__$1;
(statearr_34780_34809[(2)] = inst_34756);

(statearr_34780_34809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (6))){
var state_34772__$1 = state_34772;
var statearr_34781_34810 = state_34772__$1;
(statearr_34781_34810[(2)] = null);

(statearr_34781_34810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (17))){
var inst_34754 = (state_34772[(2)]);
var state_34772__$1 = state_34772;
var statearr_34782_34811 = state_34772__$1;
(statearr_34782_34811[(2)] = inst_34754);

(statearr_34782_34811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (3))){
var inst_34770 = (state_34772[(2)]);
var state_34772__$1 = state_34772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34772__$1,inst_34770);
} else {
if((state_val_34773 === (12))){
var inst_34731 = (state_34772[(9)]);
var inst_34745 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34731,opts);
var state_34772__$1 = state_34772;
if(cljs.core.truth_(inst_34745)){
var statearr_34783_34812 = state_34772__$1;
(statearr_34783_34812[(1)] = (15));

} else {
var statearr_34784_34813 = state_34772__$1;
(statearr_34784_34813[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (2))){
var state_34772__$1 = state_34772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34772__$1,(4),ch);
} else {
if((state_val_34773 === (11))){
var inst_34732 = (state_34772[(8)]);
var inst_34737 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34738 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34732);
var inst_34739 = cljs.core.async.timeout.call(null,(1000));
var inst_34740 = [inst_34738,inst_34739];
var inst_34741 = (new cljs.core.PersistentVector(null,2,(5),inst_34737,inst_34740,null));
var state_34772__$1 = state_34772;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34772__$1,(14),inst_34741);
} else {
if((state_val_34773 === (9))){
var inst_34732 = (state_34772[(8)]);
var inst_34758 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34759 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34732);
var inst_34760 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34759);
var inst_34761 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34760)].join('');
var inst_34762 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34761);
var state_34772__$1 = (function (){var statearr_34785 = state_34772;
(statearr_34785[(10)] = inst_34758);

return statearr_34785;
})();
var statearr_34786_34814 = state_34772__$1;
(statearr_34786_34814[(2)] = inst_34762);

(statearr_34786_34814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (5))){
var inst_34725 = (state_34772[(7)]);
var inst_34727 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34728 = (new cljs.core.PersistentArrayMap(null,2,inst_34727,null));
var inst_34729 = (new cljs.core.PersistentHashSet(null,inst_34728,null));
var inst_34730 = figwheel.client.focus_msgs.call(null,inst_34729,inst_34725);
var inst_34731 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34730);
var inst_34732 = cljs.core.first.call(null,inst_34730);
var inst_34733 = figwheel.client.autoload_QMARK_.call(null);
var state_34772__$1 = (function (){var statearr_34787 = state_34772;
(statearr_34787[(9)] = inst_34731);

(statearr_34787[(8)] = inst_34732);

return statearr_34787;
})();
if(cljs.core.truth_(inst_34733)){
var statearr_34788_34815 = state_34772__$1;
(statearr_34788_34815[(1)] = (8));

} else {
var statearr_34789_34816 = state_34772__$1;
(statearr_34789_34816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (14))){
var inst_34743 = (state_34772[(2)]);
var state_34772__$1 = state_34772;
var statearr_34790_34817 = state_34772__$1;
(statearr_34790_34817[(2)] = inst_34743);

(statearr_34790_34817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (16))){
var state_34772__$1 = state_34772;
var statearr_34791_34818 = state_34772__$1;
(statearr_34791_34818[(2)] = null);

(statearr_34791_34818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (10))){
var inst_34764 = (state_34772[(2)]);
var state_34772__$1 = (function (){var statearr_34792 = state_34772;
(statearr_34792[(11)] = inst_34764);

return statearr_34792;
})();
var statearr_34793_34819 = state_34772__$1;
(statearr_34793_34819[(2)] = null);

(statearr_34793_34819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34773 === (8))){
var inst_34731 = (state_34772[(9)]);
var inst_34735 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34731,opts);
var state_34772__$1 = state_34772;
if(cljs.core.truth_(inst_34735)){
var statearr_34794_34820 = state_34772__$1;
(statearr_34794_34820[(1)] = (11));

} else {
var statearr_34795_34821 = state_34772__$1;
(statearr_34795_34821[(1)] = (12));

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
});})(c__27115__auto___34803,ch))
;
return ((function (switch__27003__auto__,c__27115__auto___34803,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27004__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27004__auto____0 = (function (){
var statearr_34799 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34799[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27004__auto__);

(statearr_34799[(1)] = (1));

return statearr_34799;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27004__auto____1 = (function (state_34772){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_34772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e34800){if((e34800 instanceof Object)){
var ex__27007__auto__ = e34800;
var statearr_34801_34822 = state_34772;
(statearr_34801_34822[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34823 = state_34772;
state_34772 = G__34823;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27004__auto__ = function(state_34772){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27004__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27004__auto____1.call(this,state_34772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27004__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27004__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___34803,ch))
})();
var state__27117__auto__ = (function (){var statearr_34802 = f__27116__auto__.call(null);
(statearr_34802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___34803);

return statearr_34802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___34803,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34824_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34824_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34827 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34827){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34826){if((e34826 instanceof Error)){
var e = e34826;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34827], null));
} else {
var e = e34826;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34827))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34828){
var map__34837 = p__34828;
var map__34837__$1 = ((((!((map__34837 == null)))?((((map__34837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34837):map__34837);
var opts = map__34837__$1;
var build_id = cljs.core.get.call(null,map__34837__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34837,map__34837__$1,opts,build_id){
return (function (p__34839){
var vec__34840 = p__34839;
var seq__34841 = cljs.core.seq.call(null,vec__34840);
var first__34842 = cljs.core.first.call(null,seq__34841);
var seq__34841__$1 = cljs.core.next.call(null,seq__34841);
var map__34843 = first__34842;
var map__34843__$1 = ((((!((map__34843 == null)))?((((map__34843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34843):map__34843);
var msg = map__34843__$1;
var msg_name = cljs.core.get.call(null,map__34843__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34841__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34840,seq__34841,first__34842,seq__34841__$1,map__34843,map__34843__$1,msg,msg_name,_,map__34837,map__34837__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34840,seq__34841,first__34842,seq__34841__$1,map__34843,map__34843__$1,msg,msg_name,_,map__34837,map__34837__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34837,map__34837__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34851){
var vec__34852 = p__34851;
var seq__34853 = cljs.core.seq.call(null,vec__34852);
var first__34854 = cljs.core.first.call(null,seq__34853);
var seq__34853__$1 = cljs.core.next.call(null,seq__34853);
var map__34855 = first__34854;
var map__34855__$1 = ((((!((map__34855 == null)))?((((map__34855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34855):map__34855);
var msg = map__34855__$1;
var msg_name = cljs.core.get.call(null,map__34855__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34853__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34857){
var map__34869 = p__34857;
var map__34869__$1 = ((((!((map__34869 == null)))?((((map__34869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34869):map__34869);
var on_compile_warning = cljs.core.get.call(null,map__34869__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34869__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34869,map__34869__$1,on_compile_warning,on_compile_fail){
return (function (p__34871){
var vec__34872 = p__34871;
var seq__34873 = cljs.core.seq.call(null,vec__34872);
var first__34874 = cljs.core.first.call(null,seq__34873);
var seq__34873__$1 = cljs.core.next.call(null,seq__34873);
var map__34875 = first__34874;
var map__34875__$1 = ((((!((map__34875 == null)))?((((map__34875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34875):map__34875);
var msg = map__34875__$1;
var msg_name = cljs.core.get.call(null,map__34875__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34873__$1;
var pred__34877 = cljs.core._EQ_;
var expr__34878 = msg_name;
if(cljs.core.truth_(pred__34877.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34878))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34877.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34878))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34869,map__34869__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto__,msg_hist,msg_names,msg){
return (function (state_35106){
var state_val_35107 = (state_35106[(1)]);
if((state_val_35107 === (7))){
var inst_35026 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35026)){
var statearr_35108_35158 = state_35106__$1;
(statearr_35108_35158[(1)] = (8));

} else {
var statearr_35109_35159 = state_35106__$1;
(statearr_35109_35159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (20))){
var inst_35100 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35110_35160 = state_35106__$1;
(statearr_35110_35160[(2)] = inst_35100);

(statearr_35110_35160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (27))){
var inst_35096 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35111_35161 = state_35106__$1;
(statearr_35111_35161[(2)] = inst_35096);

(statearr_35111_35161[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (1))){
var inst_35019 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35019)){
var statearr_35112_35162 = state_35106__$1;
(statearr_35112_35162[(1)] = (2));

} else {
var statearr_35113_35163 = state_35106__$1;
(statearr_35113_35163[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (24))){
var inst_35098 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35114_35164 = state_35106__$1;
(statearr_35114_35164[(2)] = inst_35098);

(statearr_35114_35164[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (4))){
var inst_35104 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35106__$1,inst_35104);
} else {
if((state_val_35107 === (15))){
var inst_35102 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35115_35165 = state_35106__$1;
(statearr_35115_35165[(2)] = inst_35102);

(statearr_35115_35165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (21))){
var inst_35055 = (state_35106[(2)]);
var inst_35056 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35057 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35056);
var state_35106__$1 = (function (){var statearr_35116 = state_35106;
(statearr_35116[(7)] = inst_35055);

return statearr_35116;
})();
var statearr_35117_35166 = state_35106__$1;
(statearr_35117_35166[(2)] = inst_35057);

(statearr_35117_35166[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (31))){
var inst_35085 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35085)){
var statearr_35118_35167 = state_35106__$1;
(statearr_35118_35167[(1)] = (34));

} else {
var statearr_35119_35168 = state_35106__$1;
(statearr_35119_35168[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (32))){
var inst_35094 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35120_35169 = state_35106__$1;
(statearr_35120_35169[(2)] = inst_35094);

(statearr_35120_35169[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (33))){
var inst_35081 = (state_35106[(2)]);
var inst_35082 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35083 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35082);
var state_35106__$1 = (function (){var statearr_35121 = state_35106;
(statearr_35121[(8)] = inst_35081);

return statearr_35121;
})();
var statearr_35122_35170 = state_35106__$1;
(statearr_35122_35170[(2)] = inst_35083);

(statearr_35122_35170[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (13))){
var inst_35040 = figwheel.client.heads_up.clear.call(null);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35106__$1,(16),inst_35040);
} else {
if((state_val_35107 === (22))){
var inst_35061 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35062 = figwheel.client.heads_up.append_warning_message.call(null,inst_35061);
var state_35106__$1 = state_35106;
var statearr_35123_35171 = state_35106__$1;
(statearr_35123_35171[(2)] = inst_35062);

(statearr_35123_35171[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (36))){
var inst_35092 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35124_35172 = state_35106__$1;
(statearr_35124_35172[(2)] = inst_35092);

(statearr_35124_35172[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (29))){
var inst_35072 = (state_35106[(2)]);
var inst_35073 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35074 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35073);
var state_35106__$1 = (function (){var statearr_35125 = state_35106;
(statearr_35125[(9)] = inst_35072);

return statearr_35125;
})();
var statearr_35126_35173 = state_35106__$1;
(statearr_35126_35173[(2)] = inst_35074);

(statearr_35126_35173[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (6))){
var inst_35021 = (state_35106[(10)]);
var state_35106__$1 = state_35106;
var statearr_35127_35174 = state_35106__$1;
(statearr_35127_35174[(2)] = inst_35021);

(statearr_35127_35174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (28))){
var inst_35068 = (state_35106[(2)]);
var inst_35069 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35070 = figwheel.client.heads_up.display_warning.call(null,inst_35069);
var state_35106__$1 = (function (){var statearr_35128 = state_35106;
(statearr_35128[(11)] = inst_35068);

return statearr_35128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35106__$1,(29),inst_35070);
} else {
if((state_val_35107 === (25))){
var inst_35066 = figwheel.client.heads_up.clear.call(null);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35106__$1,(28),inst_35066);
} else {
if((state_val_35107 === (34))){
var inst_35087 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35106__$1,(37),inst_35087);
} else {
if((state_val_35107 === (17))){
var inst_35046 = (state_35106[(2)]);
var inst_35047 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35048 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35047);
var state_35106__$1 = (function (){var statearr_35129 = state_35106;
(statearr_35129[(12)] = inst_35046);

return statearr_35129;
})();
var statearr_35130_35175 = state_35106__$1;
(statearr_35130_35175[(2)] = inst_35048);

(statearr_35130_35175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (3))){
var inst_35038 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35038)){
var statearr_35131_35176 = state_35106__$1;
(statearr_35131_35176[(1)] = (13));

} else {
var statearr_35132_35177 = state_35106__$1;
(statearr_35132_35177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (12))){
var inst_35034 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35133_35178 = state_35106__$1;
(statearr_35133_35178[(2)] = inst_35034);

(statearr_35133_35178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (2))){
var inst_35021 = (state_35106[(10)]);
var inst_35021__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35106__$1 = (function (){var statearr_35134 = state_35106;
(statearr_35134[(10)] = inst_35021__$1);

return statearr_35134;
})();
if(cljs.core.truth_(inst_35021__$1)){
var statearr_35135_35179 = state_35106__$1;
(statearr_35135_35179[(1)] = (5));

} else {
var statearr_35136_35180 = state_35106__$1;
(statearr_35136_35180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (23))){
var inst_35064 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35064)){
var statearr_35137_35181 = state_35106__$1;
(statearr_35137_35181[(1)] = (25));

} else {
var statearr_35138_35182 = state_35106__$1;
(statearr_35138_35182[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (35))){
var state_35106__$1 = state_35106;
var statearr_35139_35183 = state_35106__$1;
(statearr_35139_35183[(2)] = null);

(statearr_35139_35183[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (19))){
var inst_35059 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35059)){
var statearr_35140_35184 = state_35106__$1;
(statearr_35140_35184[(1)] = (22));

} else {
var statearr_35141_35185 = state_35106__$1;
(statearr_35141_35185[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (11))){
var inst_35030 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35142_35186 = state_35106__$1;
(statearr_35142_35186[(2)] = inst_35030);

(statearr_35142_35186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (9))){
var inst_35032 = figwheel.client.heads_up.clear.call(null);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35106__$1,(12),inst_35032);
} else {
if((state_val_35107 === (5))){
var inst_35023 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35106__$1 = state_35106;
var statearr_35143_35187 = state_35106__$1;
(statearr_35143_35187[(2)] = inst_35023);

(statearr_35143_35187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (14))){
var inst_35050 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35050)){
var statearr_35144_35188 = state_35106__$1;
(statearr_35144_35188[(1)] = (18));

} else {
var statearr_35145_35189 = state_35106__$1;
(statearr_35145_35189[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (26))){
var inst_35076 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35076)){
var statearr_35146_35190 = state_35106__$1;
(statearr_35146_35190[(1)] = (30));

} else {
var statearr_35147_35191 = state_35106__$1;
(statearr_35147_35191[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (16))){
var inst_35042 = (state_35106[(2)]);
var inst_35043 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35044 = figwheel.client.heads_up.display_exception.call(null,inst_35043);
var state_35106__$1 = (function (){var statearr_35148 = state_35106;
(statearr_35148[(13)] = inst_35042);

return statearr_35148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35106__$1,(17),inst_35044);
} else {
if((state_val_35107 === (30))){
var inst_35078 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35079 = figwheel.client.heads_up.display_warning.call(null,inst_35078);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35106__$1,(33),inst_35079);
} else {
if((state_val_35107 === (10))){
var inst_35036 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35149_35192 = state_35106__$1;
(statearr_35149_35192[(2)] = inst_35036);

(statearr_35149_35192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (18))){
var inst_35052 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35053 = figwheel.client.heads_up.display_exception.call(null,inst_35052);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35106__$1,(21),inst_35053);
} else {
if((state_val_35107 === (37))){
var inst_35089 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35150_35193 = state_35106__$1;
(statearr_35150_35193[(2)] = inst_35089);

(statearr_35150_35193[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (8))){
var inst_35028 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35106__$1,(11),inst_35028);
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
});})(c__27115__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27003__auto__,c__27115__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto____0 = (function (){
var statearr_35154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35154[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto__);

(statearr_35154[(1)] = (1));

return statearr_35154;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto____1 = (function (state_35106){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_35106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e35155){if((e35155 instanceof Object)){
var ex__27007__auto__ = e35155;
var statearr_35156_35194 = state_35106;
(statearr_35156_35194[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35195 = state_35106;
state_35106 = G__35195;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto__ = function(state_35106){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto____1.call(this,state_35106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto__,msg_hist,msg_names,msg))
})();
var state__27117__auto__ = (function (){var statearr_35157 = f__27116__auto__.call(null);
(statearr_35157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto__);

return statearr_35157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto__,msg_hist,msg_names,msg))
);

return c__27115__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27115__auto___35258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___35258,ch){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___35258,ch){
return (function (state_35241){
var state_val_35242 = (state_35241[(1)]);
if((state_val_35242 === (1))){
var state_35241__$1 = state_35241;
var statearr_35243_35259 = state_35241__$1;
(statearr_35243_35259[(2)] = null);

(statearr_35243_35259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35242 === (2))){
var state_35241__$1 = state_35241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35241__$1,(4),ch);
} else {
if((state_val_35242 === (3))){
var inst_35239 = (state_35241[(2)]);
var state_35241__$1 = state_35241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35241__$1,inst_35239);
} else {
if((state_val_35242 === (4))){
var inst_35229 = (state_35241[(7)]);
var inst_35229__$1 = (state_35241[(2)]);
var state_35241__$1 = (function (){var statearr_35244 = state_35241;
(statearr_35244[(7)] = inst_35229__$1);

return statearr_35244;
})();
if(cljs.core.truth_(inst_35229__$1)){
var statearr_35245_35260 = state_35241__$1;
(statearr_35245_35260[(1)] = (5));

} else {
var statearr_35246_35261 = state_35241__$1;
(statearr_35246_35261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35242 === (5))){
var inst_35229 = (state_35241[(7)]);
var inst_35231 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35229);
var state_35241__$1 = state_35241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35241__$1,(8),inst_35231);
} else {
if((state_val_35242 === (6))){
var state_35241__$1 = state_35241;
var statearr_35247_35262 = state_35241__$1;
(statearr_35247_35262[(2)] = null);

(statearr_35247_35262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35242 === (7))){
var inst_35237 = (state_35241[(2)]);
var state_35241__$1 = state_35241;
var statearr_35248_35263 = state_35241__$1;
(statearr_35248_35263[(2)] = inst_35237);

(statearr_35248_35263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35242 === (8))){
var inst_35233 = (state_35241[(2)]);
var state_35241__$1 = (function (){var statearr_35249 = state_35241;
(statearr_35249[(8)] = inst_35233);

return statearr_35249;
})();
var statearr_35250_35264 = state_35241__$1;
(statearr_35250_35264[(2)] = null);

(statearr_35250_35264[(1)] = (2));


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
});})(c__27115__auto___35258,ch))
;
return ((function (switch__27003__auto__,c__27115__auto___35258,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27004__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27004__auto____0 = (function (){
var statearr_35254 = [null,null,null,null,null,null,null,null,null];
(statearr_35254[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27004__auto__);

(statearr_35254[(1)] = (1));

return statearr_35254;
});
var figwheel$client$heads_up_plugin_$_state_machine__27004__auto____1 = (function (state_35241){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_35241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e35255){if((e35255 instanceof Object)){
var ex__27007__auto__ = e35255;
var statearr_35256_35265 = state_35241;
(statearr_35256_35265[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35266 = state_35241;
state_35241 = G__35266;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27004__auto__ = function(state_35241){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27004__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27004__auto____1.call(this,state_35241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27004__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27004__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___35258,ch))
})();
var state__27117__auto__ = (function (){var statearr_35257 = f__27116__auto__.call(null);
(statearr_35257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___35258);

return statearr_35257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___35258,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto__){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto__){
return (function (state_35287){
var state_val_35288 = (state_35287[(1)]);
if((state_val_35288 === (1))){
var inst_35282 = cljs.core.async.timeout.call(null,(3000));
var state_35287__$1 = state_35287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35287__$1,(2),inst_35282);
} else {
if((state_val_35288 === (2))){
var inst_35284 = (state_35287[(2)]);
var inst_35285 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35287__$1 = (function (){var statearr_35289 = state_35287;
(statearr_35289[(7)] = inst_35284);

return statearr_35289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35287__$1,inst_35285);
} else {
return null;
}
}
});})(c__27115__auto__))
;
return ((function (switch__27003__auto__,c__27115__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27004__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27004__auto____0 = (function (){
var statearr_35293 = [null,null,null,null,null,null,null,null];
(statearr_35293[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27004__auto__);

(statearr_35293[(1)] = (1));

return statearr_35293;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27004__auto____1 = (function (state_35287){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_35287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e35294){if((e35294 instanceof Object)){
var ex__27007__auto__ = e35294;
var statearr_35295_35297 = state_35287;
(statearr_35295_35297[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35298 = state_35287;
state_35287 = G__35298;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27004__auto__ = function(state_35287){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27004__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27004__auto____1.call(this,state_35287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27004__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27004__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto__))
})();
var state__27117__auto__ = (function (){var statearr_35296 = f__27116__auto__.call(null);
(statearr_35296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto__);

return statearr_35296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto__))
);

return c__27115__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35321){
var state_val_35322 = (state_35321[(1)]);
if((state_val_35322 === (1))){
var inst_35315 = cljs.core.async.timeout.call(null,(2000));
var state_35321__$1 = state_35321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35321__$1,(2),inst_35315);
} else {
if((state_val_35322 === (2))){
var inst_35317 = (state_35321[(2)]);
var inst_35318 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35319 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35318);
var state_35321__$1 = (function (){var statearr_35323 = state_35321;
(statearr_35323[(7)] = inst_35317);

return statearr_35323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35321__$1,inst_35319);
} else {
return null;
}
}
});})(c__27115__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27003__auto__,c__27115__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto____0 = (function (){
var statearr_35327 = [null,null,null,null,null,null,null,null];
(statearr_35327[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto__);

(statearr_35327[(1)] = (1));

return statearr_35327;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto____1 = (function (state_35321){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_35321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e35328){if((e35328 instanceof Object)){
var ex__27007__auto__ = e35328;
var statearr_35329_35331 = state_35321;
(statearr_35329_35331[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35332 = state_35321;
state_35321 = G__35332;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto__ = function(state_35321){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto____1.call(this,state_35321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27117__auto__ = (function (){var statearr_35330 = f__27116__auto__.call(null);
(statearr_35330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto__);

return statearr_35330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto__,figwheel_version,temp__4657__auto__))
);

return c__27115__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35333){
var map__35337 = p__35333;
var map__35337__$1 = ((((!((map__35337 == null)))?((((map__35337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35337):map__35337);
var file = cljs.core.get.call(null,map__35337__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35337__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35337__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35339 = "";
var G__35339__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35339),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35339);
var G__35339__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35339__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35339__$1);
if(cljs.core.truth_((function (){var and__24765__auto__ = line;
if(cljs.core.truth_(and__24765__auto__)){
return column;
} else {
return and__24765__auto__;
}
})())){
return [cljs.core.str(G__35339__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35339__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35340){
var map__35347 = p__35340;
var map__35347__$1 = ((((!((map__35347 == null)))?((((map__35347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35347):map__35347);
var ed = map__35347__$1;
var formatted_exception = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35349_35353 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35350_35354 = null;
var count__35351_35355 = (0);
var i__35352_35356 = (0);
while(true){
if((i__35352_35356 < count__35351_35355)){
var msg_35357 = cljs.core._nth.call(null,chunk__35350_35354,i__35352_35356);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35357);

var G__35358 = seq__35349_35353;
var G__35359 = chunk__35350_35354;
var G__35360 = count__35351_35355;
var G__35361 = (i__35352_35356 + (1));
seq__35349_35353 = G__35358;
chunk__35350_35354 = G__35359;
count__35351_35355 = G__35360;
i__35352_35356 = G__35361;
continue;
} else {
var temp__4657__auto___35362 = cljs.core.seq.call(null,seq__35349_35353);
if(temp__4657__auto___35362){
var seq__35349_35363__$1 = temp__4657__auto___35362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35349_35363__$1)){
var c__25588__auto___35364 = cljs.core.chunk_first.call(null,seq__35349_35363__$1);
var G__35365 = cljs.core.chunk_rest.call(null,seq__35349_35363__$1);
var G__35366 = c__25588__auto___35364;
var G__35367 = cljs.core.count.call(null,c__25588__auto___35364);
var G__35368 = (0);
seq__35349_35353 = G__35365;
chunk__35350_35354 = G__35366;
count__35351_35355 = G__35367;
i__35352_35356 = G__35368;
continue;
} else {
var msg_35369 = cljs.core.first.call(null,seq__35349_35363__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35369);

var G__35370 = cljs.core.next.call(null,seq__35349_35363__$1);
var G__35371 = null;
var G__35372 = (0);
var G__35373 = (0);
seq__35349_35353 = G__35370;
chunk__35350_35354 = G__35371;
count__35351_35355 = G__35372;
i__35352_35356 = G__35373;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35374){
var map__35377 = p__35374;
var map__35377__$1 = ((((!((map__35377 == null)))?((((map__35377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35377):map__35377);
var w = map__35377__$1;
var message = cljs.core.get.call(null,map__35377__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24765__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24765__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24765__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35389 = cljs.core.seq.call(null,plugins);
var chunk__35390 = null;
var count__35391 = (0);
var i__35392 = (0);
while(true){
if((i__35392 < count__35391)){
var vec__35393 = cljs.core._nth.call(null,chunk__35390,i__35392);
var k = cljs.core.nth.call(null,vec__35393,(0),null);
var plugin = cljs.core.nth.call(null,vec__35393,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35399 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35389,chunk__35390,count__35391,i__35392,pl_35399,vec__35393,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35399.call(null,msg_hist);
});})(seq__35389,chunk__35390,count__35391,i__35392,pl_35399,vec__35393,k,plugin))
);
} else {
}

var G__35400 = seq__35389;
var G__35401 = chunk__35390;
var G__35402 = count__35391;
var G__35403 = (i__35392 + (1));
seq__35389 = G__35400;
chunk__35390 = G__35401;
count__35391 = G__35402;
i__35392 = G__35403;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35389);
if(temp__4657__auto__){
var seq__35389__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35389__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__35389__$1);
var G__35404 = cljs.core.chunk_rest.call(null,seq__35389__$1);
var G__35405 = c__25588__auto__;
var G__35406 = cljs.core.count.call(null,c__25588__auto__);
var G__35407 = (0);
seq__35389 = G__35404;
chunk__35390 = G__35405;
count__35391 = G__35406;
i__35392 = G__35407;
continue;
} else {
var vec__35396 = cljs.core.first.call(null,seq__35389__$1);
var k = cljs.core.nth.call(null,vec__35396,(0),null);
var plugin = cljs.core.nth.call(null,vec__35396,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35408 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35389,chunk__35390,count__35391,i__35392,pl_35408,vec__35396,k,plugin,seq__35389__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35408.call(null,msg_hist);
});})(seq__35389,chunk__35390,count__35391,i__35392,pl_35408,vec__35396,k,plugin,seq__35389__$1,temp__4657__auto__))
);
} else {
}

var G__35409 = cljs.core.next.call(null,seq__35389__$1);
var G__35410 = null;
var G__35411 = (0);
var G__35412 = (0);
seq__35389 = G__35409;
chunk__35390 = G__35410;
count__35391 = G__35411;
i__35392 = G__35412;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35413 = [];
var len__25852__auto___35420 = arguments.length;
var i__25853__auto___35421 = (0);
while(true){
if((i__25853__auto___35421 < len__25852__auto___35420)){
args35413.push((arguments[i__25853__auto___35421]));

var G__35422 = (i__25853__auto___35421 + (1));
i__25853__auto___35421 = G__35422;
continue;
} else {
}
break;
}

var G__35415 = args35413.length;
switch (G__35415) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35413.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35416_35424 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35417_35425 = null;
var count__35418_35426 = (0);
var i__35419_35427 = (0);
while(true){
if((i__35419_35427 < count__35418_35426)){
var msg_35428 = cljs.core._nth.call(null,chunk__35417_35425,i__35419_35427);
figwheel.client.socket.handle_incoming_message.call(null,msg_35428);

var G__35429 = seq__35416_35424;
var G__35430 = chunk__35417_35425;
var G__35431 = count__35418_35426;
var G__35432 = (i__35419_35427 + (1));
seq__35416_35424 = G__35429;
chunk__35417_35425 = G__35430;
count__35418_35426 = G__35431;
i__35419_35427 = G__35432;
continue;
} else {
var temp__4657__auto___35433 = cljs.core.seq.call(null,seq__35416_35424);
if(temp__4657__auto___35433){
var seq__35416_35434__$1 = temp__4657__auto___35433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35416_35434__$1)){
var c__25588__auto___35435 = cljs.core.chunk_first.call(null,seq__35416_35434__$1);
var G__35436 = cljs.core.chunk_rest.call(null,seq__35416_35434__$1);
var G__35437 = c__25588__auto___35435;
var G__35438 = cljs.core.count.call(null,c__25588__auto___35435);
var G__35439 = (0);
seq__35416_35424 = G__35436;
chunk__35417_35425 = G__35437;
count__35418_35426 = G__35438;
i__35419_35427 = G__35439;
continue;
} else {
var msg_35440 = cljs.core.first.call(null,seq__35416_35434__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35440);

var G__35441 = cljs.core.next.call(null,seq__35416_35434__$1);
var G__35442 = null;
var G__35443 = (0);
var G__35444 = (0);
seq__35416_35424 = G__35441;
chunk__35417_35425 = G__35442;
count__35418_35426 = G__35443;
i__35419_35427 = G__35444;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25859__auto__ = [];
var len__25852__auto___35449 = arguments.length;
var i__25853__auto___35450 = (0);
while(true){
if((i__25853__auto___35450 < len__25852__auto___35449)){
args__25859__auto__.push((arguments[i__25853__auto___35450]));

var G__35451 = (i__25853__auto___35450 + (1));
i__25853__auto___35450 = G__35451;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35446){
var map__35447 = p__35446;
var map__35447__$1 = ((((!((map__35447 == null)))?((((map__35447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35447):map__35447);
var opts = map__35447__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35445){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35445));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35453){if((e35453 instanceof Error)){
var e = e35453;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35453;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35457){
var map__35458 = p__35457;
var map__35458__$1 = ((((!((map__35458 == null)))?((((map__35458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35458):map__35458);
var msg_name = cljs.core.get.call(null,map__35458__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484085458022
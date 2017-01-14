// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32463){
var map__32488 = p__32463;
var map__32488__$1 = ((((!((map__32488 == null)))?((((map__32488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32488):map__32488);
var m = map__32488__$1;
var n = cljs.core.get.call(null,map__32488__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32488__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32490_32512 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32491_32513 = null;
var count__32492_32514 = (0);
var i__32493_32515 = (0);
while(true){
if((i__32493_32515 < count__32492_32514)){
var f_32516 = cljs.core._nth.call(null,chunk__32491_32513,i__32493_32515);
cljs.core.println.call(null,"  ",f_32516);

var G__32517 = seq__32490_32512;
var G__32518 = chunk__32491_32513;
var G__32519 = count__32492_32514;
var G__32520 = (i__32493_32515 + (1));
seq__32490_32512 = G__32517;
chunk__32491_32513 = G__32518;
count__32492_32514 = G__32519;
i__32493_32515 = G__32520;
continue;
} else {
var temp__4657__auto___32521 = cljs.core.seq.call(null,seq__32490_32512);
if(temp__4657__auto___32521){
var seq__32490_32522__$1 = temp__4657__auto___32521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32490_32522__$1)){
var c__25588__auto___32523 = cljs.core.chunk_first.call(null,seq__32490_32522__$1);
var G__32524 = cljs.core.chunk_rest.call(null,seq__32490_32522__$1);
var G__32525 = c__25588__auto___32523;
var G__32526 = cljs.core.count.call(null,c__25588__auto___32523);
var G__32527 = (0);
seq__32490_32512 = G__32524;
chunk__32491_32513 = G__32525;
count__32492_32514 = G__32526;
i__32493_32515 = G__32527;
continue;
} else {
var f_32528 = cljs.core.first.call(null,seq__32490_32522__$1);
cljs.core.println.call(null,"  ",f_32528);

var G__32529 = cljs.core.next.call(null,seq__32490_32522__$1);
var G__32530 = null;
var G__32531 = (0);
var G__32532 = (0);
seq__32490_32512 = G__32529;
chunk__32491_32513 = G__32530;
count__32492_32514 = G__32531;
i__32493_32515 = G__32532;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32533 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24777__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32533);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32533)))?cljs.core.second.call(null,arglists_32533):arglists_32533));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32494_32534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32495_32535 = null;
var count__32496_32536 = (0);
var i__32497_32537 = (0);
while(true){
if((i__32497_32537 < count__32496_32536)){
var vec__32498_32538 = cljs.core._nth.call(null,chunk__32495_32535,i__32497_32537);
var name_32539 = cljs.core.nth.call(null,vec__32498_32538,(0),null);
var map__32501_32540 = cljs.core.nth.call(null,vec__32498_32538,(1),null);
var map__32501_32541__$1 = ((((!((map__32501_32540 == null)))?((((map__32501_32540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32501_32540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32501_32540):map__32501_32540);
var doc_32542 = cljs.core.get.call(null,map__32501_32541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32543 = cljs.core.get.call(null,map__32501_32541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32539);

cljs.core.println.call(null," ",arglists_32543);

if(cljs.core.truth_(doc_32542)){
cljs.core.println.call(null," ",doc_32542);
} else {
}

var G__32544 = seq__32494_32534;
var G__32545 = chunk__32495_32535;
var G__32546 = count__32496_32536;
var G__32547 = (i__32497_32537 + (1));
seq__32494_32534 = G__32544;
chunk__32495_32535 = G__32545;
count__32496_32536 = G__32546;
i__32497_32537 = G__32547;
continue;
} else {
var temp__4657__auto___32548 = cljs.core.seq.call(null,seq__32494_32534);
if(temp__4657__auto___32548){
var seq__32494_32549__$1 = temp__4657__auto___32548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32494_32549__$1)){
var c__25588__auto___32550 = cljs.core.chunk_first.call(null,seq__32494_32549__$1);
var G__32551 = cljs.core.chunk_rest.call(null,seq__32494_32549__$1);
var G__32552 = c__25588__auto___32550;
var G__32553 = cljs.core.count.call(null,c__25588__auto___32550);
var G__32554 = (0);
seq__32494_32534 = G__32551;
chunk__32495_32535 = G__32552;
count__32496_32536 = G__32553;
i__32497_32537 = G__32554;
continue;
} else {
var vec__32503_32555 = cljs.core.first.call(null,seq__32494_32549__$1);
var name_32556 = cljs.core.nth.call(null,vec__32503_32555,(0),null);
var map__32506_32557 = cljs.core.nth.call(null,vec__32503_32555,(1),null);
var map__32506_32558__$1 = ((((!((map__32506_32557 == null)))?((((map__32506_32557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32506_32557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32506_32557):map__32506_32557);
var doc_32559 = cljs.core.get.call(null,map__32506_32558__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32560 = cljs.core.get.call(null,map__32506_32558__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32556);

cljs.core.println.call(null," ",arglists_32560);

if(cljs.core.truth_(doc_32559)){
cljs.core.println.call(null," ",doc_32559);
} else {
}

var G__32561 = cljs.core.next.call(null,seq__32494_32549__$1);
var G__32562 = null;
var G__32563 = (0);
var G__32564 = (0);
seq__32494_32534 = G__32561;
chunk__32495_32535 = G__32562;
count__32496_32536 = G__32563;
i__32497_32537 = G__32564;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32508 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32509 = null;
var count__32510 = (0);
var i__32511 = (0);
while(true){
if((i__32511 < count__32510)){
var role = cljs.core._nth.call(null,chunk__32509,i__32511);
var temp__4657__auto___32565__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32565__$1)){
var spec_32566 = temp__4657__auto___32565__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32566));
} else {
}

var G__32567 = seq__32508;
var G__32568 = chunk__32509;
var G__32569 = count__32510;
var G__32570 = (i__32511 + (1));
seq__32508 = G__32567;
chunk__32509 = G__32568;
count__32510 = G__32569;
i__32511 = G__32570;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32508);
if(temp__4657__auto____$1){
var seq__32508__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32508__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__32508__$1);
var G__32571 = cljs.core.chunk_rest.call(null,seq__32508__$1);
var G__32572 = c__25588__auto__;
var G__32573 = cljs.core.count.call(null,c__25588__auto__);
var G__32574 = (0);
seq__32508 = G__32571;
chunk__32509 = G__32572;
count__32510 = G__32573;
i__32511 = G__32574;
continue;
} else {
var role = cljs.core.first.call(null,seq__32508__$1);
var temp__4657__auto___32575__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32575__$2)){
var spec_32576 = temp__4657__auto___32575__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32576));
} else {
}

var G__32577 = cljs.core.next.call(null,seq__32508__$1);
var G__32578 = null;
var G__32579 = (0);
var G__32580 = (0);
seq__32508 = G__32577;
chunk__32509 = G__32578;
count__32510 = G__32579;
i__32511 = G__32580;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1484085455829
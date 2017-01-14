// Compiled by ClojureScript 1.9.229 {}
goog.provide('monet.core');
goog.require('cljs.core');
monet.core.animation_frame = (function (){var or__24777__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
var or__24777__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__24777__auto____$1)){
return or__24777__auto____$1;
} else {
var or__24777__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__24777__auto____$2)){
return or__24777__auto____$2;
} else {
var or__24777__auto____$3 = window.oRequestAnimationFrame;
if(cljs.core.truth_(or__24777__auto____$3)){
return or__24777__auto____$3;
} else {
var or__24777__auto____$4 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__24777__auto____$4)){
return or__24777__auto____$4;
} else {
return ((function (or__24777__auto____$4,or__24777__auto____$3,or__24777__auto____$2,or__24777__auto____$1,or__24777__auto__){
return (function (callback){
return setTimeout(callback,(17));
});
;})(or__24777__auto____$4,or__24777__auto____$3,or__24777__auto____$2,or__24777__auto____$1,or__24777__auto__))
}
}
}
}
}
})();

//# sourceMappingURL=core.js.map?rel=1484085452118
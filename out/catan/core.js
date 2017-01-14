// Compiled by ClojureScript 1.9.229 {}
goog.provide('catan.core');
goog.require('cljs.core');
goog.require('monet.canvas');
catan.core.cos = (function catan$core$cos(x){
return Math.cos(x);
});
catan.core.sin = (function catan$core$sin(x){
return Math.sin(x);
});
console.log(catan.core.cos.call(null,(0)));
catan.core.canvas_dom = document.getElementById("board");
catan.core.base_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"h","h",1109658740),(600),new cljs.core.Keyword(null,"w","w",354169001),(600)], null);
catan.core.size = (100);
catan.core.width = ((2) * catan.core.size);
catan.core.height = (catan.core.width * ((3) / (4)));
catan.core.monet_canvas = monet.canvas.init.call(null,catan.core.canvas_dom,"2d");
catan.core.hex_corner = (function catan$core$hex_corner(center_x,center_y,size,i){
var angle_rad = ((3.1415 / (180)) * ((60) * i));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (size * catan.core.cos.call(null,angle_rad))),(center_y + (size * catan.core.sin.call(null,angle_rad)))], null);
});
console.log(catan.core.hex_corner.call(null,(100),(100),(100),(0)));
catan.core.pixel_from_coords = (function catan$core$pixel_from_coords(x,y,w,h){
return null;
});
catan.core.move_line_to = (function catan$core$move_line_to(ctx,x,y,size,n){
var vec__33026 = catan.core.hex_corner.call(null,x,y,size,n);
var x1 = cljs.core.nth.call(null,vec__33026,(0),null);
var y1 = cljs.core.nth.call(null,vec__33026,(1),null);
return monet.canvas.line_to.call(null,ctx,x1,y1);
});
catan.core.hexagon = (function catan$core$hexagon(state){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state);
return monet.canvas.entity.call(null,state,null,((function (x,y){
return (function (ctx,val){
return monet.canvas.fill.call(null,monet.canvas.close_path.call(null,catan.core.move_line_to.call(null,catan.core.move_line_to.call(null,catan.core.move_line_to.call(null,catan.core.move_line_to.call(null,catan.core.move_line_to.call(null,catan.core.move_line_to.call(null,catan.core.move_line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,monet.canvas.fill_style.call(null,ctx,"#002030")),x,y),x,y,(30),(0)),x,y,(30),(1)),x,y,(30),(2)),x,y,(30),(3)),x,y,(30),(4)),x,y,(30),(5)),x,y,(30),(6))));
});})(x,y))
);
});
monet.canvas.add_entity.call(null,catan.core.monet_canvas,new cljs.core.Keyword(null,"background","background",-863952629),catan.core.hexagon.call(null,catan.core.base_state));

//# sourceMappingURL=core.js.map?rel=1484158889937
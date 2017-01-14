// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24777__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24777__auto__){
return or__24777__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24777__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30092_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30092_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30097 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30098 = null;
var count__30099 = (0);
var i__30100 = (0);
while(true){
if((i__30100 < count__30099)){
var n = cljs.core._nth.call(null,chunk__30098,i__30100);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30101 = seq__30097;
var G__30102 = chunk__30098;
var G__30103 = count__30099;
var G__30104 = (i__30100 + (1));
seq__30097 = G__30101;
chunk__30098 = G__30102;
count__30099 = G__30103;
i__30100 = G__30104;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30097);
if(temp__4657__auto__){
var seq__30097__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30097__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__30097__$1);
var G__30105 = cljs.core.chunk_rest.call(null,seq__30097__$1);
var G__30106 = c__25588__auto__;
var G__30107 = cljs.core.count.call(null,c__25588__auto__);
var G__30108 = (0);
seq__30097 = G__30105;
chunk__30098 = G__30106;
count__30099 = G__30107;
i__30100 = G__30108;
continue;
} else {
var n = cljs.core.first.call(null,seq__30097__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30109 = cljs.core.next.call(null,seq__30097__$1);
var G__30110 = null;
var G__30111 = (0);
var G__30112 = (0);
seq__30097 = G__30109;
chunk__30098 = G__30110;
count__30099 = G__30111;
i__30100 = G__30112;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30163_30174 = cljs.core.seq.call(null,deps);
var chunk__30164_30175 = null;
var count__30165_30176 = (0);
var i__30166_30177 = (0);
while(true){
if((i__30166_30177 < count__30165_30176)){
var dep_30178 = cljs.core._nth.call(null,chunk__30164_30175,i__30166_30177);
topo_sort_helper_STAR_.call(null,dep_30178,(depth + (1)),state);

var G__30179 = seq__30163_30174;
var G__30180 = chunk__30164_30175;
var G__30181 = count__30165_30176;
var G__30182 = (i__30166_30177 + (1));
seq__30163_30174 = G__30179;
chunk__30164_30175 = G__30180;
count__30165_30176 = G__30181;
i__30166_30177 = G__30182;
continue;
} else {
var temp__4657__auto___30183 = cljs.core.seq.call(null,seq__30163_30174);
if(temp__4657__auto___30183){
var seq__30163_30184__$1 = temp__4657__auto___30183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30163_30184__$1)){
var c__25588__auto___30185 = cljs.core.chunk_first.call(null,seq__30163_30184__$1);
var G__30186 = cljs.core.chunk_rest.call(null,seq__30163_30184__$1);
var G__30187 = c__25588__auto___30185;
var G__30188 = cljs.core.count.call(null,c__25588__auto___30185);
var G__30189 = (0);
seq__30163_30174 = G__30186;
chunk__30164_30175 = G__30187;
count__30165_30176 = G__30188;
i__30166_30177 = G__30189;
continue;
} else {
var dep_30190 = cljs.core.first.call(null,seq__30163_30184__$1);
topo_sort_helper_STAR_.call(null,dep_30190,(depth + (1)),state);

var G__30191 = cljs.core.next.call(null,seq__30163_30184__$1);
var G__30192 = null;
var G__30193 = (0);
var G__30194 = (0);
seq__30163_30174 = G__30191;
chunk__30164_30175 = G__30192;
count__30165_30176 = G__30193;
i__30166_30177 = G__30194;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30167){
var vec__30171 = p__30167;
var seq__30172 = cljs.core.seq.call(null,vec__30171);
var first__30173 = cljs.core.first.call(null,seq__30172);
var seq__30172__$1 = cljs.core.next.call(null,seq__30172);
var x = first__30173;
var xs = seq__30172__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30171,seq__30172,first__30173,seq__30172__$1,x,xs,get_deps__$1){
return (function (p1__30113_SHARP_){
return clojure.set.difference.call(null,p1__30113_SHARP_,x);
});})(vec__30171,seq__30172,first__30173,seq__30172__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30208 = cljs.core.seq.call(null,provides);
var chunk__30209 = null;
var count__30210 = (0);
var i__30211 = (0);
while(true){
if((i__30211 < count__30210)){
var prov = cljs.core._nth.call(null,chunk__30209,i__30211);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30212_30220 = cljs.core.seq.call(null,requires);
var chunk__30213_30221 = null;
var count__30214_30222 = (0);
var i__30215_30223 = (0);
while(true){
if((i__30215_30223 < count__30214_30222)){
var req_30224 = cljs.core._nth.call(null,chunk__30213_30221,i__30215_30223);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30224,prov);

var G__30225 = seq__30212_30220;
var G__30226 = chunk__30213_30221;
var G__30227 = count__30214_30222;
var G__30228 = (i__30215_30223 + (1));
seq__30212_30220 = G__30225;
chunk__30213_30221 = G__30226;
count__30214_30222 = G__30227;
i__30215_30223 = G__30228;
continue;
} else {
var temp__4657__auto___30229 = cljs.core.seq.call(null,seq__30212_30220);
if(temp__4657__auto___30229){
var seq__30212_30230__$1 = temp__4657__auto___30229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30212_30230__$1)){
var c__25588__auto___30231 = cljs.core.chunk_first.call(null,seq__30212_30230__$1);
var G__30232 = cljs.core.chunk_rest.call(null,seq__30212_30230__$1);
var G__30233 = c__25588__auto___30231;
var G__30234 = cljs.core.count.call(null,c__25588__auto___30231);
var G__30235 = (0);
seq__30212_30220 = G__30232;
chunk__30213_30221 = G__30233;
count__30214_30222 = G__30234;
i__30215_30223 = G__30235;
continue;
} else {
var req_30236 = cljs.core.first.call(null,seq__30212_30230__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30236,prov);

var G__30237 = cljs.core.next.call(null,seq__30212_30230__$1);
var G__30238 = null;
var G__30239 = (0);
var G__30240 = (0);
seq__30212_30220 = G__30237;
chunk__30213_30221 = G__30238;
count__30214_30222 = G__30239;
i__30215_30223 = G__30240;
continue;
}
} else {
}
}
break;
}

var G__30241 = seq__30208;
var G__30242 = chunk__30209;
var G__30243 = count__30210;
var G__30244 = (i__30211 + (1));
seq__30208 = G__30241;
chunk__30209 = G__30242;
count__30210 = G__30243;
i__30211 = G__30244;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30208);
if(temp__4657__auto__){
var seq__30208__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30208__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__30208__$1);
var G__30245 = cljs.core.chunk_rest.call(null,seq__30208__$1);
var G__30246 = c__25588__auto__;
var G__30247 = cljs.core.count.call(null,c__25588__auto__);
var G__30248 = (0);
seq__30208 = G__30245;
chunk__30209 = G__30246;
count__30210 = G__30247;
i__30211 = G__30248;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30208__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30216_30249 = cljs.core.seq.call(null,requires);
var chunk__30217_30250 = null;
var count__30218_30251 = (0);
var i__30219_30252 = (0);
while(true){
if((i__30219_30252 < count__30218_30251)){
var req_30253 = cljs.core._nth.call(null,chunk__30217_30250,i__30219_30252);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30253,prov);

var G__30254 = seq__30216_30249;
var G__30255 = chunk__30217_30250;
var G__30256 = count__30218_30251;
var G__30257 = (i__30219_30252 + (1));
seq__30216_30249 = G__30254;
chunk__30217_30250 = G__30255;
count__30218_30251 = G__30256;
i__30219_30252 = G__30257;
continue;
} else {
var temp__4657__auto___30258__$1 = cljs.core.seq.call(null,seq__30216_30249);
if(temp__4657__auto___30258__$1){
var seq__30216_30259__$1 = temp__4657__auto___30258__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30216_30259__$1)){
var c__25588__auto___30260 = cljs.core.chunk_first.call(null,seq__30216_30259__$1);
var G__30261 = cljs.core.chunk_rest.call(null,seq__30216_30259__$1);
var G__30262 = c__25588__auto___30260;
var G__30263 = cljs.core.count.call(null,c__25588__auto___30260);
var G__30264 = (0);
seq__30216_30249 = G__30261;
chunk__30217_30250 = G__30262;
count__30218_30251 = G__30263;
i__30219_30252 = G__30264;
continue;
} else {
var req_30265 = cljs.core.first.call(null,seq__30216_30259__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30265,prov);

var G__30266 = cljs.core.next.call(null,seq__30216_30259__$1);
var G__30267 = null;
var G__30268 = (0);
var G__30269 = (0);
seq__30216_30249 = G__30266;
chunk__30217_30250 = G__30267;
count__30218_30251 = G__30268;
i__30219_30252 = G__30269;
continue;
}
} else {
}
}
break;
}

var G__30270 = cljs.core.next.call(null,seq__30208__$1);
var G__30271 = null;
var G__30272 = (0);
var G__30273 = (0);
seq__30208 = G__30270;
chunk__30209 = G__30271;
count__30210 = G__30272;
i__30211 = G__30273;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30278_30282 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30279_30283 = null;
var count__30280_30284 = (0);
var i__30281_30285 = (0);
while(true){
if((i__30281_30285 < count__30280_30284)){
var ns_30286 = cljs.core._nth.call(null,chunk__30279_30283,i__30281_30285);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30286);

var G__30287 = seq__30278_30282;
var G__30288 = chunk__30279_30283;
var G__30289 = count__30280_30284;
var G__30290 = (i__30281_30285 + (1));
seq__30278_30282 = G__30287;
chunk__30279_30283 = G__30288;
count__30280_30284 = G__30289;
i__30281_30285 = G__30290;
continue;
} else {
var temp__4657__auto___30291 = cljs.core.seq.call(null,seq__30278_30282);
if(temp__4657__auto___30291){
var seq__30278_30292__$1 = temp__4657__auto___30291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30278_30292__$1)){
var c__25588__auto___30293 = cljs.core.chunk_first.call(null,seq__30278_30292__$1);
var G__30294 = cljs.core.chunk_rest.call(null,seq__30278_30292__$1);
var G__30295 = c__25588__auto___30293;
var G__30296 = cljs.core.count.call(null,c__25588__auto___30293);
var G__30297 = (0);
seq__30278_30282 = G__30294;
chunk__30279_30283 = G__30295;
count__30280_30284 = G__30296;
i__30281_30285 = G__30297;
continue;
} else {
var ns_30298 = cljs.core.first.call(null,seq__30278_30292__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30298);

var G__30299 = cljs.core.next.call(null,seq__30278_30292__$1);
var G__30300 = null;
var G__30301 = (0);
var G__30302 = (0);
seq__30278_30282 = G__30299;
chunk__30279_30283 = G__30300;
count__30280_30284 = G__30301;
i__30281_30285 = G__30302;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24777__auto__ = goog.require__;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30303__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30304__i = 0, G__30304__a = new Array(arguments.length -  0);
while (G__30304__i < G__30304__a.length) {G__30304__a[G__30304__i] = arguments[G__30304__i + 0]; ++G__30304__i;}
  args = new cljs.core.IndexedSeq(G__30304__a,0);
} 
return G__30303__delegate.call(this,args);};
G__30303.cljs$lang$maxFixedArity = 0;
G__30303.cljs$lang$applyTo = (function (arglist__30305){
var args = cljs.core.seq(arglist__30305);
return G__30303__delegate(args);
});
G__30303.cljs$core$IFn$_invoke$arity$variadic = G__30303__delegate;
return G__30303;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30307 = cljs.core._EQ_;
var expr__30308 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30307.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30308))){
var path_parts = ((function (pred__30307,expr__30308){
return (function (p1__30306_SHARP_){
return clojure.string.split.call(null,p1__30306_SHARP_,/[\/\\]/);
});})(pred__30307,expr__30308))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30307,expr__30308){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30310){if((e30310 instanceof Error)){
var e = e30310;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30310;

}
}})());
});
;})(path_parts,sep,root,pred__30307,expr__30308))
} else {
if(cljs.core.truth_(pred__30307.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30308))){
return ((function (pred__30307,expr__30308){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30307,expr__30308){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30307,expr__30308))
);

return deferred.addErrback(((function (deferred,pred__30307,expr__30308){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30307,expr__30308))
);
});
;})(pred__30307,expr__30308))
} else {
return ((function (pred__30307,expr__30308){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30307,expr__30308))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30311,callback){
var map__30314 = p__30311;
var map__30314__$1 = ((((!((map__30314 == null)))?((((map__30314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30314):map__30314);
var file_msg = map__30314__$1;
var request_url = cljs.core.get.call(null,map__30314__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30314,map__30314__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30314,map__30314__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto__){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto__){
return (function (state_30338){
var state_val_30339 = (state_30338[(1)]);
if((state_val_30339 === (7))){
var inst_30334 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30340_30360 = state_30338__$1;
(statearr_30340_30360[(2)] = inst_30334);

(statearr_30340_30360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (1))){
var state_30338__$1 = state_30338;
var statearr_30341_30361 = state_30338__$1;
(statearr_30341_30361[(2)] = null);

(statearr_30341_30361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (4))){
var inst_30318 = (state_30338[(7)]);
var inst_30318__$1 = (state_30338[(2)]);
var state_30338__$1 = (function (){var statearr_30342 = state_30338;
(statearr_30342[(7)] = inst_30318__$1);

return statearr_30342;
})();
if(cljs.core.truth_(inst_30318__$1)){
var statearr_30343_30362 = state_30338__$1;
(statearr_30343_30362[(1)] = (5));

} else {
var statearr_30344_30363 = state_30338__$1;
(statearr_30344_30363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (6))){
var state_30338__$1 = state_30338;
var statearr_30345_30364 = state_30338__$1;
(statearr_30345_30364[(2)] = null);

(statearr_30345_30364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (3))){
var inst_30336 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30338__$1,inst_30336);
} else {
if((state_val_30339 === (2))){
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30338__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30339 === (11))){
var inst_30330 = (state_30338[(2)]);
var state_30338__$1 = (function (){var statearr_30346 = state_30338;
(statearr_30346[(8)] = inst_30330);

return statearr_30346;
})();
var statearr_30347_30365 = state_30338__$1;
(statearr_30347_30365[(2)] = null);

(statearr_30347_30365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (9))){
var inst_30322 = (state_30338[(9)]);
var inst_30324 = (state_30338[(10)]);
var inst_30326 = inst_30324.call(null,inst_30322);
var state_30338__$1 = state_30338;
var statearr_30348_30366 = state_30338__$1;
(statearr_30348_30366[(2)] = inst_30326);

(statearr_30348_30366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (5))){
var inst_30318 = (state_30338[(7)]);
var inst_30320 = figwheel.client.file_reloading.blocking_load.call(null,inst_30318);
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30338__$1,(8),inst_30320);
} else {
if((state_val_30339 === (10))){
var inst_30322 = (state_30338[(9)]);
var inst_30328 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30322);
var state_30338__$1 = state_30338;
var statearr_30349_30367 = state_30338__$1;
(statearr_30349_30367[(2)] = inst_30328);

(statearr_30349_30367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (8))){
var inst_30318 = (state_30338[(7)]);
var inst_30324 = (state_30338[(10)]);
var inst_30322 = (state_30338[(2)]);
var inst_30323 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30324__$1 = cljs.core.get.call(null,inst_30323,inst_30318);
var state_30338__$1 = (function (){var statearr_30350 = state_30338;
(statearr_30350[(9)] = inst_30322);

(statearr_30350[(10)] = inst_30324__$1);

return statearr_30350;
})();
if(cljs.core.truth_(inst_30324__$1)){
var statearr_30351_30368 = state_30338__$1;
(statearr_30351_30368[(1)] = (9));

} else {
var statearr_30352_30369 = state_30338__$1;
(statearr_30352_30369[(1)] = (10));

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
});})(c__27115__auto__))
;
return ((function (switch__27003__auto__,c__27115__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27004__auto__ = null;
var figwheel$client$file_reloading$state_machine__27004__auto____0 = (function (){
var statearr_30356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30356[(0)] = figwheel$client$file_reloading$state_machine__27004__auto__);

(statearr_30356[(1)] = (1));

return statearr_30356;
});
var figwheel$client$file_reloading$state_machine__27004__auto____1 = (function (state_30338){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_30338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e30357){if((e30357 instanceof Object)){
var ex__27007__auto__ = e30357;
var statearr_30358_30370 = state_30338;
(statearr_30358_30370[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30371 = state_30338;
state_30338 = G__30371;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27004__auto__ = function(state_30338){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27004__auto____1.call(this,state_30338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27004__auto____0;
figwheel$client$file_reloading$state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27004__auto____1;
return figwheel$client$file_reloading$state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto__))
})();
var state__27117__auto__ = (function (){var statearr_30359 = f__27116__auto__.call(null);
(statearr_30359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto__);

return statearr_30359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto__))
);

return c__27115__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30372,callback){
var map__30375 = p__30372;
var map__30375__$1 = ((((!((map__30375 == null)))?((((map__30375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30375):map__30375);
var file_msg = map__30375__$1;
var namespace = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30375,map__30375__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30375,map__30375__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30377){
var map__30380 = p__30377;
var map__30380__$1 = ((((!((map__30380 == null)))?((((map__30380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30380):map__30380);
var file_msg = map__30380__$1;
var namespace = cljs.core.get.call(null,map__30380__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24765__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24765__auto__){
var or__24777__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
var or__24777__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24777__auto____$1)){
return or__24777__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24765__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30382,callback){
var map__30385 = p__30382;
var map__30385__$1 = ((((!((map__30385 == null)))?((((map__30385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30385):map__30385);
var file_msg = map__30385__$1;
var request_url = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27115__auto___30489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto___30489,out){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto___30489,out){
return (function (state_30471){
var state_val_30472 = (state_30471[(1)]);
if((state_val_30472 === (1))){
var inst_30445 = cljs.core.seq.call(null,files);
var inst_30446 = cljs.core.first.call(null,inst_30445);
var inst_30447 = cljs.core.next.call(null,inst_30445);
var inst_30448 = files;
var state_30471__$1 = (function (){var statearr_30473 = state_30471;
(statearr_30473[(7)] = inst_30447);

(statearr_30473[(8)] = inst_30448);

(statearr_30473[(9)] = inst_30446);

return statearr_30473;
})();
var statearr_30474_30490 = state_30471__$1;
(statearr_30474_30490[(2)] = null);

(statearr_30474_30490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (2))){
var inst_30454 = (state_30471[(10)]);
var inst_30448 = (state_30471[(8)]);
var inst_30453 = cljs.core.seq.call(null,inst_30448);
var inst_30454__$1 = cljs.core.first.call(null,inst_30453);
var inst_30455 = cljs.core.next.call(null,inst_30453);
var inst_30456 = (inst_30454__$1 == null);
var inst_30457 = cljs.core.not.call(null,inst_30456);
var state_30471__$1 = (function (){var statearr_30475 = state_30471;
(statearr_30475[(11)] = inst_30455);

(statearr_30475[(10)] = inst_30454__$1);

return statearr_30475;
})();
if(inst_30457){
var statearr_30476_30491 = state_30471__$1;
(statearr_30476_30491[(1)] = (4));

} else {
var statearr_30477_30492 = state_30471__$1;
(statearr_30477_30492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (3))){
var inst_30469 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30471__$1,inst_30469);
} else {
if((state_val_30472 === (4))){
var inst_30454 = (state_30471[(10)]);
var inst_30459 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30454);
var state_30471__$1 = state_30471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30471__$1,(7),inst_30459);
} else {
if((state_val_30472 === (5))){
var inst_30465 = cljs.core.async.close_BANG_.call(null,out);
var state_30471__$1 = state_30471;
var statearr_30478_30493 = state_30471__$1;
(statearr_30478_30493[(2)] = inst_30465);

(statearr_30478_30493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (6))){
var inst_30467 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
var statearr_30479_30494 = state_30471__$1;
(statearr_30479_30494[(2)] = inst_30467);

(statearr_30479_30494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (7))){
var inst_30455 = (state_30471[(11)]);
var inst_30461 = (state_30471[(2)]);
var inst_30462 = cljs.core.async.put_BANG_.call(null,out,inst_30461);
var inst_30448 = inst_30455;
var state_30471__$1 = (function (){var statearr_30480 = state_30471;
(statearr_30480[(12)] = inst_30462);

(statearr_30480[(8)] = inst_30448);

return statearr_30480;
})();
var statearr_30481_30495 = state_30471__$1;
(statearr_30481_30495[(2)] = null);

(statearr_30481_30495[(1)] = (2));


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
});})(c__27115__auto___30489,out))
;
return ((function (switch__27003__auto__,c__27115__auto___30489,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto____0 = (function (){
var statearr_30485 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30485[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto__);

(statearr_30485[(1)] = (1));

return statearr_30485;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto____1 = (function (state_30471){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_30471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e30486){if((e30486 instanceof Object)){
var ex__27007__auto__ = e30486;
var statearr_30487_30496 = state_30471;
(statearr_30487_30496[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30497 = state_30471;
state_30471 = G__30497;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto__ = function(state_30471){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto____1.call(this,state_30471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto___30489,out))
})();
var state__27117__auto__ = (function (){var statearr_30488 = f__27116__auto__.call(null);
(statearr_30488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto___30489);

return statearr_30488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto___30489,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30498,opts){
var map__30502 = p__30498;
var map__30502__$1 = ((((!((map__30502 == null)))?((((map__30502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30502):map__30502);
var eval_body__$1 = cljs.core.get.call(null,map__30502__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24765__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24765__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24765__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30504){var e = e30504;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30505_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30505_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30514){
var vec__30515 = p__30514;
var k = cljs.core.nth.call(null,vec__30515,(0),null);
var v = cljs.core.nth.call(null,vec__30515,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30518){
var vec__30519 = p__30518;
var k = cljs.core.nth.call(null,vec__30519,(0),null);
var v = cljs.core.nth.call(null,vec__30519,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30525,p__30526){
var map__30773 = p__30525;
var map__30773__$1 = ((((!((map__30773 == null)))?((((map__30773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30773):map__30773);
var opts = map__30773__$1;
var before_jsload = cljs.core.get.call(null,map__30773__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30773__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30773__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30774 = p__30526;
var map__30774__$1 = ((((!((map__30774 == null)))?((((map__30774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30774):map__30774);
var msg = map__30774__$1;
var files = cljs.core.get.call(null,map__30774__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30774__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30774__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27116__auto__ = (function (){var switch__27003__auto__ = ((function (c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30927){
var state_val_30928 = (state_30927[(1)]);
if((state_val_30928 === (7))){
var inst_30789 = (state_30927[(7)]);
var inst_30788 = (state_30927[(8)]);
var inst_30790 = (state_30927[(9)]);
var inst_30791 = (state_30927[(10)]);
var inst_30796 = cljs.core._nth.call(null,inst_30789,inst_30791);
var inst_30797 = figwheel.client.file_reloading.eval_body.call(null,inst_30796,opts);
var inst_30798 = (inst_30791 + (1));
var tmp30929 = inst_30789;
var tmp30930 = inst_30788;
var tmp30931 = inst_30790;
var inst_30788__$1 = tmp30930;
var inst_30789__$1 = tmp30929;
var inst_30790__$1 = tmp30931;
var inst_30791__$1 = inst_30798;
var state_30927__$1 = (function (){var statearr_30932 = state_30927;
(statearr_30932[(11)] = inst_30797);

(statearr_30932[(7)] = inst_30789__$1);

(statearr_30932[(8)] = inst_30788__$1);

(statearr_30932[(9)] = inst_30790__$1);

(statearr_30932[(10)] = inst_30791__$1);

return statearr_30932;
})();
var statearr_30933_31019 = state_30927__$1;
(statearr_30933_31019[(2)] = null);

(statearr_30933_31019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (20))){
var inst_30831 = (state_30927[(12)]);
var inst_30839 = figwheel.client.file_reloading.sort_files.call(null,inst_30831);
var state_30927__$1 = state_30927;
var statearr_30934_31020 = state_30927__$1;
(statearr_30934_31020[(2)] = inst_30839);

(statearr_30934_31020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (27))){
var state_30927__$1 = state_30927;
var statearr_30935_31021 = state_30927__$1;
(statearr_30935_31021[(2)] = null);

(statearr_30935_31021[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (1))){
var inst_30780 = (state_30927[(13)]);
var inst_30777 = before_jsload.call(null,files);
var inst_30778 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30779 = (function (){return ((function (inst_30780,inst_30777,inst_30778,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30522_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30522_SHARP_);
});
;})(inst_30780,inst_30777,inst_30778,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30780__$1 = cljs.core.filter.call(null,inst_30779,files);
var inst_30781 = cljs.core.not_empty.call(null,inst_30780__$1);
var state_30927__$1 = (function (){var statearr_30936 = state_30927;
(statearr_30936[(14)] = inst_30778);

(statearr_30936[(15)] = inst_30777);

(statearr_30936[(13)] = inst_30780__$1);

return statearr_30936;
})();
if(cljs.core.truth_(inst_30781)){
var statearr_30937_31022 = state_30927__$1;
(statearr_30937_31022[(1)] = (2));

} else {
var statearr_30938_31023 = state_30927__$1;
(statearr_30938_31023[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (24))){
var state_30927__$1 = state_30927;
var statearr_30939_31024 = state_30927__$1;
(statearr_30939_31024[(2)] = null);

(statearr_30939_31024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (39))){
var inst_30881 = (state_30927[(16)]);
var state_30927__$1 = state_30927;
var statearr_30940_31025 = state_30927__$1;
(statearr_30940_31025[(2)] = inst_30881);

(statearr_30940_31025[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (46))){
var inst_30922 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
var statearr_30941_31026 = state_30927__$1;
(statearr_30941_31026[(2)] = inst_30922);

(statearr_30941_31026[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (4))){
var inst_30825 = (state_30927[(2)]);
var inst_30826 = cljs.core.List.EMPTY;
var inst_30827 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30826);
var inst_30828 = (function (){return ((function (inst_30825,inst_30826,inst_30827,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30523_SHARP_){
var and__24765__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30523_SHARP_);
if(cljs.core.truth_(and__24765__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30523_SHARP_));
} else {
return and__24765__auto__;
}
});
;})(inst_30825,inst_30826,inst_30827,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30829 = cljs.core.filter.call(null,inst_30828,files);
var inst_30830 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30831 = cljs.core.concat.call(null,inst_30829,inst_30830);
var state_30927__$1 = (function (){var statearr_30942 = state_30927;
(statearr_30942[(17)] = inst_30825);

(statearr_30942[(18)] = inst_30827);

(statearr_30942[(12)] = inst_30831);

return statearr_30942;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30943_31027 = state_30927__$1;
(statearr_30943_31027[(1)] = (16));

} else {
var statearr_30944_31028 = state_30927__$1;
(statearr_30944_31028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (15))){
var inst_30815 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
var statearr_30945_31029 = state_30927__$1;
(statearr_30945_31029[(2)] = inst_30815);

(statearr_30945_31029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (21))){
var inst_30841 = (state_30927[(19)]);
var inst_30841__$1 = (state_30927[(2)]);
var inst_30842 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30841__$1);
var state_30927__$1 = (function (){var statearr_30946 = state_30927;
(statearr_30946[(19)] = inst_30841__$1);

return statearr_30946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30927__$1,(22),inst_30842);
} else {
if((state_val_30928 === (31))){
var inst_30925 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30927__$1,inst_30925);
} else {
if((state_val_30928 === (32))){
var inst_30881 = (state_30927[(16)]);
var inst_30886 = inst_30881.cljs$lang$protocol_mask$partition0$;
var inst_30887 = (inst_30886 & (64));
var inst_30888 = inst_30881.cljs$core$ISeq$;
var inst_30889 = (inst_30887) || (inst_30888);
var state_30927__$1 = state_30927;
if(cljs.core.truth_(inst_30889)){
var statearr_30947_31030 = state_30927__$1;
(statearr_30947_31030[(1)] = (35));

} else {
var statearr_30948_31031 = state_30927__$1;
(statearr_30948_31031[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (40))){
var inst_30902 = (state_30927[(20)]);
var inst_30901 = (state_30927[(2)]);
var inst_30902__$1 = cljs.core.get.call(null,inst_30901,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30903 = cljs.core.get.call(null,inst_30901,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30904 = cljs.core.not_empty.call(null,inst_30902__$1);
var state_30927__$1 = (function (){var statearr_30949 = state_30927;
(statearr_30949[(20)] = inst_30902__$1);

(statearr_30949[(21)] = inst_30903);

return statearr_30949;
})();
if(cljs.core.truth_(inst_30904)){
var statearr_30950_31032 = state_30927__$1;
(statearr_30950_31032[(1)] = (41));

} else {
var statearr_30951_31033 = state_30927__$1;
(statearr_30951_31033[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (33))){
var state_30927__$1 = state_30927;
var statearr_30952_31034 = state_30927__$1;
(statearr_30952_31034[(2)] = false);

(statearr_30952_31034[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (13))){
var inst_30801 = (state_30927[(22)]);
var inst_30805 = cljs.core.chunk_first.call(null,inst_30801);
var inst_30806 = cljs.core.chunk_rest.call(null,inst_30801);
var inst_30807 = cljs.core.count.call(null,inst_30805);
var inst_30788 = inst_30806;
var inst_30789 = inst_30805;
var inst_30790 = inst_30807;
var inst_30791 = (0);
var state_30927__$1 = (function (){var statearr_30953 = state_30927;
(statearr_30953[(7)] = inst_30789);

(statearr_30953[(8)] = inst_30788);

(statearr_30953[(9)] = inst_30790);

(statearr_30953[(10)] = inst_30791);

return statearr_30953;
})();
var statearr_30954_31035 = state_30927__$1;
(statearr_30954_31035[(2)] = null);

(statearr_30954_31035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (22))){
var inst_30841 = (state_30927[(19)]);
var inst_30849 = (state_30927[(23)]);
var inst_30844 = (state_30927[(24)]);
var inst_30845 = (state_30927[(25)]);
var inst_30844__$1 = (state_30927[(2)]);
var inst_30845__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30844__$1);
var inst_30846 = (function (){var all_files = inst_30841;
var res_SINGLEQUOTE_ = inst_30844__$1;
var res = inst_30845__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30841,inst_30849,inst_30844,inst_30845,inst_30844__$1,inst_30845__$1,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30524_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30524_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30841,inst_30849,inst_30844,inst_30845,inst_30844__$1,inst_30845__$1,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30847 = cljs.core.filter.call(null,inst_30846,inst_30844__$1);
var inst_30848 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30849__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30848);
var inst_30850 = cljs.core.not_empty.call(null,inst_30849__$1);
var state_30927__$1 = (function (){var statearr_30955 = state_30927;
(statearr_30955[(23)] = inst_30849__$1);

(statearr_30955[(24)] = inst_30844__$1);

(statearr_30955[(26)] = inst_30847);

(statearr_30955[(25)] = inst_30845__$1);

return statearr_30955;
})();
if(cljs.core.truth_(inst_30850)){
var statearr_30956_31036 = state_30927__$1;
(statearr_30956_31036[(1)] = (23));

} else {
var statearr_30957_31037 = state_30927__$1;
(statearr_30957_31037[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (36))){
var state_30927__$1 = state_30927;
var statearr_30958_31038 = state_30927__$1;
(statearr_30958_31038[(2)] = false);

(statearr_30958_31038[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (41))){
var inst_30902 = (state_30927[(20)]);
var inst_30906 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30907 = cljs.core.map.call(null,inst_30906,inst_30902);
var inst_30908 = cljs.core.pr_str.call(null,inst_30907);
var inst_30909 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30908)].join('');
var inst_30910 = figwheel.client.utils.log.call(null,inst_30909);
var state_30927__$1 = state_30927;
var statearr_30959_31039 = state_30927__$1;
(statearr_30959_31039[(2)] = inst_30910);

(statearr_30959_31039[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (43))){
var inst_30903 = (state_30927[(21)]);
var inst_30913 = (state_30927[(2)]);
var inst_30914 = cljs.core.not_empty.call(null,inst_30903);
var state_30927__$1 = (function (){var statearr_30960 = state_30927;
(statearr_30960[(27)] = inst_30913);

return statearr_30960;
})();
if(cljs.core.truth_(inst_30914)){
var statearr_30961_31040 = state_30927__$1;
(statearr_30961_31040[(1)] = (44));

} else {
var statearr_30962_31041 = state_30927__$1;
(statearr_30962_31041[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (29))){
var inst_30841 = (state_30927[(19)]);
var inst_30849 = (state_30927[(23)]);
var inst_30881 = (state_30927[(16)]);
var inst_30844 = (state_30927[(24)]);
var inst_30847 = (state_30927[(26)]);
var inst_30845 = (state_30927[(25)]);
var inst_30877 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30880 = (function (){var all_files = inst_30841;
var res_SINGLEQUOTE_ = inst_30844;
var res = inst_30845;
var files_not_loaded = inst_30847;
var dependencies_that_loaded = inst_30849;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30841,inst_30849,inst_30881,inst_30844,inst_30847,inst_30845,inst_30877,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30879){
var map__30963 = p__30879;
var map__30963__$1 = ((((!((map__30963 == null)))?((((map__30963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30963):map__30963);
var namespace = cljs.core.get.call(null,map__30963__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30841,inst_30849,inst_30881,inst_30844,inst_30847,inst_30845,inst_30877,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30881__$1 = cljs.core.group_by.call(null,inst_30880,inst_30847);
var inst_30883 = (inst_30881__$1 == null);
var inst_30884 = cljs.core.not.call(null,inst_30883);
var state_30927__$1 = (function (){var statearr_30965 = state_30927;
(statearr_30965[(16)] = inst_30881__$1);

(statearr_30965[(28)] = inst_30877);

return statearr_30965;
})();
if(inst_30884){
var statearr_30966_31042 = state_30927__$1;
(statearr_30966_31042[(1)] = (32));

} else {
var statearr_30967_31043 = state_30927__$1;
(statearr_30967_31043[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (44))){
var inst_30903 = (state_30927[(21)]);
var inst_30916 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30903);
var inst_30917 = cljs.core.pr_str.call(null,inst_30916);
var inst_30918 = [cljs.core.str("not required: "),cljs.core.str(inst_30917)].join('');
var inst_30919 = figwheel.client.utils.log.call(null,inst_30918);
var state_30927__$1 = state_30927;
var statearr_30968_31044 = state_30927__$1;
(statearr_30968_31044[(2)] = inst_30919);

(statearr_30968_31044[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (6))){
var inst_30822 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
var statearr_30969_31045 = state_30927__$1;
(statearr_30969_31045[(2)] = inst_30822);

(statearr_30969_31045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (28))){
var inst_30847 = (state_30927[(26)]);
var inst_30874 = (state_30927[(2)]);
var inst_30875 = cljs.core.not_empty.call(null,inst_30847);
var state_30927__$1 = (function (){var statearr_30970 = state_30927;
(statearr_30970[(29)] = inst_30874);

return statearr_30970;
})();
if(cljs.core.truth_(inst_30875)){
var statearr_30971_31046 = state_30927__$1;
(statearr_30971_31046[(1)] = (29));

} else {
var statearr_30972_31047 = state_30927__$1;
(statearr_30972_31047[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (25))){
var inst_30845 = (state_30927[(25)]);
var inst_30861 = (state_30927[(2)]);
var inst_30862 = cljs.core.not_empty.call(null,inst_30845);
var state_30927__$1 = (function (){var statearr_30973 = state_30927;
(statearr_30973[(30)] = inst_30861);

return statearr_30973;
})();
if(cljs.core.truth_(inst_30862)){
var statearr_30974_31048 = state_30927__$1;
(statearr_30974_31048[(1)] = (26));

} else {
var statearr_30975_31049 = state_30927__$1;
(statearr_30975_31049[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (34))){
var inst_30896 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
if(cljs.core.truth_(inst_30896)){
var statearr_30976_31050 = state_30927__$1;
(statearr_30976_31050[(1)] = (38));

} else {
var statearr_30977_31051 = state_30927__$1;
(statearr_30977_31051[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (17))){
var state_30927__$1 = state_30927;
var statearr_30978_31052 = state_30927__$1;
(statearr_30978_31052[(2)] = recompile_dependents);

(statearr_30978_31052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (3))){
var state_30927__$1 = state_30927;
var statearr_30979_31053 = state_30927__$1;
(statearr_30979_31053[(2)] = null);

(statearr_30979_31053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (12))){
var inst_30818 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
var statearr_30980_31054 = state_30927__$1;
(statearr_30980_31054[(2)] = inst_30818);

(statearr_30980_31054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (2))){
var inst_30780 = (state_30927[(13)]);
var inst_30787 = cljs.core.seq.call(null,inst_30780);
var inst_30788 = inst_30787;
var inst_30789 = null;
var inst_30790 = (0);
var inst_30791 = (0);
var state_30927__$1 = (function (){var statearr_30981 = state_30927;
(statearr_30981[(7)] = inst_30789);

(statearr_30981[(8)] = inst_30788);

(statearr_30981[(9)] = inst_30790);

(statearr_30981[(10)] = inst_30791);

return statearr_30981;
})();
var statearr_30982_31055 = state_30927__$1;
(statearr_30982_31055[(2)] = null);

(statearr_30982_31055[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (23))){
var inst_30841 = (state_30927[(19)]);
var inst_30849 = (state_30927[(23)]);
var inst_30844 = (state_30927[(24)]);
var inst_30847 = (state_30927[(26)]);
var inst_30845 = (state_30927[(25)]);
var inst_30852 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30854 = (function (){var all_files = inst_30841;
var res_SINGLEQUOTE_ = inst_30844;
var res = inst_30845;
var files_not_loaded = inst_30847;
var dependencies_that_loaded = inst_30849;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30841,inst_30849,inst_30844,inst_30847,inst_30845,inst_30852,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30853){
var map__30983 = p__30853;
var map__30983__$1 = ((((!((map__30983 == null)))?((((map__30983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30983):map__30983);
var request_url = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30841,inst_30849,inst_30844,inst_30847,inst_30845,inst_30852,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30855 = cljs.core.reverse.call(null,inst_30849);
var inst_30856 = cljs.core.map.call(null,inst_30854,inst_30855);
var inst_30857 = cljs.core.pr_str.call(null,inst_30856);
var inst_30858 = figwheel.client.utils.log.call(null,inst_30857);
var state_30927__$1 = (function (){var statearr_30985 = state_30927;
(statearr_30985[(31)] = inst_30852);

return statearr_30985;
})();
var statearr_30986_31056 = state_30927__$1;
(statearr_30986_31056[(2)] = inst_30858);

(statearr_30986_31056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (35))){
var state_30927__$1 = state_30927;
var statearr_30987_31057 = state_30927__$1;
(statearr_30987_31057[(2)] = true);

(statearr_30987_31057[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (19))){
var inst_30831 = (state_30927[(12)]);
var inst_30837 = figwheel.client.file_reloading.expand_files.call(null,inst_30831);
var state_30927__$1 = state_30927;
var statearr_30988_31058 = state_30927__$1;
(statearr_30988_31058[(2)] = inst_30837);

(statearr_30988_31058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (11))){
var state_30927__$1 = state_30927;
var statearr_30989_31059 = state_30927__$1;
(statearr_30989_31059[(2)] = null);

(statearr_30989_31059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (9))){
var inst_30820 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
var statearr_30990_31060 = state_30927__$1;
(statearr_30990_31060[(2)] = inst_30820);

(statearr_30990_31060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (5))){
var inst_30790 = (state_30927[(9)]);
var inst_30791 = (state_30927[(10)]);
var inst_30793 = (inst_30791 < inst_30790);
var inst_30794 = inst_30793;
var state_30927__$1 = state_30927;
if(cljs.core.truth_(inst_30794)){
var statearr_30991_31061 = state_30927__$1;
(statearr_30991_31061[(1)] = (7));

} else {
var statearr_30992_31062 = state_30927__$1;
(statearr_30992_31062[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (14))){
var inst_30801 = (state_30927[(22)]);
var inst_30810 = cljs.core.first.call(null,inst_30801);
var inst_30811 = figwheel.client.file_reloading.eval_body.call(null,inst_30810,opts);
var inst_30812 = cljs.core.next.call(null,inst_30801);
var inst_30788 = inst_30812;
var inst_30789 = null;
var inst_30790 = (0);
var inst_30791 = (0);
var state_30927__$1 = (function (){var statearr_30993 = state_30927;
(statearr_30993[(7)] = inst_30789);

(statearr_30993[(8)] = inst_30788);

(statearr_30993[(32)] = inst_30811);

(statearr_30993[(9)] = inst_30790);

(statearr_30993[(10)] = inst_30791);

return statearr_30993;
})();
var statearr_30994_31063 = state_30927__$1;
(statearr_30994_31063[(2)] = null);

(statearr_30994_31063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (45))){
var state_30927__$1 = state_30927;
var statearr_30995_31064 = state_30927__$1;
(statearr_30995_31064[(2)] = null);

(statearr_30995_31064[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (26))){
var inst_30841 = (state_30927[(19)]);
var inst_30849 = (state_30927[(23)]);
var inst_30844 = (state_30927[(24)]);
var inst_30847 = (state_30927[(26)]);
var inst_30845 = (state_30927[(25)]);
var inst_30864 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30866 = (function (){var all_files = inst_30841;
var res_SINGLEQUOTE_ = inst_30844;
var res = inst_30845;
var files_not_loaded = inst_30847;
var dependencies_that_loaded = inst_30849;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30841,inst_30849,inst_30844,inst_30847,inst_30845,inst_30864,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30865){
var map__30996 = p__30865;
var map__30996__$1 = ((((!((map__30996 == null)))?((((map__30996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30996):map__30996);
var namespace = cljs.core.get.call(null,map__30996__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30996__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30841,inst_30849,inst_30844,inst_30847,inst_30845,inst_30864,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30867 = cljs.core.map.call(null,inst_30866,inst_30845);
var inst_30868 = cljs.core.pr_str.call(null,inst_30867);
var inst_30869 = figwheel.client.utils.log.call(null,inst_30868);
var inst_30870 = (function (){var all_files = inst_30841;
var res_SINGLEQUOTE_ = inst_30844;
var res = inst_30845;
var files_not_loaded = inst_30847;
var dependencies_that_loaded = inst_30849;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30841,inst_30849,inst_30844,inst_30847,inst_30845,inst_30864,inst_30866,inst_30867,inst_30868,inst_30869,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30841,inst_30849,inst_30844,inst_30847,inst_30845,inst_30864,inst_30866,inst_30867,inst_30868,inst_30869,state_val_30928,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30871 = setTimeout(inst_30870,(10));
var state_30927__$1 = (function (){var statearr_30998 = state_30927;
(statearr_30998[(33)] = inst_30864);

(statearr_30998[(34)] = inst_30869);

return statearr_30998;
})();
var statearr_30999_31065 = state_30927__$1;
(statearr_30999_31065[(2)] = inst_30871);

(statearr_30999_31065[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (16))){
var state_30927__$1 = state_30927;
var statearr_31000_31066 = state_30927__$1;
(statearr_31000_31066[(2)] = reload_dependents);

(statearr_31000_31066[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (38))){
var inst_30881 = (state_30927[(16)]);
var inst_30898 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30881);
var state_30927__$1 = state_30927;
var statearr_31001_31067 = state_30927__$1;
(statearr_31001_31067[(2)] = inst_30898);

(statearr_31001_31067[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (30))){
var state_30927__$1 = state_30927;
var statearr_31002_31068 = state_30927__$1;
(statearr_31002_31068[(2)] = null);

(statearr_31002_31068[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (10))){
var inst_30801 = (state_30927[(22)]);
var inst_30803 = cljs.core.chunked_seq_QMARK_.call(null,inst_30801);
var state_30927__$1 = state_30927;
if(inst_30803){
var statearr_31003_31069 = state_30927__$1;
(statearr_31003_31069[(1)] = (13));

} else {
var statearr_31004_31070 = state_30927__$1;
(statearr_31004_31070[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (18))){
var inst_30835 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
if(cljs.core.truth_(inst_30835)){
var statearr_31005_31071 = state_30927__$1;
(statearr_31005_31071[(1)] = (19));

} else {
var statearr_31006_31072 = state_30927__$1;
(statearr_31006_31072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (42))){
var state_30927__$1 = state_30927;
var statearr_31007_31073 = state_30927__$1;
(statearr_31007_31073[(2)] = null);

(statearr_31007_31073[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (37))){
var inst_30893 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
var statearr_31008_31074 = state_30927__$1;
(statearr_31008_31074[(2)] = inst_30893);

(statearr_31008_31074[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (8))){
var inst_30788 = (state_30927[(8)]);
var inst_30801 = (state_30927[(22)]);
var inst_30801__$1 = cljs.core.seq.call(null,inst_30788);
var state_30927__$1 = (function (){var statearr_31009 = state_30927;
(statearr_31009[(22)] = inst_30801__$1);

return statearr_31009;
})();
if(inst_30801__$1){
var statearr_31010_31075 = state_30927__$1;
(statearr_31010_31075[(1)] = (10));

} else {
var statearr_31011_31076 = state_30927__$1;
(statearr_31011_31076[(1)] = (11));

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
}
});})(c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27003__auto__,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto____0 = (function (){
var statearr_31015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31015[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto__);

(statearr_31015[(1)] = (1));

return statearr_31015;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto____1 = (function (state_30927){
while(true){
var ret_value__27005__auto__ = (function (){try{while(true){
var result__27006__auto__ = switch__27003__auto__.call(null,state_30927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27006__auto__;
}
break;
}
}catch (e31016){if((e31016 instanceof Object)){
var ex__27007__auto__ = e31016;
var statearr_31017_31077 = state_30927;
(statearr_31017_31077[(5)] = ex__27007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31078 = state_30927;
state_30927 = G__31078;
continue;
} else {
return ret_value__27005__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto__ = function(state_30927){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto____1.call(this,state_30927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27004__auto__;
})()
;})(switch__27003__auto__,c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27117__auto__ = (function (){var statearr_31018 = f__27116__auto__.call(null);
(statearr_31018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27115__auto__);

return statearr_31018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27117__auto__);
});})(c__27115__auto__,map__30773,map__30773__$1,opts,before_jsload,on_jsload,reload_dependents,map__30774,map__30774__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27115__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31081,link){
var map__31084 = p__31081;
var map__31084__$1 = ((((!((map__31084 == null)))?((((map__31084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31084):map__31084);
var file = cljs.core.get.call(null,map__31084__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31084,map__31084__$1,file){
return (function (p1__31079_SHARP_,p2__31080_SHARP_){
if(cljs.core._EQ_.call(null,p1__31079_SHARP_,p2__31080_SHARP_)){
return p1__31079_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31084,map__31084__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31090){
var map__31091 = p__31090;
var map__31091__$1 = ((((!((map__31091 == null)))?((((map__31091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31091):map__31091);
var match_length = cljs.core.get.call(null,map__31091__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31091__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31086_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31086_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31093 = [];
var len__25852__auto___31096 = arguments.length;
var i__25853__auto___31097 = (0);
while(true){
if((i__25853__auto___31097 < len__25852__auto___31096)){
args31093.push((arguments[i__25853__auto___31097]));

var G__31098 = (i__25853__auto___31097 + (1));
i__25853__auto___31097 = G__31098;
continue;
} else {
}
break;
}

var G__31095 = args31093.length;
switch (G__31095) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31093.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31100_SHARP_,p2__31101_SHARP_){
return cljs.core.assoc.call(null,p1__31100_SHARP_,cljs.core.get.call(null,p2__31101_SHARP_,key),p2__31101_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31102){
var map__31105 = p__31102;
var map__31105__$1 = ((((!((map__31105 == null)))?((((map__31105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31105):map__31105);
var f_data = map__31105__$1;
var file = cljs.core.get.call(null,map__31105__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31107,p__31108){
var map__31117 = p__31107;
var map__31117__$1 = ((((!((map__31117 == null)))?((((map__31117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31117):map__31117);
var opts = map__31117__$1;
var on_cssload = cljs.core.get.call(null,map__31117__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31118 = p__31108;
var map__31118__$1 = ((((!((map__31118 == null)))?((((map__31118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31118):map__31118);
var files_msg = map__31118__$1;
var files = cljs.core.get.call(null,map__31118__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31121_31125 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31122_31126 = null;
var count__31123_31127 = (0);
var i__31124_31128 = (0);
while(true){
if((i__31124_31128 < count__31123_31127)){
var f_31129 = cljs.core._nth.call(null,chunk__31122_31126,i__31124_31128);
figwheel.client.file_reloading.reload_css_file.call(null,f_31129);

var G__31130 = seq__31121_31125;
var G__31131 = chunk__31122_31126;
var G__31132 = count__31123_31127;
var G__31133 = (i__31124_31128 + (1));
seq__31121_31125 = G__31130;
chunk__31122_31126 = G__31131;
count__31123_31127 = G__31132;
i__31124_31128 = G__31133;
continue;
} else {
var temp__4657__auto___31134 = cljs.core.seq.call(null,seq__31121_31125);
if(temp__4657__auto___31134){
var seq__31121_31135__$1 = temp__4657__auto___31134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31121_31135__$1)){
var c__25588__auto___31136 = cljs.core.chunk_first.call(null,seq__31121_31135__$1);
var G__31137 = cljs.core.chunk_rest.call(null,seq__31121_31135__$1);
var G__31138 = c__25588__auto___31136;
var G__31139 = cljs.core.count.call(null,c__25588__auto___31136);
var G__31140 = (0);
seq__31121_31125 = G__31137;
chunk__31122_31126 = G__31138;
count__31123_31127 = G__31139;
i__31124_31128 = G__31140;
continue;
} else {
var f_31141 = cljs.core.first.call(null,seq__31121_31135__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31141);

var G__31142 = cljs.core.next.call(null,seq__31121_31135__$1);
var G__31143 = null;
var G__31144 = (0);
var G__31145 = (0);
seq__31121_31125 = G__31142;
chunk__31122_31126 = G__31143;
count__31123_31127 = G__31144;
i__31124_31128 = G__31145;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31117,map__31117__$1,opts,on_cssload,map__31118,map__31118__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31117,map__31117__$1,opts,on_cssload,map__31118,map__31118__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484085454505
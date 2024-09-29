(function(Y,q){typeof exports=="object"&&typeof module<"u"?module.exports=q(require("vue")):typeof define=="function"&&define.amd?define(["vue"],q):(Y=typeof globalThis<"u"?globalThis:Y||self,Y.vue3Touch=q(Y.Vue))})(this,function(Y){"use strict";function q(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var wt={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(a){(function(o,c,f,l){var m=["","webkit","Moz","MS","ms","o"],et=c.createElement("div"),de="function",F=Math.round,U=Math.abs,Et=Date.now;function yt(t,e,i){return setTimeout(_t(t,i),e)}function X(t,e,i){return Array.isArray(t)?(A(t,i[e],i),!0):!1}function A(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==l)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function Yt(t,e,i){var n="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var r=new Error("get-stack-trace"),s=r&&r.stack?r.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",h=o.console&&(o.console.warn||o.console.log);return h&&h.call(o.console,n,s),t.apply(this,arguments)}}var O;typeof Object.assign!="function"?O=function(e){if(e===l||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(r!==l&&r!==null)for(var s in r)r.hasOwnProperty(s)&&(i[s]=r[s])}return i}:O=Object.assign;var Ht=Yt(function(e,i,n){for(var r=Object.keys(i),s=0;s<r.length;)(!n||n&&e[r[s]]===l)&&(e[r[s]]=i[r[s]]),s++;return e},"extend","Use `assign`."),Te=Yt(function(e,i){return Ht(e,i,!0)},"merge","Use `assign`.");function E(t,e,i){var n=e.prototype,r;r=t.prototype=Object.create(n),r.constructor=t,r._super=n,i&&O(r,i)}function _t(t,e){return function(){return t.apply(e,arguments)}}function It(t,e){return typeof t==de?t.apply(e&&e[0]||l,e):t}function Ft(t,e){return t===l?e:t}function it(t,e,i){A(rt(e),function(n){t.addEventListener(n,i,!1)})}function nt(t,e,i){A(rt(e),function(n){t.removeEventListener(n,i,!1)})}function Xt(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function w(t,e){return t.indexOf(e)>-1}function rt(t){return t.trim().split(/\s+/g)}function W(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function st(t){return Array.prototype.slice.call(t,0)}function Wt(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var h=e?t[s][e]:t[s];W(r,h)<0&&n.push(t[s]),r[s]=h,s++}return i&&(e?n=n.sort(function(v,T){return v[e]>T[e]}):n=n.sort()),n}function ot(t,e){for(var i,n,r=e[0].toUpperCase()+e.slice(1),s=0;s<m.length;){if(i=m[s],n=i?i+r:e,n in t)return n;s++}return l}var me=1;function ge(){return me++}function Vt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||o}var Ee=/mobile|tablet|ip(ad|hone|od)|android/i,qt="ontouchstart"in o,ye=ot(o,"PointerEvent")!==l,_e=qt&&Ee.test(navigator.userAgent),k="touch",Ie="pen",Ot="mouse",Oe="kinect",Pe=25,d=1,L=2,u=4,g=8,at=1,G=2,j=4,B=8,Z=16,P=G|j,x=B|Z,kt=P|x,Gt=["x","y"],ht=["clientX","clientY"];function y(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(n){It(t.options.enable,[t])&&i.handler(n)},this.init()}y.prototype={handler:function(){},init:function(){this.evEl&&it(this.element,this.evEl,this.domHandler),this.evTarget&&it(this.target,this.evTarget,this.domHandler),this.evWin&&it(Vt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&nt(this.element,this.evEl,this.domHandler),this.evTarget&&nt(this.target,this.evTarget,this.domHandler),this.evWin&&nt(Vt(this.element),this.evWin,this.domHandler)}};function Ne(t){var e,i=t.options.inputClass;return i?e=i:ye?e=Nt:_e?e=ut:qt?e=Ct:e=lt,new e(t,Ce)}function Ce(t,e,i){var n=i.pointers.length,r=i.changedPointers.length,s=e&d&&n-r===0,h=e&(u|g)&&n-r===0;i.isFirst=!!s,i.isFinal=!!h,s&&(t.session={}),i.eventType=e,Ae(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function Ae(t,e){var i=t.session,n=e.pointers,r=n.length;i.firstInput||(i.firstInput=jt(e)),r>1&&!i.firstMultiple?i.firstMultiple=jt(e):r===1&&(i.firstMultiple=!1);var s=i.firstInput,h=i.firstMultiple,p=h?h.center:s.center,v=e.center=Bt(n);e.timeStamp=Et(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=Pt(p,v),e.distance=ct(p,v),Se(i,e),e.offsetDirection=Jt(e.deltaX,e.deltaY);var T=Zt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=T.x,e.overallVelocityY=T.y,e.overallVelocity=U(T.x)>U(T.y)?T.x:T.y,e.scale=h?Me(h.pointers,n):1,e.rotation=h?De(h.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,be(i,e);var C=t.element;Xt(e.srcEvent.target,C)&&(C=e.srcEvent.target),e.target=C}function Se(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};(e.eventType===d||s.eventType===u)&&(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}function be(t,e){var i=t.lastInterval||e,n=e.timeStamp-i.timeStamp,r,s,h,p;if(e.eventType!=g&&(n>Pe||i.velocity===l)){var v=e.deltaX-i.deltaX,T=e.deltaY-i.deltaY,C=Zt(n,v,T);s=C.x,h=C.y,r=U(C.x)>U(C.y)?C.x:C.y,p=Jt(v,T),t.lastInterval=e}else r=i.velocity,s=i.velocityX,h=i.velocityY,p=i.direction;e.velocity=r,e.velocityX=s,e.velocityY=h,e.direction=p}function jt(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:F(t.pointers[i].clientX),clientY:F(t.pointers[i].clientY)},i++;return{timeStamp:Et(),pointers:e,center:Bt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Bt(t){var e=t.length;if(e===1)return{x:F(t[0].clientX),y:F(t[0].clientY)};for(var i=0,n=0,r=0;r<e;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:F(i/e),y:F(n/e)}}function Zt(t,e,i){return{x:e/t||0,y:i/t||0}}function Jt(t,e){return t===e?at:U(t)>=U(e)?t<0?G:j:e<0?B:Z}function ct(t,e,i){i||(i=Gt);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function Pt(t,e,i){i||(i=Gt);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.atan2(r,n)*180/Math.PI}function De(t,e){return Pt(e[1],e[0],ht)+Pt(t[1],t[0],ht)}function Me(t,e){return ct(e[0],e[1],ht)/ct(t[0],t[1],ht)}var Re={mousedown:d,mousemove:L,mouseup:u},Ue="mousedown",we="mousemove mouseup";function lt(){this.evEl=Ue,this.evWin=we,this.pressed=!1,y.apply(this,arguments)}E(lt,y,{handler:function(e){var i=Re[e.type];i&d&&e.button===0&&(this.pressed=!0),i&L&&e.which!==1&&(i=u),this.pressed&&(i&u&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:Ot,srcEvent:e}))}});var Le={pointerdown:d,pointermove:L,pointerup:u,pointercancel:g,pointerout:g},xe={2:k,3:Ie,4:Ot,5:Oe},Qt="pointerdown",Kt="pointermove pointerup pointercancel";o.MSPointerEvent&&!o.PointerEvent&&(Qt="MSPointerDown",Kt="MSPointerMove MSPointerUp MSPointerCancel");function Nt(){this.evEl=Qt,this.evWin=Kt,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}E(Nt,y,{handler:function(e){var i=this.store,n=!1,r=e.type.toLowerCase().replace("ms",""),s=Le[r],h=xe[e.pointerType]||e.pointerType,p=h==k,v=W(i,e.pointerId,"pointerId");s&d&&(e.button===0||p)?v<0&&(i.push(e),v=i.length-1):s&(u|g)&&(n=!0),!(v<0)&&(i[v]=e,this.callback(this.manager,s,{pointers:i,changedPointers:[e],pointerType:h,srcEvent:e}),n&&i.splice(v,1))}});var ze={touchstart:d,touchmove:L,touchend:u,touchcancel:g},Ye="touchstart",He="touchstart touchmove touchend touchcancel";function $t(){this.evTarget=Ye,this.evWin=He,this.started=!1,y.apply(this,arguments)}E($t,y,{handler:function(e){var i=ze[e.type];if(i===d&&(this.started=!0),!!this.started){var n=Fe.call(this,e,i);i&(u|g)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:k,srcEvent:e})}}});function Fe(t,e){var i=st(t.touches),n=st(t.changedTouches);return e&(u|g)&&(i=Wt(i.concat(n),"identifier",!0)),[i,n]}var Xe={touchstart:d,touchmove:L,touchend:u,touchcancel:g},We="touchstart touchmove touchend touchcancel";function ut(){this.evTarget=We,this.targetIds={},y.apply(this,arguments)}E(ut,y,{handler:function(e){var i=Xe[e.type],n=Ve.call(this,e,i);n&&this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:k,srcEvent:e})}});function Ve(t,e){var i=st(t.touches),n=this.targetIds;if(e&(d|L)&&i.length===1)return n[i[0].identifier]=!0,[i,i];var r,s,h=st(t.changedTouches),p=[],v=this.target;if(s=i.filter(function(T){return Xt(T.target,v)}),e===d)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;for(r=0;r<h.length;)n[h[r].identifier]&&p.push(h[r]),e&(u|g)&&delete n[h[r].identifier],r++;if(p.length)return[Wt(s.concat(p),"identifier",!0),p]}var qe=2500,te=25;function Ct(){y.apply(this,arguments);var t=_t(this.handler,this);this.touch=new ut(this.manager,t),this.mouse=new lt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}E(Ct,y,{handler:function(e,i,n){var r=n.pointerType==k,s=n.pointerType==Ot;if(!(s&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(r)ke.call(this,i,n);else if(s&&Ge.call(this,n))return;this.callback(e,i,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function ke(t,e){t&d?(this.primaryTouch=e.changedPointers[0].identifier,ee.call(this,e)):t&(u|g)&&ee.call(this,e)}function ee(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches,r=function(){var s=n.indexOf(i);s>-1&&n.splice(s,1)};setTimeout(r,qe)}}function Ge(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],s=Math.abs(e-r.x),h=Math.abs(i-r.y);if(s<=te&&h<=te)return!0}return!1}var ie=ot(et.style,"touchAction"),ne=ie!==l,re="compute",se="auto",At="manipulation",z="none",J="pan-x",Q="pan-y",ft=Be();function St(t,e){this.manager=t,this.set(e)}St.prototype={set:function(t){t==re&&(t=this.compute()),ne&&this.manager.element.style&&ft[t]&&(this.manager.element.style[ie]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return A(this.manager.recognizers,function(e){It(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),je(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var n=this.actions,r=w(n,z)&&!ft[z],s=w(n,Q)&&!ft[Q],h=w(n,J)&&!ft[J];if(r){var p=t.pointers.length===1,v=t.distance<2,T=t.deltaTime<250;if(p&&v&&T)return}if(!(h&&s)&&(r||s&&i&P||h&&i&x))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function je(t){if(w(t,z))return z;var e=w(t,J),i=w(t,Q);return e&&i?z:e||i?e?J:Q:w(t,At)?At:se}function Be(){if(!ne)return!1;var t={},e=o.CSS&&o.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?o.CSS.supports("touch-action",i):!0}),t}var pt=1,_=2,V=4,M=8,S=M,K=16,N=32;function b(t){this.options=O({},this.defaults,t||{}),this.id=ge(),this.manager=null,this.options.enable=Ft(this.options.enable,!0),this.state=pt,this.simultaneous={},this.requireFail=[]}b.prototype={defaults:{},set:function(t){return O(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(X(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=vt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return X(t,"dropRecognizeWith",this)?this:(t=vt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(X(t,"requireFailure",this))return this;var e=this.requireFail;return t=vt(t,this),W(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(X(t,"dropRequireFailure",this))return this;t=vt(t,this);var e=W(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(r){e.manager.emit(r,t)}i<M&&n(e.options.event+oe(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=M&&n(e.options.event+oe(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=N},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(N|pt)))return!1;t++}return!0},recognize:function(t){var e=O({},t);if(!It(this.options.enable,[this,e])){this.reset(),this.state=N;return}this.state&(S|K|N)&&(this.state=pt),this.state=this.process(e),this.state&(_|V|M|K)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function oe(t){return t&K?"cancel":t&M?"end":t&V?"move":t&_?"start":""}function ae(t){return t==Z?"down":t==B?"up":t==G?"left":t==j?"right":""}function vt(t,e){var i=e.manager;return i?i.get(t):t}function I(){b.apply(this,arguments)}E(I,b,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(_|V),r=this.attrTest(t);return n&&(i&g||!r)?e|K:n||r?i&u?e|M:e&_?e|V:_:N}});function dt(){I.apply(this,arguments),this.pX=null,this.pY=null}E(dt,I,{defaults:{event:"pan",threshold:10,pointers:1,direction:kt},getTouchAction:function(){var t=this.options.direction,e=[];return t&P&&e.push(Q),t&x&&e.push(J),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,h=t.deltaY;return r&e.direction||(e.direction&P?(r=s===0?at:s<0?G:j,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=h===0?at:h<0?B:Z,i=h!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return I.prototype.attrTest.call(this,t)&&(this.state&_||!(this.state&_)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=ae(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function bt(){I.apply(this,arguments)}E(bt,I,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[z]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&_)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function Dt(){b.apply(this,arguments),this._timer=null,this._input=null}E(Dt,b,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[se]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(u|g)&&!r)this.reset();else if(t.eventType&d)this.reset(),this._timer=yt(function(){this.state=S,this.tryEmit()},e.time,this);else if(t.eventType&u)return S;return N},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===S&&(t&&t.eventType&u?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Et(),this.manager.emit(this.options.event,this._input)))}});function Mt(){I.apply(this,arguments)}E(Mt,I,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[z]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&_)}});function Rt(){I.apply(this,arguments)}E(Rt,I,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:P|x,pointers:1},getTouchAction:function(){return dt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(P|x)?i=t.overallVelocity:e&P?i=t.overallVelocityX:e&x&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&U(i)>this.options.velocity&&t.eventType&u},emit:function(t){var e=ae(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function Tt(){b.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}E(Tt,b,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[At]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&d&&this.count===0)return this.failTimeout();if(n&&r&&i){if(t.eventType!=u)return this.failTimeout();var s=this.pTime?t.timeStamp-this.pTime<e.interval:!0,h=!this.pCenter||ct(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!h||!s?this.count=1:this.count+=1,this._input=t;var p=this.count%e.taps;if(p===0)return this.hasRequireFailures()?(this._timer=yt(function(){this.state=S,this.tryEmit()},e.interval,this),_):S}return N},failTimeout:function(){return this._timer=yt(function(){this.state=N},this.options.interval,this),N},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==S&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function D(t,e){return e=e||{},e.recognizers=Ft(e.recognizers,D.defaults.preset),new Ut(t,e)}D.VERSION="2.0.7",D.defaults={domEvents:!1,touchAction:re,enable:!0,inputTarget:null,inputClass:null,preset:[[Mt,{enable:!1}],[bt,{enable:!1},["rotate"]],[Rt,{direction:P}],[dt,{direction:P},["swipe"]],[Tt],[Tt,{event:"doubletap",taps:2},["tap"]],[Dt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Ze=1,he=2;function Ut(t,e){this.options=O({},D.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=Ne(this),this.touchAction=new St(this,this.options.touchAction),ce(this,!0),A(this.options.recognizers,function(i){var n=this.add(new i[0](i[1]));i[2]&&n.recognizeWith(i[2]),i[3]&&n.requireFailure(i[3])},this)}Ut.prototype={set:function(t){return O(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?he:Ze},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&S)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],e.stopped!==he&&(!r||i==r||i.canRecognizeWith(r))?i.recognize(t):i.reset(),!r&&i.state&(_|V|M)&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof b)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(X(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(X(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=W(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==l&&e!==l){var i=this.handlers;return A(rt(t),function(n){i[n]=i[n]||[],i[n].push(e)}),this}},off:function(t,e){if(t!==l){var i=this.handlers;return A(rt(t),function(n){e?i[n]&&i[n].splice(W(i[n],e),1):delete i[n]}),this}},emit:function(t,e){this.options.domEvents&&Je(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&ce(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function ce(t,e){var i=t.element;if(i.style){var n;A(t.options.cssProps,function(r,s){n=ot(i.style,s),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={})}}function Je(t,e){var i=c.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}O(D,{INPUT_START:d,INPUT_MOVE:L,INPUT_END:u,INPUT_CANCEL:g,STATE_POSSIBLE:pt,STATE_BEGAN:_,STATE_CHANGED:V,STATE_ENDED:M,STATE_RECOGNIZED:S,STATE_CANCELLED:K,STATE_FAILED:N,DIRECTION_NONE:at,DIRECTION_LEFT:G,DIRECTION_RIGHT:j,DIRECTION_UP:B,DIRECTION_DOWN:Z,DIRECTION_HORIZONTAL:P,DIRECTION_VERTICAL:x,DIRECTION_ALL:kt,Manager:Ut,Input:y,TouchAction:St,TouchInput:ut,MouseInput:lt,PointerEventInput:Nt,TouchMouseInput:Ct,SingleTouchInput:$t,Recognizer:b,AttrRecognizer:I,Tap:Tt,Pan:dt,Swipe:Rt,Pinch:bt,Rotate:Mt,Press:Dt,on:it,off:nt,each:A,merge:Te,extend:Ht,assign:O,inherit:E,bindFn:_t,prefixed:ot});var Qe=typeof o<"u"?o:typeof self<"u"?self:{};Qe.Hammer=D,typeof l=="function"&&l.amd?l(function(){return D}):a.exports?a.exports=D:o[f]=D})(window,document,"Hammer")})(wt);var le=wt.exports;const $=q(le);function mt(a,...o){for(let c=0;c<o.length;c++){const f=o[c],l=Object.keys(f);for(let m=0;m<l.length;m++){const et=l[m];a[et]=f[et]}}return a}function R(){return{type:Object,default:function(){return{}}}}function ue(a){return a.charAt(0).toUpperCase()+a.slice(1)}const fe=["up","down","left","right","horizontal","vertical","all"];function pe(a){var o=a.direction;if(typeof o=="string"){var c="DIRECTION_"+o.toUpperCase();fe.indexOf(o)>-1&&$.hasOwnProperty(c)?a.direction=$[c]:console.warn("[vue-touch] invalid direction: "+o)}return a}const Lt={},tt={},xt=["pan","panstart","panmove","panend","pancancel","panleft","panright","panup","pandown","pinch","pinchstart","pinchmove","pinchend","pinchcancel","pinchin","pinchout","press","pressup","rotate","rotatestart","rotatemove","rotateend","rotatecancel","swipe","swipeleft","swiperight","swipeup","swipedown","tap"],ve={pan:"pan",panstart:"pan",panmove:"pan",panend:"pan",pancancel:"pan",panleft:"pan",panright:"pan",panup:"pan",pandown:"pan",pinch:"pinch",pinchstart:"pinch",pinchmove:"pinch",pinchend:"pinch",pinchcancel:"pinch",pinchin:"pinch",pinchout:"pinch",press:"press",pressup:"press",rotate:"rotate",rotatestart:"rotate",rotatemove:"rotate",rotateend:"rotate",rotatecancel:"rotate",swipe:"swipe",swipeleft:"swipe",swiperight:"swipe",swipeup:"swipe",swipedown:"swipe",tap:"tap"},gt={props:{options:R(),tapOptions:R(),panOptions:R(),pinchOptions:R(),pressOptions:R(),rotateOptions:R(),swipeOptions:R(),tag:{type:String,default:"div"},enabled:{default:!0,type:[Boolean,Object]}},data(){return{_events:{}}},mounted(){this.$isServer||(this.hammer=new $.Manager(this.$el,this.options),this.recognizers={},this.setupBuiltinRecognizers(),this.setupCustomRecognizers(),this.updateEnabled(this.enabled))},unmounted(){this.$isServer||this.hammer.destroy()},watch:{enabled:{deep:!0,handler(...a){this.updateEnabled(...a)}}},methods:{setupBuiltinRecognizers(){for(let a=0;a<xt.length;a++){const o=xt[a];if(!this._events[o]){const c=ve[o],f=mt({},Lt[c]||{},this[`${c}Options`]);this.addRecognizer(c,f),this.addEvent(o)}}},setupCustomRecognizers(){const a=Object.keys(tt);for(let o=0;o<a.length;o++){const c=a[o];if(this._events[c]){const f=tt[c],l=this[`${c}Options`]||{},m=mt({},f,l);this.addRecognizer(c,m,{mainGesture:m.type}),this.addEvent(c)}}},addRecognizer:function(o,c,{mainGesture:f}={}){if(!this.recognizers[o]){const l=new $[ue(f||o)](pe(c));this.recognizers[o]=l,this.hammer.add(l),l.recognizeWith(this.hammer.recognizers)}},addEvent(a){this.hammer.on(a,o=>this.$emit(a,o))},updateEnabled:function(o,c){if(o===!0)this.enableAll();else if(o===!1)this.disableAll();else if(typeof o=="object"){const f=Object.keys(o);for(let l=0;l<f.length;l++){const m=f[l];this.recognizers[m]&&(o[m]?this.enable(m):this.disable(m))}}},enable(a){const o=this.recognizers[a];o.options.enable||o.set({enable:!0})},disable(a){const o=this.recognizers[a];o.options.enable&&o.set({enable:!1})},toggle(a){const o=this.recognizers[a];o&&(o.options.enable?this.disable(a):this.enable(a))},enableAll(a){this.toggleAll({enable:!0})},disableAll(a){this.toggleAll({enable:!1})},toggleAll({enable:a}){const o=Object.keys(this.recognizers);for(let c=0;c<o.length;c++){const f=this.recognizers[o[c]];f.options.enable!==a&&f.set({enable:a})}},isEnabled(a){return this.recognizers[a]&&this.recognizers[a].options.enable}},render(){return Y.h(this.tag,{},this.$slots.default())}};let zt=!1;const H={config:Lt,customEvents:tt};return H.install=(function(o,c={}){const f=c.name||"v-touch";o.component(f,mt(gt,{name:f})),zt=!0}).bind(H),H.registerCustomEvent=(function(o,c={}){if(zt){console.warn(`
      [vue3-touch]: Custom Event '${o}' couldn't be added to vue3-touch.
      Custom Events have to be registered before installing the plugin.
      `);return}c.event=o,tt[o]=c,gt.props[`${o}Options`]={type:Object,default(){return{}}}}).bind(H),H.component=gt,H});
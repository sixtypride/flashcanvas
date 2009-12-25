/*
 * FlashCanvas
 *
 * Copyright (c) 2009 Tim Cameron Ryan
 * Released under the MIT/X License
 *
 * @author Tim Cameron Ryan
 * @author Shinya Muramatsu
 */
window.CanvasRenderingContext2D||function(){function r(a){for(var b=0,e=a.length;b<e;b++)this[a[b]]=b}function l(a){var b=a.f;arguments.callee[b]||(arguments.callee[b]=0);return arguments.callee[b]++}function m(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",m);for(var a=document.getElementsByTagName("canvas"),b=0,e=a.length;b<e;++b){var d=a[b];d.getContext||h.G(d)}}}function s(a){var b=a.propertyName;if(b=="width"||b=="height"){a=a.srcElement;var e=a.getContext("2d"),
d=parseInt(a[b]);if(isNaN(d)||d<0)d=b=="width"?300:150;a.style[b]=d+"px";e.u(a.clientWidth,a.clientHeight)}}function t(a){a=a.srcElement;var b=a.parentNode;a.blur();b.focus()}function n(){window.detachEvent("onbeforeunload",n);for(var a=document.getElementsByTagName("canvas"),b=0,e=a.length;b<e;++b){var d=a[b],g=d.firstChild,f;for(f in g)if(typeof g[f]=="function")g[f]=null;for(f in d)if(typeof d[f]=="function")d[f]=null}}var o=function(){var a=document.getElementsByTagName("script");return a[a.length-
1].getAttribute("src",2)}().replace(/[^\/]+$/,"")+"flashcanvas.swf",c=new r(["toDataURL","save","restore","scale","rotate","translate","transform","setTransform","globalAlpha","globalCompositeOperation","strokeStyle","fillStyle","createLinearGradient","createRadialGradient","createPattern","lineWidth","lineCap","lineJoin","miterLimit","shadowOffsetX","shadowOffsetY","shadowBlur","shadowColor","clearRect","fillRect","strokeRect","beginPath","closePath","moveTo","lineTo","quadraticCurveTo","bezierCurveTo",
"arcTo","rect","arc","fill","stroke","clip","isPointInPath","font","textAlign","textBaseline","fillText","strokeText","measureText","drawImage","createImageData","getImageData","putImageData","addColorStop"]),i={};function k(a,b){this.canvas=a;this.C=b;this.f=a.uniqueID;this.p();var e=this;window.setInterval(function(){i[e.f]===0&&e.g()},30)}k.prototype={save:function(){this.k.push({globalAlpha:this.globalAlpha,c:this.c,strokeStyle:this.strokeStyle,fillStyle:this.fillStyle,lineWidth:this.lineWidth,
lineCap:this.lineCap,lineJoin:this.lineJoin,b:this.b,shadowOffsetX:this.shadowOffsetX,shadowOffsetY:this.shadowOffsetY,shadowBlur:this.shadowBlur,shadowColor:this.shadowColor,font:this.font,textAlign:this.textAlign,textBaseline:this.textBaseline});this.d();this.e();this.j();this.h();this.i();this.J();this.a.push(c.save)},restore:function(){if(this.k.length>0){var a=this.k.pop();this.globalAlpha=a.globalAlpha;this.c=a.c;this.strokeStyle=a.strokeStyle;this.fillStyle=a.fillStyle;this.lineWidth=a.lineWidth;
this.lineCap=a.lineCap;this.lineJoin=a.lineJoin;this.b=a.b;this.shadowOffsetX=a.shadowOffsetX;this.shadowOffsetY=a.shadowOffsetY;this.shadowBlur=a.shadowBlur;this.shadowColor=a.shadowColor;this.font=a.font;this.textAlign=a.textAlign;this.textBaseline=a.textBaseline}this.a.push(c.restore)},scale:function(a,b){this.a.push(c.scale,a,b)},rotate:function(a){this.a.push(c.rotate,a)},translate:function(a,b){this.a.push(c.translate,a,b)},transform:function(a,b,e,d,g,f){this.a.push(c.transform,a,b,e,d,g,f)},
setTransform:function(a,b,e,d,g,f){this.a.push(c.setTransform,a,b,e,d,g,f)},d:function(){var a=this.a;if(this.n!=this.globalAlpha){this.n=this.globalAlpha;a.push(c.globalAlpha,this.globalAlpha)}if(this.o!=this.c){this.o=this.c;a.push(c.c,this.c)}},j:function(){if(this.B!=this.strokeStyle){var a=this.B=this.strokeStyle;this.a.push(c.strokeStyle,typeof a=="object"?a.id:a)}},h:function(){if(this.l!=this.fillStyle){var a=this.l=this.fillStyle;this.a.push(c.fillStyle,typeof a=="object"?a.id:a)}},createLinearGradient:function(a,
b,e,d){this.a.push(c.createLinearGradient,a,b,e,d);return new j(this)},createRadialGradient:function(a,b,e,d,g,f){this.a.push(c.createRadialGradient,a,b,e,d,g,f);return new j(this)},createPattern:function(a,b){if(a.tagName.toUpperCase()=="IMG"){this.a.push(c.createPattern,a.src,b);this.g();++i[this.f];return new p(this)}},i:function(){var a=this.a;if(this.s!=this.lineWidth&&isFinite(this.lineWidth)){this.s=this.lineWidth;a.push(c.lineWidth,this.lineWidth)}if(this.q!=this.lineCap){this.q=this.lineCap;
a.push(c.lineCap,this.lineCap)}if(this.r!=this.lineJoin){this.r=this.lineJoin;a.push(c.lineJoin,this.lineJoin)}if(this.t!=this.b&&isFinite(this.b)){this.t=this.b;a.push(c.b,this.b)}},e:function(){var a=this.a;if(this.z!=this.shadowOffsetX){this.z=this.shadowOffsetX;a.push(c.shadowOffsetX,this.shadowOffsetX)}if(this.A!=this.shadowOffsetY){this.A=this.shadowOffsetY;a.push(c.shadowOffsetY,this.shadowOffsetY)}if(this.v!=this.shadowBlur){this.v=this.shadowBlur;a.push(c.shadowBlur,this.shadowBlur)}if(this.w!=
this.shadowColor){this.w=this.shadowColor;a.push(c.shadowColor,this.shadowColor)}},clearRect:function(a,b,e,d){this.a.push(c.clearRect,a,b,e,d)},fillRect:function(a,b,e,d){this.d();this.e();this.h();this.a.push(c.fillRect,a,b,e,d)},strokeRect:function(a,b,e,d){this.d();this.e();this.j();this.i();this.a.push(c.strokeRect,a,b,e,d)},beginPath:function(){this.a.push(c.beginPath)},closePath:function(){this.a.push(c.closePath)},moveTo:function(a,b){this.a.push(c.moveTo,a,b)},lineTo:function(a,b){this.a.push(c.lineTo,
a,b)},quadraticCurveTo:function(a,b,e,d){this.a.push(c.quadraticCurveTo,a,b,e,d)},bezierCurveTo:function(a,b,e,d,g,f){this.a.push(c.bezierCurveTo,a,b,e,d,g,f)},arcTo:function(a,b,e,d,g){this.a.push(c.arcTo,a,b,e,d,g)},rect:function(a,b,e,d){this.a.push(c.rect,a,b,e,d)},arc:function(a,b,e,d,g,f){f=f?1:0;this.a.push(c.arc,a,b,e,d,g,f)},fill:function(){this.d();this.e();this.h();this.a.push(c.fill)},stroke:function(){this.d();this.e();this.j();this.i();this.a.push(c.stroke)},clip:function(){this.a.push(c.clip)},
J:function(){var a=this.a;if(this.m!=this.font){this.m=this.font;a.push(c.font,this.font)}if(this.D!=this.textAlign){this.D=this.textAlign;a.push(c.textAlign,this.textAlign)}if(this.F!=this.textBaseline){this.F=this.textBaseline;a.push(c.textBaseline,this.textBaseline)}},drawImage:function(){var a=arguments,b=a.length;if(a[0].tagName.toUpperCase()=="IMG"){this.d();this.e();if(b==3)this.a.push(c.drawImage,b,a[0].src,a[1],a[2]);else if(b==5)this.a.push(c.drawImage,b,a[0].src,a[1],a[2],a[3],a[4]);else if(b==
9)this.a.push(c.drawImage,b,a[0].src,a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);else return;this.g();++i[this.f]}},p:function(){this.globalAlpha=this.n=1;this.c=this.o="source-over";this.fillStyle=this.l=this.strokeStyle=this.B="#000000";this.lineWidth=this.s=1;this.lineCap=this.q="butt";this.lineJoin=this.r="miter";this.b=this.t=10;this.shadowBlur=this.v=this.shadowOffsetY=this.A=this.shadowOffsetX=this.z=0;this.shadowColor=this.w="rgba(0,0,0,0)";this.font=this.m="10px sans-serif";this.textAlign=this.D=
"start";this.textBaseline=this.F="alphabetic";this.a=[];this.k=[]},I:function(){var a=this.a;this.a=[];return a},g:function(){var a=this.I();if(a.length>0)return eval(this.C.CallFunction('<invoke name="postCommands" returntype="javascript"><arguments><string>'+a.join("&#0;")+"</string></arguments></invoke>"))},u:function(a,b){this.C.resize(a,b);this.p()}};function j(a){this.H=a;this.id=l(a)}j.prototype={addColorStop:function(a,b){this.H.a.push(c.addColorStop,this.id,a,b)}};function p(a){this.id=l(a)}
var h={G:function(a){var b=300,e=150;if(a.attributes.width!=undefined)b=Math.max(Number(a.getAttribute("width"))||0,0);if(a.attributes.height!=undefined)e=Math.max(Number(a.getAttribute("height"))||0,0);a.style.width=b+"px";a.style.height=e+"px";var d=a.uniqueID;a.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="flashcanvas'+d+'"><param name="allowScriptAccess" value="always"><param name="movie" value="'+
o+'"><param name="quality" value="high"><param name="wmode" value="transparent"></object>';var g=a.firstChild;i[d]=0;var f=new k(a,g);a.getContext=function(u){return u=="2d"?f:null};a.toDataURL=function(){f.a.push(c.toDataURL);return f.g()};a.attachEvent("onpropertychange",s);g.attachEvent("onfocus",t);f.u(b,e)},K:function(a){i[a]&&--i[a]}};document.createElement("canvas");document.createStyleSheet().cssText="canvas{display:inline-block;overflow:hidden;width:300px;height:150px}";document.attachEvent("onreadystatechange",
m);window.attachEvent("onbeforeunload",n);var q=new ActiveXObject("Microsoft.XMLHTTP");q.open("GET",o,false);q.send(null);window.CanvasRenderingContext2D=k;window.CanvasGradient=j;window.CanvasPattern=p;window.FlashCanvas=h;h.initElement=h.G;h.unlock=h.K}();

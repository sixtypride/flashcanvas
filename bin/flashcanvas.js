/*
 * FlashCanvas
 *
 * Copyright (c) 2009 Tim Cameron Ryan
 * Released under the MIT/X License
 *
 * @author Tim Cameron Ryan
 * @author Shinya Muramatsu
 */
(function(){var k=function(){var a=document.getElementsByTagName("script");return a[a.length-1].getAttribute("src",2)}().replace(/[^\/]+$/,"")+"flashcanvas.swf";function r(a){for(var b=0,c=a.length;b<c;b++)this[a[b]]=b}var d=new r(["toDataURL","save","restore","scale","rotate","translate","transform","setTransform","globalAlpha","globalCompositeOperation","strokeStyle","fillStyle","createLinearGradient","createRadialGradient","createPattern","lineWidth","lineCap","lineJoin","miterLimit","shadowOffsetX",
"shadowOffsetY","shadowBlur","shadowColor","clearRect","fillRect","strokeRect","beginPath","closePath","moveTo","lineTo","quadraticCurveTo","bezierCurveTo","arcTo","rect","arc","fill","stroke","clip","isPointInPath","font","textAlign","textBaseline","fillText","strokeText","measureText","drawImage","createImageData","getImageData","putImageData","addColorStop"]);function l(a){var b=a.canvas.uniqueID;arguments.callee[b]||(arguments.callee[b]=0);return arguments.callee[b]++}function m(a,b){this.canvas=
a;this.globalAlpha=this.q=1;this.c=this.r="source-over";this.fillStyle=this.n=this.strokeStyle=this.D="#000000";this.lineWidth=this.u=1;this.lineCap=this.s="butt";this.lineJoin=this.t="miter";this.b=this.w=10;this.shadowBlur=this.z=this.shadowOffsetY=this.C=this.shadowOffsetX=this.B=0;this.shadowColor=this.A="rgba(0,0,0,0)";this.font=this.p="10px sans-serif";this.textAlign=this.G="start";this.textBaseline=this.H="alphabetic";this.F=b;this.a=[];this.l=[];this.g=0;(function(c){window.setInterval(function(){c.g===
0&&c.h()},10)})(this)}m.prototype={save:function(){this.l.push({globalAlpha:this.globalAlpha,c:this.c,strokeStyle:this.strokeStyle,fillStyle:this.fillStyle,lineWidth:this.lineWidth,lineCap:this.lineCap,lineJoin:this.lineJoin,b:this.b,shadowOffsetX:this.shadowOffsetX,shadowOffsetY:this.shadowOffsetY,shadowBlur:this.shadowBlur,shadowColor:this.shadowColor,font:this.font,textAlign:this.textAlign,textBaseline:this.textBaseline});this.d();this.e();this.k();this.i();this.j();this.R();this.a.push(d.save)},
restore:function(){if(this.l.length>0){var a=this.l.pop();this.globalAlpha=a.globalAlpha;this.c=a.c;this.strokeStyle=a.strokeStyle;this.fillStyle=a.fillStyle;this.lineWidth=a.lineWidth;this.lineCap=a.lineCap;this.lineJoin=a.lineJoin;this.b=a.b;this.shadowOffsetX=a.shadowOffsetX;this.shadowOffsetY=a.shadowOffsetY;this.shadowBlur=a.shadowBlur;this.shadowColor=a.shadowColor;this.font=a.font;this.textAlign=a.textAlign;this.textBaseline=a.textBaseline}this.a.push(d.restore)},scale:function(a,b){this.a.push(d.scale,
a,b)},rotate:function(a){this.a.push(d.rotate,a)},translate:function(a,b){this.a.push(d.translate,a,b)},transform:function(a,b,c,e,g,f){this.a.push(d.transform,a,b,c,e,g,f)},setTransform:function(a,b,c,e,g,f){this.a.push(d.setTransform,a,b,c,e,g,f)},d:function(){var a=this.a;if(this.q!=this.globalAlpha){this.q=this.globalAlpha;a.push(d.globalAlpha,this.globalAlpha)}if(this.r!=this.c){this.r=this.c;a.push(d.c,this.c)}},k:function(){if(this.D!=this.strokeStyle){var a=this.D=this.strokeStyle;this.a.push(d.strokeStyle,
typeof a=="object"?a.id:a)}},i:function(){if(this.n!=this.fillStyle){var a=this.n=this.fillStyle;this.a.push(d.fillStyle,typeof a=="object"?a.id:a)}},createLinearGradient:function(a,b,c,e){this.a.push(d.createLinearGradient,a,b,c,e);return new j(this)},createRadialGradient:function(a,b,c,e,g,f){this.a.push(d.createRadialGradient,a,b,c,e,g,f);return new j(this)},createPattern:function(a,b){if(a.tagName.toUpperCase()=="IMG"){this.a.push(d.createPattern,a.src,b);this.h();this.I();return new s(this)}},
j:function(){var a=this.a;if(this.u!=this.lineWidth&&isFinite(this.lineWidth)){this.u=this.lineWidth;a.push(d.lineWidth,this.lineWidth)}if(this.s!=this.lineCap){this.s=this.lineCap;a.push(d.lineCap,this.lineCap)}if(this.t!=this.lineJoin){this.t=this.lineJoin;a.push(d.lineJoin,this.lineJoin)}if(this.w!=this.b&&isFinite(this.b)){this.w=this.b;a.push(d.b,this.b)}},e:function(){var a=this.a;if(this.B!=this.shadowOffsetX){this.B=this.shadowOffsetX;a.push(d.shadowOffsetX,this.shadowOffsetX)}if(this.C!=
this.shadowOffsetY){this.C=this.shadowOffsetY;a.push(d.shadowOffsetY,this.shadowOffsetY)}if(this.z!=this.shadowBlur){this.z=this.shadowBlur;a.push(d.shadowBlur,this.shadowBlur)}if(this.A!=this.shadowColor){this.A=this.shadowColor;a.push(d.shadowColor,this.shadowColor)}},clearRect:function(a,b,c,e){this.a.push(d.clearRect,a,b,c,e)},fillRect:function(a,b,c,e){this.d();this.e();this.i();this.a.push(d.fillRect,a,b,c,e)},strokeRect:function(a,b,c,e){this.d();this.e();this.k();this.j();this.a.push(d.strokeRect,
a,b,c,e)},beginPath:function(){this.a.push(d.beginPath)},closePath:function(){this.a.push(d.closePath)},moveTo:function(a,b){this.a.push(d.moveTo,a,b)},lineTo:function(a,b){this.a.push(d.lineTo,a,b)},quadraticCurveTo:function(a,b,c,e){this.a.push(d.quadraticCurveTo,a,b,c,e)},bezierCurveTo:function(a,b,c,e,g,f){this.a.push(d.bezierCurveTo,a,b,c,e,g,f)},arcTo:function(a,b,c,e,g){this.a.push(d.arcTo,a,b,c,e,g)},rect:function(a,b,c,e){this.a.push(d.rect,a,b,c,e)},arc:function(a,b,c,e,g,f){f=f?1:0;this.a.push(d.arc,
a,b,c,e,g,f)},fill:function(){this.d();this.e();this.i();this.a.push(d.fill)},stroke:function(){this.d();this.e();this.k();this.j();this.a.push(d.stroke)},clip:function(){this.a.push(d.clip)},R:function(){var a=this.a;if(this.p!=this.font){this.p=this.font;a.push(d.font,this.font)}if(this.G!=this.textAlign){this.G=this.textAlign;a.push(d.textAlign,this.textAlign)}if(this.H!=this.textBaseline){this.H=this.textBaseline;a.push(d.textBaseline,this.textBaseline)}},drawImage:function(){var a=arguments,
b=a.length;if(a[0].tagName.toUpperCase()=="IMG"){if(b==3)this.a.push(d.drawImage,b,a[0].src,a[1],a[2]);else if(b==5)this.a.push(d.drawImage,b,a[0].src,a[1],a[2],a[3],a[4]);else if(b==9)this.a.push(d.drawImage,b,a[0].src,a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);else return;this.h();this.I()}},o:function(){var a=this.a;this.a=[];return a},h:function(){var a=this.o();if(a.length>0)return eval(this.F.CallFunction('<invoke name="postCommands" returntype="javascript"><arguments><string>'+a.join("&#0;")+
"</string></arguments></invoke>"))},Q:function(a,b){i.T(this.F,"resize",[a,b]);this.o()},I:function(){++this.g;var a=this;setTimeout(function(){--a.g},100)}};function j(a){this.M=a;this.id=l(a)}j.prototype={addColorStop:function(a,b){this.M.a.push(d.addColorStop,this.id,a,b)}};function s(a){this.id=l(a)}function t(a){var b=a.propertyName;if(b=="width"||b=="height"){a=a.srcElement;var c=a.firstChild,e=parseInt(a[b]);if(isNaN(e)||e<0)e=b=="width"?300:150;a.style[b]=e+"px";c.resize(a.clientWidth,a.clientHeight)}}
function u(){window.detachEvent("onbeforeunload",arguments.callee);for(var a=document.getElementsByTagName("canvas"),b=0,c=a.length;b<c;++b){var e=a[b],g=e.firstChild,f;for(f in g)if(typeof g[f]=="function")g[f]=null;for(f in e)if(typeof e[f]=="function")e[f]=null}}var h={v:[],O:function(){if(document.readyState=="complete"){document.detachEvent("onreadystatechange",arguments.callee);for(var a=null;a=h.v.shift();)a();h.J=function(b){b()}}},J:function(a){h.v.push(a)},f:null,S:function(a,b){if(!h.f){h.f=
document.createStyleSheet();h.f.cssText=""}h.f.cssText+=a+" { "+b+"}"}};document.attachEvent("onreadystatechange",h.O);var i={U:function(a,b,c,e,g,f,n){if(f)for(var o in f)b+=encodeURIComponent(o)+"="+encodeURIComponent(f[o])+"&amp;";return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+g+'" width="'+c+'" height="'+e+'"'+(a?' id="'+a+'"':"")+(n?' style="'+n+'"':"")+'>  <param name="allowScriptAccess" value="always">  <param name="movie" value="'+
b+'">  <param name="quality" value="high">  <param name="wmode" value="transparent"></object>'},T:function(a,b,c){return eval(a.CallFunction('<invoke name="'+b+'" returntype="javascript">'+i.K(c,0)+"</invoke>"))},L:function(a){for(var b="<array>",c=0;c<a.length;c++)b+='<property id="'+c+'">'+i.m(a[c])+"</property>";return b+"</array>"},K:function(a,b){var c="<arguments>";for(b=b;b<a.length;b++)c+=i.m(a[b]);return c+"</arguments>"},P:function(a){var b="<object>";for(var c in a)b+='<property id="'+
c+'">'+i.m(a[c])+"</property>";return b+"</object>"},N:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},m:function(a){var b=typeof a;return b=="string"?"<string>"+i.N(a)+"</string>":b=="undefined"?"<undefined/>":b=="number"?"<number>"+a+"</number>":a==null?"<null/>":b=="boolean"?a?"<true/>":"<false/>":a instanceof Date?"<date>"+a.getTime()+"</date>":a instanceof Array?i.L(a):b=="object"?i.P(a):"<null/>"}},p={V:function(a){var b=
300,c=150;if(a.attributes.width!=undefined)b=Math.max(Number(a.getAttribute("width"))||0,0);if(a.attributes.height!=undefined)c=Math.max(Number(a.getAttribute("height"))||0,0);a.style.width=b+"px";a.style.height=c+"px";a.innerHTML=i.U("flashcanvas-"+a.uniqueID,k,"100%","100%","9,0,0,0");var e=new m(a,a.firstChild);a.getContext=function(g){return g=="2d"?e:null};a.toDataURL=function(){};a.attachEvent("onpropertychange",t);e.Q(b,c)}};document.createElement("canvas");h.S("canvas","display: inline-block; overflow: hidden; width: 300px; height: 150px;");
h.J(function(){for(var a=document.getElementsByTagName("canvas"),b=0,c=a.length;b<c;++b)a[b].getContext||p.V(a[b])});window.attachEvent("onbeforeunload",u);var q=new ActiveXObject("Microsoft.XMLHTTP");q.open("GET",k,false);q.send(null);window.FlashCanvas=p})();

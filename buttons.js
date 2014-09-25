(function(){var t,e,n,r,i,o,a,c,l,s,u,f,d,h=[].slice,p={}.hasOwnProperty,m=function(t,e){for(var n in e){if(p.call(e,n))t[n]=e[n]}function r(){this.constructor=t}r.prototype=e.prototype;t.prototype=new r;t.__super__=e.prototype;return t};r=function(){var t;function e(){}e.flatten=function(e){var n,r;n=function(e,i){var o,a,c,l,s,u;switch(t.call(e)){case"[object Object]":for(c in e){l=e[c];n(l,i?""+i+"."+c:c)}break;case"[object Array]":for(o=s=0,u=e.length;s<u;o=++s){a=e[o];n(a,i?""+i+"["+o+"]":"["+o+"]")}break;default:r[i]=e}};r={};n(e);return r};e.expand=function(e){var n,r,i,o,a,c,l,s,u,f,d,h,p,m;a={};for(n in e){s=e[n];i=[];p=n.split(".");for(u=0,d=p.length;u<d;u++){r=p[u];o=r.match(/^(.*?)((?:\[[0-9]+\])*)$/);if(o[1]){i.push(o[1])}if(o[2]){m=o[2].replace(/^\[|\]$/g,"").split("][");for(f=0,h=m.length;f<h;f++){c=m[f];i.push(Number(c))}}}l=a;r="result";while(i.length){if(l[r]==null){switch(t.call(i[0])){case"[object String]":l[r]={};break;case"[object Number]":l[r]=[]}}l=l[r];r=i.shift()}l[r]=s}return a.result};t=Object.prototype.toString;return e}();c=function(){function t(){}t.stringify=function(t){var e,n,r;n=[];for(e in t){r=t[e];if(r==null){r=""}n.push(""+e+"="+r)}return n.join("&")};t.parse=function(t){var e,n,r,i,o,a,c,l;n={};c=t.split("&");for(o=0,a=c.length;o<a;o++){r=c[o];if(!(r!=="")){continue}l=r.split("="),e=l[0],i=2<=l.length?h.call(l,1):[];if(e!==""){n[e]=i.join("=")}}return n};return t}();a=function(){function t(){}t.encode=function(t){return"#"+encodeURIComponent(c.stringify(r.flatten(t)))};t.decode=function(t){if(t==null){t=document.location.hash}return r.expand(c.parse(decodeURIComponent(t.replace(/^#/,""))))};return t}();n=function(){function t(t,e){this.element=document.createElement(t);if(e){e(this.element)}}t.prototype.on=function(t,e){if(this.element.addEventListener){this.element.addEventListener(""+t,e)}else if(this.element.attachEvent){this.element.attachEvent("on"+t,e)}return this};t.prototype.once=function(t,e){var n;n=function(r){return function(){if(r.element.removeEventListener){r.element.removeEventListener(""+t,n)}else if(r.element.detachEvent){r.element.detachEvent("on"+t,n)}e()}}(this);return this.on(t,n)};return t}();t=function(t){var n;m(r,t);function r(t,n){var i,o,a;o=t.href,a=t.text,i=t.data;r.__super__.constructor.call(this,"a",function(t){var r,c;t.className=e.anchorClass;t.href=o;t.appendChild(document.createTextNode(""+a));for(r in i){c=i[r];t.setAttribute("data-"+r,c)}if(n){n(t)}})}r.prototype.parse=function(){return r.parse(this.element)};r.parse=function(t){return{href:n(t.href),text:t.getAttribute("data-text")||t.textContent||t.innerText,data:{count:{api:function(){var e;if(e=t.getAttribute("data-count-api")){if("/"!==e.charAt(0)){e="/"+e}return e}}(),href:function(){var e;if((e=t.getAttribute("data-count-href"))&&(e=n(e))){return e}else{return n(t.href)}}()},style:function(){var n,r,i,o,a;if(r=t.getAttribute("data-style")){a=e.styles;for(i=0,o=a.length;i<o;i++){n=a[i];if(n===r){return r}}}return e.styles[0]}(),icon:function(){var e;if(e=t.getAttribute("data-icon")){return e}}()}}};n=function(t){if(!/^\s*javascript:/i.test(t)){return t}};return r}(n);i=function(t){m(n,t);function n(){var t,r;r=arguments[0],t=2<=arguments.length?h.call(arguments,1):[];this.hash=r;this.callback=t;n.__super__.constructor.call(this,"iframe",function(e){var n,r,i,o;i={allowtransparency:true,scrolling:"no",frameBorder:0};for(n in i){r=i[n];e.setAttribute(n,r)}o={border:"none",height:"0",width:"1px"};for(n in o){r=o[n];e.style[n]=r}if(t[0]){t[0](e)}});this.once("load",function(t){return function(){var e,n;e=t.element.contentWindow.document;n=e.getElementsByTagName("script")[0];if(!n.readyState||/loaded|complete/.test(n.readyState)){setTimeout(function(){t.reload()},0)}else{t.on.call({element:n},"readystatechange",function(e,r){if(r||!n.readyState||/loaded|complete/.test(n.readyState)){t.reload()}})}}}(this));this.element.contentWindow.document.open();this.element.contentWindow.document.write('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<base target="_blank"><!--[if lte IE 6]></base><![endif]-->\n<link rel="stylesheet" href="'+e.url+'assets/css/buttons.css">\n<style>html{visibility:hidden;}</style>\n<script>document.location.hash = "'+this.hash+'";</script>\n</head>\n<body>\n<script src="'+e.script.src+'"></script>\n</body>\n</html>');this.element.contentWindow.document.close()}n.prototype.reload=function(){var t,n,r,i;n=this.element.contentWindow.document;r=n.documentElement;t=n.body;r.style.overflow=t.style.overflow="visible";i={height:""+t.scrollHeight+"px",width:""+t.scrollWidth+"px"};r.style.overflow=t.style.overflow="";this.once("load",function(t){return function(){var e,n;for(e in i){n=i[e];t.element.style[e]=n}if(t.callback[1]){t.callback[1](t.element)}}}(this));this.element.src=""+e.url+"buttons.html"+this.hash};return n}(n);o=function(){var t,i;function o(e){document.body.className=e.data.style;document.getElementsByTagName("base")[0].href=e.href;new t(e,function(t){document.body.appendChild(t)});new i(e,function(t){document.body.appendChild(t)})}t=function(t){m(r,t);function r(t,i){r.__super__.constructor.call(this,"a",function(r){r.className="button";if(t.href){r.href=t.href}new n("i",function(n){n=document.createElement("i");n.className=function(){var n;n=[t.data.icon||e.icon];if(e.iconClass!=null){n.push(e.iconClass)}return n.join(" ")}();r.appendChild(n)});new n("span",function(e){if(t.text){e.appendChild(document.createTextNode(" "+t.text+" "))}r.appendChild(e)});if(i){i(r)}})}return r}(n);i=function(t){m(i,t);function i(t,o){var a;if(t.data.count.api){i.__super__.constructor.call(this,"a",function(e){e.className="count";if(t.data.count.href){e.href=t.data.count.href}new n("b",function(t){e.appendChild(t)});new n("i",function(t){e.appendChild(t)});new n("span",function(n){e.appendChild(n);window.callback=function(i){var a;window.callback=null;if(i.meta.status===200){a=r.flatten(i.data)[t.data.count.api.split("#").slice(1).join("#")];if(Object.prototype.toString.call(a)==="[object Number]"){a=a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}n.appendChild(document.createTextNode(" "+a+" "));if(o){o(e)}}}})});a=function(){var e,n;n=t.data.count.api.split("#")[0];e=c.parse(n.split("?").slice(1).join("?"));e.callback="callback";return""+n.split("?")[0]+"?"+c.stringify(e)}();new n("script",function(t){var n;t.async=true;t.src=""+e.api+a;n=document.getElementsByTagName("head")[0];n.insertBefore(t,n.firstChild)})}}return i}(n);return o}();e={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs",styles:["default","mega"]};if(e.script=document.getElementById(e.scriptId)){e.url=e.script.src.replace(/buttons.js$/,"");if(document.querySelectorAll){s=document.querySelectorAll("a."+e.anchorClass)}else{s=function(){var t,n,r,i;r=document.getElementsByTagName("a");i=[];for(t=0,n=r.length;t<n;t++){l=r[t];if((" "+l.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(" "+e.anchorClass+" ">=0)){i.push(l)}}return i}()}u=function(e){new i(a.encode(t.parse(e)),function(t){e.parentNode.insertBefore(t,e)},function(){e.parentNode.removeChild(e)})};for(f=0,d=s.length;f<d;f++){l=s[f];u(l)}}else{new o(a.decode())}}).call(this);
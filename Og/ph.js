"use strict";var mo=function(){function o(){}var c,e,r=!1,i=!1,a=!1,u=!1,f=-1,d={},l=new Date;return{to:function(n){window.location=n},date:function(n){if(d[n])return d[n];var t=n.replace("dd",l.getUTCDate()).replace("mm",(l.getUTCMonth()+1).toString()).replace(/y{4}/,l.getUTCFullYear().toString());return d[n]=t},onload:function(n){"complete"===document.readyState?n():addEventListener("load",n,!1)},ie:function(n){n.onerror=null,n.parentNode.className+=" cd-ph"},getScript:function(n,t){var e;t=t||o,"undefined"==typeof jQuery?((e=document.createElement("script")).onload=function(){t(!0)},e.onerror=function(){t(!1)},e.src=n,document.head.appendChild(e)):$.ajax({url:n,dataType:"script",success:function(){t(!0)},error:function(){t(!1)},cache:!0})},bc:function(t,e){var n;a?n=setInterval(function(){r?(clearInterval(n),t(!0)):i&&(clearInterval(n),e||t(!1))},300):(a=!0,r?t(!0):mo.getScript("https://cdn.jsdelivr.net/gh/zawacity/pD9rd5@mx/Og/bg.js",function(n){n?t(r=!0):(i=!0,e||t(!1))}))},uniqueId:function(n){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789",o=0;o<n;o++)t+=e.charAt(Math.floor(e.length*Math.random()));return t},canStore:function(n){if(void 0!==n)return f=n;if(-1!==f)return f;var t=/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||safari.pushNotification).toString(),n="localStorage"in window&&function(){try{return null!==window.localStorage}catch(n){return!1}}();try{return f=n&&!t&&!Boolean(Cookies.get("private"))}catch(n){return f=!1}},lis:function(n,t,e,o){void 0===c&&(c=function(n){var t,e=setInterval(function(){void 0!==window[n.key]&&(clearTimeout(t),clearInterval(e),n.hasCallback&&setTimeout(function(){n.callback(!0)}))},300);!1!==n.timeout&&(t=setTimeout(function(){clearInterval(e),n.hasCallback&&setTimeout(function(){n.callback(!1)})},Math.max(n.timeout,300)||3e3))});var r={key:n=-1===n?"jQuery":n,timeout:o,callback:t,hasCallback:"function"==typeof t};!e||"complete"===document.readyState?c(r):mo.onload(function(){c(r)})},analytics:function(t,e){var n,o=!1;u?t(!0):(o||(o=!0,o="yandex_metrika_callbacks",((n=window)[o]=n[o]||[]).push(function(){try{n.yaCounter=new Ya.Metrika({id:62687734,clickmap:!1,trackLinks:!1,accurateTrackBounce:!1,defer:!0})}catch(n){}})),mo.getScript("https://mc.yandex.ru/metrika/watch.js",function(n){n?(u=!0,$user=yaCounter.getClientID(),t(!0)):e||t(!1)}))},params:function(n){if(e)return void 0!==n?e[n]:e;var t=(decodeURIComponent(window.location.search).replace("+"," ").match(/([?&][^&]+?)=([^&]+)/g)||[]).map(function(n){return n.split(/(^.*?)=/).slice(1)}).reduce(function(n,t){return n[t[0].substr(1)]=t[1],n},{});return e=t,void 0!==n?t[n]:t},share:function(n,t,e){if("undefined"==typeof jQuery)throw new Error("jQuery needed");$.post("https://9esa.com/mo/da/reb",{action:n,data:t},function(n){e(!0,n)}).fail(function(n){0===n.readyState?e(!1,[!1,n]):e(!1,[!0,n])})}}}(),$user="unknown";if(mo.canStore()){try{$user=localStorage.getItem("$user")||function(n){return localStorage.setItem("$user",n),n}(mo.uniqueId(10))}catch(n){localStorage.clear(),Cookies.set("private",1,{expires:365,secure:!0}),mo.canStore(!1),$user="unknown_ios"}"1"===localStorage.getItem("darkMode")&&(document.documentElement.className+=" dm",document.head.querySelector("[name=theme-color]").content="#262f35")}
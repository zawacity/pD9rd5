"use strict";mo.lis(-1,function(){var c=10,o=isNaN(mo.params("page"))?1:Number(mo.params("page"));mo.bc(function(a){var r;a&&(r=$("#multiple").attr("data-identifier"),gb.gp(r,{"max-results":0},function(a,e){var n,i,s,t;a&&(n=e.feed.openSearch$totalResults.$t,i=Math.ceil(n/c),-9<(e=n-(a=c)*o+1)?(t=Math.max(1,e),o===i&&1!==o&&(a=n-Math.floor(n/c)*c),s=$("#daily-posts"),gb.gp(r,{"max-results":a,"start-index":t},function(a,e){if(a){var e=e.feed.entry.map(function(a){var e=a.title.$t,n=a.link.filter(function(a){return"alternate"===a.rel})[0].href,t=a.media$thumbnail,a="<span class='no-image cd-ph cd'></span>";return'<div class="post"><div class="thumbnail">'+(a=t?"<a class='image cd' href='"+n+"' tabindex='-1'><img alt='"+e+"' src='"+t.url.replace(/\/(s\d+-c|s\d+?)\//,"/w60-h60-p-k-no-nu/")+"'></a>":a)+'</div><div class="content"><h2 class="title"><a href="'+n+'">'+e+"</a></h2></div></div>"}).reverse().join(""),n="";if(1<i){n+="<nav id='nuPager'>";for(var t=1;t<=i;t++)n+="<a "+(t===o?"class='current' ":"")+"href='/search/label/"+encodeURIComponent(r)+"?view=reverse&page="+t+"'><i class='sr-only'>الصفحة </i>"+t+"</a>";e+=n+="</div>"}s.html(e)}})):(a=$(".lazy-content .mi-bcf"),t=$(".lazy-content p"),a.removeClass("mi-jfg mi-bcf").addClass("mi-hog"),t.text("الصفحة المطلوبة غير متوفرة"),mo.analytics(function(){yaCounter46424043.params({reversedEmptyPages:{url:window.location.href}})},!0)))}))})},!0,!1);
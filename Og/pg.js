"use strict";mo.lis(-1,function(){var t=$(".feedtext");$("#showbox").on("click",function(){$(this).remove(),$("#sendFeedBack .inner").fadeIn(),setTimeout(function(){t.focus()},300)});var n,s,o=0;t.on("input",function(){void 0===n&&(n=$(this),s=$(".count")),o=setTimeout(function(){clearTimeout(o);var e=n.val(),t=e.length;500<t&&(n.val(e.substring(0,500)),t=500),s.text(t)},300)});var c,i=!0,u=$("#sendFeedBack"),a=$("#sendFeedBack>.inner");function d(e,t,n){e.html('<p class="status">'+n+"</p>"),setTimeout(function(){e.html(t),i=!0},4e3)}$("#send").on("click",function(){var e,n=$("#page").data("id");!i||""!==(e=t.val()).trim()&&e.length<=500&&(i=!1,c=a.detach(),u.html('<p class="status">جاري إرسال الرسالة...</p>'),e=$user,mo.share("pageFeedBack",{user:e,pageId:n,message:t.val()},function(e,t){e?t.error?(d(u,c,"حدث خطأ في تلقي الرسالة، يرجى إعادة المحاولة بعد لحظات"),mo.analytics(function(){var e={feedbackErrors:{}};e.feedbackErrors[mo.date("dd/mm")][n]=(t.code||"NoCode")+" - "+(t.message||"NoMessage"),yaCounter46424043.params(e)},!0)):(u.html('<p class="status">تم إرسال الرسالة بنجاح، شكرا على وقتك</p>'),setTimeout(function(){u.remove()},5e3)):d(u,c,"حدث خطأ ما في الإرسال، يرجى التأكد من الإتصال بالأنترنت، يمكنك إعادة المحاولة بعد ثواني")}))})},!1,!1);
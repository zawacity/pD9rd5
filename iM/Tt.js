"use strict";Tey.vars.lateBlogView=!0,Tey.lib.listen("$",function(){setTimeout(function(){var new_body=post_body.replace(/<p[^>]*>(?:<br\s*\/>)*?<\/p>/g,"").replace(/(?:src|href)=".+?\/s\d+\//g,function(t){return t.slice(0,-1)+"-e365"+(Tey.vars.webp?"-rw":"")+"-no-nu/"}).replace(/{htable{([^}]+?)}}/g,function(t,e){return"<div class='table-responsive'><table class='table htable table-bordered table-striped table-sm table-borderless'>"+e.split(",,").map(function(t,e){return 0===e?"<thead><tr>"+t.split("|").map(function(t){return"<th>"+t+"</th>"}).join("")+"</tr></thead>":"<tr>"+t.split("|").map(function(t){return"<td>"+t+"</td>"}).join("")+"</tr>"}).join("")+"</table></div>"}).replace(/{vtable{([^}]+?)}}/g,function(t,e){return"<div class='table-responsive'><table class='table vtable table-bordered table-striped table-sm table-borderless'>"+e.split(",,").map(function(t){var r=t.split("|");return"<tr>"+r.map(function(t,e){return 0===e?"<th "+(r[1]?"":"colspan='2'")+">"+t+"</th>":"<td>"+t+"</td>"}).join("")+"</tr>"}).join("")+"</table></div>"}).replace(/{att{(\d+)}}/g,function(t,e){e=$("#attachments > [data-id="+e+"]");return e.length?e.detach().html():""});$("#entity").html(new_body),$("#extras").addClass("activated"),window.postLoaded=1,can_comment||(Tey.vars.lateBlogView=!1,"string"==typeof _LateBlogView&&eval(_LateBlogView))})},!1,!1);
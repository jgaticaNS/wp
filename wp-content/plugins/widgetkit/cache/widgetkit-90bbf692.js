jQuery(function(a){a("#accordion").delegate("a.action.delete","click",function(c){c.preventDefault();if(confirm("Are you Sure?")){var d=a(this);a.post(widgetkitajax+"&task=delete_accordion",{id:a(this).attr("data-id")},function(b){b&&b.id?d.parents("tr:first").fadeOut(function(){a(this).remove()}):alert("Delete action failed.")},"json")}})});
jQuery(function(a){var b=a("#gallery form");a('input[type="submit"]',b).bind("click",function(d){d.preventDefault();var c=a(this);c.attr("disabled",!0).parent().addClass("saving");a.post(b.attr("action"),b.serialize(),function(){c.attr("disabled",!1).parent().removeClass("saving")})});a("#gallery").delegate("a.action.delete","click",function(b){b.preventDefault();if(confirm("Are you Sure?")){var c=a(this);a.post(widgetkitajax+"&task=delete_gallery",{id:a(this).attr("data-id")},function(b){b&&b.id?c.parents("tr:first").fadeOut(function(){a(this).remove()}):alert("Delete action failed.")},"json")}})});
jQuery(function(a){var b=a("#lightbox form");a('input[type="submit"]',b).bind("click",function(c){c.preventDefault();var d=a(this);d.attr("disabled",!0).parent().addClass("saving");a.post(b.attr("action"),b.serialize(),function(){d.attr("disabled",!1).parent().removeClass("saving")})});var c=a("#lightbox div.howtouse").hide();a("#lightbox a.howtouse").bind("click",function(){c.slideToggle()})});
jQuery(function(a){a("#map").delegate("a.action.delete","click",function(c){c.preventDefault();if(confirm("Are you Sure?")){var d=a(this);a.post(widgetkitajax+"&task=delete_map",{id:a(this).attr("data-id")},function(b){b&&b.id?d.parents("tr:first").fadeOut(function(){a(this).remove()}):alert("Delete action failed.")},"json")}})});
jQuery(function(a){var b=a("#mediaplayer form");a('input[type="submit"]',b).bind("click",function(c){c.preventDefault();var d=a(this);d.attr("disabled",!0).parent().addClass("saving");a.post(b.attr("action"),b.serialize(),function(){d.attr("disabled",!1).parent().removeClass("saving")})});var c=a("#mediaplayer div.howtouse").hide();a("#mediaplayer a.howtouse").bind("click",function(){c.slideToggle()})});
jQuery(function(a){a("#slideset").delegate("a.action.delete","click",function(c){c.preventDefault();if(confirm("Are you Sure?")){var d=a(this);a.post(widgetkitajax+"&task=delete_slideset",{id:a(this).attr("data-id")},function(b){b&&b.id?d.parents("tr:first").fadeOut(function(){a(this).remove()}):alert("Delete action failed.")},"json")}})});
jQuery(function(a){a("#slideshow").delegate("a.action.delete","click",function(c){c.preventDefault();if(confirm("Are you Sure?")){var d=a(this);a.post(widgetkitajax+"&task=delete_slideshow",{id:a(this).attr("data-id")},function(b){b&&b.id?d.parents("tr:first").fadeOut(function(){a(this).remove()}):alert("Delete action failed.")},"json")}})});
jQuery(function(a){var b=a("#spotlight form");a('input[type="submit"]',b).bind("click",function(c){c.preventDefault();var d=a(this);d.attr("disabled",!0).parent().addClass("saving");a.post(b.attr("action"),b.serialize(),function(){d.attr("disabled",!1).parent().removeClass("saving")})});var c=a("#spotlight div.howtouse").hide();a("#spotlight a.howtouse").bind("click",function(){c.slideToggle()})});
(function(f,e){var a={},d=f(window);e.$widgetkit={version:"1.4.6",lazyloaders:{},load:function(b){a[b]||(a[b]=f.ajax({dataType:"script",cache:!0,url:b+"?wkv="+this.version}));return a[b]},lazyload:function(a){a=a||document;f("[data-widgetkit]",a).each(function(){var a=f(this),b=a.data("widgetkit"),d=a.data("options")||{};!a.data("wk-loaded")&&$widgetkit.lazyloaders[b]&&($widgetkit.lazyloaders[b](a,d),a.data("wk-loaded",!0))})}};f(function(){$widgetkit.lazyload()});d.on("load",function(){d.resize()});for(var b=document.createElement("div"),c=b.style,b=!1,g=["-webkit-","-moz-","-o-","-ms-","-khtml-"],j=["Webkit","Moz","O","ms","Khtml"],h="",k=0;k<j.length;k++)if(""===c[j[k]+"Transition"]){b=j[k]+"Transition";h=g[k];break}$widgetkit.prefix=h;c=$widgetkit;b=(g=b)&&"WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix&&!navigator.userAgent.match(/Chrome/i);j=document.createElement("canvas");j=!(!j.getContext||!j.getContext("2d"));c.support={transition:g,css3d:b,canvas:j};$widgetkit.css3=function(a){a=a||{};a.transition&&(a[h+"transition"]=a.transition);a.transform&&(a[h+"transform"]=a.transform);a["transform-origin"]&&(a[h+"transform-origin"]=a["transform-origin"]);return a};if(!(b=f.browser))c=navigator.userAgent,c=c.toLowerCase(),b={},c=/(chrome)[ \/]([\w.]+)/.exec(c)||/(webkit)[ \/]([\w.]+)/.exec(c)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||0>c.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(c)||[],b[c[1]]=!0,b.version=c[2]||"0";f.browser=b;b=null})(jQuery,window);(function(f){var e;a:{try{e=parseInt(navigator.appVersion.match(/MSIE (\d\.\d)/)[1],10);break a}catch(a){}e=!1}e&&9>e&&(f(document).ready(function(){f("body").addClass("wk-ie wk-ie"+e)}),f.each("abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "),function(){document.createElement(this)}))})(jQuery);(function(f,e){e.$widgetkit.trans={__data:{},addDic:function(a){f.extend(this.__data,a)},add:function(a,d){this.__data[a]=d},get:function(a){if(!this.__data[a])return a;var d=1==arguments.length?[]:Array.prototype.slice.call(arguments,1);return this.printf(String(this.__data[a]),d)},printf:function(a,d){if(!d)return a;var b="",c=a.split("%s");if(1==c.length)return a;for(var g=0;g<d.length;g++)c[g].lastIndexOf("%")==c[g].length-1&&g!=d.length-1&&(c[g]+="s"+c.splice(g+1,1)[0]),b+=c[g]+d[g];return b+
c[c.length-1]}}})(jQuery,window);(function(f){f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(e,a,d,b,c){return f.easing[f.easing.def](e,a,d,b,c)},easeInQuad:function(e,a,d,b,c){return b*(a/=c)*a+d},easeOutQuad:function(e,a,d,b,c){return-b*(a/=c)*(a-2)+d},easeInOutQuad:function(e,a,d,b,c){return 1>(a/=c/2)?b/2*a*a+d:-b/2*(--a*(a-2)-1)+d},easeInCubic:function(e,a,d,b,c){return b*(a/=c)*a*a+d},easeOutCubic:function(e,a,d,b,c){return b*((a=a/c-1)*a*a+1)+d},easeInOutCubic:function(e,a,d,b,c){return 1>(a/=c/2)?b/2*a*a*a+d:b/2*((a-=2)*a*a+2)+d},easeInQuart:function(e,a,d,b,c){return b*(a/=c)*a*a*a+d},easeOutQuart:function(e,a,d,b,c){return-b*((a=a/c-1)*a*a*a-1)+d},easeInOutQuart:function(e,a,d,b,c){return 1>(a/=c/2)?b/2*a*a*a*a+d:-b/2*((a-=2)*a*a*a-2)+d},easeInQuint:function(e,a,d,b,c){return b*(a/=c)*a*a*a*a+d},easeOutQuint:function(e,a,d,b,c){return b*((a=a/c-1)*a*a*a*a+1)+d},easeInOutQuint:function(e,a,d,b,c){return 1>(a/=c/2)?b/2*a*a*a*a*a+d:b/2*((a-=2)*a*a*a*a+2)+d},easeInSine:function(e,a,d,b,c){return-b*Math.cos(a/c*(Math.PI/2))+b+d},easeOutSine:function(e,a,d,b,c){return b*Math.sin(a/c*(Math.PI/2))+d},easeInOutSine:function(e,a,d,b,c){return-b/2*(Math.cos(Math.PI*a/c)-1)+d},easeInExpo:function(e,a,d,b,c){return 0==a?d:b*Math.pow(2,10*(a/c-1))+d},easeOutExpo:function(e,a,d,b,c){return a==c?d+b:b*(-Math.pow(2,-10*a/c)+1)+d},easeInOutExpo:function(e,a,d,b,c){return 0==a?d:a==c?d+b:1>(a/=c/2)?b/2*Math.pow(2,10*(a-1))+d:b/2*(-Math.pow(2,-10*--a)+2)+d},easeInCirc:function(e,a,d,b,c){return-b*(Math.sqrt(1-(a/=c)*a)-1)+d},easeOutCirc:function(e,a,d,b,c){return b*Math.sqrt(1-(a=a/c-1)*a)+d},easeInOutCirc:function(e,a,d,b,c){return 1>(a/=c/2)?-b/2*(Math.sqrt(1-a*a)-1)+d:b/2*(Math.sqrt(1-(a-=2)*a)+1)+d},easeInElastic:function(e,a,d,b,c){e=1.70158;var g=0,f=b;if(0==a)return d;if(1==(a/=c))return d+b;g||(g=0.3*c);f<Math.abs(b)?(f=b,e=g/4):e=g/(2*Math.PI)*Math.asin(b/f);return-(f*Math.pow(2,10*(a-=1))*Math.sin((a*c-e)*2*Math.PI/g))+d},easeOutElastic:function(e,a,d,b,c){e=1.70158;var g=0,f=b;if(0==a)return d;if(1==(a/=c))return d+b;g||(g=0.3*c);f<Math.abs(b)?(f=b,e=g/4):e=g/(2*Math.PI)*Math.asin(b/f);return f*Math.pow(2,-10*a)*Math.sin((a*c-e)*2*Math.PI/g)+b+d},easeInOutElastic:function(e,a,d,b,c){e=1.70158;var g=0,f=b;if(0==a)return d;if(2==(a/=c/2))return d+b;g||(g=c*0.3*1.5);f<Math.abs(b)?(f=b,e=g/4):e=g/(2*Math.PI)*Math.asin(b/f);return 1>a?-0.5*f*Math.pow(2,10*(a-=1))*Math.sin((a*c-e)*2*Math.PI/g)+d:0.5*f*Math.pow(2,-10*(a-=1))*Math.sin((a*c-e)*2*Math.PI/g)+b+d},easeInBack:function(e,a,d,b,c,g){void 0==g&&(g=1.70158);return b*(a/=c)*a*((g+1)*a-g)+d},easeOutBack:function(e,a,d,b,c,g){void 0==g&&(g=1.70158);return b*((a=a/c-1)*a*((g+1)*a+g)+1)+d},easeInOutBack:function(e,a,d,b,c,g){void 0==g&&(g=1.70158);return 1>(a/=c/2)?b/2*a*a*(((g*=1.525)+1)*a-g)+d:b/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+d},easeInBounce:function(e,a,d,b,c){return b-f.easing.easeOutBounce(e,c-a,0,b,c)+d},easeOutBounce:function(e,a,d,b,c){return(a/=c)<1/2.75?b*7.5625*a*a+d:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+
d:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+d:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+d},easeInOutBounce:function(e,a,d,b,c){return a<c/2?0.5*f.easing.easeInBounce(e,2*a,0,b,c)+d:0.5*f.easing.easeOutBounce(e,2*a-c,0,b,c)+0.5*b+d}})})(jQuery);(function(f){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),g=0,e=0,h=0;a=f.event.fix(b);a.type="mousewheel";a.wheelDelta&&(g=a.wheelDelta/120);a.detail&&(g=-a.detail/3);h=g;void 0!==b.axis&&b.axis===b.HORIZONTAL_AXIS&&(h=0,e=-1*g);void 0!==b.wheelDeltaY&&(h=b.wheelDeltaY/120);void 0!==b.wheelDeltaX&&(e=-1*b.wheelDeltaX/120);c.unshift(a,g,e,h);return f.event.handle.apply(this,c)}var a=["DOMMouseScroll","mousewheel"];f.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var d=a.length;d;)this.addEventListener(a[--d],e,!1);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var d=a.length;d;)this.removeEventListener(a[--d],e,!1);else this.onmousewheel=null}};f.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);(function(f){var e=f.support;var a=document.createElement("INPUT");a.type="file";if(a="files"in a)a=new XMLHttpRequest,a=!(!a||!("upload"in a&&"onprogress"in a.upload))&&!!window.FormData;e.ajaxupload=a;f.support.ajaxupload&&f.event.props.push("dataTransfer");f.fn.uploadOnDrag=function(a){return!f.support.ajaxupload?this:this.each(function(){var b=f(this),c=f.extend({action:"",single:!1,method:"POST",params:{},loadstart:function(){},load:function(){},loadend:function(){},progress:function(){},complete:function(){},allcomplete:function(){},readystatechange:function(){}},a);b.on("drop",function(a){function b(a,c){for(var d=new FormData,e=new XMLHttpRequest,g=0,h;h=a[g];g++)d.append("files[]",h);for(var m in c.params)d.append(m,c.params[m]);e.upload.addEventListener("progress",function(a){c.progress(100*(a.loaded/a.total),a)},!1);e.addEventListener("loadstart",function(a){c.loadstart(a)},!1);e.addEventListener("load",function(a){c.load(a)},!1);e.addEventListener("loadend",function(a){c.loadend(a)},!1);e.addEventListener("error",function(a){c.error(a)},!1);e.addEventListener("abort",function(a){c.abort(a)},!1);e.open(c.method,c.action,!0);e.onreadystatechange=function(){c.readystatechange(e);if(4==e.readyState){var a=e.responseText;if("json"==c.type)try{a=f.parseJSON(a)}catch(b){a=!1}c.complete(a,e)}};e.send(d)}a.stopPropagation();a.preventDefault();var d=a.dataTransfer.files;if(c.single){var e=a.dataTransfer.files.length,g=0,j=c.complete;c.complete=function(a,f){g+=1;j(a,f);g<e?b([d[g]],c):c.allcomplete()};b([d[0]],c)}else b(d,c)}).on("dragover",function(a){a.stopPropagation();a.preventDefault()})})};f.fn.ajaxform=function(a){return!f.support.ajaxupload?this:this.each(function(){var b=f(this),c=f.extend({action:b.attr("action"),method:b.attr("method"),loadstart:function(){},load:function(){},loadend:function(){},progress:function(){},complete:function(){},readystatechange:function(){}},a);b.on("submit",function(a){a.preventDefault();a=new FormData(this);var b=new XMLHttpRequest;a.append("formdata","1");b.upload.addEventListener("progress",function(a){c.progress(100*(a.loaded/a.total),a)},!1);b.addEventListener("loadstart",function(a){c.loadstart(a)},!1);b.addEventListener("load",function(a){c.load(a)},!1);b.addEventListener("loadend",function(a){c.loadend(a)},!1);b.addEventListener("error",function(a){c.error(a)},!1);b.addEventListener("abort",function(a){c.abort(a)},!1);b.open(c.method,c.action,!0);b.onreadystatechange=function(){c.readystatechange(b);if(4==b.readyState){var a=b.responseText;if("json"==c.type)try{a=f.parseJSON(a)}catch(d){a=!1}c.complete(a,b)}};b.send(a)})})};if(!f.event.special.debouncedresize){var d=f.event,b,c;b=d.special.debouncedresize={setup:function(){f(this).on("resize",b.handler)},teardown:function(){f(this).off("resize",b.handler)},handler:function(a,e){var f=this,k=arguments,l=function(){a.type="debouncedresize";d.dispatch.apply(f,k)};c&&clearTimeout(c);e?l():c=setTimeout(l,b.threshold)},threshold:150}}})(jQuery);
(function(b,f,g){function d(h){e.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(j,m);l=42==e.offsetWidth;a.removeChild(j);return l}function k(h){var a=d(h.media);if(h._listeners&&h.matches!=a){h.matches=a;for(var a=0,c=h._listeners.length;a<c;a++)h._listeners[a](h)}}function c(a,c,d){var b;return function(){var f=this,g=arguments,e=d&&!b;clearTimeout(b);b=setTimeout(function(){b=null;d||a.apply(f,g)},c);e&&a.apply(f,g)}}if(!f.matchMedia||b.userAgent.match(/(iPhone|iPod|iPad)/i)){var l,a=g.documentElement,m=a.firstElementChild||a.firstChild,j=g.createElement("body"),e=g.createElement("div");e.id="mq-test-1";e.style.cssText="position:absolute;top:-100em";j.style.background="none";j.appendChild(e);f.matchMedia=function(a){var b,e=[];b={matches:d(a),media:a,_listeners:e,addListener:function(a){"function"===typeof a&&e.push(a)},removeListener:function(a){for(var b=0,c=e.length;b<c;b++)e[b]===a&&delete e[b]}};f.addEventListener&&f.addEventListener("resize",c(function(){k(b)},150),!1);g.addEventListener&&g.addEventListener("orientationchange",function(){k(b)},!1);return b}}})(navigator,window,document);(function(b,f,g){if(!b.onMediaQuery){var d={},k=f.matchMedia&&f.matchMedia("only all").matches;b(g).ready(function(){for(var c in d)b(d[c]).trigger("init"),d[c].matches&&b(d[c]).trigger("valid")});b(f).bind("load",function(){for(var c in d)d[c].matches&&b(d[c]).trigger("valid")});b.onMediaQuery=function(c,g){var a=c&&d[c];a||(a=d[c]=f.matchMedia(c),a.supported=k,a.addListener(function(){b(a).trigger(a.matches?"valid":"invalid")}));b(a).bind(g);return a}}})(jQuery,window,document);
jQuery(function(a){a("#tabs").tabs().prev().append('<li class="version">'+a("#tabs").data("wkversion")+"</li>");a("#widgetkit").delegate(".box .deletable","click",function(){a(this).parent().trigger("delete",[a(this)])});a("input:text").placeholder()});jQuery("body").bind("afterPreWpautop",function(a,b){b.data=b.unfiltered.replace(/caption\]\[caption/g,"caption] [caption").replace(/<object[\s\S]+?<\/object>/g,function(a){return a.replace(/[\r\n]+/g," ")})}).bind("afterWpautop",function(a,b){b.data=b.unfiltered});(function(a){var b={get:function(a){return window.sessionStorage?sessionStorage.getItem(a):null},set:function(a,b){window.sessionStorage&&sessionStorage.setItem(a,b)}};a.fn.tabs=function(){return this.each(function(){var g=a(this).addClass("content").wrap('<div class="tabs-box" />').before('<ul class="nav" />'),e=a(this).prev("ul.nav");g.children("li").each(function(){e.append("<li><a>"+a(this).hide().attr("data-name")+"</a></li>")});e.children("li").bind("click",function(c){c.preventDefault();var c=a("li",e).removeClass("active").index(a(this).addClass("active").get(0)),h=g.children("li").hide();a(h[c]).show();b.set("widgetkit-tab",c)});var f=parseInt(b.get("widgetkit-tab"));a(!isNaN(f)?e.children("li").get(f):e.children("li:first")).trigger("click")})}})(jQuery);(function(a){var b=function(){};a.extend(b.prototype,{name:"finder",initialize:function(b,e){function f(h){h.preventDefault();var d=a(this).closest("li",b);d.length||(d=b);d.hasClass(c.options.open)?d.removeClass(c.options.open).children("ul").slideUp():(d.addClass(c.options.loading),a.post(c.options.url,{path:d.data("path")},function(b){d.removeClass(c.options.loading).addClass(c.options.open);b.length&&(d.children().remove("ul"),d.append("<ul>").children("ul").hide(),a.each(b,function(b,c){d.children("ul").append(a('<li><a href="#">'+
c.name+"</a></li>").addClass(c.type).data("path",c.path))}),d.find("ul a").bind("click",f),d.children("ul").slideDown())},"json"))}var c=this;this.options=a.extend({url:"",path:"",open:"open",loading:"loading"},e);b.data("path",this.options.path).bind("retrieve:finder",f).trigger("retrieve:finder")}});a.fn[b.prototype.name]=function(){var g=arguments,e=g[0]?g[0]:null;return this.each(function(){var f=a(this);if(b.prototype[e]&&f.data(b.prototype.name)&&"initialize"!=e)f.data(b.prototype.name)[e].apply(f.data(b.prototype.name),Array.prototype.slice.call(g,1));else if(!e||a.isPlainObject(e)){var c=new b;b.prototype.initialize&&c.initialize.apply(c,a.merge([f],g));f.data(b.prototype.name,c)}else a.error("Method "+e+" does not exist on jQuery."+b.name)})}})(jQuery);(function(a){function b(b){var d={},c=/^jQuery\d+$/;a.each(b.attributes,function(a,b){b.specified&&!c.test(b.name)&&(d[b.name]=b.value)});return d}function g(){var b=a(this);b.val()===b.attr("placeholder")&&b.hasClass("placeholder")&&(b.data("placeholder-password")?b.hide().next().show().focus():b.val("").removeClass("placeholder"))}function e(){var c,d=a(this);if(""===d.val()||d.val()===d.attr("placeholder")){if(d.is(":password")){if(!d.data("placeholder-textinput")){try{c=d.clone().attr({type:"text"})}catch(e){c=a("<input>").attr(a.extend(b(d[0]),{type:"text"}))}c.removeAttr("name").data("placeholder-password",!0).bind("focus.placeholder",g);d.data("placeholder-textinput",c).before(c)}d=d.hide().prev().show()}d.addClass("placeholder").val(d.attr("placeholder"))}else d.removeClass("placeholder")}var f="placeholder"in document.createElement("input"),c="placeholder"in document.createElement("textarea");a.fn.placeholder=f&&c?function(){return this}:function(){return this.filter((f?"textarea":":input")+"[placeholder]").bind("focus.placeholder",g).bind("blur.placeholder",e).trigger("blur.placeholder").end()};a(function(){a("form").bind("submit.placeholder",function(){var b=a(".placeholder",this).each(g);setTimeout(function(){b.each(e)},10)})});a(window).bind("unload.placeholder",function(){a(".placeholder").val("")})})(jQuery);(function(a){var b=a(window),g=a(document),e=!1,f=!1,c=null,h=null;a.modalwin=function(d){e&&a.modalwin.close();"object"===typeof d?(d=a(d),d.parent().length&&(this.persist=d,this.persist.data("modal-persist-parent",d.parent()))):d="string"===typeof d||"number"===typeof d?a("<div></div>").html(d):a("<div></div>").html("Modalwin Error: Unsupported data type: "+typeof d);c=a('<div class="modalwin"><div class="inner"></div><div class="btnclose"></div>');c.find(".inner:first").append(d);c.css({position:"fixed","z-index":101}).find(".btnclose").click(a.modalwin.close);h=a('<div class="modal-overlay"></div>').css({position:"absolute",left:0,top:0,width:g.width(),height:g.height(),"z-index":100}).bind("click",a.modalwin.close);a("body").append(h).append(c.hide());c.show().css({left:b.width()/2-c.width()/2,top:b.height()/2-c.height()/2}).fadeIn();e=!0};a.modalwin.close=function(){e&&(f&&(f.appendTo(this.persist.data("modal-persist-parent")),f=!1),c.remove(),h.remove(),h=c=null,e=!1)};b.bind("resize",function(){e&&(c.css({left:b.width()/2-c.width()/2,top:b.height()/2-c.height()/2}),h.css({width:g.width(),height:g.height()}))})})(jQuery);
var widgetkitajax="http://wordpress.local/wp-admin/admin-ajax.php?action=widgetkit&ajax=1";
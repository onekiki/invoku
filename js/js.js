//timeago
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(){var e=a(this),o=r.settings;return isNaN(e.datetime)||(0==o.cutoff||Math.abs(n(e.datetime))<o.cutoff)&&t(this).text(i(e.datetime)),this}function a(e){if(e=t(e),!e.data("timeago")){e.data("timeago",{datetime:r.datetime(e)});var a=t.trim(e.text());r.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(a.length>0)||r.isTime(e)&&e.attr("title")||e.attr("title",a)}return e.data("timeago")}function i(t){return r.inWords(n(t))}function n(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return i(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var r=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(e){function a(a,n){var r=t.isFunction(a)?a(n,e):a,o=i.numbers&&i.numbers[n]||n;return r.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var i=this.settings.strings,n=i.prefixAgo,r=i.suffixAgo;if(this.settings.allowFuture&&0>e&&(n=i.prefixFromNow,r=i.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var o=Math.abs(e)/1e3,s=o/60,u=s/60,m=u/24,l=m/365,d=45>o&&a(i.seconds,Math.round(o))||90>o&&a(i.minute,1)||45>s&&a(i.minutes,Math.round(s))||90>s&&a(i.hour,1)||24>u&&a(i.hours,Math.round(u))||42>u&&a(i.day,1)||30>m&&a(i.days,Math.round(m))||45>m&&a(i.month,1)||365>m&&a(i.months,Math.round(m/30))||1.5>l&&a(i.year,1)||a(i.years,Math.round(l)),f=i.wordSeparator||"";return void 0===i.wordSeparator&&(f=" "),t.trim([n,d,r].join(f))},parse:function(e){var a=t.trim(e);return a=a.replace(/\.\d+/,""),a=a.replace(/-/,"/").replace(/-/,"/"),a=a.replace(/T/," ").replace(/Z/," UTC"),a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),a=a.replace(/([\+\-]\d\d)$/," $100"),new Date(a)},datetime:function(e){var a=t(e).attr(r.isTime(e)?"datetime":"title");return r.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var o={init:function(){var a=t.proxy(e,this);a();var i=r.settings;i.refreshMillis>0&&(this._timeagoInterval=setInterval(a,i.refreshMillis))},update:function(a){var i=r.parse(a);t(this).data("timeago",{datetime:i}),r.settings.localeTitle&&t(this).attr("title",i.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:r.parse(t(this).attr(r.isTime(this)?"datetime":"title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var a=t?o[t]:o.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")});
function makeSlider(a) {
    var c = {
        url: "http://www.qq-how.blogspot.com",
        numPost: 5,
        newTabLink: false,
        labelName: null,
        showDetail: true,
        summaryLength: 0,
        titleLength: "auto",
        showThumb: true,
        thumbWidth: 600,
        squareThumb: true,
        noThumb: "http://3.bp.blogspot.com/-vpCFysMEZys/UOEhSGjkfnI/AAAAAAAAFwY/h1wuA5kfEhg/s72-c/grey.png",
        showNav: true,
        navText: {
            prev: "&lt;",
            next: "&gt;"
        },
        containerId: "slider-rotator",
        interval: 6000,
        speed: 1000,
        hoverPause: true,
        crossFade: false,
        autoHeight: false,
        autoSlide: true,
        onInit: function() {},
        onHide: function(d) {},
        onShow: function(d) {}
    };
    for (var b in c) {
        c[b] = (typeof(a[b]) !== "undefined") ? a[b] : c[b]
    }
    $.get(c.url + "/feeds/posts/summary/" + (c.labelName === null ? "" : "-/" + c.labelName.replace(/\,(\s+)?/g, "/")) + "?alt=json-in-script&max-results=" + c.numPost, {}, function(s) {
        if (s.feed.entry !== undefined) {
            var r = s.feed.entry,
                q, p, e, o, h = "",
                d = "";
            for (var m = 0, n = r.length; m < n; m++) {
                if (m == r.length) {
                    break
                }
                q = r[m].title.$t;
                e = ("media$thumbnail" in r[m]) ? '<img alt="' + q + '" src="' + r[m].media$thumbnail.url.replace(/\/s72\-c/, "/s" + c.thumbWidth + (c.squareThumb ? "-c" : "")) + '" style="width:' + c.thumbWidth + "px;height:" + (c.squareThumb ? c.thumbWidth + "px" : "auto") + '">' : '<img src="' + c.noThumb + '" style="width:' + c.thumbWidth + "px;height:" + (c.squareThumb ? c.thumbWidth + "px" : "auto") + '">';
                o = ("summary" in r[m] && c.summaryLength > 0) ? r[m].summary.$t.replace(/<br ?\/?>/ig, " ").replace(/<(.*?)>/g, "").replace(/[<>]/g, "") : "";
                o = (c.summaryLength < o.length) ? o.substring(0, c.summaryLength) + "&hellip;" : o;
                for (var l = 0, f = r[m].link.length; l < f; l++) {
                    p = (r[m].link[l].rel == "alternate") ? r[m].link[l].href : "#"
                }
                h += '<div class="slider-item">';
                h += (c.showThumb && c.showDetail) ? '<div class="image-wrapper">' + e + "</div>" : (c.showThumb && !c.showDetail) ? '<div class="image-wrapper"><a href="' + p + '" title="' + q + '"' + (c.newTabLink ? ' target="_blank"' : "") + ">" + e + "</a></div>" : "";
                h += (c.showDetail) ? '<div class="detail-wrapper"><h4><a title="' + q + '" href="' + p + '"' + (c.newTabLink ? ' target="_blank"' : "") + ">" + ((c.titleLength == "auto") ? q : q.substring(0, c.titleLength) + (q.length > c.titleLength ? "&hellip;" : "")) + "</a></h4><p>" + o + "</p></div>" : "";
                h += "</div>";
                $("#" + c.containerId).css({
                    width: (c.showThumb) ? c.thumbWidth + "px" : $("#" + c.containerId).css("width"),
                    height: (!c.showDetail && c.squareThumb) ? c.thumbWidth + "px" : $("#" + c.containerId).css("height")
                })
            }
            d = '<div class="slider-rotator-nav"' + (c.showNav === false ? ' style="display:none;"' : "") + ">";
            d += (c.showNav === true || c.showNav == "next/prev") ? '<span class="rotator-advancer"><a href="#prev">' + c.navText.prev + "</a></span>" : "";
            if (c.showNav === true || c.showNav == "number") {
                d += '<span class="rotator-num">';
                for (var g = 0; g < c.numPost; g++) {
                    d += '<a href="#slide-' + g + '" class="' + (g === 0 ? "current" : "") + '">' + (g + 1) + "</a>"
                }
                d += "</span>"
            }
            d += (c.showNav === true || c.showNav == "next/prev") ? '<span class="rotator-advancer"><a href="#next">' + c.navText.next + "</a></span>" : "";
            d += "</div>";
            $("#" + c.containerId).html(h).after(d);
            c.onInit();
            $("#" + c.containerId).removeClass("loading").customRotator({
                interval: c.interval,
                speed: c.speed,
                autoHeight: c.autoHeight,
                hoverPause: c.hoverPause,
                crossFade: c.crossFade,
                autoSlide: c.autoSlide,
                hide: function(i) {
                    c.onHide(i)
                },
                show: function(i) {
                    c.onShow(i)
                }
            })
        } else {
            $("#" + c.containerId).removeClass("loading").css({
                width: "auto",
                height: "auto"
            }).html("Error or not found!")
        }
    }, "jsonp")
};

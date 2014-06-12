/*FeedEk jQuery RSS/ATOM Feed Plugin v2.0
 * http://jquery-plugins.net/FeedEk/FeedEk.html
 * https://github.com/enginkizil/FeedEk
 * Author : Engin KIZIL http://www.enginkizil.com */
(function ($) {
	$.fn.FeedEk = function (opt) {
        var def = $.extend({
            FeedUrl: "http://rss.cnn.com/rss/edition.rss",
            MaxCount: 5,
            ShowDesc: true,
            ShowPubDate: true,
            CharacterLimit: 0,
            TitleLinkTarget: "_blank",
            DateFormat: "",
            DateFormatLang: "en"
        }, opt);
        var id = $(this).attr("id"),
            i, s = "",
            dt,dtp;
        $("#" + id).empty().append('<img src="../plugins/FeedEk/js/image/loader.gif" />');
        $.ajax({
            url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + def.MaxCount + "&output=json&q=" + encodeURIComponent(def.FeedUrl) + "&hl=en&callback=?",
            dataType: "json",
            success: function (data) {
                $("#" + id).empty();
				alert(JSON.stringify(data));
				$("#titleRss").text(data.responseData.feed.title);
				
				var cont=0;
                $.each(data.responseData.feed.entries, function (e, item) {					
                    if (def.ShowPubDate) {
                        dt = new Date(item.publishedDate);
                        if ($.trim(def.DateFormat).length > 0) {
                            try {
                                moment.lang(def.DateFormatLang);
                                dtp =  moment(dt).format(def.DateFormat);
                            } catch (e) {
                                dtp = dt.toLocaleDateString();
                            }
                        } else {
                            dtp = dt.toLocaleDateString();
                        }
                    }
					s += '<article class="articulo"><figure class="icono_art icon-icono_articulo3"></figure><a href="../plugins/FeedEk/js/rss_detail.html?name_r='+item.title+'" class="titulo_articulo" id="'+cont+'" title="'+item.title+'">'+item.title+' ('+ dtp +')</a>';
					if (def.ShowDesc) {
						 s += '<p class="contenido">' + item.contentSnippet + '</p>'
                    }
					s+= '</article>';					
					
/*					s += '<li><div class="itemTitle"><a href="../plugins/FeedEk/js/' + item.link + '" target="' + def.TitleLinkTarget + '" >' + item.title + "</a></div>";*/					
															
                });
                $("#" + id).append('<ul class="feedEkList">' + s + "</ul>")
            }
        })
    }	
})(jQuery);
var size = 14;
var toNight = 1;
var tab = 0;
var d = store.get('collectText');
var app = new Vue({
    el: '#app',
    data: {
        text: d.length!=0 ? d : [{text:'您还没有相关收藏文本，快去收藏吧！'}],
    },
    methods: {
        del: function (x) {
            for (var i = 0; i < d.length; i++) {
                if (d[i]['num'] == x) {
                    d.splice(i, 1);
                    toastShow('toast','删除成功')
                }
            }
            store.set('collectText', d);
        },
        fullScreen: function (x) {
            if (x == 2222) {
                size += 3;
                if (size == 41) {
                    size = 14;
                }
                $("textarea").css("font-size", size);
                return;
            } else if (x == 4444) {
                $("textarea").css("font-size", 14);
                $('#content,#topSpan').hide();
                $('.box,nav').show();
                return;
            } else if (x == 3333) {
                x = tab + 1;
                if (x == 3) {
                    x = 0
                }
                $("#content").val(($("textarea:eq(" + x + ")").val()));
                tab = x;
                return;
            }
            $('nav,.box').hide();
            var t = Math.round($(window).height() / 25);
            $("#content").attr("rows", t);
            for (var i = 0; i < d.length; i++) {
                if (d[i]['num'] == x) {
                    $('#content').val(d[i]['text']);
                }
            }
            $('#topSpan,#content').show();
        }
    }
});
function night() {
    if (toNight) {
        $('nav').addClass('navbar-inverse');
        $("body,textarea").css({
            "color": "#999db6",
            "background-color": "#1e1e2a"
        });
        toNight = false;
    } else {
        $('nav').removeClass('navbar-inverse');
        $("body").css({
            "color": "#333",
            "background-color": "#ffffff"
        });
        $("textarea").css({
            "color": "#555",
            "background-color": "#ffffff"
        });
        toNight = true;
    }
    if (window.innerWidth <= 768) {
        $('.navbar-toggle').click();
    }
}
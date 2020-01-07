// About
$(function() {
    //游標移入
    $("#mice1").hover(function() {
            //建立圖說內容
            $(this).append("<div><p>" + $(this).children("img").attr("alt") + "</p></div>");
            //淡入
            $(this).children("div").stop().fadeIn(300);
            //進入
            $(this).children("div").children("p").stop().animate({ "top": 0 }, 300);
        },
        function() {
            //淡出
            $(this).children("div").stop().fadeOut(300);
            //離開
            $(this).children("div").children("p").stop().animate({ "top": "10px" }, 300, function() {
                $(this).parent("div").remove();
            });
        });
});
$(function() {
    //游標移入
    $("#mice2").hover(function() {
            //建立圖說內容
            $(this).append("<div><p>" + $(this).children("img").attr("alt") + "</p></div>");
            //淡入
            $(this).children("div").stop().fadeIn(300);
            //進入
            $(this).children("div").children("p").stop().animate({ "top": 0 }, 300);
        },
        function() {
            //淡出
            $(this).children("div").stop().fadeOut(300);
            //離開
            $(this).children("div").children("p").stop().animate({ "top": "10px" }, 300, function() {
                $(this).parent("div").remove();
            });
        });
});
$(function() {
    //游標移入
    $("#mice3").hover(function() {
            //建立圖說內容
            $(this).append("<div><p>" + $(this).children("img").attr("alt") + "</p></div>");
            //淡入
            $(this).children("div").stop().fadeIn(300);
            //進入
            $(this).children("div").children("p").stop().animate({ "top": 0 }, 300);
        },
        function() {
            //淡出
            $(this).children("div").stop().fadeOut(300);
            //離開
            $(this).children("div").children("p").stop().animate({ "top": "10px" }, 300, function() {
                $(this).parent("div").remove();
            });
        });
});
$(function() {
    //游標移入
    $("#mice4").hover(function() {
            //建立圖說內容
            $(this).append("<div><p>" + $(this).children("img").attr("alt") + "</p></div>");
            //淡入
            $(this).children("div").stop().fadeIn(300);
            //進入
            $(this).children("div").children("p").stop().animate({ "top": 0 }, 300);
        },
        function() {
            //淡出
            $(this).children("div").stop().fadeOut(300);
            //離開
            $(this).children("div").children("p").stop().animate({ "top": "10px" }, 300, function() {
                $(this).parent("div").remove();
            });
        });
});
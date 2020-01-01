// 顯示與隱藏說明訊息框
$(function() {
    $("#bg").hide();
    $("#click").click(function() {
        $("#bg").fadeIn(300);
    });
    $("#ok").click(function() {
        $("#bg").fadeOut(300);
    });
});
// 按鈕控制移動
// right
$(document).ready(function() {
    $("#br").click(function() {
        $("#hamster").attr("src", "./image/面右小倉鼠.png");
        $("#hamster").animate({ left: '+=100px' });
    });
});
// down
$(document).ready(function() {
    $("#bd").click(function() {
        $("#hamster").attr("src", "./image/一團小倉鼠.png");
        $("#hamster").animate({ top: '+=100px' });
    });
});
// up
$(document).ready(function() {
    $("#bu").click(function() {
        $("#hamster").attr("src", "./image/一團小倉鼠.png");
        $("#hamster").animate({ top: '-=100px' });
    });
});
// left
$(document).ready(function() {
    $("#bl").click(function() {
        $("#hamster").attr("src", "./image/面左小倉鼠.png");
        $("#hamster").animate({ left: '-=100px' });
    });

});
//方向鍵控制移動
var hamster = $('.hamster');
$(window).keydown(function(e) {
    var k = e.which;
    // left
    if (k === 37) {
        $("#hamster").attr("src", "./image/面左小倉鼠.png");
        $("#hamster").animate({ left: '-=100px' });
    }
    // up
    else if (k === 38) {
        $("#hamster").attr("src", "./image/一團小倉鼠.png");
        $("#hamster").animate({ top: '-=100px' });
    }
    // right
    else if (k === 39) {
        $("#hamster").attr("src", "./image/面右小倉鼠.png");
        $("#hamster").animate({ left: '+=100px' });
    }
    // down
    else if (k === 40) {
        $("#hamster").attr("src", "./image/一團小倉鼠.png");
        $("#hamster").animate({ top: '+=100px' });
    }
});

// 餵食
$(function() {
    $("#feed").click(function() {
        $("#hamster").attr("src", "./image/胖大小倉鼠.png");
    });
});
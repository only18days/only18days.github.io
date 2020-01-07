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

// 點擊小倉鼠
$(function() {
    $("#murmur").hide();
    $("#hamster").click(function() {
        $("#murmur").fadeIn(300);
    });
    $("#oh").click(function() {
        $("#murmur").fadeOut(300);
    });
});


// Game
$(function() {
    $("#seed").click(function() {
        var number = Math.floor(Math.random() * 10);
        var answer = parseInt(window.prompt('猜猜小倉鼠的臉頰藏了多少顆葵花籽！請輸入0~10的數字：'))
        var message;
        if (answer === number) {
            message = '恭喜猜對囉！';
        } else if (answer < number) {
            message = '猜錯了！再更多一點！';
        } else if (answer > number) {
            message = '猜錯了！再更少一點！';
        } else {
            message = '請輸入0~10的數字哦>_< 重來一遍吧';
        }
        window.alert(message);

    });
});
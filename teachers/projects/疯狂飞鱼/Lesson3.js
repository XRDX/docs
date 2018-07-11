//1.随机数函数的使用
//2.加速移动效果的实现
//3.鼠标点击事件的使用
canvas.resize(350, 500);
var sky = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Sky.png", 0, 0, 1200, 500);
var land = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Land.png", 0, 400, 1200, 160);
var spike1 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Spike.png", 300, 0, 65, 150);
var spike2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Spike.png", 300, 325, 65, 150);
var player = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Player.png", 50, 200, 60, 60);
var txt = new Text();
var sky2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Sky.png", 0, 0, 1200, 500);
var land2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Land.png", 0, 400, 1200, 160);
var moveY = 0;
function Main() {
    canvas.clear();
    sky.x = sky.x - 5;
    land.x = land.x - 5;
    spike2.x = spike2.x - 5;
    sky2.x = sky.x + sky.width;
    land2.x = land.x + land.width;
    if (sky.x < -sky.width) {
        sky.x = 0;
    }
    if (land.x < -land.width) {
        land.x = 0;
    }
    if (spike2.x < -spike2.width) {
	    spike2.x = 350;
	    spike2.y = 190 + Math.random() * 150;
    }
    spike1.x = spike2.x;
    spike1.y = spike2.y - 300;
    player.y = player.y + moveY;
    moveY = moveY + 0.3;
    sky.draw();
    sky2.draw();
    spike1.draw();
    spike2.draw();
    land.draw();
    land2.draw();
    player.draw();
    txt.src = "得分：";
    txt.fillStyle = "red";
    txt.size = 30;
    txt.y = 0;
    txt.x = 0;
    txt.draw();
}
Mouse.click = function() {
    moveY = -5;
}
setInterval(Main, 20);
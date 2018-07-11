//1.使用setInterval函数完成动画效果
//2.简单if语句的使用
//3.图片循环拼接原理
canvas.resize(350, 500);
var sky = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Sky.png", 0, 0, 1200, 500);
var land = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Land.png", 0, 400, 1200, 160);
var spike1 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Spike.png", 300, 0, 65, 150);
var spike2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Spike.png", 300, 325, 65, 150);
var player = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Player.png", 50, 200, 60, 60);
var txt = new Text();
var sky2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Sky.png", 0, 0, 1200, 500);
var land2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Land.png", 0, 400, 1200, 160);
function Main() {
    canvas.clear();
    sky.x = sky.x - 5;
    land.x = land.x - 5;
    sky2.x = sky.x + sky.width;
    land2.x = land.x + land.width;
    if (sky.x < -sky.width) {
        sky.x = 0;
    }
    if (land.x < -land.width) {
        land.x = 0;
    }
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
setInterval(Main, 20);
//1.文字对象的使用
//2.图片对象的使用
//3.函数的定义
canvas.resize(350, 500);
var sky = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Sky.png", 0, 0, 1200, 500);
var land = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Land.png", 0, 400, 1200, 160);
var spike1 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Spike.png", 300, 0, 65, 150);
var spike2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Spike.png", 300, 325, 65, 150);
var player = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Player.png", 50, 200, 60, 60);
var txt = new Text();
var sky2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Sky.png", 0, 0, 1200, 500);
var land2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Land.png", 0, 400, 1200, 160);
var startBG = new Sprite("https://rss.leaplearner.com/Image/Bgs/bg_loading_1.png", 0, 0, 350, 500);
var title = new Text("疯狂飞鱼", 90, 80, 40);
var author = new Text("LeapLearner制作", 110, 150, 15);
var startBtn = new Sprite("https://rss.leaplearner.com/teachfiles/Media/startBtn.png", 125, 300, 100, 100);
var overBG = new Sprite("https://rss.leaplearner.com/Image/Bgs/background.png", 0, 0, 350, 500);
var retryBtn = new Sprite("https://rss.leaplearner.com/teachfiles/Media/retryBtn.png", 125, 300, 100, 100);
var finalScore = new Text();
var moveY = 0;
var score = 0;
var gameState = 0;
title.fillStyle = "gold";
author.fillStyle = "green";
finalScore.x = 70;
finalScore.y = 140;
finalScore.size = 30;
finalScore.fillStyle = "gold";
function Loop() {
    if (gameState == 0) {
        Start();
    }
    if (gameState == 1) {
        Main();
    }
    if (gameState == 2) {
        Over();
    }
}
function Start() {
    canvas.clear();
    startBG.draw();
    title.draw();
    author.draw();
    startBtn.draw();
}
function Over() {
    canvas.clear();
    overBG.draw();
    finalScore.src = "你的得分是" + score + "分";
    finalScore.draw();
    retryBtn.draw();
}
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
	    score = score + 1;
    }
    spike1.x = spike2.x;
    spike1.y = spike2.y - 300;
    player.y = player.y + moveY;
    moveY = moveY + 0.3;
    if (player.collide(spike1) || player.collide(spike2) || (player.y + player.height) > land.y || player.y < 0) {
        gameState = 2;
    } 
    sky.draw();
    sky2.draw();
    spike1.draw();
    spike2.draw();
    land.draw();
    land2.draw();
    player.draw();
    txt.src = "得分：" + score;
    txt.fillStyle = "red";
    txt.size = 30;
    txt.y = 0;
    txt.x = 0;
    txt.draw();
}
Mouse.click = function() {
    moveY = -5;
}
startBtn.click = function() {
    score = 0;
    player.y = 200;
    spike1.x = 300;
    spike2.x = 300;
    moveY = 0;
    gameState = 1;
}
retryBtn.click = function() {
    gameState = 0;
}
setInterval(Loop, 20);
//知识点：
//1.文字对象的使用
//2.if语句的使用
//3.if else语句的使用
//*4.音频对象的使用
canvas.resize(350, 500);
var blocks = [
    new Rectangle(25, 450, 300, 50), 
    new Rectangle(35, 400, 280, 50),
    new Rectangle(50, 350, 250, 50),
    new Rectangle(50, 0, 250, 50)
    ];
var xspeed = 3;
var yspeed = 0;
var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/qhcb_background_002.png", 0, 0, 350, 500);
var cloud1 = new Sprite("https://rss.leaplearner.com/Image/Bgs/cloud_3.png", 0, 0, 350, 500);
var cloud2 = new Sprite("https://rss.leaplearner.com/Image/Bgs/cloud_2.png", 0, -500, 350, 500);
var score = 0;
var sTxt = new Text("", 130, 160);
var overTxt = new Text("游戏结束，点击重新开始", 65, 200);
var bgm = new Audio("https://rss.leaplearner.com/BGM/Fishrun/bgm02.mp3");
var clickSound = new Audio("https://rss.leaplearner.com/Audio/Fish/Btn_return.mp3");
var scoreSound = new Audio("https://rss.leaplearner.com/Audio/BallGame/BonusTime.mp3");
blocks[0].fillStyle = HSL(Math.random() * 360, 1, 0.5);
blocks[1].fillStyle = HSL(Math.random() * 360, 1, 0.5);
blocks[2].fillStyle = HSL(Math.random() * 360, 1, 0.5);
blocks[3].fillStyle = HSL(Math.random() * 360, 1, 0.5);
blocks[0].strokeStyle = "black";
blocks[1].strokeStyle = "black";
blocks[2].strokeStyle = "black";
blocks[3].strokeStyle = "black";
bgm.loop = true;
clickSound.loop = false;
scoreSound.loop = false;
bgm.play();
function Loop() {
    blocks[3].x = blocks[3].x + xspeed;
    if (blocks[3].x > 350) {
        blocks[3].x = -blocks[3].width;
    }
    if (blocks[3].collide(blocks[2])) {
        blocks[2].y = blocks[2].y + yspeed;
        blocks[1].y = blocks[1].y + yspeed;
        blocks[0].y = blocks[0].y + yspeed;
        cloud1.y = cloud1.y + yspeed;
        cloud2.y = cloud2.y + yspeed;
    }
    if (cloud1.y > 500) {
        cloud1.y = -500;
    }
    if (cloud2.y > 500) {
        cloud2.y = -500;
    }
    blocks[3].y = blocks[3].y + yspeed;
    if (blocks[0].y >= 500) {
        blocks.splice(0, 1);
        blocks.push(new Rectangle(0, 0, 250 - score * 3, 50));
        if (blocks[3].width < 50) {
            blocks[3].width = 50;
        }
        blocks[3].fillStyle = HSL(Math.random() * 360, 1, 0.5);
        blocks[3].strokeStyle = "black";
        xspeed = 3 + score * 0.3;
        yspeed = 0;
        score = score + 1;
        scoreSound.currentTime = 0;
        scoreSound.play();
    }
    canvas.clear();
    sTxt.src = "得分：" + score;
    bg.draw();
    blocks[3].draw();
    blocks[2].draw();
    blocks[1].draw();
    blocks[0].draw();
    cloud1.draw();
    cloud2.draw();
    sTxt.draw();
    if (blocks[3].y > 500) {
        overTxt.draw();
    }
}
setInterval(Loop, 20);
Mouse.click = function() {
    if (blocks[3].y > 500) {
        blocks = [
            new Rectangle(25, 450, 300, 50), 
            new Rectangle(35, 400, 280, 50),
            new Rectangle(50, 350, 250, 50),
            new Rectangle(50, 0, 250, 50)
            ];
        blocks[0].fillStyle = HSL(Math.random() * 360, 1, 0.5);
        blocks[1].fillStyle = HSL(Math.random() * 360, 1, 0.5);
        blocks[2].fillStyle = HSL(Math.random() * 360, 1, 0.5);
        blocks[3].fillStyle = HSL(Math.random() * 360, 1, 0.5);
        blocks[0].strokeStyle = "black";
        blocks[1].strokeStyle = "black";
        blocks[2].strokeStyle = "black";
        blocks[3].strokeStyle = "black";
        score = 0;
        xspeed = 3;
        yspeed = 0;
    }
    else {
        xspeed = 0;
        yspeed = 5; 
        clickSound.currentTime = 0;
        clickSound.play();
    }
};
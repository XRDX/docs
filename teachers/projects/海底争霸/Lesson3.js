//1.复习碰撞检测函数的概念
//2.使用碰撞检测函数完成碰撞效果
canvas.resize(800, 400);
var pX = 0;
var pY = 200;
var pW = 40;
var pH = 30;
var pImg = "https://rss.leaplearner.com/teachfiles/Media/myfish_r.png";
var pSpeedX = 1;
var pSpeedY = 0;
var f1X = 0;
var f1Y = 50;
var f1W = 25;
var f1H = 10;
var f1Speed = 0.5;
var f2X = 800;
var f2Y = 300;
var f2W = 25;
var f2H = 10;
var f2Speed = -0.5;
var score = 0;
function Update() {
    //更新所有鱼的位置
    pX += pSpeedX;
    pY += pSpeedY;
    if (pX < 0) {
        pX = 0;
    }
    if (pX > (800 - pW)) {
        pX = 800 - pW;
    }
    if (pY < 0) {
        pY = 0;
    }
    if (pY > (400 - pH)) {
        pY = 400 - pH;
    }
    f1X += f1Speed;
    if (f1X > 800) {
        f1X = -100;
        f1Y = Math.random() * 350;
    }
    f2X += f2Speed;
    if (f2X < -100) {
        f2X = 800;
        f2Y = Math.random() * 350;
    }
    if (collision(pX, pY, pW, pH, f1X, f1Y, f1W, f1H)) {
        f1X = -100;
        f1Y = Math.random() * 350;
        score += 1;
        playSound("https://rss.leaplearner.com/Audio/LetterGame/boom.mp3");
    }
    if (collision(pX, pY, pW, pH, f2X, f2Y, f2W, f2H)) {
        f2X = 800;
        f2Y = Math.random() * 350;
        score += 1;
        playSound("https://rss.leaplearner.com/Audio/LetterGame/boom.mp3");
    }
}
function Draw() {
    //画出所有鱼
    canvas.clear();
    image("https://rss.leaplearner.com/teachfiles/Media/underseabg.jpg", 0, 0, 800, 400);
    image("https://rss.leaplearner.com/teachfiles/Media/fish1_r.png", f1X, f1Y, f1W, f1H);
    image("https://rss.leaplearner.com/teachfiles/Media/fish1_l.png", f2X, f2Y, f2W, f2H);
    image(pImg, pX, pY, pW, pH);
    text("得分：" + score, 15, 30, 20, "black");
}
function Loop() {
    Update();
    Draw();
}
setInterval(Loop, 20);
Key["ArrowRight"].press = function() {
    pSpeedX = 1;
    pSpeedY = 0;
    pImg = "https://rss.leaplearner.com/teachfiles/Media/myfish_r.png";
};
Key["ArrowLeft"].press = function() {
    pSpeedX = -1;
    pSpeedY = 0;
    pImg = "https://rss.leaplearner.com/teachfiles/Media/myfish_l.png";
};
Key["ArrowUp"].press = function() {
    pSpeedY = -1;
};
Key["ArrowDown"].press = function() {
    pSpeedY = 1;
};
function collision(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (x1 > (x2 + w2)) return false;
    if ((x1 + w1) < x2) return false;
    if (y1 > (y2 + h2)) return false;
    if ((y1 + h1) < y2) return false;
    return true;
}


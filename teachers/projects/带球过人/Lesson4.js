//知识点：
//1.检测对方球员和足球的碰撞，完成游戏结束功能
//2.计分和显示分数
//3.点击鼠标重新开始游戏
//*4.添加游戏音乐和音效
canvas.resize(360, 500);
var bg1 = new Sprite("https://rss.leaplearner.com/Image/Bgs/piano_bg3.png", 0, 0, 360, 500);
var bg2 = new Sprite("https://rss.leaplearner.com/Image/Bgs/piano_bg3.png", 0, -500, 360, 500);
var ball = new Sprite("https://rss.leaplearner.com/teachfiles/Media/football32122.png", 20, 400, 50, 50);
var player1 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/后卫.png", 0, 0, 80, 100);
var player2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/后卫.png", 140, -250, 80, 100);
var scoreSound = new Audio("https://rss.leaplearner.com/Audio/Freefighter/diamond.mp3");
var bgm = new Audio("https://rss.leaplearner.com/BGM/Fishrun/bgm02.mp3");
var score = 0;
var speed = 5;
var scoreTxt = new Text("", 120, 50, 25);
var mouseDown = false;
bgm.loop = true;
bgm.play();
function Loop() {
    Update();
    Draw();
}
function Update() {
    if (Mouse.x > (ball.x + 25) && mouseDown == true) {
        ball.x += 5 + score / 10;
    }
    if (Mouse.x < (ball.x + 25) && mouseDown == true) {
        ball.x -= 5 + score / 10;
    }
    player1.y += speed;
    player2.y += speed;
    if (player1.y > 500) {
        player1.y = -100;
        player1.x = Math.floor(Math.random() * 3) * 120 + 20;
        score += 1;
        speed += 3 / score;
        scoreSound.currentTime = 0;
        scoreSound.play();
    }
    if (player2.y > 500) {
        player2.y = -100;
        player2.x = Math.floor(Math.random() * 3) * 120 + 20;
        score += 1;
        speed += 3 / score;
        scoreSound.currentTime = 0;
        scoreSound.play();
    }
    if (ball.collide(player1) || ball.collide(player2)) {
        speed = 0;
    }
    if (bg1.y > 500) {
        bg1.y = 0;
    }
    bg1.y = bg1.y + speed;
    bg2.y = bg1.y -500;
    scoreTxt.src = "得分：" + score;
}
function Draw() {
    canvas.clear();
    bg1.draw();
    bg2.draw();
    player1.draw();
    player2.draw();
    ball.draw();
    scoreTxt.draw();
}
setInterval(Loop, 20);
Mouse.down = function() {
    if (speed > 0) {
        mouseDown = true;
    }
    else {
        score = 0;
        player1.y = -100;
        player2.y = -350;
        speed = 5;
    }
};
Mouse.up = function() {
    mouseDown = false;
};



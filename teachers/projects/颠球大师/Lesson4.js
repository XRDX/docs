//1.变量的计算和使用
//2.多条件if语句的使用
//3.文字对象的使用
canvas.resize(350, 500);
var field = new Sprite("http://ou1htxdl4.bkt.clouddn.com/qiuchang.jpg", 0, 0, 355, 500);
var ball1 = new Sprite("http://ou1htxdl4.bkt.clouddn.com/football.png", 80, 20, 80, 80);
var ball2 = new Sprite("http://ou1htxdl4.bkt.clouddn.com/football.png", 160, 20, 80, 80);
var ball3 = new Sprite("http://ou1htxdl4.bkt.clouddn.com/football.png", 240, 20, 80, 80);
var speed1 = 5;
var speed2 = 5;
var speed3 = 5;
var scoreTxt = new Text("得分文字", 10, 10);
var score = 0;
var speed = 5;
var moveX1 = 0;
var moveX2 = 0;
var moveX3 = 0;
var finalTxt = new Text("游戏结束", 135, 200);
function Loop() {
    ball1.x = ball1.x + moveX1;
    ball2.x = ball2.x + moveX2;
    ball3.x = ball3.x + moveX3;
    ball1.y = ball1.y + speed1;
    ball2.y = ball2.y + speed2;
    ball3.y = ball3.y + speed3;
    if (ball1.y < -100) {
        speed1 = speed;
        ball1.x = Math.random() * 270;
        moveX1 = Math.random() * 4 - 2;
    }
    if (ball2.y < -100) {
        speed2 = speed;
        ball2.x = Math.random() * 270;
        moveX2 = Math.random() * 4 - 2;
    }
    if (ball3.y < -100) {
        speed3 = speed;
        ball3.x = Math.random() * 270;
        moveX3 = Math.random() * 4 - 2;
    }
    if (score > 20) {
        speed = score / 4;
    }
    if (ball1.x < 0) {
        moveX1 = -moveX1;
    }
    if (ball1.x > 270) {
        moveX1 = -moveX1;
    }
    if (ball2.x < 0) {
        moveX2 = -moveX2;
    }
    if (ball2.x > 270) {
        moveX2 = -moveX2;
    }
    if (ball3.x < 0) {
        moveX3 = -moveX3;
    }
    if (ball3.x > 270) {
        moveX3 = -moveX3;
    }
    canvas.clear();
    field.draw();
    ball1.draw();
    ball2.draw();
    ball3.draw();
    scoreTxt.src = "得分：" + score;
    scoreTxt.draw();
    if (ball1.y > 500 && ball2.y > 500 && ball3.y > 500) {
        finalTxt.draw();
    }
}
ball1.click = function() {
    speed1 = -speed;
    score = score + 1;
    moveX1 = Math.random() * 4 - 2;
};
ball2.click = function() {
    speed2 = -speed;
    score = score + 1;
    moveX2 = Math.random() * 4 - 2;
};
ball3.click = function() {
    speed3 = -speed;
    score = score + 1;
    moveX3 = Math.random() * 4 - 2;
};
setInterval(Loop, 20);


//1.简单if语句的使用
//2.随机数函数的使用
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
function Loop() {
    ball1.y = ball1.y + speed1;
    ball2.y = ball2.y + speed2;
    ball3.y = ball3.y + speed3;
    if (ball1.y < -100) {
        speed1 = 5;
        ball1.x = Math.random() * 270;
    }
    if (ball2.y < -100) {
        speed2 = 5;
        ball2.x = Math.random() * 270;
    }
    if (ball3.y < -100) {
        speed3 = 5;
        ball3.x = Math.random() * 270;
    }
    canvas.clear();
    field.draw();
    ball1.draw();
    ball2.draw();
    ball3.draw();
    scoreTxt.src = "得分：" + score;
    scoreTxt.draw();
}
ball1.click = function() {
    speed1 = -5;
    score = score + 1;
};
ball2.click = function() {
    speed2 = -5;
    score = score + 1;
};
ball3.click = function() {
    speed3 = -5;
    score = score + 1;
};
setInterval(Loop, 20);

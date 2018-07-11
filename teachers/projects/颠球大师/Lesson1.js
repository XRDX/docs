//1.图片对象的使用
//2.动画的实现
//3.对象点击事件的使用
canvas.resize(350, 500);
var field = new Sprite("http://ou1htxdl4.bkt.clouddn.com/qiuchang.jpg", 0, 0, 355, 500);
var ball1 = new Sprite("http://ou1htxdl4.bkt.clouddn.com/football.png", 80, 20, 80, 80);
var ball2 = new Sprite("http://ou1htxdl4.bkt.clouddn.com/football.png", 160, 20, 80, 80);
var ball3 = new Sprite("http://ou1htxdl4.bkt.clouddn.com/football.png", 240, 20, 80, 80);
var speed1 = 5;
var speed2 = 5;
var speed3 = 5;
function Loop() {
    ball1.y = ball1.y + speed1;
    ball2.y = ball2.y + speed2;
    ball3.y = ball3.y + speed3;
    canvas.clear();
    field.draw();
    ball1.draw();
    ball2.draw();
    ball3.draw();
}
ball1.click = function() {
    speed1 = -5;
};
ball2.click = function() {
    speed2 = -5;
};
ball3.click = function() {
    speed3 = -5;
};
setInterval(Loop, 20);

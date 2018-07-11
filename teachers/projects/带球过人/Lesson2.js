//知识点：
//1.检测鼠标位置，控制足球移动
//2.添加鼠标点击事件
//3.使用复杂条件语句
canvas.resize(360, 500);
var bg1 = new Sprite("https://rss.leaplearner.com/Image/Bgs/piano_bg3.png", 0, 0, 360, 500);
var bg2 = new Sprite("https://rss.leaplearner.com/Image/Bgs/piano_bg3.png", 0, -500, 360, 500);
var ball = new Sprite("https://rss.leaplearner.com/teachfiles/Media/football32122.png", 20, 400, 50, 50);
var player1 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/后卫.png", 0, 0, 80, 100);
var player2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/后卫.png", 140, -250, 80, 100);
var mouseDown = false;
function Loop() {
    Update();
    Draw();
}
function Update() {
    if (Mouse.x > (ball.x + 25) && mouseDown == true) {
        ball.x += 5;
    }
    if (Mouse.x < (ball.x + 25) && mouseDown == true) {
        ball.x -= 5;
    }
}
function Draw() {
    canvas.clear();
    bg1.draw();
    bg2.draw();
    player1.draw();
    player2.draw();
    ball.draw();
}
setInterval(Loop, 20);
Mouse.down = function() {
    mouseDown = true;
};
Mouse.up = function() {
    mouseDown = false;
};
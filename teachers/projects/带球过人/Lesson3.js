//知识点：
//1.循环移动背景
//2.移动对方球员
//3.让对方球员重新出现在随机位置
canvas.resize(360, 500);
var bg1 = new Sprite("https://rss.leaplearner.com/Image/Bgs/piano_bg3.png", 0, 0, 360, 500);
var bg2 = new Sprite("https://rss.leaplearner.com/Image/Bgs/piano_bg3.png", 0, -500, 360, 500);
var ball = new Sprite("https://rss.leaplearner.com/teachfiles/Media/football32122.png", 20, 400, 50, 50);
var player1 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/后卫.png", 0, 0, 80, 100);
var player2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/后卫.png", 140, -250, 80, 100);
var mouseDown = false;
var speed = 5;
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
    player1.y += speed;
    player2.y += speed;
    if (player1.y > 500) {
        player1.y = -100;
        player1.x = Math.floor(Math.random() * 3) * 120 + 20;
    }
    if (player2.y > 500) {
        player2.y = -100;
        player2.x = Math.floor(Math.random() * 3) * 120 + 20;
    }
    bg1.y = bg1.y + speed;
    if (bg1.y > 500) {
        bg1.y = 0;
    }
    bg2.y = bg1.y - 500;
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
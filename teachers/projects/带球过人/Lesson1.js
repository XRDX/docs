//知识点：
//1.用函数管理代码
//2.导入游戏素材
//3.绘制游戏素材
canvas.resize(360, 500);
var bg1 = new Sprite("https://rss.leaplearner.com/Image/Bgs/piano_bg3.png", 0, 0, 360, 500);
var bg2 = new Sprite("https://rss.leaplearner.com/Image/Bgs/piano_bg3.png", 0, -500, 360, 500);
var ball = new Sprite("https://rss.leaplearner.com/teachfiles/Media/football32122.png", 20, 400, 50, 50);
var player1 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/后卫.png", 0, 0, 80, 100);
var player2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/后卫.png", 140, -250, 80, 100);
function Loop() {
    Update();
    Draw();
}
function Update() {
    
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
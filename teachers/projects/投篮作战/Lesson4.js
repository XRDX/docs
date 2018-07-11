canvas.resize(600, 400);
var field = new Sprite("https://rss.leaplearner.com/teachfiles/Media/basketballfield.jpg", 0, 0, 600, 400);
var player = new Sprite("https://rss.leaplearner.com/teachfiles/Media/basket1.png", 20, 140, 90, 260);
var ball = new Sprite("https://rss.leaplearner.com/teachfiles/Media/basketball22.png", -100, -100, 25, 25);
var enemy = new Sprite("https://rss.leaplearner.com/Image/Role/Alien2.png", 500, 100, 60, 60);
var scoreTxt = new Text("", 10, 30);
var targetLine = new Line(57, 187, 55, 185);
var powerSlide = new Rectangle(10, 10, 0, 10);
var slideMove = 0;
var bXSpeed = 0;
var bYSpeed = 0;
var power = 0;
var score = 0;
targetLine.strokeStyle = "white";
targetLine.lineWidth = 3;
scoreTxt.fillStyle = "white";
powerSlide.fillStyle = "yellow";
function Loop() {
    bYSpeed = bYSpeed + 0.3;
    ball.x = ball.x + bXSpeed;
    ball.y = ball.y + bYSpeed;
    targetLine.x2 = Mouse.x;
    targetLine.y2 = Mouse.y;
    powerSlide.width = powerSlide.width + slideMove;
    if (powerSlide.width >= 290) {
        slideMove = -slideMove;
    }
    if (powerSlide.width <= 0) {
        slideMove = -slideMove;
    }
    if (ball.collide(enemy)) {
        score = score + 1;
        enemy.x = 420 + Math.random() * 120;
        enemy.y = Math.random() * 340;
        ball.x = -100;
        ball.y = -100;
        bXSpeed = 0;
        bYSpeed = 0;
    }
    canvas.clear();
    field.draw();
    targetLine.draw();
    player.draw();
    powerSlide.fill();
    enemy.draw();
    ball.draw();
    scoreTxt.src = "得分：" + score;
    scoreTxt.draw();
}
setInterval(Loop, 20);
Mouse.down = function() {
    powerSlide.width = 0;
    slideMove = 5;
    player.src = "https://rss.leaplearner.com/teachfiles/Media/basket1.png";
    ball.x = -100;
    ball.y = -100;
    bXSpeed = 0;
    bYSpeed = 0;   
};
Mouse.up = function() {
    slideMove = 0;
    player.src = "https://rss.leaplearner.com/teachfiles/Media/basket2.png"
    ball.x = 45;
    ball.y = 170;
    power = powerSlide.width / 20;
    bXSpeed = power * (targetLine.x2 - 45) / Math.sqrt((targetLine.x2 - 45) * (targetLine.x2 - 45) + (targetLine.y2 - 170) * (targetLine.y2 - 170));
    bYSpeed = power * (targetLine.y2 - 170) / Math.sqrt((targetLine.x2 - 45) * (targetLine.x2 - 45) + (targetLine.y2 - 170) * (targetLine.y2 - 170));
}
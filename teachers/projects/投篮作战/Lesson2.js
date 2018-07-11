canvas.resize(600, 400);
var field = new Sprite("https://rss.leaplearner.com/teachfiles/Media/basketballfield.jpg", 0, 0, 600, 400);
var player = new Sprite("https://rss.leaplearner.com/teachfiles/Media/basket1.png", 20, 140, 90, 260);
var ball = new Sprite("https://rss.leaplearner.com/teachfiles/Media/basketball22.png", -100, -100, 25, 25);
var enemy = new Sprite("https://rss.leaplearner.com/Image/Role/Alien2.png", 500, 100, 60, 60);
var targetLine = new Line(57, 187, 55, 185);
var bXSpeed = 0;
var bYSpeed = 0;
var power = 14;
targetLine.strokeStyle = "white";
targetLine.lineWidth = 3;
function Loop() {
	bYSpeed = bYSpeed + 0.3;
	ball.x = ball.x + bXSpeed;
	ball.y = ball.y + bYSpeed;
	targetLine.x2 = Mouse.x;
    targetLine.y2 = Mouse.y;
    canvas.clear();
    field.draw();
    targetLine.draw();
    player.draw();
    enemy.draw();
    ball.draw();
}
setInterval(Loop, 20);
Mouse.down = function() {
	ball.x = -100;
	ball.y = -100;
	bXSpeed = 0;
	bYSpeed = 0;
    player.src = "https://rss.leaplearner.com/teachfiles/Media/basket1.png";
};
Mouse.up = function() {
	ball.x = 45;
	ball.y = 170;
	bXSpeed = 10;
	bYSpeed = -5;
    player.src = "https://rss.leaplearner.com/teachfiles/Media/basket2.png"
    bXSpeed = power * (targetLine.x2 - 45) / Math.sqrt((targetLine.x2 - 45) * (targetLine.x2 - 45) + (targetLine.y2 - 170) * (targetLine.y2 - 170));
    bYSpeed = power * (targetLine.y2 - 170) / Math.sqrt((targetLine.x2 - 45) * (targetLine.x2 - 45) + (targetLine.y2 - 170) * (targetLine.y2 - 170));
};
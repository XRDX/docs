canvas.resize(600, 400);
var field = new Sprite("https://rss.leaplearner.com/teachfiles/Media/basketballfield.jpg", 0, 0, 600, 400);
var player = new Sprite("https://rss.leaplearner.com/teachfiles/Media/basket1.png", 20, 140, 90, 260);
var ball = new Sprite("https://rss.leaplearner.com/teachfiles/Media/basketball22.png", -100, -100, 25, 25);
var enemy = new Sprite("https://rss.leaplearner.com/Image/Role/Alien2.png", 500, 100, 60, 60);
var bXSpeed = 0;
var bYSpeed = 0;
function Loop() {
	ball.x = ball.x + bXSpeed;
	ball.y = ball.y + bYSpeed;
    canvas.clear();
    field.draw();
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
	bXSpeed = 3;
	bYSpeed = -2;
    player.src = "https://rss.leaplearner.com/teachfiles/Media/basket2.png"
};
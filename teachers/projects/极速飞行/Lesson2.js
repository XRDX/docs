canvas.resize(350, 550);
var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/redbg.jpg", 0, 0, 350, 550);
var bg2 = new Sprite("https://rss.leaplearner.com/Image/Bgs/redbg.jpg", 0, -550, 350, 550);
var player = new Sprite("https://rss.leaplearner.com/Image/Role/Fighter14.png", 30, 450, 80, 80);
var enemy = new Sprite("https://rss.leaplearner.com/Image/Role/Fighter15.png", 50, 0, 80, 80);
var playerSpeed = 10;
function Loop() {
	canvas.clear();
	bg.y = bg.y + playerSpeed;
	if (bg.y > 550) {
		bg.y = 0;
	}
	bg2.y = bg.y - 550;
	bg.draw();
	bg2.draw();
	player.draw();
	enemy.draw();
}
Key["ArrowUp"].press = function() {
	playerSpeed = playerSpeed + 0.2;
	if (playerSpeed > 20) {
		playerSpeed = 20;
	}
};
Key["ArrowDown"].press = function() {
	playerSpeed = playerSpeed - 0.2;
	if (playerSpeed < 0) {
		playerSpeed = 0;
	}
};
Key["ArrowLeft"].press = function() {
	player.x = player.x - 20;
	if (player.x < 0) {
		player.x = 0;
	}
};
Key["ArrowRight"].press = function() {
	player.x = player.x + 20;
	if (player.x > 270) {
		player.x = 270;
	}
};
setInterval(Loop, 20);

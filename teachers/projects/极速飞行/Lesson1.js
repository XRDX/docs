canvas.resize(350, 550);
var bg1 = new Sprite("https://rss.leaplearner.com/Image/Bgs/redbg.jpg", 0, 0, 350, 550);
var player = new Sprite("https://rss.leaplearner.com/Image/Role/Fighter14.png", 30, 450, 80, 80);
var enemy = new Sprite("https://rss.leaplearner.com/Image/Role/Fighter15.png", 50, 0, 80, 80);
function Loop() {
	canvas.clear();
	bg1.draw();
	player.draw();
	enemy.draw();
}
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
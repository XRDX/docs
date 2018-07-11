canvas.resize(350, 550);
var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/redbg.jpg", 0, 0, 350, 550);
var bg2 = new Sprite("https://rss.leaplearner.com/Image/Bgs/redbg.jpg", 0, -550, 350, 550);
var player = new Sprite("https://rss.leaplearner.com/Image/Role/Fighter14.png", 30, 450, 80, 80);
var enemy = new Sprite("https://rss.leaplearner.com/Image/Role/Fighter15.png", 50, 0, 80, 80);
var distanceTxt = new Text("", 10, 10, 20);
var timeTxt = new Text("", 200, 10, 20);
var finalTxt = new Text("", 80, 200, 25);
var playerSpeed = 10;
var enemySpeed = 5;
var distance = 0;
var timeRemain = 30;
function Loop() {
	canvas.clear();
	timeRemain = timeRemain - 20 / 1000;
	bg.y = bg.y + playerSpeed;
	distance = distance + playerSpeed / 10;
	bg2.y = bg.y - 550;
	if (bg.y > 550) {
		bg.y = 0;
	}
	enemy.y = enemy.y - enemySpeed + playerSpeed;
	if (enemy.y < -100) {
		enemy.y = -100;
	}
	if (enemy.y > 550) {
		enemy.y = -100;
		enemy.x = Math.random() * 270;
	}
	if (player.collide(enemy)) {
		timeRemain = timeRemain - 4;
		enemy.y = -100;
		enemy.x = Math.random() * 270;
	}
	if (timeRemain <= 0) {
		timeRemain = 0;
		playerSpeed = 0;
	}
	bg.draw();
	bg2.draw();
	player.draw();
	enemy.draw();
	distanceTxt.src = "距离：" + Math.floor(distance) + "米";
	distanceTxt.draw();
	timeTxt.src = "剩余时间：" + Math.ceil(timeRemain) + "秒";
	timeTxt.draw();
	if (timeRemain <= 0) {
		finalTxt.src = "最终成绩：" + Math.floor(distance) + "米";
		finalTxt.draw();
	}
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
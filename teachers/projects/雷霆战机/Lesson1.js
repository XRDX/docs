//子弹图片：
//https://rss.leaplearner.com/teachfiles/Media/bullet01.png
//https://rss.leaplearner.com/teachfiles/Media/bullet02.png
//https://rss.leaplearner.com/teachfiles/Media/bullet03.png
//https://rss.leaplearner.com/teachfiles/Media/bullet04.png
//https://rss.leaplearner.com/teachfiles/Media/bullet05.png

canvas.resize(350, 500);
var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/bluebg.jpg", 0, 0, 350, 550);
var hero = new Sprite("https://rss.leaplearner.com/Image/Role/Fighter13.png", 100, 300, 50, 50);
var enemy = new Sprite("https://rss.leaplearner.com/Image/Role/Fighter9.png", 100, 100, 50, 50);
var bullet = new Sprite("https://rss.leaplearner.com/teachfiles/Media/bullet01.png", 100, 100, 20, 20);
var enemyBullet = new Sprite("https://rss.leaplearner.com/teachfiles/Media/bullet02.png", 100, 100, 20, 20);
function Loop() {
    canvas.clear();
    bg.draw();
    bullet.draw();
    hero.draw();
    enemy.draw();
    enemyBullet.draw();
}
setInterval(Loop, 20); 
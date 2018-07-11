//子弹图片：
//https://rss.leaplearner.com/teachfiles/Media/bullet01.png
//https://rss.leaplearner.com/teachfiles/Media/bullet02.png
//https://rss.leaplearner.com/teachfiles/Media/bullet03.png
//https://rss.leaplearner.com/teachfiles/Media/bullet04.png
//https://rss.leaplearner.com/teachfiles/Media/bullet05.png

canvas.resize(350, 500);
var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/bluebg.jpg", 0, 0, 350, 550);
var hero = new Sprite("https://rss.leaplearner.com/Image/Role/Fighter13.png", 100, 100, 50, 50);
var enemy = new Sprite("https://rss.leaplearner.com/Image/Role/Fighter9.png", 100, 100, 50, 50);
var bullet = new Sprite("https://rss.leaplearner.com/teachfiles/Media/bullet01.png", 100, 100, 20, 20);
var enemyBullet = new Sprite("https://rss.leaplearner.com/teachfiles/Media/bullet02.png", 100, 100, 20, 20);
var txt = new Text("随便写什么，反正都要被改掉", 10, 10, 20);
var score = 0;
enemyBullet.x = enemy.x + 15;
enemyBullet.y = enemy.y + 50;
function Loop() {
    enemyBullet.y = enemyBullet.y + 10;
    bullet.y = bullet.y - 15;
    enemy.y = enemy.y + 4;
    hero.x = Mouse.x - 25;
    hero.y = Mouse.y - 25;
    if (enemy.y > 500) {
        enemy.x = Math.random() * 300;
        enemy.y = -50;
    }

    if (bullet.y < -30) {
        bullet.x = hero.x + 15;
        bullet.y = hero.y - 10;
    }
    
    if (enemyBullet.y > 500) {
        enemyBullet.x = enemy.x + 15;
        enemyBullet.y = enemy.y + 50;
    }
    if (bullet.collide(enemy)) {
        enemy.x = Math.random() * 300;
        enemy.y = -50;
        bullet.x = hero.x + 10;
        bullet.y = hero.y - 10;
        score = score + 10;
    }
    if (enemyBullet.collide(hero)) {
        enemyBullet.x = enemy.x + 15;
        enemyBullet.y = enemy.y + 50;
        score = score - 5;
    }
    txt.src = "得分：" + score;
    canvas.clear();
    bg.draw();
    bullet.draw();
    hero.draw();
    enemy.draw();
    enemyBullet.draw();
    txt.draw();
}
setInterval(Loop, 20);   
   
   
   
   
   
   
   
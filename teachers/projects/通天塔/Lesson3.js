//知识点：
//1.if语句的使用
//2.数组的push方法和splice方法
//3.计分和显示分数
//4.使用分数控制游戏速度
canvas.resize(350, 500);
var blocks = [
    new Rectangle(25, 450, 300, 50), 
    new Rectangle(35, 400, 280, 50),
    new Rectangle(50, 350, 250, 50),
    new Rectangle(50, 0, 250, 50)
    ];
var xspeed = 3;
var yspeed = 0;
var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/qhcb_background_002.png", 0, 0, 350, 500);
var cloud1 = new Sprite("https://rss.leaplearner.com/Image/Bgs/cloud_3.png", 0, 0, 350, 500);
var cloud2 = new Sprite("https://rss.leaplearner.com/Image/Bgs/cloud_2.png", 0, -500, 350, 500);
var score = 0;
var sTxt = new Text("", 130, 160);
blocks[0].fillStyle = HSL(Math.random() * 360, 1, 0.5);
blocks[1].fillStyle = HSL(Math.random() * 360, 1, 0.5);
blocks[2].fillStyle = HSL(Math.random() * 360, 1, 0.5);
blocks[3].fillStyle = HSL(Math.random() * 360, 1, 0.5);
blocks[0].strokeStyle = "black";
blocks[1].strokeStyle = "black";
blocks[2].strokeStyle = "black";
blocks[3].strokeStyle = "black";
function Loop() {
    blocks[3].x = blocks[3].x + xspeed;
    if (blocks[3].x > 350) {
        blocks[3].x = -250;
    }
    if (blocks[3].collide(blocks[2])) {
        blocks[2].y = blocks[2].y + yspeed;
        blocks[1].y = blocks[1].y + yspeed;
        blocks[0].y = blocks[0].y + yspeed;
        cloud1.y = cloud1.y + yspeed;
        cloud2.y = cloud2.y + yspeed;
    }
    if (cloud1.y > 500) {
        cloud1.y = -500;
    }
    if (cloud2.y > 500) {
        cloud2.y = -500;
    }
    blocks[3].y = blocks[3].y + yspeed;
    if (blocks[0].y >= 500) {
        blocks.splice(0, 1);
        blocks.push(new Rectangle(0, 0, 250, 50));
        blocks[3].fillStyle = HSL(Math.random() * 360, 1, 0.5);
        blocks[3].strokeStyle = "black";
        xspeed = 3 + score * 0.3;
        yspeed = 0;
        score = score + 1;
    }
    canvas.clear();
    sTxt.src = "得分：" + score;
    bg.draw();
    blocks[3].draw();
    blocks[2].draw();
    blocks[1].draw();
    blocks[0].draw();
    cloud1.draw();
    cloud2.draw();
    sTxt.draw();
}
setInterval(Loop, 20);
Mouse.click = function() {
    xspeed = 0;
    yspeed = 5;
};
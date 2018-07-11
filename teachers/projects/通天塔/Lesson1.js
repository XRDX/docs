//知识点：
//1.图形对象和图片对象的使用
//2.HSL颜色的知识
//3.if语句实现循环移动
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
    blocks[3].y = blocks[3].y + yspeed;
    canvas.clear();
    bg.draw();
    blocks[3].draw();
    blocks[2].draw();
    blocks[1].draw();
    blocks[0].draw();
}
setInterval(Loop, 20);
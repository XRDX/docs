canvas.resize(350, 500);
var tFrame = new Rectangle(30, 30, 290, 36);
var tSlide = new Rectangle(33, 33, 284, 30);
var blocks = [];
var i;
var randColor;
var diffBlockIndex;
var score = 0;
var gameOver = false;
var txt = new Text("请点击颜色不同的色块", 70, 420);
var overTxt = new Text("游戏结束", 110, 200);
var overBG = new Sprite("https://rss.leaplearner.com/Image/Bgs/background.png", 0, 0, 350, 500);
tFrame.strokeStyle = "black";
tSlide.fillStyle = "orange";
randHue = Math.random() * 360;
diffBlockIndex = Math.floor(Math.random() * 16);
for (i = 0; i < 16; i = i + 1) {
    blocks[i] = new Rectangle();
    blocks[i].width = 65;
    blocks[i].height = 65;
    blocks[i].x = 30 + (65 + 10) * (i % 4);
    blocks[i].y = 96 + (65 + 10) * Math.floor(i / 4);
    blocks[i].click = Clicked;
}
overBG.click = Restart;
function Restart() {
    gameOver = false;
    tSlide.width = 284;
    score = 0;
    txt.src = "请点击颜色不同的色块";
    txt.x = 70;
    randHue = Math.random() * 360;
    diffBlockIndex = Math.floor(Math.random() * 16);
}

function Clicked() {
    if (this.fillStyle == HSL(randHue, 1, 0.5)) {
        score = score + 1;
        txt.src = "得分：" + score;
        txt.x = 125;
        randHue = Math.random() * 360;
        diffBlockIndex = Math.floor(Math.random() * 16);
    }
    else {
        gameOver = true;
    }
}

function Loop() {
    if (gameOver == false) {
        canvas.clear();
        if (tSlide.width > 0) {
            tSlide.width = tSlide.width - 1;
        }
        else {
            tSlide.width = 0;
            gameOver = true;
        }
        tSlide.fillStyle = HSL(tSlide.width * 120 / 284, 1, 0.5);
        tFrame.stroke();
        tSlide.fill();
        for (i = 0; i < 16; i = i + 1) {
            blocks[i].fillStyle = HSL(randHue, 0.5, 0.5);
            blocks[i].fill();
        }
        blocks[diffBlockIndex].fillStyle = HSL(randHue, 1, 0.5);
        blocks[diffBlockIndex].fill();
        txt.draw();
    }
    else {
        canvas.clear();
        overTxt.src = "最终得分：" + score;
        overBG.draw();
        overTxt.size = 30;
        overTxt.fillStyle = "black";
        overTxt.x = 80;
        overTxt.y = 200;
        overTxt.draw();
        overTxt.y = 250;
        overTxt.src = "点击屏幕重开";
        overTxt.draw();
    }
}
setInterval(Loop, 20);
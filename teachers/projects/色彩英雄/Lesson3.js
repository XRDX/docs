canvas.resize(350, 500);
var tFrame = new Rectangle(30, 30, 290, 36);
var tSlide = new Rectangle(33, 33, 284, 30);
var blocks = [];
var i;
var randColor;
var diffBlockIndex;
var txt = new Text("请点击颜色不同的色块", 70, 420);
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
}
function Loop() {
    canvas.clear();
    if (tSlide.width > 0) {
        tSlide.width = tSlide.width - 1;
    }
    else {
        tSlide.width = 0;
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
setInterval(Loop, 20);
canvas.resize(350, 500);
var tFrame = new Rectangle(30, 30, 290, 36);
var tSlide = new Rectangle(33, 33, 284, 30);
var blocks = [];
var i;
var txt = new Text("请点击颜色不同的色块", 70, 420);
tFrame.strokeStyle = "black";
tSlide.fillStyle = "orange";

for (i = 0; i < 16; i = i + 1) {
    blocks[i] = new Rectangle();
    blocks[i].width = 65;
    blocks[i].height = 65;
    blocks[i].x = 30 + (65 + 10) * (i % 4);
    blocks[i].y = 96 + (65 + 10) * Math.floor(i / 4);
}

tFrame.stroke();
tSlide.fill();
for (i = 0; i < 16; i = i + 1) {
    blocks[i].fill();
}
txt.draw();
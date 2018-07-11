canvas.resize(350, 500);
var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/circuitrybg1.png", 0, 0, 350, 500);
var pics = [];
var i = 0;
while (i < 12) {
    pics[i] = new Sprite();
    pics[i].src = "https://rss.leaplearner.com/Image/Bgs/piano_bg2.png";
    pics[i].x = 45 + i % 3 * 90;
    pics[i].y = 70 + Math.floor(i / 3) * 90;
    pics[i].width = 80;
    pics[i].height = 80;
    i = i + 1;
}

function Main() {
    canvas.clear();
    bg.draw();
    i = 0;
    while (i < 12) {
        pics[i].draw();
        i = i + 1;
    }
}
setInterval(Main, 20);
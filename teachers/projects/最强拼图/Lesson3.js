canvas.resize(350, 500);
var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/circuitrybg1.png", 0, 0, 350, 500);
var pics = [];
var links = [
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-01.jpg",
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-02.jpg",
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-03.jpg",
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-04.jpg",
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-05.jpg",
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-06.jpg",
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-07.jpg",
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-08.jpg",
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-09.jpg",
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-10.jpg",
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-11.jpg",
    "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-13.png"
    ];
var i = 0;
var blankID; //用于存放空白链接
while (i < 12) {
    pics[i] = new Sprite();
    pics[i].src = links[i];
    //如果链接是空白图片的链接
    if (links[i] == "https://rss.leaplearner.com/teachfiles/Media/mcBlocks-13.png") {
        blankID = i;
    }
    pics[i].x = 45 + i % 3 * 90;
    pics[i].y = 70 + Math.floor(i / 3) * 90;
    pics[i].width = 80;
    pics[i].height = 80;
    pics[i].click = picClicked;
    i = i + 1;
}
function picClicked() {
    var id = pics.indexOf(this);
    switchPics(this, pics[blankID]);
    blankID = id;
}
function switchPics(a, b) {
    var tempLink = a.src;
    a.src = b.src;
    b.src = tempLink;
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
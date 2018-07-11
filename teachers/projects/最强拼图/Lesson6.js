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
var blankID;
var st = 0;
var isWin = 0;
var winTxt = new Text("恭喜你！完成拼图！", 40, 200, 32);
winTxt.fillStyle = "black";
var winBG = new Sprite("https://rss.leaplearner.com/Image/Bgs/background.png", 0, 0, 350, 500);
while (i < 12) {
    pics[i] = new Sprite();
    pics[i].src = links[i];
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

while (st < 500) {
    i = Math.floor(Math.random() * 12);
    if (i != blankID && dist(pics[i], pics[blankID]) <= 90) {
        switchPics(pics[i], pics[blankID]);
        blankID = i;
        st = st + 1;
    }
}

function dist(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    var dl = Math.sqrt(dx * dx + dy * dy);
    return dl;
}

function picClicked() {
    if (dist(this, pics[blankID]) <= 90) {
        var id = pics.indexOf(this);
        switchPics(this, pics[blankID]);
        blankID = id;
    }
}
function switchPics(a, b) {
    var tempLink = a.src;
    a.src = b.src;
    b.src = tempLink;
}
function Main() {
    canvas.clear();
    if (isWin == 0) {
        bg.draw();
        i = 0;
        isWin = 1;
        while (i < 12) {
            pics[i].draw();
            if (pics[i].src != links[i]) { //只要有一个图片链接不对，就表示没有完成
                isWin = 0;
            }
            i = i + 1;
        }
    }
    else {
        winBG.draw();
        winTxt.draw();
    }
    
}
setInterval(Main, 20);
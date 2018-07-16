//1.图片的使用和动画的实现
//2.变量的定义和计算
//3.键盘按键事件
canvas.resize(800, 400);
var pWidth = 40;
var pHeight = 30;
var pX = 0;
var pY = 200;
var pImg = "https://rss.leaplearner.com/teachfiles/Media/myfish_r.png";
var pSpeedX = 1;
var pSpeedY = 0;
function Loop() {
    canvas.clear();
    pX += pSpeedX;
    pY += pSpeedY;
    image("https://rss.leaplearner.com/teachfiles/Media/underseabg.jpg", 0, 0, 800, 400);
    image(pImg, pX, pY, pWidth, pHeight);
}
setInterval(Loop, 20);
Key["ArrowRight"].press = function() {
    pSpeedX = 1;
    pSpeedY = 0;
    pImg = "https://rss.leaplearner.com/teachfiles/Media/myfish_r.png";
};
Key["ArrowLeft"].press = function() {
    pSpeedX = -1;
    pSpeedY = 0;
    pImg = "https://rss.leaplearner.com/teachfiles/Media/myfish_l.png";
};
Key["ArrowUp"].press = function() {
    pSpeedY = -1;
};
Key["ArrowDown"].press = function() {
    pSpeedY = 1;
};
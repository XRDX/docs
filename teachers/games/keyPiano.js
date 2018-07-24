canvas.resize(600, 500);
var Do = new Audio("https://rss.leaplearner.com/teachfiles/Media/do.mp3");
var Re = new Audio("https://rss.leaplearner.com/teachfiles/Media/re.mp3");
var Mi = new Audio("https://rss.leaplearner.com/teachfiles/Media/mi.mp3");
var Fa = new Audio("https://rss.leaplearner.com/teachfiles/Media/fa.mp3");
var So = new Audio("https://rss.leaplearner.com/teachfiles/Media/so.mp3");
var La = new Audio("https://rss.leaplearner.com/teachfiles/Media/la.mp3");
var Si = new Audio("https://rss.leaplearner.com/teachfiles/Media/si.mp3");
var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/background.png", 0, 0, 600, 500);
var words = new Text("小星星", 245, 50, 30);
Do.loop = false;
Re.loop = false;
Mi.loop = false;
Fa.loop = false;
So.loop = false;
La.loop = false;
Si.loop = false;
words.fillStyle = "black";
bg.draw();
words.draw();
words.x = 200;
words.y = 100;
words.src = "1 1 5 5 6 6 5 -";
words.draw();
words.y = 150;
words.src = "4 4 3 3 2 2 1 -";
words.draw();
words.y = 200;
words.src = "5 5 4 4 3 3 2 -";
words.draw();
words.y = 250;
words.draw();
words.y = 300;
words.src = "1 1 5 5 6 6 5 -";
words.draw();
words.y = 350;
words.src = "4 4 3 3 2 2 1 -";
words.draw();
Key["1"].press = function() {
    Do.currentTime = 0;
    Do.play();
};
Key["2"].press = function() {
    Re.currentTime = 0;
    Re.play();
};
Key["3"].press = function() {
    Mi.currentTime = 0;
    Mi.play();
};
Key["4"].press = function() {
    Fa.currentTime = 0;
    Fa.play();
};
Key["5"].press = function() {
    So.currentTime = 0;
    So.play();
};
Key["6"].press = function() {
    La.currentTime = 0;
    La.play();
};
Key["7"].press = function() {
    Si.currentTime = 0;
    Si.play();
};
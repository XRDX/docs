canvas.resize(800, 400);
var pX = 0;
var pY = 200;
var pW = 40;
var pH = 30;
var pImg = "https://rss.leaplearner.com/teachfiles/Media/myfish_r.png";
var pSpeedX = 1;
var pSpeedY = 0;
var f1X = 0;
var f1Y = 50;
var f1W = 25;
var f1H = 10;
var f1Speed = 0.5;
var f2X = 800;
var f2Y = 300;
var f2W = 25;
var f2H = 10;
var f2Speed = -0.5;
var score = 0;
var f3X = 800;
var f3Y = 200;
var f3W = 100;
var f3H = 40;
var f3Speed = -1.5;
var f4X = 400;
var f4Y = 400;
var f4W = 40;
var f4H = 40;
var f4Speed = -0.5;
var f5X = 0;
var f5Y = 100;
var f5W = 35;
var f5H = 30;
var f5Speed = 0.7;
var f6X = 300;
var f6Y = 400;
var f6W = 40;
var f6H = 75;
var f6Speed = 2;
function Update() {
    //更新所有鱼的位置
    playSound("https://rss.leaplearner.com/BGM/Dinner/MainMenu.mp3");
    pX += pSpeedX * (1 + score / 30);
    pY += pSpeedY * (1 + score / 30);
    if (pX < 0) {
        pX = 0;
    }
    if (pX > (800 - pW)) {
        pX = 800 - pW;
    }
    if (pY < 0) {
        pY = 0;
    }
    if (pY > (400 - pH)) {
        pY = 400 - pH;
    }
    f1X += f1Speed;
    if (f1X > 800) {
        f1X = -100;
        f1Y = Math.random() * 350;
    }
    f2X += f2Speed;
    if (f2X < -100) {
        f2X = 800;
        f2Y = Math.random() * 350;
    }
    f3X += f3Speed;
    if (f3X < -f3W) {
        f3X = 800;
        f3Y = Math.random() * 350;
    }
    f4Y += f4Speed;
    if (f4Y < -f4H) {
        f4X = Math.random() * 760;
        f4Y = 400;
    }
    f5X += f5Speed;
    if (f5X > 800) {
        f5X = -f5W;
        f5Y = Math.random() * 350;
    }
    f6Y+= f6Speed;
    if (f6Y > 400) {
        f6Y = -f6H;
        f6X = Math.random() * 720;
    }
    if (collision(pX, pY, pW, pH, f1X, f1Y, f1W, f1H)) {
        if (pW * pH > f1W * f1H) {
            f1X = -100;
            f1Y = Math.random() * 350;
            score += 1;
            playSound("https://rss.leaplearner.com/Audio/LetterGame/boom.mp3");
            pW += 1;
            pH += 0.75;
            f1W += Math.random();
            f1H = f1W * 0.4;
        }
        if (pW * pH < f1W * f1H) {
            score = 0;
            playSound("https://rss.leaplearner.com/a/13/ansWrong.mp3");
            pX = Math.random() * 760;
            pY = -30;
            pW = 40;
            pH = 30;
            pSpeedX = 0;
            pSpeedY = 1;
            f1W = 25;
            f1H = 10;
            f2W = 25;
            f2H = 10;
            f3W = 100;
            f3H = 40;
            f4W = 40;
            f4H = 40;
            f5W = 35;
            f5H = 30;
        }
    }
    if (collision(pX, pY, pW, pH, f2X, f2Y, f2W, f2H)) {
        if (pW * pH > f2W * f2H) {
            f2X = 800;
            f2Y = Math.random() * 350;
            score += 1;
            playSound("https://rss.leaplearner.com/Audio/LetterGame/boom.mp3");
            pW += 1;
            pH += 0.75;
            f2W += Math.random();
            f2H = f2W * 0.4;
        }
        if (pW * pH < f2W * f2H) {
            score = 0;
            playSound("https://rss.leaplearner.com/a/13/ansWrong.mp3");
            pX = Math.random() * 760;
            pY = -30;
            pW = 40;
            pH = 30;
            pSpeedX = 0;
            pSpeedY = 1;
            f1W = 25;
            f1H = 10;
            f2W = 25;
            f2H = 10;
            f3W = 100;
            f3H = 40;
            f4W = 40;
            f4H = 40;
            f5W = 35;
            f5H = 30;
        }
    }
    if (collision(pX, pY, pW, pH, f3X, f3Y, f3W, f3H)) {
        if (pW * pH > f3W * f3H) {
            f3X = 800;
            f3Y = Math.random() * 350;
            score += 10;
            playSound("https://rss.leaplearner.com/Audio/LetterGame/boom.mp3");
            pW += 1;
            pH += 0.75;
            f3W += Math.random() * 10;
            f3H = f3W * 0.4;
        }
        if (pW * pH < f3W * f3H) {
            score = 0;
            playSound("https://rss.leaplearner.com/a/13/ansWrong.mp3");
            pX = Math.random() * 760;
            pY = -30;
            pW = 40;
            pH = 30;
            pSpeedX = 0;
            pSpeedY = 1;
            f1W = 25;
            f1H = 10;
            f2W = 25;
            f2H = 10;
            f3W = 100;
            f3H = 40;
            f4W = 40;
            f4H = 40;
            f5W = 35;
            f5H = 30;
        }
    }
    if (collision(pX, pY, pW, pH, f4X, f4Y, f4W, f4H)) {
        if (pW * pH > f4W * f4H) {
            f4X = Math.random() * 760;
            f4Y = 400;
            score += 5;
            playSound("https://rss.leaplearner.com/Audio/LetterGame/boom.mp3");
            pW += 5;
            pH += 0.75;
            f4W += Math.random() * 5;
            f4H = f4W;
        }
        if (pW * pH < f4W * f4H) {
            score = 0;
            playSound("https://rss.leaplearner.com/a/13/ansWrong.mp3");
            pX = Math.random() * 760;
            pY = -30;
            pW = 40;
            pH = 30;
            pSpeedX = 0;
            pSpeedY = 1;
            f1W = 25;
            f1H = 10;
            f2W = 25;
            f2H = 10;
            f3W = 100;
            f3H = 40;
            f4W = 40;
            f4H = 40;
            f5W = 35;
            f5H = 30;
        }
    }
    if (collision(pX, pY, pW, pH, f5X, f5Y, f5W, f5H)) {
        if (pW * pH > f5W * f5H) {
            f5X = -f5W;
            f5Y = Math.random() * 350;
            score += 3;
            playSound("https://rss.leaplearner.com/Audio/LetterGame/boom.mp3");
            pW += 1;
            pH += 0.75;
            f5W += Math.random() * 3;
            f5H = f5W * 35 / 30;
        }
        if (pW * pH < f5W * f5H) {
            score = 0;
            playSound("https://rss.leaplearner.com/a/13/ansWrong.mp3");
            pX = Math.random() * 760;
            pY = -30;
            pW = 40;
            pH = 30;
            pSpeedX = 0;
            pSpeedY = 1;
            f1W = 25;
            f1H = 10;
            f2W = 25;
            f2H = 10;
            f3W = 100;
            f3H = 40;
            f4W = 40;
            f4H = 40;
            f5W = 35;
            f5H = 30;
        }
    }
    if (collision(pX, pY, pW, pH, f6X, f6Y, f6W, f6H)) {
        f6Y = -f6H;
        f6X = Math.random() * 720;
        score = 0;
        playSound("https://rss.leaplearner.com/a/5/FastWaterEntry.mp3");
        pX = Math.random() * 760;
        pY = -30;
        pW = 40;
        pH = 30;
        pSpeedX = 0;
        pSpeedY = 1;
        f1W = 25;
        f1H = 10;
        f2W = 25;
        f2H = 10;
        f3W = 100;
        f3H = 40;
        f4W = 40;
        f4H = 40;
        f5W = 35;
        f5H = 30;
    }
}
function Draw() {
    //画出所有鱼
    canvas.clear();
    image("https://rss.leaplearner.com/teachfiles/Media/underseabg.jpg", 0, 0, 800, 400);
    image("https://rss.leaplearner.com/teachfiles/Media/fish1_r.png", f1X, f1Y, f1W, f1H);
    image("https://rss.leaplearner.com/teachfiles/Media/fish1_l.png", f2X, f2Y, f2W, f2H);
    image("https://rss.leaplearner.com/teachfiles/Media/jingyu.png", f3X, f3Y, f3W, f3H);
    image("https://rss.leaplearner.com/teachfiles/Media/zhangyu1.png", f4X, f4Y, f4W, f4H);
    image("https://rss.leaplearner.com/teachfiles/Media/seafood_0000_图层-1.png", f5X, f5Y, f5W, f5H);
    image("https://rss.leaplearner.com/teachfiles/Media/boom_0002_图层-3.png", f6X, f6Y, f6W, f6H);
    image(pImg, pX, pY, pW, pH);
    text("得分：" + score, 15, 30, 20, "black");
}
function Loop() {
    Update();
    Draw();
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
function collision(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (x1 > (x2 + w2) - 0.2 * (w1 + w2)) return false;
    if ((x1 + w1) - 0.2 * (w1 + w2)< x2) return false;
    if (y1 > (y2 + h2) - 0.2 * (h1 + h2)) return false;
    if ((y1 + h1) - 0.2 * (h1 + h2)< y2) return false;
    return true;
}


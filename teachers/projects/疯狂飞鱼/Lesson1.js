//1.图片的导入和绘制
//2.文字的导入和绘制
//3.canvas的方法
canvas.resize(350, 500);
var sky = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Sky.png", 0, 0, 1200, 500);
var land = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Land.png", 0, 400, 1200, 160);
var spike1 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Spike.png", 300, 0, 65, 150);
var spike2 = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Spike.png", 300, 325, 65, 150);
var player = new Sprite("https://rss.leaplearner.com/teachfiles/Media/L2U2Player.png", 50, 200, 60, 60);
var txt = new Text();
sky.draw();
spike1.draw();
spike2.draw();
land.draw();
player.draw();
txt.src = "得分：";
txt.fillStyle = "red";
txt.size = 30;
txt.y = 0;
txt.x = 0;
txt.draw();
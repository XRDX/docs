canvas.resize(350, 500);
var sky = new Rectangle(0, 0, 350, 500);
var goal = new Sprite("https://rss.leaplearner.com/teachfiles/Media/goal.png", 25, 20, 300, 150);
var field = new Sprite("https://rss.leaplearner.com/teachfiles/Media/field.png", 0, 150, 350, 350);
var ball = new Sprite("https://rss.leaplearner.com/teachfiles/Media/football2.png", 150, 370, 50, 50);
var goalkeeper = new Sprite("https://rss.leaplearner.com/teachfiles/Media/goalkeeper.png", 50, 50, 120, 130);
var txt = new Text("", 75, 300);
var targetLine = new Line(175, 400, 175, 200);
var kSpeed = 1;
sky.fillStyle = "lightblue";
targetLine.strokeStyle = "red";
targetLine.lineWidth = 3;
function Loop() {
    canvas.clear();
    goalkeeper.x = goalkeeper.x + kSpeed;
    if (goalkeeper.x < 50) {
        kSpeed = 1;
    }
    if (goalkeeper.x > 180) {
        kSpeed = -1;
    }
    sky.fill();
    goal.draw();
    field.draw();
    goalkeeper.draw();
    targetLine.draw();
    ball.draw();
}
setInterval(Loop, 20);
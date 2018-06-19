//后台代码
canvas.resize(600, 500);
var _aDot = new Circle(200, 100, 3);
var _aTxt = new Text("1", 180, 80);
_aTxt.fillStyle = "red";
_aDot.setAnchor(200, 200);
_aDot.fillStyle = "black";
_aDot.fill();
_aTxt.draw();
_aDot.rotate(72);
_aDot.fill();
_aTxt.x = 310;
_aTxt.y = 160;
_aTxt.src = "4";
_aTxt.draw();
_aDot.rotate(144);
_aDot.fill();
_aTxt.x = 270;
_aTxt.y = 285;
_aTxt.src = "2";
_aTxt.draw();
_aDot.rotate(216);
_aDot.fill();
_aTxt.x = 117;
_aTxt.y = 285;
_aTxt.src = "5";
_aTxt.draw();
_aDot.rotate(288);
_aDot.fill();
_aTxt.x = 80;
_aTxt.y = 160;
_aTxt.src = "3";
_aTxt.draw();
_aTxt.x = 210;
_aTxt.y = 80;
_aTxt.src = "6";
_aTxt.draw();


//显示代码
canvas.showAxis();
var line1 = new Line(200, 100, 260, 280);
line1.draw();
var line2 = new Line(260, 280, 105, 169);
line2.draw();
var line3 = new Line(105, 169, 295, 169);
line3.draw();
var line4 = new Line(295, 169, 140, 280);
line4.draw();
var line5 = new Line(140, 280, 200, 100);
line5.draw();




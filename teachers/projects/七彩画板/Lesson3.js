//1.圆形对象的使用
//2.对象点击事件的使用
//3.修改线段端点类型（lineCap）
canvas.resize(500, 500);
var brushLine = new Line(0, 0, 0, 0);
var isDrawing = false;
var palette = new Rectangle(130, 430, 360, 60);
var color1 = new Rectangle(140, 440, 40, 40);
var color2 = new Rectangle(190, 440, 40, 40);
var color3 = new Rectangle(240, 440, 40, 40);
var color4 = new Rectangle(290, 440, 40, 40);
var color5 = new Rectangle(340, 440, 40, 40);
var color6 = new Rectangle(390, 440, 40, 40);
var color7 = new Rectangle(440, 440, 40, 40);
var selectColor = new Rectangle(140, 440, 40, 40);
var brushTips = new Rectangle(10, 430, 110, 60);
var smallBrush = new Circle(35, 460, 2);
var mediumBrush = new Circle(65, 460, 4);
var largeBrush = new Circle(95, 460, 6);
var selectBrush = new Rectangle(20, 445, 30, 30);
brushLine.strokeStyle = "red";
brushLine.lineWidth = 4;
brushLine.lineCap = "round";
palette.fillStyle = "lightgrey";
palette.strokeStyle = "grey";
color1.fillStyle = "red";
color2.fillStyle = "orange";
color3.fillStyle = "yellow";
color4.fillStyle = "green";
color5.fillStyle = "cyan";
color6.fillStyle = "blue";
color7.fillStyle = "purple";
selectColor.strokeStyle = "grey";
selectColor.lineWidth = 4;
brushTips.fillStyle = "lightgrey";
brushTips.strokeStyle = "grey";
smallBrush.fillStyle = "red";
mediumBrush.fillStyle = "red";
largeBrush.fillStyle = "red";
selectBrush.strokeStyle = "grey";
selectBrush.lineWidth = 2;
function Loop() {
	brushLine.x1 = brushLine.x2;
	brushLine.y1 = brushLine.y2;
	brushLine.x2 = Mouse.x;
	brushLine.y2 = Mouse.y;
	if (isDrawing) {
		brushLine.draw();
	}
	palette.draw();
	selectColor.stroke();
	color1.fill();
	color2.fill();
	color3.fill();
	color4.fill();
	color5.fill();
	color6.fill();
	color7.fill();
	brushTips.draw();
	selectBrush.stroke();
	smallBrush.fill();
	mediumBrush.fill();
	largeBrush.fill();
}
color1.click = function() {
	selectColor.x = color1.x;
	selectColor.y = color1.y;
	smallBrush.fillStyle = "red";
	mediumBrush.fillStyle = "red";
	largeBrush.fillStyle = "red";
	brushLine.strokeStyle = "red";
};
color2.click = function() {
	selectColor.x = color2.x;
	selectColor.y = color2.y;
	smallBrush.fillStyle = "orange";
	mediumBrush.fillStyle = "orange";
	largeBrush.fillStyle = "orange";
	brushLine.strokeStyle = "orange";
};
color3.click = function() {
	selectColor.x = color3.x;
	selectColor.y = color3.y;
	smallBrush.fillStyle = "yellow";
	mediumBrush.fillStyle = "yellow";
	largeBrush.fillStyle = "yellow";
	brushLine.strokeStyle = "yellow";
};
color4.click = function() {
	selectColor.x = color4.x;
	selectColor.y = color4.y;
	smallBrush.fillStyle = "green";
	mediumBrush.fillStyle = "green";
	largeBrush.fillStyle = "green";
	brushLine.strokeStyle = "green";
};
color5.click = function() {
	selectColor.x = color5.x;
	selectColor.y = color5.y;
	smallBrush.fillStyle = "cyan";
	mediumBrush.fillStyle = "cyan";
	largeBrush.fillStyle = "cyan";
	brushLine.strokeStyle = "cyan";
};
color6.click = function() {
	selectColor.x = color6.x;
	selectColor.y = color6.y;
	smallBrush.fillStyle = "blue";
	mediumBrush.fillStyle = "blue";
	largeBrush.fillStyle = "blue";
	brushLine.strokeStyle = "blue";
};
color7.click = function() {
	selectColor.x = color7.x;
	selectColor.y = color7.y;
	smallBrush.fillStyle = "purple";
	mediumBrush.fillStyle = "purple";
	largeBrush.fillStyle = "purple";
	brushLine.strokeStyle = "purple";
};
smallBrush.click = function() {
	brushLine.lineWidth = 4;
	selectBrush.x = 20;
	selectBrush.y = 445;
};
mediumBrush.click = function() {
	brushLine.lineWidth = 8;
	selectBrush.x = 50;
	selectBrush.y = 445;
};
largeBrush.click = function() {
	brushLine.lineWidth = 12;
	selectBrush.x = 80;
	selectBrush.y = 445;
};
Mouse.down = function() {
	isDrawing = true;
};
Mouse.up = function() {
	isDrawing = false;
};
setInterval(Loop, 20);
//1.长方形对象的使用
//2.对象的点击事件
//3.对象属性的修改
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
brushLine.strokeStyle = "red";
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
}
color1.click = function() {
	selectColor.x = color1.x;
	selectColor.y = color1.y;
	brushLine.strokeStyle = "red";
};
color2.click = function() {
	selectColor.x = color2.x;
	selectColor.y = color2.y;
	brushLine.strokeStyle = "orange";
};
color3.click = function() {
	selectColor.x = color3.x;
	selectColor.y = color3.y;
	brushLine.strokeStyle = "yellow";
};
color4.click = function() {
	selectColor.x = color4.x;
	selectColor.y = color4.y;
	brushLine.strokeStyle = "green";
};
color5.click = function() {
	selectColor.x = color5.x;
	selectColor.y = color5.y;
	brushLine.strokeStyle = "cyan";
};
color6.click = function() {
	selectColor.x = color6.x;
	selectColor.y = color6.y;
	brushLine.strokeStyle = "blue";
};
color7.click = function() {
	selectColor.x = color7.x;
	selectColor.y = color7.y;
	brushLine.strokeStyle = "purple";
};
Mouse.down = function() {
	isDrawing = true;
};
Mouse.up = function() {
	isDrawing = false;
};
setInterval(Loop, 20);
//1.圆形对象与线段对象的使用
//2.简单if语句
//3.鼠标的按下与松开事件
canvas.resize(500, 500);
var brush = new Circle(0, 0, 10);
var brushLine = new Line(0, 0, 0, 0);
var isDrawing = false;
function Loop() {
	brushLine.x1 = brushLine.x2;
	brushLine.y1 = brushLine.y2;
	// brush.x = Mouse.x;
	// brush.y = Mouse.y;
	brushLine.x2 = Mouse.x;
	brushLine.y2 = Mouse.y;
	if (isDrawing) {
		// brush.draw();
		brushLine.draw();
	}
}
Mouse.down = function() {
	isDrawing = true;
};
Mouse.up = function() {
	isDrawing = false;
}
setInterval(Loop, 1);
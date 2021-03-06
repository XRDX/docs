//1.键盘按键事件
//2.使用和修改对象的属性
//3.使用赋值符号修改变量的值
canvas.resize(600, 400);
var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/pinfen_bg_4.png", 0, 0, 600, 400);
var p1 = new Sprite("https://rss.leaplearner.com/Image/Animals/Bear_angry.png", 50, 200, 200, 200);
var p2 = new Sprite("https://rss.leaplearner.com/Image/Role/robot1.png", 370, 210, 140, 170);
var rope = new Rectangle(150, 340, 300, 10);
rope.fillStyle = "orange";
var knot = new Circle(300, 345, 10);
knot.fillStyle = "maroon";
function Loop() {
	canvas.clear();
	bg.draw();
	rope.fill();
	knot.fill();
	p1.draw();
	p2.draw();
}
setInterval(Loop, 20);
Key["ArrowLeft"].press = function() {
	p1.x = p1.x - 5;
	p2.x = p2.x - 5;
	rope.x = rope.x - 5;
	knot.x = knot.x - 5;
};
Key["ArrowRight"].press = function() {
	p1.x = p1.x + 5;
	rope.x = rope.x + 5;
	p2.x = p2.x + 5;
	knot.x = knot.x + 5;
};
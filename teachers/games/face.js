canvas.resize(350, 500);
var face = new Circle(175, 200, 100);
face.fillStyle = "yellow";
face.strokeStyle = "yellow";
face.draw();
var mouth = new Circle(175, 220, 60);
mouth.fillStyle = "white";
mouth.strokeStyle = "white";
mouth.draw();
var mask = new Rectangle(100, 150, 150, 80);
mask.fillStyle = "yellow";
mask.strokeStyle = "yellow";
mask.draw();
var eye1 = new Circle(140, 180, 15);
eye1.fillStyle = "red";
eye1.strokeStyle = "red";
eye1.draw();
var eye2 = new Circle(210, 180, 15);
eye2.fillStyle = "red";
eye2.strokeStyle = "red";
eye2.draw();
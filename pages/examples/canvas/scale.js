/***************************************************************

canvas.scale(scaleX, scaleY)

将画布的坐标轴放大

* x方向放大到原始值的scaleX倍
* y方向放大到原始值scaleY倍

当x、y放大超过10倍时，显示的坐标间隔为1

scaleX、scaleY的值不能为0

***************************************************************/
canvas.scale(10, 10);

canvas.showAxis();

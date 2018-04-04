/***************************************************************

定义和用法
globalAlpha 属性设置或返回绘图的当前透明值（alpha 或 transparency）。

globalAlpha 属性值必须是介于 0.0（完全透明） 与 1.0（不透明） 之间的数字。

默认值：    1.0
JavaScript 语法：  ctx.globalAlpha=number;
属性值
值   描述
number  透明值。必须介于 0.0（完全透明） 与 1.0（不透明） 之间。

***************************************************************/

ctx.globalAlpha = 0.5;

rectangle(20,20,75,50);
rectangle(50,50,75,50);
rectangle(80,80,75,50);
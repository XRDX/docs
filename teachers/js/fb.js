var fbWords = ""; 
var studentName = "他";
var feedbackTxts = [];
function setContents() {
	feedbackTxts = [
		{
			lbName: "喜欢编程",
			contents: [studentName + "非常喜欢编程。", studentName + "对编程兴趣非常大。", studentName + "对编程很感兴趣，学习起来有激情。", "兴趣是" + studentName + "学习的最大动力。"]
		},
		{
			lbName: "喜欢尝试",
			contents: [studentName + "喜欢自己去尝试很多的有意思的东西。", studentName + "努力实现自己的新想法。", studentName + "会主动思考未教代码的含义，前后代码写法上的区别。"]
		},
		{
			lbName: "学习能力强",
			contents: [studentName + "学习能力很好，讲的内容很快就能消化吸收。", studentName + "善于动脑思考，知识内容稍加讲解就能明白。"]
		},
		{
			lbName: "注重细节",
			contents: [studentName + "能够注意代码输入时的细节问题。"]
		},
		{
			lbName: "逻辑思维能力好",
			contents: [studentName + "逻辑思维比较强，能够自己分析出问题所在。", studentName + "逻辑分析能力有很大进步，能够根据自己的理解写出代码。"]
		},
		{
			lbName: "知识掌握好",
			contents: [studentName + "对知识掌握较深刻。", studentName + "对内容掌握的很好，运用起来很熟练。"]
		},
		{
			lbName: "课后练习好",
			contents: [studentName + "的课后作业都完成的很好，能看出来课下是有下大工夫的，非常棒！", studentName + "课后作业完成的很好，希望能继续保持！"]
		},
		{
			lbName: "有创意",
			contents: [studentName + "有自己独特的想法。", studentName + "总能分享出很多有意思的想法。"]
		},
		{
			lbName: "善于记笔记",
			contents: [studentName + "会勤记笔记。", studentName + "在有必要的的地方都留下了自己的小笔记，赞！", studentName + "有做笔记的好习惯。"]
		}
	];		
}

function loadFb() {
	setContents();
	let fbID = GetRequest()["fbID"];
	fbWords += courseFiles[fbID]["feedback"]
	document.getElementById("fbtext").innerText = fbWords;
	for (let i in feedbackTxts) {
		let lb = document.createElement("span");
		lb.className = "badge badge-red";
		lb.innerText = feedbackTxts[i]["lbName"];
		lb.style.margin = "3px";
		lb.style.fontSize = "15px";
		lb.style.backgroundColor = "royalblue";
		lb.onclick = function() {
			// alert();
			fbWords += feedbackTxts[i]["contents"][Math.floor(Math.random() * feedbackTxts[i]["contents"].length)];
			document.getElementById("fbtext").innerText = fbWords;
		}
		document.getElementById("fblabels").appendChild(lb);
	}	
}
function checkName() {
	studentName = document.getElementById("studentName").value;
	if (studentName == "") {
		studentName = "他";
	}
	alert("学生姓名修改为：" + studentName);
	setContents();
}
function copyFb() {
	document.getElementById("fbtext").select();
	try {
	    if(document.execCommand('copy', false, null)){
	        alert("复制成功！");
	    } else{
	        alert("复制失败！");
	    }
	} catch(err){
	    alert("您的浏览器不支持复制操作，请换一个浏览器试试");
	}
}
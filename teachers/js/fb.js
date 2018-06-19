var fbWords = ""; 
var studentName = "他";
var feedbackTxts = [];
function setContents() {
	feedbackTxts = [
		{
			lbName: "喜欢编程",
			contents: [studentName + "非常喜欢编程。", studentName + "对编程兴趣非常大。"]
		},
		{
			lbName: "喜欢尝试",
			contents: [studentName + "喜欢自己去尝试很多的有意思的东西。", studentName + "努力实现自己的新想法。"]
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
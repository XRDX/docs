var outLink = "http://in.leaplearner.com/file/sharing/";
var inLink = "http://192.168.0.30/file/sharing/";
var usedLink = inLink;
var courseFiles = [
	{
		title: "1 连点成画", //课程标题
		info: "本节课将用线段完成连点成画的任务，教学重点是坐标概念和线段的绘制，难点是理解坐标与位置的关系以及线段的定义和绘制两步法。",
		preview: {PDF: "",MD: ""}, //预习资料
		handbook: "Gtz7vJWmx", //教师手册
		video: "", //教学视频
		ppt: "wLI6qg784", //教学课件
		project: "dotStar", //成品链接
		rsc: {img: [], music: []}, //资源链接
		knowledge: {PDF: "o3QXLGltt", MD: "HkbFwaPzt"}, //知识小结
		testlink: "http://cn.mikecrm.com/8gHFpc3", //答题链接
		feedback: "本节课的我们主要学习了开发环境的基本操作、画布尺寸的设置以及线段的定义和绘制。" //课后反馈
	},
	{
		title: "2 创意绘画(1)", //课程标题
		info: "本节课将学习圆形对象和长方形对象的创建和绘制，并将用它们完成图像创作。",
		preview: {PDF: "kJRsTy1nw", MD: "7NgtuGwq9"
			}, //预习资料
		handbook: "hVQX7SIYm", //教师手册
		video: "", //教学视频
		ppt: "URC9G6bhe", //教学课件
		project: "face", //成品链接
		rsc: {img: [], music: []}, //资源链接
		knowledge: {PDF: "xIDU1wSlw", MD: "AW0vzukCD"
			},  //知识小结
		testlink: "http://cn.mikecrm.com/ihVcbZU", //答题链接
		feedback: "本节课我们学习了圆形和长方形的创建和绘制，同时我们学习了如何修改图形的样式，以及以不同的绘制方式绘制图形，这些知识都是在未来的项目中会经常接触到的。" //课后反馈
	},
	{
		title: "3 创意绘画(2)", //课程标题
		info: "本节课要学习的是三角形、多边形和椭圆形对象的创建和使用，我们会用一个风车图案作为例子。",
		preview: {PDF: "GX4mFI7Xd", MD: "zSpf3POHL"}, //预习资料
		handbook: "sThf6LjaM", //教师手册
		video: "", //教学视频
		ppt: "oThxFWOaO", //教学课件
		project: "windmill", //成品链接
		rsc: {img: [], music: []}, //资源链接
		knowledge: {PDF: "Fcpayh6pg", MD: "h0gUWF5v7"},  //知识小结
		testlink: "http://cn.mikecrm.com/MzEOvb1", //答题链接
		feedback: "本节课我们学习了三种比较复杂的图形对象：三角形、多边形和椭圆形，通过这些图形对象，我们能够创作更加复杂和丰富的图形作品。" //课后反馈
	},
	{
		title: "4 风车国度", //课程标题
		info: "本节课我们将学习对象和类的概念，同时我们会学会使用对象的属性和方法，使用本节课的知识，可以让风车扇叶旋转一个角度。",
		preview: {PDF: "71uk7sPvF", MD: "OIReps9l6"}, //预习资料
		handbook: "", //教师手册
		video: "", //教学视频
		ppt: "p7LgOGDFc", //教学课件
		project: "windmillRotate", //成品链接
		rsc: {img: [], music: []}, //资源链接
		knowledge: {PDF: "3tBiiegjm", MD: "pjzPL3yOl"},  //知识小结
		testlink: "http://cn.mikecrm.com/YfjA25Y", //答题链接
		feedback: "本节课我们学习了类和对象的概念，这两个概念在编程中非常重要，可以联系生活中的例子来理解。同时，我们学习了如何使用对象的属性和方法，完成更加丰富的图形功能。" //课后反馈
	},
	{
		title: "5 旋转风车", //课程标题
		info: "这节课的主要知识是变量和setInterval函数，在这节课中，我们将让之前做好的风车转动起来，完成旋转动画效果。",
		preview: {PDF: "iAY0I9NZg", MD: "PprWQpezg"}, //预习资料
		handbook: "", //教师手册
		video: "", //教学视频
		ppt: "PIiR7c6WO", //教学课件
		project: "windmillRotating", //成品链接
		rsc: {img: [], music: []}, //资源链接
		knowledge: {PDF: "RAKMyzaEW", MD: "JoJKdgL5B"},  //知识小结
		testlink: "http://cn.mikecrm.com/WPeQ6B8", //答题链接
		feedback: "在这堂课中，我们了解了电影与动画的原理，并利用这种原理完成了动画效果。在完成动画效果的过程中，我们学习了变量和setInterval函数。在以后的项目中，我们将逐渐发现这两个知识点非常重要，会被反复使用，一定要牢牢掌握。" //课后反馈
	}
	// 	title: "6 认识函数", //课程标题
	// 	title: "7 函数的应用", //课程标题
	// 	title: "8 动画的实现", //课程标题
	// 	title: "9 图片与文字对象", //课程标题
	// 	title: "10 键盘钢琴", //课程标题
	// 	title: "11 认识if语句", //课程标题
	// 	title: "12 if语句应用：图片拼接", //课程标题
	// 	title: "13 if语句应用：反弹效果", //课程标题
	// 	title: "14 鼠标点击事件", //课程标题
	// 	title: "15 对象点击事件", //课程标题
];
function loadList() {
	while(document.getElementById('courselist').hasChildNodes()) {
        document.getElementById('courselist').removeChild(document.getElementById('courselist').firstChild);
    }
	for (let i in courseFiles) {
		let li = document.createElement('li');
		li.className = "list-group-item";
		li.innerText = courseFiles[i]["title"];
		li.onclick = function() {
			document.getElementById("lessonTitle").innerText = courseFiles[i]["title"];
			document.getElementById("lessonInfo").innerText = courseFiles[i]["info"];

			//预习资料：pdf和markdown两种格式
			if (courseFiles[i]["preview"]["PDF"] !== "") {
				document.getElementById("prePDF").innerText = "PDF";
				document.getElementById("prePDF").className = "btn btn-primary";
				document.getElementById("prePDF").href = usedLink + courseFiles[i]["preview"]["PDF"];
			}
			else {
				document.getElementById("prePDF").innerText = "PDF待上传";
				document.getElementById("prePDF").className = "btn btn-default disabled";
			}
			if (courseFiles[i]["preview"]["MD"] !== "") {
				document.getElementById("preMd").innerText = "Markdown";
				document.getElementById("preMd").className = "btn btn-primary";
				document.getElementById("preMd").href = usedLink + courseFiles[i]["preview"]["MD"];
			}
			else {
				document.getElementById("preMd").innerText = "MD待上传";
				document.getElementById("preMd").className = "btn btn-default disabled";
			}
			//教师手册：pdf格式
			if (courseFiles[i]["handbook"] !== "") {
				document.getElementById("hdBook").innerText = "下载";
				document.getElementById("hdBook").className = "btn btn-primary";
				document.getElementById("hdBook").href = usedLink + courseFiles[i]["handbook"];
			}
			else {
				document.getElementById("hdBook").innerText = "待上传";
				document.getElementById("hdBook").className = "btn btn-default disabled";
			}
			//授课视频：在线观看
			if (courseFiles[i]["video"] !== "") {
				document.getElementById("teachVideo").innerText = "观看";
				document.getElementById("teachVideo").className = "btn btn-primary";
				document.getElementById("teachVideo").href = usedLink + courseFiles[i]["video"];
			}
			else {
				document.getElementById("teachVideo").innerText = "待上传";
				document.getElementById("teachVideo").className = "btn btn-default disabled";
			}
			//教学课件：ppt格式
			if (courseFiles[i]["ppt"] !== "") {
				document.getElementById("ppt").innerText = "下载";
				document.getElementById("ppt").className = "btn btn-primary";
				document.getElementById("ppt").href = usedLink + courseFiles[i]["ppt"];
			}
			else {
				document.getElementById("ppt").innerText = "待上传";
				document.getElementById("ppt").className = "btn btn-default disabled";
			}
			//成品链接：跳转，隐藏了代码
			if (courseFiles[i]["project"] !== "") {
				document.getElementById("plink").innerText = "查看";
				document.getElementById("plink").className = "btn btn-primary";
				document.getElementById("plink").href = "showproject.html?pName=" + courseFiles[i]["project"];
			}
			else {
				document.getElementById("plink").innerText = "待上传";
				document.getElementById("plink").className = "btn btn-default disabled";
			}
			//项目资源：图片和音乐
			if (courseFiles[i]["rsc"]["img"].length === 0 && courseFiles[i]["rsc"]["music"].length === 0) {
				document.getElementById("pjRsc").innerText = "无需额外资源";
				document.getElementById("pjRsc").className = "btn btn-default disabled";
			}
			else {
				document.getElementById("pjRsc").innerText = "查看";
				document.getElementById("pjRsc").className = "btn btn-primary";
				document.getElementById("pjRsc").href = "resources.html?rscID=" + i;
			}
			//知识小结和课后习题：pdf和markdown两种格式
			if (courseFiles[i]["knowledge"]["PDF"] !== "") {
				document.getElementById("klgPDF").innerText = "PDF";
				document.getElementById("klgPDF").className = "btn btn-primary";
				document.getElementById("klgPDF").href = usedLink + courseFiles[i]["knowledge"]["PDF"];
			}
			else {
				document.getElementById("klgPDF").innerText = "PDF待上传";
				document.getElementById("klgPDF").className = "btn btn-default disabled";
			}
			if (courseFiles[i]["knowledge"]["MD"] !== "") {
				document.getElementById("klgMd").innerText = "Markdown";
				document.getElementById("klgMd").className = "btn btn-primary";
				document.getElementById("klgMd").href = usedLink + courseFiles[i]["knowledge"]["MD"];
			}
			else {
				document.getElementById("klgMd").innerText = "MD待上传";
				document.getElementById("klgMd").className = "btn btn-default disabled";
			}
			//答题链接：跳转，复制链接到群里
			if (courseFiles[i]["testlink"] !== "") {
				document.getElementById("testLink").innerText = "查看";
				document.getElementById("testLink").className = "btn btn-primary";
				document.getElementById("testLink").href = usedLink + courseFiles[i]["testlink"];
			}
			else {
				document.getElementById("testLink").innerText = "待添加";
				document.getElementById("testLink").className = "btn btn-default disabled";
			}
			//课后反馈参考：知识+表现
			document.getElementById("feedback").innerText = "开始撰写";
			document.getElementById("feedback").className = "btn btn-primary";
			document.getElementById("feedback").href = "feedback.html?fbID=" + i;
		};
		document.getElementById('courselist').appendChild(li);
	}
}
function loadCode() {
	document.getElementById("gamecode").src = "games/" + GetRequest()["pName"] + ".js";
}
function GetRequest() {   
   var url = location.search; //获取url中"?"符后的字串   
   var theRequest = new Object();   
   if (url.indexOf("?") != -1) {   
      var str = url.substr(1);   
      strs = str.split("&");   
      for(var i = 0; i < strs.length; i ++) {   
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
      }   
   }   
   return theRequest;   
}
function loadRsc() {
	let rscID = GetRequest()["rscID"];
	let imgBox = document.getElementById("imgbox");
	let musicBox = document.getElementById("musicbox");
	let lessonRsc = courseFiles[rscID]["rsc"];
	if (lessonRsc["img"].length > 0) {
		for (let i in lessonRsc["img"]) {
			let a = document.createElement("div");
			a.className = "col-sm-6 col-md-3";
			let b = document.createElement("div");
			b.className = "thumbnail";
			let c = imgBox.appendChild(a).appendChild(b);
			a = document.createElement("img");
			a.src = lessonRsc["img"][i];
			c.appendChild(a);
			b = document.createElement("p");
			b.innerText = lessonRsc["img"][i];
			b.style.wordBreak = "break-all";
			c.appendChild(b);
		}
	}
	else {
		let iTxt = document.createElement("p");
		iTxt.style.fontFamily = "微软雅黑";
		iTxt.style.fontSize = 20;
		iTxt.style.padding = 5;
		iTxt.innerText = "没有图片资源";
		imgBox.appendChild(iTxt);
	}
	if (lessonRsc["music"].length > 0) {
		for (let i in lessonRsc["music"]) {
			let a = document.createElement("div");
			a.className = "col-sm-6 col-md-6";
			let b = document.createElement("div");
			b.className = "thumbnail";
			let c = musicBox.appendChild(a).appendChild(b);
			a = document.createElement("audio");
			a.src = lessonRsc["music"][i];
			a.controls = "controls";
			c.appendChild(a);
			b = document.createElement("p");
			b.innerText = lessonRsc["music"][i];
			b.style.wordBreak = "break-all";
			c.appendChild(b);
		}
	}
	else {
		let iTxt = document.createElement("p");
		iTxt.style.fontFamily = "微软雅黑";
		iTxt.style.fontSize = 20;
		iTxt.style.padding = 5;
		iTxt.innerText = "没有音乐资源";
		musicBox.appendChild(iTxt);
	}
}
function inNet() {
	usedLink = inLink;
	loadList();
	alert("已切换为内网模式,请重新选择左侧课程列表以刷新链接");
}
function outNet() {
	usedLink = outLink;
	loadList();
	alert("已切换为外链模式,请重新选择左侧课程列表以刷新链接");
}


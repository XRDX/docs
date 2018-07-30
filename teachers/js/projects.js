var JSEditor;

function loadPjList() {
  var pj;
  var pjHtml = "";
  for (let i = 0; i < JS2Projects.length; i++) {
    pj = JS2Projects[i];
    pjHtml = '<div class="col-sm-6 col-md-3"><a href="project.html?pjID=' + i + '" class="thumbnail"><img src=' + pj.coverImg + '><div class="caption"><h4>' + pj.name + '</h4><p>| 课时数：' + pj.times + ' | 难度：' + pj.difficulty + ' |</p></div></a></div>';
    $("#pjList").append(pjHtml);
  }
}
function loadProject() {
  let pjID = GetRequest()["pjID"];
  ace.require("ace/ext/language_tools");
  JSEditor = ace.edit("code");
  JSEditor.setOptions({
    mode: "ace/mode/javascript",
    theme: '',
    enableLiveAutocompletion: true,//智能补全  
    fontFamily: 'Courier New',
    fontSize: 16,
    showPrintMargin: false,
    useSoftTabs: true,
    navigateWithinSoftTabs: true,
    wrapBehavioursEnabled: true,
    autoScrollEditorIntoView: true,
    wrap: true,
  });
  var pj = JS2Projects[pjID];
  var new_li;
  $("#projectName").text(pj.name);
  $("#times").text("课时数：" + pj.times);
  $("#difficulty").text("难度：" + pj.difficulty);
  $("#info").text(pj.info);
  $("#material").attr("href", pj.material);
  $("#coverImg").attr("src", pj.coverImg);
  for (let i = 1; i <= pj.times; i++) {
    $("#lessons").append('<li style="margin-top:15px; margin-right:5px;"><a data-toggle="tab" href="projects/' + pj.name + '/Lesson' + i + '.js">Lesson ' + i + '</a></li>');
  }
  $(function () {
    $('li a').click(function (e) {
      var link = $(this).attr('href')
      if(link.slice(-2) === 'js'){
        e.preventDefault()
        loadFile(link)
      }
    })
  })
  loadFile("projects/" + pj.name + "/Lesson1.js");
}

function loadPj() {
  let pjID = GetRequest()["pName"];
  ace.require("ace/ext/language_tools");
  JSEditor = ace.edit("code");
  JSEditor.setOptions({
    mode: "ace/mode/javascript",
    theme: '',
    enableLiveAutocompletion: true,//智能补全  
    fontFamily: 'Courier New',
    fontSize: 16,
    showPrintMargin: false,
    useSoftTabs: true,
    navigateWithinSoftTabs: true,
    wrapBehavioursEnabled: true,
    autoScrollEditorIntoView: true,
    wrap: true,
  });
  // var pj = JS2Projects[pjID];
  // var new_li;
  // $("#projectName").text(pj.name);
  // $("#times").text("课时数：" + pj.times);
  // $("#difficulty").text("难度：" + pj.difficulty);
  // $("#info").text(pj.info);
  // $("#material").attr("href", pj.material);
  // $("#coverImg").attr("src", pj.coverImg);
  // for (let i = 1; i <= pj.times; i++) {
  //   $("#lessons").append('<li style="margin-top:15px; margin-right:5px;"><a data-toggle="tab" href="projects/' + pj.name + '/Lesson' + i + '.js">Lesson ' + i + '</a></li>');
  // }
  // $(function () {
  //   $('li a').click(function (e) {
  //     var link = $(this).attr('href')
  //     if(link.slice(-2) === 'js'){
  //       e.preventDefault()
  //       loadFile(link)
  //     }
  //   })
  // })
  loadFile("games/" + pjID + ".js");
}

function iframeHtml () {
  var html = ''
  var text = JSEditor.getValue();
   
  html += `
  <html>
  <body>
    <script src="js/LLEG.min.js"></script>
    <script>
      let _logY = 0;
      const _log = console.log;
      function _to2(n){ return n<10 ? "0"+n : n};
      function _to3(n){ 
        if(n<10) return "00" + n;
        if(n<100) return "0" + n;
        return n;
      }
      console.log = function(obj){
        a = new Date(); 
        str = [_to2(a.getHours()), _to2(a.getMinutes()), _to2(a.getSeconds())].join(":")  
        + "." + _to3(a.getMilliseconds()) + " " + JSON.stringify(obj);
        text(str, 10, 10 + 20 * _logY++);
        _log(obj);
      }
    </script>
    <script>
  `;

  html += text

  html += `
    </script>
  </body>
  `;
  return html;
}

function submit () {
  var el = document.getElementsByTagName('iframe')[0];
  el.parentNode.removeChild(el);

  var iframe = document.createElement('iframe');
  document.querySelector('div#output').appendChild(iframe);

  var iframeDoc = iframe.contentDocument;

  iframeDoc.open();
  iframeDoc.write(iframeHtml());
  iframeDoc.close();
  iframe.focus();
}

function loadFile (file) {
  // alert(file);
  $.ajax({
    type: 'get',
    url: file,
    dataType: 'text',
    success: function (content) {
      JSEditor.setValue(content);
      JSEditor.gotoLine(1);
      submit()
    }
  })

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
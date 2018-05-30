function loadFile (file) {
  $.ajax({
    type: 'get',
    url: file,
    dataType: 'text',
    success: function (content) {
      var converter = new showdown.Converter(),
      html = `
      <html>
      <head>
        <link href="style/github-markdown.min.css" rel="stylesheet">
        <link href="style/github.css" rel="stylesheet">
        
      </head>

      <body class="markdown-body">
      `
      html += converter.makeHtml(content);

      html += `
        <script src="https://cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>
      `

      var el = document.getElementsByTagName('iframe')[0]
      el.parentNode.removeChild(el)

      var iframe = document.createElement('iframe')
      document.querySelector('div#markdown').appendChild(iframe)

      var iframeDoc = iframe.contentDocument

      iframeDoc.open()
      iframeDoc.write(html)
      iframeDoc.close()

      iframe.focus()
    }
  })
}

$(function () {
  $('li a').click(function (e) {
    var link = $(this).attr('href')
    if(link.slice(-2) === 'md'){
      e.preventDefault()
      loadFile(link)
    }
  })
})
  
let header = `
<nav class="navbar sticky-top navbar-expand-lg navbar-light" style="background-color: #ff9c0f;">
  <a class="navbar-brand" href="../">LeapLearner</a>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          参考手册
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="../pages/methods.html">绘图函数</a>
          <a class="dropdown-item" href="../pages/shapes.html">简单图形</a>
          <a class="dropdown-item" href="../pages/styles.html">参考样式</a>
          <a class="dropdown-item" href="../pages/canvas.html">画布方法</a>
          <a class="dropdown-item" href="../pages/events.html">事件</a>
          <a class="dropdown-item" href="../pages/animations.html">动画效果</a>
          <a class="dropdown-item" href="../pages/physics.html">物理效果</a>
        </div>
      </li>
      <a class="nav-link active" href="#">JS教程</a>
      <a class="nav-link active" href="../pages/projects.html">项目合辑</a>
      <a class="nav-link active" href="../pages/games.html">游戏合辑</a>
      <a class="nav-link active" href="../pages/ide.html">在线IDE</a>
    </ul>
</nav>
`;

let footer = `
<nav class="navbar sticky-bottom navbar-expand-lg navbar-dark bg-dark">
  <span class="navbar-brand mb-0 h1">友情链接</span>
  <div class="collapse navbar-collapse">
    <div class="navbar-nav">
      <a class="nav-item nav-link disabled" target="_blank" href="https://www.leaplearner.com">官网</a>
      <a class="nav-item nav-link disabled" target="_blank" href="https://code.leaplearner.com" target="_blank">在线IDE</a>
      <a class="nav-item nav-link disabled" target="_blank" href="http://cs.leaplearner.com">cs链接</a>
      <!-- <a class="nav-item nav-link disabled" href="#">Disabled</a> -->
    </div>
  </div>
</nav>
`;


function load(){
  $("header").html(header);
  $("footer").html(footer);

  loadFile('introduction/history.md')
}

---
layout: post
title: Python基础执行Python程序的三种方式
date: 2022-08-01 10:52:32 +0800
categories: [python]
tags: [python,pycharm,ide]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=126094740
    alt: Python基础执行Python程序的三种方式
artid: 126094740
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【Python基础】执行Python程序的三种方式
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p id="main-toc">
     <strong>
      目录
     </strong>
    </p>
    <p id="%E4%B8%80%E3%80%81%E6%89%A7%E8%A1%8CPython%E7%A8%8B%E5%BA%8F%E7%9A%84%E4%B8%89%E7%A7%8D%E6%96%B9%E5%BC%8F-toc" style="margin-left:0px;">
     <a href="#%E4%B8%80%E3%80%81%E6%89%A7%E8%A1%8CPython%E7%A8%8B%E5%BA%8F%E7%9A%84%E4%B8%89%E7%A7%8D%E6%96%B9%E5%BC%8F" rel="nofollow">
      执行Python程序的三种方式
     </a>
    </p>
    <p id="%E8%A7%A3%E9%87%8A%E5%99%A8-toc" style="margin-left:40px;">
     <a href="#%E8%A7%A3%E9%87%8A%E5%99%A8" rel="nofollow">
      解释器
     </a>
    </p>
    <p id="python%20%2F%20python3-toc" style="margin-left:80px;">
     <a href="#python%20%2F%20python3" rel="nofollow">
      python / python3
     </a>
    </p>
    <p id="%E5%85%B6%E4%BB%96%E8%A7%A3%E9%87%8A%E5%99%A8-toc" style="margin-left:80px;">
     <a href="#%E5%85%B6%E4%BB%96%E8%A7%A3%E9%87%8A%E5%99%A8" rel="nofollow">
      其他解释器
     </a>
    </p>
    <p id="%C2%A0%20%E4%BA%A4%E4%BA%92%E5%BC%8F%E8%BF%90%E8%A1%8CPython%E7%A8%8B%E5%BA%8F-toc" style="margin-left:40px;">
     <a href="#%C2%A0%20%E4%BA%A4%E4%BA%92%E5%BC%8F%E8%BF%90%E8%A1%8CPython%E7%A8%8B%E5%BA%8F" rel="nofollow">
      交互式运行Python程序
     </a>
    </p>
    <p id="Python%E7%9A%84IDE%20%E2%80%94%E2%80%94%20PyCharm-toc" style="margin-left:40px;">
     <a href="#Python%E7%9A%84IDE%20%E2%80%94%E2%80%94%20PyCharm" rel="nofollow">
      Python的IDE —— PyCharm
     </a>
    </p>
    <p id="%E4%BB%8B%E7%BB%8DIDE-toc" style="margin-left:80px;">
     <a href="#%E4%BB%8B%E7%BB%8DIDE" rel="nofollow">
      介绍IDE
     </a>
    </p>
    <p id="PyCharm-toc" style="margin-left:80px;">
     <a href="#PyCharm" rel="nofollow">
      PyCharm
     </a>
    </p>
    <hr id="hr-toc"/>
    <p>
    </p>
    <h2 id="%E4%B8%80%E3%80%81%E6%89%A7%E8%A1%8CPython%E7%A8%8B%E5%BA%8F%E7%9A%84%E4%B8%89%E7%A7%8D%E6%96%B9%E5%BC%8F">
     执行Python程序的三种方式
    </h2>
    <h3 id="%E8%A7%A3%E9%87%8A%E5%99%A8">
     解释器
    </h3>
    <h4 id="python%20%2F%20python3">
     python / python3
    </h4>
    <pre><code># 使用python 2.x 解释器
$ python xxx.py

# 使用python 3.x 解释器
$ python3 xxx.py

# 【注】python源程序的文件扩展名一般都是.py ， 上述xxx.py指的是python的程序文件名。</code></pre>
    <p>
     在使用python解释器执行程序时，操作系统会首先让CPU把Python解释器的程序复制到内存中，然后Python解释器根据语法规则，从上向下让CPU翻译Python程序中的代码，最后CPU负责执行翻译完成的代码。
    </p>
    <p>
     退出官方解释器的方法：
    </p>
    <pre><code># 第一种
&gt;&gt;&gt;exit()

# 第二种
# 使用快捷键 ctrl + d 即可退出解释器</code></pre>
    <h4 id="%E5%85%B6%E4%BB%96%E8%A7%A3%E9%87%8A%E5%99%A8">
     其他解释器
    </h4>
    <ul>
     <li>
      CPython —— 官方版本的C语言实现
     </li>
     <li>
      Jython —— 可以运行在Java平台
     </li>
     <li>
      IronPython —— 可以运行在.NET和Mono平台
     </li>
     <li>
      PyPy —— Python实现的，支持JIT即时编译
     </li>
    </ul>
    <h3 id="%C2%A0%20%E4%BA%A4%E4%BA%92%E5%BC%8F%E8%BF%90%E8%A1%8CPython%E7%A8%8B%E5%BA%8F">
     交互式运行Python程序
    </h3>
    <p>
     交互式运行python程序是直接在终端中运行解释器，而不输入要执行的文件名。在Pyhton的Shell中直接输入Python的代码，会立即看到程序执行结果。
    </p>
    <p>
     这种运行方式对于想要验证Python语法或者局部代码的使用者比较友好，但是其缺陷也很明显——代码不能保存，也不适合运行太大的程序。
    </p>
    <p>
     下面介绍一下我们想要以交互式运行python程序通常首选的一个Shell —— IPython
    </p>
    <p>
     IPython是一个基于BSD开源的python的交互式shell，比默认的python shell好用的多
    </p>
    <p>
     IPython的特点：
    </p>
    <ul>
     <li>
      支持自动补全
     </li>
     <li>
      自动缩进
     </li>
     <li>
      支持bash shell命令
     </li>
     <li>
      内置了许多很有用的功能和函数
     </li>
    </ul>
    <p>
     想要退出IPython的两种方式：
    </p>
    <pre><code># 第一种
&gt;&gt;&gt;exit

# 第二种
# 使用快捷键 ctrl + d ，ipython会询问你是否退出</code></pre>
    <h3 id="Python%E7%9A%84IDE%20%E2%80%94%E2%80%94%20PyCharm">
     Python的IDE —— PyCharm
    </h3>
    <h4 id="%E4%BB%8B%E7%BB%8DIDE">
     介绍IDE
    </h4>
    <p>
     IDE就是集成开发环境的缩写，即集成了开发软件需要的所有工具，一般包括以下工具：
    </p>
    <ul>
     <li>
      图形用户界面
     </li>
     <li>
      代码编辑器（支持代码补全 / 自动缩进）
     </li>
     <li>
      编译器 / 解释器
     </li>
     <li>
      调试器（断点 / 单步执行）
     </li>
     <li>
      ……
     </li>
    </ul>
    <h4 id="PyCharm">
     PyCharm
    </h4>
    <p>
     PyCharm是Python的一款非常优秀的集成开发环境，它除了具有一般IDE所必备的功能外，还可以在Windows、Linux、macOS下使用，比较适合开发一些大型项目。
    </p>
   </div>
  </div>
 </article>
</div>



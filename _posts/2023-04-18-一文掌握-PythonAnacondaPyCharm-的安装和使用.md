---
layout: post
title: 一文掌握-PythonAnacondaPyCharm-的安装和使用
date: 2023-04-18 10:33:15 +0800
categories: [开发工具/开发语言]
tags: [开发语言,python,pycharm,conda]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=130106877
    alt: 一文掌握-PythonAnacondaPyCharm-的安装和使用
artid: 130106877
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     一文掌握 Python、Anaconda、PyCharm 的安装和使用
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-tomorrow-night-eighties" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/6fbc2ad2b6cd7e7a45bcb3e4a540af32.webp?x-image-process=image/format,png#pic_center">
      <br/>
      本文将介绍一个较为全面的 Python 开发环境的搭建与基本使用，包括 Python 解释器的安装使用、PyCharm 编辑器的安装使用、Anaconda 的安装使用和库管理工具 pip 的使用。
     </img>
    </p>
    <blockquote>
     <p>
      <strong>
       PyCharm + Anaconda
      </strong>
      是一个很完备的 Python 开发环境，也是绝大多数开发者使用的开发方式。资深开发者与初学者都是必备。
     </p>
    </blockquote>
    <p>
    </p>
    <div class="toc">
     <h4>
     </h4>
     <ul>
      <li>
       <ul>
        <li>
         <a href="#1_Python__10" rel="nofollow">
          1. Python 解释器的下载安装
         </a>
        </li>
        <li>
         <a href="#2__pip_32" rel="nofollow">
          2. 库管理工具 pip
         </a>
        </li>
        <li>
         <a href="#3_Anaconda__39" rel="nofollow">
          3. Anaconda 的下载安装
         </a>
        </li>
        <li>
         <a href="#4_PyCharm__60" rel="nofollow">
          4. PyCharm 编辑器的下载安装
         </a>
        </li>
        <li>
         <a href="#_94" rel="nofollow">
          本期推荐
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <hr/>
    <h3>
     <a id="1_Python__10">
     </a>
     1. Python 解释器的下载安装
    </h3>
    <p>
     使用 Python 语言进行开发，需要先安装 Python
     <code>
      解释器
     </code>
     。Python 解释器的作用是将 Python 源码高级语言解释为二进制机器语言。通常我们说安装 Python 其实就是指安装 Python 解释器。
    </p>
    <p>
     进入 Python 解释器下载地址
     <font color="#999">
      （https://www.python.org/downloads/）
     </font>
     ，选择对应系统的解释器；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c842c5e525308d3500376b195eeff683.png#pic_center">
      <br/>
      通常下载最新的即可，点击进入 3.11.3 版本；
     </img>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e93debe70c537778b16ee7579d34455e.png#pic_center">
      <br/>
      找到安装文件进行下载；
     </img>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/337717b14b5a10ecaf3cd06f26104a36.png#pic_center">
      <br/>
      下载成功之后是这样的一个 .exe 工具，双击运行；
     </img>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5733a733966f8c3df18a07eb83328bbc.png#pic_center">
      <br/>
      运行之后进入安装界面，选择自动安装即可，点击安装之前记得勾选“Add python.exe to PATH”，也就是将 Python 添加至环境变量，后续则不必手动添加；
     </img>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e72c13d5d3adacada2e36bce01dbe24e.png#pic_center">
      <br/>
      安装成功之后在开始菜单搜索 “Python”，就可以看到其安装的内容，共包含四个文件；
     </img>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/347778f54b6bf184a4c81d20c9aaadbc.png#pic_center"/>
    </p>
    <h3>
     <a id="2__pip_32">
     </a>
     2. 库管理工具 pip
    </h3>
    <p>
     Python 最大的优点在于其有着丰富的库，通过其库管理工具
     <code>
      pip
     </code>
     (package installer for Python) 可安装、卸载、更新众多的库。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b2e19a7b0c70628d71eaae5fd1eedf4b.png#pic_center"/>
    </p>
    <p>
     需要注意 Python 3.4 以后版本的解释器自带 pip 工具，如果我们安装的是 3.4 版本以后的解释器就无需手动安装 pip 了。如需安装，可进入网址（
     <font color="#999">
      https://pypi.org/project/pip/
     </font>
     ）下载。
    </p>
    <h3>
     <a id="3_Anaconda__39">
     </a>
     3. Anaconda 的下载安装
    </h3>
    <p>
     Anaconda 是一个开源的 Python 发行版本，其包含 conda、Python 等 180 多个科学包及其依赖项。如果我们安装了 Anaconda，有很多第三方库就不需要手动去使用 pip 指令安装了，因为它们都已集成在了 Anaconda 中，开发效率会有很大的提升。
    </p>
    <p>
     Anaconda 的下载很简单，进入官网（
     <font color="#999">
      https://www.anaconda.com/
     </font>
     ）直接下载即可；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d675fd20182565f485bb7563446651ac.png#pic_center">
      <br/>
      下载成功之后是这样的一个 .exe 工具，双击运行；
     </img>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/71b45c4efc195fcbdc00b5d0b67f5fa6.png#pic_center"/>
     <br/>
     操作方式很简单，一直点击下一步；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a7cd1629e33305d3e8597eab00d3dad8.png#pic_center"/>
     <br/>
     安装成功之后，在开始菜单搜索 “Anaconda”，就可以看到其安装的内容；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e1e17924b5fd2ef085309a17869fa3c5.png#pic_center"/>
     <br/>
     打开 “Anaconda Navigator” 主页面如下，可以看到这里面已经为我们安装好了一些工具，都可以直接使用；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/52df01701c0f88b2af6b0a1b409d511b.png#pic_center"/>
     <br/>
     在“Environments”选项中可以看到 python 常用的一些库；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/09d67d3af716ab2effbdbfc55ab01184.png#pic_center"/>
    </p>
    <h3>
     <a id="4_PyCharm__60">
     </a>
     4. PyCharm 编辑器的下载安装
    </h3>
    <p>
     <code>
      编辑器
     </code>
     也就是我们具体写代码的工具。Python 的编辑器有很多，包括 Python 解释器自带的 IDLE、基于 ipython 的 Jupyter Notebook，还有 PyCharm、Spyder、WingIDE 等主要针对 Python 语言的编辑器，此外像 VSCode、Sublime 等开发工具也都是支持 Python 开发的。本文我们以
     <code>
      PyCharm
     </code>
     来进行操作演示，相较于 Python 解释器自带的 IDLE，PyCharm 功能更加全面且各方面体验感更好。
    </p>
    <p>
     进入 PyCharm 编辑器下载地址（
     <font color="#999">
      https://www.jetbrains.com/pycharm/download/#section=windows
     </font>
     ），同样选择对应的系统版本下载。这里有 Professional 专业版和 Community 社区版两种版本可选择，作为个人开发者选择社区版即可，因为它是免费的。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ccdba00f8913b5d2b1fcfa4c99e3195c.png#pic_center"/>
     <br/>
     下载成功之后是这样的一个 .exe 工具，双击运行；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b466e75306c15f75c90e19b0402e01e2.png#pic_center"/>
     <br/>
     随后一直下一步即可；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d24e62bd7eb42e4d16aa587da0bbacfa.png#pic_center"/>
     <br/>
     安装成功后运行 PyCharm，初始界面如下；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a44446c8996eda0ed36c5a504fad7bb7.png#pic_center"/>
     <br/>
     要知道 PyCharm 只是一个编辑器，只能让我们编写代码而不能执行和解释代码。所以需要在该编辑器中关联 python 解释器。点击新建项目；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9a48b6c325f43c1e4cb1c66bd87cfa68.png#pic_center"/>
     <br/>
     在基本解释器“Base interpreter”的位置配置我们已经下载好的 Python 解释器，通常会自动配置，只要看到这里显示地址即可。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/558a5e91ae98bc2e4b94379b59a3394d.png#pic_center"/>
     <br/>
     接下来我们创建一个新的 python 项目；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/22d4cf6a9e3b3bb27e4df4285c44fb50.png#pic_center"/>
     <br/>
     创建成功后项目文件结构如下，选中项目名称后右键，新建 python 文件用于开发项目；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/7bdd0e3ac80bd16cd45abc26a3b7b534.png#pic_center"/>
     <br/>
     main.py 就是项目默认为我创建的一个 python 文件；
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ca0b9a8312b246d18e21954efdf3d703.png#pic_center"/>
     <br/>
     至此，python 开发环境就搭建完成了。
    </p>
    <hr/>
    <h3>
     <a id="_94">
     </a>
     本期推荐
    </h3>
    <blockquote>
     <ul>
      <li>
       本期送书：《元宇宙Ⅱ》（全三册：图解元技术区块链 + 元资产与Web 3.0 + 元人与理想国）
      </li>
     </ul>
    </blockquote>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/60e092bb20e01d19c0bb49a42294fd91.png#pic_center"/>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



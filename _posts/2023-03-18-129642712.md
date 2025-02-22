---
layout: post
title: python运行,如何运行python程序
date: 2023-03-18 20:58:35 +0800
categories: [职场和发展]
tags: [职场和发展,开发语言,信息可视化,windows,python]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=129642712
    alt: python运行,如何运行python程序
artid: 129642712
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     python运行，如何运行python程序
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-atom-one-dark" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
     如果机器上已经安装了python开发环境，比如在开发者自己的电脑上运行python程序，则只需要修改.py源代码文件的默认打开方式为pythonlauncher即可，双击python源代码文件即可运行python程序，这种情况在开发者自己使用时极为方便。Pythonlauncher会根据文件头和文件后缀自动选择合适的解释器执行python程序，比如双击.py后缀的文件时会打开控制台程序，双击.pyw后缀的文件时则不会显示控制台而打开的是一个窗口程序。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/07c1740fff07c04961ed292a3b5d88a0.png#pic_center"/>
    </p>
    <p>
     但如果我们需要在没有安装python开发环境的电脑上执行python程序该怎么办呢？比如我需要将开发好的python程序发送给我的朋友去测试，但他的电脑上并没有python开发环境，这时候就需要将python源文件打包成windows可执行的.exe应用程序，打包的过程会将python程序执行所需的源代码、模块和解译器整体打包成一个.exe可执行文件，双击该执行文件即可在没有python开发环境的电脑上运行python程序。
    </p>
    <p>
     打包python源文件成.exe可执行文件需要使用一个第三方模块pyinstaller，安装这个模块只要在命令提示符中输入命令pipinstall pyinstaller即可。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/94c691719e03dd3b6018fb8585be1b90.png#pic_center"/>
    </p>
    <p>
     安装成功后将当前目录更改到.py源文件所在目录，可以在文件资源管理器中复制路径，在命令提示符中使用CD命令更改当前目录。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ac1d322fbc7e2ad32d55203fcb15af19.png#pic_center"/>
    </p>
    <p>
     执行打包命令“pyinstaller源文件.py”，或“pyinstaller-F源文件.py”，不加-F参数会将源文件及其相关文件打包在同一个目录下，加入-F参数后源文件及其相关文件会打包成一个单独的.exe文件中。使用-w参数可以隐藏控制台的显示，比如你的程序是一个窗口应用程序。使用-i可以更改.exe程序的图标，方法是“-i 图标文件路径”。下面以打包一个不带控制台显示的窗口程序为例，输入命令pyinstaller-F test.pyw。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/244a12a31190cd9134d065e216793ad9.png#pic_center"/>
    </p>
    <p>
     打包完成后.exe可执行文件在dist文件夹下，其它三个生成的文件夹__pycache__存放源代码的.pyc编译文件，build中存放打包过程中生成的中间产物，.spec后缀的文件则是打包参数说明，如果重新打包需要将这些生成的目录和文件全部删除。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d440116ddface726f27d5b6386b11b8f.png#pic_center"/>
    </p>
    <p>
     双击.exe可执行文件就可以运行python程序了，现在可以愉快的发给你的朋友进行测试了。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/013933605f20929b7b86cf4d83a95ec5.png#pic_center"/>
    </p>
    <h3>
     <a id="httpsblogcsdnnetJavachichiarticledetails122513096spm1001201430015501Python_31">
     </a>
     <a href="https://blog.csdn.net/Javachichi/article/details/122513096?spm=1001.2014.3001.5501">
     </a>
     关于Python技术储备
    </h3>
    <p>
     学好 Python 不论是就业还是做副业赚钱都不错，但要学会 Python 还是要有一个学习规划。最后大家分享一份全套的 Python 学习资料，给那些想学习 Python 的小伙伴们一点帮助！
    </p>
    <h4>
     <a id="httpsblogcsdnnetJavachichiarticledetails122513096spm1001201430015501httpsblogcsdnnetm0_57081622articledetails122378123spm1001201430015501Python_36">
     </a>
     <a href="https://blog.csdn.net/Javachichi/article/details/122513096?spm=1001.2014.3001.5501">
     </a>
     <a href="https://blog.csdn.net/m0_57081622/article/details/122378123?spm=1001.2014.3001.5501">
     </a>
     一、Python所有方向的学习路线
    </h4>
    <p>
     Python所有方向路线就是把Python常用的技术点做整理，形成各个领域的知识点汇总，它的用处就在于，你可以按照上面的知识点去找对应的学习资源，保证自己学得较为全面。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/0426b4c2e3d69852ceb846faa8ff365f.png"/>
    </p>
    <h4>
     <a id="httpsblogcsdnnetJavachichiarticledetails122513096spm1001201430015501httpsblogcsdnnetm0_57081622articledetails122378123spm1001201430015501_42">
     </a>
     <a href="https://blog.csdn.net/Javachichi/article/details/122513096?spm=1001.2014.3001.5501">
     </a>
     <a href="https://blog.csdn.net/m0_57081622/article/details/122378123?spm=1001.2014.3001.5501">
     </a>
     二、学习软件
    </h4>
    <p>
     工欲善其事必先利其器。学习Python常用的开发软件都在这里了，给大家节省了很多时间。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/d6c45bb1209e386b8e3eead5558e589c.png"/>
    </p>
    <h4>
     <a id="httpsblogcsdnnetJavachichiarticledetails122513096spm1001201430015501httpsblogcsdnnetm0_57081622articledetails122378123spm1001201430015501_50">
     </a>
     <a href="https://blog.csdn.net/Javachichi/article/details/122513096?spm=1001.2014.3001.5501">
     </a>
     <a href="https://blog.csdn.net/m0_57081622/article/details/122378123?spm=1001.2014.3001.5501">
     </a>
     三、入门学习视频
    </h4>
    <p>
     我们在看视频学习的时候，不能光动眼动脑不动手，比较科学的学习方法是在理解之后运用它们，这时候练手项目就很适合了。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/257a471c0e6a44d05079fa1b4eb409c5.png#pic_center"/>
    </p>
    <h4>
     <a id="httpsblogcsdnnetJavachichiarticledetails122513096spm1001201430015501httpsblogcsdnnetm0_57081622articledetails122378123spm1001201430015501_56">
     </a>
     <a href="https://blog.csdn.net/Javachichi/article/details/122513096?spm=1001.2014.3001.5501">
     </a>
     <a href="https://blog.csdn.net/m0_57081622/article/details/122378123?spm=1001.2014.3001.5501">
     </a>
     四、实战案例
    </h4>
    <p>
     光学理论是没用的，要学会跟着一起敲，要动手实操，才能将自己的所学运用到实际当中去，这时候可以搞点实战案例来学习。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/16e27ee7dfd6e25a4f43c8cc6ef06aa7.png"/>
    </p>
    <h4>
     <a id="httpsblogcsdnnetJavachichiarticledetails122513096spm1001201430015501httpsblogcsdnnetm0_57081622articledetails122378123spm1001201430015501_62">
     </a>
     <a href="https://blog.csdn.net/Javachichi/article/details/122513096?spm=1001.2014.3001.5501">
     </a>
     <a href="https://blog.csdn.net/m0_57081622/article/details/122378123?spm=1001.2014.3001.5501">
     </a>
     五、面试资料
    </h4>
    <p>
     我们学习Python必然是为了找到高薪的工作，下面这些面试题是来自阿里、腾讯、字节等一线互联网大厂最新的面试资料，并且有阿里大佬给出了权威的解答，刷完这一套面试资料相信大家都能找到满意的工作。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/3443f3d934f11d6666b3767ac0897763.png"/>
     <br/>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/c8e2e84db42388ae47609830f170add4.png"/>
    </p>
    <h6>
     <a id="httpsblogcsdnnetJavachichiarticledetails122513096spm1001201430015501httpsblogcsdnnetm0_57081622articledetails122378123spm1001201430015501PythonCSDNCSDN100_69">
     </a>
     <a href="https://blog.csdn.net/Javachichi/article/details/122513096?spm=1001.2014.3001.5501">
     </a>
     <a href="https://blog.csdn.net/m0_57081622/article/details/122378123?spm=1001.2014.3001.5501">
     </a>
     这份完整版的Python全套学习资料已经上传CSDN，朋友们如果需要可以微信扫描下方CSDN官方认证二维码免费领取【
     <code>
      保证100%免费
     </code>
     】
    </h6>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/acb9ea26377273bb25e5234fd8f1aa3d.png"/>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



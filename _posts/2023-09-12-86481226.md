---
layout: post
title: Linux下python3.6的下载安装及环境变量的配置,python的实用工具ipython的安装,python的IDE工具pycharm的安装
date: 2023-09-12 16:40:11 +0800
categories: []
tags: []
image:
    path: https://img-blog.csdnimg.cn/2019011421514845.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMzAzMjU0,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150
    alt: Linux下python3.6的下载安装及环境变量的配置,python的实用工具ipython的安装,python的IDE工具pycharm的安装
artid: 86481226
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Linux下python3.6的下载安装及环境变量的配置，python的实用工具ipython的安装，python的IDE工具pycharm的安装
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h4>
     一.前言
    </h4>
    <p>
     目前，有两个主要使用的python版本——2和3，python2已经不再积极发展，但所有的Linux发行版都带有python 2.x的安装。现在使用的基本都是python3版本的。所以本文将演示如何
     <span style="color:#f33b45;">
      在redhat系统上安装python3.6。
     </span>
     自带了的python2版本，尽量不要管他，使用python3.6运行python脚本就好，因为可能有程序依赖目前的python2版本的环境，比如yum！！！！！
    </p>
    <p>
     不要动现有的python2版本的环境！！！！！！！！！
    </p>
    <p>
     那么如何查看redhat系统自带的python的版本呢？
    </p>
    <p>
     &lt;1&gt;方法一：
    </p>
    <blockquote>
     <p>
      [root@server Desktop]# python   --version
      <br/>
      Python
      <span style="color:#f33b45;">
       2.7.5
      </span>
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="37" src="https://i-blog.csdnimg.cn/blog_migrate/ac151b029204bbfda0cf62c6ecbe6010.png" width="493"/>
    </p>
    <p>
     &lt;2&gt;方法二：
    </p>
    <blockquote>
     <p>
      [root@server Desktop]# python
      <br/>
      Python
      <span style="color:#f33b45;">
       2.7.5
      </span>
      (default, Feb 11 2014, 07:46:25)
      <br/>
      [GCC 4.8.2 20140120 (Red Hat 4.8.2-13)] on linux2
      <br/>
      Type "help", "copyright", "credits" or "license" for more information.
      <br/>
      &gt;&gt;&gt;
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="103" src="https://i-blog.csdnimg.cn/blog_migrate/5842699fb151e32039bb4496e9bbe1ad.png" width="810"/>
    </p>
    <p>
     &lt;3&gt;方法三：
    </p>
    <blockquote>
     <p>
      [root@server Desktop]# rpm   -qa   |   grep   python
     </p>
     <p>
      python-
      <span style="color:#f33b45;">
       2.7.5
      </span>
      -16.el7.x86_64
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="84" src="https://i-blog.csdnimg.cn/blog_migrate/a1701f663ecf38166bf6f305cc9be673.png" width="501"/>
    </p>
    <p>
     <img alt="" class="has" height="23" src="https://i-blog.csdnimg.cn/blog_migrate/36c5a0b4f52fcc454ecae2cfbce85ba7.png" width="346"/>
    </p>
    <h4>
     二.Linux下python3.6的安装过程（源码编译安装）
    </h4>
    <p>
     本次实验在虚拟机上进行操作（防止在物理机上编译安装失败导致物理机出现问题。）
    </p>
    <p>
     <strong>
      1.python3.6的安装过程
     </strong>
    </p>
    <p>
     <strong>
      &lt;1&gt;下载python3.6源码安装包
     </strong>
    </p>
    <blockquote>
     <p>
      Python-3.6.6.tgz
     </p>
    </blockquote>
    <p>
     <strong>
      &lt;2&gt;将python3.6的源码安装包进行解压，解压到任意目录。这里解压到桌面
     </strong>
    </p>
    <blockquote>
     <p>
      [root@server Desktop]#
      <span style="color:#f33b45;">
       tar   zxf   Python-3.6.6.tgz
      </span>
      <br/>
      [root@server Desktop]# ls
      <br/>
      Python-3.6.6  Python-3.6.6.tgz
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="59" src="https://i-blog.csdnimg.cn/blog_migrate/036f6e598121e839969c02aadc3611e2.png" width="558"/>
    </p>
    <p>
     <strong>
      &lt;3&gt;准备编译环境——gcc
     </strong>
    </p>
    <blockquote>
     <p>
      [root@server Desktop]# yum   install   gcc   -y
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="124" src="https://i-blog.csdnimg.cn/blog_migrate/d777459424023b68e80fa59aa891d24b.png" width="876"/>
    </p>
    <p>
     <strong>
      &lt;4&gt;安装依赖包
     </strong>
    </p>
    <blockquote>
     <p>
      [root@server Desktop]# yum   install
      <span style="color:#f33b45;">
       zlib   zlib-devel   openssl   openssl-devel   readline   readline-devel
      </span>
      -y       #其中zlib,zlib-devel,openssl,openssl-devel是python的pip所依赖的包；readline,readline-devel是安装好python之后，鼠标左右移动所依赖的包。
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="66" src="https://i-blog.csdnimg.cn/blog_migrate/d0374d284f34e5cfcd21e0301bfd98bc.png" width="896"/>
    </p>
    <p>
     <strong>
      &lt;5&gt;检查（依赖，兼容），预编译（必须在解压之后的目录中进行）
     </strong>
    </p>
    <blockquote>
     <p>
      [root@server Desktop]# cd   Python-3.6.6/
      <br/>
      [root@server Python-3.6.6]# ls
      <br/>
      aclocal.m4    Doc         LICENSE          Objects   pyconfig.h.in
      <br/>
      config.guess  Grammar     Mac              Parser    Python
      <br/>
      config.sub    Include     Makefile.pre.in  PC        README.rst
      <br/>
      <span style="color:#f33b45;">
       configure
      </span>
      install-sh  Misc             PCbuild   setup.py
      <br/>
      configure.ac  Lib         Modules          Programs  Tools
      <br/>
      [root@server Python-3.6.6]#
      <span style="color:#f33b45;">
       ./configure   --prefix=/usr/local/python3.6   --with-ssl
      </span>
      #其中configure是可执行性文件（颜色为绿色的）。./configure相当于执行可行性文件；--prefix是指定安装的目录；--with-ssl其中ssl是pip所依赖的模块。
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/6341021cd7d11587ecf1302ce8a72406.png"/>
    </p>
    <p>
     没有报错，表示预编译成功
    </p>
    <p>
     <img alt="" class="has" height="170" src="https://i-blog.csdnimg.cn/blog_migrate/37d8b594820da51522cd025a5562f5de.png" width="871"/>
    </p>
    <p>
     <strong>
      &lt;6&gt;编译（必须在解压之后的目录中进行）：当然编译和安装可以合并为一步（make  &amp;&amp;  make  install ）
     </strong>
    </p>
    <blockquote>
     <p>
      [root@server Python-3.6.6]# make
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="100" src="https://i-blog.csdnimg.cn/blog_migrate/c9171eb92d720a391ea8515a97de732c.png" width="894"/>
    </p>
    <p>
     没有报错，表示编译成功
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/e4d4e9f2be7785227de9369651ac8ee7.png"/>
    </p>
    <p>
     <strong>
      &lt;7&gt;安装（必须在解压之后的目录中进行）
     </strong>
    </p>
    <blockquote>
     <p>
      [root@server Python-3.6.6]# make   install
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="24" src="https://i-blog.csdnimg.cn/blog_migrate/9dbcb5cea6a02385a6ff766b62dd1bc1.png" width="474"/>
    </p>
    <p>
     显示安装成功
    </p>
    <p>
     <img alt="" class="has" height="98" src="https://i-blog.csdnimg.cn/blog_migrate/100cd194d70e736d13ecfb29df78c71c.png" width="631"/>
    </p>
    <p>
     至此python3.6的安装就结束了。
    </p>
    <blockquote>
     <p>
      此时python已经安装在/usr/local/python3.6目录中，那么/root/Desktop下解压的Python-3.6.6就没有任何意义了，可以删除。
     </p>
     <p>
      进入/usr/local/python3.6目录中的bin目录下，可以看到绿色的可执行文件。执行"./python3.6"就可以进入python3.6的交互界面了。
     </p>
    </blockquote>
    <blockquote>
     <p>
      [root@server Desktop]# cd   /usr/local/python3.6/
      <br/>
      [root@server python3.6]# ls
      <br/>
      bin  include  lib  share
      <br/>
      [root@server python3.6]# cd   bin/
      <br/>
      [root@server bin]# ls
      <br/>
      2to3              idle3.6  pydoc3.6          python3.6m         pyvenv-3.6
      <br/>
      2to3-3.6          pip3     python3           python3.6m-config
      <br/>
      easy_install-3.6  pip3.6
      <span style="color:#86ca5e;">
       python3.6
      </span>
      python3-config
      <br/>
      idle3             pydoc3   python3.6-config  pyvenv
      <br/>
      [root@server bin]#
      <span style="color:#f33b45;">
       ./python3.6
      </span>
      <br/>
      <span style="color:#f33b45;">
       Python 3.6.6
      </span>
      (default, Jan 14 2019, 05:31:29)
      <br/>
      [GCC 4.8.2 20140120 (Red Hat 4.8.2-16)] on linux
      <br/>
      Type "help", "copyright", "credits" or "license" for more information.
      <br/>
      &gt;&gt;&gt;
      <span style="color:#f33b45;">
       exit()                                          #使用exit()或者quit()退出
      </span>
     </p>
     <p>
      [root@server bin]#
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="283" src="https://i-blog.csdnimg.cn/blog_migrate/5471eda6d3c376af9b57597fc7bfffe6.png" width="837"/>
    </p>
    <blockquote>
     <p>
      但是此时输入python3.6会报错，这是因为环境变量还没有配置的原因。
     </p>
    </blockquote>
    <blockquote>
     <p>
      [root@server bin]# python3.6
      <br/>
      <span style="color:#f33b45;">
       bash: python3.6: command not found...
      </span>
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="43" src="https://i-blog.csdnimg.cn/blog_migrate/6846f050d6f15da065d772aea3baf1c7.png" width="555"/>
    </p>
    <p>
     这样进入目录，执行可执行性文件的方法进入python3.6的交互界面的方法，似乎太过复杂，所以，有必要对环境变量进行配置。环境变量的配置过程，如下面的三。
    </p>
    <p>
     <strong>
      2.物理机上安装python3.6
     </strong>
    </p>
    <p>
     这里物理机上安装python3.6有两种方法
    </p>
    <ol>
     <li>
      方法一：安装过程同1python3.6的安装。
     </li>
     <li>
      方法二：将虚拟机上安装python3.6生成的目录，发送到物理机即可（该方法的前提是，虚拟机上已经安装了python3.6）
     </li>
    </ol>
    <p>
     这里推荐使用方法二（这是因为在物理机上编译安装出现问题的话，有可能导致物理机出现问题。）
    </p>
    <p>
     这里采用方法二在物理机上安装python3.6。
    </p>
    <blockquote>
     <p>
      [root@server bin]# scp -rp /usr/local/python3.6/ root@172.25.254.83:/usr/local
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="21" src="https://i-blog.csdnimg.cn/blog_migrate/94126a6ba23f788da0a79e495976b1b3.png" width="882"/>
    </p>
    <p>
     此时物理机上的python3.6也就安装成功了。
    </p>
    <p>
     对环境变量的配置，如下面的三。
    </p>
    <h4>
     三.Linux下python环境变量的配置
     <span style="color:#f33b45;">
      （配置成功之后，不管在哪个目录下，直接执行"python3.6"就可以进入python3.6的交互界面）
     </span>
    </h4>
    <p>
     配置环境变量的目的：让系统帮我找到命令执行的文件路径。
    </p>
    <p>
     配置环境变量的方式有三种，下面会一一介绍这三种方法
    </p>
    <p>
     推荐使用第三种方法。
    </p>
    <p>
     <strong>
      1.临时添加环境变量
     </strong>
    </p>
    <blockquote>
     <p>
     </p>
    </blockquote>
    <p>
    </p>
    <p>
     <strong>
      2.永久添加环境变量
     </strong>
    </p>
    <blockquote>
     <p>
     </p>
    </blockquote>
    <p>
    </p>
    <p>
     <strong>
      3.做软链接（只要是可执行文件，就都可以使用这种方法。）
     </strong>
    </p>
    <blockquote>
     <p>
      [root@server bin]# echo   $PATH
      <br/>
      <span style="color:#f33b45;">
       /usr/local/sbin
      </span>
      :
      <span style="color:#f33b45;">
       /usr/local/bin
      </span>
      :/usr/sbin:/usr/bin:/root/bin
      <span style="color:#ffbb66;">
       #将软链接做到这两个目录中，就可以直接执行命令python3.6（不管在哪个目录）进入python3.6的交互模式。值的注意的是，剩下的三个目录不可以。
      </span>
      <br/>
      [root@server bin]#
      <span style="color:#f33b45;">
       ln   -s   /usr/local/python3.6/bin/python3.6    /usr/local/bin/                 #将/usr/local/python3.6/bin/python3.6文件，做软链接，并将软链接做在/usr/local/bin目录下。
      </span>
      <br/>
      [root@server bin]# python3.6
      <br/>
      Python 3.6.6 (default, Jan 14 2019, 05:31:29)
      <br/>
      [GCC 4.8.2 20140120 (Red Hat 4.8.2-16)] on linux
      <br/>
      Type "help", "copyright", "credits" or "license" for more information.
      <br/>
      &gt;&gt;&gt;
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="160" src="https://i-blog.csdnimg.cn/blog_migrate/cc645a2ddd0e99fbcfeab0dc71ef33ae.png" width="861"/>
    </p>
    <p>
     至此，配置环境变量的三种方法就介绍完了。
    </p>
    <h4>
     四.python的使用工具——ipython的安装（这里安装与python3.6匹配的ipython3）及环境变量的配置
    </h4>
    <p>
     进入python的交互模式，不能执行在命令行中的命令，并且不能按Tab键不全。想要，在python的交互模式中，执行命令行中的命令，并写想要按Tab键补全，就需要安装一个工具——ipython
    </p>
    <p>
     <strong>
      1.ipython的安装过程
     </strong>
    </p>
    <p>
     <strong>
      &lt;1&gt;环境准备：配置机器使得，机器可以上网（可以ping   www.baidu.com）
     </strong>
    </p>
    <p>
     <strong>
      &lt;2&gt;在python安装完成之后生成的目录下的bin目录下执行命令安装ipython
     </strong>
    </p>
    <blockquote>
     <p>
      [root@server bin]# pwd
      <br/>
      /usr/local/python3.6/bin
      <br/>
      [root@server bin]# ls
      <span style="color:#86ca5e;">
       #pip3和pip3.6都是可执行文件
      </span>
      <br/>
      2to3              idle3.6  pydoc3.6          python3.6m         pyvenv-3.6
      <br/>
      2to3-3.6
      <span style="color:#86ca5e;">
       pip3
      </span>
      python3           python3.6m-config
      <br/>
      easy_install-3.6
      <span style="color:#86ca5e;">
       pip3.6
      </span>
      python3.6         python3-config
      <br/>
      idle3             pydoc3   python3.6-config  pyvenv
      <br/>
      [root@server bin]#
      <span style="color:#f33b45;">
       ./pip3   install   ipython                 #或者./pip3.6  install  ipython
      </span>
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="168" src="https://i-blog.csdnimg.cn/blog_migrate/aa84ae69cceeed890fbec9149f39f3a9.png" width="821"/>
    </p>
    <p>
     至此，ipython的安装就介绍完了。
    </p>
    <blockquote>
     <p>
      安装完成之后，会在python3.6的安装目录下生成ipython3的可执行文件。
     </p>
     <p>
      执行"./ipython3"就可以进入ipython3的交互界面了。
     </p>
     <p>
      [root@server bin]# pwd
      <br/>
      /usr/local/python3.6/bin
      <br/>
      [root@server bin]# ls                        #ipython3为绿色的，为可执行文件
      <br/>
      2to3              idle3.6
      <span style="color:#86ca5e;">
       ipython3
      </span>
      pydoc3.6    python3.6-config   pyvenv
      <br/>
      2to3-3.6          iptest   pip3      pygmentize  python3.6m         pyvenv-3.6
      <br/>
      easy_install-3.6  iptest3  pip3.6    python3     python3.6m-config
      <br/>
      idle3             ipython  pydoc3    python3.6   python3-config
     </p>
     <p>
      [root@server bin]#
      <span style="color:#f33b45;">
       ./ipython3
      </span>
      <br/>
      /usr/local/python3.6/lib/python3.6/site-packages/IPython/core/history.py:226: UserWarning: IPython History requires SQLite, your history will not be saved
      <br/>
      warn("IPython History requires SQLite, your history will not be saved")
      <br/>
      Python 3.6.6 (default, Jan 12 2019, 08:04:45)
      <br/>
      Type 'copyright', 'credits' or 'license' for more information
      <br/>
      IPython 7.2.0 -- An enhanced Interactive Python. Type '?' for help.
     </p>
     <p>
      In [1]:
      <span style="color:#f33b45;">
       quit                                      #使用exit和quit退出
      </span>
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/ce9793c76fddf50b3e0b61f8770b4a06.png"/>
    </p>
    <blockquote>
     <p>
      但是此时输入ipython3会报错，这时因为环境变量还没有配置的原因
     </p>
     <p>
      [root@server bin]# ipython3
      <br/>
      <span style="color:#f33b45;">
       bash: ipython3: command not found...
      </span>
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" height="41" src="https://i-blog.csdnimg.cn/blog_migrate/9360549bee82a9e4719296cc76de7956.png" width="442"/>
    </p>
    <p>
     这样进入目录，执行可行性文件的方法进入ipython3的交互界面的方法，似乎太过复杂，所以，有必要对环境变量进行配置。
    </p>
    <p>
     <strong>
      2.ipython环境变量的配置
     </strong>
     <strong>
      （同python环境变量的配置）——
      <span style="color:#f33b45;">
       配置成功之后，不管在哪个目录下，直接执行"ipython3"命令就可以进入ipython3的交互界面了。
      </span>
     </strong>
    </p>
    <p>
     这里采用方法三：做软链接的方法
    </p>
    <blockquote>
     <p>
      [root@server bin]#
      <span style="color:#f33b45;">
       ln -s /usr/local/python3.6/bin/ipython3   /usr/local/bin/        #将/usr/local/python3.6/bin/ipython3做软链接，并将软链接做在/usr/local/bin目录下。
      </span>
     </p>
     <p>
      [root@server bin]# ipython3
      <br/>
      /usr/local/python3.6/lib/python3.6/site-packages/IPython/core/history.py:226: UserWarning: IPython History requires SQLite, your history will not be saved
      <br/>
      warn("IPython History requires SQLite, your history will not be saved")
      <br/>
      Python 3.6.6 (default, Jan 12 2019, 08:04:45)
      <br/>
      Type 'copyright', 'credits' or 'license' for more information
      <br/>
      IPython 7.2.0 -- An enhanced Interactive Python. Type '?' for help.
     </p>
     <p>
      In [1]:
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/70272f01781f7191205adc48188a4a0f.png"/>
    </p>
    <p>
     <img alt="" class="has" height="186" src="https://i-blog.csdnimg.cn/blog_migrate/d1f820c41f3dc689092cbfc3992370b0.png" width="890"/>
    </p>
    <p>
     <strong>
      3.物理机上安装ipython，及配置环境变量
     </strong>
    </p>
    <p>
     这里物理机上安装ipython有两种方法
    </p>
    <ol>
     <li>
      方法一：安装过程同1ipython的安装。
     </li>
     <li>
      方法二：将虚拟机上安装ipython生成的文件（在/usr/local/python3.6/bin目录下），发送到物理机（/usr/local/python3.6/bin目录下——python3.6安装完成之后生成的bin目录下）即可（该方法的前提是，虚拟机上已经安装了ipython）
     </li>
    </ol>
    <p>
     环境变量的配置如上面的2。
    </p>
    <h4>
     五.python的IDE工具——pycharm的安装
    </h4>
    <p>
     python，ipython中，都不能补全，所以这里推荐安装一个python的IDE工具（pycharm）
    </p>
    <p>
     <strong>
      1.pycharm的安装过程
     </strong>
    </p>
    <p>
     <strong>
      &lt;1&gt;下载pycharm的安装包
     </strong>
    </p>
    <blockquote>
     <p>
      pycharm-community-2018.2.2.tar.gz
     </p>
    </blockquote>
    <p>
     <strong>
      &lt;2&gt;将pycharm的安装包进行解压，解压到任意目录，这里将其解压到/usr/local目录下（意思就是：安装目录是/usr/local目录），为了方便，将解压之后的文件改名为pycharm
     </strong>
    </p>
    <blockquote>
     [root@server Desktop]#
     <span style="color:#f33b45;">
      tar   zxf   pycharm-community-2018.2.2.tar.gz   -C   /usr/local       #-C表示指定解压目录。
     </span>
     <p>
      [root@server Desktop]# cd /usr/local/
      <br/>
      [root@server local]# ls
      <br/>
      bin  games    lib    libexec                     python3.6  share
      <br/>
      etc  include  lib64
      <span style="color:#f33b45;">
       pycharm-community-2018.2.2
      </span>
      sbin       src
      <br/>
      [root@server local]#
      <span style="color:#f33b45;">
       mv   pycharm-community-2018.2.2/   pycharm
      </span>
     </p>
     <p>
      [root@server local]# ls
      <br/>
      bin  games    lib    libexec  python3.6  share
      <br/>
      etc  include  lib64
      <span style="color:#f33b45;">
       pycharm
      </span>
      sbin       src
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/55d405c8c3dca582484eb98cb32f8fe5.png"/>
    </p>
    <p>
     <strong>
      &lt;3&gt;执行可执行性文件（./pycharm.sh），进入安装界面，进行安装。
     </strong>
    </p>
    <blockquote>
     <p>
      [root@server bin]# ./pycharm.sh
     </p>
    </blockquote>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/faa640511890bfa91faa3bbfb9e34c50.png"/>
    </p>
    <p>
     （1）选择Do  not   import   settings（因为之前没有安过pycharm，所以选择Do  not  import   settings），然后点击OK，进入下一步。
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/64b260303723c387f3eef3366d2e7db3.png"/>
    </p>
    <p>
     （2）点击Accept（接受），进入下一步。
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/dd838de4312ab02f0443da007717287c.png"/>
    </p>
    <p>
     （3）点击Don't   send（不分享数据），进入下一步
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/3682e1971654de8dd00da24be040cf0d.png"/>
    </p>
    <p>
     （4）选择安装之后的图形界面，点击Next:Launcher   Script，进入下一步。
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/c4f7c7d606be328140df3fc609aefdf5.png"/>
    </p>
    <p>
     （5）选择Create.........（这个的意思是，相当于创建了一个软链接，在任意目录下直接执行命令“pycharm”就可以进入pycharm的图形界面了），点击Neat:Featured  plugins，进入下一步。
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/8a7ceab82eaab3e396ad3a47e4f02745.png"/>
    </p>
    <p>
     （6）选择Staring  using   Pycharm，不下载插件，开启pycharm。
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/c088ba8f7032ce2001fb11af6eb0b6d0.png"/>
    </p>
    <p>
     （7）选择configure——&gt;settings，进入设置，为添加解释器做准备。
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/a777c6cb800340e9e991a83e51086da5.png"/>
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/ddae937372b1e4236ba58f4907a31a9a.png"/>
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/e8d46d90a09b6eed8b8b8162c96054f9.png"/>
    </p>
    <p>
     （8）点击Add，添加python3.6作为python解释器，点击OK进入下一步。
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/fcc55bf33b4b59fb0f87f2da6eed84b7.png"/>
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/c79e4e61cc627172f70173c7621a548a.png"/>
    </p>
    <p>
     点击Apply，再点击OK，python的解释器就设定好了。
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/0cdc270fd5ff9ff4321b338757970849.png"/>
    </p>
    <p>
     （9）点击Create   New  Project，创建一个新的工程，进入pycharm的图形化界面。
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/bc482b5534a3126ee82bbb1434f31a7f.png"/>
    </p>
    <p>
     这里创建的项目名称叫做xin，点击Create创建该项目。
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/9afbc37f70e115a6330587b48deb023a.png"/>
    </p>
    <p>
     点击close，跳过说明，进入pycharm的图形化界面
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/0d62b8e490d703f7d2e978b79adfcbd2.png"/>
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/72797860b3af95e3e383355ff08691be.png"/>
    </p>
    <p>
     至此pycharm的安装就结束了。
    </p>
    <blockquote>
     <p>
      值的注意的是：如果在这个过程中忘记设置解释器了，那该怎么办呢？
     </p>
     <p>
      （1）先删除之前默认的python解释器生成的虚拟环境。
     </p>
     <p>
      <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/ee6bf2d4bc530803759d852c4197138a.png"/>
     </p>
     <p>
      （2）File——&gt;Settings——&gt;Project:xin——&gt;Project  Interpreter中选择python3.6解释器所在的位置，点击Apply，OK即可。
     </p>
     <p>
      <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/c6a124f325c7c12fb96f2a38b53d399a.png"/>
     </p>
     <p>
      上面的步骤结束之后，我们可以看到，解释器已经修改成功
     </p>
     <p>
      <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/fe7ba28d3e6b3f0d061e3d08ea503259.png"/>
     </p>
    </blockquote>
    <p>
     <strong>
      2.pycharm中python文件的建立与删除，及工程（Project）的建立与删除
     </strong>
    </p>
    <p>
     <strong>
      &lt;1&gt;python文件的建立：右击工程名字——&gt;New——&gt;Python file
     </strong>
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/6d01658cdf93609f2396abbaed45f8fd.png"/>
    </p>
    <p>
     <strong>
      &lt;2&gt;python文件的删除：右击工程名字——&gt;Delete
     </strong>
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/859c52b6447442cc738cfcd1ae9d0029.png"/>
    </p>
    <p>
     <strong>
      &lt;3&gt;python工程的建立：File——&gt;New Project
     </strong>
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/8675dc4774013f1fc046d9655d4cbdbd.png"/>
    </p>
    <p>
     <strong>
      &lt;4&gt;python工程的删除：右击工程名——&gt;Delete。如果此时没有Delete选项，可以在shell命令行中，选择命令的方式进行删除。
     </strong>
    </p>
    <p>
     <strong>
      3.pycharm中字体的设置，及python头文件设置
     </strong>
    </p>
    <p>
     <strong>
      &lt;1&gt;pycharm中字体的设置：File——&gt;Settings——&gt;Editor——&gt;Font——&gt;Size设置字体大小——&gt;Apply——&gt;OK
     </strong>
    </p>
    <p>
     <strong>
      <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/068bdacea40ee9c4d756fe4c87ef612e.png"/>
     </strong>
    </p>
    <p>
     <strong>
      &lt;2&gt;pycharm中python头文件的设置：File——&gt;Settings——&gt;Editor——&gt;Font——&gt;File  and  Code  Templates——&gt;Python  Script填写相应的头文件（如下所示）——&gt;Apply——&gt;OK
     </strong>
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/e0ba63fe24912b94a78da8ae45380679.png"/>
    </p>
    <p>
     <strong>
      4.pycharm中常用的快捷键
     </strong>
    </p>
    <blockquote>
     <ol>
      <li>
       修改python解释器（相当于进入设置）：Crtl+Alt+s
      </li>
      <li>
       如何快速新建python文件：Alt+Insert
       <span style="color:#f33b45;">
        （有的电脑可能不适用）
       </span>
      </li>
      <li>
       快速注释代码：Ctrl+/。此时需要选中要注释的代码
      </li>
      <li>
       快速取消注释代码：Crtl+/。此时需要选中要取消注释的代码
      </li>
      <li>
       格式化代码，是代码好看：Ctrl+Alt+l
      </li>
      <li>
       如何撤销代码的修改：Crtl+z
      </li>
      <li>
       如何取消撤销的代码：Ctrl+Shift+z
      </li>
      <li>
       快速删除一行代码：Ctrl+x
      </li>
      <li>
       快速复制和粘贴一行代码（默认粘贴在下一行）：Ctrl+d
      </li>
      <li>
       快速给Python文件重命名：Shift+F6。此时需要选中要修改的文件
      </li>
     </ol>
     <p>
      <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/6506567d69c1b499855a3fba053be9c6.png"/>
     </p>
     <p>
      点击Refactor即刻修改成功。
     </p>
    </blockquote>
   </div>
  </div>
 </article>
</div>



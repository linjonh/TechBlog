---
title: 2022-11-14-openEuler快速入门-openEuler操作系统介绍
date: 2022-11-14 21:18:15 +0800
categories: [openEuler快速入门]
tags: [服务器,linux,运维]
image:
  path: https://img-blog.csdnimg.cn/ab5e2f6ffe80464cba7f56b37c516c05.png?x-oss-process=image/resize,m_fixed,h_150
  alt: openEuler快速入门-openEuler操作系统介绍
artid: 127854597
---
<span class="artid" style="display:none" artid=68747470733a2f2f62:6c6f672e6373646e2e6e65742f71715f33343632333632312f:61727469636c652f64657461696c732f313237383534353937></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     openEuler快速入门-openEuler操作系统介绍
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-atom-one-light" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <h2>
     <a id="openEuler_0">
     </a>
     openEuler快速入门
    </h2>
    <p>
     <a href="https://editor.csdn.net/md?not_checkout=1&amp;spm=1001.2101.3001.5352&amp;articleId=127854597" rel="nofollow">
      第一章 openEuler操作系统介绍
     </a>
    </p>
    <hr/>
    <p>
    </p>
    <div class="toc">
     <h4>
      文章目录
     </h4>
     <ul>
      <li>
       <a href="#openEuler_0" rel="nofollow">
        openEuler快速入门
       </a>
      </li>
      <li>
       <a href="#_9" rel="nofollow">
        前言
       </a>
      </li>
      <li>
       <a href="#openEuler_14" rel="nofollow">
        一、openEuler操作系统介绍
       </a>
      </li>
      <li>
       <a href="#openEuler_19" rel="nofollow">
        二、openEuler操作系统使用
       </a>
      </li>
      <li>
       <a href="#openEuler_25" rel="nofollow">
        三、openEuler登录使用
       </a>
      </li>
      <li>
       <a href="#_29" rel="nofollow">
        四、查看系统信息命令
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1_31" rel="nofollow">
          1.查看系统信息
         </a>
        </li>
        <li>
         <a href="#2CPU_36" rel="nofollow">
          2.查看CPU信息
         </a>
        </li>
        <li>
         <a href="#3_41" rel="nofollow">
          3.查看内存信息
         </a>
        </li>
        <li>
         <a href="#4__47" rel="nofollow">
          4. 查看磁盘信息
         </a>
        </li>
        <li>
         <a href="#5IP_52" rel="nofollow">
          5.查看IP地址
         </a>
        </li>
        <li>
         <a href="#6_58" rel="nofollow">
          6.显示当前操作系统名称
         </a>
        </li>
        <li>
         <a href="#7_64" rel="nofollow">
          7.当前在线用户
         </a>
        </li>
        <li>
         <a href="#httpsimgblogcsdnimgcn3b3d80572f9b471a89769df60369a615png_70" rel="nofollow">
          在这里插入图片描述
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_73" rel="nofollow">
        总结
       </a>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <hr/>
    <h2>
     <a id="_9">
     </a>
     前言
    </h2>
    <p>
     近年来，随着新计算的发展，算力愈加充沛，国产化软硬件的性能提升迅猛，计算产业曙光已经出现。作为一个开源的 Linux 发行版平台，openEuler 受到越来越多开发者及开源爱好者的关注。为了让更多人更深入认识 openEuler 并积极参与进来，本专栏将从带你认识什么是 openEuler，到教你如何安装、如何使用 openEuler。
    </p>
    <hr/>
    <h2>
     <a id="openEuler_14">
     </a>
     一、openEuler操作系统介绍
    </h2>
    <ul>
     <li>
      openEuler是一款开源、免费的操作系统，由openEuler社区运作。当前openEuler内核源于Linux，支持鲲鹏及其它多种处理器，能够充分释放计算芯片的潜能，是由全球开源贡献者构建的高效、稳定、安全的开源操作系统，适用于数据库、大数据、云计算、人工智能等应用场景。
     </li>
     <li>
      openEuler的前身是运行在华为公司通用服务器上的操作系统EulerOS。EulerOS是一款基于Linux内核(目前是基于Linux4.19版本的内核）的开源操作系统，支持X86和ARM等多种处理器架构，伴随着华为公司鲲鹏芯片的研发，EulerOS 理所当然地成为与鲲鹏芯片配套的软件基础设施。2019年底，EulerOS被正式推送至开源社区，更名为openEuler。openEuler也是一个创新的平台，鼓励任何人在该平台上提出新想法、开拓新思路、实践新方案。所有个人开发者、企业和商业组织都可以使用。
     </li>
    </ul>
    <h2>
     <a id="openEuler_19">
     </a>
     二、openEuler操作系统使用
    </h2>
    <ul>
     <li>
      GUI：图形用户界面。用户界面的所有元素图形化，主要使用鼠标作为输入工具，使用按钮、菜单、对话框等进行交互，追求易用。
     </li>
     <li>
      CLI：命令行界面。用户界面字符化，使用键盘作为输 入工具，输入命令、选项、参数执行程序，追求高效。
     </li>
     <li>
      openEuler 20.03 LTS版本暂无图形界面。
     </li>
     <li>
      Linux主要有两种登录方式，本地登录和远程登录。本地登录类似类似于打开自己电脑或者服务器直接接显示器的方式，一个典型的Linux系统将运行六个虚拟控制台，可以通过Ctrl+Alt+F[1-6]在六个虚拟控制台之间进行切换。默认情况下openEuler支持远程登录，可以通过putty、xshell等工具远程登录到openEuler。
     </li>
    </ul>
    <h2>
     <a id="openEuler_25">
     </a>
     三、openEuler登录使用
    </h2>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/40da5399696e760f98effc3ca574fa22.png">
      <br/>
      输入用户名和密码之后登录的界面，普通用户是以$符号开头，管理员用户是以#符号开头，与Linux操作系统，CentOS操作系统相同。
     </img>
    </p>
    <h2>
     <a id="_29">
     </a>
     四、查看系统信息命令
    </h2>
    <h3>
     <a id="1_31">
     </a>
     1.查看系统信息
    </h3>
    <pre><code>cat /etc/os-release
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/fa1b2c89683af89d0b34c868393db8fe.png"/>
    </p>
    <h3>
     <a id="2CPU_36">
     </a>
     2.查看CPU信息
    </h3>
    <pre><code>lscpu
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e1356751de909567a0de72481ae5d092.png"/>
    </p>
    <h3>
     <a id="3_41">
     </a>
     3.查看内存信息
    </h3>
    <pre><code>free
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d8335d6234ad57fa26613e6ed56c7463.png"/>
    </p>
    <h3>
     <a id="4__47">
     </a>
     4. 查看磁盘信息
    </h3>
    <pre><code>fdisk -l
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b60af39808f088b14658473989647cb4.png"/>
    </p>
    <h3>
     <a id="5IP_52">
     </a>
     5.查看IP地址
    </h3>
    <pre><code>ip addr
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/560a7669e7407f4927b970078ed8e762.png"/>
    </p>
    <h3>
     <a id="6_58">
     </a>
     6.显示当前操作系统名称
    </h3>
    <pre><code>uname
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a12ff5c20a6b221a2a898cead37a9f30.png"/>
    </p>
    <h3>
     <a id="7_64">
     </a>
     7.当前在线用户
    </h3>
    <pre><code>who
</code></pre>
    <h3>
     <a id="httpsimgblogcsdnimgcn3b3d80572f9b471a89769df60369a615png_70">
     </a>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/4f93ff78ed53159853a7a9f2e8996282.png"/>
    </h3>
    <h2>
     <a id="_73">
     </a>
     总结
    </h2>
    <p>
     以上就是今天要讲的内容，本文仅仅简单介绍了open Euler的使用，而欧拉操作系统提供了大量能使我们快速便捷地处理数据的命令。
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



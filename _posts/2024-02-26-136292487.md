---
layout: post
title: 2024-02-26-我的世界Bukkit插件开发-第一章-初始环境搭建-搭建基于spigot核心的服务器-并连接客户端......
date: 2024-02-26 14:56:00 +0800
categories: [MC,我的世界Java开发]
tags: [服务器,java,maven,游戏程序,windows]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=136292487
  alt: 我的世界Bukkit插件开发-第一章-初始环境搭建-搭建基于spigot核心的服务器-并连接客户端......
artid: 136292487
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     我的世界Bukkit插件开发-第一章-初始环境搭建-搭建基于spigot核心的服务器-并连接客户端......
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
    </p>
    <div class="toc">
     <h4>
      文章目录
     </h4>
     <ul>
      <li>
       <a href="#Bukkitspogit_3" rel="nofollow">
        我的世界Bukkit插件开发-个人私服搭建纯干货(spogit核心)
       </a>
      </li>
      <li>
       <a href="#_4" rel="nofollow">
        前言
       </a>
      </li>
      <li>
       <a href="#Spigo_19" rel="nofollow">
        一、Spigo是什么？
       </a>
      </li>
      <li>
       <a href="#_Spigot120jar_32" rel="nofollow">
        二、获取 Spigot-1.20.jar
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1spigot_33" rel="nofollow">
          1.下载spigot核心
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#1201_httpsgetbukkitorgdownloadspigot_34" rel="nofollow">
            选择1.20.1 [下载链接](https://getbukkit.org/download/spigot)
           </a>
          </li>
          <li>
           <a href="#download_37" rel="nofollow">
            点击download跳转-&gt;点击红圈黄字后自动下载
           </a>
          </li>
         </ul>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_spigot_39" rel="nofollow">
        三 初始化并启动spigot服务端
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1jar_Spigot120jar_40" rel="nofollow">
          1.初始化并启动下载的核心jar包 Spigot-1.20.jar
         </a>
        </li>
        <li>
         <a href="#2_63" rel="nofollow">
          2.我的世界客户端连接本地服务器
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_78" rel="nofollow">
        总结
       </a>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <hr/>
    <h2>
     <a id="Bukkitspogit_3">
     </a>
     我的世界Bukkit插件开发-个人私服搭建纯干货(spogit核心)
    </h2>
    <h2>
     <a id="_4">
     </a>
     前言
    </h2>
    <ul>
     <li>
      基于Spigot核心的插件开发
     </li>
     <li>
      <strong>
       本章实现本地成功搭建私服并连接客户端
      </strong>
     </li>
     <li>
      前置开发工具：IDEA
     </li>
     <li>
      JDK环境-JKD-17
     </li>
     <li>
      构建工具：maven
     </li>
     <li>
      必备idea插件：Minecraft Development
     </li>
     <li>
      服务器核心: Spigot-1.20.jar
     </li>
     <li>
      mc客户端
     </li>
     <li>
      小部分内容来自AI大模型，如需深入，请联系博主或自行了解
     </li>
     <li>
      <strong>
       手工不易，且看且珍惜
      </strong>
     </li>
     <li>
      <strong>
       首次开始通过博客的形式记录学习技术的过程，后续会经常更新关于我的世界插件开发相关的技术文章，纯干货，如果有错误的地方请联系博主修改,有更好的优化点或需求请直接提出
      </strong>
     </li>
     <li>
      <strong>
       持续更新中…
      </strong>
     </li>
    </ul>
    <h2>
     <a id="Spigo_19">
     </a>
     一、Spigo是什么？
    </h2>
    <p>
     Spigot是
     <strong>
      一个优化的Minecraft（我的世界）服务器核心
     </strong>
     ，它是基于CraftBukkit项目的一个改进版。
    </p>
    <ol>
     <li>
      <strong>
       起源和发展
      </strong>
      ：Spigot是从CraftBukkit发展而来的，后者本身是对Minecraft官方服务器软件的一个改进，使其支持更多插件和优化。随着时间的发展，CraftBukkit的原开发者停止了更新，而Spigot分支继续由社区成员维护和更新。
     </li>
     <li>
      <strong>
       特点
      </strong>
      ：Spigot针对原版Minecraft服务器软件做了很多性能上的优化，提高了服务器的稳定性和效率。它保持与Minecraft最新版同步更新，并兼容大多数为CraftBukkit开发的插件。
     </li>
     <li>
      <strong>
       变种
      </strong>
      ：在Spigot的基础上，又衍生出了多种不同的版本，如PaperSpigot、TacoSpigot和TorchSpigot等。这些版本各有特色，例如PaperSpigot在Spigot的基础上进一步提升了性能，但默认禁用了一些原版的特性。
     </li>
     <li>
      <strong>
       使用场景
      </strong>
      ：Spigot常被用于搭建Minecraft多人服务器，使得玩家可以在私人服务器上一起游玩，并通过安装各种插件来扩展游戏的功能和玩法。
     </li>
     <li>
      <strong>
       获取方式
      </strong>
      ：Spigot核心可以从官方网站下载，同时也有许多第三方网站提供整合版下载，其中可能包括一些便于服务器搭建和管理的工具和插件。
     </li>
     <li>
      <strong>
       搭建教程
      </strong>
      ：网络上有许多关于如何搭建Spigot服务器的教程，通常包括下载Java环境、下载Spigot核心、配置服务器文件以及启动服务器的步骤。
     </li>
    </ol>
    <p>
     总的来说，Spigot是一个流行的Minecraft服务器改良版核心，它通过优化提升了原版服务器的性能，并支持通过插件来扩展服务器的功能。
    </p>
    <h2>
     <a id="_Spigot120jar_32">
     </a>
     二、获取 Spigot-1.20.jar
    </h2>
    <h3>
     <a id="1spigot_33">
     </a>
     1.下载spigot核心
    </h3>
    <h4>
     <a id="1201_httpsgetbukkitorgdownloadspigot_34">
     </a>
     选择1.20.1
     <a href="https://getbukkit.org/download/spigot" rel="nofollow">
      下载链接
     </a>
    </h4>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/2accce7ae3e8ce9bfca7c38b947a5647.png"/>
    </p>
    <h4>
     <a id="download_37">
     </a>
     点击download跳转-&gt;点击红圈黄字后自动下载
    </h4>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/7e9551277e108d96ed5943c6d4af0e74.png"/>
    </p>
    <h2>
     <a id="_spigot_39">
     </a>
     三 初始化并启动spigot服务端
    </h2>
    <h3>
     <a id="1jar_Spigot120jar_40">
     </a>
     1.初始化并启动下载的核心jar包 Spigot-1.20.jar
    </h3>
    <pre><code>新建一个文件夹命令为world，把下载的jar包复制到文件夹下，方便后续管理
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b4adf39b7a01c5f33b5e663e7f189199.png"/>
    </p>
    <pre><code>需要jdk版本为17起步，博主电脑装的为jdk1.8，所以采取使用windows批处理方式指定jdk17运行
直接启动jar包： java -Xmx1024M -Xms1024M -jar Spigot-1.20.jar
会在当前文件夹下生成服务器相关文件目录
在当前包所在文件夹目录中输入cmd，命令行可直接定位到当前位置
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5c4794596b5fad8845d3fd993df2d156.png"/>
    </p>
    <pre><code>输入上述启动命令
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9ee304a5ec2665a92608ab85b1e4d76b.png">
      <br/>
      因为我电脑Java环境变量版本是 1.8，命令行提醒需要jdk17，大家可以输入java -version来查看当前jdk版本
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/305d5e400c83169945a876c73d723fdd.png">
       <br/>
       在此采取用windows批处理文件指定jdk17运行
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/84a2fde1c7028aa68d60e31bb5603b65.png">
        <br/>
        启动后会自动开始下载服务器所需要的文件目录等，等待即可
        <br/>
        直到出现此提示
        <br/>
        <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b4aab51bd5ef69857839d3397463a925.png">
         <br/>
         需要同意一下用户协议，打开文本吧false改为true即可
         <br/>
         <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/bd1dab3283cf67c83b9815df49d450fd.png">
          <br/>
          重新运行命令即可开始下载剩余文件
          <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/bcae4977155022803984047837355b0f.png">
           <br/>
           出现timings reset 则启动成功，用客户端连接即可
          </img>
         </img>
        </img>
       </img>
      </img>
     </img>
    </p>
    <h3>
     <a id="2_63">
     </a>
     2.我的世界客户端连接本地服务器
    </h3>
    <p>
     打开启动器，下载我的世界版本如下，根据不同版本的spigot核心来选择版本
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9957e64058aee7ed92b4d5580a518207.png"/>
     <br/>
     选择多人游戏-&gt;选择添加服务器，输入本机地址127.0.0.1或者localhost，点击完成即可
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/213f9b6c9ba9a3711920671046eb57ad.png"/>
     <br/>
     选中刚添加的服务器后点击连接即可进入游戏
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5f63e3f42972d803c24c50c849c0c2b4.png"/>
     <br/>
     私服搭建成功，成功进入游戏
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/05e30270d3966fb240349796bde96214.png"/>
     <br/>
     到此就有你自己的私服了
     <br/>
     本章完
    </p>
    <hr/>
    <h2>
     <a id="_78">
     </a>
     总结
    </h2>
    <p>
     <code>
      提示：本章小结：持续更新中......
     </code>
     <br/>
     了解spigo服务器t核心，成功搭建本地的spigot服务器启动并接入客户端…
     <br/>
     如果对您有帮助，别忘了收藏点赞评论留言，有问题评论区回答，后续开始更新插件相关文章
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f6d305f34353638383737302f:61727469636c652f64657461696c732f313336323932343837</p>

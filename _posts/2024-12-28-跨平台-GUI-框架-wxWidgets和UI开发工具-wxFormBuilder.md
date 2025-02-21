---
title: 2024-12-28-跨平台-GUI-框架-wxWidgets和UI开发工具-wxFormBuilder
date: 2024-12-28 11:33:03 +0800
categories: [工具应用,C/C++]
tags: []
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=11715095
  alt: 跨平台-GUI-框架-wxWidgets和UI开发工具-wxFormBuilder
artid: 11715095
---
<span class="artid" style="display:none" artid=68747470733a2f:2f626c6f672e6373646e2e6e65742f636e6561676c656c6565:2f61727469636c652f64657461696c732f3131373135303935></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     跨平台 GUI 框架 wxWidgets和UI开发工具 wxFormBuilder
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p style="">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/417d19789555a03249980ed18dee9f72.jpeg" style="padding-bottom:0px; border-right-width:0px; margin:0px; padding-left:0px; padding-right:0px; max-width:700px; border-top-width:0px; border-bottom-width:0px; border-left-width:0px; padding-top:0px"/>
    </p>
    <p style="">
     wxWidgets是一个开源的跨平台的C++构架库（framework），它可以提供 GUI（图形用户界面）和其它工具。目前的2.x版本支持所有版本的Windows、带GTK+或Motif的Unix和MacOS。一个支持OS/2的 版本正在开发中。
    </p>
    <p style="">
     wxWidgets在最开始是由爱丁堡（Edinburgh）大学的人工智能应用学院开发的，主要是内部使用，而在1992年第一次公布。 2.x版本做了很大程度的改良，并且由Julian Smart, Robert Roebling, Vadim Zeitlin, Vaclav Slavik和更多其他的人所编写和维护。
    </p>
    <p style="">
     wxWidgets的主体是由C++构建的，但你并不是必需通过C++才能使用wxWidgets.wxWidgets拥有许多其它语言的绑定（binding），使你在用其它语言编写程序的时候也可以使用wxWidgets.
    </p>
    <p style="">
     wxwidgets是一个 c++编写的用来提供gui开发的框架。它包含一个可以支持现今几乎所有操作系统（Version 2 currently supports all desktop versions of MS Windows, Unix with GTK+, Unix with Motif, and MacOS. An OS/2 port is in progress.）的GUI库和其他一些很有用的工具，提供了类似MFC的功能。而且，特别要说一下，这个c++lib还的新版本还提供了对掌上电脑的 支持。当然，说到这里很多人会想到java队多系统的支持，其实这是不一样的，java的跨平台是建立在“中间代码”的基础上的，就是说需要在目标平台上 安装java解释器；但是wxwidgets是c++库，经过编译后，他提供的是native级的机器码，在gui编程方面，这可是意味着很大的不同！
    </p>
    <p style="">
     那么wxwidgets有什么特别之处呢？比起其他的跨平台gui库，有什么好处呢？
    </p>
    <p style="">
     1、（不得不放在第一位的）就是他无论对于个人还是对于商业应用都[font color=#ff0000]免费[/font]！
     <br style="padding-bottom:0px; margin:0px; padding-left:0px; padding-right:0px; padding-top:0px"/>
     ——它的主体框架的授权协议支持商业免费应用，其外围功能库中很多也是lgpl授权的，这无疑对于我等“0资本”的人来说是天大的好事。不同于gt之类的跨平台gui库。
     <br style="padding-bottom:0px; margin:0px; padding-left:0px; padding-right:0px; padding-top:0px"/>
     2、 他是跨平台的gui库，支持的操作系统很全面，甚至支持pda（说不定过一段时间他都能够支持symbian了）。
     <br style="padding-bottom:0px; margin:0px; padding-left:0px; padding-right:0px; padding-top:0px"/>
     —— 此跨平台非彼跨平台，它虽然不像java那样是“全面”的，而仅仅是gui库，但是gui是计算机编程中，最为麻烦、耗费时间、容易出现bug的部分，特 别当你想要自己的软件运行在多个操作系统上的时候，开发和维护的难度让人难以想象。其实c++也是支持“跨平台”的，因为c++可以在任何平台上编译运 行，之所以没几个人说他是跨平台的，主要问题就出在变量长度和各操作系统的gui（这里的“界面”我指得是很广义的）上，如果解决了gui的问题，基本上 就解决了c++的“跨平台”问题——至少不用为每种平台都维护一份源代码了。
     <br style="padding-bottom:0px; margin:0px; padding-left:0px; padding-right:0px; padding-top:0px"/>
     3、 wxwidgets提供的gui是大量使用宏的，这就意味着它是在尽可能的使用目标系统native的gui样式。
     <br style="padding-bottom:0px; margin:0px; padding-left:0px; padding-right:0px; padding-top:0px"/>
     ——你可以访问wxwidgets网站，看看那些开发的软件的截图，全是系统native级别的。如果你开发了一个xp系统的软件的话，你的软件会仍然以“xp专有的‘小贱人’级别”的面貌展现在你面前。
     <br style="padding-bottom:0px; margin:0px; padding-left:0px; padding-right:0px; padding-top:0px"/>
     4、 它支持的编译器也很多，而且borland也曾声明将在c++builderx2里边提供对wxidgets的支持——预览版都出来了。
     <br style="padding-bottom:0px; margin:0px; padding-left:0px; padding-right:0px; padding-top:0px"/>
     ——其实我就是看到borland在c++不景气的时候，这么看重这个东东，甚至用它来做“王牌”，才开始注意到他的。当然，反过来，也正是borland的支持，才使他活力大发的。
     <br style="padding-bottom:0px; margin:0px; padding-left:0px; padding-right:0px; padding-top:0px"/>
     5、 自然，有牛X支持，而且是开源的，wxwidgets一直都在快速稳健的开发中，其周边工具也越来越多。
     <br style="padding-bottom:0px; margin:0px; padding-left:0px; padding-right:0px; padding-top:0px"/>
     —— 随着m$开始全力支持他的.net，c++成了“没落”的语言，但是不可否认，c++还是有很多用武之地的，所以根本不可能真正没落。没有了超牛X的支 持，地球人自然开始寻求新的发展方式，wxwidgets这种开源免费，且允许商业应用的好东东，自然会被人们所重视。
     <br style="padding-bottom:0px; margin:0px; padding-left:0px; padding-right:0px; padding-top:0px"/>
     当然，wxwidgets也有一些不足，比如官方文档不全（至少我觉得个官方的help远远不 够我的菜鸟需求，大部分都是网络上零散的教程），特别是没有源代码的开发速度快；没有强大全面的rad工具；还没有形成很浓的产业气候，等等。但是，个人 觉得它的好处绝对大于它的缺点，而且很有发展前途。
    </p>
    <p style="">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/90c8ef6c8802f5fdfd1c38c0dda161cb.gif" style="padding-bottom:0px; border-right-width:0px; margin:0px; padding-left:0px; padding-right:0px; max-width:700px; border-top-width:0px; border-bottom-width:0px; border-left-width:0px; padding-top:0px"/>
    </p>
    <p style="">
     <strong style="padding-bottom:0px; margin:0px; padding-left:0px; padding-right:0px; padding-top:0px">
      在线文档:
     </strong>
     <a href="http://www.ostools.net/apidocs/apidoc?api=wxwidgets" rel="nofollow noopener noreferrer" style="padding-bottom:0px; margin:0px; padding-left:0px; outline-width:0px; padding-right:0px; color:rgb(62,98,166); padding-top:0px" target="_blank">
      http://www.ostools.net/apidocs/apidoc?api=wxwidgets
     </a>
    </p>
    <p style="">
    </p>
    <p style="">
     wxFormBuilder 是一个机遇
     <a href="http://www.oschina.net/p/wxWidgets" rel="nofollow noopener noreferrer" style="padding-bottom:0px; margin:0px; padding-left:0px; outline-width:0px; padding-right:0px; color:rgb(62,98,166); padding-top:0px" target="_blank">
      wxWidgets
     </a>
     的 UI 设计的快速开发工具。
    </p>
    <p style="">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/47eb01539787bfe44f6e1ca3666fe0e1.png" style="padding-bottom:0px; border-right-width:0px; margin:0px; padding-left:0px; padding-right:0px; max-width:700px; border-top-width:0px; border-bottom-width:0px; border-left-width:0px; padding-top:0px"/>
    </p>
   </div>
  </div>
 </article>
</div>



---
layout: post
title: 2024-12-04-Visual-C游戏开发四十九-浅墨DirectX教程十七-三维天空的实现
date: 2024-12-04 20:28:39 +0800
categories: [【DirectX】,【C++】,【VisualC++】游戏开发,【VisualC++】游戏开发]
tags: []
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=8715196
  alt: Visual-C游戏开发四十九-浅墨DirectX教程十七-三维天空的实现
artid: 8715196
---
<span class="artid" style="display:none" artid=68747470:733a2f2f626c6f672e6373646e2e6e65742f7a686d78793535:352f61727469636c652f64657461696c732f38373135313936></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【Visual C++】游戏开发四十九 浅墨DirectX教程十七 三维天空的实现
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h3>
     <blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">
      <p>
       <span style="font-family:'Microsoft YaHei';font-weight: normal;">
        <span style="font-size: 14px; line-height: 26px; text-align: left; color: rgb(102, 0, 204); margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; ">
         <span style="white-space: pre; ">
         </span>
         本系列文章由zhmxy555（毛星云）编写，转载请注明出处。
        </span>
        <span style="font-size: 14px; line-height: 26px; text-align: left; color: rgb(102, 0, 204); ">
        </span>
        <br style="font-size: 14px; line-height: 26px; text-align: left; "/>
        <span style="font-size: 14px; line-height: 26px; text-align: left; color: rgb(102, 0, 204); ">
         <span style="white-space: pre; ">
         </span>
         文章链接：
        </span>
        <a href="http://blog.csdn.net/zhmxy555/article/details/8685546" rel="noopener noreferrer" style="color: rgb(202, 0, 0); text-decoration: none; font-size: 14px; line-height: 26px; text-align: left; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; " target="_blank">
         http://blog.csdn.net/zhmxy555/article/details/8685546
        </a>
        <br style="font-size: 14px; line-height: 26px; text-align: left; "/>
        <span style="font-size: 14px; line-height: 26px; text-align: left; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; color: rgb(102, 0, 204); ">
         <span style="white-space: pre; ">
         </span>
         作者：毛星云（浅墨）    邮箱：
        </span>
        <span style="text-decoration: none; font-size: 14px; line-height: 26px; text-align: left; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; color: rgb(102, 0, 204); ">
         <a href="mailto:happylifemxy@163.com" rel="nofollow noopener noreferrer" style="color: rgb(202, 0, 0); text-decoration: none; font-size: 14px; line-height: 26px; text-align: left; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; " target="_blank">
          happylifemxy@163.com
         </a>
        </span>
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';">
        <span style="font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';">
        <span style="font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        这篇文章里，浅墨准备跟大家一起探讨一下三维天空的几种实现方式，然后在几种方式之中选择最常用的一种进行重点突破，用一个C++类把这种三维天空的实现方式封装起来。这样以后要使用三维天空来辅助绘制某个游戏场景的话，准备好天空的纹理图，然后简单地敲几行代码，调用一下这个天空类中我们亲手写出来的函数就搞定了。先放一张程序截图：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364156579_6271.png">
         <br/>
        </img>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        程序源码在文章末尾有给出下载地址。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <h1>
       <span style="font-family:'Microsoft YaHei';font-size:32px;color:#333399;font-weight: normal;">
        一、游戏行业所用编程语言的认知
       </span>
      </h1>
      <div>
       <span style="font-family:'Microsoft YaHei';font-size:32px;color:#333399;font-weight: normal;">
        <br/>
       </span>
      </div>
      <div>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </div>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        上面讲到了类的封装，目前市面上的高性能三维游戏引擎其实就是在做这样的工作，把各种功能封装在一个个C++类中。浅墨经常收到怀揣游戏开发梦想的初学者们的邮件，询问进行游戏开发到底学什么语言最合适。浅墨在这里集中跟大家讲一下得了。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        大家都知道，撇开C语言不谈，C++在目前高级编程语言中执行效率和性能首屈一指。大家也知道，三维游戏的画面渲染有着非常高的性能需求。就光这一条对性能的要求，什么C#，什么java等等，全都只有在一旁抹鼻子哭了。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        所以，事实如此，现在市面上所有画质精美的单机游戏作品（鬼泣5，上古卷轴5，刺客信条3，仙剑奇侠传5前传，古剑奇谭等等……），所有的大型网络游戏（Dota2，英雄联盟，魔兽世界，龙之谷，剑灵等等等……），所有高性能的三维游戏引擎（虚幻3，Unity3D，Cry Engine3等等……）,以及一些高性能的2D游戏引擎（Cocos2d-x等等），都是用C++来开发的。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        其实游戏引擎并没有那么神秘，说白了也就是那么回事，用类封装好功能的C++代码而已。C++写出来的游戏引擎自然能跨平台。Unreal Engine3、Unity3D、Cocos2d-x等游戏引擎就是绝好的例子。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        学好C++，你可以亲手写出Unity3D，亲手写出 Cocos2d-x，让大家都叫你大神，大家都用你写的游戏引擎做游戏，等着你什么时候心情好了更新一下给引擎加更多功能；而不是只会盲目跟风，今天大家说Unity3D火，就都去学Unity3D，明天大家说Cocos2d-x热门，就来学学Cocos2d-x。你学游戏引擎，学的只是人家某引擎作者某C++大神按心情来定的函数调用方式，学的只是如何调用一些别人写好的一些类，一些API函数。这样在别人规定给你的一些rule中固步自封，大家觉得有技术含量么？
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        我们是时候该该想一想了，为什么现在全球范围内优秀的三维引擎就是没有我们国产引擎的影子。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        所以，无论是哪个平台，Windows也好，iOS也好，Android也罢，如果你真正想在游戏开发领域有所作为，混出个名堂，请学C++，请学计算机图形学，请了解计算机图形API（OpenGL或者DirectX），而不是在跟风某种“热门”的游戏引擎的大潮中随波逐流，在某种移动平台的游戏开发中迷信某某引擎，乐不思蜀，固步自封。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        咳，扯远了，而且有些小愤青了，也原谅浅墨，浅墨没有歧视其他编程语言的意思。浅墨只是想表达，无论是哪个平台（Windows，Play Station，Xbox，Android，iOS,WindowsPhone， WUII），在三维或者高性能游戏开发领域，确实就是C++的天下。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        如果大家对游戏引擎的概念不太了解，还请看浅墨写过的关于游戏引擎的导论：
       </span>
       <span style="font-weight: normal; font-family: 'Microsoft YaHei';font-size:14px; ">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <a href="http://blog.csdn.net/zhmxy555/article/details/8250057" rel="noopener noreferrer" style="color: rgb(102, 102, 102); text-decoration: none; font-family: 'Microsoft YaHei'; font-size: 20px; line-height: 30px; text-align: left; " target="_blank">
         【Visual C++】游戏开发笔记三十五 站在巨人的肩膀上：游戏引擎导论
        </a>
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <h1>
       <span style="font-family:'Microsoft YaHei';font-size:32px;color:#993300;font-weight: normal;">
        二、三维天空技术阐述
       </span>
      </h1>
      <div>
       <span style="font-family:'Microsoft YaHei';font-size:32px;color:#993300;font-weight: normal;">
        <br/>
       </span>
      </div>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        回到正题来吧，讲今天的主题三维天空的实现。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        不要看游戏世界中的天空好像是无边无际的，其实我们都被骗了。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        在计算机的三维世界中，三维天空的绘制肯定不可能像现实生活中的天空一样，一望无际绵延无尽，往往是通过一种假象来现实的。这种假象与古代人所说的“天圆地方”有着异曲同工之妙。反正就是一个足够大的容器一样的东西把我们罩在里面，让我们像井底之蛙一样以为这就是整个世界，世界就这么大，天空就这么大。而这个足以罩住我们所置身的游戏世界的容器，可以是一个立方体，也可以是半球，甚至是一个足够大的平面。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        目前描述三维天空的技术主要包括三种类型：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:24px;color:#cc0000;font-weight: normal;">
        1.平面型天空（Sky Plane）
       </span>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        ，仅用一个平面放到玩家头顶。这种方案太弱了，太容易被玩家们看穿，真实感太低，技术含量也太低。但是对于并不太注意远景的场景，用天空平面也不失为一种办法。在这种情况下，用纯色的雾来覆盖整个远景，使得远处充满神秘，遮一下羞也效果凑合。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:24px;color:#009900;font-weight: normal;">
        2.天空穹庐（Sky Dome）
       </span>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        ，放到玩家头顶上的是一个曲面，通常都会为一个半球。就像这样：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364147334_2162.jpg">
         <br/>
        </img>
       </span>
      </p>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        这种方案其实真实性最强，但是不是目前使用最广泛的方案，它涉及到天空无缝衔接的素材匮乏等的问题。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:24px;color:#6600cc;font-weight: normal;">
        3.天空盒（Sky Box）
       </span>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        ，即放到场景的是一个立方体。它是目前使用最广泛的三维天空模拟技术，网络上素材丰富，所以这次就用教大家用天空盒来模拟三维天空。天空盒经常是由24个顶点、六个面组成的立方体（或者直接从做好的X模型文件载入天空盒），并经常会随着视点的移动而移动，来刻画极远处玩家无法达到位置的天空。
       </span>
      </p>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364147358_9991.jpg"/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        天空盒对于我们来说并不是困难的事情，但是真正要在游戏中使得天空“好看”，那么，还需要有着漂亮的天空纹理素材图，可以在网上搜罗（下文有讲如何搜索），也可以拜托给美工童鞋们。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        另外，在高级一些的应用中，天空盒的纹理可能同时会用来生成Cube Map，并用之来做水面倒影、云影、反光等很眩的特效，大家先有一个这方面的概念就好。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <h1>
       <span style="font-weight: normal; font-family: 'Microsoft YaHei'; ">
        <span style="font-size:32px;color:#cc6600;">
         三. 天空盒的设计
        </span>
       </span>
      </h1>
      <div>
       <span style="font-weight: normal; font-family: 'Microsoft YaHei'; ">
        <span style="font-size:32px;color:#cc6600;">
         <br/>
        </span>
       </span>
      </div>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        本篇文章的核心知识登场。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <h2>
       <span style="font-family:'Microsoft YaHei';font-size:24px;color:#009900;font-weight: normal;">
        1，准备天空盒纹理素材
       </span>
      </h2>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        天空盒的纹理自然就是我们这个天空盒子立方体每个面的纹理了，至少5个面，最多6个面，因为底面处是我们所在的土地，是地形，也就不用渲染为天空了。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        这5个面可以分别单独成文件，像这样：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <img alt="" height="256" src="https://img-my.csdn.net/uploads/201303/25/1364147438_3464.jpg" width="256">
         <img alt="" height="256" src="https://img-my.csdn.net/uploads/201303/25/1364147465_5385.jpg" width="256">
          <img alt="" height="256" src="https://img-my.csdn.net/uploads/201303/25/1364147491_5598.jpg" width="256">
           <br/>
          </img>
         </img>
        </img>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <img alt="" height="256" src="https://img-my.csdn.net/uploads/201303/25/1364147560_6544.jpg" width="256">
         <img alt="" height="256" src="https://img-my.csdn.net/uploads/201303/25/1364147587_9822.jpg" width="256">
          <br/>
         </img>
        </img>
       </span>
      </p>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        这5张纹理需要满足的条件是：按照规定的几个面拼接起来，能构成一幅360度并包含顶部的无缝衔接的全景图：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364147885_1563.jpg">
         <br/>
        </img>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        另外，有些游戏引擎设定了需要把5个面按某种方式连起来和成一幅图来使用，就像这样的天空盒素材：
       </span>
      </p>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364147623_4949.jpg"/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        互联网上关于天空盒的纹理素材资源很丰富，大家google/百度就可以找打很多资源的下载点。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        建议用关键 skybox texture或者skybox download来google。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        另外，如果想原创天空盒纹理的话，可以用DirectX SDK 中自带的DirectX Texture tool工具完成。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <h3>
       <span style="font-family:'Microsoft YaHei';font-size:24px;color:#999900;font-weight: normal;">
        2 天空盒类的设计
       </span>
      </h3>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        好了，开始我们的本职工作，写代码吧。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        我们今天的任务是写一个封装了天空盒渲染功能的类，我们给这个类取名为SkyBoxClass。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        我们来看下这个类中有哪些内容。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        最开始国际惯例，LPDIRECT3DDEVICE9类型的设备接口指针m_pd3dDevice自然不能少。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        然后这个类中需要处理24个带纹理坐标的顶点来构成一个立方体盒子，自然少不了FVF灵活顶点格式和一个DIRECT3DVERTEXBUFFER接口的指针。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        接着还要有五个纹理对象，分别储存5个面上的纹理图，所以一个LPDIRECT3DTEXTURE9类型的m_pTexture[5]自然也少不了。最后，还需要定义一个float类型的m_Length表示天空盒的边长。结构体和成员变量就是这些了，我们再来看一下需要有哪些成员函数。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        首先构造函数析构函数我们写出来，接着再写三个函数就够了，它们分别是初始化天空盒顶点的InitSkyBox函数，加载纹理的LoadSkyTextureFromFile函数，渲染天空盒的RenderSkyBox函数。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        SkyBoxClass类的轮廓就是这样了，那么把上面我们的思路实现成代码就是如下，即贴出SkyBoxClass.h中全部代码：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <pre><code class="language-cpp">//=============================================================================
// Name: SkyBoxClass.h
//	Des: 一个封装了三维天空盒系统的类的头文件
// 2013年 3月24日  Create by 浅墨 
//=============================================================================
#pragma once
#include "D3DUtil.h"

//为天空盒类定义一个FVF灵活顶点格式
struct SKYBOXVERTEX
{
	float	x,y,z;
	float	u,v;
};
#define D3DFVF_SKYBOX D3DFVF_XYZ|D3DFVF_TEX1


class SkyBoxClass
{
private:
	LPDIRECT3DDEVICE9				m_pd3dDevice;			//D3D设备对象
	LPDIRECT3DVERTEXBUFFER9	m_pVertexBuffer;		//顶点缓存对象
	LPDIRECT3DTEXTURE9			m_pTexture[5];			//5个纹理接口对象
	float			m_Length;			//天空盒边长

public:
	SkyBoxClass( LPDIRECT3DDEVICE9  pDevice );		//构造函数
	virtual ~SkyBoxClass(void);								//析构函数

public:
	BOOL	InitSkyBox( float Length );   //初始化天空盒函数
	BOOL	LoadSkyTextureFromFile(wchar_t *pFrontTextureFile, wchar_t *pBackTextureFile,wchar_t *pLeftTextureFile, wchar_t *pRightTextureFile,wchar_t *pTopTextureFile);  //从文件加载天空盒五个方向上的纹理
	VOID		RenderSkyBox( D3DXMATRIX *pMatWorld, BOOL bRenderFrame ); //渲染天空盒,根据第一个参数设定天空盒世界矩阵，第二个参数选择是否渲染出线框

};
</code></pre>
      <br/>
      <p>
      </p>
      <br/>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;">
        <span style="font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <h2>
       <span style="font-family:'Microsoft YaHei';font-size:32px;color:#993399;font-weight: normal;">
        三、 天空盒类的实现
       </span>
      </h2>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        类的框架勾勒出来了，接下来就很简单，分别在类的cpp文件中实现类成员函数就好了。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <h6>
       <span style="font-family:'Microsoft YaHei';font-size:24px;color:#993300;font-weight: normal;">
        Ⅰ.构造函数的实现
       </span>
      </h6>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        首先是类构造函数，蛮简单，直接对着看类定义中有哪些变量，分别赋初值就行。除了Direct3D设备对象赋值成通过函数形参传进来的设备对象指针pDevice之外，其他的参数根据类型统统取NULL或者0.0f：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <pre><code class="language-cpp">//-------------------------------------------------------------------------------------------------
// Desc: 构造函数
//-------------------------------------------------------------------------------------------------
SkyBoxClass::SkyBoxClass( LPDIRECT3DDEVICE9  pDevice )
{
	//给各个参数赋初值
	m_pVertexBuffer=NULL;
	m_pd3dDevice=pDevice;
	for(int i=0; i&lt;5; i++)
		m_pTexture[i] = NULL; 
	m_Length = 0.0f;
}</code></pre>
      <br/>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';">
        <span style="font-size: 14px; font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <br/>
      <p>
      </p>
      <span style="font-family:'Microsoft YaHei';font-size:14px;">
       <span style="font-weight: normal;">
        <br/>
       </span>
      </span>
      <h3>
       <span style="font-family:'Microsoft YaHei';font-size:24px;color:#006600;font-weight: normal;">
        Ⅱ. 顶点初始化函数InitSkyBox的实现
       </span>
      </h3>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        接下来要实现的就是最关键的顶点初始化函数InitSkyBox。首先，通过形参把天空盒的边长传给代表边长的成员函数m_Length。接着就是我们熟悉的顶点缓存使用四步曲的二、三两步——创建顶点缓存、访问顶点缓存了。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        我们在纹理映射第一讲中就给出了立方体表面贴纹理的24个顶点需要怎么写，我们这里的思路基本和之前讲的相同，而与D3D实现的普通立方体贴图不同的一点是，大部分情况下我们视点都包容在天空盒内部，因此，天空盒的顶点顺序应当是正好与我们之前讲的普通立方体的顶点顺序相反。所以，InitSkyBox函数的实现代码就是这样：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <pre><code class="language-cpp">//-------------------------------------------------------------------------------------------------
// Name:  SkyBoxClass::InitSkyBox( )
// Desc: 天空盒初始化函数，顶点缓冲区的赋值
//-------------------------------------------------------------------------------------------------
BOOL SkyBoxClass::InitSkyBox( float Length )
{
	m_Length=Length;

	//1.创建。创建顶点缓存
	 m_pd3dDevice-&gt;CreateVertexBuffer( 20 * sizeof(SKYBOXVERTEX), 0, 
		D3DFVF_SKYBOX, D3DPOOL_MANAGED, &amp;m_pVertexBuffer, 0 );

	//用一个结构体把顶点数据先准备好
	SKYBOXVERTEX vertices[] =
    {
		//前面的四个顶点
		{ -m_Length/2, 0.0f,    m_Length/2, 0.0f, 1.0f, },
		{ -m_Length/2, m_Length/2,   m_Length/2, 0.0f, 0.0f, },
		{  m_Length/2, 0.0f,    m_Length/2, 1.0f, 1.0f, },
		{  m_Length/2, m_Length/2,   m_Length/2, 1.0f, 0.0f, },

		//背面的四个顶点
		{  m_Length/2, 0.0f,   -m_Length/2, 0.0f, 1.0f, },
		{  m_Length/2, m_Length/2,  -m_Length/2, 0.0f, 0.0f, },
		{ -m_Length/2, 0.0f,   -m_Length/2, 1.0f, 1.0f, },
		{ -m_Length/2, m_Length/2,  -m_Length/2, 1.0f, 0.0f, },

		//左面的四个顶点
		{ -m_Length/2, 0.0f,   -m_Length/2, 0.0f, 1.0f, },
		{ -m_Length/2, m_Length/2,  -m_Length/2, 0.0f, 0.0f, },
		{ -m_Length/2, 0.0f,    m_Length/2, 1.0f, 1.0f, },
		{ -m_Length/2, m_Length/2,   m_Length/2, 1.0f, 0.0f, },

		//右面的四个顶点
		{ m_Length/2, 0.0f,   m_Length/2, 0.0f, 1.0f, },
		{ m_Length/2, m_Length/2,  m_Length/2, 0.0f, 0.0f, },
		{ m_Length/2, 0.0f,  -m_Length/2, 1.0f, 1.0f, },
		{ m_Length/2, m_Length/2, -m_Length/2, 1.0f, 0.0f, },

		//上面的四个顶点
		{  m_Length/2, m_Length/2, -m_Length/2, 1.0f, 0.0f, },
		{  m_Length/2, m_Length/2,  m_Length/2, 1.0f, 1.0f, },
		{ -m_Length/2, m_Length/2, -m_Length/2, 0.0f, 0.0f, },
		{ -m_Length/2, m_Length/2,  m_Length/2, 0.0f, 1.0f, },

    };

	//准备填充顶点数据
    void* pVertices;
	//2.加锁
    m_pVertexBuffer-&gt;Lock( 0, 0, (void**)&amp;pVertices, 0 );
	//3.访问。把结构体中的数据直接拷到顶点缓冲区中
    memcpy( pVertices, vertices, sizeof(vertices) );
	//4.解锁
	m_pVertexBuffer-&gt;Unlock();

	 return TRUE;
}</code></pre>
      <br/>
      <p>
      </p>
      <br/>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;">
        <span style="font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <h3>
       <span style="font-family:'Microsoft YaHei';font-size:24px;color:#6600cc;font-weight: normal;">
        Ⅲ.纹理载入函数LoadSkyTextureFromFile的写法
       </span>
      </h3>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        接下来看看纹理载入函数LoadSkyTextureFromFile的写法，实在是非常非常简单。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        给5个文件路径给他，传进来调用5次D3DXCreateTextureFromFile函数载入纹理到m_pTexture[]数组中就好了：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <pre><code class="language-cpp">//-------------------------------------------------------------------------------------------------
// Name:  SkyBoxClass::LoadSkyTextureFromFile( )
// Desc: 天空盒纹理加载函数
//-------------------------------------------------------------------------------------------------
BOOL SkyBoxClass::LoadSkyTextureFromFile(wchar_t *pFrontTextureFile, wchar_t *pBackTextureFile,wchar_t *pLeftTextureFile, wchar_t *pRightTextureFile,wchar_t *pTopTextureFile)
{
	//从文件加载五张纹理
	D3DXCreateTextureFromFile( m_pd3dDevice , pFrontTextureFile, &amp;m_pTexture[0] );  //前面
	D3DXCreateTextureFromFile( m_pd3dDevice , pBackTextureFile,  &amp;m_pTexture[1] );  //后面
	D3DXCreateTextureFromFile( m_pd3dDevice , pLeftTextureFile,  &amp;m_pTexture[2] );  //左面
	D3DXCreateTextureFromFile( m_pd3dDevice , pRightTextureFile, &amp;m_pTexture[3] );  //右面
	D3DXCreateTextureFromFile( m_pd3dDevice , pTopTextureFile,   &amp;m_pTexture[4] );  //上面	
	return TRUE;
}
</code></pre>
      <br/>
      <p>
      </p>
      <br/>
      <p>
      </p>
      <span style="font-family:'Microsoft YaHei';font-size:14px;">
       <span style="font-weight: normal;">
        <br/>
       </span>
      </span>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <h3>
       <span style="font-family:'Microsoft YaHei';font-size:24px;color:#cc9933;font-weight: normal;">
        Ⅳ. 渲染函数RenderSkyBox
       </span>
      </h3>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        再看看作用为渲染天空盒RenderSkyBox函数。其中我们用到了讲解纹理映射的时候没有讲到的纹理阶段混合操作，这里我们顺便讲一下。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        纹理映射的本质实际上就是从纹理中获取颜色值，然后应用到物体表面上。而以后我们会接触到的多次纹理映射就是混合多层纹理的颜色，然后应用到物体表面。而为了处理上的方便，Direct3D将颜色的RGB通道和Alpha通道分开来进行处理，具体的操作方法就是通过纹理阶段状态（Texture Stage State）的设置。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        其实也就是一个函数IDirect3DDevice9::SetTextureStageState的用法，在MSDN中查到这个函数原型如下：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <pre><code class="language-cpp">HRESULT SetTextureStageState(
  [in]  DWORD Stage,
  [in]  D3DTEXTURESTAGESTATETYPE Type,
  [in]  DWORD Value
);

        </code></pre>
      <br/>
      <p>
      </p>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        ■ 第一个参数，DWORD类型的Stage，指定当前设置的纹理层为第几层（有效值0~7）
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        ■ 第二个参数，D3DTEXTURESTAGESTATETYPE类型的Type，填将要设置的纹理渲染状态，在枚举类型D3DTEXTURESTAGESTATETYPE中任意取值。先看完第三个参数，然后一起看一下这个D3DTEXTURESTAGESTATETYPE枚举类型。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        ■ 第三个参数，DWORD类型的Value，表示所设置的状态值，它是根据第二个参数来决定具体取什么值的。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family: 'Microsoft YaHei'; font-size: 14px; font-weight: normal;">
        下面就来一起看一下D3DTEXTURESTAGESTATETYPE枚举类型的定义：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';">
        <span style="font-size: 14px; font-weight: normal;">
        </span>
       </span>
      </p>
      <pre><code class="language-cpp">typedef enum D3DTEXTURESTAGESTATETYPE { 
  D3DTSS_COLOROP                 = 1,
  D3DTSS_COLORARG1               = 2,
  D3DTSS_COLORARG2               = 3,
  D3DTSS_ALPHAOP                 = 4,
  D3DTSS_ALPHAARG1               = 5,
  D3DTSS_ALPHAARG2               = 6,
  D3DTSS_BUMPENVMAT00            = 7,
  D3DTSS_BUMPENVMAT01            = 8,
  D3DTSS_BUMPENVMAT10            = 9,
  D3DTSS_BUMPENVMAT11            = 10,
  D3DTSS_TEXCOORDINDEX           = 11,
  D3DTSS_BUMPENVLSCALE           = 22,
  D3DTSS_BUMPENVLOFFSET          = 23,
  D3DTSS_TEXTURETRANSFORMFLAGS   = 24,
  D3DTSS_COLORARG0               = 26,
  D3DTSS_ALPHAARG0               = 27,
  D3DTSS_RESULTARG               = 28,
  D3DTSS_CONSTANT                = 32,
  D3DTSS_FORCE_DWORD             = 0x7fffffff 
} D3DTEXTURESTAGESTATETYPE, *LPD3DTEXTURESTAGESTATETYPE;

        </code></pre>
      <br/>
      <br/>
      <span style="font-family: 'Microsoft YaHei'; font-size: 14px; font-weight: normal;">
      </span>
      <p>
      </p>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;">
        <span style="font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        大家可以看到这个枚举中的参数非常多，我们重点看一下前两个参数。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        ■ D3DTSS_COLOROP：指定纹理颜色的混合方法，对应的Value值（SetTextureStageState第三个参数）在D3DTEXTUREOP枚举类型中取值。我们把几种常用的列出来就好了。Value值取D3DTOP_DISABLE表示禁用当前纹理层颜色输出；Value值取D3DTOP_SELECTARG1或者D3DTOP_SELECTARG2，分别表示将颜色混合阶段的第一个或者第二个参数的颜色值或者alpha值输出。Value值取D3DTOP_MODULATE表示将颜色混合阶层的第一个和第二个颜色相乘并输出。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        ■ D3DTSS_COLORAG1：取这个值的话表示对纹理颜色混合阶段的第一个参数进行操作，而它的Value值在D3DTA常量中取值，默认值为D3DTA_TEXTURE，表示这个纹理阶段的参数就取纹理的颜色。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        然后我们看一看RenderSkyBox函数中用到的两句关于纹理阶段状态的代码：
        <br/>
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';">
        <span style="font-size: 14px; font-weight: normal;">
        </span>
       </span>
      </p>
      <pre><code class="language-cpp">m_pd3dDevice-&gt;SetTextureStageState( 0, D3DTSS_COLOROP,   D3DTOP_SELECTARG1);  //将纹理颜色混合的第一个参数的颜色值用于输出
m_pd3dDevice-&gt;SetTextureStageState( 0, D3DTSS_COLORARG1, D3DTA_TEXTURE );   //纹理颜色混合的第一个参数的值就取纹理颜色值</code></pre>
      <br/>
      <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
      </span>
      <p>
      </p>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        第一句SetTextureStageState中我们表示要将纹理颜色混合的第一个参数的颜色值用于输出，然后第二句马上就把第一个参数的颜色值取为纹理颜色值了，这样我们颜色混合后的值就是纹理的颜色值。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        解决了纹理颜色混合的问题，后面就好解决了，设置世界矩阵，关联顶点和渲染流水线，设置顶点格式，接着一个for循环设置纹理并渲染，最后再判断一下是否要绘制出线框，一气呵成。
       </span>
       <span style="font-weight: normal; font-family: 'Microsoft YaHei';font-size:14px; ">
        实现代码就是这样：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';">
        <span style="font-size: 14px; font-weight: normal;">
        </span>
       </span>
      </p>
      <pre><code class="language-cpp">//--------------------------------------------------------------------------------------
// Name: SkyBoxClass::RenderSkyBox()
// Desc: 绘制出天空盒，可以通过第二个参数选择是否绘制出线框
//--------------------------------------------------------------------------------------
void SkyBoxClass::RenderSkyBox( D3DXMATRIX *pMatWorld, BOOL bRenderFrame )
{
	m_pd3dDevice-&gt;SetTextureStageState( 0, D3DTSS_COLOROP,   D3DTOP_SELECTARG1);  //将纹理颜色混合的第一个参数的颜色值用于输出
	m_pd3dDevice-&gt;SetTextureStageState( 0, D3DTSS_COLORARG1, D3DTA_TEXTURE );   //纹理颜色混合的第一个参数的值就取纹理颜色值
	m_pd3dDevice-&gt;SetTransform( D3DTS_WORLD, pMatWorld );  //设置世界矩阵
	m_pd3dDevice-&gt;SetStreamSource(0,m_pVertexBuffer, 0, sizeof(SKYBOXVERTEX));    //把包含的几何体信息的顶点缓存和渲染流水线相关联  
	m_pd3dDevice-&gt;SetFVF(D3DFVF_SKYBOX);  //设置FVF灵活顶点格式

	//一个for循环，将5个面绘制出来
	for(int i =0; i&lt;5; i++)
	{
		m_pd3dDevice-&gt;SetTexture(0, m_pTexture[i]);
		m_pd3dDevice-&gt;DrawPrimitive(D3DPT_TRIANGLESTRIP, i*4, 2);
	}

	//对是否渲染线框的处理代码
	if (bRenderFrame)  //如果要渲染出线框的话
	{
		m_pd3dDevice-&gt;SetRenderState(D3DRS_FILLMODE, D3DFILL_WIREFRAME); //把填充模式设为线框填充
		//一个for循环，将5个面的线框绘制出来
		for(int i =0; i&lt;5; i++)
		{
			m_pd3dDevice-&gt;DrawPrimitive(D3DPT_TRIANGLESTRIP, i*4, 2);	//绘制顶点 
		}

		m_pd3dDevice-&gt;SetRenderState(D3DRS_FILLMODE, D3DFILL_SOLID);	//把填充模式调回实体填充
	}
}
</code></pre>
      <br/>
      <br/>
      <p>
      </p>
      <br/>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;">
        <span style="font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <h3>
       <span style="font-family:'Microsoft YaHei';font-size:24px;color:#cc6600;font-weight: normal;">
        Ⅴ.析构函数
       </span>
      </h3>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        最后再实现一下析构函数，看有什么COM接口对象，SAFE_RELEASE就行了：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <pre><code class="language-cpp">//-------------------------------------------------------------------------------------------------
// Desc: 析构函数
//-------------------------------------------------------------------------------------------------
SkyBoxClass::~SkyBoxClass(void)
{
	SAFE_RELEASE( m_pVertexBuffer );
	for(int i=0; i&lt;5; i++)
	{
		SAFE_RELEASE( m_pTexture[i] );
	}
}<span style="font-family: 'Microsoft YaHei'; "> </span></code></pre>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';">
        <span style="font-size: 14px; font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <br/>
      <br/>
      <p>
      </p>
      <p>
       <span style="font-family: 'Microsoft YaHei'; font-size: 14px; font-weight: normal; ">
        这样，一个封装了天空盒的SkyBoxClass类就被我们实现出来了，可以看到，非常简单，只需要填写好六个面的24个顶点，最后为每个面贴上纹理就可以了。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <h2>
       <span style="font-family:'Microsoft YaHei';font-size:32px;color:#009900;font-weight: normal;">
        四，天空盒类的使用
       </span>
      </h2>
      <div>
       <span style="font-family:'Microsoft YaHei';font-size:32px;color:#009900;font-weight: normal;">
        <br/>
       </span>
      </div>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        别看这个SkyBoxClass天空盒类写起来还有些小麻烦，但是用起来非常方便。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:24px;color:#cc9933;font-weight: normal;">
        Ⅰ.
       </span>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        首先，定义一个SkyBoxClass类的指针：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';">
        <span style="font-size: 14px; font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';">
        <span style="font-size: 14px; font-weight: normal;">
        </span>
       </span>
      </p>
      <pre><code class="language-cpp">SkyBoxClass*             g_pSkyBox=NULL;                             //天空盒类的指针实例</code></pre>
      <p>
      </p>
      <p>
       <span style="font-size: 14px; font-weight: normal; ">
        <span style="font-family:'Microsoft YaHei';">
        </span>
       </span>
      </p>
      <p>
       <span style="font-weight: normal;">
        <span style="font-family:'Microsoft YaHei';">
         <span style="font-size: 24px; color: rgb(255, 102, 0); ">
          Ⅱ.
         </span>
         <span style="font-size: 14px; ">
          然后，在初始化阶段拿着天空类的指针对象pSkyBox到处“指”，创建并初始化天空：
         </span>
        </span>
       </span>
      </p>
      <p>
       <span style="font-size: 14px; font-weight: normal; ">
        <span style="font-family:'Microsoft YaHei';">
        </span>
       </span>
      </p>
      <pre><code class="language-cpp">	//创建并初始化天空对象
	g_pSkyBox = new SkyBoxClass( g_pd3dDevice );
	g_pSkyBox-&gt;LoadSkyTextureFromFile(L"GameMedia\\frontsnow1.jpg",L"GameMedia\\backsnow1.jpg",L"GameMedia\\leftsnow1.jpg",L"GameMedia\\rightsnow1.jpg", L"GameMedia\\topsnow1.jpg");//从文件加载前、后、左、右、顶面5个面的纹理图
	g_pSkyBox-&gt;InitSkyBox(20000);  //设置天空盒的边长</code></pre>
      <br/>
      <span style="font-weight: normal; ">
      </span>
      <p>
      </p>
      <span style="font-family: 'Microsoft YaHei'; font-weight: normal; ">
      </span>
      <p>
      </p>
      <p>
       <span style="font-size: 14px; font-weight: normal; ">
        <span style="font-family:'Microsoft YaHei';">
         这里的GameMedia\\topsnow1.jpg表示在工程文件夹下的GameMedia文件夹中的topsnow1.jpg图片。
        </span>
       </span>
      </p>
      <p>
       <span style="font-size: 14px; font-weight: normal; ">
        <span style="font-family:'Microsoft YaHei';">
        </span>
       </span>
      </p>
      <p>
       <span style="font-weight: normal; ">
        <span style="font-family:'Microsoft YaHei';">
         <span style="font-size:24px;color:#000099;">
          Ⅲ
         </span>
         <span style="font-size:14px;">
          .最后，就是在Render函数中依然是拿着天空类的指针对象pSkyBox指一下RenderSkyBox函数，进行渲染。
         </span>
        </span>
       </span>
      </p>
      <p>
       <span style="font-size: 14px; font-weight: normal; ">
        <span style="font-family:'Microsoft YaHei';">
         不过在渲染之前需要给RenderSkyBox函数准备一个合适的世界矩阵，我们这里为了把天空盒调到适当的地方先是创建了一个平移矩阵matTransSky，然后让天空盒可以不停地缓慢移动，创建了一个随系统时间随Y轴旋转的matRotSky矩阵。接着把这两个矩阵相乘，结果等于最终的matSky矩阵，然后就可以把matSky作为参数，调用RenderSkyBox函数了。
        </span>
       </span>
      </p>
      <p>
       <span style="font-size: 14px; font-weight: normal; ">
        <span style="font-family:'Microsoft YaHei';">
        </span>
       </span>
      </p>
      <pre><code class="language-cpp">	//绘制天空
	D3DXMATRIX matSky,matTransSky,matRotSky;
	D3DXMatrixTranslation(&amp;matTransSky,0.0f,-3500.0f,0.0f);
	D3DXMatrixRotationY(&amp;matRotSky, -0.000005f*timeGetTime());   //旋转天空网格, 简单模拟云彩运动效果
	matSky=matTransSky*matRotSky;
	g_pSkyBox-&gt;RenderSkyBox(&amp;matSky, false);</code></pre>
      <br/>
      <p>
      </p>
      <br/>
      <p>
      </p>
      <p>
      </p>
      <span style="font-family:'Microsoft YaHei';">
       <span style="font-weight: normal; ">
       </span>
      </span>
      <p style="font-size:14px; ">
       <span style="font-family:'Microsoft YaHei';font-size:14px;">
        <span style="font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <p style="font-size:14px; ">
       <span style="font-family:'Microsoft YaHei';font-size:14px;">
        <span style="font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <p style="font-size:14px; ">
       <span style="font-family:'Microsoft YaHei';font-size:14px;">
        <span style="font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <p style="font-size:14px; ">
       <span style="font-family:'Microsoft YaHei';font-size:14px;">
        <span style="font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <h2>
       <span style="font-family:'Microsoft YaHei';font-size:32px;color:#ff6600;">
        <span style="font-weight: normal; ">
         五、详细注释的源代码欣赏
        </span>
       </span>
      </h2>
      <div>
       <span style="font-family:'Microsoft YaHei';font-size:32px;color:#ff6600;">
        <span style="font-weight: normal; ">
         <br/>
        </span>
       </span>
      </div>
      <p style="font-size:14px; ">
       <span style="font-family:'Microsoft YaHei';font-size:14px;">
        <span style="font-weight: normal;">
         本篇文章配套的源代码在之前的基础上又增加了两个文件，也就是实现天空类的源文件和头文件。全部文件列表如下：
        </span>
       </span>
      </p>
      <p style="font-size:14px; ">
       <span style="font-family:'Microsoft YaHei';font-size:14px;">
        <span style="font-weight: normal;">
         <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364157117_5583.png">
          <br/>
         </img>
        </span>
       </span>
      </p>
      <p>
       <span style="font-weight: normal; ">
        <span style="font-family:'Microsoft YaHei';font-size:14px;">
         我们依旧只贴出核心代码main.cpp，其他的众多文件大家下源代码回去看就好了。
        </span>
       </span>
      </p>
      <p style="font-size:14px; ">
      </p>
      <pre><code class="language-cpp"><span style="font-weight: normal;">//*****************************************************************************************
//
//【Visual C++】游戏开发笔记系列配套源码四十九  浅墨DirectX教程十七  三维天空系统的实现
//		 VS2010版
// 2013年 3月24日  Create by 浅墨 
//
//***************************************************************************************** 


//*****************************************************************************************
// Desc: 宏定义部分   
//*****************************************************************************************
#define SCREEN_WIDTH	932						//为窗口宽度定义的宏，以方便在此处修改窗口宽度
#define SCREEN_HEIGHT	700							//为窗口高度定义的宏，以方便在此处修改窗口高度
#define WINDOW_TITLE	_T("【Visual C++】游戏开发笔记系列配套示例程序四十九  浅墨DirectX教程十七  三维天空系统的实现") //为窗口标题定义的宏



//*****************************************************************************************
// Desc: 头文件定义部分  
//*****************************************************************************************                                                                                       
#include &lt;d3d9.h&gt;
#include &lt;d3dx9.h&gt;
#include &lt;tchar.h&gt;
#include &lt;time.h&gt; 
#include "DirectInputClass.h"
#include "CameraClass.h"
#include "TerrainClass.h"
#include "SkyBoxClass.h"

//*****************************************************************************************
// Desc: 库文件定义部分  
//***************************************************************************************** 
#pragma comment(lib,"d3d9.lib")
#pragma comment(lib,"d3dx9.lib")
#pragma comment(lib, "dinput8.lib")     // 使用DirectInput必须包含的库文件，注意这里有8
#pragma comment(lib,"dxguid.lib")
#pragma comment(lib, "winmm.lib") 



//*****************************************************************************************
// Desc: 全局变量声明部分  
//*****************************************************************************************
LPDIRECT3DDEVICE9					g_pd3dDevice = NULL;				//Direct3D设备对象
LPD3DXFONT								g_pTextFPS =NULL;    //字体COM接口
LPD3DXFONT								g_pTextAdaperName = NULL;  // 显卡信息的2D文本
LPD3DXFONT								g_pTextHelper = NULL;  // 帮助信息的2D文本
LPD3DXFONT								g_pTextInfor= NULL;  // 绘制信息的2D文本
float											g_FPS= 0.0f;       //一个浮点型的变量，代表帧速率
wchar_t										g_strFPS[50] ={0};    //包含帧速率的字符数组
wchar_t										g_strAdapterName[60] ={0};   //包含显卡名称的字符数组
D3DXMATRIX							g_matWorld;							//世界矩阵
LPD3DXMESH							g_pMesh = NULL;				// 网格对象
D3DMATERIAL9*						g_pMaterials= NULL;			// 网格的材质信息
LPDIRECT3DTEXTURE9*				g_pTextures = NULL;			// 网格的纹理信息
DWORD									g_dwNumMtrls = 0;			// 材质的数目
LPD3DXMESH							g_cylinder = NULL;				//柱子网格对象
D3DMATERIAL9							g_MaterialCylinder;				//柱子的材质
DInputClass*								g_pDInput = NULL;				//DInputClass类的指针实例
CameraClass*							g_pCamera = NULL;				//摄像机类的指针实例
TerrainClass*								g_pTerrain = NULL;				//地形类的指针实例
SkyBoxClass*								g_pSkyBox=NULL;				   //天空盒类的指针实例




//*****************************************************************************************
// Desc: 全局函数声明部分 
//***************************************************************************************** 
LRESULT CALLBACK		WndProc( HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam );
HRESULT						Direct3D_Init(HWND hwnd,HINSTANCE hInstance);
HRESULT						Objects_Init();
void								Direct3D_Render( HWND hwnd);
void								Direct3D_Update( HWND hwnd);
void								Direct3D_CleanUp( );
float								Get_FPS();
void								HelpText_Render(HWND hwnd);

//*****************************************************************************************
// Name: WinMain( )
// Desc: Windows应用程序入口函数
//*****************************************************************************************
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance,LPSTR lpCmdLine, int nShowCmd)
{

	//开始设计一个完整的窗口类
	WNDCLASSEX wndClass = { 0 };				//用WINDCLASSEX定义了一个窗口类，即用wndClass实例化了WINDCLASSEX，用于之后窗口的各项初始化    
	wndClass.cbSize = sizeof( WNDCLASSEX ) ;	//设置结构体的字节数大小
	wndClass.style = CS_HREDRAW | CS_VREDRAW;	//设置窗口的样式
	wndClass.lpfnWndProc = WndProc;				//设置指向窗口过程函数的指针
	wndClass.cbClsExtra		= 0;
	wndClass.cbWndExtra		= 0;
	wndClass.hInstance = hInstance;				//指定包含窗口过程的程序的实例句柄。
	wndClass.hIcon=(HICON)::LoadImage(NULL,_T("GameMedia\\icon.ico"),IMAGE_ICON,0,0,LR_DEFAULTSIZE|LR_LOADFROMFILE); //从全局的::LoadImage函数从本地加载自定义ico图标
	wndClass.hCursor = LoadCursor( NULL, IDC_ARROW );    //指定窗口类的光标句柄。
	wndClass.hbrBackground=(HBRUSH)GetStockObject(GRAY_BRUSH);  //为hbrBackground成员指定一个灰色画刷句柄
	wndClass.lpszMenuName = NULL;						//用一个以空终止的字符串，指定菜单资源的名字。
	wndClass.lpszClassName = _T("ForTheDreamOfGameDevelop");		//用一个以空终止的字符串，指定窗口类的名字。

	if( !RegisterClassEx( &amp;wndClass ) )				//设计完窗口后，需要对窗口类进行注册，这样才能创建该类型的窗口
		return -1;		

	HWND hwnd = CreateWindow( _T("ForTheDreamOfGameDevelop"),WINDOW_TITLE,			//喜闻乐见的创建窗口函数CreateWindow
		WS_OVERLAPPEDWINDOW, CW_USEDEFAULT, CW_USEDEFAULT, SCREEN_WIDTH,
		SCREEN_HEIGHT, NULL, NULL, hInstance, NULL );


	//Direct3D资源的初始化，调用失败用messagebox予以显示
	if (!(S_OK==Direct3D_Init (hwnd,hInstance)))
	{
		MessageBox(hwnd, _T("Direct3D初始化失败~！"), _T("浅墨的消息窗口"), 0); //使用MessageBox函数，创建一个消息窗口 
	}
	PlaySound(L"GameMedia\\仙剑三·原版主题曲.wav", NULL, SND_FILENAME | SND_ASYNC|SND_LOOP);   //循环播放背景音乐

	

	MoveWindow(hwnd,200,10,SCREEN_WIDTH,SCREEN_HEIGHT,true);   //调整窗口显示时的位置，窗口左上角位于屏幕坐标（200，0）处
	ShowWindow( hwnd, nShowCmd );    //调用Win32函数ShowWindow来显示窗口
	UpdateWindow(hwnd);  //对窗口进行更新，就像我们买了新房子要装修一样

	//进行DirectInput类的初始化
	g_pDInput = new DInputClass();
	g_pDInput-&gt;Init(hwnd,hInstance,DISCL_FOREGROUND | DISCL_NONEXCLUSIVE,DISCL_FOREGROUND | DISCL_NONEXCLUSIVE);

	//消息循环过程
	MSG msg = { 0 };  //初始化msg
	while( msg.message != WM_QUIT )			//使用while循环
	{
		if( PeekMessage( &amp;msg, 0, 0, 0, PM_REMOVE ) )   //查看应用程序消息队列，有消息时将队列中的消息派发出去。
		{
			TranslateMessage( &amp;msg );		//将虚拟键消息转换为字符消息
			DispatchMessage( &amp;msg );		//该函数分发一个消息给窗口程序。
		}
		else
		{
			Direct3D_Update(hwnd);         //调用更新函数，进行画面的更新
			Direct3D_Render(hwnd);			//调用渲染函数，进行画面的渲染			
		}
	}

	UnregisterClass(_T("ForTheDreamOfGameDevelop"), wndClass.hInstance);
	return 0;  
}



//*****************************************************************************************
// Name: WndProc()
// Desc: 对窗口消息进行处理
//*****************************************************************************************
LRESULT CALLBACK WndProc( HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam )   //窗口过程函数WndProc
{
	switch( message )				//switch语句开始
	{
	case WM_PAINT:					 // 客户区重绘消息
		Direct3D_Render(hwnd);          //调用Direct3D_Render函数，进行画面的绘制
		ValidateRect(hwnd, NULL);   // 更新客户区的显示
		break;									//跳出该switch语句

	case WM_KEYDOWN:                // 键盘按下消息
		if (wParam == VK_ESCAPE)    // ESC键
			DestroyWindow(hwnd);    // 销毁窗口, 并发送一条WM_DESTROY消息
		break;
	case WM_DESTROY:				//窗口销毁消息
		Direct3D_CleanUp();     //调用Direct3D_CleanUp函数，清理COM接口对象
		PostQuitMessage( 0 );		//向系统表明有个线程有终止请求。用来响应WM_DESTROY消息
		break;						//跳出该switch语句

	default:						//若上述case条件都不符合，则执行该default语句
		return DefWindowProc( hwnd, message, wParam, lParam );		//调用缺省的窗口过程来为应用程序没有处理的窗口消息提供缺省的处理。
	}

	return 0;					//正常退出
}


//*****************************************************************************************
// Name: Direct3D_Init( )
// Desc: 初始化Direct3D
// Point:【Direct3D初始化四步曲】
//		1.初始化四步曲之一，创建Direct3D接口对象
//		2.初始化四步曲之二，获取硬件设备信息
//		3.初始化四步曲之三，填充结构体
//		4.初始化四步曲之四，创建Direct3D设备接口
//*****************************************************************************************

HRESULT Direct3D_Init(HWND hwnd,HINSTANCE hInstance)
{

	//--------------------------------------------------------------------------------------
	// 【Direct3D初始化四步曲之一，创接口】：创建Direct3D接口对象, 以便用该Direct3D对象创建Direct3D设备对象
	//--------------------------------------------------------------------------------------
	LPDIRECT3D9  pD3D = NULL; //Direct3D接口对象的创建
	if( NULL == ( pD3D = Direct3DCreate9( D3D_SDK_VERSION ) ) ) //初始化Direct3D接口对象，并进行DirectX版本协商
 			return E_FAIL;

	//--------------------------------------------------------------------------------------
	// 【Direct3D初始化四步曲之二,取信息】：获取硬件设备信息
	//--------------------------------------------------------------------------------------
	D3DCAPS9 caps; int vp = 0;
	if( FAILED( pD3D-&gt;GetDeviceCaps( D3DADAPTER_DEFAULT, D3DDEVTYPE_HAL, &amp;caps ) ) )
		{
			return E_FAIL;
		}
	if( caps.DevCaps &amp; D3DDEVCAPS_HWTRANSFORMANDLIGHT )
		vp = D3DCREATE_HARDWARE_VERTEXPROCESSING;   //支持硬件顶点运算，我们就采用硬件顶点运算，妥妥的
	else
		vp = D3DCREATE_SOFTWARE_VERTEXPROCESSING; //不支持硬件顶点运算，无奈只好采用软件顶点运算

	//--------------------------------------------------------------------------------------
	// 【Direct3D初始化四步曲之三，填内容】：填充D3DPRESENT_PARAMETERS结构体
	//--------------------------------------------------------------------------------------
	D3DPRESENT_PARAMETERS d3dpp; 
	ZeroMemory(&amp;d3dpp, sizeof(d3dpp));
	d3dpp.BackBufferWidth            = SCREEN_WIDTH;
	d3dpp.BackBufferHeight           = SCREEN_HEIGHT;
	d3dpp.BackBufferFormat           = D3DFMT_A8R8G8B8;
	d3dpp.BackBufferCount            = 2;
	d3dpp.MultiSampleType            = D3DMULTISAMPLE_NONE;
	d3dpp.MultiSampleQuality         = 0;
	d3dpp.SwapEffect                 = D3DSWAPEFFECT_DISCARD; 
	d3dpp.hDeviceWindow              = hwnd;
	d3dpp.Windowed                   = true;
	d3dpp.EnableAutoDepthStencil     = true; 
	d3dpp.AutoDepthStencilFormat     = D3DFMT_D24S8;
	d3dpp.Flags                      = 0;
	d3dpp.FullScreen_RefreshRateInHz = 0;
	d3dpp.PresentationInterval       = D3DPRESENT_INTERVAL_IMMEDIATE;

	//--------------------------------------------------------------------------------------
	// 【Direct3D初始化四步曲之四，创设备】：创建Direct3D设备接口
	//--------------------------------------------------------------------------------------
	if(FAILED(pD3D-&gt;CreateDevice(D3DADAPTER_DEFAULT, D3DDEVTYPE_HAL, 
		hwnd, vp, &amp;d3dpp, &amp;g_pd3dDevice)))
		return E_FAIL;


	//获取显卡信息到g_strAdapterName中，并在显卡名称之前加上“当前显卡型号：”字符串
	 wchar_t TempName[60]=L"当前显卡型号：";   //定义一个临时字符串，且方便了把"当前显卡型号："字符串引入我们的目的字符串中
	 D3DADAPTER_IDENTIFIER9 Adapter;  //定义一个D3DADAPTER_IDENTIFIER9结构体，用于存储显卡信息
	 pD3D-&gt;GetAdapterIdentifier(0,0,&amp;Adapter);//调用GetAdapterIdentifier，获取显卡信息
	 int len = MultiByteToWideChar(CP_ACP,0, Adapter.Description, -1, NULL, 0);//显卡名称现在已经在Adapter.Description中了，但是其为char类型，我们要将其转为wchar_t类型
	 MultiByteToWideChar(CP_ACP, 0, Adapter.Description, -1, g_strAdapterName, len);//这步操作完成后，g_strAdapterName中就为当前我们的显卡类型名的wchar_t型字符串了
	 wcscat_s(TempName,g_strAdapterName);//把当前我们的显卡名加到“当前显卡型号：”字符串后面，结果存在TempName中
	 wcscpy_s(g_strAdapterName,TempName);//把TempName中的结果拷贝到全局变量g_strAdapterName中，大功告成~

	if(!(S_OK==Objects_Init())) return E_FAIL;

	SAFE_RELEASE(pD3D) //LPDIRECT3D9接口对象的使命完成，我们将其释放掉



	return S_OK;
}


HRESULT Objects_Init()
{
	//创建字体
	D3DXCreateFont(g_pd3dDevice, 36, 0, 0, 1000, false, DEFAULT_CHARSET, 
		OUT_DEFAULT_PRECIS, DEFAULT_QUALITY, 0, _T("Calibri"), &amp;g_pTextFPS);
	D3DXCreateFont(g_pd3dDevice, 20, 0, 1000, 0, false, DEFAULT_CHARSET, 
		OUT_DEFAULT_PRECIS, DEFAULT_QUALITY, 0, L"华文中宋", &amp;g_pTextAdaperName); 
	D3DXCreateFont(g_pd3dDevice, 23, 0, 1000, 0, false, DEFAULT_CHARSET, 
		OUT_DEFAULT_PRECIS, DEFAULT_QUALITY, 0, L"微软雅黑", &amp;g_pTextHelper); 
	D3DXCreateFont(g_pd3dDevice, 26, 0, 1000, 0, false, DEFAULT_CHARSET, 
		OUT_DEFAULT_PRECIS, DEFAULT_QUALITY, 0, L"黑体", &amp;g_pTextInfor); 



	// 从X文件中加载网格数据
	LPD3DXBUFFER pAdjBuffer  = NULL;
	LPD3DXBUFFER pMtrlBuffer = NULL;

	D3DXLoadMeshFromX(L"95.X", D3DXMESH_MANAGED, g_pd3dDevice, 
		&amp;pAdjBuffer, &amp;pMtrlBuffer, NULL, &amp;g_dwNumMtrls, &amp;g_pMesh);
	// 读取材质和纹理数据
	D3DXMATERIAL *pMtrls = (D3DXMATERIAL*)pMtrlBuffer-&gt;GetBufferPointer(); //创建一个D3DXMATERIAL结构体用于读取材质和纹理信息
	g_pMaterials = new D3DMATERIAL9[g_dwNumMtrls];
	g_pTextures  = new LPDIRECT3DTEXTURE9[g_dwNumMtrls];
	for (DWORD i=0; i&lt;g_dwNumMtrls; i++) 
	{
		//获取材质，并设置一下环境光的颜色值
		g_pMaterials[i] = pMtrls[i].MatD3D;
		g_pMaterials[i].Ambient = g_pMaterials[i].Diffuse;

		//创建一下纹理对象
		g_pTextures[i]  = NULL;
		D3DXCreateTextureFromFileA(g_pd3dDevice, pMtrls[i].pTextureFilename, &amp;g_pTextures[i]);
	}
	SAFE_RELEASE(pAdjBuffer)
	SAFE_RELEASE(pMtrlBuffer)



	//创建柱子
	D3DXCreateCylinder(g_pd3dDevice, 280.0f, 10.0f, 3000.0f, 60, 60,  &amp;g_cylinder, 0);
	g_MaterialCylinder.Ambient  = D3DXCOLOR(1.0f, 0.0f, 0.0f, 1.0f);  
	g_MaterialCylinder.Diffuse  = D3DXCOLOR(1.0f, 0.0f, 0.0f, 1.0f);  
	g_MaterialCylinder.Specular = D3DXCOLOR(0.5f, 0.0f, 0.3f, 0.3f);  
	g_MaterialCylinder.Emissive = D3DXCOLOR(0.0f, 0.0f, 0.0f, 1.0f);

	// 设置光照  
	D3DLIGHT9 light;  
	::ZeroMemory(&amp;light, sizeof(light));  
	light.Type          = D3DLIGHT_DIRECTIONAL;  
	light.Ambient       = D3DXCOLOR(0.7f, 0.7f, 0.7f, 1.0f);  
	light.Diffuse       = D3DXCOLOR(1.0f, 1.0f, 1.0f, 1.0f);  
	light.Specular      = D3DXCOLOR(0.9f, 0.9f, 0.9f, 1.0f);  
	light.Direction     = D3DXVECTOR3(1.0f, 1.0f, 1.0f);  
	g_pd3dDevice-&gt;SetLight(0, &amp;light);  
	g_pd3dDevice-&gt;LightEnable(0, true);  
	g_pd3dDevice-&gt;SetRenderState(D3DRS_NORMALIZENORMALS, true);  
	g_pd3dDevice-&gt;SetRenderState(D3DRS_SPECULARENABLE, true);

	// 创建并初始化虚拟摄像机
	g_pCamera = new CameraClass(g_pd3dDevice);
	g_pCamera-&gt;SetCameraPosition(&amp;D3DXVECTOR3(0.0f, 1000.0f, -1200.0f));  //设置摄像机所在的位置
	g_pCamera-&gt;SetTargetPosition(&amp;D3DXVECTOR3(0.0f, 1200.0f, 0.0f));  //设置目标观察点所在的位置
	g_pCamera-&gt;SetViewMatrix();  //设置取景变换矩阵
	g_pCamera-&gt;SetProjMatrix();  //设置投影变换矩阵

	// 创建并初始化地形
	g_pTerrain = new TerrainClass(g_pd3dDevice);   
	g_pTerrain-&gt;LoadTerrainFromFile(L"GameMedia\\heighmap.raw", L"GameMedia\\terrainstone.jpg");		//从文件加载高度图和纹理
	g_pTerrain-&gt;InitTerrain(200, 200, 30.0f, 6.0f);  //四个值分别是顶点行数，顶点列数，顶点间间距，缩放系数

	//创建并初始化天空对象
	g_pSkyBox = new SkyBoxClass( g_pd3dDevice );
	g_pSkyBox-&gt;LoadSkyTextureFromFile(L"GameMedia\\frontsnow1.jpg",L"GameMedia\\backsnow1.jpg",L"GameMedia\\leftsnow1.jpg",L"GameMedia\\rightsnow1.jpg", L"GameMedia\\topsnow1.jpg");//从文件加载前、后、左、右、顶面5个面的纹理图
	g_pSkyBox-&gt;InitSkyBox(20000);  //设置天空盒的边长




	return S_OK;
}

void				Direct3D_Update( HWND hwnd)
{
	//使用DirectInput类读取数据
	g_pDInput-&gt;GetInput();

	// 沿摄像机各分量移动视角
	if (g_pDInput-&gt;IsKeyDown(DIK_A))  g_pCamera-&gt;MoveAlongRightVec(-0.3f);
	if (g_pDInput-&gt;IsKeyDown(DIK_D))  g_pCamera-&gt;MoveAlongRightVec( 0.3f);
	if (g_pDInput-&gt;IsKeyDown(DIK_W)) g_pCamera-&gt;MoveAlongLookVec( 0.3f);
	if (g_pDInput-&gt;IsKeyDown(DIK_S))  g_pCamera-&gt;MoveAlongLookVec(-0.3f);
	if (g_pDInput-&gt;IsKeyDown(DIK_R))  g_pCamera-&gt;MoveAlongUpVec( 0.3f);
	if (g_pDInput-&gt;IsKeyDown(DIK_F))  g_pCamera-&gt;MoveAlongUpVec(-0.3f);

	//沿摄像机各分量旋转视角
	if (g_pDInput-&gt;IsKeyDown(DIK_LEFT))  g_pCamera-&gt;RotationUpVec(-0.003f);
	if (g_pDInput-&gt;IsKeyDown(DIK_RIGHT))  g_pCamera-&gt;RotationUpVec( 0.003f);
	if (g_pDInput-&gt;IsKeyDown(DIK_UP))  g_pCamera-&gt;RotationRightVec(-0.003f);
	if (g_pDInput-&gt;IsKeyDown(DIK_DOWN))  g_pCamera-&gt;RotationRightVec( 0.003f);
	if (g_pDInput-&gt;IsKeyDown(DIK_Q)) g_pCamera-&gt;RotationLookVec(0.001f);
	if (g_pDInput-&gt;IsKeyDown(DIK_E)) g_pCamera-&gt;RotationLookVec( -0.001f);

	//鼠标控制右向量和上向量的旋转
	g_pCamera-&gt;RotationUpVec(g_pDInput-&gt;MouseDX()* 0.001f);
	g_pCamera-&gt;RotationRightVec(g_pDInput-&gt;MouseDY() * 0.001f);

	//鼠标滚轮控制观察点收缩操作
	static FLOAT fPosZ=0.0f;
	fPosZ += g_pDInput-&gt;MouseDZ()*0.03f;

	//计算并设置取景变换矩阵
	D3DXMATRIX matView;
	g_pCamera-&gt;CalculateViewMatrix(&amp;matView);
	g_pd3dDevice-&gt;SetTransform(D3DTS_VIEW, &amp;matView);

	//把正确的世界变换矩阵存到g_matWorld中
	D3DXMatrixTranslation(&amp;g_matWorld, 0.0f, 0.0f, fPosZ);


	//以下这段代码用于限制鼠标光标移动区域
	POINT lt,rb;
	RECT rect;
	GetClientRect(hwnd,&amp;rect);  //取得窗口内部矩形
	//将矩形左上点坐标存入lt中
	lt.x = rect.left;
	lt.y = rect.top;
	//将矩形右下坐标存入rb中
	rb.x = rect.right;
	rb.y = rect.bottom;
	//将lt和rb的窗口坐标转换为屏幕坐标
	ClientToScreen(hwnd,&lt;);
	ClientToScreen(hwnd,&amp;rb);
	//以屏幕坐标重新设定矩形区域
	rect.left = lt.x;
	rect.top = lt.y;
	rect.right = rb.x;
	rect.bottom = rb.y;
	//限制鼠标光标移动区域
	ClipCursor(&amp;rect);

	ShowCursor(false);		//隐藏鼠标光标

}



//*****************************************************************************************
// Name: Direct3D_Render()
// Desc: 进行图形的渲染操作
// Point:【Direct3D渲染五步曲】
//		1.渲染五步曲之一，清屏操作
//		2.渲染五步曲之二，开始绘制
//		3.渲染五步曲之三，正式绘制
//		4.渲染五步曲之四，结束绘制
//		5.渲染五步曲之五，翻转显示
//*****************************************************************************************

void Direct3D_Render(HWND hwnd)
{
	//--------------------------------------------------------------------------------------
	// 【Direct3D渲染五步曲之一】：清屏操作
	//--------------------------------------------------------------------------------------
	g_pd3dDevice-&gt;Clear(0, NULL, D3DCLEAR_TARGET|D3DCLEAR_ZBUFFER|D3DCLEAR_STENCIL, D3DCOLOR_XRGB(100, 255, 255), 1.0f, 0);

	//--------------------------------------------------------------------------------------
	// 【Direct3D渲染五步曲之二】：开始绘制
	//--------------------------------------------------------------------------------------
	g_pd3dDevice-&gt;BeginScene();                     // 开始绘制
	
	//--------------------------------------------------------------------------------------
	// 【Direct3D渲染五步曲之三】：正式绘制
	//--------------------------------------------------------------------------------------


	
	//绘制柱子
	D3DXMATRIX TransMatrix, RotMatrix, FinalMatrix;
	D3DXMatrixRotationX(&amp;RotMatrix, -D3DX_PI * 0.5f);
	g_pd3dDevice-&gt;SetMaterial(&amp;g_MaterialCylinder);
	for(int i = 0; i &lt; 4; i++)
	{
		D3DXMatrixTranslation(&amp;TransMatrix, -300.0f, 0.0f, -350.0f + (i * 500.0f));
		FinalMatrix = RotMatrix * TransMatrix ;
		g_pd3dDevice-&gt;SetTransform(D3DTS_WORLD, &amp;FinalMatrix);
		g_cylinder-&gt;DrawSubset(0);

		D3DXMatrixTranslation(&amp;TransMatrix, 300.0f, 0.0f, -350.0f + (i * 500.0f));
		FinalMatrix = RotMatrix * TransMatrix ;
		g_pd3dDevice-&gt;SetTransform(D3DTS_WORLD, &amp;FinalMatrix);
		g_cylinder-&gt;DrawSubset(0);
	}

	//绘制人物
	D3DXMATRIX mScal,mRot2,mTrans,mFinal;   //定义一些矩阵，准备对大黄蜂进行矩阵变换
	D3DXMatrixTranslation(&amp;mTrans,0.0f,600.0f,200.0f);
	D3DXMatrixScaling(&amp;mScal,3.0f,3.0f,3.0f);
	mFinal=mScal*mTrans*g_matWorld;
	g_pd3dDevice-&gt;SetTransform(D3DTS_WORLD, &amp;mFinal);//设置模型的世界矩阵，为绘制做准备
	// 用一个for循环，进行模型的网格各个部分的绘制
	for (DWORD i = 0; i &lt; g_dwNumMtrls; i++)
	{
		g_pd3dDevice-&gt;SetMaterial(&amp;g_pMaterials[i]);  //设置此部分的材质
		g_pd3dDevice-&gt;SetTexture(0, g_pTextures[i]);//设置此部分的纹理
		g_pMesh-&gt;DrawSubset(i);  //绘制此部分
	}

	//绘制地形
	g_pTerrain-&gt;RenderTerrain(&amp;g_matWorld, false);  //渲染地形，且第二个参数设为false，表示不渲染出地形的线框

	//绘制天空
	D3DXMATRIX matSky,matTransSky,matRotSky;
	D3DXMatrixTranslation(&amp;matTransSky,0.0f,-3500.0f,0.0f);
	D3DXMatrixRotationY(&amp;matRotSky, -0.000005f*timeGetTime());   //旋转天空网格, 简单模拟云彩运动效果
	matSky=matTransSky*matRotSky;
	g_pSkyBox-&gt;RenderSkyBox(&amp;matSky, false);

	//绘制文字信息
	HelpText_Render(hwnd);


	//--------------------------------------------------------------------------------------
	// 【Direct3D渲染五步曲之四】：结束绘制
	//--------------------------------------------------------------------------------------
	g_pd3dDevice-&gt;EndScene();                       // 结束绘制
	//--------------------------------------------------------------------------------------
	// 【Direct3D渲染五步曲之五】：显示翻转
	//--------------------------------------------------------------------------------------
	g_pd3dDevice-&gt;Present(NULL, NULL, NULL, NULL);  // 翻转与显示
	 
}


void HelpText_Render(HWND hwnd)
{
	//定义一个矩形，用于获取主窗口矩形
	RECT formatRect;
	GetClientRect(hwnd, &amp;formatRect);

	//在窗口右上角处，显示每秒帧数
	formatRect.top = 5;
	int charCount = swprintf_s(g_strFPS, 20, _T("FPS:%0.3f"), Get_FPS() );
	g_pTextFPS-&gt;DrawText(NULL, g_strFPS, charCount , &amp;formatRect, DT_TOP | DT_RIGHT, D3DCOLOR_RGBA(0,239,136,255));

	//显示显卡类型名
	g_pTextAdaperName-&gt;DrawText(NULL,g_strAdapterName, -1, &amp;formatRect, 
		DT_TOP | DT_LEFT, D3DXCOLOR(1.0f, 0.5f, 0.0f, 1.0f));

	// 输出帮助信息
	formatRect.left = 0,formatRect.top = 380;
	g_pTextInfor-&gt;DrawText(NULL, L"控制说明:", -1, &amp;formatRect, 
		DT_SINGLELINE | DT_NOCLIP | DT_LEFT, D3DCOLOR_RGBA(235,123,230,255));
	formatRect.top += 35;
	g_pTextHelper-&gt;DrawText(NULL, L"    W：向前飞翔     S：向后飞翔 ", -1, &amp;formatRect, 
		DT_SINGLELINE | DT_NOCLIP | DT_LEFT, D3DCOLOR_RGBA(255,200,0,255));
	formatRect.top += 25;
	g_pTextHelper-&gt;DrawText(NULL, L"    A：向左飞翔     D：向右飞翔", -1, &amp;formatRect, 
		DT_SINGLELINE | DT_NOCLIP | DT_LEFT, D3DCOLOR_RGBA(255,200,0,255));
	formatRect.top += 25;
	g_pTextHelper-&gt;DrawText(NULL, L"    R：垂直向上飞翔     F：垂直向下飞翔", -1, &amp;formatRect, 
		DT_SINGLELINE | DT_NOCLIP | DT_LEFT, D3DCOLOR_RGBA(255,200,0,255));
	formatRect.top += 25;
	g_pTextHelper-&gt;DrawText(NULL, L"    Q：向左倾斜       E：向右倾斜", -1, &amp;formatRect, 
		DT_SINGLELINE | DT_NOCLIP | DT_LEFT, D3DCOLOR_RGBA(255,200,0,255));
	formatRect.top += 25;
	g_pTextHelper-&gt;DrawText(NULL, L"    上、下、左、右方向键、鼠标移动：视角变化 ", -1, &amp;formatRect, 
		DT_SINGLELINE | DT_NOCLIP | DT_LEFT, D3DCOLOR_RGBA(255,200,0,255));
	formatRect.top += 25;
	g_pTextHelper-&gt;DrawText(NULL, L"     鼠标滚轮：人物模型Y轴方向移动", -1, &amp;formatRect, 
		DT_SINGLELINE | DT_NOCLIP | DT_LEFT, D3DCOLOR_RGBA(255,200,0,255));
	formatRect.top += 25;
	g_pTextHelper-&gt;DrawText(NULL, L"    ESC键 : 退出程序", -1, &amp;formatRect, 
		DT_SINGLELINE | DT_NOCLIP | DT_LEFT, D3DCOLOR_RGBA(255,200,0,255));
}

//*****************************************************************************************
// Name：Get_FPS（）函数
// Desc: 用于计算帧速率
//*****************************************************************************************
float Get_FPS()
{

	//定义四个静态变量
	static float  fps = 0; //我们需要计算的FPS值
	static int    frameCount = 0;//帧数
	static float  currentTime =0.0f;//当前时间
	static float  lastTime = 0.0f;//持续时间

	frameCount++;//每调用一次Get_FPS()函数，帧数自增1
	currentTime = timeGetTime()*0.001f;//获取系统时间，其中timeGetTime函数返回的是以毫秒为单位的系统时间，所以需要乘以0.001，得到单位为秒的时间

	//如果当前时间减去持续时间大于了1秒钟，就进行一次FPS的计算和持续时间的更新，并将帧数值清零
	if(currentTime - lastTime &gt; 1.0f) //将时间控制在1秒钟
	{
		fps = (float)frameCount /(currentTime - lastTime);//计算这1秒钟的FPS值
		lastTime = currentTime; //将当前时间currentTime赋给持续时间lastTime，作为下一秒的基准时间
		frameCount    = 0;//将本次帧数frameCount值清零
	}

	return fps;
}



//*****************************************************************************************
// Name: Direct3D_CleanUp()
// Desc: 对Direct3D的资源进行清理，释放COM接口对象
//*****************************************************************************************
void Direct3D_CleanUp()
{

	//释放COM接口对象
	for (DWORD i = 0; i&lt;g_dwNumMtrls; i++) 
		SAFE_RELEASE(g_pTextures[i]);
	SAFE_DELETE(g_pTextures); 
	SAFE_DELETE(g_pMaterials); 
	SAFE_DELETE(g_pDInput);
	SAFE_RELEASE(g_cylinder);
	SAFE_RELEASE(g_pMesh);
	SAFE_RELEASE(g_pd3dDevice);
	SAFE_RELEASE(g_pTextAdaperName)
	SAFE_RELEASE(g_pTextHelper)
	SAFE_RELEASE(g_pTextInfor)
	SAFE_RELEASE(g_pTextFPS)
	SAFE_RELEASE(g_pd3dDevice)
}</span></code></pre>
      <br/>
      <br/>
      <br/>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        然后放出一些截图吧：
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <span style="font-family: 'Microsoft YaHei'; font-size: 14px; ">
         你做梦都不会发现，你所置身的“真实”的蓝天白云，其实就是24个顶点加上一些贴图罢了。
        </span>
        <br/>
       </span>
      </p>
      <p>
       <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364156618_7184.png"/>
       <br/>
      </p>
      <p>
       <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364156646_4419.png"/>
       <br/>
      </p>
      <p>
       <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364156681_1260.png"/>
       <br/>
      </p>
      <p>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364156701_4599.png"/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364156734_6858.png"/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364156763_9745.png"/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        最后贴上揭露“天机”的镜头一张，大家其实就是在这个盒子中乐不思蜀的：
       </span>
      </p>
      <p>
       <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364156783_6319.png"/>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;">
        <span style="font-weight: normal;">
         <br/>
        </span>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        因为我们在这个程序中并没有限定移动区域。所以是可以任意飞翔的，如果你毅力够大（不去调相机的移动速度的话），完全可以飞啊飞，最后突出天空盒的包围，识破天机。不过，这估计得“飞”个几分钟哦。
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 'Microsoft YaHei'; ">
        <span style="font-weight: normal;">
         文章最后，依旧是放出本篇文章配套源代码的下载：
        </span>
        <br/>
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 'Microsoft YaHei'; ">
        <br/>
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 'Microsoft YaHei'; ">
        <br/>
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 'Microsoft YaHei'; ">
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; background-color: white; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; ">
       <span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: 'Microsoft YaHei'; font-size: 32px; color: rgb(0, 153, 0); font-weight: normal;">
        本节笔记配套源代码请点击这里下载：
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; background-color: white; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; ">
       <span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: 'Microsoft YaHei'; font-size: 32px; color: rgb(0, 153, 0); font-weight: normal;">
        <br/>
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; background-color: white; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; ">
       <span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: 'Microsoft YaHei'; font-size: 32px; color: rgb(0, 153, 0); font-weight: normal;">
        <a href="http://download.csdn.net/detail/zhmxy555/5177478" rel="noopener noreferrer" style="color: rgb(202, 0, 0); text-decoration: none; font-family: Arial; font-size: 14px; " target="_blank">
         <span style="font-family: 'Microsoft YaHei'; font-size: 32px; ">
          <span style="color: rgb(153, 0, 0); ">
           【浅墨DirectX提高班】配套源代码之十七下载
          </span>
         </span>
        </a>
       </span>
      </p>
      <br style="font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; "/>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 'Microsoft YaHei'; ">
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 'Microsoft YaHei'; ">
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 微软雅黑; ">
        以上就是本节笔记的全部内容，更多精彩内容，且听下回分解。
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 微软雅黑; ">
        浅墨在这里，希望喜欢游戏开发系列文章的朋友们能留下你们的评论，每次浅墨登陆博客看到大家的留言的时候都会非常开心，感觉自己正在传递一种信仰，一种精神。
       </span>
       <span style="font-family: 微软雅黑; ">
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 微软雅黑; ">
        <br/>
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 微软雅黑; ">
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: 'Microsoft YaHei'; ">
        文章最后，依然是【每文一语】栏目，今天的句子是：
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: 'Microsoft YaHei'; ">
        <br/>
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: 'Microsoft YaHei'; ">
        <span style="font-size: 24px; color: rgb(51, 51, 255); ">
         迷茫时，坚定的对自己说，当时的梦想，我还记得。
        </span>
        <br/>
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: 'Microsoft YaHei'; ">
        <span style="font-size: 24px; color: rgb(51, 51, 255); ">
         <br/>
        </span>
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: 'Microsoft YaHei'; ">
        <span style="font-size: 24px; color: rgb(51, 51, 255); ">
         <img alt="" src="https://img-my.csdn.net/uploads/201303/25/1364160637_5032.jpg"/>
         <br/>
        </span>
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 'Microsoft YaHei'; ">
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="font-family: 'Microsoft YaHei'; ">
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; ">
       <span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; ">
        <span style="font-family: 'Microsoft YaHei'; ">
         下周一，让我们离游戏开发的梦想更近一步。
        </span>
       </span>
      </p>
      <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; background-color: white; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; ">
       <span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; ">
        <span style="font-family: 'Microsoft YaHei'; ">
         下周一，游戏开发笔记，我们，不见不散。
        </span>
       </span>
      </p>
      <br/>
      <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
       <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; text-align: center; line-height: 26px;">
        <span style="font-family:Microsoft YaHei;font-size:14px;">
         ------------------------------------------------------------------------------------------------------------------------------
        </span>
       </p>
       <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; line-height: 26px;">
        <span style="margin: 0px; padding: 0px;">
         <span style="font-family:Microsoft YaHei;font-size:14px;">
         </span>
        </span>
       </p>
      </blockquote>
      <span style="white-space: pre;">
       <span style="font-family:Microsoft YaHei;font-size:14px;">
       </span>
      </span>
      <div style="text-align: center;">
       <span style="font-family:Microsoft YaHei;font-size:14px;">
        <strong>
         <span style="color: rgb(0, 153, 0);">
          浅墨历时一年为游戏编程爱好者锻造的著作
         </span>
         <span style="color:#999999;">
          ：
         </span>
         <span style="color:#cc0000;">
          《逐梦旅程：Windows游戏编程之从零开始》
         </span>
        </strong>
       </span>
      </div>
      <span style="font-family:Microsoft YaHei;font-size:14px;">
      </span>
      <div style="text-align: center;">
       <span style="line-height: 14.399999618530273px;">
        <span style="font-family:Microsoft YaHei;font-size:14px;">
         <br/>
        </span>
       </span>
      </div>
      <span style="font-family:Microsoft YaHei;font-size:14px;">
      </span>
      <div style="text-align: center;">
       <span style="font-family:Microsoft YaHei;font-size:14px;">
        如果你喜欢浅墨写的【Visual C++】游戏开发系列博客文章，那么你一定会爱上这本书。
       </span>
      </div>
      <span style="font-family:Microsoft YaHei;font-size:14px;">
      </span>
      <div style="text-align: center;">
       <span style="line-height: 14.399999618530273px;">
        <span style="font-family:Microsoft YaHei;font-size:14px;">
         <br/>
        </span>
       </span>
      </div>
      <span style="font-family:Microsoft YaHei;font-size:14px;">
      </span>
      <div style="text-align: center;">
       <span style="font-family:Microsoft YaHei;font-size:14px;">
        这是浅墨专门为热爱游戏编程的朋友们写的入门级游戏编程宝典。
       </span>
      </div>
      <p style="text-align: center;">
      </p>
      <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
       <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
        <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; line-height: 26px;">
         <span style="margin: 0px; padding: 0px;">
          <span style="font-family:Microsoft YaHei;font-size:14px;">
           <span style="margin: 0px; padding: 0px;">
           </span>
          </span>
         </span>
        </p>
        <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
         <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
          <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
           <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
            <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
             <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
             </blockquote>
            </blockquote>
           </blockquote>
          </blockquote>
         </blockquote>
        </blockquote>
       </blockquote>
      </blockquote>
      <div style="text-align: center;">
       <span style="font-family:Microsoft YaHei;font-size:14px;">
        <img alt="" height="200" src="https://img-blog.csdn.net/20131101013038796?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcG9lbV9xaWFubW8=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" style="max-width: 100%; line-height: 14.399999618530273px; border: none;" width="200"/>
       </span>
      </div>
      <div style="text-align: center;">
       <span style="line-height: 14.399999618530273px;">
        <span style="font-family:Microsoft YaHei;font-size:14px;">
         <br/>
        </span>
       </span>
      </div>
      <span style="font-family:Microsoft YaHei;font-size:14px;">
      </span>
      <div style="text-align: center;">
       <span style="font-family:Microsoft YaHei;font-size:14px;">
        <strong>
         <a href="http://pan.baidu.com/s/1kTjwDDX" rel="nofollow noopener noreferrer" style="color: rgb(255, 0, 0); text-decoration: none;" target="_blank">
          彩版样章试读下载
         </a>
         |
        </strong>
        <span style="color: rgb(51, 204, 51);">
         <strong>
          <a href="http://pan.baidu.com/s/13PVB3" rel="nofollow noopener noreferrer" style="color: rgb(51, 204, 51); text-decoration: none;" target="_blank">
           配套源代码下载
          </a>
         </strong>
        </span>
       </span>
      </div>
      <div style="text-align: center;">
       <span style="line-height: 14.399999618530273px;">
        <span style="font-family:Microsoft YaHei;font-size:14px;">
         <br/>
        </span>
       </span>
      </div>
      <span style="font-family:Microsoft YaHei;font-size:14px;">
      </span>
      <div style="text-align: center;">
       <span style="font-family:Microsoft YaHei;font-size:14px;">
        <strong>
         <a href="http://blog.csdn.net/poem_qianmo/article/details/12895487" rel="noopener noreferrer" style="color: rgb(205, 0, 205); text-decoration: none;" target="_blank">
          书本维护页面|
         </a>
        </strong>
        <a href="http://product.dangdang.com/23346295.html#ddclick?act=click&amp;pos=23346295_0_1_q&amp;cat=&amp;key=%D6%F0%C3%CE%C2%C3%B3%CC&amp;qinfo=2_1_48&amp;pinfo=&amp;minfo=&amp;ninfo=&amp;custid=&amp;permid=2013102101491612912464917247508366&amp;ref=http%3A%2F%2Fwww.dangdang.com%2F&amp;rcount=&amp;type=&amp;t=1382522141000" rel="nofollow noopener noreferrer" style="color: rgb(0, 153, 0); text-decoration: none;" target="_blank">
         <strong>
          当当网|
         </strong>
        </a>
        <span style="color: rgb(102, 102, 102);">
         <strong>
          <a href="http://item.jd.com/11331215.html?utm_source=p.yiqifa.com&amp;utm_medium=tuiguang&amp;utm_campaign=t_1_651210&amp;utm_term=7de26d6a7bb24369b7741f913f399c46" rel="nofollow noopener noreferrer" style="color: rgb(240, 0, 0); text-decoration: none;" target="_blank">
           京东商城|
          </a>
          <a href="http://www.amazon.cn/%E5%9B%BE%E4%B9%A6/dp/B00FIL0F1U" rel="nofollow noopener noreferrer" style="color: rgb(51, 102, 255); text-decoration: none;" target="_blank">
           亚马逊
          </a>
         </strong>
        </span>
       </span>
      </div>
      <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
       <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
        <p style="text-align: center;">
        </p>
       </blockquote>
      </blockquote>
      <blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;">
       <p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; text-align: center; line-height: 26px;">
        <span style="margin: 0px; padding: 0px;">
         <span style="margin: 0px; padding: 0px;">
          <span style="font-family:Microsoft YaHei;font-size:14px;">
           ------------------------------------------------------------------------------------------------------------------------------
          </span>
         </span>
        </span>
       </p>
      </blockquote>
      <br/>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <p>
       <span style="font-family:'Microsoft YaHei';font-size:14px;font-weight: normal;">
        <br/>
       </span>
      </p>
      <br/>
     </blockquote>
    </h3>
   </div>
  </div>
 </article>
</div>



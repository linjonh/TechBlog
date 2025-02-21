---
layout: post
title: 一起学RustRust学习方法及学习路线汇总赠书Rust游戏开发实战
date: 2024-12-26 20:32:52 +0800
categories: [一起学Rust]
tags: [开发语言,学习,rust]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=139715995
    alt: 一起学RustRust学习方法及学习路线汇总赠书Rust游戏开发实战
artid: 139715995
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【一起学Rust】Rust学习方法及学习路线汇总（赠书：《Rust游戏开发实战》）
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
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/483cea92a525f2cc6d2e098885be1703.webp?x-image-process=image/format,png#pic_center"/>
    </p>
    <p>
    </p>
    <div class="toc">
     <h4>
      文章目录
     </h4>
     <ul>
      <li>
       <a href="#_6" rel="nofollow">
        前言
       </a>
      </li>
      <li>
       <a href="#Rust_12" rel="nofollow">
        一、如何才能学会Rust？
       </a>
      </li>
      <li>
       <a href="#Rust_23" rel="nofollow">
        二、Rust学习路线图
       </a>
      </li>
      <li>
       <ul>
        <li>
         <ul>
          <li>
           <a href="#Rust_28" rel="nofollow">
            第一阶段：Rust基础学习
           </a>
          </li>
          <li>
           <a href="#Rust_37" rel="nofollow">
            第二阶段：Rust核心特性学习
           </a>
          </li>
          <li>
           <a href="#Rust_51" rel="nofollow">
            第三阶段：Rust高级特性和应用
           </a>
          </li>
          <li>
           <a href="#_65" rel="nofollow">
            第四阶段：项目实践
           </a>
          </li>
          <li>
           <a href="#_75" rel="nofollow">
            第五阶段：持续学习与探索
           </a>
          </li>
         </ul>
        </li>
       </ul>
      </li>
      <li>
       <a href="#Rust_81" rel="nofollow">
        三、Rust游戏开发
       </a>
      </li>
      <li>
       <a href="#_98" rel="nofollow">
        赠书方式
       </a>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <hr/>
    <h2>
     <a id="_6">
     </a>
     前言
    </h2>
    <p>
     Rust 生态飞速发展，展现出了勃勃生机。与一年以前相比，现在的 Rust 生态是足以满足开发的所有需求，无论你是Web开发者，物联网开发者，或者是操作系统开发者，又或者是游戏开发者，在Rust中总能找到你所需要的资源，无论是朋友，还是书籍影像制品，都会让你得到快速的提升，从而达到你的目的。
    </p>
    <hr/>
    <h2>
     <a id="Rust_12">
     </a>
     一、如何才能学会Rust？
    </h2>
    <p>
     Rust 难学，这已经不是一天两天的事情了，这已经是众所周知的事情。经过我的调研，在学习 Rust 过程中，存在的难点主要是以下几点：
    </p>
    <ol>
     <li>
      语法怪，与传统编程语言存在较大差异，导致如果有编程语言基础的人学习会造成巨大困难。
     </li>
     <li>
      所有权和借用检查难以理解，作为 Rust 的核心特性之一，它是保证内存安全的重要所在，可以避免数据竞争和野指针问题。
     </li>
     <li>
      生命周期标注，意味着在编写代码时就必须关注引用的生命周期，对于学习者来说是个头疼的问题。
     </li>
     <li>
      代码乱，由于Rust抛弃了传统编程语言思维，这就导致代码看起来跟C语言一样，一些代码看起来莫名其妙的。
     </li>
    </ol>
    <p>
     如果你现在正因为这些在考虑是否要继续学习下去，我希望你也能同时看到 Rust 好的一面。Rust 目前正在快速的改变这个世界，它所带来的收益是相当可观的，即使是微软或者 Linux 都在改用 Rust，而且现在 Rust 也存在很多高薪工作，如果你想要谋生也是一个绝佳的选择。
    </p>
    <p>
     幸运的是，社区的各路大神都在为方便学习 Rust 努力奋斗，有的人在翻译文档，有的人在录制视频，最终都是一个目的，帮助你学会 Rust。我也会分享大量学习 Rust 资料到我的博客，或者你可以与我联系，一起学习，一起成长。
    </p>
    <h2>
     <a id="Rust_23">
     </a>
     二、Rust学习路线图
    </h2>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/32402a3eaccd2eb0e1c904919e3d62f7.png#pic_center">
      <br/>
      关于学习 Rust，已经有很多专家努力帮助大家轻松掌握该语言。如上图就是最新发布的 Rust 学习路线图，该路线图我会在后面的文章中详细讲解，这里简单介绍一下学习 Rust 的几个阶段：
     </img>
    </p>
    <h4>
     <a id="Rust_28">
     </a>
     第一阶段：Rust基础学习
    </h4>
    <p>
     <strong>
      1. 熟悉编程基础
     </strong>
    </p>
    <ul>
     <li>
      如果你没有编程基础，建议先学习一门简单的编程语言（如Python），以便理解基本的编程概念，如变量、数据类型、控制流语句等。
     </li>
    </ul>
    <p>
     <strong>
      2. Rust基础教程
     </strong>
    </p>
    <ul>
     <li>
      安装Rust工具链（rustup, cargo等），并阅读Rust官方文档，特别是入门指南。
     </li>
     <li>
      完成官方文档中的练习，并使用exercism.io或Rustlings练习题来加强理解。
     </li>
    </ul>
    <h4>
     <a id="Rust_37">
     </a>
     第二阶段：Rust核心特性学习
    </h4>
    <p>
     <strong>
      1. 数据结构
     </strong>
    </p>
    <ul>
     <li>
      学习Rust中的基本数据结构，如枚举（Enums）、结构体（Structs）、元组（Tuples）。
     </li>
     <li>
      举例：定义一个结构体表示一个矩形，包含长和宽两个字段，并实现一个方法来计算面积。
     </li>
    </ul>
    <p>
     <strong>
      2. 特质（Traits）和泛型（Generics）
     </strong>
    </p>
    <ul>
     <li>
      理解特质如何定义类型的行为，并使用泛型编写与类型无关的代码。
     </li>
     <li>
      举例：实现一个可打印（Printable）特质，允许不同类型的对象都能打印自身信息；使用泛型编写一个能够处理不同类型列表的函数。
     </li>
    </ul>
    <p>
     <strong>
      3. 所有权（Ownership）和借用（Borrowing）
     </strong>
    </p>
    <ul>
     <li>
      深入理解Rust的所有权系统和借用检查机制，这是Rust内存安全性的基础。
     </li>
     <li>
      举例：编写一个函数，该函数接受一个字符串的引用作为参数，并在函数内部进行字符串的拼接和返回（注意处理借用和所有权的转换）。
     </li>
    </ul>
    <h4>
     <a id="Rust_51">
     </a>
     第三阶段：Rust高级特性和应用
    </h4>
    <p>
     <strong>
      1. 并发编程
     </strong>
    </p>
    <ul>
     <li>
      学习Rust的并发编程模型，包括线程（Threads）、异步（Async/Await）等。
     </li>
     <li>
      举例：使用Rust的线程库编写一个简单的多线程程序，或者使用async/await编写一个异步HTTP客户端。
     </li>
    </ul>
    <p>
     <strong>
      2. 系统编程
     </strong>
    </p>
    <ul>
     <li>
      学习Rust在系统编程中的应用，如文件操作、网络编程等。
     </li>
     <li>
      举例：使用Rust的标准库编写一个文件读写程序，或者使用Rust的网络库编写一个简单的TCP服务器。
     </li>
    </ul>
    <p>
     <strong>
      3. 生态系统探索
     </strong>
    </p>
    <ul>
     <li>
      探索Rust的生态系统，了解常用的第三方库和工具，并尝试在项目中应用它们。
     </li>
     <li>
      举例：使用Cargo工具来管理项目依赖，并使用Serde库进行JSON序列化和反序列化。
     </li>
    </ul>
    <h4>
     <a id="_65">
     </a>
     第四阶段：项目实践
    </h4>
    <p>
     <strong>
      1. 基础项目
     </strong>
    </p>
    <ul>
     <li>
      使用Rust构建一些基础项目来巩固所学知识，如命令行工具、Web服务器等。
     </li>
     <li>
      举例：编写一个简单的命令行程序，用于文件搜索或文本处理；使用Actix或Rocket框架构建一个Web服务器。
     </li>
    </ul>
    <p>
     <strong>
      2. 进阶项目
     </strong>
    </p>
    <ul>
     <li>
      尝试构建更复杂的项目，如全栈应用、游戏、图形程序等。
     </li>
     <li>
      举例：使用Yew或Seed框架构建一个前端应用，并结合Tide或Warp作为后端框架构建全栈应用；或者使用Bevy等引擎编写一个简单的3D游戏。
     </li>
    </ul>
    <h4>
     <a id="_75">
     </a>
     第五阶段：持续学习与探索
    </h4>
    <ul>
     <li>
      不断跟踪Rust的发展动态，学习新的特性和库。
     </li>
     <li>
      参与Rust社区的活动和讨论，与同行交流经验和心得。
     </li>
     <li>
      尝试将Rust应用于实际项目中，解决真实世界的问题。
     </li>
    </ul>
    <h2>
     <a id="Rust_81">
     </a>
     三、Rust游戏开发
    </h2>
    <p>
     相比较传统的学习方式，带着目的去学习会是更加高效的方式，比如一边学习游戏开发，一边学习Rust语言，通过制作第一个自己制作的小游戏来学习Rust语言编程，能够极大地激发一个人的学习兴趣。
    </p>
    <p>
     当你开始探索Rust的世界时，想象一下将你的编程技能与创造令人兴奋的小游戏相结合的美好画面。通过亲手制作小游戏，你不仅能将Rust的语法、数据结构以及并发特性等知识点付诸实践，还能在解决问题的过程中不断提升自己的编程能力和逻辑思维。游戏开发带来的挑战性和成就感将激发你对Rust的浓厚兴趣，让你在学习的道路上不断前行。选择你热爱的游戏类型，设定明确的目标，逐步构建你的游戏世界，并在完成后与朋友们分享你的成果。这不仅是一次编程的学习之旅，更是一次充满乐趣和创造力的冒险。
    </p>
    <p>
     幸运的是
     <strong>
      Rust 游戏开发实战
     </strong>
     这本书就实现了通过做游戏来促进学习 Rust 的学习过程，帮助读者深刻理解所有权机制，并且在一个完整的游戏开发中强化并用好 Rust 内存管理机制。本书还引导读者掌握游戏开发知识，介绍了适用于 Unity、Unreal 等游戏引擎的技巧。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d02e96c9c3dcdea018e4d2a616d80d2d.png">
      <br/>
      本书以实际的游戏开发案例《地下城爬行者》为蓝本，深入剖析了Rust语言在游戏开发中的独特魅力和实用技巧。首先，书中详细指导了Rust开发环境的搭建和基础语法的掌握，帮助读者迅速把握Rust的核心概念，如所有权机制、借用规则和模式匹配。随后，介绍了Cargo作为Rust的包管理工具和构建系统，并推荐了如Clippy等代码分析工具，旨在提升读者的编码效率和代码质量。
     </img>
    </p>
    <p>
     书中不仅止步于此，更进一步深入探讨了实体组件系统（ECS）在游戏设计中的应用，详细说明了如何利用ECS来高效地管理游戏逻辑，实现代码的复用，并简化复杂系统的开发过程。此外，书中还详细解读了Rust的高级特性，如trait和泛型，展示了这些特性如何助力实现代码的模块化和可重用性，为游戏开发提供强大的支持。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/3bbd74bd7f54f23dec77f3c6e39a7f2b.png#pic_center">
      <br/>
      通过这本书，跟着大佬设计游戏，从“Hello World”开始一步一步、层层推进构建完整的小游戏，你不仅可以学习到传统的Rust知识，还能对实现游戏机制、移动、战斗、地图这些好玩的东西，到最后发布你的游戏，与伙伴们分享你的成果。学完这本书，你就是大神。
     </img>
    </p>
    <hr/>
    <h2>
     <a id="_98">
     </a>
     赠书方式
    </h2>
    <a href="https://union-click.jd.com/jdc?e=618%7Cpc%7C&amp;p=JF8BAQ8JK1olXQcHUFheC0gRA18IGlsUXwUHXF1bAE8TBV9MRANLAjZbERscSkAJHTdNTwcKBlMdBgABFksWA24KGF4dXgAKUFpbFxJSXzI4SSloPlgBKCM4VhdtRi9cXjlTWE5mAlJROEonAG4KHlITVQ4FVm5tCEwnQgEBGFoWWjYDZF5bCEIQAmsLGV4WXg4yU15UOBBCbWgMGwhFDwZQVgsKWxknM18LK1wVVBIEJh8PHE1lM18IK1glXQcCXVZZDUwQAWsUG1kWXAUGSF5bCEIQAmsLG1oTXgQyVl9cDEInM18LEiJhG2N3B1kBDzZTQmxeYCIdHGBjVyozChhIYAdpR1NdWk5aMF01TRRSM2o4" rel="nofollow">
     <img src="https://i-blog.csdnimg.cn/blog_migrate/acb72e9b9bbeb0c2f84fc83816cd808a.png">
     </img>
    </a>
    <p>
     本书作者
     <strong>
      赫伯特·沃尔弗森
     </strong>
     （Herbert Wolverson）是一名非常有经验的程序员，主要从事游戏开发工作，是 RLTK 和 Nox Futura 开源项目的开发者。他在游戏开发社区非常活跃，为多个开源项目做出过贡献。
    </p>
    <blockquote>
     <p>
      本次送书 5 本 评论区抽三位小伙伴送书
      <br/>
      活动时间：截止到 2024-06-23 20:00:00
      <br/>
      抽奖方式：利用网络公开的在线抽奖工具进行抽奖
      <br/>
      参与方式：关注、点赞、收藏，评论
      <br/>
      博主将从评论区随机抽取的 5 位小伙伴将免费获得此书！
      <br/>
      小伙伴们也可以在京东中，
      <br/>
      进行自主购买哦~(
      <strong>
       点击图片
      </strong>
      )
     </p>
    </blockquote>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



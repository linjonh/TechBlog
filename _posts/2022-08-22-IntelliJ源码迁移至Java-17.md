---
layout: post
title: IntelliJ源码迁移至Java-17
date: 2022-08-22 14:44:41 +0800
categories: [资讯]
tags: [spring,java,intellij-idea]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=126465491
    alt: IntelliJ源码迁移至Java-17
artid: 126465491
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     IntelliJ源码迁移至Java 17
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
     近日，JetBrain旗下开发工具 IntelliJ 宣布将源码迁移至 Java 17，这意味着，开发者在使用较低版本的时候，可能会存在兼容性问题。目前大多数平台和插件均使用了Java 17，而后边基于IntelliJ开发的IDE 2022.3版本，也需要Java 17来启动。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9d55beebc0b66397b471f9fcd7e62b02.png#pic_center">
      当然，为了让老项目能顺利进行，目前在IntelliJ中也编译了一些模块与之兼容。
     </img>
    </p>
    <p>
     众所周知，Java 17是继Java 11后最新的 Java LTS 版本，在其发布后，Spring Framework 6 和Spring Boot 3均纷纷把Java版本升级到了 17。
    </p>
    <p>
     <strong>
      这种情况下，依然需要使用Java 11
     </strong>
    </p>
    <p>
     如果开发者发布的插件中需要使用Java 17的新特性和API，则需要把插件配置文档plugin.xml中的since-build属性设置为223。而如果该插件需要在多版本的IDE上运行，例如2022.3和2022.2，那么你必须继续使用Java 11。
    </p>
    <p>
     如果开发者想编译intellij-community项目，只需要调用 Build Project，而此时IntelliJ IDEA会建议你自动下载JetBrains Runtime 17并将其设置为项目的JDK。
    </p>
    <p>
     详情&gt;&gt;
     <a href="https://blog.jetbrains.com/platform/2022/08/intellij-project-migrates-to-java-17/" rel="nofollow">
      https://blog.jetbrains.com/platform/2022/08/intellij-project-migrates-to-java-17/
     </a>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



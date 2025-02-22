---
layout: post
title: Windows下安装Java
date: 2025-01-14 08:37:07 +0800
categories: [实用技巧,java]
tags: [windows,jdk,java]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=47102903
    alt: Windows下安装Java
artid: 47102903
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Windows下安装Java
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p>
     关于Linux下安装Java的方法，已经在文章
     <a href="http://blog.csdn.net/iniegang/article/details/46956157" rel="noopener noreferrer" target="_blank">
      http://blog.csdn.net/iniegang/article/details/46956157
     </a>
     中做了介绍
    </p>
    <p>
     我个人认为Windows下安装Java要比Linux下复杂一些（出问题的可能性比较高）
    </p>
    <p>
     具体安装步骤
    </p>
    <p>
     <span style="color:rgb(51,51,51); font-family:Arial; font-size:14px; line-height:26px">
      1、去oracle官网下载对应版本的jdk，网址http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
     </span>
    </p>
    <p>
     <span style="color:rgb(51,51,51); font-family:Arial; font-size:14px; line-height:26px">
      2、解压之后，双击exe文件一路next就可以将开发包默认安装，一定要注意安装路径（我的安装路径为：C:\Program Files\Java\jdk1.8.0_25）
     </span>
    </p>
    <p>
     <span style="color:rgb(51,51,51); font-family:Arial; font-size:14px; line-height:26px">
      3、配置环境变量：
     </span>
    </p>
    <p>
     <span style="color:rgb(51,51,51); font-family:Arial; font-size:14px; line-height:26px">
      （1）添加系统变量
     </span>
    </p>
    <p>
     <span style="font-family:Arial; color:#333333">
      <span style="font-size:14px; line-height:26px">
       变量名 JAVA_HOME
      </span>
     </span>
    </p>
    <p>
     <span style="font-family:Arial; color:#333333">
      <span style="font-size:14px; line-height:26px">
       变量值 安装路径
      </span>
     </span>
    </p>
    <p>
     <span style="font-family:Arial; color:#333333">
      <span style="font-size:14px; line-height:26px">
       （2）修改变量PATH
      </span>
     </span>
    </p>
    <p>
     <span style="font-family:Arial; color:#333333">
      <span style="font-size:14px; line-height:26px">
       在PATH后面添加:
       <span style="color:rgb(51,51,51); font-family:'Microsoft Yahei',微软雅黑,arial,宋体,sans-serif; font-size:16px; line-height:28px; text-align:justify">
        ;%JAVA_HOME%\bin;
       </span>
      </span>
     </span>
    </p>
    <p>
     <span style="font-family:Arial; color:#333333">
      <span style="font-size:14px; line-height:26px">
       <span style="color:rgb(51,51,51); font-family:'Microsoft Yahei',微软雅黑,arial,宋体,sans-serif; font-size:16px; line-height:28px; text-align:justify">
        4、测试是否安装成功
       </span>
      </span>
     </span>
    </p>
    <p style="text-align:justify">
     <span style="font-family:Microsoft Yahei,微软雅黑,arial,宋体,sans-serif; color:#333333">
      <span style="font-size:16px; line-height:28px">
       在命令行界面输入java -version 和javac出现如下结果，即可验证Java安装成功
      </span>
     </span>
    </p>
    <p style="text-align:justify">
     <span style="font-family:Microsoft Yahei,微软雅黑,arial,宋体,sans-serif; color:#333333">
      <span style="font-size:16px; line-height:28px">
       <img alt="" src="https://img-blog.csdn.net/20150728114554518?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center">
        <br/>
       </img>
      </span>
     </span>
    </p>
    <p style="text-align:justify">
     <span style="font-family:Microsoft Yahei,微软雅黑,arial,宋体,sans-serif; color:#333333">
      <span style="font-size:16px; line-height:28px">
       <span style="color:rgb(51,51,51); font-family:'microsoft yahei'; font-size:14px; line-height:26px">
        标记为原创的博文均为本人辛苦码字所得，谢绝抄袭，转载请注明出处，新浪微博私信艾特：物联网工程_Niegang。
       </span>
       <br/>
      </span>
     </span>
    </p>
   </div>
  </div>
 </article>
</div>



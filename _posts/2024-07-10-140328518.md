---
layout: post
title: Everything搜索无法搜索到桌面的文件无法检索C盘-或-特定路径的文件
date: 2024-07-10 17:17:26 +0800
categories: [桌面工具]
tags: [桌面工具,文件搜索,办公,everything]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=140328518
    alt: Everything搜索无法搜索到桌面的文件无法检索C盘-或-特定路径的文件
artid: 140328518
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Everything搜索无法搜索到桌面的文件（无法检索C盘 或 特定路径的文件）
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
     现象描述
    </h3>
    <p>
     在Everything搜索框中输入桌面已存在的文件或随便已知位置的文件，无法找到。
    </p>
    <p>
     搜索时检索结果中明显缺少部分磁盘位置的，例如无法检索C盘，任意关键字搜索时结果中没有位于C盘的，无论怎样都搜不到C盘文件。
    </p>
    <h3>
     解决方法
    </h3>
    <p>
     在 工具 - 选项 中找到 索引，关闭【启用排除列表】（取消勾选即可）。
    </p>
    <p>
     <img alt="" height="856" src="https://i-blog.csdnimg.cn/direct/19fca135dcd54fdb88fd437a10ada410.png" width="858"/>
    </p>
    <p>
     <strong>
      如仍无法解决
     </strong>
     ，须彻底退出软件后，重新打开软件，先设置一下排除C盘（点击添加文件夹按钮选择C盘），点击 应用 再点击 确定 后关闭窗口。重新进入选项设置，再取消排除C盘，点击 应用 - 确定 后即可成功搜索到C盘文件。即：
     <strong>
      <span style="color:#fe2c24;">
       将C盘排除一下再重新加回来，触发重建索引。
      </span>
     </strong>
    </p>
    <h4>
     其他方案
    </h4>
    <p>
     <strong>
      1.检查是否取消掉了全字匹配。
     </strong>
     全字匹配会导致文件名必须一毛一样才能搜索到，也会引起搜索结果缺失。
    </p>
    <p>
     <img alt="" height="532" src="https://i-blog.csdnimg.cn/direct/6b43c86519884d3387b411244dd8d386.png" width="934"/>
    </p>
    <p>
     可以直接Ctrl+B关闭全字匹配。
    </p>
    <p>
     <strong>
      2.尝试重建索引。
     </strong>
     在 工具 - 选项 - 索引 页面点击“强制重建”按钮，等待一段时间后再搜索。
    </p>
    <h4>
     重装Everything
    </h4>
    <p>
     疑似是Everything的bug导致，没有修改任何配置就出现类似问题，可以尝试重新安装一下Everything，或者更新到最新版本。
    </p>
    <p>
     Everything下载地址：http://www.voidtools.com/
    </p>
    <p>
    </p>
   </div>
  </div>
 </article>
</div>



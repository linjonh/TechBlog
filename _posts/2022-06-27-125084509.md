---
layout: post
title: 2022-06-27-数据库课程设计学生信息管理系统C,SQL-Sever
date: 2022-06-27 11:30:12 +0800
categories: []
tags: [c,数据库,数据库开发,visualstudio,sqlserver]
image:
  path: https://img-blog.csdnimg.cn/fa88f2ac68ec4f56a0bdac11ef950aaf.png?x-oss-process=image/resize,m_fixed,h_150
  alt: 数据库课程设计学生信息管理系统C,SQL-Sever
artid: 125084509
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     数据库课程设计——学生信息管理系统C#,SQL Sever
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p id="main-toc">
     <strong>
      目录
     </strong>
    </p>
    <p id="%E5%88%A9%E7%94%A8SQL%20Sever%E5%92%8C%20VS%20C%23%E5%AE%9E%E7%8E%B0-toc" style="margin-left:40px;">
     <a href="#%E5%88%A9%E7%94%A8SQL%20Sever%E5%92%8C%20VS%20C%23%E5%AE%9E%E7%8E%B0" rel="nofollow">
      利用SQL Sever和 VS C#实现
     </a>
    </p>
    <p id="%E4%B8%80%E3%80%81%E7%A8%8B%E5%BA%8F%E6%B5%81%E7%A8%8B%E5%9B%BE-toc" style="margin-left:0px;">
     <a href="#%E4%B8%80%E3%80%81%E7%A8%8B%E5%BA%8F%E6%B5%81%E7%A8%8B%E5%9B%BE" rel="nofollow">
      一、程序流程图
     </a>
    </p>
    <p id="%E4%BA%8C%E3%80%81%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0%EF%BC%9A%E5%88%A9%E7%94%A8SQL%20Sever%E5%92%8C%20VS%E5%AE%9E%E7%8E%B0%EF%BC%8C%E4%BD%BF%E7%94%A8C%23%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93-toc" style="margin-left:0px;">
     <a href="#%E4%BA%8C%E3%80%81%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0%EF%BC%9A%E5%88%A9%E7%94%A8SQL%20Sever%E5%92%8C%20VS%E5%AE%9E%E7%8E%B0%EF%BC%8C%E4%BD%BF%E7%94%A8C%23%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93" rel="nofollow">
      二、具体实现：利用SQL Sever和 VS实现，使用C#连接数据库
     </a>
    </p>
    <p id="1%E3%80%81%E6%96%B0%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%90%8D%E4%B8%BAMySchool%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93-toc" style="margin-left:40px;">
     <a href="#1%E3%80%81%E6%96%B0%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%90%8D%E4%B8%BAMySchool%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93" rel="nofollow">
      1、新建一个名为MySchool的数据库
     </a>
     ​​​​​​​
    </p>
    <p id="2%E3%80%81C%23%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%8C%E5%B9%B6%E5%AE%9E%E7%8E%B0%E5%AF%B9MySchool%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C-toc" style="margin-left:40px;">
     <a href="#2%E3%80%81C%23%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%8C%E5%B9%B6%E5%AE%9E%E7%8E%B0%E5%AF%B9MySchool%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C" rel="nofollow">
      2、C#连接数据库，并实现对MySchool数据库的增、删、改、查操作
     </a>
    </p>
    <p id="%EF%BC%881%EF%BC%89%E4%B8%BB%E7%95%8C%E9%9D%A2%EF%BC%9A%E4%B8%BB%E7%95%8C%E9%9D%A2%E5%8C%85%E5%90%AB%E6%AC%A2%E8%BF%8E%E6%96%87%E6%9C%AC%E5%92%8C%E4%B8%A4%E4%B8%AA%E5%8F%AF%E9%80%89%E9%A1%B9%EF%BC%8C%E5%A6%82%E4%B8%8B%E5%9B%BE3%E6%89%80%E7%A4%BA%E5%88%86%E5%88%AB%E4%B8%BA%E2%80%9C%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E2%80%9D%E5%92%8C%E2%80%9C%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E2%80%9D%EF%BC%8C%E9%80%89%E6%8B%A9%E4%B8%8D%E5%90%8C%E7%9A%84%E9%80%89%E9%A1%B9%E5%88%99%E5%88%86%E5%88%AB%E8%BF%9B%E5%85%A5%E4%B8%8D%E5%90%8C%E7%9A%84%E9%A1%B5%E9%9D%A2%E3%80%82-toc" style="margin-left:80px;">
     <a href="#%EF%BC%881%EF%BC%89%E4%B8%BB%E7%95%8C%E9%9D%A2%EF%BC%9A%E4%B8%BB%E7%95%8C%E9%9D%A2%E5%8C%85%E5%90%AB%E6%AC%A2%E8%BF%8E%E6%96%87%E6%9C%AC%E5%92%8C%E4%B8%A4%E4%B8%AA%E5%8F%AF%E9%80%89%E9%A1%B9%EF%BC%8C%E5%A6%82%E4%B8%8B%E5%9B%BE3%E6%89%80%E7%A4%BA%E5%88%86%E5%88%AB%E4%B8%BA%E2%80%9C%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E2%80%9D%E5%92%8C%E2%80%9C%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E2%80%9D%EF%BC%8C%E9%80%89%E6%8B%A9%E4%B8%8D%E5%90%8C%E7%9A%84%E9%80%89%E9%A1%B9%E5%88%99%E5%88%86%E5%88%AB%E8%BF%9B%E5%85%A5%E4%B8%8D%E5%90%8C%E7%9A%84%E9%A1%B5%E9%9D%A2%E3%80%82" rel="nofollow">
      （1）主界面
     </a>
     <a href="#%E5%AF%B9%E5%BA%94C%23%E5%AE%9E%E7%8E%B0%E5%A6%82%E4%B8%8B%EF%BC%9A%C2%A0" rel="nofollow">
     </a>
    </p>
    <p id="%EF%BC%882%EF%BC%89%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2%EF%BC%9A%E5%9C%A8%E4%B8%BB%E7%95%8C%E9%9D%A2%E9%80%89%E6%8B%A9%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E6%8C%89%E9%92%AE%E5%88%99%E8%BF%9B%E5%85%A5%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2%EF%BC%8C%E9%A1%B5%E9%9D%A2%E5%8A%9F%E8%83%BD%E5%A6%82%E4%B8%8B%E5%9B%BE%E6%89%80%E7%A4%BA%E3%80%82%E8%8B%A5%E7%94%A8%E6%88%B7%E6%9C%89%E8%AF%A5%E7%B3%BB%E7%BB%9F%E7%9A%84%E8%B4%A6%E5%8F%B7%EF%BC%8C%E5%88%99%E5%8F%AF%E9%80%89%E6%8B%A9%E7%9B%B4%E6%8E%A5%E7%99%BB%E5%BD%95%EF%BC%9A%E5%85%88%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D%EF%BC%8C%E5%AF%86%E7%A0%81%E4%BB%A5%E5%8F%8A%E9%AA%8C%E8%AF%81%E7%A0%81%EF%BC%8C%E4%B8%89%E8%80%85%E5%9D%87%E6%AD%A3%E7%A1%AE%E6%89%8D%E8%83%BD%E7%99%BB%E9%99%86%E6%88%90%E5%8A%9F%E3%80%82-toc" style="margin-left:80px;">
     <a href="#%EF%BC%882%EF%BC%89%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2%EF%BC%9A%E5%9C%A8%E4%B8%BB%E7%95%8C%E9%9D%A2%E9%80%89%E6%8B%A9%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E6%8C%89%E9%92%AE%E5%88%99%E8%BF%9B%E5%85%A5%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2%EF%BC%8C%E9%A1%B5%E9%9D%A2%E5%8A%9F%E8%83%BD%E5%A6%82%E4%B8%8B%E5%9B%BE%E6%89%80%E7%A4%BA%E3%80%82%E8%8B%A5%E7%94%A8%E6%88%B7%E6%9C%89%E8%AF%A5%E7%B3%BB%E7%BB%9F%E7%9A%84%E8%B4%A6%E5%8F%B7%EF%BC%8C%E5%88%99%E5%8F%AF%E9%80%89%E6%8B%A9%E7%9B%B4%E6%8E%A5%E7%99%BB%E5%BD%95%EF%BC%9A%E5%85%88%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D%EF%BC%8C%E5%AF%86%E7%A0%81%E4%BB%A5%E5%8F%8A%E9%AA%8C%E8%AF%81%E7%A0%81%EF%BC%8C%E4%B8%89%E8%80%85%E5%9D%87%E6%AD%A3%E7%A1%AE%E6%89%8D%E8%83%BD%E7%99%BB%E9%99%86%E6%88%90%E5%8A%9F%E3%80%82" rel="nofollow">
      （2）学生登录页面
     </a>
    </p>
    <p id="%EF%BC%883%EF%BC%89%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5%EF%BC%9A%E5%AD%A6%E7%94%9F%E7%94%A8%E6%88%B7%E8%8B%A5%E6%88%90%E5%8A%9F%E7%99%BB%E5%BD%95%E5%88%99%E8%BF%9B%E5%85%A5%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5%EF%BC%8C%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5%E5%85%B1%E5%8C%85%E5%90%AB%E2%80%9C%E4%B8%AA%E4%BA%BA%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF%E2%80%9D%E5%92%8C%E2%80%9C%E6%88%90%E7%BB%A9%E5%8D%95%E2%80%9D%E4%B8%A4%E4%B8%AA%E5%88%86%E9%A1%B5%EF%BC%8C%E6%89%80%E5%B1%95%E7%A4%BA%E7%9A%84%E4%BF%A1%E6%81%AF%E5%A6%82%E4%B8%8B%E5%9B%BE%E6%89%80%E7%A4%BA%EF%BC%8C%E5%AD%A6%E7%94%9F%E8%83%BD%E5%A4%9F%E7%9C%8B%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E5%92%8C%E4%B8%AA%E4%BA%BA%E6%88%90%E7%BB%A9%EF%BC%8C%E4%BB%A5%E5%8F%8A%E5%90%84%E9%97%A8%E8%AF%BE%E7%A8%8B%E7%9A%84%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF%E3%80%82-toc" style="margin-left:80px;">
     <a href="#%EF%BC%883%EF%BC%89%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5%EF%BC%9A%E5%AD%A6%E7%94%9F%E7%94%A8%E6%88%B7%E8%8B%A5%E6%88%90%E5%8A%9F%E7%99%BB%E5%BD%95%E5%88%99%E8%BF%9B%E5%85%A5%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5%EF%BC%8C%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5%E5%85%B1%E5%8C%85%E5%90%AB%E2%80%9C%E4%B8%AA%E4%BA%BA%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF%E2%80%9D%E5%92%8C%E2%80%9C%E6%88%90%E7%BB%A9%E5%8D%95%E2%80%9D%E4%B8%A4%E4%B8%AA%E5%88%86%E9%A1%B5%EF%BC%8C%E6%89%80%E5%B1%95%E7%A4%BA%E7%9A%84%E4%BF%A1%E6%81%AF%E5%A6%82%E4%B8%8B%E5%9B%BE%E6%89%80%E7%A4%BA%EF%BC%8C%E5%AD%A6%E7%94%9F%E8%83%BD%E5%A4%9F%E7%9C%8B%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E5%92%8C%E4%B8%AA%E4%BA%BA%E6%88%90%E7%BB%A9%EF%BC%8C%E4%BB%A5%E5%8F%8A%E5%90%84%E9%97%A8%E8%AF%BE%E7%A8%8B%E7%9A%84%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF%E3%80%82" rel="nofollow">
      （3）个人主页
     </a>
    </p>
    <p id="%EF%BC%884%EF%BC%89%E6%B3%A8%E5%86%8C%E9%A1%B5%E9%9D%A2%EF%BC%9A%E8%8B%A5%E5%AD%A6%E7%94%9F%E7%94%A8%E6%88%B7%E6%B2%A1%E6%9C%89%E7%99%BB%E9%99%86%E8%B4%A6%E5%8F%B7%EF%BC%8C%E5%88%99%E9%9C%80%E5%9C%A8%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E9%80%89%E6%8B%A9%E6%B3%A8%E5%86%8C%E6%8C%89%E9%92%AE%EF%BC%8C%E8%BF%9B%E5%85%A5%E6%B3%A8%E5%86%8C%E7%95%8C%E9%9D%A2%E8%BE%93%E5%85%A5%E7%9B%B8%E5%BA%94%E4%BF%A1%E6%81%AF%E8%BF%9B%E8%A1%8C%E6%B3%A8%E5%86%8C%E3%80%82%E6%88%90%E5%8A%9F%E6%B3%A8%E5%86%8C%E7%9A%84%E5%89%8D%E6%8F%90%E6%98%AF%E4%BD%A0%E4%B8%BA%E8%AF%A5%E6%A0%A1%E7%9A%84%E5%AD%A6%E7%94%9F%E4%B8%94%E5%90%84%E4%BF%A1%E6%81%AF%E5%B7%B2%E5%A1%AB%E5%86%99%E5%AE%8C%E6%95%B4%E3%80%82-toc" style="margin-left:80px;">
     <a href="#%EF%BC%884%EF%BC%89%E6%B3%A8%E5%86%8C%E9%A1%B5%E9%9D%A2%EF%BC%9A%E8%8B%A5%E5%AD%A6%E7%94%9F%E7%94%A8%E6%88%B7%E6%B2%A1%E6%9C%89%E7%99%BB%E9%99%86%E8%B4%A6%E5%8F%B7%EF%BC%8C%E5%88%99%E9%9C%80%E5%9C%A8%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E9%80%89%E6%8B%A9%E6%B3%A8%E5%86%8C%E6%8C%89%E9%92%AE%EF%BC%8C%E8%BF%9B%E5%85%A5%E6%B3%A8%E5%86%8C%E7%95%8C%E9%9D%A2%E8%BE%93%E5%85%A5%E7%9B%B8%E5%BA%94%E4%BF%A1%E6%81%AF%E8%BF%9B%E8%A1%8C%E6%B3%A8%E5%86%8C%E3%80%82%E6%88%90%E5%8A%9F%E6%B3%A8%E5%86%8C%E7%9A%84%E5%89%8D%E6%8F%90%E6%98%AF%E4%BD%A0%E4%B8%BA%E8%AF%A5%E6%A0%A1%E7%9A%84%E5%AD%A6%E7%94%9F%E4%B8%94%E5%90%84%E4%BF%A1%E6%81%AF%E5%B7%B2%E5%A1%AB%E5%86%99%E5%AE%8C%E6%95%B4%E3%80%82" rel="nofollow">
      （4）注册页面
     </a>
    </p>
    <p id="%EF%BC%885%EF%BC%89%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2%EF%BC%9A%E8%8B%A5%E6%82%A8%E7%9A%84%E7%9C%81%E4%BB%BD%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%EF%BC%8C%E5%88%99%E5%8F%AF%E5%9C%A8%E4%B8%BB%E7%95%8C%E9%9D%A2%E9%80%89%E6%8B%A9%E2%80%9C%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E2%80%9D%E9%80%89%E9%A1%B9%EF%BC%8C%E8%BF%9B%E5%85%A5%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E3%80%82%E4%B8%8E%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E7%9B%B8%E4%BC%BC%EF%BC%8C%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E6%88%90%E5%8A%9F%E7%9A%84%E5%89%8D%E6%8F%90%E6%98%AF%E6%AD%A3%E7%A1%AE%E8%BE%93%E5%85%A5%E5%90%84%E7%B1%BB%E4%BF%A1%E6%81%AF%E3%80%82%E4%BD%86%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E4%B8%8D%E6%8F%90%E4%BE%9B%E2%80%9C%E6%B3%A8%E5%86%8C%E2%80%9D%E9%80%89%E9%A1%B9%EF%BC%8C%E5%9B%A0%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E8%BA%AB%E4%BB%BD%E5%BF%85%E9%A1%BB%E7%94%B1%E7%B3%BB%E7%BB%9F%E6%8E%88%E4%BA%88%E2%80%94%E2%80%94%E5%8D%B3%E5%9C%A8%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%AD%E5%A1%AB%E5%85%A5%E7%9B%B8%E5%BA%94%E4%BF%A1%E6%81%AF%E6%89%8D%E5%8F%AF%E6%88%90%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E3%80%82-toc" style="margin-left:80px;">
     <a href="#%EF%BC%885%EF%BC%89%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2%EF%BC%9A%E8%8B%A5%E6%82%A8%E7%9A%84%E7%9C%81%E4%BB%BD%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%EF%BC%8C%E5%88%99%E5%8F%AF%E5%9C%A8%E4%B8%BB%E7%95%8C%E9%9D%A2%E9%80%89%E6%8B%A9%E2%80%9C%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E2%80%9D%E9%80%89%E9%A1%B9%EF%BC%8C%E8%BF%9B%E5%85%A5%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E3%80%82%E4%B8%8E%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E7%9B%B8%E4%BC%BC%EF%BC%8C%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E6%88%90%E5%8A%9F%E7%9A%84%E5%89%8D%E6%8F%90%E6%98%AF%E6%AD%A3%E7%A1%AE%E8%BE%93%E5%85%A5%E5%90%84%E7%B1%BB%E4%BF%A1%E6%81%AF%E3%80%82%E4%BD%86%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E4%B8%8D%E6%8F%90%E4%BE%9B%E2%80%9C%E6%B3%A8%E5%86%8C%E2%80%9D%E9%80%89%E9%A1%B9%EF%BC%8C%E5%9B%A0%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E8%BA%AB%E4%BB%BD%E5%BF%85%E9%A1%BB%E7%94%B1%E7%B3%BB%E7%BB%9F%E6%8E%88%E4%BA%88%E2%80%94%E2%80%94%E5%8D%B3%E5%9C%A8%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%AD%E5%A1%AB%E5%85%A5%E7%9B%B8%E5%BA%94%E4%BF%A1%E6%81%AF%E6%89%8D%E5%8F%AF%E6%88%90%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E3%80%82" rel="nofollow">
      （5）管理员登录页面
     </a>
    </p>
    <p id="%EF%BC%886%EF%BC%89%E7%AE%A1%E7%90%86%E5%91%98%E4%B8%BB%E9%A1%B5%EF%BC%9A%E7%AE%A1%E7%90%86%E5%91%98%E4%B8%BB%E9%A1%B5%E4%B8%80%E5%85%B1%E5%8C%85%E5%90%AB%E4%BA%94%E4%B8%AA%E5%8F%AF%E9%80%89%E9%A1%B9%EF%BC%8C%E5%A6%82%E4%B8%8B%E5%9B%BE%E6%89%80%E7%A4%BA%E3%80%82%E5%85%B6%E4%B8%AD%EF%BC%8C%E5%AF%B9%E4%BA%8E%E2%80%9C%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E2%80%9D%EF%BC%8C%E2%80%9C%E8%AF%BE%E7%A8%8B%E4%BF%A1%E6%81%AF%E2%80%9D%EF%BC%8C%E2%80%9C%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E2%80%9D%EF%BC%8C%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82-toc" style="margin-left:80px;">
     <a href="#%EF%BC%886%EF%BC%89%E7%AE%A1%E7%90%86%E5%91%98%E4%B8%BB%E9%A1%B5%EF%BC%9A%E7%AE%A1%E7%90%86%E5%91%98%E4%B8%BB%E9%A1%B5%E4%B8%80%E5%85%B1%E5%8C%85%E5%90%AB%E4%BA%94%E4%B8%AA%E5%8F%AF%E9%80%89%E9%A1%B9%EF%BC%8C%E5%A6%82%E4%B8%8B%E5%9B%BE%E6%89%80%E7%A4%BA%E3%80%82%E5%85%B6%E4%B8%AD%EF%BC%8C%E5%AF%B9%E4%BA%8E%E2%80%9C%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E2%80%9D%EF%BC%8C%E2%80%9C%E8%AF%BE%E7%A8%8B%E4%BF%A1%E6%81%AF%E2%80%9D%EF%BC%8C%E2%80%9C%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E2%80%9D%EF%BC%8C%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82" rel="nofollow">
      （6）管理员主页
     </a>
     <a href="#%E5%AF%B9%E5%BA%94C%23%E5%AE%9E%E7%8E%B0%E5%A6%82%E4%B8%8B%EF%BC%9A%C2%A0%C2%A0" rel="nofollow">
     </a>
    </p>
    <p id="%EF%BC%887%EF%BC%89%E7%99%BB%E5%BD%95%E6%97%A5%E5%BF%97%E9%A1%B5%E9%9D%A2%EF%BC%9A%E7%99%BB%E5%BD%95%E6%97%A5%E5%BF%97%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E8%AF%A5%E7%B3%BB%E7%BB%9F%E6%89%80%E6%9C%89%E7%94%A8%E6%88%B7%E7%9A%84%E7%99%BB%E5%BD%95%E8%AE%B0%E5%BD%95-toc" style="margin-left:80px;">
     <a href="#%EF%BC%887%EF%BC%89%E7%99%BB%E5%BD%95%E6%97%A5%E5%BF%97%E9%A1%B5%E9%9D%A2%EF%BC%9A%E7%99%BB%E5%BD%95%E6%97%A5%E5%BF%97%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E8%AF%A5%E7%B3%BB%E7%BB%9F%E6%89%80%E6%9C%89%E7%94%A8%E6%88%B7%E7%9A%84%E7%99%BB%E5%BD%95%E8%AE%B0%E5%BD%95" rel="nofollow">
      （7）登录日志页面
     </a>
     <a href="#%E5%AF%B9%E5%BA%94C%23%E5%AE%9E%E7%8E%B0%E5%A6%82%E4%B8%8B%EF%BC%9A%C2%A0%C2%A0" rel="nofollow">
     </a>
    </p>
    <p id="%EF%BC%888%EF%BC%89%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%EF%BC%8C%E4%B8%94%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82-toc" style="margin-left:80px;">
     <a href="#%EF%BC%888%EF%BC%89%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%EF%BC%8C%E4%B8%94%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82" rel="nofollow">
      （8）学生信息页面
     </a>
    </p>
    <p id="9%E3%80%81%E8%AF%BE%E7%A8%8B%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E8%AF%BE%E7%A8%8B%E4%BF%A1%E6%81%AF%EF%BC%8C%E4%B8%94%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82-toc" style="margin-left:80px;">
     <a href="#9%E3%80%81%E8%AF%BE%E7%A8%8B%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E8%AF%BE%E7%A8%8B%E4%BF%A1%E6%81%AF%EF%BC%8C%E4%B8%94%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82" rel="nofollow">
      （9）课程信息页面
     </a>
    </p>
    <p id="%EF%BC%8810%EF%BC%89%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E4%BF%A1%E6%81%AF%EF%BC%8C%E4%B8%94%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82-toc" style="margin-left:80px;">
     <a href="#%EF%BC%8810%EF%BC%89%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E4%BF%A1%E6%81%AF%EF%BC%8C%E4%B8%94%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82" rel="nofollow">
      （10）学生成绩信息页面
     </a>
    </p>
    <p id="%EF%BC%8811%EF%BC%89%E6%88%90%E7%BB%A9%E7%BB%9F%E8%AE%A1%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E3%80%82-toc" style="margin-left:80px;">
     <a href="#%EF%BC%8811%EF%BC%89%E6%88%90%E7%BB%A9%E7%BB%9F%E8%AE%A1%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E3%80%82" rel="nofollow">
      （11）成绩统计页面
     </a>
    </p>
    <p id="%EF%BC%8812%EF%BC%89%E5%9C%A8%E4%B8%BB%E7%95%8C%E9%9D%A2%E7%82%B9%E5%87%BB%E5%8F%B3%E4%B8%8A%E8%A7%92%E7%9A%84%E2%80%9C%C3%97%E2%80%9D%E5%8D%B3%E9%80%80%E5%87%BA%E7%B3%BB%E7%BB%9F%E3%80%82-toc" style="margin-left:80px;">
     <a href="#%EF%BC%8812%EF%BC%89%E5%9C%A8%E4%B8%BB%E7%95%8C%E9%9D%A2%E7%82%B9%E5%87%BB%E5%8F%B3%E4%B8%8A%E8%A7%92%E7%9A%84%E2%80%9C%C3%97%E2%80%9D%E5%8D%B3%E9%80%80%E5%87%BA%E7%B3%BB%E7%BB%9F%E3%80%82" rel="nofollow">
      （12）在主界面点击右上角的“×”即退出系统。
     </a>
    </p>
    <p id="-toc" style="margin-left:80px;">
    </p>
    <hr id="hr-toc"/>
    <p>
    </p>
    <h3 id="%E5%88%A9%E7%94%A8SQL%20Sever%E5%92%8C%20VS%20C%23%E5%AE%9E%E7%8E%B0">
     利用SQL Sever和 VS C#实现
    </h3>
    <h2 id="%E4%B8%80%E3%80%81%E7%A8%8B%E5%BA%8F%E6%B5%81%E7%A8%8B%E5%9B%BE">
     一、程序流程图
    </h2>
    <p>
     <img alt="" height="894" src="https://i-blog.csdnimg.cn/blog_migrate/ad831a85695ba7869edf7a9043e9a2cf.png" width="842"/>
    </p>
    <p style="text-align:center;">
     图1：程序流程图
    </p>
    <h2 id="%E4%BA%8C%E3%80%81%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0%EF%BC%9A%E5%88%A9%E7%94%A8SQL%20Sever%E5%92%8C%20VS%E5%AE%9E%E7%8E%B0%EF%BC%8C%E4%BD%BF%E7%94%A8C%23%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93">
     二、具体实现：利用SQL Sever和 VS实现，使用C#连接数据库
    </h2>
    <h3 id="1%E3%80%81%E6%96%B0%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%90%8D%E4%B8%BAMySchool%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93">
     1、新建一个名为MySchool的数据库
    </h3>
    <h4 id="%EF%BC%881%EF%BC%89%E9%A6%96%E5%85%88%EF%BC%8C%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%8C%E4%B8%80%E5%AE%9A%E4%B8%80%E5%AE%9A%E8%A6%81%E9%80%89%E6%8B%A9%E2%80%9CSQL%20Sever%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E2%80%9D%E6%96%B9%E5%BC%8F%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5%EF%BC%8C%E4%B8%8D%E6%87%82%E6%80%8E%E4%B9%88%E7%94%A8%E8%BF%99%E7%A7%8D%E6%96%B9%E5%BC%8F%E8%BF%9E%E6%8E%A5%E7%9A%84%E5%8F%AF%E4%BB%A5%E8%87%AA%E8%A1%8C%E6%90%9C%E7%B4%A2%E4%B8%80%E4%B8%8B%EF%BC%8C%E5%BE%88%E7%AE%80%E5%8D%95%E3%80%82">
     （1）首先，连接数据库，一定一定要选择“SQL Sever身份验证”方式建立连接，不懂怎么用这种方式连接的可以自行搜索一下，很简单。
    </h4>
    <p class="img-center">
     <img alt="" height="300" src="https://i-blog.csdnimg.cn/blog_migrate/c9e44aa0f313d99533164993c2380f2b.png" width="491"/>
    </p>
    <p style="text-align:center;">
     图2：数据库连接
    </p>
    <h4 id="%C2%A0%EF%BC%882%EF%BC%89%E6%96%B0%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%90%8D%E4%B8%BA%E2%80%9CMySchool%E2%80%9D%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%8C%E5%85%B6%E4%B8%AD%E5%90%AB%E6%9C%89%E7%9A%84%E8%A1%A8%E5%A6%82%E4%B8%8B%EF%BC%9A">
     （2）新建一个名为“MySchool”的数据库，其中含有的表如下：
    </h4>
    <p class="img-center">
     <img alt="" height="281" src="https://i-blog.csdnimg.cn/blog_migrate/db8e23b2c9ba8f2f729bfa32c96ade45.png" width="183"/>
    </p>
    <p style="text-align:center;">
     图3：MySchool数据库
    </p>
    <h4 id="%E5%AF%B9%E5%BA%94%E7%9A%84SQL%E8%AF%AD%E5%8F%A5%E5%A6%82%E4%B8%8B%EF%BC%9A">
     对应的SQL语句如下：
    </h4>
    <pre><code class="language-sql">USE MySchool;

DROP TABLE IF EXISTS SC       /*成绩*/
DROP TABLE IF EXISTS Student  /*学生信息*/
DROP TABLE IF EXISTS Course   /*课程*/
DROP TABLE IF EXISTS StudentUser  /*学生用户信息*/
DROP TABLE IF EXISTS Administrator  /*管理员用户信息*/
DROP TABLE IF EXISTS SysLog   /*注册日志*/
DROP TABLE IF EXISTS SysLog1   /*登陆日志*/
DROP TABLE IF EXISTS AVG1   /*登陆日志*/

CREATE TABLE StudentUser          
 (	
 ID NCHAR(20) PRIMARY KEY,               /*学号*/  
 PassWord NCHAR(32) ,					/*密码*/
 Sex CHAR(2) ,							/*性别*/
 Birthday datetime,						/*生日*/
 UserMobile NCHAR(11),					/*电话号码*/
 ); 
 CREATE TABLE Administrator          
 (	
 ID NCHAR(20) PRIMARY KEY,               /*工号*/  
 PassWord NCHAR(32) ,             /*密码*/
 Sex CHAR(2),							/*性别*/
 Birthday datetime,				/*生日*/
 UserMobile NCHAR(11),					/*电话号码*/
 );

 CREATE TABLE SysLog          
 (	[UserMobile]
 UserID NCHAR(20) ,  /*id*/
 dentity CHAR(20),  /*学生或管理员*/
 DateAndTime datetime,  /*注册时间*/
 UserOperation NCHAR(200)  /*操作方式*/
 ); 
CREATE TABLE SysLog1          
 (	
 UserID NCHAR(20) ,  /*id*/
 dentity CHAR(20),  /*学生或管理员*/
 DateAndTime datetime,  /*登陆时间*/
 UserOperation NCHAR(200)  /*登陆操作方式*/
 );

CREATE TABLE Student          
 (	
 Sno CHAR(9) PRIMARY KEY,        /* 列级完整性约束条件,Sno是主码*/                  
 Sname CHAR(20) UNIQUE,             /* Sname取唯一值*/
 Ssex CHAR(2),					/*性别*/
 Sage SMALLINT,					/*年龄*/
 Sdept CHAR(20)					/*专业*/
 ); 

CREATE TABLE  Course
 (	
 Cno CHAR(4) PRIMARY KEY,
 Cname CHAR(40),            
 Cpno CHAR(4),               	                      
 Ccredit SMALLINT, 
 ); 

CREATE TABLE  SC
 (
 Sno CHAR(9), 
 Cno CHAR(4),  
 Grade SMALLINT,
 PRIMARY KEY (Sno,Cno),                     /* 主码由两个属性构成，必须作为表级完整性进行定义*/
 FOREIGN KEY (Sno) REFERENCES Student(Sno),  /* 表级完整性约束条件，Sno是外码，被参照表是Student */
 FOREIGN KEY (Cno)REFERENCES Course(Cno)     /* 表级完整性约束条件， Cno是外码，被参照表是Course*/
 ); 

INSERT  INTO  StudentUser VALUES ('20181101111','123456','女',1999-1-1,'13812345678',NULL);
INSERT  INTO  Administrator VALUES ('2018110',substring(sys.fn_sqlvarbasetostr(HashBytes('MD5','123456')),3,32),'女',1989-1-1,'13812345687',NULL);
INSERT  INTO  Administrator VALUES ('2018111',substring(sys.fn_sqlvarbasetostr(HashBytes('MD5','123456')),3,32),'女',1989-2-1,'13812655687',NULL);


INSERT  INTO  Student (Sno,Sname,Ssex,Sdept,Sage) VALUES ('201215121','李勇','男','CS',20);
INSERT  INTO  Student (Sno,Sname,Ssex,Sdept,Sage) VALUES ('201215122','刘晨','女','CS',19);
INSERT  INTO  Student (Sno,Sname,Ssex,Sdept,Sage) VALUES ('201215123','王敏','女','MA',18);
INSERT  INTO  Student (Sno,Sname,Ssex,Sdept,Sage) VALUES ('201215125','张立','男','IS',19);
INSERT  INTO  Student (Sno,Sname,Ssex,Sdept,Sage) VALUES ('201215128','陈冬','男','IS',20);

SELECT * FROM Student

INSERT  INTO Course(Cno,Cname,Cpno,Ccredit)	VALUES ('1','数据库',NULL,4);
INSERT  INTO Course(Cno,Cname,Cpno,Ccredit)	VALUES ('2','数学',NULL,4);
INSERT  INTO Course(Cno,Cname,Cpno,Ccredit)	VALUES ('3','信息系统',NULL,4);
INSERT  INTO Course(Cno,Cname,Cpno,Ccredit)	VALUES ('4','操作系统',NULL,4);
INSERT  INTO Course(Cno,Cname,Cpno,Ccredit)	VALUES ('5','数据结构',NULL,4);
INSERT  INTO Course(Cno,Cname,Cpno,Ccredit)	VALUES ('6','数据处理',NULL,4);
INSERT  INTO Course(Cno,Cname,Cpno,Ccredit)	VALUES ('7','Pascal语言',NULL,4);

UPDATE Course SET Cpno = '5' WHERE Cno = '1' 
UPDATE Course SET Cpno = '1' WHERE Cno = '3' 
UPDATE Course SET Cpno = '6' WHERE Cno = '4' 
UPDATE Course SET Cpno = '7' WHERE Cno = '5' 
UPDATE Course SET Cpno = '6' WHERE Cno = '7' 

SELECT * FROM Course

INSERT  INTO SC(Sno,Cno,Grade) VALUES ('201215121 ','1',92);
INSERT  INTO SC(Sno,Cno,Grade) VALUES ('201215121 ','2',85);
INSERT  INTO SC(Sno,Cno,Grade) VALUES ('201215121 ','3',88);
INSERT  INTO SC(Sno,Cno,Grade) VALUES ('201215122 ','2',90);
INSERT  INTO SC(Sno,Cno,Grade) VALUES ('201215122 ','3',80);

SELECT * FROM SC

--当学生用户信息更新，触发器启动，将更新的内容存至注册日志
IF(OBJECT_ID('regist_recorder1') is not null)        -- 判断名为 regist_recorder 的触发器是否存在
DROP TRIGGER regist_recorder1        -- 删除触发器
GO
CREATE TRIGGER regist_recorder1
ON StudentUser  	         
AFTER
INSERT
AS 
	declare @UserName    nchar(20)
	declare @DateTime    datetime
	declare @UserOperation nchar(200)
	declare @dentity CHAR(20)

	select @UserName = ID FROM StudentUser
	select @DateTime = CONVERT(datetime,GETDATE(),120) 
	select @dentity ='StudentUser'

	declare @op varchar(10)
	select @op=case when exists(select 1 from inserted) and exists(select 1 from deleted)
                   then 'Update'
                   when exists(select 1 from inserted) and not exists(select 1 from deleted)
                   then 'Insert'
                   when not exists(select 1 from inserted) and exists(select 1 from deleted)
                   then 'Delete' end
                   
	
	select @UserOperation = @op
	

	INSERT INTO SysLog(UserID,dentity,DateAndTime,UserOperation)
	VALUES (@UserName,@dentity,@DateTime,@UserOperation)

--当管理员信息更新，触发器启动，将更新的内容存至注册日志
IF(OBJECT_ID('regist_recorder2') is not null)        -- 判断名为 regist_recorder 的触发器是否存在
DROP TRIGGER regist_recorder2        -- 删除触发器
GO
CREATE TRIGGER regist_recorder2
ON Administrator 	         
AFTER
INSERT
AS 
	declare @UserName    nchar(20)
	declare @DateTime    datetime
	declare @UserOperation nchar(200)
	declare @dentity CHAR(20)

	select @UserName = ID FROM Administrator
	select @DateTime = CONVERT(datetime,GETDATE(),120) 
	select @dentity ='Administrator'

	declare @op varchar(10)
	select @op=case when exists(select 1 from inserted) and exists(select 1 from deleted)
                   then 'Update'
                   when exists(select 1 from inserted) and not exists(select 1 from deleted)
                   then 'Insert'
                   when not exists(select 1 from inserted) and exists(select 1 from deleted)
                   then 'Delete' end
                   
	
	select @UserOperation = @op
	

	INSERT INTO SysLog(UserID,dentity,DateAndTime,UserOperation)
	VALUES (@UserName,@dentity,@DateTime,@UserOperation)




--建一个表存储各科平均分
--建一个表存储各科平均分
CREATE TABLE AVG1
	(
		Cname CHAR(10),   /* 科目*/	
		avg1 INT
	);
INSERT  INTO AVG1(Cname,avg1)	VALUES ('数据库',NULL);
INSERT  INTO AVG1(Cname,avg1)	VALUES ('数学',NULL);
INSERT  INTO AVG1(Cname,avg1)	VALUES ('信息系统',NULL);
INSERT  INTO AVG1(Cname,avg1)	VALUES ('操作系统',NULL);
INSERT  INTO AVG1(Cname,avg1)	VALUES ('数据结构',NULL);
INSERT  INTO AVG1(Cname,avg1)	VALUES ('数据处理',NULL);
INSERT  INTO AVG1(Cname,avg1)	VALUES ('Pascal语言',NULL);

--将成绩信息通过下列存储过程算出各科平均分并存储至AVG表
IF (exists (select * from sys.objects where name = 'COURSE_AVG1'))
	DROP PROCEDURE COURSE_AVG1
	GO
	CREATE  PROCEDURE COURSE_AVG1
	AS
	BEGIN TRANSACTION TRANS  
	DECLARE 
	    @SX INT,    /* 数学总分 */
	    @XXXT INT,    /* 信息系统总分 */
	    @CZXT INT,    /* 操作系统总分 */
		@SJJG INT,    /* 数据结构总分 */
		@SJK_C INT,   /* 数据库总分 */
		@SJCL INT,   /*数据处理总分*/
		@P INT       /*Pascal语言*/
	SELECT @SX=AVG(Grade) FROM SC
						WHERE  Cno='2 '

	SELECT @XXXT=AVG(Grade) FROM SC
						WHERE  Cno='3'

	SELECT @CZXT=AVG(Grade) FROM SC
						WHERE  Cno='4'

	SELECT @SJJG=AVG(Grade) FROM SC
						WHERE  Cno='5'

	SELECT @SJK_C=AVG(Grade) FROM SC
						WHERE  Cno='1'
	SELECT @SJCL=AVG(Grade) FROM SC
						WHERE  Cno='6'
	SELECT @P=AVG(Grade) FROM SC
						WHERE  Cno='7'
	
	BEGIN 
	UPDATE AVG1 SET avg1=@SJK_C WHERE Cname='数据库'
	UPDATE AVG1 SET avg1=@SX WHERE Cname='数学'
	UPDATE AVG1 SET avg1=@XXXT WHERE Cname='信息系统'
	UPDATE AVG1 SET avg1=@CZXT WHERE Cname='操作系统'
	UPDATE AVG1 SET avg1=@SJJG WHERE Cname='数据结构'
	UPDATE AVG1 SET avg1=@SJCL WHERE Cname='数据处理'
	UPDATE AVG1 SET avg1=@P WHERE Cname='Pascal语言'
	COMMIT TRANSACTION TRANS; 
	END
</code></pre>
    <p>
    </p>
    <p>
    </p>
    <h3 id="2%E3%80%81C%23%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%8C%E5%B9%B6%E5%AE%9E%E7%8E%B0%E5%AF%B9MySchool%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C">
     2、C#连接数据库，并实现对MySchool数据库的增、删、改、查操作
    </h3>
    <h4 id="%EF%BC%881%EF%BC%89%E4%B8%BB%E7%95%8C%E9%9D%A2%EF%BC%9A%E4%B8%BB%E7%95%8C%E9%9D%A2%E5%8C%85%E5%90%AB%E6%AC%A2%E8%BF%8E%E6%96%87%E6%9C%AC%E5%92%8C%E4%B8%A4%E4%B8%AA%E5%8F%AF%E9%80%89%E9%A1%B9%EF%BC%8C%E5%A6%82%E4%B8%8B%E5%9B%BE3%E6%89%80%E7%A4%BA%E5%88%86%E5%88%AB%E4%B8%BA%E2%80%9C%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E2%80%9D%E5%92%8C%E2%80%9C%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E2%80%9D%EF%BC%8C%E9%80%89%E6%8B%A9%E4%B8%8D%E5%90%8C%E7%9A%84%E9%80%89%E9%A1%B9%E5%88%99%E5%88%86%E5%88%AB%E8%BF%9B%E5%85%A5%E4%B8%8D%E5%90%8C%E7%9A%84%E9%A1%B5%E9%9D%A2%E3%80%82" style="margin-left:0px;text-align:justify;">
     （1）主界面：主界面包含欢迎文本和两个可选项，如下图3所示分别为“学生登录”和“管理员登录”，选择不同的选项则分别进入不同的页面。
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="368" src="https://i-blog.csdnimg.cn/blog_migrate/53c5b82ed1cb61dfab176b5db6923556.png" width="504"/>
    </p>
    <p style="text-align:center;">
     图4：主界面
    </p>
    <h4 id="%E5%AF%B9%E5%BA%94C%23%E5%AE%9E%E7%8E%B0%E5%A6%82%E4%B8%8B%EF%BC%9A%C2%A0">
     对应C#实现如下：
    </h4>
    <pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SchoolManage
{
    public partial class FormLogin : Form
    {
        public FormLogin()
        {
            InitializeComponent();
        }

        private void buttonStuLogin_Click(object sender, EventArgs e)
        {
            FormStuLogin FormStuLogin = new FormStuLogin(); //学生登录窗体
            FormStuLogin.Show();//跳转至学生登录窗体
            this.Hide();  //隐藏原窗体
        }

        private void buttonManagerLogin_Click(object sender, EventArgs e)
        {
            FormManagerLogin FormManagerLogin = new FormManagerLogin(); //管理员登录窗体
            FormManagerLogin.Show();//跳转至管理员登录窗体
            this.Hide();
        }

        private void FormLogin_FormClosing_1(object sender, FormClosingEventArgs e)
        {
            
        }

        private void FormLogin_FormClosed(object sender, FormClosedEventArgs e)
        {
            while (MessageBox.Show("即将退出系统，您确认退出吗？", "提示！", MessageBoxButtons.YesNo)== DialogResult.Yes)
            {
                System.Environment.Exit(System.Environment.ExitCode);
            }
            


        }


    }
}</code></pre>
    <h4 id="%EF%BC%882%EF%BC%89%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2%EF%BC%9A%E5%9C%A8%E4%B8%BB%E7%95%8C%E9%9D%A2%E9%80%89%E6%8B%A9%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E6%8C%89%E9%92%AE%E5%88%99%E8%BF%9B%E5%85%A5%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2%EF%BC%8C%E9%A1%B5%E9%9D%A2%E5%8A%9F%E8%83%BD%E5%A6%82%E4%B8%8B%E5%9B%BE%E6%89%80%E7%A4%BA%E3%80%82%E8%8B%A5%E7%94%A8%E6%88%B7%E6%9C%89%E8%AF%A5%E7%B3%BB%E7%BB%9F%E7%9A%84%E8%B4%A6%E5%8F%B7%EF%BC%8C%E5%88%99%E5%8F%AF%E9%80%89%E6%8B%A9%E7%9B%B4%E6%8E%A5%E7%99%BB%E5%BD%95%EF%BC%9A%E5%85%88%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D%EF%BC%8C%E5%AF%86%E7%A0%81%E4%BB%A5%E5%8F%8A%E9%AA%8C%E8%AF%81%E7%A0%81%EF%BC%8C%E4%B8%89%E8%80%85%E5%9D%87%E6%AD%A3%E7%A1%AE%E6%89%8D%E8%83%BD%E7%99%BB%E9%99%86%E6%88%90%E5%8A%9F%E3%80%82" style="margin-left:0px;text-align:justify;">
     （2）学生登录页面：在主界面选择学生登录按钮则进入学生登录页面，页面功能如下图所示。若用户有该系统的账号，则可选择直接登录：先输入用户名，密码以及验证码，三者均正确才能登陆成功。
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="384" src="https://i-blog.csdnimg.cn/blog_migrate/8a02ffdd58e55c59f3f5e1f724cc3885.png" width="568"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图5：学生登录页面
    </p>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="384" src="https://i-blog.csdnimg.cn/blog_migrate/f4a9cdaa0e50d4c476a83a02e1876013.png" width="568"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图6：学生登录成功
    </p>
    <p style="margin-left:0;text-align:justify;">
    </p>
    <h4 id="%E8%8B%A5%E5%85%B6%E4%B8%AD%E4%B8%80%E9%A1%B9%E4%B8%8D%E6%AD%A3%E7%A1%AE%E5%88%99%E4%BC%9A%E5%BC%B9%E7%AA%97%E6%8F%90%E7%A4%BA%E4%BD%A0%E9%87%8D%E6%96%B0%E8%BE%93%E5%85%A5%EF%BC%8C%E5%A6%82%E4%B8%8B%E5%9B%BE%E6%89%80%E7%A4%BA%EF%BC%9A" style="margin-left:0px;text-align:justify;">
     若其中一项不正确则会弹窗提示你重新输入，如下图所示：
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="384" src="https://i-blog.csdnimg.cn/blog_migrate/90affe96a4b6a7c259eed514cdf90018.png" width="568"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图7：学生登录失败
    </p>
    <h4 id="%E5%AF%B9%E5%BA%94C%23%E5%AE%9E%E7%8E%B0%E5%A6%82%E4%B8%8B%EF%BC%88%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0%E9%83%A8%E5%88%86%E5%A4%A7%E5%AE%B6%E6%A0%B9%E6%8D%AE%E8%87%AA%E8%BA%AB%E6%83%85%E5%86%B5%E8%87%AA%E8%A1%8C%E4%BF%AE%E6%94%B9%EF%BC%8C%E4%B8%8B%E5%90%8C%EF%BC%89%EF%BC%9A" style="margin-left:0px;text-align:justify;">
     对应C#实现如下（连接数据库的代码实现部分大家根据自身情况自行修改，下同）：
    </h4>
    <pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SchoolManage
{
    public partial class FormStuLogin : Form
    {
        public FormStuLogin()
        {
            InitializeComponent();
        }
        
        

        public string code;


        private string EncryptWithMD5(string source)//MD5加密
        {
            byte[] sor = Encoding.UTF8.GetBytes(source);
            MD5 md5 = MD5.Create();
            byte[] result = md5.ComputeHash(sor);
            StringBuilder strbul = new StringBuilder(40);
            for (int i = 0; i &lt; result.Length; i++)
            {
                strbul.Append(result[i].ToString("x2"));//加密结果"x2"结果为32位,"x3"结果为48位,"x4"结果为64位
            }
            return strbul.ToString();
        }


        private void buttonLogin_Click(object sender, EventArgs e)
        {
            string username = tBUserName.Text.Trim();  //取出账号
            string password = EncryptWithMD5(tBPassword.Text.Trim());  //取出密码并加密

            string myConnString = "Data Source=.;Initial Catalog=MySchool;Persist Security Info=True;User ID=sa;Password=yourpassword";

            SqlConnection sqlConnection = new SqlConnection(myConnString);  //实例化连接对象
            sqlConnection.Open();

            string sql = "select ID,PassWord from StudentUser where ID = '" + username + "' and PassWord = '" + password + "'";                                            //编写SQL命令
            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();//读取数据

            if (sqlDataReader.HasRows &amp;&amp; tBVerifyCode.Text == code)//验证是否有该用户及密码且验证码正确
            {
                MessageBox.Show("欢迎使用！");             //登录成功
                StuMain stuMain = new StuMain();
                stuMain.GetId(username);
                stuMain.Show();//显示下一界面
                this.Hide();
            }
            else if (sqlDataReader.HasRows &amp;&amp; tBVerifyCode.Text != code)
            {
                MessageBox.Show("验证码错误，登录失败！");
                return;
            }
            else
            {
                MessageBox.Show("账号密码有误，登录失败！");
                return;
            }
            sqlDataReader.Close();
            sql = "insert into SysLog1 values ( '" + username + "' , 'Student','" + DateTime.Now + "' , '" + "Login" + "')";                                            //编写SQL命令,把登陆信息存入登录日志
            SqlCommand sqlCommand1 = new SqlCommand(sql, sqlConnection);
            sqlCommand1.ExecuteNonQuery();
            sqlConnection.Close();

        }
        

        private void buttonReg_Click(object sender, EventArgs e)
        {
            this.Hide();
            RegisterForm registerForm = new RegisterForm();
            registerForm.Show();
        }

        private void FormStuLogin_Load_1(object sender, EventArgs e)
        {
            //随机实例化 
            Random ran = new Random();
            int number;
            char code1;
            //取五个数 
            for (int i = 0; i &lt; 5; i++)
            {
                number = ran.Next();
                if (number % 2 == 0)
                    code1 = (char)('0' + (char)(number % 10));
                else
                    code1 = (char)('A' + (char)(number % 26)); //转化为字符 

                this.code += code1.ToString();
            }

            lbVerifyCode.Text = code;
        }

        private void lbVerifyCode_Click(object sender, EventArgs e)
        {

        }

        private void buttonCancel_Click_1(object sender, EventArgs e)
        {
            this.Close();
        }

        private void FormStuLogin_FormClosing_1(object sender, FormClosingEventArgs e)
        {
            FormLogin m2 = new FormLogin();
            m2.Show();
        }

        private void lbPassword_Click(object sender, EventArgs e)
        {

        }
    }
}</code></pre>
    <h4 id="%EF%BC%883%EF%BC%89%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5%EF%BC%9A%E5%AD%A6%E7%94%9F%E7%94%A8%E6%88%B7%E8%8B%A5%E6%88%90%E5%8A%9F%E7%99%BB%E5%BD%95%E5%88%99%E8%BF%9B%E5%85%A5%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5%EF%BC%8C%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5%E5%85%B1%E5%8C%85%E5%90%AB%E2%80%9C%E4%B8%AA%E4%BA%BA%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF%E2%80%9D%E5%92%8C%E2%80%9C%E6%88%90%E7%BB%A9%E5%8D%95%E2%80%9D%E4%B8%A4%E4%B8%AA%E5%88%86%E9%A1%B5%EF%BC%8C%E6%89%80%E5%B1%95%E7%A4%BA%E7%9A%84%E4%BF%A1%E6%81%AF%E5%A6%82%E4%B8%8B%E5%9B%BE%E6%89%80%E7%A4%BA%EF%BC%8C%E5%AD%A6%E7%94%9F%E8%83%BD%E5%A4%9F%E7%9C%8B%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E5%92%8C%E4%B8%AA%E4%BA%BA%E6%88%90%E7%BB%A9%EF%BC%8C%E4%BB%A5%E5%8F%8A%E5%90%84%E9%97%A8%E8%AF%BE%E7%A8%8B%E7%9A%84%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF%E3%80%82" style="margin-left:0px;text-align:justify;">
     （3）个人主页：学生用户若成功登录则进入个人主页，个人主页共包含“个人基本信息”和“成绩单”两个分页，所展示的信息如下图所示，学生能够看到自己的个人信息和个人成绩，以及各门课程的详细信息。
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="489" src="https://i-blog.csdnimg.cn/blog_migrate/30cb3408864520cbe9be266abc6d6962.png" width="816"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图8：个人主页——个人信息页
    </p>
    <p style="margin-left:0;text-align:justify;">
    </p>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="489" src="https://i-blog.csdnimg.cn/blog_migrate/500613f9860070f6533f550353daf3ef.png" width="816"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图9：个人主页——成绩单页
    </p>
    <h4 id="%E5%AF%B9%E5%BA%94C%23%E5%AE%9E%E7%8E%B0%E5%A6%82%E4%B8%8B%EF%BC%9A" style="margin-left:0px;text-align:justify;">
     对应C#实现如下：
    </h4>
    <pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace SchoolManage
{
    public partial class StuMain : Form
    {
        public StuMain()
        {
            InitializeComponent();
        }

        private void buttonExit_Click(object sender, EventArgs e)
        {
            this.Close();
        }


        string Id;
        public void GetId(string id)//上个窗体调用此函数，将id值传过来
        {
            lbStuId.Text = id;
            lbStuId.Refresh();
            Id = id;
        }



        private void StuMain_Load_1(object sender, EventArgs e)
        {
            // TODO: 这行代码将数据加载到表“mySchoolDataSet.Course”中。您可以根据需要移动或移除它。
            this.courseTableAdapter.Fill(this.mySchoolDataSet.Course);
            
            string name, sex, dept, tel;
            int age;
            string connString = "Data Source=.;Initial Catalog=MySchool;Persist Security Info=True;User ID=sa;Password=yourpassword";//数据库连接字符串
            SqlConnection conn = new SqlConnection(connString);//创建connection对象
            conn.Open();//打开数据库  

            //创建数据库命令  
            SqlCommand cmd = conn.CreateCommand();
            //创建查询语句  
            cmd.CommandText = "select * from Student where Sno = '" + Id + "';select * from StudentUser where ID = '" + Id + "'";
            //从数据库中读取数据流存入reader中  
            SqlDataReader reader = cmd.ExecuteReader();

            //从reader中读取下一行数据,如果没有数据,reader.Read()返回flase  
            while (reader.Read())
            {
                name = reader.GetString(reader.GetOrdinal("Sname"));
                sex = reader.GetString(reader.GetOrdinal("Ssex"));
                age = reader.GetInt16(reader.GetOrdinal("Sage"));
                dept = reader.GetString(reader.GetOrdinal("Sdept"));

                lbStuName.Text = name;
                lbStuName.Refresh();
                lbStuSex.Text = sex;
                lbStuAge.Text = age.ToString();
                lbStuDept.Text = dept;
                break;
            }
            reader.NextResult();//执行下一句操作


            //从reader中读取下一行数据,如果没有数据,reader.Read()返回flase  
            while (reader.Read())
            {

                tel = reader.GetString(reader.GetOrdinal("UserMobile"));

                lbPhone.Text = tel;
                break;
            }

            reader.Close();


            SqlDataAdapter dap = new SqlDataAdapter("select * from SC where Sno='" + Id + "'", conn);//查询
            DataSet ds = new DataSet();//创建DataSet对象
            dap.Fill(ds);//填充DataSet数据集
            dataGridView1.DataSource = ds.Tables[0].DefaultView;//显示查询后的数据
            conn.Close();
            int i = 0;
            int x = 0, h = 0;
            int a;
            for (; i &lt; ds.Tables[0].Rows.Count; i++)//读取DataSet中的指定数据
            {
                x += int.Parse(ds.Tables[0].Rows[i][2].ToString());
                if (int.Parse(ds.Tables[0].Rows[i][2].ToString()) &gt; 59)
                    h++;
            }
            if (i == 0) a = 0;
            else a = x / i;
            lbPassnum.Text = h.ToString();
            lbAvgSco.Text = a.ToString();
        }

        private void StuMain_FormClosing_1(object sender, FormClosingEventArgs e)
        {
            FormLogin m2 = new FormLogin();
            m2.Show();
        }

        private void StuMain_FormClosed(object sender, FormClosedEventArgs e)
        {
            
        }

        
    }
}
</code></pre>
    <h4 id="%EF%BC%884%EF%BC%89%E6%B3%A8%E5%86%8C%E9%A1%B5%E9%9D%A2%EF%BC%9A%E8%8B%A5%E5%AD%A6%E7%94%9F%E7%94%A8%E6%88%B7%E6%B2%A1%E6%9C%89%E7%99%BB%E9%99%86%E8%B4%A6%E5%8F%B7%EF%BC%8C%E5%88%99%E9%9C%80%E5%9C%A8%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E9%80%89%E6%8B%A9%E6%B3%A8%E5%86%8C%E6%8C%89%E9%92%AE%EF%BC%8C%E8%BF%9B%E5%85%A5%E6%B3%A8%E5%86%8C%E7%95%8C%E9%9D%A2%E8%BE%93%E5%85%A5%E7%9B%B8%E5%BA%94%E4%BF%A1%E6%81%AF%E8%BF%9B%E8%A1%8C%E6%B3%A8%E5%86%8C%E3%80%82%E6%88%90%E5%8A%9F%E6%B3%A8%E5%86%8C%E7%9A%84%E5%89%8D%E6%8F%90%E6%98%AF%E4%BD%A0%E4%B8%BA%E8%AF%A5%E6%A0%A1%E7%9A%84%E5%AD%A6%E7%94%9F%E4%B8%94%E5%90%84%E4%BF%A1%E6%81%AF%E5%B7%B2%E5%A1%AB%E5%86%99%E5%AE%8C%E6%95%B4%E3%80%82" style="margin-left:0px;text-align:justify;">
     （4）注册页面：若学生用户没有登陆账号，则需在学生登录界面选择注册按钮，进入注册界面输入相应信息进行注册。成功注册的前提是你为该校的学生且各信息已填写完整。
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="414" src="https://i-blog.csdnimg.cn/blog_migrate/15c4dc576d016bf5d51cbb21e3107bc3.png" width="596"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图10：注册页面
    </p>
    <p style="margin-left:0;text-align:justify;">
    </p>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="414" src="https://i-blog.csdnimg.cn/blog_migrate/160e7b87e6e9e2acb76ea3e19d889e65.png" width="596"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图11：注册成功
    </p>
    <p style="margin-left:0;text-align:justify;">
    </p>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="414" src="https://i-blog.csdnimg.cn/blog_migrate/7c0d135f3bfad26e54e0cf65b42bf645.png" width="596"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图12：注册失败
    </p>
    <h4 id="%E5%AF%B9%E5%BA%94C%23%E5%AE%9E%E7%8E%B0%E5%A6%82%E4%B8%8B%EF%BC%9A%C2%A0%C2%A0">
     对应C#实现如下：
    </h4>
    <pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SchoolManage
{
    public partial class RegisterForm : Form
    {
        public RegisterForm()
        {
            InitializeComponent();
        }

        private void buttonRegister_Click(object sender, EventArgs e)
        {
            if (tBStuId.Text.Trim() != "" &amp;&amp; tBPassword.Text.Trim() != "" &amp;&amp; cBSex.Text.Trim() != "" &amp;&amp; tBPhoneNum.Text.Trim() != "")
            {//确认一些信息输入非空
                try
                {

                    string connString = "Data Source=.;Initial Catalog=MySchool;Persist Security Info=True;User ID=sa;Password=yourpassword";//数据库连接字符串
                    SqlConnection connection = new SqlConnection(connString);//创建connection对象

                    string username = tBStuId.Text.Trim();  //取出账号
                    string sex = cBSex.Text.Trim();  //取出性别


                    connection.Open();

                    string sql1 = "select Sno,Ssex from Student where Sno = '" + username + "' and Ssex = '" + sex + "'";                                            //编写SQL命令，查找学生信息中是否有该用户
                    SqlCommand sqlCommand1 = new SqlCommand(sql1, connection);//确认是否有该学员
                    SqlDataReader sqlDataReader1 = sqlCommand1.ExecuteReader();
                    bool a = sqlDataReader1.HasRows;
                    sqlDataReader1.Close();
                    if (a)
                    {

                        string sql2 = "select ID from StudentUser where ID = '" + username + "'";                                            //编写SQL命令
                        SqlCommand sqlCommand2 = new SqlCommand(sql2, connection);//确认是否已经注册过
                        SqlDataReader sqlDataReader2 = sqlCommand2.ExecuteReader();
                        if (!sqlDataReader2.HasRows)
                        {
                            string sql3 = "insert into StudentUser (ID,   PassWord ,Sex, UserMobile, Birthday) " +
                                                            "values (@userid, @userpassword,@sex,@usermobile,@Birthday)";

                            SqlCommand command = new SqlCommand(sql3, connection);
                            SqlParameter sqlParameter = new SqlParameter("@userid", tBStuId.Text);
                            command.Parameters.Add(sqlParameter);
                            sqlParameter = new SqlParameter("@userpassword", EncryptWithMD5(tBPassword.Text));
                            command.Parameters.Add(sqlParameter);
                            sqlParameter = new SqlParameter("@sex", cBSex.Text);
                            command.Parameters.Add(sqlParameter);
                            sqlParameter = new SqlParameter("@usermobile", tBPhoneNum.Text);
                            command.Parameters.Add(sqlParameter);
                            sqlParameter = new SqlParameter("@Birthday", dateTimePicker1.Value);
                            command.Parameters.Add(sqlParameter);
                            sqlDataReader2.Close();
                            //打开数据库连接

                            command.ExecuteNonQuery();
                            connection.Close();
                            MessageBox.Show("注册成功");
                        }
                        else
                        {
                            MessageBox.Show("该用户已注册。");
                        }

                    }
                    else
                    {
                        MessageBox.Show("我校无该学员");
                    }



                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message);
                }


                this.Close();
            }
            else
            {
                MessageBox.Show("请将信息填写完整！");
            }

        }
        public Byte[] mybyte = new byte[0];
        public static string EncryptWithMD5(string source)
        {
            byte[] sor = Encoding.UTF8.GetBytes(source);
            MD5 md5 = MD5.Create();
            byte[] result = md5.ComputeHash(sor);
            StringBuilder strbul = new StringBuilder(40);
            for (int i = 0; i &lt; result.Length; i++)
            {
                strbul.Append(result[i].ToString("x2"));//加密结果"x2"结果为32位,"x3"结果为48位,"x4"结果为64位
            }
            return strbul.ToString();

        }

        private void tBPassword_Leave(object sender, EventArgs e)//校验密码格式
        {
            if (tBStuId.Text.Trim() != "")
            {
                //使用regex（正则表达式）进行格式设置 至少有数字、大写字母、小写字母各一个。最少3个字符、最长20个字符。
                Regex regex = new Regex(@"(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,20}");

                if (regex.IsMatch(tBPassword.Text))//判断格式是否符合要求
                {
                    //MessageBox.Show("输入密码格式正确!");
                }
                else
                {
                    MessageBox.Show("至少有数字、大写字母、小写字母各一个。最少3个字符、最长20个字符！");
                    tBPassword.Focus();
                }
            }
            else
            {
                MessageBox.Show("请填写密码！");
            }
        }


        private void RegisterForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            FormStuLogin m2 = new FormStuLogin();
            m2.Show();
        }

        private void buttonCancel_Click_1(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}</code></pre>
    <h4 id="%EF%BC%885%EF%BC%89%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2%EF%BC%9A%E8%8B%A5%E6%82%A8%E7%9A%84%E7%9C%81%E4%BB%BD%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%EF%BC%8C%E5%88%99%E5%8F%AF%E5%9C%A8%E4%B8%BB%E7%95%8C%E9%9D%A2%E9%80%89%E6%8B%A9%E2%80%9C%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E2%80%9D%E9%80%89%E9%A1%B9%EF%BC%8C%E8%BF%9B%E5%85%A5%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E3%80%82%E4%B8%8E%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E7%9B%B8%E4%BC%BC%EF%BC%8C%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E6%88%90%E5%8A%9F%E7%9A%84%E5%89%8D%E6%8F%90%E6%98%AF%E6%AD%A3%E7%A1%AE%E8%BE%93%E5%85%A5%E5%90%84%E7%B1%BB%E4%BF%A1%E6%81%AF%E3%80%82%E4%BD%86%E7%AE%A1%E7%90%86%E5%91%98%E7%99%BB%E5%BD%95%E4%B8%8D%E6%8F%90%E4%BE%9B%E2%80%9C%E6%B3%A8%E5%86%8C%E2%80%9D%E9%80%89%E9%A1%B9%EF%BC%8C%E5%9B%A0%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E8%BA%AB%E4%BB%BD%E5%BF%85%E9%A1%BB%E7%94%B1%E7%B3%BB%E7%BB%9F%E6%8E%88%E4%BA%88%E2%80%94%E2%80%94%E5%8D%B3%E5%9C%A8%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%AD%E5%A1%AB%E5%85%A5%E7%9B%B8%E5%BA%94%E4%BF%A1%E6%81%AF%E6%89%8D%E5%8F%AF%E6%88%90%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E3%80%82" style="margin-left:0px;text-align:justify;">
     （5）管理员登录页面：若您的身份为管理员，则可在主界面选择“管理员登录”选项，进入管理员登录界面。与学生登录相似，管理员登录成功的前提是正确输入各类信息。但管理员登录不提供“注册”选项，因为管理员身份必须由系统授予——即在数据库中填入相应信息才可成为管理员。
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="384" src="https://i-blog.csdnimg.cn/blog_migrate/55bb9bc102b3f3527bd3b951342b08d3.png" width="568"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图13：管理员登录页面
    </p>
    <p style="margin-left:0;text-align:justify;">
    </p>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="384" src="https://i-blog.csdnimg.cn/blog_migrate/a7b736e1f323aafbcb82b2d268d51a0f.png" width="568"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图14：管理员登录成功
    </p>
    <h4>
     对应C#实现如下：
    </h4>
    <pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SchoolManage
{
    public partial class FormManagerLogin : Form
    {
        public FormManagerLogin()
        {
            InitializeComponent();
        }

        public string code;
        private void buttonLogin_Click(object sender, EventArgs e)
        {
            string username = tBWorknum.Text.Trim();  //取出账号
            string password = EncryptWithMD5(tBPassword.Text.Trim());  //取出密码并加密

            string myConnString = "Data Source=.;Initial Catalog=MySchool;Persist Security Info=True;User ID=sa;Password=yourpassword";

            SqlConnection sqlConnection = new SqlConnection(myConnString);  //实例化连接对象
            sqlConnection.Open();

            string sql = "select ID,PassWord from Administrator where ID = '" + username + "' and PassWord = '" + password + "'";                                            //编写SQL命令
            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();

            if (sqlDataReader.HasRows &amp;&amp; tBVerifyCode.Text == code)
            {
                MessageBox.Show("欢迎使用！");             //登录成功
                ManagerMain managerMain = new ManagerMain();
                managerMain.Show();
                this.Hide();
            }
            else if (sqlDataReader.HasRows &amp;&amp; tBVerifyCode.Text != code)
            {
                MessageBox.Show("验证码错误，登录失败！");
                return;
            }
            else
            {
                MessageBox.Show("账号密码有误，登录失败！");
                return;
            }
            sqlDataReader.Close();
            sql = "insert into SysLog1 values ( '" + username + "' , 'Administrator','" + DateTime.Now + "' , '" + "Login" + "')";                                            //编写SQL命令
            SqlCommand sqlCommand1 = new SqlCommand(sql, sqlConnection);
            sqlCommand1.ExecuteNonQuery();
            sqlConnection.Close();
        }

        private string EncryptWithMD5(string source)
        {
            byte[] sor = Encoding.UTF8.GetBytes(source);
            MD5 md5 = MD5.Create();
            byte[] result = md5.ComputeHash(sor);
            StringBuilder strbul = new StringBuilder(40);
            for (int i = 0; i &lt; result.Length; i++)
            {
                strbul.Append(result[i].ToString("x2"));//加密结果"x2"结果为32位,"x3"结果为48位,"x4"结果为64位
            }
            return strbul.ToString();
        }


        private void FormManagerLogin_Load_1(object sender, EventArgs e)
        {
            //随机实例化 
            Random ran = new Random();
            int number;
            char code1;
            //取五个数 
            for (int i = 0; i &lt; 5; i++)
            {
                number = ran.Next();
                if (number % 2 == 0)
                    code1 = (char)('0' + (char)(number % 10));
                else
                    code1 = (char)('A' + (char)(number % 26)); //转化为字符 

                this.code += code1.ToString();
            }

            lbVerifyCode.Text = code;
        }

        private void FormManagerLogin_FormClosing_1(object sender, FormClosingEventArgs e)
        {
            FormLogin m2 = new FormLogin();
            m2.Show();
        }

        private void buttonCancel_Click_1(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}</code></pre>
    <h4 id="%EF%BC%886%EF%BC%89%E7%AE%A1%E7%90%86%E5%91%98%E4%B8%BB%E9%A1%B5%EF%BC%9A%E7%AE%A1%E7%90%86%E5%91%98%E4%B8%BB%E9%A1%B5%E4%B8%80%E5%85%B1%E5%8C%85%E5%90%AB%E4%BA%94%E4%B8%AA%E5%8F%AF%E9%80%89%E9%A1%B9%EF%BC%8C%E5%A6%82%E4%B8%8B%E5%9B%BE%E6%89%80%E7%A4%BA%E3%80%82%E5%85%B6%E4%B8%AD%EF%BC%8C%E5%AF%B9%E4%BA%8E%E2%80%9C%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E2%80%9D%EF%BC%8C%E2%80%9C%E8%AF%BE%E7%A8%8B%E4%BF%A1%E6%81%AF%E2%80%9D%EF%BC%8C%E2%80%9C%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E2%80%9D%EF%BC%8C%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82" style="margin-left:0px;text-align:justify;">
     （6）管理员主页：管理员主页一共包含五个可选项，如下图所示。其中，对于“学生信息”，“课程信息”，“学生成绩”，管理员可按需进行增、删、改、查操作。
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="430" src="https://i-blog.csdnimg.cn/blog_migrate/cadf766eb04611ae2b122f352324f192.png" width="548"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图15：管理员主页
    </p>
    <h4>
     对应C#实现如下：
    </h4>
    <pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SchoolManage
{
    public partial class ManagerMain : Form
    {
        public ManagerMain()
        {
            InitializeComponent();
        }

        

        private void buttonLog_Click(object sender, EventArgs e)
        {
            this.Hide();
            LogMain m = new LogMain();
            m.Show();
        }

        private void buttonStu_Click(object sender, EventArgs e)
        {
            this.Hide();
            StuMessageMain m = new StuMessageMain();
            m.Show();
        }

        private void buttonCourse_Click(object sender, EventArgs e)
        {
            this.Hide();
            CourseMessageMain m = new CourseMessageMain();
            m.Show();
        }

        private void buttonGrade_Click(object sender, EventArgs e)
        {
            this.Hide();
            StuGradeMain m = new StuGradeMain();
            m.Show();
        }

        private void buttonExit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void ManagerMain_FormClosed(object sender, FormClosedEventArgs e)
        {
            //Application.Exit();
        }

        private void ManagerMain_FormClosing(object sender, FormClosingEventArgs e)
        {
            FormLogin m2 = new FormLogin();
            m2.Show();
        }

       

        private void ManagerMain_Load(object sender, EventArgs e)
        {

        }
    }
}
</code></pre>
    <h4 id="%EF%BC%887%EF%BC%89%E7%99%BB%E5%BD%95%E6%97%A5%E5%BF%97%E9%A1%B5%E9%9D%A2%EF%BC%9A%E7%99%BB%E5%BD%95%E6%97%A5%E5%BF%97%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E8%AF%A5%E7%B3%BB%E7%BB%9F%E6%89%80%E6%9C%89%E7%94%A8%E6%88%B7%E7%9A%84%E7%99%BB%E5%BD%95%E8%AE%B0%E5%BD%95" style="margin-left:0px;text-align:justify;">
     （7）登录日志页面：登录日志为管理员提供该系统所有用户的登录记录
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="386" src="https://i-blog.csdnimg.cn/blog_migrate/b2e6928a3c7e0d533f527b7b94f212ec.png" width="615"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图16：登录日志页面
    </p>
    <h4>
     对应C#实现如下：
    </h4>
    <pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SchoolManage
{
    public partial class LogMain : Form
    {
        public LogMain()
        {
            InitializeComponent();
        }

        private void LogMain_Load(object sender, EventArgs e)
        {
            // TODO: 这行代码将数据加载到表“mySchoolDataSet1.SysLog1”中。您可以根据需要移动或移除它。
            this.sysLog1TableAdapter.Fill(this.mySchoolDataSet1.SysLog1);

        }

        private void buttonReturn_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void LogMain_FormClosing(object sender, FormClosingEventArgs e)
        {
            ManagerMain m2 = new ManagerMain();
            m2.Show();
        }
    }
}
</code></pre>
    <h4 id="%EF%BC%888%EF%BC%89%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%EF%BC%8C%E4%B8%94%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82" style="margin-left:0px;text-align:justify;">
     （8）学生信息页面：为管理员提供学生信息，且管理员可按需进行增、删、改、查操作。
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="489" src="https://i-blog.csdnimg.cn/blog_migrate/1ce70c55fc4d459fe12887b4dfe23d45.png" width="816"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图17：学生信息页面
    </p>
    <h4>
     对应C#实现如下：
    </h4>
    <pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace SchoolManage
{
    public partial class StuMessageMain : Form
    {
        public StuMessageMain()
        {
            InitializeComponent();
        }

        private void StuMessageMain_Load(object sender, EventArgs e)
        {
            // TODO: 这行代码将数据加载到表“mySchoolDataSet2.Student”中。您可以根据需要移动或移除它。
            this.studentTableAdapter.Fill(this.mySchoolDataSet2.Student);

        }

        private void buttonReturn_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void buttonAdd_Click(object sender, EventArgs e)
        {
            String StuID = tBStuId.Text.Trim();//读取文本框的值
            String StuName = tBStuName.Text.Trim();
            String StuSex = tBStuSex.Text.Trim();
            String StuSdept = tBStuDept.Text.Trim();
            int StuAge = int.Parse(tBStuAge.Text.Trim());
            SqlConnection con = new SqlConnection("Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword");
            try
            {
                con.Open();
                string insertStr = "INSERT INTO  Student (Sno,Sname,Ssex,Sdept,Sage)    " +
                    "VALUES ('" + StuID + "','" + StuName + "','" + StuSex + "','" + StuSdept + "'," + StuAge + ")";
                SqlCommand cmd = new SqlCommand(insertStr, con);//通过sql语句对表添加数值
                cmd.ExecuteNonQuery();
            }
            catch
            {
                MessageBox.Show("输入数据违反要求!");
            }
            finally
            {
                con.Dispose();
                tBStuId.Text = "";
                tBStuName.Text = "";
                tBStuSex.Text = "";
                tBStuAge.Text = "";
                tBStuDept.Text = "";
            }
            this.studentTableAdapter.Fill(this.mySchoolDataSet2.Student);//刷新表
        }

        private void buttonDelete_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection("Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword");
            try
            {
                con.Open();
                string select_id = dataGridView1.SelectedRows[0].Cells[0].Value.ToString();//选择的当前行第一列的值，也就是ID
                string delete_by_id = "delete from Student where Sno=" + select_id;//sql删除语句
                SqlCommand cmd = new SqlCommand(delete_by_id, con);
                cmd.ExecuteNonQuery();
            }
            catch
            {
                MessageBox.Show("请正确选择行!");
            }
            finally
            {
                con.Dispose();

            }
            this.studentTableAdapter.Fill(this.mySchoolDataSet2.Student);
        }

        private void buttonEdit_Click(object sender, EventArgs e)
        {
            String StuID = tBStuId.Text.Trim();
            String StuName = tBStuName.Text.Trim();
            String StuSex = tBStuSex.Text.Trim();
            String StuSdept = tBStuDept.Text.Trim();
            int StuAge = 0;
            if (tBStuAge.Text != "") 
            {
                StuAge = int.Parse(tBStuAge.Text.Trim());
            }

            SqlConnection con = new SqlConnection("Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword");
            try
            {
                con.Open();
                if(StuName != "") 
                {
                    string insertStr = "UPDATE Student SET Sname = '" + StuName + "' WHERE Sno = '" + StuID + "'";
                    SqlCommand cmd = new SqlCommand(insertStr, con);
                    cmd.ExecuteNonQuery();
                }

                if (StuSex != "")
                {
                    string insertStr = "UPDATE Student SET Ssex = '" + StuSex + "' WHERE Sno = '" + StuID + "'";
                    SqlCommand cmd = new SqlCommand(insertStr, con);
                    cmd.ExecuteNonQuery();
                }

                if (StuSdept != "")
                {
                    string insertStr = "UPDATE Student SET Sdept = '" + StuSdept + "' WHERE Sno = '" + StuID + "'";
                    SqlCommand cmd = new SqlCommand(insertStr, con);
                    cmd.ExecuteNonQuery();
                }

                if (tBStuAge.Text != "")
                {
                    string insertStr = "UPDATE Student SET Sage = '" + StuAge + "' WHERE Sno = '" + StuID + "'";
                    SqlCommand cmd = new SqlCommand(insertStr, con);
                    cmd.ExecuteNonQuery();
                }


            }
            catch
            {
                MessageBox.Show("输入数据违反要求!");
            }
            finally
            {
                con.Dispose();
                tBStuId.Text = "";
                tBStuName.Text = "";
                tBStuSex.Text = "";
                tBStuAge.Text = "";
                tBStuDept.Text = "";
            }
            this.studentTableAdapter.Fill(this.mySchoolDataSet2.Student);

        }

        private void buttonSearch_Click(object sender, EventArgs e)
        {
            String StuID = tBStuId.Text.Trim();
            String conn = "Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword";
            SqlConnection sqlConnection = new SqlConnection(conn);  //实例化连接对象
            try
            {
                sqlConnection.Open();
                String select_by_id = "select * from Student where Sno='" + StuID + "'";
                SqlCommand sqlCommand = new SqlCommand(select_by_id, sqlConnection);
                SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
                BindingSource bindingSource = new BindingSource();
                bindingSource.DataSource = sqlDataReader;
                dataGridView1.DataSource = bindingSource;
            }
            catch
            {
                MessageBox.Show("查询语句有误，请认真检查SQL语句!");
            }
            finally
            {
                sqlConnection.Close();
                tBStuId.Text = "";
            }
        }

        private void StuMessageMain_FormClosing(object sender, FormClosingEventArgs e)
        {
            ManagerMain m2 = new ManagerMain();
            m2.Show();
        }
    }
}</code></pre>
    <h4 id="9%E3%80%81%E8%AF%BE%E7%A8%8B%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E8%AF%BE%E7%A8%8B%E4%BF%A1%E6%81%AF%EF%BC%8C%E4%B8%94%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82" style="margin-left:0px;text-align:justify;">
     （9）课程信息页面：为管理员提供课程信息，且管理员可按需进行增、删、改、查操作。
    </h4>
    <p class="img-center">
     <img alt="" height="489" src="https://i-blog.csdnimg.cn/blog_migrate/a54b618220b086e649f7cfa2f12273dd.png" width="651"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图18：课程信息页面
    </p>
    <h4>
     对应C#实现如下：
    </h4>
    <pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SchoolManage
{
    public partial class CourseMessageMain : Form
    {
        public CourseMessageMain()
        {
            InitializeComponent();
        }

        private void CourseMessageMain_Load(object sender, EventArgs e)
        {
            // TODO: 这行代码将数据加载到表“mySchoolDataSet3.Course”中。您可以根据需要移动或移除它。
            this.courseTableAdapter.Fill(this.mySchoolDataSet3.Course);

        }

        private void buttonAdd_Click(object sender, EventArgs e)
        {
            String cno = tBCno.Text.Trim();
            String cn = tBCname.Text.Trim();
            String cpo = tBCpno.Text.Trim();
            int cd = 0;
            if(tBCcredit.Text != "")
            {
                cd = int.Parse(tBCcredit.Text.Trim());
            }
            if (cpo == "") 
            {
                cpo = "NULL";
            }
            SqlConnection con = new SqlConnection("Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword");
            try
            {
                if(cno == "" || cn =="" || cd == 0)
                {
                    MessageBox.Show("输入数据违反要求!");
                }
                else
                {
                    con.Open();
                    string insertStr = "INSERT INTO  Course (Cno,Cname,Cpno,Ccredit)    " +
                        "VALUES ('" + cno + "','" + cn + "','" + cpo + "','" + cd + "')";
                    SqlCommand cmd = new SqlCommand(insertStr, con);
                    cmd.ExecuteNonQuery();
                }
                
            }
            catch
            {
                
            }
            finally
            {
                con.Dispose();
                tBCno.Text = "";
                tBCname.Text = "";
                tBCpno.Text = "";
                tBCcredit.Text = "";
            }
            this.courseTableAdapter.Fill(this.mySchoolDataSet3.Course);

        }

        private void buttonDelete_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection("Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword");
            try
            {
                con.Open();
                string select_id = dataGridView1.SelectedRows[0].Cells[0].Value.ToString();//选择的当前行第一列的值，也就是ID
                string delete_by_id = "delete from Course where Cno=" + select_id;//sql删除语句
                SqlCommand cmd = new SqlCommand(delete_by_id, con);
                cmd.ExecuteNonQuery();
            }
            catch
            {
                MessageBox.Show("请正确选择行!");
            }
            finally
            {
                con.Dispose();

            }
            this.courseTableAdapter.Fill(this.mySchoolDataSet3.Course);

        }

        private void buttonEdit_Click(object sender, EventArgs e)
        {
            String cno = tBCno.Text.Trim();
            String cn = tBCname.Text.Trim();
            String cpo = tBCpno.Text.Trim();
            int cd = 0;
            if(tBCcredit.Text != "")
            {
                cd = int.Parse(tBCcredit.Text.Trim());
            }
            
            if (cpo == "")
            {
                cpo = "NULL";
            }
            SqlConnection con = new SqlConnection("Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword");

                con.Open();

                if(cn != "")
                {
                    string insertStr = "UPDATE Course SET Cname = '" + cn + "' WHERE Cno = '" + cno + "'";
                    SqlCommand cmd = new SqlCommand(insertStr, con);
                    cmd.ExecuteNonQuery();
                }

                if (cpo != "")
                {
                    string insertStr = "UPDATE Course SET Cpno = '" + cpo + "' WHERE Cno = '" + cno + "'";
                    SqlCommand cmd = new SqlCommand(insertStr, con);
                    cmd.ExecuteNonQuery();
                }

                if (tBCcredit.Text != "")
                {
                    string insertStr = "UPDATE Course SET Ccredit = '" + cd + "' WHERE Cno = '" + cno + "'";
                    SqlCommand cmd = new SqlCommand(insertStr, con);
                    cmd.ExecuteNonQuery();
                }

                if(cno == "")
                {
                    MessageBox.Show("输入数据违反要求!");
                }

            
                con.Dispose();
                tBCno.Text = "";
                tBCname.Text = "";
                tBCpno.Text = "";
                tBCcredit.Text = "";
            
            this.courseTableAdapter.Fill(this.mySchoolDataSet3.Course);
        }

        private void buttonSearch_Click(object sender, EventArgs e)
        {
            String cno = tBCno.Text.Trim();
            String conn = "Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword";
            SqlConnection sqlConnection = new SqlConnection(conn);  //实例化连接对象
            try
            {
                sqlConnection.Open();
                String select_by_id = "select * from Course where Cno='" + cno + "'";
                SqlCommand sqlCommand = new SqlCommand(select_by_id, sqlConnection);
                SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
                BindingSource bindingSource = new BindingSource();
                bindingSource.DataSource = sqlDataReader;
                dataGridView1.DataSource = bindingSource;
            }
            catch
            {
                MessageBox.Show("查询语句有误，请认真检查SQL语句!");
            }
            finally
            {
                sqlConnection.Close();
                tBCno.Text = "";
            }
        }

        private void buttonReturn_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void CourseMessageMain_FormClosing(object sender, FormClosingEventArgs e)
        {
            ManagerMain m2 = new ManagerMain();
            m2.Show();
        }
    }
}</code></pre>
    <h4 id="%EF%BC%8810%EF%BC%89%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E4%BF%A1%E6%81%AF%EF%BC%8C%E4%B8%94%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%AF%E6%8C%89%E9%9C%80%E8%BF%9B%E8%A1%8C%E5%A2%9E%E3%80%81%E5%88%A0%E3%80%81%E6%94%B9%E3%80%81%E6%9F%A5%E6%93%8D%E4%BD%9C%E3%80%82" style="margin-left:0px;text-align:justify;">
     （10）学生成绩信息页面：为管理员提供学生成绩信息，且管理员可按需进行增、删、改、查操作。
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="489" src="https://i-blog.csdnimg.cn/blog_migrate/f2b0ba61c7510cf48b3575b89c249d48.png" width="615"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图19：学生成绩信息页面
    </p>
    <h4>
     对应C#实现如下：
    </h4>
    <pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SchoolManage
{
    public partial class StuGradeMain : Form
    {
        public StuGradeMain()
        {
            InitializeComponent();
        }

        private void StuGradeMain_Load(object sender, EventArgs e)
        {
            // TODO: 这行代码将数据加载到表“mySchoolDataSet4.SC”中。您可以根据需要移动或移除它。
            this.sCTableAdapter.Fill(this.mySchoolDataSet4.SC);
            
        }

        private void buttonAdd_Click(object sender, EventArgs e)
        {
            String sno = tBSId.Text.Trim();
            String cno = tBCno.Text.Trim();
            int gra = int.Parse(tBGrade.Text.Trim());
            SqlConnection con = new SqlConnection("Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword");
            try
            {
                con.Open();
                string insertStr = "INSERT INTO  SC (Sno,Cno,Grade)    " +
                    "VALUES ('" + sno + "','" + cno + "','" + gra + "')";
                SqlCommand cmd = new SqlCommand(insertStr, con);
                cmd.ExecuteNonQuery();
            }
            catch
            {
                MessageBox.Show("输入数据违反要求!");
            }
            finally
            {
                con.Dispose();
                tBSId.Text = "";
                tBCno.Text = "";
                tBGrade.Text = "";
            }
            this.sCTableAdapter.Fill(this.mySchoolDataSet4.SC);

        }

        private void buttonDelete_Click(object sender, EventArgs e)
        {
            
            SqlConnection con = new SqlConnection("Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword");
            try
            {
                con.Open();
                string select_id = dataGridView1.SelectedRows[0].Cells[0].Value.ToString();//选择的当前行第一列的值，也就是ID
                string select_cid = dataGridView1.SelectedRows[0].Cells[1].Value.ToString();//选择的当前行第二列的值，也就是CID
                string deletesql = "delete from SC where Sno='" + select_id + "' AND Cno='" + select_cid + "'";//sql删除语句
                SqlCommand cmd = new SqlCommand(deletesql, con);
                cmd.ExecuteNonQuery();
            }
            catch
            {
                MessageBox.Show("请正确选择行!");
            }
            finally
            {
                con.Dispose();

            }
            this.sCTableAdapter.Fill(this.mySchoolDataSet4.SC);

        }

        private void buttonEdit_Click(object sender, EventArgs e)
        {
            String sno = tBSId.Text.Trim();
            String cno = tBCno.Text.Trim();

            int gra = int.Parse(tBGrade.Text.Trim());
            SqlConnection con = new SqlConnection("Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword");
            try
            {
                con.Open();
                string insertStr = "UPDATE SC SET Grade='" + gra + "' WHERE Sno = '" + sno + "' AND Cno = '" + cno + "'";
                SqlCommand cmd = new SqlCommand(insertStr, con);
                cmd.ExecuteNonQuery();
            }
            catch
            {
                MessageBox.Show("输入数据违反要求!");
            }
            finally
            {
                con.Dispose();
                tBSId.Text = "";
                tBCno.Text = "";
                tBGrade.Text = "";
            }
            this.sCTableAdapter.Fill(this.mySchoolDataSet4.SC);

        }

        private void buttonSearch_Click(object sender, EventArgs e)
        {
            String sno = tBSId.Text.Trim();
            String cno = tBCno.Text.Trim();

            String conn = "Data Source=.;Initial Catalog=MySchool;User ID=sa;Password=yourpassword";
            SqlConnection sqlConnection = new SqlConnection(conn);  //实例化连接对象
            try
            {
                String selectsql = "select * from SC where Sno='" + sno + "'";
                sqlConnection.Open();
                if(sno != "" &amp;&amp; cno == "")
                {
                    selectsql = "select * from SC where Sno='" + sno + "'";
                }

                if (sno != "" &amp;&amp; cno != "")
                {
                    selectsql = "select * from SC where Sno='" + sno + "' AND Cno='" + cno + "'";
                }
                
                SqlCommand sqlCommand = new SqlCommand(selectsql, sqlConnection);
                SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
                BindingSource bindingSource = new BindingSource();
                bindingSource.DataSource = sqlDataReader;
                dataGridView1.DataSource = bindingSource;
            }
            catch
            {
                MessageBox.Show("查询语句有误，请认真检查SQL语句!");
            }
            finally
            {
                sqlConnection.Close();
                tBSId.Text = "";
                tBCno.Text = "";
            }
        }

        private void buttonMes_Click(object sender, EventArgs e)
        {
            string connString = "Data Source=.;Initial Catalog=MySchool;Persist Security Info=True;User ID=sa;Password=yourpassword";//数据库连接字符串
            SqlConnection connection = new SqlConnection(connString);//创建connection对象
            string sql1 = "EXEC COURSE_AVG1";//编写SQL命令
            SqlCommand sqlCommand1 = new SqlCommand(sql1, connection);
            connection.Open();
            sqlCommand1.ExecuteNonQuery();
            connection.Close();
            this.Hide();
            StatisiticMain m2 = new StatisiticMain();
            m2.Show();

        }

        private void buttonReturn_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void StuGradeMain_FormClosing(object sender, FormClosingEventArgs e)
        {
            ManagerMain m2 = new ManagerMain();
            m2.Show();
        }
    }
}</code></pre>
    <h4 id="%EF%BC%8811%EF%BC%89%E6%88%90%E7%BB%A9%E7%BB%9F%E8%AE%A1%E9%A1%B5%E9%9D%A2%EF%BC%9A%E4%B8%BA%E7%AE%A1%E7%90%86%E5%91%98%E6%8F%90%E4%BE%9B%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E3%80%82" style="margin-left:0px;text-align:justify;">
     （11）成绩统计页面：为管理员提供统计信息。
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="393" src="https://i-blog.csdnimg.cn/blog_migrate/547c7131f96d5a847ab17d3f30e52e4b.png" width="452"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图20：成绩统计页面
    </p>
    <h4>
     对应C#实现如下：
    </h4>
    <pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SchoolManage
{
    public partial class StatisiticMain : Form
    {
        public StatisiticMain()
        {
            InitializeComponent();
        }

        private void StatisiticMain_Load(object sender, EventArgs e)
        {
            // TODO: 这行代码将数据加载到表“mySchoolDataSet6.AVG1”中。您可以根据需要移动或移除它。
            this.aVG1TableAdapter.Fill(this.mySchoolDataSet6.AVG1);


        }

        private void buttonReturn_Click(object sender, EventArgs e)
        {
            this.Close();
            
        }

        private void StatisiticMain_FormClosing(object sender, FormClosingEventArgs e)
        {
            StuGradeMain m2 = new StuGradeMain();
            m2.Show();
        }
    }
}
</code></pre>
    <h4 id="%EF%BC%8812%EF%BC%89%E5%9C%A8%E4%B8%BB%E7%95%8C%E9%9D%A2%E7%82%B9%E5%87%BB%E5%8F%B3%E4%B8%8A%E8%A7%92%E7%9A%84%E2%80%9C%C3%97%E2%80%9D%E5%8D%B3%E9%80%80%E5%87%BA%E7%B3%BB%E7%BB%9F%E3%80%82">
     （12）在主界面点击右上角的“×”即退出系统。
    </h4>
    <h4 id="%EF%BC%88%E6%B3%A8%EF%BC%9A%E4%BB%A5%E4%B8%8A%E9%A1%B5%E9%9D%A2%E4%B8%AD%E7%9A%84%E2%80%9C%E8%BF%94%E5%9B%9E%E2%80%9D%E3%80%81%E2%80%9C%E9%80%80%E5%87%BA%E2%80%9D%E3%80%81%E2%80%9C%E5%8F%96%E6%B6%88%E2%80%9D%E3%80%81%E2%80%9C%C3%97%E2%80%9D%E9%80%89%E9%A1%B9%E5%9D%87%E4%BD%BF%E5%BE%97%E9%A1%B5%E9%9D%A2%E4%BB%8E%E5%BD%93%E5%89%8D%E7%95%8C%E9%9D%A2%E8%BF%94%E5%9B%9E%E5%88%B0%E4%B8%8A%E4%B8%80%E7%95%8C%E9%9D%A2%E6%88%96%E4%B8%8A%E4%B8%80%E7%BA%A7%E7%95%8C%E9%9D%A2%EF%BC%8C%E5%B9%B6%E4%B8%8D%E4%BD%BF%E7%A8%8B%E5%BA%8F%E9%80%80%E5%87%BA%EF%BC%8C%E4%BB%85%E4%B8%BB%E7%95%8C%E9%9D%A2%E7%9A%84%E2%80%9C%C3%97%E2%80%9D%E5%8F%B7%E5%8F%AF%E9%80%80%E5%87%BA%E7%B3%BB%E7%BB%9F%E3%80%82%EF%BC%89" style="margin-left:0px;text-align:justify;">
     （注：以上页面中的“返回”、“退出”、“取消”、“×”选项均使得页面从当前界面返回到上一界面或上一级界面，并不使程序退出，仅主界面的“×”号可退出系统。）
    </h4>
    <p style="margin-left:0;text-align:center;">
     <img alt="" height="368" src="https://i-blog.csdnimg.cn/blog_migrate/2624aacccec2a4d4b537306f82466ac7.png" width="504"/>
    </p>
    <p style="margin-left:0;text-align:center;">
     图21：退出系统
    </p>
    <p style="margin-left:0;text-align:justify;">
    </p>
    <p style="margin-left:0;text-align:justify;">
     以上就是本次数据库课程设计的全部内容啦，欢迎小伙伴们交流心得，批评指正。
    </p>
    <h4 style="margin-left:0px;text-align:justify;">
     <strong>
      <span style="color:#fe2c24;">
       转载请注明出处，未经同意禁止转载！
      </span>
     </strong>
    </h4>
   </div>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f71715f34373430333637312f:61727469636c652f64657461696c732f313235303834353039</p>

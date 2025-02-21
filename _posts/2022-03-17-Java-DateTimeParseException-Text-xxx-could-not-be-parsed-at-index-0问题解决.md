---
layout: post
title: 2022-03-17-Java-DateTimeParseException-Text-xxx-could-not-be-parsed-at-index-0问题解决
date: 2022-03-17 19:39:03 +0800
categories: [Java]
tags: [java]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=123485078
  alt: Java-DateTimeParseException-Text-xxx-could-not-be-parsed-at-index-0问题解决
artid: 123485078
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Java DateTimeParseException: Text ‘xxx‘ could not be parsed at index 0问题解决
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h2>
     问题描述：
    </h2>
    <p>
     java.time.format.DateTimeParseException: Text '20220310' could not be parsed at index 0
    </p>
    <h2>
     问题分析：
    </h2>
    <p>
     1、使用 LocalDate.parse() 方法时，要转换的日期字符串格式和指定的日期格式对不上。
    </p>
    <pre><code class="language-java">LocalDate.parse("20220310", DateTimeFormatter.ofPattern("yyyy-MM-dd"));</code></pre>
    <p>
     解决办法：
    </p>
    <p>
     要转换的日期字符串格式和指定的日期格式一致即可。
    </p>
    <pre><code class="language-java">LocalDate.parse("2022-03-10", DateTimeFormatter.ofPattern("yyyy-MM-dd"));</code></pre>
    <p>
     <a class="has-card" href="https://space.bilibili.com/484264966?spm_id_from=333.1007.0.0" rel="nofollow" title="旭东怪的个人空间_哔哩哔哩_Bilibili">
      <span class="link-card-box">
       <span class="link-title">
        旭东怪的个人空间_哔哩哔哩_Bilibili
       </span>
       <span class="link-desc">
        旭东怪，人生低谷不可怕，可怕的是坚持不到人生转折点的那一天;旭东怪的主页、动态、视频、专栏、频道、收藏、订阅等。哔哩哔哩Bilibili，你感兴趣的视频都在B站。
       </span>
       <span class="link-link">
        <img alt="icon-default.png?t=O83A" class="link-link-icon" src="https://csdnimg.cn/release/blog_editor_html/release2.3.7/ckeditor/plugins/CsdnLink/icons/icon-default.png?t=O83A">
         https://space.bilibili.com/484264966?spm_id_from=333.1007.0.0
        </img>
       </span>
      </span>
     </a>
    </p>
   </div>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f71715f33383937343633382f:61727469636c652f64657461696c732f313233343835303738

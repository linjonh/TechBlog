---
layout: post
title: 多人-开源git服务器_gitlab两个服务器之间同步项目
date: 2020-12-24 08:49:55 +0800
categories: [多人开源git服务器]
tags: [多人开源git服务器]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=111953124
    alt: 多人-开源git服务器_gitlab两个服务器之间同步项目
artid: 111953124
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     多人 开源git服务器_gitlab两个服务器之间同步项目
    </h1>
   </div>
   <div class="ai-article-tag" id="ai-article-tag">
    <div class="ai-article-tag-box">
     <p class="ai-article-tag-item-active">
      <img alt="" class="item-target" src="https://img-home.csdnimg.cn/images/20240715101418.png"/>
     </p>
     <a class="ai-article-tag-item" data-report-click='{"spm":"3001.10231","extra":{"searchword":"GitLab"}}' data-report-query="spm=1001.2101.3001.10231" data-report-view='{"spm":"3001.10231","extra":{"searchword":"GitLab"}}' href="https://so.csdn.net/so/search/s.do?q=GitLab&amp;t=all&amp;o=vip&amp;s=&amp;l=&amp;f=&amp;viparticle=&amp;from_tracking_code=tag_word&amp;from_code=app_blog_art" target="_blank">
      <span>
       GitLab
      </span>
     </a>
     <a class="ai-article-tag-item" data-report-click='{"spm":"3001.10231","extra":{"searchword":"代码同步"}}' data-report-query="spm=1001.2101.3001.10231" data-report-view='{"spm":"3001.10231","extra":{"searchword":"代码同步"}}' href="https://so.csdn.net/so/search/s.do?q=%E4%BB%A3%E7%A0%81%E5%90%8C%E6%AD%A5&amp;t=all&amp;o=vip&amp;s=&amp;l=&amp;f=&amp;viparticle=&amp;from_tracking_code=tag_word&amp;from_code=app_blog_art" target="_blank">
      <span>
       代码同步
      </span>
     </a>
     <a class="ai-article-tag-item" data-report-click='{"spm":"3001.10231","extra":{"searchword":"版本控制"}}' data-report-query="spm=1001.2101.3001.10231" data-report-view='{"spm":"3001.10231","extra":{"searchword":"版本控制"}}' href="https://so.csdn.net/so/search/s.do?q=%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6&amp;t=all&amp;o=vip&amp;s=&amp;l=&amp;f=&amp;viparticle=&amp;from_tracking_code=tag_word&amp;from_code=app_blog_art" target="_blank">
      <span>
       版本控制
      </span>
     </a>
     <a class="ai-article-tag-item" data-report-click='{"spm":"3001.10231","extra":{"searchword":"镜像推送"}}' data-report-query="spm=1001.2101.3001.10231" data-report-view='{"spm":"3001.10231","extra":{"searchword":"镜像推送"}}' href="https://so.csdn.net/so/search/s.do?q=%E9%95%9C%E5%83%8F%E6%8E%A8%E9%80%81&amp;t=all&amp;o=vip&amp;s=&amp;l=&amp;f=&amp;viparticle=&amp;from_tracking_code=tag_word&amp;from_code=app_blog_art" target="_blank">
      <span>
       镜像推送
      </span>
     </a>
     <a class="ai-article-tag-item" data-report-click='{"spm":"3001.10231","extra":{"searchword":"局域网备份"}}' data-report-query="spm=1001.2101.3001.10231" data-report-view='{"spm":"3001.10231","extra":{"searchword":"局域网备份"}}' href="https://so.csdn.net/so/search/s.do?q=%E5%B1%80%E5%9F%9F%E7%BD%91%E5%A4%87%E4%BB%BD&amp;t=all&amp;o=vip&amp;s=&amp;l=&amp;f=&amp;viparticle=&amp;from_tracking_code=tag_word&amp;from_code=app_blog_art" target="_blank">
      <span>
       局域网备份
      </span>
     </a>
    </div>
    <span class="ai-article-tag-text">
     关键词由CSDN通过智能技术生成
    </span>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <div style="font-size:16px;">
     <p>
      功能要求：
     </p>
     <p>
      在公网上搭建一个gitlab服务器，所有项目代码的更新、提交都在这个服务器的项目中进行，实现对代码的版本控制。同时，在本地的局域网内再搭建一个gitlab服务器，把项目中每天的代码变化同步到这个服务器的项目中，进行备份。
     </p>
     <p>
      思路：
     </p>
     <p>
      公网上gitlab服务器是项目代码提交更新的地方，局域网内的gitlab服务器只需要同步公网上gitlab服务器的项目代码不需要用户提交更新代码。可以建立一个中转代码库，从公网上gitlab服务器获取项目的更新，然后把更新后的中转代码库内容推送到局域网内的gitlab服务器。
     </p>
     <p>
      具体做法：
     </p>
     <p>
      1.从公网上gitlab服务器获取镜像版本库
     </p>
     <p>
      git clone --mirror git@112.126.81.138:root/test-project-sync.git
     </p>
     <p>
      2.在本地局域网上gitlab服务器创建版本库
     </p>
     <p>
      3.以镜像方式推送版本库到本地局域网上gitlab服务器
     </p>
     <p>
      git push --mirror git@192.168.0.40:root/test-project-sync.git
     </p>
     <p>
      4. 更新镜像版本库
     </p>
     <p>
      镜像版本库可以用git remote update从远程版本库获取更新内容
     </p>
     <p>
      git remote update
     </p>
     <p>
      git push --mirror git@192.168.0.40:root/test-project-sync.git
     </p>
     <p>
      本文由 创作，采用 知识共享署名4.0 国际许可协议进行许可。本站文章除注明转载/出处外，均为本站原创或翻译，转载前请务必署名。最后编辑时间为:
     </p>
     <p>
      2020/05/14 10:08
     </p>
    </div>
   </div>
  </div>
  <div id="recommendDown">
  </div>
 </article>
</div>



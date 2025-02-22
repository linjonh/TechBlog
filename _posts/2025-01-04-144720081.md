---
layout: post
title: 2025-01-04-基于pythonDjangomysql在线图片分享平台系统设计与实现
date: 2025-01-04 18:46:04 +0800
categories: [毕设资料]
tags: [在线图片分享平台]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=144720081
  alt: 基于pythonDjangomysql在线图片分享平台系统设计与实现
artid: 144720081
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     基于python+Django+mysql在线图片分享平台系统设计与实现
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <blockquote>
     <p>
      <strong>
       博主介绍
      </strong>
      ：黄菊华老师《Vue.js入门与商城开发实战》《微信小程序商城开发》图书作者，CSDN博客专家，在线教育专家，CSDN钻石讲师；专注大学生毕业设计教育、辅导。
      <br/>
      所有项目都配有从入门到精通的基础知识视频课程，学习后应对毕业设计答辩，提供核心代码讲解，答辩指导。
      <br/>
      项目配有对应开发文档、开题报告、任务书、PPT等，提供毕业设计论文辅导。
     </p>
     <p>
      项目都录了发布和功能操作演示视频；项目的界面和功能都可以定制，包安装运行！！！
     </p>
     <p>
      如果需要联系我，可以在CSDN网站查询黄菊华老师的，
      <strong>
       在文章末尾可以获取联系方式
      </strong>
     </p>
    </blockquote>
    <h2>
     开发技术
    </h2>
    <p>
     开发操作系统：windows10 + 4G内存 + 500G硬盘
    </p>
    <p>
     开发环境：Python3.8
    </p>
    <p>
     开发语言：Python
    </p>
    <p>
     开发框架：Django
    </p>
    <p>
     开发工具：pycharm
    </p>
    <p>
     数据库：mysql8
    </p>
    <p>
     数据库管理工具：navicat
    </p>
    <p>
     其他开发语言：html + css +javascript
    </p>
    <h2>
     功能清单
    </h2>
    <p>
     <img alt="" height="350" src="https://i-blog.csdnimg.cn/direct/6bd181a6327440c996e8d4cb288ce6c9.png" width="645"/>
    </p>
    <p>
     【后台功能】
     <br/>
     系统设置：设置关于我们、联系我们、加入我们、法律声明
     <br/>
     广告管理：设置小程序首页轮播图广告和链接
     <br/>
     留言列表：所有用户留言信息列表，支持删除
     <br/>
     会员列表：查看所有注册会员信息，支持删除
     <br/>
     资讯分类：录入、修改、查看、删除资讯分类
     <br/>
     录入资讯：录入资讯标题、内容等信息
     <br/>
     管理资讯：查看已录入资讯列表，支持删除和修改
     <br/>
     资讯评论列表：所有用户的评论信息列表
     <br/>
     资讯评论管理：支持对评论信息审核，删除；审核后的信息用户才可见
    </p>
    <p>
     图片分类设置：设置平台图片分类属性
     <br/>
     图片列表：录入平台所有用户上传的图片
     <br/>
     图片管理：对用户上传的所有图片支持修改和删除
     <br/>
     热门图片关键字：设置网站可以查询的热门图片关键字
     <br/>
     图片评论列表：列出用户对网站图片的评论信息
     <br/>
     图片评论管理：支持审核操作、审核通过后其他用户才可以看见
    </p>
    <p>
     【用户功能】
     <br/>
     用户注册：填写手机账号和密码，注册新用户
     <br/>
     登录功能：注册普通账号登录；登录后可以修改用户的基本信息，也可以退出。
     <br/>
     关于我们：关于我们、联系我们、加入我们、法律声明
     <br/>
     轮播广告：后台设置首页轮播广告图，可以连接到广告页面。
     <br/>
     留言反馈：用户填写李哭咽的主题、联系人、电话、邮箱、留言内容；后台管理可以查看留言列表，可以删除留言。
    </p>
    <p>
     图片中心：显示网站用户上传的所有公开图片；可以按图片分类筛选。
     <br/>
     图片详情：显示图片的内容、阅读次数、收藏次数、评论次数等
     <br/>
     图片收藏：在图片详情页面，登录的用户，可以对当前图片进行收藏，收藏后的图片列表在用户中心可以查看，可以进行删除。
     <br/>
     图片评论：在图片详情页面，登录的用户，可以填写评论内容，提交评论信息；提交的评论信息需要后盖管理员审核后可见。
    </p>
    <p>
     用户图片上传：选择分类、录入图片标题、上传图片、选择是否对外可见等
     <br/>
     用户图片列表：用户上传的所有图片
     <br/>
     用户图片管理：支持管理自己的图片，支持修改和删除
    </p>
    <p>
     图片收藏、评论：列出用户收藏过的图片信息列表，支持删除；评论过的图片信息列表和状态。
     <br/>
     资讯收藏、评论：列出用户收藏过的资讯信息列表，支持删除；评论过的资讯信息列表和状态。
    </p>
    <p>
     用户信息：姓名、联系方式、邮箱、头像、简介、介绍等，支持随时修改；用户注册的信息后台管理员可见；后台管理员可以删除。
     <br/>
     密码修改：修改注册的密码。
     <br/>
     退出登录：清除登录的cookie，返回到首页。
     <br/>
    </p>
    <h2>
     作品截图
    </h2>
    <p>
     <img alt="" height="989" src="https://i-blog.csdnimg.cn/direct/3300ff0dcfab4f7aa742a3360f9f835d.png" width="1200">
      <img alt="" height="924" src="https://i-blog.csdnimg.cn/direct/8d264e4470c048b5856bf987379f112c.png" width="1200">
       <img alt="" height="872" src="https://i-blog.csdnimg.cn/direct/075c06adeeba4fc3a4f1ca289a1eed95.png" width="1200">
        <img alt="" height="872" src="https://i-blog.csdnimg.cn/direct/20c4ecc51df94ecea52a782bcdd9ddbd.png" width="1200">
         <img alt="" height="729" src="https://i-blog.csdnimg.cn/direct/f1252a2679784f6cbb796bd5129637e3.png" width="1200">
          <img alt="" height="805" src="https://i-blog.csdnimg.cn/direct/9ee9d081c0b84be0a7c9437964b85212.png" width="1200">
           <img alt="" height="765" src="https://i-blog.csdnimg.cn/direct/7514faa86916435db0d76afe6f279de1.png" width="1200">
            <img alt="" height="737" src="https://i-blog.csdnimg.cn/direct/8a09391d8a6645d5bbbfab0965447c6e.png" width="1200"/>
            <img alt="" height="736" src="https://i-blog.csdnimg.cn/direct/bc12a69997dc417980a98f3d185f34d5.png" width="1200"/>
            <img alt="" height="729" src="https://i-blog.csdnimg.cn/direct/1dc4c274c0e84682bdd1b487b5e95da1.png" width="1200"/>
            <img alt="" height="872" src="https://i-blog.csdnimg.cn/direct/4c35b76df6dd4c10abb7c579740286af.png" width="1200"/>
            <img alt="" height="872" src="https://i-blog.csdnimg.cn/direct/ce1d2d2891c542bf965cc6c82b985a3b.png" width="1200"/>
            <img alt="" height="872" src="https://i-blog.csdnimg.cn/direct/7708ce3721fe454282c8c337d16c8dac.png" width="1200"/>
           </img>
          </img>
         </img>
        </img>
       </img>
      </img>
     </img>
    </p>
    <h2>
    </h2>
    <h2>
    </h2>
   </div>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f:626c6f672e6373646e2e6e65742f753031333831383230352f:61727469636c652f64657461696c732f313434373230303831</p>

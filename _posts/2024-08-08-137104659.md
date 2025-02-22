---
layout: post
title: 三步解决-vmwere-vspere-报其他主机硬件对象的状态-故障
date: 2024-08-08 09:33:54 +0800
categories: [网络]
tags: [网络,服务器,linux]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=137104659
    alt: 三步解决-vmwere-vspere-报其他主机硬件对象的状态-故障
artid: 137104659
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     三步解决 vmwere vspere 报“其他主机硬件对象的状态” 故障
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
     故障状态
    </p>
    <p>
     <img alt="" height="252" src="https://i-blog.csdnimg.cn/blog_migrate/4c9ee6b1e16177ddf9a6010dd43fcda9.png" width="493"/>
    </p>
    <p>
    </p>
    <p>
     第一步.
    </p>
    <p>
     网页登录ESXI主机，打开SSH和ESXI
     <a href="https://so.csdn.net/so/search?q=Shell&amp;spm=1001.2101.3001.7020" title="Shell">
      Shell
     </a>
    </p>
    <p>
     <img alt="" height="315" src="https://i-blog.csdnimg.cn/blog_migrate/6834c74869708a65468ed0189ba104ba.png" width="587"/>
    </p>
    <p>
     第二步 用xshell、CRT 远程连接ESXI 主机并输入命令：
    </p>
    <p>
     1. localcli hardware ipmi sel get 命令可以查看当前主机系统事件状态
    </p>
    <p>
     2.localcli hardware ipmi sel clear 命令
    </p>
    <p>
     <img alt="" height="260" src="https://i-blog.csdnimg.cn/blog_migrate/c30d6bd51a69a21b759198e065d37d0c.png" width="414"/>
    </p>
    <p>
     第三步 返回EXSI网页关闭SSH和ESXI
     <a href="https://so.csdn.net/so/search?q=Shell&amp;spm=1001.2101.3001.7020" title="Shell">
      Shell
     </a>
    </p>
    <p>
     <img alt="" height="198" src="https://i-blog.csdnimg.cn/blog_migrate/3eceae8d755343abdeaa4d6f1fe9d82f.png" width="505"/>
    </p>
    <p>
     问题解决。
    </p>
    <p>
     登到 vshere -----监控-----硬件运行状态刷新一下，告警消失。
    </p>
   </div>
  </div>
 </article>
</div>



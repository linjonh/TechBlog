---
layout: post
title: 2022-03-13-Docker容器部署前端Vue服务手把手教学
date: 2022-03-13 14:12:25 +0800
categories: []
tags: [前端,vue.js,docker]
image:
  path: https://img-blog.csdnimg.cn/67ae7fbedd284d619d17aa01497cbe24.png?x-oss-process=image/resize,m_fixed,h_150
  alt: Docker容器部署前端Vue服务手把手教学
artid: 123458100
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Docker容器部署前端Vue服务——手把手教学
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
     需要工具：
    </p>
    <ul>
     <li>
      Xftp
     </li>
     <li>
      Xshell
     </li>
    </ul>
    <p>
     <strong>
      首先对前端项目进行打包：npm run build
     </strong>
    </p>
    <p>
    </p>
    <div>
    </div>
    <p>
     打包完成
    </p>
    <p>
     <img alt="" height="438" src="https://i-blog.csdnimg.cn/blog_migrate/57de3e2ee2488fc820665f6a680dc288.png" width="1200">
      ​
     </img>
    </p>
    <p>
     在项目中生成dist文件：
    </p>
    <p>
     <img alt="" height="136" src="https://i-blog.csdnimg.cn/blog_migrate/a981f46fc2e7ed2069234ccd4645d4b2.png" width="678"/>
    </p>
    <p>
    </p>
    <p>
     通过Xshell在/home目录下创建项目文件夹
    </p>
    <pre><code>mkdir xxxx（文件名）</code></pre>
    <p>
     通过Xftp将打包的dist文件上传到服务器的项目文件夹下；
    </p>
    <p>
     <img alt="" height="520" src="https://i-blog.csdnimg.cn/blog_migrate/80f8b841f883c18a3031a8628ae5dca8.png" width="1200"/>
    </p>
    <p>
    </p>
    <p>
     利用Xshell在拉取nginx镜像
    </p>
    <pre><code>docker pull nginx</code></pre>
    <p>
     <strong>
      在项目文件夹下编写nginx config配置文件
     </strong>
    </p>
    <pre><code>vim default.conf</code></pre>
    <p>
     default.conf内容如下：
    </p>
    <pre><code>server {
    listen       80;
    server_name  localhost; # 修改为docker服务宿主机的ip

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html =404;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}</code></pre>
    <p>
     该配置文件定义了首页的指向为
     <code>
      /usr/share/nginx/html/index.html
     </code>
     , 所以我们可以一会把构建出来的index.html文件和相关的静态资源放到
     <code>
      /usr/share/nginx/html
     </code>
     目录下。
    </p>
    <p>
     <strong>
      在项目文件夹下编写Dockerfile文件
     </strong>
    </p>
    <pre><code>vim Dockerfile</code></pre>
    <p>
     Dockerfile内容如下：
    </p>
    <pre><code>FROM nginx

MAINTAINER zouzou

RUN rm /etc/nginx/conf.d/default.conf

ADD default.conf /etc/nginx/conf.d/

COPY dist/ /usr/share/nginx/html/</code></pre>
    <p>
     Dockerfile内容解释
    </p>
    <pre><code>FROM nginx：该镜像是基于nginx:latest镜像构建的

MAINTAINER zouzou：添加说明

RUN rm /etc/nginx/conf.d/default.conf：删除目录下的default.conf文件

ADD default.conf /etc/nginx/conf.d/：将default.conf复制到/etc/nginx/conf.d/下，用本地的default.conf配置来替换nginx镜像里的默认配置

COPY dist/ /usr/share/nginx/html/：将项目根目录下dist文件夹（构建之后才会生成）下的所有文件复制到镜像/usr/share/nginx/html/目录下</code></pre>
    <p>
     如下三个文件保持在同一目录
     <img alt="" height="38" src="https://i-blog.csdnimg.cn/blog_migrate/23fffe77a61d777eea39879d52e37524.png" width="679">
     </img>
    </p>
    <p>
     <strong>
      构建docker镜像
     </strong>
     ：
    </p>
    <pre><code>docker build -t xxxx .</code></pre>
    <p>
     注意不要少了最后的“.”(点)   -t是给镜像命名，.(点)是基于当前目录的Dockerfile来构建镜像
    </p>
    <p>
     <img alt="" height="326" src="https://i-blog.csdnimg.cn/blog_migrate/31d9b80c5284044e583763a7e9326d70.png" width="535"/>
    </p>
    <p>
    </p>
    <p>
     查看刚刚构建的镜像
    </p>
    <pre><code>docker images | grep xxxx</code></pre>
    <p>
     <strong>
      启动docker容器
     </strong>
    </p>
    <pre><code>docker run -d -p 9090:80 --name test xxxx</code></pre>
    <p>
     解释：
    </p>
    <pre><code>docker run：基于镜像启动一个容器

-d：后台方式启动

-p 9090:80: 端口映射，将宿主机的9090端口映射到容器的80端口

--name：容器名，我起的叫test

xxxx：要启动的镜像名称</code></pre>
    <p>
     <strong>
      查看启动的容器
     </strong>
    </p>
    <pre><code>docker ps</code></pre>
    <h4 id="blogTitle2">
     访问
    </h4>
    <p>
     现在我们已经启动了，访问宿主机的地址:9090就可以看到我们部署的网站了
    </p>
   </div>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f7869616f6c6f6e673132342f:61727469636c652f64657461696c732f313233343538313030</p>

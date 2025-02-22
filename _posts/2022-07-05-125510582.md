---
layout: post
title: 2022-07-05-云原生--Dockermysqltomcatnginxredis-环境部署
date: 2022-07-05 08:33:45 +0800
categories: [云原生/云计算-入门到实战]
tags: [云原生,docker,tomcat,redis,mysql]
image:
  path: https://img-blog.csdnimg.cn/44018d59b6c24be598cbfb40691a553c.png?x-oss-process=image/resize,m_fixed,h_150
  alt: 云原生--Dockermysqltomcatnginxredis-环境部署
artid: 125510582
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【云原生 • Docker】mysql、tomcat、nginx、redis 环境部署
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/53e8317227cc2e0b08d63c17621e44d0.webp?x-image-process=image/format,png"/>
    </p>
    <p style="text-align:justify;">
     注意在应用部署之前，docker 服务必须是开启状态
     <span style="color:#be191c;">
      <span style="background-color:#fef2f0;">
       systemctl start docker
      </span>
     </span>
     。
    </p>
    <p id="main-toc">
     <strong>
      目录
     </strong>
    </p>
    <p id="%E4%B8%80%E3%80%81MySQL%20%E9%83%A8%E7%BD%B2-toc" style="margin-left:40px;">
     <a href="#%E4%B8%80%E3%80%81MySQL%20%E9%83%A8%E7%BD%B2" rel="nofollow">
      一、MySQL 部署
     </a>
    </p>
    <p id="%E4%BA%8C%E3%80%81Tomcat%20%E9%83%A8%E7%BD%B2-toc" style="margin-left:40px;">
     <a href="#%E4%BA%8C%E3%80%81Tomcat%20%E9%83%A8%E7%BD%B2" rel="nofollow">
      二、Tomcat 部署
     </a>
    </p>
    <p id="%E4%B8%89%E3%80%81Nginx%20%E9%83%A8%E7%BD%B2-toc" style="margin-left:40px;">
     <a href="#%E4%B8%89%E3%80%81Nginx%20%E9%83%A8%E7%BD%B2" rel="nofollow">
      三、Nginx 部署
     </a>
    </p>
    <p id="%E5%9B%9B%E3%80%81Redis%20%E9%83%A8%E7%BD%B2-toc" style="margin-left:40px;">
     <a href="#%E5%9B%9B%E3%80%81Redis%20%E9%83%A8%E7%BD%B2" rel="nofollow">
      四、Redis 部署
     </a>
    </p>
    <hr id="hr-toc"/>
    <h3>
     一、MySQL 部署
    </h3>
    <p style="text-align:justify;">
     <strong>
      1. 拉取 MySQL 镜像，此处选择的是 MySQL 5.7 版本；
     </strong>
    </p>
    <pre><code class="language-bash">docker pull centos/mysql-57-centos7</code></pre>
    <p class="img-center">
     <img alt="" height="295" src="https://i-blog.csdnimg.cn/blog_migrate/d8babcf36c76a784311bd5b928f46143.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     <strong>
      2. 创建容器，容器名称为 mysql；
     </strong>
    </p>
    <pre><code class="language-bash">docker run -di --name=tensquare_mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql</code></pre>
    <ul>
     <li style="text-align:justify;">
      -p 表示端口映射关系，格式为 宿主机映射端口
      <strong>
       :
      </strong>
      容器运行端口；
     </li>
     <li style="text-align:justify;">
      -e 表示添加环境变量，此处设置 root 用户登录密码为 123456。
     </li>
    </ul>
    <p>
     如下即为创建成功：
    </p>
    <p class="img-center">
     <img alt="" height="394" src="https://i-blog.csdnimg.cn/blog_migrate/dfcebe56c386040f33625246fca420a0.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     <strong>
      3. 远程登录 MySQL
     </strong>
    </p>
    <p style="text-align:justify;">
     容器创建完成之后，就可以在本地进行 MySQL 连接了；如下图在本地的 Navicat 中新建一个连接：
    </p>
    <p class="img-center">
     <img alt="" height="439" src="https://i-blog.csdnimg.cn/blog_migrate/58edbf284ef022919dacd2a6094d49aa.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     要知道我们并不是直接去连接容器中的 MySQL，而是通过宿主机进行连接。此时所连接的正是我们刚刚所创建的容器中的 MySQL；
    </p>
    <p class="img-center">
     <img alt="" height="260" src="https://i-blog.csdnimg.cn/blog_migrate/67060a40002679b7ffb81b3d11fcaa01.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     Docker 下 MySQL 部署完成！
    </p>
    <h3 id="%E4%BA%8C%E3%80%81Tomcat%20%E9%83%A8%E7%BD%B2" style="text-align:justify;">
     二、Tomcat 部署
    </h3>
    <p style="text-align:justify;">
     <strong>
      1. 拉取 tomcat 镜像；
     </strong>
    </p>
    <pre><code class="language-bash">docker pull tomcat:7-jre7</code></pre>
    <p class="img-center">
     <img alt="" height="291" src="https://i-blog.csdnimg.cn/blog_migrate/0a1fea98cf2b27c882711a918e6586a2.png" width="650"/>
    </p>
    <p>
     <strong>
      2. 创建容器；
     </strong>
    </p>
    <pre><code class="language-bash">docker run -di --name=mytomcat -p 9000:8080 -v /usr/local/webapps:/usr/local/tomcat/webapps tomcat:7-jre7</code></pre>
    <ul>
     <li style="text-align:justify;">
      -v  目录映射关系，前者为宿主机目录，后者是映射到宿主机上的目录，如果没有该目录会自动创建
     </li>
     <li style="text-align:justify;">
      -p  端口映射关系，前者为宿主机端口，后者是容器内的映射端口
     </li>
    </ul>
    <p class="img-center">
     <img alt="" height="83" src="https://i-blog.csdnimg.cn/blog_migrate/0ec1fdf8c8150f01b57ab2d54ccc9f6f.png" width="650"/>
    </p>
    <p>
     <strong>
      3. 部署应用
     </strong>
    </p>
    <p style="text-align:justify;">
     容器创建成功之后，我们这时直接在本地访问是没有效果的，报错 404；
    </p>
    <p class="img-center">
     <img alt="" height="325" src="https://i-blog.csdnimg.cn/blog_migrate/3fa9eb43c38506f2187d2eb73abedd3a.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     这是因为我们使用到了目录挂载，本地的目录
     <span style="color:#be191c;">
      <span style="background-color:#fef2f0;">
       /usr/local/webapps
      </span>
     </span>
     是新创建的，没有任何应用，所以访问时无显示。这时候我们可以为它部署一个应用，也就是往此目录中放入一个应用，我在这里用了一个简单的测试 war 包
     <span style="color:#be191c;">
      <span style="background-color:#fef2f0;">
       cluster_test.war
      </span>
     </span>
     <span style="color:#fe2c24;">
      <em>
       （文末附下载地址）
      </em>
     </span>
     ；
    </p>
    <p class="img-center">
     <img alt="" height="272" src="https://i-blog.csdnimg.cn/blog_migrate/de924d8227c0898ed53a679ddb7baec6.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     上传后如下，目录中出现 war 包和自动解压后的文件；
    </p>
    <p class="img-center">
     <img alt="" height="76" src="https://i-blog.csdnimg.cn/blog_migrate/35da8cf38ec35b1a607b2b943dce4ff7.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     成功部署后就可以在本地进行访问了，如下访问成功，不再报错；
    </p>
    <p class="img-center">
     <img alt="" height="326" src="https://i-blog.csdnimg.cn/blog_migrate/cf9a113ef7ffd86b4399486b5f14dcef.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     Docker 下 tomcat 部署完成！
    </p>
    <blockquote>
     <p style="text-align:justify;">
      需要注意在 tomcat 部署过程当中，如部署后无法正常访问，报错 404，这说明 tomcat 服务是没问题的。那么无法正常访问可能有三个原因：
     </p>
     <ol>
      <li style="text-align:justify;">
       <span style="color:#fe2c24;">
        防火墙未开放该端口；
       </span>
      </li>
      <li style="text-align:justify;">
       <span style="color:#fe2c24;">
        访问路径写的有问题；
       </span>
      </li>
      <li style="text-align:justify;">
       <span style="color:#fe2c24;">
        war 包本身有问题；
       </span>
      </li>
     </ol>
    </blockquote>
    <h3 id="%E4%B8%89%E3%80%81Nginx%20%E9%83%A8%E7%BD%B2">
     三、Nginx 部署
    </h3>
    <p>
     <strong>
      1. 拉取 nginx 镜像
     </strong>
    </p>
    <pre><code class="language-bash">docker pull nginx</code></pre>
    <p class="img-center">
     <img alt="" height="235" src="https://i-blog.csdnimg.cn/blog_migrate/871dd5b9a63dc42e99570db8ac37c67f.png" width="650"/>
    </p>
    <p>
     <strong>
      2. 创建容器
     </strong>
    </p>
    <pre><code class="language-bash">docker run -di --name=mynginx -p 80:80 nginx</code></pre>
    <p class="img-center">
     <img alt="" height="55" src="https://i-blog.csdnimg.cn/blog_migrate/12c9f6325c47a7f8aa3f66583627e0e7.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     创建成功我们在本地浏览器访问宿主机 IP，可以看到 nginx 欢迎界面；
    </p>
    <p class="img-center">
     <img alt="" height="325" src="https://i-blog.csdnimg.cn/blog_migrate/97697f1d123ae38f57ca5f10eb87127a.png" width="650"/>
    </p>
    <p>
     <strong>
      3. 部署应用
     </strong>
    </p>
    <p style="text-align:justify;">
     我们这里将一个静态页面部署到 nginx 中，如下我在本地创建了一个 html 文件夹 和 index.html 文件；
    </p>
    <p class="img-center">
     <img alt="" height="444" src="https://i-blog.csdnimg.cn/blog_migrate/7b34d60ab7e7bdc6dd54292bece90d40.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     将它上传至我们的宿主机；
    </p>
    <p class="img-center">
     <img alt="" height="409" src="https://i-blog.csdnimg.cn/blog_migrate/14ee15b6996d57c624fdd1cfe0363574.png" width="650"/>
    </p>
    <p>
     进入 nginx 容器；
    </p>
    <pre><code class="language-bash">docker exec -it mynginx /bin/bash</code></pre>
    <p style="text-align:justify;">
     找到配置文件
     <span style="color:#be191c;">
      <span style="background-color:#fef2f0;">
       default.conf
      </span>
     </span>
     ，可以看到 nginx 的页面文件是保存于
     <span style="color:#be191c;">
      <span style="background-color:#fef2f0;">
       /usr/share/nginx/html/
      </span>
     </span>
     中的；
    </p>
    <p class="img-center">
     <img alt="" height="210" src="https://i-blog.csdnimg.cn/blog_migrate/66b9a4c4c106464177b43d382aee619d.png" width="650"/>
    </p>
    <p class="img-center">
     <img alt="" height="80" src="https://i-blog.csdnimg.cn/blog_migrate/b1423ff1447203560715ab8c722b97fb.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     所以我们将需要部署的页面文件移动到此目录；
    </p>
    <pre><code class="language-bash">docker cp html mynginx:/usr/share/nginx/</code></pre>
    <p style="text-align:justify;">
     此时再次在本地访问宿主机 IP，页面显示已由 nginx 欢迎页面变成了我们部署的页面；
    </p>
    <p class="img-center">
     <img alt="" height="327" src="https://i-blog.csdnimg.cn/blog_migrate/6d581d6539c14c350f3f79ee0fe69729.png" width="650"/>
    </p>
    <p>
     Docker 下 nginx 部署完成！
    </p>
    <h3 id="%E5%9B%9B%E3%80%81Redis%20%E9%83%A8%E7%BD%B2">
     四、Redis 部署
    </h3>
    <p>
     <strong>
      1. 拉取镜像
     </strong>
    </p>
    <pre><code class="language-bash">docker pull redis</code></pre>
    <p class="img-center">
     <img alt="" height="234" src="https://i-blog.csdnimg.cn/blog_migrate/1e071774939c82d110e1c5f8e88d8806.png" width="650"/>
    </p>
    <p>
     <strong>
      2. 创建容器
     </strong>
    </p>
    <pre><code class="language-bash">docker run -di --name=myredis -p 6379:6379 redis</code></pre>
    <p class="img-center">
     <img alt="" height="54" src="https://i-blog.csdnimg.cn/blog_migrate/91066463673e10deb8f57442d378ed31.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     <strong>
      3. 测试
     </strong>
    </p>
    <p style="text-align:justify;">
     使用本地的 redis
     <span style="color:#fe2c24;">
      <em>
       （文末附下载地址）
      </em>
     </span>
     进行测试，如下图；
    </p>
    <p class="img-center">
     <img alt="" height="431" src="https://i-blog.csdnimg.cn/blog_migrate/9c5729044687dc424f92ad5d301b7c68.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     在 redis 目录下打开终端，
     <span style="color:#be191c;">
      <span style="background-color:#fef2f0;">
       redis-cli -h 宿主机IP
      </span>
     </span>
     连接宿主机；
    </p>
    <p class="img-center">
     <img alt="" height="444" src="https://i-blog.csdnimg.cn/blog_migrate/7a7ceb24519a6a1d62f684e4418e271e.png" width="650"/>
    </p>
    <p style="text-align:justify;">
     连接成功，占用 6379 端口且可正常运行；
    </p>
    <p class="img-center">
     <img alt="" height="170" src="https://i-blog.csdnimg.cn/blog_migrate/7bfcd973d2e1bd3561e5c9d3a774a5d1.png" width="650"/>
    </p>
    <p>
     Docker 下 redis 部署完成！
    </p>
    <hr/>
    <p>
     <em>
      本文所需软件与素材包下载地址：
     </em>
    </p>
    <blockquote>
     <p>
      链接：
      <a class="link-info" href="https://pan.baidu.com/s/1gTsG6pTSf00ZjSINqdILuQ?pwd=0214%C2%A0" rel="nofollow" title="Tomcat 测试 war 包 cluster_test.war">
       Tomcat 测试 war 包 cluster_test.war
      </a>
      <br/>
      提取码：0214
     </p>
    </blockquote>
    <blockquote>
     <p>
      链接：
      <a class="link-info" href="https://github.com/MicrosoftArchive/redis/releases" title="redis 官方下载地址">
       redis 官方下载地址
      </a>
     </p>
    </blockquote>
   </div>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f35333037323531392f:61727469636c652f64657461696c732f313235353130353832</p>

---
layout: post
title: 记录一次IDEA开发JavaWeb项目时JS中文乱码排错方法
date: 2024-12-25 00:59:47 +0800
categories: [IDEA]
tags: [乱码,VM,JS乱码]
image:
    path: https://img-blog.csdnimg.cn/20181121085517248.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l1MTAyNjU1,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150
    alt: 记录一次IDEA开发JavaWeb项目时JS中文乱码排错方法
artid: 84312893
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     记录一次IDEA开发JavaWeb项目时JS中文乱码排错方法
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
     大家经常遇到乱码问题，我一般习惯性的把编码问题归结为两种：
    </p>
    <ol>
     <li>
      编码层面的乱码：指的是那些需要修改项目内的代码或配置来解决的乱码问题，比如有的时候从数据库获取的数据是乱码、发送ajax请求时，获取到的数据乱码等，这种都需要进行新增或修改适当代码或配置来解决；
     </li>
     <li>
      非编码层面的乱码：指的是那些修改项目外在的一些东西，比如服务器编码没有设置、开发环境中没有设置编码、开发工具编码问题等原因造就的乱码；
     </li>
    </ol>
    <p>
     只要是出现了乱码，从上面两个角度采用排除法，一般乱码问题都会得到解决；首先判断是否是非编码层面的乱码，如果不是在进行编码层面乱码的解决，此处暂不涉及编码层面的乱码。非编码层面的乱码解决思路大同小异，在这里抛砖引玉，给大家的思路！
    </p>
    <p>
     <strong>
      异常现象：
     </strong>
     昨天在导入一份商城代码时，遇到了一个问题：页面内容能正常显示，但是凡是通过JS实现动态显示、渲染的内容都呈现乱码，如下所示，可以发现在下面大部分内容可以正常显示，但是有些地方呈现乱码：
    </p>
    <p>
    </p>
    <p style="text-align:center;">
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/fef25f664c0d269421a969388ffe8afd.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/b547e8941dac88e6eb93d212519cc820.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/670fc3b5860597dc73762b03d60b015e.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/71cf1ade00cb1eee6d1caba8bb65601b.png"/>
    </p>
    <p>
     <strong>
      分析问题：
     </strong>
     既然会出现这些问题，肯定有共同点，通过查看对应页面的文件发现以上所有乱码处的内容只存在于JS中，且是JS中的静态内容，其余通过JS渲染的动态内容没有乱码问题，所以应该属于JS乱码问题；
    </p>
    <p>
     <strong>
      解决过程：
     </strong>
     在网上也找过很多关于JS乱码方面的文章，发现都不好使，原因在于每个解决方案肯定是基于当事人所遇到的乱码问题做出的解决方式，可能不适合于你，后来琢磨到乱码问题肯定是开发过程中某处编码没有统一的问题，那么采用最笨的方式，就是把开发工具的编码、服务器编码、项目编码都统一，问题不就可以解决了，实验证明确实如此，好了，开始设置：
    </p>
    <p>
     一、统一服务器编码，由于这里用的是Tomcat服务器，所以以tomcat为例进行设置，在服务器中有两处需要设置：
    </p>
    <ol>
     <li>
      找到tomcat的bin目录下的catalina.bat并编辑，新增-Dfile.encoding=utf-8
     </li>
     <li>
      找到tomcat的conf目录下的server.xml并编辑，修改你项目用到的端口所对应的Connector，比如我这边用到的是8080端口，那么修改后内容如下：
     </li>
    </ol>
    <pre class="has"><code class="language-html">&lt;Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" URIEncoding="utf-8" /&gt;</code></pre>
    <p>
     二、设置开发工具编码，找到IDEA的安装文件夹的bin目录，如下所示：
    </p>
    <p style="text-align:center;">
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/dfdfd6c0a55762848ba550b3995f61da.png"/>
    </p>
    <p>
     我这里修改的是idea64.exe.vmoptions文件，通过编辑器编辑该文件，在文件内容单独起最后一行，输入
    </p>
    <pre class="has"><code>-Dfile.encoding=utf-8</code></pre>
    <p>
     三、设置全局和项目编码，如下图所示，图中标有数字的地方都需要设置：
    </p>
    <p style="text-align:center;">
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/b6f86bc7050aba32351211e57d54b080.png"/>
    </p>
    <p>
     四、设置TOMCAT启动项目时用到的VM option，如下图所示：
    </p>
    <p>
     <img alt="" class="has" height="194" src="https://i-blog.csdnimg.cn/blog_migrate/b08fdf422d50b0cce4d06b5db9cc9241.png" width="573"/>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
     <img alt="" class="has" height="360" src="https://i-blog.csdnimg.cn/blog_migrate/5584153fbf3f6c68fb6782106d0e6a0c.png" width="652"/>
    </p>
    <p>
     五、MAVEN项目编码设置，找到pom.xml文件中的properties元素，添加如下内容：
    </p>
    <pre class="has"><code class="language-html">&lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;</code></pre>
    <p>
     经过以上五处的设置相信可以解决大部分乱码问题，好了，就这么多！！
    </p>
   </div>
  </div>
 </article>
</div>



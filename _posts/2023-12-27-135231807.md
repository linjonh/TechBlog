---
layout: post
title: 2023-12-27-多个-JDK-版本Java-8Java-17Java-21下载和切换
date: 2023-12-27 09:35:21 +0800
categories: [小技巧]
tags: [jdk,java8,java17,java21,intellijidea,后端]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=135231807
  alt: 多个-JDK-版本Java-8Java-17Java-21下载和切换
artid: 135231807
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     多个 JDK 版本（Java 8、Java 17、Java 21）下载和切换
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-atom-one-light" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
    </p>
    <div class="toc">
     <h4>
      文章目录
     </h4>
     <ul>
      <li>
       <a href="#_JDK_Java_8Java_17Java_21_1" rel="nofollow">
        多个 JDK 版本（Java 8、Java 17、Java 21）下载和切换
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1__JDK_10" rel="nofollow">
          1. 下载 JDK
         </a>
        </li>
        <li>
         <a href="#2__24" rel="nofollow">
          2. 配置环境变量
         </a>
        </li>
        <li>
         <a href="#3_JDK__49" rel="nofollow">
          3. JDK 版本切换
         </a>
        </li>
        <li>
         <a href="#4__66" rel="nofollow">
          4. 测试
         </a>
        </li>
        <li>
         <a href="#5__IDEA__JDK_73" rel="nofollow">
          5. 在 IDEA 中切换 JDK
         </a>
        </li>
        <li>
         <a href="#_95" rel="nofollow">
          注意：
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h2>
     <a id="_JDK_Java_8Java_17Java_21_1">
     </a>
     多个 JDK 版本（Java 8、Java 17、Java 21）下载和切换
    </h2>
    <p>
     随着
     <strong>
      Spring Boot
     </strong>
     的版本不断迭代更新，新发布的 Spring Boot 版本已经不再支持 JDK 8，
     <strong>
      对 JDK 版本的最低要求为 17
     </strong>
     。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/ac3911398831f2a16bedd3eb88abd1a5.png#pic_center"/>
    </p>
    <p>
     所以，为了在实际中可以任意选择所需的 JDK 版本，将
     <strong>
      多个 JDK 版本切换的方法
     </strong>
     总结如下：
    </p>
    <h3>
     <a id="1__JDK_10">
     </a>
     1. 下载 JDK
    </h3>
    <p>
     JDK 不同版本可以在 Oracle 官网下载，
     <strong>
      下载地址
     </strong>
     ：
     <a href="https://www.oracle.com/cn/java/technologies/downloads/" rel="nofollow">
      点此进入
     </a>
    </p>
    <p>
     选择所需的 JDK 版本下载，
     <strong>
      常用
     </strong>
     的有：Java 8、Java 11、Java 17、Java 21。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/2c4dd887ec25d2f9092dd2994b7749d9.png#pic_center"/>
    </p>
    <p>
     点击下载好的安装程序
     <code>
      jdk-21_windows-x64_bin.exe
     </code>
     ，将 JDK
     <strong>
      安装
     </strong>
     到本地指定的文件夹中
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/cdc04b3f8bf9d64f61c4e776cca75146.png#pic_center"/>
    </p>
    <h3>
     <a id="2__24">
     </a>
     2. 配置环境变量
    </h3>
    <p>
     <strong>
      打开环境变量
     </strong>
     ：【此电脑右键】—【系统】—【高级系统设置】—【环境变量】
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/7f90e48fb16c8520fc3c95cb449ffb64.png#pic_center"/>
    </p>
    <p>
     防止等会切换 JDK 失败，
     <strong>
      删除
     </strong>
     下载 JDK 时自动在 Path 中添加的变量
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/a67e7c9cd3d67065aa74da6f82796a08.png#pic_center"/>
    </p>
    <p>
     在 Path 中
     <strong>
      添加两个变量
     </strong>
     ：
     <code>
      %JAVA_HOME%\bin
     </code>
     以及
     <code>
      %JAVA_HOME%\jre\bin
     </code>
     ，这里的 % 相当于
     <strong>
      引用
     </strong>
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/5d0521d51a3f2122c319ac68814f1f84.png#pic_center"/>
    </p>
    <p>
     点击【新建】，
     <strong>
      添加
     </strong>
     JAVA_HOME21 变量
    </p>
    <ul>
     <li>
      <strong>
       变量名
      </strong>
      为：
      <code>
       JAVA_HOME21
      </code>
      ，
      <strong>
       如果有多个 JDK，变量名要有区别
      </strong>
      ，如图所示
     </li>
     <li>
      <strong>
       变量值
      </strong>
      为：上一个步骤中
      <strong>
       JDK 的安装路径
      </strong>
      ，我这里是：
      <code>
       K:\environment\jdk21
      </code>
     </li>
    </ul>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/d85bfc38656a604504506031ea06d445.png#pic_center"/>
    </p>
    <h3>
     <a id="3_JDK__49">
     </a>
     3. JDK 版本切换
    </h3>
    <p>
     点击【新建】，
     <strong>
      添加
     </strong>
     CLASSPATH 变量
    </p>
    <ul>
     <li>
      <strong>
       变量名
      </strong>
      为：
      <code>
       CLASSPATH
      </code>
     </li>
     <li>
      <strong>
       变量值
      </strong>
      为：
      <code>
       .;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar
      </code>
     </li>
    </ul>
    <p>
     点击【新建】，
     <strong>
      添加
     </strong>
     JAVA_HOME 变量
    </p>
    <ul>
     <li>
      <strong>
       变量名
      </strong>
      为：
      <code>
       JAVA_HOME
      </code>
     </li>
     <li>
      <strong>
       变量值
      </strong>
      为：
      <code>
       %JAVA_HOME21%
      </code>
      ，
      <strong>
       特别注意
      </strong>
      ：
      <code>
       %
      </code>
      中引用的是
      <strong>
       所要使用的 JDK 版本
      </strong>
      ，要与上一步中 JDK 的变量名
      <strong>
       对应
      </strong>
     </li>
    </ul>
    <blockquote>
     <p>
      <strong>
       JDK 版本切换方法
      </strong>
      ：可以更改
      <code>
       %
      </code>
      中的 JDK 变量名，从而达到切换不同 JDK 的目的。
     </p>
    </blockquote>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/43e677f531fe533b8e26226869eee7e5.png#pic_center"/>
    </p>
    <h3>
     <a id="4__66">
     </a>
     4. 测试
    </h3>
    <p>
     快捷键
     <code>
      Win + R
     </code>
     打开【运行】，输入
     <code>
      cmd
     </code>
     打开【命令提示符】，输入
     <code>
      java -version
     </code>
     （注意中间有空格），
     <strong>
      查看 JDK 版本
     </strong>
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/10adafd4703f124abbaf856d75608b5d.png#pic_center"/>
    </p>
    <h3>
     <a id="5__IDEA__JDK_73">
     </a>
     5. 在 IDEA 中切换 JDK
    </h3>
    <p>
     在 IDEA 中打开
     <strong>
      项目结构
     </strong>
     ：【File】—【Project Structure…】
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/d60346f582e55a5199a94808df63c4b2.png#pic_center"/>
    </p>
    <p>
     可以分别切换
     <strong>
      项目
     </strong>
     和
     <strong>
      模块
     </strong>
     的 JDK 版本
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/070318faa87da7e497858961d84465ae.png#pic_center"/>
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/06f2ab74168c32d4ba2d0fb802deef07.png#pic_center"/>
    </p>
    <p>
     切换成功后，运行一个简单的程序，可以看到
     <strong>
      对应版本的 JDK
     </strong>
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/c556238dff864dcbcda8184e1f60064c.png#pic_center"/>
    </p>
    <hr/>
    <h3>
     <a id="_95">
     </a>
     注意：
    </h3>
    <p>
     <strong>
      JDK 下载地址
     </strong>
     ：https://www.oracle.com/cn/java/technologies/downloads/
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f74616979616e67333238352f:61727469636c652f64657461696c732f313335323331383037</p>

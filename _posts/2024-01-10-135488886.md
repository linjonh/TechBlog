---
layout: post
title: Java安装可多版本共存及IIntelliJ-IDEA环境搭建汉化保姆级教程
date: 2024-01-10 18:15:57 +0800
categories: [软件安装教程,JAVA]
tags: [java,intellij-idea,ide]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=135488886
    alt: Java安装可多版本共存及IIntelliJ-IDEA环境搭建汉化保姆级教程
artid: 135488886
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Java安装（可多版本共存）及IIntelliJ IDEA环境搭建汉化（保姆级教程！）
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
      编程如画，我是panda！
     </p>
     <p>
      这次给大家出一期JAVA安装以及IIntelliJ IDEA的安装教程
     </p>
     <p>
      IIntelliJ IDEA分为社区版和专业版，两版的教程都有，小伙伴们根据需要自行选择使用
     </p>
     <p>
      并且我会讲解一台计算机中多个版本JAVA JDK配置安装
     </p>
    </blockquote>
    <p>
    </p>
    <h2>
     <a id="_7">
     </a>
     前言
    </h2>
    <p>
     我最早接触JAVA的时候并没有很认真的弄懂它到底是怎么安装配置的，只是根据老师的步骤一步一步下载好，然后就开始用了。当时安装的时候也出现了很多问题，但是现在看来，当时碰到的也不是啥大问题......只是因为当时并不知道安装的每个步骤到底要干啥，为了让各位不再碰到各种小问题，panda专门出一期教程详细讲解安装步骤！建议点赞收藏加关注~
    </p>
    <p>
     <span style="background-color:#ffd900;">
      本套教程所需用到的JDK以及软件安装包均已打包，有需要的自取：
     </span>
    </p>
    <p>
     链接：
     <a class="link-info" href="https://pan.baidu.com/s/1-vL32iCEu-cNmr_rRsR5Tg%C2%A0" rel="nofollow" title="https://pan.baidu.com/s/1-vL32iCEu-cNmr_rRsR5Tg ">
      https://pan.baidu.com/s/1-vL32iCEu-cNmr_rRsR5Tg
     </a>
     <br/>
     提取码：40x9
    </p>
    <p>
    </p>
    <hr/>
    <h2>
     <a id="pandas_16">
     </a>
     一、单版本JAVA安装
    </h2>
    <h3>
     1.JAVA JDK是什么
    </h3>
    <p>
     Java Development Kit（JDK）是Java程序员的工具包，就像是一把工具箱，里面有编写、编译和运行Java程序所需的所有工具。它包括一个编译器，负责将我们写的Java代码翻译成计算机能够理解的语言；有一个运行时环境，保证我们的Java程序能在计算机上正确运行；还有一堆类库，就像是预先写好的代码积木，我们可以直接拿来用。总体来说，JDK就是帮助我们用Java编写程序的一套必备工具。
    </p>
    <p>
     我相信很多小伙伴听说过JAVA SE，JAVA EE，JAVA ME，但是不知道它们之间有啥关系，到底学哪个啊~别急，panda来给你解释一下：Java平台包括三个主要版本：Java SE（Java Standard Edition）、Java EE（Java Platform, Enterprise Edition）和Java ME（Java Platform, Micro Edition）。Java SE是通用的Java编程基础，适用于桌面、服务器和嵌入式系统。Java EE在Java SE基础上专注于企业级应用开发，提供了一系列企业级技术和规范。Java ME则是为资源受限的嵌入式和移动设备设计，适用于手机和智能卡等设备。这三个版本构成了Java平台，使得开发者能够在不同的应用领域和设备上进行Java应用程序的开发。
    </p>
    <h3>
     2.JAVA JDK下载
    </h3>
    <p>
     首先进入JAVA JDK的下载官网：
     <a href="https://www.oracle.com/cn/java/technologies/downloads/" rel="nofollow" title="Java Downloads | Oracle 中国">
      Java Downloads | Oracle 中国
     </a>
    </p>
    <p>
     往下滑找到JAVA8：
    </p>
    <blockquote>
     <p>
      这里解释一下为什么要使用JAVA8，因为目前企业的JAVA项目大多是JAVA8写的，并且作为入门学习JAVA8也够了，如果不想用JAVA8可以选择其他版本，或者你想下载多个JAVA的话，下面我会教你如何配置多个JAVA JDK共存。
     </p>
    </blockquote>
    <p>
     选择你电脑对应的操作系统和位数然后下载：
    </p>
    <p>
     <img alt="" height="1052" src="https://i-blog.csdnimg.cn/blog_migrate/20788752af9a38b0587b3f4643e33d8e.png" width="1200"/>
    </p>
    <p>
     <img alt="" height="396" src="https://i-blog.csdnimg.cn/blog_migrate/38a12129244800d2820a987cab5ee17d.png" width="1200"/>
    </p>
    <p>
     这里会让你注册一个账号才能下载，如果不想注册账号的话， 可以使用我放在文章开头的链接，我会把用到的JDK和软件安装包打包分享给各位。
    </p>
    <h3>
     3.JAVA JDK安装
    </h3>
    <p>
     运行已经下载好的文件：
    </p>
    <p>
     <img alt="" height="69" src="https://i-blog.csdnimg.cn/blog_migrate/4da035b3d52ba301d54f857a4201a122.png" width="1013"/>
    </p>
    <p>
     点击下一步：
    </p>
    <p>
     <img alt="" height="531" src="https://i-blog.csdnimg.cn/blog_migrate/fea9642c206a5abb01ffd7eea0b1ee88.png" width="1050"/>
    </p>
    <p>
     选择好你的安装目录，然后点击下一步：
    </p>
    <p>
     <img alt="" height="593" src="https://i-blog.csdnimg.cn/blog_migrate/47bfbae25b24e890a88b77344e42e3e1.png" width="783"/>
    </p>
    <p>
     <img alt="" height="531" src="https://i-blog.csdnimg.cn/blog_migrate/6e140060141ed695c37e862020ae9913.png" width="1050"/>
    </p>
    <p>
     等待安装完成：
    </p>
    <p>
     <img alt="" height="531" src="https://i-blog.csdnimg.cn/blog_migrate/6433a2add33ff3f1fbc8cbae338f1c23.png" width="1050"/>
    </p>
    <p>
     点击关闭：
    </p>
    <p>
     <img alt="" height="593" src="https://i-blog.csdnimg.cn/blog_migrate/f17a014f40c442e77d6b3674b874a6ec.png" width="783"/>
    </p>
    <h3>
     4.添加环境变量
    </h3>
    <h4>
     4.1. 配置JAVA_HOME
    </h4>
    <p>
     直接搜索环境变量然后打开:
    </p>
    <p>
     <img alt="" height="494" src="https://i-blog.csdnimg.cn/blog_migrate/fc33612b0df7b7ff590772ac12129138.png" width="1190"/>
    </p>
    <p>
     或者找到“此电脑”，右键找到“属性”-&gt;“高级系统设置”-&gt;“环境变量”
    </p>
    <p>
     打开后会发现有两个，注意，配置JAVA是用下面这个：
    </p>
    <p>
     <img alt="" height="932" src="https://i-blog.csdnimg.cn/blog_migrate/a17ad57f91076ca361c2e56012e9b49e.png" width="972"/>
    </p>
    <p>
     然后点击新建，变量名取名为JAVA_HOME8，变量值为你的JDK下载路径，然后点击确定
    </p>
    <blockquote>
     <p>
      注：有些教程可能让你设置为JAVA_HOME，也是对的，我是为了后续可以多版本JAVA共存以及切换做准备，即使你现在需要单一版本，但是这么设置也方便你以后多版本设置
     </p>
    </blockquote>
    <p>
     <img alt="" height="532" src="https://i-blog.csdnimg.cn/blog_migrate/a6a38581a7581f9692e8811efcab9ab1.png" width="1093"/>
    </p>
    <p>
     然后再新建一个名为JAVA_HOME的系统变量，变量值设置为%JAVA_HOME8%
    </p>
    <p>
     <img alt="" height="260" src="https://i-blog.csdnimg.cn/blog_migrate/f5262a24f7503eff8d6899bf2e689ffe.png" width="1027"/>
    </p>
    <h4>
     4.2. 配置CLASSPATH
    </h4>
    <p>
     在系统变量中新建一个变量名为CLASSPATH，变量值设置为：
    </p>
    <pre><code class="language-javascript">.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;</code></pre>
    <p>
     <img alt="" height="260" src="https://i-blog.csdnimg.cn/blog_migrate/48ee5164ae13d1d2e3060feaff1e3448.png" width="1027"/>
    </p>
    <h4>
     4.3. 配置path
    </h4>
    <p>
     在系统变量中找到Path：
    </p>
    <p>
     <img alt="" height="30" src="https://i-blog.csdnimg.cn/blog_migrate/dba09fb45b637d011ccad493fbd6da3a.png" width="873"/>
    </p>
    <p>
     双击Path或者选中后点击编辑，右侧点击新建，输入%JAVA_HOME%\bin然后再新建一个，输入%JAVA_HOME%\jre\bin
    </p>
    <p>
     <img alt="" height="76" src="https://i-blog.csdnimg.cn/blog_migrate/8b4f24a8ca6a69a92ca80056895ced07.png" width="568"/>
    </p>
    <p>
     然后连续点击三个确定：
    </p>
    <p>
     <img alt="" height="347" src="https://i-blog.csdnimg.cn/blog_migrate/1001d951f1e1ba6d4467ece89e75f64c.png" width="1200"/>
    </p>
    <h4>
     4.4. 检查Java
    </h4>
    <p>
     按住Win+r然后输入cmd，打开命令行，输入java -version：
     <br/>
     <img alt="" height="152" src="https://i-blog.csdnimg.cn/blog_migrate/7b0134f1f6c6f35a31271ffc2399272b.png" width="1029"/>
    </p>
    <p>
     出现如上就说明你的JAVA安装成功了，还可输入java或javac检查：
    </p>
    <p>
     <img alt="" height="812" src="https://i-blog.csdnimg.cn/blog_migrate/2d973d2c2179e1e62da3f0e819e0b8b9.png" width="1200"/>
    </p>
    <p>
     <img alt="" height="807" src="https://i-blog.csdnimg.cn/blog_migrate/e72aa7e5a59fa6f54bbed3ca1c7eb857.png" width="1152"/>
    </p>
    <h2>
     <a id="_19">
     </a>
     二、多版本JAVA共存
    </h2>
    <h3>
     <a id="1_20">
     </a>
     1.下载多版本JAVA JDK
    </h3>
    <p>
     进入JAVA JDK下载官网：
     <a href="https://www.oracle.com/cn/java/technologies/downloads/" rel="nofollow" title="Java Downloads | Oracle 中国">
      Java Downloads | Oracle 中国
     </a>
    </p>
    <p>
     因为前面已经下载了JAVA8，这里我选择下载JAVA11和JAVA17，如果有压缩包的话，选择压缩包格式的方便一点。
    </p>
    <p>
     <img alt="" height="946" src="https://i-blog.csdnimg.cn/blog_migrate/c51b5d80bbb2771b970fbd8230c84180.png" width="1200"/>
    </p>
    <p>
     <img alt="" height="812" src="https://i-blog.csdnimg.cn/blog_migrate/bc04c0f06157fb7b3e48accff1f06161.png" width="1200"/>
     分别解压到不同的文件夹中，一定要知道在哪个文件夹，不然后续不好配置，而且路径不要带中文。
    </p>
    <p>
     <img alt="" height="146" src="https://i-blog.csdnimg.cn/blog_migrate/e23fa0a6a4a44ce6ee14958f0b185802.png" width="979"/>
    </p>
    <h3>
     <a id="2_34">
     </a>
     2.添加环境变量
    </h3>
    <h4>
     2.1. 添加JAVA11环境变量
    </h4>
    <p>
     打开环境变量，找到系统变量，点击新建：
    </p>
    <p>
     变量名设置为JAVA_HOME11，变量值为你的JDK11安装路径
    </p>
    <p>
     <img alt="" height="260" src="https://i-blog.csdnimg.cn/blog_migrate/b8fe5d0a6d3cf05e58ab6083cd80e5e0.png" width="1027"/>
    </p>
    <h4>
     2.2. 添加JAVA17环境变量
    </h4>
    <p>
     打开环境变量，找到系统变量，点击新建：
    </p>
    <p>
     变量名设置为JAVA_HOME17，变量值为你的JDK17安装路径
    </p>
    <p>
     <img alt="" height="260" src="https://i-blog.csdnimg.cn/blog_migrate/4217024c04dc40379f41fd583c496e64.png" width="1027"/>
    </p>
    <h4>
     2.3. 修改Path中的优先级
    </h4>
    <p>
     打开Path，将%JAVA_HOME%\bin的优先级放在第一位，右侧有上移。
    </p>
    <p>
     <img alt="" height="797" src="https://i-blog.csdnimg.cn/blog_migrate/04c720588c9a5e82b5f56d0102dbf066.png" width="829"/>
    </p>
    <p>
     然后连续点击三个确定：
    </p>
    <p>
     <img alt="" height="274" src="https://i-blog.csdnimg.cn/blog_migrate/2819a2a514daf43165461ceb058d36f6.png" width="1200"/>
    </p>
    <h4>
     2.4. 多版本JAVA切换
    </h4>
    <p>
     当你需要切换到另一个版本的JAVA时，只需打开环境变量，然后将系统变量中的JAVA_HOME变量的值改为对应的版本，比如我现在想切换到JAVA17：
     <br/>
     <img alt="" height="260" src="https://i-blog.csdnimg.cn/blog_migrate/0546f4764bc18af7206920b8f532d912.png" width="1027"/>
    </p>
    <p>
     然后打开命令行，输入java -version：
    </p>
    <p>
     <img alt="" height="181" src="https://i-blog.csdnimg.cn/blog_migrate/1966b73df474b0fcabad3de536a87d47.png" width="1200"/>
    </p>
    <p>
     可以看到我的JAVA变成了17版本，
     <span style="color:#fe2c24;">
      <span style="background-color:#ffd900;">
       每次更改完版本以后需要重新开一个cmd输入Java-version才能看到结果。
      </span>
     </span>
    </p>
    <h2>
     三、 IIntelliJ IDEA Community版安装
    </h2>
    <h3>
     1.IIntelliJ IDEA Community下载
    </h3>
    <p>
     进入IIntelliJ IDEA官网：
     <a href="https://www.jetbrains.com/zh-cn/idea/" rel="nofollow" title="IntelliJ IDEA – 领先的 Java 和 Kotlin IDE (jetbrains.com)">
      IntelliJ IDEA – 领先的 Java 和 Kotlin IDE (jetbrains.com)
     </a>
    </p>
    <p>
     点击下载：
    </p>
    <p>
     <img alt="" height="1200" src="https://i-blog.csdnimg.cn/blog_migrate/2ab906ea3bb62f82df24bc194e188b13.png" width="1200"/>
    </p>
    <p>
     往下滑找到Community版下载：
    </p>
    <p>
     <img alt="" height="409" src="https://i-blog.csdnimg.cn/blog_migrate/6d45a3ffb1b9382a1b2768a1c0e91dd1.png" width="989"/>
    </p>
    <h3>
     2. IIntelliJ IDEA Community安装
    </h3>
    <p>
     打开下载好的安装包：
     <br/>
     <img alt="" height="50" src="https://i-blog.csdnimg.cn/blog_migrate/dfd45744e9ba42c5515e8d51649610e9.png" width="1035"/>
    </p>
    <p>
     点击下一步
    </p>
    <p>
     <img alt="" height="449" src="https://i-blog.csdnimg.cn/blog_migrate/2a5492b9a3361ecd54cec7330b517d36.png" width="664"/>
    </p>
    <p>
     选择好安装路径以后选择下一步：
    </p>
    <p>
     <img alt="" height="449" src="https://i-blog.csdnimg.cn/blog_migrate/2ba7de139d0f9acb046084e1be52b85c.png" width="664"/>
    </p>
    <p>
     这里根据需要勾选，建议全部勾选：
    </p>
    <ul>
     <li>
      创建桌面快捷方式：在你的桌面上创建图标，只要你能找到你的IDEA，不勾这个也行；
     </li>
     <li>
      更新PATH变量：把IDEA添加到你的环境变量中去，便于你的电脑找到IDEA
     </li>
     <li>
      更新上下文菜单：当你打开一个文件夹之后，右键有个选项是可以用IDEA打开
     </li>
     <li>
      创建关联：后缀名为下列的文件，默认用IDEA打开
     </li>
    </ul>
    <p>
     <img alt="" height="449" src="https://i-blog.csdnimg.cn/blog_migrate/adb9275761025357390d10e5219404f4.png" width="664"/>
    </p>
    <p>
     这里默认，点击“安装”：
    </p>
    <p>
     <img alt="" height="449" src="https://i-blog.csdnimg.cn/blog_migrate/af170c091edc7ccaafee948cc7a071f2.png" width="664"/>
    </p>
    <p>
     等待安装成功：
    </p>
    <p>
     <img alt="" height="449" src="https://i-blog.csdnimg.cn/blog_migrate/2171dd9364299382dd2e52e660e9c6db.png" width="664"/>
    </p>
    <p>
     安装完成后选择完成：
    </p>
    <p>
     <img alt="" height="449" src="https://i-blog.csdnimg.cn/blog_migrate/a20b24d0f58711414f5b2a95db10672e.png" width="664"/>
    </p>
    <h3>
     3.创建IDEA项目并测试
    </h3>
    <p>
     这里选择“Do not import settings”：
    </p>
    <p>
     <img alt="" height="212" src="https://i-blog.csdnimg.cn/blog_migrate/a4cd406bbcf84c73e086a7cecf99831c.png" width="466"/>
    </p>
    <p>
     点击new project：
    </p>
    <p>
     <img alt="" height="804" src="https://i-blog.csdnimg.cn/blog_migrate/51979163f161289adac6028ffada64b1.png" width="984"/>
    </p>
    <p>
     设置项目名字，项目的存储路径，JDK选择之前已经配置好的，然后点击“Create”：
    </p>
    <p>
     <img alt="" height="874" src="https://i-blog.csdnimg.cn/blog_migrate/8b82a07c5267ed14215e9a71fd3705a0.png" width="984"/>
    </p>
    <p>
     右键src目录，新建JAVA类，名为demo1
    </p>
    <p>
     <img alt="" height="73" src="https://i-blog.csdnimg.cn/blog_migrate/485e3c21bb0ff9b35b13ba74910ffb41.png" width="550"/>
    </p>
    <p>
     将里面的代码换成：
    </p>
    <pre><code class="language-java">public class demo1 {
    public static void main(String[] args) {
        System.out.println("Hello panda!");
        System.out.println("你好，panda！");
    }
}</code></pre>
    <p>
     得到运行结果：
    </p>
    <p>
     <img alt="" height="123" src="https://i-blog.csdnimg.cn/blog_migrate/8b29dae05dbdd80658d0689dd7f92c13.png" width="394"/>
    </p>
    <h2>
     四、IntelliJ IDEA Ultimate版安装
    </h2>
    <h3>
     1.IntelliJ IDEA Ultimate下载
    </h3>
    <p>
     进入IIntelliJ IDEA官网：
     <a href="https://www.jetbrains.com/zh-cn/idea/" rel="nofollow" title="IntelliJ IDEA – 领先的 Java 和 Kotlin IDE (jetbrains.com)">
      IntelliJ IDEA – 领先的 Java 和 Kotlin IDE (jetbrains.com)
     </a>
    </p>
    <p>
     点击下载：
    </p>
    <p>
     <img alt="" height="1200" src="https://i-blog.csdnimg.cn/blog_migrate/2ab906ea3bb62f82df24bc194e188b13.png" width="1200"/>
    </p>
    <p>
     往下滑找到Ultimate版下载：
    </p>
    <p>
     <img alt="" height="412" src="https://i-blog.csdnimg.cn/blog_migrate/c102158c7f002efb2af685331618ac1f.png" width="1120"/>
    </p>
    <h3>
     2.IntelliJ IDEA Ultimate安装
    </h3>
    <p>
     打开下载好的安装包：
     <img alt="" height="49" src="https://i-blog.csdnimg.cn/blog_migrate/64ee920b4b527d1df23e939acbbe1640.png" width="1045"/>
    </p>
    <p>
     点击下一步
    </p>
    <p>
     <img alt="" height="539" src="https://i-blog.csdnimg.cn/blog_migrate/b270cd506c6f759e89618e9a4f2b4fb7.png" width="749"/>
    </p>
    <p>
     选择好安装路径以后选择下一步：
    </p>
    <p>
     <img alt="" height="539" src="https://i-blog.csdnimg.cn/blog_migrate/a70463647abda58c9c97fb9fcf18c905.png" width="749"/>
    </p>
    <p>
     这里根据需要勾选，建议全部勾选：
    </p>
    <ul>
     <li>
      创建桌面快捷方式：在你的桌面上创建图标，只要你能找到你的IDEA，不勾这个也行；
     </li>
     <li>
      更新PATH变量：把IDEA添加到你的环境变量中去，便于你的电脑找到IDEA
     </li>
     <li>
      更新上下文菜单：当你打开一个文件夹之后，右键有个选项是可以用IDEA打开
     </li>
     <li>
      创建关联：后缀名为下列的文件，默认用IDEA打开
     </li>
    </ul>
    <p>
     <img alt="" height="539" src="https://i-blog.csdnimg.cn/blog_migrate/d227ac7b5eb211721953a44db87bee8c.png" width="749"/>
    </p>
    <p>
     这里默认，点击“安装”：
    </p>
    <p>
     <img alt="" height="539" src="https://i-blog.csdnimg.cn/blog_migrate/9a79a8a1b03df3c7c3712067572936ab.png" width="749"/>
    </p>
    <p>
     等待安装成功：
    </p>
    <p>
     <img alt="" height="539" src="https://i-blog.csdnimg.cn/blog_migrate/04bbccff390b0ef87e574f0d18e4eacc.png" width="749"/>
    </p>
    <p>
    </p>
    <p>
     安装完成后选择完成：
    </p>
    <p>
     <img alt="" height="539" src="https://i-blog.csdnimg.cn/blog_migrate/8a2cc571277c46d5885b643d2888cfbc.png" width="749"/>
    </p>
    <h3>
     3.创建IDEA项目并测试
    </h3>
    <p>
     这里选择“Do not import settings”：
    </p>
    <p>
     <img alt="" height="255" src="https://i-blog.csdnimg.cn/blog_migrate/a832b0b9c7e62b465025bc82d1fa9e36.png" width="636"/>
    </p>
    <p>
     这里会提示你激活：
    </p>
    <p>
     <img alt="" height="709" src="https://i-blog.csdnimg.cn/blog_migrate/bd2b686814e2f7d241bc4b429b103a84.png" width="1178"/>
    </p>
    <p>
     一般学校或企业买这个软件，可以去问一下自己学校的图书馆或者老师，如果没有的话，我建议如果是学习的话，使用Community版本的就足够了，没有必要再花钱买这个。
    </p>
    <p>
     激活后，点击new project：
    </p>
    <p>
     <img alt="" height="964" src="https://i-blog.csdnimg.cn/blog_migrate/af9e44534c72a4c03ca42405a667141f.png" width="1178"/>
    </p>
    <p>
    </p>
    <p>
     设置项目名字，项目的存储路径，JDK选择之前已经配置好的，然后点击“Create”：
    </p>
    <p>
     <img alt="" height="1048" src="https://i-blog.csdnimg.cn/blog_migrate/e39a5b1ea6aaf049eec7c5587c2b5ed3.png" width="1178"/>
    </p>
    <p>
     右键src目录，新建JAVA类，名为demo1
    </p>
    <p>
     <img alt="" height="132" src="https://i-blog.csdnimg.cn/blog_migrate/a0f7995490a4da660932dbdb3c4d8430.png" width="930"/>
    </p>
    <p>
     <img alt="" height="297" src="https://i-blog.csdnimg.cn/blog_migrate/df75dca775c467ab5695261dd0a58d29.png" width="495"/>
    </p>
    <p>
    </p>
    <p>
     将里面的代码换成：
    </p>
    <pre><code class="language-java">public class demo1 {
    public static void main(String[] args) {
        System.out.println("Hello panda!");
        System.out.println("你好，panda！");
    }
}</code></pre>
    <p>
     右键，选择运行：
    </p>
    <p>
     <img alt="" height="828" src="https://i-blog.csdnimg.cn/blog_migrate/bda3f75c984d498e4a454603e2912379.png" width="490"/>
    </p>
    <p>
     或者点击：
    </p>
    <p>
     <img alt="" height="85" src="https://i-blog.csdnimg.cn/blog_migrate/a2f48c7d7aee3d387ca78e5fbe4005df.png" width="392"/>
    </p>
    <p>
     得到运行结果：
    </p>
    <p>
     <img alt="" height="109" src="https://i-blog.csdnimg.cn/blog_migrate/6c838046bfb6eba81d0399cdf9605901.png" width="260"/>
    </p>
    <h2>
     五、 IntelliJ IDEA汉化
    </h2>
    <p>
     左上角找到设置：
    </p>
    <p>
     <img alt="" height="81" src="https://i-blog.csdnimg.cn/blog_migrate/90409b1c4c735f7261ce5caba7816293.png" width="498"/>
    </p>
    <p>
     <img alt="" height="309" src="https://i-blog.csdnimg.cn/blog_migrate/c4941e4ced4f04f3646b74812893a3e4.png" width="710"/>
    </p>
    <p>
     找到“Plugins”，输入Chinese，点击install：
    </p>
    <p>
     <img alt="" height="1093" src="https://i-blog.csdnimg.cn/blog_migrate/11fa263325f2d32276cac7e0c2111024.png" width="1200"/>
     重启IDEA：
    </p>
    <p>
     <img alt="" height="356" src="https://i-blog.csdnimg.cn/blog_migrate/a5c04c5342bd895af08beda7c945f900.png" width="799"/>
    </p>
    <p>
     然后你就得到了中文版的啦~
    </p>
    <p>
     <img alt="" height="504" src="https://i-blog.csdnimg.cn/blog_migrate/f345d1c613fc2bea771846a9180edab2.png" width="1200"/>
    </p>
    <hr/>
    <h2>
     <a id="_45">
     </a>
     总结
    </h2>
    <p>
     总体来说，并不难，主要是多版本JAVA JDK的环境变量设置有些繁琐，只要根据我的步骤一步一步来，就OK啦~
    </p>
    <p>
     预告：
    </p>
    <p>
     后续我还会更新Eclipse的安装教程以及如何在上面配置JAVA项目，有需要的可以关注一下~
    </p>
   </div>
  </div>
 </article>
</div>



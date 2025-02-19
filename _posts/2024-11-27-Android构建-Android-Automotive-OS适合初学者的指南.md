---
title: 2024-11-27-Android构建-Android-Automotive-OS适合初学者的指南
date: 2024-11-27 09:20:59 +0800
categories: []
tags: [android]
image:
  path: /assets/images/21dfac3b42ddea345510d0c1d35bb54b.png
  alt: Android构建-Android-Automotive-OS适合初学者的指南
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【Android】构建 Android Automotive OS：适合初学者的指南
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
    </p>
    <div style="text-align:center;">
     <img alt="dd3f5d43598c2a98a8352180c00a09de.png" src="/assets/images/b492706e3636f524d0ddccb965c0ee07.png">
      <p>
       <strong>
        人不走空
       </strong>
      </p>
     </img>
    </div>
    <p>
    </p>
    <p>
    </p>
    <h3 style="text-align:center;">
     🌈
     <strong>
      个人主页：
      <strong>
       <a href="https://blog.csdn.net/double222222?type=blog" title="人不走空">
        人不走空
       </a>
      </strong>
     </strong>
     <strong>
     </strong>
    </h3>
    <h3 style="text-align:center;">
     <strong>
      💖系列专栏：
      <strong>
       <a href="https://blog.csdn.net/double222222/category_12487653.html?spm=1001.2014.3001.5482" title="算法专题">
        算法专题
       </a>
      </strong>
     </strong>
    </h3>
    <h3 style="text-align:center;">
     <strong>
      ⏰诗词歌赋：
     </strong>
     斯是陋室，惟吾德馨
    </h3>
    <p>
    </p>
    <p>
     <img alt="da14e5cf865a427ea959fca470d8245a.gif" src="/assets/images/7b4062f0513814f68ce5b7f811548715.gif"/>
    </p>
    <p>
     <strong>
      目录
     </strong>
    </p>
    <p style="margin-left:40px;">
     <a href="#%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%F0%9F%8C%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5%EF%BC%9A%E4%BA%BA%E4%B8%8D%E8%B5%B0%E7%A9%BA%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0" rel="nofollow">
      🌈个人主页：人不走空
     </a>
    </p>
    <p style="margin-left:40px;">
     <a href="#%F0%9F%92%96%E7%B3%BB%E5%88%97%E4%B8%93%E6%A0%8F%EF%BC%9A%E7%AE%97%E6%B3%95%E4%B8%93%E9%A2%98" rel="nofollow">
      💖系列专栏：算法专题
     </a>
    </p>
    <p style="margin-left:40px;">
     <a href="#%E2%8F%B0%E8%AF%97%E8%AF%8D%E6%AD%8C%E8%B5%8B%EF%BC%9A%E6%96%AF%E6%98%AF%E9%99%8B%E5%AE%A4%EF%BC%8C%E6%83%9F%E5%90%BE%E5%BE%B7%E9%A6%A8" rel="nofollow">
      ⏰诗词歌赋：斯是陋室，惟吾德馨
     </a>
    </p>
    <p style="margin-left:40px;">
     <a href="#%E4%BB%8B%E7%BB%8D" rel="nofollow">
      介绍
     </a>
    </p>
    <p style="margin-left:40px;">
     <a href="#%E5%85%88%E5%86%B3%E6%9D%A1%E4%BB%B6" rel="nofollow">
      先决条件
     </a>
    </p>
    <p style="margin-left:40px;">
     <a href="#%E6%89%80%E9%9C%80%E5%B7%A5%E5%85%B7%E5%92%8C%E8%BD%AF%E4%BB%B6" rel="nofollow">
      所需工具和软件
     </a>
    </p>
    <p style="margin-left:40px;">
     <a href="#%E5%88%86%E6%AD%A5%E6%8C%87%E5%8D%97" rel="nofollow">
      分步指南
     </a>
    </p>
    <p style="margin-left:80px;">
     <a href="#1.%20%E8%AE%BE%E7%BD%AE%E7%8E%AF%E5%A2%83" rel="nofollow">
      1. 设置环境
     </a>
    </p>
    <p style="margin-left:120px;">
     <a href="#%E5%AE%89%E8%A3%85%20Java%20%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E5%8C%85%20%EF%BC%88JDK%EF%BC%89" rel="nofollow">
      安装 Java 开发工具包 （JDK）
     </a>
    </p>
    <p style="margin-left:120px;">
     <a href="#%E5%AE%89%E8%A3%85%E6%89%80%E9%9C%80%E7%9A%84%E8%BD%AF%E4%BB%B6%E5%8C%85" rel="nofollow">
      安装所需的软件包
     </a>
    </p>
    <p style="margin-left:120px;">
     <a href="#%E5%AE%89%E8%A3%85%20Git" rel="nofollow">
      安装 Git
     </a>
    </p>
    <p style="margin-left:120px;">
     <a href="#%E5%AE%89%E8%A3%85%E5%AD%98%E5%82%A8%E5%BA%93%E5%B7%A5%E5%85%B7" rel="nofollow">
      安装存储库工具
     </a>
    </p>
    <p style="margin-left:80px;">
     <a href="#2.%20%E4%B8%8B%E8%BD%BDAndroid%E6%BA%90%E7%A0%81" rel="nofollow">
      2. 下载Android源码
     </a>
    </p>
    <p style="margin-left:80px;">
     <a href="#3.%20%E9%85%8D%E7%BD%AE%E6%9E%84%E5%BB%BA" rel="nofollow">
      3. 配置构建
     </a>
    </p>
    <p style="margin-left:80px;">
     <a href="#4.%20%E6%9E%84%E5%BB%BA%20Android%20Automotive%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F" rel="nofollow">
      4. 构建 Android Automotive 操作系统
     </a>
    </p>
    <p style="margin-left:80px;">
     <a href="#5.%20%E5%B0%86%E5%86%85%E9%83%A8%E7%89%88%E6%9C%AC%E5%88%B7%E5%86%99%E5%88%B0%E8%AE%BE%E5%A4%87%E6%88%96%E4%BB%BF%E7%9C%9F%E5%99%A8" rel="nofollow">
      5. 将内部版本刷写到设备或仿真器
     </a>
    </p>
    <p style="margin-left:120px;">
     <a href="#%E5%88%B7%E6%96%B0%E5%88%B0%E8%AE%BE%E5%A4%87" rel="nofollow">
      刷新到设备
     </a>
    </p>
    <p style="margin-left:120px;">
     <a href="#%E5%9C%A8%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%8A%E8%BF%90%E8%A1%8C" rel="nofollow">
      在模拟器上运行
     </a>
    </p>
    <p style="margin-left:40px;">
     <a href="#%E7%BB%93%E8%AE%BA" rel="nofollow">
      结论
     </a>
    </p>
    <p style="margin-left:40px;">
     <a href="#%E8%B5%84%E6%BA%90" rel="nofollow">
      资源
     </a>
    </p>
    <p style="margin-left:0px;">
     <a href="#%E4%BD%9C%E8%80%85%E5%85%B6%E4%BB%96%E4%BD%9C%E5%93%81%EF%BC%9A" rel="nofollow">
      作者其他作品：
     </a>
    </p>
    <hr/>
    <p style="text-align:center;">
     <img alt="e6f1ddc7e1ef49bda413a56ccd405744.png" src="/assets/images/21dfac3b42ddea345510d0c1d35bb54b.png">
     </img>
    </p>
    <h3>
     介绍
    </h3>
    <p style="margin-left:0;">
     Android Automotive OS 是专为车载使用量身定制的 Android 版本。它通过将各种汽车功能与 Android 应用程序集成，为驾驶员和乘客提供无缝体验。本指南将引导您完成从头开始构建 Android Automotive OS 的过程，涵盖所需的所有必要工具、设置和步骤。
    </p>
    <h3 style="margin-left:0;">
     先决条件
    </h3>
    <p style="margin-left:0;">
     在开始之前，请确保您具备以下条件：
    </p>
    <ol style="margin-left:0;">
     <li>
      <strong>
       装有 Linux 或 macOS 的计算机
      </strong>
      ：构建 Android Automotive OS 与基于 Linux 的系统或 macOS 最兼容。
     </li>
     <li>
      <strong>
       足够的系统资源
      </strong>
      ：至少 16GB RAM 和 400GB 可用磁盘空间。
     </li>
     <li>
      <strong>
       Internet 连接
      </strong>
      ：下载必要的工具和依赖项。
     </li>
    </ol>
    <h3 style="margin-left:0;">
     所需工具和软件
    </h3>
    <ol style="margin-left:0;">
     <li>
      <strong>
       Java 开发工具包 （JDK）：
      </strong>
      Java 8 或更高版本。
     </li>
     <li>
      <strong>
       存储库工具
      </strong>
      ：用于管理 Android 源代码。
     </li>
     <li>
      <strong>
       Git
      </strong>
      ：版本控制系统。
     </li>
     <li>
      <strong>
       AOSP（Android 开源项目）源代码
      </strong>
      ：Android 的基本源代码。
     </li>
     <li>
      <strong>
       Android Studio
      </strong>
      ：最新稳定版本。
     </li>
    </ol>
    <h3 style="margin-left:0;">
     分步指南
    </h3>
    <h4 style="margin-left:0;">
     1. 设置环境
    </h4>
    <p>
     安装 Java 开发工具包 （JDK）
    </p>
    <p style="margin-left:0;">
     首先，安装 JDK。打开终端并运行：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;&lt;span style="color:var(--syntax-text-color)"&gt;sudo &lt;/span&gt;apt update
&lt;span style="color:var(--syntax-text-color)"&gt;sudo &lt;/span&gt;apt &lt;span style="color:var(--syntax-text-color)"&gt;install &lt;/span&gt;openjdk-8-jdk
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <p>
     安装所需的软件包
    </p>
    <p style="margin-left:0;">
     对于 Ubuntu 18.04 或更高版本，请安装必要的软件包：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;&lt;span style="color:var(--syntax-text-color)"&gt;sudo &lt;/span&gt;apt-get update
&lt;span style="color:var(--syntax-text-color)"&gt;sudo &lt;/span&gt;apt-get &lt;span style="color:var(--syntax-text-color)"&gt;install &lt;/span&gt;git-core gnupg flex bison build-essential zip curl zlib1g-dev libc6-dev-i386 x11proto-core-dev libx11-dev lib32z1-dev libgl1-mesa-dev libxml2-utils xsltproc unzip fontconfig
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <p>
     安装 Git
    </p>
    <p style="margin-left:0;">
     通过运行以下命令确保安装 Git：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;&lt;span style="color:var(--syntax-text-color)"&gt;sudo &lt;/span&gt;apt &lt;span style="color:var(--syntax-text-color)"&gt;install &lt;/span&gt;git
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <p>
     安装存储库工具
    </p>
    <p style="margin-left:0;">
     下载 Repo 工具并使其可执行：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;&lt;span style="color:var(--syntax-text-color)"&gt;mkdir&lt;/span&gt; ~/bin
curl https://storage.googleapis.com/git-repo-downloads/repo &lt;span style="color:var(--syntax-error-color)"&gt;&gt;&lt;/span&gt; ~/bin/repo
&lt;span style="color:var(--syntax-text-color)"&gt;chmod &lt;/span&gt;a+x ~/bin/repo
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <p style="margin-left:0;">
     将 Repo 添加到 PATH：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;&lt;span style="color:var(--syntax-text-color)"&gt;export &lt;/span&gt;&lt;span style="color:var(--syntax-text-color)"&gt;PATH&lt;/span&gt;&lt;span style="color:var(--syntax-error-color)"&gt;=&lt;/span&gt;~/bin:&lt;span style="color:var(--syntax-text-color)"&gt;$PATH&lt;/span&gt;
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <h4 style="margin-left:0;">
     2. 下载Android源码
    </h4>
    <p style="margin-left:0;">
     为您的 Android 版本创建目录：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;&lt;span style="color:var(--syntax-text-color)"&gt;mkdir&lt;/span&gt; ~/android-automotive
&lt;span style="color:var(--syntax-text-color)"&gt;cd&lt;/span&gt; ~/android-automotive
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <p style="margin-left:0;">
     使用 Android 源代码初始化 Repo：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;repo init &lt;span style="color:var(--syntax-error-color)"&gt;-u&lt;/span&gt; https://android.googlesource.com/platform/manifest &lt;span style="color:var(--syntax-error-color)"&gt;-b&lt;/span&gt; android-13.0.0_r83
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <p style="margin-left:0;">
     <strong>
      注意
     </strong>
     ：您可以使用任何最新的分支或标签，具体取决于您正在构建的项目，例如或
     <code>
      android-13.0.0_r83
     </code>
     <code>
      master
     </code>
    </p>
    <p style="margin-left:0;">
     同步 Repo 下载源代码：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;repo &lt;span style="color:var(--syntax-text-color)"&gt;sync&lt;/span&gt;
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <h4 style="margin-left:0;">
     3. 配置构建
    </h4>
    <p style="margin-left:0;">
     设置生成环境：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;&lt;span style="color:var(--syntax-text-color)"&gt;source &lt;/span&gt;build/envsetup.sh
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <p style="margin-left:0;">
     选择目标：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;lunch
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <p style="margin-left:0;">
     选择适当的目标，例如 .
     <code>
      aosp_car_x86_64-userdebug
     </code>
    </p>
    <h4 style="margin-left:0;">
     4. 构建 Android Automotive 操作系统
    </h4>
    <p style="margin-left:0;">
     开始构建过程：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;make &lt;span style="color:var(--syntax-error-color)"&gt;-j&lt;/span&gt;&lt;span style="color:var(--syntax-string-color)"&gt;$(&lt;/span&gt;&lt;span style="color:var(--syntax-text-color)"&gt;nproc&lt;/span&gt;&lt;span style="color:var(--syntax-string-color)"&gt;)&lt;/span&gt;
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <p style="margin-left:0;">
     此过程可能需要几个小时，具体取决于系统的性能。
    </p>
    <h4 style="margin-left:0;">
     5. 将内部版本刷写到设备或仿真器
    </h4>
    <p style="margin-left:0;">
     构建完成后，您可以将其刷写到兼容 Android Automotive 的设备或在模拟器上运行它。
    </p>
    <p style="margin-left:0;">
     以下命令将直接启动模拟器
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;emulator
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <p>
     刷新到设备
    </p>
    <p style="margin-left:0;">
     连接您的设备并运行：
    </p>
    <div style="margin-left:0;">
     <pre class="has" style="margin-left:0;"><code class="language-highlight">&lt;span style="color:var(--syntax-text-color)"&gt;&lt;span style="color:var(--syntax-text-color)"&gt;&lt;code&gt;adb reboot bootloader
fastboot flashall &lt;span style="color:var(--syntax-error-color)"&gt;-w&lt;/span&gt;
&lt;/code&gt;&lt;/span&gt;&lt;/span&gt;</code></pre>
     <div>
      <div>
      </div>
     </div>
    </div>
    <p>
     在模拟器上运行
    </p>
    <p style="margin-left:0;">
     要为汽车创建 AVD（Android 虚拟设备）：
    </p>
    <ol style="margin-left:0;">
     <li>
      打开 Android Studio。
     </li>
     <li>
      转到 AVD 管理器。
     </li>
     <li>
      使用汽车系统映像创建新的 AVD。
     </li>
     <li>
      启动模拟器。
     </li>
    </ol>
    <h3 style="margin-left:0;">
     结论
    </h3>
    <p style="margin-left:0;">
     从头开始构建 Android Automotive 操作系统涉及多个步骤，从设置环境到将操作系统刷写到设备或模拟器上。通过遵循本指南，您可以开始为汽车平台进行开发并探索其功能。
    </p>
    <p style="margin-left:0;">
     有关详细信息，请参阅
     <a href="https://developer.android.com/training/automotive" rel="nofollow" title="官方 Android Automotive OS 文档">
      官方 Android Automotive OS 文档
     </a>
     。
    </p>
    <h3 style="margin-left:0;">
     资源
    </h3>
    <ul style="margin-left:0;">
     <li>
      <a href="https://source.android.com/" rel="nofollow" title="Android 开源项目">
       Android 开源项目
      </a>
     </li>
     <li>
      <a href="https://developer.android.com/docs" rel="nofollow" title="Android 开发者文档">
       Android 开发者文档
      </a>
     </li>
     <li>
      <a href="https://developer.android.com/training/automotive" rel="nofollow" title="Android 汽车操作系统">
       Android 汽车操作系统
      </a>
     </li>
    </ul>
    <p>
     请随时在下面发表评论或问题，我很乐意帮助您完成整个过程！
    </p>
    <p>
    </p>
    <hr/>
    <h2>
     作者其他作品：
    </h2>
    <p>
     <a href="https://cyberspace.blog.csdn.net/article/details/136338757?spm=1001.2014.3001.5502" rel="nofollow" title="【Java】Spring循环依赖：原因与解决方法">
      【Java】Spring循环依赖：原因与解决方法
     </a>
    </p>
    <p>
     <a href="https://cyberspace.blog.csdn.net/article/details/136336417?spm=1001.2014.3001.5502" rel="nofollow" title="OpenAI Sora来了，视频生成领域的GPT-4时代来了">
      OpenAI Sora来了，视频生成领域的GPT-4时代来了
     </a>
    </p>
    <p>
     <a href="https://cyberspace.blog.csdn.net/article/details/136200396?spm=1001.2014.3001.5502" rel="nofollow" title="[Java·算法·简单] LeetCode 14. 最长公共前缀 详细解读">
      [Java·算法·简单] LeetCode 14. 最长公共前缀 详细解读
     </a>
    </p>
    <p>
     <a href="https://cyberspace.blog.csdn.net/article/details/136318553?spm=1001.2014.3001.5502" rel="nofollow" title="【Java】深入理解Java中的static关键字">
      【Java】深入理解Java中的static关键字
     </a>
    </p>
    <p>
     <a href="https://cyberspace.blog.csdn.net/article/details/136292910?spm=1001.2014.3001.5502" rel="nofollow" title="[Java·算法·简单] LeetCode 28. 找出字a符串中第一个匹配项的下标 详细解读">
      [Java·算法·简单] LeetCode 28. 找出字a符串中第一个匹配项的下标 详细解读
     </a>
    </p>
    <p>
     <a href="https://cyberspace.blog.csdn.net/article/details/136256523?spm=1001.2014.3001.5502" rel="nofollow" title="了解 Java 中的 AtomicInteger 类">
      了解 Java 中的 AtomicInteger 类
     </a>
    </p>
    <p>
     <a href="https://cyberspace.blog.csdn.net/article/details/136275183?spm=1001.2014.3001.5502" rel="nofollow" title="算法题 — 整数转二进制，查找其中1的数量">
      算法题 — 整数转二进制，查找其中1的数量
     </a>
    </p>
    <p>
     <a class="link-info" href="https://cyberspace.blog.csdn.net/article/details/136223146?spm=1001.2014.3001.5502" rel="nofollow" title="深入理解MySQL事务特性：保证数据完整性与一致性">
      深入理解MySQL事务特性：保证数据完整性与一致性
     </a>
    </p>
    <p>
     <a class="link-info" href="https://cyberspace.blog.csdn.net/article/details/136102269?spm=1001.2014.3001.5502" rel="nofollow" title="Java企业应用软件系统架构演变史">
      Java企业应用软件系统架构演变史
     </a>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
   </div>
  </div>
 </article>
</div>



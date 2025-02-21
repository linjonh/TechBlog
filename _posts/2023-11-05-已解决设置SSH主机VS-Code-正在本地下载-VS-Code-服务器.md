---
layout: post
title: 2023-11-05-已解决设置SSH主机VS-Code-正在本地下载-VS-Code-服务器
date: 2023-11-05 00:44:39 +0800
categories: [IDE（开发工具）]
tags: [ssh,服务器,运维,vscode,python,ubuntu,linux]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=134225513
  alt: 已解决设置SSH主机VS-Code-正在本地下载-VS-Code-服务器
artid: 134225513
---
<span class="artid" style="display:none" artid=68747470733a2f2f:626c6f672e6373646e2e6e65742f426574726179467265652f:61727469636c652f64657461696c732f313334323235353133></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【已解决】设置SSH主机：VS Code-正在本地下载 VS Code 服务器
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
     <img alt="" height="764" src="https://i-blog.csdnimg.cn/blog_migrate/e8f630add150cb24893284e39638b587.png" width="1016"/>
    </p>
    <h4>
     问题描述
    </h4>
    <p>
     很简单，就是我电脑强制重启之后用vscode再去连服务器，发现连不上了
     <img alt="" height="766" src="https://i-blog.csdnimg.cn/blog_migrate/e565d0d72f7d7708da592d56f94e257e.png" width="1023"/>
    </p>
    <h4>
     解决办法
    </h4>
    <h5>
     如上图，点击重试按钮，下面的这些东西就可以复制粘贴了
    </h5>
    <h4>
     <img alt="" height="765" src="https://i-blog.csdnimg.cn/blog_migrate/d60c6a1b1818fc77ea01a23460397015.png" width="1023"/>
    </h4>
    <h5>
     ctr+f查找commit，这个时候就能找到一串d037ac076cee195194f93ce6fe2bdfe2969cc82d，然后就好了，执行下述命令下载vscode-server
    </h5>
    <h5>
     然后通过SSH连接目标服务器，进入~/.vscode-server/bin文件夹。看有没有这样的文件目录，没有就创建，有就把里面的东西全部删掉
    </h5>
    <pre><code>wget https://vscode.cdn.azure.cn/stable/d037ac076cee195194f93ce6fe2bdfe2969cc82d/vscode-server-linux-x64.tar.gz</code></pre>
    <h5>
     当然也可以在浏览器地址栏输入网址，无论哪种方式都能得到一个压缩文件，然后将其解压
    </h5>
    <pre><code>tar zxvf vscode-server-linux-x64.tar.gz</code></pre>
    <p>
     <img alt="" height="277" src="https://i-blog.csdnimg.cn/blog_migrate/ae0186c54aff7a52faab2500bfb88ec7.png" width="654"/>
    </p>
    <h5>
     然后将解压后的内容原封不动的考到远程主机上
    </h5>
    <pre><code>scp -r /home/visionx/下载/temp/vscode-server-linux-x64/* visionx@10.26.13.39:/home/visionx/.vscode-server/bin/d037ac076cee195194f93ce6fe2bdfe2969cc82d
</code></pre>
    <h5>
     重新启动VS Code，现在即可直接连上Linux主机了
    </h5>
    <h4>
     特别注意：不要这样做
    </h4>
    <p>
     在这里边还是给出了一种比较简单且操作性比较强的解决办法，按照我这个情况，其实应该是在远程主机上有d037ac076cee195194f93ce6fe2bdfe2969cc82d这个文件目录的，但是为什么链接不上呢？原因就在于，可能是因为强制关机，而连接中的这个被强制关闭导致部分文件损坏了，所以没有办法重新连接，那有意思的就来了，我们找一个没损坏的不就行了嘛？把其他的配置文件直接考过去不就行了嘛？
    </p>
    <p>
     显然是不行的，会让你不断的输入密码，但是无法连接
    </p>
    <p>
     <img alt="" height="759" src="https://i-blog.csdnimg.cn/blog_migrate/2915f0ce69af29807fedf0c7e6acb130.png" width="1022"/>
    </p>
    <h4>
     扩展阅读
    </h4>
    <p>
     正常来说，有外网的环境比较轻松，vscode通过ssh链接服务器比较便捷：
    </p>
    <pre><code>安装vscode

安装remote ssh

设置用户名和ip通过remote ssh链接服务器</code></pre>
    <p>
     如果可以正常走就不会有这篇文章了，因为网速问题，可能会卡在标题的地方很久很久
    </p>
    <p>
     所以这里再给出一种解决办法：
    </p>
    <p>
     <a class="has-card" href="https://zhuanlan.zhihu.com/p/426876766" rel="nofollow" title="vscode通过ssh链接服务器卡在downloading with wget - 知乎">
      <span class="link-card-box">
       <span class="link-title">
        vscode通过ssh链接服务器卡在downloading with wget - 知乎
       </span>
       <span class="link-desc">
        如题，vscode通过ssh链接服务器卡在downloading with wget/vscode server 正常来说，有外网的环境比较轻松，vscode通过ssh链接服务器比较便捷： 安装vscode 安装remote ssh 设置用户名和ip通过remote ssh链接服务…
       </span>
       <span class="link-link">
        <img alt="icon-default.png?t=N7T8" class="link-link-icon" src="https://i-blog.csdnimg.cn/blog_migrate/003a2ce7eb50c2e24a8c624c260c5930.png">
         https://zhuanlan.zhihu.com/p/426876766
        </img>
       </span>
      </span>
     </a>
    </p>
    <p>
     当然还有其他解决办法：
    </p>
    <p>
     <strong>
      1. 找到此VS Code Server版本的commit_id
     </strong>
    </p>
    <p>
     在VS Code界面上打开底端面板，找到“输出”，然后查看远程插件“Remote-SSH”的输出，会发现输出栏会有如下信息：
    </p>
    <p>
     Deleting old install from /home/username/.vscode-server/bin/6445d93c81ebe42c4cbd7a60712e0b17d9463e97
    </p>
    <p>
     Deleting old log file from /home/username/.vscode-server/.6445d93c81ebe42c4cbd7a60712e0b17d9463e97.log
    </p>
    <p>
     Installing to /home/username/.vscode-server/bin/f1b07bd25dfad64b0167beb15359ae573aecd2cc...
    </p>
    <p>
     等，也可能是其他类似输出，但是这些输出都不重要，重要的在于其最后的这一串字符，我们称之为commit_id，也就是说，可能由于网络环境或者软件版本不同，该界面具体执行的命令可能不同，导致输出信息不局限于上述信息。但是，重要的是commit_id，只要你能看得懂英语，你就能知道当前软件正在下载的VS Code Server对应的是哪一串commit_id。
    </p>
    <p>
     <a class="has-card" href="https://www.cnblogs.com/ziangshen/articles/17741402.html" rel="nofollow" title="https://www.cnblogs.com/ziangshen/articles/17741402.html">
      <span class="link-card-box">
       <span class="link-title">
        https://www.cnblogs.com/ziangshen/articles/17741402.html
       </span>
       <span class="link-link">
        <img alt="icon-default.png?t=N7T8" class="link-link-icon" src="https://i-blog.csdnimg.cn/blog_migrate/003a2ce7eb50c2e24a8c624c260c5930.png">
         https://www.cnblogs.com/ziangshen/articles/17741402.html
        </img>
       </span>
      </span>
     </a>
    </p>
    <h4>
     完结撒花
    </h4>
    <p>
     我不是相信爱情，我只是太相信你
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <pre></pre>
    <p>
    </p>
   </div>
  </div>
 </article>
</div>



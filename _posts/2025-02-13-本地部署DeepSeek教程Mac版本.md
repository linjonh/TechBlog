---
title: 2025-02-13-本地部署DeepSeek教程Mac版本
date: 2025-02-13 23:26:42 +0800
categories: ['未分类']
tags: [macos,ollama,deepseekr1,deepseek,AI编程]
image:
  path: /assets/images/fec7ae270567357c22e1b61dfba57d84.png
  alt: 本地部署DeepSeek教程Mac版本
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     本地部署DeepSeek教程（Mac版本）
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
     第一步、下载
     <a href="https://www.baidu.com/link?url=BHgahOx9eD3kxb3bTrhgjuPvc3W9tm85LxlJTQK1C0e&amp;wd=&amp;eqid=fc5d4baf008514ff00000004679e14f0" rel="nofollow" title="Ollama">
      Ollama
     </a>
    </p>
    <p>
     官网地址：
     <a href="https://ollama.com/" rel="nofollow" title="Ollama">
      Ollama
     </a>
    </p>
    <p>
     <img alt="" height="1906" src="/assets/images/9a0ff09cbe8e4830700fa036dbbe74aa.png" width="2942"/>
    </p>
    <p>
     点击 Download 下载
    </p>
    <p>
     <img alt="" height="1906" src="/assets/images/a2bc88fb0f2b7bbfb81b23c7c111c84f.png" width="2942">
      我这里是  macOS  环境  以  macOS  环境为主
     </img>
    </p>
    <p>
     下载完成后是一个压缩包，双击解压之后移到应用程序：
    </p>
    <p>
     <img alt="" height="872" src="/assets/images/eba08eb278ac2d4c877337e064e73e0c.png" width="1840">
      <img alt="" height="872" src="/assets/images/d6aab62b586b2a93740cd2c4c041533a.png" width="1840">
       打开后会提示你到命令行中运行一下命令，附上截图：
      </img>
     </img>
    </p>
    <p>
     <img alt="" height="742" src="/assets/images/d0c4c3cc656de072bb2767f36a52b36c.png" width="1140">
      若遇上图类似报错，请重试  一般是因为网络问题
     </img>
    </p>
    <p>
     等待下载完成  输入以下代码：
    </p>
    <pre><code class="language-javascript">ollama -v</code></pre>
    <p>
     如下图所示，则为成功
    </p>
    <p>
     <img alt="" height="742" src="/assets/images/867f9dd62944eecb7cdcdaa4a4fbec79.png" width="1140"/>
    </p>
    <p>
     第二步：在 ollama 官网找到  deepseek r1 模型并下载
    </p>
    <p>
     <img alt="" height="1906" src="/assets/images/d195773fcc056359c346c0979d48a72d.png" width="2942">
      <img alt="" height="1906" src="/assets/images/8b55c3e1e70f387b89cc690a0b781261.png" width="2942"/>
     </img>
    </p>
    <p>
     选择你的模型，并运行终端命令下载：
    </p>
    <p>
     <img alt="" height="1906" src="/assets/images/6e82180471dcd4c963cf38e0ca6d0988.png" width="2942"/>
    </p>
    <p>
     条件有限，选择1.5b试试水：
    </p>
    <p>
     <img alt="" height="742" src="/assets/images/e602401fc353192b539f64abc3e2a751.png" width="1140"/>
    </p>
    <p>
     静静等待下载完成，输入下方命令开始对话：
    </p>
    <pre><code class="language-javascript">ollama run deepseek-r1:1.5b</code></pre>
    <p>
     命令行会自动判断当前是否已经安装了该模型
    </p>
    <p>
     已经安装则直接运行
    </p>
    <p>
     出现 success 则为安装成功
    </p>
    <p>
     <img alt="" height="742" src="/assets/images/e980a41637575417e8e8511dd69ba474.png" width="1140"/>
    </p>
    <p>
     <img alt="" height="742" src="/assets/images/6bba69e29d6a608657888696f1fe9632.png" width="1140"/>
     输入 /bye 则退出对话
    </p>
    <p>
     <img alt="" height="742" src="/assets/images/fec7ae270567357c22e1b61dfba57d84.png" width="1140"/>
    </p>
   </div>
  </div>
 </article>
</div>



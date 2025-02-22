---
layout: post
title: Python安装opencv-python出错问题ERROR-Could-not-build-wheels-for-opencv-python
date: 2023-02-02 23:45:29 +0800
categories: [Python]
tags: [人工智能,python,opencv]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=128859339
    alt: Python安装opencv-python出错问题ERROR-Could-not-build-wheels-for-opencv-python
artid: 128859339
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Python:安装opencv-python出错问题ERROR: Could not build wheels for opencv-python
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-atom-one-dark" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <h2>
     <a id="_0">
     </a>
     项目场景：
    </h2>
    <p>
     笔者在安装opencv-python的过程中遇到了如下错误
    </p>
    <h2>
     <a id="_3">
     </a>
     问题描述
    </h2>
    <p>
     在安装opencv-python的过程，笔者直接通过pip命令进行安装，遇到了如下问题
    </p>
    <p>
     命令
    </p>
    <pre><code class="prism language-c">pip install opencv<span class="token operator">-</span>python
</code></pre>
    <p>
     问题
    </p>
    <pre><code class="prism language-c">Failed to build opencv<span class="token operator">-</span>python
ERROR<span class="token operator">:</span> Could not build wheels <span class="token keyword">for</span> opencv<span class="token operator">-</span>python<span class="token punctuation">,</span> which is required to install pyproject<span class="token punctuation">.</span>toml<span class="token operator">-</span>based projects
</code></pre>
    <hr/>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/858759669ef6f4e4365cd121ff068c85.png"/>
    </p>
    <h2>
     <a id="_20">
     </a>
     原因分析：
    </h2>
    <p>
     直接使用上述命令安装的是最新版本，挑一个别的版本的opencv-python即可解决上述问题
    </p>
    <h2>
     <a id="_25">
     </a>
     解决方案：
    </h2>
    <p>
     使用命令如下
    </p>
    <pre><code class="prism language-python">pip install opencv<span class="token operator">-</span>python<span class="token operator">==</span><span class="token number">4.3</span><span class="token number">.0</span><span class="token number">.38</span>
</code></pre>
    <p>
     问题解决
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



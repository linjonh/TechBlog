---
layout: post
title: el-date-picker-开始结束时间传给后端以及后端回传显示
date: 2024-12-26 10:21:46 +0800
categories: [前端]
tags: [前端,vue.js,javascript]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=132693960
    alt: el-date-picker-开始结束时间传给后端以及后端回传显示
artid: 132693960
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     el-date-picker 开始结束时间传给后端以及后端回传显示
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-tomorrow-night" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <pre><code class="prism language-bash"><span class="token operator">&lt;</span>el-date-picker<span class="token variable"><span class="token variable">`</span>在这里插入代码片<span class="token variable">`</span></span>
            v-model<span class="token operator">=</span><span class="token string">"value2"</span>
            <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">"daterange"</span>
            range-separator<span class="token operator">=</span><span class="token string">"至"</span>
            start-placeholder<span class="token operator">=</span><span class="token string">"开始时间"</span>
            end-placeholder<span class="token operator">=</span><span class="token string">"结束时间"</span>
            :size<span class="token operator">=</span><span class="token string">"size"</span>
          /<span class="token operator">&gt;</span>
</code></pre>
    <p>
     传给后端
    </p>
    <pre><code class="prism language-bash"><span class="token string">"noticeStartDate"</span>:value2.value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>,
<span class="token string">"noticeEndDate"</span>:value2.value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>,
</code></pre>
    <p>
     后端数据回显前端
    </p>
    <pre><code class="prism language-bash"><span class="token assign-left variable">value2.value</span><span class="token operator">=</span><span class="token punctuation">[</span>new Date<span class="token punctuation">(</span>.noticeStartDate<span class="token punctuation">)</span>,new Date<span class="token punctuation">(</span>noticeEndDate<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



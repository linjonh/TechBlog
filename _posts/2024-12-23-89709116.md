---
layout: post
title: 2024-12-23-pytorch测试GPU是否可用
date: 2024-12-23 22:00:00 +0800
categories: [python]
tags: [pytorch,gpu]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=89709116
  alt: pytorch测试GPU是否可用
artid: 89709116
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     pytorch：测试GPU是否可用
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
    <pre><code class="prism language-python"><span class="token keyword">import</span> torch
flag <span class="token operator">=</span> torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span>

ngpu<span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># Decide which device we want to run on</span>
device <span class="token operator">=</span> torch<span class="token punctuation">.</span>device<span class="token punctuation">(</span><span class="token string">"cuda:0"</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">and</span> ngpu <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token string">"cpu"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>device<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>get_device_name<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>cuda<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
</code></pre>
    <pre><code>True
cuda:0
GeForce GTX 1080
tensor([[0.9530, 0.4746, 0.9819],
        [0.7192, 0.9427, 0.6768],
        [0.8594, 0.9490, 0.6551]], device='cuda:0')
</code></pre>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f67:2e6373646e2e6e65742f77656978696e5f3335353736383831:2f61727469636c652f64657461696c732f3839373039313136</p>

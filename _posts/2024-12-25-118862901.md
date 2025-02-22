---
layout: post
title: python运算符numpy库中的运算符
date: 2024-12-25 22:48:59 +0800
categories: [笔记]
tags: [数学建模,python]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=118862901
    alt: python运算符numpy库中的运算符
artid: 118862901
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     python:@运算符（numpy库中的运算符）
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
     <font color="#999AAA">
      你们的每个赞都能让我开心好几天✿✿ヽ(°▽°)ノ✿
     </font>
    </p>
    <h2>
     <a id="_2">
     </a>
     前言
    </h2>
    <p>
     <font color="#999AAA">
      我在《python数学实验与建模》这本书中发现了@运算符，这可真是个奇怪的符号！我大量的尝试与查资料后，终于揭开这个@的意义
     </font>
    </p>
    <hr color="#000000" size='1"'/>
    <h2>
     <a id="_9">
     </a>
     一、@运算符
    </h2>
    <h3>
     <a id="1_10">
     </a>
     1.仅仅支持数组运算
    </h3>
    <p>
     因此，必须用到numpy.array()才能使用这个运算符
    </p>
    <h3>
     <a id="2python35_12">
     </a>
     2.这是python3.5后的新运算符
    </h3>
    <p>
     它与numpy.dot（）的作用是一样的，矩阵乘法（就是线性代数里学的）！
     <br/>
     举个例子：
    </p>
    <pre><code class="prism language-python"><span class="token keyword">from</span> numpy <span class="token keyword">import</span> array<span class="token punctuation">,</span>dot
a<span class="token operator">=</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b<span class="token operator">=</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a@b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dot<span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     结果是：
    </p>
    <pre><code class="prism language-python"><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">15</span> <span class="token number">18</span><span class="token punctuation">]</span>
 <span class="token punctuation">[</span><span class="token number">15</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">15</span> <span class="token number">18</span><span class="token punctuation">]</span>
 <span class="token punctuation">[</span><span class="token number">15</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre>
    <p>
     说明了这两种运算方法是一样的
    </p>
    <h2>
     <a id="_35">
     </a>
     二、注意事项
    </h2>
    <h3>
     <a id="1_36">
     </a>
     1.矩阵@向量
    </h3>
    <p>
     这是个特殊情况，我在这卡了挺久的。如果第二个位置放的是向量（向量可以看作是1行n列的矩阵）的话，那么
     <strong>
      向量会转置！
     </strong>
     <br/>
     举个例子：
    </p>
    <pre><code class="prism language-python"><span class="token keyword">from</span> numpy <span class="token keyword">import</span> array<span class="token punctuation">,</span>dot
f<span class="token operator">=</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">#1*2</span>
g<span class="token operator">=</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">#print(f@g)#好像并不能自动转置</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>g@f<span class="token punctuation">)</span><span class="token comment">#草，我懂了，f看做向量，如果把f放在第二位，会自动转置</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dot<span class="token punctuation">(</span>g<span class="token punctuation">,</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     结果：
    </p>
    <pre><code class="prism language-python"><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">5</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">5</span> <span class="token number">5</span><span class="token punctuation">]</span>
</code></pre>
    <p>
     <strong>
      由于向量转置了，因此可以相乘。注意结果还是向量
     </strong>
    </p>
    <p>
     <font color="#999AAA">
      你们的每个赞都能让我开心好几天✿✿ヽ(°▽°)ノ✿
     </font>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



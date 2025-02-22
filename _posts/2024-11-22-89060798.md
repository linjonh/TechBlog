---
layout: post
title: 2024-11-22-python求和函数sum详解
date: 2024-11-22 16:00:00 +0800
categories: [python]
tags: [python,sum()函数,python求和]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=89060798
  alt: python求和函数sum详解
artid: 89060798
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     python求和函数sum()详解
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
     <a id="pythonsum_0">
     </a>
     python求和函数
     <mark>
      sum
     </mark>
     ()详解
    </h2>
    <h4>
     <a id="sumpython_sum_2">
     </a>
     今天在学习的过程中，误用sum()函数，我又去查了查python
     <mark>
      sum
     </mark>
     ()函数才恍然大悟。
    </h4>
    <p>
     我本来想算几个Int值相加的和，本以为很简单的事情，结果却很悲伤，例：
    </p>
    <pre><code>&gt;&gt;&gt;sum = sum(1,2,3)         #结果很明显出现问题报错
TypeError: sum expected at most 2 arguments, got 3
</code></pre>
    <p>
     傻乎乎的我以为只能算前两个数的和等于3，就又试了一下
    </p>
    <pre><code>&gt;&gt;&gt;sum = sum(1,2)           #结果还是报错
TypeError: 'int' object is not iterable
</code></pre>
    <p>
     其实，我们所了解sum()函数语法是这样的
     <br/>
     <mark>
      sum(iterable[, start])
     </mark>
    </p>
    <p>
     其中
    </p>
    <ul>
     <li>
      <p>
       <strong>
        iterable – 可迭代对象，如：列表(list)、元组(tuple)、集合(set)、字典(dictionary)。
       </strong>
      </p>
     </li>
     <li>
      <p>
       <strong>
        start – 指定相加的参数，如果没有设置这个值，默认为0。
       </strong>
      </p>
     </li>
    </ul>
    <blockquote>
     <p>
      也就是说sum()最后求得的值 = 可迭代对象里面的数加起来的总和(字典:key值相加) + start的值(如果没写start的值，则默认为0) 所以，我所求的几个int值的和可以写成这样
     </p>
    </blockquote>
    <pre><code class="prism language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>             <span class="token comment"># in list</span>
<span class="token number">6</span>
</code></pre>
    <p>
     如果我们加上start的话，应该是这样的
    </p>
    <pre><code class="prism language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>          <span class="token comment">#in list +start</span>
<span class="token number">11</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>            <span class="token comment">#in tuple</span>
<span class="token number">6</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>            <span class="token comment">#in set</span>
<span class="token number">6</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">)</span>      <span class="token comment">#in dictionary key</span>
<span class="token number">6</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">#in range()</span>
<span class="token number">6</span>      
</code></pre>
    <p>
     学习这些过后，我们就可以正确的运用sum()函数了。
    </p>
    <p>
     <em>
      别指望着看一遍就能记住和整掌握什么 – 请看第二遍，第三遍。
     </em>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">6874747073:3a2f2f626c6f672e6373646e2e6e65742f616d756368656e61:2f61727469636c652f64657461696c732f3839303630373938</p>

---
layout: post
title: 2021-10-27-Python-判断dict中key是否存在的三种方法
date: 2021-10-27 10:34:04 +0800
categories: [学习笔记,Python]
tags: [python,开发语言,后端]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=120987540
  alt: Python-判断dict中key是否存在的三种方法
artid: 120987540
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Python 判断dict中key是否存在的三种方法
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
    <h4>
     <a id="_0">
     </a>
     前言
    </h4>
    <p>
     今天写代码遇到一个问题，如果要获取字典中某个key的value，那么很简单，直接获取就行了。
     <br/>
     但是如果不确定这个字典中是否存在这个key，那直接获取就有可能会报错，那么会有一个
     <mark>
      KeyError
     </mark>
     的错误被抛出，当然你也可以直接通过捕获异常的方式来处理这个问题，但我更推荐大家提前判断这个字典中是否有这个key，也就是提前预断错误是否会发生，并且及时的避免它。
    </p>
    <h4>
     <a id="_4">
     </a>
     判断方法
    </h4>
    <ol>
     <li>
      <p>
       第一种方法：使用has_key()方法
      </p>
      <pre><code class="prism language-python"><span class="token comment"># 生成一个字典</span>
<span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{<!-- --></span><span class="token string">'name'</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span><span class="token string">'age'</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span><span class="token string">'sex'</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">}</span>
<span class="token comment"># 打印返回值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">.</span>has_key<span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 结果返回True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">.</span>has_key<span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 结果返回False</span>
</code></pre>
      <p>
       不过这个方法在新版的Python中貌似已经被移除了，那么大家也可以使用第二种方法。
      </p>
     </li>
     <li>
      <p>
       第二种方法：使用keys()方法
      </p>
      <pre><code class="prism language-python"><span class="token comment"># 生成一个字典</span>
<span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{<!-- --></span><span class="token string">'name'</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span><span class="token string">'age'</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span><span class="token string">'sex'</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">}</span>
<span class="token comment"># 判断是否存在，其中dict.keys()是列出字典所有的key</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'name'</span> <span class="token keyword">in</span> <span class="token builtin">dict</span><span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 结果返回True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'id'</span> <span class="token keyword">in</span> <span class="token builtin">dict</span><span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 结果返回False</span>
</code></pre>
      <p>
       除了使用in也可以使用not in，用于判定这个key不存在
      </p>
     </li>
     <li>
      <p>
       第三种方法：优雅的使用
       <strong>
        in
       </strong>
       关键字（Python3支持，Python2不清楚）
      </p>
      <pre><code class="prism language-python"><span class="token comment"># 生成一个字典</span>
<span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{<!-- --></span><span class="token string">'name'</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span><span class="token string">'age'</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span><span class="token string">'sex'</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">}</span>
<span class="token comment"># 判断key是否存在于dict中</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'name'</span> <span class="token keyword">in</span> <span class="token builtin">dict</span><span class="token punctuation">)</span>  <span class="token comment"># 结果返回True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'id'</span> <span class="token keyword">in</span> <span class="token builtin">dict</span><span class="token punctuation">)</span>  <span class="token comment"># 结果返回False</span>
</code></pre>
      <p>
       这也是我个人比较推荐的一种用法
      </p>
     </li>
    </ol>
    <h4>
     <a id="_35">
     </a>
     结语
    </h4>
    <p>
     欢迎大家点赞转发，如果文章中有讲的不对的地方，也欢迎大家在评论区进行指正，谢谢！
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f67:2e6373646e2e6e65742f6c6974746c655f737469636b5f692f:61727469636c652f64657461696c732f313230393837353430</p>

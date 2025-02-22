---
layout: post
title: java-import关键字使用
date: 2024-12-14 09:35:11 +0800
categories: [java关键字import]
tags: [java关键字import,javaimport,import]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=83021112
    alt: java-import关键字使用
artid: 83021112
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     java import关键字使用
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-tomorrow-night-eighties" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
    </p>
    <div class="toc">
     <h4>
      java关键词import
     </h4>
     <ul>
      <li>
       <ul>
        <li>
         <a href="#javaimport_1" rel="nofollow">
          java关键字import的使用细节
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h3>
     <a id="javaimport_1">
     </a>
     java关键字import的使用细节
    </h3>
    <ol>
     <li>
      显示导入指定包下的类或者接口
     </li>
    </ol>
    <pre><code class="prism language-java"><span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Scanner<span class="token punctuation">;</span>
</code></pre>
    <ol start="2">
     <li>
      写在包的声明和源文件之间
     </li>
    </ol>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>util<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Date<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{<!-- --></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre>
    <ol start="3">
     <li>
      如果需要引入多个类或者接口，那么就并列写出
     </li>
    </ol>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>util<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Scanner<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Date<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{<!-- --></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre>
    <ol start="4">
     <li>
      如果导入的类java.lang包下的，如 ： System String Math等类，则不需要显示声明。
     </li>
    </ol>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>util<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{<!-- --></span>
	<span class="token comment">//直接使用</span>
	Math<span class="token punctuation">.</span>PI<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <ol start="5">
     <li>
      .*代表某包下是所有类或者接口，如java.util.*;
     </li>
    </ol>
    <pre><code class="prism language-java"><span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>*<span class="token punctuation">;</span>
</code></pre>
    <ol start="6">
     <li>
      import static 表示导入指定类的static的属性或方法
     </li>
    </ol>
    <pre><code class="prism language-java"><span class="token comment">//到如System类的static方法或者属性</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>System<span class="token punctuation">.</span>*<span class="token punctuation">;</span>
</code></pre>
    <ol start="7">
     <li>
      处理同名类的导入使用，使用前需在前面加包名区分，如util和sql包下同时存在Date类
     </li>
    </ol>
    <pre><code class="prism language-java"><span class="token comment">//显示声明或使用</span>
java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Date date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <ol start="8">
     <li>
      不能导入子包。
     </li>
    </ol>
    <pre><code class="prism language-java"><span class="token keyword">import</span> java<span class="token punctuation">.</span>*<span class="token punctuation">.</span>*<span class="token punctuation">;</span>
</code></pre>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



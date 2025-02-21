---
layout: post
title: Ubuntu下python2与python3之间的切换
date: 2023-09-04 13:59:32 +0800
categories: [Python3]
tags: [python]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=106948668
    alt: Ubuntu下python2与python3之间的切换
artid: 106948668
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Ubuntu下python2与python3之间的切换
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
    <p>
     由于ubuntu中python2与python3一般都有安装，所以必要时需要进行切换。
    </p>
    <h3>
     <a id="1_python2_1">
     </a>
     1. 我们设置一下python2为默认。
    </h3>
    <p>
     <code>
      sudo update-alternatives --install /usr/bin/python python /usr/bin/python2 100
     </code>
    </p>
    <h3>
     <a id="2_python3_4">
     </a>
     2. 同样的方法，设置python3为默认。
    </h3>
    <p>
     <code>
      sudo update-alternatives --install /usr/bin/python python /usr/bin/python3 150
     </code>
    </p>
    <h3>
     <a id="3__7">
     </a>
     3. 因为我们已经标记好了。所以这个指令可以切换任意一个版本为默认版本。
    </h3>
    <p>
     <code>
      sudo update-alternatives --config python
     </code>
    </p>
    <h3>
     <a id="4__10">
     </a>
     4. 实际操作
    </h3>
    <pre><code class="prism language-bash">root@kylin:~<span class="token comment"># python --version</span>
Python 2.7.17
root@kylin:~<span class="token comment"># sudo update-alternatives --install /usr/bin/python python /usr/bin/python2 100</span>
update-alternatives: 使用 /usr/bin/python2 来在自动模式中提供 /usr/bin/python <span class="token punctuation">(</span>python<span class="token punctuation">)</span>
root@kylin:~<span class="token comment"># sudo update-alternatives --install /usr/bin/python python /usr/bin/python3 150</span>
update-alternatives: 使用 /usr/bin/python3 来在自动模式中提供 /usr/bin/python <span class="token punctuation">(</span>python<span class="token punctuation">)</span>
root@kylin:~<span class="token comment"># sudo update-alternatives --config python</span>
有 2 个候选项可用于替换 python <span class="token punctuation">(</span>提供 /usr/bin/python<span class="token punctuation">)</span>。

  选择       路径            优先级  状态
------------------------------------------------------------
* 0            /usr/bin/python3   150       自动模式
  1            /usr/bin/python2   100       手动模式
  2            /usr/bin/python3   150       手动模式

要维持当前值<span class="token punctuation">[</span>*<span class="token punctuation">]</span>请按<span class="token operator">&lt;</span>回车键<span class="token operator">&gt;</span>，或者键入选择的编号：
root@kylin:~<span class="token comment"># python --version</span>
Python 3.7.5
root@kylin:~<span class="token comment"># sudo update-alternatives --config python</span>
有 2 个候选项可用于替换 python <span class="token punctuation">(</span>提供 /usr/bin/python<span class="token punctuation">)</span>。

  选择       路径            优先级  状态
------------------------------------------------------------
* 0            /usr/bin/python3   150       自动模式
  1            /usr/bin/python2   100       手动模式
  2            /usr/bin/python3   150       手动模式

要维持当前值<span class="token punctuation">[</span>*<span class="token punctuation">]</span>请按<span class="token operator">&lt;</span>回车键<span class="token operator">&gt;</span>，或者键入选择的编号：1
update-alternatives: 使用 /usr/bin/python2 来在手动模式中提供 /usr/bin/python <span class="token punctuation">(</span>python<span class="token punctuation">)</span>
</code></pre>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



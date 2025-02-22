---
layout: post
title: 原生微信小程序自定义tabbar引入Color-UI样式
date: 2024-01-05 17:32:15 +0800
categories: [微信小程序]
tags: [微信小程序,ui,notepad++]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=135411035
    alt: 原生微信小程序自定义tabbar引入Color-UI样式
artid: 135411035
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     原生微信小程序自定义tabbar引入Color UI样式
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
    </p>
    <div class="toc">
     <h4>
      原生微信小程序自定义tabbar引入Color UI样式
     </h4>
     <ul>
      <li>
       <a href="#_4" rel="nofollow">
        前言
       </a>
      </li>
      <li>
       <a href="#_9" rel="nofollow">
        使用步骤
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1_appjsontabbar_11" rel="nofollow">
          1. 修改app.json配置自定义tabbar
         </a>
        </li>
        <li>
         <a href="#2__tabbar__32" rel="nofollow">
          2. 添加自定义 tabbar 代码文件
         </a>
        </li>
        <li>
         <a href="#3__Color_UI__41" rel="nofollow">
          3. 引入 Color UI 样式
         </a>
        </li>
        <li>
         <a href="#4__wxml__54" rel="nofollow">
          4. 编辑 wxml 代码
         </a>
        </li>
        <li>
         <a href="#5_js_73" rel="nofollow">
          5. 编写js代码
         </a>
        </li>
        <li>
         <a href="#6_tabbaronShow_94" rel="nofollow">
          6. 编写tabbar页面的onShow函数
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_121" rel="nofollow">
        效果
       </a>
      </li>
      <li>
       <a href="#_126" rel="nofollow">
        总结
       </a>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <hr/>
    <h2>
     <a id="_4">
     </a>
     前言
    </h2>
    <p>
     Color UI 是一款适应于H5、微信小程序、安卓、ios、支付宝的高颜值，高度自定义的 Css 组件库。本文介绍了原生微信小程序如何自定义 tabbar 并使用 Color UI 样式
    </p>
    <hr/>
    <h2>
     <a id="_9">
     </a>
     使用步骤
    </h2>
    <p>
     Color UI 的安装请自行参考官方文档，以下步骤以已安装Color UI为前提
    </p>
    <h3>
     <a id="1_appjsontabbar_11">
     </a>
     1. 修改app.json配置自定义tabbar
    </h3>
    <p>
     重点：配置
     <code>
      tabbar.custom = true
     </code>
    </p>
    <pre><code class="prism language-json"><span class="token punctuation">{<!-- --></span>
  <span class="token string-property property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
    <span class="token string">"pages/my/my"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{<!-- --></span>
    <span class="token string-property property">"custom"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{<!-- --></span>
      <span class="token string-property property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{<!-- --></span>
      <span class="token string-property property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/my/my"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"text"</span><span class="token operator">:</span> <span class="token string">"我的"</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <h3>
     <a id="2__tabbar__32">
     </a>
     2. 添加自定义 tabbar 代码文件
    </h3>
    <p>
     在代码根目录下添加入口文件:
    </p>
    <pre><code>custom-tab-bar/index.js
custom-tab-bar/index.json
custom-tab-bar/index.wxml
custom-tab-bar/index.wxss
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/6b4e6d08770cfec7f1b4141bcb789a22.png"/>
    </p>
    <h3>
     <a id="3__Color_UI__41">
     </a>
     3. 引入 Color UI 样式
    </h3>
    <p>
     由于微信小程序自定义 tabbar 无法应用
     <code>
      app.wxss
     </code>
     中的全局样式，所以需要在
     <code>
      custom-tab-bar/index.wxss
     </code>
     文件中将 Color UI 的样式引入进来
    </p>
    <pre><code class="prism language-css"><span class="token comment">/* custom-tab-bar/index.wxss */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"../colorui/main.wxss"</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"../colorui/icon.wxss"</span><span class="token punctuation">;</span></span>

<span class="token selector">view</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">--green</span><span class="token punctuation">:</span> #39b54a<span class="token punctuation">;</span>
  <span class="token property">--gray</span><span class="token punctuation">:</span> #aaaaaa<span class="token punctuation">;</span>
  <span class="token property">--white</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <h3>
     <a id="4__wxml__54">
     </a>
     4. 编辑 wxml 代码
    </h3>
    <p>
     在 Corlor UI 文档中选择一款底部操作栏，将代码复制到
     <code>
      custom-tab-bar/index.wxml
     </code>
     文件中，并稍作修改
    </p>
    <pre><code class="prism language-html"><span class="token comment">&lt;!-- custom-tab-bar/index.wxml --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cu-bar tabbar bg-white foot<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 首页 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>action {<!-- -->{PageCur=='home'?'text-green':'text-gray'}}<span class="token punctuation">"</span></span> <span class="token attr-name">data-cur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>NavChange<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cuIcon-homefill<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span> 首页
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 我的、左上角红色圆点 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>action {<!-- -->{PageCur=='mine'?'text-green':'text-gray'}}<span class="token punctuation">"</span></span> <span class="token attr-name">data-cur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mine<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>NavChange<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cuIcon-my<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 红色圆点（数字角标） --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cu-tag badge<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    我的
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre>
    <h3>
     <a id="5_js_73">
     </a>
     5. 编写js代码
    </h3>
    <pre><code class="prism language-js"><span class="token comment">// custom-tab-bar/index.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
  <span class="token comment">/**
   * 页面的初始数据
   */</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{<!-- --></span>
    <span class="token literal-property property">PageCur</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Page</span><span class="token operator">:</span> <span class="token punctuation">{<!-- --></span>
      <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token string">'/pages/index/index'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mine</span><span class="token operator">:</span> <span class="token string">'/pages/my/my'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">NavChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
    wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>Page<span class="token punctuation">[</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>cur<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
    <h3>
     <a id="6_tabbaronShow_94">
     </a>
     6. 编写tabbar页面的onShow函数
    </h3>
    <p>
     当tabbar页面显示时，我们希望选中的按钮高亮
    </p>
    <pre><code class="prism language-js"><span class="token comment">// pages/index/index</span>
  <span class="token comment">/**
   * 生命周期函数--监听页面显示
   */</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
      <span class="token literal-property property">PageCur</span><span class="token operator">:</span> <span class="token string">'home'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>


<span class="token comment">// pages/my/my</span>
  <span class="token comment">/**
   * 生命周期函数--监听页面显示
   */</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
      <span class="token literal-property property">PageCur</span><span class="token operator">:</span> <span class="token string">'mine'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre>
    <hr/>
    <h2>
     <a id="_121">
     </a>
     效果
    </h2>
    <p>
     <a href="https://developers.weixin.qq.com/s/6TL2hZm37IN9" rel="nofollow">
      代码片段
     </a>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a619b713b4edb6116f4f13026999f03c.png"/>
    </p>
    <h2>
     <a id="_126">
     </a>
     总结
    </h2>
    <p>
     以上就是今天要讲的内容，本文介绍了原生微信小程序自定义tabbar引入colorui样式的步骤，若以上内容有帮到您，请您动动小手点赞支持，谢谢大家！
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



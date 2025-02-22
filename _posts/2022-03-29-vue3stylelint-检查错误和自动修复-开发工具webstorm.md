---
layout: post
title: vue3stylelint-检查错误和自动修复-开发工具webstorm
date: 2022-03-29 14:12:57 +0800
categories: [vue学习记录]
tags: [前端,vue]
image:
    path: https://img-blog.csdnimg.cn/1a87ac7f3aae44c29aa18d4a2a05bb5c.png?x-oss-process&#61;image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaDU0MzM&#61;,size_20,color_FFFFFF,t_70,g_se,x_16
    alt: vue3stylelint-检查错误和自动修复-开发工具webstorm
artid: 123819600
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     vue3+stylelint 检查错误和自动修复 开发工具webstorm
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
    </p>
    <div class="toc">
     <h4>
      vue3+stylelint 检查错误和自动修复 开发工具webstorm
     </h4>
     <ul>
      <li>
       <ul>
        <li>
         <a href="#stylelint_5" rel="nofollow">
          安装stylelint
         </a>
        </li>
        <li>
         <a href="#_16" rel="nofollow">
          设置开发工具
         </a>
        </li>
        <li>
         <a href="#stylelintconfigjs_21" rel="nofollow">
          在根目录添加stylelint.config.js
         </a>
        </li>
        <li>
         <a href="#_stylelintignore_136" rel="nofollow">
          排除文件 .stylelintignore
         </a>
        </li>
        <li>
         <a href="#stlylelintl__153" rel="nofollow">
          stlylelintl 检查效果
         </a>
        </li>
        <li>
         <a href="#_159" rel="nofollow">
          设置快快捷键自动修复
         </a>
        </li>
        <li>
         <a href="#_172" rel="nofollow">
          修改效果
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h3>
     <a id="stylelint_5">
     </a>
     安装stylelint
    </h3>
    <p>
     为了让stylelint能够去兼容vue3，这里需要下载比较多的东西
    </p>
    <p>
     <code>
      代码片
     </code>
    </p>
    <pre><code class="prism language-javascript">npm i stylelint stylelint<span class="token operator">-</span>config<span class="token operator">-</span>html stylelint<span class="token operator">-</span>config<span class="token operator">-</span>recommended<span class="token operator">-</span>scss stylelint<span class="token operator">-</span>config<span class="token operator">-</span>recommended<span class="token operator">-</span>vue stylelint<span class="token operator">-</span>config<span class="token operator">-</span>standard stylelint<span class="token operator">-</span>config<span class="token operator">-</span>standard<span class="token operator">-</span>scss stylelint<span class="token operator">-</span>order postcss postcss<span class="token operator">-</span>html <span class="token operator">-</span><span class="token constant">D</span>

</code></pre>
    <p>
     <img alt="我电脑上安装的stylelint " src="https://i-blog.csdnimg.cn/blog_migrate/fc6a3823bd3a7280c81006b5398091bc.png"/>
    </p>
    <h3>
     <a id="_16">
     </a>
     设置开发工具
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/910c3451952e7dbad6683af31240a86c.png"/>
    </p>
    <h3>
     <a id="stylelintconfigjs_21">
     </a>
     在根目录添加stylelint.config.js
    </h3>
    <p>
     <code>
      代码片
     </code>
    </p>
    <pre><code class="prism language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{<!-- --></span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'stylelint-config-standard'</span><span class="token punctuation">,</span>
    <span class="token string">'stylelint-config-html/vue'</span><span class="token punctuation">,</span>
    <span class="token string">'stylelint-config-standard-scss'</span><span class="token punctuation">,</span>
    <span class="token string">'stylelint-config-recommended-vue/scss'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'stylelint-order'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  rules<span class="token operator">:</span> <span class="token punctuation">{<!-- --></span>
    <span class="token string">'unit-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token punctuation">{<!-- --></span> ignoreUnits<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/rpx/"</span><span class="token punctuation">,</span> <span class="token string">"/upx/"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'no-descending-specificity'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string">'function-url-quotes'</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span>
    <span class="token string">'string-quotes'</span><span class="token operator">:</span> <span class="token string">'double'</span><span class="token punctuation">,</span>
    indentation<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token string">'unit-case'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string">'color-hex-case'</span><span class="token operator">:</span> <span class="token string">'lower'</span><span class="token punctuation">,</span>
    <span class="token string">'color-hex-length'</span><span class="token operator">:</span> <span class="token string">'long'</span><span class="token punctuation">,</span>
    <span class="token string">'rule-empty-line-before'</span><span class="token operator">:</span> <span class="token string">'never'</span><span class="token punctuation">,</span>
    <span class="token string">'font-family-no-missing-generic-family-keyword'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string">'block-opening-brace-space-before'</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span>
    <span class="token string">'property-no-unknown'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string">'no-empty-source'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string">'selector-pseudo-class-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{<!-- --></span>
        ignorePseudoClasses<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'deep'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'order/properties-order'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'position'</span><span class="token punctuation">,</span>
      <span class="token string">'top'</span><span class="token punctuation">,</span>
      <span class="token string">'right'</span><span class="token punctuation">,</span>
      <span class="token string">'bottom'</span><span class="token punctuation">,</span>
      <span class="token string">'left'</span><span class="token punctuation">,</span>
      <span class="token string">'z-index'</span><span class="token punctuation">,</span>
      <span class="token string">'display'</span><span class="token punctuation">,</span>
      <span class="token string">'justify-content'</span><span class="token punctuation">,</span>
      <span class="token string">'align-items'</span><span class="token punctuation">,</span>
      <span class="token string">'float'</span><span class="token punctuation">,</span>
      <span class="token string">'clear'</span><span class="token punctuation">,</span>
      <span class="token string">'overflow'</span><span class="token punctuation">,</span>
      <span class="token string">'overflow-x'</span><span class="token punctuation">,</span>
      <span class="token string">'overflow-y'</span><span class="token punctuation">,</span>
      <span class="token string">'margin'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-top'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-right'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-bottom'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-left'</span><span class="token punctuation">,</span>
      <span class="token string">'padding'</span><span class="token punctuation">,</span>
      <span class="token string">'padding-top'</span><span class="token punctuation">,</span>
      <span class="token string">'padding-right'</span><span class="token punctuation">,</span>
      <span class="token string">'padding-bottom'</span><span class="token punctuation">,</span>
      <span class="token string">'padding-left'</span><span class="token punctuation">,</span>
      <span class="token string">'width'</span><span class="token punctuation">,</span>
      <span class="token string">'min-width'</span><span class="token punctuation">,</span>
      <span class="token string">'max-width'</span><span class="token punctuation">,</span>
      <span class="token string">'height'</span><span class="token punctuation">,</span>
      <span class="token string">'min-height'</span><span class="token punctuation">,</span>
      <span class="token string">'max-height'</span><span class="token punctuation">,</span>
      <span class="token string">'font-size'</span><span class="token punctuation">,</span>
      <span class="token string">'font-family'</span><span class="token punctuation">,</span>
      <span class="token string">'font-weight'</span><span class="token punctuation">,</span>
      <span class="token string">'border'</span><span class="token punctuation">,</span>
      <span class="token string">'border-style'</span><span class="token punctuation">,</span>
      <span class="token string">'border-width'</span><span class="token punctuation">,</span>
      <span class="token string">'border-color'</span><span class="token punctuation">,</span>
      <span class="token string">'border-top'</span><span class="token punctuation">,</span>
      <span class="token string">'border-top-style'</span><span class="token punctuation">,</span>
      <span class="token string">'border-top-width'</span><span class="token punctuation">,</span>
      <span class="token string">'border-top-color'</span><span class="token punctuation">,</span>
      <span class="token string">'border-right'</span><span class="token punctuation">,</span>
      <span class="token string">'border-right-style'</span><span class="token punctuation">,</span>
      <span class="token string">'border-right-width'</span><span class="token punctuation">,</span>
      <span class="token string">'border-right-color'</span><span class="token punctuation">,</span>
      <span class="token string">'border-bottom'</span><span class="token punctuation">,</span>
      <span class="token string">'border-bottom-style'</span><span class="token punctuation">,</span>
      <span class="token string">'border-bottom-width'</span><span class="token punctuation">,</span>
      <span class="token string">'border-bottom-color'</span><span class="token punctuation">,</span>
      <span class="token string">'border-left'</span><span class="token punctuation">,</span>
      <span class="token string">'border-left-style'</span><span class="token punctuation">,</span>
      <span class="token string">'border-left-width'</span><span class="token punctuation">,</span>
      <span class="token string">'border-left-color'</span><span class="token punctuation">,</span>
      <span class="token string">'border-radius'</span><span class="token punctuation">,</span>
      <span class="token string">'text-align'</span><span class="token punctuation">,</span>
      <span class="token string">'text-justify'</span><span class="token punctuation">,</span>
      <span class="token string">'text-indent'</span><span class="token punctuation">,</span>
      <span class="token string">'text-overflow'</span><span class="token punctuation">,</span>
      <span class="token string">'text-decoration'</span><span class="token punctuation">,</span>
      <span class="token string">'white-space'</span><span class="token punctuation">,</span>
      <span class="token string">'color'</span><span class="token punctuation">,</span>
      <span class="token string">'background'</span><span class="token punctuation">,</span>
      <span class="token string">'background-position'</span><span class="token punctuation">,</span>
      <span class="token string">'background-repeat'</span><span class="token punctuation">,</span>
      <span class="token string">'background-size'</span><span class="token punctuation">,</span>
      <span class="token string">'background-color'</span><span class="token punctuation">,</span>
      <span class="token string">'background-clip'</span><span class="token punctuation">,</span>
      <span class="token string">'opacity'</span><span class="token punctuation">,</span>
      <span class="token string">'filter'</span><span class="token punctuation">,</span>
      <span class="token string">'list-style'</span><span class="token punctuation">,</span>
      <span class="token string">'outline'</span><span class="token punctuation">,</span>
      <span class="token string">'visibility'</span><span class="token punctuation">,</span>
      <span class="token string">'box-shadow'</span><span class="token punctuation">,</span>
      <span class="token string">'text-shadow'</span><span class="token punctuation">,</span>
      <span class="token string">'resize'</span><span class="token punctuation">,</span>
      <span class="token string">'transition'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>



</code></pre>
    <h3>
     <a id="_stylelintignore_136">
     </a>
     排除文件 .stylelintignore
    </h3>
    <pre><code class="prism language-javascript">node_modules<span class="token comment">/*
.hbuilderx/*
unpackage/*
uni_modules/*

/dist/
/static/css/common.css


# 其他类型文件
*.js
*.jpg
*.woff

</span></code></pre>
    <h3>
     <a id="stlylelintl__153">
     </a>
     stlylelintl 检查效果
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5c27f8070a106b1b4d248cf8d70beb82.png">
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8d64dff11f557c81f81d4347cd71d936.png"/>
     </img>
    </p>
    <h3>
     <a id="_159">
     </a>
     设置快快捷键自动修复
    </h3>
    <pre><code class="prism language-javascript"><span class="token comment">//可以 全局安装一下  安装完成后</span>
<span class="token comment">//  C:\Program Files\nodejs\stylelint.cmd</span>
<span class="token comment">//  $FileName$ --fix</span>
<span class="token comment">//  $FileDir$</span>
npm i stylelint <span class="token operator">-</span>g
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/76fa2a47850ca511a164a1caba69c7d0.png">
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c0669740bb4f6489cc30ffa87c1d9b62.png"/>
     </img>
    </p>
    <h3>
     <a id="_172">
     </a>
     修改效果
    </h3>
    <p>
     按自己设定的快捷键后会自动修复，有写问题自动修复失败的 还是要手动修复的
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f1f1c5904af949b23fb3a26d5197ce62.png"/>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



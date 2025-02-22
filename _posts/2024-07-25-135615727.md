---
layout: post
title: HarmonyOS
date: 2024-07-25 14:56:11 +0800
categories: [华为]
tags: [华为,harmonyos]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=135615727
    alt: HarmonyOS
artid: 135615727
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     HarmonyOS
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p>
     <strong>
      Error:
     </strong>
    </p>
    <p>
     App Launch:
    </p>
    <p>
     To run and debug the Harmony device, configure the HarmonyOS runtime.
    </p>
    <p>
    </p>
    <p>
     解决：build-profile.json5
    </p>
    <pre><code class="hljs">{
  "apiType": 'stageMode',
  "buildOption": {
  },
  "targets": [
    {
      "name": "default",
      "runtimeOS": "HarmonyOS"
    }
  ]
</code></pre>
    <p>
    </p>
   </div>
  </div>
 </article>
</div>



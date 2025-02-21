---
layout: post
title: Python系列Python-中的日期和时间处理
date: 2024-11-10 16:25:19 +0800
categories: [s1Python]
tags: [开发语言,python]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=139704397
    alt: Python系列Python-中的日期和时间处理
artid: 139704397
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【Python系列】Python 中的日期和时间处理
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
    <blockquote>
     <p>
      💝💝💝欢迎来到我的博客，很高兴能够在这里和您见面！希望您在这里可以感受到一份轻松愉快的氛围，不仅可以获得有趣的内容和知识，也可以畅所欲言、分享您的想法和见解。
      <br/>
      <img alt="img" src="https://i-blog.csdnimg.cn/blog_migrate/5b7d56665d406fee3159289ac61fa974.jpeg#pic_center"/>
     </p>
     <ul>
      <li>
       推荐:
       <a href="https://qinyingjie.blog.csdn.net/?type=blog" rel="nofollow">
        kwan 的首页
       </a>
       ,持续学习,不断总结,共同进步,活到老学到老
      </li>
      <li>
       导航
       <ul>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_11763029.html">
          檀越剑指大厂系列
         </a>
         :全面总结 java 核心技术,jvm,并发编程 redis,kafka,Spring,微服务等
        </li>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_11474211.html">
          常用开发工具系列
         </a>
         :常用的开发工具,IDEA,Mac,Alfred,Git,typora 等
        </li>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_11474265.html">
          数据库系列
         </a>
         :详细总结了常用数据库 mysql 技术点,以及工作中遇到的 mysql 问题等
        </li>
        <li>
         <a href="https://meihua150.cn/" rel="nofollow">
          新空间代码工作室
         </a>
         :提供各种软件服务,承接各种毕业设计,毕业论文等
        </li>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_7540627.html">
          懒人运维系列
         </a>
         :总结好用的命令,解放双手不香吗?能用一个命令完成绝不用两个操作
        </li>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_11480075.html">
          数据结构与算法系列
         </a>
         :总结数据结构和算法,不同类型针对性训练,提升编程思维,剑指大厂
        </li>
       </ul>
      </li>
     </ul>
     <p>
      非常期待和您一起在这个小小的网络世界里共同探索、学习和成长。💝💝💝 ✨✨ 欢迎订阅本专栏 ✨✨
     </p>
    </blockquote>
    <p>
    </p>
    <div class="toc">
     <h4>
      博客目录
     </h4>
     <ul>
      <li>
       <ul>
        <li>
         <a href="#1__19" rel="nofollow">
          1. 理解时间戳
         </a>
        </li>
        <li>
         <a href="#2_Python__datetime__23" rel="nofollow">
          2. Python 中的 datetime 模块
         </a>
        </li>
        <li>
         <a href="#3__datetime__27" rel="nofollow">
          3. 将时间戳转换为 datetime 对象
         </a>
        </li>
        <li>
         <a href="#4__44" rel="nofollow">
          4. 比较时间戳与特定日期
         </a>
        </li>
        <li>
         <a href="#5__59" rel="nofollow">
          5. 处理时间戳的注意事项
         </a>
        </li>
        <li>
         <a href="#6__67" rel="nofollow">
          6. 时间戳的应用场景
         </a>
        </li>
        <li>
         <a href="#7__77" rel="nofollow">
          7. 结论
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <p>
     在计算机科学中，时间戳是一个非常重要的概念，它表示了一个特定的时间点。时间戳通常以自 1970 年 1 月 1 日 00:00:00 UTC 起经过的秒数或毫秒数来表示。在 Python 编程语言中，处理日期和时间的任务通常由
     <code>
      datetime
     </code>
     模块来完成。本文将介绍如何使用 Python 的
     <code>
      datetime
     </code>
     模块来比较时间戳，并判断一个给定的时间戳是否大于特定的日期。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a941281c197956886cb8642a64d24790.png#pic_center"/>
    </p>
    <h3>
     <a id="1__19">
     </a>
     1. 理解时间戳
    </h3>
    <p>
     时间戳有两种常见的格式：秒级和毫秒级。秒级时间戳是自 1970 年 1 月 1 日起经过的秒数，而毫秒级时间戳则记录了经过的毫秒数。在 Python 中，
     <code>
      datetime
     </code>
     模块的
     <code>
      fromtimestamp()
     </code>
     函数接受秒级时间戳作为参数。如果时间戳是毫秒级，需要先将其转换为秒。
    </p>
    <h3>
     <a id="2_Python__datetime__23">
     </a>
     2. Python 中的 datetime 模块
    </h3>
    <p>
     <code>
      datetime
     </code>
     模块提供了日期和时间的类，包括
     <code>
      date
     </code>
     、
     <code>
      time
     </code>
     、
     <code>
      datetime
     </code>
     和
     <code>
      timedelta
     </code>
     等。
     <code>
      datetime
     </code>
     类是处理日期和时间的主要工具，它可以表示一个具体的日期和时间。
    </p>
    <h3>
     <a id="3__datetime__27">
     </a>
     3. 将时间戳转换为 datetime 对象
    </h3>
    <p>
     在 Python 中，可以使用
     <code>
      datetime.fromtimestamp()
     </code>
     方法将时间戳转换为
     <code>
      datetime
     </code>
     对象。如果时间戳是毫秒级，需要将其除以 1000 转换为秒。以下是转换的示例代码：
    </p>
    <pre><code class="prism language-python"><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime

<span class="token comment"># 假设的时间戳（毫秒级）</span>
create_time_timestamp <span class="token operator">=</span> <span class="token number">1716548680000</span>

<span class="token comment"># 将毫秒级时间戳转换为秒</span>
create_time_seconds <span class="token operator">=</span> create_time_timestamp <span class="token operator">/</span> <span class="token number">1000</span>

<span class="token comment"># 转换为datetime对象</span>
create_time <span class="token operator">=</span> datetime<span class="token punctuation">.</span>fromtimestamp<span class="token punctuation">(</span>create_time_seconds<span class="token punctuation">)</span>
</code></pre>
    <h3>
     <a id="4__44">
     </a>
     4. 比较时间戳与特定日期
    </h3>
    <p>
     一旦时间戳被转换为
     <code>
      datetime
     </code>
     对象，就可以使用比较运算符来比较它与特定的日期。例如，我们可以比较时间戳是否大于 2024 年 1 月 1 日：
    </p>
    <pre><code class="prism language-python"><span class="token comment"># 指定的日期</span>
compare_date <span class="token operator">=</span> datetime<span class="token punctuation">(</span><span class="token number">2024</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 比较时间</span>
<span class="token keyword">if</span> create_time <span class="token operator">&gt;</span> compare_date<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"createTime is greater than 2024-01-01"</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"createTime is not greater than 2024-01-01"</span><span class="token punctuation">)</span>
</code></pre>
    <h3>
     <a id="5__59">
     </a>
     5. 处理时间戳的注意事项
    </h3>
    <p>
     在处理时间戳时，需要注意以下几点：
    </p>
    <ul>
     <li>
      确保时间戳的格式正确，是秒级还是毫秒级。
     </li>
     <li>
      时区问题：
      <code>
       fromtimestamp()
      </code>
      函数默认使用本地时区。如果需要处理 UTC 时间，可以使用
      <code>
       datetime.utcfromtimestamp()
      </code>
      。
     </li>
     <li>
      异常处理：在实际应用中，应该对时间戳的格式和值进行验证，避免转换错误或无效值。
     </li>
    </ul>
    <h3>
     <a id="6__67">
     </a>
     6. 时间戳的应用场景
    </h3>
    <p>
     时间戳在许多应用场景中都非常有用，例如：
    </p>
    <ul>
     <li>
      日志记录：记录事件发生的时间。
     </li>
     <li>
      数据库：存储和查询数据的时间戳。
     </li>
     <li>
      定时任务：设置任务执行的时间点。
     </li>
     <li>
      版本控制：记录文件的最后修改时间。
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/25422c3d04dc03292f1e49b70cfe4115.png#pic_center"/>
     </li>
    </ul>
    <h3>
     <a id="7__77">
     </a>
     7. 结论
    </h3>
    <p>
     通过 Python 的
     <code>
      datetime
     </code>
     模块，我们可以方便地处理和比较时间戳。理解时间戳的格式和如何将其转换为
     <code>
      datetime
     </code>
     对象是进行日期和时间比较的关键。在实际开发中，合理地使用时间戳可以提高程序的效率和准确性。
    </p>
    <blockquote>
     <p>
      觉得有用的话点个赞
      <code>
       👍🏻
      </code>
      呗。
      <br/>
      ❤️❤️❤️本人水平有限，如有纰漏，欢迎各位大佬评论批评指正！😄😄😄
     </p>
     <p>
      💘💘💘如果觉得这篇文对你有帮助的话，也请给个点赞、收藏下吧，非常感谢!👍 👍 👍
     </p>
     <p>
      🔥🔥🔥Stay Hungry Stay Foolish 道阻且长,行则将至,让我们一起加油吧！🌙🌙🌙
     </p>
     <p>
      <img alt="img" src="https://i-blog.csdnimg.cn/blog_migrate/101469850485989da7dda6f53e80e19d.gif#pic_center"/>
     </p>
    </blockquote>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



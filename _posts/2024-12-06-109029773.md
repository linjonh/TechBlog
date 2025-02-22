---
layout: post
title: 2024-12-06-Python的enumerate函数
date: 2024-12-06 09:24:35 +0800
categories: []
tags: [编程语言,python]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=109029773
  alt: Python的enumerate函数
artid: 109029773
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Python的enumerate函数
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-dracula" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
     Python 的 enumerate() 函数就像是一个神秘的黑箱，你无法简单地用一句话来概括这个函数的作用与用法。
    </p>
    <p>
     enumerate() 函数属于非常有用的高级用法，而对于这一点，很多初学者甚至中级学者都没有意识到。这个函数的基本应用就是用来遍历一个集合对象，它在遍历的同时还可以得到当前元素的索引位置。
    </p>
    <p>
     我们看一个例子：
    </p>
    <pre><code class="prism language-python">names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Alice"</span><span class="token punctuation">,</span><span class="token string">"Bob"</span><span class="token punctuation">,</span><span class="token string">"Carl"</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span>value <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>index<span class="token punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>value<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
</code></pre>
    <p>
     这段代码会输入如下内容：
    </p>
    <pre><code class="prism language-python"><span class="token number">0</span><span class="token punctuation">:</span> Alice
<span class="token number">1</span><span class="token punctuation">:</span> Bob
<span class="token number">2</span><span class="token punctuation">:</span> Carl
</code></pre>
    <p>
     正如你所看到的，这个循环遍历了names列表的所有元素，并通过增加从零开始的计数器变量来为每个元素生成索引。
    </p>
    <p>
     [如果您想知道上面例子中使用的f’…'字符串语法，这是Python 3.6及更高版本中提供的一种新的字符串格式化技巧。]
    </p>
    <p>
     <strong>
      用enumerate()让你的循环更加Python化
     </strong>
    </p>
    <p>
     那么为什么用enumerate()函数去保存运行中的索引很有用呢？
    </p>
    <p>
     我发现，有很多从C或Java背景转过来的新的Python开发人员有时使用下面这种range(len(…))方法来保存运行中每个元素的索引，同时再用for循环遍历列表：
    </p>
    <pre><code class="prism language-python"><span class="token triple-quoted-string string">'''
遇到问题没人解答？小编创建了一个Python学习交流QQ群：778463939
寻找有志同道合的小伙伴，互帮互助,群里还有不错的视频学习教程和PDF电子书！
'''</span>
<span class="token comment"># 警告: 不建议这么写</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>my_items<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> my_items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     通过巧妙地使用enumerate()函数，就像我在上面的“names”例子中写的那样，你可以使你的循环结构看起来更Pythonic和地道。
    </p>
    <p>
     你不再需要在Python代码中专门去生成元素索引，而是将所有这些工作都交给enumerate()函数处理即可。这样，你的代码将更容易被阅读，而且减少写错代码的影响。（译者注：写的代码越多，出错几率越高，尽量将自己的代码看起来简洁，易读，Pythonic，才是我们的追求)
    </p>
    <p>
     <strong>
      修改起始索引
     </strong>
    </p>
    <p>
     另一个有用的特性是，enumerate()函数允许我们为循环自定义起始索引值。enumerate()函数中接受一个可选参数，该参数允许你为本次循环中的计数器变量设置初始值：
    </p>
    <pre><code class="prism language-python"><span class="token triple-quoted-string string">'''
遇到问题没人解答？小编创建了一个Python学习交流QQ群：778463939
寻找有志同道合的小伙伴，互帮互助,群里还有不错的视频学习教程和PDF电子书！
'''</span>
names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Alice"</span><span class="token punctuation">,</span><span class="token string">"Bob"</span><span class="token punctuation">,</span><span class="token string">"Carl"</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span>value <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>names<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>index<span class="token punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>value<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
</code></pre>
    <p>
     在上面的例子中，我将函数调用改为enumerate(names, 1)，后面的参数1就是本次循环的起始索引，替换默认的0：
    </p>
    <pre><code class="prism language-python"><span class="token number">1</span><span class="token punctuation">:</span> Alice
<span class="token number">2</span><span class="token punctuation">:</span> Bob
<span class="token number">3</span><span class="token punctuation">:</span> Carl
</code></pre>
    <p>
     OK，这段代码演示的就是如何将Python的enumerate()函数默认0起始索引值修改为1（或者其他任何整形值，根据需求去设置不同值）
    </p>
    <p>
     <strong>
      enumerate()背后是如何工作的
     </strong>
    </p>
    <p>
     你可能想知道enumerate()函数背后是如何工作的。事实上他的部分魔法是通过Python迭代器来实现的。意思就是每个元素的索引是懒加载的（一个接一个，用的时候生成），这使得内存使用量很低并且保持这个结构运行很快。
    </p>
    <p>
     请看如下代码：
    </p>
    <pre><code class="prism language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Alice'</span><span class="token punctuation">,</span> <span class="token string">'Bob'</span><span class="token punctuation">,</span> <span class="token string">'Carl'</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token builtin">enumerate</span> <span class="token builtin">object</span> at <span class="token number">0x1057f4120</span><span class="token operator">&gt;</span>
</code></pre>
    <p>
     在上面这个代码片段中，正如你所见，我使用了和前面一样的示例代码。但是，调用enumerate()函数并不会立即返回循环的结果，而只是在控制台中返回了一个enumerate对象。
    </p>
    <p>
     正如你所看到的，这是一个“枚举对象”。它的确是一个迭代器。就像我说的，它会在循环请求时懒加载地输出每个元素。
    </p>
    <p>
     为了验证，我们可以取出那些“懒加载”的元素，我计划在这个迭代器上调用Python的内置函数list()。
    </p>
    <pre><code class="prism language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">enumerate</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'Alice'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'Bob'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'Carl'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre>
    <p>
     对于输入list()中的每个enumerate()迭代器元素，迭代器会返回一个形式为（index，element）的元组作为list的元素。在典型的for-in循环中，你可以利用Python的数据结构解包功能来充分利用这一点特性：
    </p>
    <pre><code class="prism language-python"><span class="token keyword">for</span> index<span class="token punctuation">,</span> element <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>iterable<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># ...</span>
</code></pre>
    <p>
     <strong>
      总结：Python中的enumerate函数 - 关键点
     </strong>
    </p>
    <ul>
     <li>
      enumerate是Python的一个内置函数。你应该充分利用它通过循环迭代自动生成的索引变量。
     </li>
     <li>
      索引值默认从0开始，但也可以将其设置为任何整数。
     </li>
     <li>
      enumerate函数是从2.3版本开始被添加到Python中的
     </li>
     <li>
      Python的enumerate函数可以帮助你编写出更加Pythonic和地道的循环结构，避免使用笨重且容易出错的手动生成索引。
     </li>
     <li>
      为了充分利用enumerate的特性，一定要研究Python的迭代器和数据结构解包功能。
     </li>
    </ul>
    <p>
     <strong>
      结尾给大家推荐一个非常好的学习教程，希望对你学习Python有帮助！
     </strong>
    </p>
    <p>
     Python基础入门教程推荐：更多Python视频教程-关注B站：Python学习者
     <br/>
     <a href="https://www.bilibili.com/video/BV1LL4y1h7ny?share_source=copy_web" rel="nofollow">
      Python基础入门教程
     </a>
    </p>
    <p>
     Python爬虫案例教程推荐：更多Python视频教程-关注B站：Python学习者
     <br/>
     <a href="https://www.bilibili.com/video/BV1QZ4y1N7YA?share_source=copy_web" rel="nofollow">
      Python爬虫案例
     </a>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f67:2e6373646e2e6e65742f73696e61745f33383638323836302f:61727469636c652f64657461696c732f313039303239373733

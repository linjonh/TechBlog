---
layout: post
title: 2024-10-30-python的input函数用法
date: 2024-10-30 15:51:23 +0800
categories: [python基础用法]
tags: [python,经验分享,其他]
image:
  path: https://img-blog.csdnimg.cn/33d80ad6c97a49609f6ca71fced5f5d4.png?x-oss-process=image/resize,m_fixed,h_150
  alt: python的input函数用法
artid: 124978009
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     python的input函数用法
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p id="main-toc">
     <strong>
      目录
     </strong>
    </p>
    <p id="1.input%E7%9A%84%E8%AF%AD%E6%B3%95%E5%8F%8A%E7%94%A8%E6%B3%95-toc" style="margin-left:0px;">
     <a href="#1.input%E7%9A%84%E8%AF%AD%E6%B3%95%E5%8F%8A%E7%94%A8%E6%B3%95" rel="nofollow">
      1.input的语法及用法
     </a>
    </p>
    <p id="%EF%BC%881%EF%BC%89%E8%AF%AD%E6%B3%95%EF%BC%9Ainput(%3Ctips%3E)-toc" style="margin-left:40px;">
     <a href="#%EF%BC%881%EF%BC%89%E8%AF%AD%E6%B3%95%EF%BC%9Ainput%28%3Ctips%3E%29" rel="nofollow">
      （1）语法：input()
     </a>
    </p>
    <p id="%EF%BC%882%EF%BC%89%E7%94%A8%E6%B3%95%EF%BC%9A%E8%BF%90%E8%A1%8C%E4%BB%A3%E7%A0%81%E4%B9%8B%E5%90%8E%E5%8F%AF%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BE%93%E5%85%A5%E7%9B%AE%E6%A0%87%E6%95%B0%E6%8D%AE%EF%BC%8C%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%E4%B8%BAstr%EF%BC%88%E5%AD%97%E7%AC%A6%E4%B8%B2%EF%BC%89%E7%B1%BB%E5%9E%8B%E3%80%82-toc" style="margin-left:40px;">
     <a href="#%EF%BC%882%EF%BC%89%E7%94%A8%E6%B3%95%EF%BC%9A%E8%BF%90%E8%A1%8C%E4%BB%A3%E7%A0%81%E4%B9%8B%E5%90%8E%E5%8F%AF%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BE%93%E5%85%A5%E7%9B%AE%E6%A0%87%E6%95%B0%E6%8D%AE%EF%BC%8C%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%E4%B8%BAstr%EF%BC%88%E5%AD%97%E7%AC%A6%E4%B8%B2%EF%BC%89%E7%B1%BB%E5%9E%8B%E3%80%82" rel="nofollow">
      （2）用法：运行代码之后可自定义输入目标数据，返回结果为str（字符串）类型。
     </a>
    </p>
    <p id="2.%E5%AE%9E%E4%BE%8B-toc" style="margin-left:0px;">
     <a href="#2.%E5%AE%9E%E4%BE%8B" rel="nofollow">
      2.实例
     </a>
    </p>
    <p id="%EF%BC%881%EF%BC%89%E7%AE%80%E5%8D%95%E7%94%A8%E6%B3%95%EF%BC%9A%E7%9B%B4%E6%8E%A5%E6%8F%90%E7%A4%BA%E8%BE%93%E5%87%BA%EF%BC%8C%E5%8F%AF%E7%94%A8%E4%BA%8E%E8%B0%83%E8%AF%95%E5%AD%A6%E4%B9%A0input%E5%87%BD%E6%95%B0%E3%80%82%E7%9B%B4%E6%8E%A5%E8%B5%8B%E5%80%BC%E5%BE%97%E5%88%B0%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%82-toc" style="margin-left:40px;">
     <a href="#%EF%BC%881%EF%BC%89%E7%AE%80%E5%8D%95%E7%94%A8%E6%B3%95%EF%BC%9A%E7%9B%B4%E6%8E%A5%E6%8F%90%E7%A4%BA%E8%BE%93%E5%87%BA%EF%BC%8C%E5%8F%AF%E7%94%A8%E4%BA%8E%E8%B0%83%E8%AF%95%E5%AD%A6%E4%B9%A0input%E5%87%BD%E6%95%B0%E3%80%82%E7%9B%B4%E6%8E%A5%E8%B5%8B%E5%80%BC%E5%BE%97%E5%88%B0%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%82" rel="nofollow">
      （1）简单用法：直接提示输出，可用于调试学习input函数。直接赋值得到字符串。
     </a>
    </p>
    <p id="%EF%BC%882%EF%BC%89%E4%B8%8Eint%E5%87%BD%E6%95%B0%E7%BB%93%E5%90%88%E4%BD%BF%E7%94%A8%EF%BC%8C%E4%B8%BA%E5%8F%98%E9%87%8F%E8%B5%8B%E6%95%B4%E6%95%B0%E5%80%BC%E3%80%82-toc" style="margin-left:40px;">
     <a href="#%EF%BC%882%EF%BC%89%E4%B8%8Eint%E5%87%BD%E6%95%B0%E7%BB%93%E5%90%88%E4%BD%BF%E7%94%A8%EF%BC%8C%E4%B8%BA%E5%8F%98%E9%87%8F%E8%B5%8B%E6%95%B4%E6%95%B0%E5%80%BC%E3%80%82" rel="nofollow">
      （2）与int函数结合使用，为变量赋整数值。
     </a>
    </p>
    <p id="%EF%BC%883%EF%BC%89%E4%B8%8Efloat%E5%87%BD%E6%95%B0%E7%BB%93%E5%90%88%E4%BD%BF%E7%94%A8%EF%BC%8C%E4%B8%BA%E5%8F%98%E9%87%8F%E8%B5%8B%E6%B5%AE%E7%82%B9%E6%95%B0%E5%80%BC%E3%80%82-toc" style="margin-left:40px;">
     <a href="#%EF%BC%883%EF%BC%89%E4%B8%8Efloat%E5%87%BD%E6%95%B0%E7%BB%93%E5%90%88%E4%BD%BF%E7%94%A8%EF%BC%8C%E4%B8%BA%E5%8F%98%E9%87%8F%E8%B5%8B%E6%B5%AE%E7%82%B9%E6%95%B0%E5%80%BC%E3%80%82" rel="nofollow">
      （3）与float函数结合使用，为变量赋浮点数值。
     </a>
    </p>
    <p id="3.%E8%A1%A5%E5%85%85%E7%9F%A5%E8%AF%86%E7%82%B9-toc" style="margin-left:0px;">
     <a href="#3.%E8%A1%A5%E5%85%85%E7%9F%A5%E8%AF%86%E7%82%B9" rel="nofollow">
      3.补充知识点
     </a>
    </p>
    <p id="%EF%BC%881%EF%BC%89float(%3C%E6%95%B0%E5%AD%97%3E)%E7%94%A8%E4%BA%8E%E5%B0%86%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E5%AD%97%E6%88%96%E6%95%B0%E5%80%BC%E5%9E%8B%E6%95%B0%E5%AD%97%E8%BD%AC%E4%B8%BA%E6%B5%AE%E7%82%B9%E6%95%B0%EF%BC%8C%E5%8F%AF%E7%94%A8%E4%BA%8E%E8%AE%A1%E7%AE%97%E3%80%82-toc" style="margin-left:40px;">
     <a href="#%EF%BC%881%EF%BC%89float%28%3C%E6%95%B0%E5%AD%97%3E%29%E7%94%A8%E4%BA%8E%E5%B0%86%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E5%AD%97%E6%88%96%E6%95%B0%E5%80%BC%E5%9E%8B%E6%95%B0%E5%AD%97%E8%BD%AC%E4%B8%BA%E6%B5%AE%E7%82%B9%E6%95%B0%EF%BC%8C%E5%8F%AF%E7%94%A8%E4%BA%8E%E8%AE%A1%E7%AE%97%E3%80%82" rel="nofollow">
      （1）float(&lt;数字&gt;)用于将字符串数字或数值型数字转为浮点数，可用于计算。
     </a>
    </p>
    <p id="%EF%BC%882%EF%BC%89int(%3C%E6%95%B0%E5%AD%97%3E)%E7%94%A8%E4%BA%8E%E5%B0%86%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E5%AD%97%E6%88%96%E6%95%B0%E5%80%BC%E5%9E%8B%E6%95%B0%E5%AD%97%E8%BD%AC%E4%B8%BA%E6%95%B4%E6%95%B0%EF%BC%8C%E5%8F%AF%E7%94%A8%E4%BA%8E%E8%AE%A1%E7%AE%97%E3%80%82-toc" style="margin-left:40px;">
     <a href="#%EF%BC%882%EF%BC%89int%28%3C%E6%95%B0%E5%AD%97%3E%29%E7%94%A8%E4%BA%8E%E5%B0%86%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E5%AD%97%E6%88%96%E6%95%B0%E5%80%BC%E5%9E%8B%E6%95%B0%E5%AD%97%E8%BD%AC%E4%B8%BA%E6%95%B4%E6%95%B0%EF%BC%8C%E5%8F%AF%E7%94%A8%E4%BA%8E%E8%AE%A1%E7%AE%97%E3%80%82" rel="nofollow">
      （2）int(&lt;数字&gt;)用于将字符串数字或数值型数字转为整数，可用于计算。
     </a>
    </p>
    <p id="%EF%BC%883%EF%BC%89type(%3Cobject%3E)%E7%94%A8%E4%BA%8E%E5%88%A4%E6%96%AD%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%E5%8F%AF%E4%B8%BAstr%E3%80%81int%E3%80%81float%E3%80%81list%E7%AD%89%E3%80%82-toc" style="margin-left:40px;">
     <a href="#%EF%BC%883%EF%BC%89type%28%3Cobject%3E%29%E7%94%A8%E4%BA%8E%E5%88%A4%E6%96%AD%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%E5%8F%AF%E4%B8%BAstr%E3%80%81int%E3%80%81float%E3%80%81list%E7%AD%89%E3%80%82" rel="nofollow">
      （3）type()用于判断对象的类型，返回结果可为str、int、float、list等。
     </a>
    </p>
    <hr id="hr-toc"/>
    <p>
    </p>
    <h2>
     1.input的语法及用法
    </h2>
    <h3 id="%EF%BC%881%EF%BC%89%E8%AF%AD%E6%B3%95%EF%BC%9Ainput(%3Ctips%3E)">
     （1）语法：input(&lt;tips&gt;)
    </h3>
    <blockquote>
     <p>
      参数说明
     </p>
     <p>
      tips：提示信息，一般用引号引起来提示输出。
     </p>
    </blockquote>
    <h3 id="%EF%BC%882%EF%BC%89%E7%94%A8%E6%B3%95%EF%BC%9A%E8%BF%90%E8%A1%8C%E4%BB%A3%E7%A0%81%E4%B9%8B%E5%90%8E%E5%8F%AF%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BE%93%E5%85%A5%E7%9B%AE%E6%A0%87%E6%95%B0%E6%8D%AE%EF%BC%8C%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%E4%B8%BAstr%EF%BC%88%E5%AD%97%E7%AC%A6%E4%B8%B2%EF%BC%89%E7%B1%BB%E5%9E%8B%E3%80%82">
     （2）用法：运行代码之后可自定义输入目标数据，返回结果为str（字符串）类型。
    </h3>
    <hr/>
    <h2 id="2.%E5%AE%9E%E4%BE%8B">
     2.实例
    </h2>
    <h3 id="%EF%BC%881%EF%BC%89%E7%AE%80%E5%8D%95%E7%94%A8%E6%B3%95%EF%BC%9A%E7%9B%B4%E6%8E%A5%E6%8F%90%E7%A4%BA%E8%BE%93%E5%87%BA%EF%BC%8C%E5%8F%AF%E7%94%A8%E4%BA%8E%E8%B0%83%E8%AF%95%E5%AD%A6%E4%B9%A0input%E5%87%BD%E6%95%B0%E3%80%82%E7%9B%B4%E6%8E%A5%E8%B5%8B%E5%80%BC%E5%BE%97%E5%88%B0%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%82">
     （1）简单用法：直接提示输出，可用于调试学习input函数。直接赋值得到字符串。
    </h3>
    <p>
     例1：提示输入字符串
    </p>
    <pre><code class="language-python">input('请输入字符串：')</code></pre>
    <p>
     <img alt="" height="213" src="https://i-blog.csdnimg.cn/blog_migrate/3feb6b2d6f639934d55a5a12380a4b90.png" width="728"/>
    </p>
    <p>
     由于没有变量去接收输入的值，所以输入的字符串只是淡出输入。
    </p>
    <p>
     若需要接收输入的值需要用一个变量去接收，而输入的值为赋值。
    </p>
    <pre><code class="language-python">a = input('请输入字符串：')
print(a)
print('a的类型是：',type(a))</code></pre>
    <p>
     <img alt="" height="288" src="https://i-blog.csdnimg.cn/blog_migrate/f7533d213c2371652afba90d9d38ebe6.png" width="839"/>
    </p>
    <p>
     例2：提示输出数值，并赋值。
    </p>
    <pre><code class="language-python">a = input('请输入数值：')
print(a)
print('a的类型是：',type(a))</code></pre>
    <p>
     <img alt="" height="277" src="https://i-blog.csdnimg.cn/blog_migrate/db8bb8c34652ee875f9cf1a139a3352a.png" width="804"/>
    </p>
    <h3 id="%EF%BC%882%EF%BC%89%E4%B8%8Eint%E5%87%BD%E6%95%B0%E7%BB%93%E5%90%88%E4%BD%BF%E7%94%A8%EF%BC%8C%E4%B8%BA%E5%8F%98%E9%87%8F%E8%B5%8B%E6%95%B4%E6%95%B0%E5%80%BC%E3%80%82">
     （2）与int函数结合使用，为变量赋整数值。
    </h3>
    <p>
     例：提示输入数值，并转为整数形式。转为整数即可用来计算。
    </p>
    <pre><code class="language-python">a = int(input('请输入数值：')) #输入数值，并用int转为整数，为变量a赋值
print(a) #输出a
print('a的类型是：',type(a)) #用type函数判断a的类型，输出a的类型
c = a+2 #为c赋值，计算
print(c) #输出c</code></pre>
    <p>
     <img alt="" height="355" src="https://i-blog.csdnimg.cn/blog_migrate/2dc9eab4421366e71c57a325e207bef5.png" width="755"/>
    </p>
    <h3 id="%EF%BC%883%EF%BC%89%E4%B8%8Efloat%E5%87%BD%E6%95%B0%E7%BB%93%E5%90%88%E4%BD%BF%E7%94%A8%EF%BC%8C%E4%B8%BA%E5%8F%98%E9%87%8F%E8%B5%8B%E6%B5%AE%E7%82%B9%E6%95%B0%E5%80%BC%E3%80%82">
     （3）与float函数结合使用，为变量赋浮点数值。
    </h3>
    <p>
     例：提示输入数值，并转为浮点数形式。
    </p>
    <pre><code class="language-python">a = int(input('请输入数值：')) #输入数值，并用float转为浮点数，为变量a赋值
print(a) #输出a
print('a的类型是：',type(a)) #用type函数判断a的类型，输出a的类型
c = a+2 #为c赋值，计算
print(c) #输出c</code></pre>
    <p>
     <img alt="" height="359" src="https://i-blog.csdnimg.cn/blog_migrate/5518726e36ee952ed9e2c237c9d5b726.png" width="912"/>
    </p>
    <p>
     <span style="color:#1a439c;">
      注意：由于input函数返回的结果类型为str，所以若想要将输入的数值用于计算需要调用int函数或者float函数将其转换为可计算的类型。
     </span>
    </p>
    <hr/>
    <h2 id="3.%E8%A1%A5%E5%85%85%E7%9F%A5%E8%AF%86%E7%82%B9">
     3.补充知识点
    </h2>
    <h3 id="%EF%BC%881%EF%BC%89float(%3C%E6%95%B0%E5%AD%97%3E)%E7%94%A8%E4%BA%8E%E5%B0%86%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E5%AD%97%E6%88%96%E6%95%B0%E5%80%BC%E5%9E%8B%E6%95%B0%E5%AD%97%E8%BD%AC%E4%B8%BA%E6%B5%AE%E7%82%B9%E6%95%B0%EF%BC%8C%E5%8F%AF%E7%94%A8%E4%BA%8E%E8%AE%A1%E7%AE%97%E3%80%82">
     （1）float(&lt;数字&gt;)用于将字符串数字或数值型数字转为浮点数，可用于计算。
    </h3>
    <h3 id="%EF%BC%882%EF%BC%89int(%3C%E6%95%B0%E5%AD%97%3E)%E7%94%A8%E4%BA%8E%E5%B0%86%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E5%AD%97%E6%88%96%E6%95%B0%E5%80%BC%E5%9E%8B%E6%95%B0%E5%AD%97%E8%BD%AC%E4%B8%BA%E6%95%B4%E6%95%B0%EF%BC%8C%E5%8F%AF%E7%94%A8%E4%BA%8E%E8%AE%A1%E7%AE%97%E3%80%82">
     （2）int(&lt;数字&gt;)用于将字符串数字或数值型数字转为整数，可用于计算。
    </h3>
    <h3 id="%EF%BC%883%EF%BC%89type(%3Cobject%3E)%E7%94%A8%E4%BA%8E%E5%88%A4%E6%96%AD%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%E5%8F%AF%E4%B8%BAstr%E3%80%81int%E3%80%81float%E3%80%81list%E7%AD%89%E3%80%82">
     （3）type(&lt;object&gt;)用于判断对象的类型，返回结果可为str、int、float、list等。
    </h3>
    <p>
     参考文章：
     <a href="https://www.runoob.com/python/python-func-input.html" rel="nofollow" title="Python input() 函数 | 菜鸟教程 (runoob.com)">
      Python input() 函数 | 菜鸟教程 (runoob.com)
     </a>
    </p>
   </div>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f35303835333937392f:61727469636c652f64657461696c732f313234393738303039

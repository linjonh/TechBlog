---
layout: post
title: python-使用enumerate函数详解
date: 2024-12-08 00:44:23 +0800
categories: [开发语言]
tags: [开发语言,python]
image:
    path: https://img-blog.csdnimg.cn/img_convert/b7b7685a0ead57bdad1ef684cae62192.png?x-oss-process=image/resize,m_fixed,h_150
    alt: python-使用enumerate函数详解
artid: 128077895
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     python 使用enumerate()函数详解
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h3>
     一、enumerate() 函数简介
    </h3>
    <p>
     enumerate()是python的内置函数，将一个可遍历
     <strong>
      iterable
     </strong>
     数据对象(如list列表、tuple元组或str字符串)组合为一个索引序列，同时列出数据和数据下标，一般用在for循环当中。
     <br/>
     函数返回一个enumerate对象，是一个可迭代对象。具体元素值可通过遍历取出。
     <br/>
     函数语法为：
    </p>
    <blockquote>
     <p>
      语法： enumerate(sequence, [start=0])
     </p>
    </blockquote>
    <p>
     参数
     <br/>
     sequence -- 一个序列、迭代器或其他支持迭代对象。
     <br/>
     start -- 下标起始位置。
     <br/>
     返回值
     <br/>
     返回 enumerate(枚举) 对象。
    </p>
    <p>
     函数参数有：
    </p>
    <ul>
     <li>
      sequence是一个可迭代对象
     </li>
     <li>
      start是一个可选参数，表示索引从几开始计数
     </li>
    </ul>
    <p>
     <a name="_label1">
     </a>
    </p>
    <h3>
     二、使用enumerate()函数
    </h3>
    <p>
     <a name="_lab2_1_0">
     </a>
    </p>
    <h4>
     （1）使用for循环
    </h4>
    <table border="0" cellpadding="0" cellspacing="0">
     <tbody>
      <tr>
       <td>
        <p>
         1
        </p>
        <p>
         2
        </p>
        <p>
         3
        </p>
        <p>
         4
        </p>
       </td>
       <td>
        <p>
         <code>
          1
         </code>
         <code>
          、迭代列表时如何访问列表下标索引
         </code>
        </p>
        <p>
         <code>
          ll
         </code>
         <code>
          =
         </code>
         <code>
          [
         </code>
         <code>
          22
         </code>
         <code>
          ,
         </code>
         <code>
          36
         </code>
         <code>
          ,
         </code>
         <code>
          54
         </code>
         <code>
          ,
         </code>
         <code>
          41
         </code>
         <code>
          ,
         </code>
         <code>
          19
         </code>
         <code>
          ,
         </code>
         <code>
          62
         </code>
         <code>
          ,
         </code>
         <code>
          14
         </code>
         <code>
          ,
         </code>
         <code>
          92
         </code>
         <code>
          ,
         </code>
         <code>
          17
         </code>
         <code>
          ,
         </code>
         <code>
          67
         </code>
         <code>
          ]
         </code>
        </p>
        <p>
         <code>
          for
         </code>
         <code>
          i
         </code>
         <code>
          in
         </code>
         <code>
          range
         </code>
         <code>
          (
         </code>
         <code>
          len
         </code>
         <code>
          (ll)):
         </code>
        </p>
        <p>
         <code>
         </code>
         <code>
          print
         </code>
         <code>
          (i,
         </code>
         <code>
          "="
         </code>
         <code>
          , ll[i])
         </code>
        </p>
       </td>
      </tr>
     </tbody>
    </table>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/84b6b666495ecd10dd9c9f40c61eb62d.png"/>
    </p>
    <p>
     <a name="_lab2_1_1">
     </a>
    </p>
    <h4>
     （2）使用enumerate（）
    </h4>
    <table border="0" cellpadding="0" cellspacing="0">
     <tbody>
      <tr>
       <td>
        <p>
         1
        </p>
        <p>
         2
        </p>
        <p>
         3
        </p>
       </td>
       <td>
        <p>
         <code>
          # 优雅版：
         </code>
        </p>
        <p>
         <code>
          for
         </code>
         <code>
          index,item
         </code>
         <code>
          in
         </code>
         <code>
          enumerate
         </code>
         <code>
          (ll):
         </code>
        </p>
        <p>
         <code>
         </code>
         <code>
          print
         </code>
         <code>
          (index,
         </code>
         <code>
          "="
         </code>
         <code>
          ,item)
         </code>
        </p>
       </td>
      </tr>
     </tbody>
    </table>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/b3725a513bb43aca4969231958fee8b4.png"/>
    </p>
    <blockquote>
     <p>
      此外，enumerate()函数还有第二个参数，用于指定索引的起始值
     </p>
    </blockquote>
    <table border="0" cellpadding="0" cellspacing="0">
     <tbody>
      <tr>
       <td>
        <p>
         1
        </p>
        <p>
         2
        </p>
        <p>
         3
        </p>
       </td>
       <td>
        <p>
         <code>
          # 优雅版：
         </code>
        </p>
        <p>
         <code>
          for
         </code>
         <code>
          index,item
         </code>
         <code>
          in
         </code>
         <code>
          enumerate
         </code>
         <code>
          (ll,
         </code>
         <code>
          10
         </code>
         <code>
          ):
         </code>
        </p>
        <p>
         <code>
         </code>
         <code>
          print
         </code>
         <code>
          (index,
         </code>
         <code>
          "="
         </code>
         <code>
          ,item)
         </code>
        </p>
       </td>
      </tr>
     </tbody>
    </table>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/8e6cf6bdd6a52cedc36f79a2a9beb3e6.png"/>
    </p>
   </div>
  </div>
 </article>
</div>



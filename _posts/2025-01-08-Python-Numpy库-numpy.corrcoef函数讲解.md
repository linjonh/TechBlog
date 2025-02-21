---
layout: post
title: Python-Numpy库-numpy.corrcoef函数讲解
date: 2025-01-08 08:49:34 +0800
categories: [python]
tags: [python,numpy,corrcoef()]
image:
    path: https://img-blog.csdnimg.cn/20190331194208226.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5NTE0MDMz,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150
    alt: Python-Numpy库-numpy.corrcoef函数讲解
artid: 88931639
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Python Numpy库  numpy.corrcoef()函数讲解
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
     <img alt="" class="has" height="724" src="https://i-blog.csdnimg.cn/blog_migrate/6d90c07d5ef9315cb3a26daba6673bb3.png" width="1098"/>
    </p>
    <h2>
     例子：
    </h2>
    <p>
     代码：
    </p>
    <pre class="has"><code class="language-python">import numpy as np

Array1 = [[1, 2, 3], [4, 5, 6]]
Array2 = [[11, 25, 346], [734, 48, 49]]
Mat1 = np.array(Array1)
Mat2 = np.array(Array2)
correlation = np.corrcoef(Mat1, Mat2)
print("矩阵1=\n", Mat1)
print("矩阵2=\n", Mat2)
print("相关系数矩阵=\n", correlation)
</code></pre>
    <p>
     结果：
    </p>
    <pre class="has"><code class="language-cpp">矩阵1=
 [[1 2 3]
 [4 5 6]]
矩阵2=
 [[ 11  25 346]
 [734  48  49]]
相关系数矩阵=
 [[ 1.          1.          0.88390399 -0.86539304]
 [ 1.          1.          0.88390399 -0.86539304]
 [ 0.88390399  0.88390399  1.         -0.53057867]
 [-0.86539304 -0.86539304 -0.53057867  1.        ]]

Process finished with exit code 0</code></pre>
    <p>
     可以看出函数的返回值还是一个
     <span style="color:#f33b45;">
      <strong>
       矩阵
      </strong>
     </span>
     ，
    </p>
    <p>
     <span style="color:#86ca5e;">
      结果矩阵的行数*结果矩阵的列数==
     </span>
     <span style="color:#3399ea;">
      矩阵1的行数
     </span>
     *
     <span style="color:#3399ea;">
      矩阵2的行数
     </span>
    </p>
    <p>
     令：
    </p>
    <h4>
     0=[1 2 3]    1=[4 5 6]    2=[11 25 346]    3=[734 48 49]
    </h4>
    <p>
     <span style="color:#f33b45;">
      <strong>
       矩阵中值的意义：
      </strong>
     </span>
    </p>
    <p>
     <span style="color:#f33b45;">
      0列                          1列                             2列                             3列
     </span>
    </p>
    <p>
     <span style="color:#f33b45;">
      0行
     </span>
     <span style="color:#3399ea;">
      0 0 相关性
     </span>
     0 1 相关性                  0 2 相关性                  0 3 相关性
    </p>
    <p>
     <span style="color:#f33b45;">
      1行
     </span>
     1 0 相关性
     <span style="color:#3399ea;">
      1 1 相关性
     </span>
     1 2 相关性                  1 3 相关性
    </p>
    <p>
     <span style="color:#f33b45;">
      2行
     </span>
     2 0 相关性             2 1 相关性
     <span style="color:#3399ea;">
      2 2 相关性
     </span>
     2 3 相关性
    </p>
    <p>
     <span style="color:#f33b45;">
      3行
     </span>
     3 0 相关性             3 1 相关性                  3 2 相关性
     <span style="color:#3399ea;">
      3 3 相关性
     </span>
    </p>
    <p>
    </p>
    <p>
     <span style="color:#f33b45;">
      自己和自己的相关性最大，值为1，所以对角线的值全为1.
     </span>
    </p>
    <p>
     <img alt="" class="has" height="622" src="https://i-blog.csdnimg.cn/blog_migrate/7fb784dcfc00fa8168beb15ff7301f56.png" width="1096"/>
    </p>
   </div>
  </div>
 </article>
</div>



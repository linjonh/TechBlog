---
layout: post
title: 模型参数优化网格搜索对XGBoost分类模型进行参数寻优附python实现代码
date: 2025-01-21 23:23:28 +0800
categories: [智能优化算法和模型参数优化]
tags: [数据库,分类,python]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=138453777
    alt: 模型参数优化网格搜索对XGBoost分类模型进行参数寻优附python实现代码
artid: 138453777
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【模型参数优化】网格搜索对XGBoost分类模型进行参数寻优【附python实现代码】
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-tomorrow-night" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
     <strong>
      写在前面：
      <br/>
      首先感谢兄弟们的订阅，让我有创作的动力，在创作过程我会尽最大能力，保证作品的质量，如果有问题，可以私信我，让我们携手共进，共创辉煌。
     </strong>
    </p>
    <blockquote>
     <p>
      路虽远，行则将至；事虽难，做则必成。只要有愚公移山的志气、滴水穿石的毅力，脚踏实地，埋头苦干，积跬步以至千里，就一定能够把宏伟目标变为美好现实。
     </p>
    </blockquote>
    <p>
     <strong>
      历史文章回顾：
     </strong>
    </p>
    <p>
     <a href="https://blog.csdn.net/AugustMe/article/details/131817897">
      灰狼优化算法：【智能优化算法】灰狼优化算法【附python实现代码】
     </a>
     <br/>
     <a href="https://blog.csdn.net/AugustMe/article/details/131840209">
      白鲸优化算法：【智能优化算法】白鲸优化算法【附python实现代码】
     </a>
     <br/>
     <a href="https://blog.csdn.net/AugustMe/article/details/138303692">
      【智能优化算法】粒子群优化KNN分类算法【附python实现代码】
     </a>
     <br/>
     <a href="https://blog.csdn.net/AugustMe/article/details/137520457">
      【智能优化算法】粒子群优化随机森林分类算法【附python实现代码】
     </a>
     <br/>
     <a href="https://blog.csdn.net/AugustMe/article/details/138305867">
      【智能优化算法】粒子群优化LightGBM分类算法【附python实现代码】
     </a>
     <br/>
     <a href="https://blog.csdn.net/AugustMe/article/details/138439811?spm=1001.2014.3001.5501">
      【模型参数优化】随机搜索对随机森林分类模型进行参数寻优【附python实现代码】
     </a>
     <br/>
     <a href="https://blog.csdn.net/AugustMe/article/details/138437262?spm=1001.2014.3001.5501">
      【模型参数优化】网格搜索对随机森林分类模型进行参数寻优【附python实现代码】
     </a>
     <br/>
     <a href="https://blog.csdn.net/AugustMe/article/details/138450127?spm=1001.2014.3001.5501">
      【模型参数优化】网格搜索对KNN分类模型进行参数寻优【附python实现代码】
     </a>
     <br/>
     <a href="https://blog.csdn.net/AugustMe/article/details/138452437?spm=1001.2014.3001.5501">
      【模型参数优化】网格搜索对lightGBM分类模型进行参数寻优【附python实现代码】
     </a>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8ae77a54d4413ee2398fec199485d3ea.png"/>
    </p>
    <h2>
     <a id="1_18">
     </a>
     1、介绍
    </h2>
    <p>
     网格搜索是一种在多个维度上搜索最优解的方法，主要用于解决多变量问题，特别是寻找极值（包括极小值和极大值）。以下是网格搜索在不同领域的应用和定义：
    </p>
    <ul>
     <li>
      化学领域：网格搜索被定义为在寻找多变量问题的所有极值中，以固定增量改变每个变量的搜索极值的方法。
      <br/>
      信息技术领域：网格搜索通过建立跨越Web的信息分布和集成应用程序逻辑，利用现有的网络基础设施、协议规范、Web和数据库技术，为用户提供一体化的智能信息平台。这个平台的目标是创建一种基于Internet的新一代信息平台和软件基础设施，实现全面的信息资源共享。
     </li>
     <li>
      机器学习和模式识别领域：网格搜索算法是一种数学方法，用于确定最优参数组合以实现最佳性能。这种方法的核心思想是通过枚举某个空间中的所有可能解，并以某种评价准则度量各种解，从而寻求最佳解。通常，可以使用函数的参数空间组成一个网格，并在每个网格点处测试样本，然后根据测试得出的性能结果进行比较，最终确定最有效的参数组合。
     </li>
     <li>
      模型超参数优化：网格搜索也是一项模型超参数优化技术，常用于优化三个或更少数量的超参数。对于每个超参数，使用者选择一个较小的有限集去探索，然后这些超参数的笛卡尔乘积得到若干组超参数。网格搜索使用每组超参数训练模型，并挑选验证集误差最小的超参数作为最好的超参数。
     </li>
    </ul>
    <p>
     总的来说，网格搜索是一种强大的工具，可以在多个维度上搜索最优解，适用于各种领域和问题。
     <br/>
     【From 大模型】
    </p>
    <h2>
     <a id="2_29">
     </a>
     2、实战代码
    </h2>
    <p>
     使用网格搜索对XGBoost分类模型进行参数寻优：
    </p>
    <pre><code class="prism language-py"><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token triple-quoted-string string">"""
Created on Fri May  3 21:55:32 2024

@author: 63454

https://zhuanlan.zhihu.com/p/647588686
"""</span>


<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> GridSearchCV  
<span class="token keyword">from</span> xgboost <span class="token keyword">import</span> XGBClassifier
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_wine  
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split  
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score
<span class="token keyword">import</span> time

  
<span class="token comment"># 加载数据集  </span>
wine <span class="token operator">=</span> load_wine<span class="token punctuation">(</span><span class="token punctuation">)</span>  
X <span class="token operator">=</span> wine<span class="token punctuation">.</span>data  
y <span class="token operator">=</span> wine<span class="token punctuation">.</span>target  
  
<span class="token comment"># 划分训练集和测试集  </span>
X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>  

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"---------------------使用默认参数----------------------------"</span><span class="token punctuation">)</span>
model <span class="token operator">=</span> XGBClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 训练</span>
model<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>
<span class="token comment"># 预测</span>
y_pred <span class="token operator">=</span> model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span>
acc <span class="token operator">=</span> accuracy_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"默认参数 accuracy:"</span><span class="token punctuation">,</span> acc<span class="token punctuation">)</span>
  
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"---------------------参数寻优----------------------------"</span><span class="token punctuation">)</span>
t1 <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 定义参数网格  </span>
param_grid <span class="token operator">=</span> <span class="token punctuation">{<!-- --></span>  
    <span class="token string">'learning_rate'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0.05</span><span class="token punctuation">,</span><span class="token number">0.06</span><span class="token punctuation">,</span><span class="token number">0.07</span><span class="token punctuation">,</span><span class="token number">0.08</span><span class="token punctuation">,</span><span class="token number">0.09</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment"># [500, 600, 700, 800]   </span>
    <span class="token string">'n_estimators'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">700</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment"># [500, 600, 700, 800]    range(100, 500)</span>
    <span class="token string">'max_depth'</span><span class="token punctuation">:</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>  
  

model <span class="token operator">=</span> XGBClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span>  
<span class="token comment"># 初始化网格搜索对象  </span>
grid_search <span class="token operator">=</span> GridSearchCV<span class="token punctuation">(</span>estimator<span class="token operator">=</span>model<span class="token punctuation">,</span> param_grid<span class="token operator">=</span>param_grid<span class="token punctuation">,</span> cv<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> scoring<span class="token operator">=</span><span class="token string">'accuracy'</span><span class="token punctuation">,</span> verbose<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>  
<span class="token comment"># 执行网格搜索  </span>
grid_search<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>  
t2 <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 输出最优参数  </span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Best parameters:"</span><span class="token punctuation">)</span>  
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
<span class="token keyword">print</span><span class="token punctuation">(</span>grid_search<span class="token punctuation">.</span>best_params_<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"time:"</span><span class="token punctuation">,</span> t2<span class="token operator">-</span>t1<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"---------------------最优模型----------------------------"</span><span class="token punctuation">)</span>
model_best_params <span class="token operator">=</span> grid_search<span class="token punctuation">.</span>best_params_
model <span class="token operator">=</span> grid_search<span class="token punctuation">.</span>best_estimator_
<span class="token comment"># 训练</span>
model<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>
<span class="token comment"># 预测</span>
y_pred <span class="token operator">=</span> model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span>
acc <span class="token operator">=</span> accuracy_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"最优参数 accuracy:"</span><span class="token punctuation">,</span> acc<span class="token punctuation">)</span>

</code></pre>
    <p>
     终端输出：
    </p>
    <pre><code>---------------------使用默认参数----------------------------
默认参数 accuracy: 0.8611111111111112

[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=600; total time=   1.1s
[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=600; total time=   1.1s
[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=700; total time=   1.3s
[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=700; total time=   1.1s
[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=700; total time=   1.1s
[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=700; total time=   1.1s
[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=700; total time=   1.1s
[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=800; total time=   1.4s
[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=800; total time=   1.4s
[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=800; total time=   1.4s
[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=800; total time=   1.4s
[CV] END ...learning_rate=0.1, max_depth=7, n_estimators=800; total time=   1.2s
Best parameters:

{'learning_rate': 0.05, 'max_depth': 2, 'n_estimators': 500}
time: 231.58508110046387
---------------------最优模型----------------------------
最优参数 accuracy: 0.9166666666666666
</code></pre>
    <p>
     没有参数优化前，模型精度86.11%，参数优化后91.67%
    </p>
    <h2>
     <a id="3_131">
     </a>
     3、总结
    </h2>
    <p>
     网格搜索（Grid Search）作为一种参数寻优技术，具有其独特的优点和缺点。
    </p>
    <p>
     <strong>
      优点：
     </strong>
    </p>
    <p>
     全面搜索：网格搜索是一种全面的搜索策略，能够穷尽所有参数的所有可能组合。这种策略可以确保在设定的参数范围内，找到最优的参数组合，从而达到最佳的效果，避免陷入局部最优解。
     <br/>
     直观易懂：网格搜索的方法简单直接，易于理解和实现。它通过遍历所有可能的参数组合来找到最优的超参数集，对于初学者来说，是一种非常直观的超参数调优方法。
     <br/>
     适用于参数量较少的情况：在所需设置的参数数目即参数维数较少的情况下，网格搜索算法的运算复杂度往往比较低，同时可以节省时间成本。此外，网格搜索算法可以并行计算，每组参数组合之间是相互独立没有相关联系的，因此可以在一定范围的区间内，从初始位置同时向多个方向出发搜索。
    </p>
    <p>
     <strong>
      缺点：
     </strong>
    </p>
    <p>
     计算成本高：网格搜索的主要缺点是计算成本非常高，尤其是当超参数空间很大或者模型训练时间很长时。因为需要尝试大量的参数组合，这会导致搜索时间过长，甚至在某些情况下变得不实际。
     <br/>
     可能错过最优参数：网格搜索只能在有限的、预设的参数组合中进行搜索，因此可能会错过最优参数。如果预设的参数空间区域小，或者参数的取值范围设置不当，就有可能导致搜索不到最佳的参数值。
     <br/>
     不适用于大规模数据集：对于中等或大规模数据量的搜索问题，网格搜索需要遍历所有参数的所有可能性，这会耗费过多的时间成本，搜索代价高昂。在大多数的设备中，对于几万个待寻优参数，每个参数有数千个候选值的情况，预计需要几天的时间来搜索最佳的参数组合。
     <br/>
     因此，在选择是否使用网格搜索进行参数寻优时，需要根据实际问题的特点和需求进行权衡和选择。对于参数空间较小、计算资源充足的情况，网格搜索是一个不错的选择。然而，对于参数空间较大或计算资源有限的情况，可能需要考虑其他更为高效的参数寻优方法，如随机搜索（Random Search）等。
    </p>
    <p>
     参考：
     <br/>
     https://blog.csdn.net/qq_41076797/article/details/102755904
     <br/>
     https://zhuanlan.zhihu.com/p/647588686
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



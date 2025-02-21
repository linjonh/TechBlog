---
title: 2024-06-05-约束满足问题Constraint-Satisfaction-ProblemsCSPs回溯操作,向前检验,约束传播,局部搜索
date: 2024-06-05 23:08:57 +0800
categories: []
tags: [算法]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=112131166
  alt: 约束满足问题Constraint-Satisfaction-ProblemsCSPs回溯操作,向前检验,约束传播,局部搜索
artid: 112131166
---
<span class="artid" style="display:none" artid=68747470733a2f2f62:6c6f672e6373646e2e6e65742f71715f33393239373035332f:61727469636c652f64657461696c732f313132313331313636></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     约束满足问题（Constraint Satisfaction Problems——CSPs）：回溯操作，向前检验，约束传播，局部搜索
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
      文章目录
     </h4>
     <ul>
      <li>
       <a href="#_9" rel="nofollow">
        前言
       </a>
      </li>
      <li>
       <a href="#_18" rel="nofollow">
        一、约束满足问题是什么？
       </a>
      </li>
      <li>
       <a href="#CSP_37" rel="nofollow">
        二、CSP问题的回溯搜索
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#Backtracking_search_39" rel="nofollow">
          回溯搜索（Backtracking search）
         </a>
        </li>
        <li>
         <a href="#MRV_61" rel="nofollow">
          选择变量的策略一：MRV启发式
         </a>
        </li>
        <li>
         <a href="#degree_66" rel="nofollow">
          选择变量的策略二：度（degree）启发式
         </a>
        </li>
        <li>
         <a href="#Least_constraining_value_71" rel="nofollow">
          选择变量的策略三：最少约束值（Least constraining value）启发式
         </a>
        </li>
        <li>
         <a href="#Forward_checking_81" rel="nofollow">
          向前检验（Forward checking）
         </a>
        </li>
        <li>
         <a href="#Constraint_propagation_93" rel="nofollow">
          约束传播（Constraint propagation）：
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#CSPLocal_search_for_CSPs_106" rel="nofollow">
        三，CSP问题的局部搜索（Local search for CSPs）
       </a>
      </li>
      <li>
       <a href="#In_conclusion_112" rel="nofollow">
        In conclusion
       </a>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <hr color="#000000" size='1"'/>
    <h2>
     <a id="_9">
     </a>
     前言
    </h2>
    <p>
     约束满足问题
     <br/>
     CSP问题的回溯搜索
     <br/>
     约束满足问题的局部搜索
    </p>
    <hr color="#000000" size='1"'/>
    <p>
     <font color="#999AAA">
      提示：以下是本篇文章正文内容，下面案例可供参考
     </font>
    </p>
    <h2>
     <a id="_18">
     </a>
     一、约束满足问题是什么？
    </h2>
    <p>
     约束满足问题包含一组变量和一组变量间的约束。找到所有变量的一个（或多个）赋值，使所有约束都得到满足。
    </p>
    <p>
     举一个经典的例子：澳洲版图的颜色填充（ Map-Coloring）
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c3a503cdb14fdbaac10fc4f2f165add8.png">
      <br/>
      变量集合是各个州郡的单词简写：WA,NT,Q,NSW,V,SA,T
      <br/>
      值域：D={red，green，blue}
      <br/>
      约束：相邻域的颜色不同
     </img>
    </p>
    <p>
     以上就是经典的约束满足问题的例子：颜色填充
     <br/>
     下图则是该问题所有解中的一个
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/372ad0f7d0b8200b8dcb10320876d35f.png">
      <br/>
      为了方便解题，可以将地图转换成约束图（Constraint graph）的方式：节点表示变量，弧表示约束。如下图所示：
      <br/>
      ps：约束分为绝对约束和偏好约束两个等级，绝对约束要求任何违反规则的都排除在解之外；偏好约束指出哪些解是更偏好的。
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/bca8e5b4e86a72b08233afdf330cc381.png"/>
     </img>
    </p>
    <h2>
     <a id="CSP_37">
     </a>
     二、CSP问题的回溯搜索
    </h2>
    <h3>
     <a id="Backtracking_search_39">
     </a>
     回溯搜索（Backtracking search）
    </h3>
    <p>
     回溯搜索与深度优先搜索概念上非常相似：
     <br/>
     但是在DFS中，我们假定通过应用所有可能的操作将节点添加到边缘来扩展节点（然后，如果需要，这些节点将位于边缘上，准备进一步扩展）
     <br/>
     回溯搜索仅需执行一个操作即可生成一个后继节点，然后继续向下操作（然后，如果需要，随后返回该节点，将检查是否可以生成其他任何后继节点。
    </p>
    <p>
     <strong>
      针对填色问题的回溯描述
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f65316deb315dfe80ee4906816ecf05a.png">
      <br/>
      如图，对版图随机挑选一个州进行随机着色，当程序走到图中最下层时出现一个问题，如果程序选择红色框起来的选项，那么在对中下部分的州，进行下一层的着色时发现，没有哪一种颜色可以符合两个州郡之间颜色不一样这一约束的。
     </img>
    </p>
    <p>
     这时程序将返回到红色框圈起来的这一步，并选择与其在同一层的蓝色圆圈的选择，这一当尝试选择失败，返回上一级，对上一级重新做选择的操作成为回溯操作。
    </p>
    <p>
     <strong>
      需要注意的是，一般回溯是顺序试探，可能无用，应有一定的策略避免无用搜索
     </strong>
     。
    </p>
    <p>
     在回溯搜索中，我们可以发现四个问题：
     <br/>
     1，下一步选什么变量？按什么顺序尝试它的值？
     <br/>
     2，如何减少搜索空间？
     <br/>
     3，当前变量与未赋值变量的关系是什么？
     <br/>
     4，如何避免失败，即当一条路径失败时，搜索后面的路径如何避免这种失败
    </p>
    <p>
     下面我们以此解决这些问题
    </p>
    <h3>
     <a id="MRV_61">
     </a>
     选择变量的策略一：MRV启发式
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/422d67435a1ffdcf959446110879a09f.png">
      <br/>
      如图，当我们走完第一步和第二部时，在选择SA为第三步还是Q为第三步，首先分析可供SA和Q选择的颜色数量，我们发现Q有两种颜色可选，而SA只有一种。所以MRV启发式通过优先选择最少剩余量的选项来做出正确选择。
     </img>
    </p>
    <h3>
     <a id="degree_66">
     </a>
     选择变量的策略二：度（degree）启发式
    </h3>
    <p>
     如图所示，着色时按照变量与其他变量之间存在的约束数量由多到少的顺序进行着色。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/eed91c0ab41375fc517de73a8fa92fb2.png"/>
    </p>
    <h3>
     <a id="Least_constraining_value_71">
     </a>
     选择变量的策略三：最少约束值（Least constraining value）启发式
    </h3>
    <p>
     当进行红色方框圈起来的步骤时，有两种着色选择（蓝色和红色），我们尽量不选择之前着色没有出现过的颜色，将更多是颜色选择机会留给后面的操作，即选红色不选蓝色，因为蓝色之前没有出现过。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a50178bdb83614dc6621d6d54df9c478.png">
      <br/>
      <strong>
       减少搜索空间
      </strong>
     </img>
    </p>
    <p>
     减少搜索空间的核心思想是在选择变量取值前就发现矛盾，减少变量值的试探，即减少搜索空间。
    </p>
    <p>
     方法有：向前检验，约束传播，处理特殊约束，智能回溯
    </p>
    <h3>
     <a id="Forward_checking_81">
     </a>
     向前检验（Forward checking）
    </h3>
    <p>
     如图，第一步，当WA选择红色时，在与之有约束关系的NT和SA的值域中删除红色，结果见图中第二行颜色条。
    </p>
    <p>
     第二步，当Q选择绿色时，同理，在与之有约束关系的NT，SA和NSW的值域中都删除绿色，结果如第三行颜色条所示。
    </p>
    <p>
     以此类推，这样做的目的是减少下一次选择时的值域来达到减少搜索空间的目的。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/3ba8bd732f278eea3aa53845dc128c91.png"/>
     <br/>
     <strong>
      但是，向前检查无法检测出矛盾
     </strong>
     ：NT和SA相邻不同取同色，然而经过两次向前检验，NT和SA的值域里都只有蓝色。这就是矛盾所在。
    </p>
    <p>
     解决这一矛盾的方法是约束传播，因为约束满足问题针对变量有值域和约束两方向，而向前传播只考虑的值域，没考虑约束。
    </p>
    <h3>
     <a id="Constraint_propagation_93">
     </a>
     约束传播（Constraint propagation）：
    </h3>
    <p>
     约束传播的含义是将一个变量的约束内容传播到其他变量。
     <br/>
     介绍约束传播之前，要先明白什么是弧相容（Arc consistency）：如果对于变量X的每个值x，变量Y都有某个取值能和x保持相容（相容的意思是满足约束），则X-&gt;Y的弧是相容的。如图：
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9c9962e4d02d250fbe9c194f110392d9.png"/>
     <br/>
     由于SA和NSW有约束关系，所以在约束传播的过程中进行弧相容检测，SA的值域只有蓝色，当SA为蓝色时，NSW可以从它的值域中选择红色来应对，所以这个弧是相容的。
    </p>
    <p>
     如果反过来，由于NSW的值域中有蓝色，当其选择蓝色时，SA的值域没有相容的选项，所以应该再NSW中删除蓝色。如图：
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/527543576284c7eb5f71f40eef5718e3.png"/>
     <br/>
     这里，因为改变的NSW的值域，所以与它有关系的其他变量（Q,SA,V）都要重新进行弧相容检测。
     <br/>
     这就是约束传播。应用弧相容能更早检测到向前检查不能发生的矛盾。可在搜索过程中每次赋值后作约束传播，保持弧相容。
    </p>
    <hr color="#000000" size='1"'/>
    <h2>
     <a id="CSPLocal_search_for_CSPs_106">
     </a>
     三，CSP问题的局部搜索（Local search for CSPs）
    </h2>
    <p>
     局部搜索算法可以求解CSP问题（局部算法在之前的博文里有具体介绍），其中CSP问题的初始状态都要一个赋值，只不过这个赋值可能是不相容的，后续的函数一次改变一个变量取值。启发式选择最小冲突启发式，即选择会造成和其他变量的冲突最小的值。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a8af938f9716a048fe0a301d07c3f5e7.png"/>
     <br/>
     如图所示，以最小冲突为启发式的局部搜索在n皇后问题上相比简单的回溯操作，空间复杂度有巨大的降低（40000K-&gt;4K）
    </p>
    <h2>
     <a id="In_conclusion_112">
     </a>
     In conclusion
    </h2>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a5c94e41b6832dcda4d61264023d671c.png"/>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



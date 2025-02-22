---
layout: post
title: Mysql系列LAG和LEAD函数
date: 2022-12-07 16:59:59 +0800
categories: [s13数据库]
tags: [数据库,mysql,java]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=128223340
    alt: Mysql系列LAG和LEAD函数
artid: 128223340
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【Mysql系列】LAG和LEAD函数
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
        kuan 的首页
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
         :全面总结 java 核心技术点,如集合,jvm,并发编程 redis,kafka,Spring,微服务,Netty 等
        </li>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_11474211.html">
          常用开发工具系列
         </a>
         :罗列常用的开发工具,如 IDEA,Mac,Alfred,electerm,Git,typora,apifox 等
        </li>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_11474265.html">
          数据库系列
         </a>
         :详细总结了常用数据库 mysql 技术点,以及工作中遇到的 mysql 问题等
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
         <a href="#_15" rel="nofollow">
          一.说明
         </a>
        </li>
        <li>
         <a href="#_23" rel="nofollow">
          二.实战
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#1_25" rel="nofollow">
            1.建表
           </a>
          </li>
          <li>
           <a href="#2_54" rel="nofollow">
            2.获取前一行的数据
           </a>
          </li>
          <li>
           <a href="#3_66" rel="nofollow">
            3.获取后一行的数据
           </a>
          </li>
         </ul>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h3>
     <a id="_15">
     </a>
     一.说明
    </h3>
    <p>
     lag() over() 与 lead() over() 函数是跟偏移量相关的两个分析函数，通过这两个函数可以在一次查询中取出同一字段的前 N 行的数据(lag)和后 N 行的数据(lead)作为独立的列,从而更方便地进行进行数据过滤。这种操作可以代替表的自联接，并且 LAG 和 LEAD 有更高的效率。
    </p>
    <p>
     over()表示 lag()与 lead()操作的数据都在 over()的范围内，他里面可以使用 partition by 语句（用于分组） order by 语句（用于排序）。partition by a order by b 表示以 a 字段进行分组，再 以 b 字段进行排序，对数据进行查询。
    </p>
    <p>
     例如：
     <strong>
      lead(field, num, defaultvalue) field 需要查找的字段，num 往后查找的 num 行的数据，defaultvalue 没有符合条件的默认值
     </strong>
    </p>
    <h3>
     <a id="_23">
     </a>
     二.实战
    </h3>
    <h4>
     <a id="1_25">
     </a>
     1.建表
    </h4>
    <pre><code class="prism language-mysql">SHOW TABLES;
#建表  带注释+创建时间
DROP TABLE IF EXISTS `dim_bl_week_info_001`;

# 新建表
CREATE TABLE `dim_bl_week_info_001`
(
    `id`                  int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
    `week_start_day`      date    DEFAULT NULL COMMENT '周开始',
    `week_end_day`        date    DEFAULT NULL COMMENT '周结束',
    `financial_year_week` int(32) DEFAULT NULL COMMENT '第n财年周',
    `financial_year`      int(32) DEFAULT NULL COMMENT '财年',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

TRUNCATE TABLE dim_bl_week_info_001;
INSERT INTO dim_bl_week_info_001 (week_start_day, week_end_day, financial_year_week, financial_year)
VALUES ('2022-10-01', '2022-10-01', 1, 1)
     , ('2022-10-01', '2022-10-02', 2, 2)
     , ('2022-10-01', '2022-10-03', 3, 3);

SELECT *
FROM dim_bl_week_info_001;
</code></pre>
    <h4>
     <a id="2_54">
     </a>
     2.获取前一行的数据
    </h4>
    <pre><code class="prism language-mysql">#前
SELECT id, LAG(id, 1, NULL) OVER (PARTITION BY week_start_day ORDER BY financial_year_week ASC ) next_same_cphm_id
FROM dim_bl_week_info_001
ORDER BY id ASC
;
</code></pre>
    <p>
     <img alt="image-20221207165743863" src="https://i-blog.csdnimg.cn/blog_migrate/15a432a1334776e8667206a6754c9e0d.png"/>
    </p>
    <h4>
     <a id="3_66">
     </a>
     3.获取后一行的数据
    </h4>
    <pre><code class="prism language-mysql">#后
SELECT id, LEAD(id, 1, NULL) OVER (PARTITION BY week_start_day ORDER BY financial_year_week ASC ) next_same_cphm_id
FROM dim_bl_week_info_001
ORDER BY id ASC
;
</code></pre>
    <p>
     <img alt="image-20221207165732721" src="https://i-blog.csdnimg.cn/blog_migrate/c06f39bf7e5d07330e622ad0ffcce4e7.png"/>
    </p>
    <p>
     觉得有用的话点个赞
     <code>
      👍🏻
     </code>
     呗。
    </p>
    <blockquote>
     <p>
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



---
layout: post
title: 2021-12-22-高校学籍管理系统SQL-Server数据库课程设计
date: 2021-12-22 21:46:29 +0800
categories: [SQLserver]
tags: [数据库,sql,高校学籍管理,SQLserver,课程设计]
image:
  path: https://img-blog.csdnimg.cn/0f355479acb74956aed1b7cb0fa107b0.png?x-oss-process&#61;image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA4pic6Ziz5YWJ,size_20,color_FFFFFF,t_70,g_se,x_16
  alt: 高校学籍管理系统SQL-Server数据库课程设计
artid: 122080689
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     高校学籍管理系统（SQL Server数据库课程设计）
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
      目录
     </h4>
     <ul>
      <li>
       <ul>
        <li>
         <a href="#xhangs_bloghttpsxhablogonline_1" rel="nofollow">
          该文章已同步收录到我的博客网站，欢迎浏览我的博客网站，[xhang's blog](https://xhablog.online/)
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#1_3" rel="nofollow">
        1.概述
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#11_4" rel="nofollow">
          1.1数据库设计选题背景
         </a>
        </li>
        <li>
         <a href="#12_6" rel="nofollow">
          1.2功能要求
         </a>
        </li>
        <li>
         <a href="#13_23" rel="nofollow">
          1.3系统功能解决的问题
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#2_31" rel="nofollow">
        2.需求分析
       </a>
      </li>
      <li>
       <a href="#3_47" rel="nofollow">
        3.概念结构设计
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#31_48" rel="nofollow">
          3.1抽象出系统的实体
         </a>
        </li>
        <li>
         <a href="#32_58" rel="nofollow">
          3.2设计实体属性图
         </a>
        </li>
        <li>
         <a href="#33ER_78" rel="nofollow">
          3.3全局E-R图
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#4_81" rel="nofollow">
        4.逻辑结构设计
       </a>
      </li>
      <li>
       <a href="#5_90" rel="nofollow">
        5.数据库物理设计与实施
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#51_91" rel="nofollow">
          5.1数据库关系图
         </a>
        </li>
        <li>
         <a href="#52_96" rel="nofollow">
          5.2表的创建
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#6_402" rel="nofollow">
        6.数据操作要求及实现
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#61_403" rel="nofollow">
          6.1数据查询
         </a>
        </li>
        <li>
         <a href="#62_495" rel="nofollow">
          6.2视图
         </a>
        </li>
        <li>
         <a href="#63_548" rel="nofollow">
          6.3触发器
         </a>
        </li>
        <li>
         <a href="#64_624" rel="nofollow">
          6.4存储过程
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h3>
     <a id="xhangs_bloghttpsxhablogonline_1">
     </a>
     该文章已同步收录到我的博客网站，欢迎浏览我的博客网站，
     <a href="https://xhablog.online/" rel="nofollow">
      xhang’s blog
     </a>
    </h3>
    <p>
     <font color="red">
      <strong>
       说明：本博客为本人期末课程设计，可供学习、借鉴和参考，不可转载。文章最后有百度网盘链接。
      </strong>
     </font>
    </p>
    <h2>
     <a id="1_3">
     </a>
     1.概述
    </h2>
    <h3>
     <a id="11_4">
     </a>
     1.1数据库设计选题背景
    </h3>
    <p>
     随着信息化时代的到来，人们的生活发生了巨大的变化，信息化时代带给了人们更多的处理数据的方式。学生学籍管理是一个非常繁琐且复杂的工作，其中的原因就是涉及到大量的学生学籍数据信息，这样庞大的一个数据群管理起来就想当麻烦，在传统的数据信息管理模式下，工作效率不仅低下，而且数据在存储、更新、删改等操作上会出现错误。基于以上出现的问题，开发一个学籍管理系统就显得很重要。
    </p>
    <h3>
     <a id="12_6">
     </a>
     1.2功能要求
    </h3>
    <p>
     一：实现学生信息、班级、院系、专业等的管理；
    </p>
    <p>
     二：实现课程、学生成绩信息管理；
    </p>
    <p>
     三：实现学生的奖惩信息管理；
    </p>
    <p>
     四：建立数据库相关表之间的参照完整性约束。
    </p>
    <p>
     五：创建规则用于限制性别项只能输入“男”或“女”；
    </p>
    <p>
     六：创建视图查询各个学生的学号、姓名、班级、专业、院系；
    </p>
    <p>
     七：创建触发器当增加、删除学生和修改学生班级信息时自动修改相应班级学生人数；
    </p>
    <p>
     八：创建存储过程查询指定学生的成绩单；
    </p>
    <h3>
     <a id="13_23">
     </a>
     1.3系统功能解决的问题
    </h3>
    <p>
     一：提高管理人员的工作效率。
    </p>
    <p>
     二：对大量的数据信息进行统筹规划
    </p>
    <p>
     三：降低处理数据信息时出现的错误率。
    </p>
    <p>
     四：方便系统的后期维护。
    </p>
    <h2>
     <a id="2_31">
     </a>
     2.需求分析
    </h2>
    <p>
     该高校学籍管理系统主要是实现对大学在校生的学籍信息的系统化管理，具体的功能涉及实现对学生的基本信息、班级、专业、院系等的查询、修改和删除等功能，同时也会实现课程、学生成绩信息管理、实现学生的奖惩信息管理。
    </p>
    <p>
     同时该高校学籍管理系统要创建学生信息视图，具体实现如下：
    </p>
    <p>
     一：创建学生基本信息视图，实现查询各个学生的学号、姓名、班级、专业、院系。
    </p>
    <p>
     二：创建学生成绩视图，实现查询各个学生的学号、姓名、课程、成绩。
    </p>
    <p>
     三：创建学生奖惩视图，实现查询各个学生的学号、姓名、班级、专业、院系、奖惩号、奖惩名、奖惩方案。
    </p>
    <p>
     该高校学籍管理系统要创建触发器当增加、删除学生和修改学生班级信息时自动修改相应班级学生人数。
    </p>
    <p>
     最后，该高校学籍管理系统要创建存储过程查询指定学生的成绩单
    </p>
    <p>
     该学籍管理系统会对学生信息进行系统化管理，在数据和数据之间实现关联性，较大程度的满足用户需求。
    </p>
    <h2>
     <a id="3_47">
     </a>
     3.概念结构设计
    </h2>
    <h3>
     <a id="31_48">
     </a>
     3.1抽象出系统的实体
    </h3>
    <p>
     根据设计学生管理系统的需要，可以抽象出以下实体：
     <br/>
     （1）学生信息
     <br/>
     （2）班级信息
     <br/>
     （3）专业信息
     <br/>
     （4）院系信息
     <br/>
     （5）课程信息
     <br/>
     （6）课程成绩信息
     <br/>
     （7）奖惩信息
    </p>
    <h3>
     <a id="32_58">
     </a>
     3.2设计实体属性图
    </h3>
    <p>
     (1).学生实体属性图
     <br/>
     <img alt="学生实体属性图" src="https://i-blog.csdnimg.cn/blog_migrate/0127d7f30642743e776992c5ae7b6ba6.png">
      <br/>
      (2).班级实体属性图
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e00536d161829a5515ba81710b75cf3e.png">
       <br/>
       (3).专业实体属性图
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/0bdd858fbf18f220fdab7e424fa18792.png">
        <br/>
        (4).院系实体属性图
        <br/>
        <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e77d42f4591c976aac49579d5b9ebd26.png"/>
       </img>
      </img>
     </img>
    </p>
    <p>
     (5).课程实体属性图
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/72fb0aece02a2566066da6803046a613.png">
      <br/>
      (6).课程成绩实体属性图
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/4f74bb8e7fb6784804921b49c47b5f56.png"/>
     </img>
    </p>
    <p>
     (7).奖惩实体属性图
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/39b9026f86b4f2ccec41c98da8f37d9b.png"/>
    </p>
    <h3>
     <a id="33ER_78">
     </a>
     3.3全局E-R图
    </h3>
    <p>
     <img alt="全局E-R图" src="https://i-blog.csdnimg.cn/blog_migrate/ad4babccb370fbaf54475bc265f99717.png"/>
    </p>
    <h2>
     <a id="4_81">
     </a>
     4.逻辑结构设计
    </h2>
    <p>
     关系数据模式
     <br/>
     （1）学生（
     <u>
      学号
     </u>
     ，姓名，性别，班级编号，专业编号，院系编号，民族，年龄，出生日期，家庭地址，入学时间）
     <br/>
     （2）班级（
     <u>
      班级编号
     </u>
     ，专业编号，院系编号，班级名称，人数）
     <br/>
     （3）专业（
     <u>
      专业编号
     </u>
     ，院系编号，专业名称）
     <br/>
     （4）院系（
     <u>
      院系编号
     </u>
     ,院系名称）
     <br/>
     （5）课程（
     <u>
      课程号
     </u>
     ，课程名，学分，学时）
     <br/>
     （6）课程成绩（
     <u>
      课程号
     </u>
     ，
     <u>
      学号
     </u>
     ，成绩）
     <br/>
     （7）奖惩（
     <u>
      奖惩号
     </u>
     ，学号，专业编号，院系编号，奖惩名称，奖惩方案）
    </p>
    <h2>
     <a id="5_90">
     </a>
     5.数据库物理设计与实施
    </h2>
    <h3>
     <a id="51_91">
     </a>
     5.1数据库关系图
    </h3>
    <p>
     根据概念结构设计和逻辑结构的内容，可以将此学籍管理系统设计出7个表，分别为“Student表”、“Class表”、“Major表”、“Department表”、“Course表”、“Grader表”和“Award_punish表”。具体如下：
     <br/>
     这7张表的数据库关系图如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/102221ca54567c51ca0831af3dc849de.png"/>
    </p>
    <h3>
     <a id="52_96">
     </a>
     5.2表的创建
    </h3>
    <p>
     1.Department表 (院系表)
    </p>
    <table>
     <thead>
      <tr>
       <th>
        列名
       </th>
       <th>
        数据类型
       </th>
       <th>
        约束
       </th>
       <th>
        说明
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        Did
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        primary key
       </td>
       <td>
        院系编号
       </td>
      </tr>
      <tr>
       <td>
        Dname
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        not null
       </td>
       <td>
        院系名称
       </td>
      </tr>
     </tbody>
    </table>
    <p>
     2.Major表 (专业表)
    </p>
    <table>
     <thead>
      <tr>
       <th>
        列名
       </th>
       <th>
        数据类型
       </th>
       <th>
        约束
       </th>
       <th>
        说明
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        Mid
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        primary key
       </td>
       <td>
        专业编号
       </td>
      </tr>
      <tr>
       <td>
        Did
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        foreign key
       </td>
       <td>
        院系编号
       </td>
      </tr>
      <tr>
       <td>
        Mname
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        not null
       </td>
       <td>
        专业名称
       </td>
      </tr>
     </tbody>
    </table>
    <p>
     3.Class表 (班级表)
    </p>
    <table>
     <thead>
      <tr>
       <th>
        列名
       </th>
       <th>
        数据类型
       </th>
       <th>
        约束
       </th>
       <th>
        说明
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        Cid
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        primary key
       </td>
       <td>
        班级编号
       </td>
      </tr>
      <tr>
       <td>
        Mid
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        foreign key
       </td>
       <td>
        专业编号
       </td>
      </tr>
      <tr>
       <td>
        Did
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        foreign key
       </td>
       <td>
        院系编号
       </td>
      </tr>
      <tr>
       <td>
        Cname
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        not null
       </td>
       <td>
        班级名称
       </td>
      </tr>
      <tr>
       <td>
        Cnumber
       </td>
       <td>
        int
       </td>
       <td>
        not null
       </td>
       <td>
        班级人数
       </td>
      </tr>
     </tbody>
    </table>
    4.Student表 (学生表)
    <table>
     <thead>
      <tr>
       <th>
        列名
       </th>
       <th>
        数据类型
       </th>
       <th>
        约束
       </th>
       <th>
        说明
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        id
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        primary key
       </td>
       <td>
        学号
       </td>
      </tr>
      <tr>
       <td>
        name
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        not null
       </td>
       <td>
        姓名
       </td>
      </tr>
      <tr>
       <td>
        sex
       </td>
       <td>
        char(2)
       </td>
       <td>
        not null
       </td>
       <td>
        性别
       </td>
      </tr>
      <tr>
       <td>
        Cid
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        foreign key
       </td>
       <td>
        班级编号
       </td>
      </tr>
      <tr>
       <td>
        Mid
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        foreign key
       </td>
       <td>
        专业编号
       </td>
      </tr>
      <tr>
       <td>
        Did
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        foreign key
       </td>
       <td>
        院系编号
       </td>
      </tr>
      <tr>
       <td>
        nation
       </td>
       <td>
        varchar(20)
       </td>
       <td>
        not null
       </td>
       <td>
        民族
       </td>
      </tr>
      <tr>
       <td>
        age
       </td>
       <td>
        int
       </td>
       <td>
        not null
       </td>
       <td>
        年龄
       </td>
      </tr>
      <tr>
       <td>
        birthday
       </td>
       <td>
        date
       </td>
       <td>
        not null
       </td>
       <td>
        出生日期
       </td>
      </tr>
      <tr>
       <td>
        location
       </td>
       <td>
        varchar(20)
       </td>
       <td>
        not null
       </td>
       <td>
        家庭地址
       </td>
      </tr>
      <tr>
       <td>
        enroll
       </td>
       <td>
        date
       </td>
       <td>
        not null
       </td>
       <td>
        入学时间
       </td>
      </tr>
     </tbody>
    </table>
    <p>
     5.Course表 (课程表)
    </p>
    <table>
     <thead>
      <tr>
       <th>
        列名
       </th>
       <th>
        数据类型
       </th>
       <th>
        约束
       </th>
       <th>
        说明
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        kid
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        primary key
       </td>
       <td>
        课程编号
       </td>
      </tr>
      <tr>
       <td>
        Kname
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        not null
       </td>
       <td>
        课程名称
       </td>
      </tr>
      <tr>
       <td>
        Kcredit
       </td>
       <td>
        int
       </td>
       <td>
        not null
       </td>
       <td>
        学分
       </td>
      </tr>
      <tr>
       <td>
        Kperiod
       </td>
       <td>
        int
       </td>
       <td>
        not null
       </td>
       <td>
        学时
       </td>
      </tr>
     </tbody>
    </table>
    <p>
     6.Grade表 (课程成绩表)
    </p>
    <table>
     <thead>
      <tr>
       <th>
        列名
       </th>
       <th>
        数据类型
       </th>
       <th>
        约束
       </th>
       <th>
        说明
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        Kid
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        primary key
       </td>
       <td>
        课程编号
       </td>
      </tr>
      <tr>
       <td>
        id
       </td>
       <td>
        varchar(20)
       </td>
       <td>
        primary key
       </td>
       <td>
        学号
       </td>
      </tr>
      <tr>
       <td>
        Ggrade
       </td>
       <td>
        int
       </td>
       <td>
        not null
       </td>
       <td>
        成绩
       </td>
      </tr>
     </tbody>
    </table>
    7.Award_punish表 (奖惩表)
    <table>
     <thead>
      <tr>
       <th>
        列名
       </th>
       <th>
        数据类型
       </th>
       <th>
        约束
       </th>
       <th>
        说明
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        Aid
       </td>
       <td>
        varchar(20)
       </td>
       <td>
        primary key
       </td>
       <td>
        奖惩号
       </td>
      </tr>
      <tr>
       <td>
        id
       </td>
       <td>
        varchar(20)
       </td>
       <td>
        foreign key
       </td>
       <td>
        学号
       </td>
      </tr>
      <tr>
       <td>
        Mid
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        foreign key
       </td>
       <td>
        专业编号
       </td>
      </tr>
      <tr>
       <td>
        Did
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        foreign key
       </td>
       <td>
        院系编号
       </td>
      </tr>
      <tr>
       <td>
        Aname
       </td>
       <td>
        varchar(30)
       </td>
       <td>
        not null
       </td>
       <td>
        奖惩名
       </td>
      </tr>
      <tr>
       <td>
        Aproject
       </td>
       <td>
        varchar(100)
       </td>
       <td>
        not null
       </td>
       <td>
        奖惩方案
       </td>
      </tr>
     </tbody>
    </table>
    <h2>
     <a id="6_402">
     </a>
     6.数据操作要求及实现
    </h2>
    <h3>
     <a id="61_403">
     </a>
     6.1数据查询
    </h3>
    <p>
     1.查询年龄小于20的学生的基本信息，SQL语句如下：
    </p>
    <pre><code class="prism language-sql">  <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token keyword">where</span> age <span class="token operator">&lt;</span> <span class="token number">20</span>
</code></pre>
    <p>
     查询结果如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/6f9b47f8c2df735df524db7fe278144b.png"/>
     <br/>
     2.查询班级为“软工一班”，且家庭住址的省会为“河南”的学生基本信息，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token keyword">where</span> Cid <span class="token operator">=</span> <span class="token string">'RG1'</span> <span class="token operator">and</span> location <span class="token operator">like</span> <span class="token string">'河南%'</span>
</code></pre>
    <p>
     查询结果如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/26941c65ee7c178d19a6ff8d1f860b47.png"/>
    </p>
    <p>
     3.查询选修了“SJK3”课程的学生的学号、姓名、成绩，其中按照成绩从大到小的顺序排列，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">select</span> Student<span class="token punctuation">.</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>Ggrade <span class="token keyword">from</span> Student<span class="token punctuation">,</span>Grade
<span class="token keyword">where</span> Student<span class="token punctuation">.</span>id <span class="token operator">=</span> Grade<span class="token punctuation">.</span>id <span class="token operator">and</span> Grade<span class="token punctuation">.</span>Kid <span class="token operator">=</span> <span class="token string">'SJK3'</span> 
<span class="token keyword">order</span> <span class="token keyword">by</span> Ggrade <span class="token keyword">desc</span>
</code></pre>
    <p>
     查询结果如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/cf593aa5aab51f54ba48460c17c9deaa.png"/>
    </p>
    <p>
     4.查询选修“大学英语”课程所有学生的平均成绩，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>Ggrade<span class="token punctuation">)</span> 平均成绩 <span class="token keyword">from</span> Grade<span class="token punctuation">,</span>Course 
<span class="token keyword">where</span> Grade<span class="token punctuation">.</span>Kid <span class="token operator">=</span> Course<span class="token punctuation">.</span>Kid 
<span class="token operator">and</span> Course<span class="token punctuation">.</span>Kname <span class="token operator">=</span> <span class="token string">'大学英语'</span>
</code></pre>
    <p>
     查询结果如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/61218fddfdc07047459b087364ae90ea.png"/>
    </p>
    <p>
     5.查询获得“三好学生”称号的学生的学号、姓名、专业编号、院系编号，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">select</span> Student<span class="token punctuation">.</span>id 学号<span class="token punctuation">,</span>name 姓名<span class="token punctuation">,</span>Mname 专业名称<span class="token punctuation">,</span>Dname 院系名称
<span class="token keyword">from</span> Student<span class="token punctuation">,</span>Major<span class="token punctuation">,</span>Department<span class="token punctuation">,</span>Award_punish 
<span class="token keyword">where</span> Student<span class="token punctuation">.</span>id <span class="token operator">=</span> Award_punish<span class="token punctuation">.</span>id
<span class="token operator">and</span> Major<span class="token punctuation">.</span>Mid <span class="token operator">=</span> Award_punish<span class="token punctuation">.</span>Mid
<span class="token operator">and</span> Department<span class="token punctuation">.</span>Did <span class="token operator">=</span> Award_punish<span class="token punctuation">.</span>Did 
<span class="token operator">and</span> Aname <span class="token operator">=</span> <span class="token string">'三好学生'</span>
</code></pre>
    <p>
     查询结果如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/bd8d2223948f632b7630acee63a58734.png"/>
    </p>
    <p>
     6.将家庭地址为“江苏南京”的学生的家庭地址更改为“河南郑州”，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">update</span> Student <span class="token keyword">set</span> location <span class="token operator">=</span> <span class="token string">'河南郑州'</span> <span class="token keyword">where</span> location <span class="token operator">=</span> <span class="token string">'江苏南京'</span>
</code></pre>
    <p>
     更改结果如下图所示。
     <br/>
     更改前：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f3b2838cde12b19fdc8831c164c51b98.png"/>
     <br/>
     更改后：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c5a5e73b3ff538eb79211a0b35e99f2e.png"/>
    </p>
    <p>
     7.将课程“大学英语"的学时更改为68，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">update</span> Course <span class="token keyword">set</span> Kperiod <span class="token operator">=</span> <span class="token number">68</span> <span class="token keyword">where</span> Kname <span class="token operator">=</span> <span class="token string">'大学英语'</span>
</code></pre>
    <p>
     更改结果如下图所示。
     <br/>
     更改前：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9758114e2341e3d5f1dfe66c26fc519f.png"/>
     <br/>
     更改后：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/755474416e002747614e385b73e2a232.png"/>
    </p>
    <p>
     8.删除学号为“”学生的奖惩信息，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">delete</span> <span class="token keyword">from</span> Award_punish <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token string">'201130321'</span>
</code></pre>
    <p>
     删除结果如下图所示。
    </p>
    <p>
     删除前：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/3832b8f0dd11b57a4cd4ce7e5c554f80.png"/>
    </p>
    <p>
     删除后：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/7fa85704488058d734bc97f8d3082bc4.png"/>
    </p>
    <h3>
     <a id="62_495">
     </a>
     6.2视图
    </h3>
    <p>
     1：创建学生基本信息视图，实现查询各个学生的学号、姓名、班级名称、专业名称、院系名称，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">create</span> <span class="token keyword">view</span> A_Student<span class="token punctuation">(</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>Cname<span class="token punctuation">,</span>Mname<span class="token punctuation">,</span>Dname<span class="token punctuation">)</span>
<span class="token keyword">as</span>
<span class="token keyword">select</span> id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>Cname<span class="token punctuation">,</span>Mname<span class="token punctuation">,</span>Dname
<span class="token keyword">from</span> Student<span class="token punctuation">,</span>Class<span class="token punctuation">,</span>Major<span class="token punctuation">,</span>Department
<span class="token keyword">where</span> Class<span class="token punctuation">.</span>Did <span class="token operator">=</span> Department<span class="token punctuation">.</span>Did
<span class="token operator">and</span> Class<span class="token punctuation">.</span>Mid <span class="token operator">=</span> Major<span class="token punctuation">.</span>Mid
<span class="token operator">and</span> Student<span class="token punctuation">.</span>Did <span class="token operator">=</span> Department<span class="token punctuation">.</span>Did
<span class="token operator">and</span> Student<span class="token punctuation">.</span>Mid <span class="token operator">=</span> Major<span class="token punctuation">.</span>Mid
<span class="token keyword">with</span> <span class="token keyword">check</span> <span class="token keyword">option</span>
</code></pre>
    <p>
     视图的执行结果如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/aaae2a888dd2f64ad78ce4a4009ee33a.png"/>
    </p>
    <p>
     2：创建学生成绩视图，实现查询各个学生的学号、姓名、课程、成绩，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">create</span> <span class="token keyword">view</span> B_Grade<span class="token punctuation">(</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>Kname<span class="token punctuation">,</span>Ggrade<span class="token punctuation">)</span>
<span class="token keyword">as</span>
<span class="token keyword">select</span> Student<span class="token punctuation">.</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>Kname<span class="token punctuation">,</span>Ggrade
<span class="token keyword">from</span> Student<span class="token punctuation">,</span>Grade<span class="token punctuation">,</span>Course
<span class="token keyword">where</span> Student<span class="token punctuation">.</span>id <span class="token operator">=</span> Grade<span class="token punctuation">.</span>id
<span class="token operator">and</span> Grade<span class="token punctuation">.</span>Kid <span class="token operator">=</span> Course<span class="token punctuation">.</span>Kid
<span class="token keyword">with</span> <span class="token keyword">check</span> <span class="token keyword">option</span>
</code></pre>
    <p>
     视图的执行结果如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/0b8af090e2e0fd08e6a2b6e9896a87d7.png"/>
    </p>
    <p>
     3：创建学生奖惩视图，实现查询各个学生的学号、姓名、班级、专业、院系、奖惩号、奖惩名、奖惩方案，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">create</span> <span class="token keyword">view</span> C_Award_punish
<span class="token punctuation">(</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>Cname<span class="token punctuation">,</span>Mname<span class="token punctuation">,</span>Dname<span class="token punctuation">,</span>Aid<span class="token punctuation">,</span>Aname<span class="token punctuation">,</span>Aproject<span class="token punctuation">)</span>
<span class="token keyword">as</span>
<span class="token keyword">select</span> Student<span class="token punctuation">.</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>Cname<span class="token punctuation">,</span>Mname<span class="token punctuation">,</span>Dname<span class="token punctuation">,</span>Aid<span class="token punctuation">,</span>Aname<span class="token punctuation">,</span>Aproject
<span class="token keyword">from</span> Student<span class="token punctuation">,</span>Class<span class="token punctuation">,</span>Major<span class="token punctuation">,</span>Department<span class="token punctuation">,</span>Award_punish
<span class="token keyword">where</span> Student<span class="token punctuation">.</span>id <span class="token operator">=</span> Award_punish<span class="token punctuation">.</span>id
<span class="token operator">and</span> Award_punish<span class="token punctuation">.</span>Mid <span class="token operator">=</span> Major<span class="token punctuation">.</span>Mid
<span class="token operator">and</span> Award_punish<span class="token punctuation">.</span>Did <span class="token operator">=</span> Department<span class="token punctuation">.</span>Did
<span class="token operator">and</span> Class<span class="token punctuation">.</span>Did <span class="token operator">=</span> Department<span class="token punctuation">.</span>Did
<span class="token operator">and</span> Class<span class="token punctuation">.</span>Mid <span class="token operator">=</span> Major<span class="token punctuation">.</span>Mid
<span class="token keyword">with</span> <span class="token keyword">check</span> <span class="token keyword">option</span>
</code></pre>
    <p>
     视图的执行结果如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/15a7a18ed18ba52dd3dd1088c7f54370.png"/>
    </p>
    <h3>
     <a id="63_548">
     </a>
     6.3触发器
    </h3>
    <p>
     1.创建触发器，当增加学生班级信息时自动修改相应班级学生人数，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">create</span> <span class="token keyword">trigger</span> insert_stu
<span class="token keyword">on</span> Student <span class="token keyword">for</span> <span class="token keyword">insert</span>
<span class="token keyword">as</span>
 <span class="token keyword">begin</span>
  <span class="token keyword">declare</span> <span class="token variable">@cid</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
  <span class="token keyword">select</span> <span class="token variable">@cid</span><span class="token operator">=</span>Cid <span class="token keyword">from</span> inserted
  <span class="token keyword">update</span> Class <span class="token keyword">set</span> Cnumber <span class="token operator">=</span> Cnumber <span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">where</span> Cid <span class="token operator">=</span> <span class="token variable">@cid</span>
<span class="token keyword">end</span>
</code></pre>
    <p>
     在Student表中插入一条数据：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">insert</span> <span class="token keyword">into</span> Student <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'201130332'</span><span class="token punctuation">,</span><span class="token string">'陈思宇'</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'RG1'</span><span class="token punctuation">,</span><span class="token string">'RJ11'</span><span class="token punctuation">,</span><span class="token string">'RJ111'</span><span class="token punctuation">,</span><span class="token string">'汉族'</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string">'2001-02-03'</span><span class="token punctuation">,</span><span class="token string">'海南文昌'</span><span class="token punctuation">,</span><span class="token string">'2020-09-30'</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     执行结果如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9a23de0c555049b832173df759b24a72.png"/>
    </p>
    <p>
     2.创建触发器，当删除学生班级信息时自动修改相应班级学生人数，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">create</span> <span class="token keyword">trigger</span> delete_stu
<span class="token keyword">on</span> Student <span class="token keyword">for</span> <span class="token keyword">delete</span>
<span class="token keyword">as</span>
 <span class="token keyword">begin</span>
  <span class="token keyword">declare</span> <span class="token variable">@cid</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
  <span class="token keyword">select</span> <span class="token variable">@cid</span><span class="token operator">=</span>Cid <span class="token keyword">from</span> deleted
  <span class="token keyword">update</span> Class <span class="token keyword">set</span> Cnumber <span class="token operator">=</span> Cnumber <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">where</span> Cid <span class="token operator">=</span> <span class="token variable">@cid</span>
 <span class="token keyword">end</span>
</code></pre>
    <p>
     在Student表中删除一条数据：
    </p>
    <pre><code class="prism language-sql"> <span class="token keyword">delete</span> <span class="token keyword">from</span> Student <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">'陈思宇'</span>
</code></pre>
    <p>
     执行结果如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c303c29d39cc2c74f5e0be844aa7aac1.png"/>
    </p>
    <p>
     3.创建触发器，当修改学生班级信息时自动修改相应班级学生人数，SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">create</span> <span class="token keyword">trigger</span> update_stu
<span class="token keyword">on</span> Student <span class="token keyword">for</span> <span class="token keyword">update</span>
<span class="token keyword">as</span>
 <span class="token keyword">begin</span>
  <span class="token keyword">declare</span> <span class="token variable">@cid1</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
  <span class="token keyword">declare</span> <span class="token variable">@cid2</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
  <span class="token comment">--存放更新前的数据</span>
  <span class="token keyword">select</span> <span class="token variable">@cid1</span><span class="token operator">=</span>Cid <span class="token keyword">from</span> deleted
  <span class="token comment">--存放更新后的数据</span>
  <span class="token keyword">select</span> <span class="token variable">@cid2</span><span class="token operator">=</span>Cid <span class="token keyword">from</span> inserted
  <span class="token keyword">update</span> Class <span class="token keyword">set</span> Cnumber <span class="token operator">=</span> Cnumber <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">where</span> Cid <span class="token operator">=</span> <span class="token variable">@cid1</span>
  <span class="token keyword">update</span> Class <span class="token keyword">set</span> Cnumber <span class="token operator">=</span> Cnumber <span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">where</span> Cid <span class="token operator">=</span> <span class="token variable">@cid2</span>
 <span class="token keyword">end</span>
</code></pre>
    <p>
     在Student表中更改一条数据，将王小虎的班级“RG1”更改为“YY1”
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">update</span> Student <span class="token keyword">set</span> Cid <span class="token operator">=</span> <span class="token string">'YY1'</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">'王小虎'</span>
</code></pre>
    <p>
     执行结果如下：
     <br/>
     更改前：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/bc73da967030cc6fc9f9389a40d715f1.png"/>
    </p>
    <p>
     更改后:
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/2f011c8812369c1b2ce9d6205284f486.png"/>
    </p>
    <h3>
     <a id="64_624">
     </a>
     6.4存储过程
    </h3>
    <p>
     1.创建存储过程查询指定学生的成绩单,SQL语句如下：
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">create</span> <span class="token keyword">procedure</span> pro_grade
<span class="token variable">@id</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">null</span><span class="token punctuation">,</span>
<span class="token variable">@name</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">null</span>
 <span class="token keyword">as</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">@id</span> <span class="token operator">is</span> <span class="token boolean">null</span> <span class="token operator">or</span> <span class="token variable">@name</span> <span class="token operator">is</span> <span class="token boolean">null</span> <span class="token punctuation">)</span>
    <span class="token keyword">begin</span> 
      <span class="token keyword">print</span> <span class="token string">'请输入学号与姓名！'</span>
    <span class="token keyword">end</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token keyword">select</span> name <span class="token keyword">from</span> Student <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token variable">@id</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token variable">@name</span> 
    <span class="token operator">or</span> <span class="token punctuation">(</span><span class="token keyword">select</span> id <span class="token keyword">from</span> Student <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token variable">@name</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token variable">@id</span> 
    <span class="token punctuation">)</span>
     <span class="token keyword">begin</span>
      <span class="token keyword">print</span> <span class="token string">'输入有误！'</span>
     <span class="token keyword">end</span>
    <span class="token keyword">else</span>
    <span class="token keyword">begin</span>
      <span class="token keyword">select</span> Student<span class="token punctuation">.</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>Kname<span class="token punctuation">,</span>Ggrade
      <span class="token keyword">from</span> Student<span class="token punctuation">,</span>Grade<span class="token punctuation">,</span>Course
      <span class="token keyword">where</span> Student<span class="token punctuation">.</span>id <span class="token operator">=</span> Grade<span class="token punctuation">.</span>id
      <span class="token operator">and</span> Grade<span class="token punctuation">.</span>Kid <span class="token operator">=</span> Course<span class="token punctuation">.</span>Kid
      <span class="token operator">and</span> name <span class="token operator">=</span> <span class="token variable">@name</span>
    <span class="token keyword">end</span>
 go
</code></pre>
    <p>
     执行结果如下：
     <br/>
     1.当未输入学号或姓名时，提示“请输入学号与姓名！”
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ef8960751f693238d20352f42641a684.png"/>
    </p>
    <p>
     2.当输入信息有误时，提示“输入有误！”
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/414d6fbe30c567d064242899f53abd51.png"/>
    </p>
    <p>
     3.当输入正确的学号和姓名时，打印出该学生的成绩单。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/0b496f6e2f62e2da85111989de53db83.png"/>
     <br/>
     完整数据库课程设计和源码文件：
     <br/>
     链接：https://pan.baidu.com/s/1dzVXTMfNUcJblV81xb3g8g
     <br/>
     提取码：xha8
     <br/>
     <font color="skyblue">
      <strong>
       原创不易，希望大家能给文章点个赞，再关注一下我。
       <font color="red">
        <strong>
         如果对你有帮助，可以小小的鼓励一下
        </strong>
       </font>
       ，有了你的鼓励，优质文章不断更新哦。
      </strong>
     </font>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/4c867c44db8f0c3e8e6c87a26f221123.png"/>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f71715f35323033303832342f:61727469636c652f64657461696c732f313232303830363839</p>

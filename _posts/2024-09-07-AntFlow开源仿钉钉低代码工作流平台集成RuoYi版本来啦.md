---
layout: post
title: 2024-09-07-AntFlow开源仿钉钉低代码工作流平台集成RuoYi版本来啦
date: 2024-09-07 10:03:08 +0800
categories: [AntFlow]
tags: [开源,钉钉,低代码,java]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=141988173
  alt: AntFlow开源仿钉钉低代码工作流平台集成RuoYi版本来啦
artid: 141988173
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     AntFlow开源仿钉钉低代码工作流平台集成RuoYi版本来啦
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
    <blockquote>
     <p>
      AntFlow是一款采用Springboot+Mybatis+activiti+ruoyi+vue3等主流前后端技术开发的仿钉钉工作流引擎，结合中国式办公特点深度定制，可以作为钉钉工作流的开源替代。致力解决传统activiti/flowable流程图必须由专业程序员绘制，学习曲线陡峭，上手难、排查问题难、维护成本高等问题。
     </p>
    </blockquote>
    <h2>
     <a id="_2">
     </a>
     核心特性:
    </h2>
    <ol>
     <li>
      前端使用仿钉钉的流程设计器,配置简单,不需要写表达式,脚本什么的.只需要简单的拖动点击即可完成流程配置,极大降低流程配置难度,让pass化成为可能
     </li>
     <li>
      后台开发简单,只需要实现一个接口即可完成一个新的流程开发
     </li>
     <li>
      结合中国式办公特点精心打造,有众多丰富的的中国式办公功能.诸如流程加批,流程委托,审批人去重,跳过节点,打回修改,变更处理人,流程固定模板通知,自定义模板通知等一应俱全.
     </li>
     <li>
      部署方式灵活,可以嵌入到已有系统,也可以做为独立的流程中台部署.
     </li>
     <li>
      <strong>
       完全免费
      </strong>
      ,付费引导
     </li>
    </ol>
    <h2>
     <a id="ruoyi_9">
     </a>
     前端集成ruoyi
    </h2>
    <p>
     为了方便用户测试功能,我们将流程设计器与RuoYi进行集成,方便大家快速了解功能
    </p>
    <h3>
     <a id="_11">
     </a>
     项目地址
    </h3>
    <ul>
     <li>
      <a href="https://gitee.com/ldhnet/FlowAdmin-vue" rel="nofollow">
       RuoYi集成版地址
      </a>
     </li>
     <li>
      <a href="https://gitee.com/ldhnet/AntFlow-Vue3" rel="nofollow">
       独立设计器地址
      </a>
     </li>
    </ul>
    <blockquote>
     <p>
      Ruoyi集成版方便快速了解功能,流程设计器独立版便于集成已有系统
     </p>
    </blockquote>
    <ul>
     <li>
      <a href="https://gitee.com/tylerzhou/Antflow" rel="nofollow">
       项目后端gitee地址
      </a>
     </li>
     <li>
      <a href="https://github.com/mrtylerzhou/AntFlow-activiti">
       项目后端github地址
      </a>
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/f1fb8f46b163421d96cc7e2d27b5298b.png">
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/60077969d0cc4f45b9cfa087af873d18.png"/>
      </img>
     </li>
    </ul>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/4ee12f1dbacb4ad5a614167f3d2fe875.png">
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/943a411ede4b401cae05318494aa607d.png"/>
     </img>
    </p>
    <h2>
     <a id="_24">
     </a>
     核心技术栈
    </h2>
    <ul>
     <li>
      Java8-21 (main分支为java8版本,如果使用较新java版本,请切换到java17_support分支)
     </li>
     <li>
      Activiti 5.23
     </li>
     <li>
      Spring Boot 2.7.17
     </li>
     <li>
      MybatisPlus 3.5.1
     </li>
     <li>
      MySql 5.7+
     </li>
    </ul>
    <p>
     喜欢的记得给留下个star噢,想要深入了解的可以从项目介绍里加入QQ群
    </p>
    <ul>
     <li>
      <a href="https://gitee.com/ldhnet/FlowAdmin-vue" rel="nofollow">
       RuoYi集成版地址
      </a>
     </li>
     <li>
      <a href="https://gitee.com/ldhnet/AntFlow-Vue3" rel="nofollow">
       独立设计器地址
      </a>
     </li>
     <li>
      <a href="https://gitee.com/tylerzhou/Antflow" rel="nofollow">
       项目后端gitee地址
      </a>
     </li>
     <li>
      <a href="https://github.com/mrtylerzhou/AntFlow-activiti">
       项目后端github地址
      </a>
     </li>
    </ul>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">6874747073:3a2f2f626c6f672e6373646e2e6e65742f7a7970717167632f:61727469636c652f64657461696c732f313431393838313733</p>

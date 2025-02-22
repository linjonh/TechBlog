---
layout: post
title: 2022-04-28-SAP-云平台-Cloud-Platform-架构概述
date: 2022-04-28 10:51:04 +0800
categories: [SAP产品]
tags: [sap,云平台]
image:
  path: https://img-blog.csdnimg.cn/img_convert/418b542343783f5cc40e985e50c97374.png?x-oss-process=image/resize,m_fixed,h_150
  alt: SAP-云平台-Cloud-Platform-架构概述
artid: 124468907
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     SAP 云平台 (Cloud Platform) 架构概述
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h2>
     引言
    </h2>
    <p>
    </p>
    <p>
     在我们开始SAP云平台的架构之旅之前，让我们先看看SAP已经发布的一些其他云产品。这些云产品方案可以分为公有云和私有云两种。
    </p>
    <p>
    </p>
    <p>
     SAP公有云解决方案见下图最右侧，比较著名的有SAP SuccessFactors和SAP Cloud for Customer(C4C)等，作为SAP软件即服务(SaaS)的解决方案。
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/bb4bb610d462ffd3328c7fa807fe7405.png"/>
    </p>
    <p>
    </p>
    <p>
     以SAP C4C为例，软件应用和计算资源均由SAP提供，部署于SAP的数据中心，用户通过Internet来访问使用软件。所有C4C客户以不同租户(tenant)的方式共享SAP数据中心的软硬件资源。
    </p>
    <p>
    </p>
    <p>
     而最左侧的SAP HANA Enterprise Cloud，是SAP一个私有云平台。这个平台上能购买的方案最主要的就是SAP S/4HANA（当然也有Business Suite等）。私有云的客户独享云上的资源。
    </p>
    <p>
    </p>
    <p>
     从第一张图也能看到SAP的云解决方案使用了部分开源技术栈，比如CloudFoundry，可以把它看成是PaaS的操作系统。
    </p>
    <p>
    </p>
    <p>
     下面这张图有两个环形，最里面的环形包裹的是SAP核心业务应用，既有On-Premise的SAP S/4HANA又有基于Cloud的产品。
    </p>
    <p>
    </p>
    <p>
     第二个环形，就是咱们Partner和客户大显身手的地方：通过SAP云平台，我们可以快速构建出轻量级的应用，和SAP核心业务应用做集成。
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/3d2297e1fbd47a05bb29a4a212171d6a.png"/>
    </p>
    <p>
    </p>
    <p>
     SAP云平台能够帮助企业的数字化转型得更敏捷，更高效，更彻底。
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/86601ab9bd85567257a97aec0637fbfe.png"/>
    </p>
    <p>
    </p>
    <h2>
     SAP云平台的架构概述
    </h2>
    <p>
    </p>
    <p>
     通过SAP云平台，您可以方便的扩展现有的On Premise和云解决方案，最大化利用您之前的投资。SAP应用中心 Application Center上有丰富的应用，可以下载并部署到SAP云平台上运行。
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/76db710b581697627c32aa318f0b7e8c.png"/>
    </p>
    <p>
    </p>
    <p>
     On-Premise和Cloud解决方案可以通过SAP云平台连接起来。应用，数据和业务流程也通过SAP云平台成为数字化网格Digital Mesh的一个个节点，从而消除了信息和数据孤岛。
    </p>
    <p>
    </p>
    <p>
     借助SAP云平台您可以尝试将发展迅猛的最新技术集成到SAP传统产品中，比如机器学习，物联网，区块链服务等等。
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/160ed25b5eb67a8c776001833d7d5989.png"/>
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/e6448c99154f7c197881f61efd99dc21.png"/>
    </p>
    <p>
    </p>
    <p>
     先从下图底部黄色区域的基础设施层Infrastructure Layer讲起。为什么在这张图里能看到其他的云平台提供商，比如Amazon，Microsoft和Google？
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/61f12a8d87af6a353efdff705e55de02.png"/>
    </p>
    <p>
    </p>
    <p>
     这就要从SAP云平台的编程环境说起。打开SAP云平台Cockpit，在Region标签页内能发现：Neo编程环境的底层基础设施由SAP自己提供，而CloudFoundry编程环境的底层基础设施由其他公有云基础设施提供商提供。
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/53746ca94157b756ee97cd4e511b1e8e.png"/>
    </p>
    <p>
    </p>
    <p>
     这两种编程环境的具体区别，请参考我的另一篇文章：
     <a href="https://www.jianshu.com/p/6c6db18b06db" rel="nofollow" title="SAP云平台运行环境Cloud Foundry和Neo的区别">
      SAP云平台运行环境Cloud Foundry和Neo的区别
     </a>
     。
    </p>
    <p>
    </p>
    <h2>
     SAP云平台对 Kubernetes 的支持
    </h2>
    <p>
    </p>
    <p>
     SAP 云平台的特色之一，就是通过 Kyma 运行环境，间接提供了对 Kubernetes 平台的支持。
    </p>
    <p>
    </p>
    <p>
     基于Kubernetes的容器编排技术近年来已经成为行业里最流行的云原生应用开发范式之一。SAP云平台的Kubernetes编程环境提供了一种简易，安全，基于业界标准的方式提供了对Kubernetes集群的创建和管理，这种方式基于Cluster-as-a-Service(集群即服务)的方式运作，能运行在多种底层云技术设施上，解决了开发人员需要花大量时间学习Kubernetes底层细节的痛点。
    </p>
    <p>
    </p>
    <p>
     这种Cluster-as-a-Service的服务，SAP通过开源项目Gardener提供访问：https://gardener.cloud/
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/a170ed37da2c32df52651b1a064c961c.png"/>
    </p>
    <p>
    </p>
    <h2>
     SAP云平台对 ABAP 编程环境的支持
    </h2>
    <p>
    </p>
    <p>
     对于以前在 ABAP On-Premises 环境进行二次开发的 ABAP 顾问来说，SAP 云平台 ABAP 编程环境，给这些顾问们提供了一种新的在云端进行二次开发的选择。
    </p>
    <p>
    </p>
    <p>
     笔者之前的文章，曾经提到过一个很有用的 CDS view 注解：
    </p>
    <p>
     @OData.publish: true
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/a578d29263d5467e1d98bba1c307592b.png"/>
    </p>
    <p>
     加上这个注解的CDS view，一旦激活后就会在ABAP Netweaver自动生成一个OData服务，在事务码/IWFND/MAINT_SERVICE里将其搜索出来并添加，就能够以OData服务的方式，消费这个view暴露出来的数据了。
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/410d3ec86c3446329f853113663a73f5.png"/>
    </p>
    <p>
    </p>
    <p>
     那么到了SAP云平台ABAP环境上，因为我们无法访问SAP GUI，所以要实现同样的效果，无法直接照搬上述步骤。幸运的是，在云上进行CDS view暴露的步骤依然简洁，整个过程5分钟就能搞定。
    </p>
    <p>
     用ABAP Development Tools像登录On-Premises ABAP系统那样登录ABAP云环境，新建一个Service definition：
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/0f44d1110efa4082fbc61acc1eb06f9e.png"/>
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/94e7eaf54535f296b0cc6b99c3fefbaf.png"/>
    </p>
    <p>
     在Service的实现体里，使用关键字expose将ABAP环境里的标准view，I_Currency以Service的方式暴露出来。
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/dd67f938a9dc9e6922e4f6a2444dda49.png"/>
    </p>
    <p>
     这个Service需要以Service Binding的方式暴露成OData服务：
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/1a30c4978b1adfd9b18b7c83e5b3d805.png"/>
    </p>
    <p>
     把第一步创建的Service分配给这个Service Binding：
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/3085e09e0579e4f6500e50e9cc9e29d8.png"/>
    </p>
    <p>
     注意下图右边的Service Details标签页里，此时是空的。点击Publish按钮：
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/6131dc57cd95d1c07efc77e80c6ad321.png"/>
    </p>
    <p>
     发布成功后，我们看到了之前在Service实现里把I_Currency暴露成的名为Currency的实体：
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/09fc6fe6df45854d5ffc48921d1186c8.png"/>
    </p>
    <p>
     对这个Currency Entity点右键，选择Open Fiori Elements App Preview，就能在预览模式下通过一个标准通用的Fiori Elements应用把当前系统上I_Currency里的数据显示出来：
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/ebc2f742e084618ce2095fd2e748cb73.png"/>
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/3329f2a1694b2bc37cb54d3387596254.png"/>
    </p>
    <p>
     点击这个Service URL超链接，也能直接打开对应OData服务的元数据(metadata)链接:
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/ef52f3896f19f2b4b0c72522f8e11c50.png"/>
    </p>
    <p>
    </p>
    <p>
     至此我们就可以用各种消费端来使用这个通过I_Currency暴露成的OData服务了，当然也可以开发一个SAP Fiori来消费这个 OData 服务。
    </p>
    <p>
    </p>
    <h2>
     SAP云平台的账号分配和服务管理
    </h2>
    <p>
    </p>
    <p>
     本章节内容通过一个实际的例子，给大家介绍如何在 SAP云平台里开启 Process Integration 服务。
    </p>
    <p>
    </p>
    <p>
     在云平台控制台里，给global Account 分配 Integration Suite下面的 Process Integration的API和Runtime两种服务：
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/ab02b36946120329abdc9972946684d4.png"/>
    </p>
    <p>
    </p>
    <p>
     Process Integration Runtime，分配一个integration-flow实例：
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/c8577bee2afce568289cff4270711201.png"/>
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/f87e3dd5b6fa8632f2f338f058f47d5f.png"/>
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/6727b6a4696bdae7001ed9ff2726a4ae.png"/>
    </p>
    <p>
    </p>
    <p>
     然后在SaaS application里，选择integration Suite下面的Process Integration Production：
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/93ec9c4bd0967a5bae73356664cdd0d6.png"/>
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/1a8ea9e4903330048d0297317e8e8713.png"/>
    </p>
    <p>
    </p>
    <p>
     最后在 subaccount的 Subcription页面里，就能看见Process integration的 SaaS 应用了。点击Subscribe即可订阅：
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/8af1a8342166c9982270c9e76ac715bd.png"/>
    </p>
    <p>
    </p>
    <h2>
     总结
    </h2>
    <p>
    </p>
    <p>
     本文首先介绍了市面上一些常见的 SAP 公有云和私有云的解决方案，接着展开对 SAP云平台架构的介绍，主要提及了云平台两个特色，即对 Kubernetes 和 ABAP 编程环境的支持，重点讲解了在云平台 ABAP 编程环境将 CDS view 暴露成 OData 以及开启 Process Integration 服务的步骤。
    </p>
    <p>
    </p>
    <p>
    </p>
   </div>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">6874747073:3a2f2f626c6f672e6373646e2e6e65742f693034323431362f:61727469636c652f64657461696c732f313234343638393037

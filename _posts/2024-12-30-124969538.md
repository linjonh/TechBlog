---
layout: post
title: 云原生AI云开发平台AI-Model-Foundry介绍开发者可免费体验AI训练模型
date: 2024-12-30 21:16:52 +0800
categories: [云原生]
tags: [机器学习,华为云,人工智能,云原生,devops]
image:
    path: https://img-blog.csdnimg.cn/827d2215d627435084632ed9dbc1caea.png?x-oss-process=image/resize,m_fixed,h_150
    alt: 云原生AI云开发平台AI-Model-Foundry介绍开发者可免费体验AI训练模型
artid: 124969538
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【云原生】AI云开发平台——AI Model Foundry介绍(开发者可免费体验AI训练模型)
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <blockquote>
     <p>
      <em>
       “本文主要介绍了华为云原生开发GDE AI 下的AI Model Foundry模块， 华为云为开发者提供了丰富的云原生免费体验平台，并发布了众多云原生开发教程，有助于云原生开发者深入学习云开发相关知识，成为高级云原生工程师。”
      </em>
     </p>
     <ul>
      <li>
       <em>
        <strong>
         <span style="color:#fe2c24;">
          <span style="background-color:#fff5e6;">
           (文末附华为云官方云原生开发教程、华为云开发者免费注册体验指南、华为云原生GDE AI开发入口)
          </span>
         </span>
        </strong>
       </em>
      </li>
     </ul>
    </blockquote>
    <h2>
     前言
    </h2>
    <p>
     <span style="color:#fe2c24;">
      <strong>
       <span style="background-color:#fff5e6;">
        本文三大主要板块：
       </span>
      </strong>
     </span>
    </p>
    <ul>
     <li>
      <span style="color:#fe2c24;">
       <strong>
        <span style="background-color:#fff5e6;">
         华为GDE AI开发平台
        </span>
       </strong>
      </span>
     </li>
     <li>
      <span style="color:#fe2c24;">
       <strong>
        <span style="background-color:#fff5e6;">
         GDE Model Foundry低门槛开发工具
        </span>
       </strong>
      </span>
     </li>
     <li>
      <span style="color:#fe2c24;">
       <strong>
        <span style="background-color:#fff5e6;">
         AI Model Foundry实战演示
        </span>
       </strong>
      </span>
     </li>
    </ul>
    <hr/>
    <h2>
     一、GDE AI平台介绍
    </h2>
    <h3>
     1.平台简介
    </h3>
    <p>
     GDE AI平台是面向GTS AI开发者的一站式开发平台，提供海量数据预处理、样本自动化标注、大规模分布式训练、自动化模型生成及按需部署预测服务的能力；并提供了图像、文字、知识图谱、自然语言处理、预测性维护等多种AI领域通用服务，使企业能快速开发和构建AI业务，并且支持电信网终端制造等行业自动化、智能化解决方案实现。
    </p>
    <p>
     <img alt="" height="827" src="https://i-blog.csdnimg.cn/blog_migrate/8e3bf5427c89d7e993321524f617f8fa.png" width="1200"/>
    </p>
    <p>
     GDE平台辅助组成元素：
    </p>
    <ul>
     <li>
      GDE技术底座——屏蔽GDE平台对基础设施的依赖，使AI平台能够轻松部署到各种硬件资源上。
     </li>
     <li>
      GDE数据中台——集成存储、处理数据，使AI平台能够专注于样本库的处理。
     </li>
     <li>
      GDE应用开发中心——从界面、数据、服务等层面对其进行编排。
     </li>
     <li>
      GDE运维中心——对服务面和数据面进行统一的运维管理。
     </li>
    </ul>
    <p>
     <span style="color:#fe2c24;">
      <strong>
       关键特性：效率高、门槛低、性能优、运维易。
      </strong>
     </span>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/55f4d2eaf4bff6866f5c43d6bcb03022.png"/>
    </p>
    <h3>
     2. 平台功能
    </h3>
    <h4>
     2.1 样本处理与数据增强能力
    </h4>
    <ul>
     <li>
      样本处理流程：数据上传——自动/人工筛选——人工标注——标注审核——生成数据集——训练模型——数据推理——失败数据回传重新标注
     </li>
    </ul>
    <p>
     流程图：
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/09793184a73e8c6e606d8b5f9458c99c.png"/>
    </p>
    <p>
     优势：
    </p>
    <p>
     ①价值样本数量多，数据复用率高。
    </p>
    <p>
     ②样本标注工具极其丰富。
    </p>
    <p>
     ③能快速克隆样本，并有样本增强的能力，可以优化样本质量。
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/87ceb8ab527f235c4ac4a89a9691c25f.png"/>
    </p>
    <h4>
     2.2 模型训练、模型开发
    </h4>
    <p>
     GDE平台提供丰富、一站式的开发工具链，通过Notebook在线开发和PyCharm本地开发、远程调试的方式，能够有效提升AI开发效率，通过导航式开发可以有效降低AI应用开发门槛。
    </p>
    <p>
     <strong>
      支持的开发方式：Notebook在线开发；PyCharm本地开发、任务远端执行测试；基于模板的导航式开发。
     </strong>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/9c7e50cf942647b72db542ef61617960.png"/>
    </p>
    <h4>
     2.3 推理服务
    </h4>
    <ul>
     <li>
      <strong>
       推理服务：一键式将服务模型封装部署供上层应用调用。
      </strong>
     </li>
    </ul>
    <p>
     a.推理服务的基本能力：
    </p>
    <p>
     ①支持预测服务的运行状态监控、日志分析。
    </p>
    <p>
     ②支持滚动升级和灰度发布。
    </p>
    <p>
     ③支持模型监控及重训练。
    </p>
    <p>
     ④支持不同框架模型格式(例如：.pb/.pkl/.h5)。
    </p>
    <p>
     ⑤支持Tensorflow/Pytorch/Spark MLlib框架。
    </p>
    <p>
     ⑥支持深度学习任务GPU加速执行。
    </p>
    <p>
    </p>
    <p>
     b.推理服务与传统自部署模型对比：
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/5eb078e8cba16d010a737498f1f74920.png"/>
    </p>
    <p>
    </p>
    <p>
     c.推理服务的调用方式：
    </p>
    <p>
     ①在线推理(通过API接口调用)
    </p>
    <p>
     特点：高并发、低延时、自动弹性伸缩、推理效率高、支持多模型灰度发布。
    </p>
    <p>
     ②批量推理
    </p>
    <p>
     特点：高效率分布式计算、可处理大量数据推理、支持GPU加速。
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/f42be92125cbba31e13f5636d05f0066.png"/>
    </p>
    <hr/>
    <h2>
     二、GDE Model Foundry介绍
    </h2>
    <h3>
     1.知识导读
    </h3>
    <p>
     <strong>
      什么是AI？——能够“自主学习到一个函数”的程序。
     </strong>
    </p>
    <p>
     示例：
    </p>
    <p>
     在语音识别领域，给定一段语音波形，AI能够自主学习到一个函数将语音波形转化为文字。
    </p>
    <p>
     在图像识别领域，给定一张图片，AI能够自主学习到一个函数将图像识别。
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/8d31e40fcdc139ea351dfcf01957983d.png"/>
    </p>
    <p>
    </p>
    <p>
     <span style="color:#fe2c24;">
      <strong>
       Model Foundry——解决AI开发的主要痛点
      </strong>
     </span>
    </p>
    <p>
     AI开发痛点一：专业门槛高、技术栈多
    </p>
    <p>
     传统AI开发所需部分技能：高等数学基础、AI相关理论知识、编程技术能力
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/b76bfdfe1b3ebf9471c377ac574fd8a6.png"/>
    </p>
    <p>
     AI开发痛点二：开发流程长、集成难度高、无资产复用和沉淀
    </p>
    <p>
     AI开发流程概览：
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/e593a5d119e2eda6b2a6f3b51f50820e.png"/>
    </p>
    <p>
    </p>
    <h3>
     2.GDE Model Foundry
    </h3>
    <h4>
     2.1 GDE Model Foundry是什么?
    </h4>
    <ul>
     <li>
      定义：Model Foundry寓意模型精炼工厂，
      <span style="color:#fe2c24;">
       <strong>
        打造高质量模型规模生产、批量交付。
       </strong>
      </span>
     </li>
     <li>
      目标：降低AI建模门槛，支持低代码开发；沉淀AI资产，提升AI建模效率，缩短开发周期。
     </li>
     <li>
      核心：
      <span style="color:#fe2c24;">
       <strong>
        模块化、流程化AI开发的中间过程。
       </strong>
      </span>
     </li>
    </ul>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/7fd655f712fabef69ff7b1b0f1908654.png"/>
    </p>
    <h4>
     2.2 AI Model Foundry开发优点：
    </h4>
    <p>
     ①能力可复用、高效建模、节省人力。
    </p>
    <p>
     ②向导式开发，可视化建模、准入门槛低。
    </p>
    <p>
     ③AI模型全生命周期管理，可持续监控、持续训练。
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/94063352c0db60a0b19424f1237a64d6.png"/>
    </p>
    <p>
     附：传统AI开发模式开发人力资源 VS AI Model Foundry 开发人力资源
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/619f5308e455b6d30189143aa4b3a399.png"/>
    </p>
    <p>
     附：传统AI开发现实体验 VS AI Model Foundry 开发现实体验
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/1463a3d5785806b6aa026e0b4b0046ae.png"/>
    </p>
    <h4>
     2.3 AI Model Foundry架构
    </h4>
    <p>
     ①基础设施：兼容主流基础设施，如：docker、私有云、公有云等。
    </p>
    <p>
     ②基础框架：兼容丰富的基础框架，如：PyTorch等.
    </p>
    <p>
     ③Model Foundry：提供模板引擎以及针对不同应用场景的AI模板库。
    </p>
    <p>
     ④应用领域：支持电信领域、工业领域、通用业务等多领域的应用。
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/c372e0adb64a573237128d7ea39a8468.png"/>
    </p>
    <h4>
     2.4 AI Model Foundry模板开发
    </h4>
    <p>
     特点：
    </p>
    <p>
     ①基于Jupyter Notebook的开发环境(对接ADC编排)。
    </p>
    <p>
     ②提供可视化开发调试插件(例如：PyTorch)。
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/1ffb047854fe5ef778a212c6a54b2e0e.png"/>
    </p>
    <p>
     ③提供丰富的SDK开发组件和预置算子支持。
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/039193e4d4304d38efb7104337917acb.png"/>
    </p>
    <p>
     <span style="color:#fe2c24;">
      <strong>
       模板开发：通过模板引擎提供的流水线(Pipeline)，实现各个模块的功能，进行基于模板的从零开发。
      </strong>
     </span>
    </p>
    <p>
     模板开发的六个子流程：
    </p>
    <p>
     开发态：
    </p>
    <p>
     ①数据：进行数据源的配置，数据模型定义，特征工程的处理等(如：数据标注)。
    </p>
    <p>
     ②算法：算法配置，设定训练的目标，算法结果评估等。
    </p>
    <p>
     ③模型：工作流程的编排，模型安全的制定等。
    </p>
    <p>
     运行态：
    </p>
    <p>
     ④服务：模型部署(上线、离线)，安全验证，模型包解析加载，服务管理等。
    </p>
    <p>
     ⑤评估：模型监控，精度跟踪，模型验证评估等。
    </p>
    <p>
     ⑥调优：模型优化，优化对比等。(可选)
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/0c6537fd856afde95e3abe1201a43a81.png"/>
    </p>
    <h4>
     2.5 AI Model Foundry开发模板
    </h4>
    <p>
     <span style="color:#fe2c24;">
      <strong>
       开发模板的基本概念：(层次从高到低)模板 → Pipeline → Stage → Component
      </strong>
     </span>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/d955bbd360f89882b6d13a50eef281ff.png"/>
    </p>
    <p>
     ①Pipeline：指机器学习开发应用过程中从数据读取到数据预处理、特征工程、模型训练和模型评估和部署监控的
     <span style="color:#fe2c24;">
      <strong>
       一个完整的机器学习过程。
      </strong>
     </span>
     模型生命周期过程中涉及多个
     <span style="color:#fe2c24;">
      <strong>
       独立的处理流程，
      </strong>
     </span>
     每个流程抽象为一个Pipeline。比如：模型训练、模型评估优化和模型推理。
     <span style="color:#4da8ee;">
      <strong>
       Pipeline由一系列的步骤(Stage)顺序组成。
      </strong>
     </span>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/de4512380ffb213c2ab4e5727d87703f.png"/>
    </p>
    <p>
    </p>
    <p>
     ②Stage：Stage步骤是机器学习工作流中各个阶段的抽象，
     <span style="color:#fe2c24;">
      <strong>
       是最小的调度执行单元
      </strong>
      <strong>
       (不同步骤可运行在不同的计算引擎上)，
      </strong>
     </span>
     对应导航式中的操作步骤页，将复杂的DAG图转换为导航式步骤页面。
     <span style="color:#4da8ee;">
      <strong>
       每个Stage包含若干组件(component)。
      </strong>
     </span>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/de50f5d8bbe88c0eb27986466d6ab8f2.png"/>
    </p>
    <p>
    </p>
    <p>
     ③Component：Component组件是
     <span style="color:#fe2c24;">
      <strong>
       满足一定功能的最小逻辑单元
      </strong>
      <strong>
       ，整个ML Pipeline由一系列的component组成一个DAG。
      </strong>
     </span>
    </p>
    <p>
     每个component包含三部分:输入——运行参数和前一个component的输出，运行参数通过在界面UI组件配置；输出——是后一个component的输入，也可以指定UI组件进行结果的可视化呈现；执行逻辑——业务处理逻辑。
    </p>
    <p>
    </p>
    <p>
     ④实例:模板实例简称实例，
     <span style="color:#fe2c24;">
      <strong>
       是
      </strong>
      <strong>
       模板实例化运行的结果
      </strong>
      <strong>
       ，
      </strong>
     </span>
     模板与实例的关系类似于面向对象编程中类的实例化过程。
    </p>
    <p>
    </p>
    <p>
     ⑤Job:
     <span style="color:#fe2c24;">
      <strong>
       指
      </strong>
      <strong>
       Pipeline执行(每个AI处理过程)的实例化结果，
      </strong>
     </span>
     支持手动和周期性触发运行。
    </p>
    <p>
    </p>
    <p>
     ⑥Run:
     <span style="color:#fe2c24;">
      <strong>
       指
      </strong>
      <strong>
       Job的每一次执行的实例化结果
      </strong>
      <strong>
       ，
      </strong>
     </span>
     包括周期性作业的每次执行。
    </p>
    <p>
    </p>
    <p>
     实例化：
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/6fd07059d98b074222a4a907ec530bcb.png"/>
    </p>
    <p>
    </p>
    <h4>
     2.6 模板二次开发方案
    </h4>
    <p>
     <strong>
      <span style="color:#0d0016;">
       模板二次开发：若当前模板无法通过数据集增强及超参数调整的优化方式满足业务需求，可使用Notebook提供的模板二次开发功能，对当前模板进行二次开发，引入新的算法。
      </span>
     </strong>
    </p>
    <p>
     二次开发步骤：(以图像分割模板为例)
    </p>
    <p>
     新建Notebook——配置Notebook参数——下载预置模板——修改模块包的代码——生成新模板包——发布模板包——二次开发完成
    </p>
    <p>
     流程图：
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/1f7714fee9de49ae0493ca4802d8604b.png"/>
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/28e6ecda230e08bdceda4ac5312ad03b.gif"/>
    </p>
    <p>
     正在上传…重新上传取消
    </p>
    <hr/>
    <h2>
     三、使用Model Foundry进行建模与实战(以AI自动检测工厂黑烟为例)
    </h2>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/3e3e678e70496dd32e2ae2f3fb3a1eff.png"/>
    </p>
    <h3>
     1.建模步骤
    </h3>
    <p>
     ①数据集采集、数据选择：业务人员基于在工厂中采集的数据图片，使用样本库提供的在线标注功能，标注目标(黑烟)，作为训练数据集。
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/6b57d791cd31891740ebabcc0dbd2eb5.png"/>
    </p>
    <p>
     ②模型训练：使用采集的数据集合，设置训练参数对模型进行训练。
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/186b58fa3c3e02538688ec49576996e3.png"/>
    </p>
    <p>
     ③模型评估：根据平台提供的可视化界面对模型进行相应的评估。
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/4e0e35d6f77ff4152df70f7433315d8b.png"/>
    </p>
    <p>
     ④模型发布：配置相关资源参数即可完成发布。
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/feb9b6517e325795db1dd557aa32cb2f.png"/>
    </p>
    <p>
     ⑤预测结果：原始图片结果是19%，训练后的模型判断为20%
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/234439ed7155db8434078953abb0f760.png"/>
    </p>
    <h3>
     2.Model Foundry实例
    </h3>
    <h4>
     2.1 实战案例：训练一个结构化分类模型
    </h4>
    <p>
     开发平台前端页面：
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/76d795f3b9e616dedfa67cb8f28502ac.png"/>
    </p>
    <p>
     流程：创建实例——选择数据集——设置模型训练参数——设置模型评估参数——配置资源配置——训练模型——结果验证
    </p>
    <p>
     以创建花卉结构分类模型为例：
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/ef8f376247a9d7e890c8c95d977f7048.png"/>
    </p>
    <p>
     ①创建实例
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/a1b5cad5307b9b73b3d985bc0c8dc1b7.png"/>
    </p>
    <p>
     ②设置实例自定义参数，点击确定
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/11cacc694fa9ad6866b458b2aeed634d.png"/>
    </p>
    <p>
     ③选择数据集，这里我们选择已有的iris数据集
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/da9f2fb5cfcd3214ba4c4b389af0e6c3.png"/>
    </p>
    <p>
     ④此时显示已选数据iris，点击下一步
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/4b1891d3213c08561a94739af9fed3ed.png"/>
    </p>
    <p>
     ⑤设置模型训练参数
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/82f1b2220665e44112df8d2e7029fd26.png"/>
    </p>
    <p>
     ⑥设置模型评估参数，并选择验证用的数据集
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/dca4b26baaed762fc6cd987cc8a37e1c.png"/>
    </p>
    <p>
     ⑦配置发布信息，选择资源规格，即可开始训练
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/617b1ff88276545b6dcbdd3b6eb40046.png"/>
    </p>
    <p>
     ⑧结果验证——输入测试参数，即可得到通过AI训练模型得到的判断结果
    </p>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/3defcef6261fe50dee7bd5ca6b972a11.png"/>
    </p>
    <p>
    </p>
    <h4>
     2.2 开箱即用的服务：物体检测
    </h4>
    <ul>
     <li>
      运用已有模块快速检测并识别目标物体，部分支持业务示例：
     </li>
    </ul>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/8e897d30364ede692b0af6beddcc7623.png"/>
    </p>
    <h4>
     2.3 开箱即用的服务：文字识别
    </h4>
    <ul>
     <li>
      OCR(Optical Character Recognition)指光学字符识别，是对包含文本的图像进行分析处理，获取文字及版面信息的过程，服务支持多种业务场景(如：GTS业务、通用文档识别等)
     </li>
    </ul>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/e036c02dee717b88774ff73dc44b123c.png"/>
    </p>
    <hr/>
    <h2>
     总结
    </h2>
    <h3>
     1.什么是GDE AI平台?
    </h3>
    <p>
     面向AI开发者的一站式开发平台，提供样本自动化标注、大规模分布式训练、自动化模型生成等能力；提供图像、文字、知识图谱、自然语言处理、预测性维护等多种AI领域通用服务，使企业能快速开发和构建AI业务，支持电信网络、制造等行业自动化、智能化解决方案实现。
    </p>
    <p>
    </p>
    <h3>
     2.使用Model Foundry模板进行AI建模优势
    </h3>
    <p>
     向导式、可视化进行AI建模，低建模门槛。
    </p>
    <p>
    </p>
    <h3>
     3.实战演练
    </h3>
    <ul>
     <li>
      <strong>
       <span style="color:#fe2c24;">
        华为云平台提供演练环境及丰富的演练案例，欢迎各位开发者体验。
       </span>
      </strong>
     </li>
     <li>
      <strong>
       <span style="color:#fe2c24;">
        开发者根据需要可自由选择网站学习华为云原生开发。
       </span>
      </strong>
     </li>
    </ul>
    <p>
     <em>
      <a href="https://bbs.huaweicloud.com/forum/thread-181125-1-1.html" rel="nofollow" title="华为AI ADC体验环境申请指南">
       华为AI ADC体验环境申请指南
      </a>
     </em>
    </p>
    <p>
     <em>
      <a href="https://uniportal.huawei.com/uniportal/" rel="nofollow" title="华为GDE.ADC体验版平台入口">
       华为GDE.ADC体验版平台入口
      </a>
     </em>
    </p>
    <p>
     <em>
      <a class="link-info" href="https://07b529048c14409da736be5be232ea8a.shixizhi.huawei.com/portal/1381863525944913921?sxz-lang=zh_CN" rel="nofollow" title="华为GDE开发者教程">
       华为GDE开发者教程
      </a>
     </em>
    </p>
    <p>
     <em>
      <a class="link-info" href="https://bbs.huaweicloud.com/forum/forum-1371-1.html" rel="nofollow" title="华为云GDE开发者交流论坛">
       华为云GDE开发者交流论坛
      </a>
     </em>
    </p>
    <hr/>
    <p>
     <strong>
      <em>
       其他相关链接：
      </em>
     </strong>
    </p>
    <p>
     <em>
      <strong>
       <a href="https://bbs.huaweicloud.com/live/cloud_live/202204271900.html" rel="nofollow" title="低门槛AI开发模式：Model Foundry">
        低门槛AI开发模式：Model Foundry
       </a>
      </strong>
     </em>
    </p>
    <hr/>
    <blockquote>
     <p>
      <span style="color:#956fe7;">
       <strong>
        <em>
         💗 “战胜恐惧的最好办法——做好准备、深呼吸、不卑不亢地直面它！”
        </em>
       </strong>
      </span>
     </p>
     <p>
      <span style="color:#956fe7;">
       <strong>
        <em>
         💗 “少年心怀凌云志，骄阳亦须敬三分。”
        </em>
       </strong>
      </span>
     </p>
     <p>
      <span style="color:#956fe7;">
       <strong>
        <em>
         ——Created By 是羽十八ya
        </em>
       </strong>
      </span>
     </p>
    </blockquote>
    <p>
    </p>
   </div>
  </div>
 </article>
</div>



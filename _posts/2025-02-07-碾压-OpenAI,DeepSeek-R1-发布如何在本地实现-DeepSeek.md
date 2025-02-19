---
title: 2025-02-07-碾压-OpenAI,DeepSeek-R1-发布如何在本地实现-DeepSeek
date: 2025-02-07 11:05:27 +0800
categories: []
tags: [ai]
image:
  path: /assets/images/a21b64b15ef8c0d332c01712dd301b59.png
  alt: 碾压-OpenAI,DeepSeek-R1-发布如何在本地实现-DeepSeek
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     碾压 OpenAI，DeepSeek-R1 发布！如何在本地实现 DeepSeek？
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
     近日，幻方量化旗下AI公司深度求索（DeepSeek）正式发布DeepSeek-R1模型。在数学、代码、自然语言推理等任务上，该模型性能比肩OpenAI o1正式版。DeepSeek称，R1在后训练阶段大规模使用了强化学习技术，在仅有极少标注数据的情况下，极大提升了模型推理能力。
    </p>
    <p class="img-center">
     <img alt="图片" height="789" src="/assets/images/3f71388a114b8627c9b4cf4bec951854.png" width="1080"/>
    </p>
    <p>
     DeepSeek不仅将R1训练技术全部公开，还蒸馏了6个小模型开源给社区，允许用户借此训练其他模型。
    </p>
    <p class="img-center">
     <img alt="图片" height="533" src="/assets/images/15d26dad0724c5e606c29477f4bed7c7.png" width="1080"/>
    </p>
    <p>
     API价格方面，每百万输入tokens 1 元（缓存命中）/4元（缓存未命中），每百万输出tokens 16元，较o1正式版低27-55倍。
    </p>
    <p>
     DeepSeek-R1可以说是一个选能型选手，在各项任务上展现了超乎想象的能力，特别是在AIME和MATH-500这些高难度挑战上，DeepSeek-R1的成绩简直让人目瞪口呆，跟OpenAI o1比起来，毫不逊色，甚至还有点小超越。
    </p>
    <p>
     你想没想过，自己也能在本地实现这样一个功能强大的DeepSeek呢？
    </p>
    <p class="img-center">
     <img alt="图片" src="/assets/images/7d2b88e31524421be956e581c45a1e22.gif"/>
    </p>
    <p>
     今天我来手把手教大家，使用一款 AI 搜索开发框架--LeetTools 轻松在本地实现DeepSeek。
    </p>
    <p>
    </p>
    <h2>
     <strong>
      演示
     </strong>
    </h2>
    <div class="video">
     <iframe allowfullscreen="true" data-mediaembed="csdn" frameborder="0" id="s3PRv0ni-1737718847890" src="https://live.csdn.net/v/embed/460900" style="width:100%;height:100%;">
     </iframe>
     <p>
      LeetTools 轻松在本地实现DeepSeek
     </p>
    </div>
    <p>
     <strong>
      📌 安装与配置LeetTools
     </strong>
    </p>
    <p>
     <strong>
      1. 创建虚拟环境并安装LeetTools
     </strong>
    </p>
    <p>
     1）从anaconda.com下载并安装naconda
    </p>
    <p>
     2）从code.visualstudio.com下载并安装Visual Studio
    </p>
    <p>
     3）打开anaconda，从左侧菜单选择Environment，再点击下方的Creat，为LeetTools创建一个虚拟环境
    </p>
    <p class="img-center">
     <img alt="图片" height="578" src="/assets/images/9b5b2b1b8f9c5eb7045c953fb7ec019a.png" width="1080"/>
    </p>
    <p>
     4）在弹出的对话框中，给虚拟环境起一个名字，比如LeetTools，接着勾选Python，选择版本3.11.11，然后选择Create，这样就创建了LeetTools的虚拟环境。
    </p>
    <p class="img-center">
     <img alt="图片" height="524" src="/assets/images/16343b2c6cdeed7497689f274b92d650.jpeg" width="1052"/>
    </p>
    <p>
     5）打开Visual Studio
    </p>
    <p class="img-center">
     <img alt="图片" height="785" src="/assets/images/8080309ec374e122c72cb9c7ccde06c4.jpeg" width="1080"/>
    </p>
    <p>
     6）选择最左侧菜单栏的Extension按钮，安装Python，Python Debugger，Pylance，Git Extension Pack，Git History，Github Repository，gitignore，Gitlens扩展插件
    </p>
    <p class="img-center">
     <img alt="图片" height="773" src="/assets/images/a96b02ed93998f85be0cfba3c8aa7a5c.jpeg" width="1080"/>
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="图片" height="827" src="/assets/images/2eb7e12cdd5b2c035ff0fa19d8b73b57.png" width="1080"/>
    </p>
    <p>
     7）点击最左侧菜单栏的Source Control，然后点击Clone Repository按钮
    </p>
    <p class="img-center">
     <img alt="图片" height="837" src="/assets/images/121307bf38fbaa4bb888e2c1e8b718a1.png" width="1080"/>
    </p>
    <p>
     8）在弹出的地址框中输入LeetTools的Github地址：🔗https://github.com/leettools-dev/leettools
    </p>
    <p class="img-center">
     <img alt="图片" height="837" src="/assets/images/da4a47f01af0095f0d428ce2e11822c4.png" width="1080"/>
    </p>
    <p>
     9）在弹出的对话框中，选择下方的新建文件夹，建一个LeetTools的存储数据的文件夹，然后选择该文件夹，点击右下方的Select as Repository Destination，完成前期的配置工作，接下来就是LeetTools安装的过程了
    </p>
    <p class="img-center">
     <img alt="图片" height="785" src="/assets/images/ce51087001b9ed0f89ad162b68275833.jpeg" width="1080"/>
    </p>
    <p>
     10）然后在桌面上端的菜单栏里选择，Terminal，New Terminal，就在Visual Studio里打开了一个终端窗口然后就可以开始LeetTools的安装了。
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="图片" height="608" src="/assets/images/24f415085ccab28e259151376592631a.png" width="1080"/>
    </p>
    <p>
     <img alt="" height="472" src="/assets/images/96ad5cd6388a6b4a495cb549e98a71d5.png" width="1056"/>
    </p>
    <p>
     <strong>
      2. 设置环境变量
     </strong>
    </p>
    <pre><img alt="" height="272" src="/assets/images/6a77f89487cdd78d32699a2f2b9c004d.png" width="1052"/>
</pre>
    <p>
     <strong>
      3. 运行LeetTools 命令
     </strong>
    </p>
    <pre><img alt="" height="480" src="/assets/images/f1f287dddc72422d75632626a7a92fa8.png" width="1050"/>
</pre>
    <p>
     <strong>
      📌 示例代码
     </strong>
    </p>
    <p>
     以下是一个使用LeetTools 调用 DeepSeek 的示例代码：
    </p>
    <p>
     <img alt="" height="1090" src="/assets/images/a21b64b15ef8c0d332c01712dd301b59.png" width="1426"/>
    </p>
    <h2>
     <strong>
      定制化场景应用
     </strong>
    </h2>
    <p>
     通过LeetTools ，开发者可以轻松实现DeepSeek的强大功能。当然，LeetTools 的能力远不止于此。在它的开发框架上，开发者们可以大展身手，根据自身需求，开发出各种定制化的场景应用，让智能搜索真正融入到生活的方方面面。
    </p>
    <p>
     👇获取开源地址：
     <a href="https://github.com/leettools-dev/leettools" title="GitHub - leettools-dev/leettools: AI Search tools.">
      GitHub - leettools-dev/leettools: AI Search tools.
     </a>
    </p>
   </div>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



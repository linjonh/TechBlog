---
title: 2025-02-06-DeepSeek私有化本地部署图文WinMac
date: 2025-02-06 00:47:47 +0800
categories: [DeepSeek]
tags: [DeepSeek,ai]
image:
  path: /assets/images/520681a08ce0d9e0a9045b3098c4e80a.png
  alt: DeepSeek私有化本地部署图文WinMac
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【DeepSeek】私有化本地部署图文（Win+Mac）
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p id="main-toc" name="tableOfContents">
     <strong>
      目录
     </strong>
    </p>
    <p id="%E4%B8%80%E3%80%81DeepSeek%E7%A7%81%E6%9C%89%E5%8C%96%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2%E3%80%90Windows%E3%80%91-toc" name="tableOfContents" style="margin-left:0px">
     <a href="#%E4%B8%80%E3%80%81DeepSeek%E7%A7%81%E6%9C%89%E5%8C%96%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2%E3%80%90Windows%E3%80%91" rel="nofollow">
      一、DeepSeek本地部署【Windows】
     </a>
    </p>
    <p id="1%E3%80%81%E5%AE%89%E8%A3%85Ollama-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#1%E3%80%81%E5%AE%89%E8%A3%85Ollama" rel="nofollow">
      1、安装Ollama
     </a>
    </p>
    <p id="2%E3%80%81%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#2%E3%80%81%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" rel="nofollow">
      2、配置环境变量
     </a>
    </p>
    <p id="3%E3%80%81%E4%B8%8B%E8%BD%BD%E6%A8%A1%E5%9E%8B-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#3%E3%80%81%E4%B8%8B%E8%BD%BD%E6%A8%A1%E5%9E%8B" rel="nofollow">
      3、下载模型
     </a>
    </p>
    <p id="4%E3%80%81%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#4%E3%80%81%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B" rel="nofollow">
      4、使用示例
     </a>
    </p>
    <p id="a%E3%80%81%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AE-toc" name="tableOfContents" style="margin-left:80px">
     <a href="#a%E3%80%81%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AE" rel="nofollow">
      a、直接访问
     </a>
    </p>
    <p id="b%E3%80%81chatbox%E7%BD%91%E9%A1%B5%E8%AE%BF%E9%97%AE-toc" name="tableOfContents" style="margin-left:80px">
     <a href="#b%E3%80%81chatbox%E7%BD%91%E9%A1%B5%E8%AE%BF%E9%97%AE" rel="nofollow">
      b、chatbox网页访问
     </a>
    </p>
    <p id="%E4%BA%8C%E3%80%81DeepSeek%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2%E3%80%90Mac%E3%80%91-toc" name="tableOfContents" style="margin-left:0px">
     <a href="#%E4%BA%8C%E3%80%81DeepSeek%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2%E3%80%90Mac%E3%80%91" rel="nofollow">
      二、DeepSeek本地部署【Mac】
     </a>
    </p>
    <p id="1%E3%80%81%E5%AE%89%E8%A3%85Ollama-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#1%E3%80%81%E5%AE%89%E8%A3%85Ollama" rel="nofollow">
      1、安装Ollama
     </a>
    </p>
    <p id="2%E3%80%81%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#2%E3%80%81%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" rel="nofollow">
      2、配置环境变量
     </a>
    </p>
    <p id="3%E3%80%81%E4%B8%8B%E8%BD%BD%E6%A8%A1%E5%9E%8B-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#3%E3%80%81%E4%B8%8B%E8%BD%BD%E6%A8%A1%E5%9E%8B" rel="nofollow">
      3、下载模型
     </a>
    </p>
    <p id="4%E3%80%81%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#4%E3%80%81%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B" rel="nofollow">
      4、使用示例
     </a>
    </p>
    <p id="%C2%A05%E3%80%81%E5%88%A0%E9%99%A4%E5%B7%B2%E4%B8%8B%E8%BD%BD%E7%9A%84%E6%A8%A1%E5%9E%8B-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#%C2%A05%E3%80%81%E5%88%A0%E9%99%A4%E5%B7%B2%E4%B8%8B%E8%BD%BD%E7%9A%84%E6%A8%A1%E5%9E%8B" rel="nofollow">
      5、删除已下载的模型
     </a>
    </p>
    <p id="%E4%B8%89%E3%80%81DeepSeek%E5%85%B6%E4%BB%96-toc" name="tableOfContents" style="margin-left:0px">
     <a href="#%E4%B8%89%E3%80%81DeepSeek%E5%85%B6%E4%BB%96" rel="nofollow">
      三、DeepSeek其他
     </a>
    </p>
    <p id="1%E3%80%81DeepSeek-V3%E7%9A%84%E7%BB%BC%E5%90%88%E8%83%BD%E5%8A%9B-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#1%E3%80%81DeepSeek-V3%E7%9A%84%E7%BB%BC%E5%90%88%E8%83%BD%E5%8A%9B" rel="nofollow">
      1、各个蒸馏版本对应硬件配置参考
     </a>
    </p>
    <p id="2%E3%80%81DeepSeek-V3%E7%9A%84%E7%BB%BC%E5%90%88%E8%83%BD%E5%8A%9B-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#2%E3%80%81DeepSeek-V3%E7%9A%84%E7%BB%BC%E5%90%88%E8%83%BD%E5%8A%9B" rel="nofollow">
      2、DeepSeek-V3的综合能力
     </a>
    </p>
    <p id="2%E3%80%81DeepSeek-%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E5%BA%93-toc" name="tableOfContents" style="margin-left:40px">
     <a href="#2%E3%80%81DeepSeek-%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E5%BA%93" rel="nofollow">
      3、DeepSeek-个人知识库
     </a>
    </p>
    <hr id="hr-toc" name="tableOfContents"/>
    <p>
    </p>
    <h2 id="%E4%B8%80%E3%80%81DeepSeek%E7%A7%81%E6%9C%89%E5%8C%96%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2%E3%80%90Windows%E3%80%91" name="%E4%B8%80%E3%80%81DeepSeek%E7%A7%81%E6%9C%89%E5%8C%96%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2%E3%80%90Windows%E3%80%91">
     一、DeepSeek本地部署【Windows】
    </h2>
    <h3 id="1%E3%80%81%E5%AE%89%E8%A3%85Ollama" name="1%E3%80%81%E5%AE%89%E8%A3%85Ollama">
     1、安装Ollama
    </h3>
    <table border="1" cellpadding="1" cellspacing="1" style="width:428px">
     <tbody>
      <tr>
       <td style="width:208px">
        Ollama官网
       </td>
       <td style="width:216px">
        <a href="https://ollama.com/" rel="nofollow" title="Ollama">
         Ollama
        </a>
       </td>
      </tr>
     </tbody>
    </table>
    <p>
     <img alt="" height="885" src="/assets/images/f126cd0da45d3d660b4e4ea3440beef3.png" width="1914"/>
    </p>
    <p>
     <img alt="" height="379" src="/assets/images/3e145b3b0d5147c2d7b338bf133fe55c.png" width="1000"/>
    </p>
    <p>
     <img alt="" height="241" src="/assets/images/98f172dcc3766087dc132aa6fc0f952a.png" width="676"/>
    </p>
    <h3 id="2%E3%80%81%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" name="2%E3%80%81%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">
     2、配置环境变量
    </h3>
    <table border="1" cellpadding="1" cellspacing="1" style="width:500px">
     <tbody>
      <tr>
       <td>
        OLLAMA_HOST
       </td>
       <td>
        0.0.0.0
       </td>
      </tr>
      <tr>
       <td>
        OLLAMA_ORIGINS
       </td>
       <td>
        *
       </td>
      </tr>
     </tbody>
    </table>
    <p>
     <img alt="" height="182" src="/assets/images/c69a8ce2a2a017f0dcad13511f94b546.png" width="795"/>
    </p>
    <h3 id="3%E3%80%81%E4%B8%8B%E8%BD%BD%E6%A8%A1%E5%9E%8B" name="3%E3%80%81%E4%B8%8B%E8%BD%BD%E6%A8%A1%E5%9E%8B">
     3、下载模型
    </h3>
    <p>
     <img alt="" height="765" src="/assets/images/4367bb70c2196b20b969dbcd7f095c66.png" width="1686"/>
    </p>
    <p>
     <img alt="" height="326" src="/assets/images/0b833729daffbbfbf361afeec9ca6ce9.png" width="1101"/>
    </p>
    <p>
     <img alt="" height="234" src="/assets/images/8cdc68ccb097565eafe1a9cecc28f807.png" width="1102"/>
    </p>
    <h3 id="4%E3%80%81%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B" name="4%E3%80%81%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B">
     4、使用示例
    </h3>
    <h4 id="a%E3%80%81%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AE" name="a%E3%80%81%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AE">
     a、直接访问
    </h4>
    <p>
     <img alt="" height="817" src="/assets/images/8ae31fc3ff7fb2795e2e1c62625407ce.png" width="1096"/>
    </p>
    <p>
     <img alt="" height="289" src="/assets/images/82a8e05effed1bd18d8ccc0e522c6ec2.png" width="1107"/>
    </p>
    <h4 id="b%E3%80%81chatbox%E7%BD%91%E9%A1%B5%E8%AE%BF%E9%97%AE" name="b%E3%80%81chatbox%E7%BD%91%E9%A1%B5%E8%AE%BF%E9%97%AE">
     b、chatbox网页访问
    </h4>
    <p>
     <a href="https://chatboxai.app/zh" rel="nofollow" title="Chatbox AI官网：办公学习的AI好助手，全平台AI客户端，官方免费下载">
      Chatbox AI官网：办公学习的AI好助手，全平台AI客户端，官方免费下载
     </a>
    </p>
    <p>
     <img alt="" height="750" src="/assets/images/472a198f06d780f11f784e0a04bde516.png" width="1437"/>
    </p>
    <p>
     <img alt="" height="1189" src="/assets/images/9e17c606160ca3ec50aaa7ab40a3e276.png" width="1594"/>
    </p>
    <p>
     <img alt="" height="655" src="/assets/images/7d0a8b4005d2f202bfa21d610953d560.png" width="596"/>
    </p>
    <p>
     <img alt="" height="830" src="/assets/images/d738c316f66a9c079b2f90d5a8131110.png" width="1641"/>
    </p>
    <hr/>
    <h2 id="%E4%BA%8C%E3%80%81DeepSeek%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2%E3%80%90Mac%E3%80%91" name="%E4%BA%8C%E3%80%81DeepSeek%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2%E3%80%90Mac%E3%80%91">
     二、DeepSeek本地部署【Mac】
    </h2>
    <h3 id="1%E3%80%81%E5%AE%89%E8%A3%85Ollama" name="1%E3%80%81%E5%AE%89%E8%A3%85Ollama">
     1、安装Ollama
    </h3>
    <p>
     <img alt="" height="700" src="/assets/images/1701cca935a7130689d96d16e5349202.png" width="1437"/>
    </p>
    <p>
     <img alt="" height="672" src="/assets/images/4d12cfebfe742f313d71f104369d1a74.png" width="1077"/>
    </p>
    <h3 id="2%E3%80%81%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" name="2%E3%80%81%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">
     2、配置环境变量
    </h3>
    <pre><code>launchctl setenv OLLAMA_HOST "0.0.0.0"
launchctl setenv OLLAMA_ORIGINS "*"</code></pre>
    <p>
     还是不成功的请访问chatbox的帮助
    </p>
    <p>
     <img alt="" height="923" src="/assets/images/826910dbe8a1e5ab126921e1b02a046d.png" width="1395"/>
    </p>
    <p>
     直达链接：
    </p>
    <p>
     <a href="https://chatboxai.app/zh/help-center/connect-chatbox-remote-ollama-service-guide" rel="nofollow" title="如何将 Chatbox 连接到远程 Ollama 服务：逐步指南 - Chatbox 帮助中心：指南与常见问题">
      如何将 Chatbox 连接到远程 Ollama 服务：逐步指南 - Chatbox 帮助中心：指南与常见问题
     </a>
    </p>
    <h3 id="3%E3%80%81%E4%B8%8B%E8%BD%BD%E6%A8%A1%E5%9E%8B" name="3%E3%80%81%E4%B8%8B%E8%BD%BD%E6%A8%A1%E5%9E%8B">
     3、下载模型
    </h3>
    <p>
     <img alt="" height="780" src="/assets/images/8f740914a728b0794c96272379f6f8ef.png" width="1651"/>
    </p>
    <h3 id="4%E3%80%81%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B" name="4%E3%80%81%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B">
     4、使用示例
    </h3>
    <blockquote>
     <p>
      总的来看，一般电脑比较适合部署14b版本，也算能用，毕竟是蒸馏版本，参数量在这放着呢，虽然是蒸馏版本，但也基本都保留了核心的推理能力。
     </p>
     <p>
      如果想跑更高版本的，硬件配置很多人吃不消的，个人的建议14b玩玩就行了。
     </p>
     <p>
      专业可靠的还得是官方的满血版本，硬件配置要求太高了。
     </p>
     <p>
      有台式机可以搞到128G运存的，可以尝试下32b/70b的版本的。
     </p>
    </blockquote>
    <p>
     <img alt="" height="407" src="/assets/images/5b42a1fb16d96b48b7e85d1c8c1cf031.png" width="938"/>
    </p>
    <p>
     <img alt="" height="642" src="/assets/images/0213f44c5dc8f3dcde568ca0c7ce0c04.png" width="799"/>
    </p>
    <p>
     <img alt="" height="1504" src="/assets/images/e0881495641f32461e53de3700666b7d.png" width="2554"/>
    </p>
    <h3 id="%C2%A05%E3%80%81%E5%88%A0%E9%99%A4%E5%B7%B2%E4%B8%8B%E8%BD%BD%E7%9A%84%E6%A8%A1%E5%9E%8B" name="%C2%A05%E3%80%81%E5%88%A0%E9%99%A4%E5%B7%B2%E4%B8%8B%E8%BD%BD%E7%9A%84%E6%A8%A1%E5%9E%8B">
     5、删除已下载的模型
    </h3>
    <pre><code>1．进入 cmd 
2．查看已经部署的模型，输入:ollama list
3. 删除指定的模型： ollama rm deepseek -r1:70b</code></pre>
    <h2 id="%E2%80%8B%E7%BC%96%E8%BE%91" name="%E2%80%8B%E7%BC%96%E8%BE%91">
     <img alt="" height="131" src="/assets/images/499d7269953f0e6ca3aa0ac60eca0703.png" width="490"/>
    </h2>
    <h2 id="%E4%B8%89%E3%80%81DeepSeek%E5%85%B6%E4%BB%96" name="%E4%B8%89%E3%80%81DeepSeek%E5%85%B6%E4%BB%96">
     三、DeepSeek其他
    </h2>
    <h3 id="1%E3%80%81DeepSeek-V3%E7%9A%84%E7%BB%BC%E5%90%88%E8%83%BD%E5%8A%9B" name="1%E3%80%81DeepSeek-V3%E7%9A%84%E7%BB%BC%E5%90%88%E8%83%BD%E5%8A%9B">
     1、各个蒸馏版本对应硬件配置参考
    </h3>
    <table style="width:750px">
     <thead>
      <tr>
       <th style="width:148px">
        模型版本
       </th>
       <th style="width:147px">
        CPU要求
       </th>
       <th style="width:85px">
        内存要求
       </th>
       <th style="width:79px">
        硬盘要求
       </th>
       <th style="width:152px">
        显卡要求
       </th>
       <th style="width:138px">
        适用场景
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td style="width:148px">
        DeepSeek-R1-1.5B
       </td>
       <td style="width:147px">
        最低4核，推荐Intel/AMD多核处理器
       </td>
       <td style="width:85px">
        8GB+
       </td>
       <td style="width:79px">
        3GB+
       </td>
       <td style="width:152px">
        非必需，若需GPU加速，可选4GB+显存（如GTX 1650）
       </td>
       <td style="width:138px">
        低资源设备部署等场景
       </td>
      </tr>
      <tr>
       <td style="width:148px">
        DeepSeek-R1-7B
       </td>
       <td style="width:147px">
        8核以上，推荐现代多核CPU
       </td>
       <td style="width:85px">
        16GB+
       </td>
       <td style="width:79px">
        8GB+
       </td>
       <td style="width:152px">
        推荐8GB+显存（如RTX 3070/4060）
       </td>
       <td style="width:138px">
        本地开发测试等场景
       </td>
      </tr>
      <tr>
       <td style="width:148px">
        DeepSeek-R1-8B
       </td>
       <td style="width:147px">
        与7B相近，略高10-20%
       </td>
       <td style="width:85px">
        与7B相近，略高10-20%
       </td>
       <td style="width:79px">
        与7B相近，略高10-20%
       </td>
       <td style="width:152px">
        与7B相近，略高10-20%
       </td>
       <td style="width:138px">
        需更高精度的轻量级任务
       </td>
      </tr>
      <tr>
       <td style="width:148px">
        DeepSeek-R1-14B
       </td>
       <td style="width:147px">
        12核以上
       </td>
       <td style="width:85px">
        32GB+
       </td>
       <td style="width:79px">
        15GB+
       </td>
       <td style="width:152px">
        16GB+显存（如RTX 4090或A5000）
       </td>
       <td style="width:138px">
        企业级复杂任务
       </td>
      </tr>
      <tr>
       <td style="width:148px">
        DeepSeek-R1-32B
       </td>
       <td style="width:147px">
        16核以上（如AMD Ryzen 9或Intel i9）
       </td>
       <td style="width:85px">
        64GB+
       </td>
       <td style="width:79px">
        30GB+
       </td>
       <td style="width:152px">
        24GB+显存（如A100 40GB或双卡RTX 3090）
       </td>
       <td style="width:138px">
        高精度专业领域任务
       </td>
      </tr>
      <tr>
       <td style="width:148px">
        DeepSeek-R1-70B
       </td>
       <td style="width:147px">
        32核以上服务器级CPU
       </td>
       <td style="width:85px">
        128GB+
       </td>
       <td style="width:79px">
        70GB+
       </td>
       <td style="width:152px">
        需多卡并行（如2x A100 80GB或4x RTX 4090）
       </td>
       <td style="width:138px">
        科研机构等高复杂度生成任务
       </td>
      </tr>
     </tbody>
    </table>
    <h3 id="2%E3%80%81DeepSeek-V3%E7%9A%84%E7%BB%BC%E5%90%88%E8%83%BD%E5%8A%9B" name="2%E3%80%81DeepSeek-V3%E7%9A%84%E7%BB%BC%E5%90%88%E8%83%BD%E5%8A%9B">
     2、DeepSeek-V3的综合能力
    </h3>
    <p>
     <img alt="" height="1424" src="/assets/images/520681a08ce0d9e0a9045b3098c4e80a.png" width="1324"/>
    </p>
    <h3 id="2%E3%80%81DeepSeek-%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E5%BA%93" name="2%E3%80%81DeepSeek-%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E5%BA%93">
     3、DeepSeek-个人知识库
    </h3>
    <p>
     待
    </p>
    <hr/>
    <p>
     <span style="color:#ff9900">
      <strong>
       有用请点赞，养成良好习惯！
      </strong>
     </span>
    </p>
    <p>
     <span style="color:#ff9900">
      <strong>
       疑问、交流、鼓励请留言！
      </strong>
     </span>
    </p>
    <p>
    </p>
   </div>
  </div>
 </article>
</div>



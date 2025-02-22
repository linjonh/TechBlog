---
layout: post
title: 2025-02-05-DeepSeek本地部署投喂数据训练AI教程
date: 2025-02-05 13:49:42 +0800
categories: []
tags: [人工智能,产品经理,langchain,知识图谱,面试]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=145453732
  alt: DeepSeek本地部署投喂数据训练AI教程
artid: 145453732
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     DeepSeek本地部署+投喂数据训练AI教程！！
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
     DeepSeek-R1，是深度求索（DeepSeek）研发的推理模型，本地部署后完全免费，无使用次数限制。DeepSeek-R1采用的大规模强化学习技术，尤其擅长数学、代码和自然语言推理等复杂任务。DeepSeek-R1系列模型（1.5b~671b）开源且免费，进一步降低了AI应用门槛，赋能开源社区发展。
    </p>
    <p>
     使用
    </p>
    <p>
     教程
    </p>
    <p>
     <strong>
      DeepSeek详细教程：
     </strong>
    </p>
    <p>
     ❶Win版安装教程（Ollama+AnythingLLM安装、DeepSeek模型下载）
    </p>
    <p>
     ❷Mac版安装教程（Ollama+AnythingLLM安装、DeepSeek模型下载）
    </p>
    <p>
     ❸AnythingLLM设置方法（聊天模型+训练模型设置）
    </p>
    <p>
     ❹如何投喂数据（训练AI）
    </p>
    <p>
     ❺DeepSeek-R1应用展示
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/e7bd727d71e31b111e6aec92c4827b51.png"/>
    </p>
    <p>
     <strong>
      一、Win版安装教程
     </strong>
    </p>
    <p>
     1.选择下载的安装包右键解压。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/03ebdd38b903e92adcfb574b30d5a186.png"/>
    </p>
    <p>
     2.解压后，右键以管理员身份运行Ollama安装程序。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/b6a16dae20926c151a549bbf1c2df4da.png"/>
    </p>
    <p>
     3.点击Install安装完成即可。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/46c95203fe3610ae84704c622f068ee6.png"/>
    </p>
    <p>
     4.在D盘新建一个文件夹命名为OllamaAI，然后打开系统环境变量，新建变量名：OLLAMA_MODELS 变量值：D:\OllamaAI，设置完成后重启电脑。
    </p>
    <p>
     <strong>
      温馨提示：
     </strong>
     此步主要是解决Ollama默认下载模型到C盘问题，若C盘空间足够大的小伙伴此步骤可略过。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/38e0683e93bf7176f42ee8131781ac34.png"/>
    </p>
    <p>
     5.重启电脑后，在开始菜单找到Ollama程序打开，打开后在电脑右下角会有一个羊驼图标显示。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/e5e958259afbaa8ac22ca11bbdaaeb1d.png"/>
    </p>
    <p>
     6.按快捷键Win+R，输入cmd确定。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/5645fb9241dc55379365a68a691a67aa.png"/>
    </p>
    <p>
     7.输入ollama run+模型名称，按回车键即可下载（看下面附图硬件要求选择下载其中一个或多个，此过程可能有点慢，若下载失败重新输入命令下载即可），如下：
    </p>
    <p>
     ollama run deepseek-r1:1.5b
    </p>
    <p>
     ollama run deepseek-r1:7b
    </p>
    <p>
     ollama run deepseek-r1:8b
    </p>
    <p>
     ollama run deepseek-r1:14b
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/816be195ffb91fd105673364ee2ec800.png"/>
    </p>
    <p>
     <strong>
      附：
     </strong>
     各模型大小与电脑硬件要求，根据自己电脑硬件配置选择下载适合的模型。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/d3bcaf0741041625cee4495b995f7a26.png"/>
    </p>
    <p>
     8.❶deepseek-r1模型下载完成后（提示success即是下载完成），❷在CMD新窗口中输入命令ollama pull nomic-embed-text回车下载nomic-embed-text嵌入式模型（后面做数据投喂会用到）。
    </p>
    <p>
     <strong>
      温馨提示：
     </strong>
     若是要删除模型，输入命令ollama rm+模型名称，如ollama rm deepseek-r1:14b
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/989ed467dd385ff1bb7f937533e06c31.png"/>
    </p>
    <p>
     9.deepseek-r1与nomic-embed-text模型下载完成后，开始安装AnythingLLM软件。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/2b9fa4054d6a9cf3b8d135a97787d2c8.png"/>
    </p>
    <p>
     10.选择【所有用户】点击下一步。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/0a805ec77645ee939cdf2eea5553c5c1.png"/>
    </p>
    <p>
     11.修改路径地址中的首字符C可更改安装位置，本例安装到D盘，点击下一步。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/9b61e32f163ffbb7c7b8db56c11103f9.png"/>
    </p>
    <p>
     12.安装中…，安装到提示下载ollama_lib.zip可点击取消，不然要等1小时间才能下载完成。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/9b7758ed2da4ed393f32a298e59eb1d9.png"/>
    </p>
    <p>
     13.点击完成。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/d481ce21b7edcafb84228d1f03cf3cbc.png"/>
    </p>
    <p>
     14.点击【Get started】。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/07521aa0aca6b002c6487d22c11a7025.png"/>
    </p>
    <p>
     15.点击箭头，进行下一步。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/d93a9be0318be3842498cd2e4444dec3.png"/>
    </p>
    <p>
     16.输入工作区名称，点击下一步箭头。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/f96e452e3b45e8a80be4ae08fbfbe1c1.png"/>
    </p>
    <p>
     17.点击【设置】，里面可以设置模型、界面显示语言等。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/5222883c798c1c78556c05013a9670a4.png"/>
    </p>
    <p>
     <strong>
      附：
     </strong>
     若软件显示英文，可在Customization外观定制里面选择Chinese即可。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/a8515a758b320442a12b2aacf335a879.png"/>
    </p>
    <p>
     <strong>
      二、Mac版安装教程（支持MacOS 11.0及更高）
     </strong>
    </p>
    <p>
     1.双击安装Ollama（支持M系列与Intel系列CPU），选择【Move to Applications】然后点击Next安装完成即可。
    </p>
    <p>
     2.通过终端分别安装deepseek-r1与nomic-embed-text模型，注意两个模型若是一起下载会报错，建议一个模型下载完成后，再开一个终端窗口下载。下载方式与Win版7~8步骤类似，这里不过多介绍。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/1e247910ee043a8944845a0acd544085.png"/>
    </p>
    <p>
     3.双击打开AnythingLLM（根据自己电脑芯片选择ARM或Intel版安装包），将AnythingLLM拖入到【Applications】文件夹完成安装。若打开软件为英文，参考Win版第17步设置。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/fa7d519b30beca85597e9872108b7a68.png"/>
    </p>
    <p>
     <strong>
      三、AnythingLLM设置（Mac与Win设置方法一样）
     </strong>
    </p>
    <p>
     1.在软件设置里面，LLM首选项界面，提供商选择Ollama，Ollama Model选择你前面下载的DeepSeek-R1系列模型1.5b~671b，然后点击Save changes。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/3a81b408056811e345a350fe8fa340ea.png"/>
    </p>
    <p>
     2.在Embedder首选项界面，嵌入引擎提供商选择Ollama，Ollama Embedding Mode选择【nomic-embed-text】，然后点击保存更改。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/f8508195a69e528c5420be5868d2aad5.png"/>
    </p>
    <p>
     3.点击【工作区设置】。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/39877b17829ac1aa1cdcde2b3854f980.png"/>
    </p>
    <p>
     4.聊天设置界面，❶工作区LLM提供者选择【Ollama】，❷工作区聊天模型选择【deepseek-r1】模型，❸然后点击【Update workspace agent】。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/0f25f5fe0a24ca2c6912da58c6a1b763.png"/>
    </p>
    <p>
     5.代理配置界面，工作区代理LLM提供商选择【Ollama】，工作区代理模型选择【deepseek-r1】，然后点击【Update workspace agent】。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/6f1029e7826d547446c32b81c012d7ab.png"/>
    </p>
    <p>
     <strong>
      四、如何投喂数据（训练AI）
     </strong>
    </p>
    <p>
     1.在工作区界面，点击【上传】。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/8cb6411fcb69fe0175ea40ab591371c5.png"/>
    </p>
    <p>
     2.❶点击upload选择需要上传的文件（支持PDF、Txt、Word、Excel、PPT等常见文档格式）。❷勾选上传的文件，❸点击【Move to Workspace】。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/d318e7273012a7705fea5182a58f6f2b.png"/>
    </p>
    <p>
     3.点击【Save and Embed】。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/959c63b1bbf3158ba818de50c05b29f0.png"/>
    </p>
    <p>
     <strong>
      五、DeepSeek-R1应用展示
     </strong>
    </p>
    <p>
     1.没有投喂数据之前，输入伙伴神公众号是干嘛的，AI是回答不了的，投喂后能够准确分析与解答出来。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/53cf4fd7f648ae4f7d42310d7481966f.png"/>
    </p>
    <p>
     2.3.8与3.11哪个大，之前有人说DeepSeek回答是错误的，可能当成了版本号，本次测试正确无误。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/e7bd727d71e31b111e6aec92c4827b51.png"/>
    </p>
    <p>
     3.在设置【对话历史记录】界面，工作区聊天记录可以导出也可以删除。
    </p>
    <p>
     <strong>
      特别注意：
     </strong>
     使用AnythingLLM软件之前，都要先打开Ollama软件，Mac打开后在右上角显示羊驼图标，Win在右下角显示羊驼图标。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/img_convert/1aae7fba7ac673048cf1ad65d2c70fc0.png"/>
    </p>
    <p>
     👉👉【DeepSeek本地部署文档】
    </p>
    <p>
     <strong>
      https://pan.quark.cn/s/7e0fa45596e4
     </strong>
    </p>
    <p>
     <img alt="cut-off" src="https://i-blog.csdnimg.cn/img_convert/1d90da8e50080aed16bcfe353b42d76c.png"/>
    </p>
    <p>
     最近，我的DeepSeek本地部署视频在B站播放量意外小爆，评论区被两类留言淹没：一类是技术爱好者追问“如何用消费级显卡跑通大模型”，另一类是职场人焦虑“我的工作会被AI取代吗？”这两个问题的背后，折射出一个残酷的真相：
     <strong>
      大模型技术正在重构所有行业的生存法则，而掌握这项技术的人将获得通往未来的船票
     </strong>
     。
    </p>
    <p>
     <strong>
      DeepSeek的火爆对普通人意味着什么？
     </strong>
    </p>
    <p>
     DeepSeek的火爆并非偶然。它代表了一种技术趋势：
     <strong>
      大模型技术正在从实验室走向大众
     </strong>
     。过去，大模型技术似乎只属于科技巨头和学术机构，普通人很难接触到。而现在，随着开源社区的活跃和技术的普及，像DeepSeek这样的工具已经可以让普通用户在自己的设备上部署和使用大模型。
    </p>
    <p>
     对于普通人来说，DeepSeek的火爆意味着：
    </p>
    <ol>
     <li>
      <strong>
       技术门槛降低
      </strong>
      ：大模型技术不再遥不可及。通过本地部署，普通人也可以体验到强大的AI能力，无论是文本生成、对话系统还是其他AI应用。
     </li>
     <li>
      <strong>
       个性化需求得到满足
      </strong>
      ：大模型可以根据用户的需求进行定制化调整，满足个性化的应用场景。比如，你可以训练一个专门用于写作、编程或翻译的模型。
     </li>
     <li>
      <strong>
       未来职业机会
      </strong>
      ：大模型技术的普及将催生大量新的职业机会。无论是AI工程师、数据科学家，还是AI产品经理，掌握大模型技术将成为未来职场的重要竞争力。
     </li>
    </ol>
    <p>
     <strong>
      DeepSeek的底层逻辑：大模型技术的核心
     </strong>
    </p>
    <p>
     DeepSeek的底层逻辑正是基于
     <strong>
      大模型技术
     </strong>
     。大模型，顾名思义，是指参数量巨大、训练数据丰富的深度学习模型。这类模型通过海量数据的训练，能够捕捉到复杂的语言模式和知识结构，从而在各种任务中表现出色。
    </p>
    <p>
     <strong>
      一、大模型岗位薪资揭密：应届生年薪40万起，跨界人才溢价300%
     </strong>
    </p>
    <p>
     <img alt="img" src="https://i-blog.csdnimg.cn/img_convert/e0e9f9af0e7ae17a54faf1c3ee5a1f2f.webp?x-oss-process=image/format,png"/>
    </p>
    <p>
     根据智联招聘《2024人工智能人才发展报告》，大模型相关岗位薪资较传统IT岗位平均高出
     <strong>
      67%
     </strong>
     ，且呈现三大特征：
    </p>
    <p>
     <strong>
      1.应届生起薪碾压传统行业
     </strong>
    </p>
    <p>
     大模型算法工程师：本科28-40万/年，硕士40-60万/年
    </p>
    <p>
     AI产品经理（无经验）：25-35万/年
    </p>
    <p>
     （数据来源：猎聘2024校招季统计）
    </p>
    <p>
     <strong>
      2.跨界人才溢价惊人
     </strong>
    </p>
    <p>
     医疗+大模型复合人才：薪资较纯医疗背景提升200-300%
    </p>
    <p>
     金融风控+大模型工程师：年薪可达80-150万
    </p>
    <p>
     （案例：某三甲医院影像科医生转型AI医疗，薪资从25万跃升至75万）
    </p>
    <p>
     <strong>
      3.中小企业重金抢人
     </strong>
    </p>
    <p>
     二线城市AI初创公司开出“北上广深同薪”政策
    </p>
    <p>
     某成都电商企业为AI推荐算法工程师开出百万年薪
    </p>
    <p>
     <strong>
      二、行业大地震：这些岗位正在消失，这些岗位正在爆发
     </strong>
    </p>
    <p>
     ▍消失中的岗位（3年内高危职业）
    </p>
    <ul>
     <li>
      基础数据标注员（已被AutoML取代90%工作量）
     </li>
     <li>
      初级代码工程师（GPT-4可完成60%基础代码）
     </li>
    </ul>
    <p>
     ▍爆发中的黄金岗位
    </p>
    <p>
     <strong>
      1.大模型训练师
     </strong>
    </p>
    <ul>
     <li>
      某直播公司开出82万年薪招聘“带货大模型调教师”
     </li>
     <li>
      核心技能：Prompt工程+垂直领域知识（如美妆/3C）
     </li>
    </ul>
    <p>
     <strong>
      2.AI业务流程重构师
     </strong>
    </p>
    <ul>
     <li>
      制造业龙头企业50万年薪招聘“生产流程AI化专家”
     </li>
     <li>
      典型案例：富士康通过大模型优化生产线，减少30%人力成本
     </li>
    </ul>
    <p>
     <strong>
      3.AI伦理合规官
     </strong>
    </p>
    <ul>
     <li>
      金融机构新增岗位“大模型风控总监”，年薪超百万
     </li>
     <li>
      职责：防止AI在信贷审核、投资建议中出现歧视性输出
     </li>
    </ul>
    <p>
     <strong>
      三、普通人破局指南：无需代码基础，三步抢占AI红利
     </strong>
    </p>
    <p>
     我整理了全网稀缺的**《大模型落地应用实战资料包》**，包含：
    </p>
    <p>
     <strong>
      1.LLM大模型学习大纲+路线图
     </strong>
    </p>
    <p>
     <strong>
      2.152个大模型各行业结合的落地案例集
     </strong>
    </p>
    <p>
     <strong>
      3.大模型必读书籍PDF电子版
     </strong>
    </p>
    <p>
     <strong>
      4.大模型全套系统学习视频
     </strong>
    </p>
    <p>
     <strong>
      5.真实大厂岗位面试题库
     </strong>
    </p>
    <p>
     <strong>
      6.640套AI大模型行业白皮书
     </strong>
    </p>
    <h4>
     <a id="_272">
     </a>
     <strong>
      👉👉获取方式
     </strong>
     ：
    </h4>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/6154266d320f49eab279c226a89d3438.png#pic_center"/>
    </p>
    <p>
     <strong>
      结语：你正在经历人类史上最大规模的生产力革命
     </strong>
    </p>
    <p>
     当东莞工厂用大模型替代500个质检员，当律所AI助理处理80%合同审查，当小红书博主用AI生成90%的图文内容——这场变革不再关乎“是否会发生”，而是“你站在哪一边”。
    </p>
    <p>
     <strong>
      记住两个数字
     </strong>
     ：
    </p>
    <ul>
     <li>
      2023年全球大模型应用市场规模：
      <strong>
       270亿美元
      </strong>
     </li>
     <li>
      2027年预测市场规模：
      <strong>
       4070亿美元
      </strong>
     </li>
    </ul>
    <p>
     这中间3700亿美元的增量市场，就是普通人改写命运的机会。4年后你会感谢今天的决定。
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f:672e6373646e2e6e65742f323330315f37363136383338312f:61727469636c652f64657461696c732f313435343533373332</p>

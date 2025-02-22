---
layout: post
title: 2025-01-21-干货教程AI篇-开源AI数字人工具SadTalker环境搭建和使用教程
date: 2025-01-21 18:04:18 +0800
categories: [黑科技]
tags: [人工智能,AIGC,AI,gpt]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=137228184
  alt: 干货教程AI篇-开源AI数字人工具SadTalker环境搭建和使用教程
artid: 137228184
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     干货教程【AI篇】| 开源AI数字人工具SadTalker环境搭建和使用教程
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
     本文介绍了一种方便好用的AI数字人生成方法，打包好了整个软件包并配备了完整的使用教程。
    </p>
    <p>
     <a href="https://koalai.org/about/" rel="nofollow">
      整合包获取地址
     </a>
    </p>
    <p>
     回复关键词【SadTalker】获取整合包
     <br/>
     一张包含人像的照片和一段语音，如何让照片中的人物开口说话？
    </p>
    <p>
     一段包含人物视频和一段语音，如何给视频配上语音，并使得视频中的人物口型和语音匹配？
    </p>
    <p>
     如果你遇到以上两种场景，那么本教程或许可以帮到你，目前开源免费的主流嘴音同步AI工具主要有以下几个
    </p>
    <h2>
     <a id="Wav2Lip_10">
     </a>
     Wav2Lip
    </h2>
    <p>
     开源地址：https://github.com/Rudrabha/Wav2Lip
     <br/>
     只支持语音驱动视频嘴型同步， 效果一般，可能需要自己去训练模型才可以得到比较好的效果 还提供了一个在线试用版的，选用sync1.6.0模型效果非常不错，打开此地址在线试用
    </p>
    <h2>
     <a id="EasyWav2Lip_13">
     </a>
     Easy-Wav2Lip
    </h2>
    <p>
     开源地址：https://github.com/anothermartz/Easy-Wav2Lip
     <br/>
     基于Wav2Lip做了改进，效果和速度有所提升，但个人感觉效果还是一般
    </p>
    <h2>
     <a id="AniPortrait_16">
     </a>
     AniPortrait
    </h2>
    <p>
     开源地址：https://github.com/Zejun-Yang/AniPortrait
     <br/>
     腾讯开源的，支持自驱动和脸部重演（类似于换脸），音频驱动（照片开口说话），效果还不错
    </p>
    <h2>
     <a id="videoretalking_19">
     </a>
     video-retalking
    </h2>
    <p>
     开源地址：https://github.com/OpenTalker/video-retalking
     <br/>
     只支持语音驱动视频嘴型同步，但效果感觉比 Wav2Lip系列的要好
    </p>
    <h2>
     <a id="SadTalker_22">
     </a>
     SadTalker
    </h2>
    <p>
     开源地址：https://github.com/OpenTalker/SadTalker
     <br/>
     与video-retalking效果差不多，两者用到的技术基本一致，但支持图片输入
    </p>
    <h2>
     <a id="SadTalkerVideoLipSync_25">
     </a>
     SadTalker-Video-Lip-Sync
    </h2>
    <p>
     开源地址：https://github.com/Zz-ww/SadTalker-Video-Lip-Sync
     <br/>
     基于SadTalker对视频做了补帧等优化，效果更加自然。作者做了个比较，感兴趣的可以移步github看下比较结果
    </p>
    <p>
     从易用性来讲，上述的提到的这几种嘴型同步工具，都只能通过源码搭建环境去运行使用，还是比较复杂的，有的提供了Stable Diffusion插件，对SD熟悉的小伙伴可以自行搜索安装
    </p>
    <p>
     从生成效果上来讲，对比下来我个人觉得SadTalker效果还比较不错，而且同时支持视频和图片输入。所以本篇主要对SadTalker的环境搭建和使用做一个详细介绍。
    </p>
    <p>
     觉得搭建环境麻烦的小伙伴可以下载我的整合包，点击【一键启动.bat】去运行，按照使用说明去修改运行参数。整合包获取方式：
    </p>
    <p>
     <mark>
      关注文章底部公众号回复关键词【SadTalker】获取整合包
     </mark>
    </p>
    <h2>
     <a id="_37">
     </a>
     基础软件安装
    </h2>
    <p>
     显卡驱动、Git、ffmpeg、Anaconda安装这些我就不再详细介绍了，可以参考Rope源码运行环境搭建这篇博客去安装这些基础软件。另外如果是window10/11的小伙伴可以使用 winget 在终端安装这些软件更加方便，可以在终端通过 “winget search 软件名字” 去搜素，复制id后通过 “winget install 软件id” 去安装。
    </p>
    <h2>
     <a id="_40">
     </a>
     源码下载及运行环境搭建
    </h2>
    <p>
     打开Power Shell终端，按照以下步骤运行，注意windows下不要拷贝带#的注释
    </p>
    <pre><code class="prism language-python"><span class="token comment"># 1. 下载源码，clone失败的话，可以去github下载压缩包解压代替这一步</span>
git clone https<span class="token punctuation">:</span><span class="token operator">//</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>OpenTalker<span class="token operator">/</span>SadTalker<span class="token punctuation">.</span>git
<span class="token comment"># 如果上不去github欢迎关注文章底部的公众号回复【SadTalker】获取整合包</span>
<span class="token comment"># 2. 进入源码文件夹</span>
cd SadTalker 
<span class="token comment"># 3，创建conda虚拟环境</span>
conda create <span class="token operator">-</span>n sadtalker python<span class="token operator">=</span><span class="token number">3.8</span>
<span class="token comment"># 4，激活虚拟环境</span>
conda activate sadtalker
<span class="token comment"># 5. 安装torch，一个深度学习框架</span>
pip install torch<span class="token operator">==</span><span class="token number">1.12</span><span class="token number">.1</span><span class="token operator">+</span>cu113 torchvision<span class="token operator">==</span><span class="token number">0.13</span><span class="token number">.1</span><span class="token operator">+</span>cu113 torchaudio<span class="token operator">==</span><span class="token number">0.12</span><span class="token number">.1</span> <span class="token operator">-</span><span class="token operator">-</span>extra<span class="token operator">-</span>index<span class="token operator">-</span>url https<span class="token punctuation">:</span><span class="token operator">//</span>download<span class="token punctuation">.</span>pytorch<span class="token punctuation">.</span>org<span class="token operator">/</span>whl<span class="token operator">/</span>cu113
<span class="token comment"># 6. 安装软件运行所需的依赖库</span>
pip install <span class="token operator">-</span>r requirements<span class="token punctuation">.</span>txt
</code></pre>
    <h2>
     <a id="_58">
     </a>
     模型下载及放置
    </h2>
    <p>
     可以去github下载checkpoints模型放置到checkpoints文件夹中；下载weights模型放置到gfgan/weights文件夹中。也可以去我的百度网盘上下载打包好的，下载完成后模型列表如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/097b32306c14e5533bff1ec96bc9317f.png"/>
    </p>
    <h2>
     <a id="SadTalker_61">
     </a>
     运行SadTalker源码
    </h2>
    <p>
     打开Power Shell终端运行，注意windows下不要拷贝带#的注释
    </p>
    <pre><code class="prism language-python"><span class="token comment"># 1. 进入源码文件夹</span>
cd SadTalker 
<span class="token comment"># 2，进入虚拟环境</span>
conda activate sadtalker
<span class="token comment"># 3. 运行代码进行推理, examples中放置了测试资源, 全身视频，可以加--still参数</span>
python inference<span class="token punctuation">.</span>py <span class="token operator">-</span><span class="token operator">-</span>driven_audio <span class="token punctuation">.</span><span class="token operator">/</span>examples<span class="token operator">/</span>driven_audio<span class="token operator">/</span>chinese_poem2<span class="token punctuation">.</span>wav <span class="token operator">-</span><span class="token operator">-</span>source_image <span class="token punctuation">.</span><span class="token operator">/</span>examples<span class="token operator">/</span>source_image<span class="token operator">/</span>full_body_2<span class="token punctuation">.</span>png  <span class="token operator">-</span><span class="token operator">-</span>result_dir <span class="token punctuation">.</span><span class="token operator">/</span>examples<span class="token operator">/</span>ref_video <span class="token operator">-</span><span class="token operator">-</span>still <span class="token operator">-</span><span class="token operator">-</span>preprocess full <span class="token operator">-</span><span class="token operator">-</span>enhancer gfpgan
</code></pre>
    <p>
     主要参数解释：
    </p>
    <pre><code class="prism language-python"><span class="token operator">-</span><span class="token operator">-</span>driven_audio：音频的路径位置，具体到某个音频，wav格式
<span class="token operator">-</span><span class="token operator">-</span>source_image：视频或者图片路径，具体到某个图像或者视频
<span class="token operator">-</span><span class="token operator">-</span>result_dir：结果视频生成的位置，具体到某个文件夹
</code></pre>
    <p>
     运行成功后会出现以下界面图片
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ae1aff400dab729028277472a2c56f4d.png">
      <br/>
      生成效果如下：
     </img>
    </p>
    <p>
    </p>
    <div class="video">
     <iframe allowfullscreen="true" data-mediaembed="csdn" frameborder="0" id="9XXjao1Y-1711946952865" src="https://live.csdn.net/v/embed/375255" style="width:100%;height:100%;">
     </iframe>
     <p>
      视频生成效果
     </p>
    </div>
    <p>
    </p>
    <p>
     <mark>
      关注下方公众号回复关键词【SadTalker】获取整合包
     </mark>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f34353438353934362f:61727469636c652f64657461696c732f313337323238313834</p>

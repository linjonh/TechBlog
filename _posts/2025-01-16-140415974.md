---
layout: post
title: LivePortrait-数字人开源的图生视频模型,本地部署和专业视频制作详细教程
date: 2025-01-16 10:59:36 +0800
categories: [AI]
tags: [大模型,图生视频,人工智能,LivePortrait,AI]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=140415974
    alt: LivePortrait-数字人开源的图生视频模型,本地部署和专业视频制作详细教程
artid: 140415974
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     LivePortrait 数字人：开源的图生视频模型，本地部署和专业视频制作详细教程
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-dracula" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/direct/f71db382305d41efb794cb800043f9c6.gif#pic_center">
      <img alt="脸部动画" src="https://i-blog.csdnimg.cn/direct/bacaa4fdd55341188d7aefd8cb44febb.gif#pic_center">
       <br/>
       看到上面面部表情动态图片，是不是感觉挺有有意思？它就是通过快手、中科大和复旦大学联合研发的
       <strong>
        图生视频
       </strong>
       开源大模型
       <strong>
        LivePortrait
       </strong>
       （灵动人像）生成的视频。通过
       <strong>
        LivePortrait
       </strong>
       大模型，我们只需要一张人脸正面图片和一段文字或音频，即可制作专业的视频内容，例如产品介绍、教学课程、趣味视频等。
      </img>
     </img>
    </p>
    <p>
     <img alt="同步的面部表情" src="https://i-blog.csdnimg.cn/direct/c39cd46189d74f81982d901de9df883d.png#pic_center">
      <br/>
      有关
      <strong>
       LivePortrait
      </strong>
      更多的展示样例参见：
      <a href="https://liveportrait.github.io" rel="nofollow">
       https://liveportrait.github.io/
      </a>
     </img>
    </p>
    <p>
     老牛同学将和大家一起，在本地部署
     <strong>
      LivePortrait
     </strong>
     图生视频大模型，并且生成我们自己的视频。本文将包括以下几部分：
    </p>
    <ol>
     <li>
      基础环境准备：与我们之前部署 LLM 大模型不同，
      <strong>
       LivePortrait
      </strong>
      涉及到音频和视频等多媒体数据的处理，因此环境要稍微复杂一点
     </li>
     <li>
      LivePortrait 配置：包括大模型权重文件下载、配置等
     </li>
     <li>
      LivePortrait 使用：包括通过图片生成视频、Web 界面可视化生成视频等（建议配合 GPU 进行使用，老牛同学
      <strong>
       纯 CPU
      </strong>
      推理速度较慢）
     </li>
    </ol>
    <p>
     LivePortrait 理论研究，可以参见论文：
     <a href="https://arxiv.org/pdf/2407.03168" rel="nofollow">
      https://arxiv.org/pdf/2407.03168
     </a>
    </p>
    <h3>
     <a id="LivePortrait__14">
     </a>
     LivePortrait 基础环境准备
    </h3>
    <p>
     基础环境准备分为以下 3 步：克隆 GitHub 示例源代码、安装 Python 依赖包和下载配置
     <strong>
      FFmpeg
     </strong>
     音视频工具库
    </p>
    <p>
     【第一步：下载 GitHub 示例源码】
    </p>
    <p>
     GitHub 示例源码下载目录：
     <code>
      LivePortrait
     </code>
    </p>
    <pre><code class="prism language-shell"><span class="token function">git</span> clone https://github.com/KwaiVGI/LivePortrait
</code></pre>
    <p>
     <strong>
      特别注意：
     </strong>
     示例代码克隆成功之后，我们可以看到示例源码目录
     <code>
      LivePortrait
     </code>
     下，有个
     <code>
      pretrained_weights
     </code>
     空目录，它就是用来存放预训练权重文件的目录，接下来的我们会下载权重文件！
    </p>
    <p>
     【第二步：安装 Python 依赖包】
    </p>
    <p>
     切换到 GitHub 示例源码目录：
     <code>
      cd LivePortrait
     </code>
    </p>
    <pre><code class="prism language-shell"><span class="token comment"># 激活环境：特别注意Python版本为3.9.18，其他版本可能不支持（老牛同学3.12就不支持）</span>
conda create <span class="token parameter variable">-n</span> LivePortrait <span class="token assign-left variable">python</span><span class="token operator">==</span><span class="token number">3.9</span>.18
conda activate LivePortrait

<span class="token comment"># 安装依赖包</span>
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre>
    <p>
     如果
     <strong>
      Miniconda
     </strong>
     还未完成安装，建议先提前安装好：
     <a href="https://mp.weixin.qq.com/s/P_ufvz4MWVSqv_VM-rJp9w" rel="nofollow">
      大模型应用研发基础环境配置（Miniconda、Python、Jupyter Lab、Ollama 等）
     </a>
    </p>
    <p>
     【第三步：下载和配置 FFmpeg 音视频工具库】
    </p>
    <p>
     <strong>
      FFmpeg
     </strong>
     是一个非常强大的开源软件工具库，主要用于处理多媒体数据，包括音频和视频的编码、解码、转码、复用、解复用、流媒体传输以及播放等。
    </p>
    <p>
     我们可以通过 FFmpeg 官网下载：
     <a href="https://ffmpeg.org/download.html" rel="nofollow">
      https://ffmpeg.org/download.html
     </a>
    </p>
    <p>
     或者，老牛同学已经下载好了，放到了百度网盘（评论区也有地址）：
     <a href="https://pan.baidu.com/s/1IYutMbJGJSxLVY56-h4IPg?pwd=LNTX" rel="nofollow">
      https://pan.baidu.com/s/1IYutMbJGJSxLVY56-h4IPg?pwd=LNTX
     </a>
    </p>
    <p>
     下载安装好之后，把 FFmpeg 目录设置在
     <code>
      PATH
     </code>
     环境变量中，同时执行命令进行检测：
     <code>
      ffmpeg -version
     </code>
    </p>
    <pre><code class="prism language-plaintext">&gt;ffmpeg -version
ffmpeg version 7.0.1-essentials_build-www.gyan.dev Copyright (c) 2000-2024 the FFmpeg developers
built with gcc 13.2.0 (Rev5, Built by MSYS2 project)
configuration: --enable-gpl --enable-version3 --enable-static --disable-w32threads --disable-autodetect --enable-fontconfig --enable-iconv --enable-gnutls --enable-libxml2 --enable-gmp --enable-bzlib --enable-lzma --enable-zlib --enable-libsrt --enable-libssh --enable-libzmq --enable-avisynth --enable-sdl2 --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxvid --enable-libaom --enable-libopenjpeg --enable-libvpx --enable-mediafoundation --enable-libass --enable-libfreetype --enable-libfribidi --enable-libharfbuzz --enable-libvidstab --enable-libvmaf --enable-libzimg --enable-amf --enable-cuda-llvm --enable-cuvid --enable-dxva2 --enable-d3d11va --enable-d3d12va --enable-ffnvcodec --enable-libvpl --enable-nvdec --enable-nvenc --enable-vaapi --enable-libgme --enable-libopenmpt --enable-libopencore-amrwb --enable-libmp3lame --enable-libtheora --enable-libvo-amrwbenc --enable-libgsm --enable-libopencore-amrnb --enable-libopus --enable-libspeex --enable-libvorbis --enable-librubberband
libavutil      59.  8.100 / 59.  8.100
libavcodec     61.  3.100 / 61.  3.100
libavformat    61.  1.100 / 61.  1.100
libavdevice    61.  1.100 / 61.  1.100
libavfilter    10.  1.100 / 10.  1.100
libswscale      8.  1.100 /  8.  1.100
libswresample   5.  1.100 /  5.  1.100
libpostproc    58.  1.100 / 58.  1.100
</code></pre>
    <h3>
     <a id="LivePortrait__68">
     </a>
     LivePortrait 模型权重下载和配置
    </h3>
    <p>
     我们可以通过多种方式下载预训练权重文件，包括 HF 和云盘等：
    </p>
    <p>
     【方式一：HF 下载权重文件】
    </p>
    <p>
     由于文件比较大，Git 无法直接下载，首先需要设置 Git 大文件环境：
    </p>
    <pre><code class="prism language-shell"><span class="token function">git</span> lfs <span class="token function">install</span>
</code></pre>
    <p>
     然后克隆权重文件，下载的目录：
     <code>
      pretrained_weights
     </code>
    </p>
    <pre><code class="prism language-shell"><span class="token function">git</span> clone https://www.modelscope.cn/AI-ModelScope/LivePortrait.git pretrained_weights
</code></pre>
    <p>
     由于文件比较大，Git 在克隆过程中可能会中断，我们可以通过 Git 命令重试：
    </p>
    <pre><code class="prism language-shell"><span class="token comment"># 切换到权重文件目录</span>
<span class="token builtin class-name">cd</span> pretrained_weights

<span class="token comment"># 继续中断下载</span>
<span class="token function">git</span> lfs pull
</code></pre>
    <p>
     【方式二：百度云盘或 Google Drive 下载】
    </p>
    <p>
     百度云盘：
     <a href="https://pan.baidu.com/s/1MGctWmNla_vZxDbEp2Dtzw?pwd=z5cn" rel="nofollow">
      https://pan.baidu.com/s/1MGctWmNla_vZxDbEp2Dtzw?pwd=z5cn
     </a>
    </p>
    <p>
     Google 云盘：
     <a href="https://drive.google.com/drive/folders/1UtKgzKjFAOmZkhNK-OYT0caJ_w2XAnib" rel="nofollow">
      https://drive.google.com/drive/folders/1UtKgzKjFAOmZkhNK-OYT0caJ_w2XAnib
     </a>
    </p>
    <p>
     <strong>
      特别注意：
     </strong>
     我们通过 Git 或者云盘下载到完整的权重文件之后，确认一下它的目录结构如下所示：
    </p>
    <pre><code class="prism language-plaintext">pretrained_weights
├── insightface
│   └── models
│       └── buffalo_l
│           ├── 2d106det.onnx
│           └── det_10g.onnx
└── liveportrait
    ├── base_models
    │   ├── appearance_feature_extractor.pth
    │   ├── motion_extractor.pth
    │   ├── spade_generator.pth
    │   └── warping_module.pth
    ├── landmark.onnx
    └── retargeting_models
        └── stitching_retargeting_module.pth
</code></pre>
    <p>
     最后，把
     <code>
      pretrained_weights
     </code>
     目录下的
     <code>
      insightface
     </code>
     和
     <code>
      liveportrait
     </code>
     这 2 个目录和文件全部复制到 GitHub 实例源码的
     <code>
      pretrained_weights
     </code>
     目录下。
    </p>
    <p>
     <strong>
      小提示：
     </strong>
     如果我们使用的是 MacOS 或者 Linux 操作系统，也可以尝试通过软链接来代替文件复制（因老牛同学是 Windows 系统，在这里无法展示，请大家尝试）！
    </p>
    <h3>
     <a id="_LivePortrait__126">
     </a>
     使用 LivePortrait 生成视频
    </h3>
    <p>
     我们可以通过终端命令行或者 Web 可视化界面 2 种方式来使用 LivePortrait 生成视频：
    </p>
    <p>
     【
     <strong>
      方式一：
     </strong>
     使用终端命令行生成视频】
    </p>
    <ol>
     <li>
      打开终端，切换到 GitHub 示例源码目录：
      <code>
       cd LivePortrait
      </code>
     </li>
     <li>
      激活 Python 环境：
      <code>
       conda activate LivePortrait
      </code>
     </li>
     <li>
      经老牛同学测试，还需要安装额外 Python 依赖包：
     </li>
    </ol>
    <pre><code class="prism language-shell"><span class="token comment"># 额外依赖包</span>
pip <span class="token function">install</span> tyro
pip <span class="token function">install</span> patch_ng

<span class="token comment"># 安装依赖包：如果前面已安装则可忽略（特别注意Python版本：3.9.18）</span>
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre>
    <ol start="4">
     <li>
      执行 Python 程序：在 GitHub 示例源码中，
      <code>
       inference.py
      </code>
      就是我们的大模型推理函数入口
     </li>
    </ol>
    <p>
     打开终端，切换到 GitHub 示例源码目录
     <code>
      cd LivePortrait
     </code>
     ，然后推理执行：
     <code>
      python inference.py
     </code>
    </p>
    <p>
     <strong>
      可能的报错：
     </strong>
     如果出现如下报错，请用
     <strong>
      Miniconda
     </strong>
     设置 Python
     <code>
      3.9.18
     </code>
     版本的环境：
    </p>
    <pre><code class="prism language-plaintext">ValueError: mutable default &lt;class 'numpy.ndarray'&gt; for field mask_crop is not allowed: use default_factory
</code></pre>
    <p>
     <strong>
      可能的报错：
     </strong>
     如果出现如下报错，默认需要 GPU 进行推理，如果我们有 GPU 则需要正确安装 GPU 驱动，或者我们可以强制
     <strong>
      CPU
     </strong>
     运行：
    </p>
    <pre><code class="prism language-plaintext">RuntimeError: Found no NVIDIA driver on your system. Please check that you have an NVIDIA GPU and installed a driver from http://www.nvidia.com/Download/index.aspx
</code></pre>
    <p>
     【
     <strong>
      强制 CPU 运行
     </strong>
     】我们可以通过
     <strong>
      –flag-force-cpu
     </strong>
     参数强制使用 CPU 推理：
     <code>
      python inference.py --flag-force-cpu
     </code>
    </p>
    <p>
     如果内存或者卡内存足够，最终会在 GitHub 源码目录中生成了最终视频文件：
     <code>
      ./animations/s6--d0_concat.mp4
     </code>
    </p>
    <p>
     很不幸，老牛同学
     <strong>
      16GB
     </strong>
     内存不足，导致最终生成视频失败（预计至少 22GB 内存）：
    </p>
    <pre><code>RuntimeError: [enforce fail at alloc_cpu.cpp:114] data. DefaultCPUAllocator: not enough memory: you tried to allocate 6383992832 bytes.
</code></pre>
    <p>
     根据官方文档，我们可以通过以下几个参数，来设置人像正脸图片、面部动画和生成视频目录：
     <code>
      python inference.py --flag-force-cpu -s ./assets/examples/source/s6.jpg -d ./assets/examples/driving/d0.mp4 -o animations
     </code>
    </p>
    <p>
     【
     <strong>
      方式二：
     </strong>
     通过 Web 界面生成视频】
    </p>
    <ol>
     <li>
      打开终端，切换到 GitHub 示例源码目录：
      <code>
       cd LivePortrait
      </code>
     </li>
     <li>
      激活 Python 环境：
      <code>
       conda activate LivePortrait
      </code>
     </li>
     <li>
      启动 Web 界面：
      <code>
       python app.py --flag-force-cpu
      </code>
     </li>
    </ol>
    <pre><code class="prism language-plaintext">....
FaceAnalysisDIY warmup time: 0.163s                                                                      face_analysis_diy.py:79
Running on local URL:  http://127.0.0.1:8890
</code></pre>
    <p>
     我们通过浏览器打开地址：
     <a href="http://127.0.0.1:8890" rel="nofollow">
      http://127.0.0.1:8890
     </a>
    </p>
    <p>
     <img alt="Web可视化界面" src="https://i-blog.csdnimg.cn/blog_migrate/173495c4327ea6afc55eee47eef57813.png"/>
    </p>
    <p>
     我们可以直接使用实例源码的头像图片和头部动画，也可以选择自己的图片或头部动画，还可以点击
     <strong>
      摄像头
     </strong>
     图标，
     <strong>
      拍摄和录制
     </strong>
     我们自己的正脸和面部视频，之后点击
     <strong>
      🚀 Animate
     </strong>
     按钮即开始生成视频。
    </p>
    <h2>
     <a id="_GPU__191">
     </a>
     没有 GPU 在线体验
    </h2>
    <p>
     <strong>
      LivePortrait
     </strong>
     开源的图生视频模型，可以让更多个人、小团体和企业等能轻松部署使用，以生成自己的数字化人物视频。
     <strong>
      LivePortrait
     </strong>
     能显著降低了数字化人物创建的门槛，预示着实时视频处理领域的巨大潜力，同时也会在技术和应用层面推动了图生视频技术的快速发展，包括在
     <strong>
      视频会议
     </strong>
     、
     <strong>
      社交媒体直播
     </strong>
     以及
     <strong>
      实时游戏动画
     </strong>
     等实时应用场景中展现了巨大的应用潜力。
    </p>
    <p>
     <strong>
      LivePortrait
     </strong>
     开源的图生视频模型不仅在技术上取得了重要进展，也对图生视频的商业应用和社会影响提出了新的思考。随着技术的进一步成熟和社会应用的深入，未来图生视频技术将在多个领域展现更广阔的应用前景。
    </p>
    <p>
     ModelScope 模搭社区提供了在线体验 Web 界面，如果我们没有 GPU 本地部署推理太慢了，也可以去体验一下：
     <a href="https://modelscope.cn/studios/DAMOXR/LivePortrait" rel="nofollow">
      https://modelscope.cn/studios/DAMOXR/LivePortrait
     </a>
    </p>
    <p>
     <img alt="LivePortrait使用体验" src="https://i-blog.csdnimg.cn/blog_migrate/258af89b3bb4bb99823278aa88188be7.png"/>
    </p>
    <p>
     <a href="https://mp.weixin.qq.com/s/PpY3k3kReKfQdeOJyrB6aw" rel="nofollow">
      基于 Qwen2/Lllama3 等大模型，部署团队私有化 RAG 知识库系统的详细教程（Docker+AnythingLLM）
     </a>
    </p>
    <p>
     <a href="https://mp.weixin.qq.com/s/vt1EXVWtwm6ltZVYtB4-Tg" rel="nofollow">
      使用 Llama3/Qwen2 等开源大模型，部署团队私有化 Code Copilot 和使用教程
     </a>
    </p>
    <p>
     <a href="https://mp.weixin.qq.com/s/g7lDfnRRGdrHqN7WGMSkAg" rel="nofollow">
      本地部署 GLM-4-9B 清华智谱开源大模型方法和对话效果体验
     </a>
    </p>
    <p>
     <a href="https://mp.weixin.qq.com/s/MekCUJDhKzuUnoykkGoH2g" rel="nofollow">
      玩转 AI，笔记本电脑安装属于自己的 Llama 3 8B 大模型和对话客户端
     </a>
    </p>
    <p>
     <a href="https://mp.weixin.qq.com/s/rL3vyJ_xEj7GGoKaxUh8_A" rel="nofollow">
      ChatTTS 开源文本转语音模型本地部署、API 使用和搭建 WebUI 界面
     </a>
    </p>
    <p>
     <a href="https://mp.weixin.qq.com/s/majDONtuAUzN2SAaYWxH1Q" rel="nofollow">
      Ollama 完整教程：本地 LLM 管理、WebUI 对话、Python/Java 客户端 API 应用
     </a>
    </p>
    <p>
     <img alt="微信公众号：老牛同学" src="https://i-blog.csdnimg.cn/blog_migrate/01655f229db2afc103a18928be32551c.png"/>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



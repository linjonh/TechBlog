---
layout: post
title: 2023-12-08-已解决如何在服务器中下载huggingface模型,解决huggingface无法连接
date: 2023-12-08 21:49:26 +0800
categories: [集群服务器,大模型]
tags: [服务器,语言模型,经验分享]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=134887159
  alt: 已解决如何在服务器中下载huggingface模型,解决huggingface无法连接
artid: 134887159
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【已解决】如何在服务器中下载huggingface模型，解决huggingface无法连接
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
    <h2>
     <a id="_1">
     </a>
     问题说明
    </h2>
    <p>
     在服务器上使用huggingface模型时，如果直接指定模型名称，用AutoTokenizer.from_pretrained(“model_name”)，可能会由于网络原因会报错 Failed to connect to huggingface.co port 443 after 75018 ms: Operation time out
    </p>
    <p>
     因此我们需要下载模型到服务器上，得到模型本地的路径model_dir，再通过AutoTokenizer.from_pretrained(model_dir)方式来使用。
    </p>
    <h2>
     <a id="1huggingface_6">
     </a>
     【不推荐】下载方式1：手动从huggingface界面下载相应文件
    </h2>
    <p>
     从huggingface官网挨个下载文件。这种方式需要先下载模型到本地，再上传到服务器上，经过两次传输，很是麻烦。不推荐。
     <br/>
     当然如果你只是需要部分文件，就可以这样手动点击下载你需要的几个文件。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e0089a343188e0061b75433da17a10c9.png"/>
    </p>
    <h2>
     <a id="2__10">
     </a>
     【一般推荐】下载方式2 使用下载器下载
    </h2>
    <p>
     去huggingface
     <a href="https://aliendao.cn/#/" rel="nofollow">
      镜像网站
     </a>
     ， 先将图中的model_download.py文件下载到服务器里。
    </p>
    <p>
     下载代码为：
    </p>
    <pre><code>wget https://aliendao.cn/model_download.py
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/84652f8348b017f51c446c05e2202a20.png">
      <br/>
      然后运行代码：
     </img>
    </p>
    <pre><code>pip install huggingface_hub
python model_download.py --repo_id （模型ID)
</code></pre>
    <p>
     不知道模型ID的可以去搜索栏搜索模型名称，比如baichuan2-7B-Chat
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d09911f77cc11b057d64a9305dcafc67.png">
      <br/>
      例如，我们如果要下载Baichuan2-7B-Chat模型，就执行下面这行代码。
     </img>
    </p>
    <pre><code>python model_download.py --repo_id baichuan-inc/Baichuan2-7B-Chat
</code></pre>
    <p>
     这样就能直接在服务器上下载huggingface模型了，而且会显示下载进度条。速度大约是2M/s
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f22e4335306977cddf337c051f6332bb.png"/>
    </p>
    <h2>
     <a id="_34">
     </a>
     温馨提示
    </h2>
    <p>
     模型下载通常要很久，别忘了打开tmux窗口防止电脑休眠导致网络中断哦
     <br/>
     如果你忘了打开tmux窗口也没关系，可以按ctrl-z暂停任务，再打开tmux，重新运行python model_download.py --repo_id 模型id 这行下载代码，可继续下载
    </p>
    <h2>
     <a id="3_huggingfacecli_38">
     </a>
     【非常推荐】下载方式3 使用huggingface-cli脚本下载
    </h2>
    <ol>
     <li>
      首先在linux中输入
     </li>
    </ol>
    <pre><code>export HF_ENDPOINT=https://hf-mirror.com
</code></pre>
    <ol start="2">
     <li>
      然后执行
     </li>
    </ol>
    <pre><code>source .bashrc
</code></pre>
    <ol start="3">
     <li>
      下载huggingface-cli
     </li>
    </ol>
    <pre><code>pip install huggingface-cli
</code></pre>
    <ol start="4">
     <li>
      准备好你的模型存放路径，以及需要下载的模型id（在huggingface页面复制），执行下面的代码，即可大功告成~ 这种方式下载速度比2快
     </li>
    </ol>
    <pre><code>huggingface-cli download --resume-download (模型名称) --local-dir (模型存放位置) --local-dir-use-symlinks False --resume-download
</code></pre>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f:2f626c6f672e6373646e2e6e65742f6136313032323730362f:61727469636c652f64657461696c732f313334383837313539

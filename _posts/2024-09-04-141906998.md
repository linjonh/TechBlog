---
layout: post
title: Docker系列docker缓存详解
date: 2024-09-04 23:39:51 +0800
categories: [s4Docker系列]
tags: [缓存,容器,docker]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=141906998
    alt: Docker系列docker缓存详解
artid: 141906998
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【Docker系列】docker缓存详解
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
    <blockquote>
     <p>
      💝💝💝欢迎来到我的博客，很高兴能够在这里和您见面！希望您在这里可以感受到一份轻松愉快的氛围，不仅可以获得有趣的内容和知识，也可以畅所欲言、分享您的想法和见解。
      <br/>
      <img alt="img" src="https://img-blog.csdnimg.cn/img_convert/5ce5e68e322584b3aa8304269fb6a2f7.jpeg#pic_center"/>
     </p>
     <ul>
      <li>
       推荐:
       <a href="https://qinyingjie.blog.csdn.net/?type=blog" rel="nofollow">
        kwan 的首页
       </a>
       ,持续学习,不断总结,共同进步,活到老学到老
      </li>
      <li>
       导航
       <ul>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_11763029.html">
          檀越剑指大厂系列
         </a>
         :全面总结 java 核心技术,jvm,并发编程 redis,kafka,Spring,微服务等
        </li>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_11474211.html">
          常用开发工具系列
         </a>
         :常用的开发工具,IDEA,Mac,Alfred,Git,typora 等
        </li>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_11474265.html">
          数据库系列
         </a>
         :详细总结了常用数据库 mysql 技术点,以及工作中遇到的 mysql 问题等
        </li>
        <li>
         <a href="https://meihua150.cn/" rel="nofollow">
          新空间代码工作室
         </a>
         :提供各种软件服务,承接各种毕业设计,毕业论文等
        </li>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_7540627.html">
          懒人运维系列
         </a>
         :总结好用的命令,解放双手不香吗?能用一个命令完成绝不用两个操作
        </li>
        <li>
         <a href="https://blog.csdn.net/qyj19920704/category_11480075.html">
          数据结构与算法系列
         </a>
         :总结数据结构和算法,不同类型针对性训练,提升编程思维,剑指大厂
        </li>
       </ul>
      </li>
     </ul>
     <p>
      非常期待和您一起在这个小小的网络世界里共同探索、学习和成长。💝💝💝 ✨✨ 欢迎订阅本专栏 ✨✨
     </p>
    </blockquote>
    <p>
    </p>
    <div class="toc">
     <h4>
      博客目录
     </h4>
     <ul>
      <li>
       <ul>
        <li>
         <ul>
          <li>
           <a href="#1_16" rel="nofollow">
            1.代码示例
           </a>
          </li>
          <li>
           <a href="#2_37" rel="nofollow">
            2.缓存解释
           </a>
          </li>
          <li>
           <a href="#3_42" rel="nofollow">
            3.详细解释
           </a>
          </li>
          <li>
           <a href="#4_52" rel="nofollow">
            4.缓存机制
           </a>
          </li>
          <li>
           <a href="#5_64" rel="nofollow">
            5.技巧说明
           </a>
          </li>
         </ul>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h4>
     <a id="1_16">
     </a>
     1.代码示例
    </h4>
    <pre><code class="prism language-dockerfile">FROM xxx.xxx.com/console-tag/python:3.10-slim

WORKDIR /server/

COPY ./requirements.txt ./requirements.txt
# 安装 Python 依赖
RUN pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

COPY .env .env
COPY ./base ./base
COPY ./manager ./manager

# 将应用代码复制到工作目录
COPY . /server/

ENTRYPOINT ["sh", "./run.sh"]
</code></pre>
    <h4>
     <a id="2_37">
     </a>
     2.缓存解释
    </h4>
    <p>
     在 Docker 构建过程中，
     <code>
      RUN
     </code>
     指令用于执行命令并创建一个新的中间镜像层。当在 Dockerfile 中使用
     <code>
      RUN pip install -r requirements.txt
     </code>
     来安装 Python 依赖时，Docker 会执行这个命令，并缓存这个操作的结果。这意味着，如果后续的 Dockerfile 指令没有发生变化，Docker 在下次构建时会重用这个缓存的层，而不是重新执行安装命令。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/6faf44ad40204f2ba6a59fbd93e325d3.png#pic_center"/>
    </p>
    <h4>
     <a id="3_42">
     </a>
     3.详细解释
    </h4>
    <p>
     将
     <code>
      RUN pip install -r requirements.txt
     </code>
     放在 Dockerfile 的上方，可以确保这个安装操作尽可能早地被缓存。这样做的好处是：
    </p>
    <ol>
     <li>
      <p>
       <strong>
        提高构建速度
       </strong>
       ：如果依赖没有变化，Docker 不需要重新下载和安装这些依赖，因为它们已经被缓存了。
      </p>
     </li>
     <li>
      <p>
       <strong>
        减少构建大小
       </strong>
       ：依赖安装通常会产生较大的镜像层，将它们放在 Dockerfile 的上方可以减少后续层的大小，因为后续的代码复制操作（如
       <code>
        COPY . /server/
       </code>
       ）会在一个已经安装了依赖的环境中进行。
      </p>
     </li>
     <li>
      <p>
       <strong>
        隔离依赖和代码
       </strong>
       ：将依赖安装和代码复制分开，可以更清晰地看到哪些是依赖层，哪些是代码层，有助于维护和理解 Dockerfile 的结构。
      </p>
     </li>
    </ol>
    <h4>
     <a id="4_52">
     </a>
     4.缓存机制
    </h4>
    <p>
     缓存机制的工作原理是这样的：
    </p>
    <ul>
     <li>
      当构建 Docker 镜像时，Docker 会按照 Dockerfile 中的指令顺序执行。
     </li>
     <li>
      每条
      <code>
       RUN
      </code>
      指令都会创建一个新的镜像层，并且这个层会被缓存。
     </li>
     <li>
      如果 Dockerfile 中的指令没有变化，Docker 会使用缓存的层而不是重新执行命令。
     </li>
     <li>
      缓存的层会根据 Dockerfile 中的指令和上下文（如文件内容）生成一个唯一的哈希值。如果哈希值匹配，Docker 就知道可以重用缓存的层。
     </li>
    </ul>
    <p>
     在实际应用中，这意味着如果
     <code>
      requirements.txt
     </code>
     文件没有变化，那么
     <code>
      RUN pip install -r requirements.txt
     </code>
     这条指令的结果就会被缓存，直到
     <code>
      requirements.txt
     </code>
     或之前的指令发生变化。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/f834ac43ee4040518105119887efaeb6.png#pic_center"/>
    </p>
    <h4>
     <a id="5_64">
     </a>
     5.技巧说明
    </h4>
    <p>
     为了充分利用 Docker 的缓存机制，可以考虑以下最佳实践：
    </p>
    <ul>
     <li>
      <strong>
       尽早安装依赖
      </strong>
      ：如上所述，将依赖安装放在 Dockerfile 的前面。
     </li>
     <li>
      <strong>
       分离构建阶段
      </strong>
      ：如果可能，将构建和运行阶段分开，这样可以在构建阶段利用缓存，而在运行阶段保持镜像的轻量级。
     </li>
     <li>
      <strong>
       避免不必要的
       <code>
        RUN
       </code>
       指令
      </strong>
      ：合并多个
      <code>
       RUN
      </code>
      指令到一个命令中，以减少层的数量，从而提高缓存的效率。
     </li>
     <li>
      <strong>
       使用
       <code>
        .dockerignore
       </code>
       文件
      </strong>
      ：排除不需要的文件和目录，以减少构建上下文的大小，加快构建速度。
     </li>
    </ul>
    <p>
     通过这些方法，可以优化 Docker 镜像的构建过程，提高效率，减少构建时间和资源消耗。
    </p>
    <blockquote>
     <p>
      觉得有用的话点个赞
      <code>
       👍🏻
      </code>
      呗。
      <br/>
      ❤️❤️❤️本人水平有限，如有纰漏，欢迎各位大佬评论批评指正！😄😄😄
     </p>
     <p>
      💘💘💘如果觉得这篇文对你有帮助的话，也请给个点赞、收藏下吧，非常感谢!👍 👍 👍
     </p>
     <p>
      🔥🔥🔥Stay Hungry Stay Foolish 道阻且长,行则将至,让我们一起加油吧！🌙🌙🌙
     </p>
     <p>
      <img alt="img" src="https://img-blog.csdnimg.cn/img_convert/a08571f736dc04b5bef51cd09e8e3a0a.gif#pic_center"/>
     </p>
    </blockquote>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



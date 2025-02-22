---
layout: post
title: Elasticsearch系列Elasticsearch启动失败问题
date: 2024-11-30 10:21:42 +0800
categories: [s7Elasticsearch]
tags: [搜索引擎,大数据,elasticsearch]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=142887056
    alt: Elasticsearch系列Elasticsearch启动失败问题
artid: 142887056
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【Elasticsearch系列】Elasticsearch启动失败问题
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
           <a href="#_23" rel="nofollow">
            解决步骤
           </a>
          </li>
          <li>
           <a href="#_59" rel="nofollow">
            重新启动容器
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
    <p>
     从错误日志中可以看出，Elasticsearch 启动失败的原因是无法获取对
     <code>
      /usr/share/elasticsearch/data
     </code>
     目录的锁，这通常是由于以下原因之一：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/6b9ee28c0e0348f6830b36b337592d3a.png#pic_center"/>
    </p>
    <ol>
     <li>
      <strong>
       权限问题
      </strong>
      ：Elasticsearch 无法在
      <code>
       /usr/share/elasticsearch/data
      </code>
      目录创建或访问所需文件，尤其是
      <code>
       node.lock
      </code>
      文件，可能是因为没有写入权限。
     </li>
     <li>
      <strong>
       重复启动问题
      </strong>
      ：有可能已经有另一个 Elasticsearch 节点在使用同一数据路径运行。Elasticsearch 不允许多个节点共享相同的数据路径。
     </li>
    </ol>
    <h4>
     <a id="_23">
     </a>
     解决步骤
    </h4>
    <ol>
     <li>
      <p>
       <strong>
        检查数据目录权限
       </strong>
       ：
       <br/>
       确保挂载到容器的本地目录有正确的权限，并且 Elasticsearch 用户可以写入该目录。可以通过以下命令查看和修改目录权限：
      </p>
      <pre><code class="prism language-bash"><span class="token function">sudo</span> <span class="token function">chown</span> -R <span class="token number">1000</span>:1000 ./data
<span class="token function">sudo</span> <span class="token function">chmod</span> -R <span class="token number">775</span> ./data
</code></pre>
      <p>
       <code>
        1000:1000
       </code>
       是 Elasticsearch 默认的 UID 和 GID，你可以通过修改目录的所有者和权限，确保 Elasticsearch 能够写入数据目录。
      </p>
     </li>
     <li>
      <p>
       <strong>
        确保没有重复的 Elasticsearch 实例运行
       </strong>
       ：
       <br/>
       确保你没有在同一主机上运行多个指向相同数据路径的 Elasticsearch 实例。如果已经启动了多个实例，请停止其他实例：
      </p>
      <pre><code class="prism language-bash">docker <span class="token function">ps</span> -a  <span class="token comment"># 检查是否有其他 Elasticsearch 容器在运行</span>
docker stop <span class="token operator">&lt;</span>container_name<span class="token operator">&gt;</span>
docker <span class="token function">rm</span> <span class="token operator">&lt;</span>container_name<span class="token operator">&gt;</span>
</code></pre>
     </li>
     <li>
      <p>
       <strong>
        清理旧的锁文件
       </strong>
       ：
       <br/>
       如果问题依然存在，可以尝试手动删除旧的
       <code>
        node.lock
       </code>
       文件，这可能是因为上一次未正常关闭导致的：
      </p>
      <pre><code class="prism language-bash"><span class="token function">rm</span> -f ./data/node.lock
</code></pre>
     </li>
     <li>
      <p>
       <strong>
        检查 Docker 挂载配置
       </strong>
       ：
       <br/>
       在
       <code>
        docker-compose.yml
       </code>
       中确保
       <code>
        ./data
       </code>
       目录正确挂载到了容器内部的
       <code>
        /usr/share/elasticsearch/data
       </code>
       路径，并且路径是本地有效的绝对路径。例如：
      </p>
      <pre><code class="prism language-yaml"><span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/usr/share/elasticsearch/data
</code></pre>
     </li>
    </ol>
    <h4>
     <a id="_59">
     </a>
     重新启动容器
    </h4>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/ce8333f24205498298a429837f617ec6.png#pic_center"/>
    </p>
    <p>
     执行完上述步骤后，重新启动 Elasticsearch 容器：
    </p>
    <pre><code class="prism language-bash">docker-compose down
docker-compose up -d
</code></pre>
    <p>
     通过这些方法，可以解决启动时的数据锁定问题。如果问题依然存在，可以检查其他相关的 Elasticsearch 配置或日志文件来获取更多细节。
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



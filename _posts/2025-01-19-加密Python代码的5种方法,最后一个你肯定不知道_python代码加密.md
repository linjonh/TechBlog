---
title: 2025-01-19-加密Python代码的5种方法,最后一个你肯定不知道_python代码加密
date: 2025-01-19 16:47:10 +0800
categories: [程序员]
tags: [python,开发语言]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=138507963
  alt: 加密Python代码的5种方法,最后一个你肯定不知道_python代码加密
artid: 138507963
---
<span class="artid" style="display:none" artid=68747470733a2f2f626c6f:672e6373646e2e6e65742f323430315f38343536353634332f:61727469636c652f64657461696c732f313338353037393633></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     加密Python代码的5种方法，最后一个你肯定不知道！_python代码加密
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
    <h4>
     <a id="_2">
     </a>
     最后
    </h4>
    <blockquote>
     <p>
      <strong>
       🍅 硬核资料
      </strong>
      ：关注即可领取PPT模板、简历模板、行业经典书籍PDF。
      <br/>
      <strong>
       🍅 技术互助
      </strong>
      ：技术群大佬指点迷津，你的问题可能不是问题，求资源在群里喊一声。
      <br/>
      <strong>
       🍅 面试题库
      </strong>
      ：由技术群里的小伙伴们共同投稿，热乎的大厂面试真题，持续更新中。
      <br/>
      <strong>
       🍅 知识体系
      </strong>
      ：含编程语言、算法、大数据生态圈组件（Mysql、Hive、Spark、Flink）、数据仓库、Python、前端等等。
     </p>
    </blockquote>
    <p>
     <strong>
      网上学习资料一大堆，但如果学到的知识不成体系，遇到问题时只是浅尝辄止，不再深入研究，那么很难做到真正的技术提升。
     </strong>
    </p>
    <p>
     <strong>
      <a href="https://bbs.csdn.net/topics/618317507">
       需要这份系统化学习资料的朋友，可以戳这里获取
      </a>
     </strong>
    </p>
    <p>
     <strong>
      一个人可以走的很快，但一群人才能走的更远！不论你是正从事IT行业的老鸟或是对IT行业感兴趣的新人，都欢迎加入我们的的圈子（技术交流、学习资源、职场吐槽、大厂内推、面试辅导），让我们一起学习成长！
     </strong>
    </p>
    <p>
     想要做到这一点，并不难。Python标准库就提供了一个名叫compileall的库，使用它就可以做到。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/973f6cb4babf2850ad24a4d02649ecdf.png#pic_center"/>
    </p>
    <p>
     执行如下命令，即可将目录下的所有.py文件编译成.pyc文件：
    </p>
    <p>
     python -m compileall 然后删除 目录下所有 .py 文件就可以了。
    </p>
    <pre><code>$ find -name ‘\*.py’ -type f -print -exec rm {} ;

</code></pre>
    <p>
     这一方法，可以加密我们的Python代码，胜过代码裸在外面。尴尬的是，因为Python解释器的兼容较差，有些版本并不能运行.pyc文件。而且已经有现成的反编译工具，可以直接破解。
    </p>
    <p>
     比如python-uncompyle6（「链接」），只要执行以下命令，就可以搞定。
    </p>
    <pre><code>$ uncompyle6 compiled-python-file-pyc-or-pyo

</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/10a5967305f54abe319e4847626bdce2.png#pic_center"/>
    </p>
    <p>
     关于怎么快速学python，可以加下小编的python学习群:611+530+101，不管你是小白还是大牛，小编我都欢迎，不定期分享干货
    </p>
    <p>
     每天晚上20:00都会开直播给大家分享python学习知识和路线方法，群里会不定期更新最新的教程和学习方法，大家都是学习python的，或是转行，或是大学生，还有工作中想提升自己能力的，如果你是正在学习python的小伙伴可以加入学习。最后祝所有程序员都能够走上人生巅峰，让代码将梦想照进现实
    </p>
    <p>
     02
    </p>
    <p>
     代码混淆，也是一种常见的“加密”方式，严格意义上说，这一方法并不是加密，而是上代码的可读性变差。比如删除注释，添加毫无意义的注释，添加无效代码，对变量、函数、类进行重命名等。
    </p>
    <p>
     内容不可读，代码就受到了保护。
    </p>
    <p>
     代码混淆的工具很多，一个比较好用的混淆库是pyobfuscate（GitHub - astrand/pyobfuscate: pyobfuscate）。这个库可以对类、函数进行重命名，并且插入无关的代码，甚至自动加空格等等。
    </p>
    <p>
     这一方法很简单，也提高了破解的门槛。但由于代码结构未发生变化，字节码也能获取，破解难度也不高。
    </p>
    <p>
     一般而言，使用这一方式较为简单，实用。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/0090e11b8eec7b434606c5e3b83f6759.png#pic_center"/>
    </p>
    <p>
     03
    </p>
    <p>
     如果有一款工具，可以将Python脚本打包成在某一平台的可执行文件，最终我们发行的，是一份打包完成的二进制文件，那么程序就更难被破解了？
    </p>
    <p>
     py2exe（FrontPage - py2exe.orgFrontPage - py2exe.org）就是一款很好的打包工具，可以将Python脚本打包成可在Windows上运行的文件。
    </p>
    <p>
     这一方式的优点是进一步提高了破解门槛。遗憾的是，你只能在windows上运行它。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9cb609cc19ff9813b96fc824c0f1f121.png#pic_center"/>
    </p>
    <p>
     04
    </p>
    <p>
     Python运行速度慢何解？用Cython就可以带来性能的提升。实际上，Cython也可以用来加密Python代码。
    </p>
    <p>
     Cython的原理是，将.py编译为.c文件，再将.c文件编译为.so或者.pyd，这样一来，文件就变得难以破解了。
    </p>
    <p>
     这样做的好处是，Python代码很难被破解，缺点是有时候，Cython可能不支持一小部分代码，完善起来就比较麻烦了。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/cf2748b81a896b4f0781b6ef36cbb6df.png#pic_center"/>
    </p>
    <p>
     05
    </p>
    <p>
     最后一种方法，做得比较绝。
    </p>
    <p>
     由于Python是解释型语言，因此在发行Python程序的时候，就必须包含一个Python解释器，如果我们修改这个解释器，代码不就被保护起来了吗？
    </p>
    <p>
     如果我们能对最原始的Python代码进行加密，加密后的代码被发行后。哪怕被别人看到了，但因为不晓得算法是怎样的，就破解不了了。
    </p>
    <p>
     这是因为Python解释器本身是一个二进制文件，自然也就无法获得关键性的数据，进而保护了源码。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/254fefe35a1f2ba3efdd1401da7411ff.png#pic_center"/>
    </p>
    <p>
     虽然这一方法最为安全，可操作难度较高。你必须掌握基本的加解密算法，还要探究Python执行代码的方式，从而了解到从什么地方进行加解密。最后禁用字节码，以防通过.pyc反编译即可。
    </p>
    <p>
     以上五种加密方式，有利有弊，有难有易，根据需求选择就可以了。
    </p>
    <h5>
     <a id="Python_133">
     </a>
     关于Python技术储备
    </h5>
    <p>
     学好 Python 不论是就业还是做副业赚钱都不错，但要学会 Python 还是要有一个学习规划。最后大家分享一份全套的 Python 学习资料，给那些想学习 Python 的小伙伴们一点帮助！
    </p>
    <blockquote>
     <p>
      👉
      <a href="https://bbs.csdn.net/topics/618317507">
       CSDN大礼包：《Python入门资料&amp;实战源码&amp;安装工具】免费领取
      </a>
      （
      <strong>
       安全链接，放心点击
      </strong>
      ）
     </p>
    </blockquote>
    <h6>
     <a id="Python_147">
     </a>
     一、Python所有方向的学习路线
    </h6>
    <p>
     Python所有方向的技术点做的整理，形成各个领域的知识点汇总，它的用处就在于，你可以按照上面的知识点去找对应的学习资源，保证自己学得较为全面。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/da2d9255f3b9b543b4f3f60386ec4aa9.jpeg#pic_center"/>
    </p>
    <h6>
     <a id="Python_154">
     </a>
     二、Python基础学习视频
    </h6>
    <p>
     <strong>
      ② 路线对应学习视频
     </strong>
    </p>
    <p>
     还有很多适合0基础入门的学习视频，有了这些视频，轻轻松松上手Python~在这里插入图片描述
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/624aa4955c13ad0accebc7d43a5a0425.png"/>
    </p>
    <h4>
     <a id="_166">
     </a>
     最后
    </h4>
    <p>
     Python崛起并且风靡，因为优点多、应用领域广、被大牛们认可。学习 Python 门槛很低，但它的晋级路线很多，通过它你能进入机器学习、数据挖掘、大数据，CS等更加高级的领域。Python可以做网络应用，可以做科学计算，数据分析，可以做网络爬虫，可以做机器学习、自然语言处理、可以写游戏、可以做桌面应用…Python可以做的很多，你需要学好基础，再选择明确的方向。这里给大家分享一份全套的 Python 学习资料，给那些想学习 Python 的小伙伴们一点帮助！
    </p>
    <h5>
     <a id="Python_170">
     </a>
     👉Python所有方向的学习路线👈
    </h5>
    <p>
     Python所有方向的技术点做的整理，形成各个领域的知识点汇总，它的用处就在于，你可以按照上面的知识点去找对应的学习资源，保证自己学得较为全面。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/7161568a3d92e4e1424d60f56140a45c.png"/>
    </p>
    <h5>
     <a id="Python_176">
     </a>
     👉Python必备开发工具👈
    </h5>
    <p>
     工欲善其事必先利其器。学习Python常用的开发软件都在这里了，给大家节省了很多时间。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/a7803bdc2d0dea6b646cbe1f5ed5316d.png"/>
    </p>
    <h5>
     <a id="Python_184">
     </a>
     👉Python全套学习视频👈
    </h5>
    <p>
     我们在看视频学习的时候，不能光动眼动脑不动手，比较科学的学习方法是在理解之后运用它们，这时候练手项目就很适合了。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/be00f193d06c2e4d5d3ce0f03941eee1.png"/>
    </p>
    <h5>
     <a id="_192">
     </a>
     👉实战案例👈
    </h5>
    <p>
     学python就与学数学一样，是不能只看书不做题的，直接看步骤和答案会让人误以为自己全都掌握了，但是碰到生题的时候还是会一筹莫展。
    </p>
    <p>
     因此在学习python的过程中一定要记得多动手写代码，教程只需要看一两遍即可。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/d5995d6dca65d64465916e8c3c66aa84.png"/>
    </p>
    <h5>
     <a id="_206">
     </a>
     👉大厂面试真题👈
    </h5>
    <p>
     我们学习Python必然是为了找到高薪的工作，下面这些面试题是来自阿里、腾讯、字节等一线互联网大厂最新的面试资料，并且有阿里大佬给出了权威的解答，刷完这一套面试资料相信大家都能找到满意的工作。
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/f278883026f61eb5d08c1257271baf02.png"/>
    </p>
    <p>
     <strong>
      <a href="https://bbs.csdn.net/topics/618317507">
       需要这份系统化学习资料的朋友，可以戳这里获取
      </a>
     </strong>
    </p>
    <p>
     <strong>
      一个人可以走的很快，但一群人才能走的更远！不论你是正从事IT行业的老鸟或是对IT行业感兴趣的新人，都欢迎加入我们的的圈子（技术交流、学习资源、职场吐槽、大厂内推、面试辅导），让我们一起学习成长！
     </strong>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



---
title: 2024-11-28-python-wheel文件命名说明whl文件命名规则查询python兼容的版本
date: 2024-11-28 13:00:29 +0800
categories: [python]
tags: [wheel文件命名说明,whl文件命名规则,python兼容的依赖文件版本]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=139326651
  alt: python-wheel文件命名说明whl文件命名规则查询python兼容的版本
artid: 139326651
---
<span class="artid" style="display:none" artid=68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f34393131343530332f:61727469636c652f64657461696c732f313339333236363531></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     python wheel文件命名说明、whl文件命名规则、查询python兼容的版本
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
    </p>
    <div class="toc">
     <h4>
      文章目录
     </h4>
     <ul>
      <li>
       <a href="#wheel_2" rel="nofollow">
        一、wheel介绍
       </a>
      </li>
      <li>
       <a href="#_17" rel="nofollow">
        二、常见命名
       </a>
      </li>
      <li>
       <a href="#wheel_36" rel="nofollow">
        三、wheel文件命名规则
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#31pip_wheel_abi_tag_65" rel="nofollow">
          3.1、pip wheel 打包时，abi tag是怎么敲定的
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_wheel__83" rel="nofollow">
        四、如何判断给定 wheel 包是否能够安装
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#41_90" rel="nofollow">
          4.1、方式一
         </a>
        </li>
        <li>
         <a href="#41_99" rel="nofollow">
          4.1、方式二
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <br/>
    以下整理一下python中wheel文件的命名规则。
    <p>
    </p>
    <h2>
     <a id="wheel_2">
     </a>
     一、wheel介绍
    </h2>
    <p>
     <code>
      .whl
     </code>
     文件(WHL file)也称为轮子(
     <code>
      wheel
     </code>
     )，这是用于python分发(distribution)的标准内置包格式(standard built-package format)。它包含安装所需的所有文件和元数据(metadata)。.whl文件使用zip进行压缩。.whl文件还包含有关此wheel文件支持的Python版本和平台的信息。.whl文件格式是一种即装即用格式(ready-to-install format)，允许在不构建源代码分发(without building the source distribution)的情况下运行安装包。
    </p>
    <p>
     .whl文件本质上是zip文件，这些.whl文件可以使用解压缩选项(unzip option)或标准解压缩软件应用程序(如WinZIP和WinRAR)解压缩。
    </p>
    <p>
     .whl文件按照以下约定命名：
    </p>
    <blockquote>
     <p>
      {distribution}-{version}(-{build tag})? -{python tag}-{abi tag}-{platform tag}.whl
     </p>
    </blockquote>
    <p>
     如果我们之前使用pip安装过Python包，那么我们的系统上很可能已经有轮子(wheel)被安装过。pip是安装wheel的包管理器。
    </p>
    <p>
     我们可以通过pip安装已下载的.whl文件：
     <code>
      pip install &lt;filename&gt;.whl
     </code>
     ，安装包后，我们可以执行Python shell并尝试导入包：import whl_dist_name
    </p>
    <p>
     wheel的直接好处是我们与其他人共享我们的包，他们不必担心构建它。他们只需pip install后即可使用该软件包。它也是一个更小的共享文件(与所有源代码相比)，安装速度更快，因为它不需要运行安装脚本。
    </p>
    <h2>
     <a id="_17">
     </a>
     二、常见命名
    </h2>
    <blockquote>
     <p>
      flask-3.0.3-py3-none-any.whl
     </p>
     <ul>
      <li>
       flask：whl文件模块文件名
      </li>
      <li>
       3.0.3：版本号
      </li>
      <li>
       py3： 给python3版本使用的
      </li>
      <li>
       py3-none-any：在任何平台上与python3兼容，即支持linux、windows、macOS系统python3版本
      </li>
     </ul>
    </blockquote>
    <p>
     MarkupSafe-1.1.1-cp27-cp27m-win_amd64.whl
    </p>
    <ul>
     <li>
      支持windows系统64位，python2.7环境
     </li>
     <li>
      cp27m: abi tag
     </li>
    </ul>
    <p>
     MarkupSafe-1.1.1-cp27-cp27mu-manylinux1_x86_64.whl
    </p>
    <ul>
     <li>
      支持linux系统64位，python2.7环境
     </li>
     <li>
      cp27mu: abi tag
     </li>
    </ul>
    <p>
     flask-3.0.3-py2.py3-none-any.whl
    </p>
    <ul>
     <li>
      在任何操作系统和平台上(linux、windows、macOS)都支持Python 2和Python 3。
     </li>
    </ul>
    <h2>
     <a id="wheel_36">
     </a>
     三、wheel文件命名规则
    </h2>
    <p>
     wheel 包的命名格式为
     <code>
      {distribution}-{version}(-{build tag})? -{python tag}-{abi tag}-{platform tag}.whl
     </code>
    </p>
    <p>
     其中各个 tag 的意义和取值在 PEP425 中有规定：
     <a href="https://peps.python.org/pep-0425/" rel="nofollow">
      PEP 0425
     </a>
    </p>
    <p>
     <strong>
      1、distribution：
     </strong>
     模块名称。如numpy, flask，pyhive等。
     <br/>
     <strong>
      2、version：
     </strong>
     版本号
     <br/>
     <strong>
      3、python tag
     </strong>
     <br/>
     python tag 标记了具体的 python 实现。其中：
    </p>
    <ul>
     <li>
      <code>
       py
      </code>
      无实现特定的拓展，如py27指的是python2.7版本编译的
     </li>
     <li>
      <code>
       cp CPython
      </code>
      ，也就是通常使用的 Python 实现
     </li>
     <li>
      <code>
       ip IronPython
      </code>
      ，跑在 Windows CLI 平台上的 Python 实现
     </li>
     <li>
      <code>
       pp PyPy
      </code>
      ，带 JIT 的 Python 实现
     </li>
     <li>
      <code>
       jy Jython
      </code>
      ，跑在 JVM 上的 Python 实现
     </li>
    </ul>
    <p>
     举个例子，如果 wheel 包里面包含了 C 拓展，那么打包出来的 python tag 就是 cpxx，其中 xx 是具体的版本号，如 cp27.
    </p>
    <p>
     <strong>
      4、platform tag
     </strong>
     <br/>
     platform tag也好理解，就是系统架构。比如
    </p>
    <ul>
     <li>
      <code>
       linux_x86_64
      </code>
      支持linux环境64位系统
     </li>
     <li>
      <code>
       win32
      </code>
      支持windows环境32位系统
     </li>
     <li>
      <code>
       win_amd64
      </code>
      支持windows环境64位系统
     </li>
     <li>
      <code>
       macosx_10_6
      </code>
      支持macOS系统10.6
     </li>
     <li>
      <code>
       any
      </code>
      兼容任意平台，即windows、linux、macOS都支持。如py27-none-any表示在任何平台上与Python 2.7（任何Python 2.7实现）兼容
     </li>
    </ul>
    <p>
     最陌生的恐怕是之间的
     <code>
      abi tag
     </code>
     ，这正是本文讨论的主题。
    </p>
    <p>
     abi 这东西，看不见摸不着。系统上的东西嘛，敲下个命令就知道是什么操作系统；架构虽然玄乎点，不过也就是那么几种；然而有多少人知道自己当前使用的平台遵循着怎样的 abi 标准？什么时候 abi 可以兼容，什么时候又不可以？
    </p>
    <h3>
     <a id="31pip_wheel_abi_tag_65">
     </a>
     3.1、pip wheel 打包时，abi tag是怎么敲定的
    </h3>
    <p>
     Python 对此有另外一个 PEP：
     <a href="https://peps.python.org/pep-3149/" rel="nofollow">
      PEP 3149
     </a>
    </p>
    <p>
     如果
     <code>
      sysconfig
     </code>
     定义了
     <code>
      SOABI
     </code>
     ，那么就用
     <code>
      SOABI
     </code>
     的值。当然这是 Python 3 的事务，这里我自然不用管。如果没定义
     <code>
      SOABI
     </code>
     ，比如 Python 2，wheel 会生成一个类似的 abi tag。在 Python 的标准里，这个 abi 取决于打包时使用的 Python 实现。举 CPython 为例，首先必须包含的是实现名和版本号，比如 CPython2.7.9 对应的是 cp27.其次，需要包含构建 CPython 时特定的选项。具体来说，打包时会依次判断当前的 CPython 是否有下列的功能，如果有，加上对应的 flag：
    </p>
    <blockquote>
     <ol>
      <li>
       –with-pydebug (flag: d )
      </li>
      <li>
       –with-pymalloc (flag: m )
      </li>
      <li>
       –with-wide-unicode (flag: u )
      </li>
     </ol>
    </blockquote>
    <p>
     通常，我们看到的
     <code>
      abi tag
     </code>
     会是这样的
     <code>
      cp27mu
     </code>
     ，这是因为
     <code>
      --with-pymalloc
     </code>
     是默认开启的，而包管理中分发的 CPython 会加上
     <code>
      --with-wide-unicode
     </code>
     选项。
    </p>
    <p>
     有趣的是，如果打包时没办法判断 abi 类型，生成的 abi tag 会是
     <code>
      none
     </code>
     。而如果 Python 包是不依赖特定的 abi 的纯 Python 实现，生成的 abi tag 也是
     <code>
      none
     </code>
     。在安装时，值为
     <code>
      none
     </code>
     的 abi tag 会享受特殊待遇。这个下文再说。
    </p>
    <p>
     另外同样的 Python 代码打出来 abi tag 相同的包，不一定完全一样。以我的亲身经历举例，
     <code>
      pycrypto
     </code>
     这个库，在打包的时候会判断
     <code>
      libgmp
     </code>
     是否存在，如果存在，就构建
     <code>
      _fastmath
     </code>
     这个库。如果打包平台上存在
     <code>
      libgmp
     </code>
     ，打出来的包就会包含
     <code>
      _fastmath
     </code>
     。反之，则不存在。而这两种情形下打出来的包，名字是一模一样的。
    </p>
    <p>
     当然对于 abi tag 为
     <code>
      none
     </code>
     的包，它可以在任何一个 abi 版本上安装。因为所有的平台都至少支持
     <code>
      none abi
     </code>
     。但如果一个平台上的 Python 如此古怪，以致于没办法确定它的 abi 类型，那么也就只能装上 abi tag 为
     <code>
      none
     </code>
     的包。
    </p>
    <h2>
     <a id="_wheel__83">
     </a>
     四、如何判断给定 wheel 包是否能够安装
    </h2>
    <p>
     以MarkupSafe为例，
     <a href="https://pypi.org/project/MarkupSafe/1.1.1/#files" rel="nofollow">
      https://pypi.org/project/MarkupSafe/1.1.1/#files
     </a>
     网站提供了很多种类的whl文件，应该选择哪种呢？
    </p>
    <p>
     首先：有些文件从命名上就能看出来支持什么系统，若有些文件不知道python是否支持的，可以通过下面的方式查看。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/68f17eb03eb85ea0b25718deff0ebcc4.png"/>
    </p>
    <p>
     以下方式查看python兼容的whl版本
    </p>
    <h3>
     <a id="41_90">
     </a>
     4.1、方式一
    </h3>
    <blockquote>
     <p>
      通过以下命令查看python兼容的版本
     </p>
    </blockquote>
    <pre><code class="prism language-python">pip debug <span class="token operator">-</span><span class="token operator">-</span>verbose
</code></pre>
    <p>
     本人windows环境安装python27执行后如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/56fd2bc75a81561b8181e873cd15b4d5.png"/>
    </p>
    <h3>
     <a id="41_99">
     </a>
     4.1、方式二
    </h3>
    <blockquote>
     <p>
      python 3.0版本可以通过以下方式查看兼容的版本号
     </p>
    </blockquote>
    <pre><code class="prism language-java"><span class="token class-name">C</span><span class="token operator">:</span>\<span class="token class-name">Python3</span><span class="token number">.5</span>\<span class="token class-name">Scripts</span><span class="token operator">&gt;</span>python
<span class="token class-name">Python</span> <span class="token number">3.5</span><span class="token number">.2</span> <span class="token punctuation">(</span>v3<span class="token punctuation">.</span><span class="token number">5.2</span><span class="token operator">:</span><span class="token number">4d</span>ef2a2901a5<span class="token punctuation">,</span> <span class="token class-name">Jun</span> <span class="token number">25</span> <span class="token number">2016</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token operator">:</span><span class="token number">01</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token constant">MSC</span> v<span class="token punctuation">.</span><span class="token number">1900</span> <span class="token number">32</span> bit <span class="token punctuation">(</span><span class="token class-name">Intel</span><span class="token punctuation">)</span><span class="token punctuation">]</span> on win32
<span class="token class-name">Type</span> <span class="token string">"help"</span><span class="token punctuation">,</span> <span class="token string">"copyright"</span><span class="token punctuation">,</span> <span class="token string">"credits"</span> or <span class="token string">"license"</span> <span class="token keyword">for</span> more information<span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;&gt;</span> from pip <span class="token keyword">import</span> <span class="token namespace">pep425tags</span>
<span class="token operator">&gt;&gt;&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span>pep425tags<span class="token punctuation">.</span><span class="token function">get_supported</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token char">'cp35'</span><span class="token punctuation">,</span> <span class="token char">'cp35m'</span><span class="token punctuation">,</span> <span class="token char">'win32'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token char">'cp35'</span><span class="token punctuation">,</span> <span class="token char">'none'</span><span class="token punctuation">,</span> <span class="token char">'win32'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token char">'py3'</span><span class="token punctuation">,</span> <span class="token char">'none'</span><span class="token punctuation">,</span> <span class="token char">'win32'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token char">'cp35'</span><span class="token punctuation">,</span> <span class="token char">'none'</span><span class="token punctuation">,</span> <span class="token char">'any'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token char">'cp3'</span><span class="token punctuation">,</span> <span class="token char">'none'</span><span class="token punctuation">,</span> <span class="token char">'any'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token char">'py35'</span><span class="token punctuation">,</span> <span class="token char">'none'</span><span class="token punctuation">,</span> <span class="token char">'any'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token char">'py3'</span><span class="token punctuation">,</span> <span class="token char">'none'</span><span class="token punctuation">,</span> <span class="token char">'any'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token char">'py34'</span><span class="token punctuation">,</span> <span class="token char">'none'</span><span class="token punctuation">,</span> <span class="token char">'any'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token char">'py33'</span><span class="token punctuation">,</span> <span class="token char">'none'</span><span class="token punctuation">,</span> <span class="token char">'any'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token char">'py32'</span><span class="token punctuation">,</span> <span class="token char">'none'</span><span class="token punctuation">,</span> <span class="token char">'any'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token char">'py31'</span><span class="token punctuation">,</span> <span class="token char">'none'</span><span class="token punctuation">,</span> <span class="token char">'any'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token char">'py30'</span><span class="token punctuation">,</span> <span class="token char">'none'</span><span class="token punctuation">,</span> <span class="token char">'any'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



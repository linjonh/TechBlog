---
layout: post
title: Rust简单入门一文就够开发环境搭建,开发工具及插件推荐,Hello-World
date: 2025-01-01 18:02:56 +0800
categories: [新手入门,教程,rust]
tags: [编程语言,visualstudiocode,rust]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=109120785
    alt: Rust简单入门一文就够开发环境搭建,开发工具及插件推荐,Hello-World
artid: 109120785
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Rust简单入门一文就够：开发环境搭建，开发工具及插件推荐，Hello World
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
     <strong>
      Rust：
     </strong>
     “一门赋予每个人构建可靠且高效软件能力的语言。”
    </p>
    <p>
     这是在Rust官网上最显目的一句话，透露出了它的目标及特点：
    </p>
    <ul>
     <li>
      高效：
      <strong>
       性能强如C/C++，内存利用率高，能运行在嵌入式设备上，容易与其它语言集成
      </strong>
     </li>
     <li>
      可靠：
      <strong>
       语言体系能够保证内存安全和线程安全，编译器能够及时、尽早发现错误
      </strong>
     </li>
     <li>
      生产力：
      <strong>
       强大的包管理器，文档、友好的编译器和清晰的错误提示信息
      </strong>
     </li>
    </ul>
    <p>
     Rust官网：
     <a href="https://www.rust-lang.org/zh-CN/" rel="nofollow">
      https://www.rust-lang.org/zh-CN/
     </a>
    </p>
    <hr/>
    <p>
     如果说，Go语言的背后是
     <strong>
      Google
     </strong>
     ，Rust的背后则是
     <strong>
      Mozilla
     </strong>
     。
    </p>
    <p>
     Rust是一门非常
     <strong>
      现代化
     </strong>
     的
     <strong>
      系统级
     </strong>
     语言，接下来就让我们来试试水吧：
    </p>
    <h2>
     <a id="1Rust_17">
     </a>
     1.安装Rust
    </h2>
    <p>
     官网介绍：
     <strong>
      <a href="https://www.rust-lang.org/zh-CN/learn/get-started" rel="nofollow">
       https://www.rust-lang.org/zh-CN/learn/get-started
      </a>
     </strong>
    </p>
    <p>
     要安装Rust非常简单！！
    </p>
    <h4>
     <a id="Windows_22">
     </a>
     一、Windows:
    </h4>
    <p>
     只需要下载运行
     <strong>
      Rustup
     </strong>
     这个工具即可轻松安装：
    </p>
    <p>
     <strong>
      下载之后运行是一个命令行界面，入门建议使用默认配置（MSVC），也就是一路按回车即可安装完毕。
     </strong>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b99dee158af1cb3e3da15f1b04bce69d.png#pic_center"/>
    </p>
    <ul>
     <li>
      x86:
      <a href="https://static.rust-lang.org/rustup/dist/i686-pc-windows-msvc/rustup-init.exe" rel="nofollow">
       https://static.rust-lang.org/rustup/dist/i686-pc-windows-msvc/rustup-init.exe
      </a>
     </li>
     <li>
      x64:
      <a href="https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe" rel="nofollow">
       https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe
      </a>
     </li>
    </ul>
    <p>
     <strong>
      注意：Windows用户还需要安装MSVC或者MinGW才能够编译Rust程序。
     </strong>
    </p>
    <p>
     <strong>
      Visual Studio已经包含了MSVC，如果之前安装了VS可以跳过此步骤。
     </strong>
    </p>
    <ul>
     <li>
      <p>
       Visual Studio:
       <a href="https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=Community&amp;rel=16" rel="nofollow">
        https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=Community&amp;rel=16
       </a>
      </p>
     </li>
     <li>
      <p>
       MSVC:
       <a href="https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&amp;rel=16" rel="nofollow">
        https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&amp;rel=16
       </a>
      </p>
     </li>
     <li>
      <p>
       MinGW:
       <a href="https://osdn.net/projects/mingw/releases/" rel="nofollow">
        https://osdn.net/projects/mingw/releases/
       </a>
      </p>
     </li>
    </ul>
    <p>
     <strong>
      如果要使用MinGW，在安装Rust时需要选择：
      <code>
       2 Customize installation
      </code>
     </strong>
     <br/>
     然后在
     <code>
      default host triple
     </code>
     这项配置时输入：
    </p>
    <pre><code class="prism language-shell">x86_64-pc-windows-gnu
</code></pre>
    <p>
     回车
    </p>
    <hr/>
    <h4>
     <a id="Unix_57">
     </a>
     二、Unix：
    </h4>
    <p>
     在Unix（linux/macos）上安装就更加简单了，只需要复制下面的命令在shell中运行即可：
     <br/>
     安装过程中可能需要root权限
    </p>
    <pre><code class="prism language-shell"><span class="token function">curl</span> https://sh.rustup.rs -sSf <span class="token operator">|</span> sh
</code></pre>
    <p>
     如果你需要更高级的安装方式，参见官网（目前只有英文）：
     <br/>
     <a href="https://forge.rust-lang.org/infra/other-installation-methods.html" rel="nofollow">
      https://forge.rust-lang.org/infra/other-installation-methods.html
     </a>
    </p>
    <p>
     <strong>
      安装完后，可以在命令行输入一些命令来测试是否安装成功：
     </strong>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/303e9f537009155e228b16617150b54e.png#pic_center"/>
    </p>
    <p>
     查看Rust编译器版本（大写V）：
    </p>
    <pre><code class="prism language-shell">rustc -V
</code></pre>
    <p>
     查看cargo包管理工具版本（大写V）：
    </p>
    <pre><code class="prism language-shell">cargo -V
</code></pre>
    <p>
     <strong>
      如果没有效果，你可能需要重启终端，或者手动添加环境变量并使其生效
     </strong>
    </p>
    <hr/>
    <h2>
     <a id="2HelloWorld_86">
     </a>
     2.撸一个Hello,World
    </h2>
    <p>
     运行一个Rust的hello,world有
     <strong>
      两种
     </strong>
     方式：
    </p>
    <ul>
     <li>
      <h4>
       <a id="cargo_92">
       </a>
       第一种：使用包管理工具
       <code>
        cargo
       </code>
      </h4>
     </li>
    </ul>
    <p>
     打开命令行，运行命令，使用
     <code>
      cargo
     </code>
     创建一个Rust项目：
    </p>
    <pre><code>cargo new hello
</code></pre>
    <p>
     建立了一个
     <code>
      hello
     </code>
     Rust项目，效果如下：
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5be2172e139986dd782e63f3d45fd8a2.png#pic_center"/>
    </p>
    <ul>
     <li>
      <code>
       Cargo.toml
      </code>
      是一个项目依赖信息文件
     </li>
     <li>
      <code>
       src
      </code>
      里默认有一个
      <code>
       main.rs
      </code>
      ，里面有
      <code>
       hello,world
      </code>
      的代码
     </li>
    </ul>
    <p>
     在命令行进入项目后，我们可以直接编译并运行（debug）：
    </p>
    <pre><code class="prism language-shell">cargo run
</code></pre>
    <p>
     这样就能看到我们的
     <code>
      hello,world
     </code>
     了！
    </p>
    <p>
     也可以编译发布（release）：
    </p>
    <pre><code class="prism language-shell">cargo build --release
</code></pre>
    <p>
     编译后的文件会输出到
     <code>
      target/release
     </code>
     目录下。
    </p>
    <hr/>
    <ul>
     <li>
      <h4>
       <a id="Rusthellorsrs_121">
       </a>
       第二种：建立单个Rust文件
       <code>
        hello.rs
       </code>
       （文件后缀
       <code>
        .rs
       </code>
       ）
      </h4>
     </li>
    </ul>
    <p>
     在其中加入以下代码保存：
    </p>
    <pre><code class="prism language-java">fn <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    println<span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">"Hello,World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     在同级目录下打开命令行，运行命令编译
     <code>
      .rs
     </code>
     文件：
    </p>
    <pre><code class="prism language-shell">rustc hello.rs
</code></pre>
    <p>
     编译后将生成二进制文件，windows下将输出一个
     <code>
      hello.exe
     </code>
     ，unix下则是不带后缀的
     <code>
      hello
     </code>
     。
    </p>
    <p>
     运行编译生成的文件，就可以看到我们打印的
     <code>
      Hello,World!
     </code>
     了：
    </p>
    <pre><code class="prism language-shell">./hello
</code></pre>
    <p>
     <strong>
      除了一个简单的HelloWorld，你也可以继续来试试这个，写一个HTTP服务器：
     </strong>
    </p>
    <p>
     <a href="https://blog.csdn.net/qq_26373925/article/details/109187251">
      Rust：70行代码编写一个简单的http服务（纯标准库，编译后168kb），并发压力测试
     </a>
    </p>
    <hr/>
    <h2>
     <a id="3_148">
     </a>
     3.开发工具
    </h2>
    <p>
     <strong>
      强烈推荐
     </strong>
     <strong>
      Visual Studio Code
     </strong>
     （跨平台超强轻量编辑器），简称
     <strong>
      VSCode
     </strong>
     <br/>
     官网：
     <a href="https://code.visualstudio.com/" rel="nofollow">
      https://code.visualstudio.com/
     </a>
    </p>
    <p>
     <strong>
      为什么推荐？看图就行：
     </strong>
    </p>
    <ul>
     <li>
      一键运行
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/3bcd62e101db04638b1bab97e3a3d4b4.png#pic_center"/>
     </li>
     <li>
      自动类型显示（灰色的那些字就是了），作为新手，能够很容易的了解到变量的类型，确实很实用！
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/2cd27d1fbfe71773e797e806e663eeac.png#pic_center"/>
     </li>
     <li>
      非常详细的错误提示
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/31dde0f6705cc97b0acd89a289404564.png#pic_center"/>
     </li>
     <li>
      代码说明
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/4e9f4d36b057c4388307885f91ccb2a9.png#pic_center"/>
     </li>
     <li>
      代码自动补全、文档
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8c931b01fc7e6ffef78aea10e474512c.png#pic_center"/>
     </li>
     <li>
      文档
     </li>
    </ul>
    <p>
     想要使用这些，除了安装VSCode外，你得安装
     <strong>
      一些
     </strong>
     插件：
    </p>
    <ul>
     <li>
      就像这样搜索即可
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/889ed7c38a6038cec3dfcdfb0378f19a.png#pic_center"/>
     </li>
    </ul>
    <h3>
     <a id="_172">
     </a>
     我推荐的插件：
    </h3>
    <pre><code>Rust
rust-analyzer
Rust Syntax
crates
Cargo
Even Better TOML
Better Comments
Code Runner

GitLens — Git supercharged
Git History
Git Graph
</code></pre>
    <hr/>
    <p>
     最后在介绍一下如何
    </p>
    <h3>
     <a id="Rust_191">
     </a>
     升级Rust版本
    </h3>
    <p>
     由于Rust经常更新，所以我们也得跟上脚步。
     <br/>
     Rust的更新十分容易，直接在命令行运行：
    </p>
    <pre><code class="prism language-shell">rustup update
</code></pre>
    <p>
     就可以了！
    </p>
    <p>
     <a href="https://blog.csdn.net/qq_26373925/article/details/109187251">
      Rust：70行代码编写一个简单的http服务（纯标准库，编译后168kb），并发压力测试
     </a>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



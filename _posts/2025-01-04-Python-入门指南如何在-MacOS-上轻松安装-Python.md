---
title: 2025-01-04-Python-入门指南如何在-MacOS-上轻松安装-Python
date: 2025-01-04 17:49:42 +0800
categories: []
tags: [python,macos,开发语言]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=141175926
  alt: Python-入门指南如何在-MacOS-上轻松安装-Python
artid: 141175926
---
<span class="artid" style="display:none" artid=68747470733a2f:2f626c6f672e6373646e2e6e65742f4e69636f6c654775732f:61727469636c652f64657461696c732f313431313735393236></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Python 入门指南：如何在 MacOS 上轻松安装 Python
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p>
     Python 作为一门功能强大且易于学习的编程语言，已经成为许多开发者和数据科学家的首选工具。无论是初学者还是经验丰富的程序员，Python 都能为他们提供强大的支持。如果你是一名 MacOS 用户，想要开始学习 Python 或者在 Mac 上进行开发，首先需要正确安装 Python 环境。本文将详细介绍如何在 MacOS 上安装 Python，帮助你快速开始 Python 编程之旅。
    </p>
    <h4>
     1. 检查 MacOS 是否已预装 Python
    </h4>
    <p>
     MacOS 系统通常会自带一个较老版本的 Python，你可以通过以下步骤来检查系统中是否已经安装了 Python 以及安装的是哪个版本。
    </p>
    <h5>
     <strong>
      步骤：
     </strong>
    </h5>
    <ol>
     <li>
      打开
      <strong>
       终端（Terminal）
      </strong>
      应用，可以在“应用程序”文件夹中的“实用工具”下找到，或直接通过 Spotlight 搜索“终端”。
     </li>
     <li>
      在终端中输入以下命令，然后按回车键：
      <pre></pre>
      bash
      <p>
       复制代码
      </p>
      <p>
       <code>
        python --version
       </code>
      </p>
      或者：
      <pre></pre>
      bash
      <p>
       复制代码
      </p>
      <p>
       <code>
        python3 --version
       </code>
      </p>
     </li>
     <li>
      终端会显示 Python 的版本号，例如
      <code>
       Python 2.7.16
      </code>
      或
      <code>
       Python 3.x.x
      </code>
      。
     </li>
    </ol>
    <h5>
     <strong>
      解释：
     </strong>
    </h5>
    <ul>
     <li>
      如果显示的是
      <code>
       Python 2.x.x
      </code>
      ，说明系统中预装了 Python 2，但由于 Python 2 已经停止维护，建议你安装并使用 Python 3。
     </li>
     <li>
      如果显示的是
      <code>
       Python 3.x.x
      </code>
      ，说明系统中已经安装了 Python 3，但可能不是最新版本。如果你需要使用最新版本，可以继续按照以下步骤进行更新。
     </li>
    </ul>
    <h4>
     2. 使用 Homebrew 安装 Python 3
    </h4>
    <p>
     Homebrew 是 MacOS 上非常流行的包管理工具，可以方便地安装和管理软件包。通过 Homebrew，你可以轻松安装和更新 Python 版本。
    </p>
    <h5>
     <strong>
      步骤：
     </strong>
    </h5>
    <ol>
     <li>
      <p>
       <strong>
        安装 Homebrew（如果还没有安装）：
       </strong>
      </p>
      <ul>
       <li>
        打开终端，输入以下命令来安装 Homebrew：
        <pre></pre>
        bash
        <p>
         复制代码
        </p>
        <p>
         <code>
          /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
         </code>
        </p>
       </li>
       <li>
        安装过程中可能会提示你输入密码，并进行一些设置，按照提示操作即可。
       </li>
      </ul>
     </li>
     <li>
      <p>
       <strong>
        通过 Homebrew 安装 Python 3：
       </strong>
      </p>
      <ul>
       <li>
        在终端中输入以下命令来安装 Python 3：
        <pre></pre>
        bash
        <p>
         复制代码
        </p>
        <p>
         <code>
          brew install python
         </code>
        </p>
       </li>
       <li>
        Homebrew 将自动下载并安装最新版本的 Python 3。
       </li>
      </ul>
     </li>
     <li>
      <p>
       <strong>
        验证安装：
       </strong>
      </p>
      <ul>
       <li>
        安装完成后，可以再次检查 Python 版本，确保安装成功：
        <pre></pre>
        bash
        <p>
         复制代码
        </p>
        <p>
         <code>
          python3 --version
         </code>
        </p>
       </li>
       <li>
        如果安装成功，终端将显示 Python 3 的版本号，例如
        <code>
         Python 3.10.5
        </code>
        。
       </li>
      </ul>
     </li>
    </ol>
    <h4>
     3. 设置 Python 环境
    </h4>
    <p>
     安装 Python 3 之后，你需要做一些简单的配置，以便在开发中更方便地使用 Python。
    </p>
    <h5>
     <strong>
      步骤：
     </strong>
    </h5>
    <ol>
     <li>
      <p>
       <strong>
        设置别名（可选）：
       </strong>
      </p>
      <ul>
       <li>
        由于 MacOS 可能会同时安装 Python 2 和 Python 3，为了避免混淆，可以设置一个别名
        <code>
         python
        </code>
        指向
        <code>
         python3
        </code>
        。
       </li>
       <li>
        在终端中打开
        <code>
         .zshrc
        </code>
        或
        <code>
         .bash_profile
        </code>
        文件（取决于你使用的 shell）：
        <pre></pre>
        bash
        <p>
         复制代码
        </p>
        <p>
         <code>
          nano ~/.zshrc
         </code>
        </p>
       </li>
       <li>
        在文件末尾添加以下行：
        <pre></pre>
        bash
        <p>
         复制代码
        </p>
        <p>
         <code>
          alias python='python3' alias pip='pip3'
         </code>
        </p>
       </li>
       <li>
        保存并退出编辑器（按
        <code>
         Control + X
        </code>
        ，然后按
        <code>
         Y
        </code>
        ，最后按回车）。
       </li>
       <li>
        重新加载配置文件：
        <pre></pre>
        bash
        <p>
         复制代码
        </p>
        <p>
         <code>
          source ~/.zshrc
         </code>
        </p>
       </li>
      </ul>
     </li>
     <li>
      <p>
       <strong>
        安装 pip：
       </strong>
      </p>
      <ul>
       <li>
        <code>
         pip
        </code>
        是 Python 的包管理工具，可以用来安装和管理 Python 包。Python 3 安装完成后，
        <code>
         pip3
        </code>
        通常会自动安装。你可以通过以下命令检查 pip 是否已经安装：
        <pre></pre>
        bash
        <p>
         复制代码
        </p>
        <p>
         <code>
          pip3 --version
         </code>
        </p>
       </li>
       <li>
        如果没有安装，运行以下命令来安装 pip：
        <pre></pre>
        bash
        <p>
         复制代码
        </p>
        <p>
         <code>
          sudo easy_install pip
         </code>
        </p>
       </li>
      </ul>
     </li>
     <li>
      <p>
       <strong>
        验证 pip 安装：
       </strong>
      </p>
      <ul>
       <li>
        使用 pip 安装一个示例包，如
        <code>
         requests
        </code>
        ，以确保 pip 正常工作：
        <pre></pre>
        bash
        <p>
         复制代码
        </p>
        <p>
         <code>
          pip install requests
         </code>
        </p>
       </li>
       <li>
        如果安装成功，说明你的 Python 开发环境已设置完毕。
       </li>
      </ul>
     </li>
    </ol>
    <h4>
     4. 在 MacOS 上编写和运行 Python 脚本
    </h4>
    <p>
     安装和配置完成后，你可以开始编写和运行 Python 脚本。
    </p>
    <h5>
     <strong>
      步骤：
     </strong>
    </h5>
    <ol>
     <li>
      <p>
       <strong>
        创建一个 Python 文件：
       </strong>
      </p>
      <ul>
       <li>
        使用你喜欢的文本编辑器（如 VSCode、Sublime Text 或直接在终端中使用 nano）创建一个新的 Python 文件。例如，使用 nano 创建一个名为
        <code>
         hello.py
        </code>
        的文件：
        <pre></pre>
        bash
        <p>
         复制代码
        </p>
        <p>
         <code>
          nano hello.py
         </code>
        </p>
       </li>
       <li>
        在文件中输入以下简单的代码：
        <pre></pre>
        python
        <p>
         复制代码
        </p>
        <p>
         <code>
          print("Hello, Python!")
         </code>
        </p>
       </li>
       <li>
        保存并退出编辑器。
       </li>
      </ul>
     </li>
     <li>
      <p>
       <strong>
        运行 Python 脚本：
       </strong>
      </p>
      <ul>
       <li>
        在终端中运行以下命令来执行 Python 脚本：
        <pre></pre>
        bash
        <p>
         复制代码
        </p>
        <p>
         <code>
          python hello.py
         </code>
        </p>
       </li>
       <li>
        如果一切正常，终端会输出
        <code>
         Hello, Python!
        </code>
        。
       </li>
      </ul>
     </li>
    </ol>
    <h4>
     5. 结语
    </h4>
    <p>
     通过以上步骤，你已经成功在 MacOS 上安装并配置了 Python 环境，并且学会了如何编写和运行 Python 脚本。现在，你可以开始你的 Python 编程之旅了！无论是进行数据分析、Web 开发，还是编写自动化脚本，Python 都能为你提供强大的支持。记住，编程的关键在于不断练习和探索，祝你在 Python 的世界里不断进步，享受编程的乐趣！
    </p>
   </div>
  </div>
 </article>
</div>



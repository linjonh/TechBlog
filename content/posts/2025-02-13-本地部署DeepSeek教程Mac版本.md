---
title: 2025-02-13-本地部署DeepSeek教程Mac版本
date: 2025-02-13 23:26:42 +0800
categories: ['未分类']
tags: ['Macos', 'Ollama', 'Deepseekr', 'Deepseek', 'Ai']
image:
  path: /assets/images/fec7ae270567357c22e1b61dfba57d84.png
  alt: 本地部署DeepSeek教程Mac版本
render_with_liquid: false
featuredImage: https://bing.ee123.net/img/rand?artid=130492192
featuredImagePreview: https://bing.ee123.net/img/rand?artid=130492192
---

# 本地部署DeepSeek教程（Mac版本）

第一步、下载
[Ollama](https://www.baidu.com/link?url=BHgahOx9eD3kxb3bTrhgjuPvc3W9tm85LxlJTQK1C0e&wd=&eqid=fc5d4baf008514ff00000004679e14f0 "Ollama")

官网地址：
[Ollama](https://ollama.com/ "Ollama")

![](/assets/images/9a0ff09cbe8e4830700fa036dbbe74aa.png)

点击 Download 下载

![](/assets/images/a2bc88fb0f2b7bbfb81b23c7c111c84f.png)
我这里是  macOS  环境  以  macOS  环境为主

下载完成后是一个压缩包，双击解压之后移到应用程序：

![](/assets/images/eba08eb278ac2d4c877337e064e73e0c.png)
![](/assets/images/d6aab62b586b2a93740cd2c4c041533a.png)
打开后会提示你到命令行中运行一下命令，附上截图：

![](/assets/images/d0c4c3cc656de072bb2767f36a52b36c.png)
若遇上图类似报错，请重试  一般是因为网络问题

等待下载完成  输入以下代码：

```javascript
ollama -v
```

如下图所示，则为成功

![](/assets/images/867f9dd62944eecb7cdcdaa4a4fbec79.png)

第二步：在 ollama 官网找到  deepseek r1 模型并下载

![](/assets/images/d195773fcc056359c346c0979d48a72d.png)
![](/assets/images/8b55c3e1e70f387b89cc690a0b781261.png)

选择你的模型，并运行终端命令下载：

![](/assets/images/6e82180471dcd4c963cf38e0ca6d0988.png)

条件有限，选择1.5b试试水：

![](/assets/images/e602401fc353192b539f64abc3e2a751.png)

静静等待下载完成，输入下方命令开始对话：

```javascript
ollama run deepseek-r1:1.5b
```

命令行会自动判断当前是否已经安装了该模型

已经安装则直接运行

出现 success 则为安装成功

![](/assets/images/e980a41637575417e8e8511dd69ba474.png)

![](/assets/images/6bba69e29d6a608657888696f1fe9632.png)
输入 /bye 则退出对话

![](/assets/images/fec7ae270567357c22e1b61dfba57d84.png)
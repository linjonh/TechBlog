---
title: "Firebase hosting托管网页"
date: 2025-04-17T10:34:34+08:00
categories: ['docs','website']
tags: ['firebase','hosting','web']
image: "https://api.vvhan.com/api/bing?rand=sj&t=1744977051515"
---
![](https://api.vvhan.com/api/bing?rand=sj&t=1744977051515)

# Firebase hosting for web
## 介绍
Firebase Hosting 可为您的 Web 应用提供快速、安全的托管服务。


Firebase Hosting 是面向开发者的生产级 Web 内容托管服务。您只需运行一个命令，便可轻松快捷地将 Web 应用部署到全球级 CDN（内容分发网络）中。

虽然 Firebase Hosting 针对静态和单页 Web 应用进行了优化，不过，您还可以[将 Firebase Hosting 与 Cloud Functions 或 Cloud Run 搭配使用](https://firebase.google.com/docs/hosting/serverless-overview?authuser=0)，在 Firebase 上构建和托管动态内容和微服务。

无论您是在部署一个简单的应用着陆页，还是部署复杂的渐进式 Web 应用 (PWA)，Hosting 均为您提供了专为部署和管理网站和应用而特别开发的基础架构、功能和工具。

<!-- truncate -->

使用 [Firebase CLI](https://firebase.google.com/docs/cli?authuser=0)，您可以从计算机上的本地目录将文件部署到我们的 Hosting 服务器。除了提供静态内容之外，您还可以使用 `Cloud Functions for Firebase` 或 `Cloud Run` 在您的网站上[提供动态内容和托管微服务](https://firebase.google.com/docs/hosting/serverless-overview?authuser=0)。所有内容都可从我们的全球级 CDN 上最近的边缘服务器通过 SSL 连接提供。

您还可以在[上线前查看和测试更改](https://firebase.google.com/docs/hosting/test-preview-deploy?authuser=0)。 使用 `Firebase Local Emulator Suite`，您可以通过本地托管的网址模拟您的应用和后端资源。您还可以使用临时预览网址共享更改，并设置 GitHub 集成，以便在开发期间轻松迭代。

Firebase Hosting 具有轻量级托管配置选项，支持您构建精密的 PWA。您可以轻松为客户端路由重新编写网址、设置自定义标头，甚至可以提供本地化的内容。

为了分发您的内容，Firebase 提供了多个网域和子网域选项：

默认情况下，每个 Firebase 项目在 `web.app` 和 `firebaseapp.com` 网域上都有免费的子网域。这两个网站提供相同的已部署内容和配置。

如果您拥有提供不同内容但仍共享相同 Firebase 项目资源的相关网站和应用（例如，如果您有博客、管理面板和公开应用），则可以[创建多个网站](https://firebase.google.com/docs/hosting/multisites?authuser=0)。

您可以[将自己的域名关联](https://firebase.google.com/docs/hosting/custom-domain?authuser=0)到 Firebase 托管的网站。

Firebase 会自动为您的所有网域预配 SSL 证书，确保安全提供您的所有内容。
## 创建一个firebase hosting
### 1、准备工作
首先您必须在谷歌的firebase后台先[创建一个 Firebase 项目](https://firebase.google.com/docs/web/setup?authuser=0)，然后才能设置 Firebase Hosting。
### 2、安装 Firebase CLI 命令行工具
Firebase CLI ([GitHub](https://github.com/firebase/firebase-tools)) 提供了各种用于管理、查看 Firebase 项目并在其中进行部署的工具。
以Linux为例的npm安装方式：
```bash
npm install -g firebase-tools
```
之后登录firebase：
```bash
firebase login
```
查看登录账号下的项目
```bash
firebase projects:list
```

更多详情参阅 Firebase CLI 文档，了解如何[安装 CLI](https://firebase.google.com/docs/cli?authuser=0#install_the_firebase_cli) 或将其[更新为最新版本。](https://firebase.google.com/docs/cli?authuser=0#update-cli)

### 3、初始化你的本地项目
如需将本地项目文件与 Firebase 项目关联，请从本地项目目录的根目录下运行以下命令：
```bash
firebase init hosting
```
在项目初始化期间，请按照 Firebase CLI 提示执行以下操作：
- 选择一个 Firebase 项目以与您的本地项目目录关联。

    选定的 Firebase 项目是本地项目目录的“默认”Firebase 项目。要将其他 Firebase 项目关联到本地项目目录，请设[置项目别名](https://firebase.google.com/docs/cli?authuser=0#project_aliases)。

- 指定用作公共根目录的目录。

    此目录包含您公开提供的所有静态文件，包括 index.html 文件以及要部署到 Firebase Hosting 的所有其他资产。

    - 公共根目录的默认名称为 public。

        - 您可以立即指定公共根目录，也可以[稍后指定](https://firebase.google.com/docs/hosting/full-config?authuser=0#public)（在您的 firebase.json 配置文件中）。

        - 如果您选择默认值并且还没有名为 public 的目录，Firebase 会为您创建该目录。

    - 如果您的公共根目录中不存在有效的 index.html 文件或 404.html 文件，Firebase 会为您创建一个。

- 为您的网站选择配置。

    如果您选择制作一个单页应用，Firebase 会自动为您添加[重写配置](https://firebase.google.com/docs/hosting/full-config?authuser=0#rewrites)。

在初始化结束时，Firebase 会自动创建两个文件，并将其添加到本地应用目录的根目录下：

- firebase.json 配置文件，其中列出了您的项目配置。如需详细了解此文件，请参阅[配置托管行为](https://firebase.google.com/docs/hosting/full-config?authuser=0)页面。

- .firebaserc 文件，其中存储有[项目别名](https://firebase.google.com/docs/cli?authuser=0#project_aliases)。

### 4、部署到您的网站
要部署到您的网站，请从本地项目目录的根目录下运行以下命令：
```bash
firebase deploy --only hosting
```
>注意：如果运行带有 --only hosting 标志的此命令，您部署的只是您的 Hosting 内容和配置。如果您还希望部署其他项目资源或配置（例如函数或数据库规则），请运行此命令，并在标志中使用逗号分隔列表（例如 --only hosting,functions）。

此命令会将您的 Hosting 内容和配置部署到以下 Firebase 预配的子网域：

- _PROJECT_ID_.web.app
- _PROJECT_ID_.firebaseapp.com

详细了解如何[部署并在本地测试您的网站](https://firebase.google.com/docs/hosting/test-preview-deploy?authuser=0)。
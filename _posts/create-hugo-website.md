---
title: "如何使用hugo框架生成静态网页"
date: 2025-04-18T10:07:54+08:00
categories: ['docs','website']
tags: ["hugo",'website','文档构建']
image: "https://api.vvhan.com/api/bing?rand=sj&t=1744977000331"
---
![](https://api.vvhan.com/api/bing?rand=sj&t=1744977000331)
# 如何使用hugo框架生成静态网页
## hugo介绍
`hugo`是一个静态网页生成器工具，官方声称是世界上最快的构建网页的框架。也是一个最流行的开源静态网站生成器。凭借器惊人的速度和灵活性，让构建网站变得再次有趣。它的底层实现使用`go语言`开发，相比`jekyll`框架，`hugo`更适合构建拥有大量文章的大型网站。因为正如官方所说的，是世界上最快的构建框架。得益于`go语言`的运行效率。

<!-- truncate -->

## 开始使用
### 安装hugo工具
hugo的版本分三种： 标准，扩展，扩展与部署（standard, extended, and extended/deploy.）
区别如下：
| 功能|extended 版本|extended/deploy 版本|
| :---- | :---: | :----: |
|当处理图片时，会把图片编码为WebP格式。你可以用任何版本都能解码WebP图片。	|✔️	|✔️|
|使用内嵌的LibSass转义器将Sass转义为CSS，你可以使用任何版本的Dart Sass转义器。|	✔️	|✔️|
|你可以直接部署你的网站至Google Cloud Storage bucket，一个AWS S3 bucket，或者是一个Azure Storage container。|	❌	|✔️|

如果你已经有其他工具的部署方案而不需要hugo的extended/deploy版本，那么推荐使用extended版本。
- #### 安装Windows平台

    - 1、使用包管理器安装
        - Chocolatey
        
            [Chocolatey](https://chocolatey.org/) 是一个免费开源的windows包管理器，安装hugo的extended命令如下：
            ```bash
                choco install hugo-extended
            ```
            :::note 注意
            
                如果没有安装Chocolatey命令工具，请前往[Chocolatey](https://chocolatey.org/)官网下载安装
            :::
        - Scoop
            [Scoop](https://scoop.sh/) 也是一个免费开源的windows包管理器，安装hugo的extended命令如下：
            ```bash
                scoop install hugo-extended
            ```
        - Winget
            [Winget](https://learn.microsoft.com/en-us/windows/package-manager/) 是微软官方的免费开源windows包管理，安装hugo的extended命令如下：
            ```bash
            winget install Hugo.Hugo.Extended
            ```
            卸载hugo的extended版本：
            ```bash
            winget uninstall --name "Hugo (Extended)"
            ```
    - 2、使用已经编译好的二进制程序安装
        预编译好的版本支持各个平台和系统架构，访问[latest release](https://github.com/gohugoio/hugo/releases/latest)网页，滑动到底部资源部分，选择下载适合的版本包文件，解压后安装到你希望的目录下，安装完成后，将安装目录添加到PATH系统环境变量中。新启动一个终端，运行`hugo version`验证安装版本。
    - 3、从源码自行编译安装
    
        首先需要满足如下条件：
        
        - 安装[Git](https://git-scm.com/)版本管理工具
        - 安装[Go语言](https://go.dev/)版本 1.23.0或更高版本
        - 安装一个C语言编译器，如[GCC](https://gcc.gnu.org/)或者[Clang](https://clang.llvm.org/)
        - 更新[Go文档里](https://go.dev/doc/code#Command)提到的PATH环境变量

        标准版编译：
        ```shell
        go install github.com/gohugoio/hugo@latest
        ```
        扩展版本编译：
        ```shell
        CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@latest
        ```
        扩展/部署版本编译：
        ```shell
        CGO_ENABLED=1 go install -tags extended,withdeploy github.com/gohugoio/hugo@latest
        ```
    安装方式比较：
    ||Prebuilt binaries|Package managers|Build from source|
    |:-----|:---:|:---:|:---:|
    |容易安装?	|✔️|✔️|✔️|
    |容易升级?	|✔️|✔️|✔️|
    |容易降级?	|✔️|✔️|✔️|
    |自动升级?	|❌|❌|❌|
    |可用最新版本?	|✔️|✔️|✔️|

- #### Linux平台
    - 1、使用包管理器安装
        - Snap

            [Snap](https://snapcraft.io/)是一个免费开源的Linux包管理器，snap包是很容易安装的，而且是会自动升级的。

            Hugo Snap 软件包受到严格限制。严格限制的 Snap 软件包在完全隔离的环境中运行，并保持最低访问级别，以确保始终安全。您创建和构建的网站必须位于您的主目录中，或位于可移动介质上。

            安装extended版本：
            ```sh
            sudo snap install hugo
            ```
            启用或回收可移动介质访问权限：
            ```sh
            sudo snap connect hugo:removable-media
            sudo snap disconnect hugo:removable-media
            ```
            启用或回收SSH keys访问权限：
            ```sh
            sudo snap connect hugo:ssh-keys
            sudo snap disconnect hugo:ssh-keys
            ```
        - Homebrew

            [Homebrew](https://brew.sh/)是一个免费开源的macOS和Linux包管理器， 安装hugo extended版本：
            ```sh
            brew install hugo
            ```
    - 2、不同Linux系统的仓库包方式安装
        
        Linux也分为各种发行版本的系统，选择适合你的Linux版本方式安装：(以安装extended版本为例)
        - Alpine Linux
            ```sh
            doas apk add --no-cache --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community hugo
            ```
        - Arch Linux
        
            分发系统包括[EndeavourOS](https://endeavouros.com/), [Garuda Linux](https://garudalinux.org/), [Manjaro](https://manjaro.org/), and others.系统
            ```sh
            sudo pacman -S hugo
            ```
        - Debian

            分发系统包括[elementary OS](https://elementary.io/), [KDE neon](https://neon.kde.org/), [Linux Lite](https://www.linuxliteos.com/), [Linux Mint](https://linuxmint.com/), [MX Linux](https://mxlinux.org/), [Pop!_OS](https://pop.system76.com/), [Ubuntu](https://ubuntu.com/), [Zorin OS](https://zorin.com/os/), and others. 
            ```sh
            sudo apt install hugo
            ```
        - Exherbo

            1、Add this line to /etc/paludis/options.conf:
            ```
            www-apps/hugo extended
            ```

            2、Install using the Paludis package manager:
            ```sh
            cave resolve -x repository/heirecka
            cave resolve -x hugo
            ``` 
        - Fedora

            分发系统包括 [CentOS](https://www.centos.org/), [Red Hat Enterprise Linux](https://www.redhat.com/), and others.     
            ```sh
            sudo dnf install hugo
            ```       
        - Gentoo

            分发系统包括 [Calculate Linux](https://www.calculate-linux.org/), [Funtoo](https://www.funtoo.org/), and others. 

            1、指定扩展[USE](https://packages.gentoo.org/packages/www-apps/hugo)标记 到/etc/portage/package.use/hugo里面:
            ```
            www-apps/hugo extended
            ```
            2、Build using the Portage package manager:
            ```sh
            sudo emerge www-apps/hugo
            ```
        - NixOS

            ```sh
            nix-env -iA nixos.hugo
            ```
        - openSUSE

            分发系统包括 [GeckoLinux](https://geckolinux.github.io/), [Linux Karmada](https://linuxkamarada.com/), and others.
            ```sh
            sudo zypper install hugo
            ```
        - Solus
            ```sh
            sudo eopkg install hugo
            ```
        - Void Linux
            ```sh
            sudo xbps-install -S hugo
            ```
    - 3、从源码编译安装hugo
    
        先决条件类似windows：
        - 安装[Git](https://git-scm.com/)版本管理工具
        - 安装[Go语言](https://go.dev/)版本 1.23.0或更高版本
        - 安装一个C语言编译器，如[GCC](https://gcc.gnu.org/)或者[Clang](https://clang.llvm.org/)
        - 更新[Go文档里](https://go.dev/doc/code#Command)提到的PATH环境变量

        但是环境变量需要注意：

        :::note 注意

        安装目录是由`GOPATH` and `GOBIN`环境变量控制. 如果设置了`GOBIN`，二进制文件是安装在该目录下。 如果设置了 `GOPATH` , 二进制文件会安装在`GOPATH`列表里的第一个目录的bin子目录下。 否则二进制文件会安装在默认的`GOPATH` (`$HOME/go or %USERPROFILE%\go`)的bin子目录下。
        :::

        标准版编译：
        ```shell
        go install github.com/gohugoio/hugo@latest
        ```
        扩展版本编译：
        ```shell
        CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@latest
        ```
        扩展/部署版本编译：
        ```shell
        CGO_ENABLED=1 go install -tags extended,withdeploy github.com/gohugoio/hugo@latest
        ```
    - 安装方式比较

        |    |预编译二进制	|包管理器安装|	仓库包安装	|从源码安装|
        |:-----|:---:|:---:|:---:|:---:|
        |容易安装?	|✔️|✔️|✔️|✔️|
        |容易升级?	|✔️|✔️|各种各样|✔️|
        |容易降级?	|✔️|✔️|各种各样|✔️|
        |自动升级?	|❌|各种各样|❌|✔️|
        |可用最新版本?	|✔️|✔️|各种各样|✔️|
### hugo项目目录结构
每个 Hugo 项目都是一个目录，其中包含有助于您网站的内容、结构、行为和呈现的子目录。
#### 网站骨架
使用hugo命令创建一个站点，会自动生成项目目录结构骨架：
```bash
hugo new site my-site
```
生成的目录结构：
```
my-site/
├── archetypes/
│   └── default.md
├── assets/
├── content/
├── data/
├── i18n/
├── layouts/
├── static/
├── themes/
└── hugo.toml         <-- site configuration
```
取决于需要，你可能希望组织你的网站配置到子目录
```
my-site/
├── archetypes/
│   └── default.md
├── assets/
├── config/           <-- site configuration
│   └── _default/
│       └── hugo.toml
├── content/
├── data/
├── i18n/
├── layouts/
├── static/
└── themes/
```
当编译你的网站时，hugo会生成一个Public目录，通常还会创建一个特别的resource目录：
```
my-site/
├── archetypes/
│   └── default.md
├── assets/
├── config/       
│   └── _default/
│       └── hugo.toml
├── content/
├── data/
├── i18n/
├── layouts/
├── public/       <-- created when you build your site
├── resources/    <-- created when you build your site
├── static/
└── themes/
```
#### 骨架目录介绍

**archetypes（原型模板）**

- `archetypes` 目录包含新建内容时使用的模板。

**assets（资源）**

- `assets` 目录包含全局资源，通常通过资源管道进行处理。这些资源包括图片、CSS、Sass、JavaScript 和 TypeScript 文件。

**config（配置）**

- `config` 目录包含你的网站配置，可能分为多个子目录和文件。如果是配置简单或者不需要根据不同环境变化的项目，可以在项目根目录只用一个名为 `hugo.toml` 的配置文件即可。

**content（内容）**

- `content` 目录包含组成你网站内容的标记文件（通常是 Markdown）和页面资源。

**data（数据）**

- `data` 目录包含数据文件（支持 JSON、TOML、YAML 或 XML 格式），用于扩展内容、配置、本地化和导航。

**i18n（国际化）**

- `i18n` 目录包含多语言网站使用的翻译表。

**layouts（布局模板）**

- `layouts` 目录包含将内容、数据和资源转化为完整网站所需的模板。

**public（发布目录）**

- `public` 目录包含生成的网站内容，当你运行 `hugo` 或 `hugo server` 命令时生成。Hugo 会根据需要重建该目录及其内容。

**resources（资源缓存）**

- `resources` 目录包含 Hugo 资源管道处理后生成的缓存输出，如 CSS 和图片。每次运行 `hugo` 或 `hugo server` 命令时会根据需要重建此目录及其内容。

**static（静态文件）**

- `static` 目录中的文件会在构建网站时直接复制到 `public` 目录。例如：`favicon.ico`、`robots.txt` 以及验证站点所有权所需的文件。在引入页面包（Page Bundles）和资源管道之前，`static` 目录也常用于存放图片、CSS 和 JavaScript。

**themes（主题）**

- `themes` 目录包含一个或多个主题，每个主题在自己的子目录中。



#### 联合文件系统
hugo创建一个联合文件系统，运行你去挂载两个或更多目录到相同的目录下。例如，假设你的Home主目录中包含了一个hugo项目目录，在另一个目录下包含共享目录：
```
home/
└── user/
    ├── my-site/            
    │   ├── content/
    │   │   ├── books/
    │   │   │   ├── _index.md
    │   │   │   ├── book-1.md
    │   │   │   └── book-2.md
    │   │   └── _index.md
    │   ├── themes/
    │   │   └── my-theme/
    │   └── hugo.toml
    └── shared-content/     
        └── films/
            ├── _index.md
            ├── film-1.md
            └── film-2.md
```
当你用挂着方式构建你的网站时，你可以包含这个共享目录。在你的网站配置中如下配置即可：(选择toml，yaml，json三种方式配置其一)

- hugo.toml
```toml
[module]
  [[module.mounts]]
    source = 'content'
    target = 'content'
  [[module.mounts]]
    source = '/home/user/shared-content'
    target = 'content'
```
- hugo.yaml
```yaml
module:
  mounts:
  - source: content
    target: content
  - source: /home/user/shared-content
    target: content
```
- hugo.json
```json
{
   "module": {
      "mounts": [
         {
            "source": "content",
            "target": "content"
         },
         {
            "source": "/home/user/shared-content",
            "target": "content"
         }
      ]
   }
}
```
:::note 注意
当您将一个目录覆盖在另一个目录之上时，必须同时挂载这两个目录。 Hugo 不遵循符号链接。如果您需要符号链接提供的功能，请使用 Hugo 的联合文件系统。
:::

挂载后，联合文件系统就有如下目录结构：
```
home/
└── user/
    └── my-site/
        ├── content/
        │   ├── books/
        │   │   ├── _index.md
        │   │   ├── book-1.md
        │   │   └── book-2.md
        │   ├── films/
        │   │   ├── _index.md
        │   │   ├── film-1.md
        │   │   └── film-2.md
        │   └── _index.md
        ├── themes/
        │   └── my-theme/
        └── hugo.toml
```
你可以挂载目录到 archetypes, assets, content, data, i18n, layouts, and static。

也可以使用hugo modules从git仓库挂载目录。
#### 主题骨架
创建主题命令：
```sh
hugo new theme my-theme
```
创建的目录结构如下（子目录未展示）：
```
my-theme/
├── archetypes/
├── assets/
├── content/
├── data/
├── i18n/
├── layouts/
├── static/
├── LICENSE
├── README.md
├── hugo.toml
└── theme.toml
```
Hugo 使用上述联合文件系统，将每个目录挂载到项目中的相应位置。当两个文件具有相同路径时，项目目录中的文件优先。例如，这允许您通过将副本放置在项目目录中的相同位置来覆盖主题的模板。

如果您同时使用来自两个或多个主题或模块的组件，并且发生路径冲突，则第一个挂载的文件优先。
### hugo构建web
构建命令：
```sh
$ hugo
或
$ hugo build
```
开发调试命令：(包含热加载)
```sh
hugo server
```
开发调试，自动定位到最后修改处
```
hugo server --navigateToChanged
```
构建网页时，front matter里指定的时间是未来文章，草稿标记的文章，过期时间文章，发布时间文章不会被构建（draft, date, publishDate, and expiryDate ）。如果需要覆盖默认构建行为，加上参数：
```sh
hugo --buildDrafts    # or -D
hugo --buildExpired   # or -E
hugo --buildFuture    # or -F
```
### 发布部署web
编译生产环境：

- Linux下：
```sh
HUGO_ENVIRONMENT=production hugo build
```
或
```sh
hugo --environment production
```
- windows

powershell
```powershell
$env:HUGO_ENVIRONMENT="production" hugo build
```
cmd
```cmd
set HUGO_ENVIRONMENT=production hugo build
```
或
```sh
hugo --environment production
```

最终会生成编译后的内容到public目录下，将该目录下的文件发布到网站托管平台，如 [AWS Amplify](https://aws.amazon.com/amplify/), [CloudCannon](https://cloudcannon.com/), [Cloudflare Pages](https://pages.cloudflare.com/), [GitHub Pages](https://pages.github.com/), [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/), [Netlify](https://www.netlify.com/), [firebase hosting](https://firebase.google.com/docs/hosting?hl=zh-cn)等。





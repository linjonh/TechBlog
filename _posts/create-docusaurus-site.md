---
title: "如何创建Docusaurus网站"
date: 2025-04-16T11:29:29+08:00
categories: ['docs','website']
tags: ['docusaurus','website','文档构建']
image: "https://api.vvhan.com/api/bing?rand=sj&t=1744977029292"
---
![](https://api.vvhan.com/api/bing?rand=sj&t=1744977029292)
# 如何创建Docusaurus的文档网站
## 首先了解下什么是Docusaurus？
[Docusaurus](https://docusaurus.io/)是指一个开源的构建文档项目，由Meta公司（旧名Facebook）开源维护。是一个静态网页生成器，类似于jekyll，hugo，Docsify，VitePress等的静态生成器工具。
## Docusaurus有哪些特点
- 由 MDX 驱动

  节约时间并专注于文档本身。只需要以 Markdown/MDX 格式撰写文档/博客，Docusaurus 就能自动构建生成静态 HTML 文件。用 JSX 和 React 撰写交互组件，并将其嵌入 Markdown。
- 使用 React 构建

  通过编写 React 组件来扩展和自定义你的网页布局。利用插件架构，你可以在设计自己的网站的同时，复用 Docusaurus 插件所创建的数据。
- 可翻译

  开箱即用的本地化。使用 git、Crowdin 或任何其他翻译管理器来翻译你的文档并单独部署。
- 文档版本化

  为你的用户提供所有版本的项目文档。版本化文档可让你的文档发布与项目发行时间保持一致。
- 内容搜索

  让你的社区在文档中轻松找到他们需要的内容。我们支持 Algolia 文档搜索。

<!-- truncate -->

## 开始上手
### 安装构建工具
Docusaurus由一组`npm`包组成，因而需要安装`Node.js`工具集。安装`Node.js`推荐使用[nvm](https://github.com/nvm-sh/nvm)安装，`nvm`可以方便选择不同版本的`Node.js`，但版本要求在18.0 或以上。
### 创建脚手架项目网站
安装 Docusaurus 最简单的方法是使用`create-docusaurus`命令行工具，它可以帮助你快速搭建一个 Docusaurus 网站的基础框架。 你可以在空仓库或现有仓库的任何地方运行这个命令，它会创建一个包含模板文件的新目录。
```bash
npx create-docusaurus@latest my-website classic
```
也可以增加`--typescript`参数来支持 `TypeScript`
```bash
npx create-docusaurus@latest my-website classic --typescript
```
`classic`参数是表示使用经典脚手架模版，`classic template`包含了 `@docusaurus/preset-classic`模块，它具有标准文档，博客，自定义页面，和CSS框架（支持黑夜主题模式）的功能。

除了上述方式创建模版项目外，也可以使用如下命令初始化项目：
- npm
```npm
npm init docusaurus
```
- yarn
```yarn
yarn create docusaurus
```
- pnpm
```pnpm
pnpm create docusaurus
```
- bunx
```
bunx create-docusaurus
```

### 项目目录结构
假如使用脚手架工具创建了`my-website`项目后，会自动生成如下文件和目录结构：
```
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```
#### 目录结构介绍：
- `/blog/` : 包括了博客Markdown文件。你可以删除该目录以禁止使用博客插件功能，或者你可以当设置了path选项后，更改其名称，可以在[`博客指南`](https://docusaurus.io/zh-CN/docs/blog)中发掘更多详情。
- `/docs/` :包含了Markdown格式的文档文件.可以在`sidebars.js`自定义修改文档在侧边栏的顺序。你可以删除该目录以禁止使用文档插件功能，或者你可以当设置了path选项后，更改其名称，可以在[`文档指南`](https://docusaurus.io/zh-CN/docs/docs-introduction)中发掘更多详情。
- `/src/` : 可以放置类似`pages`或自定义的`React components`的非文档类文件。严格来说，你不一定要把非文档类文件放在这里。不过把它们放在一个集中的目录，可以让代码检查或者处理更为简便。
- `/src/pages` : 在该目录的任何`JSX/TSX/MDX`文件都将被转化为网页页面。更多详情查看[`页面指南`](https://docusaurus.io/zh-CN/docs/creating-pages)
- `/static/` : 静态目录。 在该目录里的任何内容都将会被拷贝到最终构建的根目录里。
- `/docusaurus.config.js` : 一个包含了网站配置的配置文件。这相当于`Docusaurus v1`的`siteConfig.js`
- `/package.json` : 一个`Docusaurus` 站点是一个React app. 你可以安装并使用任何 npm 包。
- `/sidebars.js` : 用于指定文档的在侧边栏的顺序。
#### 在已有项目中创建Docusaurus网站（monorepos）
如果你打算用 Docusaurus 来给一个现有的项目搭建文档，单仓模式可能是一种解决方案。 单仓允许你在类似项目间共享依赖项。 例如，您的网站可以使用本地软件包来展示最新功能，而不是依赖已发布的版本。 然后，您的贡献者可以在实现功能的同时更新文档。 下面是单仓模式文件夹结构的一个例子：
```python
my-monorepo
├── package-a # 另一个包，你的项目本身
│   ├── src
│   └── package.json #  package-a 的依赖项
├── website   # Docusaurus 根目录
│   ├── docs
│   ├── src
│   └── package.json # Docusaurus 的依赖项
├── package.json # 单仓的共享依赖项
```
在此样例中，你应该在`./my-monorepo`目录下运行`npx create-docusaurus`

如果使用`Netlify`或`Vercel`托管网站的提供商时，需要修改指定网站的基础根目录，在该样例中根目录是`./`。
请在[部署文档](https://docusaurus.io/zh-CN/docs/deployment#deploying-to-netlify)里查询更多配置。

更多真实样例：[Docusaurus](https://github.com/facebook/docusaurus) 和 [Jest](https://github.com/facebook/jest)

更多关于monorepos：[Yarn documentation](https://yarnpkg.com/features/workspaces) (Yarn不是唯一的设置一个monorepo方式, 但却是一个常见的解决方案)。

## 运行开发调试服务
要实时预览你的编辑，你可以运行本地开发服务器。它会部署你的网站，并反映最新更改。
```bash
cd my-website
npm run start
```
默认会在浏览器中打开地址 http://localhost:3000.

恭喜！ 你刚刚成功创建了你的首个 Docusaurus 网站！ 四处逛逛，看看有什么功能吧。
## build构建
Docusaurus 是一款现代化的静态网页生成器。因此，我们需要将网站生成为静态内容，并上传到网络服务器，才能被其他人访问。 要构建站点，请使用以下命令：
- npm:
```bash
npm run build
```
- yarm
```bash
yarn build
```
- pnpm
```bash
pnpm run build
```
- bun
```bash
bun run build
```
内容将被构建生成在`/build`目录，该目录下的文件就可以托管到静态文件托管服务的提供上网站上了，如：[GitHub pages](https://pages.github.com/), [Vercel](https://vercel.com/) 或 [Netlify](https://www.netlify.com/)，详情看[deployment](https://docusaurus.io/zh-CN/docs/deployment)

## 配置搜索
Docusaurus 已官方支持[Algolia DocSearch](https://docsearch.algolia.com/)。该服务是免费的，是针对于任何开发者文档和技术博客的，请确保符合Algolia DocSearch的要求：[checklist](https://docsearch.algolia.com/docs/who-can-apply/)，然后申请应用 [apply to the DocSearch program](https://docsearch.algolia.com/apply)

Docsearch 每周一次爬取你的网站（可以在网页界面上配置具体时间），并将所有内容汇总到一个 Algolia 索引中。 随后，你的前端会调用 Algolia API 来直接查询这些内容。
如果你的网站[不符合免费版托管DocSearch资质](https://docsearch.algolia.com/docs/who-can-apply)，或者你的网站是有防火墙且不是公开的，那么你可以运行你自己的爬虫程序 [run your own DocSearch crawler](https://docsearch.algolia.com/docs/run-your-own/)。


如果是应用了预设的经典主题`classic`就会包含`@docusaurus/preset-classic`插件，会默认集成了`Algolia DocSearch`，就不需要额外安装任何东西。
<details>

<summary>如果没有使用经典主题插件，就需要手动安装</summary>
1、安装软件包：

- npm
```
npm install --save @docusaurus/theme-search-algolia
```
- yarn, pnmp, bun
```bash
yarn add @docusaurus/theme-search-algolia

pnpm add @docusaurus/theme-search-algolia

bun add @docusaurus/theme-search-algolia
```
2、`docusaurus.config.js`配置文件里注册主题
```js
export default {
  title: 'My site',
  // ...
  themes: ['@docusaurus/theme-search-algolia'],
  themeConfig: {
    // ...
  },
};
```
</details>

<br/>

>首先你得在[Apply for DocSearch](https://docsearch.algolia.com/apply/) 获取你的配置Algolia index and API key，之后会收到邮件告诉你如何将 DocSearch 添加到你的项目，可以编辑和管理你自己的爬虫配置：[the web interface](https://crawler.algolia.com/)。部署完毕后，索引就立即可用了，所以一般不需要手动配置。

>然后在项目配置里algolia字段增加搜索配置**连接到Algolia**：
```js
export default {
  // ...
  themeConfig: {
    // ...
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID',

      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY',

      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
  },
};
```

更多详细配置可查看[搜索配置](https://docusaurus.io/zh-CN/docs/search)


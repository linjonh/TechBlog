---
title: "Github pages托管网页"
date: 2025-04-18T11:20:33+08:00
categories: ['docs','website']
tags: ['github pages','hosting','web']
image: "https://api.vvhan.com/api/bing?rand=sj&t=1744977060652"
---
![](https://api.vvhan.com/api/bing?rand=sj&t=1744977060652)

# 使用github pages托管静态网站
## 介绍
Github pages默认支持Jekyll静态网页生成器，也就是说你的github上的某个仓库如果包含了docs或public网页内容或markdown文件内容，会以Jekyll方式编译网站自动托管到Github pages上。域名将会是 **_username_**.gihub.io/**_repo_**/，username替换成你的github账号名,repo替换成你的仓库名。

如果仓库名为`username.gihub.io`，这也正式你的github pages的首页域名，也是创建github pages必需创建的公开仓库！
<!-- truncate -->
<!-- more -->
## 开始
### 1、启用github pages
- 创建站点仓库

    创建一个&lt;user>.github.io或&lt;orignization>.gihub.io仓库。在项目settings设置里的pages配置里，设置分发pages分支和目录作为pages托管目录。

### 2、使用jekyll框架
如果目录是直接可以托管而不需要编译的内容，需要增加.nojekyll文件标记。然后github就不会自动jekyll编译该目录了。直接会分发到pages托管服务上。

如果需要编译，则按照jekyll框架目录来创建docs文档项目。或者可以使用其他构建框架构建项目，然后提交到settings设置里pages设置的分支和目录下，就可以托管了。

## 发布

Github pages会寻找index.html、index.md 或 README.md 文件作为站点的入口文件。

- 默认分支和目录发布
    
    把需要托管的文件提交到项目的`settings/pages`里设置的相应分支和目录下，github会自动发布该目录下的内容。
- 使用自定义工作流github workflow自动构建和发布

    1、首先需要在默认分支下的根目录下创建一个`.github/workflow`目录，然后在该目录下创建一个`.yml`后缀名格式的文件。
    ```
     repo
        |--.github
        |   |--workflow
        |   |    |--build-deploy.yml
    ```
    2、编写`build-deploy.yml` `actions`脚本
    ```yaml
    name: "jekyll Build and Deploy"
    on:
     push:
       branches:
         - main
       paths-ignore:
         - .github/workflows/pages-deploy.yml
         - .gitignore
         - README.md
         - LICENSE

    # Allows you to run this workflow manually from the Actions tab
    workflow_dispatch:

    permissions:
    contents: read
    pages: write
    id-token: write

    # Allow one concurrent deployment
    concurrency:
    group: "pages"
    cancel-in-progress: true

    jobs:
    build:
        runs-on: ubuntu-latest #运行的操作系统环境

        steps:
        - name: Checkout
            uses: actions/checkout@v4
            with:
            fetch-depth: 0

        - name: Setup Pages
            id: pages
            uses: actions/configure-pages@v4

        - name: Setup Ruby
            uses: ruby/setup-ruby@v1
            with:
            ruby-version: 3.3
            bundler-cache: true

        - name: Build site
            run: bundle exec jekyll b -d "_site${{ steps.pages.outputs.base_path }}" --trace --profile
            env:
            JEKYLL_ENV: "production"

        - name: Upload site artifact
            uses: actions/upload-pages-artifact@v3
            with:
            path: "_site${{ steps.pages.outputs.base_path }}"

    deploy:
        environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        needs: build
        steps:
        - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4
    ```
    该脚本会在git push后，在github的actions选项页里触发自动编译和部署，可以在actions页里查看编译和发布历史。检查编译和发布是否成功。
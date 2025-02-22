---
layout: post
title: 如何创建一个HarmonyOS项目
date: 2025-02-13 11:28:39 +0800
categories: [鸿蒙]
tags: [鸿蒙系统,鸿蒙,华为,harmonyos,android]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=135922388
    alt: 如何创建一个HarmonyOS项目
artid: 135922388
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     如何创建一个HarmonyOS项目？
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h3>
     1：创建ArkTS工程
    </h3>
    <ol>
     <li>
      若首次打开
      <strong>
       DevEco Studio
      </strong>
      ，请点击
      <strong>
       Create Project
      </strong>
      创建工程。如果已经打开了一个工程，请在菜单栏选择
      <strong>
       File
      </strong>
      &gt;
      <strong>
       New
      </strong>
      &gt;
      <strong>
       Create Project
      </strong>
      来创建一个新工程。选择
      <strong>
       Application
      </strong>
      应用开发（本文以应用开发为例，
      <strong>
       Atomic Service
      </strong>
      对应为原子化服务开发），选择模板“
      <strong>
       Empty Ability
      </strong>
      ”，点击
      <strong>
       Next
      </strong>
      进行下一步配置。
     </li>
    </ol>
    <p>
    </p>
    <p class="img-center">
     <img alt="createProject" height="559" src="https://i-blog.csdnimg.cn/blog_migrate/73751945cba51e5ec359e4a2af700579.png" width="787"/>
    </p>
    <ol>
     <li>
      进入配置工程界面，
      <strong>
       Compile SDK
      </strong>
      选择“
      <strong>
       9
      </strong>
      ”，
      <strong>
       Model
      </strong>
      选择“
      <strong>
       Stage
      </strong>
      ”，其他参数保持默认设置即可。
     </li>
    </ol>
    <p>
    </p>
    <p class="img-center">
     <img alt="chooseStageModel" height="500" src="https://i-blog.csdnimg.cn/blog_migrate/d6ec59090d27b218ff3fea09c76f75df.png" width="705"/>
    </p>
    <pre></pre>
    <pre><code class="hljs">&gt; **说明：**
&gt;
&gt; 支持使用ArkTS[低代码开发](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/ide-low-code-overview-0000001480179573-V3)方式。
&gt;
&gt; 低代码开发方式具有丰富的UI界面编辑功能，通过可视化界面开发方式快速构建布局，可有效降低开发者的上手成本并提升开发者构建UI界面的效率。
&gt;
&gt; 如需使用低代码开发方式，请打开上图中的Enable Super Visual开关。
</code></pre>
    <p>
    </p>
    <ol>
     <li>
      <p>
       点击
       <strong>
        Finish
       </strong>
       ，工具会自动生成示例代码和相关资源，等待工程创建完成。
      </p>
     </li>
     <li>
      <p>
       工程创建完成后，在
       <strong>
        entry &gt; build-profile.json5
       </strong>
       文件中，将targets中的runtimeOS改为“OpenHarmony”，然后点击右上角提示框的
       <strong>
        Sync Now
       </strong>
       以进行OpenHarmony应用开发。
      </p>
     </li>
    </ol>
    <h3>
     ArkTS工程目录结构（Stage模型）
    </h3>
    <p>
    </p>
    <p class="img-center">
     <img alt="zh-cn_image_0000001364054489" height="526" src="https://i-blog.csdnimg.cn/blog_migrate/d37b9879ff668c66a7b9c514029d7cfb.png" width="410"/>
    </p>
    <ul>
     <li>
      <p>
       <strong>
        AppScope &gt; app.json5
       </strong>
       ：应用的全局配置信息。
      </p>
     </li>
     <li>
      <p>
       <strong>
        entry
       </strong>
       ：OpenHarmony工程模块，编译构建生成一个
       <a href="https://link.juejin.cn?target=https%3A%2F%2Fdocs.openharmony.cn%2Fpages%2Fv3.2%2Fzh-cn%2Fglossary.md%2F%23hap" rel="nofollow" title="HAP">
        HAP
       </a>
       包。
      </p>
      <ul>
       <li>
        <strong>
         src &gt; main &gt; ets
        </strong>
        ：用于存放ArkTS源码。
       </li>
       <li>
        <strong>
         src &gt; main &gt; ets &gt; entryability
        </strong>
        ：应用/服务的入口。
       </li>
       <li>
        <strong>
         src &gt; main &gt; ets &gt; pages
        </strong>
        ：应用/服务包含的页面。
       </li>
       <li>
        <strong>
         src &gt; main &gt; resources
        </strong>
        ：用于存放应用/服务所用到的资源文件，如图形、多媒体、字符串、布局文件等。
       </li>
       <li>
        <strong>
         src &gt; main &gt; module.json5
        </strong>
        ：模块配置文件。主要包含HAP的配置信息、应用/服务在具体设备上的配置信息以及应用/服务的全局配置信息。
       </li>
       <li>
        <strong>
         build-profile.json5
        </strong>
        ：当前的模块信息 、编译信息配置项，包括buildOption、targets配置等。其中targets中可配置当前运行环境，默认为HarmonyOS。若需开发OpenHarmony应用，则需开发者自行修改为OpenHarmony。
       </li>
       <li>
        <strong>
         hvigorfile.ts
        </strong>
        ：模块级编译构建任务脚本，开发者可以自定义相关任务和代码实现。
       </li>
      </ul>
     </li>
     <li>
      <p>
       <strong>
        oh_modules
       </strong>
       ：用于存放三方库依赖信息。
      </p>
     </li>
     <li>
      <p>
       <strong>
        build-profile.json5
       </strong>
       ：应用级配置信息，包括签名、产品配置等。
      </p>
     </li>
     <li>
      <p>
       <strong>
        hvigorfile.ts
       </strong>
       ：应用级编译构建任务脚本。
      </p>
     </li>
    </ul>
    <h3>
     构建第一个页面
    </h3>
    <ol>
     <li>
      <p>
       使用文本组件。
      </p>
      <p>
       工程同步完成后，在“
       <strong>
        Project
       </strong>
       ”窗口，点击“
       <strong>
        entry &gt; src &gt; main &gt; ets &gt; pages
       </strong>
       ”，打开“
       <strong>
        Index.ets
       </strong>
       ”文件，可以看到页面由Text组件组成。“
       <strong>
        Index.ets
       </strong>
       ”文件的示例如下：
      </p>
      <pre><code class="hljs">// Index.ets
@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
      }
      .width('100%')
    }
    .height('100%')
  }
}
ts

</code></pre>
     </li>
     <li>
      <p>
       添加按钮。
      </p>
      <p>
       在默认页面基础上，我们添加一个Button组件，作为按钮响应用户点击，从而实现跳转到另一个页面。“
       <strong>
        Index.ets
       </strong>
       ”文件的示例如下：
      </p>
      <pre></pre>
      <pre><code class="hljs">// Index.ets
@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        // 添加按钮，以响应用户点击
        Button() {
          Text('Next')
            .fontSize(30)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor('#0D9FFB')
        .width('40%')
        .height('5%')
      }
      .width('100%')
    }
    .height('100%')
  }
}
ts
</code></pre>
     </li>
     <li>
      <p>
       在编辑窗口右上角的侧边工具栏，点击Previewer，打开预览器。第一个页面效果如下图所示：
      </p>
     </li>
    </ol>
    <p>
    </p>
    <p class="img-center">
     <img alt="zh-cn_image_0000001311334976" height="676" src="https://i-blog.csdnimg.cn/blog_migrate/921518422aab5cf065cce57ef9c2bfbf.png" width="311"/>
    </p>
    <h3>
     构建第二个页面
    </h3>
    <ol>
     <li>
      <p>
       创建第二个页面。
      </p>
      <ul>
       <li>
        新建第二个页面文件。在“
        <strong>
         Project
        </strong>
        ”窗口，打开“
        <strong>
         entry &gt; src &gt; main &gt; ets
        </strong>
        ”，右键点击“
        <strong>
         pages
        </strong>
        ”文件夹，选择“
        <strong>
         New &gt; ArkTS File
        </strong>
        ”，命名为“
        <strong>
         Second
        </strong>
        ”，点击“
        <strong>
         Finish
        </strong>
        ”。可以看到文件目录结构如下：
       </li>
      </ul>
     </li>
    </ol>
    <p>
    </p>
    <p class="img-center">
     <img alt="secondPage" height="180" src="https://i-blog.csdnimg.cn/blog_migrate/c77e0df891e18d9916a0955583d12226.png" width="300"/>
    </p>
    <pre></pre>
    <pre><code class="hljs">    &gt; **说明：**
    &gt;
    &gt; 开发者也可以在右键点击“**pages**”文件夹时，选择“**New &gt; Page**”，则无需手动配置相关页面路由。

-   配置第二个页面的路由。在“**Project**”窗口，打开“**entry &gt; src &gt; main &gt; resources &gt; base &gt; profile**”，在main_pages.json文件中的“src”下配置第二个页面的路由“pages/Second”。示例如下：

    ```
    {
      "src": [
        "pages/Index",
        "pages/Second"
      ]
    }
    json
    ```
</code></pre>
    <p>
    </p>
    <ol>
     <li>
      <p>
       添加文本及按钮。
      </p>
      <p>
       参照第一个页面，在第二个页面添加Text组件、Button组件等，并设置其样式。“
       <strong>
        Second.ets
       </strong>
       ”文件的示例如下：
      </p>
      <pre></pre>
      <pre><code class="hljs">// Second.ets
@Entry
@Component
struct Second {
  @State message: string = 'Hi there'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Button() {
          Text('Back')
            .fontSize(25)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor('#0D9FFB')
        .width('40%')
        .height('5%')
      }
      .width('100%')
    }
    .height('100%')
  }
}
ts
</code></pre>
     </li>
    </ol>
    <h3>
     实现页面间的跳转
    </h3>
    <p>
     页面间的导航可以通过
     <a href="https://link.juejin.cn?target=https%3A%2F%2Fdocs.openharmony.cn%2Fpages%2Fv3.2%2Fzh-cn%2Fapplication-dev%2Freference%2Fapis%2Fjs-apis-router.md%2F" rel="nofollow" title="页面路由router">
      页面路由router
     </a>
     来实现。页面路由router根据页面url找到目标页面，从而实现跳转。使用页面路由请导入router模块。
    </p>
    <ol>
     <li>
      <p>
       第一个页面跳转到第二个页面。
      </p>
      <p>
       在第一个页面中，跳转按钮绑定onClick事件，点击按钮时跳转到第二页。“
       <strong>
        Index.ets
       </strong>
       ”文件的示例如下：
      </p>
      <pre></pre>
      <pre><code class="hljs">// Index.ets
// 导入页面路由模块
import router from '@ohos.router';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        // 添加按钮，以响应用户点击
        Button() {
          Text('Next')
            .fontSize(30)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor('#0D9FFB')
        .width('40%')
        .height('5%')
        // 跳转按钮绑定onClick事件，点击时跳转到第二页
        .onClick(() =&gt; {
          console.info(`Succeeded in clicking the 'Next' button.`)
         // 跳转到第二页
           router.pushUrl({ url: 'pages/Second' }).then(() =&gt; {
             console.info('Succeeded in jumping to the second page.')
           }).catch((err) =&gt; {
             console.error(`Failed to jump to the second page.Code is ${err.code}, message is ${err.message}`)
           })
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
ts
</code></pre>
     </li>
     <li>
      <p>
       第二个页面返回到第一个页面。
      </p>
      <p>
       在第二个页面中，返回按钮绑定onClick事件，点击按钮时返回到第一页。“
       <strong>
        Second.ets
       </strong>
       ”文件的示例如下：
      </p>
      <pre></pre>
      <pre><code class="hljs">// Second.ets
// 导入页面路由模块
import router from '@ohos.router';

@Entry
@Component
struct Second {
  @State message: string = 'Hi there'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Button() {
          Text('Back')
            .fontSize(25)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor('#0D9FFB')
        .width('40%')
        .height('5%')
        // 返回按钮绑定onClick事件，点击按钮时返回到第一页
        .onClick(() =&gt; {
          console.info(`Succeeded in clicking the 'Back' button.`)
          try {
            // 返回第一页
            router.back()
            console.info('Succeeded in returning to the first page.')
          } catch (err) {
            console.error(`Failed to return to the first page.Code is ${err.code}, message is ${err.message}`)
          }
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
ts
</code></pre>
     </li>
     <li>
      <p>
       打开Index.ets文件，点击预览器中的
      </p>
      <p class="img-center">
       <img alt="zh-cn_image_0000001311015192" height="23" src="https://i-blog.csdnimg.cn/blog_migrate/351991d61c797c0cfe24b6b4d074d0f3.png" width="23"/>
      </p>
      <p>
       按钮进行刷新。效果如下图所示：
      </p>
      <p>
      </p>
      <p class="img-center">
       <img alt="zh-cn_image_0000001364254729" height="481" src="https://i-blog.csdnimg.cn/blog_migrate/c9b7eb626943f523a117cb74dc2e13f4.png" width="518"/>
      </p>
     </li>
    </ol>
    <h3>
     使用真机运行应用
    </h3>
    <ol>
     <li>
      <p>
       将搭载OpenHarmony标准系统的开发板与电脑连接。
      </p>
     </li>
     <li>
      <p>
       点击
       <strong>
        File
       </strong>
       &gt;
       <strong>
        Project Structure…
       </strong>
       &gt;
       <strong>
        Project
       </strong>
       &gt;
       <strong>
        SigningConfigs
       </strong>
       界面勾选“
       <strong>
        Automatically generate signature
       </strong>
       ”，等待自动签名完成即可，点击“
       <strong>
        OK
       </strong>
       ”。如下图所示：
      </p>
      <p>
      </p>
      <p class="img-center">
       <img alt="signConfig" height="508" src="https://i-blog.csdnimg.cn/blog_migrate/c67f12a09a2a72f3a80624d5355d54b4.png" width="771"/>
      </p>
     </li>
     <li>
      <p>
       在编辑窗口右上角的工具栏，点击
      </p>
      <p class="img-center">
       <img alt="zh-cn_image_0000001364054485" height="22" src="https://i-blog.csdnimg.cn/blog_migrate/020ebc9ae3794b30cb607195117c6442.png" width="22"/>
      </p>
      <p>
       按钮运行。效果如下图所示：
      </p>
      <p>
      </p>
      <p class="img-center">
       <img alt="zh-cn_image_0000001364254729" height="481" src="https://i-blog.csdnimg.cn/blog_migrate/fe1ca2c85cb629fec48867e9b4c23488.png" width="518"/>
      </p>
     </li>
    </ol>
    <p>
     至此，你就已经使用ArkTS语言开发（Stage模型）完成了第一个OpenHarmony应用。
    </p>
    <p>
     最后，为了能够让大家跟上互联网时代的技术迭代，赶上互联网开发人员寒冬期间一波红利，在这里跟大家分享一下我自己近期学习心得以及参考网上资料整理出的一份最新版的鸿蒙学习提升资料，有需要的小伙伴自行领取，限时开源，先到先得~
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="资料图.png" height="128" src="https://i-blog.csdnimg.cn/blog_migrate/7a9c9ce4b0bf29be7f6637f47dd0d343.png" width="403"/>
    </p>
    <p>
    </p>
    <p class="img-center">
     <img alt="视频资料3.png" height="790" src="https://i-blog.csdnimg.cn/blog_migrate/2c9cd543a2c15759e0a6e1c0c049a233.png" width="1009"/>
    </p>
    <h2>
    </h2>
    <h3>
     🚀写在最后
    </h3>
    <ul>
     <li>
      如果你觉得这篇内容对你还蛮有帮助，我想邀请你帮我三个小忙：
     </li>
     <li>
      点赞，转发，有你们的 『点赞和评论』，才是我创造的动力。
     </li>
     <li>
      关注小编，同时可以期待后续文章ing🚀，不定期分享原创知识。
     </li>
     <li>
      想要获取更多完整鸿蒙最新VIP学习资料，请点击→
      <a href="https://docs.qq.com/doc/DSHlBQWh2d3lmYVlp" rel="nofollow" title="纯血版全套鸿蒙HarmonyOS学习资料">
       纯血版全套鸿蒙HarmonyOS学习资料
      </a>
     </li>
    </ul>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/36760cb59c7d9cf0a0db56f0cacae48c.png"/>
    </p>
   </div>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



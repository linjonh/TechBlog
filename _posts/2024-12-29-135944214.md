---
layout: post
title: 三大主流微前端框架,you-love-who
date: 2024-12-29 14:32:43 +0800
categories: [前端框架]
tags: [前端框架]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=135944214
    alt: 三大主流微前端框架,you-love-who
artid: 135944214
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     三大主流微前端框架，you love who？
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <div id="js_content">
     <pre></pre>
     <p style="text-align:center;">
      大厂技术  高级前端  Node进阶
     </p>
     <pre class="has"><code class="language-go">点击上方 程序员成长指北，关注公众号
回复1，加入高级Node交流群</code></pre>
     <p>
      背景及相关信息
     </p>
     <p>
      微前端目前已经是大型前端应用中常见的技术，目前微前端常用的框架主要有三个：
     </p>
     <ol>
      <li>
       <p>
        无界
       </p>
      </li>
      <li>
       <p>
        qiankun 乾坤
       </p>
      </li>
      <li>
       <p>
        MicroApp
       </p>
      </li>
     </ol>
     <p>
      那么这三种微前端框架各有什么优缺点，在企业中进行大型应用开发时，应该如何进行选择呢？这篇文章讲由浅入深的告诉你答案！
     </p>
     <blockquote>
      <p>
       原文：https://juejin.cn/user/1714893869557512/posts
      </p>
     </blockquote>
     <h3>
      01：什么是微前端？
     </h3>
     <p>
      故事开始于三年前…
     </p>
     <p>
      小明为公司重构了一版新的管理后台，采用了市面上最流行的SPA渲染模式，具体技术栈使用的是
      <code>
       react + react-router
      </code>
      。
     </p>
     <img alt="d20a7ea58d408a574c5c22ba94d6f0bd.png" src="https://i-blog.csdnimg.cn/blog_migrate/8bfaccc89a532b21601aeda14e5809b2.png">
      <p>
       项目第一版很快就顺利上线了，但在后续的迭代中，遇到一个棘手的问题：
       <strong>
        产品经理希望快速复用之前项目的某些页面
       </strong>
       。这让小明犯了难，因为老项目是用“上古神器” jQuery 写的，完全重构成 react，成本非常高。这时后端老哥丢过来一句：“
       <strong>
        你们前端用 iframe 嵌进来就可以了吧？
       </strong>
       ” 小明心里很清楚 iframe 有许多小毛病，但在当时，也确实没有比它更好的选择了。
      </p>
      <p>
       上线后，随着时间的推移，用户产生了困惑：
      </p>
      <ol>
       <li>
        <p>
         为什么这个页面的弹框不居中了？
        </p>
       </li>
       <li>
        <p>
         为什么这个页面的跳转记录无法保存？...
        </p>
       </li>
      </ol>
      <p>
       小明心里其实非常清楚，
       <strong>
        这一切都是 iframe 带来的弊端
       </strong>
       。
      </p>
      <p>
       时间来到三年后的今天，小明听说
       <strong>
        微前端能够解决 iframe 的各种疑难杂症
       </strong>
       ，于是展开了调研。
      </p>
      <p>
       市面上对微前端的定义让人眼花缭乱，比如
       <strong>
        微前端是：
       </strong>
      </p>
      <img alt="9a6114e4b6830f154f10586e09b3a128.png" src="https://i-blog.csdnimg.cn/blog_migrate/4f44c1438e965ecc143ad16bf12bc97c.png">
       <p>
        这里给出我对微前端最接地气的定义：
       </p>
       <img alt="6f05f2147b30bb4abb51db4d41ad3504.png" src="https://i-blog.csdnimg.cn/blog_migrate/4f42ad873a77a066e3cf3754290e9184.png">
        <h5>
         “类似于iframe的效果，但没有它带来的各种问题”——小明。
        </h5>
        <h3>
         02：主流技术方向分类
        </h3>
        <p>
         首先，“微前端”作为近几年国内前端界最火的技术之一，目前存在多个技术流派。我
         <strong>
          按照它们对 iframe 看法的不同
         </strong>
         ，将主流微前端方案分为了三大派系：
         <strong>
          革新派、改良派、中间派
         </strong>
         。
        </p>
        <img alt="dd5709f2b4f751fe0d24868d437aa101.png" src="https://i-blog.csdnimg.cn/blog_migrate/659dbb939fa165002c533f836e22465f.png">
         <h4>
          2.1. 革新派 qiankun
         </h4>
         <p>
          以 qiankun
          <sup>
           [1]
          </sup>
          为主的革新派认为：
          <strong>
           iframe 问题很多，应避免使用它。
          </strong>
          完全可以利用现有的前端技术
          <strong>
           自建
          </strong>
          一套应用隔离渲染方案。
         </p>
         <h5>
          2.1.1. 原理：
         </h5>
         <h6>
          2.1.1.1. 基于 single-spa
          <sup>
           [2]
          </sup>
         </h6>
         <p>
          将路由切换与子应用加载、卸载等生命周期结合起来是微前端的一项核心能力。这一步 qiankun 是基于 single-spa
          <sup>
           [3]
          </sup>
          实现的，不同的是它支持以 html 作为加载子应用的入口，不必像 single-spa 那样需要手动梳理资源链接，内部插件 import-html-entry
          <sup>
           [4]
          </sup>
          会自动分析 html 以获取 js 和 css。
         </p>
         <img alt="1240a520f5814bfd26e010c797f8508e.png" src="https://i-blog.csdnimg.cn/blog_migrate/b6eb244cde937d832e2491d171147037.png">
          <h6>
           2.1.1.2. 样式隔离
          </h6>
          <p>
           为了确保子应用之间样式互不影响，qiankun 内置了三种样式隔离模式：
          </p>
          <ol>
           <li>
            <p>
             <strong>
              默认模式。
             </strong>
            </p>
           </li>
          </ol>
          <p>
           原理是加载下一个子应用时，将上一个子应用的
           <code>
            &lt;link rel="stylesheet" href="xxx.css"/&gt;、&lt;style&gt;...&lt;/style&gt;
           </code>
           等样式相关标签通通删除与替换，来实现样式隔离。缺点是仅支持单例模式（同一时间只能渲染单个子应用），且没法做到主子应用及多个子应用之间的样式隔离。
          </p>
          <ol>
           <li>
            <p>
             <strong>
              严格模式。
             </strong>
            </p>
           </li>
          </ol>
          <p>
           可通过
           <code>
            strictStyleIsolation：true
           </code>
           开启。原理是利用 webComponent 的 shadowDOM 实现。但它的问题在于隔离效果太好了，在目前的前端生态中有点水土不服，这里举两个例子。
          </p>
          <ul>
           <li>
            <p>
             <strong>
              可能会影响 React 事件
             </strong>
             。比如这个issue 当 Shadow Dom 遇上 React 事件
             <sup>
              [5]
             </sup>
             ，大致原因是在 React 中事件是“合成事件”，在React 17 版本之前，所有用户事件都需要冒泡到 document 上，由 React 做统一分发与处理，如果冒泡的过程中碰到 shadowRoot 节点，就会将事件拦截在 shadowRoot 范围内，此时
             <code>
              event.target
             </code>
             强制指向 shadowRoot，导致在 react 中事件无响应。React 17 之后事件监听位置由 document 改为了挂载 App 组件的 root 节点，就不存在此问题了。
            </p>
           </li>
          </ul>
          <img alt="a127c7f11792b3c09c08272fd74035f7.png" src="https://i-blog.csdnimg.cn/blog_migrate/9ed04f0a333a5a718a2c47a1335a6739.png">
           <ul>
            <li>
             <p>
              <strong>
               弹框样式丢失。
              </strong>
              原因是主流UI框架比如 antd 为了避免上层元素的样式影响，通常会把弹框相关的 DOM 通过
              <code>
               document.body.appendChild
              </code>
              插入到顶层 body 的下边。此时子应用中 antd 的样式规则，由于开启了 shadowDom ，只对其下层的元素产生影响，自然就对全局 body 下的弹框不起作用了，造成了样式丢失的问题。
             </p>
            </li>
           </ul>
           <img alt="de3aa79da857fc1ce5cf25ddb4eb7a35.png" src="https://i-blog.csdnimg.cn/blog_migrate/25f3d1714923a817c4fedec20a299e43.png">
            <p>
             解决方案：调整 antd 入参，让其在当前位置渲染。
            </p>
            <img alt="8c8c911282472d0120665cc4b77ad938.png" src="https://i-blog.csdnimg.cn/blog_migrate/78b079149b8b872ec03ae22b31ec2ee0.png"/>
            <ol>
             <li>
              <p>
               <strong>
                实验模式。
               </strong>
              </p>
             </li>
            </ol>
            <p>
             可通过
             <code>
              experimentalStyleIsolation：true
             </code>
             开启。原理类似于 vue 的 scope-css，给子应用的所有样式规则增加一个特殊的属性选择器，限定其影响范围，达到样式隔离的目的。但由于需要在运行时替换子应用中所有的样式规则，所以目前性能较差，处于实验阶段。
            </p>
            <img alt="971254a2ac5ac03927f98cca1256223b.png" src="https://i-blog.csdnimg.cn/blog_migrate/5286320adf7c0cc062da4a5f890ca196.png"/>
            <h6>
             2.1.1.3. JS 沙箱
            </h6>
            <p>
             确保子应用之间的“全局变量”不会产生冲突。
            </p>
            <ol>
             <li>
              <p>
               <strong>
                快照沙箱（
               </strong>
               **snapshotSandbox**
               <sup>
                [6]
               </sup>
               <strong>
                ）
               </strong>
              </p>
             </li>
            </ol>
            <img alt="d3e1e9888a8e32ca88373caf91205f56.png" src="https://i-blog.csdnimg.cn/blog_migrate/e7ca4fdec4af48ff6fc38adff0a6bdf8.png"/>
            <ul>
             <li>
              <p>
               激活子应用时，对着当前
               <code>
                window
               </code>
               对象照一张相（所有属性 copy 到一个新对象
               <code>
                windowSnapshot
               </code>
               中保存起来）。
              </p>
             </li>
             <li>
              <p>
               离开子应用时，再对着
               <code>
                window
               </code>
               照一张相，对比离开时的
               <code>
                window
               </code>
               与激活时的 window （也就是
               <code>
                windowSnapshot
               </code>
               ）之间的差异。
              </p>
              <ul>
               <li>
                <p>
                 记录变更。Diff 出在这期间更改了哪些属性，记录在
                 <code>
                  modifyPropsMap
                 </code>
                 对象中。
                </p>
               </li>
               <li>
                <p>
                 恢复环境。依靠
                 <code>
                  windowSnapshot
                 </code>
                 恢复之前的
                 <code>
                  window
                 </code>
                 环境。
                </p>
               </li>
              </ul>
             </li>
             <li>
              <p>
               下次激活子应用时，从
               <code>
                modifyPropsMap
               </code>
               对象中恢复上一次的变更。
              </p>
             </li>
            </ul>
            <ol>
             <li>
              <p>
               <strong>
                单例的代理沙箱 （
               </strong>
               **LegacySanbox**
               <sup>
                [7]
               </sup>
               <strong>
                ）
               </strong>
              </p>
             </li>
            </ol>
            <p>
             与快照沙箱思路很相似，但它不用通过 Diff 前后 window 的方式去记录变更，而是通过 ES6的 Proxy 代理 window 属性的 set 操作来记录变更。由于不用反复遍历 window，所以性能要比快照沙箱好。
            </p>
            <ol>
             <li>
              <p>
               <strong>
                支持多例的代理沙箱（
               </strong>
               **ProxySandbox**
               <sup>
                [8]
               </sup>
               <strong>
                ）
               </strong>
              </p>
             </li>
            </ol>
            <p>
             以上两种沙箱机制，都只支持单例模式（同一页面只支持渲染单个子应用）。
            </p>
            <p>
             原因是：它们都直接操作的是全局唯一的 window。此时机智的你肯定想到了，假如为每个子应用都分配一个独立的“虚拟window”，当子应用操作 window 时，其实是在各自的“虚拟 window”上操作，不就可以实现多实例共存了？事实上，qiankun 确实也是这样做的。
            </p>
            <img alt="851959e6fbd10c6ffb61429eef25b985.png" src="https://i-blog.csdnimg.cn/blog_migrate/1991371383bfcb010cef892e3bff5676.png"/>
            <p>
             既然是“代理”沙箱，那“代理”在这的作用是什么呢？
            </p>
            <p>
             主要是为了实现对全局对象属性 get、set 的两级查找，优先使用fakeWindow，特殊情况(set命中白名单或者get到原生属性)才会改变全局真实window。
            </p>
            <p>
             如此，qiankun 就对子应用中全局变量的 get 、 set 都实现了管控与隔离。
            </p>
            <h5>
             2.1.2. 优势：
            </h5>
            <h6>
             2.1.2.1. 具有先发优势
            </h6>
            <p>
             2019年开源，是国内最早流行起来的微前端框架，在蚂蚁内外都有丰富的应用，后期维护性是可预测的。
            </p>
            <h6>
             2.1.2.2. 开箱即用
            </h6>
            <p>
             虽然是基于国外的 single-spa
             <sup>
              [9]
             </sup>
             二次封装，但提供了更加开箱即用的 API，比如支持直接以 HTML 地址作为加载子应用的入口。
            </p>
            <h6>
             2.1.2.3. 对 umi 用户更加友好
            </h6>
            <p>
             有现成的插件 @umijs/plugin-qiankun
             <sup>
              [10]
             </sup>
             帮助降低子应用接入成本。
            </p>
            <h5>
             2.1.3. 劣势：
            </h5>
            <h6>
             2.1.3.1. vite 支持性差
            </h6>
            <p>
             由上可知，代理沙箱实现的关键是需要将子应用的 window “替换”为 fakeWindow，在这一步 qiankun 是通过函数 window 同名参数 + with 作用域绑定的方式，更改子应用 window 指向为 fakeWindow，最终使用 eval(...) 解析运行子应用的代码。
            </p>
            <pre class="has"><code class="language-go">const jsCode = `
(function(window, self, globalThis){
    with(this){
      // your code
      window.a = 1;
      b = 2
      ...
 }
}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);
` 
eval(jsCode)</code></pre>
            <p>
             问题就出在这个 eval 上， vite 的构建产物如果不做特殊降级，默认打包出的就是 ESModule 语法的代码，使用 eval 解析运行会报下图这个错误。
            </p>
            <img alt="c0104672af09006a684eaf86b17b4b61.png" src="https://i-blog.csdnimg.cn/blog_migrate/a9744bfc2eb43a6d0574a3a2df8faedd.png"/>
            <p>
             报错的大意是， import 语法的代码必须放在
             <code>
              &lt;script type="module"&gt; ... &lt;/script&gt;
             </code>
             中执行。
            </p>
            <img alt="a0e74e6aba6c34e5b9d2800ac97af1d0.png" src="https://i-blog.csdnimg.cn/blog_migrate/40120c87052e367fcc87a0a4799e7306.png"/>
            <p>
             官方目前推荐的解决方法是关闭沙箱... 但其实还有另一种比较取巧的方案：vite 生态里有一款专门兼容此问题的vite-plugin-qiankun
             <sup>
              [11]
             </sup>
             插件，它的原理是：eval 虽然没办法执行静态 import 语法，但它可以执行动态 import(...) 语法。
            </p>
            <img alt="60a073ef45b60c0e6834e81dd48f5b93.png" src="https://i-blog.csdnimg.cn/blog_migrate/b93c9c9f8bd539db9faa818816ea4e84.png"/>
            <p>
             所以这款插件的解决方案就是替换子应用代码中的静态 import 为动态 import()，以绕过上述限制。
            </p>
            <h6>
             2.1.3.2. 子应用接入成本较高，详细步骤参考子应用接入文档
             <sup>
              [12]
             </sup>
            </h6>
            <img alt="b44185596c3c401093bb4eab67322abf.png" src="https://i-blog.csdnimg.cn/blog_migrate/553328610841ba2fbcb9c7df15ed75b1.png"/>
            <p>
             umi 用户可忽略这点，尤其是 @umi/max
             <sup>
              [13]
             </sup>
             用户，相比 webpack 接入成本要低很多。
            </p>
            <h6>
             2.1.3.3. JS 沙箱存在性能问题，且并不完善。
            </h6>
            <img alt="cbc8da6c3f09dfe17164e96ae587a755.png" src="https://i-blog.csdnimg.cn/blog_migrate/92e0b72300f424e56e68ec6b3c29b015.png"/>
            <p>
             大致原因是 with + proxy 带来的性能损耗，详见 JS沙箱的困境
             <sup>
              [14]
             </sup>
             。当然 qiankun 官方也在针对性的进行优化，进展在这篇《改了 3 个字符，10倍的沙箱性能提升？！！
             <sup>
              [15]
             </sup>
             》文章中可见一斑 。
            </p>
            <h4>
             2.2. 改良派 wujie
            </h4>
            <img alt="9681e19c2c9def7ee3ecf985c5a9a19b.png" src="https://i-blog.csdnimg.cn/blog_migrate/b8266c66740a40ccd7744dffa55cd185.png"/>
            <h5>
             2.2.1. 原理：
            </h5>
            <p>
             wujie
             <sup>
              [16]
             </sup>
             是腾讯出品的一款微前端框架。作为改良派的代表，它认为：
             <strong>
              iframe 虽然问题很多，但仅把它作为一个 js 沙箱去用，表现还是很稳定的
             </strong>
             ，毕竟是浏览器原生实现的，比自己实现 js 沙箱靠谱多了。至于 iframe 的弊端，可以针对性的去优化：
            </p>
            <ul>
             <li>
              <p>
               <strong>
                DOM 渲染无法突破 iframe 边界？
               </strong>
               (弹框不居中问题)
              </p>
             </li>
            </ul>
            <p>
             那
             <code>
              DOM
             </code>
             就不放
             <code>
              iframe
             </code>
             里渲染了，而是单独提取到一个
             <code>
              webComponent
             </code>
             里渲染，顺便用
             <code>
              shadowDOM
             </code>
             解决样式隔离的问题。
            </p>
            <p>
             简单说，无界的方案就是：
             <strong>
              JS 放 iframe 里运行，DOM 放 webComponent 渲染
             </strong>
             。
            </p>
            <p>
             那么问题来了：用 JS 操作 DOM 时，两者如何联系起来呢？毕竟 JS 默认操作的总是全局的 DOM。无界在此处用了一种比较 hack 的方式：代理子应用中所有的 DOM 操作，比如将
             <code>
              document
             </code>
             下的
             <code>
              getElementById、querySelector、querySelectorAll、head、body
             </code>
             等查询类 api 全部代理到
             <code>
              webComponent
             </code>
             。
            </p>
            <img alt="6018767abb9cc38796336614baa37ae2.png" src="https://i-blog.csdnimg.cn/blog_migrate/edfe4bb01791129ed4324f3b445f4a25.png"/>
            <p>
             下图是子应用真实运行时的例子：
            </p>
            <img alt="9813ca54d797b03e6857324d46b7166d.png" src="https://i-blog.csdnimg.cn/blog_migrate/cd5f494ff1bfe01c2489c872c7bc6d7f.png"/>
            <p>
             至于多实例模式，就更容易理解了。给每个子应用都分配一套
             <code>
              iframe
             </code>
             +
             <code>
              webComponent
             </code>
             的组合，就可以实现相互之间的隔离了！
            </p>
            <img alt="144daf4fee78417a7d6e3ac9c3a7c00f.png" src="https://i-blog.csdnimg.cn/blog_migrate/ebc656e82b45b3ca007fb37dfbab79dd.png"/>
            <ul>
             <li>
              <p>
               <strong>
                刷新页面会导致子应用路由状态丢失？
               </strong>
              </p>
             </li>
            </ul>
            <p>
             通过重写
             <code>
              iframe
             </code>
             实例的
             <code>
              history.pushState
             </code>
             和
             <code>
              history.replaceState
             </code>
             ，将子应用的
             <code>
              path
             </code>
             记录到主应用地址栏的
             <code>
              query
             </code>
             参数上，当刷新浏览器初始化
             <code>
              iframe
             </code>
             时，从地址栏读到子应用的
             <code>
              path
             </code>
             并使用
             <code>
              iframe
             </code>
             的
             <code>
              history.replaceState
             </code>
             进行同步。
            </p>
            <img alt="22793e40bbe5c11cc544149b262d347e.png" src="https://i-blog.csdnimg.cn/blog_migrate/840822121a8272265d3ad79b2d69c3a2.png"/>
            <p>
             简单理解就是：将子应用路径记录在地址栏参数中。
            </p>
            <h5>
             2.2.2. 优势：
            </h5>
            <h6>
             2.2.2.1. 相比 qiankun 接入成本更低。
            </h6>
            <ul>
             <li>
              <p>
               父应用：
              </p>
              <ul>
               <li>
                <p>
                 与 iframe 的接入方式很类似，只需引入一个 React 组件渲染子应用即可。
                 <img alt="d05e472537130691501ee5a522dcd58b.png" src="https://i-blog.csdnimg.cn/blog_migrate/b5cc0d9a79ae3652bdc5b4efea648a41.png"/>
                </p>
               </li>
              </ul>
             </li>
             <li>
              <p>
               子应用理论上不需要做任何改造
              </p>
             </li>
            </ul>
            <h6>
             2.2.2.2. vite 兼容性好
            </h6>
            <p>
             直接将完整的 ESM 标签块
             <code>
              &lt;script type="module" src="xxx.js"&gt;&lt;/script&gt;
             </code>
             插入 iframe 中，避免了 qiankun 使用 eval 执行 ESM 代码导致的报错问题。
            </p>
            <h6>
             2.2.2.3. iframe 沙箱隔离性好
            </h6>
            <h5>
             2.2.3. 劣势：
            </h5>
            <h6>
             2.2.3.1. 坑比较多
            </h6>
            <ul>
             <li>
              <p>
               <strong>
                明坑：
               </strong>
               用于 JS 沙箱的 iframe 的 src 必须指向一个同域地址导致的问题。
              </p>
              <p>
               具体问题描述见下图：
              </p>
             </li>
            </ul>
            <img alt="85c77f091e04a212d87075440b9136d6.png" src="https://i-blog.csdnimg.cn/blog_migrate/bd03ded5bd67a360091b6adfe842c463.png"/>
            <pre class="has"><code class="language-go">此 [issue]() 至今无法在框架层面得到解决，属于 iframe 的原生限制。</code></pre>
            <p>
             手动的解决方案：
            </p>
            <ul>
             <li>
              <p>
               主应用提供一个路径比如说 https://host/empty
               <sup>
                [17]
               </sup>
               ，这个路径不需要返回任何内容，子应用设置 attr
               <sup>
                [18]
               </sup>
               为 {src:'https://host/empty'}，这样
               <sup>
                [19]
               </sup>
               iframe 的 src 就是 https://host/empty。
               <sup>
                [20]
               </sup>
              </p>
             </li>
             <li>
              <p>
               在主应用 template 的 head 插入
               <code>
                &lt;script&gt;if(window.parent !== window) {window.stop()}&lt;/script&gt;
               </code>
               这样的代码可以避免主应用代码污染。
              </p>
             </li>
             <li>
              <p>
               <strong>
                暗坑：
               </strong>
               复杂的 iframe 到 webComponent 的代理机制，导致市面上大部分富文本编辑器都无法在无界中完好运行。所以有富文本的项目，尽量别用无界，除非你对富文本库的源码了如指掌。issues
               <sup>
                [21]
               </sup>
               在这里。
              </p>
             </li>
            </ul>
            <img alt="b91c0b5b0325a65acac0790e6b07e99c.png" src="https://i-blog.csdnimg.cn/blog_migrate/891d69f56322ef3c5b55e4f788dc58af.png"/>
            <h6>
             2.2.3.2. 长期维护性一般。
            </h6>
            <img alt="67275734c604af9610858a38803e0d12.png" src="https://i-blog.csdnimg.cn/blog_migrate/af734884c7f0b4eb106b46b9251f1477.png"/>
            <h6>
             2.2.3.3. 内存开销较大
            </h6>
            <p>
             用于 js 沙箱的 iframe 是隐藏在主应用的 body 下面的，相当于是常驻内存，这可能会带来额外的内存开销。
            </p>
            <h4>
             2.3. 中间派 micro-app
            </h4>
            <h5>
             2.3.1. 原理：
            </h5>
            <p>
             京东的大前端团队出品。
            </p>
            <p>
             <strong>
              样式隔离方案与 qiankun 的实验方案类似
             </strong>
             ，也是在运行时给子应用中所有的样式规则增加一个特殊标识来限定 css 作用范围。
            </p>
            <p>
             <strong>
              子应用路由同步方案与 wujie 类似
             </strong>
             ，也是通过劫持路由跳转方法，同步记录到 url 的 query 中，刷新时读取并恢复。
            </p>
            <p>
             <strong>
              组件化的使用方式与 wujie 方案类似
             </strong>
             ，这也是 micro-app 主打的宣传点。
            </p>
            <p>
             最有意思的是它的沙箱方案，居然内置了两种沙箱：
            </p>
            <img alt="85fa2a771c4933f175c04fc5e35bb8f8.png" src="https://i-blog.csdnimg.cn/blog_migrate/bf88376ea8ad0ad4da1de42ca7e4f0f4.png"/>
            <ol>
             <li>
              <p>
               <strong>
                类 qiankun 的 with 代理沙箱
               </strong>
               ，据说相比 qiankun 性能高点，但目前微前端框架界并没有一个权威的基准性能测试依据，所以并无有效依据支撑。
              </p>
             </li>
             <li>
              <p>
               <strong>
                类 wujie 的 iframe 沙箱
               </strong>
               ，用于兼容 vite 场景。
              </p>
             </li>
            </ol>
            <p>
             开发者可以根据自身的实际情况自由选择。
            </p>
            <p>
             整体感觉 micro-app 是一种偏“现实主义”的框架，它的特点就是
             <strong>
              取各家所长
             </strong>
             ，最终成为了功能最丰富的微前端框架。
            </p>
            <h5>
             2.3.2. 优势：
            </h5>
            <h6>
             2.3.2.1. 支持的功能最丰富。
            </h6>
            <h6>
             2.3.2.2. 接入成本低。
            </h6>
            <img alt="5418ed51277dfb4405d3ad2679e3564f.png" src="https://i-blog.csdnimg.cn/blog_migrate/a58f84dfe6e31b1b23fe49e0f7ce3bd1.png"/>
            <h6>
             2.3.2.3. 文档完善。
            </h6>
            <p>
             <code>
              https://micro-zoe.github.io/micro-app/docs.html#/ "https://micro-zoe.github.io/micro-app/docs.html#
             </code>
            </p>
            <h5>
             2.3.3. 劣势：
            </h5>
            <h6>
             2.3.3.1. 功能丰富导致配置项与 api 太多。
            </h6>
            <h6>
             2.3.3.2. 静态资源补全问题。
            </h6>
            <p>
             静态资源补全是基于父应用的，而非子应用这需要开发者自己手动解决。
            </p>
            <h3>
             03：选型建议
            </h3>
            <table>
             <thead>
              <tr>
               <th>
                统计时间2023.12.3
               </th>
               <th>
                npm周下载量
               </th>
               <th>
                star数
               </th>
               <th>
                issue数
               </th>
               <th>
                最近更新时间
               </th>
               <th>
                接入成本
               </th>
               <th>
                沙箱支持vite
               </th>
              </tr>
             </thead>
             <tbody>
              <tr>
               <td>
                qiankun
               </td>
               <td>
                22k
               </td>
               <td>
                15k
               </td>
               <td>
                362/1551
               </td>
               <td>
                12天前
               </td>
               <td>
                高
               </td>
               <td>
                ❌
               </td>
              </tr>
              <tr>
               <td>
                wujie
               </td>
               <td>
                1.3k
               </td>
               <td>
                3.4k
               </td>
               <td>
                280/271
               </td>
               <td>
                24天前
               </td>
               <td>
                低
               </td>
               <td>
                ✅
               </td>
              </tr>
              <tr>
               <td>
                micro-app
               </td>
               <td>
                1.1k
               </td>
               <td>
                4.9k
               </td>
               <td>
                57/748
               </td>
               <td>
                1个月前
               </td>
               <td>
                中
               </td>
               <td>
                ✅
               </td>
              </tr>
             </tbody>
            </table>
            <ol>
             <li>
              <p>
               刚性建议。
              </p>
             </li>
            </ol>
            <ul>
             <li>
              <p>
               vite 项目且对 js 沙箱有刚需，选 wujie 或者 micro-app。
              </p>
             </li>
             <li>
              <p>
               项目存在复杂的交互场景，比如有用到富文本编辑器库，选 wujie 前请做好充分的测试。
              </p>
             </li>
             <li>
              <p>
               如果你的团队对主、子应用的开发完全受控，即使有隔离性问题也可以通过治理来解决，那么可以试试更轻量的 single-SPA 方案。
              </p>
             </li>
             <li>
              <p>
               如果特别重视稳定性，那无疑是 iframe 最佳... 因为 iframe 存在的问题都是摆在明面的，市面上现有的微前端框架多多少少都有一些隐性问题。
              </p>
             </li>
            </ul>
            <ol>
             <li>
              <p>
               综合推荐。
              </p>
             </li>
            </ol>
            <p>
             主要从接入成本、功能稳定性、长期维护性三方面来衡量：
            </p>
            <img alt="41da2b68cd38a3723cd3808a31d1d08b.png" src="https://i-blog.csdnimg.cn/blog_migrate/547b06a9ea55b96e51aba3cefea781a2.png"/>
            <ul>
             <li>
              <p>
               接入成本：wujie &gt; microApp &gt; qiankun （由低到高）
              </p>
             </li>
             <li>
              <p>
               功能稳定性：qiankun &gt; microApp &gt; wujie
              </p>
             </li>
             <li>
              <p>
               长期维护性：qiankun &gt; microApp &gt; wujie
              </p>
             </li>
            </ul>
            <p>
             看你的团队最看重哪一点，针对性去选择就好了，没有十全十美微前端框架，只有适合自己的。
            </p>
            <h3>
            </h3>
            <p style="text-align:center;">
             Node 社群
            </p>
            <pre></pre>
            <p>
             我组建了一个氛围特别好的 Node.js 社群，里面有很多 Node.js小伙伴，如果你对Node.js学习感兴趣的话（后续有计划也可以），我们可以一起进行Node.js相关的交流、学习、共建。下方加 考拉 好友回复「Node」即可。
            </p>
            <p>
             <img alt="9a65105eebccd2bf57ef9f3d7179643c.png" src="https://i-blog.csdnimg.cn/blog_migrate/209ed4d6be7b7344cf5b59015c739d03.png"/>
            </p>
            <pre class="has"><code class="language-go">“分享、点赞、在看” 支持一下</code></pre>
           </img>
          </img>
         </img>
        </img>
       </img>
      </img>
     </img>
    </div>
   </div>
  </div>
 </article>
</div>



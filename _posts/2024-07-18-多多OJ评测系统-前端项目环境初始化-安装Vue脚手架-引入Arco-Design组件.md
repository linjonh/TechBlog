---
layout: post
title: 2024-07-18-多多OJ评测系统-前端项目环境初始化-安装Vue脚手架-引入Arco-Design组件
date: 2024-07-18 00:01:05 +0800
categories: [全栈项目实战多多OJ系统]
tags: [前端,前端框架,学习,开发语言,vue.js,java,arcodesign]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=140508640
  alt: 多多OJ评测系统-前端项目环境初始化-安装Vue脚手架-引入Arco-Design组件
artid: 140508640
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     多多OJ评测系统 前端项目环境初始化 安装Vue脚手架 引入Arco Design组件
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p id="main-toc">
     <strong>
      目录
     </strong>
    </p>
    <p id="%E7%A1%AE%E5%AE%9A%E7%8E%AF%E5%A2%83-toc" style="margin-left:0px;">
     <a href="#%E7%A1%AE%E5%AE%9A%E7%8E%AF%E5%A2%83" rel="nofollow">
      确定环境
     </a>
    </p>
    <p id="%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%BE%93%E5%85%A5-toc" style="margin-left:0px;">
     <a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%BE%93%E5%85%A5" rel="nofollow">
      命令行输入
     </a>
    </p>
    <p id="%E8%A3%85%E4%B8%80%E4%B8%8B%E8%84%9A%E6%89%8B%E6%9E%B6-toc" style="margin-left:0px;">
     <a href="#%E8%A3%85%E4%B8%80%E4%B8%8B%E8%84%9A%E6%89%8B%E6%9E%B6" rel="nofollow">
      装一下脚手架
     </a>
    </p>
    <p id="%E7%9B%91%E6%B5%8B%E4%B8%80%E4%B8%8B%E6%98%AF%E5%90%A6%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F-toc" style="margin-left:0px;">
     <a href="#%E7%9B%91%E6%B5%8B%E4%B8%80%E4%B8%8B%E6%98%AF%E5%90%A6%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F" rel="nofollow">
      监测一下是否安装成功
     </a>
    </p>
    <p id="%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE-toc" style="margin-left:0px;">
     <a href="#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE" rel="nofollow">
      创建一个项目
     </a>
    </p>
    <p id="%E9%80%89%E6%8B%A9%E4%B8%80%E7%B3%BB%E5%88%97%E7%9A%84%E9%85%8D%E7%BD%AE%E5%90%8E-toc" style="margin-left:0px;">
     <a href="#%E9%80%89%E6%8B%A9%E4%B8%80%E7%B3%BB%E5%88%97%E7%9A%84%E9%85%8D%E7%BD%AE%E5%90%8E" rel="nofollow">
      选择一系列的配置后
     </a>
    </p>
    <p id="%E6%88%91%E4%BB%AC%E6%89%93%E5%BC%80webStorm-toc" style="margin-left:0px;">
     <a href="#%E6%88%91%E4%BB%AC%E6%89%93%E5%BC%80webStorm" rel="nofollow">
      我们打开webStorm
     </a>
    </p>
    <p id="%E9%85%8D%E7%BD%AE%E8%84%9A%E6%89%8B%E6%9E%B6%E5%90%8E%E6%88%91%E4%BB%AC%E5%85%88%E8%BF%90%E8%A1%8C-toc" style="margin-left:0px;">
     <a href="#%E9%85%8D%E7%BD%AE%E8%84%9A%E6%89%8B%E6%9E%B6%E5%90%8E%E6%88%91%E4%BB%AC%E5%85%88%E8%BF%90%E8%A1%8C" rel="nofollow">
      配置脚手架后我们先运行
     </a>
    </p>
    <p id="%E6%88%91%E4%BB%AC%E8%BF%99%E8%BE%B9%E8%83%BD%E8%8E%B7%E5%8F%96%E5%88%B0%E7%BD%91%E5%9D%80-toc" style="margin-left:0px;">
     <a href="#%E6%88%91%E4%BB%AC%E8%BF%99%E8%BE%B9%E8%83%BD%E8%8E%B7%E5%8F%96%E5%88%B0%E7%BD%91%E5%9D%80" rel="nofollow">
      我们这边能获取到网址
     </a>
    </p>
    <p id="%E5%85%B6%E5%AE%9E%E6%88%91%E4%BB%AC%E8%84%9A%E6%89%8B%E6%9E%B6%E5%B7%B2%E7%BB%8F%E5%B8%AE%E6%88%91%E4%BB%AC%E5%81%9A%E5%88%B0%E4%BA%86-toc" style="margin-left:0px;">
     <a href="#%E5%85%B6%E5%AE%9E%E6%88%91%E4%BB%AC%E8%84%9A%E6%89%8B%E6%9E%B6%E5%B7%B2%E7%BB%8F%E5%B8%AE%E6%88%91%E4%BB%AC%E5%81%9A%E5%88%B0%E4%BA%86" rel="nofollow">
      其实我们脚手架已经帮我们做到了
     </a>
    </p>
    <p id="%E6%8E%A5%E4%B8%8B%E6%9D%A5%E8%A6%81%E5%BC%95%E5%85%A5%E7%9B%B8%E5%85%B3%E7%9A%84%E7%BB%84%E4%BB%B6-toc" style="margin-left:0px;">
     <a href="#%E6%8E%A5%E4%B8%8B%E6%9D%A5%E8%A6%81%E5%BC%95%E5%85%A5%E7%9B%B8%E5%85%B3%E7%9A%84%E7%BB%84%E4%BB%B6" rel="nofollow">
      接下来要引入相关的组件
     </a>
    </p>
    <p id="%E9%80%89%E6%8B%A9%E7%94%A8npm%E8%BF%9B%E8%A1%8C%E5%AE%89%E8%A3%85-toc" style="margin-left:0px;">
     <a href="#%E9%80%89%E6%8B%A9%E7%94%A8npm%E8%BF%9B%E8%A1%8C%E5%AE%89%E8%A3%85" rel="nofollow">
      选择用npm进行安装
     </a>
    </p>
    <p id="%E6%88%91%E4%BB%AC%E5%BB%BA%E8%AE%AE%E7%9A%84%E6%98%AF%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5-toc" style="margin-left:0px;">
     <a href="#%E6%88%91%E4%BB%AC%E5%BB%BA%E8%AE%AE%E7%9A%84%E6%98%AF%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5" rel="nofollow">
      我们建议的是完整引入
     </a>
    </p>
    <p id="%E6%94%B9%E5%8F%98main%20js-toc" style="margin-left:0px;">
     <a href="#%E6%94%B9%E5%8F%98main%20js" rel="nofollow">
      改变main js
     </a>
    </p>
    <p id="%E6%88%91%E4%BB%AC%E5%B0%9D%E8%AF%95%E5%BC%95%E5%85%A5%E6%97%A5%E5%8E%86-toc" style="margin-left:0px;">
     <a href="#%E6%88%91%E4%BB%AC%E5%B0%9D%E8%AF%95%E5%BC%95%E5%85%A5%E6%97%A5%E5%8E%86" rel="nofollow">
      我们尝试引入日历
     </a>
    </p>
    <p id="%E6%88%90%E5%8A%9F%E4%BA%86-toc" style="margin-left:0px;">
     <a href="#%E6%88%90%E5%8A%9F%E4%BA%86" rel="nofollow">
      成功了
     </a>
    </p>
    <p id="%E2%80%8B%E7%BC%96%E8%BE%91-toc" style="margin-left:0px;">
     <a href="#%E2%80%8B%E7%BC%96%E8%BE%91" rel="nofollow">
      ​编辑
     </a>
    </p>
    <hr id="hr-toc"/>
    <p>
    </p>
    <h2 id="%E7%A1%AE%E5%AE%9A%E7%8E%AF%E5%A2%83">
     确定环境
    </h2>
    <p>
     推荐的node js版本为为18 或者 16
    </p>
    <p>
     npm版本为9.5.1
    </p>
    <p>
     <img alt="" height="480" src="https://i-blog.csdnimg.cn/direct/e84d54b99c9b4da2b0f88e238dcd1c38.png" width="960"/>
    </p>
    <h2 id="%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%BE%93%E5%85%A5">
     命令行输入
    </h2>
    <pre><code>node -v
npm -v</code></pre>
    <p>
     初始化工具
    </p>
    <p>
     Vue - cli
    </p>
    <h2 id="%E8%A3%85%E4%B8%80%E4%B8%8B%E8%84%9A%E6%89%8B%E6%9E%B6">
     装一下脚手架
    </h2>
    <p>
     <img alt="" height="392" src="https://i-blog.csdnimg.cn/direct/2f595250f8324bae9d362e076906daf8.png" width="1106"/>
    </p>
    <pre><code>npm install -g @vue/cli</code></pre>
    <p>
     <img alt="" height="480" src="https://i-blog.csdnimg.cn/direct/3a11482b109a4ecdbc5016a98e0c3a0e.png" width="960"/>
    </p>
    <p>
     <img alt="" height="1017" src="https://i-blog.csdnimg.cn/direct/0a5caad44fc345d89b10880522dc6dc0.png" width="1200"/>
    </p>
    <h2 id="%E7%9B%91%E6%B5%8B%E4%B8%80%E4%B8%8B%E6%98%AF%E5%90%A6%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F">
     监测一下是否安装成功
    </h2>
    <p>
     版本为5.0.8
    </p>
    <p>
     <img alt="" height="1017" src="https://i-blog.csdnimg.cn/direct/29c8362b18154cdc9d32928c4c63ac4f.png" width="1200"/>
    </p>
    <p>
     如果找不到命令
    </p>
    <p>
     要去重新配置环境变量
    </p>
    <h2 id="%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE">
     创建一个项目
    </h2>
    <pre><code>vue create Dduooj</code></pre>
    <p>
     <img alt="" height="625" src="https://i-blog.csdnimg.cn/direct/3a4dd59c56e4414dae4f9008c91d6557.png" width="1200"/>
    </p>
    <h2 id="%E9%80%89%E6%8B%A9%E4%B8%80%E7%B3%BB%E5%88%97%E7%9A%84%E9%85%8D%E7%BD%AE%E5%90%8E">
     选择一系列的配置后
    </h2>
    <p>
     就会进行安装
    </p>
    <p>
     创建一个项目
    </p>
    <p>
     <img alt="" height="1017" src="https://i-blog.csdnimg.cn/direct/ad4b4440bc6e45639c5494ac9be60927.png" width="1200"/>
    </p>
    <h2 id="%E6%88%91%E4%BB%AC%E6%89%93%E5%BC%80webStorm">
     我们打开webStorm
    </h2>
    <p>
     <img alt="" height="1040" src="https://i-blog.csdnimg.cn/direct/c5057a76776349bc83db9b5fe4f6700b.png" width="1200"/>
    </p>
    <h2 id="%E9%85%8D%E7%BD%AE%E8%84%9A%E6%89%8B%E6%9E%B6%E5%90%8E%E6%88%91%E4%BB%AC%E5%85%88%E8%BF%90%E8%A1%8C">
     配置脚手架后我们先运行
    </h2>
    <p>
     先运行看看
    </p>
    <p>
     <img alt="" height="397" src="https://i-blog.csdnimg.cn/direct/902181e4007048e4b570f32cb259c04e.png" width="1002"/>
    </p>
    <h2 id="%E6%88%91%E4%BB%AC%E8%BF%99%E8%BE%B9%E8%83%BD%E8%8E%B7%E5%8F%96%E5%88%B0%E7%BD%91%E5%9D%80">
     我们这边能获取到网址
    </h2>
    <p>
     <img alt="" height="1040" src="https://i-blog.csdnimg.cn/direct/190d4d17be344137922adf63e49bac6b.png" width="1200"/>
    </p>
    <p>
     访问
    </p>
    <p>
     <img alt="" height="969" src="https://i-blog.csdnimg.cn/direct/78e6a9391bc44961a0d0941906c1641c.png" width="1200"/>
    </p>
    <p>
     代表的是项目运行成功
    </p>
    <p>
     我们在前端工程化的时候实际上
    </p>
    <p>
     我们有一些代码规范的校验
    </p>
    <h2 id="%E5%85%B6%E5%AE%9E%E6%88%91%E4%BB%AC%E8%84%9A%E6%89%8B%E6%9E%B6%E5%B7%B2%E7%BB%8F%E5%B8%AE%E6%88%91%E4%BB%AC%E5%81%9A%E5%88%B0%E4%BA%86">
     其实我们脚手架已经帮我们做到了
    </h2>
    <p>
     就是这个
    </p>
    <p>
     <img alt="" height="1040" src="https://i-blog.csdnimg.cn/direct/d9b27140ed384ff2b9df455521321666.png" width="1200"/>
    </p>
    <h2 id="%E6%8E%A5%E4%B8%8B%E6%9D%A5%E8%A6%81%E5%BC%95%E5%85%A5%E7%9B%B8%E5%85%B3%E7%9A%84%E7%BB%84%E4%BB%B6">
     接下来要引入相关的组件
    </h2>
    <p>
     <a href="https://arco.design/" rel="nofollow" title="Arco Design - 企业级产品的完整设计和开发解决方案">
      Arco Design - 企业级产品的完整设计和开发解决方案
     </a>
    </p>
    <p>
     选择vue的组件库
    </p>
    <p>
     查看文档
    </p>
    <p>
     <img alt="" height="969" src="https://i-blog.csdnimg.cn/direct/70b26ae501a84591a68a1e056c1e1068.png" width="1200"/>
    </p>
    <pre><code># npm
npm install --save-dev @arco-design/web-vue</code></pre>
    <h2 id="%E9%80%89%E6%8B%A9%E7%94%A8npm%E8%BF%9B%E8%A1%8C%E5%AE%89%E8%A3%85">
     选择用npm进行安装
    </h2>
    <p>
     <img alt="" height="1040" src="https://i-blog.csdnimg.cn/direct/1dd6209d80c24ea992d4fd8edef728b2.png" width="1200"/>
    </p>
    <p>
     安装成功
    </p>
    <p>
     <img alt="" height="99" src="https://i-blog.csdnimg.cn/direct/73ec6a5adc744e51b327171db8703875.png" width="1200"/>
    </p>
    <h2 id="%E6%88%91%E4%BB%AC%E5%BB%BA%E8%AE%AE%E7%9A%84%E6%98%AF%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5">
     我们建议的是完整引入
    </h2>
    <p>
     <img alt="" height="462" src="https://i-blog.csdnimg.cn/direct/30ee13e6d3554d93bc52104b11c739c6.png" width="1007"/>
    </p>
    <pre><code>import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');</code></pre>
    <p>
     加到main.ts文件里面
    </p>
    <h2 id="%E6%94%B9%E5%8F%98main%20js">
     改变main js
    </h2>
    <p>
     <img alt="" height="1040" src="https://i-blog.csdnimg.cn/direct/c07e57ccab7047e591070b1b280b8dc8.png" width="1200"/>
    </p>
    <pre><code>import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

createApp(App).use(ArcoVue).use(store).use(router).mount("#app");





</code></pre>
    <p>
     能正常启动
    </p>
    <p>
     <img alt="" height="1040" src="https://i-blog.csdnimg.cn/direct/7b1e8e21dfdf4f30afcf5eb9f00b4400.png" width="1200"/>
    </p>
    <p>
     我们首先试着引入一个组件试试看
    </p>
    <h2 id="%E6%88%91%E4%BB%AC%E5%B0%9D%E8%AF%95%E5%BC%95%E5%85%A5%E6%97%A5%E5%8E%86">
     我们尝试引入日历
    </h2>
    <p>
     就说明我们的项目引入成功
    </p>
    <p>
     <img alt="" height="449" src="https://i-blog.csdnimg.cn/direct/2993e4419a28421aa4ab66b22d6345f5.png" width="1164"/>
    </p>
    <h2 id="%E6%88%90%E5%8A%9F%E4%BA%86">
     成功了
    </h2>
    <h2 id="%E2%80%8B%E7%BC%96%E8%BE%91">
     <img alt="" height="1080" src="https://i-blog.csdnimg.cn/direct/e528d1497fb840b2bf29d1f43821f2d0.png" width="1200"/>
    </h2>
    <h2>
     个人号推广
    </h2>
    <h3>
     博客主页
    </h3>
    <p>
     <a href="https://gczdy.blog.csdn.net/" rel="nofollow" title="朱道阳-CSDN博客">
      朱道阳-CSDN博客
     </a>
    </p>
    <h3>
     Web后端开发
    </h3>
    <p>
     <a href="https://blog.csdn.net/qq_30500575/category_12624592.html?spm=1001.2014.3001.5482" title="https://blog.csdn.net/qq_30500575/category_12624592.html?spm=1001.2014.3001.5482">
      https://blog.csdn.net/qq_30500575/category_12624592.html?spm=1001.2014.3001.5482
     </a>
    </p>
    <h3>
     Web前端开发
    </h3>
    <p>
     <a href="https://blog.csdn.net/qq_30500575/category_12642989.html?spm=1001.2014.3001.5482" title="https://blog.csdn.net/qq_30500575/category_12642989.html?spm=1001.2014.3001.5482">
      https://blog.csdn.net/qq_30500575/category_12642989.html?spm=1001.2014.3001.5482
     </a>
    </p>
    <h3>
     数据库开发
    </h3>
    <p>
     <a href="https://blog.csdn.net/qq_30500575/category_12651993.html?spm=1001.2014.3001.5482" title="https://blog.csdn.net/qq_30500575/category_12651993.html?spm=1001.2014.3001.5482">
      https://blog.csdn.net/qq_30500575/category_12651993.html?spm=1001.2014.3001.5482
     </a>
    </p>
    <h3>
     项目实战
    </h3>
    <p>
     <a href="https://blog.csdn.net/qq_30500575/category_12699801.html?spm=1001.2014.3001.5482" title="https://blog.csdn.net/qq_30500575/category_12699801.html?spm=1001.2014.3001.5482">
      https://blog.csdn.net/qq_30500575/category_12699801.html?spm=1001.2014.3001.5482
     </a>
    </p>
    <h3>
     算法与数据结构
    </h3>
    <p>
     <a href="https://blog.csdn.net/qq_30500575/category_12630954.html?spm=1001.2014.3001.5482" title="https://blog.csdn.net/qq_30500575/category_12630954.html?spm=1001.2014.3001.5482">
      https://blog.csdn.net/qq_30500575/category_12630954.html?spm=1001.2014.3001.5482
     </a>
    </p>
    <h3>
     计算机基础
    </h3>
    <p>
     <a href="https://blog.csdn.net/qq_30500575/category_12701605.html?spm=1001.2014.3001.5482" title="https://blog.csdn.net/qq_30500575/category_12701605.html?spm=1001.2014.3001.5482">
      https://blog.csdn.net/qq_30500575/category_12701605.html?spm=1001.2014.3001.5482
     </a>
    </p>
    <h3>
     回忆录
    </h3>
    <p>
     <a href="https://blog.csdn.net/qq_30500575/category_12620276.html?spm=1001.2014.3001.5482" title="https://blog.csdn.net/qq_30500575/category_12620276.html?spm=1001.2014.3001.5482">
      https://blog.csdn.net/qq_30500575/category_12620276.html?spm=1001.2014.3001.5482
     </a>
    </p>
    <p>
    </p>
   </div>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f71715f33303530303537352f:61727469636c652f64657461696c732f313430353038363430</p>

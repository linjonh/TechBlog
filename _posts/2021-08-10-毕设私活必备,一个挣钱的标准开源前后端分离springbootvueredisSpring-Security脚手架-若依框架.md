---
layout: post
title: 毕设私活必备,一个挣钱的标准开源前后端分离springbootvueredisSpring-Security脚手架-若依框架
date: 2021-08-10 13:00:11 +0800
categories: [程序员日常唠嗑,SpringBoot技术知识]
tags: [私活必备,开源脚手架,vue,springboot,redis]
image:
    path: https://img-blog.csdnimg.cn/20210810113309413.png?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zOTcwOTEzNA&#61;&#61;,size_16,color_FFFFFF,t_70
    alt: 毕设私活必备,一个挣钱的标准开源前后端分离springbootvueredisSpring-Security脚手架-若依框架
artid: 119565680
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     毕设/私活/必备，一个挣钱的标准开源前后端分离【springboot+vue+redis+Spring Security】脚手架--若依框架
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
    </p>
    <blockquote>
     <h3 id="%E5%89%8D%E8%A8%80%EF%BC%9A" style="margin-left:.0001pt;text-align:justify;">
      前言：
     </h3>
     <p>
      今天和大家分享一个是一个
      <strong>
       开源
       <span style="color:#fe2c24;">
        接私活/毕设/兼职挣钱
       </span>
      </strong>
      的java前后端分离的开源项目，用了一小时左右把源码下载跑了一下、感觉还不错，中间运行前端代码的时候遇到一些小问题、根据错误提示也很快解决了、这是个什么项目呢，它是集SpringBoot+Spring Security+redis+shiro+vue于一体的标准项目框架、解放双手 ✋ 从现在开始。
     </p>
     <p>
      <strong>
       <span style="color:#fe2c24;">
        文末获取各种源码联系方式
       </span>
      </strong>
     </p>
    </blockquote>
    <p style="margin-left:.0001pt;text-align:justify;">
     <strong>
      <span style="background-color:#ffffff;">
       <span style="color:#333333;">
        <strong>
         我看了下整个项目不涉及任何具体业务场景，只配置了一些常用功能，如：权限管理，用户管理，菜单管理等，外加redis中间件，以及很多好用的工具类(RedisUtil，Id生成器，Security权限控制等等)，可以说是即拿即用，扩展性也非常强，下面就就进入主题具体介绍下这个前后端分离的开源项目吧。
        </strong>
       </span>
      </span>
     </strong>
    </p>
    <p style="margin-left:.0001pt;text-align:justify;">
     <span style="background-color:#ffffff;">
      <span style="color:#2c3e50;">
       <strong>
        官网是这样介绍的：若依开源框架是一个 Java EE 企业级快速开发平台，基于经典技术组合（Spring Boot、Spring Security、MyBatis、Jwt、Vue），内置模块如：部门管理、角色用户、菜单及按钮授权、数据权限、系统参数、日志管理、代码生成等。在线定时任务配置；支持集群，支持多数据源，支持分布式事务。
       </strong>
      </span>
     </span>
    </p>
    <blockquote>
     <h3 id="主要特性">
      主要特性功能：
     </h3>
    </blockquote>
    <ul>
     <li>
      完全响应式布局（支持电脑、平板、手机等所有主流设备）
     </li>
     <li>
      强大的一键生成功能（包括控制器、模型、视图、菜单等）
     </li>
     <li>
      支持多数据源，简单配置即可实现切换。
     </li>
     <li>
      支持按钮及数据权限，可自定义部门数据权限。
     </li>
     <li>
      对常用js插件进行二次封装，使js代码变得简洁，更加易维护
     </li>
     <li>
      完善的XSS防范及脚本过滤，彻底杜绝XSS攻击
     </li>
     <li>
      Maven多项目依赖，模块及插件分项目，尽量松耦合，方便模块升级、增减模块。
     </li>
     <li>
      国际化支持，服务端及客户端支持
     </li>
     <li>
      完善的日志记录体系简单注解即可实现
     </li>
     <li>
      支持服务监控，数据监控，缓存监控功能。
     </li>
    </ul>
    <blockquote>
     <h3 id="内置功能">
      内置功能模板：
     </h3>
    </blockquote>
    <ul>
     <li>
      用户管理：用户是系统操作者，该功能主要完成系统用户配置。
     </li>
     <li>
      部门管理：配置系统组织机构（公司、部门、小组），树结构展现支持数据权限。
     </li>
     <li>
      岗位管理：配置系统用户所属担任职务。
     </li>
     <li>
      菜单管理：配置系统菜单，操作权限，按钮权限标识等。
     </li>
     <li>
      角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
     </li>
     <li>
      字典管理：对系统中经常使用的一些较为固定的数据进行维护。
     </li>
     <li>
      参数管理：对系统动态配置常用参数。
     </li>
     <li>
      通知公告：系统通知公告信息发布维护。
     </li>
     <li>
      操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
     </li>
     <li>
      登录日志：系统登录日志记录查询包含登录异常。
     </li>
     <li>
      在线用户：当前系统中活跃用户状态监控。
     </li>
     <li>
      定时任务：在线（添加、修改、删除)任务调度包含执行结果日志。
     </li>
     <li>
      代码生成：前后端代码的生成（java、html、xml、sql)支持CRUD下载 。
     </li>
     <li>
      系统接口：根据业务代码自动生成相关的api接口文档。
     </li>
     <li>
      服务监控：监视当前系统CPU、内存、磁盘、堆栈等相关信息。
     </li>
     <li>
      缓存监控：对系统的缓存信息查询，命令统计等。
     </li>
     <li>
      在线构建器：拖动表单元素生成相应的HTML代码。
     </li>
     <li>
      连接池监视：监视当期系统数据库连接池状态，可进行分析SQL找出系统性能瓶颈。
     </li>
    </ul>
    <blockquote>
     <h3 id="运行系统">
      本地运行系统：
     </h3>
    </blockquote>
    <p>
     可以去
     <code>
      Gitee
     </code>
     下载项目、百度网页搜索若依框架就是了、很多同学应该都知道
    </p>
    <p>
     然后导入项目到idea或自己的开发工具里面、下载最基本的依赖环境、jar等
    </p>
    <blockquote>
     <h4 id="后端运行">
      后端运行:
     </h4>
    </blockquote>
    <p>
     1.创建数据库
     <code>
      ry-vue
     </code>
     并导入数据脚本
     <code>
      ry_2021xxxx.sql
     </code>
     ，
     <code>
      quartz.sql
     </code>
    </p>
    <p>
     3、打开项目运行
     <code>
      com.ruoyi.RuoYiApplication.java
     </code>
     ，出现如下图表示启动成功。
    </p>
    <p>
     <img alt="" height="982" src="https://i-blog.csdnimg.cn/blog_migrate/8003e958d10fa21eab03962ef10c3511.png" width="1200"/>
    </p>
    <p>
     这样后端就启动了
    </p>
    <blockquote>
     <h4 id="%E5%89%8D%E7%AB%AF%E8%BF%90%E8%A1%8C%EF%BC%9A">
      前端运行：
     </h4>
    </blockquote>
    <p>
     这个版本的前端也在这个里面、进入ruoyi-ui模块
    </p>
    <pre><code># 安装依赖
npm install

# 强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。
npm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
npm run dev</code></pre>
    <h3 id="%E5%BF%85%E8%A6%81%E9%85%8D%E7%BD%AE%EF%BC%9A">
     必要配置：
    </h3>
    <ul>
     <li>
      修改数据库连接，编辑
      <code>
       resources
      </code>
      目录下的
      <code>
       application-druid.yml
      </code>
     </li>
    </ul>
    <pre><code># 数据源配置
spring:
    datasource:
        type: com.alibaba.druid.pool.DruidDataSource
        driverClassName: com.mysql.cj.jdbc.Driver
        druid:
            # 主库数据源
            master:
                url: 数据库地址
                username: 数据库账号
                password: 数据库密码</code></pre>
    <ul>
     <li>
      修改服务器配置，
      <code>
       编辑resources目录下的application.yml
      </code>
     </li>
    </ul>
    <pre><code># 开发环境配置
server:
  # 服务器的HTTP端口，默认为80
  port: 端口
  servlet:
    # 应用的访问路径
    context-path: /应用路径</code></pre>
    <blockquote>
     <p>
      <span style="color:#fe2c24;">
       <strong>
        启动成功后输入地址localhost:80访问页面、大功告成、快乐就这么简单
       </strong>
      </span>
     </p>
    </blockquote>
    <blockquote>
     <h3 id="%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C%E6%88%AA%E5%9B%BE%EF%BC%9A">
      项目运行截图：
     </h3>
    </blockquote>
    <h4 id="%E7%99%BB%E5%BD%95%EF%BC%9A">
     登录：
    </h4>
    <p>
     <img alt="" height="1019" src="https://i-blog.csdnimg.cn/blog_migrate/f2849ebeafb1cfef50b8de5dd922a364.png" width="1200"/>
    </p>
    <p>
     这是进去后的一个主要功能模块、是一个完整权限管理系统、用来做兼职、私活接单等是一个不错的选择。
    </p>
    <h4 id="%E9%A6%96%E9%A1%B5%EF%BC%9A">
     首页：
    </h4>
    <p>
     <img alt="" height="1030" src="https://i-blog.csdnimg.cn/blog_migrate/619504f8f8a256bba727e87912ceee95.png" width="1200"/>
    </p>
    <h4 id="%C2%A0%E8%8F%9C%E5%8D%95%E6%A8%A1%E5%9D%97%EF%BC%9A">
     菜单模块：
    </h4>
    <p>
     <img alt="" height="899" src="https://i-blog.csdnimg.cn/blog_migrate/ea1c5f0c36a791a677f32343ae878068.png" width="1200"/>
    </p>
    <h4 id="%E7%94%A8%E6%88%B7%E7%BB%91%E5%AE%9A%E8%A7%92%E8%89%B2%E3%80%81%E8%A7%92%E8%89%B2%E6%8E%A7%E5%88%B6%E8%8F%9C%E5%8D%95%E6%9D%83%E9%99%90%E6%98%BE%E7%A4%BA">
     用户绑定角色、角色控制菜单权限显示
    </h4>
    <p>
     <img alt="" height="845" src="https://i-blog.csdnimg.cn/blog_migrate/7e6e140b0c40feca09867e8906dc53d1.png" width="1200"/>
    </p>
    <h4 id="%E9%83%A8%E9%97%A8%E6%A8%A1%E5%9D%97%EF%BC%9A">
     部门模块：
    </h4>
    <p>
     <img alt="" height="837" src="https://i-blog.csdnimg.cn/blog_migrate/c35924e9d625383c4147f9bd0e3a2ff5.png" width="1200"/>
    </p>
    <h4 id="%E9%80%9A%E7%9F%A5%E5%85%AC%E5%91%8A%EF%BC%9A">
     通知公告：
    </h4>
    <p>
     <img alt="" height="704" src="https://i-blog.csdnimg.cn/blog_migrate/229833963515313caf85ac8e8bf7af8b.png" width="1200"/>
    </p>
    <h4 id="%E6%97%A5%E5%BF%97%E7%AE%A1%E7%90%86%EF%BC%9A">
     日志管理：
    </h4>
    <p>
     <img alt="" height="926" src="https://i-blog.csdnimg.cn/blog_migrate/2e994e8fa68fe683f42910c86ebce905.png" width="1200"/>
    </p>
    <blockquote>
     <h3 id="必要配置">
      项目文件结构：
     </h3>
    </blockquote>
    <h4 id="后端结构">
     后端结构：
    </h4>
    <pre><code>com.ruoyi     
├── common            // 工具类
│       └── annotation                    // 自定义注解
│       └── config                        // 全局配置
│       └── constant                      // 通用常量
│       └── core                          // 核心控制
│       └── enums                         // 通用枚举
│       └── exception                     // 通用异常
│       └── filter                        // 过滤器处理
│       └── utils                         // 通用类处理
├── framework         // 框架核心
│       └── aspectj                       // 注解实现
│       └── config                        // 系统配置
│       └── datasource                    // 数据权限
│       └── interceptor                   // 拦截器
│       └── manager                       // 异步处理
│       └── security                      // 权限控制
│       └── web                           // 前端控制
├── ruoyi-generator   // 代码生成（可移除）
├── ruoyi-quartz      // 定时任务（可移除）
├── ruoyi-system      // 系统代码
├── ruoyi-admin       // 后台服务
├── ruoyi-xxxxxx      // 其他模块</code></pre>
    <h4 id="前端结构">
     前端结构：
    </h4>
    <pre><code>├── build                      // 构建相关  
├── bin                        // 执行脚本
├── public                     // 公共文件
│   ├── favicon.ico            // favicon图标
│   └── index.html             // html模板
│   └── robots.txt             // 反爬虫
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── layout                 // 布局
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── utils                  // 全局公用方法
│   ├── views                  // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   ├── permission.js          // 权限管理
│   └── settings.js            // 系统配置
├── .editorconfig              // 编码格式
├── .env.development           // 开发环境配置
├── .env.production            // 生产环境配置
├── .env.staging               // 测试环境配置
├── .eslintignore              // 忽略语法检查
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git 忽略项
├── babel.config.js            // babel.config.js
├── package.json               // package.json
└── vue.config.js              // vue.config.js</code></pre>
    <blockquote>
     <h3 id="核心技术">
      核心技术
     </h3>
    </blockquote>
    <blockquote>
     <h4 id="后端技术">
      后端技术
     </h4>
    </blockquote>
    <p>
     SpringBoot框架
    </p>
    <p>
     1、介绍
     <br/>
     <code>
      Spring Boot
     </code>
     是一款开箱即用框架，提供各种默认配置来简化项目配置。让我们的
     <code>
      Spring
     </code>
     应用变的更轻量化、更快的入门。 在主程序执行
     <code>
      main
     </code>
     函数就可以运行。你也可以打包你的应用为
     <code>
      jar
     </code>
     并通过使用
     <code>
      java -jar
     </code>
     来运行你的Web应用。它遵循"约定优先于配置"的原则， 使用
     <code>
      SpringBoot
     </code>
     只需很少的配置，大部分的时候直接使用默认的配置即可。同时可以与
     <code>
      Spring Cloud
     </code>
     的微服务无缝结合。
    </p>
    <p>
     提示
    </p>
    <p>
     <code>
      Spring Boot2.x
     </code>
     版本环境要求必须是
     <code>
      jdk8
     </code>
     或以上版本，服务器
     <code>
      Tomcat8
     </code>
     或以上版本
    </p>
    <p>
     2、优点
    </p>
    <ul>
     <li>
      使编码变得简单： 推荐使用注解。
     </li>
     <li>
      使配置变得简单： 自动配置、快速集成新技术能力 没有冗余代码生成和XML配置的要求
     </li>
     <li>
      使部署变得简单： 内嵌Tomcat、Jetty、Undertow等web容器，无需以war包形式部署
     </li>
     <li>
      使监控变得简单： 提供运行时的应用监控
     </li>
     <li>
      使集成变得简单： 对主流开发框架的无配置集成。
     </li>
     <li>
      使开发变得简单： 极大地提高了开发快速构建项目、部署效率。
     </li>
    </ul>
    <p>
     Spring Security安全控制
    </p>
    <p>
     1、介绍
     <br/>
     <code>
      Spring Security
     </code>
     是一个能够为基于
     <code>
      Spring
     </code>
     的企业应用系统提供声明式的安全访问控制解决方案的安全框架。
    </p>
    <p>
     2、功能
     <br/>
     <code>
      Authentication
     </code>
     认证，就是用户登录
     <br/>
     <code>
      Authorization
     </code>
     授权，判断用户拥有什么权限，可以访问什么资源
     <br/>
     安全防护，跨站脚本攻击，
     <code>
      session
     </code>
     攻击等
     <br/>
     非常容易结合
     <code>
      Spring
     </code>
     进行使用
    </p>
    <p>
     3、
     <code>
      Spring Security
     </code>
     与
     <code>
      Shiro
     </code>
     的区别
    </p>
    <blockquote>
     <p>
      相同点
     </p>
    </blockquote>
    <p>
     1、认证功能
     <br/>
     2、授权功能
     <br/>
     3、加密功能
     <br/>
     4、会话管理
     <br/>
     5、缓存支持
     <br/>
     6、rememberMe功能
     <br/>
     ....
    </p>
    <blockquote>
     <p>
      不同点
     </p>
    </blockquote>
    <p>
     优点：
    </p>
    <p>
     1、Spring Security基于Spring开发，项目如果使用Spring作为基础，配合Spring Security做权限更加方便。而Shiro需要和Spring进行整合开发
     <br/>
     2、Spring Security功能比Shiro更加丰富，例如安全防护方面
     <br/>
     3、Spring Security社区资源相对比Shiro更加丰富
    </p>
    <p>
     缺点：
    </p>
    <p>
     1）Shiro的配置和使用比较简单，Spring Security上手复杂些
     <br/>
     2）Shiro依赖性低，不需要依赖任何框架和容器，可以独立运行。Spring Security依赖Spring容器
    </p>
    <blockquote>
     <h4 id="前端技术">
      前端技术
     </h4>
    </blockquote>
    <ul>
     <li>
      npm：node.js的包管理工具，用于统一管理我们前端项目中需要用到的包、插件、工具、命令等，便于开发和维护。
     </li>
     <li>
      ES6：Javascript的新版本，ECMAScript6的简称。利用ES6我们可以简化我们的JS代码，同时利用其提供的强大功能来快速实现JS逻辑。
     </li>
     <li>
      vue-cli：Vue的脚手架工具，用于自动生成Vue项目的目录及文件。
     </li>
     <li>
      vue-router： Vue提供的前端路由工具，利用其我们实现页面的路由控制，局部刷新及按需加载，构建单页应用，实现前后端分离。
     </li>
     <li>
      vuex：Vue提供的状态管理工具，用于统一管理我们项目中各种数据的交互和重用，存储我们需要用到数据对象。
     </li>
     <li>
      element-ui：基于MVVM框架Vue开源出来的一套前端ui组件。
     </li>
    </ul>
    <blockquote>
     <p>
      <strong>
       今天推荐这个开源项目还是比较不错的、项目是快速开发脚手架，代码质量各方面的也还不错、适合用来做项目脚手架或自己私活接单以及练手来用、喜欢的朋友点一个一健三联支持下哟
      </strong>
     </p>
    </blockquote>
    <blockquote>
     <h3 id="%C2%A0%E7%B2%BE%E5%BD%A9java%E6%AF%95%E8%AE%BE%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE%E6%8E%A8%E9%80%81%EF%BC%9A">
      <span style="color:#a2e043;">
       <strong>
       </strong>
      </span>
      <span style="color:#be191c;">
       <strong>
        精彩java毕设实战项目推送：
       </strong>
      </span>
     </h3>
     <p>
      <a href="https://lyyong.blog.csdn.net/article/details/118024703" rel="nofollow" title="基于java ssm springboot+VUE疫情防疫系统系统前后端分离设计和实现">
       基于java ssm springboot+VUE疫情防疫系统系统前后端分离设计和实现
      </a>
     </p>
     <p>
      <a href="https://lyyong.blog.csdn.net/article/details/118673401" rel="nofollow" title="基于java+springboot+mybatis+laiyu实现学科竞赛管理系统设计和实现">
       基于java+springboot+mybatis+laiyu实现学科竞赛管理系统设计和实现
      </a>
     </p>
     <p>
      <a href="https://blog.csdn.net/weixin_39709134/article/details/117640297?spm=1001.2014.3001.5501" title="基于java springboot+mybatis电影售票网站管理系统前台+后台设计和实现">
       基于java springboot+mybatis电影售票网站管理系统前台+后台设计和实现
      </a>
     </p>
     <p>
      <a href="https://blog.csdn.net/weixin_39709134/article/details/117266374?spm=1001.2014.3001.5502" title="基于java ssm springboot+mybatis酒庄内部管理系统设计和实现">
       基于java ssm springboot+mybatis酒庄内部管理系统设计和实现
      </a>
     </p>
     <p>
      <a href="https://blog.csdn.net/weixin_39709134/article/details/116905650?spm=1001.2014.3001.5502" title="基于JAVA springboot+mybatis智慧生活分享平台设计和实现">
       基于JAVA springboot+mybatis智慧生活分享平台设计和实现
      </a>
     </p>
     <p>
      <a href="https://lyyong.blog.csdn.net/article/details/116805682" rel="nofollow" title="基于Java springboot+vue+redis前后端分离家具商城平台系统设计和实现">
       基于Java springboot+vue+redis前后端分离家具商城平台系统设计和实现
      </a>
     </p>
     <p>
      <a href="https://lyyong.blog.csdn.net/article/details/116676268" rel="nofollow" title="基于JAVA SSM springboot实现的抗疫物质信息管理系统设计和实现">
       基于JAVA SSM springboot实现的抗疫物质信息管理系统设计和实现
      </a>
     </p>
     <h3 id="%E6%9F%A5%E7%9C%8B%E6%9B%B4%E5%A4%9A%E5%8D%9A%E4%B8%BB%E9%A6%96%E9%A1%B5%E6%9B%B4%E5%A4%9A%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE%20%3E%3E%3E">
      <a href="https://blog.csdn.net/weixin_39709134/category_11128297.html" title="查看更多博主首页更多实战项目 &gt;&gt;&gt;">
       查看更多博主首页更多实战项目 &gt;&gt;&gt;
      </a>
     </h3>
    </blockquote>
    <blockquote>
     <h3 id="%E8%8E%B7%E5%8F%96%E6%BA%90%E7%A0%81%EF%BC%9A">
      获取源码：
     </h3>
     <p>
      <strong>
       总体来说这个项目功能相对还是比较简单优秀的、适合初学者作为课程设计和毕业设计参考
      </strong>
     </p>
     <p>
      <strong>
       查看
       <a href="https://lyyong.blog.csdn.net/" rel="nofollow" title="博主主页">
        博主主页
       </a>
       联系或下方
       <span style="color:#fe2c24;">
        微信公众号获取更多~！
       </span>
      </strong>
     </p>
     <h3 id="%E5%BE%80%E5%89%8D%E7%B2%BE%E5%BD%A9%E5%88%86%E4%BA%AB%EF%BC%9A">
      <a name="t7">
      </a>
      <a name="t13">
      </a>
      往前精彩分享：
     </h3>
     <p>
      <strong>
       <a href="https://blog.csdn.net/weixin_39709134/category_11128297.html" title="Java毕设项目精品实战案例《100套》">
        Java毕设项目精品实战案例《100套》
       </a>
      </strong>
     </p>
     <p>
      <strong>
       <strong>
        <a href="https://blog.csdn.net/weixin_39709134/category_11287267.html" title="HTML5大作业实战案例《100套》">
         HTML5大作业实战案例《100套》
        </a>
       </strong>
      </strong>
     </p>
    </blockquote>
    <p>
    </p>
   </div>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



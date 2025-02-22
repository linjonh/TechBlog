---
layout: post
title: ZStack-ZCCE-网络实验-云平台环境搭建及初始化虚拟嵌套环境
date: 2024-08-08 20:26:12 +0800
categories: [ZStack]
tags: [云计算,openstack,cloud]
image:
    path: https://img-blog.csdnimg.cn/b00a2bc93ff64dadb2391bf029316364.png?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NjMzODU1,size_16,color_FFFFFF,t_70#pic_center
    alt: ZStack-ZCCE-网络实验-云平台环境搭建及初始化虚拟嵌套环境
artid: 119240731
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     ZStack-ZCCE-网络实验-云平台环境搭建及初始化（虚拟嵌套环境）
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-tomorrow-night" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
    </p>
    <div class="toc">
     <h4>
      ZStack-ZCCE-网络实验-Zstack云平台搭建
     </h4>
     <ul>
      <li>
       <ul>
        <li>
         <a href="#_1" rel="nofollow">
          实验概述
         </a>
        </li>
        <li>
         <a href="#_3" rel="nofollow">
          实验目的
         </a>
        </li>
        <li>
         <a href="#_12" rel="nofollow">
          实验准备
         </a>
        </li>
        <li>
         <a href="#_20" rel="nofollow">
          操作步骤
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h3>
     <a id="_1">
     </a>
     实验概述
    </h3>
    <p>
     本案例实验环境主要是基于已有的外层ZStack云平台，去完成Zstack云平台上的嵌套虚拟实验环境的搭建。
    </p>
    <h3>
     <a id="_3">
     </a>
     实验目的
    </h3>
    <p>
     1.ZStack环境搭建
    </p>
    <p>
     2.创建区域、集群、
    </p>
    <p>
     3.添加计算节点、主存储、
    </p>
    <p>
     4.创建二层网络、三层网络
    </p>
    <h3>
     <a id="_12">
     </a>
     实验准备
    </h3>
    <p>
     1.一台Windows系统的PC
    </p>
    <p>
     2.底层Zstack云平台环境对外开放的公网IP地址以及管理端口参数
    </p>
    <p>
     3.拥有底层Zstack云平台环境的本地登录账号
    </p>
    <p>
     4.Zstack云平台管理员提前规划的业务VLAN-ID和公有网段的具体参数
    </p>
    <h3>
     <a id="_20">
     </a>
     操作步骤
    </h3>
    <p>
     <strong>
      1.登录底层Zstack云平台环境
     </strong>
    </p>
    <p>
     说明：使用Windows系统的PC打开谷歌/火狐浏览器访问http://授课老师给出的Zstack环境对外的公网地址:管理端口，默认是5000,点击项目登陆,输入自己用户名和密码进入环境。
    </p>
    <p>
     <mark>
      注意：登陆完成后，请在右上方点击【修改密码】，及时修改登陆密码
     </mark>
    </p>
    <p>
     登录界面如下（以之前创建的008账号为例进行演示）：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/34e0a14b44656e3b76a241182c96f803.png#pic_center">
      <br/>
      点击进入项目：
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/fe8203b1828ca7cb0bf64c9f7d60ec9f.png#pic_center">
       <br/>
       登陆云平台后的首页：
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/49fe664970fe391a3cb3a6436411e94b.png#pic_center">
        <br/>
        <strong>
         2.创建两个云主机（作为嵌套虚拟化环境的物理机使用）
        </strong>
       </img>
      </img>
     </img>
    </p>
    <p>
     说明：云主机规格管理节点选择8C20G，计算节点选择8C20G，镜像选择ZStack 4.1.3ISO,系统盘大小统一为100G，三层网络选择公有网络，具体操作流程如下：
    </p>
    <p>
     1.进入云资源池准备创建云主机
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/99d046e6e9cdcbd443fe418d38c68992.png#pic_center">
      <br/>
      2.进入到云主机管理界面点击创建云主机
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/69d97c256176a554c4eacc0ca9fa9baf.png#pic_center">
       <br/>
       3.选择云主机计算规格
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/077385e64200a0939b96efdbca88864a.png#pic_center">
        <br/>
        4.选择云主机OS镜像
        <br/>
        <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/1515087d3f1235d65cf305d77bd3f294.png#pic_center">
         <br/>
         5.选择根云盘的规格
         <br/>
         <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ec55d81628987e29ea3b85a4ffc88d66.png#pic_center">
          <br/>
          6.进行资源配置，选择网络
          <br/>
          <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5cca8aa1c0433a499265730bb5321516.png#pic_center"/>
          <br/>
          <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/12cfee2c82db69851c397fef31badcd6.png#pic_center"/>
         </img>
        </img>
       </img>
      </img>
     </img>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e4d718e5ca41103d6608f0dabb583a38.png#pic_center"/>
     <br/>
     7.确认信息并开始创建
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b00ed3f3ebd8bef354d7f6c6a8da3779.png#pic_center"/>
     <br/>
     8.创建完成
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5985779968679f4d31cb161ffb7f847c.png#pic_center"/>
     <br/>
     两台云主机的信息（基于不同的环境执行时具体参数会有所不同）：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/458fbf71862d12caa64888f79470ad9d.png#pic_center"/>
     <br/>
     具体参数的查看方式：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/7f5b1237c9e5fad9368c77ad55e834e4.png#pic_center"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f1e88e6a495d40344a3b943f44f1389b.png#pic_center"/>
     <br/>
     <mark>
      注：ZCCE-VM-2信息查看步骤同上
     </mark>
    </p>
    <p>
     <strong>
      3.业务云主机OS安装
     </strong>
    </p>
    <p>
     说明：两个云主机一个安装管理节点模式，一个安装计算节点模式， 管理节点和计算节点系统安装：
    </p>
    <p>
     <strong>
      3.1管理节点OS安装：
     </strong>
    </p>
    <p>
     1.进入控制台
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/27e78ac705d02292faadaf8048fad682.png#pic_center"/>
     <br/>
     2.选择安装模式
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/203dab04efa6cf94ee5344c532f88045.png#pic_center"/>
     <br/>
     3.选择企业管理节点模式的安装
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/1b378acebad53d631749af3c5891a583.png#pic_center"/>
     <br/>
     4.选择安装位置
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/4e58b717b925bb6356badb68e6585f72.png#pic_center"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/441f53f1304b3df2418586ca9c9b4eaa.png#pic_center"/>
     <br/>
     5.设置ROOT密码
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f1a703d042280141c1edb67d9d2888fd.png#pic_center"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b07e479186d4de57b4514899e7727f22.png#pic_center"/>
     <br/>
     6.管理节点OS安装完成以后开始一些功能插件的初始化
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5811181e54245207dc63b77764997740.png#pic_center"/>
     <br/>
     7.之后需要等待其初始化完成并登陆即可
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/0cefb70eacc82d7384ace75ced2d904d.png#pic_center"/>
     <br/>
     <strong>
      3.2计算节点OS的安装
     </strong>
    </p>
    <p>
     1.安装模式选择
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b25d7f5e9d6e9b3ea19a613fee52bca0.png#pic_center"/>
     <br/>
     <mark>
      注：其余操作步骤同管理节点
     </mark>
    </p>
    <p>
     2.等计算节点OS安装完成以后便可以登陆
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/01d07d5d2aab1363b8d684f20a2e5193.png#pic_center"/>
     <br/>
     <strong>
      4.跳板机创建
     </strong>
    </p>
    <p>
     说明：为了可以远程登录到自己的实验环境，需要额创建一个Windows云主机当做跳板机，具体创建步骤同ZCCE-VM业务云主机（不过OS镜像需选择windows模板）
    </p>
    <p>
     1.选择镜像具体操作流程如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/72c0326697113d2c3f1a7a8c7a773f98.png#pic_center"/>
     <br/>
     2.创建完成后：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/041b59b439390dcfa8341c8e354694ca.png#pic_center"/>
     <br/>
     3.之后登录跳板机的控制台：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8a929c25d1419a502261f7c089762d29.png#pic_center"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/4c2840df7975b54e58a359f2ef4ef262.png#pic_center"/>
     <br/>
     4.进入跳板机后：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/1e030f62346ec39ef45430ed828f0417.png#pic_center"/>
     <br/>
     5.为了后续方便操作，可以先调整一下跳板机的分辨率：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/bef06b3148b880819a8509f3b9703864.png#pic_center"/>
     <br/>
     6.之后可以点击左边工具栏的全屏显示即可：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/56c280a5e71f66a68321d03d1760dbdc.png#pic_center"/>
     <br/>
     <strong>
      5.跳板机登录内部虚拟环境并进行初始化
     </strong>
    </p>
    <p>
     说明：使用跳板机的浏览器访问管理节点IP:5000端口进入内部新创建的Zstack云平台。具体操作流程如下：
    </p>
    <p>
     1.环境登录
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a1768f8a0da620e9efb689e46c64c362.png#pic_center"/>
     <br/>
     2.开始初始化：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c0ece7f426d322eab086da97f5c4f11b.png#pic_center"/>
     <br/>
     3.创建区域
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d2aa1a721f43972310ea08304f96500c.png#pic_center"/>
     <br/>
     4.创建集群
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9a8b8139419f5755580f75022ed63e36.png#pic_center"/>
     <br/>
     5.添加物理机
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/89a4c295f840bd853153754ef5b026f8.png#pic_center"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8929502c769626b4aeea91c407e0d5fd.png#pic_center"/>
     <br/>
     6.添加镜像服务器
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8c4dbeb1abd258292f814ccd4c7e0c96.png#pic_center"/>
     <br/>
     7.添加主存储
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/16aee5d124d626e5ad64312a8ca05235.png#pic_center"/>
     <br/>
     8.创建计算规格
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5087ff7166d2a021b6ef7f0e486aa0a3.png#pic_center"/>
     <br/>
     9.添加镜像
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/803569b8d3e4fe42dfa2dc51ead6c2a9.png#pic_center"/>
     <br/>
     10.创建二层网络
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/3f0d10707a7e6f13581ae5857f361030.png#pic_center"/>
     <br/>
     11.创建三层网络
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ce08ad92fce260558c514c5720d6e5e5.png#pic_center"/>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



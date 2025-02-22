---
layout: post
title: 2023-12-12-采用MQTT协议实现Android-APP与阿里云平台的连接
date: 2023-12-12 19:23:24 +0800
categories: []
tags: [android,阿里云,云计算,java]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=134935867
  alt: 采用MQTT协议实现Android-APP与阿里云平台的连接
artid: 134935867
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     采用MQTT协议实现Android APP与阿里云平台的连接
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-atom-one-dark" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <h2>
     <a id="_1">
     </a>
     前言
    </h2>
    <p>
     相信APP＋单片机是很多同学毕设或者课设的模式，上学期做课设的时候用到了MQTT协议连接阿里云平台实现数据的通信，也是根据网上大佬的经验做的，中间也踩了很多坑。本文将介绍Android APP 通过MQTT协议与阿里云云平台连接的内容，希望对大家能有所帮助。
    </p>
    <hr/>
    <h2>
     <a id="MQTT_7">
     </a>
     一、MQTT原理
    </h2>
    <p>
     MQTT（Message Queuing Telemetry Transport，消息队列遥测传输协议），是一种基于发布/订阅（publish/subscribe）模式的“轻量级”通讯协议MQTT最大优点在于，用极少的代码和有限的带宽，为连接远程设备提供实时可靠的消息服务。作为一种低开销、低带宽占用的即时通讯协议，使其在物联网、小型设备、移动应用等方面有较广泛的应用。
     <br/>
     MQTT使用的发布/订阅消息模式，它提供了一对多的消息分发机制，从而实现与应用程序的解耦。
     <br/>
     这是一种消息传递模式，消息不是直接从发送器发送到接收器（即点对点），而是由MQTT Broker分发的。
     <br/>
     <img alt="MQTT的工作模式" src="https://i-blog.csdnimg.cn/blog_migrate/e40c6d6f252ae082ea07ad0bb0f261a8.png">
      <br/>
      在设计中，阿里云服务器作为一个消息中转站，即
      <br/>
      下位机→MQTT Broker→云平台（流转）→MQTT Broker →上位机
     </img>
    </p>
    <h2>
     <a id="APP_15">
     </a>
     二、创建APP
    </h2>
    <p>
     提示：以下非零基础可以跳过
     <br/>
     1.创建APP项目，选择Empty Activity
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c9fa97ad5bf9d397f9078b68b01eec28.png">
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f6f720f8d7f25716a57acebf082650a8.png#pic_center"/>
     </img>
    </p>
    <p>
     2.设置UI
     <br/>
     创建完后会有一个空白的Activity，找到res/layout目录下的的activity_main.xml文件，在这里编写UI。
     <br/>
     这里我的UI界面仅供参考，因为项目还有其他功能，这里只讲述MQTT的连接，不需要的BUTTON控件可以自行删除。
     <br/>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/7e81e4eb7ca2bd58f904c57bee4773ba.png#pic_center"/>
    </p>
    <pre><code class="prism language-xml"><span class="token prolog">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LinearLayout</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res/android<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>app</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res-auto<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>tools</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/tools<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LinearLayout</span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#078307<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RelativeLayout</span>
            <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>78dp<span class="token punctuation">"</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>layout_marginTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30dp<span class="token punctuation">"</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@color/green<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap_content<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_centerInParent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_marginTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10dp<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>gravity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>基于人脸识别的小区门禁系统<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@color/white<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>textSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24sp<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RelativeLayout</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LinearLayout</span>
            <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#FAF6F6<span class="token punctuation">"</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LinearLayout</span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap_content<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_marginTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20dp<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>gravity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImageView</span>
                    <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@+id/m_im_1<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200dp<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>layout_marginLeft</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10dp<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>layout_marginRight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10dp<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>scaleType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fitXY<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@drawable/img<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>


            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LinearLayout</span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300dp<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_marginTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30dp<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RelativeLayout</span>
                    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>

                    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap_content<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>325dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>60dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_centerInParent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_marginBottom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@drawable/login_shape<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>gravity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择验证方式<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@color/white<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>textSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30dp<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RelativeLayout</span><span class="token punctuation">&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LinearLayout</span>
                    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>220dp<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>gravity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
                        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@+id/Rfid<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@drawable/button_selector<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RFID刷卡验证<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@color/white<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>

                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
                        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@+id/face_recognition<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_marginTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>15dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@drawable/button_selector<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>人脸验证<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@color/white<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>

                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
                        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@+id/password_check<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_marginTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>15dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@drawable/button_selector<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码验证<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@color/white<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
                        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@+id/exit<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>layout_marginTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>15dp<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@drawable/button_selector<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>退出<span class="token punctuation">"</span></span>
                        <span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@color/white<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>


            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LinearLayout</span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap_content<span class="token punctuation">"</span></span>
                <span class="token attr-name"><span class="token namespace">android:</span>padding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25dp<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>
                    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap_content<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap_content<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MQTT连接状态：<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@color/black<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>textSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>16sp<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>
                    <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@+id/m_mqtt<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap_content<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap_content<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> <span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@color/black<span class="token punctuation">"</span></span>
                    <span class="token attr-name"><span class="token namespace">android:</span>textSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>16sp<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>
</code></pre>
    <p>
     3.添加mqtt包的依赖
     <br/>
     在项目的build.gradle 中添加一行
     <code>
      implementation 'org.eclipse.paho:org.eclipse.paho.client.mqttv3:1.2.0'
     </code>
     <br/>
     如下图
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ce2ddb890cdb745634400d473c23608a.png#pic_center">
      <br/>
      4.联网权限配置
      <br/>
      在AndroidManifest.xml文件中添加`
     </img>
    </p>
    <pre><code>&lt;uses-permission android:name="android.permission.INTERNET" /&gt;
&lt;!--允许程序获取网络状态--&gt;
&lt;uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" /&gt; `
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/4532ddfeb10bbdd5111ee9b2f5df53e5.png#pic_center"/>
    </p>
    <p>
     到这里Android项目就创建完成啦
    </p>
    <h2>
     <a id="_191">
     </a>
     三、创建阿里云产品
    </h2>
    <p>
     登录阿里云平台后，根据指示找到物联网平台
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ada594f6b589204fb083282dff98acf9.png#pic_center">
      <br/>
      进入后创建产品，有一个30天免费试用的产品，建议把支付宝的自动续费关闭。进入后就可以开始创建产品，具体产品的参数设置已经记不清了，当时的产品也已经被回收了，可以参考一下别的博客。
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c80e5484778be81f129ef8aa9a8b84f4.png#pic_center"/>
      <br/>
      产品创建完成后需要创建设备，这里需要创建一个上位机和下位机，这里下位机用的是树莓派。
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b96dc11bba327a529883c0d04b5e95e9.png#pic_center"/>
      <br/>
      设备创建完成后在设备信息中会给出MQTT的连接参数，需要我们在Android APP和树莓派代码中进行配置。
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/02164638cbd407f899faefdc940653cc.png#pic_center"/>
      <br/>
      在这里设备就创建好了，但是还没完成，还需要配置解析器。
      <br/>
      这里需要用到的是云产品流转。
      <br/>
      这里在云产品流转功能中创建了两个解析器，绑定数据源和数据目的，并编写解析器的脚本。数据源和数据目的根据解析器ID确定，解析器脚本即读取转发的数据。注意，解析器只能识别JSON格式数据和二进制，这里推荐使用JSON格式。
      <br/>
      示例脚本如下：
     </img>
    </p>
    <pre><code class="prism language-groovy">var data <span class="token operator">=</span> <span class="token function">payload</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">"json"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">writeIotTopic</span><span class="token punctuation">(</span><span class="token number">1004</span><span class="token punctuation">,</span><span class="token interpolation-string"><span class="token string">"/ionmnFFCKzs/shumeipai/user/get"</span></span><span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/12e5fdcec8a8244e5ad147f81fc76645.png#pic_center"/>
     <br/>
     通过payload函数，获取设备上报的消息内容，并按照JSON格式转换。
     <br/>
     然后将消息发送给树莓派接收的Topic。
     <br/>
     通过日志服务可以监控到消息转发的过程，如下图所示：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9a5e40acbb6f875141abfb31311c52de.png#pic_center"/>
     <br/>
     这里消息质量使用的是Qos1，至少保证传一次。
     <br/>
     数据流如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/427f4f7b85cb1042b0d8383c9f1ec0fe.png#pic_center"/>
    </p>
    <h2>
     <a id="_219">
     </a>
     四、编写代码
    </h2>
    <p>
     现在到了编写代码部分，如果你的功能较多，需要跳转页面，建议把MQTT挂在后台，防止切屏的时候MQTT连接断开，从而导致数据丢包。
     <br/>
     首先是配置MQTT的参数配置，根据上文中MQTT配置信息复制粘贴过去。
     <br/>
     添加代码全面飘红？不要慌，因为你还没有完成构建，很多类还没导入，逐个alt+enter导入即可。
    </p>
    <pre><code class="prism language-java">    <span class="token keyword">private</span> <span class="token class-name">Handler</span> handler<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">SqliteDBHelper</span> mHelper<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">MqttClient</span> client<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> host <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> userName <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> passWord <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token class-name">ClientId</span> <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> mqtt_sub_topic <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span><span class="token comment">//订阅话题</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> mqtt_pub_topic <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span><span class="token comment">//发布话题</span>
    <span class="token keyword">private</span> <span class="token class-name">MqttConnectOptions</span> mqttConnectOptions<span class="token punctuation">;</span>
</code></pre>
    <pre><code class="prism language-java"><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span><span class="token function">getSupportActionBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这种方式默认式亮色主题</span>
        <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_main_desk<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TextView</span> m_mqtt <span class="token operator">=</span> <span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>m_mqtt<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取控件，不需要的控件自行删除</span>
        <span class="token class-name">Button</span> <span class="token class-name">Rfid</span> <span class="token operator">=</span> <span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>Rfid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Button</span> face_recognition <span class="token operator">=</span> <span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>face_recognition<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Button</span> password_check <span class="token operator">=</span> <span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>password_check<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Button</span> exit <span class="token operator">=</span> <span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>exit<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Mqtt_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">startReconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Handler</span><span class="token punctuation">(</span><span class="token class-name">Looper</span><span class="token punctuation">.</span><span class="token function">myLooper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span><span class="token comment">//用于处理</span>
            <span class="token annotation punctuation">@SuppressLint</span><span class="token punctuation">(</span><span class="token string">"SetTextI18n"</span><span class="token punctuation">)</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token class-name">Message</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handleMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">switch</span> <span class="token punctuation">(</span>msg<span class="token punctuation">.</span>what<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token comment">//开机校验更新回传</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>  <span class="token comment">// 反馈回传</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>  <span class="token comment">//MQTT 收到消息回传</span>
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 显示MQTT数据</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">case</span> <span class="token number">31</span><span class="token operator">:</span>   <span class="token comment">//连接成功</span>
                        m_mqtt<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">"连接成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//连接成功后按钮变为可点击状态</span>
                        <span class="token class-name">Rfid</span><span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token class-name">MainDeskActivity</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        face_recognition<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token class-name">MainDeskActivity</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        password_check<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token class-name">MainDeskActivity</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        exit<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token class-name">MainDeskActivity</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
                            client<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>mqtt_sub_topic<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//订阅</span>
                        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">MqttException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">case</span> <span class="token number">30</span><span class="token operator">:</span>  <span class="token comment">//连接失败</span>
                        <span class="token class-name">Toast</span><span class="token punctuation">.</span><span class="token function">makeText</span><span class="token punctuation">(</span><span class="token class-name">MainDeskActivity</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">"连接失败"</span><span class="token punctuation">,</span> <span class="token class-name">Toast</span><span class="token punctuation">.</span><span class="token constant">LENGTH_SHORT</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        m_mqtt<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">"连接失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>

                    <span class="token keyword">default</span><span class="token operator">:</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre>
    <p>
     Mqtt_init函数
     <br/>
     需要注意的一点是如果你的MQTT连接断开后就无法重连上，建议将会话心跳设置长一点
    </p>
    <pre><code class="prism language-java"><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token class-name">Mqtt_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MqttClient</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> <span class="token class-name">ClientId</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MemoryPersistence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//MQTT的连接设置</span>
            mqttConnectOptions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MqttConnectOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            mqttConnectOptions<span class="token punctuation">.</span><span class="token function">setCleanSession</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            mqttConnectOptions<span class="token punctuation">.</span><span class="token function">setUserName</span><span class="token punctuation">(</span>userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            mqttConnectOptions<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>passWord<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            mqttConnectOptions<span class="token punctuation">.</span><span class="token function">setConnectionTimeout</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">// 设置会话心跳时间 单位为秒 服务器会每隔1.5*30秒的时间向客户端发送个消息判断客户端是否在线，但这个方法并没有重连的机制</span>
            <span class="token comment">//由于自身网络延时很难确定，建议设大一点，防止断开连接后无法重连</span>
            mqttConnectOptions<span class="token punctuation">.</span><span class="token function">setKeepAliveInterval</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//设置回调</span>
            client<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MqttCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">connectionLost</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                    <span class="token comment">//连接丢失后，一般在这里面进行重连</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"connectionLost----------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token function">startReconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deliveryComplete</span><span class="token punctuation">(</span><span class="token class-name">IMqttDeliveryToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                    <span class="token comment">//publish后会执行到这里</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"deliveryComplete---------"</span>
                            <span class="token operator">+</span> token<span class="token punctuation">.</span><span class="token function">isComplete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">messageArrived</span><span class="token punctuation">(</span><span class="token class-name">String</span> topicName<span class="token punctuation">,</span> <span class="token class-name">MqttMessage</span> message<span class="token punctuation">)</span>
                        <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{<!-- --></span>
                    <span class="token comment">//subscribe后得到的消息会执行到这里面</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"messageArrived----------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
</code></pre>
    <pre><code>MQTT连接函数
</code></pre>
    <pre><code class="prism language-java">    <span class="token comment">// MQTT连接函数</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token class-name">Mqtt_connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>

                <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>client<span class="token punctuation">.</span><span class="token function">isConnected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//如果还未连接</span>
                    <span class="token punctuation">{<!-- --></span>
                        client<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>mqttConnectOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token class-name">Message</span> msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        msg<span class="token punctuation">.</span>what <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span>
                        handler<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Message</span> msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    msg<span class="token punctuation">.</span>what <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
                    handler<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre>
    <p>
     MQTT重连函数
    </p>
    <pre><code class="prism language-java"><span class="token comment">// MQTT重新连接函数</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">startReconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token class-name">ScheduledExecutorService</span> scheduler <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newSingleThreadScheduledExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduler<span class="token punctuation">.</span><span class="token function">scheduleAtFixedRate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>client<span class="token punctuation">.</span><span class="token function">isConnected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                    <span class="token class-name">Mqtt_connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre>
    <pre><code>MQTT发布订阅
</code></pre>
    <pre><code class="prism language-java">    <span class="token comment">// 订阅函数    (下发任务/命令)</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">publish_message_plus</span><span class="token punctuation">(</span><span class="token class-name">String</span> topic<span class="token punctuation">,</span> <span class="token class-name">String</span> message2<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>client <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token operator">!</span>client<span class="token punctuation">.</span><span class="token function">isConnected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">MqttMessage</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MqttMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        message<span class="token punctuation">.</span><span class="token function">setPayload</span><span class="token punctuation">(</span>message2<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        message<span class="token punctuation">.</span><span class="token function">setQos</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置消息质量</span>
        <span class="token comment">//MQTT一共有三种消息质量</span>
        <span class="token comment">//Qos0:会发生消息的丢失或重复</span>
        <span class="token comment">//Qos1:至少送达一次</span>
        <span class="token comment">//Qos2：保证只送达到目标端一次，网络开销最高</span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            client<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">MqttException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre>
    <p>
     附上JSON数据的处理，其中message是MessageArrived中收到的数据，将message转为jsonObject对象后通过键获取值。
     <br/>
     这里只用到了简单的处理。假设收到的数据是
     <code>
      "{\"flag\":\"02\"}\n"
     </code>
    </p>
    <pre><code class="prism language-java"><span class="token class-name">JSONObject</span> jsonObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> flag <span class="token operator">=</span> jsonObject<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"flag"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <h2>
     <a id="_405">
     </a>
     五、完成测试
    </h2>
    <p>
     以上准备工作完成后就可以进行测试了，这里可以采用MQTT.fx软件来模拟下位机来发送信息，官网下载最新版
     <code>
      http://mqttfx.org
     </code>
     ，由于只有三个月的免费试用，我的已经做不了演示了，详细操作可以自行网络搜索。联调成功后就可以对下位机进行配置了。
     <br/>
     MQTT连接成功后如下图所示：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/1d3fc9f4973fc4145ae6d5d8c70efc9b.png#pic_center"/>
     <br/>
     可以根据自己功能的需要添加点击事件以及消息处理的逻辑，有问题欢迎私信。
    </p>
    <h2>
     <a id="_411">
     </a>
     总结
    </h2>
    <p>
     本文主要讲述了利用MQTT协议实现Android app与阿里云平台的连接，流程并不难，新手会因为不熟悉而踩一些坑。在调试过程中，建议利用MQTT.fx分别对上位机和下位机调试，便于排查问题。消息接收失败可以在云平台上和MQTT.fx的日志里追踪消息。难点需要掌握Handler的回传机制，便于进行逻辑的编写。第一次开源，编写不易，如果帮到你的话可以点个赞吗。
     <br/>
     参考资料
    </p>
    <blockquote>
     <p>
      https://blog.csdn.net/x97666/article/details/125172129
     </p>
    </blockquote>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f6d305f36333230383831382f:61727469636c652f64657461696c732f313334393335383637

---
layout: post
title: 基于STM32的ESP8266-WIFI与ONENET通信连接2,云平台以及手机APP数据显示
date: 2025-01-09 13:53:56 +0800
categories: [STM32]
tags: [自动驾驶,物联网,stm32]
image:
    path: https://img-blog.csdnimg.cn/ba42fe2d709f4f3a8faf3c4dc0eee4f6.png?x-oss-process&#61;image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAc25heWdv,size_20,color_FFFFFF,t_70,g_se,x_16
    alt: 基于STM32的ESP8266-WIFI与ONENET通信连接2,云平台以及手机APP数据显示
artid: 120622425
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     基于STM32的ESP8266 WIFI与ONENET通信连接（2），云平台以及手机APP数据显示
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-atom-one-light" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
     首先，如果未了解STM32如何通过WIFI将数据读取传输到云平台可跳转连接进行之前步骤的操作。
     <br/>
     <a href="https://blog.csdn.net/weixin_43352501/article/details/120588047">
      基于STM32的ESP8266 WIFI与ONENET通信连接（1），实现温湿度数据互传，LED控制
     </a>
     <br/>
     第一步，在实现STM32将传感器数据采集之后，并且完成WIFI配网步骤，可以正常通过ESP8266WIFI模块正常将数据发送到云平台之后进行以下阅读，
     <br/>
     上述内容可以跳转到以下链接进行查看具体操作。
     <br/>
     将数据进行可视化处理步骤；
     <br/>
     1.登陆oneNET进入控制台
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/29e8cd943f21a551a9a61097414bc6c5.png">
      <br/>
      如果按（1）中完成注册配置之后再次进入可以看到以下情况“多协议接入”
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9c82d8948ddeadaab2fc29fcb2c2e851.png">
       <br/>
       点击进入后选择你创建的产品，
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/4e857e28a4107b51f398ab06b403b727.png">
        <br/>
        然后选择
        <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/61af593b7aa7558559156f228e4e3b74.png">
         <br/>
         2.进入编辑应用
         <br/>
         <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5cc7a46c1e70b1a8578e99ae9dee7052.png">
          <br/>
          <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/66d80433a6ff18dddf29f3570e219eda.png">
           <br/>
           <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/2a36671b09c6bf240f37dd4c3abd6615.png">
            <br/>
            <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/22b9fdd75dace9ecf041a63d03f0a25c.png">
             <br/>
             <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/30708758d087e7eb3557a28a6d4022e0.png"/>
             <br/>
             当重复多次，将温度、湿度仪表做好，曲线完成之后，需要进行命令行的一个设计
             <br/>
             <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/05e46682dd81d07db80ce10458a43493.png"/>
             <br/>
             拖动一个命令行，只要按照命令格式 ，可以此处将命令写好，进行发送，WIFI将数据传送给STM32之后进行阈值的修改，从而调整上下限。
            </img>
           </img>
          </img>
         </img>
        </img>
       </img>
      </img>
     </img>
    </p>
    <p>
     同理阈值控制区域也是如此将数据流进行匹配；
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/0092680b72e2c9828e81ecb5e166711a.png"/>
     <br/>
     完成电脑端设计之后，相同的步骤再将APP端进行设计，；
     <br/>
     设计效果与电脑端效果相同；
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9a3fce1c5e269457e967b67faa59676a.png"/>
     <br/>
     如果具体细节不了解如何操作，可以简单看一下右上角的“帮助文档”，有具体说明如何操作控件以及匹配数据流。
     <br/>
     最终保存退出之后我们可以全屏查看数据，在通信配置良好，设备在线情况下，数据会发生变化。
     <br/>
     手机端APP下载链接如下：
     <br/>
     链接：
     <a href="https://pan.baidu.com/s/1pqmy6BzQfGd4uRnEL5Oz8w" rel="nofollow">
      https://pan.baidu.com/s/1pqmy6BzQfGd4uRnEL5Oz8w
     </a>
     <br/>
     提取码：8888
    </p>
    <p>
     手机安装注册（手机端需要登录就可以，一定要和ONENET的账号匹配）
     <br/>
     登录后可以查看到你的设备信息；
     <br/>
     <img alt="请添加图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b93d759f0a0384c54eefe01d9ac46e37.jpeg"/>
    </p>
    <p>
     <img alt="请添加图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e95b2b5a0049fe8ca690d9b16cfd17b0.jpeg"/>
     <br/>
     <img alt="请添加图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/7024a65ff877b3f65137d3da9f412ecd.jpeg"/>
     <br/>
     读者可以进行调整。
     <br/>
     笔者能力有限，如遇错误或者功能不能实现，希望私信我，第一时间会进行修改；如遇侵权情况，同样进行整改。
     <br/>
     近期笔者在学习阿里云数据传输，后期会更新STM32f103C8T6单片机使用WIFI模块将数据与阿里云平台实现交互。
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



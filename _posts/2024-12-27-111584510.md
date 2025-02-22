---
layout: post
title: 2024-12-27-STM32F103RCT6Mini板通过MQTT协议上传温湿度数据至OneNET云平台并控制LED灯
date: 2024-12-27 11:18:43 +0800
categories: [stm32]
tags: [云端,stm32,mqtt,物联网]
image:
  path: https://img-blog.csdnimg.cn/20201223115026406.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Nzc3NhZHc=,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150
  alt: STM32F103RCT6Mini板通过MQTT协议上传温湿度数据至OneNET云平台并控制LED灯
artid: 111584510
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     STM32F103RCT6（Mini板）通过MQTT协议上传温湿度数据至OneNET云平台并控制LED灯
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
    <p>
    </p>
    <div class="toc">
     <h4>
      目录
     </h4>
     <ul>
      <li>
       <ul>
        <li>
         <ul>
          <li>
           <ul>
            <li>
             <a href="#1__3" rel="nofollow">
              1. 相关连接：
             </a>
            </li>
            <li>
             <a href="#2__8" rel="nofollow">
              2. 具体功能：
             </a>
            </li>
            <li>
             <a href="#3__14" rel="nofollow">
              3. 硬件环境：
             </a>
            </li>
            <li>
             <a href="#4__20" rel="nofollow">
              4. 云平台环境配置：
             </a>
            </li>
            <li>
             <a href="#5__31" rel="nofollow">
              5. 接线：
             </a>
            </li>
            <li>
             <a href="#6__52" rel="nofollow">
              6. 功能展示：
             </a>
            </li>
            <li>
             <a href="#7__70" rel="nofollow">
              7. 要修改的的地方：
             </a>
            </li>
           </ul>
          </li>
         </ul>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <br/>
    <strong>
     简介：
    </strong>
    ESP8266通过MQTT协议将温湿度数据传输至OnenNet云平台
    <br/>
    <strong>
     关键词：
    </strong>
    OneNet、ESP8266、DHT11、MQTT、LED
    <p>
    </p>
    <h5>
     <a id="1__3">
     </a>
     1. 相关连接：
    </h5>
    <ol>
     <li>
      github（源码）：
      <a href="https://github.com/Mbwide/DHT11_ToOneNetByMqtt">
       https://github.com/Mbwide/DHT11_ToOneNetByMqtt
      </a>
     </li>
     <li>
      CSDN：（图文解析）：
     </li>
     <li>
      Bilibili（视频解析）：
      <a href="https://www.bilibili.com/video/BV1Vi4y1w7U1" rel="nofollow">
       https://www.bilibili.com/video/BV1Vi4y1w7U1
      </a>
     </li>
    </ol>
    <h5>
     <a id="2__8">
     </a>
     2. 具体功能：
    </h5>
    <ol>
     <li>
      DHT11采集环境温湿度数据，ESP8266模块通过MQTT协议将温湿度数据传输至OnenNet云平台
     </li>
     <li>
      OneNET可以通过云平台远程控制LED灯的亮灭
     </li>
     <li>
      串口显示相关数据信息
     </li>
    </ol>
    <h5>
     <a id="3__14">
     </a>
     3. 硬件环境：
    </h5>
    <ol>
     <li>
      正点原子STM32F103RCT6（正点原子MiniSTM32）
     </li>
     <li>
      DHT11温湿度传感器
     </li>
     <li>
      ESP8266-01S无线模块
     </li>
    </ol>
    <h5>
     <a id="4__20">
     </a>
     4. 云平台环境配置：
    </h5>
    <ol>
     <li>
      <p>
       <strong>
        云平台配置：
       </strong>
      </p>
      <ul>
       <li>
        OneNET控制台—全部产品服务（多协议接入，选MQTT旧版）—添加产品—进入产品（记住产品ID）—设备列表—添加设备（记住鉴权信息）—创建完成（记住设备ID）
       </li>
      </ul>
     </li>
     <li>
      <p>
       <strong>
        云平台应用设置：
       </strong>
      </p>
      <ul>
       <li>
        <p>
         添加应用—编辑应用—组件库中添加折线图和开关
        </p>
       </li>
       <li>
        <p>
         折线图（数据上传成功后进行配置）: 选择数据流 — 选择设备—数据流选择要显示的数据（这里选择温度，temperature）
        </p>
       </li>
       <li>
        <p>
         开关（数据上传成功后进行配置）: 选择数据流 — 选择设备—数据流选择要显示的数据（这里选择LED，ledFlag）—开关开值（LEDON）—开关关值（LEDOFF）—EDP不填
        </p>
       </li>
      </ul>
     </li>
    </ol>
    <h5>
     <a id="5__31">
     </a>
     5. 接线：
    </h5>
    <ol>
     <li>
      <p>
       ESP8266-01S（5根线）
      </p>
      <ul>
       <li>
        PA2 RX
       </li>
       <li>
        PA3 TX
       </li>
       <li>
        PA4 复位
       </li>
       <li>
        3V3 VCC
       </li>
       <li>
        GND GND
       </li>
      </ul>
     </li>
     <li>
      <p>
       DHT11（3根线）
      </p>
      <ul>
       <li>
        <p>
         PA6 DATA
        </p>
       </li>
       <li>
        <p>
         3V3 VCC
        </p>
       </li>
       <li>
        <p>
         GND GND
        </p>
       </li>
      </ul>
     </li>
     <li>
      <p>
       LED
      </p>
      <ul>
       <li>
        PD2 LED1
       </li>
      </ul>
     </li>
    </ol>
    <h5>
     <a id="6__52">
     </a>
     6. 功能展示：
    </h5>
    <ol>
     <li>
      <p>
       <strong>
        数据流
       </strong>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/182664753a564b48663c0f8566ea6867.png"/>
      </p>
     </li>
     <li>
      <p>
       <strong>
        APP应用管理
       </strong>
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e5f127a22a5f26dc1c65264c2c4b7c82.png"/>
      </p>
     </li>
     <li>
      <p>
       <strong>
        串口数据
       </strong>
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/2204616875366ffdda56a23ec2ae1e91.png"/>
      </p>
     </li>
     <li>
      <p>
       <strong>
        源码简要解析
       </strong>
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/20ddec6e8f24eceefabb17b179411c93.png"/>
      </p>
      <ul>
       <li>
        stm32f10x_it.c：中断处理函数
       </li>
       <li>
        usart1.c：与上位机通信
       </li>
       <li>
        usart2.c：与ESP8266通信，串口2接收中断处理上位机发送来的数据
       </li>
       <li>
        timer2.c：定时器2中断用来发送温湿度数据，10S
       </li>
       <li>
        timer3.c：定时器3中断用来发送心跳包（ping，用于保持和服务器连接，长时间没给服务器发送数据会被踢下线），2s和30s两种模式
       </li>
       <li>
        timer4.c：将串口2接收到的服务器数据依次存放在MQTT接收缓存数组中，50ms
       </li>
       <li>
        control.c：控制LED灯，并且发送LED灯开关信号
       </li>
      </ul>
     </li>
    </ol>
    <h5>
     <a id="7__70">
     </a>
     7. 要修改的的地方：
    </h5>
    <ol>
     <li>
      <p>
       mqtt.h ：
      </p>
      <pre><code class="prism language-c"><span class="token macro property">#<span class="token directive keyword">define</span>  PRODUCTID      "393773"          </span><span class="token comment">//自己的产品ID</span>
<span class="token macro property">#<span class="token directive keyword">define</span>  DEVICEID       "660024974"       </span><span class="token comment">//自己的设备ID </span>
<span class="token macro property">#<span class="token directive keyword">define</span>  AUTHENTICATION  "123456"         </span><span class="token comment">//自己的鉴权信息（创建设备的时候设置）</span>
</code></pre>
      <p>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5509fccfb8db3f824a2e121be7859ed7.png"/>
      </p>
     </li>
     <li>
      <p>
       wifi.h
      </p>
      <pre><code class="prism language-c"> <span class="token macro property">#<span class="token directive keyword">define</span> SSID   "PPP"                     </span><span class="token comment">//自己的路由器名称</span>
 <span class="token macro property">#<span class="token directive keyword">define</span> PASS   "qaz123qaz"               </span><span class="token comment">//自己的路由器密码</span>
</code></pre>
      <p>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/1109f76047fbb2bdd464ab972d00376d.png"/>
      </p>
     </li>
     <li>
      <p>
       mqtt.c
      </p>
      <pre><code class="prism language-c"><span class="token function">sprintf</span><span class="token punctuation">(</span>ServerIP<span class="token punctuation">,</span><span class="token string">"%s"</span><span class="token punctuation">,</span><span class="token string">"183.230.40.39"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">//构建服务器域名（ONENET的）</span>
ServerPort <span class="token operator">=</span> <span class="token number">6002</span><span class="token punctuation">;</span>                                   <span class="token comment">//服务器端口号6002</span>
</code></pre>
      <p>
       根据平台地址列表填写，这里是mqtt协议
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d721554d38e1618c59a9cfd14450f24d.png">
        <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/1f8bb80d55e9f590dfa1574d82063b20.png"/>
       </img>
      </p>
     </li>
    </ol>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">6874747073:3a2f2f626c6f672e6373646e2e6e65742f737373736164772f:61727469636c652f64657461696c732f313131353834353130</p>

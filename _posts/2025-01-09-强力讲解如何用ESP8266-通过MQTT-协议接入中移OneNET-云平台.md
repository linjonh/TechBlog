---
layout: post
title: 强力讲解如何用ESP8266-通过MQTT-协议接入中移OneNET-云平台
date: 2025-01-09 13:53:56 +0800
categories: [OneNET,MQTT]
tags: [云平台,OneNET,MQTT ,ESP8266]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=90137678
    alt: 强力讲解如何用ESP8266-通过MQTT-协议接入中移OneNET-云平台
artid: 90137678
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     强力讲解如何用ESP8266 通过MQTT 协议接入中移OneNET 云平台
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
     若大家还想了解如何通过HTTP 协议接入OneNET，请参考：
     <br/>
     <a href="https://blog.csdn.net/weixin_40973138/article/details/89761939">
      强力讲解如何将ESP8266 接入中移OneNET 平台
     </a>
     <br/>
     <a href="https://blog.csdn.net/weixin_40973138/article/details/89765523">
      强力讲解如何用ESP8266 通过HTTP 协议与OneNET 信息交互
     </a>
    </p>
    <p>
     <mark>
      ※
     </mark>
     本文相关文件（大家不用留言获取了，可以直接去下载）：
     <br/>
     <a href="https://download.csdn.net/download/weixin_40973138/12520643">
      《WiFi模块、连接OneNET等资料.zip》
     </a>
    </p>
    <hr/>
    <p>
    </p>
    <div class="toc">
     <h4>
      目录
     </h4>
     <ul>
      <li>
       <a href="#_23" rel="nofollow">
        步入正题
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#CONNECT__24" rel="nofollow">
          一、CONNECT 请求
         </a>
        </li>
        <li>
         <a href="#Subscribe__102" rel="nofollow">
          二、Subscribe 请求
         </a>
        </li>
        <li>
         <a href="#Publish__147" rel="nofollow">
          三、Publish 请求
         </a>
        </li>
        <li>
         <a href="#_192" rel="nofollow">
          四、发送更新数据
         </a>
        </li>
        <li>
         <a href="#_252" rel="nofollow">
          五、心跳请求
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <hr/>
    <p>
     在此我使用的是官方的ESP8266 的
     <strong>
      MQTT SDK
     </strong>
     进行接入测试。
    </p>
    <p>
     首先大家需要把MQTT SDK 移植到自己的板子上，这里面还是有很多坑的，建议大家下载两个不同版本的SDK 进行比对，因为你往往能在另一个版本的SDK 中找到你所需要的东西。
    </p>
    <p>
     其实一开始接入平台之前的移植也就只是改一下串口什么的而已，并没有太多需要改动的地方，真正需要调试的时候是在进行
     <strong>
      接入
     </strong>
     、
     <strong>
      上传
     </strong>
     、
     <strong>
      订阅发布
     </strong>
     …时。
     <br/>
     如果你运气好的话，说不定根本不需要太多调试，反正我的运气不怎么好 😦
    </p>
    <hr/>
    <p>
     接下来的内容都是基于大家对
     <strong>
      MQTT
     </strong>
     协议的
     <strong>
      格式、特性等
     </strong>
     有一定了解的前提上。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/cd5fabcd33970e35e4ebfa1246b9346e.gif#pic_center" width="500"/>
    </p>
    <h2>
     <a id="_23">
     </a>
     步入正题
    </h2>
    <h3>
     <a id="CONNECT__24">
     </a>
     一、CONNECT 请求
    </h3>
    <p>
     这是一个CONNECT 请求函数：
    </p>
    <pre><code class="prism language-c"><span class="token keyword">void</span> <span class="token function">Connect_MQTT</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{<!-- --></span>
    <span class="token comment">/* mqtt连接 */</span>
    <span class="token function">MqttSample_Connect</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> PROD_ID<span class="token punctuation">,</span> SN<span class="token punctuation">,</span> ctx<span class="token operator">-&gt;</span>devid<span class="token punctuation">,</span> keep_alive<span class="token punctuation">,</span> clean_session<span class="token punctuation">)</span><span class="token punctuation">;</span>
    bytes <span class="token operator">=</span> <span class="token function">Mqtt_SendPkt</span><span class="token punctuation">(</span>ctx<span class="token operator">-&gt;</span>mqttctx<span class="token punctuation">,</span> ctx<span class="token operator">-&gt;</span>mqttbuf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">MqttBuffer_Reset</span><span class="token punctuation">(</span>ctx<span class="token operator">-&gt;</span>mqttbuf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">Delay_ms</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    err <span class="token operator">=</span> <span class="token function">Mqtt_RecvPkt</span><span class="token punctuation">(</span>ctx<span class="token operator">-&gt;</span>mqttctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">UART4_Clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     由于MQTT 每种请求都有特定的格式，所以不管是Connect、Publish、Subscribe等都需要
     <strong>
      先给报文进行格式化
     </strong>
     。
    </p>
    <p>
     <code>
      MqttSample_Connect
     </code>
     的作用就是对
     <code>
      ctx
     </code>
     进行
     <strong>
      Connect
     </strong>
     报文格式化（
     <code>
      ctx
     </code>
     是一个通用的结构体，其中包含报文字节数、报文缓存区、host、port、deviceID 等必要信息）。
    </p>
    <p>
     有了Connect 报文后，就可以通过
     <code>
      Mqtt_SendPkt
     </code>
     将报文发送出去了。
    </p>
    <p>
     这是通过Connect 请求成功连接OneNET 的串口信息（数据经过处理）：
    </p>
    <pre><code class="prism language-c">product id<span class="token punctuation">:</span> <span class="token number">123456</span>
sn<span class="token punctuation">:</span> <span class="token number">001</span>
deviceid<span class="token punctuation">:</span> <span class="token number">233386196</span>
keepalive<span class="token punctuation">:</span> <span class="token number">120</span>
cleansession<span class="token punctuation">:</span> <span class="token number">0</span>
QoS<span class="token punctuation">:</span> <span class="token number">0</span>
before send
send one pkt
<span class="token number">10</span> <span class="token number">22</span> 
<span class="token number">00</span> <span class="token number">04</span> <span class="token number">23</span> <span class="token number">51</span> <span class="token number">54</span> <span class="token number">88</span> <span class="token number">04</span> C0 <span class="token number">00</span> <span class="token number">78</span> 
<span class="token number">00</span> <span class="token number">09</span> A5 <span class="token number">32</span> <span class="token number">34</span> <span class="token number">33</span> D2 <span class="token number">36</span> <span class="token number">31</span> <span class="token number">39</span> <span class="token number">22</span> <span class="token number">00</span> <span class="token number">06</span> <span class="token number">32</span> <span class="token number">12</span> <span class="token number">34</span> <span class="token number">32</span> <span class="token number">31</span> <span class="token number">33</span> <span class="token number">00</span> <span class="token number">44</span> <span class="token number">30</span> <span class="token number">30</span> <span class="token number">88</span> 
AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">36</span>


OK
<span class="token operator">&gt;</span>  SendCmd <span class="token number">443</span> cmd<span class="token punctuation">:</span>AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">36</span>
<span class="token punctuation">,</span>rsp<span class="token punctuation">:</span>AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">36</span>


OK
<span class="token operator">&gt;</span> 

send 
Recv <span class="token number">36</span> bytes


SEND OK

<span class="token operator">+</span>IPD<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">:</span>       Rcv<span class="token punctuation">:</span> 
<span class="token number">20</span> <span class="token number">02</span> <span class="token number">00</span> <span class="token number">00</span> 
<span class="token operator">&lt;</span>Mqtt_RecvPkt<span class="token operator">&gt;</span><span class="token punctuation">:</span> rcv <span class="token number">4</span> data from OneNET
Success to connect to the server<span class="token punctuation">,</span> <span class="token function">flags</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">code</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
</code></pre>
    <p>
     我们可以看到，发送Connect 实际上只是发送这样一段数据：
    </p>
    <pre><code>send one pkt
10 22 
00 04 23 51 54 88 04 C0 00 78 
00 09 A5 32 34 33 D2 36 31 39 22 00 06 32 12 34 32 31 33 00 44 30 30 88 
</code></pre>
    <p>
     这是十六进制的，我们需要知道其中到底发送了什么数据，除了用WireShark 抓包分析之外，我们也可以直接把数据转化为字符：
     <a href="http://www.bejson.com/convert/ox2str/" rel="nofollow">
      16进制到文本字符串的转换
     </a>
    </p>
    <p>
     我的包转换之后就是这样：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/17616ff01dd8e46f446fafa46f02305f.png">
      <br/>
      可以看到，我们发送的数据包里面就包含了
      <strong>
       协议类型
      </strong>
      ，
      <strong>
       设备ID
      </strong>
      ，
      <strong>
       产品ID
      </strong>
      等信息。
     </img>
    </p>
    <p>
     <mark>
      <strong>
       并且
      </strong>
     </mark>
     <br/>
     大家可以按照所发送的十六进制数据对照着MQTT
     <strong>
      Connect
     </strong>
     数据包查看该数据包对于可变报头各个参数的详细设置：
     <br/>
     <a href="https://blog.csdn.net/weixin_40973138/article/details/90036953">
      MQTT协议（二）&gt;&gt;&gt; 【CONNECT】连接服务器
     </a>
    </p>
    <p>
     我们还可以注意到，我们发送了Connect 后返回了4字节数据
     <code>
      20 02 00 00
     </code>
     ，这就是
     <strong>
      CONNACK-确认连接请求
     </strong>
     <br/>
     <a href="https://blog.csdn.net/weixin_40973138/article/details/90049946">
      MQTT协议（三）&gt;&gt;&gt; 【CONNACK】确认连接请求
     </a>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/cd5fabcd33970e35e4ebfa1246b9346e.gif#pic_center" width="500"/>
    </p>
    <h3>
     <a id="Subscribe__102">
     </a>
     二、Subscribe 请求
    </h3>
    <pre><code class="prism language-c"><span class="token keyword">void</span> <span class="token function">Subscribe_MQTT</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{<!-- --></span>
    <span class="token function">MqttSample_Subscribe</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> topics<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//可一次订阅多个，本例只用只订阅一个topic</span>
    bytes <span class="token operator">=</span> <span class="token function">Mqtt_SendPkt</span><span class="token punctuation">(</span>ctx<span class="token operator">-&gt;</span>mqttctx<span class="token punctuation">,</span> ctx<span class="token operator">-&gt;</span>mqttbuf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">MqttBuffer_Reset</span><span class="token punctuation">(</span>ctx<span class="token operator">-&gt;</span>mqttbuf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">Delay_ms</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     <code>
      MqttSample_Subscribe
     </code>
     是一个
     <strong>
      Subscribe
     </strong>
     报文格式化函数，该函数中，我们需要
     <strong>
      指定订阅话题的名称topics
     </strong>
     。
     <br/>
     然后通过
     <code>
      Mqtt_SendPkt
     </code>
     发送报文。
    </p>
    <pre><code class="prism language-c">before send
send one pkt
<span class="token number">80</span> <span class="token number">09</span> 
<span class="token number">00</span> <span class="token number">02</span> <span class="token number">00</span> <span class="token number">04</span> <span class="token number">68</span> <span class="token number">75</span> <span class="token number">6</span>D <span class="token number">69</span> <span class="token number">00</span> 
AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">11</span>


OK
<span class="token operator">&gt;</span>  SendCmd <span class="token number">443</span> cmd<span class="token punctuation">:</span>AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">11</span>
<span class="token punctuation">,</span>rsp<span class="token punctuation">:</span>AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">11</span>


OK
<span class="token operator">&gt;</span> 

send
Recv <span class="token number">11</span> bytes


SEND OK

<span class="token operator">+</span>IPD<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token operator">?</span>
</code></pre>
    <p>
     看看到底发出去什么数据：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/caec216536326e8b9512e696e3830653.png">
      <br/>
      可以看到，我订阅的话题名称是“
      <strong>
       humi
      </strong>
      ”
     </img>
    </p>
    <p>
     然后通过OneNET 模拟助手模拟另一台设备发布“
     <strong>
      humi
     </strong>
     ” 信息，ESP8266就可以收到。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/cd5fabcd33970e35e4ebfa1246b9346e.gif#pic_center" width="500"/>
    </p>
    <h3>
     <a id="Publish__147">
     </a>
     三、Publish 请求
    </h3>
    <pre><code class="prism language-c"><span class="token keyword">void</span> <span class="token function">Publish_MQTT</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{<!-- --></span>
	<span class="token function">MqttSample_Publish</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> temp<span class="token punctuation">,</span> humi<span class="token punctuation">)</span><span class="token punctuation">;</span>
	bytes <span class="token operator">=</span> <span class="token function">Mqtt_SendPkt</span><span class="token punctuation">(</span>ctx<span class="token operator">-&gt;</span>mqttctx<span class="token punctuation">,</span> ctx<span class="token operator">-&gt;</span>mqttbuf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">MqttBuffer_Reset</span><span class="token punctuation">(</span>ctx<span class="token operator">-&gt;</span>mqttbuf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre>
    <p>
     <code>
      MqttSample_Publish
     </code>
     是一个
     <strong>
      Publish
     </strong>
     报文格式化函数，该函数中，我们需要
     <strong>
      指定发布内容的数据，其中发布的topic 在函数内部定义
     </strong>
     。
     <br/>
     然后通过
     <code>
      Mqtt_SendPkt
     </code>
     发送数据。
    </p>
    <pre><code class="prism language-c"><span class="token operator">&lt;</span>MqttSample_Publish<span class="token operator">&gt;</span><span class="token punctuation">:</span> public temp <span class="token punctuation">:</span> key pressed<span class="token punctuation">,</span> temp<span class="token punctuation">:</span> <span class="token number">66</span><span class="token punctuation">,</span> humi<span class="token punctuation">:</span> <span class="token number">0</span>
before send
send one pkt
<span class="token number">32</span> <span class="token number">26</span> 
<span class="token number">00</span> <span class="token number">04</span> <span class="token number">74</span> <span class="token number">65</span> <span class="token number">6</span>D <span class="token number">70</span> <span class="token number">00</span> <span class="token number">01</span> 
<span class="token number">6</span>B <span class="token number">65</span> <span class="token number">79</span> <span class="token number">20</span> <span class="token number">70</span> <span class="token number">72</span> <span class="token number">65</span> <span class="token number">73</span> <span class="token number">73</span> <span class="token number">65</span> <span class="token number">64</span> <span class="token number">2</span>C <span class="token number">20</span> <span class="token number">74</span> <span class="token number">65</span> <span class="token number">6</span>D <span class="token number">70</span> <span class="token number">3</span>A <span class="token number">20</span> <span class="token number">36</span> <span class="token number">36</span> <span class="token number">2</span>C <span class="token number">20</span> <span class="token number">68</span> <span class="token number">75</span> <span class="token number">6</span>D <span class="token number">69</span> <span class="token number">3</span>A <span class="token number">20</span> <span class="token number">30</span> 
AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">40</span>


OK
<span class="token operator">&gt;</span>  SendCmd <span class="token number">443</span> cmd<span class="token punctuation">:</span>AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">40</span>
<span class="token punctuation">,</span>rsp<span class="token punctuation">:</span>AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">40</span>


OK
<span class="token operator">&gt;</span> 

send 
Recv <span class="token number">40</span> bytes


SEND OK

<span class="token operator">+</span>IPD<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">:</span>@
</code></pre>
    <p>
     数据转换后：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a3b548f755ca664ae52ae66fe0465506.png">
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/cd5fabcd33970e35e4ebfa1246b9346e.gif#pic_center" width="500"/>
     </img>
    </p>
    <h3>
     <a id="_192">
     </a>
     四、发送更新数据
    </h3>
    <pre><code class="prism language-c"><span class="token keyword">void</span> <span class="token function">Send_Data</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{<!-- --></span>
	<span class="token comment">/* 上传数据 */</span>
	<span class="token function">MqttSample_Savedata</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> temp<span class="token punctuation">,</span> humi<span class="token punctuation">)</span><span class="token punctuation">;</span>
	bytes <span class="token operator">=</span> <span class="token function">Mqtt_SendPkt</span><span class="token punctuation">(</span>ctx<span class="token operator">-&gt;</span>mqttctx<span class="token punctuation">,</span> ctx<span class="token operator">-&gt;</span>mqttbuf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">MqttBuffer_Reset</span><span class="token punctuation">(</span>ctx<span class="token operator">-&gt;</span>mqttbuf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     <code>
      MqttSample_Savedata
     </code>
     是一个
     <strong>
      json
     </strong>
     格式化函数，该函数是一个
     <strong>
      壳子函数
     </strong>
     （即内部还有一个核心函数，除了核心函数外没有其他有关代码），核心函数为
     <code>
      MqttSample_Savedata11
     </code>
     。
     <code>
      MqttSample_Savedata11
     </code>
     函数中有一段组织
     <strong>
      json
     </strong>
     语句格式的代码。
    </p>
    <pre><code class="prism language-c">    <span class="token keyword">char</span> json<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"{\"datastreams\":[{\"id\":\"temp\",\"datapoints\":[{\"value\":%d}]},{\"id\":\"humi\",\"datapoints\":[{\"value\":%d}]}]}"</span><span class="token punctuation">;</span>

</code></pre>
    <p>
     即更新的数据流名称和数量都在此设置。
    </p>
    <p>
     所以在
     <code>
      MqttSample_Savedata
     </code>
     中我们需要
     <strong>
      指定发布内容的数据
     </strong>
     。
    </p>
    <p>
     然后通过
     <code>
      Mqtt_SendPkt
     </code>
     发送数据。
    </p>
    <pre><code class="prism language-c">Qos<span class="token punctuation">:</span> <span class="token number">1</span>    Type<span class="token punctuation">:</span> <span class="token number">1</span>
Topic<span class="token punctuation">:</span> $dp
Pakect ID<span class="token punctuation">:</span> <span class="token number">1</span>
QoS<span class="token punctuation">:</span> <span class="token number">1</span>
Payload<span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span><span class="token string">"datastreams"</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">{<!-- --></span><span class="token string">"id"</span><span class="token punctuation">:</span><span class="token string">"temp"</span><span class="token punctuation">,</span><span class="token string">"datapoints"</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">{<!-- --></span><span class="token string">"value"</span><span class="token punctuation">:</span><span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{<!-- --></span><span class="token string">"id"</span><span class="token punctuation">:</span><span class="token string">"humi"</span><span class="token punctuation">,</span><span class="token string">"datapoints"</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">{<!-- --></span><span class="token string">"value"</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
before send
send one pkt
<span class="token number">32</span> <span class="token number">6</span>E 
<span class="token number">00</span> <span class="token number">03</span> <span class="token number">24</span> <span class="token number">64</span> <span class="token number">70</span> <span class="token number">00</span> <span class="token number">01</span> 
<span class="token number">01</span> <span class="token number">00</span> <span class="token number">64</span> <span class="token number">7</span>B <span class="token number">22</span> <span class="token number">64</span> <span class="token number">61</span> <span class="token number">74</span> <span class="token number">61</span> <span class="token number">73</span> <span class="token number">74</span> <span class="token number">72</span> <span class="token number">65</span> <span class="token number">61</span> <span class="token number">6</span>D <span class="token number">73</span> <span class="token number">22</span> <span class="token number">3</span>A <span class="token number">5</span>B <span class="token number">7</span>B <span class="token number">22</span> <span class="token number">69</span> <span class="token number">64</span> <span class="token number">22</span> <span class="token number">3</span>A <span class="token number">22</span> <span class="token number">74</span> <span class="token number">65</span> <span class="token number">6</span>D <span class="token number">70</span> <span class="token number">22</span> <span class="token number">2</span>C <span class="token number">22</span> <span class="token number">64</span> <span class="token number">61</span> <span class="token number">74</span> <span class="token number">61</span> <span class="token number">70</span> <span class="token number">6F</span> <span class="token number">69</span> <span class="token number">6</span>E <span class="token number">74</span> <span class="token number">73</span> <span class="token number">22</span> <span class="token number">3</span>A <span class="token number">5</span>B <span class="token number">7</span>B <span class="token number">22</span> <span class="token number">76</span> <span class="token number">61</span> <span class="token number">6</span>C <span class="token number">75</span> <span class="token number">65</span> <span class="token number">22</span> <span class="token number">3</span>A <span class="token number">36</span> <span class="token number">36</span> <span class="token number">7</span>D <span class="token number">5</span>D <span class="token number">7</span>D <span class="token number">2</span>C <span class="token number">7</span>B <span class="token number">22</span> <span class="token number">69</span> <span class="token number">64</span> <span class="token number">22</span> <span class="token number">3</span>A <span class="token number">22</span> <span class="token number">68</span> <span class="token number">75</span> <span class="token number">6</span>D <span class="token number">69</span> <span class="token number">22</span> <span class="token number">2</span>C <span class="token number">22</span> <span class="token number">64</span> <span class="token number">61</span> <span class="token number">74</span> <span class="token number">61</span> <span class="token number">70</span> <span class="token number">6F</span> <span class="token number">69</span> <span class="token number">6</span>E <span class="token number">74</span> <span class="token number">73</span> <span class="token number">22</span> <span class="token number">3</span>A <span class="token number">5</span>B <span class="token number">7</span>B <span class="token number">22</span> <span class="token number">76</span> <span class="token number">61</span> <span class="token number">6</span>C <span class="token number">75</span> <span class="token number">65</span> <span class="token number">22</span> <span class="token number">3</span>A <span class="token number">30</span> <span class="token number">7</span>D <span class="token number">5</span>D <span class="token number">7</span>D <span class="token number">5</span>D <span class="token number">7</span>D 
AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">112</span>


OK
<span class="token operator">&gt;</span>  SendCmd <span class="token number">443</span> cmd<span class="token punctuation">:</span>AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">112</span>
<span class="token punctuation">,</span>rsp<span class="token punctuation">:</span>AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">112</span>


OK
<span class="token operator">&gt;</span> 

sen
Recv <span class="token number">112</span> bytes


SEND OK

<span class="token operator">+</span>IPD<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">:</span>@
</code></pre>
    <blockquote>
     <p>
      <mark>
       OneNET 中规定
      </mark>
      ：设备使用 publish 报文来上传数据点，其中TopicName 为"
      <strong>
       $dp
      </strong>
      "（$dp 是系统上传数据点的指令，该报文Payload 部分中为json 格式数据。
     </p>
    </blockquote>
    <p>
     我们可以看到，其实更新数据流也相当于发布一个Topic 信息。
    </p>
    <p>
     将发送的信息转化后：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b2443c65ae4fd26d34e581ab6251119d.png">
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/cd5fabcd33970e35e4ebfa1246b9346e.gif#pic_center" width="500"/>
     </img>
    </p>
    <h3>
     <a id="_252">
     </a>
     五、心跳请求
    </h3>
    <pre><code class="prism language-c"><span class="token keyword">void</span> <span class="token function">Pingreq_MQTT</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{<!-- --></span>
	<span class="token function">MqttSample_CmdPing</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
	bytes <span class="token operator">=</span> <span class="token function">Mqtt_SendPkt</span><span class="token punctuation">(</span>ctx<span class="token operator">-&gt;</span>mqttctx<span class="token punctuation">,</span> ctx<span class="token operator">-&gt;</span>mqttbuf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">MqttBuffer_Reset</span><span class="token punctuation">(</span>ctx<span class="token operator">-&gt;</span>mqttbuf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     <code>
      MqttSample_CmdPing
     </code>
     是心跳包格式化函数，由于心跳请求只是一个"
     <strong>
      C000
     </strong>
     " 的双字节十六进制数据，故不需要带入其他参数。
    </p>
    <p>
     然后通过
     <code>
      Mqtt_SendPkt
     </code>
     发送数据。
    </p>
    <pre><code class="prism language-c">before send
send one pkt
C0 <span class="token number">00</span> 
AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">2</span>


OK
<span class="token operator">&gt;</span>  SendCmd <span class="token number">443</span> cmd<span class="token punctuation">:</span>AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">2</span>
<span class="token punctuation">,</span>rsp<span class="token punctuation">:</span>AT<span class="token operator">+</span>CIPSEND<span class="token operator">=</span><span class="token number">2</span>


OK
<span class="token operator">&gt;</span> 

send
Recv <span class="token number">2</span> bytes


SEND OK

<span class="token operator">+</span>IPD<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token operator">?</span>
</code></pre>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



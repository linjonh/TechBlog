---
title: 2024-04-11-新版Onenet云平台使用ESP8266-AT指令上报数据以及公网MQTT服务器连接测试
date: 2024-04-11 18:13:23 +0800
categories: [Onenet物联网]
tags: [服务器,数据库,运维]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=137613781
  alt: 新版Onenet云平台使用ESP8266-AT指令上报数据以及公网MQTT服务器连接测试
artid: 137613781
---
<span class="artid" style="display:none" artid=68747470733a2f2f626c6f:672e6373646e2e6e65742f627968796638333836323534372f:61727469636c652f64657461696c732f313337363133373831></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     #新版Onenet云平台使用（ESP8266 AT指令上报数据以及公网MQTT服务器连接测试）
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h2>
     1.上云方式：MQTT
    </h2>
    <p>
     参考：
    </p>
    <p>
     <a class="has-card" href="https://blog.csdn.net/lilbye/article/details/131770196" title="新版ONENET物联网开放平台AT+MQTT指令连接_at指令连接onenet的mqtt-CSDN博客">
      <span class="link-card-box">
       <span class="link-title">
        新版ONENET物联网开放平台AT+MQTT指令连接_at指令连接onenet的mqtt-CSDN博客
       </span>
       <span class="link-link">
        <img alt="icon-default.png?t=N7T8" class="link-link-icon" src="https://i-blog.csdnimg.cn/blog_migrate/003a2ce7eb50c2e24a8c624c260c5930.png">
         https://blog.csdn.net/lilbye/article/details/131770196
        </img>
       </span>
      </span>
     </a>
    </p>
    <p>
     <a class="has-card" href="https://www.iotword.com/17607.html#google_vignette" rel="nofollow" title="ESP8266-01s入门：AT指令讲解、上云与MQTT通信教程-物联沃-IOTWORD物联网">
      <span class="link-card-box">
       <span class="link-title">
        ESP8266-01s入门：AT指令讲解、上云与MQTT通信教程-物联沃-IOTWORD物联网
       </span>
       <span class="link-link">
        <img alt="icon-default.png?t=N7T8" class="link-link-icon" src="https://i-blog.csdnimg.cn/blog_migrate/003a2ce7eb50c2e24a8c624c260c5930.png">
         https://www.iotword.com/17607.html#google_vignette
        </img>
       </span>
      </span>
     </a>
    </p>
    <h2>
     2.前提：使用的ESP8266模块已经烧录MQTT固件
    </h2>
    <h2>
     3.在onenet平台创建设备并且发布，再在产品下创建设备（初次创建设备没有连接过显示为未激活）
    </h2>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/33ab5f7c256200bb2b97690a710d9723.png"/>
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/c0d1d0c9a2be29997e343f0f8e889148.png">
      <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/d4c9eab3fa0120563919943860bd95e3.png"/>
     </img>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/683f67b0dfa62bba9d654b1329a28e9c.png"/>
    </p>
    <h2>
     4.token算法详解 （新版ONENET MQTT）
    </h2>
    <p>
     <a class="has-card" href="https://open.iot.10086.cn/doc/mqtt/book/manual/auth/token.html" rel="nofollow" title="token算法_开发者文档_OneNET (10086.cn)">
      <span class="link-card-box">
       <span class="link-title">
        token算法_开发者文档_OneNET (10086.cn)
       </span>
       <span class="link-link">
        <img alt="icon-default.png?t=N7T8" class="link-link-icon" src="https://i-blog.csdnimg.cn/blog_migrate/003a2ce7eb50c2e24a8c624c260c5930.png">
         https://open.iot.10086.cn/doc/mqtt/book/manual/auth/token.html
        </img>
       </span>
      </span>
     </a>
    </p>
    <h3>
     （1）et参数可以用在线时间戳生成
    </h3>
    <p>
     <img alt="" height="882" src="https://i-blog.csdnimg.cn/blog_migrate/d295e1f6ab89e5921bbc3b39830b3d45.png" width="1200"/>
    </p>
    <h3>
     （2）token运算示例（这里有误，注意key这里填入的是
     <span style="color:#fe2c24;">
      <strong>
       设备密钥
      </strong>
     </span>
     ，不是accesskey）
    </h3>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/776c84ea7c97e1088fcbfcbf00eab8d6.png"/>
    </p>
    <h3>
     （3）AT指令联网，并且向设备上传一条数据
    </h3>
    <p>
     关于MQTT固件的指令解读
    </p>
    <p>
     <a class="has-card" href="https://docs.espressif.com/projects/esp-at/zh_CN/latest/esp32/AT_Command_Set/MQTT_AT_Commands.html#cmd-mqttconn" rel="nofollow" title="MQTT AT 命令集 - ESP32 - — ESP-AT 用户指南 latest 文档 (espressif.com)">
      <span class="link-card-box">
       <span class="link-title">
        MQTT AT 命令集 - ESP32 - — ESP-AT 用户指南 latest 文档 (espressif.com)
       </span>
       <span class="link-link">
        <img alt="icon-default.png?t=N7T8" class="link-link-icon" src="https://i-blog.csdnimg.cn/blog_migrate/003a2ce7eb50c2e24a8c624c260c5930.png"/>
        https://docs.espressif.com/projects/esp-at/zh_CN/latest/esp32/AT_Command_Set/MQTT_AT_Commands.html#cmd-mqttconn
       </span>
      </span>
     </a>
    </p>
    <blockquote>
     <p>
      1、AT    //测试指令
      <br/>
      <br/>
      2、AT+RST  //复位指令
      <br/>
      <br/>
      3、AT+CWMODE=1      //=1模式设置为station
      <br/>
      <br/>
      4、AT+CWDHCP=1,1    //启动DHCP
      <br/>
      <br/>
      5、AT+CWJAP=“WIFI名”，“密码”
      <br/>
      <br/>
      6、 AT+MQTTUSERCFG=0,1,"设备ID","产品ID","上面得到的token",0,0,""
      <br/>
      <br/>
      7、 AT+MQTTCONN=0,"mqtts.heclouds.com",1883,1
      <br/>
      <br/>
      8、 AT+MQTTSUB=0,"$sys/产品ID/设备ID/thing/property/post/reply",1
      <br/>
      <br/>
      9、AT+MQTTPUB=0,"$sys/产品ID/设备ID/thing/property/post","{\"id\":\"123\"\,\"params\":{\"属性标识符\":{\"value\":上传的数据}}}",0,0
     </p>
    </blockquote>
    <p>
     标识符为自己定义的，可以在下面处查看
     <img alt="" height="877" src="https://i-blog.csdnimg.cn/blog_migrate/6951ef5dab5635d4eb7958caa9bf90b3.png" width="1200"/>
    </p>
    <h2>
     5.MQTTX连接测试
    </h2>
    <p>
     参考：
    </p>
    <p>
     <a class="has-card" href="https://blog.csdn.net/qq_53502688/article/details/131484184" title="MQTT.fx和MQTTX 链接ONENET物联网开发平台避坑细节干货。_mqttx和mqttfx-CSDN博客">
      <span class="link-card-box">
       <span class="link-title">
        MQTT.fx和MQTTX 链接ONENET物联网开发平台避坑细节干货。_mqttx和mqttfx-CSDN博客
       </span>
       <span class="link-link">
        <img alt="icon-default.png?t=N7T8" class="link-link-icon" src="https://i-blog.csdnimg.cn/blog_migrate/003a2ce7eb50c2e24a8c624c260c5930.png"/>
        https://blog.csdn.net/qq_53502688/article/details/131484184
       </span>
      </span>
     </a>
    </p>
    <h3>
     （1）建立连接
    </h3>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/2d297ac95a99cd552224a00d85a61d08.png"/>
    </p>
    <h3>
     （2）订阅主题的主题为
    </h3>
    <blockquote>
     <p>
      $sys/产品ID/设备ID/thing/property/post/reply
     </p>
    </blockquote>
    <h3>
     （3）向主题发布内容，发布的主题为：（如果发布信息就断开连接，说明发送有问题）
    </h3>
    <blockquote>
     <p>
      $sys/产品ID/设备ID/thing/property/post
     </p>
    </blockquote>
    <p>
     <strong>
      <span style="color:#ff9900;">
       上传的数据符合JSON格式
      </span>
     </strong>
    </p>
    <p>
     <strong>
      <span style="color:#fe2c24;">
       向shuifei数据流上传一个数据24.79
      </span>
     </strong>
     ，注意上传的数据必须符合创建数据流（属性）时设定的值的范围。
    </p>
    <blockquote>
     <p>
      {
      <!-- -->
     </p>
     <p>
      "id": "123",
     </p>
     <p>
      "params": {
      <!-- -->
     </p>
     <p>
      "shuifei": {
      <!-- -->
     </p>
     <p>
      "value": 24.79
     </p>
     <p>
      }
     </p>
     <p>
      }
     </p>
     <p>
      }
     </p>
    </blockquote>
    <p>
     <span style="color:#fe2c24;">
      <strong>
       同时给shuifei和dianfei上传数据点（shuifei和dianfei是标识符，属性相当于旧版本的数据流）
      </strong>
     </span>
    </p>
    <blockquote>
     <p>
      {
      <!-- -->
     </p>
     <p>
      "id": "123",
     </p>
     <p>
      "params": {
      <!-- -->
     </p>
     <p>
      "shuifei": {
      <!-- -->
     </p>
     <p>
      "value": 24.79
     </p>
     <p>
      },
     </p>
     <p>
      "dianfei":{
      <!-- -->
     </p>
     <p>
      "value":37.31
     </p>
     <p>
      }
     </p>
     <p>
      }
     </p>
     <p>
      }
     </p>
    </blockquote>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/f103b1b3b392c31ddd192280bd834bae.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/00c566879254e1a3619199119255e85a.png"/>
    </p>
    <p>
     我们使用这种工具，选择JSON不选择JSON都没有问题，选择JSON只是为了验证JSON正确性，当然网上也有很多JSON格式校验工具，这些工具往往能够帮助整理JSON格式，使结构一目了然。
    </p>
    <p>
     <img alt="" height="761" src="https://i-blog.csdnimg.cn/blog_migrate/ed834383da04735f4b9a8fcc1d575096.png" width="1200"/>
    </p>
    <h2>
     6.单片机，WIFI模块上云需要注意的
    </h2>
    <p>
     没有集成wifi的单片机往往需要借助WIFI模块才能上云，单片机串口与WIFI模块相连，通过AT指令上云。注意发送数据时需要
     <strong>
      <span style="color:#fe2c24;">
       将引号转义
      </span>
     </strong>
     ，在此处有体现，这也是c语言基本常识
    </p>
    <blockquote>
     <p>
      9、AT+MQTTPUB=0,"$sys/产品ID/设备ID/thing/property/post","{\"id\":\"123\"\,\"params\":{\"属性标识符\":{\"value\":上传的数据}}}",0,0
     </p>
     <p>
     </p>
     <p>
      <span style="color:#ff9900;">
       <strong>
        "{\"id\":\"123\"\,\"params\":{\"属性标识符\":{\"value\":上传的数据}}}"
       </strong>
      </span>
     </p>
     <p>
     </p>
    </blockquote>
    <h2>
     7.云平台观察上传的数据流
    </h2>
    <p>
     <img alt="" height="1000" src="https://i-blog.csdnimg.cn/blog_migrate/af3ff9a9be759612a07034818a8b7ef4.png" width="1200"/>
    </p>
    <h2>
     8.云平台数据可视化
    </h2>
    <p>
     创建数据源
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/bcf1c7257642e96e89f654ee390d4e52.png"/>
    </p>
    <p>
     选择数据源
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/2c6212093571b890602a16d229d11c66.png"/>
    </p>
    <h2>
     9.ESP8266通过MQTT公网服务器进行通信
    </h2>
    <p>
     这个公网服务器不需要id，user，password随便填即可
    </p>
    <blockquote>
     <p>
      #设置ESP8266工作模式
      <br/>
      AT+CWMODE=1
      <br/>
      #连接wifi
      <br/>
      AT+CWJAP="wifi","password"
      <br/>
      #设置本机信息
      <br/>
      AT+MQTTUSERCFG=0,1,"id","uesr","password",0,0,""
      <br/>
      #连接MQTT服务器
      <br/>
      AT+MQTTCONN=0,"broker.mqttdashboard.com",1883,0
      <br/>
      #订阅主题
      <br/>
      AT+MQTTSUB=0,"test",1
      <br/>
      #发送消息（test为发布消息的主题,1为发布的消息）
      <br/>
      AT+MQTTPUB=0,"test","1",0,0
     </p>
    </blockquote>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/aa8d26bd19e74aa87d2899ea4c6be200.png"/>
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/777e0a9cbcdfe993f33a957735fefdd2.png"/>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/da103a619982da533a5c4c31a5543c1f.png"/>
    </p>
    <p>
    </p>
   </div>
  </div>
 </article>
</div>



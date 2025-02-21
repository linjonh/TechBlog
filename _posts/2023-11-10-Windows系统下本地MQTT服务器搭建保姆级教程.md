---
layout: post
title: 2023-11-10-Windows系统下本地MQTT服务器搭建保姆级教程
date: 2023-11-10 11:41:32 +0800
categories: [物联网通信协议]
tags: [windows,MQTT服务器本地搭建,保姆级]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=134328627
  alt: Windows系统下本地MQTT服务器搭建保姆级教程
artid: 134328627
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Windows系统下本地MQTT服务器搭建（保姆级教程）
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-dracula" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <h3>
     <a id="WindowsMQTT_0">
     </a>
     Windows系统下本地MQTT服务器搭建
    </h3>
    <h4>
     <a id="1emqx_1">
     </a>
     1.下载并安装emqx服务器
    </h4>
    <p>
     <strong>
      1. 访问
      <a href="https://www.emqx.io/zh" rel="nofollow">
       Eqmx官网
      </a>
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a264fd75dc1a2b5fee983cee66fb602b.png">
      <br/>
      <strong>
       2. 选中合适的MQTT服务器版本
      </strong>
      <br/>
      由于我们使用的是本地部署MQTT服务器，而且只使用基础功能的MQTT服务器功能，所以选中“大规模分布式MQTT消息服务器”即可，如下如图所示，点击下载按钮，下载。
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a60a44ad09b8164e32f796d55d887044.png">
       <br/>
       <strong>
        3. 选中“Windows”，下载
        <a href="https://www.emqx.com/zh/downloads/broker/5.3.0/emqx-5.3.0-windows-amd64.zip" rel="nofollow">
         “ emqx-5.3.0-windows-amd64.zip ”
        </a>
        ，如下图所示。
       </strong>
      </img>
     </img>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/6e8025dc7cb8c3da2391aba5f08c72d2.png"/>
    </p>
    <p>
     <strong>
      4. 在电脑任意一个盘，新建文件夹，例如“EMQX”文件，然后将下载的压缩文件解压，如下图所示。
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/11c159ce368ec5470523ab0b01743e58.png"/>
    </p>
    <h4>
     <a id="2emqxMQTT_14">
     </a>
     2.运行emqx服务器（即MQTT服务器），并登录服务器后管理页面。
    </h4>
    <p>
     <strong>
      1. 启动EMQX（即MQTT服务器）
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/25fe7f02b8c79ec7f24d1c4423e8bfd4.png">
      <br/>
      然后，在命令行输入“./emqx start”,即可启动MQTT服务器，如下图所示。
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/0adf413259638abb638e2f8cd18d33fa.png">
       <br/>
       <strong>
        2. 登录MQTT服务器后台管理界面
       </strong>
      </img>
     </img>
    </p>
    <p>
     <strong>
      ①通过浏览器访问
      <a href="http://localhost:18083/" rel="nofollow">
       http://localhost:18083/
      </a>
      （localhost 可替换为您的实际 IP 地址），如下图所示。
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/29241262a706f21fab40e511cfd3dbd5.png">
      <br/>
      <strong>
       ②输入默认账号和默认密码，登录MQTT服务器后台管里界面
      </strong>
      <br/>
      输入默认账号为“admin”，默认密码为“public”，然后点击登录按钮，进入MQTT服务器后台管里界面。
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/99307e1c1e4825d79f8245fc101cc69d.png">
       <br/>
       如果第一次使用，会提示“为了保护账户安全，请修改默认密码”，如下图所示，你可以选择“跳过”，或者修改密码。
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/bd57de0ef59cb1468c3d2c7482fdd92f.png"/>
       <br/>
       登录成功后，MQTT服务器后台管里界面，如下图所示。
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/164451f04a006a627ae5d8fec4a101c2.png"/>
      </img>
     </img>
    </p>
    <h4>
     <a id="3MQTT1MQTT2_30">
     </a>
     3.增加MQTT1和MQTT2用户。
    </h4>
    <p>
     <strong>
      1. 创建认证
     </strong>
     <br/>
     点击按钮创建认证，如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/35809bfe100f1ab10fc52439afa1a49c.png"/>
     <br/>
     认证方式选中“Password-Based”,即使用客户端用户名、Client ID与密码进行认证，如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/511b859df79a051e511799634a7149f1.png"/>
     <br/>
     “数据源”选中“内置数据库”，如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c6da1784cb368655fc191957d622026b.png"/>
     <br/>
     配置参数，账号类型选中“username”，密码加密方式选中“sha256”，加盐方式选中“suffix”，如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/0933960e452c56da75e8b62041aa695d.png"/>
     <br/>
     <strong>
      2.创建用户
     </strong>
     <br/>
     如下图所示，创建认证后，点击“用户管理”，进入用户管理界面。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/6234b244180e0cdf4175fd28ff0e275b.png"/>
     <br/>
     进入用户管理界面之后，点击“+”按钮，分别添加“MQTT1”和“MQTT2”用户，如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/bca85241f9ff6ed52f466ebd35d5e468.png"/>
     <br/>
     用户名分为“MQTT1”和“MQTT2”，密码都是“123456”，都是“超级管理员”，如下所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/7ce9861302aed8a43c43eb704e06bd08.png"/>
     <br/>
     创建完MQTT1和MQTT2用户后，用户界面如图下所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/315b31506fe735c249a6f460accc9c8f.png"/>
    </p>
    <h4>
     <a id="4MQTT_49">
     </a>
     <strong>
      4.测试本地部署的MQTT服务器
     </strong>
    </h4>
    <p>
     <strong>
      1. 下载EMQX的（
      <a href="https://www.emqx.com/zh/products/mqttx" rel="nofollow">
       MQTT客户端
      </a>
      ），如下图所示。
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/06d7ec3d788af87577ad861618c03074.png"/>
     <br/>
     <strong>
      2. 分别打开两个MQTT5.0客户端工具。
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f051974bf8923048cd478f9799e77986.png"/>
     <br/>
     <strong>
      3.将两个MQTT5.0客户端工具的语言设置为“简体中文”，步骤下图所示。
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a32112777b4b71fd3ac0f22dbbc49ffe.png"/>
     <br/>
     <strong>
      4. 新建MQTT1和MQTT2的用户连接
     </strong>
     <br/>
     分别点击客户端1和客户端2的新建连接按钮，如下图示所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/3868821ee9ab974aaf5fe5921b080585.png"/>
     <br/>
     <strong>
      5. 配置MQTT1和MQTT2的用户连接参数
     </strong>
     <br/>
     名称和Client ID可以任意填写，这里客户端1填写hao1，客户端2填写hao2，服务器地址都选中“mqtt://”并填写“127.0.0.1”，端口都是“1883”，用户名分别填写“MQTT1”和“MQTT2”，密码都是“123456”，MQTT版本都选中“3.1.1”，如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/88e8b8d6e0f41ae8a6609cf5966dc399.png"/>
     <br/>
     <strong>
      6.点击两个客户端的连接按钮，连接MQTT服务器，如下图所示
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c1c4cadafefaebed10852bf04169815f.png"/>
     <br/>
     <strong>
      7. 设置两个客户端的发布主题。
     </strong>
     <br/>
     客户端1的发布主题为“/MQTT1/pub”，
     <br/>
     发布的数据为
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">{<!-- --></span>
  <span class="token string">"wendu"</span><span class="token operator">:</span> <span class="token number">23.56</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     客户端2的发布主题为“/MQTT2/pub”，
     <br/>
     发布的数据为
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">{<!-- --></span>
  <span class="token string">"shidu"</span><span class="token operator">:</span> <span class="token number">77.56</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d53a9bf445ab6085b5cc5ebb51cba7b5.png"/>
     <br/>
     <strong>
      8.设置两个客户端的订阅主题。
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/83f69f65ea5b1d211fc23693d772dd26.png"/>
     <br/>
     设置订阅接收数据格式为JSON并且选中只显示已接收数据，如下图所示。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d906efaf4047532d2a508afffac61d7e.png"/>
     <br/>
     <strong>
      9. 分别点击两个客户端发布按钮。
     </strong>
     <br/>
     如下图所示，当我们点击客户端1的发布主题按钮时，在客户端2上的订阅主题接收到客户端1发布的主题的温度JSON数据，当我们点击客户端2的发布主题按钮时，在客户端1上的订阅主题接收到客户端2发布的主题的湿度JSON数据。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/817129a92fc11b7ce31c41bdfd351fe0.png"/>
    </p>
    <h4>
     <a id="5_88">
     </a>
     <strong>
      5.小结
     </strong>
    </h4>
    <p>
     本教程讲述了如何在Windows电脑本地上搭建MQTT服务器，怎样进入MQTT服务器后台管理界面，如何在MQTT服务器上添加用户，如何通过MQTT客户端连接MQTT服务器，并通过两个MQTT客户端演示了MQTT通信的简单发布主题和订阅主题。
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f34313534323531332f:61727469636c652f64657461696c732f313334333238363237

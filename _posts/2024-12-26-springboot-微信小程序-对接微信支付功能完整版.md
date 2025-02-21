---
layout: post
title: springboot-微信小程序-对接微信支付功能完整版
date: 2024-12-26 15:39:04 +0800
categories: [总结]
tags: [微信小程序,Springboot]
image:
    path: https://img-blog.csdnimg.cn/20190305182800718.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01hamtlcg==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150
    alt: springboot-微信小程序-对接微信支付功能完整版
artid: 88379695
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     springboot 微信小程序 对接微信支付功能(完整版)
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
    </p>
    <div class="toc">
     <h4>
      微信小程序对接微信支付功能
     </h4>
     <ul>
      <li>
       <ul>
        <li>
         <a href="#_3" rel="nofollow">
          业务流程时序图
         </a>
        </li>
        <li>
         <a href="#JAVA_7" rel="nofollow">
          JAVA版
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#1__8" rel="nofollow">
            1. 项目架构
           </a>
          </li>
          <li>
           <a href="#2_pomxml_10" rel="nofollow">
            2. pom.xml配置文件
           </a>
          </li>
          <li>
           <a href="#3__114" rel="nofollow">
            3. 小程序账号参数配置类
           </a>
          </li>
          <li>
           <a href="#4JAVA__156" rel="nofollow">
            4.JAVA 通用代码
           </a>
          </li>
          <li>
           <ul>
            <li>
             <a href="#41__157" rel="nofollow">
              4.1 工具类
             </a>
            </li>
            <li>
             <ul>
              <li>
               <a href="#411_IdGen_id_158" rel="nofollow">
                4.1.1 IdGen （id生成类）
               </a>
              </li>
              <li>
               <a href="#412_Render_199" rel="nofollow">
                4.1.2 Render(响应结果类)
               </a>
              </li>
              <li>
               <a href="#413_ResultCode___462" rel="nofollow">
                4.1.3 ResultCode 响应码
               </a>
              </li>
             </ul>
            </li>
            <li>
             <a href="#42_SDK_504" rel="nofollow">
              4.2 SDK类
             </a>
            </li>
            <li>
             <ul>
              <li>
               <a href="#421_HttpKit_507" rel="nofollow">
                4.2.1 HttpKit
               </a>
              </li>
              <li>
               <a href="#422_IOUtils_768" rel="nofollow">
                4.2.2 IOUtils
               </a>
              </li>
              <li>
               <a href="#423_PaymentApi_852" rel="nofollow">
                4.2.3 PaymentApi
               </a>
              </li>
              <li>
               <a href="#424__PaymentKit_1131" rel="nofollow">
                4.2.4 PaymentKit
               </a>
              </li>
              <li>
               <a href="#425_tool_1254" rel="nofollow">
                4.2.5 tool
               </a>
              </li>
              <li>
               <a href="#426_WXPayConstants_1568" rel="nofollow">
                4.2.6 WXPayConstants
               </a>
              </li>
              <li>
               <a href="#427_WXPayUtil_SDK_1627" rel="nofollow">
                4.2.7 WXPayUtil (官方SDK)
               </a>
              </li>
              <li>
               <a href="#428_xml_1941" rel="nofollow">
                4.2.8 xml解析类
               </a>
              </li>
             </ul>
            </li>
           </ul>
          </li>
          <li>
           <a href="#5JAVA_2153" rel="nofollow">
            5.JAVA业务代码
           </a>
          </li>
          <li>
           <ul>
            <li>
             <a href="#51__2154" rel="nofollow">
              5.1 控制器
             </a>
            </li>
            <li>
             <ul>
              <li>
               <a href="#511___2155" rel="nofollow">
                5.1.1 下充值订单
               </a>
              </li>
              <li>
               <a href="#512__2215" rel="nofollow">
                5.1.2 小程序回调控制器
               </a>
              </li>
             </ul>
            </li>
            <li>
             <a href="#52__2287" rel="nofollow">
              5.2 工具类
             </a>
            </li>
            <li>
             <a href="#53_API_2361" rel="nofollow">
              5.3 业务层，调用下订单的API
             </a>
            </li>
            <li>
             <a href="#54__RechargeDto__Bean_2461" rel="nofollow">
              5.4 实体 RechargeDto （接口参数的实体Bean）
             </a>
            </li>
           </ul>
          </li>
         </ul>
        </li>
        <li>
         <a href="#_2507" rel="nofollow">
          小程序版
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#1_2508" rel="nofollow">
            1.创建小程序项目
           </a>
          </li>
          <li>
           <a href="#2___2513" rel="nofollow">
            2. 创建相关的目录文件 如下
           </a>
          </li>
          <li>
           <a href="#3_util_2518" rel="nofollow">
            3. util目录
           </a>
          </li>
          <li>
           <ul>
            <li>
             <ul>
              <li>
               <a href="#31_datajs_2519" rel="nofollow">
                3.1 data.js
               </a>
              </li>
              <li>
               <a href="#32_networkjs_2536" rel="nofollow">
                3.2 network.js
               </a>
              </li>
             </ul>
            </li>
           </ul>
          </li>
          <li>
           <a href="#4_demo_2587" rel="nofollow">
            4. demo下的文件内容
           </a>
          </li>
          <li>
           <ul>
            <li>
             <ul>
              <li>
               <a href="#41_rechargejs_2588" rel="nofollow">
                4.1 recharge.js
               </a>
              </li>
              <li>
               <a href="#42_rechargewxml_2768" rel="nofollow">
                4.2 recharge.wxml
               </a>
              </li>
              <li>
               <a href="#43_rechargewxss_2792" rel="nofollow">
                4.3 recharge.wxss
               </a>
              </li>
             </ul>
            </li>
           </ul>
          </li>
          <li>
           <a href="#5_2902" rel="nofollow">
            5.页面效果
           </a>
          </li>
          <li>
           <a href="#6API_2904" rel="nofollow">
            6.相关API:
           </a>
          </li>
          <li>
           <ul>
            <li>
             <a href="#61_code_2905" rel="nofollow">
              6.1 小程序内调用登录接口，获取临时登录凭证code
             </a>
            </li>
            <li>
             <a href="#62API_2918" rel="nofollow">
              6.2小程序调用支付API
             </a>
            </li>
            <li>
             <ul>
              <li>
               <ul>
                <li>
                 <a href="#621__2920" rel="nofollow">
                  6.2.1 参数说明
                 </a>
                </li>
                <li>
                 <a href="#622__2922" rel="nofollow">
                  6.2.2 小程序代码
                 </a>
                </li>
               </ul>
              </li>
             </ul>
            </li>
           </ul>
          </li>
         </ul>
        </li>
        <li>
         <a href="#_2941" rel="nofollow">
          参考链接
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h3>
     <a id="_3">
     </a>
     业务流程时序图
    </h3>
    <p>
     地址：
     <a href="https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_4&amp;index=3" rel="nofollow">
      https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_4&amp;index=3
     </a>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/21fb063ec63414286689ccba0926b512.jpeg"/>
    </p>
    <h3>
     <a id="JAVA_7">
     </a>
     JAVA版
    </h3>
    <h4>
     <a id="1__8">
     </a>
     1. 项目架构
    </h4>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/397c3bbf4dc8fb8a965b0a7ff977d8cb.png"/>
    </p>
    <h4>
     <a id="2_pomxml_10">
     </a>
     2. pom.xml配置文件
    </h4>
    <p>
     springboot项目pom.xml配置文件：
    </p>
    <pre><code class="prism language-xml"><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.1.3.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.majker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>wxPayDemo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>wxPayDemo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>Demo project for Spring Boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>commons-lang3.version</span><span class="token punctuation">&gt;</span></span>3.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>commons-lang3.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- tools version setting --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>commons-io.version</span><span class="token punctuation">&gt;</span></span>2.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>commons-io.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- lombok插件 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lombok.version</span><span class="token punctuation">&gt;</span></span>1.16.18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lombok.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.apache.httpcomponents/httpclient --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.httpcomponents<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>httpclient<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.5.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.slf4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>slf4j-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.7.21<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.swagger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>swagger-annotations<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.5.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- fastjson json--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>fastjson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.40<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-lang3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>${commons-lang3.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--log--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>${lombok.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- GENERAL UTILS begin --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>commons-io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>${commons-io.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre>
    <h4>
     <a id="3__114">
     </a>
     3. 小程序账号参数配置类
    </h4>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>config<span class="token punctuation">;</span>

<span class="token comment">/****************************************************
 *
 *   微信小程序 配置
 *
 *
 * @author majker
 * @date 2019-02-25 10:17
 * @version 1.0
 **************************************************/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WxProgramPayConfig</span> <span class="token punctuation">{<!-- --></span>

    <span class="token comment">/**
     * AppID(小程序ID)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String APPID <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * AppSecret(小程序密钥)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SECRET<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> String MCH_ID <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * 回调地址
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String NOTIFY_URL <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> String KEY <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre>
    <p>
     参数详情请看下图,(来源：小程序账号申请微信支付过程中获取的)
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/993c83506521887645a31538e68800c8.png"/>
    </p>
    <h4>
     <a id="4JAVA__156">
     </a>
     4.JAVA 通用代码
    </h4>
    <h5>
     <a id="41__157">
     </a>
     4.1 工具类
    </h5>
    <h6>
     <a id="411_IdGen_id_158">
     </a>
     4.1.1 IdGen （id生成类）
    </h6>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>util<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>Lazy<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span>Service<span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Serializable<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>SecureRandom<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>UUID<span class="token punctuation">;</span>

 <span class="token comment">/****************************************************
  *
  * 封装各种生成唯一性ID算法的工具类.
  *
  * @author majker
  * @date: 2016-01-15
  * @version 1.0
  **************************************************/</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Lazy</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IdGen</span>  <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{<!-- --></span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> SecureRandom random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SecureRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">/**
	 * 封装JDK自带的UUID, 通过Random数字生成, 中间无-分割.
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
		<span class="token keyword">return</span> UUID<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">"-"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/**
	 * 使用SecureRandom随机生成Long. 
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">randomLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
		<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>random<span class="token punctuation">.</span><span class="token function">nextLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre>
    <h6>
     <a id="412_Render_199">
     </a>
     4.1.2 Render(响应结果类)
    </h6>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>util<span class="token punctuation">;</span>

<span class="token keyword">import</span> com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>fastjson<span class="token punctuation">.</span>JSON<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>JsonIgnore<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Serializable<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span>Field<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>*<span class="token punctuation">;</span>

<span class="token comment">/****************************************************
 *
 *  响应结果
 *
 * @author majker
 * @date: 2018/2/10
 * @version 1.0
 **************************************************/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Render</span><span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{<!-- --></span>

    <span class="token keyword">private</span> String msg<span class="token punctuation">;</span>

    <span class="token keyword">private</span> T data<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> code<span class="token punctuation">;</span>

    <span class="token keyword">private</span> Boolean error<span class="token punctuation">;</span>

    <span class="token keyword">private</span> Long timestamp<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> Map map<span class="token punctuation">;</span>


    <span class="token keyword">public</span> String <span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> T <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Boolean <span class="token function">getError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> error<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Long <span class="token function">getTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> timestamp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">fail</span><span class="token punctuation">(</span>String message<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Render</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        msg<span class="token punctuation">.</span>msg <span class="token operator">=</span> message<span class="token punctuation">;</span>
        msg<span class="token punctuation">.</span><span class="token function">code</span><span class="token punctuation">(</span>ResultCode<span class="token punctuation">.</span>EXCEPTION<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        msg<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">.</span><span class="token function">putTimeStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">fail</span><span class="token punctuation">(</span>ResultCode resultCode<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Render</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        msg<span class="token punctuation">.</span>msg <span class="token operator">=</span> resultCode<span class="token punctuation">.</span><span class="token function">msg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        msg<span class="token punctuation">.</span><span class="token function">code</span><span class="token punctuation">(</span>resultCode<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        msg<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">.</span><span class="token function">putTimeStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">ok</span><span class="token punctuation">(</span>null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">putTimeStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>timestamp <span class="token operator">=</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">ok</span><span class="token punctuation">(</span>T data<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Render</span><span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">putTimeStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">msg</span><span class="token punctuation">(</span>ResultCode<span class="token punctuation">.</span>SUCCESS<span class="token punctuation">.</span><span class="token function">msg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">code</span><span class="token punctuation">(</span>ResultCode<span class="token punctuation">.</span>SUCCESS<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">ok</span><span class="token punctuation">(</span>T data<span class="token punctuation">,</span> String msg<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Render</span><span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">putTimeStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">msg</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">code</span><span class="token punctuation">(</span>ResultCode<span class="token punctuation">.</span>SUCCESS<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> Map <span class="token function">okMap</span><span class="token punctuation">(</span>Object data<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"code"</span><span class="token punctuation">,</span> ResultCode<span class="token punctuation">.</span>SUCCESS<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span> ResultCode<span class="token punctuation">.</span>SUCCESS<span class="token punctuation">.</span><span class="token function">msg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"timestamp"</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> map<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> Map <span class="token function">failMap</span><span class="token punctuation">(</span>String msg<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span> null<span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"code"</span><span class="token punctuation">,</span> ResultCode<span class="token punctuation">.</span>EXCEPTION<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"timestamp"</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> map<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> Map <span class="token function">failMap</span><span class="token punctuation">(</span>ResultCode resultCode<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span> null<span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"code"</span><span class="token punctuation">,</span> resultCode<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span> resultCode<span class="token punctuation">.</span><span class="token function">msg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"timestamp"</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> map<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">data</span><span class="token punctuation">(</span>T data<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">code</span><span class="token punctuation">(</span><span class="token keyword">int</span> code<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">error</span><span class="token punctuation">(</span>Boolean error<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>error <span class="token operator">=</span> error<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">msg</span><span class="token punctuation">(</span>String msg<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 过滤字段：指定需要序列化的字段
     */</span>
    <span class="token annotation punctuation">@JsonIgnore</span>
    <span class="token keyword">private</span> <span class="token keyword">transient</span> Map<span class="token operator">&lt;</span>Class<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> Set<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span><span class="token operator">&gt;</span> includes<span class="token punctuation">;</span>

    <span class="token comment">/**
     * 过滤字段：指定不需要序列化的字段
     */</span>
    <span class="token annotation punctuation">@JsonIgnore</span>
    <span class="token keyword">private</span> <span class="token keyword">transient</span> Map<span class="token operator">&lt;</span>Class<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> Set<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span><span class="token operator">&gt;</span> excludes<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">Render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">include</span><span class="token punctuation">(</span>Class<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">&gt;</span> type<span class="token punctuation">,</span> String<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> fields<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">include</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> Arrays<span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>fields<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">include</span><span class="token punctuation">(</span>Class<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">&gt;</span> type<span class="token punctuation">,</span> Collection<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span> fields<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>includes <span class="token operator">==</span> null<span class="token punctuation">)</span>
            includes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fields <span class="token operator">==</span> null <span class="token operator">||</span> fields<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        fields<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>field <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                String tmp<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> field<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"[.]"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
                    Field field1 <span class="token operator">=</span> type<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span>tmp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>field1 <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                        <span class="token function">include</span><span class="token punctuation">(</span>field1<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tmp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
                <span class="token function">getStringListFromMap</span><span class="token punctuation">(</span>includes<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">exclude</span><span class="token punctuation">(</span>Class <span class="token class-name">type</span><span class="token punctuation">,</span> Collection<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span> fields<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>excludes <span class="token operator">==</span> null<span class="token punctuation">)</span>
            excludes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fields <span class="token operator">==</span> null <span class="token operator">||</span> fields<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        fields<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>field <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                String tmp<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> field<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"[.]"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
                    Field field1 <span class="token operator">=</span> type<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span>tmp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>field1 <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                        <span class="token function">exclude</span><span class="token punctuation">(</span>field1<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tmp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
                <span class="token function">getStringListFromMap</span><span class="token punctuation">(</span>excludes<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">exclude</span><span class="token punctuation">(</span>Collection<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span> fields<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>excludes <span class="token operator">==</span> null<span class="token punctuation">)</span>
            excludes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fields <span class="token operator">==</span> null <span class="token operator">||</span> fields<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        Class <span class="token class-name">type</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> null<span class="token punctuation">)</span> type <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token function">exclude</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fields<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">include</span><span class="token punctuation">(</span>Collection<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span> fields<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>includes <span class="token operator">==</span> null<span class="token punctuation">)</span>
            includes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fields <span class="token operator">==</span> null <span class="token operator">||</span> fields<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        Class <span class="token class-name">type</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> null<span class="token punctuation">)</span> type <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token function">include</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fields<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">exclude</span><span class="token punctuation">(</span>Class <span class="token class-name">type</span><span class="token punctuation">,</span> String<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> fields<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">exclude</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> Arrays<span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>fields<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">exclude</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> fields<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">exclude</span><span class="token punctuation">(</span>Arrays<span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>fields<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Render<span class="token generics function"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">include</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> fields<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">include</span><span class="token punctuation">(</span>Arrays<span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>fields<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> Set<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span> <span class="token function">getStringListFromMap</span><span class="token punctuation">(</span>Map<span class="token operator">&lt;</span>Class<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> Set<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span><span class="token operator">&gt;</span> map<span class="token punctuation">,</span> Class <span class="token class-name">type</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">computeIfAbsent</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> k <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> String <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> JSON<span class="token punctuation">.</span><span class="token function">toJSONStringWithDateFormat</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Map<span class="token operator">&lt;</span>Class<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> Set<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span><span class="token operator">&gt;</span> <span class="token function">getExcludes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> excludes<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> Map<span class="token operator">&lt;</span>Class<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> Set<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span><span class="token operator">&gt;</span> <span class="token function">getIncludes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> includes<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre>
    <h6>
     <a id="413_ResultCode___462">
     </a>
     4.1.3 ResultCode 响应码
    </h6>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>util<span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Serializable<span class="token punctuation">;</span>
 <span class="token comment">/****************************************************
  *
  *  响应码
  *
  * @author majker
  * @date: 2019/3/10 
  * @version 1.0
  **************************************************/</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> ResultCode <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{<!-- --></span>
    <span class="token comment">/** 成功 */</span>  
    <span class="token function">SUCCESS</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">"成功"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">/** 发生异常 */</span>  
    <span class="token function">EXCEPTION</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">"发生异常"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">NO_AUTH</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">,</span><span class="token string">"请重新登录"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">FORBIDDEN</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">,</span><span class="token string">"未认证"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">NULL</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">,</span><span class="token string">"禁止"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">NOT_BIND</span><span class="token punctuation">(</span><span class="token number">1234</span><span class="token punctuation">,</span><span class="token string">"请先绑定手机号"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">NOT_FOUND</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span><span class="token string">"未找到相应文件"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">ResultCode</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">,</span> String msg<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> value<span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
      
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> val<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token keyword">public</span> String <span class="token function">msg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>  
        <span class="token keyword">return</span> msg<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
      
    <span class="token keyword">private</span> <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token keyword">private</span> String msg<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
</code></pre>
    <h5>
     <a id="42_SDK_504">
     </a>
     4.2 SDK类
    </h5>
    <p>
     使用的官方的sdk和自己编写的代码，相关类如下，下载下方给的demo
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/914e9c522f7f009b01bb71e6e5714df5.png"/>
    </p>
    <h6>
     <a id="421_HttpKit_507">
     </a>
     4.2.1 HttpKit
    </h6>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">;</span>


<span class="token keyword">import</span> javax<span class="token punctuation">.</span>net<span class="token punctuation">.</span>ssl<span class="token punctuation">.</span>*<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpServletRequest<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>*<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>HttpURLConnection<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>URL<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>URLEncoder<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>*<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>cert<span class="token punctuation">.</span>CertificateException<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>cert<span class="token punctuation">.</span>X509Certificate<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Iterator<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HttpKit</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String GET <span class="token operator">=</span> <span class="token string">"GET"</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String POST <span class="token operator">=</span> <span class="token string">"POST"</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> String CHARSET <span class="token operator">=</span> <span class="token string">"UTF-8"</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> SSLSocketFactory sslSocketFactory <span class="token operator">=</span> <span class="token function">initSSLSocketFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> TrustAnyHostnameVerifier trustAnyHostnameVerifier <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpKit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">TrustAnyHostnameVerifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//    public static final OkHttp3Delegate delegate = new OkHttp3Delegate();</span>

    <span class="token keyword">private</span> <span class="token function">HttpKit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> SSLSocketFactory <span class="token function">initSSLSocketFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            TrustManager<span class="token punctuation">[</span><span class="token punctuation">]</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TrustManager</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{<!-- --></span><span class="token keyword">new</span> <span class="token class-name">HttpKit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">TrustAnyTrustManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
            SSLContext sslContext <span class="token operator">=</span> SSLContext<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">"TLS"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            sslContext<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">(</span>KeyManager<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>null<span class="token punctuation">,</span> e<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">SecureRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> sslContext<span class="token punctuation">.</span><span class="token function">getSocketFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> var2<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setCharSet</span><span class="token punctuation">(</span>String charSet<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>charSet<span class="token operator">!=</span>null <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>charSet<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"charSet can not be blank."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
            CHARSET <span class="token operator">=</span> charSet<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> HttpURLConnection <span class="token function">getHttpConnection</span><span class="token punctuation">(</span>String url<span class="token punctuation">,</span> String method<span class="token punctuation">,</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> headers<span class="token punctuation">)</span> <span class="token keyword">throws</span> IOException<span class="token punctuation">,</span> NoSuchAlgorithmException<span class="token punctuation">,</span> NoSuchProviderException<span class="token punctuation">,</span> KeyManagementException <span class="token punctuation">{<!-- --></span>
        URL _url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        HttpURLConnection conn <span class="token operator">=</span> <span class="token punctuation">(</span>HttpURLConnection<span class="token punctuation">)</span>_url<span class="token punctuation">.</span><span class="token function">openConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>conn <span class="token keyword">instanceof</span> <span class="token class-name">HttpsURLConnection</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span>HttpsURLConnection<span class="token punctuation">)</span>conn<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSSLSocketFactory</span><span class="token punctuation">(</span>sslSocketFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span>HttpsURLConnection<span class="token punctuation">)</span>conn<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setHostnameVerifier</span><span class="token punctuation">(</span>trustAnyHostnameVerifier<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        conn<span class="token punctuation">.</span><span class="token function">setRequestMethod</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">setDoOutput</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">setDoInput</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">setConnectTimeout</span><span class="token punctuation">(</span><span class="token number">19000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">setReadTimeout</span><span class="token punctuation">(</span><span class="token number">19000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">setRequestProperty</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"application/x-www-form-urlencoded"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">setRequestProperty</span><span class="token punctuation">(</span><span class="token string">"AuthUser-Agent"</span><span class="token punctuation">,</span> <span class="token string">"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.146 Safari/537.36"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>headers <span class="token operator">!=</span> null <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>headers<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            Iterator i$ <span class="token operator">=</span> headers<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">while</span><span class="token punctuation">(</span>i$<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                Map<span class="token punctuation">.</span>Entry entry <span class="token operator">=</span> <span class="token punctuation">(</span>Map<span class="token punctuation">.</span>Entry<span class="token punctuation">)</span>i$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                conn<span class="token punctuation">.</span><span class="token function">setRequestProperty</span><span class="token punctuation">(</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>String<span class="token punctuation">)</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> conn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">get</span><span class="token punctuation">(</span>String url<span class="token punctuation">,</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> queryParas<span class="token punctuation">,</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> headers<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        HttpURLConnection conn <span class="token operator">=</span> null<span class="token punctuation">;</span>
        String e<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            conn <span class="token operator">=</span> <span class="token function">getHttpConnection</span><span class="token punctuation">(</span><span class="token function">buildUrlWithQueryString</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> queryParas<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"GET"</span><span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
            conn<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            e <span class="token operator">=</span> <span class="token function">readResponseString</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> var8<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>var8<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>conn <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                conn<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> e<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">get</span><span class="token punctuation">(</span>String url<span class="token punctuation">,</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> queryParas<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> queryParas<span class="token punctuation">,</span> <span class="token punctuation">(</span>Map<span class="token punctuation">)</span>null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">get</span><span class="token punctuation">(</span>String url<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">(</span>Map<span class="token punctuation">)</span>null<span class="token punctuation">,</span> <span class="token punctuation">(</span>Map<span class="token punctuation">)</span>null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">post</span><span class="token punctuation">(</span>String url<span class="token punctuation">,</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> queryParas<span class="token punctuation">,</span> String data<span class="token punctuation">,</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> headers<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        HttpURLConnection conn <span class="token operator">=</span> null<span class="token punctuation">;</span>

        String var6<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            conn <span class="token operator">=</span> <span class="token function">getHttpConnection</span><span class="token punctuation">(</span><span class="token function">buildUrlWithQueryString</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> queryParas<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"POST"</span><span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
            conn<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            OutputStream e <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            e<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span>CHARSET<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            e<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            e<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            var6 <span class="token operator">=</span> <span class="token function">readResponseString</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> var10<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>var10<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>conn <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                conn<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> var6<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">post</span><span class="token punctuation">(</span>String url<span class="token punctuation">,</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> queryParas<span class="token punctuation">,</span> String data<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> queryParas<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">(</span>Map<span class="token punctuation">)</span>null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">post</span><span class="token punctuation">(</span>String url<span class="token punctuation">,</span> String data<span class="token punctuation">,</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> headers<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">(</span>Map<span class="token punctuation">)</span>null<span class="token punctuation">,</span> data<span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">post</span><span class="token punctuation">(</span>String url<span class="token punctuation">,</span> String data<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">(</span>Map<span class="token punctuation">)</span>null<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">(</span>Map<span class="token punctuation">)</span>null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> String <span class="token function">readResponseString</span><span class="token punctuation">(</span>HttpURLConnection conn<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        StringBuilder sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        InputStream inputStream <span class="token operator">=</span> null<span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            inputStream <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            BufferedReader e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">,</span> CHARSET<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            String line <span class="token operator">=</span> null<span class="token punctuation">;</span>

            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            String var5 <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> var5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> var14<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>var14<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>inputStream <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
                    inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> var13<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> String <span class="token function">buildUrlWithQueryString</span><span class="token punctuation">(</span>String url<span class="token punctuation">,</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> queryParas<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>queryParas <span class="token operator">!=</span> null <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>queryParas<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            StringBuilder sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">boolean</span> isFirst<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"?"</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                isFirst <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"?"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
                isFirst <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            String key<span class="token punctuation">;</span>
            String value<span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span>Iterator i$ <span class="token operator">=</span> queryParas<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i$<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"="</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                Map<span class="token punctuation">.</span>Entry entry <span class="token operator">=</span> <span class="token punctuation">(</span>Map<span class="token punctuation">.</span>Entry<span class="token punctuation">)</span>i$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>isFirst<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                    isFirst <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
                    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&amp;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                key <span class="token operator">=</span> <span class="token punctuation">(</span>String<span class="token punctuation">)</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                value <span class="token operator">=</span> <span class="token punctuation">(</span>String<span class="token punctuation">)</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>value<span class="token operator">!=</span>null <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>value<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                    <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
                        value <span class="token operator">=</span> URLEncoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> CHARSET<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnsupportedEncodingException</span> var9<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>var9<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">return</span> url<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">readData</span><span class="token punctuation">(</span>HttpServletRequest request<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        BufferedReader br <span class="token operator">=</span> null<span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            StringBuilder e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            br <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            String line <span class="token operator">=</span> null<span class="token punctuation">;</span>

            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                e<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            line <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> line<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> var12<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>var12<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>br <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
                    br<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> var11<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/** @deprecated */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">readIncommingRequestData</span><span class="token punctuation">(</span>HttpServletRequest request<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">readData</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">TrustAnyTrustManager</span> <span class="token keyword">implements</span> <span class="token class-name">X509TrustManager</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">private</span> <span class="token function">TrustAnyTrustManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> X509Certificate<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getAcceptedIssuers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">return</span> null<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkClientTrusted</span><span class="token punctuation">(</span>X509Certificate<span class="token punctuation">[</span><span class="token punctuation">]</span> chain<span class="token punctuation">,</span> String authType<span class="token punctuation">)</span> <span class="token keyword">throws</span> CertificateException <span class="token punctuation">{<!-- --></span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkServerTrusted</span><span class="token punctuation">(</span>X509Certificate<span class="token punctuation">[</span><span class="token punctuation">]</span> chain<span class="token punctuation">,</span> String authType<span class="token punctuation">)</span> <span class="token keyword">throws</span> CertificateException <span class="token punctuation">{<!-- --></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">TrustAnyHostnameVerifier</span> <span class="token keyword">implements</span> <span class="token class-name">HostnameVerifier</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">private</span> <span class="token function">TrustAnyHostnameVerifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">verify</span><span class="token punctuation">(</span>String hostname<span class="token punctuation">,</span> SSLSession session<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre>
    <h6>
     <a id="422_IOUtils_768">
     </a>
     4.2.2 IOUtils
    </h6>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">;</span>

<span class="token keyword">import</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Charsets<span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>*<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span>Charset<span class="token punctuation">;</span>

<span class="token comment">/**
 * IOUtils
 * @author majker
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">IOUtils</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEFAULT_BUFFER_SIZE <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * closeQuietly
     * @param closeable 自动关闭
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">closeQuietly</span><span class="token punctuation">(</span>Closeable closeable<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>closeable <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                closeable<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> ioe<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token comment">// ignore</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * InputStream to String utf-8
     *
     * @param input  the &lt;code&gt;InputStream&lt;/code&gt; to read from
     * @return the requested String
     * @throws NullPointerException if the input is null
     * @throws IOException if an I/O error occurs
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">toString</span><span class="token punctuation">(</span>InputStream input<span class="token punctuation">)</span> <span class="token keyword">throws</span> IOException <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> Charsets<span class="token punctuation">.</span>UTF_8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * InputStream to String
     *
     * @param input  the &lt;code&gt;InputStream&lt;/code&gt; to read from
     * @param charset  the &lt;code&gt;Charset&lt;/code&gt;
     * @return the requested String
     * @throws NullPointerException if the input is null
     * @throws IOException if an I/O error occurs
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">toString</span><span class="token punctuation">(</span>InputStream input<span class="token punctuation">,</span> Charset charset<span class="token punctuation">)</span> <span class="token keyword">throws</span> IOException <span class="token punctuation">{<!-- --></span>
        InputStreamReader in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> charset<span class="token punctuation">)</span><span class="token punctuation">;</span>
        StringBuffer out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">char</span><span class="token punctuation">[</span>DEFAULT_BUFFER_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">;</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            out<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        IOUtils<span class="token punctuation">.</span><span class="token function">closeQuietly</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        IOUtils<span class="token punctuation">.</span><span class="token function">closeQuietly</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> out<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * InputStream to File
     * @param input  the &lt;code&gt;InputStream&lt;/code&gt; to read from
     * @param file the File to write
     * @throws IOException id异常
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">toFile</span><span class="token punctuation">(</span>InputStream input<span class="token punctuation">,</span> File file<span class="token punctuation">)</span> <span class="token keyword">throws</span> IOException <span class="token punctuation">{<!-- --></span>
        OutputStream os <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> bytesRead <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">byte</span><span class="token punctuation">[</span>DEFAULT_BUFFER_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>bytesRead <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> DEFAULT_BUFFER_SIZE<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bytesRead<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        IOUtils<span class="token punctuation">.</span><span class="token function">closeQuietly</span><span class="token punctuation">(</span>os<span class="token punctuation">)</span><span class="token punctuation">;</span>
        IOUtils<span class="token punctuation">.</span><span class="token function">closeQuietly</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre>
    <h6>
     <a id="423_PaymentApi_852">
     </a>
     4.2.3 PaymentApi
    </h6>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>UnsupportedEncodingException<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>HashMap<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map<span class="token punctuation">;</span>

 <span class="token comment">/****************************************************
  *
  * 微信支付api
  *
  * @author majker
  * @version 1.0
  **************************************************/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentApi</span> <span class="token punctuation">{<!-- --></span>

    <span class="token keyword">private</span> <span class="token function">PaymentApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span>

    <span class="token comment">// 文档地址：https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> String unifiedOrderUrl <span class="token operator">=</span> <span class="token string">"https://api.mch.weixin.qq.com/pay/unifiedorder"</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * 交易类型枚举
     * WAP的文档：https://pay.weixin.qq.com/wiki/doc/api/wap.php?chapter=15_1
     * @author L.cm
     * &lt;pre&gt;
     * email: 596392912@qq.com
     * site: http://www.dreamlu.net
     * date: 2015年10月27日 下午9:46:27
     * &lt;/pre&gt;
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">enum</span> TradeType <span class="token punctuation">{<!-- --></span>
        JSAPI<span class="token punctuation">,</span> NATIVE<span class="token punctuation">,</span> APP<span class="token punctuation">,</span> WAP<span class="token punctuation">,</span> MWEB
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 统一下单
     * @param params 参数map
     * @return String
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">pushOrder</span><span class="token punctuation">(</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> HttpKit<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>unifiedOrderUrl<span class="token punctuation">,</span> PaymentKit<span class="token punctuation">.</span><span class="token function">toXml</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">request</span><span class="token punctuation">(</span>String url<span class="token punctuation">,</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"nonce_str"</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String sign <span class="token operator">=</span> PaymentKit<span class="token punctuation">.</span><span class="token function">createSign</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"sign"</span><span class="token punctuation">,</span> sign<span class="token punctuation">)</span><span class="token punctuation">;</span>
        String xmlStr <span class="token operator">=</span> HttpKit<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> PaymentKit<span class="token punctuation">.</span><span class="token function">toXml</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> PaymentKit<span class="token punctuation">.</span><span class="token function">xmlToMap</span><span class="token punctuation">(</span>xmlStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 文档说明：https://pay.weixin.qq.com/wiki/doc/api/wap.php?chapter=15_4
     * &lt;pre&gt;
     * @param appId 公众账号ID         是    String(32)    wx8888888888888888    微信分配的公众账号ID
     * 随机字符串         noncestr    是    String(32)    5K8264ILTKCH16CQ2502SI8ZNMTM67VS    随机字符串，不长于32位。推荐随机数生成算法
     * 订单详情扩展字符串    package        是    String(32)    WAP    扩展字段，固定填写WAP
     * @param prepayId 预支付交易会话标识    是    String(64)    wx201410272009395522657a690389285100    微信统一下单接口返回的预支付回话标识，用于后续接口调用中使用，该值有效期为2小时
     * 签名                 sign        是    String(32)    C380BEC2BFD727A4B6845133519F3AD6    签名，详见签名生成算法
     * 时间戳            timestamp    是    String(32)    1414561699    当前的时间，其他详见时间戳规则
     * @param paternerKey 签名密匙
     * &lt;/pre&gt;
     * @return {String}
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">getDeepLink</span><span class="token punctuation">(</span>String appId<span class="token punctuation">,</span> String prepayId<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"appid"</span><span class="token punctuation">,</span> appId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"noncestr"</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"package"</span><span class="token punctuation">,</span> <span class="token string">"WAP"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"prepayid"</span><span class="token punctuation">,</span> prepayId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"timestamp"</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span> <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String sign <span class="token operator">=</span> PaymentKit<span class="token punctuation">.</span><span class="token function">createSign</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"sign"</span><span class="token punctuation">,</span> sign<span class="token punctuation">)</span><span class="token punctuation">;</span>

        String string1 <span class="token operator">=</span> PaymentKit<span class="token punctuation">.</span><span class="token function">packageSign</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        String string2 <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span> string2 <span class="token operator">=</span> PaymentKit<span class="token punctuation">.</span><span class="token function">urlEncode</span><span class="token punctuation">(</span>string1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnsupportedEncodingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token string">"weixin://wap/pay?"</span> <span class="token operator">+</span> string2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 文档地址：https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_2</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> String orderQueryUrl <span class="token operator">=</span> <span class="token string">"https://api.mch.weixin.qq.com/pay/orderquery"</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * 根据商户订单号查询信息
     * @param appid 公众账号ID
     * @param mch_id 商户号
     * @param paternerKey 商户密钥
     * @param transaction_id 微信订单号
     * @return 回调信息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">queryByTransactionId</span><span class="token punctuation">(</span>String appid<span class="token punctuation">,</span> String mch_id<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">,</span> String transaction_id<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"appid"</span><span class="token punctuation">,</span> appid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"mch_id"</span><span class="token punctuation">,</span> mch_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"transaction_id"</span><span class="token punctuation">,</span> transaction_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span>orderQueryUrl<span class="token punctuation">,</span> params<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 根据商户订单号查询信息
     * @param appid 公众账号ID
     * @param mch_id 商户号
     * @param paternerKey 商户密钥
     * @param out_trade_no 商户订单号
     * @return 回调信息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">queryByOutTradeNo</span><span class="token punctuation">(</span>String appid<span class="token punctuation">,</span> String mch_id<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">,</span> String out_trade_no<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"appid"</span><span class="token punctuation">,</span> appid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"mch_id"</span><span class="token punctuation">,</span> mch_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"out_trade_no"</span><span class="token punctuation">,</span> out_trade_no<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span>orderQueryUrl<span class="token punctuation">,</span> params<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 文档地址：https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_3</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> String closeOrderUrl <span class="token operator">=</span> <span class="token string">"https://api.mch.weixin.qq.com/pay/closeorder"</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * 关闭订单
     * @param appid 公众账号ID
     * @param mch_id 商户号
     * @param paternerKey 商户密钥
     * @param out_trade_no 商户订单号
     * @return 回调信息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">closeOrder</span><span class="token punctuation">(</span>String appid<span class="token punctuation">,</span> String mch_id<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">,</span> String out_trade_no<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"appid"</span><span class="token punctuation">,</span> appid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"mch_id"</span><span class="token punctuation">,</span> mch_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"out_trade_no"</span><span class="token punctuation">,</span> out_trade_no<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span>closeOrderUrl<span class="token punctuation">,</span> params<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 申请退款文档地址：https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_4</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String refundUrl <span class="token operator">=</span> <span class="token string">"https://api.mch.weixin.qq.com/secapi/pay/refund"</span><span class="token punctuation">;</span>


    <span class="token comment">// 查询退款文档地址：https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_5</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> String refundQueryUrl <span class="token operator">=</span> <span class="token string">"https://api.mch.weixin.qq.com/pay/refundquery"</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">baseRefundQuery</span><span class="token punctuation">(</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params<span class="token punctuation">,</span> String appid<span class="token punctuation">,</span> String mch_id<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"appid"</span><span class="token punctuation">,</span> appid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"mch_id"</span><span class="token punctuation">,</span> mch_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span>refundQueryUrl<span class="token punctuation">,</span> params<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 根据微信订单号查询退款
     * @param appid 公众账号ID
     * @param mch_id 商户号
     * @param paternerKey 商户密钥
     * @param transaction_id 微信订单号
     * @return map
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">refundQueryByTransactionId</span><span class="token punctuation">(</span>String appid<span class="token punctuation">,</span> String mch_id<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">,</span> String transaction_id<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"transaction_id"</span><span class="token punctuation">,</span> transaction_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">baseRefundQuery</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> appid<span class="token punctuation">,</span> mch_id<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 根据微信订单号查询退款
     * @param appid 公众账号ID
     * @param mch_id 商户号
     * @param paternerKey 商户密钥
     * @param out_trade_no 商户订单号
     * @return map
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">refundQueryByOutTradeNo</span><span class="token punctuation">(</span>String appid<span class="token punctuation">,</span> String mch_id<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">,</span> String out_trade_no<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"out_trade_no"</span><span class="token punctuation">,</span> out_trade_no<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">baseRefundQuery</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> appid<span class="token punctuation">,</span> mch_id<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 根据微信订单号查询退款
     * @param appid 公众账号ID
     * @param mch_id 商户号
     * @param paternerKey 商户密钥
     * @param out_refund_no 商户退款单号
     * @return map
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">refundQueryByOutRefundNo</span><span class="token punctuation">(</span>String appid<span class="token punctuation">,</span> String mch_id<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">,</span> String out_refund_no<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"out_refund_no"</span><span class="token punctuation">,</span> out_refund_no<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">baseRefundQuery</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> appid<span class="token punctuation">,</span> mch_id<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 根据微信订单号查询退款
     * @param appid 公众账号ID
     * @param mch_id 商户号
     * @param paternerKey 商户密钥
     * @param refund_id 微信退款单号
     * @return map
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">refundQueryByRefundId</span><span class="token punctuation">(</span>String appid<span class="token punctuation">,</span> String mch_id<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">,</span> String refund_id<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"refund_id"</span><span class="token punctuation">,</span> refund_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">baseRefundQuery</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> appid<span class="token punctuation">,</span> mch_id<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> String downloadBillUrl <span class="token operator">=</span> <span class="token string">"https://api.mch.weixin.qq.com/pay/downloadbill"</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * &lt;pre&gt;
     * ALL，返回当日所有订单信息，默认值
     * SUCCESS，返回当日成功支付的订单
     * REFUND，返回当日退款订单
     * REVOKED，已撤销的订单
     * &lt;/pre&gt;
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">enum</span> BillType <span class="token punctuation">{<!-- --></span>
        ALL<span class="token punctuation">,</span> SUCCESS<span class="token punctuation">,</span> REFUND<span class="token punctuation">,</span> REVOKED
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 下载对账单
     * &lt;pre&gt;
     * 公众账号ID    appid        是    String(32)    wx8888888888888888    微信分配的公众账号ID（企业号corpid即为此appId）
     * 商户号        mch_id        是    String(32)    1900000109    微信支付分配的商户号
     * 设备号        device_info    否    String(32)    013467007045764    微信支付分配的终端设备号
     * 随机字符串    nonce_str    是    String(32)    5K8264ILTKCH16CQ2502SI8ZNMTM67VS    随机字符串，不长于32位。推荐随机数生成算法
     * 签名        sign        是    String(32)    C380BEC2BFD727A4B6845133519F3AD6    签名，详见签名生成算法
     * 对账单日期    bill_date    是    String(8)    20140603    下载对账单的日期，格式：20140603
     * 账单类型        bill_type    否    String(8)
     * &lt;/pre&gt;
     * @param appid 公众账号ID
     * @param mch_id 商户号
     * @param paternerKey 签名密匙
     * @param billDate 对账单日期
     * @return String
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">downloadBill</span><span class="token punctuation">(</span>String appid<span class="token punctuation">,</span> String mch_id<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">,</span> String billDate<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">downloadBill</span><span class="token punctuation">(</span>appid<span class="token punctuation">,</span> mch_id<span class="token punctuation">,</span> paternerKey<span class="token punctuation">,</span> billDate<span class="token punctuation">,</span> null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 下载对账单
     * &lt;pre&gt;
     * 公众账号ID    appid        是    String(32)    wx8888888888888888    微信分配的公众账号ID（企业号corpid即为此appId）
     * 商户号        mch_id        是    String(32)    1900000109    微信支付分配的商户号
     * 设备号        device_info    否    String(32)    013467007045764    微信支付分配的终端设备号
     * 随机字符串    nonce_str    是    String(32)    5K8264ILTKCH16CQ2502SI8ZNMTM67VS    随机字符串，不长于32位。推荐随机数生成算法
     * 签名        sign        是    String(32)    C380BEC2BFD727A4B6845133519F3AD6    签名，详见签名生成算法
     * 对账单日期    bill_date    是    String(8)    20140603    下载对账单的日期，格式：20140603
     * 账单类型        bill_type    否    String(8)
     * &lt;/pre&gt;
     * @param appid 公众账号ID
     * @param mch_id 商户号
     * @param paternerKey 签名密匙
     * @param billDate 对账单日期
     * @param billType 账单类型
     * @return String
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">downloadBill</span><span class="token punctuation">(</span>String appid<span class="token punctuation">,</span> String mch_id<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">,</span> String billDate<span class="token punctuation">,</span> BillType billType<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"appid"</span><span class="token punctuation">,</span> appid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"mch_id"</span><span class="token punctuation">,</span> mch_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"nonce_str"</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"bill_date"</span><span class="token punctuation">,</span> billDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>null <span class="token operator">!=</span> billType<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"bill_type"</span><span class="token punctuation">,</span> billType<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
            params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"bill_type"</span><span class="token punctuation">,</span> BillType<span class="token punctuation">.</span>ALL<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        String sign <span class="token operator">=</span> PaymentKit<span class="token punctuation">.</span><span class="token function">createSign</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"sign"</span><span class="token punctuation">,</span> sign<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> HttpKit<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>downloadBillUrl<span class="token punctuation">,</span> PaymentKit<span class="token punctuation">.</span><span class="token function">toXml</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


</code></pre>
    <h6>
     <a id="424__PaymentKit_1131">
     </a>
     4.2.4 PaymentKit
    </h6>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">;</span>


<span class="token keyword">import</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Charsets<span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>UnsupportedEncodingException<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>URLEncoder<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map<span class="token punctuation">.</span>Entry<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>TreeMap<span class="token punctuation">;</span>


 <span class="token comment">/****************************************************
  *
  *  微信支付的统一下单工具类
  *
  * @author majker
  * @version 1.0
  **************************************************/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentKit</span> <span class="token punctuation">{<!-- --></span>

    <span class="token comment">/**
     * 组装签名的字段
     * @param params 参数
     * @param urlEncoder 是否urlEncoder
     * @return String
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">packageSign</span><span class="token punctuation">(</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params<span class="token punctuation">,</span> <span class="token keyword">boolean</span> urlEncoder<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 先将参数以其参数名的字典序升序进行排序</span>
        TreeMap<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> sortedParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 遍历排序后的字典，将所有参数按"key=value"格式拼接在一起</span>
        StringBuilder sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> first <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>Entry<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> param <span class="token operator">:</span> sortedParams<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            String value <span class="token operator">=</span> param<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>Tools<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>first<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                first <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&amp;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>param<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>urlEncoder<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span> value <span class="token operator">=</span> <span class="token function">urlEncode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnsupportedEncodingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * urlEncode
     * @param src 微信参数
     * @return String
     * @throws UnsupportedEncodingException 编码错误
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">urlEncode</span><span class="token punctuation">(</span>String src<span class="token punctuation">)</span> <span class="token keyword">throws</span> UnsupportedEncodingException <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> URLEncoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>src<span class="token punctuation">,</span> Charsets<span class="token punctuation">.</span>UTF_8<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"+"</span><span class="token punctuation">,</span> <span class="token string">"%20"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 生成签名
     * @param params 参数
     * @param paternerKey 支付密钥
     * @return sign
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">createSign</span><span class="token punctuation">(</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 生成签名前先去除sign</span>
        params<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"sign"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String stringA <span class="token operator">=</span> <span class="token function">packageSign</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String stringSignTemp <span class="token operator">=</span> stringA <span class="token operator">+</span> <span class="token string">"&amp;key="</span> <span class="token operator">+</span> paternerKey<span class="token punctuation">;</span>
        <span class="token keyword">return</span> Tools<span class="token punctuation">.</span><span class="token function">md5</span><span class="token punctuation">(</span>stringSignTemp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 支付异步通知时校验sign
     * @param params 参数
     * @param paternerKey 支付密钥
     * @return {boolean}
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">verifyNotify</span><span class="token punctuation">(</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params<span class="token punctuation">,</span> String paternerKey<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
        String sign <span class="token operator">=</span> params<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"sign"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String localSign <span class="token operator">=</span> PaymentKit<span class="token punctuation">.</span><span class="token function">createSign</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> paternerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sign<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>localSign<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 微信下单，map to xml
     * @param params 参数
     * @return String
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">toXml</span><span class="token punctuation">(</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        StringBuilder xml <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xml<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;xml&gt;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>Entry<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> params<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            String key   <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            String value <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 略过空值</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>Tools<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
            xml<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&gt;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                xml<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            xml<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;/"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&gt;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        xml<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;/xml&gt;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xml<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 针对支付的xml，没有嵌套节点的简单处理
     * @param xmlStr xml字符串
     * @return map集合
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">xmlToMap</span><span class="token punctuation">(</span>String xmlStr<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        XmlHelper xmlHelper <span class="token operator">=</span> XmlHelper<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>xmlStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xmlHelper<span class="token punctuation">.</span><span class="token function">toMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre>
    <h6>
     <a id="425_tool_1254">
     </a>
     4.2.5 tool
    </h6>
    <blockquote>
     <p>
      常用工具
     </p>
    </blockquote>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>MessageDigest<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>text<span class="token punctuation">.</span>ParseException<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>text<span class="token punctuation">.</span>SimpleDateFormat<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>*<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span>Matcher<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span>Pattern<span class="token punctuation">;</span>

 <span class="token comment">/****************************************************
  *
  *  常用工具
  *
  * @author majker
  * @version 1.0
  **************************************************/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Tools</span> <span class="token punctuation">{<!-- --></span>
	
	<span class="token comment">/**
	 * 随机生成六位数验证码 
	 * @return
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getRandomNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		 Random r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 <span class="token keyword">return</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">900000</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">100000</span><span class="token punctuation">;</span><span class="token comment">//(Math.random()*(999999-100000)+100000)</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/**
	 * 检测字符串是否不为空(null,"","null")
	 * @param s
	 * @return 不为空则返回true，否则返回false
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">notEmpty</span><span class="token punctuation">(</span>String s<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		<span class="token keyword">return</span> s<span class="token operator">!=</span>null <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token string">"null"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/**
	 * 检测字符串是否为空(null,"","null")
	 * @param s
	 * @return 为空则返回true，不否则返回false
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>String s<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		<span class="token keyword">return</span> s<span class="token operator">==</span>null <span class="token operator">||</span> <span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">"null"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/**
	 * 字符串转换为字符串数组
	 * @param str 字符串
	 * @param splitRegex 分隔符
	 * @return
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> String<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">str2StrArray</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span>String splitRegex<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
			<span class="token keyword">return</span> null<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>splitRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/**
	 * 用默认的分隔符(,)将字符串转换为字符串数组
	 * @param str	字符串
	 * @return
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> String<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">str2StrArray</span><span class="token punctuation">(</span>String str<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		<span class="token keyword">return</span> <span class="token function">str2StrArray</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token string">",\\s*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/**
	 * 按照yyyy-MM-dd HH:mm:ss的格式，日期转字符串
	 * @param date
	 * @return yyyy-MM-dd HH:mm:ss
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">date2Str</span><span class="token punctuation">(</span>Date date<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		<span class="token keyword">return</span> <span class="token function">date2Str</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/**
	 * 按照yyyy-MM-dd HH:mm:ss的格式，字符串转日期
	 * @param date
	 * @return
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> Date <span class="token function">str2Date</span><span class="token punctuation">(</span>String date<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">notEmpty</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
			SimpleDateFormat sdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
				<span class="token keyword">return</span> sdf<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ParseException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{<!-- --></span>
			<span class="token keyword">return</span> null<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/**
	 * 按照参数format的格式，日期转字符串
	 * @param date
	 * @param format
	 * @return
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">date2Str</span><span class="token punctuation">(</span>Date date<span class="token punctuation">,</span>String format<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>date<span class="token operator">!=</span>null<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
			SimpleDateFormat sdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> sdf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{<!-- --></span>
			<span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/**
	 * 把时间根据时、分、秒转换为时间段
	 * @param StrDate
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">getTimes</span><span class="token punctuation">(</span>String StrDate<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		String resultTimes <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
		
		SimpleDateFormat df <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    Date now<span class="token punctuation">;</span>

	    <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
	    	now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	Date date<span class="token operator">=</span>df<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>StrDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	<span class="token keyword">long</span> times <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>date<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	<span class="token keyword">long</span> day  <span class="token operator">=</span>  times<span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	<span class="token keyword">long</span> hour <span class="token operator">=</span> <span class="token punctuation">(</span>times<span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token operator">-</span>day<span class="token operator">*</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	<span class="token keyword">long</span> min  <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>times<span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-</span>day<span class="token operator">*</span><span class="token number">24</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">-</span>hour<span class="token operator">*</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	<span class="token keyword">long</span> sec  <span class="token operator">=</span> <span class="token punctuation">(</span>times<span class="token operator">/</span><span class="token number">1000</span><span class="token operator">-</span>day<span class="token operator">*</span><span class="token number">24</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">-</span>hour<span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">-</span>min<span class="token operator">*</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        
	    	StringBuffer sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	<span class="token comment">//sb.append("发表于：");</span>
	    	<span class="token keyword">if</span><span class="token punctuation">(</span>hour<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
	    		sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>hour<span class="token operator">+</span><span class="token string">"小时前"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>min<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
	    		sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>min<span class="token operator">+</span><span class="token string">"分钟前"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	<span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{<!-- --></span>
	    		sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>sec<span class="token operator">+</span><span class="token string">"秒前"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	<span class="token punctuation">}</span>
	    		
	    	resultTimes <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ParseException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
	    	e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	    
	    <span class="token keyword">return</span> resultTimes<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/**
	  * 验证邮箱
	  * @param email
	  * @return
	  */</span>
	 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">checkEmail</span><span class="token punctuation">(</span>String email<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
	  <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	  <span class="token keyword">try</span><span class="token punctuation">{<!-- --></span>
	    String check <span class="token operator">=</span> <span class="token string">"^([a-z0-9A-Z]+[-|_|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$"</span><span class="token punctuation">;</span>
	    Pattern regex <span class="token operator">=</span> Pattern<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>check<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    Matcher matcher <span class="token operator">=</span> regex<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    flag <span class="token operator">=</span> matcher<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	   <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>Exception e<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
	    flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	   <span class="token punctuation">}</span>
	  <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span>
	
	 <span class="token comment">/**
	  * 验证手机号码
	  * @return
	  */</span>
	 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">checkMobileNumber</span><span class="token punctuation">(</span>String mobileNumber<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		 Pattern p <span class="token operator">=</span> null<span class="token punctuation">;</span>
		 Matcher m <span class="token operator">=</span> null<span class="token punctuation">;</span>
		 <span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		 p <span class="token operator">=</span> Pattern<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">"^[1][3,4,5,7,8][0-9]{9}$"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 验证手机号</span>
		 m <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>mobileNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
		 b <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 <span class="token keyword">return</span> b<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span>

	<span class="token comment">/**
	 * 将驼峰转下划线
	 * @param param
	 * @return
     */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">camelToUnderline</span><span class="token punctuation">(</span>String param<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>param<span class="token operator">==</span>null<span class="token operator">||</span><span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>param<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
			<span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">int</span> len<span class="token operator">=</span>param<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		StringBuilder sb<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
			<span class="token keyword">char</span> c<span class="token operator">=</span>param<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>Character<span class="token punctuation">.</span><span class="token function">isUpperCase</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
				sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"_"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>Character<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{<!-- --></span>
				sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/**
	 * 去掉下划线并将下划线后的首字母转为大写
	 * @param str
	 * @return
     */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">transformStr</span><span class="token punctuation">(</span>String str<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		<span class="token comment">//去掉数据库字段的下划线</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"_"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
			String<span class="token punctuation">[</span><span class="token punctuation">]</span> names <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"_"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			String firstPart <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			String otherPart <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> names<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
				String word <span class="token operator">=</span> names<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replaceFirst</span><span class="token punctuation">(</span>names<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> names<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				otherPart <span class="token operator">+=</span> word<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			str <span class="token operator">=</span> firstPart <span class="token operator">+</span> otherPart<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> str<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/**
	 * 转换为map
	 * @param list
	 * @return
     */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> List<span class="token operator">&lt;</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span>Object<span class="token punctuation">&gt;</span></span><span class="token operator">&gt;</span> <span class="token function">transformMap</span><span class="token punctuation">(</span>List<span class="token operator">&lt;</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span>Object<span class="token punctuation">&gt;</span></span><span class="token operator">&gt;</span> list<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
		List<span class="token operator">&lt;</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span>Object<span class="token punctuation">&gt;</span></span><span class="token operator">&gt;</span> resultMapList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> Object<span class="token punctuation">&gt;</span></span> map <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
			Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span>Object<span class="token punctuation">&gt;</span></span> tempMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span>String s <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
				tempMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token function">transformStr</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			resultMapList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tempMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> resultMapList<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">clearHtml</span><span class="token punctuation">(</span>String content<span class="token punctuation">,</span><span class="token keyword">int</span> p<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>null<span class="token operator">==</span>content<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">==</span>p<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>

		Pattern p_script<span class="token punctuation">;</span>
		Matcher m_script<span class="token punctuation">;</span>
		Pattern p_style<span class="token punctuation">;</span>
		Matcher m_style<span class="token punctuation">;</span>
		Pattern p_html<span class="token punctuation">;</span>
		Matcher m_html<span class="token punctuation">;</span>

		<span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
			String regEx_script <span class="token operator">=</span> <span class="token string">"&lt;[\\s]*?script[^&gt;]*?&gt;[\\s\\S]*?&lt;[\\s]*?\\/[\\s]*?script[\\s]*?&gt;"</span><span class="token punctuation">;</span>
			<span class="token comment">//定义script的正则表达式{或&lt;script[^&gt;]*?&gt;[\\s\\S]*?&lt;\\/script&gt; }</span>
			String regEx_style <span class="token operator">=</span> <span class="token string">"&lt;[\\s]*?style[^&gt;]*?&gt;[\\s\\S]*?&lt;[\\s]*?\\/[\\s]*?style[\\s]*?&gt;"</span><span class="token punctuation">;</span>
			<span class="token comment">//定义style的正则表达式{或&lt;style[^&gt;]*?&gt;[\\s\\S]*?&lt;\\/style&gt; }</span>
			String regEx_html <span class="token operator">=</span> <span class="token string">"&lt;[^&gt;]+&gt;"</span><span class="token punctuation">;</span> <span class="token comment">//定义HTML标签的正则表达式</span>

			p_script <span class="token operator">=</span> Pattern<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>regEx_script<span class="token punctuation">,</span>Pattern<span class="token punctuation">.</span>CASE_INSENSITIVE<span class="token punctuation">)</span><span class="token punctuation">;</span>
			m_script <span class="token operator">=</span> p_script<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
			content <span class="token operator">=</span> m_script<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//过滤script标签</span>
			p_style <span class="token operator">=</span> Pattern<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>regEx_style<span class="token punctuation">,</span>Pattern<span class="token punctuation">.</span>CASE_INSENSITIVE<span class="token punctuation">)</span><span class="token punctuation">;</span>
			m_style <span class="token operator">=</span> p_style<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
			content <span class="token operator">=</span> m_style<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//过滤style标签</span>

			p_html <span class="token operator">=</span> Pattern<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>regEx_html<span class="token punctuation">,</span>Pattern<span class="token punctuation">.</span>CASE_INSENSITIVE<span class="token punctuation">)</span><span class="token punctuation">;</span>
			m_html <span class="token operator">=</span> p_html<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>

			content <span class="token operator">=</span> m_html<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//过滤html标签</span>
		<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>Exception e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
			<span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span>p<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
			content <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"..."</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{<!-- --></span>
			content <span class="token operator">=</span> content <span class="token operator">+</span> <span class="token string">"..."</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> content<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">md5</span><span class="token punctuation">(</span>String str<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
		<span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
			MessageDigest md <span class="token operator">=</span> MessageDigest<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">"MD5"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			md<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">byte</span> b<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> md<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">int</span> i<span class="token punctuation">;</span>

			StringBuffer buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> offset <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> offset <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>length<span class="token punctuation">;</span> offset<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
				i <span class="token operator">=</span> b<span class="token punctuation">[</span>offset<span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
					i <span class="token operator">+=</span> <span class="token number">256</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span>
					buf<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				buf<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>Integer<span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			str <span class="token operator">=</span> buf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> str<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre>
    <h6>
     <a id="426_WXPayConstants_1568">
     </a>
     4.2.6 WXPayConstants
    </h6>
    <blockquote>
     <p>
      微信支付的一些常量配置
     </p>
    </blockquote>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">;</span>

<span class="token comment">/**
 * 常量
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WXPayConstants</span> <span class="token punctuation">{<!-- --></span>

    <span class="token keyword">public</span> <span class="token keyword">enum</span> SignType <span class="token punctuation">{<!-- --></span>
        MD5<span class="token punctuation">,</span> HMACSHA256
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String DOMAIN_API <span class="token operator">=</span> <span class="token string">"api.mch.weixin.qq.com"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String DOMAIN_API2 <span class="token operator">=</span> <span class="token string">"api2.mch.weixin.qq.com"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String DOMAIN_APIHK <span class="token operator">=</span> <span class="token string">"apihk.mch.weixin.qq.com"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String DOMAIN_APIUS <span class="token operator">=</span> <span class="token string">"apius.mch.weixin.qq.com"</span><span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String FAIL     <span class="token operator">=</span> <span class="token string">"FAIL"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SUCCESS  <span class="token operator">=</span> <span class="token string">"SUCCESS"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String HMACSHA256 <span class="token operator">=</span> <span class="token string">"HMAC-SHA256"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String MD5 <span class="token operator">=</span> <span class="token string">"MD5"</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String FIELD_SIGN <span class="token operator">=</span> <span class="token string">"sign"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String FIELD_SIGN_TYPE <span class="token operator">=</span> <span class="token string">"sign_type"</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String MICROPAY_URL_SUFFIX     <span class="token operator">=</span> <span class="token string">"/pay/micropay"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String UNIFIEDORDER_URL_SUFFIX <span class="token operator">=</span> <span class="token string">"/pay/unifiedorder"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String ORDERQUERY_URL_SUFFIX   <span class="token operator">=</span> <span class="token string">"/pay/orderquery"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String REVERSE_URL_SUFFIX      <span class="token operator">=</span> <span class="token string">"/secapi/pay/reverse"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String CLOSEORDER_URL_SUFFIX   <span class="token operator">=</span> <span class="token string">"/pay/closeorder"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String REFUND_URL_SUFFIX       <span class="token operator">=</span> <span class="token string">"/secapi/pay/refund"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String REFUNDQUERY_URL_SUFFIX  <span class="token operator">=</span> <span class="token string">"/pay/refundquery"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String DOWNLOADBILL_URL_SUFFIX <span class="token operator">=</span> <span class="token string">"/pay/downloadbill"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String REPORT_URL_SUFFIX       <span class="token operator">=</span> <span class="token string">"/payitil/report"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SHORTURL_URL_SUFFIX     <span class="token operator">=</span> <span class="token string">"/tools/shorturl"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String AUTHCODETOOPENID_URL_SUFFIX <span class="token operator">=</span> <span class="token string">"/tools/authcodetoopenid"</span><span class="token punctuation">;</span>

    <span class="token comment">// sandbox</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SANDBOX_MICROPAY_URL_SUFFIX     <span class="token operator">=</span> <span class="token string">"/sandboxnew/pay/micropay"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SANDBOX_UNIFIEDORDER_URL_SUFFIX <span class="token operator">=</span> <span class="token string">"/sandboxnew/pay/unifiedorder"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SANDBOX_ORDERQUERY_URL_SUFFIX   <span class="token operator">=</span> <span class="token string">"/sandboxnew/pay/orderquery"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SANDBOX_REVERSE_URL_SUFFIX      <span class="token operator">=</span> <span class="token string">"/sandboxnew/secapi/pay/reverse"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SANDBOX_CLOSEORDER_URL_SUFFIX   <span class="token operator">=</span> <span class="token string">"/sandboxnew/pay/closeorder"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SANDBOX_REFUND_URL_SUFFIX       <span class="token operator">=</span> <span class="token string">"/sandboxnew/secapi/pay/refund"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SANDBOX_REFUNDQUERY_URL_SUFFIX  <span class="token operator">=</span> <span class="token string">"/sandboxnew/pay/refundquery"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SANDBOX_DOWNLOADBILL_URL_SUFFIX <span class="token operator">=</span> <span class="token string">"/sandboxnew/pay/downloadbill"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SANDBOX_REPORT_URL_SUFFIX       <span class="token operator">=</span> <span class="token string">"/sandboxnew/payitil/report"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SANDBOX_SHORTURL_URL_SUFFIX     <span class="token operator">=</span> <span class="token string">"/sandboxnew/tools/shorturl"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String SANDBOX_AUTHCODETOOPENID_URL_SUFFIX <span class="token operator">=</span> <span class="token string">"/sandboxnew/tools/authcodetoopenid"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>


</code></pre>
    <h6>
     <a id="427_WXPayUtil_SDK_1627">
     </a>
     4.2.7 WXPayUtil (官方SDK)
    </h6>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">;</span>

<span class="token keyword">import</span> org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span>Logger<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span>LoggerFactory<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>Node<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>NodeList<span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>ByteArrayInputStream<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>InputStream<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>StringWriter<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>MessageDigest<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Arrays<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>HashMap<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Set<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>UUID<span class="token punctuation">;</span>

<span class="token keyword">import</span> javax<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>Mac<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>spec<span class="token punctuation">.</span>SecretKeySpec<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>parsers<span class="token punctuation">.</span>DocumentBuilder<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>parsers<span class="token punctuation">.</span>DocumentBuilderFactory<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>transform<span class="token punctuation">.</span>OutputKeys<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>transform<span class="token punctuation">.</span>Transformer<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>transform<span class="token punctuation">.</span>TransformerFactory<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>transform<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>DOMSource<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>transform<span class="token punctuation">.</span>stream<span class="token punctuation">.</span>StreamResult<span class="token punctuation">;</span>

 <span class="token comment">/****************************************************
  *
  *
  *
  * @author majker
  * @date: 2019/3/7
  * @version 1.0
  **************************************************/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WXPayUtil</span> <span class="token punctuation">{<!-- --></span>

    <span class="token comment">/**
     * XML格式字符串转换为Map
     *
     * @param strXML XML字符串
     * @return XML数据转换后的Map
     * @throws Exception
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">xmlToMap</span><span class="token punctuation">(</span>String strXML<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            DocumentBuilderFactory documentBuilderFactory <span class="token operator">=</span> DocumentBuilderFactory<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            DocumentBuilder documentBuilder <span class="token operator">=</span> documentBuilderFactory<span class="token punctuation">.</span><span class="token function">newDocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            InputStream stream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>strXML<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>Document doc <span class="token operator">=</span> documentBuilder<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>stream<span class="token punctuation">)</span><span class="token punctuation">;</span>
            doc<span class="token punctuation">.</span><span class="token function">getDocumentElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            NodeList nodeList <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">getDocumentElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getChildNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> idx <span class="token operator">&lt;</span> nodeList<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>idx<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                Node node <span class="token operator">=</span> nodeList<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">getNodeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> Node<span class="token punctuation">.</span>ELEMENT_NODE<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                    org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>Element element <span class="token operator">=</span> <span class="token punctuation">(</span>org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>Element<span class="token punctuation">)</span> node<span class="token punctuation">;</span>
                    data<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span><span class="token function">getNodeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> element<span class="token punctuation">.</span><span class="token function">getTextContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
                stream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token comment">// do nothing</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> data<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            WXPayUtil<span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"Invalid XML, can not convert to map. Error message: {}. XML content: {}"</span><span class="token punctuation">,</span> ex<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> strXML<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> ex<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 将Map转换为XML格式的字符串
     *
     * @param data Map类型数据
     * @return XML格式的字符串
     * @throws Exception
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">mapToXml</span><span class="token punctuation">(</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> data<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        DocumentBuilderFactory documentBuilderFactory <span class="token operator">=</span> DocumentBuilderFactory<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        DocumentBuilder documentBuilder<span class="token operator">=</span> documentBuilderFactory<span class="token punctuation">.</span><span class="token function">newDocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>Document document <span class="token operator">=</span> documentBuilder<span class="token punctuation">.</span><span class="token function">newDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>Element root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>String key<span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            String value <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> null<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                value <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            value <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>Element filed <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            filed<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>filed<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        TransformerFactory tf <span class="token operator">=</span> TransformerFactory<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Transformer transformer <span class="token operator">=</span> tf<span class="token punctuation">.</span><span class="token function">newTransformer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        DOMSource source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMSource</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span>
        transformer<span class="token punctuation">.</span><span class="token function">setOutputProperty</span><span class="token punctuation">(</span>OutputKeys<span class="token punctuation">.</span>ENCODING<span class="token punctuation">,</span> <span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        transformer<span class="token punctuation">.</span><span class="token function">setOutputProperty</span><span class="token punctuation">(</span>OutputKeys<span class="token punctuation">.</span>INDENT<span class="token punctuation">,</span> <span class="token string">"yes"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        StringWriter writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        StreamResult result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StreamResult</span><span class="token punctuation">(</span>writer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        transformer<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        String output <span class="token operator">=</span> writer<span class="token punctuation">.</span><span class="token function">getBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//.replaceAll("\n|\r", "");</span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            writer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> output<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/**
     * 生成带有 sign 的 XML 格式字符串
     *
     * @param data Map类型数据
     * @param key API密钥
     * @return 含有sign字段的XML
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">generateSignedXml</span><span class="token punctuation">(</span><span class="token keyword">final</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> data<span class="token punctuation">,</span> String key<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">generateSignedXml</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> WXPayConstants<span class="token punctuation">.</span>SignType<span class="token punctuation">.</span>MD5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 生成带有 sign 的 XML 格式字符串
     *
     * @param data Map类型数据
     * @param key API密钥
     * @param signType 签名类型
     * @return 含有sign字段的XML
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">generateSignedXml</span><span class="token punctuation">(</span><span class="token keyword">final</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> data<span class="token punctuation">,</span> String key<span class="token punctuation">,</span> WXPayConstants<span class="token punctuation">.</span>SignType signType<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        String sign <span class="token operator">=</span> <span class="token function">generateSignature</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> signType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        data<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>WXPayConstants<span class="token punctuation">.</span>FIELD_SIGN<span class="token punctuation">,</span> sign<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">mapToXml</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/**
     * 判断签名是否正确
     *
     * @param xmlStr XML格式数据
     * @param key API密钥
     * @return 签名是否正确
     * @throws Exception
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isSignatureValid</span><span class="token punctuation">(</span>String xmlStr<span class="token punctuation">,</span> String key<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> data <span class="token operator">=</span> <span class="token function">xmlToMap</span><span class="token punctuation">(</span>xmlStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>WXPayConstants<span class="token punctuation">.</span>FIELD_SIGN<span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        String sign <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>WXPayConstants<span class="token punctuation">.</span>FIELD_SIGN<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">generateSignature</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>sign<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 判断签名是否正确，必须包含sign字段，否则返回false。使用MD5签名。
     *
     * @param data Map类型数据
     * @param key API密钥
     * @return 签名是否正确
     * @throws Exception
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isSignatureValid</span><span class="token punctuation">(</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> data<span class="token punctuation">,</span> String key<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">isSignatureValid</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> WXPayConstants<span class="token punctuation">.</span>SignType<span class="token punctuation">.</span>MD5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 判断签名是否正确，必须包含sign字段，否则返回false。
     *
     * @param data Map类型数据
     * @param key API密钥
     * @param signType 签名方式
     * @return 签名是否正确
     * @throws Exception
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isSignatureValid</span><span class="token punctuation">(</span>Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> data<span class="token punctuation">,</span> String key<span class="token punctuation">,</span> WXPayConstants<span class="token punctuation">.</span>SignType signType<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>WXPayConstants<span class="token punctuation">.</span>FIELD_SIGN<span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        String sign <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>WXPayConstants<span class="token punctuation">.</span>FIELD_SIGN<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">generateSignature</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> signType<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>sign<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 生成签名
     *
     * @param data 待签名数据
     * @param key API密钥
     * @return 签名
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">generateSignature</span><span class="token punctuation">(</span><span class="token keyword">final</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> data<span class="token punctuation">,</span> String key<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token function">generateSignature</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> WXPayConstants<span class="token punctuation">.</span>SignType<span class="token punctuation">.</span>MD5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 生成签名. 注意，若含有sign_type字段，必须和signType参数保持一致。
     *
     * @param data 待签名数据
     * @param key API密钥
     * @param signType 签名方式
     * @return 签名
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">generateSignature</span><span class="token punctuation">(</span><span class="token keyword">final</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> data<span class="token punctuation">,</span> String key<span class="token punctuation">,</span> WXPayConstants<span class="token punctuation">.</span>SignType signType<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        Set<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span> keySet <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String<span class="token punctuation">[</span><span class="token punctuation">]</span> keyArray <span class="token operator">=</span> keySet<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span>keySet<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Arrays<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>keyArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
        StringBuilder sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>String k <span class="token operator">:</span> keyArray<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>k<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>WXPayConstants<span class="token punctuation">.</span>FIELD_SIGN<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 参数值为空，则不参与签名</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"="</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&amp;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"key="</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>WXPayConstants<span class="token punctuation">.</span>SignType<span class="token punctuation">.</span>MD5<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>signType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">return</span> <span class="token function">MD5</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>WXPayConstants<span class="token punctuation">.</span>SignType<span class="token punctuation">.</span>HMACSHA256<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>signType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">return</span> <span class="token function">HMACSHA256</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"Invalid sign_type: %s"</span><span class="token punctuation">,</span> signType<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/**
     * 获取随机字符串 Nonce Str
     *
     * @return String 随机字符串
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">generateNonceStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> UUID<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">"-"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/**
     * 生成 MD5
     *
     * @param data 待处理数据
     * @return MD5结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">MD5</span><span class="token punctuation">(</span>String data<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        MessageDigest md <span class="token operator">=</span> MessageDigest<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">"MD5"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> md<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        StringBuilder sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">byte</span> item <span class="token operator">:</span> array<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>Integer<span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item <span class="token operator">&amp;</span> <span class="token number">0xFF</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0x100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 生成 HMACSHA256
     * @param data 待处理数据
     * @param key 密钥
     * @return 加密结果
     * @throws Exception
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">HMACSHA256</span><span class="token punctuation">(</span>String data<span class="token punctuation">,</span> String key<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        Mac sha256_HMAC <span class="token operator">=</span> Mac<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">"HmacSHA256"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        SecretKeySpec secret_key <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SecretKeySpec</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"HmacSHA256"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sha256_HMAC<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>secret_key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> sha256_HMAC<span class="token punctuation">.</span><span class="token function">doFinal</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        StringBuilder sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">byte</span> item <span class="token operator">:</span> array<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>Integer<span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item <span class="token operator">&amp;</span> <span class="token number">0xFF</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0x100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 日志
     * @return
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> Logger <span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Logger logger <span class="token operator">=</span> LoggerFactory<span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">"wxpay java sdk"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> logger<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 获取当前时间戳，单位秒
     * @return
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">getCurrentTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 获取当前时间戳，单位毫秒
     * @return
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">getCurrentTimestampMs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 生成 uuid， 即用来标识一笔单，也用做 nonce_str
     * @return
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">generateUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> UUID<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">"-"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre>
    <h6>
     <a id="428_xml_1941">
     </a>
     4.2.8 xml解析类
    </h6>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">;</span>

<span class="token keyword">import</span> org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>Document<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>Element<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>Node<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>NodeList<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>sax<span class="token punctuation">.</span>InputSource<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>sax<span class="token punctuation">.</span>SAXException<span class="token punctuation">;</span>

<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>namespace<span class="token punctuation">.</span>QName<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>parsers<span class="token punctuation">.</span>DocumentBuilder<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>parsers<span class="token punctuation">.</span>DocumentBuilderFactory<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>parsers<span class="token punctuation">.</span>ParserConfigurationException<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>xpath<span class="token punctuation">.</span>XPath<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>xpath<span class="token punctuation">.</span>XPathConstants<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>xpath<span class="token punctuation">.</span>XPathExpressionException<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>xpath<span class="token punctuation">.</span>XPathFactory<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>IOException<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>InputStream<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>StringReader<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>HashMap<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map<span class="token punctuation">;</span>

<span class="token comment">/**
 * xpath解析xml
 * &lt;pre&gt;
 *     文档地址：
 *     http://www.w3school.com.cn/xpath/index.asp
 * &lt;/pre&gt;
 * @author majker
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XmlHelper</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> XPath path<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> Document doc<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token function">XmlHelper</span><span class="token punctuation">(</span>InputSource inputSource<span class="token punctuation">)</span> <span class="token keyword">throws</span> ParserConfigurationException<span class="token punctuation">,</span> SAXException<span class="token punctuation">,</span> IOException <span class="token punctuation">{<!-- --></span>
        DocumentBuilderFactory dbf <span class="token operator">=</span> <span class="token function">getDocumentBuilderFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        DocumentBuilder db <span class="token operator">=</span> dbf<span class="token punctuation">.</span><span class="token function">newDocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        doc <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>inputSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        path <span class="token operator">=</span> <span class="token function">getXPathFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newXPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> XmlHelper <span class="token function">create</span><span class="token punctuation">(</span>InputSource inputSource<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">XmlHelper</span><span class="token punctuation">(</span>inputSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ParserConfigurationException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SAXException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> XmlHelper <span class="token function">of</span><span class="token punctuation">(</span>InputStream is<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        InputSource inputSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputSource</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">create</span><span class="token punctuation">(</span>inputSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> XmlHelper <span class="token function">of</span><span class="token punctuation">(</span>String xmlStr<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        StringReader sr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringReader</span><span class="token punctuation">(</span>xmlStr<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        InputSource inputSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputSource</span><span class="token punctuation">(</span>sr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        XmlHelper xmlHelper <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span>inputSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        IOUtils<span class="token punctuation">.</span><span class="token function">closeQuietly</span><span class="token punctuation">(</span>sr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xmlHelper<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> Object <span class="token function">evalXPath</span><span class="token punctuation">(</span>String expression<span class="token punctuation">,</span> Object item<span class="token punctuation">,</span> QName returnType<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        item <span class="token operator">=</span> null <span class="token operator">==</span> item <span class="token operator">?</span> doc <span class="token operator">:</span> item<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span>expression<span class="token punctuation">,</span> item<span class="token punctuation">,</span> returnType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">XPathExpressionException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 获取String
     * @param expression 路径
     * @return String
     */</span>
    <span class="token keyword">public</span> String <span class="token function">getString</span><span class="token punctuation">(</span>String expression<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>String<span class="token punctuation">)</span> <span class="token function">evalXPath</span><span class="token punctuation">(</span>expression<span class="token punctuation">,</span> null<span class="token punctuation">,</span> XPathConstants<span class="token punctuation">.</span>STRING<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 获取Boolean
     * @param expression 路径
     * @return String
     */</span>
    <span class="token keyword">public</span> Boolean <span class="token function">getBoolean</span><span class="token punctuation">(</span>String expression<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span> <span class="token function">evalXPath</span><span class="token punctuation">(</span>expression<span class="token punctuation">,</span> null<span class="token punctuation">,</span> XPathConstants<span class="token punctuation">.</span>BOOLEAN<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 获取Number
     * @param expression 路径
     * @return {Number}
     */</span>
    <span class="token keyword">public</span> Number <span class="token function">getNumber</span><span class="token punctuation">(</span>String expression<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>Number<span class="token punctuation">)</span> <span class="token function">evalXPath</span><span class="token punctuation">(</span>expression<span class="token punctuation">,</span> null<span class="token punctuation">,</span> XPathConstants<span class="token punctuation">.</span>NUMBER<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 获取某个节点
     * @param expression 路径
     * @return {Node}
     */</span>
    <span class="token keyword">public</span> Node <span class="token function">getNode</span><span class="token punctuation">(</span>String expression<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>Node<span class="token punctuation">)</span> <span class="token function">evalXPath</span><span class="token punctuation">(</span>expression<span class="token punctuation">,</span> null<span class="token punctuation">,</span> XPathConstants<span class="token punctuation">.</span>NODE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 获取子节点
     * @param expression 路径
     * @return NodeList
     */</span>
    <span class="token keyword">public</span> NodeList <span class="token function">getNodeList</span><span class="token punctuation">(</span>String expression<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>NodeList<span class="token punctuation">)</span> <span class="token function">evalXPath</span><span class="token punctuation">(</span>expression<span class="token punctuation">,</span> null<span class="token punctuation">,</span> XPathConstants<span class="token punctuation">.</span>NODESET<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/**
     * 获取String
     * @param node 节点
     * @param expression 相对于node的路径
     * @return String
     */</span>
    <span class="token keyword">public</span> String <span class="token function">getString</span><span class="token punctuation">(</span>Object node<span class="token punctuation">,</span> String expression<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>String<span class="token punctuation">)</span> <span class="token function">evalXPath</span><span class="token punctuation">(</span>expression<span class="token punctuation">,</span> node<span class="token punctuation">,</span> XPathConstants<span class="token punctuation">.</span>STRING<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 获取
     * @param node 节点
     * @param expression 相对于node的路径
     * @return String
     */</span>
    <span class="token keyword">public</span> Boolean <span class="token function">getBoolean</span><span class="token punctuation">(</span>Object node<span class="token punctuation">,</span> String expression<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span> <span class="token function">evalXPath</span><span class="token punctuation">(</span>expression<span class="token punctuation">,</span> node<span class="token punctuation">,</span> XPathConstants<span class="token punctuation">.</span>BOOLEAN<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 获取
     * @param node 节点
     * @param expression 相对于node的路径
     * @return {Number}
     */</span>
    <span class="token keyword">public</span> Number <span class="token function">getNumber</span><span class="token punctuation">(</span>Object node<span class="token punctuation">,</span> String expression<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>Number<span class="token punctuation">)</span> <span class="token function">evalXPath</span><span class="token punctuation">(</span>expression<span class="token punctuation">,</span> node<span class="token punctuation">,</span> XPathConstants<span class="token punctuation">.</span>NUMBER<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 获取某个节点
     * @param node 节点
     * @param expression 路径
     * @return {Node}
     */</span>
    <span class="token keyword">public</span> Node <span class="token function">getNode</span><span class="token punctuation">(</span>Object node<span class="token punctuation">,</span> String expression<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>Node<span class="token punctuation">)</span> <span class="token function">evalXPath</span><span class="token punctuation">(</span>expression<span class="token punctuation">,</span> node<span class="token punctuation">,</span> XPathConstants<span class="token punctuation">.</span>NODE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 获取子节点
     * @param node 节点
     * @param expression 相对于node的路径
     * @return NodeList
     */</span>
    <span class="token keyword">public</span> NodeList <span class="token function">getNodeList</span><span class="token punctuation">(</span>Object node<span class="token punctuation">,</span> String expression<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>NodeList<span class="token punctuation">)</span> <span class="token function">evalXPath</span><span class="token punctuation">(</span>expression<span class="token punctuation">,</span> node<span class="token punctuation">,</span> XPathConstants<span class="token punctuation">.</span>NODESET<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 针对没有嵌套节点的简单处理
     * @return map集合
     */</span>
    <span class="token keyword">public</span> Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> <span class="token function">toMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        Element root <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">getDocumentElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 将节点封装成map形式</span>
        NodeList list <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">getChildNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            Node node <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token keyword">instanceof</span> <span class="token class-name">Element</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">getNodeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span><span class="token function">getTextContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> params<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> DocumentBuilderFactory <span class="token function">getDocumentBuilderFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span> XmlHelperHolder<span class="token punctuation">.</span>documentBuilderFactory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> XPathFactory <span class="token function">getXPathFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">return</span>  XmlHelperHolder<span class="token punctuation">.</span>xPathFactory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 内部类单例
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">XmlHelperHolder</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> DocumentBuilderFactory documentBuilderFactory <span class="token operator">=</span> DocumentBuilderFactory<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> XPathFactory xPathFactory <span class="token operator">=</span> XPathFactory<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre>
    <h4>
     <a id="5JAVA_2153">
     </a>
     5.JAVA业务代码
    </h4>
    <h5>
     <a id="51__2154">
     </a>
     5.1 控制器
    </h5>
    <h6>
     <a id="511___2155">
     </a>
     5.1.1 下充值订单
    </h6>
    <blockquote>
     <p>
      开放给小程序端的 充值接口
      <br/>
      1.调用工具类中的 获取openId 方法
      <br/>
      2.使用openID 调用业务层的下订单的方法
     </p>
    </blockquote>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>wechat<span class="token punctuation">.</span>applet<span class="token punctuation">.</span>web<span class="token punctuation">;</span>

<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>util<span class="token punctuation">.</span>IdGen<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Render<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>wechat<span class="token punctuation">.</span>applet<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>RechargeDto<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>wechat<span class="token punctuation">.</span>applet<span class="token punctuation">.</span>service<span class="token punctuation">.</span>PayService<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>wechat<span class="token punctuation">.</span>applet<span class="token punctuation">.</span>util<span class="token punctuation">.</span>AppletPayUtil<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>wechat<span class="token punctuation">.</span>base<span class="token punctuation">.</span>BjddController<span class="token punctuation">;</span>
<span class="token keyword">import</span> io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span>ApiOperation<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>Autowired<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>PostMapping<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>RequestBody<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>RequestMapping<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>RestController<span class="token punctuation">;</span>


<span class="token comment">/****************************************************
 *
 *
 *
 * @author majker
 * @date 2019-03-07 21:21
 * @version 1.0
 **************************************************/</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/m/recharge"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RechargeAPI</span> <span class="token keyword">extends</span> <span class="token class-name">BjddController</span> <span class="token punctuation">{<!-- --></span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> PayService payService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"创建充值订单"</span><span class="token punctuation">,</span> notes <span class="token operator">=</span> <span class="token string">"创建充值订单"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> Object <span class="token function">order</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> RechargeDto rechargeDto<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        <span class="token comment">/**
         微信小程序支付
         */</span>
        <span class="token comment">//获取code</span>
        String code <span class="token operator">=</span> rechargeDto<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用接口获取openId</span>
        String openId <span class="token operator">=</span> AppletPayUtil<span class="token punctuation">.</span><span class="token function">getOpenIdByCode</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*
            生成订单....，这里只创建了订单号
         */</span>
        <span class="token comment">//订单号  uuid</span>
        String outTradeNo<span class="token operator">=</span> IdGen<span class="token punctuation">.</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> Render<span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span>payService<span class="token punctuation">.</span><span class="token function">unifiedOrder</span><span class="token punctuation">(</span>outTradeNo<span class="token punctuation">,</span>rechargeDto<span class="token punctuation">.</span><span class="token function">getRechargeMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>openId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre>
    <h6>
     <a id="512__2215">
     </a>
     5.1.2 小程序回调控制器
    </h6>
    <blockquote>
     <p>
      微信支付成功后，微信要调用接口，微信自动调用
     </p>
    </blockquote>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>wechat<span class="token punctuation">.</span>applet<span class="token punctuation">.</span>web<span class="token punctuation">;</span>


<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">.</span>HttpKit<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">.</span>PaymentKit<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>wechat<span class="token punctuation">.</span>base<span class="token punctuation">.</span>BjddController<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>RequestMapping<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>RestController<span class="token punctuation">;</span>

<span class="token keyword">import</span> javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpServletRequest<span class="token punctuation">;</span>
<span class="token keyword">import</span> javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpServletResponse<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>IOException<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map<span class="token punctuation">;</span>

 <span class="token comment">/****************************************************
  *
  *   小程序回调控制器
  *
  * @author majker
  * @version 1.0
  **************************************************/</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"m/pay/"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PayApi</span> <span class="token keyword">extends</span> <span class="token class-name">BjddController</span> <span class="token punctuation">{<!-- --></span>

    <span class="token comment">/**
     * 成功的标识
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> String SUCCESS<span class="token operator">=</span><span class="token string">"SUCCESS"</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * 返回状态码的变量名
     *
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> String RETURN_CODE<span class="token operator">=</span><span class="token string">"RETURN_CODE"</span><span class="token punctuation">;</span>


    <span class="token comment">/**
     * 功能描述: &lt;小程序回调&gt;
     * @return:
     * @auther: majker
     * @date: 2019/3/10
     **/</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/wxProPayNotify/anon"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wxProPayNotify</span><span class="token punctuation">(</span>HttpServletRequest request<span class="token punctuation">,</span> HttpServletResponse response<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"进入微信小程序支付回调"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String xmlMsg <span class="token operator">=</span> HttpKit<span class="token punctuation">.</span><span class="token function">readData</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"微信小程序通知信息"</span><span class="token operator">+</span>xmlMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> resultMap <span class="token operator">=</span> PaymentKit<span class="token punctuation">.</span><span class="token function">xmlToMap</span><span class="token punctuation">(</span>xmlMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>resultMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>RETURN_CODE<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>SUCCESS<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
            String orderNo <span class="token operator">=</span> resultMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"out_trade_no"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"微信小程序支付成功,订单号{}"</span><span class="token punctuation">,</span>orderNo<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">/**
             *  通过订单号 修改数据库中的记录，此处省略n行代码
             */</span>

        <span class="token punctuation">}</span>
        String result <span class="token operator">=</span>  <span class="token string">"&lt;xml&gt;&lt;return_code&gt;&lt;![CDATA[SUCCESS]]&gt;&lt;/return_code&gt;&lt;return_msg&gt;&lt;![CDATA[OK]]&gt;&lt;/return_msg&gt;&lt;/xml&gt;"</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre>
    <h5>
     <a id="52__2287">
     </a>
     5.2 工具类
    </h5>
    <blockquote>
     <p>
      该类中只有个获取openId 的方法，暂时写在工具类中。
     </p>
    </blockquote>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>wechat<span class="token punctuation">.</span>applet<span class="token punctuation">.</span>util<span class="token punctuation">;</span>

<span class="token keyword">import</span> com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>fastjson<span class="token punctuation">.</span>JSON<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>fastjson<span class="token punctuation">.</span>JSONObject<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>config<span class="token punctuation">.</span>WxProgramPayConfig<span class="token punctuation">;</span>
<span class="token keyword">import</span> lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span>Slf4j<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpEntity<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>client<span class="token punctuation">.</span>methods<span class="token punctuation">.</span>CloseableHttpResponse<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>client<span class="token punctuation">.</span>methods<span class="token punctuation">.</span>HttpGet<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>client<span class="token punctuation">.</span>CloseableHttpClient<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>client<span class="token punctuation">.</span>HttpClients<span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>BufferedReader<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>IOException<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>InputStream<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>InputStreamReader<span class="token punctuation">;</span>

<span class="token comment">/****************************************************
 *
 *
 *
 * @author majker
 * @date 2019-03-07 21:24
 * @version 1.0
 **************************************************/</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppletPayUtil</span> <span class="token punctuation">{<!-- --></span>

    <span class="token comment">/**
     * 根据 临时登录凭证获取openId
     * 文档:https://developers.weixin.qq.com/miniprogram/dev/api/code2Session.html
     *
     * @param code
     * @return
     * @author majker
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String <span class="token function">getOpenIdByCode</span><span class="token punctuation">(</span>String code<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"获取code成功!{}"</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//登录凭证校验</span>
        <span class="token comment">//</span>
        String url <span class="token operator">=</span> <span class="token string">"https://api.weixin.qq.com/sns/jscode2session?appid="</span> <span class="token operator">+</span> WxProgramPayConfig<span class="token punctuation">.</span>APPID <span class="token operator">+</span> <span class="token string">"&amp;secret="</span> <span class="token operator">+</span> WxProgramPayConfig<span class="token punctuation">.</span>SECRET <span class="token operator">+</span> <span class="token string">"&amp;js_code="</span> <span class="token operator">+</span> code <span class="token operator">+</span> <span class="token string">"&amp;grant_type=authorization_code"</span><span class="token punctuation">;</span>
        <span class="token comment">//发送请求给微信后端</span>
        CloseableHttpClient httpClient <span class="token operator">=</span> HttpClients<span class="token punctuation">.</span><span class="token function">createDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        HttpGet httpGet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpGet</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        InputStream inputStream <span class="token operator">=</span> null<span class="token punctuation">;</span>
        CloseableHttpResponse httpResponse <span class="token operator">=</span> null<span class="token punctuation">;</span>
        StringBuilder result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String openId <span class="token operator">=</span> null<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{<!-- --></span>
            httpResponse <span class="token operator">=</span> httpClient<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>httpGet<span class="token punctuation">)</span><span class="token punctuation">;</span>
            HttpEntity entity <span class="token operator">=</span> httpResponse<span class="token punctuation">.</span><span class="token function">getEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            inputStream <span class="token operator">=</span> entity<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            BufferedReader bufferedReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            String line <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token comment">//这里需要使用fastjson来提取一下内容</span>
                System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
                JSONObject jsonObject <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
                openId <span class="token operator">=</span> jsonObject<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"openid"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                String sessionKey <span class="token operator">=</span> jsonObject<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"session_key"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"openId={},sessionKey={}"</span><span class="token punctuation">,</span> openId<span class="token punctuation">,</span> sessionKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"获取openId失败"</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> openId<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre>
    <h5>
     <a id="53_API_2361">
     </a>
     5.3 业务层，调用下订单的API
    </h5>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>wechat<span class="token punctuation">.</span>applet<span class="token punctuation">.</span>service<span class="token punctuation">;</span>

<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>config<span class="token punctuation">.</span>WxProgramPayConfig<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">.</span>PaymentApi<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">.</span>PaymentKit<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>common<span class="token punctuation">.</span>sdk<span class="token punctuation">.</span>WXPayUtil<span class="token punctuation">;</span>
<span class="token keyword">import</span> lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span>Slf4j<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span>Service<span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>math<span class="token punctuation">.</span>BigDecimal<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>HashMap<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map<span class="token punctuation">;</span>

<span class="token comment">/****************************************************
 *
 *
 *
 * @author majker
 * @date 2019-03-07 17:23
 * @version 1.0
 **************************************************/</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PayService</span> <span class="token punctuation">{<!-- --></span>


    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${com.majker.project.name}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> String projectName<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setProjectName</span><span class="token punctuation">(</span>String projectName<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        projectName <span class="token operator">=</span> projectName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 功能描述: &lt;调用统一下单的接口&gt;
     * @return:
     * @auther: majker
     * @date: 2019/3/7
     **/</span>
    <span class="token keyword">public</span> Object <span class="token function">unifiedOrder</span><span class="token punctuation">(</span>String outTradeNo<span class="token punctuation">,</span> BigDecimal money<span class="token punctuation">,</span> String openid<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{<!-- --></span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> reqParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//微信分配的小程序ID</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"appid"</span><span class="token punctuation">,</span> WxProgramPayConfig<span class="token punctuation">.</span>APPID<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//微信支付分配的商户号</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"mch_id"</span><span class="token punctuation">,</span> WxProgramPayConfig<span class="token punctuation">.</span>MCH_ID<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//随机字符串</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"nonce_str"</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span> <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//签名类型</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"sign_type"</span><span class="token punctuation">,</span> <span class="token string">"MD5"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//充值订单 商品描述</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"body"</span><span class="token punctuation">,</span> projectName <span class="token operator">+</span> <span class="token string">"-充值订单-微信小程序"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//商户订单号</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"out_trade_no"</span><span class="token punctuation">,</span> outTradeNo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//订单总金额，单位为分</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"total_fee"</span><span class="token punctuation">,</span> money<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>BigDecimal<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//终端IP</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"spbill_create_ip"</span><span class="token punctuation">,</span> <span class="token string">"127.0.0.1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//通知地址</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"notify_url"</span><span class="token punctuation">,</span> WxProgramPayConfig<span class="token punctuation">.</span>NOTIFY_URL<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//交易类型</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"trade_type"</span><span class="token punctuation">,</span> <span class="token string">"JSAPI"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//用户标识</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"openid"</span><span class="token punctuation">,</span> openid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//签名</span>
        String sign <span class="token operator">=</span> WXPayUtil<span class="token punctuation">.</span><span class="token function">generateSignature</span><span class="token punctuation">(</span>reqParams<span class="token punctuation">,</span> WxProgramPayConfig<span class="token punctuation">.</span>KEY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"sign"</span><span class="token punctuation">,</span> sign<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*
            调用支付定义下单API,返回预付单信息 prepay_id
         */</span>
        String xmlResult <span class="token operator">=</span> PaymentApi<span class="token punctuation">.</span><span class="token function">pushOrder</span><span class="token punctuation">(</span>reqParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>xmlResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> PaymentKit<span class="token punctuation">.</span><span class="token function">xmlToMap</span><span class="token punctuation">(</span>xmlResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//预付单信息</span>
        String prepay_id <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"prepay_id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
            小程序调起支付数据签名
         */</span>
        Map<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span> packageParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">,</span> String<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        packageParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"appId"</span><span class="token punctuation">,</span> WxProgramPayConfig<span class="token punctuation">.</span>APPID<span class="token punctuation">)</span><span class="token punctuation">;</span>
        packageParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"timeStamp"</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span> <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        packageParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"nonceStr"</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        packageParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"package"</span><span class="token punctuation">,</span> <span class="token string">"prepay_id="</span> <span class="token operator">+</span> prepay_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        packageParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"signType"</span><span class="token punctuation">,</span> <span class="token string">"MD5"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String packageSign <span class="token operator">=</span> WXPayUtil<span class="token punctuation">.</span><span class="token function">generateSignature</span><span class="token punctuation">(</span>packageParams<span class="token punctuation">,</span> WxProgramPayConfig<span class="token punctuation">.</span>KEY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        packageParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"paySign"</span><span class="token punctuation">,</span> packageSign<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> packageParams<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre>
    <h5>
     <a id="54__RechargeDto__Bean_2461">
     </a>
     5.4 实体 RechargeDto （接口参数的实体Bean）
    </h5>
    <pre><code class="prism language-java"><span class="token keyword">package</span> com<span class="token punctuation">.</span>majker<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>wechat<span class="token punctuation">.</span>applet<span class="token punctuation">.</span>dto<span class="token punctuation">;</span>

<span class="token keyword">import</span> lombok<span class="token punctuation">.</span>Data<span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>math<span class="token punctuation">.</span>BigDecimal<span class="token punctuation">;</span>

<span class="token comment">/****************************************************
 *
 *  充值实体
 *
 * @author majker
 * @date: 2019/3/10
 * @version 1.0
 **************************************************/</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RechargeDto</span> <span class="token punctuation">{<!-- --></span>

    <span class="token comment">/**
     * 充值 支付类型
     * 0 微信 1 支付宝 2.公众号微信 3.微信小程序
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> payType<span class="token punctuation">;</span>

    <span class="token comment">/**
     * 用户id
     */</span>
    <span class="token keyword">private</span> String userId<span class="token punctuation">;</span>

    <span class="token comment">/**
     * 充值金额
     */</span>
    <span class="token keyword">private</span> BigDecimal rechargeMoney<span class="token punctuation">;</span>

    <span class="token comment">/**
     * 临时凭证code
     * 小程序支付调用wx.login();获取到登录临时凭证code
     */</span>
    <span class="token keyword">private</span> String code<span class="token punctuation">;</span>


<span class="token punctuation">}</span>

</code></pre>
    <h3>
     <a id="_2507">
     </a>
     小程序版
    </h3>
    <h4>
     <a id="1_2508">
     </a>
     1.创建小程序项目
    </h4>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/6641dce442845c40e1e8f8bcb15d55ba.png"/>
    </p>
    <p>
     创建成功后的目录如下
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/0dbb7477db22cbf2c0e24cae586a61d6.png"/>
    </p>
    <h4>
     <a id="2___2513">
     </a>
     2. 创建相关的目录文件 如下
    </h4>
    <ol>
     <li>
      创建demo文件夹，在该目录下创建.js ,json,wxml.wxss 文件
      <br/>
      其中js文件里面写js代码，json可以存放数据，wxml 可以构建页面视图(类似html)，wxss可以进行页面渲染（类似css）
     </li>
    </ol>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e7e658d25bd55c6e86b6fd2cf9548b46.png"/>
    </p>
    <h4>
     <a id="3_util_2518">
     </a>
     3. util目录
    </h4>
    <h6>
     <a id="31_datajs_2519">
     </a>
     3.1 data.js
    </h6>
    <pre><code class="prism language-javascript"><span class="token comment">//域名+端口号</span>
<span class="token keyword">var</span> <span class="token constant">WYY_HOST_URL</span> <span class="token operator">=</span> <span class="token string">"https://majker.com:80"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> type <span class="token operator">=</span> <span class="token string">"Fitment"</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{<!-- --></span>
  wyy_host_api_url<span class="token punctuation">:</span> <span class="token constant">WYY_HOST_URL</span><span class="token punctuation">,</span>
  wyy_user_wxappid<span class="token punctuation">:</span> <span class="token string">"6"</span><span class="token punctuation">,</span>
  wyy_share_info<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  wyy_config_version<span class="token punctuation">:</span> <span class="token number">2567</span><span class="token punctuation">,</span>
  <span class="token comment">//获取充值信息 </span>
  user_recharge<span class="token punctuation">:</span> <span class="token constant">WYY_HOST_URL</span> <span class="token operator">+</span> <span class="token string">"/m/recharge/money/anon"</span><span class="token punctuation">,</span>
  <span class="token comment">//确定充值 </span>
  user_recharge_re<span class="token punctuation">:</span> <span class="token constant">WYY_HOST_URL</span> <span class="token operator">+</span> <span class="token string">"/m/recharge"</span>
<span class="token punctuation">}</span>
</code></pre>
    <h6>
     <a id="32_networkjs_2536">
     </a>
     3.2 network.js
    </h6>
    <blockquote>
     <p>
      该文件中requestLoading 可以在head 里面传递参数
     </p>
    </blockquote>
    <pre><code class="prism language-javascript">
<span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> success<span class="token punctuation">,</span> fail<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">requestLoading</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> success<span class="token punctuation">,</span> fail<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">requestLoading</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> message<span class="token punctuation">,</span> header<span class="token punctuation">,</span> method<span class="token punctuation">,</span> success<span class="token punctuation">,</span> fail<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
  wx<span class="token punctuation">.</span><span class="token function">showNavigationBarLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>message <span class="token operator">!=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
      title<span class="token punctuation">:</span> message<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
    url<span class="token punctuation">:</span> url<span class="token punctuation">,</span>
    data<span class="token punctuation">:</span> params<span class="token punctuation">,</span>
    header<span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span>
      <span class="token string">'Authorization'</span><span class="token punctuation">:</span> header<span class="token punctuation">,</span>
      <span class="token string">'content-type'</span><span class="token punctuation">:</span> <span class="token string">'application/x-www-form-urlencoded'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    method<span class="token punctuation">:</span> method<span class="token punctuation">,</span>
    success<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
      <span class="token comment">//console.log(res.data)</span>
      wx<span class="token punctuation">.</span><span class="token function">hideNavigationBarLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>message <span class="token operator">!=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token function">success</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
        <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    fail<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
      wx<span class="token punctuation">.</span><span class="token function">hideNavigationBarLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>message <span class="token operator">!=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    complete<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{<!-- --></span>
  request<span class="token punctuation">:</span> request<span class="token punctuation">,</span>
  requestLoading<span class="token punctuation">:</span> requestLoading<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
    <h4>
     <a id="4_demo_2587">
     </a>
     4. demo下的文件内容
    </h4>
    <h6>
     <a id="41_rechargejs_2588">
     </a>
     4.1 recharge.js
    </h6>
    <pre><code class="prism language-javascript"><span class="token comment">// pages/recharge/recharge.js</span>
<span class="token comment">//链接加载</span>
<span class="token keyword">var</span> con <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"../../utils/data.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//方法</span>
<span class="token keyword">var</span> network <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"../../utils/network.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>

  <span class="token comment">/**
   * 页面的初始数据
   */</span>
  data<span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span>
    balance<span class="token punctuation">:</span>  <span class="token string">"1000.00"</span> <span class="token punctuation">,</span>
    mealList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{<!-- --></span>
        <span class="token string">"id"</span><span class="token punctuation">:</span> <span class="token string">"6d163c287cfd42cbb7cf6783e40875ae"</span><span class="token punctuation">,</span>
        <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span>
        <span class="token string">"sort"</span><span class="token punctuation">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span>
        <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"25"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{<!-- --></span>
        <span class="token string">"id"</span><span class="token punctuation">:</span> <span class="token string">"56d180dc933a4a329631d50703b5ed5c"</span><span class="token punctuation">,</span>
        <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span>
        <span class="token string">"sort"</span><span class="token punctuation">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"10"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{<!-- --></span>
        <span class="token string">"id"</span><span class="token punctuation">:</span> <span class="token string">"3d1a37867618459b8bd4f096c798c803"</span><span class="token punctuation">,</span>
        <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"30"</span><span class="token punctuation">,</span>
        <span class="token string">"sort"</span><span class="token punctuation">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"5"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    give<span class="token punctuation">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
    num<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    rechargeMoney<span class="token punctuation">:</span> <span class="token string">"0"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  loadData<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">var</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token comment">//渲染充值列表（动态）</span>
    <span class="token comment">// network.requestLoading(con.user_recharge, null, message, "", "GET", function(res) {<!-- --></span>
    <span class="token comment">//   if (res.code == 200) {<!-- --></span>
    <span class="token comment">//     console.log(res.data)</span>
    <span class="token comment">//     that.setData({<!-- --></span>
    <span class="token comment">//       mealList: res.data,</span>
    <span class="token comment">//       give: res.data[0].value,</span>
    <span class="token comment">//       rechargeMoney: res.data[0].label</span>
    <span class="token comment">//     })</span>
    <span class="token comment">//   } else {<!-- --></span>
    <span class="token comment">//     wx.showToast({<!-- --></span>
    <span class="token comment">//       title: res.msg,</span>
    <span class="token comment">//       icon: 'none',</span>
    <span class="token comment">//       duration: 2000</span>
    <span class="token comment">//     })</span>
    <span class="token comment">//   }</span>
    <span class="token comment">// }, function(res) {<!-- --></span>
    <span class="token comment">//   wx.showToast({<!-- --></span>
    <span class="token comment">//     title: '加载数据失败',</span>
    <span class="token comment">//   })</span>
    <span class="token comment">// })</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * 生命周期函数--监听页面加载
   */</span>
  onLoad<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span><span class="token string">"加载数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">/**
   * 生命周期函数--监听页面初次渲染完成
   */</span>
  onReady<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">/**
   * 生命周期函数--监听页面显示
   */</span>
  onShow<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">/**
   * 生命周期函数--监听页面隐藏
   */</span>
  onHide<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">/**
   * 生命周期函数--监听页面卸载
   */</span>
  onUnload<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>


  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">/**
   * 页面相关事件处理函数--监听用户下拉动作
   */</span>
  onPullDownRefresh<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">/**
   * 页面上拉触底事件的处理函数
   */</span>
  onReachBottom<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">//选择日期后加样式</span>
  select_date<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>mealList<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
      num<span class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>num<span class="token punctuation">,</span>
      give<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>mealList<span class="token punctuation">[</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>num<span class="token punctuation">]</span><span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  recharge<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">var</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(parmas);</span>
    <span class="token comment">//********************************************* 小测试************************************//</span>
    <span class="token comment">//小程序调用登录接口 获取code</span>
    wx<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
      <span class="token function">success</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
          <span class="token keyword">var</span> paramsData <span class="token operator">=</span> <span class="token punctuation">{<!-- --></span>
            <span class="token string">"payType"</span><span class="token punctuation">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
            <span class="token string">"rechargeMoney"</span><span class="token punctuation">:</span> that<span class="token punctuation">.</span>data<span class="token punctuation">.</span>mealList<span class="token punctuation">[</span>that<span class="token punctuation">.</span>data<span class="token punctuation">.</span>num<span class="token punctuation">]</span><span class="token punctuation">.</span>label<span class="token punctuation">,</span>
            <span class="token comment">//用户id 请调用相应接口 本地只作测试处理</span>
            <span class="token string">"userId"</span><span class="token punctuation">:</span> <span class="token string">"c39993421bca559c99736a67bb29c526"</span><span class="token punctuation">,</span>
            <span class="token string">"code"</span><span class="token punctuation">:</span> res<span class="token punctuation">.</span>code
          <span class="token punctuation">}</span>
          <span class="token comment">//小程序请求服务器接口 start</span>
          wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
            url<span class="token punctuation">:</span> con<span class="token punctuation">.</span>user_recharge_re<span class="token punctuation">,</span>
            method<span class="token punctuation">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
            data<span class="token punctuation">:</span> paramsData<span class="token punctuation">,</span>
            header<span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span>
              <span class="token string">'content-type'</span><span class="token punctuation">:</span> <span class="token string">'application/json'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            success<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
              <span class="token comment">//小程序调用 支付API start</span>
              wx<span class="token punctuation">.</span><span class="token function">requestPayment</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
                timeStamp<span class="token punctuation">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>timeStamp<span class="token punctuation">,</span>
                nonceStr<span class="token punctuation">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>nonceStr<span class="token punctuation">,</span>
                <span class="token keyword">package</span><span class="token punctuation">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token keyword">package</span><span class="token punctuation">,</span>
                signType<span class="token punctuation">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>signType<span class="token punctuation">,</span>
                paySign<span class="token punctuation">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>paySign<span class="token punctuation">,</span>
                success<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                fail<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                complete<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token comment">//小程序调用 支付API end</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token comment">//小程序请求服务器接口 end</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'登录失败！'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>errMsg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//********************************************* 小测试************************************//</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * 用户点击右上角分享
   */</span>
  onShareAppMessage<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
    <h6>
     <a id="42_rechargewxml_2768">
     </a>
     4.2 recharge.wxml
    </h6>
    <pre><code class="prism language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>recharge_top<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
  充值
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>recharge_balance<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">='</span><span class="token attr-value"><span class="token property">color</span><span class="token punctuation">:</span>#b504cc</span><span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">='</span><span class="token attr-value"><span class="token property">font-size</span><span class="token punctuation">:</span>90rpx</span><span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span> {<!-- -->{balance}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>元<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>当前账号余额<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>recharge_meal<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>recharge_meal_title<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>充 值 金 额<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>mealList<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>{<!-- -->{num==index?<span class="token punctuation">"</span>active<span class="token punctuation">"</span>:<span class="token punctuation">"</span>unactive<span class="token punctuation">"</span>}}<span class="token punctuation">'</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>select_date<span class="token punctuation">"</span></span> <span class="token attr-name">data-num</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>{<!-- -->{index}}<span class="token punctuation">'</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{<!-- -->{mealList}}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      {<!-- -->{item.label}}元
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>giveMeal<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
    赠送{<!-- -->{give}}块
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>recharge<span class="token punctuation">'</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>recharge<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>充 值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre>
    <h6>
     <a id="43_rechargewxss_2792">
     </a>
     4.3 recharge.wxss
    </h6>
    <pre><code class="prism language-css"><span class="token comment">/* pages/demo/recharge.wxss */</span>

<span class="token selector">page</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.recharge_top</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 131rpx<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 131rpx<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 39rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.recharge_balance</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 350rpx<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 26rpx<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 1px 10px 1px #b504cc<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #979797<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.recharge_meal</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 20rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.recharge_meal_title</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 26rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80rpx<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 80rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mealList</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.unactive</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 215rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 93rpx<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 93rpx<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 34rpx<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.active</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #b504cc<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 215rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 93rpx<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 93rpx<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 34rpx<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.giveMeal</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">color</span><span class="token punctuation">:</span> #b504cc<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 22rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80rpx<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 80rpx<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1rpx solid #dbdbdb<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.giveMealImg</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">width</span><span class="token punctuation">:</span> 25rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 25rpx<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 15rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.giveExplain</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 15rpx<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #acacac<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 22rpx<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.giveExplainImg</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">width</span><span class="token punctuation">:</span> 28rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 28rpx<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 15rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.recharge</span> <span class="token punctuation">{<!-- --></span>
  <span class="token property">width</span><span class="token punctuation">:</span> 278rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 90rpx<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #b504cc<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 35rpx<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 139rpx<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 45rpx<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 1rpx 2rpx 1rpx 1rpx #b504cc<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 36rpx<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre>
    <h4>
     <a id="5_2902">
     </a>
     5.页面效果
    </h4>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/08b6c24dfdba1b7e6c727592512ef8a0.png"/>
    </p>
    <h4>
     <a id="6API_2904">
     </a>
     6.相关API:
    </h4>
    <h5>
     <a id="61_code_2905">
     </a>
     6.1 小程序内调用登录接口，获取临时登录凭证code
    </h5>
    <blockquote>
     <p>
      API文档：小程序登录
      <a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.login.html" rel="nofollow">
       https://developers.weixin.qq.com/miniprogram/dev/api/wx.login.html
      </a>
     </p>
    </blockquote>
    <pre><code class="prism language-javascript">wx<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
  <span class="token function">success</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"临时登录凭证 code"</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'登录失败！'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>errMsg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
    <h5>
     <a id="62API_2918">
     </a>
     6.2小程序调用支付API
    </h5>
    <p>
     小程序调起支付API:
     <a href="https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&amp;index=5" rel="nofollow">
      https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&amp;index=5
     </a>
    </p>
    <h6>
     <a id="621__2920">
     </a>
     6.2.1 参数说明
    </h6>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e0bb8681423f795aeab03eb78ae7fe5a.png"/>
    </p>
    <h6>
     <a id="622__2922">
     </a>
     6.2.2 小程序代码
    </h6>
    <pre><code class="prism language-javascript">wx<span class="token punctuation">.</span><span class="token function">requestPayment</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
  timeStamp<span class="token punctuation">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>timeStamp<span class="token punctuation">,</span>
  nonceStr<span class="token punctuation">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>nonceStr<span class="token punctuation">,</span>
  <span class="token keyword">package</span><span class="token punctuation">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token keyword">package</span><span class="token punctuation">,</span>
  signType<span class="token punctuation">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>signType<span class="token punctuation">,</span>
  paySign<span class="token punctuation">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>paySign<span class="token punctuation">,</span>
  <span class="token string">'success'</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">'fail'</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">'complete'</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
    <h3>
     <a id="_2941">
     </a>
     参考链接
    </h3>
    <table>
     <thead>
      <tr>
       <th>
        名称
       </th>
       <th>
        链接
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        微信小程序下订单
       </td>
       <td>
        <a href="https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1" rel="nofollow">
         https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1
        </a>
       </td>
      </tr>
      <tr>
       <td>
        小程序调取支付API
       </td>
       <td>
        <a href="https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&amp;index=5" rel="nofollow">
         https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&amp;index=5
        </a>
       </td>
      </tr>
      <tr>
       <td>
        HTTPS服务器配置
       </td>
       <td>
        <a href="https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=10_4" rel="nofollow">
         https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=10_4
        </a>
       </td>
      </tr>
      <tr>
       <td>
        小程序API文档
       </td>
       <td>
        <a href="https://developers.weixin.qq.com/miniprogram/dev/" rel="nofollow">
         https://developers.weixin.qq.com/miniprogram/dev/
        </a>
       </td>
      </tr>
      <tr>
       <td>
       </td>
       <td>
       </td>
      </tr>
     </tbody>
    </table>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



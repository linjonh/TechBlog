---
layout: post
title: java详解native方法的使用
date: 2024-12-24 11:22:25 +0800
categories: []
tags: []
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=80628069
    alt: java详解native方法的使用
artid: 80628069
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【java】详解native方法的使用
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     目录结构：
    </p>
    <div style="margin:0px;padding:0px;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     <ol style="margin-bottom:1em;margin-left:40px;">
      <li style="margin:0px;padding:0px;">
       <a href="https://www.cnblogs.com/HDK2016/p/7226840.html?utm_source=itdadao&amp;utm_medium=referral#a1" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);">
        关于native关键字
       </a>
      </li>
      <li style="margin:0px;padding:0px;">
       <a href="https://www.cnblogs.com/HDK2016/p/7226840.html?utm_source=itdadao&amp;utm_medium=referral#a2" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);">
        使用native关键字
       </a>
       <ol style="margin-bottom:1em;margin-left:40px;">
        <li style="margin:0px;padding:0px;">
         <a href="https://www.cnblogs.com/HDK2016/p/7226840.html?utm_source=itdadao&amp;utm_medium=referral#a21" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);">
          使用步骤
         </a>
        </li>
        <li style="margin:0px;padding:0px;">
         <a href="https://www.cnblogs.com/HDK2016/p/7226840.html?utm_source=itdadao&amp;utm_medium=referral#a22" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);">
          案例
         </a>
         <ol style="margin-bottom:1em;margin-left:40px;">
          <li style="margin:0px;padding:0px;">
           <a href="https://www.cnblogs.com/HDK2016/p/7226840.html?utm_source=itdadao&amp;utm_medium=referral#a221" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);">
            编写.java文件
           </a>
          </li>
          <li style="margin:0px;padding:0px;">
           <a href="https://www.cnblogs.com/HDK2016/p/7226840.html?utm_source=itdadao&amp;utm_medium=referral#a222" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);">
            编译.java文件
           </a>
          </li>
          <li style="margin:0px;padding:0px;">
           <a href="https://www.cnblogs.com/HDK2016/p/7226840.html?utm_source=itdadao&amp;utm_medium=referral#a223" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);">
            获得.h文件
           </a>
          </li>
          <li style="margin:0px;padding:0px;">
           <a href="https://www.cnblogs.com/HDK2016/p/7226840.html?utm_source=itdadao&amp;utm_medium=referral#a224" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);">
            编写hello.cpp文件
           </a>
          </li>
          <li style="margin:0px;padding:0px;">
           <a href="https://www.cnblogs.com/HDK2016/p/7226840.html?utm_source=itdadao&amp;utm_medium=referral#a225" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);">
            部署hello.dll文件
           </a>
          </li>
          <li style="margin:0px;padding:0px;">
           <a href="https://www.cnblogs.com/HDK2016/p/7226840.html?utm_source=itdadao&amp;utm_medium=referral#a226" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);">
            运行HelloWorld.class文件
           </a>
          </li>
         </ol>
        </li>
       </ol>
      </li>
      <li style="margin:0px;padding:0px;">
       <a href="https://www.cnblogs.com/HDK2016/p/7226840.html?utm_source=itdadao&amp;utm_medium=referral#a3" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);">
        参考文章
       </a>
      </li>
     </ol>
    </div>
    <h2 style="margin-top:10px;margin-bottom:10px;padding:0px;line-height:1.5;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
     1，关于native关键字
    </h2>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     想必读者已经了解过native关键字了。这里笔者就大致囊括一下，被native关键字修饰的方法叫做本地方法，本地方法和其它方法不一样，本地方法意味着和平台有关，因此使用了native的程序可移植性都不太高。另外native方法在JVM中运行时数据区也和其它方法不一样，它有专门的本地方法栈。native方法主要用于加载文件和动态链接库，由于Java语言无法访问操作系统底层信息（比如：底层硬件设备等），这时候就需要借助C语言来完成了。被native修饰的方法可以被C语言重写。
    </p>
    <h2 style="margin-top:10px;margin-bottom:10px;padding:0px;line-height:1.5;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
    </h2>
    <h2 style="color:rgb(51,51,51);margin-top:10px;margin-bottom:10px;line-height:1.5;padding:0px;font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
     2，使用native关键字
    </h2>
    <h3 style="margin-top:20px;margin-bottom:20px;padding:0px;font-size:21px;line-height:1.5;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
     2.1，使用步骤
    </h3>
    <ul style="margin-bottom:1em;margin-left:40px;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     <li style="margin-top:0px;margin-left:0px;padding:0px;">
      Java程序中声明native修饰的方法，类似于abstract修饰的方法，只有方法签名，没有方法实现。编译该java文件，会产生一个.class文件。
     </li>
     <li style="margin-top:0px;margin-left:0px;padding:0px;">
      使用javah编译上一步产生的class文件，会产生一个.h文件。
     </li>
     <li style="margin-top:0px;margin-left:0px;padding:0px;">
      写一个.cpp文件实现上一步中.h文件中的方法。
     </li>
     <li style="margin-top:0px;margin-left:0px;padding:0px;">
      将上一步的.cpp文件编译成动态链接库文件.dll。
     </li>
     <li style="margin-top:0px;margin-left:0px;padding:0px;">
      最后就可以使用System或是Runtime中的loadLibrary()方法加载上一步的产生的动态连接库文件了。
     </li>
    </ul>
    <h3 style="margin-top:20px;margin-bottom:20px;padding:0px;font-size:21px;line-height:1.5;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
     2.2，案例
    </h3>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     为了更好理解，该案例的所有都在文件在
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      D:\JNI\
     </span>
     目录下。
    </p>
    <h4 style="margin-top:10px;margin-bottom:10px;padding:0px;font-size:16px;line-height:1.5;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
     2.2.1 编写.java文件
    </h4>
    <div class="cnblogs_code" style="margin:5px 0px;padding:5px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
     <img alt="" class="code_img_opened" src="https://i-blog.csdnimg.cn/blog_migrate/961ddebeb323a10fe0623af514929fc1.gif" style="margin-bottom:0px;padding:0px 5px 0px 0px;border:none;vertical-align:middle;max-width:800px;">
      <div class="cnblogs_code_hide" style="margin:0px;padding:0px;">
       <div class="cnblogs_code_toolbar" style="margin:5px 0px 0px;padding:0px;">
        <span class="cnblogs_code_copy" style="margin:0px;padding:0px 5px 0px 0px;line-height:1.5;">
         <a style="margin:0px;padding:0px;color:rgb(0,0,0);border:none;" title="复制代码">
          <img alt="复制代码" src="https://i-blog.csdnimg.cn/blog_migrate/48304ba5e6f9fe08f3fa1abda7d326ab.gif" style="margin-bottom:0px;padding:0px;max-width:800px;border:none;"/>
         </a>
        </span>
       </div>
       <pre style="margin-bottom:0px;padding-right:0px;padding-left:0px;white-space:pre-wrap;font-family:'Courier New';"><span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">public</span> <span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">class</span><span style="margin:0px;padding:0px;line-height:1.5;"> HelloWorld{
    </span><span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">public</span> <span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">native</span> <span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">void</span> h();<span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">//</span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">该方法和abstract修饰的方法一样，只有签名。</span>
    
    <span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">static</span><span style="margin:0px;padding:0px;line-height:1.5;">{
        System.loadLibrary(</span>"hello");<span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">//</span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">不写文件的后缀，程序会自动加上.dll的。</span>
<span style="margin:0px;padding:0px;line-height:1.5;">    }
    
    </span><span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">public</span> <span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">static</span> <span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">void</span><span style="margin:0px;padding:0px;line-height:1.5;"> main(String[] args){
        </span><span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">new</span> HelloWorld().h();<span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">//</span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">调用</span>
<span style="margin:0px;padding:0px;line-height:1.5;">    }
}</span></pre>
       <div class="cnblogs_code_toolbar" style="margin:5px 0px 0px;padding:0px;">
        <span class="cnblogs_code_copy" style="margin:0px;padding:0px 5px 0px 0px;line-height:1.5;">
         <a style="margin:0px;padding:0px;color:rgb(0,0,0);border:none;" title="复制代码">
          <img alt="复制代码" src="https://i-blog.csdnimg.cn/blog_migrate/48304ba5e6f9fe08f3fa1abda7d326ab.gif" style="margin-bottom:0px;padding:0px;max-width:800px;border:none;"/>
         </a>
        </span>
       </div>
      </div>
     </img>
    </div>
    <h4 style="margin-top:10px;margin-bottom:10px;padding:0px;font-size:16px;line-height:1.5;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
     2.2.2 编译.java文件
    </h4>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     在AMD中编译该程序
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      javac HelloWorld.java
     </span>
     ，就会产生一个HelloWorld.class文件。
    </p>
    <h4 style="margin-top:10px;margin-bottom:10px;padding:0px;font-size:16px;line-height:1.5;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
     2.2.3 获得.h文件
    </h4>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     将第二步中产生的字节码文件，通过
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      javah -jni HelloWorld
     </span>
     就会产生一个HelloWorld.h文件。
    </p>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     我们用记事本打开HelloWorld.h文件
    </p>
    <div class="cnblogs_code" style="margin:5px 0px;padding:5px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
     <div class="cnblogs_code_toolbar" style="margin:5px 0px 0px;padding:0px;">
      <span class="cnblogs_code_copy" style="margin:0px;padding:0px 5px 0px 0px;line-height:1.5;">
       <a style="margin:0px;padding:0px;color:rgb(0,0,0);border:none;" title="复制代码">
        <img alt="复制代码" src="https://i-blog.csdnimg.cn/blog_migrate/48304ba5e6f9fe08f3fa1abda7d326ab.gif" style="margin-bottom:0px;padding:0px;max-width:800px;border:none;"/>
       </a>
      </span>
     </div>
     <pre style="margin-bottom:0px;padding-right:0px;padding-left:0px;white-space:pre-wrap;font-family:'Courier New';"><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">/*</span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;"> DO NOT EDIT THIS FILE - it is machine generated </span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">*/</span><span style="margin:0px;padding:0px;line-height:1.5;">
#include </span>&lt;jni.h&gt;
<span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">/*</span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;"> Header for class HelloWorld </span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">*/</span><span style="margin:0px;padding:0px;line-height:1.5;">

#ifndef _Included_HelloWorld
</span><span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">#define</span> _Included_HelloWorld<span style="margin:0px;padding:0px;line-height:1.5;">
#ifdef __cplusplus
</span><span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">extern</span> <span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">"</span><span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">C</span><span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">"</span><span style="margin:0px;padding:0px;line-height:1.5;"> {
</span><span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">#endif</span>
<span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">/*</span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">
 * Class:     HelloWorld
 * Method:    h
 * Signature: ()V
 </span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">*/</span><span style="margin:0px;padding:0px;line-height:1.5;">
JNIEXPORT </span><span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">void</span><span style="margin:0px;padding:0px;line-height:1.5;"> JNICALL Java_HelloWorld_h
  (JNIEnv </span>*<span style="margin:0px;padding:0px;line-height:1.5;">, jobject);

#ifdef __cplusplus
}
</span><span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">#endif</span>
<span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">#endif</span></pre>
     <div class="cnblogs_code_toolbar" style="margin:5px 0px 0px;padding:0px;">
      <span class="cnblogs_code_copy" style="margin:0px;padding:0px 5px 0px 0px;line-height:1.5;">
       <a style="margin:0px;padding:0px;color:rgb(0,0,0);border:none;" title="复制代码">
        <img alt="复制代码" src="https://i-blog.csdnimg.cn/blog_migrate/48304ba5e6f9fe08f3fa1abda7d326ab.gif" style="margin-bottom:0px;padding:0px;max-width:800px;border:none;"/>
       </a>
      </span>
     </div>
    </div>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     可以看出，在HelloWorld.java文件中的h()方法已经变成了
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      JNIEXPORT
      <span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">
       void
      </span>
      <span style="margin:0px;padding:0px;line-height:1.5;">
       JNICALL Java_HelloWorld_h (JNIEnv
      </span>
      *, jobject);
     </span>
     ，方法名是原来的
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      包名_类名_方法名
     </span>
     。在该文件中还引用了
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      jni.h
     </span>
     文件。
    </p>
    <h4 style="margin-top:10px;margin-bottom:10px;padding:0px;font-size:16px;line-height:1.5;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
     2.2.4 编写hello.cpp文件
    </h4>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     编写hello.cpp文件的方式有许多，可以利用Visual Studio软件，因为最后需要生成dll文件，因此在下载Visual Studio之前应该查一查版本是否能够生成自己电脑需要的dll版本（32位dll或64为dll）。这里读者下载的是vs2013，该版本既可以生成32的dll，由可以生成64位的dll。关于vs2013生成dll可以参考
     <a href="https://jingyan.baidu.com/article/380abd0a4640171d90192c9e.html" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);" title="https://jingyan.baidu.com/article/380abd0a4640171d90192c9e.html">
      Visual Studio 2013生成64位dll
     </a>
    </p>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     因为我们在第一步中调用的文件名称为hello，所以这里的.cpp文件必须为
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      hello.cpp
     </span>
     文件。这里笔者的文件如下：
    </p>
    <div class="cnblogs_code" style="margin:5px 0px;padding:5px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
     <div class="cnblogs_code_toolbar" style="margin:5px 0px 0px;padding:0px;">
      <span class="cnblogs_code_copy" style="margin:0px;padding:0px 5px 0px 0px;line-height:1.5;">
       <a style="margin:0px;padding:0px;color:rgb(0,0,0);border:none;" title="复制代码">
        <img alt="复制代码" src="https://i-blog.csdnimg.cn/blog_migrate/48304ba5e6f9fe08f3fa1abda7d326ab.gif" style="margin-bottom:0px;padding:0px;max-width:800px;border:none;"/>
       </a>
      </span>
     </div>
     <pre style="margin-bottom:0px;padding-right:0px;padding-left:0px;white-space:pre-wrap;font-family:'Courier New';"><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">//</span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;"> hello.cpp : 定义 DLL 应用程序的导出函数。
</span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">//
</span><span style="margin:0px;padding:0px;line-height:1.5;">
#include </span><span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">"</span><span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">stdafx.h</span><span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">"</span><span style="margin:0px;padding:0px;line-height:1.5;">
#include </span><span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">"</span><span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">HelloWorld.h</span><span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">"</span><span style="margin:0px;padding:0px;line-height:1.5;">

JNIEXPORT </span><span style="margin:0px;padding:0px;color:rgb(0,0,255);line-height:1.5;">void</span> JNICALL Java_HelloWorld_h(JNIEnv *<span style="margin:0px;padding:0px;line-height:1.5;">, jobject) {
    printf(</span><span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">"</span><span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">Hello! </span><span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">"</span>);<span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">//</span><span style="margin:0px;padding:0px;color:rgb(0,128,0);line-height:1.5;">打印信息</span>
}</pre>
     <div class="cnblogs_code_toolbar" style="margin:5px 0px 0px;padding:0px;">
      <span class="cnblogs_code_copy" style="margin:0px;padding:0px 5px 0px 0px;line-height:1.5;">
       <a style="margin:0px;padding:0px;color:rgb(0,0,0);border:none;" title="复制代码">
        <img alt="复制代码" src="https://i-blog.csdnimg.cn/blog_migrate/48304ba5e6f9fe08f3fa1abda7d326ab.gif" style="margin-bottom:0px;padding:0px;max-width:800px;border:none;"/>
       </a>
      </span>
     </div>
    </div>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     可以看出引入了
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      HelloWorld.h
     </span>
     文件，所以
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      hello.cpp
     </span>
     文件应该和
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      HelloWorld.h
     </span>
     文件在同一个目录下面。如果读者现在编译hello.cpp文件会报错
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      “jni.h”: No such file or directory
     </span>
     。在
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      HelloWorld.h
     </span>
     文件中我们引入了
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      jni.h
     </span>
     文件，所以也应该把
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      jni.h
     </span>
     文件放到同一级目录下面，关于这个文件和相关的文件读者可以到JDK的安装目录下面的include下面查找，更多信息可以
     <a href="http://www.cnblogs.com/HDK2016/p/6715035.html" rel="nofollow" style="margin:0px;padding:0px;color:rgb(0,0,0);" title="http://www.cnblogs.com/HDK2016/p/6715035.html">
      查看JDk、JRE、JVM的关系
     </a>
     。还应该把
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      HelloWorld.h
     </span>
     文件中的
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      #include &lt;jni.h&gt;
     </span>
     改为
     <span style="margin:0px;padding:0px;color:rgb(0,0,0);">
      <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);font-family:'Courier New';font-size:12px;">
       #include
       <span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">
        "
       </span>
       <span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">
        jni.h
       </span>
       <span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">
        "
       </span>
      </span>
      。最后生成
      <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);font-family:'Courier New';font-size:12px;">
       hello.dll
      </span>
      文件就可以了
     </span>
    </p>
    <h4 style="margin-top:10px;margin-bottom:10px;padding:0px;font-size:16px;line-height:1.5;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
     2.2.5 部署hello.dll文件
    </h4>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     我们使用了
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      System.loadLibary(
      <span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">
       "
      </span>
      <span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">
       hello
      </span>
      <span style="margin:0px;padding:0px;color:rgb(128,0,0);line-height:1.5;">
       "
      </span>
      );
     </span>
     加载动态链接库，这个加载路径是按照java.libary.path进行查询的，读者可以根据System.getProperty("java.libary.path")验证，该路径就是环境变量中的path路径。网上有好多说直接把hello.dll仍在
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      C:\Windows\System32
     </span>
     路径下。不过笔者建议，先应该查看自己环境变量path的值，那么把hello.dll放到path中配置的第一个路径下。
    </p>
    <h4 style="margin-top:10px;margin-bottom:10px;padding:0px;font-size:16px;line-height:1.5;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
     2.2.6 运行HelloWorld.class文件
    </h4>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     我们回到
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      D:/JNI
     </span>
     路径下，使用
     <span class="cnblogs_code" style="margin:5px 0px;padding:3px;background-color:rgb(245,245,245);border:1px solid rgb(204,204,204);color:rgb(0,0,0);font-family:'Courier New';font-size:12px;">
      java HelloWorld
     </span>
     就成功调用动态连接库了。
    </p>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/7646950adcc9f3f04de46df5585bf483.png" style="padding:0px;border:none;max-width:800px;"/>
    </p>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;font-size:14px;background-color:rgb(255,255,255);">
     笔者的控制台上成功打印了hello!。笔者对这里加载的理解，就是利用反射机制，在运行的时候找到hello.dll文件并且解析，根据动态链接库中的文件名称创建出对象和方法，然后我们就可以利用对象调用方法了。上面的HelloWorld.java文件，创建动态链接库和调用方法都在同一个类中，这样的话一个只需要使用这个类的对象调用方法就可以通过编译和运行了。如果我们引入的是被人的.cpp文件，那么根据.cpp文件中的方法名，在需要的地方做适当调整就可以调用了。
    </p>
    <p style="margin:10px auto;color:rgb(51,51,51);font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
    </p>
    <h2 style="font-size:14px;color:rgb(51,51,51);margin-top:10px;margin-bottom:10px;line-height:1.5;padding:0px;font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);">
     3，使用native关键字目的
    </h2>
    <p>
     <span style="font-size:12px;">
      <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
       为什么要使用Native Method
      </span>
      <br style="color:rgb(51,51,51);background-color:rgb(255,255,255);font-family:'WenQuanYi Micro Hei Mono', 'WenQuanYi Micro Hei', 'Microsoft Yahei Mono', 'Microsoft Yahei', sans-serif;"/>
      <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
       java使用起来非常方便，然而有些层次的任务用java实现起来不容易，或者我们对程序的效率很在意时，问题就来了。
      </span>
      <br style="color:rgb(51,51,51);background-color:rgb(255,255,255);font-family:'WenQuanYi Micro Hei Mono', 'WenQuanYi Micro Hei', 'Microsoft Yahei Mono', 'Microsoft Yahei', sans-serif;"/>
      <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
       与java环境外交互：
      </span>
      <br style="color:rgb(51,51,51);background-color:rgb(255,255,255);font-family:'WenQuanYi Micro Hei Mono', 'WenQuanYi Micro Hei', 'Microsoft Yahei Mono', 'Microsoft Yahei', sans-serif;"/>
      <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
       有时java应用需要与java外面的环境交互。这是本地方法存在的主要原因，你可以想想java需要与一些底层系统如操作系统或某些硬件交换信息时的情况。本地方法正是这样一种交流机制：它为我们提供了一个非常简洁的接口，而且我们无需去了解java应用之外的繁琐的细节。
      </span>
      <br style="color:rgb(51,51,51);background-color:rgb(255,255,255);font-family:'WenQuanYi Micro Hei Mono', 'WenQuanYi Micro Hei', 'Microsoft Yahei Mono', 'Microsoft Yahei', sans-serif;"/>
      <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
       与操作系统交互：
      </span>
      <br style="color:rgb(51,51,51);background-color:rgb(255,255,255);font-family:'WenQuanYi Micro Hei Mono', 'WenQuanYi Micro Hei', 'Microsoft Yahei Mono', 'Microsoft Yahei', sans-serif;"/>
      <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
       JVM支持着java语言本身和运行时库，它是java程序赖以生存的平台，它由一个解释器（解释字节码）和一些连接到本地代码的库组成。然而不管怎 样，它毕竟不是一个完整的系统，它经常依赖于一些底层（underneath在下面的）系统的支持。这些底层系统常常是强大的操作系统。通过使用本地方法，我们得以用java实现了jre的与底层系统的交互，甚至JVM的一些部分就是用C写的，还有，如果我们要使用一些java语言本身没有提供封装的操作系统的特性时，我们也需要使用本地方法。
      </span>
      <br style="color:rgb(51,51,51);background-color:rgb(255,255,255);font-family:'WenQuanYi Micro Hei Mono', 'WenQuanYi Micro Hei', 'Microsoft Yahei Mono', 'Microsoft Yahei', sans-serif;"/>
      <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
       Sun's Java
      </span>
      <br style="color:rgb(51,51,51);background-color:rgb(255,255,255);font-family:'WenQuanYi Micro Hei Mono', 'WenQuanYi Micro Hei', 'Microsoft Yahei Mono', 'Microsoft Yahei', sans-serif;"/>
      <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
       Sun的解释器是用C实现的，这使得它能像一些普通的C一样与外部交互。jre大部分是用java实现的，它也通过一些本地方法与外界交互。例如：类java.lang.Thread 的 setPriority()方法是用java实现的，但是它实现调用的是该类里的本地方法setPriority0()。这个本地方法是用C实现的，并被植入JVM内部，在Windows 95的平台上，这个本地方法最终将调用Win32 SetPriority() API。这是一个本地方法的具体实现由JVM直接提供，更多的情况是本地方法由外部的动态链接库（external dynamic link library）提供，然后被JVM调用。
      </span>
     </span>
    </p>
    <span style="font-size:14px;">
     总的来说，
     <span style="background-color:rgb(255,255,255);">
      JAVA的native方法适用的情况：
     </span>
     <br style="background-color:rgb(255,255,255);"/>
     <span style="background-color:rgb(255,255,255);">
      1、为了使用底层的主机平台的某个特性，而这个特性不能通过JAVA API访问。
     </span>
     <br style="background-color:rgb(255,255,255);"/>
     <span style="background-color:rgb(255,255,255);">
      2、为了访问一个老的系统或者使用一个已有的库，而这个系统或这个库不是用JAVA编写的。
     </span>
     <br style="background-color:rgb(255,255,255);"/>
    </span>
    <p>
     <span style="font-size:14px;">
      <span style="background-color:rgb(255,255,255);">
       3、为了加快程序的性能，而将一段时间敏感的代码作为本地方法实现。
      </span>
     </span>
    </p>
    <p>
     <span style="background-color:rgb(255,255,255);">
     </span>
    </p>
    <h2 style="font-size:14px;color:rgb(51,51,51);margin-top:10px;margin-bottom:10px;line-height:1.5;font-family:Verdana, Arial, Helvetica, sans-serif;background-color:rgb(255,255,255);padding:0px;">
     4，native关键字特点
    </h2>
    <span style="font-size:12px;color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
    </span>
    <span style="font-size:12px;">
     <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
      标识符native可以与所有其它的java标识符连用，但是abstract除外。这是合理的，因为native暗示这些方法是有实现体的，只不过这些实现体是非java的，但是abstract却显然的指明这些方法无实现体。native与其它java标识符连用时，其意义同非Native Method并无差别，比如native static表明这个方法可以在不产生类的实例时直接调用，这非常方便，比如当你想用一个native method去调用一个C的类库时。上面的第三个方法用到了native synchronized，JVM在进入这个方法的实现体之前会执行同步锁机制（就像java的多线程。）
     </span>
     <br style="color:rgb(51,51,51);background-color:rgb(255,255,255);font-family:'WenQuanYi Micro Hei Mono', 'WenQuanYi Micro Hei', 'Microsoft Yahei Mono', 'Microsoft Yahei', sans-serif;"/>
     <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
      一个native method方法可以返回任何java类型，包括非基本类型，而且同样可以进行异常控制。这些方法的实现体可以制一个异常并且将其抛出，这一点与java的方法非常相似。当一个native method接收到一些非基本类型时如Object或一个整型数组时，这个方法可以访问这非些基本型的内部，但是这将使这个native方法依赖于你所访问的java类的实现。有一点要牢牢记住：我们可以在一个native method的本地实现中访问所有的java特性，但是这要依赖于你所访问的java特性的实现，而且这样做远远不如在java语言中使用那些特性方便和容易。
     </span>
     <br style="color:rgb(51,51,51);background-color:rgb(255,255,255);font-family:'WenQuanYi Micro Hei Mono', 'WenQuanYi Micro Hei', 'Microsoft Yahei Mono', 'Microsoft Yahei', sans-serif;"/>
     <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
      native method的存在并不会对其他类调用这些本地方法产生任何影响，实际上调用这些方法的其他类甚至不知道它所调用的是一个本地方法。JVM将控制调用本地方法的所有细节。需要注意当我们将一个本地方法声明为final的情况。用java实现的方法体在被编译时可能会因为内联而产生效率上的提升。但是一个native final方法是否也能获得这样的好处却是值得怀疑的，但是这只是一个代码优化方面的问题，对功能实现没有影响。
     </span>
     <br style="color:rgb(51,51,51);background-color:rgb(255,255,255);font-family:'WenQuanYi Micro Hei Mono', 'WenQuanYi Micro Hei', 'Microsoft Yahei Mono', 'Microsoft Yahei', sans-serif;"/>
     <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
      如果一个含有本地方法的类被继承，子类会继承这个本地方法并且可以用java语言重写这个方法（这个似乎看起来有些奇怪），同样的如果一个本地方法被fianl标识，它被继承后不能被重写。
     </span>
     <br style="color:rgb(51,51,51);background-color:rgb(255,255,255);font-family:'WenQuanYi Micro Hei Mono', 'WenQuanYi Micro Hei', 'Microsoft Yahei Mono', 'Microsoft Yahei', sans-serif;"/>
     <span style="color:rgb(51,51,51);font-family:Tahoma;background-color:rgb(255,255,255);">
      本地方法非常有用，因为它有效地扩充了jvm.事实上，我们所写的java代码已经用到了本地方法，在sun的java的并发（多线程）的机制实现中，许多与操作系统的接触点都用到了本地方法，这使得java程序能够超越java运行时的界限。有了本地方法，java程序可以做任何应用层次的任务。
     </span>
    </span>
    <br/>
   </div>
  </div>
 </article>
</div>



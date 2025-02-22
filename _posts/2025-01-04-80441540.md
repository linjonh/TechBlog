---
layout: post
title: 2025-01-04-Java调用Python程序方法总结最全最详细
date: 2025-01-04 15:22:07 +0800
categories: [java]
tags: [python,java,接口,调用]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=80441540
  alt: Java调用Python程序方法总结最全最详细
artid: 80441540
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Java调用Python程序方法总结(最全最详细)
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p>
    </p>
    <div>
     <a style="background-color:transparent;color:rgb(78,161,219);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:22px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
     </a>
     <span style="background-color:transparent;color:rgb(79,79,79);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:22px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
      如何使用Java调用Python程序
     </span>
    </div>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <div>
     <span style="text-align:left;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:700;text-decoration:none;word-spacing:0px;background-color:transparent;">
      <span style="font-family:SimSun;">
       <span style="color:#333333;">
        <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
         本文为大家介绍如何java调用python方法，供大家参考。
        </span>
        <br style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;"/>
        <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
         实际工程项目中可能会用到Java和python两种语言结合进行，这样就会涉及到一个问题，就是怎么用Java程序来调用已经写好的python脚本呢，一共有三种方法可以实现，具体方法分别为大家介绍：
        </span>
       </span>
      </span>
     </span>
    </div>
    <p>
    </p>
    <div>
     <a style="background-color:transparent;color:rgb(78,161,219);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:22px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
     </a>
     <span style="background-color:transparent;color:rgb(79,79,79);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:22px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
      1. 在java类中直接执行python语句
     </span>
    </div>
    <span style="background-color:transparent;color:rgb(79,79,79);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:22px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
    </span>
    <div>
     <p style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      <span style="font-family:SimSun;color:#000000;">
       此方法需要引用 org.python包，需要下载Jpython。在这里先介绍一下Jpython。下面引入百科的解释：
      </span>
     </p>
    </div>
    <div>
     <span style="background-color:rgb(238,240,244);color:rgb(51,51,51);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:14px;font-style:normal;font-variant:normal;font-weight:400;letter-spacing:normal;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
     </span>
    </div>
    <ul style="list-style:none;text-align:left;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
     <li style="list-style-type:disc;margin-left:32px;">
      <span style="font-family:SimSun;font-size:14px;color:#000000;">
       Jython是一种完整的语言，而不是一个Java翻译器或仅仅是一个Python编译器，它是一个Python语言在Java中的完全实现。Jython也有很多从CPython中继承的模块库。最有趣的事情是Jython不像CPython或其他任何高级语言，它提供了对其实现语言的一切存取。所以Jython不仅给你提供了Python的库，同时也提供了所有的Java类。这使其有一个巨大的资源库。
      </span>
     </li>
    </ul>
    <div>
     <span style="background-color:rgb(238,240,244);color:rgb(51,51,51);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:14px;font-style:normal;font-variant:normal;font-weight:400;letter-spacing:normal;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
     </span>
    </div>
    <div>
     <p style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
     </p>
     <div>
      <span style="font-family:SimSun;color:#000000;">
       这里我建议下载最新版本的Jpython，因为可以使用的python函数库会比老版本的多些，目前最新版本为2.7。
       <br/>
       下载jar包请点击
       <a href="http://search.maven.org/remotecontent?filepath=org/python/jython-standalone/2.7.0/jython-standalone-2.7.0.jar" rel="nofollow" style="text-decoration:none;">
        Download Jython 2.7.0 - Standalone Jar
       </a>
       <br/>
       下载安装程序请点击
       <a href="http://search.maven.org/remotecontent?filepath=org/python/jython-installer/2.7.0/jython-installer-2.7.0.jar" rel="nofollow" style="text-decoration:none;">
        Download Jython 2.7.0 - Installer
       </a>
       <br/>
       如果使用maven依赖添加的话，使用下面的语句
      </span>
     </div>
    </div>
    <div>
     <pre><code class="language-java">&lt;dependency&gt;
    &lt;groupId&gt;org.python&lt;/groupId&gt;
    &lt;artifactId&gt;jython-standalone&lt;/artifactId&gt;
    &lt;version&gt;2.7.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
    </div>
    <div>
     <span style="text-align:justify;color:rgb(79,79,79);text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      <span style="font-size:14px;">
       以上准备好了，就可以直接在java类中写python语句了，具体代码如下：
      </span>
     </span>
     <br/>
    </div>
    <pre><code class="language-java">PythonInterpreter interpreter = new PythonInterpreter();
interpreter.exec("a=[5,2,3,9,4,0]; ");
interpreter.exec("print(sorted(a));");  //此处python语句是3.x版本的语法
interpreter.exec("print sorted(a);");   //此处是python语句是2.x版本的语法</code></pre>
    <p>
    </p>
    <div>
     <span style="text-align:justify;color:rgb(79,79,79);text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      输出结果如下：
     </span>
    </div>
    <div>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/7583a01e208ee53f960ee5da11fe7373.png">
     </img>
    </div>
    <div>
     <span style="color:#000000;">
      <span style="font-family:SimSun;">
       <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        这里会看到输出的结果都是一样的，也就是说Jpython兼容python2.x和3.x版本的语句，运行速度会比直接运行python程序稍慢一点。
       </span>
       <br style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;"/>
       <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        但是每次运行结果都会提示console: Failed to install ”: java.nio.charset.UnsupportedCharsetException: cp0. 这样看起来很烦，因为每次运行结果都会出现红色的提示语句，以为是错误，程序员应该都不愿意看到这一幕，得想个办法解决。
       </span>
       <br style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;"/>
       <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
       </span>
       <span style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:700;text-decoration:none;word-spacing:0px;background-color:transparent;">
        解决方法如下：
       </span>
       <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
       </span>
       <br style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;"/>
       <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        在要执行的代码上右键， Run As&gt;Run Configurations，选择第二个页签Arguments，在VM arguments中添加以下语句
       </span>
       <br style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;"/>
       <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
       </span>
       <span style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        -Dpython.console.encoding=UTF-8
       </span>
       <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
       </span>
       <br style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;"/>
       <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        然后Apply-&gt;Run就可以了。
       </span>
      </span>
     </span>
    </div>
    <div>
     <span style="font-family:SimSun;color:#000000;">
      <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
       <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        如下图所示：
       </span>
      </span>
     </span>
     <br/>
    </div>
    <p>
    </p>
    <p>
    </p>
    <div>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/2ae2d6ce0757ee8d357a4662ffc3e4ee.png">
     </img>
    </div>
    <div>
     <br/>
    </div>
    <div>
     <a style="background-color:transparent;color:rgb(78,161,219);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:22px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
     </a>
     <span style="background-color:transparent;color:rgb(79,79,79);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:22px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
      2. 在java中调用本地python脚本
     </span>
    </div>
    <p>
    </p>
    <p>
    </p>
    <div>
     <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      <span style="font-family:SimSun;color:#000000;">
       首先在本地建立一个python脚本，命名为add.py，写了一个简单的两个数做加法的函数，代码如下：
      </span>
     </span>
     <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
     </span>
    </div>
    <pre><code class="language-python">def add(a,b):
    return a + b</code></pre>
    <p>
    </p>
    <div>
     <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      <span style="font-family:SimSun;color:#000000;">
       python的功能函数已经写好，接下来我们写一个java的测试类（同样需要用到Jpython包），来测试一下是否可以运行成功。代码如下：
      </span>
     </span>
     <br/>
    </div>
    <pre><code class="language-java">import org.python.core.PyFunction;
import org.python.core.PyInteger;
import org.python.core.PyObject;
import org.python.util.PythonInterpreter;

public class Java_Python_test {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        PythonInterpreter interpreter = new PythonInterpreter();
        interpreter.execfile("D:\\add.py");

        // 第一个参数为期望获得的函数（变量）的名字，第二个参数为期望返回的对象类型
        PyFunction pyFunction = interpreter.get("add", PyFunction.class);
        int a = 5, b = 10;
        //调用函数，如果函数需要参数，在Java中必须先将参数转化为对应的“Python类型”
        PyObject pyobj = pyFunction.__call__(new PyInteger(a), new PyInteger(b)); 
        System.out.println("the anwser is: " + pyobj);
    }
}</code></pre>
    <p>
    </p>
    <div>
     <span style="text-align:justify;color:rgb(79,79,79);text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      运行结果如图所示：
     </span>
    </div>
    <div>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/13826f8534f53d7dec92e0615a84b663.png">
     </img>
    </div>
    <div>
     <p style="text-align:justify;color:rgb(79,79,79);text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      OK，测试成功了~
     </p>
    </div>
    <span style="text-align:left;color:rgb(51,51,51);text-transform:none;text-indent:0px;letter-spacing:normal;font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
    </span>
    <div>
     <p style="text-align:justify;color:rgb(79,79,79);text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      关于Jpython更多详细的信息可以参考官方的相关文档，官网地址点
      <a href="http://www.jython.org/" rel="nofollow" style="color:rgb(78,161,219);text-decoration:none;">
       这里
      </a>
      。
     </p>
    </div>
    <p>
    </p>
    <p>
     <span style="font-family:SimSun;">
      <strong>
       <span style="color:#000000;">
        <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;text-decoration:none;word-spacing:0px;background-color:transparent;">
        </span>
       </span>
      </strong>
     </span>
    </p>
    <div>
     <blockquote style="background-attachment:scroll;background-color:rgb(238,240,244);background-image:none;background-repeat:repeat;border-left-color:rgb(221,223,228);border-left-style:solid;border-left-width:8px;color:rgb(51,51,51);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:14px;font-style:normal;font-variant:normal;font-weight:400;letter-spacing:normal;margin-left:0px;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
      <p style="color:rgb(153,153,153);font-size:14px;font-weight:400;line-height:22px;margin-left:0px;text-align:justify;">
       <span style="background-color:transparent;color:rgb(0,0,0);font-family:SimSun;font-size:16px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;text-align:justify;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
        <span style="color:rgb(0,0,0);font-family:SimSun;">
         注意
        </span>
       </span>
       <span style="background-color:transparent;color:rgb(0,0,0);font-family:SimSun;font-size:16px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;line-height:22px;text-align:justify;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
        ：以上两个方法虽然都可以调用python程序，但是使用Jpython调用的python库不是很多，如果你用以上两个方法调用，而python的程序中使用到第三方库，这时就会报错java ImportError: No module named xxx。遇到这种情况推荐使用下面的方法，即可解决该问题。
       </span>
      </p>
     </blockquote>
    </div>
    <span style="background-color:transparent;color:rgb(51,51,51);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:14px;font-style:normal;font-variant:normal;font-weight:400;letter-spacing:normal;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
    </span>
    <h4 style="background-color:transparent;color:rgb(79,79,79);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:22px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;line-height:30px;margin-left:0px;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
     <a style="color:rgb(78,161,219);text-decoration:none;">
     </a>
     <span style="font-weight:700;">
      3. 使用Runtime.getRuntime()执行脚本文件（推荐）
     </span>
    </h4>
    <p>
    </p>
    <p>
    </p>
    <div>
     <strong>
      <span style="color:#000000;">
       <span style="text-align:justify;text-transform:none;line-height:22px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;text-decoration:none;word-spacing:0px;background-color:transparent;">
       </span>
      </span>
     </strong>
     <span style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;text-decoration:none;word-spacing:0px;background-color:transparent;">
     </span>
     <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      <span style="font-family:SimSun;color:#000000;">
       为了验证该方法可以运行含有python第三方库的程序，我们先写一个简单的python脚本，代码如下：
      </span>
     </span>
     <br/>
    </div>
    <pre><code class="language-python">import numpy as np

a = np.arange(12).reshape(3,4)
print(a)</code></pre>
    <p>
    </p>
    <p>
    </p>
    <div>
     <span style="font-family:SimSun;">
      <span style="color:#000000;">
       <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        可以看到程序中用到了numpy第三方库，并初始化了一个3×4的一个矩阵。
       </span>
       <br style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;"/>
       <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        下面来看看怎么用Runtime.getRuntime()方法来调用python程序并输出该结果，java代码如下：
       </span>
      </span>
     </span>
     <br/>
    </div>
    <pre><code class="language-python">import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Demo1 {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Process proc;
        try {
            proc = Runtime.getRuntime().exec("python D:\\demo1.py");// 执行py文件
            //用输入输出流来截取结果
            BufferedReader in = new BufferedReader(new InputStreamReader(proc.getInputStream()));
            String line = null;
            while ((line = in.readLine()) != null) {
                System.out.println(line);
            }
            in.close();
            proc.waitFor();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } 
    }
}</code></pre>
    <p>
    </p>
    <p>
    </p>
    <div>
     <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      <span style="font-family:SimSun;color:#000000;">
       输出的结果如下图所示：
      </span>
     </span>
    </div>
    <div>
     <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      <span style="font-family:Simsun;color:#b00000;">
       <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/5105d33b7ae9204c36157c81c272dca3.jpeg"/>
      </span>
     </span>
    </div>
    <p>
    </p>
    <p>
    </p>
    <div>
     <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
      <span style="color:#000000;">
       <span style="font-family:SimSun;">
        <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
         可以看到运行成功了，但有的朋友可能会问了，怎么在python程序中函数传递参数并执行出结果，下面我就举一例来说明一下。
        </span>
        <br style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;"/>
        <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
         先写一个python的程序，代码如下：
        </span>
       </span>
      </span>
     </span>
     <br/>
    </div>
    <pre><code class="language-python">import sys

def func(a,b):
    return (a+b)

if __name__ == '__main__':
    a = []
    for i in range(1, len(sys.argv)):
        a.append((int(sys.argv[i])))

    print(func(a[0],a[1]))</code></pre>
    <p>
    </p>
    <p>
    </p>
    <div>
     <span style="color:#000000;">
      <span style="font-family:SimSun;">
       <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        其中sys.argv用于获取参数url1，url2等。而sys.argv[0]代表python程序名，所以列表从1开始读取参数。
       </span>
       <br style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;"/>
       <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        以上代码实现一个两个数做加法的程序，下面看看在java中怎么传递函数参数，代码如下：
       </span>
      </span>
     </span>
     <br/>
    </div>
    <pre><code class="language-java">int a = 18;
int b = 23;
try {
    String[] args = new String[] { "python", "D:\\demo2.py", String.valueOf(a), String.valueOf(b) };
    Process proc = Runtime.getRuntime().exec(args1);// 执行py文件

    BufferedReader in = new BufferedReader(new InputStreamReader(proc.getInputStream()));
    String line = null;
    while ((line = in.readLine()) != null) {
        System.out.println(line);
    }
    in.close();
    proc.waitFor();
} catch (IOException e) {
    e.printStackTrace();
} catch (InterruptedException e) {
    e.printStackTrace();
}</code></pre>
    <p>
    </p>
    <p>
    </p>
    <div>
     <span style="font-family:SimSun;">
      <span style="color:#000000;">
       <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        其中args是String[] { “python”,path,url1,url2 }; ，path是python程序所在的路径，url1是参数1，url2是参数2，以此类推。
       </span>
       <br style="text-align:justify;text-transform:none;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;"/>
       <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        最后结果如图所示：
       </span>
      </span>
     </span>
    </div>
    <p>
    </p>
    <p>
    </p>
    <div>
     <span style="font-family:SimSun;">
      <span style="color:#000000;">
       <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/256cf9ebf873578ec7f83d7a6151816f.jpeg">
         <br/>
         <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
          <span style="font-family:SimSun;color:#000000;">
           OK，成功了。
          </span>
         </span>
        </img>
       </span>
      </span>
     </span>
    </div>
    <p>
    </p>
    <p>
    </p>
    <div>
     <strong>
      <span style="font-family:Arial;font-size:18px;">
       <br/>
      </span>
     </strong>
    </div>
    <div>
     <strong>
      <span style="font-family:Arial;font-size:18px;">
       最后补充一点：
      </span>
     </strong>
    </div>
    <p>
     本人电脑上由于同时存在两个python，而我不想用默认的那个，也不想修改默认的python解释器，这种情况下，可以写一个bat文件，在bat文件中通过dos命令切换到该python所在目录，然后运行py文件（py文件要放在该目录下）
    </p>
    <p>
     下面附上程序：
    </p>
    <p>
     bat文件：
    </p>
    <pre><code class="language-html">@echo off  
C:
cd C:\Anaconda2\envs\py3
start python test.py
exit</code></pre>
    <p>
     java程序：
    </p>
    <pre><code class="language-java">import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Demo1 {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Process proc;
        try {
            proc = Runtime.getRuntime().exec("cmd /c E:\\Faultdetection\\fault1\\run.bat");// 执行py文件
            //用输入输出流来截取结果
            BufferedReader in = new BufferedReader(new InputStreamReader(proc.getInputStream()));
            String line = null;
            while ((line = in.readLine()) != null) {
                System.out.println(line);
            }
            in.close();
            proc.waitFor();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}</code></pre>
    <br/>
    <div>
     <span style="font-family:SimSun;">
      <span style="color:#000000;">
       <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        <span style="text-align:justify;text-transform:none;line-height:26px;text-indent:0px;letter-spacing:normal;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;word-spacing:0px;background-color:transparent;">
        </span>
       </span>
      </span>
     </span>
     <strong>
      <span style="font-family:Arial;font-size:18px;">
       总结：
      </span>
     </strong>
     <span style="background-color:transparent;color:rgb(79,79,79);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:20px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;line-height:28px;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
      以上就是Java调用python程序的所有方法总结，推荐使用第三种方法，比前两种方便很多。最后，欢迎大家转载，转载请注明出处
     </span>
     <a href="http://blog.csdn.net/it_xiao_bai/article/details/79074988" style="background-color:transparent;color:rgb(78,161,219);font-family:'-apple-system', 'SF UI Text', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif, SimHei, SimSun;font-size:20px;font-style:normal;font-variant:normal;font-weight:700;letter-spacing:normal;text-align:left;text-decoration:none;text-indent:0px;text-transform:none;word-spacing:0px;">
      http://blog.csdn.net/it_xiao_bai/article/details/79074988
     </a>
     <br/>
    </div>
   </div>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f:626c6f672e6373646e2e6e65742f71715f3236353931353137:2f61727469636c652f64657461696c732f3830343431353430</p>

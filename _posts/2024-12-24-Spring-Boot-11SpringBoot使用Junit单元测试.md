---
layout: post
title: Spring-Boot-11SpringBoot使用Junit单元测试
date: 2024-12-24 16:55:12 +0800
categories: [SpringBoot--从零开始学SpringBoot,(25)...SpringBoot]
tags: [SpringBoot,Junit]
image:
    path: https://img-blog.csdnimg.cn/202004181141280.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zOTgwMDE0NA==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150
    alt: Spring-Boot-11SpringBoot使用Junit单元测试
artid: 79241620
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Spring Boot---(11)SpringBoot使用Junit单元测试
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
     <span style="color:#3333ff;">
      <strong>
       摘要
      </strong>
      ：本文详细的记录了SpringBoot如何结合Junit写
      <strong>
       测试用例，如何执行，打包执行，忽略执行
      </strong>
      等操作，SpringBoot内置了Junit测试组件，使用很方便，不用再单独引入其他测试组件。
     </span>
    </p>
    <p>
    </p>
    <p>
     <span style="color:#3333ff;">
      <strong>
       演示环境
      </strong>
      ：
     </span>
    </p>
    <p>
     <span style="color:#3333ff;">
      SpringBoot + mybatis
     </span>
    </p>
    <p>
     <span style="color:#3333ff;">
      开发工具：IntelliJ IDEA
     </span>
    </p>
    <p>
    </p>
    <h4>
     1.pom.xml
    </h4>
    <p>
    </p>
    <p>
     一般使用idea新建一个SpringBoot web项目时，一般都会自动引入此依赖，如果没有，请手动引入。
    </p>
    <p>
    </p>
    <pre class="has"><code class="language-java">		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
			&lt;scope&gt;test&lt;/scope&gt;
		&lt;/dependency&gt;</code></pre>
    <h4>
    </h4>
    <h4>
     2.测试类基类
    </h4>
    <p>
    </p>
    <p>
     新建的项目，一般会有test包和test类，结构如下：
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/6f8727fe64adc98c235cc518dbdf6f9e.png"/>
    </p>
    <p>
     如果没有，我们自己创建一个，由于一个项目中我们会写很多很多测试类，而测试类上面是需要以下几个注解的，每建一个类都去补注解，太麻烦，我们就在这个类中加上注解，其他测试类直接继承这个类就好了：
    </p>
    <p>
    </p>
    <pre class="has"><code class="language-java">package com.alibaba;

import org.junit.After;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringRunner.class)
@SpringBootTest
//由于是Web项目，Junit需要模拟ServletContext，因此我们需要给我们的测试类加上@WebAppConfiguration。
@WebAppConfiguration
public class TmallApplicationTests {

    @Before
    public void init() {
        System.out.println("开始测试-----------------");
    }

    @After
    public void after() {
        System.out.println("测试结束-----------------");
    }
}
</code></pre>
    <h4>
    </h4>
    <h4>
     3.controller，service，dao等，省略，就是普通方法，普通接口
    </h4>
    <h4>
     <br/>
     4.测试类
    </h4>
    <p>
    </p>
    <p>
     我这里建一个测试类，继承基类，然后测试我service中的两个方法
    </p>
    <p>
    </p>
    <pre class="has"><code class="language-java">package com.alibaba;

import com.alibaba.service.EntFileService;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by lightClouds917
 * Date 2018/2/2
 * Description:测试类
 */
public class EntFileTest extends TmallApplicationTests {


    @Autowired
    private EntFileService entFileService;
    //@Ignore("not ready yet")
    @Test
    public void testGetEntFileById(){
        Assert.assertSame("企业数量有误",500,entFileService.getCount());
    }

    @Test
    public void testGetEntFileList(){
        Assert.assertSame("企业数量不为10",10,entFileService.getEntFileList());
    }
}
</code></pre>
    <p>
     如上，直接@Autowired引入你想测试的类就好，然后继承基类，测试方法上面要加@Test注解。
    </p>
    <p>
     然后，第一个测试方法：我想测试一下企业数量是不是600，参数意义：
    </p>
    <p>
     第一个参数：如果测试不通过，会抛出此消息，此参数可不要；
    </p>
    <p>
     第二个参数：我预期的值，我这里希望他查出来的结果是600；
    </p>
    <p>
     第三个参数：是实际的结果，就是我们调用方法返回的结果；
    </p>
    <p>
     我们可以看一下Assert类的源码：
     <br/>
    </p>
    <pre class="has"><code class="language-java">    /**
     * Asserts that two objects refer to the same object. If they are not, an
     * {@link AssertionError} is thrown with the given message.
     *
     * @param message the identifying message for the {@link AssertionError} (&lt;code&gt;null&lt;/code&gt;
     * okay)
     * @param expected the expected object
     * @param actual the object to compare to &lt;code&gt;expected&lt;/code&gt;
     */
    static public void assertSame(String message, Object expected, Object actual) {
        if (expected == actual) {
            return;
        }
        failNotSame(message, expected, actual);
    }

    /**
     * Asserts that two objects refer to the same object. If they are not the
     * same, an {@link AssertionError} without a message is thrown.
     *
     * @param expected the expected object
     * @param actual the object to compare to &lt;code&gt;expected&lt;/code&gt;
     */
    static public void assertSame(Object expected, Object actual) {
        assertSame(null, expected, actual);
    }</code></pre>
    <h4>
    </h4>
    <h4>
     5.运行测试用例
    </h4>
    <p>
    </p>
    <p>
     运行有两种方法：
    </p>
    <p>
     1.选中方法，右键，然后run 。。。；
    </p>
    <p>
     2.点击方法前的小标；
    </p>
    <p>
     具体操作如下截图：
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/75db479c9824bd229106539e0dc3846f.png"/>
    </p>
    <p>
     现在看运行结果，如下图：
    </p>
    <p>
     区块一：这里是测试用例的执行结果，由于未获得预期结果，打印出了我们提前设置的错误信息。
    </p>
    <p>
     区块二：这是测试用例的覆盖率，类的覆盖，方法的覆盖，行数的覆盖，非常详细。
    </p>
    <p>
     区块三：此区块是预期结果和实际结果的详细对比，点击后才会显示，如图点击位置。
    </p>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/b0a5927f2d9aeaecf61e2399d2a66f16.png"/>
    </p>
    <p>
     关于Assert中，还有很多断言方法，方法名字很规范，看名字就知道怎么用了，这里不再过多说明。
    </p>
    <h4>
    </h4>
    <h4>
     6.打包测试
    </h4>
    <p>
    </p>
    <p>
     项目开发完后，我们写了100个测试用例类，我不能每个类都点击进去，然后慢慢执行，SpringBoot提供了打包测试的方式：我们用一个类，把所有的测试类整理进去，然后直接运行这个类，所有的测试类都会执行。
    </p>
    <p>
     我这里建了两个测试类，分别是EntFileTest,EntFileTest2，现在我打包进TestSuits，让他们一次运行：
    </p>
    <p>
    </p>
    <pre class="has"><code class="language-java">@Suite.SuiteClasses({EntFileTest.class,EntFileTest2.class})</code></pre>
    <p>
     <img alt="" class="has" src="https://i-blog.csdnimg.cn/blog_migrate/a8066af0140c195b2eda91fc14c57b2a.png"/>
    </p>
    <p>
     打包完整代码：
    </p>
    <p>
    </p>
    <pre class="has"><code class="language-java">package com.alibaba;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

/**
 * Created by lightClouds917
 * Date 2018/2/2
 * Description:打包测试
 */
//@Ignore("not ready yet")
@RunWith(Suite.class)
@Suite.SuiteClasses({EntFileTest.class,EntFileTest2.class})
public class TestSuits {

    //不用写代码，只需要注解即可
}
</code></pre>
    <h4>
    </h4>
    <p>
    </p>
    <h4>
     7.忽略方法
    </h4>
    <p>
    </p>
    <p>
     当我一个测试类写了10个测试方法时，其中有1个我暂时不想测，想跳过，但是其他9个我想一次运行，怎么办？这里有一个忽略注解，写在方法上，可以忽略这个测试方法，写在类上，可以忽略这个类。
    </p>
    <p>
    </p>
    <pre class="has"><code class="language-java">package com.alibaba;

import com.alibaba.service.EntFileService;
import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by lightClouds917
 * Date 2018/2/2
 * Description:测试类
 */
public class EntFileTest extends TmallApplicationTests {


    @Autowired
    private EntFileService entFileService;

    @Ignore("not ready yet")
    @Test
    public void testGetEntFileById(){
        Assert.assertSame("企业数量有误",600,entFileService.getCount());
    }

    @Test
    public void testGetEntFileList(){
        Assert.assertSame("企业数量不为10",10,entFileService.getEntFileList());
    }
}
</code></pre>
    <p>
     此时，运行这个测试类，testGetEntFileById（）方法就会忽略执行。
    </p>
    <p>
     ----------------------------猝不及防，我要打广告了----------------------------
    </p>
    <p>
     欢迎关注公众号
     <strong>
      java4all，
     </strong>
     或添加
     <strong>
      IT云清
     </strong>
     个人号，一起聊技术聊成长。
     <br/>
     <br/>
     <img alt="" height="195" src="https://i-blog.csdnimg.cn/blog_migrate/c3a55afa06f97f484d031c0ff5b29440.png" width="195">
      <img alt="" height="203" src="https://i-blog.csdnimg.cn/blog_migrate/aa612c3faa3a23854b8fbef3584c2ee2.png" width="201"/>
     </img>
    </p>
    <p>
     <strong>
      java4all
     </strong>
     公众号
     <strong>
      IT云清
     </strong>
     个人号
    </p>
    <p>
     ----------------------------猝不及防，我要打广告了----------------------------
    </p>
   </div>
  </div>
 </article>
</div>



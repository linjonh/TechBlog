---
layout: post
title: Pytest和Allure测试框架-超详细版实战
date: 2019-09-23 20:28:27 +0800
categories: [python接口自动化]
tags: [自动化,测试用例,功能测试,selenium,python,pytest]
image:
    path: https://img-blog.csdnimg.cn/c7ac06602eab4ba691f87f91637339ac.png?x-oss-process&#61;image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rWL6K-V5LmL6YGTLg&#61;&#61;,size_20,color_FFFFFF,t_70,g_se,x_16
    alt: Pytest和Allure测试框架-超详细版实战
artid: 101204066
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Pytest和Allure测试框架-超详细版+实战
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
     <strong>
      加v:hz223336进群领取三大pytest自动化测试框架代码
     </strong>
     *
    </p>
    <p>
    </p>
    <div class="toc">
     <h4>
      文章目录
     </h4>
     <ul>
      <li>
       <a href="#pytest_3" rel="nofollow">
        一：pytest的介绍，安装，框架结构，执行方式
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1_6" rel="nofollow">
          1，特点
         </a>
        </li>
        <li>
         <a href="#2_15" rel="nofollow">
          2，安装
         </a>
        </li>
        <li>
         <a href="#3_pytest_26" rel="nofollow">
          3， pytest的框架结构
         </a>
        </li>
        <li>
         <a href="#4_38" rel="nofollow">
          4，执行方式
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#Pytest__48" rel="nofollow">
        二：Pytest -断言、跳过及运行
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1Pytest__49" rel="nofollow">
          1，Pytest -断言、跳过及运行
         </a>
        </li>
        <li>
         <a href="#2markskip_52" rel="nofollow">
          2，mark中的skip(跳过)
         </a>
        </li>
        <li>
         <a href="#3markxfail_54" rel="nofollow">
          3，mark中的xfail(失败)
         </a>
        </li>
        <li>
         <a href="#4mark_128" rel="nofollow">
          4,使用自定义标记mark只执行部分用例
         </a>
        </li>
        <li>
         <a href="#5_186" rel="nofollow">
          5,文件名类名方法执行部分用例
         </a>
        </li>
        <li>
         <a href="#6k__207" rel="nofollow">
          6,-k 组合调用执行部分用例
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_Pytest_fixture_227" rel="nofollow">
        三， Pytest -fixture
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1%E3%80%80_open_urlfixture_256" rel="nofollow">
          1.　如下： 定义一个函数名叫open_url的fixture前后置，前置为打开链接，后置为退出浏览器
         </a>
        </li>
        <li>
         <a href="#2_pytestmarkusefixturesfixture_270" rel="nofollow">
          2.在我们要用这个前后置的类前面 我们用@pytest.mark.usefixtures(fixture函数名)
         </a>
        </li>
        <li>
         <a href="#3conftestfixturefixturefixturefield_274" rel="nofollow">
          3.进阶方法：conftest中定义多个fixture，一个fixture可以是另一个fixture的前后置，期间还是用field隔开前后置
         </a>
        </li>
        <li>
         <a href="#4fixturefixture_289" rel="nofollow">
          4.说到上面的多个fixture调用，很多人就会疑惑，会不会fixture之间相互冲突。
         </a>
        </li>
        <li>
         <a href="#5fixtureautouse_302" rel="nofollow">
          5，fixture的自动应用autouse
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_353" rel="nofollow">
        四，参数化与数据驱动框架实现
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1_354" rel="nofollow">
          参数化1
         </a>
        </li>
        <li>
         <a href="#2_390" rel="nofollow">
          参数化2
         </a>
        </li>
        <li>
         <a href="#3_417" rel="nofollow">
          参数化3
         </a>
        </li>
        <li>
         <a href="#33_477" rel="nofollow">
          参数化3*3
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_537" rel="nofollow">
        五，第三方插件
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1_538" rel="nofollow">
          1，调整测试用例的执行顺序
         </a>
        </li>
        <li>
         <a href="#2__583" rel="nofollow">
          2， 执行用例遇到错误停止
         </a>
        </li>
        <li>
         <a href="#3_589" rel="nofollow">
          3，执行用例失败后重新运行
         </a>
        </li>
        <li>
         <a href="#4_596" rel="nofollow">
          4，多条断言前面报错后面依然执行
         </a>
        </li>
        <li>
         <a href="#5_607" rel="nofollow">
          5，多线程并行与分布式执行
         </a>
        </li>
        <li>
         <a href="#6_764" rel="nofollow">
          6，其他有意思的插件
         </a>
        </li>
        <li>
         <a href="#7pytestunittest_767" rel="nofollow">
          7，使用pytest执行unittest的测试用例
         </a>
        </li>
        <li>
         <a href="#8pytesthtml_770" rel="nofollow">
          8，pytest-html生成报告
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_824" rel="nofollow">
        六，日志管理及代码覆盖率
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1_pytestlogging_825" rel="nofollow">
          1， pytest中logging的应用
         </a>
        </li>
        <li>
         <a href="#2__827" rel="nofollow">
          2， 日志及级别的含义
         </a>
        </li>
        <li>
         <a href="#3__1115" rel="nofollow">
          3， 代码覆盖率-多用在单元测试中
         </a>
        </li>
        <li>
         <a href="#4allure_1258" rel="nofollow">
          4，allure测试报告框架
         </a>
        </li>
        <li>
         <a href="#5_1260" rel="nofollow">
          5，定制报告
         </a>
        </li>
        <li>
         <a href="#6pytest_1515" rel="nofollow">
          6，pytest运行指定用例
         </a>
        </li>
        <li>
         <a href="#7_1611" rel="nofollow">
          7，按重要性级别进行一定范围测试
         </a>
        </li>
        <li>
         <a href="#8_alluredescriptionalluretitle_1615" rel="nofollow">
          8， 为测试添加详说明@allure.description;@allure.title;
         </a>
        </li>
        <li>
         <a href="#9_allurelink__allureissue__alluretestcase_1682" rel="nofollow">
          9， 链接@allure.link @allure.issue @allure.testcase
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_pytestallure__1720" rel="nofollow">
        七， 单元自动化测试pytest和allure在测试中应用 自动执行
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#1__1721" rel="nofollow">
          1， 单元测试测试报告展示
         </a>
        </li>
        <li>
         <a href="#2_conftestdriversession_addfinalizer_1723" rel="nofollow">
          2， conftest中编写driver，范围session，使用 addfinalizer在测试结束后关闭浏览器
         </a>
        </li>
        <li>
         <a href="#3__1725" rel="nofollow">
          3， 前端自动化测试-百度搜索功能实战演示
         </a>
        </li>
        <li>
         <a href="#4Githubhttpsgithubcomlinda883py_techDemo_1777" rel="nofollow">
          4，源码:Github:https://github.com/linda883/py_techDemo
         </a>
        </li>
        <li>
         <a href="#5_CICDjenkins_1778" rel="nofollow">
          5， CI/CD使用jenkins进行持续集成
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_1784" rel="nofollow">
        八，天蝎座的测试之旅
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#httpsimgblogcsdnimgcn20190923202433781pngpic_center_1785" rel="nofollow">
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h2>
     <a id="pytest_3">
     </a>
     一：pytest的介绍，安装，框架结构，执行方式
    </h2>
    <p>
     **
    </p>
    <h3>
     <a id="1_6">
     </a>
     1，特点
    </h3>
    <p>
     ：1. 简单灵活，容易上手;支持参数化; 测试用例的skip和xfail 处理;
     <br/>
     2. 能够支持简单的单元测试和复杂的功能测试，还可以用来做 selenium/appium等自动化测试、接口自动化测试 (pytest+requests);
     <br/>
     3. pytest具有很多第三方插件，并且可以自定义扩展， 比较好 用的如 pytest-allure(完美html测试报告生成) pytest-xdist (多CPU分发)等;
     <br/>
     4. 可以很好的和jenkins集成;**
     <br/>
     5.
     <br/>
     **
    </p>
    <h3>
     <a id="2_15">
     </a>
     2，安装
    </h3>
    <p>
     ：pytest安装，导入相关依赖库
     <br/>
     Pip install –U pytest U表示升级
     <br/>
     Pip install sugar
     <br/>
     pip install pytest-rerunfailures
     <br/>
     Pip install pytest-xdist
     <br/>
     Pip install pytest-assume
     <br/>
     Pip intall pytest-html …
     <br/>
     Pip list查看
     <br/>
     Pytest –h 帮助**
    </p>
    <h3>
     <a id="3_pytest_26">
     </a>
     3， pytest的框架结构
    </h3>
    <p>
     Pytest框架结构
     <br/>
     Import pytest 类似的setup,teardown同样更灵活，还有个session()
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/59f1bf7d95edbc31618ed6deca3d890e.png">
      <br/>
      <strong>
       模块级
      </strong>
      (setup_module/
      <br/>
      teardown_module) 不在类中的函数有用
      <br/>
      <strong>
       函数级
      </strong>
      (setup_function/
      <br/>
      teardown_function) 不在类中的函数有用
      <br/>
      <strong>
       类级
      </strong>
      (setup_class/
      <br/>
      teardown_class)只在 类中前后运行一次。
      <br/>
      <strong>
       方法级
      </strong>
      (setup_method/
      <br/>
      teardown_methond) 运行在类中方法始末
     </img>
    </p>
    <h3>
     <a id="4_38">
     </a>
     4，执行方式
    </h3>
    <p>
     pytest的执行方式
     <br/>
     Pytest/py.test(终端，命令行，pycharm可配置pytest方式执行)
    </p>
    <ol>
     <li>
      Pytest –v (最高级别信息—verbose)
     </li>
     <li>
      pytest -v -s filename 3.Pytest-q (静默)
      <br/>
      (输出打印)
      <br/>
      多种执行方式
      <br/>
      1.pytest将在当前目录及其子目录中运行test _ * .py或*
      <em>
       test.py形 式的所有文件。
       <br/>
       2.以test_开头的函数，以Test开头的类，以test_开头的方法。所有包 package都要有__init
      </em>
      _.py文件。
      <br/>
      3.Pytest可以执行unittest框架写的用例和方法
     </li>
    </ol>
    <h2>
     <a id="Pytest__48">
     </a>
     二：Pytest -断言、跳过及运行
    </h2>
    <h3>
     <a id="1Pytest__49">
     </a>
     1，Pytest -断言、跳过及运行
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b714b3661fa7cb9d1abc2548cd754c7a.png">
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9964dcf693bea11f186659419ea64415.png"/>
     </img>
    </p>
    <h3>
     <a id="2markskip_52">
     </a>
     2，mark中的skip(跳过)
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/84948ab41504bdd112ad513a4c49fd46.png"/>
    </p>
    <h3>
     <a id="3markxfail_54">
     </a>
     3，mark中的xfail(失败)
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/83b7cf84afb0f26141c12a93dcc640f8.png">
      <br/>
      pytest.xfail()
      <br/>
      我们已经掌握了如果跳过执行测试用例，其中有一种方法是在测试函数中用pytest.skip()方法。我们现在要学的pytest.xfail()和pytest.skip()有些相似，只不过他的含义是：将该用例标记成xfail失败，并且该用例中的后续代码不会执行。
     </img>
    </p>
    <p>
     老规矩，上荔枝：我们在测试用例中调用pytes.xfail()方法，可以选择传入reason参数表示原因。
    </p>
    <pre><code class="prism language-python"><span class="token comment">#test_Pytest.py文件</span>
<span class="token comment">#coding=utf-8</span>

<span class="token keyword">import</span> pytest

<span class="token keyword">class</span> <span class="token class-name">Test_Pytest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token keyword">def</span> <span class="token function">test_one</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"----start------"</span><span class="token punctuation">)</span>
                pytest<span class="token punctuation">.</span>xfail<span class="token punctuation">(</span>reason<span class="token operator">=</span><span class="token string">'该功能尚未完成'</span><span class="token punctuation">)</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"test_one方法执行"</span> <span class="token punctuation">)</span>
                <span class="token keyword">assert</span> <span class="token number">1</span><span class="token operator">==</span><span class="token number">1</span>

        <span class="token keyword">def</span> <span class="token function">test_two</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"test_two方法执行"</span> <span class="token punctuation">)</span>
                <span class="token keyword">assert</span> <span class="token string">"o"</span> <span class="token keyword">in</span> <span class="token string">"love"</span>

        <span class="token keyword">def</span> <span class="token function">test_three</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"test_three方法执行"</span> <span class="token punctuation">)</span>
                <span class="token keyword">assert</span> <span class="token number">3</span><span class="token operator">-</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">1</span>

<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">"__main__"</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'-s'</span><span class="token punctuation">,</span><span class="token string">'-r'</span><span class="token punctuation">,</span><span class="token string">'test_Pytest.py'</span><span class="token punctuation">,</span><span class="token string">'test_Pytest.py'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre>
    <p>
     运行结果如下图：我们可以看到该用例中pytest.xfail()方法之前的代码运行了，之后的不再运行；结果中有一天用例被标记为xfail。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/cf23379d1cb989059c87a400ddb9f747.png"/>
    </p>
    <p>
     这个方法是我们直接将用例标记为失败，那什么情况我们会这么做呢？功能未完成、已知有问题。除此之外，就是用例的执行需要前置条件或操作，如果前置条件或操作失败，那么我们就可以直接将该用例设为失败，也就是xfail。
    </p>
    <p>
     @pytest.mark.xfail
     <br/>
     除了上面学习的pytest.xfail()，xfai还有一种使用方法。就是@pytest.mark.xfail标签，他的含义是期望测试用例是失败的，但是不会影响测试用例的的执行。如果测试用例执行失败的则结果是xfail（不会额外显示出错误信息）；如果测试用例执行成功的则结果是xpass。
    </p>
    <p>
     吃个荔枝：我们直接在测试用例上加上@pytest.mark.xfail标签。
    </p>
    <pre><code class="prism language-python"><span class="token comment">#test_Pytest.py文件</span>
<span class="token comment">#coding=utf-8</span>

<span class="token keyword">import</span> pytest

<span class="token keyword">class</span> <span class="token class-name">Test_Pytest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>xfail</span>
        <span class="token keyword">def</span> <span class="token function">test_one</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"test_one方法执行"</span> <span class="token punctuation">)</span>
                <span class="token keyword">assert</span> <span class="token number">1</span><span class="token operator">==</span><span class="token number">2</span>

        <span class="token keyword">def</span> <span class="token function">test_two</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"test_two方法执行"</span> <span class="token punctuation">)</span>
                <span class="token keyword">assert</span> <span class="token string">"o"</span> <span class="token keyword">in</span> <span class="token string">"love"</span>

        <span class="token keyword">def</span> <span class="token function">test_three</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"test_three方法执行"</span> <span class="token punctuation">)</span>
                <span class="token keyword">assert</span> <span class="token number">3</span><span class="token operator">-</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">1</span>

<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">"__main__"</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'-s'</span><span class="token punctuation">,</span><span class="token string">'test_Pytest.py'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
</code></pre>
    <p>
     运行结果如下图：可以看到我们标记的用例确实运行了；因为断言失败所以结果是xfailed，也没有像正常一样显示出错误用例及具体信息。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/080b5c4f6b26d9ffbe6b3acd3e35dae9.png">
      <br/>
      我们把断言改成正确的，再运行一次，结果如下图：尽管我们的用例正常运行通过，但是仍被标记为xpassed，而不是passed。
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/728a0199c4f6b85a049c8eec390409df.png"/>
     </img>
    </p>
    <h3>
     <a id="4mark_128">
     </a>
     4,使用自定义标记mark只执行部分用例
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/474fe87cf0a8ecfadb1e98f4611a6bfd.png"/>
     <br/>
     <strong>
      1.mark标记
     </strong>
     <br/>
     以下用例，标记test_send_http()为webtest
    </p>
    <pre><code class="prism language-py"><span class="token comment"># content of test_server.py</span>

<span class="token keyword">import</span> pytest

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>webtest</span>
<span class="token keyword">def</span> <span class="token function">test_send_http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span> <span class="token comment"># perform some webtest test for your app</span>

<span class="token keyword">def</span> <span class="token function">test_something_quick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">test_another</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">TestClass</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">test_method</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"-s"</span><span class="token punctuation">,</span> <span class="token string">"test_server.py"</span><span class="token punctuation">,</span> <span class="token string">"-m=webtest"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
只运行用webtest标记的测试，cmd运行的时候，加个<span class="token operator">-</span>m 参数，指定参数值webtest

```py
pytest <span class="token operator">-</span>v <span class="token operator">-</span>m webtest
</code></pre>
    <p>
     如果不想执行标记webtest的用例，那就用”not webtest”
    </p>
    <pre><code class="prism language-py">pytest <span class="token operator">-</span>v <span class="token operator">-</span>m “<span class="token keyword">not</span> webtest”
</code></pre>
    <pre><code class="prism language-py"><span class="token keyword">import</span> pytest

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>webtest</span>
<span class="token keyword">def</span> <span class="token function">test_send_http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span> <span class="token comment"># perform some webtest test for your app</span>
<span class="token keyword">def</span> <span class="token function">test_something_quick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">def</span> <span class="token function">test_another</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">class</span> <span class="token class-name">TestClass</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">test_method</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"-s"</span><span class="token punctuation">,</span> <span class="token string">"test_server.py"</span><span class="token punctuation">,</span> <span class="token string">"-m='not webtest'"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre>
    <h3>
     <a id="5_186">
     </a>
     5,文件名类名方法执行部分用例
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/89e800943e11a8ae206c956a4f3b1be0.png"/>
     <br/>
     <strong>
      2.-v 指定的函数节点id
     </strong>
     <br/>
     如果想指定运行某个.py模块下，类里面的一个用例，如：TestClass里面testmethod用例
     <br/>
     每个test开头(或_test结尾)的用例，函数(或方法)的名称就是用例的节点id，指定节点id运行用-v 参数
    </p>
    <pre><code class="prism language-py">pytest <span class="token operator">-</span>v test_server<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>TestClass<span class="token punctuation">:</span><span class="token punctuation">:</span>test_method
</code></pre>
    <p>
     当然也能选择运行整个class
    </p>
    <pre><code class="prism language-py"> pytest <span class="token operator">-</span>v test_server<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>TestClass
</code></pre>
    <p>
     也能选择多个节点运行，多个节点中间空格隔开
    </p>
    <pre><code class="prism language-py">pytest <span class="token operator">-</span>v test_server<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>TestClass test_server<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_send_http
</code></pre>
    <h3>
     <a id="6k__207">
     </a>
     6,-k 组合调用执行部分用例
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/0e2f093d175d45d0e78323f8e227ba79.png"/>
     <br/>
     <strong>
      .-k 匹配用例名称
     </strong>
     <br/>
     可以使用-k命令行选项指定在匹配用例名称的表达式
    </p>
    <pre><code class="prism language-py">pytest <span class="token operator">-</span>v <span class="token operator">-</span>k http
</code></pre>
    <p>
     您也可以运行所有的测试，根据用例名称排除掉某些用例：
    </p>
    <pre><code class="prism language-py">pytest <span class="token operator">-</span>k “<span class="token keyword">not</span> send_http” <span class="token operator">-</span>v
</code></pre>
    <p>
     也可以同时选择匹配 “http” 和“quick”
    </p>
    <pre><code class="prism language-py">pytest <span class="token operator">-</span>k “http <span class="token keyword">or</span> quick” <span class="token operator">-</span>v
</code></pre>
    <h2>
     <a id="_Pytest_fixture_227">
     </a>
     三， Pytest -fixture
    </h2>
    <p>
     下面都有实战很详细-fixture确实牛逼
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/1c7acf90bc4076f257234f1938c06a58.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/090f09df361009b6a411f6b1ec986083.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f0156bb3516a990c533330424f99c279.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5475773c65ebfd461800bca3eb2a3069.png"/>
     <br/>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/b59a943dfc0f2b421b7bdd62fe096000.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/18e4c7e2006d190cc27b9b84f4b5e867.png"/>
     <br/>
     pytest 相较于 unittest 最为跳跃的一点应该就是 fixture 机制
    </p>
    <p>
     对于unittest来说，每个用例的类中都需要去写入setUp和tearDown。也就是我们所说的前置和后置，
    </p>
    <p>
     而不可避免的，很多用例的前置和后置都是一样（例如很多用例都需要前置登录，后置退出），于是我们需要重复的复制粘贴，这样导致工作量增加，代码量也增加，界面也显得冗杂。
    </p>
    <p>
     所以此时
     <strong>
      pytest中fixture机制便要闪亮登场了
     </strong>
     。
    </p>
    <p>
     通俗的讲： fixture = 前置+后置
    </p>
    <p>
     而方便的是：如果很多用例都有同样的前置和后置，那么我就只实现一个，然后需要的用例就去调用就好了。
    </p>
    <p>
     <strong>
      1.机制：与测试用例同级，或者是测试用例的父级，创建一个conftest.py文件。
      <br/>
      2.conftest.py文件里：放所有的前置和后置。 不需要用例.py文件主动引入conftest文件。
      <br/>
      3.定义一个函数：包含前置操作+后置操作。
      <br/>
      4.把函数声明为fixture :在函数前面加上 @pytest.fixture(作用级别=默认为function)
      <br/>
      5.fixture的定义。
      <br/>
      如果有返回值，那么写在yield后面。（yield的作用就相当于return）
      <br/>
      在测试用例当中，调用有返回值的fixture函数时，函数名称就是代表返回值。
      <br/>
      在测试用例当中，函数名称作为用例的参数即可。
     </strong>
    </p>
    <h3>
     <a id="1%E3%80%80_open_urlfixture_256">
     </a>
     1.　如下： 定义一个函数名叫open_url的fixture前后置，前置为打开链接，后置为退出浏览器
    </h3>
    <p>
     @pytest.fixture(scope=“class”) #定义scope的范围
    </p>
    <pre><code class="prism language-py">　　<span class="token keyword">def</span> <span class="token function">open_url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 前置</span>
    driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>
    driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token comment">#url为链接地址</span>
    <span class="token keyword">yield</span> driver    <span class="token comment">#yield之前代码是前置，之后的代码就是后置。</span>
    <span class="token comment"># 后置</span>
    driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     这样我们就定义了一个叫做 open_url 的 fixture
    </p>
    <h3>
     <a id="2_pytestmarkusefixturesfixture_270">
     </a>
     2.在我们要用这个前后置的类前面 我们用@pytest.mark.usefixtures(fixture函数名)
    </h3>
    <p>
     就可以直接调用上面定义好的这个前后置
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ebd37e832c3c69a8ab6c81bba74748c4.png"/>
     <br/>
     可以看到 在TestLogin 这个类中 我们不再去编写setup 和 teardown. 直接写我们的中间过程就可以了。是不是很方便了？
    </p>
    <h3>
     <a id="3conftestfixturefixturefixturefield_274">
     </a>
     3.进阶方法：conftest中定义多个fixture，一个fixture可以是另一个fixture的前后置，期间还是用field隔开前后置
    </h3>
    <p>
     如上图中可以看到我class中另外还引用了一个名为refresh_page的fixture，直接上代码：
    </p>
    <pre><code class="prism language-py"><span class="token comment"># 刷新页面 - 定义的第二个fixture</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span>
<span class="token keyword">def</span> <span class="token function">refresh_page</span><span class="token punctuation">(</span>open_url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">yield</span>
    open_url<span class="token punctuation">.</span>refresh<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     直接将open_url作为了另一个fixture的前置引用进来，用yield隔开，当用例中执行完open_url前后置后，再执行了一次refresh的后置。
     <br/>
     执行顺序： open_url yield 之前代码 – 用例代码 – open_url yield 之后代码 --》 refresh_page yield 之后代码
     <br/>
     是不是很妙，可以解决许多用例流程环环相扣时的麻烦。
    </p>
    <h3>
     <a id="4fixturefixture_289">
     </a>
     4.说到上面的多个fixture调用，很多人就会疑惑，会不会fixture之间相互冲突。
    </h3>
    <p>
     当然是不会了，fixture在conftest.py当中就已经决定了他的用例域，他会主动去区分你这个fixture是作用在哪个用例域。
     <br/>
     首先我们看一下框架中对于fixture函数的定义：
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/294082e1deaa867fad4aded79e8e9f1c.png"/>
    </p>
    <p>
     scope便是定义用例域的范围：
     <br/>
     function：默认范围，每一个函数或方法都会调用，不填写时便是它
     <br/>
     class：每一个类调用一次
     <br/>
     module: 每一个.py文件调用一次，文件中可以有多个function和class
     <br/>
     session：多个文件调用一次，可以跨文件，如在.py文件中，每一个.py文件就是module
     <br/>
     范围：
     <br/>
     session &gt; module &gt; class &gt; function
    </p>
    <p>
     所以在调用时各个fixture之间并不会相互冲突。
    </p>
    <h3>
     <a id="5fixtureautouse_302">
     </a>
     5，fixture的自动应用autouse
    </h3>
    <p>
     autouse调用例子：**
     <br/>
     当管理用例比较多的时候，这种方法比较方便高效，但是用该功能时也要小心，一定要注意fixture的作用范围。需要注意的是，当使用这种方式时，就不能使用返回值的功了。autouse默认设置为False。当默认为False，就可以选择用上面两种方式来试用fixture。当设置为True时，所有的test都会自动调用这个fixture。autouse遵循scope="关键字参数"规则：当scope="session"时，无论怎样定义只运行一次；当scope="module"时，每个py文件只运行一次；当scope="class"时，每个class只运行一次（但是一个文件中包括function和class时，会在每个function(不在class中)运行一次）；当scope="function"时，每个function运行一次；
     <br/>
     ‘’’
     <br/>
     <strong>
      平常写自动化用例会写一些前置的fixture操作，用例需要用到就直接传该函数的参数名称就行了。当用例很多的时候，每次都传这个参数，会比较麻烦。
      <br/>
      fixture里面有个参数autouse，默认是Fasle没开启的，可以设置为True开启自动使用fixture功能，这样用例就不用每次都去传参了
     </strong>
    </p>
    <p>
     设置autouse=True
     <br/>
     autouse设置为True，自动调用fixture功能
     <br/>
     start设置scope为module级别，在当前.py用例模块只执行一次，autouse=True自动使用[图片]open_home设置scope为function级别，
     <br/>
     每个用例前都调用一次，自动使用
    </p>
    <pre><code class="prism language-py"><span class="token keyword">import</span> pytest

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span>scope<span class="token operator">=</span><span class="token string">"module"</span><span class="token punctuation">,</span>autouse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"\n----开始执行module------"</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'module : %s'</span><span class="token operator">%</span> request<span class="token punctuation">.</span>module<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'------启动浏览器-------'</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"------结束测试 end!----------"</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span>scope<span class="token operator">=</span><span class="token string">"function"</span><span class="token punctuation">,</span>autouse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">open_home</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"function:%s \n--回到首页--"</span><span class="token operator">%</span> request<span class="token punctuation">.</span>function<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">test_01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'----用例01-----'</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">test_02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'----用例02-----'</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"-s"</span><span class="token punctuation">,</span><span class="token string">"autouse.py"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre>
    <p>
     执行结果
    </p>
    <pre><code class="prism language-py"><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>开始执行module<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
module <span class="token punctuation">:</span> autouse
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>启动浏览器<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
function<span class="token punctuation">:</span>test_01 
<span class="token operator">-</span><span class="token operator">-</span>回到首页<span class="token operator">-</span><span class="token operator">-</span>
<span class="token punctuation">.</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>用例<span class="token number">01</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
function<span class="token punctuation">:</span>test_02 
<span class="token operator">-</span><span class="token operator">-</span>回到首页<span class="token operator">-</span><span class="token operator">-</span>
<span class="token punctuation">.</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>用例<span class="token number">02</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>结束测试 end!<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
</code></pre>
    <h2>
     <a id="_353">
     </a>
     四，参数化与数据驱动框架实现
    </h2>
    <h3>
     <a id="1_354">
     </a>
     参数化1
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a5e544f6dacccc9fafb403c97a18ac2f.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/52e318ebcccf10ec53ae664bc5f8bd40.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/93e2a8a45b083fd3d82689bf58173300.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/880017616033f4ecefdda9ca5c07391d.png"/>
    </p>
    <pre><code class="prism language-py"><span class="token keyword">import</span> pytest


<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">'test_input,expected'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">'3+5'</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         <span class="token punctuation">(</span><span class="token string">'2-1'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'7*5'</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_eval</span><span class="token punctuation">(</span>test_input<span class="token punctuation">,</span>expected<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> <span class="token builtin">eval</span><span class="token punctuation">(</span>test_input<span class="token punctuation">)</span><span class="token operator">==</span>expected　　　　<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token builtin">eval</span>把字符串转换成表达式


est_param<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_eval<span class="token punctuation">[</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
test_param<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_eval<span class="token punctuation">[</span><span class="token number">7</span><span class="token operator">*</span><span class="token number">5</span><span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">]</span> PASSED <span class="token punctuation">[</span> <span class="token number">33</span><span class="token operator">%</span><span class="token punctuation">]</span>PASSED <span class="token punctuation">[</span> <span class="token number">66</span><span class="token operator">%</span><span class="token punctuation">]</span>FAILED <span class="token punctuation">[</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">]</span>
test_param<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token number">3</span> <span class="token punctuation">(</span>test_eval<span class="token punctuation">[</span><span class="token number">7</span><span class="token operator">*</span><span class="token number">5</span><span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token number">35</span> <span class="token operator">!=</span> <span class="token number">30</span>

Expected <span class="token punctuation">:</span><span class="token number">30</span>
Actual <span class="token punctuation">:</span><span class="token number">35</span>
<span class="token operator">&lt;</span>Click to see difference<span class="token operator">&gt;</span>

test_input <span class="token operator">=</span> <span class="token string">'7*5'</span><span class="token punctuation">,</span> expected <span class="token operator">=</span> <span class="token number">30</span>

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">'test_input,expected'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">'3+5'</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'2-1'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'7*5'</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_eval</span><span class="token punctuation">(</span>test_input<span class="token punctuation">,</span>expected<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span> <span class="token keyword">assert</span> <span class="token builtin">eval</span><span class="token punctuation">(</span>test_input<span class="token punctuation">)</span><span class="token operator">==</span>expected
E <span class="token keyword">assert</span> <span class="token number">35</span> <span class="token operator">==</span> <span class="token number">30</span>　　　　　　　　　　<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>提示把<span class="token number">30</span>改成<span class="token number">35</span>

test_param<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token number">7</span><span class="token punctuation">:</span> AssertionError

Assertion failed
</code></pre>
    <h3>
     <a id="2_390">
     </a>
     参数化2
    </h3>
    <pre><code class="prism language-py"><span class="token keyword">import</span> pytest
test_user_data<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'linda'</span><span class="token punctuation">,</span><span class="token string">'sai'</span><span class="token punctuation">,</span><span class="token string">'tom'</span><span class="token punctuation">]</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span>scope<span class="token operator">=</span><span class="token string">'module'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    user<span class="token operator">=</span>request<span class="token punctuation">.</span>param
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'打开首页登陆%s'</span><span class="token operator">%</span>user<span class="token punctuation">)</span>
    <span class="token keyword">return</span> user


<span class="token comment">#indirect=True是把login当作函数去执行</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">'login'</span><span class="token punctuation">,</span>test_user_data<span class="token punctuation">,</span>indirect<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_cart</span><span class="token punctuation">(</span>login<span class="token punctuation">)</span><span class="token punctuation">:</span>
    usera<span class="token operator">=</span>login
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'不同用户添加购物车%s'</span><span class="token operator">%</span>usera<span class="token punctuation">)</span>
    <span class="token keyword">assert</span> usera<span class="token operator">!=</span><span class="token string">''</span>

Process finished <span class="token keyword">with</span> exit code <span class="token number">0</span>
打开首页登陆linda
PASSED <span class="token punctuation">[</span> <span class="token number">33</span><span class="token operator">%</span><span class="token punctuation">]</span>不同用户添加购物车linda
打开首页登陆sai
PASSED <span class="token punctuation">[</span> <span class="token number">66</span><span class="token operator">%</span><span class="token punctuation">]</span>不同用户添加购物车sai
打开首页登陆tom
PASSED <span class="token punctuation">[</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">]</span>不同用户添加购物车tom
</code></pre>
    <h3>
     <a id="3_417">
     </a>
     参数化3
    </h3>
    <pre><code class="prism language-py"><span class="token keyword">import</span> pytest
test_user_data<span class="token operator">=</span><span class="token punctuation">[</span>
    <span class="token punctuation">{<!-- --></span><span class="token string">'user'</span><span class="token punctuation">:</span><span class="token string">'linda'</span><span class="token punctuation">,</span><span class="token string">'password'</span><span class="token punctuation">:</span><span class="token string">'8888'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{<!-- --></span><span class="token string">'user'</span><span class="token punctuation">:</span><span class="token string">'servenruby'</span><span class="token punctuation">,</span><span class="token string">'password'</span><span class="token punctuation">:</span><span class="token string">'123456'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{<!-- --></span><span class="token string">'user'</span><span class="token punctuation">:</span><span class="token string">'test01'</span><span class="token punctuation">,</span><span class="token string">'password'</span><span class="token punctuation">:</span><span class="token string">''</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span>scope<span class="token operator">=</span><span class="token string">'module'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login_r</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#可以通过dict形式,虽然传递一个参数，但通过key的方式可以达到累死传入多个参数的效果</span>
    user<span class="token operator">=</span>request<span class="token punctuation">.</span>param<span class="token punctuation">[</span><span class="token string">'user'</span><span class="token punctuation">]</span>
    pwd<span class="token operator">=</span>request<span class="token punctuation">.</span>param<span class="token punctuation">[</span><span class="token string">'password'</span><span class="token punctuation">]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'\n打开首页准备登陆，登陆用户%s,密码%s'</span><span class="token operator">%</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span>pwd<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> pwd<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>

<span class="token comment">#这是pytest参数化驱动,indeirect=True是把login_r当作函数去执行</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">'login_r'</span><span class="token punctuation">,</span>test_user_data<span class="token punctuation">,</span>indirect<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_cart</span><span class="token punctuation">(</span>login_r<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#登陆用例</span>
    a<span class="token operator">=</span>login_r
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'测试用例中login_r的返回值%s'</span><span class="token operator">%</span>a<span class="token punctuation">)</span>
    <span class="token keyword">assert</span> a<span class="token punctuation">,</span><span class="token string">'失败原因，密码为空'</span>

开首页准备登陆，登陆用户linda<span class="token punctuation">,</span>密码<span class="token number">8888</span>
PASSED <span class="token punctuation">[</span> <span class="token number">33</span><span class="token operator">%</span><span class="token punctuation">]</span>测试用例中login_r的返回值<span class="token boolean">True</span>

打开首页准备登陆，登陆用户servenruby<span class="token punctuation">,</span>密码<span class="token number">123456</span>
PASSED <span class="token punctuation">[</span> <span class="token number">66</span><span class="token operator">%</span><span class="token punctuation">]</span>测试用例中login_r的返回值<span class="token boolean">True</span>

打开首页准备登陆，登陆用户test01<span class="token punctuation">,</span>密码
FAILED <span class="token punctuation">[</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">]</span>测试用例中login_r的返回值<span class="token boolean">False</span>


打开首页准备登陆，登陆用户linda<span class="token punctuation">,</span>密码<span class="token number">8888</span>
PASSED <span class="token punctuation">[</span> <span class="token number">33</span><span class="token operator">%</span><span class="token punctuation">]</span>测试用例中login_r的返回值<span class="token boolean">True</span>

打开首页准备登陆，登陆用户servenruby<span class="token punctuation">,</span>密码<span class="token number">123456</span>
PASSED <span class="token punctuation">[</span> <span class="token number">66</span><span class="token operator">%</span><span class="token punctuation">]</span>测试用例中login_r的返回值<span class="token boolean">True</span>

打开首页准备登陆，登陆用户test01<span class="token punctuation">,</span>密码
FAILED <span class="token punctuation">[</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">]</span>测试用例中login_r的返回值<span class="token boolean">False</span>

test_mark_param_request2<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token number">19</span> <span class="token punctuation">(</span>test_cart<span class="token punctuation">[</span>login_r2<span class="token punctuation">]</span><span class="token punctuation">)</span>
login_r <span class="token operator">=</span> <span class="token boolean">False</span>

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">'login_r'</span><span class="token punctuation">,</span>test_user_data<span class="token punctuation">,</span>indirect<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_cart</span><span class="token punctuation">(</span>login_r<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token comment">#登陆用例</span>
a<span class="token operator">=</span>login_r
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'测试用例中login_r的返回值%s'</span><span class="token operator">%</span>a<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token keyword">assert</span> a<span class="token punctuation">,</span><span class="token string">'失败原因，密码为空'</span>
E AssertionError<span class="token punctuation">:</span> 失败原因，密码为空
E <span class="token keyword">assert</span> <span class="token boolean">False</span>
</code></pre>
    <h3>
     <a id="33_477">
     </a>
     参数化3*3
    </h3>
    <pre><code class="prism language-py"><span class="token keyword">import</span> pytest
test_user_data1<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">{<!-- --></span><span class="token string">'user'</span><span class="token punctuation">:</span><span class="token string">'linda'</span><span class="token punctuation">,</span><span class="token string">'password'</span><span class="token punctuation">:</span><span class="token string">'888888'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                 <span class="token punctuation">{<!-- --></span><span class="token string">'user'</span><span class="token punctuation">:</span><span class="token string">'servenruby'</span><span class="token punctuation">,</span><span class="token string">'password'</span><span class="token punctuation">:</span><span class="token string">'123456'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                 <span class="token punctuation">{<!-- --></span><span class="token string">'user'</span><span class="token punctuation">:</span><span class="token string">'test01'</span><span class="token punctuation">,</span><span class="token string">'password'</span><span class="token punctuation">:</span><span class="token string">''</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
test_user_data2<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">{<!-- --></span><span class="token string">'q'</span><span class="token punctuation">:</span><span class="token string">'中国平安'</span><span class="token punctuation">,</span><span class="token string">'count'</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">'page'</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                 <span class="token punctuation">{<!-- --></span><span class="token string">'q'</span><span class="token punctuation">:</span><span class="token string">'阿里巴巴'</span><span class="token punctuation">,</span><span class="token string">'count'</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'page'</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                 <span class="token punctuation">{<!-- --></span><span class="token string">'q'</span><span class="token punctuation">:</span><span class="token string">'pdd'</span><span class="token punctuation">,</span><span class="token string">'count'</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">'page'</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span>scope<span class="token operator">=</span><span class="token string">'module'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login_r</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#这是接受不了输入的参数，接收一个参数</span>
    user<span class="token operator">=</span>request<span class="token punctuation">.</span>param<span class="token punctuation">[</span><span class="token string">'user'</span><span class="token punctuation">]</span>
    pwd<span class="token operator">=</span>request<span class="token punctuation">.</span>param<span class="token punctuation">[</span><span class="token string">'password'</span><span class="token punctuation">]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'\n用户名:%s,密码:%s'</span><span class="token operator">%</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span>pwd<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span>scope<span class="token operator">=</span><span class="token string">'module'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">query_param</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    q<span class="token operator">=</span>request<span class="token punctuation">.</span>param<span class="token punctuation">[</span><span class="token string">'q'</span><span class="token punctuation">]</span>
    count<span class="token operator">=</span>request<span class="token punctuation">.</span>param<span class="token punctuation">[</span><span class="token string">'count'</span><span class="token punctuation">]</span>
    page<span class="token operator">=</span>request<span class="token punctuation">.</span>param<span class="token punctuation">[</span><span class="token string">'page'</span><span class="token punctuation">]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'查询的搜索词%s'</span><span class="token operator">%</span>q<span class="token punctuation">)</span>
    <span class="token keyword">return</span> request<span class="token punctuation">.</span>param

<span class="token comment">#这是pytest的数据驱动,indeirect=True是把login_r当作函数去执行</span>
<span class="token comment">#从下往上执行</span>
<span class="token comment">#两个数据进行组合测试，有3*3个测试用例执行(test_user_data1的个数*test_user_data2的个数</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">'query_param'</span><span class="token punctuation">,</span>test_user_data2<span class="token punctuation">,</span>indirect<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">'login_r'</span><span class="token punctuation">,</span>test_user_data1<span class="token punctuation">,</span>indirect<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_login</span><span class="token punctuation">(</span>login_r<span class="token punctuation">,</span>query_param<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#登陆用例</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>login_r<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>query_param<span class="token punctuation">)</span>


pytest_mark_request3<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_login<span class="token punctuation">[</span>login_r1<span class="token operator">-</span>query_param0<span class="token punctuation">]</span> ✓ <span class="token number">44</span><span class="token operator">%</span> ████▌ 查询的搜索词pdd
<span class="token boolean">None</span>
<span class="token punctuation">{<!-- --></span><span class="token string">'q'</span><span class="token punctuation">:</span> <span class="token string">'pdd'</span><span class="token punctuation">,</span> <span class="token string">'count'</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'page'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>

pytest_mark_request3<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_login<span class="token punctuation">[</span>login_r1<span class="token operator">-</span>query_param2<span class="token punctuation">]</span> ✓ <span class="token number">56</span><span class="token operator">%</span> █████▋
用户名<span class="token punctuation">:</span>linda<span class="token punctuation">,</span>密码<span class="token punctuation">:</span><span class="token number">888888</span>
<span class="token boolean">None</span>
<span class="token punctuation">{<!-- --></span><span class="token string">'q'</span><span class="token punctuation">:</span> <span class="token string">'pdd'</span><span class="token punctuation">,</span> <span class="token string">'count'</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'page'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>

pytest_mark_request3<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_login<span class="token punctuation">[</span>login_r0<span class="token operator">-</span>query_param2<span class="token punctuation">]</span> ✓ <span class="token number">67</span><span class="token operator">%</span> ██████▋
用户名<span class="token punctuation">:</span>test01<span class="token punctuation">,</span>密码<span class="token punctuation">:</span>
<span class="token boolean">None</span>
<span class="token punctuation">{<!-- --></span><span class="token string">'q'</span><span class="token punctuation">:</span> <span class="token string">'pdd'</span><span class="token punctuation">,</span> <span class="token string">'count'</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'page'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>

pytest_mark_request3<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_login<span class="token punctuation">[</span>login_r2<span class="token operator">-</span>query_param2<span class="token punctuation">]</span> ✓ <span class="token number">78</span><span class="token operator">%</span> ███████▊ 查询的搜索词阿里巴巴
<span class="token boolean">None</span>
<span class="token punctuation">{<!-- --></span><span class="token string">'q'</span><span class="token punctuation">:</span> <span class="token string">'阿里巴巴'</span><span class="token punctuation">,</span> <span class="token string">'count'</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'page'</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>

pytest_mark_request3<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_login<span class="token punctuation">[</span>login_r2<span class="token operator">-</span>query_param1<span class="token punctuation">]</span> ✓ <span class="token number">89</span><span class="token operator">%</span> ████████▉ 查询的搜索词中国平安
<span class="token boolean">None</span>
<span class="token punctuation">{<!-- --></span><span class="token string">'q'</span><span class="token punctuation">:</span> <span class="token string">'中国平安'</span><span class="token punctuation">,</span> <span class="token string">'count'</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'page'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>

pytest_mark_request3<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_login<span class="token punctuation">[</span>login_r2<span class="token operator">-</span>query_param0<span class="token punctuation">]</span> ✓ <span class="token number">100</span><span class="token operator">%</span> ██████████
</code></pre>
    <h2>
     <a id="_537">
     </a>
     五，第三方插件
    </h2>
    <h3>
     <a id="1_538">
     </a>
     1，调整测试用例的执行顺序
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b1407134f7b8cd6967daed41211d982c.png"/>
     <br/>
     <strong>
      场景:未考虑按自然顺序执行时，或想变更执行顺序，比如增加 数据的用例要先执行，再执行删除的用例。测试用例默认是按名 称顺序执行的。
      <br/>
      • 解决:
      <br/>
      • 安装:pip install pytest-ordering
      <br/>
      • 在测试方法上加下面装饰器
      <br/>
      •@pytest.mark.last　　　　—最后一个执行
      <br/>
      • @pytest.mark.run(order=1)—第几个执行
      <br/>
      pytest默认按字母顺序去执行的
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token keyword">import</span> pytest
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>run</span><span class="token punctuation">(</span>order<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'test01'</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>run</span><span class="token punctuation">(</span>order<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'test01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>last</span>
<span class="token keyword">def</span> <span class="token function">test_06</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'test01'</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">test_04</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'test01'</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">test_05</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'test01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>run</span><span class="token punctuation">(</span>order<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_03</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'test01'</span><span class="token punctuation">)</span>

pytest_order<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_01 PASSED <span class="token punctuation">[</span> <span class="token number">16</span><span class="token operator">%</span><span class="token punctuation">]</span>test01

pytest_order<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_02 PASSED <span class="token punctuation">[</span> <span class="token number">33</span><span class="token operator">%</span><span class="token punctuation">]</span>test01

pytest_order<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_03 PASSED <span class="token punctuation">[</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">]</span>test01

pytest_order<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_04 PASSED <span class="token punctuation">[</span> <span class="token number">66</span><span class="token operator">%</span><span class="token punctuation">]</span>test01

pytest_order<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_05 PASSED <span class="token punctuation">[</span> <span class="token number">83</span><span class="token operator">%</span><span class="token punctuation">]</span>test01

pytest_order<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_06 PASSED <span class="token punctuation">[</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">]</span>test01
</code></pre>
    <h3>
     <a id="2__583">
     </a>
     2， 执行用例遇到错误停止
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f5deaa4d6172b27978a89bb35a2e0fdd.png"/>
     <br/>
     <strong>
      • 正常全部执行完成后才能停止，如果想遇到错误时停止测试: -x;也可以当用例错误个数n达到指定数量时，停止测试:- - maxfail=n
      <br/>
      • 执行:
      <br/>
      • pytest -x -v -s 文件名.py　　　　　　------- -x是遇到错误就停止
      <br/>
      • pytest -x -v -s 文件名.py —maxfail=2　　------- --maxfail=2 是遇到两个错误就停止
     </strong>
    </p>
    <h3>
     <a id="3_589">
     </a>
     3，执行用例失败后重新运行
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/469beede8d7460df4a2e9bdfbfbeac29.png"/>
     <br/>
     **场景:
     <br/>
     • 测试失败后要重新运行n次，要在重新运行之间添加延迟时 间，间隔n秒再运行。
     <br/>
     • 执行:
     <br/>
     • 安装:pip install pytest-rerunfailures
     <br/>
     • pytest -v - -reruns 5 --reruns-delay 1 —每次等1秒 重试5次
    </p>
    <h3>
     <a id="4_596">
     </a>
     4，多条断言前面报错后面依然执行
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/74a8b4143fe2158a713e10fe1907a976.png"/>
     <br/>
     pip3 install pytest-assume 断言后继续执行，但要修改断言**
    </p>
    <pre><code class="prism language-py"><span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_assume</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>assume<span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span>
    pytest<span class="token punctuation">.</span>assume<span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span>
    pytest<span class="token punctuation">.</span>assume<span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">)</span>
</code></pre>
    <h3>
     <a id="5_607">
     </a>
     5，多线程并行与分布式执行
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/701a917491b807d0bfd83ae4f3fa2092.png"/>
     <br/>
     <strong>
      场景:测试用例1000条，一个用例执行1钟，一个测试人员执行需要1000分 钟。通常我们会用人力成本换取时间成本，加几个人一起执行，时间就会缩
      <br/>
      短。如果10人一起执行只需要100分钟，这就是一种并行测试，分布式场景。
      <br/>
      解决:pytest分布式执行插件:pytest-xdist，多个CPU或主机执行
      <br/>
      前提:用例之间都是独立的，没有先后顺序，随机都能执行，可重复运行不 影响其他用例。
      <br/>
      安装:Pip3 install pytest-xdist
      <br/>
      • 多个CPU并行执行用例，直接加-n 3是并行数量:pytest -n 3 • 在多个终端下一起执行
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token keyword">import</span> pytest
<span class="token keyword">import</span> time

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">,</span><span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_somethins</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

pytest <span class="token operator">-</span>v <span class="token operator">-</span>s <span class="token operator">-</span>n <span class="token number">5</span> test_xsdist<span class="token punctuation">.</span>py  <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>一次执行<span class="token number">5</span>个
</code></pre>
    <p>
     运行以下代码，项目结构如下
    </p>
    <p>
     web_conf_py是项目工程名称
    </p>
    <pre><code class="prism language-py">│  conftest<span class="token punctuation">.</span>py
│  __init__<span class="token punctuation">.</span>py
│              
├─baidu
│  │  conftest<span class="token punctuation">.</span>py
│  │  test_1_baidu<span class="token punctuation">.</span>py
│  │  test_2<span class="token punctuation">.</span>py
│  │  __init__<span class="token punctuation">.</span>py 
│          
├─blog
│  │  conftest<span class="token punctuation">.</span>py
│  │  test_2_blog<span class="token punctuation">.</span>py
│  │  __init__<span class="token punctuation">.</span>py  
</code></pre>
    <p>
     代码参考：
    </p>
    <pre><code class="prism language-py"><span class="token comment"># web_conf_py/conftest.py</span>
<span class="token keyword">import</span> pytest

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span>scope<span class="token operator">=</span><span class="token string">"session"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"\n打开首页"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">"yoyo"</span>

<span class="token comment"># web_conf_py/baidu/conftest.py</span>
<span class="token keyword">import</span> pytest

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span>scope<span class="token operator">=</span><span class="token string">"session"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">open_baidu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"打开百度页面_session"</span><span class="token punctuation">)</span>

<span class="token comment"># web_conf_py/baidu/test_1_baidu.py</span>
<span class="token keyword">import</span> pytest
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">test_01</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> open_baidu<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"测试用例test_01"</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> start <span class="token operator">==</span> <span class="token string">"yoyo"</span>

<span class="token keyword">def</span> <span class="token function">test_02</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> open_baidu<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"测试用例test_02"</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> start <span class="token operator">==</span> <span class="token string">"yoyo"</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"-s"</span><span class="token punctuation">,</span> <span class="token string">"test_1_baidu.py"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token comment"># web_conf_py/baidu/test_2.py</span>
<span class="token keyword">import</span> pytest
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">test_06</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> open_baidu<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"测试用例test_01"</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> start <span class="token operator">==</span> <span class="token string">"yoyo"</span>
<span class="token keyword">def</span> <span class="token function">test_07</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> open_baidu<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"测试用例test_02"</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> start <span class="token operator">==</span> <span class="token string">"yoyo"</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"-s"</span><span class="token punctuation">,</span> <span class="token string">"test_2.py"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token comment"># web_conf_py/blog/conftest.py</span>
<span class="token keyword">import</span> pytest

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span>scope<span class="token operator">=</span><span class="token string">"function"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">open_blog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"打开blog页面_function"</span><span class="token punctuation">)</span>

<span class="token comment"># web_conf_py/blog/test_2_blog.py</span>

<span class="token keyword">import</span> pytest
<span class="token keyword">import</span> time
<span class="token keyword">def</span> <span class="token function">test_03</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> open_blog<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"测试用例test_03"</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> start <span class="token operator">==</span> <span class="token string">"yoyo"</span>

<span class="token keyword">def</span> <span class="token function">test_04</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> open_blog<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"测试用例test_04"</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> start <span class="token operator">==</span> <span class="token string">"yoyo"</span>

<span class="token keyword">def</span> <span class="token function">test_05</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> open_blog<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">'''跨模块调用baidu模块下的conftest'''</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"测试用例test_05,跨模块调用baidu"</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> start <span class="token operator">==</span> <span class="token string">"yoyo"</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"-s"</span><span class="token punctuation">,</span> <span class="token string">"test_2_blog.py"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     正常运行需要消耗时间：7.12 seconds
    </p>
    <pre><code class="prism language-py">E<span class="token punctuation">:</span>\YOYO\web_conf_py<span class="token operator">&gt;</span>pytest
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> test session starts <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
platform win32 <span class="token operator">-</span><span class="token operator">-</span> Python <span class="token number">3.6</span><span class="token number">.0</span><span class="token punctuation">,</span> pytest<span class="token operator">-</span><span class="token number">3.6</span><span class="token number">.3</span><span class="token punctuation">,</span> py<span class="token operator">-</span><span class="token number">1.5</span><span class="token number">.4</span><span class="token punctuation">,</span> pluggy<span class="token operator">-</span><span class="token number">0.6</span><span class="token number">.0</span>
rootdir<span class="token punctuation">:</span> E<span class="token punctuation">:</span>\YOYO\web_conf_py<span class="token punctuation">,</span> inifile<span class="token punctuation">:</span>
plugins<span class="token punctuation">:</span> xdist<span class="token operator">-</span><span class="token number">1.23</span><span class="token number">.2</span><span class="token punctuation">,</span> metadata<span class="token operator">-</span><span class="token number">1.7</span><span class="token number">.0</span><span class="token punctuation">,</span> html<span class="token operator">-</span><span class="token number">1.19</span><span class="token number">.0</span><span class="token punctuation">,</span> forked<span class="token operator">-</span><span class="token number">0.2</span>
collected <span class="token number">7</span> items

baidu\test_1_baidu<span class="token punctuation">.</span>py <span class="token punctuation">.</span><span class="token punctuation">.</span>                                                 <span class="token punctuation">[</span> <span class="token number">28</span><span class="token operator">%</span><span class="token punctuation">]</span>
baidu\test_2<span class="token punctuation">.</span>py <span class="token punctuation">.</span><span class="token punctuation">.</span>                                                       <span class="token punctuation">[</span> <span class="token number">57</span><span class="token operator">%</span><span class="token punctuation">]</span>
blog\test_2_blog<span class="token punctuation">.</span>py <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>                                                  <span class="token punctuation">[</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">]</span>

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> <span class="token number">7</span> passed <span class="token keyword">in</span> <span class="token number">7.12</span> seconds <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
</code></pre>
    <p>
     设置并行运行数量为3，消耗时间：3.64 seconds，大大的缩短了用例时间
    </p>
    <pre><code class="prism language-py">E<span class="token punctuation">:</span>\YOYO\web_conf_py<span class="token operator">&gt;</span>pytest <span class="token operator">-</span>n <span class="token number">3</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> test session starts <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
platform win32 <span class="token operator">-</span><span class="token operator">-</span> Python <span class="token number">3.6</span><span class="token number">.0</span><span class="token punctuation">,</span> pytest<span class="token operator">-</span><span class="token number">3.6</span><span class="token number">.3</span><span class="token punctuation">,</span> py<span class="token operator">-</span><span class="token number">1.5</span><span class="token number">.4</span><span class="token punctuation">,</span> pluggy<span class="token operator">-</span><span class="token number">0.6</span><span class="token number">.0</span>
rootdir<span class="token punctuation">:</span> E<span class="token punctuation">:</span>\YOYO\web_conf_py<span class="token punctuation">,</span> inifile<span class="token punctuation">:</span>
plugins<span class="token punctuation">:</span> xdist<span class="token operator">-</span><span class="token number">1.23</span><span class="token number">.2</span><span class="token punctuation">,</span> metadata<span class="token operator">-</span><span class="token number">1.7</span><span class="token number">.0</span><span class="token punctuation">,</span> html<span class="token operator">-</span><span class="token number">1.19</span><span class="token number">.0</span><span class="token punctuation">,</span> forked<span class="token operator">-</span><span class="token number">0.2</span>
gw0 <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">/</span> gw1 <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">/</span> gw2 <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span>
scheduling tests via LoadScheduling
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>                                                                  <span class="token punctuation">[</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">]</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> <span class="token number">7</span> passed <span class="token keyword">in</span> <span class="token number">3.64</span> seconds <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
</code></pre>
    <h3>
     <a id="6_764">
     </a>
     6，其他有意思的插件
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8ad339667d3972d2e1dea202b7b71482.png"/>
     <br/>
     这里就不多说了，喜欢的可以自己研究下
    </p>
    <h3>
     <a id="7pytestunittest_767">
     </a>
     7，使用pytest执行unittest的测试用例
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/7c1fa93062bc65f81d218ce0d3d10f58.png"/>
     <br/>
     <strong>
      执行unitest就和原来一样，尽量不要混合使用搞那些花里胡哨的，用哪个就哪个，就不多说了
     </strong>
    </p>
    <h3>
     <a id="8pytesthtml_770">
     </a>
     8，pytest-html生成报告
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f2fadd95f16827ffe9336cd0e6c093a6.png"/>
     <br/>
     pytest-HTML是一个插件，pytest用于生成测试结果的HTML报告。兼容Python 2.7,3.6
    </p>
    <p>
     pytest-html
     <br/>
     1.github上源码地址【https://github.com/pytest-dev/pytest-html】
    </p>
    <p>
     2.pip安装
    </p>
    <pre><code>$ pip install pytest-html
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c858342474069c5f4990699c4d7dff3b.png"/>
    </p>
    <p>
     3.执行方法
    </p>
    <pre><code>$ pytest --html=report.html
</code></pre>
    <p>
     html报告
     <br/>
     1.打开cmd，cd到需要执行pytest用例的目录，执行指令：pytest --html=report.html
    </p>
    <p>
     <img alt="image" src="https://i-blog.csdnimg.cn/blog_migrate/f78ce05ea7c1c55fd814fdf9ee5164ca.png"/>
     <br/>
     2.执行完之后，在当前目录会生成一个report.html的报告文件，显示效果如下
    </p>
    <p>
     <img alt="image" src="https://i-blog.csdnimg.cn/blog_migrate/de839039235a637cbda83423a4d22075.png"/>
     <br/>
     指定报告路径
     <br/>
     1.直接执行"pytest --html=report.html"生成的报告会在当前脚本的同一路径，如果想指定报告的存放位置，放到当前脚本的同一目录下的report文件夹里
    </p>
    <pre><code>pytest --html=./report/report.html
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/3d518c9ab4eb47ad415644a241454f1c.png"/>
     <br/>
     2.如果想指定执行某个.py文件用例或者某个文件夹里面的所有用例，需加个参数。具体规则参考【pytest文档2-用例运行规则】
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/1c0ae12ad4df00caf07714d3cd3e1a2b.png"/>
     <br/>
     报告独立显示
     <br/>
     1.上面方法生成的报告，css是独立的，分享报告的时候样式会丢失，为了更好的分享发邮件展示报告，可以把css样式合并到html里
    </p>
    <pre><code>$ pytest --html=report.html --self-contained-html
</code></pre>
    <p>
     显示选项
     <br/>
     默认情况下，“ 结果”表中的所有行都将被展开，但具测试通过的行除外Passed。
    </p>
    <p>
     可以使用查询参数自定义此行为：?collapsed=Passed,XFailed,Skipped。
    </p>
    <p>
     更多功能
     <br/>
     1.更多功能查看官方文档【https://github.com/pytest-dev/pytest-html】
    </p>
    <h2>
     <a id="_824">
     </a>
     六，日志管理及代码覆盖率
    </h2>
    <h3>
     <a id="1_pytestlogging_825">
     </a>
     1， pytest中logging的应用
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/48be137d1f3e1639eb2add4375db7998.png"/>
    </p>
    <h3>
     <a id="2__827">
     </a>
     2， 日志及级别的含义
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/35e3887f911c1cd38dc994aebf58b851.png"/>
     <br/>
     <strong>
      自动化测试用例的调试信息非常有用，可以让我们知道现在的运行情况到，执行到哪步以及相应的出错信息等，可以在pytest里面，有时并不会输出所有信息，比如默认情况下pass的测试用例是没有print输出的。本文将介绍如何在pytest里面实时显示所有的log信息。
     </strong>
    </p>
    <p>
     <strong>
      1. 用print输出log信息
     </strong>
     <br/>
     slowTest_print.py
    </p>
    <pre><code class="prism language-py"><span class="token keyword">import</span> time
 
<span class="token keyword">def</span> <span class="token function">test_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token string">'test_1'</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token string">'after 1 sec'</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token string">'after 2 sec'</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token string">'after 3 sec'</span>
    <span class="token keyword">assert</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'should pass'</span>
 
<span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token string">'in test_2'</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token string">'after 1 sec'</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token string">'after 2 sec'</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token string">'after 3 sec'</span>
    <span class="token keyword">assert</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'failing for demo purposes'</span>
</code></pre>
    <p>
     运行上述程序，pytest会capture所有的输出，保存直到所有的测试用例都执行结束，并且只输出那些失败的测试用例的信息，对于成功的测试用例，没有print的信息显示。
     <br/>
     从下面的运行结果，如果需要查看test_1()的运行情况，没有log信息可看，print没有显示。
    </p>
    <pre><code class="prism language-py">C<span class="token punctuation">:</span>\Users\yatyang\PycharmProjects\pytest_example<span class="token operator">&gt;</span>pytest <span class="token operator">-</span>v slowTest_print<span class="token punctuation">.</span>py
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> test session starts <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
platform win32 <span class="token operator">-</span><span class="token operator">-</span> Python <span class="token number">2.7</span><span class="token number">.13</span><span class="token punctuation">,</span> pytest<span class="token operator">-</span><span class="token number">3.0</span><span class="token number">.6</span><span class="token punctuation">,</span> py<span class="token operator">-</span><span class="token number">1.4</span><span class="token number">.32</span><span class="token punctuation">,</span> pluggy<span class="token operator">-</span><span class="token number">0.4</span><span class="token number">.0</span> <span class="token operator">-</span><span class="token operator">-</span> C<span class="token punctuation">:</span>\Python27\python<span class="token punctuation">.</span>exe
cachedir<span class="token punctuation">:</span> <span class="token punctuation">.</span>cache
metadata<span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span><span class="token string">'Python'</span><span class="token punctuation">:</span> <span class="token string">'2.7.13'</span><span class="token punctuation">,</span> <span class="token string">'Platform'</span><span class="token punctuation">:</span> <span class="token string">'Windows-7-6.1.7601-SP1'</span><span class="token punctuation">,</span> <span class="token string">'Packages'</span><span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span><span class="token string">'py'</span><span class="token punctuation">:</span> <span class="token string">'1.4.32'</span><span class="token punctuation">,</span> <span class="token string">'pytest'</span><span class="token punctuation">:</span> <span class="token string">'3.0.6'</span><span class="token punctuation">,</span> <span class="token string">'pluggy'</span><span class="token punctuation">:</span> <span class="token string">'0.4.0'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'JAVA_HOME'</span><span class="token punctuation">:</span> 'C<span class="token punctuation">:</span>\\Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span>\\Java\\jd
k1<span class="token punctuation">.</span><span class="token number">7.0_01</span><span class="token string">', '</span>Plugins<span class="token string">': {'</span>html<span class="token string">': '</span><span class="token number">1.14</span><span class="token number">.2</span><span class="token string">', '</span>metadata<span class="token string">': '</span><span class="token number">1.3</span><span class="token number">.0</span>'<span class="token punctuation">}</span><span class="token punctuation">}</span>
rootdir<span class="token punctuation">:</span> C<span class="token punctuation">:</span>\Users\yatyang\PycharmProjects\pytest_example<span class="token punctuation">,</span> inifile<span class="token punctuation">:</span>
plugins<span class="token punctuation">:</span> metadata<span class="token operator">-</span><span class="token number">1.3</span><span class="token number">.0</span><span class="token punctuation">,</span> html<span class="token operator">-</span><span class="token number">1.14</span><span class="token number">.2</span>
collected <span class="token number">2</span> items 

slowTest_print<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_1 PASSED
slowTest_print<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token punctuation">:</span>test_2 FAILED

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> FAILURES <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
___________________________________ test_2 ____________________________________

    <span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token string">'in test_2'</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span> <span class="token string">'after 1 sec'</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span> <span class="token string">'after 2 sec'</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span> <span class="token string">'after 3 sec'</span>
<span class="token operator">&gt;</span>       <span class="token keyword">assert</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'failing for demo purposes'</span>
E       AssertionError<span class="token punctuation">:</span> failing <span class="token keyword">for</span> demo purposes
E       <span class="token keyword">assert</span> <span class="token number">0</span>

slowTest_print<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token number">22</span><span class="token punctuation">:</span> AssertionError
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> Captured stdout call <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token keyword">in</span> test_2
after <span class="token number">1</span> sec
after <span class="token number">2</span> sec
after <span class="token number">3</span> sec
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token number">1</span> failed<span class="token punctuation">,</span> <span class="token number">1</span> passed <span class="token keyword">in</span> <span class="token number">6.45</span> seconds <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>

C<span class="token punctuation">:</span>\Users\yatyang\PycharmProjects\pytest_example<span class="token operator">&gt;</span>
</code></pre>
    <p>
     我们可以用‘-s’参数或者 ‘–capture=no’，这样就可以输出所有测试用的print信息。但是pytest还是会等着所有的测试用例都执行完毕才会显示运行结果。可以看到下面的test_1也显示出print的相关信息。
    </p>
    <pre><code class="prism language-py">
C<span class="token punctuation">:</span>\Users\yatyang\PycharmProjects\pytest_example<span class="token operator">&gt;</span>py<span class="token punctuation">.</span>test <span class="token operator">-</span><span class="token operator">-</span>capture<span class="token operator">=</span>no slowTest_print<span class="token punctuation">.</span>py
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> test session starts <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
platform win32 <span class="token operator">-</span><span class="token operator">-</span> Python <span class="token number">2.7</span><span class="token number">.13</span><span class="token punctuation">,</span> pytest<span class="token operator">-</span><span class="token number">3.0</span><span class="token number">.6</span><span class="token punctuation">,</span> py<span class="token operator">-</span><span class="token number">1.4</span><span class="token number">.32</span><span class="token punctuation">,</span> pluggy<span class="token operator">-</span><span class="token number">0.4</span><span class="token number">.0</span>
metadata<span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span><span class="token string">'Python'</span><span class="token punctuation">:</span> <span class="token string">'2.7.13'</span><span class="token punctuation">,</span> <span class="token string">'Platform'</span><span class="token punctuation">:</span> <span class="token string">'Windows-7-6.1.7601-SP1'</span><span class="token punctuation">,</span> <span class="token string">'Packages'</span><span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span><span class="token string">'py'</span><span class="token punctuation">:</span> <span class="token string">'1.4.32'</span><span class="token punctuation">,</span> <span class="token string">'pytest'</span><span class="token punctuation">:</span> <span class="token string">'3.0.6'</span><span class="token punctuation">,</span> <span class="token string">'pluggy'</span><span class="token punctuation">:</span> <span class="token string">'0.4.0'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'JAVA_HOME'</span><span class="token punctuation">:</span> 'C<span class="token punctuation">:</span>\\Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span>\\Java\\jd
k1<span class="token punctuation">.</span><span class="token number">7.0_01</span><span class="token string">', '</span>Plugins<span class="token string">': {'</span>html<span class="token string">': '</span><span class="token number">1.14</span><span class="token number">.2</span><span class="token string">', '</span>metadata<span class="token string">': '</span><span class="token number">1.3</span><span class="token number">.0</span>'<span class="token punctuation">}</span><span class="token punctuation">}</span>
rootdir<span class="token punctuation">:</span> C<span class="token punctuation">:</span>\Users\yatyang\PycharmProjects\pytest_example<span class="token punctuation">,</span> inifile<span class="token punctuation">:</span>
plugins<span class="token punctuation">:</span> metadata<span class="token operator">-</span><span class="token number">1.3</span><span class="token number">.0</span><span class="token punctuation">,</span> html<span class="token operator">-</span><span class="token number">1.14</span><span class="token number">.2</span>
collected <span class="token number">2</span> items 

slowTest_print<span class="token punctuation">.</span>py test_1
after <span class="token number">1</span> sec
after <span class="token number">2</span> sec
after <span class="token number">3</span> sec
<span class="token punctuation">.</span><span class="token keyword">in</span> test_2
after <span class="token number">1</span> sec
after <span class="token number">2</span> sec
after <span class="token number">3</span> sec
F

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> FAILURES <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
___________________________________ test_2 ____________________________________

    <span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token string">'in test_2'</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span> <span class="token string">'after 1 sec'</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span> <span class="token string">'after 2 sec'</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span> <span class="token string">'after 3 sec'</span>
<span class="token operator">&gt;</span>       <span class="token keyword">assert</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'failing for demo purposes'</span>
E       AssertionError<span class="token punctuation">:</span> failing <span class="token keyword">for</span> demo purposes
E       <span class="token keyword">assert</span> <span class="token number">0</span>

slowTest_print<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token number">22</span><span class="token punctuation">:</span> AssertionError
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token number">1</span> failed<span class="token punctuation">,</span> <span class="token number">1</span> passed <span class="token keyword">in</span> <span class="token number">6.17</span> seconds <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
</code></pre>
    <p>
     <strong>
      2. Python Logging用法
     </strong>
     <br/>
     一般情况下，一些程序的调试过程中我们会让它输出一些信息，特别是一些大型的程序，我们通过这些信息可以了解程序的运行情况，python提供了一个日志模块logging，它可以把我们想要的信息全部保存到一个日志文件中，方便查看。
    </p>
    <pre><code class="prism language-py"><span class="token keyword">import</span> logging

logging<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'This is debug message'</span><span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">'This is info message'</span><span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token string">'This is warning message'</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     屏幕上打印:
     <br/>
     WARNING:root:This is warning message
     <br/>
     默认情况下，logging将日志打印到屏幕，日志级别为WARNING；
     <br/>
     日志级别大小关系为：CRITICAL &gt; ERROR &gt; WARNING &gt; INFO &gt; DEBUG &gt; NOTSET，当然也可以自己定义日志级别。
    </p>
    <p>
     <strong>
      3. 在pytest中用logging代替print
     </strong>
     <br/>
     我们现在来看看在pytest的测试用例里面用logging的输出代替print，有什么不同。
     <br/>
     slowTest_logging.py
    </p>
    <pre><code class="prism language-py"><span class="token keyword">import</span> time
<span class="token keyword">import</span> logging

logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>level<span class="token operator">=</span>logging<span class="token punctuation">.</span>DEBUG<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">test_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    log <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span><span class="token string">'test_1'</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 1 sec'</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 2 sec'</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 3 sec'</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'should pass'</span>


<span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    log <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span><span class="token string">'test_2'</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 1 sec'</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 2 sec'</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 3 sec'</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'failing for demo purposes'</span>
</code></pre>
    <p>
     运行结果如下,log信息的显示是不是可读性更好了呢。可是pytest还是要等所有的结果都运行完毕才完全输出到屏幕上，没法看到实时的运行情况。比如现在要测试一个新的image，不知道quality如何，如果测试用例非常多，测试人员就得一直等，也许前面的一些测试用都失败就可以停止执行了。那怎么实现实时显示呢？请看方法4。
    </p>
    <pre><code class="prism language-py">C<span class="token punctuation">:</span>\Users\yatyang\PycharmProjects\pytest_example<span class="token operator">&gt;</span>pytest slowTest_logging<span class="token punctuation">.</span>py
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> test session starts <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
platform win32 <span class="token operator">-</span><span class="token operator">-</span> Python <span class="token number">2.7</span><span class="token number">.13</span><span class="token punctuation">,</span> pytest<span class="token operator">-</span><span class="token number">3.0</span><span class="token number">.6</span><span class="token punctuation">,</span> py<span class="token operator">-</span><span class="token number">1.4</span><span class="token number">.32</span><span class="token punctuation">,</span> pluggy<span class="token operator">-</span><span class="token number">0.4</span><span class="token number">.0</span>
metadata<span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span><span class="token string">'Python'</span><span class="token punctuation">:</span> <span class="token string">'2.7.13'</span><span class="token punctuation">,</span> <span class="token string">'Platform'</span><span class="token punctuation">:</span> <span class="token string">'Windows-7-6.1.7601-SP1'</span><span class="token punctuation">,</span> <span class="token string">'Packages'</span><span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span><span class="token string">'py'</span><span class="token punctuation">:</span> <span class="token string">'1.4.32'</span><span class="token punctuation">,</span> <span class="token string">'pytest'</span><span class="token punctuation">:</span> <span class="token string">'3.0.6'</span><span class="token punctuation">,</span> <span class="token string">'pluggy'</span><span class="token punctuation">:</span> <span class="token string">'0.4.0'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'JAVA_HOME'</span><span class="token punctuation">:</span> 'C<span class="token punctuation">:</span>\\Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span>\\Java\\jd
k1<span class="token punctuation">.</span><span class="token number">7.0_01</span><span class="token string">', '</span>Plugins<span class="token string">': {'</span>html<span class="token string">': '</span><span class="token number">1.14</span><span class="token number">.2</span><span class="token string">', '</span>metadata<span class="token string">': '</span><span class="token number">1.3</span><span class="token number">.0</span>'<span class="token punctuation">}</span><span class="token punctuation">}</span>
rootdir<span class="token punctuation">:</span> C<span class="token punctuation">:</span>\Users\yatyang\PycharmProjects\pytest_example<span class="token punctuation">,</span> inifile<span class="token punctuation">:</span>
plugins<span class="token punctuation">:</span> metadata<span class="token operator">-</span><span class="token number">1.3</span><span class="token number">.0</span><span class="token punctuation">,</span> html<span class="token operator">-</span><span class="token number">1.14</span><span class="token number">.2</span>
collected <span class="token number">2</span> items 

slowTest_logging<span class="token punctuation">.</span>py <span class="token punctuation">.</span>F

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> FAILURES <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
___________________________________ test_2 ____________________________________

    <span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        log <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span><span class="token string">'test_2'</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 1 sec'</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 2 sec'</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 3 sec'</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>       <span class="token keyword">assert</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'failing for demo purposes'</span>
E       AssertionError<span class="token punctuation">:</span> failing <span class="token keyword">for</span> demo purposes
E       <span class="token keyword">assert</span> <span class="token number">0</span>

slowTest_logging<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token number">25</span><span class="token punctuation">:</span> AssertionError
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> Captured stderr call <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
DEBUG<span class="token punctuation">:</span>test_2<span class="token punctuation">:</span>after <span class="token number">1</span> sec
DEBUG<span class="token punctuation">:</span>test_2<span class="token punctuation">:</span>after <span class="token number">2</span> sec
DEBUG<span class="token punctuation">:</span>test_2<span class="token punctuation">:</span>after <span class="token number">3</span> sec
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token number">1</span> failed<span class="token punctuation">,</span> <span class="token number">1</span> passed <span class="token keyword">in</span> <span class="token number">6.37</span> seconds <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
</code></pre>
    <pre><code class="prism language-py">C<span class="token punctuation">:</span>\Users\yatyang\PycharmProjects\pytest_example<span class="token operator">&gt;</span>pytest <span class="token operator">-</span>s slowTest_logging<span class="token punctuation">.</span>py
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> test session starts <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
platform win32 <span class="token operator">-</span><span class="token operator">-</span> Python <span class="token number">2.7</span><span class="token number">.13</span><span class="token punctuation">,</span> pytest<span class="token operator">-</span><span class="token number">3.0</span><span class="token number">.6</span><span class="token punctuation">,</span> py<span class="token operator">-</span><span class="token number">1.4</span><span class="token number">.32</span><span class="token punctuation">,</span> pluggy<span class="token operator">-</span><span class="token number">0.4</span><span class="token number">.0</span>
metadata<span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span><span class="token string">'Python'</span><span class="token punctuation">:</span> <span class="token string">'2.7.13'</span><span class="token punctuation">,</span> <span class="token string">'Platform'</span><span class="token punctuation">:</span> <span class="token string">'Windows-7-6.1.7601-SP1'</span><span class="token punctuation">,</span> <span class="token string">'Packages'</span><span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span><span class="token string">'py'</span><span class="token punctuation">:</span> <span class="token string">'1.4.32'</span><span class="token punctuation">,</span> <span class="token string">'pytest'</span><span class="token punctuation">:</span> <span class="token string">'3.0.6'</span><span class="token punctuation">,</span> <span class="token string">'pluggy'</span><span class="token punctuation">:</span> <span class="token string">'0.4.0'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'JAVA_HOME'</span><span class="token punctuation">:</span> 'C<span class="token punctuation">:</span>\\Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span>\\Java\\jd
k1<span class="token punctuation">.</span><span class="token number">7.0_01</span><span class="token string">', '</span>Plugins<span class="token string">': {'</span>html<span class="token string">': '</span><span class="token number">1.14</span><span class="token number">.2</span><span class="token string">', '</span>metadata<span class="token string">': '</span><span class="token number">1.3</span><span class="token number">.0</span>'<span class="token punctuation">}</span><span class="token punctuation">}</span>
rootdir<span class="token punctuation">:</span> C<span class="token punctuation">:</span>\Users\yatyang\PycharmProjects\pytest_example<span class="token punctuation">,</span> inifile<span class="token punctuation">:</span>
plugins<span class="token punctuation">:</span> metadata<span class="token operator">-</span><span class="token number">1.3</span><span class="token number">.0</span><span class="token punctuation">,</span> html<span class="token operator">-</span><span class="token number">1.14</span><span class="token number">.2</span>
collected <span class="token number">2</span> items 

slowTest_logging<span class="token punctuation">.</span>py DEBUG<span class="token punctuation">:</span>test_1<span class="token punctuation">:</span>after <span class="token number">1</span> sec
DEBUG<span class="token punctuation">:</span>test_1<span class="token punctuation">:</span>after <span class="token number">2</span> sec
DEBUG<span class="token punctuation">:</span>test_1<span class="token punctuation">:</span>after <span class="token number">3</span> sec
<span class="token punctuation">.</span>DEBUG<span class="token punctuation">:</span>test_2<span class="token punctuation">:</span>after <span class="token number">1</span> sec
DEBUG<span class="token punctuation">:</span>test_2<span class="token punctuation">:</span>after <span class="token number">2</span> sec
DEBUG<span class="token punctuation">:</span>test_2<span class="token punctuation">:</span>after <span class="token number">3</span> sec
F

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> FAILURES <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
___________________________________ test_2 ____________________________________

    <span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        log <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span><span class="token string">'test_2'</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 1 sec'</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 2 sec'</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 3 sec'</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>       <span class="token keyword">assert</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'failing for demo purposes'</span>
E       AssertionError<span class="token punctuation">:</span> failing <span class="token keyword">for</span> demo purposes
E       <span class="token keyword">assert</span> <span class="token number">0</span>

slowTest_logging<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token number">25</span><span class="token punctuation">:</span> AssertionError
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token number">1</span> failed<span class="token punctuation">,</span> <span class="token number">1</span> passed <span class="token keyword">in</span> <span class="token number">6.18</span> seconds <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
</code></pre>
    <p>
     <strong>
      4. pytest用logging和–capture=no实现实时输出log信息
     </strong>
     <br/>
     请自己去运行下面的程序吧，可以看到该程序是实时输出当前测试用例执行的情况。
    </p>
    <pre><code class="prism language-py">C<span class="token punctuation">:</span>\Users\yatyang\PycharmProjects\pytest_example<span class="token operator">&gt;</span>pytest <span class="token operator">-</span>s slowTest_logging<span class="token punctuation">.</span>py
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> test session starts <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
platform win32 <span class="token operator">-</span><span class="token operator">-</span> Python <span class="token number">2.7</span><span class="token number">.13</span><span class="token punctuation">,</span> pytest<span class="token operator">-</span><span class="token number">3.0</span><span class="token number">.6</span><span class="token punctuation">,</span> py<span class="token operator">-</span><span class="token number">1.4</span><span class="token number">.32</span><span class="token punctuation">,</span> pluggy<span class="token operator">-</span><span class="token number">0.4</span><span class="token number">.0</span>
metadata<span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span><span class="token string">'Python'</span><span class="token punctuation">:</span> <span class="token string">'2.7.13'</span><span class="token punctuation">,</span> <span class="token string">'Platform'</span><span class="token punctuation">:</span> <span class="token string">'Windows-7-6.1.7601-SP1'</span><span class="token punctuation">,</span> <span class="token string">'Packages'</span><span class="token punctuation">:</span> <span class="token punctuation">{<!-- --></span><span class="token string">'py'</span><span class="token punctuation">:</span> <span class="token string">'1.4.32'</span><span class="token punctuation">,</span> <span class="token string">'pytest'</span><span class="token punctuation">:</span> <span class="token string">'3.0.6'</span><span class="token punctuation">,</span> <span class="token string">'pluggy'</span><span class="token punctuation">:</span> <span class="token string">'0.4.0'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'JAVA_HOME'</span><span class="token punctuation">:</span> 'C<span class="token punctuation">:</span>\\Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span>\\Java\\jd
k1<span class="token punctuation">.</span><span class="token number">7.0_01</span><span class="token string">', '</span>Plugins<span class="token string">': {'</span>html<span class="token string">': '</span><span class="token number">1.14</span><span class="token number">.2</span><span class="token string">', '</span>metadata<span class="token string">': '</span><span class="token number">1.3</span><span class="token number">.0</span>'<span class="token punctuation">}</span><span class="token punctuation">}</span>
rootdir<span class="token punctuation">:</span> C<span class="token punctuation">:</span>\Users\yatyang\PycharmProjects\pytest_example<span class="token punctuation">,</span> inifile<span class="token punctuation">:</span>
plugins<span class="token punctuation">:</span> metadata<span class="token operator">-</span><span class="token number">1.3</span><span class="token number">.0</span><span class="token punctuation">,</span> html<span class="token operator">-</span><span class="token number">1.14</span><span class="token number">.2</span>
collected <span class="token number">2</span> items 

slowTest_logging<span class="token punctuation">.</span>py DEBUG<span class="token punctuation">:</span>test_1<span class="token punctuation">:</span>after <span class="token number">1</span> sec
DEBUG<span class="token punctuation">:</span>test_1<span class="token punctuation">:</span>after <span class="token number">2</span> sec
DEBUG<span class="token punctuation">:</span>test_1<span class="token punctuation">:</span>after <span class="token number">3</span> sec
<span class="token punctuation">.</span>DEBUG<span class="token punctuation">:</span>test_2<span class="token punctuation">:</span>after <span class="token number">1</span> sec
DEBUG<span class="token punctuation">:</span>test_2<span class="token punctuation">:</span>after <span class="token number">2</span> sec
DEBUG<span class="token punctuation">:</span>test_2<span class="token punctuation">:</span>after <span class="token number">3</span> sec
F

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> FAILURES <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
___________________________________ test_2 ____________________________________

    <span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        log <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span><span class="token string">'test_2'</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 1 sec'</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 2 sec'</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">'after 3 sec'</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>       <span class="token keyword">assert</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'failing for demo purposes'</span>
E       AssertionError<span class="token punctuation">:</span> failing <span class="token keyword">for</span> demo purposes
E       <span class="token keyword">assert</span> <span class="token number">0</span>

slowTest_logging<span class="token punctuation">.</span>py<span class="token punctuation">:</span><span class="token number">25</span><span class="token punctuation">:</span> AssertionError
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token number">1</span> failed<span class="token punctuation">,</span> <span class="token number">1</span> passed <span class="token keyword">in</span> <span class="token number">6.20</span> seconds <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
</code></pre>
    <p>
     <strong>
      5.总结
     </strong>
     <br/>
     在写自动化测试用例时，添加有用的log信息是非常有必要的。比如在初期的调试过程，能够一旦运行有问题，就可以获取到精确的调试信息。后期在稳定的运行中，其他测试人员来运行也可以很容易上手，所以大家一定要重视测试用例的调试信息。
     <br/>
     通过本文，应该知道如何用pytest，logging和–capture=no实现运行测试用例的实时输出所有的log信息。
    </p>
    <h3>
     <a id="3__1115">
     </a>
     3， 代码覆盖率-多用在单元测试中
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/cd2e2704a4585682928c6f89eb1abd7b.png"/>
     <br/>
     <strong>
      一，上篇（---- pytest-cov）
     </strong>
     <br/>
     简介：
     <br/>
     pytest-cov 是pytest的一个插件，其本质也是引用 python coverage 库 用来统计代码覆盖率。以下这篇文章只供理解，真实项目的话，我们都是用api调用接口的，所以真实项目使用会更复杂一些，这个待下次说明。
    </p>
    <p>
     <strong>
      另外说明：coverage 是在覆盖率是语句覆盖的一种，不能对你的逻辑做判读，真实意义的话，需要多结合项目本身，这个覆盖率数据没有很强大说服力，不要盲目追求。
      <br/>
      一般来说：
      <br/>
      路径覆盖率 &gt; 判定覆盖 &gt; 语句覆盖
     </strong>
    </p>
    <p>
     安装
    </p>
    <pre><code class="prism language-py">pip install pytest<span class="token operator">-</span>cover
</code></pre>
    <p>
     安装完后有
    </p>
    <pre><code class="prism language-py">py<span class="token punctuation">.</span>test <span class="token operator">-</span>h 可以看到多了以下的用法，说明安装成功：

coverage reporting <span class="token keyword">with</span> distributed testing support<span class="token punctuation">:</span>
</code></pre>
    <p>
     范例
     <br/>
     新建三个文件，cau.py 与test_conver.py 在同一个目录code下。run.py文件在上一级目录pp下。
     <br/>
     代码关系如下。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/02e5c1bf8a117f5b40de0ae411254c30.png"/>
    </p>
    <p>
     1.新建函数文件cau.py
    </p>
    <pre><code class="prism language-py"><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">def</span> <span class="token function">cau</span> <span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">,</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">if</span> <span class="token builtin">type</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">:</span>
        a<span class="token operator">=</span>n1 <span class="token operator">+</span> n2
    <span class="token keyword">elif</span> <span class="token builtin">type</span><span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">:</span>
        a <span class="token operator">=</span> n1 <span class="token operator">-</span> n2
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        a<span class="token operator">=</span>n1 <span class="token operator">*</span> n2
    <span class="token keyword">return</span> a
</code></pre>
    <p>
     2.新建test_conver.py测试文件：
    </p>
    <pre><code class="prism language-py"><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">from</span> code<span class="token punctuation">.</span>cau <span class="token keyword">import</span> cau
<span class="token keyword">class</span> <span class="token class-name">Test_cover</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">test_add</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        a<span class="token operator">=</span>cau<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token keyword">assert</span> a<span class="token operator">==</span><span class="token number">3</span>
</code></pre>
    <p>
     3.新建执行脚本run.py
    </p>
    <pre><code class="prism language-py"><span class="token comment">#!/usr/bin/env ```python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">import</span> pytest

<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">'__main__'</span><span class="token punctuation">:</span>
	pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"--cov=./code/"</span> <span class="token punctuation">,</span><span class="token string">"--cov-report=html"</span><span class="token punctuation">,</span><span class="token string">"--cov-config=./code/.coveragerc"</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>  <span class="token comment"># 执行某个目录下case</span>
</code></pre>
    <p>
     说明：–cov参数 后面接的是测试的目录 （经给测试，不能指定某个特定的文件。），程序代码跟测试脚本必须在同一个文件下。 --cov-report=html 生成报告 ，只需要python run.py 就可以运行
    </p>
    <pre><code class="prism language-py">coveragerc  意思是跳过某些脚本的覆盖率测试。此处跳过test_cover<span class="token punctuation">.</span>py文件跟init文件。

</code></pre>
    <p>
     内容如下：
    </p>
    <pre><code class="prism language-py"><span class="token punctuation">[</span>run<span class="token punctuation">]</span>
omit <span class="token operator">=</span>
	tests<span class="token operator">/</span><span class="token operator">*</span>
	 <span class="token operator">*</span><span class="token operator">/</span>__init__<span class="token punctuation">.</span>py
	<span class="token operator">*</span><span class="token operator">/</span>test_cover<span class="token punctuation">.</span>py
</code></pre>
    <p>
     结果
     <br/>
     生成完后可以直接点击indexhtml
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/dc76883d49edae52d3b16efbd3c63d45.png"/>
     <br/>
     可以看到如下的执行情况，绿色代表运行，红色代表未被执行，自己检查下代码逻辑，可以得出该结果是正确的。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/299b5357ee56b4d8369737e31233e7b2.png"/>
     <br/>
     <strong>
      二：下篇（— coverage.py api）
     </strong>
     <br/>
     使用pytest-cov 无法统计用 api调用服务的测试脚本所覆盖率，但大部分的项目基本也是使用api调用。所以我们额外需要使用coverage.py api 来统计。
     <br/>
     当你安装pytest-cov时，已经默认安装了coverage 这个库。
    </p>
    <p>
     服务启动
     <br/>
     要想扫描到代码，必须在服务启动的时候要插入coverage相关配置。
     <br/>
     我这边是flask 启动的，所以在flask启动的代码上添加，如下：
    </p>
    <pre><code class="prism language-py"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    cov <span class="token operator">=</span> Coverage<span class="token punctuation">(</span><span class="token punctuation">)</span>
    cov<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 开始检测代码</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">"qidong"</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> host<span class="token operator">=</span><span class="token string">'0.0.0.0'</span><span class="token punctuation">,</span>port<span class="token operator">=</span><span class="token number">9098</span><span class="token punctuation">)</span>  <span class="token comment">#原本只有这一行</span>
    cov<span class="token punctuation">.</span>stop<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 停止纪录</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">"guanbi"</span><span class="token punctuation">)</span>
    cov<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 保存在 .coverage 中</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">"save"</span><span class="token punctuation">)</span>
    cov<span class="token punctuation">.</span>html_report<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 生成 HTML 报告</span>
</code></pre>
    <p>
     原本我们是python xx.py 这样启动，但现在不可以。
     <br/>
     需要改成这样，source 表示目录，xx表示执行文件。
    </p>
    <pre><code class="prism language-py">coverage run <span class="token operator">-</span><span class="token operator">-</span>source<span class="token operator">=</span><span class="token string">'/xxx/'</span> xx<span class="token punctuation">.</span>py    
</code></pre>
    <p>
     启动运行图如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e81e8e97adc93c58357665c865987402.png"/>
     <br/>
     然后调用你的自动化脚本（自动化脚本是直接调的该服务提供的api 。）
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/54692c692001447f2ae447182cf48cdc.png"/>
     <br/>
     自动化如果正常运行，能看到运行的请求
    </p>
    <p>
     以上说明你的脚本跟服务是没问题的
    </p>
    <p>
     ctr-c停掉该脚本后，最后显示save，如果显示”Coverage.py warning: No data was collected. (no-data-collected)“ 说明的服务运行方式有问题，coverage 服务没有运行到你代码
    </p>
    <p>
     报告生成
     <br/>
     输入以下命令
    </p>
    <pre><code class="prism language-py">coverage report
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/697c04bf1fab2588e4973b119089e79d.png"/>
     <br/>
     最后一步最后输入
    </p>
    <pre><code class="prism language-py">coverage html
</code></pre>
    <p>
     这样就可以省 html 文件了。
    </p>
    <p>
     导出在window上看，具体点击某个文件，点击run，你可以看到绿色的就是运行的。但有问题是，你会发现有些代码应该是要被执行，但却没有被执行。所以coverage的数据准不准很难说。
    </p>
    <h3>
     <a id="4allure_1258">
     </a>
     4，allure测试报告框架
    </h3>
    <p>
     <strong>
      pytest+allure现在都是结合jenkins来搞的，很简单相信大家都会，不会的老哥可以去看我的另一个博客持续集成里的有写
     </strong>
    </p>
    <h3>
     <a id="5_1260">
     </a>
     5，定制报告
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c65cb3b06138eada91d22f70532acf7b.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b0825b6b61a216d9cc7c8045c4be7e49.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/03754406310adb8c1dc3a5f5a6a69989.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/91b29cacfce9cafe5cb3ce08e8f4a8cb.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/565e0d2f40a7e7d13f99092e9a2760ce.png"/>
     <br/>
     定制报告
     <br/>
     Feature: 标注主要功能模块
     <br/>
     Story: 标注Features功能模块下的分支功能
     <br/>
     Severity: 标注测试用例的重要级别
     <br/>
     Step: 标注测试用例的重要步骤
     <br/>
     Issue和TestCase: 标注Issue、Case，可加入URL
    </p>
    <p>
     <strong>
      1、Features定制详解
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2018/8/17 上午10:10</span>
<span class="token comment"># @Author  : WangJuan</span>
<span class="token comment"># @File    : test_case.py</span>
<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'test_module_01'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    用例描述：Test case 01
    """</span>
    <span class="token keyword">assert</span> <span class="token number">0</span>
    
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'test_module_02'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    用例描述：Test case 02
    """</span>
    <span class="token keyword">assert</span> <span class="token number">0</span> <span class="token operator">==</span> <span class="token number">0</span>
    
    
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'-s'</span><span class="token punctuation">,</span> <span class="token string">'-q'</span><span class="token punctuation">,</span> <span class="token string">'--alluredir'</span><span class="token punctuation">,</span> <span class="token string">'./report/xml'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     添加feature，Report展示见下图。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/afd596daf2638ec3702503243f60b1f3.png"/>
    </p>
    <p>
     <strong>
      2、Story定制详解
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2018/8/17 上午10:10</span>
<span class="token comment"># @Author  : WangJuan</span>
<span class="token comment"># @File    : test_case.py</span>
<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'test_module_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">'test_story_01'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    用例描述：Test case 01
    """</span>
    <span class="token keyword">assert</span> <span class="token number">0</span>

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'test_module_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">'test_story_02'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    用例描述：Test case 02
    """</span>
    <span class="token keyword">assert</span> <span class="token number">0</span> <span class="token operator">==</span> <span class="token number">0</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'-s'</span><span class="token punctuation">,</span> <span class="token string">'-q'</span><span class="token punctuation">,</span> <span class="token string">'--alluredir'</span><span class="token punctuation">,</span> <span class="token string">'./report/xml'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     添加story，Report展示见下图。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/4a9feba305c7f6bd97fbc66ed410ae65.png"/>
    </p>
    <p>
     <strong>
      3、用例标题和用例描述定制详解
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2018/8/17 上午10:10</span>
<span class="token comment"># @Author  : WangJuan</span>
<span class="token comment"># @File    : test_case.py</span>
<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'test_module_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">'test_story_01'</span><span class="token punctuation">)</span>
<span class="token comment">#test_case_01为用例title</span>
<span class="token keyword">def</span> <span class="token function">test_case_01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    用例描述：这是用例描述，Test case 01，描述本人
    """</span>
    <span class="token comment">#注释为用例描述</span>
    <span class="token keyword">assert</span> <span class="token number">0</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'-s'</span><span class="token punctuation">,</span> <span class="token string">'-q'</span><span class="token punctuation">,</span> <span class="token string">'--alluredir'</span><span class="token punctuation">,</span> <span class="token string">'./report/xml'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     添加用例标题和用例描述，Report展示见下图。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/947c57e17a1349ba94723f300b82c2b3.png"/>
    </p>
    <p>
     <strong>
      4 、Severity定制详解
     </strong>
     <br/>
     Allure中对严重级别的定义：
     <br/>
     1、 Blocker级别：中断缺陷（客户端程序无响应，无法执行下一步操作）
     <br/>
     2、 Critical级别：临界缺陷（ 功能点缺失）
     <br/>
     3、 Normal级别：普通缺陷（数值计算错误）
     <br/>
     4、 Minor级别：次要缺陷（界面错误与UI需求不符）
     <br/>
     5、 Trivial级别：轻微缺陷（必输项无提示，或者提示不规范）
    </p>
    <pre><code class="prism language-py"><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2018/8/17 上午10:10</span>
<span class="token comment"># @Author  : WangJuan</span>
<span class="token comment"># @File    : test_case.py</span>
<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'test_module_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">'test_story_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">'blocker'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    用例描述：Test case 01
    """</span>
    <span class="token keyword">assert</span> <span class="token number">0</span>

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'test_module_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">'test_story_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">'critical'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    用例描述：Test case 02
    """</span>
    <span class="token keyword">assert</span> <span class="token number">0</span> <span class="token operator">==</span> <span class="token number">0</span>

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'test_module_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">'test_story_02'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">'normal'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_03</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    用例描述：Test case 03
    """</span>
    <span class="token keyword">assert</span> <span class="token number">0</span>

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'test_module_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">'test_story_02'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">'minor'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_04</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    用例描述：Test case 04
    """</span>
    <span class="token keyword">assert</span> <span class="token number">0</span> <span class="token operator">==</span> <span class="token number">0</span>

    
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'-s'</span><span class="token punctuation">,</span> <span class="token string">'-q'</span><span class="token punctuation">,</span> <span class="token string">'--alluredir'</span><span class="token punctuation">,</span> <span class="token string">'./report/xml'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     添加Severity，Report展示见下图。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/7461aa0c965b2e1ca3281b03daab5500.png"/>
    </p>
    <p>
     <strong>
      5、Step定制详解
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2018/8/17 上午10:10</span>
<span class="token comment"># @Author  : WangJuan</span>
<span class="token comment"># @File    : test_case.py</span>
<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>step</span><span class="token punctuation">(</span><span class="token string">"字符串相加：{0}，{1}"</span><span class="token punctuation">)</span>     
<span class="token comment"># 测试步骤，可通过format机制自动获取函数参数</span>
<span class="token keyword">def</span> <span class="token function">str_add</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> str2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">"%s is not a string"</span> <span class="token operator">%</span> str1
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">"%s is not a string"</span> <span class="token operator">%</span> str2
    <span class="token keyword">return</span> str1 <span class="token operator">+</span> str2

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'test_module_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">'test_story_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">'blocker'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    str1 <span class="token operator">=</span> <span class="token string">'hello'</span>
    str2 <span class="token operator">=</span> <span class="token string">'world'</span>
    <span class="token keyword">assert</span> str_add<span class="token punctuation">(</span>str1<span class="token punctuation">,</span> str2<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">'helloworld'</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'-s'</span><span class="token punctuation">,</span> <span class="token string">'-q'</span><span class="token punctuation">,</span> <span class="token string">'--alluredir'</span><span class="token punctuation">,</span> <span class="token string">'./report/xml'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     添加Step，Report展示见下图。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/05598747e1f36a8c5add1a92fb87ab21.png"/>
     <br/>
     <strong>
      6、Issue和TestCase定制详解
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2018/8/17 上午10:10</span>
<span class="token comment"># @Author  : WangJuan</span>
<span class="token comment"># @File    : test_case.py</span>
<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>step</span><span class="token punctuation">(</span><span class="token string">"字符串相加：{0}，{1}"</span><span class="token punctuation">)</span>     <span class="token comment"># 测试步骤，可通过format机制自动获取函数参数</span>
<span class="token keyword">def</span> <span class="token function">str_add</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> str2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">"%s is not a string"</span> <span class="token operator">%</span> str1
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">"%s is not a string"</span> <span class="token operator">%</span> str2
    <span class="token keyword">return</span> str1 <span class="token operator">+</span> str2

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'test_module_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">'test_story_01'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">'blocker'</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>issue</span><span class="token punctuation">(</span><span class="token string">"http://www.baidu.com"</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>testcase</span><span class="token punctuation">(</span><span class="token string">"http://www.testlink.com"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    str1 <span class="token operator">=</span> <span class="token string">'hello'</span>
    str2 <span class="token operator">=</span> <span class="token string">'world'</span>
    <span class="token keyword">assert</span> str_add<span class="token punctuation">(</span>str1<span class="token punctuation">,</span> str2<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">'helloworld'</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'-s'</span><span class="token punctuation">,</span> <span class="token string">'-q'</span><span class="token punctuation">,</span> <span class="token string">'--alluredir'</span><span class="token punctuation">,</span> <span class="token string">'./report/xml'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     添加Issue和TestCase，Report展示见下图。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/79b528df4751b32cdc446417f096d21b.png"/>
     <br/>
     8、attach定制详解
    </p>
    <pre><code class="prism language-py"> <span class="token builtin">file</span> <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'../test.png'</span><span class="token punctuation">,</span> <span class="token string">'rb'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
 allure<span class="token punctuation">.</span>attach<span class="token punctuation">(</span><span class="token string">'test_img'</span><span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">,</span> allure<span class="token punctuation">.</span>attach_type<span class="token punctuation">.</span>PNG<span class="token punctuation">)</span>
</code></pre>
    <p>
     在报告中增加附件：allure.attach(’arg1’,’arg2’,’arg3’)：
     <br/>
     arg1：是在报告中显示的附件名称
     <br/>
     arg2：表示添加附件的内容
     <br/>
     arg3：表示添加的类型(支持:HTML,JPG,PNG,JSON,OTHER,TEXTXML)
    </p>
    <p>
     添加attach参数，Report展示见下图。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ccfa35ed1a4debde7a23c8f2951a8043.png"/>
    </p>
    <h3>
     <a id="6pytest_1515">
     </a>
     6，pytest运行指定用例
    </h3>
    <p>
     随着软件功能的增加，模块越来越多，也意味用例越来越多，为了节约执行时间，快速得到测试报告与结果，在工作中可以通过运行指定用例，达到快速执行用例
    </p>
    <p>
     例子目录
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/cb255bb70ae29143d8e033790fdb0de8.png"/>
     <br/>
     <strong>
      spec_sub1_modul_test.py
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token comment">#coding: UTF-8</span>
<span class="token keyword">import</span> pytest

<span class="token keyword">def</span> <span class="token function">test_004_spec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> <span class="token number">1</span><span class="token operator">==</span><span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">test_005_spec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> <span class="token boolean">True</span><span class="token operator">==</span><span class="token boolean">False</span>
    
<span class="token keyword">class</span> <span class="token class-name">Test_Class</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">test_006_spec</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">assert</span> <span class="token string">'G'</span> <span class="token keyword">in</span> <span class="token string">"Goods"</span>
</code></pre>
    <p>
     <strong>
      spec_sub2_modul_test.py
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token comment">#coding: UTF-8</span>
<span class="token keyword">import</span> pytest

<span class="token keyword">def</span> <span class="token function">test_007_spec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> <span class="token number">1</span><span class="token operator">==</span><span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">test_008_spec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> <span class="token boolean">True</span><span class="token operator">==</span><span class="token boolean">False</span>
    
<span class="token keyword">class</span> <span class="token class-name">Test_Class</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">test_009_spec</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">assert</span> <span class="token string">'G'</span> <span class="token keyword">in</span> <span class="token string">"Goods"</span>
</code></pre>
    <p>
     <strong>
      spec_001_modul_test
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token comment">#coding: UTF-8</span>
<span class="token keyword">import</span> pytest

<span class="token keyword">def</span> <span class="token function">test_001_spec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> <span class="token number">1</span><span class="token operator">==</span><span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">test_002_spec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> <span class="token boolean">True</span><span class="token operator">==</span><span class="token boolean">False</span>
    
<span class="token keyword">class</span> <span class="token class-name">Test_Class</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">test_003_spec</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">assert</span> <span class="token string">'H'</span> <span class="token keyword">in</span> <span class="token string">"Hell,Jerry"</span>
</code></pre>
    <p>
     <strong>
      运行指定模块
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token string">"-v -s spec_001_modul_test.py"</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     <strong>
      运行批量文件夹（运行当前文件夹包括子文件夹所有用例）
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token comment">#coding: UTF-8</span>
<span class="token keyword">import</span> pytest
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token string">"-v -s ./"</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     <strong>
      运行指定文件夹（subpath1目录下面所有用例）
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token comment">#coding: UTF-8</span>
<span class="token keyword">import</span> pytest
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token string">"-v -s subpath1/"</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     <strong>
      运行模块中指定用例 （运行模块中test_001_spec用例）
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token string">"-v -s spec_001_modul_test.py::test_001_spec"</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     <strong>
      运行class中指定的用例（运行模块中Test_Class类test_003_spec方法）
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
   pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token string">"-v -s spec_001_modul_test.py::Test_Class::test_003_spec"</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     <strong>
      模糊匹配运行用例（匹配当前目录下面包含）
     </strong>
    </p>
    <pre><code class="prism language-py"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    <span class="token comment">#运行spec_001_modul_test模块中用例名称包含spec的用例</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token string">"-v -s -k spec spec_001_modul_test.py"</span><span class="token punctuation">)</span>
    <span class="token comment">#运行当前文件夹匹配Test_Class的用例，类文件下面的用例</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token string">'-s -v -k Test_Class'</span><span class="token punctuation">)</span>
</code></pre>
    <h3>
     <a id="7_1611">
     </a>
     7，按重要性级别进行一定范围测试
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f90b71abbaa1973d7a8827e5dd40c49c.png"/>
     <br/>
     此标记用来标识测试用例或者测试类的级别，分为blocker，critical，normal，minor，trivial5个级别，下面们把测试用例按级别标记，并查看一下测试报告
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/076826104f87701f927a39d5e282c483.png"/>
    </p>
    <h3>
     <a id="8_alluredescriptionalluretitle_1615">
     </a>
     8， 为测试添加详说明@allure.description;@allure.title;
    </h3>
    <p>
     <strong>
      1.title case标题
     </strong>
    </p>
    <p>
     可以自定义用例标题，标题默认为函数名.
    </p>
    <p>
     @allure.title
    </p>
    <pre><code class="prism language-py"><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2019/3/12 11:46</span>
<span class="token comment"># @Author  : zzt</span>

<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">"用例标题0"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_0</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">"用例标题1"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre>
    <p>
     执行效果：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/df79f1c6b5334992cdb6d3f0f100a1fe.png"/>
    </p>
    <ol start="2">
     <li>
      说明
     </li>
    </ol>
    <p>
     可以添加测试的详细说明，以便根据需要为报告阅读器提供尽可能多的上下文。
    </p>
    <p>
     两种方式：@allure.description 提供描述字符串的装饰器
    </p>
    <p>
     @allure.description_html 提供一些HTML在测试用例的描述部分 (待研究)
    </p>
    <pre><code class="prism language-py"><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2019/3/12 11:46</span>
<span class="token comment"># @Author  : zzt</span>

<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">"用例标题0"</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>description</span><span class="token punctuation">(</span><span class="token string">"这里是对test_0用例的一些详细说明"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_0</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">"用例标题1"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">"用例标题2"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
　　
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/52f4b898e29cf0d524d367745aff0463.png"/>
    </p>
    <h3>
     <a id="9_allurelink__allureissue__alluretestcase_1682">
     </a>
     9， 链接@allure.link @allure.issue @allure.testcase
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/247d637704a8e9c8f29d8d8f2fd20287.png"/>
     <br/>
     @allure.link @allure.issue @allure.testcase
    </p>
    <pre><code class="prism language-py"><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2019/3/12 11:46</span>
<span class="token comment"># @Author  : zzt</span>

<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'这里是一级标签'</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">TestAllure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">"用例标题0"</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">"这里是第一个二级标签"</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">'param'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'青铜'</span><span class="token punctuation">,</span> <span class="token string">'白银'</span><span class="token punctuation">,</span> <span class="token string">'黄金'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_0</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> param<span class="token punctuation">)</span><span class="token punctuation">:</span>
        allure<span class="token punctuation">.</span>attach<span class="token punctuation">(</span><span class="token string">'附件内容是： '</span><span class="token operator">+</span>param<span class="token punctuation">,</span> <span class="token string">'我是附件名'</span><span class="token punctuation">,</span> allure<span class="token punctuation">.</span>attachment_type<span class="token punctuation">.</span>TEXT<span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">"用例标题1"</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">"这里是第二个二级标签"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_1</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        allure<span class="token punctuation">.</span>attach<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">(</span><span class="token string">r'E:\Myproject\pytest-allure\test\test_1.jpg'</span><span class="token punctuation">,</span> <span class="token string">'我是附件截图的名字'</span><span class="token punctuation">,</span> attachment_type<span class="token operator">=</span>allure<span class="token punctuation">.</span>attachment_type<span class="token punctuation">.</span>JPG<span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">"用例标题2"</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">"这里是第三个二级标签"</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>issue</span><span class="token punctuation">(</span><span class="token string">'http://baidu.com'</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">'点击我跳转百度'</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>testcase</span><span class="token punctuation">(</span><span class="token string">'http://bug.com/user-login-Lw==.html'</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">'点击我跳转禅道'</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
</code></pre>
    <p>
     执行结果如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b1d6f8987ba1ab169413d6c00236f51f.png"/>
    </p>
    <h2>
     <a id="_pytestallure__1720">
     </a>
     七， 单元自动化测试pytest和allure在测试中应用 自动执行
    </h2>
    <h3>
     <a id="1__1721">
     </a>
     1， 单元测试测试报告展示
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ecf905fe4fbb4507920d7b2681861538.png"/>
    </p>
    <h3>
     <a id="2_conftestdriversession_addfinalizer_1723">
     </a>
     2， conftest中编写driver，范围session，使用 addfinalizer在测试结束后关闭浏览器
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/968650d575c891506b308ab9f5b0c3c1.png"/>
    </p>
    <h3>
     <a id="3__1725">
     </a>
     3， 前端自动化测试-百度搜索功能实战演示
    </h3>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/a912fb641d4bf5169f4cd628b29c421b.png"/>
     <br/>
     报告可以展示许多不同类型的附件，用来补充测试，步骤等信息
    </p>
    <p>
     allure.attach(body, name, attachment_type, extension)
    </p>
    <p>
     body - 要写入文件的原始内容。
    </p>
    <p>
     name - 包含文件名的字符串
    </p>
    <p>
     attachment_type- 其中一个allure.attachment_type值
    </p>
    <p>
     extension - 提供的将用作创建文件的扩展名
    </p>
    <p>
     或者 allure.attach.file(source, name, attachment_type, extension)
    </p>
    <p>
     source - 包含文件路径的字符串。
    </p>
    <pre><code class="prism language-py"><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2019/3/12 11:46</span>
<span class="token comment"># @Author  : zzt</span>

<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">'这里是一级标签'</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">TestAllure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">"用例标题0"</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">"这里是第一个二级标签"</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">'param'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'青铜'</span><span class="token punctuation">,</span> <span class="token string">'白银'</span><span class="token punctuation">,</span> <span class="token string">'黄金'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_0</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> param<span class="token punctuation">)</span><span class="token punctuation">:</span>
        allure<span class="token punctuation">.</span>attach<span class="token punctuation">(</span><span class="token string">'附件内容是： '</span><span class="token operator">+</span>param<span class="token punctuation">,</span> <span class="token string">'我是附件名'</span><span class="token punctuation">,</span> allure<span class="token punctuation">.</span>attachment_type<span class="token punctuation">.</span>TEXT<span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">"用例标题1"</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">"这里是第二个二级标签"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_1</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        allure<span class="token punctuation">.</span>attach<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">(</span><span class="token string">r'E:\Myproject\pytest-allure\test\test_1.jpg'</span><span class="token punctuation">,</span> <span class="token string">'我是附件截图的名字'</span><span class="token punctuation">,</span> attachment_type<span class="token operator">=</span>allure<span class="token punctuation">.</span>attachment_type<span class="token punctuation">.</span>JPG<span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">"用例标题2"</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">"这里是第三个二级标签"</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span>allure<span class="token punctuation">.</span>severity_level<span class="token punctuation">.</span>NORMAL<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
</code></pre>
    <p>
     执行结果如下：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ddab0599a78b5d6d257725a57a682efc.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/1162fd2ae963fae9d82d16434ba162fd.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/72e81521a2e167704a4b581bc1835702.png"/>
    </p>
    <h3>
     <a id="4Githubhttpsgithubcomlinda883py_techDemo_1777">
     </a>
     4，源码:Github:https://github.com/linda883/py_techDemo
    </h3>
    <h3>
     <a id="5_CICDjenkins_1778">
     </a>
     5， CI/CD使用jenkins进行持续集成
    </h3>
    <p>
     <strong>
      在Jenkins集成相信大家都会就不讲了，或者看我的持续集成博客
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/0e8fd4e76cd8ff62c49b351b1a17e1aa.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/6c0273cb29e22eac9b3d6173f5b0ea15.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/615d0b907e370d2728dca442e5c8a73a.png"/>
    </p>
    <h2>
     <a id="_1784">
     </a>
     八，天蝎座的测试之旅
    </h2>
    <h3>
     <a id="httpsimgblogcsdnimgcn20190923202433781pngpic_center_1785">
     </a>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/60fbd1e44a3ef24baa41dea47a565e34.png#pic_center"/>
    </h3>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



---
layout: post
title: 2020-12-11-Squaretest-自动生成Mock单元测试
date: 2020-12-11 17:41:05 +0800
categories: [Java,单元测试]
tags: [单元测试,junit,java,squaretest]
image:
  path: https://img-blog.csdnimg.cn/20201211165504562.png?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3N1bjU3Njk2NzU&#61;,size_16,color_FFFFFF,t_70
  alt: Squaretest-自动生成Mock单元测试
artid: 111043213
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Squaretest 自动生成Mock单元测试
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
     今天来介绍一款工具Squaretest，它是一款自动生成单元测试的插件，为什么会用到它也是因为最近公司上了代码质量管控的指标，会考评各个项目的单元测试覆盖率，以及sonar扫描出来的各种问题，很多老项目老代码，或者着急交付的项目，单元测试严重缺失，覆盖率只有5%不到，所以几个小伙伴这几天就在疯狂的堆单元测试，3个人堆了2天才堆到30%，于是我也来上手帮忙写了两个，写到第二个的时候就发现，这个活不应该是人干的，要去看原来的代码，然后根据逻辑写各种Mock，感觉是有迹可循的东西，所以就查了下，发现果然有插件帮我们来干这个事情，那么解下来就来看看。
    </p>
    <p>
     我使用的是idea，我们先来下载一下插件，File——&gt;Settings——&gt;Plugins，搜索Squaretest，然后install就好了，插件安装完成后需要重启一下
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5df3c476803f845c313ff45fc4d4af30.png">
      <br/>
      重启之后，菜单栏就多了一项Squaretest，下面我们来讲下怎么用，大家也可以通过看这个菜单的最后一项：Generate Test Methods(Help)来看它的一个演示，但演示不太全，我下面截图给大家看下我怎么用的，以及一些使用心得。
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/00db9253459e20ffc415c5f235afb88e.png">
       <br/>
       首先我们打开一个类，这个类就是我们即将要作为实验的类，这个类有7个public方法，因为Squaretest生成的单元测试方法都是只能生成public的，当然这也是合理的嘛！毕竟private的肯定被public调用了。
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c00f87e01469553d3ab9b95c0392fee6.png">
        <br/>
        如果我们来手写这个类的单元测试，光看都要一会，下面看我操作，打开你的类，光标定位到代码里，右击鼠标选择Generate…
        <br/>
        <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/fd3f59a32fe3811848d110ddcea1fba9.png">
         <br/>
         然后你就会看到这里有两个熟悉的图标，第一次的话选择第二个选项，它会让你选择你一下单元测试的模板，因为我已经选择过了，所以我现在演示不回再弹出，但后面我会告诉你怎么更改模板。
         <br/>
         <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8dac0af2d560b693e9b6cdaecf49bfe8.png">
          <br/>
          选择第二项后就会弹出一个框看下面这里它自动会识别出当前类需要Mock的成员变量，直接点ok
          <br/>
          <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/2903508ec7ff6c2aecaba047c8dd1882.png">
           <br/>
           自动会使用类的真实目录层次在test文件夹中创建出来一个单元测试类，类名就是原类名后加Test
           <br/>
           <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8295bbc026facb92eaa01f4fedee3005.png">
            <br/>
            我把代码贴出来给大家看看它生成出来的是什么样的，看看吓不吓人，牛逼牛逼，7个单元测试方法，秒秒钟就出来了，各位看官你们自己写要多久能写出来，毕竟时间就是金钱啊！然后我们执行一把试试！
           </img>
          </img>
         </img>
        </img>
       </img>
      </img>
     </img>
    </p>
    <pre><code class="prism language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CrawlerScreenShotServiceImplTest</span> <span class="token punctuation">{<!-- --></span>

    <span class="token annotation punctuation">@Mock</span>
    <span class="token keyword">private</span> <span class="token class-name">CrawerScreenShotTaskMapper</span> mockCrawerScreenShotTaskMapper<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Mock</span>
    <span class="token keyword">private</span> <span class="token class-name">CrawerScreenShotTaskLogMapper</span> mockCrawerScreenShotTaskLogMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@InjectMocks</span>
    <span class="token keyword">private</span> <span class="token class-name">CrawlerScreenShotServiceImpl</span> crawlerScreenShotServiceImplUnderTest<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Before</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token function">initMocks</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testReceiveData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// Setup</span>
        <span class="token keyword">final</span> <span class="token class-name">CrawlerScreenShotVO</span> vo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CrawlerScreenShotVO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vo<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vo<span class="token punctuation">.</span><span class="token function">setPcFlag</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vo<span class="token punctuation">.</span><span class="token function">setMembergroup</span><span class="token punctuation">(</span><span class="token string">"membergroup"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vo<span class="token punctuation">.</span><span class="token function">setTaskType</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vo<span class="token punctuation">.</span><span class="token function">setUrlType</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">when</span><span class="token punctuation">(</span>mockCrawerScreenShotTaskLogMapper<span class="token punctuation">.</span><span class="token function">saveSelective</span><span class="token punctuation">(</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token class-name">CrawerScreenShotTaskLog</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">when</span><span class="token punctuation">(</span>mockCrawerScreenShotTaskMapper<span class="token punctuation">.</span><span class="token function">saveBatch</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CrawlerScreenShotTask</span><span class="token punctuation">(</span><span class="token number">0L</span><span class="token punctuation">,</span> <span class="token string">"url"</span><span class="token punctuation">,</span> <span class="token string">"imageOssUrl"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">"memberGroup"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"fileName"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">"skuCode"</span><span class="token punctuation">,</span> <span class="token string">"state"</span><span class="token punctuation">,</span> <span class="token string">"operater"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Run the test</span>
        <span class="token keyword">final</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> crawlerScreenShotServiceImplUnderTest<span class="token punctuation">.</span><span class="token function">receiveData</span><span class="token punctuation">(</span>vo<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Verify the results</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testListJobScreenShotTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// Setup</span>

        <span class="token comment">// Configure CrawerScreenShotTaskMapper.listJobScreenShotTask(...).</span>
        <span class="token keyword">final</span> <span class="token class-name">CrawlerScreenShotTaskDto</span> crawlerScreenShotTaskDto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CrawlerScreenShotTaskDto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskDto<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskDto<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskDto<span class="token punctuation">.</span><span class="token function">setSkuCode</span><span class="token punctuation">(</span><span class="token string">"skuCode"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskDto<span class="token punctuation">.</span><span class="token function">setPcFlag</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskDto<span class="token punctuation">.</span><span class="token function">setMemberGroup</span><span class="token punctuation">(</span><span class="token string">"memberGroup"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskDto<span class="token punctuation">.</span><span class="token function">setUrlType</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskDto<span class="token punctuation">.</span><span class="token function">setFileName</span><span class="token punctuation">(</span><span class="token string">"fileName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskDto<span class="token punctuation">.</span><span class="token function">setTaskType</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskDto<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">"state"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CrawlerScreenShotTaskDto</span><span class="token punctuation">&gt;</span></span> crawlerScreenShotTaskDtos <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>crawlerScreenShotTaskDto<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">when</span><span class="token punctuation">(</span>mockCrawerScreenShotTaskMapper<span class="token punctuation">.</span><span class="token function">listJobScreenShotTask</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span>crawlerScreenShotTaskDtos<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Run the test</span>
        <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CrawlerScreenShotTaskDto</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> crawlerScreenShotServiceImplUnderTest<span class="token punctuation">.</span><span class="token function">listJobScreenShotTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Verify the results</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// Setup</span>
        <span class="token keyword">final</span> <span class="token class-name">NikeScreenShotListRequestVo</span> requestVo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NikeScreenShotListRequestVo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestVo<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestVo<span class="token punctuation">.</span><span class="token function">setUrlType</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestVo<span class="token punctuation">.</span><span class="token function">setStartTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestVo<span class="token punctuation">.</span><span class="token function">setEndTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestVo<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestVo<span class="token punctuation">.</span><span class="token function">setPcFlag</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestVo<span class="token punctuation">.</span><span class="token function">setPageNum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestVo<span class="token punctuation">.</span><span class="token function">setPageSize</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Configure CrawerScreenShotTaskMapper.query(...).</span>
        <span class="token keyword">final</span> <span class="token class-name">PimScreenShotVo</span> pimScreenShotVo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PimScreenShotVo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setImageOssUrl</span><span class="token punctuation">(</span><span class="token string">"imageOssUrl"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setPcFlag</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setCreateTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setUrlType</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PimScreenShotVo</span><span class="token punctuation">&gt;</span></span> pimScreenShotVos <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>pimScreenShotVo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">when</span><span class="token punctuation">(</span>mockCrawerScreenShotTaskMapper<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token class-name">NikeScreenShotListRequestVo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span>pimScreenShotVos<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Run the test</span>
        <span class="token keyword">final</span> <span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PimScreenShotVo</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> crawlerScreenShotServiceImplUnderTest<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>requestVo<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Verify the results</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testQuerySelectBoxData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// Setup</span>

        <span class="token comment">// Configure CrawerScreenShotTaskMapper.query(...).</span>
        <span class="token keyword">final</span> <span class="token class-name">PimScreenShotVo</span> pimScreenShotVo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PimScreenShotVo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setImageOssUrl</span><span class="token punctuation">(</span><span class="token string">"imageOssUrl"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setPcFlag</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setCreateTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setUrlType</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pimScreenShotVo<span class="token punctuation">.</span><span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PimScreenShotVo</span><span class="token punctuation">&gt;</span></span> pimScreenShotVos <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>pimScreenShotVo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">when</span><span class="token punctuation">(</span>mockCrawerScreenShotTaskMapper<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token class-name">NikeScreenShotListRequestVo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span>pimScreenShotVos<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Run the test</span>
        <span class="token keyword">final</span> <span class="token class-name">PimScreenShotTaskParamsDto</span> result <span class="token operator">=</span> crawlerScreenShotServiceImplUnderTest<span class="token punctuation">.</span><span class="token function">querySelectBoxData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Verify the results</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFindExecutionScreenShotTaskCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// Setup</span>
        <span class="token function">when</span><span class="token punctuation">(</span>mockCrawerScreenShotTaskMapper<span class="token punctuation">.</span><span class="token function">findExecutionScreenShotTaskCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Run the test</span>
        <span class="token keyword">final</span> <span class="token class-name">Integer</span> result <span class="token operator">=</span> crawlerScreenShotServiceImplUnderTest<span class="token punctuation">.</span><span class="token function">findExecutionScreenShotTaskCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Verify the results</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFindCrawerScreenshotTaskByCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// Setup</span>
        <span class="token keyword">final</span> <span class="token class-name">CrawlerScreenShotTaskSyncDto</span> crawlerScreenShotTaskSyncDto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CrawlerScreenShotTaskSyncDto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto<span class="token punctuation">.</span><span class="token function">setSkuCode</span><span class="token punctuation">(</span><span class="token string">"skuCode"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto<span class="token punctuation">.</span><span class="token function">setTaskType</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto<span class="token punctuation">.</span><span class="token function">setLastModifyTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto<span class="token punctuation">.</span><span class="token function">setOperater</span><span class="token punctuation">(</span><span class="token string">"operater"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto<span class="token punctuation">.</span><span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CrawlerScreenShotTaskSyncDto</span><span class="token punctuation">&gt;</span></span> expectedResult <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>crawlerScreenShotTaskSyncDto<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Configure CrawerScreenShotTaskMapper.findCrawerScreenshotTaskByCreateTime(...).</span>
        <span class="token keyword">final</span> <span class="token class-name">CrawlerScreenShotTaskSyncDto</span> crawlerScreenShotTaskSyncDto1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CrawlerScreenShotTaskSyncDto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto1<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto1<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto1<span class="token punctuation">.</span><span class="token function">setSkuCode</span><span class="token punctuation">(</span><span class="token string">"skuCode"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto1<span class="token punctuation">.</span><span class="token function">setTaskType</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto1<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto1<span class="token punctuation">.</span><span class="token function">setLastModifyTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto1<span class="token punctuation">.</span><span class="token function">setOperater</span><span class="token punctuation">(</span><span class="token string">"operater"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        crawlerScreenShotTaskSyncDto1<span class="token punctuation">.</span><span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CrawlerScreenShotTaskSyncDto</span><span class="token punctuation">&gt;</span></span> crawlerScreenShotTaskSyncDtos <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>crawlerScreenShotTaskSyncDto1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">when</span><span class="token punctuation">(</span>mockCrawerScreenShotTaskMapper<span class="token punctuation">.</span><span class="token function">findCrawerScreenshotTaskByCreateTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span>crawlerScreenShotTaskSyncDtos<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Run the test</span>
        <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CrawlerScreenShotTaskSyncDto</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> crawlerScreenShotServiceImplUnderTest<span class="token punctuation">.</span><span class="token function">findCrawerScreenshotTaskByCreateTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Verify the results</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span>expectedResult<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testQueryCrawlerDashboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// Setup</span>
        <span class="token function">when</span><span class="token punctuation">(</span>mockCrawerScreenShotTaskMapper<span class="token punctuation">.</span><span class="token function">queryCrawlerDashboard</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Run the test</span>
        <span class="token keyword">final</span> <span class="token class-name">Integer</span> result <span class="token operator">=</span> crawlerScreenShotServiceImplUnderTest<span class="token punctuation">.</span><span class="token function">queryCrawlerDashboard</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>JANUARY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Verify the results</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     报错了呢，不要慌，这个断言是为了检查你单元测试跑出来的结果是否符合预期的，如果你不想检查只想完成覆盖率，直接干掉就可以了（手动狗头）。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/ca9f70f5f2f3ef68dd5b8f4f294b6b42.png">
      <br/>
      怎么样！刺不刺激，爽不爽，秒秒钟90多行的代码覆盖率就到了90%以上.
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/09954d13d7e98622a2523986d23125cd.png">
       <br/>
       上面说过第一次进来会让你选择单元测试的模板，如果你要切换的话可以在单元测试类中按快捷键，Alt+M，或者通过Squaretest的菜单倒数第二个，下面这个就是按快捷键的效果，我选择的是这个模板，你们也可以借鉴。
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/958a17e7711d43a6cf928c9a82b5ac90.png">
        <br/>
        OK，以上Squaretest部分就结束了，当然拉也不能高兴的太早，这个类算是比较成功的情况，很多时候还是要你自己小修小改的，毕竟它生成出来的测试数据可能完全匹配不上你的if else数据对吧，但这都很好改啊，这样就从自己分析if else变成了，debug程序了呀，哪里报错，debug过去，看看是不是生成的数据有问题，改个数据，就通过了，反正本人用的是很舒畅的，妥妥的节省70%的工作量。
       </img>
      </img>
     </img>
    </p>
    <p>
     解决了上面一个问题之后，又发现另一个问题，这个工具VO，DTO，Entity，Command，Model这种实体类来讲，一般这种实体类我们都用lombok的注解get，set，还有constract构造器等注解，但是这个工具只能生成这些实体类的构造器的单元测试，无法生成get set方法的单元测试，所以写了个base方法，实体类继承一下，简单的写两行带就好了，看下面代码：
    </p>
    <pre><code class="prism language-java"><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">MockitoJUnitRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BaseVoEntityTest</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token class-name">T</span> <span class="token function">getT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">testGetAndSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalAccessException</span><span class="token punctuation">,</span> <span class="token class-name">InstantiationException</span><span class="token punctuation">,</span> <span class="token class-name">IntrospectionException</span><span class="token punctuation">,</span>
            <span class="token class-name">InvocationTargetException</span> <span class="token punctuation">{<!-- --></span>
        <span class="token class-name">T</span> t <span class="token operator">=</span> <span class="token function">getT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span> modelClass <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> obj <span class="token operator">=</span> modelClass<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fields <span class="token operator">=</span> modelClass<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Field</span> f <span class="token operator">:</span> fields<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">boolean</span> isStatic <span class="token operator">=</span> <span class="token class-name">Modifier</span><span class="token punctuation">.</span><span class="token function">isStatic</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">getModifiers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 过滤字段</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"isSerialVersionUID"</span><span class="token punctuation">)</span> <span class="token operator">||</span> f<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"serialVersionUID"</span><span class="token punctuation">)</span> <span class="token operator">||</span> isStatic <span class="token operator">||</span> f<span class="token punctuation">.</span><span class="token function">getGenericType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"boolean"</span><span class="token punctuation">)</span>
                    <span class="token operator">||</span> f<span class="token punctuation">.</span><span class="token function">isSynthetic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">PropertyDescriptor</span> pd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PropertyDescriptor</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> modelClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Method</span> get <span class="token operator">=</span> pd<span class="token punctuation">.</span><span class="token function">getReadMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Method</span> set <span class="token operator">=</span> pd<span class="token punctuation">.</span><span class="token function">getWriteMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            set<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> get<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getAndSetTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> <span class="token class-name">IntrospectionException</span><span class="token punctuation">,</span>
            <span class="token class-name">InstantiationException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">testGetAndSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre>
    <p>
     同样的方式我们在实体类上通过Squaretest生成单元测试，然后继承我上面写的那个base类，vo的单元测试代码稍加改动，如下
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/2e1705957cdc2d12fa59530daf75884b.png"/>
     <br/>
     看run完之后，覆盖率100%，妥妥的，通过这两个解决方案，一天之内我们就把覆盖率搞到了60%以上，不要太刺激，大家可以用用试试哦，当然这个也不是纯为了应付差事写的单元测试，我们后续开发的时候，也可以用这个工具来生成，然后自测自己的代码，这样也是提升工作效率的嘛！
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f194ffa5596f6e9951ad18b13c102e5a.png"/>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f:626c6f672e6373646e2e6e65742f73756e353736393637352f:61727469636c652f64657461696c732f313131303433323133</p>

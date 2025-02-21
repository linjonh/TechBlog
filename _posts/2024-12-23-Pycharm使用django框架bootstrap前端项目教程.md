---
layout: post
title: 2024-12-23-Pycharm使用django框架bootstrap前端项目教程
date: 2024-12-23 18:13:47 +0800
categories: []
tags: [前端,pycharm,django,bootstrap,python]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=136693451
  alt: Pycharm使用django框架bootstrap前端项目教程
artid: 136693451
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Pycharm使用django框架+bootstrap前端项目教程
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h2 id="django%E7%9A%84%E4%BD%BF%E7%94%A8">
     django的使用
    </h2>
    <h3 id="1.%20%E5%AE%89%E8%A3%85%20django">
     1. 安装
     <strong>
      django
     </strong>
    </h3>
    <pre><code class="hljs">pip install django</code></pre>
    <blockquote>
     <p>
      如果使用 pycharm，可以不用安装，直接创建 django 项目，后续 pycharm 会提示你是否安装 django 包，点击确定就会自动帮你下载 django 包。创建项目的方法见下文。
     </p>
    </blockquote>
    <h3 id="2.%20%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE">
     2. 创建项目
    </h3>
    <p>
     <img alt="" height="754" src="https://i-blog.csdnimg.cn/blog_migrate/6e1da6eaf236aca7771002f215217c08.png" width="1001"/>
    </p>
    <p>
     django 类似于 vue，支持分开实现不同的功能，这个 application 就相当于是一个模块，可以创建多个，且最后的静态文件例如 img，css，js 等都会放到单独的 app 文件夹目录
    </p>
    <p>
     例如你可以创建 app01，实现登录和注册功能；创建 app02，实现用户管理功能；创建 app03，实现后台管理功能等等，这样可以使项目更规范，更容易维护
    </p>
    <p>
     application name 就是应用名字，自己起一个，一般是 app
    </p>
    <p>
     如果刚开始没有写 application name 或者想创建多个模块，则进入项目后，可以用命令行创建模块，代码如下，最后面的参数就是模块的名称
    </p>
    <pre><code class="hljs">python manage.py startapp app</code></pre>
    <h3 id="3.%20%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84">
     3. 项目结构
    </h3>
    <p>
     <img alt="" height="504" src="https://i-blog.csdnimg.cn/blog_migrate/b39ddadd1bebb7a46a806ad57eb4c056.png" width="476"/>
    </p>
    <blockquote>
     <p>
      app
     </p>
     <p>
      |—— migrations                #【数据库变更】目前没啥用
     </p>
     <p>
      |—— __init__.py
     </p>
     <p>
      |—— __init__.py               # 目前没啥用
     </p>
     <p>
      |—— admin.py                  #【后台管理】目前没啥用
     </p>
     <p>
      |—— apps.py                     #【启动类】目前没啥用
     </p>
     <p>
      |—— models.py                  #【对数据库操作】常用
     </p>
     <p>
      |—— tests.py                     #【单元测试】目前没啥用
     </p>
     <p>
      |—— views.py                   #【编写函数】常用
     </p>
     <p>
      djangoProject
     </p>
     <p>
      |—— __init__.py                # 目前没啥用
     </p>
     <p>
      |—— asgi.py                      # 【接收网络请求】不需要改动
     </p>
     <p>
      |—— setting.py                  # 【项目配置】常用
     </p>
     <p>
      |—— urls.py                       # 【URL与函数的关系】常用
     </p>
     <p>
      |—— wsgl.py                     # 【接收网络请求】不需要改动
     </p>
     <p>
      templates
     </p>
     <p>
      manage.py                        # 【项目的管理，启动项目，创建app模块】不需要改动
     </p>
    </blockquote>
    <p>
     你可能会看到其他的项目会使用 templates 文件夹，但本文不会使用。
    </p>
    <p>
     笔者为了更规范的编写代码，会在每个 app 模块下新建 templates 文件夹，所以最外层的 templates 文件夹可以删除。
    </p>
    <p>
     删除最外层的 templates 文件夹后，需要改写 setting.py 文件，找到下面的代码位置
    </p>
    <pre><code class="language-python">TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates']       
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]</code></pre>
    <p>
     把 DIRS 的属性删除，改完如下
    </p>
    <pre><code class="language-python">TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]</code></pre>
    <blockquote>
     <p>
      这里解释一下，html 文件后续会放到每个 app 模块对应的 templates 文件夹里，如果不删除这个属性，则程序会默认到最外层的 templates 文件夹找 html 文件，从而出现找不到 html 的问题。
     </p>
    </blockquote>
    <h3 style="background-color:transparent;">
     4. 运行项目
    </h3>
    <p>
     现在假设你有一个写好的 bootstrap 前端项目，该如何运行呢
    </p>
    <p>
     首先在 app 模块下创建 templates 文件夹，将 bootstrap 前端的 html 文件放进去
    </p>
    <p>
     然后在 app 模块下创建 static 文件夹，将 bootstrap 前端的所有静态文件放进去，例如 img，css， js， fonts 等等，直接复制粘贴即可
    </p>
    <p>
     此时还需要打开 setting.py 改静态文件的路径，找到
    </p>
    <pre><code class="language-python">STATIC_URL = 'static/'</code></pre>
    <p>
     改为
    </p>
    <pre><code class="language-python">STATIC_URL = '/static/'</code></pre>
    <blockquote>
     <p>
      这个原因类似于上面，如果不改，会在最外层的 static 文件夹里寻找静态文件
     </p>
    </blockquote>
    <p>
     同时打开 html 文件，在最上面添加这样一行代码
    </p>
    <pre><code class="language-python">{% load static %}</code></pre>
    <p>
     然后修改每个 html 文件里的所有引用静态文件的格式，例如
    </p>
    <pre><code class="language-python">&lt;link rel="stylesheet" href="css/bootstrap.min.css"&gt;</code></pre>
    <p>
     改为
    </p>
    <pre><code class="language-python">&lt;link rel="stylesheet" href="{% static 'css/bootstrap.min.css' %}"&gt;</code></pre>
    <p>
     这是 django 框架自带的结构  {%  ****  %}，用来加载静态文件。
    </p>
    <blockquote>
     <p>
      使用这样的代码很方便，后续如果需要修改 static 文件夹的名称，你不需要修改每一个引用的地址，只需要把配置文件 setting.py 的静态文件的路径名称修改即可。
     </p>
    </blockquote>
    <p>
     接下来打开 urls.py 文件，将下面的代码删除或者注释掉
    </p>
    <pre><code class="language-python">path('admin/', admin.site.urls)</code></pre>
    <p>
     然后从 app 模块导入函数，代码如下
    </p>
    <pre><code class="language-python">from app import views
urlpatterns = [
    #path('admin/', admin.site.urls),
    path('index/', views.index),
]</code></pre>
    <blockquote>
     <p>
      学过前端的人都知道，这个相当于配置路由，意思是当你访问 http://localhost::8000/index/ 网站时，自动调用 views.py 文件里的 index 函数
     </p>
    </blockquote>
    <p>
     下面我们打开 app 模块里的 views.py 文件，写一下 index 函数，这里我们期待返回一个网页，当然你也可以返回其他的东西，例如字符串等等。程序会自动把你返回的东西呈现在网页上。
    </p>
    <p>
     返回网页代码如下：
    </p>
    <pre><code class="language-python">from django.shortcuts import render
def index(request):
    return render(request, 'index.html')
</code></pre>
    <p>
     返回字符串代码如下：
    </p>
    <pre><code class="language-python">from django.http import HttpResponse
def index(request):
    return HttpResponse("HelloWorld！")</code></pre>
    <p>
     本文讲述如何与 bootstrap 前端项目结合，所以选择返回网页
    </p>
    <p>
     现在点击 pycharm 项目的绿三角，就可以运行啦
    </p>
    <p>
     <img alt="" height="63" src="https://i-blog.csdnimg.cn/blog_migrate/141c453ce9eb579b7e44a693b9b18b9c.png" width="407"/>
    </p>
    <p>
     此时终端会出现对应的端口，点击访问
    </p>
    <p>
     <img alt="" height="185" src="https://i-blog.csdnimg.cn/blog_migrate/17944035d9b42a930829aa9ac3fd1d82.png" width="898"/>
    </p>
    <p>
     出现下面的页面，是因为没有对应到 index 路由
    </p>
    <p>
     <img alt="" height="342" src="https://i-blog.csdnimg.cn/blog_migrate/12ee5cc9b1e79e21942c16658a24220b.png" width="1200"/>
    </p>
    <p>
     访问
     <a href="http://127.0.0.1:8000/index/" rel="nofollow" title="http://127.0.0.1:8000/index/">
      http://127.0.0.1:8000/index/
     </a>
     即可正常访问网页啦
    </p>
    <p>
     <img alt="" height="874" src="https://i-blog.csdnimg.cn/blog_migrate/e4683093e55702f1651bd3dc79e85e8e.png" width="1200"/>
    </p>
    <p>
     好了本期到这里就结束啦，后续关于数据库的操作，表单的识别等等会再更新哦！！！
    </p>
   </div>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f37323934393230352f:61727469636c652f64657461696c732f313336363933343531

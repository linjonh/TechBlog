---
layout: post
title: 在NetBeans-IDE-中使用Java-DB数据库
date: 2024-08-07 10:18:26 +0800
categories: [数据库服务器]
tags: [数据库服务器,数据库,netbeans,java,ide,database]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=6651355
    alt: 在NetBeans-IDE-中使用Java-DB数据库
artid: 6651355
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     在NetBeans IDE 中使用Java DB数据库
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
     <span style="font-family:宋体">
      本文档介绍如何在
     </span>
     NetBeans IDE
     <span style="font-family:宋体">
      中快速建立与
     </span>
     Sun
     <span style="font-family:宋体">
      的
     </span>
     <a href="http://developers.sun.com/prodtech/javadb/" rel="nofollow">
      Java DB
     </a>
     <span style="font-family:宋体">
      （该数据库基于
     </span>
     <a href="http://db.apache.org/derby/" rel="nofollow">
      Apache Derby
     </a>
     <span style="font-family:宋体">
      数据库）的连接。建立连接后，您可以容易地在
     </span>
     IDE
     <span style="font-family:宋体">
      中使用这个数据库，可以创建表、用数据填充表、运行
     </span>
     SQL
     <span style="font-family:宋体">
      查询等等。
     </span>
    </p>
    <p>
     Java DB
     <span style="font-family:宋体">
      数据库是
     </span>
     Sun
     <span style="font-family:宋体">
      支持的
     </span>
     Apache Derby
     <span style="font-family:宋体">
      的分销版。
     </span>
     Java DB
     <span style="font-family:宋体">
      是完全事务型、安全、基于标准的数据库服务器，它全部采用
     </span>
     Java
     <span style="font-family:宋体">
      编写并完全支持
     </span>
     SQL
     <span style="font-family:宋体">
      、
     </span>
     JDBC API
     <span style="font-family:宋体">
      和
     </span>
     Java EE
     <span style="font-family:宋体">
      技术。
     </span>
     Java DB
     <span style="font-family:宋体">
      数据库与
     </span>
     <a href="http://www.sun.com/software/products/appsrvr_pe/index.xml" rel="nofollow">
      Sun Java System Application Server 9.0, Platform Edition
     </a>
     <span style="font-family:宋体">
      捆绑在一起，
     </span>
    </p>
    <p align="center">
     <strong>
      预期持续时间：25 分钟
     </strong>
    </p>
    <p>
    </p>
    <p>
     <span style="font-family:宋体">
      本教程将介绍以下主题：
     </span>
    </p>
    <p align="left">
     l
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#getting" rel="nofollow">
      获得软件
     </a>
    </p>
    <p align="left">
     l
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#configuring" rel="nofollow">
      配置数据库
     </a>
    </p>
    <p align="left">
     l
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#registering" rel="nofollow">
      在 NetBeans IDE 中注册数据库
     </a>
    </p>
    <p align="left">
     l
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#starting" rel="nofollow">
      启动服务器并创建数据库
     </a>
    </p>
    <p align="left">
     l
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#connecting" rel="nofollow">
      连接数据库
     </a>
    </p>
    <p align="left">
     l
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#creating" rel="nofollow">
      创建表
     </a>
    </p>
    <p align="left">
     l
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#adding" rel="nofollow">
      添加表数据
     </a>
    </p>
    <p align="left">
     l
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#using" rel="nofollow">
      使用 SQL 脚本
     </a>
    </p>
    <p align="left">
     l
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#recreating" rel="nofollow">
      从其他数据库中重新创建表
     </a>
    </p>
    <p align="left">
     l
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#nextSteps" rel="nofollow">
      下一步
     </a>
    </p>
    <p>
    </p>
    <h3>
     获得软件
    </h3>
    <p>
     <span style="font-family:宋体">
      开始本教程之前，您必须确保在计算机上安装了以下软件：
     </span>
    </p>
    <p align="left">
     1.       NetBeans IDE 5.5（
     <a href="http://www.netbeans.info/downloads/index.php" rel="nofollow">
      下载
     </a>
     ）
    </p>
    <p align="left">
     2.       Java SE Development Kit (JDK™) 版本 5.0 或更高版本（
     <a href="http://java.sun.com/javase/downloads/index.jsp" rel="nofollow">
      下载
     </a>
     ）
    </p>
    <p align="left">
     3.       Java DB（
     <a href="http://developers.sun.com/prodtech/javadb/downloads/index.jsp" rel="nofollow">
      下载
     </a>
     ）
    </p>
    <p>
     <strong>
      注意：
     </strong>
     <span style="font-family:宋体">
      如果下载的是
     </span>
     JDK 6
     <span style="font-family:宋体">
      ，则安装中将包含
     </span>
     Java DB
     <span style="font-family:宋体">
      数据库。您还可以下载
     </span>
     <a href="http://www.sun.com/software/products/appsrvr_pe/index.xml" rel="nofollow">
      Sun Java System Application Server
     </a>
     <span style="font-family:宋体">
      ，它包含
     </span>
     Java DB
     <span style="font-family:宋体">
      。当在
     </span>
     NetBeans IDE
     <span style="font-family:宋体">
      中注册该应用程序服务器时，将自动注册
     </span>
     Java DB
     <span style="font-family:宋体">
      。另外，还可以下载
     </span>
     <a href="http://www.netbeans.info/downloads/index.php" rel="nofollow">
      Java EE 5 Tools Bundle
     </a>
     <span style="font-family:宋体">
      ，它既包含
     </span>
     NetBeans IDE
     <span style="font-family:宋体">
      ，也包含
     </span>
     Sun Java
     <span style="font-family:宋体">
      系统应用程序服务器。
     </span>
    </p>
    <p>
    </p>
    <h3>
     配置数据库
    </h3>
    <p>
     <span style="font-family:宋体">
      如果在
     </span>
     NetBeans IDE
     <span style="font-family:宋体">
      中注册了
     </span>
     Sun Java
     <span style="font-family:宋体">
      系统应用程序服务器，那么
     </span>
     Java DB
     <span style="font-family:宋体">
      将被自动注册。您可以直接跳到
      <a href="http://www.netbeans.org/kb/55/derby-demo.html#starting" rel="nofollow">
       启动服务器并创建数据库
      </a>
      部分。如果下载了该应用程序服务器，但在
     </span>
     NetBeans IDE
     <span style="font-family:宋体">
      中注册该服务器时需要帮助，请搜索
     </span>
     IDE
     <span style="font-family:宋体">
      帮助
     </span>
     (F1)
     <span style="font-family:宋体">
      查找关于注册
     </span>
     Sun Java
     <span style="font-family:宋体">
      系统应用程序服务器的实例。如果只下载了
     </span>
     Java DB
     <span style="font-family:宋体">
      ，则执行以下操作：
     </span>
    </p>
    <p align="left">
     1.       运行此自解压文件。在与该文件相同的位置创建一个名为“javadb”的文件夹。如果只下载了 Java DB 并且想将该数据库服务器放在与它解压缩的位置不同的位置，您应该立即将它重新定位。
    </p>
    <p align="left">
     2.       在 Java DB 根目录 (javadb) 中，创建一个名为“database”的新文件夹。我们将在以后使用该文件夹包含该数据库服务器的各个实例。请注意，该文件夹不需要位于数据库的根目录中，但就本教程而言，这样做会比较好。
    </p>
    <p>
     <span style="font-family:宋体">
      在进行下一步之前，让我们简略地查看一下
     </span>
     Java DB
     <span style="font-family:宋体">
      的子目录：
     </span>
    </p>
    <p align="left">
     l
     <tt>
      demo
     </tt>
     子目录包含演示程序。
    </p>
    <p align="left">
     l
     <tt>
      bin
     </tt>
     子目录包含用于执行实用程序和设置环境的脚本。
    </p>
    <p align="left">
     l
     <tt>
      javadoc
     </tt>
     子目录包含从源代码注释中生成的 API 文档。
    </p>
    <p align="left">
     l
     <tt>
      docs
     </tt>
     子目录包含 Java DB 文档。
    </p>
    <p align="left">
     l
     <tt>
      lib
     </tt>
     子目录包含 Java DB jar 文件。
    </p>
    <p align="left">
     l
     <tt>
      frameworks
     </tt>
     子目录包含用于执行实用程序和设置环境的较旧样式的脚本。一般，提供这些脚本是为了向后兼容。在以后的发行版中，它们可能被废弃，以支持使用
     <tt>
      bin
     </tt>
     目录中的脚本。
    </p>
    <h3>
     在 NetBeans IDE 中注册数据库
    </h3>
    <p>
     <span style="font-family:宋体">
      现在我们已经配置了数据库，下面让我们在
     </span>
     IDE
     <span style="font-family:宋体">
      中注册它：
     </span>
    </p>
    <p align="left">
     1.       在 NetBeans IDE 中，从主菜单中选择 Tools &gt; Options。单击 Options 窗口左下角的 Advanced Options 按钮。将打开 Advanced Options 窗口。
    </p>
    <p align="left">
     2.       在 Advanced Options 窗口中，展开 IDE Configuration &gt; Server and External Tools Settings 节点。选择 Java DB Database 节点。
    </p>
    <p align="left">
     3.       现在，在 Advanced Options 窗口的右窗格中的 Properties 下，单击 Java DB Location 的省略号 ( ) 按钮并将路径设置为您解压缩该数据库归档的位置（例如，C:/javadb）。
    </p>
    <p align="left">
     4.       对于 Database Location，将路径设置为新创建的“database”文件夹。下面的屏幕截图显示了 Java DB 服务器的设置示例。完成之后，单击 Close。
     <br/>
     <br/>
     <a href="http://www.netbeans.org/images/articles/derby/55/advanced-options.png" rel="nofollow" title="click to ENLARGE">
     </a>
    </p>
    <p>
    </p>
    <h3>
     启动服务器并创建数据库
    </h3>
    <p>
     <span style="font-family:宋体">
      使用
     </span>
     IDE
     <span style="font-family:宋体">
      注册数据库之后，将在主菜单的
     </span>
     Tools
     <span style="font-family:宋体">
      下出现
     </span>
     Java DB Database
     <span style="font-family:宋体">
      菜单项。使用该菜单项，可以轻松启动和停止该数据库服务器，以及创建新的数据库。要启动该数据库服务器，请执行以下操作：
     </span>
    </p>
    <p align="left">
     1.       选择 Tools &gt; Java DB Database &gt; Start Java DB Server。您将在 Output 窗口中看到以下内容，表示服务器已经启动：
     <br/>
     <a href="http://www.netbeans.org/images/articles/derby/55/output-start-db.png" rel="nofollow" title="click to ENLARGE">
     </a>
    </p>
    <p align="left">
     2.       现在，选择 Tools &gt; Java DB Database &gt; Create Java DB Database...。将打开 Create Java DB Database 对话框。
    </p>
    <p align="left">
     3.       在 Database Name 文本字段中，键入 contact_database。另外将 User Name 和 Password 设置为 nbuser。注意，根据前面
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#registering" rel="nofollow">
      在 NetBeans IDE 中注册数据库
     </a>
     的第 3 步中输入的内容设置 Database Location。如果使用的 Java DB 来自应用程序服务器，则 Database Location 将被设置为其他位置（例如，${HOME}/.netbeans-derby）。单击 OK。例如，
     <br/>
    </p>
    <h3>
     连接数据库
    </h3>
    <p>
     <span style="font-family:宋体">
      到目前为止，我们已经成功地启动了数据库服务器，并在
     </span>
     NetBeans IDE
     <span style="font-family:宋体">
      中创建了数据库。但是，我们仍然需要连接新的数据库，然后才能在
     </span>
     IDE
     <span style="font-family:宋体">
      中使用该数据库。要连接
     </span>
     <tt>
      contact_database
     </tt>
     <span style="font-family:宋体">
      数据库，请执行以下操作：
     </span>
    </p>
    <p align="left">
     1.       切换到 Runtime 窗口 (Ctrl+5) 并展开 Databases 节点以便看到新数据库：
     <br/>
     <br/>
     右键单击该数据库连接节点 (
     <tt>
      jdbc:derby://localhost:1527/contact_database[nbuser on NBUSER]
     </tt>
     )，然后选择 Connect...。
    </p>
    <p align="left">
     2.       在显示的 Connect 对话框中，输入密码，然后单击 OK。注意，该连接节点现在显示完整的 ( )，表示连接已成功。
    </p>
    <p>
    </p>
    <h3>
     创建表
    </h3>
    <p>
     <span style="font-family:宋体">
      很显然，由于我们刚刚创建了
     </span>
     <tt>
      contact_database
     </tt>
     <span style="font-family:宋体">
      ，因此它还不包含任何表或数据。在
     </span>
     NetBeans IDE
     <span style="font-family:宋体">
      中，您可以通过使用
     </span>
     Create Table
     <span style="font-family:宋体">
      对话框或输入
     </span>
     SQL
     <span style="font-family:宋体">
      查询并从
     </span>
     SQL
     <span style="font-family:宋体">
      编辑器中直接运行它来添加数据库表。下面让我们研究一下这两种方法：
     </span>
    </p>
    <h4>
     使用 Create Table 对话框：
    </h4>
    <p align="left">
     1.       展开
     <tt>
      contact_database
     </tt>
     连接节点，注意有三个子文件夹：Tables、Views 和 Procedures。右键单击 Tables 节点，然后选择 Create Table...。将打开 Create Table 对话框。
    </p>
    <p align="left">
     2.       在 Table Name 文本字段中，键入
     <tt>
      CONTACTS
     </tt>
     。
    </p>
    <p align="left">
     3.       在显示的第一行中，选择 Key 复选框。为您的表指定主要关键字。所有位于关系数据库中的表都必须包含一个主要关键字。请注意，当您选择 Key 复选框时，Index 和 Unique 复选框也将自动选中，而 Null 复选框将被取消选择。这是因为主要关键字用来标识数据库中的唯一行，默认情况下它们形成表索引。由于所有行都需要标识，因此主要关键字不能包含 Null 值。
    </p>
    <p align="left">
     4.       在 Column Name 中，输入 ID。为 Data Type，从下拉列表中选择 INTEGER。然后单击 Add Column 按钮。
    </p>
    <p align="left">
     5.       现在重复此过程，按下表中所示指定字段：
    </p>
    <table border="1" cellpadding="0">
     <tbody>
      <tr>
       <td>
        <p align="center">
         <strong>
          Key
         </strong>
        </p>
       </td>
       <td>
        <p align="center">
         <strong>
          Index
         </strong>
        </p>
       </td>
       <td>
        <p align="center">
         <strong>
          Null
         </strong>
        </p>
       </td>
       <td>
        <p align="center">
         <strong>
          Unique
         </strong>
        </p>
       </td>
       <td>
        <p align="center">
         <strong>
          Column name
         </strong>
        </p>
       </td>
       <td>
        <p align="center">
         <strong>
          Data type
         </strong>
        </p>
       </td>
       <td>
        <p align="center">
         <strong>
          Size
         </strong>
        </p>
       </td>
      </tr>
      <tr>
       <td>
        <p>
         [checked]
        </p>
       </td>
       <td>
        <p>
         [checked]
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         [checked]
        </p>
       </td>
       <td>
        <p>
         ID
        </p>
       </td>
       <td>
        <p>
         INTEGER
        </p>
       </td>
       <td>
        <p>
         0
        </p>
       </td>
      </tr>
      <tr>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         [checked]
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         FIRST_NAME
        </p>
       </td>
       <td>
        <p>
         VARCHAR
        </p>
       </td>
       <td>
        <p>
         50
        </p>
       </td>
      </tr>
      <tr>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         [checked]
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         LAST_NAME
        </p>
       </td>
       <td>
        <p>
         VARCHAR
        </p>
       </td>
       <td>
        <p>
         50
        </p>
       </td>
      </tr>
      <tr>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         [checked]
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         TITLE
        </p>
       </td>
       <td>
        <p>
         VARCHAR
        </p>
       </td>
       <td>
        <p>
         50
        </p>
       </td>
      </tr>
      <tr>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         [checked]
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         NICKNAME
        </p>
       </td>
       <td>
        <p>
         VARCHAR
        </p>
       </td>
       <td>
        <p>
         50
        </p>
       </td>
      </tr>
      <tr>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         [checked]
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         DISPLAY_FORMAT
        </p>
       </td>
       <td>
        <p>
         SMALLINT
        </p>
       </td>
       <td>
        <p>
         0
        </p>
       </td>
      </tr>
      <tr>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         [checked]
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         MAIL_FORMAT
        </p>
       </td>
       <td>
        <p>
         SMALLINT
        </p>
       </td>
       <td>
        <p>
         0
        </p>
       </td>
      </tr>
      <tr>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         [checked]
        </p>
       </td>
       <td>
        <p>
        </p>
       </td>
       <td>
        <p>
         EMAIL_ADDRESS
        </p>
       </td>
       <td>
        <p>
         VARCHAR
        </p>
       </td>
       <td>
        <p>
         500
        </p>
       </td>
      </tr>
     </tbody>
    </table>
    <p align="left">
     6.       现在，您大体上已经创建了一个名为 CONTACTS 的表，该表中的每个联系人记录包含以下数据：
    </p>
    <p align="left">
     l          First Name
    </p>
    <p align="left">
     l          Last Name
    </p>
    <p align="left">
     l          Title
    </p>
    <p align="left">
     l          Nickname
    </p>
    <p align="left">
     l          Display Format
    </p>
    <p align="left">
     l          Mail Format
    </p>
    <p align="left">
     l          Email Address
    </p>
    <p>
     <br/>
     确保 Create Table 对话框包含的说明与上面显示的内容相同，然后单击 OK。该 IDE 将在数据库中生成 CONTACTS 表，您将看到在 Runtime 窗口中的 Tables 下显示一个新的 CONTACTS 表节点 ( )。在该表节点下面是我们创建的列（字段），以主要关键字 ( ) 开头：
     <br/>
     <br/>
    </p>
    <h4>
     使用 SQL 编辑器：
    </h4>
    <p align="left">
     1.       右键单击
     <tt>
      contact_database
     </tt>
     连接节点或其下面的 Tables 节点，然后选择 Execute Command...。将在位于主窗口中的 SQL 编辑器中打开一个空白的画布。
    </p>
    <p align="left">
     2.       在 SQL 编辑器中，键入以下查询。这就是您要创建的 CONTACTS 表的表定义：
    </p>
    <pre>CREATE TABLE "CONTACTS" (</pre>
    <pre>    "ID" INTEGER not null primary key,</pre>
    <pre>    "FIRST_NAME" VARCHAR(50),</pre>
    <pre>    "LAST_NAME" VARCHAR(50),</pre>
    <pre>    "TITLE" VARCHAR(50),</pre>
    <pre>    "NICKNAME" VARCHAR(50),</pre>
    <pre>    "DISPLAY_FORMAT" SMALLINT,</pre>
    <pre>    "MAIL_FORMAT" SMALLINT,</pre>
    <pre>    "EMAIL_ADDRESS" VARCHAR(500)</pre>
    <pre>);</pre>
    <p>
     <br/>
     <strong>
      注意：
     </strong>
     在 SQL 编辑器中形成的查询采用结构化查询语言 (Structured Query Language，SQL) 进行解析。SQL 坚持严格的语法规则，当您在 IDE 编辑器中工作时应该熟悉这些规则。运行查询时，会在 Output 窗口中生成来自 SQL 引擎的反馈，该反馈表示执行是否成功。
    </p>
    <p align="left">
     3.       单击顶部任务栏中的 Run SQL ( ) 按钮（或者按 Ctrl+Shift+E）即可执行查询。应该会在 Output 窗口中收到以下消息：
     <br/>
     <br/>
    </p>
    <p align="left">
     4.       要验证更改，请再次右键单击 Runtime 窗口中的
     <tt>
      contact_database
     </tt>
     节点，然后选择 Refresh。这会将 Runtime UI 组件更新为指定数据库的当前状态。当在 NetBeans IDE 中从 SQL 编辑器中运行查询时这是必需的一步。注意，新的 CONTACTS 表节点 ( ) 现在显示在 Runtime 窗口的 Tables 下。
    </p>
    <h3>
     添加表数据
    </h3>
    <p>
     <span style="font-family:宋体">
      我们已经在
     </span>
     <tt>
      contact_database
     </tt>
     <span style="font-family:宋体">
      中创建了第一个表，现在可以用数据填充该表。为了向
     </span>
     CONTACTS
     <span style="font-family:宋体">
      表中添加完整的记录（行），我们需要为表中存在的每个字段提供一个值。首先打开
     </span>
     SQL
     <span style="font-family:宋体">
      编辑器，然后输入一个简单的查询来添加联系人记录：
     </span>
    </p>
    <p align="left">
     1.       从 Runtime 窗口的 CONTACTS 表节点中选择 Execute Command...。将在位于主窗口中的 SQL 编辑器中打开一个空白的画布。
    </p>
    <p align="left">
     2.       在 SQL 编辑器中，键入以下查询：
    </p>
    <pre>insert into "NBUSER"."CONTACTS" values (1,'Monty','Python','Mr.','Bruiser',3,10,'monty.python@flyingcircus.com')</pre>
    <pre>               </pre>
    <p align="left">
     3.       单击顶部任务栏中的 Run SQL ( ) 按钮（或者按 Ctrl+Shift+E）即可执行查询。您应该会在 Output 窗口中收到一条表示该查询已成功执行的消息。
    </p>
    <p align="left">
     4.       要验证新的记录是否已经添加到 CONTACTS 表中，请在 Runtime 窗口中，右键单击 CONTACTS 表节点，然后选择 View Data。SQL 编辑器将再次在主窗口中打开。当选择 View Data 时，将自动在 SQL 编辑器的上部窗格中生成从表中选择所有数据的查询。语句的结果显示在 SQL 编辑器的下部窗格中。在我们的示例中，CONTACTS 表显示在下部窗格中。注意，已经添加了一个新行，其数据来自于我们刚刚从 SQL 查询中得到的数据：
     <br/>
     <br/>
     <a href="http://www.netbeans.org/images/articles/derby/55/new-record.png" rel="nofollow" title="click to ENLARGE">
     </a>
    </p>
    <h3>
     使用 SQL 脚本
    </h3>
    <p>
     <span style="font-family:宋体">
      从外部
     </span>
     SQL
     <span style="font-family:宋体">
      脚本中发出命令通常是管理数据库的常用方法。您可能已经在其他位置创建了
     </span>
     SQL
     <span style="font-family:宋体">
      脚本，并且想将其导入到
     </span>
     NetBeans IDE
     <span style="font-family:宋体">
      中以便在指定的数据库上运行该脚本。
     </span>
    </p>
    <p>
     <span style="font-family:宋体">
      出于演示目的，请下载
     </span>
     <a href="http://www.netbeans.org/files/documents/4/1300/friends.sql" rel="nofollow">
      friends.sql
     </a>
     <span style="font-family:宋体">
      并将其保存到计算机上的某个位置中。该脚本创建一个名为
     </span>
     <tt>
      Friends
     </tt>
     <span style="font-family:宋体">
      的新表并用数据填充该表。要在我们的
     </span>
     <tt>
      contact_database
     </tt>
     <span style="font-family:宋体">
      上运行该脚本，请执行以下操作：
     </span>
    </p>
    <p align="left">
     1.       从 DIE 的主菜单中选择 File &gt; Open File... (Ctrl+O)。在文件浏览器中，导航到您以前保存
     <tt>
      friends.sql
     </tt>
     的位置，然后单击 Open。该脚本将自动在 SQL 编辑器中打开。
    </p>
    <p align="left">
     2.       确保从编辑器顶部工具栏中的 Connection 下拉框中选择了您与
     <tt>
      contact_database
     </tt>
     的连接：
     <br/>
    </p>
    <p align="left">
     3.       单击 SQL 编辑器任务栏中的 Run SQL ( ) 按钮。该脚本将在选定的数据库上执行，并且会在 Output 窗口中生成所有反馈。
    </p>
    <p align="left">
     4.       要验证更改，请右键单击 Runtime 窗口中的
     <tt>
      contact_database
     </tt>
     连接节点，然后选择 Refresh。这会将 Runtime UI 组件更新为指定数据库的当前状态。注意，现在 SQL 脚本中的 Friends 表显示为 Runtime 窗口中
     <tt>
      contact_database
     </tt>
     下的一个表节点。
    </p>
    <p align="left">
     5.       要查看新表中包含的数据，请从表的右键单击菜单中选择 View Data...，
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#viewing" rel="nofollow">
      如
     </a>
     <a href="http://www.netbeans.org/kb/55/derby-demo.html#viewing" rel="nofollow">
      上所述
     </a>
     。通过这种方式，您可以将表中的数据与 SQL 脚本中包含的数据相比较以查看它们是否匹配。
    </p>
    <h3>
     从其他数据库中重新创建表
    </h3>
    <p>
     <span style="font-family:宋体">
      如果有个表来自于另一个数据库，而您希望在
     </span>
     NetBeans IDE
     <span style="font-family:宋体">
      中，您正在使用的数据库里快速重新创建该表，则
     </span>
     IDE
     <span style="font-family:宋体">
      为此提供了一个便利的工具。首先您需要在
     </span>
     IDE
     <span style="font-family:宋体">
      中注册第二个数据库，步骤与本教程开始部分所述的步骤相同。为了便于演示，我们将使用您下载
     </span>
     <a href="http://java.sun.com/javaee/downloads/index.jsp" rel="nofollow">
      Sun Java System Application Server
     </a>
     <span style="font-family:宋体">
      时与
     </span>
     Java DB
     <span style="font-family:宋体">
      捆绑在一起的
     </span>
     <tt>
      sample
     </tt>
     <span style="font-family:宋体">
      数据库。这个过程本质上分为两步：首先，您必须获得选定表的表定义，然后便可以在您选择的数据库中重新创建该表。
     </span>
    </p>
    <h4>
     获得表定义：
    </h4>
    <p align="left">
     1.       通过右键单击 Runtime 窗口中的连接节点，然后选择 Connect...（密码为
     <tt>
      app
     </tt>
     ）连接到
     <tt>
      sample
     </tt>
     数据库。
    </p>
    <p align="left">
     2.       展开 Tables 节点。右键单击
     <tt>
      CUSTOMER
     </tt>
     表，然后选择 Grab Structure...：
     <br/>
     <br/>
    </p>
    <p align="left">
     3.       在打开的 Grab Table 对话框中，指定计算机上的某个位置以保存将要创建的 grab 文件。单击 Save。grab 文件记录选定表的表定义。
    </p>
    <h4>
     重新创建表：
    </h4>
    <p align="left">
     1.       在 Runtime 窗口中，右键单击
     <tt>
      contact_database
     </tt>
     中的 Tables 节点，然后选择 Recreate Table...。
    </p>
    <p align="left">
     2.       在打开的 Recreate Table 对话框中，导航到前面保存
     <tt>
      CUSTOMER
     </tt>
     grab 文件的位置，然后单击 Open。将打开 Name the Table 对话框：
     <br/>
     <br/>
    </p>
    此时，您可以更改表名称或编辑表定义。就本例而言，只需单击 OK 以创建表，您将会看到在 Runtime 窗口的
    <tt>
     contact_database
    </tt>
    连接节点下面的 Tables 下显示了一个新的
    <tt>
     CUSTOMER
    </tt>
    表节点：
    <br/>
    <br/>
   </div>
  </div>
 </article>
</div>



---
layout: post
title: C-Qt开发QSqlDatabase数据库组件
date: 2025-01-16 11:28:53 +0800
categories: [《QtCreator编程技术实践》]
tags: [数据库组件,qt,c++,QSqlDatabase,QSQL]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=135223460
    alt: C-Qt开发QSqlDatabase数据库组件
artid: 135223460
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     C++ Qt开发：QSqlDatabase数据库组件
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-atelier-sulphurpool-light" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
     Qt 是一个跨平台C++图形界面开发库，利用Qt可以快速开发跨平台窗体应用程序，在Qt中我们可以通过拖拽的方式将不同组件放到指定的位置，实现图形化开发极大的方便了开发效率，本章将重点介绍
     <code>
      QSqlDatabase
     </code>
     数据库模块的常用方法及灵活运用。
    </p>
    <p>
     Qt SQL模块是Qt框架的一部分，它提供了一组类和函数，用于在Qt应用程序中进行数据库操作。这个模块的目标是简化数据库访问和操作，并提供一致的接口，使得开发者可以方便地与不同数据库系统进行交互。一般SQL组件常用的操作，包括读取数据、插入数据、更新数据、删除数据功能，这四个功能我将分别介绍它是如何使用的。
    </p>
    <p>
     在使用此模块时必须要引入对应文件，需要在
     <code>
      *.pro
     </code>
     文件内增加
     <code>
      QT += sql
     </code>
     ，并在头文件内导入
     <code>
      QSqlDatabase
     </code>
     模块才可以正常使用，该模块是用于管理数据库连接的核心类之一。它提供了一系列方法，使得在Qt应用程序中进行数据库操作变得方便和灵活。
     <code>
      QSqlDatabase
     </code>
     类的灵活性使得开发者能够与多种数据库系统（如SQLite、MySQL、PostgreSQL等）进行交互，而不必担心底层数据库细节。这有助于实现跨数据库的可移植性和更高层次的数据库访问抽象。
    </p>
    <p>
     下面是
     <code>
      QSqlDatabase
     </code>
     类中一些常用的方法，以表格形式进行说明和概述：
    </p>
    <table>
     <thead>
      <tr>
       <th>
        方法
       </th>
       <th>
        描述
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        <code>
         QSqlDatabase::addDatabase(const QString &amp;type, const QString &amp;connectionName = QLatin1String(defaultConnection))
        </code>
       </td>
       <td>
        添加一个数据库连接，其中
        <code>
         type
        </code>
        指定数据库驱动类型，
        <code>
         connectionName
        </code>
        指定连接的名称，默认为默认连接。返回创建的数据库连接对象。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::database(const QString &amp;connectionName = QLatin1String(defaultConnection), bool open = true)
        </code>
       </td>
       <td>
        获取指定连接名称的数据库连接对象。如果数据库连接不存在，会创建一个新的连接。如果
        <code>
         open
        </code>
        为
        <code>
         true
        </code>
        ，则尝试打开数据库连接。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::removeDatabase(const QString &amp;connectionName = QLatin1String(defaultConnection))
        </code>
       </td>
       <td>
        移除指定连接名称的数据库连接。如果该连接当前处于打开状态，则会被关闭。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::setHostName(const QString &amp;host)
        </code>
       </td>
       <td>
        设置数据库服务器的主机名。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::setDatabaseName(const QString &amp;name)
        </code>
       </td>
       <td>
        设置要连接的数据库的名称。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::setUserName(const QString &amp;name)
        </code>
       </td>
       <td>
        设置用于连接数据库的用户名。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::setPassword(const QString &amp;password)
        </code>
       </td>
       <td>
        设置用于连接数据库的密码。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::setPort(int port)
        </code>
       </td>
       <td>
        设置数据库服务器的端口号。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::open()
        </code>
       </td>
       <td>
        打开数据库连接。如果连接成功，返回
        <code>
         true
        </code>
        ，否则返回
        <code>
         false
        </code>
        。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::close()
        </code>
       </td>
       <td>
        关闭数据库连接。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::isOpen()
        </code>
       </td>
       <td>
        判断数据库连接是否打开。返回
        <code>
         true
        </code>
        表示连接已打开，
        <code>
         false
        </code>
        表示连接未打开。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::tables(QSql::TableType type = QSql::Tables)
        </code>
       </td>
       <td>
        返回数据库中的表的列表。可以指定表的类型，如
        <code>
         QSql::Tables
        </code>
        表示用户表，
        <code>
         QSql::SystemTables
        </code>
        表示系统表。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::commit()
        </code>
       </td>
       <td>
        提交当前事务。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::rollback()
        </code>
       </td>
       <td>
        回滚当前事务。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlDatabase::transaction()
        </code>
       </td>
       <td>
        开始一个新事务。
       </td>
      </tr>
     </tbody>
    </table>
    <p>
     这些方法提供了管理和操作数据库连接的基本功能，包括连接数据库、设置连接参数、打开和关闭连接、执行事务等。在实际使用中，开发者可以根据需要选择适当的方法来管理数据库连接和执行数据库操作。
    </p>
    <h3>
     <a id="11__28">
     </a>
     1.1 逐条记录插入
    </h3>
    <p>
     初始化数据库我们可以通过调用
     <code>
      QSqlDatabase::addDatabase
     </code>
     来打开，在打开参数中支持多种数据库类型的选择，包括但不限于
     <code>
      SQLite
     </code>
     、
     <code>
      MySQL
     </code>
     、
     <code>
      PostgreSQL
     </code>
     、
     <code>
      Oracle
     </code>
     、
     <code>
      ODBC
     </code>
     等，每种数据库类型对应一个特定的驱动，开发者可以通过指定数据库类型和连接名称创建相应的数据库连接。
    </p>
    <p>
     <code>
      QSqlDatabase::addDatabase
     </code>
     是一个静态方法，用于向应用程序中添加一个数据库连接。此方法允许你为不同的数据库类型添加连接，并且你可以为每个连接指定一个唯一的名称。
    </p>
    <pre><code class="prism language-c"><span class="token keyword">static</span> QSqlDatabase QSqlDatabase<span class="token operator">::</span><span class="token function">addDatabase</span><span class="token punctuation">(</span><span class="token keyword">const</span> QString <span class="token operator">&amp;</span>type<span class="token punctuation">,</span> <span class="token keyword">const</span> QString <span class="token operator">&amp;</span>connectionName <span class="token operator">=</span> <span class="token function">QLatin1String</span><span class="token punctuation">(</span>defaultConnection<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <p>
     <strong>
      参数说明
     </strong>
    </p>
    <ul>
     <li>
      <code>
       type
      </code>
      : 字符串，表示数据库的类型，例如 “QSQLITE”、“QMYSQL” 等，具体取决于你所使用的数据库驱动。
     </li>
     <li>
      <code>
       connectionName
      </code>
      : 字符串，表示连接的名称，默认为
      <code>
       defaultConnection
      </code>
      。可以通过这个名称在应用程序中区分不同的数据库连接。
     </li>
    </ul>
    <p>
     <strong>
      返回值
     </strong>
    </p>
    <p>
     返回创建的
     <code>
      QSqlDatabase
     </code>
     对象，可以使用这个对象进行进一步的数据库配置和操作。如果不提供连接名称，将使用默认的连接名称
     <code>
      defaultConnection
     </code>
     。在一个应用程序中，你可以同时拥有多个数据库连接，每个连接都有一个唯一的名称。
    </p>
    <p>
     在打开后接着我们就可以通过执行
     <code>
      db.exec()
     </code>
     的方式向特定数据库内插入数据，如下代码所示，通过在编辑框内提取出所需参数并对数据库进行初始化，当出事后成功后则调用
     <code>
      db.exec()
     </code>
     函数插入记录，最后通过
     <code>
      db.commit()
     </code>
     提交事务刷新到数据库中。
    </p>
    <pre><code class="prism language-c"><span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_pushButton_clicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{<!-- --></span>
    <span class="token comment">// 指定数据库驱动类型</span>
    QSqlDatabase db <span class="token operator">=</span> QSqlDatabase<span class="token operator">::</span><span class="token function">addDatabase</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>lineEdit_type<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">setDatabaseName</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>lineEdit_dir<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>db<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
     <span class="token punctuation">{<!-- --></span>
            QMessageBox<span class="token operator">::</span><span class="token function">information</span><span class="token punctuation">(</span>nullptr<span class="token punctuation">,</span> <span class="token string">"信息"</span><span class="token punctuation">,</span> db<span class="token punctuation">.</span><span class="token function">lastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> QMessageBox<span class="token operator">::</span>Ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token comment">// 获取文本内容</span>
     QString plainText <span class="token operator">=</span> ui<span class="token operator">-&gt;</span>plainTextEdit<span class="token operator">-&gt;</span><span class="token function">toPlainText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token comment">// 使用 split() 函数分割成行</span>
     QStringList lines <span class="token operator">=</span> plainText<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token char">'\n'</span><span class="token punctuation">,</span> Qt<span class="token operator">::</span>SkipEmptyParts<span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token comment">// 遍历每一行</span>
     <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> QString <span class="token operator">&amp;</span>line <span class="token operator">:</span> lines<span class="token punctuation">)</span>
     <span class="token punctuation">{<!-- --></span>
         db<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

    <span class="token comment">// 提交事务请求</span>
    bool ref <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ref <span class="token operator">==</span> true<span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        QMessageBox<span class="token operator">::</span><span class="token function">information</span><span class="token punctuation">(</span>nullptr<span class="token punctuation">,</span> <span class="token string">"信息"</span><span class="token punctuation">,</span> <span class="token string">"初始化失败"</span><span class="token punctuation">,</span> QMessageBox<span class="token operator">::</span>Ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{<!-- --></span>
        QMessageBox<span class="token operator">::</span><span class="token function">information</span><span class="token punctuation">(</span>nullptr<span class="token punctuation">,</span> <span class="token string">"信息"</span><span class="token punctuation">,</span> <span class="token string">"执行初始化成功"</span><span class="token punctuation">,</span> QMessageBox<span class="token operator">::</span>Ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     在初始化部分，我们通过
     <code>
      create table
     </code>
     语句创建一个
     <code>
      LyShark
     </code>
     的数据表，并插入三个字段，分别是
     <code>
      id,name,age
     </code>
     ，当点击初始化时则会使用
     <code>
      QSQLITE
     </code>
     引擎，在当前目录下生成一个名为
     <code>
      database.sqlite
     </code>
     的数据库文件；
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/e6884ec644a4f1caf58f5f48a0234e5b.png"/>
    </p>
    <p>
     同理，只要准备合理的SQL语句就可以实现对应的数据库记录的插入功能；
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/94f37375726a674ab2aa25c7f76ee0ec.png"/>
    </p>
    <h3>
     <a id="12__95">
     </a>
     1.2 多条记录插入
    </h3>
    <p>
     多条记录的插入依赖于
     <code>
      QSqlQuery
     </code>
     类，该类是
     <code>
      Qt
     </code>
     中用于执行和处理
     <code>
      SQL
     </code>
     查询的类。它允许你向数据库发送 SQL 查询并检索查询结果。以下是
     <code>
      QSqlQuery
     </code>
     类中一些常用的方法，以表格形式进行说明和概述：
    </p>
    <table>
     <thead>
      <tr>
       <th>
        方法
       </th>
       <th>
        描述
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        <code>
         QSqlQuery::QSqlQuery(QSqlDatabase db = QSqlDatabase())
        </code>
       </td>
       <td>
        构造函数，创建一个数据库查询对象。如果提供了数据库连接对象
        <code>
         db
        </code>
        ，则该查询对象将与指定的数据库连接关联。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlQuery::~QSqlQuery()
        </code>
       </td>
       <td>
        析构函数，释放查询对象。在对象销毁时，会自动关闭查询。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         exec(const QString &amp;query)
        </code>
       </td>
       <td>
        执行指定的 SQL 查询。返回
        <code>
         true
        </code>
        表示执行成功，
        <code>
         false
        </code>
        表示执行失败。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         execBatch(BatchExecutionMode mode = ValuesAsRows)
        </code>
       </td>
       <td>
        批量执行多个 SQL 查询。可以设置批量执行模式。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         isActive() const
        </code>
       </td>
       <td>
        判断查询是否处于活动状态（已执行并且未关闭）。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         isSelect() const
        </code>
       </td>
       <td>
        判断当前查询是否是 SELECT 查询。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         lastError() const
        </code>
       </td>
       <td>
        获取最后一次执行的查询的错误信息。如果查询成功，返回一个空的
        <code>
         QSqlError
        </code>
        对象。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         next()
        </code>
       </td>
       <td>
        移动到结果集中的下一条记录。返回
        <code>
         true
        </code>
        表示移动成功，
        <code>
         false
        </code>
        表示已经没有更多记录。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         seek(int index, bool relative = false)
        </code>
       </td>
       <td>
        定位到结果集中的指定记录。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         value(int index)
        </code>
       </td>
       <td>
        获取当前记录中指定列的值。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         value(const QString &amp;name)
        </code>
       </td>
       <td>
        获取当前记录中指定列名的值。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         prepare(const QString &amp;query)
        </code>
       </td>
       <td>
        准备一个 SQL 查询。可以在查询中使用占位符
        <code>
         ?
        </code>
        作为参数的占位符。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         bindValue(const QString &amp;placeholder, const QVariant &amp;val, QSql::ParamType type = QSql::In)
        </code>
       </td>
       <td>
        绑定参数到查询。可以使用占位符
        <code>
         ?
        </code>
        或者命名占位符
        <code>
         :name
        </code>
        。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         executedQuery() const
        </code>
       </td>
       <td>
        获取实际执行的 SQL 查询。当使用占位符时，这个方法返回实际执行的 SQL 语句。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         record() const
        </code>
       </td>
       <td>
        获取查询的元数据信息，包括字段名、字段类型等。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         size() const
        </code>
       </td>
       <td>
        获取结果集的记录数。
       </td>
      </tr>
     </tbody>
    </table>
    <p>
     这些方法提供了一些基本的数据库查询和结果处理功能，包括执行查询、处理结果、错误处理、绑定参数、获取元数据等。在实际应用中，可以根据具体的需求选择适当的方法来操作数据库。
    </p>
    <p>
     如下代码所示，首先我们通过
     <code>
      split
     </code>
     的方式将两个
     <code>
      plainEditText
     </code>
     中的内容进行分割，并分别将结果存储至
     <code>
      QStringList
     </code>
     容器内，接着通过使用
     <code>
      query.prepare
     </code>
     绑定一个SQL语句对应关系，并通过循环的方式以此插入数据，代码如下所示；
    </p>
    <pre><code class="prism language-c"><span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_pushButton_3_clicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{<!-- --></span>
    <span class="token comment">// 指定数据库驱动类型</span>
    QSqlDatabase db <span class="token operator">=</span> QSqlDatabase<span class="token operator">::</span><span class="token function">addDatabase</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>lineEdit_type<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">setDatabaseName</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>lineEdit_dir<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>db<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        QMessageBox<span class="token operator">::</span><span class="token function">information</span><span class="token punctuation">(</span>nullptr<span class="token punctuation">,</span> <span class="token string">"信息"</span><span class="token punctuation">,</span> db<span class="token punctuation">.</span><span class="token function">lastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> QMessageBox<span class="token operator">::</span>Ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 定义字符串链表</span>
    QStringList user_name<span class="token punctuation">;</span>
    QStringList user_age<span class="token punctuation">;</span>

    <span class="token comment">// 获取文本内容</span>
    QString plainText_uname <span class="token operator">=</span> ui<span class="token operator">-&gt;</span>plainTextEdit_uname<span class="token operator">-&gt;</span><span class="token function">toPlainText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    QString plainTextEdit_uage <span class="token operator">=</span> ui<span class="token operator">-&gt;</span>plainTextEdit_uage<span class="token operator">-&gt;</span><span class="token function">toPlainText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用 split() 函数分割成行</span>
    QStringList lines_uname <span class="token operator">=</span> plainText_uname<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token char">'\n'</span><span class="token punctuation">,</span> Qt<span class="token operator">::</span>SkipEmptyParts<span class="token punctuation">)</span><span class="token punctuation">;</span>
    QStringList lines_uage <span class="token operator">=</span> plainText_uname<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token char">'\n'</span><span class="token punctuation">,</span> Qt<span class="token operator">::</span>SkipEmptyParts<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 遍历每一行</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> QString <span class="token operator">&amp;</span>line <span class="token operator">:</span> lines_uname<span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        user_name<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> QString <span class="token operator">&amp;</span>line <span class="token operator">:</span> lines_uage<span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        user_age<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 绑定数据记录</span>
    QSqlQuery query<span class="token punctuation">;</span>
    query<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token string">"INSERT INTO LyShark(name,age) "</span><span class="token string">"VALUES (:name, :age)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 判断两张表中字段数据量是否一致</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>user_name<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> user_age<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 循环插入数据</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>x<span class="token operator">&lt;</span> user_name<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{<!-- --></span>
            query<span class="token punctuation">.</span><span class="token function">bindValue</span><span class="token punctuation">(</span><span class="token string">":name"</span><span class="token punctuation">,</span>user_name<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            query<span class="token punctuation">.</span><span class="token function">bindValue</span><span class="token punctuation">(</span><span class="token string">":age"</span><span class="token punctuation">,</span>user_age<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            query<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 提交事务请求</span>
    bool ref <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ref <span class="token operator">==</span> true<span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        QMessageBox<span class="token operator">::</span><span class="token function">information</span><span class="token punctuation">(</span>nullptr<span class="token punctuation">,</span> <span class="token string">"信息"</span><span class="token punctuation">,</span> <span class="token string">"插入数据失败"</span><span class="token punctuation">,</span> QMessageBox<span class="token operator">::</span>Ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{<!-- --></span>
        QMessageBox<span class="token operator">::</span><span class="token function">information</span><span class="token punctuation">(</span>nullptr<span class="token punctuation">,</span> <span class="token string">"信息"</span><span class="token punctuation">,</span> <span class="token string">"插入数据成功"</span><span class="token punctuation">,</span> QMessageBox<span class="token operator">::</span>Ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     运行后则可以将如下所示的字段依次插入到数据库中存储，如下图所示；
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/089e7c0fa945e4f8d8a1aef3309f68f2.png"/>
    </p>
    <h3>
     <a id="13__191">
     </a>
     1.3 查询表中记录
    </h3>
    <p>
     查询表中记录离不开
     <code>
      QSqlRecord
     </code>
     类，它是Qt中用于表示数据库记录（行）的元数据的类。提供了关于记录中字段（列）的信息，包括字段名、字段类型等。通常用于表示数据库查询的结果集中的一行记录的元数据，以便在程序中处理这些记录的信息。
    </p>
    <p>
     以下是
     <code>
      QSqlRecord
     </code>
     类中一些常用的方法，以表格形式进行说明和概述：
    </p>
    <table>
     <thead>
      <tr>
       <th>
        方法
       </th>
       <th>
        描述
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        <code>
         QSqlRecord::QSqlRecord(const QSqlRecord &amp;other)
        </code>
       </td>
       <td>
        复制构造函数，创建一个
        <code>
         QSqlRecord
        </code>
        对象，复制另一个记录的信息。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         QSqlRecord::~QSqlRecord()
        </code>
       </td>
       <td>
        析构函数，释放
        <code>
         QSqlRecord
        </code>
        对象。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         append(const QSqlField &amp;field)
        </code>
       </td>
       <td>
        向记录中添加一个字段。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         clear()
        </code>
       </td>
       <td>
        清空记录中的所有字段。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         field(int index) const
        </code>
       </td>
       <td>
        获取指定索引的字段信息。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         field(const QString &amp;name) const
        </code>
       </td>
       <td>
        获取指定字段名的字段信息。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         fieldName(int index) const
        </code>
       </td>
       <td>
        获取指定索引的字段名。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         indexOf(const QString &amp;name) const
        </code>
       </td>
       <td>
        获取指定字段名的索引。如果字段不存在，返回 -1。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         isEmpty() const
        </code>
       </td>
       <td>
        判断记录是否为空（没有字段）。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         isGenerated(int index) const
        </code>
       </td>
       <td>
        判断指定索引的字段是否为自动生成的。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         setGenerated(int index, bool generated)
        </code>
       </td>
       <td>
        设置指定索引的字段是否为自动生成的。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         setGenerated(const QString &amp;name, bool generated)
        </code>
       </td>
       <td>
        设置指定字段名的字段是否为自动生成的。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         setField(int index, const QSqlField &amp;field)
        </code>
       </td>
       <td>
        设置指定索引的字段信息。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         count() const
        </code>
       </td>
       <td>
        获取记录中字段的数量。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         contains(const QString &amp;name) const
        </code>
       </td>
       <td>
        判断记录中是否包含指定字段名的字段。
       </td>
      </tr>
      <tr>
       <td>
        <code>
         operator=()
        </code>
       </td>
       <td>
        赋值运算符重载，将一个记录的内容复制给另一个记录。
       </td>
      </tr>
     </tbody>
    </table>
    <p>
     这些方法提供了一些基本的记录处理功能，包括添加字段、获取字段信息、设置字段信息、判断字段是否存在等。在实际应用中，可以根据具体的需求选择适当的方法来操作记录。
    </p>
    <p>
     在查询数据时，我们只需要通过
     <code>
      QSqlQuery
     </code>
     得到完整的数据表记录条数，然后就可以使用
     <code>
      QSqlRecord
     </code>
     来创建一个查询对象，此时每次调用
     <code>
      query.next()
     </code>
     都会向后遍历一行记录，通过
     <code>
      rec.indexOf
     </code>
     就可以得到对应字段的参数值，而
     <code>
      query.value
     </code>
     则可以将其提取出来，最后我们将其插入到
     <code>
      TreeWidget
     </code>
     中用于展示，代码如下所示；
    </p>
    <pre><code class="prism language-c"><span class="token comment">// 查询表中数据</span>
<span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_pushButton_4_clicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{<!-- --></span>
    <span class="token comment">// 指定数据库驱动类型</span>
    QSqlDatabase db <span class="token operator">=</span> QSqlDatabase<span class="token operator">::</span><span class="token function">addDatabase</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>lineEdit_type<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">setDatabaseName</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>lineEdit_dir<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>db<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        QMessageBox<span class="token operator">::</span><span class="token function">information</span><span class="token punctuation">(</span>nullptr<span class="token punctuation">,</span> <span class="token string">"信息"</span><span class="token punctuation">,</span> db<span class="token punctuation">.</span><span class="token function">lastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> QMessageBox<span class="token operator">::</span>Ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 查询数据</span>
    QSqlQuery <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">"SELECT * FROM LyShark;"</span><span class="token punctuation">,</span>db<span class="token punctuation">)</span><span class="token punctuation">;</span>
    QSqlRecord rec <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">record</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 循环所有记录</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 判断当前记录是否有效</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{<!-- --></span>
            <span class="token comment">// 读出数据</span>
            <span class="token keyword">int</span> id_ptr <span class="token operator">=</span> rec<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> id_value <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>id_ptr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">int</span> name_ptr <span class="token operator">=</span> rec<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            QString name_value <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>name_ptr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">int</span> age_ptr <span class="token operator">=</span> rec<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> age_value <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>age_ptr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 设置treeWidget属性</span>
            ui<span class="token operator">-&gt;</span>treeWidget<span class="token operator">-&gt;</span><span class="token function">setColumnCount</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// 设置总列数</span>
            ui<span class="token operator">-&gt;</span>treeWidget<span class="token operator">-&gt;</span><span class="token function">setColumnWidth</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 设置最后一列宽度自适应</span>
            ui<span class="token operator">-&gt;</span>treeWidget<span class="token operator">-&gt;</span><span class="token function">setIndentation</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// 设置表头缩进为0</span>

            <span class="token comment">// 设置表头数据</span>
            QStringList headers<span class="token punctuation">;</span>
            headers<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"UID"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            headers<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"用户名"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            headers<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"年龄"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            ui<span class="token operator">-&gt;</span>treeWidget<span class="token operator">-&gt;</span><span class="token function">setHeaderLabels</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 模拟插入数据到表中</span>
            QTreeWidgetItem<span class="token operator">*</span> item<span class="token operator">=</span>new <span class="token function">QTreeWidgetItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            item<span class="token operator">-&gt;</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>QString<span class="token operator">::</span><span class="token function">number</span><span class="token punctuation">(</span>id_value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            item<span class="token operator">-&gt;</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>name_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            item<span class="token operator">-&gt;</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>QString<span class="token operator">::</span><span class="token function">number</span><span class="token punctuation">(</span>age_value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ui<span class="token operator">-&gt;</span>treeWidget<span class="token operator">-&gt;</span><span class="token function">addTopLevelItem</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     编译并运行程序，当点击查询按钮时，则可以将数据库中的数据输出到组件中显示，如下图所示；
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/8724048af6935d577a0b4fe1d5bd2578.png"/>
    </p>
    <h3>
     <a id="15__280">
     </a>
     1.5 更新表中记录
    </h3>
    <p>
     最后一项是对记录的更新，其实更新记录同样是使用
     <code>
      exec()
     </code>
     函数，只不过是将插入语句修改为了
     <code>
      update
     </code>
     而已，如下代码通过数据库查询并根据特定条件填充了界面上的两个文本框 (
     <code>
      ui-&gt;lineEdit_select_uname
     </code>
     和
     <code>
      ui-&gt;lineEdit_select_uage
     </code>
     )。下面是这段代码的概述：
    </p>
    <ol>
     <li>
      <strong>
       建立数据库连接：
      </strong>
      <ul>
       <li>
        通过
        <code>
         QSqlDatabase::addDatabase
        </code>
        设置数据库的驱动类型，例如 “QSQLITE”、“QMYSQL” 等。
       </li>
       <li>
        使用
        <code>
         setDatabaseName
        </code>
        设置数据库名称，这可能是一个本地文件名或者服务器地址。
       </li>
       <li>
        尝试打开数据库连接，如果连接失败，通过
        <code>
         QMessageBox
        </code>
        显示错误信息。
       </li>
      </ul>
     </li>
     <li>
      <strong>
       执行数据库查询：
      </strong>
      <ul>
       <li>
        使用
        <code>
         QSqlQuery
        </code>
        对象执行 SQL 查询语句 “SELECT * FROM LyShark;”。
       </li>
       <li>
        通过
        <code>
         QSqlRecord
        </code>
        获取查询结果的记录结构，包括字段名和字段类型。
       </li>
      </ul>
     </li>
     <li>
      <strong>
       循环处理查询结果：
      </strong>
      <ul>
       <li>
        使用
        <code>
         while (query.next())
        </code>
        循环遍历查询结果中的每一行记录。
       </li>
       <li>
        对于每个有效的记录，获取 “id” 字段的值，并与用户输入的 “uid” 进行匹配。
       </li>
       <li>
        如果匹配成功，获取 “name” 和 “age” 字段的值，并将其分别填充到
        <code>
         ui-&gt;lineEdit_select_uname
        </code>
        和
        <code>
         ui-&gt;lineEdit_select_uage
        </code>
        中。
       </li>
       <li>
        如果没有匹配的记录，或者记录无效，将
        <code>
         ui-&gt;lineEdit_select_uname
        </code>
        和
        <code>
         ui-&gt;lineEdit_select_uage
        </code>
        的文本设置为 “-1”。
       </li>
      </ul>
     </li>
    </ol>
    <p>
     这段代码主要完成了从数据库查询数据并将结果填充到用户界面的操作。需要注意的是，如果涉及用户输入的
     <code>
      ui-&gt;lineEdit_select_uid-&gt;text()
     </code>
     不是数字，可能需要额外的验证和处理。此外，数据库的表结构和字段名需要与代码中的对应关系一致。
    </p>
    <pre><code class="prism language-c"><span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_pushButton_5_clicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{<!-- --></span>
    <span class="token comment">// 指定数据库驱动类型</span>
    QSqlDatabase db <span class="token operator">=</span> QSqlDatabase<span class="token operator">::</span><span class="token function">addDatabase</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>lineEdit_type<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">setDatabaseName</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>lineEdit_dir<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>db<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        QMessageBox<span class="token operator">::</span><span class="token function">information</span><span class="token punctuation">(</span>nullptr<span class="token punctuation">,</span> <span class="token string">"信息"</span><span class="token punctuation">,</span> db<span class="token punctuation">.</span><span class="token function">lastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> QMessageBox<span class="token operator">::</span>Ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 查询数据</span>
    QSqlQuery <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">"SELECT * FROM LyShark;"</span><span class="token punctuation">,</span>db<span class="token punctuation">)</span><span class="token punctuation">;</span>
    QSqlRecord rec <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">record</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 循环所有记录</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 判断当前记录是否有效</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{<!-- --></span>
            <span class="token comment">// 读出数据</span>
            <span class="token keyword">int</span> id_ptr <span class="token operator">=</span> rec<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> id_value <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>id_ptr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 如果是则填充表格</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>QString<span class="token operator">::</span><span class="token function">number</span><span class="token punctuation">(</span>id_value<span class="token punctuation">)</span> <span class="token operator">==</span> ui<span class="token operator">-&gt;</span>lineEdit_select_uid<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{<!-- --></span>
                <span class="token keyword">int</span> name_ptr <span class="token operator">=</span> rec<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                QString name_value <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>name_ptr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                ui<span class="token operator">-&gt;</span>lineEdit_select_uname<span class="token operator">-&gt;</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token function">QString</span><span class="token punctuation">(</span>name_value<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">int</span> age_ptr <span class="token operator">=</span> rec<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                QString age_value <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>age_ptr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                ui<span class="token operator">-&gt;</span>lineEdit_select_uage<span class="token operator">-&gt;</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token function">QString</span><span class="token punctuation">(</span>age_value<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{<!-- --></span>
            ui<span class="token operator">-&gt;</span>lineEdit_select_uname<span class="token operator">-&gt;</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">"-1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ui<span class="token operator">-&gt;</span>lineEdit_select_uage<span class="token operator">-&gt;</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">"-1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     读者可通过输入一个唯一的标识符，例如UID号，来实现对特定数据的查询功能，如下图所示；
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/ef700fb75fedf2c6f0001453ec68e21d.png"/>
    </p>
    <p>
     数据的跟新只需要调用
     <code>
      update
     </code>
     语句即可实现，其他的功能与查询保持一致，如下代码实现了数据的共恶心操作，以下是代码的概述：
    </p>
    <ol>
     <li>
      <strong>
       建立数据库连接：
      </strong>
      <ul>
       <li>
        使用
        <code>
         QSqlDatabase::addDatabase
        </code>
        设置数据库的驱动类型，例如 “QSQLITE”、“QMYSQL” 等。
       </li>
       <li>
        使用
        <code>
         setDatabaseName
        </code>
        设置数据库名称，这可能是一个本地文件名或者服务器地址。
       </li>
       <li>
        尝试打开数据库连接，如果连接失败，通过
        <code>
         QMessageBox
        </code>
        显示错误信息。
       </li>
      </ul>
     </li>
     <li>
      <strong>
       执行数据库更新：
      </strong>
      <ul>
       <li>
        从用户界面的输入框中获取更新所需的数据，包括
        <code>
         uid
        </code>
        、
        <code>
         name
        </code>
        、和
        <code>
         age
        </code>
        。
       </li>
       <li>
        构建 SQL 更新语句，例如
        <code>
         UPDATE LyShark SET name='newName', age=25 WHERE id=123;
        </code>
        。
       </li>
       <li>
        使用
        <code>
         db.exec(sql)
        </code>
        执行 SQL 更新语句。
       </li>
      </ul>
     </li>
     <li>
      <strong>
       事务的提交和关闭：
      </strong>
      <ul>
       <li>
        尝试提交事务，如果成功，显示更新数据成功的消息，否则显示更新数据失败的消息。
       </li>
       <li>
        关闭数据库连接。
       </li>
      </ul>
     </li>
    </ol>
    <p>
     需要注意：
    </p>
    <ul>
     <li>
      在一般情况下，Qt 的数据库操作会自动处理事务，你不必显式调用
      <code>
       commit()
      </code>
      。
     </li>
     <li>
      使用
      <code>
       std::cout
      </code>
      输出日志不太符合 Qt 的风格，Qt 提供了
      <code>
       qDebug()
      </code>
      用于输出调试信息。
     </li>
     <li>
      对于事务，通常在更新操作后关闭数据库连接，而不是在提交事务之前。
     </li>
    </ul>
    <pre><code class="prism language-c"><span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_pushButton_6_clicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{<!-- --></span>
    <span class="token comment">// 指定数据库驱动类型</span>
    QSqlDatabase db <span class="token operator">=</span> QSqlDatabase<span class="token operator">::</span><span class="token function">addDatabase</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>lineEdit_type<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">setDatabaseName</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>lineEdit_dir<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>db<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        QMessageBox<span class="token operator">::</span><span class="token function">information</span><span class="token punctuation">(</span>nullptr<span class="token punctuation">,</span> <span class="token string">"信息"</span><span class="token punctuation">,</span> db<span class="token punctuation">.</span><span class="token function">lastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> QMessageBox<span class="token operator">::</span>Ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 执行SQL更新记录</span>
    <span class="token keyword">int</span> uid <span class="token operator">=</span> ui<span class="token operator">-&gt;</span>lineEdit_select_uid<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    QString name <span class="token operator">=</span> ui<span class="token operator">-&gt;</span>lineEdit_select_uname<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> ui<span class="token operator">-&gt;</span>lineEdit_select_uage<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    QString sql <span class="token operator">=</span> <span class="token function">QString</span><span class="token punctuation">(</span><span class="token string">"UPDATE LyShark SET name='%1', age=%2 WHERE id=%3;"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">arg</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">arg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">arg</span><span class="token punctuation">(</span>uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"update =&gt; "</span> <span class="token operator">&lt;&lt;</span> sql<span class="token punctuation">.</span><span class="token function">toStdString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

    <span class="token comment">// 提交事务请求</span>
    bool ref <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ref <span class="token operator">==</span> true<span class="token punctuation">)</span>
    <span class="token punctuation">{<!-- --></span>
        QMessageBox<span class="token operator">::</span><span class="token function">information</span><span class="token punctuation">(</span>nullptr<span class="token punctuation">,</span> <span class="token string">"信息"</span><span class="token punctuation">,</span> <span class="token string">"更新数据失败"</span><span class="token punctuation">,</span> QMessageBox<span class="token operator">::</span>Ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{<!-- --></span>
        QMessageBox<span class="token operator">::</span><span class="token function">information</span><span class="token punctuation">(</span>nullptr<span class="token punctuation">,</span> <span class="token string">"信息"</span><span class="token punctuation">,</span> <span class="token string">"更新数据成功"</span><span class="token punctuation">,</span> QMessageBox<span class="token operator">::</span>Ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     读者可通过输入一个UID编号查询数据记录，接着在修改对应的字段值，并点击更新按钮刷新数据库，如下图所示将第一个记录的姓名刷新为
     <code>
      lyshark
     </code>
     ；
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/1464098498b70112a9f2d56643b70028.png"/>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



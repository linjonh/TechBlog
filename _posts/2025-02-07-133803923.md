---
title: 2025-02-07-GaussDB数据库SQL系列-LOCK-TABLE
date: 2025-02-07 22:08:06 +0800
categories: [GaussDB经验总结]
tags: [数据库,gaussdb,sql]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=133803923
  alt: GaussDB数据库SQL系列-LOCK-TABLE
artid: 133803923
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     GaussDB数据库SQL系列-LOCK TABLE
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p style="margin-left:.0001pt;">
     <span style="color:#2e74b5;">
      <span style="color:#000000;">
       目录
      </span>
     </span>
    </p>
    <p style="margin-left:.0001pt;text-align:justify;">
     <span style="color:#0563c1;">
      <u>
       <a href="#_Toc146727291" rel="nofollow">
        一、前言
       </a>
      </u>
     </span>
    </p>
    <p style="margin-left:.0001pt;text-align:justify;">
     <span style="color:#0563c1;">
      <u>
       <a href="#_Toc146727292" rel="nofollow">
        二、GaussDB数据库的锁
       </a>
      </u>
     </span>
    </p>
    <p style="text-align:justify;">
     <span style="color:#0563c1;">
      <u>
       <a href="#_Toc146727293" rel="nofollow">
        1、GaussDB中的LOCK TABLE
       </a>
      </u>
     </span>
    </p>
    <p style="text-align:justify;">
     <span style="color:#0563c1;">
      <u>
       <a href="#_Toc146727294" rel="nofollow">
        2、示例一：ACCESS EXCLUSIVE 模式
       </a>
      </u>
     </span>
    </p>
    <p style="text-align:justify;">
     <span style="color:#0563c1;">
      <u>
       <a href="#_Toc146727295" rel="nofollow">
        3、示例二：SHARE ROW EXCLUSIVE 模式
       </a>
      </u>
     </span>
    </p>
    <p style="margin-left:.0001pt;text-align:justify;">
     <span style="color:#0563c1;">
      <u>
       <a href="#_Toc146727296" rel="nofollow">
        三、小结
       </a>
      </u>
     </span>
    </p>
    <p style="margin-left:.0001pt;text-align:justify;">
    </p>
    <h2 style="margin-left:0;text-align:justify;">
     <a name="_Toc146727291">
      <span style="color:#000000;">
       一、前言
      </span>
     </a>
    </h2>
    <p style="margin-left:.0001pt;text-align:left;">
     <span style="color:#000000;">
      GaussDB
     </span>
     <span style="color:#000000;">
      是一款高性能、高可用的分布式数据库，广泛应用于各类行业和场景。在GaussDB中，锁是实现并发控制的关键机制之一，用于协调多个事务之间的数据访问，确保数据的一致性和完整性。本文将围绕GaussDB数据库的LOCK TABLE 做一简单介绍。
     </span>
    </p>
    <h2 style="margin-left:0;text-align:justify;">
     <a name="_Toc146727292">
      <span style="color:#000000;">
       二、GaussDB数据库的锁
      </span>
     </a>
    </h2>
    <p style="margin-left:.0001pt;text-align:left;">
     <span style="background-color:#FFFFFF;">
      <span style="color:#000000;">
       GaussDB
      </span>
     </span>
     <span style="background-color:#FFFFFF;">
      <span style="color:#000000;">
       提供了多种锁模式用于控制对表中数据的并发访问。这些模式可以用在MVCC（多版本并发控制）无法给出期望行为的场合。同样，大多数GaussDB命令自动施加恰当的锁，以保证被引用的表在命令的执行过程中不会以一种不兼容的方式被删除或者修改。比如，在存在其他并发操作的时候，ALTER TABLE是不能在同一个表上执行的。
      </span>
     </span>
    </p>
    <h3 style="margin-left:0;text-align:justify;">
     <a name="_Toc146727293">
      <span style="color:#000000;">
       1
      </span>
     </a>
     <span style="color:#000000;">
      、GaussDB中的LOCK TABLE
     </span>
    </h3>
    <p style="margin-left:.0001pt;text-align:justify;">
     <span style="color:#000000;">
      LOCK TABLE
     </span>
     <span style="color:#000000;">
      获取表级锁。
     </span>
    </p>
    <p style="margin-left:.0001pt;text-align:left;">
     <span style="color:#000000;">
      如果需要保持数据库数据的一致性，可以使用LOCK TABLE来阻止其他用户修改表。例如，一个应用需要保证表中的数据在事务的运行过程中不被修改。为实现这个目的，则可以对表进行锁定，这样将防止数据不被并发修改。LOCK TABLE只在一个事务块的内部有用，在事务结束时就会被释放。
     </span>
    </p>
    <p style="margin-left:.0001pt;text-align:left;">
     <strong>
      <span style="color:#000000;">
       1
      </span>
     </strong>
     <strong>
      <span style="color:#000000;">
       ）语法格式
      </span>
     </strong>
    </p>
    <pre><code class="language-sql">LOCK [ TABLE ] name  IN {ACCESS SHARE | ROW SHARE | ROW EXCLUSIVE | SHARE UPDATE EXCLUSIVE | SHARE | SHARE ROW EXCLUSIVE | EXCLUSIVE | ACCESS EXCLUSIVE} MODE</code></pre>
    <p style="margin-left:.0001pt;text-align:left;">
     <strong>
      <span style="color:#000000;">
       2
      </span>
     </strong>
     <strong>
      <span style="color:#000000;">
       ）参数说明
      </span>
     </strong>
    </p>
    <p style="margin-left:.0001pt;text-align:left;">
     <span style="color:#000000;">
      1
     </span>
     <span style="color:#000000;">
      ）name：要锁定的表的名称。
     </span>
    </p>
    <p style="margin-left:.0001pt;text-align:left;">
     <span style="color:#000000;">
      2
     </span>
     <span style="color:#000000;">
      ）锁的模式：
     </span>
    </p>
    <ul>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        ACCESS SHARE
       </span>
      </strong>
      <strong>
       <span style="color:#000000;">
        ：
       </span>
      </strong>
      <span style="color:#000000;">
       只读取表而不修改。所有对表进行读取而不修改的SQL语句都会自动请求这种锁。
      </span>
     </li>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        ROW SHARE
       </span>
      </strong>
      <strong>
       <span style="color:#000000;">
        ：
       </span>
      </strong>
      <span style="color:#000000;">
       允许对表进行并发读取，禁止对表进行其他操作。SELECT FOR UPDATE和SELECT FOR SHARE命令会自动在目标表上请求ROW SHARE锁（且所有被引用但不是FOR SHARE/FOR UPDATE的其他表上，还会自动加上ACCESS SHARE锁）。对于分区表，SELECT FOR SHARE操作还会在DN上获取partition对象的ROW EXCLUSIVE锁进行并发控制。
      </span>
     </li>
    </ul>
    <ul>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        ROW EXCLUSIVE
       </span>
      </strong>
      <strong>
       <span style="color:#000000;">
        ：
       </span>
      </strong>
      <span style="color:#000000;">
       与ROW SHARE锁相同，ROW EXCLUSIVE允许并发读取表，但是禁止修改表中数据。UPDATE，DELETE，INSERT命令会自动在目标表上请求这个锁（且所有被引用的其他表上还会自动加上的ACCESS SHARE锁）。通常情况下，所有会修改表数据的命令都会请求表的ROW EXCLUSIVE锁。
      </span>
     </li>
    </ul>
    <ul>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        SHARE UPDATE EXCLUSIVE
       </span>
      </strong>
      <strong>
       <span style="color:#000000;">
        ：
       </span>
      </strong>
      <span style="color:#000000;">
       保护一个表的模式不被并发修改，以及禁止在目标表上执行垃圾回收命令（VACUUM）。VACUUM（不带FULL选项）、ANALYZE、CREATE INDEX CONCURRENTLY命令会自动请求这样的锁。
      </span>
     </li>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        SHARE
       </span>
      </strong>
      <strong>
       <span style="color:#000000;">
        ：
       </span>
      </strong>
      <span style="color:#000000;">
       允许并发的查询，但是禁止对表进行修改。CREATE INDEX（不带CONCURRENTLY）语句会自动请求这种锁。
      </span>
     </li>
    </ul>
    <ul>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        EXCLUSIVE:
       </span>
      </strong>
      <span style="color:#000000;">
       允许对目标表进行并发查询，但是禁止任何其他操作。这个模式只允许并发加ACCESS SHARE锁，也就是说，只有对表的读动作可以和持有这个锁模式的事务并发执行。任何SQL语句都不会在用户表上自动请求这个锁模式。然而在某些操作的时候，会在某些系统表上请求它。
      </span>
     </li>
     <li style="text-align:left;">
      <strong>
       <span style="color:#FF0000;">
        SHARE ROW EXCLUSIVE:
       </span>
      </strong>
      <span style="color:#000000;">
       禁止对表进行任何的并发修改，而且是独占锁，因此一个会话中只能获取一次。任何SQL语句都不会自动请求这个锁模式。
      </span>
     </li>
     <li style="text-align:left;">
      <strong>
       <span style="color:#FF0000;">
        ACCESS EXCLUSIVE:
       </span>
      </strong>
      <span style="color:#000000;">
       保证其所有者（事务）是可以访问该表的唯一事务。ALTER TABLE，DROP TABLE，TRUNCATE，REINDEX，CLUSTER，VACUUM FULL命令会自动请求这种锁。在LOCK TABLE命令没有明确声明需要的锁模式时，它是缺省锁模式。
      </span>
     </li>
    </ul>
    <h3 style="margin-left:0;text-align:justify;">
     <a name="_Toc146727294">
      <span style="color:#000000;">
       2
      </span>
     </a>
     <span style="color:#000000;">
      、示例一：ACCESS EXCLUSIVE 模式
     </span>
    </h3>
    <pre><code class="language-sql">--创建测试表
DROP TABLE IF EXISTS omm2.company;
CREATE TABLE omm2.company(
   id int4 PRIMARY key NOT NULL
  ,name varchar(10) NOT NULL
  ,age int4 NOT NULL
  ,address varchar(20) NOT NULL
  ,salary float4 NOT NULL
);

--初始化数据
INSERT INTO omm2.company VALUES (1, 'Paul', 32, 'California', 20000);
INSERT INTO omm2.company VALUES (2, 'Allen', 25, 'Texas', 15000);
INSERT INTO omm2.company VALUES (3, 'Teddy', 23, 'Norway', 20000);
INSERT INTO omm2.company VALUES (4, 'ZhangSan', 30, 'BeiJing', 30000);


--启动一个事务
START TRANSACTION;
LOCK TABLE omm2.company IN ACCESS EXCLUSIVE MODE;
DELETE FROM omm2.company WHERE name ='Allen';
COMMIT;</code></pre>
    <p style="margin-left:.0001pt;text-align:left;">
     <strong>
      <span style="color:#000000;">
       解析：
      </span>
     </strong>
    </p>
    <ul>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        “START TRANSACTION;”
       </span>
      </strong>
      <span style="color:#000000;">
       ：启动一个新的事务。在数据库中，事务是一组一起执行的SQL语句，要么全部成功，要么全部失败。这确保了数据的一致性。
      </span>
     </li>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        “LOCK TABLE omm2.company IN ACCESS EXCLUSIVE MODE;”
       </span>
      </strong>
      <span style="color:#000000;">
       ：对omm2.company表进行了
       <strong>
        排他性锁定
       </strong>
       。在此模式下，其他会话不能对表进行读写操作，直到这个事务结束。这样可以防止在删除操作过程中其他事务对表产生干扰。
      </span>
     </li>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        “DELETE FROM omm2.company WHERE name ='Allen'; ”
       </span>
      </strong>
      <span style="color:#000000;">
       ：从omm2.company表中删除了所有名为'Allen'的记录。
      </span>
     </li>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        “COMMIT;”
       </span>
      </strong>
      <span style="color:#000000;">
       ：这行代码提交了前面的事务。在事务中执行的任何更改（在本例中是删除操作）在提交后才会永久保存在数据库中。
      </span>
     </li>
    </ul>
    <p style="margin-left:.0001pt;text-align:left;">
     <span style="color:#000000;">
      总的来说，这段代码删除了名为'Allen'的所有记录，并确保这个操作在提交之前不会被其他事务干扰。
     </span>
    </p>
    <h3 style="margin-left:0;text-align:justify;">
     <a name="_Toc146727295">
      <span style="color:#000000;">
       3
      </span>
     </a>
     <span style="color:#000000;">
      、示例二：SHARE ROW EXCLUSIVE 模式
     </span>
    </h3>
    <pre><code class="language-sql">--复用示例一的测试表
CREATE TABLE omm2.company1 AS TABLE omm2.company;

--启动一个事务
START TRANSACTION;
LOCK TABLE omm2.company1 IN SHARE ROW EXCLUSIVE MODE;
DELETE FROM omm2.company1 WHERE name ='Allen';
COMMIT;</code></pre>
    <p style="margin-left:.0001pt;text-align:left;">
     <strong>
      <span style="color:#000000;">
       解析：
      </span>
     </strong>
    </p>
    <ul>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        “CREATE TABLE omm2.company1 AS TABLE omm2.company;”：
       </span>
      </strong>
      <span style="color:#000000;">
       创建了一个新的表omm2.company1，其结构复制自已有的表omm2.company。这种操作通常用于创建表的副本，或者为某个操作创建一个临时的、与原表结构相同的新表。
      </span>
     </li>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        “START TRANSACTION; ”：
       </span>
      </strong>
      <span style="color:#000000;">
       启动一个新的事务。在数据库中，事务是一组一起执行的SQL语句，要么全部成功，要么全部失败，这可以确保数据的一致性。
      </span>
     </li>
     <li style="text-align:left;">
      <span style="color:#000000;">
       “LOCK TABLE omm2.company1 IN SHARE ROW EXCLUSIVE MODE; ”：对表omm2.company1进行了排他性锁定。在这种模式下，其他会话不能对表进行读写操作，直到这个事务结束，这样可以防止在删除操作过程中其他事务对表产生干扰。
      </span>
     </li>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        “DELETE FROM omm2.company1 WHERE name ='Allen';”
       </span>
      </strong>
      <span style="color:#000000;">
       ：从表omm1.company1中删除了所有名为'Allen'的记录。
      </span>
     </li>
     <li style="text-align:left;">
      <strong>
       <span style="color:#000000;">
        “COMMIT;”:
       </span>
      </strong>
      <span style="color:#000000;">
       提交前面的事务。在事务中执行的任何更改（在本例中是删除操作）在提交后才会永久保存在数据库中。
      </span>
     </li>
    </ul>
    <h2 style="margin-left:0;text-align:justify;">
     <a name="_Toc146727296">
      <span style="color:#000000;">
       三、小结
      </span>
     </a>
    </h2>
    <p style="margin-left:.0001pt;text-align:left;">
     <span style="color:#000000;">
      GaussDB
     </span>
     <span style="color:#000000;">
      数据库的锁机制是其重要的组成部分，用于支持并发控制和事务隔离。GaussDB实现了不同级别的事务隔离和并发控制，满足了不同场景下的需求。当然了，使用GaussDB数据库时也需要注意一些问题，如锁的管理和数据库的规划等。合理的锁管理和数据库规划能够提高系统的性能和可用性，反之则可能导致数据一致性问题或者系统故障。
     </span>
    </p>
    <p style="margin-left:.0001pt;text-align:left;">
    </p>
    <p style="margin-left:.0001pt;text-align:left;">
     <strong>
      <span style="color:#000000;">
       ——结束
      </span>
     </strong>
    </p>
   </div>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">6874747073:3a2f2f626c6f672e6373646e2e6e65742f476175737344422f:61727469636c652f64657461696c732f313333383033393233

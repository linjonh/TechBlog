---
layout: post
title: 2024-12-27-openGauss开源数据库实战十
date: 2024-12-27 20:23:30 +0800
categories: [数据库实战]
tags: [数据库,centos,gaussdb]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=143243320
  alt: openGauss开源数据库实战十
artid: 143243320
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     openGauss开源数据库实战十
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
    </p>
    <div class="toc">
     <h4>
      文章目录
     </h4>
     <ul>
      <li>
       <a href="#_openGauss_1" rel="nofollow">
        任务十 openGauss逻辑结构:数据库管理
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#_2" rel="nofollow">
          任务目标
         </a>
        </li>
        <li>
         <a href="#_6" rel="nofollow">
          实施步骤
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#openGauss_7" rel="nofollow">
            一、登录到openGauss
           </a>
          </li>
          <li>
           <a href="#_14" rel="nofollow">
            二、创建数据库
           </a>
          </li>
          <li>
           <a href="#_22" rel="nofollow">
            三、查看数据库集群中有哪些数据库
           </a>
          </li>
          <li>
           <a href="#_36" rel="nofollow">
            四、查看数据库默认表空间的信息
           </a>
          </li>
          <li>
           <a href="#_66" rel="nofollow">
            五、查看数据库下有哪些模式
           </a>
          </li>
          <li>
           <a href="#_80" rel="nofollow">
            六、查看数据库下有哪些表
           </a>
          </li>
          <li>
           <a href="#_93" rel="nofollow">
            七、修改数据库的默认表空间
           </a>
          </li>
          <li>
           <a href="#_144" rel="nofollow">
            八、重命名数据库
           </a>
          </li>
          <li>
           <a href="#_166" rel="nofollow">
            九、删除数据库
           </a>
          </li>
          <li>
           <a href="#_180" rel="nofollow">
            十、修改数据库的默认用户
           </a>
          </li>
          <li>
           <a href="#_216" rel="nofollow">
            十一、任务的扫尾工作
           </a>
          </li>
         </ul>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h2>
     <a id="_openGauss_1">
     </a>
     任务十 openGauss逻辑结构:数据库管理
    </h2>
    <h3>
     <a id="_2">
     </a>
     任务目标
    </h3>
    <p>
     数据库是数据库对象的容器,在数据库中可以创建模式、表、索引等数据库对象。openGauss数据库管理包括创建数据库、删除数据库、重命名数据库、查看数据库的信息。
    </p>
    <h3>
     <a id="_6">
     </a>
     实施步骤
    </h3>
    <h4>
     <a id="openGauss_7">
     </a>
     一、登录到openGauss
    </h4>
    <p>
     使用用户omm打开一个Linux终端窗口,执行如下的命令:
    </p>
    <pre><code class="prism language-bash">gsql -d postgres -p <span class="token number">26000</span> -r
</code></pre>
    <h4>
     <a id="_14">
     </a>
     二、创建数据库
    </h4>
    <p>
     执行下面的SOL语句,创建表空间ustb_ts和数据库ustbdb:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLESPACE</span> ustb_ts RELATIVE LOCATION <span class="token string">'tablespace/ustb_ts1'</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> ustbdb <span class="token keyword">WITH</span> <span class="token keyword">TABLESPACE</span> <span class="token operator">=</span> ustb_ts<span class="token punctuation">;</span>
</code></pre>
    <h4>
     <a id="_22">
     </a>
     三、查看数据库集群中有哪些数据库
    </h4>
    <p>
     执行下面的gsql命令,查看当前系统上有哪些数据库:
    </p>
    <pre><code class="prism language-sql">\l
</code></pre>
    <p>
     执行下面的SQL语句,查看当前系统上有哪些数据库:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">SELECT</span> datname <span class="token keyword">FROM</span> pg_database<span class="token punctuation">;</span>
\q
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/0b881b3122104beaad02c4049973657c.png#pic_center" width="720"/>
    </p>
    <h4>
     <a id="_36">
     </a>
     四、查看数据库默认表空间的信息
    </h4>
    <p>
     使用用户omm打开一个Linux终端窗口,执行如下的命令登录openGauss数据库:
    </p>
    <pre><code class="prism language-bash">gsql -d studentdb -h <span class="token number">192.168</span>.100.91 -U student -p <span class="token number">26000</span> -W student@ustb2020 -r
</code></pre>
    <p>
     可以分两步来查看数据库studentdb默认表空间的信息。首先执行下面的语句,查看数据库
     <br/>
     studentdb默认表空间的OID:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">select</span> datname<span class="token punctuation">,</span>dattablespace <span class="token keyword">from</span> pg_database <span class="token keyword">where</span> datname<span class="token operator">=</span><span class="token string">'studentdb'</span><span class="token punctuation">;</span>
</code></pre>
    <p>
     注意:读者在做实验的时候,显示的OID可能会不同于这里的值16389。然后使用刚刚获得的表空间的OID,来查看表空间的名字:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">select</span> oid<span class="token punctuation">,</span>spcname <span class="token keyword">from</span> pg_tablespace <span class="token keyword">where</span> oid<span class="token operator">=</span><span class="token number">163889</span><span class="token punctuation">;</span>
</code></pre>
    <p>
     可以将上面的两条语句合并成一条语句,来查询数据库studentdb的默认表空间的名字:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">select</span> spcname 
<span class="token keyword">from</span> pg_tablespace 
<span class="token keyword">where</span> oid<span class="token operator">=</span><span class="token punctuation">(</span> <span class="token keyword">select</span> dattablespace
           <span class="token keyword">from</span> pg_database
           <span class="token keyword">where</span> datname<span class="token operator">=</span><span class="token string">'studentdb'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/d32d54c685394066a011c27ad8d58c2b.png#pic_center" width="720"/>
    </p>
    <h4>
     <a id="_66">
     </a>
     五、查看数据库下有哪些模式
    </h4>
    <p>
     执行下面的SQL语句,查看当前数据库下有哪些模式:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">SELECT</span> catalog_name<span class="token punctuation">,</span> schema_name<span class="token punctuation">,</span> schema_owner
<span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>schemata<span class="token punctuation">;</span>
</code></pre>
    <p>
     也可以执行下面的gsql命令,查看当前数据库下有哪些模式:
    </p>
    <pre><code class="prism language-sql">\dn<span class="token operator">+</span>
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/7af2bb4a1e1a479ca73eb7c5aa29fc9e.png#pic_center" width="720"/>
    </p>
    <h4>
     <a id="_80">
     </a>
     六、查看数据库下有哪些表
    </h4>
    <p>
     执行下面的SQL语句,可以查询当前连接的数据库下有哪些表:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">with</span> my_tables<span class="token punctuation">(</span>table_catalog<span class="token punctuation">,</span> table_schema<span class="token punctuation">,</span> table_name<span class="token punctuation">,</span> table_type<span class="token punctuation">)</span> <span class="token keyword">as</span>
    <span class="token punctuation">(</span>   <span class="token keyword">select</span> table_catalog<span class="token punctuation">,</span> table_schema<span class="token punctuation">,</span> table_name<span class="token punctuation">,</span> table_type
        <span class="token keyword">from</span> information_schema<span class="token punctuation">.</span><span class="token keyword">tables</span>
        <span class="token keyword">where</span> table_schema <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">'pg_catalog'</span><span class="token punctuation">,</span> <span class="token string">'information_schema'</span><span class="token punctuation">,</span><span class="token string">'dbe_perf'</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> my_tables<span class="token punctuation">;</span>
</code></pre>
    <p>
     为了完成下一个实验,请保持这个窗口不退出。
    </p>
    <h4>
     <a id="_93">
     </a>
     七、修改数据库的默认表空间
    </h4>
    <p>
     如果数据库被一个用户打开,就无法更改数据库的默认表空间。
     <br/>
     下面用实验证明这一点。先保持用户student连接到数据库studentdb(不要关闭刚才执行
     <br/>
     SQL语句的Linux终端窗口。)
     <br/>
     使用用户omm打开另外一个Linux终端窗口(我们将该窗口命名为working窗口),执行下
     <br/>
     面的语句,先创建表空间app_ts:
    </p>
    <pre><code class="prism language-bash">gsql -d postgres -p <span class="token number">26000</span> -r
</code></pre>
    <pre><code class="prism language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLESPACE</span> app_ts  RELATIVE LOCATION <span class="token string">'tablespace/app_ts1'</span><span class="token punctuation">;</span>
</code></pre>
    <p>
     然后在working窗口下,执行下面的语句,修改数据库studentdb的默认表空间为app_ts:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> studentdb <span class="token keyword">SET</span> <span class="token keyword">TABLESPACE</span> app_ts<span class="token punctuation">;</span>
</code></pre>
    <p>
     输出显示,更改数据库studentdb的默认表空间为app_ts的语句没有执行成功。可见,必须关
     <br/>
     闭所有用户对数据库studentdb的连接,才能完成修改数据库studentdb的默认表空间的任务。
     <br/>
     执行下面的gsql元命令,关闭对数据库studentdb的所有会话连接(至少得关闭刚才保留的会
     <br/>
     话):
    </p>
    <pre><code class="prism language-sql">\q
</code></pre>
    <p>
     在working窗口,重新执行上面的命令:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> studentdb <span class="token keyword">SET</span> <span class="token keyword">TABLESPACE</span> app_ts<span class="token punctuation">;</span>
</code></pre>
    <p>
     再次执行下面的SQL语句,查询数据库studentdb的默认表空间:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">select</span> spcname 
<span class="token keyword">from</span> pg_tablespace 
<span class="token keyword">where</span> oid<span class="token operator">=</span><span class="token punctuation">(</span> <span class="token keyword">select</span> dattablespace
           <span class="token keyword">from</span> pg_database
           <span class="token keyword">where</span> datname<span class="token operator">=</span><span class="token string">'studentdb'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <p>
     可以看到,目前数据库studentdb的默认表空间是app_ts了。
     <br/>
     执行下面的SQL语句,重新把数据库studentdb的默认表空间设置为表空间student ts,并退
     <br/>
     出gsql:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> studentdb <span class="token keyword">SET</span> <span class="token keyword">TABLESPACE</span> student_ts<span class="token punctuation">;</span>
<span class="token keyword">drop</span> <span class="token keyword">tablespace</span> app_ts<span class="token punctuation">;</span>
\q
</code></pre>
    <h4>
     <a id="_144">
     </a>
     八、重命名数据库
    </h4>
    <p>
     使用Linux用户omm,执行下面的命令和SOL语句,查看当前openGauss上有哪些数据库:
    </p>
    <pre><code class="prism language-bash">gsql -d postgres -p <span class="token number">26000</span> -r
</code></pre>
    <pre><code class="prism language-sql">\l
</code></pre>
    <p>
     执行下面的SOL语句,将数据库ustbdb更名为beikedadb:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> ustbdb <span class="token keyword">RENAME</span> <span class="token keyword">TO</span>  beikedadb<span class="token punctuation">;</span>
</code></pre>
    <p>
     执行下面的gsql元命令,查看当前系统上有哪些数据库:
    </p>
    <pre><code class="prism language-sql">\l
</code></pre>
    <p>
     可以看到,已经把数据库ustbdb更名为beikedadb了。
    </p>
    <h4>
     <a id="_166">
     </a>
     九、删除数据库
    </h4>
    <p>
     执行下面的命令,删除数据库beikedadb:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> beikedadb<span class="token punctuation">;</span>
</code></pre>
    <p>
     为了继续下面的测试,重新创建数据库ustbdb:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> ustbdb <span class="token keyword">WITH</span> <span class="token keyword">TABLESPACE</span> <span class="token operator">=</span> ustb_ts<span class="token punctuation">;</span>
\q
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/2f50b8b8e72b4a88bc27e27088363832.png#pic_center" width="720"/>
    </p>
    <h4>
     <a id="_180">
     </a>
     十、修改数据库的默认用户
    </h4>
    <p>
     使用用户omm打开一个Linux终端窗口,执行下面的命令,登录到openGaussDBMS:
    </p>
    <pre><code class="prism language-bash">gsql -d postgres -p <span class="token number">26000</span> -r
</code></pre>
    <p>
     执行下面的SQL语句，创建数据库用户temp_user，并授予用户temp_user SYSADMIN权限:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> temp_user  IDENTIFIED <span class="token keyword">BY</span> <span class="token string">'temp_user@ustb2020'</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">USER</span> temp_user  SYSADMIN<span class="token punctuation">;</span>
</code></pre>
    <p>
     执行下面的gsql元命令,查看数据库的属主用户是谁:
    </p>
    <pre><code class="prism language-sql">\l
</code></pre>
    <p>
     从输出可以看出,数据库ustbdb的拥有者是用户omm。
     <br/>
     执行下面的SQL语句,将数据库ustbdb的拥有者变更为数据库用户temp_user:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> ustbdb OWNER <span class="token keyword">to</span> temp_user<span class="token punctuation">;</span>
</code></pre>
    <p>
     再次执行下面的gsql元命令,查看数据库的属主情况:
    </p>
    <pre><code class="prism language-sql">\l
</code></pre>
    <p>
     从输出可以看到,数据库ustbdb的属主用户已经变更为用户temp_user了。执行下面的SQL语句,
     <br/>
     重新将数据库ustbdb的属主更改为用户omm:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> ustbdb OWNER <span class="token keyword">to</span> omm<span class="token punctuation">;</span>
\l
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/42ac2f69ab144a60a6dbf006a62f38ee.png#pic_center" width="720"/>
    </p>
    <h4>
     <a id="_216">
     </a>
     十一、任务的扫尾工作
    </h4>
    <p>
     继续后面的任务之前,执行下面的SOL语句,删除用户temp_user、数据库ustbdb、表空间ustb_ts,
     <br/>
     并退出gsql:
    </p>
    <pre><code class="prism language-sql"><span class="token keyword">drop</span> <span class="token keyword">user</span> temp_user<span class="token punctuation">;</span>
<span class="token keyword">drop</span> <span class="token keyword">database</span> ustbdb<span class="token punctuation">;</span>
<span class="token keyword">drop</span> <span class="token keyword">tablespace</span> ustb_ts<span class="token punctuation">;</span>
\q
</code></pre>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f37333332313434332f:61727469636c652f64657461696c732f313433323433333230

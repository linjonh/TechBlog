---
layout: post
title: Mongodb入门-头歌实验MongoDB-数据库基本操作
date: 2024-12-12 15:18:34 +0800
categories: [mongodb]
tags: [数据库]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=137600790
    alt: Mongodb入门-头歌实验MongoDB-数据库基本操作
artid: 137600790
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Mongodb入门--头歌实验MongoDB 数据库基本操作
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h2>
     一、数据库创建
    </h2>
    <blockquote>
     <h5 id="任务描述">
      任务描述
     </h5>
     <p>
      本关任务：创建数据库。
     </p>
     <h5 id="相关知识">
      相关知识
     </h5>
     <p>
      本关评测是在 Linux 环境下进行的，MongoDB 的安装与配置测评系统均已默认完成。
     </p>
     <p>
      为了完成本关任务，你需要掌握： 1.如何连接数据库； 2.如何创建数据库。
     </p>
     <h6 id="连接数据库">
      连接数据库
     </h6>
     <p>
      MongoDB 安装完成后，可以通过 pgrep mongo -l 命令来查看是否已经启动。如图1所示：
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图1" height="39" src="https://i-blog.csdnimg.cn/blog_migrate/5da671e0bba9c11a8669b0975537c458.jpeg" width="364"/>
     </p>
     <p>
      <br/>
      图 1
     </p>
     <p>
     </p>
     <p>
      在操作数据库之前，需要连接它，连接本地数据库服务器，输入命令：mongo，预期输出如图2和图3所示：
     </p>
     <p>
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图2" height="396" src="https://i-blog.csdnimg.cn/blog_migrate/e19abd00a6fc22fe62d6922985c70170.jpeg" width="817"/>
     </p>
     <p>
      <br/>
      图 2
     </p>
     <p class="img-center">
      <img alt="图3" height="411" src="https://i-blog.csdnimg.cn/blog_migrate/6575b3ee22f652ffe8f91f4e3f7389aa.jpeg" width="818"/>
     </p>
     <p>
      <br/>
      图 3
     </p>
     <pre><code class="language-bash">mongo -u mongo -p 13 --authenticationDatabase admin</code></pre>
     <p>
      其中连接的警告可以不用管，只要最下方出现“ &gt; ”符号，就说明连接成功。
     </p>
     <h6 id="创建数据库">
      创建数据库
     </h6>
     <p>
      连接上 MongoDB 之后就可以进行数据库的操作了，接下来我们创建一个名为 Testdb 的数据库，用命令：use Testdb 语句来创建（如果数据库不存在，则创建数据库，否则切换到指定数据库），如图4所示：
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图4" height="105" src="https://i-blog.csdnimg.cn/blog_migrate/0a7de8b1b6b67d54230deaa7f0df7d0a.jpeg" width="235"/>
     </p>
     <p>
      <br/>
      图 4
     </p>
     <p>
     </p>
     <p>
      查看所有数据库我们可以通过 show dbs 命令来查看，如图5所示：
     </p>
     <p>
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图5" height="132" src="https://i-blog.csdnimg.cn/blog_migrate/7af8d2ec8b754b77fad1de7656ec1b23.jpeg" width="208"/>
     </p>
     <p>
      <br/>
      图 5
     </p>
     <p>
     </p>
     <p>
      然而并没有我们刚创建的 Testdb 数据库。要想显示它，我们需要向数据库插入一些数据：db.Testdb.insert({_id:1,name:"王小明"})，如图6所示
     </p>
     <p>
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图6" height="151" src="https://i-blog.csdnimg.cn/blog_migrate/ccbe0bbcc129bd2bf43cc85e99325014.jpeg" width="406"/>
     </p>
     <p>
      <br/>
      图 6
     </p>
     <p>
      现在，就可以看到我们创建的数据库 Testdb 了。
     </p>
     <h6 id="删除数据库">
      删除数据库
     </h6>
     <p>
      MongoDB 删除数据库需要先切换到该数据库中：
     </p>
     <pre><code class="language-bash">use Testdb</code></pre>
     <p>
      然后再执行删除命令：
     </p>
     <pre><code class="language-bash">db.dropDatabase()</code></pre>
     <p>
     </p>
    </blockquote>
    <pre><code class="language-bash">&gt; use mydb
switched to db mydb
&gt; db.mydb.insert({_id:1,name:"李小红"})
WriteResult({ "nInserted" : 1 })</code></pre>
    <h2>
     二、创建集合
    </h2>
    <blockquote>
     <h5>
      任务描述
     </h5>
     <p>
      本关任务：在数据库中创建一个集合。
     </p>
     <h5>
      相关知识
     </h5>
     <p>
      MongoDB 数据库中的集合相当于 MySQL 数据库中的表。
     </p>
     <p>
      为了完成本关任务，你需要掌握： 1.如何在指定的数据库创建集合； 2.查看集合； 3.删除集合。
     </p>
     <h6 id="在指定的数据库创建集合">
      在指定的数据库创建集合
     </h6>
     <p>
      先进入指定数据库 Testdb :
      <code>
       use Testdb
      </code>
      ； 在 Testdb 数据库中创建创建固定集合 test ，整个集合空间大小512000KB，文档最大个数为1000个。
     </p>
     <pre><code class="language-bash">db.createCollection("test", { capped : true, autoIndexId : true, size : 512000, max : 1000 } )</code></pre>
     <ul>
      <li>
       <p>
        capped ：是一个布尔类型，true 时创建固定集合，必须指定 size。固定集合指有固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。默认为 false；
       </p>
      </li>
      <li>
       <p>
        autoIndexId ：也是一个布尔类型，如为 true，自动在
        <code>
         _id
        </code>
        字段创建索引。默认为 false
       </p>
      </li>
      <li>
       <p>
        size ：为固定集合指定一个最大值（以字节 KB 计）；
       </p>
      </li>
      <li>
       <p>
        max ：指定固定集合中包含文档的最大数量。
       </p>
      </li>
     </ul>
     <p>
      不过，和 MySQL 不同的是，在 MongoDB 中，你不一定需要先创建集合。当你插入一些文档时，MongoDB 会自动创建集合。
     </p>
     <p>
      <strong>
       创建集合命令（推荐）
      </strong>
      ：
      <code>
       db.集合名.insert()
      </code>
      （注意：一条数据用大括号“ {} ”括起来，多条数据用“ [] ”将所有数据括起来）。
     </p>
     <pre><code class="language-bash">db.mytest2.insert([{"name" : "王小明","sex":"男"},{"name" : "李小红","sex":"女"}])</code></pre>
     <h6>
      默认 id
     </h6>
     <p>
      MongoDB 中存储的文档
      <strong>
       必须
      </strong>
      有一个
      <code>
       _id
      </code>
      键（如果我们插入数据的时候未指定
      <code>
       _id
      </code>
      ，系统会自动生成一个默认的 id ）。这个键的值可以是任何类型的，默认是个 ObjectId 对象。在一个集合里面，每个文档都有唯一的
      <code>
       _id
      </code>
      值，来确保集合里面每个文档都能被唯一标识。如果有两个集合的话，两个集合可以都有一个值为123的
      <code>
       _id
      </code>
      键，但是每个集合里面只能有一个
      <code>
       _id
      </code>
      是123的文档
     </p>
     <h6 id="查询集合">
      查询集合
     </h6>
     <p>
      <strong>
       查询集合命令
      </strong>
      ：
      <code>
       db.集合名.find()
      </code>
      。由此我们也能看到 MongoDB 默认创建的
      <code>
       _id
      </code>
      ，如图1所示；
     </p>
     <p class="img-center">
      <img alt="图1" height="362" src="https://i-blog.csdnimg.cn/blog_migrate/46f320e9fca851e11ea3b1334e27141a.jpeg" width="818"/>
     </p>
     <p>
      <br/>
      图 1
     </p>
     <h6 id="删除集合">
      删除集合
     </h6>
     <p>
      <strong>
       删除集合命令
      </strong>
      ：
      <code>
       db.集合名.drop()
      </code>
      ，如图2所示；
     </p>
     <p>
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图2" height="34" src="https://i-blog.csdnimg.cn/blog_migrate/8c13f21226d9e76c165b43d50772ea6d.jpeg" width="202"/>
     </p>
     <p>
      <br/>
      图 2
     </p>
     <p>
     </p>
    </blockquote>
    <pre><code class="language-bash">mongo                #进入MongoDB
&gt; use Testdb2
switched to db Testdb2
&gt; db.t_stu.insert([{"_id" : 1,"name" : "小明","sex" : "男","hobbies" : ["乒乓球","羽毛球"]},{"_id" : 2,"name" : "小红","sex" : "女","hobbies" : [ "画画","唱歌"]}])
BulkWriteResult({
        "writeErrors" : [
                {
                        "index" : 0,
                        "code" : 11000,
                        "errmsg" : "E11000 duplicate key error collection: Testdb2.t_stu index: _id_ dup key: { : 1.0 }",
                        "op" : {
                                "_id" : 1,
                                "name" : "小明",
                                "sex" : "男",
                                "hobbies" : [
                                        "乒乓球",
                                        "羽毛球"
                                ]
                        }
                }
        ],
        "writeConcernErrors" : [ ],
        "nInserted" : 0,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
&gt; db.t_stu.find()
{ "_id" : 1, "name" : "小明", "sex" : "男", "hobbies" : [ "乒乓球", "羽毛球" ] }
{ "_id" : 2, "name" : "小红", "sex" : "女", "hobbies" : [ "画画", "唱歌" ] }</code></pre>
    <h2>
     三、文档操作一
    </h2>
    <blockquote>
     <h5>
      任务描述
     </h5>
     <p>
      本关任务：文档数据在 MongoDB 中的插入和更新。
     </p>
     <h5>
      相关知识
     </h5>
     <p>
      本章节中我们将向大家介绍文档数据在 MongoDB 中的基本操作。
     </p>
     <p>
      文档的数据结构和 JSON 基本一样，所有存储在集合中的数据都是 BSON 格式。BSON 是一种类 JSON 的一种二进制形式的存储格式，简称： Binary JSON 。
     </p>
     <p>
      为了完成本关任务，你需要掌握： 1.插入文档命令； 2.更新文档的两种方法。
     </p>
     <h6 id="插入文档">
      插入文档
     </h6>
     <p>
      <strong>
       插入文档命令
      </strong>
      ：
      <code>
       db.集合名.insert(文档)
      </code>
      。 该命令前面两关我们也有用到。除了前两关的用法以外，我们还可以将数据定义为一个变量，如下所示：
     </p>
     <pre><code class="language-bash">document=({_id:1,
    name: '王小明',
    sex: '男',
    hobbies: ['乒乓球','羽毛球'],
    birthday: '1996-02-14'
});</code></pre>
     <p>
      然后执行插入操作：
     </p>
     <pre><code class="language-bash">db.person.insert(document)</code></pre>
     <p>
      person 是集合名，如果该集合不在该数据库中，MongoDB 会自动创建该集合并插入文档，查看 person 集合，如图1所示：
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图1" height="402" src="https://i-blog.csdnimg.cn/blog_migrate/6be6fccd1c4547d5d9f193456911dbca.jpeg" width="786"/>
     </p>
     <p>
      <br/>
      图 1
     </p>
     <h6 id="更新文档">
      更新文档
     </h6>
     <p>
      更新文档主要会用到 update() 方法和 save() 方法。
     </p>
     <h6>
      update() 方法
     </h6>
     <p>
      我们先把 document 插入到集合 person2；
     </p>
     <pre><code class="language-bash">db.person2.insert(document)</code></pre>
     <p>
      由于信息有误，上面 birthday 的格式错了，该怎么去修改这个字段的值呢？这时就要用到 update() 方法了。
     </p>
     <p>
      用 update() 方法来更新 person2 的数据，把王小明的出生日期替换成1996，命令如下：
     </p>
     <pre><code class="language-bash">db.person2.update({birthday:"1996-02-14"},{$set:{birthday:"1996"}})</code></pre>
     <p>
      更新后如图2所示（ pretty() 方法的作用是使文档整齐的输出）：
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图2" height="257" src="https://i-blog.csdnimg.cn/blog_migrate/7b7dd048f265183d69b0cb7f22d0b1aa.png" width="684"/>
     </p>
     <p>
      <br/>
      图 2
     </p>
     <p>
      可以发现：
     </p>
     <ul>
      <li>
       update() 有两个参数，都是对象，中间用逗号“ ，”间隔；
      </li>
      <li>
       第一个参数表示需要修改的值；
      </li>
      <li>
       第二个参数用 $set 操作符指向更新后的值。
      </li>
     </ul>
     <h6>
      save() 方法
     </h6>
     <p>
      save() 方法通过传入的
      <strong>
       文档
      </strong>
      来
      <strong>
       替换
      </strong>
      已有
      <strong>
       文档
      </strong>
      。
     </p>
     <p>
      我们先把 document 插入到集合 person3 中；
     </p>
     <pre><code class="language-bash">db.person3.insert(document)</code></pre>
     <p>
      如果这时我们把一个人的数据都弄错了，怎么办呢？这时用 save() 方法来更新修改一下 person3 的数据就比较方便。
     </p>
     <p>
      用 save() 方法把王小明的数据修改为李小红的数据：
     </p>
     <p>
     </p>
     <pre><code class="language-bash">db.person3.save({
    "_id" :1,
    "name" : "李小红",
    "sex" : "女",
    "hobbies" : [
            "画画",
            "唱歌",
            "跳舞"
    ],
    "birthday" : "1996-06-14"
})</code></pre>
     <p>
      注：如果 save() 法也
      <strong>
       指定
      </strong>
      了
      <code>
       _id
      </code>
      ，则对文档进行
      <strong>
       更新
      </strong>
      ；
      <strong>
       未指定
      </strong>
      <code>
       _id
      </code>
      则会执行
      <strong>
       插入
      </strong>
      功能，MongoDB 默认自动生成一个不重复的
      <code>
       _id
      </code>
      。
     </p>
     <p>
     </p>
     <p>
      总结：
     </p>
     <ul>
      <li>
       <p>
        update() 方法仅适用于修改某条数据中的某个键值；
       </p>
      </li>
      <li>
       <p>
        save() 方法适用于修改整条数据。
       </p>
      </li>
     </ul>
    </blockquote>
    <pre><code class="language-bash">&gt; use Testdb3
switched to db Testdb3
&gt; document=({"_id" : 1,"name" : "张小华","sex" : "男","phone" : '12356986594',"hobbies" : [ "打篮球","踢足球","唱歌" ]})
{
        "_id" : 1,
        "name" : "张小华",
        "sex" : "男",
        "phone" : "12356986594",
        "hobbies" : [
                "打篮球",
                "踢足球",
                "唱歌"
        ]
}
&gt; db.stu1.insert(document)
WriteResult({ "nInserted" : 1 })
&gt; db.stu2.insert(document)
WriteResult({ "nInserted" : 1 })
&gt; db.stu3.insert(document)
WriteResult({ "nInserted" : 1 })
&gt; db.stu2.update({"phone" : '12356986594'},{$set:{"phone" : '18356971462'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
&gt; db.stu3.save({"_id" : 1,"name" : "张晓晓","sex" : "女","phone" : '12365498704',"hobbies" : [ "跳舞","羽毛球","唱歌" ]})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })</code></pre>
    <h2>
     四、 文档操作二
    </h2>
    <blockquote>
     <h5>
      任务描述
     </h5>
     <p>
      本关任务：文档数据在 MongoDB 中的查询和删除。
     </p>
     <h5>
      相关知识
     </h5>
     <p>
      为了完成本关任务，你需要掌握：
     </p>
     <ol>
      <li>
       查询文档命令；
      </li>
      <li>
       删除文档命令。
      </li>
     </ol>
     <h6 id="查询文档">
      查询文档
     </h6>
     <p>
      我们先插入文档到集合 stu1
     </p>
     <pre><code class="language-bash">document=([{
    name:'张小华',
    sex:'男',
    age:20,
    phone:'12356986594',
    hobbies:['打篮球','踢足球','唱歌']
},{
    name:'李小红',
    sex:'女',
    age:18,
    phone:'12355487536',
    hobbies:['跳舞','唱歌']
}])</code></pre>
     <pre><code class="language-bash">db.stu1.insert(document)</code></pre>
     <p>
     </p>
     <p>
      然后查看 stu1 ，命令和结果如图1所示（因为我们没有设置
      <code>
       _id
      </code>
      ，所以 MongoDB 会默认生成）：
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图1" height="115" src="https://i-blog.csdnimg.cn/blog_migrate/da8c5271398b86ff22dc199ffcd1236b.jpeg" width="782"/>
     </p>
     <p>
      <br/>
      图 1
     </p>
     <p>
      上述显示的文档格式不够整齐，我们可以使用 pretty() 方法，使输出更整齐，如图2所示：
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图2" height="453" src="https://i-blog.csdnimg.cn/blog_migrate/efa6f89bbaad10ace9212d1713b513d5.png" width="566"/>
     </p>
     <p>
      <br/>
      图 2
     </p>
     <h6>
      条件查询
     </h6>
     <div class="table-box">
      <table>
       <thead>
        <tr>
         <th>
          操作
         </th>
         <th>
          格式
         </th>
         <th>
          范例
         </th>
         <th>
          关系数据库中类似的语句
         </th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td>
          等于
         </td>
         <td>
          <code>
           {&lt;key&gt;:&lt;value&gt;}
          </code>
         </td>
         <td>
          db.stu1.find({"name":"李小红"}).pretty()
         </td>
         <td>
          where name = '李小红'
         </td>
        </tr>
        <tr>
         <td>
          小于
         </td>
         <td>
          <code>
           {&lt;key&gt;:{$lt:&lt;value&gt;}}
          </code>
         </td>
         <td>
          db.stu1.find({"age":{$lt:18}}).pretty()
         </td>
         <td>
          where age &lt; 18
         </td>
        </tr>
        <tr>
         <td>
          小于或等于
         </td>
         <td>
          <code>
           {&lt;key&gt;:{$lte:&lt;value&gt;}}
          </code>
         </td>
         <td>
          db.stu1.find({"age":{$lte:18}}).pretty()
         </td>
         <td>
          where age &lt;= 18
         </td>
        </tr>
        <tr>
         <td>
          大于
         </td>
         <td>
          <code>
           {&lt;key&gt;:{$gt:&lt;value&gt;}}
          </code>
         </td>
         <td>
          db.stu1.find({"age":{$gt:18}}).pretty()
         </td>
         <td>
          where age &gt; 18
         </td>
        </tr>
        <tr>
         <td>
          大于或等于
         </td>
         <td>
          <code>
           {&lt;key&gt;:{$gte:&lt;value&gt;}}
          </code>
         </td>
         <td>
          db.stu1.find({"age":{$gte:18}}).pretty()
         </td>
         <td>
          where age &gt;= 18
         </td>
        </tr>
        <tr>
         <td>
          不等于
         </td>
         <td>
          <code>
           {&lt;key&gt;:{$ne:&lt;value&gt;}}
          </code>
         </td>
         <td>
          db.stu1.find({"age":{$ne:18}}).pretty()
         </td>
         <td>
          where age != 18
         </td>
        </tr>
       </tbody>
      </table>
     </div>
     <p>
      现在我们来查找一下 age 大于18岁的数据，命令和效果如图3所示：
     </p>
     <p>
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图3" height="260" src="https://i-blog.csdnimg.cn/blog_migrate/98932c0f3c68e896046961c560a78e27.jpeg" width="528"/>
     </p>
     <p>
      <br/>
      图 3
     </p>
     <p>
     </p>
     <h6>
      AND 条件
     </h6>
     <p>
      find() 方法可以传入多个键 (key)，每个键 (key) 以逗号隔开，即常规 SQL 的 AND 条件。如查询集合 stu1 中年龄为20岁的男性信息：
     </p>
     <pre><code class="language-bash">db.stu1.find({"age":20, "sex":"男"}).pretty()</code></pre>
     <p>
      查询结果如图4所示：
     </p>
     <p>
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图4" height="260" src="https://i-blog.csdnimg.cn/blog_migrate/3de52c1dfddf7cf8af6eb81d22e8ffa2.jpeg" width="530"/>
     </p>
     <p>
      <br/>
      图 4
     </p>
     <h6 id="删除文档数据">
      删除文档数据
     </h6>
     <p>
      删除指定的数据：
     </p>
     <pre><code class="language-bash">db.stu1.remove({'age':20}) //删除年龄为20的数据</code></pre>
     <p>
      查看该集合的内容，如果只剩下如图5所示的信息，说明数据删除成功：
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图5" height="272" src="https://i-blog.csdnimg.cn/blog_migrate/c8e3233169a949bfd83d2e30976836e3.jpeg" width="528"/>
     </p>
     <p>
      <br/>
      图 5
     </p>
     <h6>
      删除全部数据（集合并不会删除）：
     </h6>
     <pre><code class="language-bash">db.remove({})</code></pre>
     <p>
      查看该集合的内容，如果如图6所示，无显示或者显示为空，说明数据全部删除：
     </p>
     <p>
     </p>
     <p>
     </p>
     <p class="img-center">
      <img alt="图6" height="80" src="https://i-blog.csdnimg.cn/blog_migrate/f4fd017ecc25712a914002e5eab8df6e.jpeg" width="313"/>
     </p>
     <p>
     </p>
    </blockquote>
    <pre><code class="language-bash">#########begin#########
echo "

document=([
    {_id:1,name:'西西',sex:'女',age:23,national:'汉族'},
    {_id:2,name:'东东',sex:'男',age:20,national:'苗族'},
    {_id:3,name:'北北',sex:'男',age:19,national:'汉族'},
    {_id:4,name:'南南',sex:'女',age:15,national:'傣族'}]);
db.stu1.insert(document);
db.stu2.insert(document);
db.stu1.find({'age':{\$gte:15},'sex':'女'});
db.stu1.find({'national':'苗族'});
db.stu1.find({'age':{\$lt:20},'sex':'男'});
db.stu2.remove({});

"
#########end#########</code></pre>
    <p>
    </p>
   </div>
  </div>
 </article>
</div>



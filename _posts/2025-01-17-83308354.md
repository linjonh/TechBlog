---
layout: post
title: ubuntu服务器搭建个人网站-阿里云-轻量应用服务器配置jdk-tomcat-mysql
date: 2025-01-17 21:22:12 +0800
categories: [运维：Liunx系统&amp;环境搭建&amp;Web开发]
tags: [服务器,tomcat配置,mysql配置,JDK配置]
image:
    path: https://img-blog.csdnimg.cn/20181105220510919.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dpbnRlcjIxMjE=,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150
    alt: ubuntu服务器搭建个人网站-阿里云-轻量应用服务器配置jdk-tomcat-mysql
artid: 83308354
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     ubuntu服务器搭建个人网站 ---- 阿里云 轻量应用服务器配置jdk tomcat mysql
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
    <p id="%E8%B4%AD%E4%B9%B0%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8-toc" style="margin-left:0px;">
     <a href="#%E8%B4%AD%E4%B9%B0%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8" rel="nofollow">
      1.购买云服务器
     </a>
    </p>
    <p id="2.%E9%85%8D%E7%BD%AE%E5%9F%9F%E5%90%8D-toc" style="margin-left:0px;">
     <a href="#2.%E9%85%8D%E7%BD%AE%E5%9F%9F%E5%90%8D" rel="nofollow">
      2.配置域名
     </a>
    </p>
    <p id="3.%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6%E6%9C%8D%E5%8A%A1%E5%99%A8-toc" style="margin-left:0px;">
     <a href="#3.%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6%E6%9C%8D%E5%8A%A1%E5%99%A8" rel="nofollow">
      3.远程控制服务器
     </a>
    </p>
    <p id="4.%E9%85%8D%E7%BD%AEJDK-toc" style="margin-left:0px;">
     <a href="#4.%E9%85%8D%E7%BD%AEJDK" rel="nofollow">
      4.配置JDK
     </a>
    </p>
    <p id="5.tomcat%E6%9C%8D%E5%8A%A1%E7%9A%84%E9%85%8D%E7%BD%AE-toc" style="margin-left:0px;">
     <a href="#5.tomcat%E6%9C%8D%E5%8A%A1%E7%9A%84%E9%85%8D%E7%BD%AE" rel="nofollow">
      5.tomcat服务的配置
     </a>
    </p>
    <p id="6.%E6%95%B0%E6%8D%AE%E5%BA%93mysql%E7%9A%84%E9%83%A8%E7%BD%B2-toc" style="margin-left:0px;">
     <a href="#6.%E6%95%B0%E6%8D%AE%E5%BA%93mysql%E7%9A%84%E9%83%A8%E7%BD%B2" rel="nofollow">
      6.数据库mysql的部署
     </a>
    </p>
    <hr id="hr-toc"/>
    <h2 id="%E8%B4%AD%E4%B9%B0%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8">
     1.购买云服务器
    </h2>
    <p>
     进入阿里云 www.aliyun.com 可以用支付宝账号登录，登陆后进入账号管理-&gt;实名认证。还可以进行学生认证。如果进行学生认证的话，可以看到 云翼计划。学生优惠购买云服务器，9.5元/月。有两种可供选择，差别不大，我选的是轻量应用服务器。
    </p>
    <p>
     <img alt="" class="has" height="329" src="https://i-blog.csdnimg.cn/blog_migrate/cc532b3cd0f04d00b4a4ccdc31b71a6f.png" width="908"/>
    </p>
    <p>
     <img alt="" class="has" height="529" src="https://i-blog.csdnimg.cn/blog_migrate/479e2ce8aa3ced39cb9f6b1346e04e9d.png" width="900"/>
    </p>
    <p>
     购买完成后，去管理控制台，收藏轻量应用服务器，就方便在左侧栏看到了
    </p>
    <p>
     <img alt="" class="has" height="470" src="https://i-blog.csdnimg.cn/blog_migrate/f1867ca0c1afa943eb3217af46375fb5.png" width="800"/>
    </p>
    <p>
     <img alt="" class="has" height="486" src="https://i-blog.csdnimg.cn/blog_migrate/b891f688b952d8d95ca9dccd3d66d671.png" width="800"/>
    </p>
    <p>
     点进去这个服务器，选择远程连接栏，设置一下root密码（需要手机验证码）Ubuntu右侧的小电脑屏幕图标，点一下就可以对服务器进行远程控制了。
    </p>
    <h2 id="2.%E9%85%8D%E7%BD%AE%E5%9F%9F%E5%90%8D">
     2.配置域名
    </h2>
    <p>
     阿里云官网左侧栏提供了域名服务，可以直接在里面购买。然后到服务器控制台，有域名配置，根据提示配置好即可。需要解析哦，等一天左右。
    </p>
    <p>
     域名和服务器都弄好后，其实还需要备案，这是一个繁琐且漫长的过程，如果不强求，我们可以先不弄，暂时用ip直接访问也可以。
    </p>
    <h2 id="3.%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6%E6%9C%8D%E5%8A%A1%E5%99%A8">
     3.远程控制服务器
    </h2>
    <p>
     服务器购买后，系统很干净，什么都没有。阿里云网页上可以直接通过网页进行远程连接服务器，每次还得登录阿里云，好麻烦哦。我这里使用Putty进行远程控制（登录root用户），putty操作很简单，输入自己的公网ip，端口填22，连接就可以进入控制窗口了，会提示登录用户，用root登录即可。
    </p>
    <p>
     关于putty，百度搜索安装即可。
    </p>
    <p>
     <img alt="" class="has" height="253" src="https://i-blog.csdnimg.cn/blog_migrate/753d4e918ed1f4d0a53026b519f44960.png" width="400"/>
    </p>
    <p>
     另外需要在自己的windows安装一个软件FileZilla（百度可安装），安装后可以和服务器进行文件传输。
    </p>
    <p>
     <img alt="" class="has" height="636" src="https://i-blog.csdnimg.cn/blog_migrate/ca9281c26a1c9384871ae17e0d81e8f1.png" width="800"/>
    </p>
    <p>
     左边红框内是自己的windows文件管理器，右侧红框内是ubuntu服务器的文件管理。可以互相拖拽实现文件传输。
    </p>
    <h2 id="4.%E9%85%8D%E7%BD%AEJDK">
     4.配置JDK
    </h2>
    <p>
     去官网下载jdk安装包
     <a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" rel="nofollow">
      https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
     </a>
    </p>
    <p>
     下载Linux 64就行，下载后，通过FileZilla上传的服务器 路径：/opt/java/
    </p>
    <p>
     服务器端进入/opt/java/下，对你刚才上传进来的jdk包进行解压（后面是包名，如不一样，自己改一下）
    </p>
    <pre class="has"><code class="language-bash">tar -zxvf jdk-8u121-linux-x64.tar.gz</code></pre>
    <p>
     解压后会多出一个文件夹，我的是 jdk1.8.0_191，下面进行环境变量的配置：
    </p>
    <pre class="has"><code class="language-bash">vim /etc/profile</code></pre>
    <p>
     在文件最后添加以下内容，目的是对所有用户开机便可读取到jdk。注意
     <span style="color:#f33b45;">
      第一行的路径
     </span>
     ！！
    </p>
    <pre class="has"><code class="language-bash">export JAVA_HOME=/opt/java/jdk1.8.0_191
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH</code></pre>
    <p>
     保存退出。
    </p>
    <p>
     实际上，修改完profile，jdk就可以正常使用了，下面的
     <span style="color:#86ca5e;">
      修改/etc/environment没有必要
     </span>
     ！但是记得
     <span style="color:#f33b45;">
      source /etc/profile
     </span>
     一下！
    </p>
    <p>
     还没有结束，继续执行：
    </p>
    <pre class="has"><code class="language-bash"> vim /etc/environment
</code></pre>
    <p>
     将里面的内容修改为如下，注意最后一行JAVA_HOME是我们安装的目录
    </p>
    <pre class="has"><code class="language-bash">PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:$JAVA_HOME/bin"
export CLASSPATH=.:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
export JAVA_HOME=/java/jdk1.8.0_191</code></pre>
    <p>
     保存退出。
    </p>
    <p>
     最后执行这两句，让配置文件立即生效，如果不执行，重启系统后也会生效
    </p>
    <pre class="has"><code class="language-bash">source /etc/environment
source /etc/profile</code></pre>
    <p>
     至此，jdk配置完成，下面验证一下是否成功。执行这一句，如果出现后面的界面，则证明jdk配置成功。否则，请重新配置。
    </p>
    <pre class="has"><code class="language-bash">java -version</code></pre>
    <p>
     <img alt="" class="has" height="124" src="https://i-blog.csdnimg.cn/blog_migrate/e2f38ad4b017bdfe13383983ad0af84c.png" width="677"/>
    </p>
    <h2 id="5.tomcat%E6%9C%8D%E5%8A%A1%E7%9A%84%E9%85%8D%E7%BD%AE">
     5.tomcat服务的配置
    </h2>
    <p>
     官网下载tomcat的压缩包
     <a href="https://tomcat.apache.org/download-70.cgi" rel="nofollow">
      https://tomcat.apache.org/download-70.cgi
     </a>
     我下载的是tomcat8.5 。下载后，通过FileZilla上传至服务器/opt/文件夹下。（因为我windows用的tomcat8.5，版本对应）
    </p>
    <p>
     <img alt="" class="has" height="477" src="https://i-blog.csdnimg.cn/blog_migrate/9ac164a81a4eef40d05a1b4991f3f94b.png" width="700"/>
    </p>
    <p>
     在putty远程控制进入/opt/文件夹下，解压，注意最后的包名！直接复制我的语句可能不对：
    </p>
    <pre class="has"><code class="language-bash">tar -zxvf apache-tomcat-8.5.33.tar.gz
</code></pre>
    <p>
     解压后会多出一个文件夹 apache-tomcat-8.5.33 ，名字太长了，我们给他改一下名字，改为 tomcat：
    </p>
    <pre class="has"><code class="language-bash">mv apache-tomcat-8.5.33 tomcat</code></pre>
    <p>
     然后我们进入 cd /opt/tomcat/conf/目录下，编辑server.xml文件，修改端口。找到下面的语句。默认端口是8080，需要修改为80（商用端口）
    </p>
    <p>
     <strong>
      注意
     </strong>
     ：80端口在阿里云服务器上是默认开启的，所以我们改成80可以直接访问，也可以改成其他的，比如8021，那么就必须在云服务器控制台的安全组（或防火墙）增加一条规则，允许此端口！！我们访问服务器时，地址栏就应该填写 ip:8021 。如果我要在服务器上布置多个网站，那就不能用80端口！
    </p>
    <pre class="has"><code class="language-bash">vim /opt/tomcat/conf/server.xml</code></pre>
    <p>
     <img alt="" class="has" height="126" src="https://i-blog.csdnimg.cn/blog_migrate/e24866dd5dbdad88a63d4657bbd01e1a.png" width="570"/>
    </p>
    <p>
     然后我们进入 cd /opt/tomcat/bin/目录下，运行startup.sh（开启tomcat服务）
    </p>
    <pre class="has"><code class="language-bash">sh startup.sh</code></pre>
    <p>
     然后我们打开一个浏览器，在地址栏输入自己的   公网ip:端口号   就可以看到如下界面，证明配置成功。若此时未成功，请从头再来。
    </p>
    <p>
     这个页面是 /opt/tomcat/webapps/ROOT/index.jsp，也就是tomcat默认的主页。
    </p>
    <p>
     <img alt="" class="has" height="415" src="https://i-blog.csdnimg.cn/blog_migrate/f15fefd6432b3402baa3a39c3603e69f.png" width="800"/>
    </p>
    <p>
     修改默认主页，在自己喜欢的目录下写java web。修改server.xml文件，找到Host标签，在里面加上Context标签（这句话原本没有，自己写上），内容如图。
    </p>
    <pre class="has"><code class="language-bash">vim /opt/tomcat/conf/server.xml</code></pre>
    <pre class="has"><code>&lt;Context path="" docBase="你的项目名" debug="0" reloadable="true" /&gt;</code></pre>
    <p>
     <img alt="" class="has" height="335" src="https://i-blog.csdnimg.cn/blog_migrate/2e58b6400a06cdc34952bea4b0c8f214.png" width="809"/>
    </p>
    <p>
     解释：docBase是你的项目路径，其实可以只写项目名，如docBase="winter"，tomcat会自动寻找webapps目录下的winter项目下的index.*作为主页。图中的docBase其实是tomcat默认的。path置空即可。reloadable在开发阶段设为true即可，每次修改文件，tomcat会自动更新。使用阶段设为false提高效率。
    </p>
    <p>
     <strong>
      注意
     </strong>
     ：如果上面这一步不配置，完全可以！自己的项目名命名为
     <strong>
      ROOT
     </strong>
     就可以了（大写）；
    </p>
    <p>
     <strong>
      下面这一步可以不看
     </strong>
     ，*配置首页默认文件。这个一般不用管。。 编辑/opt/tomcat/conf/下的web.xml。这一步一般tomcat都已经自带了，可以自行检查一下图片上的内容有没有，应该在文件的最后部分。如果没有，就加上。注意，服务器会优先访问第一个（index.html）即先写那个优先哪个，不存在时，会尝试访问下一个。
    </p>
    <p>
     <img alt="" class="has" height="176" src="https://i-blog.csdnimg.cn/blog_migrate/f6cd01b66f6d5adaa04e890c04276057.png" width="574"/>
    </p>
    <p>
     上述都保存好后，进入/opt/tomcat/bin/目录下，执行下面的命令开启tomcat服务
    </p>
    <pre class="has"><code class="language-bash">sh startup.sh
</code></pre>
    <p>
     如果执行失败，说明权限不足，执行一下语句增加权限：
    </p>
    <pre class="has"><code class="language-bash">chmod 777 *.sh</code></pre>
    <p>
     至此，tomcat配置成功。直接在浏览器访问你的ip就可以看到自己的主页了。
    </p>
    <p>
     如果想关闭tomcat，执行shutdown.sh
    </p>
    <pre class="has"><code class="language-bash">sh /opt/tomcat/bin/shutdown.sh</code></pre>
    <p>
     <strong>
      注意
     </strong>
     ：如果启动tomcat后访问ip或域名进不去，请稍等一会，可能启动较慢。我遇到好几次，等了一会就可以了。如果你设置的端口号不是80，那么必须访问 ip:端口号。并且必须在阿里云服务器防火墙选项里增加自定义规则。
    </p>
    <p>
     <strong>
      设置tomcat开机自启动
     </strong>
     ：
    </p>
    <p>
     进入/opt/tomcat/bin并执行
    </p>
    <pre class="has"><code>cp catalina.sh /etc/init.d/</code></pre>
    <p>
     然后进入/etc/init.d/，给刚才复制的文件改个好记的名字
    </p>
    <pre class="has"><code>mv catalina.sh tomcat</code></pre>
    <p>
     然后需要改一下内容
    </p>
    <pre class="has"><code>vim /etc/init.d/tomcat </code></pre>
    <p>
     在开始位置增加两行，分别代表tomcat的路径，jdk的路径。下面是我的路径，请根据自己的实际情况修改。
    </p>
    <pre class="has"><code class="language-bash">CATALINA_HOME=/opt/tomcat
JAVA_HOME=/opt/java/jdk1.8.0_191</code></pre>
    <p>
     然后设为开机自启项，执行后可能会有两个警告，不用管：
    </p>
    <pre class="has"><code>update-rc.d -f tomcat defaults</code></pre>
    <p>
     最后重启服务器，看一看tomcat是不是开着的（进程名是java）
    </p>
    <pre class="has"><code>reboot</code></pre>
    <pre class="has"><code>systemctl status tomcat</code></pre>
    <p>
     "tomcat"是你的 CATALINA_HOME的值。如果出现下面的画面，则表示tomcat已开启：
    </p>
    <p>
     <img alt="" class="has" height="181" src="https://i-blog.csdnimg.cn/blog_migrate/567102d879ed6b5575320a9bb7369bde.png" width="600"/>
    </p>
    <h2 id="6.%E6%95%B0%E6%8D%AE%E5%BA%93mysql%E7%9A%84%E9%83%A8%E7%BD%B2">
     6.数据库mysql的部署
    </h2>
    <p>
     一切的开始~
    </p>
    <pre class="has"><code>sudo apt-get update</code></pre>
    <p>
     安装mysql：
    </p>
    <pre class="has"><code>sudo apt-get install mysql-server mysql-client</code></pre>
    <p>
     遇到询问是否继续，按Y并回车，遇到设置密码，设置mysql的root用户初始密码。
    </p>
    <p>
     然后试一下重启mysql是不是可以的。
    </p>
    <pre class="has"><code>sudo service mysql restart</code></pre>
    <p>
     最后登录mysql，执行下面语句后提示输入密码，输入刚才安装mysql时设置的密码
    </p>
    <pre class="has"><code class="language-bash">mysql -u root -p</code></pre>
    <p>
     登陆成功后就进入了字符操作界面：
    </p>
    <p>
     <img alt="" class="has" height="304" src="https://i-blog.csdnimg.cn/blog_migrate/73bb2a57a680f9efddabd7401799383e.png" width="825"/>
    </p>
    <p>
     服务器端的mysql布置完了，但是总是远程访问命令行操作很麻烦。。下面用Navicat软件实现远程连接。
    </p>
    <p>
     先自行百度下载软件 Navicat for MySQL
    </p>
    <p>
     服务器端登录mysql  （输入密码）
    </p>
    <pre class="has"><code>mysql -u root -p </code></pre>
    <p>
     0、MySQL&gt;use mysql;
    </p>
    <p>
     1、修改user表:MySQL&gt;
     <span style="color:#86ca5e;">
      update user set host = '%' where user = 'root';
     </span>
     <br/>
     2、授权主机访问：MySQL&gt;
     <span style="color:#86ca5e;">
      GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '
     </span>
     <span style="color:#f33b45;">
      你的root密码
     </span>
     <span style="color:#86ca5e;">
      ' WITH GRANT OPTION;
     </span>
     <br/>
     3、刷新权限：MySQL&gt;
     <span style="color:#86ca5e;">
      FLUSH PRIVILEGES;
     </span>
     <br/>
     4、退出：MySQL&gt;
     <span style="color:#86ca5e;">
      EXIT;
     </span>
    </p>
    <p>
     然后执行下面语句，可以看到端口3306的信息（数据库mysql专用端口）
    </p>
    <pre class="has"><code>netstat -an | grep 3306</code></pre>
    <p>
     如果看到的不是下面的内容，就需要修改文件 mysql.conf.d/mysqld.cnf
    </p>
    <p>
     <img alt="" class="has" height="46" src="https://i-blog.csdnimg.cn/blog_migrate/44f7a3acfe868a21cb19eb039e0bb308.png" width="788"/>
    </p>
    <p>
     执行语句：grep -R address *   可以看到下面内容，由于我是修改过的，故最后是0.0.0.0，你的未修改的应该是127.0.0.1表示仅允许本机访问，你要 修改
     <span style="color:#f33b45;">
      /etc/mysql/mysql.conf.d/mysqld.cnf
     </span>
     文件，找到变量
     <span style="color:#f33b45;">
      bind-address
     </span>
     ，修改值为0.0.0.0表示允许任何ip访问。
    </p>
    <p>
     <img alt="" class="has" height="68" src="https://i-blog.csdnimg.cn/blog_migrate/6842e10511b89dd21d37a26d730f0a18.png" width="685"/>
    </p>
    <p>
     然后你可以看一下mysql的用户表，依次执行：
    </p>
    <pre class="has"><code>mysql -u root -p </code></pre>
    <pre class="has"><code>mysql&gt; use mysql;
</code></pre>
    <pre class="has"><code>mysql&gt; select user,host from user;
</code></pre>
    <p>
     如果看到用户root的host是%，则证明该用户可以接受任意主机的远程访问了。若不是，请从上面的步骤中寻找原因。
    </p>
    <p>
     <img alt="" class="has" height="234" src="https://i-blog.csdnimg.cn/blog_migrate/04193c956cc989c0f0571a73a832c53a.png" width="377"/>
    </p>
    <p>
     改好之后，重启一下mysql服务：
    </p>
    <pre class="has"><code>sudo /etc/init.d/mysql restart
</code></pre>
    <p>
     看似大功告成了，但是云服务器还需要在安全组里允许3306端口访问！！！在阿里云控制台左侧栏找安全组或者防火墙，添加一条规则，使得端口3306是允许访问了，这才ok~
    </p>
    <p>
     现在在我自己的电脑上打开Navicat软件，点击左上角连接，并填写。
    </p>
    <p>
     <img alt="" class="has" height="560" src="https://i-blog.csdnimg.cn/blog_migrate/6a1b6567def9ad0114d727ad234c303a.png" width="800"/>
    </p>
    <p>
    </p>
   </div>
  </div>
 </article>
</div>



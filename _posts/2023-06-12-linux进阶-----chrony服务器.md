---
layout: post
title: 2023-06-12-linux进阶-----chrony服务器
date: 2023-06-12 11:03:42 +0800
categories: [linux进阶]
tags: [服务器,linux,运维,网络安全,redhat]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=131062015
  alt: linux进阶-----chrony服务器
artid: 131062015
---
<span class="artid" style="display:none" artid=68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f36323434333430392f:61727469636c652f64657461696c732f313331303632303135></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     linux进阶 --- chrony服务器
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h3>
     chrony服务器
    </h3>
    <h4>
     （1）定义：
    </h4>
    <blockquote>
     <p>
      是一个开源自由的网络时间协议NTP的客户端与服务器端软件。让计算机保持系统时钟与时钟服务器（NTP）同步。chrony由两个程序组成，
      <span style="color:#fe2c24;">
       <strong>
        chronyd（服务器端）
       </strong>
      </span>
      和
      <span style="color:#fe2c24;">
       <strong>
        chronyc（客户端）
       </strong>
      </span>
     </p>
    </blockquote>
    <ul>
     <li>
      <span style="color:#be191c;">
       <strong>
        chronyd
       </strong>
      </span>
      ：
      <strong>
       后台运行的守护进程
      </strong>
      ，用于调整内核中运行的系统时钟和时政服务器同步，它确定了计算机增减时间的比率，并对此进行平滑调整。
     </li>
     <li>
      <span style="color:#be191c;">
       <strong>
        chronyc
       </strong>
      </span>
      ：提供用户界面，用于监控性能并进行多样化的配置。可在chronyd实例控制的计算机上工作，也可在一台不同的远程计算机工作
     </li>
    </ul>
    <pre><code class="language-Dart">查找软件安装情况
[root@localhost ~]# rpm -qa | grep chrony
chrony-3.3-3.el8.x86_64
</code></pre>
    <h4>
     （2）安装配置
    </h4>
    <pre><code class="language-perl">yum -y install chrony --- 安装
systemctl enable chronyd --- 开机自启动
systemctl start chronyd --- 启动</code></pre>
    <p>
     chrony的配置文件是：
     <span style="color:#ed7976;">
      <strong>
       /etc/chrony.conf
      </strong>
     </span>
    </p>
    <p>
     <span style="color:#be191c;">
      <strong>
       详细内容：
      </strong>
     </span>
    </p>
    <blockquote>
     <p>
      # 使用 pool.ntp.org 项目中的公共服务器。以server开，理论上想添加多少时间服务器都可以。
     </p>
     <p>
      <span style="color:#ad720d;">
       server 0.centos.pool.ntp.org iburst
       <br/>
       server 1.centos.pool.ntp.org iburst
      </span>
     </p>
     <p>
     </p>
     <p>
      # 根据实际时间计算出服务器增减时间的比率，然后记录到一个文件中，在系统重启后为系统做出最佳时间补偿调整。
      <br/>
      <span style="color:#ad720d;">
       driftfile /var/lib/chrony/drift
      </span>
     </p>
     <p>
     </p>
     <p>
      # 如果系统时钟的偏移量大于1秒，则允许系统时钟在前三次更新中步进。
      <br/>
      <span style="color:#ad720d;">
       makestep 1.0 3
      </span>
     </p>
     <p>
     </p>
     <p>
      # 启用实时时钟（RTC）的内核同步。
      <br/>
      <span style="color:#ad720d;">
       rtcsync
      </span>
     </p>
     <p>
     </p>
     <p>
      # 通过使用 hwtimestamp 指令启用硬件时间戳
      <br/>
      <span style="color:#ad720d;">
       hwtimestamp *
      </span>
     </p>
     <p>
     </p>
     <p>
      # 增加调整系统时钟所需的最小可选源数。
      <br/>
      <span style="color:#ad720d;">
       minsources 2
      </span>
     </p>
     <p>
     </p>
     <p>
      # 即使未同步到时间源，也要提供时间。
      <br/>
      <span style="color:#ad720d;">
       # Serve time even if not synchronized to a time source.
      </span>
     </p>
     <p>
      <span style="color:#ad720d;">
       local stratum 10（取值范围1-15，当默认时钟源无法同步，则当前系统层级为10）
      </span>
     </p>
     <p>
     </p>
     <p>
      # 指定包含 NTP 身份验证密钥的文件。
      <br/>
      <span style="color:#ad720d;">
       keyfile /etc/chrony.keys
      </span>
      <br/>
      <br/>
      # 指定日志文件的目录。
      <br/>
      <span style="color:#ad720d;">
       logdir /var/log/chrony
      </span>
      <br/>
      <br/>
      # 选择日志文件要记录的信息。
      <br/>
      <span style="color:#ad720d;">
       log measurements statistics tracking
      </span>
     </p>
    </blockquote>
    <p>
     <span style="color:#1c7331;">
      rtcsyc：该指令使得chronyd定期将系统时间复制到RTC时钟。
     </span>
    </p>
    <h4>
     （3）同步网络时间服务器
    </h4>
    <p>
     <strong>
      &lt;1&gt; 进入/etc/chrony.conf进行修改
     </strong>
    </p>
    <p>
     <span style="color:#be191c;">
      <strong>
       配置时间源：server  时间源IP  iburst
      </strong>
     </span>
     <img alt="" height="135" src="https://i-blog.csdnimg.cn/blog_migrate/fdf9db1aa5f8e4a1b8ce7b1e71b05968.png" width="876"/>
    </p>
    <p>
     <span style="color:#1c7331;">
      iburst：加快调整时间的频率（突发）
     </span>
    </p>
    <p>
     <a class="link-info" href="http://ntp.aliyun.com" rel="nofollow" title="ntp.aliyun.com">
      ntp.aliyun.com
     </a>
     --- 阿里云授时中心
    </p>
    <p>
     <strong>
      &lt;2&gt; 设置开机启动和重启服务
     </strong>
    </p>
    <pre><code>systemctl enable chronyd --- 开机启动
systemctl restart chronyd --- 重启服务</code></pre>
    <p>
     <strong>
      &lt;3&gt; 查看时间同步
     </strong>
    </p>
    <pre><code>timedatectl status --- 时间同步状态
timedatectl set-ntp true --- 开启网络时间同步</code></pre>
    <h4>
     （4）chronyc 命令
    </h4>
    <ul>
     <li>
      <span style="color:#ed7976;">
       <strong>
        chronyc sources -v
       </strong>
      </span>
      --- 查看ntp_servers
     </li>
     <li>
      <strong>
       <span style="color:#ed7976;">
        chronyc sourcestats -v
       </span>
      </strong>
      --- 查看ntp_servers状态
     </li>
     <li>
      <span style="color:#ed7976;">
       <strong>
        chronyc activity -v
       </strong>
      </span>
      --- 查看net_servers是否在线
     </li>
     <li>
      <span style="color:#ed7976;">
       <strong>
        chronyc tracking -v
       </strong>
      </span>
      --- 查看ntp详细信息
     </li>
     <li>
      <span style="color:#ed7976;">
       <strong>
        chronyc -a makestep
       </strong>
      </span>
      --- 强制同步系统时钟
     </li>
    </ul>
    <p>
     <span style="color:#1c7331;">
      <strong>
       例：强制同步系统时钟（特定条件才能进行，超过步进时间则无法同步）
      </strong>
     </span>
    </p>
    <pre><code>[root@localhost ~]# date -s "2023-09-11 11:30"
Mon Sep 11 11:30:00 CST 2023
[root@localhost ~]# timedatectl
               Local time: Mon 2023-09-11 11:30:10 CST
           Universal time: Mon 2023-09-11 03:30:10 UTC
                 RTC time: Mon 2023-06-12 02:34:29
                Time zone: Asia/Shanghai (CST, +0800)
System clock synchronized: no
              NTP service: active
          RTC in local TZ: no
[root@localhost ~]# chronyc -a makestep
200 OK
[root@localhost ~]# date
Mon Sep 11 11:30:30 CST 2023
[root@localhost ~]# systemctl restart chronyd --- 需重启chronyd服务才可同步
[root@localhost ~]# date
Mon Jun 12 10:35:16 CST 2023
[root@localhost ~]# timedatectl
               Local time: Mon 2023-06-12 10:35:26 CST
           Universal time: Mon 2023-06-12 02:35:26 UTC
                 RTC time: Mon 2023-06-12 02:35:25
                Time zone: Asia/Shanghai (CST, +0800)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no</code></pre>
    <h4>
     （5）chronyc sources 输出结果解析
    </h4>
    <p>
     <img alt="" height="353" src="https://i-blog.csdnimg.cn/blog_migrate/fede81fdc0962fa06bf162716d8d15bb.png" width="970"/>
    </p>
    <p>
     &lt;1&gt;
     <strong>
      <span style="color:#b95514;">
       M
      </span>
     </strong>
    </p>
    <p>
     这表示信号源的模式。
     <em>
      ^
     </em>
     表示服务器，
     <em>
      =
     </em>
     表示对等方，
     <em>
      ＃
     </em>
     表示本地连接的参考时钟。
    </p>
    <p>
     &lt;2&gt;
     <span style="color:#b95514;">
      <strong>
       S
      </strong>
     </span>
    </p>
    <p>
     此列指示源的状态。
    </p>
    <ul>
     <li>
      <span style="color:#1c7892;">
       <strong>
        <em>
         * 表示chronyd当前同步到的源。
        </em>
       </strong>
      </span>
     </li>
     <li>
      <span style="color:#1c7892;">
       <strong>
        <em>
         + 表示可接受的信号源，与选定的信号源组合在一起。
        </em>
       </strong>
      </span>
     </li>
     <li>
      <span style="color:#1c7892;">
       <strong>
        <em>
         - 表示被合并算法排除的可接受源。
        </em>
       </strong>
      </span>
     </li>
     <li>
      <em>
       <span style="color:#1c7892;">
        <strong>
         ？ 指示已失去连接性或其数据包未通过所有测试的源。它也显示在启动时，直到从中至少收集了3个样本为止。
        </strong>
       </span>
      </em>
     </li>
     <li>
      <em>
       <span style="color:#1c7892;">
        <strong>
         x 表示chronyd认为是虚假行情的时钟（即，其时间与大多数其他来源不一致）
        </strong>
       </span>
      </em>
     </li>
     <li>
      <em>
       <span style="color:#1c7892;">
        <strong>
         〜 表示时间似乎具有太多可变性的来源。
        </strong>
       </span>
      </em>
     </li>
    </ul>
    <p>
     &lt;3&gt;
     <span style="color:#b95514;">
      <strong>
       Name/IP address
      </strong>
     </span>
    </p>
    <p>
     这显示了源的名称或IP地址，或参考时钟的参考ID。
    </p>
    <p>
     &lt;4&gt;
     <span style="color:#ad720d;">
      <strong>
       Stratum
      </strong>
     </span>
    </p>
    <p style="margin-left:.0001pt;text-align:justify;">
     这显示了来源的层，如其最近收到的样本中所报告的那样。层1表示一台具有本地连接的参考时钟的计算机。与第1层计算机同步的计算机位于第2层。与第2层计算机同步的计算机位于第3层，依此类推。
    </p>
    <p>
     &lt;5&gt;
     <span style="color:#b95514;">
      <strong>
       Poll
      </strong>
     </span>
    </p>
    <p>
     这显示轮询源的速率，以秒为单位的时间间隔的以2为底的对数。因此，值为6表示每64秒进行一次测量。
     <strong>
      chronyd会
     </strong>
     根据当前情况自动
     <strong>
      更改
     </strong>
     轮询速率。
    </p>
    <p>
     &lt;6&gt;
     <span style="color:#b95514;">
      <strong>
       Reach
      </strong>
     </span>
    </p>
    <p>
     这显示了源的可达性寄存器以八进制数字打印。寄存器有8位，并在每个从源接收或丢失的数据包上更新。值377表示从最后八次传输中收到了对所有用户的有效答复。
    </p>
    <p>
     &lt;7&gt;
     <span style="color:#b95514;">
      <strong>
       LastRx
      </strong>
     </span>
    </p>
    <p>
     此列显示多长时间前从来源接收到了最后一个好的样本（在下一列中显示）。未通过某些测试的测量将被忽略。通常以秒为单位。字母
     <em>
      m
     </em>
     ，
     <em>
      h
     </em>
     ，
     <em>
      d
     </em>
     或
     <em>
      y
     </em>
     表示分钟，小时，天或年。
    </p>
    <p>
     &lt;8&gt;
     <span style="color:#b95514;">
      <strong>
       Last sample
      </strong>
     </span>
    </p>
    <p>
     此列显示上次测量时本地时钟与源之间的偏移。方括号中的数字表示实际测得的偏移量。可以用
     <em>
      ns
     </em>
     （表示纳秒），
     <em>
      us
     </em>
     （表示微秒），
     <em>
      ms
     </em>
     （表示毫秒）或
     <em>
      s
     </em>
     （表示秒）作为后缀。方括号左侧的数字表示原始测量值，已调整为允许此后施加于本地时钟的任何摆度。
    </p>
    <p>
     &lt;9&gt;
     <em>
      +/-
     </em>
     指示器后面的数字表示测量中的误差范围。正偏移表示本地时钟位于源时钟之前。
    </p>
    <p style="margin-left:.0001pt;text-align:justify;">
     <span style="color:#1c7331;">
      <strong>
       例：现有时钟服务器time_server：它的层级是2，一台主机node1从time_server同步时间，那么node1主机的层级就是3，以此类推另一台在node1同步时间，那它的层级就是4。
      </strong>
     </span>
    </p>
    <p>
     <img alt="" height="451" src="https://i-blog.csdnimg.cn/blog_migrate/f6ff7a59f2a4ec6e3440e5e626707d85.png" width="980">
      <br/>
      <span style="color:#1c7331;">
       在另一台虚拟机上同步此台虚拟机的ntp状态
      </span>
      <br/>
      <img alt="" height="254" src="https://i-blog.csdnimg.cn/blog_migrate/19a2db9e08ee6aad4a97880bb25c3f87.png" width="947">
       <br/>
       <img alt="" height="171" src="https://i-blog.csdnimg.cn/blog_migrate/59530bc50af6ac22356fa283d7bc4099.png" width="799"/>
      </img>
     </img>
    </p>
    <p>
     <span style="color:#1c7331;">
      <strong>
       例：node1向time_server同步时，无法同步；则第二台主机node2依旧向node1同步时间，则此时node2的层级是（
      </strong>
     </span>
     <span style="color:#b95514;">
      <strong>
       11
      </strong>
     </span>
     <span style="color:#1c7331;">
      <strong>
       ），同步的时间为（
      </strong>
     </span>
     <span style="color:#b95514;">
      <strong>
       node1本地系统时间的时钟源
      </strong>
     </span>
     <span style="color:#1c7331;">
      <strong>
       ）
      </strong>
     </span>
    </p>
    <p>
     <span style="color:#1c7331;">
      进入/etc/chrony.conf中，修改server端ip为不存在ip
     </span>
     <br/>
     <img alt="" height="229" src="https://i-blog.csdnimg.cn/blog_migrate/a0380e4054f3f0a38625a0c33eb7848c.png" width="739">
      <br/>
      <img alt="" height="141" src="https://i-blog.csdnimg.cn/blog_migrate/1966fc051458f29e59859734615bc1ed.png" width="692">
       <br/>
       <span style="color:#1c7331;">
        重启服务再次查看同步时钟源
       </span>
       <br/>
       <img alt="" height="449" src="https://i-blog.csdnimg.cn/blog_migrate/2291888b614c3fd3a0b74435146765a1.png" width="850">
        <br/>
        <span style="color:#1c7331;">
         查看node1层级
        </span>
        <br/>
        <img alt="" height="283" src="https://i-blog.csdnimg.cn/blog_migrate/f3496cc7e06f6f9f976f1fb70015e1f7.png" width="568"/>
        <br/>
        <span style="color:#1c7331;">
         查看node2层级
        </span>
        <br/>
        <img alt="" height="291" src="https://i-blog.csdnimg.cn/blog_migrate/799e7fb88468fc5be829ea094dc141bd.png" width="573"/>
       </img>
      </img>
     </img>
    </p>
    <h4>
     <span style="color:#fe2c24;">
      <strong>
       （6）常用命令
      </strong>
     </span>
    </h4>
    <blockquote>
     <p>
      <span style="color:#511b78;">
       <strong>
        chrony -&gt; 服务端：chronyd；客户端：chronyc
        <br/>
        chronyc sources -v -&gt; 时钟源查看
        <br/>
        timedatectl -&gt; 当前系统是否已同步时间、NTP的服务状态
        <br/>
        chronyc tracking -&gt; 查看详细信息
       </strong>
      </span>
     </p>
     <p>
      <span style="color:#511b78;">
       <strong>
        配置文件：/etc/chrony.conf
       </strong>
      </span>
      <br/>
     </p>
     <p>
      <span style="color:#511b78;">
       <strong>
        配置文件中：
        <br/>
        server 时钟源地址 iburst
        <br/>
        allow：不配置，不允许所有客户端访问
        <br/>
        （allow 192.168.0.0/16）
        <br/>
        local stratum 10：仅表达距真正时钟源较远
        <br/>
        rtcsync：将系统时钟复制给硬件时钟
       </strong>
      </span>
     </p>
    </blockquote>
   </div>
  </div>
 </article>
</div>



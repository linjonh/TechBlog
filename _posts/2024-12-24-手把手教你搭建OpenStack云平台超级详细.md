---
layout: post
title: 2024-12-24-手把手教你搭建OpenStack云平台超级详细
date: 2024-12-24 13:15:52 +0800
categories: []
tags: [云计算]
image:
  path: https://img-blog.csdnimg.cn/c6a5481bd6b14347bba5051a9ca55318.png?x-oss-process&#61;image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAMOmGkumGkg&#61;&#61;,size_20,color_FFFFFF,t_70,g_se,x_16
  alt: 手把手教你搭建OpenStack云平台超级详细
artid: 122628664
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     手把手教你搭建OpenStack云平台（超级详细）
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
     <strong>
      一、前言
     </strong>
    </h2>
    <blockquote>
     <p>
      OpenStack云平台搭建需要两个节点，一个是controller（控制节点），另一个是compute（计算节点）。
     </p>
     <p>
      控制节点（controller）规划如下：
     </p>
     <p>
      一块200G的硬盘。两块网卡，第一块网卡IP地址使用192.168.100.10，第二块网卡IP地址使用192.168.200.10。
     </p>
     <p>
      计算节点（compute）规划如下：
     </p>
     <p>
      一块200G的硬盘和一块100G的硬盘。两块网卡，第一块网卡IP地址使用192.168.100.20，第二块网卡IP地址使用192.168.200.20。
     </p>
     <p>
      云平台搭建需要使用centos7.5及7.0版本的镜像和chinaskills_cloud_iaas.iso镜像，镜像提供如下：
     </p>
     <p>
      centos7.5镜像链接：https://pan.baidu.com/s/1stvdGLKTwVqrAyzTW-WQuA
      <br/>
      提取码：yjsq
     </p>
     <p>
      centos7.0镜像链接：https://pan.baidu.com/s/10zQAxkSqO37_EAX2wVyy9A
      <br/>
      提取码：yjsq
     </p>
     <p>
      iaas镜像链接：https://pan.baidu.com/s/11iAL7pQf31Kyer2UfVe2ZA
      <br/>
      提取码：yjsq
     </p>
    </blockquote>
    <hr/>
    <p>
    </p>
    <h2>
     二、基础环境准备及安装系统
    </h2>
    <h3>
     1.controller控制节点
    </h3>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/3f6e847820d52256f4415f2fd6f921ca.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/12393a558fff5a1e754f546d99c3c846.png"/>
    </p>
    <p style="text-align:center;">
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/f609bbab7323cade3d24625f676de89f.png"/>
    </p>
    <p>
    </p>
    <p style="text-align:center;">
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/27031a7207fb0de930d20471846ae26c.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" height="549" src="https://i-blog.csdnimg.cn/blog_migrate/08c6c408ce93ceb8181757402c1570c6.png" width="569"/>
    </p>
    <p>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/6e5c67c673e00e594bd083e5894edaf1.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/64b40b14c88ac9e1699e8ce105321c17.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/19d668d6888f6ebf38b6b981b5729c84.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/75cec6a30d1e56824223543fd2c4a844.png"/>
    </p>
    <p>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/58f7c0f5168d33c858923a78d0becf79.png"/>
    </p>
    <p>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/1f7d8dfb71c6860d3c66efe9a96cacd5.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/5405c901eb75a6f86eb5bc6aa61a6277.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/015cc4fe9e021697acf1105a8a57e5c8.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/6ff76c91819150d6b2d33f935bd11a74.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/6791368b809e0da446c121d41158afd1.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/13f568dcac57b5f9afb558def70f1261.png"/>
    </p>
    <p style="text-align:center;">
    </p>
    <p style="text-align:center;">
     <img alt="" height="379" src="https://i-blog.csdnimg.cn/blog_migrate/85c6b1cb8b0d7ca4ff116f5cf3a57e52.png" width="409"/>
    </p>
    <p>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/121947d7a99ced893ff1501d889823c5.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/22731488fade1d2932fbee51c63b17ec.png"/>
    </p>
    <p>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/ac278cf47d31e3e1a7dc6dea4081e351.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/f6ef9cf0c93ce96f7286241b0b69e64e.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/5b13e8b980430eb4e49ddd63ac47d199.png"/>
    </p>
    <p style="text-align:center;">
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/abbb9520acc8d0e2378705c179bc177c.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/d2b50d0d147ba1df70163951c54e6364.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/51704d64b29778fe620a17db577db294.png"/>
    </p>
    <p>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/6ce758165e933c6f609eeefa880c54e7.png"/>
    </p>
    <hr/>
    <p>
     重启后使用root用户登录，然后修改主机名，配置网卡、内核。
    </p>
    <h4>
     1.修改主机名。
    </h4>
    <p>
     <img alt="" height="176" src="https://i-blog.csdnimg.cn/blog_migrate/72e9a08663dae056d5fabdb5f5a32310.png" width="925"/>
    </p>
    <p>
    </p>
    <h4>
     2.修改第一块网卡。
    </h4>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/aa04e5e23d8aab4cb3c7caf9e3493678.png"/>
    </p>
    <p>
     修改、添加内容如下 （注：按下i键进入插入模式，按下ESC键，然后输入冒号wq退出）。
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/934fc12846308c3e975d2ed3c4aed411.png"/>
    </p>
    <h4>
     3.修改第二块网卡。
    </h4>
    <p style="text-align:center;">
     <img alt="" height="40" src="https://i-blog.csdnimg.cn/blog_migrate/e6c56726c1bcb6d40179211d84c7893a.png" width="1069"/>
    </p>
    <p>
     修改、添加内容如下：
    </p>
    <p style="text-align:center;">
     <img alt="" height="411" src="https://i-blog.csdnimg.cn/blog_migrate/a165444425d698fbdcfc0092c56f8928.png" width="710"/>
    </p>
    <p>
     重启网卡，使配置生效。
    </p>
    <p style="text-align:center;">
     <img alt="" height="49" src="https://i-blog.csdnimg.cn/blog_migrate/4de75a88e950bc3ab82a2d73283be975.png" width="804"/>
    </p>
    <p>
     使用ip a 命令检验配置是否生效。
    </p>
    <p style="text-align:center;">
     <img alt="" height="525" src="https://i-blog.csdnimg.cn/blog_migrate/e5588f775b6c86b5211fc880bdbead7c.png" width="1200"/>
    </p>
    <p>
     4.修改内核。
    </p>
    <p style="text-align:center;">
     <img alt="" height="69" src="https://i-blog.csdnimg.cn/blog_migrate/a7ba12a6120b1a10731ac547cb5d3427.png" width="675"/>
    </p>
    <p>
     添加内容如下：
    </p>
    <p style="text-align:center;">
     <img alt="" height="257" src="https://i-blog.csdnimg.cn/blog_migrate/38bda62569fcbdf249379309e7d27591.png" width="1200"/>
    </p>
    <p>
     刷新内核，然后重启使配置生效。
    </p>
    <p style="text-align:center;">
     <img alt="" height="313" src="https://i-blog.csdnimg.cn/blog_migrate/6d26406691d38295bd6d6d47ba960e9d.png" width="1119"/>
    </p>
    <p>
     重启之后使用SecureCRT连上controller节点。（注：连接SecureCRT是为了方便）
    </p>
    <p style="text-align:center;">
     <img alt="" height="797" src="https://i-blog.csdnimg.cn/blog_migrate/82024910570dde7b7b8e30eb99359199.png" width="1200"/>
    </p>
    <p>
     注意：VMnet8必须跟controller节点和compute节点在同一个网段才能连接上SecureCRT。
    </p>
    <p style="text-align:center;">
     <img alt="" height="520" src="https://i-blog.csdnimg.cn/blog_migrate/57b17239c12c33ddab9c72f697860d81.png" width="544"/>
    </p>
    <p>
     输入密码后，点击“确定”即可连接上SecureCRT。
    </p>
    <p style="text-align:center;">
     <img alt="" height="227" src="https://i-blog.csdnimg.cn/blog_migrate/b868738c9a133a816f28e2f3d5eb670b.png" width="414"/>
    </p>
    <p>
     出现以下图示表示连接成功。
    </p>
    <p style="text-align:center;">
     <img alt="" height="119" src="https://i-blog.csdnimg.cn/blog_migrate/0a55131ce622be68767d572671e8969d.png" width="1050"/>
    </p>
    <hr/>
    <p>
    </p>
    <h3>
     2.compute计算节点
    </h3>
    <p>
     说明：compute节点与controller节点基础环境及安装系统大致相同，可参考controller节点配置，以下是稍有不同的地方。
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/bef5d58a3a0749080fd2fac0d0b8285e.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/f81a754eaac21ef7e5bfcffa23cf1809.png"/>
    </p>
    <p>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/c34e05e687165bcf8b137ed5b8de070b.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/ae1692ca598498bf5f052de28b414cc2.png"/>
    </p>
    <p>
    </p>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/b947597901d60aaa8a941bad6e2fadbf.png"/>
    </p>
    <p style="text-align:center;">
     <img alt="" height="173" src="https://i-blog.csdnimg.cn/blog_migrate/dca371187192557eb352e6ec45ff4d8f.png" width="897"/>
    </p>
    <p>
     第一块网卡配置如下：
    </p>
    <p style="text-align:center;">
     <img alt="" height="46" src="https://i-blog.csdnimg.cn/blog_migrate/f8ed9ded918839911e2953d30ed7112b.png" width="1081"/>
    </p>
    <p style="text-align:center;">
     <img alt="" height="483" src="https://i-blog.csdnimg.cn/blog_migrate/948d7e1d4e14d746b86770f9a73c7974.png" width="698"/>
    </p>
    <p>
     第二块网卡配置如下：
    </p>
    <p style="text-align:center;">
     <img alt="" height="45" src="https://i-blog.csdnimg.cn/blog_migrate/83618b1df87a27c7574d280104921c36.png" width="1062"/>
    </p>
    <p style="text-align:center;">
     <img alt="" height="437" src="https://i-blog.csdnimg.cn/blog_migrate/696de6aa14fbf4b02693c9b1b5207c3c.png" width="700"/>
    </p>
    <p>
     注意：compute节点也需要连上SecureCRT。
    </p>
    <hr/>
    <h2>
     三、正式搭建OpenStack云平台
    </h2>
    <h3>
     controller节点配置：
    </h3>
    <h4>
     1.上传centos7.0镜像和chinaskills_cloud_iaas.iso镜像至controller节点。
    </h4>
    <p style="text-align:center;">
     <img alt="" height="787" src="https://i-blog.csdnimg.cn/blog_migrate/788a348458bfdbfc307e1efa59cd9d42.png" width="1200"/>
    </p>
    <p>
     centos7.0镜像上传方式如上。
    </p>
    <h4>
     2.关闭防火墙，selinux。
    </h4>
    <pre><code>[root@controller ~]# systemctl stop firewalld        #关闭防火墙
[root@controller ~]# systemctl disable firewalld        #设置防火墙开机不自启
Removed symlink /etc/systemd/system/multi-user.target.wants/firewalld.service.
Removed symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service.
[root@controller ~]# setenforce 0        #临时关闭selinux防火墙，0表示关闭，1表示开启
[root@controller ~]# getenforce        #查看selinux防火墙的状态
Permissive
[root@controller ~]# vi /etc/selinux/config         #非临时性
[root@controller ~]# 
</code></pre>
    <p>
     selinux配置文件内容修改如下：
    </p>
    <p>
     <img alt="" height="441" src="https://i-blog.csdnimg.cn/blog_migrate/d334e11f893eb1d0e1c031d0152ae907.png" width="1200"/>
    </p>
    <h4>
     3.挂载镜像
    </h4>
    <p>
     查看镜像是否已上传。
    </p>
    <p>
     <img alt="" height="121" src="https://i-blog.csdnimg.cn/blog_migrate/ca225e8702ef510d8a92d4cdd498326f.png" width="1200"/>
    </p>
    <p>
     <img alt="" height="151" src="https://i-blog.csdnimg.cn/blog_migrate/d2a119cf1c674ec826271292bc8408b2.png" width="1200"/>
    </p>
    <p>
     挂载镜像。
    </p>
    <pre><code>[root@controller ~]# mount -o loop CentOS-7-x86_64-DVD-1804.iso /mnt/
mount: /dev/loop0 写保护，将以只读方式挂载
[root@controller ~]# mkdir /opt/centos
[root@controller ~]# cp -rf /mnt/* /opt/centos/
[root@controller ~]# umount /mnt/
[root@controller ~]# mount -o loop chinaskills_cloud_iaas.iso /mnt/
mount: /dev/loop0 写保护，将以只读方式挂载
[root@controller ~]# cp -rf /mnt/* /opt/
[root@controller ~]# umount /mnt/
[root@controller ~]# </code></pre>
    <h4>
     4.yum源文件处理
    </h4>
    <p>
     移除原yum源。
    </p>
    <pre><code>[root@controller ~]# cd /etc/yum.repos.d/
[root@controller yum.repos.d]# mv * /media/
[root@controller yum.repos.d]# ls
[root@controller yum.repos.d]# </code></pre>
    <p>
     写yum源文件。
    </p>
    <pre><code>[root@controller yum.repos.d]# vi local.repo 
[root@controller yum.repos.d]# cat local.repo 
[centos]
name=centos
baseurl=file:///opt/centos
gpgcheck=0
enabled=1

[iaas]
name=iaas
baseurl=file:///opt/iaas-repo
gpgcheck=0
enabled=1
[root@controller yum.repos.d]# </code></pre>
    <p>
     清除yum源缓存，验证yum源，下载所需软件包。
    </p>
    <pre><code>[root@controller yum.repos.d]# yum clean all        #清除yum源缓存
已加载插件：fastestmirror
正在清理软件源： centos iaas
Cleaning up everything
Maybe you want: rm -rf /var/cache/yum, to also free up space taken by orphaned data from disabled or removed repos
Cleaning up list of fastest mirrors
[root@controller yum.repos.d]# yum repolist        #列出所有可用的yum源
已加载插件：fastestmirror
Determining fastest mirrors
centos                                                                          | 3.6 kB  00:00:00     
iaas                                                                            | 2.9 kB  00:00:00     
(1/3): centos/group_gz                                                          | 166 kB  00:00:00     
(2/3): centos/primary_db                                                        | 3.1 MB  00:00:00     
(3/3): iaas/primary_db                                                          | 1.4 MB  00:00:00     
源标识                                           源名称                                           状态
centos                                           centos                                           3,971
iaas                                             iaas                                             3,232
repolist: 7,203
[root@controller yum.repos.d]# yum install -y vim vsftpd iaas-xiandian   #安装所需的软件包</code></pre>
    <h4>
     5.配置vsftpd。
    </h4>
    <pre><code>[root@controller yum.repos.d]# echo anon_root=/opt/ &gt;&gt; /etc/vsftpd/vsftpd.conf #设置匿名访问
[root@controller yum.repos.d]# systemctl restart vsftpd        #重启ftp服务
[root@controller yum.repos.d]# systemctl enable vsftpd        #设置ftp服务开机自启
Created symlink from /etc/systemd/system/multi-user.target.wants/vsftpd.service to /usr/lib/systemd/system/vsftpd.service.
[root@controller yum.repos.d]# 
</code></pre>
    <h4>
     6.修改脚本。
    </h4>
    <pre><code>[root@controller ~]# vim /etc/xiandian/openrc.sh</code></pre>
    <p>
     注：在非插入模式下按下Ctrl+v——shift+g——D可删除注释符号。
    </p>
    <pre><code>
#--------------------system Config--------------------##
#Controller Server Manager IP. example:x.x.x.x
HOST_IP=192.168.100.10        #controller节点的IP地址

#Controller HOST Password. example:000000 
HOST_PASS=000000

#Controller Server hostname. example:controller
HOST_NAME=controller

#Compute Node Manager IP. example:x.x.x.x
HOST_IP_NODE=192.168.100.20        #compute节点的IP地址

#Compute HOST Password. example:000000 
HOST_PASS_NODE=000000

#Compute Node hostname. example:compute
HOST_NAME_NODE=compute

#--------------------Chrony Config-------------------##
#Controller network segment IP.  example:x.x.0.0/16(x.x.x.0/24)
network_segment_IP=192.168.100.0/24        #controller节点所在的网段

#--------------------Rabbit Config ------------------##
#user for rabbit. example:openstack
RABBIT_USER=openstack

#Password for rabbit user .example:000000
RABBIT_PASS=000000

#--------------------MySQL Config---------------------##
#Password for MySQL root user . exmaple:000000
DB_PASS=000000

#--------------------Keystone Config------------------##
#Password for Keystore admin user. exmaple:000000
DOMAIN_NAME=demo        
ADMIN_PASS=000000
DEMO_PASS=000000

#Password for Mysql keystore user. exmaple:000000
KEYSTONE_DBPASS=000000

#--------------------Glance Config--------------------##
#Password for Mysql glance user. exmaple:000000
GLANCE_DBPASS=000000

#Password for Keystore glance user. exmaple:000000
GLANCE_PASS=000000

#--------------------Nova Config----------------------##
#Password for Mysql nova user. exmaple:000000
NOVA_DBPASS=000000

#Password for Keystore nova user. exmaple:000000
NOVA_PASS=000000

#--------------------Neturon Config-------------------##
#Password for Mysql neutron user. exmaple:000000
NEUTRON_DBPASS=000000

#Password for Keystore neutron user. exmaple:000000
NEUTRON_PASS=000000

#metadata secret for neutron. exmaple:000000
METADATA_SECRET=000000

#Tunnel Network Interface. example:x.x.x.x
INTERFACE_IP=192.168.100.10        #本机IP地址

#External Network Interface. example:eth1
INTERFACE_NAME=eth1

#External Network The Physical Adapter. example:provider
Physical_NAME=provider

#First Vlan ID in VLAN RANGE for VLAN Network. exmaple:101
minvlan=101

#Last Vlan ID in VLAN RANGE for VLAN Network. example:200
maxvlan=200

#--------------------Cinder Config--------------------##
#Password for Mysql cinder user. exmaple:000000
CINDER_DBPASS=000000

#Password for Keystore cinder user. exmaple:000000
CINDER_PASS=000000

#Cinder Block Disk. example:md126p3
BLOCK_DISK=sdb1        #compute节点的存储块

#--------------------Swift Config---------------------##
#Password for Keystore swift user. exmaple:000000
SWIFT_PASS=000000

#The NODE Object Disk for Swift. example:md126p4.
OBJECT_DISK=sdb2        #compute节点的存储块

#The NODE IP for Swift Storage Network. example:x.x.x.x.
STORAGE_LOCAL_NET_IP=192.168.100.20    #compute节点的IP地址

#--------------------Heat Config----------------------##
#Password for Mysql heat user. exmaple:000000
HEAT_DBPASS=000000

#Password for Keystore heat user. exmaple:000000
HEAT_PASS=000000

#--------------------Zun Config-----------------------##
#Password for Mysql Zun user. exmaple:000000
ZUN_DBPASS=000000

#Password for Keystore Zun user. exmaple:000000
ZUN_PASS=000000

#Password for Mysql Kuryr user. exmaple:000000
KURYR_DBPASS=000000

#Password for Keystore Kuryr user. exmaple:000000
KURYR_PASS=000000

#--------------------Ceilometer Config----------------##
#Password for Gnocchi ceilometer user. exmaple:000000
CEILOMETER_DBPASS=000000

#Password for Keystore ceilometer user. exmaple:000000
CEILOMETER_PASS=000000

#--------------------AODH Config----------------##
#Password for Mysql AODH user. exmaple:000000
AODH_DBPASS=000000

#Password for Keystore AODH user. exmaple:000000
AODH_PASS=000000

#--------------------Barbican Config----------------##
#Password for Mysql Barbican user. exmaple:000000
BARBICAN_DBPASS=000000

#Password for Keystore Barbican user. exmaple:000000
BARBICAN_PASS=000000</code></pre>
    <h3>
     compute节点配置：
    </h3>
    <h4>
     1.关闭防火墙，selinux。
    </h4>
    <pre><code>[root@compute ~]# systemctl stop firewalld
[root@compute ~]# systemctl disable firewalld
Removed symlink /etc/systemd/system/multi-user.target.wants/firewalld.service.
Removed symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service.
[root@compute ~]# setenforce 0
[root@compute ~]# getenforce
Permissive
[root@compute ~]# vi /etc/selinux/config </code></pre>
    <p>
     <img alt="" height="189" src="https://i-blog.csdnimg.cn/blog_migrate/d3c452910877882bc53eee28fd20c2d3.png" width="851"/>
    </p>
    <h4>
     2.硬盘分区。
    </h4>
    <pre><code>[root@compute ~]# fdisk /dev/sdb
欢迎使用 fdisk (util-linux 2.23.2)。

更改将停留在内存中，直到您决定将更改写入磁盘。
使用写入命令前请三思。

Device does not contain a recognized partition table
使用磁盘标识符 0x34bc5373 创建新的 DOS 磁盘标签。

命令(输入 m 获取帮助)：n
Partition type:
   p   primary (0 primary, 0 extended, 4 free)
   e   extended
Select (default p): 
Using default response p
分区号 (1-4，默认 1)：
起始 扇区 (2048-209715199，默认为 2048)：
将使用默认值 2048
Last 扇区, +扇区 or +size{K,M,G} (2048-209715199，默认为 209715199)：+25G
分区 1 已设置为 Linux 类型，大小设为 25 GiB

命令(输入 m 获取帮助)：n
Partition type:
   p   primary (1 primary, 0 extended, 3 free)
   e   extended
Select (default p): 
Using default response p
分区号 (2-4，默认 2)：
起始 扇区 (52430848-209715199，默认为 52430848)：
将使用默认值 52430848
Last 扇区, +扇区 or +size{K,M,G} (52430848-209715199，默认为 209715199)：+25G
分区 2 已设置为 Linux 类型，大小设为 25 GiB

命令(输入 m 获取帮助)：w
The partition table has been altered!

Calling ioctl() to re-read partition table.
正在同步磁盘。
[root@compute ~]# lsblk 
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               8:0    0  200G  0 disk 
├─sda1            8:1    0    1G  0 part /boot
└─sda2            8:2    0  199G  0 part 
  ├─centos-root 253:0    0   50G  0 lvm  /
  ├─centos-swap 253:1    0    2G  0 lvm  [SWAP]
  └─centos-home 253:2    0  147G  0 lvm  /home
sdb               8:16   0  100G  0 disk 
├─sdb1            8:17   0   25G  0 part 
└─sdb2            8:18   0   25G  0 part 
sr0              11:0    1  4.2G  0 rom  
[root@compute ~]# </code></pre>
    <h4>
     3.yum源文件处理。
    </h4>
    <p>
     移除原yum源。
    </p>
    <pre><code>[root@compute ~]# cd /etc/yum.repos.d/
[root@compute yum.repos.d]# mv * /media/
[root@compute yum.repos.d]# ls
[root@compute yum.repos.d]# </code></pre>
    <p>
     写yum源文件。
    </p>
    <pre><code>[root@compute yum.repos.d]# vi local.repo
[root@compute yum.repos.d]# cat local.repo 
[centos]
name=centos
baseurl=ftp://192.168.100.10/centos
gpgcheck=0
enabled=1

[iaas]
name=iaas
baseurl=ftp://192.168.100.10/iaas-repo
gpgcheck=0
enabled=1
[root@compute yum.repos.d]#</code></pre>
    <p>
     清除yum源缓存，验证yum源，下载所需软件包。
    </p>
    <pre><code>[root@compute yum.repos.d]# yum clean all
已加载插件：fastestmirror
正在清理软件源： centos iaas
Cleaning up everything
Maybe you want: rm -rf /var/cache/yum, to also free up space taken by orphaned data from disabled or removed repos
[root@compute yum.repos.d]# yum repolist
已加载插件：fastestmirror
Determining fastest mirrors
centos                                                                          | 3.6 kB  00:00:00     
iaas                                                                            | 2.9 kB  00:00:00     
(1/3): centos/group_gz                                                          | 166 kB  00:00:00     
(2/3): centos/primary_db                                                        | 3.1 MB  00:00:00     
(3/3): iaas/primary_db                                                          | 1.4 MB  00:00:00     
源标识                                           源名称                                           状态
centos                                           centos                                           3,971
iaas                                             iaas                                             3,232
repolist: 7,203
[root@compute yum.repos.d]# yum install -y vim iaas-xiandian</code></pre>
    <h4>
     4.修改脚本。
    </h4>
    <p>
     将controller节点的脚本复制至compute节点。
    </p>
    <pre><code>[root@compute ~]# scp 192.168.100.10:/etc/xiandian/openrc.sh /etc/xiandian/openrc.sh 
The authenticity of host '192.168.100.10 (192.168.100.10)' can't be established.
ECDSA key fingerprint is SHA256:3fUEo7XuafRBPMtY2rSnpjKOdGSrLnE68O2aZAXEp6o.
ECDSA key fingerprint is MD5:4b:73:20:24:30:ad:6a:31:86:fa:26:55:47:92:99:cc.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '192.168.100.10' (ECDSA) to the list of known hosts.
root@192.168.100.10's password: 
openrc.sh                                                            100% 3820     1.9MB/s   00:00    
[root@compute ~]# </code></pre>
    <p>
     需要修改compute节点的脚本。
    </p>
    <pre><code>[root@compute ~]# vim /etc/xiandian/openrc.sh</code></pre>
    <p>
     修改内容如下：
    </p>
    <p>
     <img alt="" height="49" src="https://i-blog.csdnimg.cn/blog_migrate/aebc2b3453f8716caf06fb0e9c5d35c6.png" width="534"/>
    </p>
    <hr/>
    <h2>
     四、刷脚本。
    </h2>
    <h4>
     controller节点需要刷以下脚本。
    </h4>
    <pre><code>[root@controller ~]# iaas-pre-host.sh        #刷完该脚本后需要重启
......

[root@controller ~]# iaas-install-mysql.sh
......

[root@controller ~]# iaas-install-keystone.sh
......
[root@controller ~]# source /etc/keystone/admin-openrc.sh         #使环境生效

[root@controller ~]# iaas-install-glance.sh
......

[root@controller ~]# iaas-install-nova-controller.sh
......

[root@controller ~]# iaas-install-neutron-controller.sh
......

[root@controller ~]# iaas-install-dashboard.sh
......</code></pre>
    <h4>
     compute节点需要刷以下脚本。
    </h4>
    <pre><code>[root@compute ~]# iaas-pre-host.sh         #刷完该脚本后需要重启
......

[root@compute ~]# iaas-install-nova-compute.sh
......

[root@compute ~]# iaas-install-neutron-compute.sh
......</code></pre>
    <hr/>
    <h2>
     五、登录OpenStack云平台
    </h2>
    <p>
     在浏览器中输入http://192.168.100.10/dashboard。
    </p>
    <p>
     <img alt="" height="1029" src="https://i-blog.csdnimg.cn/blog_migrate/ccbe71bd97ef747a5faaf49705b45fff.png" width="1200"/>
    </p>
    <p>
     出现以下图示表示云平台搭建成功。
    </p>
    <p>
     <img alt="" height="868" src="https://i-blog.csdnimg.cn/blog_migrate/0d35aa95d48b239278c9fdc0f14209fd.png" width="1200"/>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
   </div>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f6d305f34353639323131302f:61727469636c652f64657461696c732f313232363238363634

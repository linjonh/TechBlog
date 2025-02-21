---
layout: post
title: 2024-12-24-干货--手把手教你搭建一套OpenStack云平台
date: 2024-12-24 13:15:52 +0800
categories: [云计算]
tags: [openstack,运维,centos,ssh,服务器]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=105563051
  alt: 干货--手把手教你搭建一套OpenStack云平台
artid: 105563051
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     干货 | 手把手教你搭建一套OpenStack云平台
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-atom-one-light" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <h3>
     <a id="1__0">
     </a>
     1 前言
    </h3>
    <p>
     今天我们为一位朋友搭建一套OpenStack云平台。
    </p>
    <p>
     <img alt="[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-lTlvlksV-1587031174131)(https://imgkr.cn-bj.ufileos.com/0b1dfd15-8cb0-4ad5-9c43-31151175ce92.png)]" src="https://i-blog.csdnimg.cn/blog_migrate/7b52857f3fdb14b44669dabd7c545b29.png">
      <br/>
      我们使用Kolla部署stein版本的OpenStack云平台。
     </img>
    </p>
    <blockquote>
     <p>
      kolla是用于自动化部署OpenStack的一个项目，它基于docker和ansible来实现；docker主要负责镜像制作、容器管理。而ansible主要负责环境的部署和管理。
     </p>
    </blockquote>
    <h3>
     <a id="2__7">
     </a>
     2 实验环境介绍
    </h3>
    <p>
     由于我个人笔记本性能有限，因此本次实验采用all-in-one模式部署，即所有服务都部署在一台主机上。
    </p>
    <blockquote>
     <p>
      其实只要all-in-one模式熟练部署，多节点部署上手很快的
     </p>
    </blockquote>
    <h5>
     <a id="21__13">
     </a>
     2.1 系统准备
    </h5>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/f1ec86e84fc5d6cca5f9b03bea249c04.png"/>
    </p>
    <h5>
     <a id="22__17">
     </a>
     2.2 逻辑拓扑图
    </h5>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/fc28fbe6ae5260b29b06fdbe0bf5de7f.png"/>
    </p>
    <h3>
     <a id="3__21">
     </a>
     3 开始部署
    </h3>
    <h5>
     <a id="31_Linux_22">
     </a>
     3.1 Linux系统环境配置
    </h5>
    <p>
     1）主机网卡配置
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/08c6c6e3c0a67aa286c8d2a32a00ff1e.png">
      <br/>
      2）关闭防火墙、selinux及libvirtd服务
     </img>
    </p>
    <pre><code>[root@qll251 ~]# systemctl stop firewalld
[root@qll251 ~]# systemctl disable firewalld

[root@qll251 ~]# vim /etc/selinux/config
改：SELINUX=enforcing
为：SELINUX=disabled

[root@qll251 ~]# systemctl stop libvirtd.service
[root@qll251 ~]# systemctl disable libvirtd.service

[root@qll251 ~]# reboot #重启生效
</code></pre>
    <p>
     3）安装epel源
    </p>
    <pre><code>yum -y install epel-release
</code></pre>
    <p>
     4）CentOS 部分常用软件安装
    </p>
    <pre><code>yum install -y vim net-tools  bash-completion-extras git
</code></pre>
    <blockquote>
     <p>
      小提问：bash-completion-extras这个安装包有什么作用？
     </p>
    </blockquote>
    <p>
     5）配置主机名及hosts文件
    </p>
    <pre><code>[root@qll251 ~]# hostname qll251
[root@qll251 ~]# echo "qll251" &gt; /etc/hostname
[root@qll251 ~]# echo "192.168.1.251  qll251" &gt;&gt; /etc/hosts
</code></pre>
    <p>
     6）同步时间
    </p>
    <pre><code>[root@qll251 ~]# yum -y install ntp
[root@qll251 ~]# systemctl start ntpd
[root@qll251 ~]# systemctl enable ntpd
</code></pre>
    <p>
     7）配置 pip 镜像源，方便快速下载python库
    </p>
    <pre><code>[root@qll251 ~]# mkdir ~/.pip
[root@qll251 ~]# vim ~/.pip/pip.conf
[global]
index-url = http://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host=mirrors.aliyun.com
</code></pre>
    <h5>
     <a id="32_docker_83">
     </a>
     3.2 安装基础包和docker服务
    </h5>
    <p>
     1）安装基础包
    </p>
    <pre><code>yum -y install python-devel libffi-devel gcc openssl-devel  python-pip
</code></pre>
    <p>
     2）升级pip版本，不然后期安装会有报警
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/6c1817cf3ab323eb9a78ff4acbd44235.png"/>
    </p>
    <p>
     3）安装docker-ce
    </p>
    <ul>
     <li>
      安装依赖包
     </li>
    </ul>
    <pre><code>yum -y install yum-utils device-mapper-persistent-data lvm2
</code></pre>
    <ul>
     <li>
      添加docker-ce yum源文件
     </li>
    </ul>
    <pre><code>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre>
    <ul>
     <li>
      安装docker-ce
     </li>
    </ul>
    <pre><code> yum -y install docker-ce
</code></pre>
    <ul>
     <li>
      启动docker服务
     </li>
    </ul>
    <pre><code>systemctl start docker
systemctl enable docker
</code></pre>
    <p>
     4）指定docker 镜像加速器
    </p>
    <pre><code>[root@qll251 ~]# vim /etc/docker/daemon.json
        添加如下内容：
{
  "registry-mirrors": ["https://0i6rnnzu.mirror.aliyuncs.com"]
}
</code></pre>
    <p>
     该加速器地址是我在阿里云上申请的，大家可直接使用
    </p>
    <p>
     <img alt="[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-RdYeEa0E-1587031174136)(https://imgkr.cn-bj.ufileos.com/8217b38e-d071-44ad-8008-a386aa4b6074.png)]" src="https://i-blog.csdnimg.cn/blog_migrate/c0d281b0ab1230b535e9becc65b00145.png"/>
    </p>
    <p>
     5）设置docker volume卷挂载方式
    </p>
    <pre><code>[root@qll251 ~]# mkdir /etc/systemd/system/docker.service.d
[root@qll251 ~]# vim  /etc/systemd/system/docker.service.d/kolla.conf
  # 添加如下内容
[Service]
MountFlags=shared
</code></pre>
    <blockquote>
     <p>
      解释一下：MountFlags=shared，表示当宿主机新增分区时，docker服务无需重启即可识别。添加此参数后期OpenStack中使用cinder存储时，新加磁盘也比较方便
     </p>
    </blockquote>
    <p>
     6）重启使配置生效
    </p>
    <pre><code>systemctl daemon-reload
systemctl restart docker
systemctl enable docker
</code></pre>
    <h5>
     <a id="33_github_KollaKollaAnsible_154">
     </a>
     3.3 从github 获取Kolla和Kolla-Ansible
    </h5>
    <p>
     1）安装ansible
    </p>
    <pre><code>yum -y install ansible
</code></pre>
    <p>
     2）下载kolla及kolla-ansible代码
    </p>
    <pre><code>git clone https://github.com/openstack/kolla -b stable/stein
git clone https://github.com/openstack/kolla-ansible -b stable/stein
  # 如果已有镜像，只执行第二步即可
</code></pre>
    <p>
     <img alt="[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-fQTQkCid-1587031174136)(https://imgkr.cn-bj.ufileos.com/7192658f-9ece-47e7-9961-6c60eb0f2bd5.png)]" src="https://i-blog.csdnimg.cn/blog_migrate/f2dc0a2b9188b6eab28fd5aeb248fb49.png"/>
    </p>
    <p>
     3）手动安装kolla-ansible
    </p>
    <pre><code>python ~/kolla-ansible/setup.py install
</code></pre>
    <p>
     4）安装kolla-ansible需要依赖包
    </p>
    <pre><code>
[root@qll251 ~]# pip install -r /root/kolla-ansible/requirements.txt
</code></pre>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/bf101e8c3e7d138ba165742010668246.png"/>
    </p>
    <p>
     如果出现此报错，我们强制更新即可；
    </p>
    <p>
     执行：
    </p>
    <pre><code>[root@qll251 ~]# pip install --ignore-installed PyYAML
</code></pre>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/2c286affc841daf32b2267c0323248d3.png"/>
    </p>
    <p>
     5）安装kolla需要依赖包
    </p>
    <pre><code>[root@qll251 ~]# pip install -r /root/kolla/requirements.txt
</code></pre>
    <p>
     注意：如果出现类似如下错误：
    </p>
    <p>
     <code>
      requests 2.20.0 has requirement idna&lt;2.8,&gt;=2.5, but you'll have idna 2.4 which is incompatible
     </code>
    </p>
    <p>
     同样，强制更新requets库即可；
    </p>
    <pre><code>[root@qll251 ~]# pip install --ignore-installed requests
</code></pre>
    <p>
     6）拷贝配置文件
    </p>
    <pre><code>[root@qll251 ~]# cd ~/kolla-ansible/
[root@qll251 kolla-ansible]# cp -r ./etc/kolla/* /etc/kolla/
[root@qll251 kolla-ansible]# cp ./ansible/inventory/* /etc/kolla/

#看下我们都拷贝了哪些文件
[root@qll251 ~]# ls /etc/kolla/
all-in-one  globals.yml  multinode  passwords.yml
[root@qll251 ~]#
</code></pre>
    <p>
     配置文件解释：
    </p>
    <ul>
     <li>
      <p>
       all-in-one #安装单节点OpenStack的ansible自动安装配置文件
      </p>
     </li>
     <li>
      <p>
       multinode # 安装多节点OpenStack的ansible自动安装配置文件
      </p>
     </li>
     <li>
      <p>
       globals.yml # 部署OpenStack的自定义配置文件
      </p>
     </li>
     <li>
      <p>
       passwords.yml #存放OpenStack各个服务的密码
      </p>
     </li>
    </ul>
    <p>
     6）生成随机密码
    </p>
    <pre><code>[root@qll251 ~]# kolla-genpwd
</code></pre>
    <blockquote>
     <p>
      使用kolla提供的密码生成工具自动生成OpenStack各服务的密码，如果密码不填充，后面的部署环境检查时不会通过的。
     </p>
    </blockquote>
    <p>
     7）修改随机密码文件
    </p>
    <pre><code># 为了方便登录Dashboard，我们将密码修改为123123
[root@qll251 ~]# vim /etc/kolla/passwords.yml
 165 keystone_admin_password: 123123
</code></pre>
    <p>
     8）修改globals.yml配置文件
    </p>
    <pre><code>[root@qll251 ~]#  vim /etc/kolla/globals.yml
# 指定镜像的系统版本
 15 kolla_base_distro: "centos"
# 指定安装方式
 18 kolla_install_type: "binary"
# 指定安装stein版本的OpenStack
 21 openstack_release: "stein"
# 本次实验采用all-in-one模式，未启用高可用。填写宿主机IP即可
 31 kolla_internal_vip_address: "192.168.1.251"
# OpenStack内部管理网络
 89 network_interface: "eth0"
# Neutron外网网络
107 neutron_external_interface: "eth1"
# 本次实验采用all-in-one模式，未启用高可用
192 enable_haproxy: "no"
</code></pre>
    <h5>
     <a id="34_OpenStack_272">
     </a>
     3.4 开始部署OpenStack
    </h5>
    <p>
     1）生成SSH Key，并授信本节点
    </p>
    <pre><code>ssh-keygen
ssh-copy-id root@192.168.1.251
</code></pre>
    <p>
     2）配置单节点all-in-one配置文件
    </p>
    <pre><code>[root@qll251 ~]# vim /etc/kolla/all-in-one
# 将文件中所有的localhost替换成qll251
:1,$s/localhost/qll251/

# 去掉文件中所有包含“ansible_connection=local”
:1,$s/ansible_connection=local//
</code></pre>
    <blockquote>
     <p>
      其实如果是单节点部署，这个步骤是可选的。带大家过一遍配置文件吧
     </p>
    </blockquote>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/e0f24fed447d0d5be816653191ba9a47.png"/>
    </p>
    <p>
     3）带有kolla的引导服务器部署依赖关系
    </p>
    <pre><code>[root@qll251 ~]# kolla-ansible -i /etc/kolla/all-in-one bootstrap-servers
</code></pre>
    <p>
     执行结果如下：
    </p>
    <p>
     <img alt="[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-pkzck8Vd-1587031174138)(https://imgkr.cn-bj.ufileos.com/001f295e-2df9-4cfe-a8b5-c2af30061042.png)]" src="https://i-blog.csdnimg.cn/blog_migrate/78ef311a9f9fc3d0ed4b1a983fc63fb5.png"/>
    </p>
    <p>
     4）对主机执行预部署检查
    </p>
    <pre><code>[root@qll251 ~]# kolla-ansible -i /etc/kolla/all-in-one prechecks
</code></pre>
    <p>
     执行结果如下：
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/840013037684b785f474992b9b482ccc.png"/>
    </p>
    <blockquote>
     <p>
      其实如果能走到这一步，后面的实验基本就没啥问题了，加油！
     </p>
    </blockquote>
    <p>
     5）拉取OpenStack镜像
    </p>
    <pre><code>[root@qll251 ~]# kolla-ansible -i /etc/kolla/all-in-one  pull
</code></pre>
    <p>
     我们看下它在执行什么
    </p>
    <p>
     [外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-FkBFhzT0-1587031174141)(https://imgkr.cn-bj.ufileos.com/8b766bc2-2152-4ce3-80b8-4f1184854628.png)]
    </p>
    <p>
     正在下载OpenStack镜像，等等哦
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/06baeb9334431cd80312b229ba3a1fb1.png"/>
    </p>
    <blockquote>
     <p>
      聪明的小伙伴会趁它在自动部署过程中，思考下当命令敲下去以后它都做了哪些操作
     </p>
    </blockquote>
    <p>
     <img alt="[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-Ayz9QlVW-1587031174143)(https://imgkr.cn-bj.ufileos.com/d46809ca-8318-47b7-b031-5c43996b15c2.png)]" src="https://i-blog.csdnimg.cn/blog_migrate/f8f943bf85d9644b5eb9883e960a8851.png"/>
    </p>
    <p>
     6）执行OpenStack部署
    </p>
    <pre><code>kolla-ansible -i /etc/kolla/all-in-one  deploy
</code></pre>
    <p>
     7）验证部署
    </p>
    <pre><code>kolla-ansible -i /etc/kolla/all-in-one  post-deploy
</code></pre>
    <blockquote>
     <p>
      执行结果如下，则说明您的OpenStack环境已部署成功！Congratulations!
     </p>
    </blockquote>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/928d687cfc270c2114effdf070d386c5.png"/>
    </p>
    <p>
     同时也生成了admin用户的凭证， 即/etc/kolla/admin-openrc.sh文件
    </p>
    <p>
     我们看下该凭证：
    </p>
    <p>
     <img alt="[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-jeBffxx2-1587031174144)(https://imgkr.cn-bj.ufileos.com/0eff5405-03f6-4b78-b106-3f7270cba356.png)]" src="https://i-blog.csdnimg.cn/blog_migrate/36bed3a1668743dfe1b83b92f46e0e7d.png"/>
    </p>
    <h3>
     <a id="4_OpenStack_369">
     </a>
     4 登录OpenStack云平台
    </h3>
    <p>
     在浏览器中输入：http://192.168.1.251
    </p>
    <p>
     用户名：admin
    </p>
    <p>
     密码：123123
    </p>
    <blockquote>
     <p>
      登录密码我们在passwords.ym中指定为123123,在实际生产环境中可不能设置这么简单哦。
     </p>
    </blockquote>
    <p>
     <img alt="[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-enDbxxRY-1587031174144)(https://imgkr.cn-bj.ufileos.com/13cc1e31-72c3-48e9-8163-6b380029aff9.png)]" src="https://i-blog.csdnimg.cn/blog_migrate/ee5b8a0c19ad4db4724408e6b1360d8f.png"/>
    </p>
    <blockquote>
     <p>
      到此已完成OpenStack云平台的部署，明天我们再来讨论下OpenStack 云平台基本使用方法及利用OpenStack客户端命令创建一台测试云主机。
     </p>
    </blockquote>
    <h3>
     <a id="_385">
     </a>
     最后的话
    </h3>
    <blockquote>
     <p>
      别看我搭建这么顺利呀，真到你部署了，可能会满屏报错哦。一定要细心，一不留神就会出现如下情况：
     </p>
    </blockquote>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/267595f8cc7f68134f7173a9531ec9ad.png"/>
    </p>
    <blockquote>
     <p>
      当然也不要有心里负担，以上报错基本都是不细心导致的，比如配置文件中多敲了一个空格或者中英符合复用等。要有信心并且细心哦，相信你可以的！
     </p>
    </blockquote>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f33383838393330302f:61727469636c652f64657461696c732f313035353633303531</p>

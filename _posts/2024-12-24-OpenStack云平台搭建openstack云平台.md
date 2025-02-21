---
layout: post
title: 2024-12-24-OpenStack云平台搭建openstack云平台
date: 2024-12-24 13:15:52 +0800
categories: [云计算,Linux]
tags: [linux,云计算,服务器]
image:
  path: https://img-blog.csdnimg.cn/eab5a78fd5a14c498ed7a0a07cef8a62.png?x-oss-process=image/resize,m_fixed,h_150
  alt: OpenStack云平台搭建openstack云平台
artid: 126123947
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【OpenStack云平台】搭建openstack云平台
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
    <h3>
     <a id="1__0">
     </a>
     1. 系统镜像
    </h3>
    <p>
     安装运行环境系统要求为CentOS7.5，内核版本不低于3.10。
     <br/>
     CentOS-7.5-x86_64-DVD-1804.iso
     <br/>
     Chinaskill_Cloud_iaas.iso
    </p>
    <h3>
     <a id="2__4">
     </a>
     2. 网络架构及硬件配置
    </h3>
    <table>
     <thead>
      <tr>
       <th>
        主机名
       </th>
       <th>
        内存
       </th>
       <th>
        硬盘1
       </th>
       <th>
        硬盘2
       </th>
       <th>
        IP地址(VMnet1)
       </th>
       <th>
        IP地址(VMnet8)
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        controller
       </td>
       <td>
        4G
       </td>
       <td>
        100G
       </td>
       <td>
        无
       </td>
       <td>
        192.168.100.10
       </td>
       <td>
        192.168.200.10
       </td>
      </tr>
      <tr>
       <td>
        compute
       </td>
       <td>
        4G
       </td>
       <td>
        100G
       </td>
       <td>
        200G
       </td>
       <td>
        192.168.100.20
       </td>
       <td>
        192.168.200.20
       </td>
      </tr>
     </tbody>
    </table>
    <h3>
     <a id="3__9">
     </a>
     3. 基础环境部署
    </h3>
    <h4>
     <a id="31__10">
     </a>
     3.1 配置映射、主机名、网络、关闭防火墙
    </h4>
    <p>
     <strong>
      computer节点和compute节点：
     </strong>
     <br/>
     修改/etc/hosts文件添加映射
     <br/>
     192.168.100.10 controller
     <br/>
     192.168.100.20 compute
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f7d4927b9c172898d432478d68c76afb.png"/>
    </p>
    <h5>
     <a id="311_controller_16">
     </a>
     3.1.1 controller节点
    </h5>
    <p>
     <strong>
      修改主机名：
     </strong>
    </p>
    <pre><code class="prism language-c">hostnamectl set<span class="token operator">-</span>hostname controller
</code></pre>
    <p>
     <strong>
      配置网络：
     </strong>
     <br/>
     修改BOOTPROTO=dhcp （dhcp改为static） ONBOOT=no （no改为yes）
     <br/>
     <strong>
      ens33添加：
     </strong>
     <br/>
     IPADDR=192.168.100.10
     <br/>
     PREFIX=24
     <br/>
     GATEWAY=192.168.100.1
     <br/>
     <strong>
      ens34添加：
     </strong>
     <br/>
     IPADDR=192.168.200.10
     <br/>
     PREFIX=24
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d414fa4d0755e453b216121548eb20dd.png">
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/70d6171ec0324cd822f8b13aed1a36ce.png"/>
     </img>
    </p>
    <p>
     <strong>
      关闭防火墙及修改配置文件：
     </strong>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># systemctl stop firewalld	关闭防火墙
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># systemctl disable firewalld
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># vi <span class="token operator">/</span>etc<span class="token operator">/</span>selinux<span class="token operator">/</span>config      
SELINUX<span class="token operator">=</span>enforcing  （enforcing 改为disabled）
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># setenforce <span class="token number">0</span>	#立即生效
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># getenforce
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/456748be1db9b1eca0d72f1c83bc983c.png"/>
    </p>
    <h5>
     <a id="312_compute__46">
     </a>
     3.1.2 compute 节点
    </h5>
    <p>
     <strong>
      修改主机名：
     </strong>
    </p>
    <pre><code class="prism language-c">hostnamectl set<span class="token operator">-</span>hostname compute
</code></pre>
    <p>
     <strong>
      配置网络：
     </strong>
     <br/>
     修改BOOTPROTO=dhcp （dhcp改为static） ONBOOT=no （no改为yes）
     <br/>
     <strong>
      ens33添加：
     </strong>
     <br/>
     IPADDR=192.168.100.20
     <br/>
     PREFIX=24
     <br/>
     GATEWAY=192.168.100.1
     <br/>
     <strong>
      ens34添加：
     </strong>
     <br/>
     IPADDR=192.168.200.20
     <br/>
     PREFIX=24
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/4b7951e24eef691d65292928c5e3dad9.png">
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/6f898085260ebbca4ead6fb73c07ac55.png"/>
     </img>
    </p>
    <p>
     <strong>
      关闭防火墙及修改配置文件：
     </strong>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># systemctl stop firewalld	 #关闭防火墙
<span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># systemctl disable firewalld
<span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># vi <span class="token operator">/</span>etc<span class="token operator">/</span>selinux<span class="token operator">/</span>config      
SELINUX<span class="token operator">=</span>enforcing  （enforcing 改为disabled）
<span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># setenforce <span class="token number">0</span>	 #立即生效
<span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># getenforce
</code></pre>
    <h4>
     <a id="32_yum_73">
     </a>
     3.2 挂载镜像、配置yum源
    </h4>
    <h5>
     <a id="321_controller_74">
     </a>
     3.2.1 controller节点
    </h5>
    <p>
     <strong>
      上传centos7.5镜像和chinaskills_cloud_iaas.iso镜像至controller节点。
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d626b92fcc4c04703beceb141a080df7.png">
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/784cafdf823e287dca8316e78e12b083.png">
       <br/>
       <strong>
        chinaskills_cloud_iaas.iso镜像上传方式如上。
       </strong>
      </img>
     </img>
    </p>
    <p>
     <strong>
      查看镜像是否已上传
     </strong>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/eb5b6b971cc7cfcb51e30334c446c9c5.png"/>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># mkdir <span class="token operator">/</span>opt<span class="token operator">/</span><span class="token punctuation">{<!-- --></span>iaas<span class="token punctuation">,</span>centos<span class="token punctuation">}</span>	   #创建两个挂载镜像的文件夹
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># mv <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token punctuation">.</span>repos<span class="token punctuation">.</span>d<span class="token operator">/</span>CentOS<span class="token operator">-</span><span class="token operator">*</span> <span class="token operator">/</span>home	   #备份原yum源配置文件
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># vi <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token punctuation">.</span>repos<span class="token punctuation">.</span>d<span class="token operator">/</span>local<span class="token punctuation">.</span>repo	   #创建本地yum源配置文件

<span class="token punctuation">[</span>iaas<span class="token punctuation">]</span>
name<span class="token operator">=</span>iaas
baseurl<span class="token operator">=</span>file<span class="token operator">:</span><span class="token comment">///opt/iaas/iaas-repo</span>
gpgcheck<span class="token operator">=</span><span class="token number">0</span>
enabled<span class="token operator">=</span><span class="token number">1</span>
<span class="token punctuation">[</span>centos<span class="token punctuation">]</span>
name<span class="token operator">=</span>centos
baseurl<span class="token operator">=</span>file<span class="token operator">:</span><span class="token comment">///opt/centos</span>
gpgcheck<span class="token operator">=</span><span class="token number">0</span>
enabled<span class="token operator">=</span><span class="token number">1</span>

<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># mount <span class="token operator">-</span>o loop <span class="token operator">/</span>CentOS<span class="token operator">-</span><span class="token number">7.5</span><span class="token operator">-</span>x86_64<span class="token operator">-</span>DVD<span class="token operator">-</span><span class="token number">1804.</span>iso <span class="token operator">/</span>opt<span class="token operator">/</span>centos
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># mount <span class="token operator">-</span>o loop <span class="token operator">/</span>Chinaskill_Cloud_iaas<span class="token punctuation">.</span>iso <span class="token operator">/</span>opt<span class="token operator">/</span>iaas

<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># yum clean all	#更新yum源配置
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># yum repolist   #显示仓库
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5aef9e03df59cdd2f5ef11dd75417bd9.png"/>
    </p>
    <pre><code class="prism language-c">#搭建ftp服务器
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># yum <span class="token operator">-</span>y install vsftpd
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># vi <span class="token operator">/</span>etc<span class="token operator">/</span>vsftpd<span class="token operator">/</span>vsftpd<span class="token punctuation">.</span>conf
添加 anon_root<span class="token operator">=</span><span class="token operator">/</span>opt<span class="token operator">/</span>
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># systemctl restart vsftpd
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># systemctl enable vsftpd
</code></pre>
    <h5>
     <a id="322_compute_115">
     </a>
     3.2.2 compute节点
    </h5>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># mv <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token punctuation">.</span>repos<span class="token punctuation">.</span>d<span class="token operator">/</span>CentOS<span class="token operator">-</span><span class="token operator">*</span> <span class="token operator">/</span>home	   #备份原yum源配置文件
<span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># vi <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token punctuation">.</span>repos<span class="token punctuation">.</span>d<span class="token operator">/</span>local<span class="token punctuation">.</span>repo	   #创建本地yum源配置文件

<span class="token punctuation">[</span>centos<span class="token punctuation">]</span>
name<span class="token operator">=</span>centos
baseurl<span class="token operator">=</span>ftp<span class="token operator">:</span><span class="token comment">//192.168.100.10/centos</span>
gpgcheck<span class="token operator">=</span><span class="token number">0</span>
enabled<span class="token operator">=</span><span class="token number">1</span>
<span class="token punctuation">[</span>iaas<span class="token punctuation">]</span>
name<span class="token operator">=</span>iaas
baseurl<span class="token operator">=</span>ftp<span class="token operator">:</span><span class="token comment">//192.168.100.10/iaas-repo</span>
gpgcheck<span class="token operator">=</span><span class="token number">0</span>
enabled<span class="token operator">=</span><span class="token number">1</span>

<span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># yum clean all	#更新yum源配置
<span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># yum repolist   #显示仓库
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/11f843aad97aeb8df6e06390c45040c2.png"/>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/51365fb860391ea108b0b33596a23587.png"/>
    </p>
    <h4>
     <a id="33__136">
     </a>
     3.3 计算节点分区
    </h4>
    <p>
     在compute节点上利用空白分区划分2个100G分区。
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># fdisk <span class="token operator">/</span>dev<span class="token operator">/</span>sdb
欢迎使用 <span class="token function">fdisk</span> <span class="token punctuation">(</span>util<span class="token operator">-</span>linux <span class="token number">2.23</span><span class="token number">.2</span><span class="token punctuation">)</span>。
 
更改将停留在内存中，直到您决定将更改写入磁盘。
使用写入命令前请三思。
 
Device does not contain a recognized partition table
使用磁盘标识符 <span class="token number">0x34bc5373</span> 创建新的 DOS 磁盘标签。
 
命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：n
Partition type<span class="token operator">:</span>
   p   <span class="token function">primary</span> <span class="token punctuation">(</span><span class="token number">0</span> primary<span class="token punctuation">,</span> <span class="token number">0</span> extended<span class="token punctuation">,</span> <span class="token number">4</span> free<span class="token punctuation">)</span>
   e   extended
<span class="token function">Select</span> <span class="token punctuation">(</span><span class="token keyword">default</span> p<span class="token punctuation">)</span><span class="token operator">:</span> 
Using <span class="token keyword">default</span> response p
分区号 <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">4</span>，默认 <span class="token number">1</span><span class="token punctuation">)</span>：
起始 扇区 <span class="token punctuation">(</span><span class="token number">2048</span><span class="token operator">-</span><span class="token number">209715199</span>，默认为 <span class="token number">2048</span><span class="token punctuation">)</span>：
将使用默认值 <span class="token number">2048</span>
Last 扇区<span class="token punctuation">,</span> <span class="token operator">+</span>扇区 or <span class="token operator">+</span>size<span class="token punctuation">{<!-- --></span>K<span class="token punctuation">,</span>M<span class="token punctuation">,</span>G<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">2048</span><span class="token operator">-</span><span class="token number">209715199</span>，默认为 <span class="token number">209715199</span><span class="token punctuation">)</span>：<span class="token operator">+</span><span class="token number">25</span>G
分区 <span class="token number">1</span> 已设置为 Linux 类型，大小设为 <span class="token number">25</span> GiB
 
命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：n
Partition type<span class="token operator">:</span>
   p   <span class="token function">primary</span> <span class="token punctuation">(</span><span class="token number">1</span> primary<span class="token punctuation">,</span> <span class="token number">0</span> extended<span class="token punctuation">,</span> <span class="token number">3</span> free<span class="token punctuation">)</span>
   e   extended
<span class="token function">Select</span> <span class="token punctuation">(</span><span class="token keyword">default</span> p<span class="token punctuation">)</span><span class="token operator">:</span> 
Using <span class="token keyword">default</span> response p
分区号 <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">4</span>，默认 <span class="token number">2</span><span class="token punctuation">)</span>：
起始 扇区 <span class="token punctuation">(</span><span class="token number">52430848</span><span class="token operator">-</span><span class="token number">209715199</span>，默认为 <span class="token number">52430848</span><span class="token punctuation">)</span>：
将使用默认值 <span class="token number">52430848</span>
Last 扇区<span class="token punctuation">,</span> <span class="token operator">+</span>扇区 or <span class="token operator">+</span>size<span class="token punctuation">{<!-- --></span>K<span class="token punctuation">,</span>M<span class="token punctuation">,</span>G<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">52430848</span><span class="token operator">-</span><span class="token number">209715199</span>，默认为 <span class="token number">209715199</span><span class="token punctuation">)</span>：<span class="token operator">+</span><span class="token number">25</span>G
分区 <span class="token number">2</span> 已设置为 Linux 类型，大小设为 <span class="token number">25</span> GiB
 
命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：w
The partition table has been altered<span class="token operator">!</span>
 
Calling <span class="token function">ioctl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> to re<span class="token operator">-</span>read partition table<span class="token punctuation">.</span>
正在同步磁盘。
<span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># lsblk 
NAME            MAJ<span class="token operator">:</span>MIN RM  SIZE RO TYPE MOUNTPOINT
sda               <span class="token number">8</span><span class="token operator">:</span><span class="token number">0</span>    <span class="token number">0</span>  <span class="token number">200</span>G  <span class="token number">0</span> disk 
├─sda1            <span class="token number">8</span><span class="token operator">:</span><span class="token number">1</span>    <span class="token number">0</span>    <span class="token number">1</span>G  <span class="token number">0</span> part <span class="token operator">/</span>boot
└─sda2            <span class="token number">8</span><span class="token operator">:</span><span class="token number">2</span>    <span class="token number">0</span>  <span class="token number">199</span>G  <span class="token number">0</span> part 
  ├─centos<span class="token operator">-</span>root <span class="token number">253</span><span class="token operator">:</span><span class="token number">0</span>    <span class="token number">0</span>   <span class="token number">50</span>G  <span class="token number">0</span> lvm  <span class="token operator">/</span>
  ├─centos<span class="token operator">-</span>swap <span class="token number">253</span><span class="token operator">:</span><span class="token number">1</span>    <span class="token number">0</span>    <span class="token number">2</span>G  <span class="token number">0</span> lvm  <span class="token punctuation">[</span>SWAP<span class="token punctuation">]</span>
  └─centos<span class="token operator">-</span>home <span class="token number">253</span><span class="token operator">:</span><span class="token number">2</span>    <span class="token number">0</span>  <span class="token number">147</span>G  <span class="token number">0</span> lvm  <span class="token operator">/</span>home
sdb               <span class="token number">8</span><span class="token operator">:</span><span class="token number">16</span>   <span class="token number">0</span>  <span class="token number">100</span>G  <span class="token number">0</span> disk 
├─sdb1            <span class="token number">8</span><span class="token operator">:</span><span class="token number">17</span>   <span class="token number">0</span>   <span class="token number">25</span>G  <span class="token number">0</span> part 
└─sdb2            <span class="token number">8</span><span class="token operator">:</span><span class="token number">18</span>   <span class="token number">0</span>   <span class="token number">25</span>G  <span class="token number">0</span> part 
sr0              <span class="token number">11</span><span class="token operator">:</span><span class="token number">0</span>    <span class="token number">1</span>  <span class="token number">4.2</span>G  <span class="token number">0</span> rom  
</code></pre>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/01af3886f902481aaa408d747752b7fe.png"/>
    </p>
    <h4>
     <a id="34__191">
     </a>
     3.4 编辑环境变量
    </h4>
    <p>
     <strong>
      controller和compute节点都要操作
     </strong>
    </p>
    <p>
     编辑文件/etc/xiandian/openrc.sh,此文件是安装过程中的各项参数，根据每项参数上一行的说明及服务器实际情况进行配置。
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># yum <span class="token operator">-</span>y install iaas<span class="token operator">-</span>xiandian
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># vi <span class="token operator">/</span>etc<span class="token operator">/</span>xiandian<span class="token operator">/</span>openrc<span class="token punctuation">.</span>sh
<span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># yum <span class="token operator">-</span>y install iaas<span class="token operator">-</span>xiandian
<span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># vi <span class="token operator">/</span>etc<span class="token operator">/</span>xiandian<span class="token operator">/</span>openrc<span class="token punctuation">.</span>sh

HOST_IP<span class="token operator">=</span>（控制节点IP地址）
HOST_PASS<span class="token operator">=</span><span class="token number">000000</span>
HOST_NAME<span class="token operator">=</span>（控制节点主机名）
HOST_IP_NODE<span class="token operator">=</span>（计算节点IP地址）
HOST_PASS_NODE<span class="token operator">=</span><span class="token number">000000</span>
HOST_NAME_NODE<span class="token operator">=</span>（控制节点主机名）
network_segment_IP<span class="token operator">=</span><span class="token number">192.168</span><span class="token number">.100</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">24</span>
RABBIT_USER<span class="token operator">=</span>openstack
RABBIT_PASS<span class="token operator">=</span><span class="token number">000000</span>
DB_PASS<span class="token operator">=</span><span class="token number">000000</span>
DOMAIN_NAME<span class="token operator">=</span>demo
ADMIN_PASS<span class="token operator">=</span><span class="token number">000000</span>
DEMO_PASS<span class="token operator">=</span><span class="token number">000000</span>
KEYSTONE_DBPASS<span class="token operator">=</span><span class="token number">000000</span>
GLANCE_DBPASS<span class="token operator">=</span><span class="token number">000000</span>
GLANCE_PASS<span class="token operator">=</span><span class="token number">000000</span>
NOVA_DBPASS<span class="token operator">=</span><span class="token number">000000</span>
NOVA_PASS<span class="token operator">=</span><span class="token number">000000</span>
NEUTRON_DBPASS<span class="token operator">=</span><span class="token number">000000</span>
NEUTRON_PASS<span class="token operator">=</span><span class="token number">000000</span>
METADATA_SECRET<span class="token operator">=</span><span class="token number">000000</span>
INTERFACE_IP<span class="token operator">=</span>（当前节点IP地址）
INTERFACE_NAME<span class="token operator">=</span>ens34 （外部网络网卡名称）
Physical_NAME<span class="token operator">=</span>provider （外部网络适配器名称）
minvlan<span class="token operator">=</span>（vlan网络范围的第一个vlanID）
maxvlan<span class="token operator">=</span>vlan网络范围的最后一个vlanID）
CINDER_DBPASS<span class="token operator">=</span><span class="token number">000000</span>
CINDER_PASS<span class="token operator">=</span><span class="token number">000000</span>
BLOCK_DISK<span class="token operator">=</span>（计算节点第一块磁盘分区名）
SWIFT_PASS<span class="token operator">=</span><span class="token number">000000</span>
OBJECT_DISK<span class="token operator">=</span>（计算节点第二块磁盘分区名）
STORAGE_LOCAL_NET_IP<span class="token operator">=</span>（计算节点IP地址）
HEAT_DBPASS<span class="token operator">=</span><span class="token number">000000</span>
HEAT_PASS<span class="token operator">=</span><span class="token number">000000</span>
ZUN_DBPASS<span class="token operator">=</span><span class="token number">000000</span>
ZUN_PASS<span class="token operator">=</span><span class="token number">000000</span>
KURYR_DBPASS<span class="token operator">=</span><span class="token number">000000</span>
KURYR_PASS<span class="token operator">=</span><span class="token number">000000</span>
CEILOMETER_DBPASS<span class="token operator">=</span><span class="token number">000000</span>
CEILOMETER_PASS<span class="token operator">=</span><span class="token number">000000</span>
AODH_DBPASS<span class="token operator">=</span><span class="token number">000000</span>
AODH_PASS<span class="token operator">=</span><span class="token number">000000</span>
</code></pre>
    <h4>
     <a id="35__244">
     </a>
     3.5 通过脚本安装服务
    </h4>
    <h5>
     <a id="351_iaasprehostsh_245">
     </a>
     3.5.1 执行脚本iaas-pre-host.sh进行安装
    </h5>
    <p>
     <strong>
      controller节点：
     </strong>
     <br/>
     安装完成后同时重启，重启后需重新挂载iso镜像
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># iaas<span class="token operator">-</span>pre<span class="token operator">-</span>host<span class="token punctuation">.</span>sh
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># reboot  #重启
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># mount <span class="token operator">-</span>o loop CentOS<span class="token operator">-</span><span class="token number">7</span><span class="token operator">-</span>x86_64<span class="token operator">-</span>DVD<span class="token operator">-</span><span class="token number">1804.</span>iso <span class="token operator">/</span>opt<span class="token operator">/</span>centos<span class="token operator">/</span>
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># mount <span class="token operator">-</span>o loop chinaskills_cloud_iaas<span class="token punctuation">.</span>iso <span class="token operator">/</span>opt<span class="token operator">/</span>iaas<span class="token operator">/</span>
</code></pre>
    <p>
     <strong>
      compute节点：
     </strong>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># iaas<span class="token operator">-</span>pre<span class="token operator">-</span>host<span class="token punctuation">.</span>sh
<span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># reboot  #重启
</code></pre>
    <h5>
     <a id="352_Mysql_260">
     </a>
     3.5.2 Mysql数据库服务
    </h5>
    <p>
     <strong>
      controller节点：
     </strong>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># iaas<span class="token operator">-</span>install<span class="token operator">-</span>mysql<span class="token punctuation">.</span>sh
</code></pre>
    <h5>
     <a id="353_keystone_265">
     </a>
     3.5.3 keystone认证服务
    </h5>
    <p>
     <strong>
      controller节点：
     </strong>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># iaas<span class="token operator">-</span>install<span class="token operator">-</span>keystone<span class="token punctuation">.</span>s
</code></pre>
    <h5>
     <a id="354_Glance_272">
     </a>
     3.5.4 Glance镜像服务
    </h5>
    <p>
     <strong>
      controller节点：
     </strong>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># iaas<span class="token operator">-</span>install<span class="token operator">-</span>glance<span class="token punctuation">.</span>sh
</code></pre>
    <h5>
     <a id="355_nova_279">
     </a>
     3.5.5 nova计算服务
    </h5>
    <p>
     <strong>
      controller节点：
     </strong>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># iaas<span class="token operator">-</span>install<span class="token operator">-</span>nova<span class="token operator">-</span>controller<span class="token punctuation">.</span>sh
</code></pre>
    <p>
     <strong>
      compute节点：
     </strong>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># iaas<span class="token operator">-</span>install<span class="token operator">-</span>nova<span class="token operator">-</span>compute<span class="token punctuation">.</span>sh 
</code></pre>
    <h5>
     <a id="356_Neutron_292">
     </a>
     3.5.6 Neutron网络服务
    </h5>
    <p>
     <strong>
      controller节点：
     </strong>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># iaas<span class="token operator">-</span>install<span class="token operator">-</span>neutron<span class="token operator">-</span>controller<span class="token punctuation">.</span>sh
</code></pre>
    <p>
     <strong>
      compute节点：
     </strong>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@compute <span class="token operator">~</span><span class="token punctuation">]</span># iaas<span class="token operator">-</span>install<span class="token operator">-</span>neutron<span class="token operator">-</span>compute<span class="token punctuation">.</span>sh
</code></pre>
    <h5>
     <a id="357_Dashboard_303">
     </a>
     3.5.7 Dashboard服务
    </h5>
    <p>
     <strong>
      controller节点：
     </strong>
    </p>
    <pre><code class="prism language-c"><span class="token punctuation">[</span>root@controller <span class="token operator">~</span><span class="token punctuation">]</span># iaas<span class="token operator">-</span>install<span class="token operator">-</span>dashboard<span class="token punctuation">.</span>sh
</code></pre>
    <p>
     在浏览器中输入http://192.168.100.10/dashboard
    </p>
    <p>
     <strong>
      注：检查防火墙规则，确保允许http服务相关端口通行，或者关闭防火墙
     </strong>
    </p>
    <p>
     Domain：demo
     <br/>
     用户名：admin
     <br/>
     密码：000000
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/7ede7132acb714b648821371afb319fc.png"/>
     <br/>
     出现以下图示表示云平台搭建成功。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b801618497fc38e9a0755bdb59c10e3b.png"/>
    </p>
    <blockquote>
     <p>
      期待下次的分享，别忘了三连支持博主呀~
      <br/>
      我是
      <strong>
       <a href="https://blog.csdn.net/qq_52716296?type=blog">
        念舒_C.ying
       </a>
      </strong>
      ，期待你的关注~💪💪💪
     </p>
    </blockquote>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f71715f35323731363239362f:61727469636c652f64657461696c732f313236313233393437

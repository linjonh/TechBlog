---
layout: post
title: 2024-12-24-云平台搭建选型openstackkvm还是k8sdocker-
date: 2024-12-24 13:15:52 +0800
categories: [云计算]
tags: [云计算,openstack,k8s,kvm,docker]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=88944460
  alt: 云平台搭建选型openstackkvm还是k8sdocker-
artid: 88944460
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     云平台搭建选型：openstack+kvm还是k8s+docker ？
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
    <p>
     最近在研究云计算方面的技术，迷惑于云平台的技术选型。一般来说搭建iaas型的云平台选择 openstack+kvm。而搭建paas型的云平台选择k8s+docker。openstack是管理虚拟机的工具，K8S是管理容器的工具。
    </p>
    <p>
     <strong>
      功能上：kubernetes是管理container的工具，openstack是管理VM的工具。
     </strong>
     <br/>
     <strong>
      业务上：openStack是定位于laaS平台的项目，Kubernetes是定位于PaaS平台的项目
     </strong>
     <br/>
     <strong>
      时间上：云平台方案的第一阶段：虚拟机；云平台方案的第二阶段：容器技术；
     </strong>
    </p>
    <p>
     为啥这样说？看下文。
    </p>
    <p>
     声明：以下内容并非原创，而是来源于网络，整理于自己。
    </p>
    <h3>
     <a id="13_10">
     </a>
     1、基于云计算的3种服务模式：
    </h3>
    <p>
     云计算平台根据提供的服务等级不同可以分为如下3类：
    </p>
    <h5>
     <a id="IaasInfrastructureasaService_12">
     </a>
     Iaas:基础设施即服务（Infrastructure-as-a-Service）
    </h5>
    <p>
     IaaS的优势在于消费者不管理或控制任何云计算基础设施，但能控制操作系统的选择、存储空间、部署的应用，也有可能获得有限制的网络组件（例如路由器，防火墙，负载均衡器等）的控制。在运作成本上，节约硬件何维护两方面的成本。
     <br/>
     目前比较知名的IaaS公司有亚马逊、Bluelock、CSC、GoGrid、IBM等。
    </p>
    <h5>
     <a id="PaaSPlatformasaService_15">
     </a>
     PaaS平台即服务（Platform-as-a-Service）
    </h5>
    <p>
     PaaS能为企业提供定制化研发的中间件平台，同时涵盖数据库和应用服务器等。PaaS公司在网上提供各种开发和分发应用的解决方案，比如虚拟服务器和操作系统。
     <br/>
     PaaS公司与IaaS公司有许多重叠，除了上面列出的那些之外，还有Google、Microsoft Azure、Force.com、,Heroku、Engine Yard等。
    </p>
    <h5>
     <a id="SaaSSoftwareasaService_18">
     </a>
     SaaS软件即服务（Software-as-a-Service）
    </h5>
    <p>
     也是我们目前普通用户接触最多的层面，在网络上任意一个远程服务器上的应用都是属于SaaS。比如现在阿里的钉钉、JIBUU以及苹果的iCloud都属于这一类。
    </p>
    <p>
     比较知名的SaaS公司有Salesforce、workday、Slack等。
     <br/>
     层次拓扑结构如下：
    </p>
    <table>
     <thead>
      <tr>
       <th>
        云平台种类
       </th>
       <th>
        特点
       </th>
       <th>
        代表云平台
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        saas
       </td>
       <td>
        在paas基础上，还提供应用
       </td>
       <td>
        百度云、腾讯云
       </td>
      </tr>
      <tr>
       <td>
        paas
       </td>
       <td>
        在iaas基础上，还提供中间件
       </td>
       <td>
        Microsoft Azure、阿里云的云上智能
       </td>
      </tr>
      <tr>
       <td>
        iaas
       </td>
       <td>
        仅提供硬件和操作系统
       </td>
       <td>
        亚马逊aws、阿里云的云服务器、云存储
       </td>
      </tr>
     </tbody>
    </table>
    <h3>
     <a id="2_28">
     </a>
     2、虚拟化技术和容器技术
    </h3>
    <h4>
     <a id="21__29">
     </a>
     2.1 虚拟化技术：
    </h4>
    <p>
     在计算机中，虚拟化（英语：Virtualization）是一种资源管理技术，是将计算机的各种实体资源，如服务器、网络、内存及存储等，予以抽象、转换后呈现出来，打破实体结构间的不可切割的障碍，使用户可以比原本的组态更好的方式来应用这些资源。虚拟化分类：
    </p>
    <h6>
     <a id="1__31">
     </a>
     (1) 硬件虚拟化：
    </h6>
    <ul>
     <li>
      <p>
       英特尔虚拟化技术（IVT，Intel Virtualization Technology）是由英特尔开发的一种虚拟化技术，利用IVT可以对在系统上的客操作系统，通过虚拟机查看器（VMM，Virtual Machine Monitor）来虚拟一套硬件设备，以供客操作系统使用。这些技术以往在VMware与Virtual PC上都通过软件实现，而通过IVT的硬件支持可以加速此类软件的进行。
      </p>
     </li>
     <li>
      <p>
       AMD虚拟化（AMD Virtualization），缩写为“AMD-V”，是AMD为64位的x86架构提供的虚拟化扩展的名称，但有时仍然会用“Pacifica”（AMD开发这项扩展时的内部项目代码）来指代它。
      </p>
     </li>
    </ul>
    <h6>
     <a id="2__36">
     </a>
     (2) 软件虚拟化：虚拟机
    </h6>
    <p>
     软件虚拟化技术（hypervisor）指的是软件层面的实现虚拟化的技术，可以像真实机器一样运行程序的计算机的软件实现。现在典型的代表有：Xen，KVM，WMware，Hyper-V
     <br/>
     Xen和KVM，是开源免费的虚拟化软件；WMware是付费的虚拟化软件；Hyper-V微软的收费虚拟化技术。
    </p>
    <p>
     <strong>
      基于虚拟化技术的单机版虚拟机管理软件
     </strong>
     ：
     <br/>
     <strong>
      KVM
     </strong>
     ： linux的虚拟机基于KVM虚拟技术的单机版虚拟机管理软件。
     <br/>
     <strong>
      VirtualBox
     </strong>
     ：oracle公司的直接基于Intel VT及AMD-V的虚拟机管理软件。
     <br/>
     <strong>
      Vmware workStation
     </strong>
     ：Wmware公司的基于Wmware虚拟技术的虚拟机管理软件。
    </p>
    <p>
     <strong>
      IaaS层虚拟化解决方案
     </strong>
    </p>
    <ol>
     <li>
      <p>
       裸机架构
       <br/>
       裸机架构属于深度定制，主机不会安装操作系统，？？？
       <br/>
       典型产品：WMware vSphere
       <br/>
       VMware vSphere是基于VMware虚拟化技术的虚拟化管理软件，目前在行业内来说算是最成熟，生产环境应用度最广的IaaS层虚拟化技术的解决方案。目前对整个集群的虚拟机监控管理也是最好的。（vSphere本身收费，而且监控软件还需要单独收费）。
      </p>
     </li>
     <li>
      <p>
       寄居式架构
       <br/>
       典型产品：openstack，cloudStack
       <br/>
       Openstack是基于linux的IaaS层解决方案（支持多种虚拟化技术，比如KVM），使用python语言开发,是目前用户最多，影响最大的开源解决方案，得到了HP，IBM等知名厂商的大力支持，国内的虚拟化解决方案也大部分是基于openstack开发定制。主要运行在CentOS和ubuntuServer操作系统上。
      </p>
      <p>
       CloudStack是使用 java开发的基于linux的IaaS层解决方案（支持多种虚拟化技术，比如KVM），目前发展潜力非常不错，也得到了很多知名厂商的认可，不过相对起步比较晚，在国内的推广度也不如openstack。
      </p>
     </li>
    </ol>
    <h4>
     <a id="22__59">
     </a>
     2.2 容器技术
    </h4>
    <p>
     Linux Container（简称LXC）它是一种内核轻量级的操作系统层虚拟化技术。Linux Container主要由Namespace和Cgroup两大机制来保证实现。当前docker几乎成了容器技术的代名词，容器技术可以看作是专为解决虚拟机技术的缺点而生。容器技术就是使用宿主机的内核系统加上自身的文件系统。运行容器时是在使用宿主机的内核情况下加载文件系统，精简的文件系统可以小到100MB以内，所以比虚拟机自然要快很多。可以将容器看作是在内核上运行的独立代码单元，它们非常轻。因此占用的资源也少。
     <br/>
     容器优点：启动快，资源占用小，移植性好
     <br/>
     容器缺点：隔离性不好，共用宿主机的内核，底层能够访问。依赖宿主机内核所以容器的系统选择有限制。
     <br/>
     容器技术的诞生其实主要解决了PAAS的层的技术实现。像OpenStack、Cloudstack这样的技术是解决IAAS层的问题。
    </p>
    <h4>
     <a id="23__65">
     </a>
     2.3 虚拟机和容器的区别
    </h4>
    <p>
     时间上：虚拟机出现在先，容器出现在后；
     <br/>
     架构上：每一个虚拟机启动的都是完整的操作系统，各个虚拟机可以使用不同的linux内核；而容器只是一个文件系统，所有的容器共用一个内核。
    </p>
    <h3>
     <a id="3	_69">
     </a>
     3、 搭建云平台涉及的技术框架
    </h3>
    <h4>
     <a id="31__	OpenstackKVM_70">
     </a>
     3.1 Openstack+KVM
    </h4>
    <p>
     <strong>
      KVM
     </strong>
     （Kernel-based Virtual Machine）是一个开源的系统虚拟化模块，它需要硬件支持，如Intel VT技术或者AMD V技术，是基于硬件的完全虚拟化，完全内置于Linux。每一个虚拟机都拥有自己的内核和文件系统，完全是一个独立的操作系统。而上图是两种虚拟化方式中的其中一种：半虚拟化——KVM。在目前的环境中，KVM虚拟化技术是使用率最高的技术。
     <br/>
     虚拟化优点:隔离性强，所有的虚拟机都有自己的协议栈，各个虚拟机底层相互隔离。
     <br/>
     虚拟化缺点：资源占用多，虚拟化技术本身占用资源，宿主机性能有10%左右的消耗。
    </p>
    <p>
     Openstack使用python语言开发。其最初只是为了美国宇航局（Nebula运算平台）等官方和版官方机构提供IaaS基础设施即服务的软件，而其开源的特点让任何人都可以自行创建和提供云计算服务，这对于企业创建防火墙内私有云提供了有力的支持。所以说OpenStack 主要针对
     <strong>
      Iaas 平台
     </strong>
     ，以资源为中心，可以为上层的 PaaS 平台提供存储、网络、计算等资源。虚拟物理机这个动作，openstack无法完成，需要一个中间层例如KVM、Xen、Hyper-V等，来基于硬件做资源的虚拟化，然后此时openstack通过各种API接口来接管这些资源。OpenStack是基于KVM开发的，KVM常常成为默认的虚拟机管理程序。
    </p>
    <p>
     <strong>
      Openstack使用场景：
     </strong>
     <br/>
     <strong>
      场景一
     </strong>
     ：安全和隔离。OpenStack适用于搭建私有云以及基于私有云的使用的场景。OpenStack底层使用了虚拟化技术，其基因中就有着隔离性好，稳定，部署灵活等特点。在OpenStack的成功案例中，云桌面是典型的例子。有不少的企业都已经将自己的生产环境搬到云端，例如企业上云，工作环境就是使用云桌面的形式。第一是降低了设备成本，上云之前是每人一台主机，到现在几十个人使用一台服务器，如果考虑cpu，内存使用率，成本肯定降下来了。第二是安全，所有的数据都不是存储在身边，在一些安全系数高的行业中尤为重要。OpenStack一直受到金融行业的青睐，这里少不了看中OpenStack安全的特性。
    </p>
    <p>
     <strong>
      场景二
     </strong>
     ：提供基础设施。OpenStack是定位于laas平台的项目，其优点是能够提供虚拟机这种很底层的设施。如果在业务场景中很依赖虚拟机，例如编译内核，或者驱动开发等这些场景，那么OpenStack是很好的选择。
    </p>
    <p>
     <strong>
      场景三
     </strong>
     ：存储需求。存储是OpenStack另一个优势所在。OpenStack第一个版本的项目组成就是存储和计算，在后期不断的开发中，存储作为一个重要的功能一直不断的完善和创新。如cinder块存储，ceph共享存储能。在存储需求很大的场景下，OpenStack能够提供高效，安全的存储方案，这也是为什么电信行业看好OpenStack的一个原因。
    </p>
    <p>
     <strong>
      场景四
     </strong>
     ：动态数据场景。即不需要反复地创建和销毁这些服务的运行环境。虚拟机优势在于稳定，那么OpenStack优势也在于运行稳定的项目。
    </p>
    <h4>
     <a id="32	KubernetesK8sdocker_86">
     </a>
     3.2 Kubernetes（K8s）+docker：
    </h4>
    <p>
     <strong>
      docker
     </strong>
     :docker起源于2013年3月，是基于LXC为基础构建的容器引擎，通过namespace和cgourp实现了资源隔离和调配，使用分层存储来构建镜像。它基于Google公司推出的Go语言实现。
    </p>
    <p>
     Kubernetes是容器管理编排引擎，那么底层实现自然是容器技术。关于k8s,推荐网站https://www.kubernetes.org.cn/k8s
    </p>
    <p>
     <strong>
      K8S使用场景：
     </strong>
     <br/>
     <strong>
      场景一
     </strong>
     ：Kubernetes适用于业务变化快，业务量未知的静态使用场景。所谓静态使用场景是指在其创建的容器中不会实时产生数据的场景。例如：网站架构，一次部署，长时间使用。特别是遇到一些线上业务量不确定的场景，Kubernetes能够动态扩展，灵活伸缩，从5W的并发量到10W的并发量，完全可以秒级处理。
    </p>
    <p>
     <strong>
      场景二
     </strong>
     ：需要反复地创建和销毁这些服务的运行环境。docker的优势就在于启动快速，消耗资源小。所以在需要频繁创建和销毁的场景中，Kubernetes是一个不错的选择。
    </p>
    <p>
     <strong>
      场景三
     </strong>
     ：需要业务模块化和可伸缩性：容器可以很容易地将应用程序的功能分解为单个组件，符合微服务架构的设计模式。
    </p>
    <p>
     <strong>
      场景四
     </strong>
     ：应用云化。将已有应用、要新开发的应用打造成云原生应用，发挥云平台的可扩展、弹性、高可用等特性，并借助PaaS层提供的API实现更高级的特性，比如自动恢复、定制化的弹性伸缩等。
    </p>
    <p>
     <strong>
      场景五
     </strong>
     ：微服务架构和API管理。服务拆分来抽象不同系统的权限控制和任务，以方便业务开发人员通过服务组合快速的创建企业应用。有的企业在没有对应的管理平台之前就已经将应用拆分成很多服务，如何部署这些微服务和进行API权限控制，则成了需要解决的问题，而Kubernetes代表的PaaS则是理想的选择。
    </p>
    <h4>
     <a id="swarmkubernetes_102">
     </a>
     swarm与kubernetes的对比
    </h4>
    <p>
     docker swarm 与kubernetes都是集群管理工具，一个是docker原生自带，一个是谷歌项目下的容器编排工具。k8s特别擅长大规模docker的管理。为了解决复杂场景下应用的部署，k8s的组件要比swarm多得多，即便似乎功能类似的组件，k8s很多时候都在场景支持上要优化swarm
    </p>
    <h4>
     <a id="BorgKubernetes_105">
     </a>
     从Borg到Kubernetes
    </h4>
    <p>
     在Google内部，容器技术已经应用了很多年，Borg系统运行管理着成千上万的容器应用，在它的支持下，无论是谷歌搜索、Gmail还是谷歌地图，可以轻而易举地从庞大的数据中心中获取技术资源来支撑服务运行。
    </p>
    <p>
     Borg是集群的管理器，在它的系统中，运行着众多集群，而每个集群可由成千上万的服务器联接组成，Borg每时每刻都在处理来自众多应用程序所提交的成百上千的Job, 对这些Job进行接收、调度、启动、停止、重启和监控。
     <br/>
     作为Google的竞争技术优势，Borg理所当然的被视为商业秘密隐藏起来，但当Tiwtter的工程师精心打造出属于自己的Borg系统（
     <strong>
      Mesos
     </strong>
     ）时， Google也审时度势地推出了来源于自身技术理论的新的开源工具。
    </p>
    <p>
     2014年6月，谷歌云计算专家埃里克·布鲁尔（Eric Brewer）在旧金山的发布会为这款新的开源工具揭牌，它的名字Kubernetes在希腊语中意思是船长或领航员，这也恰好与它在容器集群管理中的作用吻合，即作为装载了集装箱（Container）的众多货船的指挥者，负担着全局调度和运行监控的职责。
    </p>
    <p>
     虽然Google推出Kubernetes的目的之一是推广其周边的计算引擎（Google Compute Engine）和谷歌应用引擎（Google App Engine）。但Kubernetes的出现能让更多的互联网企业可以享受到连接众多计算机成为集群资源池的好处。
    </p>
    <p>
     Kubernetes对计算资源进行了更高层次的抽象，通过将容器进行细致的组合，将最终的应用服务交给用户。Kubernetes在模型建立之初就考虑了容器跨机连接的要求，支持多种网络解决方案，同时在Service层次构建集群范围的SDN网络。其目的是将服务发现和负载均衡放置到容器可达的范围，这种透明的方式便利了各个服务间的通信，并为微服务架构的实践提供了平台基础。而在Pod层次上，作为Kubernetes可操作的最小对象，其特征更是对微服务架构的原生支持。
    </p>
    <p>
     Kubernetes项目来源于Borg，可以说是集结了Borg设计思想的精华，并且吸收了Borg系统中的经验和教训。
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f67:2e6373646e2e6e65742f77656978696e5f3338363639353631:2f61727469636c652f64657461696c732f3838393434343630</p>

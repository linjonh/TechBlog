---
layout: post
title: 认识HarmonyOS
date: 2024-11-23 10:33:40 +0800
categories: [鸿蒙]
tags: [鸿蒙,华为,前端,harmonyos]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=141397622
    alt: 认识HarmonyOS
artid: 141397622
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     认识HarmonyOS
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-dracula" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
    </p>
    <h2>
     <a id="HarmonyOS__2">
     </a>
     HarmonyOS 三大特性
    </h2>
    <ul>
     <li>
      <strong>
       硬件互助，资源共享
      </strong>
      <ul>
       <li>
        把各终端硬件的能力，虚拟为一个共享的能力资源池，让应用通过系统，调用取其硬件能力。在这种架构下，硬件能力就像“活字印刷术”中的单词字母，可以被无限次的重复使用。即各终端实现“硬件互助，资源共享”的应用，具有了调用远程终端的能力，就像在调用本地终端一样方便。用户是收获了一个多设备组成的超级终端。
        <ul>
         <li>
          比如有手机、电视、手表等多种终端形态，但是各个终端能使用的资源是不一样的，比如在手机上打游戏，手机的屏幕非常小，看着非常不方便，就可以把手机的屏幕画面投屏到电视上。这样就可以实现了在手机上操作游戏，然后画面是在电视上呈现。手机跟电视就组成了一个超级终端。手机的硬件和电视的屏幕硬件，它们就相当于是互助的，就实现了游戏资源的共享。
         </li>
        </ul>
       </li>
       <li>
        <strong>
         实现方式：（五个方面）
        </strong>
        <ul>
         <li>
          <strong>
           分布式软总线
          </strong>
          <ul>
           <li>
            多种终端设备统一的基座，为设备之间互联互通提供了统一的这种分布式通信能力，能够快速发现并连接设备，高效的分发任务和传输数据。
           </li>
          </ul>
         </li>
         <li>
          <strong>
           分布式设备虚拟化
          </strong>
          <ul>
           <li>
            它可以实现不同设备的资源融合、设备管理、数据处理。多种设备共同形成了一个超级虚拟终端，针对不同类型的任务，为用户匹配并选择能力合适的对应执行硬件，让业务连续地在不同设备间流转，充分发挥不同设备的这种资源优势
           </li>
          </ul>
         </li>
         <li>
          <strong>
           分布式数据管理
          </strong>
          <ul>
           <li>
            它是基于分布式软总线的能力实现应用数据和用户数据的分布式管理。用户数据，它不再与单一的物理设备绑定。业务逻辑与数据存储是分离的。应用跨设备运行时，数据可以无缝地衔接，为打造一致的流畅用户体验创造了对应技术条件。
           </li>
          </ul>
         </li>
         <li>
          <strong>
           分布式任务调度
          </strong>
          <ul>
           <li>
            它是基于分布式软总线、分布式数据管理、分布式 profile 等技术特性，构建统一的这种分布式服务管理。支持对跨设备的应用进行远程的这种启动、远程的调用、远程连接以及迁移等等操作。它能够根据不同的设备的能力位置、业务运行状况、资源使用情况以及用户的习惯和意图来选择合适的设备来运行分布式任务。
           </li>
          </ul>
         </li>
         <li>
          <strong>
           分布式连接能力
          </strong>
          <ul>
           <li>
            它提供了智能终端底层和应用层的连接能力。通过 USB 接口共享终端部分硬件资源和软件能力，开发者基于分布式连接能力可以开发相应形态的生态产品，为消费者提供更丰富的连接体验。
           </li>
          </ul>
         </li>
        </ul>
       </li>
      </ul>
     </li>
     <li>
      <strong>
       一次开发，多端部署
      </strong>
      <ul>
       <li>
        HarmonyOS 它提供了用户程序的框架，ability 框架， UI 框架。它能够保证开发的应用在多端运行的一致性，一次开发、多端部署、多终端软件平台 API 具备一致性，确保用户程序运行的兼容性，支持在开发过程中预览终端的能力适配情况。支持根据用户程序与软件平台的兼容性来调度用户权限。下图也展示了一次开发多端部署的这么一个示意图。
       </li>
      </ul>
     </li>
    </ul>
    <p>
     <img alt="image.png" src="https://i-blog.csdnimg.cn/blog_migrate/eab036751906d3f591b7b07db09ce65e.png"/>
    </p>
    <ul>
     <li>
      <strong>
       统一 OS，弹性部署
      </strong>
     </li>
    </ul>
    <p>
     HarmonyOS 通过组件化和小型化等方面来支持多种终端按需弹性部署，能够适配不同类型的硬件资源和功能需求。支持通过编译链关系去自动生成组件化的一个依赖关系，形成组件树依赖图，支持产品系统的便捷开发。具体来讲它在哪几些方面做到了弹性部署呢？
    </p>
    <ul>
     <li>
      <strong>
       组件可有可无
      </strong>
      <ul>
       <li>
        可以支持各组件的一种选择，可以根据硬件的形态和需求来选择需要的一些组件。
       </li>
      </ul>
     </li>
     <li>
      <strong>
       组件可大可小
      </strong>
      <ul>
       <li>
        它可以根据硬件的资源的情况和功能需求，可以选择配置组件中的一些功能集，比如选择配置图形框架组件中有一部分的空间。
       </li>
      </ul>
     </li>
     <li>
      <strong>
       平台可大可小
      </strong>
      <ul>
       <li>
        根据编译链的关系，可以自动生成组件化的依赖关系。例如选择图形框架的组件，将会自动选择依赖中的图形引擎组件等等。
        <br/>
       </li>
      </ul>
     </li>
    </ul>
    <h2>
     <a id="HarmonyOS_35">
     </a>
     全视角了解HarmonyOS架构
    </h2>
    <p>
     下图全视角展现了 HarmonyOS 的一个架构，它遵循的是分层架构设计。从下而上它依次为内核层、系统服务层、框架层和应用层。系统功能按照：系统、子系统功能模块逐级展开，在多设备部署场景下，支持根据实际需求去检查某些非必要的子系统或者功能模块。
     <br/>
     <img alt="image.png" src="https://i-blog.csdnimg.cn/blog_migrate/3e8e239a4e40c38477b5c42f60920ef6.png">
      <br/>
     </img>
    </p>
    <h3>
     <a id="_40">
     </a>
     内核层
    </h3>
    <p>
     首这是一张内核层的示意图。 HarmonyOS 的内核层主要分为两个大的部分，第一部分是内核子系统，第二部分是驱动子系统。在内核子系统里面， HarmonyOS 采用的是多内核的一种设计，支持针对不同资源受限的设备，选用适合 OS 内核， 内核抽象层，它会通过屏蔽多内核的差异，对上层提供基础的内核能力，包括进程和线程的管理、内层的管理、文件系统、网络管理和外设管理等等。
     <br/>
     从这个示意图上里也可以看到它支持的内壳目前是有Linux，还有 LiteOS 驱动子系统，它是硬件驱动框架，是 HarmonyOS 硬件生态开放的基础，提供了统一外设访问能力和驱动开发管理框架。
     <br/>
     <img alt="image.png" src="https://i-blog.csdnimg.cn/blog_migrate/62477986b837dc70276f8018449a08f2.png">
      <br/>
     </img>
    </p>
    <h3>
     <a id="_45">
     </a>
     系统服务层
    </h3>
    <p>
     以下是整个系统服务层的一些核心能力的一个集合。从图上可以看到包含了以下几个部分，首先是系统的基本能力，即系统级。这些能力，它是为分布式应用在 HarmonyOS 多设备上运行、调度、迁移等操作提供了一些基础的一些能力。它是由分布式软总线、分布式数据管理、分布式任务调度、方舟多语言运行时、公共基础库、多模输入、图形安全、 AI 等子系统组成。其中方舟运行时提供了C、 C++、 JS 多语言运行时和基础系统库，也为使用方舟编译器静态化的 Java 程序提供运行时。
     <br/>
     在基础软件服务子系统级里面，它是为 HarmonyOS 提供公共的、通用的软件服务。由事件通知电话、多媒体、DFXD 子系统、 MSDPDB 等子系统组成。增强软件服务子系统级里面为 HarmonyOS 提供了针对不同设备差异化的能力。增强型软件服务，由智慧屏专有业务、穿戴专有业务、 IoT 等业务子系统组成。硬件服务子系统级，它为 HarmonyOS 提供硬件服务，有位置服务、生物特征识别、穿戴专有硬件服务、IOT 专用硬件服务等子系统组成，根据不同的设备形态的部署环境，基础软件服务子系统级，增强软件服务子系统级、硬件服务子系统级内部可以按子系统的粒度，来裁剪，为每个子系统内部又可以按功能颗粒度来裁剪。
     <br/>
     <img alt="image.png" src="https://i-blog.csdnimg.cn/blog_migrate/26fc2ff1a669886d3a215bf10349fde3.png">
      <br/>
     </img>
    </p>
    <h3>
     <a id="_50">
     </a>
     框架层
    </h3>
    <p>
     以下是框架层的一个示意图。框架层它是为 Harmony OS 开发，提供了Java、c、js 等多语言用户程序的框架。 即 Ability 框架。两种 UI 框架包括适用于 Java 语言的 Java UI 框架和适用于 js 语言的 js ui 框架以及各种软硬件服务对外开放的多语言框架API。根据系统的组件化进行一个裁剪， Harmony OS 设备支持的 API 也会有所不同。
     <br/>
     <img alt="image.png" src="https://i-blog.csdnimg.cn/blog_migrate/184a28420f83e62b35c6620e4273659c.png">
      <br/>
     </img>
    </p>
    <h3>
     <a id="_55">
     </a>
     应用层
    </h3>
    <p>
     应用层它包括的是系统应用和第三方非系统应用。Harmony OS 应用由一个或多个 FA 或者 PA 组成。其中 FA 是有界面的，提供与用户交互的能力，而 PA 是没有界面的，提供后台运行任务以及一些统一的数据访问抽象。那么基于FA/PA 开发的这种应用能够实现特定业务功能，支持跨设备调度与分发，为用户提供一致高效的每一个应用体验。
     <br/>
     如下示例，这是一个鸿蒙的一个应用示例，它在一个视频通话应用里面。往往是有一个FA，它作为这个视频通话的一个主界面，而由若干个 PA 组成。 FA 提供这种 UI 界面用于与用户进行交互，然后 PA1 用于摄像头视频的采集， PA2 用于视频美颜处理， PA3 用于超级夜景的处理。FA/PA 是可以按需进行下载的，按需加载和运行的。
     <br/>
     <img alt="image.png" src="https://i-blog.csdnimg.cn/blog_migrate/fb2a6fb18565ced921d3f7b3dce7fdaf.png">
      <br/>
      另外一个场景，展示了不同设备下，它下载相应应用时的不同的表现。当手机来下载该应用的时候，它就会拥有 FA 的主界面， PA 的摄像头视频采集， PA2的视频美颜。 PA3的超级夜景的处理，而如果是智慧屏来下载这个应用，如果智慧屏它不支持视频美颜处理，不支持超级夜检夜景的处理功能的时候，它就只会下载 FA 主界面和 PA1 摄像头视频采集，这就是应用层分发的一个逻辑，它其实是可以根据需要进行一个裁剪，可以按需进行下载运行。以上就是整个Harmony OS 的一个架构的一个介绍。
      <br/>
      <img alt="image.png" src="https://i-blog.csdnimg.cn/blog_migrate/4f4bd55ecb15b0045f531066994c6dd5.png"/>
     </img>
    </p>
    <p>
    </p>
    <h2>
     <a id="_61">
     </a>
     原生鸿蒙-特性
    </h2>
    <p>
    </p>
    <h3>
     <a id="ArkTS__65">
     </a>
     ArkTS 编程语言
    </h3>
    <p>
     首先第一个特性是 ArkTS 编程语言， Harmony OS提供了多种来开发鸿蒙应用 API 的一些语言，包括像ArkTS ，ts，js，C， C++， Java 等等，ArkTS 是 Harmony OS 相对来说比较新的一门语言，也是目前 Harmony OS 优先推荐的开发语言。
     <br/>
     ArkTS 是基于 Typescript 扩展而来的，是 TS 的超集。这也是为什么 ArkTS 的原名，叫ETS，就是 extend typescript 的一个简写。那么 ArkTS 继承了 ts 所有的特性，并且ArkTS 在 ts 的基础上还扩展了这个声明式的UI，能让开发者更简洁、更自然地开发高性能的这种应用。
     <br/>
     以下这张图片也展示了 ArkTS 编程语言，它这里只是用了短短的这个 6 行，就可以开发出一个右侧一个 hello word 的这么一个渐变效果。
     <br/>
     <img alt="image.png" src="https://i-blog.csdnimg.cn/blog_migrate/c1c596c4f48f7b815a73bffb35d22faa.png"/>
     <img alt="image.png" src="https://i-blog.csdnimg.cn/blog_migrate/d096411e8d4bcf6ee8866badf318855f.png"/>
     <br/>
    </p>
    <h3>
     <a id="ArkUI__70">
     </a>
     ArkUI 开发框架
    </h3>
    <p>
     第二个特性是ArkUI开发框架，ArkUI是一套分布式应用界面声明式 开发框架。它使用极简的 UI 语法、丰富的 UI 组件以及实时界面预览工具，帮助提升 Harmony OS 应用界面开发的一个效率。只需使用一套 ArkTS 的API，它就能在多个Harmony OS 设备上提供生动和流畅的这种用户界面体验。然后它具备哪些特点呢？
     <br/>
     第一个是UI 更新机制升级，在 ArkTS 新版 3.1 里面，它通过编译器生成特定函数的方式，从而它能极大地优化 UI 组件的这个渲染性能。
     <br/>
     第二点是逻辑和 UI 分离，通过数据双向绑定机制来传递页面的一个变化逻辑，将流转的 7 个步骤简化为了 2 个步骤，将跨端迁移和协同开发代码量降低了 40% 以上。
     <br/>
     第三点，它是支持这种 stage 模型，面向开发者提供了十几种不同的场景的这种扩展机制服务，在保证后台进程合理运行的基础上，规避了应用进程之间无序拉起，保证前台资源供给、应用调度更加有序的目的。
     <br/>
     它还提供了高级 UI 组件的扩展能力，能够满足开发者在游戏、相机、地图、浏览器等复杂的这种应用场景的开发诉求，降低了这类应用的这个移植门槛。
     <br/>
     它可以提供原生性能体验。ArkUI内置的非常多核心的这种 UI 控件和动效，比如像图片、列表、网格、属性动画、转场动画等等，加持自研语言运行时的深度优化，这些都是可以在Harmony OS 从设备上达到像移动原生应用一样的一个性能体验。
    </p>
    <ul>
     <li>
      <strong>
       UI 更新机制升级
      </strong>
     </li>
     <li>
      <strong>
       逻辑和 UI 分离
      </strong>
     </li>
     <li>
      <strong>
       Stage 模型
      </strong>
     </li>
     <li>
      <strong>
       高级 UI 组件扩展能力
      </strong>
     </li>
     <li>
      <strong>
       原生性能体验
      </strong>
      <br/>
     </li>
    </ul>
    <h3>
     <a id="Stage__81">
     </a>
     Stage 模型
    </h3>
    <p>
     stage 模型是从 API 9 开始的，从 API 9 引入了这种 stage 模型的一种开发模式，在 API8 应该说是在 API9 之前了。 Harmony OS ability 框架，它只支持这种 FA 模型。然后从 API 9 开始它就引入了 stage 模型，然后目前 stage 模型它只支持使用ArkTS 语言来进行开发。 stage 模型是从 Harmony OS 3.1 开始新增了的模型，也是目前 Harmony OS 主推而且会长期演进的子模型。在这种模型中提供了像 ability stage， window stage 等等作为应用组件的 window 窗口的舞台，因此这种模型被称为 stage 模型（主流）。
    </p>
    <ul>
     <li>
      <strong>
       FA 模型：API8 及其更早版本的应用程序只能使用 FA 模型进行开发
      </strong>
     </li>
     <li>
      <strong>
       Stage 模型：从 API9 开始。Stage 模型只支持使用ArkTS 语言来进行开发
      </strong>
      <br/>
     </li>
    </ul>
    <h3>
     <a id="Ability__89">
     </a>
     Ability 组件的生命周期
    </h3>
    <p>
     下图是 Ability 组件的一个生命周期， Ability 的生命周期切换以及和 ability stage、 WindowsStage 的一个关系图。
     <br/>
     stage 模型它定义了 Ability 组件的生命周期，包括创建、销毁、前后台等状态，将与界面强相关的获焦失焦状态放在了 WindowsStage 中，从而实现了Ability 组件跟窗口之间的弱耦合。
     <br/>
     在服务侧，窗口管理服务依赖于组件管理服务，前者通知，后者前后台变化，这样组件管理服务仅感知前后台变化，不感知焦点变化。这也需要注意背景中它存在两个与 windowStage 相关的生命周期状态，第一个是 onWindowStageCreate 和 onWindowStageDestroy。这两个生命周期状态的变化仅存在于具有显示能力的这种设备中。前者onWindowStageCreate，它是表示 windowStage 已经创建完成了，开发者可以通过执行 load Content 方法操作设置 ability 加载的界面。后者 onWindowStageDestroy，它表示 WindowsStage 销毁后调用，方便开发者对自研进行一个释放。
     <br/>
     <img alt="image.png" src="https://i-blog.csdnimg.cn/blog_migrate/f77f26461c39f3e925e9f0e151ae1d29.png"/>
     <br/>
    </p>
    <h3>
     <a id="ArkCompiler_94">
     </a>
     ArkCompiler
    </h3>
    <p>
     Ark compiler，是华为自研的统一编程平台，它包括了编译器、工具链、运行时等关键部位，支持高级语言在多种芯片平台的编译与运行，并支撑应用和服务运行在手机、个人电脑、平板、电视、汽车和智能穿戴等多种设备的需求。然后这个编译器有什么特点呢？
     <br/>
     第一个是它是支持 AOT 编译模式，这种模式它会利用 ArcTS 静态类型信息，进行类型的一个推导，并生成对象描述和内联缓存。加速运行时对字节码的解析执行，让应用启动即可运行高性能的代码，提升应用启动和运行的性能。
     <br/>
     第二点，它支持这个 LiteActor 的轻量化并发。ArkCompiler运行时在 Harmony OS 上提供了 work API 来支持并发编程。在运行时实例内存隔离的基础上，通过共享运行实例中不可变或者不易变的对象，内建代码块、方法字节码等技术手段优化了并发运行实例的启动性能和内存开销。
     <br/>
     第三点是源码安全，ArkCompiler会把ArcTS、ts、js 编译为方舟字节码，运行时直接运行方舟字节码，然后运用多种混淆技术来提高更高强度的混淆与保护，使得 Harmony OS 应用代码强度会变得更高。
    </p>
    <ul>
     <li>
      <strong>
       并发 AOT 编译模式
      </strong>
     </li>
     <li>
      <strong>
       LiteActor 轻量化并发
      </strong>
     </li>
     <li>
      <strong>
       源码安全
      </strong>
      <br/>
     </li>
    </ul>
    <h2>
     <a id="_HarmonyOS_NEXT__103">
     </a>
     原生鸿蒙与 HarmonyOS NEXT 的关系
    </h2>
    <p>
     在 2023 年8月4日，在华为开发者大会上，华为就公布了这个 Harmony OS next 开发者预览版计划，这个计划它在 2023 年8月，会面向企业开发者开放。 2024 年第一季度面向所有开发者开放。然后 Harmony OS next 它有什么特点呢？
     <br/>
     第一个特点是它去掉了传统的 AOSP 的代码，然后因为剥离了很多传统的一些很多框架，所以这个冗余代码相对比较少，系统就会相对来说比较流畅，能效、纯净、安全特性就会大大的提升。当然了， HarmonyOS NEXT ，它虽然是在 2024 年的这个第一季度面向开发者开放，但实际上它这种开放程度不是非常高，它有非常高的一些设置和非常高的一些门槛。不是谁都可以去参与它这个开发。比如说他要求你要具备 Mate60 及以上的这种旗舰和华为旗舰手机，然后他还要审核开发者的一些能力等等。
     <br/>
     所以 Harmony OS next 系统目前来看它还不是非常完善，而且它还是处于这种项目的初级阶段，也没有在市面上正式的发布过，所以对于学习鸿蒙的人而言，HarmonyOS NEXT 不是一个非常好的一个学习的一个样本，它的稳定性也还不够，它也没有在市面上公开，所以不太具备这种学习能力，也不具备商用的这种能力。
     <br/>
     但是它所使用的开发工具，以及所开发应用所使用的编程语言，它都是跟我们前面所介绍的原生鸿蒙的特质性是一致的，所以掌握到的原生鸿蒙所具备的这些开发能力，包括 API 等等，它都是可以在未来所发布的这个 harmony OS next 中可以得到很好的一个兼容和适配，所以不用担心，未来一定会发布。
    </p>
    <ul>
     <li>
      <strong>
       去掉了传统的 AOSP 代码
      </strong>
     </li>
     <li>
      <strong>
       减少了 40%的冗余代码
      </strong>
     </li>
     <li>
      <strong>
       保持原生鸿蒙特性
      </strong>
     </li>
    </ul>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



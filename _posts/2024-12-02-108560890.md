---
layout: post
title: HarmonyOS鸿蒙专栏开篇快速入门OpenHarmony的LiteOS微内核
date: 2024-12-02 09:00:14 +0800
categories: []
tags: []
image:
    path: https://img-blog.csdnimg.cn/20200913161047448.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNDg3MDQ0,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150
    alt: HarmonyOS鸿蒙专栏开篇快速入门OpenHarmony的LiteOS微内核
artid: 108560890
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     [HarmonyOS][鸿蒙专栏开篇]快速入门OpenHarmony的LiteOS微内核
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
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/36c18af9dabe88f58308770a8defff90.png#pic_center">
      <br/>
     </img>
    </p>
    <div class="toc">
     <h4>
      文章目录
     </h4>
     <ul>
      <li>
       <a href="#1_3" rel="nofollow">
        1、获取源码
       </a>
      </li>
      <li>
       <a href="#2LiteOS_18" rel="nofollow">
        2、什么是LiteOS
       </a>
      </li>
      <li>
       <a href="#3LiteOS_27" rel="nofollow">
        3、LiteOS的目录介绍
       </a>
      </li>
      <li>
       <a href="#4LiteOS_Make_59" rel="nofollow">
        4、LiteOS 中Make体系
       </a>
      </li>
      <li>
       <a href="#5LiteOS_Kconfig_79" rel="nofollow">
        5、LiteOS 中Kconfig的配置
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#51Kconfig_82" rel="nofollow">
          5.1、顶层Kconfig
         </a>
        </li>
        <li>
         <a href="#52deconfig_129" rel="nofollow">
          5.2、具体板级的deconfig文件
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#6_170" rel="nofollow">
        6、编译
       </a>
      </li>
      <li>
       <a href="#7configmk_202" rel="nofollow">
        7、顶层目录下的config.mk文件主要完成如下功能的配置：
       </a>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h2>
     <a id="1_3">
     </a>
     1、获取源码
    </h2>
    <p>
     <code>
      OpenHarmony
     </code>
     是
     <code>
      HarmonyOS
     </code>
     的开源版，由华为捐赠给开放原子开源基金会（
     <code>
      OpenAtom Foundation
     </code>
     ）开源。第一个开源版本支持在
     <code>
      128KB~128MB
     </code>
     设备上运行，欢迎参加开源社区一起持续演进。
    </p>
    <p>
     代码仓库地址1：
     <a href="https://codechina.csdn.net/openharmony" rel="nofollow">
      https://codechina.csdn.net/openharmony
     </a>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/af86f66078eccb67356f0d72f9538bb9.png#pic_center"/>
    </p>
    <p>
     代码仓库地址2：
     <a href="https://openharmony.gitee.com" rel="nofollow">
      https://openharmony.gitee.com
     </a>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8430dacff873a8cffdf46f7b7bf327b8.png#pic_center"/>
    </p>
    <p>
     本专栏主要分析
     <code>
      OpenHarmony
     </code>
     内核的相关代码：
     <br/>
     Cortex-A系列处理器内核：
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a" rel="nofollow">
      kernel_liteos_a
     </a>
     <br/>
     Cortex-M系列处理器内核：
     <a href="https://gitee.com/openharmony/kernel_liteos_m" rel="nofollow">
      kernel_liteos_m
     </a>
    </p>
    <h2>
     <a id="2LiteOS_18">
     </a>
     2、什么是LiteOS
    </h2>
    <p>
     <code>
      Huawei LiteOS
     </code>
     是华为针对物联网领域推出的轻量级物联网操作系统，是华为物联网战略的重要组成部分，具备轻量级、低功耗、互联互通、组件丰富、快速开发等关键能力，基于物联网领域业务特征打造领域性技术栈，为开发者提供 “一站式” 完整软件平台，有效降低开发门槛、缩短开发周期，可广泛应用于可穿戴设备、智能家居、车联网、
     <code>
      LPWA
     </code>
     等领域。
    </p>
    <p>
     <code>
      Huawei LiteOS
     </code>
     微内核在
     <code>
      OpenHarmony
     </code>
     源码中所处的位置：
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e0f945039a4c005718cad297aea68cfa.png#pic_center"/>
    </p>
    <h2>
     <a id="3LiteOS_27">
     </a>
     3、LiteOS的目录介绍
    </h2>
    <p>
     我们以
     <code>
      Cortex-A
     </code>
     系列处理器内核为例：
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a" rel="nofollow">
      kernel_liteos_a
     </a>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/652612215df011280561b14f3ba3aa9c.png#pic_center">
      <br/>
      可以看到有12目录、4个文件。
     </img>
    </p>
    <ul>
     <li>
      目录的作用
     </li>
    </ul>
    <table>
     <thead>
      <tr>
       <th>
        名称
       </th>
       <th>
        描述
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        apps
       </td>
       <td>
        用户态的init和shell应用程序。
       </td>
      </tr>
      <tr>
       <td>
        arch
       </td>
       <td>
        体系架构的目录，如arm等。
       </td>
      </tr>
      <tr>
       <td>
        bsd
       </td>
       <td>
        freebsd相关的驱动和适配层模块代码引入，例如USB等。
       </td>
      </tr>
      <tr>
       <td>
        compat
       </td>
       <td>
        内核posix接口的兼容。
       </td>
      </tr>
      <tr>
       <td>
        fs
       </td>
       <td>
        文件系统模块，主要来源于NuttX开源项目。
       </td>
      </tr>
      <tr>
       <td>
        kernel
       </td>
       <td>
        进程、内存、IPC等模块。
       </td>
      </tr>
      <tr>
       <td>
        lib
       </td>
       <td>
        内核的lib库。
       </td>
      </tr>
      <tr>
       <td>
        net
       </td>
       <td>
        网络模块，主要来源于lwip开源项目。
       </td>
      </tr>
      <tr>
       <td>
        platform
       </td>
       <td>
        支持不同的芯片平台代码，如Hi3516DV300等。
       </td>
      </tr>
      <tr>
       <td>
        security
       </td>
       <td>
        安全特性相关的代码，包括进程权限管理和虚拟id映射管理。
       </td>
      </tr>
      <tr>
       <td>
        syscall
       </td>
       <td>
        系统调用。
       </td>
      </tr>
      <tr>
       <td>
        tools
       </td>
       <td>
        构建工具及相关配置和代码。
       </td>
      </tr>
     </tbody>
    </table>
    <ul>
     <li>
      文件的作用
     </li>
    </ul>
    <table>
     <thead>
      <tr>
       <th>
        名称
       </th>
       <th>
        描述
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        Makefile
       </td>
       <td>
        存储了源码文件构建目标文件的规则，具体是否按着规则去执行还要看配置变量。
       </td>
      </tr>
      <tr>
       <td>
        Kconfig
       </td>
       <td>
        配置变量
       </td>
      </tr>
      <tr>
       <td>
        config.mk
       </td>
       <td>
        主要进行编译选项的设置、编译工具的定义、编译时包含的文件、编译的链接地址。
       </td>
      </tr>
      <tr>
       <td>
        build.sh
       </td>
       <td>
        编译脚本
       </td>
      </tr>
     </tbody>
    </table>
    <h2>
     <a id="4LiteOS_Make_59">
     </a>
     4、LiteOS 中Make体系
    </h2>
    <p>
     顶层
     <code>
      Makefile
     </code>
     在编译时是入口点，从整体上组织所有的
     <code>
      Makefile
     </code>
     文件，并定义终极目标，在这里还定义了与平台无关的很多核心变量与一些很重要的
     <code>
      make
     </code>
     目标。顶层
     <code>
      Makefile
     </code>
     位于内核源码的根目录，下面我们分析顶层
     <code>
      Makefile
     </code>
     的主要工作。
    </p>
    <p>
     用户在内核目录中键入
     <code>
      make menuconfig
     </code>
     之后 ，工作流程如下 ：
    </p>
    <ol>
     <li>
      顶 层
      <code>
       Makefile
      </code>
      调用解析顶层
      <code>
       Kconfig
      </code>
      文件，获得待配置条目；
     </li>
     <li>
      判断是否有已配置好的
      <code>
       .config
      </code>
      文件，如果有则导入；
     </li>
     <li>
      用户在配置好后，将配置结果存入配置文件。
     </li>
    </ol>
    <p>
     与
     <code>
      Linux
     </code>
     类似
     <code>
      LiteOS
     </code>
     的
     <code>
      Make
     </code>
     体系顶层
     <code>
      makefile
     </code>
     会通过读取配置文件，递归编译内核代码树的相关目录。
     <br/>
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a/blob/master/Makefile" rel="nofollow">
      /kernel_liteos_a/Makefile
     </a>
    </p>
    <pre><code class="prism language-c">##### make menuconfig #####
export CONFIG_<span class="token operator">=</span>LOSCFG_
MENUCONFIG_PATH <span class="token operator">=</span> $<span class="token punctuation">(</span>LITEOSTOPDIR<span class="token punctuation">)</span><span class="token operator">/</span>tools<span class="token operator">/</span>menuconfig
KCONFIG_FILE_PATH <span class="token operator">=</span> $<span class="token punctuation">(</span>LITEOSTOPDIR<span class="token punctuation">)</span><span class="token operator">/</span>Kconfig
</code></pre>
    <h2>
     <a id="5LiteOS_Kconfig_79">
     </a>
     5、LiteOS 中Kconfig的配置
    </h2>
    <p>
     无论在什么平台上，软件配置是用户接触程序的第一步，我们这里是内核配置，那么入口就是
     <code>
      Kconfig
     </code>
     文件。
    </p>
    <h3>
     <a id="51Kconfig_82">
     </a>
     5.1、顶层Kconfig
    </h3>
    <p>
     通过顶层的
     <code>
      Kconfig
     </code>
     我们可以看见内核所以支持的功能，类似说明书一样，等待你去打开功能。
     <br/>
     例如：
    </p>
    <p>
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a/blob/master/Kconfig" rel="nofollow">
      kernel_liteos_a/Kconfig
     </a>
    </p>
    <pre><code class="prism language-c"><span class="token comment">//包含其他的Kconfig</span>
source <span class="token string">"../../vendor/hisi/hi35xx/platform/hiedmac/Kconfig"</span>
source <span class="token string">"../../kernel/liteos_a/bsd/dev/usb/Kconfig"</span>
source <span class="token string">"../../drivers/hdf/lite/Kconfig"</span>

config USB_DEBUG
    bool <span class="token string">"Enable USB Debug"</span>
    <span class="token keyword">default</span> n
    depends on SHELL <span class="token operator">&amp;&amp;</span> DRIVERS_USB <span class="token operator">&amp;&amp;</span> DEBUG_VERSION
    help
      Answer Y to enable LiteOS support usb debug<span class="token punctuation">.</span>
      use shell command to open the specified debug level print<span class="token punctuation">.</span>
      
config MEM_DEBUG
    bool <span class="token string">"Enable MEM Debug"</span>
    <span class="token keyword">default</span> n
    depends on DEBUG_VERSION
    help
      Answer Y to enable LiteOS support mem debug<span class="token punctuation">.</span>
</code></pre>
    <p>
     通过
     <code>
      source
     </code>
     加载其他的
     <code>
      Kconfig
     </code>
     例如加载
     <code>
      USB
     </code>
     相关配置
    </p>
    <p>
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a/blob/master/bsd/dev/usb/Kconfig" rel="nofollow">
      kernel_liteos_a/bsd/dev/usb/Kconfig
     </a>
     :
    </p>
    <pre><code class="prism language-c">config DRIVERS_USB
    bool <span class="token string">"Enable USB"</span>
    <span class="token keyword">default</span> y
    depends on DRIVERS <span class="token operator">&amp;&amp;</span> COMPAT_BSD
    help
      Answer Y to enable LiteOS support usb<span class="token punctuation">.</span>

config DRIVERS_USB_HOST_DRIVER
    bool <span class="token string">"Enable USB HCD"</span>
    <span class="token keyword">default</span> y
    depends on DRIVERS_USB <span class="token operator">&amp;&amp;</span> DRIVERS
    help
      Answer Y to enable LiteOS to support usb host controller driver<span class="token punctuation">.</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre>
    <h3>
     <a id="52deconfig_129">
     </a>
     5.2、具体板级的deconfig文件
    </h3>
    <p>
     可配置说明书有了，我们也不能每次都重新配置一遍把，这个时候就有板级默认配置。
    </p>
    <p>
     目前LiteOS中
     <code>
      Cortex-A
     </code>
     系列处理器内核为例：
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a" rel="nofollow">
      kernel_liteos_a
     </a>
     适配的开发板：
     <code>
      hi3518
     </code>
     与
     <code>
      hi3516
     </code>
     ，并提供了已经配置好的
     <code>
      .config
     </code>
     ，下来我们以
     <code>
      hi3518
     </code>
     为例子对其进行分析。
     <br/>
     源文件为：
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a/blob/master/tools/build/config/hi3516dv300_release.config" rel="nofollow">
      tools/build/config/hi3516dv300_release.config
     </a>
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/60ecae598d8ef89f689f582dd01ed14b.png#pic_center">
      <br/>
      通过该文件我们可以知道内核配置包括了些什么?
      <br/>
      <code>
       CPU
      </code>
      、开发板、文件系统、驱动程序和调试等大量的待配置信息。
     </img>
    </p>
    <pre><code class="prism language-c"><span class="token macro property"># Automatically generated file; DO NOT EDIT.</span>
<span class="token macro property"># Huawei LiteOS Configuration</span>

<span class="token macro property"># Compiler</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"># Platform</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"># Extra Configurations</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"># Kernel</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"># Lib</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"># Compat</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"># FileSystem</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"># Net</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"># Debug</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"># Driver</span>
LOSCFG_DRIVERS<span class="token operator">=</span>y
LOSCFG_DRIVERS_USB<span class="token operator">=</span>y
LOSCFG_DRIVERS_USB_HOST_DRIVER<span class="token operator">=</span>y
<span class="token macro property"># LOSCFG_DRIVERS_USB_HOST_EHCI is not set</span>
LOSCFG_DRIVERS_USB_HOST_XHCI<span class="token operator">=</span>y
LOSCFG_DRIVERS_USB_DEVICE_CLASS_DRIVERS<span class="token operator">=</span>y
</code></pre>
    <p>
     后面我们就将以
     <code>
      LOSCFG_DRIVERS_USB
     </code>
     为切入点分析源码，但在这之前，我们配置有了，下来就是编译了。
    </p>
    <h2>
     <a id="6_170">
     </a>
     6、编译
    </h2>
    <p>
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a/blob/master/bsd/dev/usb/Makefile" rel="nofollow">
      kernel_liteos_a/bsd/dev/usb/Makefile
     </a>
     ：
     <br/>
     最后编译时候，会根据
     <code>
      .config
     </code>
     编译相关的源代码：
    </p>
    <p>
     例如下面这些代码都将会进行编译，生成了目标文件
     <code>
      usb_bask
     </code>
    </p>
    <pre><code class="prism language-c">include $<span class="token punctuation">(</span>LITEOSTOPDIR<span class="token punctuation">)</span><span class="token operator">/</span>config<span class="token punctuation">.</span>mk

MODULE_NAME <span class="token punctuation">:</span><span class="token operator">=</span> usb_base

ifeq <span class="token punctuation">(</span>$<span class="token punctuation">(</span>LOSCFG_DRIVERS_USB<span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
LOCAL_SRCS <span class="token operator">+</span><span class="token operator">=</span> $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_dynamic<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_parse<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_error<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_handle_request<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_util<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_lookup<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CONTROLLER_HOST_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_controller<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>QUIRK_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_quirk<span class="token punctuation">.</span>c \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_device<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_process<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_hub<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_request<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_transfer<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_dev<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_mbuf<span class="token punctuation">.</span>c  \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_generic<span class="token punctuation">.</span>c \
              $<span class="token punctuation">(</span>CORE_SRC<span class="token punctuation">)</span><span class="token operator">/</span>usb_if<span class="token punctuation">.</span>c
endif
</code></pre>
    <p>
     这里生成目标文件是如何链接的内核中，这个时候我们就要开始分析
     <code>
      config.mk
     </code>
     的作用了：
    </p>
    <h2>
     <a id="7configmk_202">
     </a>
     7、顶层目录下的config.mk文件主要完成如下功能的配置：
    </h2>
    <p>
     1、确定生成可执行文件过程中需要的各种工具，如编译器(
     <code>
      arm-linux-gcc
     </code>
     )、连接器(
     <code>
      arm-linux-ld
     </code>
     )、反汇编器(
     <code>
      arm-linux-objdump
     </code>
     等
     <br/>
     2、确定
     <code>
      CPU
     </code>
     、板相关的配置文件，存在于各个目录下的
     <code>
      config.mk
     </code>
     <br/>
     3、确定编译、链接、转换等过程的操作选项
     <br/>
     4、根据步骤
     <code>
      3
     </code>
     确定的编译连接选项生成需要的文件
     <br/>
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a/blob/master/Makefile" rel="nofollow">
      kernel_liteos_a/Makefile
     </a>
     :
    </p>
    <pre><code class="prism language-c">$<span class="token punctuation">(</span>LD<span class="token punctuation">)</span> $<span class="token punctuation">(</span>LITEOS_LDFLAGS<span class="token punctuation">)</span> $<span class="token punctuation">(</span>LITEOS_TABLES_LDFLAGS<span class="token punctuation">)</span> $<span class="token punctuation">(</span>LITEOS_DYNLDFLAGS<span class="token punctuation">)</span> <span class="token operator">-</span>Map<span class="token operator">=</span>$<span class="token punctuation">(</span>OUT<span class="token punctuation">)</span><span class="token operator">/</span>$@<span class="token punctuation">.</span>map <span class="token operator">-</span>o $<span class="token punctuation">(</span>OUT<span class="token punctuation">)</span><span class="token operator">/</span>$@ <span class="token operator">--</span>start<span class="token operator">-</span>group $<span class="token punctuation">(</span>LITEOS_LIBDEP<span class="token punctuation">)</span> <span class="token operator">--</span>end<span class="token operator">-</span>group
</code></pre>
    <p>
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a/blob/master/config.mk" rel="nofollow">
      kernel_liteos_a\config.mk
     </a>
     :
    </p>
    <pre><code class="prism language-c">############### this is a makefile that you can config it ###############
<span class="token operator">-</span>include $<span class="token punctuation">(</span>LITEOSTOPDIR<span class="token punctuation">)</span><span class="token operator">/</span>tools<span class="token operator">/</span>build<span class="token operator">/</span>mk<span class="token operator">/</span>los_config<span class="token punctuation">.</span>mk
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
LITEOS_LIBDEP   <span class="token punctuation">:</span><span class="token operator">=</span> $<span class="token punctuation">(</span>LITEOS_BASELIB<span class="token punctuation">)</span>
</code></pre>
    <p>
     目录：
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a/blob/master/tools/build/mk/los_config.mk" rel="nofollow">
      kernel_liteos_a\tools\build\mk\los_config.mk
     </a>
    </p>
    <pre><code class="prism language-c">############################# Platform Option Begin#################################
include $<span class="token punctuation">(</span>LITEOSTOPDIR<span class="token punctuation">)</span><span class="token operator">/</span>platform<span class="token operator">/</span>bsp<span class="token punctuation">.</span>mk
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
ifeq <span class="token punctuation">(</span>$<span class="token punctuation">(</span>LOSCFG_DRIVERS_USB<span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
    LITEOS_BASELIB  <span class="token operator">+</span><span class="token operator">=</span> <span class="token operator">-</span>lusb_base
    LIB_SUBDIRS     <span class="token operator">+</span><span class="token operator">=</span> $<span class="token punctuation">(</span>LITEOSTOPDIR<span class="token punctuation">)</span><span class="token operator">/</span>bsd<span class="token operator">/</span>dev<span class="token operator">/</span>usb
    LITEOS_USB_INCLUDE <span class="token operator">+</span><span class="token operator">=</span> <span class="token operator">-</span>I $<span class="token punctuation">(</span>LITEOSTOPDIR<span class="token punctuation">)</span><span class="token operator">/</span>bsd<span class="token operator">/</span>dev<span class="token operator">/</span>usb
ifeq <span class="token punctuation">(</span>$<span class="token punctuation">(</span>LOSCFG_USB_DEBUG<span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
    LITEOS_CMACRO   <span class="token operator">+</span><span class="token operator">=</span> <span class="token operator">-</span>DLOSCFG_USB_DEBUG
endif
endif
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre>
    <p>
     看到这里，我相信大家对
     <a href="https://openharmony.gitee.com/openharmony/kernel_liteos_a" rel="nofollow">
      kernel_liteos_a
     </a>
     整个代码框架有了整体的印象，后面我们就会深入到具体的驱动模块及子系统中看看，它是如何实现的。
    </p>
    <p>
     我正在参加 CSDN 的
     <a href="https://blog.csdn.net/blogdevteam/article/details/108579174">
      鸿蒙技术征文
     </a>
     活动，给我点赞支持，感谢。
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



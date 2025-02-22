---
layout: post
title: 2020-03-29-STM32芯片烧录的三种方式介绍,串口STM32-ST-LINK-Utility以及STM32CubeProgrammer
date: 2020-03-29 08:41:38 +0800
categories: [STM32开发学习笔记]
tags: [stm32,嵌入式]
image:
  path: https://img-blog.csdnimg.cn/20200328170232708.png?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjYyMzM1MA&#61;&#61;,size_16,color_FFFFFF,t_70
  alt: STM32芯片烧录的三种方式介绍,串口STM32-ST-LINK-Utility以及STM32CubeProgrammer
artid: 105172971
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     STM32芯片烧录的三种方式介绍，串口、STM32 ST-LINK Utility以及STM32CubeProgrammer
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
      STM32芯片烧录的三种方式介绍，串口、STM32 ST-LINK Utility以及STM32CubeProgrammer
     </h4>
     <ul>
      <li>
       <a href="#1__1" rel="nofollow">
        1 概述
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#11_2" rel="nofollow">
          1.1资源概述
         </a>
        </li>
        <li>
         <a href="#12_STM32ISPFLYMCU_9" rel="nofollow">
          1.2 STM32串口烧录方式(ISP)-FLYMCU
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#2KEILSTLINK_27" rel="nofollow">
        2.KEIL软件下载介绍(内部集成STLINK)
       </a>
      </li>
      <li>
       <a href="#3_STM32_STLINK_Utility_33" rel="nofollow">
        3 STM32 ST-LINK Utility介绍
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#31_windows_34" rel="nofollow">
          3.1 windows操作系统
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#311__35" rel="nofollow">
            3.1.1 软件烧录
           </a>
          </li>
          <li>
           <a href="#312_stlinkSector_41" rel="nofollow">
            3.1.2 stlink对芯片的部分Sector进行擦除
           </a>
          </li>
         </ul>
        </li>
        <li>
         <a href="#32_LinuxSTLINK_51" rel="nofollow">
          3.2 Linux操作系统中烧录（STLINK）
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#321__52" rel="nofollow">
            3.2.1 软件安装
           </a>
          </li>
          <li>
           <a href="#322_STFLASH_85" rel="nofollow">
            3.2.2 命令行软件烧录（ST-FLASH）
           </a>
          </li>
          <li>
           <a href="#323_GUISTLINK_110" rel="nofollow">
            3.2.3 使用GUI界面进行烧录（STLINK）
           </a>
          </li>
          <li>
           <a href="#324__113" rel="nofollow">
            3.2.4 更多详细信息
           </a>
          </li>
         </ul>
        </li>
       </ul>
      </li>
      <li>
       <a href="#4_STM32CubeProgrammer_120" rel="nofollow">
        4 STM32CubeProgrammer
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#41_STLINK_121" rel="nofollow">
          4.1 使用STLINK进行下载
         </a>
        </li>
        <li>
         <a href="#42_ISP_139" rel="nofollow">
          4.2 使用串口进行下载（ISP）
         </a>
        </li>
        <li>
         <a href="#43_DFUUSB_151" rel="nofollow">
          4.3 使用DFU模式（USB）
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#5_STLINK_159" rel="nofollow">
        5 官方正版STLINK仿真器
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#51_STLINK_V3_mini_160" rel="nofollow">
          5.1 STLINK V3 mini下载器
         </a>
        </li>
        <li>
         <a href="#52_STLINK_171" rel="nofollow">
          5.2 集成在官方开发板上的STLINK
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#6__176" rel="nofollow">
        6 连接异常处理
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#61__177" rel="nofollow">
          6.1 能连接但下载报错解决方案
         </a>
        </li>
        <li>
         <a href="#62_IOSWD_180" rel="nofollow">
          6.2 特殊IO口使用导致烧录一次程序后SWD口不能用
         </a>
        </li>
        <li>
         <a href="#63__226" rel="nofollow">
          6.3 能识别到芯片，但是下载时弹出报错对话框
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h2>
     <a id="1__1">
     </a>
     1 概述
    </h2>
    <h3>
     <a id="11_2">
     </a>
     1.1资源概述
    </h3>
    <p>
     开发板：正点原子STM32F103 Nano开发板
     <br/>
     STM32 ST-LINK Utility版本：V4.5.0.0
     <br/>
     STM32CubeProgrammer版本：V2.4.0
     <br/>
     MDK版本：V5.23
     <br/>
     主控芯片型号：STM32F103RBT6
     <br/>
     <img alt="正点原子开发板" src="https://i-blog.csdnimg.cn/blog_migrate/3c59b80e08e35579426939aed59c2268.png"/>
    </p>
    <h3>
     <a id="12_STM32ISPFLYMCU_9">
     </a>
     1.2 STM32串口烧录方式(ISP)-FLYMCU
    </h3>
    <p>
     启动模式说明说明，我们选择系统存储器启动。
     <br/>
     <img alt="启动模式说明" src="https://i-blog.csdnimg.cn/blog_migrate/ac9f036bbd153f5b737d9dfa5b020e88.png">
      <br/>
      内嵌的自举程序存放在系统存储区，由ST在生产线上写入，用于通过可用的串行接口对闪存存储器进行重新编程： ● 对于小容量、中容量和大容量的产品而言，可以通过USART1接口启用自举程序。串口烧录的原理就是利用这个自举程序读取串口的数据，对内部Flash进行擦写，实现程序的烧录。
      <br/>
      使用串口进行烧录，上位机可采用FLYMCU，然后通过USB转串口线（或者板）给目标设备进行烧录。需要注意的是，如果是M3内核非互联网型的板子这里的串口必须是串口1，对应为GPIO9和GPIO10。如果是M4内核，可以是下述端口。
      <br/>
      ● USART1(PA9/PA10)
      <br/>
      ● USART3（PB10/11 和 PC10/11）
      <br/>
      ● CAN2(PB5/13)
      <br/>
      ● USB OTG FS(PA11/12) 从设备模式（DFU：器件固件升级）。
      <br/>
      <img alt="串口烧录工具" src="https://i-blog.csdnimg.cn/blog_migrate/f2659fe3ddf84afa37e4e983b5cbee64.png">
       <br/>
       BOOT1设为0，BOOT0设为1，按复位键即可进入串口下载模式，打开FLYMCU软件，选择正确的串口，点击读器件信息，显示连接成功。
       <br/>
       <img alt="FlyMCU下载" src="https://i-blog.csdnimg.cn/blog_migrate/068ab9b78f861faa1e56451c4b471c51.png">
        <br/>
        打开所需要下载的HEX文件，这里由于电路上没有自动复位进BOOT区的电路（正点原子部分高级一点的板子有），我们选择不使用RTS和DTR。点击开始编程。直至下载成功。
        <br/>
        <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/50027e45295ef6fd5df318a8fea555e2.png">
         <br/>
         下载完成后，将BOOT0跳线跳到0，按一下Reset键，程序即可正常运行。
         <br/>
         使用这种串口方式烧录时，若选择STLINK进行烧录，将会报错。未检测到STLINK错误提示。需要使用另外的工具进行烧录。
         <br/>
         <img alt="未检测到STLINK" src="https://i-blog.csdnimg.cn/blog_migrate/22df7bcc969c643c342b55b699a2b71f.png"/>
        </img>
       </img>
      </img>
     </img>
    </p>
    <h2>
     <a id="2KEILSTLINK_27">
     </a>
     2.KEIL软件下载介绍(内部集成STLINK)
    </h2>
    <p>
     可以使用KEIL内部集成的STLINK组件进行烧录，使用此种方式进行烧录时，将STLINK连接到电脑，在KEIL中可以检测到STLINK。
     <img alt="检测到STLINK" src="https://i-blog.csdnimg.cn/blog_migrate/9979a43f9ea24dff6a18cd7df598dfde.png">
      <br/>
      建立工程并编译通过后，可以实现内部集成的烧录工具实现对目标开发板（芯片）的烧录工作。
      <br/>
      <img alt="使用KEIL进行烧录" src="https://i-blog.csdnimg.cn/blog_migrate/31d1aff04e14c697d2bb26f39418c03c.png">
       <br/>
       缺点是显而易见的，当我们工程文件缺失，只有烧录目标程序.bin或者.hex文件时，我们就不能通过这种方式进行烧录操作。接下来我给大家介绍两个ST官方的烧录软件，可以在ST官方网站上下载到。分别是STM32 ST-LINK Utility和STM32CubeProgrammer。
      </img>
     </img>
    </p>
    <h2>
     <a id="3_STM32_STLINK_Utility_33">
     </a>
     3 STM32 ST-LINK Utility介绍
    </h2>
    <h3>
     <a id="31_windows_34">
     </a>
     3.1 windows操作系统
    </h3>
    <h4>
     <a id="311__35">
     </a>
     3.1.1 软件烧录
    </h4>
    <p>
     上位机可采用ST官方的STLINK软件，然后通过STLINK模块给目标设备进行烧录。
     <br/>
     <img alt="STLINK烧录方式" src="https://i-blog.csdnimg.cn/blog_migrate/347a6e46c0788a56a5a4b309ece69a05.png"/>
     <br/>
     此软件需要使用STLINK仿真烧录器，支持.bin/.src/.hex/.src/.s19五种格式的烧录文件下载。烧录文件在MDK软件编译工程时会自动生成。正点原子的例程烧录文件位于OBJ文件夹中（.hex）。如果是使用STM32CUBEIDE生成的工程，编译后烧录文件位于Debug文件夹中（.bin）。
     <br/>
     <img alt="STM32 ST-LINK Utility" src="https://i-blog.csdnimg.cn/blog_migrate/ac6b4631596721872fb84d0a1890da24.png"/>
     <br/>
     这个软件支持开发板板载的STLINK V2.1进行烧录操作，不会提示需要固件升级等任何错误。具备烧录软件和芯片已烧软件比对灯功能。软件体积小巧，非常好用。
    </p>
    <h4>
     <a id="312_stlinkSector_41">
     </a>
     3.1.2 stlink对芯片的部分Sector进行擦除
    </h4>
    <p>
     在使用Bootloader+App的使用方式时，我们烧录App时，如果每次都对全片进行擦除，那么每次的Bootloard将会被我们擦除掉，导致程序需要下载两遍。我们可以选择对部分的Sector进行擦除，而不是全部。
     <br/>
     案例：某个Bootloader对应开始地址为0x8000000，结束地址为0x80042B0
     <img alt="对应地址" src="https://i-blog.csdnimg.cn/blog_migrate/3d897d99fc429a19cfe551d915ab5644.png#pic_center"/>
     <br/>
     APP应用对应的首地址为0x8010000
     <br/>
     <img alt="对应首地址" src="https://i-blog.csdnimg.cn/blog_migrate/ffaeb8a1284777d253b86b59faacad02.png#pic_center"/>
     <br/>
     结束地址为0x8015BD0
     <br/>
     <img alt="结束地址" src="https://i-blog.csdnimg.cn/blog_migrate/cd2c8de6eade4321ba50147561de0d2e.png#pic_center"/>
     <br/>
     当我们不希望擦除Bootloader时，我们可以选择Sector擦除，擦除APP对应的地址段。
     <br/>
     <img alt="擦除APP" src="https://i-blog.csdnimg.cn/blog_migrate/49eb98e8600572dfc6fc0ff259500e0b.png#pic_center"/>
     <br/>
     此时程序回退到没有下载APP时的运行状态。可以继续下载新的APP应用程序。
    </p>
    <h3>
     <a id="32_LinuxSTLINK_51">
     </a>
     3.2 Linux操作系统中烧录（STLINK）
    </h3>
    <h4>
     <a id="321__52">
     </a>
     3.2.1 软件安装
    </h4>
    <p>
     软件直接使用命令行安装即可，UBUNTU的源自带此软件，无需在github上下载源码编译安装。
    </p>
    <pre><code class="prism language-bash">//安装STLINK
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> stlink-tools

//查看STLINK的版本，确认是否安装成功，如果成功会返回版本号
st-info <span class="token parameter variable">--version</span>

//安装STLINK-GUI界面
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> stlink-gui

//使用命令行进行下载
<span class="token function">sudo</span> st-flash <span class="token function">write</span> test.bin 0x8000000
</code></pre>
    <p>
     使用命令行进行软件的烧写工作，下载命令的格式，比如说可以使用st-flash erase对芯片进行擦除
    </p>
    <pre><code class="prism language-bash">whs@whs-hp:~/Downloads$ st-flash
invalid <span class="token builtin class-name">command</span> line
stlinkv1 <span class="token builtin class-name">command</span> line: ./st-flash <span class="token punctuation">[</span>--debug<span class="token punctuation">]</span> <span class="token punctuation">[</span>--reset<span class="token punctuation">]</span> <span class="token punctuation">[</span>--format <span class="token operator">&lt;</span>format<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--flash<span class="token operator">=</span><span class="token operator">&lt;</span>fsize<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">{<!-- --></span>read<span class="token operator">|</span>write<span class="token punctuation">}</span> /dev/sgX <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>addr<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>size<span class="token operator">&gt;</span>
stlinkv1 <span class="token builtin class-name">command</span> line: ./st-flash <span class="token punctuation">[</span>--debug<span class="token punctuation">]</span> /dev/sgX erase
stlinkv2 <span class="token builtin class-name">command</span> line: ./st-flash <span class="token punctuation">[</span>--debug<span class="token punctuation">]</span> <span class="token punctuation">[</span>--reset<span class="token punctuation">]</span> <span class="token punctuation">[</span>--serial <span class="token operator">&lt;</span>serial<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--format <span class="token operator">&lt;</span>format<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--flash<span class="token operator">=</span><span class="token operator">&lt;</span>fsize<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">{<!-- --></span>read<span class="token operator">|</span>write<span class="token punctuation">}</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>addr<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>size<span class="token operator">&gt;</span>
stlinkv2 <span class="token builtin class-name">command</span> line: ./st-flash <span class="token punctuation">[</span>--debug<span class="token punctuation">]</span> <span class="token punctuation">[</span>--serial <span class="token operator">&lt;</span>serial<span class="token operator">&gt;</span><span class="token punctuation">]</span> erase
stlinkv2 <span class="token builtin class-name">command</span> line: ./st-flash <span class="token punctuation">[</span>--debug<span class="token punctuation">]</span> <span class="token punctuation">[</span>--serial <span class="token operator">&lt;</span>serial<span class="token operator">&gt;</span><span class="token punctuation">]</span> reset
                       Use hex <span class="token function">format</span> <span class="token keyword">for</span> addr, <span class="token operator">&lt;</span>serial<span class="token operator">&gt;</span> and <span class="token operator">&lt;</span>size<span class="token operator">&gt;</span>.
                       fsize: Use decimal, octal or hex by prefix 0xXXX <span class="token keyword">for</span> hex, optionally followed by <span class="token assign-left variable">k</span><span class="token operator">=</span>KB, or <span class="token assign-left variable">m</span><span class="token operator">=</span>MB <span class="token punctuation">(</span>eg. <span class="token parameter variable">--flash</span><span class="token operator">=</span>128k<span class="token punctuation">)</span>
                       Format may be <span class="token string">'binary'</span> <span class="token punctuation">(</span>default<span class="token punctuation">)</span> or <span class="token string">'ihex'</span>, although <span class="token operator">&lt;</span>addr<span class="token operator">&gt;</span> must be specified <span class="token keyword">for</span> binary <span class="token function">format</span> only.
                       ./st-flash <span class="token punctuation">[</span>--version<span class="token punctuation">]</span>
example <span class="token function">write</span> option byte: ./st-flash <span class="token parameter variable">--debug</span> <span class="token parameter variable">--reset</span> <span class="token parameter variable">--area</span><span class="token operator">=</span>option <span class="token function">write</span> 0xXXXXXXXX
example <span class="token builtin class-name">read</span> option byte: ./st-flash <span class="token parameter variable">--debug</span> <span class="token parameter variable">--reset</span> <span class="token parameter variable">--area</span><span class="token operator">=</span>option <span class="token builtin class-name">read</span> <span class="token operator">&gt;</span> option_byte

</code></pre>
    <h4>
     <a id="322_STFLASH_85">
     </a>
     3.2.2 命令行软件烧录（ST-FLASH）
    </h4>
    <p>
     软件下载示例，烧录文件为bin格式，需要带地址信息，sudo为非必须的，这里使用的版本是1.6.0
    </p>
    <pre><code class="prism language-bash">whs@whs-hp:~/STM32CubeIDE/workspace_1.6.1/Cube_fl03_led/Debug$ <span class="token function">sudo</span> st-flash <span class="token function">write</span> Cube_fl03_led.bin 0x8000000
<span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> whs 的密码： 
st-flash <span class="token number">1.6</span>.0
<span class="token number">2021</span>-08-27T00:28:36 INFO common.c: Loading device parameters<span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token number">2021</span>-08-27T00:28:36 INFO common.c: Device connected is: F1 Medium-density device, <span class="token function">id</span> 0x20036410
<span class="token number">2021</span>-08-27T00:28:36 INFO common.c: SRAM size: 0x5000 bytes <span class="token punctuation">(</span><span class="token number">20</span> KiB<span class="token punctuation">)</span>, Flash: 0x20000 bytes <span class="token punctuation">(</span><span class="token number">128</span> KiB<span class="token punctuation">)</span> <span class="token keyword">in</span> pages of <span class="token number">1024</span> bytes
<span class="token number">2021</span>-08-27T00:28:36 INFO common.c: Attempting to <span class="token function">write</span> <span class="token number">15400</span> <span class="token punctuation">(</span>0x3c28<span class="token punctuation">)</span> bytes to stm32 address: <span class="token number">134217728</span> <span class="token punctuation">(</span>0x8000000<span class="token punctuation">)</span>
Flash page at addr: 0x08003c00 erased
<span class="token number">2021</span>-08-27T00:28:36 INFO common.c: Finished erasing <span class="token number">16</span> pages of <span class="token number">1024</span> <span class="token punctuation">(</span>0x400<span class="token punctuation">)</span> bytes
<span class="token number">2021</span>-08-27T00:28:36 INFO common.c: Starting Flash <span class="token function">write</span> <span class="token keyword">for</span> VL/F0/F3/F1_XL core <span class="token function">id</span>
<span class="token number">2021</span>-08-27T00:28:36 INFO flash_loader.c: Successfully loaded flash loader <span class="token keyword">in</span> sram
 <span class="token number">16</span>/16 pages written
<span class="token number">2021</span>-08-27T00:28:37 INFO common.c: Starting verification of <span class="token function">write</span> complete
<span class="token number">2021</span>-08-27T00:28:37 INFO common.c: Flash written and verified<span class="token operator">!</span> jolly good<span class="token operator">!</span>
whs@whs-hp:~/STM32CubeIDE/workspace_1.6.1/Cube_fl03_led/Debug$ 
</code></pre>
    <p>
     当烧录文件为hex格式时，由于hex文件里边包含地址信息，因此不需要再指定地址了，但是需要指明烧录的格式。
    </p>
    <pre><code class="prism language-bash">whs@whs-hp:/media/whs/HP_D/STM32/F103/trunk/FSMLED/Project$ st-flash <span class="token parameter variable">--format</span> ihex <span class="token function">write</span> output<span class="token punctuation">\</span><span class="token punctuation">(</span>mdk<span class="token punctuation">\</span><span class="token punctuation">)</span>.hex
</code></pre>
    <h4>
     <a id="323_GUISTLINK_110">
     </a>
     3.2.3 使用GUI界面进行烧录（STLINK）
    </h4>
    <p>
     安装STLINK-GUI后，可以使用GUI程序进行下载，GUI的显示界面如下
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/3b772fae95ced21ff9618ec2728e6bab.png#pic_center"/>
    </p>
    <h4>
     <a id="324__113">
     </a>
     3.2.4 更多详细信息
    </h4>
    <p>
     命令行模式仅支持V1和V2版本的仿真器，并不支持V3版本的仿真器。
     <br/>
     更多详细信息，可以参见GitHub的官方资料
    </p>
    <p>
     <a href="https://github.com/stlink-org/stlink">
      https://github.com/stlink-org/stlink
     </a>
    </p>
    <h2>
     <a id="4_STM32CubeProgrammer_120">
     </a>
     4 STM32CubeProgrammer
    </h2>
    <h3>
     <a id="41_STLINK_121">
     </a>
     4.1 使用STLINK进行下载
    </h3>
    <p>
     STM32CubeProgrammer软件是ST新推出的烧录软件，支持更多的方式设置，官方定位是替代ST-LINK Utility。打开如下图所示，支持STLINK、USB、UART以及OTA（均需要对应的烧录工具）下载，支持SWD和JTAG。但是需要说明的是，这个软件烧录时，需要STLINK固件为最新。使用正点原子Nano开发板时，会提示软件非最新，不能进行连接。
     <br/>
     <img alt="PROGRAMMER软件" src="https://i-blog.csdnimg.cn/blog_migrate/09d4f5a4e33aa22b8e1ab2dcf3a0e08c.png"/>
     <br/>
     弹出的固件需要升级的错误
     <br/>
     <img alt="错误" src="https://i-blog.csdnimg.cn/blog_migrate/ce7990c2a876a8b9e197011fdc4fe155.png"/>
     <br/>
     如果买的是官方出品的STLINK，可以正常对固件进行升级，如果不是官方的烧录器，升级前请三思，升级后有可能导致烧录器不能正常使用。下图为点击firmware update后出现的弹框。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/1aaa573aa501a3f6aa090e9f48c378b5.png"/>
     <br/>
     使用正点原子Nano开发板也无需担心会升级导致不能用，因为你尝试升级时会弹出另外一个提示，需要额外的9856B空间，不能进行升级，原因是我们板载的STLINK芯片采用的STM32F103C8T6只有64K空间，这部分空间已经全部用完，不能再写入更新更大的固件。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/7ec28bbdeb676af32269856d7e1c0b2f.png"/>
     <br/>
     另外这个软件也集成在STM32CUBEIDE软件中,STM32CUBEIDE为ST将eclipse、STM32CUBEMX和STM32CUBEPROGRAMMER集成整合到一起的综合编程软件，目前用的人还很少，挺好用，而且免费，跨平台。连接成功的示意图如下，默认会把芯片内部的程序读出来，可以对此程序进行另存为等操作。
     <br/>
     <img alt="连接成功" src="https://i-blog.csdnimg.cn/blog_migrate/c5d52da3bfd24a0bdbe9a88b6d7f5a81.png"/>
     <br/>
     使用此烧录工具，烧录时还可以对芯片进行读写保护，避免芯片被恶意读出盗窃烧录底层。
     <br/>
     <img alt="读保护" src="https://i-blog.csdnimg.cn/blog_migrate/2e882f316e4511166b9c4cb599c6e02e.png"/>
     <br/>
     在ubuntu中此软件和windows下是相同的。
    </p>
    <p>
     最新版本的软件支持JLINK，淘宝上100来块钱的仿真器可用，可以正常烧录擦写以及查看寄存器信息
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/direct/0d8f9a5eb6a641d795f145f6099cfc8e.png"/>
    </p>
    <h3>
     <a id="42_ISP_139">
     </a>
     4.2 使用串口进行下载（ISP）
    </h3>
    <p>
     我们在此软件中，可以使用串口进行连接烧录，这样做的好处是不需要使用第三方串口烧录工具，另外cubeprogrammer也不会对STLINK的版本信息进行核验。
    </p>
    <p>
     1.BOOT设置，将BOOT1跳到0（开发板已经默认拉到地），BOOT0跳到1（3.3V）。按一下RESET按键
     <br/>
     <img alt="BOOT设置" src="https://i-blog.csdnimg.cn/blog_migrate/33783383266d09aeddc8ff2756ddd168.png"/>
     <br/>
     2,打开软件，选择Uart和正确的COM口，由于用的是串口，因此就和stlink无关了，用一个USB转串口线也可以进行下载。
     <br/>
     <img alt="选择串口" src="https://i-blog.csdnimg.cn/blog_migrate/166bd6a65bb4374e8ead8f4d2ad6ed70.png"/>
     <br/>
     3，连接成功后如下
     <br/>
     <img alt="连接成功" src="https://i-blog.csdnimg.cn/blog_migrate/cfa586f00fc856b9e59a130098151ba5.png"/>
     <br/>
     4，选择要下载的文件下载，下图所示已经下载成功。
     <br/>
     <img alt="下载文件" src="https://i-blog.csdnimg.cn/blog_migrate/702907d50400586342dc345b0ed7707e.png"/>
     <br/>
     5，将BOOT0跳线还原到BOOT0。若上图勾选了Run after programming,则无需按Reset即会运行新程序，若没有勾选，按一下Reset按键。
    </p>
    <h3>
     <a id="43_DFUUSB_151">
     </a>
     4.3 使用DFU模式（USB）
    </h3>
    <p>
     STM32F407的PA11和PA12为OTG USB功能，支持USB烧录，将此两个脚通过USB连接到电脑
     <br/>
     将BOOT0跳到1，按复位键，再在然后选择USB后刷新，将显示USB1设备，若连接失败将显示NO DFU DETECTED
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f96978fc34a8d88fba555217d1ee6eab.png"/>
     <br/>
     点击connect并下载，使用此种功能，既不需要USB转串口，也不需要仿真器，很方便。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/f717b73a3469f89fdf508a1515143747.png"/>
    </p>
    <h2>
     <a id="5_STLINK_159">
     </a>
     5 官方正版STLINK仿真器
    </h2>
    <h3>
     <a id="51_STLINK_V3_mini_160">
     </a>
     5.1 STLINK V3 mini下载器
    </h3>
    <p>
     这里我推荐一款官方的正版仿真器，即STLINK V3 MINI，ST官方近两年推出，采用了STM32F723的芯片，比常见的STLINK V2拥有更多的功能，更快的速度。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/adebe76a22e0982bec49217327fbc574.png"/>
    </p>
    <p>
     这个仿真器非常小，比通常的U盘还小一号，且排线为14P 1.27mm间距的排线。因此不支持常见的2.54杜邦线连接，需要额外的转接板进行转接。这里需要特别注意。此款仿真器支持一个虚拟的串口（13脚和14脚），支持SWD和JTAG烧录，端口定义如下：
     <br/>
     <img alt="14P端口定义" src="https://i-blog.csdnimg.cn/blog_migrate/dc00044f19260893a72c68907c9d250e.png"/>
     <br/>
     嘉立创白嫖自制的转接板，此板的J4插座还支持NUCLEO的SWD扩展口的转接，按键为RESET按键，可以下载完成后手动对烧录好的芯片进行复位。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/1ccf45b293ee0f2b0c82f2ac62fcaa42.png"/>
     <br/>
     背面引出的串口，本想放在正面的，结果实物比封装大，翻车了，而且1.27的插件不是一般难焊，很容易连锡。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b148df997886c6955e10958837523386.png"/>
     <br/>
     STLINK V3版本的速度比V2的要快，缺点是不支持山寨芯片，接上后提示无法连接到目标，而STLINK V2是支持山寨STM32芯片的。目前V3系列暂时未发现网上有仿造的产品出售。这款性价比比较高，淘宝价格80元，推荐各位购买。
    </p>
    <h3>
     <a id="52_STLINK_171">
     </a>
     5.2 集成在官方开发板上的STLINK
    </h3>
    <p>
     官方的开发板集成了STLINK，这个STLINK可以对外进行烧录。这块部分可以裁下来单独使用。当烧录外部设备时，需要将外部烧录跳线拔下来，然后将烧录口和目标板通过杜邦线进行连接。不同的开发板对应的STLINK版本不同，F103对应的是V2.1，F7开发板对应的是V3.0。
     <br/>
     <img alt="官方开发板带的烧录工具" src="https://i-blog.csdnimg.cn/blog_migrate/953cf75c02dbb8c0a24a20c07188bd40.png"/>
     <br/>
     可以做一个6PIN转20PIN的转接板，转接到20pin上，成为一个标准的下载器。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b78b93ad810e1ccf34bce798f3c162f5.jpeg"/>
    </p>
    <h2>
     <a id="6__176">
     </a>
     6 连接异常处理
    </h2>
    <h3>
     <a id="61__177">
     </a>
     6.1 能连接但下载报错解决方案
    </h3>
    <p>
     使用杜邦线进行SWD连接时，如果是散线或者线缆过长，会出现KEIL能连接上，但是下载报错（flash错误或者M3错误）的故障。将线缆更换为排线或者降低线缆的长度可以解决这个问题。
     <br/>
     <img alt="错误线缆连接" src="https://i-blog.csdnimg.cn/blog_migrate/f133678814e108f8d34853249ad53b66.png"/>
    </p>
    <h3>
     <a id="62_IOSWD_180">
     </a>
     6.2 特殊IO口使用导致烧录一次程序后SWD口不能用
    </h3>
    <p>
     JTAG或者SWD端口被占用，但是却没有进行正确的配置。
     <br/>
     在开发STM32F407芯片时，调试18B20温度程序时发现一个问题，当下载完一次程序后，SW就失去连接
     <br/>
     <img alt="失去连接" src="https://i-blog.csdnimg.cn/blog_migrate/1abc71ddb83a58ce77187ee0eedf8c0b.png"/>
     <br/>
     强制烧录时报错信息如下：No target connected
     <br/>
     <img alt="报错" src="https://i-blog.csdnimg.cn/blog_migrate/b0c26b0e197b76071e93d76c76567775.png"/>
     <br/>
     报错信息Error：Flash Download failed-Target DLL has been cancelled
     <br/>
     <img alt="报错" src="https://i-blog.csdnimg.cn/blog_migrate/ce47c4ff737d4f847c16ba9cb491a8b2.png"/>
     <br/>
     使用utility连接也会报错，报错信息如下：Cannot connect to target
     <br/>
     <img alt="报错信息" src="https://i-blog.csdnimg.cn/blog_migrate/6e533a26ff07f6055ecf4d8db7f31b93.png"/>
     <br/>
     按照提示，在烧录时按Reset按键，成功烧录了软件。使用一行行注释排除的方法，最后定位在DS18B20_Init初始化函数这。程序使用了PB15作为了18B20的输入，这个口也是JTAG的接口，在使用时，不能按照常规GPIO口进行配置。使用时，需要先禁止JTAG，然后使能SWD。如果弄成了最后一种模式就SW下载方式无效，需要按住Reset复位重新连接烧录了。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/56335689fe8fb6c8d948c43011ea2284.png"/>
     <br/>
     为了验证这个想法，在程序中将A15改为B15。更改初始化函数
    </p>
    <pre><code class="prism language-c">u8 <span class="token function">DS18B20_Init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{<!-- --></span>
	GPIO_InitTypeDef  GPIO_InitStructure<span class="token punctuation">;</span>

  <span class="token function">RCC_AHB1PeriphClockCmd</span><span class="token punctuation">(</span>RCC_AHB1Periph_GPIOB<span class="token punctuation">,</span> ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//使能GPIOA时钟，改为使能GPIOB时钟</span>

  <span class="token comment">//GPIOA15，改为了GPIOB15</span>
  GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Pin <span class="token operator">=</span> GPIO_Pin_15<span class="token punctuation">;</span>
  GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Mode <span class="token operator">=</span> GPIO_Mode_OUT<span class="token punctuation">;</span><span class="token comment">//普通输出模式</span>
  GPIO_InitStructure<span class="token punctuation">.</span>GPIO_OType <span class="token operator">=</span> GPIO_OType_PP<span class="token punctuation">;</span><span class="token comment">//推挽输出</span>
  GPIO_InitStructure<span class="token punctuation">.</span>GPIO_Speed <span class="token operator">=</span> GPIO_Speed_50MHz<span class="token punctuation">;</span><span class="token comment">//50MHz</span>
  GPIO_InitStructure<span class="token punctuation">.</span>GPIO_PuPd <span class="token operator">=</span> GPIO_PuPd_UP<span class="token punctuation">;</span><span class="token comment">//上拉</span>
  <span class="token function">GPIO_Init</span><span class="token punctuation">(</span>GPIOB<span class="token punctuation">,</span> <span class="token operator">&amp;</span>GPIO_InitStructure<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//初始化</span>
  <span class="token function">DS18B20_Rst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">DS18B20_Check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre>
    <p>
     更改头文件定义
    </p>
    <pre><code class="prism language-c"><span class="token comment">//IO方向设置</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">DS18B20_IO_IN</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{<!-- --></span>GPIOB<span class="token operator">-&gt;</span>MODER<span class="token operator">&amp;=</span><span class="token number">0XCFFFFFFF</span><span class="token punctuation">;</span>GPIOB<span class="token operator">-&gt;</span>MODER<span class="token operator">|=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span>	</span><span class="token comment">//PA15输入模式，改为PB15</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">DS18B20_IO_OUT</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>GPIOB<span class="token operator">-&gt;</span>MODER<span class="token operator">&amp;=</span><span class="token number">0XCFFFFFFF</span><span class="token punctuation">;</span>GPIOB<span class="token operator">-&gt;</span>MODER<span class="token operator">|=</span><span class="token number">0x40000000</span><span class="token punctuation">;</span><span class="token punctuation">}</span> 	</span><span class="token comment">//PA15输出模式，改为PB15</span></span>
 
<span class="token comment">IO操作函数											   </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>	<span class="token macro-name">DS18B20_DQ_OUT</span> <span class="token expression"><span class="token function">PBout</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> </span><span class="token comment">//数据端口	PA15，改为PB15</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>	<span class="token macro-name">DS18B20_DQ_IN</span>  <span class="token expression"><span class="token function">PBin</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>  </span><span class="token comment">//数据端口	PA15，改为PB15</span></span>
</code></pre>
    <p>
     更改后，可以通过编译，下载后，KEIL也能扫描到设备。
     <br/>
     <img alt="通过编译" src="https://i-blog.csdnimg.cn/blog_migrate/41076113ef9932b8292a6d645ae0f273.png"/>
    </p>
    <h3>
     <a id="63__226">
     </a>
     6.3 能识别到芯片，但是下载时弹出报错对话框
    </h3>
    <p>
     使用5.34版本的Keil，能识别到芯片，但是下载时报错 Command not supported
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/960e0075d9fef0207c1ce641fc18534e.png"/>
     <br/>
     点击确认下，报另外一个错误
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c9dbc4aaedde5b608a91e582825c96cf.png"/>
     <br/>
     原因是新版本软件对未能及时升级STLINK固件的烧录器进行了封杀。需要升级仿真器的固件。当然盗版仿真器不能升级固件，唯一的解决办法是将Keil进行降级处理，降低到5.27版本。下图是在keil升级固件的方法。用正版仿真器实验过，没有这个问题。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/12e2b1d441411abd1a3fb299d9c1ebc6.png"/>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f34363632333335302f:61727469636c652f64657461696c732f313035313732393731

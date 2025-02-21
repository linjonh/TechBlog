---
layout: post
title: 2024-08-27-芯片测试4Functional-Test
date: 2024-08-27 10:39:48 +0800
categories: [半导体测试]
tags: [集成测试]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=131788737
  alt: 芯片测试4Functional-Test
artid: 131788737
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     芯片测试（4）——Functional Test
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
      芯片测试（4）——Functional Test
     </h4>
     <ul>
      <li>
       <a href="#_1" rel="nofollow">
        一、引言
       </a>
      </li>
      <li>
       <a href="#_8" rel="nofollow">
        二、功能测试流程图
       </a>
      </li>
      <li>
       <a href="#_11" rel="nofollow">
        三、必要项
       </a>
      </li>
      <li>
       <a href="#_25" rel="nofollow">
        四、描述
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#41__26" rel="nofollow">
          4.1 测试周期
         </a>
        </li>
        <li>
         <a href="#42__30" rel="nofollow">
          4.2 数据输入
         </a>
        </li>
        <li>
         <a href="#43__40" rel="nofollow">
          4.3 输入信号格式
         </a>
        </li>
        <li>
         <a href="#43__51" rel="nofollow">
          4.3 输出数据
         </a>
        </li>
        <li>
         <a href="#44__59" rel="nofollow">
          4.4 高阻态输出测试
         </a>
        </li>
        <li>
         <a href="#45__64" rel="nofollow">
          4.5 输出电流负载
         </a>
        </li>
        <li>
         <a href="#46__68" rel="nofollow">
          4.6 向量数据
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_76" rel="nofollow">
        五、测试向量
       </a>
      </li>
      <li>
       <ul>
        <li>
         <a href="#51__77" rel="nofollow">
          5.1 定义
         </a>
        </li>
        <li>
         <a href="#52__82" rel="nofollow">
          5.2 向量生成
         </a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#_98" rel="nofollow">
        参考链接
       </a>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h2>
     <a id="_1">
     </a>
     一、引言
    </h2>
    <p>
     功能测试（Functional test）引入了一些新术语:
     <br/>
     pattern：设备设计用于执行的各种逻辑功能的输入和输出状态的表示。输入数据由测试系统提供给被测设备。将输出模式数据与DUT输出引脚的响应进行比较。在功能测试期间，pattern被执行或应用到DUT。如果预期的输出数据与被测设备的输出数据不匹配，则会发生功能故障。pattern也称为测试向量或真值表。测试向量通常表示为1和0的序列或表示逻辑电平的其他字符。
     <br/>
     信号格式：一种描述由引脚电子驱动电路提供的输入信号的波形的方法。例如:NRZ / DNRZ / RZ / RO /SBC。
     <br/>
     输出频闪：输出频闪是测试系统内的时序标记，用作输出信号评估的时序参考。许多测试系统在每个测试通道上提供单独的频闪标记，这允许每个输出信号独立评估。输出采样时间在功能测试期间，被测设备的输出信号被评估的时间点。Pin Electronics中的比较器电路将DUT输出电压限定为预定义的逻辑1 (VOH)或逻辑0 (VOL)参考电平。然后，测试系统在特定的时间点做出通过/不通过的决定，这是由频闪器放置时间定义的。输出采样也称为输出频闪。
     <br/>
     输出掩码：在所有功能测试期间启用或禁用测试通道的输出比较的方法。这可以在每个测试周期的引脚基础上执行。
    </p>
    <h2>
     <a id="_8">
     </a>
     二、功能测试流程图
    </h2>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8ca542c3b05532d0db9ea6bb1f52d591.png#pic_center"/>
    </p>
    <h2>
     <a id="_11">
     </a>
     三、必要项
    </h2>
    <p>
     功能测试验证DUT将正确执行其预期的逻辑功能。要做到这一点，必须创建测试向量或真值表，它可以检测到DUT中的故障。测试向量与测试时序相结合，构成了功能测试的核心。在进行功能测试时，必须考虑被测设备性能的各个方面。必须仔细检查以下项目的确切值。
     <br/>
     VDD Min/Max——DUT电源电平；
     <br/>
     HIL/ VIH——输入电平；
     <br/>
     VOL/ VOH——输出电平；
     <br/>
     IOL/ IOH——输出负载电流；
     <br/>
     VREF——IOL/IOH切换点；
     <br/>
     测试频率——用于测试的周期；
     <br/>
     输入信号时序——时钟/设置/保持/控制；
     <br/>
     输入信号格式——输入信号的波形；
     <br/>
     输出时序——何时在周期内对输出进行采样；
     <br/>
     矢量序列——矢量文件中的起始/停止点。
     <br/>
     从以上信息可以看出，测试系统的大部分资源必须在功能测试期间使用。所有的功能测试都由两个不同的部分组成，测试矢量文件和包含在主测试程序中的指令。测试向量文件表示测试DUT所需的输入和输出逻辑状态。测试程序指令包含控制测试硬件所需的信息，以产生所有必要的电压、波形和时序。
    </p>
    <h2>
     <a id="_25">
     </a>
     四、描述
    </h2>
    <h3>
     <a id="41__26">
     </a>
     4.1 测试周期
    </h3>
    <p>
     测试周期，是基于设备的工作频率，同时定义了一个测试向量的持续时间。测试周期可为由公式决定：
     <br/>
     测试周期= 1/设备频率
     <br/>
     每个新周期的开始称为时间零点或T0。在定义功能测试的时序时，第一步是确定测试周期。
    </p>
    <h3>
     <a id="42__30">
     </a>
     4.2 数据输入
    </h3>
    <p>
     输入数据通过组合创建：
    </p>
    <ul>
     <li>
      <strong>
       测试向量（发给DUT的指令或激励）
      </strong>
     </li>
     <li>
      <strong>
       输入信号时序（信号转换点）
      </strong>
     </li>
     <li>
      <strong>
       输入信号格式（波形）
      </strong>
     </li>
     <li>
      <strong>
       输入电平（VIL/VIH）
      </strong>
     </li>
     <li>
      <strong>
       时间序列选择（如果使用多个时间序列）
      </strong>
      <br/>
      最简单形式的输入数据由逻辑0或逻辑1级组成，这些序列存储为测试向量数据。逻辑0或1的电压电平是由在测试头产生的VIL/VIH参考电压组成。
      <br/>
      许多输入信号需要包含独特格式（波形）和定时（边缘位置）的更复杂的数据。这些信息包含在主测试程序中，并通过测试语言的格式和定时语句进行控制。
      <br/>
      一些测试系统具有共享资源，这意味着测试硬件一次只能提供有限数量的输入时间、格式和电平。每个引脚结构的测试系统使编程更容易，因为每个引脚可以用独特的时序，格式和电平进行编程。
     </li>
    </ul>
    <h3>
     <a id="43__40">
     </a>
     4.3 输入信号格式
    </h3>
    <p>
     <img alt="（图）" src="https://i-blog.csdnimg.cn/blog_migrate/6326e50c4a1e60b65ced4dd393f1c063.png#pic_center"/>
    </p>
    <ul>
     <li>
      <strong>
       NRZ（不归零不归一）
      </strong>
      <br/>
      Non Return to Zero，不归零不归一，表示存储在矢量存储器中的实际数据，不包含边沿定时。NRZ数据仅在每个周期（TO）开始时更改。信号在整个周期中保持高或低。
     </li>
     <li>
      <strong>
       RZ（归零）
      </strong>
      <br/>
      当矢量数据为逻辑1时，RZ提供一个正脉冲，使数据归零；当矢量数据为逻辑0时，没有脉冲（信号保持在逻辑0）。RZ信号有一个前导（上升）沿和一个后导（下降）沿。
     </li>
     <li>
      <strong>
       RO（归一）
      </strong>
      <br/>
      当矢量数据为逻辑0时，RO提供一个负脉冲，使数据归一；当矢量数据为逻辑1时，不提供脉冲（信号保持在逻辑1）。RO信号有一个前导（下降）沿和一个后导（上升）沿。
     </li>
     <li>
      <strong>
       SBC（反码环绕）
      </strong>
      <br/>
      Surround By Compliment，可以在每个循环中提供三个边缘过渡。这种信号格式创建了一个基于矢量数据的复杂信号。它在周期(TO)开始时反转数据，等待预定义的延迟，显示指定脉冲宽度的实际矢量数据，然后在周期的剩余时间内再次反转数据。这种信号格式是唯一一种在测试向量的单次执行中保证设置和保持时间的格式。SBC格式也称为异或(XOR)格式。
     </li>
    </ul>
    <h3>
     <a id="43__51">
     </a>
     4.3 输出数据
    </h3>
    <p>
     通过组合测试输出：
    </p>
    <ul>
     <li>
      <strong>
       测试向量数据（来自DUT的预期逻辑状态）
      </strong>
     </li>
     <li>
      <strong>
       输出频闪定时（何时在测试周期内采样输出）
      </strong>
     </li>
     <li>
      <strong>
       VOL/VOH（确定DUT输出状态的参考电平）
      </strong>
     </li>
     <li>
      <strong>
       IOL/IOH（输出负载电流）
      </strong>
     </li>
     <li>
      <strong>
       时间序列选择（如果使用多个时间设置）
      </strong>
      <br/>
      <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/8369c89bcd24f96c3e4507a79d9858ee.png#pic_center"/>
     </li>
    </ul>
    <h3>
     <a id="44__59">
     </a>
     4.4 高阻态输出测试
    </h3>
    <p>
     输出可以在高阻抗条件下进行功能测试。在这种类型的测试中，比较器逻辑被反转，期望得到一个无效的逻辑电平（不是1也不是0）。高阻抗状态（或电平）被定义为电压大于VOL参考电平，小于VOH参考电平（如图）。被测件外部的电压需要将高阻抗输出拉到无效（中间）电压。这是通过使用连接到参考电压的负载来实现的。通常使用1.5伏或2.0伏基准来表示中间或高阻态电平。记住，当输出进入高阻抗状态时，它就失去了提供电压和电流的能力。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/d5d53041d855753e9f7ed2c02be2a86e.png#pic_center"/>
    </p>
    <p>
     除非设备外部的某些东西导致输出改变，高阻抗输出将倾向于保持在其最后有效的逻辑电平。测试系统负载用于将被测设备输出拉到指定的参考电压。
    </p>
    <h3>
     <a id="45__64">
     </a>
     4.5 输出电流负载
    </h3>
    <p>
     在功能测试期间，电流负载可以施加到被测设备的输出。
     <br/>
     可编程电流负载（也称为动态电流负载）由位于引脚电子器件中的电路组成，其电压和电流设置在测试程序中定义。如果测试系统不支持可编程负载，则可以将电阻负载添加到外部测试硬件中。
     <br/>
     当功能测试执行时，电流负载将适当的IOL和IOH电流应用于输出。通过施加指定的IOL/IOH电流并测试指定的VOL/vOH电压，可以在执行功能测试时验证输出电流和电压参数。这比使用PMU执行相同的测试要快得多。
    </p>
    <h3>
     <a id="46__68">
     </a>
     4.6 向量数据
    </h3>
    <p>
     测试向量文件包含真值表，该真值表执行DUT设计要执行的各种功能。矢量文件包含必须应用于DUT输入的逻辑状态，以及期望出现在DUT输出上的逻辑状态。矢量数据通常由以下一组字符组成。
    </p>
    <ul>
     <li>
      <strong>
       0——逻辑0
      </strong>
     </li>
     <li>
      <strong>
       1——逻辑1
      </strong>
     </li>
     <li>
      <strong>
       L——逻辑0
      </strong>
     </li>
     <li>
      <strong>
       H——逻辑1
      </strong>
     </li>
     <li>
      <strong>
       Z——高阻态
      </strong>
     </li>
     <li>
      <strong>
       X——不关心
      </strong>
     </li>
    </ul>
    <h2>
     <a id="_76">
     </a>
     五、测试向量
    </h2>
    <h3>
     <a id="51__77">
     </a>
     5.1 定义
    </h3>
    <p>
     测试向量也称为测试模式或真值表。测试向量是输入和输出状态，它们表示被测件要执行的逻辑功能。输入和输出数据用字符表示——1/0常用于输入数据，L/H/Z用于输出数据，X用于无输入驱动器和无输出比较。任何一组字符都可以用来表示真值表，只要测试系统能够正确地为每个字符执行适当的功能。
     <br/>
     测试向量序列存储在向量存储器中，每个单独的向量代表一个测试周期的“原始”数据。来自矢量存储器的输入数据与时序、格式和电压电平数据相结合，并通过引脚电子驱动电路提供给DUT（数据现在已“熟化”）。DUT的输出通过位于引脚电子卡上的比较器电路进行监测，并在适当的频闪时间与存储在矢量存储器中的数据进行比较。这种类型的测试称为存储响应，因为DUT的预期响应被“存储”在向量存储器中。
     <br/>
     测试向量序列除了被测数据外，还可以包含对测试系统的指令。例如，定时可以动态更改，这意味着定时值或信号格式可以逐个向量地更改。输入驱动器可以被打开和关闭，输出比较器也可以从一个周期到下一个周期被选择性地监测。许多测试系统还支持微代码指令，如分支、循环、向量重复、子程序等。测试人员指令在矢量文件中出现的方式因测试人员而异。这就是在将测试程序转移到不同品牌的测试人员时需要矢量转换器的原因之一。
     <br/>
     复杂设备的测试向量通常是从设计过程中创建的仿真数据中提取的。模拟数据为目标测试系统重新格式化，并且可能还需要进行处理以正确运行。测试向量序列由数百万个单独的向量循环组成并不罕见。测试向量或模拟数据可以由设计工程师、测试工程师或模拟工程师创建。成功生成矢量的关键是对被测件和测试系统都有透彻的了解。
    </p>
    <h3>
     <a id="52__82">
     </a>
     5.2 向量生成
    </h3>
    <ul>
     <li>
      <p>
       <strong>
        检索基于事件的测试
       </strong>
       <br/>
       首先需要定义的是Projects属性。这些属性包括项目名称、项目文件位置、模块创建和定义。在定义这些之后，基于事件的测试将在项目中定义。
      </p>
     </li>
     <li>
      <p>
       <strong>
        识别典型的设备周期
       </strong>
       <br/>
       识别设备周期可以通过使用设备数据表或在Waver中查看实际功能测试并对其进行分析来实现。通常，设备周期和协议在数据表中定义。这些定义包括设备信号的行为和有关这些周期的时序规范。在下图中，显示了闪存的编程设备周期，取自其数据表。
       <br/>
       <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/214b0198bd64215a9f0dd3157c594ee7.png#pic_center"/>
      </p>
     </li>
     <li>
      <p>
       <strong>
        描述设备周期
       </strong>
       <br/>
       这个动作是测试转换过程中最重要和最关键的。描述周期的方式将影响将基于事件的测试划分为周期并进行转换的方式。尽管有许多方法可以定义一个周期，但在将设备周期划分为测试周期时，仍需要考虑一些约束条件。
      </p>
     </li>
     <li>
      <p>
       <strong>
        执行和检查事件测试循环
       </strong>
      </p>
     </li>
     <li>
      <p>
       <strong>
        在ATE限制中允许检查循环和测试集
       </strong>
      </p>
     </li>
     <li>
      <p>
       <strong>
        对测试进行抽样（模拟输出）
       </strong>
      </p>
     </li>
     <li>
      <p>
       <strong>
        在测试器语法中生成输出
       </strong>
      </p>
     </li>
     <li>
      <p>
       <strong>
        手动定时和生成pattern文件
       </strong>
      </p>
     </li>
    </ul>
    <h2>
     <a id="_98">
     </a>
     参考链接
    </h2>
    <p>
     <a href="https://wenku.baidu.com/view/503410306d1aff00bed5b9f3f90f76c660374c40.html?_wkts_=1689649874689&amp;bdQuery=%E8%8A%AF%E7%89%87functional%E6%B5%8B%E8%AF%95" rel="nofollow">
      芯片测试原理
     </a>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a:2f2f626c6f672e6373646e2e6e65742f467265696d616e6e2f:61727469636c652f64657461696c732f313331373838373337</p>

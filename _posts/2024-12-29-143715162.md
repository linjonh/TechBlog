---
layout: post
title: HarmonyOS开发-API-13发布首个Beta版本,部分已知的问题建议处理方案
date: 2024-12-29 21:35:32 +0800
categories: [华为]
tags: [华为,harmonyos]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=143715162
    alt: HarmonyOS开发-API-13发布首个Beta版本,部分已知的问题建议处理方案
artid: 143715162
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     HarmonyOS开发 API 13发布首个Beta版本，部分已知的问题建议处理方案
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
     HarmonyOS 5.0.1 Beta3，是HarmonyOS开发套件基于API 13正式发布的首个Beta版本。该版本在OS能力上主要增强了C API的相关能力，多个特性补充了C API供开发者使用。该版本对部分已知问题做了解决和优化，部分问题给出了解决方案和适配计划，具体见以下内容。
    </p>
    <h4>
     <a id="_2">
     </a>
     已知的问题
    </h4>
    <ul>
     <li>
      <strong>
       设备底部导航条遮挡应用界面，效果显示不佳
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】HarmonyOS NEXT Developer Beta版本支持导航条功能，如果应用未完成相关适配，可能存在界面遮挡，影响UX显示效果。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Developer Beta1
    </p>
    <p>
     【解决措施】应用可参考“开发应用沉浸式效果”完成ArkUI页面适配。针对WebView场景后续版本提供适配方案。
    </p>
    <ul>
     <li>
      <strong>
       设备低概率出现卡死、重启现象
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】设备低概率出现异常卡死、重启等现象。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Developer Beta1
    </p>
    <p>
     【解决措施】问题出现概率较低，不影响开发者调试，后续版本持续改进系统稳定性。针对异常卡死情况，可通过同时按下“音量下键”+“电源键”重启设备恢复。
    </p>
    <ul>
     <li>
      <strong>
       将电脑文件夹中的图片，直接拖拽到DevEco Studio工程目录下，概率出现编辑器光标不显示
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】将电脑本地文件夹中的图片，直接拖拽到DevEco Studio工程resources &gt; base &gt; media目录下，概率出现编辑器光标不显示。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Developer Beta1
    </p>
    <p>
     【解决措施】采用拷贝(Ctrl+C)、粘贴(Ctrl+V)的方式，将图片加入到DevEco Studio工程中。后续版本进行修复。
    </p>
    <ul>
     <li>
      <strong>
       在Web组件上滑动浏览PDF文件时体验流畅度欠佳
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】在浏览应用内Web组件上加载的PDF文件时，滑动体验不够流畅。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Developer Beta1
    </p>
    <p>
     【解决措施】后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       模拟器的浏览器无法将图片保存至图库
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】浏览器应用中选择任意图片，长按并保存，无法将图片保存至图库。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Developer Beta3
    </p>
    <p>
     【解决措施】后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       模拟器低概率出现崩溃现象
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】模拟器使用过程中有小概率出现崩溃。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Developer Beta3
    </p>
    <p>
     【解决措施】重启模拟器可继续使用，后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       应用调用Audio Picker的select接口只能选择音频库的音频文件，无法选择文件管理的音频文件
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】应用调用Audio Picker的select接口只能选择音频库的音频文件，无法选择文件管理的音频文件。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Developer Beta3
    </p>
    <p>
     【解决措施】Audio Picker使用媒体库提供的查询能力，因落实安全要求约束了媒体库只允许查询音频库的音频文件。后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       应用拍照成像时间过长
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】点击应用拍照，需要2~3秒后成像，期间多次点击无反应。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Developer Beta5
    </p>
    <p>
     【解决措施】为了提供较高的成像质量，并方便应用安全简易实现图片存储，系统提供了控件及二段式接入接口，需要适配接入。
    </p>
    <ul>
     <li>
      <strong>
       AI朗读功能部分场景下手机发烫
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】AI朗读功能持续点击下一首，耗电量消耗大，手机发烫。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Developer Beta5
    </p>
    <p>
     【解决措施】持续调用TTS合成音频导致功耗较高，后续版本持续优化。
    </p>
    <ul>
     <li>
      <strong>
       手机、平板上创建的子窗口在顶部会有部分区域点击失效
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】手机、平板上创建的子窗口，顶部有一块区域不会接收任何事件，点击无效。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Beta1
    </p>
    <p>
     【解决措施】后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       部分场景下相机预览不可用
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】部分场景下预览数据传递给相机会出现花屏，导致相机预览不可用。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Beta1
    </p>
    <p>
     【解决措施】在ArkTS层实现预览时，将OperationMode由 录像mode 改成CAPTURE可避免出现花屏。后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       使用offCanvas绘制弹幕会导致应用闪退
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】使用offCanvas绘制弹幕会导致应用闪退。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Beta1
    </p>
    <p>
     【解决措施】使用offCanvas绘制弹幕时，GC回收存在问题导致应用闪退。后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       共享模块内的sendable对象在子线程使用会导致应用闪退
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】共享模块内的sendable对象在子线程使用会导致应用闪退。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Beta1
    </p>
    <p>
     【解决措施】共享模块内的sendable对象在子线程使用时依赖的cjs模块未在全局缓存内缓存，在子线程提前加载依赖模块可规避。后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       使用安全控件保存图片或视频失败
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】视频长按，在弹出保存弹框点击保存按钮不生效，或者调用showAssetsCreationDialog报错。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Beta1
    </p>
    <p>
     【解决措施】showAssetsCreationDialog存在问题，调用失败。后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       安全弹框部分场景下无法点击授权
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】安全弹框部分场景下无法点击授权，SaveButton在onClick事件下返回失败信息“TEMPORARY_AUTHORIZATION_FAILED”。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Beta1
    </p>
    <p>
     【解决措施】安全控件被Custom组件遮挡，导致安全控件拒绝授权。后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       应用全屏下输入时旋转屏幕部分场景显示异常
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】应用全屏下输入时，软键盘弹出，旋转屏幕再旋转回来界面会显示异常，出现白块。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Beta1
    </p>
    <p>
     【解决措施】全量展开不支持纵向避让，软键盘错误避让导致绘制区域异常。后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       视频通过AVCodec Kit获取轨道起始时间错误导致进度条显示异常
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】视频通过AVCodec Kit获取轨道起始时间，获取的数据错误，以此显示进度条会异常显示。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Beta1
    </p>
    <p>
     【解决措施】AVCodec Kit新增接口获取轨道起始时间信息 OH_MD_KEY_TRACK_START_TIME单位错误导致此问题。后续版本规划解决。
    </p>
    <ul>
     <li>
      <strong>
       在桌面上滚动显示歌词部分场景下出现卡死并重启设备
      </strong>
     </li>
    </ul>
    <p>
     【问题现象】在桌面上滚动显示歌词，传递的歌词内容错误的情况下，部分场景出现卡死并重启设备。
    </p>
    <p>
     【引入版本】HarmonyOS NEXT Beta1
    </p>
    <p>
     【解决措施】传递给AVMetadata属性lyric的歌词内容错误无法解析的情况下会导致桌面crash，进而设备重启。后续版本规划解决。
    </p>
    <blockquote>
     <p>
      以上内容来源于华为开发者官网，想了解更多关于API13 Beta版本变更及应用情况，可点此链接
      <a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-releases-V13/overview-V13" rel="nofollow">
       HarmonyOS 5.0.1
       <br/>
       Beta3
      </a>
      学习。
     </p>
    </blockquote>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



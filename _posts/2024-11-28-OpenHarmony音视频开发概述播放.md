---
layout: post
title: 2024-11-28-OpenHarmony音视频开发概述播放
date: 2024-11-28 13:53:02 +0800
categories: []
tags: [音视频]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=140593829
  alt: OpenHarmony音视频开发概述播放
artid: 140593829
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     OpenHarmony音视频开发概述：播放
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
    <h2 id="h1_一、简介_1721567101315">
     一、简介
    </h2>
    <p>
     在音视频开发指导中，将介绍各种涉及音频、视频播放或录制功能场景的开发方式，指导开发者如何使用系统提供的音视频 API 实现相应功能。比如使用 AVPlayer 实现视频播放器，列表循环播放一系列节目等。
     <br/>
     本篇文章介绍音视频播放功能，由
     <a href="https://gitee.com/openharmony/docs/blob/master/zh-cn/application-dev/reference/apis-media-kit/js-apis-media.md#ohosmultimediamedia-%E5%AA%92%E4%BD%93%E6%9C%8D%E5%8A%A1" id="textarea_1721547712734_1721567101339_0" rel="nofollow">
      <span class="md_link_url">
       media服务
      </span>
     </a>
     提供相关能力。
    </p>
    <h2 id="h1_二、开发说明_1721567101316">
     二、开发说明
    </h2>
    <p>
     在开发音视频播放功能之前，需要先了解媒体播放的一些概念
    </p>
    <p>
     播放过程：解协议 &gt; 解封装 &gt; 音视频解码 &gt; 同步 &gt; 音视频渲染
    </p>
    <p>
     网络协议：比如http、hls、rtsp
    </p>
    <p>
     封装格式：比如mp4、mpeg-ts、mkv
    </p>
    <p>
     编码格式：比如h264、h265、aac
    </p>
    <h2 id="h1_三、视频播放方案_1721567101316">
     三、视频播放方案
    </h2>
    <p>
     当前提供两种视频播放开发的方案：
    </p>
    <p>
     AVPlayer：功能完善一体化的音视频播放ArkTS/JS API，集成网络和本地资源解析，解封装，音视频解码、同步、渲染功能，适用于对媒体资源进行端到端播放的场景，只需设置本地文件描述符或网络url即可直接播放mp4、mpegts、mkv等格式的视频文件。
    </p>
    <p>
     Video组件：封装了视频播放的基础能力，需要设置数据源以及基础信息即可播放视频，但相对扩展能力较弱。Video组件由ArkUI提供能力，可参考UI开发文档-
     <a href="https://gitee.com/openharmony/docs/blob/master/zh-cn/application-dev/ui/arkts-common-components-video-player.md" id="textarea_1721547712734_1721567101339_1" rel="nofollow">
      <span class="md_link_url">
       Video组件
      </span>
     </a>
     。
    </p>
    <h2 id="h1_四、avplayer_1721567101316">
     四、AVPlayer
    </h2>
    <p>
     AVPlayer 提供了功能完善的一体化播放能力，应用只需要提供媒体资源，不负责数据解析和解码就可达成播放效果。
    </p>
    <h3 id="h2_1、音频播放交互图_1721567101316">
     1、音频播放交互图
    </h3>
    <p>
    </p>
    <p class="md_img_container">
     <img align="left" alt="img" class="md_img" src="https://i-blog.csdnimg.cn/blog_migrate/aa814ace61f3373ef47f6e1fd55fb497.png"/>
    </p>
    <p>
    </p>
    <p>
     音乐应用通过调用AVPlayer ArkTS API接口实现相应功能时，框架层会通过媒体播放服务将资源解析成音频编码数据流，再经过软件解码后输出至音频框架，由音频服务输出至音频HDI渲染输出，实现音频播放功能。完整的音频播放需要应用、Player Framework、Audio Framework、音频HDI共同实现。
    </p>
    <h3 id="h2_2、视频播放交互图_1721567101316">
     2、视频播放交互图
    </h3>
    <p>
    </p>
    <p class="md_img_container">
     <img align="left" alt="img" class="md_img" src="https://i-blog.csdnimg.cn/blog_migrate/1cb31daeb8789b8f1da00d7dbc324c4a.png"/>
    </p>
    <p>
    </p>
    <p>
     应用通过AVPlayer ArkTS API接口接口实现视频播放功能时，框架层会通过播放服务将视频资源解析成单独的音频编码数据流和视频编码数据流，音频数据流经过软件解码后输出至音频框架层，再传递到硬件接口层的音频HDI，实现音频播放功能。视频数据流经过硬件或软件解码后输出至图形渲染框架层，再输出至硬件接口层的显示HDI，完成图形渲染。
     <br/>
     上图中，数字标注表示需要数据与外部模块的传递。
    </p>
    <p>
     （1）应用通过XComponent组件获取窗口SurfaceID，获取方式参考
     <a href="https://gitee.com/openharmony/docs/blob/master/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-basic-components-xcomponent.md" id="textarea_1721547712734_1721567101339_2" rel="nofollow">
      <span class="md_link_url">
       XComponent
      </span>
     </a>
     ；
    </p>
    <p>
     （2）应用把媒体资源、SurfaceID传递给AVPlayer接口；
    </p>
    <p>
     （3）播放服务将视频编码数据流输出给硬件解码HDI，解码获得视频原始数据（YUV或RGB）；
    </p>
    <p>
     （4）播放服务同步后把音频PCM数据流输出给Audio Framework，Audio Framework输出给音频HDI；
    </p>
    <p>
     （5）播放服务同步后把视频原始数据（YUV或RGB）输出给Graphic Framework，Graphic Framework输出给显示HDI。
    </p>
    <h3 id="h2_3、支持的格式与协议_1721567101316">
     3、支持的格式与协议
    </h3>
    <p>
     当前AVPlayer支持的协议、音视频容器格式和音视频编解码格式有限，且不同版本支持情况可能有差异，以实际为准。
     <br/>
     （1）支持的协议如下：
     <br/>
     支持file descriptor，禁止file path
     <br/>
     网络协议支持http、https、hls、http-flv(5.0-beta1)，后续有支持dash的趋势
     <br/>
     （2）支持的音频容器格式如下：
     <br/>
     m4a、aac、mp3、ogg、wav、flac、ape、amr(5.0-beta1)
     <br/>
     （3）支持的视频容器格式如下：
     <br/>
     mp4、mpegts、mkv、fmp4(5.0-beta1)、flv(5.0-beta1)，后续有支持mpegps、asf的趋势
     <br/>
     （3）支持的音频解码格式
     <br/>
     mp3、aac、aac_latm、vorbis、flac、ape、amrnb/amrwb(5.0-beta1)，后续可能有支持audio vivid、opus
     <br/>
     （4）支持的视频编码格式
     <br/>
     h264、h265、h265_10bit(4.1-release)，后续有支持h266的趋势
     <br/>
     （5）支持的字幕格式
     <br/>
     srt(4.0-release)，后续有可能支持webvtt
    </p>
    <h2 id="h1_五、开发指导_1721567101316">
     五、开发指导
    </h2>
    <h3 id="h2_1、avplayer状态机_1721567101316">
     1、AVPlayer状态机
    </h3>
    <p>
    </p>
    <p class="md_img_container">
     <img align="left" alt="img" class="md_img" src="https://i-blog.csdnimg.cn/blog_migrate/687903b33eada9a53f3da7c70a670ba4.png"/>
    </p>
    <p>
    </p>
    <h3 id="h2_2、开发步骤及注意事项_1721567101316">
     2、开发步骤及注意事项
    </h3>
    <p>
     详细的API说明可参考
     <a href="https://gitee.com/openharmony/docs/blob/master/zh-cn/application-dev/reference/apis-media-kit/js-apis-media.md#avplayer9" id="textarea_1721547712734_1721567101339_3" rel="nofollow">
      <span class="md_link_url">
       AVPlayer API参考
      </span>
     </a>
     。
    </p>
    <p>
     播放的全流程包含：创建AVPlayer，设置播放资源和窗口，设置播放参数（音量/倍速/缩放模式），播放控制（播放/暂停/跳转/停止），重置，销毁资源。在进行应用开发的过程中，开发者可以通过AVPlayer的state属性主动获取当前状态或使用on('stateChange')方法监听状态变化。如果应用在视频播放器处于错误状态时执行操作，系统可能会抛出异常或生成其他未定义的行为。
    </p>
    <p>
     （1）调用createAVPlayer()创建AVPlayer实例，初始化进入idle状态。
    </p>
    <p>
     （2）设置业务需要的监听事件。常用的监听事件包括：
     <br/>
     stateChange 必要事件，监听AVPlayer的状态变化。
     <br/>
     error 必要事件，监听AVPlayer的错误信息。
     <br/>
     durationUpdate 监听码流的播放总时长。
     <br/>
     timeUpdate 监听码流当前的播放位置。
     <br/>
     seekDone 监听seek()请求完成情况。
    </p>
    <p>
     （3）设置资源：设置属性fdsrc或url，AVPlayer进入initialized状态。
    </p>
    <p>
     （4）设置窗口：获取并设置属性SurfaceID，用于设置显示画面。 应用需要从XComponent组件获取surfaceID。
    </p>
    <p>
     （5）准备播放：调用prepare()，AVPlayer进入prepared状态，此时可以获取duration，设置缩放模式、音量等。
    </p>
    <p>
     （6）视频播控：播放play()，AVPlayer进入playing状态，如果码流播放结束，会进入completed状态，此时再次调用play()，会重新进入playing状态，并从起始位置开始播放。
    </p>
    <p>
     （7）播放过程中可以响应用户的操作，如暂停pause()，跳转seek()，设置倍速、停止stop() 等操作。
    </p>
    <p>
     （8）（可选）更换播放资源：调用reset()重置资源，AVPlayer重新进入idle状态，允许重新新的媒体资源。
    </p>
    <p>
     （9）退出播放：调用release()销毁实例，AVPlayer进入released状态，退出播放。
    </p>
    <h3 id="h2_3、应用demo_1721567101316">
     3、应用demo
    </h3>
    <p>
     基于AVPlayer ArkTs API的视频播放应用：
     <a href="https://gitee.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/VideoPlay" id="textarea_1721547712734_1721567101339_4" rel="nofollow">
      <span class="md_link_url">
       VideoPlay
      </span>
     </a>
    </p>
    <p>
     基于Video组件的视频播放应用：
     <a href="https://gitee.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/VideoShow" id="textarea_1721547712734_1721567101339_5" rel="nofollow">
      <span class="md_link_url">
       VideoShow
      </span>
     </a>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f6d305f36343737383736332f:61727469636c652f64657461696c732f313430353933383239</p>

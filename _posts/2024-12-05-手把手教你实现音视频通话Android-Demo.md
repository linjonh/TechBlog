---
layout: post
title: 2024-12-05-手把手教你实现音视频通话Android-Demo
date: 2024-12-05 18:35:17 +0800
categories: []
tags: [音视频,android,音视频SDK,Android开发,RTC,直播SDK]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=135132336
  alt: 手把手教你实现音视频通话Android-Demo
artid: 135132336
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     手把手教你实现音视频通话Android Demo
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
     <a id="_0">
     </a>
     前言
    </h3>
    <p>
     目前音视频应用越来越丰富，而且各厂商都提供功能丰富的 SDK ，如何集成第三方音视频SDK，这是我们这篇文章主要的分享内容。本次我们选择七牛 RTC SDK 作为演示，将手把手教大家如何集成 RTC SDK 实现 1v1 的
     <code>
      Android demo
     </code>
     。
    </p>
    <p>
     QNDroidRTC 是七牛推出的一款适用于 Android 平台的音视频通话 SDK，提供了包括美颜、滤镜、音视频通话等多种功能，提供灵活的接口，支持高度定制以及二次开发，可以很方便地在 Android 平台上开发出一款基于实时音视频的应用。
    </p>
    <h2>
     <a id="__5">
     </a>
     一 环境搭建
    </h2>
    <p>
     在开始集成之前，我们应该先搭建一套Android开发环境，比如
    </p>
    <ul>
     <li>
      JDK
     </li>
     <li>
      Android Studio
     </li>
     <li>
      RTC SDK 版本
     </li>
     <li>
      加房token
     </li>
    </ul>
    <p>
     以上具体的信息可以参考
     <a href="https://developer.qiniu.com/rtc/8765/prepare-android-development" rel="nofollow">
      官方文档
     </a>
     ，RTC SDK版本 本文用的是v5.2.7版本，
     <a href="https://github.com/pili-engineering/QNRTC-Android/tree/master/releases">
      下载地址
     </a>
     。
    </p>
    <h2>
     <a id="__16">
     </a>
     二 基本配置
    </h2>
    <ol>
     <li>
      创建Android项目，集成 RTC SDK
     </li>
    </ol>
    <p>
     创建一个 Android 项目，名为“
     <code>
      CameraMicrophoneDemo
     </code>
     ”，将 repo 中 releases 目录下的 jar 包和动态库分别拷贝到下面的文件中
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/c117efa7d873a14448231bc68617ad49.png"/>
    </p>
    <p>
     拷贝完成之后，需要在项目的 build.gradle 脚本中添加 SDK 的依赖，我们看到项目组织架构中有两个 build.gradle 脚本文件，外层的表示 root project 的 gradle 文件，里面的表示项目的 gradle 文件。我们所要配置的是项目的也就是里面的 gradle 脚本文件。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/bf1a28e3eb5920b09baa49892536e8c3.png"/>
    </p>
    <ol start="2">
     <li>
      添加相关权限
     </li>
    </ol>
    <p>
     在工程的
     <code>
      AndroidManifest.xml
     </code>
     中增加 uses-permission 声明，例如摄像头、麦克风、蓝牙等权限
    </p>
    <pre><code class="prism language-jsx">&lt;uses-permission android:name="android.permission.INTERNET" /&gt;
&lt;uses-permission android:name="android.permission.RECORD_AUDIO" /&gt;
&lt;uses-permission android:name="android.permission.CAMERA" /&gt;
&lt;uses-permission android:name="android.permission.BLUETOOTH" 
android:maxSdkVersion="30" /&gt;
&lt;uses-permission android:name="android.permission.BLUETOOTH_CONNECT" /&gt;
&lt;uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" /&gt;
&lt;uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" /&gt;
&lt;uses-permission android:name="android.permission.ACCESS_WIFI_STATE" /&gt;
</code></pre>
    <p>
     在 Android 6.0（API 23）开始，用户需要在应用运行时授予权限，而不是在应用安装时授予，同时权限分为正常权限和危险权限两种类型，在实时音视频SDK中，用户需要在进入音视频通话前选择一个适当的时机动态申请 CAMERA、RECORD_AUDIO、BLUETOOTH_CONNECT 权限，需要你想了解更加，可以参考
     <a href="https://developer.android.com/training/permissions/requesting?hl=zh-cn" rel="nofollow">
      Android官方文档
     </a>
     。
    </p>
    <ol start="3">
     <li>
      创建一个 activity，名为：
      <code>
       CameraMicActivity.java
      </code>
      ，如上图所示。
     </li>
    </ol>
    <pre><code class="prism language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CameraMicActivity</span> <span class="token keyword">extends</span> <span class="token class-name">AppCompatActivity</span> <span class="token punctuation">{<!-- --></span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_camera_mic<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <h3>
     <a id="__59">
     </a>
     三 音视频实现逻辑
    </h3>
    <p>
     在实现音视频通话之前，应该先了解下音视频通话的实现流程以及专业术语，比如，创建 track、加房、采集、发布 track、订阅 track 等等，不要怕不理解也没关系，官网文档有详细说明。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/5f868610fb43a537e024e14c8c3444c8.png">
      <br/>
      实现音视频通话，总共需要9步，接下来会详细的手把手开始实践。
     </img>
    </p>
    <h3>
     <a id="___63">
     </a>
     第一步 初始化视图
    </h3>
    <p>
     初始化视图包括本地预览视频和远端视频，在初始化之前，应该先设置好本地和远端对应视图的控件，在 res→layout→activity_camera_mic.xml 中设置布局，详细如下
    </p>
    <pre><code class="prism language-xml"><span class="token prolog">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FrameLayout</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res/android<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>com.qiniu.droid.rtc.QNSurfaceView</span>
        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@+id/local_surface_view<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>com.qiniu.droid.rtc.QNSurfaceView</span>
        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@+id/remote_surface_view<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150dp<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150dp<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FrameLayout</span><span class="token punctuation">&gt;</span></span>
</code></pre>
    <p>
     然后在
     <code>
      CameraMicActivity.java
     </code>
     中初始化视图。
    </p>
    <pre><code class="prism language-java"><span class="token comment">// 初始化视图</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">initView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token comment">// 初始化本地预览视图</span>
    mLocalWindow <span class="token operator">=</span> <span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>local_surface_view<span class="token punctuation">)</span><span class="token punctuation">;</span>
    mLocalWindow<span class="token punctuation">.</span><span class="token function">setZOrderOnTop</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 初始化远端预览视图</span>
    mRemoteWindow <span class="token operator">=</span> <span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>remote_surface_view<span class="token punctuation">)</span><span class="token punctuation">;</span>
    mRemoteWindow<span class="token punctuation">.</span><span class="token function">setZOrderOnTop</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 在onCreate中调用initView()</span>
<span class="token function">initView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <h3>
     <a id="_RTC_100">
     </a>
     第二步 初始化RTC
    </h3>
    <p>
     QNRTC 提供 SDK 的入口方法，可以通过它进行 SDK 的初始化，各个类型 Track 的创建等操作。
    </p>
    <pre><code class="prism language-java"><span class="token comment">// 在onCreate()中初始化RTC</span>
<span class="token constant">QNRTC</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">QNRTCEventListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onAudioRouteChanged</span><span class="token punctuation">(</span><span class="token class-name">QNAudioDevice</span> qnAudioDevice<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <h3>
     <a id="__QNRTCClient__114">
     </a>
     第三步 创建 QNRTCClient 对象
    </h3>
    <p>
     QNRTCClient 提供和房间相关的一些列方法，通过它我们可以实现加入房间，在房间内发布或者订阅相应的音视频轨道等操作。
    </p>
    <p>
     在 Activity 生命周期中的
     <code>
      onCreate()
     </code>
     中完成，
     <a href="https://developer.qiniu.com/rtc/api/8643/QNClientEventListener" rel="nofollow">
      QNClientEventListener
     </a>
     为音视频通话过程中必须的事件监听回调。
    </p>
    <pre><code class="prism language-java">mClient <span class="token operator">=</span> <span class="token constant">QNRTC</span><span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span>mClientEventListener<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre>
    <h3>
     <a id="_Track_125">
     </a>
     第四步 创建本地音视频Track
    </h3>
    <p>
     通过
     <code>
      createCameraVideoTrack()
     </code>
     创建视频Track；通过
     <code>
      createMicrophoneAudioTrack()
     </code>
     创建音频Track。
    </p>
    <pre><code class="prism language-java">mCameraVideoTrack <span class="token operator">=</span> <span class="token constant">QNRTC</span><span class="token punctuation">.</span><span class="token function">createCameraVideoTrack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mMicrophoneAudioTrack <span class="token operator">=</span> <span class="token constant">QNRTC</span><span class="token punctuation">.</span><span class="token function">createMicrophoneAudioTrack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <p>
     为了更好的控制采集的流程，可以在生命周期函数中添加如下调用：
    </p>
    <pre><code class="prism language-java"><span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onResume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onResume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 开始视频采集</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mCameraVideoTrack <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            mCameraVideoTrack<span class="token punctuation">.</span><span class="token function">startCapture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 停止视频采集</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mCameraVideoTrack <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            mCameraVideoTrack<span class="token punctuation">.</span><span class="token function">stopCapture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre>
    <h3>
     <a id="__156">
     </a>
     第五步 加入房间
    </h3>
    <pre><code class="prism language-java">mClient<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"QxZuxxxxxx"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">LocalWindow</span> <span class="token operator">=</span> <span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>local_surface_view<span class="token punctuation">)</span><span class="token punctuation">;</span>
mRemoteWindow <span class="token operator">=</span> <span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>remote_surface_view<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//渲染</span>
mCameraVideoTrack<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span>mLocalWindow<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <p>
     另外，创建 Track 这件事可以放在加房之前，也可以放在加房之后。
     <code>
      join()
     </code>
     需要填写token信息，可以在官方文档注册获取。
    </p>
    <h3>
     <a id="__Track_169">
     </a>
     第六步 发布本地音视频 Track
    </h3>
    <pre><code class="prism language-java"><span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">QNClientEventListener</span> mClientEventListener <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QNClientEventListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onConnectionStateChanged</span><span class="token punctuation">(</span><span class="token class-name">QNConnectionState</span> qnConnectionState<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">QNConnectionDisconnectedInfo</span> qnConnectionDisconnectedInfo<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>qnConnectionState <span class="token operator">==</span> <span class="token class-name">QNConnectionState</span><span class="token punctuation">.</span><span class="token constant">CONNECTED</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            mClient<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">QNPublishResultCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPublished</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                    <span class="token comment">// Track 发布成功时回调</span>
                <span class="token punctuation">}</span>

                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onError</span><span class="token punctuation">(</span><span class="token keyword">int</span> errorCode<span class="token punctuation">,</span> <span class="token class-name">String</span> errorMessage<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
                    <span class="token comment">// Track 发布失败时回调</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> mCameraVideoTrack<span class="token punctuation">,</span> mMicrophoneAudioTrack<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre>
    <h3>
     <a id="__Track_193">
     </a>
     第七步 订阅远端音视频 Track
    </h3>
    <pre><code class="prism language-java"><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onSubscribed</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">QNRemoteAudioTrack</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">QNRemoteVideoTrack</span><span class="token punctuation">&gt;</span></span> remoteVideoTracks<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">QNRemoteVideoTrack</span> track <span class="token operator">:</span> remoteVideoTracks<span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
        track<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span>mRemoteWindow<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <h3>
     <a id="__204">
     </a>
     第八步 离开房间
    </h3>
    <pre><code class="prism language-java">mClient<span class="token punctuation">.</span><span class="token function">leave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <h3>
     <a id="__210">
     </a>
     第八步 销毁并释放资源
    </h3>
    <p>
     在整个 Activity 销毁时，用户需要调用以下代码对资源进行释放，一般此操作建议在 Activity 生命周期的
     <code>
      onDestroy()
     </code>
     中进行，示例代码如下：
    </p>
    <pre><code class="prism language-java"><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>mClient <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        mClient<span class="token punctuation">.</span><span class="token function">leave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mClient <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token constant">QNRTC</span><span class="token punctuation">.</span><span class="token function">deinit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre>
    <p>
     在离开房间前后加了一个判断，主要是防止出现空指针问题；另外，七牛RTC SDK提供了一个 deinit() 反初始化方法，虽然java中有垃圾回收机制，但是还需要释放底层，或者C++层的一些资源。
    </p>
    <p>
     连麦效果如下：
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/cfbc3a5e0552b34815dc80c1802adf94.png">
      <br/>
      如果你想获取完整代码，可以看看下方【小曾的IT之旅】回复“demo”即可获取。
     </img>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f34323138323539392f:61727469636c652f64657461696c732f313335313332333336</p>

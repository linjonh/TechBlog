---
layout:  post
title:  "Firebase 云消息传递"
date:  2020-08-06 16:48:00 +0800
categories: Firebase massage 云消息传递
tags:  Firebase massage 云消息传递
author: 林建有
---
* content
{:toc}
# Firebase消息推送配置

## 配置接入firebase SDK

> 增加Google gradle插件：在根级（项目级）Gradle 文件 (`build.gradle`) 

```java
buildscript {

  repositories {
    // Check that you have the following line (if not, add it):
    google()  // Google's Maven repository
  }

  dependencies {
    // ...

    // Add the following line:
    classpath 'com.google.gms:google-services:4.3.3'  // Google Services plugin
  }
}

allprojects {
  // ...

  repositories {
    // Check that you have the following line (if not, add it):
    google()  // Google's Maven repository
    // ...
  }
}
```
<!-- more -->
> 在app module的grdle下添加

```java
apply plugin: 'com.android.application'
// Add the following line:
apply plugin: 'com.google.gms.google-services'  // Google Services plugin

android {
  // ...
}
```

>添加firebase SDK到应用依赖

```java
dependencies {
  // ...

  // Add the Firebase SDK for Google Analytics
  implementation 'com.google.firebase:firebase-analytics:17.4.4'

  // Add the SDK for Firebase Cloud Messaging
  implementation 'com.google.firebase:firebase-messaging:20.2.3'

  // Getting a "Could not find" error? Make sure that you've added
  // Google's Maven repository to your root-level build.gradle file
}
```

## 下载google-services.json文件

从firebase 控制台创建firebase项目，然后获取google-services.json文件配置，放置到app项目变体目录里

# 代码接入

## 修改应用清单

> 在Manifest 添加一项继承 FirebaseMessagingService 的服务 ，该服务用于接收消息自自定义处理
>
> 除接收应用通知外，如果您还希望在后台进行更多的消息处理工作，则必须添加此服务。要接收前台应用中的通知、接收数据负载以及发送上行消息等，您必须继承此服务。
```xml
<service
    android:name=".java.MyFirebaseMessagingService"
    android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>
```
> 可选配置meta-data 通知的icon和文字颜色，还有通知渠道配置

```xml
<!-- Set custom default icon. This is used when no icon is set for incoming notification messages.
     See README(https://goo.gl/l4GJaQ) for more. -->
<meta-data
    android:name="com.google.firebase.messaging.default_notification_icon"
    android:resource="@drawable/ic_stat_ic_notification" />
<!-- Set color used with incoming notification messages. This is used when no color is set for the incoming
     notification message. See README(https://goo.gl/6BKBk7) for more. -->
<meta-data
    android:name="com.google.firebase.messaging.default_notification_color"
    android:resource="@color/colorAccent" />
<meta-data
    android:name="com.google.firebase.messaging.default_notification_channel_id"
    android:value="@string/default_notification_channel_id" />
```

## 测试所需令牌代码
> 添加便于测试发送消息时需要的令牌：获取令牌代码

```java
FirebaseInstanceId.getInstance().getInstanceId()
        .addOnCompleteListener(new OnCompleteListener<InstanceIdResult>() {
            @Override
            public void onComplete(@NonNull Task<InstanceIdResult> task) {
                if (!task.isSuccessful()) {
                    Log.w(TAG, "getInstanceId failed", task.getException());
                    return;
                }

                // Get new Instance ID token
                String token = task.getResult().getToken();

                // Log and toast
                String msg = getString(R.string.msg_token_fmt, token);
                Log.d(TAG, msg);
                Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
            }
        });
```

# 消息处理

## APP未启动或在后台运行情况，消息处理

该种情况下firebase会自动生成一个notification 到通知栏，并把数据负载在点击了通知后传递给app启动器的activity的intent的extras里面。

所以需要在启动器activity里接收firebase的extras字段获取消息数据，都是字符型。

```java
  /**
     * @param extras Bundle extras = getIntent().getExtras();
     * @param intent new Intent()
     */
private void addFirebaseExtrasData(Bundle extras, Intent intent) {
    if (extras != null) {
        //firebase推送，APP没有启动时，在这些情况下，通知将传送至设备的系统任务栏，数据载荷则传送至启动器 Activity 的 intent 的 extras 属性。
        //data 的键值对都是字符串类型
        if (extras.containsKey("clickType")) {
            String type = extras.getString("clickType");
            //1:deeplink
            //2:broswer
            //3:broswer(APP WebView)
            if ("1".equals(type)) {
                String page = extras.getString("clickValue");
                if (page != null && !TextUtils.isEmpty(page)) {
                    if (page.equals(Constants.ACTION_TOOLTAB)
                            || page.equals(Constants.ACTION_TRIM)
                            || page.equals(Constants.ACTION_COMPRESS)
                            || page.equals(Constants.ACTION_CROP)
                            || page.equals(Constants.ACTION_EDITVIDEO)
                            || page.equals(Constants.ACTION_VIDEOTOAUDIO)
                            || page.equals(Constants.ACTION_SKIN)
                    ) {
                        intent.putExtra(StartRecordNotifications.HOME_PAGER_INDEX, 2);
                    }
                }
                intent.putExtra(FireBaseOpenNotificationService.OPEN_ACTION, page);
                intent.putExtra("from", "firebase");
            }
        }
    }
}
```

## APP已启动且在前台运行情况，消息处理

该种情况下firebase会把消息传递给自定义继承的FirebaseMessagingService 的服务里的`onMessageReceived`方法里

```java
@Override
public void onMessageReceived(RemoteMessage remoteMessage) {
     MyLog.e(remoteMessage.getNotification());
     MyLog.e("From: " + remoteMessage.getFrom());
    // Check if message contains a data payload.
    Map<String, String> data = remoteMessage.getData();//获取自定义数据
    if (data.size() > 0) {
        MyLog.e("Message data payload: " + data);
        
}
```

# 为客户端订阅主题（用于firebase后台定向推送）

> 若要订阅某个主题，客户端应用需使用 FCM 主题名称调用 Firebase 云消息传递的 `subscribeToTopic()` 方法。此方法会返回一个 `Task`，完成监听器可以使用它来确定订阅是否成功, 若要退订，客户端应用需使用主题名称调用 Firebase 云消息传递的 `unsubscribeFromTopic()` 方法。

```java
FirebaseMessaging.getInstance().subscribeToTopic("weather")
        .addOnCompleteListener(new OnCompleteListener<Void>() {
            @Override
            public void onComplete(@NonNull Task<Void> task) {
                String msg = getString(R.string.msg_subscribed);
                if (!task.isSuccessful()) {
                    msg = getString(R.string.msg_subscribe_failed);
                }
                Log.d(TAG, msg);
                Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
            }
        });
```


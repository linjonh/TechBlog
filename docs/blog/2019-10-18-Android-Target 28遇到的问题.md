---
title: "Target 28遇到的问题"
date: 2019-10-18T17:15:26+08:00
categories: ["Android"]
tags: ["Android","TargetSDK28"]
---
# Target 28遇到的问题：

## 1. unescaped apostrophe in string  array  （string.xml文件里）

   这是修改了buildTools版本为28.0.3导致单引号字符串定位行数不准确的问题

   解决办法：升级gradle为最新的。

## 2. 升级gradle为最新之后出现，SVNRevision revision = status.getRevision();脚本出现空指针问题。

解决办法：修改方法

```java
def getSvnRevision() {
    ISVNOptions options = SVNWCUtil.createDefaultOptions(true)
    SVNClientManager clientManager = SVNClientManager.newInstance(options)
    SVNStatusClient statusClient = clientManager.getStatusClient()
    SVNStatus status = statusClient.doStatus(rootDir, false)
    if (status != null) {
        SVNRevision revision = status.getRevision()
        def svnNum = revision.getNumber()
        println("Svn Version: " + svnNum)
        return svnNum
    } else {
        return null
    }
}
```

## 3.  classpath 'io.fabric.tools:gradle:1.25.1升级到classpath 'io.fabric.tools:gradle:1.25.4

否则和classpath 'com.android.tools.build:gradle:3.5.1‘不匹配，（gradle-5.4.1-all.zip）

## 4. canvas.save(Canvas.ALL_SAVE_FLAG); 方法target28API已经没有参数

解决办法：删除参数

## 5.target 28 透明activity设置

RecorderSplashActivity.java的manifest的orientation配置为unspacifed

GoogleVipKeepDialog的orientation去除

## 6.网络使用到的Apache库修改

参见target28升级SDK版本修改点的md文档

## 7. 修复MaterialStickerFragment贴图素材下载使用了apache的HTTPClient导致release版本没法请求到服务器的问题



## 8.【升级到到target28】base64 API不使用Apache的API改为Android 的API 

```java
GeneratePrivateKey.java
```


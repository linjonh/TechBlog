---
layout:  post
title:  "build.gradle里APK重命名方法"
date:  2021-04-25T15:18:00+08:00
categories: APK rename
tags:  APK rename
author: 林建有
---
* content
{:toc}

# 打包APK重命名方式，解决生成APK时，build生成的APK大小不正确的问题。

在APP的build.gradle文件里增加`setArchivesBaseName`属性方法代码

```groovy
    productFlavors {
        vrecorder {
            versionCode rootProject.appCode
            versionName rootProject.appVersion
            setArchivesBaseName(getOutputBaseName(versionCode, versionName, "vrecorder"))
        }
```

定义`getOutputBaseName`方法：

```groovy
/**
 * 设置输出APK别名
 */
String getOutputBaseName(versionCode, versionName, appName) {
    log("setOutputName:")
    //修改文件名
    def fileName = appName + "_V${versionName}_${versionCode}_Svn${getSvnRevision()}_${getReleaseTime()}"
    log("ArchivesBaseName = [" + fileName + "]")
    return fileName
}

private log(msg) {
    logger.log(LogLevel.ERROR, msg)
}
```

不再使用就的setOutput（）的android.productFlavors.all { flavor -> ...}遍历方案，因为生成的APK没有实时的更新APK名称，还会导致编译生成APK时容易第一次出错，需要clear项目再编译才行的问题。
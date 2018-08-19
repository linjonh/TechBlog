---
layout: post
title: Android Gradle build 构建脚本语法用法
date: 2018-08-15 11:32
categories: Android Gradle
tags: Android Gradle groovy
---

* content
{:toc}

## Android 构建脚本简介

Android APP 构建脚本采用的是Gradle框架。Gradle是一种构建builde编译框架，采用的是groovy语言。谷歌官方有使用自己的一套builde 插件依赖 配置在project.gradle文件里：

```groovy
buildscript {
    repositories {
        jcenter()
        google()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.0.1'
               
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
```

<!-- more -->

## 项目build.gradle配置

```groovy
apply plugin: 'com.android.application'

configurations.all {
    resolutionStrategy {
        force "com.android.support:customtabs:${rootProject.ext.supportLibVersion}"
    }
}
android {
    signingConfigs {
        release {
            keyAlias 'releaseKEY'
            keyPassword '123456'
            storeFile file('../android.keystore')
            storePassword '123456'
        }
    }
    compileSdkVersion rootProject.ext.compileSdkVer
    buildToolsVersion rootProject.ext.buildToolVer
     defaultConfig {
        //applicationId 友盟推送必须加的全局变量 (打包时请更换成应用包名)
        applicationId "com.funcamerastudio.videomaker"
        minSdkVersion rootProject.ext.minSdkVer
        targetSdkVersion rootProject.ext.targetSdkVer
        versionCode 9
        versionName "1.6.5"
        // Enabling multidex support
        multiDexEnabled true
//        vectorDrawables.useSupportLibrary = true
        ndk {
            abiFilters "armeabi", "armeabi-v7a"//编译ndk lib.so支持的平台
        }
    }
        dexOptions {
//        incremental true
        javaMaxHeapSize "4g"
        preDexLibraries = false
    	}
        buildTypes {
        debug {
            /**
             * debug环境下加入Release签名，方便测试。
             * 打Release包时，需要注释掉signingConfigs。
             * **/
            signingConfig signingConfigs.release
        }
        release {
            signingConfig signingConfigs.release
            shrinkResources true
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
     flavorDimensions 'vedioMaker'//风味维度，gradle3.0以上必须要设置一个以上维度

    productFlavors {
        main {//default main sourceSets shared by other flavor,资源可以被其他风味共享
            dimension 'vedioMaker'
            versionCode 9
            versionName "1.6.5"
            applicationId PKGNAME_VIDEO_MAKER_001
            manifestPlaceholders = [  
                	UmengChanel        : umen_chanel_01
                    , umeng_key        : umeng_key
                ]
               //add  BuildConfig fields
            buildConfigField("String", "googleId", googleId)
            }
   }
    // 去掉第三方jar包中重复的类
    packagingOptions {

        exclude 'META-INF/DEPENDENCIES.txt'
        exclude 'META-INF/LICENSE.txt'
        exclude 'META-INF/NOTICE.txt'
        exclude 'META-INF/NOTICE'
        exclude 'META-INF/LICENSE'
        exclude 'META-INF/DEPENDENCIES'
        exclude 'META-INF/notice.txt'
        exclude 'META-INF/license.txt'
        exclude 'META-INF/dependencies.txt'
        exclude 'META-INF/LGP2.1'
        exclude 'META-INF/ASL2.0'
    }
}
repositories {
    flatDir {
        dirs 'libs' //this way we can find the.aar file in libs folfer
    }
    google()
}    
```

### 设置本地查找引用.aar的gradle依赖用法是

```groovy
repositories {
    flatDir {
        dirs 'libs' //this way we can find the.aar file in libs folfer
    }
    google()
}    
```

### 设置NDK生成lib.so对应的ArmABI平台代码：

```groovy
 android{
 	defaultConfig {
 		ndk{
 			abiFilters "armeabi", "armeabi-v7a"//编译ndk lib.so支持的平台
 		}
 	}
 }
```

### 强制使用依赖版本

```groovy
configurations.all {
    resolutionStrategy {
        force "com.android.support:customtabs:${rootProject.ext.supportLibVersion}"
    }
}
```

这里有使用到字符串模板变量是定义在project.gradle里的ext{}代码块里的。

### 定义ext变量

location at file project.gradle

```groovy
ext{
	supportLibVersion="27.1.1"
	//...
}
```

### 构建变体选项

```groovy
android{
	flavorDimensions 'vedioMaker'//风味维度，gradle3.0以上必须要设置一个以上维度
	productFlavors {
        main{//default main share by other flavor
            //替换AndroidManifest.xml里面的占位符
            manifestPlaceholders = [
                UmengChanel        : umen_chanel_01
                ,key:keyValue
                //...
            ]
            //add  BuildConfig fields
            buildConfigField("String", "googleId", googleId)
        }
	}
}
```


---
layout: post
date: 2018-09-23 23:21
title: Public An aar library to JCenter and MavenCenter
categories: Android Jcenter Maven
tags: JCenter Maven Gradle
---
* content
{:toc}

#  Introduction

## Jcenter And Maven Center

Jcenter and MavenCenter are moden time standar maven center. they maintained by `Bintray` and `sonatype` respectively.

As the artical , we just talk abut Bintray's JCenter. Cause Android Studio now support Jcenter as default maven center.

> First of all , you need create an accunt of Binray at [Bintray.com](bintray.com) and generate an ***API Key*** at `Edit` menu of account profile

## Example Project 

[ ![Download](https://api.bintray.com/packages/jaysen/Android-MVP-Arch/jaylin-mvparch/images/download.svg) ](https://bintray.com/jaysen/Android-MVP-Arch/jaylin-mvparch/_latestVersion)

[MvpArch]( https://github.com/linjonh/MvpArch)



## Android Gradle automated publish an aar library

###### Add buildScript to dependencies

```groovy
buildscript{
    dependencies{
        //bintray: jcenter publish build plugin
		classpath 'com.jfrog.bintray.gradle:gradle-bintray-plugin:1.8.4'
    }
}
    
```

###### apply plugin at library module

```groovy
apply plugin: 'com.jfrog.bintray'
apply plugin: 'maven-publish'// maven publish method  to create groups of artifacts
```

> The bintray plugin supports three methods to create groups of artifacts: Configurations, Publications and Copying specific files using filesSpec. For more read, reference [gradle-bintray-plugin](https://github.com/bintray/gradle-bintray-plugin).



###### For maven ,we need `sources.Jar` and `javadoc.Jar` artifacts

create task as below for android gradle:

  ```groovy
  
  task sourcesJar(type: Jar) {
      from android.sourceSets.main.java.srcDirs
      classifier = 'sources'
  }
  
  task javadoc(type: Javadoc) {
      source = android.sourceSets.main.java.srcDirs
      classpath += project.files(android.getBootClasspath().join(File.pathSeparator))
  }
  
  task javadocJar(type: Jar, dependsOn: javadoc) {
      classifier = 'javadoc'
      from javadoc.destinationDir
  }
  
  artifacts {
      archives javadocJar
      archives sourcesJar
  }
  ```

###### Bintray configuration:

<!-- more -->

  ```groovy
  
  bintray {
      user = project.hasProperty('bintrayUser') ? bintrayUser : System.getenv('BINTRAY_USER')//System enviroment variable
      key = project.hasProperty('bintrayApiKey') ? bintrayApiKey : System.getenv('BINTRAY_API_KEY')
      logger.log(LogLevel.ERROR, "user:" + user + " key:" + key)
      publications = ['MyPublication']
      pkg {
          repo = 'Android-MVP-Arch'
          name = 'jaylin-mvparch'
  //        userOrg = 'bintray_user'
          licenses = ['Apache-2.0']
          websiteUrl = 'https://github.com/linjonh/MvpArch'
          issueTrackerUrl = 'https://github.com/linjonh/MvpArch/issues'
  
          vcsUrl = 'https://github.com/linjonh/MvpArch.git'
          publicDownloadNumbers = true
  
  //        githubRepo = 'linjonh/MvpArch' //Optional Github repository
  //        githubReleaseNotesFile = 'README.md' //Optional Github readme file
          publish = true
          version {
              name = android.defaultConfig.versionName
              desc = 'mvp architecture for android'
              released = new Date()
              vcsTag = android.defaultConfig.versionName
              attributes = ['gradle-plugin': 'com.use.less:com.use.less.gradle:gradle-useless-plugin']
          }
      }
  }
  
  // Create the pom configuration:
  def pomConfig = {
      licenses {
          license {
              name "The Apache Software License, Version 2.0"
              url "http://www.apache.org/licenses/LICENSE-2.0.txt"
              distribution "repo"
          }
      }
      developers {
          developer {
              id "linjonh"
              name "linjianyou"
              email "jaysen.lin@foxmail.com"
          }
      }
  
      scm {
          url "https://github.com/linjonh/MvpArch"
      }
  }
  ```

###### Maven publish mathod configuration:

   ```groovy
publishing {
        publications {
            MyPublication(MavenPublication) {
                artifact("$buildDir/outputs/aar/mvparchlibrary-release.aar")
                artifact sourcesJar
                artifact javadocJar
                groupId 'top.jaylin.mvparch'
                artifactId 'mvp-arch-android'
                version android.defaultConfig.versionName
                pom.withXml {
                    def dependenciesNode = asNode().appendNode('dependencies')
                    def root = asNode()
                    root.appendNode('description', 'mvp architecture for android')
                    root.appendNode('name', 'mvp-arch-android')
                    root.appendNode('url', 'https://github.com/linjonh/MvpArch')
                    root.children().last() + pomConfig
                    // Iterate over the implementation dependencies (we don't want the test ones), adding a <dependency> node for each
                    //android gradle 3.0 use implementation
                    configurations.implementation.allDependencies.each {
                        // Ensure dependencies such as fileTree are not included.
                        logger.log(LogLevel.ERROR,"allDependencies.each:====>"+it.toString()+"\n")
    
                        if (it.name != 'unspecified') {
                            logger.log(LogLevel.ERROR,"allDependencies.each: !unspecified: "+it.name+"\n")
                            def dependencyNode = dependenciesNode.appendNode('dependency')
                            dependencyNode.appendNode('groupId', it.group)
                            dependencyNode.appendNode('artifactId', it.name)
                            dependencyNode.appendNode('version', it.version)
                        }
                    }
                }
    
            }
        }
    }
   ```

## References

- https://github.com/bintray/gradle-bintray-plugin
- https://github.com/bintray/bintray-examples
- https://www.jfrog.com/confluence/display/BT/Uploading+Using+APIs (Set Me Up )


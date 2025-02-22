---
layout: post
title: 2024-12-27-Python如何安装pandas库,简单3步解决,亲测有效
date: 2024-12-27 17:58:09 +0800
categories: [编程语言]
tags: [python,pip]
image:
  path: https://img-blog.csdnimg.cn/20210422072741588.png?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTEzNjcxMzE&#61;,size_16,color_FFFFFF,t_70
  alt: Python如何安装pandas库,简单3步解决,亲测有效
artid: 115996681
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Python如何安装pandas库，简单3步解决，亲测有效。
    </h1>
   </div>
   <div class="ai-article-tag" id="ai-article-tag">
    <div class="ai-article-tag-box">
     <p class="ai-article-tag-item-active">
      <img alt="" class="item-target" src="https://img-home.csdnimg.cn/images/20240715101418.png"/>
     </p>
     <a class="ai-article-tag-item" data-report-click='{"spm":"3001.10231","extra":{"searchword":"PyCharm"}}' data-report-query="spm=1001.2101.3001.10231" data-report-view='{"spm":"3001.10231","extra":{"searchword":"PyCharm"}}' href="https://so.csdn.net/so/search/s.do?q=PyCharm&amp;t=all&amp;o=vip&amp;s=&amp;l=&amp;f=&amp;viparticle=&amp;from_tracking_code=tag_word&amp;from_code=app_blog_art" target="_blank">
      <span>
       PyCharm
      </span>
     </a>
     <a class="ai-article-tag-item" data-report-click='{"spm":"3001.10231","extra":{"searchword":"pandas"}}' data-report-query="spm=1001.2101.3001.10231" data-report-view='{"spm":"3001.10231","extra":{"searchword":"pandas"}}' href="https://so.csdn.net/so/search/s.do?q=pandas&amp;t=all&amp;o=vip&amp;s=&amp;l=&amp;f=&amp;viparticle=&amp;from_tracking_code=tag_word&amp;from_code=app_blog_art" target="_blank">
      <span>
       pandas
      </span>
     </a>
     <a class="ai-article-tag-item" data-report-click='{"spm":"3001.10231","extra":{"searchword":"ModuleNotFoundError"}}' data-report-query="spm=1001.2101.3001.10231" data-report-view='{"spm":"3001.10231","extra":{"searchword":"ModuleNotFoundError"}}' href="https://so.csdn.net/so/search/s.do?q=ModuleNotFoundError&amp;t=all&amp;o=vip&amp;s=&amp;l=&amp;f=&amp;viparticle=&amp;from_tracking_code=tag_word&amp;from_code=app_blog_art" target="_blank">
      <span>
       ModuleNotFoundError
      </span>
     </a>
     <a class="ai-article-tag-item" data-report-click='{"spm":"3001.10231","extra":{"searchword":"pip"}}' data-report-query="spm=1001.2101.3001.10231" data-report-view='{"spm":"3001.10231","extra":{"searchword":"pip"}}' href="https://so.csdn.net/so/search/s.do?q=pip&amp;t=all&amp;o=vip&amp;s=&amp;l=&amp;f=&amp;viparticle=&amp;from_tracking_code=tag_word&amp;from_code=app_blog_art" target="_blank">
      <span>
       pip
      </span>
     </a>
     <a class="ai-article-tag-item" data-report-click='{"spm":"3001.10231","extra":{"searchword":"安装教程"}}' data-report-query="spm=1001.2101.3001.10231" data-report-view='{"spm":"3001.10231","extra":{"searchword":"安装教程"}}' href="https://so.csdn.net/so/search/s.do?q=%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B&amp;t=all&amp;o=vip&amp;s=&amp;l=&amp;f=&amp;viparticle=&amp;from_tracking_code=tag_word&amp;from_code=app_blog_art" target="_blank">
      <span>
       安装教程
      </span>
     </a>
    </div>
    <span class="ai-article-tag-text">
     关键词由CSDN通过智能技术生成
    </span>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p>
     <span style="color:#f33b45;">
      <strong>
       问题现象：PyCharm中运行程序，报错，提示“ModuleNotFoundError: No module named 'pandas'”，如图所示。
      </strong>
     </span>
    </p>
    <p>
     <img alt="" height="155" src="https://i-blog.csdnimg.cn/blog_migrate/7861fddf1fed6b4dd454fb3124ff92ff.png" width="603"/>
    </p>
    <p>
     <strong>
      第一种方法：
     </strong>
    </p>
    <p>
     1.电脑WIN+R，输入cmd,输入 pip install pandas，等待下载完成即可。
    </p>
    <p>
     <img alt="" height="402" src="https://i-blog.csdnimg.cn/blog_migrate/ff1b3bc0ca8a8870297216a4c64f9ec7.png" width="964"/>
    </p>
    <p>
     2.如果有以下提示，说明pip的版本可能不一致，需要解决冲突。
    </p>
    <p>
     按照方法更新pip，输入pip install -- upgrade pip ，发现报错，提示“No module named pip”，如果遇到这种情况，需要用下面步骤3解决。如果没有遇到，可以略过。
    </p>
    <p>
     <img alt="" height="387" src="https://i-blog.csdnimg.cn/blog_migrate/d39759baaddd01b3408ef6aacd9581e4.png" width="957"/>
    </p>
    <p>
     3.解决方法，输入（1）python -m ensurepip，（2）pyhon -m pip install --upgrade pip
    </p>
    <p>
     <img alt="" height="412" src="https://i-blog.csdnimg.cn/blog_migrate/43dd4b351f5160b8b4172099b4726b5c.png" width="867"/>
    </p>
    <p>
     4.安装成功后，检查是否安装完成。输入python -m pip list。
    </p>
    <p>
     <img alt="" height="206" src="https://i-blog.csdnimg.cn/blog_migrate/33f4d53c207195ade6754ffea1a6c6dd.png" width="452"/>
    </p>
    <p>
     另外，输入python,，进入python解释器，输入import pandas，看是否报错，如果不报错，说明安装成功。
    </p>
    <p>
     <img alt="" height="95" src="https://i-blog.csdnimg.cn/blog_migrate/55a02929741456155448a585f9b7f89d.png" width="808"/>
    </p>
    <p>
     第二种方法：找到pandas下载库，
    </p>
    <p>
     <a href="https://www.lfd.uci.edu/~gohlke/pythonlibs/" rel="nofollow">
      https://www.lfd.uci.edu/~gohlke/pythonlibs/
     </a>
    </p>
    <p>
     Ctrl+F,输入pandas,找到需要的版本下载即可。
    </p>
    <p>
     <img alt="" height="145" src="https://i-blog.csdnimg.cn/blog_migrate/1169c770c35d575f7af72573217c65de.png" width="899"/>
    </p>
    <p>
     下载后，将文件whl后缀改为zip，然后复制到“D:\Program Files (x86)\python3.9.4\Lib\site-packages”，根据自己安装python的路径，找到Lib\site-packages。
    </p>
    <p>
     最后：进入到电脑cmd中，输入pip install pandas，安装即可。
    </p>
    <p>
     <strong>
      如果前面都操作成功，电脑也已经安装好了pandas,PyCharm运行程序后还是报错，提示“ModuleNotFoundError: No module named 'pandas'”，可以采用下面方法解决。
     </strong>
    </p>
    <p>
     在PyCharm中View-&gt;Tool Window-&gt;Python Packages中搜索pandas，install即可。
    </p>
    <p>
     目前采用这种方法已经解决问题了。
    </p>
    <p>
     <img alt="" height="404" src="https://i-blog.csdnimg.cn/blog_migrate/528665877a6c6e5e482de1d9e2377e02.png" width="807"/>
    </p>
    <p>
     <img alt="" height="324" src="https://i-blog.csdnimg.cn/blog_migrate/1c94c1b366d13d55330433d13b3ac965.png" width="1200"/>
    </p>
    <p>
     ChangeLog
    </p>
    <p>
     20210422
    </p>
    <p>
     ps:如果有人遇到其他问题，欢迎更新。
    </p>
   </div>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f:626c6f672e6373646e2e6e65742f753031313336373133312f:61727469636c652f64657461696c732f313135393936363831</p>

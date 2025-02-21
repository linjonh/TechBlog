---
layout: post
title: 2023-01-30-Linux实操篇-Shell函数Shell编程综合案例定时备份数据库
date: 2023-01-30 16:35:40 +0800
categories: [Linux操作系统入门到精通]
tags: [linux,运维,服务器,运维开发]
image:
  path: https://img-blog.csdnimg.cn/5891f95fbd0c471cb4c0dafa7a3a6f0f.png?x-oss-process=image/resize,m_fixed,h_150
  alt: Linux实操篇-Shell函数Shell编程综合案例定时备份数据库
artid: 125032993
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Linux【实操篇】—— Shell函数、Shell编程综合案例(定时备份数据库)
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p id="main-toc" style="text-align:justify;">
     <strong>
      目录
     </strong>
    </p>
    <p id="%E4%B8%80%E3%80%81%E5%87%BD%E6%95%B0-toc" style="margin-left:40px;text-align:justify;">
     <a href="#%E4%B8%80%E3%80%81%E5%87%BD%E6%95%B0" rel="nofollow">
      一、函数
     </a>
    </p>
    <p id="1.%20%E7%B3%BB%E7%BB%9F%E5%87%BD%E6%95%B0-toc" style="margin-left:80px;text-align:justify;">
     <a href="#1.%20%E7%B3%BB%E7%BB%9F%E5%87%BD%E6%95%B0" rel="nofollow">
      1. 系统函数
     </a>
    </p>
    <p id="2.%20%E8%87%AA%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0-toc" style="margin-left:80px;text-align:justify;">
     <a href="#2.%20%E8%87%AA%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0" rel="nofollow">
      2. 自定义函数
     </a>
    </p>
    <p id="%E4%BA%8C%E3%80%81Shell%20%E7%BC%96%E7%A8%8B%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B-toc" style="margin-left:40px;text-align:justify;">
     <a href="#%E4%BA%8C%E3%80%81Shell%20%E7%BC%96%E7%A8%8B%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B" rel="nofollow">
      二、Shell 编程综合案例
     </a>
    </p>
    <hr id="hr-toc"/>
    <h3 style="text-align:justify;">
     一、函数
    </h3>
    <p style="text-align:justify;">
     Shell 编程中的函数与其他语言一样，有系统函数和自定义函数两种。
    </p>
    <h4 id="1.%20%E7%B3%BB%E7%BB%9F%E5%87%BD%E6%95%B0" style="text-align:justify;">
     1. 系统函数
    </h4>
    <p style="text-align:justify;">
     函数一：
     <strong>
      <span style="color:#fe2c24;">
       basename
      </span>
      -
     </strong>
     返回完整路径最后一个 / 后的部分，常用于获取文件名。基本格式为：
    </p>
    <blockquote>
     <p style="text-align:justify;">
      <span style="color:#fe2c24;">
       <span style="background-color:#fbd4d0;">
        basename pathname suffix
       </span>
      </span>
     </p>
     <ul>
      <li style="text-align:justify;">
       pathname 路径名，其实就是一个字符串，basename 命令会删除掉路径的所有前缀包括最后一个 / ，然后将字符串显示出来；
      </li>
      <li style="text-align:justify;">
       suffix 后缀，如果 suffix 被指定了，basename 会将路径名中的后缀也去掉；
      </li>
     </ul>
    </blockquote>
    <p style="text-align:justify;">
     案例：返回 /home/aaa/test.txt 的 test.txt 部分；
    </p>
    <pre><code class="language-Delphi">basename /home/aaa/test.txt</code></pre>
    <p style="text-align:justify;">
     此时没有指定后缀，所以直接输出 test.txt；
    </p>
    <p class="img-center">
     <img alt="" height="77" src="https://i-blog.csdnimg.cn/blog_migrate/cb616b95ee6da7ecb7d720a1e7b3258d.png" width="735"/>
    </p>
    <p style="text-align:justify;">
    </p>
    <p style="text-align:justify;">
     若我们指定后缀 .txt，则路径名后的 .txt 会被去掉；
    </p>
    <p class="img-center">
     <img alt="" height="59" src="https://i-blog.csdnimg.cn/blog_migrate/431dcf77a73653c49ccd3cb6180dc804.png" width="736"/>
    </p>
    <p style="text-align:justify;">
     函数二：
     <strong>
      <span style="color:#fe2c24;">
       dirname
      </span>
      -
     </strong>
     返回完整路径最后一个 / 前面的部分，常用于返回路径部分。基本格式为：
    </p>
    <blockquote>
     <p style="text-align:justify;">
      <span style="color:#fe2c24;">
       <span style="background-color:#fbd4d0;">
        dirname 文件绝对路径
       </span>
      </span>
     </p>
     <ul>
      <li style="text-align:justify;">
       从给定的包含绝对路径的文件名中去除文件名，返回剩下的路径部分。
      </li>
     </ul>
    </blockquote>
    <p style="text-align:justify;">
     案例：返回 /home/aaa/test.txt 中的 /home/aaa；
    </p>
    <pre><code class="language-Delphi">dirname /home/aaa/test.txt</code></pre>
    <p style="text-align:justify;">
     结果如下：
    </p>
    <p class="img-center">
     <img alt="" height="57" src="https://i-blog.csdnimg.cn/blog_migrate/9df9ad09ad93e077a57ba7a15dfdb7b1.png" width="736"/>
    </p>
    <h4 id="2.%20%E8%87%AA%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0" style="text-align:justify;">
     2. 自定义函数
    </h4>
    <p style="text-align:justify;">
     自定义函数语法格式和调用方式如下；
    </p>
    <pre><code class="language-Delphi">#基本语法
function 函数名(){
    程序;
    return int;
}

#调用
函数名 实参值</code></pre>
    <p style="text-align:justify;">
     案例：输入两个参数，计算它们的和；
    </p>
    <pre><code class="language-Delphi">#!/bin/bash
#定义函数
function getSum() {
        sum=$[$n1+$n2]
        echo "两数之和为：$sum"
}

#用户输入两个数
read -p "请输入n1：" n1
read -p "请输入n2：" n2

#调用函数
getSum $n1 $n2
</code></pre>
    <p style="text-align:justify;">
     运行结果如下：
    </p>
    <p class="img-center">
     <img alt="" height="96" src="https://i-blog.csdnimg.cn/blog_migrate/53aada4f69c0a7321bb361b95903f5e3.png" width="736"/>
    </p>
    <h3 id="%E4%BA%8C%E3%80%81Shell%20%E7%BC%96%E7%A8%8B%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B" style="text-align:justify;">
     二、Shell 编程综合案例
    </h3>
    <p style="text-align:justify;">
     <strong>
      案例要求：
     </strong>
    </p>
    <ol>
     <li style="text-align:justify;">
      每天凌晨 6:30 备份数据库 mjjlinux 到 /data/backup/db 中；
     </li>
     <li style="text-align:justify;">
      备份开始和结束都要给出提示信息；
     </li>
     <li style="text-align:justify;">
      文件备份后以备份时间为文件名，并打包成 .tar.gz 格式，如 2022-5-31_223564.tar.gz；
     </li>
     <li style="text-align:justify;">
      在备份的同时，检查是否有 10 天前备份的数据库文件，有则将其删除。
     </li>
    </ol>
    <p style="text-align:justify;">
     <strong>
      实现步骤：
     </strong>
    </p>
    <p style="text-align:justify;">
     首先我们在 Linux 系统的 MySQL 数据库中建库 mjjlinux 和表 myolder，此处过程省略，结果如下；
    </p>
    <p class="img-center">
     <img alt="" height="561" src="https://i-blog.csdnimg.cn/blog_migrate/66048b9908d2b56abf0ec3bc8f51ca83.png" width="735"/>
    </p>
    <p style="text-align:justify;">
     为了便于 root 用户操作，我们在 /usr/sbin 目录下进行。进入 /usr/sbin 目录；
    </p>
    <p class="img-center">
     <img alt="" height="110" src="https://i-blog.csdnimg.cn/blog_migrate/eea10ed14cc263f77984ec8517743634.png" width="737"/>
    </p>
    <p style="text-align:justify;">
     新建 shell 文件 mysql_db_backup.sh；
    </p>
    <pre><code class="language-Delphi">[root@majinjian bin]# vim mysql_db_backup.sh</code></pre>
    <p style="text-align:justify;">
     编写程序，实现需求的各项基本功能；
    </p>
    <pre><code class="language-Delphi">#!/bin/bash

#备份目录
BACKUP=/data/backup/db

#获取当前时间
DATETIME=$(date +%Y-%m-%d_%H%M%S)
echo "当前时间:$DATETIME"

#数据库的地址
HOST=localhost
#数据库的用户名
DB_USER=root
#数据库密码
DB_pwd=majinjian
#要备份的数据库
DATABASE=mjjlinux

#创建备份目录
#如果不存在则创建
[ ! -d "${BACKUP}/${DATETIME}" ] &amp;&amp; mkdir -p "${BACKUP}/${DATETIME}"

#备份数据库
mysqldump -u${DB_USER} -p${DB_pwd} --host=${HOST} -q -R --databases ${DATABASE} |gzip &gt; ${BACKUP}/${DATETIME}/$DATETIME.sql.gz

#将文件格式处理成 tar.gz
cd ${BACKUP}
tar -zcvf $DATETIME.tar.gz ${DATETIME}
#打包后删除备份目录
rm -rf ${BACKUP}/${DATETIME}

#删除10天前的备份文件
find ${BACKUP} -atime +10 -name "*.tar.gz" -exec rm {} \;
echo "数据库 &lt;${DATABASE}&gt; 备份成功&gt;"</code></pre>
    <p style="text-align:justify;">
     设置该程序在每天的凌晨 6:30 自动执行；
    </p>
    <pre><code class="language-Delphi">[root@majinjian bin]# crontab -e
</code></pre>
    <pre><code class="language-Delphi">30 6 * * * /usr/sbin/mysql_db_backup.sh
</code></pre>
    <p style="text-align:justify;">
     案例编写完成。
    </p>
   </div>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f35333037323531392f:61727469636c652f64657461696c732f313235303332393933</p>

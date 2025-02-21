---
title: 2024-07-16-使用geoipupdate自动更新GeoIP数据库
date: 2024-07-16 10:17:31 +0800
categories: [ELK]
tags: [数据库,IP地址库,ip地理数据库]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=140458761
  alt: 使用geoipupdate自动更新GeoIP数据库
artid: 140458761
---
<span class="artid" style="display:none" artid=68747470733a2f2f626c:6f672e6373646e2e6e65742f68756368616f5f6c696e676f2f:61727469636c652f64657461696c732f313430343538373631></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     使用geoipupdate自动更新GeoIP数据库
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <div>
    </div>
    <div>
     <div>
      <h2 style="margin-left:23.1pt;text-align:left;">
       <span style="color:#000000;">
        一、
        <strong>
         <span style="color:#1a1a1a;">
          什么是 GeoIP？
         </span>
        </strong>
       </span>
      </h2>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         通过在数据库中将地理位置和 IP 地址相互映射，软件程序便可以使用 IP 地址来确定其对应的地理位置，其中包括国家/地区、州/省、城市、邮政编码、纬度/经度、ISP、区号和其他信息。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         很多软件都使用 MaxMind 的数据库对 IP 地址的地理位置进行解析，例如前面所提到的 Clash 就是通过解析出口 IP 地址的地理位置，来判断该 IP 是否需要经过代理进行访问。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
      </p>
      <h2 style="margin-left:23.1pt;text-align:left;">
       <span style="color:#000000;">
        二、
        <strong>
         <span style="color:#1a1a1a;">
          注册maxmind账号
         </span>
        </strong>
       </span>
      </h2>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <a href="https://www.maxmind.com/en/geolite2/signup" rel="nofollow" title="GeoLite2 Sign Up  | MaxMind">
         GeoLite2 Sign Up | MaxMind
        </a>
       </span>
      </p>
      <p style="margin-left:16.8pt;text-align:left;">
       <span style="color:#000000;">
        ●
        <span style="color:#333333;">
         个人全名（Full name）与公司名（Company）可全部填写个人名字；
        </span>
       </span>
      </p>
      <p style="margin-left:16.8pt;text-align:left;">
       <span style="color:#000000;">
        ●
        <span style="color:#333333;">
         行业（Industry）可随意选择，我选择的是数据分析（Analytics）；
        </span>
       </span>
      </p>
      <p style="margin-left:16.8pt;text-align:left;">
       <span style="color:#000000;">
        ●
        <span style="color:#333333;">
         国家（Country）我选择的是中国；
        </span>
       </span>
      </p>
      <p style="margin-left:16.8pt;text-align:left;">
       <span style="color:#000000;">
        ●
        <span style="color:#333333;">
         用途（Intended use）我选择的是网站数据分析（Web analytics）；
        </span>
       </span>
      </p>
      <p style="margin-left:16.8pt;text-align:left;">
       <span style="color:#000000;">
        ●
        <span style="color:#333333;">
         邮箱（Email address）填写为个人邮箱，邮箱将为成为登陆账户；
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         剩余两项，电话及使用计划为非必填项所以忽略。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <img alt="" height="731" src="https://i-blog.csdnimg.cn/direct/c7fecf7cc8a1419cae92f0fb14fcd200.png" width="1200"/>
      </p>
      <div>
      </div>
      <div>
       <div>
        <p style="margin-left:0;text-align:left;">
         <span style="color:#000000;">
          <span style="color:#333333;">
           提示
          </span>
          <span style="color:#333333;">
           不能
          </span>
          <span style="color:#333333;">
           使用
          </span>
          <span style="color:#333333;">
           V
          </span>
          <span style="color:#333333;">
           P
          </span>
          <span style="color:#333333;">
           N
          </span>
          <span style="color:#333333;">
           ，
          </span>
          <span style="color:#333333;">
           关掉
          </span>
          <span style="color:#333333;">
           V
          </span>
          <span style="color:#333333;">
           P
          </span>
          <span style="color:#333333;">
           N
          </span>
          <span style="color:#333333;">
           再试
          </span>
          <span style="color:#333333;">
           。
          </span>
         </span>
        </p>
       </div>
      </div>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         点击继续（Continue）后，邮箱会收到一封注册邮件，按箭头点击跳转至设置密码页面。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <img alt="" height="892" src="https://i-blog.csdnimg.cn/direct/e62107484b594a86bf38cafaab208ed3.png" width="1200"/>
      </p>
      <p style="margin-left:0;text-align:left;">
       <img alt="" height="1200" src="https://i-blog.csdnimg.cn/direct/f634ce45776e4691b027db2b0110f706.png" width="1200"/>
      </p>
      <p style="margin-left:0;text-align:left;">
      </p>
      <h2 style="margin-left:23.1pt;text-align:left;">
       <span style="color:#000000;">
        三、
        <strong>
         <span style="color:#1a1a1a;">
          下载 GeoLite2 数据库
         </span>
        </strong>
       </span>
      </h2>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         Maxmind 提供了两种版本的 GeoIP 数据库，分别是收费的 GeoIP2 数据库和免费的 GeoLite2 数据库，只需要
        </span>
        <a href="https://www.maxmind.com/en/geolite2/signup?lang=en" rel="nofollow" title="注册账户">
         注册账户
        </a>
        <span style="color:#333333;">
         就可以获得免费的 GeoLite2 数据库的
        </span>
        <a href="https://www.maxmind.com/en/accounts/current/geoip/downloads" rel="nofollow" title="下载链接">
         下载链接
        </a>
        <span style="color:#333333;">
         。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <img alt="" height="1200" src="https://i-blog.csdnimg.cn/direct/0cf288eeb9a645d0bf9381454c5512d2.png" width="1200"/>
      </p>
      <p style="margin-left:0;text-align:center;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         图1 MaxMind数据库文件下载页面
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         通常，很多软件加载的是 .mmdb 格式的 GeoIP 数据库文件，所以我们只需下载红框中的数据库文件。使用 GeoLite2-Country 数据库，IP 地址只解析到对应的国家或地区，使用 GeoLite2-City 数据库，IP 地址可以具体解析到国家/地区、州/省和城市，点击 Download GZIP 就会下载对应的最新版本 GeoLite2 数据库文件。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         当然，我们也可以选择点击 Get Permalinks 来获取永久的下载链接。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <img alt="" height="1122" src="https://i-blog.csdnimg.cn/direct/c041caec4170447ab7e49a6afcf422f3.png" width="1072"/>
      </p>
      <p style="margin-left:0;text-align:center;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         图2 获取数据库文件的永久下载链接
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
      </p>
      <h2 style="margin-left:23.1pt;text-align:left;">
       <span style="color:#000000;">
        四、
        <strong>
         <span style="color:#1a1a1a;">
          生成许可证密钥
         </span>
        </strong>
       </span>
      </h2>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         在账户的
        </span>
        <a href="https://www.maxmind.com/en/accounts/current/license-key" rel="nofollow" title="管理许可证密钥">
         管理许可证密钥
        </a>
        <span style="color:#333333;">
         页面中，我们可以生成个人的许可证密钥。许可证密钥可以用来获取数据库的永久下载链接，也可以授权 geoipupdate 程序自动更新数据库文件。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         创建license key
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <img alt="" height="958" src="https://i-blog.csdnimg.cn/direct/46acc801f17b4e3787e8fcf838472817.png" width="930"/>
      </p>
      <p style="margin-left:0;text-align:left;">
      </p>
      <p style="margin-left:0;text-align:left;">
       <img alt="" height="1200" src="https://i-blog.csdnimg.cn/direct/7ce4a1781bd649759b45d4433216068d.png" width="1200"/>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         主要进行如下 5 步操作：
        </span>
       </span>
      </p>
      <p style="margin-left:16.8pt;text-align:left;">
       <span style="color:#000000;">
        1.
        <span style="color:#333333;">
         点击 Generate new license key 按钮。
        </span>
       </span>
      </p>
      <p style="margin-left:16.8pt;text-align:left;">
       <span style="color:#000000;">
        2.
        <span style="color:#333333;">
         在 License key description 中给密钥命名。
        </span>
       </span>
      </p>
      <p style="margin-left:16.8pt;text-align:left;">
       <span style="color:#000000;">
        3.
        <span style="color:#333333;">
         “Will this key be used for GeoIP Update?”（该密钥是否用于 GeoIP 更新？）选择 yes
        </span>
       </span>
      </p>
      <p style="margin-left:16.8pt;text-align:left;">
       <span style="color:#000000;">
        4.
        <span style="color:#333333;">
         选择”Generate a license key and config file for use with geoipupdate version 3.1.1 or newer.”（生成用于 3.1.1 以上版本的 geoipupdate 的许可证密钥和配置文件）
        </span>
       </span>
      </p>
      <p style="margin-left:16.8pt;text-align:left;">
       <span style="color:#000000;">
        5.
        <span style="color:#333333;">
         点击 Confirm 确定
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <img alt="" height="900" src="https://i-blog.csdnimg.cn/direct/2cd688137f194d5ea14bada656d8a2e0.png" width="1200"/>
      </p>
      <p style="margin-left:0;text-align:center;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         图4 生成许可证密钥
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <img alt="" height="1098" src="https://i-blog.csdnimg.cn/direct/e604c51d88664f91901275d8762f5a41.png" width="1200"/>
      </p>
      <p style="margin-left:0;text-align:center;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         图5 创建后显示的用户ID和许可证密钥
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:center;">
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="background-color:#ffff00;">
         <span style="color:#333333;">
          出于安全考虑，许可证密钥只会在第一次生成时完整显示一次，之后仅能查看密钥的前 4 个字符。所以在许可证密钥生成后，务必第一时间把它记录下来。
         </span>
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         点击 Download Config 按钮，就会下载用于 geoipupdate 程序的配置文件。用文本编辑器打开可以看到如下内容：
        </span>
       </span>
      </p>
      <pre><span style="color:#000000;"><span style="background-color:#fafafa;"><code><span style="color:#708090;"># GeoIP.conf file for `geoipupdate` program, for versions &gt;= 3.1.1.</span>
<span style="color:#708090;"># Used to update GeoIP databases from https://www.maxmind.com.</span>
<span style="color:#708090;"># For more information about this config file, visit the docs at</span>
<span style="color:#708090;"># https://dev.maxmind.com/geoip/updating-databases?lang=en.</span>

<span style="color:#708090;"># `AccountID` is from your MaxMind account.</span>
<span style="color:#000000;">AccountID 6735</span>

<span style="color:#708090;"># `LicenseKey` is from your MaxMind account</span>
<span style="color:#000000;">LicenseKey O2Z1dEfCCCCC</span>

<span style="color:#708090;"># `EditionIDs` is from your MaxMind account.</span>
<span style="color:#000000;">EditionIDs GeoLite2-ASN GeoLite2-City GeoLite2-Country</span>
</code></span></span></pre>
      <p>
      </p>
      <p style="margin-left:0;text-align:left;">
      </p>
      <h2 style="margin-left:23.1pt;text-align:left;">
       <span style="color:#000000;">
        五、
        <strong>
         <span style="color:#1a1a1a;">
          安装和配置 GeoIP 更新程序
         </span>
        </strong>
       </span>
      </h2>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         在生成了 License key 之后，我们就可以使用永久链接来下载 GeoLite2 数据库文件了，例如下载 GeoLite2-City 数据库：
        </span>
       </span>
      </p>
      <pre><span style="color:#000000;"><span style="background-color:#fafafa;"><code><span style="color:#000000;">export YOUR_ACCOUNT_ID=6735</span>
<span style="color:#000000;">export YOUR_LICENSE_KEY=O2Z1dEfuSBsRAk</span>
<span style="color:#000000;">curl -O -J -L -u $YOUR_ACCOUNT_ID:$YOUR_LICENSE_KEY 'https://download.maxmind.com/geoip/databases/GeoIP2-City-CSV/download?suffix=zip'</span>
</code></span></span>
</pre>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         这种方法虽然每次能下载到最新版本的 GeoLite2 数据库文件，但是每次数据库更新都依靠手动下载必然是非常麻烦的，所以我们可以使用 MaxMind 提供的官方 GeoIP 数据库更新程序 geoipupdate。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <a href="https://dev.maxmind.com/geoip/updating-databases#directly-downloading-databases" rel="nofollow" title="https://dev.maxmind.com/geoip/updating-databases#directly-downloading-databases">
         https://dev.maxmind.com/geoip/updating-databases#directly-downloading-databases
        </a>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
      </p>
      <h3 style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <strong>
         <span style="color:#1a1a1a;">
          1. 安装 GeoIP 更新程序
         </span>
        </strong>
       </span>
      </h3>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         GeoIP 更新程序 geoipupdate 可以在
        </span>
        <a href="https://github.com/maxmind/geoipupdate/releases" title="Github">
         Github
        </a>
        <span style="color:#333333;">
         下载。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         通过rpm在RedHat或CentOS上安装
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <a href="https://github.com/maxmind/geoipupdate#installing-on-redhat-or-centos-via-the-rpm" title="https://github.com/maxmind/geoipupdate#installing-on-redhat-or-centos-via-the-rpm">
         https://github.com/maxmind/geoipupdate#installing-on-redhat-or-centos-via-the-rpm
        </a>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         下载适合您的系统的.rpm。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         运行rpm-Uvhi path/to/geopupdate_5.0.0.0_linux_amd64.rpm（根据需要替换版本号和体系结构）。你需要
        </span>
        <span style="color:#333333;">
         root权限
        </span>
        <span style="color:#333333;">
         。这将把geopupdate安装到/usr/bin/geopupdate。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         geopupdate默认情况下会查找配置文件/etc/GeoIP.conf。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         安装包下载路径
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <a href="https://github.com/maxmind/geoipupdate/releases" title="https://github.com/maxmind/geoipupdate/releases">
         https://github.com/maxmind/geoipupdate/releases
        </a>
       </span>
      </p>
      <pre><span style="color:#000000;"><span style="background-color:#fafafa;"><code><span style="color:#000000;">wget </span><span style="color:#000000;">https://github.com/maxmind/geoipupdate/releases/download/v7.0.1/geoipupdate_7.0.1_linux_amd64.rpm</span>

<span style="color:#000000;">rpm -ivh geoipupdate_7.0.1_linux_amd64.rpm</span>
</code></span></span></pre>
      <p>
      </p>
      <h3 style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <strong>
         <span style="color:#1a1a1a;">
          2. 配置 GeoIP 更新程序
         </span>
        </strong>
       </span>
      </h3>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         用文本编辑器打开 /etc/GeoIP.conf，把先前生成的许可证密钥对应的配置文件内容粘贴进去，或者手动输入 AccountID、LicenseKey 和 EditionIDs。剩余部分保持默认。
        </span>
       </span>
      </p>
      <pre><span style="color:#000000;"><span style="background-color:#fafafa;"><code><span style="color:#000000;"># 编辑配置文件</span>
<span style="color:#000000;">vim /etc/GeoIP.conf</span>

<span style="color:#000000;">    # 修改 AccountID 和 LicenseKey 为上面记录的值</span>
<span style="color:#000000;">    AccountID [your account id]</span>
<span style="color:#000000;">    LicenseKey [your license key]</span>

<span style="color:#000000;">    # 修改需要下载的ip库，下述只是示例，根据自己需要配置</span>
<span style="color:#000000;">    EditionIDs GeoLite2-City GeoLite2-Country</span>

<span style="color:#000000;">    # 修改ip库的保存路径</span>
<span style="color:#000000;">    DatabaseDirectory [/usr/share/GeoIP]</span>
</code></span></span></pre>
      <p>
      </p>
      <h3 style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <strong>
         <span style="color:#1a1a1a;">
          3. 运行 GeoIP 更新程序
         </span>
        </strong>
       </span>
      </h3>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         运行 geoipupdate 指令，程序便会下载最新的 GeoIP 数据库文件到 /usr/share/GeoIP 目录。
        </span>
       </span>
      </p>
      <pre><span style="color:#000000;"><span style="background-color:#fafafa;"><code><span style="color:#000000;">[root@yearning home]# geoipupdate</span>
<span style="color:#000000;">[root@yearning GeoIP]# pwd</span>
<span style="color:#000000;">/usr/share/GeoIP</span>
<span style="color:#000000;">[root@yearning GeoIP]# ll</span>
<span style="color:#000000;">总用量 55740</span>
<span style="color:#000000;">-rw-r--r--. 1 root root 50443830 7月   3 17:01 GeoLite2-City.mmdb</span>
<span style="color:#000000;">-rw-r--r--. 1 root root  6629084 7月   3 17:01 GeoLite2-Country.mmdb</span>
<span style="color:#000000;">[root@yearning GeoIP]#</span>
</code></span></span></pre>
      <p>
      </p>
      <h2 style="margin-left:23.1pt;text-align:left;">
       <span style="color:#000000;">
        六、
        <strong>
         <span style="color:#1a1a1a;">
          自动更新 GeoIP 数据库
         </span>
        </strong>
       </span>
      </h2>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         如果要自动下载更新最新的 GeoIP 数据库文件，我们还需要添加计划任务。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         首先在终端中输入以下指令编辑计划任务：
        </span>
       </span>
      </p>
      <pre><span style="color:#000000;"><span style="background-color:#fafafa;"><code><span style="color:#000000;">crontab -e</span>
</code></span></span>
</pre>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         在 crontab 中添加 geoipupdate 自动更新计划任务：
        </span>
       </span>
      </p>
      <pre><span style="color:#000000;"><span style="background-color:#fafafa;"><code><span style="color:#000000;">14 4 * * 0,4 /usr/bin/geoipupdate &gt; /var/log/geoipupdate.log 2&gt;&amp;1</span>
</code></span></span>
</pre>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         添加完成后，保存并退出。其中，如果系统使用的是 nano 文本编辑器，只需依次按 Ctrl + O 和 Ctrl + X 即可，如果系统使用的 vim 文本编辑器，则需要先按 Esc ，再输入 :wq。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="color:#333333;">
         按照以上内容添加到计划任务，系统会在每个星期的星期天和星期四凌晨 4:14 对 GeoIP 数据库文件进行更新。
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
      </p>
      <h2 style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <strong>
         <span style="color:#1a1a1a;">
          GeoIP商业版计费方式
         </span>
        </strong>
       </span>
      </h2>
      <p style="margin-left:0;text-align:left;">
       <img alt="" height="880" src="https://i-blog.csdnimg.cn/direct/c16d7e5f43624f4ba9bfa2a915c00dae.png" width="1200"/>
      </p>
      <p style="margin-left:0;text-align:left;">
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <span style="background-color:#ffff00;">
         <span style="color:#333333;">
          参考资料：
         </span>
        </span>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <a href="https://vickey.fun/2022/04/17/using-geoipupdate-to-auto-update-maxmind-database/" rel="nofollow" title="使用 geoipupdate 自动更新 GeoIP 数据库 - 嘻嘻琦琦">
         使用 geoipupdate 自动更新 GeoIP 数据库 - 嘻嘻琦琦
        </a>
       </span>
      </p>
      <p style="margin-left:0;text-align:left;">
       <span style="color:#000000;">
        <a href="https://blog.wcxst.com/post/geoip%E7%9A%84%E5%AE%89%E8%A3%85%E5%92%8C%E6%9B%B4%E6%96%B0/" rel="nofollow" title="GeoIP的安装和更新 – 悟禅小书童">
         GeoIP的安装和更新 – 悟禅小书童
        </a>
       </span>
      </p>
     </div>
    </div>
   </div>
  </div>
 </article>
</div>



---
layout: post
title: 2025-01-13-搭建私有Git服务器GitLab部署详解
date: 2025-01-13 23:57:09 +0800
categories: [Git]
tags: [git,服务器,gitlab,ubuntu,运维,linux]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=136276396
  alt: 搭建私有Git服务器GitLab部署详解
artid: 136276396
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     搭建私有Git服务器：GitLab部署详解
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h3 id="%E5%BC%95%E8%A8%80%EF%BC%9A">
     <strong>
      引言：
     </strong>
    </h3>
    <blockquote>
     <p>
      为了方便团队协作和代码管理，许多组织选择搭建自己的
      <u>
       <strong>
        私有Git服务器
       </strong>
      </u>
      。
      <strong>
       <span style="background-color:#ff9900;">
        GitLab
       </span>
      </strong>
      是一个集成了Git版本控制、项目管理、代码审查等功能的开源平台，是搭建私有Git服务器的理想选择。
     </p>
    </blockquote>
    <p id="main-toc">
     <strong>
      目录
     </strong>
    </p>
    <p id="%E5%BC%95%E8%A8%80%EF%BC%9A-toc" style="margin-left:40px;">
     <a href="#%E5%BC%95%E8%A8%80%EF%BC%9A" rel="nofollow">
      引言：
     </a>
    </p>
    <p id="-toc" style="margin-left:80px;">
    </p>
    <p id="%E4%B8%80%E3%80%81%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C-toc" style="margin-left:80px;">
     <a href="#%E4%B8%80%E3%80%81%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C" rel="nofollow">
      一、准备工作
     </a>
    </p>
    <p id="%E5%9C%A8%E5%BC%80%E5%A7%8B%E9%83%A8%E7%BD%B2GitLab%E4%B9%8B%E5%89%8D%EF%BC%8C%E8%AF%B7%E7%A1%AE%E4%BF%9D%E4%BD%A0%E5%B7%B2%E7%BB%8F%E5%87%86%E5%A4%87%E5%A5%BD%E4%B8%80%E5%8F%B0%E6%BB%A1%E8%B6%B3%E4%BB%A5%E4%B8%8B%E8%A6%81%E6%B1%82%E7%9A%84Linux%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%9A-toc" style="margin-left:120px;">
     <a href="#%E5%9C%A8%E5%BC%80%E5%A7%8B%E9%83%A8%E7%BD%B2GitLab%E4%B9%8B%E5%89%8D%EF%BC%8C%E8%AF%B7%E7%A1%AE%E4%BF%9D%E4%BD%A0%E5%B7%B2%E7%BB%8F%E5%87%86%E5%A4%87%E5%A5%BD%E4%B8%80%E5%8F%B0%E6%BB%A1%E8%B6%B3%E4%BB%A5%E4%B8%8B%E8%A6%81%E6%B1%82%E7%9A%84Linux%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%9A" rel="nofollow">
      在开始部署GitLab之前，请确保你已经准备好一台满足以下要求的Linux服务器：
     </a>
    </p>
    <p id="%E4%BA%8C%E3%80%81%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96-toc" style="margin-left:80px;">
     <a href="#%E4%BA%8C%E3%80%81%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96" rel="nofollow">
      二、安装依赖
     </a>
    </p>
    <p id="%E4%B8%89%E3%80%81%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1%E5%99%A8-toc" style="margin-left:80px;">
     <a href="#%E4%B8%89%E3%80%81%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1%E5%99%A8" rel="nofollow">
      三、配置服务器
     </a>
    </p>
    <p id="%E5%AF%B9%E4%BA%8EUbuntu%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E4%BD%A0%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E4%BB%A5%E4%B8%8B%E5%91%BD%E4%BB%A4%E8%AE%BE%E7%BD%AE%E4%B8%BB%E6%9C%BA%E5%90%8D%EF%BC%9A%C2%A0-toc" style="margin-left:160px;">
     <a href="#%E5%AF%B9%E4%BA%8EUbuntu%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E4%BD%A0%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E4%BB%A5%E4%B8%8B%E5%91%BD%E4%BB%A4%E8%AE%BE%E7%BD%AE%E4%B8%BB%E6%9C%BA%E5%90%8D%EF%BC%9A%C2%A0" rel="nofollow">
      对于Ubuntu服务器，你可以使用以下命令设置主机名：
     </a>
    </p>
    <p id="%E7%84%B6%E5%90%8E%EF%BC%8C%E6%9B%B4%E6%96%B0%2Fetc%2Fhosts%E6%96%87%E4%BB%B6%E4%BB%A5%E5%8F%8D%E6%98%A0%E6%96%B0%E7%9A%84%E4%B8%BB%E6%9C%BA%E5%90%8D%EF%BC%9A%C2%A0-toc" style="margin-left:160px;">
     <a href="#%E7%84%B6%E5%90%8E%EF%BC%8C%E6%9B%B4%E6%96%B0%2Fetc%2Fhosts%E6%96%87%E4%BB%B6%E4%BB%A5%E5%8F%8D%E6%98%A0%E6%96%B0%E7%9A%84%E4%B8%BB%E6%9C%BA%E5%90%8D%EF%BC%9A%C2%A0" rel="nofollow">
      然后，更新/etc/hosts文件以反映新的主机名：
     </a>
    </p>
    <p id="%E5%9B%9B%E3%80%81%E4%B8%8B%E8%BD%BDGitLab%E8%BD%AF%E4%BB%B6%E5%8C%85-toc" style="margin-left:80px;">
     <a href="#%E5%9B%9B%E3%80%81%E4%B8%8B%E8%BD%BDGitLab%E8%BD%AF%E4%BB%B6%E5%8C%85" rel="nofollow">
      四、下载GitLab软件包
     </a>
    </p>
    <p id="%E4%BA%94%E3%80%81%E9%85%8D%E7%BD%AEGitLab%C2%A0-toc" style="margin-left:80px;">
     <a href="#%E4%BA%94%E3%80%81%E9%85%8D%E7%BD%AEGitLab%C2%A0" rel="nofollow">
      五、配置GitLab
     </a>
    </p>
    <p id="%E5%85%AD%E3%80%81%E5%90%AF%E5%8A%A8GitLab%E6%9C%8D%E5%8A%A1-toc" style="margin-left:80px;">
     <a href="#%E5%85%AD%E3%80%81%E5%90%AF%E5%8A%A8GitLab%E6%9C%8D%E5%8A%A1" rel="nofollow">
      六、启动GitLab服务
     </a>
    </p>
    <p id="%E5%85%AD%E3%80%81%E8%AE%BF%E9%97%AEGitLab-toc" style="margin-left:80px;">
     <a href="#%E5%85%AD%E3%80%81%E8%AE%BF%E9%97%AEGitLab" rel="nofollow">
      六、访问GitLab
     </a>
    </p>
    <hr id="hr-toc"/>
    <p class="img-center">
     <img alt="" height="398" src="https://i-blog.csdnimg.cn/blog_migrate/2da4579ed1a4f2c0eaaa282cb8ff2c52.png" width="700"/>
    </p>
    <h4>
    </h4>
    <hr/>
    <h4 id="%E4%B8%80%E3%80%81%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C">
     <strong>
      一、准备工作
     </strong>
    </h4>
    <ul>
     <li>
      <h5 id="%E5%9C%A8%E5%BC%80%E5%A7%8B%E9%83%A8%E7%BD%B2GitLab%E4%B9%8B%E5%89%8D%EF%BC%8C%E8%AF%B7%E7%A1%AE%E4%BF%9D%E4%BD%A0%E5%B7%B2%E7%BB%8F%E5%87%86%E5%A4%87%E5%A5%BD%E4%B8%80%E5%8F%B0%E6%BB%A1%E8%B6%B3%E4%BB%A5%E4%B8%8B%E8%A6%81%E6%B1%82%E7%9A%84Linux%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%9A">
       <span style="background-color:#f3f3f4;">
        在开始
       </span>
       <span style="background-color:#ff9900;">
        部署GitLab
       </span>
       <span style="background-color:#f3f3f4;">
        之前，请确保你已经准备好一台满足以下要求的Linux服务器：
       </span>
      </h5>
     </li>
    </ul>
    <blockquote>
     <ul>
      <li>
       <span style="background-color:#fefcd8;">
        操作系统
       </span>
       ：推荐使用
       <strong>
        Ubuntu
       </strong>
       或
       <strong>
        CentOS
       </strong>
       等主流Linux发行版。
      </li>
      <li>
       <span style="background-color:#fefcd8;">
        内存
       </span>
       ：
       <u>
        至少2GB RAM（推荐4GB或更多）
       </u>
       。
      </li>
      <li>
       <span style="background-color:#fefcd8;">
        存储空间
       </span>
       ：至少20GB的可用存储空间（根据需求可适当增加）。
      </li>
     </ul>
    </blockquote>
    <p style="text-align:right;">
     <u>
      <em>
       此外，你还需要拥有root或sudo权限，以便在服务器上执行命令。
      </em>
     </u>
    </p>
    <h4 id="%E4%BA%8C%E3%80%81%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96">
     <strong>
      二、安装依赖
     </strong>
    </h4>
    <ul>
     <li>
      <span style="background-color:#f3f3f4;">
       在部署GitLab之前，需要安装一些必要的依赖项。你可以通过以下Bash命令在Ubuntu服务器上安装依赖：
      </span>
     </li>
    </ul>
    <pre><code class="language-bash">sudo apt-get update  
sudo apt-get install -y curl openssh-server ca-certificates postfix</code></pre>
    <ul>
     <li>
      <span style="background-color:#f3f3f4;">
       对于CentOS服务器，你可以使用以下命令安装依赖：
      </span>
     </li>
    </ul>
    <pre><code class="language-bash">sudo yum install -y curl openssh-server postfix  
sudo yum install -y https://download.docker.com/linux/centos/docker-ce.repo  
sudo yum install -y docker-ce  
sudo systemctl start docker  
sudo systemctl enable docker</code></pre>
    <p style="text-align:right;">
     (
     <u>
      <span style="background-color:#f3f3f4;">
       请根据你的操作系统选择相应的命令执行)
      </span>
     </u>
    </p>
    <h4 id="%E4%B8%89%E3%80%81%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1%E5%99%A8">
     <strong>
      三、配置服务器
     </strong>
    </h4>
    <blockquote>
     <p>
      <em>
       接下来，我们需要配置服务器以满足
       <strong>
        GitLab
       </strong>
       的要求。首先，设置服务器的主机名，并确保服务器的防火墙允许
       <u>
        HTTP（
        <span style="color:#ff9900;">
         <strong>
          80端口
         </strong>
        </span>
        ）和HTTPS（
        <span style="color:#ff9900;">
         <strong>
          443端口
         </strong>
        </span>
        ）
       </u>
       的访问。
      </em>
     </p>
    </blockquote>
    <ul>
     <li>
      <h6 id="%E5%AF%B9%E4%BA%8EUbuntu%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E4%BD%A0%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E4%BB%A5%E4%B8%8B%E5%91%BD%E4%BB%A4%E8%AE%BE%E7%BD%AE%E4%B8%BB%E6%9C%BA%E5%90%8D%EF%BC%9A%C2%A0">
       <span style="background-color:#ff9900;">
        对于Ubuntu服务器，你可以使用以下命令设置主机名：
       </span>
      </h6>
     </li>
    </ul>
    <pre><code class="language-bash">sudo hostnamectl set-hostname gitlab-server</code></pre>
    <ul>
     <li>
      <h6 id="%E7%84%B6%E5%90%8E%EF%BC%8C%E6%9B%B4%E6%96%B0%2Fetc%2Fhosts%E6%96%87%E4%BB%B6%E4%BB%A5%E5%8F%8D%E6%98%A0%E6%96%B0%E7%9A%84%E4%B8%BB%E6%9C%BA%E5%90%8D%EF%BC%9A%C2%A0">
       <span style="background-color:#ff9900;">
        然后，更新
       </span>
       <code>
        <span style="background-color:#ff9900;">
         /etc/hosts
        </span>
       </code>
       <span style="background-color:#ff9900;">
        文件以反映新的主机名：
       </span>
      </h6>
     </li>
    </ul>
    <pre><code class="language-bash">echo "127.0.0.1 gitlab-server" | sudo tee -a /etc/hosts</code></pre>
    <ul>
     <li>
      <span style="background-color:#f3f3f4;">
       接下来，
      </span>
      <u>
       <span style="background-color:#f3f3f4;">
        配置防火墙
       </span>
      </u>
      <span style="background-color:#f3f3f4;">
       允许
      </span>
      <strong>
       <span style="background-color:#f3f3f4;">
        HTTP
       </span>
      </strong>
      <span style="background-color:#f3f3f4;">
       和
      </span>
      <strong>
       <span style="background-color:#f3f3f4;">
        HTTPS
       </span>
      </strong>
      <span style="background-color:#f3f3f4;">
       访问。对于Ubuntu服务器，你可以使用
      </span>
      <span style="color:#fe2c24;">
       <strong>
        <code>
         <span style="background-color:#f3f3f4;">
          ufw
         </span>
        </code>
       </strong>
      </span>
      <span style="background-color:#f3f3f4;">
       命令：
      </span>
     </li>
    </ul>
    <pre><code class="language-bash">sudo ufw allow 80/tcp  
sudo ufw allow 443/tcp  
sudo ufw enable</code></pre>
    <h4 id="%E5%9B%9B%E3%80%81%E4%B8%8B%E8%BD%BDGitLab%E8%BD%AF%E4%BB%B6%E5%8C%85">
     <strong>
      四、下载GitLab软件包
     </strong>
    </h4>
    <blockquote>
     <p>
      现在，我们可以下载
      <strong>
       GitLab
      </strong>
      的软件包。GitLab提供了官方
      <span style="color:#4da8ee;">
       <strong>
        Docker
       </strong>
      </span>
      镜像，
      <u>
       我们可以通过Docker来安装GitLab
      </u>
      。首先，安装Docker（如果尚未安装）：--
      <a class="link-info" href="https://www.docker.com/" rel="nofollow" title="点击进入安装">
       点击进入安装
      </a>
     </p>
    </blockquote>
    <ul>
     <li>
      <span style="background-color:#f3f3f4;">
       对于
       <span style="color:#a2e043;">
        <strong>
         Ubuntu
        </strong>
       </span>
       服务器：
      </span>
     </li>
    </ul>
    <pre><code class="language-bash">sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common  
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -  
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"  
sudo apt-get update  
sudo apt-get install -y docker-ce docker-ce-cli containerd.io  
sudo systemctl restart docker</code></pre>
    <ul>
     <li>
      <span style="background-color:#f3f3f4;">
       对于
       <strong>
        <span style="color:#a2e043;">
         CentOS
        </span>
       </strong>
       服务器（已在前面安装）：
      </span>
     </li>
    </ul>
    <pre><code class="language-bash"># 无需额外步骤，已安装Docker</code></pre>
    <ul>
     <li>
      <span style="background-color:#f3f3f4;">
       接下来，拉取
       <strong>
        GitLab
       </strong>
       的
       <span style="color:#4da8ee;">
        <strong>
         Docker
        </strong>
       </span>
       镜像：
      </span>
     </li>
    </ul>
    <pre><code class="language-bash">sudo docker pull gitlab/gitlab-ce:latest</code></pre>
    <h4 id="%E4%BA%94%E3%80%81%E9%85%8D%E7%BD%AEGitLab%C2%A0">
     <strong>
      五、配置GitLab
     </strong>
    </h4>
    <ul>
     <li>
      <span style="background-color:#f3f3f4;">
       创建一个名为
      </span>
      <strong>
       <code>
        <span style="background-color:#eaf4fc;">
         gitlab.yml
        </span>
       </code>
      </strong>
      <span style="background-color:#f3f3f4;">
       的配置文件，用于配置
      </span>
      <strong>
       <span style="background-color:#f3f3f4;">
        GitLab
       </span>
      </strong>
      <span style="background-color:#f3f3f4;">
       的各项参数。以下是一个示例配置：
      </span>
     </li>
    </ul>
    <pre><code class="language-bash">#yaml
gitlab:  
  OMNIBUS_GITLAB_EXTERNAL_URL: 'http://your_server_ip'  
  OMNIBUS_GITLAB_POSTGRES_DATA_DIR: "/var/opt/gitlab/postgresql/data"  
  OMNIBUS_GITLAB_POSTGRES_HOST: "localhost"  
  OMNIBUS_GITLAB_POSTGRES_PORT: "5432"  
  OMNIBUS_GITLAB_POSTGRES_USERNAME: "gitlab"  
  OMNIBUS_GITLAB_POSTGRES_PASSWORD: "your_password"</code></pre>
    <p>
     <em>
      <span style="background-color:#f3f3f4;">
       请根据你的实际情况
      </span>
      <span style="background-color:#c7e6ea;">
       修改
      </span>
      <code>
       <span style="background-color:#c7e6ea;">
        OMNIBUS_GITLAB_EXTERNAL_URL
       </span>
      </code>
      <span style="background-color:#c7e6ea;">
       为你的服务器IP或域名
      </span>
      <span style="background-color:#f3f3f4;">
       ，并设置PostgreSQL数据库的用户名和密码。
      </span>
     </em>
    </p>
    <h4 id="%E5%85%AD%E3%80%81%E5%90%AF%E5%8A%A8GitLab%E6%9C%8D%E5%8A%A1">
     <strong>
      六、启动GitLab服务
     </strong>
    </h4>
    <ul>
     <li>
      <span style="background-color:#f3f3f4;">
       在服务器上执行以下命令，
      </span>
      <strong>
       <span style="background-color:#a2e043;">
        启动GitLab服务
       </span>
      </strong>
      <span style="background-color:#f3f3f4;">
       ：
      </span>
     </li>
    </ul>
    <pre><code class="language-bash">docker run --detach \  
  --hostname gitlab.example.com \  
  --publish 443:443 --publish 80:80 --publish 22:22 \  
  --name gitlab \  
  --restart always \  
  --volume $GITLAB_HOME/config:/etc/gitlab \  
  --volume $GITLAB_HOME/logs:/var/log/gitlab \  
  --volume $GITLAB_HOME/data:/var/opt/gitlab \  
  --volume /etc/localtime:/etc/localtime:ro \  
  gitlab/gitlab-ce:latest</code></pre>
    <p>
     <em>
      这里的
      <code>
       <span style="background-color:#f3f3f4;">
        $GITLAB_HOME
       </span>
      </code>
      是你为
      <strong>
       GitLab
      </strong>
      配置的一个目录，用于存放配置、日志和数据文件。你可以根据实际情况修改这个目录的路径。
     </em>
    </p>
    <h4 id="%E5%85%AD%E3%80%81%E8%AE%BF%E9%97%AEGitLab">
     <strong>
      六、访问GitLab
     </strong>
    </h4>
    <blockquote>
     <ul>
      <li>
       在浏览器中
       <u>
        输入你的服务器
        <strong>
         IP
        </strong>
        或域名
       </u>
       ，你应该能够看到
       <strong>
        GitLab
       </strong>
       的登录页面。
      </li>
      <li>
       使用默认的
       <strong>
        <code>
         <span style="background-color:#fefcd8;">
          root
         </span>
        </code>
       </strong>
       账号和密码
       <strong>
        <u>
         <code>
          <span style="background-color:#fefcd8;">
           5iveL!fe
          </span>
         </code>
        </u>
       </strong>
       登录。登录后，你可以根据自己的需求进行进一步的配置和定制。
      </li>
     </ul>
    </blockquote>
    <p>
     <strong>
      总结：
     </strong>
    </p>
    <p>
     <em>
      通过本文的指导，你已经成功搭建了一个私有的Git服务器。
      <u>
       <strong>
        <span style="background-color:#ff9900;">
         GitLab
        </span>
       </strong>
       提供了丰富的功能和灵活的配置选项，能够满足团队在代码托管、项目管理等方面的需求
      </u>
      。希望你在使用
      <strong>
       GitLab
      </strong>
      的过程中能够充分利用其功能，提高团队的协作效率。
     </em>
    </p>
   </div>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f626c6f:672e6373646e2e6e65742f323230325f37353536383437302f:61727469636c652f64657461696c732f313336323736333936</p>

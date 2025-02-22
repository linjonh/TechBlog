---
layout: post
title: C调用everything工具进行文件搜索功能
date: 2024-01-09 07:41:02 +0800
categories: [C.NETFramework]
tags: [everything,c,.net]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=131220069
    alt: C调用everything工具进行文件搜索功能
artid: 131220069
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     C#调用everything工具进行文件搜索功能
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h2>
     前言：
    </h2>
    <p>
     根据需求，现在需要任意输入输入批次号，然后软件到共享文件夹里面搜索这个CSV文件拷贝到我们的分拣表格里面，以及搜索这个批次号下面的文件夹里面的 可以运行 的加工文件拷贝到Z盘里面（Z盘存在网络映射文件夹）
    </p>
    <p>
     难点：
    </p>
    <p>
     1.电脑自带的搜索工具遍历搜索比较困难，文件多会卡住程序；
    </p>
    <p>
     2.选取指定路径时，可能存在找不到路径（访问权限不足，导致无法访问共享文件夹；防火墙或安全软件阻止了网络连接等等）；如果您的程序以管理员身份运行，则可能会受到UAC（用户帐户控制）的影响，导致无法访问网络映射驱动器
    </p>
    <p>
     3.需求需要根据批次号，再去路径下，找到该批次号名称所在的文件夹，然后找到所有的加工文件，一键复制到指定目录
    </p>
    <p>
    </p>
    <p>
    </p>
    <h3>
     准备工作：
    </h3>
    <table border="1" cellpadding="1" cellspacing="1" style="width:500px;">
     <tbody>
      <tr>
       <td>
        配置
       </td>
       <td>
        要求
       </td>
      </tr>
      <tr>
       <td>
        系统
       </td>
       <td>
        windows10以上
       </td>
      </tr>
      <tr>
       <td>
        软件
       </td>
       <td>
        Visual Studio 2022、everything
       </td>
      </tr>
      <tr>
       <td>
        接口
       </td>
       <td>
        ES
       </td>
      </tr>
     </tbody>
    </table>
    <p>
    </p>
    <h3>
     开始
    </h3>
    <p>
     新建一个winform窗体项目，找到该项目的文件目录地址，将Everything” 搜索引擎、ES下载放在debug文件夹的bin目录下
    </p>
    <p>
     <a class="link-info" href="https://www.voidtools.com/zh-cn/downloads/" rel="nofollow" title="everything下载">
      everything下载
     </a>
     （找最新版的就好，先下载好，自己试试能不能搜索自己想要的文件）；
    </p>
    <p>
     <a class="link-info" href="https://www.voidtools.com/ES-1.1.0.26.zip" rel="nofollow" title="ES接口下载">
      ES接口下载
     </a>
     :ES 是让用户在命令提示符中使用 Everything 搜索的命令行接口。
    </p>
    <p>
     <img alt="" height="937" src="https://i-blog.csdnimg.cn/blog_migrate/eccef04ff11bb5ac87e6ef2b8c88d2e7.png" width="1200"/>
    </p>
    <p>
    </p>
    <h3 id="需求">
     需求
    </h3>
    <ul>
     <li>
      <p>
       Everything 必须已安装并运行中。
      </p>
     </li>
    </ul>
    <p>
    </p>
    <h3>
     窗体设计
    </h3>
    <p>
     大概设计成这种窗体，样式自定义就好
    </p>
    <p>
     <img alt="" height="586" src="https://i-blog.csdnimg.cn/blog_migrate/9741f2e65e20023c124811349dc69f0b.png" width="741"/>
    </p>
    <p>
    </p>
    <p>
     我的程序名称为：
    </p>
    <table border="1" cellpadding="1" cellspacing="1" style="width:500px;">
     <tbody>
      <tr>
       <td>
        控件
       </td>
       <td>
        控件名称
       </td>
       <td>
        控件
       </td>
       <td>
        控件名称
       </td>
      </tr>
      <tr>
       <td>
        label6
       </td>
       <td>
        打孔文件后缀
       </td>
       <td>
        label4
       </td>
       <td>
        分拣文件后缀
       </td>
      </tr>
      <tr>
       <td>
        label5
       </td>
       <td>
        批次号：
       </td>
       <td>
        btnCopy
       </td>
       <td>
        复制
       </td>
      </tr>
      <tr>
       <td>
        txtChType
       </td>
       <td>
        .mpr
       </td>
       <td>
        txtType
       </td>
       <td>
        .csv
       </td>
      </tr>
      <tr>
       <td>
        LBlChild
       </td>
       <td>
       </td>
       <td>
        label1
       </td>
       <td>
       </td>
      </tr>
      <tr>
       <td>
        btnSz
       </td>
       <td>
        地址设置
       </td>
       <td>
        lBl
       </td>
       <td>
       </td>
      </tr>
      <tr>
       <td>
        txtbox
       </td>
       <td>
       </td>
       <td>
        prog
       </td>
       <td>
       </td>
      </tr>
     </tbody>
    </table>
    <p>
     附上一个小程序：搜索所有窗体，将窗体的名称输出：
    </p>
    <pre><code class="hljs">            foreach (Control control in this.Controls)
            {
                string name = control.Name;
                string text = control.Text;
                
                Console.WriteLine($"Name: {name}, Text: {text}");
            }

</code></pre>
    <p>
    </p>
    <h3>
     设计主要代码：
    </h3>
    <p>
     <img alt="" height="425" src="https://i-blog.csdnimg.cn/blog_migrate/75887dd978fb2e9a8d75edad04f321b2.png" width="464"/>
    </p>
    <p>
    </p>
    <p>
     代码保存与读取的路径存放在App.config，方便下次读取与保存
    </p>
    <p>
     配置文件准备：App.config:
    </p>
    <p>
     <img alt="" height="498" src="https://i-blog.csdnimg.cn/blog_migrate/5d6f2f8af6fa5c11c86bc598c1824496.png" width="993"/>
    </p>
    <p>
    </p>
    <p>
     添加一个 “CmdHelper” 工具类用于通过启动ES执行相关命令以便执行Everything搜索
    </p>
    <p>
    </p>
    <pre><code class="hljs">using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace everythingTest
{
	internal class CmdHelper
	{
		private static string CmdPath = @"C:\Windows\System32\cmd.exe";

		public static void RunCmd(string cmd, out string output)
		{
			
			cmd = cmd.Trim().TrimEnd('&amp;') + "&amp;exit";

			using (Process p = new Process())
			{
				p.StartInfo.FileName = CmdPath;
				p.StartInfo.UseShellExecute = false;        
				p.StartInfo.RedirectStandardInput = true;   
				p.StartInfo.RedirectStandardOutput = true;  
				p.StartInfo.RedirectStandardError = true;   
				p.StartInfo.CreateNoWindow = true;          
				p.Start();                                 

				//向cmd窗口写入命令
				p.StandardInput.WriteLine(cmd);
				p.StandardInput.AutoFlush = true;

				//获取cmd窗口的输出信息
				output = p.StandardOutput.ReadToEnd();
				p.WaitForExit();
				p.Close();
			}
		}

	}
}
</code></pre>
    <p>
    </p>
    <p>
     1.模糊搜索功能
    </p>
    <pre><code class="hljs">		//模糊搜索
		private  void search_Changed(object sender, EventArgs e)
		{

			//要求：读取csv
			// 读取配置文件中的路径
			string folderpath = ConfigurationManager.AppSettings["FolderPath"];

			//设置关键字
			string name = this.txtbox.Text.Trim();
			//设置搜索文件扩展名
			string type = txtType.Text.Trim();


			string cmd = $@"es.exe *{name}*{type} -path {folderpath}";

			CmdHelper.RunCmd(cmd, out string str);
			lBl.DataSource = GetFileList(str);
			lBl.Refresh();
			


		}</code></pre>
    <p>
     2.文件选中操作事件
    </p>
    <pre><code class="hljs">//文件选中 操作
		private void thevalueChanged(object sender, EventArgs e)
		{
		
			LBlChild.DataSource = null;
			LBlChild.Items.Clear();
			label3.Text = "";

			if (lBl.SelectedItem == null || string.IsNullOrEmpty(lBl.SelectedItem.ToString()))
			{
				return;
			}
			// 读取文件名  比如B230223030
			string fileName = Path.GetFileNameWithoutExtension(lBl.SelectedItem.ToString());

			// 读取配置文件中要搜索的路径   比如C:\\Users\\DELL\\Desktop
			string folderpath2 = ConfigurationManager.AppSettings["FolderPath2"];

			//直接获取文件夹名称的路径  例如搜索demo   C:\\Users\\DELL\\Desktop\\demo
			string cmd = $"es.exe -s folder:ww:{fileName} {folderpath2}";

			CmdHelper.RunCmd(cmd, out string str);
			var list = GetFileList(str);
			//获取文件夹全路径
			string tempath = list[0];

			string path = $"{tempath}\\MPR56";
			//需要搜索的类型  
			string type = txtChType.Text.Trim();

			string cmd2 = $@"es.exe *{type} -path {path}";
			CmdHelper.RunCmd(cmd2, out string str2);
			var list2 = GetFileList(str2);

			LBlChild.DataSource = list2;
			LBlChild.Refresh();
			label3.Visible = true;
			label3.Text = $"在MPR56文件夹共搜索出{list2.Count - 1}个文件";


			// 控件全选
			for (int i = 0; i &lt; LBlChild.Items.Count; i++)
			{
				LBlChild.SetSelected(i, true);
			}

		}</code></pre>
    <p>
     3.一键复制操作
    </p>
    <pre><code class="hljs">//复制
		private void SelectedItems(object sender, EventArgs e)
		{
			List&lt;string&gt; selectedFiles = new List&lt;string&gt;();
			foreach (string file in lBl.SelectedItems)
			{
				selectedFiles.Add(file);
			}

			//复制文件到指定文件夹
			string targetFolder = ConfigurationManager.AppSettings["Path"];

			foreach (string file in selectedFiles)
			{
				string fileName = Path.GetFileName(file);

				string targetPath = Path.Combine(targetFolder, fileName);

				File.Copy(file, targetPath, true); //覆盖已存在的文件

			}
			

			//搜索文件夹下的MPR56的加工文件
			List&lt;string&gt; selectedFiles2 = new List&lt;string&gt;();
			foreach (string file in LBlChild.SelectedItems)
			{
				selectedFiles2.Add(file);
			}

			//复制mpr文件到指定文件夹
			string Path2 = ConfigurationManager.AppSettings["Path2"];
			foreach (string file in selectedFiles2)
			{
				string fileName = Path.GetFileName(file);
				string targetPath = Path.Combine(Path2, fileName);
				if (!string.IsNullOrEmpty(file))
				{
					File.Copy(file, targetPath, true); //覆盖已存在的文件
				}

			}
			for (int i = 1; i &lt;= LBlChild.Items.Count - 1; i++)
			{
				prog.Maximum = LBlChild.Items.Count -1;
				prog.Minimum = 1;

				prog.Visible = true;
				prog.Value = i;
				prog.Refresh();
				Thread.Sleep(20);
				prog.Visible = false;
			}


		}</code></pre>
    <p>
     4.文件地址修改
    </p>
    <p>
     先在主窗体设置显示新的窗体“sz”(名字起的有点随意)，然后
    </p>
    <blockquote>
     <p>
      //设置
      <br/>
      private void btnSz_Click(object sender, EventArgs e)
      <br/>
      {
      <!-- -->
      <br/>
      sz s = new sz();
      <br/>
      s.Show();
     </p>
     <p>
      }
     </p>
    </blockquote>
    <p>
     5.设置窗体代码（记得添加新的窗体）
    </p>
    <pre><code class="hljs">
		public sz()
		{
			InitializeComponent();
			// 读取config文件中的文件夹路径
			lbl_csvAddress.Text = ConfigurationManager.AppSettings["FolderPath"];
			label2.Text = ConfigurationManager.AppSettings["FolderPath2"];
			label3.Text = ConfigurationManager.AppSettings["Path"];
			label4.Text = ConfigurationManager.AppSettings["Path2"];

		}

		private void btn_Click(object sender, EventArgs e)
		{
			Button btn = sender as Button;
			string name = (string)btn.Tag;
			//string name = null;

			// 使用FolderBrowserDialog控件选择文件夹路径
			FolderBrowserDialog folderDialog = new FolderBrowserDialog();
		
		

			if (folderDialog.ShowDialog() == DialogResult.OK)
			{
				// 获取用户选择的文件夹路径
				string sharedFolderPath = folderDialog.SelectedPath;
				
				// 将文件夹路径保存到config文件中
				Configuration config = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);
				//根据名称绑定相应的config位置
				config.AppSettings.Settings["" + name + ""].Value = folderDialog.SelectedPath;

				config.Save(ConfigurationSaveMode.Modified);
				ConfigurationManager.RefreshSection("appSettings");
			}

			// 更新界面上的标签显示文件夹路径
			lbl_csvAddress.Text = ConfigurationManager.AppSettings["FolderPath"];
			label2.Text = ConfigurationManager.AppSettings["FolderPath2"];
			label3.Text = ConfigurationManager.AppSettings["Path"];
			label4.Text = ConfigurationManager.AppSettings["Path2"];
		}

		private void btnMag_Click(object sender, EventArgs e)
		{
			OpenFileDialog openFileDialog = new OpenFileDialog();
			openFileDialog.CheckFileExists = false;
			openFileDialog.ValidateNames = false;
			openFileDialog.FileName = "Folder Selection.";
			if (openFileDialog.ShowDialog() == DialogResult.OK)
			{
				string folderPath = Path.GetDirectoryName(openFileDialog.FileName);
				//textBox1.Text = folderPath;
			}
		}</code></pre>
    <p>
     新窗体样式大概这个样子就好：
    </p>
    <p>
     <img alt="" height="501" src="https://i-blog.csdnimg.cn/blog_migrate/22935a681639b89458e21761cd851551.png" width="685"/>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <h3>
     执行程序：
    </h3>
    <p>
     执行先启动everything，如果需要读取网络映射盘的内容，需要提前设置，点击工具-&gt; 再次点击选项-&gt;点击文件夹，如图：
    </p>
    <p>
     <img alt="" height="489" src="https://i-blog.csdnimg.cn/blog_migrate/147fab75ffab646b4dc2d9328f9e315f.png" width="811"/>
    </p>
    <p>
    </p>
    <p>
     效果图：
    </p>
    <p>
     <img alt="" height="589" src="https://i-blog.csdnimg.cn/blog_migrate/720a5b07051d18508577313c615d5a0d.png" width="739"/>
    </p>
    <p>
    </p>
    <p>
     本次要点在于文件的模糊搜索功能，自行设计出想要的需求，参考使用例子：
    </p>
    <p>
    </p>
    <blockquote>
     <h3 id="限制">
      限制
     </h3>
     <p>
      ES 无法访问书签或筛选器。
     </p>
     <h3 id="例子">
      例子
     </h3>
     <p>
      导出全部 mp3 文件为 Everything 文件列表 mp3.efu：
     </p>
     <pre>es.exe *.mp3 -export-efu mp3.efu</pre>
     <p>
      显示最大的 10 个文件：
     </p>
     <pre>es.exe -sort size -n 10</pre>
     <p>
      显示最近修改的 10 个文件：
     </p>
     <pre>es.exe -sort dm -n 10</pre>
     <p>
      高亮搜索关键词 foo bar：
     </p>
     <pre>es.exe foo bar -highlight</pre>
     <p>
      使 ES 显示大小分栏、修改日期分栏和设置颜色且为默认设置：
     </p>
     <pre>es.exe -size -dm -sizecolor 0x0d -dmcolor 0x0b -save-settings</pre>
    </blockquote>
    <p>
    </p>
    <p>
     以下为官方文档基本的部分参考，需要详细设计，请参考
     <a class="link-info" href="https://www.voidtools.com/zh-cn/support/everything/command_line_interface/" rel="nofollow" title="ES常规命令行">
      ES常规命令行
     </a>
     选项：
    </p>
    <blockquote>
     <h3 id="常规命令行选项">
      常规命令行选项
     </h3>
     <p>
      以下命令兼容于任意版本 Everything。
     </p>
     <p>
      <em>
       -r
      </em>
     </p>
     <p>
      <em>
       -regex
      </em>
     </p>
     <p>
      使用正则表达式搜索。
     </p>
     <p>
     </p>
     <p>
      <em>
       -i
      </em>
     </p>
     <p>
      <em>
       -case
      </em>
     </p>
     <p>
      匹配大小写。
     </p>
     <p>
     </p>
     <p>
      <em>
       -w
      </em>
     </p>
     <p>
      <em>
       -ww
      </em>
     </p>
     <p>
      <em>
       -whole-word
      </em>
     </p>
     <p>
      <em>
       -whole-words
      </em>
     </p>
     <p>
      匹配全字。
     </p>
     <p>
     </p>
     <p>
      <em>
       -p
      </em>
     </p>
     <p>
      <em>
       -match-path
      </em>
     </p>
     <p>
      匹配全路径和文件名。
     </p>
     <p>
     </p>
     <p>
      <em>
       -h
      </em>
     </p>
     <p>
      <em>
       -help
      </em>
     </p>
     <p>
      显示帮助。
     </p>
     <p>
     </p>
     <p>
      <em>
       -o
      </em>
      &lt;offset&gt;
     </p>
     <p>
      <em>
       -offset
      </em>
      &lt;offset&gt;
     </p>
     <p>
      以以零为基础偏移显示搜索结果。
     </p>
     <p>
     </p>
     <p>
      <em>
       -n
      </em>
      &lt;num&gt;
     </p>
     <p>
      <em>
       -max-results
      </em>
      &lt;num&gt;
     </p>
     <p>
      限定结果显示数目为 &lt;num&gt;。
     </p>
     <p>
     </p>
     <p>
      <em>
       -s
      </em>
     </p>
     <p>
      以全路径排序。
     </p>
    </blockquote>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
     以上不对的地方请指正，需要源代码的可以私信我，文档供大家参考与学习。
    </p>
   </div>
  </div>
 </article>
</div>



---
layout: post
title: 2025-01-09-golang单元测试及mock总结
date: 2025-01-09 21:11:48 +0800
categories: [golang]
tags: [golang,单元测试,开发语言]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=131742158
  alt: golang单元测试及mock总结
artid: 131742158
render_with_liquid: false
---
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     golang单元测试及mock总结
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-atom-one-light" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
    </p>
    <div class="toc">
     <h4>
      文章目录
     </h4>
     <ul>
      <li>
       <ul>
        <li>
         <a href="#_1" rel="nofollow">
          一、前言
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#1_3" rel="nofollow">
            1、单测的定位
           </a>
          </li>
          <li>
           <a href="#2vscode_11" rel="nofollow">
            2、vscode中生成单测
           </a>
          </li>
         </ul>
        </li>
        <li>
         <a href="#case_75" rel="nofollow">
          二、构造测试case的注意事项
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#1_77" rel="nofollow">
            1、项目初始化
           </a>
          </li>
          <li>
           <a href="#2interface_89" rel="nofollow">
            2、构造空interface{}
           </a>
          </li>
          <li>
           <a href="#3timeTime_105" rel="nofollow">
            3、构造结构体的time.Time类型
           </a>
          </li>
          <li>
           <a href="#4jsontest_case_121" rel="nofollow">
            4、构造json格式的test case
           </a>
          </li>
         </ul>
        </li>
        <li>
         <a href="#_141" rel="nofollow">
          三、运行单测文件
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#1_143" rel="nofollow">
            1、整体运行单测文件
           </a>
          </li>
          <li>
           <a href="#2_153" rel="nofollow">
            2、运行单个单测文件报错
           </a>
          </li>
          <li>
           <ul>
            <li>
             <a href="#1commandlinearguments_162" rel="nofollow">
              （1）command-line-arguments是什么
             </a>
            </li>
            <li>
             <a href="#2undefined_172" rel="nofollow">
              （2）undefined发生原因
             </a>
            </li>
            <li>
             <a href="#3panic_179" rel="nofollow">
              （3）缺少初始化导致的发生panic
             </a>
            </li>
           </ul>
          </li>
          <li>
           <a href="#3_195" rel="nofollow">
            3、查看单测覆盖率
           </a>
          </li>
          <li>
           <a href="#4_202" rel="nofollow">
            4、单测覆盖文件解读
           </a>
          </li>
          <li>
           <a href="#5_217" rel="nofollow">
            5、生成可被浏览器打开的单测文件
           </a>
          </li>
          <li>
           <a href="#6_228" rel="nofollow">
            6、单测覆盖率的问题
           </a>
          </li>
         </ul>
        </li>
        <li>
         <a href="#_236" rel="nofollow">
          四、关于单测粒度的问题
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#1chatgpt_251" rel="nofollow">
            1、chatgpt的回答
           </a>
          </li>
          <li>
           <a href="#2_254" rel="nofollow">
            2、个人理解
           </a>
          </li>
         </ul>
        </li>
        <li>
         <a href="#mock_265" rel="nofollow">
          五、mock数据
         </a>
        </li>
        <li>
         <ul>
          <li>
           <a href="#1mock_271" rel="nofollow">
            1、mock组件选择
           </a>
          </li>
          <li>
           <a href="#2mock_283" rel="nofollow">
            2、mock实操
           </a>
          </li>
          <li>
           <ul>
            <li>
             <a href="#1mock_285" rel="nofollow">
              （1）mock函数调用
             </a>
            </li>
            <li>
             <a href="#2mock_303" rel="nofollow">
              （2）mock方法调用
             </a>
            </li>
            <li>
             <a href="#3mock_340" rel="nofollow">
              （3）mock其他包的函数
             </a>
            </li>
            <li>
             <a href="#4mock_350" rel="nofollow">
              （4）mock循环中的函数
             </a>
            </li>
            <li>
             <a href="#5mock_http_365" rel="nofollow">
              （5）mock http调用
             </a>
            </li>
           </ul>
          </li>
          <li>
           <a href="#3mock_426" rel="nofollow">
            3、对于mock的看法
           </a>
          </li>
         </ul>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h3>
     <a id="_1">
     </a>
     一、前言
    </h3>
    <h4>
     <a id="1_3">
     </a>
     1、单测的定位
    </h4>
    <p>
     单测在软件工程中的地位毋庸置疑，它要求工程师必须去主动思考代码的边界，异常处理等等。另一方面，它又是代码最好的说明书，你的函数具体做了什么，输入和输出一目了然。
    </p>
    <p>
     计算机科学家Edsger Dijkstra曾说过：“测试能证明缺陷存在，而无法证明没有缺陷。”再多的测试也不能证明一个程序没有BUG。在最好的情况下，测试可以增强我们的信心：代码在很多重要场景下是可以正常工作的。
    </p>
    <p>
     参考：
     <a href="http://shouce.jb51.net/gopl-zh/ch11/ch11-02.html" rel="nofollow">
      go语言圣经之测试函数
     </a>
    </p>
    <h4>
     <a id="2vscode_11">
     </a>
     2、vscode中生成单测
    </h4>
    <p>
     参考：
     <a href="https://jaycechant.info/2020/rapidly-generate-unit-tests-in-vs-code/" rel="nofollow">
      在 VS Code 快速生成单元测试
     </a>
    </p>
    <p>
     <code>
      vscode
     </code>
     生成单元测试如下，我们需要编写测试用例数组，明确指出来want结果以及wantErr,通过遍历的方式去执行测试用例数组。
    </p>
    <pre><code class="prism language-go"><span class="token keyword">func</span> <span class="token function">TestGenerateStsTokenService</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
	<span class="token keyword">type</span> args <span class="token keyword">struct</span> <span class="token punctuation">{<!-- --></span>
		ctx             context<span class="token punctuation">.</span>Context
		generateStsData <span class="token operator">*</span>dto<span class="token punctuation">.</span>GenerateStsReqParams
	<span class="token punctuation">}</span>
	tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{<!-- --></span>
		name     <span class="token builtin">string</span>
		args     args
		wantResp <span class="token operator">*</span>common<span class="token punctuation">.</span>RESTResp
		wantErr  <span class="token builtin">bool</span>
	<span class="token punctuation">}</span><span class="token punctuation">{<!-- --></span>
		<span class="token punctuation">{<!-- --></span>
			name<span class="token punctuation">:</span> <span class="token string">"测试正常生成sts"</span><span class="token punctuation">,</span>
			args<span class="token punctuation">:</span> args<span class="token punctuation">{<!-- --></span>
				ctx<span class="token punctuation">:</span> context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				generateStsData<span class="token punctuation">:</span> <span class="token operator">&amp;</span>dto<span class="token punctuation">.</span>GenerateStsReqParams<span class="token punctuation">{<!-- --></span>
					SessionName<span class="token punctuation">:</span> <span class="token string">"webApp"</span><span class="token punctuation">,</span>
					AuthParams<span class="token punctuation">:</span>  <span class="token operator">&amp;</span>dto<span class="token punctuation">.</span>AuthParamsData<span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			wantResp<span class="token punctuation">:</span> <span class="token operator">&amp;</span>common<span class="token punctuation">.</span>RESTResp<span class="token punctuation">{<!-- --></span>
				Code<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				Data<span class="token punctuation">:</span> <span class="token operator">&amp;</span>dto<span class="token punctuation">.</span>OssStsRespData<span class="token punctuation">{<!-- --></span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			wantErr<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{<!-- --></span>
			name<span class="token punctuation">:</span> <span class="token string">"测试异常生成sts"</span><span class="token punctuation">,</span>
			args<span class="token punctuation">:</span> args<span class="token punctuation">{<!-- --></span>
				ctx<span class="token punctuation">:</span> context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				generateStsData<span class="token punctuation">:</span> <span class="token operator">&amp;</span>dto<span class="token punctuation">.</span>GenerateStsReqParams<span class="token punctuation">{<!-- --></span>
					SessionName<span class="token punctuation">:</span> <span class="token string">"liteApp"</span><span class="token punctuation">,</span>
					AuthParams<span class="token punctuation">:</span>  <span class="token operator">&amp;</span>dto<span class="token punctuation">.</span>AuthParamsData<span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			wantResp<span class="token punctuation">:</span> <span class="token operator">&amp;</span>common<span class="token punctuation">.</span>RESTResp<span class="token punctuation">{<!-- --></span>
				Code<span class="token punctuation">:</span> <span class="token number">20003</span><span class="token punctuation">,</span>
				Data<span class="token punctuation">:</span> <span class="token keyword">interface</span><span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			wantErr<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{<!-- --></span>
		t<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
 
			gotResp<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">GenerateStsTokenService</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>args<span class="token punctuation">.</span>ctx<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>args<span class="token punctuation">.</span>generateStsData<span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token operator">!=</span> tt<span class="token punctuation">.</span>wantErr <span class="token punctuation">{<!-- --></span>
				t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"GenerateStsTokenService() error = %v, wantErr %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>wantErr<span class="token punctuation">)</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>reflect<span class="token punctuation">.</span><span class="token function">DeepEqual</span><span class="token punctuation">(</span>gotResp<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>wantResp<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
				t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"GenerateStsTokenService() = %v, want %v"</span><span class="token punctuation">,</span> gotResp<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>wantResp<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <h3>
     <a id="case_75">
     </a>
     二、构造测试case的注意事项
    </h3>
    <h4>
     <a id="1_77">
     </a>
     1、项目初始化
    </h4>
    <pre><code class="prism language-go"><span class="token comment">// TestMain会在执行其他测试用例的时候，自动执行</span>
<span class="token keyword">func</span> <span class="token function">TestMain</span><span class="token punctuation">(</span>m <span class="token operator">*</span>testing<span class="token punctuation">.</span>M<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//初始化函数</span>
    retCode <span class="token operator">:=</span> m<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 运行单元测试</span>
    <span class="token function">teardown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//后置校验，钩子函数，可不实现</span>
    os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span>retCode<span class="token punctuation">)</span> <span class="token comment">//清理结果</span>
<span class="token punctuation">}</span>
</code></pre>
    <h4>
     <a id="2interface_89">
     </a>
     2、构造空interface{}
    </h4>
    <pre><code class="prism language-go"><span class="token comment">// 直接给Data赋值为nil的话，验证会失败，</span>
<span class="token comment">// 单纯的nil和(*infra.QueryOneMappingCode)(nil)是不一样的</span>
wantResp<span class="token punctuation">:</span> <span class="token operator">&amp;</span>common<span class="token punctuation">.</span>RESTResp<span class="token punctuation">{<!-- --></span>
				Code<span class="token punctuation">:</span>    <span class="token number">0</span><span class="token punctuation">,</span>
				Message<span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
				Data<span class="token punctuation">:</span>    <span class="token punctuation">(</span><span class="token operator">*</span>infra<span class="token punctuation">.</span>QueryOneMappingCode<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// 数组类型的空</span>
<span class="token comment">// []dto.OneMappingCode{}也会验证失败</span>
wantRes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>dto<span class="token punctuation">.</span><span class="token function">OneMappingCode</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre>
    <h4>
     <a id="3timeTime_105">
     </a>
     3、构造结构体的time.Time类型
    </h4>
    <pre><code class="prism language-go">Data<span class="token punctuation">:</span> <span class="token operator">&amp;</span>infra<span class="token punctuation">.</span>xxx<span class="token punctuation">{<!-- --></span>
					ID<span class="token punctuation">:</span>          <span class="token number">54</span><span class="token punctuation">,</span>
					Code<span class="token punctuation">:</span>        <span class="token string">"338798"</span><span class="token punctuation">,</span>
					TakerUid<span class="token punctuation">:</span>    <span class="token string">""</span><span class="token punctuation">,</span>
					State<span class="token punctuation">:</span>       <span class="token number">1</span><span class="token punctuation">,</span>
					Type<span class="token punctuation">:</span>        <span class="token number">1</span><span class="token punctuation">,</span>
					CreatedAt<span class="token punctuation">:</span> time<span class="token punctuation">.</span><span class="token function">Date</span><span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>June<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Local<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>

也可以直接打印接口的返回，看看CreatedAt返回的是什么，然后构造一下就可以。
t<span class="token punctuation">.</span><span class="token function">Logf</span><span class="token punctuation">(</span><span class="token string">"gotResp:(%#v)"</span><span class="token punctuation">,</span> gotResp<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
</code></pre>
    <h4>
     <a id="4jsontest_case_121">
     </a>
     4、构造json格式的test case
    </h4>
    <pre><code class="prism language-go">wantResp<span class="token punctuation">:</span> <span class="token operator">&amp;</span>common<span class="token punctuation">.</span>RESTResp<span class="token punctuation">{<!-- --></span>
				Code<span class="token punctuation">:</span>    <span class="token number">0</span><span class="token punctuation">,</span>
				Message<span class="token punctuation">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
				Data<span class="token punctuation">:</span> <span class="token string">`{
					"id": 54,
					"code": "338798",
					"creator_uid": "12345",
					"client_appId": "1234",
					"taker_uid": "",
					"state": 1,
					"type": 1,
					"created_at": "2023-06-09T16:32:59+08:00"
				   }`</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre>
    <h3>
     <a id="_141">
     </a>
     三、运行单测文件
    </h3>
    <h4>
     <a id="1_143">
     </a>
     1、整体运行单测文件
    </h4>
    <pre><code class="prism language-go">  cd <span class="token operator">/</span>xxx 单测目录
  <span class="token keyword">go</span> test
  成功输出：
  PASS
  ok
</code></pre>
    <h4>
     <a id="2_153">
     </a>
     2、运行单个单测文件报错
    </h4>
    <p>
     错误提示如下：
    </p>
    <pre><code class="prism language-go"># command<span class="token operator">-</span>line<span class="token operator">-</span>arguments <span class="token punctuation">[</span>command<span class="token operator">-</span>line<span class="token operator">-</span>arguments<span class="token punctuation">.</span>test<span class="token punctuation">]</span>
<span class="token punctuation">.</span><span class="token operator">/</span>base_test<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">26</span><span class="token punctuation">:</span><span class="token number">18</span><span class="token punctuation">:</span> undefined<span class="token punctuation">:</span> Ping
</code></pre>
    <p>
     明明
     <code>
      Ping
     </code>
     函数和单测文件都在同一个包下面，为什么会出现
     <code>
      undefined
     </code>
     呢？
     <code>
      command-line-arguments
     </code>
     是什么？
     <br/>
     答：
    </p>
    <h5>
     <a id="1commandlinearguments_162">
     </a>
     （1）command-line-arguments是什么
    </h5>
    <pre><code class="prism language-go"><span class="token keyword">go</span> test <span class="token punctuation">[</span>flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span> <span class="token punctuation">[</span>build flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span>
命令行参数中指定的每个包或文件都将被视为一个要进行测试的包。而 <span class="token string">"command-line-arguments"</span> 
这个标识符就是用来表示上述情况中命令行参数中指定的文件。

这样可以使 <span class="token keyword">go</span> test 命令将指定的文件作为单独的包进行处理，并执行其中的测试函数。
</code></pre>
    <h5>
     <a id="2undefined_172">
     </a>
     （2）undefined发生原因
    </h5>
    <p>
     错误提示build失败，也就是说我们需要把单测文件依赖的文件也传入进去。比如我这里单测base_test.go文件，则需要把base.go也写到命令行参数中。
     <br/>
     具体参考：
     <a href="https://www.cnblogs.com/Detector/p/10010292.html" rel="nofollow">
      【Golang】解决Go test执行单个测试文件提示未定义问题
     </a>
    </p>
    <pre><code class="prism language-go"><span class="token keyword">go</span> test <span class="token punctuation">.</span><span class="token operator">/</span>base<span class="token punctuation">.</span><span class="token keyword">go</span> <span class="token punctuation">.</span><span class="token operator">/</span>base_test<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre>
    <h5>
     <a id="3panic_179">
     </a>
     （3）缺少初始化导致的发生panic
    </h5>
    <p>
     一般来说我们在一个package下，定义一个TestMain()函数就可以了，进行代码的初始化。但是当我们需要运行单个测试文件的时候，有可能这个测试文件里面恰好没有TestMain()了咋整。
    </p>
    <pre><code class="prism language-go">api_test<span class="token punctuation">.</span><span class="token keyword">go</span>
	<span class="token function">TestMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
base_test<span class="token punctuation">.</span><span class="token keyword">go</span> <span class="token comment">// 没有TestMain()函数</span>

<span class="token comment">// 解决方案</span>
<span class="token number">1</span>、初始化代码放到<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>函数中
<span class="token number">2</span>、<span class="token keyword">go</span>命令行
<span class="token keyword">go</span> test <span class="token punctuation">.</span><span class="token operator">/</span>base<span class="token punctuation">.</span><span class="token keyword">go</span> <span class="token punctuation">.</span><span class="token operator">/</span>base_test<span class="token punctuation">.</span><span class="token keyword">go</span> <span class="token punctuation">.</span><span class="token operator">/</span>api_test<span class="token punctuation">.</span><span class="token keyword">go</span> <span class="token punctuation">.</span><span class="token operator">/</span>api<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token number">3</span>、只想运行base_test<span class="token punctuation">.</span><span class="token keyword">go</span>怎么办
	base_test<span class="token punctuation">.</span><span class="token keyword">go</span>中加上自己的<span class="token function">setuoBase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
    <h4>
     <a id="3_195">
     </a>
     3、查看单测覆盖率
    </h4>
    <pre><code class="prism language-go"><span class="token keyword">go</span> test <span class="token operator">-</span>cover
	coverage<span class="token punctuation">:</span> <span class="token number">80.4</span><span class="token operator">%</span> of statements
</code></pre>
    <h4>
     <a id="4_202">
     </a>
     4、单测覆盖文件解读
    </h4>
    <pre><code class="prism language-go"><span class="token keyword">go</span> test <span class="token operator">-</span>coverprofile<span class="token operator">=</span>coverage<span class="token punctuation">.</span>out

<span class="token comment">// 打开单测覆盖率文件</span>
mode<span class="token punctuation">:</span> set
base<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">10.118</span><span class="token punctuation">,</span><span class="token number">14.23</span> <span class="token number">3</span> <span class="token number">1</span>
base<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">14.23</span><span class="token punctuation">,</span><span class="token number">17.3</span> <span class="token number">2</span> <span class="token number">1</span>

	解释如下：
	<span class="token number">10.118</span><span class="token punctuation">,</span><span class="token number">14.23</span> <span class="token number">3</span> <span class="token number">1</span> 表示第 <span class="token number">10</span> 行到第 <span class="token number">14</span> 行代码被测试覆盖到了，且覆盖
	率为 <span class="token number">3</span><span class="token operator">/</span><span class="token number">1</span> <span class="token punctuation">(</span>即 <span class="token number">300</span><span class="token operator">%</span><span class="token punctuation">)</span>。这是因为第 <span class="token number">10</span> 行至少执行了一次，如果执行了三次，则覆盖率为 <span class="token number">300</span><span class="token operator">%</span>。
	<span class="token number">14.23</span><span class="token punctuation">,</span><span class="token number">17.3</span> <span class="token number">2</span> <span class="token number">1</span> 表示第 <span class="token number">14</span> 行到第 <span class="token number">17</span> 行代码被测试覆盖到了，且覆盖率为 <span class="token number">2</span><span class="token operator">/</span><span class="token number">1</span> <span class="token punctuation">(</span>即 <span class="token number">200</span><span class="token operator">%</span><span class="token punctuation">)</span>。
</code></pre>
    <h4>
     <a id="5_217">
     </a>
     5、生成可被浏览器打开的单测文件
    </h4>
    <pre><code class="prism language-go"><span class="token keyword">go</span> test <span class="token operator">-</span>coverprofile<span class="token operator">=</span>coverage<span class="token punctuation">.</span>out
<span class="token keyword">go</span> tool cover <span class="token operator">-</span>html<span class="token operator">=</span>coverage<span class="token punctuation">.</span>out <span class="token operator">-</span>o coverage<span class="token punctuation">.</span>html
</code></pre>
    <p>
     绿色代表被覆盖到的代码，红色代表没有被覆盖到的代码。
     <br/>
     左上角是运行单测命令目录下，所有go文件的覆盖率。
     <br/>
     可以考虑新增单测case来覆盖到这部分红色。
     <br/>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/27237e079e641c9187d16384adf25a3f.png"/>
    </p>
    <h4>
     <a id="6_228">
     </a>
     6、单测覆盖率的问题
    </h4>
    <p>
     覆盖率为
     <code>
      100%
     </code>
     表示测试用例覆盖了所有的可能执行路径，即程序的所有功能都被覆盖到了。而覆盖率高于
     <code>
      100%
     </code>
     则表示相同的代码路径被多次测试或某些代码行在被测试期间被执行了多次。
    </p>
    <p>
     但是单测
     <code>
      100%并
     </code>
     不能保证没有
     <code>
      bug
     </code>
     ，只能保证写出来的代码没问题，但逻辑或者业务上的漏洞是检测不到的。
    </p>
    <p>
     博主在滴滴的组是建议单测覆盖率
     <code>
      50%
     </code>
     以上，其他朋友的公司要求核心接口必须有单测，整体单测覆盖率
     <code>
      30%
     </code>
     以上。有需要的可以参考下。
    </p>
    <h3>
     <a id="_236">
     </a>
     四、关于单测粒度的问题
    </h3>
    <p>
     写单测的时候，总会疑问到底要写的多细呢？特别是原来项目没有单测的时候，补单测的代码比业务逻辑代码还多。。。
     <br/>
     本例中，目录结构如下：
    </p>
    <pre><code class="prism language-go">domain<span class="token punctuation">:</span>
	base<span class="token punctuation">.</span><span class="token keyword">go</span>
	code<span class="token punctuation">.</span><span class="token keyword">go</span>
	code_test<span class="token punctuation">.</span><span class="token keyword">go</span>
	util<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre>
    <p>
     <code>
      code.go
     </code>
     会调用
     <code>
      base.go
     </code>
     和
     <code>
      util.go
     </code>
     的函数，运行
     <code>
      code_test.go
     </code>
     发现单测覆盖率
     <br/>
     已经
     <code>
      80%
     </code>
     了，是不是意味着只需要写个
     <code>
      code_test.go
     </code>
     就可以了呢？
    </p>
    <h4>
     <a id="1chatgpt_251">
     </a>
     1、chatgpt的回答
    </h4>
    <p>
     实际上不是的，
     <code>
      base.go
     </code>
     和
     <code>
      util.go
     </code>
     后续还可能被其他的文件使用，我们写单测的时候，应该尽量覆盖所有的异常情况，也就是程序的边界问题。因此
     <code>
      base.go
     </code>
     和
     <code>
      util.go
     </code>
     也需要做对应的单测，这样才能得到高质量的代码。
    </p>
    <h4>
     <a id="2_254">
     </a>
     2、个人理解
    </h4>
    <p>
     单个
     <code>
      code_test.go
     </code>
     文件导致的问题是下层函数不
     <code>
      mock
     </code>
     ，可能会影响到实际的数据，导致单测只能运行一次，而不能一直
     <code>
      PASS
     </code>
     。其次是代码流程变长导致单测
     <code>
      case
     </code>
     越写越多，接近集成测试了，这不是我们单测的目标。
    </p>
    <p>
     把
     <code>
      code_test.go
     </code>
     中关于
     <code>
      base.go
     </code>
     和
     <code>
      util.go
     </code>
     的函数都给
     <code>
      mock
     </code>
     掉，发现单测覆盖率只有
     <code>
      37%
     </code>
     ，且测试路径比较短。还需要分别写
     <code>
      base_test.go
     </code>
     和util_test.go，写完
     <code>
      util_test.go
     </code>
     单测覆盖率立马
     <code>
      82%
     </code>
     。
    </p>
    <p>
     拆分的粒度变细，更加关注每个函数的输入和输出。特别是当修改某个函数的时候，只需要使用对应的单测来进行验证，而不需要从入口处进行测试。毕竟单元测试不是集成测试。
    </p>
    <p>
     参考：
     <br/>
     <a href="https://www.infoq.cn/article/3o9mnjlsejkfifvbmrrn" rel="nofollow">
      Golang 单元测试：有哪些误区和实践？
     </a>
     <br/>
     <a href="https://studygolang.com/articles/33535" rel="nofollow">
      Go的单元测试技巧
     </a>
    </p>
    <h3>
     <a id="mock_265">
     </a>
     五、mock数据
    </h3>
    <p>
     在写单测的时候，程序难免会出现各种跨文件的函数调用，以及操作第三方中间件或者上下游交互的情况，这个时候
     <code>
      mock
     </code>
     就显得尤为重要。
    </p>
    <p>
     想象下，没有
     <code>
      mock
     </code>
     的时候，我们运行单测可能就会写入一次数据库？或者对下游发起一次请求？这样的单测，怕是只能运行一次哟。
     <code>
      mock
     </code>
     的出现让我们关注代码的实现细节，不会担心会造成数据污染或者单测只能运行一遍就GG的情况。
    </p>
    <h4>
     <a id="1mock_271">
     </a>
     1、mock组件选择
    </h4>
    <p>
     参考：
     <a href="https://blog.csdn.net/u011142688/article/details/125819979">
      如何做好单元测试？Golang Mock”三剑客“ gomock、monkey、sqlmock
     </a>
     <br/>
     <a href="https://zhuanlan.zhihu.com/p/613023607" rel="nofollow">
      GO进阶单元测试
     </a>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9dc60b91d817769520660f1e64868193.png"/>
    </p>
    <p>
     博主这里更喜欢无侵入的
     <code>
      mock
     </code>
     ，直接一把梭。可惜
     <code>
      monkey
     </code>
     已经不更新了，现在都是用
     <code>
      gomonkey
     </code>
     ,国人大佬开发的
    </p>
    <p>
     <a href="https://github.com/agiledragon/gomonkey">
      gomonkey 项目库
     </a>
     <br/>
     <a href="https://juejin.cn/post/7133520098123317256#heading-6" rel="nofollow">
      解析 Golang 测试（8）- gomonkey 实战
     </a>
    </p>
    <h4>
     <a id="2mock_283">
     </a>
     2、mock实操
    </h4>
    <h5>
     <a id="1mock_285">
     </a>
     （1）mock函数调用
    </h5>
    <p>
     函数中存在大量的封装调用，比如
     <code>
      A-&gt;B
     </code>
     ，
     <code>
      A-&gt;C
     </code>
     这种，因此自由
     <code>
      mock B
     </code>
     和
     <code>
      C
     </code>
     函数对我们的单元测试来说还是很重要的。
    </p>
    <pre><code class="prism language-go">patches <span class="token operator">:=</span> gomonkey<span class="token punctuation">.</span><span class="token function">ApplyFunc</span><span class="token punctuation">(</span>queryOneMappCode<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> code <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>infra<span class="token punctuation">.</span>QueryOneMappingCode<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
				<span class="token comment">// 参数大于6则返回空</span>
				<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">6</span> <span class="token punctuation">{<!-- --></span>
					<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">return</span> <span class="token operator">&amp;</span>infra<span class="token punctuation">.</span>QueryOneMappingCode<span class="token punctuation">{<!-- --></span>
					ID<span class="token punctuation">:</span>          <span class="token number">54</span><span class="token punctuation">,</span>
					Code<span class="token punctuation">:</span>        <span class="token string">"338798"</span><span class="token punctuation">,</span>
					CreatedAt<span class="token punctuation">:</span>   time<span class="token punctuation">.</span><span class="token function">Date</span><span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>June<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Local<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token keyword">defer</span> patches<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
    <h5>
     <a id="2mock_303">
     </a>
     （2）mock方法调用
    </h5>
    <pre><code class="prism language-go"><span class="token number">1</span>、实例化接口
<span class="token keyword">var</span> mockProvider <span class="token operator">=</span> provider<span class="token punctuation">.</span>Test
<span class="token comment">// 接口如下</span>
<span class="token keyword">type</span> TestDbProvider <span class="token keyword">interface</span> <span class="token punctuation">{<!-- --></span>
	<span class="token function">SetDb</span><span class="token punctuation">(</span>db <span class="token operator">*</span>sqlx<span class="token punctuation">.</span>DB<span class="token punctuation">)</span>
	<span class="token function">GetOne</span><span class="token punctuation">(</span>dest <span class="token keyword">interface</span><span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span><span class="token punctuation">,</span> sql <span class="token builtin">string</span><span class="token punctuation">,</span> args <span class="token keyword">interface</span><span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>resp <span class="token operator">*</span>infra<span class="token punctuation">.</span>QueryOneMappingCode<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token number">2</span>、mock对应的查询方法
<span class="token comment">// 注意，第一个参数不能是指针，不然mock会失效</span>
<span class="token comment">// 例如 var oss_bucket_obj *oss.Bucket ，传入target为: *oss_bucket_obj</span>
<span class="token comment">// 传地址会报错</span>
patches <span class="token operator">:=</span> gomonkey<span class="token punctuation">.</span><span class="token function">ApplyMethodFunc</span><span class="token punctuation">(</span>mockProvider<span class="token punctuation">,</span> <span class="token string">"GetOne"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>dest <span class="token keyword">interface</span><span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span><span class="token punctuation">,</span> sql <span class="token builtin">string</span><span class="token punctuation">,</span> args <span class="token keyword">interface</span><span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>resp <span class="token operator">*</span>infra<span class="token punctuation">.</span>QueryOneMappingCode<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
				code <span class="token operator">:=</span> args<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
				<span class="token keyword">if</span> code <span class="token operator">==</span> <span class="token string">"123456"</span> <span class="token punctuation">{<!-- --></span>
					<span class="token keyword">return</span> <span class="token operator">&amp;</span>infra<span class="token punctuation">.</span>QueryOneMappingCode<span class="token punctuation">{<!-- --></span>
						ID<span class="token punctuation">:</span>          <span class="token number">1</span><span class="token punctuation">,</span>
						Code<span class="token punctuation">:</span>        <span class="token string">"123456"</span><span class="token punctuation">,</span>
						CreatedAt<span class="token punctuation">:</span>   time<span class="token punctuation">.</span><span class="token function">Date</span><span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>June<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Local<span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> code <span class="token operator">==</span> <span class="token string">"456789"</span> <span class="token punctuation">{<!-- --></span>
					<span class="token keyword">return</span> <span class="token operator">&amp;</span>infra<span class="token punctuation">.</span>QueryOneMappingCode<span class="token punctuation">{<!-- --></span>
						ID<span class="token punctuation">:</span>          <span class="token number">1</span><span class="token punctuation">,</span>
						Code<span class="token punctuation">:</span>        <span class="token string">"456789"</span><span class="token punctuation">,</span>
						CreatedAt<span class="token punctuation">:</span>   time<span class="token punctuation">.</span><span class="token function">Date</span><span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>June<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Local<span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
					<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token keyword">defer</span> patches<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
    <h5>
     <a id="3mock_340">
     </a>
     （3）mock其他包的函数
    </h5>
    <p>
     在
     <code>
      xx_test
     </code>
     文件中直接引用其他包即可。一般
     <code>
      xx_test.go
     </code>
     和
     <code>
      xx.go
     </code>
     在同一个包下，所以也不用担心出现循环引用的问题。
    </p>
    <pre><code class="prism language-go">patches <span class="token operator">:=</span> gomonkey<span class="token punctuation">.</span><span class="token function">ApplyFunc</span><span class="token punctuation">(</span>util<span class="token punctuation">.</span>GenerateRandomCode<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>numDigits <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{<!-- --></span>
				<span class="token keyword">return</span> <span class="token string">"123456"</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token keyword">defer</span> patches<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
    <h5>
     <a id="4mock_350">
     </a>
     （4）mock循环中的函数
    </h5>
    <p>
     比如在A函数中，循环3次调用了B函数，那么mock如下：
    </p>
    <pre><code class="prism language-go">createA <span class="token operator">:=</span> <span class="token operator">&amp;</span>infra<span class="token punctuation">.</span>CreateMappingCode<span class="token punctuation">{<!-- --></span>Code<span class="token punctuation">:</span> <span class="token string">"933903"</span><span class="token punctuation">}</span>
			createB <span class="token operator">:=</span> <span class="token operator">&amp;</span>infra<span class="token punctuation">.</span>CreateMappingCode<span class="token punctuation">{<!-- --></span>Code<span class="token punctuation">:</span> <span class="token string">"601690"</span><span class="token punctuation">}</span>
			createC <span class="token operator">:=</span> <span class="token operator">&amp;</span>infra<span class="token punctuation">.</span>CreateMappingCode<span class="token punctuation">{<!-- --></span>Code<span class="token punctuation">:</span> <span class="token string">"798493"</span><span class="token punctuation">}</span>
			p <span class="token operator">:=</span> gomonkey<span class="token punctuation">.</span><span class="token function">ApplyFuncSeq</span><span class="token punctuation">(</span>structureMappingCodeRecord<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>gomonkey<span class="token punctuation">.</span>OutputCell<span class="token punctuation">{<!-- --></span>
				<span class="token punctuation">{<!-- --></span>Values<span class="token punctuation">:</span> gomonkey<span class="token punctuation">.</span>Params<span class="token punctuation">{<!-- --></span>createA<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{<!-- --></span>Values<span class="token punctuation">:</span> gomonkey<span class="token punctuation">.</span>Params<span class="token punctuation">{<!-- --></span>createB<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{<!-- --></span>Values<span class="token punctuation">:</span> gomonkey<span class="token punctuation">.</span>Params<span class="token punctuation">{<!-- --></span>createC<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token keyword">defer</span> p<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 恢复原始函数</span>
</code></pre>
    <h5>
     <a id="5mock_http_365">
     </a>
     （5）mock http调用
    </h5>
    <pre><code class="prism language-go"><span class="token comment">// vscode自动生成的test代码</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{<!-- --></span>
		t<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
			<span class="token comment">// mock httptest</span>
			ts <span class="token operator">:=</span> httptest<span class="token punctuation">.</span><span class="token function">NewServer</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">HandlerFunc</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
				<span class="token keyword">if</span> r<span class="token punctuation">.</span>Method <span class="token operator">!=</span> http<span class="token punctuation">.</span>MethodGet <span class="token punctuation">{<!-- --></span>
					w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusNotFound<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
				<span class="token comment">// 构造返回参数</span>
				w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">)</span>
				<span class="token comment">// 获取POST请求的参数，根据参数返回不同的响应</span>
				bodyBytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> io<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
				<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{<!-- --></span>
					<span class="token comment">// 处理错误</span>
					w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
				<span class="token comment">// 获取post参数</span>
				params <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>dto<span class="token punctuation">.</span>GenerateStsReqParams<span class="token punctuation">)</span>
				json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>bodyBytes<span class="token punctuation">,</span> params<span class="token punctuation">)</span>
				<span class="token comment">// 根据传递的参数返回不同的响应</span>
				res <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>common<span class="token punctuation">.</span>RESTResp<span class="token punctuation">)</span>
				<span class="token keyword">if</span> params<span class="token punctuation">.</span>SessionName <span class="token operator">==</span> <span class="token string">"webApp"</span> <span class="token punctuation">{<!-- --></span>
					res <span class="token operator">=</span> <span class="token operator">&amp;</span>common<span class="token punctuation">.</span>RESTResp<span class="token punctuation">{<!-- --></span>
						Code<span class="token punctuation">:</span>    <span class="token number">0</span><span class="token punctuation">,</span>
						Message<span class="token punctuation">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
						Data<span class="token punctuation">:</span> <span class="token operator">&amp;</span>dto<span class="token punctuation">.</span>OssStsRespData<span class="token punctuation">{<!-- --></span>
							Region<span class="token punctuation">:</span>          <span class="token string">"hangzhou"</span><span class="token punctuation">,</span>
							Bucket<span class="token punctuation">:</span>          <span class="token string">"test"</span><span class="token punctuation">,</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{<!-- --></span>
					res <span class="token operator">=</span> <span class="token operator">&amp;</span>common<span class="token punctuation">.</span>RESTResp<span class="token punctuation">{<!-- --></span>
						Code<span class="token punctuation">:</span>    <span class="token number">1</span><span class="token punctuation">,</span>
						Message<span class="token punctuation">:</span> <span class="token string">"failed"</span><span class="token punctuation">,</span>
						Data<span class="token punctuation">:</span>    <span class="token operator">&amp;</span>dto<span class="token punctuation">.</span>OssStsRespData<span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
				<span class="token comment">// 模拟接口的返回，http接口返回是字节数据，因此需要json.Marshal</span>
				jsonStr<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
				w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">defer</span> ts<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token comment">// 替换原来的url为mock的url</span>
			GenerateOssStsUrl <span class="token operator">=</span> ts<span class="token punctuation">.</span>URL
    	<span class="token comment">// 发起请求，请求中的http会被mock掉</span>
			gotResp<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">GenerateStsTokenService</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>args<span class="token punctuation">.</span>ctx<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>args<span class="token punctuation">.</span>generateStsData<span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token operator">!=</span> tt<span class="token punctuation">.</span>wantErr <span class="token punctuation">{<!-- --></span>
				t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"GenerateStsTokenService() error = %v, wantErr %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>wantErr<span class="token punctuation">)</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			t<span class="token punctuation">.</span><span class="token function">Logf</span><span class="token punctuation">(</span><span class="token string">"gotResp:(%#v) ,wantResp:(%#v)"</span><span class="token punctuation">,</span> gotResp<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>wantResp<span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>reflect<span class="token punctuation">.</span><span class="token function">DeepEqual</span><span class="token punctuation">(</span>gotResp<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>wantResp<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
				t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"GenerateStsTokenService() = %v, want %v"</span><span class="token punctuation">,</span> gotResp<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>wantResp<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre>
    <h4>
     <a id="3mock_426">
     </a>
     3、对于mock的看法
    </h4>
    <p>
     对于
     <code>
      mock
     </code>
     ，有以下两种态度
    </p>
    <pre><code class="prism language-go">一方的人主张不要滥用mock，能不mock就不mock。被测单元也不一定是具体的一个
函数，可能是多个函数本来就应该串起来，必要的时候再mock。

一方则主张将被测函数所有调用的外面函数全部mock掉，只关注被测函数自己的
一行行代码，只要调用其他函数，全都mock掉，用假数据来测试。
</code></pre>
    <p>
     本来处于懒惰和少写单测的角度，我是支持第一种方式的。
    </p>
    <pre><code class="prism language-go">例如：
单测函数：A函数
内部逻辑：
	A<span class="token operator">-</span><span class="token operator">&gt;</span>B <span class="token punctuation">:</span> B函数全是业务逻辑
	A<span class="token operator">-</span><span class="token operator">&gt;</span>C <span class="token punctuation">:</span> C函数包括mysql或者redis操作
	A<span class="token operator">-</span><span class="token operator">&gt;</span>D<span class="token operator">-</span><span class="token operator">&gt;</span>E<span class="token punctuation">:</span> D函数纯业务逻辑，构造请求参数。E函数对外发起http请求
</code></pre>
    <p>
     第一种方式是只
     <code>
      mock C
     </code>
     和
     <code>
      E
     </code>
     函数，测试
     <code>
      A
     </code>
     函数的时候，会把
     <code>
      B
     </code>
     和
     <code>
      D
     </code>
     也测试到。主打一个省事快捷。
    </p>
    <p>
     直到我遇到了更复杂的场景，
     <code>
      B
     </code>
     里面还有
     <code>
      B1
     </code>
     和
     <code>
      B2
     </code>
     函数，
     <code>
      D
     </code>
     里面有
     <code>
      D1
     </code>
     和
     <code>
      D2
     </code>
     函数，逻辑非常复杂的情况下，第一种方式就变成了集成测试。单测用例慢慢变成了测试用例。 比如只修改
     <code>
      D2
     </code>
     函数的情况下，要修改和通过单测
     <code>
      A
     </code>
     进行测试。。。。
    </p>
    <p>
     第二种方式，就是在每一层都
     <code>
      mock
     </code>
     掉外部调用。单测
     <code>
      A
     </code>
     就只关注
     <code>
      A
     </code>
     的逻辑，
     <code>
      mock
     </code>
     掉
     <code>
      B,C,D,E
     </code>
     ，只关注
     <code>
      B,C,D,E
     </code>
     输出是正确或者错误的情况。
     <br/>
     针对
     <code>
      B,C,D,E
     </code>
     函数又有自己的单测函数，充分覆盖掉。这样当修改
     <code>
      D2
     </code>
     函数的时候，只需要修改和通过
     <code>
      D2
     </code>
     的单测即可。
    </p>
    <p>
     对于外部依赖，比如第三方库
     <code>
      mysql,redis,mq
     </code>
     这种统一进行
     <code>
      mock
     </code>
     。 对于内部的函数调用，建议是粒度细一些，
     <code>
      A_test.go
     </code>
     就只对
     <code>
      A.go
     </code>
     里面的逻辑负责。至于调用
     <code>
      B.go
     </code>
     的部分，就交给
     <code>
      B_test.go
     </code>
     吧。
    </p>
    <p>
     <strong>
      end
     </strong>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470:733a2f2f626c6f672e6373646e2e6e65742f4c4a465048502f:61727469636c652f64657461696c732f313331373432313538</p>

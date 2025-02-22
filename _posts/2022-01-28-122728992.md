---
layout: post
title: 前端数据请求方式总结前端数据请求方式,原生JS发送请求,-axios,-jQuery-AJAX,同源策略,跨域
date: 2022-01-28 11:39:08 +0800
categories: [前端方法的总结及记录，归纳]
tags: [前端,javascript,ajax]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=122728992
    alt: 前端数据请求方式总结前端数据请求方式,原生JS发送请求,-axios,-jQuery-AJAX,同源策略,跨域
artid: 122728992
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     前端数据请求方式总结（前端数据请求方式，原生JS发送请求， axios， jQuery AJAX，同源策略，跨域）
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-dracula" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <h2>
     <a id="_1">
     </a>
     前端数据请求方式总结
    </h2>
    <h3>
     <a id="1__2">
     </a>
     1. 前端数据请求方式
    </h3>
    <table>
     <thead>
      <tr>
       <th>
        发请求方式
       </th>
       <th>
        请求方法
       </th>
       <th>
        缺陷
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        form
       </td>
       <td>
        GET、POST
       </td>
       <td>
        刷新页面或新开页面
       </td>
      </tr>
      <tr>
       <td>
        a
       </td>
       <td>
        GET
       </td>
       <td>
        刷新页面或新开页面
       </td>
      </tr>
      <tr>
       <td>
        img
       </td>
       <td>
        GET
       </td>
       <td>
        以图片展示，需要加载一张图片
       </td>
      </tr>
      <tr>
       <td>
        link
       </td>
       <td>
        GET
       </td>
       <td>
        以CSS、favicon形式展示
       </td>
      </tr>
      <tr>
       <td>
        script
       </td>
       <td>
        GET
       </td>
       <td>
        只能以JS脚本运行，JSONP原理
       </td>
      </tr>
     </tbody>
    </table>
    <ol>
     <li>
      <code>
       &lt;form&gt;
      </code>
      使用 form 表单的
      <code>
       action
      </code>
      向指定 url 发请求，会刷新页面或新开页面。
     </li>
     <li>
      <code>
       &lt;a&gt;
      </code>
      使用
      <code>
       &lt;a&gt;
      </code>
      标签的
      <code>
       href
      </code>
      属性发__GET__请求，会刷新页面或新开页面。
     </li>
     <li>
      <code>
       &lt;img&gt;
      </code>
      使用
      <code>
       &lt;img&gt;
      </code>
      标签的
      <code>
       src
      </code>
      属性发__GET__请求，只能以图片形式展示。
     </li>
     <li>
      <code>
       &lt;link&gt;
      </code>
      使用
      <code>
       &lt;link&gt;
      </code>
      标签的
      <code>
       href
      </code>
      属性发__GET__请求，只能以CSS、favicon 的形式展示
     </li>
     <li>
      <code>
       &lt;script&gt;
      </code>
      使用
      <code>
       &lt;script&gt;
      </code>
      标签的
      <code>
       src
      </code>
      属性发__GET__请求，只能以脚本形式运行，JSONP
     </li>
    </ol>
    <h3>
     <a id="2_JS_17">
     </a>
     2. 原生JS发送请求
    </h3>
    <h4>
     <a id="21_XMLHttpRequest__18">
     </a>
     2.1 XMLHttpRequest 对象
    </h4>
    <p>
     重点：
     <strong>
      XMLHttpRequest 对象用来在浏览器和服务器之间进行数据传输
     </strong>
    </p>
    <p>
     使用 XMLHttpRequest 对象，首先需要生成一个实例。
    </p>
    <pre><code class="prism language-js">    <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
    <h5>
     <a id="1_requestopenmethodurlasync_26">
     </a>
     1. request.open(method,url,async)用来开启数据传输通路
    </h5>
    <p>
     三个参数分别对应：
    </p>
    <ul>
     <li>
      method：请求的方法，可以是GET、PPST、PUT、DELETE等
     </li>
     <li>
      url：请求的路径
     </li>
     <li>
      async：是否异步，默认为true，就是异步。false 为同步，可能造成浏览器阻塞。
     </li>
    </ul>
    <h5>
     <a id="2_requestsend_31">
     </a>
     2. request.send()
    </h5>
    <p>
     request.send()用来向请求路径发送数据。当请求有数据发送时，参数为所发送的数据。
    </p>
    <p>
     同步请求会等全部响应完毕再返回，异步请求直接返回该方法。
    </p>
    <h5>
     <a id="3_readyState_35">
     </a>
     3. readyState属性
    </h5>
    <p>
     readyState属性返回一个 XMLHttpRequest 代理当前所处的状态。
    </p>
    <table>
     <thead>
      <tr>
       <th>
        值
       </th>
       <th>
        状态
       </th>
       <th>
        描述
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        0
       </td>
       <td>
        UNSENT
       </td>
       <td>
        代理被创建，但尚未调用 open() 方法。
       </td>
      </tr>
      <tr>
       <td>
        1
       </td>
       <td>
        OPENED
       </td>
       <td>
        open() 方法已经被调用。
       </td>
      </tr>
      <tr>
       <td>
        2
       </td>
       <td>
        HEADERS_RECEIVED
       </td>
       <td>
        send() 方法已经被调用，并且头部和状态已经可获得。
       </td>
      </tr>
      <tr>
       <td>
        3
       </td>
       <td>
        LOADING
       </td>
       <td>
        下载中； responseText 属性已经包含部分数据。
       </td>
      </tr>
      <tr>
       <td>
        4
       </td>
       <td>
        DONE
       </td>
       <td>
        下载操作已完成。
       </td>
      </tr>
     </tbody>
    </table>
    <h5>
     <a id="4_onreadystatechange_46">
     </a>
     4. onreadystatechange属性
    </h5>
    <p>
     onreadystatechange属性监听 readyState 的值（监听 XMLHttpRequest代理的状态），当值发生变化（状态变化），对不同的状态执行相应的回调函数。
    </p>
    <p>
     <strong>
      以上4个方法/属性就可以完成一个AJAX的请求
     </strong>
    </p>
    <h5>
     <a id="5_requestsetRequestHeader_50">
     </a>
     5. request.setRequestHeader()方法
    </h5>
    <p>
     request.setRequestHeader()方法：在发送请求之前设置请求头，对应http请求的第二部分。
    </p>
    <pre><code class="prism language-js">    request<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span><span class="token string">'x-www-form-urlencoded'</span><span class="token punctuation">)</span>
</code></pre>
    <h5>
     <a id="6_requestresponseText__56">
     </a>
     6. request.responseText 属性
    </h5>
    <p>
     request.responseText 属性就是 AJAX 中后端返回的数据，一般是 JSON 格式的字符串。
    </p>
    <h4>
     <a id="22_xhrGET_59">
     </a>
     2.2 使用xhr发起GET请求
    </h4>
    <p>
     步骤：
    </p>
    <ol>
     <li>
      创建 xhr 对象
     </li>
     <li>
      调用 xhr.open() 函数
     </li>
     <li>
      调用 xhr.send() 函数
     </li>
     <li>
      监听 xhr.onreadystatechange 事件
     </li>
    </ol>
    <pre><code class="prism language-js">    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
      <span class="token comment">// 1. 创建 xhr 对象</span>
      <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//   console.log(xhr);</span>

      <span class="token comment">//   2.监听 xhr.onreadystatechange 事件</span>
      xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 监听 xhr 对象的请求状态 readyState ；与服务器响应的状态 status</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
          <span class="token comment">//打印服务器响应回来的数据</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 3.调用 xhr.open() 函数</span>
      xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token string">'http://www.liulongbin.top:3006/api/getbooks?id=1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 4.调用 xhr.send() 函数</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre>
    <h4>
     <a id="23_xhrPOST_86">
     </a>
     2.3 使用xhr发起POST请求
    </h4>
    <p>
     步骤：
    </p>
    <ol>
     <li>
      创建 xhr 对象
     </li>
     <li>
      调用 xhr.open() 函数
     </li>
     <li>
      设置 Content-Type 属性（固定写法）
     </li>
     <li>
      调用 xhr.send() 函数，同时指定要发送的数据
     </li>
     <li>
      监听 xhr.onreadystatechange 事件
     </li>
    </ol>
    <pre><code class="prism language-js"><span class="token comment">// 1. 创建 xhr 对象</span>
<span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2. 调用 open()</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'http://www.liulongbin.top:3006/api/addbook'</span><span class="token punctuation">)</span>
<span class="token comment">// 3. 设置 Content-Type 属性（固定写法）</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">)</span>
<span class="token comment">// 4. 调用 send()，同时将数据以查询字符串的形式，提交给服务器</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'bookname=水浒传&amp;author=施耐庵&amp;publisher=天津图书出版社'</span><span class="token punctuation">)</span>
<span class="token comment">// 5. 监听 onreadystatechange 事件</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre>
    <h4>
     <a id="24_Ajax_111">
     </a>
     2.4 封装自己的Ajax函数
    </h4>
    <pre><code class="prism language-js">    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
      <span class="token comment">// 封装自己的Ajax函数</span>

      <span class="token comment">// data对象：我们需要把data函数中的对象 转化为字符串对象，从而提交给服务器 因此我们要resloveData函数：</span>
      <span class="token comment">// resloveData()思路先定义一个数组 ；然后循环数组data中的元素，并将元素通过push方法将键值对压进我们新定义的数组中；循环结束后将元素用户&amp;连接</span>
      <span class="token keyword">function</span> <span class="token function">resolveData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
          arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token string">'='</span> <span class="token operator">+</span> data<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token string">'='</span> <span class="token operator">+</span> data<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token function">resolveData</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span> name<span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">function</span> <span class="token function">myAjax</span><span class="token punctuation">(</span><span class="token parameter">optins</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用resolveData()函数并指定一个变量来接收拼接好的字符串</span>
        <span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">resolveData</span><span class="token punctuation">(</span>optins<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// xhr添加监听事件然后获取附属器上的数据</span>
        xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">400</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
            <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
            options<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 判断请求的类型</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">'GET'</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
              <span class="token comment">// 发起get请求</span>
              xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'optioms.URL?s'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">'POST'</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
              <span class="token comment">// 发起post请求</span>
              xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'options.URL'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-type'</span><span class="token punctuation">,</span> <span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre>
    <h3>
     <a id="3_axios_156">
     </a>
     3. axios
    </h3>
    <h4>
     <a id="31_axiosGET_157">
     </a>
     3.1 axios发起GET请求
    </h4>
    <pre><code class="prism language-js">axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'url'</span><span class="token punctuation">,</span> <span class="token punctuation">{<!-- --></span> params<span class="token operator">:</span> <span class="token punctuation">{<!-- --></span> <span class="token comment">/*参数*/</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>
</code></pre>
    <p>
     具体的请求示例如下：
    </p>
    <pre><code class="prism language-js"><span class="token comment">// 请求的 URL 地址</span>
 <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">'http://www.liulongbin.top:3006/api/get'</span>
 <span class="token comment">// 请求的参数对象</span>
 <span class="token keyword">var</span> paramsObj <span class="token operator">=</span> <span class="token punctuation">{<!-- --></span> name<span class="token operator">:</span> <span class="token string">'zs'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span>
 <span class="token comment">// 调用 axios.get() 发起 GET 请求</span>
 axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{<!-- --></span> params<span class="token operator">:</span> paramsObj <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
     <span class="token comment">// res.data 是服务器返回的数据</span>
     <span class="token keyword">var</span> result <span class="token operator">=</span> res<span class="token punctuation">.</span>data
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
    <h4>
     <a id="32_axiosPOST_175">
     </a>
     3.2 axios发起POST请求
    </h4>
    <pre><code class="prism language-js">axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'url'</span><span class="token punctuation">,</span> <span class="token punctuation">{<!-- --></span> <span class="token comment">/*参数*/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>

</code></pre>
    <p>
     具体的请求示例如下：
    </p>
    <pre><code class="prism language-js"><span class="token comment">// 请求的 URL 地址</span>
 <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">'http://www.liulongbin.top:3006/api/post'</span>
 <span class="token comment">// 要提交到服务器的数据</span>
 <span class="token keyword">var</span> dataObj <span class="token operator">=</span> <span class="token punctuation">{<!-- --></span> location<span class="token operator">:</span> <span class="token string">'北京'</span><span class="token punctuation">,</span> address<span class="token operator">:</span> <span class="token string">'顺义'</span> <span class="token punctuation">}</span>
 <span class="token comment">// 调用 axios.post() 发起 POST 请求</span>
 axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> dataObj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
     <span class="token comment">// res.data 是服务器返回的数据</span>
     <span class="token keyword">var</span> result <span class="token operator">=</span> res<span class="token punctuation">.</span>data
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre>
    <h4>
     <a id="33_axios_195">
     </a>
     3.3 直接使用axios发起请求
    </h4>
    <p>
     axios 也提供了类似于 jQuery 中 $.ajax() 的函数，语法如下：
    </p>
    <pre><code class="prism language-js"> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
     method<span class="token operator">:</span> <span class="token string">'请求类型'</span><span class="token punctuation">,</span>
     url<span class="token operator">:</span> <span class="token string">'请求的URL地址'</span><span class="token punctuation">,</span>
     data<span class="token operator">:</span> <span class="token punctuation">{<!-- --></span> <span class="token comment">/* POST数据 */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
     params<span class="token operator">:</span> <span class="token punctuation">{<!-- --></span> <span class="token comment">/* GET参数 */</span> <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>

</code></pre>
    <h5>
     <a id="1_axiosGET_208">
     </a>
     1. 直接使用axios发起GET请求
    </h5>
    <pre><code class="prism language-js"> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
     method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
     url<span class="token operator">:</span> <span class="token string">'http://www.liulongbin.top:3006/api/get'</span><span class="token punctuation">,</span>
     params<span class="token operator">:</span> <span class="token punctuation">{<!-- --></span> <span class="token comment">// GET 参数要通过 params 属性提供</span>
         name<span class="token operator">:</span> <span class="token string">'zs'</span><span class="token punctuation">,</span>
         age<span class="token operator">:</span> <span class="token number">20</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
    <h5>
     <a id="2_axiosPOST_222">
     </a>
     2. 直接使用axios发起POST请求
    </h5>
    <pre><code class="prism language-js"><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
     method<span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
     url<span class="token operator">:</span> <span class="token string">'http://www.liulongbin.top:3006/api/post'</span><span class="token punctuation">,</span>
     data<span class="token operator">:</span> <span class="token punctuation">{<!-- --></span> <span class="token comment">// POST 数据要通过 data 属性提供</span>
         bookname<span class="token operator">:</span> <span class="token string">'程序员的自我修养'</span><span class="token punctuation">,</span>
         price<span class="token operator">:</span> <span class="token number">666</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre>
    <h3>
     <a id="4_jQuery_AJAX_238">
     </a>
     4. jQuery AJAX
    </h3>
    <h4>
     <a id="41_jQuery_AJAXGET_239">
     </a>
     4.1 jQuery AJAX发起GET请求
    </h4>
    <pre><code class="prism language-js"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"/jquery/jquery-1.11.1.min.js"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
    $<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"http://www.liulongbin.top:3006/api/get"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span>status</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"数据："</span> <span class="token operator">+</span> data <span class="token operator">+</span> <span class="token string">"\n状态："</span> <span class="token operator">+</span> status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>向页面发送 <span class="token constant">HTTP</span> <span class="token constant">GET</span> 请求，然后获得返回的结果<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre>
    <h4>
     <a id="42_jQuery_AJAXPOST_262">
     </a>
     4.2 jQuery AJAX发起POST请求
    </h4>
    <pre><code class="prism language-js"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"/jquery/jquery-1.11.1.min.js"</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
    $<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"http://www.liulongbin.top:3006/api/post"</span><span class="token punctuation">,</span>
    <span class="token punctuation">{<!-- --></span>
      name<span class="token operator">:</span><span class="token string">"Donald Duck"</span><span class="token punctuation">,</span>
      city<span class="token operator">:</span><span class="token string">"Duckburg"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span>status</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"数据："</span> <span class="token operator">+</span> data <span class="token operator">+</span> <span class="token string">"\n状态："</span> <span class="token operator">+</span> status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>向页面发送 <span class="token constant">HTTP</span> <span class="token constant">POST</span> 请求，并获得返回的结果<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>

</code></pre>
    <h3>
     <a id="4__293">
     </a>
     4. 同源策略
    </h3>
    <ul>
     <li>
      协议相同
     </li>
     <li>
      域名相同
     </li>
     <li>
      端口相同
      <br/>
      非同源的网站会受到下列限制：
     </li>
     <li>
      Cookie、LocalStorage 和 IndexDB 无法读取。
     </li>
     <li>
      DOM 无法获得
     </li>
     <li>
      AJAX 请求不能发送。(或者是请求发送之后，浏览器识别出不同源，将响应拦截了)
      <br/>
      因为有同源策略的限制，当需要请求外部网站的数据时，就需要跨域。
     </li>
    </ul>
    <h3>
     <a id="5__302">
     </a>
     5. 跨域
    </h3>
    <p>
     由于浏览器同源策略，AJAX 不能访问不同源的资源。这时候，就需要
     <strong>
      跨域
     </strong>
     。
    </p>
    <p>
     关于同源策略现阶段一般用两种方法跨域：
    </p>
    <h4>
     <a id="1_JSONP__306">
     </a>
     1. JSONP 跨域原理
    </h4>
    <p>
     JSONP的最基本的原理是：动态添加一个
     <code>
      &lt;script&gt;
     </code>
     标签，而script标签的src属性是没有跨域的限制的。
    </p>
    <ol>
     <li>
      事先在请求方页面中写定一个 callback 函数，用来获取响应方响应的数据。
     </li>
     <li>
      在请求方页面中动态创建
      <code>
       &lt;script&gt;
      </code>
      标签，通过设置
      <code>
       &lt;script&gt;
      </code>
      标签的
      <code>
       src
      </code>
      属性对
      <code>
       src
      </code>
      指向的网站发起请求。
     </li>
     <li>
      需要将 1 中的 callback 函数名以查询参数的形式写入 2 中
      <code>
       &lt;script&gt;
      </code>
      标签的
      <code>
       src
      </code>
      中，告知后端要执行的回调函数
     </li>
     <li>
      响应方获得请求，返回一段JS代码（该段JS代码执行事先写好的 callback 函数，并将__要返回的数据作为 callback 函数的参数带入请求方__）
     </li>
     <li>
      这时候，请求方就通过 callback 函数获得了请求的数据。
     </li>
    </ol>
    <p>
     在实际使用中，通过两个约定来规范 JSONP 的使用：
    </p>
    <ul>
     <li>
      使用查询参数指明 callback 的函数名，形如
      <code>
       ？callback=函数名
      </code>
     </li>
     <li>
      查询参数中的函数名一般随机生成，使用完毕即删除，保证不污染全局变量。
     </li>
    </ul>
    <p>
     JSOPN跨域请求例子:
    </p>
    <pre><code class="prism language-js"><span class="token keyword">function</span> <span class="token constant">JSONP</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 创建一个 script 标签</span>
        <span class="token keyword">let</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"script"</span><span class="token punctuation">)</span> 
        
        <span class="token comment">// 随机生成回调函数名</span>
        <span class="token keyword">let</span> functionName <span class="token operator">=</span> <span class="token string">'callback'</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100000</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token comment">// 定义回调函数，处理获得的数据</span>
        window<span class="token punctuation">[</span>functionName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取的数据是：'</span><span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> 
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'请求成功。'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 设置JSONP请求路径</span>
        script<span class="token punctuation">.</span>src <span class="token operator">=</span> path <span class="token operator">+</span> <span class="token string">"?callback="</span> <span class="token operator">+</span> functionName
        <span class="token comment">// 将 script 标签插入到页面中</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span>
        <span class="token comment">// 请求完成之后，删除回调函数,节约内存</span>
        <span class="token keyword">delete</span> window<span class="token punctuation">[</span>functionName<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
</code></pre>
    <h4>
     <a id="2_CORSCrossorigin_resource_sharing_341">
     </a>
     2. CORS(Cross-origin resource sharing)跨域资源共享
    </h4>
    <p>
     CORS 是解决跨域数据请求的终极解决方案
    </p>
    <p>
     原理：CORS 跨域的使用方式是在后端代码中设置响应头，将响应资源的响应头设置成请求页面的源（间接使要响应的资源与请求同源）
    </p>
    <pre><code class="prism language-js">response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span> <span class="token string">'发送请求的源地址'</span><span class="token punctuation">)</span>
</code></pre>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



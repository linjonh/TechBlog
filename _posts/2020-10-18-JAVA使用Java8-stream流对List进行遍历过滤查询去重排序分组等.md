---
title: 2020-10-18-JAVA使用Java8-stream流对List进行遍历过滤查询去重排序分组等
date: 2020-10-18 09:55:00 +0800
categories: [Java]
tags: [java,stream,lambda]
image:
  path: https://img-blog.csdnimg.cn/20201018095005385.png?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDIxMzc2,size_16,color_FFFFFF,t_70#pic_center
  alt: JAVA使用Java8-stream流对List进行遍历过滤查询去重排序分组等
artid: 109141670
---
<span class="artid" style="display:none" artid=68747470733a2f2f62:6c6f672e6373646e2e6e65742f71715f34323032313337362f:61727469636c652f64657461696c732f313039313431363730></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     【JAVA】使用Java8 stream流对List进行遍历、过滤、查询、去重、排序、分组等
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-atom-one-dark" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <h3>
     <a id="Java8_streamList_0">
     </a>
     使用Java8 stream流对List进行遍历、过滤、查询、去重、排序等
    </h3>
    <blockquote>
     <p>
      Java8提供了Stream（流）处理集合的关键抽象概念，它可以对集合进行的操作，可以执行非常复杂的查找、过滤和映射数据等操作。
      <br/>
      Stream API 借助于同样新出现的Lambda表达式，极大的提高编程效率和程序可读性
     </p>
    </blockquote>
    <p>
     <strong>
      —下面是使用Stream的常用方法的综合实例—
     </strong>
    </p>
    <p>
     <strong>
      创建Student.class（学生的实体类）
     </strong>
    </p>
    <pre><code class="prism language-java"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @Desc
 * @Date 2020/10/18 9:06
 * @Version JDK 1.8
 **/</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{<!-- --></span>

    <span class="token comment">/**
     * id 主键
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> <span class="token class-name">Id</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * 姓名
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">/**
     * 年龄
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

    <span class="token comment">/**
     * 年级
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> grade<span class="token punctuation">;</span>

    <span class="token comment">/**
     * 班级
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> classNmae<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> grade<span class="token punctuation">,</span> <span class="token class-name">String</span> classNmae<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token class-name">Id</span> <span class="token operator">=</span> id<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>classNmae <span class="token operator">=</span> classNmae<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre>
    <p>
     <strong>
      创建StudentService.class（模拟从数据库获取数据）。
     </strong>
    </p>
    <pre><code class="prism language-java"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @Desc
 * @Date 2020/10/18 9:21
 * @Version JDK 1.8
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentService</span> <span class="token punctuation">{<!-- --></span>

    <span class="token comment">/**
     * 获取List数据
     * @return
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> <span class="token function">getStudentList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{<!-- --></span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"小明"</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token string">"高一"</span><span class="token punctuation">,</span><span class="token string">"3班"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"小李"</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">"高三"</span><span class="token punctuation">,</span><span class="token string">"1班"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"小王"</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token string">"高一"</span><span class="token punctuation">,</span><span class="token string">"2班"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"小徐"</span><span class="token punctuation">,</span><span class="token number">17</span><span class="token punctuation">,</span><span class="token string">"高二"</span><span class="token punctuation">,</span><span class="token string">"4班"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"小马"</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token string">"高三"</span><span class="token punctuation">,</span><span class="token string">"6班"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> studentList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     <strong>
      1.1使用
      <code>
       forEach()
      </code>
      遍历List
     </strong>
    </p>
    <pre><code class="prism language-java"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demoutils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">StudentService</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @Desc
 * @Date 2020/10/18 9:13
 * @Version JDK 1.8
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> test <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 获取 List 数据</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentList <span class="token operator">=</span> <span class="token class-name">StudentService</span><span class="token punctuation">.</span><span class="token function">getStudentList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1.Java8 遍历List</span>
        studentList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out <span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// studentList.forEach(System.out ::println); 等同于 studentList.forEach(student -&gt; {System.out.println(student);});</span>
<span class="token comment">//        studentList.forEach(student -&gt; {System.out.println(student);});</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     <strong>
      1.2遍历结果：
     </strong>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/9f0f0edd59abe4ee071ca37da50643e8.png#pic_center"/>
    </p>
    <p>
     <strong>
      2.1使用 filter() 过滤List数据。
     </strong>
    </p>
    <p>
     获取年级为“高三”的数据
    </p>
    <pre><code class="prism language-java"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demoutils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">StudentService</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token class-name">Collectors</span></span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @Desc
 * @Date 2020/10/18 9:57
 * @Version JDK 1.8
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> test1 <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 获取 List 数据</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentList <span class="token operator">=</span> <span class="token class-name">StudentService</span><span class="token punctuation">.</span><span class="token function">getStudentList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1.使用Java8 遍历List</span>
        studentList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.使用Java8 过滤List</span>
        <span class="token comment">// 获取高三年级的学生信息</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">"--------使用filter() 过滤获取高三年级的学生信息--------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> filterList <span class="token operator">=</span> studentList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>student <span class="token operator">-&gt;</span> student<span class="token punctuation">.</span><span class="token function">getGrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"高三"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.遍历过滤后的List</span>
        filterList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     <strong>
      2.2遍历结果：
     </strong>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/e01377b621339ca0904c7bc3b3255cc7.png#pic_center"/>
    </p>
    <p>
     <strong>
      3.1查询 findAny() 和 findFirst()
     </strong>
    </p>
    <p>
     findFirst() 和 findAny() 都是获取列表中的第一条数据，但是findAny()操作，返回的元素是不确定的，对于同一个列表多次调用findAny()有可能会返回不同的值。使用findAny()是为了更高效的性能。如果是数据较少，串行地情况下，一般会返回第一个结果，如果是并行（parallelStream并行流）的情况，那就不能确保是第一个。
    </p>
    <pre><code class="prism language-java"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demoutils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">StudentService</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token class-name">Collectors</span></span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @Desc
 * @Date 2020/10/18 10:09
 * @Version JDK 1.8
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> test2 <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 获取 List 数据</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentList <span class="token operator">=</span> <span class="token class-name">StudentService</span><span class="token punctuation">.</span><span class="token function">getStudentList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1.使用Java8 遍历List</span>
        studentList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.使用Java8 过滤List</span>
        <span class="token comment">// 获取姓名为“小徐”的学生信息，如果没有找到则返回null</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">"--------获取姓名为“小徐”的学生信息，如果没有找到则返回null--------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> studentInfo <span class="token operator">=</span> studentList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>student <span class="token operator">-&gt;</span> <span class="token string">"小徐"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findAny</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">orElse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>studentInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     <strong>
      3.2获取结果：
     </strong>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/caa743dd9ae0c4a6019c83c1ac047970.png#pic_center"/>
    </p>
    <p>
     <strong>
      4.1 使用 distinct() 方法可以去除重复的数据。
     </strong>
    </p>
    <pre><code class="prism language-java"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demoutils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">StudentService</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token class-name">Collectors</span></span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @Desc
 * @Date 2020/10/18 10:09
 * @Version JDK 1.8
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> test3 <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 获取 List 数据</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentList <span class="token operator">=</span> <span class="token class-name">StudentService</span><span class="token punctuation">.</span><span class="token function">getStudentList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1.使用Java8 遍历List</span>
        studentList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.使用Java8 对list去重</span>
        <span class="token comment">// 获取年级列表去除重复的数据</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------对list去重--------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 第一种</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> distintctList <span class="token operator">=</span> studentList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token operator">::</span><span class="token function">getGrade</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">distinct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        distintctList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 第二种</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> entities <span class="token operator">=</span> entityList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">collectingAndThen</span><span class="token punctuation">(</span>
                <span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toCollection</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparing</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token operator">::</span><span class="token function">getGrade</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">ArrayList</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        entities <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     <strong>
      4.2 去重的后结果
     </strong>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/2fed92c66a4032526af6c30313d0a95d.png#pic_center"/>
    </p>
    <p>
     <strong>
      5.1 使用
      <code>
       sorted()
      </code>
      排序
     </strong>
    </p>
    <pre><code class="prism language-java"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demoutils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">StudentService</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Comparator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token class-name">Collectors</span></span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @Desc
 * @Date 2020/10/18 10:09
 * @Version JDK 1.8
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> test4 <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 获取 List 数据</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentList <span class="token operator">=</span> <span class="token class-name">StudentService</span><span class="token punctuation">.</span><span class="token function">getStudentList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1.使用Java8 遍历List</span>
        studentList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.使用Java8 sorted()对list排序</span>
        <span class="token comment">// 根据年龄排序（升序）</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------对list排序--------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"升序:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 升序</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> sortenList <span class="token operator">=</span> studentList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sorted</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparing</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token operator">::</span><span class="token function">getAge</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sortenList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"降序:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 降序</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> sortenListDesc <span class="token operator">=</span> studentList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sorted</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparing</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token operator">::</span><span class="token function">getAge</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sortenListDesc<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     <strong>
      5.2 排序结果：
     </strong>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/adeaffb552723824f429b3ed4255f14e.png#pic_center">
      <br/>
      6.1 分组
     </img>
    </p>
    <pre><code class="prism language-java"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demoutils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demoutils<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">StudentService</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token class-name">Collectors</span></span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @Desc
 * @Date 2020/10/18 10:51
 * @Version JDK 1.8
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> test5 <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
        <span class="token comment">// 获取 List 数据</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentList <span class="token operator">=</span> <span class="token class-name">StudentService</span><span class="token punctuation">.</span><span class="token function">getStudentList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1.使用Java8 遍历List</span>
        studentList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.使用Java8 groupingBy对list分组</span>
        <span class="token comment">// 根据年年级分组</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------对list分组--------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> groupListMap <span class="token operator">=</span> studentList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">groupingBy</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token operator">::</span><span class="token function">getGrade</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历分组后的结果</span>
        groupListMap<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{<!-- --></span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">"："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------------------------------------------------------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>groupListMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
    <p>
     <strong>
      6.2 分组结果
     </strong>
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/b82b25cb144590b5faa2f443075238a9.png#pic_center"/>
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>



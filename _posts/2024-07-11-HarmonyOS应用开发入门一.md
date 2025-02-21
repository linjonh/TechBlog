---
layout: post
title: HarmonyOS应用开发入门一
date: 2024-07-11 11:30:41 +0800
categories: [HarmonyOS]
tags: [华为,harmonyos]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=140340566
    alt: HarmonyOS应用开发入门一
artid: 140340566
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     HarmonyOS应用开发入门（一）
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h2 id="%E4%B8%80%E3%80%81%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B">
     一、开发流程
    </h2>
    <h3 id="%C2%A01%E3%80%81%E5%87%86%E5%A4%87%E5%92%8C%E8%AE%BE%E8%AE%A1%EF%BC%9A%E8%AF%AD%E8%A8%80%26%E6%A1%86%E6%9E%B6">
     1、准备和设计：语言&amp;框架
    </h3>
    <p>
     HarmonyOS Design, ArkTs, ArkUI, ArkCompler；
    </p>
    <h3 id="2%E3%80%81%E4%BB%A3%E7%A0%81%E5%BC%80%E5%8F%91%EF%BC%9A%E5%BC%80%E5%8F%91%26%E6%B5%8B%E8%AF%95">
     2、代码开发：开发&amp;测试
    </h3>
    <p>
     DevEco Studio, DevEco Testing；
    </p>
    <h3 id="3%E3%80%81%E6%B5%8B%E8%AF%95%E4%B8%8E%E4%B8%8A%E6%9E%B6%EF%BC%9A%E5%88%86%E5%8F%91%26%E8%BF%90%E8%90%A5">
     3、测试与上架：分发&amp;运营
    </h3>
    <p>
     AppGallery Connect；
    </p>
    <p>
     <strong>
      我们主要进行代码开发的学习，开发工具使用DevEco Studio，开发语言和框架使用ArkTs, ArkUI。
     </strong>
    </p>
    <h2 id="%E4%BA%8C%E3%80%81%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87">
     二、开发准备
    </h2>
    <h3 id="1%E3%80%81%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85">
     1、开发工具安装
    </h3>
    <p>
     <strong>
      下载地址：
      <a href="https://developer.harmonyos.com/cn/develop/deveco-studio#download" rel="nofollow" title="DevEco Studio-HarmonyOS Next Beta版-华为开发者联盟">
       DevEco Studio-HarmonyOS Next Beta版-华为开发者联盟
      </a>
     </strong>
    </p>
    <p>
     （1）下载好之后，解压，双击解压后的安装包；
    </p>
    <p>
     （2）点击Next;
    </p>
    <p class="img-center">
     <img alt="" height="636" src="https://i-blog.csdnimg.cn/direct/c0efb2797dee4265a060556b9d2dc237.png" width="767"/>
    </p>
    <p>
     （3）选择安装路径；
    </p>
    <p class="img-center">
     <img alt="" height="625" src="https://i-blog.csdnimg.cn/direct/5dda94ab00dc44859c9898c5bc8671e5.png" width="765"/>
    </p>
    <p>
     （4）安装设置；
    </p>
    <p class="img-center">
     <img alt="" height="617" src="https://i-blog.csdnimg.cn/direct/d5446f138cd7444cb3860689ece90ab2.png" width="764"/>
    </p>
    <p>
     （5）点击“Install”进行安装，等待进度条走完，点击“Next”；
    </p>
    <p>
     （6）安装完成。
    </p>
    <p class="img-center">
     <img alt="" height="624" src="https://i-blog.csdnimg.cn/direct/64b44b519a1d4768bcb5f63c70b03a12.png" width="761"/>
    </p>
    <h3 id="2%E3%80%81%E9%85%8D%E7%BD%AE">
     2、配置
    </h3>
    <p>
     （1）双击桌面上安装好的 DevEco Studio，点击“Agree”，然后选择“Do not import settings”；
    </p>
    <p>
     （2）进入配置界面；
    </p>
    <p class="img-center">
     <img alt="" height="761" src="https://i-blog.csdnimg.cn/direct/4725d20a1d1546bdb72d29fa8bdabae0.png" width="1196"/>
    </p>
    <p>
     （3）SDK 安装目录默认即可；
    </p>
    <p class="img-center">
     <img alt="" height="767" src="https://i-blog.csdnimg.cn/direct/6673c17501844c5fbbd9431bf123e7bc.png" width="1192"/>
    </p>
    <p>
     （4）点击“Next”开始安装，等待安装完成即可。
    </p>
    <p class="img-center">
     <img alt="" height="764" src="https://i-blog.csdnimg.cn/direct/070799e979274738a83d74bd2e96be6e.png" width="1187"/>
    </p>
    <h2 id="%E4%B8%89%E3%80%81%E4%BA%86%E8%A7%A3ArkTS">
     三、了解ArkTS
    </h2>
    <p>
     <strong>
      ArkTs &gt; TypeScript &gt; JavaScript
     </strong>
    </p>
    <p>
     ArkTS声明式UI的特性：
    </p>
    <ul>
     <li>
      基本UI描述：ArkTS定义了各种装饰器、自定义组件、UI描述机制配合UI开发框架中的UI内置组件、事件方法、属性方法等完成UI开发。
     </li>
     <li>
      状态管理：ArkTS提供了状态管理机制，UI相关联数据可以在组件内，组件间以及全局范围内传递，甚至可以跨设备传递。数据可以只读单向传递，也可双向传递。
     </li>
     <li>
      UI元素动态构建：ArkTS提供动态构建UI元素的能力，自定义UI结构，复用组件样式，扩展原生组件。
     </li>
     <li>
      渲染控制：ArkTS提供了渲染控制能力。支持条件渲染，循环渲染等。
     </li>
    </ul>
    <h2 id="%C2%A0%E5%9B%9B%E3%80%81TypeScript%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95">
     四、TypeScript基本语法
    </h2>
    <p>
     <strong>
      演练场：
      <a href="https://www.typescriptlang.org/zh/play" rel="nofollow" title="TypeScript: 演练场 - 一个用于 TypeScript 和 JavaScript 的在线编辑器">
       TypeScript: 演练场 - 一个用于 TypeScript 和 JavaScript 的在线编辑器
      </a>
     </strong>
    </p>
    <h3 id="1%E3%80%81%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E">
     1、变量声明
    </h3>
    <p>
     声明变量的关键字(let, const)  变量名:  数据类型  =  值
    </p>
    <pre><code class="language-TypeScript">// string；字符串，可以用单引号或双引号
let msg；string = 'Hello World'
// number：数值，整数，浮点数
let age: number = 20
let score: number = 99.99
// boolean：布尔，true和false
let flag: boolean = true
// any：不确定类型，可以是任意类型
let a: any = 'jack'
a = 20
// union：联合类型，可以是多个指定类型中的一种
let u: string|number|boolean = 'jack'
u = 20
// Object：对象
let p = {name: 'jack', age: 2}
console.log(p.name)    // 输出
console.log(p['name'])
// Array：数组，元素可以是任意其它类型
let names: Array&lt;string&gt; = ['Jack', 'rose']
let ages: number[] = [20, 18]
console.log(name[0])</code></pre>
    <h3 id="2%E3%80%81%E6%9D%A1%E4%BB%B6%E6%8E%A7%E5%88%B6%EF%BC%88if-else%E5%92%8Cswitch%EF%BC%89">
     2、条件控制（if-else和switch）
    </h3>
    <h3 id="3%E3%80%81%E5%BE%AA%E7%8E%AF%E8%BF%AD%E4%BB%A3%EF%BC%88for%2C%20while%2C%20do-while%EF%BC%89">
     3、循环迭代（for, while, do-while）
    </h3>
    <p>
     （1）for...in 循环：取出的是key或索引。
    </p>
    <pre><code class="language-TypeScript">// 输出0，1，2
let students: string[] = ["jerry","petter","jhon"];
let val:any;
for (val in students) {
    console.log(val)
}</code></pre>
    <p>
     （2）for...of循环：取出的是元素（内容）。
    </p>
    <pre><code class="language-TypeScript">// 输出"jerry","petter","jhon"
let students: string[] = ["jerry","petter","jhon"];
let val:any;
for (val of students) {
    console.log(val)
}
</code></pre>
    <p>
     （3）forEach循环：对数组中的每个元素执行一次回调，不可停止或者中断循环，仅用于对数
     <br/>
     组的迭代。
    </p>
    <pre><code class="language-TypeScript">let students: string[] = ["jerry","petter","jhon"];
students.forEach((val, idx, array) =&gt; {
    console.log(val); //当前值
    console.log(idx); //索引
    console.log(array); //原数组
});
</code></pre>
    <h3 id="4%E3%80%81%E5%87%BD%E6%95%B0%EF%BC%88function%EF%BC%89">
     4、函数（function）
    </h3>
    <pre><code class="language-TypeScript">// 无返回值，返回值void可省略
function sayHello(name: string): void{
    console.log('你好，' + name + '!')
}
sayHello('jack')

// 有返回值
function sum(x: number, y: number): number{
    return x + y
}
let result = sum(20,21)
console.log(result)

// 箭头函数
let sayHi = (name: sting) =&gt; {
     console.log('你好，' + name + '!')
}
sayHi('jack')

// 可选参数，在参数后加?，表示该参数是可选的
function sayHello(name?: string): void{
    // 判断name是否有值
    name = name ? name : '陌生人'
    console.log('你好，' + name + '!')
}
sayHello('jack')
sayHello()

// 参数默认值，在参数后面赋值，表示参数默认值,如果没有传参，则用默认值
function sayHello(name: string = '陌生人'): void{
    console.log('你好，' + name + '!')
}
sayHello('jack')
sayHello()</code></pre>
    <h3>
     5、类和接口
    </h3>
    <p>
     TypeScript具备面向对象编程的基本语法，例如interface、class、enum等。也具备封装、继承、多态等面向对象基本特征。
    </p>
    <p>
     （1）枚举、接口
    </p>
    <pre><code class="language-TypeScript">// 定义枚举
enum Msg {
    HI = 'Hi',
    HELLO = 'Hello'
}

// 定义接口，抽象方法接收枚举参数
interface A {
    say(msg: Msg): void
}

// 实现接口
class B implements A {
    say(msg: Msg): void {
        console.log(msg + ', I am B')
    }
}

// 初始化对象
let a: A = new B()
// 调用方法，传递枚举参数
a.say(Msg.HI)</code></pre>
    <p>
     （2）类、继承
    </p>
    <pre><code class="language-TypeScript">// 定义矩形类
class Rectangle {
    // 成员变量
    private width: number
    private length: number
    // 构造函数
    constructor(width: number, length: number) {
        this.width = width
        this.length = length
    }
    // 成员方法
    public area(): number{
        return this.width * this.length
    }
}

// 定义正方形
class Square extends Rectangle {
    constructor(side: number) {
        // 调用父类构造
        super(side, side)
    }
}

let s = new Square(10)
console.log(s.area())</code></pre>
    <h3>
     6、模块开发（export，import）
    </h3>
    <h2>
     五、Hello HarmonyOS
    </h2>
    <p>
     1、打开 DevEco，新建一个 HarmonyOS 项目：
    </p>
    <p>
     <img alt="" height="810" src="https://i-blog.csdnimg.cn/direct/62d3c176949b42b49d47c1a4d9180edd.png" width="1200"/>
    </p>
    <p>
     2、配置项目信息：
    </p>
    <p class="img-center">
     <img alt="" height="821" src="https://i-blog.csdnimg.cn/direct/d4180a8d08704b6a9a0001c0e663e364.png" width="1200"/>
    </p>
    <p>
     3、Index.ets 中的代码如下所示：
    </p>
    <pre><code class="language-TypeScript">@Entry
@Component
struct Index {
  @State message: string = 'Hello HarmonyOS'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(40)
          .fontWeight(FontWeight.Bold)
      }
      .width('100%')
    }
    .height('100%')
  }
}</code></pre>
    <p>
     4、当前停留在 Index.ets 下，打开预览器：
    </p>
    <p class="img-center">
     <img alt="" height="1019" src="https://i-blog.csdnimg.cn/direct/e322bed7469c4daca6f775f1e9a8f0b3.png" width="659"/>
    </p>
   </div>
  </div>
 </article>
</div>



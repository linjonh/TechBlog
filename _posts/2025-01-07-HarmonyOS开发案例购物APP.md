---
layout: post
title: HarmonyOS开发案例购物APP
date: 2025-01-07 18:14:29 +0800
categories: [鸿蒙开发]
tags: [鸿蒙开发,鸿蒙,音视频,实战项目,typescript,openharmony,harmonyos]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=138169242
    alt: HarmonyOS开发案例购物APP
artid: 138169242
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     HarmonyOS开发案例：【购物APP】
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
     <a id="_2">
     </a>
     介绍
    </h3>
    <p>
     本篇Codelab使用常用组件、页面路由router实现购物应用，包含以下功能：
    </p>
    <ol>
     <li>
      使用toolbar、toolbar-item组件实现“首页”，“新品”，“购物车”，“我的”页面切换。
     </li>
     <li>
      使用list组件，展示购物车里的商品。
     </li>
     <li>
      使用swiper组件，实现图片自动轮播。
     </li>
     <li>
      使用panel组件，展示商品规格。
     </li>
     <li>
      使用自定义组件，提高代码的可读性。
     </li>
    </ol>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/3ed17fdc97fcaf081298248339373e95.gif"/>
    </p>
    <h4>
     <a id="_14">
     </a>
     相关概念
    </h4>
    <ul>
     <li>
      [swiper]：滑动容器，提供切换子组件显示的能力。
     </li>
     <li>
      [input]：交互式组件，包括单选框，多选框，按钮和单行文本输入框。
     </li>
     <li>
      [search]：搜索框组件，用于提供用户搜索内容的输入区域。
     </li>
     <li>
      [toolbar]：工具栏。放在界面底部，用于展示针对当前界面的操作选项。
     </li>
     <li>
      [toolbar-item]：工具栏[toolbar]子组件。 用于展示工具栏上的一个操作选项。
     </li>
     <li>
      [自定义组件]：自定义组件是用户根据业务需求，将已有的组件组合，封装成的新组件，可以在工程中多次调用，从而提高代码的可读性。
     </li>
    </ul>
    <h3>
     <a id="_23">
     </a>
     环境搭建
    </h3>
    <h4>
     <a id="_25">
     </a>
     软件要求
    </h4>
    <ul>
     <li>
      [DevEco Studio]版本：DevEco Studio 3.1 Release及以上版本。
     </li>
     <li>
      OpenHarmony SDK版本：API version 9及以上版本。
     </li>
    </ul>
    <h4>
     <a id="_30">
     </a>
     硬件要求
    </h4>
    <ul>
     <li>
      开发板类型：[润和RK3568开发板]。
     </li>
     <li>
      OpenHarmony系统：3.2 Release及以上版本。
     </li>
    </ul>
    <h4>
     <a id="_35">
     </a>
     环境搭建
    </h4>
    <p>
     完成本篇Codelab我们首先要完成开发环境的搭建，本示例以
     <strong>
      RK3568
     </strong>
     开发板为例，参照以下步骤进行：
    </p>
    <ol>
     <li>
      <p>
       [获取OpenHarmony系统版本]：标准系统解决方案（二进制）。以3.2 Release版本为例：
      </p>
      <p>
       <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/7a93cc9db3015eaa6bf9ecd54722cbc9.png"/>
      </p>
     </li>
     <li>
      <p>
       搭建烧录环境。
      </p>
      <ol>
       <li>
        [完成DevEco Device Tool的安装]
       </li>
       <li>
        [完成RK3568开发板的烧录]
       </li>
      </ol>
     </li>
     <li>
      <p>
       搭建开发环境。
      </p>
      <ol>
       <li>
        开始前请参考[工具准备]，完成DevEco Studio的安装和开发环境配置。
       </li>
       <li>
        开发环境配置完成后，请参考[使用工程向导]创建工程（模板选择“Empty Ability”）。
       </li>
       <li>
        工程创建完成后，选择使用[真机进行调测]。
       </li>
       <li>
        鸿蒙开发指导文档：
        <a href="https://gitee.com/li-shizhen-skin/harmony-os/blob/master/README.md" rel="nofollow">
         <code>
          gitee.com/li-shizhen-skin/harmony-os/blob/master/README.md
         </code>
        </a>
        点击或者复制转到。
       </li>
      </ol>
     </li>
    </ol>
    <p>
     <img alt="搜狗高速浏览器截图20240326151450.png" src="https://i-blog.csdnimg.cn/blog_migrate/a5da0a93462ebd2677d06f96bcd3a209.png"/>
    </p>
    <h3>
     <a id="_58">
     </a>
     代码结构解读
    </h3>
    <p>
     本篇Codelab只对核心代码进行讲解，对于完整代码，我们会在【gitee.com/li-shizhen-skin/harmony-os/blob/master/README.md】中提供。由于本篇Codelab页面较多，因此component和pages目录下只展示“购物主页面”的hml、js、css。
    </p>
    <pre><code>`HarmonyOS与OpenHarmony鸿蒙文档籽料：mau123789是v直接拿`

├──entry/src/main/js	             // 代码区
│  └──MainAbility
│     ├──common
│     │  ├──constant
│     │  │  └──commonConstants.js    // 公共常量类
│     │  └──images                   // 图片区
│     ├──component
│     │  ├──backComponent            // 后退子组件
│     │  ├──commonButton             // 支付按钮子组件
│     │  ├──commonToolbar            // 导航栏子组件
│     │  ├──home                     // 购物主页子组件
│     │  ├──likedCards               // 猜你喜欢卡片子组件
│     │  ├──myInfo                   // 我的子组件
│     │  ├──newProduct               // 新品子组件
│     │  ├──orderReusableCom         // 用户商品信息子组件
│     │  ├──productBuyInfo           // 购买商品卡片子组件
│     │  ├──shoppingCart             // 购物车子组件
│     │  └──subtitle                 // 副标题子组件
│     ├──i18n
│     │  ├──en-US.json               // 英文国际化			
│     │  └──zh-CN.json               // 中文国际化	
│     ├──pages
│     │  ├──allOrders                // 全部订单页
│     │  ├──homePage                 // 购物主页
│     │  │  ├──homePage.css          // 购物主页面样式
│     │  │  ├──homePage.hml          // 购物主页面
│     │  │  └──homePage.js           // 购物主页面逻辑
│     │  ├──launchPage               // 启动页
│     │  ├──pendingPayment           // 待支付页
│     │  ├──productDetails           // 产品详情页
│     │  └──sureOrder                // 确定订单页
│     └──app.js                      // 程序入口
└──entry/src/main/resources          // 应用资源目录
</code></pre>
    <h3>
     <a id="_100">
     </a>
     构建购物应用首页
    </h3>
    <p>
     本篇Codelab选取购物应用的主页面、购物车页面、以及导航栏进行详细的讲解，对于完整代码，可在gitee源码中进行查看。
    </p>
    <p>
     购物应用的主页面主要由界面底部导航栏和导航栏上的内容组成。效果如图所示：
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/02d97ad7048be68a65b949d3df40a0a4.gif"/>
    </p>
    <pre><code>&lt;!-- homePage.hml --&gt;
&lt;element name="home" src="../../component/home/home.hml"&gt;&lt;/element&gt;
&lt;element name="new-product" src="../../component/newProduct/newProduct.hml"&gt;&lt;/element&gt;
&lt;element name="shopping-cart" src="../../component/shoppingCart/shoppingCart.hml"&gt;&lt;/element&gt;
&lt;element name="my-info" src="../../component/myInfo/myInfo.hml"&gt;&lt;/element&gt;
&lt;element name="common-toolbar" src="../../component/commonToolbar/commonToolbar.hml"&gt;&lt;/element&gt;

&lt;div class="container"&gt;
    &lt;!-- 主页面 --&gt;
    &lt;home if="{<!-- -->{ tag === homePageIndex }}"&gt;&lt;/home&gt;

    &lt;!-- 新品页面 --&gt;
    &lt;new-product if="{<!-- -->{ tag === newProductIndex }}"&gt;&lt;/new-product&gt;

    &lt;!-- 购物车页面 --&gt;
    &lt;shopping-cart if="{<!-- -->{ tag === shoppingCartIndex }}"&gt;&lt;/shopping-cart&gt;

    &lt;!-- 我的页面 --&gt;
    &lt;my-info if="{<!-- -->{ tag === myInfoIndex }}"&gt;&lt;/my-info&gt;

    &lt;!-- 导航栏 --&gt;
    &lt;common-toolbar tag="{<!-- -->{ tag }}" @switch-toolbar="switchToolbar"&gt;&lt;/common-toolbar&gt;
&lt;/div&gt;
</code></pre>
    <p>
     底部导航栏：由“主页”、“新品”、“购物车”以及“我的”页面组成，点击导航栏内容，展示所点击模块的内容。
    </p>
    <pre><code>// homePage.js
import CommonConstants from '../../common/constant/commonConstants';

export default {
  data: {
    // 页面默认展示主页，tag是主页面的索引
    tag: 1,
    // 主页面索引
    homePageIndex: CommonConstants.HOME_PAGE_INDEX,
    // 新品页面索引
    newProductIndex: CommonConstants.NEW_PRODUCT_INDEX,
    // 购物车页面索引
    shoppingCartIndex: CommonConstants.SHOPPING_CART_INDEX,
    // 我的页面索引
    myInfoIndex: CommonConstants.MY_INFO_INDEX
  },

  /**
   * 切换导航栏内容
   *
   * @param value 子组件传过来的索引
   */
  switchToolbar(value) {
    this.tag = value.detail.index;
  }
}
</code></pre>
    <h3>
     <a id="_165">
     </a>
     子组件：导航栏的使用
    </h3>
    <p>
     导航栏由“主页”、“新品”、“购物车”以及“我的”组成，点击导航栏对应的子组件，页面会展示对应模块的内容。效果如图所示：
    </p>
    <p>
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/f4c7a48eef3714a6d4bcfb2ad08e126c.gif"/>
    </p>
    <p>
     在父组件homePage.hml中使用@switch-toolbar="switchToolbar"绑定子组件的事件，用于接收子组件传过来的索引，通过if判断，从而展示索引对应的页面。
    </p>
    <pre><code>&lt;!-- homePage.hml --&gt;
...
&lt;div class="container"&gt;
    &lt;!-- 主页面 --&gt;
    &lt;home if="{<!-- -->{ tag === homePageIndex }}"&gt;&lt;/home&gt;

    &lt;!-- 新品页面 --&gt;
    &lt;new-product if="{<!-- -->{ tag === newProductIndex }}"&gt;&lt;/new-product&gt;

    &lt;!-- 购物车页面 --&gt;
    &lt;shopping-cart if="{<!-- -->{ tag === shoppingCartIndex }}"&gt;&lt;/shopping-cart&gt;

    &lt;!-- 我的页面 --&gt;
    &lt;my-info if="{<!-- -->{ tag === myInfoIndex }}"&gt;&lt;/my-info&gt;

    &lt;!-- 导航栏 --&gt;
    &lt;common-toolbar tag="{<!-- -->{ tag }}" @switch-toolbar="switchToolbar"&gt;&lt;/common-toolbar&gt;
&lt;/div&gt;

&lt;!-- commonToolbar.hml --&gt;
&lt;div class="container"&gt;
    &lt;toolbar class="toolbar"&gt;
        &lt;toolbar-item value="{<!-- -->{ $t(toolbarName.home) }}" @click="switchToolbar(homePageIndex)"
                      icon="{<!-- -->{ tag === homePageIndex ? commonIcon.home : commonIcon.homeDisable }}"&gt;
        &lt;/toolbar-item&gt;
        &lt;toolbar-item value="{<!-- -->{ $t(toolbarName.newProduct) }}" @click="switchToolbar(newProductIndex)"
                      icon="{<!-- -->{ tag === newProductIndex ? commonIcon.newProduct : commonIcon.newProductDisable }}"&gt;
        &lt;/toolbar-item&gt;
        &lt;toolbar-item value="{<!-- -->{ $t(toolbarName.shoppingCart) }}" @click="switchToolbar(shoppingCartIndex)"
                      icon="{<!-- -->{ tag === shoppingCartIndex ? commonIcon.shoppingCart : commonIcon.shoppingCartDisable }}"&gt;
        &lt;/toolbar-item&gt;
        &lt;toolbar-item value="{<!-- -->{ $t(toolbarName.me) }}" @click="switchToolbar(myInfoIndex)"
                      icon="{<!-- -->{ tag === myInfoIndex ? commonIcon.me : commonIcon.meDisable }}"&gt;
        &lt;/toolbar-item&gt;
    &lt;/toolbar&gt;
&lt;/div&gt;
</code></pre>
    <p>
     在子组件commonToolbar.js中通过this.$emit(‘switchToolbar’, {info: value})触发事件并向上传递参数，homePage.js中的switchToolbar方法接收子组件传过来的索引。在子组件commonToolbar.js文件中定义props，props用于组件之间的数据通信，当父组件中的tag发生变化的时候，子组件也会随之响应，然后改变toolbar-item中icon的颜色。
    </p>
    <pre><code>// homePage.js
import CommonConstants from '../../common/constant/commonConstants';

export default {
  data: {
    // 页面默认展示主页，tag是主页面的索引
    tag: 1,
    ...
  },

  /**
   * 切换导航栏内容
   *
   * @param value 子组件传过来的索引
   */
  switchToolbar(value) {
    this.tag = value.detail.index;
  }
}

// commonToolbar.js
import CommonConstants from '../../common/constant/commonConstants';

export default {
  props: ['tag'],
  data: {
    commonIcon: CommonConstants.COMMON_TOOLBAR_ICON,
    toolbarName: CommonConstants.COMMON_TOOLBAR_NAME,
    // 主页面索引
    homePageIndex: CommonConstants.HOME_PAGE_INDEX,
    // 新品页面索引
    newProductIndex: CommonConstants.NEW_PRODUCT_INDEX,
    // 购物车页面索引
    shoppingCartIndex: CommonConstants.SHOPPING_CART_INDEX,
    // 我的页面索引
    myInfoIndex: CommonConstants.MY_INFO_INDEX
  },

  /**
   * 向父组件传值
   *
   * @param index 选中子模块的索引
   */
  switchToolbar(index) {
    this.$emit('switchToolbar', {
      index: index
    });
  }
}
</code></pre>
    <h3>
     <a id="_266">
     </a>
     构建购物车页面
    </h3>
    <p>
     购物车页面由顶部标题栏、购物车商品列表、猜你喜欢的商品列表三部分组成，并以子组件的形式显示在主页面中。其中，购物车商品列表使用list组件和for循环，实现对多条商品数据进行展示。猜你喜欢的商品列表是通过引用自定义组件实现的。效果如图所示：
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://img-blog.csdnimg.cn/direct/b2729d5d36094569b3515e16fc049a04.gif"/>
    </p>
    <pre><code>&lt;!-- shoppingCart.hml --&gt;
&lt;element name="liked-cards" src="../../component/likedCards/likedCards.hml"&gt;&lt;/element&gt;

&lt;div class="container"&gt;
    &lt;div class="top"&gt;
        &lt;!-- 顶部导航标题栏 --&gt;
        &lt;div class="top-title"&gt;
            &lt;text class="shopping-cart"&gt;{<!-- -->{ $t('strings.shopping_cart') }}&lt;/text&gt;
            &lt;text class="edit"&gt;{<!-- -->{ $t('strings.edit') }}&lt;/text&gt;
        &lt;/div&gt;
        &lt;!-- 购物车商品列表 --&gt;
        &lt;div class="top-list"&gt;
            &lt;div class="list-title"&gt;
                &lt;input class="all-checkbox" type="checkbox" checked="{<!-- -->{ isAllSelect }}" @change="checkboxOnChange"&gt;
                &lt;/input&gt;
                &lt;image class="my-icon-size" src="{<!-- -->{ person }}"&gt;&lt;/image&gt;
                &lt;text class="mall-self-operated"&gt;{<!-- -->{ $t('strings.mall_self_operated') }}&lt;/text&gt;
            &lt;/div&gt;
            &lt;list class="list"&gt;
                &lt;list-item for="{<!-- -->{ (index, item) in shoppingListData }}" class="list-item"&gt;
                    &lt;div class="list-content"&gt;
                        &lt;input class="checkbox" type="checkbox" checked="{<!-- -->{ item.isSelect }}"&gt;&lt;/input&gt;
                        &lt;image class="product-pictures" src="{<!-- -->{ item.image }}"&gt;&lt;/image&gt;
                        &lt;div class="box-content"&gt;
                            &lt;text class="product-title"&gt;{<!-- -->{ $t(item.title) }}&lt;/text&gt;
                            &lt;text class="product-subtitle"&gt;{<!-- -->{ $t(item.subtitle) }}&lt;/text&gt;
                            &lt;div class="content-price"&gt;
                                &lt;text class="product-price"&gt;{<!-- -->{ item.price }}&lt;/text&gt;
                                &lt;div class="price-num"&gt;
                                    &lt;image class="my-icon-size" @click="subtractNum(index)" src="{<!-- -->{ item.num === 0 ?
                                            commonIcon.decreaseDisableIcon : commonIcon.decreaseIcon }}"&gt;
                                    &lt;/image&gt;
                                    &lt;text class="product-num"&gt;{<!-- -->{ item.num }}&lt;/text&gt;
                                    &lt;image class="my-icon-size" src="{<!-- -->{ commonIcon.increaseIcon }}"
                                           @click="addNum(index)"&gt;
                                    &lt;/image&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/list-item&gt;
            &lt;/list&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- 猜你喜欢商品列表 --&gt;
    &lt;div class="middle-card"&gt;
        &lt;liked-cards&gt;&lt;/liked-cards&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
    <ul>
     <li>
      点击“商品自营”头像前的多选框，会触发checkboxOnChange()方法，页面会勾选/不勾选购物车的中所有商品。
     </li>
     <li>
      点击“+”按钮会触发addNum()方法，增加单件商品的数量。
     </li>
     <li>
      点击“-”按钮会触发subtractNum()方法，减少单件商品的数量。
     </li>
    </ul>
    <pre><code>// shoppingCart.js
import CommonConstants from '../../common/constant/commonConstants';

export default {
  data: {
    isAllSelect: false,
    shoppingListData: CommonConstants.SHOPPING_LIST_DATA,
    commonIcon: CommonConstants.SHOPPING_CART_ICON,
    person: CommonConstants.COMMON_ICON.person
  },

  /**
   * 购物车商品全选/非全选
   */
  checkboxOnChange() {
    this.isAllSelect = !this.isAllSelect;
    this.shoppingListData.filter((item) =&gt; {
      item.isSelect = this.isAllSelect;
    });
  },

  /**
   * 勾选单个商品
   *
   * @param subscript 选中商品的索引
   * @param event 单选框事件
   */
  singleAnswer(subscript, event) {
    // 修改商品的选择状态
    this.shoppingListData.forEach((item, index) =&gt; {
      if (index === subscript) {
        item.isSelect = event.checked;
      }
    })
    // 检查购物车中的所有商品是否都被选中
    let selectAll = this.shoppingListData.every(item =&gt; item.isSelect === true);
    if (selectAll === true) {
      this.isAllSelect = true;
    } else {
      this.isAllSelect = false;
    }
  },

  /**
   * 减少商品数量逻辑
   *
   * @param value 当前商品的数量
   */
  subtractNum(value) {
    if (this.shoppingListData[value].num &gt; 0) {
      this.shoppingListData[value].num--;
    }
  },

  /**
   * 增加商品数量逻辑
   *
   * @param value 当前商品的数量
   */
  addNum(value) {
    this.shoppingListData[value].num++;
  }
}
</code></pre>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



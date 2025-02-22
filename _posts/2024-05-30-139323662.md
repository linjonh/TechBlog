---
layout: post
title: 全网首发HarmonyOS鸿蒙系统项目开发实战_百战健身APP限时白嫖
date: 2024-05-30 14:52:28 +0800
categories: [HarmonyOS开发]
tags: [计算机网络,开发语言,华为,前端,typescript,javascript,harmonyos]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=139323662
    alt: 全网首发HarmonyOS鸿蒙系统项目开发实战_百战健身APP限时白嫖
artid: 139323662
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     全网首发！HarmonyOS（鸿蒙系统）项目开发实战_百战健身APP！限时白嫖！！！
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p>
     <strong>
      随着
     </strong>
     <strong>
      <strong>
       <strong>
        华为鸿蒙HarmonyOS
       </strong>
      </strong>
     </strong>
     <strong>
      的不断发展与壮大，
     </strong>
     <strong>
      物联网和智能家居技术的发展，设备互联和智能化需求增加。越来越多的开发者加入到
     </strong>
     <strong>
      <strong>
       <strong>
        鸿蒙HarmonyOS
       </strong>
      </strong>
     </strong>
     <strong>
      的开发浪潮中！
     </strong>
    </p>
    <p class="img-center">
     <img alt="" height="643" src="https://i-blog.csdnimg.cn/blog_migrate/6fcdccd8eab1fe881e06d0b75e04e33c.png" width="976"/>
    </p>
    <p class="img-center">
     <img alt="" height="349" src="https://i-blog.csdnimg.cn/blog_migrate/fdbcc0945704d9d11a221a3172809c37.png" width="975"/>
    </p>
    <p>
     <strong>
      总有声音说现在互联网公司大量裁员，Java，前端等岗位压缩，现在根本找不到工作，那不妨试试
     </strong>
     <strong>
      <strong>
       <strong>
        HarmonyOS（鸿蒙）开发这个新赛道
       </strong>
      </strong>
     </strong>
     <strong>
      。抢占时代新风口，给未来多一个选择！
     </strong>
    </p>
    <p>
     <strong>
      既上篇文章给大家分享了HarmonyOS（鸿蒙）基础学习教程及10个练手案例，
      <strong>
       今天给大家分享的就是
      </strong>
     </strong>
     <strong>
      <strong>
       <strong>
        最新出炉的HarmonyOS（鸿蒙系统）项目开发实战_百战健身APP！
       </strong>
      </strong>
     </strong>
     <strong>
      <strong>
       接下来就来一起看看吧！
      </strong>
     </strong>
    </p>
    <h3>
     百战健身项目实战
    </h3>
    <p class="img-center">
     <img alt="" src="https://i-blog.csdnimg.cn/blog_migrate/9baf6d2e28b17748bfca1ee2ff493bb9.png"/>
    </p>
    <h3>
     项目内容预览
    </h3>
    <p>
     <strong>
      首次进入App
     </strong>
    </p>
    <p>
     <img alt="" height="443" src="https://i-blog.csdnimg.cn/blog_migrate/3d3671e0331bc88161bf1f0893958b11.png" width="215"/>
    </p>
    <p>
     主要页面
    </p>
    <p class="img-center">
     <img alt="" height="460" src="https://i-blog.csdnimg.cn/blog_migrate/503fffb794ff29ac5d22448a000e5162.png" width="774"/>
    </p>
    <p>
     <strong>
      日期选择和运动添加
     </strong>
    </p>
    <p class="img-center">
     <img alt="" height="446" src="https://i-blog.csdnimg.cn/blog_migrate/2c22b28cec7b0262e15e8ace13bfeaab.png" width="763"/>
    </p>
    <h3>
     进入开发工具开始制作
    </h3>
    <h3>
     一、 工具类和已存储属性介绍
    </h3>
    <p>
     <strong>
      注意：
     </strong>
    </p>
    <blockquote>
     <p>
      <strong>
       1. 项目中使用json存储需要展示的文本内容，是为了方便中、英文用户使用App时更好的了解内容和功能。
      </strong>
     </p>
     <p>
      <strong>
       2. 存储颜色是为了方便多次调用
      </strong>
     </p>
    </blockquote>
    <h3>
     二、 开始制作欢迎页面 SplashIndex
    </h3>
    <h3>
     三、 用户协议弹窗提示组件 UserPrivacyDialog
    </h3>
    <h3>
     四、 实现用户协议弹窗弹出
    </h3>
    <p>
     <strong>
      提示：
     </strong>
    </p>
    <blockquote>
     <p>
      <strong>
       当用户打开App时，进入应用需要弹出用户协议弹窗，当用户点击同意后正常进入App，且下次进入App不需要弹出弹窗；若点击不同意则退出App，下次进入再次弹出弹窗，并跳转至主页面。这里存储数据较少，且只需要再App打开时获取用户是否点击同意，所以用首选项存储此数据。
      </strong>
     </p>
    </blockquote>
    <pre><code class="language-javascript">//页面加载
  aboutToAppear() {
    //取出用户首选项中H_STORE值
    let preferences = data_preferences.getPreferences(this.context, H_STORE)
    //异步处理
    preferences.then((res) =&gt; {
      res.get(IS_PRIVACY, false).then((isPrivate) =&gt; {
        //判断isPrivate值
        if (isPrivate === true) {
          //如果该值为true说明用户已经点击过同意并存入首选项
          this.jumpAdPage()
        } else {
          //如果该值为false，则弹出弹窗
          this.dialogController.open()
        }
      })
    })
  }

  //清除该页面
  aboutToDisappear() {
    clearTimeout()
  }</code></pre>
    <p>
     <strong>
      <strong>
       <strong>
        仅展示部分代码，需要完整文档看文末领取！！！
       </strong>
      </strong>
     </strong>
    </p>
    <h3>
     五、 创建主页面MainIndex
    </h3>
    <blockquote>
     <p>
      <strong>
       注意：
      </strong>
     </p>
     <p>
      <strong>
       当TabBar内容为自定义组件时，需要通过onChange事件监控子组件index变化来改变TabBar的样式。
      </strong>
     </p>
    </blockquote>
    <h3>
     六、 创建主页TabContent内容
    </h3>
    <p>
     <strong>
      创建日期选择弹窗`DateDialog`
     </strong>
    </p>
    <p>
     <strong>
      创建日期转换工具类`DateUtil`
     </strong>
    </p>
    <pre><code class="language-javascript">class DateUtil {

  formatDate(num: number): string {
    let date = new Date(num)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let m = month &lt; 10 ? '0' + month : month
    let d = day &lt; 10 ? '0' + day : day
    return `${year}年${m}月${d}日`
  }

  beginTimeOfDay(date: Date) {
    let d = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    return d.getTime()
  }
}

let dateUtil = new DateUtil()

export default dateUtil as DateUtil</code></pre>
    <p>
     <strong>
      <strong>
       <strong>
        仅展示部分代码，需要完整文档看文末领取！！！
       </strong>
      </strong>
     </strong>
    </p>
    <p>
    </p>
    <h3>
     七、 创建添加任务按钮AddBtn
    </h3>
    <h3>
     八、创建添加任务页面AddTaskPage
    </h3>
    <h3>
     九、创建成就页面AchievementContent
    </h3>
    <h3>
     十、初始化数据库
    </h3>
    <h3>
     十一、完成`DBUtil类
    </h3>
    <h3>
     十二、完成`RecordModel类（建表语句和任务的增删改查）
    </h3>
    <h3>
     十三、实现任务添加到数据库
    </h3>
    <h3>
     十四、实现任务删除
    </h3>
    <h3>
     十五、实现成就页面数据部分
    </h3>
    <h3>
     资料分享：
    </h3>
    <p>
     <strong>
      视频教程
     </strong>
    </p>
    <p class="img-center">
     <img alt="" height="414" src="https://i-blog.csdnimg.cn/blog_migrate/86435966c658427c9c042ff55856f85e.png" width="771"/>
    </p>
    <p>
     <strong>
      MD文档
     </strong>
    </p>
    <p class="img-center">
     <img alt="" height="583" src="https://i-blog.csdnimg.cn/blog_migrate/2468f113747ae91b4a96127ba590bffc.png" width="1080"/>
    </p>
    <h6>
     <span style="color:#fe2c24;">
      <strong>
       领取方式：关注我评论区留言或主动给我打个招呼，我都会回复的~~~
      </strong>
     </span>
    </h6>
    <p>
     <span style="color:#fe2c24;">
      <strong>
       一定要关注我，不然我发不了消息哦~
      </strong>
     </span>
    </p>
    <h6>
     <a name="t14">
     </a>
     <strong>
      整理不易，有帮助的话大家一定要 点赞 + 收藏 哦 ❤️！
     </strong>
     支持作者的同时，便于自己下次更方便地找到叭！
    </h6>
   </div>
  </div>
 </article>
</div>



---
title: 2024-07-04-基于JavaVueuniapp微信小程序新闻资讯系统设计和实现
date: 2024-07-04 23:54:50 +0800
categories: [Java毕业设计实战案例,微信小程序项目实战案例]
tags: [java,vue.js,uni-app,微信小程序,新闻资讯系统]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=134675352
  alt: 基于JavaVueuniapp微信小程序新闻资讯系统设计和实现
artid: 134675352
---
<span class="artid" style="display:none" artid=68747470733a2f2f626c6f672e:6373646e2e6e65742f77656978696e5f33393730393133342f:61727469636c652f64657461696c732f313334363735333532></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     基于Java+Vue+uniapp微信小程序新闻资讯系统设计和实现
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <blockquote>
     <p>
      <strong>
       博主介绍
      </strong>
      ：
      <strong>
       ✌
      </strong>
      全网粉丝30W+,csdn特邀作者、博客专家、CSDN新星计划导师、Java领域优质创作者,博客之星、掘金/华为云/阿里云/InfoQ等平台优质作者、专注于Java技术领域和毕业项目实战
      <strong>
       ✌
      </strong>
     </p>
     <p>
      🍅
      <span style="color:#fe2c24;">
       <strong>
        文末获取源码联系
       </strong>
      </span>
      🍅
     </p>
     <p>
      <strong>
       👇🏻 精彩专栏
       <span style="color:#fe2c24;">
        推荐订阅
       </span>
       👇🏻 不然下次找不到哟
      </strong>
     </p>
     <p>
      <strong>
       <strong>
        <strong>
         <strong>
          <strong>
           <strong>
            <strong>
             <strong>
              <a href="https://blog.csdn.net/weixin_39709134/article/details/131338298" title="2022-2024年最全的计算机软件毕业设计选题大全：1000个热门选题推荐✅">
               2022-2024年最全的计算机软件毕业设计选题大全：1000个热门选题推荐✅
              </a>
             </strong>
            </strong>
           </strong>
          </strong>
         </strong>
        </strong>
       </strong>
      </strong>
     </p>
     <p>
      <strong>
       <strong>
        <a href="https://blog.csdn.net/weixin_39709134/category_11128297.html" title="Java项目精品实战案例《100套》">
         Java项目精品实战案例《100套》
        </a>
       </strong>
      </strong>
     </p>
     <p>
      <strong>
       <strong>
        <a href="https://blog.csdn.net/weixin_39709134/category_12022111.html" title="Java微信小程序项目实战《100套》">
         Java微信小程序项目实战《100套》
        </a>
       </strong>
      </strong>
     </p>
     <p>
      <strong>
       <a href="https://blog.csdn.net/weixin_39709134/category_12352323.html" title="Python项目实战《100套》">
        Python项目实战《100套》
       </a>
      </strong>
     </p>
     <p>
      <strong>
       感兴趣的可以
       <span style="color:#fe2c24;">
        先收藏起来
       </span>
       ，还有大家在毕设选题，项目以及论文编写等相关问题都可以
       <span style="color:#fe2c24;">
        给我留言咨询
       </span>
       ，希望帮助更多的人
      </strong>
     </p>
    </blockquote>
    <p>
     <img alt="" height="560" src="https://i-blog.csdnimg.cn/blog_migrate/226a85fdef0a79042417323c542fc97c.png" width="1200">
      ​
     </img>
    </p>
    <h3 style="background-color:transparent;">
     系统介绍：
    </h3>
    <p style="margin-left:.0001pt;text-align:justify;">
     随着信息技术在管理上越来越深入而广泛的应用，管理信息系统的实施在技术上已逐步成熟。本文介绍了基于微信小程序的新闻资讯系统的开发全过程。通过分析基于微信小程序的新闻资讯系统管理的不足，创建了一个计算机管理基于微信小程序的新闻资讯系统的方案。文章介绍了基于微信小程序的新闻资讯系统的系统分析部分，包括可行性分析等，系统设计部分主要介绍了系统功能设计和数据库设计。
    </p>
    <p style="text-align:justify;">
     本基于微信小程序的新闻资讯系统管理员功能有个人中心，用户管理，新闻分类管理，新闻信息管理，视频分类管理，新闻视频管理，系统管理等。用户可以注册登录以及查看新闻和视频。因而具有一定的实用性。
    </p>
    <p style="text-align:justify;">
     本站后台采用Java的SSM框架进行后台管理开发，可以在浏览器上登录进行后台数据方面的管理，MySQL作为本地数据库，微信小程序用到了微信开发者工具，充分保证系统的稳定性。系统具有界面清晰、操作简单，功能齐全的特点，使得基于微信小程序的新闻资讯系统管理工作系统化、规范化。
    </p>
    <p style="text-align:justify;">
     <img alt="" height="368" src="https://i-blog.csdnimg.cn/blog_migrate/51d5c3fb949b1b7f609e9a711a2c71c8.png" width="730"/>
    </p>
    <p>
     程序上交给用户进行使用时，需要提供程序的操作流程图，这样便于用户容易理解程序的具体工作步骤，现如今程序的操作流程都有一个大致的标准，即先通过登录页面提交登录数据，通过程序验证正确之后，用户才能在程序功能操作区页面操作对应的功能。
    </p>
    <p>
     <img alt="" height="552" src="https://i-blog.csdnimg.cn/blog_migrate/96490ebfd549a3b832d302751e69da00.png" width="935"/>
    </p>
    <p style="text-align:center;">
     ​程序操作流程图
    </p>
    <h3 style="margin-left:.0001pt;text-align:justify;">
     相关技术框架
    </h3>
    <p style="margin-left:.0001pt;text-align:justify;">
     <strong>
      Vue框架
     </strong>
    </p>
    <p>
     Vue是最近几年最火的前端应用，在H5以及APP和小程序上面，有着很大的市场份额。作为一个不断的向前发展的生态系统，Vue不仅仅只是作为了网页的开发，Vue的概念主要是让以前静态写的DOM，变成了动态生成，超快运行虚拟DOM，DOM就是HTML里面W3C设置的标准，是文档对象模型。使用Vue，让文档对象生成变得更加智能化，在使用过程中对该机构进行访问，就能改变文档的结构、样式以及内容。让用户能体现到极简界面，急速打开，从上往下的打开层次感，使用的更加舒适。
    </p>
    <p>
     <strong>
      微信小程序
     </strong>
    </p>
    <p>
     小程序是一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播，同时具有出色的使用体验。尤其拥抱微信生态圈，让微信小程序更加的如虎添翼，发展迅猛。
    </p>
    <p style="text-align:justify;">
     <a name="_Toc483328860">
     </a>
     <strong>
      uni-app
     </strong>
    </p>
    <p>
     uni-app 是一个使用
     <a href="https://vuejs.org/" rel="nofollow" title="Vue.js">
      Vue.js
     </a>
     开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。
    </p>
    <p>
     DCloud公司拥有800万开发者、数百万应用、12亿手机端月活用户、数千款uni-app插件。
    </p>
    <p style="margin-left:.0001pt;text-align:justify;">
     uni-app在手，做啥都不愁。即使不跨端，uni-app也是更好的小程序开发框架更好的App跨平台框架、更方便的H5开发框架。不管领导安排什么样的项目，你都可以快速交付，不需要转换开发思维、不需要更改开发习惯。
    </p>
    <h3 style="background-color:transparent;">
     功能截图：
    </h3>
    <h3 style="text-align:justify;">
     5.1 后台模块的实现
    </h3>
    <h4 style="background-color:transparent;text-align:justify;">
     5.1.1 用户信息管理
    </h4>
    <p style="margin-left:.0001pt;text-align:justify;">
     管理员可以管理用户信息，可以对用户信息添加修改删除。具体界面的展示如图5.1所示。
    </p>
    <p>
     <img alt="" height="689" src="https://i-blog.csdnimg.cn/blog_migrate/95a97d63761041aba57ffc78047eb2bf.png" width="1200"/>
    </p>
    <p>
     图5.1 用户信息界面
    </p>
    <h4 style="text-align:justify;">
     5.1.2 新闻分类管理
    </h4>
    <p style="margin-left:.0001pt;text-align:justify;">
     管理员可以对新闻分类信息进行添加修改删除操作。具体界面如图5.2所示。
    </p>
    <p>
     <img alt="" height="571" src="https://i-blog.csdnimg.cn/blog_migrate/a36b36db4888a2d71bb6d6c2334c0753.png" width="1200"/>
    </p>
    <p>
     图5.3 新闻分类信息管理界面
    </p>
    <h4 style="text-align:justify;">
     5.1.3 新闻信息管理
    </h4>
    <p style="margin-left:.0001pt;text-align:justify;">
     管理员可以对新闻信息进行添加修改删除操作。界面如下图所示：
    </p>
    <p>
     <img alt="" height="641" src="https://i-blog.csdnimg.cn/blog_migrate/8995c679fa4acd351f1d0592510f170c.png" width="1200"/>
    </p>
    <p>
     图5.4 新闻信息管理界面
    </p>
    <h3 style="text-align:justify;">
     5.2 小程序会员模块的实现
    </h3>
    <h4 style="text-align:justify;">
     5.2.1 系统首页
    </h4>
    <p style="margin-left:.0001pt;text-align:justify;">
     小程序用户是需要注册才可以进行登录的，登录后在首页可以查看相关信息，并且下面导航可以点击到其他功能模块。界面如下图所示：
    </p>
    <p>
     <img alt="" height="743" src="https://i-blog.csdnimg.cn/blog_migrate/59e1f4c57fb636d9bbe3c8b775fb9012.png" width="399"/>
    </p>
    <p>
     图5.5 系统首页
    </p>
    <h4 style="text-align:justify;">
     5.2.2 我的菜单
    </h4>
    <p style="margin-left:.0001pt;text-align:justify;">
     在小程序里点击我的，会出现关于我的界面，在这里可以修改个人信息，以及可以点击其他功能模块。界面如下图所示：
    </p>
    <p>
     <img alt="" height="737" src="https://i-blog.csdnimg.cn/blog_migrate/5abda609744d0c539f172afbb7773837.png" width="405"/>
    </p>
    <p>
     图5.6 我的菜单
    </p>
    <h4 style="text-align:justify;">
     5.2.3 新闻收藏
    </h4>
    <p style="margin-left:.0001pt;text-align:justify;">
     用户可以对自己感兴趣得新闻进行收藏和取消收藏操作。界面如下图所示：
    </p>
    <p>
     <img alt="" height="732" src="https://i-blog.csdnimg.cn/blog_migrate/d4e02046be10662b7f400e10ba49bcd1.png" width="408"/>
    </p>
    <p>
     图5.6 新闻收藏界面
    </p>
    <h3>
     代码实现：
    </h3>
    <pre><code class="language-java">package com.controller;

import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.annotation.IgnoreAuth;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.entity.TokenEntity;
import com.entity.UserEntity;
import com.service.TokenService;
import com.service.UserService;
import com.utils.CommonUtil;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.ValidatorUtils;

/**
 * 登录相关
 */
@RequestMapping("users")
@RestController
public class UserController{
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private TokenService tokenService;

	/**
	 * 登录
	 */
	@IgnoreAuth
	@PostMapping(value = "/login")
	public R login(String username, String password, String captcha, HttpServletRequest request) {
		UserEntity user = userService.selectOne(new EntityWrapper&lt;UserEntity&gt;().eq("username", username));
		if(user==null || !user.getPassword().equals(password)) {
			return R.error("账号或密码不正确");
		}
		String token = tokenService.generateToken(user.getId(),username, "users", user.getRole());
		return R.ok().put("token", token);
	}
	
	/**
	 * 注册
	 */
	@IgnoreAuth
	@PostMapping(value = "/register")
	public R register(@RequestBody UserEntity user){
//    	ValidatorUtils.validateEntity(user);
    	if(userService.selectOne(new EntityWrapper&lt;UserEntity&gt;().eq("username", user.getUsername())) !=null) {
    		return R.error("用户已存在");
    	}
        userService.insert(user);
        return R.ok();
    }

	/**
	 * 退出
	 */
	@GetMapping(value = "logout")
	public R logout(HttpServletRequest request) {
		request.getSession().invalidate();
		return R.ok("退出成功");
	}
	
	/**
     * 密码重置
     */
    @IgnoreAuth
	@RequestMapping(value = "/resetPass")
    public R resetPass(String username, HttpServletRequest request){
    	UserEntity user = userService.selectOne(new EntityWrapper&lt;UserEntity&gt;().eq("username", username));
    	if(user==null) {
    		return R.error("账号不存在");
    	}
    	user.setPassword("123456");
        userService.update(user,null);
        return R.ok("密码已重置为：123456");
    }
	
	/**
     * 列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map&lt;String, Object&gt; params,UserEntity user){
        EntityWrapper&lt;UserEntity&gt; ew = new EntityWrapper&lt;UserEntity&gt;();
    	PageUtils page = userService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.allLike(ew, user), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/list")
    public R list( UserEntity user){
       	EntityWrapper&lt;UserEntity&gt; ew = new EntityWrapper&lt;UserEntity&gt;();
      	ew.allEq(MPUtil.allEQMapPre( user, "user")); 
        return R.ok().put("data", userService.selectListView(ew));
    }

    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") String id){
        UserEntity user = userService.selectById(id);
        return R.ok().put("data", user);
    }
    
    /**
     * 获取用户的session用户信息
     */
    @RequestMapping("/session")
    public R getCurrUser(HttpServletRequest request){
    	Long id = (Long)request.getSession().getAttribute("userId");
        UserEntity user = userService.selectById(id);
        return R.ok().put("data", user);
    }

    /**
     * 保存
     */
    @PostMapping("/save")
    public R save(@RequestBody UserEntity user){
//    	ValidatorUtils.validateEntity(user);
    	if(userService.selectOne(new EntityWrapper&lt;UserEntity&gt;().eq("username", user.getUsername())) !=null) {
    		return R.error("用户已存在");
    	}
        userService.insert(user);
        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody UserEntity user){
//        ValidatorUtils.validateEntity(user);
    	UserEntity u = userService.selectOne(new EntityWrapper&lt;UserEntity&gt;().eq("username", user.getUsername()));
    	if(u!=null &amp;&amp; u.getId()!=user.getId() &amp;&amp; u.getUsername().equals(user.getUsername())) {
    		return R.error("用户名已存在。");
    	}
        userService.updateById(user);//全部更新
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        userService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
}
</code></pre>
    <h3 style="background-color:transparent;">
     论文参考：
    </h3>
    <p>
     <img alt="" height="966" src="https://i-blog.csdnimg.cn/blog_migrate/9d8f45c1f8d23a1782d52b181cbf0a8f.png" width="1200"/>
    </p>
    <p>
     <img alt="" height="996" src="https://i-blog.csdnimg.cn/blog_migrate/b20f5c8a82749e5eb644edcd4b577c53.png" width="1200"/>
    </p>
    <h3 id="l%E3%80%81%E6%BA%90%E7%A0%81%E8%8E%B7%E5%8F%96%EF%BC%9A" style="background-color:transparent;">
     <strong>
      源码获取：
     </strong>
    </h3>
    <blockquote>
     <p>
      大家
      <span style="color:#fe2c24;">
       <strong>
        点赞、收藏、关注、评论
       </strong>
      </span>
      啦 、
      <strong>
       查看
      </strong>
      👇🏻
      <span style="color:#fe2c24;">
       <strong>
        获取微信联系方式
       </strong>
      </span>
      👇🏻
     </p>
     <p>
      <strong>
       精彩专栏
       <span style="color:#fe2c24;">
        推荐订阅
       </span>
       ：
      </strong>
      在
      <strong>
       下方专栏
      </strong>
      👇🏻
     </p>
     <p>
      <a href="https://blog.csdn.net/weixin_39709134/article/details/131338298" title="2022-2024年最全的计算机软件毕业设计选题大全：1000个热门选题推荐✅">
       2022-2024年最全的计算机软件毕业设计选题大全：1000个热门选题推荐✅
      </a>
     </p>
     <p>
      <a href="https://blog.csdn.net/weixin_39709134/category_11128297.html" title="Java项目精品实战案例《100套》">
       Java项目精品实战案例《100套》
      </a>
     </p>
     <p>
      <a href="https://blog.csdn.net/weixin_39709134/category_12022111.html?spm=1001.2014.3001.5482" title="Java微信小程序项目实战《100套》">
       Java微信小程序项目实战《100套》
      </a>
     </p>
     <p>
      <a href="https://blog.csdn.net/weixin_39709134/category_12352323.html" title="Python项目实战《100套》">
       Python项目实战《100套》
      </a>
     </p>
    </blockquote>
    <p>
    </p>
   </div>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>



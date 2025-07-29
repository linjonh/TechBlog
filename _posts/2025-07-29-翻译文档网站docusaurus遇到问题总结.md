---
title: "翻译文档网站docusaurus遇到问题总结"
date: "2025-07-29T17:33:47+08:00"
keywords: "创建Python类库"
categories: ['docusaurus文档翻译']
tags: ['文档翻译','docusaurus文档翻译']
image: "https://api.vvhan.com/api/bing?rand=sj&t=2025-07-29"
---
![](https://api.vvhan.com/api/bing?rand=sj&t=2025-07-29)
# 问题汇总
## 1、单引号

单引号容易被翻译成转义编码字符，对于md和mdx的导入和链接会产生影响。

## 2、超链接

`[]()`格式的超链接容易被翻译出现格式错误

还有就是有些超链接的地址出现问题。

## 3、文档tag标记被翻译了
如:
```html
<details>
<summary>标题</summary>
</details>
```

标签会被翻译成中文简体或繁体

## 4、资源图片引用

在多国语言翻译时，原来的资源图片等引用路径发生了变化。

如果引用更目录的可以使用@site/路径方式替换

## 5、import xx from xxx

在md或mdx里翻译软件容易翻译掉import语法

## 6、France的语言容易带单引号句子
<!-- truncate -->
<!-- more -->

## 7、remark-directive 的标记容易被翻译，需要修改还原回英文
如:

|item|中文|繁体|es西班牙语|日语|fr法语|韩语|pt葡萄牙|ru俄罗斯|de德语
|----|---|---|----|---|---|---|---|---|---|
|:::note|:::注意|:::註解|:::nota|:::注記 或者:::メモ 或者:::注|：：：|:::참고|pt|:::заметка或者:::Примечание|：::Hinweis
|:::caution|:::注意|:::注意|:::precaución|:::|:::attention|:::주의|:::cautela|:::Предостережение
|:::warning|:::警告|:::警告|:::|:::|:::avertissement|:::경고|pt|:::предупреждение
|:::tip|:::提示 或 :::提醒|:::consejo 或:::sugerencia|:::|:::ヒント|fr|:::팁|:::dica|:::совет或者::подсказка|
|:::info|:::信息|:::資訊|:::información|:::情報|fr|:::정보|pt|:::информация
|:::danger|:::危险|:::危險|:::peligro|jp:::|fr:::|:::위험|pt|:::опасность
....

## 8、tsx里import的是主目录的文件，不是翻译目录里的

在 Docusaurus 中，src/pages/index.tsx 是非文档类页面（即自定义页面），它不像 docs 或 blog 那样自动支持国际化（i18n），所以翻译流程需要手动集成 @docusaurus/Translate 组件或者使用 useTranslation() 钩子来进行处理。

## 9、标题，和左边栏标题翻译问题。

运行如下指令生成待翻译json
```bash
npm run write-translations
```
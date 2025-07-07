import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
import { pluginShiki } from '@rspress/plugin-shiki';
import { pluginFontOpenSans } from 'rspress-plugin-font-open-sans';
import readingTime from 'rspress-plugin-reading-time';
import pluginSitemap from 'rspress-plugin-sitemap';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  outDir: "out",
  title: 'TechBlog',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-icon.png',
    dark: '/rspress-icon.png',
  },
  logoText: 'TechBlog',
  // lang: 'zh',
  // locales: [
  //   {
  //     lang: 'zh',
  //     label: '简体中文',
  //   }
  // ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/linjonh',
      },
    ],
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    enableScrollToTop: true,
  },
  builderPlugins: [
    pluginGoogleAnalytics({
      // replace this with your Google tag ID
      id: 'G-QQED2VVKJ3',
    }),
  ],
  markdown: {
    highlightLanguages: [
      // 别名为 md, 全名为 markdown
      ['java', 'java'],
      ['kt', 'kotlin'],
      ['xml', 'xml-doc'],
    ],
    showLineNumbers: true,
  },
  search: {
    codeBlocks: true
  },
  plugins: [
    pluginShiki(), // 代码高亮，会降低编译速度
    pluginFontOpenSans(),
    readingTime({
      defaultLocale: 'zh-CN',
    }),
    pluginSitemap(
      {
        domain: "https://ai-taichi.web.app",
        defaultChangeFreq: 'weekly',
      }
    ),
  ],
});

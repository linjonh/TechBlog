import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
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
  // lang: 'zh-CN',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/',
      },
    ],
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
  },
  builderPlugins: [
    pluginGoogleAnalytics({
      // replace this with your Google tag ID
      id: 'G-QQED2VVKJ3',
    }),
  ],
});

import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
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
});

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-Hans',

      title: "UniversalPluginUpdater",
      description: "这里是 UniversalPluginUpdater 的官方网站。",

      themeConfig: {
        nav: [
          { text: '主页', link: './' },
          { text: '文档', link: 'https://docs.upu.dreamvoid.me' }
        ],

        sidebar: [
          {
            items: [
              { text: '首页', link: './' },
              { text: '下载', link: '/download' }
            ]
          }
        ],
      }
    },
    en: {
      label: 'English',
      lang: 'en',

      title: "UniversalPluginUpdater",
      description: "This is the official website for UniversalPluginUpdater.",

      themeConfig: {
        nav: [
          { text: 'Home', link: './' },
          { text: 'Docs', link: 'https://docs.upu.dreamvoid.me/en/' }
        ],

        sidebar: [
          {
            items: [
              { text: 'Home', link: './' },
              { text: 'Download', link: './download' }
            ]
          }
        ],
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DreamVoid/UniversalPluginUpdater' },
      { icon: 'modrinth', link: 'https://modrinth.com/plugin/upu' }
    ]
  },

  sitemap: {
    hostname: 'https://upu.dreamvoid.me'
  }
})

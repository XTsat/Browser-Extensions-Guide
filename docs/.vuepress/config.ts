import { defineUserConfig } from 'vuepress'
import { navbar, sidebar } from './configs'

const { defaultTheme } = require('@vuepress/theme-default')

const { searchPlugin } = require('@vuepress/plugin-search')

// const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/Browser-Guide/',

  head: [
    // [
    //   'link',
    //   {
    //     rel: 'icon',
    //     type: 'image/png',
    //     sizes: '16x16',
    //     href: `/logo/favicon.ico`,
    //   },
    // ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/logo/favicon.ico`,
      },
    ],
    // ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    // ['meta', { name: 'application-name', content: 'VuePress' }],
    // ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    // [
    //   'meta',
    //   { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    // ],
    // [
    //   'link',
    //   { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    // ],
    // [
    //   'link',
    //   {
    //     rel: 'mask-icon',
    //     href: '/images/icons/safari-pinned-tab.svg',
    //     color: '#3eaf7c',
    //   },
    // ],
    // ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: '简体中文',
      title: '浏览器指南',
      description: '帮助你优化出适合自己的浏览器',
    },
    '/en/': {
      lang: 'English',
      title: 'Browser-Guide',
      description: 'Help you optimize your browser for you',
    },
  },

  theme: defaultTheme({
    // 在这里进行配置
    // logo: '/logo/Steam++ico.svg',
    
    repo: 'XTsat/SteamTools-Guide',

    docsBranch: 'VuePress',
    docsDir: 'docs',
    
    // theme-level locales config
    locales: {
      
      '/en/': {
        // navbar
        navbar: navbar.en,
        selectLanguageName: 'English',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
  
        // sidebar
        sidebar: sidebar.en,
  
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
      
      '/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: 'language',
        selectLanguageAriaLabel: 'language',

        repoLabel: 'GitHub文档',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '最后更新时间',
        contributorsText: '编辑人',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '找不到该页面',
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },


    // themePlugins: {
    //   // only enable git plugin in production mode
    //   git: isProd,
    //   // use shiki plugin in production mode instead
    //   prismjs: !isProd,
    // },
  }),

  plugins: [
    searchPlugin({
      // 配置项
      locales: {
        '/en/': {
          placeholder: 'Search',
          hotKeys: ['/']
        },
        '/': {
          placeholder: '搜索文档',
          hotKeys: ['/']
        }
      },
    }),
  ],

  // 旧的插件配置方式暂时保留注释
  
  // plugins: [
  //   [
  //     searchPlugin({
  //       locales: {
  //         '/en/': {
  //           placeholder: 'Search',
  //           hotKeys: ['/']
  //         },
  //         '/': {
  //           placeholder: '搜索文档',
  //           hotKeys: ['/']
  //         }
  //       },
  //     }),
  //   ],
    // [
    //   "vuepress-plugin-auto-sidebar",
    //   {
    //     title: {
    //       // 更多选项: 
    //       // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
    //       mode: "titlecase"
    //     },
    //     removeEmptyGroup: true,
    //   }
    // ],

    // ['vuepress-plugin-auto-sidebar', false] // disabled.
  // ],
}
)
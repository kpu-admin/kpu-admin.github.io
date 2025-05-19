import { fileURLToPath, URL } from 'node:url'
import tabsPlugin from '@red-asuka/vitepress-plugin-tabs'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

export default defineConfig({
  title: 'Kpu-admin 官方文档',
  description: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite 技术栈。',
  lang: 'zh-CN',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { 'http-equiv': 'Expires', 'content': '0' }],
    ['meta', { 'http-equiv': 'Pragma', 'content': 'no-cache' }],
    ['meta', { 'http-equiv': 'Cache-control', 'content': 'no-cache' }],
    ['meta', { 'http-equiv': 'Cache', 'content': 'no-cache' }],
    ['meta', { name: 'keywords', content: 'kpu-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
    ['keywords', { content: 'kpu-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
    ['description', { content: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite 技术栈。' }],
    ['script', {}, `
var _hmt = _hmt || [];
_hmt.push(['_requirePlugin', 'UrlChangeTracker', {
  shouldTrackUrlChange: function(newPath, oldPath) {
    return newPath && oldPath;
  }
}]);
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7a35aa5e0c6724f3515db51516fbd8fe";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
    `],
    ['script', {}, `
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "rm3wrxfdsb");
    `],
  ],
  themeConfig: {
    logo: '/logo.svg',
    footer: {
      copyright: 'Copyright © 2020-present Kpu-admin',
    },
    nav: [
      {
        text: '文档',
        items: [
          {
            text: '指南',
            link: '/guide/intro',
          },
          {
            text: '组件',
            link: '/components/index',
          },

          {
            text: '历史版本文档',
            items: [
              // {
              //   text: 'v4 (Vue3版本)',
              //   link: 'https://kpu-admin.kpui.top/v4-docs/',
              // },

            ],
          },
        ],
      },
      {
        text: '在线演示',
        items: [
          {
            text: '地址',
            link: 'https://kpu-admin.kpui.top/kpu-example',
          },
          {
            text: '备用地址',
            link: 'https://kpu-admin.pages.dev/kpu-example',
          },
        ],
      },
      {
        text: '技术支持',
        link: '/support',
      },
      {
        text: '下载 / 定制开发',
        items: [
          {
            text: '下载',
            link: 'https://github.com/Kpu-admin/web/releases',
          },
          {
            text: '定制开发',
            link: '/customize',
          },
        ],
      },
      {
        text: '💖 友情推荐',
        items: [
          {
            text: 'VForm 低代码表单',
            link: 'https://www.vform666.com',
          },
          {
            text: 'FormCreate 可视化表单设计器',
            link: 'https://form-create.com',
          },
          {
            text: 'Vexip UI 组件库',
            link: 'https://www.vexipui.com/zh-CN',
          },
          {
            text: 'MineAdmin 开箱即用后台系统',
            link: 'https://github.com/mineadmin/mineadmin',
          },
          {
            text: 'Go-Ldap-Admin openLDAP后台管理项目',
            link: 'https://ldapdoc.eryajf.net',
          },
          {
            text: '交换友链 ?',
            link: '/links',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1663266323098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2880" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2881"></path></svg>',
        },
        link: 'https://gitee.com/Kpu-admin/web',
      },
      {
        icon: 'github',
        link: 'https://github.com/Kpu-admin/web',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '文档说明', link: '/guide/intro' },
            { text: '为什么选择我们 ?', link: '/guide/why' },
            { text: '更新日志', link: '/guide/changelog' },
          ],
          collapsed: false,
        },
        {
          text: '入门',
          items: [
            { text: '准备工作', link: '/guide/ready' },
            { text: '开始', link: '/guide/start' },
            { text: '代码规范', link: '/guide/coding-standard' },
            { text: '术语', link: '/guide/term' },
            { text: '配置', link: '/guide/configure' },
            { text: '开发者工具', link: '/guide/devtools' },
            { text: '路由（导航）', link: '/guide/router' },
            { text: '与服务端交互', link: '/guide/axios' },
            { text: '全局状态管理', link: '/guide/store' },
            { text: '资源', link: '/guide/resources' },
            { text: '图标', link: '/guide/icon' },
            { text: '构建与预览', link: '/guide/build' },
          ],
          collapsed: false,
        },
        {
          text: '进阶',
          items: [
            { text: '登录相关', link: '/guide/login' },
            { text: '权限', link: '/guide/permission' },
            { text: '主页', link: '/guide/home' },
            { text: '布局', link: '/guide/layout' },
            { text: '主题', link: '/guide/theme' },
            { text: '动态标题', link: '/guide/title' },
            { text: '导航菜单', link: '/guide/menu' },
            { text: '顶栏', link: '/guide/topbar', items: [
              { text: '标签栏', link: '/guide/tabbar' },
              { text: '工具栏', link: '/guide/toolbar' },
            ] },
            { text: '快捷键', link: '/guide/hotkeys' },
            { text: '版权信息', link: '/guide/copyright' },
          ],
          collapsed: false,
        },
        {
          text: '高级',
          items: [
            { text: '页面缓存', link: '/guide/keep-alive' },
            { text: '国际化', link: '/guide/i18n' },
            { text: '预留插槽', link: '/guide/slots' },
            { text: 'RTL 模式', link: '/guide/rtl' },
            { text: '代码文件自动生成', link: '/guide/plop' },
            { text: '标准模块', link: '/guide/plop-module' },
            { text: '常用 API', link: '/guide/api' },
            { text: '私有 Storage 数据', link: '/guide/storage' },
            { text: '首屏 Loading', link: '/guide/loading' },
            { text: '页面水印', link: '/guide/watermark' },
            { text: '检查更新', link: '/guide/check-updates' },
            { text: '错误日志', link: '/guide/error-log' },
            { text: '自定义字体', link: '/guide/font' },
            { text: '用户偏好设置', link: '/guide/preferences' },
            { text: 'JSX', link: '/guide/jsx' },
            { text: '基于文件系统的路由', link: '/guide/file-system-route' },
            { text: '使用 Composition API 开发', link: '/guide/vue3-composition-api' },
            {
              text: '替换 UI 组件库',
              items: [
                { text: '替换为 Ant Design Vue', link: '/guide/replace-to-antd' },
                { text: '替换为 Arco Design Vue', link: '/guide/replace-to-arco' },
                { text: '替换为 Naive UI', link: '/guide/replace-to-naive' },
                { text: '替换为 TDesign', link: '/guide/replace-to-tdesign' },
                { text: '替换为 Vexip UI', link: '/guide/replace-to-vexip' },
                { text: '替换为 iDux', link: '/guide/replace-to-idux' },
              ],
              collapsed: true,
            },
          ],
          collapsed: false,
        },
        {
          text: '其它',
          items: [
            { text: '框架更新', link: '/guide/upgrade' },
            { text: '从 vue-element-admin 迁移', link: '/guide/vea-to-fa' },
            { text: '常见问题', link: '/guide/q-a' },
          ],
          collapsed: false,
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '介绍', link: '/components/' },
          ],
        },
        {
          text: '内建组件',
          items: [
            { text: 'KpuAnimatedBeam 动画光束', link: '/components/kpu-animated-beam' },
            { text: 'KpuAnimatedCountTo 动画计数', link: '/components/kpu-animated-count-to' },
            { text: 'KpuAuth 鉴权', link: '/components/kpu-auth' },
            { text: 'KpuAvatar 头像', link: '/components/kpu-avatar' },
            { text: 'KpuBadge 徽章', link: '/components/kpu-badge' },
            { text: 'KpuBlurReveal 模糊显示', link: '/components/kpu-blur-reveal' },
            { text: 'KpuButton 按钮', link: '/components/kpu-button' },
            { text: 'KpuCard 卡片', link: '/components/kpu-card' },
            { text: 'KpuCarousel 轮播图', link: '/components/kpu-carousel' },
            { text: 'KpuCheckbox 复选框', link: '/components/kpu-checkbox' },
            { text: 'KpuCodePreview 代码预览', link: '/components/kpu-code-preview' },
            { text: 'KpuCode 代码块', link: '/components/kpu-code' },
            { text: 'KpuCountTo 计数到', link: '/components/kpu-count-to' },
            { text: 'KpuDigitalCard 数字卡片', link: '/components/kpu-digital-card' },
            { text: 'KpuDivider 分割线', link: '/components/kpu-divider' },
            { text: 'KpuDrawer 抽屉', link: '/components/kpu-drawer' },
            { text: 'KpuDropdown 下拉菜单', link: '/components/kpu-dropdown' },
            { text: 'KpuFixedActionBar 固定底部操作栏', link: '/components/kpu-fixed-action-bar' },
            { text: 'KpuFlipCard 翻转卡片', link: '/components/kpu-flip-card' },
            { text: 'KpuFlipWords 翻转文字', link: '/components/kpu-flip-words' },
            { text: 'KpuGlowyCard 发光卡片', link: '/components/kpu-glowy-card' },
            { text: 'KpuGradientButton 渐变按钮', link: '/components/kpu-gradient-button' },
            { text: 'KpuHoverCard 悬浮卡片', link: '/components/kpu-hover-card' },
            { text: 'KpuIcon 图标', link: '/components/kpu-icon' },
            { text: 'KpuIconPicker 图标选择器', link: '/components/kpu-icon-picker' },
            { text: 'KpuInput 输入框', link: '/components/kpu-input' },
            { text: 'KpuInteractiveButton 交互式按钮', link: '/components/kpu-interactive-button' },
            { text: 'KpuKbd 键盘', link: '/components/kpu-kbd' },
            { text: 'KpuLayoutContainer 布局容器', link: '/components/kpu-layout-container' },
            { text: 'KpuLinkPreview 链接预览', link: '/components/kpu-link-preview' },
            { text: 'KpuLoading 加载遮罩', link: '/components/kpu-loading' },
            { text: 'KpuMarquee 跑马灯', link: '/components/kpu-marquee' },
            { text: 'KpuModal 弹窗', link: '/components/kpu-modal' },
            { text: 'KpuPageHeader 页头', link: '/components/kpu-page-header' },
            { text: 'KpuPageMain 内容块', link: '/components/kpu-page-main' },
            { text: 'KpuPagination 分页', link: '/components/kpu-pagination' },
            { text: 'KpuParticlesBg 粒子背景', link: '/components/kpu-particles-bg' },
            { text: 'KpuPasswordStrength 密码强度', link: '/components/kpu-password-strength' },
            { text: 'KpuPatternBg 图案背景', link: '/components/kpu-pattern-bg' },
            { text: 'KpuPinInput 数字输入框', link: '/components/kpu-pin-input' },
            { text: 'KpuPopover 浮动面板', link: '/components/kpu-popover' },
            { text: 'KpuScratchOff 刮刮乐', link: '/components/kpu-scratch-off' },
            { text: 'KpuScrollArea 滚动区域', link: '/components/kpu-scroll-area' },
            { text: 'KpuSearchBar 搜索面板', link: '/components/kpu-search-bar' },
            { text: 'KpuSelect 选择器', link: '/components/kpu-select' },
            { text: 'KpuSlider 滑块', link: '/components/kpu-slider' },
            { text: 'KpuSparklesText 闪烁文字', link: '/components/kpu-sparkles-text' },
            { text: 'KpuSparkline 迷你图', link: '/components/kpu-sparkline' },
            { text: 'KpuSpotlightCard 聚光卡片', link: '/components/kpu-spotlight-card' },
            { text: 'KpuStorageBox 储存箱', link: '/components/kpu-storage-box' },
            { text: 'KpuSwitch 开关', link: '/components/kpu-switch' },
            { text: 'KpuTabs 标签页', link: '/components/kpu-tabs' },
            { text: 'KpuTextHighlight 文字高亮', link: '/components/kpu-text-highlight' },
            { text: 'KpuTimeAgo 可阅读时间', link: '/components/kpu-time-ago' },
            { text: 'KpuTimeline 时间线', link: '/components/kpu-timeline' },
            { text: 'KpuTooltip 文字提示', link: '/components/kpu-tooltip' },
            { text: 'KpuToast 轻提示', link: '/components/kpu-toast' },
            { text: 'KpuTrend 趋势标记', link: '/components/kpu-trend' },
          ],
        },
        {
          text: '扩展组件',
          items: [
            { text: 'ImageUpload 单图上传', link: '/components/image-upload' },
            { text: 'ImagesUpload 多图上传', link: '/components/images-upload' },
            { text: 'FileUpload 文件上传', link: '/components/file-upload' },
            { text: 'ImagePreview 图片预览', link: '/components/image-preview' },
            { text: 'PcasCascader 省市区街道联动', link: '/components/pcas-cascader' },
          ],
        },
      ],
      '/': [
        {
          text: '',
          items: [
            { text: '定制开发', link: '/customize' },
            { text: '技术支持', link: '/support' },
            { text: '我要交换友链', link: '/links' },
          ],
        },
      ],
    },
    outline: 'deep',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
  markdown: {
    config: (md) => {
      tabsPlugin(md)
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHome\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/custom-home/index.vue', import.meta.url),
          ),
        },
      ],
    },
    plugins: [
      UnoCSS(),
      llmstxt(),
    ],
  },
})

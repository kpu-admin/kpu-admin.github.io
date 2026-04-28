import{_ as s,o as n,i as p,aE as e}from"./chunks/framework.EluC9o-0.js";const l="/env.VITE_APP_SETTING.gif",u=JSON.parse('{"title":"环境变量","description":"","frontmatter":{},"headers":[],"relativePath":"guide/env.md","filePath":"guide/env.md"}'),i={name:"guide/env.md"};function t(o,a,c,r,d,h){return n(),p("div",null,[...a[0]||(a[0]=[e(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /guide/env.md for this page in Markdown format</div><h1 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h1><p>环境变量配置文件在 <code>apps/&lt;app&gt;/</code> 根目录，默认提供三套配置，分别为：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-8Mpfm" id="tab-UhHRyAv" checked><label data-title=".env.development 开发环境" for="tab-UhHRyAv">.env.development 开发环境</label><input type="radio" name="group-8Mpfm" id="tab-a216c_c"><label data-title=".env.test 测试环境" for="tab-a216c_c">.env.test 测试环境</label><input type="radio" name="group-8Mpfm" id="tab-F8XKHFj"><label data-title=".env.production 生产环境" for="tab-F8XKHFj">.env.production 生产环境</label></div><div class="blocks"><div class="language-env vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span># 应用配置面板</span></span>
<span class="line"><span># Application configuration panel</span></span>
<span class="line"><span>VITE_APP_SETTING = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 网站标题</span></span>
<span class="line"><span># Website title</span></span>
<span class="line"><span>VITE_APP_TITLE = Kpu-admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 网络请求地址，应用于 axios 的 baseURL</span></span>
<span class="line"><span># Network request address, applied to axios&#39;s baseURL</span></span>
<span class="line"><span>VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span></span></span>
<span class="line"><span># localStorage/sessionStorage 前缀</span></span>
<span class="line"><span># localStorage/sessionStorage prefix</span></span>
<span class="line"><span>VITE_APP_STORAGE_PREFIX = ka_dev_</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 调试工具，可设置 eruda 或 vconsole</span></span>
<span class="line"><span># Debugging tool, can set eruda or vconsole</span></span>
<span class="line"><span>VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 以下配置仅在开发环境生效 =====</span></span>
<span class="line"><span># ===== The following configuration is only effective in the development environment. =====</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启用代理</span></span>
<span class="line"><span># Enable proxy</span></span>
<span class="line"><span>VITE_ENABLE_PROXY = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启用 Vue 开发工具</span></span>
<span class="line"><span># Enable Vue DevTools</span></span>
<span class="line"><span>VITE_ENABLE_VUE_DEVTOOLS = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启用 turbo console</span></span>
<span class="line"><span># Enable turbo console</span></span>
<span class="line"><span>VITE_ENABLE_TURBO_CONSOLE = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动编辑器，用于 vite-plugin-vue-devtools 和 unplugin-turbo-console</span></span>
<span class="line"><span># 支持的编辑器 https://github.com/yyx990803/launch-editor#supported-editors</span></span>
<span class="line"><span># Launch the editor for vite-plugin-vue-devtools and unplugin-turbo-console</span></span>
<span class="line"><span># Supported editors https://github.com/yyx990803/launch-editor#supported-editors</span></span>
<span class="line"><span>VITE_LAUNCH_EDITOR = code</span></span></code></pre></div><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span># 应用配置面板</span></span>
<span class="line"><span># Application configuration panel</span></span>
<span class="line"><span>VITE_APP_SETTING = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 网站标题</span></span>
<span class="line"><span># Website title</span></span>
<span class="line"><span>VITE_APP_TITLE = Kpu-admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 网络请求地址，应用于 axios 的 baseURL</span></span>
<span class="line"><span># Network request address, applied to axios&#39;s baseURL</span></span>
<span class="line"><span>VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span></span></span>
<span class="line"><span># localStorage/sessionStorage 前缀</span></span>
<span class="line"><span># localStorage/sessionStorage prefix</span></span>
<span class="line"><span>VITE_APP_STORAGE_PREFIX = ka_test_</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 调试工具，可设置 eruda 或 vconsole</span></span>
<span class="line"><span># Debugging tool, can set eruda or vconsole</span></span>
<span class="line"><span>VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 以下配置仅在测试环境生效 =====</span></span>
<span class="line"><span># ===== The following configuration is only effective in the test environment. =====</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 禁用浏览器开发者工具</span></span>
<span class="line"><span># Disable browser developer tools</span></span>
<span class="line"><span>VITE_APP_DISABLE_DEVTOOL = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启用假数据</span></span>
<span class="line"><span># Enable build fake data</span></span>
<span class="line"><span>VITE_BUILD_FAKE = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启用 sourcemap</span></span>
<span class="line"><span># Enable build sourcemap</span></span>
<span class="line"><span>VITE_BUILD_SOURCEMAP = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 压缩方式，支持 gzip 和 brotli</span></span>
<span class="line"><span># Build compression method, supports gzip and brotli</span></span>
<span class="line"><span>VITE_BUILD_COMPRESS =</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 构建后生成存档，支持 zip 和 tar</span></span>
<span class="line"><span># Generate archive after build, supports zip and tar</span></span>
<span class="line"><span>VITE_BUILD_ARCHIVE =</span></span></code></pre></div><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span># 应用配置面板</span></span>
<span class="line"><span># Application configuration panel</span></span>
<span class="line"><span>VITE_APP_SETTING = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 网站标题</span></span>
<span class="line"><span># Website title</span></span>
<span class="line"><span>VITE_APP_TITLE = Kpu-admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 网络请求地址，应用于 axios 的 baseURL</span></span>
<span class="line"><span># Network request address, applied to axios&#39;s baseURL</span></span>
<span class="line"><span>VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span></span></span>
<span class="line"><span># localStorage/sessionStorage 前缀</span></span>
<span class="line"><span># localStorage/sessionStorage prefix</span></span>
<span class="line"><span>VITE_APP_STORAGE_PREFIX = ka_</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 调试工具，可设置 eruda 或 vconsole</span></span>
<span class="line"><span># Debugging tool, can set eruda or vconsole</span></span>
<span class="line"><span>VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 以下配置仅在生产环境生效 =====</span></span>
<span class="line"><span># ===== The following configuration is only effective in the production environment. =====</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 禁用浏览器开发者工具</span></span>
<span class="line"><span># Disable browser developer tools</span></span>
<span class="line"><span>VITE_APP_DISABLE_DEVTOOL = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启用假数据</span></span>
<span class="line"><span># Enable build fake data</span></span>
<span class="line"><span>VITE_BUILD_FAKE = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启用 sourcemap</span></span>
<span class="line"><span># Enable build sourcemap</span></span>
<span class="line"><span>VITE_BUILD_SOURCEMAP = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 压缩方式，支持 gzip 和 brotli</span></span>
<span class="line"><span># Build compression method, supports gzip and brotli</span></span>
<span class="line"><span>VITE_BUILD_COMPRESS = gzip,brotli</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 构建后生成存档，支持 zip 和 tar</span></span>
<span class="line"><span># Generate archive after build, supports zip and tar</span></span>
<span class="line"><span>VITE_BUILD_ARCHIVE =</span></span></code></pre></div></div></div><p>开发者可根据实际业务需求进行扩展，详细可阅读 <a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">Vite - 环境变量和模式</a> 章节。</p><h2 id="通用配置项" tabindex="-1">通用配置项 <a class="header-anchor" href="#通用配置项" aria-label="Permalink to &quot;通用配置项&quot;">​</a></h2><p>即不管是在开发、测试，还是生产环境都会使用到。</p><h3 id="vite-app-setting" tabindex="-1">VITE_APP_SETTING <a class="header-anchor" href="#vite-app-setting" aria-label="Permalink to &quot;VITE\\_APP\\_SETTING&quot;">​</a></h3><p><img src="`+l+`" alt="" data-zoomable=""></p><p>应用配置面板的目的是方便开发者在开发阶段调试框架提供的各类配置参数，生产环境下默认关闭，也建议关闭。</p><p>如果希望提供用户一些个性化的能力，可以开启<a href="./settings/app.html#用户偏好设置">用户偏好设置</a>。</p><h3 id="vite-app-title" tabindex="-1">VITE_APP_TITLE <a class="header-anchor" href="#vite-app-title" aria-label="Permalink to &quot;VITE\\_APP\\_TITLE&quot;">​</a></h3><p>网站标题，会在浏览器标题、首屏loading、登录页和导航菜单处显示。</p><h3 id="vite-app-api-baseurl" tabindex="-1">VITE_APP_API_BASEURL <a class="header-anchor" href="#vite-app-api-baseurl" aria-label="Permalink to &quot;VITE\\_APP\\_API\\_BASEURL&quot;">​</a></h3><p><a href="./axios.html">扩展阅读</a></p><h3 id="vite-app-storage-prefix-x20" tabindex="-1">VITE_APP_STORAGE_PREFIX <a class="header-anchor" href="#vite-app-storage-prefix-x20" aria-label="Permalink to &quot;VITE\\_APP\\_STORAGE\\_PREFIX&amp;#x20;&quot;">​</a></h3><p><a href="./storage.html">扩展阅读</a></p><h3 id="vite-app-debug-tool" tabindex="-1">VITE_APP_DEBUG_TOOL <a class="header-anchor" href="#vite-app-debug-tool" aria-label="Permalink to &quot;VITE\\_APP\\_DEBUG\\_TOOL&quot;">​</a></h3><p>方便在不支持启用浏览器开发者工具的环境，启用一个轻量级的调试工具。</p><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span># 调试工具 eruda</span></span>
<span class="line"><span>VITE_APP_DEBUG_TOOL = eruda</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 调试工具 vconsole</span></span>
<span class="line"><span>VITE_APP_DEBUG_TOOL = vconsole</span></span></code></pre></div><h2 id="开发环境配置项" tabindex="-1">开发环境配置项 <a class="header-anchor" href="#开发环境配置项" aria-label="Permalink to &quot;开发环境配置项&quot;">​</a></h2><h3 id="vite-enable-proxy" tabindex="-1">VITE_ENABLE_PROXY <a class="header-anchor" href="#vite-enable-proxy" aria-label="Permalink to &quot;VITE\\_ENABLE\\_PROXY&quot;">​</a></h3><p><a href="./axios.html#跨域处理">扩展阅读</a></p><h3 id="vite-enable-vue-devtools" tabindex="-1">VITE_ENABLE_VUE_DEVTOOLS <a class="header-anchor" href="#vite-enable-vue-devtools" aria-label="Permalink to &quot;VITE\\_ENABLE\\_VUE\\_DEVTOOLS&quot;">​</a></h3><p><a href="./devtools.html#vue-开发工具">扩展阅读</a></p><h3 id="vite-enable-turbo-console" tabindex="-1">VITE_ENABLE_TURBO_CONSOLE <a class="header-anchor" href="#vite-enable-turbo-console" aria-label="Permalink to &quot;VITE\\_ENABLE\\_TURBO\\_CONSOLE&quot;">​</a></h3><p><a href="./devtools.html#console-工具">扩展阅读</a></p><h3 id="vite-launch-editor" tabindex="-1">VITE_LAUNCH_EDITOR <a class="header-anchor" href="#vite-launch-editor" aria-label="Permalink to &quot;VITE\\_LAUNCH\\_EDITOR&quot;">​</a></h3><p><a href="./devtools.html#默认启动-ide">扩展阅读</a></p><h2 id="测试-生产环境" tabindex="-1">测试/生产环境 <a class="header-anchor" href="#测试-生产环境" aria-label="Permalink to &quot;测试/生产环境&quot;">​</a></h2><h3 id="vite-app-disable-devtool-x20" tabindex="-1">VITE_APP_DISABLE_DEVTOOL <a class="header-anchor" href="#vite-app-disable-devtool-x20" aria-label="Permalink to &quot;VITE\\_APP\\_DISABLE\\_DEVTOOL&amp;#x20;&quot;">​</a></h3><p>开启后将禁止通过右键、F12或任意方式打开浏览器开发者工具。</p><h3 id="vite-build-fake" tabindex="-1">VITE_BUILD_FAKE <a class="header-anchor" href="#vite-build-fake" aria-label="Permalink to &quot;VITE\\_BUILD\\_FAKE&quot;">​</a></h3><p><a href="./axios.html#生产环境">扩展阅读</a></p><h3 id="vite-build-sourcemap" tabindex="-1">VITE_BUILD_SOURCEMAP <a class="header-anchor" href="#vite-build-sourcemap" aria-label="Permalink to &quot;VITE\\_BUILD\\_SOURCEMAP&quot;">​</a></h3><p>开启后生成的构建产物里包含 sourcemap 文件</p><h3 id="vite-build-compress" tabindex="-1">VITE_BUILD_COMPRESS <a class="header-anchor" href="#vite-build-compress" aria-label="Permalink to &quot;VITE\\_BUILD\\_COMPRESS&quot;">​</a></h3><p>可在构建时生成 <code>.gz</code> 和 <code>.br</code> 文件。</p><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span># 单独开启 gzip</span></span>
<span class="line"><span>VITE_BUILD_COMPRESS = gzip</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 单独开启 brotli ，brotli 是比 gzip 压缩率更高的算法</span></span>
<span class="line"><span>VITE_BUILD_COMPRESS = brotli</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 也可以都开启，会同时生成 .gz 和 .br 文件</span></span>
<span class="line"><span>VITE_BUILD_COMPRESS = gzip,brotli</span></span></code></pre></div><p>两者均需要 nginx 安装指定模块并开启后才会生效。</p><h3 id="vite-build-archive" tabindex="-1">VITE_BUILD_ARCHIVE <a class="header-anchor" href="#vite-build-archive" aria-label="Permalink to &quot;VITE\\_BUILD\\_ARCHIVE&quot;">​</a></h3><p>在构建完后成生成 <code>.zip</code> 或 <code>.tar.gz</code> 文件。</p><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span># 生成 zip</span></span>
<span class="line"><span>VITE_BUILD_ARCHIVE = zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 生成 tar.gz</span></span>
<span class="line"><span>VITE_BUILD_ARCHIVE = tar</span></span></code></pre></div>`,43)])])}const E=s(i,[["render",t]]);export{u as __pageData,E as default};

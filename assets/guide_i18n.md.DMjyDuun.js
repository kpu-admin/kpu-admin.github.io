import{_ as i,c as a,o as n,ay as l}from"./chunks/framework.DW5dc1Af.js";const h="/i18n-ally.png",c=JSON.parse('{"title":"国际化","description":"","frontmatter":{},"headers":[],"relativePath":"guide/i18n.md","filePath":"guide/i18n.md"}'),e={name:"guide/i18n.md"};function t(p,s,k,d,r,E){return n(),a("div",null,s[0]||(s[0]=[l('<h1 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>该特性由 <a href="https://vue-i18n.intlify.dev/" target="_blank" rel="noreferrer">vue-i18n</a> 提供技术支持。</p></div><h2 id="vscode-扩展" tabindex="-1">vscode 扩展 <a class="header-anchor" href="#vscode-扩展" aria-label="Permalink to &quot;vscode 扩展&quot;">​</a></h2><p>如果使用 vscode 进行开发，推荐安装 <a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noreferrer">i18n Ally</a> 这个扩展。</p><p>安装该扩展后，代码里可以实时查看对应语言的内容。</p><p><img src="'+h+`" alt="" data-zoomable=""></p><h2 id="默认语言" tabindex="-1">默认语言 <a class="header-anchor" href="#默认语言" aria-label="Permalink to &quot;默认语言&quot;">​</a></h2><p>在应用配置中设置默认语言，可选设置的值参考 <code>/src/locales/lang/</code> 目录下文件名，留空则会根据浏览器语言自动判断，如果找不到对应的语言则使用 <strong>中文(简体)</strong> 兜底。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 默认语言</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@默认值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> \`&#39;&#39;\` 跟随浏览器语言设置</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@可选值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 参考 \`/src/locales/index.ts\` 里的语言列表</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    defaultLang: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="语言包" tabindex="-1">语言包 <a class="header-anchor" href="#语言包" aria-label="Permalink to &quot;语言包&quot;">​</a></h2><p>框架自身的语言包存放在 <code>/src/locales/lang/</code> 目录下，如果需要新增某个语言，请在该目录下新建一个 json 文件，文件名为语言代码，比如 <code>ja.json</code> 代表日文，并在 <code>/src/locales/index.ts</code> 里增加：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> localesName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> messages) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (key) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;zh-cn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      localesName[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;中文(简体)&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      break</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;zh-tw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      localesName[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;中文(繁體)&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      break</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      localesName[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;English&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      break</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ja&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      localesName[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;日本語&#39;</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      break</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>同时因为 Element Plus 本身也有自己的语言包，所以在做国际化支持的时候，框架的语言包和 Element Plus 的语言包需要进行数据合并，可<a href="https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang" target="_blank" rel="noreferrer">点击这里</a>查看 Element Plus 的语言包文件。</p><p>假设你已经在 <code>/src/locales/lang/</code> 目录下新增并配置好了一个日文语言包 <code>ja.json</code> ，然后你需要到 <code>/src/ui/provider/index.ts</code> 文件里做以下调整：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zhCN </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/es/locale/lang/zh-cn.mjs&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zhTW </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/es/locale/lang/zh-tw.mjs&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> en </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/es/locale/lang/en.mjs&#39;</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ja </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/es/locale/lang/ja.mjs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 此处的对象属性和 src/locales/index.ts 中的 messages 对象属性一一对应</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> locales</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;zh-cn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: zhCN,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;zh-tw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: zhTW,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: en,</span></span>
<span class="line diff add"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;ja&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ja </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="路由设置" tabindex="-1">路由设置 <a class="header-anchor" href="#路由设置" aria-label="Permalink to &quot;路由设置&quot;">​</a></h2><p>以中文(简体)为例，打开 <code>/src/locales/lang/zh-cn.json</code> 文件可以看到路由相关的配置，在 <code>route</code> 对象里可以扩展需要开启国际化支持的路由。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;route&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;页面标题&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果需要新增某个路由的国际化支持，光设置好中文(简体)的还不行，其它语言包文件里也要同步添加。当都设置好后，可在该路由的 <code>title</code> 参数上直接设置对应 key 值，例如：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;route.page&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><h2 id="框架设置" tabindex="-1">框架设置 <a class="header-anchor" href="#框架设置" aria-label="Permalink to &quot;框架设置&quot;">​</a></h2><p>以中文(简体)为例，打开 <code>/src/locales/lang/zh-cn.json</code> 文件可以看到框架相关的配置，在 <code>app</code> 对象里的就是框架部分的语言信息，如果需要对框架进行二次开发，请在这里扩展。</p><h2 id="单页组件" tabindex="-1">单页组件 <a class="header-anchor" href="#单页组件" aria-label="Permalink to &quot;单页组件&quot;">​</a></h2><p>如果每个页面都要做国际化支持，那语言包文件就会变得无比庞大且难以维护，推荐在每个页面组件里使用 <code>&lt;i18n&gt;</code> 自定义块进行语言维护，可访问 <code>/src/views/feature_example/i18n.vue</code> 查看示例。</p><p>更多 <a href="https://vue-i18n.intlify.dev/" target="_blank" rel="noreferrer">vue-i18n</a> 的使用技巧请参考官方文档。</p><h2 id="与服务端交互" tabindex="-1">与服务端交互 <a class="header-anchor" href="#与服务端交互" aria-label="Permalink to &quot;与服务端交互&quot;">​</a></h2><p>所有的请求均会在请求头里带上 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language" target="_blank" rel="noreferrer"><code>Accept-Language</code></a> ，后端可根据这一状态信息做动态数据国际化处理。</p><h2 id="关闭国际化" tabindex="-1">关闭国际化 <a class="header-anchor" href="#关闭国际化" aria-label="Permalink to &quot;关闭国际化&quot;">​</a></h2><p>如果不想开启国际化，可参考以下设置，该设置表示关闭语言选择器，并以中文(简体)显示。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    defaultLang: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zh-cn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  toolbar: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    i18n: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,30)]))}const o=i(e,[["render",t]]);export{c as __pageData,o as default};

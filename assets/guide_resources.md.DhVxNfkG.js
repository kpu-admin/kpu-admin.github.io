import{_ as i,c as a,o as n,ay as h}from"./chunks/framework.DW5dc1Af.js";const g=JSON.parse('{"title":"资源","description":"","frontmatter":{},"headers":[],"relativePath":"guide/resources.md","filePath":"guide/resources.md"}'),t={name:"guide/resources.md"};function l(p,s,e,k,E,r){return n(),a("div",null,s[0]||(s[0]=[h(`<h1 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h1><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><h3 id="全局公共" tabindex="-1">全局公共 <a class="header-anchor" href="#全局公共" aria-label="Permalink to &quot;全局公共&quot;">​</a></h3><p>全局公共图片存放在 <code>/src/assets/images/</code> 目录下，可自行新建文件夹分类管理。</p><h3 id="局部私有" tabindex="-1">局部私有 <a class="header-anchor" href="#局部私有" aria-label="Permalink to &quot;局部私有&quot;">​</a></h3><p>局部私有图片建议采用就近原则，你可以在需要的模块文件夹下建立一个 <code>images</code> 文件夹，专门用于存放局部私有图片。</p><h2 id="样式" tabindex="-1">样式 <a class="header-anchor" href="#样式" aria-label="Permalink to &quot;样式&quot;">​</a></h2><h3 id="全局公共-1" tabindex="-1">全局公共 <a class="header-anchor" href="#全局公共-1" aria-label="Permalink to &quot;全局公共&quot;">​</a></h3><p>全局公共样式存放在 <code>/src/assets/styles/</code> 目录下，可自行新建文件，并在 <code>/src/main.ts</code> 中引入即可。</p><p>此目录下还有一个特殊目录，即 <code>/src/assets/styles/resources/</code> ，这是全局 SCSS 资源目录，你可以在该目录下编写变量、函数、混合等支持 SCSS 特性的代码。</p><h3 id="局部私有-1" tabindex="-1">局部私有 <a class="header-anchor" href="#局部私有-1" aria-label="Permalink to &quot;局部私有&quot;">​</a></h3><p>基于单文件组件规范，局部私有样式建议直接在 <code>.vue</code> 文件中编写，框架集成了 UnoCSS / PostCSS / SCSS 方案，可选择自己适合的方案。更多单文件组件 CSS 功能请参考<a href="https://cn.vuejs.org/api/sfc-css-features" target="_blank" rel="noreferrer">这里</a>。</p><h4 id="unocss" tabindex="-1">UnoCSS <a class="header-anchor" href="#unocss" aria-label="Permalink to &quot;UnoCSS&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flex flex-1 flex-col select-none text-center all:transition-400&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ma&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;animate-bounce-alt animate-duration-1s animate-count-infinite text-5xl fw100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        UnoCSS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="postcss" tabindex="-1">PostCSS <a class="header-anchor" href="#postcss" aria-label="Permalink to &quot;PostCSS&quot;">​</a></h4><p>框架内置了 <a href="https://github.com/postcss/postcss-nested" target="_blank" rel="noreferrer">postcss-nested</a> 插件，可实现接近于 SCSS 的写法和特性。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.phone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &amp;_</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    body</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.is_dark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp; {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="scss" tabindex="-1">SCSS <a class="header-anchor" href="#scss" aria-label="Permalink to &quot;SCSS&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scss&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.phone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    body</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.is_dark</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h2><h3 id="全局公共-2" tabindex="-1">全局公共 <a class="header-anchor" href="#全局公共-2" aria-label="Permalink to &quot;全局公共&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">说明</p><p>全局公共组件在使用时，无需手动引入，框架会在你使用时自动引入，该特性由 <a href="https://github.com/unplugin/unplugin-vue-components" target="_blank" rel="noreferrer">unplugin-vue-components</a> 提供支持。</p></div><p>全局公共组件存放在 <code>/src/components/</code> 目录下，每个组件按文件夹进行区分。</p><p>每个组件的文件夹内至少保留一个文件名为 <code>index.vue</code> 的组件入口，文件夹名称即为组件名。</p><p>推荐使用 <code>pnpm new</code> 指令进行组件生成，详细可查看《<a href="./plop.html">代码文件自动生成</a>》。</p><h3 id="局部私有-2" tabindex="-1">局部私有 <a class="header-anchor" href="#局部私有-2" aria-label="Permalink to &quot;局部私有&quot;">​</a></h3><p>局部私有组件建议采用就近原则，你可以在需要的模块文件夹下建立一个 <code>components</code> 文件夹，专门用于存放局部私有组件。</p>`,27)]))}const o=i(t,[["render",l]]);export{g as __pageData,o as default};

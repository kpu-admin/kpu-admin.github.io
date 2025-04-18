import{_ as i,c as a,o as h,ay as n}from"./chunks/framework.DW5dc1Af.js";const t="/topbar.gif",l="/topbar-switchaabbarandtoolbar.png",E=JSON.parse('{"title":"顶栏","description":"","frontmatter":{},"headers":[],"relativePath":"guide/topbar.md","filePath":"guide/topbar.md"}'),p={name:"guide/topbar.md"};function e(k,s,d,g,r,o){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="顶栏" tabindex="-1">顶栏 <a class="header-anchor" href="#顶栏" aria-label="Permalink to &quot;顶栏&quot;">​</a></h1><p>标签栏和工具栏统称为顶栏。</p><h2 id="模式" tabindex="-1">模式 <a class="header-anchor" href="#模式" aria-label="Permalink to &quot;模式&quot;">​</a></h2><p>提供了 3 种模式可选择，可以在应用配置里设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  topbar: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 模式</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@默认值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> \`&#39;static&#39;\` 静止，跟随页面滚动</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@可选值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> \`&#39;fixed&#39;\` 固定，不跟随页面滚动，始终固定在顶部</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@可选值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> \`&#39;sticky&#39;\` 粘性，页面往下滚动时隐藏，往上滚动时显示</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sticky&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><img src="`+t+`" alt="" data-zoomable=""></p><h2 id="切换标签栏和工具栏" tabindex="-1">切换标签栏和工具栏 <a class="header-anchor" href="#切换标签栏和工具栏" aria-label="Permalink to &quot;切换标签栏和工具栏&quot;">​</a></h2><p>默认标签栏在上，工具栏在下，可以在应用配置里设置切换：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  topbar: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 是否切换显示标签栏和工具栏的显示位置</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@默认值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> \`false\` 标签栏在工具栏上面</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@可选值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> \`true\` 工具栏在标签栏上面</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    switchTabbarAndToolbar: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><img src="`+l+'" alt="" data-zoomable=""></p>',10)]))}const y=i(p,[["render",e]]);export{E as __pageData,y as default};

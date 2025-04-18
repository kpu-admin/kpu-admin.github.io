import{_ as e,C as l,c as k,o as d,ay as h,G as a,w as n,j as i}from"./chunks/framework.DW5dc1Af.js";const g="/layout_1.gif",r="/layout_2.gif",o="/layout_3.gif",y="/layout_4.gif",c="/layout-mobile.gif",C=JSON.parse('{"title":"布局","description":"","frontmatter":{},"headers":[],"relativePath":"guide/layout.md","filePath":"guide/layout.md"}'),E={name:"guide/layout.md"};function A(D,s,u,m,_,b){const t=l("tab"),p=l("tabs");return d(),k("div",null,[s[4]||(s[4]=h('<h1 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-label="Permalink to &quot;布局&quot;">​</a></h1><h2 id="页宽模式" tabindex="-1">页宽模式 <a class="header-anchor" href="#页宽模式" aria-label="Permalink to &quot;页宽模式&quot;">​</a></h2><p>提供 4 种基于页宽(页面宽度)模式，在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {</span></span>\n<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>\n<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 页宽模式，当设置为非 `&#39;adaption&#39;` 时，可以去 /src/assets/styles/globals.css 里设置 `--g-app-width` 宽度变量</span></span>\n<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@默认值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> `&#39;adaption&#39;` 自适应</span></span>\n<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@可选值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> `&#39;adaption-min-width&#39;` 自适应（有最小宽度）</span></span>\n<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@可选值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> `&#39;center&#39;` 定宽居中</span></span>\n<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@可选值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> `&#39;center-max-width&#39;` 定宽居中（有最大宽度）</span></span>\n<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>\n<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    widthMode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;adaption&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>',4)),a(p,null,{default:n(()=>[a(t,{name:"adaption"},{default:n(()=>s[0]||(s[0]=[i("p",null,[i("img",{src:g,alt:"","data-zoomable":""})],-1)])),_:1}),a(t,{name:"adaption-min-width"},{default:n(()=>s[1]||(s[1]=[i("p",null,[i("img",{src:r,alt:"","data-zoomable":""})],-1)])),_:1}),a(t,{name:"center"},{default:n(()=>s[2]||(s[2]=[i("p",null,[i("img",{src:o,alt:"","data-zoomable":""})],-1)])),_:1}),a(t,{name:"center-max-width"},{default:n(()=>s[3]||(s[3]=[i("p",null,[i("img",{src:y,alt:"","data-zoomable":""})],-1)])),_:1})]),_:1}),s[5]||(s[5]=h(`<h2 id="页宽模式应用范围" tabindex="-1">页宽模式应用范围 <a class="header-anchor" href="#页宽模式应用范围" aria-label="Permalink to &quot;页宽模式应用范围&quot;">​</a></h2><p>在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 页宽模式作用范围</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@默认值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> \`&#39;outer&#39;\` 外层</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@可选值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> \`&#39;inner&#39;\` 内层</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    widthModeScope: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;inner&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>布局相关的变量存放在 <code>/src/assets/styles/globals.css</code> 文件中（注意看注释），均为 CSS 变量。</p><h2 id="移动端" tabindex="-1">移动端 <a class="header-anchor" href="#移动端" aria-label="Permalink to &quot;移动端&quot;">​</a></h2><p>在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 是否开启移动端适配，开启后当页面宽度小于 1024px 时自动切换为移动端展示</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@默认值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> \`false\`</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableMobileAdaptation: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>开启移动端支持后，当页面宽度小于 <code>1024px</code> 时会切换为移动端布局显示，移动端下不支持设置框架布局，以及部分不支持移动端的操作按钮也会进行隐藏，例如“全屏”按钮。</p><p><img src="`+c+'" alt="" data-zoomable=""></p><p>虽然框架本身兼容移动端，但由于后台系统在开发时可能会引用各类第三方插件，这部分的兼容性需要开发者自行适配。</p>',11))])}const f=e(E,[["render",A]]);export{C as __pageData,f as default};

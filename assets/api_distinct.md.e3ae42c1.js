import{_ as s,c as a,o as n,a as l}from"./app.fec35db3.js";const i=JSON.parse('{"title":"distinct","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"}],"relativePath":"api/distinct.md","lastUpdated":null}'),p={name:"api/distinct.md"},o=l(`<h1 id="distinct" tabindex="-1">distinct <a class="header-anchor" href="#distinct" aria-hidden="true">#</a></h1><p>\u5C06\u5217\u8868\u4E2D\u6570\u636E\u53BB\u91CD</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>\u53BB\u91CD\u6570\u636E\uFF0C\u5F97\u5230\u65B0\u5217\u8868</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Stream</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">distinct</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">to_list</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>\u7B49\u4EF7\u7684 java \u4EE3\u7801</p><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Integer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Arrays</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">asList</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Integer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stream</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">distinct</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Collectors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toList</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span></code></pre></div>`,7),t=[o];function e(c,r,F,D,y,C){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{i as __pageData,d as default};

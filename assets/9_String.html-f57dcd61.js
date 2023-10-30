import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,b as s,d as n,e as t,w as p,f as e}from"./app-58d2c58f.js";const u="/assets/image-20221013142443901-810c7b06.png",k="/assets/image-20221013142833360-8cd393f6.png",r="/assets/image-20221013143119029-1a585bd7.png",d="/assets/image-20221013143304118-22b3d66c.png",m="/assets/image-20221013143557858-b1e02eb1.png",v="/assets/image-20230407081651412-84c0e68e.png",b="/assets/image-20221013145230940-887e2a7c.png",g="/assets/image-20230407081513361-58a40ba5.png",y="/assets/image-20221013151301923-c7773cc2.png",f="/assets/image-20221013152427336-f971539b.png",w="/assets/image-20221013172005780-771a0594.png",S="/assets/image-20221014102227298-4af33380.png",h={},q=e(`<p>学习目标:</p><ul><li>熟悉String构造方法</li><li>掌握String特点</li><li>熟悉String常用API</li><li>掌握自然排序</li><li>掌握可变长字符串的特点与使用</li></ul><h1 id="string概述" tabindex="-1"><a class="header-anchor" href="#string概述" aria-hidden="true">#</a> String概述</h1><h2 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h2><p>基本介绍</p><ul><li><p>一个字符串是由多个字符组成的一串数据(字符序列,字符数组)</p></li><li><p>String类代表字符串,Java 程序中的所有字符串字面值（如 &quot;abc&quot; ,&quot;你好&quot;,&quot;の&quot;）都作为此类的实例实现</p></li><li><p>在java.lang包下,是java核心类,最常用类,但是不属于基本数据类型,引用类型</p></li><li><p>String类提供了字符串表示、比较、查找、截取、大小写转换等各种针对字符串的操作</p></li></ul><h2 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h2><ul><li>空字符串&quot;&quot;</li><li>byte[] -----&gt; String</li><li>char[] -----&gt; String</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token comment">//空字符串 &quot;&quot;  </span>
  <span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  

  <span class="token comment">//利用字节数组，创建字节数组所表示的字符串</span>
  <span class="token comment">// 1. 字符 -&gt; 数值形式  &#39;a&#39; -&gt; 97</span>
  <span class="token comment">// 2. 所以可以用多个字节值，表示多个字符——&gt;即字符序列 public</span>
  <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes<span class="token punctuation">)</span>

  <span class="token comment">//利用字节数数组的一部分，创建字符序列, 从byte数组的offset开始的length个字节值</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes<span class="token punctuation">,</span><span class="token keyword">int</span> offset<span class="token punctuation">,</span><span class="token keyword">int</span> length<span class="token punctuation">)</span>

  <span class="token comment">//利用一个字符数组创建字符数组，代表的字符序列</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">)</span>

  <span class="token comment">// 创建value字符数组中，从第offset位置开始的count个字符，所代表的字符串对象</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">,</span><span class="token keyword">int</span> offset<span class="token punctuation">,</span><span class="token keyword">int</span> count<span class="token punctuation">)</span>
    
  <span class="token comment">//知道即可</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token class-name">String</span> original<span class="token punctuation">)</span>  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Demo</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_01introduction<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/11 10:25
 **/</span>
<span class="token comment">/*
String 构造方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//   //空字符串 &quot;&quot;</span>
        <span class="token comment">//  public String()</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s = &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//  //利用字节数组，创建字节数组所表示的字符串</span>
        <span class="token comment">//  // 1. 字符 -&gt; 数值形式  &#39;a&#39; -&gt; 97</span>
        <span class="token comment">//  // 2. 所以可以用多个字节值，表示多个字符——&gt;即字符序列 public</span>
        <span class="token comment">//  String(byte[] bytes)</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 = &quot;</span> <span class="token operator">+</span> s1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//  //利用字节数数组的一部分，创建字符序列, 从byte数组的offset开始的length个字节值</span>
        <span class="token comment">//  public String(byte[] bytes,int offset,int length)</span>
        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 = &quot;</span> <span class="token operator">+</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//  //利用一个字符数组创建字符数组，代表的字符序列</span>
        <span class="token comment">//  public String(char[] value)</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">&#39;h&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;l&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;l&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;o&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s3 = &quot;</span> <span class="token operator">+</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//  // 创建value字符数组中，从第offset位置开始的count个字符，所代表的字符串对象</span>
        <span class="token comment">//  public String(char[] value,int offset,int count)</span>
        <span class="token comment">//</span>
        <span class="token comment">//  //知道即可</span>
        <span class="token comment">//  public String(String original)</span>
        <span class="token class-name">String</span> zs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;zs = &quot;</span> <span class="token operator">+</span> zs<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="string特点-重点" tabindex="-1"><a class="header-anchor" href="#string特点-重点" aria-hidden="true">#</a> String特点(重点)</h1><h2 id="string对象不可变" tabindex="-1"><a class="header-anchor" href="#string对象不可变" aria-hidden="true">#</a> String对象不可变</h2><p>对象一旦被创建后，对象所有的状态及属性在其生命周期内不会发生任何变化。</p><p>1.请键盘录入一个任意字符串s，并用一个temp字符串引用也指向它<br> 这个时候修改temp字符串的内容，请问s字符串的内容会随之改变吗？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_02feature<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/13 11:50
 **/</span>
<span class="token comment">/*
请键盘录入一个任意字符串s，并用一个temp字符串引用也指向它
这个时候修改temp字符串的内容，请问s字符串的内容会随之改变吗？
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建Scanner对象</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 键盘接收nextLine   -- &gt; s</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// temp 指向</span>
        <span class="token class-name">String</span> temp <span class="token operator">=</span> s<span class="token punctuation">;</span>
        <span class="token comment">// 更改s内容</span>
        s <span class="token operator">=</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 打印</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;temp = &quot;</span> <span class="token operator">+</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s = &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="image-20221013142443901" tabindex="0" loading="lazy"><figcaption>image-20221013142443901</figcaption></figure><p>2</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s = &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token string">&quot;hello 张三&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s = &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果是多少?原因是什么?</p><figure><img src="`+k+'" alt="image-20221013142833360" tabindex="0" loading="lazy"><figcaption>image-20221013142833360</figcaption></figure><p><strong>原因与本质</strong></p><ul><li>String是一个final类,不能被继承, 代表不可变的字符序列</li><li>字符串是常量,用双引号引起来,他们的值在创建之后不可更改</li><li>String对象的内容是存储在字符数组value[ ]中的</li></ul><figure><img src="'+r+'" alt="image-20221013143119029" tabindex="0" loading="lazy"><figcaption>image-20221013143119029</figcaption></figure><figure><img src="'+d+'" alt="image-20221013143304118" tabindex="0" loading="lazy"><figcaption>image-20221013143304118</figcaption></figure><figure><img src="'+m+`" alt="image-20221013143557858" tabindex="0" loading="lazy"><figcaption>image-20221013143557858</figcaption></figure><h2 id="字符串常量池" tabindex="-1"><a class="header-anchor" href="#字符串常量池" aria-hidden="true">#</a> 字符串常量池</h2><p>字符串的分配和其他对象分配一样，是需要消耗高昂的时间和空间的，而且字符串使用的非常多</p><p>JVM为了提高性能和减少内存的开销，在实例化字符串对象的时候进行了一些优化：</p><p><strong>使用字符串常量池。</strong></p><p>首先要明确，Java的双引号引起来的字面值常量字符串，它们都是对象。这些对象比较特殊，程序在编译时期就能确定它们的值</p><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>每当创建字符串常量对象时，JVM会首先检查字符串常量池，如果该字符串对象引用已经存在常量池中，那么就直接返回常量池中的实例引用。如果字符串对象引用不存在于常量池中，就会实例化该字符串并且将其引用放到常量池中。</strong></span></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 当常量池中已有字符串对象的引用时,不会在堆上再创建, 而使用同一引用</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="image-20230407081651412" tabindex="0" loading="lazy"><figcaption>image-20230407081651412</figcaption></figure><h3 id="string两种实例化方式" tabindex="-1"><a class="header-anchor" href="#string两种实例化方式" aria-hidden="true">#</a> String两种实例化方式</h3><p>两种方式</p><ul><li>直接赋值 String s = &quot;abc&quot;</li><li>构造方法 String s = new String(&quot;abc&quot;)</li></ul><p>第一种 先直接赋值 再构造</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="image-20221013145230940" tabindex="0" loading="lazy"><figcaption>image-20221013145230940</figcaption></figure><p>第二种 先构造 再直接赋值</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>
<span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="image-20230407081513361" tabindex="0" loading="lazy"><figcaption>image-20230407081513361</figcaption></figure><p>总结:</p><ul><li>先String s = new String(&quot;abc&quot;), 再String s1 = &quot;abc&quot;. new String 的时候会创建2个对象, 直接赋值的时候, 直接用的是常量池的引用, 不再创建新的字符串对象了</li><li>String s1 = &quot;abc&quot;, 再String s = new String(&quot;abc&quot;), 直接赋值的方式会创建一个对象, new String的时候会创建1个对象</li></ul><h3 id="字符串常见问题与练习" tabindex="-1"><a class="header-anchor" href="#字符串常见问题与练习" aria-hidden="true">#</a> 字符串常见问题与练习</h3><h4 id="字符串比较" tabindex="-1"><a class="header-anchor" href="#字符串比较" aria-hidden="true">#</a> 字符串比较</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s4 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> s5 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s6 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s5 <span class="token operator">==</span> s6<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s5<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s6<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==与equals方法有什么区别?</p><ul><li>== ,对于基本数据类型而言,比较的是内容,对于引用数据类型而言,比较的是引用变量,即所指向的地址</li><li>equals方法是Object的方法,默认是比较2个对象的地址,若要比较内容,应当重写父类方法</li></ul><p>String中重写的equals方法</p><figure><img src="`+y+`" alt="image-20221013151301923" tabindex="0" loading="lazy"><figcaption>image-20221013151301923</figcaption></figure><h4 id="字符串拼接" tabindex="-1"><a class="header-anchor" href="#字符串拼接" aria-hidden="true">#</a> 字符串拼接</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token string">&quot;Hel&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;lo&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s4 <span class="token operator">=</span> <span class="token string">&quot;Hel&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;lo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s7 <span class="token operator">=</span> <span class="token string">&quot;H&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s8 <span class="token operator">=</span> <span class="token string">&quot;ello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s9 <span class="token operator">=</span> s7 <span class="token operator">+</span> s8<span class="token punctuation">;</span>
          
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// ?</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s9<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s4 <span class="token operator">==</span> s5<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+f+`" alt="image-20221013152427336" tabindex="0" loading="lazy"><figcaption>image-20221013152427336</figcaption></figure><p><strong>进行字符串拼接的时候有2种情况</strong></p><ul><li>当参与字符串拼接对的2个字符串,只要有1个引用变量的形式出现时,则会在堆上创建新的字符串对象. <ul><li>原因是因为参与了运算,无法在编译期确定其值,就不能在编译时期加入常量池</li></ul></li><li>只有参与字符串拼接的2个字符串都是字面值常量的时候 <ul><li>如果常量池中已有该字符串对象的引用,则返回常量池中的引用</li><li>如果常量池中没有,则在堆上创建,并把引用放入常量池</li></ul></li></ul><h1 id="string-api" tabindex="-1"><a class="header-anchor" href="#string-api" aria-hidden="true">#</a> String API</h1><h2 id="判断功能" tabindex="-1"><a class="header-anchor" href="#判断功能" aria-hidden="true">#</a> 判断功能</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>用来比较字符串的内容，注意区分大小写
<span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span>
    
忽略字符串大小写比较字符串内容，常见用于比较网址<span class="token constant">URL</span>
<span class="token keyword">boolean</span> <span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>
    
判断当前字符串对象是否包含，目标字符串的字符序列 
<span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>
    
判断当前字符串对象，是否已目标字符串的字符序列开头
<span class="token keyword">boolean</span> <span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>
    
判断当前字符串，是否以目标字符串对象的字符序列结尾，常用于确定文件后缀名格式
<span class="token keyword">boolean</span> <span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>
    
判断一个字符串，是不是空字符串 
<span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取功能" tabindex="-1"><a class="header-anchor" href="#获取功能" aria-hidden="true">#</a> 获取功能</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>获取当前字符串对象中，包含的字符个数 <span class="token string">&quot;abcd&quot;</span>
<span class="token keyword">int</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
    
获取字符串对象代表字符序列中，指定位置的字符 从<span class="token number">0</span>开始<span class="token string">&quot;abcd&quot;</span>
<span class="token keyword">char</span> <span class="token function">charAt</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> 
    
在当前字符串对象中查找指定的字符，如果找到就返回字符，首次出现的位置，如果没找到返回<span class="token operator">-</span><span class="token number">1</span>
也可以填字符   <span class="token string">&quot;abcdb&quot;</span>
<span class="token keyword">int</span> <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> ch<span class="token punctuation">)</span> 
    
指定从当前字符串对象的指定位置开始，查找首次出现的指定字符的位置，<span class="token punctuation">(</span>如果没找到返回<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
可以填入字符
<span class="token keyword">int</span> <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> ch<span class="token punctuation">,</span><span class="token keyword">int</span> fromIndex<span class="token punctuation">)</span> 
    
查找当前字符串中，目标字符串首次出现的位置<span class="token punctuation">(</span>如果包含<span class="token punctuation">)</span>，找不到，返回<span class="token operator">-</span><span class="token number">1</span>
这里的位置是指目标字符串的第一个字符<span class="token punctuation">,</span>在当前字符串对象中的位置  <span class="token string">&quot;abcdefg&quot;</span>
<span class="token keyword">int</span> <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> 

指定，从当前字符串对象的指定位置开始<span class="token punctuation">,</span>查找首次出现的指定字符串的位置<span class="token punctuation">(</span>如果没找到返回<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
这里的位置是指目标字符串的第一个字符<span class="token punctuation">,</span>在当前字符串对象中的位置
<span class="token keyword">int</span> <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span><span class="token keyword">int</span> fromIndex<span class="token punctuation">)</span> ，

返回字符串，该字符串只包含当前字符串中，从指定位置开始<span class="token punctuation">(</span>包含指定位置字符<span class="token punctuation">)</span>到结束的那部分字符串  <span class="token string">&quot;abcdef&quot;</span>
<span class="token class-name">String</span> <span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">)</span>   
    
返回字符串，只包含当前字符串中，从start位置开始<span class="token punctuation">(</span>包含<span class="token punctuation">)</span>，到<span class="token function">end</span><span class="token punctuation">(</span>不包含<span class="token punctuation">)</span>指定的位置的字符串  <span class="token punctuation">[</span> <span class="token punctuation">,</span> <span class="token punctuation">)</span>
<span class="token class-name">String</span> <span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">,</span><span class="token keyword">int</span> end<span class="token punctuation">)</span> 



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Demo</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_03api<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/13 15:58
 **/</span>
<span class="token comment">/*
获取功能
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;abcdef&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取当前字符串对象中，包含的字符个数 &quot;abcd&quot;</span>
        <span class="token comment">//int length()</span>
        <span class="token comment">//</span>
        <span class="token comment">//获取字符串对象代表字符序列中，指定位置的字符&quot;abcd&quot; 从0开始</span>
        <span class="token comment">//char charAt(int index)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s.charAt(0) = &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//在当前字符串对象中查找指定的字符，如果找到就返回字符，首次出现的位置，如果没找到返回-1</span>
        <span class="token comment">//也可以填字符   &quot;abcd&quot;</span>
        <span class="token comment">//int indexOf(int ch)</span>
        <span class="token comment">//</span>
        <span class="token comment">//指定从当前字符串对象的指定位置开始，查找首次出现的指定字符的位置，(如果没找到返回-1)</span>
        <span class="token comment">//可以填入字符</span>
        <span class="token comment">//int indexOf(int ch,int fromIndex)</span>
        <span class="token comment">//</span>
        <span class="token comment">//查找当前字符串中，目标字符串首次出现的位置(如果包含)，找不到，返回-1</span>
        <span class="token comment">//这里的位置是指目标字符串的第一个字符,在当前字符串对象中的位置  &quot;abcd&quot;</span>
        <span class="token comment">//int indexOf(String str)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s.indexOf(\\&quot;ef\\&quot;) = &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;ef&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//指定，从当前字符串对象的指定位置开始,查找首次出现的指定字符串的位置(如果没找到返回-1)</span>
        <span class="token comment">//这里的位置是指目标字符串的第一个字符,在当前字符串对象中的位置</span>
        <span class="token comment">//int indexOf(String str,int fromIndex) ，</span>
        <span class="token comment">//</span>
        <span class="token comment">//返回字符串，该字符串只包含当前字符串中，从指定位置开始(包含指定位置字符)到结束的那部分字符串  &quot;abcdef&quot;</span>
        <span class="token comment">//String substring(int start)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s.substring(1) = &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//返回字符串，只包含当前字符串中，从start位置开始(包含)，到end(不包含)指定的位置的字符串  [ , )</span>
        <span class="token comment">//String substring(int start,int end)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s.substring(1, 3) = &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>课堂练习：</p><pre><code>1. 统计”abc”在字符中”abcdabcfgh”出现的次数
2. 借助于int indexOf(String str,int fromIndex)
</code></pre><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_03api<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/13 16:02
 **/</span>

<span class="token comment">/*
课堂练习：

 	1. 统计”abc”在字符中”abcdabcfgh”出现的次数
	2. 借助于int indexOf(String str,int fromIndex)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ex1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 定义字符串</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;abcdabcfgh&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 定义计数器</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 定义索引值</span>
        <span class="token keyword">int</span> fromIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token comment">// 循环</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>fromIndex <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> fromIndex<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 计数器 索引值+1</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
            fromIndex<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 循环结束 统计结束 打印</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出现了&quot;</span> <span class="token operator">+</span> count <span class="token operator">+</span> <span class="token string">&quot;次&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>课堂练习：<br> 1：遍历获取字符串中的每一个字符<br> &quot;abc001DEF&quot;<br> 2：统计一个字符串中大写字母字符，小写字母字符，数字字符出现的次数。(不考虑其他字符)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_03api<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/13 16:10
 **/</span>
<span class="token comment">/*


课堂练习：
	1：遍历获取字符串中的每一个字符
	&quot;abc001DEF&quot;
	2：统计一个字符串中大写字母字符，小写字母字符，数字字符出现的次数。(不考虑其他字符)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ex2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 定义字符串</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;abc001DEF&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 定义3个计数器</span>
        <span class="token comment">// digitalCount</span>
        <span class="token keyword">int</span> digitalCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token comment">// upperCount</span>
        <span class="token keyword">int</span> upperCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token comment">// lowerCount</span>
        <span class="token keyword">int</span> lowerCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token comment">// 循环</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// a-z 小写 A-Z 大写 0-9数字</span>
            <span class="token comment">// 计数器+1</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">&gt;=</span> <span class="token char">&#39;a&#39;</span> <span class="token operator">&amp;&amp;</span> c <span class="token operator">&lt;=</span> <span class="token char">&#39;z&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                lowerCount<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">&gt;=</span> <span class="token char">&#39;A&#39;</span> <span class="token operator">&amp;&amp;</span> c <span class="token operator">&lt;=</span> <span class="token char">&#39;Z&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                upperCount<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                digitalCount<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 循环结束</span>
        <span class="token comment">// 输出结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数字:&quot;</span><span class="token operator">+</span>digitalCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;大写:&quot;</span><span class="token operator">+</span>upperCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;小写:&quot;</span><span class="token operator">+</span>lowerCount<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转换功能" tabindex="-1"><a class="header-anchor" href="#转换功能" aria-hidden="true">#</a> 转换功能</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>获取一个用来表示字符串对象字符序列的，字节数组
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
获取的是用来表示字符串对象字符序列的，字符数组
<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 

    
把字符数组转换成字符串
<span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chs<span class="token punctuation">)</span>

把各种基本数据类型和对象转换成字符串  <span class="token number">100</span><span class="token operator">--</span><span class="token operator">-&gt;</span> <span class="token string">&quot;100&quot;</span>
<span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">/</span><span class="token keyword">double</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>


把字符串全部转化为小写
<span class="token class-name">String</span> <span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    
把字符串全部转换为大写
<span class="token class-name">String</span> <span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

字符串拼接，作用等价于 <span class="token operator">+</span> 实现的字符串拼接
<span class="token class-name">String</span> <span class="token function">concat</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_03api<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 转换功能
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/13 16:18
 **/</span>
<span class="token comment">/*
转换功能
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;abcd&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取一个用来表示字符串对象字符序列的，字节数组</span>
        <span class="token comment">//byte[] getBytes()</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取的是用来表示字符串对象字符序列的，字符数组</span>
        <span class="token comment">//char[] toCharArray()</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//把字符数组转换成字符串</span>
        <span class="token comment">//static String valueOf(char[] chs)</span>
        <span class="token comment">//</span>
        <span class="token comment">//把各种基本数据类型和对象转换成字符串  100---&gt; &quot;100&quot;</span>
        <span class="token comment">//static String valueOf(int i/double...)</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 = &quot;</span> <span class="token operator">+</span> s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 = &quot;</span> <span class="token operator">+</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//把字符串全部转化为小写</span>
        <span class="token comment">//String toLowerCase()</span>
        <span class="token comment">//</span>
        <span class="token comment">//把字符串全部转换为大写</span>
        <span class="token comment">//String toUpperCase()</span>
        <span class="token class-name">String</span> s3 <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s3 = &quot;</span> <span class="token operator">+</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//字符串拼接，作用等价于 + 实现的字符串拼接</span>
        <span class="token comment">//String concat(String str)</span>
        <span class="token class-name">String</span> s4 <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;ef&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s4 = &quot;</span> <span class="token operator">+</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>课堂练习：<br> 1:字符串helloWORLD<br> 2:第一个字符转为大写,其余字符转为小写 → Helloworld</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_03api<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/13 16:25
 **/</span>

<span class="token comment">/*
课堂练习：
	1:字符串helloWORLD
	2:第一个字符转为大写,其余字符转为小写     →   Helloworld
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ex3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 定义字符串</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;helloWORLD&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">//func(s);</span>

        <span class="token class-name">String</span> str <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                <span class="token function">concat</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 第一个字符取出来 转换大写</span>
        <span class="token class-name">String</span> head <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> headStr <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 把剩余的字符串取出来 转为小写的</span>
        <span class="token class-name">String</span> remind <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> remindStr <span class="token operator">=</span> remind<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 把转换后的2部分进行拼接</span>
        <span class="token class-name">String</span> newStr <span class="token operator">=</span> headStr <span class="token operator">+</span> remindStr<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>newStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>课堂练习：<br> 1:字符串反转<br> 2:举例:<br> 键盘输入abc,反转后结果为cba</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_03api<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/13 16:32
 **/</span>
<span class="token comment">/*

课堂练习：
	1:字符串反转
	2:举例:
	键盘输入abc,反转后结果为cba
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ex4</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 键盘接收数据abc</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 字符串---&gt;char[]  转为字符数组</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 定义空字符串</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 倒着遍历字符数组</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> chars<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 重写拼接</span>
            str <span class="token operator">+=</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 输出结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他功能" tabindex="-1"><a class="header-anchor" href="#其他功能" aria-hidden="true">#</a> 其他功能</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span>类的替换功能
在新的字符串中，用新<span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">)</span>字符，替换旧<span class="token punctuation">(</span>old<span class="token punctuation">)</span>字符  <span class="token string">&quot;abcd&quot;</span> 
<span class="token class-name">String</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">char</span> old<span class="token punctuation">,</span><span class="token keyword">char</span> <span class="token keyword">new</span><span class="token punctuation">)</span>  

在新的字符串中，用新的字符串<span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 替换旧<span class="token punctuation">(</span>old<span class="token punctuation">)</span>字符串
<span class="token class-name">String</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token class-name">String</span> old<span class="token punctuation">,</span> <span class="token class-name">String</span> <span class="token keyword">new</span><span class="token punctuation">)</span> 


在新的字符串中，去掉开头和结尾的空格字符 <span class="token string">&quot;abc&quot;</span>  <span class="token string">&quot;abc &quot;</span>
<span class="token class-name">String</span> <span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

分隔功能
将字符串按照符号分隔成字符串数组  <span class="token string">&quot;a,b,c,d&quot;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">split</span><span class="token punctuation">(</span><span class="token class-name">String</span> re<span class="token punctuation">)</span> 

<span class="token class-name">String</span>类的比较功能
<span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>
<span class="token keyword">int</span> <span class="token function">compareToIgnoreCase</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>课堂练习：<br> 1:给出一句英文句子： &quot;i want a bing dun dun&quot;<br> 2:每个单词的首字母都转换为大写并输出<br> 3.使用split方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_03api<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/13 17:21
 **/</span>
<span class="token comment">/*
课堂练习：
	1:给出一句英文句子： &quot;i want a bing dun dun&quot;
	2:每个单词的首字母都转换为大写并输出
	3.使用split方法

 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ex5</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 定义字符串</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;i want a bing dun dun&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 按照空格进行分割 ---&gt; String[]</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 定义空字符串用于拼接</span>
        <span class="token class-name">String</span> newStr <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 遍历字符串数组</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> str <span class="token operator">:</span> strings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 首字母大写准换</span>
            <span class="token class-name">String</span> s1 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 重写拼接</span>
            newStr <span class="token operator">+=</span> s1 <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 输出结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result:&quot;</span><span class="token operator">+</span>newStr<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>字符串的大小如何比较？</strong><br> 按照字典序，比较字符串的大小。字典序原本的含义实质，英文单词在字典中出现的先后顺序<br> (在字典中，先出现的字符串小，后出现的字符串大).compareTo方法就是按照字典序进行比较的.</p><p><strong>关于compareTo方法</strong></p><ol><li>字符串长度一样,逐一比较返回第一个不一样字符的编码值的差值(调用者-参数)</li><li>字符串长度不一样,并且前面的字符都相同,返回数组长度的差值(调用者-参数)</li><li>长度一样,逐位字符也一样,返回0,表示相等</li></ol><figure><img src="`+w+`" alt="image-20221013172005780" tabindex="0" loading="lazy"><figcaption>image-20221013172005780</figcaption></figure><h1 id="自然排序" tabindex="-1"><a class="header-anchor" href="#自然排序" aria-hidden="true">#</a> 自然排序</h1><p>课堂练习：<br> 1:字符串bdcaegf<br> 2:对字符串中的字符进行排序,最终得到结果 → abcdefg</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_04sort<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/13 17:27
 **/</span>
<span class="token comment">/*
课堂练习：
	1:字符串bdcaegf
	2:对字符串中的字符进行排序,最终得到结果 →  abcdefg

 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ex</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 定义字符串</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;bdcaegf&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">// 字符串---&gt;char[]</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;排序前&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 排序算法</span>
        <span class="token comment">// bubbleSort(chars);</span>

        <span class="token comment">// 简单方法</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 输出结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;排序后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 冒泡排序 两两交换 大的放后面</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 进行交换 大的放后面</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> chars<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 定义临时变量接收</span>
                    <span class="token keyword">char</span> temp <span class="token operator">=</span> chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    chars<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> chars<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    chars<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="comparable接口" tabindex="-1"><a class="header-anchor" href="#comparable接口" aria-hidden="true">#</a> Comparable接口</h2><p>此接口强行对实现它的每个类的对象进行整体排序。这种排序被称为类的<em>自然排序</em>，类的 <code>compareTo</code> 方法被称为它的<em>自然比较方法</em></p>`,89),j=s("code",null,"Collections.sort",-1),x=s("code",null,"Arrays.sort",-1),_=e(`<ul><li>实现此接口的类，其对象数组（array）或对象容器（collection） <ul><li>就可以通过**Arrays.sort()<strong>或</strong>Collections.sort()**进行自动排序</li></ul></li><li>对于实现该接口的A类来说，其对象a1.compareTo(a2)方法返回值 <ul><li>小于0，表示a1对象小于a2，在自然排序中处于前面的位置</li><li>大于0，表示a1对象大于a2，在自然排序中处于后面的位置</li><li>等于0，表示a1对象等于a2</li></ul></li></ul><p>自定义类实现自然排序：</p><ul><li>实现Comparable接口</li><li>重写compareTo方法</li></ul><p>练习：<br> 定义一个学生类，让其按照学生的年龄的大小，从小到大进行排序</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_04sort<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/13 17:44
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComparableTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建学生对象</span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;ww&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;zl&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;长风&quot;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 填充数组</span>
        <span class="token class-name">Student</span><span class="token punctuation">[</span><span class="token punctuation">]</span> students <span class="token operator">=</span> <span class="token punctuation">{</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">,</span> s4<span class="token punctuation">,</span> s5<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// 排序前</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;排序前&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>students<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 排序 sort方法</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>students<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 排序后</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;排序后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>students<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
自定义类实现自然排序：

- 实现Comparable接口
- 重写compareTo方法
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">int</span> score<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token keyword">int</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Student{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">&quot;, score=&quot;</span> <span class="token operator">+</span> score <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Student</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 排序规则</span>
        <span class="token comment">// 按照年龄从小到大进行排序</span>
        <span class="token comment">// 按照年龄从大到小进行排序</span>
        <span class="token comment">//return this.getAge()-o.getAge();</span>
        <span class="token comment">// 年龄相同的情况下,按照分数从高到低排序</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> o<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> o<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>o<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//@Override</span>
    <span class="token comment">//public int compareTo(Object o) {</span>
    <span class="token comment">//    return 0;</span>
    <span class="token comment">//}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="comparator接口" tabindex="-1"><a class="header-anchor" href="#comparator接口" aria-hidden="true">#</a> Comparator接口</h2><p>在排序时需要注意一个比较特殊的方法，带比较器的Arrays.sort方法,<br> 即sort(T[] a, Comparator&lt;? super T&gt; c)<br> 根据指定比较器产生的顺序对指定对象数组进行排序。其中Comparator接口的实现类对象就是比较器,该对象通过compare方法传入比较的规则</p><p>表示传入比较规则的int compare(T o1, T o2)方法:<br> 该方法可以看成是o1-o2,如果方法返回负数,o1&lt; o2,相反则大于,只有当方法返回0时,才表示对象相等</p><p><strong>三种方式去实现自然排序：</strong></p><ul><li>手写接口类实现</li><li>匿名内部类</li><li>lambda表达式</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_04sort<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Comparator</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/13 17:44
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComparatorTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建学生对象</span>
        <span class="token class-name">Student2</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student2</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student2</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student2</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student2</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student2</span><span class="token punctuation">(</span><span class="token string">&quot;ww&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student2</span> s4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student2</span><span class="token punctuation">(</span><span class="token string">&quot;zl&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student2</span> s5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student2</span><span class="token punctuation">(</span><span class="token string">&quot;长风&quot;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 填充数组</span>
        <span class="token class-name">Student2</span><span class="token punctuation">[</span><span class="token punctuation">]</span> students <span class="token operator">=</span> <span class="token punctuation">{</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">,</span> s4<span class="token punctuation">,</span> s5<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// 排序前</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;排序前&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>students<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 排序 使用带比较器的sort方法</span>
        <span class="token comment">//Arrays.sort(students, new MyComparator());</span>

        <span class="token comment">// 使用匿名内部类</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>students<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student2</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Student2</span> o1<span class="token punctuation">,</span> <span class="token class-name">Student2</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> o1<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> o2<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 使用lambda</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>students<span class="token punctuation">,</span> <span class="token punctuation">(</span>stu1<span class="token punctuation">,</span> stu2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> stu2<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> stu1<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 排序后</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;排序后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>students<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">Student2</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">int</span> score<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student2</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token keyword">int</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Student2{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">&quot;, score=&quot;</span> <span class="token operator">+</span> score <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// 手写实现类</span>
<span class="token keyword">class</span> <span class="token class-name">MyComparator</span> <span class="token keyword">implements</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student2</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Student2</span> o1<span class="token punctuation">,</span> <span class="token class-name">Student2</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 按照年龄从小到大进行排序</span>
        <span class="token comment">//return o1.getAge() - o2.getAge();</span>
        <span class="token keyword">return</span> o2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> o1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="可变长字符串" tabindex="-1"><a class="header-anchor" href="#可变长字符串" aria-hidden="true">#</a> 可变长字符串</h1><p>如果一个空字符串””,让其拼接10000次,效率怎么样?<br> 我们如果对字符串进行拼接操作，每次拼接，都会构建一个新的String对象，既耗时，又浪费空间。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _14string<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_05stringbuffer<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/14 9:47
 **/</span>
<span class="token comment">/*
如果一个空字符串””,让其拼接10000次,效率怎么样?
我们如果对字符串进行拼接操作，每次拼接，都会构建一个新的String对象，既耗时，又浪费空间。

 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取当前时间戳</span>
        <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//int sum = 0;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//str += &quot;a&quot;;</span>
           <span class="token comment">// sum+=i;</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 7s</span>
        <span class="token comment">// 4ms</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stringbuffer构造方法" tabindex="-1"><a class="header-anchor" href="#stringbuffer构造方法" aria-hidden="true">#</a> StringBuffer构造方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 默认容量是16</span>
<span class="token keyword">public</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span><span class="token comment">// 容量是capacity</span>
<span class="token keyword">public</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token comment">// str的长度+16</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stringbuffer成员方法" tabindex="-1"><a class="header-anchor" href="#stringbuffer成员方法" aria-hidden="true">#</a> StringBuffer成员方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>获取功能
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">capacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 返回当前容量<span class="token punctuation">,</span>数组的长度<span class="token punctuation">,</span>理论值
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 返回长度<span class="token punctuation">(</span>字符的个数<span class="token punctuation">)</span><span class="token punctuation">,</span>实际值    
添加功能
<span class="token keyword">public</span> <span class="token class-name">StringBuffer</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> 将指定的字符串<span class="token punctuation">(</span>其他类型有重载方法<span class="token punctuation">)</span>追加到此字符序列的尾部
在指定位置把任意类型的数据插入到字符串缓冲区里面
<span class="token keyword">public</span> <span class="token class-name">StringBuffer</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">int</span> offset<span class="token punctuation">,</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> 
删除功能
<span class="token keyword">public</span> <span class="token class-name">StringBuffer</span> <span class="token function">deleteCharAt</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span>：删除指定位置的字符
<span class="token keyword">public</span> <span class="token class-name">StringBuffer</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">,</span><span class="token keyword">int</span> end<span class="token punctuation">)</span>：删除从指定位置开始指定位置结束的内容
替换功能
使用给定<span class="token class-name">String</span>中的字符替换词序列的子字符串中的字符
<span class="token keyword">public</span> <span class="token class-name">StringBuffer</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">,</span><span class="token keyword">int</span> end<span class="token punctuation">,</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>
反转功能
<span class="token keyword">public</span> <span class="token class-name">StringBuffer</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>：将此字符序列用其反转形式取代，返回对象本身


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">apiTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取功能</span>
        <span class="token comment">//public int capacity() 返回当前容量,数组的长度,理论值</span>
        <span class="token comment">//public int length() 返回长度(字符的个数),实际值</span>
        <span class="token comment">//添加功能</span>
        <span class="token comment">//public StringBuffer append(String s) 将指定的字符串(其他类型有重载方法)追加到此字符序列的尾部</span>
        <span class="token comment">//在指定位置把任意类型的数据插入到字符串缓冲区里面</span>
        <span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sb = &quot;</span> <span class="token operator">+</span> sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;def&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sb = &quot;</span> <span class="token operator">+</span> sb<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//public StringBuffer insert(int offset,String str)</span>
        <span class="token comment">//删除功能</span>
        <span class="token comment">//public StringBuffer deleteCharAt(int index)：删除指定位置的字符</span>
        <span class="token comment">//public StringBuffer delete(int start,int end)：删除从指定位置开始指定位置结束的内容</span>
        <span class="token comment">//替换功能</span>
        <span class="token comment">//使用给定String中的字符替换词序列的子字符串中的字符</span>
        <span class="token comment">//public StringBuffer replace(int start,int end,String str)</span>
        <span class="token comment">//反转功能</span>
        <span class="token comment">//public StringBuffer reverse()：将此字符序列用其反转形式取代，返回对象本身</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sb.reverse() = &quot;</span> <span class="token operator">+</span> sb<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><p><strong>String, StringBuffer之间的相互转换</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// String----&gt;StringBuffer</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// StringBuffer----&gt;String</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>String, StringBuffer和StringBuilder有啥区别</strong></p><p><strong>StringBuffer和StringBuilder从效率上来说哪个更快？</strong></p><figure><img src="`+S+'" alt="image-20221014102227298" tabindex="0" loading="lazy"><figcaption>image-20221014102227298</figcaption></figure><ul><li>和 String 类不同的是，StringBuffer 和 StringBuilder 类的对象能够被多次的修改 <ul><li>并且不产生新的未使用对象，不会产生效率问题和空间浪费问题</li></ul></li><li>StringBuffer是线程安全的，StringBuilder是线程不安全的 <ul><li>StringBuilder的效率会比StringBuffer效率更高，单线程的程序推荐使用StringBuilder</li><li>在多线程的程序中，应该优先考虑使用StringBuffer，安全性要更重要</li><li>它们的效率都比String高很多</li></ul></li></ul>',26);function A(C,B){const a=o("RouterLink");return i(),l("div",null,[q,s("p",null,[n("实现此接口的对象列表（和数组）可以通过 "),t(a,{to:"/java/util/Collections.html#sort(java.util.List)"},{default:p(()=>[j]),_:1}),n("（和 "),t(a,{to:"/java/util/Arrays.html#sort(java.lang.Object%5B%5D)"},{default:p(()=>[x]),_:1}),n("）进行自动排序")]),_])}const T=c(h,[["render",A],["__file","9_String.html.vue"]]);export{T as default};

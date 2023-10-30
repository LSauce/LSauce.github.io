import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-58d2c58f.js";const t="/assets/image-20221014163430331-1deb3ec5.png",p={},i=e('<p>学习目标:</p><ul><li>掌握相对路径 绝对路径</li><li>熟悉File中API</li></ul><h1 id="file概述" tabindex="-1"><a class="header-anchor" href="#file概述" aria-hidden="true">#</a> File概述</h1><h2 id="为什么要学习file类" tabindex="-1"><a class="header-anchor" href="#为什么要学习file类" aria-hidden="true">#</a> 为什么要学习File类？</h2><p>因为在操作系统中，(内存,RAM , SRAM DRAM) 需要永久保存的数据，都是以文件的形式存在，所以要想操作这些被永久保存的数据，就首先必须在java语言中如何描述，表示文件</p><h2 id="相对路径与绝对路径" tabindex="-1"><a class="header-anchor" href="#相对路径与绝对路径" aria-hidden="true">#</a> 相对路径与绝对路径</h2><figure><img src="'+t+`" alt="image-20221014163430331" tabindex="0" loading="lazy"><figcaption>image-20221014163430331</figcaption></figure><p><strong>绝对路径：</strong></p><ul><li>绝对路径名是 完整的路径名，不需要任何其他信息就可以定位它所表示的文件</li><li>windows：E:\\demo\\first\\a.txt</li></ul><p><strong>相对路径</strong></p><ul><li>相反，相对路径名必须使用取自其他路径名的信息进行解释(不完整的路径名)</li><li>windows: (e:\\demo)second\\a.txt</li></ul><p><strong>java语言中，相对路径默认相对于谁？</strong></p><ul><li>默认情况下，java.io包中的类总是根据 当前用户目录 来解析相对路径名。此目录由系统属性 user.dir 指定，通常是 Java 虚拟机的调用目录。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.dir&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="不同系统的路径表示" tabindex="-1"><a class="header-anchor" href="#不同系统的路径表示" aria-hidden="true">#</a> 不同系统的路径表示</h2><p>对于类 <strong>UNIX</strong> 平台，绝对路径名的前缀始终是 &quot;/&quot;。相对路径名没有前缀。表示根目录的绝对路径名的前缀为 &quot;/&quot; 且名称序列为空。</p><ul><li>绝对路径： /home/st/6379.conf</li><li>相对路径： st/a.txt</li><li>根目录： /</li></ul><p>对于 <strong>Microsoft Windows</strong> 平台，包含盘符的路径名前缀由驱动器号和一个 &quot;:&quot; 组成。如果路径名是绝对路径名，还可能后跟 &quot;\\“</p><ul><li>绝对路径： e:\\st\\a.txt</li><li>相对路径：没有盘符前缀 st\\a.txt</li></ul><h1 id="file类" tabindex="-1"><a class="header-anchor" href="#file类" aria-hidden="true">#</a> File类</h1><p>文件和目录路径名的抽象表示形式</p><h2 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">File</span> <span class="token punctuation">(</span><span class="token class-name">String</span> pathname<span class="token punctuation">)</span>
<span class="token class-name">File</span> <span class="token punctuation">(</span><span class="token class-name">String</span> parent<span class="token punctuation">,</span> <span class="token class-name">Sting</span> child<span class="token punctuation">)</span>
<span class="token class-name">File</span> <span class="token punctuation">(</span><span class="token class-name">File</span> parent<span class="token punctuation">,</span> <span class="token class-name">String</span> child<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _15file<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_02api<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/14 17:07
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">APITest</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构造方法</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myTest1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// File (String pathname)</span>
        <span class="token comment">//File file = new File(&quot;a.txt&quot;);</span>
        <span class="token comment">//File file2 = new File(&quot;D:\\\\workspace2\\\\java46th\\\\a.txt&quot;);</span>
        <span class="token comment">// //判断，File对象表示的文件，是否物理存在</span>
        <span class="token comment">//public boolean exists()</span>
        <span class="token comment">//System.out.println(&quot;file.exists() = &quot; + file.exists());</span>

        <span class="token comment">//File (String parent, Sting child)</span>
        <span class="token comment">//File file1 = new File(&quot;D:\\\\workspace2\\\\java46th&quot;, &quot;a.txt&quot;);</span>
        <span class="token comment">//System.out.println(file1.exists());</span>

        <span class="token comment">//File (File parent, String child)</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\\\\\workspace2\\\\\\\\java46th&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="成员方法" tabindex="-1"><a class="header-anchor" href="#成员方法" aria-hidden="true">#</a> 成员方法</h2><h3 id="创建功能" tabindex="-1"><a class="header-anchor" href="#创建功能" aria-hidden="true">#</a> 创建功能</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//只负责创建文件，目录路径如果不存在，会报错而不是帮你创建</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 

<span class="token comment">//只负责创建目录，但只能创建单层目录，如果有多级目录不存在的话，创建失败</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token comment">//只负责创建目录，但可以创建多级目录，如果多级目录不存在，则帮你全部创建</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>mkdir 和 mkdirs创建目录的区别：</strong></p><ul><li>mkdir仅能在已经存在的目录下，创建新的目录</li><li>mkdirs 当要创建的目标目录，如果目标目录的父目录不存在的时候，它会将不存在的目标木目录的父目录 连同目标目录一起，都创建好</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _15file<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_02api<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/14 17:07
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">APITest</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构造方法</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myTest1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// File (String pathname)</span>
        <span class="token comment">//File file = new File(&quot;a.txt&quot;);</span>
        <span class="token comment">//File file2 = new File(&quot;D:\\\\workspace2\\\\java46th\\\\a.txt&quot;);</span>
        <span class="token comment">// //判断，File对象表示的文件，是否物理存在</span>
        <span class="token comment">//public boolean exists()</span>
        <span class="token comment">//System.out.println(&quot;file.exists() = &quot; + file.exists());</span>

        <span class="token comment">//File (String parent, Sting child)</span>
        <span class="token comment">//File file1 = new File(&quot;D:\\\\workspace2\\\\java46th&quot;, &quot;a.txt&quot;);</span>
        <span class="token comment">//System.out.println(file1.exists());</span>

        <span class="token comment">//File (File parent, String child)</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\\\\\workspace2\\\\\\\\java46th&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">/*
    创建功能
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myTest2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;b.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// //只负责创建文件，目录路径如果不存在，会报错而不是帮你创建</span>
        <span class="token comment">//public boolean createNewFile()</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">////只负责创建目录，但只能创建单层目录，如果有多级目录不存在的话，创建失败</span>
        <span class="token comment">//public boolean mkdir()</span>
        <span class="token class-name">File</span> dir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">////只负责创建目录，但可以创建多级目录，如果多级目录不存在，则帮你全部创建</span>
        <span class="token comment">//public boolean mkdirs()</span>
        <span class="token class-name">File</span> dir2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;a\\\\b\\\\c.mp3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dir2<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重命名功能" tabindex="-1"><a class="header-anchor" href="#重命名功能" aria-hidden="true">#</a> 重命名功能</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 重新命名此抽象路径名表示的文件</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">renameTo</span><span class="token punctuation">(</span><span class="token class-name">File</span> dest<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>在源文件，和修改之后的目标文件在同一目录的时候：</p><ul><li>效果只是重命名</li></ul></li><li><p>当源文件和，修改之后的目标文件当不在同一目录的时候：</p><ul><li>移动文件</li><li>重命名</li></ul></li></ul><h3 id="删除功能" tabindex="-1"><a class="header-anchor" href="#删除功能" aria-hidden="true">#</a> 删除功能</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 删除此抽象路径名表示的文件或目录。如果此路径名表示一个目录，则该目录必须为空才能删除</span>
<span class="token comment">// delete不会因为文件不存在,路径名不正确而抛出异常,只会返回false, 并且不会进入回收站</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断功能" tabindex="-1"><a class="header-anchor" href="#判断功能" aria-hidden="true">#</a> 判断功能</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 判断File对象是否表示的是一个文件</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//判断File对象是否表示的是一个目录</span>
 <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 

<span class="token comment">//判断，File对象表示的文件，是否物理存在</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本获取功能" tabindex="-1"><a class="header-anchor" href="#基本获取功能" aria-hidden="true">#</a> 基本获取功能</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//获取File对象表示的抽象文件的绝对路径</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//获取File对象表示的抽象文件，路径名字符串</span>
 <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//获取文件或者目录的名字</span>
 <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//返回由此抽象路径名表示的文件的长度。不能返回文件夹的长度</span>
<span class="token comment">//此抽象路径名表示的文件的长度，以字节为单位；如果文件不存在，则返回 0L</span>
 <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//返回此抽象路径名表示的文件最后一次被修改的时间。</span>
<span class="token comment">//表示文件最后一次被修改的时间的 long 值，用与时间点（1970 年1月1日，00:00:00 GMT）之间的毫秒数表示</span>
<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">lastModified</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高级获取功能" tabindex="-1"><a class="header-anchor" href="#高级获取功能" aria-hidden="true">#</a> 高级获取功能</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//返回一个字符串数组，这些字符串包括，此抽象的路径名表示的目录中的所有文件和文件夹的名字</span>
<span class="token comment">//如果File对象表示的是一个文件，则返回null</span>
<span class="token comment">//只能获取当前目录的下一层，并不是获取所有层级</span>
<span class="token comment">//如果是一个空目录，返回一个长度为0的数组，而不是null  []</span>
<span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
        
<span class="token comment">//返回指定File目录下的文件和文件夹的绝对路径形式的File对象数组</span>
<span class="token comment">//如果File对象表示的是一个文件，则返回null</span>
<span class="token comment">//只能获取当前目录的下一层，并不是获取所有层级</span>
<span class="token comment">//如果是一个空目录，返回一个长度为0的数组，而不是null</span>
<span class="token keyword">public</span> <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>练习1<br> 判断某个目录(单级)下有没有a.jpg文件,有的话输出</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _15file<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_02api<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/14 17:41
 **/</span>
<span class="token comment">/*
练习1
判断某个目录(单级)下有没有a.jpg文件,有的话输出
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ex</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建File对象</span>
        <span class="token class-name">File</span> dir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\app2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// listFiles----&gt; File[]</span>
        <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> dir<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 遍历数组</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> file <span class="token operator">:</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 判断是不是文件</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 如果是文件</span>
                <span class="token comment">// 再判断是否是目标文件</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;a.jpg&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 如果是 输出绝对路径</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>练习2<br> 递归输出某个目录下的所有java文件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _15file<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_02api<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/14 17:46
 **/</span>
<span class="token comment">/*
练习2
递归输出某个目录下的所有java文件
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ex2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建File对象</span>
        <span class="token class-name">File</span> dir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\app2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">findAllJava</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">findAllJava</span><span class="token punctuation">(</span><span class="token class-name">File</span> dir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// listFiles----&gt; File[]</span>
        <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> dir<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 遍历数组</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> file <span class="token operator">:</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 判断如果是文件</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 再判断是否是.java文件</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 如果是 输出绝对路径</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 如果是目录</span>
                <span class="token comment">// 递归</span>
                <span class="token function">findAllJava</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件过滤器" tabindex="-1"><a class="header-anchor" href="#文件过滤器" aria-hidden="true">#</a> 文件过滤器</h2><ul><li><p>自定义获取功能是在高级获取功能的基础上，加了一个过滤器，所以高级功能的特点它都有</p></li><li><p>FileFilter是一个接口，它只有下面一个方法</p><ul><li><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//测试指定抽象路径名是否应该包含在某个路径名列表中
boolean accept(File pathname)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>这个方法相当于把高级功能中listFiles()获取的File数组中File对象遍历一遍，然后逐个判断</p></li><li><p>符合条件的留下，不符合条件的干掉（丢弃）-</p></li></ul></li><li><p>常用匿名内部类来做实现</p></li></ul><p>练习:<br> 输出某个目录(单级)下的所有java文件,使用过滤器.</p><p>3种方式实现<br> 匿名对象<br> 匿名内部类<br> lambda表达式</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _15file<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>_02api<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileFilter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/15 9:27
 **/</span>
<span class="token comment">/*
练习:
输出某个目录(单级)下的所有java文件,使用过滤器.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ex3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建File对象</span>
        <span class="token class-name">File</span> dir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\app2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 利用带过滤器的listFiles方法---&gt;File[]</span>
        <span class="token comment">//File[] files = dir.listFiles(new MyFileFilter());</span>

        <span class="token comment">// 匿名内部类</span>
        <span class="token comment">//File[] files = dir.listFiles(new FileFilter() {</span>
        <span class="token comment">//    @Override</span>
        <span class="token comment">//    public boolean accept(File pathname) {</span>
        <span class="token comment">//        return pathname.getName().endsWith(&quot;.jpg&quot;);</span>
        <span class="token comment">//    }</span>
        <span class="token comment">//</span>
        <span class="token comment">//});</span>

        <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> dir<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pathname<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> pathname<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyFileFilter</span> <span class="token keyword">implements</span> <span class="token class-name">FileFilter</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">File</span> pathname<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pathname<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50),l=[i];function c(o,u){return s(),a("div",null,l)}const r=n(p,[["render",c],["__file","11_File.html.vue"]]);export{r as default};

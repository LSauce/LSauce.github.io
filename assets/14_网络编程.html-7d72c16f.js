import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c,b as n,d as s,e as o,f as l}from"./app-58d2c58f.js";const i="/assets/image-20221021152055559-03b3ef35.png",u="/assets/image-20221021152154651-12a1524b.png",k="/assets/image-20221021164014788-1ba6645a.png",r="/assets/image-20221021172051148-61e6e410.png",d="/assets/image-20221022100647203-9857f8f5.png",m={},v=l('<p>学习目标:</p><ul><li>掌握UDP编程</li><li>掌握TCP编程</li></ul><p>所谓的网络编程，就是实现互联网络中的不同计算机上运行程序间的数据交换。Java网络编程，自然就是实现两个Java进程之间的数据交换。<strong>（启动一个main方法就是启动一个Java进程）</strong></p><p>对于Java程序员而言，日常工作几乎不会直接涉及到底层网络协议和实现细节，网络编程的原理无论是出于面试还是实际开发的需求，都谈不上重要知识点。所以本章节的内容以实现功能为主，无意讲太多计算机网络的基础知识和概念。甚至，我会尽量排除这些知识和概念，我们一起来专注于Java代码本身。</p><h1 id="网络编程三要素" tabindex="-1"><a class="header-anchor" href="#网络编程三要素" aria-hidden="true">#</a> 网络编程三要素</h1><p>对于实现Java网络编程，我们仅需要知道，两台不同计算机上的进程实现通信交互数据的条件，一般我们把这个概念称之为**“网络通信三要素”**。</p><p>这三个要素是：</p><ol><li>IP地址（InetAddress）： 是计算机网络中主机的唯一标识，可以用来<strong>唯一确定一台主机</strong>。比如在一个局域网下，会给每台计算机分配一个IP地址，这个IP地址指向唯一的一台主机。</li><li>端口号（port）：光有IP地址确定主机还不够，因为网络编程实现的是两个进程间的通信。<strong>端口号用来在网络编程中唯一确定一个（Java）进程。</strong></li><li>传输协议（protocol）：有了IP地址和端口号，就可以确定进行通信的主机和进程了。现在只需要双方都遵循一定的通信规则，就可以实现通讯了。这就是传输协议。常见的传输协议是TCP和UDP。</li></ol><p>举个例子：</p><p>我想找一个人聊天</p><p>第一个条件：要先找到这个人（IP地址）</p><p>第二个条件：这个人要能正常听到我说话，耳朵。（端口号）</p><p>第三个条件：对方只能听懂汉语，那我就必须说汉语。（传输协议）</p><p>于是对于两台计算机的一次数据传输通信，就可以大致的、通俗的做以下描述：</p><p>A主机作为发送端首先要明确接收端的IP地址和端口号，其上的一个进程（比如Java进程）确认好要传输的数据，然后根据传输协议的不同，选择不同的方式进行传输。</p><p>在这里，我们就具体使用两种不同的传输协议来讲解Java网络编程，它们就是：</p><ol><li>UDP协议，该协议进行数据传输是一种面向无连接的、不可靠的，但效率更高的传输方式。<strong>它的最大特点是，要求传输的过程中将数据封装成数据包然后进行传输。</strong></li><li>TCP协议，该协议进行数据传输是一种面向连接的、稳定可靠的，但效率稍低的传输方式。<strong>它的最大特点是，需要先建立连接再进行传输，并且传输的过程通过IO流的形式出现（所以TCP网络编程需要使用Java IO）。</strong></li></ol><figure><img src="'+i+'" alt="image-20221021152055559" tabindex="0" loading="lazy"><figcaption>image-20221021152055559</figcaption></figure><h1 id="udp编程" tabindex="-1"><a class="header-anchor" href="#udp编程" aria-hidden="true">#</a> UDP编程</h1><h2 id="传输原理" tabindex="-1"><a class="header-anchor" href="#传输原理" aria-hidden="true">#</a> 传输原理</h2><figure><img src="'+u+`" alt="image-20221021152154651" tabindex="0" loading="lazy"><figcaption>image-20221021152154651</figcaption></figure><h2 id="发送端步骤" tabindex="-1"><a class="header-anchor" href="#发送端步骤" aria-hidden="true">#</a> 发送端步骤</h2><ol><li>创建发送端的socket对象</li><li>把要发送的数据封装成数据报包</li><li>send方法发送数据报包</li><li>释放资源close</li></ol><h2 id="接收端步骤" tabindex="-1"><a class="header-anchor" href="#接收端步骤" aria-hidden="true">#</a> 接收端步骤</h2><ol><li>创建接收端的socket对象</li><li>创建用于接收的数据报包</li><li>receive方法接收数据</li><li>解析数据报包</li><li>释放资源close</li></ol><h2 id="datagramsocket" tabindex="-1"><a class="header-anchor" href="#datagramsocket" aria-hidden="true">#</a> DatagramSocket</h2><p>此类表示用来发送和接收数据报包的套接字。</p><p><strong>构造方法</strong></p><p>DatagramSocket(int port) 创建数据报套接字并将其绑定到本地主机上的指定端口。</p><p><strong>成员方法</strong></p><table><thead><tr><th>void</th><th>receive(DatagramPacket p) 从此套接字接收数据报包。</th></tr></thead><tbody><tr><td>void</td><td>send(DatagramPacket p) 从此套接字发送数据报包。</td></tr></tbody></table><h2 id="datagrampacket" tabindex="-1"><a class="header-anchor" href="#datagrampacket" aria-hidden="true">#</a> DatagramPacket</h2><p>此类表示数据报包。</p><p><strong>构造方法</strong></p><p>用于发送的</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf<span class="token punctuation">,</span>  <span class="token keyword">int</span> offset<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">,</span> <span class="token class-name">InetAddress</span> address<span class="token punctuation">,</span> <span class="token keyword">int</span> port<span class="token punctuation">)</span>        构造数据报包，用来将长度为 length 偏移量为 offset  的包发送到指定主机上的指定端口号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用于接收的</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf<span class="token punctuation">,</span>  <span class="token keyword">int</span> offset<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span>       构造  <span class="token class-name">DatagramPacket</span>，用来接收长度为 length 的包，在缓冲区中指定了偏移量。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>成员方法</strong></p><table><thead><tr><th>byte[]</th><th>getData() 返回数据缓冲区。</th></tr></thead><tbody><tr><td>int</td><td>getLength() 返回将要发送或接收到的数据的长度。</td></tr><tr><td>int</td><td>getOffset() 返回将要发送或接收到的数据的偏移量。</td></tr></tbody></table><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><h3 id="v1-发送端发送消息-接收端接收并打印" tabindex="-1"><a class="header-anchor" href="#v1-发送端发送消息-接收端接收并打印" aria-hidden="true">#</a> v1 发送端发送消息,接收端接收并打印</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>udp<span class="token punctuation">.</span>v1<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramPacket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramSocket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 接收端
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 15:50
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Receiver</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// - 创建接收端的socket对象</span>
        <span class="token class-name">DatagramSocket</span> datagramSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//- 创建用于接收的数据报包</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// DatagramPacket(byte[] buf,  int offset, int length)</span>
        <span class="token comment">// 构造  DatagramPacket，用来接收长度为 length 的包，在缓冲区中指定了偏移量。</span>
        <span class="token class-name">DatagramPacket</span> receivePacket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//- receive方法接收数据</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;receive before&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        datagramSocket<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>receivePacket<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;receive after&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//- 解析数据报包</span>
        <span class="token comment">// | byte[] | getData()        返回数据缓冲区。                       |</span>
        <span class="token comment">//| int    | getLength()        返回将要发送或接收到的数据的长度。   |</span>
        <span class="token comment">//| int    | getOffset()        返回将要发送或接收到的数据的偏移量。 |</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> receivePacket<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> offset <span class="token operator">=</span> receivePacket<span class="token punctuation">.</span><span class="token function">getOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> receivePacket<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到了:&quot;</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//- 释放资源close</span>
        datagramSocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>udp<span class="token punctuation">.</span>v1<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramPacket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">InetAddress</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 发送端
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 15:50
 **/</span>
<span class="token comment">/*
v1 发送端发送消息,接收端接收并打印
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sender</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// - 创建发送端的socket对象</span>
        <span class="token comment">//DatagramSocket(int port)</span>
        <span class="token comment">// 创建数据报套接字并将其绑定到本地主机上的指定端口。</span>
        <span class="token class-name">DatagramSocket</span> datagramSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//- 把要发送的数据封装成数据报包</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;hello udp&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InetAddress</span> targetIP <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token number">9999</span><span class="token punctuation">;</span>

        <span class="token comment">// DatagramPacket(byte[] buf,  int offset, int length, InetAddress address, int port)</span>
        <span class="token comment">// 构造数据报包，用来将长度为 length 偏移量为 offset  的包发送到指定主机上的指定端口号</span>
        <span class="token class-name">DatagramPacket</span> sendPacket <span class="token operator">=</span>
                <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">,</span> targetIP<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//- send方法发送数据报包</span>
        datagramSocket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>sendPacket<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//- 释放资源close</span>
        datagramSocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v2-使用工具类优化v1" tabindex="-1"><a class="header-anchor" href="#v2-使用工具类优化v1" aria-hidden="true">#</a> v2 使用工具类优化v1</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">utils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramPacket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">InetAddress</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">UnknownHostException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 16:02
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NetworkUtils</span> <span class="token punctuation">{</span>
    <span class="token comment">// 用于获取发送的数据报包</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DatagramPacket</span> <span class="token function">getSendPacket</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">,</span><span class="token class-name">String</span> ip<span class="token punctuation">,</span><span class="token keyword">int</span> port<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnknownHostException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 把数据封装成包</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InetAddress</span> targetIP <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建用于发送的数据报包</span>
        <span class="token class-name">DatagramPacket</span> sendPacket <span class="token operator">=</span>
                <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">,</span> targetIP<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//最终 return 装满了数据的一个包</span>
        <span class="token keyword">return</span> sendPacket<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">// 用于获取接收的数据报包</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DatagramPacket</span> <span class="token function">getReceivePacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">DatagramPacket</span> receivePacket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// return 一个空的数据报包</span>
        <span class="token keyword">return</span> receivePacket<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">// 用于解析数据报包的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">parseMsg</span><span class="token punctuation">(</span><span class="token class-name">DatagramPacket</span> receivePacket<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> receivePacket<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> offset <span class="token operator">=</span> receivePacket<span class="token punctuation">.</span><span class="token function">getOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> receivePacket<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 最终返回包里的数据 String</span>
        <span class="token keyword">return</span> s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v3-发送端接收端相互发送" tabindex="-1"><a class="header-anchor" href="#v3-发送端接收端相互发送" aria-hidden="true">#</a> v3 发送端接收端相互发送</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>udp<span class="token punctuation">.</span>v3<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">utils<span class="token punctuation">.</span></span><span class="token class-name">NetworkUtils</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramPacket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 16:26
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Receiver</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建接收端的socket对象</span>
        <span class="token class-name">DatagramSocket</span> datagramSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建Scanner对象</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// while</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 接收逻辑</span>
            <span class="token comment">// 创建用于接收的数据报包</span>
            <span class="token class-name">DatagramPacket</span> receivePacket <span class="token operator">=</span> <span class="token class-name">NetworkUtils</span><span class="token punctuation">.</span><span class="token function">getReceivePacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// receive</span>
            datagramSocket<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>receivePacket<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//解析</span>
            <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token class-name">NetworkUtils</span><span class="token punctuation">.</span><span class="token function">parseMsg</span><span class="token punctuation">(</span>receivePacket<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 打印</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到了来自:&quot;</span><span class="token operator">+</span>receivePacket<span class="token punctuation">.</span><span class="token function">getSocketAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>
                    <span class="token string">&quot;的消息: &quot;</span> <span class="token operator">+</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 发送逻辑</span>
            <span class="token comment">// 接收键盘数据</span>
            <span class="token class-name">String</span> s <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 把要发送的数据封装成数据报包</span>
            <span class="token class-name">DatagramPacket</span> sendPacket <span class="token operator">=</span>
                    <span class="token class-name">NetworkUtils</span><span class="token punctuation">.</span><span class="token function">getSendPacket</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// send</span>
            datagramSocket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>sendPacket<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>udp<span class="token punctuation">.</span>v3<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">utils<span class="token punctuation">.</span></span><span class="token class-name">NetworkUtils</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramPacket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 发送端
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 16:20
 **/</span>
<span class="token comment">/*
v3 发送端接收端相互发送
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sender</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建发送端的socket对象</span>
        <span class="token class-name">DatagramSocket</span> datagramSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建scanner对象</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// while循环</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 发送逻辑</span>
            <span class="token comment">// 先接收键盘数据</span>
            <span class="token class-name">String</span> s <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 把要发送的数据封装成数据报包</span>
            <span class="token class-name">DatagramPacket</span> sendPacket <span class="token operator">=</span>
                    <span class="token class-name">NetworkUtils</span><span class="token punctuation">.</span><span class="token function">getSendPacket</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// send</span>
            datagramSocket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>sendPacket<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 接收逻辑</span>
            <span class="token comment">// 创建用于接收的数据报包</span>
            <span class="token class-name">DatagramPacket</span> receivePacket <span class="token operator">=</span> <span class="token class-name">NetworkUtils</span><span class="token punctuation">.</span><span class="token function">getReceivePacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// receive接收</span>
            datagramSocket<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>receivePacket<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 解析</span>
            <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token class-name">NetworkUtils</span><span class="token punctuation">.</span><span class="token function">parseMsg</span><span class="token punctuation">(</span>receivePacket<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 打印</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到了来自:&quot;</span><span class="token operator">+</span>receivePacket<span class="token punctuation">.</span><span class="token function">getSocketAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>
                    <span class="token string">&quot;的消息: &quot;</span> <span class="token operator">+</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v4-使用多线程优化v3" tabindex="-1"><a class="header-anchor" href="#v4-使用多线程优化v3" aria-hidden="true">#</a> v4 使用多线程优化v3</h3><figure><img src="`+k+`" alt="image-20221021164014788" tabindex="0" loading="lazy"><figcaption>image-20221021164014788</figcaption></figure><p>思路:</p><p>定义发送任务 SendTask 专门用来发送消息</p><p>定义成员变量</p><p>DatagramSocket datagramSocket;</p><p>String ip;</p><p>int port;</p><p>定义接收任务 receiveTask 专门用来接收消息</p><p>定义成员变量</p><p>DatagramSocket datagramSocket;</p><p>OnePerson:</p><p>创建用于发送的线程</p><p>创建用于接收的线程</p><p>AnotherPerson:</p><p>创建用于发送的线程</p><p>创建用于接收的线程</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>udp<span class="token punctuation">.</span>v4<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">utils<span class="token punctuation">.</span></span><span class="token class-name">NetworkUtils</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramPacket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramSocket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 接收任务
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 16:49
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReceiveTask</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义成员变量</span>
    <span class="token class-name">DatagramSocket</span> datagramSocket<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ReceiveTask</span><span class="token punctuation">(</span><span class="token class-name">DatagramSocket</span> datagramSocket<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>datagramSocket <span class="token operator">=</span> datagramSocket<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 只接收消息</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 创建用于接收的数据报包</span>
            <span class="token class-name">DatagramPacket</span> receivePacket <span class="token operator">=</span> <span class="token class-name">NetworkUtils</span><span class="token punctuation">.</span><span class="token function">getReceivePacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// receive接收</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                datagramSocket<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>receivePacket<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 解析</span>
                <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token class-name">NetworkUtils</span><span class="token punctuation">.</span><span class="token function">parseMsg</span><span class="token punctuation">(</span>receivePacket<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 打印</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到了来自:&quot;</span><span class="token operator">+</span>receivePacket<span class="token punctuation">.</span><span class="token function">getSocketAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>
                        <span class="token string">&quot;的消息: &quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>udp<span class="token punctuation">.</span>v4<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">utils<span class="token punctuation">.</span></span><span class="token class-name">NetworkUtils</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramPacket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">UnknownHostException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 发送任务
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 16:45
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SendTask</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
    <span class="token comment">// 定义成员变量</span>
    <span class="token class-name">DatagramSocket</span> datagramSocket<span class="token punctuation">;</span>

    <span class="token class-name">String</span> ip<span class="token punctuation">;</span>

    <span class="token keyword">int</span> port<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">SendTask</span><span class="token punctuation">(</span><span class="token class-name">DatagramSocket</span> datagramSocket<span class="token punctuation">,</span> <span class="token class-name">String</span> ip<span class="token punctuation">,</span> <span class="token keyword">int</span> port<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>datagramSocket <span class="token operator">=</span> datagramSocket<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ip <span class="token operator">=</span> ip<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>port <span class="token operator">=</span> port<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 只发送消息</span>
        <span class="token comment">// 创建Scanner对象</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 键盘接收数据</span>
            <span class="token class-name">String</span> s <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 封装成数据报包</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">DatagramPacket</span> sendPacket <span class="token operator">=</span> <span class="token class-name">NetworkUtils</span><span class="token punctuation">.</span><span class="token function">getSendPacket</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> ip<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// send</span>
                datagramSocket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>sendPacket<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnknownHostException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>udp<span class="token punctuation">.</span>v4<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramSocket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 16:52
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OnePerson</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token class-name">DatagramSocket</span> datagramSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建用于发送的线程</span>
        <span class="token comment">//创建用于接收的线程</span>
        <span class="token comment">// start</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SendTask</span><span class="token punctuation">(</span>datagramSocket<span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ReceiveTask</span><span class="token punctuation">(</span>datagramSocket<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>udp<span class="token punctuation">.</span>v4<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramSocket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 16:52
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnotherPerson</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token class-name">DatagramSocket</span> datagramSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建用于发送的线程</span>
        <span class="token comment">//创建用于接收的线程</span>
        <span class="token comment">// start</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SendTask</span><span class="token punctuation">(</span>datagramSocket<span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ReceiveTask</span><span class="token punctuation">(</span>datagramSocket<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="tcp编程" tabindex="-1"><a class="header-anchor" href="#tcp编程" aria-hidden="true">#</a> TCP编程</h1><h2 id="传输原理-1" tabindex="-1"><a class="header-anchor" href="#传输原理-1" aria-hidden="true">#</a> 传输原理</h2><figure><img src="`+r+`" alt="image-20221021172051148" tabindex="0" loading="lazy"><figcaption>image-20221021172051148</figcaption></figure><h2 id="客户端步骤-client" tabindex="-1"><a class="header-anchor" href="#客户端步骤-client" aria-hidden="true">#</a> 客户端步骤(Client)</h2><ol><li>创建客户端Socket对象</li><li>从socket中获取输入输出流</li><li>利用输出输出流进行读写操作</li><li>释放资源close</li></ol><h2 id="服务端步骤-server" tabindex="-1"><a class="header-anchor" href="#服务端步骤-server" aria-hidden="true">#</a> 服务端步骤(Server)</h2><ol><li>创建服务端的socket对象(ServerSocket)</li><li>通过accept建立连接, 得到socket对象</li><li>从socket中得到输入输出流</li><li>利用输入输出流进行读写操作</li><li>释放资源</li></ol><h2 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> Socket</h2><p>此类实现客户端套接字</p><p><strong>构造方法</strong></p><p>Socket(String host, int port) 创建一个流套接字并将其连接到指定主机上的指定端口号。</p><p><strong>成员方法</strong></p><table><thead><tr><th>InputStream</th><th>getInputStream() 返回此套接字的输入流。</th></tr></thead><tbody><tr><td>OutputStream</td><td>getOutputStream() 返回此套接字的输出流。</td></tr></tbody></table><table><thead><tr><th>void</th><th>shutdownOutput() 禁用此套接字的输出流。</th></tr></thead><tbody><tr><td></td><td>Socket半关闭</td></tr></tbody></table><h2 id="serversocket" tabindex="-1"><a class="header-anchor" href="#serversocket" aria-hidden="true">#</a> ServerSocket</h2><p>此类实现服务器套接字</p><p><strong>构造方法</strong></p><p>ServerSocket(int port) 创建绑定到特定端口的服务器套接字。</p><p><strong>成员方法</strong></p><table><thead><tr><th>Socket</th><th>accept() 侦听并接受到此套接字的连接。</th></tr></thead><tbody><tr><td></td><td></td></tr></tbody></table><h2 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1" aria-hidden="true">#</a> 案例</h2><h3 id="v1-客户端发送消息-服务端接收并打印" tabindex="-1"><a class="header-anchor" href="#v1-客户端发送消息-服务端接收并打印" aria-hidden="true">#</a> v1 客户端发送消息,服务端接收并打印</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>tcp<span class="token punctuation">.</span>v1<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">OutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 客户端
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 17:31
 **/</span>
<span class="token comment">/*
v1 客户端发送消息,服务端接收并打印
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">//- 创建客户端Socket对象</span>
        <span class="token comment">// Socket(String host,  int port)</span>
        <span class="token comment">// 创建一个流套接字并将其连接到指定主机上的指定端口号。</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">12306</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//- 从socket中获取输入输出流</span>
        <span class="token comment">// getOutputStream()   返回此套接字的输出流。</span>
        <span class="token class-name">OutputStream</span> out <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//- 利用输出输出流进行读写操作</span>
        out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;hello tcp&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//- 释放资源close</span>
        out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>tcp<span class="token punctuation">.</span>v1<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">ServerSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 服务端
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 17:31
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">// - 创建服务端的socket对象(ServerSocket)</span>
        <span class="token comment">// ServerSocket(int port)</span>
        <span class="token comment">// 创建绑定到特定端口的服务器套接字。</span>
        <span class="token class-name">ServerSocket</span> serverSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">12306</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//- 通过accept建立连接, 得到socket对象</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;accept before&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;accept after&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//- 从socket中得到输入输出流</span>
        <span class="token comment">// getInputStream()        返回此套接字的输入流。</span>
        <span class="token class-name">InputStream</span> in <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//- 利用输入输出流进行读写操作</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> readCount <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> readCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//- 释放资源</span>
        socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        serverSocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v2-多个客户端发送-服务端接收-多线程处理" tabindex="-1"><a class="header-anchor" href="#v2-多个客户端发送-服务端接收-多线程处理" aria-hidden="true">#</a> v2 多个客户端发送,服务端接收(多线程处理)</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>tcp<span class="token punctuation">.</span>v2<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">OutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 客户端
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 17:43
 **/</span>
<span class="token comment">/*
v2 多个客户端发送,服务端接收(多线程处理)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建客户端socket对象</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 循环</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 键盘接收数据</span>
            <span class="token class-name">String</span> s <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 从socket中获取输出流</span>
            <span class="token class-name">OutputStream</span> out <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// write</span>
            out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>




<span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>tcp<span class="token punctuation">.</span>v2<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">ServerSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ExecutorService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Executors</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 服务端
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/21 17:43
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建服务端socket对象</span>
        <span class="token class-name">ServerSocket</span> serverSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建线程池</span>
        <span class="token class-name">ExecutorService</span> pool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 循环</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// accept方法建立连接</span>
            <span class="token class-name">Socket</span> socket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//new Thread(new ConnectTask(socket)).start();</span>
            <span class="token comment">// 提交任务</span>
            pool<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConnectTask</span><span class="token punctuation">(</span>socket<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConnectTask</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
    <span class="token comment">// 定义成员变量</span>
    <span class="token class-name">Socket</span> socket<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ConnectTask</span><span class="token punctuation">(</span><span class="token class-name">Socket</span> socket<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>socket <span class="token operator">=</span> socket<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 得到socket对象</span>
            <span class="token comment">// 从socket中获取输入流</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">InputStream</span> in <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// read</span>
                <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> readCount <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 打印</span>
                <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> readCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到了来自&quot;</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
                        socket<span class="token punctuation">.</span><span class="token function">getInetAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> socket<span class="token punctuation">.</span><span class="token function">getPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v3-客户端发送对象-序列化-服务端接收" tabindex="-1"><a class="header-anchor" href="#v3-客户端发送对象-序列化-服务端接收" aria-hidden="true">#</a> v3 客户端发送对象(序列化),服务端接收</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>tcp<span class="token punctuation">.</span>v3<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ObjectOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">OutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/22 9:46
 **/</span>
<span class="token comment">/*
v3 客户端发送对象(序列化),服务端接收
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建客户端的socket对象</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">11111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建学生对象</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取输出流 OutputStream</span>
        <span class="token class-name">OutputStream</span> outputStream <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建序列化流对象ObjectOutputStream</span>
        <span class="token class-name">ObjectOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span>outputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// writeObject()</span>
        out<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 释放资源close</span>
        out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>tcp<span class="token punctuation">.</span>v3<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ObjectInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">ServerSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/22 9:46
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建服务端的socket对象</span>
        <span class="token class-name">ServerSocket</span> serverSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">11111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// accept建立练级 得到socket对象</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 从socket中获取输入流InputStream</span>
        <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建反序列化流对象ObjectInputStream</span>
        <span class="token class-name">ObjectInputStream</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// readObject()</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> in<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 打印</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// close</span>
        socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        serverSocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>tcp<span class="token punctuation">.</span>v3<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/22 9:47
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1049823664553329306L</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Student{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v4-客户端上传文件到服务端" tabindex="-1"><a class="header-anchor" href="#v4-客户端上传文件到服务端" aria-hidden="true">#</a> v4 客户端上传文件到服务端</h3><p>思路:</p><figure><img src="`+d+`" alt="image-20221022100647203" tabindex="0" loading="lazy"><figcaption>image-20221022100647203</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>tcp<span class="token punctuation">.</span>v4<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">OutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/22 10:07
 **/</span>
<span class="token comment">/*
客户端上传文件到服务器
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建客户端的socket对象</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建自己的输入流对象</span>
        <span class="token class-name">FileInputStream</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\a.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//FileInputStream in = new FileInputStream(&quot;D:\\\\b.txt&quot;);</span>
        <span class="token comment">// 从socket中获取输出流</span>
        <span class="token class-name">OutputStream</span> out <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 边读边写</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> readCount<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>readCount <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>readCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;while end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//  void shutdownOutput()</span>
        <span class="token comment">// 禁用此套接字的输出流。</span>
        socket<span class="token punctuation">.</span><span class="token function">shutdownOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 循环结束 文件上传完成</span>
        <span class="token comment">// 接收来自服务端的反馈消息</span>
        <span class="token comment">// 从socket获取输入流</span>
        <span class="token class-name">InputStream</span> in2 <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;read before&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> readCount2 <span class="token operator">=</span> in2<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;read after&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes1<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>readCount2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// close</span>
        in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">package</span> _22network<span class="token punctuation">.</span>com<span class="token punctuation">.</span>cskaoyan<span class="token punctuation">.</span>tcp<span class="token punctuation">.</span>v4<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">OutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">ServerSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: 景天
 * <span class="token keyword">@date</span>: 2022/10/22 10:07
 **/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建服务端的socket对象</span>
        <span class="token class-name">ServerSocket</span> serverSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建自己的输出流对象</span>
        <span class="token class-name">FileOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;server_a.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//FileOutputStream out = new FileOutputStream(&quot;server_a.txt&quot;);</span>

        <span class="token comment">// accept建立连接 得到socket对象</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 从socket中获取输入流</span>
        <span class="token class-name">InputStream</span> in <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 边读边写</span>
        <span class="token keyword">int</span> readCount<span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>readCount <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>readCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;while end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 循环结束 保存完成</span>
        <span class="token comment">// 从socket中获取输出流</span>
        <span class="token comment">// 给客户端一个反馈消息</span>
        <span class="token class-name">OutputStream</span> out2 <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        out2<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;文件已经上传成功&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// close</span>
        out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        serverSocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常见异常</strong></p><ul><li>java.net.ConnectException: Connection refused 先启动了Client会造成这个异常</li><li>java.net.BindException: Address already in use: JVM_Bind 端口号被占用(换个端口)</li></ul><h1 id="三次握手四次挥手-了解" tabindex="-1"><a class="header-anchor" href="#三次握手四次挥手-了解" aria-hidden="true">#</a> 三次握手四次挥手(了解)</h1><h2 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h2><p>三次握手是TCP连接建立过程中的一种握手协议，目的是在客户端和服务器之间建立可靠的连接。</p><p>三次握手的过程如下：</p><ol><li>第一次握手（SYN）：客户端向服务器发送一个TCP数据包，其中包含一个特殊的标志位“SYN”（synchronize），表示请求建立连接。同时，客户端会设置一个随机的初始序列号。</li><li>第二次握手（SYN-ACK）：服务器收到客户端的SYN请求后，会向客户端发送一个确认数据包，其中包含“SYN”和“ACK”（acknowledge）标志位，表示同意建立连接。服务器也会设置一个随机的初始序列号。</li><li>第三次握手（ACK）：客户端收到服务器的SYN-ACK确认包后，会向服务器发送一个包含ACK标志位的数据包，表示客户端已经收到了服务器的确认。此时，双方都确认了初始序列号，TCP连接被成功建立。</li></ol><h2 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手</h2><p>四次挥手是TCP连接终止过程中的一种挥手协议，目的是在客户端和服务器之间安全地终止连接。四次挥手的过程如下：</p><ol><li>第一次挥手（FIN）：客户端决定关闭与服务器的连接时，会向服务器发送一个包含“FIN”（finish）标志位的数据包，表示客户端已经完成了数据传输，请求关闭连接。</li><li>第二次挥手（ACK）：服务器收到客户端的FIN请求后，会向客户端发送一个包含ACK标志位的确认数据包，表示已经收到客户端的关闭请求。此时，客户端到服务器的连接已经关闭，但服务器到客户端的连接仍然打开。</li><li>第三次挥手（FIN）：当服务器完成所有数据传输后，会向客户端发送一个包含FIN标志位的数据包，表示服务器也准备好关闭连接了。</li><li>第四次挥手（ACK）：客户端收到服务器的FIN请求后，会向服务器发送一个包含ACK标志位的确认数据包，表示已经收到服务器的关闭请求。此时，服务器到客户端的连接也关闭。客户端等待一个预定的时间（2MSL，最长报文段生存时间的两倍）后，关闭整个TCP连接。</li></ol><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>三次握手和四次挥手是为了在客户端和服务器之间建立和终止可靠的连接。在这些过程中，双方通过交换带有特定标志位的数据包来传达自己的意图和状态。</p><p>为了更好地理解三次握手和四次挥手，可以将其视为一种对话：</p><p><strong>三次握手（建立连接）</strong></p><ol><li>客户端：“你好，服务器，我想建立连接。”（发送SYN包）</li><li>服务器：“你好，客户端，我同意建立连接。”（发送SYN-ACK包）</li><li>客户端：“谢谢，服务器，我知道你同意建立连接了。”（发送ACK包）</li></ol><p><strong>四次挥手（终止连接）</strong></p><ol><li>客户端：“你好，服务器，我已经完成数据传输，请求关闭连接。”（发送FIN包）</li><li>服务器：“你好，客户端，我收到了你的关闭请求。”（发送ACK包）</li><li>服务器：“你好，客户端，我也已经完成数据传输，准备好关闭连接了。”（发送FIN包）</li><li>客户端：“谢谢，服务器，我知道你准备好关闭连接了。”（发送ACK包）</li></ol><p>在实际应用中，TCP协议的三次握手和四次挥手过程可以确保双方在建立和关闭连接时达成共识，以便在网络通信中传输可靠的数据。</p>`,114),b={href:"https://blog.csdn.net/weixin_44865458/article/details/117234974",target:"_blank",rel:"noopener noreferrer"};function w(y,g){const a=p("ExternalLinkIcon");return e(),c("div",null,[v,n("p",null,[s("更详细的图解，可以参考一篇网络博客："),n("a",b,[s("详解三次握手和四次挥手_十九万里的博客"),o(a)])])])}const f=t(m,[["render",w],["__file","14_网络编程.html.vue"]]);export{f as default};

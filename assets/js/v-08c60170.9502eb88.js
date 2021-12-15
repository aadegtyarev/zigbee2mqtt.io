"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[66858],{54788:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-08c60170",path:"/advanced/zigbee/03_secure_network.html",title:"Secure your Zigbee network",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Disable joining",slug:"disable-joining",children:[]},{level:2,title:"Change Zigbee network encryption key",slug:"change-zigbee-network-encryption-key",children:[]}],filePathRelative:"advanced/zigbee/03_secure_network.md",git:{updatedTime:163959523e4}}},69544:(e,n,a)=>{a.r(n),a.d(n,{default:()=>u});var s=a(66252);const t=(0,s.uE)('<h1 id="secure-your-zigbee-network" tabindex="-1"><a class="header-anchor" href="#secure-your-zigbee-network" aria-hidden="true">#</a> Secure your Zigbee network</h1><p>To make sure your Zigbee network is as secure as possible, consider the following:</p><h2 id="disable-joining" tabindex="-1"><a class="header-anchor" href="#disable-joining" aria-hidden="true">#</a> Disable joining</h2><p>To disable joining it&#39;s important that <code>permit_join: false</code> is set in your <code>configuration.yaml</code>. Otherwise rogue devices are able to join allowing them to send and receive Zigbee traffic.</p><h2 id="change-zigbee-network-encryption-key" tabindex="-1"><a class="header-anchor" href="#change-zigbee-network-encryption-key" aria-hidden="true">#</a> Change Zigbee network encryption key</h2><p><strong>Changing the network key requires re-pairing of all devices!</strong></p><p>Zigbee2MQTT uses a known default encryption key (Zigbee Transport Key). Therefore it is recommended to use a different one. To use a different encryption key add the following to your <code>configuration.yaml</code>:</p><p><strong>Do not use this exact key.</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">network_key</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The network encryption key size is <code>128-bit</code> which is essentially 16 decimal values between <code>0</code> and <code>255</code> or 16 hexadecimal values between <code>0x00</code>and <code>0xFF</code>.</p>',10),o=(0,s.Uk)("If you need to transform your decimals to hexadecimals (or vice versa) please use a "),p={href:"https://www.binaryhexconverter.com/decimal-to-hex-converter",target:"_blank",rel:"noopener noreferrer"},r=(0,s.Uk)("converter"),c=(0,s.Uk)(". Example: 92 (decimal) would become 5C (hexadecimal)."),i=(0,s.uE)('<p>To let Zigbee2MQTT generate a new network key on next startup, add the following to <code>configuration.yaml</code>:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">network_key</span><span class="token punctuation">:</span> GENERATE\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Generating a new network key by changing the key to &quot;GENERATE&quot; is not supported when using the HomeAssistant add-on.</p>',3),l={},u=(0,a(83744).Z)(l,[["render",function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[o,(0,s._)("a",p,[r,(0,s.Wm)(a)]),c]),i],64)}]])},83744:(e,n)=>{n.Z=(e,n)=>{for(const[a,s]of n)e[a]=s;return e}}}]);
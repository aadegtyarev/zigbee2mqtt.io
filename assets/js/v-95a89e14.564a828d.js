"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47468],{46586:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-95a89e14",path:"/devices/929002398602.html",title:"Philips 929002398602 control via MQTT",lang:"en-US",frontmatter:{title:"Philips 929002398602 control via MQTT",description:"Integrate your Philips 929002398602 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-02-28T13:58:01.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Binding",slug:"binding",children:[]},{level:3,title:"Troubleshooting",slug:"troubleshooting",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/929002398602.md",git:{updatedTime:163959523e4}}},96353:(e,t,i)=>{i.r(t),i.d(t,{default:()=>T});var a=i(66252);const n=(0,a.uE)('<h1 id="philips-929002398602" tabindex="-1"><a class="header-anchor" href="#philips-929002398602" aria-hidden="true">#</a> Philips 929002398602</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>929002398602</td></tr><tr><td>Vendor</td><td>Philips</td></tr><tr><td>Description</td><td>Hue dimmer switch</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/929002398602.jpg" alt="Philips 929002398602"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory reset the Hue dimmer switch by pressing and holding the setup button on the back for 10 seconds.</p><p>Restart the Hue dimmer switch by holding all 4 buttons of the Hue dimmer switch. You can let go when the light on the front flashes red/green briefly.</p><h4 id="using-the-dimmer-to-reset-a-hue-light-bulb" tabindex="-1"><a class="header-anchor" href="#using-the-dimmer-to-reset-a-hue-light-bulb" aria-hidden="true">#</a> Using the dimmer to reset a Hue light bulb</h4>',7),o=(0,a.Uk)("To use the Hue dimmer switch to factory reset a Hue light bulb see "),s={href:"https://www.youtube.com/watch?v=qvlEAELiJKs",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Uk)("HOWTO: Factory reset a Hue bulb"),d=(0,a.Uk)(". After resetting the bulb will automatically connect. This method also works for Philips Hue Lightstrips. Hue dimmer switch can also be used to factory reset Ikea Trådfri light bulbs using the same method described above."),l=(0,a._)("h3",{id:"binding",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#binding","aria-hidden":"true"},"#"),(0,a.Uk)(" Binding")],-1),h=(0,a.Uk)("If you want to bind the dimmer to a (Hue) lamp you'll have to "),c=(0,a.Uk)("bind it to the lamp through MQTT"),u=(0,a.Uk)(" and unbind it from the coordinator. Use the dimmer as source and a literal "),p=(0,a._)("code",null,"coordinator",-1),b=(0,a.Uk)(" as target for that."),m=(0,a.uE)('<h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h3><h4 id="resetting-the-device" tabindex="-1"><a class="header-anchor" href="#resetting-the-device" aria-hidden="true">#</a> Resetting the device</h4><ul><li>Method 1: Press all four buttons for 4 seconds. When the light turns green, release the buttons. The device will flash green and red alternatively after which it will reconnect to the network.</li><li>Method 2: Use a needle or paperclip to press the reset button on the back for 10 seconds. The behavior is similar to method 1</li></ul><h4 id="device-refuses-actions" tabindex="-1"><a class="header-anchor" href="#device-refuses-actions" aria-hidden="true">#</a> Device refuses actions</h4><p>If actions (e.g. applying zigbee2mqtt/bridge/request/device/remove to a dimmer) result in timeouts, perform a reset (see above) and apply the action right after the device announced itself in the network.</p><h4 id="device-announces-itself-but-the-buttons-don-t-work" tabindex="-1"><a class="header-anchor" href="#device-announces-itself-but-the-buttons-don-t-work" aria-hidden="true">#</a> Device announces itself but the buttons don&#39;t work</h4><p>The dimmer appears to be working normally and the logs in Zigbee2MQTT look good. However, nothing happens when a button is pressed (no light, no log message in Zigbee2MQTT). In this case:</p><ul><li>Reset the device</li><li>Use zigbee2mqtt/bridge/request/device/remove to remove the device from the network (this should result in a &quot;left the network&quot; log message)</li><li>Allow joining of new devices in Zigbee2MQTT</li><li>Reset the device again</li><li>Wait for it to pair again. The device should now be operational.</li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',9),g=(0,a.Uk)("This device supports OTA updates, for more information see "),f=(0,a.Uk)("OTA updates"),v=(0,a.Uk)("."),k=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),w=(0,a.Uk)("How to use device type specific configuration"),y=(0,a.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_press</code>, <code>on_hold</code>, <code>on_press_release</code>, <code>on_hold_release</code>, <code>off_press</code>, <code>off_hold</code>, <code>off_press_release</code>, <code>off_hold_release</code>, <code>up_press</code>, <code>up_hold</code>, <code>up_press_release</code>, <code>up_hold_release</code>, <code>down_press</code>, <code>down_hold</code>, <code>down_press_release</code>, <code>down_hold_release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),_={},T=(0,i(83744).Z)(_,[["render",function(e,t){const i=(0,a.up)("OutboundLink"),_=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[o,(0,a._)("a",s,[r,(0,a.Wm)(i)]),d]),l,(0,a._)("p",null,[h,(0,a._)("em",null,[(0,a.Wm)(_,{to:"/guide/usage/binding.html"},{default:(0,a.w5)((()=>[c])),_:1})]),u,p,b]),m,(0,a._)("p",null,[g,(0,a.Wm)(_,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[f])),_:1}),v]),k,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(_,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[w])),_:1})])]),y],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);
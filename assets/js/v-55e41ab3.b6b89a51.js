"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[43674],{37171:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-55e41ab3",path:"/devices/MLI-404011.html",title:"Müller Licht MLI-404011 control via MQTT",lang:"en-US",frontmatter:{title:"Müller Licht MLI-404011 control via MQTT",description:"Integrate your Müller Licht MLI-404011 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Groups binding",slug:"groups-binding",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/MLI-404011.md",git:{updatedTime:163959523e4}}},26962:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var o=i(66252);const d=(0,o.uE)('<h1 id="muller-licht-mli-404011" tabindex="-1"><a class="header-anchor" href="#muller-licht-mli-404011" aria-hidden="true">#</a> Müller Licht MLI-404011</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>MLI-404011</td></tr><tr><td>Vendor</td><td>Müller Licht</td></tr><tr><td>Description</td><td>Tint remote control</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/MLI-404011.jpg" alt="Müller Licht MLI-404011"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Remove the battery cover and use the cover to press the button above the batteries. Press and hold this button for 10-20 seconds and release the button. After that the remote should show up as a paired device.</p><h3 id="groups-binding" tabindex="-1"><a class="header-anchor" href="#groups-binding" aria-hidden="true">#</a> Groups binding</h3><p>This remote is able to deal with 4 ZigBee groups:</p><ul><li>group0 = All three leds lit (no support for <code>on</code>/<code>off</code> actions and scene activation)</li><li>group1 = first led lit</li><li>group2 = second led lit</li><li>group3 = third let lit</li></ul>',8),n=(0,o.Uk)("You can direct bind each remote group with a different Zigbee group, however there is a caveat: the four Zigbee groups have to use "),r=(0,o._)("strong",null,"consecutive group ids",-1),l=(0,o.Uk)(". When setting up the binding you will only need to bind group0 to the remote (using the frontend or "),a=(0,o.Uk)("MQTT command"),s=(0,o.Uk)("). The 3 consecutive groups will be bound to group1 to group3 automagically. Only the binding for group0 will be listed for the device within Zigbee2MQTT ("),c=(0,o._)("code",null,"genLevelCtrl",-1),h=(0,o.Uk)(" and "),u=(0,o._)("code",null,"lightingColorCtrl",-1),g=(0,o.Uk)(" clusters)."),p=(0,o.Uk)("This means that you probably should carefully "),b=(0,o.Uk)("define your groups id"),m=(0,o.Uk)(" when creating them. When creating the binding you need to wake up the device. The most reliable way is to pull the battery, press any button to drain remaining power and insert it back right when sending the binding request to the remote. You do not need to bother with the default tint action groups (16388/16389/16390), they will be overwritten as soon as the binding was successful."),f=(0,o._)("p",null,"It is possible to bind to a device instead of a group. The device will be bound to group0. In this case, group0 to group3 will not be usable.",-1),v=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),w=(0,o.Uk)("How to use device type specific configuration"),y=(0,o.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_down_click</code>, <code>brightness_up_click</code>, <code>color_temp</code>, <code>color_wheel</code>, <code>brightness_0_release</code>, <code>brightness_1_release</code>, <code>brightness_0_hold</code>, <code>brightness_1_hold</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),_={},k=(0,i(83744).Z)(_,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[d,(0,o._)("p",null,[n,r,l,(0,o.Wm)(i,{to:"/guide/usage/binding.html"},{default:(0,o.w5)((()=>[a])),_:1}),s,c,h,u,g]),(0,o._)("p",null,[p,(0,o.Wm)(i,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgeconfigadd_group"},{default:(0,o.w5)((()=>[b])),_:1}),m]),f,v,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[w])),_:1})])]),y],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);
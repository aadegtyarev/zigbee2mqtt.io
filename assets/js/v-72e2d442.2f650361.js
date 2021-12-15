"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37683],{47187:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-72e2d442",path:"/guide/configuration/frontend.html",title:"Frontend",lang:"en-US",frontmatter:{sidebarDepth:1},excerpt:"",headers:[{level:2,title:"Nginx proxy configuration",slug:"nginx-proxy-configuration",children:[]}],filePathRelative:"guide/configuration/frontend.md",git:{updatedTime:163959523e4}}},19470:(n,e,s)=>{s.r(e),s.d(e,{default:()=>F});var a=s(66252),t=s(60340);const r=(0,a._)("h1",{id:"frontend",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#frontend","aria-hidden":"true"},"#"),(0,a.Uk)(" Frontend")],-1),l={class:"custom-container tip"},o=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),i=(0,a.Uk)("Ongoing discussion about the frontend can be found "),_={href:"https://github.com/Koenkk/zigbee2mqtt/issues/4266",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("here"),u=(0,a._)("p",null,"Zigbee2MQTT has a built-in webbased frontend.",-1),p=(0,a._)("p",null,[(0,a._)("img",{src:t,alt:"Frontend"})],-1),b=(0,a._)("p",null,[(0,a.Uk)("To enable the frontend add the following to your "),(0,a._)("code",null,"configuration.yaml"),(0,a.Uk)(":")],-1),m=(0,a._)("div",{class:"language-yaml ext-yml line-numbers-mode"},[(0,a._)("pre",{class:"language-yaml"},[(0,a._)("code",null,[(0,a._)("span",{class:"token key atrule"},"frontend"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"# Optional, default 8080"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token key atrule"},"port"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token number"},"8080"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token comment"},"# Optional, default 0.0.0.0"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token key atrule"},"host"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 0.0.0.0\n  "),(0,a._)("span",{class:"token comment"},"# Optional, enables authentication, disabled by default"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token key atrule"},"auth_token"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" your"),(0,a._)("span",{class:"token punctuation"},"-"),(0,a.Uk)("secret"),(0,a._)("span",{class:"token punctuation"},"-"),(0,a.Uk)("token\n  "),(0,a._)("span",{class:"token comment"},"# Optional, url on which the frontend can be reached, currently only used for the Home Assistant device configuration page"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token key atrule"},"url"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'https://zigbee2mqtt.myhouse.org'"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br")])],-1),d=(0,a._)("p",null,[(0,a.Uk)("To specify the "),(0,a._)("code",null,"auth_token"),(0,a.Uk)(" in a different file set e.g. "),(0,a._)("code",null,"auth_token: '!secret auth_token'"),(0,a.Uk)(", create a file called "),(0,a._)("code",null,"secret.yaml"),(0,a.Uk)(" next to "),(0,a._)("code",null,"configuration.yaml"),(0,a.Uk)(" with content "),(0,a._)("code",null,"auth_token: super-secret-token"),(0,a.Uk)(".")],-1),h=(0,a._)("h2",{id:"nginx-proxy-configuration",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#nginx-proxy-configuration","aria-hidden":"true"},"#"),(0,a.Uk)(" Nginx proxy configuration")],-1),k=(0,a._)("p",null,"In case you want to run the frontend behind a proxy you can use the following config as an example.",-1),g=(0,a.Uk)("Due to "),f={href:"https://bugs.webkit.org/show_bug.cgi?id=80362",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("WebKit Bug 80362"),x=(0,a.Uk)(", which prevents basic authentication from being used with WebSockets, the frontend will not work in WebKit-based browsers when this type of authentication is configured. This includes desktop Safari on Mac and "),U=(0,a._)("em",null,"all",-1),w=(0,a.Uk)(" browsers and web views on iOS. To work around the issue, configure the frontend's "),v=(0,a._)("code",null,"auth_token",-1),T=(0,a.Uk)(" to configure application-level auth and remove "),q=(0,a._)("code",null,"auth_basic",-1),O=(0,a.Uk)(" from the web server config."),z=(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,'server {\n    listen       80;\n    server_name  zigbee2mqtt.mydomain.com;\n    return 301   https://zigbee2mqtt.mydomain.com$request_uri;\n}\n\nserver {\n    listen      443 ssl http2;\n    listen      [::]:443 ssl http2;\n\n    # In case you want to use basic authentication:\n    auth_basic "Login";\n    auth_basic_user_file /zigbee2mqtt_htpasswd;\n\n    ssl_certificate     /config/etc/letsencrypt/live/mydomain.com/fullchain.pem;\n    ssl_certificate_key /config/etc/letsencrypt/live/mydomain.com/privkey.pem;\n\n    server_name zigbee2mqtt.mydomain.com;\n\n    location / {\n        proxy_pass http://localhost:8080/;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n\n    location /api {\n        proxy_pass         http://localhost:8080/api;\n        proxy_set_header Host $host;\n\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n    }\n}\n')]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"13"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"14"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"15"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"16"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"17"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"18"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"19"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"20"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"21"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"22"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"23"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"24"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"25"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"26"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"27"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"28"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"29"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"30"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"31"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"32"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"33"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"34"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"35"),(0,a._)("br")])],-1),$={},F=(0,s(83744).Z)($,[["render",function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("div",l,[o,(0,a._)("p",null,[i,(0,a._)("a",_,[c,(0,a.Wm)(s)])])]),u,p,b,m,d,h,k,(0,a._)("p",null,[g,(0,a._)("a",f,[y,(0,a.Wm)(s)]),x,U,w,v,T,q,O]),z],64)}]])},83744:(n,e)=>{e.Z=(n,e)=>{for(const[s,a]of e)n[s]=a;return n}},60340:(n,e,s)=>{n.exports=s.p+"assets/img/frontend.e604ec0e.png"}}]);
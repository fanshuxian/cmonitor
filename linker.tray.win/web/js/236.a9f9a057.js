"use strict";(self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[]).push([[236],{8902:function(e,l,r){r.r(l),r.d(l,{default:function(){return Fe}});var a=r(6768);const t={class:"app-wrap flex flex-column flex-nowrap"},o={class:"head"},s={class:"body flex-1 relative",ref:"wrap"},n={class:"home absolute"},u={class:"status"};function d(e,l,r,d,m,i){const f=(0,a.g2)("Head"),c=(0,a.g2)("router-view"),b=(0,a.g2)("Status"),v=(0,a.g2)("Install");return(0,a.uX)(),(0,a.CE)("div",t,[(0,a.Lk)("div",o,[(0,a.bF)(f)]),(0,a.Lk)("div",s,[(0,a.Lk)("div",n,[(0,a.bF)(c)])],512),(0,a.Lk)("div",u,[(0,a.bF)(b,{config:!0}),(0,a.bF)(v)])])}r(4114);var m=r.p+"img/logo.892cb2fb.png",i=r.p+"img/shouye.4c820c0e.svg",f=r.p+"img/fuwuqi.247f2561.svg",c=r.p+"img/dadong.e6fd78bf.svg",b=r.p+"img/anquan.5f8d5e47.svg",v=r.p+"img/rizhi.c3ca751b.svg";const p=e=>((0,a.Qi)("data-v-288c64ff"),e=e(),(0,a.jt)(),e),g={class:"head flex"},k={class:"logo"},F=p((()=>(0,a.Lk)("img",{src:m,alt:""},null,-1))),w={class:"menu flex-1"},y={class:"flex"},S=p((()=>(0,a.Lk)("img",{src:i},null,-1))),h={key:0},_=p((()=>(0,a.Lk)("img",{src:f},null,-1))),K={key:1},V=p((()=>(0,a.Lk)("img",{src:c},null,-1))),C={key:2},P=p((()=>(0,a.Lk)("img",{src:b},null,-1))),x={key:3},L=p((()=>(0,a.Lk)("img",{src:v},null,-1))),W={class:"image"};function U(e,l,r,t,o,s){const n=(0,a.g2)("router-link"),u=(0,a.g2)("Background");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("div",g,[(0,a.Lk)("div",k,[(0,a.bF)(n,{to:{name:"FullIndex"}},{default:(0,a.k6)((()=>[F])),_:1})]),(0,a.Lk)("div",w,[(0,a.Lk)("ul",y,[(0,a.Lk)("li",null,[(0,a.bF)(n,{to:{name:"FullIndex"}},{default:(0,a.k6)((()=>[S,(0,a.eW)(" 首页")])),_:1})]),t.hasConfig?((0,a.uX)(),(0,a.CE)("li",h,[(0,a.bF)(n,{to:{name:"FullServers"}},{default:(0,a.k6)((()=>[_,(0,a.eW)(" 服务器")])),_:1})])):(0,a.Q3)("",!0),t.hasTransport?((0,a.uX)(),(0,a.CE)("li",K,[(0,a.bF)(n,{to:{name:"FullTransport"}},{default:(0,a.k6)((()=>[V,(0,a.eW)(" 打洞协议")])),_:1})])):(0,a.Q3)("",!0),t.hasAction?((0,a.uX)(),(0,a.CE)("li",C,[(0,a.bF)(n,{to:{name:"FullAction"}},{default:(0,a.k6)((()=>[P,(0,a.eW)(" 自定义验证")])),_:1})])):(0,a.Q3)("",!0),t.hasLogger?((0,a.uX)(),(0,a.CE)("li",x,[(0,a.bF)(n,{to:{name:"FullLogger"}},{default:(0,a.k6)((()=>[L,(0,a.eW)(" 日志")])),_:1})])):(0,a.Q3)("",!0)])]),(0,a.Lk)("div",W,[(0,a.bF)(u,{name:"full"})])])])}var A=r(7477),X=r(3830),j=r(5096),Q={components:{Promotion:A.Yk4,StarFilled:A.BQ2,WarnTriangleFilled:A.DtC,PhoneFilled:A.pXb,HelpFilled:A.adD,Background:j.A},setup(){const e=(0,X.B)(),l=(0,a.EW)((()=>e.value.hasAccess("Config"))),r=(0,a.EW)((()=>e.value.hasAccess("LoggerShow"))),t=(0,a.EW)((()=>e.value.hasAccess("Transport"))),o=(0,a.EW)((()=>e.value.hasAccess("Action")));return{hasConfig:l,hasLogger:r,hasTransport:t,hasAction:o}}},E=r(1241);const I=(0,E.A)(Q,[["render",U],["__scopeId","data-v-288c64ff"]]);var N=I,q=r(904);const R=e=>((0,a.Qi)("data-v-41d4c7eb"),e=e(),(0,a.jt)(),e),D={class:"head"},B={class:"body"},O=R((()=>(0,a.Lk)("div",{class:"t-c"},"完成保存后，请重启软件",-1))),T={class:"footer t-c"};function J(e,l,r,t,o,s){const n=(0,a.g2)("el-step"),u=(0,a.g2)("el-steps"),d=(0,a.g2)("Common"),m=(0,a.g2)("el-card"),i=(0,a.g2)("Server"),f=(0,a.g2)("Client"),c=(0,a.g2)("el-button"),b=(0,a.g2)("el-dialog");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(b,{modelValue:t.state.show,"onUpdate:modelValue":l[0]||(l[0]=e=>t.state.show=e),title:"初始化配置",width:"600",top:"2vh"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",null,[(0,a.Lk)("div",D,[(0,a.bF)(u,{active:t.step.step,"finish-status":"success"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.state.steps,((e,l)=>((0,a.uX)(),(0,a.Wv)(n,{title:e},null,8,["title"])))),256))])),_:1},8,["active"])]),(0,a.Lk)("div",B,[1==t.step.step?((0,a.uX)(),(0,a.Wv)(m,{key:0,shadow:"never"},{default:(0,a.k6)((()=>[(0,a.bF)(d,{ref:"currentDom"},null,512)])),_:1})):(0,a.Q3)("",!0),2==t.step.step?((0,a.uX)(),(0,a.Wv)(m,{key:1,shadow:"never"},{default:(0,a.k6)((()=>[(0,a.bF)(i,{ref:"currentDom"},null,512)])),_:1})):(0,a.Q3)("",!0),3==t.step.step?((0,a.uX)(),(0,a.Wv)(m,{key:2,shadow:"never"},{default:(0,a.k6)((()=>[(0,a.bF)(f,{ref:"currentDom"},null,512)])),_:1})):(0,a.Q3)("",!0),4==t.step.step?((0,a.uX)(),(0,a.Wv)(m,{key:3,shadow:"never"},{default:(0,a.k6)((()=>[O])),_:1})):(0,a.Q3)("",!0)]),(0,a.Lk)("div",T,[(0,a.bF)(c,{disabled:t.step.step<=1,onClick:t.handlePrev},{default:(0,a.k6)((()=>[(0,a.eW)("上一步")])),_:1},8,["disabled","onClick"]),t.step.step<t.state.steps.length?((0,a.uX)(),(0,a.Wv)(c,{key:0,type:"primary",onClick:t.handleNext},{default:(0,a.k6)((()=>[(0,a.eW)("下一步")])),_:1},8,["onClick"])):((0,a.uX)(),(0,a.Wv)(c,{key:1,type:"primary",onClick:t.handleSave},{default:(0,a.k6)((()=>[(0,a.eW)("完成")])),_:1},8,["onClick"]))])])])),_:1},8,["modelValue"])])}var H=r(8835),z=r(144),G=r(1219);const Y={class:"t-c"};function M(e,l,r,t,o,s){const n=(0,a.g2)("el-checkbox");return(0,a.uX)(),(0,a.CE)("div",Y,[(0,a.bF)(n,{modelValue:t.state.form.client,"onUpdate:modelValue":l[0]||(l[0]=e=>t.state.form.client=e),label:"作为客户端"},null,8,["modelValue"]),(0,a.bF)(n,{modelValue:t.state.form.server,"onUpdate:modelValue":l[1]||(l[1]=e=>t.state.form.server=e),label:"作为服务端"},null,8,["modelValue"])])}var Z={name:"Common",setup(){const e=(0,a.WQ)("step"),l=(0,z.Kh)({form:{client:e.value.form.common.client||e.value.json.Common&&e.value.json.Common.client||!0,server:e.value.form.common.server||e.value.json.Common&&e.value.json.Common.server||!1}}),r=e=>new Promise(((e,r)=>{l.form.client||l.form.server?e({json:{Common:{client:l.form.client,server:l.form.server,modes:[l.form.client?"client":"",l.form.server?"server":""].filter((e=>!!e))}},form:{common:JSON.parse(JSON.stringify(l.form))}}):(G.nk.error("请选择客户端或服务端"),r())}));return{state:l,handleValidate:r}}};const $=(0,E.A)(Z,[["render",M]]);var ee=$;const le=e=>((0,a.Qi)("data-v-47b95c93"),e=e(),(0,a.jt)(),e),re=le((()=>(0,a.Lk)("div",{class:"t-c w-100"},[(0,a.Lk)("p",null,"端口为0则不监听，相同分组名之间的客户端相互可见")],-1)));function ae(e,l,r,t,o,s){const n=(0,a.g2)("el-form-item"),u=(0,a.g2)("el-input"),d=(0,a.g2)("el-col"),m=(0,a.g2)("el-row"),i=(0,a.g2)("el-checkbox"),f=(0,a.g2)("el-form");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(f,{ref:"formDom",model:t.state.form,rules:t.state.rules,"label-width":"8rem"},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"","label-width":"0"},{default:(0,a.k6)((()=>[re])),_:1}),(0,a.bF)(n,{label:"","label-width":"0"},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"机器名",prop:"name"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.name,"onUpdate:modelValue":l[0]||(l[0]=e=>t.state.form.name=e),maxlength:"12","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"分组名",prop:"groupid"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.groupid,"onUpdate:modelValue":l[1]||(l[1]=e=>t.state.form.groupid=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.bF)(n,{label:"","label-width":"0"},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"接口端口",prop:"api"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.api,"onUpdate:modelValue":l[2]||(l[2]=e=>t.state.form.api=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"网页端口",prop:"web"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.web,"onUpdate:modelValue":l[3]||(l[3]=e=>t.state.form.web=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.bF)(n,{label:"","label-width":"0"},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"接口密码",prop:"password"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{style:{width:"42rem"},type:"password",modelValue:t.state.form.password,"onUpdate:modelValue":l[4]||(l[4]=e=>t.state.form.password=e),"show-password":"",maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{"label-width":"8rem",prop:"hasServer"},{default:(0,a.k6)((()=>[(0,a.bF)(i,{modelValue:t.state.form.hasServer,"onUpdate:modelValue":l[5]||(l[5]=e=>t.state.form.hasServer=e),label:"我有服务器",size:"large"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),t.state.form.hasServer?((0,a.uX)(),(0,a.Wv)(n,{key:0,label:"","label-width":"0"},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"信标服务",prop:"server"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.server,"onUpdate:modelValue":l[6]||(l[6]=e=>t.state.form.server=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"信标密钥",prop:"serverSecretKey"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.serverSecretKey,"onUpdate:modelValue":l[7]||(l[7]=e=>t.state.form.serverSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})):(0,a.Q3)("",!0),t.state.form.hasServer?((0,a.uX)(),(0,a.Wv)(n,{key:1,label:"","label-width":"0"},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"穿透密钥",prop:"sForwardSecretKey"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.sForwardSecretKey,"onUpdate:modelValue":l[8]||(l[8]=e=>t.state.form.sForwardSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"中继密钥",prop:"relaySecretKey"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.relaySecretKey,"onUpdate:modelValue":l[9]||(l[9]=e=>t.state.form.relaySecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})):(0,a.Q3)("",!0),t.state.form.hasServer?((0,a.uX)(),(0,a.Wv)(n,{key:2,label:"","label-width":"0"},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"更新密钥",prop:"updaterSecretKey"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.updaterSecretKey,"onUpdate:modelValue":l[10]||(l[10]=e=>t.state.form.updaterSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"占位"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{disabled:"",maxlength:"36","show-word-limit":""})])),_:1})])),_:1})])),_:1})])),_:1})):(0,a.Q3)("",!0)])),_:1},8,["model","rules"])])}var te={setup(e){const l=(0,a.WQ)("step"),r=(0,X.B)(),t=(0,z.Kh)({form:{name:l.value.form.client.name||r.value.config.Client.Name,groupid:l.value.form.client.groupid||r.value.config.Client.GroupId,api:l.value.form.client.api||r.value.config.Client.CApi.ApiPort,web:l.value.form.client.web||r.value.config.Client.CApi.WebPort,password:l.value.form.client.password||r.value.config.Client.CApi.ApiPassword,hasServer:l.value.form.client.hasServer||!1,server:l.value.form.client.server||r.value.config.Client.ServerInfo.Host,serverSecretKey:l.value.form.client.serverSecretKey||r.value.config.Client.ServerSecretKey,sForwardSecretKey:l.value.form.client.sForwardSecretKey||r.value.config.Client.SForward.SecretKey,relaySecretKey:l.value.form.client.relaySecretKey||(r.value.config.Client.Relay.Servers[0]||{SecretKey:"snltty"}).SecretKey,updaterSecretKey:l.value.form.client.updaterSecretKey||r.value.config.Client.Updater.SecretKey},rules:{name:[{required:!0,message:"必填",trigger:"blur"}],groupid:[{required:!0,message:"必填",trigger:"blur"}],password:[{required:!0,message:"必填",trigger:"blur"}],api:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}],web:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}]}}),o=(0,z.KR)(null),s=()=>new Promise(((e,l)=>{o.value.validate((r=>{r?e({json:{Client:{name:t.form.name,groupid:t.form.groupid,api:+t.form.api,web:+t.form.web,password:t.form.password,hasServer:t.form.hasServer,server:t.form.server,serverSecretKey:t.form.serverSecretKey,sForwardSecretKey:t.form.sForwardSecretKey,relaySecretKey:t.form.relaySecretKey,updaterSecretKey:t.form.updaterSecretKey}},form:{client:JSON.parse(JSON.stringify(t.form))}}):l()}))}));return(0,a.sV)((()=>{0==l.value.json.Common.client&&(l.value.step+=l.value.increment)})),{state:t,handleValidate:s,formDom:o}}};const oe=(0,E.A)(te,[["render",ae],["__scopeId","data-v-47b95c93"]]);var se=oe;const ne=e=>((0,a.Qi)("data-v-c9a17ce0"),e=e(),(0,a.jt)(),e),ue=ne((()=>(0,a.Lk)("div",{class:"t-c w-100"},"端口为0则不监听",-1)));function de(e,l,r,t,o,s){const n=(0,a.g2)("el-form-item"),u=(0,a.g2)("el-input"),d=(0,a.g2)("el-col"),m=(0,a.g2)("el-row"),i=(0,a.g2)("el-form");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(i,{ref:"formDom",model:t.state.form,rules:t.state.rules,"label-width":"10rem"},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"","label-width":"0"},{default:(0,a.k6)((()=>[ue])),_:1}),(0,a.bF)(n,{label:"","label-width":"0"},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"服务端口",prop:"servicePort"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.servicePort,"onUpdate:modelValue":l[0]||(l[0]=e=>t.state.form.servicePort=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"web穿透端口",prop:"webPort"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.webPort,"onUpdate:modelValue":l[1]||(l[1]=e=>t.state.form.webPort=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.bF)(n,{label:"","label-width":"0"},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"开放最小端口",prop:"tunnelPort1"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.tunnelPort1,"onUpdate:modelValue":l[2]||(l[2]=e=>t.state.form.tunnelPort1=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"开放最大端口",prop:"tunnelPort2"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.tunnelPort2,"onUpdate:modelValue":l[3]||(l[3]=e=>t.state.form.tunnelPort2=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.bF)(n,{label:"","label-width":"0"},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{span:24},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"信标密钥",prop:"signinSecretKey"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.signinSecretKey,"onUpdate:modelValue":l[4]||(l[4]=e=>t.state.form.signinSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.bF)(n,{label:"","label-width":"0"},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"穿透密钥",prop:"sForwardSecretKey"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.sForwardSecretKey,"onUpdate:modelValue":l[5]||(l[5]=e=>t.state.form.sForwardSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.bF)(d,{span:12},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"中继密钥",prop:"relaySecretKey"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.relaySecretKey,"onUpdate:modelValue":l[6]||(l[6]=e=>t.state.form.relaySecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.bF)(n,{label:"","label-width":"0"},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(d,{span:24},{default:(0,a.k6)((()=>[(0,a.bF)(n,{label:"更新密钥",prop:"updaterSecretKey"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{modelValue:t.state.form.updaterSecretKey,"onUpdate:modelValue":l[7]||(l[7]=e=>t.state.form.updaterSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])}var me={setup(e){const l=(0,a.WQ)("step"),r=(0,X.B)(),t=(0,z.Kh)({show:!1,form:{signinSecretKey:l.value.form.server.signinSecretKey||r.value.config.Server.SignIn.SecretKey,relaySecretKey:l.value.form.server.relaySecretKey||r.value.config.Server.Relay.SecretKey,sForwardSecretKey:l.value.form.server.sForwardSecretKey||r.value.config.Server.SForward.SecretKey,servicePort:l.value.form.server.servicePort||r.value.config.Server.ServicePort,webPort:l.value.form.server.webPort||r.value.config.Server.SForward.WebPort,tunnelPort1:l.value.form.server.tunnelPort1||r.value.config.Server.SForward.TunnelPortRange[0],tunnelPort2:l.value.form.server.tunnelPort2||r.value.config.Server.SForward.TunnelPortRange[1],updaterSecretKey:l.value.form.server.updaterSecretKey||r.value.config.Server.Updater.SecretKey},rules:{relaySecretKey:[{required:!0,message:"必填",trigger:"blur"}],sForwardSecretKey:[{required:!0,message:"必填",trigger:"blur"}],servicePort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}],webPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}],tunnelPort1:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}],tunnelPort2:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}]}}),o=(0,z.KR)(null),s=()=>new Promise(((e,l)=>{o.value.validate((r=>{0==r?l():e({json:{Server:{ServicePort:+t.form.servicePort,Relay:{SecretKey:t.form.relaySecretKey},SForward:{SecretKey:t.form.sForwardSecretKey,WebPort:+t.form.webPort,TunnelPortRange:[+t.form.tunnelPort1,+t.form.tunnelPort2]},Updater:{SecretKey:t.form.updaterSecretKey},SignIn:{SecretKey:t.form.signinSecretKey}}},form:{server:JSON.parse(JSON.stringify(t.form))}})}))}));return(0,a.sV)((()=>{0==l.value.json.Common.server&&(l.value.step+=l.value.increment)})),{state:t,handleValidate:s,formDom:o}}};const ie=(0,E.A)(me,[["render",de],["__scopeId","data-v-c9a17ce0"]]);var fe=ie,ce={components:{Common:ee,Client:se,Server:fe},setup(e){const l=(0,X.B)(),r=(0,z.Kh)({show:0==l.value.config.Common.Install,steps:["选择模式","服务端","客户端","完成"]}),t=(0,z.KR)(null),o=(0,z.KR)({step:1,increment:1,json:{},form:{server:{},client:{},common:{}}});(0,a.Gt)("step",o);const s=()=>{o.value.step--,o.value.increment=-1},n=()=>{o.value.increment=1,t.value.handleValidate().then((e=>{o.value.json=Object.assign(o.value.json,e.json),o.value.form=Object.assign(o.value.form,e.form),o.value.step++})).catch((()=>{}))},u=()=>{(0,H.ai)(o.value.json).then((()=>{G.nk.success("保存成功")})).catch((()=>{G.nk.error("保存失败")}))};return{state:r,currentDom:t,step:o,handlePrev:s,handleNext:n,handleSave:u}}};const be=(0,E.A)(ce,[["render",J],["__scopeId","data-v-41d4c7eb"]]);var ve=be,pe=r(1387),ge={name:"Index",components:{Head:N,Status:q.A,Install:ve},setup(e){const l=(0,X.B)(),r=(0,pe.rd)(),t=(0,z.KR)(null),o=()=>{(0,a.dY)((()=>{l.value.height=t.value.offsetHeight}))};return(0,a.sV)((()=>{0==l.value.hasAccess("FullManager")&&r.push({name:"NoPermission"}),window.addEventListener("resize",o),o()})),(0,a.hi)((()=>{window.removeEventListener("resize",o)})),{wrap:t}}};const ke=(0,E.A)(ge,[["render",d],["__scopeId","data-v-5ea3415a"]]);var Fe=ke}}]);
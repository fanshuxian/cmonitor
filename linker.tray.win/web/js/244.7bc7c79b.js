"use strict";(self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[]).push([[244],{3644:function(e,l,r){r.r(l),r.d(l,{default:function(){return de}});var t=r(6768);const a={class:"app-wrap flex flex-column flex-nowrap"},o={class:"head"},s={class:"body flex-1 relative",ref:"wrap"},n={class:"home absolute"},u={class:"status"};function d(e,l,r,d,m,i){const f=(0,t.g2)("Head"),c=(0,t.g2)("router-view"),b=(0,t.g2)("Status"),p=(0,t.g2)("Install");return(0,t.uX)(),(0,t.CE)("div",a,[(0,t.Lk)("div",o,[(0,t.bF)(f)]),(0,t.Lk)("div",s,[(0,t.Lk)("div",n,[(0,t.bF)(c)])],512),(0,t.Lk)("div",u,[(0,t.bF)(b,{config:!0}),(0,t.bF)(p)])])}r(4114);var m=r.p+"img/logo.892cb2fb.png";const i=e=>((0,t.Qi)("data-v-1b5cc276"),e=e(),(0,t.jt)(),e),f={class:"head flex"},c={class:"logo"},b=i((()=>(0,t.Lk)("img",{src:m,alt:""},null,-1))),p={class:"menu flex-1"},v={class:"flex"},g={key:0},F={key:1},k={key:2},w={key:3},y={class:"image"};function S(e,l,r,a,o,s){const n=(0,t.g2)("router-link"),u=(0,t.g2)("StarFilled"),d=(0,t.g2)("el-icon"),m=(0,t.g2)("Promotion"),i=(0,t.g2)("HelpFilled"),S=(0,t.g2)("PhoneFilled"),h=(0,t.g2)("WarnTriangleFilled"),_=(0,t.g2)("Background");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("div",f,[(0,t.Lk)("div",c,[(0,t.bF)(n,{to:{name:"FullIndex"}},{default:(0,t.k6)((()=>[b])),_:1})]),(0,t.Lk)("div",p,[(0,t.Lk)("ul",v,[(0,t.Lk)("li",null,[(0,t.bF)(n,{to:{name:"FullIndex"}},{default:(0,t.k6)((()=>[(0,t.bF)(d,{size:"16"},{default:(0,t.k6)((()=>[(0,t.bF)(u)])),_:1}),(0,t.eW)(" 首页")])),_:1})]),a.hasConfig?((0,t.uX)(),(0,t.CE)("li",g,[(0,t.bF)(n,{to:{name:"FullServers"}},{default:(0,t.k6)((()=>[(0,t.bF)(d,{size:"16"},{default:(0,t.k6)((()=>[(0,t.bF)(m)])),_:1}),(0,t.eW)(" 服务器")])),_:1})])):(0,t.Q3)("",!0),a.hasTransport?((0,t.uX)(),(0,t.CE)("li",F,[(0,t.bF)(n,{to:{name:"FullTransport"}},{default:(0,t.k6)((()=>[(0,t.bF)(d,{size:"16"},{default:(0,t.k6)((()=>[(0,t.bF)(i)])),_:1}),(0,t.eW)(" 打洞协议")])),_:1})])):(0,t.Q3)("",!0),a.hasAction?((0,t.uX)(),(0,t.CE)("li",k,[(0,t.bF)(n,{to:{name:"FullAction"}},{default:(0,t.k6)((()=>[(0,t.bF)(d,{size:"16"},{default:(0,t.k6)((()=>[(0,t.bF)(S)])),_:1}),(0,t.eW)(" Action验证")])),_:1})])):(0,t.Q3)("",!0),a.hasLogger?((0,t.uX)(),(0,t.CE)("li",w,[(0,t.bF)(n,{to:{name:"FullLogger"}},{default:(0,t.k6)((()=>[(0,t.bF)(d,{size:"16"},{default:(0,t.k6)((()=>[(0,t.bF)(h)])),_:1}),(0,t.eW)(" 日志")])),_:1})])):(0,t.Q3)("",!0)])]),(0,t.Lk)("div",y,[(0,t.bF)(_,{name:"full"})])])])}var h=r(7477),_=r(3830),K=r(5096),V={components:{Promotion:h.Yk4,StarFilled:h.BQ2,WarnTriangleFilled:h.DtC,PhoneFilled:h.pXb,HelpFilled:h.adD,Background:K.A},setup(){const e=(0,_.B)(),l=(0,t.EW)((()=>e.value.hasAccess("Config"))),r=(0,t.EW)((()=>e.value.hasAccess("LoggerShow"))),a=(0,t.EW)((()=>e.value.hasAccess("Transport"))),o=(0,t.EW)((()=>e.value.hasAccess("Action")));return{hasConfig:l,hasLogger:r,hasTransport:a,hasAction:o}}},P=r(1241);const C=(0,P.A)(V,[["render",S],["__scopeId","data-v-1b5cc276"]]);var x=C,W=r(8406);const L=e=>((0,t.Qi)("data-v-5fad04f0"),e=e(),(0,t.jt)(),e),U={class:"head"},A={class:"body"},X=L((()=>(0,t.Lk)("div",{class:"t-c"},"完成保存后，请重启软件",-1))),Q={class:"footer t-c"};function E(e,l,r,a,o,s){const n=(0,t.g2)("el-step"),u=(0,t.g2)("el-steps"),d=(0,t.g2)("Common"),m=(0,t.g2)("el-card"),i=(0,t.g2)("Client"),f=(0,t.g2)("el-button"),c=(0,t.g2)("el-dialog");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.bF)(c,{modelValue:a.state.show,"onUpdate:modelValue":l[0]||(l[0]=e=>a.state.show=e),title:"初始化配置",width:"600",top:"2vh"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",null,[(0,t.Lk)("div",U,[(0,t.bF)(u,{active:a.step.step,"finish-status":"success"},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(a.state.steps,((e,l)=>((0,t.uX)(),(0,t.Wv)(n,{title:e},null,8,["title"])))),256))])),_:1},8,["active"])]),(0,t.Lk)("div",A,[1==a.step.step?((0,t.uX)(),(0,t.Wv)(m,{key:0,shadow:"never"},{default:(0,t.k6)((()=>[(0,t.bF)(d,{ref:"currentDom"},null,512)])),_:1})):(0,t.Q3)("",!0),2==a.step.step?((0,t.uX)(),(0,t.Wv)(m,{key:1,shadow:"never"},{default:(0,t.k6)((()=>[(0,t.bF)(i,{ref:"currentDom"},null,512)])),_:1})):(0,t.Q3)("",!0),3==a.step.step?((0,t.uX)(),(0,t.Wv)(m,{key:2,shadow:"never"},{default:(0,t.k6)((()=>[X])),_:1})):(0,t.Q3)("",!0)]),(0,t.Lk)("div",Q,[(0,t.bF)(f,{disabled:a.step.step<=1,onClick:a.handlePrev},{default:(0,t.k6)((()=>[(0,t.eW)("上一步")])),_:1},8,["disabled","onClick"]),a.step.step<a.state.steps.length?((0,t.uX)(),(0,t.Wv)(f,{key:0,type:"primary",onClick:a.handleNext},{default:(0,t.k6)((()=>[(0,t.eW)("下一步")])),_:1},8,["onClick"])):((0,t.uX)(),(0,t.Wv)(f,{key:1,type:"primary",onClick:a.handleSave},{default:(0,t.k6)((()=>[(0,t.eW)("完成")])),_:1},8,["onClick"]))])])])),_:1},8,["modelValue"])])}var j=r(8835),I=r(144),N=r(1219);const q={class:"t-c"};function R(e,l,r,a,o,s){const n=(0,t.g2)("el-checkbox");return(0,t.uX)(),(0,t.CE)("div",q,[(0,t.bF)(n,{modelValue:a.state.form.client,"onUpdate:modelValue":l[0]||(l[0]=e=>a.state.form.client=e),label:"作为客户端"},null,8,["modelValue"])])}var D={name:"Common",setup(){(0,t.WQ)("step");const e=(0,I.Kh)({form:{client:!0,server:!1}}),l=l=>new Promise(((l,r)=>{e.form.client||e.form.server?l({json:{Common:{client:e.form.client,server:e.form.server,modes:[e.form.client?"client":"",e.form.server?"server":""].filter((e=>!!e))}},form:{common:JSON.parse(JSON.stringify(e.form))}}):(N.nk.error("请选择客户端或服务端"),r())}));return{state:e,handleValidate:l}}};const T=(0,P.A)(D,[["render",R]]);var z=T;const B=e=>((0,t.Qi)("data-v-47b95c93"),e=e(),(0,t.jt)(),e),O=B((()=>(0,t.Lk)("div",{class:"t-c w-100"},[(0,t.Lk)("p",null,"端口为0则不监听，相同分组名之间的客户端相互可见")],-1)));function H(e,l,r,a,o,s){const n=(0,t.g2)("el-form-item"),u=(0,t.g2)("el-input"),d=(0,t.g2)("el-col"),m=(0,t.g2)("el-row"),i=(0,t.g2)("el-checkbox"),f=(0,t.g2)("el-form");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.bF)(f,{ref:"formDom",model:a.state.form,rules:a.state.rules,"label-width":"8rem"},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"","label-width":"0"},{default:(0,t.k6)((()=>[O])),_:1}),(0,t.bF)(n,{label:"","label-width":"0"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"机器名",prop:"name"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.name,"onUpdate:modelValue":l[0]||(l[0]=e=>a.state.form.name=e),maxlength:"12","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"分组名",prop:"groupid"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.groupid,"onUpdate:modelValue":l[1]||(l[1]=e=>a.state.form.groupid=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.bF)(n,{label:"","label-width":"0"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"接口端口",prop:"api"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.api,"onUpdate:modelValue":l[2]||(l[2]=e=>a.state.form.api=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"网页端口",prop:"web"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.web,"onUpdate:modelValue":l[3]||(l[3]=e=>a.state.form.web=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.bF)(n,{label:"","label-width":"0"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"接口密码",prop:"password"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{style:{width:"42rem"},type:"password",modelValue:a.state.form.password,"onUpdate:modelValue":l[4]||(l[4]=e=>a.state.form.password=e),"show-password":"",maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{"label-width":"8rem",prop:"hasServer"},{default:(0,t.k6)((()=>[(0,t.bF)(i,{modelValue:a.state.form.hasServer,"onUpdate:modelValue":l[5]||(l[5]=e=>a.state.form.hasServer=e),label:"我有服务器",size:"large"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),a.state.form.hasServer?((0,t.uX)(),(0,t.Wv)(n,{key:0,label:"","label-width":"0"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"信标服务",prop:"server"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.server,"onUpdate:modelValue":l[6]||(l[6]=e=>a.state.form.server=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"信标密钥",prop:"serverSecretKey"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.serverSecretKey,"onUpdate:modelValue":l[7]||(l[7]=e=>a.state.form.serverSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})):(0,t.Q3)("",!0),a.state.form.hasServer?((0,t.uX)(),(0,t.Wv)(n,{key:1,label:"","label-width":"0"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"穿透密钥",prop:"sForwardSecretKey"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.sForwardSecretKey,"onUpdate:modelValue":l[8]||(l[8]=e=>a.state.form.sForwardSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"中继密钥",prop:"relaySecretKey"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.relaySecretKey,"onUpdate:modelValue":l[9]||(l[9]=e=>a.state.form.relaySecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})):(0,t.Q3)("",!0),a.state.form.hasServer?((0,t.uX)(),(0,t.Wv)(n,{key:2,label:"","label-width":"0"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"更新密钥",prop:"updaterSecretKey"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.updaterSecretKey,"onUpdate:modelValue":l[10]||(l[10]=e=>a.state.form.updaterSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"占位"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{disabled:"",maxlength:"36","show-word-limit":""})])),_:1})])),_:1})])),_:1})])),_:1})):(0,t.Q3)("",!0)])),_:1},8,["model","rules"])])}var J={setup(e){const l=(0,t.WQ)("step"),r=(0,_.B)(),a=(0,I.Kh)({form:{name:l.value.form.client.name||r.value.config.Client.Name,groupid:l.value.form.client.groupid||r.value.config.Client.GroupId,api:l.value.form.client.api||r.value.config.Client.CApi.ApiPort,web:l.value.form.client.web||r.value.config.Client.CApi.WebPort,password:l.value.form.client.password||r.value.config.Client.CApi.ApiPassword,hasServer:l.value.form.client.hasServer||!1,server:l.value.form.client.server||r.value.config.Client.ServerInfo.Host,serverSecretKey:l.value.form.client.serverSecretKey||r.value.config.Client.ServerSecretKey,sForwardSecretKey:l.value.form.client.sForwardSecretKey||r.value.config.Client.SForward.SecretKey,relaySecretKey:l.value.form.client.relaySecretKey||(r.value.config.Client.Relay.Servers[0]||{SecretKey:"snltty"}).SecretKey,updaterSecretKey:l.value.form.client.updaterSecretKey||r.value.config.Client.Updater.SecretKey},rules:{name:[{required:!0,message:"必填",trigger:"blur"}],groupid:[{required:!0,message:"必填",trigger:"blur"}],password:[{required:!0,message:"必填",trigger:"blur"}],api:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}],web:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}]}}),o=(0,I.KR)(null),s=()=>new Promise(((e,l)=>{o.value.validate((r=>{r?e({json:{Client:{name:a.form.name,groupid:a.form.groupid,api:+a.form.api,web:+a.form.web,password:a.form.password,hasServer:a.form.hasServer,server:a.form.server,serverSecretKey:a.form.serverSecretKey,sForwardSecretKey:a.form.sForwardSecretKey,relaySecretKey:a.form.relaySecretKey,updaterSecretKey:a.form.updaterSecretKey}},form:{client:JSON.parse(JSON.stringify(a.form))}}):l()}))}));return(0,t.sV)((()=>{0==l.value.json.Common.client&&(l.value.step+=l.value.increment)})),{state:a,handleValidate:s,formDom:o}}};const G=(0,P.A)(J,[["render",H],["__scopeId","data-v-47b95c93"]]);var Y=G;const M=e=>((0,t.Qi)("data-v-c9a17ce0"),e=e(),(0,t.jt)(),e),Z=M((()=>(0,t.Lk)("div",{class:"t-c w-100"},"端口为0则不监听",-1)));function $(e,l,r,a,o,s){const n=(0,t.g2)("el-form-item"),u=(0,t.g2)("el-input"),d=(0,t.g2)("el-col"),m=(0,t.g2)("el-row"),i=(0,t.g2)("el-form");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.bF)(i,{ref:"formDom",model:a.state.form,rules:a.state.rules,"label-width":"10rem"},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"","label-width":"0"},{default:(0,t.k6)((()=>[Z])),_:1}),(0,t.bF)(n,{label:"","label-width":"0"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"服务端口",prop:"servicePort"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.servicePort,"onUpdate:modelValue":l[0]||(l[0]=e=>a.state.form.servicePort=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"web穿透端口",prop:"webPort"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.webPort,"onUpdate:modelValue":l[1]||(l[1]=e=>a.state.form.webPort=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.bF)(n,{label:"","label-width":"0"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"开放最小端口",prop:"tunnelPort1"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.tunnelPort1,"onUpdate:modelValue":l[2]||(l[2]=e=>a.state.form.tunnelPort1=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"开放最大端口",prop:"tunnelPort2"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.tunnelPort2,"onUpdate:modelValue":l[3]||(l[3]=e=>a.state.form.tunnelPort2=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.bF)(n,{label:"","label-width":"0"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:24},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"信标密钥",prop:"signinSecretKey"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.signinSecretKey,"onUpdate:modelValue":l[4]||(l[4]=e=>a.state.form.signinSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.bF)(n,{label:"","label-width":"0"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"穿透密钥",prop:"sForwardSecretKey"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.sForwardSecretKey,"onUpdate:modelValue":l[5]||(l[5]=e=>a.state.form.sForwardSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(d,{span:12},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"中继密钥",prop:"relaySecretKey"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.relaySecretKey,"onUpdate:modelValue":l[6]||(l[6]=e=>a.state.form.relaySecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.bF)(n,{label:"","label-width":"0"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:24},{default:(0,t.k6)((()=>[(0,t.bF)(n,{label:"更新密钥",prop:"updaterSecretKey"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:a.state.form.updaterSecretKey,"onUpdate:modelValue":l[7]||(l[7]=e=>a.state.form.updaterSecretKey=e),maxlength:"36","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])}var ee={setup(e){const l=(0,t.WQ)("step"),r=(0,_.B)(),a=(0,I.Kh)({show:!1,form:{signinSecretKey:l.value.form.server.signinSecretKey||r.value.config.Server.SignIn.SecretKey,relaySecretKey:l.value.form.server.relaySecretKey||r.value.config.Server.Relay.SecretKey,sForwardSecretKey:l.value.form.server.sForwardSecretKey||r.value.config.Server.SForward.SecretKey,servicePort:l.value.form.server.servicePort||r.value.config.Server.ServicePort,webPort:l.value.form.server.webPort||r.value.config.Server.SForward.WebPort,tunnelPort1:l.value.form.server.tunnelPort1||r.value.config.Server.SForward.TunnelPortRange[0],tunnelPort2:l.value.form.server.tunnelPort2||r.value.config.Server.SForward.TunnelPortRange[1],updaterSecretKey:l.value.form.server.updaterSecretKey||r.value.config.Server.Updater.SecretKey},rules:{relaySecretKey:[{required:!0,message:"必填",trigger:"blur"}],sForwardSecretKey:[{required:!0,message:"必填",trigger:"blur"}],servicePort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}],webPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}],tunnelPort1:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}],tunnelPort2:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:65535,message:"数字 0-65535",trigger:"blur",transform(e){return Number(e)}}]}}),o=(0,I.KR)(null),s=()=>new Promise(((e,l)=>{o.value.validate((r=>{0==r?l():e({json:{Server:{ServicePort:+a.form.servicePort,Relay:{SecretKey:a.form.relaySecretKey},SForward:{SecretKey:a.form.sForwardSecretKey,WebPort:+a.form.webPort,TunnelPortRange:[+a.form.tunnelPort1,+a.form.tunnelPort2]},Updater:{SecretKey:a.form.updaterSecretKey},SignIn:{SecretKey:a.form.signinSecretKey}}},form:{server:JSON.parse(JSON.stringify(a.form))}})}))}));return(0,t.sV)((()=>{0==l.value.json.Common.server&&(l.value.step+=l.value.increment)})),{state:a,handleValidate:s,formDom:o}}};const le=(0,P.A)(ee,[["render",$],["__scopeId","data-v-c9a17ce0"]]);var re=le,te={components:{Common:z,Client:Y,Server:re},setup(e){const l=(0,_.B)(),r=(0,I.Kh)({show:0==l.value.config.Common.Install,steps:["选择模式","客户端","完成"]}),a=(0,I.KR)(null),o=(0,I.KR)({step:1,increment:1,json:{},form:{server:{},client:{},common:{}}});(0,t.Gt)("step",o);const s=()=>{o.value.step--,o.value.increment=-1},n=()=>{o.value.increment=1,a.value.handleValidate().then((e=>{o.value.json=Object.assign(o.value.json,e.json),o.value.form=Object.assign(o.value.form,e.form),o.value.step++})).catch((()=>{}))},u=()=>{(0,j.ai)(o.value.json).then((()=>{N.nk.success("保存成功")})).catch((()=>{N.nk.error("保存失败")}))};return{state:r,currentDom:a,step:o,handlePrev:s,handleNext:n,handleSave:u}}};const ae=(0,P.A)(te,[["render",E],["__scopeId","data-v-5fad04f0"]]);var oe=ae,se=r(1387),ne={name:"Index",components:{Head:x,Status:W.A,Install:oe},setup(e){const l=(0,_.B)(),r=(0,se.rd)(),a=(0,I.KR)(null),o=()=>{(0,t.dY)((()=>{l.value.height=a.value.offsetHeight}))};return(0,t.sV)((()=>{0==l.value.hasAccess("FullManager")&&r.push({name:"NoPermission"}),window.addEventListener("resize",o),o()})),(0,t.hi)((()=>{window.removeEventListener("resize",o)})),{wrap:a}}};const ue=(0,P.A)(ne,[["render",d],["__scopeId","data-v-5ea3415a"]]);var de=ue}}]);
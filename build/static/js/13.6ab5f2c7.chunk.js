(this.webpackJsonpchat_front=this.webpackJsonpchat_front||[]).push([[13],{393:function(e){e.exports=JSON.parse('{"hello":{"es":"Hola ","en":"Hello "},"hello1":{"es":", ay\xfadanos a configurar tu perfil","en":", help us to configure your profile"},"descriptionText":{"es":"En esta vista puede realizar algunas de las configuraciones iniciales de la aplicaci\xf3n. Estas pueden ser ajustadas o modificadas en cualquier momento.","en":"In this interface, you can make some initial configurations of the application. They can be adjusted or modified any time."},"labelIdioma":{"es":"Seleccione el idioma","en":"Select language"},"labelSexo":{"es":"G\xe9nero","en":"Gender"},"labelNickname":{"es":"Nombre de pila","en":"Nickname"},"labelAvatar":{"es":"Avatar","en":"Avatar"},"choosefile":{"es":"Seleccione","en":"Choose"},"label1":{"es":"Activando usuario y salvando configuraci\xf3n","en":"Activating user and saving configuration"},"label2":{"es":"Usuario activado","en":"User activated"},"label3":{"es":"Ir a p\xe1gina de entrada","en":"Go to login page"},"content3":{"es":"Felicidades, ha concluido el proceso de registro y activacion de su cuenta. Puede entrar a la aplicai\xf3n usando su correo y la contrase\xf1a. Que la disfrute!","en":"Congratulations, you are done with the signup process. Login on the application using your email and your password. Enjoy it!"},"next":{"es":"Siguiente","en":"Next"},"back":{"es":"Anterior","en":"Back"},"goLogin":{"es":"Continuar","en":"Continue"},"female":{"es":"Femenino","en":"Female"},"male":{"es":"Masculino","en":"Male"},"english":{"es":"Ingles","en":"English"},"spanish":{"es":"Espa\xf1ol","en":"Spanish"},"password":{"es":"Creando contrase\xf1a","en":"Creating password"},"passShort":{"es":"Debe tener al menos 8 caracteres","en":"Must have at least 8 characters"},"pass":{"es":"Contrase\xf1a","en":"Password"}}')},437:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(6),r=t(15),i=t(18),o=t(16),s=t.n(o),u=t(14),m=t(4),d=t(8),v=t(296),g=t(439),p=t(427),b=t(436),E=t(428),h=t(308),f=t(94),C=t(304),k=t(317),N=t(363),S=t(318),j=t(322),y=t(90),O=t(426),w=t(393),x=t(309),I=t(357),A=t(330),L=t.n(A),P=Object(v.a)((function(e){return{root:{width:"100%",height:"100%",paddingTop:e.spacing(2),overflowY:"auto"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},Stepper:{backgroundColor:"transparent"},combo:{minWidth:120},avatarPink:{color:e.palette.getContrastText(y.a[300]),backgroundColor:y.a[300],marginLeft:e.spacing(7),width:e.spacing(10),height:e.spacing(10)},avatarBlue:{color:e.palette.getContrastText(O.a[500]),backgroundColor:O.a[500],marginLeft:e.spacing(7),width:e.spacing(10),height:e.spacing(10)},avatarButton:{padding:0,borderRadius:"50%",minWidth:0},avatarEdit:{margin:e.spacing(2),marginLeft:e.spacing(3),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:""}}})),T=function(e){var a=e.idioma,t=e.activeStep,n=e.handleFinish,c=e.handleLanguageChange,r=e.sexSelectHandler,i=e.sexState,o=e.nicknameState,s=e.setNicknameHandler,u=e.preview,m=e.setPreview,d=e.goNextConf,v=e.goBackConf,O=e.sendActivation,A=e.activationError,T=e.avatarRef,B=e.isUserInvited,F=e.passState,H=e.onChangePass,R=P();return l.a.createElement("div",{className:R.root},l.a.createElement(x.a,null,l.a.createElement(f.a,{variant:"h6"},"".concat(w.hello[a]).concat(o).concat(w.hello1[a])),l.a.createElement(f.a,{variant:"body1"},w.descriptionText[a])),l.a.createElement(I.a,null),l.a.createElement(g.a,{activeStep:t,orientation:"vertical",className:R.Stepper},l.a.createElement(p.a,null,l.a.createElement(b.a,null,w.labelIdioma[a]),l.a.createElement(E.a,null,l.a.createElement(C.a,{variant:"standard",className:R.combo},l.a.createElement(k.a,{id:"input-language",value:a,onChange:c},l.a.createElement(N.a,{value:"en"},w.english[a]),l.a.createElement(N.a,{value:"es"},w.spanish[a])),l.a.createElement(h.a,{variant:"contained",color:"primary",onClick:d,className:R.button},w.next[a])))),l.a.createElement(p.a,null,l.a.createElement(b.a,null,w.labelSexo[a]),l.a.createElement(E.a,null,l.a.createElement(C.a,{variant:"standard",className:R.combo},l.a.createElement(k.a,{id:"input-language",value:i,onChange:r},l.a.createElement(N.a,{value:"M"},w.male[a]),l.a.createElement(N.a,{value:"F"},w.female[a]))),l.a.createElement("div",{className:R.actionsContainer},l.a.createElement("div",null,l.a.createElement(h.a,{variant:"contained",color:"secondary",onClick:v,className:R.button},w.back[a]),l.a.createElement(h.a,{disabled:null==i,variant:"contained",color:"primary",onClick:d,className:R.button},w.next[a]))))),l.a.createElement(p.a,null,l.a.createElement(b.a,null,w.labelNickname[a]),l.a.createElement(E.a,null,l.a.createElement(C.a,{variant:"standard",className:R.combo},l.a.createElement(S.a,{id:"standard-basic",placeholder:w.labelNickname[a],value:o,onChange:s})),l.a.createElement("div",{className:R.actionsContainer},l.a.createElement("div",null,l.a.createElement(h.a,{variant:"contained",color:"secondary",onClick:v,className:R.button},w.back[a]),l.a.createElement(h.a,{disabled:""===o,variant:"contained",color:"primary",onClick:d,className:R.button},w.next[a]))))),l.a.createElement(p.a,null,l.a.createElement(b.a,null,w.labelAvatar[a]),l.a.createElement(E.a,null,l.a.createElement("div",{className:R.avatarEdit},l.a.createElement(L.a,{width:120,height:100,onCrop:function(e){m(e)},onClose:function(){m(null)},closeIconColor:y.a[500],label:w.choosefile[a],ref:T}),l.a.createElement(j.a,{alt:"".concat(o),src:u,variant:"circle",className:"F"===i?R.avatarPink:R.avatarBlue})),l.a.createElement("div",{className:R.actionsContainer},l.a.createElement("div",null,l.a.createElement(h.a,{variant:"contained",color:"secondary",onClick:v,className:R.button},w.back[a]),l.a.createElement(h.a,{disabled:""===o,variant:"contained",color:"primary",onClick:B?d:O,className:R.button},w.next[a]))))),B?l.a.createElement(p.a,null,l.a.createElement(b.a,null,w.password[a]),l.a.createElement(E.a,null,l.a.createElement(C.a,{variant:"standard",className:R.combo},l.a.createElement(S.a,{variant:"standard",required:!0,fullWidth:!0,name:"password",label:w.pass[a],type:"password",id:"password",autoComplete:"current-password",value:F.value,helperText:F.valid?"":w[F.msg][a],error:!F.valid,onChange:H}),l.a.createElement("div",{className:R.actionsContainer},l.a.createElement("div",null,l.a.createElement(h.a,{variant:"contained",color:"secondary",onClick:v,className:R.button},w.back[a]),l.a.createElement(h.a,{disabled:!F.valid||!F.value.length>0,variant:"contained",color:"primary",onClick:O,className:R.button},w.next[a])))))):null,l.a.createElement(p.a,null,l.a.createElement(b.a,{error:A},w.label1[a])),l.a.createElement(p.a,null,l.a.createElement(b.a,null,w.label3[a]),l.a.createElement(E.a,null,l.a.createElement(f.a,null,w.content3[a]),l.a.createElement("div",{className:R.actionsContainer},l.a.createElement("div",null,l.a.createElement(h.a,{variant:"contained",color:"primary",onClick:n,className:R.button},w.goLogin[a])))))),l.a.createElement(I.a,null))},B=Object(i.g)((function(e){var a=Object(m.useRecoilState)(d.h),t=Object(r.a)(a,2),o=t[0],v=t[1],g=Object(n.useState)(0),p=Object(r.a)(g,2),b=p[0],E=p[1],h=Object(n.useState)(!1),f=Object(r.a)(h,2),C=f[0],k=f[1],N=Object(n.useState)(null),S=Object(r.a)(N,2),j=S[0],y=S[1],O=Object(n.useState)(null),w=Object(r.a)(O,2),x=w[0],I=w[1],A=Object(n.useState)(e.match.params.nickname),L=Object(r.a)(A,2),P=L[0],B=L[1],F=Object(n.useState)(null),H=Object(r.a)(F,2),R=H[0],U=H[1],M=Object(n.useState)({value:"",valid:!0}),G=Object(r.a)(M,2),J=G[0],W=G[1],q=Object(n.useRef)(null),D=function(){E((function(e){return e+1}))};return j?l.a.createElement(i.a,{to:"/"}):l.a.createElement(T,{idioma:o,activeStep:b,handleFinish:function(){y(!0)},handleLanguageChange:function(e){var a=e.target.value;v(a)},sexSelectHandler:function(e){var a=e.target.value;I(a)},sexState:x,nicknameState:P,setNicknameHandler:function(e){var a=e.target.value;B(a)},preview:R,setPreview:U,goNextConf:D,goBackConf:function(){E((function(e){return e-1}))},sendActivation:function(){D(),s.a.post("".concat(u.a.server,"/users/activate"),{token:e.match.params.token,language:o,gender:x,nickname:P,avatar:R,isUserInvited:"invited"===e.match.params.invited,password:J.value}).then((function(e){200===e.status&&D()})).catch((function(e){k(!0)}))},activationError:C,avatarRef:q,isUserInvited:"invited"===e.match.params.invited,passState:J,onChangePass:function(e){var a=e.target.value;a.length<8?W(Object(c.a)(Object(c.a)({},J),{},{value:a,valid:!1,msg:"passShort"})):W(Object(c.a)(Object(c.a)({},J),{},{value:a,valid:!0,msg:null}))}})}));a.default=function(e){return l.a.createElement(B,null)}}}]);
//# sourceMappingURL=13.6ab5f2c7.chunk.js.map
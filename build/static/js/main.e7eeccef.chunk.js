(this.webpackJsonpchat_front=this.webpackJsonpchat_front||[]).push([[3],{101:function(e,t,a){"use strict";var n,r=a(151),o=a.n(r),i=a(33),l={getSocket:function(){return n||(n=o()(i.a.server))},close:function(){n.close()}};t.a=l},102:function(e,t,a){"use strict";var n=a(59),r=a.n(n),o=a(106),i=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("token"),n=localStorage.getItem("token_expires"),!(a&&n&&new Date(n).getTime()>(new Date).getTime())){e.next=7;break}return e.next=5,t(a);case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=i},114:function(e,t,a){"use strict";var n=a(6),r=(a(34),a(13)),o=a(0),i=a(101);t.a=function(){var e=Object(n.useSetRecoilState)(r.i),t=Object(n.useSetRecoilState)(r.l),a=Object(n.useSetRecoilState)(r.j),l=Object(n.useSetRecoilState)(r.d),c=Object(n.useSetRecoilState)(r.f),s=i.a.getSocket();return Object(o.useCallback)((function(){t(null),l([]),c([]),s.emit("logout",{}),localStorage.removeItem("token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("refresh_token_expires"),localStorage.removeItem("token_expires"),a(!1),e(null)}))}},13:function(e,t,a){"use strict";a.d(t,"h",(function(){return r})),a.d(t,"i",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return c})),a.d(t,"j",(function(){return s})),a.d(t,"l",(function(){return i})),a.d(t,"b",(function(){return u})),a.d(t,"f",(function(){return m})),a.d(t,"a",(function(){return d})),a.d(t,"g",(function(){return f})),a.d(t,"k",(function(){return g})),a.d(t,"e",(function(){return p}));var n=a(6),r=Object(n.atom)({key:"idiomaState",default:function(){var e="en",t=navigator.language||navigator.userLanguage;return/^(es-).+/.test(t)&&(e="es"),e}()}),o=Object(n.atom)({key:"loginData",default:null}),i=Object(n.atom)({key:"userAvatarState",default:null}),l=Object(n.atom)({key:"chatConversation",default:{active:!1}}),c=Object(n.atom)({key:"contactListState",default:[]}),s=(Object(n.atom)({key:"view",default:"LOGIN"}),Object(n.atom)({key:"backdropState",default:!1}),Object(n.atom)({key:"subscribeToEventsState",default:!1})),u=Object(n.atom)({key:"addContactViewOpenState",default:!1}),m=Object(n.atom)({key:"friendsAtom",default:[]}),d=Object(n.atom)({key:"activeChatWith",default:null}),f=function(e){return Object(n.atom)({key:"conversationWith_".concat(e),default:[]})},g=(Object(n.atom)({key:"messagesAtom",default:null}),Object(n.atom)({key:"tokenTimeoutAtom",default:{tokentimeout:0}})),p=Object(n.atom)({key:"themeAtom",default:"true"===localStorage.getItem("darkMode")})},172:function(e,t,a){e.exports=a(249)},177:function(e,t,a){},19:function(e){e.exports=JSON.parse('{"signin":{"es":"Entrar","en":"Sign in"},"email":{"en":"Email Address","es":"Correo Electr\xf3nico"},"password":{"en":"Password","es":"Contrase\xf1a"},"rememberme":{"en":"Remember me","es":"Recu\xe9rdame"},"forgotpassword":{"en":"Forgot password?","es":"Olvid\xf3 su contrase\xf1a?"},"gosignup":{"en":"Dont have an account? Sign Up!","es":"No tienes una cuenta? Cre\xe1tela!"},"notAuthorized":{"en":"Not authorized","es":"No autorizado"},"notActive":{"en":"User not active. Check your email and follow the link to activate it.","es":"Usuario sin activar. Revise su correo y siga el v\xednculo para activarlo."},"internalError":{"en":"Internal error","es":"Error interno"},"connErr":{"en":"Error de conexi\xf3n","es":"Network error"}}')},20:function(e){e.exports=JSON.parse('{"signup":{"es":"Crear cuenta","en":"Sign up"},"firstName":{"es":"Nombre","en":"First Name"},"lastName":{"es":"Apellidos","en":"Last Name"},"email":{"es":"Correo Electr\xf3nico","en":"Email Address"},"password":{"es":"Contrase\xf1a","en":"Password"},"signin":{"es":"Ya tienes una cuenta? Reg\xedstrate!","en":"Already have an account? Sign in!"},"invalidEmail":{"es":"Correo inv\xe1lido","en":"Invalid email"},"passShort":{"es":"Debe tener al menos 8 caracteres","en":"Must have at least 8 characters"},"nameInvalid":{"es":"Sin espacios. Sin n\xfameros.","en":"No spaces. No numbers."},"nameShort":{"es":"Muy corto (min 2)","en":"Too Short (2 min)"},"nameLong":{"es":"Muy largo (max 20)","en":"Too long (max 20)"},"duplicated":{"es":"El correo ya se encuentra registrado.","en":"The email is already registered."},"error":{"es":"Error interno","en":"Internal error"},"userCreated":{"es":"Usuario creado. Revise su correo para activarlo.","en":"User created. Check your email to activate it."},"connError":{"es":"Error de conexi\xf3n","en":"Network error"}}')},246:function(e,t){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=(a(177),a(6)),c=a(13),s=a(14),u=a(152),m=a(289),d=a(307),f=a(252),g=a(308),p=a(303),v=a(253),b=a(147),h=a.n(b),E=a(103),k=a(21),S=a(34),O=a.n(S),j=a(316),w=a(301),y=a(311),C=a(304),N=a(312),x=a(306),R=a(305),I=a(62),_=a.n(I),W=a(81),T=a(302),D=a(37),A=a(10),z=a(45),P=a(31),F=a(290),U=a(292),H=a(293),V=a(294),L=a(300),q=function(e){var t=e.idioma,a=e.forgetPassHandler,n=e.forgotWinState,o=e.forgotWinOk,i=e.onChangeForgotEmail,l=e.forgotEmailState;return r.a.createElement(F.a,{open:n,onClose:a,"aria-labelledby":"form-dialog-title"},r.a.createElement(U.a,{id:"form-dialog-title"},P.title[t]),r.a.createElement(H.a,null,r.a.createElement(V.a,null,P.forgotText[t]),r.a.createElement(y.a,{autoFocus:!0,margin:"dense",id:"name",label:P.email[t],type:"email",fullWidth:!0,onChange:i,value:l.value,helperText:l.valid?"":P.invalidEmail[t],error:!l.valid})),r.a.createElement(L.a,null,r.a.createElement(w.a,{onClick:a,color:"primary"},P.forgotBtnCancel[t]),r.a.createElement(w.a,{onClick:o,color:"primary"},P.forgotBtnOk[t])))},B=a(33),J=function(e){var t=e.idioma,a=e.forgotWinState,o=e.forgetPassHandler,i=Object(n.useState)({value:"",valid:!0}),l=Object(k.a)(i,2),c=l[0],s=l[1],u=Object(z.a)(),m=u.openSuccessNotification,d=u.openErrorNotification;return r.a.createElement(q,{idioma:t,forgotWinState:a,onChangeForgotEmail:function(e){var t=e.target.value;s(Object(A.a)(Object(A.a)({},c),{},{valid:!0,value:t}))},forgotWinOk:function(){/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(c.value)?O.a.post("".concat(B.a.server,"/users/forgot"),{email:c.value,hostname:window.location.host}).then((function(e){201===e.status&&m(P.emailSended[t]),o()})).catch((function(e){e.response?404===e.response.status?d(P.emailNotFound[t]):d(P.error[t]):d(P.connError[t])})):s(Object(A.a)(Object(A.a)({},c),{},{valid:!1}))},forgotEmailState:c,setForgotEmailStste:s,forgetPassHandler:o})},M=function(e){return r.a.createElement(J,e)},$=a(19),Y=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},link:{cursor:"pointer",textDecoration:"none",color:e.palette.text.secondary,"&:hover":{textDecoration:"underline"}}}}));function G(e){var t=e.idioma,a=e.emailRef,n=e.passRef,o=e.onSignIn,i=e.rememberChecked,l=e.onRememberChange,c=e.forgetPassHandler,s=e.forgotWinState,u=Y();return r.a.createElement(T.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:u.paper},r.a.createElement(j.a,{className:u.avatar},r.a.createElement(_.a,null)),r.a.createElement(W.a,{component:"h1",variant:"h5"},$.signin[t]),r.a.createElement("form",{className:u.form,noValidate:!0},r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:$.email[t],name:"email",autoComplete:"email",autoFocus:!0,inputRef:a}),r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:$.password[t],type:"password",id:"password",autoComplete:"current-password",inputRef:n}),r.a.createElement(C.a,{control:r.a.createElement(N.a,{value:"remember",color:"primary",checked:i,onChange:l}),label:$.rememberme[t]}),r.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:u.submit,onClick:o},$.signin[t]),r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement(x.a,{className:u.link,onClick:c},$.forgotpassword[t])),r.a.createElement(R.a,{item:!0},r.a.createElement(D.b,{to:"/signup",className:u.link},$.gosignup[t]))))),r.a.createElement(M,{idioma:t,forgotWinState:s,forgetPassHandler:c}))}var Z=a(102),K=function(e){var t=Object(l.useRecoilState)(c.h),a=Object(k.a)(t,2),o=a[0],i=a[1],u=Object(l.useSetRecoilState)(c.l),m=Object(l.useSetRecoilState)(c.k),d=Object(l.useSetRecoilState)(c.i),f=Object(n.useState)(null),g=Object(k.a)(f,2),p=g[0],v=g[1],b=Object(z.a)().openErrorNotification,h=Object(n.useRef)(""),E=Object(n.useRef)(""),S=Object(n.useState)(!1),j=Object(k.a)(S,2),w=j[0],y=j[1],C=Object(n.useState)(!1),N=Object(k.a)(C,2),x=N[0],R=N[1];Object(n.useEffect)((function(){Object(Z.a)((function(e){O.a.post("".concat(B.a.server,"/users/loginWithToken"),{token:e}).then((function(e){if(200===e.status){var t=e.data,a=t.token,n=t.token_expires,r=t._id,o=t.nickname,l=t.firstName,c=t.lastName,s=t.email,f=t.gender,g=t.language,p=t.avatarUrl;localStorage.setItem("token",a),localStorage.setItem("token_expires",n),m({timeleft:n}),d({userId:r,nickname:o,firstName:l,lastName:c,email:s,gender:f}),i(g),p&&u(p),v(!0)}})).catch((function(e){e.response?403===e.response.status?b($.notAuthorized[o]):b($.internalError[o]):b($.connErr[o])}))})),localStorage.email&&localStorage.password&&localStorage.rememberme&&(h.current.value=localStorage.email,E.current.value=localStorage.password,y(!0))}),[]);return p?r.a.createElement(s.a,{to:"/contacts"}):r.a.createElement(G,{idioma:o,emailRef:h,passRef:E,rememberChecked:w,onRememberChange:function(e){return y(e.target.checked)},onSignIn:function(e){e.preventDefault(),!0===w?(localStorage.setItem("email",h.current.value),localStorage.setItem("password",E.current.value),localStorage.setItem("rememberme",!0)):(localStorage.removeItem("email"),localStorage.removeItem("password"),localStorage.removeItem("rememberme")),O.a.post("".concat(B.a.server,"/users/login"),{email:h.current.value,password:E.current.value}).then((function(e){if(200===e.status){var t=e.data,a=t.token,n=t.token_expires,r=t._id,o=t.nickname,l=t.firstName,c=t.lastName,s=t.email,f=t.gender,g=t.language,p=t.avatarUrl,b=t.refresh_token,h=t.refresh_token_expires;localStorage.setItem("token",a),localStorage.setItem("refresh_token",b),localStorage.setItem("token_expires",n),localStorage.setItem("refresh_token_expires",h),m({timeleft:n}),d({userId:r,nickname:o,firstName:l,lastName:c,email:s,gender:f}),i(g),p&&u(p),v(!0)}})).catch((function(e){e.response?"User not active"===e.response.message?b($.notActive[o]):403===e.response.status?b($.notAuthorized[o]):b($.internalError[o]):b($.connErr[o])}))},forgotWinState:x,forgetPassHandler:function(){R(!x)}})},Q=function(e){return r.a.createElement(K,null)},X=Object(m.a)((function(e){return{container:{padding:0,position:"relative",height:"100vh",overflowY:"hidden",backgroundColor:e.palette.background.paper},background:{backgroundColor:e.palette.background.default}}})),ee=function(e){var t=X();return r.a.createElement("div",{className:t.background},r.a.createElement(T.a,{maxWidth:"sm",className:t.container,component:"main"},r.a.createElement(p.a,null),e.children))},te=function(e){return r.a.createElement(ee,e)},ae=a(20),ne=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},link:{cursor:"pointer",textDecoration:"none",color:e.palette.text.secondary,"&:hover":{textDecoration:"underline"}}}}));function re(e){var t=e.idioma,a=e.onSignUp,n=e.emailState,o=e.onEmailChange,i=e.passState,l=e.onPassChange,c=e.nameState,s=e.onNameChange,u=e.lastNameRef,m=ne();return r.a.createElement(T.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:m.paper},r.a.createElement(j.a,{className:m.avatar},r.a.createElement(_.a,null)),r.a.createElement(W.a,{component:"h1",variant:"h5"},ae.signup[t]),r.a.createElement("form",{className:m.form,noValidate:!0},r.a.createElement(R.a,{container:!0,spacing:2},r.a.createElement(R.a,{item:!0,xs:12,sm:6},r.a.createElement(y.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:ae.firstName[t],autoFocus:!0,value:c.value,helperText:c.valid?"":ae[c.msg][t],error:!c.valid,onChange:s})),r.a.createElement(R.a,{item:!0,xs:12,sm:6},r.a.createElement(y.a,{variant:"outlined",fullWidth:!0,id:"lastName",label:ae.lastName[t],name:"lastName",autoComplete:"lname",inputRef:u})),r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:ae.email[t],name:"email",autoComplete:"email",value:n.value,helperText:n.valid?"":ae.invalidEmail[t],error:!n.valid,onChange:o})),r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:ae.password[t],type:"password",id:"password",autoComplete:"current-password",value:i.value,helperText:i.valid?"":ae[i.msg][t],error:!i.valid,onChange:l}))),r.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:m.submit,onClick:a},ae.signup[t]),r.a.createElement(R.a,{container:!0,justify:"flex-end"},r.a.createElement(R.a,{item:!0},r.a.createElement(D.b,{to:"/",className:m.link},ae.signin[t]))))))}var oe=function(e){var t=Object(l.useRecoilValue)(c.h),a=Object(z.a)(),o=a.openSuccessNotification,i=a.openErrorNotification,s=Object(n.useState)({value:"",valid:!0}),u=Object(k.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)({value:"",valid:!0}),g=Object(k.a)(f,2),p=g[0],v=g[1],b=Object(n.useState)({value:"",valid:!0}),h=Object(k.a)(b,2),E=h[0],S=h[1],j=Object(n.useRef)();return r.a.createElement(re,{idioma:t,lastNameRef:j,nameState:E,passState:p,emailState:m,onSignUp:function(e){e.preventDefault(),/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(m.value)?p.value.length<8?v(Object(A.a)(Object(A.a)({},p),{},{valid:!1,msg:"passShort"})):/^[a-zA-Z\']+$/.test(E.value)?E.value.length<2?S(Object(A.a)(Object(A.a)({},E),{},{valid:!1,msg:"nameShort"})):E.value.length>=20?S(Object(A.a)(Object(A.a)({},E),{},{valid:!1,msg:"nameLong"})):O.a.post("".concat(B.a.server,"/users/signup"),{firstName:E.value,lastName:j.current.value,email:m.value,password:p.value,language:t,hostname:window.location.host}).then((function(e){201===e.status&&o(ae.userCreated[t])})).catch((function(e){e.response?409===e.response.status?i(ae.duplicated[t]):i(ae.error[t]):i(ae.connError[t])})):S(Object(A.a)(Object(A.a)({},E),{},{valid:!1,msg:"nameInvalid"})):d(Object(A.a)(Object(A.a)({},m),{},{valid:!1}))},onNameChange:function(e){var t=e.target.value;S(Object(A.a)(Object(A.a)({},E),{},{value:t,valid:!0}))},onEmailChange:function(e){var t=e.target.value;d(Object(A.a)(Object(A.a)({},m),{},{value:t,valid:!0}))},onPassChange:function(e){var t=e.target.value;v(Object(A.a)(Object(A.a)({},p),{},{value:t,valid:!0}))}})},ie=function(e){return r.a.createElement(oe,null)},le=a(313),ce=a(309),se=a(73);function ue(e){return r.a.createElement(ce.a,Object.assign({elevation:6,variant:"filled"},e))}var me=function(){var e=Object(l.useRecoilState)(se.a),t=Object(k.a)(e,2),a=t[0],n=t[1],o=function(e,t){"clickaway"!==t&&n(Object(A.a)(Object(A.a)({},a),{},{open:!1}))};return r.a.createElement(le.a,{open:a.open,autoHideDuration:a.autoHideDuration,onClose:o,anchorOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(ue,{onClose:o,severity:a.severity},a.msg))},de=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,null))},fe=a(114),ge=function(){var e=Object(l.useSetRecoilState)(c.k),t=Object(fe.a)();return Object(n.useCallback)((function(){var a=localStorage.getItem("token"),n=localStorage.getItem("refresh_token"),r=localStorage.getItem("refresh_token_expires");if(n&&r&&new Date(r).getTime()>(new Date).getTime())return O.a.post("".concat(B.a.server,"/users/refreshtoken"),{token:a,refresh_token:n}).then((function(t){if(200===t.status){var a=t.data,n=a.new_token,r=a.new_refresh_token,o=a.new_token_expires,i=a.new_refresh_token_expires;localStorage.setItem("token",n),localStorage.setItem("refresh_token",r),localStorage.setItem("token_expires",o),localStorage.setItem("refresh_token_expires",i),e({timeleft:o})}})).catch((function(e){t()}));t()}),[t,e])},pe=r.a.lazy((function(){return a.e(14).then(a.bind(null,436))})),ve=r.a.lazy((function(){return Promise.all([a.e(0),a.e(9),a.e(12)]).then(a.bind(null,434))})),be=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(6)]).then(a.bind(null,430))})),he=r.a.lazy((function(){return Promise.all([a.e(1),a.e(8)]).then(a.bind(null,432))})),Ee=r.a.lazy((function(){return Promise.all([a.e(2),a.e(11),a.e(15)]).then(a.bind(null,437))})),ke=r.a.lazy((function(){return a.e(16).then(a.bind(null,438))})),Se=r.a.lazy((function(){return a.e(13).then(a.bind(null,433))})),Oe=function(){var e=ge(),t=Object(l.useRecoilValue)(c.k);return r.a.useEffect((function(){var a=new Date(t.timeleft).getTime()-(new Date).getTime();a>=1e4&&setTimeout((function(){e()}),a-1e4)}),[t]),r.a.createElement(r.a.Fragment,null)},je=Object(u.a)({palette:{type:"dark"}}),we=Object(u.a)({}),ye=Object(m.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),Ce=function(){var e=ye(),t=Object(l.useRecoilValue)(c.e),a=Object(l.useRecoilValue)(c.j),o=Object(l.useRecoilValue)(c.i),i=Object(l.useRecoilValue)(c.a),u=r.a.createRef(),m=function(e){return function(){u.current.closeSnackbar(e)}},b=null!==o?r.a.createElement(r.a.Fragment,null,i?r.a.createElement(he,null):r.a.createElement(s.b,{path:"/contacts",exact:!0,render:function(){return r.a.createElement(d.a,{theme:t?je:we},r.a.createElement(pe,null),r.a.createElement(be,null),r.a.createElement(ve,null))}})):null;return r.a.createElement(n.Suspense,{fallback:r.a.createElement(f.a,{className:e.backdrop,open:!0},r.a.createElement(g.a,{color:"inherit"}))},r.a.createElement(d.a,{theme:t?je:we},r.a.createElement(te,null,r.a.createElement(p.a,null),r.a.createElement(de,null),r.a.createElement(E.a,{maxSnack:3,autoHideDuration:3e3,preventDuplicate:!0,anchorOrigin:{vertical:"top",horizontal:"left"},ref:u,action:function(e){return r.a.createElement(v.a,{onClick:m(e)},r.a.createElement(h.a,{fontSize:"small",style:{color:"white"}}))}},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:Q}),r.a.createElement(s.b,{path:"/signup",exact:!0,component:ie}),b,r.a.createElement(s.b,{path:"/changepass/:token",exact:!0,render:function(){return r.a.createElement(ke,null)}}),r.a.createElement(s.b,{path:"/activateuser/:token/:nickname/:invited",exact:!0,render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(s.b,{path:"/activateuser/:token/:nickname",exact:!0,render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(s.a,{from:"/",to:"/"})),a?r.a.createElement(Se,null):null,r.a.createElement(Oe,null)))))},Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.RecoilRoot,null,r.a.createElement(D.a,null,r.a.createElement(Ce,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):xe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):xe(t,e)}))}}()},31:function(e){e.exports=JSON.parse('{"title":{"en":"Reset password","es":"Cambiar contrase\xf1a"},"email":{"en":"Email Address","es":"Correo Electr\xf3nico"},"forgotText":{"es":"Escriba su correo electr\xf3nico y le enviaremos un enlace para que pueda cambiar su contrase\xf1a.","en":"Write your email, and we send you a link in wish you can change your password."},"forgotBtnOk":{"es":"Continuar","en":"Continue"},"forgotBtnCancel":{"es":"Cancelar","en":"Cancel"},"invalidEmail":{"es":"Correo inv\xe1lido","en":"Invalid email"},"emailSended":{"es":"Revise su bandeja de entrada de correos","en":"Check your email inbox"},"emailNotFound":{"es":"Correo no encontrado","en":"Email not found"},"error":{"es":"Error interno","en":"Internal error"},"connError":{"es":"Error de conexi\xf3n","en":"Network error"}}')},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={server:location.origin}},45:function(e,t,a){"use strict";var n=a(10),r=a(21),o=(a(0),a(6)),i=a(73);t.a=function(){var e=Object(o.useRecoilState)(i.a),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.a)(Object(n.a)({},a),{},{open:!0,autoHideDuration:3e3}),s=function(e,t){l(Object(n.a)(Object(n.a)({},c),{},{severity:e,msg:t}))};return{openNotification:function(e){l(Object(n.a)(Object(n.a)({},c),e))},openSuccessNotification:function(e){s("success",e)},openErrorNotification:function(e){s("error",e)},openInfoNotification:function(e){s("info",e)},openWarningNotification:function(e){s("warning",e)}}}},73:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(6),r=Object(n.atom)({key:"notificationAtom",default:{open:!1,autoHideDuration:6e3,severity:"success",msg:""}})}},[[172,4,5]]]);
//# sourceMappingURL=main.e7eeccef.chunk.js.map
(this.webpackJsonpchat_front=this.webpackJsonpchat_front||[]).push([[10],{320:function(e,a,t){"use strict";t.d(a,"d",(function(){return u})),t.d(a,"e",(function(){return m})),t.d(a,"a",(function(){return d})),t.d(a,"c",(function(){return p})),t.d(a,"b",(function(){return f}));var n=t(58),r=t.n(n),o=t(10),c=t(108),i=t(324),l=t(6),s=t(13),u=Object(l.selector)({key:"friendSelector",get:function(e){var a=e.get;return a(s.f).length>0?Object(i.a)(a(s.f)).sort((function(e,a){if(1===e.friendShipStatus&&1===a.friendShipStatus){if(e.socketId&&!a.socketId)return-1;if(!e.socketId&&a.socketId)return 1}return e.friendShipStatus<a.friendShipStatus?-1:e.friendShipStatus>a.friendShipStatus?1:e.email<a.email?-1:e.email>a.email?1:void 0})):[]},set:function(){var e=Object(c.a)(r.a.mark((function e(a,t){var n,c,l,u,m,d,p,f,v,g,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.set,c=a.get,l=t.action,u=t.payload,e.t0=l,e.next="initialize"===e.t0?5:"add"===e.t0?7:"update"===e.t0?9:"reset_cant_no_leidos"===e.t0?11:"set_message_info"===e.t0?13:"delete"===e.t0?15:"connect"===e.t0?19:"disconnect"===e.t0?21:26;break;case 5:return n(s.f,(function(e){return 0===e.length?u.friends:e})),e.abrupt("break",27);case 7:return n(s.f,(function(e){var a=Object(i.a)(e);return a.push(u.friend),a})),e.abrupt("break",27);case 9:return n(s.f,(function(e){var a=e.findIndex((function(e){return e.contactId===u.friend.contactId}));return e.slice(0,a).concat([u.friend]).concat(e.slice(a+1))})),e.abrupt("break",27);case 11:return n(s.f,(function(e){var a=e.findIndex((function(e){return e.contactId===u.contactId}));return e.slice(0,a).concat([Object(o.a)(Object(o.a)({},e[a]),{},{unread:0})]).concat(e.slice(a+1))})),e.abrupt("break",27);case 13:return n(s.f,(function(e){var a=u.dataObj;return e.map((function(e){if(a[e.contactId]){var t=0;return e.unread&&(t=e.unread),a[e.contactId].cantidad&&(t+=a[e.contactId].cantidad),Object(o.a)(Object(o.a)({},e),{},{unread:t,lastMsg:a[e.contactId].lastMessage,datetime:a[e.contactId].datetime})}return e}))})),e.abrupt("break",27);case 15:return c(s.a)===u.friendId&&n(s.a,(function(e){return null})),n(s.f,(function(e){return e.filter((function(e){return e.contactId!==u.friendId}))})),e.abrupt("break",27);case 19:return Array.isArray(u.data)?n(s.f,(function(e){return e.map((function(e){var a=u.data.findIndex((function(a){return a.userId===e.contactId}));return a>=0?Object(o.a)(Object(o.a)({},e),{},{socketId:u.data[a].socketId}):Object(o.a)({},e)}))})):(m=u.data,d=m.userId,p=m.socketId,f=null,v=0,n(s.f,(function(e){var a=e.findIndex((function(e){return e.contactId===d}));if(a>=0){f=e[a].nickname,v=e[a].friendShipStatus;var t=Object(o.a)(Object(o.a)({},e[a]),{},{socketId:p});return e.slice(0,a).concat([t]).concat(e.slice(a+1))}return e})),f&&1===v&&u.notification("".concat(f," ").concat(u.msg[c(s.h)]),{variant:"info"})),e.abrupt("break",27);case 21:return g=null,b=0,n(s.f,(function(e){var a=e.findIndex((function(e){return e.socketId===u.socketId}));return a>=0?(g=e[a].nickname,b=e[a].friendShipStatus,Object(i.a)(e).slice(0,a).concat([Object(o.a)(Object(o.a)({},e[a]),{},{socketId:null})]).concat(e.slice(a+1))):e})),g&&1===b&&u.notification("".concat(g," ").concat(u.msg[c(s.h)]),{variant:"warning"}),e.abrupt("break",27);case 26:return e.abrupt("break",27);case 27:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()}),m=Object(l.selector)({key:"conversationSelector",set:function(e,a){var t=e.set,n=a.contactId,r=a.conversation,o=function(e,a,t,n){return e===t?0:a===t?n?3:2:void 0};t(Object(s.g)(n),(function(e){return r.map((function(e){return{_id:e._id,content:e.content,datetime:e.datetime,state:o(e.userOrigin,e.userDestiny,n,e.readed)}}))}))}}),d=Object(l.selector)({key:"addMessageToConversation",set:function(e,a){var t=e.set,n=a.contactId,r={_id:a.messageId,content:a.content,datetime:a.datetime,state:a.state};t(Object(s.g)(n),(function(e){return e.concat([r])}))}}),p=Object(l.selector)({key:"editMsgToStateSavedSelector",set:function(e,a){var t=e.set,n=a.contactId,r=a.messageId,c=a.datetime,i=a.consecutive;t(Object(s.g)(n),(function(e){var a=e.findIndex((function(e){return e._id===i&&1===e.state}));if(a>=0){var t=Object(o.a)(Object(o.a)({},e[a]),{},{state:2,_id:r,datetime:c});return e.slice(0,a).concat([t]).concat(e.slice(a+1))}return e}))}}),f=Object(l.selector)({key:"editAllMsgToSavedSelector",set:function(e,a){var t=e.set,n=a.contactId;t(Object(s.g)(n),(function(e){return e.map((function(e){return 0!==e.state?Object(o.a)(Object(o.a)({},e),{},{state:3}):e}))}))}})},321:function(e,a,t){"use strict";var n=t(34),r=t.n(n),o=t(6),c=t(104),i=t(44),l=t(33),s=t(13);a.a=function(){var e=Object(i.a)(),a=e.openErrorNotification,t=e.openSuccessNotification,n=Object(o.useRecoilValue)(s.h).idioma;return{postRequest:function(e){var o=e.url,i=e.bodyParams,s=void 0===i?{}:i,u=e.doFnAfterSuccess,m=void 0===u?null:u,d=e.doFnAfterError,p=void 0===d?null:d,f=e.messageOnSuccess,v=void 0===f?null:f,g=e.messageOnError,b=void 0===g?null:g;Object(c.a)((function(e){r.a.post("".concat(l.a.server).concat(o),s,{headers:{Authorization:e}}).then((function(a){v&&t(v),m&&m(a,e)})).catch((function(e){if(e.response)b&&a(b);else{a({es:"Error de conexi\xf3n",en:"Network error"}[n])}p&&p(e)}))}))}}}},382:function(e){e.exports=JSON.parse('{"title":{"es":"Cambiar contrase\xf1a","en":"Change password"},"password":{"es":"Contrase\xf1a","en":"Password"},"oldpassword":{"es":"Contrase\xf1a actual","en":"Current password"},"invalidPass":{"es":"Debe tener al menos 8 caracteres","en":"Must have at least 8 characters"},"invalidOldPass":{"es":"No puede estar vac\xeda","en":"Cant\'t be empty"},"repeatPassword":{"es":"Repita la contrase\xf1a","en":"Repeat password"},"passNotEqual":{"es":"Las contrase\xf1as no son iguales","en":"The passwords are not equal"},"changePass":{"es":"Cambiar contrase\xf1a","en":"Change password"},"passChangeOk":{"es":"La contrase\xf1a ha sido cambiada","en":"Your password has been changed"},"passChangeError":{"es":"La contrase\xf1a no se pudo cambiar","en":"The password can\'t be changed"},"passChange403Error":{"es":"Contrase\xf1a actual incorrecta","en":"Wrong current password "},"signin":{"es":"Ir a la p\xe1gina de registro","en":"Go to login page"},"connError":{"es":"Error de conexi\xf3n","en":"Network error"}}')},383:function(e){e.exports=JSON.parse('{"choosefile":{"es":"Seleccione","en":"Choose"},"btnCambiar":{"es":"Guardar","en":"Save"},"onError":{"es":"El avatar no se pudo guardar","en":"Avatar can\'t save"}}')},385:function(e){e.exports=JSON.parse('{"title":{"es":"Editar perfil","en":"Edit profile"},"email":{"es":"Correo","en":"Email"},"firstName":{"es":"Nombre","en":"First name"},"lastName":{"es":"Apellidos","en":"Last name"},"nickname":{"es":"Nombre de pila","en":"Nick name"},"gender":{"es":"G\xe9nero","en":"Gender"},"invalidEmail":{"es":"Correo inv\xe1lido","en":"Invalid email"},"nicknameNull":{"es":"El nombre de pila no puede estar vacio","en":"Nickname can\'t be empty"},"nameInvalid":{"es":"Sin espacios. Sin n\xfameros.","en":"No spaces. No numbers."},"nameShort":{"es":"Muy corto (min 2)","en":"Too Short (2 min)"},"nameLong":{"es":"Muy largo (max 20)","en":"Too long (max 20)"},"duplicated":{"es":"El correo ya se encuentra registrado.","en":"The email is already registered."},"error":{"es":"Error interno","en":"Internal error"},"onSaveSuccess":{"es":"Perfil editado correctamente","en":"Profile edited successfully"},"save":{"es":"Guardar","en":"Save"},"female":{"es":"Femenino","en":"Female"},"male":{"es":"Masculino","en":"Male"},"connError":{"es":"Error de conexi\xf3n","en":"Network error"}}')},386:function(e){e.exports=JSON.parse('{"winTitle":{"es":"Compartir aplicaci\xf3n","en":"Share application"},"text":{"es":"Escribe el nombre y la direccion de correo el\xe9ctronico de un amigo para invitarlo y se pueda comunicar contigo por esta v\xeda","en":"Write the name and the email address to invite your friend and can comunicate with you using this app"},"email":{"es":"Correo Electr\xf3nico","en":"Email Address"},"name":{"es":"Nombre","en":"First Name"},"send":{"es":"Enviar","en":"Send"},"sendSuccess":{"es":"Invitaci\xf3n eviada","en":"Invitation sended"},"nameInvalid":{"es":"Sin espacios. Sin n\xfameros.","en":"No spaces. No numbers."},"nameShort":{"es":"Muy corto (min 2)","en":"Too Short (2 min)"},"nameLong":{"es":"Muy largo (max 20)","en":"Too long (max 20)"},"emailExist":{"es":"El usuario ya est\xe1 registrado en el sistema","en":"The user is already in the system"},"connError":{"es":"Error de conexi\xf3n","en":"Network error"}}')},387:function(e){e.exports=JSON.parse('{"title":{"es":"Calif\xedcanos","en":"Rate us"},"comment":{"es":"Comentario","en":"Comment"},"unrated":{"es":"Sin calificar","en":"Unrated"},"useless":{"es":"Inservible","en":"Useless"},"useless+":{"es":"Inservible+","en":"Useless+"},"poor":{"es":"Pobre","en":"Poor"},"poor+":{"es":"Pobre+","en":"Poor+"},"ok":{"es":"Ok","en":"Ok"},"ok+":{"es":"Ok+","en":"Ok+"},"good":{"es":"Bueno","en":"Good"},"good+":{"es":"Bueno+","en":"Good+"},"excellent":{"es":"Excelente","en":"Excellent"},"excellent+":{"es":"Excelente+","en":"Excellent+"},"design":{"es":"Dise\xf1o","en":"Design"},"performance":{"es":"Rendimiento","en":"Performance"},"usability":{"es":"Usabilidad","en":"Usability"},"lbAverage":{"es":"Promedio","en":"Average"},"lbOnLoadError":{"es":"Error al cargar su calificaci\xf3n previa","en":"Error loading previous rating"},"lbOnSaveError":{"es":"Error al guardar su calificaci\xf3n","en":"Error saving your rating"},"lbOnsaveOk":{"es":"Calificaci\xf3n guardada","en":"Rating saved"},"save":{"es":"Guardar","en":"Save"}}')},388:function(e){e.exports=JSON.parse('{"winTitle":{"es":"Reportar error","en":"Report bug"},"text":{"es":"Su reporte nos ayuda a identificar errores en la aplicaci\xf3n. Sea lo m\xe1s espec\xedfico posible cuando los redacte.","en":"Your report help us to identify errors in the application. Be as most specific as posible."},"send":{"es":"Enviar","en":"Send"},"report":{"es":"Escriba el reporte aqu\xed ...","en":"Report here ..."},"sendError":{"es":"Ocurri\xf3 un error!","en":"Something went wrong!"},"sendOk":{"es":"El reporte fue enviado!","en":"The report was sended!"}}')},397:function(e){e.exports=JSON.parse('{"share":{"es":"Compartir","en":"Share"},"shareDesc":{"es":"Envia un correo elect\xf3nico a tus amigos para compartir la aplicaci\xf3n","en":"Send a email to your friends to share."},"report":{"es":"Reportar un error","en":"Report a bug"},"reportDesc":{"es":"Reporta un error y lo corregiremos lo mas pronto posible.","en":"Report a bug and we will correct it as soon as possible."},"feedback":{"es":"Retroalimenzaci\xf3n","en":"Feedback"},"feedbackDesc":{"es":"H\xe1ganos saber que piensa de la aplicaci\xf3n y que podemos hacer para mejorar.","en":"Let us know what you think of the application and what we can do to improve."},"edit":{"es":"Editar perfil","en":"Edit profile"},"editDesc":{"es":"Edita los datos de tu perfil.","en":"Edit your profile data."},"logout":{"es":"Salir","en":"Logout"},"editpass":{"es":"Cambiar contrase\xf1a","en":"Edit password"},"editpassDesc":{"es":"Permite cambiar su contrase\xf1a.","en":"Allow edit your password."},"darkMode":{"es":"Modo noche","en":"Dark mode"}}')},432:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(20),c=t(6),i=t(13),l=t(292),s=t(430),u=t(431),m=t(319),d=t(373),p=t(256),f=t(357),v=t(302),g=t(358),b=t(366),h=t(300),E=t(424),O=t(313),j=t(365),S=t(444),C=t(307),y=t(429),k=t(293),x=t(301),w=t(390),N=t.n(w),I=t(396),P=t.n(I),R=t(342),T=t.n(R),A=t(395),F=t.n(A),W=t(391),D=t.n(W),M=t(394),q=t.n(M),z=t(392),L=t.n(z),V=t(393),_=t.n(V),B=t(389),G=t.n(B),U=t(81),J=t(79),H=t(10),$=t(116),Y=t(321),Z=t(44),X=t(305),K=t(83),Q=t(314),ee=t(304),ae=t(62),te=t.n(ae),ne=Object(l.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),re=function(e){var a=e.text,t=e.idioma,n=e.oldPassState,o=e.passState,c=e.pass2State,i=e.onOldPassChange,l=e.onPassChange,s=e.onPass2Change,u=e.submitPass,d=ne();return r.a.createElement(X.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:d.paper},r.a.createElement(m.a,{className:d.avatar},r.a.createElement(te.a,{fontSize:"large"})),r.a.createElement(K.a,{component:"h1",variant:"h5"},a.title[t]),r.a.createElement("form",{className:d.form,noValidate:!0},r.a.createElement(Q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:a.oldpassword[t],type:"password",id:"oldpassword",autoComplete:"current-password",value:n.value,onChange:i,helperText:n.valid?"":a.invalidOldPass[t],error:!n.valid}),r.a.createElement(Q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:a.password[t],type:"password",id:"password",autoComplete:"current-password",value:o.value,onChange:l,helperText:o.valid?"":a.invalidPass[t],error:!o.valid}),r.a.createElement(Q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:a.repeatPassword[t],type:"password",id:"password",autoComplete:"current-password",value:c.value,onChange:s,helperText:c.valid?"":a.passNotEqual[t],error:!c.valid}),r.a.createElement(ee.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:d.submit,onClick:u},a.changePass[t]))))},oe=t(382),ce=function(){var e=Object(c.useRecoilValue)(i.h),a=Object($.a)(),t=Object(Y.a)().postRequest,l=Object(Z.a)().openErrorNotification,s=Object(n.useState)({value:"",valid:!0}),u=Object(o.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)({value:"",valid:!0}),f=Object(o.a)(p,2),v=f[0],g=f[1],b=Object(n.useState)({value:"",valid:!0}),h=Object(o.a)(b,2),E=h[0],O=h[1];return r.a.createElement(re,{text:oe,idioma:e,oldPassState:m,passState:v,pass2State:E,onOldPassChange:function(e){var a=e.target.value;d(Object(H.a)(Object(H.a)({},v),{},{value:a,valid:!0}))},onPassChange:function(e){var a=e.target.value;g(Object(H.a)(Object(H.a)({},v),{},{value:a,valid:!0})),O(Object(H.a)(Object(H.a)({},E),{},{valid:!0}))},onPass2Change:function(e){var a=e.target.value;O(Object(H.a)(Object(H.a)({},E),{},{value:a,valid:!0}))},submitPass:function(n){n.preventDefault(),0===m.value.length?d(Object(H.a)(Object(H.a)({},m),{},{valid:!1})):v.value.length<8?g(Object(H.a)(Object(H.a)({},v),{},{valid:!1})):E.value!==v.value?O(Object(H.a)(Object(H.a)({},E),{},{valid:!1})):t({url:"/users/changePassword",bodyParams:{oldPassword:m.value,password:v.value},messageOnSuccess:oe.passChangeOk[e],doFnAfterSuccess:function(e){200===e.status&&a()},doFnAfterError:function(a){a.response?403===a.response.status?l(oe.passChange403Error[e]):l(oe.passChangeError[e]):l(oe.connError[e])}})}})},ie=function(e){return r.a.createElement(ce,e)},le=(t(33),t(340)),se=t.n(le),ue=Object(l.a)((function(e){return{avatarEdit:{margin:e.spacing(2),marginLeft:e.spacing(3),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:""},avatar:{marginLeft:e.spacing(7),width:e.spacing(10),height:e.spacing(10)},button:{width:"100%",marginBottom:e.spacing(2)}}})),me=function(e){var a=e.text,t=e.idioma,n=e.preview,o=e.setPreview,c=e.avatarRef,i=e.onAvatarChange,l=ue();return r.a.createElement(X.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:l.avatarEdit},r.a.createElement(se.a,{width:120,height:100,onCrop:function(e){o(e)},onClose:function(){o(null)},closeIconColor:J.a[500],label:a.choosefile[t],ref:c}),r.a.createElement(m.a,{src:n,variant:"circle",className:l.avatar})),r.a.createElement(ee.a,{variant:"contained",color:"primary",disabled:null===n,className:l.button,onClick:i},a.btnCambiar[t]))},de=t(383),pe=function(e){var a=e.close,t=Object(c.useRecoilValue)(i.h),l=Object(Y.a)().postRequest,s=Object(c.useSetRecoilState)(i.l),u=Object(n.useState)(null),m=Object(o.a)(u,2),d=m[0],p=m[1],f=Object(n.useRef)(null);return r.a.createElement(me,{text:de,idioma:t,preview:d,setPreview:p,avatarRef:f,onAvatarChange:function(){l({url:"/users/changeAvatar",bodyParams:{avatar:d},messageOnError:de.onError[t],doFnAfterSuccess:function(e){200===e.status&&(a(),s(e.data.avatarUrl))}})}})},fe=function(e){return r.a.createElement(pe,e)},ve=t(4),ge=t(306),be=t(308),he=t(384),Ee=t.n(he),Oe=Object(l.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},link:{cursor:"pointer",textDecoration:"none",color:e.palette.text.secondary,"&:hover":{textDecoration:"underline"}},customSwitch:{alignSelf:"center"}}})),je=Object(ve.a)((function(e){return{switchBase:{color:U.a[800],"&$checked":{color:J.a[500],"& + $track":{opacity:1,backgroundColor:e.palette.common.white,borderColor:e.palette.common.white}}},track:{opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(y.a),Se=function(e){var a=e.text,t=e.idioma,n=(e.isOpen,e.setClose,e.userData,e.lastName),o=e.nameState,c=e.nicknameState,i=e.emailState,l=e.gender,s=e.onNameChange,u=e.onEmailChange,d=e.onNickNameChange,p=e.onLastNameChange,f=e.onSwitchGender,v=e.onSave,g=(e.avatarSrc,Oe());return r.a.createElement(X.a,{component:"main",maxWidth:"xs"},r.a.createElement(ge.a,null),r.a.createElement("div",{className:g.paper},r.a.createElement(m.a,{className:g.avatar},r.a.createElement(Ee.a,{fontSize:"large"})),r.a.createElement(K.a,{component:"h1",variant:"h5"},a.title[t]),r.a.createElement("form",{className:g.form,noValidate:!0},r.a.createElement(be.a,{container:!0,spacing:2},r.a.createElement(be.a,{item:!0,xs:12,sm:6},r.a.createElement(Q.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:a.firstName[t],autoFocus:!0,value:o.value,helperText:o.valid?"":a[o.msg][t],error:!o.valid,onChange:s})),r.a.createElement(be.a,{item:!0,xs:12,sm:6},r.a.createElement(Q.a,{variant:"outlined",fullWidth:!0,id:"lastName",label:a.lastName[t],name:"lastName",autoComplete:"lname",value:n.value,onChange:p})),r.a.createElement(be.a,{item:!0,xs:12},r.a.createElement(Q.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:a.email[t],name:"email",autoComplete:"email",value:i.value,helperText:i.valid?"":a.invalidEmail[t],error:!i.valid,onChange:u})),r.a.createElement(be.a,{item:!0,xs:12},r.a.createElement(Q.a,{variant:"outlined",required:!0,fullWidth:!0,name:"nickname",label:a.nickname[t],id:"nickname",value:c.value,helperText:c.valid?"":a[c.msg][t],error:!c.valid,onChange:d})),r.a.createElement(K.a,{component:"div",style:{width:"100%"}},r.a.createElement(be.a,{component:"label",container:!0,alignItems:"center",spacing:1,style:{width:"100%",margin:0,justifyContent:"center"}},r.a.createElement(be.a,{item:!0},a.male[t]),r.a.createElement(be.a,{item:!0},r.a.createElement(je,{checked:l,onChange:f,name:"checkedC",className:g.customSwitch})),r.a.createElement(be.a,{item:!0},a.female[t])))),r.a.createElement(ee.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:g.submit,onClick:v},a.save[t]))))},Ce=t(385),ye=function(e){var a=e.close,t=Object(c.useRecoilValue)(i.h),l=Object(c.useRecoilValue)(i.l),s=Object(c.useRecoilState)(i.i),u=Object(o.a)(s,2),m=u[0],d=u[1],p=Object(Y.a)().postRequest,f=Object(Z.a)().openErrorNotification,v=Object(n.useState)({value:m.email,valid:!0}),g=Object(o.a)(v,2),b=g[0],h=g[1],E=Object(n.useState)({value:m.nickname,valid:!0}),O=Object(o.a)(E,2),j=O[0],S=O[1],C=Object(n.useState)({value:m.firstName,valid:!0}),y=Object(o.a)(C,2),k=y[0],x=y[1],w=Object(n.useState)({value:m.lastName,valid:!0}),N=Object(o.a)(w,2),I=N[0],P=N[1],R=Object(n.useState)("F"===m.gender),T=Object(o.a)(R,2),A=T[0],F=T[1];return r.a.createElement(Se,{userData:m,text:Ce,idioma:t,lastName:I,nameState:k,nicknameState:j,emailState:b,gender:A,onNameChange:function(e){var a=e.target.value;x((function(e){return Object(H.a)(Object(H.a)({},e),{},{value:a,valid:!0})}))},onEmailChange:function(e){var a=e.target.value;h((function(e){return Object(H.a)(Object(H.a)({},e),{},{value:a,valid:!0})}))},onNickNameChange:function(e){var a=e.target.value;S((function(e){return Object(H.a)(Object(H.a)({},e),{},{value:a,valid:!0})}))},onLastNameChange:function(e){var a=e.target.value;P((function(e){return Object(H.a)(Object(H.a)({},e),{},{value:a,valid:!0})}))},onSwitchGender:function(e){e.target.checked;F((function(e){return!e}))},avatarSrc:l,onSave:function(e){if(e.preventDefault(),/^[a-zA-Z\']+$/.test(k.value))if(k.value.length<2)x(Object(H.a)(Object(H.a)({},k),{},{valid:!1,msg:"nameShort"}));else if(k.value.length>=20)x(Object(H.a)(Object(H.a)({},k),{},{valid:!1,msg:"nameLong"}));else if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(b.value))if(0===j.value.length)S(Object(H.a)(Object(H.a)({},j),{},{valid:!1,msg:"nicknameNull"}));else{var n={firstName:k.value,lastName:I.value,nickname:j.value,email:b.value,gender:A?"F":"M"};p({url:"/users/editprofile",bodyParams:n,messageOnSuccess:Ce.onSaveSuccess[t],doFnAfterError:function(e){e.response?409===e.response.status?f(Ce.duplicated[t]):f(Ce.error[t]):f(Ce.connError[t])},doFnAfterSuccess:function(e){d(Object(H.a)(Object(H.a)({},m),n)),a()}})}else h(Object(H.a)(Object(H.a)({},b),{},{valid:!1}));else x(Object(H.a)(Object(H.a)({},k),{},{valid:!1,msg:"nameInvalid"}))}})},ke=function(e){return r.a.createElement(ye,e)},xe=t(320),we=t(295),Ne=t(296),Ie=t(297),Pe=t(303),Re=function(e){var a=e.idioma,t=e.text,n=e.nameState,o=e.onNameChange,c=e.emailState,i=e.onEmailChange,l=e.onSend;return r.a.createElement(X.a,{maxWidth:"sm"},r.a.createElement(we.a,{id:"form-dialog-title"},t.winTitle[a]),r.a.createElement(Ne.a,null,r.a.createElement(Ie.a,null,t.text[a]),r.a.createElement(be.a,{container:!0,spacing:2},r.a.createElement(be.a,{item:!0,xs:12},r.a.createElement(Q.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:t.name[a],autoFocus:!0,value:n.value,helperText:n.valid?"":t[n.msg][a],error:!n.valid,onChange:o})),r.a.createElement(be.a,{item:!0,xs:12},r.a.createElement(Q.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:t.email[a],name:"email",type:"email",autoComplete:"email",value:c.value,helperText:c.valid?"":t.invalidEmail[a],error:!c.valid,onChange:i})))),r.a.createElement(Pe.a,null,r.a.createElement(ee.a,{onClick:l},t.send[a])))},Te=t(386),Ae=function(e){var a=e.close,t=Object(c.useRecoilValue)(i.h),l=Object(Y.a)().postRequest,s=Object(Z.a)().openErrorNotification,u=Object(c.useSetRecoilState)(xe.d),m=Object(n.useState)({value:"",valid:!0}),d=Object(o.a)(m,2),p=d[0],f=d[1],v=Object(n.useState)({value:"",valid:!0}),g=Object(o.a)(v,2),b=g[0],h=g[1];return r.a.createElement(Re,{text:Te,idioma:t,nameState:b,onNameChange:function(e){var a=e.target.value;h((function(e){return Object(H.a)(Object(H.a)({},e),{},{value:a,valid:!0})}))},emailState:p,onEmailChange:function(e){var a=e.target.value;f((function(e){return Object(H.a)(Object(H.a)({},e),{},{value:a,valid:!0})}))},onSend:function(e){e.preventDefault(),/^[a-zA-Z\']+$/.test(b.value)?b.value.length<2?h(Object(H.a)(Object(H.a)({},b),{},{valid:!1,msg:"nameShort"})):b.value.length>=20?h(Object(H.a)(Object(H.a)({},b),{},{valid:!1,msg:"nameLong"})):/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(p.value)?l({url:"/users/shareapp",bodyParams:{firstName:b.value,email:p.value,language:t,hostname:window.location.host},messageOnSuccess:Te.sendSuccess[t],doFnAfterError:function(e){e.response?409===e.response.status&&s(Te.emailExist[t]):s(Te.connError[t])},doFnAfterSuccess:function(e){if(201===e.status){var t=e.data.friend;u({action:"add",payload:{friend:t}})}a()}}):f(Object(H.a)(Object(H.a)({},p),{},{valid:!1})):h(Object(H.a)(Object(H.a)({},b),{},{valid:!1,msg:"nameInvalid"}))}})},Fe=function(e){return r.a.createElement(Ae,e)},We=t(110),De=t(446),Me=t(434),qe={0:"unrated",.5:"useless",1:"useless+",1.5:"poor",2:"poor+",2.5:"ok",3:"ok+",3.5:"good",4:"good+",4.5:"excellent",5:"excellent+"},ze=Object(l.a)((function(e){return{ratingRow:{width:"250px",display:"flex",alignItems:"center",marginBottom:e.spacing(1)}}})),Le=r.a.memo((function(e){var a=e.text,t=e.idioma,n=e.globalState,o=e.onChange,c=e.comentState,i=e.onCommentChange,l=e.onSave,s=ze();return r.a.createElement(X.a,{maxWidth:"sm"},r.a.createElement(we.a,{id:"form-dialog-title"},a.title[t]),r.a.createElement(Ne.a,null,r.a.createElement(be.a,{container:!0,spacing:2},r.a.createElement(be.a,{item:!0,xs:6},r.a.createElement(Ve,{text:a,idioma:t,classes:s,globalState:n,onChange:o,type:"design"}),r.a.createElement(Ve,{text:a,idioma:t,classes:s,globalState:n,onChange:o,type:"performance"}),r.a.createElement(Ve,{text:a,idioma:t,classes:s,globalState:n,onChange:o,type:"usability"})),r.a.createElement(be.a,{item:!0,xs:6,style:{display:"flex"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("div",null,r.a.createElement(K.a,{className:s.ratingType},a.lbAverage[t]),r.a.createElement("div",{className:s.ratingRow},r.a.createElement(De.a,{readOnly:!0,name:"hover-feedback",size:"large",value:n.overall,precision:.5}),null!==n.overall&&r.a.createElement(Me.a,{ml:2},a[qe[n.overall]][t]))))),r.a.createElement(be.a,{item:!0,xs:12},r.a.createElement(Q.a,{id:"outlined-textarea",label:a.comment[t],multiline:!0,variant:"outlined",fullWidth:!0,rowsMax:4,value:c,onChange:i})))),r.a.createElement(Pe.a,null,r.a.createElement(ee.a,{onClick:l},a.save[t])))})),Ve=r.a.memo((function(e){var a=e.text,t=e.idioma,n=e.classes,c=e.globalState,i=e.onChange,l=e.type,s=r.a.useState(-1),u=Object(o.a)(s,2),m=u[0],d=u[1];return r.a.createElement(be.a,{item:!0,xs:12},r.a.createElement(K.a,{className:n.ratingType},a[l][t]),r.a.createElement("div",{className:n.ratingRow},r.a.createElement(De.a,{value:c[l],precision:.5,onChange:function(e,a){return i(a,l)},onChangeActive:function(e,a){return d(a)}}),null!==c[l]&&r.a.createElement(Me.a,{ml:2},a[qe[-1!==m?m:c[l]]][t])))})),_e=Le,Be=t(387),Ge=function(e){var a=e.close,t=Object(c.useRecoilValue)(i.h),l=Object(Y.a)().postRequest,s=Object(n.useState)(""),u=Object(o.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)({design:0,performance:0,usability:0,overall:0}),f=Object(o.a)(p,2),v=f[0],g=f[1],b=function(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=n>0?1:0,o=n;if(e>0&&(o+=e,r++),a>0&&(o+=a,r++),t>0&&(o+=t,r++),r>0){var c=(o/=r)%.5;o-=c}return o},h=Object(n.useCallback)((function(e,a){g((function(t){var n,r=0,o=0,c=0;"design"!==a&&t.design>0&&(r=t.design),"performance"!==a&&t.performance>0&&(o=t.performance),"usability"!==a&&t.usability>0&&(c=t.usability);var i=b(r,o,c,e);return Object(H.a)(Object(H.a)({},t),{},(n={},Object(We.a)(n,a,e),Object(We.a)(n,"overall",i),n))}))}),[]);Object(n.useEffect)((function(){l({url:"/users/getUserFeedback",messageOnError:Be.lbOnLoadError[t],doFnAfterSuccess:function(e){if(200===e.status){var a=e.data.rating,t={design:a.design,performance:a.performance,usability:a.usability,overall:b(a.design,a.performance,a.usability)};g(t),d(a.comment)}}})}),[]);return r.a.createElement(_e,{text:Be,idioma:t,globalState:v,onChange:h,comentState:m,onCommentChange:function(e){var a=e.target.value;d(a)},onSave:function(){l({url:"/users/saveFeedback",bodyParams:{designRating:v.design,performaceRating:v.performance,usabilityRating:v.usability,comment:m},messageOnError:Be.lbOnSaveError[t],messageOnSuccess:Be.lbOnsaveOk[t],doFnAfterSuccess:function(e){a()}})}})},Ue=r.a.memo((function(e){return r.a.createElement(Ge,e)})),Je=function(e){var a=e.idioma,t=e.text,n=e.comentState,o=e.onCommentChange,c=e.onSend;return r.a.createElement(X.a,{maxWidth:"sm"},r.a.createElement(we.a,{id:"form-dialog-title"},t.winTitle[a]),r.a.createElement(Ne.a,null,r.a.createElement(Ie.a,null,t.text[a]),r.a.createElement(be.a,{container:!0,spacing:2},r.a.createElement(be.a,{item:!0,xs:12},r.a.createElement(Q.a,{id:"outlined-textarea",label:t.report[a],multiline:!0,variant:"outlined",fullWidth:!0,rowsMax:4,rows:4,value:n,onChange:o})))),r.a.createElement(Pe.a,null,r.a.createElement(ee.a,{onClick:c},t.send[a])))},He=t(388),$e=function(e){var a=e.close,t=Object(c.useRecoilValue)(i.h),l=Object(Y.a)().postRequest,s=Object(n.useState)(""),u=Object(o.a)(s,2),m=u[0],d=u[1];return r.a.createElement(Je,{text:He,idioma:t,comentState:m,onCommentChange:function(e){var a=e.target.value;d(a)},onSend:function(){l({url:"/bugs/saveBugReport",bodyParams:{description:m},messageOnError:He.sendError[t],messageOnSuccess:He.sendOk[t],doFnAfterSuccess:function(e){a()}})}})},Ye=function(e){return r.a.createElement($e,e)},Ze=Object(l.a)((function(e){return{root:{maxWidth:345},avatar:{width:e.spacing(7),height:e.spacing(7)},cardHeaderAction:{alignSelf:"flex-end"},cardHeaderContent:{overflowX:"hidden",marginRight:e.spacing(2)},langSelect:{fontSize:"0.9em",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,lineHeight:1.5,letterSpacing:"0.00938em"},avatarMan:{color:e.palette.getContrastText(U.a[400]),backgroundColor:U.a[400]},avatarWoman:{color:e.palette.getContrastText(J.a[300]),backgroundColor:J.a[300]}}})),Xe=Object(l.a)((function(e){return{iconButton:{backgroundColor:e.palette.background.default,boxShadow:"0 0 5px ".concat(e.palette.action.disabled),"&:hover":{backgroundColor:e.palette.background.default}}}})),Ke=function(e){var a=e.onClick,t=Xe();return r.a.createElement(p.a,{size:"small",className:t.iconButton,onClick:a},r.a.createElement(P.a,{fontSize:"small"}))},Qe=function(e){var a=e.text,t=e.idioma,n=e.avatarUrl,o=e.userData,c=e.logout,i=e.changeIdioma,l=e.darkMode,w=e.changeTheme,I=e.changePass,P=e.setChangePass,R=e.changeAvatar,A=e.setChangeAvatar,W=e.editProfile,M=e.setChangeProfile,z=e.shareApp,V=e.setShareApp,B=e.feedback,U=e.setFeedback,J=e.bugreport,H=e.setBugreport,$=e.open,Y=e.anchorEl,Z=e.handleClose,X=Ze();return r.a.createElement(x.a,{open:$,anchorEl:Y,onClose:Z,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},r.a.createElement(s.a,{className:X.root},r.a.createElement(u.a,{classes:{action:X.cardHeaderAction,content:X.cardHeaderContent},avatar:r.a.createElement(d.a,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:r.a.createElement(Ke,{onClick:A})},r.a.createElement(m.a,{"aria-label":"recipe",className:"".concat(X.avatar," ").concat("M"===o.gender?X.avatarMan:X.avatarWoman),src:n})),action:r.a.createElement(S.a,{title:a.logout[t]},r.a.createElement(p.a,{onClick:c},r.a.createElement(G.a,null))),title:o.nickname,subheader:o.email}),r.a.createElement(f.a,null),r.a.createElement(v.a,null,r.a.createElement(g.a,{button:!0,onClick:M},r.a.createElement(b.a,null,r.a.createElement(N.a,null)),r.a.createElement(E.a,{primary:a.edit[t],primaryTypographyProps:{style:{fontSize:"0.9em"}}})),r.a.createElement(g.a,{button:!0,onClick:P},r.a.createElement(b.a,null,r.a.createElement(D.a,null)),r.a.createElement(E.a,{primary:a.editpass[t],primaryTypographyProps:{style:{fontSize:"0.9em"}}})),r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(L.a,null)),r.a.createElement(h.a,null,r.a.createElement(O.a,{value:t,onChange:i,displayEmpty:!0,className:X.langSelect,inputProps:{"aria-label":"Without label"}},r.a.createElement(j.a,{value:"en"},"English"),r.a.createElement(j.a,{value:"es"},"Espa\xf1ol")))),r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(_.a,null)),r.a.createElement(C.a,{control:r.a.createElement(y.a,{checked:l,onChange:w,color:"primary"}),label:a.darkMode[t]})),r.a.createElement(f.a,null),r.a.createElement(g.a,{button:!0,onClick:V},r.a.createElement(b.a,null,r.a.createElement(T.a,null)),r.a.createElement(E.a,{primary:a.share[t],primaryTypographyProps:{style:{fontSize:"0.9em"}},secondary:a.shareDesc[t],secondaryTypographyProps:{style:{fontSize:"0.8em"}}})),r.a.createElement(g.a,{button:!0,onClick:U},r.a.createElement(b.a,null,r.a.createElement(q.a,null)),r.a.createElement(E.a,{primary:a.feedback[t],primaryTypographyProps:{style:{fontSize:"0.9em"}},secondary:a.feedbackDesc[t],secondaryTypographyProps:{style:{fontSize:"0.8em"}}})),r.a.createElement(g.a,{button:!0,onClick:H},r.a.createElement(b.a,null,r.a.createElement(F.a,null)),r.a.createElement(E.a,{primary:a.report[t],primaryTypographyProps:{style:{fontSize:"0.9em"}},secondary:a.reportDesc[t],secondaryTypographyProps:{style:{fontSize:"0.8em"}}})))),r.a.createElement(k.a,{open:I,onClose:P},r.a.createElement(ie,null)),r.a.createElement(k.a,{open:R,onClose:A},r.a.createElement(fe,{close:A})),r.a.createElement(k.a,{open:W,onClose:M},r.a.createElement(ke,{close:M})),r.a.createElement(k.a,{open:z,onClose:V},r.a.createElement(Fe,{close:V})),r.a.createElement(k.a,{open:B,onClose:U},r.a.createElement(Ue,{close:U})),r.a.createElement(k.a,{open:J,onClose:H},r.a.createElement(Ye,{close:H})))},ea=t(397),aa=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),l=t[0],s=t[1],u=Object(n.useState)(!1),m=Object(o.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)(!1),v=Object(o.a)(f,2),g=v[0],b=v[1],h=Object(n.useState)(!1),E=Object(o.a)(h,2),O=E[0],j=E[1],S=Object(n.useState)(!1),C=Object(o.a)(S,2),y=C[0],k=C[1],x=Object(n.useState)(!1),w=Object(o.a)(x,2),N=w[0],I=w[1],P=Object(c.useRecoilState)(i.h),R=Object(o.a)(P,2),T=R[0],A=R[1],F=Object(c.useRecoilState)(i.e),W=Object(o.a)(F,2),D=W[0],M=W[1],q=Object(c.useRecoilValue)(i.i),z=Object(c.useRecoilValue)(i.l),L=Object($.a)(),V=Object(Y.a)().postRequest;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe,Object.assign({text:ea,idioma:T,avatarUrl:z,userData:q,logout:L,changeIdioma:function(e){var a=e.target.value;A(a),V({url:"/users/changeUserLanguage",bodyParams:{lang:a}})},darkMode:D,changeTheme:function(){localStorage.setItem("darkMode",!D),M((function(e){return!e}))},changePass:l,setChangePass:function(){s((function(e){return!e}))},changeAvatar:d,setChangeAvatar:function(){p((function(e){return!e}))},editProfile:g,setChangeProfile:function(){b((function(e){return!e}))},shareApp:O,setShareApp:function(){j((function(e){return!e}))},feedback:y,setFeedback:function(){k((function(e){return!e}))},bugreport:N,setBugreport:function(){I((function(e){return!e}))}},e)))};a.default=function(e){return r.a.createElement(aa,e)}}}]);
//# sourceMappingURL=10.91f8bd14.chunk.js.map
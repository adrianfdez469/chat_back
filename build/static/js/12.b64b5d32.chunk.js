(this.webpackJsonpchat_front=this.webpackJsonpchat_front||[]).push([[12],{320:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return p}));var a=n(58),r=n.n(a),c=n(10),o=n(108),i=n(324),s=n(6),u=n(13),l=Object(s.selector)({key:"friendSelector",get:function(e){var t=e.get;return t(u.f).length>0?Object(i.a)(t(u.f)).sort((function(e,t){if(1===e.friendShipStatus&&1===t.friendShipStatus){if(e.socketId&&!t.socketId)return-1;if(!e.socketId&&t.socketId)return 1}return e.friendShipStatus<t.friendShipStatus?-1:e.friendShipStatus>t.friendShipStatus?1:e.email<t.email?-1:e.email>t.email?1:void 0})):[]},set:function(){var e=Object(o.a)(r.a.mark((function e(t,n){var a,o,s,l,d,f,m,p,b,g,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.set,o=t.get,s=n.action,l=n.payload,e.t0=s,e.next="initialize"===e.t0?5:"add"===e.t0?7:"update"===e.t0?9:"reset_cant_no_leidos"===e.t0?11:"set_message_info"===e.t0?13:"delete"===e.t0?15:"connect"===e.t0?19:"disconnect"===e.t0?21:26;break;case 5:return a(u.f,(function(e){return 0===e.length?l.friends:e})),e.abrupt("break",27);case 7:return a(u.f,(function(e){var t=Object(i.a)(e);return t.push(l.friend),t})),e.abrupt("break",27);case 9:return a(u.f,(function(e){var t=e.findIndex((function(e){return e.contactId===l.friend.contactId}));return e.slice(0,t).concat([l.friend]).concat(e.slice(t+1))})),e.abrupt("break",27);case 11:return a(u.f,(function(e){var t=e.findIndex((function(e){return e.contactId===l.contactId}));return e.slice(0,t).concat([Object(c.a)(Object(c.a)({},e[t]),{},{unread:0})]).concat(e.slice(t+1))})),e.abrupt("break",27);case 13:return a(u.f,(function(e){var t=l.dataObj;return e.map((function(e){if(t[e.contactId]){var n=0;return e.unread&&(n=e.unread),t[e.contactId].cantidad&&(n+=t[e.contactId].cantidad),Object(c.a)(Object(c.a)({},e),{},{unread:n,lastMsg:t[e.contactId].lastMessage,datetime:t[e.contactId].datetime})}return e}))})),e.abrupt("break",27);case 15:return o(u.a)===l.friendId&&a(u.a,(function(e){return null})),a(u.f,(function(e){return e.filter((function(e){return e.contactId!==l.friendId}))})),e.abrupt("break",27);case 19:return Array.isArray(l.data)?a(u.f,(function(e){return e.map((function(e){var t=l.data.findIndex((function(t){return t.userId===e.contactId}));return t>=0?Object(c.a)(Object(c.a)({},e),{},{socketId:l.data[t].socketId}):Object(c.a)({},e)}))})):(d=l.data,f=d.userId,m=d.socketId,p=null,b=0,a(u.f,(function(e){var t=e.findIndex((function(e){return e.contactId===f}));if(t>=0){p=e[t].nickname,b=e[t].friendShipStatus;var n=Object(c.a)(Object(c.a)({},e[t]),{},{socketId:m});return e.slice(0,t).concat([n]).concat(e.slice(t+1))}return e})),p&&1===b&&l.notification("".concat(p," ").concat(l.msg[o(u.h)]),{variant:"info"})),e.abrupt("break",27);case 21:return g=null,v=0,a(u.f,(function(e){var t=e.findIndex((function(e){return e.socketId===l.socketId}));return t>=0?(g=e[t].nickname,v=e[t].friendShipStatus,Object(i.a)(e).slice(0,t).concat([Object(c.a)(Object(c.a)({},e[t]),{},{socketId:null})]).concat(e.slice(t+1))):e})),g&&1===v&&l.notification("".concat(g," ").concat(l.msg[o(u.h)]),{variant:"warning"}),e.abrupt("break",27);case 26:return e.abrupt("break",27);case 27:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),d=Object(s.selector)({key:"conversationSelector",set:function(e,t){var n=e.set,a=t.contactId,r=t.conversation,c=function(e,t,n,a){return e===n?0:t===n?a?3:2:void 0};n(Object(u.g)(a),(function(e){return r.map((function(e){return{_id:e._id,content:e.content,datetime:e.datetime,state:c(e.userOrigin,e.userDestiny,a,e.readed)}}))}))}}),f=Object(s.selector)({key:"addMessageToConversation",set:function(e,t){var n=e.set,a=t.contactId,r={_id:t.messageId,content:t.content,datetime:t.datetime,state:t.state};n(Object(u.g)(a),(function(e){return e.concat([r])}))}}),m=Object(s.selector)({key:"editMsgToStateSavedSelector",set:function(e,t){var n=e.set,a=t.contactId,r=t.messageId,o=t.datetime,i=t.consecutive;n(Object(u.g)(a),(function(e){var t=e.findIndex((function(e){return e._id===i&&1===e.state}));if(t>=0){var n=Object(c.a)(Object(c.a)({},e[t]),{},{state:2,_id:r,datetime:o});return e.slice(0,t).concat([n]).concat(e.slice(t+1))}return e}))}}),p=Object(s.selector)({key:"editAllMsgToSavedSelector",set:function(e,t){var n=e.set,a=t.contactId;n(Object(u.g)(a),(function(e){return e.map((function(e){return 0!==e.state?Object(c.a)(Object(c.a)({},e),{},{state:3}):e}))}))}})},321:function(e,t,n){"use strict";var a=n(34),r=n.n(a),c=n(6),o=n(104),i=n(44),s=n(33),u=n(13);t.a=function(){var e=Object(i.a)(),t=e.openErrorNotification,n=e.openSuccessNotification,a=Object(c.useRecoilValue)(u.h).idioma;return{postRequest:function(e){var c=e.url,i=e.bodyParams,u=void 0===i?{}:i,l=e.doFnAfterSuccess,d=void 0===l?null:l,f=e.doFnAfterError,m=void 0===f?null:f,p=e.messageOnSuccess,b=void 0===p?null:p,g=e.messageOnError,v=void 0===g?null:g;Object(o.a)((function(e){r.a.post("".concat(s.a.server).concat(c),u,{headers:{Authorization:e}}).then((function(t){b&&n(b),d&&d(t,e)})).catch((function(e){if(e.response)v&&t(v);else{t({es:"Error de conexi\xf3n",en:"Network error"}[a])}m&&m(e)}))}))}}}},332:function(e){e.exports=JSON.parse('{"title":{"es":"Adicionar contacto","en":"Add contact"},"search":{"es":"Buscar...","en":"Search..."},"close":{"es":"Cerrar","en":"Close"},"lbErrorLoadingUsers":{"es":"Error al cargar los usuarios","en":"Error loading users"},"lbErrorSendigFriendRequest":{"es":"Error al enviar solicitud de amistad","en":"Error sending friend request"}}')},352:function(e){e.exports=JSON.parse('{"addContact":{"es":"Adicionar","en":"Add"},"addGroup":{"es":"Grupo","en":"Group"},"sendMsg":{"es":"Enviar","en":"Send"},"shareMsg":{"es":"Compartir","en":"Share"},"sendAll":{"es":"Difusi\xf3n","en":"Diffusion"}}')},437:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n(6),i=n(292),s=n(442),u=n(443),l=n(423),d=n(355),f=n.n(d),m=n(356),p=n.n(m),b=n(352),g=Object(i.a)((function(e){return{speedDial:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},icon:{color:e.palette.text.secondary}}})),v=function(e){var t=e.idioma,n=e.handleOpen,a=e.handleClose,c=e.open,o=e.openAddContactView,i=g();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{ariaLabel:"SpeedDial tooltip example",className:i.speedDial,icon:r.a.createElement(u.a,null),onClose:a,onOpen:n,open:c},r.a.createElement(l.a,{key:"add",icon:r.a.createElement(f.a,{className:i.icon}),tooltipTitle:b.addContact[t],tooltipOpen:!0,onClick:o}),r.a.createElement(l.a,{key:"addgroup",icon:r.a.createElement(p.a,{className:i.icon}),tooltipTitle:b.sendAll[t],tooltipOpen:!0,onClick:function(){console.log("Enviar mensaje de difusion"),alert("Not implemented!")}})))},O=n(15),h=n(304),E=n(302),j=n(358),k=n(424),I=n(295),S=n(296),C=n(303),y=n(293),R=n(359),x=n(319),A=n(160),w=n(362),F=n.n(w),N=n(357),q=n(81),_=n(79),M=n(78),T=n(148),U=n.n(T),D=n(425),P=n(256),V=n(361),L=n.n(V),W=n(332),z=n(360),J=Object(i.a)((function(e){return{dialogContent:{padding:0},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},avatarMan:{color:e.palette.getContrastText(q.a[400]),backgroundColor:q.a[400]},avatarWoman:{color:e.palette.getContrastText(_.a[300]),backgroundColor:_.a[300]}}})),G=function(e){var t=e.user,n=e.sendFriendRequest,a=J(),c="M"===t.gender?"avatarMan":"avatarWoman";return r.a.createElement(j.a,{key:t.email},r.a.createElement(R.a,null,r.a.createElement(x.a,{className:t.gender&&a[c],src:t.avatarUrl})),r.a.createElement(k.a,{primary:t.nickname,secondary:t.email}),r.a.createElement(z.a,null,r.a.createElement(P.a,{color:t.blockinguser?M.a[100]:q.a[300],onClick:function(){n(t.userId)},disabled:t.blockinguser},r.a.createElement(L.a,{color:t.blockinguser?"disabled":"primary"}))))},B=function(e){var t=e.idioma,n=e.buscarUsuarios,a=e.inputSearchRef,o=J(),i=r.a.useState(""),s=Object(c.a)(i,2),u=s[0],l=s[1];return r.a.createElement("div",{className:o.search},r.a.createElement("div",{className:o.searchIcon},r.a.createElement(F.a,null)),r.a.createElement(A.a,{onKeyPress:function(e){13===e.charCode&&n()},placeholder:W.search[t],classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"},value:u,onChange:function(e){var t=e.target.value;l(t)},inputRef:a,endAdornment:r.a.createElement(D.a,{position:"end"},""!==u?r.a.createElement(P.a,{size:"small","aria-label":"toggle password visibility",onClick:function(){l("")}},r.a.createElement(U.a,null)):null,r.a.createElement(P.a,{size:"small","aria-label":"toggle password visibility",onClick:n},r.a.createElement(F.a,null)))}))},H=function(e){var t=e.idioma,n=e.closeAddContactWin,a=e.open,c=e.buscarUsuarios,o=e.users,i=e.inputSearchRef,s=e.sendFriendRequest,u=J();return r.a.createElement(y.a,{maxWidth:"xs",onEntering:function(){},"aria-labelledby":"confirmation-dialog-title",open:a,onClose:n},r.a.createElement(I.a,{id:"confirmation-dialog-title",className:u.dialogTitle},W.title[t]," "),r.a.createElement(N.a,null),r.a.createElement(B,{idioma:t,buscarUsuarios:c,inputSearchRef:i}),r.a.createElement(S.a,{dividers:!0,className:u.dialogContent},r.a.createElement(E.a,{style:{minHeight:"200px"}},o.map((function(e){return r.a.createElement(G,{user:e,sendFriendRequest:s})})))),r.a.createElement(C.a,null,r.a.createElement(h.a,{autoFocus:!0,onClick:n,color:"primary"},W.close[t])))},K=n(13),Q=n(320),X=n(321),Y=n(103),Z=function(e){var t=Object(o.useRecoilValue)(K.h),n=Object(o.useRecoilState)(K.b),i=Object(c.a)(n,2),s=i[0],u=i[1],l=Object(a.useState)([]),d=Object(c.a)(l,2),f=d[0],m=d[1],p=Object(a.useRef)({value:""}),b=Object(o.useRecoilValue)(K.i),g=Object(X.a)().postRequest,v=Object(o.useSetRecoilState)(Q.d),O=function(){g({url:"/users/searchContact",bodyParams:{stringPattern:p.current.value,start:0,limit:20},doFnAfterSuccess:function(e){200===e.status&&m(e.data.users)},messageOnError:W.lbErrorLoadingUsers[t]})};Object(a.useEffect)((function(){O()}),[]);return r.a.createElement(H,{idioma:t,closeAddContactWin:function(){u(!1)},open:s,users:f,buscarUsuarios:O,inputSearchRef:p,sendFriendRequest:function(e){g({url:"/users/sendFriendRequest",bodyParams:{userId:e},doFnAfterSuccess:function(t,n){200===t.status&&(m((function(t){return t.filter((function(t){return t.userId!==e}))})),v({action:"add",payload:{friend:t.data.friend}}),Y.a.getSocket().emit("request friendship",{userIdRequester:b.userId,userIdRequested:e,token:n}))},messageOnError:W.lbErrorSendigFriendRequest[t]})}})},$=function(e){return r.a.createElement(Z,null)},ee=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),i=n[0],s=n[1],u=Object(o.useRecoilState)(K.b),l=Object(c.a)(u,2),d=l[0],f=l[1],m=Object(o.useRecoilValue)(K.h);return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{open:i,handleOpen:function(){s(!0)},handleClose:function(){s(!1)},idioma:m,openAddContactView:function(){f(!0)}}),d?r.a.createElement($,null):null)};t.default=function(e){return r.a.createElement(ee,null)}}}]);
//# sourceMappingURL=12.b64b5d32.chunk.js.map
(this.webpackJsonpchat_front=this.webpackJsonpchat_front||[]).push([[12],{332:function(e){e.exports=JSON.parse('{"title":{"es":"Adicionar contacto","en":"Add contact"},"search":{"es":"Buscar...","en":"Search..."},"close":{"es":"Cerrar","en":"Close"},"lbErrorLoadingUsers":{"es":"Error al cargar los usuarios","en":"Error loading users"},"lbErrorSendigFriendRequest":{"es":"Error al enviar solicitud de amistad","en":"Error sending friend request"}}')},371:function(e){e.exports=JSON.parse('{"addContact":{"es":"Adicionar","en":"Add"},"addGroup":{"es":"Grupo","en":"Group"},"sendMsg":{"es":"Enviar","en":"Send"},"shareMsg":{"es":"Compartir","en":"Share"},"sendAll":{"es":"Difusi\xf3n","en":"Diffusion"}}')},434:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(15),o=t(4),c=t(296),s=t(440),l=t(441),u=t(424),d=t(372),m=t.n(d),p=t(373),f=t.n(p),b=t(371),h=Object(c.a)((function(e){return{speedDial:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},icon:{color:e.palette.text.secondary}}})),E=function(e){var a=e.idioma,t=e.handleOpen,n=e.handleClose,i=e.open,o=e.openAddContactView,c=h();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{ariaLabel:"SpeedDial tooltip example",className:c.speedDial,icon:r.a.createElement(l.a,null),onClose:n,onOpen:t,open:i},r.a.createElement(u.a,{key:"add",icon:r.a.createElement(m.a,{className:c.icon}),tooltipTitle:b.addContact[a],tooltipOpen:!0,onClick:o}),r.a.createElement(u.a,{key:"addgroup",icon:r.a.createElement(f.a,{className:c.icon}),tooltipTitle:b.sendAll[a],tooltipOpen:!0,onClick:function(){console.log("Enviar mensaje de difusion"),alert("Not implemented!")}})))},g=t(16),v=t.n(g),O=t(24),C=t(14),R=t(19),j=t(308),k=t(306),S=t(358),y=t(422),A=t(299),N=t(300),q=t(307),w=t(297),I=t(374),F=t(322),x=t(166),U=t(377),D=t.n(U),L=t(357),V=t(92),z=t(89),J=t(154),G=t.n(J),P=t(425),T=t(260),W=t(376),M=t.n(W),_=t(332),B=t(375),H=Object(c.a)((function(e){return{avatar:{backgroundColor:V.a[100],color:V.a[600]},dialogContent:{padding:0},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(R.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(R.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"}}})),K=function(e){var a=e.user,t=e.sendFriendRequest,n=H();return r.a.createElement(S.a,{key:a.email},r.a.createElement(I.a,null,r.a.createElement(F.a,{className:n.avatar,src:C.a.server+a.avatarUrl})),r.a.createElement(y.a,{primary:a.nickname,secondary:a.email}),r.a.createElement(B.a,null,r.a.createElement(T.a,{color:a.blockinguser?z.a[100]:V.a[300],onClick:function(){t(a.userId)},disabled:a.blockinguser},r.a.createElement(M.a,{color:a.blockinguser?"disabled":"primary"}))))},Q=function(e){var a=e.idioma,t=e.buscarUsuarios,n=e.inputSearchRef,o=H(),c=r.a.useState(""),s=Object(i.a)(c,2),l=s[0],u=s[1];return r.a.createElement("div",{className:o.search},r.a.createElement("div",{className:o.searchIcon},r.a.createElement(D.a,null)),r.a.createElement(x.a,{onKeyPress:function(e){13===e.charCode&&t()},placeholder:_.search[a],classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"},value:l,onChange:function(e){var a=e.target.value;u(a)},inputRef:n,endAdornment:r.a.createElement(P.a,{position:"end"},""!==l?r.a.createElement(T.a,{size:"small","aria-label":"toggle password visibility",onClick:function(){u("")}},r.a.createElement(G.a,null)):null,r.a.createElement(T.a,{size:"small","aria-label":"toggle password visibility",onClick:t},r.a.createElement(D.a,null)))}))},X=function(e){var a=e.idioma,t=e.closeAddContactWin,n=e.open,i=e.buscarUsuarios,o=e.users,c=e.inputSearchRef,s=e.sendFriendRequest,l=H();return r.a.createElement(w.a,{maxWidth:"xs",onEntering:function(){},"aria-labelledby":"confirmation-dialog-title",open:n,onClose:t},r.a.createElement(A.a,{id:"confirmation-dialog-title",className:l.dialogTitle},_.title[a]," "),r.a.createElement(L.a,null),r.a.createElement(Q,{idioma:a,buscarUsuarios:i,inputSearchRef:c}),r.a.createElement(N.a,{dividers:!0,className:l.dialogContent},r.a.createElement(k.a,{style:{minHeight:"200px"}},o.map((function(e){return r.a.createElement(K,{user:e,sendFriendRequest:s})})))),r.a.createElement(q.a,null,r.a.createElement(j.a,{autoFocus:!0,onClick:t,color:"primary"},_.close[a])))},Y=t(34),Z=t(8),$=t(23),ee=t(17),ae=function(e){var a=Object(o.useRecoilValue)(Z.h),t=Object(o.useRecoilState)(Z.b),c=Object(i.a)(t,2),s=c[0],l=c[1],u=Object(n.useState)([]),d=Object(i.a)(u,2),m=d[0],p=d[1],f=Object(O.a)().openErrorNotification,b=Object(n.useRef)({value:""}),h=Object(o.useRecoilValue)(Z.i),E=Object(o.useSetRecoilState)($.d),g=function(){Object(Y.a)((function(e){v.a.post("".concat(C.a.server,"/users/searchContact"),{stringPattern:b.current.value,start:0,limit:20},{headers:{Authorization:e}}).then((function(e){200===e.status&&p(e.data.users)})).catch((function(e){f(_.lbErrorLoadingUsers[a])}))}))};Object(n.useEffect)((function(){g()}),[]);return r.a.createElement(X,{idioma:a,closeAddContactWin:function(){l(!1)},open:s,users:m,buscarUsuarios:g,inputSearchRef:b,sendFriendRequest:function(e){Object(Y.a)((function(t){v.a.post("".concat(C.a.server,"/users/sendFriendRequest"),{userId:e},{headers:{Authorization:t}}).then((function(a){200===a.status&&(p((function(a){return a.filter((function(a){return a.userId!==e}))})),E({action:"add",payload:{friend:a.data.friend}}))})).then((function(){ee.a.getSocket().emit("request friendship",{userIdRequester:h.userId,userIdRequested:e,token:t})})).catch((function(e){f(_.lbErrorSendigFriendRequest[a])}))}))}})},te=function(e){return r.a.createElement(ae,null)},ne=function(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),c=t[0],s=t[1],l=Object(o.useRecoilState)(Z.b),u=Object(i.a)(l,2),d=u[0],m=u[1],p=Object(o.useRecoilValue)(Z.h);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{open:c,handleOpen:function(){s(!0)},handleClose:function(){s(!1)},idioma:p,openAddContactView:function(){m(!0)}}),d?r.a.createElement(te,null):null)};a.default=function(e){return r.a.createElement(ne,null)}}}]);
//# sourceMappingURL=12.284bdea7.chunk.js.map
(this.webpackJsonpchat_front=this.webpackJsonpchat_front||[]).push([[0],{128:function(e,t){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n,c=a(0),i=a.n(c),o=a(25),l=a.n(o),s=(a(60),a(1)),r=Object(s.atom)({key:"idiomaState",default:"es"}),u=Object(s.atom)({key:"loginData",default:null}),m=Object(s.atom)({key:"chatConversation",default:{active:!1}}),d=Object(s.atom)({key:"contactListState",default:[]}),v={posibleViews:{LOGIN:"LOGIN",CONTACTS:"CONTACTS",CHAT:"CHAT"},getAtom:Object(s.atom)({key:"view",default:"LOGIN"})},f=Object(s.atom)({key:"subscribeToEventsState",default:!1}),b=a(2),O=a(14),g=a.n(O),E=a(15),k=a(53),p=a.n(k),h={getSocket:function(){return n||(n=p()("http://localhost:3001"))}},j=function(e){var t=Object(s.useRecoilValue)(r),a=Object(s.useSetRecoilState)(u),n=Object(s.useSetRecoilState)(v.getAtom),o=Object(s.useRecoilState)(d),l=Object(b.a)(o,2),m=(l[0],l[1],Object(s.useSetRecoilState)(f)),O=Object(c.useState)({nickname:"",valid:null}),k=Object(b.a)(O,2),p=k[0],j=k[1],x=function(e){g.a.post("http://localhost:3001/login",{nickname:e}).then((function(t){if(200===t.status){var a=h.getSocket();return a.emit("new user",{nickname:e,_id:t.data._id}),{client:a,nickname:e,_id:t.data._id}}throw Error("El login no fue satiscactorio")})).then((function(e){a({nickname:e.nickname,_id:e._id,socketId:e.client.id})})).then((function(){m(!0)})).then((function(){n(v.posibleViews.CONTACTS)})).catch((function(e){console.log(e)}))};return i.a.createElement("div",{className:"login"},i.a.createElement("h2",null,E.welcome[t]),i.a.createElement("input",{type:"text",placeholder:E.placeholder[t],onChange:function(e){var t=e.target.value;/^[a-zA-Z][a-zA-Z0-9]{2,10}$/.test(t)?j({nickname:t,valid:!0}):j({nickname:t,valid:!1})},onKeyPress:function(e){13===e.charCode&&x(p.nickname)},value:p.nickname,className:p.valid?"valid":"invalid"}),p.valid?i.a.createElement("button",{onClick:function(){return x(p.nickname)}},E.txtBtn[t]):null)},x=a(5),S=a(3),N=function(e){var t=e.size,a=void 0===t?1:t,n=e.novistos,c=void 0===n?0:n,o={width:"".concat(50*a,"px"),height:"".concat(50*a,"px")},l={width:"".concat(20*a,"px"),height:"".concat(20*a,"px")},s={width:"".concat(35*a,"px"),height:"".concat(30*a,"px")},r=c.toString().length<=3?3*c.toString().length:10,u={top:"-".concat(r,"px"),right:"-".concat(r,"px")};return i.a.createElement("div",{className:"avatar"},i.a.createElement("div",{className:"avatarOut",style:o},i.a.createElement("div",{className:"avatarHead",style:l}),i.a.createElement("div",{className:"avatarTrunk",style:s})),c>0?i.a.createElement("span",{className:"badge",style:u},c):null)},y=function(e){var t,a,n=e.nickname,c=e._id,o=e.socketId,l=Object(s.useRecoilState)(m),r=Object(b.a)(l,2),u=r[0],d=r[1],f=Object(s.useSetRecoilState)(v.getAtom),O=(null===(t=u[c])||void 0===t?void 0:t.novistos)?u[c].novistos:0,g="";u[c]&&u[c].text&&(g=(null===(a=u[c].text[u[c].text.length-1])||void 0===a?void 0:a.msg)?u[c].text[u[c].text.length-1].msg:"");return i.a.createElement("div",{className:"contact contact-item",onClick:function(){var e=Object(S.a)(Object(S.a)({},u),{},{active:c,activeOnline:!0});e[c]?e[c]={nickname:n,socketId:o,text:Object(x.a)(u[c].text),novistos:0}:e[c]={nickname:n,text:[],socketId:o,novistos:0},d(e),f(v.posibleViews.CHAT)}},i.a.createElement(N,{novistos:O}),i.a.createElement("div",{className:"contactBody"},i.a.createElement("div",{className:"status"},i.a.createElement("span",{className:"nickname"},n),i.a.createElement("span",{className:"connectionStatus"})),i.a.createElement("div",{className:"lastMsg"},g)))},_=function(e){var t=Object(s.useRecoilValue)(u),a=Object(s.useRecoilState)(d),n=Object(b.a)(a,2),o=n[0],l=n[1];Object(c.useEffect)((function(){g.a.get("http://localhost:3001/users").then((function(e){200===e.status&&l(e.data.data.map((function(e){return{nick:e.nickname,_id:e._id,socketId:e.socketId}})).filter((function(e){return e._id!==t._id})))})).catch((function(e){return console.log(e)}))}),[]);return i.a.createElement("div",{style:{overflowY:"scroll",height:"calc(100% - 70px)"}},o.map((function(e){return i.a.createElement("div",{key:e._id},i.a.createElement(y,{nickname:e.nick,_id:e._id,socketId:e.socketId}))})))},C=a(54),w=function(e){var t=e.myMsg,a=void 0===t||t,n=e.msg,c=e.style,o=a?"mymsg":"notmymsg";return i.a.createElement("div",{className:"message ".concat(o),style:c},n)},R=function(e){var t=e.nickname,a=e.backClick,n=e.online,c=void 0===n||n;return i.a.createElement("div",{className:"contact contact-chat"},i.a.createElement("div",{className:"goBack",onClick:a}),i.a.createElement(N,{size:.8}),i.a.createElement("div",{className:"contactBody"},i.a.createElement("div",{className:"status"},i.a.createElement("span",{className:"nickname"},t),i.a.createElement("span",{className:"connectionStatus ".concat(c?"online":"offline")},c?"Online":"Offline"))))},I=function(e){var t=Object(s.useRecoilValue)(r),a=Object(s.useRecoilValue)(u),n=Object(s.useRecoilState)(m),o=Object(b.a)(n,2),l=o[0],d=o[1],f=Object(c.useRef)(""),O=Object(s.useSetRecoilState)(v.getAtom),g=h.getSocket(),E=function(){var e=f.current.innerText.replace(/^(\s*\r*)(.)(\s*\r*)$/,"$2");if(""!==e){var t=Object(S.a)({},l);t[t.active]=Object(S.a)({},t[l.active]),t[t.active].text=[].concat(Object(x.a)(t[t.active].text),[{myMsg:!0,msg:e}]),d(t),g.emit("message",{from:a._id,toUserId:l.active,toSocketId:l[l.active].socketId,msg:e}),f.current.innerText="",f.current.focus()}};Object(c.useEffect)((function(){var e=document.getElementById("chatConversation");e&&(e.scrollTop=e.scrollHeight)}));return i.a.createElement("div",{id:"chatContainer"},i.a.createElement(R,{backClick:function(){O(v.posibleViews.CONTACTS),d(Object(S.a)(Object(S.a)({},l),{},{active:null}))},nickname:l[l.active].nickname,online:l.activeOnline}),i.a.createElement("div",{id:"chatConversation"},l[l.active].text.map((function(e,t,a){var n={};return a[t+1]&&e.myMsg===a[t+1].myMsg&&(n.marginBottom="-3px",n.borderRadius=e.myMsg?"10px 0px 10px 10px":"0 10px 10px 10px"),t>0&&e.myMsg===a[t-1].myMsg&&(n.borderRadius=(e.myMsg,"10px 10px 10px 10px")),i.a.createElement(w,Object.assign({},e,{key:t,style:n}))}))),i.a.createElement("div",{id:"editor"},i.a.createElement("div",{id:"textarea",role:"textbox",contentEditable:l.activeOnline,ref:f,onKeyPress:function(e){l.activeOnline&&13===e.charCode&&E()}}),i.a.createElement("button",{id:"sendButton",disabled:!l.activeOnline,onClick:E},C.btnSend[t])))},T=function(e){var t=Object(s.useRecoilState)(r),a=Object(b.a)(t,2),n=a[0],c=a[1];return i.a.createElement("div",{className:"headerdiv"},i.a.createElement("div",{className:"infoapp"},i.a.createElement("div",{className:"apptitle"},"Chatapp")),i.a.createElement("select",{value:n,onChange:function(e){var t=e.target.value;c(t)},className:"idiomaselect"},i.a.createElement("option",{value:"es"},"ES"),i.a.createElement("option",{value:"en"},"EN")))},A=function(e){var t=Object(s.useRecoilState)(d),a=Object(b.a)(t,2),n=a[0],o=a[1],l=h.getSocket();return Object(c.useEffect)((function(){return l.on("new user",(function(e){o([].concat(Object(x.a)(n),[{nick:e.nickname,_id:e._id,socketId:e.socketId}]))})),function(){return l.off("new user")}}),[n]),i.a.createElement(i.a.Fragment,null)},B=function(e){var t=Object(s.useRecoilState)(d),a=Object(b.a)(t,2),n=a[0],o=a[1],l=Object(s.useRecoilState)(m),r=Object(b.a)(l,2),u=r[0],v=r[1],f=h.getSocket();return Object(c.useEffect)((function(){return f.on("user disconnect",(function(e){o(n.filter((function(t){return t._id!==e._id}))),u.active===e._id&&v(Object(S.a)(Object(S.a)({},u),{},{activeOnline:!1}))})),function(){return f.off("user disconnect")}}),[u]),i.a.createElement(i.a.Fragment,null)},M=function(e){var t=Object(s.useRecoilState)(m),a=Object(b.a)(t,2),n=a[0],o=a[1],l=h.getSocket();return Object(c.useEffect)((function(){return l.on("message",(function(e){var t=Object(S.a)({},n);n[e._id]?(t[e._id]=Object(S.a)({},n[e._id]),n[e._id].text?(t[e._id].text=[].concat(Object(x.a)(n[e._id].text),[{myMsg:!1,msg:e.msg}]),e._id!==t.active&&(t[e._id].novistos=t[e._id].novistos+1)):t[e._id].text=[]):t[e._id]={text:[{myMsg:!1,msg:e.msg}],nickname:null,socketId:null,novistos:1},o(t)})),function(){return l.off("message")}}),[n]),i.a.createElement(i.a.Fragment,null)};a(131);var V=function(){var e=Object(s.useRecoilValue)(v.getAtom),t=Object(s.useRecoilValue)(f),a=e===v.posibleViews.LOGIN?i.a.createElement(j,null):e===v.posibleViews.CONTACTS?i.a.createElement(_,null):i.a.createElement(I,null),n=null;return t&&(n=i.a.createElement(i.a.Fragment,null,i.a.createElement(A,null),i.a.createElement(B,null),i.a.createElement(M,null))),i.a.createElement("div",{className:"main"},i.a.createElement(T,null),a,n)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s.RecoilRoot,null,i.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e){e.exports=JSON.parse('{"welcome":{"en":"Welcome to the chat","es":"Bienvenido al chat"},"placeholder":{"en":"Nickname","es":"Nombre de pila"},"txtBtn":{"en":"Begin","es":"Comenzar"}}')},54:function(e){e.exports=JSON.parse('{"btnSend":{"es":"Enviar","en":"Send"}}')},55:function(e,t,a){e.exports=a(132)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.2e45fe6b.chunk.js.map
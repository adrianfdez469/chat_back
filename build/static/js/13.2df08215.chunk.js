(this.webpackJsonpchat_front=this.webpackJsonpchat_front||[]).push([[13],{320:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return I}));var c=n(58),a=n.n(c),r=n(10),o=n(108),i=n(324),u=n(6),s=n(13),d=Object(u.selector)({key:"friendSelector",get:function(e){var t=e.get;return t(s.f).length>0?Object(i.a)(t(s.f)).sort((function(e,t){if(1===e.friendShipStatus&&1===t.friendShipStatus){if(e.socketId&&!t.socketId)return-1;if(!e.socketId&&t.socketId)return 1}return e.friendShipStatus<t.friendShipStatus?-1:e.friendShipStatus>t.friendShipStatus?1:e.email<t.email?-1:e.email>t.email?1:void 0})):[]},set:function(){var e=Object(o.a)(a.a.mark((function e(t,n){var c,o,u,d,f,l,b,I,O,j,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.set,o=t.get,u=n.action,d=n.payload,e.t0=u,e.next="initialize"===e.t0?5:"add"===e.t0?7:"update"===e.t0?9:"reset_cant_no_leidos"===e.t0?11:"set_message_info"===e.t0?13:"delete"===e.t0?15:"connect"===e.t0?19:"disconnect"===e.t0?21:26;break;case 5:return c(s.f,(function(e){return 0===e.length?d.friends:e})),e.abrupt("break",27);case 7:return c(s.f,(function(e){var t=Object(i.a)(e);return t.push(d.friend),t})),e.abrupt("break",27);case 9:return c(s.f,(function(e){var t=e.findIndex((function(e){return e.contactId===d.friend.contactId}));return e.slice(0,t).concat([d.friend]).concat(e.slice(t+1))})),e.abrupt("break",27);case 11:return c(s.f,(function(e){var t=e.findIndex((function(e){return e.contactId===d.contactId}));return e.slice(0,t).concat([Object(r.a)(Object(r.a)({},e[t]),{},{unread:0})]).concat(e.slice(t+1))})),e.abrupt("break",27);case 13:return c(s.f,(function(e){var t=d.dataObj;return e.map((function(e){if(t[e.contactId]){var n=0;return e.unread&&(n=e.unread),t[e.contactId].cantidad&&(n+=t[e.contactId].cantidad),Object(r.a)(Object(r.a)({},e),{},{unread:n,lastMsg:t[e.contactId].lastMessage,datetime:t[e.contactId].datetime})}return e}))})),e.abrupt("break",27);case 15:return o(s.a)===d.friendId&&c(s.a,(function(e){return null})),c(s.f,(function(e){return e.filter((function(e){return e.contactId!==d.friendId}))})),e.abrupt("break",27);case 19:return Array.isArray(d.data)?c(s.f,(function(e){return e.map((function(e){var t=d.data.findIndex((function(t){return t.userId===e.contactId}));return t>=0?Object(r.a)(Object(r.a)({},e),{},{socketId:d.data[t].socketId}):Object(r.a)({},e)}))})):(f=d.data,l=f.userId,b=f.socketId,I=null,O=0,c(s.f,(function(e){var t=e.findIndex((function(e){return e.contactId===l}));if(t>=0){I=e[t].nickname,O=e[t].friendShipStatus;var n=Object(r.a)(Object(r.a)({},e[t]),{},{socketId:b});return e.slice(0,t).concat([n]).concat(e.slice(t+1))}return e})),I&&1===O&&d.notification("".concat(I," ").concat(d.msg[o(s.h)]),{variant:"info"})),e.abrupt("break",27);case 21:return j=null,m=0,c(s.f,(function(e){var t=e.findIndex((function(e){return e.socketId===d.socketId}));return t>=0?(j=e[t].nickname,m=e[t].friendShipStatus,Object(i.a)(e).slice(0,t).concat([Object(r.a)(Object(r.a)({},e[t]),{},{socketId:null})]).concat(e.slice(t+1))):e})),j&&1===m&&d.notification("".concat(j," ").concat(d.msg[o(s.h)]),{variant:"warning"}),e.abrupt("break",27);case 26:return e.abrupt("break",27);case 27:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),f=Object(u.selector)({key:"conversationSelector",set:function(e,t){var n=e.set,c=t.contactId,a=t.conversation,r=function(e,t,n,c){return e===n?0:t===n?c?3:2:void 0};n(Object(s.g)(c),(function(e){return a.map((function(e){return{_id:e._id,content:e.content,datetime:e.datetime,state:r(e.userOrigin,e.userDestiny,c,e.readed)}}))}))}}),l=Object(u.selector)({key:"addMessageToConversation",set:function(e,t){var n=e.set,c=t.contactId,a={_id:t.messageId,content:t.content,datetime:t.datetime,state:t.state};n(Object(s.g)(c),(function(e){return e.concat([a])}))}}),b=Object(u.selector)({key:"editMsgToStateSavedSelector",set:function(e,t){var n=e.set,c=t.contactId,a=t.messageId,o=t.datetime,i=t.consecutive;n(Object(s.g)(c),(function(e){var t=e.findIndex((function(e){return e._id===i&&1===e.state}));if(t>=0){var n=Object(r.a)(Object(r.a)({},e[t]),{},{state:2,_id:a,datetime:o});return e.slice(0,t).concat([n]).concat(e.slice(t+1))}return e}))}}),I=Object(u.selector)({key:"editAllMsgToSavedSelector",set:function(e,t){var n=e.set,c=t.contactId;n(Object(s.g)(c),(function(e){return e.map((function(e){return 0!==e.state?Object(r.a)(Object(r.a)({},e),{},{state:3}):e}))}))}})},323:function(e){e.exports=JSON.parse('{"disconnected":{"es":"se ha desconectado","en":"has disconnected"},"connected":{"es":"se ha conectado","en":"has connected"},"accept":{"es":"te ha aceptado","en":"has accepted you"},"decline":{"es":"te ha rechazado","en":"has declined you"},"delete":{"es":"te ha eliminado","en":"has deleted you"},"block":{"es":"te he bloqueado","en":"has bloqued you"},"errorLoadingFriends":{"es":"Error al cargar contactos","en":"Error while loading contacts"},"requestedInv":{"es":"solicita ser su amigo","en":"request be your friend"},"declinedInv":{"es":"ha cancelado la solicitud de amistad","en":"cancel the friend request"},"writingYou":{"es":"ha escrito","en":"has whritten"},"connError":{"es":"Error de conexi\xf3n","en":"Network error"}}')},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(86);var a=n(112);function r(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},436:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(6),o=n(320),i=n(103),u=n(13),s=n(105),d=n(323),f=function(e){var t=i.a.getSocket(),n=Object(r.useSetRecoilState)(o.d),f=Object(r.useRecoilValue)(u.i),l=Object(s.b)().enqueueSnackbar;return Object(c.useEffect)((function(){return t.on("new user",(function(e){n({action:"connect",payload:{data:e,notification:l,msg:d.connected}})})),f&&t.emit("new user",{userId:f.userId}),function(){return t.off("new user")}}),[n,t,f]),a.a.createElement(a.a.Fragment,null)},l=function(e){var t=Object(r.useSetRecoilState)(o.d),n=i.a.getSocket(),u=Object(s.b)().enqueueSnackbar;return Object(c.useEffect)((function(){return n.on("user disconnect",(function(e){t({action:"disconnect",payload:{socketId:e.socketId,notification:u,msg:d.disconnected}})})),function(){return n.off("user disconnect")}}),[]),a.a.createElement(a.a.Fragment,null)},b=n(324),I=n(10),O=n(20),j=function(e){var t=Object(r.useRecoilState)(u.c),n=Object(O.a)(t,2),o=n[0],s=n[1],d=i.a.getSocket();return Object(c.useEffect)((function(){return d.on("message",(function(e){var t=Object(I.a)({},o);o[e.socketId]?(t[e.socketId]=Object(I.a)({},o[e.socketId]),o[e.socketId].text?(t[e.socketId].text=[].concat(Object(b.a)(o[e.socketId].text),[{myMsg:!1,msg:e.msg}]),e.socketId!==t.active&&(t[e.socketId].novistos=t[e.socketId].novistos+1)):t[e.socketId].text=[]):t[e.socketId]={text:[{myMsg:!1,msg:e.msg}],nickname:null,socketId:null,novistos:1},s(t)})),function(){return d.off("message")}}),[o]),a.a.createElement(a.a.Fragment,null)},m=n(33),k=n(34),g=n.n(k),p=n(44),v=n(104),h=function(e){var t=i.a.getSocket(),n=Object(r.useSetRecoilState)(o.d),f=Object(s.b)().enqueueSnackbar,l=Object(r.useRecoilValue)(u.h),b=Object(p.a)().openErrorNotification;return Object(c.useEffect)((function(){return t.on("declined friendship",(function(e){var t=e.declinerId,c=(e.declinedId,e.socketIdDecliner);e.socketIdDeclined;Object(v.a)((function(e){g.a.post("".concat(m.a.server,"/users/getFriendById"),{friendId:t},{headers:{Authorization:e}}).then((function(e){if(200===e.status)return n({action:"update",payload:{friend:Object(I.a)(Object(I.a)({},e.data.friend),{},{socketId:c})}}),e.data.friend})).then((function(e){f("".concat(e.nickname," ").concat(d.declinedInv[l]),{variant:"warning"})})).catch((function(e){e.response?404===e.response.status&&n({action:"delete",payload:{friendId:t}}):b(d.connError[l])}))}))})),function(){return t.off("declined friendship")}}),[]),a.a.createElement(a.a.Fragment,null)},S=function(e){var t=i.a.getSocket(),n=Object(r.useSetRecoilState)(o.d),f=Object(s.b)().enqueueSnackbar,l=Object(r.useRecoilValue)(u.i),b=Object(r.useRecoilValue)(u.h),O=Object(p.a)().openErrorNotification;return Object(c.useEffect)((function(){return t.on("requested friendship",(function(e){var t=e.userIdRequester,c=e.userIdRequested,a=e.socketIdRequester;if(c===l.userId){Object(v.a)((function(e){g.a.post("".concat(m.a.server,"/users/getFriendById"),{friendId:t},{headers:{Authorization:e}}).then((function(e){if(200===e.status)return n({action:"add",payload:{friend:Object(I.a)(Object(I.a)({},e.data.friend),{},{socketId:a})}}),e.data.friend})).then((function(e){f("".concat(e.nickname," ").concat(d.requestedInv[b]),{variant:"success"})})).catch((function(e){e.response?O(d.errorLoadingFriends[b]):O(d.connError[b])}))}))}})),function(){return t.off("requested friendship")}}),[]),a.a.createElement(a.a.Fragment,null)},E=function(e){var t=i.a.getSocket(),n=Object(r.useSetRecoilState)(o.d),f=Object(s.b)().enqueueSnackbar,l=(Object(r.useRecoilValue)(u.i),Object(r.useRecoilValue)(u.h)),b=Object(p.a)().openErrorNotification;return Object(c.useEffect)((function(){return t.on("accepted friendship",(function(e){var t=e.accepterId,c=e.socketIdAccepter;Object(v.a)((function(e){g.a.post("".concat(m.a.server,"/users/getFriendById"),{friendId:t},{headers:{Authorization:e}}).then((function(e){if(200===e.status)return n({action:"update",payload:{friend:Object(I.a)(Object(I.a)({},e.data.friend),{},{socketId:c})}}),e.data.friend})).then((function(e){f("".concat(e.nickname," ").concat(d.accept[l]),{variant:"success"})})).catch((function(e){e.response?b(d.errorLoadingFriends[l]):b(d.connError[l])}))}))})),function(){return t.off("accepted friendship")}}),[]),a.a.createElement(a.a.Fragment,null)},y=function(e){var t=i.a.getSocket(),n=Object(r.useSetRecoilState)(o.d),f=Object(s.b)().enqueueSnackbar,l=Object(r.useRecoilValue)(u.h),b=Object(p.a)().openErrorNotification;return Object(c.useEffect)((function(){return t.on("deleted contact",(function(e){var t=e.deleterId,c=e.socketIdDeleter;Object(v.a)((function(e){g.a.post("".concat(m.a.server,"/users/getFriendById"),{friendId:t},{headers:{Authorization:e}}).then((function(e){if(200===e.status)return n({action:"update",payload:{friend:Object(I.a)(Object(I.a)({},e.data.friend),{},{socketId:c})}}),e.data.friend})).then((function(e){f("".concat(e.nickname," ").concat(d.delete[l]),{variant:"error"})})).catch((function(e){e.response?b(d.errorLoadingFriends[l]):b(d.connError[l])}))}))})),function(){return t.off("deleted contact")}}),[]),a.a.createElement(a.a.Fragment,null)},R=function(e){var t=i.a.getSocket(),n=Object(r.useSetRecoilState)(o.d),f=Object(s.b)().enqueueSnackbar,l=Object(r.useRecoilValue)(u.h),b=Object(p.a)().openErrorNotification;return Object(c.useEffect)((function(){return t.on("blocked contact",(function(e){var t=e.blokerId,c=e.socketIdBloked;Object(v.a)((function(e){g.a.post("".concat(m.a.server,"/users/getFriendById"),{friendId:t},{headers:{Authorization:e}}).then((function(e){if(200===e.status)return n({action:"update",payload:{friend:Object(I.a)(Object(I.a)({},e.data.friend),{},{socketId:c})}}),e.data.friend})).then((function(e){f("".concat(e.nickname," ").concat(d.block[l]),{variant:"error"})})).catch((function(e){e.response?b(d.errorLoadingFriends[l]):b(d.connError[l])}))}))})),function(){return t.off("bloked contact")}}),[]),a.a.createElement(a.a.Fragment,null)},F=n(110),q=function(e){var t=i.a.getSocket(),n=Object(r.useSetRecoilState)(o.a),f=Object(r.useSetRecoilState)(o.c),l=Object(r.useSetRecoilState)(o.b),b=Object(r.useRecoilValue)(u.i),I=Object(r.useRecoilValue)(u.a),j=Object(s.b)().enqueueSnackbar,m=Object(r.useRecoilState)(o.d),k=Object(O.a)(m,2),g=k[0],p=k[1],v=Object(r.useRecoilValue)(u.h);return Object(c.useEffect)((function(){return t.on("recived message",(function(e){var t=e.content,c=e.userOriginId,a=(e.socketIdSender,e.messageId),r=e.datetime,o=(e.consecutive,g.find((function(e){return e.contactId===c})));if(I!==c){j("".concat(o.nickname," ").concat(d.writingYou[v]),{variant:"info"});var u=Object(F.a)({},c,{cantidad:1,lastMessage:t,datetime:r});p({action:"set_message_info",payload:{dataObj:u}})}else{var s=Object(F.a)({},c,{cantidad:0,lastMessage:t,datetime:r});p({action:"set_message_info",payload:{dataObj:s}}),i.a.getSocket().emit("read messages",{userId:b.userId,contactId:o.contactId,notifyTo:o.socketId,token:localStorage.getItem("token")})}n({contactId:c,messageId:a,content:t,datetime:r,state:0})})),t.on("saved message",(function(e){var t=e.contactId,n=e.messageId,c=e.datetime,a=e.consecutive;e.soketIdContact;f({contactId:t,messageId:n,datetime:c,consecutive:a})})),t.on("readed messages",(function(e){var t=e.contactId;l({contactId:t})})),function(){t.off("recived message"),t.off("saved message"),t.off("readed messages")}})),a.a.createElement(a.a.Fragment,null)};t.default=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement(l,null),a.a.createElement(j,null),a.a.createElement(S,null),a.a.createElement(h,null),a.a.createElement(E,null),a.a.createElement(y,null),a.a.createElement(R,null),a.a.createElement(q,null))}}}]);
//# sourceMappingURL=13.2df08215.chunk.js.map
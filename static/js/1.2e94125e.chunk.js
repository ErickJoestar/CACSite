(this.webpackJsonpcac_site=this.webpackJsonpcac_site||[]).push([[1],{487:function(e,t,a){},508:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),r=a.n(c),o=a(26),s=a(9),l=a(29),i=a(78);a(487);t.default=function(e){var t=e.Fallback,a=Object(c.useContext)(o.a),u=Object(c.useContext)(s.a),m=Object(c.useContext)(s.c),p=Object(c.useState)(null),d=Object(n.a)(p,2),f=d[0],v=d[1],_=Object(c.useState)(!1),b=Object(n.a)(_,2),h=b[0],g=b[1],y=Object(c.useRef)(null);Object(l.a)(y,(function(){return g(!1)})),Object(c.useEffect)((function(){a.fetch.home()}),[a.fetch]);return r.a.createElement("div",{className:"cac_home"},h&&r.a.createElement("div",{className:"cac_home_background-black"},r.a.createElement("div",{className:"cac_home_post-container",ref:y},r.a.createElement(i.a,{allUsers:u.usersMap,className:"cac_home_post",data:a.posts.home.find((function(e){return e.id===f})),cropContent:!1,showCommentaries:!0,user:m}))),!m.isLoading&&a.posts.home.length>0&&Object.keys(u.usersMap).length>0?a.posts.home.map((function(e,t){return r.a.createElement(i.a,{user:m,key:t,data:e,allUsers:u.usersMap,cropContent:!0,onClick:function(){return t=e.id,v(t),void g(!0);var t},showCommentaries:!1})})):r.a.createElement(t,null))}},73:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return o}));var n=function(e){switch(e){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December";default:return null}},c=function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,c=0;c<e;c++)t+=a[Math.floor(Math.random()*n)];return t},r=/<br>|<\/br>|<br\/>/gi,o=function(e){return e.replace(r,"")}},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";var n=a(1),c=a(3),r=a.n(c),o=a(4),s=a(0),l=a.n(s),i=a(5),u=a(7),m=a(83),p=a.n(m),d=a(84),f=a.n(d),v=a(74),_=a.n(v),b=a(519),h=a(509),g=(a(75),function(e){var t=e.language,a=void 0===t?null:t,n=e.value;return l.a.createElement(b.a,{language:a,style:h.a},n)}),y=a(18),E=a(25),O=a.n(E),k=(a(76),function(e){var t=e.author,a=e.date,n=e.content;return console.log(t),l.a.createElement("div",{className:"cac_commentary"},l.a.createElement("div",{className:"cac_commentary_heading"},l.a.createElement("img",{src:t&&t.photoURL||O.a,alt:t?t.displayName:"",className:"cac_commentary_photo"}),l.a.createElement("div",{className:"cac_commentary_heading_text"},l.a.createElement(u.b,{to:"/profile/".concat(t.id),className:"cac_commentary_name--link"},l.a.createElement(y.a,{className:"cac_commentary_name",rank:t?t.rank:null},t?t.displayName:"")),l.a.createElement(_.a,{className:"cac_post_date",date:a.toDate()}))),l.a.createElement("p",{className:"cac_commentary_content"},n))}),N=a(8);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var x=l.a.createElement("title",null,"ionicons-v5-f"),C=function(e){var t=e.svgRef,a=e.title,n=w(e,["svgRef","title"]);return l.a.createElement("svg",j({width:512,height:512,viewBox:"0 0 512 512",ref:t},n),void 0===a?x:a?l.a.createElement("title",null,a):null,l.a.createElement("path",{d:"M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z",style:{fill:"auto",stroke:"auto",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32}}))},R=l.a.forwardRef((function(e,t){return l.a.createElement(C,j({svgRef:t},e))}));a.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var P=l.a.createElement("title",null,"ionicons-v5-l"),M=function(e){var t=e.svgRef,a=e.title,n=S(e,["svgRef","title"]);return l.a.createElement("svg",L({width:512,height:512,viewBox:"0 0 512 512",ref:t},n),void 0===a?P:a?l.a.createElement("title",null,a):null,l.a.createElement("path",{d:"M408,64H104a56.16,56.16,0,0,0-56,56V312a56.16,56.16,0,0,0,56,56h40v80l93.72-78.14a8,8,0,0,1,5.13-1.86H408a56.16,56.16,0,0,0,56-56V120A56.16,56.16,0,0,0,408,64Z",style:{fill:"auto",stroke:"auto",strokeLinejoin:"round",strokeWidth:32}}))},V=l.a.forwardRef((function(e,t){return l.a.createElement(M,L({svgRef:t},e))}));a.p;function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var D=l.a.createElement("title",null,"ionicons-v5-h"),A=function(e){var t=e.svgRef,a=e.title,n=U(e,["svgRef","title"]);return l.a.createElement("svg",F({width:512,height:512,viewBox:"0 0 512 512",ref:t},n),void 0===a?D:a?l.a.createElement("title",null,a):null,l.a.createElement("path",{d:"M352,48H160a48,48,0,0,0-48,48V464L256,336,400,464V96A48,48,0,0,0,352,48Z",style:{fill:"auto",stroke:"auto",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32}}))},J=l.a.forwardRef((function(e,t){return l.a.createElement(A,F({svgRef:t},e))})),H=(a.p,a(73)),B=(a(77),a(87),f()({isValidNode:function(e){return"script"!==e.type&&"break"!==e.type}}));t.a=function(e){var t,a=e.user,c=e.from,m=void 0===c?"posts":c,d=e.showAuthor,f=void 0===d||d,v=e.enableLink,b=void 0===v||v,h=e.data,E=e.allUsers,j=e.preview,w=void 0!==j&&j,x=e.cropContent,C=void 0!==x&&x,L=e.showCommentaries,S=void 0!==L&&L,P=e.onClick,M=void 0===P?function(){return null}:P;t=E[h.author.id]||t;var F=Object(s.useState)(!1),U=Object(o.a)(F,2),D=U[0],A=U[1],I=Object(s.useState)(""),W=Object(o.a)(I,2),Z=W[0],Y=W[1],q=!w&&a.logged&&h.likesList.includes(a.uid),z=Object(s.useState)(!w&&a.logged&&a.saved.includes(h.id)),G=Object(o.a)(z,2),K=G[0],Q=G[1];console.log(E);return l.a.createElement(l.a.Fragment,null,t&&l.a.createElement("div",{className:"cac_post ".concat(C?"cac_post--crop":""),onClick:M},l.a.createElement("div",{className:"cac_post_heading"},f&&l.a.createElement("img",{src:t.photoURL||O.a,className:"cac_post_heading_photo",alt:t.displayName}),l.a.createElement("div",{className:"cac_post_text-container"},b?l.a.createElement(u.b,{to:"/".concat(m,"/").concat(h.id),className:"cac_post_title cac_post_title--link"},h.title):l.a.createElement("span",{className:"cac_post_title"},h.title),f&&l.a.createElement(u.b,{to:"/profile/".concat(t.id),className:"cac_post_author--link"},l.a.createElement(y.a,{className:"cac_post_author",rank:t.rank},t.displayName)),w?l.a.createElement("span",{className:"cac_post_date"},h.date):l.a.createElement(_.a,{className:"cac_post_date",live:!1,date:h.timestamp?h.timestamp.toDate():new Date})),l.a.createElement("div",{className:"cac_post_icons"})),l.a.createElement(p.a,{className:"cac_post_content markdown-body ".concat(C?"cac_post_content--crop":""),source:Object(H.c)(h.content),renderers:{code:g},escapeHtml:!1,astPlugins:[B]}),l.a.createElement("div",{className:"cac_post_interaction"},l.a.createElement("div",{className:"cac_post_interaction-box",onClick:function(e){e.stopPropagation();!w&&a.logged?function(){var e;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.d.doc("".concat(m,"/").concat(h.id)),q){t.next=6;break}return t.next=4,r.a.awrap(e.update({likesList:i.c.firestore.FieldValue.arrayUnion(a.uid)}));case 4:t.next=8;break;case 6:return t.next=8,r.a.awrap(e.update({likesList:i.c.firestore.FieldValue.arrayRemove(a.uid)}));case 8:case"end":return t.stop()}}))}():alert("You need to sign in to like posts")}},l.a.createElement("span",{className:"cac_post_interaction-counter"},h.likesList.length),l.a.createElement(R,{className:"cac_post_icon cac_post_heart ".concat(q?"cac_post_heart--filled":"")}),l.a.createElement("span",{className:"cac_post_interaction-label"},"Like")),l.a.createElement("div",{className:"cac_post_interaction-box cac_post_interaction-box--comment"},l.a.createElement("span",{className:"cac_post_interaction-counter"},h.comments.length),l.a.createElement(V,{className:"cac_post_icon cac_post_comment"}),l.a.createElement("span",{className:"cac_post_interaction-label"},"Comment")),l.a.createElement("div",{className:"cac_post_interaction-box",onClick:function(e){e.stopPropagation();!w&&a.logged?function(){var e;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.d.doc("users/".concat(a.uid)),Q(!K),K){t.next=7;break}return t.next=5,r.a.awrap(e.update({saved:i.c.firestore.FieldValue.arrayUnion(h.id)}));case 5:t.next=9;break;case 7:return t.next=9,r.a.awrap(e.update({saved:i.c.firestore.FieldValue.arrayRemove(h.id)}));case 9:case"end":return t.stop()}}))}():alert("you need to sign in to save posts")}},l.a.createElement(J,{className:"cac_post_icon cac_post_bookmark ".concat(K?"cac_post_bookmark--filled":"")}),l.a.createElement("span",{className:"cac_post_interaction-label"},"Save"))),S&&l.a.createElement("div",{className:"cac_post_commentaries-section"},a.logged&&l.a.createElement("div",{className:"cac_post_create-commentary"},l.a.createElement("textarea",{className:"cac_post_create-commentary_textarea",value:Z,onChange:function(e){return Y(e.target.value)}}),l.a.createElement(N.b,{className:"cac_poist_create-commentary_button",onClick:function(){!D&&Z&&function(){var e,t;r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return A(!0),e=i.d.doc("".concat(m,"/").concat(h.id)),t={author:a.uid,content:Z,date:new Date},n.next=5,r.a.awrap(e.update({comments:i.c.firestore.FieldValue.arrayUnion(t)}));case 5:A(!1),Y("");case 7:case"end":return n.stop()}}))}()}},"Comment")),l.a.createElement("div",{className:"cac_post_commentaries"},h.comments.sort((function(e,t){return t.date.toDate()-e.date.toDate()})).map((function(e,t){var a=e.author,c=e.content,r=e.date;return l.a.createElement(k,{key:t,author:Object(n.a)({id:a},E[a]),content:c,date:r})}))))))}},85:function(e,t){}}]);
//# sourceMappingURL=1.2e94125e.chunk.js.map
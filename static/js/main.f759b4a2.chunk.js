(this.webpackJsonptrashpanda=this.webpackJsonptrashpanda||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(8),i=n.n(s),r=(n(15),n(2)),o=(n(16),n(9)),u=new(n.n(o).a),d=n(6),j=n.n(d),b=n(10),h=function(){var e=Object(b.a)(j.a.mark((function e(t,n,a){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json",Origin:"https://localhost:3000",mode:"no-cors"},body:JSON.stringify({id:t,answer:n})},fetch(Object({NODE_ENV:"production",PUBLIC_URL:"/trashpanda",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ANSWERS_URL,c).then((function(e){return e.json()})).then((function(e){a(e.question,e.id,e.status)})),e.abrupt("return",[]);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),l=(n(18),n(1)),O=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),o=i[0],d=i[1],j=Object(a.useState)(""),b=Object(r.a)(j,2),h=b[0],O=b[1];Object(a.useEffect)((function(){u.addListener("flash",(function(e){var t=e.message,n=e.type;c(!0),d(t),O(n+" flash hide-opacity"),setTimeout((function(){c(!1)}),4e3)}))}),[]);return n?Object(l.jsx)("div",{id:"flash",className:h,children:o}):Object(l.jsx)("div",{id:"flash",children:" \xa0 "})},f=n.p+"static/media/trashpanda.abba0b14.png",p=n(24),m=n(7),g=function(){window.flash=function(e,t){return u.emit("flash",{message:e,type:t})};var e=Object(a.useState)("\u2026loading"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(1),i=Object(r.a)(s,2),o=i[0],d=i[1],j=Object(a.useState)(""),b=Object(r.a)(j,2),g=b[0],S=b[1],v=Object(p.a)(),x=Object(r.a)(v,2),w=x[0],T=x[1];Object(a.useEffect)((function(){document.cookies=w,h(o,g,(function(e,t){c(e),d(t),S(w[t]||"")}))}),[]);var C=Object(a.useState)(""),_=Object(r.a)(C,2),y=_[0],E=_[1];return Object(a.useEffect)((function(){u.addListener("flash",(function(e){e.message;var t=e.type;E(t),setTimeout((function(){E("")}),4e3)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{id:"analytics",children:[m.a.initialize("G-KTC7Q78H78"),m.a.pageview(window.location.pathname+window.location.search)]}),Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{alt:"A raccoon slides in from the right",src:f,className:"logo"}),"Trash Panda ",Object(l.jsx)("br",{})," Online Scavenger Hunt"]}),Object(l.jsx)("div",{id:"question",dangerouslySetInnerHTML:{__html:n}}),Object(l.jsx)(O,{}),Object(l.jsxs)("div",{className:"answerSection",children:[Object(l.jsx)("hr",{}),Object(l.jsx)("h1",{children:" Your Answer: "}),Object(l.jsx)("input",{className:y,id:o,onChange:function(e){return S(e.target.value)},value:g}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{id:"Submit",onClick:function(){T(o,g),h(o,g,(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};c(e),d(t),window.flash(n.message,n.status),S(w[t]||"")}))},children:"Check Your Answer"})]}),Object(l.jsxs)("footer",{children:["Coding by ",Object(l.jsx)("a",{href:"https://github.com/mtuckerb",children:" @mtuckerb "}),"\xa0 Diabolical Questions and Answers by"," ",Object(l.jsx)("a",{href:"https://github.com/milesbradford",children:" @milesbradford "})]})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),S()}},[[22,1,2]]]);
//# sourceMappingURL=main.f759b4a2.chunk.js.map
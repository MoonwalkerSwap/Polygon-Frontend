(this["webpackJsonpPolygon-MoonWalklerSwap-frontend"]=this["webpackJsonpPolygon-MoonWalklerSwap-frontend"]||[]).push([[8],{1099:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return cn}));var c,r,a,i,o,s,j,u,b,l,d,O,p,x,f,m,g,h,v,w,y,k,S,z,Q,T,D,C,U,E,N,H=t(16),P=t(0),R=t(7),F=t(11),M=t(47),W=t(159),B=t(2),L=t.n(B),A=t(13),I=t(24),J=t(28),q=t(263),X=t(17),$=t(14),G=t.n($),K=t(60),V=t(22),Y=t(95),Z=t(258),_=t(157),ee=function(){var e=Object(P.useState)([]),n=Object(I.a)(e,2),t=n[0],c=n[1],r=Object(J.c)().account,a=Object(_.a)().fastRefresh;return Object(P.useEffect)((function(){var e=function(){var e=Object(A.a)(L.a.mark((function e(){var n,t,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Z.b.map((function(e){return{address:Object(V.b)(),name:"pendingPdust",params:[e.pid,r]}})),e.next=3,Object(K.a)(Y,n);case 3:t=e.sent,a=Z.b.map((function(e,n){return Object(X.a)(Object(X.a)({},e),{},{balance:new G.a(t[n])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r&&e()}),[r,a]),t},ne=t(257),te=function(){var e=Object(P.useState)([]),n=Object(I.a)(e,2),t=n[0],c=n[1],r=Object(J.c)().account,a=Object(_.a)().fastRefresh;return Object(P.useEffect)((function(){var e=function(){var e=Object(A.a)(L.a.mark((function e(){var n,t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Z.b.map((function(e){return{address:Object(V.b)(),name:"pendingPdust",params:[e.pid,r]}})),e.next=3,Object(K.a)(Y,n);case 3:t=e.sent,c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r&&e()}),[r,a]),t},ce=t(54),re=t(273),ae=t(4),ie=function(e){var n=e.value,t=e.decimals,c=e.fontSize,r=void 0===c?"40px":c,a=e.lineHeight,i=void 0===a?"1":a,o=e.prefix,s=void 0===o?"":o,j=e.bold,u=void 0===j||j,b=e.color,l=void 0===b?"text":b,d=Object(re.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),O=d.countUp,p=d.update,x=Object(P.useRef)(p);return Object(P.useEffect)((function(){x.current(n)}),[n,x]),Object(ae.jsxs)(F.Q,{bold:u,fontSize:r,style:{lineHeight:i},color:l,children:[s,O]})},oe=function(e){return Object(ae.jsx)(ie,Object(X.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))},se=R.e.div(c||(c=Object(H.a)(["\n  margin-bottom: 24px;\n}\n"]))),je=function(){var e=Object(M.a)(),n=Object(J.c)().account,t=te().reduce((function(e,n){return e+new G.a(n).div(new G.a(10).pow(18)).toNumber()}),0),c=new G.a(t).multipliedBy(Object(ce.j)()).toNumber();return n?Object(ae.jsxs)(se,{children:[Object(ae.jsx)(ie,{value:t,lineHeight:"1.5"}),Object(ae.jsx)(oe,{value:c})]}):Object(ae.jsx)(F.Q,{fontSize:"36px",color:"text",style:{lineHeight:"76px"},children:e(298,"Locked")})},ue=t(901),be=t(82),le=function(){var e=Object(M.a)(),n=Object(ue.a)(Object(V.j)()),t=new $.BigNumber(Object(be.a)(n)).multipliedBy(Object(ce.j)()).toNumber();return Object(J.c)().account?Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(ie,{value:Object(be.a)(n),decimals:4,fontSize:"24px",lineHeight:"36px"}),Object(ae.jsx)(oe,{value:t})]}):Object(ae.jsx)(F.Q,{fontSize:"36px",color:"text",style:{lineHeight:"54px"},children:e(298,"Locked")})},de=Object(R.e)(F.k)(r||(r=Object(H.a)(["\n  background-image: url('/images/moon/cardbg.svg');\n  background-repeat: no-repeat;\n  min-height: 376px;\n"]))),Oe=Object(R.e)(ne.a)(a||(a=Object(H.a)(["\n\n  background: ",";\n  color: #ffffff;\n  width: 100%;\n  border-radius: 7px;\n"])),(function(e){return e.theme.colors.button})),pe=R.e.div(i||(i=Object(H.a)(["\n  margin-bottom: 16px;\n"]))),xe=R.e.img(o||(o=Object(H.a)(["\n  margin-bottom: 16px;\n"]))),fe=R.e.div(s||(s=Object(H.a)(["\n  color: ",";\n  font-size: 18px;\n"])),(function(e){return e.theme.colors.textDisabled})),me=R.e.div(j||(j=Object(H.a)(["\n  margin-top: 24px;\n"]))),ge=function(){var e=Object(P.useState)(!1),n=Object(I.a)(e,2),t=n[0],c=n[1],r=Object(J.c)().account,a=Object(M.a)(),i=ee().filter((function(e){return e.balance.toNumber()>0})),o=Object(q.a)(i.map((function(e){return e.pid}))).onReward,s=Object(P.useCallback)(Object(A.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,o();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[o]);return Object(ae.jsx)(de,{children:Object(ae.jsxs)(F.l,{children:[Object(ae.jsx)(F.v,{size:"xl",mb:"24px",children:a(542,"Farms & Staking")}),Object(ae.jsx)(xe,{src:"/images/moon/wings.svg",alt:"wings logo",width:64,height:64}),Object(ae.jsxs)(pe,{children:[Object(ae.jsxs)(fe,{children:[a(544,"pDUST to Harvest"),":"]}),Object(ae.jsx)(je,{})]}),Object(ae.jsxs)(pe,{children:[Object(ae.jsxs)(fe,{children:[a(546,"pDUST in Wallet"),":"]}),Object(ae.jsx)(le,{})]}),Object(ae.jsx)(me,{children:r?Object(ae.jsx)(F.g,{id:"harvest-all",disabled:i.length<=0||t,onClick:s,width:"100%",children:t?a(548,"Collecting pDUST"):a(532,"Harvest all (".concat(i.length,")"),{count:i.length})}):Object(ae.jsx)(Oe,{width:"100%"})})]})})},he=Object(R.e)(F.k)(u||(u=Object(H.a)(["\n  background-image: url('/images/moon/bg2.svg');\n  background-repeat: no-repeat;\n  background-position: bottom right;\n  min-height: 376px;\n"]))),ve=R.e.div(b||(b=Object(H.a)(["\n  margin-bottom: 16px;\n"]))),we=R.e.img(l||(l=Object(H.a)(["\n  margin-bottom: 16px;\n"]))),ye=function(){var e=Object(M.a)(),n=Object(ue.c)(),t=Object(be.a)(Object(ue.b)(Object(V.j)())),c=n?Object(be.a)(n)-t:0;return Object(ae.jsx)(he,{children:Object(ae.jsxs)(F.l,{children:[Object(ae.jsx)(F.v,{size:"xl",mb:"24px",children:e(534,"pDUST Stats")}),Object(ae.jsx)(we,{src:"/images/moon/wings.svg",alt:"wings logo",width:64,height:64}),Object(ae.jsxs)(ve,{children:[c&&Object(ae.jsx)(ie,{fontSize:"36px",value:c}),Object(ae.jsx)(F.Q,{fontSize:"14px",color:"#808080",children:e(536,"Total pDUST Supply")})]}),Object(ae.jsxs)(ve,{children:[Object(ae.jsx)(ie,{fontSize:"36px",decimals:0,value:t}),Object(ae.jsx)(F.Q,{fontSize:"14px",color:"#808080",children:e(538,"Total pDUST Burned")})]}),Object(ae.jsxs)(ve,{children:[Object(ae.jsx)(ie,{fontSize:"36px",decimals:0,value:25}),Object(ae.jsx)(F.Q,{fontSize:"14px",color:"#808080",children:e(540,"New pDUST/block")})]})]})})},ke=t(973),Se=t.n(ke),ze=t(77),Qe=t(272),Te=Object(R.e)(F.k)(d||(d=Object(H.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),De=Object(R.e)(F.v).attrs({size:"lg"})(O||(O=Object(H.a)(["\n  line-height: 44px;\n  Width: 75%;\n  color: ","\n"])),(function(e){return e.theme.colors.extra})),Ce=R.e.div(p||(p=Object(H.a)(["\n  background: #3D2C8D;\n  margin-top: -50px;\n  width: 59px;\n  height: 59px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n"]))),Ue=function(){var e=Object(M.a)(),n=Object(ce.d)(),t=Object(ce.h)(),c=Object(ce.j)(),r=Object(P.useMemo)((function(){var e=n.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})).map((function(e){if(e.lpTotalInQuoteToken&&t){var n=t[e.quoteToken.symbol.toLowerCase()],r=new G.a(e.lpTotalInQuoteToken).times(n);return Object(Qe.a)(e.poolWeight,c,r)}return null})),r=Se()(e);return null===r||void 0===r?void 0:r.toLocaleString("en-US",{maximumFractionDigits:2})}),[c,n,t]);return Object(ae.jsx)(Te,{children:Object(ae.jsxs)(F.l,{children:[Object(ae.jsx)(F.v,{color:"text",size:"lg",children:"Earn up to"}),Object(ae.jsx)(De,{children:r?"".concat(r,"% ").concat(e(736,"APR")):Object(ae.jsx)(F.N,{animation:"pulse",variant:"rect",height:"44px"})}),Object(ae.jsxs)(F.u,{justifyContent:"space-between",children:[Object(ae.jsx)(F.v,{color:"text",size:"lg",children:"in Farms"}),Object(ae.jsx)(ze.b,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apy-cta",children:Object(ae.jsx)(Ce,{children:Object(ae.jsx)(F.c,{color:"#000000"})})})]})]})})},Ee=t(187),Ne=t.n(Ee),He=t(67),Pe=Object(R.e)(F.k)(x||(x=Object(H.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Re=Object(R.e)(F.v).attrs({size:"xl"})(f||(f=Object(H.a)(["\n  line-height: 44px;\n"]))),Fe=R.e.div(m||(m=Object(H.a)(["\n  background: #FEC803;\n  margin-top: -50px;\n  width: 59px;\n  height: 59px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n"]))),Me=function(){var e=He.a.filter((function(e){return!e.isFinished&&!e.earningToken.symbol.includes("pDUST")})),n=(Ne()(e,["sortOrder","pid"],["desc","desc"]).slice(0,3),["pDUST"].join(", "));return Object(ae.jsx)(Pe,{children:Object(ae.jsxs)(F.l,{children:[Object(ae.jsx)(F.v,{color:"text",size:"lg",children:"Earn"}),Object(ae.jsx)(Re,{color:"extra",children:n}),Object(ae.jsxs)(F.u,{justifyContent:"space-between",children:[Object(ae.jsx)(F.v,{color:"text",size:"lg",children:"in Pools"}),Object(ae.jsx)(ze.b,{exact:!0,activeClassName:"active",to:"/syrup",id:"pool-cta",children:Object(ae.jsx)(Fe,{children:Object(ae.jsx)(F.c,{color:"#000000"})})})]})]})})},We=Object(R.f)(g||(g=Object(H.a)(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"]))),Be=R.e.div(h||(h=Object(H.a)(["\n\n  display: none;\n\n  "," {\n    display:block;\n    background-image: url('/images/moon/jetbg.svg');\n\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Le=R.e.img(v||(v=Object(H.a)(["\n  animation: "," 4s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])),We),Ae=function(){return Object(ae.jsx)(Be,{children:Object(ae.jsx)(Le,{src:"/images/moon/jet1.png",alt:"jet"})})},Ie=Object(R.f)(w||(w=Object(H.a)(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"]))),Je=R.e.div(y||(y=Object(H.a)(["\n\n  display: none;\n\n  "," {\n    display:block;\n    background-image: url('/images/moon/jetbg.svg');\n    background-repeat: no-repeat;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),qe=R.e.img(k||(k=Object(H.a)(["\n  animation: "," 4s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])),Ie),Xe=function(){return Object(ae.jsx)(Je,{children:Object(ae.jsx)(qe,{src:"/images/moon/jet2.png",alt:"jet"})})},$e=Object(R.f)(S||(S=Object(H.a)(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"]))),Ge=R.e.div(z||(z=Object(H.a)(["\n  display:block;\n  background-image: url('/images/moon/jetbg.svg');\n  padding-bottom: 30px;\n  "," {\n\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ke=R.e.img(Q||(Q=Object(H.a)(["\n  animation: "," 4s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])),$e),Ve=function(){return Object(ae.jsx)(Ge,{children:Object(ae.jsx)(Ke,{src:"/images/moon/jet1.png",alt:"jet"})})},Ye=R.e.div(T||(T=Object(H.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  text-align: center;\n\n  "," {\n    padding-top: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ze=Object(R.e)(F.e)(D||(D=Object(H.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),_e=Object(R.e)(F.e)(C||(C=Object(H.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),en=R.e.div(U||(U=Object(H.a)(["\n  width: 100%;\n  background-image: url('/images/jet/bg5.svg');\n\n  background-repeat: no-repeat;\n  background-position: center center;\n"]))),nn=R.e.div(E||(E=Object(H.a)(["\n  display: flex;\n"]))),tn=R.e.div(N||(N=Object(H.a)([""]))),cn=function(){var e=Object(M.a)();return Object(ae.jsx)(en,{children:Object(ae.jsxs)(W.a,{children:[Object(ae.jsxs)(Ye,{children:[Object(ae.jsx)(Ve,{}),Object(ae.jsxs)(nn,{children:[Object(ae.jsx)(Ae,{}),Object(ae.jsxs)(tn,{children:[Object(ae.jsx)(F.v,{as:"h1",size:"xl",mb:"24px",color:"text",children:e(576,"Polygon MoonWalkerSwap")}),Object(ae.jsx)(F.Q,{children:e(578,"The Newest AMM and yield farm on Polygon Chain.")})]}),Object(ae.jsx)(Xe,{})]})]}),Object(ae.jsxs)("div",{children:[Object(ae.jsxs)(Ze,{children:[Object(ae.jsx)(ge,{}),Object(ae.jsx)(ye,{})]}),Object(ae.jsxs)(_e,{children:[Object(ae.jsx)(Ue,{}),Object(ae.jsx)(Me,{})]})]})]})})}},901:function(e,n,t){"use strict";t.d(n,"c",(function(){return O})),t.d(n,"b",(function(){return p}));var c=t(2),r=t.n(c),a=t(13),i=t(24),o=t(0),s=t(14),j=t.n(s),u=t(28),b=t(61),l=t(73),d=t(157),O=function(){var e=Object(d.a)().slowRefresh,n=Object(o.useState)(),t=Object(i.a)(n,2),c=t[0],s=t[1];return Object(o.useEffect)((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var n,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(b.j)(),e.next=3,n.methods.totalSupply().call();case 3:t=e.sent,s(new j.a(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},p=function(e){var n=Object(o.useState)(new j.a(0)),t=Object(i.a)(n,2),c=t[0],s=t[1],u=Object(d.a)().slowRefresh,O=Object(l.a)();return Object(o.useEffect)((function(){var n=function(){var n=Object(a.a)(r.a.mark((function n(){var t,c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object(b.d)(e,O),n.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:c=n.sent,s(new j.a(c));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[O,e,u]),c};n.a=function(e){var n=Object(o.useState)(new j.a(0)),t=Object(i.a)(n,2),c=t[0],s=t[1],O=Object(u.c)().account,p=Object(l.a)(),x=Object(d.a)().fastRefresh;return Object(o.useEffect)((function(){var n=function(){var n=Object(a.a)(r.a.mark((function n(){var t,c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object(b.d)(e,p),n.next=3,t.methods.balanceOf(O).call();case 3:c=n.sent,s(new j.a(c));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();O&&n()}),[O,e,p,x]),c}},973:function(e,n,t){var c=t(974),r=t(975),a=t(269);e.exports=function(e){return e&&e.length?c(e,a,r):void 0}},974:function(e,n,t){var c=t(139);e.exports=function(e,n,t){for(var r=-1,a=e.length;++r<a;){var i=e[r],o=n(i);if(null!=o&&(void 0===s?o===o&&!c(o):t(o,s)))var s=o,j=i}return j}},975:function(e,n){e.exports=function(e,n){return e>n}}}]);
//# sourceMappingURL=8.c23cd359.chunk.js.map
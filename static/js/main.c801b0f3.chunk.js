(this["webpackJsonpconverter-react"]=this["webpackJsonpconverter-react"]||[]).push([[0],{22:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,s,l,u,d,b,j,x,p,g,f,O,h,v,m,y,F=t(1),C=t.n(F),L=t(12),k=t.n(L),S=(t(22),t(2)),N=t(3),w=N.b.section(r||(r=Object(S.a)(["\n    flex-basis: 400px;\n    margin: 30px;\n    text-align: center;\n    font-size: 20px;\n    color: #005857;\n    background-color: #FFF;\n    padding: 20px;\n    border-radius: 20px;\n    box-shadow: 0 0 10px 10px #00000099;\n    ","\n"])),(function(e){return e.hidden&&Object(N.a)(a||(a=Object(S.a)(["display: none;"])))})),P=N.b.h2(c||(c=Object(S.a)(["\n    padding: 0px;\n"]))),D=N.b.select(o||(o=Object(S.a)(["\n    font-family: 'Dela Gothic One', cursive;\n    width: 150px;\n    text-align: center;\n    border: #000 solid 2px;\n    border-radius: 10px;\n    padding: 10px;\n    background-color: #FFF;\n    color: #005857;\n    &:active {\n       background-color: #005857;\n        color: #FFF;\n    }\n    &:focus {\n        background-color: #005857;\n        color: #FFF;\n    }\n"]))),R=N.b.input(i||(i=Object(S.a)(["\n    font-family: 'Dela Gothic One', cursive;\n    width: 250px;\n    text-align: center;\n    border: #000 solid 2px;\n    border-radius: 10px;\n    padding: 10px;\n    background-color: #FFF;\n    color: #005857;\n    &:active {\n       background-color: #ebebeb;\n    }\n    &:focus {\n        background-color: #def0ef;\n        color: #000;\n    }\n"]))),U=N.b.button(s||(s=Object(S.a)(["\n    display: block;\n    font-size: 20px;\n    margin: 15px auto;\n    border: 2px solid;\n    border-radius: 10px;\n    padding: 7px;\n    color: #005857;\n    background-color: hsl(179, 100%, 98%);\n    transition: 0.3s;\n    &:hover {\n        background-color: hsl(179, 100%, 20%);\n        color: #FFF;\n        transform: scale(1.2);\n        cursor: pointer;\n    }\n"]))),V=N.b.label(l||(l=Object(S.a)(["\n    color: #FFF;\n    background-color: #005857;\n    font-size: 18px;\n    padding: 7px;\n    border-radius: 10px;\n    margin-left: 10px;\n"]))),z=N.b.section(u||(u=Object(S.a)(["\n    margin: 20px 0;\n    padding: 0px;\n"]))),I=t(4),A=N.b.div(d||(d=Object(S.a)(["\n\tfont-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n"]))),B=N.b.progress(b||(b=Object(S.a)(["\n\theight: 4px;\n    border: 0px;\n\t&[value]::-webkit-progress-value {\n\t\tbackground-color: teal;\n\t\tbackground-image:\n\t\t-webkit-linear-gradient(-45deg, \n\t\t\t\t\t\t\t\ttransparent 33%, rgba(0, 0, 0, .1) 33%, \n\t\t\t\t\t\t\t\trgba(0,0, 0, .1) 66%, transparent 66%),\n\t\t-webkit-linear-gradient(top, \n\t\t\t\t\t\t\t\trgba(255, 255, 255, .25), \n\t\t\t\t\t\t\t\trgba(0, 0, 0, .25)),\n\t\t-webkit-linear-gradient(left, #09c, #005857);\n\t}\n\t&[value]::-webkit-progress-bar {\n\t\tbackground-color: transparent;\n\t\tborder-radius: 2px;\n  \t}\n"]))),E=t(0),J=function(){var e=function(){var e=Object(F.useState)((new Date).toISOString()),n=Object(I.a)(e,2),t=n[0],r=n[1];return Object(F.useEffect)((function(){var e=setInterval((function(){r((new Date).toISOString())}),100);return function(){clearInterval(e)}}),[]),t}();return Object(E.jsxs)("section",{className:"clock",children:[Object(E.jsx)(A,{children:new Date(e).toLocaleString(void 0,{month:"long",weekday:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}),Object(E.jsx)(B,{value:new Date(e).getMilliseconds()+1e3*new Date(e).getSeconds(),max:"60000"})]})},G=t(17),H=function(e){var n=e.states,t=function(e,n){return Object(F.useEffect)((function(){e.setRate(n(e.currency)),e.setValueCUR(Number(e.valuePLN/e.rate).toFixed(2))}),[e.currency,e.rate]),{onChangeCurrency:function(n){e.setCurrency(n.target.value)},onValuePLNChange:function(n){e.setValueCUR(Number(n.target.value/e.rate).toFixed(2)),e.setValuePLN(Number(n.target.value))},onValueCURChange:function(n){e.setValueCUR(Number(n.target.value)),e.setValuePLN(Number(n.target.value*e.rate).toFixed(2))},save:function(n){n.preventDefault(),e.setSavedList([{valPLN:Number(e.valuePLN).toFixed(2),valCUR:Number(e.valueCUR).toFixed(2),id:e.savedList.length?e.savedList[0].id+1:0,code:e.currency,rate:e.rate,date:(new Date).toISOString()}].concat(Object(G.a)(e.savedList)))}}}(n,e.getBid),r=t.onChangeCurrency,a=t.onValuePLNChange,c=t.onValueCURChange,o=t.save;return Object(E.jsxs)(w,{children:[Object(E.jsx)(P,{children:"Converter"}),Object(E.jsx)(J,{}),Object(E.jsxs)("form",{onSubmit:o,children:[Object(E.jsxs)(z,{children:[Object(E.jsx)("label",{htmlFor:"currencyList",children:"Currency: "}),Object(E.jsx)(D,{onChange:r,id:"currencyList",children:n.currencyList.map((function(e,n){return Object(E.jsx)("option",{value:e.code,children:e.code},n)}))})]}),Object(E.jsxs)(z,{children:[Object(E.jsx)(R,{type:"number",step:"any",value:Number(n.valuePLN).toString(),onChange:a,min:"0",id:"valuePLN",autoFocus:!0}),Object(E.jsx)(V,{htmlFor:"valuePLN",children:"PLN"})]}),Object(E.jsxs)(z,{children:[Object(E.jsx)(R,{type:"number",step:"any",value:Number(n.valueCUR).toString(),onChange:c,min:"0",id:"currencyField"}),Object(E.jsx)(V,{htmlFor:"currencyField",children:n.currency})]}),Object(E.jsxs)(z,{children:[n.currency," rate: ",n.rate,Object(E.jsx)(U,{children:"Save"})]})]})]})},M=N.b.h1(j||(j=Object(S.a)(["\n    text-align: center;\n    color: #FFF;\n    text-shadow: 0 0 10px #000;\n"]))),T=function(){return Object(E.jsx)("header",{children:Object(E.jsx)(M,{children:"Currency Exchange"})})},q=N.b.section(x||(x=Object(S.a)(["\n    max-width: 98%;\n    flex-basis: 350px;\n    text-align: center;\n    font-size: 16px;\n    color: #005857;\n    background-color: #FFF;\n    padding: 20px;\n    border-radius: 20px;\n    box-shadow: 0 0 10px 10px #00000099;\n    margin-top: 30px;\n    margin-bottom: 50px;\n"]))),K=N.b.h2(p||(p=Object(S.a)(["\n    padding: 0 0 10px 0;\n    font-size: 30px;\n"]))),Q=N.b.ul(g||(g=Object(S.a)(["\n    list-style-type: none;\n    margin: auto;\n    padding: 0px;\n    overflow-y: auto;\n    max-height: 600px;\n"]))),W=N.b.li(f||(f=Object(S.a)(["\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: baseline;\n    color: #000;\n    border-bottom: 1px #CCC solid;\n    border-top: 1px #AAA solid;\n    padding: 7px;\n    margin: auto;\n    line-height: 2.3;\n    &:hover {\n        background-color: #def0ef;\n    }\n"]))),X=N.b.span(O||(O=Object(S.a)(["\n    color: #FFF;\n    background-color: #005857;\n    font-size: 12px;\n    padding: 5px;\n    border-radius: 10px;\n"]))),Y=N.b.span(h||(h=Object(S.a)(["\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 700;\n    font-size: 17px;\n"]))),Z=N.b.button(v||(v=Object(S.a)(["\n    color: rgb(92, 35, 35);\n    background-color: rgba(92, 35, 35, 0.219);\n    font-size: 15px;\n    padding: 8px;\n    border: none;\n    border-radius: 10px;\n    margin: 5px;\n    transition: 0.3s;\n    &:hover {\n        transform: scale(1.1);\n        cursor: pointer;\n        background-color: tomato;\n        color: #000;\n    }\n"]))),$=N.b.button(m||(m=Object(S.a)(["\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgb(92, 35, 35);\n    background-color: transparent;\n    font-size: 20px;\n    padding: 8px;\n    border: none;\n    border-radius: 10px;\n    margin: 5px;\n    transition: 0.3s;\n    &:hover {\n        transform: scale(1.1);\n        cursor: pointer;\n        color: #000;\n    }\n"]))),_=function(e){var n=e.savedList,t=e.setSavedList;return Object(E.jsxs)(q,{children:[Object(E.jsx)(K,{children:"Saved"}),n.length>0?Object(E.jsx)($,{onClick:function(){t([])},children:"Clear All"}):"",Object(E.jsx)(Q,{children:n.map((function(e){return Object(E.jsxs)(W,{title:Date(e.date)+" rate: "+e.rate,children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(Y,{children:e.valPLN}),"\xa0",Object(E.jsx)(X,{children:"PLN"}),"\xa0"]}),Object(E.jsx)("div",{children:"\xa0\u27a4\xa0"}),Object(E.jsxs)("div",{children:[Object(E.jsx)(Y,{children:e.valCUR}),"\xa0",Object(E.jsx)(X,{children:e.code}),"\xa0"]}),Object(E.jsx)("div",{children:Object(E.jsx)(Z,{onClick:function(){return n=e.id,void t((function(e){return e.filter((function(e){return e.id!==n}))}));var n},children:"\u2716"})})]},e.id)}))})]})},ee=t(10),ne=t.n(ee),te=t(16),re=function(){var e=function(e,n){var t=Object(F.useState)((function(){var t=localStorage.getItem(e);return null===t?n:JSON.parse(t)})),r=Object(I.a)(t,2),a=r[0],c=r[1];return Object(F.useEffect)((function(){localStorage.setItem(e,JSON.stringify(a))}),[a]),[a,c]}("savedList",[]),n=Object(I.a)(e,2),t=n[0],r=n[1],a=Object(F.useState)([{currency:"LOADING",code:"USD",bid:6.66,ask:6.66}]),c=Object(I.a)(a,2),o=c[0],i=c[1],s=Object(F.useState)(3.8551),l=Object(I.a)(s,2),u=l[0],d=l[1],b=Object(F.useState)("USD"),j=Object(I.a)(b,2),x=j[0],p=j[1],g=Object(F.useState)(1),f=Object(I.a)(g,2),O=f[0],h=f[1],v=Object(F.useState)(1),m=Object(I.a)(v,2);return{currencyList:o,setCurrencyList:i,rate:u,setRate:d,currency:x,setCurrency:p,valuePLN:O,setValuePLN:h,valueCUR:m[0],setValueCUR:m[1],savedList:t,setSavedList:r}},ae=N.b.div(y||(y=Object(S.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: flex-start;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n"])));var ce=function(){var e=re();return function(e){var n=Object(F.useState)(!1),t=Object(I.a)(n,2),r=t[0],a=t[1],c=Object(F.useCallback)(Object(te.a)(ne.a.mark((function n(){var t,c;return ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=23;break}return console.log("Connecting to NBP"),n.prev=2,n.next=5,fetch("https://api.nbp.pl/api/exchangerates/tables/C/?format=json");case 5:return t=n.sent,n.next=8,t.json();case 8:c=n.sent,console.log("Response received"),a(!0),e.setCurrencyList(c[0].rates),e.setCurrency(c[0].rates[0].code),e.setRate(c[0].rates[0].bid),e.setValuePLN(Number(e.rate).toFixed(2)),n.next=21;break;case 17:n.prev=17,n.t0=n.catch(2),console.log("Can't connect to NBP"),console.log(n.t0);case 21:n.next=24;break;case 23:return n.abrupt("return",null);case 24:case"end":return n.stop()}}),n,null,[[2,17]])}))),[]);Object(F.useEffect)((function(){c()}),[])}(e),Object(E.jsxs)("main",{children:[Object(E.jsx)(T,{}),Object(E.jsxs)(ae,{children:[Object(E.jsx)(H,{states:e,getBid:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"USD";return e.currencyList.filter((function(e){return e.code===n}))[0].bid}}),Object(E.jsx)(_,{savedList:e.savedList,setSavedList:e.setSavedList})]})]})},oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};k.a.render(Object(E.jsx)(C.a.StrictMode,{children:Object(E.jsx)(ce,{})}),document.getElementById("root")),oe()}},[[27,1,2]]]);
//# sourceMappingURL=main.c801b0f3.chunk.js.map
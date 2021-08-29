(this["webpackJsonpconverter-react"]=this["webpackJsonpconverter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(4),s=c.n(a),u=(c(9),c(2)),l=(c(10),c(0)),i=function(e){var t=e.data,c=function(e){e.preventDefault(),t.setValuePLN(Number(e.target.value).toFixed(2)),t.setValueCUR(Number(t.valuePLN/t.rate).toFixed(2))};return Object(l.jsxs)("section",{className:"converter",children:[Object(l.jsx)("h2",{className:"converter__header",children:"Converter"}),Object(l.jsxs)("form",{className:"converter__form",onSubmit:c,children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("label",{htmlFor:"currencyField",children:"Currency: "}),Object(l.jsx)("select",{onChange:function(e){t.setCurrency(e.target.value),t.setRate(t.getRate(e.target.value)),t.setValueCUR(Number(t.valuePLN/t.rate).toFixed(2))},id:"currencyList",className:"converter__select",children:t.currencyList.map((function(e,t){return Object(l.jsx)("option",{value:e.code,children:e.code},t)}))})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("input",{type:"number",value:t.valuePLN,onChange:c,min:"0",pattern:"^\\d{1,6}(\\.\\d{1,2})?$",id:"valuePLN",className:"converter__field",autoFocus:!0}),Object(l.jsx)("label",{htmlFor:"valuePLN",children:"PLN"})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("input",{type:"number",value:t.valueCUR,onChange:function(e){t.setValueCUR(Number(e.target.value).toFixed(2)),t.setValuePLN(Number(t.valueCUR*t.rate).toFixed(2))},min:"0",pattern:"^\\d{1,6}((\\.|\\,)\\d{1,2})?$",id:"currencyField",className:"converter__field"}),Object(l.jsx)("label",{htmlFor:"currencyField",children:t.currency})]}),Object(l.jsxs)("p",{className:"converter__paragraph",children:[t.currency," rate: ",Object(l.jsx)("span",{className:"converter__rate",children:t.rate})]})]})]})},o=(c(12),function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{className:"header__header",children:"Currency Exchange"})})});var j=function(){var e=Object(r.useState)([{currency:"loading",code:"LOADING",bid:6.66,ask:6.66}]),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(3.8551),s=Object(u.a)(a,2),j=s[0],d=s[1],b=Object(r.useState)("LOADING"),h=Object(u.a)(b,2),v=h[0],O=h[1],f=Object(r.useState)("1.00"),m=Object(u.a)(f,2),x=m[0],N=m[1],p=Object(r.useState)("1.00"),g=Object(u.a)(p,2),C=g[0],y=g[1],L={currency:v,setCurrency:O,valuePLN:x,setValuePLN:N,valueCUR:C,setValueCUR:y,rate:j,setRate:d,currencyList:c,setCurrencyList:n,getRate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"USD";return c.filter((function(t){return t.code===e}))[0].bid}};return Object(r.useEffect)((function(){fetch("https://api.nbp.pl/api/exchangerates/tables/C/?format=json").then((function(e){return e.json()})).then((function(e){n(e[0].rates),O(e[0].rates[0].code),d(e[0].rates[0].bid),y(j)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsxs)("main",{children:[Object(l.jsx)(o,{}),Object(l.jsx)(i,{data:L})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),d()}],[[13,1,2]]]);
//# sourceMappingURL=main.907806f4.chunk.js.map
(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),i=n.n(r),s=(n(9),n(3)),d=n(0),o="0d519582a81e3c895d9fe7e57e93587b",h="http://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),i=Object(s.a)(r,2),u=i[0],l=i[1],j=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a," ").concat(c)};return Object(d.jsx)("div",{className:"undefined"!=typeof u.main?u.main.temp<5?"weather-app":"Rain"===u.weather[0].main?"rain":"Clouds"===u.weather[0].main?"clouds":"Sunny"===u.weather[0].main?"warm":"Clear"===u.weather[0].main?"clear":"Mist"===u.weather[0].main?"mist":"undefined":"undefined",children:Object(d.jsxs)("main",{children:[Object(d.jsx)("div",{className:"search-bar",children:Object(d.jsx)("input",{type:"text",className:"search-box",placeholder:"Search...",onChange:function(e){return c(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(h,"weather?q=").concat(n,"&units=metric&APPID=").concat(o)).then((function(e){return e.json()})).then((function(e){c(""),l(e)})).catch((function(e){console.warn("Something went wrong.",e)}))}})}),"undefined"!=typeof u.main?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"location-box",children:[Object(d.jsxs)("div",{className:"location",children:[u.name,", ",u.sys.country]}),Object(d.jsx)("div",{className:"date",children:j(new Date)})]}),Object(d.jsxs)("div",{className:"weather-box",children:[Object(d.jsxs)("div",{className:"temp",children:[Math.round(u.main.temp),"\xb0c"]}),Object(d.jsx)("div",{className:"weather",children:u.weather[0].main})]})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"WELCOME TO THE WEATHER APP"})}),Object(d.jsx)("div",{className:"date",children:j(new Date)})]})]})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.211b5c74.chunk.js.map
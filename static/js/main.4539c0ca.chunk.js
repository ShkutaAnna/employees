(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),i=n.n(c),a=n(5),r=n.n(a),l=(n(11),n(2)),o=(n(12),n(4));var u=function(e){var t=Object(c.useContext)(b),n=Object(c.useState)({id:e.id,firstName:e.firstName,lastName:e.lastName,isSelected:e.isSelected}),i=Object(l.a)(n,2),a=i[0],r=i[1];return Object(s.jsxs)("div",{className:"inline",children:[a.lastName+" "+a.firstName,Object(s.jsx)("input",{type:"checkbox",checked:a.isSelected,onChange:function(){r((function(e){return Object(o.a)(Object(o.a)({},e),{},{isSelected:!a.isSelected})})),t.setEmployees((function(e){return e.find((function(e){return e.id===a.id})).isSelected=!e.find((function(e){return e.id===a.id})).isSelected,window.sessionStorage.setItem("0",JSON.stringify(e)),e})),t.setSelectedEmployees(t.employees.filter((function(e){return e.isSelected})))}})]})};var d=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),t=Object(c.useContext)(b);return Object(s.jsx)("div",{className:"App",children:e.map((function(e){var n=t.employees.filter((function(t){return t.lastName[0]===e}));return Object(s.jsxs)("div",{className:"ListOfEmployees",children:[Object(s.jsx)("h3",{children:e}),n.length>0?n.map((function(e){return Object(s.jsx)(u,{id:e.id,firstName:e.firstName,lastName:e.lastName,isSelected:e.isSelected},e.id)})):Object(s.jsx)("span",{children:"____________"})]})}))})};var m=function(e){Object(c.useContext)(b);var t=Object(c.useState)({id:e.id,firstName:e.firstName,lastName:e.lastName,bdate:e.bdate}),n=Object(l.a)(t,2),i=n[0],a=(n[1],new Date(i.bdate));return Object(s.jsx)("div",{className:"inline",children:i.lastName+" "+i.firstName+" - "+a.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]+", "+a.getFullYear()+" year"})};var j=function(){var e=Object(c.useContext)(b);return Object(c.useEffect)((function(){}),e.selectedEmployees),Object(s.jsx)("div",{className:"BDaysBlock",children:e.employees.filter((function(e){return e.isSelected})).length>0?Object(s.jsx)("div",{children:["January","February","March","April","May","June","July","August","September","October","November","December"].map((function(t,n){var c=e.employees.filter((function(e){return e.isSelected})).filter((function(e){return new Date(e.dob).getMonth()===n}));return c.length>0?Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:t}),c.map((function(e){return Object(s.jsx)(m,{id:e.id,firstName:e.firstName,lastName:e.lastName,bdate:e.dob},e.id)}))]}):null}))}):Object(s.jsx)("span",{children:"No selected employees"})})},b=i.a.createContext();var f=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),r=Object(l.a)(a,2),o=r[0],u=r[1],m={employees:n,setEmployees:i,selectedEmployees:o,setSelectedEmployees:u};return Object(c.useEffect)((function(){null!==window.sessionStorage.getItem("0")?i(JSON.parse(window.sessionStorage.getItem("0"))):fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.json()})).then((function(e){e.forEach((function(e){e.isSelected=!1})),e.sort((function(e,t){return e.lastName>t.lastName?1:-1})),i(e)}))}),[]),Object(s.jsx)(b.Provider,{value:m,children:Object(s.jsxs)("div",{className:"Container",children:[Object(s.jsxs)("div",{className:"LeftBlock",children:[Object(s.jsx)("h2",{children:"Employees"}),Object(s.jsx)(d,{})]}),Object(s.jsxs)("div",{className:"RightBlock",children:[Object(s.jsx)("h2",{children:"Employees birthday"}),Object(s.jsx)(j,{})]})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),i(e),a(e)}))};r.a.render(Object(s.jsx)(f,{}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.4539c0ca.chunk.js.map
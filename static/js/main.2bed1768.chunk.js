(window.webpackJsonp1=window.webpackJsonp1||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(4),o=n.n(a),u=n(1),f=n(2);n(10);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}var s=function(e){var t=e.model,n=Object(c.useState)({}),a=Object(u.a)(n,2),o=a[0],s=a[1];Object(c.useEffect)((function(){t(o)}),[o]);return r.a.createElement("ol",{className:"facts"},["\u041f\u0440\u0438\u0448\u043b\u043e \u043f\u0438\u0441\u044c\u043c\u043e","\u041f\u0438\u0441\u044c\u043c\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0442\u0432\u0435\u0442\u043e\u043c \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0435","\u041f\u0438\u0441\u044c\u043c\u043e \u043e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u0437 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430","\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d \u043d\u0430 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443","\u041f\u0438\u0441\u044c\u043c\u043e \u043e\u0442 \u0441\u043f\u0430\u043c\u0435\u0440\u0430","\u041f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437","\u041f\u0438\u0441\u044c\u043c\u043e \u043e \u0432\u044b\u0438\u0433\u0440\u044b\u0448\u0435 \u0432 \u043b\u043e\u0442\u0435\u0440\u0435\u0435","\u0412 \u043f\u0438\u0441\u044c\u043c\u0435 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u044e\u0442 \u0447\u0442\u043e-\u0442\u043e \u043a\u0443\u043f\u0438\u0442\u044c","\u0412 \u043f\u0438\u0441\u044c\u043c\u0435 \u0441\u0441\u044b\u043b\u043a\u0430","\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u0435\u043d \u043f\u043e\u0434\u043e\u0437\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"].map((function(e,t){return r.a.createElement("li",{key:t,className:"fact"},r.a.createElement("input",{type:"checkbox",id:"fact".concat(t),onChange:function(e){s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,Object(f.a)({},e.target.id,e.target.checked)))}}),r.a.createElement("label",{htmlFor:"fact".concat(t)},e))})))},l=function(e){var t=e.actions;return r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},e)})))};n(11);var p=function(){var e=Object(c.useState)(["No actions"]),t=Object(u.a)(e,2),n=t[0],a=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{model:function(e){var t=[];if(console.log(e),e.fact0)return e.fact1||e.fact2?(t.push("\u041d\u0435 \u0441\u043f\u0430\u043c"),void a(t)):e.fact4?(t.push("\u041f\u0438\u0441\u044c\u043c\u043e \u043e\u0442 \u0441\u043f\u0430\u043c\u0435\u0440\u0430 - \u0436\u0430\u043b\u043e\u0431\u0430 \u043d\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044f..."),e.fact3?(t.push("\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443: \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"),t.push("\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0438")):t.push("\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443: \u043d\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"),t.push("\u0421\u043f\u0430\u043c"),void a(t)):e.fact5||e.fact6||e.fact7||e.fact8||e.fact9?(t.push("\u041f\u043e\u0434\u043e\u0437\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u0438\u0441\u044c\u043c\u043e - \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044f..."),e.fact3?(t.push("\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443: \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"),t.push("\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0438")):t.push("\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443: \u043d\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"),t.push("\u0421\u043f\u0430\u043c"),void a(t)):void a(["\u041d\u0435 \u0441\u043f\u0430\u043c"]);a(["\u041f\u0438\u0441\u044c\u043c\u043e \u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e"])}}),r.a.createElement(l,{actions:n}))};o.a.render(r.a.createElement(p,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.2bed1768.chunk.js.map
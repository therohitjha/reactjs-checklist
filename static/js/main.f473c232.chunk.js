(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(3),r=n.n(a),c=n(4),s=n(5),u=n(7),d=n(6),l=n(1),m=n(8),f=[{id:1,destination:"Goa",done:!1},{id:2,destination:"Vaishnav Devi",done:!1},{id:3,destination:"Nainitaal",done:!1},{id:4,destination:"Mumbai",done:!1}];n(15);var h=function(t){return o.a.createElement("div",{className:"style"},o.a.createElement("input",{type:"checkbox",onChange:function(){return t.Destination(t.item.id)}}),o.a.createElement("p",{style:t.item.done?{fontStyle:"italic",color:"red",textDecoration:"line-through"}:null},t.item.destination))},p=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(d.a)(e).call(this))).state={togo:f},t.Destination=t.Destination.bind(Object(l.a)(t)),t}return Object(m.a)(e,t),Object(s.a)(e,[{key:"Destination",value:function(t){this.setState(function(e){return{togo:e.togo.map(function(e){return e.id===t&&(e.done=!e.done),e})}})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,this.state.togo.map(function(e){return o.a.createElement(h,{key:e.id,item:e,Destination:t.Destination})}))}}]),e}(i.Component);r.a.render(o.a.createElement(p,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f473c232.chunk.js.map
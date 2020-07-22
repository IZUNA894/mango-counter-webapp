(this["webpackJsonpmango-counter"]=this["webpackJsonpmango-counter"]||[]).push([[0],{19:function(e,t,a){e.exports={cBrandLogo:"navbar_cBrandLogo__31tGM",icon:"navbar_icon__3ZDcF"}},20:function(e,t,a){e.exports={cRow:"add_cRow__1V_-M",cBtn:"add_cBtn__2L7rb"}},37:function(e,t,a){e.exports={cRow:"list_cRow__-i9IM"}},39:function(e,t,a){e.exports=a(68)},44:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(35),l=a.n(r),o=(a(44),a(6)),s=a(7),i=a(9),u=a(8),m=a(19),d=a.n(m),h=a(11),p=a(38),E=a(20),v=a.n(E),g=a(14),f=a.n(g),b=a(15),w=a.n(b),N=a(17),O=a.n(N),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log(n.state),w.a.post("/api/v1/records",Object(p.a)({},n.state)).then((function(e){if(console.log(e),201===e.status){f.a.toast({html:"Success",classes:"green accent-4 center-align"}),window.location.href="/"}})).catch((function(e){console.log(e)}))},n.handleDate=function(e){console.log(e),n.setState({date:e})},n.handleAmount=function(e){console.log(e.target.value),n.setState({amount:e.target.value})},n.handleDescription=function(e){console.log(e.target.value),n.setState({description:e.target.value})},n.state={date:Date.now(),amount:0,description:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelectorAll(".datepicker");f.a.Datepicker.init(t,{onSelect:function(t){console.log(t),e.handleDate(t)}})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"row ".concat(v.a.cRow)},c.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},c.a.createElement("h2",{className:"text-center center"},"ADD Amount"),c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{id:"date",type:"text",class:"datepicker",onChange:function(t){return e.handleDate(t)},value:O()(this.state.date).format("dddd , Do MMM YYYY")}),c.a.createElement("label",{htmlFor:"date"},"Date")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{id:"amount",type:"number",className:"validate",onChange:function(t){return e.handleAmount(t)}}),c.a.createElement("label",{htmlFor:"amount"},"Amount(kg)"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("textarea",{id:"description",className:"materialize-textarea",onChange:function(t){return e.handleDescription(t)}}),c.a.createElement("label",{htmlFor:"description"},"Description"))),c.a.createElement("button",{className:"btn ".concat(v.a.cBtn," waves-effect waves-light middle "),type:"submit",name:"action"},"Submit")))}}]),a}(n.Component),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(h.b,{to:"/",className:"brand-logo ".concat(d.a.cBrandLogo)},"MANGO's FARM",c.a.createElement("img",{className:"".concat(d.a.icon),src:"/mango.svg"})),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(h.b,{to:"/add"},"Add")),c.a.createElement("li",null,c.a.createElement(h.b,{to:"badges.html"},"Stats")),c.a.createElement("li",null,c.a.createElement(h.b,{to:"collapsible.html"},"Sign-In"))))))}}]),a}(n.Component),k=a(1),D=a(16),_=a.n(D),M=a(23),S=a(37),A=a.n(S),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"row center-align"},c.a.createElement("div",{className:"col s4"},c.a.createElement("div",{class:"card  darken-1"},c.a.createElement("div",{class:"card-content text-"},c.a.createElement("span",{class:"card-title"},"Quota"),c.a.createElement("p",null,this.props.quota)))),c.a.createElement("div",{className:"col s4"},c.a.createElement("div",{class:"card white darken-1"},c.a.createElement("div",{class:"card-content"},c.a.createElement("span",{class:"card-title"},"Brought"),c.a.createElement("p",null,this.props.brought)))),c.a.createElement("div",{className:"col s4"},c.a.createElement("div",{class:"card white darken-1"},c.a.createElement("div",{class:"card-content"},c.a.createElement("span",{class:"card-title"},"Remaining"),c.a.createElement("p",null,this.props.remaining)))))}}]),a}(n.Component),B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).deleteItem=function(){var e=Object(M.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.delete("/api/v1/records/".concat(t)).then((function(e){if(console.log(e),204===e.status){f.a.toast({html:"Success",classes:"green accent-4 center-align"}),window.location.href="/"}})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:"",quota:1e4,brought:0,remaining:0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(M.a)(_.a.mark((function e(){var t,a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("/api/v1/stats");case 3:t=(t=e.sent).data,console.log(t),a=0,1e4,t.data.forEach((function(e){return a+=e.sum})),console.log(JSON.stringify(a)),n=1e4-a,this.setState({remaining:n,quota:1e4,brought:a,data:t.data}),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=this.state.data,n="";return n=0===a.length?c.a.createElement("div",{className:""},c.a.createElement("p",{className:""},"No's Records for show.please Wait...or Add...")):a.map((function(a){var n=a.records&&a.records.map((function(t){return console.log(t),c.a.createElement("tr",null,c.a.createElement("td",null,O()(t.date).format("dddd , Do MMM YYYY")),c.a.createElement("td",null,t.amount),c.a.createElement("td",null,t.description),c.a.createElement("td",null,c.a.createElement("a",{href:"#",className:"waves-effect waves-light btn right",onClick:function(){e.deleteItem(t.id)}},"Delete")))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("thead",{className:"center-align",style:{float:"right"}},c.a.createElement("tr",{className:"center-align"},c.a.createElement("th",{className:"center middle-align"},"".concat(t[a._id.month-1],",").concat(a._id.year)))),n)})),c.a.createElement(c.a.Fragment,null,c.a.createElement(x,{quota:this.state.quota,remaining:this.state.remaining,brought:this.state.brought}),c.a.createElement("div",{className:"".concat(A.a.cRow," row center-align")},c.a.createElement("div",{className:"col s12"},c.a.createElement("h3",{className:"center-align"},"Mangoes Brought so far..."),c.a.createElement("table",{className:"centered highlight"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Date"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Description"))),c.a.createElement("tbody",null,n)))))}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k.c,null,c.a.createElement(k.a,{path:"/add"},c.a.createElement(y,null)),c.a.createElement(k.a,{path:"/"},c.a.createElement(B,null))))}}]),a}(n.Component),F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(j,null),c.a.createElement("div",{className:"container z-depth-5"},c.a.createElement(C,null)))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(h.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.d062ca9b.chunk.js.map
(this["webpackJsonpRemote-Job-Board-App"]=this["webpackJsonpRemote-Job-Board-App"]||[]).push([[0],{44:function(e,t,a){e.exports=a(72)},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=a(40),s=a(15),o=a(16),m=a(19),d=a(17),u=a(20),p=a(24),f=a.n(p),h=(a(53),a(92)),b=a(93),E=a(96),y=a(32),g=a.n(y),v=a(33),j=a.n(v),k=function(e){return r.a.createElement("div",null,e.payload.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"jobcard"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"jobcard_title"},t.company_logo?r.a.createElement("div",{className:"jobcard_title_img",style:{backgroundImage:"url(".concat(t.company_logo)}}):"",r.a.createElement("div",null,r.a.createElement("a",{href:t.url,target:"_blank"},r.a.createElement("h2",{className:"jobcard_position",key:t.position},t.position)),r.a.createElement("h3",{className:"jobcard_company",key:t.company},t.company),r.a.createElement("h5",{key:t.date},j()(t.date).fromNow()))),r.a.createElement("p",{className:"jobcard_description",key:t.description},g()(t.description.replace(/[^a-zA-Z0-9]/g," "))+"..."),r.a.createElement("ul",{className:"jobcard_list"},t.tags.map((function(t,a){return r.a.createElement("button",{disabled:!0,className:"jobcard_tag",key:t+a,onClick:e.filterList},t)}))),r.a.createElement("div",{className:"jobcard_buttons"},r.a.createElement("a",{key:t.url,href:t.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,{className:"jobcard_btn"},"Full Description")),r.a.createElement("a",{key:t.url[a],href:"https://remoteok.io/l/".concat(t.id),target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,{className:"jobcard_btn"},"Apply!"))))))})))},N=a(35),_=a(39),O=a(4),w=a(90),x=a(95),L=a(94),S=a(38),J=a.n(S),F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleFilter=function(e){e.preventDefault();var t=e.target.value.toLowerCase();a.props.filterList(t)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.tags.map((function(t,a){return r.a.createElement("li",{className:"allfilters_list_item",key:a},r.a.createElement("button",{className:"allfilters_list_item_btn btn",key:a,value:t,onClick:e.handleFilter},t))})))}}]),t}(r.a.Component),A=Object(w.a)((function(e){return{expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),I=function(e){var t=A(),a=r.a.useState(!1),n=Object(_.a)(a,2),l=n[0],c=n[1],i=window.innerWidth>960;return r.a.createElement("div",{className:"allfilters"},r.a.createElement("div",{className:"icon_container"},r.a.createElement("p",null,"Toggle Filters"),r.a.createElement(L.a,{className:Object(O.a)(t.expand,Object(N.a)({},t.expandOpen,l)),onClick:function(){c(!l)},"aria-expanded":l,"aria-label":"show more"},r.a.createElement(J.a,{fontSize:"large"}))),r.a.createElement(x.a,{in:i,timeout:"auto",unmountOnExit:!0},r.a.createElement("ul",{className:"allfilters_list"},r.a.createElement(F,{key:e.index,tags:e.tags,filterList:e.filterList}))))},C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:void 0},a.handleTextInput=function(e){e.preventDefault();var t=e.target.elements.text.value.trim();""===t?a.setState({error:!0}):a.props.filterList(t)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"textfilter_form",onSubmit:this.handleTextInput},r.a.createElement("input",{className:"textfilter_input",name:"text",type:"text"}),r.a.createElement(E.a,{className:"textfilter_btn"},"Search")))}}]),t}(r.a.Component),B=a.p+"static/media/remote-banner.4a22bd7c.jpg",D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={payload:[],filters:[],filterSelect:"",tags:[],noJobs:void 0,loaded:!0,limit:20,selectedFilters:[]},a.selectedFilters=function(e){a.setState({selectedFilters:a.state.selectedFilters.concat(e)})},a.filterList=function(e,t){var n=a.state.initialPayload,r=[];(e||""!=t)&&(a.selectedFilters(e),n.forEach((function(t){t.tags.forEach((function(a){-1!=a.toLowerCase().indexOf(e)&&r.push(t)}))})),a.setState({payload:r,noJobs:!1}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://remoteok.io/api").then((function(e){return e.json()})).then((function(t){var a=t.filter((function(e){return e!==t[0]})),n=[];a.forEach((function(e){n.push(e.tags)}));var r=[].concat.apply([],n);n=Object(i.a)(new Set(r)),e.setState({tags:n,initialPayload:a,payload:a,filters:["JavaScript","PHP","Wordpress","Front End","Backend","All Jobs"],loaded:!0})})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header",style:{backgroundImage:"url(".concat(B,")")}},r.a.createElement(h.a,{maxWidth:"md"},r.a.createElement(f.a,{delay:1e3},r.a.createElement("h1",{className:"home_title"},"Remote Job Board"),r.a.createElement("h2",{className:"sub_title"},"Work From Anywhere In The World")))),r.a.createElement(h.a,{maxWidth:"lg",spacing:4,className:"main_container"},r.a.createElement(f.a,{wait:1500,delay:1e3},r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(b.a,{item:!0,md:4,lg:3,style:{width:"100%"}},r.a.createElement(I,{tags:this.state.tags,filterList:this.filterList})),r.a.createElement(b.a,{item:!0,md:8,lg:9},r.a.createElement(C,{filterList:this.filterList}),this.state.noJobs?r.a.createElement("p",{className:"errormessage"},"There Are No Jobs That Match :("):"",this.state.loaded?r.a.createElement(k,{limit:this.state.limit,isLoaded:this.state.loaded,noJobs:this.state.noJobs,payload:this.state.payload,filterList:this.filterList}):r.a.createElement("center",null,r.a.createElement("iframe",{src:"https://giphy.com/embed/IwSG1QKOwDjQk",width:"480",height:"480",frameBorder:"0",className:"giphy-embed",allowFullScreen:!0}),r.a.createElement("p",null,r.a.createElement("a",{href:"https://giphy.com/gifs/wait-IwSG1QKOwDjQk"},"via GIPHY"))))))))}}]),t}(r.a.Component),T=(a(70),a(71),r.a.createElement(D,null));c.a.render(T,document.getElementById("app"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ef3f9328.chunk.js.map
(this["webpackJsonpreact-element-admin-typescript"]=this["webpackJsonpreact-element-admin-typescript"]||[]).push([[0],{114:function(e,t,a){e.exports={siderMenu:"SideMenu_siderMenu__3tJ5F"}},167:function(e,t,a){e.exports={icon:"Icon_icon__K6tBV"}},169:function(e,t,a){e.exports={tree:"Tree_tree__vcTzw"}},171:function(e,t,a){e.exports=a(461)},176:function(e,t,a){},178:function(e,t,a){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},179:function(e,t,a){},461:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchArticles",(function(){return k}));var r={};a.r(r),a.d(r,"login",(function(){return _})),a.d(r,"loginByToken",(function(){return C})),a.d(r,"fetchUserInfo",(function(){return x}));var o={};a.r(o),a.d(o,"app",(function(){return vt})),a.d(o,"auth",(function(){return gt})),a.d(o,"demo",(function(){return yt}));var i=a(1),l=a.n(i),c=a(14),u=a.n(c),s=(a(176),a(21)),p=(a(177),a(178),a(179),a(8)),m=a(120),d=a(72),h=a(162),f=a(115),b=a(163),v={route:{dashboard:"\u9996\u9875",example:"\u793a\u4f8b",table:"\u8868\u683c",tree:"\u6811",form:"\u8868\u5355",nested:"\u5d4c\u5957","lvl1-A":"\u5c42\u7ea71-A","lvl1-B":"\u5c42\u7ea71-B","lvl2-A":"\u5c42\u7ea72-A","lvl2-B":"\u5c42\u7ea72-B","lvl2-C":"\u5c42\u7ea72-C","lvl3-A":"\u5c42\u7ea73-A","lvl3-B":"\u5c42\u7ea73-B",dynamic:"\u52a8\u6001",dynamicIndex:"\u52a8\u6001\u83dc\u5355\u9879",adminOnly:"\u4ec5\u7ba1\u7406\u5458\u53ef\u89c1",roleAOnly:"\u4ec5\u89d2\u8272A\u53ef\u89c1"},navMenu:{home:"\u9996\u9875",logout:"\u9000\u51fa\u767b\u5f55"},tableView:{table:{header:{id:"ID",title:"\u6807\u9898",author:"\u4f5c\u8005",views:"\u9605\u8bfb\u6570",status:"\u72b6\u6001",datetime:"\u65f6\u95f4"}}},loginView:{login:"\u767b\u5f55",message:{loginOK:"\u767b\u5f55\u6210\u529f\uff01",loginNG:"\u767b\u5f55\u5931\u8d25!"}},formView:{form:{name:"\u6d3b\u52a8\u540d\u79f0",zone:"\u6d3b\u52a8\u533a\u57df",datetime:"\u6d3b\u52a8\u65f6\u95f4",datetime_date_placeholder:"\u8bf7\u9009\u62e9\u6d3b\u52a8\u65e5\u671f",datetime_time_placeholder:"\u8bf7\u9009\u62e9\u6d3b\u52a8\u65f6\u95f4",delivery:"\u5373\u65f6\u914d\u9001",type:"\u6d3b\u52a8\u6027\u8d28",type_online:"\u7f8e\u98df/\u9910\u5385\u7ebf\u4e0a\u6d3b\u52a8",type_promotion:"\u5730\u63a8\u6d3b\u52a8",type_offline:"\u7ebf\u4e0b\u4e3b\u9898\u6d3b\u52a8",type_brand:"\u5355\u7eaf\u54c1\u724c\u66dd\u5149",resource:"\u6d3b\u52a8\u8d44\u6e90",resource_sponsor:"\u7ebf\u4e0a\u54c1\u724c\u5546\u8d5e\u52a9",resource_venue:"\u7ebf\u4e0b\u573a\u5730\u514d\u8d39",detail:"\u6d3b\u52a8\u5f62\u5f0f"},message:{submitted:"\u63d0\u4ea4\u6210\u529f!",nameRequired:"\u8bf7\u586b\u5199\u6d3b\u52a8\u540d\u79f0"}},common:{language:"\u8bed\u8a00",btn:{reset:"\u91cd\u7f6e",cancel:"\u53d6\u6d88",submit:"\u63d0\u4ea4"}}},g={route:{dashboard:"Dashboard",example:"Example",form:"Form",table:"Table",tree:"Tree",nested:"Nested","lvl1-A":"lvl1-A","lvl1-B":"lvl1-B","lvl2-A":"lvl2-A","lvl2-B":"lvl2-B","lvl2-C":"lvl2-C","lvl3-A":"lvl3-A","lvl3-B":"lvl3-B",dynamic:"DynamicRoute",dynamicIndex:"DynamicRoute",adminOnly:"AdminOnly",roleAOnly:"RoleAOnly"},navMenu:{home:"Home",logout:"Logout"},tableView:{table:{header:{id:"ID",title:"Title",author:"Author",views:"Views",status:"Status",datetime:"Datetime"}}},loginView:{login:"Login",message:{loginOK:"Logged In!",loginNG:"Login Failed!"}},formView:{form:{name:"Activity Name",zone:"Activity Zone",datetime:"Activity Date",datetime_date_placeholder:"Please select a date",datetime_time_placeholder:"Please select a time",delivery:"Instant Deliverty",type:"Activity Type",type_online:"Online activities",type_promotion:"Promotion activities",type_offline:"Offline activities",type_brand:"Brand exposure",resource:"Activity Resource",resource_sponsor:"Sponsor",resource_venue:"Venue",detail:"Activity Form"},message:{submitted:"Submitted!",nameRequired:"Activity Name is required"}},common:{language:"Language",btn:{reset:"Reset",cancel:"Cancel",submit:"Submit"}}},y={cn:h.a,en:f.a,ja:b.a},O=function(e){e=e.toLowerCase();var t=y[e]||f.a;p.i18n.use(t),m.a.use(d.e),m.a.init({lng:e,react:{useSuspense:!1},resources:{en:{translation:g},cn:{translation:v}}})},w=a(116),j=a(46),E=a.n(j),k=E.a.mock(/api\/article/,"get",{errno:0,errmsg:"","data|10":[{"id|+1":1,title:"@sentence",author:"@first","views|5-100":100,"status|0-2":1,datetime:"@datetime"}]}),V=E.a.Random;E.a.setup({timeout:"1000"});var _=E.a.mock("/api/login","post",(function(e){var t=JSON.parse(e.body),a=t.username,n=t.password;return"admin"===a&&"admin"===n||"guest"===a&&"guest"===n?{errno:0,errmsg:"",data:a}:{errno:401,errmsg:"Invalid password",data:null}})),C=E.a.mock("/api/login?method=token","post",(function(e){var t=e.body;return"admin"===t||"guest"===t?{errno:0,errmsg:"",data:t}:{errno:401,errmsg:"Invalid Token",data:null}})),x=E.a.mock(/api\/userInfo\?/,"get",(function(e){var t=[];return"admin"===A(e.url,"token")?t.push("admin"):t.push("roleA"),{errno:0,errmsg:"",data:{user:{id:V.id(),name:V.name()},roles:t}}})),A=(Object(w.a)(Object(w.a)({},n),r),function(e,t){if(!e||e.indexOf("?")<0)return null;var a=e.split("?")[1];if(!a)return null;var n=a.split("&").find((function(e){return e.startsWith(t+"=")}));return n?n.split("=")[1]:null}),B=a(10),I=a(11),T=a(13),F=a(12),N=a(54),D=a(15),P=a(166),M=a.n(P),L=a(119),S=a.n(L),R=a(9),z=a(462),q=a(167),K=a.n(q),W=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"render",value:function(){var e=this.props,t=e.family,a=e.name,n=e.size,r=e.children,o={fontSize:n};return l.a.createElement("span",{className:K.a.icon},l.a.createElement("i",{className:t+" icon-"+a,style:o}),r?l.a.createElement("span",null,r):null)}}]),a}(l.a.Component);W.defaultProps={family:"iconfont",size:16};var U=a(114),G=a.n(U),H=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSelectMenuItem=function(t){e.props.history.location.pathname!==t&&e.props.history.push(t)},e}return Object(I.a)(a,[{key:"render",value:function(){var e=this.props,t=e.routes,a=e.history.location.pathname;return l.a.createElement(p.Menu,{defaultActive:a,theme:"dark",className:G.a.siderMenu,onSelect:this.handleSelectMenuItem},this.renderMenuItems(t))}},{key:"renderMenuItems",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=[];return e.forEach((function(e){e.hidden||(e.children?r.push(l.a.createElement(p.Menu.SubMenu,{key:a+e.path,index:a+e.path,title:t.renderMenuTitle(e,e.name),className:"submenu_lvl"+n},t.renderMenuItems(e.children,a+e.path,n+1))):r.push(l.a.createElement(p.Menu.Item,{key:a+e.path,index:a+e.path,className:"menuitem_lvl"+n},t.renderMenuTitle(e,e.name))))})),r}},{key:"renderMenuTitle",value:function(e,t){return e.meta&&e.meta.icon?l.a.createElement(W,{name:e.meta.icon},this.props.t("route."+t)):l.a.createElement("span",null,t)}}]),a}(l.a.Component),J=Object(D.g)(Object(z.a)()(H)),X=a(65),Q=a.n(X);var Z,$=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).handleCommand=function(e){"home"===e?"/dashboard"!==n.props.history.location.pathname&&n.props.history.push("/dashboard"):"logout"===e&&n.props.onLogout()},n.handleLanguage=function(e){n.props.onLangUpdate(e)},n.state={folded:!1},n}return Object(I.a)(a,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.routes,n=e.t,r=function e(t,a){var n=a.find((function(e){var a=e.path;return""===t&&""===a||(""!==a&&0===t.indexOf(a)||!!(a.startsWith("/:")&&t.length>1))}));return n?t===n.path?[n]:t.indexOf("/",1)>0?(t=t.substring(t.indexOf("/",1)),[n].concat(e(t,n.children))):[n]:[]}(t.location.pathname,a);return l.a.createElement("div",{className:Q.a.navbar},l.a.createElement(p.Breadcrumb,{className:Q.a.breadcrumb,separator:"/"},r.map((function(e){return l.a.createElement(p.Breadcrumb.Item,null,l.a.createElement("span",null,n("route."+e.name)))}))),l.a.createElement(p.Dropdown,{className:Q.a.language,onCommand:this.handleLanguage,menu:l.a.createElement(p.Dropdown.Menu,null,l.a.createElement(p.Dropdown.Item,{command:"en"},"English"),l.a.createElement(p.Dropdown.Item,{command:"cn"},"\u7b80\u4f53\u4e2d\u6587"))},l.a.createElement("span",null,l.a.createElement("span",null,n("common.language")),l.a.createElement(W,{size:8,name:"caret-down"}))),l.a.createElement(p.Dropdown,{className:Q.a.dropMenu,onCommand:this.handleCommand,menu:l.a.createElement(p.Dropdown.Menu,null,l.a.createElement(p.Dropdown.Item,{command:"home"},n("navMenu.home")),l.a.createElement(p.Dropdown.Item,null,"Github"),l.a.createElement(p.Dropdown.Item,{divided:!0,command:"logout"},n("navMenu.logout")))},l.a.createElement("span",{className:Q.a.avatar},l.a.createElement("img",{src:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"}),l.a.createElement(W,{size:8,name:"caret-down"}))))}}]),a}(l.a.Component),Y=Object(D.g)(Object(z.a)()($)),ee=a(66),te=a.n(ee),ae=a(86),ne=a.n(ae);function re(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(0!==e.length){var n=e.find((function(e){return t.startsWith(a+e.path)}));if(n){if(console.log(a+n.path,t),a+n.path===t)return n.fullPath=a+n.path,n;if(n.children)return re(n.children,t,a+n.path)}}}var oe,ie,le,ce,ue=Object(s.b)("app")(Z=Object(s.c)(Z=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).unlisten=function(){},e.handleCloseTag=function(t){var a=e.props,n=a.history,r=a.app;r.removeView(t),n.replace(r.visitedViews[r.visitedViews.length-1].fullPath)},e.handleNavTo=function(t){e.props.history.replace(t.fullPath)},e}return Object(I.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.app,n=t.history,r=t.routes,o=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];return t.map((function(t){t.meta&&t.meta.affix&&(t.fullPath=a+t.path,n.push(t)),t.children&&n.concat(e(t.children))})),n}(r),i=re(r,n.location.pathname);!i||i.meta&&i.meta.affix||o.push(i),a.initVisitedViews(o),this.unlisten=n.listen((function(t){var n=re(e.props.routes,t.pathname);n&&(null===a||void 0===a||a.addView(n))}))}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"render",value:function(){var e=this,t=this.props.app.visitedViews;return l.a.createElement("div",{className:ne.a.tagView},t.map((function(t){return e.renderTag(t)})))}},{key:"renderTag",value:function(e){var t=this,a=this.props,n=a.history,r=a.t,o=e.fullPath===n.location.pathname;return console.log("path="+e.path+" fullPath="+e.fullPath),e.meta&&e.meta.affix?l.a.createElement(p.Tag,{className:ne.a.tag,type:o?"success":"primary",key:e.path},l.a.createElement("span",{onClick:function(){return t.handleNavTo(e)}},r("route."+e.name))):l.a.createElement(p.Tag,{className:ne.a.tag,type:o?"success":"primary",key:e.path,closable:!0,onClose:function(){return t.handleCloseTag(e)}},l.a.createElement("span",{onClick:function(){return t.handleNavTo(e)}},r("route."+e.name)))}}]),a}(l.a.Component))||Z)||Z,se=Object(D.g)(Object(z.a)()(ue)),pe=Object(s.b)("auth","app")(oe=Object(s.c)(oe=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleLogout=function(){e.props.auth.logout(),e.props.history.replace("/login")},e.handleLang=function(t){e.props.app.updateSetting({params:{key:"lang",value:t},callback:{complete:function(){return e.forceUpdate()}}})},e}return Object(I.a)(a,[{key:"componentDidMount",value:function(){var e=this;""===this.props.auth.token?this.props.history.replace("/login"):this.props.auth.loginByToken({callback:{fail:function(){return e.props.history.replace("/login")}}})}},{key:"render",value:function(){var e=this.props.routes;return l.a.createElement("div",{className:te.a.basicLayout},l.a.createElement("div",{className:te.a.aside},l.a.createElement(J,{routes:e})),l.a.createElement("div",{className:te.a.main},l.a.createElement("div",{className:te.a.header},l.a.createElement(Y,{routes:e,onLogout:this.handleLogout,onLangUpdate:this.handleLang}),l.a.createElement(se,{routes:e})),l.a.createElement("div",{className:te.a.content},this.props.children)))}}]),a}(l.a.Component))||oe)||oe,me=Object(D.g)(pe),de=a(63),he=a(87),fe=a.n(he),be={username:"admin",password:"admin",loading:!1},ve=Object(s.b)("auth")(ie=Object(s.c)(ie=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).rules={username:[{required:!0,message:"Please input username",trigger:"blur"}],password:[{required:!0,message:"Please input password",trigger:"blur"}]},n.refKey={},n.onFieldChange=function(e,t){n.setState(Object.assign({},n.state,Object(de.a)({},e,t)))},n.handleSubmit=function(){var e=n.props.t;n.refKey.form.validate((function(t){if(!t)return!1;n.setState({loading:!0});var a=n.state,r=a.username,o=a.password;n.props.auth.login({params:{username:r,password:o},callback:{success:function(){Object(p.Message)({message:e("loginView.message.loginOK"),type:"success",duration:1e3,onClose:function(){return n.props.history.replace("/")}})},fail:function(){return Object(p.Message)({message:e("loginView.message.loginNG"),type:"error",duration:1e3})},complete:function(){n.setState({loading:!1})}}})}))},n.handleReset=function(){n.setState(be,(function(){return setTimeout((function(){return n.refKey.form.resetFields()}),100)}))},n.state=be,n}return Object(I.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,r=t.loading,o=this.props.t;return l.a.createElement("div",{className:fe.a.loginPage},l.a.createElement("div",{className:fe.a.loginForm},l.a.createElement(p.Form,{ref:function(t){return e.refKey.form=t},model:this.state,rules:this.rules},l.a.createElement(p.Form.Item,{prop:"username"},l.a.createElement(p.Input,{value:a,autoComplete:"off",placeholder:"admin / guest",prepend:l.a.createElement(W,{name:"user"}),onChange:function(t){return e.onFieldChange("username",t)}})),l.a.createElement(p.Form.Item,{prop:"password"},l.a.createElement(p.Input,{value:n,autoComplete:"off",type:"password",placeholder:"admin / guest",prepend:l.a.createElement(W,{name:"lock"}),onChange:function(t){return e.onFieldChange("password",t)}}))),l.a.createElement(p.Button,{loading:r,className:fe.a.loginButton,type:"primary",onClick:this.handleSubmit},o("loginView.login"))))}}]),a}(l.a.Component))||ie)||ie,ge=Object(D.g)(Object(z.a)()(ve)),ye=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Dashboard")}}]),a}(l.a.Component);!function(e){e[e.draft=0]="draft",e[e.published=1]="published",e[e.deleted=2]="deleted"}(le||(le={}));var Oe,we=Object(s.b)("demo")(ce=Object(s.c)(ce=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"componentDidMount",value:function(){this.props.demo.fetchArticles()}},{key:"render",value:function(){var e=this.props,t=e.demo,a=e.t,n=[{label:a("tableView.table.header.id"),prop:"id",width:60},{label:a("tableView.table.header.title"),prop:"title"},{label:a("tableView.table.header.author"),prop:"author",width:120},{label:a("tableView.table.header.views"),prop:"views",width:120},{label:a("tableView.table.header.status"),prop:"status",width:120,render:function(e){return e.status===le.draft?l.a.createElement(p.Tag,{type:"primary"},"draft"):e.status===le.published?l.a.createElement(p.Tag,{type:"success"},"published"):l.a.createElement(p.Tag,{type:"danger"},"deleted")}},{label:a("tableView.table.header.datetime"),width:240,render:function(e){return l.a.createElement(W,{size:14,name:"clock-circle"},e.datetime)}}];return l.a.createElement(p.Table,{style:{width:"100%"},columns:n,height:600,data:t.articles})}}]),a}(l.a.Component))||ce)||ce,je=Object(z.a)()(we),Ee=a(169),ke=a.n(Ee),Ve=[{label:"lvl1-A",children:[{label:"lvl2-A1"},{label:"lvl2-A2",children:[{label:"lvl3-A1"},{label:"lvl3-A2"},{label:"lvl3-A3"}]}]},{label:"lvl1-B",children:[{label:"lvl2-B1"},{label:"lvl2-B2",children:[{label:"lvl3-B1"},{label:"lvl3-B2"}]}]},{label:"lvl1-C",children:[{label:"lvl2-C1"},{label:"lvl2-C2",children:[{label:"lvl3-C1"}]}]}],_e={label:"label",children:"children"},Ce=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.Tree,{className:ke.a.tree,data:Ve,options:_e,highlightCurrent:!0}))}}]),a}(l.a.Component),xe=a(88),Ae=a.n(xe),Be=[{label:"zone1",value:0},{label:"zone2",value:1},{label:"zone3",value:2}],Ie={name:"",zone:0,date:"",time:"",delivery:!1,types:[],resource:0,detail:""},Te=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).rules={name:[{required:!0,message:n.props.t("formView.message.nameRequired"),trigger:"blur"}]},n.refKey={},n.onFieldChange=function(e,t){n.setState(Object.assign({},n.state,Object(de.a)({},e,t)))},n.handleSubmit=function(){n.refKey.form.validate((function(e){if(!e)return!1;Object(p.Message)({message:n.props.t("formView.message.submitted"),type:"success",duration:1e3,onClose:function(){return n.handleReset()}})}))},n.handleReset=function(){n.setState(Ie,(function(){return setTimeout((function(){return n.refKey.form.resetFields()}),100)}))},n.state=Ie,n}return Object(I.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.zone,r=t.date,o=t.time,i=t.delivery,c=t.types,u=t.resource,s=t.detail,m=this.props.t;return l.a.createElement("div",null,l.a.createElement(p.Form,{ref:function(t){return e.refKey.form=t},model:this.state,rules:this.rules,labelWidth:"180"},l.a.createElement(p.Form.Item,{label:m("formView.form.name"),prop:"name"},l.a.createElement(p.Input,{value:a,autoComplete:"off",onChange:function(t){return e.onFieldChange("name",t)}})),l.a.createElement(p.Form.Item,{label:m("formView.form.zone"),prop:"zone"},l.a.createElement(p.Select,{value:n,placeholder:"Please select a zone"},Be.map((function(e){return l.a.createElement(p.Select.Option,{key:e.value,label:e.label,value:e.value})})))),l.a.createElement(p.Form.Item,{label:m("formView.form.datetime")},l.a.createElement(p.Layout.Col,{span:"11"},l.a.createElement(p.Form.Item,{prop:"date",labelWidth:"0px"},l.a.createElement(p.DatePicker,{className:Ae.a.datePicker,value:r,placeholder:m("formView.form.datetime_date_placeholder"),onChange:function(t){return e.onFieldChange("date",t)}}))),l.a.createElement(p.Layout.Col,{span:"2"},l.a.createElement("span",{className:Ae.a.separator},"-")),l.a.createElement(p.Layout.Col,{span:"11"},l.a.createElement(p.Form.Item,{prop:"time",labelWidth:"0px"},l.a.createElement(p.TimePicker,{className:Ae.a.timePicker,value:o,placeholder:m("formView.form.datetime_time_placeholder"),onChange:function(t){return e.onFieldChange("time",t)}})))),l.a.createElement(p.Form.Item,{label:m("formView.form.delivery"),prop:"delivery"},l.a.createElement(p.Switch,{onText:"",offText:"",value:i,onChange:function(t){return e.onFieldChange("delivery",t)}})),l.a.createElement(p.Form.Item,{label:m("formView.form.type"),prop:"types"},l.a.createElement(p.Checkbox.Group,{value:c,onChange:function(t){return e.onFieldChange("type",t)}},l.a.createElement(p.Checkbox,{label:m("formView.form.type_online")}),l.a.createElement(p.Checkbox,{label:m("formView.form.type_promotion")}),l.a.createElement(p.Checkbox,{label:m("formView.form.type_offline")}),l.a.createElement(p.Checkbox,{label:m("formView.form.type_brand")}))),l.a.createElement(p.Form.Item,{label:m("formView.form.resource"),prop:"resource"},l.a.createElement(p.Radio.Group,{value:u,onChange:function(t){return e.onFieldChange("resource",t)}},l.a.createElement(p.Radio,{value:m("formView.form.resource_sponsor")}),l.a.createElement(p.Radio,{value:m("formView.form.resource_venue")}))),l.a.createElement(p.Form.Item,{label:m("formView.form.detail"),prop:"detail"},l.a.createElement(p.Input,{value:s,type:"textarea",onChange:function(t){return e.onFieldChange("detail",t)}})),l.a.createElement(p.Form.Item,null,l.a.createElement(p.Button,{type:"primary",onClick:this.handleSubmit},m("common.btn.submit")),l.a.createElement(p.Button,null,m("common.btn.cancel")),l.a.createElement(p.Button,{type:"warning",onClick:this.handleReset},m("common.btn.reset")))))}}]),a}(l.a.Component),Fe=Object(z.a)()(Te),Ne=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Nested")}}]),a}(l.a.Component),De=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Dynamic")}}]),a}(l.a.Component),Pe=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"RoleOnly")}}]),a}(l.a.Component),Me=[{path:"/login",name:"login",component:ge},{path:"/dashboard",name:"dashboard",hasLayout:!0,component:ye,meta:{icon:"dashboard",affix:!0}},{path:"/example",name:"example",hasLayout:!0,meta:{icon:"codepen"},children:[{path:"/table",name:"table",component:je,meta:{icon:"table"}},{path:"/tree",name:"tree",component:Ce,meta:{icon:"pic-right"}}]},{path:"/form",name:"form",hasLayout:!0,component:Fe,meta:{icon:"form",cached:!0}},{path:"/nested",name:"nested",hasLayout:!0,meta:{icon:"double-right"},children:[{path:"/lvl1-A",name:"lvl1-A",component:Ne,meta:{icon:"double-right"}},{path:"/lvl1-B",name:"lvl1-B",meta:{icon:"double-right"},children:[{path:"/lvl2-A",name:"lvl2-A",component:Ne,meta:{icon:"double-right"}},{path:"/lvl2-B",name:"lvl2-B",component:Ne,meta:{icon:"double-right"}},{path:"/lvl2-C",name:"lvl2-C",meta:{icon:"double-right"},children:[{path:"/lvl3-A",name:"lvl3-A",component:Ne,meta:{icon:"double-right"}},{path:"/lvl3-B",name:"lvl3-B",component:Ne,meta:{icon:"double-right"}}]}]}]}],Le=[{path:"/dynamic",name:"dynamic",hasLayout:!0,meta:{icon:"box-plot"},children:[{path:"/index",name:"dynamicIndex",component:De,meta:{icon:"box-plot"}},{path:"/adminOnly",name:"adminOnly",component:Pe,meta:{roles:["admin"],icon:"user"}},{path:"/roleAOnly",name:"roleAOnly",component:Pe,meta:{roles:["roleA"],icon:"user"}}]}];function Se(e,t){var a=[],n=[];return e.forEach((function(e){(e=function e(t,a){if(!a||0===a.length)return t;if(t.meta&&t.meta.roles&&!t.meta.roles.find((function(e){return a.indexOf(e)>=0})))return null;var n=Object.assign({},t);if(n.children){var r=[];n.children.forEach((function(t){var n=e(t,a);n&&r.push(n)})),n.children=r}return n}(e,t)).hasLayout?n.push(e):a.push(e)})),{blankRoutes:a,basicRoutes:n}}var Re,ze=Object(s.b)("app","auth")(Oe=Object(s.c)(Oe=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).state=Se(Me,[]),n}return Object(I.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(R.n)((function(){return e.props.auth.roles.map((function(e){return e}))}),(function(t){e.setState(Se(Me.concat(Le),t))}))}},{key:"render",value:function(){var e=this.state,t=e.blankRoutes,a=e.basicRoutes;return l.a.createElement(N.a,{basename:"/react-element-typescript-admin"},l.a.createElement(L.AliveScope,null,l.a.createElement(D.d,null,t.map((function(e){return l.a.createElement(D.b,{exact:!0,key:e.path,path:e.path,component:e.component})})),l.a.createElement(me,{routes:a},l.a.createElement(M.a,{className:"fadeInOut-enter"},this.renderBasicRoutes(a),l.a.createElement(D.a,{from:"/",to:"/dashboard"}))))))}},{key:"renderBasicRoutes",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];return e.forEach((function(e){if(e.component)n.push(l.a.createElement(D.b,{exact:!0,key:a+e.path,path:a+e.path,render:function(a){return l.a.createElement(S.a,{when:t.props.app.isCached(e)},l.a.createElement(e.component,a))}}));else{var r=t.renderBasicRoutes(e.children,a+e.path);n=n.concat(r)}})),n}}]),a}(l.a.Component))||Oe)||Oe,qe=a(90),Ke=a(37),We=a(36),Ue=a(64),Ge=a(32),He=a(16),Je=(a(112),a(25)),Xe=a.n(Je),Qe=a(40),Ze=a(170),$e=a.n(Ze);function Ye(e){return new Promise((function(t){$e.a.request(e).then((function(e){if(console.log(e),200===e.status){var a=e.data,n=a.errno,r=a.data,o=a.errmsg;t({code:0===n?200:n,data:r,msg:o})}else t({code:500,data:null,msg:"Api Response Error"})})).catch((function(e){t({code:500,data:null,msg:"Api Request Failed"})}))}))}var et,tt,at,nt,rt,ot,it,lt,ct,ut,st=(Re=function(){function e(){Object(B.a)(this,e)}return Object(I.a)(e,[{key:"request",value:function(){var e=Object(Qe.a)(Xe.a.mark((function e(t,a){var n;return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ye(t);case 2:return n=e.sent,this.execCallback(a,n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"execCallback",value:function(e,t){if(e&&e.callback){var a=e.callback,n=a.success,r=a.fail,o=a.complete;t&&200===t.code?n&&n(t.data):t&&r&&r(t.code),o&&o()}}}]),e}(),Object(He.a)(Re.prototype,"request",[R.f],Object.getOwnPropertyDescriptor(Re.prototype,"request"),Re.prototype),Re),pt=a(89),mt=a.n(pt),dt="language",ht="token",ft=function(e,t){mt.a.set(e,t)},bt=function(e){return mt.a.get(e)},vt=new(et=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),Object(Ke.a)(e,"lang",tt,Object(We.a)(e)),Object(Ke.a)(e,"cachedViews",at,Object(We.a)(e)),Object(Ke.a)(e,"visitedViews",nt,Object(We.a)(e)),e}return Object(I.a)(a,[{key:"updateSetting",value:function(e){var t=e.params;"lang"===t.key&&this.updateLang(t.value),Object(Ue.a)(Object(Ge.a)(a.prototype),"execCallback",this).call(this,e)}},{key:"updateLang",value:function(e){var t=this;Object(R.o)("updateLang",(function(){return t.lang=e})),O(e),ft(dt,e)}},{key:"addView",value:function(e){var t=this;Object(R.o)("addView",(function(){console.log(t.visitedViews.map((function(e){return e.path})),e),e.meta&&e.meta.cached&&(t.cachedViews.find((function(t){return t.path===e.path}))||t.cachedViews.push(e)),t.visitedViews.find((function(t){return t.path===e.path}))||t.visitedViews.push(e)}))}},{key:"removeView",value:function(e){var t;!0!==(null===(t=e.meta)||void 0===t?void 0:t.affix)&&(console.log("removeView",e),this.removeCacheView(e),this.removeVisitedView(e))}},{key:"removeCacheView",value:function(e){var t=this;Object(R.o)("addView",(function(){var a=Object(qe.a)(t.cachedViews),n=a.findIndex((function(t){return t.path===e.path}));n>=0&&a.splice(n,1),t.cachedViews=a,console.log(t.visitedViews,t.cachedViews)}))}},{key:"removeVisitedView",value:function(e){var t=this;Object(R.o)("addView",(function(){var a=Object(qe.a)(t.visitedViews),n=a.findIndex((function(t){return t.path===e.path}));n>=0&&a.splice(n,1),t.visitedViews=a,console.log(t.visitedViews,t.cachedViews)}))}},{key:"removeAllViews",value:function(){var e=this;Object(R.o)("removeAllView",(function(){var t=e.cachedViews.filter((function(e){var t;return!0===(null===(t=e.meta)||void 0===t?void 0:t.affix)}));e.cachedViews=t,e.visitedViews=t}))}},{key:"initVisitedViews",value:function(e){var t=this;Object(R.o)("initVisitedViews",(function(){return t.visitedViews=Object(qe.a)(e)}))}},{key:"isCached",value:function(e){return!(!e.meta||!e.meta.cached)&&this.cachedViews.findIndex((function(t){return t.path===e.path}))>=0}}]),a}(st),tt=Object(He.a)(et.prototype,"lang",[R.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return bt(dt)||"cn"}}),at=Object(He.a)(et.prototype,"cachedViews",[R.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),nt=Object(He.a)(et.prototype,"visitedViews",[R.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(He.a)(et.prototype,"updateSetting",[R.f],Object.getOwnPropertyDescriptor(et.prototype,"updateSetting"),et.prototype),Object(He.a)(et.prototype,"updateLang",[R.f],Object.getOwnPropertyDescriptor(et.prototype,"updateLang"),et.prototype),Object(He.a)(et.prototype,"addView",[R.f],Object.getOwnPropertyDescriptor(et.prototype,"addView"),et.prototype),Object(He.a)(et.prototype,"removeCacheView",[R.f],Object.getOwnPropertyDescriptor(et.prototype,"removeCacheView"),et.prototype),Object(He.a)(et.prototype,"removeVisitedView",[R.f],Object.getOwnPropertyDescriptor(et.prototype,"removeVisitedView"),et.prototype),Object(He.a)(et.prototype,"removeAllViews",[R.f],Object.getOwnPropertyDescriptor(et.prototype,"removeAllViews"),et.prototype),Object(He.a)(et.prototype,"initVisitedViews",[R.f],Object.getOwnPropertyDescriptor(et.prototype,"initVisitedViews"),et.prototype),et),gt=new(rt=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),Object(Ke.a)(e,"roles",ot,Object(We.a)(e)),Object(Ke.a)(e,"token",it,Object(We.a)(e)),Object(Ke.a)(e,"user",lt,Object(We.a)(e)),e}return Object(I.a)(a,[{key:"login",value:function(){var e=Object(Qe.a)(Xe.a.mark((function e(t){var n,r,o=this;return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",url:"/api/login",data:t.params},e.next=3,Object(Ue.a)(Object(Ge.a)(a.prototype),"request",this).call(this,n,t);case 3:200===(r=e.sent).code&&(Object(R.o)("Login",(function(){return o.token=r.data})),ft(ht,r.data),this.fetchUserInfo(r.data));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loginByToken",value:function(){var e=Object(Qe.a)(Xe.a.mark((function e(t){var n,r,o=this;return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",url:"/api/login?method=token",data:this.token},e.next=3,Object(Ue.a)(Object(Ge.a)(a.prototype),"request",this).call(this,n,t);case 3:200===(r=e.sent).code&&(Object(R.o)("Login",(function(){return o.token=r.data})),ft(ht,r.data),this.fetchUserInfo(r.data));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchUserInfo",value:function(){var e=Object(Qe.a)(Xe.a.mark((function e(t){var n,r,o=this;return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={url:"/api/userInfo?token="+t},e.next=3,Object(Ue.a)(Object(Ge.a)(a.prototype),"request",this).call(this,n);case 3:200===(r=e.sent).code&&Object(R.o)("fetchUserInfo",(function(){o.roles=r.data.roles,o.user=r.data.user}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(Qe.a)(Xe.a.mark((function e(){var t=this;return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(R.o)("Logout",(function(){t.token="",t.roles=[],t.user=null}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),a}(st),ot=Object(He.a)(rt.prototype,"roles",[R.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),it=Object(He.a)(rt.prototype,"token",[R.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return bt(ht)||""}}),lt=Object(He.a)(rt.prototype,"user",[R.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(He.a)(rt.prototype,"login",[R.f],Object.getOwnPropertyDescriptor(rt.prototype,"login"),rt.prototype),Object(He.a)(rt.prototype,"loginByToken",[R.f],Object.getOwnPropertyDescriptor(rt.prototype,"loginByToken"),rt.prototype),Object(He.a)(rt.prototype,"fetchUserInfo",[R.f],Object.getOwnPropertyDescriptor(rt.prototype,"fetchUserInfo"),rt.prototype),Object(He.a)(rt.prototype,"logout",[R.f],Object.getOwnPropertyDescriptor(rt.prototype,"logout"),rt.prototype),rt),yt=new(ct=function(){function e(){Object(B.a)(this,e),Object(Ke.a)(this,"articles",ut,this)}return Object(I.a)(e,[{key:"fetchArticles",value:function(){var e=Object(Qe.a)(Xe.a.mark((function e(){var t,a=this;return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/article",e.next=3,Ye({url:"/api/article"});case 3:t=e.sent,Object(R.o)("FetchArticles",(function(){200===t.code&&(a.articles=t.data)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),ut=Object(He.a)(ct.prototype,"articles",[R.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(He.a)(ct.prototype,"fetchArticles",[R.f],Object.getOwnPropertyDescriptor(ct.prototype,"fetchArticles"),ct.prototype),ct);O(vt.lang);var Ot=function(){return l.a.createElement(s.a,o,l.a.createElement(ze,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports={navbar:"NavBar_navbar__Lmk8v",breadcrumb:"NavBar_breadcrumb__1GDoW",language:"NavBar_language__2bXlp",dropMenu:"NavBar_dropMenu__1kB7V",avatar:"NavBar_avatar__29X9D",fold:"NavBar_fold__MRwDa"}},66:function(e,t,a){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px",basicLayout:"Basic_basicLayout__2hBlx",main:"Basic_main__1qlT9",header:"Basic_header__321bu",content:"Basic_content__2gu6K"}},86:function(e,t,a){e.exports={tagView:"TagView_tagView__3pFa_",tag:"TagView_tag__3QMjs"}},87:function(e,t,a){e.exports={loginPage:"Login_loginPage__k8G5O",loginForm:"Login_loginForm__3ujOm",loginButton:"Login_loginButton___P9NT"}},88:function(e,t,a){e.exports={datePicker:"Form_datePicker__39WL3",timePicker:"Form_timePicker__DGeAP",separator:"Form_separator__3IjDk"}}},[[171,1,2]]]);
//# sourceMappingURL=main.3598d35f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(84)},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),s=a.n(l),i=a(3),o=a(4),c=a(6),u=a(5),p=a(7),m=a(23),d=a(8),h=a.n(d),f=a(18),v=a.n(f),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),h.a.get("https://qacvmanager.azurewebsites.net/api/login/".concat(a.state.email,"&").concat(a.state.password)).then(function(e){200===e.status&&(a.props.loginInfo.push(e.data[0].userId),a.props.loginInfo.push(e.data[0].firstName),a.props.loginInfo.push(e.data[0].lastName),a.props.loginInfo.push(e.data[0].email),a.props.loginInfo.push(e.data[0].department.departmentId),a.props.loginInfo.push(e.data[0].department.role),a.props.onSubmit(a.props.loginInfo),window.location.replace("#/user"))}).catch(function(e){window.alert("Invalid Details"),a.passField.value="",a.emailField.value="",a.emailField.focus()})},a.getEmail=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value))},a.hashPass=function(e){e.preventDefault(),a.setState(Object(m.a)({},e.target.name,v.a.MD5(e.target.value).toString()))},a.state={email:"",password:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.passField=document.getElementById("loginPasswordfield"),this.emailField=document.getElementById("loginEmailField"),this.emailField.focus()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"login-page"},r.a.createElement("h2",{id:"loginTitle"},"Login to continue"),r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"login-form",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("label",{id:"loginEmailLabel",htmlFor:"email"},"Email "),r.a.createElement("br",null),r.a.createElement("input",{id:"loginEmailField",className:"loginForm",name:"email",type:"email",placeholder:"Enter email",value:this.state.email,onChange:function(t){return e.getEmail(t)}}),r.a.createElement("br",null),r.a.createElement("label",{id:"loginPasswordLabel",htmlFor:"password"},"Password"),r.a.createElement("br",null),r.a.createElement("input",{id:"loginPasswordfield",name:"password",className:"loginForm",type:"password",placeholder:"Enter password",value:this.state.passwordInput,onChange:function(t){return e.hashPass(t)}}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",id:"btnLogin",className:"button"},"login"),r.a.createElement("p",{className:"message"},"Forgot password? ",r.a.createElement("a",{href:""},"Reset password.")))))}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Name: ",this.props.firstName," ",this.props.lastName),r.a.createElement("h4",null,"Department: ",this.props.role))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={color:""},a.handleCV=function(e){e.preventDefault(),a.setState({color:"#AAAAAA"}),h.a.get("https://qacvmanager.azurewebsites.net/api/user/".concat(a.props.userId,"/cv")).then(function(e){a.props.onClick(e.data)})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("tbody",null,r.a.createElement("tr",{className:"row",onClick:this.handleCV,style:{backgroundColor:this.state.color}},r.a.createElement("td",{className:"cell"},this.props.userId),r.a.createElement("td",{className:"cell"},this.props.firstName," ",this.props.lastName),r.a.createElement("td",{className:"cell"},this.props.email," "),r.a.createElement("td",null,this.props.department.role," ")))}}]),t}(r.a.Component),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userName:"",userId:"",prevId:""},a.handleReset=function(e){a.props.onClick([])},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tableLeft"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"row header",id:"userTable"},r.a.createElement("th",{className:"cell"},"User ID"),r.a.createElement("th",{className:"cell"},"Name"),r.a.createElement("th",{className:"cell"},"Email"),r.a.createElement("th",{className:"cell"},"Role"))," "),this.props.rows.map(function(t){return r.a.createElement(g,Object.assign({key:t.userId,onClick:e.props.onClick,cvs:e.props.cvs,prevId:e.state.prevId},t))})))}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).statusSelector=null,a.setStatusSelector=function(e){a.statusSelector=e,null!=a.statusSelector&&(a.statusSelector.value=a.props.status,1==a.props.viewerId|6==a.props.viewerId&&(a.statusSelector.disabled=!0))},a.updateStatus=function(e){var t="https://qacvmanager.azurewebsites.net/api/cv/"+a.props.cvId+"/status/";window.confirm("Confirm Status")&&h.a.get(t+a.statusSelector.value)},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("select",{onChange:this.updateStatus,ref:this.setStatusSelector},r.a.createElement("option",{value:"Gray"},"Gray"),r.a.createElement("option",{value:"Green"},"Green"),r.a.createElement("option",{value:"Red"},"Red")))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={test:""},a.updateStatus=function(e){(e.preventDefault(),window.confirm("Confirm Delete"))&&h.a.get(a.deleteUrl).then(function(t){a.handleCV(e)})},a.handleCV=function(e){e.preventDefault(),h.a.get("https://qacvmanager.azurewebsites.net/api/user/".concat(a.props.user.userId,"/cv")).then(function(e){a.props.onClick(e.data)})},a.downloadUrl="https://qacvmanager.azurewebsites.net/api/cv/"+e.cvId+"/download",a.downIco="https://image.flaticon.com/icons/svg/138/138601.svg",a.deleteUrl="https://qacvmanager.azurewebsites.net/api/cv/"+e.cvId+"/delete",a.delIco="https://image.flaticon.com/icons/png/128/138/138767.png",a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tbody",null,r.a.createElement("tr",{className:"row"},r.a.createElement("td",{className:"cell"},this.props.fileName),r.a.createElement("td",null,r.a.createElement(w,{changed:this.testState,userId:this.props.user.userId,viewerId:this.props.viewerId,cvId:this.props.cvId,status:this.props.status,findCv:this.findCv})),r.a.createElement("td",{className:"cell"},r.a.createElement("a",{href:this.downloadUrl},r.a.createElement("img",{src:this.downIco,alt:"Download"}))),r.a.createElement("td",{className:"cell"},r.a.createElement("a",{onClick:function(t){e.updateStatus(t)}},r.a.createElement("img",{src:this.delIco,alt:"Delete"})))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleCV=function(e){e.preventDefault(),h.a.get("https://qacvmanager.azurewebsites.net/api/user/".concat(a.props.userId,"/cv")).then(function(e){a.props.onClick(e.data)})},a.uploadCv=function(e){var t="https://qacvmanager.azurewebsites.net/api/user/"+a.props.userId+"/upload",n=new FormData,r=document.querySelector("#file");(n.append("file",r.files[0]),window.confirm("Confirm Upload"))&&(h.a.post(t,n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){a.handleCV(e)}),r.value=null)},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return 1==this.props.viewerId|6==this.props.viewerId?r.a.createElement("div",null,r.a.createElement("input",{id:"file",type:"file",name:"file"}),r.a.createElement("button",{type:"submit",onClick:this.uploadCv},"Upload")):null}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={userName:"",userId:"",prevId:""},a.handleReset=function(e){a.props.onClick([])},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tableRight",style:{visibility:this.props.visibility}},r.a.createElement(j,{onClick:this.props.onClick,userId:this.props.loginInfo[0],viewerId:this.props.viewerId}),r.a.createElement("table",{className:"table",id:"cvTable"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"row header",onClick:this.props.handleVisibility},r.a.createElement("th",{className:"cell"},"File Name"),r.a.createElement("th",{className:"cell"},"Status"),r.a.createElement("th",{className:"cell"},"Download"),r.a.createElement("th",{className:"cell"},"Delete"))),this.props.cvs.map(function(t){return r.a.createElement(O,Object.assign({onClick:e.props.onClick,cvs:e.props.cvs,prevId:e.state.prevId,viewerId:e.props.viewerId,key:t.cvId,findCv:e.props.findCv},t))})))}}]),t}(r.a.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userName:""},a.handleSubmit=function(e){e.preventDefault(),h.a.get("https://qacvmanager.azurewebsites.net/api/findbyname/".concat(a.state.userName,"&")).then(function(e){a.props.onSubmit(e.data)})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.userName,onChange:function(t){return e.setState({userName:t.target.value})},placeholder:"Enter user"}),r.a.createElement("button",{type:"submit"},"Find user")))}}]),t}(r.a.Component),N=(r.a.Component,r.a.Component,function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={toHome:!1},a.handleSubmit=function(e){e.preventDefault(),window.location.assign("#/"),window.location.reload("#/")},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("button",{id:"btnLogout",className:"button",onClick:function(t){return e.setState({toHome:!0})}},"Log Out")))}}]),t}(n.Component)),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={deptId:""},a.handleDept=function(e){e.preventDefault();var t="";t=""===a.statusSelector.value?"https://qacvmanager.azurewebsites.net/api/cv/":"https://qacvmanager.azurewebsites.net/api/cv/status/".concat(a.statusSelector.value,"/"),h.a.get(t).then(function(e){a.props.onChange(e.data)})},a.statusSelector=null,a.setStatusSelector=function(e){a.statusSelector=e},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("select",{onChange:this.handleDept,ref:this.setStatusSelector},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"red"},"Red"),r.a.createElement("option",{value:"green"},"Green"),r.a.createElement("option",{value:"gray"},"Gray")))}}]),t}(r.a.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).createAccount=function(e){if(e.preventDefault(),window.confirm("Confirm Account Creation")){var t=document.getElementById("selectDpt"),a=document.getElementById("firstName"),n=document.getElementById("lastName"),r=document.getElementById("email");h.a.post("https://qacvmanager.azurewebsites.net/api/department/"+t.value+"/user",{firstName:a.value,lastName:n.value,email:r.value,password:v.a.MD5("defaultPass").toString()}),a.value="",n.value="",r.value=""}},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return 3===this.props.viewerId?r.a.createElement("div",null,r.a.createElement("h1",null,"Create Account"),r.a.createElement("form",{onSubmit:this.createAccount},r.a.createElement("select",{id:"selectDpt"},r.a.createElement("option",{value:"1"},"Trainee"),r.a.createElement("option",{value:"2"},"Trainer"),r.a.createElement("option",{value:"3"},"Training Manager"),r.a.createElement("option",{value:"4"},"Sales"),r.a.createElement("option",{value:"5"},"Soft Skills"),r.a.createElement("option",{value:"6"},"Consultant")),r.a.createElement("br",null),r.a.createElement("label",null," First Name "),r.a.createElement("input",{type:"text",id:"firstName",placeholder:"Enter Last Name"}),r.a.createElement("br",null),r.a.createElement("label",null," Last Name "),r.a.createElement("input",{type:"text",id:"lastName",placeholder:"Enter Last Name"}),r.a.createElement("br",null),r.a.createElement("label",null," Email "),r.a.createElement("input",{type:"email",id:"email",placeholder:"Enter email"})," ",r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Create"))):null}}]),t}(r.a.Component),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={visibility:"visible"},a.showTable=function(){a.setState(function(e){return{visibility:"visible"}})},a.hideTable=function(){a.setState(function(e){return{visibility:"hidden"}})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://qacvmanager.azurewebsites.net/api/user/".concat(this.props.loginInfo[0],"/cv")).then(function(t){e.props.findCv(t.data)})}},{key:"render",value:function(){return 1===this.props.loginInfo[4]||6===this.props.loginInfo[4]?r.a.createElement("div",{id:"trainee"},r.a.createElement(E,{userId:this.props.loginInfo[0],firstName:this.props.loginInfo[1],lastName:this.props.loginInfo[2],role:this.props.loginInfo[5]}),r.a.createElement(C,{loginInfo:this.props.loginInfo,viewerId:this.props.loginInfo[4],cvs:this.props.cvs,onClick:this.props.findCv,visibility:this.state.visibility}),r.a.createElement(N,null)):""==this.props.loginInfo?r.a.createElement("div",{id:"noDep"},r.a.createElement("p",null,this.props.loginInfo[4]),r.a.createElement("h1",null,r.a.createElement("a",{href:"#/"},"Please log in."))):r.a.createElement("div",{id:"trainer"},r.a.createElement(E,{userId:this.props.loginInfo[1],firstName:this.props.loginInfo[1],lastName:this.props.loginInfo[2],role:this.props.loginInfo[5]}),r.a.createElement(y,{onSubmit:this.props.findUser}),r.a.createElement(S,{onChange:this.props.findCv,cvs:this.props.cvs}),r.a.createElement(N,null),r.a.createElement(I,{rows:this.props.rows,onClick:this.props.findCv,cvs:this.props.cvs}),r.a.createElement(C,{loginInfo:this.props.loginInfo,viewerId:this.props.loginInfo[4],cvs:this.props.cvs,onClick:this.props.findCv,visibility:this.state.visibility}),r.a.createElement(k,{viewerId:this.props.loginInfo[4]}))}}]),t}(r.a.Component),A=a(88),F=a(89),q=a(85),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).findUser=function(e){a.setState(function(t){return{rows:e}})},a.findCv=function(e){a.setState(function(t){return{cvs:e}})},a.resetCV=function(e){a.setState(function(t){return{cvs:e}})},a.logIn=function(e){a.setState(function(t){return{loginInfo:e}})},a.refreshCV=function(){a.setState(function(e){return{}})},a.state={loginInfo:[],cvs:[],rows:[]},a.baseState=a.state,a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(A.a,null,r.a.createElement("div",null,r.a.createElement("ul",{className:"header"},r.a.createElement("li",null,r.a.createElement(F.a,{exact:!0,to:"/user"},"User"))),r.a.createElement("div",{className:"content"},r.a.createElement(q.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(b,Object.assign({},t,{onSubmit:e.logIn,loginInfo:e.state.loginInfo}))}}),r.a.createElement(q.a,{path:"/user",render:function(t){return r.a.createElement(D,Object.assign({},t,{loginInfo:e.state.loginInfo,rows:e.state.rows,cvs:e.state.cvs,resetCV:e.resetCV,findUser:e.findUser,findCv:e.findCv}))}}))))}}]),t}(r.a.Component);s.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.db4e1369.chunk.js.map
webpackJsonp([4,17],{"3v19":function(t,e,r){var s=r("98jR");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r("rjj0")("0ef2e17a",s,!0)},"98jR":function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,".head-lavel{padding-bottom:50px}.table-button{padding:10px 0;float:left}.table-pagination,.table-search{float:right;padding:10px 0}",""])},"CH+q":function(t,e,r){"use strict";function s(t){r("3v19")}Object.defineProperty(e,"__esModule",{value:!0});var a=r("Dd8w"),l=r.n(a),i=r("ZTLr"),o=r("QmSG"),n=r("Guws"),c=r("NYxO"),u={components:{addWorkticket:n.default},data:function(){return{radio:"",tableData:[],tabletotal:0,currentPage:1,ticket_status:"",pagesize:[10,25,50,100],rowdata:{ticket_status:0,action_user:localStorage.getItem("username")},TICKET_STATUS_TEXT:{0:"未接收",1:"正在处理",2:"已解决"},TICKET_STATUS_TYPE:{0:"danger",1:"success",2:"info"},listQuery:{limit:o.LIMIT,offset:"",ticketid:"",ticket_status:"",create_user__username:"",action_user__username:"",search:"",ordering:""},workticketlist_btn_add:!1,workticketlist_btn_change_status:!1,btnstatus:!0,select_status:1,show_status:!1}},computed:l()({},Object(c.b)(["role","elements"])),created:function(){this.fetchData(),this.workticketlist_btn_add=this.elements["工单列表-新建工单按钮"],this.workticketlist_btn_change_status=this.elements["工单列表-更改工单状态按钮"]},methods:{fetchData:function(){var t=this;Object(i.f)(this.listQuery).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.offset=(t-1)*o.LIMIT,this.fetchData()},changeStatus:function(t){this.listQuery.ticket_status=t,this.fetchData()},showMeCreate:function(){this.listQuery.create_user__username=localStorage.getItem("username"),this.listQuery.action_user__username="",this.fetchData()},showMeAction:function(){this.listQuery.action_user__username=localStorage.getItem("username"),this.listQuery.create_user__username="",this.fetchData()},showAllTicket:function(){this.listQuery.create_user__username="",this.listQuery.action_user__username="",this.listQuery.search="",this.listQuery.ticket_status="",this.fetchData()},handleSelectionChange:function(t){this.selectId=[];for(var e=0,r=t.length;e<r;e++)this.selectId.push(t[e].id);this.selectId.length>0?this.btnstatus=!1:this.btnstatus=!0},changeForm:function(){for(var t=this,e=0,r=this.selectId.length;e<r;e++)this.rowdata.ticket_status=this.select_status,Object(i.g)(this.selectId[e],this.rowdata).then(function(r){delete t.selectId[e]});setTimeout(this.fetchData,2e3),this.show_status=!1},handleSortChange:function(t){"ascending"===t.order?this.listQuery.ordering=t.prop:"descending"===t.order?this.listQuery.ordering="-"+t.prop:this.listQuery.ordering="",this.fetchData()}}},p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("div",{staticClass:"head-lavel"},[r("div",{staticClass:"table-button"},["super"===t.role||t.workticketlist_btn_add?r("router-link",{attrs:{to:"addworkticket"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("新建工单")])],1):t._e(),t._v(" "),t.workticketlist_btn_change_status||"super"===t.role?r("el-button",{attrs:{type:"danger",disabled:t.btnstatus},on:{click:function(e){t.show_status=!0}}},[t._v("更改状态\n        ")]):t._e(),t._v(" "),r("el-button-group",[r("el-button",{attrs:{type:"danger",plain:"",size:"small"},on:{click:t.showAllTicket}},[t._v("全部")]),t._v(" "),r("el-button",{attrs:{type:"success",plain:"",size:"small"},on:{click:t.showMeCreate}},[t._v("我创建的工单")]),t._v(" "),r("el-button",{attrs:{type:"warning",plain:"",size:"small"},on:{click:t.showMeAction}},[t._v("我处理的工单")])],1),t._v(" "),r("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:t.changeStatus},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[r("el-radio",{attrs:{label:"0"}},[t._v("未接收")]),t._v(" "),r("el-radio",{attrs:{label:"1"}},[t._v("正在处理")]),t._v(" "),r("el-radio",{attrs:{label:"2"}},[t._v("已解决")])],1)],1),t._v(" "),r("div",{staticClass:"table-search"},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"110px"},attrs:{placeholder:"工单发起人"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.create_user__username,callback:function(e){t.$set(t.listQuery,"create_user__username",e)},expression:"listQuery.create_user__username"}}),t._v(" "),r("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{placeholder:"工单编号"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.ticketid,callback:function(e){t.$set(t.listQuery,"ticketid",e)},expression:"listQuery.ticketid"}}),t._v(" "),r("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{placeholder:"工单标题、内容或类型"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.search,callback:function(e){t.$set(t.listQuery,"search",e)},expression:"listQuery.search"}}),t._v(" "),r("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:t.searchClick}},[t._v("搜索")])],1)]),t._v(" "),r("div",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange,"sort-change":t.handleSortChange}},[t.workticketlist_btn_change_status||"super"===t.role?r("el-table-column",{attrs:{type:"selection"}}):t._e(),t._v(" "),r("el-table-column",{attrs:{prop:"ticketid",label:"工单编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("router-link",{attrs:{to:"editworkticket/"+e.row.ticketid}},[r("a",{staticStyle:{color:"#257cff"}},[t._v(t._s(e.row.ticketid))])])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"title",label:"标题"}}),t._v(" "),r("el-table-column",{attrs:{prop:"type",label:"工单类型"}}),t._v(" "),r("el-table-column",{attrs:{prop:"level",label:"工单等级",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[r("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],disabled:""},model:{value:e.row.level,callback:function(r){t.$set(e.row,"level",r)},expression:"scope.row.level"}})],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"ticket_status",label:"工单状态",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[r("el-tag",{attrs:{type:t.TICKET_STATUS_TYPE[e.row.ticket_status]}},[t._v("\n                "+t._s(t.TICKET_STATUS_TEXT[e.row.ticket_status])+"\n              ")])],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"create_user",label:"工单创建人"}}),t._v(" "),r("el-table-column",{attrs:{prop:"action_user",label:"工单指派者"}}),t._v(" "),r("el-table-column",{attrs:{prop:"edit_user",label:"最新回复人"}}),t._v(" "),r("el-table-column",{attrs:{prop:"create_time",label:"工单创建时间",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[r("span",[t._v(t._s(t._f("parseDate")(e.row.create_time)))])])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"update_time",label:"工单更新时间",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[r("span",[t._v(t._s(t._f("parseDate")(e.row.update_time)))])])]}}])})],1)],1),t._v(" "),r("div",{staticClass:"table-footer"},[r("div",{staticClass:"table-button"}),t._v(" "),r("div",{staticClass:"table-pagination"},[r("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)])]),t._v(" "),r("el-dialog",{attrs:{title:"更改状态",visible:t.show_status},on:{"update:visible":function(e){t.show_status=e}}},[r("el-radio-group",{model:{value:t.select_status,callback:function(e){t.select_status=e},expression:"select_status"}},[r("el-radio",{attrs:{label:0}},[t._v("未接收")]),t._v(" "),r("el-radio",{attrs:{label:1}},[t._v("正在处理")]),t._v(" "),r("el-radio",{attrs:{label:2}},[t._v("已关闭")])],1),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.show_status=!1}}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.changeForm}},[t._v("确 定")])],1)],1)],1)},d=[],_={render:p,staticRenderFns:d},h=_,m=r("VU/8"),f=s,v=m(u,h,!1,f,null,null);e.default=v.exports},Guws:function(t,e,r){"use strict";function s(t){r("mf2u")}Object.defineProperty(e,"__esModule",{value:!0});var a=r("BO1k"),l=r.n(a),i=r("Dd8w"),o=r.n(i),n=r("ZTLr"),c=r("nSkA"),u=r("vMJZ"),p=r("QmSG"),d=r("NYxO"),_=r("0xDb"),h={components:{},data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{title:"",type:"",content:"",create_user:localStorage.getItem("username"),level:2,action_user:"itsupport",edit_user:"",create_group:[],ticketid:""},rules:{title:[{required:!0,message:"请输入工单标题",trigger:"blur"}],content:[{required:!0,message:"请输入工单内容",trigger:"blur"}],type:[{required:!0,message:"请选择工单类型",trigger:"blur"}],level:[{required:!0,type:"number",message:"请确认工单等级",trigger:"blur"}]},users:[],fileList:[],count:0,enclosureFile:[],enclosureForm:{ticket:"",create_user:localStorage.getItem("username"),file:""},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,fullscreen:!0,help:!0},img_file:{},formDataList:[],to_list:"",cc_list:"",uploadurl:p.uploadurl,types:[]}},computed:o()({},Object(d.b)(["username","groups"])),created:function(){this.getTicketUsers(),this.getTicketType()},methods:{postForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.ruleForm.ticketid=Object(_.a)(),e.ruleForm.create_group=e.groups,Object(n.k)(e.ruleForm).then(function(t){'"Created"'===t.statusText&&e.$message({type:"success",message:"恭喜你，新建成功"});var r=!0,s=!1,a=void 0;try{for(var i,o=l()(e.fileList);!(r=(i=o.next()).done);r=!0){var u=i.value,p=new FormData;p.append("username",e.enclosureForm.create_user),p.append("file",u),p.append("create_time",Object(_.a)(u.uid)),p.append("type",u.type),p.append("archive",e.route_path[1]),Object(c.i)(p).then(function(r){e.enclosureForm.file=r.data.filepath,e.enclosureForm.ticket=t.data.id,Object(n.i)(e.enclosureForm)})}}catch(t){s=!0,a=t}finally{try{!r&&o.return&&o.return()}finally{if(s)throw a}}var d={action_user:e.ruleForm.action_user,title:"【新工单】"+e.ruleForm.title,message:"提交人: "+e.ruleForm.create_user+"\n指派人: "+e.ruleForm.action_user+"\n工单地址: http://"+window.location.host+"/#/worktickets/editworkticket/"+e.ruleForm.ticketid};Object(c.h)(d),e.$router.push("/worktickets/workticket")})})},resetForm:function(t){this.$refs[t].resetFields()},getTicketUsers:function(){var t=this;Object(u.f)().then(function(e){t.users=e.data})},getTicketType:function(){var t=this;Object(n.e)().then(function(e){t.types=e.data})},handleSuccess:function(t,e){this.fileList.push(e.raw),this.count+=1},handleRemove:function(t,e){this.fileList.remove(t),this.count-=1},imgAdd:function(t,e){var r=this.$refs.md,s=new FormData;s.append("username",this.enclosureForm.create_user),s.append("file",e),s.append("create_time",Object(_.a)(e.lastModified)),s.append("type",e.type),s.append("archive",this.route_path[1]),Object(c.i)(s).then(function(e){r.$imglst2Url([[t,e.data.file]])})}}},m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.ruleForm.title,callback:function(e){t.$set(t.ruleForm,"title",e)},expression:"ruleForm.title"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"指派人",prop:"action_user"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择指派人"},model:{value:t.ruleForm.action_user,callback:function(e){t.$set(t.ruleForm,"action_user",e)},expression:"ruleForm.action_user"}},t._l(t.users,function(t){return r("el-option",{key:t.id,attrs:{value:t.username}})})),t._v(" "),r("a",{staticClass:"tips"},[t._v(" Tip：当前工单处理人，默认是指派给ITSupport群组")])],1),t._v(" "),r("el-form-item",{attrs:{label:"工单类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择工单类型"},model:{value:t.ruleForm.type,callback:function(e){t.$set(t.ruleForm,"type",e)},expression:"ruleForm.type"}},t._l(t.types,function(t){return r("el-option",{key:t.id,attrs:{value:t.name}})}))],1),t._v(" "),r("el-form-item",{attrs:{label:"工单内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:t.toolbars},on:{imgAdd:t.imgAdd},model:{value:t.ruleForm.content,callback:function(e){t.$set(t.ruleForm,"content",e)},expression:"ruleForm.content"}}),t._v(" "),r("a",{staticClass:"tips"},[t._v(" Tip：截图可以直接 Ctrl + v 粘贴到工单内容里面")])],1),t._v(" "),r("el-form-item",{attrs:{label:"工单等级",prop:"level"}},[r("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:t.ruleForm.level,callback:function(e){t.$set(t.ruleForm,"level",e)},expression:"ruleForm.level"}}),t._v(" "),r("a",{staticClass:"tips"},[t._v("Tip：星数代表问题紧急程度，星数越多，代表越紧急")])],1),t._v(" "),r("el-form-item",[r("hr",{staticClass:"heng"}),t._v(" "),r("el-upload",{ref:"upload",attrs:{action:t.uploadurl,"on-success":t.handleSuccess,"on-remove":t.handleRemove,"file-list":t.fileList}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",disabled:t.count>2},slot:"trigger"},[t._v("\n            上传文件\n          ")]),t._v("\n          (可以不用上传)\n          "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[t._v("上传文件不超过10m，"),r("a",{staticStyle:{color:"red"}},[t._v("最多只能上传3个文件, 文件名不要带空格")])])])],1),t._v(" "),r("hr",{staticClass:"heng"})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.postForm("ruleForm")}}},[t._v("提交")]),t._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(e){t.resetForm("ruleForm")}}},[t._v("清空")])],1)],1)],1)],1)},f=[],v={render:m,staticRenderFns:f},b=v,g=r("VU/8"),k=s,y=g(h,b,!1,k,null,null);e.default=y.exports},mf2u:function(t,e,r){var s=r("nS08");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r("rjj0")("ca9e466a",s,!0)},nS08:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,".addticket{margin:50px;width:80%}",""])}});
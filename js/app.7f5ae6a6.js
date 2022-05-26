(function(){"use strict";var e={4646:function(e,t,n){var o=n(9963),s=n(6252);const a={class:"container"},r=(0,s._)("footer",null,[(0,s._)("div",{class:"attribution"},[(0,s.Uk)(" Challenge by "),(0,s._)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor"),(0,s.Uk)(". Coded by "),(0,s._)("a",{href:"https://hectoracosta.site/"},"Héctor Acosta"),(0,s.Uk)(". ")])],-1);function i(e,t){const n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("main",null,[(0,s.Wm)(n)]),r])}var m=n(3744);const l={},d=(0,m.Z)(l,[["render",i]]);var c=d,u=n(2119);const p={class:"cubre_comments"},h={class:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"mySmallModalLabel","aria-hidden":"true",id:"mi-modal"},_={class:"modal-dialog modal-sm",style:{"max-width":"320px"}},v={class:"modal-content modalDelete"},y=(0,s._)("h2",null,"Delete Comment",-1),g=(0,s._)("p",null," Are you sure you want to delete this comment? This will remove the comment and can't be undone. ",-1),C={class:"modal-footer footerModalDelete"};function U(e,t,n,o,a,r){const i=(0,s.up)("CommentComp");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",p,[(0,s.Wm)(i,{arrayComments:a.arrayComments,id_user:a.id_user,onCommentsUpdate:r.commentsUpdate,onUpdateUserInLocal:r.updateUserInLocal},null,8,["arrayComments","id_user","onCommentsUpdate","onUpdateUserInLocal"])]),(0,s._)("div",h,[(0,s._)("div",_,[(0,s._)("div",v,[y,g,(0,s._)("div",C,[(0,s._)("button",{type:"button",class:"btn btn-secondary btnModal","data-dismiss":"modal",onClick:t[0]||(t[0]=(...e)=>r.closeModal&&r.closeModal(...e))}," NO, CANCEL "),(0,s._)("button",{type:"button",class:"btn btn-danger btnModal",onClick:t[1]||(t[1]=e=>r.deleteComment())}," YES, DELETE ")])])])])],64)}var f=n(3577);const w={class:"comments"},b={class:"voting"},I={class:"cubreButtons"},k=["onClick"],$={class:"cant_voting"},R=["onClick"],D={class:"body_comment"},L={class:"header_comment"},E={class:"header_comment_profile"},M=["src"],F={class:"comment_username"},S={key:0,class:"youUsername"},x={class:"comment_date"},A={class:"content_comment"},T=["innerHTML"],O=["onClick"],B=(0,s._)("span",{class:"mdi mdi-reply iconReply"},null,-1),j=(0,s.Uk)(" Reply "),H=[B,j],P={key:1,class:"btns_options"},q=["onClick"],V=(0,s._)("span",{class:"mdi mdi-comment-remove-outline iconReply"},null,-1),Z=(0,s._)("span",null,"Delete",-1),z=[V,Z],N=["onClick"],Y=(0,s._)("span",{class:"mdi mdi-comment-edit-outline iconReply"},null,-1),K=(0,s._)("span",null,"Edit",-1),W=[Y,K];function J(e,t,n,o,a,r){const i=(0,s.up)("edit-form"),m=(0,s.up)("CommentReply"),l=(0,s.up)("FormReply"),d=(0,s.up)("FormComment");return(0,s.wg)(),(0,s.iD)(s.HY,null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.arrayComments,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"comment_list",key:t},[(0,s._)("div",w,[(0,s._)("div",b,[(0,s._)("div",I,[(0,s._)("div",{class:"btn_voting_up",onClick:t=>r.voting(1,e.id)},"+",8,k),(0,s._)("div",$,(0,f.zw)(e.score),1),(0,s._)("div",{class:"btn_voting_down",onClick:t=>r.voting(0,e.id)},"-",8,R)])]),(0,s._)("div",D,[(0,s._)("div",L,[(0,s._)("div",E,[(0,s._)("img",{src:"images/avatars/"+e.avatar,alt:"",class:"avatar"},null,8,M),(0,s._)("span",F,[(0,s.Uk)((0,f.zw)(e.username)+" ",1),e.id_user==n.id_user?((0,s.wg)(),(0,s.iD)("b",S,"you")):(0,s.kq)("",!0)]),(0,s._)("span",x,(0,f.zw)(r.parseTwitterDate(e.updated)),1)])]),(0,s._)("div",A,[this.$store.state.id_edit==e.id?((0,s.wg)(),(0,s.j4)(i,{key:0,idComment:e.id,contentComment:e.content,onCommentsUpdate:r.commentsUpdate},null,8,["idComment","contentComment","onCommentsUpdate"])):((0,s.wg)(),(0,s.iD)("div",{key:1,innerHTML:r.parseContent(e.content)},null,8,T))])]),e.id_user!==n.id_user?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"btn_reply",onClick:t=>r.sendReply(e.id,e.username)},H,8,O)):((0,s.wg)(),(0,s.iD)("div",P,[(0,s._)("div",{class:"btn_delete",onClick:t=>r.deleteCommentModal(e.id)},z,8,q),(0,s._)("div",{class:"btn_edit",onClick:t=>r.updateReply(e.id,e.content)},W,8,N)]))]),(0,s.Wm)(m,{replies:e.replies,id_user:n.id_user,onCommentsUpdate:r.commentsUpdate,onUpdateUserInLocal:r.updateUserInLocal},null,8,["replies","id_user","onCommentsUpdate","onUpdateUserInLocal"]),this.$store.state.id_parent==e.id&&0!=n.id_user?((0,s.wg)(),(0,s.j4)(l,{key:0,idComment:e.id,onCommentsUpdate:r.commentsUpdate,onUpdateUserInLocal:r.updateUserInLocal},null,8,["idComment","onCommentsUpdate","onUpdateUserInLocal"])):(0,s.kq)("",!0)])))),128)),0==n.id_user?((0,s.wg)(),(0,s.j4)(d,{key:0,id:"formInicial",id_user:n.id_user,avatarUser:n.avatar,parent:a.parent,onCommentsUpdate:r.commentsUpdate,onUpdateUserInLocal:r.updateUserInLocal},null,8,["id_user","avatarUser","parent","onCommentsUpdate","onUpdateUserInLocal"])):((0,s.wg)(),(0,s.j4)(l,{key:1,idComment:0,onCommentsUpdate:r.commentsUpdate,onUpdateUserInLocal:r.updateUserInLocal},null,8,["onCommentsUpdate","onUpdateUserInLocal"]))],64)}n(6699);const G={class:"formInicial"},Q={class:"mb-3"},X=(0,s._)("label",{for:"selectAvatar",class:"form-label fontBold"},"Select Avatar",-1),ee={class:"selectAvatar"},te=["src","onClick"],ne={key:0,class:"alert alert-danger errorForm",role:"alert"},oe={class:"mb-3"},se={key:0,class:"alert alert-danger errorForm",role:"alert"},ae={class:"mb-3"},re={key:0,class:"alert alert-danger errorForm",role:"alert"},ie=(0,s._)("div",{class:"form-footer"},[(0,s._)("button",{type:"submit",class:"btnSend"},"SEND")],-1);function me(e,t,n,a,r,i){return(0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("form",{id:"app",onSubmit:t[3]||(t[3]=(...e)=>i.enviarCommentInicial&&i.enviarCommentInicial(...e))},[(0,s._)("div",Q,[X,(0,s._)("div",ee,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.arrayAvatars,((e,t)=>((0,s.wg)(),(0,s.iD)("img",{key:t,src:"images/avatars/"+e,alt:"",class:(0,f.C_)(["avatar",{selectedAva:r.avatarSelected==t}]),onClick:e=>i.selectAvatar(t)},null,10,te)))),128))]),r.errorAvatar?((0,s.wg)(),(0,s.iD)("div",ne," You must select an avatar ")):(0,s.kq)("",!0)]),(0,s._)("div",oe,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",onKeydown:t[0]||(t[0]=(0,o.D2)((e=>e.preventDefault()),["space"])),placeholder:"Add username","onUpdate:modelValue":t[1]||(t[1]=e=>r.username=e)},null,544),[[o.nr,r.username]]),r.errorUsername?((0,s.wg)(),(0,s.iD)("div",se," Username cannot be empty ")):(0,s.kq)("",!0)]),(0,s._)("div",ae,[(0,s.wy)((0,s._)("textarea",{class:"form-control",rows:"3",placeholder:"Add comment","onUpdate:modelValue":t[2]||(t[2]=e=>r.comment=e)},null,512),[[o.nr,r.comment]]),r.errorComment?((0,s.wg)(),(0,s.iD)("div",re," Comment cannot be empty ")):(0,s.kq)("",!0)]),ie],32)])}var le={name:"FormComment",emits:["commentsUpdate","updateUserInLocal"],props:["id_user","parent"],data(){return{errorUsername:!1,errorComment:!1,errorAvatar:!1,username:"",comment:"",avatarSelected:null,arrayAvatars:["image-amyrobson.png","image-juliusomo.png","image-maxblagun.png","image-ramsesmiron.png"]}},methods:{enviarCommentInicial(e){return e.preventDefault(),console.log("se hizo submit"),this.errorAvatar=!1,this.errorUsername=!1,this.errorComment=!1,null==this.avatarSelected?(console.log("error avtar"),this.errorAvatar=!0,!1):""==this.username?(console.log("error username"),this.errorUsername=!0,!1):""==this.comment?(console.log("error comment"),this.errorComment=!0,!1):void this.sendComment()},async sendComment(){await this.axios.post(this.$store.state.urlBack+"/comments/",{avatar:this.arrayAvatars[this.avatarSelected],username:this.username,content:this.comment,id_user:this.id_user,parent:this.parent}).then((e=>{console.log(e);var t=this.id_user;0==t&&(t=e.data.id_user,this.$store.commit("setIdParent",0),localStorage.setItem("userComment",JSON.stringify({id_user:e.data.id_user,username:this.username,avatar:this.arrayAvatars[this.avatarSelected]}))),this.$emit("commentsUpdate",t),this.$emit("updateUserInLocal",t),this.formReset()}))},formReset(){this.username="",this.comment="",this.avatar=null,this.avatarSelected=null},selectAvatar(e){console.log(e),this.avatarSelected=e}}};const de=(0,m.Z)(le,[["render",me]]);var ce=de;const ue=["id"],pe={id:"app"},he=["src"],_e=["id","disabled"],ve=["disabled"];function ye(e,t,n,a,r,i){return(0,s.wg)(),(0,s.iD)("div",{class:"formReply",id:"formReply_"+n.idComment},[(0,s._)("form",pe,[(0,s._)("img",{src:"images/avatars/"+r.avatar,class:"avatar"},null,8,he),(0,s.wy)((0,s._)("textarea",{class:"form-control",rows:"3",placeholder:"Add comment",id:"content_"+n.idComment,"onUpdate:modelValue":t[0]||(t[0]=e=>r.content=e),required:"",disabled:r.disableForm},null,8,_e),[[o.nr,r.content]]),(0,s._)("button",{type:"button",class:"btnSend",onClick:t[1]||(t[1]=e=>i.sendReply()),disabled:r.disableForm}," SEND ",8,ve)])],8,ue)}var ge={name:"FormReply",emits:["commentsUpdate","updateUserInLocal"],props:["idComment"],data(){return{username:"",content:"",avatar:"",id_user:null,disableForm:!1}},methods:{async sendReply(){if(null===this.content)return!1;this.disableForm=!0,await this.axios.post(this.$store.state.urlBack+"/comments/",{avatar:this.avatar,username:this.username,content:this.content,id_user:this.id_user,parent:this.idComment}).then((e=>{console.log(e.data.id_comment),this.$store.commit("setIdParent",0),this.$emit("commentsUpdate",this.id_user),this.$emit("updateUserInLocal",this.id_user),this.content=null,this.disableForm=!1,setTimeout((function(){document.getElementById("formReply_"+e.data.id_comment).scrollIntoView(),document.getElementById("content_"+e.data.id_comment).focus()}),100)}))}},mounted(){console.log("this.$store.state.usernameReply",this.$store.state.usernameReply),""!=this.$store.state.usernameReply&&(this.content=`@${this.$store.state.usernameReply}, `);const e=JSON.parse(localStorage.getItem("userComment"));e&&(this.username=e.username,this.avatar=e.avatar,this.id_user=e.id_user)}};const Ce=(0,m.Z)(ge,[["render",ye]]);var Ue=Ce;const fe={class:"comments"},we={class:"voting"},be={class:"cubreButtons"},Ie=["onClick"],ke={class:"cant_voting"},$e=["onClick"],Re={class:"body_comment"},De={class:"header_comment"},Le={class:"header_comment_profile"},Ee=["src"],Me={class:"comment_username"},Fe={key:0,class:"youUsername"},Se={class:"comment_date"},xe={class:"content_comment"},Ae=["innerHTML"],Te=["onClick"],Oe=(0,s._)("span",{class:"mdi mdi-reply iconReply"},null,-1),Be=(0,s.Uk)(" Reply "),je=[Oe,Be],He={key:1,class:"btns_options"},Pe=["onClick"],qe=(0,s._)("span",{class:"mdi mdi-comment-remove-outline iconReply"},null,-1),Ve=(0,s._)("span",null,"Delete",-1),Ze=[qe,Ve],ze=["onClick"],Ne=(0,s._)("span",{class:"mdi mdi-comment-edit-outline iconReply"},null,-1),Ye=(0,s._)("span",null,"Edit",-1),Ke=[Ne,Ye];function We(e,t,n,o,a,r){const i=(0,s.up)("edit-form"),m=(0,s.up)("CommentReply",!0),l=(0,s.up)("FormReply");return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.replies,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"comment_reply_div",key:t},[(0,s._)("div",fe,[(0,s._)("div",we,[(0,s._)("div",be,[(0,s._)("div",{class:"btn_voting_up",onClick:t=>r.voting(1,e.id)},"+",8,Ie),(0,s._)("div",ke,(0,f.zw)(e.score),1),(0,s._)("div",{class:"btn_voting_down",onClick:t=>r.voting(0,e.id)},"-",8,$e)])]),(0,s._)("div",Re,[(0,s._)("div",De,[(0,s._)("div",Le,[(0,s._)("img",{src:"images/avatars/"+e.avatar,alt:"",class:"avatar"},null,8,Ee),(0,s._)("span",Me,[(0,s.Uk)((0,f.zw)(e.username)+" ",1),e.id_user==n.id_user?((0,s.wg)(),(0,s.iD)("b",Fe,"you")):(0,s.kq)("",!0)]),(0,s._)("span",Se,(0,f.zw)(r.parseTwitterDate(e.updated)),1)])]),(0,s._)("div",xe,[this.$store.state.id_edit==e.id?((0,s.wg)(),(0,s.j4)(i,{key:0,idComment:e.id,contentComment:e.content,onCommentsUpdate:r.commentsUpdate},null,8,["idComment","contentComment","onCommentsUpdate"])):((0,s.wg)(),(0,s.iD)("div",{key:1,innerHTML:r.parseContent(e.content)},null,8,Ae))])]),e.id_user!==n.id_user?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"btn_reply",onClick:t=>r.sendReply(e.id,e.username)},je,8,Te)):((0,s.wg)(),(0,s.iD)("div",He,[(0,s._)("div",{class:"btn_delete",onClick:t=>r.deleteCommentModal(e.id)},Ze,8,Pe),(0,s._)("div",{class:"btn_edit",onClick:t=>r.updateReply(e.id,e.content)},Ke,8,ze)]))]),(0,s.Wm)(m,{replies:e.replies,id_user:n.id_user,onCommentsUpdate:r.commentsUpdate,onUpdateUserInLocal:r.updateUserInLocal},null,8,["replies","id_user","onCommentsUpdate","onUpdateUserInLocal"]),this.$store.state.id_parent==e.id&&0!=n.id_user?((0,s.wg)(),(0,s.j4)(l,{key:0,idComment:e.id,onCommentsUpdate:r.commentsUpdate,onUpdateUserInLocal:r.updateUserInLocal},null,8,["idComment","onCommentsUpdate","onUpdateUserInLocal"])):(0,s.kq)("",!0)])))),128)}const Je={class:"edit_form"},Ge=["id","disabled"],Qe=["disabled"];function Xe(e,t,n,a,r,i){return(0,s.wg)(),(0,s.iD)("div",Je,[(0,s.wy)((0,s._)("textarea",{class:"form-control",rows:"3",placeholder:"Add comment",id:"content_"+n.idComment,"onUpdate:modelValue":t[0]||(t[0]=e=>r.content=e),required:"",disabled:r.disableForm},null,8,Ge),[[o.nr,r.content]]),(0,s._)("button",{type:"button",class:"btnSend",onClick:t[1]||(t[1]=e=>i.sendEditReply()),disabled:r.disableForm}," Update ",8,Qe)])}var et={props:["idComment","contentComment","commentsUpdate"],name:"EditForm",data(){return{content:this.contentComment,disableForm:!1}},methods:{async sendEditReply(){if(""==this.content)return console.log("no puede estar vacio"),!1;this.disableForm=!0,await this.axios.put(this.$store.state.urlBack+"/comments/"+this.idComment,{content:this.content}).then((e=>{console.log("response edit comment",e),this.disableForm=!1,this.$store.commit("setIdEdit",0),this.$store.commit("setIdParent",0),this.$emit("commentsUpdate",this.id_user)})).catch((e=>{console.log(e)}))}}};const tt=(0,m.Z)(et,[["render",Xe]]);var nt=tt,ot=function(){var e=navigator.userAgent;return{ie:e.match(/MSIE\s([^;]*)/)}}(),st={name:"CommentReply",emits:["commentsUpdate","updateUserInLocal"],props:["replies","id_user"],data(){return{}},methods:{updateUserInLocal(){this.$emit("updateUserInLocal")},async voting(e,t){await this.axios.post(this.$store.state.urlBack+"/comments/voting/"+t,{id_user:this.id_user,type:e}).then((e=>{console.log("response",e),this.$emit("commentsUpdate",this.id_user)})).catch((e=>{alert(e.response.data.msg)}))},deleteCommentModal(e){this.$store.commit("setIdDelete",e),window.$("#mi-modal").modal("show")},updateReply(e,t){this.$store.commit("setIdEdit",e),this.$store.commit("setIdParent",0),this.contentEdit=t},commentsUpdate(e){this.formReplyId=0,this.$emit("commentsUpdate",e)},async sendReply(e,t){console.log("username",t),this.$store.commit("setIdParent",e),this.$store.commit("setIdEdit",0),this.$store.commit("setUsernameReply",t),0==this.id_user?(this.formInicial=!0,setTimeout((function(){window.scrollTo(0,document.body.scrollHeight)}),100)):setTimeout((function(){document.getElementById("formReply_"+e).scrollIntoView(),document.getElementById("content_"+e).focus()}),100)},parseContent(e){if(e.includes("@")){var t=e.split(",");return`<span class="usernameReply" >${t[0]}, </span> ${t[1]}`}return e},parseTwitterDate(e){var t=new Date(Date.parse(e)),n=new Date;ot.ie&&(t=Date.parse(e.replace(/( \+)/," UTC$1")));var o=Math.floor((n-t)/1e3);return o<=1?"just now":o<20?o+" seconds ago":o<40?"half a minute ago":o<60?"less than a minute ago":o<=90?"one minute ago":o<=3540?Math.round(o/60)+" minutes ago":o<=5400?"1 hour ago":o<=86400?Math.round(o/3600)+" hours ago":o<=129600?"1 day ago":o<604800?Math.round(o/86400)+" days ago":o<=777600?"1 week ago":"on "+t}},components:{CommentReply:rt,FormReply:Ue,EditForm:nt}};const at=(0,m.Z)(st,[["render",We]]);var rt=at,it=function(){var e=navigator.userAgent;return{ie:e.match(/MSIE\s([^;]*)/)}}(),mt={name:"CommentComp",emits:["commentsUpdate","updateUserInLocal"],props:["arrayComments","id_user","avatar"],watch:{id_user(e){e>0&&(this.formInicial=!1)}},data(){return{formInicial:!1,parent:0,formReplyId:0,formUpdateId:0,contentEdit:"",disableForm:!1,id_delete:0}},computed:{},methods:{updateUserInLocal(){this.$emit("updateUserInLocal")},async voting(e,t){await this.axios.post(this.$store.state.urlBack+"/comments/voting/"+t,{id_user:this.id_user,type:e}).then((e=>{console.log("response",e),this.$emit("commentsUpdate",this.id_user)})).catch((e=>{alert(e.response.data.msg)}))},deleteCommentModal(e){this.$store.commit("setIdDelete",e),window.$("#mi-modal").modal("show")},async sendEditReply(e,t){if(console.log(e,t),""==t)return console.log("no puede estar vacio"),!1;this.disableForm=!0,await this.axios.put(this.$store.state.urlBack+"/comments/"+e,{content:this.contentEdit}).then((e=>{console.log("response edit comment",e),this.contentEdit="",this.formUpdateId=0,this.disableForm=!1,this.$emit("commentsUpdate",this.id_user)})).catch((e=>{console.log(e)}))},updateReply(e,t){this.$store.commit("setIdEdit",e),this.$store.commit("setIdParent",0),this.contentEdit=t},commentsUpdate(e){this.formReplyId=0,this.$emit("commentsUpdate",e)},async sendReply(e,t){this.$store.commit("setIdParent",e),this.$store.commit("setIdEdit",0),this.$store.commit("setUsernameReply",t),0==this.id_user?(this.formInicial=!0,setTimeout((function(){window.scrollTo(0,document.body.scrollHeight)}),100)):setTimeout((function(){document.getElementById("formReply_"+e).scrollIntoView(),document.getElementById("content_"+e).focus()}),100)},parseContent(e){if(e.includes("@")){var t=e.split(",");return`<span class="usernameReply" >${t[0]}, </span> ${t[1]}`}return e},parseTwitterDate(e){var t=new Date(Date.parse(e)),n=new Date;it.ie&&(t=Date.parse(e.replace(/( \+)/," UTC$1")));var o=Math.floor((n-t)/1e3);return o<=1?"just now":o<20?o+" seconds ago":o<40?"half a minute ago":o<60?"less than a minute ago":o<=90?"one minute ago":o<=3540?Math.round(o/60)+" minutes ago":o<=5400?"1 hour ago":o<=86400?Math.round(o/3600)+" hours ago":o<=129600?"1 day ago":o<604800?Math.round(o/86400)+" days ago":o<=777600?"1 week ago":"on "+t}},components:{FormComment:ce,FormReply:Ue,CommentReply:rt,EditForm:nt}};const lt=(0,m.Z)(mt,[["render",J]]);var dt=lt,ct={name:"HomeView",components:{CommentComp:dt},emits:["commentsUpdate"],data(){return{arrayComments:[],id_user:0,contador:0,avatar:""}},methods:{updateUserInLocal(){var e=localStorage.getItem("userComment");e&&(e=JSON.parse(e),this.id_user=e.id_user,this.avatar=e.avatar)},closeModal(){window.$("#mi-modal").modal("hide")},async deleteComment(){await this.axios.delete(this.$store.state.urlBack+"/comments/"+this.$store.state.id_delete,{id_user:this.id_user}).then((e=>{console.log("response delete comment",e),this.getComments(),window.$("#mi-modal").modal("hide")})).catch((e=>{console.log(e)}))},commentsUpdate(e){this.id_user=e,this.getComments()},async getComments(){await this.axios.get(this.$store.state.urlBack+"/comments/").then((e=>{console.log(e),this.arrayComments=e.data}))}},mounted(){this.updateUserInLocal(),this.getComments()}};const ut=(0,m.Z)(ct,[["render",U]]);var pt=ut;const ht=[{path:"/",name:"home",component:pt}],_t=(0,u.p7)({history:(0,u.PO)("/interactive_comments/"),routes:ht});var vt=_t,yt=n(3907),gt=(0,yt.MT)({state:{urlBack:"https://comments.hectoracosta.site/api",id_delete:0,id_parent:0,id_edit:0,usernameReply:""},getters:{},mutations:{setUsernameReply(e,t){e.usernameReply=t},setIdDelete(e,t){e.id_delete=t},setIdEdit(e,t){e.id_edit=t},setIdParent(e,t){e.id_parent=t}},actions:{},modules:{}}),Ct=n(9669),Ut=n.n(Ct),ft=n(2346);(0,o.ri)(c).use(gt).use(vt).use(ft.Z,Ut()).mount("#app")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o](a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,s,a){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],a=e[d][2];for(var i=!0,m=0;m<o.length;m++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[m])}))?o.splice(m--,1):(i=!1,a<r&&(r=a));if(i){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,a,r=o[0],i=o[1],m=o[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(m)var d=m(n)}for(t&&t(o);l<r.length;l++)a=r[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4646)}));o=n.O(o)})();
//# sourceMappingURL=app.7f5ae6a6.js.map
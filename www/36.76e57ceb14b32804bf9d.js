(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{FhbL:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=function(){return function(){}}(),b=u("pMnS"),e=u("oBZk"),i=u("ZZ/e"),p=u("Ip0R"),r=u("mrSG"),s=u("yTNM"),c=u("f0ZK"),a=function(){function n(n,l,u,t,o){this.api=n,this.router=l,this.navCtrl=u,this.settings=t,this.route=o}return n.prototype.getPost=function(){return r.b(this,void 0,void 0,function(){var n=this;return r.e(this,function(l){switch(l.label){case 0:return[4,this.api.postItem("page_content",{page_id:this.id}).subscribe(function(l){n.post=l},function(n){console.log(n)})];case 1:return l.sent(),[2]}})})},n.prototype.ngOnInit=function(){this.id=this.route.snapshot.paramMap.get("id"),this.getPost()},n}(),g=u("ZYCi"),f=t.nb({encapsulation:0,styles:[[".post[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:0;box-shadow:none}.post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:20px 0 10px 16px;font-size:18px}.post[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;margin:5px 16px 8px;line-height:1.6}.post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;text-indent:0;font-size:14px;text-align:justify;margin:14px 16px 16px;font-weight:500}.post[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:auto}"]],data:{}});function h(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,2,"ion-title",[],null,null,null,e.Rb,e.U)),t.ob(1,49152,null,0,i.zb,[t.h,t.k],null,null),(n()(),t.Gb(2,0,[" "," "]))],null,function(n,l){n(l,2,0,l.component.post.post_title)})}function d(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,2,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"ion-spinner",[],null,null,null,e.Lb,e.O)),t.ob(2,49152,null,0,i.rb,[t.h,t.k],null,null)],null,null)}function m(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"ion-img",[["alt",""]],null,null,null,e.sb,e.v)),t.ob(1,49152,null,0,i.D,[t.h,t.k],{alt:[0,"alt"],src:[1,"src"]},null)],function(n,l){n(l,1,0,"",t.rb(1,"",l.component.post.image,""))},null)}function x(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,11,"ion-card",[],null,null,null,e.hb,e.g)),t.ob(1,49152,null,0,i.m,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,m)),t.ob(3,16384,null,0,p.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(4,0,null,0,4,"ion-card-header",[],null,null,null,e.eb,e.i)),t.ob(5,49152,null,0,i.o,[t.h,t.k],null,null),(n()(),t.pb(6,0,null,0,2,"ion-card-title",[],null,null,null,e.gb,e.k)),t.ob(7,49152,null,0,i.q,[t.h,t.k],null,null),(n()(),t.Gb(8,0,["",""])),(n()(),t.pb(9,0,null,0,2,"ion-card-content",[],null,null,null,e.db,e.h)),t.ob(10,49152,null,0,i.n,[t.h,t.k],null,null),(n()(),t.pb(11,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],function(n,l){n(l,3,0,l.component.post.image)},function(n,l){var u=l.component;n(l,8,0,u.post.post_title),n(l,11,0,u.post.post_content)})}function k(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,10,"ion-header",[["mode","ios"]],null,null,null,e.qb,e.t)),t.ob(1,49152,null,0,i.B,[t.h,t.k],{mode:[0,"mode"]},null),(n()(),t.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,e.Tb,e.W)),t.ob(3,49152,null,0,i.Bb,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,e.cb,e.f)),t.ob(5,49152,null,0,i.l,[t.h,t.k],null,null),(n()(),t.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/tabs/home"]],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.zb(n,8).onClick(u)&&o),o},e.Z,e.c)),t.ob(7,49152,null,0,i.g,[t.h,t.k],{defaultHref:[0,"defaultHref"]},null),t.ob(8,16384,null,0,i.h,[[2,i.hb],i.Hb],{defaultHref:[0,"defaultHref"]},null),(n()(),t.gb(16777216,null,0,1,null,h)),t.ob(10,16384,null,0,p.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(11,0,null,null,5,"ion-content",[["class","post"]],null,null,null,e.lb,e.o)),t.ob(12,49152,null,0,i.u,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,d)),t.ob(14,16384,null,0,p.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,0,1,null,x)),t.ob(16,16384,null,0,p.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,1,0,"ios"),n(l,3,0,t.rb(1,"",u.settings.theme.header,"")),n(l,7,0,"/tabs/home"),n(l,8,0,"/tabs/home"),n(l,10,0,null==u.post?null:u.post.post_title),n(l,14,0,!u.post),n(l,16,0,u.post)},null)}function I(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"app-post",[],null,null,null,k,f)),t.ob(1,114688,null,0,a,[s.a,g.m,i.Hb,c.a,g.a],null,null)],function(n,l){n(l,1,0)},null)}var O=t.lb("app-post",a,I,{},{},[]),_=u("gIcY"),M=u("A7o+");u.d(l,"PostPageModuleNgFactory",function(){return C});var C=t.mb(o,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[b.a,O]],[3,t.j],t.x]),t.xb(4608,p.o,p.n,[t.u,[2,p.u]]),t.xb(4608,i.b,i.b,[t.z,t.g]),t.xb(4608,i.Gb,i.Gb,[i.b,t.j,t.q]),t.xb(4608,i.Lb,i.Lb,[i.b,t.j,t.q]),t.xb(4608,_.t,_.t,[]),t.xb(1073742336,p.b,p.b,[]),t.xb(1073742336,i.Db,i.Db,[]),t.xb(1073742336,M.g,M.g,[]),t.xb(1073742336,_.r,_.r,[]),t.xb(1073742336,_.g,_.g,[]),t.xb(1073742336,g.n,g.n,[[2,g.t],[2,g.m]]),t.xb(1073742336,o,o,[]),t.xb(1024,g.k,function(){return[[{path:"",component:a}]]},[])])})}}]);
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[845],{3845:(S,g,e)=>{e.r(g),e.d(g,{AuthModule:()=>C});var f=e(9808),m=e(7940),r=e(3075),p=e(5226),h=e.n(p),u=e(2340),t=e(5e3),c=e(3349);let v=(()=>{class n{constructor(o){this.httpApiService=o}login(o){return this.httpApiService.httpApi(c.h.POST,"auth/login",o)}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(c.O))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var d=e(7093),s=e(9224),l=e(7322),Z=e(7531),A=e(6643),b=e(7423);const L=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class n{constructor(o,a){this.authService=o,this.router=a}ngOnInit(){this.environmentString=u.N.envString,this.mailTo=u.N.mailTo,this.formLogin=new r.cw({username:new r.NI("",[r.kI.required,r.kI.minLength(4),r.kI.maxLength(100)]),password:new r.NI("",[r.kI.required,r.kI.minLength(4),r.kI.maxLength(100)])})}onSubmit(){if(this.formLogin.valid){const o=this.formLogin.getRawValue();this.authService.login(o).subscribe(a=>{sessionStorage.setItem("usuario",JSON.stringify(a.user)),sessionStorage.setItem("token",JSON.stringify(a.token)),3==a.user.rol.IdRol?a.user.IdSite?this.router.navigate(["/pages/registro"]):h().fire({icon:"question",title:"UNAUTHORIZED",text:"Este usuario no cuenta con un sitio asignado, por favor contactar al administrador del sitio correspondiente para poder acceder."}):this.router.navigate(["/pages/home"])})}}get form(){return this.formLogin.controls}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(v),t.Y36(m.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:29,vars:4,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"login-wrapper"],["fxLayout","column","fxLayoutAlign","center"],["id","logo"],["fxLayout","column","fxLayoutAlign"," center",3,"formGroup","ngSubmit"],["floatLabel","always","appearance","outline"],["matInput","","formControlName","username","type","text","placeholder","Id de Usuario"],["nomCampo","usuario",3,"control"],["matInput","","formControlName","password","type","password","placeholder","password"],["nomCampo","password",3,"control"],["type","submit","mat-raised-button","","color","primary"],["fxLayout","row","fxLayoutAlign","space-around center"],["href","https://sigmagroup.service-now.com/sp/?id=landing"],["id","snow",1,"imagenes"],[3,"href"],["id","email",1,"imagenes"],["href","https://wa.me/+18304765706"],["id","sigmabot",1,"imagenes"],["href","https://www.office.com"],["id","office",1,"imagenes"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-title"),t._UZ(3,"div",2),t.qZA(),t.TgZ(4,"mat-card-content")(5,"form",3),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(6,"mat-form-field",4)(7,"mat-label"),t._uU(8,"Usuario"),t.qZA(),t._UZ(9,"input",5),t.TgZ(10,"mat-error"),t._UZ(11,"mat-error-message",6),t.qZA()(),t.TgZ(12,"mat-form-field",4)(13,"mat-label"),t._uU(14,"password"),t.qZA(),t._UZ(15,"input",7),t.TgZ(16,"mat-error"),t._UZ(17,"mat-error-message",8),t.qZA()(),t.TgZ(18,"button",9),t._uU(19,"Entrar"),t.qZA()()(),t.TgZ(20,"mat-card-actions",10)(21,"a",11),t._UZ(22,"div",12),t.qZA(),t.TgZ(23,"a",13),t._UZ(24,"div",14),t.qZA(),t.TgZ(25,"a",15),t._UZ(26,"div",16),t.qZA(),t.TgZ(27,"a",17),t._UZ(28,"div",18),t.qZA()()()()),2&o&&(t.xp6(5),t.Q6J("formGroup",a.formLogin),t.xp6(6),t.Q6J("control",a.form.username),t.xp6(6),t.Q6J("control",a.form.password),t.xp6(6),t.MGl("href","mailto:",a.mailTo,"",t.LSH))},directives:[d.xw,d.Wh,s.a8,s.n5,s.dn,r._Y,r.JL,r.sg,l.KE,l.hX,Z.Nt,r.Fj,r.JJ,r.u,l.TO,A.H,b.lW,s.hq],styles:[".login-wrapper[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}mat-card[_ngcontent-%COMP%]{min-width:365px}mat-form-field[_ngcontent-%COMP%]{min-width:-webkit-fill-available}button[_ngcontent-%COMP%]{min-width:-webkit-fill-available}.imagenes[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:contain;background-position:center;width:30px;height:30px}#logo[_ngcontent-%COMP%]{background-image:url(Common\\ Pass.ae3f4d07ac44140b.png);background-repeat:no-repeat;background-size:contain;background-position:center;width:100%;height:50px}#snow[_ngcontent-%COMP%]{background-image:url(snow.4bb176e63ba9cf42.png)}#email[_ngcontent-%COMP%]{background-image:url(email.c65e1d7b703bc72e.png)}#service[_ngcontent-%COMP%]{background-image:url(sdesk.d1a587d1a2b1a8d7.png)}#sigmabot[_ngcontent-%COMP%]{background-image:url(sigmabot.2fc2e635087216f9.png)}#office[_ngcontent-%COMP%]{background-image:url(reset.71418ed72f19caa3.png)}"]}),n})()}];let w=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.Bz.forChild(L)],m.Bz]}),n})();var y=e(608);let C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[y.m,f.ez,w]]}),n})()}}]);
define(["jquery","underscore","app/utils/utils","text!app/template/admin/checkTrack.html"],function(b,c,d,e){return function(f){this.init=function(a){this.parent=a;this.el=b(".tracks")};this.render=function(a){c.templateSettings.variable="data";var b=c.template(e);this.el.html(b({tracks:a.connexions,nbrConnexion:a.nbrConnexion}))};this.show=function(a){var c=this;d.load("admin/check",a,function(a){0!=a.codeRetour?(b("#message").text(a.message),b("#message").attr("class","error")):(b("#message").attr("class",
"info"),c.render(a))},"POST")};this.init(f)}});
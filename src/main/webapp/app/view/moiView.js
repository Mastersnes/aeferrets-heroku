define(["jquery","underscore","app/utils/utils","app/utils/mediaUtils","text!app/template/moi.html"],function(b,c,d,e,f){return function(g){this.init=function(a){this.parent=a;this.el=b(".mainPage .corps");this.mediaUtils=new e};this.render=function(){c.templateSettings.variable="data";var a=c.template(f);this.el.html(a({}));this.makeEvents()};this.renderMoi=function(){var a=this.moi;b(".moi .titre").html(a.titre);this.mediaUtils.renderImage(".moi",a.image);this.mediaUtils.renderVideo(".moi",a.video);
b(".moi .resume").html(a.texte)};this.makeEvents=function(){this.mediaUtils.makeEvents()};this.show=function(){this.render();this.load()};this.load=function(){var a=this;d.load("moi",null,function(b){0===b.codeRetour&&(a.moi=b.moi,a.renderMoi())},"POST")};this.init(g)}});
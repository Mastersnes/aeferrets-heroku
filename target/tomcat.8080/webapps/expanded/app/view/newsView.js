define("jquery underscore app/utils/utils app/utils/tracking app/utils/mediaUtils text!app/template/news.html app/model/newsModel".split(" "),function(a,d,f,h,k,l,m){return function(n){this.init=function(b){this.parent=b;this.el=a(".mainPage .corps");this.mediaUtils=new k;this.model=new m;this.select=0};this.render=function(){d.templateSettings.variable="data";var b=d.template(l);this.el.html(b({}));this.makeEvents()};this.renderNews=function(){var b=this.listNews[this.select];a(".news .date").html(this.model.getDate());
h.push("Affichage de la news "+b.titre);a(".news .titre").html(b.titre);this.mediaUtils.renderImage(".news",b.image);this.mediaUtils.renderVideo(".news",b.video);a(".news .resume").html(b.texte);0<this.select||this.next?(a(".news .next").show(),a(".news .preview").css("width","50%")):(a(".news .next").hide(),a(".news .preview").css("width","100%"));this.select<this.listNews.length-1||this.preview?(a(".news .preview").show(),a(".news .next").css("width","50%")):(a(".news .preview").hide(),a(".news .next").css("width",
"100%"))};this.renderDate=function(b){var g=this;a(".news.liste ul").html("");for(var c=0;c<b.length;c++){var d=b[c],e=document.createElement("li");a(e).html(f.formatDate(d));a(e).attr("key",d);a(e).click(function(){g.model.setDate(a(this).attr("key"));g.load()});a(".news.liste ul").append(e)}};this.makeEvents=function(){this.mediaUtils.makeEvents();var b=this;a(".news .preview").click(function(){b.select++;b.select>b.listNews.length-1?(b.model.setDate(b.preview),b.load()):b.renderNews()});a(".news .next").click(function(){b.select--;
0>b.select?(b.model.setDate(b.next),b.load(!0)):b.renderNews()})};this.show=function(){this.model.setDate("last");this.select=0;this.render();this.load()};this.load=function(b){var a=this;f.load("news",this.model.data,function(c){0===c.codeRetour&&(a.listNews=c.news,a.select=b?a.listNews.length-1:0,a.preview=c.preview,a.next=c.next,a.model.resetIf(c.date),a.renderNews(),a.renderDate(c.date))},"POST")};this.init(n)}});
define("jquery underscore app/utils/utils app/utils/tracking text!app/template/panier.html app/view/livraisonView jqueryui".split(" "),function(b,l,p,q,m,n){return function(){this.init=function(){this.el=b("#panier-popup");this.listArticle=JSON.parse(sessionStorage.getItem("aeferrets.panier"));this.offreAFaire=this.nbrLivre=this.fdp=0;this.listArticle?b(".panier").show("slow"):this.listArticle=[];this.render()};this.render=function(){l.templateSettings.variable="data";var a=l.template(m);this.el.html(a({}));
this.livraison=new n;this.makeEvents()};this.makeEvents=function(){var a=this;b("#panier").click(function(){a.showArticles()});b("#panier-popup .mask, #panier-popup .close").click(function(){b("#panier-popup").hide()});b("#panier-popup .next").click(function(){var c=a.offreAFaire;if(0==c)a.livraison.render(a.listArticle,a.fdp,a.nbrLivre);else{var d="Attention, ";1==c?d+="vous n'avez pas choisi votre marque-page gratuit. ":1<c&&(d+="vous n'avez pas choisi vos "+c+" marque-pages gratuits. ");confirm(d+
"Êtes-vous sûr de vouloir valider votre commande ?")?a.livraison.render(a.listArticle,a.fdp,a.nbrLivre):b("#panier-popup").hide()}})};this.addArticle=function(a,c,d,e){e&&this.nbrLivre++;this.listArticle.push({id:(new Date).valueOf(),name:a,price:c,poids:d,needDedicace:e});sessionStorage.setItem("aeferrets.panier",JSON.stringify(this.listArticle));0<b(".panier:visible").length?b(".panier").effect("shake",{distance:5},"slow"):b(".panier").show("slow")};this.removeArticle=function(a){this.listArticle.splice(a,
1)[0].needDedicace&&this.nbrLivre--;sessionStorage.setItem("aeferrets.panier",JSON.stringify(this.listArticle));this.refreshArticles();0==this.listArticle.length&&(sessionStorage.removeItem("aeferrets.panier"),b(".panier").hide("slow"))};this.showArticles=function(){this.refreshArticles();b("#panier-popup").show()};this.refreshArticles=function(){b(".panier-articles").empty();var a=0,c=0,d=this,e=parseInt(this.nbrLivre/2),g;for(g in this.listArticle){var f=this.listArticle[g],h=f.price;0<e&&-1<f.name.indexOf("Marque Page")&&
(h=0,e--);var k=b("\x3cli/\x3e");k.attr("index",g);k.text(f.name+" : "+h+" euros");b(".panier-articles").append(k);a=(1E5*a+1E5*parseFloat(h))/1E5;c=(1E5*c+1E5*parseFloat(f.poids))/1E5}b(".panier-articles li").click(function(a){a=b(this).attr("index");d.removeArticle(a)});a=a.toFixed(2);c=c.toFixed(2);0<a?(this.fdp=this.calculerFdp(c,a),a="\x3cb\x3eTotal\x3c/b\x3e : \x3cspan class\x3d'total-price'\x3e"+a+" euros\x3c/span\x3e\x3cbr/\x3e",0==this.fdp?a+="Frais de livraison offerts":(a+="+ "+this.fdp+
" euros de frais de livraison*\x3cbr/\x3e",a+="*(offerts à partir de 50 euros d'achat)"),1==e?a=a+"\x3cbr/\x3e"+("(Vous pouvez choisir "+e+" marque-page gratuit)"):1<e?(a+="\x3cbr/\x3e",a+="(Vous pouvez choisir "+e+" marque-pages gratuits)"):(a+="\x3cbr/\x3e",a+="(1 marque-page gratuit pour 2 livres achetés)"),b(".panier-popup-content .total").html(a)):(b("#panier-popup").hide(),b(".panier").hide("slow"));this.offreAFaire=e};this.calculerFdp=function(a,b){if(50<=b)return 0;var d=4.8;500<a&&(d=6.2);
return d};this.init()}});
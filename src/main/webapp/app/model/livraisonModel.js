define(["app/utils/utils"],function(f){return function(){this.sessionName="aeferrets.sessionFormulaire";this.data={nom:"",prenom:"",adresse:"",cp:"",ville:"",email:"",commentaire:"",dedicaces:[],commande:null};this.init=function(a){var b=JSON.parse(sessionStorage.getItem(this.sessionName));if(b){this.data=b;var d=this.data.dedicaces;console.log("old : ");console.log(d);this.data.dedicaces=[]}console.log("panier : ");console.log(a);for(var c in a)if(b=a[c],b.needDedicace){var e=this.getById(b.id,d);
e||(e={id:b.id,titre:b.name,activeDedicace:!0,dedicace:""});this.data.dedicaces.push(e)}};this.getById=function(a,b){for(var d in b){var c=b[d];if(c&&c.id==a)return c}return null};this.makeEvents=function(){var a=this;$("#livraison-form #nom").change(function(){a.save("nom",$(this).val())});$("#livraison-form #prenom").change(function(){a.save("prenom",$(this).val())});$("#livraison-form #adresse").change(function(){a.save("adresse",$(this).val())});$("#livraison-form #cp").change(function(){a.save("cp",
$(this).val())});$("#livraison-form #ville").change(function(){a.save("ville",$(this).val())});$("#livraison-form #email").change(function(){a.save("email",$(this).val())});$("#livraison-form #active-dedicace").change(function(){var b=$(this).attr("key");a.setActiveDedicace(b,$(this).prop("checked"))});$("#livraison-form #dedicace").change(function(){var b=$(this).attr("key");a.setDedicace(b,$(this).val())});$("#livraison-form #commentaire").change(function(){a.save("commentaire",$(this).val())})};
this.setDedicace=function(a,b){this.data.dedicaces[a].dedicace=b;this.save()};this.setActiveDedicace=function(a,b){(this.data.dedicaces[a].activeDedicace=b)||this.setDedicace(a,"");this.save()};this.save=function(a,b){a&&(this.data[a]=b);sessionStorage.setItem(this.sessionName,JSON.stringify(this.data))}}});
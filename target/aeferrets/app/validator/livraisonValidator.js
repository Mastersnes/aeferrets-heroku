define(["jquery","jquery-validate"],function(a){return function(){this.init=function(){this.initForm=!0;a("form#livraison-form").validate({messages:{nom:"Veuillez entrer votre nom",prenom:"Veuillez entrer votre pr\x26eacute;nom",adresse:"Veuillez entrer votre adresse",cp:{required:"Veuillez entrer votre code postal",maxlength:"Le code postal ne peut faire que 5 caracteres",number:"Le code postal ne peut contenir de lettres"},ville:"Veuillez entrer votre ville",email:{required:"Veuillez entrer votre email",
email:"Votre email n'est pas conforme : aaa@bbb.ccc"}}})};this.makeEvents=function(){this.initForm||this.init();a("#formulaire-livraison .validate").click(function(b){a("form#livraison-form").validate();a("form#livraison-form").valid()&&console.log("formOkay")})}}});
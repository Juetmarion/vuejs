
/* DIRECTIVES */

/* Vue.directive("Salut",{
    // on y mets plusieurs propriété
            // la fonction prend 3 arguments : l'élément sur lequel on a bindé notre systeme, le binding qui nous permettre de recup
            // les != modifieurs,   
    bind: function(el, binding, vnode){
        //console.log(el, binding)
        // mets dans  l'element la valeur que tu as dans binding
        el.value = binding.value
        console.log("bind")
    },

    // olvnode permet d'avoir l'ancien noeud virtuel
    update: function(el, binding, vnode, oldvnode){
        console.log("update")
    }
}) */

/* en plus simple si l'on veut juste changer la valeur en temps réel */
/* on peut directement lui passer une fonction  */
/* Vue.directive("Salut", function(el, binding){
        el.value = binding.value
        console.log("bind")
})  */// Ca c'est la 1ere maniere d'ecrire une directive

/* mais on peut passer la directive dans une variable */
let salut = function(el, binding){
    el.value = binding.value
    console.log("bind")
} 


let vm = new Vue ({
    el: "#directives", 
    // on passe les directives en options : 
    directives: {
        // ancienne syntaxe : 
        /* salut: salut */
        // version es6
        salut // là ca correspond à : "il faut que tu mettes une clé qui aura la valeur de cette chaine là et ca sera cette variable"
    },
    data: {
       /* firstname: "Marion", 
       lastname: "Dupont",
       fullname: "" */
        message: "coucou je suis le message"
    },
    methods: {
        // 1ere solution preventDefault
        /* demo: function(e){
            console.log("salut", e.preventDefault())
        } */

        // on peut sinon faire appel à un modifieur
        // directement dans l'html et donc ne plus le preciser dans methods
        demo: function(){
            console.log("demo")
        }, 
        demo2: function(){
            console.log("demo2")
        } 
    }
})
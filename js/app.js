
// initialisation 
// en parametre il prend un gros tableau d'option
new Vue({
    // el permet d'indiquer sur quel element on va greffer vuejs
    el : "#app",
    // on defini le state grace a la cle data qui va etre un tableau qui regroupe les variables 
    // que l'on souhaite injecter a vue
    data : {
        message: 'Lien vers google',
        link: 'http://google.fr',
       /*  success : true, */
        cls: 'success',
        persons: ['Marion', 'Laurie', 'Etienne'],
    },

    methods:{
        close: function(){
            // on peut changer la valeur du message dans methods
            // this.message = "Fermé"
            // avec methods on accede a toutes les proprietes de la vue
            this.success = false

        }, 
        style: function(){
            if (this.success){
                return {color : 'green'}
            } else {
                return {color: 'red'}
            }
        }
    }

})
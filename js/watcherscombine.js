
/* PROPRIETE COMPUTED SIMPLE */
/* let vm = new Vue ({
    el: "#watchers", 
    data: {
        success: false,
        message: ""
    },

    // l'avantage c'est qu'il met en cache les valeurs
    // il ne fera la modification que si les variables 
    // qui ont été utilisé à l'intérieur auront été modifié
    // ca fait gagner de la performance!
    computed: {
        cls : function(){
            console.log("cls called")
            // si success = true, dans ce cas success sinon error
            return this.success === true ? 'success' : 'error'
        }
    }
}) */


/* PROPRIETE COMPUTED */
/* let vm = new Vue ({
    el: "#watchers", 
    data: {
       firstname: "Marion", 
       lastname: "Dupont"
    },

    computed: {
        //pour pouvoir faire des modifications on get et set
        fullname : {
            get : function(){
                return this.firstname + ' ' + this.lastname
            },
            set : function(value){
                console.log(value)
                // on récupere donc on split pour séparer les deux
                let parts = value.split(' ')
                // on réafecte donc les changements
                this.firstname = parts[0]
                this.lastname = parts[1]
            }
        }
    }
}) */


/* PROPRIETE WATCH */
let vm = new Vue ({
    el: "#watchers", 
    data: {
       firstname: "Marion", 
       lastname: "Dupont",
       fullname: ""

    },

    // permet de détecter si une propriété de la vue a été modifié
    watch: {
        fullname: function(value){
            console.log('watch', value)
        }
    }
})
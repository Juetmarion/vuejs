/* COMPOSANTS */

// on précise le nom de notre componsent 'message'
// puis on passe un tableau avec != propriétés
// Vue.component('message', { /* ON DEFINI LE COMPONENT GLOBALEMENT */
let message = { // on oublie pas d'aller le déclarer dans la vue
    // transfert de propriétés grace à props
    // cela peut être un objet ou un tableau
    /* props:["type", "message"], */

    // on peut déclarer props sous forme d'objets : 
    props:{
        type:{type:String, default:'success'},
        // si l'on veut accepter plusieurs types on peut faire : 
        /* type:{type:[String,number], default:'success'}, */
        message:String,
        header:String
    },
    // on a donc la capacité de créer le template dans component
    template: ` <div class="ui message" :class="type">
                    <i class="icon close" @click.prevent="close">¤</i>
                    <div class="header">{{ header }}</div>
                    {{ message }}
                </div>`,
    methods:{
        close(){
            console.log(this.$parent);    
            /* le soucis avec la syntaxe ci-dessous est que
            mon composant devient dépendant du parent,
            on ne donc pas l'utiliser n'importe où */
            //this.$parent.$data.alert = false;
            
            /* pour combler ce soucis, on utilise un evenement */
            // "je veux que tu emette l'event close"
            this.$emit('close')
        }
    }
//}) /* fermeture du global */
}

let counter = {
    /* on mets data en fonction (qui retournera un objet) 
    pour récupérer un nouveau state à chaque fois */
    data: function(){
        return{
            count:0
        }
    },
    props:{
        start:{type:Number, default:0}
    },
    /* on ajoute le start au count,
    avec computed */
    computed:{
        total: function(){
            return this.start + this.count
        }
    },
    methods:{
        increment: function(){
            this.count++
        }
    },
    /* On change le count en total pour avoir la version computed avec le start */
    template: `<button class="margin-left" @click="increment"> {{ total }} </button>`
}

let formUser={
    props:{
        value: Object
    },
    /* le pb est que la variable user est passée par référence
    ses propriétés affecte aussi le parent  */
    // pour cela on crée la fonction data
    data(){
        return {
           // userLocal va prendre les propriétés du user 
            user : {...this.value}
            //JSON.parse(JSONS.stringify(this.user))
        }
    },
    methods:{
        save(){
            this.$emit('input', this.user)
        }
    },
    template:`  <form class="ui form" @submit.prevent="save"> 
                    <p><slot name="header"></slot></p>
                    <div class="field">
                        <label for=""> Prénom </label>
                        <input type="text" v-model="user.firstname"> 
                    </div>
                    <div class="field">
                        <label for=""> Nom </label>
                        <input type="text" v-model="user.lastname"> 
                    </div>
                    <button class="ui button" type="submit">Envoyer</button>
                    <p><slot name="footer"></slot></p>
                </form>`
    ,
    mounted: function(){
        console.log(this)
    }
}

let vm = new Vue ({
    el: "#composants", 
    components: { message, counter, formUser },
    data: {
        message: "Winter has come!",
        alert: 'false', 
        user:{
            firstname: "Marion",
            lastname: "Dupont"
        }
    },
    methods:{
        showAlert(){
            this.alert = true;
        }, 
        hideAlert(){
            this.alert = false;
        }
    }
})


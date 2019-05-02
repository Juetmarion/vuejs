class NotificationsStore{
    constructor(){
        this.state = {
            count: 0
        }
    }
    increment(){
        this.state.count++
    }
    decrement(){
        this.state.count--
    }
}

// on instancie la class 
let notifications_store =  new NotificationsStore()

let counter = {
    data: function(){
        return{
            state: notifications_store.state
        }
    },
    computed: {
        count(){
            return this.state.count
        }
    },
    methods: {
        increment(){
            notifications_store.increment()
        }
    },
    template: ` <button @click="increment"> 
                    {{ count }}
                </button>`
}

let Notifications = {
    components: { counter },
    methods: {
        addNotification(){
            notifications_store.increment()
        }
    },
    template: ` <div>
                    <counter></counter>
                    <button @click="addNotification">+</button> 
                </div> `
}

new Vue({
    el: "#app", 
    components: { Notifications, counter }
})
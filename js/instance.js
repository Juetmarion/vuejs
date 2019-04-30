

let vm = new Vue ({
    el: "#instance", 
    data: {
        seconds: 0
    },

    // lorsque l'élément est monté 
    mounted: function() {
        this.$interval = setInterval(() => {
            console.log('Time')
            this.seconds++  
        }, 1000)
    }, 

    destroyed: function(){
        clearInterval(this.$interval)
    }
})
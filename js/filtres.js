Vue.filter('capitalize', function(value, prefix, suffix){
    return prefix + value.toUpperCase() + suffix
})

Vue.filter('reverse', function (value){
    return value.split('').reverse().join('')
})

/* FILTRES */
let vm = new Vue ({
    el: "#filtres",    
    data: {
        message: "coucou je suis le message"
    }
})
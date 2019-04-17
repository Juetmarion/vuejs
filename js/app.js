
// initialisation 
// en parametre il prend un gros tableau d'option
new Vue({
    // el permet d'indiquer sur quel element on va greffer vuejs
    el : "#app",
    // on defini le state grace a la cle data qui va etre un tableau qui regroupe les variables 
    // que l'on souhaite injecter a vue
    data : {
        message: 'Coucou du message',
        link: 'http://google.fr'
    }

})
console.log('JS OK');
console.log('VUE OK',Vue);

//Estrapolo il metodo createapp
const { createApp } = Vue;

//Inizializzo l'app Vue
const app = createApp({
    data(){
        return{
            firstName : 'Stefan',
            lastName : 'Simerea',
            picture : 'img/vuejs-ar21.png'
        }
    }
});

//Monto nell'elemento HTML "radice"
app.mount('#root');
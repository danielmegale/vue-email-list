const instace = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app =Vue.createApp({
    name:'Vue email',
    data(){
        return{
            email:'',
        }
    }
});

app.mount('#root')

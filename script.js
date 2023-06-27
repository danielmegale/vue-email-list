const instace = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app =Vue.createApp({
    name:'Vue email',
    data(){
        return{
            emails:[],
        }
    },
    methods:{
        newEmail(){
            for(let i=0;i<10;i++){
                axios.get(instace).then((res)=>{
                    this.emails.push(res.data.response);
                });
            }
        },
    },
    created(){
        this.newEmail();
    },
});

app.mount('#root')

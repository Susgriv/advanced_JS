const app = new Vue({
    el:'#app',
    data:{
        name:'Анна',
        name2:'Алексей'
    },
    methods:{
        testDemo(age){
            alert(age)
        }
    }
});
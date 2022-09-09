  Vue.component('test',{
   data(){//в этом методе возвращаем объект,
       // свойства которого доступны в методах компонента и в шаблоне компонента
        return {
            name:'Иван',
            age:25,
            show:false
        }
   },
   template:`<div>
                 Здравствуйте, <slot></slot>
                 <h1 v-show="show">Добрый день, {{ name }}! 
                    Ваш год рождения {{ new Date().getFullYear() - age }}
                 </h1>
                 <h2 v-show="show">{{welcome()}}</h2>
                 <inner-comp></inner-comp>
             </div>`,
    methods:{
        welcome(){
            return `Привет, ${this.name}!`
        }
    }
});

Vue.component('inner-comp',{
    data(){
        return {
            counter:0
        };
    },
    methods:{
        increase(age){
            this.counter += age;
        }
    },
    template: `<div>
                    <button @click="increase($parent.age);$parent.show=!$parent.show">OK {{ counter }}</button>
              </div>`
})
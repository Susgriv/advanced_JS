Vue.component('test',{
 data(){//в этом методе возвращаем объект,
       // свойства которого доступны в методах компонента и в шаблоне компонента
        return {
            name:'Иван',
            age:25,
        }
   },
   template:`<div>
                 <h1>Привет, {{ name }}!</h1>
                 <inner-comp></inner-comp>
             </div>`,
});

Vue.component('inner-comp',{
    template:`<div>
                 <h1>{{ $root.name2 }}</h1>
                 <button @click="$root.testDemo($parent.age)">OK</button>
              </div>`
})

const app = Vue.createApp({
    data() {
        return {
            title: 'Formation VueJs '+ new Date().toLocaleString(),
            author :  'Zouhair ET-TARAK',
            version : 'vue 3',
            count : 0,
            fullName : '',
            initValue : 0 
        }
    },
    methods: {
        hello() {
            return `Hello Mr. ${this.author}`;
        },
        increment(step) {
            this.count +=step;
        },
        decrement(step) {
            this.count -=step;
        }
    },
    computed : {
            calcul : function() {
                return this.initValue * this.count;
            }
    }
});
app.mount('#app');
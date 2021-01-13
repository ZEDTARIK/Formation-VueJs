const app = Vue.createApp({
    data() {
        return {
            title: 'Formation VueJs '+ new Date().toLocaleString(),
            author :  'Zouhair ET-TARAK',
            version : 'vue 3',
            count : 0
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
    }
});
app.mount('#app');
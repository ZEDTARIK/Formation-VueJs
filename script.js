const app = Vue.createApp({
    data() {
        return {
            title: 'Formation VueJs '+ new Date().toLocaleString(),
            author :  'Zouhair ET-TARAK'
        }
    },
    methods: {
        hello() {
            return `Hello Mr. ${this.author}`;
        }
    }
});
app.mount('#app');
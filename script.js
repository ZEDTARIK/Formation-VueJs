const app = Vue.createApp({
    data() {
        return {
            title: 'Formation VueJs ' + new Date().toLocaleString(),
            author: 'Zouhair ET-TARAK',
            version: 'vue 3',
            count: 1,
            fullName: '',
            initValue: 0,
            message: ''
        }
    },
    methods: {
        hello() {
            return `Hello Mr. ${this.author}`;
        },
        increment(step) {
            this.count += step;
        },
        decrement(step) {
            this.count -= step;
        }
    },
    computed: {
        calcul: function () {
            return this.initValue * this.count;
        }
    },
    watch: {
        calcul: function (value) {
            if (value >= 10)
                this.message = 'WINNER';
            else
                this.message = 'LOSER';
        }
    }
});
app.mount('#app');
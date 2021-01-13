const app = Vue.createApp({
    data() {
        return {
            title: 'Formation VueJs ' + new Date().toLocaleString(),
            author: 'Zouhair ET-TARAK',
            version: 'vue 3',
            count: 1,
            fullName: '',
            initValue: 0,
            message: '',
            result : false
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
        },
        calssObj : function() {
            return {'bg-success': this.result, 'bg-danger' : !this.result}
        }
    },
    watch: {
        calcul: function (value) {
            if (value >= 10){
                this.result = true;
                this.message = 'WINNER';
            }
            else{
                this.result = false;
                this.message = 'LOSER';
            }
        }
    }
});
app.mount('#app');
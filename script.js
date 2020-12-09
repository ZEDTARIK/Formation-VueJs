new Vue({
    el: '#app',
    data: {
        Title: 'Formation VueJS version 2'
    },
    methods:{
        hello : function () {
            return `Hello ${this.Title}`;
        }
    }
})
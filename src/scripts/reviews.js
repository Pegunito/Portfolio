import Vue from 'vue';

new Vue({
    el: '#reviews-component',
    template: '#reviews',
    data() {
        return {
            reviews: []
        }
    },
    
    created() {
        this.reviews = require("../data/reviews.json")
    }
})
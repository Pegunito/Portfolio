import Vue from 'vue';

const btns = {
    template: "#works-btns",
    components: {

    },
    mounted() {
        console.log('btns mounted');
    },
};

const preview = {
    template: "#works-preview",
    components: {
        btns
    },
    mounted() {
        console.log('preview mounted');
    },
};

const pictures = {
    template: "#works-pictures",
    components: {
        preview
    },
    props:["currentIndex","works","currentWork"],
    mounted() {
        console.log('pictures mounted');
    },
};

const tags = {
    template: "#works-tags",
    components: {

    },
    mounted() {
        console.log('tags mounted');
    },
};

const info = {
    template: "#works-info",
    components: {
        tags
    },
    mounted() {
        console.log('info mounted');
    },
};

new Vue ({
    el: "#works-component",
    template: "#works-content",
    components: {
        info,
        pictures
    },
    data() {
        return {
            currentIndex: 0,
            works: ""
        };
    },
    methods: {
        changeImagePath(works){
            works.map(item => {
                let newPath = require(`../images/content/${item.photo}`).default;
                item.photo = newPath;
                return item;
            });
            return works;
        },
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        },
    },
    created(){
        let data = require("../data/works.json");
        this.works = this.changeImagePath(data);
        console.log(this.works);
    },
});
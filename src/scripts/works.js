import Vue from 'vue';

const btns = {
    template: "#works-btns",
    components: {},
    props: ["currentIndex", "works"],
    methods: {
        slide(direct) {
			this.$emit("changeSlide", direct);
        },
    },
    computed: {
		disablePrev() {
			return this.currentIndex === 0 ? true : false;
		},
		disableNext() {
			return this.currentIndex === this.works.length - 1 ? true : false;
		},
	},
    mounted() {
        console.log('btns mounted');
    },
};

const preview = {
    template: "#works-preview",
    components: {btns},
    props: ["works", "currentWork", "currentIndex"],
    methods: {
		slideWork(direct) {
			this.$emit("slide", direct);
		},
    },
    mounted() {
        console.log('preview mounted');
    },
};

const pictures = {
    template: "#works-pictures",
    components: {preview},
    props:["currentIndex","works","currentWork"],
    methods: {
		handleSlide(direct) {
			this.$emit("slide", direct);
		},
    },
    
    mounted() {
        console.log('pictures mounted');
    },   
};

const tags = {
    template: "#works-tags",
    components: {},
    props: ["currentTags"],
    computed: {
        tags(){
            return this.currentTags.split(",");
        },
    },
    mounted() {
        console.log('tags mounted');
    },
};

const info = {
    template: "#works-info",
    components: {tags},
    props: ["currentWork"],
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
        changeSlide(direct) {
			switch (direct) {
				case "next":
					this.currentIndex++;
					break;
				case "prev":
					this.currentIndex--;
					break;
			}
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
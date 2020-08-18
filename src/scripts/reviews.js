import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
    el: '#reviews-component',
    template: '#reviews',
    components: {
        Flickity
    },
    data() {
        return {
            reviews: [],
            flickityOptions: {
                groupCells: true,
                prevNextButtons: false,
                pageDots: false,
            }
        }
    },
    methods: {
        requiredPhotos() {
            this.reviews = this.reviews.map(review => {
                review.photo = require(`../images/content/${review.photo}`).default;
                return review;
            })
        },
        next() {
            this.$refs.flickity.next();
        },
          
        previous() {
            this.$refs.flickity.previous();
        }
    },
    mounted() {
        this.requiredPhotos();

        var ref = this.$refs;
        
        ref.prevBtn.style.opacity = .2;
        ref.prevBtn.style.cursor = 'initial';

        this.$refs.flickity.on('settle', function(pos) {
            if (pos === this.slides.length - 1) {
                 ref.nextBtn.style.opacity = .2;
                 ref.nextBtn.style.cursor = 'initial';
            } else {
                 ref.nextBtn.style.opacity = 1;
                 ref.nextBtn.style.cursor = 'pointer';
            }
 
            if (pos === 0) {
                 ref.prevBtn.style.opacity = .2;
                 ref.prevBtn.style.cursor = 'initial';
             } else {
                 ref.prevBtn.style.opacity = 1;
                 ref.prevBtn.style.cursor = 'pointer';
             }
         })
    },
    created() {
        this.reviews = require("../data/reviews.json")
    }
})
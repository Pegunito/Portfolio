<template lang="pug">

    .works-section
        .container
            h1.page-title Блок «Работы»
        .works-container
            .container
                ul.works
                    li.works__item


</template>

<script>
export default {
    data() {
        return {
            works: []
        }
    },
    created() {
        this.works = require("../../../data/works.json");
    }
}
</script>

<style lang="postcss" scoped>

@import url("../../../styles/mixins.pcss");

</style>
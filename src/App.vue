<template>
    <div>
        <router-view></router-view>
        <FooterGuide/>
    </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.$store.dispatch('getAddress')
    },
    watch: {

    },
    methods: {

    },
    components: {
        FooterGuide
    },
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>

</style>

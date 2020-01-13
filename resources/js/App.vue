<template>
    <div class="wrapper">
        <app-header v-if="isAuth" />

        <div class="content-wrapper">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        <app-footer v-if="isAuth" />
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex'
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    
    export default {
        computed: {
            ...mapState(['token']),
            ...mapGetters(['isAuth'])
        },
        components: {
            'app-header': Header,
            'app-footer': Footer
        }
    }
</script>

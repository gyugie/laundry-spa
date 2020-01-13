<template>
    <div class="container">
        <section class="content-header">
            <h1>
                {{ $route.meta.title }}
            </h1>
            <breadcrumb></breadcrumb>
        </section>

        <section class="content">
            <div class="row">
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
        </section>
    </div>
</template>

<script>
    import Breadcrumb from '../../components/Breadcrumb.vue';
    export default {
        name : 'IndexOutlet',
        components: {
            'breadcrumb': Breadcrumb
        }
    }

</script>
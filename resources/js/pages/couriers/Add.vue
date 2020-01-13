<template>
    <div class="col-md-12">
        <div class="panel">
            <div class="panel-heading">
                <h3 class="panel-title"> {{ $route.meta.title }}</h3>
            </div>
            <div class="panel-body">
                <courier-form ref="FormCourier"></courier-form>
                <div class="form-group">
                    <button class="btn btn-primary btn-sm btn-flat" @click.prevent="submit">
                        <i class="fa fa-save"></i> Add New Courier
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import { mapActions, mapState, mapMutations } from 'vuex'
    import FormCourier from './Form.vue'
    export default {
        name: 'AddCourier',
        data(){
            return {

            }
        },
        methods: {
            ...mapActions('courier', ['submitCourier']),
            submit() {
               this.submitCourier().then(() => {
                    this.$router.push({ name: 'courier.data' })
                })
            }
        },
        components: {
            'courier-form': FormCourier
        }
    }
</script>
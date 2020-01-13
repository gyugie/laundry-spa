import $axios from '../api.js';

const state = () => ({
    couriers:[],
    page: 1,
    id:''
});

const mutations = {
    ASSIGN_DATA(state, payload){
        state.couriers = payload;
    },
    SET_PAGE(state, payload){
        state.page = payload;
    },
    SET_ID_UPDATE(state, payload){
        state.id = payload;
    }
}

const actions = {
    getCouriers( {commit, state}, payload){
        let search = typeof payload != '' ? payload : '';
        return new Promise((resolve, reject) => {
            $axios.get(`/couriers?page=${state.page}$q=${search}`).then( (response) => {
                commit('ASSIGN_DATA', response.data)
                resolve(response.data)
            })
        })
    },
    submitCourier({ dispatch, commit }, payload) {
        console.log('test');
        return new Promise((resolve, reject) => {
            $axios.post(`/couriers`, payload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                dispatch('getCouriers').then(() => {
                    resolve(response.data)
                    flash('Post Request Added Created.', 'success');
                })
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    },
    editCourier({ commit }, payload) {
        return new Promise((resolve, reject) => {
            //FUNGSI UNTUK MELAKUKAN REQUEST SINGLE DATA BERDASARKAN ID KURIR
            $axios.get(`/couriers/${payload}/edit`)
            .then((response) => {
                //DATA YANG DITERIMA AKAN DIKIRIMKAN KE FORM
                resolve(response.data)
            })
        })
    },
    updateCourier({ state }, payload) {
        return new Promise((resolve, reject) => {
            //FUNGSI UNTUK MELAKUKAN REQUEST DATA PERUBAHAN DATA KURIR BERDASARKAN STATE ID KURIR
            $axios.post(`/couriers/${state.id}`, payload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                
                // Success
                flash('Your profile was successfully updated!', 'success');
                resolve(response.data)
            }).catch( (err) => {
                flash('There was an error, please try again!', 'danger');
            })
        })
    },
    removeCourier( {dispatch}, payload ){
        return new Promise((resolve, reject) => {
            $axios.delete(`couriers/${payload}`).then( (response) => {
                dispatch('getCouriers').then( () => resolve(response.data))
            }).then((response) => {
                // Success
                flash('Your profile was successfully updated!', 'success');
                resolve(response.data)
            }).catch( (err) => {
                flash('There was an error, please try again!', 'danger');
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
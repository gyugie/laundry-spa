import $axios from '../api.js';

const state = () => ({

});

const mutations = {

}

const actions = {
    submit({ commit }, payload){
        localStorage.setItem('token', null); //reset local storage
        commit('SET_TOKEN', null, { root: true }); // reset state token 

        return new Promise( (resolve, reject) => {
            $axios.post('/login', payload).then( (response) => {
                if(response.data.status == 'success'){
                    localStorage.setItem('token', response.data.data);
                    commit('SET_TOKEN', response.data.data, {root: true});
                }else{
                    commit('SET_ERRORS', {invalid: 'Email/Password Salah'}, {root: true});
                }
                resolve(Response.data);
            }).catch( (err) => {
                // if(err.response.state == 422){
                    commit('SET_ERRORS', err.response.data.errors, {root: true});
                // }
            });
        });
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
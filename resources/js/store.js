import Vue from 'vue';
import Vuex from 'vuex';
import auth from './stores/auth.js'

//import module section

Vue.use(Vuex);

// define root store vuex
const store = new Vuex.Store({
    //SEMUA MODULE YANG DIBUAT AKAN DITEPATKAN DIDALAM BAGIAN INI DAN DIPISAHKAN DENGAN KOMA UNTUK SETIAP MODULE-NYA
    modules:{
        auth
    },
    //STATE HAMPIR SERUPA DENGAN PROPERTY DATA DARI COMPONENT HANYA SAJA DAPAT DIGUNAKAN SECARA GLOBAL
    state: {
        //variable token mengambil value dari local storage
        token: localStorage.getItem('token'),
        errors:[]
    },
    getters:{
        /**
         * KITA MEMBUAT SEBUAH GETTERS DENGAN NAMA isAuth
         * DIMANA GETTERS INI AKAN BERNILAI TRUE/FALSE DENGAN KONDISI BERDASARKAN
        *  STATE token.
        **/
       isAuth: state => {
           return state.token != "null" && state.token != null
       } 
    },
    mutations:{
        //SEBUAH MUTATIONS YANG BERFUNGSI UNTUK MEMANIPULASI VALUE DARI STATE token
        SET_TOKEN(state, payload){
            state.token = payload;
        },
        SET_ERRORS(state, payload){
            state.errors = payload;
        },
        CLEAR_ERRORS(state){
            state.errors = [];
        }
    }
});

export default store;
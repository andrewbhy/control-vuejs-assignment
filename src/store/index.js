import Vue from 'vue';
import Vuex from 'vuex';

import Auth from './Auth'
import ToDo from './Todo'

Vue.use(Vuex);

export default new Vuex.Store({
    modules : {Auth ,ToDo}
});
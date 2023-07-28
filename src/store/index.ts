import Vue from 'vue';
import Vuex from 'vuex';
//Separate store into separate files. Keeps things tidy
import { state, IState } from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store<IState>({
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions,
	modules: {},
});

import { Commit } from 'vuex';
import { ITodo } from './interfaces';

export default {
	addToDo({ commit }: { commit: Commit }, todo: ITodo) {
		commit('addToDo', todo);
	},
	switchTodoCompletion({ commit }: { commit: Commit }, id: number) {
		commit('switchTodoCompletion', id);
	},
};

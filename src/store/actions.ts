import { Commit } from 'vuex';
import { Todo } from './interfaces';

export default {
	addToDo({ commit }: { commit: Commit }, todo: Todo) {
		commit('addToDo', todo);
	},
};

import { Commit } from 'vuex';
import { ITodo } from './interfaces';
import storeConstants from './storeConstants';

export default {
	[storeConstants.actions.ADD_TODO](
		{ commit }: { commit: Commit },
		todo: ITodo
	) {
		commit(storeConstants.mutations.ADD_TODO, todo);
	},
	[storeConstants.actions.SWITCH_TODO_COMPLETION](
		{ commit }: { commit: Commit },
		id: number
	) {
		commit(storeConstants.mutations.SWITCH_TODO_COMPLETION, id);
	},
};

import { IState } from './state';
import storeConstants from './storeConstants';

export default {
	[storeConstants.getters.IS_TITLE_DUPLICATED]:
		(state: IState) => (value: string) => {
			return state.todos.find((todo) => todo.title === value);
		},
};

//There must be a way to create an interface that will correspond to actions/getters/mutations but I have
//to spend more time researching into it.
//It's not very well documented on official docs, and stuff I found while browsing is not proving helpful.

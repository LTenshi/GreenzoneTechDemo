import { IState } from './state';

export default {
	isTitleDuplicated: (state: IState) => (value: string) => {
		return state.todos.find((todo) => todo.title === value);
	},
};

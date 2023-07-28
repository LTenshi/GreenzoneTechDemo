import { Todo } from './interfaces';
import { State } from './state';

export default {
	addToDo(state: State, todo: Todo) {
		state.todos.push(todo);
	},
};

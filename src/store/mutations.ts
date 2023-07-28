import { ITodo } from './interfaces';
import { IState } from './state';
import storeConstants from './storeConstants';

export default {
	[storeConstants.mutations.ADD_TODO](state: IState, todo: ITodo) {
		todo.id = state.nextId;
		state.nextId++;
		state.todos.push(todo);
	},
	[storeConstants.mutations.SWITCH_TODO_COMPLETION](state: IState, id: number) {
		const foundTodoIndex = state.todos.findIndex((todo) => todo.id === id);
		const todo = state.todos[foundTodoIndex];
		//could totally just use the state.todos[foundTodoIndex].isCompleted = !state.todos[foundTodoIndex].isCompleted
		//but this is more human readable
		todo.isCompleted = !todo.isCompleted;
	},
};

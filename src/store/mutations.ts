import { ITodo } from './interfaces';
import { IState } from './state';

export default {
	addToDo(state: IState, todo: ITodo) {
		state.todos.push(todo);
	},
	switchTodoCompletion(state: IState, id: number) {
		const foundTodoIndex = state.todos.findIndex((todo) => todo.id === id);
		const todo = state.todos[foundTodoIndex];
		//could totally just use the state.todos[foundTodoIndex].isCompleted = !state.todos[foundTodoIndex].isCompleted
		//but this is more human readable
		todo.isCompleted = !todo.isCompleted;
	},
};

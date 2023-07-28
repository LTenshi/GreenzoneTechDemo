import { Todo } from './interfaces';

export default {
	state: {
		todos: [],
	},
};

export interface State {
	todos: Array<Todo>;
}

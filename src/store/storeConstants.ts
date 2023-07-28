//This prevents accidental misspelings when calling existing store actions/getters/mutations via dispatch or commit
export default {
	getters: {
		IS_TITLE_DUPLICATED: 'isTitleDuplicated',
	},
	actions: {
		ADD_TODO: 'addToDo',
		SWITCH_TODO_COMPLETION: 'switchTodoCompletion',
	},
	//Mutations mirror actions in this case.
	//Coulds see an argument for keeping a "common" section
	mutations: {
		ADD_TODO: 'addToDo',
		SWITCH_TODO_COMPLETION: 'switchTodoCompletion',
	},
};

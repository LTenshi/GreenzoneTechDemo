import { ITodo } from './interfaces';

export const state: IState = {
	todos: [],
	nextId: 0, //Assuming there isn't a guid that would invalidate this completely
};

export interface IState {
	todos: Array<ITodo>;
	nextId: number;
}

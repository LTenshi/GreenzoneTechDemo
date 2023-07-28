import { ITodo } from '@/store/interfaces';

export interface IApiPayload {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export function convertToITodo(payload: IApiPayload): ITodo {
	const converted: ITodo = {
		title: payload.title,
		description: `User ID: ${payload.userId}`,
		id: payload.id, //1. Writeup below
		isCompleted: payload.completed,
		imageUrl: '',
	};

	return converted;
}

//1. Ultimately doesn't matter we convert to our own one when adding.
//This is a potential bug, as we might want to keep the id.
//In real world the ID would likely be a guid and none of this would matter
//I could just generate guids on client side too and there would be an ultra-low
//chance of duplicate id being a problem

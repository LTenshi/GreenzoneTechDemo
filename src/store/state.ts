import { ITodo } from './interfaces';

export const state: IState = {
	todos: [
		{
			id: 0,
			title: 'Test todo',
			description: 'Here is an image of a cat',
			isCompleted: false,
			imageUrl: 'https://purr.objects-us-east-1.dream.io/i/cutetan.jpg',
		},
		{
			id: 1,
			title: 'Test todo',
			description: 'Here is an image of a cat',
			isCompleted: false,
			imageUrl: 'https://purr.objects-us-east-1.dream.io/i/cutetan.jpg',
		},
		{
			id: 2,
			title: 'Test todo',
			description: 'Here is an image of a cat',
			isCompleted: false,
			imageUrl: 'https://purr.objects-us-east-1.dream.io/i/cutetan.jpg',
		},
		{
			id: 3,
			title: 'Test todo',
			description: 'Here is an image of a cat',
			isCompleted: false,
			imageUrl: 'https://purr.objects-us-east-1.dream.io/i/cutetan.jpg',
		},
		{
			id: 4,
			title: 'Test todo',
			description: 'Here is an image of a cat',
			isCompleted: false,
			imageUrl: 'https://purr.objects-us-east-1.dream.io/i/cutetan.jpg',
		},
		{
			id: 5,
			title: 'Test todo',
			description: 'Here is an image of a cat',
			isCompleted: false,
			imageUrl: 'https://purr.objects-us-east-1.dream.io/i/cutetan.jpg',
		},
		{
			id: 6,
			title: 'Test todo',
			description: 'Here is an image of a cat',
			isCompleted: false,
			imageUrl: 'https://purr.objects-us-east-1.dream.io/i/cutetan.jpg',
		},
		{
			id: 7,
			title: 'Test todo',
			description: 'Here is an image of a cat',
			isCompleted: false,
			imageUrl: 'https://purr.objects-us-east-1.dream.io/i/cutetan.jpg',
		},
	],
};

export interface IState {
	todos: Array<ITodo>;
}

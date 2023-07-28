<template>
	<v-card>
		<v-card-title>Todos Component</v-card-title>
		<v-card-text>
			<v-row>
				<v-col>
					<to-do-create />
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<h2>Active</h2>
				</v-col>
			</v-row>
			<v-row>
				<v-col v-for="todo in notDoneTodos" :key="todo.id" cols="3">
					<to-do-item-card :todo="todo" />
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<h2>Completed</h2>
				</v-col>
			</v-row>
			<v-row>
				<v-col v-for="todo in doneTodos" :key="todo.id" cols="3">
					<to-do-item-card :todo="todo" />
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script lang="ts">
import { ITodo } from '@/store/interfaces';
import { defineComponent } from 'vue';
import ToDoItemCard from './ToDoItemCard.vue';
import ToDoCreate from './ToDoCreate.vue';

export default defineComponent({
	components: { ToDoItemCard, ToDoCreate },
	props: {
		todos: {
			type: Array as () => Array<ITodo>,
			default: () => [],
		},
	},
	computed: {
		//Filtering out to their respective arrays
		//Having an array for both completed and not completed is possible in store as an another approach
		notDoneTodos(): Array<ITodo> {
			return this.todos.filter((todo) => !todo.isCompleted) || [];
		},
		doneTodos(): Array<ITodo> {
			return this.todos.filter((todo) => !!todo.isCompleted) || [];
		},
	},
});
</script>

<style lang="scss">
.dialogue-card-text {
	display: flex;
	flex-direction: column;
}
</style>

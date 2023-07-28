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
					<!--
						You might be reading this code/looking at the result and seeing that there are no defacto v-cards.
						They still exist in the 9bdd72d commit.
						I just thought that this looks a bit better asthetically. Worst case scenario we can revert :)
						(And to be fair it still kinda *looks* like cards)
					-->
					<h2 class="mb-2">Active</h2>
					<v-expansion-panels multiple accordion>
						<to-do-item
							v-for="todo in notDoneTodos"
							:key="todo.id"
							:todo="todo"
						/>
					</v-expansion-panels>
				</v-col>
				<v-col>
					<h2 class="mb-2">Completed</h2>
					<v-expansion-panels multiple accordion>
						<to-do-item v-for="todo in doneTodos" :key="todo.id" :todo="todo" />
					</v-expansion-panels>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script lang="ts">
import { ITodo } from '@/store/interfaces';
import { defineComponent } from 'vue';
import ToDoItem from './ToDoItem.vue';
import ToDoCreate from './ToDoCreate.vue';

export default defineComponent({
	components: { ToDoItem, ToDoCreate },
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

<style lang="scss"></style>

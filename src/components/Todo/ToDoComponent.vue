<template>
	<v-card>
		<v-card-title>Todos</v-card-title>
		<v-card-text>
			<v-row>
				<v-col>
					<to-do-create />
				</v-col>
			</v-row>
			<v-row>
				<v-col v-for="todo in todos" :key="todo.id" cols="3">
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
});
</script>

<style lang="scss">
.dialogue-card-text {
	display: flex;
	flex-direction: column;
}
</style>

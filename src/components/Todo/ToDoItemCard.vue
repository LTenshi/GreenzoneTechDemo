<template>
	<div class="to-do-card" :id="`todo-${todo.id}`">
		<v-card class="item-card">
			<v-card-title>
				<v-icon :color="completionColor" @click="switchCompletion" class="mr-2">
					{{ completionIcon }}
				</v-icon>
				{{ todo.title }}
			</v-card-title>
			<v-card-text>
				<div>
					{{ todo.description }}
				</div>
				<div>
					<img :src="todo.imageUrl" style="width: 100%" />
				</div>
			</v-card-text>
		</v-card>
	</div>
</template>

<script lang="ts">
import store from '@/store';
import { ITodo } from '@/store/interfaces';
import { defineComponent } from 'vue';

//Refer to the comment in HomeView.vue as to why this is no longer an @component
export default defineComponent({
	props: {
		todo: {
			type: Object as () => ITodo,
			default: null,
		},
	},
	computed: {
		completionIcon(): string {
			return this.todo.isCompleted ? 'mdi-check-circle' : 'mdi-close-circle';
		},
		completionColor(): string {
			return this.todo.isCompleted ? 'green' : 'red';
		},
	},
	methods: {
		toggleStatus(): void {
			return;
		},
		switchCompletion(): void {
			store.dispatch('switchTodoCompletion', this.todo.id);
		},
	},
});
</script>

<style lang="scss"></style>

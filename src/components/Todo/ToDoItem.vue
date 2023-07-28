<template>
	<v-expansion-panel>
		<v-expansion-panel-header>
			<v-icon
				:color="completionColor"
				@click="switchCompletion"
				style="flex: none"
				class="pr-2"
			>
				{{ completionIcon }}
			</v-icon>
			{{ todo.title }}
		</v-expansion-panel-header>
		<v-expansion-panel-content>
			<div>
				{{ todo.description }}
			</div>
			<div>
				<img :src="todo.imageUrl" style="width: 100%" />
			</div>
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script lang="ts">
import store from '@/store';
import { ITodo } from '@/store/interfaces';
import storeConstants from '@/store/storeConstants';
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
		switchCompletion(): void {
			store.dispatch(
				storeConstants.actions.SWITCH_TODO_COMPLETION,
				this.todo.id
			);
		},
	},
});
</script>

<style lang="scss"></style>

<template>
	<v-expansion-panel>
		<v-expansion-panel-header>
			<!--
				There are cases where I inline the style. Like in this case, where it's only 1 component utilising 1 css property.
				It can be moved to a class but is it really necessary to bloat the file with 3 line css classes?
			-->
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
		//Simple ternary operations to pick between 2 options
		completionIcon(): string {
			return this.todo.isCompleted ? 'mdi-check-circle' : 'mdi-close-circle';
		},
		completionColor(): string {
			return this.todo.isCompleted ? 'green' : 'red';
		},
	},
	methods: {
		//Passing an id as opposed to the whole object
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

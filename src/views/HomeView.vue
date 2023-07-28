<template>
	<div class="about">
		<!--Quick fix for the title not appearing.-->
		<v-app-bar color="deep-purple" dense dark>
			<v-app-bar-title> Todo List </v-app-bar-title>
			<v-spacer />
		</v-app-bar>
		{{ todoToAdd }}
		<ToDoItemCard></ToDoItemCard>
	</div>
</template>

<script lang="ts">
import ToDoItemCard from '../components/ToDoItemCard.vue';
import { Todo } from '@/store/interfaces';
import store from '@/store';

import { defineComponent } from 'vue';

//Removed the @Component syntax as it is deprecated in the official docs https://class-component.vuejs.org
//We could even go composition api if we'd like, though since this is pre-vue 2.7 we'd need a plugin https://github.com/vuejs/composition-api
export default defineComponent({
	components: { ToDoItemCard },
	data: () => {
		return {
			todoToAdd: {
				title: '',
				description: '',
				id: 0,
				isCompleted: false,
				imageUrl: '',
			} as Todo,
			isFormValid: false,
		};
	},
	methods: {
		addToDoItem(): void {
			if (!this.isFormValid) {
				return;
			}
		},
	},
});
</script>

<style lang="scss"></style>

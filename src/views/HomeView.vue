<template>
	<div class="about">
		<!--Quick fix for the title not appearing.-->
		<v-app-bar color="deep-purple" dense dark>
			<v-app-bar-title> Todo List </v-app-bar-title>
			<v-spacer />
		</v-app-bar>
		<v-container>
			<v-row>
				<v-col>
					<ToDoComponent :todos="todos" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { defineComponent } from 'vue';
import ToDoComponent from '@/components/Todo/ToDoComponent.vue';

//Removed the @Component syntax as it is deprecated in the official docs https://class-component.vuejs.org
//We could even go composition api if we'd like, though since this is pre-vue 2.7 we'd need a plugin https://github.com/vuejs/composition-api
export default defineComponent({
	components: { ToDoComponent },
	computed: {
		...mapState(['todos']),
	},
});
</script>

<style lang="scss"></style>

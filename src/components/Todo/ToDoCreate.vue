<template>
	<v-dialog width="500" v-model="dialogVisible">
		<template v-slot:activator="{ on, attrs }">
			<v-btn v-bind="attrs" v-on="on" color="primary">
				<v-icon left>mdi-plus-circle</v-icon>
				add todo
			</v-btn>
		</template>
		<to-do-dialogue @closeDialog="dialogVisible = false" />
	</v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToDoDialogue from './ToDoDialogue.vue';

export default defineComponent({
	components: { ToDoDialogue },
	data: function () {
		return {
			dialogVisible: false,
		};
	},
});
</script>

<style lang="scss"></style>

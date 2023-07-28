<template>
	<v-dialog width="500" v-model="dialogVisible">
		<template v-slot:activator="{ on, attrs }">
			<v-btn v-bind="attrs" v-on="on">
				<v-icon left>mdi-plus-circle</v-icon>
				add todo
			</v-btn>
		</template>
		<!--TODO: export to it's own component-->
		<v-card>
			<v-card-title>Add todo dialogue</v-card-title>
			<v-card-text class="dialogue-card-text">
				<v-form ref="todoForm" v-model="isFormInvalid">
					<v-text-field
						label="*Title"
						v-model="todoToAdd.title"
						:rules="titleRules"
					></v-text-field>
					<!--The spec says that no empty content should exist, however I am assuming description is optional-->
					<v-textarea
						label="Description"
						v-model="todoToAdd.description"
					></v-textarea>
					<v-text-field
						label="Image Url"
						v-model="todoToAdd.imageUrl"
					></v-text-field>
				</v-form>
				<div style="align-self: end">
					<v-btn class="mr-2" @click="dialogVisible = false">Cancel</v-btn>
					<v-btn :disabled="!isFormInvalid" @click="addToDoItem">Save</v-btn>
				</div>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script lang="ts">
import store from '@/store';
import { ITodo } from '@/store/interfaces';
import { defineComponent } from 'vue';
import { InputValidationRule, InputValidationRules } from 'vuetify';

export default defineComponent({
	data: function () {
		return {
			todoToAdd: {
				title: '',
				description: '',
				id: 0,
				isCompleted: false,
				imageUrl: '',
			} as ITodo,
			isFormInvalid: false,
			dialogVisible: false,
		};
	},
	methods: {
		addToDoItem(): void {
			//Removed default check, since we already disable the save in dialog if invalid

			//Create a copy of the object, otherwise we get unwanted reactivity
			let payload = {} as ITodo;
			Object.assign(payload, this.todoToAdd);
			store.dispatch('addToDo', payload);

			//Reset form
			const form = this.$refs.todoForm as HTMLFormElement;
			form.reset();
		},
	},
	computed: {
		titleRules(): InputValidationRules {
			const ruleEmpty: InputValidationRule = (value) =>
				!!value || 'Title is required';
			const ruleDuplication: InputValidationRule = (value) =>
				!store.getters.isTitleDuplicated(value) || 'Title must be unique';

			const rules: InputValidationRules = [ruleEmpty, ruleDuplication];

			return rules;
		},
	},
});
</script>

<style lang="scss"></style>

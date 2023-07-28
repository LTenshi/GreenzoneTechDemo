<template>
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
				<v-btn class="mr-2" @click="closeDialog" color="error">Cancel</v-btn>
				<v-btn :disabled="!isFormInvalid" @click="addToDoItem" color="primary">
					Save
				</v-btn>
			</div>
		</v-card-text>
	</v-card>
</template>

<script lang="ts">
import { InputValidationRule, InputValidationRules } from 'vuetify';
import { defineComponent } from 'vue';
import { ITodo } from '@/store/interfaces';
import store from '@/store';

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
		};
	},
	computed: {
		//This was a big learning experience. "this" is not accessible in data section above
		titleRules(): InputValidationRules {
			const ruleEmpty: InputValidationRule = (value) =>
				!!value || 'Title is required';
			const ruleDuplication: InputValidationRule = (value) =>
				!store.getters.isTitleDuplicated(value) || 'Title must be unique';

			const rules: InputValidationRules = [ruleEmpty, ruleDuplication];

			return rules;
		},
	},
	methods: {
		closeDialog(): void {
			this.$emit('closeDialog');
		},
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
});
</script>

<style></style>

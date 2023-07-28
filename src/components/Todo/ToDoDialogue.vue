<template>
	<v-card>
		<v-card-title>Add todo dialogue</v-card-title>
		<v-card-text>
			<v-btn-toggle v-model="isApiMode" dense>
				<v-btn :value="false">Client</v-btn>
				<v-btn :value="true">Api</v-btn>
			</v-btn-toggle>

			<!--
				This could be broken down into further 2 files, but since the file isn't too big I'll keep it here
				I found there were cases in the codebases I worked with where too much granurality slows down dev speed
			-->
			<div v-if="!isApiMode" class="dialogue-card-form-container">
				<v-form ref="todoForm" v-model="isFormInvalid">
					<v-text-field
						label="*Title"
						v-model="todoToAdd.title"
						:rules="titleRules"
					/>
					<!--The spec says that no empty content should exist, however I am assuming description is optional-->
					<v-textarea label="Description" v-model="todoToAdd.description" />
					<label for="file">Upload an image: </label>
					<input
						id="imageInput"
						class="mt-2 mb-2"
						type="file"
						name="file"
						accept="image/png, image/jpeg"
					/>
				</v-form>
				<div class="decision-handler">
					<v-btn class="mr-2" @click="closeDialog" color="error">Cancel</v-btn>
					<v-btn
						:disabled="!isFormInvalid"
						@click="addToDoItem"
						color="primary"
					>
						Save
					</v-btn>
				</div>
			</div>

			<div v-if="isApiMode" class="dialogue-card-form-container">
				<v-text-field
					type="number"
					label="Data number of todo"
					:min="1"
					v-model="selectedApiNumber"
				/>
				<div class="decision-handler">
					<v-btn class="mr-2" @click="closeDialog" color="error">Cancel</v-btn>
					<v-btn @click="addApiTodoItem" color="primary"> Save </v-btn>
				</div>
			</div>
		</v-card-text>
		<v-snackbar color="error" v-model="isSnackbarVisible" :timeout="2000">
			{{ errorText }}
		</v-snackbar>
	</v-card>
</template>

<script lang="ts">
import { InputValidationRule, InputValidationRules } from 'vuetify';
import { defineComponent } from 'vue';
import { ITodo } from '@/store/interfaces';
import store from '@/store';
import storeConstants from '@/store/storeConstants';
import { IApiPayload, convertToITodo } from './interfaces/apiPayload';

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
			isApiMode: false,
			isSnackbarVisible: false,
			selectedApiNumber: 1,
			errorText: '',
		};
	},
	computed: {
		//This was a big learning experience. "this" is not accessible in data section above
		titleRules(): InputValidationRules {
			const ruleEmpty: InputValidationRule = (value) =>
				!!value || 'Title is required';
			const ruleDuplication: InputValidationRule = (value) =>
				!store.getters[storeConstants.getters.IS_TITLE_DUPLICATED](value) ||
				'Title must be unique';
			const rules: InputValidationRules = [ruleEmpty, ruleDuplication];

			return rules;
		},
	},
	methods: {
		//There are quite a few methods here, one pattern I saw moved data/methods/computes/watches to their own files.
		//I keep an arbitiary number of 500 +/- 100 for max amount of lines in a vue file.
		//I find that's often more of a sweep under the rug move. Means the component is getting ultra bloated and should be broken down instead.
		//I think there are definetly cases where a separate file is a good idea e.g. large clientside algorithms if you definitely can't do them in API
		closeDialog(): void {
			this.$emit('closeDialog');
		},
		addToDoItem(): void {
			//Removed default check, since we already disable the save in dialog if invalid

			//Create a copy of the object, otherwise we get unwanted reactivity
			let payload = {} as ITodo;
			Object.assign(payload, this.todoToAdd);

			//Image handling
			const fileInput = document.getElementById(
				'imageInput'
			) as HTMLInputElement;

			if (fileInput && fileInput.files) {
				const selectedFile = fileInput.files[0];
				payload.imageUrl = URL.createObjectURL(selectedFile);
			}

			//Send off to the store
			store.dispatch(storeConstants.actions.ADD_TODO, payload);

			//Reset form
			const form = this.$refs.todoForm as HTMLFormElement;
			form.reset();
		},
		async fetchData(): Promise<IApiPayload> {
			try {
				return await (
					await fetch(
						`https://jsonplaceholder.typicode.com/todos/${this.selectedApiNumber}`
					)
				).json();
			} catch (err: Error | unknown) {
				console.log(err);
				this.isSnackbarVisible = true;
				this.errorText = 'Request to ToDo API failed';
				throw err;
			}
		},
		async addApiTodoItem(): Promise<void> {
			let payload = {} as ITodo;
			let response = await this.fetchData();

			payload = convertToITodo(response);
			if (
				store.getters[storeConstants.getters.IS_TITLE_DUPLICATED](payload.title)
			) {
				this.isSnackbarVisible = true;
				this.errorText = 'Requested ToDo already exsist! Try another one!';
				return;
			}
			store.dispatch(storeConstants.actions.ADD_TODO, payload);
		},
	},
});
</script>

<style lang="scss">
.dialogue-card-form-container {
	display: flex;
	flex-direction: column;
}

.decision-handler {
	align-self: end;
}
</style>

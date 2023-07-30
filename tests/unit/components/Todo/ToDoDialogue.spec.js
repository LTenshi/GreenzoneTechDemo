import ToDoDialogue from '../../../../src/components/Todo/ToDoDialogue.vue';
import Vuetify from 'vuetify';
import Vue from 'vue';
import { mount } from '@vue/test-utils';

//Fix for all vuetify related issues
Vue.use(Vuetify);

describe('Todo Dialogue Tests', () => {
	//Snapshot test - Make sure all the visible changes are the ones we expect
	test('Snapshot Test', () => {
		const wrapper = mount(ToDoDialogue);
		expect(wrapper.element).toMatchSnapshot();
	});

	test('by default the client form is shown', () => {
		const wrapper = mount(ToDoDialogue);

		expectIntitialFormCheckup(wrapper);
	});

	test('flick to the api form', async () => {
		const wrapper = mount(ToDoDialogue);
		const apiButton = wrapper.find('[id="btn-toggle-api"]');

		//Let's do our initial checkup just in case.
		expectIntitialFormCheckup(wrapper);
		//Press the button...
		apiButton.trigger('click');
		//...wait for the wrapper to update...
		await wrapper.vm.$nextTick();
		//...check that client form no longer exists...
		expect(wrapper.find('[id="container-client-form"]').exists()).toBe(false);
		//...but the api form does.
		expect(wrapper.find('[id="container-api-form"]').exists()).toBe(true);
	});

	test('flick to api form, then back to client', async () => {
		const wrapper = mount(ToDoDialogue);
		const clientButton = wrapper.find('[id="btn-toggle-client"]');
		const apiButton = wrapper.find('[id="btn-toggle-api"]');

		//Let's do our initial checkup just in case.
		expectIntitialFormCheckup(wrapper);
		//Press the button...
		apiButton.trigger('click');
		//...wait for the wrapper to update...
		await wrapper.vm.$nextTick();
		//...check that client form no longer exists...
		expect(wrapper.find('[id="container-client-form"]').exists()).toBe(false);
		//...but the api form does...
		expect(wrapper.find('[id="container-api-form"]').exists()).toBe(true);
		//...and click back on client...
		clientButton.trigger('click');
		//...wait for the wrapper to update...
		await wrapper.vm.$nextTick();
		//...check that api form no longer exists...
		expect(wrapper.find('[id="container-api-form"]').exists()).toBe(false);
		//...but the client form does...
		expect(wrapper.find('[id="container-client-form"]').exists()).toBe(true);
	});
});

function expectIntitialFormCheckup(wrapper) {
	//We are initially expecting for the client form to be shown.
	expect(wrapper.find('[id="btn-mode-toggle-group"]').exists()).toBe(true);
	//Make sure data is checking out...
	expect(wrapper.vm.$data.isApiMode).toBe(false);
	//...client form exists...
	expect(wrapper.find('[id="container-client-form"]').exists()).toBe(true);
	//...and api form doesn't.
	expect(wrapper.find('[id="container-api-form"]').exists()).toBe(false);
}

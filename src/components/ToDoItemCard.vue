<template>
	<div class="to-do-card">
		<v-card class="item-card"> </v-card>
	</div>
</template>

<script lang="ts">
import { Todo } from '@/store/interfaces';
import { defineComponent } from 'vue';

//Refer to the comment in HomeView.vue as to why this is no longer an @component
export default defineComponent({
	methods: {
		toggleStatus(): void {
			return;
		},
	},
});
</script>

<style lang="scss"></style>

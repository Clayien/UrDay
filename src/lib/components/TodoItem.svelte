<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import IconClose from './icon/IconClose.svelte';
	import type { TodoData } from '../types';
	import Input from './Input.svelte';

	export let todo: TodoData;

	const dispatch = createEventDispatcher();
</script>

<div class="flex h-14 w-full items-center gap-[1px] rounded-lg border border-clayien-black-light">
	<button
		class="flex aspect-square h-full w-14 items-center justify-center border-r border-clayien-black-light text-clayien-red"
	>
		<IconClose />
	</button>

	<Input
		bind:value={todo.task}
		on:change={() => {
			dispatch('change', todo.task);
			if (todo.done) {
				todo.done = false;
			}
		}}
	/>

	<button
		class="flex aspect-square h-full w-14 items-center justify-center border-l border-clayien-black-light p-4"
		on:click={() => {
			todo.done = !todo.done;
		}}
	>
		<div class="h-full w-full rounded border border-clayien-gray p-1">
			{#if todo.done}
				<div class="h-full w-full rounded-sm bg-clayien-green" />
			{/if}
		</div>
	</button>
</div>

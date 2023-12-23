<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let value: string;
	export let done: boolean;

	import IconClose from './icon/IconClose.svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="flex h-14 w-full items-center gap-[1px] rounded-lg border border-clayien-black-light">
	<button class="flex aspect-square h-full w-14 items-center justify-center text-clayien-red">
		<IconClose />
	</button>

	<input
		type="text"
		name="todo"
		bind:value
		on:change={() => {
			dispatch('change', value);
			if (done) {
				done = false;
			}
		}}
		class="h-full w-full grow border-x border-clayien-black-light bg-clayien-black px-4"
	/>

	<button
		class="flex aspect-square h-full w-14 items-center justify-center p-4"
		on:click={() => {
			done = !done;
		}}
	>
		<div class="h-full w-full rounded border border-clayien-gray p-1">
			{#if done}
				<div class="h-full w-full rounded-sm bg-clayien-green" />
			{/if}
		</div>
	</button>
</div>

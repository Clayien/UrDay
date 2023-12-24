<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export var value: string;

	const dispatch = createEventDispatcher();
</script>

<input
	class="mx-[1px] h-full w-full bg-clayien-black p-4"
	bind:value
	on:change={() => {
		dispatch('change', value);
	}}
/>

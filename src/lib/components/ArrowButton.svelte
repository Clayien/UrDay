<script lang="ts">
	import IconArrowDown from './icon/IconArrowDown.svelte';

	export let open: boolean;
</script>

<button
	class="flex aspect-square h-full w-full items-center justify-center p-4"
	on:click={() => {
		open = !open;
	}}
>
	<div class="transition-transform" class:rotate-180={open}>
		<IconArrowDown />
	</div>
</button>

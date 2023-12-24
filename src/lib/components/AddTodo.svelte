<script>
	import Input from './Input.svelte';
	import IconArrowDown from './icon/IconArrowDown.svelte';
	import IconPlus from './icon/IconPlus.svelte';
</script>

<div
	class="fixed bottom-0 grid h-18 w-full grid-cols-12 items-center justify-center border-t border-clayien-black-light bg-clayien-black px-max py-2"
>
	<div
		class="col-start-3 col-end-11 flex h-full w-full overflow-visible rounded-lg border border-clayien-black-light"
	>
		<button
			class="flex h-full w-1/5 items-center justify-between rounded-l-lg border-r border-clayien-black-light bg-clayien-black px-4"
			><span>Daily</span><IconArrowDown /></button
		>
		<Input value="" />
		<button
			class="flex aspect-square h-full w-14 items-center justify-center rounded-r-lg border-l border-clayien-black-light"
		>
			<IconPlus />
		</button>
	</div>
</div>

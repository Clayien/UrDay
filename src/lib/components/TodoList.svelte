<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	import TodoItem from './TodoItem.svelte';
	import IconArrowDown from './icon/IconArrowDown.svelte';
	import IconArrowUp from './icon/IconArrowUp.svelte';
	import IconClose from './icon/IconClose.svelte';

	export let title = 'new list';
	export let totalTask: number = 0;
	export let totalCompleted: number = 0;

	let completedPercentage: number = 0;

	let open = false;
	function handleClick() {
		open = !open;
	}

	let done = false;

	$: completedPercentage = Math.round((totalCompleted / totalTask) * 100) || 0;
	$: completedColor =
		completedPercentage > 70
			? 'text-clayien-green'
			: completedPercentage > 40
				? 'text-clayien-yellow'
				: 'text-clayien-red';
</script>

<div class="w-full rounded-lg border border-clayien-black-light">
	<div class="flex w-full items-center justify-between gap-[1px]">
		{#if !open}
			<button
				class="flex h-16 grow flex-col justify-center pl-4 text-left"
				on:click={handleClick}
				in:fade
			>
				<span class="capitalize">{title}</span>
				<div class="text-xs uppercase text-clayien-gray">
					completed: <span class={completedColor}>{completedPercentage} %</span> | ({totalCompleted}/{totalCompleted})
				</div>
			</button>
		{:else}
			<button
				class="flex aspect-square h-16 w-16 items-center justify-center border-r border-clayien-black-light p-4 text-clayien-red"
				on:click={handleClick}
				in:fade
			>
				<IconClose />
			</button>
			<input
				in:fade
				value={title}
				class="h-full w-full grow bg-clayien-black p-4 px-4 capitalize"
			/>
		{/if}
		<button
			class="flex aspect-square h-16 w-16 items-center justify-center border-l border-clayien-black-light p-4"
			on:click={handleClick}
		>
			<div class="transition-transform" class:rotate-180={open}>
				<IconArrowDown />
			</div>
		</button>
	</div>

	{#if open}
		<div transition:slide class="flex flex-col gap-4 border-t border-clayien-black-light p-4">
			<div class="flex w-full justify-between text-xs uppercase text-clayien-gray">
				<span> todo </span>

				<div>
					completed: <span class={completedColor}>{completedPercentage} %</span> | ({totalCompleted}/{totalCompleted})
				</div>
			</div>
			<div>
				<TodoItem value="" bind:done />
			</div>
		</div>
	{/if}
</div>

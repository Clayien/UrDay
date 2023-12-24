<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	import TodoItem from './TodoItem.svelte';
	import IconClose from './icon/IconClose.svelte';
	import ArrowButton from './ArrowButton.svelte';
	import type { TodoListData } from '$lib/types';
	import Input from './Input.svelte';

	export let todoList: TodoListData;

	let completedPercentage: number = 0;

	let open = false;
	function handleClick() {
		open = !open;
	}

	let totalCompleted = 0;

	$: totalCompleted = todoList.tasks.filter((task) => task.done).length;

	$: completedPercentage = Math.round((totalCompleted / todoList.tasks.length) * 100) || 0;
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
				<span class="capitalize">{todoList.name}</span>
				<div class="text-xs uppercase text-clayien-gray">
					completed: <span class={completedColor}>{completedPercentage} %</span> | ({totalCompleted}/{totalCompleted})
				</div>
			</button>
		{:else}
			<button
				class="flex aspect-square h-16 w-16 items-center justify-center border-r border-clayien-black-light text-clayien-red"
				on:click={handleClick}
				in:fade
			>
				<IconClose />
			</button>
			<div in:fade class="h-full w-full">
				<Input value={todoList.name} />
			</div>
		{/if}
		<div class="h-16 w-16 border-l border-clayien-black-light">
			<ArrowButton bind:open />
		</div>
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
				<TodoItem todo={{ task: '', done: false }} />
			</div>
		</div>
	{/if}
</div>

<script lang="ts">
	import TodoList from '$lib/components/TodoList.svelte';
	import IconPlus from '$lib/components/icon/IconPlus.svelte';
	import type { TodoGroupData } from '$lib/types';

	let todoGroups: TodoGroupData[] = [
		{
			name: 'Todo List',
			todos: [
				{
					name: 'Daily',
					tasks: [
						{
							task: 'Task 1',
							done: false
						}
					]
				}
			]
		},
		{
			name: 'Todo List 2',
			todos: [
				{
					name: 'Daily',
					tasks: [
						{
							task: 'Task 1',
							done: false
						}
					]
				}
			]
		},

		{
			name: 'Todo List 3',
			todos: [
				{
					name: 'Daily',
					tasks: [
						{
							task: 'Task 1',
							done: false
						}
					]
				}
			]
		},

		{
			name: 'Todo List 4',
			todos: [
				{
					name: 'Daily',
					tasks: [
						{
							task: 'Task 1',
							done: false
						}
					]
				}
			]
		}
	];
</script>

<div class="col-start-3 col-end-11 flex flex-col gap-8">
	{#each todoGroups as todoGroup}
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-medium">{todoGroup.name}</h2>
			<button
				class="flex items-center gap-1 rounded-lg border-2 border-dashed border-clayien-black-light px-4 py-2 text-sm uppercase"
			>
				<span>Add List</span><IconPlus />
			</button>
		</div>
		{#each todoGroup.todos as todoList}
			<TodoList {todoList} />
		{/each}
	{/each}
</div>

<script lang="ts">
	import TodoList from '$lib/components/TodoList.svelte';
	import IconPlus from '$lib/components/icon/IconPlus.svelte';
</script>

<div class="col-start-3 col-end-11 flex flex-col gap-8">
	<div class="flex items-center justify-between">
		<h2 class="text-2xl font-medium">Todo List</h2>
		<button
			class="flex items-center gap-1 rounded-lg border-2 border-dashed border-clayien-black-light px-4 py-2 text-sm uppercase"
		>
			<span>Add List</span><IconPlus />
		</button>
	</div>
	<TodoList title="daily" totalCompleted={0} totalTask={0} />
</div>

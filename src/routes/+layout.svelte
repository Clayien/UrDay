<script>
	import AddTodo from '$lib/components/AddTodo.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="min-h-screen bg-clayien-black leading-normal text-clayien-white">
	<Header />
	<div class="px-max pb-24 pt-8">
		<main class="grid grid-cols-12 gap-4">
			<slot />
		</main>
	</div>
	<AddTodo />
</div>

<style>
	:global(*):focus-visible {
		outline: 1px solid white;
	}
</style>

<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="h-screen bg-clayien-black leading-normal text-clayien-white">
	<Header />
	<div class="px-max py-8">
		<main class="grid grid-cols-12 gap-4">
			<slot />
		</main>
	</div>
</div>

<style>
	:global(*):focus-visible {
		outline: 1px solid white;
	}
</style>

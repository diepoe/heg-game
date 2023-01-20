<script lang="ts">
	import '../app.css';
</script>

<div class="space-y-4">
	<header class="px-4 pb-2 border-b-2 border-primary-700">
		<h1 class="text-primary-700 text-2xl font-bold">HEG App</h1>
	</header>
	<main class="py-2 px-6 space-y-4">
		<slot />
	</main>
</div>

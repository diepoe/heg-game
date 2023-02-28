<script lang="ts">
	import { fly } from 'svelte/transition';

	export let delay = false;
</script>

{#if delay}
	<div
		in:fly={{ x: 400, duration: 400, delay: 400 }}
		out:fly={{ x: -400, duration: 400 }}
		class="m-6 p-3 bg-primary-500 shadow-xl shadow-primary-500/60  rounded-xl min-h-[90vh] grid grid-cols-1 place-items-center gap-4"
	>
		<slot />
	</div>
{:else}
	<div
		in:fly={{ x: 400, duration: 400 }}
		out:fly={{ x: -400, duration: 400 }}
		class="m-6 p-3 bg-primary-500 shadow-xl shadow-primary-500/60  rounded-xl min-h-[90vh] grid grid-cols-1 place-items-center gap-4"
	>
		<slot />
	</div>
{/if}

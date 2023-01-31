<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div
	in:fly={{ x: -50, duration: 250, delay: 300 }}
	out:fly={{ x: -50, duration: 250 }}
	class="m-6 p-3 bg-primary-500 shadow-xl shadow-primary-500/60  rounded-xl min-h-[90vh] grid grid-cols-1 place-items-center gap-4"
>
	<slot />
</div>

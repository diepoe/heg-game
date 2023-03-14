<script lang="ts">
	import Game from '$lib/game/Game.svelte';
	import Scanner from '$lib/game/Scanner.svelte';

	let scanning: boolean = true;
    // TODO: Svelte store to share data between game and scanner

	
</script>

{#if scanning}
	<Scanner />
{:else}
    <Game />
{/if}

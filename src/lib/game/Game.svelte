<script lang="ts">
	export let roomID: string = 'unknown';

	import TextWrapper from '$lib/components/TextWrapper.svelte';
	import { Room } from './game';

	let currentRoom: Room;
	let biologyLabs: Room, pausenhalleSued: Room;

	biologyLabs = new Room(
		'Biologietrakt',
		'Fachräume für den Biologieunterricht',
		'großer Raum beim Theater'
	);

	pausenhalleSued = new Room(
		'Pausenhalle Süd',
		'Die südliche Pausenhalle',
		'großer Raum beim Theater'
	);

	biologyLabs.setNextRoom(pausenhalleSued);
	pausenhalleSued.setNextRoom(biologyLabs);
</script>

{#if (roomID = 'unknown')}
	<TextWrapper><h3>unknown room, please scan the qr code again!</h3></TextWrapper>
{:else}
	<TextWrapper>
		<h3>{roomID}</h3>
	</TextWrapper>
{/if}

<a href="/real/02-game/scan">Neuer Scan</a>

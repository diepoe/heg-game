<script lang="ts">
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

<TextWrapper>
	<h3>{pausenhalleSued.getName()}</h3>
</TextWrapper>

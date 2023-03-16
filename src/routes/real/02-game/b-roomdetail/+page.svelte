<script lang="ts">
	import { Dialog } from '@capacitor/dialog';
	import { Body } from 'svelte-body';
	import { onMount } from 'svelte';

	import TextWrapper from '$lib/components/TextWrapper.svelte';
	import { roomID } from '../stores';
	import _rooms from '../rooms.json';

	interface Room {
		id: string;
		name: string;
		description: string;

		hintsToFind: string[];
		etage: string;
		visited: string;
	}

	let currentRoom: Room = {
		id: 'nothing',
		name: 'null',
		description: 'null',
		hintsToFind: [],
		etage: 'null',
		visited: 'null'
	};

	const showAlert = async () => {
		await Dialog.alert({
			title: 'Fehler',
			message: 'Der im QR-Code gespeicherte Raum ist nicht bekannt.'
		});
	};

	onMount(() => {
		const rooms = _rooms as Room[];

		const roomSearch = rooms.find((t) => t.id === roomIDValue);

		if (roomSearch != undefined) {
			currentRoom = roomSearch;
		} else {
			showAlert();
		}
	});

	let roomIDValue: string;
	roomID.subscribe((value) => {
		roomIDValue = value;
	});
</script>

<Body style="margin-top: 0px !important;" />
<img src={'/rooms/' + currentRoom.id + '.jpg'} alt="Bild Atrium" />

<div class="p-10 relative -top-8 bg-white rounded-xl space-y-2 w-full">
	<heading class="prose">
		<h2>{currentRoom.name}</h2>
	</heading>
	<section class="bg-primary-600 rounded-lg  max-w-fit p-2 text-white text-sm">
		Hauptgebäude
	</section>
	<p class="text-sm pt-10">
		{@html currentRoom.description}
	</p>
</div>

<a
	href="/real/02-game/c-riddle"
	class="bg-primary-600 rounded-lg grid place-items-center mx-9 absolute bottom-8 w-[80%] p-2 text-white text-sm shadow-lg shadow-primary-500"
>
	Zum nächsten Raum
</a>

<script lang="ts">
	import { Dialog } from '@capacitor/dialog';
	import { Body } from 'svelte-body';
	import { onMount } from 'svelte';

	import TextWrapper from '$lib/components/TextWrapper.svelte';
	import type { Room } from '$lib/types/room.type';
	import { roomID, currentRoomID, rooms } from '../stores';

	let currentRoom: Room = {
		id: 'nothing',
		name: 'null',
		description: 'null',
		hintsToFind: [],
		etage: '0',
		visited: 'null'
	};

	const showAlert = async () => {
		await Dialog.alert({
			title: 'Fehler',
			message: 'Der im QR-Code gespeicherte Raum ist nicht bekannt.'
		});
	};

	onMount(() => {
		const roomSearch = $rooms.find((t) => t.id === $roomID);

		if (roomSearch != undefined) {
			currentRoom = roomSearch;
			currentRoomID.set(currentRoom.id);
		} else {
			showAlert();
		}
	});
</script>

<Body style="margin-top: 0px !important;" />
<div
	class="blur hidden md:block bg-center z-0 bg-no-repeat bg-cover h-[40vh] lg:h-[50vh]"
	style={'background-image: url(/rooms/' + currentRoom.id + '.jpg);'}
/>
<img
	src={'/rooms/' + currentRoom.id + '.jpg'}
	class="md:absolute md:top-[20%] md:left-1/2 md:z-40 md:h-[40vh] lg:h-[50vh] md:w-auto md:-translate-y-1/2 md:-translate-x-1/2"
	alt={'Bild ' + currentRoom.name}
/>

<div
	class="p-10 relative -top-8 bg-white rounded-t-xl z-50 md:rounded-t-2xl lg:rounded-t-3xl space-y-2 w-full"
>
	<heading class="prose prose-headings:font-gotisch prose-headings:font-normal">
		<h1>{currentRoom.name}</h1>
	</heading>
	<section class="bg-primary-600 font-grenze rounded-lg  max-w-fit p-2 text-white text-sm">
		{#if currentRoom.etage == '-1'}
			Keller
		{:else if currentRoom.etage == '0'}
			Erdgeschoss
		{:else if currentRoom.etage == '1'}
			1. Obergeschoss
		{:else if currentRoom.etage == '2'}
			2. Obergeschoss
		{/if}
	</section>
	<TextWrapper className="mt-10 max-h-[32vh] overflow-y-scroll bg-transparent">
		{@html currentRoom.description}
	</TextWrapper>
</div>

<a
	href="/real/02-game/c-riddle"
	class="bg-primary-600 rounded-lg text-lg font-grenze grid place-items-center absolute bottom-8 left-[10%] w-4/5 p-2 text-white shadow-lg shadow-primary-500"
>
	Zum nächsten Raum
</a>

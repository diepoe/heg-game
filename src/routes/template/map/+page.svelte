<script lang="ts">
	import TextWrapper from '$lib/components/TextWrapper.svelte';
	import { Toast } from '@capacitor/toast';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import type { Room } from '$lib/types/room.type';
	import { currentRoomID, nextRoomID, rooms } from './stores';

	let currentRoom: Room = {
		id: 'nothing',
		name: 'null',
		description: 'null',
		hintsToFind: [],
		etage: 'null',
		visited: 'null',
		coordinates: ''
	};

	let nextRoom: Room = {
		id: 'nothing',
		name: 'null',
		description: 'null',
		hintsToFind: [],
		etage: 'null',
		visited: 'null',
		coordinates: ''
	};

	let guessOne: Room = {
		id: 'nothing',
		name: 'null',
		description: 'null',
		hintsToFind: [],
		etage: 'null',
		visited: 'null',
		coordinates: ''
	};

	let guessTwo: Room = {
		id: 'nothing',
		name: 'null',
		description: 'null',
		hintsToFind: [],
		etage: 'null',
		visited: 'null',
		coordinates: ''
	};

	let randomOrder: number = Math.floor(Math.random() * 3);

	onMount(() => {
		// ensure order is newly randomized every turn
		randomOrder = Math.floor(Math.random() * 3);

		const roomSearch = $rooms.find((t) => t.id === $currentRoomID);

		if (roomSearch != undefined) {
			// set the current room
			currentRoom = roomSearch;
			currentRoom.visited = 'true';

			// find all unvisited rooms
			const unvisitedRooms = $rooms.filter((t) => t.visited == 'false');

			// check if all rooms are visited
			if (unvisitedRooms.length == 0) {
				// redirection to winning page
				goto('/real/02-game/d-win');
			} else {
				// get unvisited rooms of the same level as the currentRoom & pick a random room
				const filteredUnvisitedRooms = unvisitedRooms.filter((t) => t.etage == currentRoom.etage);
				if (filteredUnvisitedRooms.length > 0) {
					nextRoom =
						filteredUnvisitedRooms[Math.floor(Math.random() * (filteredUnvisitedRooms.length - 1))];

					guessOne = $rooms[Math.floor(Math.random() * ($rooms.length - 1))];
					while (guessOne == nextRoom) {
						guessOne = $rooms[Math.floor(Math.random() * ($rooms.length - 1))];
					}

					guessTwo = $rooms[Math.floor(Math.random() * ($rooms.length - 1))];
					while (guessTwo == nextRoom || guessTwo == guessOne) {
						guessTwo = $rooms[Math.floor(Math.random() * ($rooms.length - 1))];
					}
				}
				// fallback if all rooms on the current level are visited
				else {
					nextRoom = unvisitedRooms[Math.floor(Math.random() * (unvisitedRooms.length - 1))];

					guessOne = $rooms[Math.floor(Math.random() * ($rooms.length - 1))];
					while (guessOne == nextRoom) {
						guessOne = $rooms[Math.floor(Math.random() * ($rooms.length - 1))];
					}

					guessTwo = $rooms[Math.floor(Math.random() * ($rooms.length - 1))];
					while (guessTwo == nextRoom || guessTwo == guessOne) {
						guessTwo = $rooms[Math.floor(Math.random() * ($rooms.length - 1))];
					}
				}
				// set the next room
				nextRoomID.set(nextRoom.id);
			}
		}
	});

	let rightAnswerChecked: boolean = true;

	/**
	 * shows a toast if the user selects an answer in the quiz
	 * @param roomname the roomname the toast message is displaying
	 * @param correct manipulates the toast to say 'right' or 'wrong' answer
	 */
	function showToast(roomname: string, correct: boolean) {
		let antwort: string = '';
		if (correct == true) {
			setTimeout(() => (rightAnswerChecked = true), 2000);
			antwort = 'richtig';
		} else {
			antwort = 'falsch';
		}

		Toast.show({
			text: 'Die Antwort ' + roomname + ' ist ' + antwort + '!'
		});
	}
</script>

<div class="p-10 bg-white rounded-xl space-y-2 h-screen overflow-y-scroll w-full">
	{#if !rightAnswerChecked}
		<TextWrapper>
			<h2>Der nächste Raum</h2>
			<p>hat folgende Eigenschaften:</p>
			<ul>
				{#each nextRoom.hintsToFind as hint}
					<li>{@html hint}</li>
				{/each}
			</ul>

			<p>Welcher der folgenden Räume könnte dafür infrage kommen?</p>
		</TextWrapper>
		<ul class="p-2 mx-2 font-grenze text-lg">
			{#if randomOrder == 0}
				<li on:keydown on:click={() => showToast(nextRoom.name, true)}>
					<input type="checkbox" class="form-checkbox rounded text-green-600 w-6 h-6" />
					{nextRoom.name}
				</li>
				<li on:keydown on:click={() => showToast(guessOne.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600 w-6 h-6" />
					{guessOne.name}
				</li>
				<li on:keydown on:click={() => showToast(guessTwo.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600 w-6 h-6" />
					{guessTwo.name}
				</li>
			{/if}
			{#if randomOrder == 1}
				<li on:keydown on:click={() => showToast(guessOne.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600 w-6 h-6" />
					{guessOne.name}
				</li>
				<li on:keydown on:click={() => showToast(nextRoom.name, true)}>
					<input type="checkbox" class="form-checkbox rounded text-green-600 w-6 h-6" />
					{nextRoom.name}
				</li>
				<li on:keydown on:click={() => showToast(guessTwo.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600 w-6 h-6" />
					{guessTwo.name}
				</li>
			{/if}
			{#if randomOrder == 2}
				<li on:keydown on:click={() => showToast(guessTwo.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600 w-6 h-6" />
					{guessTwo.name}
				</li>
				<li on:keydown on:click={() => showToast(guessOne.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600 w-6 h-6" />
					{guessOne.name}
				</li>
				<li on:keydown on:click={() => showToast(nextRoom.name, true)}>
					<input type="checkbox" class="form-checkbox rounded text-green-600 w-6 h-6" />
					{nextRoom.name}
				</li>
			{/if}
		</ul>
	{:else}
		<TextWrapper>
			<h2>Ab zum nächsten Raum!</h2>
			<p>Um zum nächsten Raum {nextRoom.name} zu gelangen, kannst du folgende Übersicht zur Hilfe benutzen:</p>
		</TextWrapper>
		<ul class="list-disc list-inside text-lg font-grenze px-4">
			<li class="text-amber-500">Aktueller Raum</li>
			<li class="text-teal-500">Nächster Raum</li>
		</ul>

		<div class="w-full h-[30vh] relative bg-map bg-contain bg-center bg-no-repeat">
			<div
				class={"bg-amber-500 shadow shadow-amber-500 w-3 absolute h-3 rounded-full" + currentRoom.coordinates}
			/>
			<div
				class={"bg-teal-500 shadow shadow-teal-500 w-3 absolute h-3 rounded-full" + nextRoom.coordinates}
			/>
		</div>

		<TextWrapper>
			<p>
				Du hast den QR-Code des Raumes gefunden? Scanne ihn durch anwählen des folgenden Buttons!
			</p>
		</TextWrapper>
		<section class="w-full">
			<a
				href="/real/02-game/a-scanner"
				aria-label="Zum QR-Scan"
				class="grid text-lg font-grenze place-items-center text-white p-2 rounded-full bg-primary-600 shadow-lg shadow-primary-600/70 m-auto"
			>
				Zum QR-Scan
			</a>
		</section>
	{/if}
</div>

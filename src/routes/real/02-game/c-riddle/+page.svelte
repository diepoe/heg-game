<script lang="ts">
	import TextWrapper from '$lib/components/TextWrapper.svelte';
	import { Toast } from '@capacitor/toast';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import type { Room } from '$lib/types/room.type';
	import { currentRoomID, nextRoomID, rooms } from '../stores';

	let currentRoom: Room = {
		id: 'nothing',
		name: 'null',
		description: 'null',
		hintsToFind: [],
		etage: 'null',
		visited: 'null'
	};

	let nextRoom: Room = {
		id: 'nothing',
		name: 'null',
		description: 'null',
		hintsToFind: [],
		etage: 'null',
		visited: 'null'
	};

	let guessOne: Room = {
		id: 'nothing',
		name: 'null',
		description: 'null',
		hintsToFind: [],
		etage: 'null',
		visited: 'null'
	};

	let guessTwo: Room = {
		id: 'nothing',
		name: 'null',
		description: 'null',
		hintsToFind: [],
		etage: 'null',
		visited: 'null'
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

	let rightAnswerChecked: boolean = false;

	/**
	 * shows a toast if the user selects an answer in the quiz
	 * @param roomname the roomname the toast message is displaying
	 * @param correct manipulates the toast to say 'right' or 'wrong' answer
	 */
	function showToast(roomname: string, correct: boolean) {
		let antwort: string = '';
		if (correct == true) {
			rightAnswerChecked = true;
			antwort = 'richtig';
		} else {
			antwort = 'falsch';
		}

		Toast.show({
			text: 'Die Antwort ' + roomname + ' ist ' + antwort + '!'
		});
	}
</script>

<div class="p-10 bg-white rounded-xl space-y-2 h-screen w-full">
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
		<ul class="p-2 mx-2">
			{#if randomOrder == 0}
				<li on:keydown on:click={() => showToast(nextRoom.name, true)}>
					<input type="checkbox" class="form-checkbox rounded text-green-600" />
					{nextRoom.name}
				</li>
				<li on:keydown on:click={() => showToast(guessOne.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600" />
					{guessOne.name}
				</li>
				<li on:keydown on:click={() => showToast(guessTwo.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600" />
					{guessTwo.name}
				</li>
			{/if}
			{#if randomOrder == 1}
				<li on:keydown on:click={() => showToast(guessOne.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600" />
					{guessOne.name}
				</li>
				<li on:keydown on:click={() => showToast(nextRoom.name, true)}>
					<input type="checkbox" class="form-checkbox rounded text-green-600" />
					{nextRoom.name}
				</li>
				<li on:keydown on:click={() => showToast(guessTwo.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600" />
					{guessTwo.name}
				</li>
			{/if}
			{#if randomOrder == 2}
				<li on:keydown on:click={() => showToast(guessTwo.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600" />
					{guessTwo.name}
				</li>
				<li on:keydown on:click={() => showToast(guessOne.name, false)}>
					<input type="checkbox" class="form-checkbox rounded text-red-600" />
					{guessOne.name}
				</li>
				<li on:keydown on:click={() => showToast(nextRoom.name, true)}>
					<input type="checkbox" class="form-checkbox rounded text-green-600" />
					{nextRoom.name}
				</li>
			{/if}
		</ul>
	{:else}
		<TextWrapper>
			<h2>So gelangst du zum nächsten Raum</h2>
			<p>
				Du gelangst zur <b>{nextRoom.name}</b>, indem <i>INSERT DESCRIPTION HERE</i>
			</p>
			<p>
				Du hast den QR-Code des Raumes gefunden? Scanne ihn durch anwählen des folgenden Buttons!
			</p>
		</TextWrapper>
		<section class="w-full">
			<a
				href="/real/02-game/a-scanner"
				aria-label="Zum QR-Scan"
				class="grid place-items-center p-4 rounded-full bg-primary-600 shadow-lg shadow-primary-600/70 m-auto"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-8 h-8 text-white"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
					/>
				</svg>
			</a>
		</section>
	{/if}
</div>

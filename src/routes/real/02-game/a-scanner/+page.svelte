<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';
	import { Dialog } from '@capacitor/dialog';
	import { Haptics, ImpactStyle } from '@capacitor/haptics';

	import TextWrapper from '$lib/components/TextWrapper.svelte';
	import type { Room } from '$lib/types/room.type';
	import { roomID, nextRoomID, rooms } from '../stores';
	import _rooms from '../rooms.json';

	let res: string = '';
	let scanning: boolean = false;
	let id: string = '';

	onMount(() => {
		const roomList = _rooms as Room[];
		rooms.set(roomList);
		BarcodeScanner.prepare();
	});

	const showAlert = async () => {
		await Dialog.alert({
			title: 'Fehler',
			message: 'Der eingelesene QR-Code gehört nicht zu dem Spiel.'
		});
	};

	async function wrongRoom(wrong: string, right: string) {
		await Dialog.alert({
			title: 'Falscher',
			message:
				'Du befindest dich nicht im richtigen Raum ' + right + ', sondern im Raum ' + wrong + '!'
		});
	}

	const startScan = async () => {
		scanning = true;
		BarcodeScanner.hideBackground();
		const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] });
		if (result.hasContent) {
			console.log(result.content);

			if (result.content != null) {
				res = result.content + '';

				if (res.startsWith('https://app.heg-uelzen.de/redirect#')) {
					id = res.split('#')[1];
					if ($nextRoomID == 'null') {
						roomID.set(id);
						goto('/real/02-game/b-roomdetail');
					} else {
						// check if the user scanned the correct room code
						if ($nextRoomID == id) {
							roomID.set(id);
							goto('/real/02-game/b-roomdetail');
						} else {
							wrongRoom(id, $nextRoomID);
						}
					}
				} else {
					await showAlert();
				}
			}
		}
		await Haptics.impact({ style: ImpactStyle.Medium });
		scanning = false;
	};

	const stopScan = () => {
		scanning = false;
		BarcodeScanner.showBackground();
		BarcodeScanner.stopScan();
	};
</script>

<TextWrapper invisible={scanning} transparent={scanning}>
	<h3>Scanne den QR-Code mit Anwählen des farbigen Buttons!</h3>
</TextWrapper>

<div class = "absolute top-1/4 left-1/4 border-8 rounded-xl border-primary-500 w-[50vw] h-[50vw]"> </div>

<section class="absolute bottom-6 w-full grid place-items-center">
	{#if !scanning}
		<button
			on:click={() => startScan()}
			class="w-1/3 p-2 rounded-full text-lg font-grenze bg-primary-600 shadow-lg shadow-primary-600/70 text-white"
		>
			Start Scan
		</button>
	{:else}
		<button
			on:click={() => stopScan()}
			class="w-1/3 p-2 text-lg font-grenze rounded-full bg-red-600 shadow-lg shadow-red-600/70 text-white"
		>
			Stop Scan
		</button>
	{/if}
</section>

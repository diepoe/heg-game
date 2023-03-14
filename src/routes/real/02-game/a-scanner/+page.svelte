<script lang="ts">
	import { onMount } from 'svelte';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';
	import { Haptics, ImpactStyle } from '@capacitor/haptics';
	import TextWrapper from '$lib/components/TextWrapper.svelte';
	import { roomID } from '../stores';

	let res: string = '';
	let scanning: boolean = false;
	let id: string = '';

	onMount(() => {
		BarcodeScanner.prepare();
	});

	export function load() {
		throw redirect(308, '/real/02-game/b-roomdetail');
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
					roomID.set(id);
					goto('/real/02-game/b-roomdetail');
				}
				// TODO: verify QR content and parse it to the store
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

<TextWrapper invisible={scanning}>
	<h3>
		{#if res != ''}
			{res}
		{:else}
			Scanne den QR-Code mit Anwählen des blauen Buttons!
		{/if}
	</h3>
</TextWrapper>

<section class="m-auto bg-transparent w-full h-64 border-y-6 border-primary-600" />

<section class="grid min-h-screen place-items-center">
	{#if !scanning}
		<button
			on:click={() => startScan()}
			class="w-1/3 p-2 rounded-full bg-primary-600 shadow-lg shadow-primary-600/70 text-white"
		>
			Start Scan
		</button>
	{:else}
		<button
			on:click={() => stopScan()}
			class="w-1/3 p-2 rounded-full bg-red-600 shadow-lg shadow-red-600/70 text-white"
		>
			Stop Scan
		</button>
	{/if}
</section>

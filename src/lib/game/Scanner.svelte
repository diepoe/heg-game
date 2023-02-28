<script lang="ts">
	import { onMount } from 'svelte';
	import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';
	import { Haptics, ImpactStyle } from '@capacitor/haptics';
	import TextWrapper from '$lib/components/TextWrapper.svelte';

	let res: string = '';
	let scanning: boolean = false;

	onMount(() => {
		BarcodeScanner.prepare();
	});

	const startScan = async () => {
		scanning = true;
		BarcodeScanner.hideBackground();
		const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] });
		if (result.hasContent) {
			console.log(result.content);

			if (result.content != null) {
				res = result.content;
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
			start scanning for results
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

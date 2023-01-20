<script lang="ts">
	import { onMount } from 'svelte';
	import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

	let res: string = '';
	let scanning: boolean = false;

	onMount(() => {
		BarcodeScanner.prepare();
	});

	const startScan = async () => {
		scanning = true;
		BarcodeScanner.hideBackground();
		const result = await BarcodeScanner.startScan();
		if (result.hasContent) {
			console.log(result.content);

			if (result.content != null) {
				res = result.content;
			}
		}
		scanning = false;
	};

	const stopScan = () => {
		scanning = false;
		BarcodeScanner.showBackground();
		BarcodeScanner.stopScan();
	};
</script>

<section class="grid place-items-center">
	{#if !scanning}
		<button
			on:click={() => startScan()}
			class="w-1/2 p-2 rounded bg-primary-600 text-white"
		>
			Start Scan
		</button>
	{:else}
		<button
			on:click={() => stopScan()}
			class="w-1/2 p-2 rounded bg-red-600 text-white"
		>
			Stop Scan
		</button>
	{/if}
</section>

<section class="prose prose-primary max-w-screen-sm">
	<h3>
		{#if res != ''}
			{res}
		{:else}
			start scanning for results
		{/if}
	</h3>
</section>

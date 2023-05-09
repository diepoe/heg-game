<script lang="ts">
	import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
	import OnboardingWrapper from '$lib/components/OnboardingWrapper.svelte';
	import TextWrapper from '$lib/components/TextWrapper.svelte';

	/**
	 * requests camera permission for qr-code scanning from the user
	 */
	async function requestCameraPermission() {
		const status = await BarcodeScanner.checkPermission({ force: true });

		if (status.granted) {
			BarcodeScanner.prepare();
		}
	}
</script>

<OnboardingWrapper delay={true}>
	<li class="grid place-items-center">
		<TextWrapper inverted={true}>
			Wir benötigen deine Zustimmung für den Kamerazugriff, um die spielwichtigen QR-Codes innerhalb
			der Schule zu scannen:
		</TextWrapper>
		<button
			class="p-2 my-2 font-grenze text-xl rounded border border-white border-dashed text-white max-w-fit h-auto bg-primary-600"
			on:click={() => requestCameraPermission()}
		>
			Kamerazugriff erlauben
		</button>
	</li>
	<li class="grid place-items-center">
		<a
			href="/real/01-start"
			class="p-4  transform rotate-45 border border-white hover:bg-white group"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 transform -rotate-45 stroke-white group-hover:stroke-primary-500"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m11.25 4.5 7.5 7.5-7.5 7.5m-6-15 7.5 7.5-7.5 7.5"
				/></svg
			>
		</a>
	</li>
</OnboardingWrapper>

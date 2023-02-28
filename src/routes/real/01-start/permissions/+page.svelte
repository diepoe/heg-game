<script lang="ts">
	import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
	import { Geolocation } from '@capacitor/geolocation';
	import OnboardingWrapper from '$lib/components/OnboardingWrapper.svelte';
	import TextWrapper from '$lib/components/TextWrapper.svelte';

	/**
	 * requests camera permission for qr-code scanning from the user
	 */
	function requestCameraPermission() {
		BarcodeScanner.prepare();
	}

	function requestGeolocationPermission() {
		Geolocation.requestPermissions();
	}
</script>

<OnboardingWrapper>
	<li class="grid place-items-center ">
		<TextWrapper inverted={true}>
			Wir benötigen ihre Zustimmung für den Kamerazugriff, um die spielwichtigen QR-Codes innerhalb der Schule zu
			scannen:
		</TextWrapper>
		<button
			class="p-2 rounded bg-green-600 text-white max-w-fit h-auto"
			on:click={() => requestCameraPermission()}
		>
			Click here to allow camera access
		</button>
	</li>
	<li class="grid place-items-center">
		<button
			class="p-2 rounded bg-green-600 text-white max-w-fit h-auto"
			on:click={() => requestGeolocationPermission()}
		>
			Click here to allow Geolocation access
		</button>
	</li>
	<li class="grid place-items-center">
		<a href="/real/01-start" class="p-4 rounded-full border border-white hover:bg-white group">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 stroke-white group-hover:stroke-primary-500"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m11.25 4.5 7.5 7.5-7.5 7.5m-6-15 7.5 7.5-7.5 7.5"
				/></svg
			>
		</a>
	</li>
</OnboardingWrapper>

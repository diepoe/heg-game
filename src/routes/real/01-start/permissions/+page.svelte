<script lang="ts">
	import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
	import OnboardingWrapper from '$lib/components/onboarding/OnboardingWrapper.svelte';
	import NextButton from '$lib/components/onboarding/NextButton.svelte';
	import TextWrapper from '$lib/components/TextWrapper.svelte';

	let granted: boolean = false;

	/**
	 * requests camera permission for qr-code scanning from the user
	 */
	async function requestCameraPermission() {
		const status = await BarcodeScanner.checkPermission({ force: true });

		if (status.granted) {
			granted = true;
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
		{#if !granted}
			<button
				class="p-2 my-2 font-grenze text-xl rounded border border-white border-dashed text-white max-w-fit h-auto bg-primary-600"
				on:click={() => requestCameraPermission()}
			>
				Kamerazugriff erlauben
			</button>
		{:else}
			<div
				class="p-2 my-2 font-grenze text-xl rounded border border-white border-dashed text-white max-w-fit h-auto bg-primary-600"
			>
				Kamerazugriff wurde erlaubt ✅
			</div>
		{/if}
		<TextWrapper inverted={true} className="prose-h1:text-primary-50 prose-a:text-primary-50">
			<p>
				Erfahre mehr zur Datenschutzerklärung unter <a href="https://app.heg-uelzen.de/datenschutz">
					https://app.heg-uelzen.de/datenschutz
				</a>
			</p>
		</TextWrapper>
	</li>

	<li class="grid place-items-center" class:invisible={!granted}>
		<NextButton link="/real/01-start" />
	</li>
</OnboardingWrapper>

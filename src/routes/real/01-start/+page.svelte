<script lang="ts">
	import OnboardingWrapper from '$lib/components/onboarding/OnboardingWrapper.svelte';
	import NextButton from '$lib/components/onboarding/NextButton.svelte';

	/**function checkPermissions(): boolean {
		if (permissionGranted.includes(false)) {
			return false;
		} else return true;
	}**/
</script>

<OnboardingWrapper delay={true}>
	<div
		class="grid place-items-center prose prose-lg prose-invert prose-headings:font-gotisch prose-headings:font-medium"
	>
		<h1>Starte das Abenteuer!</h1>
	</div>
	<li class="grid place-items-center">
		<NextButton link="/real/02-game/a-scanner" />
	</li>
</OnboardingWrapper>

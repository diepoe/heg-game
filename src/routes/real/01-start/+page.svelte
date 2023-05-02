<script lang="ts">
	import OnboardingWrapper from '$lib/components/OnboardingWrapper.svelte';

	/**function checkPermissions(): boolean {
		if (permissionGranted.includes(false)) {
			return false;
		} else return true;
	}**/
</script>

<OnboardingWrapper delay={true}>
	<div class="grid place-items-center prose prose-lg prose-invert prose-headings:font-gotisch prose-headings:font-medium">
		<h1>Starte das Abenteuer!</h1>
	</div>
	<li class="grid place-items-center">
		<a href="/real/02-game/a-scanner" class="p-4 rounded-full border border-white hover:bg-white group">
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

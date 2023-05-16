<script lang="ts">
	import OnboardingWrapper from '$lib/components/onboarding/OnboardingWrapper.svelte';
	import NextButton from '$lib/components/onboarding/NextButton.svelte';
	import TextWrapper from '$lib/components/TextWrapper.svelte';
</script>

<OnboardingWrapper>
	<TextWrapper inverted={true} className="prose-headings:text-primary-50">
		<h1>Es war einmal...</h1>
		<p>
			Herzog Ernst ist Jüngling einer Ritterschule, die von finsteren Zauberern des LeG-Ordens
			angegriffen wurde. Er muss die entführte Direktorin erretten und die Schule wieder aufbauen,
			indem er durch gefahrvolle Dungeons der Unterrichtswelt navigiert und geheimnisvolle Rätsel
			löst. So wird er seine Mission erfüllen und seine Freunde erlösen. Nun liegt es an dir, als
			Herzog die Geschichte deiner Schule für immer zu verändern!
		</p>
	</TextWrapper>
	<div class="grid place-items-center">
		<NextButton link="/real/01-start/permissions" />
	</div>
</OnboardingWrapper>

<script lang="ts">
	import OnboardingWrapper from '$lib/components/OnboardingWrapper.svelte';
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
		<a
			href="/real/01-start/permissions"
			class="p-4 rounded-full border border-white hover:bg-white group"
		>
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
	</div>
</OnboardingWrapper>

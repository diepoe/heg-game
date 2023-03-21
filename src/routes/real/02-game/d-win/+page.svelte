<script lang="ts">
	import TextWrapper from '$lib/components/TextWrapper.svelte';

	let celebrations: string[] = ['sesamstrasse'];
	let celebration: string = celebrations[Math.floor(Math.random() * (celebrations.length - 1))];
</script>

<div class="p-10 bg-white rounded-xl space-y-2 h-screen w-full">
	<TextWrapper>
		<header>
			<h1>🎉🎉🎉<br />Gratulation<br />🎉🎉🎉</h1>
		</header>
		<p>Sie haben das Spiel gewonnen!</p>
		<p>Nun ist Herzog Ernst glücklich!</p>
		<figure>
			<img src={'/celebrations/' + celebration + '.gif'} alt="Celebration" />
            <figcaption>(Und Ernie freut sich auch)</figcaption>
		</figure>
        <p><a href="/real/01-start"><b>Eine neue Runde starten</b></a></p>
        <p><a href="/"><b>Zum Hauptmenü</b></a></p>
	</TextWrapper>
</div>

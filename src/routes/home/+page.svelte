<script lang="ts">
	import TextWrapper from '$lib/components/TextWrapper.svelte';
	import { currentRoom } from './stores';
</script>

<img
	src="/rooms/atrium.jpg"
	alt="Bild Atrium"
	class="max-h-[30vh] m-auto"
/>

<!--TODO: Typewriter component for following information (especially the first p tag)-->

<TextWrapper>
	<p>Du bist in den Raum RAUMNAME gelangt.</p>
	<h2>Gegenstände im Raum</h2>
	<ul>
		<li>Gegenstand 1</li>
		<li>Gegenstand 2</li>
	</ul>
	<h2>Dein Inventar</h2>
	<ul>
		<li>Gegenstand 3</li>
		<li>Gegenstand 4</li>
	</ul>
	<h2>Dein Status</h2>
	<p><b>Leben: </b>❤️❤️❤️❤️❤️</p>
	<p><b>Stärke: </b>💪💪💪</p>
</TextWrapper>

<!--TODO: Navigation to the next Room-->
<TextWrapper>
	<h2>Ausgänge</h2>
	<p>Folgende Ausgänge stehen dir zur Wahl:</p>
	<ol>
		<li>Norden</li>
		<li>Osten</li>
		<li>Süden</li>
		<li>Westen</li>
	</ol>
</TextWrapper>

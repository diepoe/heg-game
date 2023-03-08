<script lang="ts">
	import TextWrapper from '$lib/components/TextWrapper.svelte';
	import { Toast } from '@capacitor/toast';

	function showToast(roomname: string, correct: boolean) {
		let antwort: string = '';
		if (correct == true) {
			antwort = 'richtig';
		} else {
			antwort = 'falsch';
		}

		Toast.show({
			text: 'Die Antwort ' + roomname + ' ist ' + antwort + '!'
		});
	}
</script>

<div class="p-10 bg-white rounded-xl space-y-2 w-full">
	<TextWrapper>
		<h2>Der nächste Raum</h2>
		<p>hat folgende Eigenschaften:</p>
		<ul>
			<li>Vertretungsplan</li>
			<li>Mensaautomat</li>
			<li>Atrium Eingang</li>
			<li>Zugang zum Lehrerzimmer</li>
		</ul>

		<p>Welcher der folgenden Räume könnte dafür infrage kommen?</p>
	</TextWrapper>
	<ul class="p-2 mx-2">
		<li>
			<input
				type="checkbox"
				class="form-checkbox rounded text-green-600"
				on:click={() => showToast('Pausenhalle Nord', true)}
			/>
			Pausenhalle Nord
		</li>
		<li>
			<input
				type="checkbox"
				class="form-checkbox rounded text-red-600"
				on:click={() => showToast('Biologie Trakt', false)}
			/>
			Biologie Trakt
		</li>
		<li>
			<input
				type="checkbox"
				class="form-checkbox rounded text-red-600"
				on:click={() => showToast('Informatikraum', false)}
			/>
			Informatikraum
		</li>
	</ul>
</div>

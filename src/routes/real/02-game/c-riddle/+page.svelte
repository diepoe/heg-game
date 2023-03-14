<script lang="ts">
	import TextWrapper from '$lib/components/TextWrapper.svelte';
	import { Toast } from '@capacitor/toast';

	let rightAnswerChecked: boolean = false;

	function showToast(roomname: string, correct: boolean) {
		let antwort: string = '';
		if (correct == true) {
			rightAnswerChecked = true;
			antwort = 'richtig';
		} else {
			antwort = 'falsch';
		}

		Toast.show({
			text: 'Die Antwort ' + roomname + ' ist ' + antwort + '!'
		});
	}
</script>

<div class="p-10 bg-white rounded-xl space-y-2 h-screen w-full">
	{#if !rightAnswerChecked}
		<TextWrapper>
			<h2>Der nächste Raum sie zu finden<small><sup>*</sup></small></h2>
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
		<section class="absolute bottom-0">
			<TextWrapper>
				<small><sup>*</sup>Herr der Ringe ist auch noch 2023 beliebt</small>
			</TextWrapper>
		</section>
	{:else}
		<TextWrapper>
			<h2>So gelangst du zum nächsten Raum</h2>
			<p>
				Du gelangst zur <b>nördlichen Pausenhalle</b>, indem du einen der Gänge längs zum Atrium von
				der südlichen Pausenhalle aus nimmst
			</p>
			<p>
				Du hast den QR-Code des Raumes gefunden? Scanne ihn durch anwählen des folgenden Buttons!
			</p>
		</TextWrapper>
		<section class="w-full">
			<a
				href="/real/02-game/a-scanner"
				aria-label="Zum QR-Scan"
				class="grid place-items-center p-4 rounded-full bg-primary-600 shadow-lg shadow-primary-600/70 m-auto"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-8 h-8 text-white"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
					/>
				</svg>
			</a>
		</section>
	{/if}
</div>

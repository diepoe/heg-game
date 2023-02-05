<script lang="ts">
	import { Toast } from '@capacitor/toast';
	import TextWrapper from '$lib/components/TextWrapper.svelte';

	function showToast(gameType: string) {
		Toast.show({
			text: 'Modus "' + gameType + '" wurde gewählt!'
		});
	}
</script>

<TextWrapper>
	<h2>Herzlich Willkommen...</h2>
	<p>hier im Herzog-Ernst-Gymnasium. Bevor du startest, wähle bitte deinen Spielmodus aus:</p>
</TextWrapper>

<section class="grid grid-cols-2 m-auto max-w-md gap-3 px-4">
	<a
		href="/real/01-start/permissions"
		on:click={() => showToast('Im Gebäude')}
		class="p-2 rounded grid place-items-center bg-primary-600 text-white hover:bg-white hover:text-primary-600 border border-primary-600"
	>
		Im Gebäude
	</a>
	<a
		href="/"
		on:click={() => showToast('Von Zuhause')}
		class="p-2 rounded grid place-items-center bg-slate-600 text-slate-50 italic"
	>
		Von Zuhause
	</a>
</section>

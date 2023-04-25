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
		class="p-2 text-lg font-grenze rounded grid place-items-center bg-primary-600 text-white hover:bg-white hover:text-primary-600 border border-primary-600"
	>
		Im Gebäude
	</a>
	<a
		href="/"
		class="p-2 rounded blur-xs grid place-items-center bg-primary-600 text-slate-50 disabled cursor-not-allowed"
	>
		Von Zuhause
	</a>
</section>

<!--
<section class="grid grid-cols-2 m-auto max-w-md gap-3 px-4">
	<TextWrapper>
		<a href="/template">Template-Pages</a>
	</TextWrapper>
</section>
-->

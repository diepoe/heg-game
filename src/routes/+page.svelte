<script lang="ts">
	import { Toast } from '@capacitor/toast';

	function showToast(gameType: string) {
		Toast.show({
			text: 'Modus "' + gameType + '" wurde gewählt!'
		});
	}
</script>

<section class="prose-primary prose">
	<h2>Herzlich Willkommen...</h2>
	<p>hier im Herzog-Ernst-Gymnasium. Bevor du startest, wähle bitte deinen Spielmodus aus:</p>
</section>

<section class="grid grid-cols-2 m-auto max-w-md gap-3">
	<a
		href="/template/qr"
		on:click={() => showToast('Im Gebäude')}
		class="p-2 rounded bg-primary-600 text-white hover:bg-white hover:text-primary-600 border border-primary-600"
	>
		Im Gebäude
	</a>
	<a
		href="/"
		on:click={() => showToast('Von Zuhause')}
		class="p-2 rounded bg-primary-600 text-white hover:bg-white hover:text-primary-600 border border-primary-600"
	>
		Von Zuhause
	</a>
</section>

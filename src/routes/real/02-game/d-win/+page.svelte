<script lang="ts">
	import TextWrapper from '$lib/components/TextWrapper.svelte';
	import { toPng } from 'html-to-image';
	import { Media } from '@capacitor-community/media';
	import { Dialog } from '@capacitor/dialog';

	import type { MediaSaveOptions } from '@capacitor-community/media';

	let bgURL = "bg-[url('/bg/hexagons-yellow.svg')]";

	function setbgURL(adress: string) {
		bgURL = adress;
	}

	const findAlbum = async () => {
		const { albums } = await Media.getAlbums();
		const exportAlbum = albums.find((a) => a.name === 'The HEGame');
		if (!exportAlbum) {
			throw new Error('Album does not exist');
		}

		return exportAlbum.identifier;
	};

	function shareResult() {
		var node = document.getElementById('gratulation');

		if (node != null) {
			toPng(node)
				.then(async function (dataUrl) {
					var img = new Image();
					img.src = dataUrl;

					try {
						await findAlbum();
					} catch {
						await Media.createAlbum({ name: 'The HEGame' });
					}

					let opts: MediaSaveOptions = { path: dataUrl, albumIdentifier: await findAlbum() };

					await Media.savePhoto(opts);
				})
				.catch(function (error) {
					console.error('oops, something went wrong!', error);
				});
		}
	}
</script>

<div class="flex flex-col justify-center items-center">
	<div
		class={'p-3 rounded-xl space-y-2 mx-5 mb-[5vh] overflow-y-scroll h-[79vh] w-5/6 bg-center bg-repeat ' +
			bgURL}
		id="gratulation"
	>
		<TextWrapper inverted={true} className="prose-h1:text-primary-50 prose-a:text-primary-50">
			<h1>Gratulation</h1>
			<p>Du hast die gefahrvollen Unterrichtswelten überstanden und die Direktorin befreit!</p>
			<p>Deiner heldenhaften Reise zu dank wurden die Unruhen des LeG-Ordens vertrieben!</p>

			<p><a href="/real/01-start"><b>Eine neue Runde starten</b></a></p>
			<p><a href="/"><b>Zum Hauptmenü</b></a></p>
		</TextWrapper>
	</div>

	<div class="flex justify-around w-full">
		<div
			on:keydown
			on:click={() => setbgURL("bg-[url('/bg/hexagons-yellow.svg')]")}
			class="bg-amber-500 h-8 w-8 rotate-45 shadow-amber-500 shadow-md"
		/>
		<div
			on:keydown
			on:click={() => setbgURL("bg-[url('/bg/church-green.svg')]")}
			class="bg-emerald-500 h-8 w-8 rotate-45 shadow-emerald-500 shadow-md"
		/>
		<button
			on:click={() => shareResult()}
			class="bg-transparent h-8 w-8 rotate-45 flex justify-center items-center border-6"
		>
			<div class="-rotate-45">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
					/>
				</svg>
			</div>
		</button>
		<div
			on:keydown
			on:click={() => setbgURL("bg-[url('/bg/church-pink.svg')]")}
			class="bg-pink-500 h-8 w-8 rotate-45 shadow-pink-500 shadow-md"
		/>
		<div
			on:keydown
			on:click={() => setbgURL("bg-[url('/bg/church.svg')]")}
			class="bg-stone-500 h-8 w-8 rotate-45 shadow-stone-500 shadow-md"
		/>
	</div>
</div>

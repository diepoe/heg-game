<script lang="ts">
	import TextWrapper from '$lib/components/TextWrapper.svelte';

	let bgURL = "bg-[url('/bg/hexagons-yellow.svg')]";

	function setbgURL(adress: string) {
		bgURL = adress;
	}
</script>

<div>
	<div
		class={'p-3 rounded-xl space-y-2 mx-auto my-[5vh] overflow-y-scroll h-[79vh] w-5/6 bg-center bg-repeat ' +
			bgURL}
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
			on:click={() => setbgURL("bg-[url('/bg/hexagons-yellow.svg')]")}
			class="bg-amber-500 h-8 w-8 rotate-45 shadow-amber-500 shadow-md "
		/>
		<div
			on:click={() => setbgURL("bg-[url('/bg/church-green.svg')]")}
			class="bg-emerald-500 h-8 w-8 rotate-45 shadow-emerald-500 shadow-md "
		/>
		<div
			class="bg-transparent h-8 w-8 rotate-45 flex justify-center align-center border-6"
		>
			<div class="-rotate-45">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#000000"
					viewBox="0 0 256 256"
					><path
						d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"
					/></svg
				>
			</div>
		</div>
		<div
			on:click={() => setbgURL("bg-[url('/bg/church-pink.svg')]")}
			class="bg-pink-500 h-8 w-8 rotate-45 shadow-pink-500 shadow-md "
		/>
		<div
			on:click={() => setbgURL("bg-[url('/bg/church.svg')]")}
			class="bg-stone-500 h-8 w-8 rotate-45 shadow-stone-500 shadow-md "
		/>
	</div>
</div>

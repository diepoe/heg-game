<script lang="ts">
	import TextWrapper from '$lib/components/TextWrapper.svelte';
</script>

<div
	class="p-3 rounded-xl space-y-2 mx-auto my-[5vh] overflow-y-scroll h-[90vh] w-5/6 bg-center bg-repeat bg-[url('/bg/church.svg')]"
>
	<TextWrapper inverted={true} className="prose-h1:text-primary-50 prose-a:text-primary-50">
		<h1>Gratulation</h1>
		<p>Du hast die gefahrvollen Unterrichtswelten überstanden und die Direktorin befreit!</p>
		<p>Deiner heldenhaften Reise zu dank wurde der LeG-Orden vertrieben!</p>

		<p><a href="/real/01-start"><b>Eine neue Runde starten</b></a></p>
		<p><a href="/"><b>Zum Hauptmenü</b></a></p>
	</TextWrapper>
</div>

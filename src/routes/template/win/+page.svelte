<script lang="ts">
	import TextWrapper from '$lib/components/TextWrapper.svelte';
</script>

<div
	class="p-10 rounded-xl space-y-2 m-6 mx-auto h-screen w-5/6 bg-center bg-repeat bg-[url('/bg/church.svg')]"
>
	<TextWrapper inverted={true} className="prose-h1:text-primary-50 prose-a:text-primary-50">
		<h1>Gratulation</h1>
		<p>Du hast die gefahrvollen Unterrichtswelten überstaden und die Direktorin befreit!</p>
        <p>Deiner heldenhaften Reise zu dank wurde der LeG-Orden vertrieben!</p>

		<p><a href="/real/01-start"><b>Eine neue Runde starten</b></a></p>
		<p><a href="/"><b>Zum Hauptmenü</b></a></p>
	</TextWrapper>
</div>

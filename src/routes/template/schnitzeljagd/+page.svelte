<script lang="ts">
	import { Toast } from '@capacitor/toast';

	function showToast(roomname: string,correct:boolean) {
        let antwort: string = "";
        if (correct == true){
            antwort = "richtig";

        }
        else {
            antwort = "falsch";
        }

		Toast.show({
			text: "Die Antwort ist " + antwort +  "!"
		});
	}
</script>
<div class="p-10 bg-white rounded-xl space-y-2 w-full">
	<heading class="prose">
		<h2>Der nächste Raum</h2>
	</heading>
	<section class="prose">
		<p>hat folgende Eigenschaften:</p>
		<ul>
			<li>Vertretungsplan</li>
			<li>Mensaautomat</li>
			<li>Atrium Eingang</li>
			<li>Zugang zum Lehrerzimmer</li>
		</ul>
	</section>
	<section class="prose">welcher der folgenden Räume könnte dafür infrage kommen?</section>
	<ul>
		<li>
			<input type="checkbox" on:click={()=>showToast("Pausenhalle Nord", true)}/>
			Pausenhalle Nord
		</li>
		<li>
			<input type="checkbox" />
			Biologie Trakt
		</li>
		<li>
			<input type="checkbox" />
			Informatikraum
		</li>
	</ul>
</div>

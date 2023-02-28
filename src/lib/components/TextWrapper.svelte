<script lang="ts">
	export let invisible = false;
	export let inverted: boolean = false;
</script>

<section
	class="prose-primary prose xl:prose-lg p-4"
	class:invisible
	class:prose-invert={inverted}
	class:text-white={inverted}
>
	<slot />
</section>

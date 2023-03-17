<script lang="ts">
	export let invisible = false;
	export let inverted: boolean = false;
	export let className: string = '';
</script>

<section
	class="prose-primary prose xl:prose-lg p-4 {className}"
	class:invisible
	class:prose-invert={inverted}
	class:text-white={inverted}
>
	<slot />
</section>

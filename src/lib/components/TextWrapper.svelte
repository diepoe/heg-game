<script lang="ts">
	export let invisible = false;
	export let transparent = false;
	export let inverted: boolean = false;
	export let className: string = '';
</script>

<section
	class="prose-primary font-grenze prose-lg xl:prose-xl p-4 {className}"
	class:invisible
	class:transparent
	class:prose-invert={inverted}
	class:text-white={inverted}
>
	<slot />
</section>

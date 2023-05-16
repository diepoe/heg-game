<script lang="ts">
	export let link: string = '';
</script>

<a href={link} class="p-4  transform rotate-45 border border-white hover:bg-white group">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6 transform -rotate-45 stroke-white group-hover:stroke-primary-500"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m11.25 4.5 7.5 7.5-7.5 7.5m-6-15 7.5 7.5-7.5 7.5"
		/></svg
	>
</a>

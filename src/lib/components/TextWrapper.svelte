<script lang="ts">
    export let invisible = false;
</script>

<section class="prose-primary prose xl:prose-lg p-4" class:invisible={invisible}>
    <slot />
</section>
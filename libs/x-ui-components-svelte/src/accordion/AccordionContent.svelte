<script lang="ts">
import "./styles.css"
export let expanded: boolean = false;
</script>

{#if expanded}
    <div {...$$props}>
        <slot></slot>
    </div>
{/if}

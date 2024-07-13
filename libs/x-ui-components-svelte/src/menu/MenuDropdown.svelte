<script lang="ts">
import "./styles.css"
export let open: boolean;
</script>

{#if open}
<div class="menu-dropdown" {...$$props}>
    <slot></slot>
</div>
{/if}
  
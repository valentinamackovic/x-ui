<script lang="ts">
import "./styles.css"

export let open: boolean;
</script>

{#if open}
    <div class="select-dropdown">
        <slot></slot>
    </div>
{/if}

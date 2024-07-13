<script lang="ts">
import "./styles.css"

export let onClick: () => void
</script>

<button class="btn-accordion" on:click={onClick} {...$$props}>
    <slot></slot>
</button>

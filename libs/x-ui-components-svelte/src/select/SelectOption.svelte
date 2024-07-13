<script lang="ts">
import "./styles.css"

export let selected: boolean = false
export let onClick: () => void = () => {}
</script>

<div
    class="select-option {selected ? 'selected' : ''}"
    on:click={onClick}
    on:keydown={event => event.key === 'Enter' || event.key === 'Space' && onClick()}
    tabindex="0"
    role="button"
    {...$$props}
>
    <slot></slot>
</div>
<script lang="ts">
import "./styles.css"

export let onMenuButtonClick: () => void;
</script>

<button class="menu-button" on:click={onMenuButtonClick}>
    <slot></slot> 
</button>
  
<script lang="ts">
import './styles.css'
export let onButtonClick: () => void;
</script>

<button class="modal-button" on:click={onButtonClick} {...$$props}>
    <slot></slot> 
</button>
  

  
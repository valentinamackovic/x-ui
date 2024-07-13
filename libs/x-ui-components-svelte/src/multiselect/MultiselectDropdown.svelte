<script lang="ts">
import './styles.css';

export let areOptionsVisible: boolean = false;

let expanded = areOptionsVisible
$: expanded = areOptionsVisible; 

console.log(expanded)
</script>

{#if expanded}
    <div class="multiselect-dropdown">
        <slot></slot> 
    </div>
{/if}
  
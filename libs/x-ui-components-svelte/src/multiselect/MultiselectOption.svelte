<script lang="ts">

export let disabled: boolean = false;
export let selected: boolean = false;
export let onClick: () => void;

function handleClick() {
    if (!disabled) {
        onClick()
    }
}
</script>

{#if !disabled}
    <div 
        class="multiselect-option"
        class:selected={selected} 
        class:disabled={disabled} 
        role="button"
        tabindex="0"
        on:keydown={event => event.key === 'Enter' || event.key === 'Space' && handleClick()}
        on:click={handleClick}
        {...$$props}
    >
        <slot></slot>
    </div>
{/if}

  
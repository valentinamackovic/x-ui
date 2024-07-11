<script lang="ts">
import "./styles.css"

export let expanded: boolean = false;
export let title: string = "";
export let component: boolean = false;
export let isStatic: boolean = false;
export let onTitleClick: () => void = () => {};

$: expandedState = expanded;

function handleClick() {
    if (!isStatic) {
        expandedState = !expandedState;
    }
    onTitleClick?.();
}
</script>

<div class="accordion-wrapper">
    {#if component}
        <button class="btn-accordion" on:click={handleClick}>
            {#if expandedState}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="accordion-icon">
                    <!-- Font awesome icon - rotated for "expanded" -->
                    <path fill="currentColor" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="accordion-icon">
                    <!-- Font awesome icon - default -->
                    <path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                </svg>
            {/if}
            {title}
        </button>
        {#if expandedState}
            <div>
                <slot></slot>
            </div>
        {/if}
    {:else}
        <slot></slot>
    {/if}
</div>
  
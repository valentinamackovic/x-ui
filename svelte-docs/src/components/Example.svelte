<script lang="ts">
import CodeBlock from './CodeBlock.svelte';

export let codeContent: string;
let viewMode = 'example'; // Start showing the example by default
</script>

<div class="example-box">
<div class="example-box-buttons" style="margin-bottom: 10px;">
    <button class="btn-switch" on:click={() => viewMode = 'example'}>
    Example
    </button>
    <button class="btn-switch" on:click={() => viewMode = 'code'}>
    Code
    </button>
</div>
<div style="display: flex; flex-direction: column;">
    {#if viewMode === 'example'}
    <slot name="exampleContent" />
    {:else}
    <CodeBlock code={codeContent} />
    {/if}
</div>
</div>

<style>
.example-box-buttons {
    margin-bottom: 10px;
}
</style>
  
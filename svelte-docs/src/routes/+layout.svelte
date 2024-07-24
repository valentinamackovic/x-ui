<script lang="ts">
import Sidebar from '../components/Sidebar.svelte';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import '../shared.css'

// Generate the Font Awesome icon SVG
const arrowIcon = icon(faArrowLeft).html;
</script>
  
<style global>
.title a {
    position: absolute;
    left: 14px;
    color: inherit;
    font-size: 30px;
}
.main-page-content {
    padding: 20px 14px;
    width: 100%;
    box-sizing: border-box;
}
</style>

<svelte:head>
    <link rel="stylesheet" href="/shared.css">
</svelte:head>

<title class="title">
    <a href="http://localhost:3000">
        {@html arrowIcon} <!-- Using the @html directive to inject raw HTML -->
    </a>
    <div>X UI</div>
</title>
<div class="main-page-wrapper">
    <Sidebar />
    <div class="main-page-content">
        <slot />
    </div>
</div>
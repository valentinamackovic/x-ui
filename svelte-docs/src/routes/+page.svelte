<script>
	import Sidebar from '../components/Sidebar.svelte';
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
  import { icon } from '@fortawesome/fontawesome-svg-core';

  // Generate the Font Awesome icon SVG
  const arrowIcon = icon(faArrowLeft).html;
</script>

<style>
.title a {
	position: absolute;
	left: 14px;
	color: inherit;
	font-size: 30px;
}
</style>

<title class="title">
	<a href="http://localhost:3000">
		{@html arrowIcon} <!-- Using the @html directive to inject raw HTML -->
	</a>
	<div>X UI</div>
</title>
<div class="divider"></div>
<Sidebar />

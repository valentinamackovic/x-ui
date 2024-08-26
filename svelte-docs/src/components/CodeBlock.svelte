<script lang="ts">
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // or any other theme you prefer
import 'prismjs/components/prism-javascript.js';

export let code: string;

const language = "js"
</script>

<pre><code class="language-js">{@html Prism.highlight(code, Prism.languages[language], language)}</code></pre>
  
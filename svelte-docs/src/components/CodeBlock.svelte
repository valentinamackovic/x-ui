<script lang="ts">
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // or any other theme you prefer

export let code: string;

const language = "js"

// You may need to import additional languages
import 'prismjs/components/prism-javascript.js';
// Add more languages as needed
$: highlightedCode = Prism.highlight(code, Prism.languages[language], language);
</script>

<pre><code class="language-js">{highlightedCode}</code></pre>
  
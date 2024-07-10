<script lang="ts">
import Modal from '../../xui/modal/Modal.svelte';
import Example from '../../components/Example.svelte'

let modalOpen = false

</script>

<h1 class="main-page-content-title">Modal</h1>
<p>Display a modal dialog box, providing a title and content area.</p>
<h2>Examples</h2>
<h3>Use as a component</h3>
<p>Setting component prop to true will apply default styles.</p>
<Example codeContent="g">
    <div slot="exampleContent">
        <div class="center">
            <button class="btn" on:click={() => modalOpen=true}>
                Open modal
            </button>
            <Modal 
                title="Modal title"
                isOpen={modalOpen}
                onClose={() => modalOpen = false}
                component={true}
            >
                Modal
            </Modal>
        </div>
    </div>
</Example>
<p>Ignore the internal logic with static property</p>
<h3>Use as a composable</h3>
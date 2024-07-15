<script lang="ts">
import { Modal } from "x-ui-components-svelte";
import Example from '../../components/Example.svelte'
import ComposableModal from './ComposableModal.svelte';
  import ComponentApiTable from "../../components/ComponentApiTable.svelte";
  import { api, buttonApi } from "./api";

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
                isStatic={true}
            >
                Modal
            </Modal>
        </div>
    </div>
</Example>
<h3>Use as a composable</h3>
<Example codeContent="g">
    <div slot="exampleContent">
        <div class="center">
            <ComposableModal />
        </div>
    </div>
</Example>
<div class="component-api">
  <h2>Component API</h2>
  <h3>Modal</h3>
  <ComponentApiTable values={api} />
  <h3>Modal Button</h3>
  <ComponentApiTable values={buttonApi} />
</div>

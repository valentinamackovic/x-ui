<script lang="ts">
import { Modal } from "x-ui-components-svelte";
import Example from '../../components/Example.svelte'
import ComposableModal from './ComposableModal.svelte';
import ComponentApiTable from "../../components/ComponentApiTable.svelte";
import { api, buttonApi } from "./api";

let modalOpen = false

const basicExample = `
<script lang="ts">
    import { Modal } from "x-ui-components-svelte";

    let modalOpen = false
<\/script>

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
`

const staticExample = `
<script lang="ts">
    import { Modal } from "x-ui-components-svelte";

    let modalOpen = false
<\/script>

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
`

const composableExample = `
<script lang="ts">
    import { Modal, ModalButton, ModalContent } from "x-ui-components-svelte";

    let modalOpen = false;

    function openModal() {
        modalOpen = true;
    }

    function closeModal() {
        modalOpen = false;
    }
<\/script>

<Modal isOpen={modalOpen} onClose={closeModal}>
    <ModalContent>
        <p>Example modal content.</p>
        <ModalButton onButtonClick={closeModal}>
            Customisable Button
        </ModalButton>
        <ModalButton onButtonClick={closeModal}>
            OK
        </ModalButton>
    </ModalContent>
</Modal>

<div class="center">
    <button class="btn" on:click={openModal}>
        Open modal
    </button>
</div>
`
</script>

<h1 class="main-page-content-title">Modal</h1>
<p>Display a modal dialog box, providing a title and content area.</p>
<h2>Examples</h2>
<h3>Use as a component</h3>
<p>Setting component prop to true will apply default styles.</p>
<Example codeContent={basicExample}>
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
<Example codeContent={staticExample}>
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
<Example codeContent={composableExample}>
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

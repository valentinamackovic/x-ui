<script lang="ts">
import { Modal, ModalButton, ModalContent } from "x-ui-components-svelte";

let modalOpen = false;

function openModal() {
    modalOpen = true;
}

function closeModal() {
    modalOpen = false;
}
</script>

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

<style>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn {
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
}
</style>
  
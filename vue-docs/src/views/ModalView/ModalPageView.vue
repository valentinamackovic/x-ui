<script setup>
import Example from "../../components/Example.vue";
import Modal from "../../xui/Modal/Modal.vue";
import StaticModal from "./StaticModal.vue";
import ComposableModal from "./ComposableModal.vue";

import { ref } from "vue";

const modalOpen = ref(false);

const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
};

const onClose = () => {
  modalOpen.value = false;
};

const basicExample = `
<div class="center">
    <Modal :isOpen="modalOpen" :onClose="onClose" title="Title" component>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
        unde suscipit quisquam tenetur, autem dolore labore sapiente
        explicabo omnis iusto amet repudiandae dignissimos dolores ex
        tempora fugit eum maiores.
    </Modal>
    <div className="center">
        <button className="btn" @click="toggleModal">Open modal</button>
    </div>
</div>
`;
</script>

<template>
  <div id="app">
    <h1 className="main-page-content-title">Menu</h1>
    <p>A versatile menu for navigation.</p>
    <h2>Examples</h2>
    <h3>Use as a component</h3>
    <p>Basic example</p>
    <Example :codeContent="basicExample">
      <template v-slot:exampleContent>
        <div class="center">
          <Modal :isOpen="modalOpen" :onClose="onClose" title="Title" component>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
            unde suscipit quisquam tenetur, autem dolore labore sapiente
            explicabo omnis iusto amet repudiandae dignissimos dolores ex
            tempora fugit eum maiores.
          </Modal>
          <div className="center">
            <button className="btn" @click="toggleModal">Open modal</button>
          </div>
        </div>
      </template>
    </Example>
    <p>
      With static prop set to true. This ignores all internal logic for
      opening/closing the modal. Notice how the modal does not close on pressign
      ESC and clicking outside of the modal component.
    </p>
    <StaticModal />
    <h3>Use as a composable</h3>
    <p>
      Using Button, Content and Title components that are a part of Modal
      provides more customisable experience.
    </p>
    <ComposableModal />
  </div>
</template>

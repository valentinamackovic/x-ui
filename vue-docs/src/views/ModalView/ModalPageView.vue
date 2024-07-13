<script setup>
import Example from "../../components/Example.vue";
import StaticModal from "./StaticModal.vue";
import { Modal } from "x-ui-components-vue";
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
    <h1 className="main-page-content-title">Modal</h1>
    <p>Display a modal dialog box, providing a title and content area.</p>
    <h2>Examples</h2>
    <h3>Use as a component</h3>
    <p>Setting component prop to true will apply some default styles.</p>
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
    <p>Ignore the internal logic with static property</p>
    <StaticModal />
    <h3>Use as a composable</h3>
    <ComposableModal />
  </div>
</template>

<script setup>
import Example from "../../components/Example.vue";
import {
  Modal,
  ModalButton,
  ModalContent,
  ModalTitle,
} from "x-ui-components-vue";

import { ref } from "vue";

const modalOpen = ref(false);

const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
};

const onClose = () => {
  modalOpen.value = false;
};

const example = `
<div class="center">
    <Modal :isOpen="modalOpen" :onClose="onClose">
        <ModalContent>
        <ModalTitle>Title</ModalTitle>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            quos unde suscipit quisquam tenetur, autem dolore labore sapiente
            explicabo omnis iusto amet repudiandae dignissimos dolores ex
            tempora fugit eum maiores.
        </p>
        <ModalButton @click="onClose"> Close</ModalButton>
        </ModalContent>
    </Modal>
    <div className="center">
        <button className="btn" @click="toggleModal">Open modal</button>
    </div>
</div>
`;
</script>

<template>
  <Example :codeContent="example">
    <template v-slot:exampleContent>
      <div class="center">
        <Modal :isOpen="modalOpen" :onClose="onClose">
          <ModalContent>
            <ModalTitle>Title</ModalTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              quos unde suscipit quisquam tenetur, autem dolore labore sapiente
              explicabo omnis iusto amet repudiandae dignissimos dolores ex
              tempora fugit eum maiores.
            </p>
            <ModalButton @click="onClose"> Close</ModalButton>
          </ModalContent>
        </Modal>
        <div className="center">
          <button className="btn" @click="toggleModal">Open modal</button>
        </div>
      </div>
    </template>
  </Example>
</template>

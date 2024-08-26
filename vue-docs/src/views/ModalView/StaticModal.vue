<script setup>
import Example from "../../components/Example.vue";
import { Modal } from "x-ui-components-vue";

import { ref } from "vue";

const modalOpen = ref(false);

const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
};

const onClose = () => {
  modalOpen.value = false;
};

const example = `
<script setup>
import { Modal } from "x-ui-components-vue";

import { ref } from "vue";

const modalOpen = ref(false);

const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
};

const onClose = () => {
  modalOpen.value = false;
};
<\/script>

<template>
  <div class="center">
    <Modal
      :isOpen="modalOpen"
      :onClose="onClose"
      title="Title"
      component
      isStatic
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
      unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
      omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
      maiores.
    </Modal>
    <div className="center">
      <button className="btn" @click="toggleModal">Open modal</button>
    </div>
  </div>
</template>
`;
</script>

<template>
  <Example :codeContent="example">
    <template v-slot:exampleContent>
      <div class="center">
        <Modal
          :isOpen="modalOpen"
          :onClose="onClose"
          title="Title"
          component
          isStatic
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
          unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
          omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
          maiores.
        </Modal>
        <div className="center">
          <button className="btn" @click="toggleModal">Open modal</button>
        </div>
      </div>
    </template>
  </Example>
</template>

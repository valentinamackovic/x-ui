<script setup>
import Example from "../../components/Example.vue";
import Accordion from "../../xui/Accordion/Accordion.vue";
import AccordionButton from "../../xui/Accordion/AccordionButton.vue";
import AccordionContent from "../../xui/Accordion/AccordionContent.vue";

import { ref } from "vue";

const expanded = ref(false);

const handleClick = () => {
  expanded.value = !expanded.value;
};

const example = `
<Accordion>
    <AccordionButton :onTitleClick="handleClick">
        Accordion title
    </AccordionButton>
    <AccordionContent :expanded="expanded">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
        unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
        omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
        maiores.
    </AccordionContent>
</Accordion>
`;
</script>

<template>
  <Example :codeContent="example">
    <template v-slot:exampleContent>
      <Accordion>
        <AccordionButton :onTitleClick="handleClick">
          Accordion title
        </AccordionButton>
        <AccordionContent :expanded="expanded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
          unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
          omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
          maiores.
        </AccordionContent>
      </Accordion>
    </template>
  </Example>
</template>

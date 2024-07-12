<script lang="ts">
import { Accordion, AccordionButton, AccordionContent } from "x-ui-components-svelte";

let expanded = false;

function toggleExpanded() {
    expanded = !expanded;
}
</script>

<div class="center column">
    <Accordion>
        <AccordionButton onClick={toggleExpanded}>
            Basic example
        </AccordionButton>
        <AccordionContent expanded={expanded}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem deleniti corporis rerum vel temporibus perspiciatis
            enim earum. Aliquid consequatur ipsa voluptatibus, earum quibusdam
            atque saepe inventore, cupiditate unde, reprehenderit repellat!
        </AccordionContent>
    </Accordion>
</div>

<style>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.column {
    flex-direction: column;
}
</style>
  
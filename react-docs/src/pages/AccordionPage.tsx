import { useState } from "react";
import Example from "../components/Example";
import { Accordion } from "../xui";

const AccordionComposable = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="center column">
      <Accordion>
        <Accordion.Button onClick={() => setExpanded(!expanded)}>
          Basic example
        </Accordion.Button>
        <Accordion.Content visible={expanded}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem deleniti corporis rerum vel temporibus perspiciatis
          enim earum. Aliquid consequatur ipsa voluptatibus, earum quibusdam
          atque saepe inventore, cupiditate unde, reprehenderit repellat!
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

const AccordionPage = () => {
  return (
    <>
      <h1 className="main-page-content-title">Accordion</h1>
      <p>A content area which can be collapsed and expanded.</p>
      <h2>Examples</h2>
      <h3>Use as a component</h3>
      <p>Basic example</p>
      <Example
        exampleContent={
          <div className="center column">
            <Accordion title="Lorem ipsum dolor sit amet consectetur" component>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              quos unde suscipit quisquam tenetur, autem dolore labore sapiente
              explicabo omnis iusto amet repudiandae dignissimos dolores ex
              tempora fugit eum maiores.
            </Accordion>
          </div>
        }
        codeContent={`
        <div className="center column">
            <Accordion title="Lorem ipsum dolor sit amet consectetur" component>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              quos unde suscipit quisquam tenetur, autem dolore labore sapiente
              explicabo omnis iusto amet repudiandae dignissimos dolores ex
              tempora fugit eum maiores.
            </Accordion>
        </div>
      `}
      />
      <p>Initial state set to expanded</p>
      <Example
        exampleContent={
          <div className="center column">
            <Accordion
              title="Lorem ipsum dolor sit amet consectetur"
              expanded={true}
              component
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              quos unde suscipit quisquam tenetur, autem dolore labore sapiente
              explicabo omnis iusto amet repudiandae dignissimos dolores ex
              tempora fugit eum maiores.
            </Accordion>
          </div>
        }
        codeContent={`
        <div className="center column">
            <Accordion
                title="Lorem ipsum dolor sit amet consectetur"
                expanded={true}
                component
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quos unde suscipit quisquam tenetur, autem dolore labore sapiente
                explicabo omnis iusto amet repudiandae dignissimos dolores ex
                tempora fugit eum maiores.
            </Accordion>
        </div>
      `}
      />
      <p>Example without a title.</p>
      <Example
        exampleContent={
          <div className="center column">
            <Accordion component>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Accordion>
          </div>
        }
        codeContent={`
        <div className="center column">
            <Accordion component>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Accordion>
        </div>
      `}
      />
      <h3>Use as a composable</h3>
      <Example
        exampleContent={<AccordionComposable />}
        codeContent={`
        <div className="center column">
          <Accordion>
            <Accordion.Button onClick={() => setExpanded(!expanded)}>
              Basic example
            </Accordion.Button>
            <Accordion.Content visible={expanded}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem deleniti corporis rerum vel temporibus perspiciatis
              enim earum. Aliquid consequatur ipsa voluptatibus, earum quibusdam
              atque saepe inventore, cupiditate unde, reprehenderit repellat!
            </Accordion.Content>
          </Accordion>
        </div>
      `}
      />
    </>
  );
};

export default AccordionPage;

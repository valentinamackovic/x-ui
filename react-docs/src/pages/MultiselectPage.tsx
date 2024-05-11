import Example from "../components/Example";
import { Multiselect } from "../xui";

export const MultiselectPage = () => {
  return (
    <>
      <h1 className="main-page-content-title">Select</h1>
      <p>A dropdown for displaying choices.</p>
      <h2>Examples</h2>
      <h3>Use as a component</h3>
      <p>Basic example</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        }
        codeContent={`as
        `}
      />
    </>
  );
};

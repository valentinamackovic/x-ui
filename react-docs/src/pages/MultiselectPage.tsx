import { useState } from "react";
import Example from "../components/Example";
import { Multiselect } from "../xui";

const MultiselectStaticExample = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any[]>([]);

  return (
    <Multiselect
      isStatic
      onChange={(newValue) => setValue(newValue)}
      onInputClick={() => setOpen(!open)}
      value={value}
      open={open}
      options={[
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
        { id: "3", value: "Option 3" },
      ]}
    />
  );
};

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
        codeContent={`
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
        `}
      />
      <p>Initial state set to open</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              open
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
              ]}
            />
          </div>
        }
        codeContent={`
        <div className="center">
            <Multiselect
              open
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
              ]}
            />
          </div>
        `}
      />
      <p>Initial value set to the first two options</p>
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
              defaultValue={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
            />
          </div>
        }
        codeContent={`
        <div className="center">
            <Multiselect
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
              defaultValue={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
            />
          </div>
        `}
      />
      <p>Disabled example</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              disabled
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
              ]}
              defaultValue={[{ id: "1", value: "Option 1" }]}
            />
          </div>
        }
        codeContent={`
        <div className="center">
            <Multiselect
              disabled
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
              ]}
              defaultValue={[{ id: "1", value: "Option 1" }]}
            />
          </div>
        `}
      />
      <p>Trigger an alert on value change</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              onChange={(value) =>
                window.alert(
                  `New value: ${value.map(
                    (v) => `id: ${v.id}, name: ${v.value} `
                  )}`
                )
              }
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        }
        codeContent={`
        <div className="center">
            <Multiselect
              onChange={(value) =>
                window.alert(
                  \`New value: \${value.map(
                    (v) => \`id: \${v.id}, name: \${v.value} \`
                  )}\`
                )
              }
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        `}
      />
      <p>Enable searching the options</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              enableSearch
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        }
        codeContent={`
        <div className="center">
            <Multiselect
              enableSearch
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        `}
      />
      <p>Enable clearing all of the selected options with clear all button</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              clearAll
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        }
        codeContent={`
        <div className="center">
            <Multiselect
              clearAll
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        `}
      />
      <p>Set the maximum number of selected items</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              maxSelectedItems={2}
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        }
        codeContent={`
        <div className="center">
            <Multiselect
              maxSelectedItems={2}
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        `}
      />
      <p>Ignore the internal logic with static property</p>
      <Example
        exampleContent={
          <div className="center">
            <MultiselectStaticExample />
          </div>
        }
        codeContent={`
        <Multiselect
          isStatic
          onChange={(newValue) => setValue(newValue)}
          onInputClick={() => setOpen(!open)}
          value={value}
          open={open}
          options={[
            { id: "1", value: "Option 1" },
            { id: "2", value: "Option 2" },
            { id: "3", value: "Option 3" },
          ]}
        />
        `}
      />
      <h3>Use as a composable</h3>
      TBD
    </>
  );
};

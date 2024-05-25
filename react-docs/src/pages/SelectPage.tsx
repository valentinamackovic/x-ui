import { useState } from "react";
import Example from "../components/Example";
import { Select } from "../xui";

const SelectComposableExample = () => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const [value, setValue] = useState<any>("aajjsk");

  return (
    <Select component>
      <Select.Input
        onClick={() => setAreOptionsVisible(!areOptionsVisible)}
        value={value}
      />
      <Select.Dropdown visible={areOptionsVisible}>
        <Select.Option
          key="1"
          onClick={() => setValue({ value: "Option 1", id: "1" })}
        >
          Option 1
        </Select.Option>
      </Select.Dropdown>
    </Select>
  );
};

export const SelectPage = () => {
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
            <Select
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
            />
          </div>
        }
        codeContent={`
        <div className="center">
          <Select
            options={[
              { id: "1", value: "Option 1" },
              { id: "2", value: "Option 2" },
            ]}
          />
        </div>
        `}
      />
      <p>Initial state set to open</p>
      <Example
        exampleContent={
          <div className="center">
            <Select
              open
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
            />
          </div>
        }
        codeContent={`
          <div className="center">
            <Select
              open
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
            />
          </div>
        `}
      />
      <p>Initial value set to the first option</p>
      <Example
        exampleContent={
          <div className="center">
            <Select
              defaultValue={{ id: "1", value: "Option 1" }}
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
            />
          </div>
        }
        codeContent={`
        <div className="center">
          <Select
            defaultValue={{ id: "1", value: "Option 1" }}
            options={[
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
            <Select
              disabled
              defaultValue={{ id: "1", value: "Option 1" }}
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
            />
          </div>
        }
        codeContent={`
        <div className="center">
          <Select
            disabled
            defaultValue={{ id: "1", value: "Option 1" }}
            options={[
              { id: "1", value: "Option 1" },
              { id: "2", value: "Option 2" },
            ]}
          />
        </div>
        `}
      />
      <p>Trigger an alert on value change</p>
      <Example
        exampleContent={
          <div className="center">
            <Select
              onChange={(value) =>
                window.alert(`id: ${value.id}; value: ${value.value}`)
              }
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
            />
          </div>
        }
        codeContent={`
        <div className="center">
          <Select
            onChange={(value) =>
              window.alert(\`id: \${value.id}; value: \${value.value}\`)
            }
            options={[
              { id: "1", value: "Option 1" },
              { id: "2", value: "Option 2" },
            ]}
          />
        </div>
        `}
      />
      <h3>Use as a composable</h3>
      <Example
        exampleContent={
          <div className="center">
            <SelectComposableExample />
          </div>
        }
        codeContent={`
        const [areOptionsVisible, setAreOptionsVisible] = useState(false);
        const [value, setValue] = useState<any>("aajjsk");
      
        return (
          <Select component>
            <Select.Input
              onClick={() => setAreOptionsVisible(!areOptionsVisible)}
              value={value}
            />
            <Select.Dropdown visible={areOptionsVisible}>
              <Select.Option
                key="1"
                onClick={() => setValue({ value: "Option 1", id: "1" })}
              >
                Option 1
              </Select.Option>
            </Select.Dropdown>
          </Select>
        );
        `}
      />
    </>
  );
};

import { useState } from "react";
import Example from "../components/Example";
import { Menu } from "../xui";

const StaticMenuExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="center">
      <Menu
        isStatic
        open={isOpen}
        onClose={() => setIsOpen(false)}
        items={[
          { id: "1", value: "Aciton 1 action 1" },
          { id: "2", value: "Aciton 2" },
          { id: "3", value: "Aciton 3" },
        ]}
        onItemClick={(item) => window.alert("item was clciked: " + item)}
        onButtonClick={() => setIsOpen(true)}
      >
        Options
      </Menu>
    </div>
  );
};

const MenuPage = () => {
  return (
    <>
      <h1 className="main-page-content-title">Menu</h1>
      <p>A versatile menu for navigation.</p>
      <h2>Examples</h2>
      <h3>Use as a component</h3>
      <p>Basic example</p>
      <Example
        exampleContent={
          <div className="center">
            <Menu
              items={[
                { id: "1", value: "Aciton 1 action 1" },
                { id: "2", value: "Aciton 2" },
                { id: "3", value: "Aciton 3" },
              ]}
              onItemClick={(item) => window.alert("item was clciked: " + item)}
            >
              Options
            </Menu>
          </div>
        }
        codeContent="a"
      />
      <p>Disabled items</p>
      <Example
        exampleContent={
          <div className="center">
            <Menu
              disabledItems={["1", "2"]}
              items={[
                { id: "1", value: "Aciton 1 action 1" },
                { id: "2", value: "Aciton 2" },
                { id: "3", value: "Aciton 3" },
              ]}
              onItemClick={(item) => window.alert("item was clciked: " + item)}
            >
              Options
            </Menu>
          </div>
        }
        codeContent="a"
      />
      <p>Open set to true</p>
      <Example
        exampleContent={
          <div className="center">
            <Menu
              open
              items={[
                { id: "1", value: "Aciton 1 action 1" },
                { id: "2", value: "Aciton 2" },
                { id: "3", value: "Aciton 3" },
              ]}
              onItemClick={(item) => window.alert("item was clciked: " + item)}
            >
              Options
            </Menu>
          </div>
        }
        codeContent="a"
      />
      <p>Trigger a function when the menu popup is closed</p>
      <Example
        exampleContent={
          <div className="center">
            <Menu
              onClose={() => window.alert("Closed menu popup.")}
              items={[
                { id: "1", value: "Aciton 1 action 1" },
                { id: "2", value: "Aciton 2" },
                { id: "3", value: "Aciton 3" },
              ]}
              onItemClick={(item) => window.alert("item was clciked: " + item)}
            >
              Options
            </Menu>
          </div>
        }
        codeContent="a"
      />
      <p>Ignore the internal logic with static property</p>
      <Example exampleContent={<StaticMenuExample />} codeContent="a" />
    </>
  );
};

export default MenuPage;

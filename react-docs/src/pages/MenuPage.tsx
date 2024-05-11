import Example from "../components/Example";
import { Menu } from "../xui";

const MenuPage = () => {
  return (
    <>
      <h1 className="main-page-content-title">Menu</h1>
      <p>A versatile menu for navigation.</p>
      <h2>Examples</h2>
      <h3>Use as a component</h3>
      <Example
        exampleContent={
          <div className="center">
            <Menu
              items={[
                { id: "1", value: "Aciton 1 action 1" },
                { id: "2", value: "Aciton 2" },
                { id: "3", value: "Aciton 3" },
              ]}
            >
              Options
            </Menu>
          </div>
        }
        codeContent="a"
      />
    </>
  );
};

export default MenuPage;

import { useState } from "react";
import CodeBlock from "./CodeBlock";

interface ExampleProps {
  exampleContent: React.ReactNode;
  codeContent: React.ReactNode;
}

const Example = ({ exampleContent, codeContent }: ExampleProps) => {
  const [viewMode, setViewMode] = useState("example");

  return (
    <div className="example-box">
      <div className="example-box-buttons" style={{ marginBottom: "10px" }}>
        <button className="btn-switch" onClick={() => setViewMode("example")}>
          Example
        </button>
        <button className="btn-switch" onClick={() => setViewMode("code")}>
          Code
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {viewMode === "example" ? (
          exampleContent
        ) : (
          <CodeBlock code={codeContent as string}></CodeBlock>
        )}
      </div>
    </div>
  );
};

export default Example;

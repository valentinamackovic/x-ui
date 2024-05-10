import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <SyntaxHighlighter language="jsx" style={nightOwl}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

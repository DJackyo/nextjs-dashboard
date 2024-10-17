import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "javascript",
}) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className="p-4 rounded-lg overflow-auto w-100 theme-atom-one-dark">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;

import React, { useEffect } from 'react';
import Prism from 'prismjs';
import '../prism.css';

Prism.highlightAll();
const CodeSnippet = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre>
      <code className="language-javascript">{`
      ${code}
      `}</code>
    </pre>
  );
};

export default CodeSnippet;

import React, { useEffect } from 'react';
import InsertAtIndexCode from '../../Code/Insert/InsertAtIndex';
import Prism from 'prismjs';
const ReactMarkdown = require('react-markdown');
const InsertAtIndex = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);
  return content.isLoading ? null : content.isError ? (
    content.error.message
  ) : (
    <main>
      <h2 className="subTitle">Insert at Index</h2>
      <span className="content">
        <ReactMarkdown source={content.data.insertKthIndex} />
      </span>
      <h2 className="subTitle">Code Snippet</h2>
      <InsertAtIndexCode />
    </main>
  );
};

export default InsertAtIndex;

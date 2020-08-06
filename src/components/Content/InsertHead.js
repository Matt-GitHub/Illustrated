import React, { useEffect } from 'react';
import InsertHeadCode from '../../Code/Insert/InsertHead';
import Prism from 'prismjs';
const ReactMarkdown = require('react-markdown');
const InsertHead = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);
  return content.isLoading ? (
    '...Loading Head'
  ) : content.isError ? (
    content.error.message
  ) : (
    <main>
      <h2 className="subTitle">Insert Head</h2>
      <span className="content">
        <ReactMarkdown source={content.data.insertHead} />
      </span>
      <h2 className="subTitle">Code Snippet</h2>
      <InsertHeadCode />
    </main>
  );
};

export default InsertHead;

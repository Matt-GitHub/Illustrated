import React, { useEffect } from 'react';
import InsertTailCode from '../../Code/Insert/InsertTail';
import Prism from 'prismjs';
const ReactMarkdown = require('react-markdown');
const InsertTail = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);
  return content.isLoading ? null : content.isError ? (
    content.error.message
  ) : (
    <main>
      <h2 className="subTitle">Insert Tail</h2>
      <span className="content">
        <ReactMarkdown source={content.data.insertTail} />
      </span>
      <h2 className="subTitle">Code Snippet</h2>
      <InsertTailCode />
    </main>
  );
};

export default InsertTail;

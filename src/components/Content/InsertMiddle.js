import React, { useEffect } from 'react';
import InsertMiddleCode from '../../Code/Insert/InsertMiddle';
import Prism from 'prismjs';
const ReactMarkdown = require('react-markdown');
const InsertMiddle = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);
  return content.isLoading ? (
    '...Loading'
  ) : content.isError ? (
    content.error.message
  ) : (
    <main>
      <h2 className="subTitle">Insert Middle</h2>
      <span className="content">
        <ReactMarkdown source={content.data.insertMiddle} />
      </span>
      <h2 className="subTitle">Code Snippet</h2>
      <InsertMiddleCode />
    </main>
  );
};

export default InsertMiddle;

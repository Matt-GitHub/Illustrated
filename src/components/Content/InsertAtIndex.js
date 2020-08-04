import React, { useEffect } from 'react';
import InsertAtIndexCode from '../../Code/Insert/InsertAtIndex';
import Code from '../../utils/PrismCode';
import Prism from 'prismjs';
const ReactMarkdown = require('react-markdown');
const InsertAtIndex = ({ content }) => {
  console.log('check this', content.codeSnippet?.content[0]?.content[0]?.value);
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);
  return content.isLoading ? (
    '...Loading'
  ) : content.isError ? (
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

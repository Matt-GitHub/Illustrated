import React from 'react';
const ReactMarkdown = require('react-markdown');
const LinkedListStructure = ({ content }) => {
  return content.isLoading ? (
    '...Loading Linked List Structure'
  ) : content.isError ? (
    content.error.message
  ) : (
    <main>
      <h2 className="subTitle"> Linked List Structure</h2>
      <span className="content">
        <ReactMarkdown source={content.data.structure} />
      </span>
    </main>
  );
};

export default LinkedListStructure;

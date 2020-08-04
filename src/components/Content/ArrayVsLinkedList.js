import React from 'react';
const ReactMarkdown = require('react-markdown');
const ArrayVsLinkedList = ({ content }) => {
  return content.isLoading ? (
    '...Loading'
  ) : content.isError ? (
    content.error.message
  ) : (
    <main>
      <h2 className="subTitle"> Array vs. Linked List</h2>
      <span className="content">
        <ReactMarkdown source={content.data.comparison} />
      </span>
      <div className="comparison">
        <div className="advantage">
          <h3 className="subTitle compareCenter">Advantage</h3>
          <span className="content">
            <ReactMarkdown source={content.data.advantages} />
          </span>
        </div>
        <div className="disadvantage">
          <h3 className="subTitle compareCenter">Disadvantage</h3>
          <span className="content">
            <ReactMarkdown source={content.data.disadvantages} />
          </span>
        </div>
      </div>
    </main>
  );
};

export default ArrayVsLinkedList;

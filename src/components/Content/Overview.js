import React from 'react';
const ReactMarkdown = require('react-markdown');
const Overview = ({ content }) => {
  return content.isLoading ? (
    '...Loading Overview'
  ) : content.isError ? (
    content.error.message
  ) : (
    <main>
      <h3 className="subTitle">Overview</h3>
      <span className="content">
        <ReactMarkdown source={content.data.overView} />
      </span>
    </main>
  );
};

export default Overview;

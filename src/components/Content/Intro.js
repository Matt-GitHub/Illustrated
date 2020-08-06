import React from 'react';

const Intro = ({ content }) => {
  return content.isLoading ? (
    '...Loading INTRO'
  ) : content.isError ? (
    content.error.message
  ) : (
    <main>
      <h2 className="subTitle">Intro</h2>
      <span className="content">{content.data.introduction}</span>
    </main>
  );
};

export default Intro;

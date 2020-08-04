import React, { useEffect } from 'react';
import SinglyLinkedListClassCode from '../../Code/Setup/SinglyLinkedListClass';
import Prism from 'prismjs';
import NodeVideo from '../videos/videoJS';
import useUrl from '../../generateVideoUrl';
const ReactMarkdown = require('react-markdown');
const SinglyLinkedListClass1 = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);
  const assetUrl = useUrl();
  return content.isLoading ? (
    '...Loading'
  ) : content.isError ? (
    content.error.message
  ) : (
    <main>
      <h2 className="subTitle">Singly Linked List Class</h2>
      <span className="content">
        <ReactMarkdown source={content.data.singlyLinkedListClass} />
      </span>
      <h2 className="subTitle">Video Walk-through</h2>
      <NodeVideo url={assetUrl.SinglyLinkedListClass} />
      <h2 className="subTitle">Code Snippet</h2>
      <SinglyLinkedListClassCode />
    </main>
  );
};

export default SinglyLinkedListClass1;

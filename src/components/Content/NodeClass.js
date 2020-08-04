import React, { useEffect } from 'react';
import NodeClassCode from '../../Code/Setup/nodeClass';
import Prism from 'prismjs';
import NodeVideo from '../videos/videoJS';
import useAsset from '../../Hooks/FetchAsset';
import useUrl from '../../generateVideoUrl';

const ReactMarkdown = require('react-markdown');
const NodeClass = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  // const asset = useAsset();
  const assetUrl = useUrl();
  console.log('assetUrl', assetUrl);
  return content.isLoading ? (
    '...Loading'
  ) : content.isError ? (
    content.error.message
  ) : (
    <main>
      <h2 className="subTitle">Node Class</h2>
      <span className="content">
        <ReactMarkdown source={content.data.nodeClass} />
      </span>
      {/* {asset.isLoading ? (
        'Loading Video'
      ) : asset.isError ? (
        asset.error.message
      ) : (
        <> */}
      <h2 className="subTitle">Video Walk-through</h2>
      <NodeVideo url={assetUrl.NodeClass} />
      {/* </>
      )} */}
      <h2 className="subTitle">Code Snippet</h2>
      <NodeClassCode />
    </main>
  );
};

export default NodeClass;

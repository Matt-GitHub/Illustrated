import useAsset from './Hooks/FetchAsset';

function useUrl() {
  const video = useAsset();
  const videoLinks = {};
  if (video.isLoading) {
    return 'loading';
  } else if (video.isError) {
    return 'error';
  } else {
    video.data.data.items.forEach(data => {
      let title = data.fields.title.replace(/\s+/g, '');
      if (videoLinks[title] === undefined) {
        videoLinks[title] = data.fields.file.url;
      }
    });
  }
  return videoLinks;
}

export default useUrl;

import { useQuery } from 'react-query';
import axios from 'axios';
require('dotenv').config();
function useAsset() {
  return useQuery(
    'sll asset',
    () => {
      return axios
        .get(
          `https://cdn.contentful.com//spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIORNMENT}/assets?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
        )
        .then(res => res);
    },
    {
      staleTime: 60 * 1000 * 60
    }
  );
}

export default useAsset;

import { useQuery } from 'react-query';
import axios from 'axios';
require('dotenv').config();

function useCourse() {
  return useQuery(
    'sll data',
    () => {
      console.log('process.env.REACT_APP_ACCESS_TOKEN', process.env.REACT_APP_ACCESS_TOKEN)
      return axios
        .get(
          `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIORNMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
        )
        .then(res => res.data.items[0].fields);
    },
    {
      staleTime: 1000 * 60 * 60
    }
  );
}

export default useCourse;

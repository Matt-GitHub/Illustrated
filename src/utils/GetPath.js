import { useHistory } from 'react-router-dom';
export default function usePath() {
  // Use the useHistory hook from react router to access previous path
  // Then slice the "/" out of the response
  // Allows us to dynamically pass in the previous path
  // And update it if that path changes without manual entry
  const { location } = useHistory();
  return location.pathname.slice(1);
}

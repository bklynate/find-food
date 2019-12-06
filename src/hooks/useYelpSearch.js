import { useEffect, useState } from 'react';
import yelpAPI from 'app/src/api/yelpAPI';

export default () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setErrorMessage] = useState('');

  const searchAPI = async searchTerm => {
    try {
      const {
        data: { businesses = [] },
      } = await yelpAPI.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'new york',
        },
      });
      setSearchResults(businesses);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  useEffect(() => {
    searchAPI('food');
  }, []);

  return [searchAPI, searchResults, error];
};

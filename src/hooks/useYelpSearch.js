import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import yelpAPI from 'app/src/api/yelpAPI';

export default () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setErrorMessage] = useState('');

  const getUserLatitudeAndLongitude = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') console.log('Premission Not Granted!');

    const { coords } = await Location.getCurrentPositionAsync();
    const { longitude, latitude } = coords;
    return { longitude, latitude };
  };

  const searchAPI = async searchTerm => {
    try {
      const { longitude, latitude } = await getUserLatitudeAndLongitude();
      const {
        data: { businesses = [] },
      } = await yelpAPI.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          longitude,
          latitude,
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

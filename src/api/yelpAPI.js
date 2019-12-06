import axios from 'axios';
import { REACT_APP_YELP_API_KEY } from 'react-native-dotenv';

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses/`,
  headers: {
    Authorization: `Bearer ${REACT_APP_YELP_API_KEY}`,
  },
});

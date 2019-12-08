import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchFoodScreen from './src/screens/SearchFoodScreen';
import SearchResultScreen from './src/screens/SearchResultScreen';

const navigator = createStackNavigator(
  {
    Search: {
      screen: SearchFoodScreen,
    },
    SearchResult: {
      screen: SearchResultScreen,
    },
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Find Food!',
    },
  },
);

export default createAppContainer(navigator);

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchFoodScreen from './src/screens/SearchFoodScreen';

const navigator = createStackNavigator(
  {
    Search: {
      screen: SearchFoodScreen,
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

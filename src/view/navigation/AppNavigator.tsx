import MainNavigation from './Main';
import {NavigationContainer} from '@react-navigation/native';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default AppNavigator;

import EpisodesScreen from '../screens/Episodes';
import MainScreen from '../screens/Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainNavigation = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <HomeStack.Screen name="Main" component={MainScreen} />
      <HomeStack.Screen name="Episodes" component={EpisodesScreen} />
    </HomeStack.Navigator>
  );
};

export default MainNavigation;

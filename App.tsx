import AppNavigator from './src/view/navigation/AppNavigator';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './src/store/index'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

import React from 'react';
// Redux
import { Provider } from 'react-redux'
import store from './src/redux/store'
//React Navigation
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigation from './src/navigation/stackNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StackNavigation/>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;

import { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/meals-reducer';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
  });
};

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={(error) => console.log(error)}
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

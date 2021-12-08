import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import store from './store';
import MapScreen from './screens/MapScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// setup redux

const Stack = createStackNavigator();

const App = () =>{
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false
       }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Map'  component={MapScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )}


export default App;

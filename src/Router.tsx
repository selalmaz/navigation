import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './pages/first';
import Second from './pages/second';
import {RootStackParamList} from './pages/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First}></Stack.Screen>
        <Stack.Screen name="Second" component={Second}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

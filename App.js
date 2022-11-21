import React from 'react';
import type {Node} from 'react';
import Home from './src/Home';
import Products from './src/Products';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Produtos" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

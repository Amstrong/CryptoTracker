import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
const Stack = createStackNavigator();
const CoinsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={CoinsScreen} />
    </Stack.Navigator>
  );
};
export default CoinsStack;

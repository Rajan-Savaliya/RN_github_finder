import React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home/HomePage.js';
import User from './src/pages/User/UserPage.js';
import RNBootSplash from 'react-native-bootsplash';

import GithubState from './src/context/github/GithubState';
// import AlertState from './context/alert/AlertState';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <View style={{flex: 1, backgroundColor: '#04009A'}}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="User"
          component={User}
        />
      </Stack.Navigator>
    </View>
  );
}

export default function App() {
  React.useEffect(() => {
    RNBootSplash.hide({fade: true}); // fade
  }, []);
  return (
    <GithubState>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </GithubState>
  );
}

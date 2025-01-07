import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/styles/GlobalStyles.js';
import { ThemeProvider } from 'styled-components/native';


import HomeScreen from './src/screens/HomeScreen.js';
import DetailsScreen from './src/screens/DetailScreen.js';
import FirstScreen from './src/screens/FirstScreen.js';
import LogInScreen from './src/screens/LogInScreen.js';


const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false,}} name="Pitch" component={FirstScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Log in" component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;


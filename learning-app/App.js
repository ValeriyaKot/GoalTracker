import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { theme } from './src/styles/GlobalStyles.js';
import { ThemeProvider } from 'styled-components/native';


import HomeScreen from './src/screens/HomeScreen.js';
import DetailsScreen from './src/screens/DetailScreen.js';
import FirstScreen from './src/screens/FirstScreen.js';
import LogInScreen from './src/screens/LogInScreen.js';
import MyCoursesScreen from './src/screens/MyCourses.js';
import BookCourseScreen from './src/screens/BookCourseScreen.js';



const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false, }} name="Pitch" component={FirstScreen} />
          <Stack.Screen options={styles.header} name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen options={styles.header} name="My Courses" component={MyCoursesScreen} />
          <Stack.Screen options={styles.header} name="Book Course" component={BookCourseScreen} />
          <Stack.Screen options={styles.header} name="Log in" component={LogInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    headerTitleAlign: 'center',
            headerTintColor: '#874ECF',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#874ECF',
              justifyContent: 'center',
            },
  }
});

export default App;


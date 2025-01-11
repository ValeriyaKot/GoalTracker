import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { theme } from './src/styles/GlobalStyles.js';
import { ThemeProvider } from 'styled-components/native';


import HomeScreen from './src/screens/HomeScreen.js';
import DetailsScreen from './src/screens/DetailScreen.js';
import FirstScreen from './src/screens/FirstScreen.js';
import LogInScreen from './src/screens/LogInScreen.js';
import MyCoursesScreen from './src/screens/MyCourses.js';
import BookCourseScreen from './src/screens/BookCourseScreen.js';


import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
          justifyContent: 'center',
        },
        tabBarIconStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'My Courses') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Book Course') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#874ECF',
        tabBarInactiveTintColor: '#874ECF',
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="My Courses" component={MyCoursesStackNavigator} />
      <Tab.Screen name="Book Course" component={BookCourseStackNavigator} />
    </Tab.Navigator>
  );
};

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={styles.header}
    />
  </Stack.Navigator>
);

const MyCoursesStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="My Courses"
      component={MyCoursesScreen}
      options={styles.header}
    />
  </Stack.Navigator>
);

const BookCourseStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Book Course"
      component={BookCourseScreen}
      options={styles.header}
    />
  </Stack.Navigator>
);


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Pitch"
            component={FirstScreen} />
          <Stack.Screen
            name="Home"
            component={HomeTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={styles.header}
          />
          <Stack.Screen
            options={styles.header}
            name="Log in"
            component={LogInScreen}
          />
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
  },
});

export default App;

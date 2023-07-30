import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import Home from './src/Screens/Home';
import CommentScreen from './src/Screens/CommentsScreen';
import MapScreen from './src/Screens/MapScreen';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ImageBg from './src/Images/BG-image.png';
import GoBackIcon from './src/Images/go-back.png';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./src/assets/fonts/Roboto-Medium.ttf'),
   
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={ImageBg} style={styles.bg} resizeMode="cover">
        <NavigationContainer theme={styles.navContainer}>
          <MainStack.Navigator initialRouteName="Login">
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="CommentScreen"
              component={CommentScreen}
              options={{
                title: 'Коментарі',
                headerStyle: {
                  backgroundColor: '#ffffff',
                  shadowColor: 'rgba(0,0,0,0.3)',
                  height: 88,
                },
                headerTintColor: '#212121',
                headerTitleStyle: {
                  marginLeft: 60,
                  fontFamily: 'Roboto-Medium',
                  fontSize: 22,
                },
              }}
            />
            <MainStack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                title: 'Мапа',
                headerStyle: {
                  backgroundColor: '#ffffff',
                  shadowColor: 'rgba(0,0,0,0.3)',
                  height: 88,
                },
                headerTintColor: '#212121',
                headerTitleStyle: {
                  marginLeft: 80,
                  fontFamily: 'Roboto-Medium',
                  fontSize: 22,
                },
              }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  bg: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  navContainer: {
    colors: {
      background: 'transparent',
    },
  },
});
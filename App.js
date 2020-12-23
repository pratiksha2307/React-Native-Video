import React, { Component } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './MainPage';
import Video1 from './Video1';
import Video2 from './Video2';
import Video3 from './Video3';

export default class App extends Component {
  constructor(props) {
    super(props);
    global.widthsize = Dimensions.get('window').width;
    global.heightsize = Dimensions.get('window').height;
    global.backgroundcolor = '#161926';
    global.buttonbackground = '#252c47';
    global.highlightcolor = '#fc753f';
    global.textcolor = '#ffffff';
  }
  
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none' initialRouteName='MainPage'>
          <Stack.Screen name='MainPage' component={MainPage} />
          <Stack.Screen name='Video1' component={Video1} />
          <Stack.Screen name='Video2' component={Video2} />
          <Stack.Screen name='Video3' component={Video3} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from './firebaseConfig';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import MainTabNavigator from './navigation/MainTabNavigator';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });

    return unsubscribe; 
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


{/*}
import React from 'react';
import MainTabNavigator from './navigation/MainTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './navigation/AuthStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};
export default App;
*/}

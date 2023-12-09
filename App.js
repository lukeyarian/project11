import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from './firebaseConfig'; // Ensure this is correctly set up
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

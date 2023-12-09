import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from '../firebaseConfig';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  if (user) {
    return (
      <View>
        <Text>Name: {user.displayName || 'N/A'}</Text>
        <Text>Email: {user.email}</Text>
        <Button title="Log out" onPress={() => auth.signOut()} />
      </View>
    );
  }

  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default ProfileScreen;
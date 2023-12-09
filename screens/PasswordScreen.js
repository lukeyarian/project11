import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { auth } from '../firebaseConfig';
import { login, signup } from '../firebaseConfig';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";

const PasswordScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Logged in
        navigation.navigate('Profile')
      })
      .catch((error) => {
        alert('Login failed: ' + error.message);
      });
  };
  
  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed up
        navigation.navigate('Profile')
      })
      .catch((error) => {
        alert('Signup failed: ' + error.message);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default PasswordScreen;
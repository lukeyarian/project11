import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { auth } from '../firebaseConfig';

const PasswordScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Logged in
        navigation.navigate('ProfileScreen')
      })
      .catch((error) => {
        alert('Login failed: ' + error.message);
      });
  };
  
  const handleSignup = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        navigation.navigate('ProfileScreen')
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
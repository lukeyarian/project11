import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
        <Text>Welcome to the Login Screen</Text>

      <Button
        title="Login with Email"
        onPress={() => navigation.navigate('EmailLogin')}
      />
      {/*buttons for other methods */}
      <Button title="Login with Google" onPress={() => {}} />
      <Button title="Login with Facebook" onPress={() => {}} />
    </View>
  );
};

export default LoginScreen;
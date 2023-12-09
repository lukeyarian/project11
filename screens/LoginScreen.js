import React from 'react';
import { View, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
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
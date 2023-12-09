import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const EmailLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button
        title="Continue"
        onPress={() => navigation.navigate('Password', { email })}
      />
    </View>
  );
};

export default EmailLoginScreen;
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig';
import { updateProfile } from 'firebase/auth';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, [])

  const handleSaveName = () => {
    const user = auth.currentUser;
  
    if (user) {
      updateProfile(auth.currentUser, {
        displayName: String(user)
      }).then(() => {
        alert("Name updated successfully.");
      }).catch((error) => {
        alert("Error updating name: " + error.message);
      });
    } else {
      alert("No user is signed in.");
    }
  };

  if (user) {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={user}
        onChangeText={setUser}
      />
      <Button title="Save" onPress={handleSaveName} />
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

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ProfileScreen;
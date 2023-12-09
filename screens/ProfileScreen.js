import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Modal } from 'react-native';
import firebase from '../firebaseConfig'; 
const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginOrSignup = () => {
    if (isAuthenticated) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => setLoginModalVisible(false))
        .catch(error => console.log(error));
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => setLoginModalVisible(false))
        .catch(error => console.log(error));
    }
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  if (user) {
    return (
      <View>
        <Text>Name: {user.displayName}</Text>
        <Text>Email: {user.email}</Text>
        <Button title="Log out" onPress={handleLogout} />
      </View>
    );
  }

  return (
    <View>
      <Button title="Log in" onPress={() => setLoginModalVisible(true)} />
      <Modal visible={isLoginModalVisible} animationType="slide">
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Button title="Continue" onPress={handleLoginOrSignup} />
        <Button title="Close" onPress={() => setLoginModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default ProfileScreen;
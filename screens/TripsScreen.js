import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firebase from '../firebaseConfig';

const TripsScreen = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const userId = firebase.auth().currentUser.uid;
      const tripsCollection = firebase.firestore().collection('trips');
      const userTrips = await tripsCollection.where('userId', '==', userId).get();
      setTrips(userTrips.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchTrips();
  }, []);

  const renderTrip = ({ item }) => (
    <View style={styles.tripItem}>
      <Text style={styles.tripTitle}>{item.title}</Text>
      <Text style={styles.tripRating}>{`Rating: ${item.rating}`}</Text>
      <Text style={styles.tripDescription}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={trips}
      renderItem={renderTrip}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  tripItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TripsScreen;
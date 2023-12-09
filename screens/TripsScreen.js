import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { auth, firestore } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const TripsScreen = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      if (auth.currentUser) {
        const q = query(collection(firestore, 'reservations'), where('userId', '==', auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        const fetchedReservations = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReservations(fetchedReservations);
      }
    };

    fetchReservations();
  }, []);

  return (
    <FlatList
      data={reservations}
      renderItem={({ item }) => (
        <View style={styles.reservationItem}>
          <Text style={styles.title}>{item.propertyTitle}</Text>
          {/* Display other property details */}
        </View>
      )}
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
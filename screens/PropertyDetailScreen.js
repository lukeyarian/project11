import React from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';
import { auth, firestore } from '../firebaseConfig'; // Ensure this path is correct
import { collection, addDoc } from 'firebase/firestore';

const PropertyDetailScreen = ({ route }) => {
  const { property } = route.params;

  const handleReserve = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert('You must be logged in to make a reservation.');
      return;
    }
  
    const reservationDetails = {
      userId: user.uid,
      propertyId: property.id,
      startDate: '2023-01-01',
      endDate: '2023-01-05',
    };

    try {
      await addDoc(collection(firestore, 'reservations'), reservationDetails);
      alert('Reservation successful!');
    } catch (error) {
      console.error('Reservation failed:', error);
      alert('Failed to make reservation.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: property.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{property.title}</Text>
      <Text style={styles.rating}>{`Rating: ${property.rating}`}</Text>
      <Text style={styles.description}>{property.description}</Text>
      <View style={styles.reserveButtonContainer}>
        <Text style={styles.price}>{`${property.price} per night`}</Text>
        <Button title="Reserve" onPress={handleReserve} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '25%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
  },
  rating: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  reserveButtonContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PropertyDetailScreen;
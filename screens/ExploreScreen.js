import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const ExploreScreen = ({ navigation }) => {
    const onPropertySelect = (property) => {
      navigation.navigate('PropertyDetailScreen', { property });
    };

  const listings = [
    {
      id: '1',
      title: 'Room with big terrace & private bath',
      rating: 4.8,
      type: 'Private room',
      price: '€45 night',
      imageUrl: 'https://via.placeholder.com/150', 
    },
    
  ];

  const renderItem = ({ item }) => (
    <View style={styles.listing}>
      <Image source={{ uri: item.imageUrl }} style={styles.listingImage} />
      <View style={styles.listingDetails}>
        <Text style={styles.listingTitle}>{item.title}</Text>
        <Text style={styles.listingRating}>{item.rating}</Text>
        <Text style={styles.listingType}>{item.type}</Text>
        <Text style={styles.listingPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={listings}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  listing: {
    marginVertical: 8,
  },
  listingImage: {
    width: '100%',
    height: 200,
  },
  listingDetails: {
  },
  listingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;
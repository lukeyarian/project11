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
      imageUrl: 'https://www.dabblinganddecorating.com/wp-content/uploads/2021/02/1d8a90_6dd69bffb749426f86e14ade4948e71e-mv2_d_2870_3827_s_4_2-150x150.jpg', 
    },
    {
      id: '2',
      title: 'Large room with private bath',
      rating: 4.5,
      type: 'Private room',
      price: '€55 night',
      imageUrl: 'https://www.delineateyourdwelling.com/wp-content/uploads/Modern-Minimal-Plant-Living-Room-1-150x150.jpg', 
    },
    {
      id: '3',
      title: 'Small room with big windows',
      rating: 4.2,
      type: 'Private room',
      price: '€35 night',
      imageUrl: 'https://www.stonegableblog.com/wp-content/uploads/2022/04/pretty-room-150x150.jpg', 
    },

  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onPropertySelect(item)}>
    <View style={styles.listing}>
      <Image source={{ uri: item.imageUrl }} style={styles.listingImage} />
      <View style={styles.listingDetails}>
        <Text style={styles.listingTitle}>{item.title}</Text>
        <Text style={styles.listingRating}>{item.rating}</Text>
        <Text style={styles.listingType}>{item.type}</Text>
        <Text style={styles.listingPrice}>{item.price}</Text>
      </View>
    </View>
    </TouchableOpacity>
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
    width: '25%',
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
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/ExploreScreen';
import WishlistScreen from '../screens/WishlistScreen'; 
import TripsScreen from '../screens/TripsScreen'; 
import InboxScreen from '../screens/InboxScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import PropertyDetailScreen from '../screens/PropertyDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ExploreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="PropertyDetailScreen" component={PropertyDetailScreen} />
    </Stack.Navigator>
  );
}
function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={ExploreStack} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Trips" component={TripsScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default MainTabNavigator;
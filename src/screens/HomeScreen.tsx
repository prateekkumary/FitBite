
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const categories = [
  { id: '1', name: 'Breakfast', icon: 'fast-food-outline' },
  { id: '2', name: 'Lunch', icon: 'restaurant-outline' },
  { id: '3', name: 'Dinner', icon: 'pizza-outline' },
];

const HomeScreen = () => {
  const userName = 'Prateek';

  return (
    <View style={styles.container}>
      {/* Welcome Header */}
      <Text style={styles.greeting}>Good Morning, {userName} 👋</Text>

      {/* Category Scroll */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }} // space at the ends
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard}>
            <Icon name={item.icon} size={28} color="#FF6F00" />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Featured Meal */}
      <Text style={styles.sectionTitle}>Today’s Special</Text>
      <LinearGradient colors={['#FF6F00', '#FFA726']} style={styles.specialCard}>
        <Image
          source={require('../assets/meal.png')} // Replace with your meal image
          style={styles.mealImage}
        />
        <Text style={styles.mealTitle}>Kesariya Paneer Bowl</Text>
        <Text style={styles.mealSubtitle}>Freshly cooked & healthy</Text>
      </LinearGradient>

      {/* Upcoming Order */}
      <Text style={styles.sectionTitle}>Upcoming Order</Text>
      <View style={styles.orderCard}>
        <Text style={styles.orderText}>Paneer Wrap - Arriving at 12:30 PM</Text>
        <Icon name="timer-outline" size={20} color="#FF6F00" />
      </View>

      {/* Live Kitchen Cam */}
      <TouchableOpacity style={styles.kitchenButton}>
        <Icon name="videocam-outline" size={20} color="#fff" />
        <Text style={styles.kitchenText}>Watch Live Kitchen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  greeting: {
    marginTop: 25,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#444',
  },
  categoryCard: {
    flexDirection: 'column',
    backgroundColor: '#fff3e0',
    padding: 12,
    borderRadius: 12,
    marginRight: 15,
    alignItems: 'center',
    width: 105,
  },
  categoryText: {
    marginTop: 8,
    color: '#FF6F00',
    fontWeight: '500',
  },
  specialCard: {
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  mealImage: {
    borderRadius: 15,
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  mealTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  mealSubtitle: {
    color: '#fff',
    fontSize: 14,
  },
  orderCard: {
    backgroundColor: '#fff3e0',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderText: {
    fontSize: 15,
    color: '#444',
  },
  kitchenButton: {
    marginTop: 25,
    backgroundColor: '#FF6F00',
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  kitchenText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
  },
});
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

export default function RoomDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRoom() {
      try {
        const response = await axios.get(`https://685ef719c55df675589d3933.mockapi.io/hotel/${id}`);
        setRoom(response.data);
      } catch (error) {
        console.log('Error fetching room:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchRoom();
  }, [id]);

  const amenities = [
    { id: '1', name: 'wifi', icon: 'wifi' },
    { id: '2', name: 'pool', icon: 'water' },
    { id: '3', name: 'breakfast', icon: 'cafe' },
    { id: '4', name: 'parking', icon: 'car' }
  ];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!room) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load room details</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: room.image }} style={styles.image} />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{room.name}</Text>
        
        <View style={styles.row}>
          <Ionicons name="location" size={16} color="#3498db" />
          <Text style={styles.location}>{room.location}</Text>
        </View>

        <View style={[styles.row, styles.priceRow]}>
          <View style={styles.rating}>
            <Ionicons name="star" size={16} color="#f39c12" />
            <Text style={styles.ratingText}>{room.rating} Rating</Text>
          </View>
          <Text style={styles.price}>{room.price}</Text>
        </View>

        <Text style={styles.subtitle}>Amenities</Text>
        <FlatList
          data={amenities}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.amenitiesContainer}
          renderItem={({ item }) => (
            <View style={styles.amenity}>
              <Ionicons name={item.icon as any} size={20} color="#3498db" />
              <Text style={styles.amenityText}>{item.name}</Text>
            </View>
          )}
        />

        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.description}>
          {room.description}
        </Text>
      </View>

      <TouchableOpacity style={styles.bookBtn} onPress={() => router.push('/booking-confirm')}>
        <Text style={styles.bookBtnText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 16
  },
  container: { 
    backgroundColor: '#f0f0f0' 
  },
  header: {
    position: 'relative' 
  },
  image: { 
    width: '100%', 
    height: 300, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20 
  },
  info: { 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 5 
  },
  row: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  location: { 
    color: '#666', 
    marginLeft: 5 
  },
  priceRow: { 
    justifyContent: 'space-between', 
    marginVertical: 15 
  },
  rating: { 
    flexDirection: 'row', 
    backgroundColor: '#fef9e7', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 20 
  },
  ratingText: { 
    color: '#f39c12', 
    marginLeft: 5 
  },
  price: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#2ecc71' 
  },
  subtitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginVertical: 10 
  },
  amenitiesContainer: { 
    paddingBottom: 10 
  },
  amenity: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f8f9fa', 
    borderRadius: 20, 
    padding: 10, 
    marginRight: 10, 
    marginBottom: 10 
  },
  amenityText: { 
    color: '#3498db', 
    marginLeft: 5, 
    textTransform: 'capitalize' 
  },
  description: { 
    color: '#666', 
    lineHeight: 24, 
    marginBottom: 10 
  },
  bookBtn: { 
    backgroundColor: '#3498db', 
    padding: 16, 
    borderRadius: 12, 
    margin: 20, 
    alignItems: 'center' 
  },
  bookBtnText: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 18 
  }
});

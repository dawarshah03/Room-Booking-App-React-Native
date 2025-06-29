import { FlatList, TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RoomsScreen() {
  const router = useRouter();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await axios.get('https://685ef719c55df675589d3933.mockapi.io/hotel');
        setRooms(response.data);
      } catch (error) {
        console.log('Error fetching rooms:', error);
      }
    }
    fetchRooms();
  }, []);

  return (
    <FlatList
      data={rooms}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/room-details/${item.id}`)}
          style={styles.roomCard}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.roomImage}
          />
          <View style={styles.roomInfo}>
            <Text style={styles.roomName}>{item.name}</Text>
            <Text style={styles.roomLocation}>{item.location}</Text>
            <View style={styles.roomFooter}>
              <Text style={styles.price}>{item.price}</Text>
              <Text>⭐ {item.rating}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 30
  },
  roomCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  roomImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  roomInfo: {
    flex: 1,
    marginLeft: 12
  },
  roomName: {
    fontSize: 16,
    fontWeight: '600'
  },
  roomLocation: {
    color: '#666',
    fontSize: 14,
    marginTop: 4
  },
  roomFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  price: {
    color: '#2ecc71',
    fontWeight: 'bold'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});

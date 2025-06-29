import { FlatList, TouchableOpacity, Image, Text, View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RoomsScreen() {
  const router = useRouter();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('https://685ef719c55df675589d3933.mockapi.io/hotel');
        setRooms(response.data);
      } catch (error) {
        console.log('Error fetching rooms:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={rooms}
      contentContainerStyle={{ padding: 16, marginTop: 30 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/room-details/${item.id}`)}
          style={{
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
          }}
        >
          <Image
            source={{ uri: item.image}}
            style={{ width: 100, height: 100, borderRadius: 8 }}
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
            <Text style={{ color: '#666', fontSize: 14, marginTop: 4 }}>{item.location}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
              <Text style={{ color: '#2ecc71', fontWeight: 'bold' }}>{item.price}</Text>
              <Text>⭐ {item.rating}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No rooms available</Text>
        </View>
      }
    />
  );
}
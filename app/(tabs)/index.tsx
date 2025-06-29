import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomeScreen() {
  const router = useRouter();
  const [rooms, setRooms] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await axios.get('https://685ef719c55df675589d3933.mockapi.io/hotel?page=1&limit=4');
        setRooms(response.data);
      } catch (error) {
        console.log('Fetch error:', error);
      }
    }
    fetchRooms();
  }, []);

  return (
    <ScrollView style={styles.container}>

      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945' }}
          style={styles.bannerImage}
        />
        
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search Hotels, Rooms.."
            value={searchText}
            onChangeText={setSearchText}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.bannerText}>
          <Text style={styles.bannerTitle}>Discover Pakistan</Text>
          <Text style={styles.bannerSubtitle}>Book Your Perfect Stay</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All', 'Luxury', 'Budget', 'Beach', 'Mountain'].map((category, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.category}
              onPress={() => router.push('/rooms')}
            >
              <Text>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Rooms</Text>
          <TouchableOpacity onPress={() => router.push('/rooms')}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={rooms}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.roomCard} onPress={() => router.push(`/room-details/${item.id}`)}>
              <Image source={{ uri: item.image }} style={styles.roomImage} />
              <Text style={styles.roomName}>{item.name}</Text>
              <Text style={styles.roomLocation}>{item.location}</Text>
              <View style={styles.roomFooter}>
                <Text style={styles.price}>{item.price}</Text>
                <Text>⭐ {item.rating}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Special Offers</Text>
        <TouchableOpacity style={styles.offerCard} onPress={() => router.push('/rooms')}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1531058020387-3be344556be6' }}
            style={styles.offerImage}
          />
          <View style={styles.offerContent}>
            <Text style={styles.offerTitle}>Summer Discount</Text>
            <Text style={styles.offerText}>Get 20% off on all bookings this month!</Text>
            <View style={styles.offerButton}>
              <Text style={styles.buttonText}>Book Now</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.aboutContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4' }}
          style={styles.aboutImage}
        />
        <View style={styles.aboutContent}>
          <Text style={[styles.sectionTitle, { color: 'white' }]}>About Us</Text>
          <Text style={styles.aboutText}>
            We provide the best hotel booking experience with verified properties across Pakistan. 
            Our mission is to make your travel comfortable and memorable.
          </Text>
          <TouchableOpacity style={styles.exploreButton} onPress={() => router.push('/rooms')}>
            <Text style={styles.buttonText}>Explore Rooms</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  banner: {
    height: 250,
    position: 'relative'
  },
  bannerImage: {
    width: '100%',
    height: '100%'
  },
  searchBox: {
    position: 'absolute',
    top: 30,
    left: 16,
    right: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    marginTop: 12
  },
  searchInput: {
    fontSize: 14,
    paddingLeft: 10
  },
  bannerText: {
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 16 
  },
  bannerTitle: {
    fontSize: 28, 
    fontWeight: 'bold', 
    color: 'white' 
  },
  bannerSubtitle: {
    color: 'white', 
    fontSize: 16 
  },
  section: {
    padding: 16
  },
  sectionTitle: {
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 16,
    color: '#333'
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  seeAll: {
    paddingTop: 10,
    color: '#3498db',
    fontWeight: 'bold'
  },
  category: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  roomCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#eee'
  },
  roomImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12
  },
  roomName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333'
  },
  roomLocation: {
    color: '#666',
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
  offerCard: {
    height: 200,
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  offerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  offerContent: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
    height: '100%',
    justifyContent: 'center'
  },
  offerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  offerText: {
    color: 'white',
    marginTop: 8,
    fontSize: 16
  },
  offerButton: {
    backgroundColor: '#1976d2',
    padding: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 16
  },
  aboutContainer: {
    height: 300,
    position: 'relative',
    margin: 16,
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  aboutImage: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  aboutContent: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    height: '100%',
    justifyContent: 'center'
  },
  aboutText: {
    color: 'white',
    lineHeight: 24,
    marginBottom: 16,
    fontSize: 16
  },
  exploreButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 6,
    alignSelf: 'flex-start'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
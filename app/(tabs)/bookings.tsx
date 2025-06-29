import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const bookings = [
  {
    id: '1',
    room: 'Beachfront Villa',
    location: 'Pearl Continental, Karachi',
    date: '15 Nov - 20 Nov 2025',
    status: 'Confirmed',
    price: 'Rs 42,000',
    image: 'https://media.istockphoto.com/id/1486803188/photo/the-minimalist-bedroom-interior-with-sea-view-in-sunset-time.jpg?s=612x612&w=0&k=20&c=AwWZB0BURWZaWG_uOUUaXKzgaPGbR3dG9E3bKpsZf2Q=',
    amenities: ['wifi', 'pool', 'breakfast'],
    checkInTime: '2:00 PM',
    checkOutTime: '12:00 PM'
  },
  {
    id: '2', 
    room: 'Mountain Cabin',
    location: 'PC Bhurban, Murree',
    date: '10 Dec - 15 Dec 2025',
    status: 'Pending',
    price: 'Rs 28,000',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    amenities: ['fireplace', 'view', 'parking'],
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM'
  }
];

export default function BookingsScreen() {
  return (
    <FlatList
      data={bookings}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          
          <View style={styles.content}>
            <Text style={styles.title}>{item.room}</Text>
            <Text style={styles.subtitle}>{item.location}</Text>
            
            <View style={styles.row}>
              <Ionicons name="calendar" size={16} color="#666" />
              <Text style={styles.text}>{item.date}</Text>
            </View>
            
            <View style={styles.row}>
              <Ionicons name="time" size={16} color="#666" />
              <Text style={styles.text}>{item.checkInTime} - {item.checkOutTime}</Text>
            </View>
            
            <View style={styles.amenities}>
              {item.amenities.map(a => (
                <View key={a} style={styles.amenity}>
                  <Ionicons 
                    name={
                      a === 'wifi' ? 'wifi' :
                      a === 'pool' ? 'water' :
                      a === 'breakfast' ? 'cafe' :
                      a === 'fireplace' ? 'flame' :
                      a === 'view' ? 'eye' : 'car'
                    } 
                    size={16} 
                    color="#3498db" 
                  />
                  <Text style={styles.amenityText}>{a}</Text>
                </View>
              ))}
            </View>
            
            <View style={styles.footer}>
              <View style={[styles.status, item.status === 'Confirmed' ? {backgroundColor:'#e8f8f5'} : {backgroundColor:'#fef9e7'}]}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 16, backgroundColor: '#f0f0f0' 
},
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 28,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
},
  image: { 
    width: '100%', 
    height: 180
},
  content: { 
    padding: 16 
},
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 4 
},
  subtitle: { 
    color: '#666', 
    marginBottom: 12, 
    fontSize: 14 
},
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 8 

  },
  text: { 
    color: '#666', 
    marginLeft: 8, 
    fontSize: 14 
},
  amenities: {
     flexDirection: 'row', 
     flexWrap: 'wrap', 
     marginTop: 12, 
     marginBottom: 16 
    },
  amenity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8
  },
  amenityText: {
     fontSize: 12, 
     color: '#3498db', 
     marginLeft: 4 
    },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8
  },
  status: { 
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 12 
},
  statusText: {
    fontSize: 12, 
    fontWeight: '600' 
    },
  price: { 
    color: '#2ecc71', 
    fontWeight: 'bold', 
    fontSize: 16 
},
  cancelBtn: { 
    width: '100%', 
    padding: 12, 
    alignItems: 'center', 
    borderTopWidth: 1, 
    borderTopColor: '#eee' 
},
  cancelText: { 
    color: '#e74c3c', 
    fontWeight: '500' 
}
});

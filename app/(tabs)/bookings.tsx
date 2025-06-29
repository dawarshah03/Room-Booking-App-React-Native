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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hx-rSYyzPY-pbwxAimFfuCaAq-VWIa4CtV3zu-9SdOH9UmypS1noC-8&s',
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
    image: 'data:image/jpeg;base64,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',
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
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.img} />
          
          <View style={styles.info}>
            <Text style={styles.name}>{item.room}</Text>
            <Text style={styles.address}>{item.location}</Text>
            
            <View style={styles.line}>
              <Ionicons name="calendar" size={16} color="#666" />
              <Text style={styles.smallText}>{item.date}</Text>
            </View>
            
            <View style={styles.line}>
              <Ionicons name="time" size={16} color="#666" />
              <Text style={styles.smallText}>{item.checkInTime} - {item.checkOutTime}</Text>
            </View>
            
            <View style={styles.tags}>
              {item.amenities.map(a => (
                <View key={a} style={styles.tag}>
                  <Ionicons 
                    name={
                      a === 'wifi' ? 'wifi' :
                      a === 'pool' ? 'water' :
                      a === 'breakfast' ? 'cafe' :
                      a === 'fireplace' ? 'flame' : 'car'
                    } 
                    size={16} 
                    color="#3498db" 
                  />
                  <Text style={styles.tagText}>{a}</Text>
                </View>
              ))}
            </View>
            
            <View style={styles.bottom}>
              <View style={[
                styles.badge, 
                item.status === 'Confirmed' ? styles.greenBg : styles.yellowBg
              ]}>
                <Text style={styles.badgeText}>{item.status}</Text>
              </View>
              <Text style={styles.money}>{item.price}</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.cancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { 
    marginTop: 25,
    padding: 16, 
    backgroundColor: '#f0f0f0' 
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 2 
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  img: { 
    width: '100%', 
    height: 180 
  },
  info: { 
    padding: 16 
  },
  name: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 4 
  },
  address: { 
    color: '#666', 
    marginBottom: 12 
  },
  line: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 8 
  },
  smallText: { 
    color: '#666', 
    marginLeft: 8 
  },
  tags: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginVertical: 12 
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    padding: 6,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8
  },
  tagText: { 
    fontSize: 12, 
    color: '#3498db', 
    marginLeft: 4 
  },
  bottom: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  badge: { 
    borderRadius: 12, 
    padding: 6, 
    paddingHorizontal: 12 
  },
  greenBg: { 
    backgroundColor: '#e8f8f5' 
  },
  yellowBg: { 
    backgroundColor: '#fef9e7' 
  },
  badgeText: { 
    fontSize: 12, 
    fontWeight: '600' 
  },
  money: { 
    color: '#2ecc71', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  cancel: { 
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

// account.tsx
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AccountScreen() {
  const router = useRouter();
  
  const user = {
    name: "Ahmed Khan",
    email: "ahmed.khan@gmail.com",
    membership: "Gold",
    points: 1250,
    pic: "https://ichef.bbci.co.uk/images/ic/1920x1080/p0784g6m.jpg"
  };

  const bookings = [
    { id: 1, hotel: "Pearl Continental", date: "15 Oct 2025" },
    { id: 2, hotel: "Serena Hotel", date: "22 Nov 2025" }
  ];

  return (
    <ScrollView style={s.container}>
      <View style={s.header}>
        <Image source={{ uri: user.pic }} style={s.pic} />
        <View>
          <Text style={s.name}>{user.name}</Text>
          <Text style={s.email}>{user.email}</Text>
          <Text style={s.status}>{user.membership} • {user.points} pts</Text>
        </View>
      </View>

      <View style={s.section}>
        <Text style={s.title}>Quick Actions</Text>
        <View style={s.actions}>
          <TouchableOpacity style={s.btn}>
            <Ionicons name="wallet" size={24} color="#3498db" />
            <Text>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.btn}>
            <Ionicons name="heart" size={24} color="#e74c3c" />
            <Text>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.btn}>
            <Ionicons name="notifications" size={24} color="#f39c12" />
            <Text>Alerts</Text>
          </TouchableOpacity>
        </View>
      </View>

   <View style={s.section}>
  <Text style={s.title}>Upcoming</Text>
  <FlatList
    data={bookings}
    keyExtractor={(b) => b.id.toString()}
    renderItem={({ item: b }) => (
      <TouchableOpacity style={s.booking}>
        <Ionicons name="calendar" size={20} color="#2ecc71" />
        <View style={s.bookingInfo}>
          <Text style={s.hotel}>{b.hotel}</Text>
          <Text style={s.date}>{b.date}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#95a5a6" />
      </TouchableOpacity>
    )}
    scrollEnabled={false} // Disable scrolling since it's in a vertical list
  />
</View>

      <View style={s.section}>
        <Text style={s.title}>Settings</Text>
        <TouchableOpacity style={s.menu}>
          <Ionicons name="person" size={20} color="#3498db" />
          <Text>  Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.menu}>
          <Ionicons name="lock-closed" size={20} color="#9b59b6" />
          <Text>  Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.menu}>
          <Ionicons name="card" size={20} color="#e67e22" />
          <Text>  Payment</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={s.logout} onPress={() => router.push('/login')}>
        <Ionicons name="log-out" size={20} color="#e74c3c" />
        <Text style={s.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0'
  },
  header: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  pic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333'
  },
  email: {
    color: '#666',
    marginVertical: 4
  },
  status: {
    color: '#f39c12',
    fontWeight: '600'
  },
  section: {
    marginBottom: 24
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    width: '30%'
  },
  booking: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10
  },
  bookingInfo: {
    flex: 1,
    marginHorizontal: 12
  },
  hotel: {
    fontWeight: '500',
    color: '#333'
  },
  date: {
    color: '#666',
    marginTop: 4
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40
  },
  logoutText: {
    color: '#e74c3c',
    marginLeft: 10,
    fontWeight: '500'
  }
});

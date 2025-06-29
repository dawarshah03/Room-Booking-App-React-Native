import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function BookingConfirm() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const submitHandler = () => {
    if (!name || !email || !phone || !checkIn || !checkOut) {
      alert('Please fill all fields before submitting.');
      return;
    }

    alert(
      `Booking Confirmed!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDates: ${checkIn} to ${checkOut}`
    );

    router.push('/(tabs)/bookings');
  };

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945' }}
        style={styles.headerImage}
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Complete Your Booking</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.dateRow}>
          <View style={[styles.inputContainer, { flex: 1, marginRight: 10 }]}>
            <Text style={styles.label}>Check-in</Text>
            <TextInput
              value={checkIn}
              onChangeText={setCheckIn}
              style={styles.input}
              placeholder="YYYY-MM-DD"
            />
          </View>

          <View style={[styles.inputContainer, { flex: 1 }]}>
            <Text style={styles.label}>Check-out</Text>
            <TextInput
              value={checkOut}
              onChangeText={setCheckOut}
              style={styles.input}
              placeholder="YYYY-MM-DD"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={submitHandler}>
          <Text style={styles.buttonText}>Confirm Booking</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa'
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  content: {
    padding: 20,
    marginTop: -30,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center'
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 14,
    color: '#3498db',
    marginBottom: 8,
    fontWeight: '500'
  },
  input: {
    height: 50,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333'
  },
  dateRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    elevation: 3
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10
  }
});

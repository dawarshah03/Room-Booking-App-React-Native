import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="login" 
        options={{ title: 'Login' }} 
      />
      <Stack.Screen 
        name="signup" 
        options={{ title: 'Sign Up' }} 
      />
      <Stack.Screen 
        name="room-details/[id]" 
        options={{ title: 'Room Details' }} 
      />
      <Stack.Screen 
        name="booking-confirm" 
        options={{ title: 'Confirm Booking' }} 
      />
    </Stack>
  );
}

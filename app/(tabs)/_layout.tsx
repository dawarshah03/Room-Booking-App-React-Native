import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        let icon;
        let tabLabel;

        if (route.name === 'index') {
          icon = 'home';
          tabLabel = 'Home';
        } else if (route.name === 'rooms') {
          icon = 'bed';
          tabLabel = 'Rooms';
        } else if (route.name === 'bookings') {
          icon = 'calendar';
          tabLabel = 'Bookings';
        } else if (route.name === 'account') {
          icon = 'person';
          tabLabel = 'Account';
        }

        return {
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={icon} 
              size={24} 
              color={color} 
              style={{ paddingTop: 8 }}
            />
          ),
          tabBarLabel: tabLabel,
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: '#95a5a6',
          tabBarStyle: {
            paddingBottom: 8,
            height: 60
          },
          headerShown: false
        };
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="rooms" />
      <Tabs.Screen name="bookings" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
}

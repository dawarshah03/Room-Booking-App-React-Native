import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => {
        let iconName;
        let tabName;

        if (route.name === 'index') {
          iconName = 'home';
          tabName = 'Home';
        } else if (route.name === 'rooms') {
          iconName = 'bed';
          tabName = 'Rooms';
        } else if (route.name === 'bookings') {
          iconName = 'calendar';
          tabName = 'Bookings';
        } else if (route.name === 'account') {
          iconName = 'person';
          tabName = 'Account';
        }

        return {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={iconName} size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 11, marginBottom: 4 }}>
              {tabName}
            </Text>
          ),
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: '#95a5a6',
          tabBarStyle: {
            height: 60,
          },
          headerShown: false,
        };
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="rooms" />
      <Tabs.Screen name="bookings" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
};

export default TabLayout;

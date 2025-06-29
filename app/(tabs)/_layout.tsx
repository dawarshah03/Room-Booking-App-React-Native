import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabLayout = ()=>{
  return(
    <Tabs
    screenOptions={({route})=>({
      tabBarIcon:({color, size})=>{
        let iconName;
        if(route.name==='index'){
          iconName='home'
        }
        else if(route.name==='rooms'){
          iconName='bed'
        }
        else if(route.name==='bookings'){
          iconName='calendar'
        }
        else if(route.name==='account'){
          iconName='person'
        }

        return <Ionicons name={iconName} color={color} size={size}/>
      },
      tabBarActiveTintColor:'#3498db',
      tabBarInactiveTintColor:'#95a5a6',
      tabBarStyle:{
        paddingBottom:8,
        height:60
      },
      headerShown:false
    })}
    >

    <Tabs.Screen name='index'/>
    <Tabs.Screen name='rooms'/>
    <Tabs.Screen name='bookings'/>
    <Tabs.Screen name='account'/>

    </Tabs>
  )
}

export default TabLayout

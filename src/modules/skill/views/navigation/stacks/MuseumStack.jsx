import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MuseumDetailsScreen from '../../components/screens/museum/MuseumDetailsScreen'

const Stack = createStackNavigator()

export default function MuseumStack() {
  return (
    <Stack.Navigator
      initialRouteName='museumDetailsScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7197b7',
        },
        headerTitleAlign: 'left',
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name='museumDetailsScreen'
        component={MuseumDetailsScreen}
        options={{ title: 'Detalles del museo',  }}
      />
    </Stack.Navigator>
  )
}
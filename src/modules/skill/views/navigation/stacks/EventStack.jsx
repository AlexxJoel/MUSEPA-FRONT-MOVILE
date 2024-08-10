import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import EventsListScreen from '../../components/screens/events/EventsListScreen'
import EventDetailsScreen from '../../components/screens/events/EventDetailsScreen'

const Stack = createNativeStackNavigator()

export default function EventStack() {
  return (
    <Stack.Navigator
      initialRouteName='eventsListScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7197b7',
        },
        headerTitleAlign: 'left',
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name='eventsListScreen'
        component={EventsListScreen}
        options={{ title: 'Eventos' }}
      />
      <Stack.Screen
        name='eventDetailsScreen'
        component={EventDetailsScreen}
        options={{ title: 'Detalles de evento' }}
      />
    </Stack.Navigator>
  )
}
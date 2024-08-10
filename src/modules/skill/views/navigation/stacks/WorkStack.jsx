import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WorksListScreen from '../../components/screens/works/WorksListScreen'
import WorkDetailsScreen from '../../components/screens/works/WorkDetailsScreen'

const Stack = createNativeStackNavigator()

export default function WorkStack() {
  return (
    <Stack.Navigator
      initialRouteName='worksListScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7197b7',
        },
        headerTitleAlign: 'left',
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name='worksListScreen'
        component={WorksListScreen}
        options={{ title: 'Obras' }}
      />
      <Stack.Screen
        name='workDetailsScreen'
        component={WorkDetailsScreen}
        options={{ title: 'Detalles de obra' }}
      />
    </Stack.Navigator>
  )
}
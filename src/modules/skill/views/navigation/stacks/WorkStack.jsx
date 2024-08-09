import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WorksListScreen from '../../components/screens/works/WorksListScreen'
import WorkDetailsScreen from '../../components/screens/works/WorkDetailsScreen'

const Stack = createStackNavigator()

export default function WorkStack() {
  return (
    <Stack.Navigator
      initialRouteName='worksListScreen'
      screenOptions={{
        headerMode: 'screen',
        headerTitleAlign: 'center'
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
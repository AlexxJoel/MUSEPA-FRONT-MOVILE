import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { getMuseumDetails } from '../../../controllers/SkillController'

const fetchMuseumDetails = async () => {
  try {
    const res = await getMuseumDetails();
    console.log(res)
  } catch (error) {
    console.error(error)
  }
}

export default function HomeScreen() {
  return (
    <View>
      <Text>{fetchMuseumDetails()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
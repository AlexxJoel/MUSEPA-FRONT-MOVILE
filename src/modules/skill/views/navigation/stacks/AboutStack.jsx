import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AboutScreen from "../../components/screens/AboutScreen";

import { Image, Text, View } from "react-native";
import GlobalStyles from "../../../../../../assets/styles/GlobalStyles";
import logoImage from '../../../../../../assets/images/LogoRelleno.png';

const Stack = createNativeStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator
            initialRouteName='aboutScreen'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#7197b7',
                },
                headerTitleAlign: 'left',
                headerTitle: () => (
                    <View style={GlobalStyles.headerContainer}>
                        <Image
                            source={logoImage}
                            style={GlobalStyles.headerLogo}
                        />
                        <Text style={GlobalStyles.headerTitle}>Acerca de</Text>
                    </View>
                ),
            }}
        >
            <Stack.Screen
                name='aboutScreen'
                component={AboutScreen}
            />
        </Stack.Navigator>
    )
}
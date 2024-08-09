import React from "react";
import { Image, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import GlobalStyles from "../../../../../../assets/styles/GlobalStyles";

import MuseumStack from "./MuseumStack";
import EventStack from "./EventStack";
import WorkStack from "./WorkStack";

import HomeScreen from "../../components/screens/HomeScreen";

import logoImage from '../../../../../../assets/images/LogoRelleno.png';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="homeScreen"
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
                        <Text style={GlobalStyles.headerTitle}>MUSEEPA</Text>
                    </View>
                ),
            }}
        >
            <Stack.Screen
                name='homeScreen'
                component={HomeScreen}
            />
            <Stack.Screen
                name='museumStack'
                component={MuseumStack}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='eventStack'
                component={EventStack}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='workStack'
                component={WorkStack}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
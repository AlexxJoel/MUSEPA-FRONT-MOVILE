import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import MuseumStack from "./MuseumStack";
import EventStack from "./EventStack";
import WorkStack from "./WorkStack";

import HomeScreen from "../../components/screens/HomeScreen";

import logoImage from '../../../../../../assets/images/logo.png';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="homeScreen"
            screenOptions={{
                headerMode: "screen",
                headerTitle: () => (
                    <View style={styles.headerContainer}>
                        <Image
                            source={logoImage}
                            style={styles.logo}
                        />
                        <Text style={styles.title}>Museepa</Text>
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

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 90,
        height: 45,
        resizeMode: 'contain',
        marginLeft: -30,
    },
    title: {
        marginLeft: -20,
        fontSize: 25,
        fontWeight: 'bold',
    },
});
